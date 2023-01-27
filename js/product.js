/* 
 * 4. Now you can fetch the specific pun by making a "GET" request to: https://pun-api.up.railway.app/puns/<punId>, where <punId> is the value of urlParams.get('id')
 * 5. Use the fetched pun data to prefill the textarea#content
  */

 let urlParams = new URLSearchParams(window.location.search)

const title = document.getElementById("book-title")
const description = document.getElementById("description")
const category = document.getElementById("book-category")
const price = document.getElementById("book-price")
const stock = document.getElementById("book-stock")
const img = document.getElementById("book-img-spesific")


async function fetchBooks() {
    try {
        const response = await fetch("https://group-repo-api-production.up.railway.app/books/" + urlParams.get('id'),
        {   
            method: 'GET',
            headers: {
                'Authorization': 'bearer ' +  localStorage.getItem("accessToken")
            }
        });
        const books = await response.json();

        title.innerText += `${books.title}`
        img.setAttribute("src", books.image);
        description.innerText += `${books.description}`
        category.innerText += `${books.category}`
        price.innerText += `${books.price}`
        stock.innerText += `${books.stock}` 

    } catch (error) {
        console.log(error);
    }
}
fetchBooks()