let answer = "";
answer = prompt("Allez, balance ton sac");

while(answer !== "exit") {
  if (answer.endsWith("?")){
    answer = prompt("Ouais Ouais...");
  } else if (answer == answer.toUpperCase() && answer !== answer.toLowerCase()){
    answer = prompt("Pwa, calme-toi...");    
  } else if (answer.includes("Fortnite")){
    answer = prompt("Ouais on s' fait une partie soum-soum ?");
  } else if (answer == ""){
    answer = prompt("t'es en PLS ?");
  } else {
    answer = prompt("balek");
  }
}


