package ru.kata.spring.boot_security.demo.services;



import ru.kata.spring.boot_security.demo.models.Role;

import java.util.Set;

public interface RoleService {
    Set<Role> findAll();
    Role getByName(String name);
    public void addRole(Role role);
}
