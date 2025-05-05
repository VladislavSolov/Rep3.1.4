package ru.kata.spring.boot_security.demo.services;



import ru.kata.spring.boot_security.demo.models.Role;
import ru.kata.spring.boot_security.demo.models.User;

import java.util.List;
import java.util.Set;

public interface UserService {
    List<User> getUsers();


    User getUserById(long id);

    void updateUser(User user);

    void deleteUser(long id);

    void addUser(User user);

    void save(User user, Set<Role> selectedRoles);
}
