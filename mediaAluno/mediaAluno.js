const calculaMedia = () => {
    let av1 = parseInt(document.getElementById("av1").value);
    let av2 = parseInt(document.getElementById("av2").value);
    let media = (av1 + av2) / 2;

    if (document.getElementById("av1").value == "") {
        alert("Atenção: Av1 não foi digitada!");
        document.getElementById("av1").focus();
        return false;
    }
    if (document.getElementById("av1").value < 0 || av1 > 10) {
        alert("Atenção: nota inválida! aceitavél (0 à 10)");
        document.getElementById("av1").focus();
        return false;
    }
    if (document.getElementById("av2").value == "") {
        alert("Atenção: Av2 não foi digitada!");
        document.getElementById("av2").focus();
        return false;
    }
    if (document.getElementById("av2").value < 0 || av2 > 10) {
        alert("Atenção: nota inválida! aceitavél (0 à 10)");
        document.getElementById("av2").focus();
        return false;
    }
    if (media >= 7) {
        //alert(`Aprovado com média: ${media}`);
        document.getElementById("resultado").innerHTML = "Aprovado com Media: " + media;
        document.getElementById("resultado").style.color = 'blue'
    } else if (media >= 5) {
        //alert(`Recuperação com média: ${media}`);
        document.getElementById("resultado").innerHTML = "Recuperação com Media: " + media;
        document.getElementById("resultado").style.color = 'green'
    } else {
        //alert(`Reprovado com média: ${media}`);
        document.getElementById("resultado").innerHTML = "Reprovado com Media: " + media;
        document.getElementById("resultado").style.color = 'red'
    }
}