import * as ko from 'knockout';
import * as kom from 'knockout.mapping';
import * as _ from 'lodash';
import {Product} from '../Models/Product';
import {injectable} from 'inversify';

export interface IProductRepository {
    GetAll() : Array<Product>;
    GetById(id:number):Product;
    GetAllObservable(): KnockoutObservableArray<KnockoutObservableType<Product>>; 
    GetAllObservableByCustomerId(customerId:number): Array<Product>;
}

@injectable()
export class ProductRepository implements IProductRepository{
    GetAll(){
        const products = new Array<Product>();
        
        products.push(new Product(1,1, "Toys", "Megatron","Leader of the Decepticons"));
        products.push(new Product(2,2, "Toys", "Optimas Prime","Leader of the Autobots"));
        products.push(new Product(3,3, "Toys", "Galvatron","New Leader of the Decepticons"));
        products.push(new Product(4,1, "Toys", "Superman","Man of steel"));
        products.push(new Product(5,2, "Toys", "Batman","Caped Crusader"));
        products.push(new Product(6,3, "Toys", "Megatron","Leader of the Decepticons"));
        products.push(new Product(7,3, "Home", "Big Sofa","A large Sofa"));
       
        return products;
    }

    GetAllObservable(): KnockoutObservableArray<KnockoutObservableType<Product>>{
        const products = this.GetAll();
        return kom.fromJS(products)
    }

    GetAllObservableByCustomerId(customerId:number): Array<Product>{
        const products = this.GetAll().filter(p => p.CustomerId == customerId);
        return products;
    }

    GetById(id:number){
        return new Product(1,1, "Toys", "Megatron","Leader of the Decepticons");
    }
}