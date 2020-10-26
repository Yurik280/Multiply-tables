let tabla = document.getElementById("tabla");
let txt = "";
for (let i = 11; i >= 9; i--) {
    txt+=`<h4>La tabla del ${i}:</h4>`;
    for (let j = 1; j <= 10; j++) {
        res = i * j;
        txt+=`<p>${i} x ${j}: ${res}</p>`;        
    }
}
tabla.innerHTML = txt;
