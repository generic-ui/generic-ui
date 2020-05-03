/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0ZS1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvc3RydWN0dXJlLmFnZ3JlZ2F0ZS1mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUUxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNyRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUd2RTtJQUMrQyxxREFBaUQ7SUFFL0YsbUNBQTZCLHNCQUE0QyxFQUNyRCxvQkFBMEMsRUFDMUMseUJBQW9ELEVBQ3BELHdCQUFrRCxFQUNsRCx1QkFBZ0QsRUFDaEQsb0JBQTBDLEVBQzFDLG9CQUEwQyxFQUMxQyxzQkFBOEM7UUFQbEUsWUFRQyxpQkFBTyxTQUNQO1FBVDRCLDRCQUFzQixHQUF0QixzQkFBc0IsQ0FBc0I7UUFDckQsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQywrQkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBQ3BELDhCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsNkJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCwwQkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsNEJBQXNCLEdBQXRCLHNCQUFzQixDQUF3Qjs7SUFFbEUsQ0FBQzs7Ozs7SUFFRCwwQ0FBTTs7OztJQUFOLFVBQU8sV0FBd0I7O1lBRXhCLE1BQU0sR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsYUFBYSxFQUFFOztZQUN6RCxNQUFNLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsRUFBRTs7WUFDbEQsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sRUFBRTs7WUFDMUQsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sRUFBRTs7WUFFdkQsZUFBZSxHQUFxQixJQUFJLGdCQUFnQixFQUFFOztZQUMvRCxlQUFlLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7O1lBQ3pELGNBQWMsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxFQUFFOztZQUNyRCxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQzs7WUFDbkUsYUFBYSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUU7O1lBRTdDLGtCQUFrQixHQUFHLElBQUksa0JBQWtCLENBQUMsV0FBVyxFQUM1RCxNQUFNLEVBQ04sa0JBQWtCLEVBQ2xCLE1BQU0sRUFDTixpQkFBaUIsRUFDakIsZ0JBQWdCLEVBQ2hCLGVBQWUsRUFDZixlQUFlLEVBQ2YsYUFBYSxFQUNiLGNBQWMsQ0FDZDtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUU5QixPQUFPLGtCQUFrQixDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsd0NBQUk7Ozs7SUFBSixVQUFLLGtCQUFzQztRQUMxQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDOztnQkE5Q0QsVUFBVTs7OztnQkFiRixvQkFBb0I7Z0JBQ3BCLG9CQUFvQjtnQkFRcEIseUJBQXlCO2dCQVB6Qix3QkFBd0I7Z0JBQ3hCLHVCQUF1QjtnQkFDdkIsb0JBQW9CO2dCQU1wQixvQkFBb0I7Z0JBTHBCLHNCQUFzQjs7SUF3RC9CLGdDQUFDO0NBQUEsQUFoREQsQ0FDK0MsZ0JBQWdCLEdBK0M5RDtTQS9DWSx5QkFBeUI7Ozs7OztJQUV6QiwyREFBNkQ7Ozs7O0lBQ3RFLHlEQUEyRDs7Ozs7SUFDM0QsOERBQXFFOzs7OztJQUNyRSw2REFBbUU7Ozs7O0lBQ25FLDREQUFpRTs7Ozs7SUFDakUseURBQTJEOzs7OztJQUMzRCx5REFBMkQ7Ozs7O0lBQzNELDJEQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFBhZ2luZ01hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi4vcGFnaW5nL3BhZ2luZy5tYW5hZ2VyLWZhY3RvcnknO1xuaW1wb3J0IHsgU291cmNlTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuLi9zb3VyY2Uvc291cmNlLm1hbmFnZXItZmFjdG9yeSc7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbkZhY3RvcnkgfSBmcm9tICcuL3ZlcnRpY2FsLWZvcm1hdGlvbi92ZXJ0aWNhbC1mb3JtYXRpb24uZmFjdG9yeSc7XG5pbXBvcnQgeyBTdW1tYXJpZXNNYW5hZ2VyRmFjdG9yeSB9IGZyb20gJy4vc3VtbWFyaWVzL3N1bW1hcmllcy5tYW5hZ2VyLmZhY3RvcnknO1xuaW1wb3J0IHsgRmlsdGVyTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuL2ZpbHRlci9maWx0ZXIubWFuYWdlci1mYWN0b3J5JztcbmltcG9ydCB7IEZpZWxkQ29sbGVjdGlvbkZhY3RvcnkgfSBmcm9tICcuL2ZpZWxkL2ZpZWxkLWNvbGxlY3Rpb24uZmFjdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgU29ydGVyQ29sbGVjdGlvbiB9IGZyb20gJy4vc29ydC9zb3J0ZXIuY29sbGVjdGlvbic7XG5pbXBvcnQgeyBGb3JtYXRpb25BZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnLi4vZm9ybWF0aW9uL2Zvcm1hdGlvbi5hZ2dyZWdhdGUtZmFjdG9yeSc7XG5pbXBvcnQgeyBTZWFyY2hNYW5hZ2VyRmFjdG9yeSB9IGZyb20gJy4vc2VhcmNoL3NlYXJjaC5tYW5hZ2VyLWZhY3RvcnknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVBZ2dyZWdhdGVGYWN0b3J5IGV4dGVuZHMgQWdncmVnYXRlRmFjdG9yeTxTdHJ1Y3R1cmVJZCwgU3RydWN0dXJlQWdncmVnYXRlPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBwYWdpbmdBZ2dyZWdhdGVGYWN0b3J5OiBQYWdpbmdNYW5hZ2VyRmFjdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VNYW5hZ2VyRmFjdG9yeTogU291cmNlTWFuYWdlckZhY3RvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uQWdncmVnYXRlRmFjdG9yeTogRm9ybWF0aW9uQWdncmVnYXRlRmFjdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB2ZXJ0aWNhbEZvcm1hdGlvbkZhY3Rvcnk6IFZlcnRpY2FsRm9ybWF0aW9uRmFjdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdW1tYXJpZXNNYW5hZ2VyRmFjdG9yeTogU3VtbWFyaWVzTWFuYWdlckZhY3RvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyTWFuYWdlckZhY3Rvcnk6IEZpbHRlck1hbmFnZXJGYWN0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlYXJjaE1hbmFnZXJGYWN0b3J5OiBTZWFyY2hNYW5hZ2VyRmFjdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWVsZENvbGxlY3Rpb25GYWN0b3J5OiBGaWVsZENvbGxlY3Rpb25GYWN0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGNyZWF0ZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUge1xuXG5cdFx0Y29uc3QgcGFnaW5nID0gdGhpcy5wYWdpbmdBZ2dyZWdhdGVGYWN0b3J5LmNyZWF0ZURlZmF1bHQoKSxcblx0XHRcdHNvdXJjZSA9IHRoaXMuc291cmNlTWFuYWdlckZhY3RvcnkuY3JlYXRlRGVmYXVsdCgpLFxuXHRcdFx0dmVydGljYWxGb3JtYXRpb24gPSB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uRmFjdG9yeS5jcmVhdGUoKSxcblx0XHRcdGZvcm1hdGlvbkFnZ3JlZ2F0ZSA9IHRoaXMuZm9ybWF0aW9uQWdncmVnYXRlRmFjdG9yeS5jcmVhdGUoKTtcblxuXHRcdGNvbnN0IHNvcnRlckNvbnRhaW5lcjogU29ydGVyQ29sbGVjdGlvbiA9IG5ldyBTb3J0ZXJDb2xsZWN0aW9uKCksXG5cdFx0XHRmaWx0ZXJDb250YWluZXIgPSB0aGlzLmZpbHRlck1hbmFnZXJGYWN0b3J5LmNyZWF0ZShmYWxzZSksXG5cdFx0XHRmaWVsZENvbnRhaW5lciA9IHRoaXMuZmllbGRDb2xsZWN0aW9uRmFjdG9yeS5jcmVhdGUoKSxcblx0XHRcdHN1bW1hcmllc01hbmFnZXIgPSB0aGlzLnN1bW1hcmllc01hbmFnZXJGYWN0b3J5LmNyZWF0ZShzdHJ1Y3R1cmVJZCksXG5cdFx0XHRzZWFyY2hNYW5hZ2VyID0gdGhpcy5zZWFyY2hNYW5hZ2VyRmFjdG9yeS5jcmVhdGUoKTtcblxuXHRcdGNvbnN0IHN0cnVjdHVyZUFnZ3JlZ2F0ZSA9IG5ldyBTdHJ1Y3R1cmVBZ2dyZWdhdGUoc3RydWN0dXJlSWQsXG5cdFx0XHRwYWdpbmcsXG5cdFx0XHRmb3JtYXRpb25BZ2dyZWdhdGUsXG5cdFx0XHRzb3VyY2UsXG5cdFx0XHR2ZXJ0aWNhbEZvcm1hdGlvbixcblx0XHRcdHN1bW1hcmllc01hbmFnZXIsXG5cdFx0XHRzb3J0ZXJDb250YWluZXIsXG5cdFx0XHRmaWx0ZXJDb250YWluZXIsXG5cdFx0XHRzZWFyY2hNYW5hZ2VyLFxuXHRcdFx0ZmllbGRDb250YWluZXJcblx0XHQpO1xuXG5cdFx0dGhpcy5pbml0KHN0cnVjdHVyZUFnZ3JlZ2F0ZSk7XG5cblx0XHRyZXR1cm4gc3RydWN0dXJlQWdncmVnYXRlO1xuXHR9XG5cblx0aW5pdChzdHJ1Y3R1cmVBZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSk6IHZvaWQge1xuXHRcdHN0cnVjdHVyZUFnZ3JlZ2F0ZS5pbml0KCk7XG5cdH1cblxufVxuIl19