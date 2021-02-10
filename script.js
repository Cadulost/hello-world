var opt = document.querySelectorAll(".btn"); 
var img = window.document.getElementById('imgm')

//change car image
for(let i=0; i<opt.length;i++){
    opt[i].addEventListener("click", function(){
        img.src = this.getAttribute('data-color');
    });
}
