let loginButton = document.querySelector(`#login-button`);
let promocodeInput = document.querySelector(`#promocode`);
let validNode = document.querySelector(`#valid`);
let invalidNode = document.querySelector(`#invalid`);
let sushiNode = document.querySelector(`#sushi`);

loginButton.addEventListener(`click`, function () {
	if (promocodeInput.value == ``) {
		promocodeInput.classList.remove(`is-valid`);
		promocodeInput.classList.add(`is-invalid`);
		invalidNode.innerHTML = `Поле для промокода не может быть пустым!`;
	} else if (promocodeInput.value == `MSHP2022`) {
		promocodeInput.classList.remove(`is-invalid`);
		promocodeInput.classList.add(`is-valid`);
		validNode.innerHTML = `Ура, вы получили набор из 4х суши с лососем`;
		sushiNode.classList.remove(`d-none`);
	} else {
		promocodeInput.classList.add(`is-invalid`);
		promocodeInput.classList.remove(`is-valid`);
		invalidNode.innerHTML = `Увы, такого промокода нет`;

	}
});