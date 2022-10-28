const tx_nome = document.getElementById("tx-nome");
const tx_email = document.getElementById("tx-email");
const btn_submit = document.getElementById("btn-submit");

function valida_campos(e) {
    if(tx_nome.value.trim() == "" && tx_email.value.trim() == "") {
        e.preventDefault();
        alert("O nome e e-mail não podem ser vazios!");
        tx_nome.focus()
    } else if(tx_nome.value.trim() == "") {
        e.preventDefault();
        alert("O nome não pode ser vazio!");
        tx_nome.focus()
    } else if (tx_email.value.trim() == "") {
        e.preventDefault();
        alert("O e-mail não pode ser vazio!");
        tx_email.focus()
    }
}

btn_submit.addEventListener("click", valida_campos);



