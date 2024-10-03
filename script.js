(function () {
  var ex1_button = document.getElementById("ex1_button");

  var ex1_content = document.getElementById("ex1_content");
  var ex2_text = document.getElementById("ex2_text");
  var ex2_content = document.getElementById("ex2_content");
  ex1_button.onclick = function () {
    var tabela = [];

    for (var i = 0; i <= 9; i++) {
      tabela.push(i);
    }

    ex1_content.innerHTML = tabela.toString();
  };

  
})();
