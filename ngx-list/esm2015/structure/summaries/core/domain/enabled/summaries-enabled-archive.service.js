/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SummariesManager } from '../summaries.manager';
import { AggregateArchive } from '@generic-ui/hermes';
export class SummariesEnabledArchive extends AggregateArchive {
    constructor() {
        super(SummariesManager.DEFAULT_ENABLED);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    init(structureId) {
        this.next(structureId, SummariesManager.DEFAULT_ENABLED);
    }
}
SummariesEnabledArchive.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SummariesEnabledArchive.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLWVuYWJsZWQtYXJjaGl2ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc3VtbWFyaWVzL2NvcmUvZG9tYWluL2VuYWJsZWQvc3VtbWFyaWVzLWVuYWJsZWQtYXJjaGl2ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBS3RELE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxnQkFBeUI7SUFFckU7UUFDQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsV0FBd0I7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7O1lBVEQsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1bW1hcmllc01hbmFnZXIgfSBmcm9tICcuLi9zdW1tYXJpZXMubWFuYWdlcic7XG5pbXBvcnQgeyBBZ2dyZWdhdGVBcmNoaXZlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3VtbWFyaWVzRW5hYmxlZEFyY2hpdmUgZXh0ZW5kcyBBZ2dyZWdhdGVBcmNoaXZlPGJvb2xlYW4+IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihTdW1tYXJpZXNNYW5hZ2VyLkRFRkFVTFRfRU5BQkxFRCk7XG5cdH1cblxuXHRpbml0KHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMubmV4dChzdHJ1Y3R1cmVJZCwgU3VtbWFyaWVzTWFuYWdlci5ERUZBVUxUX0VOQUJMRUQpO1xuXHR9XG5cbn1cbiJdfQ==