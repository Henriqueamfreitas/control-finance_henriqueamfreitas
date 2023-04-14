const inputs = document.querySelectorAll("input");

const handleRegisterForm = (array) => {
    modal // const modal = document.querySelector(".modal__controller");
    const inputs = document.querySelectorAll('input');
    formButtons__submit // const button = document.querySelector(".modal__controller > form > button");

    let newValue = {} // let newClient = {};
    let count = 0

    formButtons__submit.addEventListener('click', (event) =>{
        event.preventDefault()

        newValue.id = array.length + 1 // TRY TO IMPLEMENT ANOTHER FORM OF CREATING ID
        
        inputs.forEach(input => {
            if(input.value === ''){
                count+=1
            }
            newValue[input.name] = Number(input.value)
        }) 
        
        if(count !== 0){
            count=0

            return alert('Por favor, preencha todos os campos do formulário.')
        }
        array.push(newValue)
        render(array)
        newValue = {}
        console.log(array)
    })
}  

handleRegisterForm(insertedValues)

