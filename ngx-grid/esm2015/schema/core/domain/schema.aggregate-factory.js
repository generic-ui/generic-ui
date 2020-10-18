/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AggregateFactory } from '@generic-ui/hermes';
import { SchemaAggregate } from './schema.aggregate';
export class SchemaAggregateFactory extends AggregateFactory {
    constructor() {
        super();
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    create(aggregateId) {
        return new SchemaAggregate(aggregateId);
    }
}
SchemaAggregateFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaAggregateFactory.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmFnZ3JlZ2F0ZS1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzY2hlbWEvY29yZS9kb21haW4vc2NoZW1hLmFnZ3JlZ2F0ZS1mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUlyRCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsZ0JBQTJDO0lBRXRGO1FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDVCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxXQUFxQjtRQUMzQixPQUFPLElBQUksZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7OztZQVRELFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTY2hlbWFJZCB9IGZyb20gJy4uL2FwaS9zY2hlbWEuaWQnO1xuaW1wb3J0IHsgU2NoZW1hQWdncmVnYXRlIH0gZnJvbSAnLi9zY2hlbWEuYWdncmVnYXRlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NoZW1hQWdncmVnYXRlRmFjdG9yeSBleHRlbmRzIEFnZ3JlZ2F0ZUZhY3Rvcnk8U2NoZW1hSWQsIFNjaGVtYUFnZ3JlZ2F0ZT4ge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRjcmVhdGUoYWdncmVnYXRlSWQ6IFNjaGVtYUlkKTogU2NoZW1hQWdncmVnYXRlIHtcblx0XHRyZXR1cm4gbmV3IFNjaGVtYUFnZ3JlZ2F0ZShhZ2dyZWdhdGVJZCk7XG5cdH1cbn1cbiJdfQ==