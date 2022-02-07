var count=0;
var arr=[];

async function getItem(){
    try{
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian`);
        let data = await res.json();
        let ans = data.meals;
        console.log(data.meals);
        appendData(ans)

    }catch(err){
        console.log(err);
    }
}
getItem();

function appendData(user){
    user.map(function(elem){

        var div = document.createElement("div");

        var img = document.createElement("img");
        img.src = elem.strMealThumb;
        img.style.height="250px";
        img.style.width="220px";
        img.style.borderRadius="10px";

        var titel = document.createElement("h3");
        titel.textContent=elem.strMeal;
        var price = document.createElement("h3");
        price.textContent=Math.floor(Math.random()*400)+100;

        var button = document.createElement("button");
        button.textContent="Add To Cart";
        button.style.cursor="pointer";
        button.setAttribute("id","set");
        button.addEventListener("click",function(){
            addToCart(elem);
        })

        var div2 = document.createElement("div");
        div2.setAttribute("id","wii");
        div2.append(price,button);
        div.append(img,titel,div2);
        document.querySelector("#menu").append(div);
    })

}

function addToCart(user){
   count.innerHTML="";
   let cartObj ={
       strMealThumb:user.strMealThumb,
       strMeal:user.strMeal,
       strPrice:Math.floor(Math.random()*400)+100
       
   }
   count++;
   arr.push(cartObj);
   localStorage.setItem("cart",JSON.stringify(arr));
   document.querySelector("#count").innerHTML=count;

}
