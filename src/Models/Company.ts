
export class Company {
    public ID: number;
    public CompanyName: string;
    public Address: string;
    public City: number;

    constructor(id: number, name: string, address: string, city: number) {
        this.ID = id;
        this.CompanyName = name;
        this.Address = address;
        this.City = city;
    }
}

