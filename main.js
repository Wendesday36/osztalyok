import Szereplo from "./Szereplo.js";

$(function () {
  //példányositjuk
  const szuloElem = $(".tarolo");
  const szereplo1 = new Szereplo("János", 1972,szuloElem);
  const szereplo2 = new Szereplo("Éva", 2000,szuloElem);
 /*  console.log(szereplo1); */
  

  szereplo1.jegy = 12;
 /*  console.log(szereplo1); */
  szereplo1.nev = "Béla";
  /* console.log(szereplo1); */
  //szereplo1.#szuletesinev="Béla" nem tudod változtatni mert privát
  /* console.log(szereplo1.getSzuletesinev());
  console.log(szereplo1.kor()); */
  
});
