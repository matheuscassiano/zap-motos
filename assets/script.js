const formButton = document.querySelector('#formButton')
     
function modalStart(modalId){
  const modal = document.getElementById(modalId)

  if(modal){
    modal.classList.add('show')
    modal.addEventListener('click', (e) => {
      if(e.target.id == modalId || e.target.className == 'exit') {
        modal.classList.remove('show')
      }
    })
  }
}

formButton.addEventListener('click', () => {
  modalStart('modal-form')
})
      
