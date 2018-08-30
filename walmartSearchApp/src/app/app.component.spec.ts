/* tslint:disable */
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterModule} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
describe('AppComponent', () => {
	let component: AppComponent;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AppComponent],
			imports: [RouterModule, RouterTestingModule.withRoutes([])],
			schemas: [NO_ERRORS_SCHEMA]
		}).compileComponents();
	}));

	it('should create the app', async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));

	it('should check api key', () =>  {
		component.display = true;
		component.checkApiKey('apiChange');
		expect(component.display).toBe(false);
	});
});
