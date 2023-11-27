/* const sumbitButton = document.querySelector('#subButton');

sumbitButton.onclick = function ( ) {
    console.log('Click')
} */



const form = document.querySelector('form');

form.addEventListener('submit', function (e){
    e.preventDefault();
    let formData = new FormData(form);

    const user = {
        name: formData.get('name'),
        age: formData.get('age'),
        email: formData.get('email'),
        phone: formData.get('phone'),
    }
    console.log(JSON.stringify(user));
})