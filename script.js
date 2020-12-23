function pintar() {
    var opt = document.querySelector('input[name="cor"]:checked').value;
    var img = window.document.getElementById('imgm')

    if(opt == 1){
        img.src = 'img/bmwcianoL.png'
    } else if(opt == 2){
        img.src = 'img/bmwvermelhaL.png'
    }else if(opt == 3){
        img.src = 'img/bmwverdeL.png'
    }else if(opt == 4){
        img.src = 'img/bmwamarelaL.png'
    }else if(opt == 5){
        img.src =  'img/bmwlaranjaL.png'
    }else if(opt == 6){
        img.src = 'img/bmwrosaL.png'
    } else {
        img.src = 'img/carro-bmw.jpg'
    }
    
    //tentei com switch mas não funcionou
}