import React from 'react';
import disabled from '../Script.js';

function Container3 (){
	return(
        <div className="container_cat container_cat_3">
            <div className="card card3" onClick={ function() {
                document.querySelector(".card3").classList.toggle("selected_card");
                document.querySelector(".weight3").classList.toggle("selected_weight");
                document.querySelector(".border3").classList.toggle("selected_border");

                if(document.querySelector(".card3").className === "card card3 selected_card") {
                    document.querySelector(".card3").onmouseleave = function() {
                        document.querySelector(".slogan3").innerHTML = "Котэ не одобряет?";
                        document.querySelector(".slogan3").classList.add("selected_slogan");
                    }
                }else {
                    document.querySelector(".slogan3").innerHTML = "Сказочное заморское яство";
                    document.querySelector(".slogan3").classList.remove("selected_slogan");
                    
                    document.querySelector(".card3").onmouseleave = null;
                }
             }}>
                <span></span>
                <span></span>
                <div className="border border3"></div>
                <p className="weight weight3">
                    <span className="weight_num">5</span> <br />
                    кг
                </p>
                <p className="slogan slogan3">Сказочное заморское яство</p>
                <h2 className="yammy">Нямушка</h2>
                <p className="flavor">с курой</p>
                <p className="serving">
                    <span className="num">100</span> порций <br />
                    <span className="num">5</span> мышей в подарок<br />
                    заказчик доволен
                </p>
                <div className="div_hidden">
                    <img src={require("./images/Photo.png")} alt="Котэ" />
                </div>
            </div>
            <p className="container_cat_link">Что сидишь? Порадуй котэ, 
                <a className='buy' href="https://www.youtube.com/watch?v=HIcSWuKMwOw&ab_channel=10Hours" onClick={ function(e) {
                     document.querySelector(".card3").classList.toggle("selected_card");
                     document.querySelector(".weight3").classList.toggle("selected_weight");
                     document.querySelector(".border3").classList.toggle("selected_border");

                    if(document.querySelector(".card3").className === "card card3 selected_card") {
                        document.querySelector(".card3").onmouseleave = function() {
                        document.querySelector(".slogan3").innerHTML = "Котэ не одобряет?";
                        document.querySelector(".slogan3").classList.add("selected_slogan");
                        }
                    }else {
                        document.querySelector(".slogan3").innerHTML = "Сказочное заморское яство";
                        document.querySelector(".slogan3").classList.remove("selected_slogan");
                        
                        document.querySelector(".card3").onmouseleave = null;
                    }
                     
                     e.preventDefault();
                }}> купи.</a>
            </p>
        </div>
	)
}

let myInterval = setInterval(() => {
    if (document.readyState === 'complete') {
        if(true) {
            disabled(2);
        }
        clearInterval(myInterval);
    }
}, 10)

export default Container3