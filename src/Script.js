function disabled(number) {
    let card = document.querySelectorAll(".card")[number];
    let end = document.querySelectorAll(".container_cat_link")[number];
    let flavor = document.querySelectorAll(".flavor")[number].innerHTML;

    card.insertAdjacentHTML('beforeend', '<div class="shadow"></div>');
    card.classList.add("disabledCard");
    card.querySelector(".border").classList.add("disabled_border");
    card.querySelector(".weight").classList.add("disabled_weight");
    end.classList.add("disabled_container_cat_link");
    end.innerHTML = `Печалька, ${flavor} закончился.`
}

export default disabled