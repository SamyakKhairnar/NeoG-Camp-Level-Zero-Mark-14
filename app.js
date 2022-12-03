var initialPrice = document.querySelector("#initial-price");
var numberOfStock = document.querySelector("#stocks");
var currentPrice = document.querySelector("#current-price");
var button = document.querySelector("#check-btn");
var output = document.querySelector("#message");

button.addEventListener("click", function clickhandler(){

    if (initialPrice.value === "" || numberOfStock.value === "" || currentPrice.value === ""){
        output.style.color="blue";
        output.innerText = "* All Inputs Required to Check Returns *";
    }else{
        checkStockReturn();
    }

});

function checkStockReturn(){
    var buy = Number(initialPrice.value);
    var current = Number(currentPrice.value);
    var quantity = Number(numberOfStock.value);

    console.log(buy,current,quantity);
    
    if (buy > current){
        var loss = (buy - current) * quantity;
		var lossPercent = (loss / (buy * quantity)) * 100;
		output.style.color = "red";
        output.innerText = "Oh No ☹️ ! You're in Loss of "+lossPercent+"% which is Rs. "+loss+"/-";
    }else if(current > buy){
        var profit = (current - buy) * quantity;
		var profitPercent = (profit / (buy * quantity)) * 100;
		output.style.color = "green";
        output.innerText = "Congratulations 😃 ! You're in Profit of "+profitPercent+"% which is Rs. "+profit+"/-";
    }else{
        output.style.color = "yellow";
        output.innerText = "No Worries 😃 ! There's No Loss but also No Profit ☹️ !!"
    }

}