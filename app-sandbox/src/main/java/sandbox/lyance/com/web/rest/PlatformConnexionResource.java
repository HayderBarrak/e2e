package sandbox.lyance.com.web.rest;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.configurationprocessor.json.*;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import sandbox.lyance.com.domain.GayaConnectionResponse;
import sandbox.lyance.com.domain.Plateforme;
import sandbox.lyance.com.domain.*;
import sandbox.lyance.com.repository.*;
import sandbox.lyance.com.service.PlatformService;
import sandbox.lyance.com.service.dto.PlatformDTO;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.*;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/platformconnection")
public class PlatformConnexionResource {
    private final Logger log = LoggerFactory.getLogger(PlatformConnexionResource.class);


    private static final String baseUrl = "http://194.98.57.14";

    private final PlatformService platformService;
    private final TenantResource tenantResource;

    public PlatformConnexionResource(PlatformService platformService, TenantResource tenantResource) {
        this.platformService = platformService;
        this.tenantResource = tenantResource;
    }

    @Autowired
    PlateformeRepository plateformeRepository;
    @Autowired
    TenantRepository tenantRepository;

    @PostMapping(value = "/gettoken/{platformId}")
    public String getTokenByPlatformId(@PathVariable Long platformId) {
        System.out.println("get token");
        PlatformDTO platformDTO = platformService.findOne(platformId).get();
        String url = "http://" + platformDTO.getAdresse() + "/gaya/oauth/token";
        RestTemplate template = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        MultiValueMap<String, String> map = new LinkedMultiValueMap<String, String>();
        map.add("username", platformDTO.getLogin());
        map.add("password", platformDTO.getPwd());
        map.add("grant_type", "password");
        map.add("scope", "read write");
        map.add("client_secret", "mySecretOAuthSecret");


        map.add("client_id", "gayaapp");

        HttpEntity<MultiValueMap<String, String>> requestEntity =
            new HttpEntity<MultiValueMap<String, String>>(map, headers);
        String token = "";

        try {
            ResponseEntity<GayaConnectionResponse> response = template.postForEntity(url, requestEntity, GayaConnectionResponse.class);
            System.out.println("teeeest" + response.toString());

            token = response.getBody().getToken_type() + " " + response.getBody().getAccess_token();
        } catch (Exception e) {
            token = e.getMessage();
            System.out.println("teeeest" + token);
        }
        return token;
    }


    @GetMapping(value = "/landlord/tenants/{platformId}")
    public Tenant getTenants(@PathVariable Long platformId) {
        PlatformDTO platform = platformService.findOne(platformId).get();
        StringBuilder url = new StringBuilder();
        url.append("http://").append(platform.getAdresse()).append("/gaya/api/landlord/tenants");
        RestTemplate template = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.add("Authorization", getTokenByPlatformId(platformId));
        headers.add("Accept", "application/json");
        HttpEntity<String> request = new HttpEntity<String>(headers);
        ResponseEntity<String> response = template.exchange(url.toString(), HttpMethod.GET, request, String.class);
        String result = response.getBody();
        JSONObject jsonObject = null;
        Tenant t = null;
        try {
            jsonObject = new JSONObject(result);
            JSONArray array = jsonObject.getJSONArray("tenantResourceLights");

            for (int i = 0; i < array.length(); i++) {
                jsonObject = array.getJSONObject(i);
                // Retrieve id , name and platformName
                long id = jsonObject.getInt("rid");
                String name = jsonObject.getString("name");
                String platformName = jsonObject.getString("platformName");
                //Retrieve domainName
                JSONObject o = jsonObject.getJSONObject("params");
                String domainName = o.getString("DomainName");
                Plateforme platformEntity = plateformeRepository.findById(platformId).get();
                t = tenantRepository.findByDomainName(domainName);
                if (t == null) {
                    t = new Tenant();
                }
                t.setManytoone(platformEntity);
                t.setName(name);
                t.setDomainName(domainName);
                tenantRepository.save(t);
            }

        } catch (JSONException e) {
            e.printStackTrace();
        }
        return t;
    }


    @GetMapping(value = "/getcampagne/{platformId}")
    public List<CampaignResourceLight> getCampagnes(@PathVariable Long platformId) {
        PlatformDTO platform = platformService.findOne(platformId).get();
        StringBuilder url = new StringBuilder();
       url.append("http://").append(platform.getAdresse()).append("/gaya/api/campaignsLight/select2");
        RestTemplate template = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.add("Accept", "application/json, text/plain, */*");
        // getTokenByPlatformId(platformId)
        headers.add("Authorization", getTokenByPlatformId(platformId));
        HttpEntity<String> request = new HttpEntity<String>(headers);
        ResponseEntity<String> response = template.exchange(url.toString(), HttpMethod.GET, request, String.class);
        String result = response.getBody();
        List<CampaignResourceLight> campagnes = new ArrayList<>();
        try {
            for (int i = 0; i < result.length() - 1; i++) {
                JSONArray jsonArray = new JSONArray(result);
                JSONObject object = jsonArray.getJSONObject(i);
                long id = object.getInt("rid");
                String name = object.getString("name");
                String status = object.getString("status");
                String lastStartDate = object.getString("lastStartDate");
                Boolean archived = object.getBoolean("archived");
                CampaignResourceLight campaignResourceLight = new CampaignResourceLight();
                campaignResourceLight.setRid(id);
                campaignResourceLight.setArchived(archived);
                campaignResourceLight.setLastStartDate(lastStartDate);
                campaignResourceLight.setStatus(status);
                campaignResourceLight.setName(name);
                campagnes.add(campaignResourceLight);
            }


        } catch (JSONException e) {
            e.printStackTrace();
        }
        return campagnes;
    }


    @GetMapping(value = "/campaigns/users/{platformId}/{cmpId}")
    public ResponseEntity<List<CampaignUserDTO>> getUsers(@PathVariable Long platformId,@PathVariable Long cmpId) {
        PlatformDTO platform = platformService.findOne(platformId).get();
        StringBuilder url = new StringBuilder();
        url.append("http://").append(platform.getAdresse()).append("/gaya/api/v1/campaigns/users/").append(cmpId);
        RestTemplate template = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.add("Accept", "application/json, text/plain, */*");
        // getTokenByPlatformId(platformId)
        headers.add("Authorization", getTokenByPlatformId(platformId));
        HttpEntity<String> request = new HttpEntity<String>(headers);
        ResponseEntity<?> response = template.exchange(url.toString(), HttpMethod.GET, request,new ParameterizedTypeReference<List<CampaignUserDTO>>(){});
        List<CampaignUserDTO> campaignUserDTOS = (List<CampaignUserDTO>) response.getBody();
        return  new ResponseEntity<List<CampaignUserDTO>>(campaignUserDTOS,HttpStatus.OK) ;
    }

    @GetMapping(value = "/check/{url}")
    public String getHealth(@PathVariable String url) {
        StringBuilder s = new StringBuilder();
        s.append("http://").append(url).append("/gaya/management/health");
        RestTemplate template = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<String> request = new HttpEntity<>(headers);
        ResponseEntity<String> response = template.exchange(s.toString(), HttpMethod.GET, request, String.class);
        String result = response.getBody();


        return result;

    }




}
