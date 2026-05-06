package com.pfe.saas.enums;

/**
 * Status of a connection request between two users.
 * Used for professional messaging access control (especially Candidate↔Enterprise).
 *
 * Flow: User A sends request → Status: PENDING
 *       User B accepts → Status: ACCEPTED
 *       OR User B rejects → Status: REJECTED
 */
public enum ConnectionRequestStatus {
    PENDING,    // Request sent, awaiting response
    ACCEPTED,   // Request accepted, messaging now allowed
    REJECTED    // Request rejected
}
