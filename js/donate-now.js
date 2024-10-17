// donation-calculation
document.getElementById('btn-donate-now')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const addMoney = getInputFieldValueById("input-donate-amount");
        const mainBalance = getTextFieldValueById("main-balance");

        if (addMoney <= 0 || addMoney > mainBalance || isNaN(addMoney) || addMoney === "") {
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
            const div = document.createElement('div');
            div.classList.add("p-8", "bg-lime-400", "m-4");
            div.innerHTML = `
            <h4 class="font-bold">${addMoney} Taka is Donated for Flood at Noakhali, Bangladesh</h4>
            <p>Date: ${d.toLocaleString()}</p>
            `
            document.getElementById("history-section").append(div);
            document.getElementById('my_modal_3').showModal();
        }
    })
document.getElementById('btn-donate-now2')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const addMoney = getInputFieldValueById("input-donate-amount2");
        const mainBalance = getTextFieldValueById("main-balance");

        if (addMoney <= 0 || addMoney > mainBalance || isNaN(addMoney) || addMoney === "") {
            alert('Failed to add money.')
        }
        else {
            const balance = getTextFieldValueById("donate-balance2");
            const newBalance = balance + addMoney;
            document.getElementById('donate-balance2').innerText = newBalance;

            const remaining = mainBalance;
            const newRemaining = remaining - addMoney;
            document.getElementById('main-balance').innerText = newRemaining;

            // add to history
            const d = new Date();
            const div = document.createElement('div');
            div.classList.add("p-8", "bg-lime-400", "m-4");
            div.innerHTML = `
            <h4 class="font-bold">${addMoney} Taka is Donated for Flood Relief in Feni,Bangladesh</h4>
            <p>Date: ${d.toLocaleString()}</p>
            `
            document.getElementById("history-section").append(div);
            document.getElementById('my_modal_3').showModal();
        }
    })
document.getElementById('btn-donate-now3')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const addMoney = getInputFieldValueById("input-donate-amount3");
        const mainBalance = getTextFieldValueById("main-balance");

        if (addMoney <= 0 || addMoney > mainBalance || isNaN(addMoney) || addMoney === "") {
            alert('Failed to add money.')
        }
        else {
            const balance = getTextFieldValueById("donate-balance3");
            const newBalance = balance + addMoney;
            document.getElementById('donate-balance3').innerText = newBalance;

            const remaining = mainBalance;
            const newRemaining = remaining - addMoney;
            document.getElementById('main-balance').innerText = newRemaining;

            // add to history
            const d = new Date();
            const div = document.createElement('div');
            div.classList.add("p-8", "bg-lime-400", "m-4");
            div.innerHTML = `
            <h4 class="font-bold">${addMoney} Taka is Aid for Injured in the Quota Movement</h4>
            <p>Date: ${d.toLocaleString()}</p>
            `
            document.getElementById("history-section").append(div);
            document.getElementById('my_modal_3').showModal();
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