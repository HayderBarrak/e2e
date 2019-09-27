package sandbox.lyance.com.web.rest;

import sandbox.lyance.com.SandboxApp;

import sandbox.lyance.com.domain.Machine;
import sandbox.lyance.com.repository.MachineRepository;
import sandbox.lyance.com.web.rest.errors.ExceptionTranslator;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.Validator;

import javax.persistence.EntityManager;
import java.util.List;


import static sandbox.lyance.com.web.rest.TestUtil.createFormattingConversionService;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Test class for the MachineResource REST controller.
 *
 * @see MachineResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = SandboxApp.class)
public class MachineResourceIntTest {

    private static final String DEFAULT_MACHINENAME = "AAAAAAAAAA";
    private static final String UPDATED_MACHINENAME = "BBBBBBBBBB";

    private static final String DEFAULT_DRIVER = "AAAAAAAAAA";
    private static final String UPDATED_DRIVER = "BBBBBBBBBB";

    private static final String DEFAULT_DOCKERDIREC = "AAAAAAAAAA";
    private static final String UPDATED_DOCKERDIREC = "BBBBBBBBBB";

    private static final Long DEFAULT_MEMOTOTAL = 1L;
    private static final Long UPDATED_MEMOTOTAL = 2L;

    private static final Integer DEFAULT_NCPU = 1;
    private static final Integer UPDATED_NCPU = 2;

    private static final String DEFAULT_OSTYPE = "AAAAAAAAAA";
    private static final String UPDATED_OSTYPE = "BBBBBBBBBB";

    private static final String DEFAULT_OPSYSTEM = "AAAAAAAAAA";
    private static final String UPDATED_OPSYSTEM = "BBBBBBBBBB";

    @Autowired
    private MachineRepository machineRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    @Autowired
    private Validator validator;

    private MockMvc restMachineMockMvc;

    private Machine machine;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final MachineResource machineResource = new MachineResource(machineRepository);
        this.restMachineMockMvc = MockMvcBuilders.standaloneSetup(machineResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter)
            .setValidator(validator).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Machine createEntity(EntityManager em) {
        Machine machine = new Machine()
            .machinename(DEFAULT_MACHINENAME)
            .driver(DEFAULT_DRIVER)
            .dockerdirec(DEFAULT_DOCKERDIREC)
            .memototal(DEFAULT_MEMOTOTAL)
            .ncpu(DEFAULT_NCPU)
            .ostype(DEFAULT_OSTYPE)
            .opsystem(DEFAULT_OPSYSTEM);
        return machine;
    }

    @Before
    public void initTest() {
        machine = createEntity(em);
    }

    @Test
    @Transactional
    public void createMachine() throws Exception {
        int databaseSizeBeforeCreate = machineRepository.findAll().size();

        // Create the Machine
        restMachineMockMvc.perform(post("/api/machines")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(machine)))
            .andExpect(status().isCreated());

        // Validate the Machine in the database
        List<Machine> machineList = machineRepository.findAll();
        assertThat(machineList).hasSize(databaseSizeBeforeCreate + 1);
        Machine testMachine = machineList.get(machineList.size() - 1);
        assertThat(testMachine.getMachinename()).isEqualTo(DEFAULT_MACHINENAME);
        assertThat(testMachine.getDriver()).isEqualTo(DEFAULT_DRIVER);
        assertThat(testMachine.getDockerdirec()).isEqualTo(DEFAULT_DOCKERDIREC);
        assertThat(testMachine.getMemototal()).isEqualTo(DEFAULT_MEMOTOTAL);
        assertThat(testMachine.getNcpu()).isEqualTo(DEFAULT_NCPU);
        assertThat(testMachine.getOstype()).isEqualTo(DEFAULT_OSTYPE);
        assertThat(testMachine.getOpsystem()).isEqualTo(DEFAULT_OPSYSTEM);
    }

    @Test
    @Transactional
    public void createMachineWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = machineRepository.findAll().size();

        // Create the Machine with an existing ID
        machine.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restMachineMockMvc.perform(post("/api/machines")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(machine)))
            .andExpect(status().isBadRequest());

        // Validate the Machine in the database
        List<Machine> machineList = machineRepository.findAll();
        assertThat(machineList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void getAllMachines() throws Exception {
        // Initialize the database
        machineRepository.saveAndFlush(machine);

        // Get all the machineList
        restMachineMockMvc.perform(get("/api/machines?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(machine.getId().intValue())))
            .andExpect(jsonPath("$.[*].machinename").value(hasItem(DEFAULT_MACHINENAME.toString())))
            .andExpect(jsonPath("$.[*].driver").value(hasItem(DEFAULT_DRIVER.toString())))
            .andExpect(jsonPath("$.[*].dockerdirec").value(hasItem(DEFAULT_DOCKERDIREC.toString())))
            .andExpect(jsonPath("$.[*].memototal").value(hasItem(DEFAULT_MEMOTOTAL.intValue())))
            .andExpect(jsonPath("$.[*].ncpu").value(hasItem(DEFAULT_NCPU)))
            .andExpect(jsonPath("$.[*].ostype").value(hasItem(DEFAULT_OSTYPE.toString())))
            .andExpect(jsonPath("$.[*].opsystem").value(hasItem(DEFAULT_OPSYSTEM.toString())));
    }
    
    @Test
    @Transactional
    public void getMachine() throws Exception {
        // Initialize the database
        machineRepository.saveAndFlush(machine);

        // Get the machine
        restMachineMockMvc.perform(get("/api/machines/{id}", machine.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(machine.getId().intValue()))
            .andExpect(jsonPath("$.machinename").value(DEFAULT_MACHINENAME.toString()))
            .andExpect(jsonPath("$.driver").value(DEFAULT_DRIVER.toString()))
            .andExpect(jsonPath("$.dockerdirec").value(DEFAULT_DOCKERDIREC.toString()))
            .andExpect(jsonPath("$.memototal").value(DEFAULT_MEMOTOTAL.intValue()))
            .andExpect(jsonPath("$.ncpu").value(DEFAULT_NCPU))
            .andExpect(jsonPath("$.ostype").value(DEFAULT_OSTYPE.toString()))
            .andExpect(jsonPath("$.opsystem").value(DEFAULT_OPSYSTEM.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingMachine() throws Exception {
        // Get the machine
        restMachineMockMvc.perform(get("/api/machines/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateMachine() throws Exception {
        // Initialize the database
        machineRepository.saveAndFlush(machine);

        int databaseSizeBeforeUpdate = machineRepository.findAll().size();

        // Update the machine
        Machine updatedMachine = machineRepository.findById(machine.getId()).get();
        // Disconnect from session so that the updates on updatedMachine are not directly saved in db
        em.detach(updatedMachine);
        updatedMachine
            .machinename(UPDATED_MACHINENAME)
            .driver(UPDATED_DRIVER)
            .dockerdirec(UPDATED_DOCKERDIREC)
            .memototal(UPDATED_MEMOTOTAL)
            .ncpu(UPDATED_NCPU)
            .ostype(UPDATED_OSTYPE)
            .opsystem(UPDATED_OPSYSTEM);

        restMachineMockMvc.perform(put("/api/machines")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedMachine)))
            .andExpect(status().isOk());

        // Validate the Machine in the database
        List<Machine> machineList = machineRepository.findAll();
        assertThat(machineList).hasSize(databaseSizeBeforeUpdate);
        Machine testMachine = machineList.get(machineList.size() - 1);
        assertThat(testMachine.getMachinename()).isEqualTo(UPDATED_MACHINENAME);
        assertThat(testMachine.getDriver()).isEqualTo(UPDATED_DRIVER);
        assertThat(testMachine.getDockerdirec()).isEqualTo(UPDATED_DOCKERDIREC);
        assertThat(testMachine.getMemototal()).isEqualTo(UPDATED_MEMOTOTAL);
        assertThat(testMachine.getNcpu()).isEqualTo(UPDATED_NCPU);
        assertThat(testMachine.getOstype()).isEqualTo(UPDATED_OSTYPE);
        assertThat(testMachine.getOpsystem()).isEqualTo(UPDATED_OPSYSTEM);
    }

    @Test
    @Transactional
    public void updateNonExistingMachine() throws Exception {
        int databaseSizeBeforeUpdate = machineRepository.findAll().size();

        // Create the Machine

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restMachineMockMvc.perform(put("/api/machines")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(machine)))
            .andExpect(status().isBadRequest());

        // Validate the Machine in the database
        List<Machine> machineList = machineRepository.findAll();
        assertThat(machineList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteMachine() throws Exception {
        // Initialize the database
        machineRepository.saveAndFlush(machine);

        int databaseSizeBeforeDelete = machineRepository.findAll().size();

        // Get the machine
        restMachineMockMvc.perform(delete("/api/machines/{id}", machine.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<Machine> machineList = machineRepository.findAll();
        assertThat(machineList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Machine.class);
        Machine machine1 = new Machine();
        machine1.setId(1L);
        Machine machine2 = new Machine();
        machine2.setId(machine1.getId());
        assertThat(machine1).isEqualTo(machine2);
        machine2.setId(2L);
        assertThat(machine1).isNotEqualTo(machine2);
        machine1.setId(null);
        assertThat(machine1).isNotEqualTo(machine2);
    }
}
