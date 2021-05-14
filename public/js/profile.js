const deleteHouse = async (e) => {
    
    if (e.target.hasAttribute('data-id')) {
        const id = e.target.getAttribute('data-id')
    
        const response = await fetch (`/api/houses/${id}`, {
            method: 'DELETE',
            
        });

        if (response.ok) {
            document.location.replace('/profile')
        } else {
            alert('failed to delete house')
        }
    }

}


document.querySelector('#delete')
    .addEventListener('submit', deleteHouse);
