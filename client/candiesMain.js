const candyContainer = document.getElementById('candy-container');
document.querySelector('form').addEventListener('submit', submitHandler);
const baseURL = 'http://localhost:4000/api/candy'

const candiesCallback = ({data: candies}) => displayCandies(candies);
const errCallback = err => console.log(err.response.data)

const getCandies = () => axios.get(baseURL).then(candiesCallback).catch(errCallback);
const addCandy = body => axios.post(baseURL, body).then(candiesCallback).catch(errCallback);
const updateCandy = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(candiesCallback).catch(errCallback);
const deleteCandy = id => axios.delete(`${baseURL}/${id}`).then(candiesCallback).catch(errCallback);


const createCandyCard = candy => {
    const candyCard = document.createElement('div');
    candyCard.classList.add('candy-card');

    candyCard.innerHTML =

    ` <p class='candy-type'>Type of candy: ${candy.type}</p>
      <p class='candy-flavor'>Flavor of candy: ${candy.flavor}</p>

      <div>
        <p class='total-pieces'> Quantity: ${candy.qty} pieces</p>
        <button onclick="updateCandy(${candy.id}, 'minus')">-</button>
        <button onclick="updateCandy(${candy.id}, 'plus')">+</button>
      </div>
      <br>
      <button onclick="deleteCandy(${candy.id})">Delete</button>
    `

    candyContainer.appendChild(candyCard);
}

function submitHandler(e) {
    e.preventDefault()

    let type = document.getElementById('type');
    let flavor = document.getElementById('flavor');
    let qty = document.getElementById('qty');

    let bodyObj = {
        type: type.value,
        flavor: flavor.value,
        qty: qty.value
    };

    addCandy(bodyObj);

    type.value = '';
    flavor.value='';
    qty.value='';
}

const displayCandies = arr => {
    candyContainer.innerHTML = '';
    for(let i = 0; i < arr.length; i++) {
        createCandyCard(arr[i])
    }
}

getCandies()
