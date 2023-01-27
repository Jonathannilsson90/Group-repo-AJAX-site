//To-do list:
// *Add comments to code

async function fetchBooks() {
    try {
        const response = await fetch("https://group-repo-api-production.up.railway.app/books",
        {   
            method: 'GET',
            headers: {
                'Authorization': 'bearer ' +  localStorage.getItem("accessToken")
            }
        });
        const books = await response.json();
        displayBooks(books);
    } catch (error) {
        console.log(error);
    }
}
function displayBooks(books) {
    const displayBooks = document.getElementById("display-books");
    const containerBookShelfDiv = document.createElement("div");
    containerBookShelfDiv.classList.add("container-book-shelf");
    books.forEach(book => {

        //create elements with createElement and add occasionally attributes/classes/ids
        const bookContainer = document.createElement("div");
        bookContainer.classList.add("book-container");

        const coverBook = document.createElement("img");
        coverBook.setAttribute("id", "book-img");
        coverBook.setAttribute("src", book.image);
        coverBook.setAttribute("alt", "Failed to get " + book.title + "'s book cover");
        
        const titleBook = document.createElement("h2");
        titleBook.setAttribute("id", "book-title");
        titleBook.textContent = book.title;
        
        const categoryBook = document.createElement("p");
        categoryBook.setAttribute("id", "book-category");
        categoryBook.textContent = `Category: ${book.category}`;
        
        const priceBook = document.createElement("p");
        priceBook.setAttribute("id", "book-price");
        priceBook.textContent = `Price: ${book.price}`;
        
        const stockBook = document.createElement("p");
        stockBook.setAttribute("id", "book-stock");
        stockBook.textContent = `Stock: ${book.stock}`;
        
        const infoButton = document.createElement("button");
        infoButton.textContent = "More information";

        //EventListener to listen for "click" to send user to specific book page
        infoButton.addEventListener("click", () => {
            location.href = `product.html?id=${book._id}`;
        }); 
        
        const newLine = document.createElement("br");
        const newLine2 = document.createElement("br");
        
        const cartButton = document.createElement("button");
        cartButton.textContent = "Add to Cart";

        //AppendChild all elements
        bookContainer.appendChild(coverBook);
        bookContainer.appendChild(titleBook);
        bookContainer.appendChild(categoryBook);
        bookContainer.appendChild(priceBook);
        bookContainer.appendChild(stockBook);
        bookContainer.appendChild(infoButton);
        bookContainer.appendChild(newLine)
        bookContainer.appendChild(newLine2)
        bookContainer.appendChild(cartButton);

        containerBookShelfDiv.appendChild(bookContainer);
    });
    displayBooks.appendChild(containerBookShelfDiv);
}
fetchBooks();