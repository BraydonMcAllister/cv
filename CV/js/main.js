function displayMessage(){
    document.getElementById('main-header').innerHTML = "Override Header";
}

let inputs = document.getElementsByClassName('basic-input');
let errorMessage = document.getElementsByClassName('error-message');

function formValidation(){
    
    let items = [inputs.length];
    let errors = [inputs.length];
    let isFormOkay = true;

    //no special characters
    //
    for(let i = 0; i < inputs.length; i++){
        let item = inputs.item(i);
        items[i] = item.value;
        if(item.value === null || item.value === ""){
            errors[i] = "error, no value given";         
            isFormOkay = false;  
        }
    }

    for(let i = 0; i < items.length; i++){
        if(errors[i] != undefined || errors[i] != null){
            errorMessage.item(i).innerHTML = errors[i];
        }else if(errors[i] > 0){
            errorMessage.item(i).innerHTML = "";
        }
    }

    errors = null;
    return isFormOkay;
}

function clearErrors(clickedElement){
    errorMessage.item(clickedElement).innerHTML = "";
}


function checkValue(){
    let item = document.getElementById('display-message');
    item.innerHTML = document.getElementsByClassName('basic-input').item(2).value;
}




