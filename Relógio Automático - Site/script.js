function zeroEsquerda(numero) {
  return numero < 10 ? "0" + numero : numero;
}

function carregar() {
  // Obtém a referência para o elemento de mensagem
  var msg = window.document.getElementById("msg");

  // Obtém a referência para o elemento de imagem
  var img = window.document.getElementById("imagem");

  var horarioElemento = document.getElementById("horario");

  function atualizarHorario() {
    var data = new Date();
    // Obtém a hora, os minutos e os segundos atuais
    var hora = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();
    // Formata os minutos e segundos com o "0" na esquerda
    var horaFormatada = hora < 10 ? "0" + hora : hora;
    var minutosFormatados = zeroEsquerda(minutos);
    var segundosFormatados = zeroEsquerda(segundos);

    var horarioCompleto =
      horaFormatada + ":" + minutosFormatados + segundosFormatados;

    horarioElemento.textContent = horarioCompleto;

    // Define a mensagem exibindo a hora atual
    msg.innerHTML = `${horaFormatada}:${minutosFormatados}:${segundosFormatados}`;

    // Verifica a hora para definir a imagem e o estilo de fundo
    if (hora >= 7 && hora < 12) {
      // Manhã | Bom Dia
      img.src = "manha.png";
      document.body.style.background = "#FFFACD";
    } else if (hora >= 12 && hora < 18) {
      // Tarde | Boa Tarde
      img.src = "tarde.png";
      document.body.style.background = "#D8BFD8";
    } else if (hora >= 18 && hora < 24) {
      // Noite | Boa Noite
      img.src = "noite.png";
      document.body.style.background = "#778899";
    } else {
      // Madrugada | Boa Madrugada
      img.src = "madrugada.png";
      document.body.style.background = "#696969";
    }

    setTimeout(atualizarHorario, 1000);
  }

  atualizarHorario();
}

carregar();
