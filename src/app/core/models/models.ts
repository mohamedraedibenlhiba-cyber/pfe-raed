// ─── Enums ───────────────────────────────────────────────────────────────────
export type Role = 'ROLE_ADMIN' | 'ROLE_ENTERPRISE' | 'ROLE_CANDIDATE';
export type ApplicationStatus = 'PENDING' | 'REVIEWED' | 'AI_ANALYZED' | 'SHORTLISTED' | 'INTERVIEW' | 'ACCEPTED' | 'REJECTED';
export type OfferStatus = 'DRAFT' | 'PUBLISHED' | 'CLOSED' | 'ARCHIVED';
export type ContractType = 'CDI' | 'CDD' | 'STAGE' | 'FREELANCE' | 'ALTERNANCE' | 'TEMPS_PARTIEL';
export type ExperienceLevel = 'JUNIOR' | 'MID' | 'SENIOR' | 'LEAD';
export type ReactionType = 'LIKE' | 'LOVE' | 'CELEBRATE' | 'SUPPORT' | 'INSIGHTFUL';
export type ReclamationStatus = 'OPEN' | 'IN_PROGRESS' | 'RESOLVED' | 'CLOSED' | 'REJECTED';
export type ReclamationType = 'TECHNICAL_ISSUE' | 'ACCOUNT_PROBLEM' | 'PAYMENT_ISSUE' | 'ABUSIVE_CONTENT' | 'OFFER_FRAUD' | 'OTHER';
export type ProjectStatus = 'OPEN' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';
export type BidStatus = 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'NEGOTIATING' | 'WITHDRAWN';

// ─── API Wrapper ──────────────────────────────────────────────────────────────
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface Page<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  first: boolean;
  last: boolean;
}

// ─── Auth ─────────────────────────────────────────────────────────────────────
export interface LoginRequest { email: string; password: string; }

export interface JwtResponse {
  token: string;
  type: string;
  id: number;
  email: string;
  fullName: string;
  role: Role;
}

// ─── User / User subtypes ─────────────────────────────────────────────────────
export interface User {
  id: number;
  email: string;
  fullName: string;
  phoneNumber?: string;
  profilePicture?: string;
  city?: string;
  country?: string;
  role: Role;
  active: boolean;
  verified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Candidate extends User {
  headline?: string;
  summary?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  portfolioUrl?: string;
  yearsExperience?: number;
  skills?: string;
  languages?: string;
  education?: string;
  openToWork?: boolean;
  desiredSalary?: number;
}

export interface Enterprise extends User {
  companyName: string;
  companyDescription?: string;
  companyLogo?: string;
  companyWebsite?: string;
  companySector?: string;
  companySize?: string;
  siretNumber?: string;
  linkedinUrl?: string;
  premium?: boolean;
}

// ─── Registration ─────────────────────────────────────────────────────────────
export interface RegisterEnterpriseRequest {
  email: string; password: string; fullName: string;
  companyName: string; companyDescription?: string;
  companyWebsite?: string; companySector?: string;
  companySize?: string; siretNumber?: string;
  phoneNumber?: string; city?: string; country?: string;
}

export interface RegisterCandidateRequest {
  email: string; password: string; fullName: string;
  headline?: string; summary?: string; skills?: string;
  linkedinUrl?: string; githubUrl?: string;
  yearsExperience?: number; phoneNumber?: string;
  city?: string; country?: string;
}

// ─── Job Offers ───────────────────────────────────────────────────────────────
export interface JobOffer {
  id: number;
  title: string;
  description: string;
  requirements?: string;
  requiredSkills?: string;
  techStack?: string;
  location?: string;
  remote?: boolean;
  contractType?: ContractType;
  salaryMin?: number;
  salaryMax?: number;
  experienceRequired?: number;
  experienceLevel?: ExperienceLevel;
  numberOfPositions?: number;
  benefits?: string;
  interviewProcess?: string;
  startDate?: string;
  status: OfferStatus;
  publicToken: string;
  deadlineDate?: string;
  customFormFields?: string;
  brandColor?: string;
  bannerImage?: string;
  enterprise: Enterprise;
  createdAt: string;
  updatedAt: string;
}

export interface JobOfferRequest {
  title: string; description: string; requirements?: string;
  requiredSkills?: string; techStack?: string; location?: string; remote?: boolean;
  contractType?: ContractType; salaryMin?: number; salaryMax?: number;
  experienceRequired?: number; experienceLevel?: ExperienceLevel;
  numberOfPositions?: number; benefits?: string; interviewProcess?: string;
  startDate?: string; deadlineDate?: string;
  customFormFields?: string; brandColor?: string; bannerImage?: string;
}

// ─── Applications ─────────────────────────────────────────────────────────────
export interface Application {
  id: number;
  candidate: Candidate;
  jobOffer: JobOffer;
  cv?: CV;
  coverLetter?: string;
  customFieldsAnswers?: string;
  status: ApplicationStatus;
  aiScore?: number;
  aiSummary?: string;
  aiFeedback?: string;
  recruiterNotes?: string;
  recruiterRating?: number;
  appliedAt: string;
}

export interface ApplicationRequest {
  jobOfferId: number;
  cvId?: number;
  coverLetter?: string;
  customFieldsAnswers?: string;
}

// ─── CV ───────────────────────────────────────────────────────────────────────
export interface CV {
  id: number;
  fileName: string;
  filePath: string;
  fileSize: number;
  contentType: string;
  defaultCv: boolean;
  uploadedAt: string;
}

// ─── User Profile ─────────────────────────────────────────────────────────────
export interface UserProfile {
  id: number;
  email: string;
  fullName: string;
  phoneNumber?: string;
  profilePicture?: string;
  city?: string;
  country?: string;
  role: Role;
  companyName?: string; companyDescription?: string; companyLogo?: string;
  companyWebsite?: string; companySector?: string; companySize?: string;
  siretNumber?: string; enterpriseLinkedinUrl?: string; premium?: boolean;
  headline?: string; summary?: string; linkedinUrl?: string;
  githubUrl?: string; portfolioUrl?: string; yearsExperience?: number;
  skills?: string; languages?: string; education?: string;
  openToWork?: boolean; desiredSalary?: string;
}

export interface UpdateProfileRequest {
  fullName?: string; phoneNumber?: string; city?: string; country?: string;
  companyName?: string; companyDescription?: string; companyWebsite?: string;
  companySector?: string; companySize?: string; siretNumber?: string;
  enterpriseLinkedinUrl?: string;
  headline?: string; summary?: string; linkedinUrl?: string;
  githubUrl?: string; portfolioUrl?: string; yearsExperience?: number;
  skills?: string; languages?: string; education?: string;
  openToWork?: boolean; desiredSalary?: string;
}

// ─── Messaging (1-to-1) ───────────────────────────────────────────────────────
export interface Message {
  id: number;
  sender: User;
  content: string;
  attachmentUrl?: string;
  read: boolean;
  sentAt: string;
}

export interface Conversation {
  id: number;
  participant1: User;
  participant2: User;
  lastMessageAt: string;
  messages?: Message[];
}

export interface MessageRequest {
  recipientId: number;
  content: string;
  attachmentUrl?: string;
}

// ─── Posts / Social ───────────────────────────────────────────────────────────
export interface Post {
  id: number;
  author: User;
  content: string;
  mediaUrl?: string;
  mediaType?: string;
  pinned: boolean;
  createdAt: string;
  updatedAt: string;
  commentCount?: number;
  reactionCount?: number;
  userReaction?: ReactionType;
}

export interface Comment {
  id: number;
  author: User;
  content: string;
  parentCommentId?: number;
  createdAt: string;
  replies?: Comment[];
}

// ─── Follow ───────────────────────────────────────────────────────────────────
export interface Follow {
  id: number;
  follower: User;
  following: User;
  createdAt: string;
}

export interface FollowStatus {
  isFollowing: boolean;
  followersCount: number;
  followingCount: number;
}

// ─── Public Profiles ──────────────────────────────────────────────────────────────
export interface PublicProfileResponse {
  id: number;
  fullName: string;
  email: string;
  role: Role;
  profilePicture?: string;
  city?: string;
  country?: string;
  phoneNumber?: string;
  followersCount: number;
  followingCount: number;
  // Candidate-specific fields
  headline?: string;
  summary?: string;
  skills?: string;
  yearsExperience?: number;
  education?: string;
  languages?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  portfolioUrl?: string;
  openToWork?: boolean;
  desiredSalary?: number;
  // Certifications (Candidate)
  certifications?: Certification[];
  // Enterprise-specific fields
  companyName?: string;
  companyDescription?: string;
  companyWebsite?: string;
  companySector?: string;
  companySize?: string;
  premium?: boolean;
  // Posts (all users)
  postCount?: number;
  recentPosts?: PostSummaryDTO[];
}

export interface ConnectionStatusResponse {
  isFollowedByMe: boolean;
  isFollowingMe: boolean;
  canMessage: boolean;
  followersCount: number;
  followingCount: number;
}

// ─── Freelance ────────────────────────────────────────────────────────────────
export interface FreelanceProject {
  id: number;
  title: string;
  description: string;
  requiredSkills?: string;
  budgetMin?: number;
  budgetMax?: number;
  durationDays?: number;
  status: ProjectStatus;
  deadlineDate?: string;
  postedBy: User;
  bidCount?: number;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectBid {
  id: number;
  freelancer: User;
  proposedAmount: number;
  proposedDurationDays: number;
  coverLetter?: string;
  status: BidStatus;
  counterAmount?: number;
  counterDurationDays?: number;
  negotiationNote?: string;
  submittedAt: string;
  updatedAt: string;
}

export interface FreelanceProjectRequest {
  title: string;
  description: string;
  requiredSkills?: string;
  budgetMin?: number;
  budgetMax?: number;
  durationDays?: number;
  deadlineDate?: string;
}

export interface ProjectBidRequest {
  proposedAmount: number;
  proposedDurationDays: number;
  coverLetter?: string;
}

export interface BidNegotiationRequest {
  status: BidStatus;
  counterAmount?: number;
  counterDurationDays?: number;
  negotiationNote?: string;
}

// ─── Notifications ────────────────────────────────────────────────────────────
export interface Notification {
  id: number;
  title: string;
  message: string;
  type: string;
  referenceId?: number;
  read: boolean;
  createdAt: string;
}

// ─── Reclamations ─────────────────────────────────────────────────────────────
export interface Reclamation {
  id: number;
  user: User;
  type: ReclamationType;
  subject: string;
  description: string;
  status: ReclamationStatus;
  adminResponse?: string;
  handledByAdmin?: User;
  referenceId?: number;
  referenceType?: string;
  createdAt: string;
  updatedAt: string;
  resolvedAt?: string;
}

export interface ReclamationRequest {
  type: ReclamationType;
  subject: string;
  description: string;
  referenceId?: number;
  referenceType?: string;
}

export interface ReclamationResponseRequest {
  status: ReclamationStatus;
  adminResponse?: string;
}

// ─── Admin Dashboard ──────────────────────────────────────────────────────────
export interface AdminDashboard {
  totalUsers: number;
  totalEnterprises: number;
  totalCandidates: number;
  totalJobOffers: number;
  publishedOffers: number;
  totalApplications: number;
  pendingApplications: number;
  analyzedApplications: number;
  totalPosts: number;
  totalMessages: number;
  totalReclamations: number;
  openReclamations: number;
  resolvedReclamations: number;
}

// ─── Connection Requests ──────────────────────────────────────────────────────
export type ConnectionRequestStatus = 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'NONE';

export interface ConnectionRequest {
  id: number;
  senderId: number;
  senderName: string;
  senderProfilePicture?: string;
  receiverId: number;
  receiverName: string;
  message?: string;
  status: ConnectionRequestStatus;
  createdAt: string;
  respondedAt?: string;
}

export interface ConnectionRequestSendRequest {
  receiverId: number;
  message?: string;
}

export interface ConnectionRequestResponse {
  status: ConnectionRequestStatus;
  requestId?: number;
}

// ─── Certifications ───────────────────────────────────────────────────────────
export interface Certification {
  id: number;
  certificationName: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialUrl?: string;
  expired?: boolean;
}

export interface CertificationRequest {
  certificationName: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialUrl?: string;
}

// ─── Post Summaries ───────────────────────────────────────────────────────────
export interface PostSummaryDTO {
  id: number;
  contentPreview: string;
  createdAt: string;
  commentCount: number;
  reactionCount: number;
}

// ─── User Search ──────────────────────────────────────────────────────────────
export interface UserSearchResponse {
  id: number;
  fullName: string;
  email: string;
  role: Role;
  profilePicture?: string;
  city?: string;
  headline?: string;          // Candidat
  skills?: string;            // Candidat
  openToWork?: boolean;       // Candidat
  companyName?: string;       // Entreprise
  companyDescription?: string;  // Entreprise
  canMessage: boolean;
  connectionStatus: string;   // NONE, PENDING, ACCEPTED, REJECTED
}

// ─── Friendships ──────────────────────────────────────────────────────────────
export interface UserFriendSummaryDTO {
  id: number;
  fullName: string;
  email: string;
  role: Role;
  profilePicture?: string;
  city?: string;
}

export interface Friendship {
  id: number;
  userId1: number;
  userName1: string;
  profilePicture1?: string;
  userId2: number;
  userName2: string;
  profilePicture2?: string;
  createdAt: string;
  currentUserId?: number;
}
