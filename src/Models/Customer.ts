export class Customer {
    public CustomerId:number;
    public FirstName:string;
    public LastName:string;
    public Address:string;
    public City:string;
    public Country:string;

    constructor(customerId:number, firstName:string, lastname:string, address:string,city:string,country:string){
        this.CustomerId = customerId;
        this.FirstName = firstName;
        this.LastName = lastname;
        this.Address = address;
        this.Country = country;
        this.City = city;
    }
}