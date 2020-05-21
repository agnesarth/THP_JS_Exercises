//Choisis la chaîne de protéine à traduire :
console.log("CCGUCGUUGCGCUACAGC donne les protéines suivantes :")
arn = "CCGUCGUUGCGCUACAGC"

//console.log("CCUCGCCGGUACUUCUCG donne les protéines suivantes :")
//arn = "CCUCGCCGGUACUUCUCG"

var arrayARN = new Array;

//function protein(arn){
  arrayARN = arn.match(/.{1,3}/g);
  let arrayProtein = []

  arrayARN.forEach(element => {
    if (element === "UCU" || element === "UCC" || element === "UCA" || element === "UCG" || element === "AGU" || element === "AGC" ){
    arrayProtein.push("Sérine")
    } else if (element === "CCU" || element === "CCC" || element === "CCA" || element === "CCG"){
      arrayProtein.push("Proline")
    } else if (element === "UUA" || element === "UUG"){
      arrayProtein.push("Leucine")
    } else if (element === "UUU" || element === "UUC"){
      arrayProtein.push("Phénylalanine")
    } else if (element === "CGU" || element === "CGC" || element === "CGA" || element === "CGG" || element  === "AGA" || element === "AGG" ){
      arrayProtein.push("Arginine")
    } else if (element === "UAU" || element === "UAC"){
    arrayProtein.push("Tyrosine")
    }
  });
  console.log(arrayProtein.join('-'));                                                       
//}

