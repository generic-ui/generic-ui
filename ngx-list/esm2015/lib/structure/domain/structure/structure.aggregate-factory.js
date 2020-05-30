/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AggregateFactory } from '@generic-ui/hermes';
import { PagingManagerFactory } from '../../../../structure/paging/domain/paging.manager-factory';
import { SourceManagerFactory } from '../source/source.manager-factory';
import { VerticalFormationFactory } from './vertical-formation/vertical-formation.factory';
import { SummariesManagerFactory } from './summaries/summaries.manager.factory';
import { FilterManagerFactory } from './filter/filter.manager-factory';
import { FieldCollectionFactory } from '../../../../structure/field/domain/field-collection.factory';
import { StructureAggregate } from './structure.aggregate';
import { SorterCollection } from '../../../../structure/sorting/domain/sorter.collection';
import { FormationAggregateFactory } from '../formation/formation.aggregate-factory';
import { SearchManagerFactory } from '../../../../structure/search/domain/search.manager-factory';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0ZS1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvc3RydWN0dXJlLmFnZ3JlZ2F0ZS1mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXRELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBRXJHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzFGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBSWxHLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxnQkFBaUQ7Ozs7Ozs7Ozs7O0lBRS9GLFlBQTZCLHNCQUE0QyxFQUNyRCxvQkFBMEMsRUFDMUMseUJBQW9ELEVBQ3BELHdCQUFrRCxFQUNsRCx1QkFBZ0QsRUFDaEQsb0JBQTBDLEVBQzFDLG9CQUEwQyxFQUMxQyxzQkFBOEM7UUFDakUsS0FBSyxFQUFFLENBQUM7UUFSb0IsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUFzQjtRQUNyRCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFDcEQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO0lBRWxFLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFdBQXdCOztjQUV4QixNQUFNLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsRUFBRTs7Y0FDekQsTUFBTSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEVBQUU7O2NBQ2xELGlCQUFpQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLEVBQUU7O2NBQzFELGtCQUFrQixHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLEVBQUU7O2NBRXZELGVBQWUsR0FBcUIsSUFBSSxnQkFBZ0IsRUFBRTs7Y0FDL0QsZUFBZSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDOztjQUN6RCxjQUFjLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sRUFBRTs7Y0FDckQsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7O2NBQ25FLGFBQWEsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxFQUFFOztjQUU3QyxrQkFBa0IsR0FBRyxJQUFJLGtCQUFrQixDQUFDLFdBQVcsRUFDNUQsTUFBTSxFQUNOLGtCQUFrQixFQUNsQixNQUFNLEVBQ04saUJBQWlCLEVBQ2pCLGdCQUFnQixFQUNoQixlQUFlLEVBQ2YsZUFBZSxFQUNmLGFBQWEsRUFDYixjQUFjLENBQ2Q7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFOUIsT0FBTyxrQkFBa0IsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELElBQUksQ0FBQyxrQkFBc0M7UUFDMUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7O1lBOUNELFVBQVU7Ozs7WUFiRixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBUXBCLHlCQUF5QjtZQVB6Qix3QkFBd0I7WUFDeEIsdUJBQXVCO1lBQ3ZCLG9CQUFvQjtZQU1wQixvQkFBb0I7WUFMcEIsc0JBQXNCOzs7Ozs7O0lBV2xCLDJEQUE2RDs7Ozs7SUFDdEUseURBQTJEOzs7OztJQUMzRCw4REFBcUU7Ozs7O0lBQ3JFLDZEQUFtRTs7Ozs7SUFDbkUsNERBQWlFOzs7OztJQUNqRSx5REFBMkQ7Ozs7O0lBQzNELHlEQUEyRDs7Ozs7SUFDM0QsMkRBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgUGFnaW5nTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvcGFnaW5nL2RvbWFpbi9wYWdpbmcubWFuYWdlci1mYWN0b3J5JztcbmltcG9ydCB7IFNvdXJjZU1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi4vc291cmNlL3NvdXJjZS5tYW5hZ2VyLWZhY3RvcnknO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25GYWN0b3J5IH0gZnJvbSAnLi92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uLmZhY3RvcnknO1xuaW1wb3J0IHsgU3VtbWFyaWVzTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuL3N1bW1hcmllcy9zdW1tYXJpZXMubWFuYWdlci5mYWN0b3J5JztcbmltcG9ydCB7IEZpbHRlck1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi9maWx0ZXIvZmlsdGVyLm1hbmFnZXItZmFjdG9yeSc7XG5pbXBvcnQgeyBGaWVsZENvbGxlY3Rpb25GYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2ZpZWxkL2RvbWFpbi9maWVsZC1jb2xsZWN0aW9uLmZhY3RvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcbmltcG9ydCB7IFNvcnRlckNvbGxlY3Rpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc29ydGluZy9kb21haW4vc29ydGVyLmNvbGxlY3Rpb24nO1xuaW1wb3J0IHsgRm9ybWF0aW9uQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJy4uL2Zvcm1hdGlvbi9mb3JtYXRpb24uYWdncmVnYXRlLWZhY3RvcnknO1xuaW1wb3J0IHsgU2VhcmNoTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc2VhcmNoL2RvbWFpbi9zZWFyY2gubWFuYWdlci1mYWN0b3J5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQWdncmVnYXRlRmFjdG9yeSBleHRlbmRzIEFnZ3JlZ2F0ZUZhY3Rvcnk8U3RydWN0dXJlSWQsIFN0cnVjdHVyZUFnZ3JlZ2F0ZT4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgcGFnaW5nQWdncmVnYXRlRmFjdG9yeTogUGFnaW5nTWFuYWdlckZhY3RvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlTWFuYWdlckZhY3Rvcnk6IFNvdXJjZU1hbmFnZXJGYWN0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbkFnZ3JlZ2F0ZUZhY3Rvcnk6IEZvcm1hdGlvbkFnZ3JlZ2F0ZUZhY3RvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdmVydGljYWxGb3JtYXRpb25GYWN0b3J5OiBWZXJ0aWNhbEZvcm1hdGlvbkZhY3RvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3VtbWFyaWVzTWFuYWdlckZhY3Rvcnk6IFN1bW1hcmllc01hbmFnZXJGYWN0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlck1hbmFnZXJGYWN0b3J5OiBGaWx0ZXJNYW5hZ2VyRmFjdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWFyY2hNYW5hZ2VyRmFjdG9yeTogU2VhcmNoTWFuYWdlckZhY3RvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmllbGRDb2xsZWN0aW9uRmFjdG9yeTogRmllbGRDb2xsZWN0aW9uRmFjdG9yeSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRjcmVhdGUoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogU3RydWN0dXJlQWdncmVnYXRlIHtcblxuXHRcdGNvbnN0IHBhZ2luZyA9IHRoaXMucGFnaW5nQWdncmVnYXRlRmFjdG9yeS5jcmVhdGVEZWZhdWx0KCksXG5cdFx0XHRzb3VyY2UgPSB0aGlzLnNvdXJjZU1hbmFnZXJGYWN0b3J5LmNyZWF0ZURlZmF1bHQoKSxcblx0XHRcdHZlcnRpY2FsRm9ybWF0aW9uID0gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvbkZhY3RvcnkuY3JlYXRlKCksXG5cdFx0XHRmb3JtYXRpb25BZ2dyZWdhdGUgPSB0aGlzLmZvcm1hdGlvbkFnZ3JlZ2F0ZUZhY3RvcnkuY3JlYXRlKCk7XG5cblx0XHRjb25zdCBzb3J0ZXJDb250YWluZXI6IFNvcnRlckNvbGxlY3Rpb24gPSBuZXcgU29ydGVyQ29sbGVjdGlvbigpLFxuXHRcdFx0ZmlsdGVyQ29udGFpbmVyID0gdGhpcy5maWx0ZXJNYW5hZ2VyRmFjdG9yeS5jcmVhdGUoZmFsc2UpLFxuXHRcdFx0ZmllbGRDb250YWluZXIgPSB0aGlzLmZpZWxkQ29sbGVjdGlvbkZhY3RvcnkuY3JlYXRlKCksXG5cdFx0XHRzdW1tYXJpZXNNYW5hZ2VyID0gdGhpcy5zdW1tYXJpZXNNYW5hZ2VyRmFjdG9yeS5jcmVhdGUoc3RydWN0dXJlSWQpLFxuXHRcdFx0c2VhcmNoTWFuYWdlciA9IHRoaXMuc2VhcmNoTWFuYWdlckZhY3RvcnkuY3JlYXRlKCk7XG5cblx0XHRjb25zdCBzdHJ1Y3R1cmVBZ2dyZWdhdGUgPSBuZXcgU3RydWN0dXJlQWdncmVnYXRlKHN0cnVjdHVyZUlkLFxuXHRcdFx0cGFnaW5nLFxuXHRcdFx0Zm9ybWF0aW9uQWdncmVnYXRlLFxuXHRcdFx0c291cmNlLFxuXHRcdFx0dmVydGljYWxGb3JtYXRpb24sXG5cdFx0XHRzdW1tYXJpZXNNYW5hZ2VyLFxuXHRcdFx0c29ydGVyQ29udGFpbmVyLFxuXHRcdFx0ZmlsdGVyQ29udGFpbmVyLFxuXHRcdFx0c2VhcmNoTWFuYWdlcixcblx0XHRcdGZpZWxkQ29udGFpbmVyXG5cdFx0KTtcblxuXHRcdHRoaXMuaW5pdChzdHJ1Y3R1cmVBZ2dyZWdhdGUpO1xuXG5cdFx0cmV0dXJuIHN0cnVjdHVyZUFnZ3JlZ2F0ZTtcblx0fVxuXG5cdGluaXQoc3RydWN0dXJlQWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUpOiB2b2lkIHtcblx0XHRzdHJ1Y3R1cmVBZ2dyZWdhdGUuaW5pdCgpO1xuXHR9XG5cbn1cbiJdfQ==