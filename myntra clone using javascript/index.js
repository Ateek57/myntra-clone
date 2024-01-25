let bagItem = []
let itemsContainerElement = document.querySelector('.items-container');
let bagitemcountelement = document.querySelector('.bag-item-count')

function onload() {
    displayitemsOnHomePage()
    displaybagicon()
    let bagItemsStr = localStorage.getItem('bagItem')
    bagItem =  bagItemsStr ? JSON.parse(bagItemsStr) : [];
}
onload()
function addtobag(itemId){
    bagItem.push(itemId)
    localStorage.setItem('bagItem',JSON.stringify(bagItem))
    displaybagicon()
}

function displaybagicon() {
    if(!bagitemcountelement){
        return;
    }
    if(bagItem.length > 0 ){
        bagitemcountelement.innerText = bagItem.length
        bagitemcountelement.style.display = 'block'
    }else{
        bagitemcountelement.style.display = 'none';
    }
    }
    function displayitemsOnHomePage(){
        let innerhtml = '';
        if(!itemsContainerElement ){
            return;
        }
    items.forEach(item =>{
        innerhtml += ` 
        <div class="item-container">
            <img class="item-image" src="${item.image}" alt="">
            <div class="rating">
                <p>${item.rating.stars}</p>
                <p>${item.rating.count}</p>
            </div>
            <div class="company-name">${item.company}</div>
            <div class="item-name">${item.item_name}</div>
            <div class="price">
                <span class="current-price">${item.current_price}</span>
                <span class="original-price">${item.original_price}</span>
                <span class="discount">${item.discount_percentage}%</span>
            </div>
            <button class="btn-add-bag" onclick= "addtobag(${item.id})">Add to Bag</button>
        </div>`
    })
    itemsContainerElement.innerHTML = innerhtml
}

