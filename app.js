const dom = (tag) => document.querySelector(tag)
// main billing obj 
let purchasePack = {
    pageviews: dom('#pageviews').innerText,
    price: dom('#price').innerText,
    yearly: dom('#billingTime').checked
}

dom('#billingTime').oninput = (e) => purchasePack.yearly = (e.target.checked ? true : false)

const getDisc = () => {
    if (purchasePack.yearly) {
        return (+purchasePack.price.slice(1, 3) / 100) * 25
    } else {
        return 00
    }
}

dom('#priceRange').oninput = (e) => {
    dom('#pageviews').innerHTML = dom('#priceRange').value
    if (dom('#priceRange').value == 0) {
        dom('#pageviews').innerHTML = '0K'
        dom('#price').innerHTML = '$0.00'

    } else if (dom('#priceRange').value <= 20) {
        dom('#pageviews').innerHTML = '10K'
        dom('#price').innerHTML = '$8.00'

    } else if (dom('#priceRange').value <= 40) {
        dom('#pageviews').innerHTML = '50K'
        dom('#price').innerHTML = '$12.00'

    } else if (dom('#priceRange').value <= 60) {
        dom('#pageviews').innerHTML = '100K'
        dom('#price').innerHTML = '$16.00'

    } else if (dom('#priceRange').value <= 80) {
        dom('#pageviews').innerHTML = '500K'
        dom('#price').innerHTML = '$24.00'
    } else {
        dom('#pageviews').innerHTML = '1M'
        dom('#price').innerHTML = '$36.00'
    }
    purchasePack.pageviews = dom('#pageviews').innerHTML
    purchasePack.price = dom('#price').innerHTML
}

dom('#submitButtn').addEventListener('click', () => {
    dom('#result').innerHTML = `
   <div class="mt-5">
    <div class="d-flex ">
    <h6 class="d-inline">Price: &nbsp</h6>
    <h6 class="d-inline">${purchasePack.price}</h6>
    </div>
    <div class="d-flex">
    <h6 class="d-inline">Discount: &nbsp</h6>
    <h6 class="d-inline">$${getDisc()}.00</h6>
    </div>
    <div class="d-flex">
    <h6 class="d-inline">Total Price: &nbsp</h6>
    <h6 class="d-inline">$${+purchasePack.price.slice(1, 3) - getDisc()}.00</h6>
    </div>
    </div>
    `
})
//dark mode handle
toggleColor.addEventListener('click', (e) => {
    console.log(e.target.checked)
    if (e.target.checked) {
        dom('#body').classList.add('darkMode')
        dom('*').classList.add('darkMode')
        dom('.textToggle').style.color = 'hsl(227,35%,75%)'
        dom('#price').style.color = 'hsl(227,35%,75%)'
        dom('#submitButtn').style.backgroundColor = '#A0E6DE '
        dom('#submitButtn').style.color = '#141D2B '
        dom('.titleRoundLogo').style.stroke = 'rgba(207,216,239,0.1)'
    } else {
        dom('.textToggle').style.color = '#293356'
        dom('#price').style.color = '#293356'
        dom('#body').classList.remove('darkMode')
        dom('#submitButtn').style.backgroundColor = '#293356 '
        dom('#submitButtn').style.color = 'hsl(226, 100%, 87%) '
        dom('*').classList.remove('darkMode')
        dom('.titleRoundLogo').style.stroke = "rgb(207,216,239)"
    }

})