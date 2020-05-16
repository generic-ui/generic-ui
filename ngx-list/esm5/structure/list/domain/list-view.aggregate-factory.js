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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmFnZ3JlZ2F0ZS1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9kb21haW4vbGlzdC12aWV3LmFnZ3JlZ2F0ZS1mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUd0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUkxRDtJQUM4QyxvREFBK0M7SUFFNUY7ZUFDQyxpQkFBTztJQUNSLENBQUM7Ozs7O0lBRUQseUNBQU07Ozs7SUFBTixVQUFPLEVBQWM7UUFDcEIsT0FBTyxJQUFJLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7O2dCQVRELFVBQVU7Ozs7SUFVWCwrQkFBQztDQUFBLEFBVkQsQ0FDOEMsZ0JBQWdCLEdBUzdEO1NBVFksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgTGlzdFZpZXdJZCB9IGZyb20gJy4vbGlzdC12aWV3LmlkJztcbmltcG9ydCB7IExpc3RWaWV3QWdncmVnYXRlIH0gZnJvbSAnLi9saXN0LXZpZXcuYWdncmVnYXRlJztcblxuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0FnZ3JlZ2F0ZUZhY3RvcnkgZXh0ZW5kcyBBZ2dyZWdhdGVGYWN0b3J5PExpc3RWaWV3SWQsIExpc3RWaWV3QWdncmVnYXRlPiB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGNyZWF0ZShpZDogTGlzdFZpZXdJZCk6IExpc3RWaWV3QWdncmVnYXRlIHtcblx0XHRyZXR1cm4gbmV3IExpc3RWaWV3QWdncmVnYXRlKGlkKTtcblx0fVxufVxuIl19