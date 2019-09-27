package sandbox.lyance.com.domain;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A Script.
 */
@Entity
@Table(name = "script")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Script implements Serializable {

    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @NotNull
    @Column(name = "nom_script", nullable = false)
    private String nom_script;

    @Column(name = "nom_fichier")
    private String nom_fichier;

    @NotNull
    @Column(name = "description", nullable = false)
    private String description;

    @Lob
    @Column(name = "contenu")
    private byte[] contenu;




    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom_script() {
        return nom_script;
    }

    public Script nom_script(String nom_script) {
        this.nom_script = nom_script;
        return this;
    }

    public void setNom_script(String nom_script) {
        this.nom_script = nom_script;
    }

    public String getNom_fichier() {
        return nom_fichier;
    }

    public Script nom_fichier(String nom_fichier) {
        this.nom_fichier = nom_fichier;
        return this;
    }

    public void setNom_fichier(String nom_fichier) {
        this.nom_fichier = nom_fichier;
    }

    public String getDescription() {
        return description;
    }

    public Script description(String description) {
        this.description = description;
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public byte[] getContenu() {
        return contenu;
    }

    public Script contenu(byte[] contenu) {
        this.contenu = contenu;
        return this;
    }

    public void setContenu(byte[] contenu) {
        this.contenu = contenu;
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
        Script script = (Script) o;
        if (script.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), script.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Script{" +
            "id=" + getId() +
            ", nom_script='" + getNom_script() + "'" +
            ", nom_fichier='" + getNom_fichier() + "'" +
            ", description='" + getDescription() + "'" +
            ", contenu='" + getContenu() + "'" +
            "}";
    }
}
