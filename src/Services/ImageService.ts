import { injectable, inject } from "inversify";

export interface IImageService {
    GetImage(id:number):string;
} 

@injectable()
export class ImageService implements IImageService{
    GetImage = (id:number) => {
        let iconHtml = "";
        switch(id) {
            case null:
                iconHtml = '<i class="fa fa-car" ></i>';
                break;
            case 1:
                iconHtml = '<i class="fa fa-car" ></i>';
                break;
            case 2:
                iconHtml = '<i class="fa fa-superpowers" ></i>';
                break;
            case 3:
                iconHtml =  '<i class="fa fa-id-card"></i>';
                break;
            case 4:
                iconHtml =  '<i class="fa fa-meetup"></i>';
                break;
            default:
                iconHtml = '<i class="fa fa-car" ></i>';
                break;
        }
        return iconHtml;
    }
}