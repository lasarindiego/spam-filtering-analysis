async function callAPI(){
    document.getElementById('loading').style.display = 'block';
    const email = {
        remetente: document.getElementById('email').value,
        body: document.getElementById('corpoEmail').value,
        fullheader: document.getElementById('fullHeader').value
    };
    const resposta = await getApi(email);
    console.log(resposta);
    //getApi(email).then((resposta) => {console.log(resposta);})
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
    this.classList.toggle("ativo");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
    content.style.display = "none";
    } else {
    content.style.display = "block";
    }
});
}