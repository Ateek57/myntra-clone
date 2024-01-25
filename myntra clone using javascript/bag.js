let bagItemObjects = []


onLoad();

function onLoad(){
    loadBagitemObject();
    displaybagItems();
}

function loadBagitemObject(){
    console.log(bagItemObjects);
    
    bagItemObjects = bagItem.map(itemId => {
        for (let i = 0; i< items.length; i++){
            if(itemId == items[i].id)
                return items[i];
        }
    });
    console.log(bagItemObjects);
}

function displaybagItems(){
    let containerElement = document.querySelector('.bag-items-container');
    let innerHTML = '';
    bagItemObjects.forEach(bagItem => {
        innerHTML += generateItemHtml(bagItem);
    });
    containerElement.innerHTML = innerHTML;
}
function removefrombag(itemId){
    bagItem = bagItem.filter(bagItemId =>bagItemId != itemId);
    localStorage.setItem('bagItem',JSON.stringify(bagItem))
    loadBagitemObject();
    displaybagicon()
    displaybagItems()
    displayitemcount()
    calculatetotalprice()
    totalamountcalculate()
    calculatediscountmrp()


}
displayitemcount()

function generateItemHtml(items){
    return `<div class="bag-item-container">
        <div class="item-left-part">
        <img class="bag-item-img" src="${items.image}">
        </div>
        <div class="item-right-part">
        <div class="company">${items.company}</div>
        <div class="item-name">${items.item_name}</div>
        <div class="price-container">
            <span class="current-price">${items.current_price}</span>
            <span class="original-price">${items.original_price}</span>
            <span class="discount-percentage">${items.discount_percentage}</span>
        </div>
        <div class="return-period">
            <span class="return-period-days">${items.return_period}</span> return available
        </div>
        <div class="delivery-details">
            Delivery by
            <span class="delivery-details-days">${items.delivery_date}</span>
        </div>
        </div>

        <div class="remove-from-cart"  onclick="removefrombag(${items.id})" >X</div>
    </div>`;
}
function displayitemcount(){
    let priceheader = document.querySelector(".price-header");
    priceheader.innerHTML = `PRICE DETAILS (${bagItem.length} Items)`
}
let total;
function calculatetotalprice(){
    let orgprice = document.querySelector(".org-price")
    total = bagItemObjects.reduce(function reducer(acc,currentitem){
        return acc+ currentitem.original_price;
    },0)
    orgprice.innerHTML = total;
}
calculatetotalprice()
let totalamounts;
function totalamountcalculate(){
    let totalamount = document.querySelector(".total-amount")
     totalamounts = bagItemObjects.reduce(function reducer(acc,currentitem){
        return acc+currentitem.current_price ;
    },0)
    totalamount.innerHTML = totalamounts
}
totalamountcalculate()

function calculatediscountmrp(){
    let discount = document.querySelector(".dis")
    let totaldiscount = totalamounts - total;
    discount.innerHTML = totaldiscount
}
calculatediscountmrp()


