let changeInfo = document.querySelector('.changeToEmail');
let contactInput = document.getElementsByName('contact');
let container = document.querySelector('.container-twitter');
let celBtn = document.querySelector('.cel');
let footer = document.querySelector('.twitter-footer');
let body = document.querySelector('body');
let loginBtn = document.querySelector('.login-btn');

//apply background contrast when the modal is opened.
function applyBg() {
    document.addEventListener('mouseup', onClickModal);
    if (body.classList.contains('modal-open')) {
        container.classList.add('bg-change');
        footer.classList.add('bg-change');
        body.style.padding = '0';
        body.style.overflow = 'visible';
    } else {
        container.classList.remove('bg-change');
    }
}

function bgChangeCloseModal() {
    container.classList.remove('bg-change');
    footer.classList.remove('bg-change');
}

function onClickModal(e) {
    let activeModal = document.querySelector('.show')
    if (!activeModal.contains(e.target)) {
        console.log(e.target);
        container.classList.remove('bg-change');
        footer.classList.remove('bg-change');
        document.removeEventListener("mouseup", onClickModal);
    }
}

//close modal and remove background contrast when ESC is pressed.
function closeModalEsc(idElement) {    
    document.querySelector(idElement).addEventListener('keydown', (e) => {
        if (e.keyCode == 27) {
            container.classList.remove('bg-change');
            footer.classList.remove('bg-change');
        }
        return;
    })
}


//change info
function changeInputInfo() {
    if (changeInfo.textContent == 'Usar o e-mail') {
        changeInfo.textContent = 'Usar o telefone';
        contactInput[0].placeholder = "E-mail";
    } else if (changeInfo.textContent == 'Usar o telefone') {
        changeInfo.textContent = 'Usar o e-mail';
        contactInput[0].placeholder = "Celular";
    }
    return;
}


//click next
function validationNextBtn() {
    let input = document.querySelector('input').value;
    if (input != '') {
        alert('Success!')
    } else {
        alert('Preencha todos os campos para prosseguir.');
    }
}

//second modal

//apply background contrast when the modal is opened.
function applyBgSecondModal() {
    document.addEventListener('mouseup', onClickModal);
    if (body.classList.contains('modal-open')) {
        container.classList.add('bg-change');
        footer.classList.add('bg-change');
        body.style.padding = '0';
        body.style.overflow = 'visible';
    } else {
        container.classList.remove('bg-change');
    }
}

closeModalEsc('#modalSignin');
closeModalEsc('#modalLogIn');