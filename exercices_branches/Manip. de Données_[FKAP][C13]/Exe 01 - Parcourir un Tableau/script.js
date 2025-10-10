
const candidates = ['Le Filip','Ruby On The Nail','Leona Winter','Lula Strega','Misty Phoenix',
  'Perseo','Norma Bell','Edeha Noire','Magnetica','Afrodite Amour'];


  console.log(candidates[0]);
  console.log(candidates[7]);
  

    for (let i = 0; i < candidates.length; i++) {
    console.log(candidates[i])
  }

const ul = document.getElementById("ul")
  for (let i = 0; i < candidates.length; i++) {
    let listCandidates = document.createElement("li")
    console.log(candidates[i])
    ul.appendChild(listCandidates)
    listCandidates.innerText=candidates[i]
  }
 