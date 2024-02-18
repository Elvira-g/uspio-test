const sendBtn = document.querySelector('.contacts__form-btn');
const sendForm = document.querySelector('.contacts__form');

addEventListener('submit', function(e) {
    e.preventDefault();
    submitForm();
})

async function submitForm() {
    const formData = document.querySelector('.contacts__form-input').value;

    try {
        const response = await fetch('form.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'data=' + encodeURIComponent(formData),
        });

        if (response.ok) {
            const responseData = await response.text();
            console.log(responseData);
            sendBtn.innerHTML = 'Спасибо!';
            sendBtn.classList.add("contacts__form-btn-clicked");
            sendBtn.disabled = true;
        } else {
            console.error('Ошибка при отправке данных');
        }
    } catch (error) {
        console.error('Произошла ошибка: ', error);
    }
}