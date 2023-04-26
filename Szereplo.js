class Szereplo {
  #szuletesinev; //privát adattag
  constructor(nev, szul_ev,szuloElem) {
    //this. aktualis példányra mutat
    this.nev = nev;
    this.#szuletesinev = nev;
    this.szul_ev = szul_ev;
    this.hanyEves=this.kor()

    //adatok megjelenitese a html oldalon
    szuloElem.append(`<div class="szereplo">
            <h3>${this.nev}</h3>
            <p>${this.hanyEves}</p>
    </div>`)
    //minden olyan adattaghoz kell egy adattagot rendelni amivel kesobb foglalkozni akarunk
    this.szereploElem=$(".szereplo:last-child")
    //rakattintok az aktualis div-re
    console.log(this.szereploElem)
 /*    this.szereploElem.on("click",function(){
        //function esetén a this az esemény kiválto elemre mutat
        console.log(this.nev)
    }) */

    this.szereploElem.on("click",()=>{
        //function esetén a this az esemény kiválto elemre mutat
        console.log(this.nev)
    })
  }
  getSzuletesinev() {
    return this.#szuletesinev;
  }
  setSzueltesinev(ujnev) {
    //csak nagy betuvel kezdodhet,nem tartalmazhat szamokat
    this.#szuletesinev = ujnev;
  }
  kor() {
    const d = new Date();
    let year = d.getFullYear();
    let evekSzama = year-this.szul_ev;
    return evekSzama;
  }
}
export default Szereplo;
