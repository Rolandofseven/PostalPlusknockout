import * as ko from 'knockout'

import 'devextreme/integration/jquery';
import 'devextreme/integration/knockout';
import 'devextreme/ui/button';
import 'devextreme/ui/data_grid';
import 'devextreme/ui/text_box';
import {DataGridOptions, editing, SelectionMode} from '../Models/DataGridOptions';
import {DxColumn, lookup} from '../Models/DxColumn';
import {DxButtonOptions} from '../Models/DxButtonOptions';
import {City} from '../Models/City';
import {Company} from '../Models/Company';
import {ContainerOperations}  from '../IOC/ContainerOperations';
import {TYPES} from '../IOC/types';
import {ICustomerRepository,CustomerRepository} from '../Repositories/CustomerRepository';
import {Customer} from '../Models/Customer';
import {IImageService} from '../Services/ImageService';
import {IMessageBus} from '../Services/MessageBus';


export class CustomerGrid
{
    private _customerRepository:ICustomerRepository;
    private _messageBus:IMessageBus;

    constructor(){
        var iocContainer            = ContainerOperations.getInstance();
        this._customerRepository    = iocContainer.container.get<ICustomerRepository>(TYPES.CustomerRepository);
        this._messageBus            = iocContainer.container.get<IMessageBus>(TYPES.MessageBus);
    }

    getCustomerCols = () => {
        let columns = new Array<DxColumn<Customer>>();
        columns.push(new DxColumn("CustomerId", "CustomerId"));
        columns.push(new DxColumn("FirstName", "FirstName"));
        columns.push(new DxColumn("LastName", "LastName"));
        columns.push(new DxColumn("Address", "Address"));
        columns.push(new DxColumn("City", "City"));
        columns.push(new DxColumn("Country", "Country"));

        return columns;
    }
    
    render() {
        let self = this;

        const customers = self._customerRepository.GetAllObservable();
        const cols = this.getCustomerCols();
     
        let dataGridOptions = new DataGridOptions(customers,cols,null);
        dataGridOptions.rowAlternationEnabled = true;
        dataGridOptions.selectionMode = SelectionMode.single;

        dataGridOptions.onSelectionChanged = (data:any) => {
            this._messageBus.Publish("customers","customer.selected", data);
        }

        ko.components.register("customergrid", {
            viewModel: function () {
                this.dataGridOptions = dataGridOptions;
            },
            template: 
            `<div id="gridContainer" data-bind="dxDataGrid: dataGridOptions"></div>`
        });
    }

    
}