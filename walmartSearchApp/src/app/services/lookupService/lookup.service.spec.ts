/* tslint:disable */
import { TestBed, inject } from '@angular/core/testing';
import { LookupService } from './lookup.service';
import {JsonpModule} from '@angular/http';
import {Observable} from 'rxjs';
import {SearchItems} from '../../models/searchItems';
import {Item} from '../../models/item';

describe('LookupService', () => {
  let searchParams: SearchItems;
  let item: Item;
  let lookupService: LookupService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [JsonpModule],
            providers: [LookupService]
        });
    });

  beforeEach(() => {
    lookupService = TestBed.get(LookupService);
    searchParams = new SearchItems();
    item = new Item();
  });

    it('should be created', inject([LookupService], (service: LookupService) => {
        expect(service).toBeTruthy();
    }));

  it ('should call lookup service', () => {
    item.itemId = 1;
    searchParams.apiKey = 'abcd';
    searchParams.lookupItem = item;

    spyOn(lookupService, 'lookupByItemId').and.returnValue(Observable.of([]));
    lookupService.lookupByItemId(searchParams);
    expect(lookupService.lookupByItemId).toHaveBeenCalled();
  });
});
