package sandbox.lyance.com.domain;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "rid",
    "name",
    "status",
    "batches",
    "actions",
    "lastStartDate",
    "type",
    "archived",


})

public class CampaignResourceLight {

    @JsonProperty("rid")
    private Long rid;
    @JsonProperty("name")
    private String name;
    @JsonProperty("status")
    private String status;
    @JsonProperty("archived")
    private Boolean archived;
    @JsonProperty("lastStartDate")
    private String lastStartDate;
    @JsonProperty("type")
    @JsonIgnore
    private String type;
    @JsonProperty("actions")
    @JsonIgnore
    private String actions;
    @JsonProperty("batches")
    @JsonIgnore
    private String batches;

    @JsonProperty("rid")
    public Long getRid() {
        return rid;
    }

    @JsonProperty("rid")
    public void setRid(Long rid) {
        this.rid = rid;
    }

    @JsonProperty("name")
    public String getName() {
        return name;
    }

    @JsonProperty("name")
    public void setName(String name) {
        this.name = name;
    }

    @JsonProperty("archived")
    public Boolean getArchived() {
        return archived;
    }

    @JsonProperty("archived")
    public void setArchived(Boolean archived) {
        this.archived = archived;
    }
    @JsonProperty("lastStartDate")
    public String getLastStartDate() {
        return lastStartDate;
    }
    @JsonProperty("lastStartDate")
    public void setLastStartDate(String lastStartDate) {
        this.lastStartDate = lastStartDate;
    }

    @JsonProperty("type")
    public String getType() {
        return type;
    }
    @JsonProperty("type")
    public void setType(String type) {
        this.type = type;
    }
    @JsonProperty("actions")
    public String getActions() {
        return actions;
    }
    @JsonProperty("actions")
    public void setActions(String actions) {
        this.actions = actions;
    }
    @JsonProperty("batches")
    public String getBatches() {
        return batches;
    }
    @JsonProperty("batches")
    public void setBatches(String batches) {
        this.batches = batches;
    }
    @JsonProperty("status")
    public String getStatus() {
        return status;
    }
    @JsonProperty("status")
    public void setStatus(String status) {
        this.status = status;
    }
}
