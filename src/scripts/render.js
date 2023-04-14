// Creating function that render the cards
const render = (array) => {
    main__itens.innerHTML = '' // mainList.innerHTML = ''
    transformingData(array)
    array.forEach(insertedValue => {
        const card = createCard(insertedValue)
        main__itens.append(card)
    })
    totalAmount(array)
    depositAndOutflow(insertedValues)
    onlyDeposit(insertedValues)
    onlyOutflow(insertedValues)
}

// Creating the cards of values
const createCard = (insertedValue) => {
    // We are going to create the HTML elements 
    const mainItens__card = document.createElement('li')
    const card__valueFormated = document.createElement('div')
    const valueFormated__moneySimbol = document.createElement('p')
    const valueFormated__value = document.createElement('p')
    const card__Category = document.createElement('div')
    const cardCategory__valueType = document.createElement('p')
    const cardCategory__trashButton = document.createElement('button') 
  
    //  Establishing the hierarchy between elements
    mainItens__card.append(card__valueFormated, card__Category)
    card__valueFormated.append(valueFormated__moneySimbol, valueFormated__value)
    card__Category.append(cardCategory__valueType, cardCategory__trashButton)
    
    // Assigning values to the elements
    valueFormated__moneySimbol.innerHTML = 'R$'
    valueFormated__value.innerHTML = insertedValue.value
    cardCategory__valueType.innerHTML = insertedValue.categoryID
    cardCategory__trashButton.innerHTML = 'Excluir'
    
    // Assigning classes to the elements
    mainItens__card.classList = 'mainItens__card'
    card__valueFormated.classList = 'card__valueFormated'
    valueFormated__moneySimbol.classList = 'valueFormated__moneySimbol'
    valueFormated__value.classList = 'valueFormated__value'
    card__Category.classList = 'card__Category'
    cardCategory__valueType.classList = 'cardCategory__valueType'
    cardCategory__trashButton.classList = 'cardCategory__trashButton' 

    return mainItens__card
  }

// Tranforming '0' into 'Entrada' and '1' into 'Saída' 
const transformingData = (array) => {
    array.forEach(element => {
        if((element.categoryID === 0) || element.categoryID === 'Entrada'){
            element.categoryID = valuesCategory[0]
        } else{
            element.categoryID = valuesCategory[1]
        }
    })
}

// Function that gives the total amount of individual
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
    
    const totalAmount = totalDepositsValue-totalOutflowValue

    mainValuesSummary__sumValue.innerHTML = `R$${totalAmount}`
}

// Function that filters the values 'entrada' and the values 'saída'
const depositAndOutflow = (array) => {
    // 2a - We have to select the button 'mainButtons__buttonDeposit' and see if its really working
    // 2b - We have to use the render function with the new array created in 1 at the button
    mainButtons__buttonAll.addEventListener('click', () => {
        render(array)
    })
}

const onlyDeposit = (array) => {
    // 1 - We have to create a new array from 'array' that filters only the deposit's values
    const arrayTotalDeposits = array.filter( element => element.categoryID === 'Entrada')

    // 2a - We have to select the button 'mainButtons__buttonDeposit' and see if its really working
    // 2b - We have to use the render function with the new array created in 1 at the button
    mainButtons__buttonDeposit.addEventListener('click', () => {
        render(arrayTotalDeposits)
    })
}

const onlyOutflow = (array) => {
    // 1 - We have to create a new array from 'array' that filters only the deposit's values
    const arrayTotalDeposits = array.filter( element => element.categoryID === 'Saída')

    // 2a - We have to select the button 'mainButtons__buttonDeposit' and see if its really working
    // 2b - We have to use the render function with the new array created in 1 at the button
    mainButtons__buttonOutflow.addEventListener('click', () => {
        render(arrayTotalDeposits)
    })
}
render(insertedValues)