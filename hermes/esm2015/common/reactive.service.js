import { Injectable } from '@angular/core';
import { Reactive } from './reactive';
import * as i0 from "@angular/core";
export class ReactiveService extends Reactive {
    constructor() {
        super();
    }
    ngOnDestroy() {
        this.hermesUnsubscribe();
    }
}
ReactiveService.ɵfac = function ReactiveService_Factory(t) { return new (t || ReactiveService)(); };
ReactiveService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ReactiveService, factory: ReactiveService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReactiveService, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3RpdmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktaGVybWVzL3NyYy9jb21tb24vcmVhY3RpdmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWEsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXRELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7O0FBR3RDLE1BQU0sT0FBZ0IsZUFBZ0IsU0FBUSxRQUFRO0lBRXJEO1FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDVCxDQUFDO0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzFCLENBQUM7OzhFQVJvQixlQUFlO3FFQUFmLGVBQWUsV0FBZixlQUFlO3VGQUFmLGVBQWU7Y0FEcEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4vcmVhY3RpdmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUmVhY3RpdmVTZXJ2aWNlIGV4dGVuZHMgUmVhY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5oZXJtZXNVbnN1YnNjcmliZSgpO1xuXHR9XG5cbn1cbiJdfQ==