
const ROOT_URL = "https://group-repo-api-production.up.railway.app";


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


const form = document.getElementById('create-book');

form.addEventListener('submit', async function(event) {
    event.preventDefault();

    console.log('Inside submit function');
    checkAccessToken();
    console.log(localStorage.getItem('accessToken'))
    let formData = new FormData(event.target); 

    let newBook = {
        title: formData.get('title'),
        description: formData.get('description'),
        price: formData.get('price'),
        stock: formData.get('stock'),
        image: formData.get('image'),
        category: formData.get('cathegory'),
    }
    console.log(JSON.stringify(newBook));

    let url = ROOT_URL + '/books';
    console.log(url);

    try{
      const res = await fetch(ROOT_URL + '/books', {
          method: 'POST',
          body: JSON.stringify(newBook),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('accessToken')          
          }
        })

        console.log('after try function');
        location.replace("manage-products.html");        
    }
    catch(error) 
    {
      console.log(error);
      
    } 
    
  }) 


//----- CREATE A NEW POST ------- end