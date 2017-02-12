/**
 * Created by trusttanapruk on 2/12/2017.
 */

//A Module
import {Component, View} from "angular2/core";

//create custom html tag
@Component({
    selector: 'my-app'
})

//inside the custom tag is this code
@View({
    template: '<h2>Hello World!!{{name}}</h2>'
})

//Other files will known this class as this
export class MyHelloWorldClass {
    name: 'Trust Tanapruk'
}
