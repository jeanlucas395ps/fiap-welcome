// const form = document.getElementById('fiap-form');
// form.addEventListener('submit', (event) => {
//     console.log('passou')
function submitForm(){
    event.preventDefault(); 

    // Inputs
    const student1 = document.getElementById('student1').value;
    const student2 = document.getElementById('student2').value;
    const student3 = document.getElementById('student3').value;
    const student4 = document.getElementById('student4').value;
    const student5 = document.getElementById('student5').value;
    const message = document.getElementById('message').value;

    // Criando um objeto com os dados a serem enviados
    const data = {
        "names": [
            student1, student2, student3, student4, student5
        ],
        message
    }
    const url = "https://fsdt-contact.onrender.com/contact";
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro na requisição");
        }
        return response.json();
    })
    .then(data => {
        console.log("Resposta:", data);
    })    
    .catch(error => {
        console.error("Erro:", error);
    });
}
// });

