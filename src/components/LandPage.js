import React, { useState } from 'react';
import './LandPage.css'
const LandPage = () => {
    const dom = (tag) => document.querySelector(tag)

    const [purchasePack, setPurchasePack] = useState({
        pageviews: '10K',
        price: '16.00',
        yearly: true
    })

    const setPrice = (e) => {
        console.log(e.target.value);
        dom('#pageviews').innerHTML = e.target.value
        if (e.target.value < 20) {
            dom('#pageviews').innerHTML = '0K'
            dom('#price').innerHTML = '0.00'

        } else if (e.target.value <= 20) {
            dom('#pageviews').innerHTML = '10K'
            dom('#price').innerHTML = '8.00'

        } else if (e.target.value <= 40) {
            dom('#pageviews').innerHTML = '50K'
            dom('#price').innerHTML = '12.00'

        } else if (e.target.value <= 60) {
            dom('#pageviews').innerHTML = '100K'
            dom('#price').innerHTML = '16.00'

        } else if (e.target.value <= 80) {
            dom('#pageviews').innerHTML = '500K'
            dom('#price').innerHTML = '24.00'
        } else {
            dom('#pageviews').innerHTML = '1M'
            dom('#price').innerHTML = '36.00'
        }
        purchasePack.pageviews = dom('#pageviews').innerHTML
        purchasePack.price = dom('#price').innerHTML
    }
    // night mode dom style 
    const modeChng = e => {
        if (e.target.checked) {
            dom('#body').classList.add('darkMode')
            dom('*').classList.add('darkMode')
            dom('.textToggle').style.color = 'hsl(227,35%,75%)'
            dom('#prices').style.color = 'hsl(227,35%,75%)'
            dom('#price').style.color = 'hsl(227,35%,75%)'

            dom('#submitButtn').style.backgroundColor = '#A0E6DE '
            dom('#submitButtn').style.color = '#141D2B '
            dom('.titleRoundLogo').style.stroke = 'rgba(207,216,239,0.1)'
        } else {
            dom('.textToggle').style.color = '#293356'
            dom('#prices').style.color = '#293356'
            dom('#price').style.color = '#293356'
            dom('#body').classList.remove('darkMode')
            dom('#submitButtn').style.backgroundColor = '#293356 '
            dom('#submitButtn').style.color = 'hsl(226, 100%, 87%) '
            dom('*').classList.remove('darkMode')
            dom('.titleRoundLogo').style.stroke = "rgb(207,216,239)"
        }

    }
    // alert result 
    const getResult = () => {
        return alert(`
            Your package

            Price: $${purchasePack.price}
            Discount: $${purchasePack.yearly ? ((+purchasePack.price / 100) * 25) + '.00' : '0.00'}
            Total Price: $${purchasePack.price - (purchasePack.yearly ? (+purchasePack.price / 100) * 25 : '')}.00`)
    }

    return (

        <body id="body" className="my-5">
            <span className="mx-5">
                Day
                <label className="switch">
                    <input onClick={e => modeChng(e)} type="checkbox" id="toggleColor" />
                    <span className="slider round"></span>
                </label>
                Dark
            </span>
            <div style={{ minWidth: "200px " }} className="container-sm text-center">

                <div className="d-flex flex-column justify-content-center align-items-center my-5">

                    <svg xmlns="http://www.w3.org/2000/svg" width="146" height="145">
                        <g fill="transparent" fillRule="transparent" className="titleRoundLogo" stroke="rgb(207,216,239)">
                            <circle cx="63" cy="82" r="62.5" />
                            <circle cx="105" cy="41" r="40.5" />
                        </g>
                    </svg>

                    <div className="position-absolute bg-transparent">
                        <h2 style={{ color: "#293356" }} className="textToggle">Simple, Traffic-based pricing</h2>
                        <p>Sign-up for our 30-day trial. No credit card required.</p>
                    </div>

                </div>

                <div className="d-flex justify-content-evenly my-5">
                    <span>
                        <p><small style={{ letterSpacing: "2px" }}> <span id="pageviews">100K</span> PAGEVIEWS</small></p>

                    </span>
                    <span>
                        <h1 className="d-inline fw-bolder " id='prices' style={{ color: '#293356' }}>
                            $
                            <h1 style={{ color: '#293356' }} className="d-inline fw-bolder" id='price'
                            >16.00</h1>
                        </h1>
                        <h6 className="d-inline"><small>/month</small></h6>
                    </span>
                </div>
                <input onChange={e => setPrice(e)} type="range" name="priceRange" id="priceRange" min="0" max="100" step="20" /><br />

                <span>
                    <p className="d-inline">Monthly Billing</p> &nbsp;
                    <label className="switch">

                        <input type="checkbox" defaultChecked={purchasePack.yearly} onChange={(e) => setPurchasePack({ ...purchasePack, yearly: e.target.checked })} />
                        <span id="toggle" className="slider roundToggle round"></span>
                    </label>
                    <p className="d-inline">Yearly Billing &nbsp;<small style={{ color: "hsl(15, 100%, 70%)" }}>25% discount</small></p>
                </span>
                <div className="d-flex justify-content-evenly align-items-center mt-5 resFlex">
                    <ul className="text-start">
                        <li><small>Unlimited websites</small></li>
                        <li><small>100% data ownership</small></li>
                        <li><small>Email reports</small></li>
                    </ul>
                    <div>
                        <button id="submitButtn"
                            onClick={() => getResult()}
                            style={{
                                color: 'hsl(226, 100%, 87%)',
                                border: 'none',
                                fontSize: '12px',
                                backgroundColor: 'hsl(227, 35%, 25%)'
                            }} className="py-2 px-4 rounded-pill">Start my trial</button>
                    </div>
                </div>

            </div>
        </body>

    );
};

export default LandPage;