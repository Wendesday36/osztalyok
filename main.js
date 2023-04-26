import Szereplo from "./Szereplo.js";

$(function () {
  //példányositjuk
  const szereplo1 = new Szereplo("János", 1972);
  console.log(szereplo1);
  szereplo1.jegy = 12;
  console.log(szereplo1);
  szereplo1.nev = "Béla";
  console.log(szereplo1);
  //szereplo1.#szuletesinev="Béla" nem tudod változtatni mert privát
  console.log(szereplo1.getSzuletesNev)
});
