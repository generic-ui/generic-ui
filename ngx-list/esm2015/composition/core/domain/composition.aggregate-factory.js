/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AggregateFactory } from '@generic-ui/hermes';
import { CompositionAggregate } from './composition.aggregate';
import { ColumnEntityFactory } from './column/column-entity.factory';
import { CompositionGroupFactory } from './group/composition.group.factory';
export class CompositionAggregateFactory extends AggregateFactory {
    /**
     * @param {?} columnFactory
     * @param {?} groupFactory
     */
    constructor(columnFactory, groupFactory) {
        super();
        this.columnFactory = columnFactory;
        this.groupFactory = groupFactory;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    create(id) {
        return new CompositionAggregate(id, this.columnFactory, this.groupFactory);
    }
}
CompositionAggregateFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionAggregateFactory.ctorParameters = () => [
    { type: ColumnEntityFactory },
    { type: CompositionGroupFactory }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uYWdncmVnYXRlLWZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3RELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBSTVFLE1BQU0sT0FBTywyQkFBNEIsU0FBUSxnQkFBcUQ7Ozs7O0lBRXJHLFlBQTZCLGFBQWtDLEVBQzNDLFlBQXFDO1FBQ3hELEtBQUssRUFBRSxDQUFDO1FBRm9CLGtCQUFhLEdBQWIsYUFBYSxDQUFxQjtRQUMzQyxpQkFBWSxHQUFaLFlBQVksQ0FBeUI7SUFFekQsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsRUFBaUI7UUFDdkIsT0FBTyxJQUFJLG9CQUFvQixDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1RSxDQUFDOzs7WUFWRCxVQUFVOzs7O1lBSkYsbUJBQW1CO1lBQ25CLHVCQUF1Qjs7Ozs7OztJQU1uQixvREFBbUQ7Ozs7O0lBQzVELG1EQUFzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi9hcGkvY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGUgfSBmcm9tICcuL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBDb2x1bW5FbnRpdHlGYWN0b3J5IH0gZnJvbSAnLi9jb2x1bW4vY29sdW1uLWVudGl0eS5mYWN0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uR3JvdXBGYWN0b3J5IH0gZnJvbSAnLi9ncm91cC9jb21wb3NpdGlvbi5ncm91cC5mYWN0b3J5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25BZ2dyZWdhdGVGYWN0b3J5IGV4dGVuZHMgQWdncmVnYXRlRmFjdG9yeTxDb21wb3NpdGlvbklkLCBDb21wb3NpdGlvbkFnZ3JlZ2F0ZT4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29sdW1uRmFjdG9yeTogQ29sdW1uRW50aXR5RmFjdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBncm91cEZhY3Rvcnk6IENvbXBvc2l0aW9uR3JvdXBGYWN0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGNyZWF0ZShpZDogQ29tcG9zaXRpb25JZCk6IENvbXBvc2l0aW9uQWdncmVnYXRlIHtcblx0XHRyZXR1cm4gbmV3IENvbXBvc2l0aW9uQWdncmVnYXRlKGlkLCB0aGlzLmNvbHVtbkZhY3RvcnksIHRoaXMuZ3JvdXBGYWN0b3J5KTtcblx0fVxufVxuIl19