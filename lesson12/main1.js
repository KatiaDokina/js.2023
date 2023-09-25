//// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)
let url = new URL(location.href);
let id = url.searchParams.get('id')
let urlNew = new URL('https://jsonplaceholder.typicode.com/users')
urlNew.searchParams.set('id', id)
fetch(urlNew)
    .then(value => value.json())
    .then((value) => {
        for (const valueElement of value) {
            console.log(valueElement)
            let main = document.createElement('main');
            main.classList.add('main')
            let div = document.createElement('h2')
            div.innerText = `Information about the user - id: ${valueElement.id}`;
            div.classList.add('h2')
            let data = document.createElement('div');
            data.innerText = `name: ${valueElement.name}, username: ${valueElement.username}, email: ${valueElement.email}`;
            let address = document.createElement('div');
            address.innerText = `address:`;
            let addressData = document.createElement('div');
            addressData.innerText = `street: ${valueElement.address.street}, suite: ${valueElement.address.suite}, city: ${valueElement.address.city}, zipcode: ${valueElement.address.zipcode}`;
            let addressGeo = document.createElement('div');
            addressGeo.innerText = `geo: lat: ${valueElement.address.geo.lat}, lng: ${valueElement.address.geo.lng}`;
            let phone = document.createElement('div');
            phone.innerText = `phone: ${valueElement.phone}, website: ${valueElement.website}`;
            let company = document.createElement('div');
            company.innerText = `company:`;
            let companyData = document.createElement('div')
            companyData.innerText = `name: ${valueElement.company.name}, catchPhrase: ${valueElement.company.catchPhrase}, bs: ${valueElement.company.bs}`;
            main.append(div, data, address, addressData, addressGeo, phone, company, companyData)
            document.body.append(main)
        }
    });

