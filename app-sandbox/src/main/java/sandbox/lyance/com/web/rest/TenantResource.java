package sandbox.lyance.com.web.rest;

import com.codahale.metrics.annotation.Timed;
import sandbox.lyance.com.domain.Tenant;
import sandbox.lyance.com.repository.TenantRepository;
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

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing Tenant.
 */
@RestController
@RequestMapping("/api")
public class TenantResource {

    private final Logger log = LoggerFactory.getLogger(TenantResource.class);

    private static final String ENTITY_NAME = "sandboxTenant";

    private final TenantRepository tenantRepository;

    public TenantResource(TenantRepository tenantRepository) {
        this.tenantRepository = tenantRepository;
    }

    /**
     * POST  /tenants : Create a new tenant.
     *
     * @param tenant the tenant to create
     * @return the ResponseEntity with status 201 (Created) and with body the new tenant, or with status 400 (Bad Request) if the tenant has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/tenants")
    @Timed
    public ResponseEntity<Tenant> createTenant(@RequestBody Tenant tenant) throws URISyntaxException {
        log.debug("REST request to save Tenant : {}", tenant);
        if (tenant.getId() != null) {
            throw new BadRequestAlertException("A new tenant cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Tenant result = tenantRepository.save(tenant);
        return ResponseEntity.created(new URI("/api/tenants/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /tenants : Updates an existing tenant.
     *
     * @param tenant the tenant to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated tenant,
     * or with status 400 (Bad Request) if the tenant is not valid,
     * or with status 500 (Internal Server Error) if the tenant couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/tenants")
    @Timed
    public ResponseEntity<Tenant> updateTenant(@RequestBody Tenant tenant) throws URISyntaxException {
        log.debug("REST request to update Tenant : {}", tenant);
        if (tenant.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Tenant result = tenantRepository.save(tenant);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, tenant.getId().toString()))
            .body(result);
    }

    /**
     * GET  /tenants : get all the tenants.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of tenants in body
     */
    @GetMapping("/tenants")
    @Timed
    public ResponseEntity<List<Tenant>> getAllTenants(Pageable pageable) {
        log.debug("REST request to get a page of Tenants");
        Page<Tenant> page = tenantRepository.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/tenants");
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * GET  /tenants/:id : get the "id" tenant.
     *
     * @param id the id of the tenant to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the tenant, or with status 404 (Not Found)
     */
    @GetMapping("/tenants/{id}")
    @Timed
    public ResponseEntity<Tenant> getTenant(@PathVariable Long id) {
        log.debug("REST request to get Tenant : {}", id);
        Optional<Tenant> tenant = tenantRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(tenant);
    }

    /**
     * DELETE  /tenants/:id : delete the "id" tenant.
     *
     * @param id the id of the tenant to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/tenants/{id}")
    @Timed
    public ResponseEntity<Void> deleteTenant(@PathVariable Long id) {
        log.debug("REST request to delete Tenant : {}", id);

        tenantRepository.deleteById(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
