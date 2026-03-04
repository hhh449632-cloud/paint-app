Java script
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name && email && message){
        const successMsg = document.getElementById('successMessage');
        successMsg.style.display = 'block';
        this.reset();
        setTimeout(() => {
            successMsg.style.display = 'none';
        }, 3000);
    }
});