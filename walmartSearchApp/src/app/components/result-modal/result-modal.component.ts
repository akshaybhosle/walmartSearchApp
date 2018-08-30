import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Item} from '../../models/item';
import {Router} from '@angular/router';
import {LookupService} from '../../services/lookupService/lookup.service';
import {SearchItems} from '../../models/searchItems';

const INDEX_10 = 10;

@Component({
    selector: 'app-result-modal',
    templateUrl: './result-modal.component.html',
    styleUrls: ['./result-modal.component.css']
})
export class ResultModalComponent implements OnInit {

    @Input() displayItem: SearchItems;
    @Input() recomItems: any[];
    public itemIds: any[] = [];
    public lookupItems: Item[];
    public searchParams: SearchItems = new SearchItems();

    constructor(public activeModal: NgbModal, private router: Router, private lookupService: LookupService) { }

    ngOnInit() {
      if (this.recomItems && this.recomItems.length > 0)  {
        this.recomItems.forEach(item =>  {
          this.itemIds.push(item.itemId);
        });
      }

      if (this.itemIds.length > INDEX_10) {
        this.itemIds = this.itemIds.slice(0, INDEX_10);
      }

      this.lookupItemsByIds();
    }

  lookupItemsByIds()  {
    if (this.itemIds.length > 0)  {
      this.searchParams.apiKey = this.displayItem.apiKey;
      this.searchParams.itemIds = this.itemIds;
      this.lookupService.lookupByItemId(this.searchParams)
        .subscribe(res => {
          this.lookupItems = res.items;
        });
    }
  }

  closeModal() {
        this.activeModal.dismissAll('Close click');
        this.router.navigateByUrl('');
    }

}
