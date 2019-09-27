package sandbox.lyance.com.web.rest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.multipart.MultipartFile;
import sandbox.lyance.com.domain.Script;
import sandbox.lyance.com.repository.ScriptRepository;
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

import javax.validation.Valid;
import java.io.File;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing Script.
 */
@RestController
@RequestMapping("/api")
public class ScriptResource {

    private final Logger log = LoggerFactory.getLogger(ScriptResource.class);

    private static final String ENTITY_NAME = "sandboxScript";

    private final ScriptRepository scriptRepository;


    public ScriptResource(ScriptRepository scriptRepository) {
        this.scriptRepository = scriptRepository;
    }

    /**
     * POST  /scripts : Create a new script.
     *
     * @param script the script to create
     * @return the ResponseEntity with status 201 (Created) and with body the new script, or with status 400 (Bad Request) if the script has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */

    @Autowired
    FileService fileservice;
    List<String> files=new ArrayList<String>();
   final Path rootLocation = Paths.get("/home/hanene/Documents/workspace/sandboxv2/sandbox/app-sandbox/protractor");

    @CrossOrigin(origins = "http://localhost:4200")



    @PostMapping("/upload")
    public ResponseEntity<String> handleFileUpload(@RequestParam("file") MultipartFile file, @RequestParam("nom_script") String nom_script, @RequestParam("description") String description) throws IOException {

        String message = "";
        try {
            fileservice.upd(file,nom_script,description);

            message = "You successfully uploaded " + file.getOriginalFilename() + "!";
            return ResponseEntity.ok()
                .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME,"HELLO"))
                .body("");


        } catch (Exception e) {
            message = "Fail to upload file" + file.getOriginalFilename() + "!";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(message);
        }
    }

    //    @PostMapping("/scripts")
//    public ResponseEntity<Script> createScript(@Valid @RequestBody Script script) throws URISyntaxException {
//        log.debug("REST request to save Script : {}", script);
//        if (script.getId() != null) {
//            throw new BadRequestAlertException("A new script cannot already have an ID", ENTITY_NAME, "idexists");
//        }
//        Script result = scriptRepository.save(script);
//        return ResponseEntity.created(new URI("/api/scripts/" + result.getId()))
//            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
//            .body(result);
//    }

    /**
     * PUT  /scripts : Updates an existing script.
     *
     * @param script the script to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated script,
     * or with status 400 (Bad Request) if the script is not valid,
     * or with status 500 (Internal Server Error) if the script couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */


    @PutMapping("/scripts")
    public ResponseEntity<Script> updateScript(@Valid @RequestBody Script script) throws URISyntaxException, IOException {
        log.debug("REST request to update Script : {}", script);
        if (script.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Script result = scriptRepository.save(script);
        Path fileToDeletePath = Paths.get("/home/hayder-pc/Documents/workspace/SandBox/app-sandbox/protractor",script.getNom_fichier());
     Files.delete(fileToDeletePath);
        Path filetoupdate=Paths.get("/home/hayder-pc/Documents/workspace/SandBox/app-sandbox/protractor",script.getNom_fichier());
        Files.createFile(filetoupdate);
        Files.write(filetoupdate,script.getContenu());

        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, script.getId().toString()))
            .body(result);
    }

    /**
     * GET  /scripts : get all the scripts.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of scripts in body
     */
    @GetMapping("/scripts")
    public ResponseEntity<List<Script>> getAllScripts(Pageable pageable) {
        log.debug("REST request to get a page of Scripts");
        Page<Script> page = scriptRepository.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/scripts");
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * GET  /scripts/:id : get the "id" script.
     *
     * @param id the id of the script to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the script, or with status 404 (Not Found)
     */
    @GetMapping("/scripts/{id}")
    public ResponseEntity<Script> getScript(@PathVariable Long id) {
        log.debug("REST request to get Script : {}", id);
        Optional<Script> script = scriptRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(script);
    }

    /**
     * DELETE  /scripts/:id : delete the "id" script.
     *
     * @param id the id of the script to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/scripts/{id}/{nom}")
    public ResponseEntity<Void> deleteScript(@PathVariable Long id, @PathVariable String nom) throws IOException {

        log.debug("REST request to delete Script : {}", id);

   Path fileToDeletePath = Paths.get("/home/hayder-pc/Documents/workspace/SandBox/app-sandbox/protractor",nom);
   Files.delete(fileToDeletePath);
        scriptRepository.deleteById(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }


    @PutMapping("/scenario")
    public ResponseEntity<Script> updateScenario(@Valid @RequestBody Script script) throws URISyntaxException, IOException {
        log.debug("REST request to update Script : {}", script);
        if (script.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }

        Path filetoupdate=Paths.get("/home/hayder-pc/Documents/workspace/SandBox/app-sandbox/protractor/Scenarios/" +"new_"+script.getNom_fichier());
        Files.createFile(filetoupdate);
        Files.write(filetoupdate,script.getContenu());

        Script newscript = new Script();
        newscript.setNom_fichier("new_" + script.getNom_fichier());
        newscript.setContenu(Files.readAllBytes(filetoupdate));
        newscript.setNom_script("new_" + script.getNom_script());
        newscript.setDescription(script.getDescription());
        Script result= scriptRepository.save(newscript);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, script.getId().toString()))
            .body(result);

    }


}


