package com.pfe.saas.exception;

import com.pfe.saas.dto.response.ApiResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.*;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MaxUploadSizeExceededException;

import java.util.*;

@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler {

    /** Erreurs de validation (@Valid) */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ApiResponse<Map<String, String>> handleValidation(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new LinkedHashMap<>();
        for (FieldError err : ex.getBindingResult().getFieldErrors()) {
            errors.put(err.getField(), err.getDefaultMessage());
        }
        return new ApiResponse<>(false, "Erreur de validation", errors);
    }

    /** Arguments invalides (permissions refusées, etc.) */
    @ExceptionHandler(IllegalArgumentException.class)
    @ResponseStatus(HttpStatus.FORBIDDEN)
    public ApiResponse<Void> handleIllegalArgument(IllegalArgumentException ex) {
        return ApiResponse.error(ex.getMessage());
    }

    /** RuntimeException génériques (métier) */
    @ExceptionHandler(RuntimeException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ApiResponse<Void> handleRuntime(RuntimeException ex) {
        return ApiResponse.error(ex.getMessage());
    }

    /** Accès refusé (mauvais rôle) */
    @ExceptionHandler(AccessDeniedException.class)
    @ResponseStatus(HttpStatus.FORBIDDEN)
    public ApiResponse<Void> handleAccessDenied(AccessDeniedException ex) {
        return ApiResponse.error("Accès refusé : " + ex.getMessage());
    }

    /** Mauvaises credentials */
    @ExceptionHandler(BadCredentialsException.class)
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    public ApiResponse<Void> handleBadCredentials(BadCredentialsException ex) {
        return ApiResponse.error("Email ou mot de passe incorrect");
    }

    /** Contrainte de clé unique (email déjà utilisé, etc.) */
    @ExceptionHandler(DataIntegrityViolationException.class)
    @ResponseStatus(HttpStatus.CONFLICT)
    public ApiResponse<Void> handleDuplicate(DataIntegrityViolationException ex) {
        return ApiResponse.error("Conflit de données : une entrée similaire existe déjà");
    }

    /** Fichier introuvable sur le disque */
    @ExceptionHandler(java.io.FileNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ApiResponse<Void> handleFileNotFound(java.io.FileNotFoundException ex) {
        log.warn("Fichier CV introuvable : {}", ex.getMessage());
        return ApiResponse.error("Le fichier CV est introuvable sur le serveur");
    }

    /** Erreur lecture/écriture fichier */
    @ExceptionHandler(java.io.IOException.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ApiResponse<Void> handleIo(java.io.IOException ex) {
        log.error("Erreur I/O : {}", ex.getMessage(), ex);
        return ApiResponse.error("Erreur lors de la lecture du fichier : " + ex.getMessage());
    }

    /** Fichier trop lourd */
    @ExceptionHandler(MaxUploadSizeExceededException.class)
    @ResponseStatus(HttpStatus.PAYLOAD_TOO_LARGE)
    public ApiResponse<Void> handleMaxUpload(MaxUploadSizeExceededException ex) {
        return ApiResponse.error("Le fichier dépasse la taille maximale autorisée (10 MB)");
    }

    /** Erreur serveur non gérée */
    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ApiResponse<Void> handleGeneric(Exception ex) {
        log.error("Erreur interne non gérée", ex);
        return ApiResponse.error("Une erreur interne est survenue, veuillez réessayer");
    }
}
