/* tslint:disable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultModalComponent } from './result-modal.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {LookupService} from "../../services/lookupService/lookup.service";
import {Observable} from "rxjs";
import {Item} from "../../models/item";
import {Jsonp, JsonpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {SearchItems} from "../../models/searchItems";

describe('ResultModalComponent', () => {
  let component: ResultModalComponent;
  let fixture: ComponentFixture<ResultModalComponent>;
  let lookupService: LookupService;
  let item: Item = new Item();
  let searchItem: SearchItems = new SearchItems();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [JsonpModule, RouterModule, RouterTestingModule.withRoutes([])],
      declarations: [ ResultModalComponent ],
      providers: [ LookupService ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultModalComponent);
    component = fixture.debugElement.componentInstance;
    lookupService = TestBed.get(LookupService);
    item = {name: '', salePrice: 10, itemId: 1, items: [], thumbnailImage: '', customerRatingImage: '',
      upc: '', shortDescription: '', mediumImage: '', brandName: ''};
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should call lookupService', () =>  {
    let itemIds = [1,2];
    component.itemIds = itemIds;
    let apiKey = 'abcd';
    searchItem.apiKey = 'apikey'
    component.displayItem = searchItem;

    spyOn(lookupService, 'lookupByItemId').and.returnValue(Observable.of({
      items: [item]
    }));
    component.lookupItemsByIds();
    expect(lookupService.lookupByItemId).toHaveBeenCalled();
    expect(component.lookupItems[0].salePrice).toBe(item.salePrice);
  });

});
