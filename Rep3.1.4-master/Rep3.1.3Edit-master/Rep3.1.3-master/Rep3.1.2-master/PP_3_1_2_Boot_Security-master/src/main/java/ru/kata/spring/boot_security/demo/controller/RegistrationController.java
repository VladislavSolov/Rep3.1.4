package ru.kata.spring.boot_security.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import ru.kata.spring.boot_security.demo.models.User;
import ru.kata.spring.boot_security.demo.services.RegistrationServiceImpl;
import ru.kata.spring.boot_security.demo.util.UserValidator;

import javax.validation.Valid;

@Controller
public class RegistrationController {

    private final UserValidator userValidator;
    private final RegistrationServiceImpl registrationServiceImpl;

    @Autowired
    public RegistrationController(UserValidator userValidator, RegistrationServiceImpl registrationServiceImpl) {
        this.userValidator = userValidator;
        this.registrationServiceImpl = registrationServiceImpl;
    }


    @GetMapping("/registration")
    public String RegistrationPage(@ModelAttribute("user") User user) {
        return "registration";
    }

    @PostMapping("/registration")
    public String Registration(@ModelAttribute("user") @Valid User user,
                               BindingResult bindingResult) {
        userValidator.validate(user, bindingResult);
        if (bindingResult.hasErrors())
            return "registration";

        registrationServiceImpl.register(user, "ROLE_USER");
        return "redirect:/login";
    }

}
