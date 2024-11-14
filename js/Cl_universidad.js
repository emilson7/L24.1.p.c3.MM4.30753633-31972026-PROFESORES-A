class Cl_universidad {
  constructor() {
    this.professores = [];
  }

  agregarProfesor(profesor) {
    this.professores.push(profesor);
  }

  profesoresCategoria(profesores, categoria) {
    return profesores.filter(profesor => profesor.categoria === categoria); 
  }
}

export default Cl_universidad;
