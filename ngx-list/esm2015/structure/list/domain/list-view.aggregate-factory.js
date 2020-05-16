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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmFnZ3JlZ2F0ZS1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9kb21haW4vbGlzdC12aWV3LmFnZ3JlZ2F0ZS1mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBSzFELE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxnQkFBK0M7SUFFNUY7UUFDQyxLQUFLLEVBQUUsQ0FBQztJQUNULENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEVBQWM7UUFDcEIsT0FBTyxJQUFJLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7OztZQVRELFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld0lkIH0gZnJvbSAnLi9saXN0LXZpZXcuaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdBZ2dyZWdhdGUgfSBmcm9tICcuL2xpc3Qtdmlldy5hZ2dyZWdhdGUnO1xuXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3QWdncmVnYXRlRmFjdG9yeSBleHRlbmRzIEFnZ3JlZ2F0ZUZhY3Rvcnk8TGlzdFZpZXdJZCwgTGlzdFZpZXdBZ2dyZWdhdGU+IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Y3JlYXRlKGlkOiBMaXN0Vmlld0lkKTogTGlzdFZpZXdBZ2dyZWdhdGUge1xuXHRcdHJldHVybiBuZXcgTGlzdFZpZXdBZ2dyZWdhdGUoaWQpO1xuXHR9XG59XG4iXX0=