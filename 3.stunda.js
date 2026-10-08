// Cikli

for(let i = 1;i <= 10;i++){
    document.body.innerHTML+=i+"<br>"
}

// for(let i = 100;i >= 0;i--){
   
//     if(i==50){
//         break;
//     }

//     document.body.innerHTML+=i+"<br>"

// }

const menesi = [
    "Janvāris",
    "Februāris",
    "Marts",
    "Aprīlis",
    "Maijs",
    "Jūnijs",
    "Jūlijs",
    "Augusts",
    "Septembris",
    "Oktobris",
    "Novembris",
    "Decembris"
];

 for(menesis of menesi){
    document.body.innerHTML += `<h1>${menesis}</h1>`;
 }


 function pazinojums(teksts,krasa){
        document.body.innerHTML = teksts;
        document.body.style.color = krasa;
 }

pazinojums("Hello","green");


 let bilzuSkaits = prompt("Cik bildes???");

 for(let i = 0;i < bilzuSkaits;i++){
    document.body.innerHTML+=`
        <img src="https://picsum.photos/id/${i}/400">
    `;
}
