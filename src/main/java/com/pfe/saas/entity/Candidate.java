package com.pfe.saas.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "candidates")
@DiscriminatorValue("CANDIDATE")
@PrimaryKeyJoinColumn(name = "user_id")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Candidate extends User {

    private String headline;

    @Column(columnDefinition = "TEXT")
    private String summary;

    @Column(name = "linkedin_url")
    private String linkedinUrl;

    @Column(name = "github_url")
    private String githubUrl;

    @Column(name = "portfolio_url")
    private String portfolioUrl;

    @Column(name = "years_experience")
    private Integer yearsExperience;

    private String skills;
    private String languages;
    private String education;

    @Column(name = "is_open_to_work")
    private boolean openToWork = true;

    @Column(name = "desired_salary")
    private String desiredSalary;

    @JsonIgnore
    @OneToMany(mappedBy = "candidate", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<CV> cvList = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "candidate", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Application> applications = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "candidate", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Certification> certifications = new ArrayList<>();
}
