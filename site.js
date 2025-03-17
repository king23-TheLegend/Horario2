function carregar() {
    var msg=window.document.getElementById("msg")
    var img=window.document.getElementById("foto")
    var data=new Date()
    var hora=data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora>=0 && hora <12){
        img.src='Manhã.jpg'
        document.body.style.background="ligthgreen"
    }else if (hora>=12 && hora <=18){
        img.src="Tarde.jpg"
        document.body.style.background="orange"
    }else{
        img.src="Noite.jpg"
        
        document.body.style.background="gray"
    }


}