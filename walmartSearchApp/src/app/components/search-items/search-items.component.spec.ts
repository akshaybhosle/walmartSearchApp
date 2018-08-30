/* tslint:disable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchItemsComponent } from './search-items.component';
import {JsonpModule} from '@angular/http';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {SearchService} from '../../services/searchService/search.service';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/of';
import {Item} from '../../models/item';
import {LookupService} from '../../services/lookupService/lookup.service';

describe('SearchItemsComponent', () => {
	let component: SearchItemsComponent;
	let fixture: ComponentFixture<SearchItemsComponent>;
	let searchService: SearchService;
	let lookupService: LookupService;
	let item: Item;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [JsonpModule, RouterModule, RouterTestingModule.withRoutes([])],
			declarations: [ SearchItemsComponent ],
			providers: [SearchService, LookupService],
			schemas: [NO_ERRORS_SCHEMA]
		})
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SearchItemsComponent);
		component = fixture.componentInstance;
		searchService = TestBed.get(SearchService);
		lookupService = TestBed.get(LookupService);
		fixture.detectChanges();

		component.items = [];
		item = {name: '', salePrice: 10, itemId: 1, items: [], thumbnailImage: '', customerRatingImage: '',
      upc: '', shortDescription: '', mediumImage: '', brandName: ''};
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should clear all fields', () => {
		component.clearAll();
		expect(component.items.length).toBe(0);
	});


	it('should call the search service for search value not empty', () => {
		let item: Item = new Item();
		component.items = [];
		component.searchField = 'ipod';

		spyOn(searchService, 'searchByInputString').and.returnValue(Observable.of({
			res: item
		}));
		component.checkSearchString();
		expect(searchService.searchByInputString).toHaveBeenCalled();
	});

  it('should not call the search service for search value empty', () => {
    let item: Item = new Item();
    component.items = [];
    component.searchField = '';

    spyOn(searchService, 'searchByInputString').and.returnValue(Observable.of({
      res: item
    }));
    component.checkSearchString();
    expect(component.loading).toBe(false);
  });

	it ('should get item description', () =>  {
	  component.getItemDesc(item);
	  expect(component.lookupItem).toBe(item);
	  expect(component.display).toBe(true);
  });

	it ('should lookup by itemIds', ()  =>  {
	  let itemIds = [1,2];
	  component.itemIds = itemIds;

	  spyOn(lookupService, 'lookupByItemId').and.returnValue(Observable.of({
      items: [item]
    }));
	  component.lookupItemsByIds();
    expect(lookupService.lookupByItemId).toHaveBeenCalled();
	  expect(component.lookupItems[0].salePrice).toBe(item.salePrice);
  })
});
