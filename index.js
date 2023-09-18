let itemsList=[ ]
const screenEl = document.getElementById("screen-el")
const olEl = document.getElementById("items") 

const itemsFromLocalStorage = JSON.parse( localStorage.getItem("listItems"))

if (itemsFromLocalStorage) {
    itemsList = itemsFromLocalStorage
    renderItems()
}

function addItems(){
    itemsList.push(screenEl.value)
    screenEl.value = ""
    localStorage.setItem("listItems", JSON.stringify(itemsList))
    renderItems()
}

function renderItems() {
    let listItemsTemp = " "
    for ( let i=0 ; i < itemsList.length ; i++){
        listItemsTemp += `
        <div class="container">
            <li> ${itemsList[i]} </li>
            <button value="${i}" onclick="modifyItem('${i}')"> Edit </button>
            <button value="${i}" onclick="deleteItem('${i}')"> Delete </button>
        </div>
        `
    }
    olEl.innerHTML = listItemsTemp
}

function deleteAllItems(){
    itemsList = []
    localStorage.clear()
    renderItems()
}

function deleteItem(value){
    itemsList.splice(value,1)
    localStorage.setItem("listItems", JSON.stringify(itemsList))
    renderItems()
}

function modifyItem(value){
    screenEl.value = itemsList[value]
    deleteItem(value)
    renderItems()
}