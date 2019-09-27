package sandbox.lyance.com.web.rest;


import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sandbox.lyance.com.domain.FileAtrr;
import sandbox.lyance.com.domain.*;
import sandbox.lyance.com.repository.MachineRepository;
import sandbox.lyance.com.repository.ScenarioRepository;
import sandbox.lyance.com.repository.ScriptRepository;
import sandbox.lyance.com.service.PlatformService;
import sandbox.lyance.com.service.dto.PlatformDTO;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/api")
public class ParseRessource {

    @Autowired
    private  FileAtrr fileAtrr;

    private final PlatformService platformService;

    public ParseRessource(PlatformService platformService) {
        this.platformService = platformService;
    }

    @Autowired
    MachineRepository machineRepository;
    @Autowired
    ScriptRepository scriptRepository;
    @Autowired
    ScenarioRepository scenarioRepository;

    @GetMapping("/parsefile/{platformId}/{machId}/{scriptId}/{ScenarioId}/{login}")
    public ResponseEntity <?> Parsefiletest(@PathVariable Long platformId ,@PathVariable Long machId, @PathVariable Long scriptId ,@PathVariable Long ScenarioId,@PathVariable String login) throws IOException {



//        File newFile = new File("/home/hayder-pc/Documents/workspace/SandBox/app-sandbox/protractor/ConfigFile/conf.js");
//        File destfile = new File("/home/hayder-pc/Documents/workspace/SandBox/app-sandbox/protractor/Scenarios");
//
//        FileUtils.copyFileToDirectory(newFile, destfile);


        PlatformDTO platform = platformService.findOne(platformId).get();
        Machine machine = machineRepository.findById(machId).get();
        Script script = scriptRepository.findById(scriptId).get();
        Scenario scenario = scenarioRepository.findById(ScenarioId).get();

        String filePath2="/home/hayder-pc/Documents/workspace/SandBox/app-sandbox/protractor/"+script.getNom_fichier();
        File result2 = fileAtrr.modifyFile(filePath2,"\\{agent\\}",login,new File(filePath2));


        String filePath="/home/hayder-pc/Documents/workspace/SandBox/app-sandbox/protractor/Scenarios/"+scenario.getId()+"conf.js";

        File result = fileAtrr.modifyFile(filePath,"\\{baseUrl\\}",platform.getAdresse(),new File(filePath));
         result = fileAtrr.modifyFile(filePath,"\\{seleniumAddress\\}",machine.getAdresse(),result);
        result = fileAtrr.modifyFile(filePath,"\\{specs\\}",script.getNom_fichier(),result);

        return new ResponseEntity<Void>(HttpStatus.OK);

    }



}
