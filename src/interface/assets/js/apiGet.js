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

        //Antideo
            //ipHealth
            if(response.data.hasOwnProperty('ipHealth')){
                document.getElementById('proxy').innerHTML = response.data.ipHealth.hasOwnProperty('proxy') ? 'Proxy: ' +  response.data.ipHealth.proxy : 'Não foi possível verificar o Proxy';
                document.getElementById('spam').innerHTML = response.data.ipHealth.hasOwnProperty('spam') ? 'SPAM: ' + response.data.ipHealth.spam : 'Não foi possível verificar se é SPAM';
            } else {
                document.getElementById('proxy').innerHTML = 'Não foi possível verificar o Proxy';
                document.getElementById('spam').innerHTML = 'Não foi possível verificar se é SPAM';
            }

            //ipInfo
            if(response.data.hasOwnProperty('ipInfo')){
                document.getElementById('host').innerHTML = response.data.ipInfo.hasOwnProperty('host') ? 'Host: ' + response.data.ipInfo.host : 'Não foi possível encontrar o host';
                document.getElementById('ip').innerHTML = response.data.ipInfo.hasOwnProperty('IP') ? 'IP: ' +  response.data.ipInfo.IP : 'Não foi possível encontrar o IP';
                document.getElementById('category').innerHTML = response.data.ipInfo.hasOwnProperty('org') && response.data.ipInfo.org.hasOwnProperty('category')  ? 'Categoria: ' + response.data.ipInfo.org.category : 'Não foi possível encontrar nenhuma categoria';
                document.getElementById('company').innerHTML = response.data.ipInfo.hasOwnProperty('org') && response.data.ipInfo.org.hasOwnProperty('name') ? 'Empresa: ' + response.data.ipInfo.org.name : 'Não foi possível encontrar a empresa';
            }  else {
                document.getElementById('host').innerHTML = 'Não foi possível encontrar o host';
                document.getElementById('ip').innerHTML = 'Não foi possível encontrar o IP';
                document.getElementById('category').innerHTML = 'Não foi possível encontrar nenhuma categoria';
                document.getElementById('company').innerHTML = 'Não foi possível encontrar a empresa';
            }

            //ipLocation
            if(response.data.hasOwnProperty('ipLocation')){
                document.getElementById('city').innerHTML = response.data.ipLocation.hasOwnProperty('city') ? 'Cidade: ' +  response.data.ipLocation.city : 'Não foi possível encontrar a cidade';
                document.getElementById('country').innerHTML = response.data.ipLocation.hasOwnProperty('country') ? 'País: ' +  response.data.ipLocation.country : 'Não foi possível encontrar o País';
                document.getElementById('countrycode').innerHTML = response.data.ipLocation.hasOwnProperty('country_code') ? 'Código do país: ' + response.data.ipLocation.country_code : 'Não foi possível encontrar o Código do país';
                document.getElementById('latitude').innerHTML =  response.data.ipLocation.hasOwnProperty('latitude') ? 'Latitude: ' + response.data.ipLocation.latitude : 'Não foi possível encontrar a Latitude';
                document.getElementById('longitude').innerHTML = response.data.ipLocation.hasOwnProperty('longitude') ? 'Longitude: ' +  response.data.ipLocation.longitude : 'Não foi possível encontrar o Longitude';
                document.getElementById('region').innerHTML = response.data.ipLocation.hasOwnProperty('region') ? 'Região: ' +  response.data.ipLocation.region : 'Não foi possível encontrar a Região';
            } else {
                
                document.getElementById('city').innerHTML = 'Não foi possível encontrar a cidade';
                document.getElementById('country').innerHTML = 'Não foi possível encontrar o País';
                document.getElementById('countrycode').innerHTML = 'Não foi possível encontrar o Código do país';
                document.getElementById('latitude').innerHTML = 'Não foi possível encontrar a Latitude';
                document.getElementById('longitude').innerHTML = 'Não foi possível encontrar o Longitude';
                document.getElementById('region').innerHTML = 'Não foi possível encontrar a Região';
            }

        //Clearout
        if(response.data.hasOwnProperty('clearout')){
            document.getElementById('domain').innerHTML = response.data.clearout.hasOwnProperty('detail_info') && response.data.clearout.detail_info.hasOwnProperty('domain') ? 'Domínio: ' + response.data.clearout.detail_info.domain : 'Não foi possível encontrar o domínio';
            document.getElementById('free').innerHTML = response.data.clearout.hasOwnProperty('free') ? 'Gratuito: ' + response.data.clearout.free : 'Não foi possível verificar se é gratuito';
            document.getElementById('role').innerHTML = response.data.clearout.hasOwnProperty('role') ? 'Perfil: ' + response.data.clearout.role : 'Não foi possível verificar se está em algum perfil';
            document.getElementById('disposable').innerHTML = response.data.clearout.hasOwnProperty('disposable') ? 'Temporário: ' + response.data.clearout.disposable : 'Não foi possível verificar se é temporário';
            document.getElementById('verified').innerHTML = response.data.clearout.hasOwnProperty('verified_on') ? 'Verificado: ' + response.data.clearout.verified_on : 'Não existe data de verificação';
        } else {
            document.getElementById('domain').innerHTML = 'Não foi possível encontrar o domínio';
            document.getElementById('free').innerHTML = 'Não foi possível verificar se é gratuito';
            document.getElementById('role').innerHTML = 'Não foi possível verificar se está em algum perfil';
            document.getElementById('disposable').innerHTML = 'Não foi possível verificar se é temporário';
            document.getElementById('verified').innerHTML = 'Não existe data de verificação';
        }

        //Deu certo o PhishTank?
        let phisingTank = document.querySelectorAll('*[id^="phish"]')
        phisingTank.forEach((item) => item.remove())
        response.data.phish.map((item, index) => {
            document.getElementById(`firstTdP`).insertAdjacentHTML(`beforeend`, `<br><table  class="alt"><thead><tr><th>Descrição</th><th>Resultado</th></tr><thead><tbody></tr><tr><td colspan='2' id="phish${index}u"><b>URL: ${item.url}</b></td></tr><tr><td>Foi possível realizar a checagem?</td><td id="phish${index}d">${item.database ? 'Sim' : 'Não'}</td></tr><tr><td id="phish${index}va"> É válido? </td><td>${item.valid}</td></tr><tr><td id="phish${index}ve">Foi verificado?</td><td> ${item.verified}</td></tr><tr><td id="phish${index}at>Verificado quando?</td><td> ${item.verified_at}</td></tr></tbody></table>`);
        })

    })
    .catch((error)=>{
        alert('Não foi possível conectar ao servidor');
        document.getElementById('loading').style.display = 'none';
        console.log(error)
    })
};
