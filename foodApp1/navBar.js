function navbar(){
  return `
  <nav id="nav">
    <ul>
      <li><a href="reciepeByName.html">Search recipe by name</a></li>
      <li><a href="getRecipeOfTheDay.html">Get recipe of the day</a></li>
      <li><a href="showLatestRecipe.html">show latest recipe</a></li>
    </ul>
    </nav>
    `
}

 async function fetchIt(link, id) {
        var resultDiv = document.getElementById(id);
        resultDiv.innerHTML = "";
        var res = await fetch(link);
        var res = await res.json()
        .then((res)=>{
          // console.log(res.meals);
          return res.meals;
        })
        .then((res)=>{
          
          console.log(res[0]);
          var container = document.createElement('div');
          container.style.display = "flex";
          container.style.flexWrap = "wrap";
          container.style.justifyContent = "spaceBetween"
          for(var recipe of res){
            var div = document.createElement('div');
            var image = document.createElement('img');
            var name = document.createElement('p');
            var area = document.createElement('p');
            var category = document.createElement('p');
            image.src = recipe.strMealThumb;
            image.style.height = "250px";
            image.style.width = "100%";
            name.textContent = `Meal : `+recipe.strMeal;
            area.textContent = `Area : `+recipe.strArea;
            category.textContent = `Category : `+recipe.strCategory;

            div.style.fontSize = "20px";
            div.style.fontWeight = "600";
            div.style.border = "1px solid black";
            div.style.color = "black";
            // div.style.width = "310px"
            div.style.padding = "25px";
            div.style.flexBasis = "20%";
            // div.style.gap = "0.5 rem";
            div.style.margin = "5px"
            div.append(image,name,area,category);
            container.append(div);
          }
          resultDiv.append(container);
          return res;
        })
        .catch(err=>{ 
          var resultDiv = document.getElementById(id);
          resultDiv.innerHTML = "";
          resultDiv.innerHTML = "! The Item that You searched was not found in our Database";
          resultDiv.style.color = "red";
          resultDiv.style.fontSize = "30px"
        })
  }

export {navbar,fetchIt};