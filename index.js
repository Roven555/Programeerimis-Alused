function kontrolliVanust() {
  let sisend = prompt("Sisesta oma vanus:");

  if (sisend === "" || isNaN(sisend)) {
    alert("Sisend ei ole korrektne. Sisesta oma vanus.");
    kontrolliVanust(); return;
    
  }

  let vanus = Number(sisend);

  if (vanus >= 7 && vanus <= 16) {
    alert("Sööd kell 10.");
  } else if (vanus >= 17 && vanus <= 20) {
    alert("Sööd kell 11.");
  } else if (vanus >= 20 && vanus <= 125 ) {
    alert("Sööd kell 12.");
  } else {
    alert("Sisend ei ole korrektne. Sisenda korrektne vanus (7-125a).");
  }
}

kontrolliVanust();
