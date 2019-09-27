package sandbox.lyance.com.web.rest;

import com.jcraft.jsch.JSchException;
import com.jcraft.jsch.SftpException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import sandbox.lyance.com.service.IRemoteTransferFile;

import java.io.File;
import java.io.IOException;

@RestController
@RequestMapping("/api")
public class FtpFileResource {


    private IRemoteTransferFile remoteTransferFile;

    @Autowired
    public void setFileService(IRemoteTransferFile remoteTransferFile) {
        this.remoteTransferFile = remoteTransferFile;
    }

    @PostMapping("/testaccebilite")
    public ResponseEntity<?> testConnection(@RequestParam String ip , @RequestParam int port , @RequestParam String login , @RequestParam String password)  {

        this.remoteTransferFile.connect(ip,port,login,password);

        return new ResponseEntity<Void>(HttpStatus.OK);

    }

    @PostMapping("uploadfile")
    public ResponseEntity<?> uploadFile(
        @RequestParam("host") String SFTPHOST,
        @RequestParam("port") Integer SFTPPORT,
        @RequestParam("username") String SFTPUSER,
        @RequestParam("password") String SFTPPASS,
        @RequestParam("pathremote") String SFTPWORKINGDIR,
        @RequestParam("pathlocal") String LOCALDIRECTORY)  {
        this.remoteTransferFile.uploadFile(SFTPHOST,SFTPPORT,SFTPUSER,SFTPPASS,SFTPWORKINGDIR,LOCALDIRECTORY);

        return new ResponseEntity<Void>(HttpStatus.OK);

    }


}
