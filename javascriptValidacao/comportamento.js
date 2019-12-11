function visualizaSenha(id, idBtn){
    var elemento = document.getElementById(id);
    var btn = document.getElementById(idBtn);
    if (elemento.type == "password"){
        elemento.type = "text";
        btn.innerHTML = "#";
    } else {
        elemento.type = "password";
        btn.innerHTML = "@";
    }
}

function visualizarAreas(){
    var areas = document.getElementsByName("areas[]");
    var i;
    var mensagem = "";

    for(i = 0; i < areas.length; i++){
        if (areas[i].checked){
            mensagem += "- " + areas[i].value + "\r\n";
        }
    }

    if (mensagem != "")
        alert("Áreas selecionadas:\r\n" + mensagem);
    else
        alert("Nenhuma área foi selecionada.");

}

function confirmarSenha(){
    var confirma = document.getElementById("confirma").value;

    if (confirma.length > 0){
        var senha = document.getElementById("senha").value;
        if (senha != confirma)
        {
            var msg = "As senhas não conferem.";
            alert(msg);
            document.getElementById("erroSenha").innerHTML = msg;
        }
        else {
            document.getElementById("erroSenha").innerHTML = "";
        }
    }
}

function verificaSenha(){
    var senha = document.getElementById("senha").value;
    var msg = "";

    if(senha.length != 8)
        msg += "- A senha deve ter 8 caracteres\n";

    if(!senha.match(/[a-z]+/))
        msg += "- A senha deve ter pelo menos 1 letra minuscula.\n";

    if(!senha.match(/[A-Z]+/))
        msg += "- A senha deve ter pelo menos 1 letra maiuscula.\n";

    if(!senha.match(/[0-9]+/))
        msg += "- A senha deve ter pelo menos 1 número.\n";

    if (msg != "")
        alert(msg);
}

function validacao(){
    var autorizacao = false;
    var msg = "";

    /* VERIFICA NOME */
    var nome = document.getElementById("nome").value;
    if (nome.length < 1){
        msg += "- O campo nome é de preenchimento obrigatório \r\n";
    }

    /* VERIFICA IDADE */
    var idade = document.getElementById("idade").value;
    if (idade < 1 || idade > 125){
        msg += "- O campo idade deve ser preenchimento com um valor entre 1 e 125 \r\n";
    }

    /* VERIFICA AREAS DE INTERESSE */
    var areas = document.getElementsByName("areas[]");
    var i;
    var contador = 0;

    for(i = 0; i < areas.length; i++){
        if (areas[i].checked){
            contador++;
        }
    }

    if (contador < 1)
        msg += "- Selecione pelo menos uma área de interesse\r\n";

    /* VERIFICA CEP */
    var cep = document.getElementById("cep").value;
    var padraoCep = /^[0-9]{5}-?[0-9]{3}$/;

    if (!padraoCep.test(cep))
        msg += "- O campo CEP deve ser preenchido com um formato válido\r\n";
    
    if (msg != "")
        alert("Verifique os seguinte campos: \r\n" + msg);
    else autorizacao = true;

    return autorizacao;
}