/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { PagingAggregateFactory } from '../../paging/command/paging.aggregate-factory';
import { SourceCoordinatorFactory } from '../../source/command/source-coordinator.factory';
import { VerticalFormationFactory } from './vertical-formation/vertical-formation.factory';
import { AggregationManagerFactory } from './aggregation/aggregation.manager.factory';
import { FilterContainerFactory } from './filter/filter.container-factory';
import { FieldContainerFactory } from './field/field-container.factory';
import { StructureAggregate } from './structure.aggregate';
import { SorterContainer } from './sort/sorter.container';
export class StructureAggregateFactory {
    /**
     * @param {?} pagingAggregateFactory
     * @param {?} sourceCoordinatorFactory
     * @param {?} verticalFormationFactory
     * @param {?} aggregationManagerFactory
     * @param {?} filterContainerFactory
     * @param {?} fieldContainerFactory
     */
    constructor(pagingAggregateFactory, sourceCoordinatorFactory, verticalFormationFactory, aggregationManagerFactory, filterContainerFactory, fieldContainerFactory) {
        this.pagingAggregateFactory = pagingAggregateFactory;
        this.sourceCoordinatorFactory = sourceCoordinatorFactory;
        this.verticalFormationFactory = verticalFormationFactory;
        this.aggregationManagerFactory = aggregationManagerFactory;
        this.filterContainerFactory = filterContainerFactory;
        this.fieldContainerFactory = fieldContainerFactory;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    create(structureId) {
        /** @type {?} */
        const paging = this.pagingAggregateFactory.createDefault();
        /** @type {?} */
        const source = this.sourceCoordinatorFactory.createDefault();
        /** @type {?} */
        const verticalFormation = this.verticalFormationFactory.create();
        /** @type {?} */
        const sorterContainer = new SorterContainer();
        /** @type {?} */
        const filterContainer = this.filterContainerFactory.create(false);
        /** @type {?} */
        const fieldContainer = this.fieldContainerFactory.create();
        /** @type {?} */
        const aggregationManager = this.aggregationManagerFactory.create(structureId);
        return new StructureAggregate(structureId, paging, source, verticalFormation, aggregationManager, sorterContainer, filterContainer, fieldContainer);
    }
}
StructureAggregateFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureAggregateFactory.ctorParameters = () => [
    { type: PagingAggregateFactory },
    { type: SourceCoordinatorFactory },
    { type: VerticalFormationFactory },
    { type: AggregationManagerFactory },
    { type: FilterContainerFactory },
    { type: FieldContainerFactory }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureAggregateFactory.prototype.pagingAggregateFactory;
    /**
     * @type {?}
     * @private
     */
    StructureAggregateFactory.prototype.sourceCoordinatorFactory;
    /**
     * @type {?}
     * @private
     */
    StructureAggregateFactory.prototype.verticalFormationFactory;
    /**
     * @type {?}
     * @private
     */
    StructureAggregateFactory.prototype.aggregationManagerFactory;
    /**
     * @type {?}
     * @private
     */
    StructureAggregateFactory.prototype.filterContainerFactory;
    /**
     * @type {?}
     * @private
     */
    StructureAggregateFactory.prototype.fieldContainerFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0ZS1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9zdHJ1Y3R1cmUuYWdncmVnYXRlLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdkYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDM0YsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDM0YsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDM0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFeEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBSzFELE1BQU0sT0FBTyx5QkFBeUI7Ozs7Ozs7OztJQUVyQyxZQUE2QixzQkFBOEMsRUFDdkQsd0JBQWtELEVBQ2xELHdCQUFrRCxFQUNsRCx5QkFBb0QsRUFDcEQsc0JBQThDLEVBQzlDLHFCQUE0QztRQUxuQywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQ3ZELDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBQ3BELDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDOUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUNoRSxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxXQUF3Qjs7Y0FFeEIsTUFBTSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLEVBQUU7O2NBQ3pELE1BQU0sR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsYUFBYSxFQUFFOztjQUN0RCxpQkFBaUIsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxFQUFFOztjQUVyRCxlQUFlLEdBQW9CLElBQUksZUFBZSxFQUFFOztjQUM3RCxlQUFlLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7O2NBQzNELGNBQWMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxFQUFFOztjQUNwRCxrQkFBa0IsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUV4RSxPQUFPLElBQUksa0JBQWtCLENBQUMsV0FBVyxFQUN4QyxNQUFNLEVBQ04sTUFBTSxFQUNOLGlCQUFpQixFQUNqQixrQkFBa0IsRUFDbEIsZUFBZSxFQUNmLGVBQWUsRUFDZixjQUFjLENBQ2QsQ0FBQztJQUNILENBQUM7OztZQS9CRCxVQUFVOzs7O1lBWkYsc0JBQXNCO1lBQ3RCLHdCQUF3QjtZQUN4Qix3QkFBd0I7WUFDeEIseUJBQXlCO1lBQ3pCLHNCQUFzQjtZQUN0QixxQkFBcUI7Ozs7Ozs7SUFVakIsMkRBQStEOzs7OztJQUN4RSw2REFBbUU7Ozs7O0lBQ25FLDZEQUFtRTs7Ozs7SUFDbkUsOERBQXFFOzs7OztJQUNyRSwyREFBK0Q7Ozs7O0lBQy9ELDBEQUE2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGFnaW5nQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJy4uLy4uL3BhZ2luZy9jb21tYW5kL3BhZ2luZy5hZ2dyZWdhdGUtZmFjdG9yeSc7XG5pbXBvcnQgeyBTb3VyY2VDb29yZGluYXRvckZhY3RvcnkgfSBmcm9tICcuLi8uLi9zb3VyY2UvY29tbWFuZC9zb3VyY2UtY29vcmRpbmF0b3IuZmFjdG9yeSc7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbkZhY3RvcnkgfSBmcm9tICcuL3ZlcnRpY2FsLWZvcm1hdGlvbi92ZXJ0aWNhbC1mb3JtYXRpb24uZmFjdG9yeSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGlvbk1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi9hZ2dyZWdhdGlvbi9hZ2dyZWdhdGlvbi5tYW5hZ2VyLmZhY3RvcnknO1xuaW1wb3J0IHsgRmlsdGVyQ29udGFpbmVyRmFjdG9yeSB9IGZyb20gJy4vZmlsdGVyL2ZpbHRlci5jb250YWluZXItZmFjdG9yeSc7XG5pbXBvcnQgeyBGaWVsZENvbnRhaW5lckZhY3RvcnkgfSBmcm9tICcuL2ZpZWxkL2ZpZWxkLWNvbnRhaW5lci5mYWN0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBTb3J0ZXJDb250YWluZXIgfSBmcm9tICcuL3NvcnQvc29ydGVyLmNvbnRhaW5lcic7XG5cblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQWdncmVnYXRlRmFjdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBwYWdpbmdBZ2dyZWdhdGVGYWN0b3J5OiBQYWdpbmdBZ2dyZWdhdGVGYWN0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZUNvb3JkaW5hdG9yRmFjdG9yeTogU291cmNlQ29vcmRpbmF0b3JGYWN0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsRm9ybWF0aW9uRmFjdG9yeTogVmVydGljYWxGb3JtYXRpb25GYWN0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFnZ3JlZ2F0aW9uTWFuYWdlckZhY3Rvcnk6IEFnZ3JlZ2F0aW9uTWFuYWdlckZhY3RvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyQ29udGFpbmVyRmFjdG9yeTogRmlsdGVyQ29udGFpbmVyRmFjdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWVsZENvbnRhaW5lckZhY3Rvcnk6IEZpZWxkQ29udGFpbmVyRmFjdG9yeSkge1xuXHR9XG5cblx0Y3JlYXRlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB7XG5cblx0XHRjb25zdCBwYWdpbmcgPSB0aGlzLnBhZ2luZ0FnZ3JlZ2F0ZUZhY3RvcnkuY3JlYXRlRGVmYXVsdCgpLFxuXHRcdFx0c291cmNlID0gdGhpcy5zb3VyY2VDb29yZGluYXRvckZhY3RvcnkuY3JlYXRlRGVmYXVsdCgpLFxuXHRcdFx0dmVydGljYWxGb3JtYXRpb24gPSB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uRmFjdG9yeS5jcmVhdGUoKTtcblxuXHRcdGNvbnN0IHNvcnRlckNvbnRhaW5lcjogU29ydGVyQ29udGFpbmVyID0gbmV3IFNvcnRlckNvbnRhaW5lcigpLFxuXHRcdFx0ZmlsdGVyQ29udGFpbmVyID0gdGhpcy5maWx0ZXJDb250YWluZXJGYWN0b3J5LmNyZWF0ZShmYWxzZSksXG5cdFx0XHRmaWVsZENvbnRhaW5lciA9IHRoaXMuZmllbGRDb250YWluZXJGYWN0b3J5LmNyZWF0ZSgpLFxuXHRcdFx0YWdncmVnYXRpb25NYW5hZ2VyID0gdGhpcy5hZ2dyZWdhdGlvbk1hbmFnZXJGYWN0b3J5LmNyZWF0ZShzdHJ1Y3R1cmVJZCk7XG5cblx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZUFnZ3JlZ2F0ZShzdHJ1Y3R1cmVJZCxcblx0XHRcdHBhZ2luZyxcblx0XHRcdHNvdXJjZSxcblx0XHRcdHZlcnRpY2FsRm9ybWF0aW9uLFxuXHRcdFx0YWdncmVnYXRpb25NYW5hZ2VyLFxuXHRcdFx0c29ydGVyQ29udGFpbmVyLFxuXHRcdFx0ZmlsdGVyQ29udGFpbmVyLFxuXHRcdFx0ZmllbGRDb250YWluZXJcblx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==