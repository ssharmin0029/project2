const search = async (e) => {

    e.preventDefault()

    const searchBar = document.querySelector('#searchBar').value.trim() //10010
    let searchQuery;

    if (searchBar.includes( (RegExp('[0-9]')) ).length === 5) {
        searchQuery = 'zip'
        const response = await fetch(`https://data.cityofnewyork.us/resource/wvxf-dwi5.json?${searchQuery}=${searchBar}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'}
        });

        if ( response.ok ) {
            console.log(response);
            //return something
        } else {
            alert( response.statusText )
        }

    } else {

        const response = await fetch(`https://data.cityofnewyork.us/resource/wvxf-dwi5.json?$q=${searchBar}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'}
        });

        if( response.ok ) {
            console.log(response);
            // return something
        } else {
           alert( response.statusText )
        }
    }
    


}

