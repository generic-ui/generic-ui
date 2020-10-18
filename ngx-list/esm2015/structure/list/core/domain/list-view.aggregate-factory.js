/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AggregateFactory } from '@generic-ui/hermes';
import { ListViewAggregate } from './list-view.aggregate';
export class ListViewAggregateFactory extends AggregateFactory {
    constructor() {
        super();
    }
    /**
     * @param {?} id
     * @return {?}
     */
    create(id) {
        return new ListViewAggregate(id);
    }
}
ListViewAggregateFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ListViewAggregateFactory.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmFnZ3JlZ2F0ZS1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9jb3JlL2RvbWFpbi9saXN0LXZpZXcuYWdncmVnYXRlLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFJMUQsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGdCQUErQztJQUU1RjtRQUNDLEtBQUssRUFBRSxDQUFDO0lBQ1QsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsRUFBYztRQUNwQixPQUFPLElBQUksaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7O1lBVEQsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IExpc3RWaWV3SWQgfSBmcm9tICcuLi9hcGkvbGlzdC12aWV3LmlkJztcbmltcG9ydCB7IExpc3RWaWV3QWdncmVnYXRlIH0gZnJvbSAnLi9saXN0LXZpZXcuYWdncmVnYXRlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdBZ2dyZWdhdGVGYWN0b3J5IGV4dGVuZHMgQWdncmVnYXRlRmFjdG9yeTxMaXN0Vmlld0lkLCBMaXN0Vmlld0FnZ3JlZ2F0ZT4ge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRjcmVhdGUoaWQ6IExpc3RWaWV3SWQpOiBMaXN0Vmlld0FnZ3JlZ2F0ZSB7XG5cdFx0cmV0dXJuIG5ldyBMaXN0Vmlld0FnZ3JlZ2F0ZShpZCk7XG5cdH1cbn1cbiJdfQ==