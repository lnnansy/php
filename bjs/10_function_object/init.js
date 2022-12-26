
window.onload = function()
{
    
    
};

document.getElementById('btnGen').addEventListener('click', function () {
    const initPerson = personGenerator.getPerson();
    
    document.getElementById('genderOutput').innerText = initPerson.gender;
     document.getElementById('firstNameOutput').innerText = initPerson.firstName;
     document.getElementById('surnameOutput').innerText = initPerson.surnameName;
     document.getElementById('secondNameOutput').innerText = initPerson.secondName;
     document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
     document.getElementById('data1Output').innerText = initPerson.data1;
     document.getElementById('worksOutput').innerText = initPerson.works;  
})
document.getElementById('btnRetr').addEventListener('click', function () {
    const initPerson = personGenerator.getCleanField();
    
    document.getElementById('genderOutput').innerText = initPerson.gender;
     document.getElementById('firstNameOutput').innerText = initPerson.firstName;
     document.getElementById('surnameOutput').innerText = initPerson.surnameName;
     document.getElementById('secondNameOutput').innerText = initPerson.secondName;
     document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
     document.getElementById('data1Output').innerText = initPerson.data1;
     document.getElementById('worksOutput').innerText = initPerson.works;  
})

