import {SearchItems} from '../../models/searchItems';
import {SearchService} from '../../services/searchService/search.service';
import {Item} from '../../models/item';
import {LookupService} from '../../services/lookupService/lookup.service';
import {Observable} from 'rxjs';
import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {ResultItemComponent} from '../result-item/result-item.component';

const NUM_ITEMS = 10;


@Component({
    selector: 'app-search-items',
    templateUrl: './search-items.component.html',
    styleUrls: ['./search-items.component.css']
})
export class SearchItemsComponent implements OnInit {

    @ViewChild(ResultItemComponent) resultItemComponent: ResultItemComponent;
    public searchParams: SearchItems = new SearchItems();
    public items: Item[] = [];
    public lookupItems: Item[] = [];
    public searchItem: string;
    public results: Observable<Item[]> = new Observable();
    public searchField: string;
    public loading = false;
    public display = false;
    public lookupItem: Item;
    @Input() public backToSearch: boolean;
    @Input() public apikey: string;
    public itemIds: any[] = [];

    constructor(private searchService: SearchService, private lookupService: LookupService, public router: Router) { }

    ngOnInit() {
    }

    clearAll()  {
        this.searchParams.query = '';
        this.searchParams.apiKey = '';
        this.items = [];
        this.itemIds = [];
        this.lookupItems = [];
        this.searchField = '';
    }

    checkSearchString()  {
        this.searchItem = this.searchField;
        this.loading = true;
        this.display = false;

        this.itemIds = [];
        this.lookupItems = [];

        if (this.searchField.length === 0) {
            this.items = [];
            this.loading = false;
            this.lookupItems = [];
            this.itemIds = [];
        } else {
          this.searchParams.query = this.searchItem;
          this.searchParams.apiKey = this.apikey;
          this.searchParams.numItems = NUM_ITEMS;
            this.searchService.searchByInputString(this.searchParams)
                .subscribe(res => {
                    this.items = res.items;
                    this.loading = false;
                    if (res.items && res.items.length > 0)  {
                        res.items.forEach(item =>  {
                            this.itemIds.push(item.itemId);
                        });
                    }

                    if (this.itemIds.length > NUM_ITEMS) {
                      this.itemIds = this.itemIds.slice(0, NUM_ITEMS);
                    }

                    this.searchParams.itemIds = this.itemIds;

                    this.lookupItemsByIds();
                });
        }
    }

    lookupItemsByIds()  {
      if (this.itemIds.length > 0)  {
        this.lookupService.lookupByItemId(this.searchParams)
                .subscribe(res => {
                    this.lookupItems = res.items;
                });
        }
    }

    getItemDesc(item: Item) {
        this.lookupItem = item;
        this.searchParams.lookupItem = this.lookupItem;
        this.display = true;
        // this.router.navigateByUrl('app-result-item');
    }

}
