function getApi(request){
    const url = 'http://127.0.0.1:3000/spam-analysis';
    const config = {
        headers:{
            Accept: 'application/json',
            'content-type': 'application/json',
        },
    };
    const data = {
        email: request.body, 
        remetente: request.remetente,
    };

    axios.post(url, data, config)
    .then((response)=>{
        document.getElementById('analise').style.display = "block"
        document.getElementById('sucessoMark').innerHTML = response.data.postMark.success;
        document.getElementById('pontuacao').innerHTML = response.data.postMark.score;
        response.data.postMark.rules.map((item, index) => {
            document.getElementById(`regra${index}`).innerHTML = item.score;
            document.getElementById(`regra${index}d`).innerHTML = item.description;
        })
        document.getElementById('sucessoDatum').innerHTML = response.data.datumbox.status;
        document.getElementById('datumbox').innerHTML = response.data.datumbox.result;
        document.getElementById('sucessoPlino').innerHTML = response.data.plino.status;
        document.getElementById('plino').innerHTML = response.data.plino.email_class;
    })
    .catch((error)=>{
        console.log(error)
    })
};
