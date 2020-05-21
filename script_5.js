const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


//Question 1:
if(books.some(book => book.rented === 0)){
  console.log("Un livre n'a jamais été emprunté.");
} else{
  console.log("Tous les livres ont été empruntés au moins une fois.");
}

//Question 2:
function compare1(a, b) {
  const rentedA = a.rented
  const rentedB = b.rented

let comparison = 0;
  if (rentedA > rentedB) {
    comparison = 1;
  } else if (rentedA < rentedB) {
    comparison = -1;
  }
  return comparison * -1;
}

order = books.sort(compare1);
console.log(`Le livre le plus emprunté est :`)
console.log(order[0])


//Question 3:
function compare(a, b) {
  const rentedA = a.rented
  const rentedB = b.rented

let comparison = 0;
  if (rentedA > rentedB) {
    comparison = 1;
  } else if (rentedA < rentedB) {
    comparison = -1;
  }
  return comparison;
}

order = books.sort(compare);
console.log(`Le livre le moins emprunté est :`)
console.log(order[0])


//Question 4:
const book1 = books.filter(e => e.id === 873495 )
console.log(`Voici le livre avec l'id 873485`)
console.log(book1)

//Question 5:
for(let n in books) {
  if(books[n].id === 133712){
    delete books[n];
  }
}
console.log(`Le livre avec l'id 133712 a été supprimé`)
console.log(books)

//Question 6:
console.log(`Voici la liste classée par ordre alphabétique :`)
function compare(a, b) {
  const nameA = a.title.toUpperCase();
  const nameB = b.title.toUpperCase();

let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
}

order = books.sort(compare);
console.log(order)