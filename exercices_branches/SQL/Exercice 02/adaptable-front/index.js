const API_URL = "http://localhost:3000";

const edusignElement = document.querySelector("#edusign");
const lastname = document.querySelector("#lastname")
const firstname = document.querySelector("#firstname")


const loadUsers = async () => {
    const response = await fetch(`${API_URL}/users`);
    const data = await response.json();
    console.log(data);

   lastname.innerText = data[0].lastname
   firstname.innerText = data[0].firstname
   
    };

loadUsers();
