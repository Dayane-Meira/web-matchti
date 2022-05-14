function reqJson(){
  var request = new XMLHttpRequest();
  request.open('GET', 'http://localhost:5000/profissionais', false);
  request.send();

  return JSON.parse(request.responseText);
}

funcionarios = reqJson()

innerHtmlFuncionarios = () => {
  var funcionariosTableHtml = document.querySelector(".cards");

  funcionarios.map((val) => {
    funcionariosTableHtml.innerHTML +=
      `
      <div class="card">
           <span>
              <img class="column avatar" src="` +
      val.img +
      `" alt="avatar">
                  </span>
                    <div class="column name-tec">
                        ` +
      val.nome +
      `
                    </div>
                    <div class="column area-atuacao">
                        ` +
      val.area +
      `
                    </div>
         <img src="https://img.icons8.com/windows/32/000000/like--v1.png" />
      </div>
    `;
  });
};

innerHtmlFuncionarios();
