const axios = require('axios');
function getApi(request){
    const url = 'http://127.0.0.1:3000/spam-analysis';
    const config = {
        headers:{
            Accept: 'application/json',
            'content-type': 'application/json',
        },
    };
    const data = {
        email: 'raw dump of email', 
        options: 'short',
    };

    axios.post(url, JSON.stringify(data), config)
    .then((response)=>{
        res.send(response.data)
    })
    .catch((error)=>{
        console.log(error)
    })
}