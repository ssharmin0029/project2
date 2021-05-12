// const axios = require('axios')

const search = async (e) => {

    e.preventDefault()

    const searchBar = document.querySelector('#searchBar').value.trim() //10010
    

    if (searchBar.match( /[0-9]/g ) && searchBar.length === 5) {
        const response = await fetch(`/zip/${searchBar}`, {
            method: 'GET'
        })

        if (response.ok) {
            document.location.replace(`/zip/${searchBar}`)
        } else {
            document.location.replace('/404')
        }
    } else if (searchBar) {
        
        const response = await fetch(`/search/${searchBar}`, {
            method: 'GET'
        })

        if (response.ok) {
            document.location.replace(`/search/${searchBar}`)
        } else {
            // document.location.replace('/404')
            console.log('failed')
        }

    } else {

        alert('please enter an address')
    }
 
}

document.querySelector('.search-form').addEventListener('submit', search)