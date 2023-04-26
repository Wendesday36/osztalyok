class Szereplo {
    #szuletesinev//privát adattag
  constructor(nev,szul_ev) {
    //this. aktualis példányra mutat
    this.nev=nev
    this.#szuletesinev=nev
    this.szul_ev=szul_ev
  }
  getSzuletesinev(){
    return this.#szuletesinev;
  }
  setSzueltesinev(){
    this.#szuletesinev=ujnev
  }
}
export default Szereplo;