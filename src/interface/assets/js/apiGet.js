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

        //Deu certo o SPAM_WATCHER? e pontuação
        document.getElementById('sucessoWatcher').innerHTML = response.data.postMark.success ? 'Sim' : 'Não';
        document.getElementById('pontuacaoWatcher').innerHTML = response.data.postMark.score;

        const retornosPostMark = {
            'Message appears to be missing most RFC-822 headers': 'Faltando cabeçalho RFC-822 da mensagem'
        }
        let postMarkElements = document.querySelectorAll('*[id^="rule"]')
        postMarkElements.forEach((item) => item.remove())
        response.data.postMark.rules.map((item, index) => {
            document.getElementById(`firstTd`).insertAdjacentHTML('afterend', `<tr><td id="rule${index}d">${item.description}</td><td id="rule${index}">${item.score}</td></tr>`);
        })

        //Datumbox
        document.getElementById('sucessoDatum').innerHTML = response.data.datumbox.status ? 'Sim' : 'Não';
        document.getElementById('datumboxTb').innerHTML = response.data.datumbox.result;

        //Plino
        document.getElementById('sucessoPlino').innerHTML = response.data.plino.status == 200 ? 'Sim' : 'Não';
        document.getElementById('plinoTb').innerHTML = response.data.plino.email_class;

      /*  //Antideo
            //ipHealth
            document.getElementById('proxy').innerHTML = 'Proxy: ' + response.data.ipHealth.proxy;
            document.getElementById('spam').innerHTML = 'SPAM: ' + response.data.ipHealth.spam;
            document.getElementById('toxic').innerHTML = 'Tóxico: ' + response.data.ipHealth.toxic;

            //ipInfo
            document.getElementById('host').innerHTML = 'Host: ' + response.data.ipInfo.host;
            document.getElementById('ip').innerHTML = 'IP: ' + response.data.ipInfo.IP;
            document.getElementById('category').innerHTML = 'Categoria: ' + response.data.ipInfo.org.category;
            document.getElementById('company').innerHTML = 'Empresa: ' + response.data.ipInfo.org.name;

            //ipLocation
            document.getElementById('city').innerHTML = 'Cidade: ' + response.data.ipLocation.city;
            document.getElementById('country').innerHTML = 'País: ' + response.data.ipLocation.country;
            document.getElementById('countrycode').innerHTML = 'Código do país: ' + response.data.ipLocation.country_code;
            document.getElementById('latitude').innerHTML = 'Latitude: ' + response.data.ipLocation.latitude;
            document.getElementById('longitude').innerHTML = 'Longitude: ' + response.data.ipLocation.longitude;
            document.getElementById('region').innerHTML = 'Região: ' + response.data.ipLocation.region;

        //Clearout
        document.getElementById('domain').innerHTML = 'Domínio: ' + response.data.clearout.detail_info.domain;
        document.getElementById('free').innerHTML = 'Gratuito: ' + response.data.clearout.free;
        document.getElementById('role').innerHTML = 'Perfil: ' + response.data.clearout.role;
        document.getElementById('disposable').innerHTML = 'Temporário: ' + response.data.clearout.disposable;
        document.getElementById('safe2send').innerHTML = 'Seguro para envio: ' + response.data.clearout.safe_to_send;
        document.getElementById('verified').innerHTML = 'Verificado: ' + response.data.clearout.verified_on; */

        //Deu certo o PhishTank?
        let phisingTank = document.querySelectorAll('*[id^="phish"]')
        phisingTank.forEach((item) => item.remove())
        response.data.phish.map((item, index) => {
            document.getElementById(`firstTdP`).insertAdjacentHTML(`afterend`, `<tr><td colspan='2' id="phish${index}u"><b>URL: ${item.url}</b></td></tr><tr><td>Foi possível realizar a checagem?</td><td id="phish${index}d">${item.database ? 'Sim' : 'Não'}</td></tr><tr><td id="phish${index}va"> É válido? </td><td>${item.valid}</td></tr><tr><td id="phish${index}ve"> Foi verificado?</td><td> ${item.verified}</td></tr><tr><td id="phish${index}at> Verificado quando?</td><td> ${item.verified_at}</td></tr>`);
        })

    })
    .catch((error)=>{
        alert('Não foi possível conectar ao servidor');
        document.getElementById('loading').style.display = 'none';
        console.log(error)
    })
};
