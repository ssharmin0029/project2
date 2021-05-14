const save = async (violation) => {
      
    const houses = document.getElementById(violation).innerText.split('|')

    console.log(houses)

    const response = await fetch('/api/houses', {
        method: 'POST',
        body:  JSON.stringify({ 
            housenumber: houses[0],
            streetname: houses[1],
            boro: houses[2],
            zip: houses[3],
            nta: houses[4],
            violationid: houses[5],
            buildingid: houses[6],
            registrationid: houses[7],
            violationstatus: houses[8],
            novdescription: houses[12],
            approveddate: houses[9],
            communityboard: houses[10],
            streetcode: houses[11],
         }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        console.log(houses)
    } else {
        alert('failed to save')
    }
    
}

