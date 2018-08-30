import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../models/item';
import {RecommendationService} from '../../services/recommendationService/recommendation.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ResultModalComponent} from '../result-modal/result-modal.component';
import {SearchItems} from '../../models/searchItems';

const OPEN_MODAL_MS = 5;


@Component({
    selector: 'app-result-item',
    templateUrl: './result-item.component.html',
    styleUrls: ['./result-item.component.css']
})
export class ResultItemComponent implements OnInit {

    @Input() public item: SearchItems;
    @Input() public recomItems: SearchItems = new SearchItems();
    public itemIds: any[];
    @Input() public backToSearch: boolean;
    public searchParams: SearchItems = new SearchItems();


    constructor(private recommService: RecommendationService, private modalService: NgbModal) { }

    ngOnInit() {
      if (this.item.lookupItem && this.item.lookupItem.itemId)  {
        this.getRecommmendationsByItemId();
      }
    }

    getRecommmendationsByItemId() {
      const items = [];
      this.searchParams.apiKey = this.item.apiKey;
      this.searchParams.lookupItem = this.item.lookupItem;
        this.recommService.recommendationsByItemId(this.searchParams)
            .subscribe(res => {
              if (res.errors) {
                this.recomItems.items = [];
                this.itemIds = [];
                } else {
                    this.recomItems = res;
                }

                setTimeout(() =>  {
                    this.open();
                }, OPEN_MODAL_MS);
            });

    }

    open() {
        const modalRef = this.modalService.open(ResultModalComponent, {centered: true, size: 'lg'});

        if (this.recomItems && this.recomItems.items && this.recomItems.items.length === 0) {
            modalRef.componentInstance.recomItems = [];
        } else {
            modalRef.componentInstance.recomItems = this.recomItems;
        }

        modalRef.componentInstance.displayItem = this.item;
    }

}
