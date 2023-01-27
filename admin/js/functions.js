//****************************************************
//Function generateAccessToken() to get access token 
//****************************************************

async function generateAccessToken() {
    try 
    {
        let response = await fetch(ROOT_URL + '/users/token', 
        {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username:"admin", password:"123"}) 
        });

        let data = await response.json();
        let token = data['Accesstoken'];        
        localStorage.setItem('accessToken', token)
    } 
    catch (error) 
    {
        console.log(error);
    }    
} 

//****************************************************
//Function checkAccessToken() to check that access token exitst
//****************************************************
function checkAccessToken() {
    if (!localStorage.getItem('accessToken')) 
    {
        generateAccessToken()
    }
}