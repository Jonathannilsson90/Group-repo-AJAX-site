/* 
 * 4. Now you can fetch the specific pun by making a "GET" request to: https://pun-api.up.railway.app/puns/<punId>, where <punId> is the value of urlParams.get('id')
 * 5. Use the fetched pun data to prefill the textarea#content
  */

let urlParams = new URLSearchParams(window.location.search)
console.log(urlParams.get('id'));


/* async function fetchPun() {
    try {
        const response = await fetch(ROOT_URL + '/puns/' + urlParams.get('id'), {
            method: 'GET',
            headers: {
                'Authorization': ''
            }
        });
        const pun = await response.json()


        
    } catch (error) {
        console.log(error);
    }
}
fetchPun()
 */ 