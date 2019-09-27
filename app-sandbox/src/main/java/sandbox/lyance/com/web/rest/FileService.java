package sandbox.lyance.com.web.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import sandbox.lyance.com.domain.Script;
import sandbox.lyance.com.repository.ScriptRepository;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;


@Service
public class FileService {

    @Autowired
    private final ScriptRepository scriptRepository;

    public FileService(ScriptRepository scriptRepository) {
        this.scriptRepository = scriptRepository;
    }

  final Path rootLocation = Paths.get("/home/hayder-pc/Documents/workspace/SandBox/app-sandbox/protractor");


    public void upd(MultipartFile file, String nom_script, String descriprtion) throws IOException {
        Script script = new Script();
        try {

           Files.copy(file.getInputStream(), this.rootLocation.resolve(file.getOriginalFilename()));
                   script.setNom_fichier(file.getOriginalFilename());
                   script.setContenu(file.getBytes());
                   script.setNom_script(nom_script);
                   script.setDescription(descriprtion);

            scriptRepository.save(script);

        } catch (Exception e) {
            throw new RuntimeException("FAIL!");
        }

    }




}
