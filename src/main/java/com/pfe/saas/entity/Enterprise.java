package com.pfe.saas.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "enterprises")
@DiscriminatorValue("ENTERPRISE")
@PrimaryKeyJoinColumn(name = "user_id")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Enterprise extends User {

    @Column(name = "company_name", nullable = false)
    private String companyName;

    @Column(name = "company_description", columnDefinition = "TEXT")
    private String companyDescription;

    @Column(name = "company_logo")
    private String companyLogo;

    @Column(name = "company_website")
    private String companyWebsite;

    @Column(name = "company_sector")
    private String companySector;

    @Column(name = "company_size")
    private String companySize;

    @Column(name = "siret_number")
    private String siretNumber;

    @Column(name = "linkedin_url")
    private String linkedinUrl;

    @Column(name = "is_premium")
    private boolean premium = false;

    @JsonIgnore
    @OneToMany(mappedBy = "enterprise", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<JobOffer> jobOffers = new ArrayList<>();
}
