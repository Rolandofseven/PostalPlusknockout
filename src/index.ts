import * as ko from 'knockout';
import * as kom from 'knockout.mapping';
import * as $ from "jquery";

import 'bootstrap/dist/css/bootstrap.css';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import '../site.css'

import {CustomerGrid} from './Components/CustomerGrid';
import {ProductGrid} from './Components/ProductGrid';
import {MainPage} from './Components/mainPage';
import {NavBar} from './Components/NavBar';

class IndexPage {
    RegisterComponents()  {
        (new CustomerGrid().render());
        (new ProductGrid().render());
        (new MainPage().render());
        (new NavBar().render());
    }
}


window.onload = function() {
    (new IndexPage()).RegisterComponents();

    ko.applyBindings(document.getElementById("data-grid-demo"));
};
