package sandbox.lyance.com.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.github.dockerjava.api.DockerClient;
import com.github.dockerjava.api.command.DockerCmdExecFactory;
import com.github.dockerjava.api.model.Container;
import com.github.dockerjava.api.model.Info;
import com.github.dockerjava.core.DockerClientBuilder;
import com.github.dockerjava.netty.NettyDockerCmdExecFactory;
import sandbox.lyance.com.domain.Machine;
import sandbox.lyance.com.repository.MachineRepository;
import sandbox.lyance.com.web.rest.errors.BadRequestAlertException;
import sandbox.lyance.com.web.rest.util.HeaderUtil;
import sandbox.lyance.com.web.rest.util.PaginationUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing Machine.
 */

@Timed
@RestController
@RequestMapping("/api")
public class MachineResource {

    private final Logger log = LoggerFactory.getLogger(MachineResource.class);

    private static final String ENTITY_NAME = "sandboxMachine";

    private final MachineRepository machineRepository;

    public MachineResource(MachineRepository machineRepository) {
        this.machineRepository = machineRepository;
    }

    /**
     * POST  /machines : Create a new machine.
     *
     * @param machine the machine to create
     * @return the ResponseEntity with status 201 (Created) and with body the new machine, or with status 400 (Bad Request) if the machine has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/machines")
    @Timed
    public ResponseEntity<Machine> createMachine(@RequestBody Machine machine) throws URISyntaxException {
        log.debug("REST request to save Machine : {}", machine);
        if (machine.getId() != null) {
            throw new BadRequestAlertException("A new machine cannot already have an ID", ENTITY_NAME, "idexists");
        }
        machine = machineRepository.save(machine);

        if (machine.getAdresse() != null) {
            try {
                //DockerCmdExecFactory factory = new NettyDockerCmdExecFactory().withConnectTimeout(900000000);
                DockerClient dockerClient = DockerClientBuilder.getInstance("tcp://"+machine.getAdresse()+":2375").build();
                List<Container> containers = dockerClient.listContainersCmd().exec();


                List<String> objs = new ArrayList<>();
                Info info = dockerClient.infoCmd().exec();
                for (int i = 0; i < containers.size(); i++) {
                    objs.add(containers.get(i).getImage());
                    objs.add(containers.get(i).getStatus());
                    System.out.println("test " + objs);
                    machine.setContainerimage(objs.toString());
                }
                machine.setDockerdirec(info.getDockerRootDir());
                machine.setDriver(info.getDriver());
                machine.setMemototal(info.getMemTotal());
                machine.setMachinename(info.getName());
                machine.setNcpu(info.getNCPU());
                machine.setOpsystem(info.getOperatingSystem());
                machine.setOstype(info.getOsType());
                machineRepository.save(machine);

            } catch (Exception e) {
                log.error("Get Machine Info Exception" + e.getMessage());
            }
        }
        return ResponseEntity.created(new URI("/api/machines/" + machine.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, machine.getId().toString()))
            .body(machine);
    }

    /**
     * PUT  /machines : Updates an existing machine.
     *
     * @param machine the machine to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated machine,
     * or with status 400 (Bad Request) if the machine is not valid,
     * or with status 500 (Internal Server Error) if the machine couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/machines")
    @Timed
    public ResponseEntity<Machine> updateMachine(@RequestBody Machine machine) throws URISyntaxException {
        log.debug("REST request to update Machine : {}", machine);
        if (machine.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Machine result = machineRepository.save(machine);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, machine.getId().toString()))
            .body(result);
    }

    /**
     * GET  /machines : get all the machines.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of machines in body
     */
    @GetMapping("/machines")
    @Timed
    public ResponseEntity<List<Machine>> getAllMachines(Pageable pageable) {
        log.debug("REST request to get a page of Machines");
        Page<Machine> page = machineRepository.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/machines");
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * GET  /machines/:id : get the "id" machine.
     *
     * @param id the id of the machine to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the machine, or with status 404 (Not Found)
     */
    @GetMapping("/machines/{id}")
    @Timed
    public ResponseEntity<Machine> getMachine(@PathVariable Long id) {
        log.debug("REST request to get Machine : {}", id);
        Optional<Machine> machine = machineRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(machine);
    }

    /**
     * DELETE  /machines/:id : delete the "id" machine.
     *
     * @param id the id of the machine to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/machines/{id}")
    @Timed
    public ResponseEntity<Void> deleteMachine(@PathVariable Long id) {
        log.debug("REST request to delete Machine : {}", id);

        machineRepository.deleteById(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

}
