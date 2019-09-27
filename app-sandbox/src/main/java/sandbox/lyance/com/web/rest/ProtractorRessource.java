package sandbox.lyance.com.web.rest;

import org.apache.maven.plugin.MojoExecutionException;
import org.apache.maven.plugin.logging.Log;
import org.apache.maven.plugin.logging.SystemStreamLog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sandbox.lyance.com.domain.Command;
import sandbox.lyance.com.domain.Scenario;
import sandbox.lyance.com.repository.ScenarioRepository;
import sandbox.lyance.com.service.protractor.NgProtractor;
import sandbox.lyance.com.service.protractor.ProtractorService;

import java.io.File;

@RestController
@RequestMapping("/api")
public class ProtractorRessource {

    @Autowired
    private NgProtractor ngProtractor;

    @Autowired
    ScenarioRepository scenarioRepository;


    @GetMapping("/lancertest/{scenarioId}")
    public ResponseEntity<?> lancertest(@PathVariable Long scenarioId) throws MojoExecutionException {
        final Log log = new SystemStreamLog();

        Scenario scenario = scenarioRepository.findById(scenarioId).get();

        String filePath = "/home/hayder-pc/Documents/workspace/SandBox/app-sandbox/protractor/Scenarios/"+scenario.getId()+"conf.js";
        File configFile = new File(filePath);

        new ProtractorService(true, log).exec(new Command("protractor", configFile, false, false, ""));

        return new ResponseEntity<Void>(HttpStatus.OK);

    }
}


