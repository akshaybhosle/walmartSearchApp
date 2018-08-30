import {Injectable} from '@angular/core';

@Injectable()
export class Item {
    public itemId: number;
    public name: string;
    public upc: string;
    public shortDescription: string;
    public thumbnailImage: string;
    public salePrice: number;
    public items: Item[];
    public customerRatingImage: string;
    public mediumImage: string;
    public brandName: string;
}
