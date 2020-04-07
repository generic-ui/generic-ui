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
import { AggregationManagerFactory } from './aggregation/aggregation.manager.factory';
import { FilterManagerFactory } from './filter/filter.manager-factory';
import { FieldCollectionFactory } from './field/field-collection.factory';
import { StructureAggregate } from './structure.aggregate';
import { SorterCollection } from './sort/sorter.collection';
import { FormationAggregateFactory } from '../formation/formation.aggregate-factory';
import { SearchManagerFactory } from './search/search.manager-factory';
var StructureAggregateFactory = /** @class */ (function (_super) {
    tslib_1.__extends(StructureAggregateFactory, _super);
    function StructureAggregateFactory(pagingAggregateFactory, sourceManagerFactory, formationAggregateFactory, verticalFormationFactory, aggregationManagerFactory, filterManagerFactory, searchManagerFactory, fieldCollectionFactory) {
        var _this = _super.call(this) || this;
        _this.pagingAggregateFactory = pagingAggregateFactory;
        _this.sourceManagerFactory = sourceManagerFactory;
        _this.formationAggregateFactory = formationAggregateFactory;
        _this.verticalFormationFactory = verticalFormationFactory;
        _this.aggregationManagerFactory = aggregationManagerFactory;
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
        var aggregationManager = this.aggregationManagerFactory.create(structureId);
        /** @type {?} */
        var searchManager = this.searchManagerFactory.create();
        /** @type {?} */
        var structureAggregate = new StructureAggregate(structureId, paging, formationAggregate, source, verticalFormation, aggregationManager, sorterContainer, filterContainer, searchManager, fieldContainer);
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
        { type: AggregationManagerFactory },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0ZS1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvc3RydWN0dXJlLmFnZ3JlZ2F0ZS1mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMzRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUUxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNyRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUd2RTtJQUMrQyxxREFBaUQ7SUFFL0YsbUNBQTZCLHNCQUE0QyxFQUNyRCxvQkFBMEMsRUFDMUMseUJBQW9ELEVBQ3BELHdCQUFrRCxFQUNsRCx5QkFBb0QsRUFDcEQsb0JBQTBDLEVBQzFDLG9CQUEwQyxFQUMxQyxzQkFBOEM7UUFQbEUsWUFRQyxpQkFBTyxTQUNQO1FBVDRCLDRCQUFzQixHQUF0QixzQkFBc0IsQ0FBc0I7UUFDckQsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQywrQkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBQ3BELDhCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsK0JBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQUNwRCwwQkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsNEJBQXNCLEdBQXRCLHNCQUFzQixDQUF3Qjs7SUFFbEUsQ0FBQzs7Ozs7SUFFRCwwQ0FBTTs7OztJQUFOLFVBQU8sV0FBd0I7O1lBRXhCLE1BQU0sR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsYUFBYSxFQUFFOztZQUN6RCxNQUFNLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsRUFBRTs7WUFDbEQsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sRUFBRTs7WUFDMUQsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sRUFBRTs7WUFFdkQsZUFBZSxHQUFxQixJQUFJLGdCQUFnQixFQUFFOztZQUMvRCxlQUFlLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7O1lBQ3pELGNBQWMsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxFQUFFOztZQUNyRCxrQkFBa0IsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQzs7WUFDdkUsYUFBYSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUU7O1lBRTdDLGtCQUFrQixHQUFHLElBQUksa0JBQWtCLENBQUMsV0FBVyxFQUM1RCxNQUFNLEVBQ04sa0JBQWtCLEVBQ2xCLE1BQU0sRUFDTixpQkFBaUIsRUFDakIsa0JBQWtCLEVBQ2xCLGVBQWUsRUFDZixlQUFlLEVBQ2YsYUFBYSxFQUNiLGNBQWMsQ0FDZDtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUU5QixPQUFPLGtCQUFrQixDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsd0NBQUk7Ozs7SUFBSixVQUFLLGtCQUFzQztRQUMxQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDOztnQkE5Q0QsVUFBVTs7OztnQkFiRixvQkFBb0I7Z0JBQ3BCLG9CQUFvQjtnQkFRcEIseUJBQXlCO2dCQVB6Qix3QkFBd0I7Z0JBQ3hCLHlCQUF5QjtnQkFDekIsb0JBQW9CO2dCQU1wQixvQkFBb0I7Z0JBTHBCLHNCQUFzQjs7SUF3RC9CLGdDQUFDO0NBQUEsQUFoREQsQ0FDK0MsZ0JBQWdCLEdBK0M5RDtTQS9DWSx5QkFBeUI7Ozs7OztJQUV6QiwyREFBNkQ7Ozs7O0lBQ3RFLHlEQUEyRDs7Ozs7SUFDM0QsOERBQXFFOzs7OztJQUNyRSw2REFBbUU7Ozs7O0lBQ25FLDhEQUFxRTs7Ozs7SUFDckUseURBQTJEOzs7OztJQUMzRCx5REFBMkQ7Ozs7O0lBQzNELDJEQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFBhZ2luZ01hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi4vcGFnaW5nL3BhZ2luZy5tYW5hZ2VyLWZhY3RvcnknO1xuaW1wb3J0IHsgU291cmNlTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuLi9zb3VyY2Uvc291cmNlLm1hbmFnZXItZmFjdG9yeSc7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbkZhY3RvcnkgfSBmcm9tICcuL3ZlcnRpY2FsLWZvcm1hdGlvbi92ZXJ0aWNhbC1mb3JtYXRpb24uZmFjdG9yeSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGlvbk1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi9hZ2dyZWdhdGlvbi9hZ2dyZWdhdGlvbi5tYW5hZ2VyLmZhY3RvcnknO1xuaW1wb3J0IHsgRmlsdGVyTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuL2ZpbHRlci9maWx0ZXIubWFuYWdlci1mYWN0b3J5JztcbmltcG9ydCB7IEZpZWxkQ29sbGVjdGlvbkZhY3RvcnkgfSBmcm9tICcuL2ZpZWxkL2ZpZWxkLWNvbGxlY3Rpb24uZmFjdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgU29ydGVyQ29sbGVjdGlvbiB9IGZyb20gJy4vc29ydC9zb3J0ZXIuY29sbGVjdGlvbic7XG5pbXBvcnQgeyBGb3JtYXRpb25BZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnLi4vZm9ybWF0aW9uL2Zvcm1hdGlvbi5hZ2dyZWdhdGUtZmFjdG9yeSc7XG5pbXBvcnQgeyBTZWFyY2hNYW5hZ2VyRmFjdG9yeSB9IGZyb20gJy4vc2VhcmNoL3NlYXJjaC5tYW5hZ2VyLWZhY3RvcnknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVBZ2dyZWdhdGVGYWN0b3J5IGV4dGVuZHMgQWdncmVnYXRlRmFjdG9yeTxTdHJ1Y3R1cmVJZCwgU3RydWN0dXJlQWdncmVnYXRlPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBwYWdpbmdBZ2dyZWdhdGVGYWN0b3J5OiBQYWdpbmdNYW5hZ2VyRmFjdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VNYW5hZ2VyRmFjdG9yeTogU291cmNlTWFuYWdlckZhY3RvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uQWdncmVnYXRlRmFjdG9yeTogRm9ybWF0aW9uQWdncmVnYXRlRmFjdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB2ZXJ0aWNhbEZvcm1hdGlvbkZhY3Rvcnk6IFZlcnRpY2FsRm9ybWF0aW9uRmFjdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhZ2dyZWdhdGlvbk1hbmFnZXJGYWN0b3J5OiBBZ2dyZWdhdGlvbk1hbmFnZXJGYWN0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlck1hbmFnZXJGYWN0b3J5OiBGaWx0ZXJNYW5hZ2VyRmFjdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWFyY2hNYW5hZ2VyRmFjdG9yeTogU2VhcmNoTWFuYWdlckZhY3RvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmllbGRDb2xsZWN0aW9uRmFjdG9yeTogRmllbGRDb2xsZWN0aW9uRmFjdG9yeSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRjcmVhdGUoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogU3RydWN0dXJlQWdncmVnYXRlIHtcblxuXHRcdGNvbnN0IHBhZ2luZyA9IHRoaXMucGFnaW5nQWdncmVnYXRlRmFjdG9yeS5jcmVhdGVEZWZhdWx0KCksXG5cdFx0XHRzb3VyY2UgPSB0aGlzLnNvdXJjZU1hbmFnZXJGYWN0b3J5LmNyZWF0ZURlZmF1bHQoKSxcblx0XHRcdHZlcnRpY2FsRm9ybWF0aW9uID0gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvbkZhY3RvcnkuY3JlYXRlKCksXG5cdFx0XHRmb3JtYXRpb25BZ2dyZWdhdGUgPSB0aGlzLmZvcm1hdGlvbkFnZ3JlZ2F0ZUZhY3RvcnkuY3JlYXRlKCk7XG5cblx0XHRjb25zdCBzb3J0ZXJDb250YWluZXI6IFNvcnRlckNvbGxlY3Rpb24gPSBuZXcgU29ydGVyQ29sbGVjdGlvbigpLFxuXHRcdFx0ZmlsdGVyQ29udGFpbmVyID0gdGhpcy5maWx0ZXJNYW5hZ2VyRmFjdG9yeS5jcmVhdGUoZmFsc2UpLFxuXHRcdFx0ZmllbGRDb250YWluZXIgPSB0aGlzLmZpZWxkQ29sbGVjdGlvbkZhY3RvcnkuY3JlYXRlKCksXG5cdFx0XHRhZ2dyZWdhdGlvbk1hbmFnZXIgPSB0aGlzLmFnZ3JlZ2F0aW9uTWFuYWdlckZhY3RvcnkuY3JlYXRlKHN0cnVjdHVyZUlkKSxcblx0XHRcdHNlYXJjaE1hbmFnZXIgPSB0aGlzLnNlYXJjaE1hbmFnZXJGYWN0b3J5LmNyZWF0ZSgpO1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlQWdncmVnYXRlID0gbmV3IFN0cnVjdHVyZUFnZ3JlZ2F0ZShzdHJ1Y3R1cmVJZCxcblx0XHRcdHBhZ2luZyxcblx0XHRcdGZvcm1hdGlvbkFnZ3JlZ2F0ZSxcblx0XHRcdHNvdXJjZSxcblx0XHRcdHZlcnRpY2FsRm9ybWF0aW9uLFxuXHRcdFx0YWdncmVnYXRpb25NYW5hZ2VyLFxuXHRcdFx0c29ydGVyQ29udGFpbmVyLFxuXHRcdFx0ZmlsdGVyQ29udGFpbmVyLFxuXHRcdFx0c2VhcmNoTWFuYWdlcixcblx0XHRcdGZpZWxkQ29udGFpbmVyXG5cdFx0KTtcblxuXHRcdHRoaXMuaW5pdChzdHJ1Y3R1cmVBZ2dyZWdhdGUpO1xuXG5cdFx0cmV0dXJuIHN0cnVjdHVyZUFnZ3JlZ2F0ZTtcblx0fVxuXG5cdGluaXQoc3RydWN0dXJlQWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUpOiB2b2lkIHtcblx0XHRzdHJ1Y3R1cmVBZ2dyZWdhdGUuaW5pdCgpO1xuXHR9XG5cbn1cbiJdfQ==