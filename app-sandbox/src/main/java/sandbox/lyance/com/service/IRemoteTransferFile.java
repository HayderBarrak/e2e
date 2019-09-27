package sandbox.lyance.com.service;

import com.jcraft.jsch.JSchException;
import com.jcraft.jsch.SftpException;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;

public interface IRemoteTransferFile {
    void connect(String ip, Integer port, String login, String password);
    void changeDirectory(String directory);
    List<IRemoteTransferFile> listFiles(String path);
    void downloadFile(String remoteFilePath, File localFile);
    void uploadFile (String SFTPHOST,Integer SFTPPORT,String SFTPUSER,String SFTPPASS,String SFTPWORKINGDIR,String LOCALDIRECTORY);
}
