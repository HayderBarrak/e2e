package sandbox.lyance.com.service;


import com.jcraft.jsch.*;

import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.charset.Charset;
import java.util.List;
import java.util.Properties;
import java.util.Vector;
import java.util.stream.Collectors;

@Service
public class FtpFileService implements IRemoteTransferFile {

    private final org.slf4j.Logger log = LoggerFactory.getLogger(FtpFileService.class);


    private ChannelSftp sftpChannel;
    private Session session;


    @Override
    public void connect(String ip, Integer port, String login, String password) {
        JSch jsch = new JSch();
        try {
            log.info("Attempting SFTP connection to {}:{} with user {}", ip, port, login);
            session = jsch.getSession(login, ip, port);
            session.setPassword(password.getBytes(Charset.forName("ISO-8859-1")));
            Properties config = new Properties();
            config.put("StrictHostKeyChecking", "no");
            session.setConfig(config);
            session.connect();
            Channel channel = session.openChannel("sftp");
            channel.connect();
            sftpChannel = (ChannelSftp) channel;
            log.info("SFTP connection successful");
        } catch (JSchException e) {
            log.debug("SFTP connection error {}", e);
        }


    }

    @Override
    public void changeDirectory(String directory) {
    }

    @Override
    public List<IRemoteTransferFile> listFiles(String path) {
//        try {
//            log.debug("Attempting SFTP file listing in {}", path);
//            Vector<ChannelSftp.LsEntry> files = sftpChannel.ls(path);
//            List<IRemoteTransferFile> lsFiles = files.stream().filter(file -> !file.getAttrs().isDir()).map(FtpFileService::new).collect(Collectors.toList());
//            log.debug("SFTP file listing successful with file count {}", lsFiles.size());
//            return lsFiles;
//        } catch (SftpException e) {
//            log.debug("SFTP file listing error {}", e);
//            log.error("Exception : {}", e);
//        }
//      return log.error("Exception : {}", e);
        return null;
    }

    @Override
    public void downloadFile(String remoteFilePath, File localFile) {
        log.info("Attempting SFTP file download from {} to {}", remoteFilePath, localFile.getAbsolutePath());
        OutputStream outputStream = null;
        try {
            File parentDir = localFile.getParentFile();
            if (!parentDir.exists()) {
                parentDir.mkdirs();
            }
            outputStream = new BufferedOutputStream(
                new FileOutputStream(localFile));
            sftpChannel.get(remoteFilePath, outputStream);
            log.info("Attempting SFTP file download successful");
        } catch (SftpException | FileNotFoundException e) {
            log.debug("Attempting SFTP file download error {}", e);
        } finally {
            if (outputStream != null) {
                try {
                    outputStream.close();
                } catch (IOException e) {
                    log.error("Exception : {}", e);
                }
            }
        }

    }

    @Override
    public void uploadFile(String SFTPHOST, Integer SFTPPORT, String SFTPUSER, String SFTPPASS, String SFTPWORKINGDIR, String LOCALDIRECTORY) {
        JSch jsch = new JSch();
        Session session = null;
        try {
            session = jsch.getSession("root", "192.168.77.94", 22);
            session.setConfig("StrictHostKeyChecking", "no");
            session.setPassword("PhC!010601");
            session.connect();

            Channel channel = session.openChannel("sftp");
            channel.connect();
            ChannelSftp sftpChannel = (ChannelSftp) channel;
            sftpChannel.put("/home/hayder-pc/Bureau/haydertest", "/root");
            sftpChannel.exit();
            session.disconnect();
        } catch (JSchException e) {
            e.printStackTrace();
        } catch (SftpException e) {
            e.printStackTrace();
        }
    }
    }



