package sandbox.lyance.com.web.rest;

import com.codahale.metrics.annotation.Timed;
import org.apache.commons.io.FileUtils;
import sandbox.lyance.com.domain.Scenario;
import sandbox.lyance.com.repository.ScenarioRepository;
import sandbox.lyance.com.web.rest.errors.BadRequestAlertException;
import sandbox.lyance.com.web.rest.util.HeaderUtil;
import sandbox.lyance.com.web.rest.util.PaginationUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

import static java.nio.file.StandardCopyOption.REPLACE_EXISTING;

/**
 * REST controller for managing Scenario.
 */
@RestController
@RequestMapping("/api")
public class ScenarioResource {

    private final Logger log = LoggerFactory.getLogger(ScenarioResource.class);

    private static final String ENTITY_NAME = "sandboxScenario";

    private final ScenarioRepository scenarioRepository;

    public ScenarioResource(ScenarioRepository scenarioRepository) {
        this.scenarioRepository = scenarioRepository;
    }

    /**
     * POST  /scenarios : Create a new scenario.
     *
     * @param scenario the scenario to create
     * @return the ResponseEntity with status 201 (Created) and with body the new scenario, or with status 400 (Bad Request) if the scenario has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/scenarios")
    @Timed
    public ResponseEntity<Scenario> createScenario(@RequestBody Scenario scenario) throws URISyntaxException, IOException {
        log.debug("REST request to save Scenario : {}", scenario);
        if (scenario.getId() != null) {
            throw new BadRequestAlertException("A new scenario cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Scenario result = scenarioRepository.save(scenario);
        System.out.println(result.getId());
//        File newFile = new File("/home/hayder-pc/Documents/workspace/SandBox/app-sandbox/protractor/ConfigFile/conf.js");
//        File destfile = new File("/home/hayder-pc/Documents/workspace/SandBox/app-sandbox/protractor/Scenarios");
//
//        FileUtils.copyFileToDirectory(newFile, destfile);
//
//        Path source = Paths.get("/home/hayder-pc/Documents/workspace/SandBox/app-sandbox/protractor/Scenarios");
//        Files.move(source, source.resolveSibling(result.getId()+"conf.js"));



        Path source = Paths.get("/home/hayder-pc/Documents/workspace/SandBox/app-sandbox/protractor/ConfigFile/conf.js");
        Path newdir = Paths.get("/home/hayder-pc/Documents/workspace/SandBox/app-sandbox/protractor/Scenarios");
        Files.copy(source, newdir.resolve(result.getId()+""+source.getFileName()));







        return ResponseEntity.created(new URI("/api/scenarios/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /scenarios : Updates an existing scenario.
     *
     * @param scenario the scenario to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated scenario,
     * or with status 400 (Bad Request) if the scenario is not valid,
     * or with status 500 (Internal Server Error) if the scenario couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/scenarios")
    @Timed
    public ResponseEntity<Scenario> updateScenario(@RequestBody Scenario scenario) throws URISyntaxException {
        log.debug("REST request to update Scenario : {}", scenario);
        if (scenario.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Scenario result = scenarioRepository.save(scenario);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, scenario.getId().toString()))
            .body(result);
    }

    /**
     * GET  /scenarios : get all the scenarios.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of scenarios in body
     */
    @GetMapping("/scenarios")
    @Timed
    public ResponseEntity<List<Scenario>> getAllScenarios(Pageable pageable) {
        log.debug("REST request to get a page of Scenarios");
        Page<Scenario> page = scenarioRepository.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/scenarios");
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * GET  /scenarios/:id : get the "id" scenario.
     *
     * @param id the id of the scenario to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the scenario, or with status 404 (Not Found)
     */
    @GetMapping("/scenarios/{id}")
    @Timed
    public ResponseEntity<Scenario> getScenario(@PathVariable Long id) {
        log.debug("REST request to get Scenario : {}", id);
        Optional<Scenario> scenario = scenarioRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(scenario);
    }

    /**
     * DELETE  /scenarios/:id : delete the "id" scenario.
     *
     * @param id the id of the scenario to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/scenarios/{id}")
    @Timed
    public ResponseEntity<Void> deleteScenario(@PathVariable Long id) {
        log.debug("REST request to delete Scenario : {}", id);

        scenarioRepository.deleteById(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
