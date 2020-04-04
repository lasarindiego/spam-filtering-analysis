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
        console.log(response.data)
        //res.send(response.data);
    })
    .catch((error)=>{
        console.log(error)
    })
};
