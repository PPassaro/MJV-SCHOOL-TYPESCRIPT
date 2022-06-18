//1- Crie um tipo para representar um objeto que contenha as suas informações de nome, profissão, idade e uma lista de assuntos de seu interesse.

type Me = {
    name: string;
    profession: string;
    age: number;
    list: Array<string>;
}

// 2 - Crie um objeto utilizando o tipo criado no exercício 1 e o popule de acordo com suas informações.

const me: Me = {
    name: "Priscilla Passaro",
    profession: "Front end Developer",
    age: 22,
    list: [
        "k-pop", 
        "Movies",
        "Series",
        "Animes",
        "Animals"
    ],
}

// 3 - Faça uma função que receba como argumento um objeto do tipo do exercício 1, e retorne somente a lista de assuntos do objeto.

function listInterests(objMe: Me) {
    return objMe.list
}

// 4 - Coloque a tipagem tanto no argumento da função do exercício 3 quanto no tipo de retorno dela.

function listInterestsType(objMe: Me): Array<string>{
    return objMe.list
}

// 5 - Crie um enum para representar as Matérias do curso (Angular, Typescript e Git)

enum Materias {
    ANGULAR = "Angular",
    TYPESCRIPT = "Typescript",
    GIT = "git",
}

// 6 - Crie mais um tipo para representar os professores, contendo nome e uma lista das materias de cada um.

type Professor = {
    name: string;
    materiasList: Array<Materias>;
} 

//7 - Crie os objetos Alan e Nathan utilizando os tipos dos exercícios 5 e 6. Nathan = Angular e Git, Alan = Angular, Typescript e Git

const AlanObj: Professor = {
    name: "Alan",
    materiasList: [Materias.ANGULAR, Materias.GIT, Materias.TYPESCRIPT],
}

const NathanObj: Professor = {
    name: "Nathan",
    materiasList: [Materias.ANGULAR, Materias.GIT],
}

// 8 - Declare e popule um array com os objetos do exercício 7.

const ProfesorsList: Array<Professor> = [NathanObj, AlanObj];


// 9 - Faça uma função que receba um argumento de array de Professor e retorne um novo array de strings contendo somente os nomes dos professores.


function nameList(ProfesorsList: Array<Professor>){
    return ProfesorsList.map((professor: Professor) => professor.name);
}


// 10 - Faça uma função que receba um argumento de array de Professores e retorne um array de materias.

function materiasLists(ProfesorsList: Array<Professor>) {
    const materiasList: Array<Materias> = [];

    ProfesorsList.forEach(function (professor: Professor) {
        professor.materiasList.forEach(function(materia) {
            materiasList.push(materia);
        })
    })
    return materiasList;
}

const materiasList = materiasLists(ProfesorsList);


// 11 - Faça uma função que receba um argumento de array de Professores e retorne o primeiro Professor encontrado que dê aula de Typescript.

const getFirstTypescriptProfessor = (ProfesorsList: Array<Professor>) => {
    
    const primeiroProfessorEncontrado: Professor | undefined = ProfesorsList.find((professor) => {
      return professor.materiasList.includes(Materias.TYPESCRIPT);
    });
  
    if (primeiroProfessorEncontrado !== undefined) {
      return primeiroProfessorEncontrado;
    } else {
      return console.log("Sem professor de TypeScript encontrado.");
    }
  };

  console.log(getFirstTypescriptProfessor(ProfesorsList));