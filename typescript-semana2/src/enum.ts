enum TipoPessoa {
    Aluno = "Aluno",
    Professor = "Professor",
    
    // ou
    // Aluno = 0,
    // Professor = 1,
}


const tipoAluno = TipoPessoa.Aluno;

const tipoProfessor = TipoPessoa.Professor;

interface PessoaDevSchool {
    tipo: TipoPessoa
}

const PessoaDevSchool = {
    tipo: TipoPessoa.Aluno
}