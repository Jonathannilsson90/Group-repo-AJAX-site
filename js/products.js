//================Function fetchBooks================//
//  Fetches books from desired API using access token with try, catch statement
async function fetchBooks() {
    try {
        const response = await fetch("https://group-repo-api-production.up.railway.app/books",
        {   
            //  Gaining access to API using Token
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

//================Function DisplayBooks================//
//  Creates books that will be displayed in the mainpage / index.html

function displayBooks(books) {
    
    //  Gets element "display-books" and adds new div with id "container-book-shelf"
    const displayBooks = document.getElementById("display-books");
    const containerBookShelfDiv = document.createElement("div");
    containerBookShelfDiv.classList.add("container-book-shelf");

    //  Using .forEach(book{}) to call function to get value from each book in "books" array
    books.forEach(book => {

        //  Create elements with createElement and add 
        //  Occasionally attributes/classes/ids to later style with CSS
        const bookContainer = document.createElement("div");
        bookContainer.classList.add("book-container");

        //  Creates image element with src="book.image" to display the specific book cover
        const coverBook = document.createElement("img");
        coverBook.setAttribute("id", "book-img");
        coverBook.setAttribute("src", book.image);
        coverBook.setAttribute("alt", "Failed to get " + book.title + "'s book cover");
        
        //  Creates <h2> element with book.title as title
        const titleBook = document.createElement("h2");
        titleBook.textContent = book.title;
        
        //  Creates element to display book.category
        const categoryBook = document.createElement("p");
        categoryBook.setAttribute("id", "book-category");
        categoryBook.textContent = `Category: ${book.category}`;
        
        //  Creates element to display book.price
        const priceBook = document.createElement("p");
        priceBook.setAttribute("id", "book-price");
        priceBook.textContent = `Price: $${book.price}`;
        
        //  Creates element to display book.stock
        const stockBook = document.createElement("p");
        stockBook.setAttribute("id", "book-stock");
        stockBook.textContent = `Stock: ${book.stock}`;
        
        //  Creates button to send user to book page
        const infoButton = document.createElement("button");
        infoButton.textContent = "More information";

        //  EventListener to listen for "click" to send user to specific book page using location.href + book._id
        infoButton.addEventListener("click", () => {
            location.href = `product.html?id=${book._id}`;
        }); 
        
        //  Create newLine x2
        const newLine = document.createElement("br");
        const newLine2 = document.createElement("br");
        
        //  Adds visual "add to cart" button without function
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