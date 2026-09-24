// darbības ar Skatiļiem un teksta virknēm


let skaitlis = 125.45678;

document.body.innerHTML = skaitlis.toFixed(2) //Skaitļu noapaļošana

// Matemātiskas funkcijas

let rezultats = Math.pow(skaitlis,3);
    rezultats = Math.sqrt(81);
    rezultats = Math.random()*255;
    rezultats = Math.trunc(rezultats)
    // Math.floor(), Math.ceil()






// document.body.innerHTML = rezultats



// Fona maiņa

function fonaMaina(){


let hue = Math.trunc(Math.random()*360);
document.body.style.color = `hsl(${hue}, 100%, 50%)`

}

setInterval(fonaMaina,1000)
// console.log(hue);


// Teksta funkcijas


let teksts = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.";

izvade = teksts.length;
izvade = teksts.toUpperCase();
izvade = teksts.toLowerCase();
izvade = teksts.slice(10,20);
izvade = teksts.replaceAll("Lorem","RMMT");
izvade = teksts.repeat(100)


// 





document.body.innerHTML = izvade;