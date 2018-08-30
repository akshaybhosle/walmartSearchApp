import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Jsonp} from '@angular/http';
import {SearchItems} from '../../models/searchItems';

@Injectable()
export class LookupService {

    constructor(private jsonp: Jsonp) { }

    lookupByItemId(params: SearchItems): Observable<SearchItems>  {
      const commaSeparatedIds = params.itemIds.join();
        return this.jsonp.request('http://api.walmartlabs.com/v1/items?ids=' + commaSeparatedIds
            + '&apiKey=' + params.apiKey + '&callback=JSONP_CALLBACK')
            .pipe(
                map(res => res.json()),
            );
    }
}
