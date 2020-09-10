/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AggregateFactory } from '@generic-ui/hermes';
import { CompositionAggregate } from './composition.aggregate';
import { ColumnEntityFactory } from './column/column-entity.factory';
export class CompositionAggregateFactory extends AggregateFactory {
    /**
     * @param {?} columnFactory
     */
    constructor(columnFactory) {
        super();
        this.columnFactory = columnFactory;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    create(id) {
        return new CompositionAggregate(id, this.columnFactory);
    }
}
CompositionAggregateFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionAggregateFactory.ctorParameters = () => [
    { type: ColumnEntityFactory }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionAggregateFactory.prototype.columnFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uYWdncmVnYXRlLWZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2RvbWFpbi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUtZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUd0RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUlyRSxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsZ0JBQXFEOzs7O0lBRXJHLFlBQTZCLGFBQWtDO1FBQzlELEtBQUssRUFBRSxDQUFDO1FBRG9CLGtCQUFhLEdBQWIsYUFBYSxDQUFxQjtJQUUvRCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxFQUFpQjtRQUN2QixPQUFPLElBQUksb0JBQW9CLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7WUFURCxVQUFVOzs7O1lBSEYsbUJBQW1COzs7Ozs7O0lBTWYsb0RBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4vY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGUgfSBmcm9tICcuL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBDb2x1bW5FbnRpdHlGYWN0b3J5IH0gZnJvbSAnLi9jb2x1bW4vY29sdW1uLWVudGl0eS5mYWN0b3J5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25BZ2dyZWdhdGVGYWN0b3J5IGV4dGVuZHMgQWdncmVnYXRlRmFjdG9yeTxDb21wb3NpdGlvbklkLCBDb21wb3NpdGlvbkFnZ3JlZ2F0ZT4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29sdW1uRmFjdG9yeTogQ29sdW1uRW50aXR5RmFjdG9yeSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRjcmVhdGUoaWQ6IENvbXBvc2l0aW9uSWQpOiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSB7XG5cdFx0cmV0dXJuIG5ldyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZShpZCwgdGhpcy5jb2x1bW5GYWN0b3J5KTtcblx0fVxufVxuIl19