const addButton = document.getElementById('addButton')
const closeButton = document.getElementById('closeButton')
const popup = document.getElementById('popup')

addButton.addEventListener('click', function(){
    popup.classList.add('show')
})
closeButton.addEventListener('click', function(){
    popup.classList.remove('show')
})