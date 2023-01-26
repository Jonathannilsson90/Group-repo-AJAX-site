async function generateAccessToken() {
    try {
        console.log('Inside generate access token');

        let url = ROOT_URL + '/users/token'; 

        //console.log(url)
        let response = await fetch(url, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username:"admin", password:"123"}) 
        });

        let data = await response.json();
        //console.log(data);
        let token = data['Accesstoken'];
        
        localStorage.setItem('accessToken', token)
        //console.log(localStorage.getItem('accessToken'));
        //return token;
    } catch (error) {
        console.log(error);
    }    
} 

function checkAccessToken() {
    if (!localStorage.getItem('accessToken')) {
        generateAccessToken()
    }
}