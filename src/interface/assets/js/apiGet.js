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
        fullheader: request.fullheader
    };

    axios.post(url, data, config)
    .then((response)=>{
        document.getElementById('loading').style.display = 'none';
        document.getElementById('analise').style.display = 'block';
        document.getElementById('sucessoWatcher').innerHTML = response.data.postMark.success ? 'Sim' : 'Não';
        document.getElementById('pontuacaoWatcher').innerHTML = response.data.postMark.score;
        const retornosPostMark = {
            'Message appears to be missing most RFC-822 headers': 'Faltando cabeçalho RFC-822 da mensagem'
        }
        let count = 0;
        response.data.postMark.rules.map((item, index) => {
            document.getElementById(`firstTd`).insertAdjacentHTML('afterend', `<tr><td id="rule${count}d">${item.description}</td><td id="rule${count}">${item.score}</td></tr>`);
        })
        document.getElementById('sucessoDatum').innerHTML = response.data.datumbox.status ? 'Sim' : 'Não';
        document.getElementById('datumboxTb').innerHTML = response.data.datumbox.result;
        document.getElementById('sucessoPlino').innerHTML = response.data.plino.status == 200 ? 'Sim' : 'Não';
        document.getElementById('plinoTb').innerHTML = response.data.plino.email_class;
    })
    .catch((error)=>{
        console.log(error)
    })
};
