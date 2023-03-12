const advice = document.getElementById('advice-text'),
	advice_id = document.getElementById('advice-num'),
	random_advice_btn = document.getElementById('btn-random')

const renderAPI = () => {
	const url = 'https://api.adviceslip.com/advice'
	fetch(url)
		.then((response) => response.json())
		.then((json) => {
		let adviceText = json.slip.advice,
		    adviceId = json.slip.id
		    advice.innerText = `"${adviceText}"`
		    advice_id.innerText = `${adviceId}`
		})
}
renderAPI()

random_advice_btn.addEventListener('click', () => {
	renderAPI()
})
