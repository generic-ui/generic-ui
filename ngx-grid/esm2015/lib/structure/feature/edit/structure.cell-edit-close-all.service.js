/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export class StructureCellEditCloseAllService {
    constructor() {
        this.closeAll$ = new Subject();
    }
    /**
     * @return {?}
     */
    closeAll() {
        this.closeAll$.next();
    }
    /**
     * @return {?}
     */
    onCloseAll() {
        return this.closeAll$.asObservable();
    }
}
StructureCellEditCloseAllService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureCellEditCloseAllService.prototype.closeAll$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNlbGwtZWRpdC1jbG9zZS1hbGwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC1jbG9zZS1hbGwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRzNDLE1BQU0sT0FBTyxnQ0FBZ0M7SUFEN0M7UUFHa0IsY0FBUyxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7SUFTbEQsQ0FBQzs7OztJQVBBLFFBQVE7UUFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RDLENBQUM7OztZQVhELFVBQVU7Ozs7Ozs7SUFHVixxREFBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDZWxsRWRpdENsb3NlQWxsU2VydmljZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjbG9zZUFsbCQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG5cdGNsb3NlQWxsKCk6IHZvaWQge1xuXHRcdHRoaXMuY2xvc2VBbGwkLm5leHQoKTtcblx0fVxuXG5cdG9uQ2xvc2VBbGwoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG5cdFx0cmV0dXJuIHRoaXMuY2xvc2VBbGwkLmFzT2JzZXJ2YWJsZSgpO1xuXHR9XG59XG4iXX0=