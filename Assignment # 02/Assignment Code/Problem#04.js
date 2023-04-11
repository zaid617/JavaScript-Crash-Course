const addList = (text)=>{

    const list = document.createElement('li');
    list.innerText = text;
    document.getElementById('orderList').appendChild(list);

}
