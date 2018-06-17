export class Product{
    ProductId:number;
    CustomerId:number;
    Category:string;
    Name:string;
    Description:string;

    
    constructor(productId:number,customerId:number,category:string,name:string,description:string){
        this.ProductId = productId,
        this.CustomerId = customerId,
        this.Category = category,
        this.Name = name,
        this.Description = description
    }
}