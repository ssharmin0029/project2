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

const redirect = async (e) => {
    e.preventDefault();
    if (e.target.hasAttribute('data-id')) {
        const id = e.target.getAttribute('data-id')

        document.location.replace(`/houses/${id}`)
    }
}

document.querySelector('#delete')
    .addEventListener('submit', deleteHouse);

document.querySelector('#house-list')
    .querySelectorAll('.building')
    .addEventListener('click', redirect);