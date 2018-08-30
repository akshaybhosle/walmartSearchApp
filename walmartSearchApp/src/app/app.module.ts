import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchItemsComponent } from './components/search-items/search-items.component';
import {SearchService} from './services/searchService/search.service';
import {LookupService} from './services/lookupService/lookup.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ResultItemComponent} from './components/result-item/result-item.component';
import {JsonpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ResultModalComponent } from './components/result-modal/result-modal.component';
import {AppRoutingModule} from './app-routing-module';
import {RecommendationService} from './services/recommendationService/recommendation.service';

@NgModule({
    declarations: [
        AppComponent,
        SearchItemsComponent,
        ResultItemComponent,
        ResultModalComponent
    ],
    entryComponents: [ResultModalComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NgbModule,
        JsonpModule
    ],
    providers: [
        SearchService,
        LookupService,
        RecommendationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
