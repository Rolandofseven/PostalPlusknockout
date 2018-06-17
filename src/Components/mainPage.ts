import * as ko from 'knockout';
import {CustomerGrid} from './CustomerGrid';
import {ProductGrid} from './ProductGrid';

export class MainPage
{
    render = () => {
        let self = this;

        ko.components.register("mainpage", {
            viewModel: function (params:any) {
                this.params = params.message;
            },
            template: 
            `<customergrid></customergrid><div style="height:35px"></div>
             <productgrid></productgrid>`
        });
    }
}