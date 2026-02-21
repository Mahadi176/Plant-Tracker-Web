let thrivingList = [];
let struggleList = [];

let total = document.getElementById('total')
let thrivingCount = document.getElementById('thrivingCount')
let strugglingCount = document.getElementById('strugglingCount')

// console.log(total,thriving,struggling)
const allFilterBtn = document.getElementById('all-filter-btn')
const thrivingFilterBtn = document.getElementById('thriving-filter-btn')
const strugglingFilterBtn = document.getElementById('struggling-filter-btn')

const allCardSection = document.getElementById('allCard')
const mainContainer = document.querySelector('main')
const filterSection = document.getElementById('filtered-section')
// console.log(allCardSection.children)
function calculateCount(){
   total.innerText = allCardSection.children.length
   thrivingCount.innerText = thrivingList.length
   strugglingCount.innerText = struggleList.length
}

calculateCount()

function toggleStyle(id){
    
    allFilterBtn.classList.add('bg-black','text-white')
    thrivingFilterBtn.classList.add('bg-black','text-white')
    strugglingFilterBtn.classList.add('bg-black','text-white') 
    
    allFilterBtn.classList.remove('bg-gray-300')
    thrivingFilterBtn.classList.remove('bg-gray-300')
    strugglingFilterBtn.classList.remove('bg-gray-300')

    const selected = document.getElementById(id)

    selected.classList.remove('bg-gray-200')
    selected.classList.add('bg-black','text-white')
}

mainContainer.addEventListener('click',function(event){
    
  if(event.target.classList.contains('thrivingBtn')){
        const parenNode = event.target.parentNode.parentNode
        const plantName = parenNode.querySelector('.plantName').innerText
        const light = parenNode.querySelector('.light').innerText
        const water = parenNode.querySelector('.water').innerText
        const status = parenNode.querySelector('.status').innerText
        const notes = parenNode.querySelector('.notes').innerText
        
        const cardInfo = {
            plantName,
            light,
            water,
            status,
            notes
            }

        // console.log(cardInfo)

        const plantExist = thrivingList.find(item=>item.plantName == cardInfo.plantName)

            if(!plantExist){
            thrivingList.push(cardInfo)
            }
            // console.log(thrivingList)
            renderThriving()
  }
})


function renderThriving(){
        filterSection.innerHTML = ''

        for(let thrive of thrivingList){
            console.log(thrive)
            let div = document.createElement('div')
            div.innerHTML = `
                <div>
                <div>
                     <p class="plantName text-xl font-bold text-pink-600">Plant Name 1</p>
                     <p class="latinName text-gray-600">Latin Name</p>
                </div>
                <div class="flex gap-4 my-4">
                    <p class="light bg-slate-200 rounded-lg px-2">Bright Indicate</p>
                    <p class="water bg-slate-200 rounded-lg px-2">Weekly</p>
                </div>
                <div class=" mb-4">
                    <p class="status w-40 border border-red-800 text-red-800 rounded-lg px-2">Not Applicable</p>
                    <p class="notes mt-2">New Leaf unfurling by the east window</p>
                </div>
                <div>
                    <button class="thrivingBtn p-2 rounded-md bg-green-200 text-green-800">Thriving</button>
                    <button class="strugglingBtn p-2 rounded-md bg-red-200 text-red-800">Struggling</button>
                </div>
            </div>
            <!-- part-2  -->
            <div>
                <button class="btnDelete p-2 rounded-md text-red-800 border border-red-800">Delete</button>
            </div>
            `
        }
}