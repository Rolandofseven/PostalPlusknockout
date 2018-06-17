import * as ko from 'knockout';
import * as _ from 'lodash';

import 'devextreme/integration/jquery';
import 'devextreme/integration/knockout';
import 'devextreme/ui/button';
import 'devextreme/ui/data_grid';
import 'devextreme/ui/text_box';
import {DataGridOptions, editing, SelectionMode} from '../Models/DataGridOptions';
import {DxColumn, lookup} from '../Models/DxColumn';
import {DxButtonOptions} from '../Models/DxButtonOptions';
import {City} from '../Models/City';
import {ContainerOperations}  from '../IOC/ContainerOperations';
import {TYPES} from '../IOC/types';
import {IMessageBus} from '../Services/MessageBus';
import {IProductRepository,ProductRepository} from '../Repositories/ProductRepository';
import { Product } from '../Models/Product';

export class ProductGrid
{
    private _messageBus:IMessageBus;
    private _productRepository:IProductRepository;
    private data:KnockoutObservableArray<KnockoutObservableType<Product>>; 

    constructor(){
        var iocContainer = ContainerOperations.getInstance();
        this._messageBus = iocContainer.container.get<IMessageBus>(TYPES.MessageBus);
        this._productRepository = iocContainer.container.get<IProductRepository>(TYPES.ProductRepository);
    }

    registerListener = () => {
        let self = this;
        self._messageBus.Subscribe("customers","customer.selected",function(data:any){
            const customerId = data.selectedRowsData[0].CustomerId();
            const products = self._productRepository.GetAllObservableByCustomerId(data.selectedRowsData[0].CustomerId());
            self.data(products);
        });
    }

    getProductCols = () => {
        let columns = new Array<DxColumn<Product>>();

        columns.push(new DxColumn("ProductId", "ProductId"));
        columns.push(new DxColumn("CustomerId", "CustomerId"));
        columns.push(new DxColumn("Category", "Category"));
        columns.push(new DxColumn("Name", "Name"));
        columns.push(new DxColumn("Description", "Description"));

        return columns;
    }
    
    render = () => {
        let self = this;

        this.registerListener();

        self.data = self._productRepository.GetAllObservable();
        const cols = self.getProductCols();

        let dataGridOptions = new DataGridOptions(self.data,cols,null);
        dataGridOptions.rowAlternationEnabled = true;
    
        ko.components.register("productgrid", {
            viewModel: function (params:any) {
                this.params = params.message;
                this.dataGridOptions = dataGridOptions;
            },
            template: 
            `<div id="gridContainer" data-bind="dxDataGrid: dataGridOptions"></div>`
        });
    }
}