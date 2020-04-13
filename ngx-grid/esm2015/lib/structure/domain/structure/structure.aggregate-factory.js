/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AggregateFactory } from '@generic-ui/hermes';
import { PagingManagerFactory } from '../paging/paging.manager-factory';
import { SourceManagerFactory } from '../source/source.manager-factory';
import { VerticalFormationFactory } from './vertical-formation/vertical-formation.factory';
import { SummariesManagerFactory } from './summaries/summaries.manager.factory';
import { FilterManagerFactory } from './filter/filter.manager-factory';
import { FieldCollectionFactory } from './field/field-collection.factory';
import { StructureAggregate } from './structure.aggregate';
import { SorterCollection } from './sort/sorter.collection';
import { FormationAggregateFactory } from '../formation/formation.aggregate-factory';
import { SearchManagerFactory } from './search/search.manager-factory';
export class StructureAggregateFactory extends AggregateFactory {
    /**
     * @param {?} pagingAggregateFactory
     * @param {?} sourceManagerFactory
     * @param {?} formationAggregateFactory
     * @param {?} verticalFormationFactory
     * @param {?} summariesManagerFactory
     * @param {?} filterManagerFactory
     * @param {?} searchManagerFactory
     * @param {?} fieldCollectionFactory
     */
    constructor(pagingAggregateFactory, sourceManagerFactory, formationAggregateFactory, verticalFormationFactory, summariesManagerFactory, filterManagerFactory, searchManagerFactory, fieldCollectionFactory) {
        super();
        this.pagingAggregateFactory = pagingAggregateFactory;
        this.sourceManagerFactory = sourceManagerFactory;
        this.formationAggregateFactory = formationAggregateFactory;
        this.verticalFormationFactory = verticalFormationFactory;
        this.summariesManagerFactory = summariesManagerFactory;
        this.filterManagerFactory = filterManagerFactory;
        this.searchManagerFactory = searchManagerFactory;
        this.fieldCollectionFactory = fieldCollectionFactory;
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
        const filterContainer = this.filterManagerFactory.create(false);
        /** @type {?} */
        const fieldContainer = this.fieldCollectionFactory.create();
        /** @type {?} */
        const summariesManager = this.summariesManagerFactory.create(structureId);
        /** @type {?} */
        const searchManager = this.searchManagerFactory.create();
        /** @type {?} */
        const structureAggregate = new StructureAggregate(structureId, paging, formationAggregate, source, verticalFormation, summariesManager, sorterContainer, filterContainer, searchManager, fieldContainer);
        this.init(structureAggregate);
        return structureAggregate;
    }
    /**
     * @param {?} structureAggregate
     * @return {?}
     */
    init(structureAggregate) {
        structureAggregate.init();
    }
}
StructureAggregateFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureAggregateFactory.ctorParameters = () => [
    { type: PagingManagerFactory },
    { type: SourceManagerFactory },
    { type: FormationAggregateFactory },
    { type: VerticalFormationFactory },
    { type: SummariesManagerFactory },
    { type: FilterManagerFactory },
    { type: SearchManagerFactory },
    { type: FieldCollectionFactory }
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
    StructureAggregateFactory.prototype.summariesManagerFactory;
    /**
     * @type {?}
     * @private
     */
    StructureAggregateFactory.prototype.filterManagerFactory;
    /**
     * @type {?}
     * @private
     */
    StructureAggregateFactory.prototype.searchManagerFactory;
    /**
     * @type {?}
     * @private
     */
    StructureAggregateFactory.prototype.fieldCollectionFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0ZS1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvc3RydWN0dXJlLmFnZ3JlZ2F0ZS1mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXRELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRTFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBSXZFLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxnQkFBaUQ7Ozs7Ozs7Ozs7O0lBRS9GLFlBQTZCLHNCQUE0QyxFQUNyRCxvQkFBMEMsRUFDMUMseUJBQW9ELEVBQ3BELHdCQUFrRCxFQUNsRCx1QkFBZ0QsRUFDaEQsb0JBQTBDLEVBQzFDLG9CQUEwQyxFQUMxQyxzQkFBOEM7UUFDakUsS0FBSyxFQUFFLENBQUM7UUFSb0IsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUFzQjtRQUNyRCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFDcEQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO0lBRWxFLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFdBQXdCOztjQUV4QixNQUFNLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsRUFBRTs7Y0FDekQsTUFBTSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEVBQUU7O2NBQ2xELGlCQUFpQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLEVBQUU7O2NBQzFELGtCQUFrQixHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLEVBQUU7O2NBRXZELGVBQWUsR0FBcUIsSUFBSSxnQkFBZ0IsRUFBRTs7Y0FDL0QsZUFBZSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDOztjQUN6RCxjQUFjLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sRUFBRTs7Y0FDckQsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7O2NBQ25FLGFBQWEsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxFQUFFOztjQUU3QyxrQkFBa0IsR0FBRyxJQUFJLGtCQUFrQixDQUFDLFdBQVcsRUFDNUQsTUFBTSxFQUNOLGtCQUFrQixFQUNsQixNQUFNLEVBQ04saUJBQWlCLEVBQ2pCLGdCQUFnQixFQUNoQixlQUFlLEVBQ2YsZUFBZSxFQUNmLGFBQWEsRUFDYixjQUFjLENBQ2Q7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFOUIsT0FBTyxrQkFBa0IsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELElBQUksQ0FBQyxrQkFBc0M7UUFDMUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7O1lBOUNELFVBQVU7Ozs7WUFiRixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBUXBCLHlCQUF5QjtZQVB6Qix3QkFBd0I7WUFDeEIsdUJBQXVCO1lBQ3ZCLG9CQUFvQjtZQU1wQixvQkFBb0I7WUFMcEIsc0JBQXNCOzs7Ozs7O0lBV2xCLDJEQUE2RDs7Ozs7SUFDdEUseURBQTJEOzs7OztJQUMzRCw4REFBcUU7Ozs7O0lBQ3JFLDZEQUFtRTs7Ozs7SUFDbkUsNERBQWlFOzs7OztJQUNqRSx5REFBMkQ7Ozs7O0lBQzNELHlEQUEyRDs7Ozs7SUFDM0QsMkRBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgUGFnaW5nTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuLi9wYWdpbmcvcGFnaW5nLm1hbmFnZXItZmFjdG9yeSc7XG5pbXBvcnQgeyBTb3VyY2VNYW5hZ2VyRmFjdG9yeSB9IGZyb20gJy4uL3NvdXJjZS9zb3VyY2UubWFuYWdlci1mYWN0b3J5JztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uRmFjdG9yeSB9IGZyb20gJy4vdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbi5mYWN0b3J5JztcbmltcG9ydCB7IFN1bW1hcmllc01hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi9zdW1tYXJpZXMvc3VtbWFyaWVzLm1hbmFnZXIuZmFjdG9yeSc7XG5pbXBvcnQgeyBGaWx0ZXJNYW5hZ2VyRmFjdG9yeSB9IGZyb20gJy4vZmlsdGVyL2ZpbHRlci5tYW5hZ2VyLWZhY3RvcnknO1xuaW1wb3J0IHsgRmllbGRDb2xsZWN0aW9uRmFjdG9yeSB9IGZyb20gJy4vZmllbGQvZmllbGQtY29sbGVjdGlvbi5mYWN0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBTb3J0ZXJDb2xsZWN0aW9uIH0gZnJvbSAnLi9zb3J0L3NvcnRlci5jb2xsZWN0aW9uJztcbmltcG9ydCB7IEZvcm1hdGlvbkFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuLi9mb3JtYXRpb24vZm9ybWF0aW9uLmFnZ3JlZ2F0ZS1mYWN0b3J5JztcbmltcG9ydCB7IFNlYXJjaE1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi9zZWFyY2gvc2VhcmNoLm1hbmFnZXItZmFjdG9yeSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUFnZ3JlZ2F0ZUZhY3RvcnkgZXh0ZW5kcyBBZ2dyZWdhdGVGYWN0b3J5PFN0cnVjdHVyZUlkLCBTdHJ1Y3R1cmVBZ2dyZWdhdGU+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHBhZ2luZ0FnZ3JlZ2F0ZUZhY3Rvcnk6IFBhZ2luZ01hbmFnZXJGYWN0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZU1hbmFnZXJGYWN0b3J5OiBTb3VyY2VNYW5hZ2VyRmFjdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25BZ2dyZWdhdGVGYWN0b3J5OiBGb3JtYXRpb25BZ2dyZWdhdGVGYWN0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsRm9ybWF0aW9uRmFjdG9yeTogVmVydGljYWxGb3JtYXRpb25GYWN0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN1bW1hcmllc01hbmFnZXJGYWN0b3J5OiBTdW1tYXJpZXNNYW5hZ2VyRmFjdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJNYW5hZ2VyRmFjdG9yeTogRmlsdGVyTWFuYWdlckZhY3RvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoTWFuYWdlckZhY3Rvcnk6IFNlYXJjaE1hbmFnZXJGYWN0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkQ29sbGVjdGlvbkZhY3Rvcnk6IEZpZWxkQ29sbGVjdGlvbkZhY3RvcnkpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Y3JlYXRlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB7XG5cblx0XHRjb25zdCBwYWdpbmcgPSB0aGlzLnBhZ2luZ0FnZ3JlZ2F0ZUZhY3RvcnkuY3JlYXRlRGVmYXVsdCgpLFxuXHRcdFx0c291cmNlID0gdGhpcy5zb3VyY2VNYW5hZ2VyRmFjdG9yeS5jcmVhdGVEZWZhdWx0KCksXG5cdFx0XHR2ZXJ0aWNhbEZvcm1hdGlvbiA9IHRoaXMudmVydGljYWxGb3JtYXRpb25GYWN0b3J5LmNyZWF0ZSgpLFxuXHRcdFx0Zm9ybWF0aW9uQWdncmVnYXRlID0gdGhpcy5mb3JtYXRpb25BZ2dyZWdhdGVGYWN0b3J5LmNyZWF0ZSgpO1xuXG5cdFx0Y29uc3Qgc29ydGVyQ29udGFpbmVyOiBTb3J0ZXJDb2xsZWN0aW9uID0gbmV3IFNvcnRlckNvbGxlY3Rpb24oKSxcblx0XHRcdGZpbHRlckNvbnRhaW5lciA9IHRoaXMuZmlsdGVyTWFuYWdlckZhY3RvcnkuY3JlYXRlKGZhbHNlKSxcblx0XHRcdGZpZWxkQ29udGFpbmVyID0gdGhpcy5maWVsZENvbGxlY3Rpb25GYWN0b3J5LmNyZWF0ZSgpLFxuXHRcdFx0c3VtbWFyaWVzTWFuYWdlciA9IHRoaXMuc3VtbWFyaWVzTWFuYWdlckZhY3RvcnkuY3JlYXRlKHN0cnVjdHVyZUlkKSxcblx0XHRcdHNlYXJjaE1hbmFnZXIgPSB0aGlzLnNlYXJjaE1hbmFnZXJGYWN0b3J5LmNyZWF0ZSgpO1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlQWdncmVnYXRlID0gbmV3IFN0cnVjdHVyZUFnZ3JlZ2F0ZShzdHJ1Y3R1cmVJZCxcblx0XHRcdHBhZ2luZyxcblx0XHRcdGZvcm1hdGlvbkFnZ3JlZ2F0ZSxcblx0XHRcdHNvdXJjZSxcblx0XHRcdHZlcnRpY2FsRm9ybWF0aW9uLFxuXHRcdFx0c3VtbWFyaWVzTWFuYWdlcixcblx0XHRcdHNvcnRlckNvbnRhaW5lcixcblx0XHRcdGZpbHRlckNvbnRhaW5lcixcblx0XHRcdHNlYXJjaE1hbmFnZXIsXG5cdFx0XHRmaWVsZENvbnRhaW5lclxuXHRcdCk7XG5cblx0XHR0aGlzLmluaXQoc3RydWN0dXJlQWdncmVnYXRlKTtcblxuXHRcdHJldHVybiBzdHJ1Y3R1cmVBZ2dyZWdhdGU7XG5cdH1cblxuXHRpbml0KHN0cnVjdHVyZUFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlKTogdm9pZCB7XG5cdFx0c3RydWN0dXJlQWdncmVnYXRlLmluaXQoKTtcblx0fVxuXG59XG4iXX0=