document.querySelector("#doc").innerHTML="Please wait few Min..";


setTimeout(function(){
    alert("Your order is accepted ");
},0000)
function checkit(){
    document.querySelector("#doc").innerHTML="Please wait few Min..";
}
setTimeout(checkit,1000);

function check(){
    document.querySelector("#doc").innerHTML="";
}
setTimeout(checkit,3000)

setTimeout(function(){
    alert("Your order is being cooked")
},3800)

setTimeout(function(){
    alert("Your order is ready ")
},8000)

setTimeout(function(){
    alert("Order out for delivery ")
},10000)

setTimeout(function(){
    alert("Order delivered");
    document.querySelector("#doc").innerHTML="Thank You For Purchaseing"

},12000)

