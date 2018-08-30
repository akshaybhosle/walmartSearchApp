import {Component, OnInit} from '@angular/core';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public display = true;
    public apiKey: string;
    public closeResult: string;

    constructor(private modalService: NgbModal) { }

    ngOnInit()  {

    }

    checkApiKey(value: string) {
        this.apiKey = value;
        if (this.apiKey) {
            this.display = false;
            this.modalService.dismissAll();
        }
    }

    open(content) {
        const ngbModalOptions: NgbModalOptions = {
            backdrop : 'static',
            keyboard : false
        };
        this.modalService.open(content, ngbModalOptions).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
        });
    }
}
