/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { PagingAggregateFactory } from '../../paging/command/paging.aggregate-factory';
import { SourceManagerFactory } from '../../source/command/source.manager-factory';
import { VerticalFormationFactory } from './vertical-formation/vertical-formation.factory';
import { AggregationManagerFactory } from './aggregation/aggregation.manager.factory';
import { FilterManagerFactory } from './filter/filter.manager-factory';
import { FieldCollectionFactory } from './field/field-collection.factory';
import { StructureAggregate } from './structure.aggregate';
import { SorterCollection } from './sort/sorter.collection';
import { SchemaAggregateFactory } from '../../schema/command/schema.aggregate-factory';
import { FormationAggregateFactory } from '../../formation/command/formation.aggregate-factory';
import { SearchManagerFactory } from './search/search.manager-factory';
var StructureAggregateFactory = /** @class */ (function () {
    function StructureAggregateFactory(pagingAggregateFactory, sourceManagerFactory, formationAggregateFactory, verticalFormationFactory, aggregationManagerFactory, filterManagerFactory, searchManagerFactory, fieldCollectionFactory, schemaAggregateFactory) {
        this.pagingAggregateFactory = pagingAggregateFactory;
        this.sourceManagerFactory = sourceManagerFactory;
        this.formationAggregateFactory = formationAggregateFactory;
        this.verticalFormationFactory = verticalFormationFactory;
        this.aggregationManagerFactory = aggregationManagerFactory;
        this.filterManagerFactory = filterManagerFactory;
        this.searchManagerFactory = searchManagerFactory;
        this.fieldCollectionFactory = fieldCollectionFactory;
        this.schemaAggregateFactory = schemaAggregateFactory;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructureAggregateFactory.prototype.create = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        /** @type {?} */
        var paging = this.pagingAggregateFactory.createDefault();
        /** @type {?} */
        var source = this.sourceManagerFactory.createDefault();
        /** @type {?} */
        var verticalFormation = this.verticalFormationFactory.create();
        /** @type {?} */
        var formationAggregate = this.formationAggregateFactory.create();
        /** @type {?} */
        var sorterContainer = new SorterCollection();
        /** @type {?} */
        var filterContainer = this.filterManagerFactory.create(false);
        /** @type {?} */
        var fieldContainer = this.fieldCollectionFactory.create();
        /** @type {?} */
        var aggregationManager = this.aggregationManagerFactory.create(structureId);
        /** @type {?} */
        var schema = this.schemaAggregateFactory.create();
        /** @type {?} */
        var searchManager = this.searchManagerFactory.create();
        return new StructureAggregate(structureId, paging, formationAggregate, source, verticalFormation, aggregationManager, sorterContainer, filterContainer, searchManager, fieldContainer, schema);
    };
    StructureAggregateFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureAggregateFactory.ctorParameters = function () { return [
        { type: PagingAggregateFactory },
        { type: SourceManagerFactory },
        { type: FormationAggregateFactory },
        { type: VerticalFormationFactory },
        { type: AggregationManagerFactory },
        { type: FilterManagerFactory },
        { type: SearchManagerFactory },
        { type: FieldCollectionFactory },
        { type: SchemaAggregateFactory }
    ]; };
    return StructureAggregateFactory;
}());
export { StructureAggregateFactory };
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
    /**
     * @type {?}
     * @private
     */
    StructureAggregateFactory.prototype.schemaAggregateFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0ZS1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9zdHJ1Y3R1cmUuYWdncmVnYXRlLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdkYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDM0YsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFMUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdkYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDaEcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFHdkU7SUFHQyxtQ0FBNkIsc0JBQThDLEVBQ3ZELG9CQUEwQyxFQUMxQyx5QkFBb0QsRUFDcEQsd0JBQWtELEVBQ2xELHlCQUFvRCxFQUNwRCxvQkFBMEMsRUFDMUMsb0JBQTBDLEVBQzFDLHNCQUE4QyxFQUM5QyxzQkFBOEM7UUFSckMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUN2RCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFDcEQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBQ3BELHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7SUFDbEUsQ0FBQzs7Ozs7SUFFRCwwQ0FBTTs7OztJQUFOLFVBQU8sV0FBd0I7O1lBRXhCLE1BQU0sR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsYUFBYSxFQUFFOztZQUN6RCxNQUFNLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsRUFBRTs7WUFDbEQsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sRUFBRTs7WUFDMUQsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sRUFBRTs7WUFFdkQsZUFBZSxHQUFxQixJQUFJLGdCQUFnQixFQUFFOztZQUMvRCxlQUFlLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7O1lBQ3pELGNBQWMsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxFQUFFOztZQUNyRCxrQkFBa0IsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQzs7WUFDdkUsTUFBTSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLEVBQUU7O1lBQzdDLGFBQWEsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxFQUFFO1FBRW5ELE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxXQUFXLEVBQ3hDLE1BQU0sRUFDTixrQkFBa0IsRUFDbEIsTUFBTSxFQUNOLGlCQUFpQixFQUNqQixrQkFBa0IsRUFDbEIsZUFBZSxFQUNmLGVBQWUsRUFDZixhQUFhLEVBQ2IsY0FBYyxFQUNkLE1BQU0sQ0FDTixDQUFDO0lBQ0gsQ0FBQzs7Z0JBeENELFVBQVU7Ozs7Z0JBZEYsc0JBQXNCO2dCQUN0QixvQkFBb0I7Z0JBU3BCLHlCQUF5QjtnQkFSekIsd0JBQXdCO2dCQUN4Qix5QkFBeUI7Z0JBQ3pCLG9CQUFvQjtnQkFPcEIsb0JBQW9CO2dCQU5wQixzQkFBc0I7Z0JBSXRCLHNCQUFzQjs7SUErQy9CLGdDQUFDO0NBQUEsQUExQ0QsSUEwQ0M7U0F6Q1kseUJBQXlCOzs7Ozs7SUFFekIsMkRBQStEOzs7OztJQUN4RSx5REFBMkQ7Ozs7O0lBQzNELDhEQUFxRTs7Ozs7SUFDckUsNkRBQW1FOzs7OztJQUNuRSw4REFBcUU7Ozs7O0lBQ3JFLHlEQUEyRDs7Ozs7SUFDM0QseURBQTJEOzs7OztJQUMzRCwyREFBK0Q7Ozs7O0lBQy9ELDJEQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGFnaW5nQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJy4uLy4uL3BhZ2luZy9jb21tYW5kL3BhZ2luZy5hZ2dyZWdhdGUtZmFjdG9yeSc7XG5pbXBvcnQgeyBTb3VyY2VNYW5hZ2VyRmFjdG9yeSB9IGZyb20gJy4uLy4uL3NvdXJjZS9jb21tYW5kL3NvdXJjZS5tYW5hZ2VyLWZhY3RvcnknO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25GYWN0b3J5IH0gZnJvbSAnLi92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uLmZhY3RvcnknO1xuaW1wb3J0IHsgQWdncmVnYXRpb25NYW5hZ2VyRmFjdG9yeSB9IGZyb20gJy4vYWdncmVnYXRpb24vYWdncmVnYXRpb24ubWFuYWdlci5mYWN0b3J5JztcbmltcG9ydCB7IEZpbHRlck1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi9maWx0ZXIvZmlsdGVyLm1hbmFnZXItZmFjdG9yeSc7XG5pbXBvcnQgeyBGaWVsZENvbGxlY3Rpb25GYWN0b3J5IH0gZnJvbSAnLi9maWVsZC9maWVsZC1jb2xsZWN0aW9uLmZhY3RvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcbmltcG9ydCB7IFNvcnRlckNvbGxlY3Rpb24gfSBmcm9tICcuL3NvcnQvc29ydGVyLmNvbGxlY3Rpb24nO1xuaW1wb3J0IHsgU2NoZW1hQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJy4uLy4uL3NjaGVtYS9jb21tYW5kL3NjaGVtYS5hZ2dyZWdhdGUtZmFjdG9yeSc7XG5pbXBvcnQgeyBGb3JtYXRpb25BZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnLi4vLi4vZm9ybWF0aW9uL2NvbW1hbmQvZm9ybWF0aW9uLmFnZ3JlZ2F0ZS1mYWN0b3J5JztcbmltcG9ydCB7IFNlYXJjaE1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi9zZWFyY2gvc2VhcmNoLm1hbmFnZXItZmFjdG9yeSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUFnZ3JlZ2F0ZUZhY3Rvcnkge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgcGFnaW5nQWdncmVnYXRlRmFjdG9yeTogUGFnaW5nQWdncmVnYXRlRmFjdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VNYW5hZ2VyRmFjdG9yeTogU291cmNlTWFuYWdlckZhY3RvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uQWdncmVnYXRlRmFjdG9yeTogRm9ybWF0aW9uQWdncmVnYXRlRmFjdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB2ZXJ0aWNhbEZvcm1hdGlvbkZhY3Rvcnk6IFZlcnRpY2FsRm9ybWF0aW9uRmFjdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhZ2dyZWdhdGlvbk1hbmFnZXJGYWN0b3J5OiBBZ2dyZWdhdGlvbk1hbmFnZXJGYWN0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlck1hbmFnZXJGYWN0b3J5OiBGaWx0ZXJNYW5hZ2VyRmFjdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWFyY2hNYW5hZ2VyRmFjdG9yeTogU2VhcmNoTWFuYWdlckZhY3RvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmllbGRDb2xsZWN0aW9uRmFjdG9yeTogRmllbGRDb2xsZWN0aW9uRmFjdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFBZ2dyZWdhdGVGYWN0b3J5OiBTY2hlbWFBZ2dyZWdhdGVGYWN0b3J5KSB7XG5cdH1cblxuXHRjcmVhdGUoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogU3RydWN0dXJlQWdncmVnYXRlIHtcblxuXHRcdGNvbnN0IHBhZ2luZyA9IHRoaXMucGFnaW5nQWdncmVnYXRlRmFjdG9yeS5jcmVhdGVEZWZhdWx0KCksXG5cdFx0XHRzb3VyY2UgPSB0aGlzLnNvdXJjZU1hbmFnZXJGYWN0b3J5LmNyZWF0ZURlZmF1bHQoKSxcblx0XHRcdHZlcnRpY2FsRm9ybWF0aW9uID0gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvbkZhY3RvcnkuY3JlYXRlKCksXG5cdFx0XHRmb3JtYXRpb25BZ2dyZWdhdGUgPSB0aGlzLmZvcm1hdGlvbkFnZ3JlZ2F0ZUZhY3RvcnkuY3JlYXRlKCk7XG5cblx0XHRjb25zdCBzb3J0ZXJDb250YWluZXI6IFNvcnRlckNvbGxlY3Rpb24gPSBuZXcgU29ydGVyQ29sbGVjdGlvbigpLFxuXHRcdFx0ZmlsdGVyQ29udGFpbmVyID0gdGhpcy5maWx0ZXJNYW5hZ2VyRmFjdG9yeS5jcmVhdGUoZmFsc2UpLFxuXHRcdFx0ZmllbGRDb250YWluZXIgPSB0aGlzLmZpZWxkQ29sbGVjdGlvbkZhY3RvcnkuY3JlYXRlKCksXG5cdFx0XHRhZ2dyZWdhdGlvbk1hbmFnZXIgPSB0aGlzLmFnZ3JlZ2F0aW9uTWFuYWdlckZhY3RvcnkuY3JlYXRlKHN0cnVjdHVyZUlkKSxcblx0XHRcdHNjaGVtYSA9IHRoaXMuc2NoZW1hQWdncmVnYXRlRmFjdG9yeS5jcmVhdGUoKSxcblx0XHRcdHNlYXJjaE1hbmFnZXIgPSB0aGlzLnNlYXJjaE1hbmFnZXJGYWN0b3J5LmNyZWF0ZSgpO1xuXG5cdFx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmVBZ2dyZWdhdGUoc3RydWN0dXJlSWQsXG5cdFx0XHRwYWdpbmcsXG5cdFx0XHRmb3JtYXRpb25BZ2dyZWdhdGUsXG5cdFx0XHRzb3VyY2UsXG5cdFx0XHR2ZXJ0aWNhbEZvcm1hdGlvbixcblx0XHRcdGFnZ3JlZ2F0aW9uTWFuYWdlcixcblx0XHRcdHNvcnRlckNvbnRhaW5lcixcblx0XHRcdGZpbHRlckNvbnRhaW5lcixcblx0XHRcdHNlYXJjaE1hbmFnZXIsXG5cdFx0XHRmaWVsZENvbnRhaW5lcixcblx0XHRcdHNjaGVtYVxuXHRcdCk7XG5cdH1cblxufVxuIl19