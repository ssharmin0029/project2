const deleteHouse = async (id) => {

    const response = await fetch (`/api/houses/${id}`, {
        method: 'DELETE',
            
    });

    if (response.ok) {

        document.location.replace('/profile')

    } else {

        alert('failed to delete house')
        
    }
    

}


