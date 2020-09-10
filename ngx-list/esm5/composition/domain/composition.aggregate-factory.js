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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uYWdncmVnYXRlLWZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2RvbWFpbi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUtZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHdEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFHckU7SUFDaUQsdURBQXFEO0lBRXJHLHFDQUE2QixhQUFrQztRQUEvRCxZQUNDLGlCQUFPLFNBQ1A7UUFGNEIsbUJBQWEsR0FBYixhQUFhLENBQXFCOztJQUUvRCxDQUFDOzs7OztJQUVELDRDQUFNOzs7O0lBQU4sVUFBTyxFQUFpQjtRQUN2QixPQUFPLElBQUksb0JBQW9CLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN6RCxDQUFDOztnQkFURCxVQUFVOzs7O2dCQUhGLG1CQUFtQjs7SUFhNUIsa0NBQUM7Q0FBQSxBQVZELENBQ2lELGdCQUFnQixHQVNoRTtTQVRZLDJCQUEyQjs7Ozs7O0lBRTNCLG9EQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlIH0gZnJvbSAnLi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgQ29sdW1uRW50aXR5RmFjdG9yeSB9IGZyb20gJy4vY29sdW1uL2NvbHVtbi1lbnRpdHkuZmFjdG9yeSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uQWdncmVnYXRlRmFjdG9yeSBleHRlbmRzIEFnZ3JlZ2F0ZUZhY3Rvcnk8Q29tcG9zaXRpb25JZCwgQ29tcG9zaXRpb25BZ2dyZWdhdGU+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbHVtbkZhY3Rvcnk6IENvbHVtbkVudGl0eUZhY3RvcnkpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Y3JlYXRlKGlkOiBDb21wb3NpdGlvbklkKTogQ29tcG9zaXRpb25BZ2dyZWdhdGUge1xuXHRcdHJldHVybiBuZXcgQ29tcG9zaXRpb25BZ2dyZWdhdGUoaWQsIHRoaXMuY29sdW1uRmFjdG9yeSk7XG5cdH1cbn1cbiJdfQ==