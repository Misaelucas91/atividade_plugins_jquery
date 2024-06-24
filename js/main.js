$(document).ready(function () {
  // Ativando o carrossel
  $("#carousel-imagens").slick({
    autoplay: true,
    arrows: false,
  });

  // Ativando as mascaras
  $("#telefone").mask("(00) 000-000-000", {
    placeholder: "(DDD) 123-456-789",
  });

  $("#cpf").mask("000.000.000-00", {
    placeholder: "123.456.789-00",
  });

  $("#cep").mask("000000-000", {
    placeholder: "123456-789",
  });

  // Validando o formulário
  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      endereco: {
        required: true,
      },
      cep: {
        required: true,
      },
      cpf: {
        required: true,
      },
    },
    submitHandler: function (form) {
      alert(
        "Sua requisição foi enviada para análise, parabéns pela aquisição!"
      );
      form.reset();
    },
    invalidHandler: function (form, validador) {
      alert("Por favor, preencha os campos para prosseguir com a compra!");
    },
  });
});
