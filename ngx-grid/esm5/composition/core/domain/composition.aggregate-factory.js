/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AggregateFactory } from '@generic-ui/hermes';
import { CompositionAggregate } from './composition.aggregate';
import { ColumnEntityFactory } from './column/column-entity.factory';
import { CompositionGroupFactory } from './group/composition.group.factory';
var CompositionAggregateFactory = /** @class */ (function (_super) {
    tslib_1.__extends(CompositionAggregateFactory, _super);
    function CompositionAggregateFactory(columnFactory, groupFactory) {
        var _this = _super.call(this) || this;
        _this.columnFactory = columnFactory;
        _this.groupFactory = groupFactory;
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
        return new CompositionAggregate(id, this.columnFactory, this.groupFactory);
    };
    CompositionAggregateFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompositionAggregateFactory.ctorParameters = function () { return [
        { type: ColumnEntityFactory },
        { type: CompositionGroupFactory }
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
    /**
     * @type {?}
     * @private
     */
    CompositionAggregateFactory.prototype.groupFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uYWdncmVnYXRlLWZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUd0RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUc1RTtJQUNpRCx1REFBcUQ7SUFFckcscUNBQTZCLGFBQWtDLEVBQzNDLFlBQXFDO1FBRHpELFlBRUMsaUJBQU8sU0FDUDtRQUg0QixtQkFBYSxHQUFiLGFBQWEsQ0FBcUI7UUFDM0Msa0JBQVksR0FBWixZQUFZLENBQXlCOztJQUV6RCxDQUFDOzs7OztJQUVELDRDQUFNOzs7O0lBQU4sVUFBTyxFQUFpQjtRQUN2QixPQUFPLElBQUksb0JBQW9CLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVFLENBQUM7O2dCQVZELFVBQVU7Ozs7Z0JBSkYsbUJBQW1CO2dCQUNuQix1QkFBdUI7O0lBY2hDLGtDQUFDO0NBQUEsQUFYRCxDQUNpRCxnQkFBZ0IsR0FVaEU7U0FWWSwyQkFBMkI7Ozs7OztJQUUzQixvREFBbUQ7Ozs7O0lBQzVELG1EQUFzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlIH0gZnJvbSAnLi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgQ29sdW1uRW50aXR5RmFjdG9yeSB9IGZyb20gJy4vY29sdW1uL2NvbHVtbi1lbnRpdHkuZmFjdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkdyb3VwRmFjdG9yeSB9IGZyb20gJy4vZ3JvdXAvY29tcG9zaXRpb24uZ3JvdXAuZmFjdG9yeSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uQWdncmVnYXRlRmFjdG9yeSBleHRlbmRzIEFnZ3JlZ2F0ZUZhY3Rvcnk8Q29tcG9zaXRpb25JZCwgQ29tcG9zaXRpb25BZ2dyZWdhdGU+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbHVtbkZhY3Rvcnk6IENvbHVtbkVudGl0eUZhY3RvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZ3JvdXBGYWN0b3J5OiBDb21wb3NpdGlvbkdyb3VwRmFjdG9yeSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRjcmVhdGUoaWQ6IENvbXBvc2l0aW9uSWQpOiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSB7XG5cdFx0cmV0dXJuIG5ldyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZShpZCwgdGhpcy5jb2x1bW5GYWN0b3J5LCB0aGlzLmdyb3VwRmFjdG9yeSk7XG5cdH1cbn1cbiJdfQ==