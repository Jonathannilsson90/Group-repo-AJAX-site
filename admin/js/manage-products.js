//FULL_URL = 'https://group-repo-api-production.up.railway.app/users/token'
const ROOT_URL = "https://group-repo-api-production.up.railway.app";
const LOCALHOST_URL = "https://group-repo-api-production.up.railway.app";


//const table = document.getElementById('table');

async function generateAccessToken() {
    try {
        console.log('Inside generate access token');

        const response = await fetch(ROOT_URL + '/users/token', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({username:"admin1", password:"123"}) // body data type must match "Content-Type" header
        });
        const data = await response.json();
        let token = data['Accesstoken'];
        console.log(data);
        console.log(token);
        
        localStorage.setItem('accessToken', token)
        console.log(localStorage.getItem('accessToken'));
        return token;
    } catch (error) {
        console.log(error);
    }
    
}

document.addEventListener("DOMContentLoaded", async function(event) {
    console.log('Inside  admin tools ');
    let token = generateAccessToken();
})

