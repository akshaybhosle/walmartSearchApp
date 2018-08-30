import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {SearchItems} from '../../models/searchItems';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RecommendationService {

    constructor(private http: HttpClient) { }

    recommendationsByItemId(params: SearchItems): Observable<SearchItems> {
        return this.http.get<any>('http://api.walmartlabs.com/v1/nbp?apiKey=' + params.apiKey + '&itemId='
            + params.lookupItem.itemId)
            .pipe(
                map(res => res)
            );
    }

}
