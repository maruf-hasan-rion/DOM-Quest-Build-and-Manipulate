document.getElementById('btn-donate-now')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const addMoney = document.getElementById('input-donate-amount').value;
        const addMoneyNumber = parseFloat(addMoney);

        console.log(addMoney);

        if (addMoney > 0) {
            const balance = document.getElementById('donate-balance').innerText;
            const balanceNumber = parseFloat(balance);

            const newBalance = balanceNumber + addMoneyNumber;

            document.getElementById('donate-balance').innerText = newBalance;

            const remaining = document.getElementById('main-balance').innerText;
            const newRemaining = remaining - addMoneyNumber;
            document.getElementById('main-balance').innerText = newRemaining;


        }
        else {
            alert('Failed to add money.')
        }

    })