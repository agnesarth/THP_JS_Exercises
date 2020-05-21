let answer = "";
answer = prompt("Allez, balance ton sac");

while(answer !== "exit") {
  if (answer.endsWith("?")){
    answer = prompt("Ouais Ouais...");
    console.log("Ouais Ouais...");
  } else if (answer == answer.toUpperCase() && answer !== answer.toLowerCase()){
    answer = prompt("Pwa, calme-toi...");   
    console.log("Pwa, calme-toi..."); 
  } else if (answer.includes("Fortnite")){
    answer = prompt("Ouais on s' fait une partie soum-soum ?");
    console.log("Ouais on s' fait une partie soum-soum ?"); 
  } else if (answer == ""){
    answer = prompt("t'es en PLS ?");
    console.log("t'es en PLS ?");
  } else {
    answer = prompt("balek");
    console.log("balek");
  }
}


