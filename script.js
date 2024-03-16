function validar(campo){
    let valido = /^[a-zA-Z]+$/;
    if(valido.test(campo.value)){
        Swan.fire({
            icon: 'error',
            title: 'Formato incorrecto',
            text: 'Ingrese una cadena de texto con el formato correcto'
        })
        return true;
    }else{
        
     alert("invalido")
        
    }
};

/*btn.addEventListener('click', ()=> {
    let string = document.querySelector('input').value;
    function validar(){
        const input = document.getElementById('campo');
        if(!input.checkValidity()){
            Swan.fire({
                icon: 'error',
                title: 'Formato incorrecto',
                text: 'Ingrese una cadena de texto con el formato correcto'
            })
        }
    }
    if(string.length >= 3 && string.length <= 64){
        
        function invertirCadena(str){
            let arrStr = str.split("");

            return console.log(arrStr.reverse().join("").toLowerCase());
        }
        invertirCadena(string);
    }else{
        Swal.fire({
            icon: 'danger',
            title: ''
        })
    }
})

/*let btn = document.querySelector('.btn');

btn.addEventListener('click', ()=> {
    let texto = document.querySelector('input').value;
    if(texto.indexOf('seul') != -1){
        Swal.fire({
            icon: 'success',
            title: 'Exitoso',
            text: 'Se escribió correctamente'
        })
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Opps...',
            text: 'Se escribió incorrectamente'
        })
    }
});*/