package sandbox.lyance.com.web.rest;

import sandbox.lyance.com.SandboxApp;

import sandbox.lyance.com.domain.Plateforme;
import sandbox.lyance.com.repository.PlateformeRepository;
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
 * Test class for the PlateformeResource REST controller.
 *
 * @see PlateformeResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = SandboxApp.class)
public class PlateformeResourceIntTest {

    private static final String DEFAULT_ADRESSE = "AAAAAAAAAA";
    private static final String UPDATED_ADRESSE = "BBBBBBBBBB";

    private static final String DEFAULT_LOGIN = "AAAAAAAAAA";
    private static final String UPDATED_LOGIN = "BBBBBBBBBB";

    private static final String DEFAULT_NOM = "AAAAAAAAAA";
    private static final String UPDATED_NOM = "BBBBBBBBBB";

    private static final String DEFAULT_PWD = "AAAAAAAAAA";
    private static final String UPDATED_PWD = "BBBBBBBBBB";

    @Autowired
    private PlateformeRepository plateformeRepository;

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

    private MockMvc restPlateformeMockMvc;

    private Plateforme plateforme;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final PlateformeResource plateformeResource = new PlateformeResource(plateformeRepository);
        this.restPlateformeMockMvc = MockMvcBuilders.standaloneSetup(plateformeResource)
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
    public static Plateforme createEntity(EntityManager em) {
        Plateforme plateforme = new Plateforme()
            .adresse(DEFAULT_ADRESSE)
            .login(DEFAULT_LOGIN)
            .nom(DEFAULT_NOM)
            .pwd(DEFAULT_PWD);
        return plateforme;
    }

    @Before
    public void initTest() {
        plateforme = createEntity(em);
    }

    @Test
    @Transactional
    public void createPlateforme() throws Exception {
        int databaseSizeBeforeCreate = plateformeRepository.findAll().size();

        // Create the Plateforme
        restPlateformeMockMvc.perform(post("/api/plateformes")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(plateforme)))
            .andExpect(status().isCreated());

        // Validate the Plateforme in the database
        List<Plateforme> plateformeList = plateformeRepository.findAll();
        assertThat(plateformeList).hasSize(databaseSizeBeforeCreate + 1);
        Plateforme testPlateforme = plateformeList.get(plateformeList.size() - 1);
        assertThat(testPlateforme.getAdresse()).isEqualTo(DEFAULT_ADRESSE);
        assertThat(testPlateforme.getLogin()).isEqualTo(DEFAULT_LOGIN);
        assertThat(testPlateforme.getNom()).isEqualTo(DEFAULT_NOM);
        assertThat(testPlateforme.getPwd()).isEqualTo(DEFAULT_PWD);
    }

    @Test
    @Transactional
    public void createPlateformeWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = plateformeRepository.findAll().size();

        // Create the Plateforme with an existing ID
        plateforme.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restPlateformeMockMvc.perform(post("/api/plateformes")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(plateforme)))
            .andExpect(status().isBadRequest());

        // Validate the Plateforme in the database
        List<Plateforme> plateformeList = plateformeRepository.findAll();
        assertThat(plateformeList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void getAllPlateformes() throws Exception {
        // Initialize the database
        plateformeRepository.saveAndFlush(plateforme);

        // Get all the plateformeList
        restPlateformeMockMvc.perform(get("/api/plateformes?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(plateforme.getId().intValue())))
            .andExpect(jsonPath("$.[*].adresse").value(hasItem(DEFAULT_ADRESSE.toString())))
            .andExpect(jsonPath("$.[*].login").value(hasItem(DEFAULT_LOGIN.toString())))
            .andExpect(jsonPath("$.[*].nom").value(hasItem(DEFAULT_NOM.toString())))
            .andExpect(jsonPath("$.[*].pwd").value(hasItem(DEFAULT_PWD.toString())));
    }
    
    @Test
    @Transactional
    public void getPlateforme() throws Exception {
        // Initialize the database
        plateformeRepository.saveAndFlush(plateforme);

        // Get the plateforme
        restPlateformeMockMvc.perform(get("/api/plateformes/{id}", plateforme.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(plateforme.getId().intValue()))
            .andExpect(jsonPath("$.adresse").value(DEFAULT_ADRESSE.toString()))
            .andExpect(jsonPath("$.login").value(DEFAULT_LOGIN.toString()))
            .andExpect(jsonPath("$.nom").value(DEFAULT_NOM.toString()))
            .andExpect(jsonPath("$.pwd").value(DEFAULT_PWD.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingPlateforme() throws Exception {
        // Get the plateforme
        restPlateformeMockMvc.perform(get("/api/plateformes/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updatePlateforme() throws Exception {
        // Initialize the database
        plateformeRepository.saveAndFlush(plateforme);

        int databaseSizeBeforeUpdate = plateformeRepository.findAll().size();

        // Update the plateforme
        Plateforme updatedPlateforme = plateformeRepository.findById(plateforme.getId()).get();
        // Disconnect from session so that the updates on updatedPlateforme are not directly saved in db
        em.detach(updatedPlateforme);
        updatedPlateforme
            .adresse(UPDATED_ADRESSE)
            .login(UPDATED_LOGIN)
            .nom(UPDATED_NOM)
            .pwd(UPDATED_PWD);

        restPlateformeMockMvc.perform(put("/api/plateformes")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedPlateforme)))
            .andExpect(status().isOk());

        // Validate the Plateforme in the database
        List<Plateforme> plateformeList = plateformeRepository.findAll();
        assertThat(plateformeList).hasSize(databaseSizeBeforeUpdate);
        Plateforme testPlateforme = plateformeList.get(plateformeList.size() - 1);
        assertThat(testPlateforme.getAdresse()).isEqualTo(UPDATED_ADRESSE);
        assertThat(testPlateforme.getLogin()).isEqualTo(UPDATED_LOGIN);
        assertThat(testPlateforme.getNom()).isEqualTo(UPDATED_NOM);
        assertThat(testPlateforme.getPwd()).isEqualTo(UPDATED_PWD);
    }

    @Test
    @Transactional
    public void updateNonExistingPlateforme() throws Exception {
        int databaseSizeBeforeUpdate = plateformeRepository.findAll().size();

        // Create the Plateforme

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restPlateformeMockMvc.perform(put("/api/plateformes")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(plateforme)))
            .andExpect(status().isBadRequest());

        // Validate the Plateforme in the database
        List<Plateforme> plateformeList = plateformeRepository.findAll();
        assertThat(plateformeList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deletePlateforme() throws Exception {
        // Initialize the database
        plateformeRepository.saveAndFlush(plateforme);

        int databaseSizeBeforeDelete = plateformeRepository.findAll().size();

        // Get the plateforme
        restPlateformeMockMvc.perform(delete("/api/plateformes/{id}", plateforme.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<Plateforme> plateformeList = plateformeRepository.findAll();
        assertThat(plateformeList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Plateforme.class);
        Plateforme plateforme1 = new Plateforme();
        plateforme1.setId(1L);
        Plateforme plateforme2 = new Plateforme();
        plateforme2.setId(plateforme1.getId());
        assertThat(plateforme1).isEqualTo(plateforme2);
        plateforme2.setId(2L);
        assertThat(plateforme1).isNotEqualTo(plateforme2);
        plateforme1.setId(null);
        assertThat(plateforme1).isNotEqualTo(plateforme2);
    }
}
