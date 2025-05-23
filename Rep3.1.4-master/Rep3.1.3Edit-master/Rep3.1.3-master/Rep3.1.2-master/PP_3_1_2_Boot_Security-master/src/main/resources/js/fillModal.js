async function getUserDataById(userId) {
    const response = await fetch(`/api/admin/${userId}`);
    return await response.json();
}

async function fillModal(modal) {

    modal.addEventListener("show.bs.modal", async function(event) {

        const userId = event.relatedTarget.dataset.userId;
        const user = await getUserDataById(userId);

        const modalBody = modal.querySelector(".modal-body");

        const idInput = modalBody.querySelector("input[data-user-id='id']");
        const nameInput = modalBody.querySelector("input[data-user-id='name']");
        const usernameInput = modalBody.querySelector("input[data-user-id='username']");
        const ageInput = modalBody.querySelector("input[data-user-id='age']");
        const passwordInput = modalBody.querySelector("input[data-user-id='password']");
        if (passwordInput !== null) {
            passwordInput.value = user.password;
        }

        idInput.value = user.id;
        nameInput.value = user.name;
        usernameInput.value = user.username;
        ageInput.value = user.age;


        let rolesSelect = HTMLSelectElement;

        let rolesSelectDelete = modalBody.querySelector("select[data-user-id='rolesDelete']");
        let rolesSelectEdit = modalBody.querySelector("select[data-user-id='rolesEdit']");
        let userRolesHTML = "";

        if (rolesSelectDelete !== null) {
            rolesSelect = rolesSelectDelete;
            for (let i = 0; i < user.roles.length; i++) {
                userRolesHTML +=
                    `<option value="${user.roles[i].name}">${user.roles[i].name}</option>`;
            }
        } else if (rolesSelectEdit !== null) {
            rolesSelect = rolesSelectEdit;
            userRolesHTML +=
                `<option value="ROLE_USER">USER</option>
                 <option value="ROLE_ADMIN">ADMIN</option>`
        }

        rolesSelect.innerHTML = userRolesHTML;
    })
}




















// async function fillModal() {
//
//     const deleteModal = document.getElementById("deleteModal");
//     deleteModal.addEventListener("show.bs.modal", async function(event) {
//
//         const userId = event.relatedTarget.dataset.userId;
//         const user = await getUserDataById(userId);
//         console.log(userId);
//         console.log(user)
//
//         document.getElementById("idDelete").value = user.id;
//         document.getElementById("firstNameDelete").value = user.name;
//         document.getElementById("lastNameDelete").value = user.surname;
//         document.getElementById("ageDelete").value = user.age;
//         document.getElementById("emailDelete").value = user.email;
//
//         let userRoles = document.getElementById("rolesDelete")
//         let userRolesHTML = "";
//         for (let i = 0; i < user.roles.length; i++) {
//             userRolesHTML +=
//                 `<option>${user.roles[i].roleNameWithoutRole}</option>`;
//         }
//         userRoles.innerHTML = userRolesHTML;
//     })
// }
//