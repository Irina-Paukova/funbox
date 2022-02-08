import React from 'react';
import disabled from '../Script.js';

function Container1 (){
	return(
        <div className="container_cat container_cat_1">
            <div className="card" onClick={ function() {
                document.querySelector(".card").classList.toggle("selected_card");
                document.querySelector(".weight").classList.toggle("selected_weight");
                document.querySelector(".border").classList.toggle("selected_border");
                
                if(document.querySelector(".card").className === "card selected_card") {
                    document.querySelector(".card").onmouseleave = function() {
                        document.querySelector(".slogan").innerHTML = "Котэ не одобряет?";
                        document.querySelector(".slogan").classList.add("selected_slogan");
                    }
                }else {
                    document.querySelector(".slogan").innerHTML = "Сказочное заморское яство";
                    document.querySelector(".slogan").classList.remove("selected_slogan");
                    
                    document.querySelector(".card").onmouseleave = null;
                }
             }}>
                <div className="border"></div>
                <p className="weight">
                    <span className="weight_num weight_num_05">0,5</span> <br />
                    кг
                </p>
                <p className="slogan">Сказочное заморское яство</p>
                <h2 className="yammy">Нямушка</h2>
                <p className="flavor">c фуа-гра</p>
                <p className="serving">
                    <span className="num">10</span> порций <br />
                    мышь в подарок
                </p>
                <div className="div_hidden">
                    <img src={require("./images/Photo.png")} alt="Котэ" />
                </div>
            </div>
            <p className="container_cat_link">Что сидишь? Порадуй котэ, 
                <a className='buy' href="https://www.youtube.com/watch?v=HIcSWuKMwOw&ab_channel=10Hours" onClick={ function(e) {
                      document.querySelector(".card").classList.toggle("selected_card");
                      document.querySelector(".weight").classList.toggle("selected_weight");
                      document.querySelector(".border").classList.toggle("selected_border");

                    if(document.querySelector(".card").className === "card selected_card") {
                        document.querySelector(".card").onmouseleave = function() {
                        document.querySelector(".slogan").innerHTML = "Котэ не одобряет?";
                        document.querySelector(".slogan").classList.add("selected_slogan");
                    }
                    }else {
                        document.querySelector(".slogan").innerHTML = "Сказочное заморское яство";
                        document.querySelector(".slogan").classList.remove("selected_slogan");
                        
                        document.querySelector(".card").onmouseleave = null;
                    }

                    e.preventDefault();
                }}> купи.</a>
            </p>
        </div>
	)
}

let myInterval = setInterval(() => {
    if (document.readyState === 'complete') {
        if(false) {
            disabled(0);
        }
        clearInterval(myInterval);
    }
}, 10)


export default Container1