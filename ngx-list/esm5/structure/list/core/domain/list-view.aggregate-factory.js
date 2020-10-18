/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AggregateFactory } from '@generic-ui/hermes';
import { ListViewAggregate } from './list-view.aggregate';
var ListViewAggregateFactory = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewAggregateFactory, _super);
    function ListViewAggregateFactory() {
        return _super.call(this) || this;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    ListViewAggregateFactory.prototype.create = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return new ListViewAggregate(id);
    };
    ListViewAggregateFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ListViewAggregateFactory.ctorParameters = function () { return []; };
    return ListViewAggregateFactory;
}(AggregateFactory));
export { ListViewAggregateFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmFnZ3JlZ2F0ZS1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9jb3JlL2RvbWFpbi9saXN0LXZpZXcuYWdncmVnYXRlLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRzFEO0lBQzhDLG9EQUErQztJQUU1RjtlQUNDLGlCQUFPO0lBQ1IsQ0FBQzs7Ozs7SUFFRCx5Q0FBTTs7OztJQUFOLFVBQU8sRUFBYztRQUNwQixPQUFPLElBQUksaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Z0JBVEQsVUFBVTs7OztJQVVYLCtCQUFDO0NBQUEsQUFWRCxDQUM4QyxnQkFBZ0IsR0FTN0Q7U0FUWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld0lkIH0gZnJvbSAnLi4vYXBpL2xpc3Qtdmlldy5pZCc7XG5pbXBvcnQgeyBMaXN0Vmlld0FnZ3JlZ2F0ZSB9IGZyb20gJy4vbGlzdC12aWV3LmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3QWdncmVnYXRlRmFjdG9yeSBleHRlbmRzIEFnZ3JlZ2F0ZUZhY3Rvcnk8TGlzdFZpZXdJZCwgTGlzdFZpZXdBZ2dyZWdhdGU+IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Y3JlYXRlKGlkOiBMaXN0Vmlld0lkKTogTGlzdFZpZXdBZ2dyZWdhdGUge1xuXHRcdHJldHVybiBuZXcgTGlzdFZpZXdBZ2dyZWdhdGUoaWQpO1xuXHR9XG59XG4iXX0=