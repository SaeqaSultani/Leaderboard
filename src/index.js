import './index.css';
import dataUi from './modules/dataUi';
import getData from './modules/getData';
import postData from './modules/postData';

const userName = document.getElementById('name');
const userScore = document.getElementById('score');
const addBtn = document.getElementById('submit');
const reloadBtn = document.getElementById('reload');


const loadData = async () => {
    const data = await getData();
    data.forEach((item) =>{
        dataUi(item);
    });
  };

loadData();

addBtn.addEventListener('click',(e) =>{
    e.preventDefault();
    const userValue = userName.value;
    const scoreValue = userScore.value;

    if(!(userValue === '' && scoreValue === '')){
        postData(userValue, scoreValue);
    }
    
    userName.value = '';
    userScore.value = '';
});
  

reloadBtn.addEventListener('click', loadData);


