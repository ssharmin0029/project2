const save = async (violation) => {
      
    const houses = document.getElementById(violation).innerText

    const response = await fetch('/api/house', {
        method: 'POST',
        body:  JSON.stringify({ houses }),
        headers: { 'Content-Type': 'application/json'}
    });

    if (response.ok) {
        console.log(houses)
    } else {
        alert('failed to save')
    }
    
}

