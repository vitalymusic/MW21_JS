// Komentārs

        // 1. Sintakse

        // mansMainigais = > camelCase

        function manaFunkcija(){
            // Koda bloku atdala ar {}


        }

        // Katras instrukcijas beigās liekam ;

        // Visu rakstitu JS sakārtojam un komentējam

        
        // Datu tipi

        let pirmaisSkaitlis = 10 //integer
        let skaitlisArKomatu = 10.5 //Float

        let teksts = "Šis ir teksts" //String
        let html = '<h1>Tas ir virsraksts</h1>'
        let footer = `
                        <div class="alert">
                            <h3>Hello world!!!</h3>    
                        </div>`
        let sledzis = true //false //Boolean
        
        datuMasivs = [ //Array
            "Pirmdiena",
            "Otrdiena",
            "Trešdiena"
        ]
        
        let dzivoklis = { //Object
            platiba:75,
            istabuSkaits:4,
            sienuKrasa:"#ff0000",
            adrese:{
                pilseta:"Rīga",
                iela:"Merķeļa iela 11"
            },
            ipasnieki:["Jānis","Anna","Pēteris"]

        }


        // Datu izvade
        // 1. Izvade pašā dokumentā <body>

         document.body.innerHTML = html;
         document.body.innerHTML +=footer;
         
         
            // Datu ievade

            // let vards = prompt("Kā tevi sauc?");

            // alert("Labdien, "+vards+"!");

            document.body.innerHTML = "<h1>Labdien, " + vards + "!</h1>";

            let sk1 = 15,
                sk2 = 10,
                sk3 = 100,
                sk4 = 0.5;


             document.body.innerHTML += sk1 + sk2 + "<br>";
             document.body.innerHTML += sk1 - sk2 + "<br>";
             document.body.innerHTML += sk1 * sk2 + "<br>";
             document.body.innerHTML += sk1 / sk4 + "<br>";
            document.body.innerHTML += sk1+(sk3/2)*sk4;

            // Uzrakstīt programmu, kas aprēķina ķermeņa masas indeksu pēc formulas:
            // svars / (augums(metros)*augums(metros))

            let svars = prompt("Kads ir jūsu svars?");
            let augums = prompt("Kads ir jūsu augums (metros)?");
            let rezultāts = svars / (augums ** 2);
             document.body.innerHTML = "<h1>Jūsu ĶMI ir: " + rezultāts.toFixed(2) + "</h1>";
