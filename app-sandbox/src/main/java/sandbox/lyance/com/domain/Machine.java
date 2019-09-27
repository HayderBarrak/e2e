package sandbox.lyance.com.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A Machine.
 */
@Entity
@Table(name = "machine")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Machine implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "machinename")
    private String machinename;

    @Column(name = "driver")
    private String driver;

    @Column(name = "dockerdirec")
    private String dockerdirec;

    @Column(name = "memototal")
    private Long memototal;

    @Column(name = "ncpu")
    private Integer ncpu;

    @Column(name = "ostype")
    private String ostype;

    @Column(name = "opsystem")
    private String opsystem;

    @Column(name = "adresse")
    private String adresse;

    @Column(name = "password")
    private String password;

    @Column(name = "containerid")
    private Long containerid;

    @Column(name = "containerimage")
    private String containerimage;

    @Column(name = "status")
    private String status;

    @Column(name = "ports")
    private Integer ports;


    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove


    public Long getContainerid() {
        return containerid;
    }

    public void setContainerid(Long containerid) {
        this.containerid = containerid;
    }

    public String getContainerimage() {
        return containerimage;
    }

    public void setContainerimage(String containerimage) {
        this.containerimage = containerimage;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Integer getPorts() {
        return ports;
    }

    public void setPorts(Integer ports) {
        this.ports = ports;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMachinename() {
        return machinename;
    }

    public Machine machinename(String machinename) {
        this.machinename = machinename;
        return this;
    }

    public void setMachinename(String machinename) {
        this.machinename = machinename;
    }

    public String getDriver() {
        return driver;
    }

    public Machine driver(String driver) {
        this.driver = driver;
        return this;
    }

    public void setDriver(String driver) {
        this.driver = driver;
    }

    public String getDockerdirec() {
        return dockerdirec;
    }

    public Machine dockerdirec(String dockerdirec) {
        this.dockerdirec = dockerdirec;
        return this;
    }

    public void setDockerdirec(String dockerdirec) {
        this.dockerdirec = dockerdirec;
    }

    public Long getMemototal() {
        return memototal;
    }

    public Machine memototal(Long memototal) {
        this.memototal = memototal;
        return this;
    }

    public void setMemototal(Long memototal) {
        this.memototal = memototal;
    }

    public Integer getNcpu() {
        return ncpu;
    }

    public Machine ncpu(Integer ncpu) {
        this.ncpu = ncpu;
        return this;
    }

    public void setNcpu(Integer ncpu) {
        this.ncpu = ncpu;
    }

    public String getOstype() {
        return ostype;
    }

    public Machine ostype(String ostype) {
        this.ostype = ostype;
        return this;
    }

    public void setOstype(String ostype) {
        this.ostype = ostype;
    }

    public String getOpsystem() {
        return opsystem;
    }

    public Machine opsystem(String opsystem) {
        this.opsystem = opsystem;
        return this;
    }

    public void setOpsystem(String opsystem) {
        this.opsystem = opsystem;
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
        Machine machine = (Machine) o;
        if (machine.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), machine.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Machine{" +
            "id=" + getId() +
            ", machinename='" + getMachinename() + "'" +
            ", driver='" + getDriver() + "'" +
            ", dockerdirec='" + getDockerdirec() + "'" +
            ", memototal=" + getMemototal() +
            ", ncpu=" + getNcpu() +
            ", ostype='" + getOstype() + "'" +
            ", opsystem='" + getOpsystem() + "'" +
            "}";
    }
}
