const save = async (violation) => {
      
    const houses = document.getElementById(violation).innerText.split(' ')

    console.log(houses)

    const response = await fetch('/api/houses', {
        method: 'POST',
        body:  JSON.stringify({ 
            housenumber: houses[0],
            streetname: houses[1],
            boro: houses[3],
            zip: houses[4],
            nta: houses[5],
            violationid: houses[7],
            buildingid: houses[8],
            registrationid: houses[9],
            violationstatus: houses[10],
            // novdescription: houses[10],
            approveddate: houses[11],
            communityboard: houses[12],
            streetcode: houses[13],
         }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        console.log(houses)
    } else {
        alert('failed to save')
    }
    
}

