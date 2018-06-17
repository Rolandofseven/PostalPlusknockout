import 'reflect-metadata';
import { Container } from 'inversify';
import { TYPES } from './types';
import {IImageService, ImageService} from '../Services/ImageService';
import {ICustomerRepository,CustomerRepository} from '../Repositories/CustomerRepository';
import { IMessageBus, MessageBus } from '../Services/MessageBus';
import { IProductRepository, ProductRepository } from '../Repositories/ProductRepository';

export class ContainerOperations {
    private static instance: ContainerOperations;
    private _container: Container = new Container();

    private constructor() {

    }

    static getInstance() {
        if (!ContainerOperations.instance) {
            ContainerOperations.instance = new ContainerOperations();
            ContainerOperations.instance.createInversifyContainer();
        }
        return ContainerOperations.instance;
    }

    private createInversifyContainer() {
        this.container.bind<IImageService>(TYPES.ImageService).to(ImageService);
        this.container.bind<ICustomerRepository>(TYPES.CustomerRepository).to(CustomerRepository);
        this.container.bind<IProductRepository>(TYPES.ProductRepository).to(ProductRepository);
        this.container.bind<IMessageBus>(TYPES.MessageBus).to(MessageBus);
    }

    public get container(): Container {
        return this._container;
    }
}