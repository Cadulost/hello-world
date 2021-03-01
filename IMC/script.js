function calcular(){
    let peso = document.querySelector("#mass").value;
    let altura = document.querySelector("#height").value;
    
    if(peso.length === 0 || altura.length === 0){
        alert('Faltam dados!');
    }else{
        let res = document.querySelector('.res');
        let IMC = Number(peso)/ (Number(altura) * Number(altura));

        res.innerHTML = `Seu IMC é ${IMC.toFixed(2)}!`;
    }
}



