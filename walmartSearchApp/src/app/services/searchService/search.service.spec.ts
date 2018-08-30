/* tslint:disable */
import { TestBed, inject } from '@angular/core/testing';

import { SearchService } from './search.service';
import {JsonpModule} from '@angular/http';
import {Observable} from 'rxjs';
import {SearchItems} from '../../models/searchItems';
import {Item} from '../../models/item';

describe('SearchService', () => {
  let searchParams: SearchItems;
  let item: Item;
  let searchService: SearchService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [JsonpModule],
            providers: [SearchService]
        });
    });

  beforeEach(() => {
    searchService = TestBed.get(SearchService);
    searchParams = new SearchItems();
    item = new Item();
  });

    it('should be created', inject([SearchService], (service: SearchService) => {
        expect(service).toBeTruthy();
    }));

  it ('should call lookup service', () => {
    searchParams.apiKey = 'abcd';
    searchParams.query = 'camera';
    searchParams.numItems = 10;

    spyOn(searchService, 'searchByInputString').and.returnValue(Observable.of([]));
    searchService.searchByInputString(searchParams);
    expect(searchService.searchByInputString).toHaveBeenCalled();
  });
});
