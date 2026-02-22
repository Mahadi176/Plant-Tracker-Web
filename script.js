let thrivingList = []
let strugglingList = []

let total = document.getElementById('total')
let thrivingCount = document.getElementById('thrivingCount')
let strugglingCount = document.getElementById('strugglingCount')


const allCardSection = document.getElementById('allCard')
const mainContainer = document.querySelector('main')
const filterSection = document.getElementById('filtered-section')

function calculateCount(){
    total.innerText = allCardSection.children.length
    thrivingCount.innerText = thrivingList.length
    strugglingCount.innerText = strugglingList.length
}
calculateCount()

mainContainer.addEventListener('click',function(event){
        
    if(event.target.classList.contains('.thrivingBtn')){
        const parenNode = event.target.parentNode.parentNode
    // const pareNode = event.target.parentNode
    const plantName = parenNode.querySelector('.plantName').innerText
    const latinName = parenNode.querySelector('.latinName').innerText
    const  light    = parenNode.querySelector('.light').innerText
    const  water    = parenNode.querySelector('.water').innerText
    const  status   = parenNode.querySelector('.status').innerText
    const  notes    = parenNode.querySelector('.notes').innerText

    // const  btnDel   = pareNode.querySelector('.btnDelete')

        const cardInfo ={
         plantName,
         latinName,
         light,
         water,
         status,
         notes
        }
    const plantExist = thrivingList.find(item => item.plantName == cardInfo.plantName)

    if(!plantExist){
        thrivingList.push(cardInfo)
        
    }
    renderThriving()
    }
    
})

function renderThriving(){
        filterSection.innerHTML = ''
        for(let thrive of thrivingList){
            let div = document.createElement('div')
            div.className = "card flex justify-between border border-black p-4 rounded-md my-5"
            div.innerHTML = `
        <!-- part-1  -->
            <div>
        <div>
           <p class="plantName text-xl font-bold text-blue-600">Plant Name 3</p>
           <p class="latinName text-gray-600">Latin Name</p>
       </div>
       <div class="flex gap-4 my-4">
           <p class="light bg-slate-200 rounded-lg px-2">Bright Indicate</p>
           <p class="water bg-slate-200 rounded-lg px-2">Weekly</p>
       </div>
       <div class=" mb-4">
           <p class="status w-40 border  rounded-lg px-2">Not Applicable</p>
           <p class="notes mt-2">New Leaf unfurling by the east window</p>
       </div>
       <div>
           <button class="thrivingBtn p-2 rounded-md bg-green-200 text-green-800">
                                    Thriving
           </button>
           <button class="strugglingBtn p-2 rounded-md bg-red-200 text-red-800">
                                    Struggling
           </button>
        </div>
        </div>
        <!-- part-2  -->
        <div>
        <button class="btnDelete p-2 rounded-md text-red-800 border border-red-800">
                                      Delete
        </button>
       </div>
            `
        }
           
}

