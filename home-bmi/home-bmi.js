const radioButtons = document.querySelectorAll('input[name="gender"]');
const submitButton = document.querySelector("#submit");

const weight = document.getElementById("beratBadan");
const age = document.getElementById("usia");
const height = document.getElementById("tinggiBadan");

submitButton.addEventListener("click", () => {
    let gender = ""

    for(const radioButton of radioButtons) {
        if (radioButton.checked) {
            gender = radioButton.value
        }
    }

    if (gender == "" || weight.value == '' || age.value=='' || height.value=='') {
        alert("All fields are required!");
        return
    }

    window.location = `../result-bmi/result-bmi.html?gender=${gender}&weight=${weight.value}&height=${height.value}&age=${age.value}`
})

