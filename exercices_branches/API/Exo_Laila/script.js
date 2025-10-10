async function movies(){
    const response = await fetch('https://the-one-api.dev/v2/movie',{
        headers: {Authorization:"Bearer GVeTGNvHZopfMwTwXkwl"}})
        console.log(response);
    
    const data = await response.json(); 
    console.log(data);

    const filmList = document.getElementById("films")
    for (let item of data.docs){
    let list = document.createElement("li");
    let nom = document.createElement("h3");
    let budget = document.createElement("p");

    
    nom.innerHTML = item.name;
    budget.innerHTML = ` a couté ${item.budgetInMillions} millions de $`;
   

    filmList.appendChild(list);
    list.appendChild(nom);
    list.appendChild(budget);
    }
}

movies()