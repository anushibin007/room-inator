package anushibin007.roominator.backend.advices;

import anushibin007.roominator.backend.exceptions.EntityNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

import java.util.ServiceConfigurationError;

@ControllerAdvice
public class ControllerExceptionAdvice {

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<String> handleEntityNotFoundException(EntityNotFoundException e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    public ResponseEntity<String> handleMethodArgumentTypeMismatchException(MethodArgumentTypeMismatchException e) {
        return new ResponseEntity<>("Invalid/Incompatible Argument type passed.\n"+e.getStackTrace(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(InternalError.class)
    public ResponseEntity<String> handleEntityInternalErrorException(InternalError e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(HttpClientErrorException.Forbidden.class)
    public ResponseEntity<String> handleEntityForbiddenException(HttpClientErrorException.Forbidden e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.FORBIDDEN);
    }

    @ExceptionHandler(ServiceConfigurationError.class)
    public ResponseEntity<String> handleServiceConfigurationException(ServiceConfigurationError e) {
        return new ResponseEntity<>("Failed to configure the service.\n" + e.getStackTrace(), HttpStatus.SERVICE_UNAVAILABLE);
    }
}
