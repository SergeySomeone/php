function generate(bool){
    const initPerson = personGenerator.getPerson();
    document.querySelector('#firstNameOutput').innerText = (bool) ? initPerson.firstName : "";
    document.querySelector('#surNameOutput').innerText = (bool) ? initPerson.surName : "Нет данных";
    document.querySelector('#patronymicOutput').innerText = (bool) ? initPerson.patronymic : "";
    document.querySelector('#genderOutput').innerText = (bool) ? initPerson.gender : "Нет данных";
    document.querySelector('#birthYearOutput').innerText = (bool) ? initPerson.birthYear : "Нет данных";
    document.querySelector('#professionOutput').innerText = (bool) ? initPerson.profession : "Нет данных";
    document.querySelector('#photo').src = (bool) ? `img/${initPerson.genderPhoto}.jpg` : `img/nophoto.jpg`;
    document.querySelector('#photo').alt = (bool) ? `photo for ${initPerson.genderPhoto} card` : `nophoto`;
        
};

window.onload = generate;

document.querySelector('#refresh').addEventListener('click', generate, false);

document.querySelector('#clear').addEventListener('click', () => {generate(false)}, false);