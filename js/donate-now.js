// donation-calculation
document.getElementById('btn-donate-now')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const addMoney = getInputFieldValueById("input-donate-amount");
        const mainBalance = getTextFieldValueById("main-balance");

        if (addMoney > mainBalance || isNaN(addMoney) || addMoney === "") {
            alert('Failed to add money.')
        }
        else {
            const balance = getTextFieldValueById("donate-balance");
            const newBalance = balance + addMoney;
            document.getElementById('donate-balance').innerText = newBalance;

            const remaining = mainBalance;
            const newRemaining = remaining - addMoney;
            document.getElementById('main-balance').innerText = newRemaining;

            // add to history
            const d = new Date();
            document.getElementById("demo").innerHTML = d;
            const div = document.createElement('div');
            div.classList.add("p-8", "bg-lime-400", "m-4");
            div.innerHTML = `
            <h4 class="font-bold">${addMoney} Taka is Donated for ${newBalance}</h4>
            <p id="demo"></p>`
            // <p> Date() </p>
            // 96500 Taka is Donated for famine-2024 at Feni, Bangladesh

            document.getElementById("history-section").append(div);
        }
    })

const historyTab = document.getElementById("history-tab");
const donationTab = document.getElementById("donation-tab");

// history-tab
historyTab.addEventListener('click', function () {
    historyTab.classList.add('bg-lime-400', 'font-bold');
    donationTab.classList.remove('bg-lime-400', 'font-bold');
    document.getElementById("donate-section").classList.add("hidden");
    document.getElementById("history-section").classList.remove("hidden");
})
// donation-tab
donationTab.addEventListener('click', function () {
    donationTab.classList.add("bg-lime-400", 'font-bold');
    historyTab.classList.remove('bg-lime-400', 'font-bold');
    document.getElementById("donate-section").classList.remove("hidden");
    document.getElementById("history-section").classList.add("hidden");
})