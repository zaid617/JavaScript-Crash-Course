const obj = (object)=>{

    localStorage.setItem('obj', JSON.stringify(object));

    return JSON.parse(localStorage.getItem('obj'));

}