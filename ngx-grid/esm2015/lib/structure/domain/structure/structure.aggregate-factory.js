/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AggregateFactory } from '@generic-ui/hermes';
import { PagingManagerFactory } from '../paging/paging.manager-factory';
import { SourceManagerFactory } from '../source/source.manager-factory';
import { VerticalFormationFactory } from './vertical-formation/vertical-formation.factory';
import { AggregationManagerFactory } from './aggregation/aggregation.manager.factory';
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
     * @param {?} aggregationManagerFactory
     * @param {?} filterManagerFactory
     * @param {?} searchManagerFactory
     * @param {?} fieldCollectionFactory
     */
    constructor(pagingAggregateFactory, sourceManagerFactory, formationAggregateFactory, verticalFormationFactory, aggregationManagerFactory, filterManagerFactory, searchManagerFactory, fieldCollectionFactory) {
        super();
        this.pagingAggregateFactory = pagingAggregateFactory;
        this.sourceManagerFactory = sourceManagerFactory;
        this.formationAggregateFactory = formationAggregateFactory;
        this.verticalFormationFactory = verticalFormationFactory;
        this.aggregationManagerFactory = aggregationManagerFactory;
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
        const aggregationManager = this.aggregationManagerFactory.create(structureId);
        /** @type {?} */
        const searchManager = this.searchManagerFactory.create();
        /** @type {?} */
        const structureAggregate = new StructureAggregate(structureId, paging, formationAggregate, source, verticalFormation, aggregationManager, sorterContainer, filterContainer, searchManager, fieldContainer);
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
    { type: AggregationManagerFactory },
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
    StructureAggregateFactory.prototype.aggregationManagerFactory;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0ZS1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvc3RydWN0dXJlLmFnZ3JlZ2F0ZS1mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXRELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRTFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBSXZFLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxnQkFBaUQ7Ozs7Ozs7Ozs7O0lBRS9GLFlBQTZCLHNCQUE0QyxFQUNyRCxvQkFBMEMsRUFDMUMseUJBQW9ELEVBQ3BELHdCQUFrRCxFQUNsRCx5QkFBb0QsRUFDcEQsb0JBQTBDLEVBQzFDLG9CQUEwQyxFQUMxQyxzQkFBOEM7UUFDakUsS0FBSyxFQUFFLENBQUM7UUFSb0IsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUFzQjtRQUNyRCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFDcEQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBQ3BELHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO0lBRWxFLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFdBQXdCOztjQUV4QixNQUFNLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsRUFBRTs7Y0FDekQsTUFBTSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEVBQUU7O2NBQ2xELGlCQUFpQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLEVBQUU7O2NBQzFELGtCQUFrQixHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLEVBQUU7O2NBRXZELGVBQWUsR0FBcUIsSUFBSSxnQkFBZ0IsRUFBRTs7Y0FDL0QsZUFBZSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDOztjQUN6RCxjQUFjLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sRUFBRTs7Y0FDckQsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7O2NBQ3ZFLGFBQWEsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxFQUFFOztjQUU3QyxrQkFBa0IsR0FBRyxJQUFJLGtCQUFrQixDQUFDLFdBQVcsRUFDNUQsTUFBTSxFQUNOLGtCQUFrQixFQUNsQixNQUFNLEVBQ04saUJBQWlCLEVBQ2pCLGtCQUFrQixFQUNsQixlQUFlLEVBQ2YsZUFBZSxFQUNmLGFBQWEsRUFDYixjQUFjLENBQ2Q7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFOUIsT0FBTyxrQkFBa0IsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELElBQUksQ0FBQyxrQkFBc0M7UUFDMUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7O1lBOUNELFVBQVU7Ozs7WUFiRixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBUXBCLHlCQUF5QjtZQVB6Qix3QkFBd0I7WUFDeEIseUJBQXlCO1lBQ3pCLG9CQUFvQjtZQU1wQixvQkFBb0I7WUFMcEIsc0JBQXNCOzs7Ozs7O0lBV2xCLDJEQUE2RDs7Ozs7SUFDdEUseURBQTJEOzs7OztJQUMzRCw4REFBcUU7Ozs7O0lBQ3JFLDZEQUFtRTs7Ozs7SUFDbkUsOERBQXFFOzs7OztJQUNyRSx5REFBMkQ7Ozs7O0lBQzNELHlEQUEyRDs7Ozs7SUFDM0QsMkRBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgUGFnaW5nTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuLi9wYWdpbmcvcGFnaW5nLm1hbmFnZXItZmFjdG9yeSc7XG5pbXBvcnQgeyBTb3VyY2VNYW5hZ2VyRmFjdG9yeSB9IGZyb20gJy4uL3NvdXJjZS9zb3VyY2UubWFuYWdlci1mYWN0b3J5JztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uRmFjdG9yeSB9IGZyb20gJy4vdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbi5mYWN0b3J5JztcbmltcG9ydCB7IEFnZ3JlZ2F0aW9uTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuL2FnZ3JlZ2F0aW9uL2FnZ3JlZ2F0aW9uLm1hbmFnZXIuZmFjdG9yeSc7XG5pbXBvcnQgeyBGaWx0ZXJNYW5hZ2VyRmFjdG9yeSB9IGZyb20gJy4vZmlsdGVyL2ZpbHRlci5tYW5hZ2VyLWZhY3RvcnknO1xuaW1wb3J0IHsgRmllbGRDb2xsZWN0aW9uRmFjdG9yeSB9IGZyb20gJy4vZmllbGQvZmllbGQtY29sbGVjdGlvbi5mYWN0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBTb3J0ZXJDb2xsZWN0aW9uIH0gZnJvbSAnLi9zb3J0L3NvcnRlci5jb2xsZWN0aW9uJztcbmltcG9ydCB7IEZvcm1hdGlvbkFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuLi9mb3JtYXRpb24vZm9ybWF0aW9uLmFnZ3JlZ2F0ZS1mYWN0b3J5JztcbmltcG9ydCB7IFNlYXJjaE1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi9zZWFyY2gvc2VhcmNoLm1hbmFnZXItZmFjdG9yeSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUFnZ3JlZ2F0ZUZhY3RvcnkgZXh0ZW5kcyBBZ2dyZWdhdGVGYWN0b3J5PFN0cnVjdHVyZUlkLCBTdHJ1Y3R1cmVBZ2dyZWdhdGU+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHBhZ2luZ0FnZ3JlZ2F0ZUZhY3Rvcnk6IFBhZ2luZ01hbmFnZXJGYWN0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZU1hbmFnZXJGYWN0b3J5OiBTb3VyY2VNYW5hZ2VyRmFjdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25BZ2dyZWdhdGVGYWN0b3J5OiBGb3JtYXRpb25BZ2dyZWdhdGVGYWN0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsRm9ybWF0aW9uRmFjdG9yeTogVmVydGljYWxGb3JtYXRpb25GYWN0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFnZ3JlZ2F0aW9uTWFuYWdlckZhY3Rvcnk6IEFnZ3JlZ2F0aW9uTWFuYWdlckZhY3RvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyTWFuYWdlckZhY3Rvcnk6IEZpbHRlck1hbmFnZXJGYWN0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlYXJjaE1hbmFnZXJGYWN0b3J5OiBTZWFyY2hNYW5hZ2VyRmFjdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWVsZENvbGxlY3Rpb25GYWN0b3J5OiBGaWVsZENvbGxlY3Rpb25GYWN0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGNyZWF0ZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUge1xuXG5cdFx0Y29uc3QgcGFnaW5nID0gdGhpcy5wYWdpbmdBZ2dyZWdhdGVGYWN0b3J5LmNyZWF0ZURlZmF1bHQoKSxcblx0XHRcdHNvdXJjZSA9IHRoaXMuc291cmNlTWFuYWdlckZhY3RvcnkuY3JlYXRlRGVmYXVsdCgpLFxuXHRcdFx0dmVydGljYWxGb3JtYXRpb24gPSB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uRmFjdG9yeS5jcmVhdGUoKSxcblx0XHRcdGZvcm1hdGlvbkFnZ3JlZ2F0ZSA9IHRoaXMuZm9ybWF0aW9uQWdncmVnYXRlRmFjdG9yeS5jcmVhdGUoKTtcblxuXHRcdGNvbnN0IHNvcnRlckNvbnRhaW5lcjogU29ydGVyQ29sbGVjdGlvbiA9IG5ldyBTb3J0ZXJDb2xsZWN0aW9uKCksXG5cdFx0XHRmaWx0ZXJDb250YWluZXIgPSB0aGlzLmZpbHRlck1hbmFnZXJGYWN0b3J5LmNyZWF0ZShmYWxzZSksXG5cdFx0XHRmaWVsZENvbnRhaW5lciA9IHRoaXMuZmllbGRDb2xsZWN0aW9uRmFjdG9yeS5jcmVhdGUoKSxcblx0XHRcdGFnZ3JlZ2F0aW9uTWFuYWdlciA9IHRoaXMuYWdncmVnYXRpb25NYW5hZ2VyRmFjdG9yeS5jcmVhdGUoc3RydWN0dXJlSWQpLFxuXHRcdFx0c2VhcmNoTWFuYWdlciA9IHRoaXMuc2VhcmNoTWFuYWdlckZhY3RvcnkuY3JlYXRlKCk7XG5cblx0XHRjb25zdCBzdHJ1Y3R1cmVBZ2dyZWdhdGUgPSBuZXcgU3RydWN0dXJlQWdncmVnYXRlKHN0cnVjdHVyZUlkLFxuXHRcdFx0cGFnaW5nLFxuXHRcdFx0Zm9ybWF0aW9uQWdncmVnYXRlLFxuXHRcdFx0c291cmNlLFxuXHRcdFx0dmVydGljYWxGb3JtYXRpb24sXG5cdFx0XHRhZ2dyZWdhdGlvbk1hbmFnZXIsXG5cdFx0XHRzb3J0ZXJDb250YWluZXIsXG5cdFx0XHRmaWx0ZXJDb250YWluZXIsXG5cdFx0XHRzZWFyY2hNYW5hZ2VyLFxuXHRcdFx0ZmllbGRDb250YWluZXJcblx0XHQpO1xuXG5cdFx0dGhpcy5pbml0KHN0cnVjdHVyZUFnZ3JlZ2F0ZSk7XG5cblx0XHRyZXR1cm4gc3RydWN0dXJlQWdncmVnYXRlO1xuXHR9XG5cblx0aW5pdChzdHJ1Y3R1cmVBZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSk6IHZvaWQge1xuXHRcdHN0cnVjdHVyZUFnZ3JlZ2F0ZS5pbml0KCk7XG5cdH1cblxufVxuIl19