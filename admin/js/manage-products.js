const ROOT_URL = "https://group-repo-api-production.up.railway.app";


const row = function(book, date) { 
    return `  
    <tr>
                    <td><span><strong>${book.title}</strong></span></td>
                    <td><span>${book.price}</span></td>
                    <td><span>${book.stock}</span></td>
                    <td><span>${date}</span></td>
                    <td>
                      <div class="actions">
                          <a href="update-product.html?id=${book._id}"><button class="back-btn">Change</button></a>
                          <a href="#"><button class="delete-btn" data-id=${book._id} = >Delete</button></a>
                      </div>
                    </td>
                  </tr>
    `
}

  
document.addEventListener("DOMContentLoaded", async function(event) {
       
    checkAccessToken();
    //console.log(localStorage.getItem('accessToken'));
    
    const table = document.getElementById('table');

    try {
 
        const response1 = await fetch(ROOT_URL + '/books' , {            
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
            },
        });

        const data = await response1.json();
  
        if (data.length == 0)
        {
  
          table.innerHTML = noPosts();
        }
        else
        {
          for (let d of data) 
          { 
            let date = new Date(d.date);
            let shortDate = date.toDateString();
            table.innerHTML += row(d, shortDate);           
          }
       
    //Listen to buttons
    const btnsDeleteThisBook = document.getElementsByClassName('delete-btn');
    console.log(btnsDeleteThisBook)
    
    for (let deleteButton of btnsDeleteThisBook)
    {

        deleteButton.addEventListener('click', async function (e)
        {
            //e.preventDefault();
            let btn = e.target;
            let bookId = btn.dataset.id;
            console.log(bookId);

            try
            {
                const response3 = await fetch(ROOT_URL + '/books' + `/${bookId}`, 
                {
                    method: 'DELETE', 
                    headers: {
                        //'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
                    }                  
                }); 
            } catch (error) {
                console.log(error);
            }

            location.replace('manage-products.html'); // Redirect to index.html
        })
    } 



        } 
    } catch (error) {
        console.log(error);
    }

})


