/* tslint:disable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultItemComponent } from './result-item.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {JsonpModule} from '@angular/http';
import {RecommendationService} from '../../services/recommendationService/recommendation.service';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HttpClientModule} from "@angular/common/http";
import {Item} from "../../models/item";
import {SearchItems} from "../../models/searchItems";
import {Observable} from "rxjs";

describe('ResultItemComponent', () => {
	let component: ResultItemComponent;
	let fixture: ComponentFixture<ResultItemComponent>;
	let item: Item;
	let searchItems: SearchItems;
	let recommService: RecommendationService;
	let searchParams: SearchItems;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [JsonpModule, NgbModule, HttpClientModule],
			declarations: [ ResultItemComponent ],
			providers: [RecommendationService],
			schemas: [NO_ERRORS_SCHEMA]
		});
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ResultItemComponent);
		component = fixture.debugElement.componentInstance;
		recommService = TestBed.get(RecommendationService);
	});

	it('should create', () => {
		component.item = searchItems;
		expect(component).toBeTruthy();
	});
});
