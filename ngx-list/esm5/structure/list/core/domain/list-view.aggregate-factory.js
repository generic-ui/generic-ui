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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmFnZ3JlZ2F0ZS1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9jb3JlL2RvbWFpbi9saXN0LXZpZXcuYWdncmVnYXRlLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRzFEO0lBQzhDLG9EQUErQztJQUU1RjtlQUNDLGlCQUFPO0lBQ1IsQ0FBQzs7Ozs7SUFFRCx5Q0FBTTs7OztJQUFOLFVBQU8sRUFBYztRQUNwQixPQUFPLElBQUksaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Z0JBVEQsVUFBVTs7OztJQVVYLCtCQUFDO0NBQUEsQUFWRCxDQUM4QyxnQkFBZ0IsR0FTN0Q7U0FUWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld0lkIH0gZnJvbSAnLi9saXN0LXZpZXcuaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdBZ2dyZWdhdGUgfSBmcm9tICcuL2xpc3Qtdmlldy5hZ2dyZWdhdGUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0FnZ3JlZ2F0ZUZhY3RvcnkgZXh0ZW5kcyBBZ2dyZWdhdGVGYWN0b3J5PExpc3RWaWV3SWQsIExpc3RWaWV3QWdncmVnYXRlPiB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGNyZWF0ZShpZDogTGlzdFZpZXdJZCk6IExpc3RWaWV3QWdncmVnYXRlIHtcblx0XHRyZXR1cm4gbmV3IExpc3RWaWV3QWdncmVnYXRlKGlkKTtcblx0fVxufVxuIl19