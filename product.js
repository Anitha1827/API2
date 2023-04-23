const url = `https://world.openfoodfacts.org/category/pastas/1.json`;

async function  getdata (){
    try {
        const response = await fetch(url);
        const data = await response.json();
        displaydata(data);
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}


function displaydata(data){
    const fooddetail = data.products;
    fooddetail.forEach(function(food){
        // console.log(food);
        var div = document.getElementById("onlineshop");
        div.innerHTML += `<div class="card border-secondary mb-3" style="width: 18rem;">
        <img src="${food.image_url}" class="card-img-top rounded" alt="...">
        <div class="card-body">
          <h4 class="card-title">${food.product_name}</h4>
          <p class="card-text">${food.categories}</p>
          <a href="${food.link}" class="btn btn-primary">Click to order</a>
        </div>
      </div>`
    })
   
//Food Product Onlinshoping
}
getdata();