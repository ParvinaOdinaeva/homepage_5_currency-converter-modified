{
    const welcome = () => {
        console.log("welcome everyone to my homework!");
    }

    welcome();
}



{
    const result = () => {
        const amountElement = document.querySelector(".js-inputAmount");
        const amount = amountElement.value;
        const currencyElement = document.querySelector(".js-currencyList");
        const currency = currencyElement.value;
        const resultElement = document.querySelector(".js-result");
        const result = ((amount / currency).toFixed(2));
        resultElement.innerText = (`${result} PLN`);
    };

    const init = () => {

        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("click", result);
    }

    init();
}