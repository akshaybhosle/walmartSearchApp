/* tslint:disable */
import { TestBed, inject } from '@angular/core/testing';

import { RecommendationService } from './recommendation.service';
import {JsonpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {SearchItems} from '../../models/searchItems';
import {Item} from '../../models/item';
import {Observable} from 'rxjs';

describe('RecommendationService', () => {
  let searchParams: SearchItems;
  let item: Item;
  let recommendationService: RecommendationService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [JsonpModule, HttpClientModule],
            providers: [RecommendationService]
        });
    });

  beforeEach(() => {
    recommendationService = TestBed.get(RecommendationService);
    searchParams = new SearchItems();
    item = new Item();
  });

    it('should be created', inject([RecommendationService], (service: RecommendationService) => {
        expect(service).toBeTruthy();
    }));

    it ('should call recommendation service', () => {
      item.itemId = 1;
      searchParams.apiKey = 'abcd';
      searchParams.lookupItem = item;

      spyOn(recommendationService, 'recommendationsByItemId').and.returnValue(Observable.of([]));
      recommendationService.recommendationsByItemId(searchParams);
      expect(recommendationService.recommendationsByItemId).toHaveBeenCalled();
    });
});
