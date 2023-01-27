
const ROOT_URL = "https://group-repo-api-production.up.railway.app";

const form = document.getElementById('create-book');

form.addEventListener('submit', async function(event) {
    event.preventDefault();

    //Get access token in it is not exist
    checkAccessToken();
    
    //Define a new object formData 
    let formData = new FormData(event.target); 

    //Get values from form elements and create a new book object
    let cathegory = document.getElementById("category");
    let cathegoryOption = cathegory.options[cathegory.selectedIndex].value;
    console.log(cathegoryOption)
    let newBook = 
    {
        title: formData.get('title'),
        description: formData.get('description'),
        price: formData.get('price'),
        stock: formData.get('stock'),
        image: formData.get('image'),
        category: cathegoryOption,
    }
    //Add a new book to db
    try
    {
        const res = await fetch(ROOT_URL + '/books', 
        {
            method: 'POST',
            body: JSON.stringify(newBook),
            headers: 
            {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('accessToken')          
            }
        })

        //Go to manage-products.html
        location.replace("manage-products.html");        
    }
    catch(error) 
    {
      console.log(error);     
    }    
}) 

