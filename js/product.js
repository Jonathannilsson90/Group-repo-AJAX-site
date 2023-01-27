/* 
 * 4. Now you can fetch the specific pun by making a "GET" request to: https://pun-api.up.railway.app/puns/<punId>, where <punId> is the value of urlParams.get('id')
 * 5. Use the fetched pun data to prefill the textarea#content
  */

/* let urlParams = new URLSearchParams(window.location.search)
console.log(urlParams.get('id'));
 */






const title = document.getElementById("book-title")
const description = document.getElementById("description")
const category = document.getElementById("book-category")
const price = document.getElementById("book-price")
const stock = document.getElementById("book-stock")


 async function fechbook() {
    try {
        const response = await fetch("https://group-repo-api-production.up.railway.app/book/"+ "63d11731f3aa9b6b65e2ba0a" /* urlParams.get('id') */, {
            method: 'GET',
            headers: {
                'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjc0NjQ2Mjg1fQ.QetG5qB4tj7ms1Jp0QMLWkQP3D7myCx7wZ-_jg8qu54'
            }
        });
        const data = await response.json()

        title.innerText = `${data.titel}`
        description.innerText = `${data.description}`
        category.innerText = `${data.category}`
        price.innerText = `${data.price}`
        stock.innerText = `${data.stock}` 
        
    } catch (error) {
        console.log(error);
    }
}


fechbook()