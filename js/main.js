const priceCard = [
{month: '1 month', price: '39.99', support: '24/7 support'}
{month: '3 month', price: '33.99', support: '24/7 support'}
{month: '6 month', price: '29.99', support: '24/7 support'}
{month: '12 month', price: '10.99', support: '24/7 support'}
]

function createCard(newCard) {
	return `
	<div class="price__item">
	<div class="price__head">
	<p>${newCard.month}</p>
	<span>$ ${newCard.price}</span>/ mo
	</div>
	<div class="price__body">
	<p>Benefit</p>
	<p>Unlimited searches</p>
	<p>${newCard.support}</p>
	</div>
	<div class="price__footer">
	<button>Buy now</button>
	</div>
	</div>
	`
}

const templates = priceCard.map(newCard => createCard(newCard))
const html = templates.join(' ')

document.querySelector('.list').innerHTML = html