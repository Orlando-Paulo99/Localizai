function localizar(){
    let cep=document.getElementById("cep").value

    let  cepNew=document.getElementById("cepNew")
    let logradouro=document.getElementById("logradouro")
    let bairro=document.getElementById("bairro")
    
    try{
        
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response=> response.json())
        .then(data=>{
            cepNew.innerHTML="CEP: "+data.cep
            logradouro.innerHTML ="Logradouro: "+data.logradouro
            bairro.innerHTML ="Bairro: "+data.bairro
            
            limpar()

        })

    }
    catch (error){
        console.log(error)
        cepNew.innerHTML="";
    }

            
}

