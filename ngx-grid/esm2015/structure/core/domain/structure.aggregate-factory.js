/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AggregateFactory } from '@generic-ui/hermes';
import { PagingManagerFactory } from '../../paging/domain/paging.manager-factory';
import { SourceManagerFactory } from '../../source/domain/core/source.manager-factory';
import { VerticalFormationFactory } from './vertical-formation/vertical-formation.factory';
import { SummariesManagerFactory } from './summaries/summaries.manager.factory';
import { FilterManagerFactory } from '../../filter/domain/filter.manager-factory';
import { FieldCollectionFactory } from '../../field/domain/core/field-collection.factory';
import { StructureAggregate } from './structure.aggregate';
import { SorterCollection } from '../../sorting/domain/sorter.collection';
import { SearchManagerFactory } from '../../search/domain/search.manager-factory';
import { UniqueFilterManager } from '../../filter/domain/unique/unique-filter-manager';
export class StructureAggregateFactory extends AggregateFactory {
    /**
     * @param {?} pagingAggregateFactory
     * @param {?} sourceManagerFactory
     * @param {?} verticalFormationFactory
     * @param {?} summariesManagerFactory
     * @param {?} filterManagerFactory
     * @param {?} searchManagerFactory
     * @param {?} fieldCollectionFactory
     */
    constructor(pagingAggregateFactory, sourceManagerFactory, verticalFormationFactory, summariesManagerFactory, filterManagerFactory, searchManagerFactory, fieldCollectionFactory) {
        super();
        this.pagingAggregateFactory = pagingAggregateFactory;
        this.sourceManagerFactory = sourceManagerFactory;
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
        const structureAggregate = new StructureAggregate(structureId, paging, source, verticalFormation, summariesManager, sorterContainer, filterContainer, new UniqueFilterManager(), searchManager, fieldContainer);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0ZS1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvY29yZS9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZS1mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXRELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBRTFGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBSXZGLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxnQkFBaUQ7Ozs7Ozs7Ozs7SUFFL0YsWUFBNkIsc0JBQTRDLEVBQ3JELG9CQUEwQyxFQUMxQyx3QkFBa0QsRUFDbEQsdUJBQWdELEVBQ2hELG9CQUEwQyxFQUMxQyxvQkFBMEMsRUFDMUMsc0JBQThDO1FBQ2pFLEtBQUssRUFBRSxDQUFDO1FBUG9CLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBc0I7UUFDckQseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7SUFFbEUsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsV0FBd0I7O2NBRXhCLE1BQU0sR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsYUFBYSxFQUFFOztjQUN6RCxNQUFNLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsRUFBRTs7Y0FDbEQsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sRUFBRTs7Y0FFckQsZUFBZSxHQUFxQixJQUFJLGdCQUFnQixFQUFFOztjQUMvRCxlQUFlLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7O2NBQ3pELGNBQWMsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxFQUFFOztjQUNyRCxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQzs7Y0FDbkUsYUFBYSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUU7O2NBRTdDLGtCQUFrQixHQUFHLElBQUksa0JBQWtCLENBQUMsV0FBVyxFQUM1RCxNQUFNLEVBQ04sTUFBTSxFQUNOLGlCQUFpQixFQUNqQixnQkFBZ0IsRUFDaEIsZUFBZSxFQUNmLGVBQWUsRUFDZixJQUFJLG1CQUFtQixFQUFFLEVBQ3pCLGFBQWEsRUFDYixjQUFjLENBQ2Q7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFOUIsT0FBTyxrQkFBa0IsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELElBQUksQ0FBQyxrQkFBc0M7UUFDMUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7O1lBNUNELFVBQVU7Ozs7WUFiRixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLHdCQUF3QjtZQUN4Qix1QkFBdUI7WUFDdkIsb0JBQW9CO1lBS3BCLG9CQUFvQjtZQUpwQixzQkFBc0I7Ozs7Ozs7SUFXbEIsMkRBQTZEOzs7OztJQUN0RSx5REFBMkQ7Ozs7O0lBQzNELDZEQUFtRTs7Ozs7SUFDbkUsNERBQWlFOzs7OztJQUNqRSx5REFBMkQ7Ozs7O0lBQzNELHlEQUEyRDs7Ozs7SUFDM0QsMkRBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgUGFnaW5nTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuLi8uLi9wYWdpbmcvZG9tYWluL3BhZ2luZy5tYW5hZ2VyLWZhY3RvcnknO1xuaW1wb3J0IHsgU291cmNlTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuLi8uLi9zb3VyY2UvZG9tYWluL2NvcmUvc291cmNlLm1hbmFnZXItZmFjdG9yeSc7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbkZhY3RvcnkgfSBmcm9tICcuL3ZlcnRpY2FsLWZvcm1hdGlvbi92ZXJ0aWNhbC1mb3JtYXRpb24uZmFjdG9yeSc7XG5pbXBvcnQgeyBTdW1tYXJpZXNNYW5hZ2VyRmFjdG9yeSB9IGZyb20gJy4vc3VtbWFyaWVzL3N1bW1hcmllcy5tYW5hZ2VyLmZhY3RvcnknO1xuaW1wb3J0IHsgRmlsdGVyTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuLi8uLi9maWx0ZXIvZG9tYWluL2ZpbHRlci5tYW5hZ2VyLWZhY3RvcnknO1xuaW1wb3J0IHsgRmllbGRDb2xsZWN0aW9uRmFjdG9yeSB9IGZyb20gJy4uLy4uL2ZpZWxkL2RvbWFpbi9jb3JlL2ZpZWxkLWNvbGxlY3Rpb24uZmFjdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBTb3J0ZXJDb2xsZWN0aW9uIH0gZnJvbSAnLi4vLi4vc29ydGluZy9kb21haW4vc29ydGVyLmNvbGxlY3Rpb24nO1xuaW1wb3J0IHsgU2VhcmNoTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuLi8uLi9zZWFyY2gvZG9tYWluL3NlYXJjaC5tYW5hZ2VyLWZhY3RvcnknO1xuaW1wb3J0IHsgVW5pcXVlRmlsdGVyTWFuYWdlciB9IGZyb20gJy4uLy4uL2ZpbHRlci9kb21haW4vdW5pcXVlL3VuaXF1ZS1maWx0ZXItbWFuYWdlcic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUFnZ3JlZ2F0ZUZhY3RvcnkgZXh0ZW5kcyBBZ2dyZWdhdGVGYWN0b3J5PFN0cnVjdHVyZUlkLCBTdHJ1Y3R1cmVBZ2dyZWdhdGU+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHBhZ2luZ0FnZ3JlZ2F0ZUZhY3Rvcnk6IFBhZ2luZ01hbmFnZXJGYWN0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZU1hbmFnZXJGYWN0b3J5OiBTb3VyY2VNYW5hZ2VyRmFjdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB2ZXJ0aWNhbEZvcm1hdGlvbkZhY3Rvcnk6IFZlcnRpY2FsRm9ybWF0aW9uRmFjdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdW1tYXJpZXNNYW5hZ2VyRmFjdG9yeTogU3VtbWFyaWVzTWFuYWdlckZhY3RvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyTWFuYWdlckZhY3Rvcnk6IEZpbHRlck1hbmFnZXJGYWN0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlYXJjaE1hbmFnZXJGYWN0b3J5OiBTZWFyY2hNYW5hZ2VyRmFjdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWVsZENvbGxlY3Rpb25GYWN0b3J5OiBGaWVsZENvbGxlY3Rpb25GYWN0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGNyZWF0ZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUge1xuXG5cdFx0Y29uc3QgcGFnaW5nID0gdGhpcy5wYWdpbmdBZ2dyZWdhdGVGYWN0b3J5LmNyZWF0ZURlZmF1bHQoKSxcblx0XHRcdHNvdXJjZSA9IHRoaXMuc291cmNlTWFuYWdlckZhY3RvcnkuY3JlYXRlRGVmYXVsdCgpLFxuXHRcdFx0dmVydGljYWxGb3JtYXRpb24gPSB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uRmFjdG9yeS5jcmVhdGUoKTtcblxuXHRcdGNvbnN0IHNvcnRlckNvbnRhaW5lcjogU29ydGVyQ29sbGVjdGlvbiA9IG5ldyBTb3J0ZXJDb2xsZWN0aW9uKCksXG5cdFx0XHRmaWx0ZXJDb250YWluZXIgPSB0aGlzLmZpbHRlck1hbmFnZXJGYWN0b3J5LmNyZWF0ZShmYWxzZSksXG5cdFx0XHRmaWVsZENvbnRhaW5lciA9IHRoaXMuZmllbGRDb2xsZWN0aW9uRmFjdG9yeS5jcmVhdGUoKSxcblx0XHRcdHN1bW1hcmllc01hbmFnZXIgPSB0aGlzLnN1bW1hcmllc01hbmFnZXJGYWN0b3J5LmNyZWF0ZShzdHJ1Y3R1cmVJZCksXG5cdFx0XHRzZWFyY2hNYW5hZ2VyID0gdGhpcy5zZWFyY2hNYW5hZ2VyRmFjdG9yeS5jcmVhdGUoKTtcblxuXHRcdGNvbnN0IHN0cnVjdHVyZUFnZ3JlZ2F0ZSA9IG5ldyBTdHJ1Y3R1cmVBZ2dyZWdhdGUoc3RydWN0dXJlSWQsXG5cdFx0XHRwYWdpbmcsXG5cdFx0XHRzb3VyY2UsXG5cdFx0XHR2ZXJ0aWNhbEZvcm1hdGlvbixcblx0XHRcdHN1bW1hcmllc01hbmFnZXIsXG5cdFx0XHRzb3J0ZXJDb250YWluZXIsXG5cdFx0XHRmaWx0ZXJDb250YWluZXIsXG5cdFx0XHRuZXcgVW5pcXVlRmlsdGVyTWFuYWdlcigpLFxuXHRcdFx0c2VhcmNoTWFuYWdlcixcblx0XHRcdGZpZWxkQ29udGFpbmVyXG5cdFx0KTtcblxuXHRcdHRoaXMuaW5pdChzdHJ1Y3R1cmVBZ2dyZWdhdGUpO1xuXG5cdFx0cmV0dXJuIHN0cnVjdHVyZUFnZ3JlZ2F0ZTtcblx0fVxuXG5cdGluaXQoc3RydWN0dXJlQWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUpOiB2b2lkIHtcblx0XHRzdHJ1Y3R1cmVBZ2dyZWdhdGUuaW5pdCgpO1xuXHR9XG5cbn1cbiJdfQ==