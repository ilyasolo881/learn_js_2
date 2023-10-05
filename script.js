function focus() {
    const myInput = document.querySelector('input')
    const myDiv = document.querySelector('div')
  
    myInput.addEventListener('click', function() {
      myDiv.classList.add('active')
    })
    document.addEventListener('mouseup', function() {
        myDiv.classList.remove('active')
    })
};
focus();
