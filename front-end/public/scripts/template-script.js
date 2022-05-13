const funcionarios = [
  {
    id: "0",
    img: "/imgs/peoples/pexels-justin-shaifer-1222271.jpg",
    nome: "jose",
    area: "developer",
    localidade: "",
  },
  {
    id: "1",
    img: "/imgs/peoples/pexels-pixabay-371160.jpg",
    nome: "ana",
    area: "developer",
    localidade: "",
  },
  {
    id: "2",
    img: "/imgs/peoples/pexels-pixabay-371160.jpg",
    nome: "Dayane",
    area: "developer",
    localidade: "",
  },
  {
    id: "3",
    img: "/imgs/peoples/pexels-pixabay-371160.jpg",
    nome: "joao",
    area: "developer",
    localidade: "",
  },
  {
    id: "4",
    img: "/imgs/peoples/pexels-pixabay-371160.jpg",
    nome: "layon",
    area: "developer",
    localidade: "",
  },
  {
    id: "5",
    img: "/imgs/peoples/pexels-pixabay-371160.jpg",
    nome: "lucas",
    area: "developer",
    localidade: "",
  },
];

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
