
function coinflip(){
    
    outcome = Math.floor(Math.random() * 2);
    console.log(outcome)
    if (outcome == 1){
        let coinResult = "Heads";
        console.log(coinResult);
       //window.alert(coinResult);
        //document.write(coinResult);
        document.getElementById("coinResult").innerHTML = coinResult;
        return coinResult;
        
    }
    else if (outcome == 0) {
        let coinResult = "Tails";
        console.log(coinResult);
        //window.alert(coinResult);
        document.getElementById("coinResult").innerHTML = coinResult;
        //document.write(coinResult);
        return coinResult;
        
    }
    
    
}
