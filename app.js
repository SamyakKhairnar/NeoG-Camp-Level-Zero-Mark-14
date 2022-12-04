var initialPrice = document.querySelector("#initial-price");
var numberOfStock = document.querySelector("#stocks");
var currentPrice = document.querySelector("#current-price");
var button = document.querySelector("#check-btn");
var output = document.querySelector("#message");

button.addEventListener("click", function clickhandler(){

    if (Number(initialPrice.value) <0 || Number(numberOfStock.value) <=0 || Number(currentPrice.value) <=0){
        output.style.color="blue";
        output.innerText = "* All Inputs Should be Greater than Zero ! *";
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
        output.innerText = "Oh No ☹️ !\n You're in Loss of "+Math.round(lossPercent)+"% which is Rs. "+Math.round(loss)+"/-";
    }else if(current > buy){
        var profit = (current - buy) * quantity;
		var profitPercent = (profit / (buy * quantity)) * 100;
		output.style.color = "green";
        output.innerText = "Congratulations 😃 !\n You're in Profit of "+Math.round(profitPercent)+"% which is Rs. "+Math.round(profit)+"/-";
    }else{
        output.style.color = "yellow";
        output.innerText = "No Worries 😃 ! There's No Loss but also No Profit ☹️ !!"
    }

}