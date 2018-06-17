import { CustomerRepository } from "../Repositories/CustomerRepository";

export const TYPES = {
    ImageService: Symbol("ImageService"),
    CustomerRepository: Symbol("CustomerRepository"),
    ProductRepository: Symbol("ProductRepository"),
    MessageBus: Symbol("MessageBus"),
};