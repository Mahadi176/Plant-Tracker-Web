let thrivingList = []
let strugglingList = []



let total = document.getElementById('total')
let thrivingCount = document.getElementById('thrivingCount')
let strugglingCount = document.getElementById('strugglingCount')



const allCardSection = document.getElementById('allCard')
const main = document.querySelector9('main')

function calculateCount(){
    total.innerText = allCardSection.children.length
    thrivingCount.innerText = thrivingList.length
    strugglingCount.innerText = strugglingList.length
}
calculateCount()