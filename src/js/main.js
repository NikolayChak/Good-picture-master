import modals from "./modules/modals";
import sliders from "./modules/slider";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import showMoreSttyles from "./modules/showMoreSttyles";
import calc from "./modules/calc";
import filter from "./modules/filter";
import pictureSize from "./modules/pictureSize";
import accordion from "./modules/accordion";
import burger from "./modules/burger";
import scrolling from "./modules/scrolling";
import drop from "./modules/drop";

window.addEventListener("DOMContentLoaded", ()=>{
    'use strict';

    modals();
    sliders('.feedback-slider-item', 'horizontal','.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    forms();
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    showMoreSttyles('.button-styles', '#styles .row')
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    filter();
    pictureSize('.size-block');
    accordion('.accordion-heading');
    burger('.burger-menu', 'burger');
    scrolling('.pageup');
    drop();



});