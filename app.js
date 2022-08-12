const form = document.getElementById("form-container");
const items = document.getElementById("items");

//functions that will submit our data

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let description=form.description.value
    let amount = form.amount.value
    
    generateHTML(description,amount)
})


//functions that generates html structure

const generateHTML = (description, amount) => {
    if (amount < 0) {
        let HTML = `
        <li class="expense">
        <span>${description}</span>
        <span>${amount}</span>
        </li>
        `

        items.innerHTML+=HTML
    } else {
          let HTML = `
        <li class="income">
        <span>${description}</span>
        <span>${amount}</span>
        </li>
        `

        items.innerHTML+=HTML
    }
}