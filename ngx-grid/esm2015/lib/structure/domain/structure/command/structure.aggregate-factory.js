/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { PagingAggregateFactory } from '../../paging/command/paging.aggregate-factory';
import { SourceManagerFactory } from '../../source/command/source.manager-factory';
import { VerticalFormationFactory } from './vertical-formation/vertical-formation.factory';
import { AggregationManagerFactory } from './aggregation/aggregation.manager.factory';
import { FilterCollectionFactory } from './filter/filter.collection-factory';
import { FieldCollectionFactory } from './field/field-collection.factory';
import { StructureAggregate } from './structure.aggregate';
import { SorterCollection } from './sort/sorter.collection';
import { SchemaAggregateFactory } from '../../schema/command/schema.aggregate-factory';
import { FormationAggregateFactory } from '../../formation/command/formation.aggregate-factory';
export class StructureAggregateFactory {
    /**
     * @param {?} pagingAggregateFactory
     * @param {?} sourceManagerFactory
     * @param {?} formationAggregateFactory
     * @param {?} verticalFormationFactory
     * @param {?} aggregationManagerFactory
     * @param {?} filterCollectionFactory
     * @param {?} fieldCollectionFactory
     * @param {?} schemaAggregateFactory
     */
    constructor(pagingAggregateFactory, sourceManagerFactory, formationAggregateFactory, verticalFormationFactory, aggregationManagerFactory, filterCollectionFactory, fieldCollectionFactory, schemaAggregateFactory) {
        this.pagingAggregateFactory = pagingAggregateFactory;
        this.sourceManagerFactory = sourceManagerFactory;
        this.formationAggregateFactory = formationAggregateFactory;
        this.verticalFormationFactory = verticalFormationFactory;
        this.aggregationManagerFactory = aggregationManagerFactory;
        this.filterCollectionFactory = filterCollectionFactory;
        this.fieldCollectionFactory = fieldCollectionFactory;
        this.schemaAggregateFactory = schemaAggregateFactory;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    create(structureId) {
        /** @type {?} */
        const paging = this.pagingAggregateFactory.createDefault();
        /** @type {?} */
        const source = this.sourceManagerFactory.createDefault();
        /** @type {?} */
        const verticalFormation = this.verticalFormationFactory.create();
        /** @type {?} */
        const formationAggregate = this.formationAggregateFactory.create();
        /** @type {?} */
        const sorterContainer = new SorterCollection();
        /** @type {?} */
        const filterContainer = this.filterCollectionFactory.create(false);
        /** @type {?} */
        const fieldContainer = this.fieldCollectionFactory.create();
        /** @type {?} */
        const aggregationManager = this.aggregationManagerFactory.create(structureId);
        /** @type {?} */
        const schema = this.schemaAggregateFactory.create();
        return new StructureAggregate(structureId, paging, formationAggregate, source, verticalFormation, aggregationManager, sorterContainer, filterContainer, fieldContainer, schema);
    }
}
StructureAggregateFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureAggregateFactory.ctorParameters = () => [
    { type: PagingAggregateFactory },
    { type: SourceManagerFactory },
    { type: FormationAggregateFactory },
    { type: VerticalFormationFactory },
    { type: AggregationManagerFactory },
    { type: FilterCollectionFactory },
    { type: FieldCollectionFactory },
    { type: SchemaAggregateFactory }
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
    StructureAggregateFactory.prototype.sourceManagerFactory;
    /**
     * @type {?}
     * @private
     */
    StructureAggregateFactory.prototype.formationAggregateFactory;
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
    StructureAggregateFactory.prototype.filterCollectionFactory;
    /**
     * @type {?}
     * @private
     */
    StructureAggregateFactory.prototype.fieldCollectionFactory;
    /**
     * @type {?}
     * @private
     */
    StructureAggregateFactory.prototype.schemaAggregateFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0ZS1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9zdHJ1Y3R1cmUuYWdncmVnYXRlLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdkYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDM0YsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDN0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFMUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdkYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFJaEcsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7Ozs7Ozs7SUFFckMsWUFBNkIsc0JBQThDLEVBQ3ZELG9CQUEwQyxFQUMxQyx5QkFBb0QsRUFDcEQsd0JBQWtELEVBQ2xELHlCQUFvRCxFQUNwRCx1QkFBZ0QsRUFDaEQsc0JBQThDLEVBQzlDLHNCQUE4QztRQVByQywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQ3ZELHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQUNwRCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFDcEQsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7SUFDbEUsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsV0FBd0I7O2NBRXhCLE1BQU0sR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsYUFBYSxFQUFFOztjQUN6RCxNQUFNLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsRUFBRTs7Y0FDbEQsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sRUFBRTs7Y0FDMUQsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sRUFBRTs7Y0FFdkQsZUFBZSxHQUFxQixJQUFJLGdCQUFnQixFQUFFOztjQUMvRCxlQUFlLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7O2NBQzVELGNBQWMsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxFQUFFOztjQUNyRCxrQkFBa0IsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQzs7Y0FDdkUsTUFBTSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLEVBQUU7UUFFOUMsT0FBTyxJQUFJLGtCQUFrQixDQUFDLFdBQVcsRUFDeEMsTUFBTSxFQUNOLGtCQUFrQixFQUNsQixNQUFNLEVBQ04saUJBQWlCLEVBQ2pCLGtCQUFrQixFQUNsQixlQUFlLEVBQ2YsZUFBZSxFQUNmLGNBQWMsRUFDZCxNQUFNLENBQ04sQ0FBQztJQUNILENBQUM7OztZQXJDRCxVQUFVOzs7O1lBYkYsc0JBQXNCO1lBQ3RCLG9CQUFvQjtZQVNwQix5QkFBeUI7WUFSekIsd0JBQXdCO1lBQ3hCLHlCQUF5QjtZQUN6Qix1QkFBdUI7WUFDdkIsc0JBQXNCO1lBSXRCLHNCQUFzQjs7Ozs7OztJQU9sQiwyREFBK0Q7Ozs7O0lBQ3hFLHlEQUEyRDs7Ozs7SUFDM0QsOERBQXFFOzs7OztJQUNyRSw2REFBbUU7Ozs7O0lBQ25FLDhEQUFxRTs7Ozs7SUFDckUsNERBQWlFOzs7OztJQUNqRSwyREFBK0Q7Ozs7O0lBQy9ELDJEQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGFnaW5nQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJy4uLy4uL3BhZ2luZy9jb21tYW5kL3BhZ2luZy5hZ2dyZWdhdGUtZmFjdG9yeSc7XG5pbXBvcnQgeyBTb3VyY2VNYW5hZ2VyRmFjdG9yeSB9IGZyb20gJy4uLy4uL3NvdXJjZS9jb21tYW5kL3NvdXJjZS5tYW5hZ2VyLWZhY3RvcnknO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25GYWN0b3J5IH0gZnJvbSAnLi92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uLmZhY3RvcnknO1xuaW1wb3J0IHsgQWdncmVnYXRpb25NYW5hZ2VyRmFjdG9yeSB9IGZyb20gJy4vYWdncmVnYXRpb24vYWdncmVnYXRpb24ubWFuYWdlci5mYWN0b3J5JztcbmltcG9ydCB7IEZpbHRlckNvbGxlY3Rpb25GYWN0b3J5IH0gZnJvbSAnLi9maWx0ZXIvZmlsdGVyLmNvbGxlY3Rpb24tZmFjdG9yeSc7XG5pbXBvcnQgeyBGaWVsZENvbGxlY3Rpb25GYWN0b3J5IH0gZnJvbSAnLi9maWVsZC9maWVsZC1jb2xsZWN0aW9uLmZhY3RvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcbmltcG9ydCB7IFNvcnRlckNvbGxlY3Rpb24gfSBmcm9tICcuL3NvcnQvc29ydGVyLmNvbGxlY3Rpb24nO1xuaW1wb3J0IHsgU2NoZW1hQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJy4uLy4uL3NjaGVtYS9jb21tYW5kL3NjaGVtYS5hZ2dyZWdhdGUtZmFjdG9yeSc7XG5pbXBvcnQgeyBGb3JtYXRpb25BZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnLi4vLi4vZm9ybWF0aW9uL2NvbW1hbmQvZm9ybWF0aW9uLmFnZ3JlZ2F0ZS1mYWN0b3J5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQWdncmVnYXRlRmFjdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBwYWdpbmdBZ2dyZWdhdGVGYWN0b3J5OiBQYWdpbmdBZ2dyZWdhdGVGYWN0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZU1hbmFnZXJGYWN0b3J5OiBTb3VyY2VNYW5hZ2VyRmFjdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25BZ2dyZWdhdGVGYWN0b3J5OiBGb3JtYXRpb25BZ2dyZWdhdGVGYWN0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsRm9ybWF0aW9uRmFjdG9yeTogVmVydGljYWxGb3JtYXRpb25GYWN0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFnZ3JlZ2F0aW9uTWFuYWdlckZhY3Rvcnk6IEFnZ3JlZ2F0aW9uTWFuYWdlckZhY3RvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyQ29sbGVjdGlvbkZhY3Rvcnk6IEZpbHRlckNvbGxlY3Rpb25GYWN0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkQ29sbGVjdGlvbkZhY3Rvcnk6IEZpZWxkQ29sbGVjdGlvbkZhY3RvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hQWdncmVnYXRlRmFjdG9yeTogU2NoZW1hQWdncmVnYXRlRmFjdG9yeSkge1xuXHR9XG5cblx0Y3JlYXRlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB7XG5cblx0XHRjb25zdCBwYWdpbmcgPSB0aGlzLnBhZ2luZ0FnZ3JlZ2F0ZUZhY3RvcnkuY3JlYXRlRGVmYXVsdCgpLFxuXHRcdFx0c291cmNlID0gdGhpcy5zb3VyY2VNYW5hZ2VyRmFjdG9yeS5jcmVhdGVEZWZhdWx0KCksXG5cdFx0XHR2ZXJ0aWNhbEZvcm1hdGlvbiA9IHRoaXMudmVydGljYWxGb3JtYXRpb25GYWN0b3J5LmNyZWF0ZSgpLFxuXHRcdFx0Zm9ybWF0aW9uQWdncmVnYXRlID0gdGhpcy5mb3JtYXRpb25BZ2dyZWdhdGVGYWN0b3J5LmNyZWF0ZSgpO1xuXG5cdFx0Y29uc3Qgc29ydGVyQ29udGFpbmVyOiBTb3J0ZXJDb2xsZWN0aW9uID0gbmV3IFNvcnRlckNvbGxlY3Rpb24oKSxcblx0XHRcdGZpbHRlckNvbnRhaW5lciA9IHRoaXMuZmlsdGVyQ29sbGVjdGlvbkZhY3RvcnkuY3JlYXRlKGZhbHNlKSxcblx0XHRcdGZpZWxkQ29udGFpbmVyID0gdGhpcy5maWVsZENvbGxlY3Rpb25GYWN0b3J5LmNyZWF0ZSgpLFxuXHRcdFx0YWdncmVnYXRpb25NYW5hZ2VyID0gdGhpcy5hZ2dyZWdhdGlvbk1hbmFnZXJGYWN0b3J5LmNyZWF0ZShzdHJ1Y3R1cmVJZCksXG5cdFx0XHRzY2hlbWEgPSB0aGlzLnNjaGVtYUFnZ3JlZ2F0ZUZhY3RvcnkuY3JlYXRlKCk7XG5cblx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZUFnZ3JlZ2F0ZShzdHJ1Y3R1cmVJZCxcblx0XHRcdHBhZ2luZyxcblx0XHRcdGZvcm1hdGlvbkFnZ3JlZ2F0ZSxcblx0XHRcdHNvdXJjZSxcblx0XHRcdHZlcnRpY2FsRm9ybWF0aW9uLFxuXHRcdFx0YWdncmVnYXRpb25NYW5hZ2VyLFxuXHRcdFx0c29ydGVyQ29udGFpbmVyLFxuXHRcdFx0ZmlsdGVyQ29udGFpbmVyLFxuXHRcdFx0ZmllbGRDb250YWluZXIsXG5cdFx0XHRzY2hlbWFcblx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==