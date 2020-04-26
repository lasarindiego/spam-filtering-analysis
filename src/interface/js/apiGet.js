function getApi(request){
    console.log(request);
    const url = 'http://127.0.0.1:3000/spam-analysis';
    const config = {
        headers:{
            Accept: 'application/json',
            'content-type': 'application/json',
        },
    };
    const data = {
        email: request.remetente, 
        options: request.body,
    };

    axios.post(url, data, config)
    .then((response)=>{
        console.log(response.data);
        document.getElementById('sucessoMark').innerHTML = response.data.postMark.success;
        document.getElementById('sucessoDatum').innerHTML = response.data.datumbox.status;
        document.getElementById('pontuacao').innerHTML = response.data.postMark.score;
        document.getElementById('datumbox').innerHTML = response.data.datumbox.result;
        document.getElementById('regra1').innerHTML = response.data.postMark.rules[0].score;
        document.getElementById('regra1d').innerHTML = response.data.postMark.rules[0].description;
        document.getElementById('regra2').innerHTML = response.data.postMark.rules[1].score;
        document.getElementById('regra2d').innerHTML = response.data.postMark.rules[1].description;
        document.getElementById('regra3').innerHTML = response.data.postMark.rules[2].score;
        document.getElementById('regra3d').innerHTML = response.data.postMark.rules[2].description;
        document.getElementById('regra4').innerHTML = response.data.postMark.rules[3].score;
        document.getElementById('regra4d').innerHTML = response.data.postMark.rules[3].description;
        document.getElementById('regra5').innerHTML = response.data.postMark.rules[4].score;
        document.getElementById('regra5d').innerHTML = response.data.postMark.rules[4].description;
        document.getElementById('regra6').innerHTML = response.data.postMark.rules[5].score;
        document.getElementById('regra6d').innerHTML = response.data.postMark.rules[5].description;
        document.getElementById('regra7').innerHTML = response.data.postMark.rules[6].score;
        document.getElementById('regra7d').innerHTML = response.data.postMark.rules[6].description;
        document.getElementById('regra8').innerHTML = response.data.postMark.rules[7].score;
        document.getElementById('regra8d').innerHTML = response.data.postMark.rules[7].description;
        document.getElementById('regra9').innerHTML = response.data.postMark.rules[8].score;
        document.getElementById('regra9d').innerHTML = response.data.postMark.rules[8].description;
    })
    .catch((error)=>{
        console.log(error)
    })
};
