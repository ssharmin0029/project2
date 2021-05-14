const login = async (e) => {
    e.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        debugger
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/profile')
            console.log('logged in');
        } else {
            console.log(response.statusText);
        }
    }
}

const signup = async (e) => {
    e.preventDefault();

    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (name && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({name, email, password}),
            headers: { 'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.replace('/profile')
            console.log('logged in')
        } else {
            console.log('log in failed')
        }
    }
}

document.querySelector('.login-form')
    .addEventListener('submit', login);
    
document.querySelector('.signup-form')
    .addEventListener('submit', signup)