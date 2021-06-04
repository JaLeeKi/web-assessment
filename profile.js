let colorBtn = document.querySelector('button#color');
let placeBtn = document.querySelector('button#place');
let ritualBtn = document.querySelector('button#ritual');

function buttonClick (evt) {
    // console.log(evt);
    if (evt.target.id === 'color'){
        alert("Green!")
    }else if (evt.target.id === 'place'){
        alert("Utah!")
    }else{
        alert("What does this even mean?")
    }
}

colorBtn.addEventListener('click', buttonClick)
placeBtn.addEventListener('click', buttonClick)
ritualBtn.addEventListener('click', buttonClick)