/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AggregateFactory } from '@generic-ui/hermes';
import { CompositionAggregate } from './composition.aggregate';
import { ColumnEntityFactory } from './column/column-entity.factory';
var CompositionAggregateFactory = /** @class */ (function (_super) {
    tslib_1.__extends(CompositionAggregateFactory, _super);
    function CompositionAggregateFactory(columnFactory) {
        var _this = _super.call(this) || this;
        _this.columnFactory = columnFactory;
        return _this;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    CompositionAggregateFactory.prototype.create = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return new CompositionAggregate(id, this.columnFactory);
    };
    CompositionAggregateFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompositionAggregateFactory.ctorParameters = function () { return [
        { type: ColumnEntityFactory }
    ]; };
    return CompositionAggregateFactory;
}(AggregateFactory));
export { CompositionAggregateFactory };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionAggregateFactory.prototype.columnFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uYWdncmVnYXRlLWZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29tcG9zaXRpb24uYWdncmVnYXRlLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3RELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBR3JFO0lBQ2lELHVEQUFxRDtJQUVyRyxxQ0FBNkIsYUFBa0M7UUFBL0QsWUFDQyxpQkFBTyxTQUNQO1FBRjRCLG1CQUFhLEdBQWIsYUFBYSxDQUFxQjs7SUFFL0QsQ0FBQzs7Ozs7SUFFRCw0Q0FBTTs7OztJQUFOLFVBQU8sRUFBaUI7UUFDdkIsT0FBTyxJQUFJLG9CQUFvQixDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Z0JBVEQsVUFBVTs7OztnQkFIRixtQkFBbUI7O0lBYTVCLGtDQUFDO0NBQUEsQUFWRCxDQUNpRCxnQkFBZ0IsR0FTaEU7U0FUWSwyQkFBMkI7Ozs7OztJQUUzQixvREFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSB9IGZyb20gJy4vY29tcG9zaXRpb24uYWdncmVnYXRlJztcbmltcG9ydCB7IENvbHVtbkVudGl0eUZhY3RvcnkgfSBmcm9tICcuL2NvbHVtbi9jb2x1bW4tZW50aXR5LmZhY3RvcnknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZUZhY3RvcnkgZXh0ZW5kcyBBZ2dyZWdhdGVGYWN0b3J5PENvbXBvc2l0aW9uSWQsIENvbXBvc2l0aW9uQWdncmVnYXRlPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb2x1bW5GYWN0b3J5OiBDb2x1bW5FbnRpdHlGYWN0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGNyZWF0ZShpZDogQ29tcG9zaXRpb25JZCk6IENvbXBvc2l0aW9uQWdncmVnYXRlIHtcblx0XHRyZXR1cm4gbmV3IENvbXBvc2l0aW9uQWdncmVnYXRlKGlkLCB0aGlzLmNvbHVtbkZhY3RvcnkpO1xuXHR9XG59XG4iXX0=