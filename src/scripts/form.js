const inputs = document.querySelectorAll("input");

const handleRegisterForm = (array) => {
    modal // const modal = document.querySelector(".modal__controller");
    const inputs = document.querySelectorAll('input');
    formButtons__submit // const button = document.querySelector(".modal__controller > form > button");

    let newValue = {} // let newClient = {};
    let count = 0

    formMiddlePart__input.addEventListener('keydown', (event) => {
        if((event.key === 'e') || (event.key === 'E')){
            event.preventDefault()
        }
    })

    formButtons__submit.addEventListener('click', (event) =>{
        event.preventDefault()
        
        newValue.id = array.length + 1 // TRY TO IMPLEMENT ANOTHER FORM OF CREATING ID
        
        // const data = new FormData(modalContainer__form);
        // let output = "";
        // for (const entry of data) {
        //   output = `${entry[1]}\r`;
        // }
        // // log.innerText = output;
        // console.log(output)
        // event.preventDefault();
        // console.log(inputs)
        // console.log(inputs[1])
        // console.log(inputs[2])
        // console.log(inputs[1].name)
        // console.log(inputs[2].name)

        inputs.forEach(input => {
            
            if(input.value === ''){
                count+=1
            }
            if( input.name === 'categoryID'){
                // const data = new FormData(modalContainer__form);
                // let output = "";
                // for (const entry of data) {
                //   output = `${entry[1]}\r`;
                // }
                // // log.innerText = output;
                // console.log(output)
                // event.preventDefault();
                // newValue[input.valueType] = 23
                
            } else{
                newValue[input.name] = Number(input.value) 
            }
        }) 
        
        if(count !== 0){
            count=0

            return alert('Por favor, preencha todos os campos do formulário.')
        }
        console.log(newValue)
        array.push(newValue)
        render(array)
        main__itensEmpty.classList='exclude'
        newValue = {}
    })

}  

handleRegisterForm(insertedValues)

