package sandbox.lyance.com.service.dto;

import javax.validation.constraints.*;
import java.io.Serializable;

public class PlatformDTO implements Serializable {

    private Long id;

    @NotNull
    private String name;

    @NotNull
    private String adresse;

    @NotNull
    private String login;

    @NotNull
    private String pwd;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }


    @Override
    public String toString() {
        return "PlatformDTO{" +
            "id=" + id +
            ", name='" + name + '\'' +
            ", adresse='" + adresse + '\'' +
            ", login='" + login + '\'' +
            ", pwd='" + pwd + '\'' +
            '}';
    }
}
