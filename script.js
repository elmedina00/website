function sendMail(){
    let parms={
        name:document.getElementById("name").value,
        name:document.getElementById("email").value,
        name:document.getElementById("message").value,
    }
    emailjs.send("")
}