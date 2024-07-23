window.addEventListener("load", solve);

function solve() {

    const numTicketsElement = document.getElementById('num-tickets');
    const seatingElement = document.getElementById('seating-preference');
    const fullNameElement = document.getElementById('full-name');
    const emailElement = document.getElementById('email');
    const phoneNumberElement = document.getElementById('phone-number');

    const purchaseBtnElement = document.getElementById('purchase-btn');

    const ticketPreviewElement = document.getElementById('ticket-preview');
    const ticketPurchaseElement = document.getElementById('ticket-purchase');


    purchaseBtnElement.addEventListener('click', onPurchase);
    function onPurchase(e) {
        e.preventDefault();

        if (numTicketsElement.value == '' ||
            seatingElement.value == '' ||
            fullNameElement.value == '' ||
            emailElement.value == '' ||
            phoneNumberElement.value == ''
        ) {
            return;
        }


        let liElement = document.createElement('li');
        liElement.setAttribute('class', 'ticket-content');

        let articleElement = document.createElement('article');

        let countParagraph = document.createElement('p');
        countParagraph.textContent = `Count: ${numTicketsElement.value}`;

        let seatingParagraph = document.createElement('p');
        seatingParagraph.textContent = `Preference: ${seatingElement.value}`;

        let toParagraph = document.createElement('p');
        toParagraph.textContent = `To: ${fullNameElement.value}`;

        let emailParagraph = document.createElement('p');
        emailParagraph.textContent = `Email: ${emailElement.value}`;

        let phoneNumberParagraph = document.createElement('p');
        phoneNumberParagraph.textContent = `Phone number: ${phoneNumberElement.value}`;



        let editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'edit-btn');
        editBtn.textContent = "Edit";
        editBtn.addEventListener('click', onEdit);

        let nextBtn = document.createElement('button');
        nextBtn.setAttribute('class', 'next-btn');
        nextBtn.textContent = "Next";
        nextBtn.addEventListener('click', onNext);

        //append 
        articleElement.appendChild(countParagraph);
        articleElement.appendChild(seatingParagraph);
        articleElement.appendChild(toParagraph);
        articleElement.appendChild(emailParagraph);
        articleElement.appendChild(phoneNumberParagraph);


        liElement.appendChild(articleElement);
        liElement.appendChild(editBtn);
        liElement.appendChild(nextBtn);


        ticketPreviewElement.appendChild(liElement);


        let editedNumTickets = numTicketsElement.value;
        let editedSeating = seatingElement.value;
        let editedFullName = fullNameElement.value;
        let editedEmail = emailElement.value;
        let editedPhoneNumber = phoneNumberElement.value;

        //clear the input dields
        numTicketsElement.value = '';
        seatingElement.value = '';
        fullNameElement.value = '';
        emailElement.value = '';
        phoneNumberElement.value = '';

        purchaseBtnElement.disabled = true;

        function onEdit() {
            numTicketsElement.value = editedNumTickets;
            seatingElement.value = editedSeating;
            fullNameElement.value = editedFullName;
            emailElement.value = editedEmail;
            phoneNumberElement.value = editedPhoneNumber;

            liElement.remove();
            purchaseBtnElement.disabled = false;

        }

        function onNext() {
            let liElementPurchase = document.createElement('li');
            liElementPurchase.setAttribute('class', 'ticket-content');

            liElementPurchase.appendChild(articleElement);

            let buyBtn = document.createElement('button');
            buyBtn.setAttribute('class', 'buy-btn');
            buyBtn.textContent = 'Buy';
            buyBtn.addEventListener('click', onBuy);


            liElementPurchase.appendChild(buyBtn);

            liElement.remove();
            ticketPurchaseElement.appendChild(liElementPurchase);
        }

        function onBuy() {
            ticketPurchaseElement.innerHTML = '';

            let thankYouMessage = document.createElement('h2');
            thankYouMessage.textContent = 'Thank you for your purchase!';
            document.body.appendChild(thankYouMessage);

            let backBtn = document.createElement('button');
            backBtn.textContent = 'Back';
            backBtn.addEventListener('click', onBack);
            document.body.appendChild(backBtn);

            function onBack() {
                thankYouMessage.remove();
                backBtn.remove();
                purchaseBtnElement.disabled = false;
            }

        }
    }
}