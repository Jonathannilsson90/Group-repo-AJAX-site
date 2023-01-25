//=============================TEST 3=============================
const accessToken = "secret";

fetchBooks();

async function fetchBooks (accessToken){
    fetch("http://localhost:5000/books", {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    })
    .then(response => response.json())
    .then(data => {
    
        data.forEach(book => {
    
            const bookContainer = document.createElement("div");
            bookContainer.classList.add("book-container");
        
            const img = document.createElement("img");
            img.id = "book-img";
            img.src = book.Image;
            img.alt = "Book Cover";
            bookContainer.appendChild(img);
        
            const title = document.createElement("h2");
            title.id = "book-title";
            title.textContent = book.title;
            bookContainer.appendChild(title);
            
            const category = document.createElement("p");
            category.id = "book-category";
            category.textContent = book.Category;
            bookContainer.appendChild(category);
            
            const price = document.createElement("p");
            price.id = "book-price";
            price.textContent = book.Price;
            bookContainer.appendChild(price);
            
            const stock = document.createElement("p");
            stock.id = "book-stock";
            stock.textContent = book.Stock;
            bookContainer.appendChild(stock);
            
            const btnMoreInfo = document.createElement("button");
            btnMoreInfo.textContent = "More information";
            bookContainer.appendChild(btnMoreInfo);
        
            const btnAddToCart = document.createElement("button");
            btnAddToCart.textContent = "Add to Cart";
            bookContainer.appendChild(btnAddToCart);
            
            document.body.appendChild(bookContainer);

        });
    });
}

//=============================TEST 1=============================
/*const accessToken = localStorage.getItem("accessToken"); //Inte säker på om jag hämtar det på rätt sätt.

async function fetchBooks(accessToken){
    fetch("https://group-repo-api-production.up.railway.app/books"), {
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    }
    .then(response => response.json)
    .then(data => {
        const books = data.books;
        
        //books or book?
        books.forEach(book => {
            const bookTitle = book.title;
            const bookCategory = book.category;
            const bookPrice = book.price;
            const bookStock = book.stock;
            const bookImg = book.image;
        })
    })
}
*/

//=============================TEST 2=============================
/*
async function fetchBooks() {
    try {
        const response = await fetch("https://group-repo-api-production.up.railway.app/books",
        {   
            method: 'GET',
            headers: {
                'Authorization': 'bearer ' +  localStorage.getItem("accessToken")
            }
        });

        const data = await response.json()

        //books or book?
        books.forEach(book => {
            const bookTitle = book.title;
            const bookCategory = book.category;
            const bookPrice = book.price;
            const bookStock = book.stock;
            const bookImg = book.image;
        })


    } catch (error) {
        console.log(error);
    }
}
*/

/*
const newBookContainer = document.createElement('div');
newBookContainer.className = "book-contaienr";

//========= make book image fix=========
newBookContainer.innerHTML = 
`
<img id="book-img" src="pictureLibrary/book-cover.jpg" alt="Book Cover">
<h2 id="book-title">${title}</h2>
<p id="book-category">Category: ${category}</p>
<p id="book-price">Price: ${price}</p>
<p id="book-stock">Stock: ${stock}</p>
<button>More information</button>
<br><br>
<button>Add to Cart</button>
`;

document.querySelector("#books").appendChild(newBookContainer);
*/