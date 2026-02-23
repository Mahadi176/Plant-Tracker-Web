let thrivingList = []
let strugglingList = []
let currentStatus ='all'

let total = document.getElementById('total')
let thrivingCount = document.getElementById('thrivingCount')
let strugglingCount = document.getElementById('strugglingCount')


const allCardSection = document.getElementById('allCard')
const mainContainer = document.querySelector('main')
const filterSection = document.getElementById('filtered-section')
const btnDeletes = document.getElementsByClassName('btnDelete')

function calculateCount(){
    total.innerText = allCardSection.children.length
    thrivingCount.innerText = thrivingList.length
    strugglingCount.innerText = strugglingList.length
}
calculateCount()

function toggleStyle(id){

    currentStatus = id


    if(id == 'thriving-filter-btn'){
        allCardSection.classList.add('hidden')
        filterSection.classList.remove('hidden')
        renderThriving()
    }
    else if(id == 'all-filter-btn'){
        allCardSection.classList.remove('hidden')
        filterSection.classList.add('hidden')
    }
    else if(id == 'struggling-filter-btn'){
        allCardSection.classList.add('hidden')
        filterSection.classList.remove('hidden')
        renderStruggling()
    }
    
}

// Delete-Btn 
mainContainer.addEventListener('click', function(event){
    if(event.target.classList.contains('btnDelete')){

        const card = event.target.parentNode.parentNode 
        const plantName = card.querySelector('.plantName').innerText

        thrivingList = thrivingList.filter(item => item.plantName != plantName)
        strugglingList = strugglingList.filter(item => item.plantName != plantName)

        card.parentNode.removeChild(card) 
        calculateCount()
    }
})

mainContainer.addEventListener('click',function(event){
    if(event.target.classList.contains('thriving-btn')){
        const parenNode = event.target.parentNode.parentNode

    const plantName = parenNode.querySelector('.plantName').innerText
    const latinName = parenNode.querySelector('.latinName').innerText
    const  light    = parenNode.querySelector('.light').innerText
    const  water    = parenNode.querySelector('.water').innerText
    const  status   = parenNode.querySelector('.status').innerText
    const  notes    = parenNode.querySelector('.notes').innerText

    parenNode.querySelector('.status').innerText = 'Thrive'

        const cardInfo ={
         plantName,
         latinName,
         light,
         water,
         status:'Thrive',
         notes
        }
    const plantExist = thrivingList.find(item => item.plantName == cardInfo.plantName)

    if(!plantExist){
        thrivingList.push(cardInfo)
    }

    
    strugglingList = strugglingList.filter(item=> item.plantName != cardInfo.plantName)
    if(currentStatus == 'struggling-filter-btn'){
        renderStruggling();
    }
    
    calculateCount()
    
    // renderThriving()
    }


    else if(event.target.classList.contains('struggling-btn')){
        const parenNode = event.target.parentNode.parentNode

    const plantName = parenNode.querySelector('.plantName').innerText
    const latinName = parenNode.querySelector('.latinName').innerText
    const  light    = parenNode.querySelector('.light').innerText
    const  water    = parenNode.querySelector('.water').innerText
    const  status   = parenNode.querySelector('.status').innerText
    const  notes    = parenNode.querySelector('.notes').innerText

    parenNode.querySelector('.status').innerText = 'Struggle'

        const cardInfo ={
         plantName,
         latinName,
         light,
         water,
         status:'Struggle',
         notes
        }
    const plantExist = strugglingList.find(item => item.plantName == cardInfo.plantName)

    if(!plantExist){
        strugglingList.push(cardInfo)
    }

    thrivingList = thrivingList.filter(item=> item.plantName != cardInfo.plantName)
    if(currentStatus == 'thriving-filter-btn'){
        renderThriving();
    }
    
    calculateCount()
    

    // renderStruggling()
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
           <p class="plantName text-xl font-bold ">${thrive.plantName}</p>
           <p class="latinName text-gray-600">Latin Name</p>
       </div>
       <div class="flex gap-4 my-4">
           <p class="light bg-slate-200 rounded-lg px-2">Bright Indicate</p>
           <p class="water bg-slate-200 rounded-lg px-2">Weekly</p>
       </div>
       <div class=" mb-4">
           <p class="status w-40 border  rounded-lg px-2">${thrive.status}</p>
           <p class="notes mt-2">New Leaf unfurling by the east window</p>
       </div>
       <div>
           <button class="thriving-btn p-2 rounded-md bg-green-200 text-green-800">
                                    Thriving
           </button>
           <button class="struggling-btn p-2 rounded-md bg-red-200 text-red-800">
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
            filterSection.appendChild(div)
        }  

}
function renderStruggling(){
        filterSection.innerHTML = ''
        for(let struggle of strugglingList){
            let div = document.createElement('div')
            div.className = "card flex justify-between border border-black p-4 rounded-md my-5"
            div.innerHTML = `      
        <!-- part-1  -->
        <div>
        <div>
           <p class="plantName text-xl font-bold ">${struggle.plantName}</p>
           <p class="latinName text-gray-600">Latin Name</p>
       </div>
       <div class="flex gap-4 my-4">
           <p class="light bg-slate-200 rounded-lg px-2">Bright Indicate</p>
           <p class="water bg-slate-200 rounded-lg px-2">Weekly</p>
       </div>
       <div class=" mb-4">
           <p class="status w-40 border  rounded-lg px-2">${struggle.status}</p>
           <p class="notes mt-2">New Leaf unfurling by the east window</p>
       </div>
       <div>
           <button class="thriving-btn p-2 rounded-md bg-green-200 text-green-800">
                                    Thriving
           </button>
           <button class="struggling-btn p-2 rounded-md bg-red-200 text-red-800">
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
            filterSection.appendChild(div)
        }  

}


