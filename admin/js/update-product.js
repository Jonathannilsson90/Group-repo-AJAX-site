const ROOT_URL = "https://group-repo-api-production.up.railway.app";
console.log(location.search);
let queryString = location.search;
let urlParams = new URLSearchParams(queryString);
let bookId = urlParams.get('id');
console.log(bookId);


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

document.addEventListener("DOMContentLoaded", async function(event) {
    const form = document.getElementById('update-book');
    console.log(form);
    event.preventDefault();
    checkAccessToken();
    try
    {   
          
        let res = await fetch(ROOT_URL + '/books/' + bookId, 
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('accessToken')          
              }
        })

        const data = await res.json();  
        console.log(data); 
        console.log(data.title);

        //formData.set('title', data.title);
        //console.log(formData.get('title'));
        $('#title').val(data.title);
        $('#description').val(data.description);
        $('#price').val(data.price);
        $('#stock').val(data.stock);
        $('#image').val(data.image);
        $('#cathegory').val(data.category);


         form.addEventListener('submit', async (event)=>
        {
            event.preventDefault();

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
            
            try{
                const res = await fetch(ROOT_URL + '/books/' + bookId, {
                    method: 'PATCH',
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

            location.replace("manage-products.html"); 
        }); 
    }
    catch (error) 
    {
        console.log(error);
    }  
})

