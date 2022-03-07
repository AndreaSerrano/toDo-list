
btn.addEventListener('click', ()=>{
    const addValue = document.getElementById('add').value;
    console.log(addValue)
    const newThing = document.createElement('h1');
    
    list.appendChild(newThing.appendChild(document.createTextNode(addValue)));  
});
