function calcular(){
    let peso = document.querySelector("#mass").value;
    let altura = document.querySelector("#height").value;
    
    if(peso.length === 0 || altura.length === 0 || peso == 0){
        alert('Dados incorretos!');
    }else{
        let res = document.querySelector('.res');
        let IMC = Number(peso)/ (Number(altura) * Number(altura));

        res.innerHTML = `<p>Seu IMC é ${IMC.toFixed(2)}!</p>`;

        if(IMC < 18.5){
            res.innerHTML += "<p style='margin-top:5px;'>Situação: Abaixo do peso</p>";
        } else if(IMC < 25){
            res.innerHTML += "<p style='margin-top:5px;'>Situação: Peso ideal</p>";
        } else if(IMC < 30){
            res.innerHTML += "<p style='margin-top:5px;'>Situação: Sobrepeso</p>";
        } else if(IMC < 35){
            res.innerHTML += "<p style='margin-top:5px;'>Situação: Obesidade grau I</p>";
        } else if(IMC < 40){
            res.innerHTML += "<p style='margin-top:5px;'>Situação: Obesidade grau II</p>";
        }else{
            res.innerHTML += "<p style='margin-top:5px;'>Situação: Obesidade grau III</p>";
        }
    }
}



