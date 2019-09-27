package sandbox.lyance.com.web.rest;

import com.codahale.metrics.annotation.Timed;
import javafx.application.Platform;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpHeaders;
import sandbox.lyance.com.domain.Plateforme;
import sandbox.lyance.com.repository.PlateformeRepository;
import sandbox.lyance.com.web.rest.errors.BadRequestAlertException;
import sandbox.lyance.com.web.rest.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.net.*;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import sandbox.lyance.com.web.rest.util.PaginationUtil;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * REST controller for managing Plateforme.
 */
@RestController
@RequestMapping("/api")
public class PlateformeResource {

    private final Logger log = LoggerFactory.getLogger(PlateformeResource.class);

    private static final String ENTITY_NAME = "sandboxPlateforme";

    private final PlateformeRepository plateformeRepository;

    public PlateformeResource(PlateformeRepository plateformeRepository) {
        this.plateformeRepository = plateformeRepository;
    }

    /**
     * POST  /plateformes : Create a new plateforme.
     *
     * @param plateforme the plateforme to create
     * @return the ResponseEntity with status 201 (Created) and with body the new plateforme, or with status 400 (Bad Request) if the plateforme has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/plateformes")
    @Timed
    public ResponseEntity<Plateforme> createPlateforme(@RequestBody Plateforme plateforme) throws URISyntaxException {
        log.debug("REST request to save Plateforme : {}", plateforme);
        if (plateforme.getId() != null) {
            throw new BadRequestAlertException("A new plateforme cannot already have an ID", ENTITY_NAME, "idexists");
        }

            Plateforme result = plateformeRepository.save(plateforme);
            return ResponseEntity.created(new URI("/api/plateformes/" + result.getId()))
                .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
                .body(result);


    }

    /**
     * PUT  /plateformes : Updates an existing plateforme.
     *
     * @param plateforme the plateforme to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated plateforme,
     * or with status 400 (Bad Request) if the plateforme is not valid,
     * or with status 500 (Internal Server Error) if the plateforme couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/plateformes")
    @Timed
    public ResponseEntity<Plateforme> updatePlateforme(@RequestBody Plateforme plateforme) throws URISyntaxException {
        log.debug("REST request to update Plateforme : {}", plateforme);
        if (plateforme.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Plateforme result = plateformeRepository.save(plateforme);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, plateforme.getId().toString()))
            .body(result);
    }

    /**
     * GET  /plateformes : get all the plateformes.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of plateformes in body
     */
    @GetMapping("/plateformes")
    @Timed
    public  ResponseEntity<List<Plateforme>> getAllPlateformes(Pageable pageable) {

        log.debug("REST request to get all Plateformes");
        Page<Plateforme> page = plateformeRepository.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/plateformes");
        return ResponseEntity.ok().headers(headers).body(page.getContent());

    }

    /**
     * GET  /plateformes/:id : get the "id" plateforme.
     *
     * @param id the id of the plateforme to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the plateforme, or with status 404 (Not Found)
     */
    @GetMapping("/plateformes/{id}")
    @Timed
    public ResponseEntity<Plateforme> getPlateforme(@PathVariable Long id) {
        log.debug("REST request to get Plateforme : {}", id);
        Optional<Plateforme> plateforme = plateformeRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(plateforme);
    }

    /**
     * DELETE  /plateformes/:id : delete the "id" plateforme.
     *
     * @param id the id of the plateforme to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/plateformes/{id}")
    @Timed
    public ResponseEntity<Void> deletePlateforme(@PathVariable Long id) {
        log.debug("REST request to delete Plateforme : {}", id);
        plateformeRepository.deleteById(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }









}
