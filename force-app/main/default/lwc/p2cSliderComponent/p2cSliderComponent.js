import { LightningElement,api } from 'lwc';

export default class P2cSliderComponent extends LightningElement {


    val=20


    @api resetSlider(){


        this.val=50;
    }
}