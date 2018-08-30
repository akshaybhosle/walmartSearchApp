import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResultItemComponent} from './components/result-item/result-item.component';
import {SearchItemsComponent} from './components/search-items/search-items.component';
import {ResultModalComponent} from './components/result-modal/result-modal.component';

const routes: Routes = [
    {
        path: 'app-result-item',
        component: ResultItemComponent
    },
    {
        path: 'app-search-items',
        component: SearchItemsComponent
    },
    {
        path: 'app-result-modal',
        component: ResultModalComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

