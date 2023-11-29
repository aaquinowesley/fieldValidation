const formulario = document.getElementById("formulario").addEventListener('submit', (event) => {
    event.preventDefault();

    const cpf_input = document.getElementById("input-cpf").value;

    const email_input = document.getElementById("input-email").value;

    var cpf_formatado = mascaraCpf(cpf);

    // var formData = new FormData(formulario);
    // console.log(Object.fromEntries(formData);

    console.log('CPF:', cpf_formatado);
    console.log('E-mail:', email_input);
    validar_cpf(cpf_input);
})


document.getElementById('input-cpf').addEventListener('input', function() {
    this.value = mascaraCpf(this.value);
}); 



function validar_cpf(cpf_valor){
    // 11 digitos
    // formato da mask  000.000.000-00
    // ([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})
    if(cpf_valor.length >= 11){
        console.log('CPF Válido!')
    }else{
        console.log('CPF Inválido!')
    }
}


function mascaraCpf(v){
    v=v.replace(/\D/g,"")                    //Remove tudo o que não é dígito
    v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
    v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
                                             //de novo (para o segundo bloco de números)
    v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2") //Coloca um hífen entre o terceiro e o quarto dígitos
    return v
}

function mascaraCnpj(v){
    v=v.replace(/\D/g,"")                           //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/,"$1.$2")             //Coloca ponto entre o segundo e o terceiro dígitos
    v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3") //Coloca ponto entre o quinto e o sexto dígitos
    v=v.replace(/\.(\d{3})(\d)/,".$1/$2")           //Coloca uma barra entre o oitavo e o nono dígitos
    v=v.replace(/(\d{4})(\d)/,"$1-$2")              //Coloca um hífen depois do bloco de quatro dígitos
    return v
}

function validar_email(){
    /**
     * gmail
     * outlook
     * yahoo
     * hotmail
     */
}