
var cartList = JSON.parse(localStorage.getItem("cart"))||[];
var count=0;
var sum=0;

cartList.map(function(elem){
    document.querySelector("#count").innerHTML="";
    document.querySelector("#total").innerHTML="";

    var div = document.createElement("div");

    var img = document.createElement("img");
    img.src=elem.strMealThumb;
    img.style.height="240px";
    img.style.width="200px";
    img.style.borderRadius="10px";
    
    var titel = document.createElement("h3");
    titel.textContent=elem.strMeal;

    var price = document.createElement("h3");
    price.textContent=elem.strPrice;

    sum=sum+elem.strPrice;
   

    var button = document.createElement("button");
    button.textContent="Remove";
    button.style.cursor="pointer";
    button.setAttribute("id","set");
    button.addEventListener("click",function(){
        document.querySelector("#total").innerHTML="";
        document.querySelector("#count").innerHTML="";

       
        sum-=elem.strPrice;
      
        document.querySelector("#total").append(sum);
       
        count--;
        document.querySelector("#count").append(count);
        event.target.parentNode.remove();

    });


    var div2 = document.createElement("div");
    div2.setAttribute("id","wii");
    //div2.append(price,button);
    count++;

    div.append(img,titel,price,button);
    document.querySelector("#cart").append(div);
    document.querySelector("#count").append(count);
    document.querySelector("#total").append(sum);




})

function checkout(){
    window.location.href="checkout.html";
}

