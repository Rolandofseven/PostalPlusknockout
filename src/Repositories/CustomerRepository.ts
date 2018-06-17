import * as ko from 'knockout';
import * as kom from 'knockout.mapping';
import {Customer} from '../Models/Customer';
import { injectable } from 'inversify';

export interface ICustomerRepository {
    GetAll() : Array<Customer>;
    GetById(id:number):Customer;
    GetAllObservable(): KnockoutObservableArray<KnockoutObservableType<Customer>>; 
}

@injectable()
export class CustomerRepository implements ICustomerRepository{
    GetAll(){
        const Customers = new Array<Customer>();
        Customers.push(new Customer(1,"Frank", "Smudger","32 Northlands Ave", "London", "United Kingdom"));
        Customers.push(new Customer(2,"Debbie", "WHite","32 Southlands Ave", "London", "United Kingdom"));
        Customers.push(new Customer(3,"Jane", "Davison","32 Wakefield Ave", "London", "United Kingdom"));
        Customers.push(new Customer(4,"Steve", "Jeffison","325th Street", "New York", "United Kingdom"));
        Customers.push(new Customer(5,"Bob", "Moonsaw","Road 42", "Madird", "Spain"));
        Customers.push(new Customer(6,"Sidney", "Brown","32 Northlands Ave", "London", "United Kingdom"));
        Customers.push(new Customer(7,"Freddie", "Smith","32 Northlands Ave", "London", "United Kingdom"));

        return Customers;
    }
    GetAllObservable(): KnockoutObservableArray<KnockoutObservableType<Customer>>{
        const customers = this.GetAll();
        return kom.fromJS(customers)
    }
    GetById(id:number){
        return new Customer(100,"Jim7", "Bob","32 Northlands Ave", "London", "United Kingdom");
    }
}