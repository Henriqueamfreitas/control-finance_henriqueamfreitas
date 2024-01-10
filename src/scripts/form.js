const inputs = document.querySelectorAll('input');

const handleRegisterForm = (array) => {
    modal 
    const inputs = document.querySelectorAll('input');
    formButtons__submit 

    let newValue = {} 
    let count = 0
    let inputValue = document.querySelector('.formMiddlePart__input')
    let inputDeposit = document.querySelector('.form__bottomPart__inputDeposit')
    let inputOutflow = document.querySelector('.form__bottomPart__inputOutflow')

    formMiddlePart__input.addEventListener('keydown', (event) => {
        if((event.key === 'e') || (event.key === 'E')){
            event.preventDefault()
        }
    })

    formButtons__submit.addEventListener('click', (event) =>{
        event.preventDefault()
        
        newValue.id = array.length + 1 
        
        if(inputValue.value===''){
            count+=1
        }
        newValue[inputValue.name] = Number(inputValue.value)

        if(!(inputDeposit.checked) && !(inputOutflow.checked)){
            count+=1
        }
        if(inputDeposit.checked){
            newValue.categoryID = 0
        }
        if(inputOutflow.checked){
            newValue.categoryID = 1
        }

        if(count !== 0){
            count=0

            return toastr.warning('Por favor, preencha todos os campos do formulário.')
        }
        array.push(newValue)
        render(array)
        main__itensEmpty.classList='exclude'
        newValue = {}
    })
}  

handleRegisterForm(insertedValues)

