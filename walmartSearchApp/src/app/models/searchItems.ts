import {Injectable} from '@angular/core';
import {Item} from './item';
const NUM_ITEMS = 10;

@Injectable()
export class SearchItems {
    public numItems = NUM_ITEMS;
    public query = '';
    public item: Item[];
    public apiKey: string;
    public items: any[];
    public errors: any[];
    public itemIds: any[] = [];
    public lookupItem: Item;
}
