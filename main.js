/*Milestone 1
Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica: utilizzando soltanto HTML e CSS e riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento)
Milestone 2
Utilizzando Postman, testiamo una chiamata a questo endpoint:
https://lanciweb.github.io/demo/api/pictures/
Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.
Milestone 3
Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!
Font utilizzati:
titoli: ‘Edu Tas Beginner’, sans-serif;
date: ‘Sometype Mono’, ‘monospace’;*/

let cartolina = document.querySelector(".row")

fetch("https://lanciweb.github.io/demo/api/pictures/" , { method: "GET"})
.then(response => response.json())
.then(image => {
    console.log(image)
    image.forEach((element) => {
        console.log(element.id)
        
        cartolina.innerHTML += 
    `
    <div class="col-12 col-sm-6 col-md-4">
        <div class="card mb-3">
            <div class="position-absolute top-0 start-50 translate-middle">
                <img class="" src="./img/pin.svg" alt="">
            </div>
                <img width="100%" src= ${element.url} card-img-top p-3" alt="">
            <div class="card-body">
                <p class="card-text">${element.title}</p>
                <p class="card-text">${element.date}</p>
            </div>
        </div>
    </div>  

    `
    });
    
    
})
.catch(error => {
    console.error(error)
})

