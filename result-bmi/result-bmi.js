const statusElement = document.getElementById("status")
const amountElement = document.getElementById("amount")
const descriptionElement = document.getElementById("descriptions")
const categoryElement = document.getElementById("category")
const recommendationElement = document.getElementById("recommendation")

window.onload = () => {
    let { gender, weight, height, age } = getURLParams()

    let {status, plusMin, amount, bmi} = calculateBMI(gender, weight, height, age)

    statusElement.innerHTML = `<b><i>${status}<i><b>`
    amountElement.innerHTML = ` ${plusMin == "+" ? "Add" : "Reduce"} ${amount} kg's more`
    descriptionElement.innerHTML = `You are ${status}`
    categoryElement.innerHTML = `BMI result is ${bmi}`

    if(plusMin == "-") {
        recommendationElement.innerHTML = `Anda dalam kategori overwight atau berat badan berlebih.
        Cara terbaik menurunkan berat badan adalah dengan mengatur kalor makan yang dikonsumsi dan berolahraga.
        Jika BMI berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas
        normal.`
    } else {
        recommendationElement.innerHTML = `Anda dalam kategori underwight atau kekurangan berat badan.
        Cara terbaik menambah berat badan adalah dengan mengatur kalor makan yang dikonsumsi dan berolahraga.
        Jika BMI berada dalam kategori ini maka Anda dianjurkan untuk menambah berat badan hingga batas
        normal.`
    }

}

function getURLParams() {
    var url_string = (window.location.href).toLowerCase();
    var url = new URL(url_string);
    var gender = url.searchParams.get("gender");
    var weight = url.searchParams.get("weight");
    var height = url.searchParams.get("height");
    var age = url.searchParams.get("age");
    return {
        gender: gender,
        weight: weight,
        height: height,
        age: age
    }
}

function calculateBMI(gender, weight, height, age) {

    const bmi = weight / ((height / 100) ** 2)
    const average = 21 * ((height / 100) ** 2)

    let status = ""
    let plusMin = ""
    let amount = ""

    if (bmi <= 18.5) {
        status = "Underweight"
        plusMin = "+"
        amount = average - weight
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        if (bmi < 21) {
            status = "Healty";
            plusMin = "+"
            amount = average - weight
        } else {
            status = "Healty";
            plusMin = "-"
            amount = average - weight
        }
    } else if (bmi >= 25 && bmi <= 29.9) {
        status = "Over Weight";
        plusMin = "-"
        amount = weight - average
    } else if (bmi >= 30 && bmi <= 34.9) {
        status = "Obese";
        plusMin = "-"
        amount = weight - average
    } else if (bmi >= 35) {
        status = "Extremly Obese";
        plusMin = "-"
        amount = weight - average
    }

    return {
        status: status,
        plusMin: plusMin,
        amount: Math.trunc(Math.abs(amount)) == 0 ? 1 : Math.trunc(Math.abs(amount)),
        bmi: Math.trunc(bmi)
    }
}