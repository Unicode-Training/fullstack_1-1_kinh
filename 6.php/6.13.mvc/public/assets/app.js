const logoutLink = document.querySelector('.logout');
const logoutForm = document.querySelector('.logout-form');
if (logoutLink && logoutForm) {
    logoutLink.addEventListener('click', (e) => {
        e.preventDefault();
        logoutForm.submit(); //trigger event
    })
}