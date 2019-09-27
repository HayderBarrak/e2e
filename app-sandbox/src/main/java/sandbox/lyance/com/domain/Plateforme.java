package sandbox.lyance.com.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A Plateforme.
 */
@Entity
@Table(name = "plateforme")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Plateforme implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "adresse")
    private String adresse;

    @Column(name = "login")
    private String login;

    @Column(name = "nom")
    private String nom;

    @Column(name = "pwd")
    private String pwd;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAdresse() {
        return adresse;
    }

    public Plateforme adresse(String adresse) {
        this.adresse = adresse;
        return this;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getLogin() {
        return login;
    }

    public Plateforme login(String login) {
        this.login = login;
        return this;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getNom() {
        return nom;
    }

    public Plateforme nom(String nom) {
        this.nom = nom;
        return this;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPwd() {
        return pwd;
    }

    public Plateforme pwd(String pwd) {
        this.pwd = pwd;
        return this;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Plateforme plateforme = (Plateforme) o;
        if (plateforme.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), plateforme.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Plateforme{" +
            "id=" + getId() +
            ", adresse='" + getAdresse() + "'" +
            ", login='" + getLogin() + "'" +
            ", nom='" + getNom() + "'" +
            ", pwd='" + getPwd() + "'" +
            "}";
    }
}
