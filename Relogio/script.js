const hora = document.getElementsByClassName("hora")[0];
const minuto = document.getElementsByClassName("minuto")[0];
const segundo = document.getElementsByClassName("segundo")[0];

const cor_dia = "linear-gradient(90deg, #ffffffff, #ff7296ff)";
const cor_tarde = "linear-gradient(90deg, #ffffffff, #ff4f81)";
const cor_noite = "linear-gradient(90deg, #ffffffff, #fd316bff)";

function dia() {
    document.body.style.background = cor_dia;
}

function tarde() {
    document.body.style.background = cor_tarde;
}

function noite() {
    document.body.style.background = cor_noite;
}

function relogio() {
    const agora = new Date();

    const hora_numero = agora.getHours();
    const minuto_numero = agora.getMinutes();
    const segundo_numero = agora.getSeconds();

    hora.textContent = String(hora_numero).padStart(2, "0");
    minuto.textContent = String(minuto_numero).padStart(2, "0");
    segundo.textContent = String(segundo_numero).padStart(2, "0");

    if (hora_numero < 12) {
        dia();
    } else if (hora_numero < 18) {
        tarde();
    } else {
        noite();
    }
}

setInterval(relogio, 1000);
relogio();
