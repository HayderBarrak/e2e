package sandbox.lyance.com.domain;

import org.apache.commons.io.FileUtils;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class FileAtrr {



    public File modifyFile(String filePath, String oldString, String newString, File newFile) throws IOException {
        File fileToBeModified = new File(filePath);

        String oldContent = "";

        BufferedReader reader = null;

        FileWriter writer = null;


        try
        {


            reader = new BufferedReader(new FileReader(fileToBeModified));

            //Reading all the lines of input text file into oldContent

            String line = reader.readLine();

            while (line != null)
            {
                oldContent = oldContent + line + System.lineSeparator();

                line = reader.readLine();
            }

            //Replacing oldString with newString in the oldContent

            String newContent = oldContent.replaceFirst(oldString, newString);

            //Rewriting the input text file with newContent

            writer = new FileWriter(newFile);


            writer.write(newContent);





        }
        catch (IOException e)
        {
            e.printStackTrace();
        }
        finally
        {
            try
            {
                //Closing the resources

                reader.close();

                writer.close();
            }
            catch (IOException e)
            {
                e.printStackTrace();
            }
        }

return fileToBeModified;





    }
//
//    public static void main(String[] args)
//    {
//
//        File filepath = new File("/home/hayder-pc/Documents/workspace/SandBox/app-sandbox/protractor/protractor.conf.js");
//
//        modifyFile( filepath, "\\{seleniumAddress\\}", seleniumAddress);
//        modifyFile(filepath, "\\{baseurl\\}", baseUrl);
//
//        System.out.println("done");
//    }
//
//
//

}
