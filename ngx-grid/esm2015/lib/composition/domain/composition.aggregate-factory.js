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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uYWdncmVnYXRlLWZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29tcG9zaXRpb24uYWdncmVnYXRlLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHdEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFJckUsTUFBTSxPQUFPLDJCQUE0QixTQUFRLGdCQUFxRDs7OztJQUVyRyxZQUE2QixhQUFrQztRQUM5RCxLQUFLLEVBQUUsQ0FBQztRQURvQixrQkFBYSxHQUFiLGFBQWEsQ0FBcUI7SUFFL0QsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsRUFBaUI7UUFDdkIsT0FBTyxJQUFJLG9CQUFvQixDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7O1lBVEQsVUFBVTs7OztZQUhGLG1CQUFtQjs7Ozs7OztJQU1mLG9EQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlIH0gZnJvbSAnLi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgQ29sdW1uRW50aXR5RmFjdG9yeSB9IGZyb20gJy4vY29sdW1uL2NvbHVtbi1lbnRpdHkuZmFjdG9yeSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uQWdncmVnYXRlRmFjdG9yeSBleHRlbmRzIEFnZ3JlZ2F0ZUZhY3Rvcnk8Q29tcG9zaXRpb25JZCwgQ29tcG9zaXRpb25BZ2dyZWdhdGU+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbHVtbkZhY3Rvcnk6IENvbHVtbkVudGl0eUZhY3RvcnkpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Y3JlYXRlKGlkOiBDb21wb3NpdGlvbklkKTogQ29tcG9zaXRpb25BZ2dyZWdhdGUge1xuXHRcdHJldHVybiBuZXcgQ29tcG9zaXRpb25BZ2dyZWdhdGUoaWQsIHRoaXMuY29sdW1uRmFjdG9yeSk7XG5cdH1cbn1cbiJdfQ==