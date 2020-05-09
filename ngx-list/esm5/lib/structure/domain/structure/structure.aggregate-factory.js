/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AggregateFactory } from '@generic-ui/hermes';
import { PagingManagerFactory } from '../../../../structure/paging/domain/paging.manager-factory';
import { SourceManagerFactory } from '../source/source.manager-factory';
import { VerticalFormationFactory } from './vertical-formation/vertical-formation.factory';
import { SummariesManagerFactory } from './summaries/summaries.manager.factory';
import { FilterManagerFactory } from './filter/filter.manager-factory';
import { FieldCollectionFactory } from './field/field-collection.factory';
import { StructureAggregate } from './structure.aggregate';
import { SorterCollection } from './sort/sorter.collection';
import { FormationAggregateFactory } from '../formation/formation.aggregate-factory';
import { SearchManagerFactory } from './search/search.manager-factory';
var StructureAggregateFactory = /** @class */ (function (_super) {
    tslib_1.__extends(StructureAggregateFactory, _super);
    function StructureAggregateFactory(pagingAggregateFactory, sourceManagerFactory, formationAggregateFactory, verticalFormationFactory, summariesManagerFactory, filterManagerFactory, searchManagerFactory, fieldCollectionFactory) {
        var _this = _super.call(this) || this;
        _this.pagingAggregateFactory = pagingAggregateFactory;
        _this.sourceManagerFactory = sourceManagerFactory;
        _this.formationAggregateFactory = formationAggregateFactory;
        _this.verticalFormationFactory = verticalFormationFactory;
        _this.summariesManagerFactory = summariesManagerFactory;
        _this.filterManagerFactory = filterManagerFactory;
        _this.searchManagerFactory = searchManagerFactory;
        _this.fieldCollectionFactory = fieldCollectionFactory;
        return _this;
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
        var summariesManager = this.summariesManagerFactory.create(structureId);
        /** @type {?} */
        var searchManager = this.searchManagerFactory.create();
        /** @type {?} */
        var structureAggregate = new StructureAggregate(structureId, paging, formationAggregate, source, verticalFormation, summariesManager, sorterContainer, filterContainer, searchManager, fieldContainer);
        this.init(structureAggregate);
        return structureAggregate;
    };
    /**
     * @param {?} structureAggregate
     * @return {?}
     */
    StructureAggregateFactory.prototype.init = /**
     * @param {?} structureAggregate
     * @return {?}
     */
    function (structureAggregate) {
        structureAggregate.init();
    };
    StructureAggregateFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureAggregateFactory.ctorParameters = function () { return [
        { type: PagingManagerFactory },
        { type: SourceManagerFactory },
        { type: FormationAggregateFactory },
        { type: VerticalFormationFactory },
        { type: SummariesManagerFactory },
        { type: FilterManagerFactory },
        { type: SearchManagerFactory },
        { type: FieldCollectionFactory }
    ]; };
    return StructureAggregateFactory;
}(AggregateFactory));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0ZS1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvc3RydWN0dXJlLmFnZ3JlZ2F0ZS1mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUNsRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUUxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNyRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUd2RTtJQUMrQyxxREFBaUQ7SUFFL0YsbUNBQTZCLHNCQUE0QyxFQUNyRCxvQkFBMEMsRUFDMUMseUJBQW9ELEVBQ3BELHdCQUFrRCxFQUNsRCx1QkFBZ0QsRUFDaEQsb0JBQTBDLEVBQzFDLG9CQUEwQyxFQUMxQyxzQkFBOEM7UUFQbEUsWUFRQyxpQkFBTyxTQUNQO1FBVDRCLDRCQUFzQixHQUF0QixzQkFBc0IsQ0FBc0I7UUFDckQsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQywrQkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBQ3BELDhCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsNkJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCwwQkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsNEJBQXNCLEdBQXRCLHNCQUFzQixDQUF3Qjs7SUFFbEUsQ0FBQzs7Ozs7SUFFRCwwQ0FBTTs7OztJQUFOLFVBQU8sV0FBd0I7O1lBRXhCLE1BQU0sR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsYUFBYSxFQUFFOztZQUN6RCxNQUFNLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsRUFBRTs7WUFDbEQsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sRUFBRTs7WUFDMUQsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sRUFBRTs7WUFFdkQsZUFBZSxHQUFxQixJQUFJLGdCQUFnQixFQUFFOztZQUMvRCxlQUFlLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7O1lBQ3pELGNBQWMsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxFQUFFOztZQUNyRCxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQzs7WUFDbkUsYUFBYSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUU7O1lBRTdDLGtCQUFrQixHQUFHLElBQUksa0JBQWtCLENBQUMsV0FBVyxFQUM1RCxNQUFNLEVBQ04sa0JBQWtCLEVBQ2xCLE1BQU0sRUFDTixpQkFBaUIsRUFDakIsZ0JBQWdCLEVBQ2hCLGVBQWUsRUFDZixlQUFlLEVBQ2YsYUFBYSxFQUNiLGNBQWMsQ0FDZDtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUU5QixPQUFPLGtCQUFrQixDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsd0NBQUk7Ozs7SUFBSixVQUFLLGtCQUFzQztRQUMxQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDOztnQkE5Q0QsVUFBVTs7OztnQkFiRixvQkFBb0I7Z0JBQ3BCLG9CQUFvQjtnQkFRcEIseUJBQXlCO2dCQVB6Qix3QkFBd0I7Z0JBQ3hCLHVCQUF1QjtnQkFDdkIsb0JBQW9CO2dCQU1wQixvQkFBb0I7Z0JBTHBCLHNCQUFzQjs7SUF3RC9CLGdDQUFDO0NBQUEsQUFoREQsQ0FDK0MsZ0JBQWdCLEdBK0M5RDtTQS9DWSx5QkFBeUI7Ozs7OztJQUV6QiwyREFBNkQ7Ozs7O0lBQ3RFLHlEQUEyRDs7Ozs7SUFDM0QsOERBQXFFOzs7OztJQUNyRSw2REFBbUU7Ozs7O0lBQ25FLDREQUFpRTs7Ozs7SUFDakUseURBQTJEOzs7OztJQUMzRCx5REFBMkQ7Ozs7O0lBQzNELDJEQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFBhZ2luZ01hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL3BhZ2luZy9kb21haW4vcGFnaW5nLm1hbmFnZXItZmFjdG9yeSc7XG5pbXBvcnQgeyBTb3VyY2VNYW5hZ2VyRmFjdG9yeSB9IGZyb20gJy4uL3NvdXJjZS9zb3VyY2UubWFuYWdlci1mYWN0b3J5JztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uRmFjdG9yeSB9IGZyb20gJy4vdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbi5mYWN0b3J5JztcbmltcG9ydCB7IFN1bW1hcmllc01hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi9zdW1tYXJpZXMvc3VtbWFyaWVzLm1hbmFnZXIuZmFjdG9yeSc7XG5pbXBvcnQgeyBGaWx0ZXJNYW5hZ2VyRmFjdG9yeSB9IGZyb20gJy4vZmlsdGVyL2ZpbHRlci5tYW5hZ2VyLWZhY3RvcnknO1xuaW1wb3J0IHsgRmllbGRDb2xsZWN0aW9uRmFjdG9yeSB9IGZyb20gJy4vZmllbGQvZmllbGQtY29sbGVjdGlvbi5mYWN0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBTb3J0ZXJDb2xsZWN0aW9uIH0gZnJvbSAnLi9zb3J0L3NvcnRlci5jb2xsZWN0aW9uJztcbmltcG9ydCB7IEZvcm1hdGlvbkFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuLi9mb3JtYXRpb24vZm9ybWF0aW9uLmFnZ3JlZ2F0ZS1mYWN0b3J5JztcbmltcG9ydCB7IFNlYXJjaE1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi9zZWFyY2gvc2VhcmNoLm1hbmFnZXItZmFjdG9yeSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUFnZ3JlZ2F0ZUZhY3RvcnkgZXh0ZW5kcyBBZ2dyZWdhdGVGYWN0b3J5PFN0cnVjdHVyZUlkLCBTdHJ1Y3R1cmVBZ2dyZWdhdGU+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHBhZ2luZ0FnZ3JlZ2F0ZUZhY3Rvcnk6IFBhZ2luZ01hbmFnZXJGYWN0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZU1hbmFnZXJGYWN0b3J5OiBTb3VyY2VNYW5hZ2VyRmFjdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25BZ2dyZWdhdGVGYWN0b3J5OiBGb3JtYXRpb25BZ2dyZWdhdGVGYWN0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsRm9ybWF0aW9uRmFjdG9yeTogVmVydGljYWxGb3JtYXRpb25GYWN0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN1bW1hcmllc01hbmFnZXJGYWN0b3J5OiBTdW1tYXJpZXNNYW5hZ2VyRmFjdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJNYW5hZ2VyRmFjdG9yeTogRmlsdGVyTWFuYWdlckZhY3RvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoTWFuYWdlckZhY3Rvcnk6IFNlYXJjaE1hbmFnZXJGYWN0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkQ29sbGVjdGlvbkZhY3Rvcnk6IEZpZWxkQ29sbGVjdGlvbkZhY3RvcnkpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Y3JlYXRlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB7XG5cblx0XHRjb25zdCBwYWdpbmcgPSB0aGlzLnBhZ2luZ0FnZ3JlZ2F0ZUZhY3RvcnkuY3JlYXRlRGVmYXVsdCgpLFxuXHRcdFx0c291cmNlID0gdGhpcy5zb3VyY2VNYW5hZ2VyRmFjdG9yeS5jcmVhdGVEZWZhdWx0KCksXG5cdFx0XHR2ZXJ0aWNhbEZvcm1hdGlvbiA9IHRoaXMudmVydGljYWxGb3JtYXRpb25GYWN0b3J5LmNyZWF0ZSgpLFxuXHRcdFx0Zm9ybWF0aW9uQWdncmVnYXRlID0gdGhpcy5mb3JtYXRpb25BZ2dyZWdhdGVGYWN0b3J5LmNyZWF0ZSgpO1xuXG5cdFx0Y29uc3Qgc29ydGVyQ29udGFpbmVyOiBTb3J0ZXJDb2xsZWN0aW9uID0gbmV3IFNvcnRlckNvbGxlY3Rpb24oKSxcblx0XHRcdGZpbHRlckNvbnRhaW5lciA9IHRoaXMuZmlsdGVyTWFuYWdlckZhY3RvcnkuY3JlYXRlKGZhbHNlKSxcblx0XHRcdGZpZWxkQ29udGFpbmVyID0gdGhpcy5maWVsZENvbGxlY3Rpb25GYWN0b3J5LmNyZWF0ZSgpLFxuXHRcdFx0c3VtbWFyaWVzTWFuYWdlciA9IHRoaXMuc3VtbWFyaWVzTWFuYWdlckZhY3RvcnkuY3JlYXRlKHN0cnVjdHVyZUlkKSxcblx0XHRcdHNlYXJjaE1hbmFnZXIgPSB0aGlzLnNlYXJjaE1hbmFnZXJGYWN0b3J5LmNyZWF0ZSgpO1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlQWdncmVnYXRlID0gbmV3IFN0cnVjdHVyZUFnZ3JlZ2F0ZShzdHJ1Y3R1cmVJZCxcblx0XHRcdHBhZ2luZyxcblx0XHRcdGZvcm1hdGlvbkFnZ3JlZ2F0ZSxcblx0XHRcdHNvdXJjZSxcblx0XHRcdHZlcnRpY2FsRm9ybWF0aW9uLFxuXHRcdFx0c3VtbWFyaWVzTWFuYWdlcixcblx0XHRcdHNvcnRlckNvbnRhaW5lcixcblx0XHRcdGZpbHRlckNvbnRhaW5lcixcblx0XHRcdHNlYXJjaE1hbmFnZXIsXG5cdFx0XHRmaWVsZENvbnRhaW5lclxuXHRcdCk7XG5cblx0XHR0aGlzLmluaXQoc3RydWN0dXJlQWdncmVnYXRlKTtcblxuXHRcdHJldHVybiBzdHJ1Y3R1cmVBZ2dyZWdhdGU7XG5cdH1cblxuXHRpbml0KHN0cnVjdHVyZUFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlKTogdm9pZCB7XG5cdFx0c3RydWN0dXJlQWdncmVnYXRlLmluaXQoKTtcblx0fVxuXG59XG4iXX0=