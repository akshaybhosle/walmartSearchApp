import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Jsonp} from '@angular/http';
import {SearchItems} from '../../models/searchItems';

@Injectable()
export class SearchService {

    constructor(private jsonp: Jsonp) { }

    searchByInputString(params: SearchItems): Observable<SearchItems>  {
        return this.jsonp.request('http://api.walmartlabs.com/v1/search?query=' + params.query +
                '&format=json&apiKey=' + params.apiKey + '&numItems=' + params.numItems + '&callback=JSONP_CALLBACK')
            .pipe(
                map(res => res.json()),
            );
    }
}

