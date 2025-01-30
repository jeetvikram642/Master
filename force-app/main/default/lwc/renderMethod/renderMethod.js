import { LightningElement } from 'lwc';
import signinTemp from './signinTemplate.html'
import signupTemp from './signupTemplate.html'
import renderTem from './renderMethod.html'
export default class RenderMethod extends LightningElement {



    render(){


        return signupTemp;
    }
}