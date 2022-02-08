import React from 'react'
import disabled from '../Script.js';

function Container_2 (){
	return(
        <div className="container_cat container_cat_2">
            <div className="card card2" onClick={ function() {
                document.querySelector(".card2").classList.toggle("selected_card");
                document.querySelector(".weight2").classList.toggle("selected_weight");
                document.querySelector(".border2").classList.toggle("selected_border");

                if(document.querySelector(".card2").className == "card card2 selected_card") {
                    document.querySelector(".card2").onmouseleave = function() {
                        document.querySelector(".slogan2").innerHTML = "Котэ не одобряет?";
                        document.querySelector(".slogan2").classList.add("selected_slogan");
                    }
                }else {
                    document.querySelector(".slogan2").innerHTML = "Сказочное заморское яство";
                    document.querySelector(".slogan2").classList.remove("selected_slogan");
                    
                    document.querySelector(".card2").onmouseleave = null;
                }
             }}>
                <span></span>
                <span></span>
                <div className="border border2"></div>
                <p className=" weight weight2">
                    <span className="weight_num">2</span> <br />
                    кг
                </p>
                <p className="slogan slogan2">Сказочное заморское яство</p>
                <h2 className="yammy">Нямушка</h2>
                <p className="flavor">c рыбой</p>
                <p className="serving">
                    <span className="num">40</span> порций <br />
                    <span className="num">2</span> мыши в подарок
                </p>
                <div className="div_hidden">
                    <img src={require("./images/Photo.png")} />
                </div>
            </div>
            <p className="container_cat_link">Что сидишь? Порадуй котэ, 
                <a className='buy' href="#" onClick={ function(e) {
                     document.querySelector(".card2").classList.toggle("selected_card");
                     document.querySelector(".weight2").classList.toggle("selected_weight");
                     document.querySelector(".border2").classList.toggle("selected_border");

                    if(document.querySelector(".card2").className == "card card2 selected_card") {
                        document.querySelector(".card2").onmouseleave = function() {
                        document.querySelector(".slogan2").innerHTML = "Котэ не одобряет?";
                        document.querySelector(".slogan2").classList.add("selected_slogan");
                    }
                    }else {
                        document.querySelector(".slogan2").innerHTML = "Сказочное заморское яство";
                        document.querySelector(".slogan2").classList.remove("selected_slogan");
                        
                        document.querySelector(".card2").onmouseleave = null;
                    }

                    e.preventDefault();
                }}> купи.</a>
            </p>
        </div>
	)
}

let myInterval = setInterval(() => {
    if (document.readyState == 'complete') {
        if(false) {
            disabled(1);
        }
        clearInterval(myInterval);
    }
}, 10)

export default Container_2