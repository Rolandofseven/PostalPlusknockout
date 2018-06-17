import * as ko from 'knockout';
import * as kom from 'knockout.mapping';
import * as $ from "jquery";
(<any>window).jQuery = $
import 'bootstrap/dist/css/bootstrap.css';

import {CustomerGrid} from './Components/CustomerGrid';
import {ProductGrid} from './Components/ProductGrid';
import {MainPage} from './Components/mainPage';
import {NavBar} from './Components/NavBar';


function RegisterComponents()  {
    (new CustomerGrid().render());
    (new ProductGrid().render());
    (new MainPage().render());
    (new NavBar().render());
}

window.onload = function() {
    RegisterComponents();

    ko.applyBindings(document.getElementById("data-grid-demo"));
};
