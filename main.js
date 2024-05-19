function addData(name, phone, companyName, address) {
    let ul = document.getElementById('userList');
    let li = document.createElement('li');
    li.innerText = `name: ${name}, phone: ${phone}, company: ${companyName}`;
    ul.appendChild(li);
    li.onclick = function() {
        alert(`user: ${name},\nstreet: ${address.street},\nsuite: ${address.suite},\ncity: ${address.city},\nzipcode: ${address.zipcode}`);
    };
  }
  
  function renderUsers(users) {
    console.log("Working with users:");
    users.forEach(u => addData(u.name, u.phone, u.company.name, u.address));
  }
  
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => renderUsers(users))
    .catch((error) => alert(error));
  
