package ma.ac.emi.bricool.web;

import ma.ac.emi.bricool.entities.Client;
import ma.ac.emi.bricool.entities.Login;
import ma.ac.emi.bricool.entities.Seller;
import ma.ac.emi.bricool.service.ClientService;
import ma.ac.emi.bricool.service.SellerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController

@CrossOrigin(origins = "*")

@RequestMapping("/login")
public class LoginController {
    @Autowired
    ClientService clientService;

    @Autowired
    SellerService sellerService;

    @PostMapping
    public ResponseEntity<Object> login(@RequestBody Login login) {
        Client client = clientService.getClientByEmail(login.getEmail());
        if (client == null) {
            Seller seller = sellerService.getSellerByEmail(login.getEmail());
            if (seller == null) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }
            else {
                return ResponseEntity.status(HttpStatus.OK).body(seller);
            }
        }
        else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @GetMapping
    public ResponseEntity<Object> getUserByEmail(@RequestParam String email) {
        Client client = clientService.getClientByEmail(email);
        if (client == null) {
            Seller seller = sellerService.getSellerByEmail(email);
            if (seller == null) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }
            else {
                return ResponseEntity.status(HttpStatus.OK).body(seller);
            }
        }
        else {
            return ResponseEntity.status(HttpStatus.OK).body(client);
        }
    }
}
