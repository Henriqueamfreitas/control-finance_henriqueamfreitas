const render = (array) => {
    main__itens.innerHTML = '' 
    transformingData(array)
    array.forEach(insertedValue => {
        const card = createCard(insertedValue)
        main__itens.append(card)
    })
    totalAmount(array)
    depositAndOutflow(insertedValues)
    onlyDeposit(insertedValues)
    onlyOutflow(insertedValues)
    handleDeleteValue(insertedValues)
}

const createCard = (insertedValue) => {
    const mainItens__card = document.createElement('li')
    const card__valueFormated = document.createElement('div')
    const valueFormated__moneySimbol = document.createElement('p')
    const valueFormated__value = document.createElement('p')
    const card__Category = document.createElement('div')
    const cardCategory__valueType = document.createElement('p')
    const cardCategory__trashButton = document.createElement('button') 
    const cardCategory__trashImage = document.createElement('img')
  
    const trashImage = new Image()
    trashImage.src = 'data:image/svg+xml,' + encodeURIComponent('<svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5625 0.875H9.28125L9.00781 0.382812C8.89844 0.164062 8.67969 0 8.43359 0H5.28906C5.04297 0 4.82422 0.164062 4.71484 0.382812L4.46875 0.875H1.1875C0.941406 0.875 0.75 1.09375 0.75 1.3125V2.1875C0.75 2.43359 0.941406 2.625 1.1875 2.625H12.5625C12.7812 2.625 13 2.43359 13 2.1875V1.3125C13 1.09375 12.7812 0.875 12.5625 0.875ZM2.19922 12.7695C2.22656 13.4805 2.80078 14 3.51172 14H10.2109C10.9219 14 11.4961 13.4805 11.5234 12.7695L12.125 3.5H1.625L2.19922 12.7695Z" fill="#ADB5BD"/></svg>')
    
    mainItens__card.append(card__valueFormated, card__Category)
    card__valueFormated.append(valueFormated__moneySimbol, valueFormated__value)
    card__Category.append(cardCategory__valueType, cardCategory__trashButton)
    cardCategory__trashButton.append(trashImage)
    
    let valueNotFormated = insertedValue.value
    let valueFormated = valueNotFormated.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    valueFormated__value.innerHTML = valueFormated
    cardCategory__valueType.innerHTML = insertedValue.categoryID
    
    mainItens__card.classList = 'mainItens__card'
    card__valueFormated.classList = 'card__valueFormated'
    valueFormated__moneySimbol.classList = 'valueFormated__moneySimbol text-2-medium'
    valueFormated__value.classList = 'valueFormated__value text-2-medium'
    card__Category.classList = 'card__Category'
    cardCategory__valueType.classList = 'cardCategory__valueType text-2-regular'
    cardCategory__trashButton.classList = 'cardCategory__trashButton' 
    cardCategory__trashButton.dataset.id = insertedValue.id 


    return mainItens__card
}


const transformingData = (array) => {
    array.forEach(element => {
        if((element.categoryID === 0) || element.categoryID === 'Entrada'){
            element.categoryID = valuesCategory[0]
        } else{
            element.categoryID = valuesCategory[1]
        }
    })
}


const totalAmount = (array) => {
    const arrayTotalDeposits = array.filter( element => element.categoryID === 'Entrada')
    let totalDeposits = []
    arrayTotalDeposits.forEach(deposit => {
        totalDeposits.push(deposit.value)
    })
    const totalDepositsValue = totalDeposits.reduce((acc, deposit) => acc + deposit, 0)
    
    const arrayTotalOutflow = array.filter( element => element.categoryID === 'Saída')
    let totalOutflow = []
    arrayTotalOutflow.forEach(outflow => {
        totalOutflow.push(outflow.value)
    })
    const totalOutflowValue = totalOutflow.reduce((acc, outflow) => acc + outflow, 0)
    
    const totalAmount = totalDepositsValue+totalOutflowValue
    let totalAmountFormated = totalAmount.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    
    mainValuesSummary__sumValue.innerHTML = totalAmountFormated
}


const depositAndOutflow = (array) => {
    mainButtons__buttonAll.addEventListener('click', () => {
        render(array)
    })
}

const onlyDeposit = (array) => {
    const arrayTotalDeposits = array.filter( element => element.categoryID === 'Entrada')
    
    mainButtons__buttonDeposit.addEventListener('click', () => {
        render(arrayTotalDeposits)
    })
}

const onlyOutflow = (array) => {
    const arrayTotalDeposits = array.filter( element => element.categoryID === 'Saída')
    
    mainButtons__buttonOutflow.addEventListener('click', () => {
        render(arrayTotalDeposits)
    })
}


const handleDeleteValue = (array) => {
    const buttons = document.querySelectorAll('.cardCategory__trashButton')

    buttons.forEach( button => {
        button.addEventListener( 'click', () => {
            const insertedValueID = Number(event.target.dataset.id)
            
            const findInsertedValueIndex = array.findIndex( insertedValue => insertedValue.id === insertedValueID)
            
            const removedValue = array.splice(findInsertedValueIndex, 1)
            console.log(removedValue)
            render(array)
            
            let classStyle = 'exclude'
            if(main__itens.children.length === 0){
                main__itensEmpty.classList.toggle(classStyle)
            } 
        })
    })
}

render(insertedValues)