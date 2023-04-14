// Creating function that render the cards
const render = (array) => {
    main__itens.innerHTML = '' // mainList.innerHTML = ''
    transformingData(array)
    array.forEach(insertedValue => {
        const card = createCard(insertedValue)
        main__itens.append(card)
    })
}

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


const transformingData = (array) => {
    array.forEach(element => {
        if((element.categoryID === 0) || element.categoryID === 'Entrada'){
            element.categoryID = valuesCategory[0]
        } else{
            element.categoryID = valuesCategory[1]
        }
    })
    console.log(array)
}

render(insertedValues)