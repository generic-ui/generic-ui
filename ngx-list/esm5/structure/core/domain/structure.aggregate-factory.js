/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var StructureAggregateFactory = /** @class */ (function (_super) {
    tslib_1.__extends(StructureAggregateFactory, _super);
    function StructureAggregateFactory(pagingAggregateFactory, sourceManagerFactory, verticalFormationFactory, summariesManagerFactory, filterManagerFactory, searchManagerFactory, fieldCollectionFactory) {
        var _this = _super.call(this) || this;
        _this.pagingAggregateFactory = pagingAggregateFactory;
        _this.sourceManagerFactory = sourceManagerFactory;
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
        var structureAggregate = new StructureAggregate(structureId, paging, source, verticalFormation, summariesManager, sorterContainer, filterContainer, new UniqueFilterManager(), searchManager, fieldContainer);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0ZS1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvY29yZS9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZS1mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN2RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUUxRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUd2RjtJQUMrQyxxREFBaUQ7SUFFL0YsbUNBQTZCLHNCQUE0QyxFQUNyRCxvQkFBMEMsRUFDMUMsd0JBQWtELEVBQ2xELHVCQUFnRCxFQUNoRCxvQkFBMEMsRUFDMUMsb0JBQTBDLEVBQzFDLHNCQUE4QztRQU5sRSxZQU9DLGlCQUFPLFNBQ1A7UUFSNEIsNEJBQXNCLEdBQXRCLHNCQUFzQixDQUFzQjtRQUNyRCwwQkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLDhCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsNkJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCwwQkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsNEJBQXNCLEdBQXRCLHNCQUFzQixDQUF3Qjs7SUFFbEUsQ0FBQzs7Ozs7SUFFRCwwQ0FBTTs7OztJQUFOLFVBQU8sV0FBd0I7O1lBRXhCLE1BQU0sR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsYUFBYSxFQUFFOztZQUN6RCxNQUFNLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsRUFBRTs7WUFDbEQsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sRUFBRTs7WUFFckQsZUFBZSxHQUFxQixJQUFJLGdCQUFnQixFQUFFOztZQUMvRCxlQUFlLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7O1lBQ3pELGNBQWMsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxFQUFFOztZQUNyRCxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQzs7WUFDbkUsYUFBYSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUU7O1lBRTdDLGtCQUFrQixHQUFHLElBQUksa0JBQWtCLENBQUMsV0FBVyxFQUM1RCxNQUFNLEVBQ04sTUFBTSxFQUNOLGlCQUFpQixFQUNqQixnQkFBZ0IsRUFDaEIsZUFBZSxFQUNmLGVBQWUsRUFDZixJQUFJLG1CQUFtQixFQUFFLEVBQ3pCLGFBQWEsRUFDYixjQUFjLENBQ2Q7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFOUIsT0FBTyxrQkFBa0IsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELHdDQUFJOzs7O0lBQUosVUFBSyxrQkFBc0M7UUFDMUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Z0JBNUNELFVBQVU7Ozs7Z0JBYkYsb0JBQW9CO2dCQUNwQixvQkFBb0I7Z0JBQ3BCLHdCQUF3QjtnQkFDeEIsdUJBQXVCO2dCQUN2QixvQkFBb0I7Z0JBS3BCLG9CQUFvQjtnQkFKcEIsc0JBQXNCOztJQXNEL0IsZ0NBQUM7Q0FBQSxBQTlDRCxDQUMrQyxnQkFBZ0IsR0E2QzlEO1NBN0NZLHlCQUF5Qjs7Ozs7O0lBRXpCLDJEQUE2RDs7Ozs7SUFDdEUseURBQTJEOzs7OztJQUMzRCw2REFBbUU7Ozs7O0lBQ25FLDREQUFpRTs7Ozs7SUFDakUseURBQTJEOzs7OztJQUMzRCx5REFBMkQ7Ozs7O0lBQzNELDJEQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFBhZ2luZ01hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi4vLi4vcGFnaW5nL2RvbWFpbi9wYWdpbmcubWFuYWdlci1mYWN0b3J5JztcbmltcG9ydCB7IFNvdXJjZU1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi4vLi4vc291cmNlL2RvbWFpbi9jb3JlL3NvdXJjZS5tYW5hZ2VyLWZhY3RvcnknO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25GYWN0b3J5IH0gZnJvbSAnLi92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uLmZhY3RvcnknO1xuaW1wb3J0IHsgU3VtbWFyaWVzTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuL3N1bW1hcmllcy9zdW1tYXJpZXMubWFuYWdlci5mYWN0b3J5JztcbmltcG9ydCB7IEZpbHRlck1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi4vLi4vZmlsdGVyL2RvbWFpbi9maWx0ZXIubWFuYWdlci1mYWN0b3J5JztcbmltcG9ydCB7IEZpZWxkQ29sbGVjdGlvbkZhY3RvcnkgfSBmcm9tICcuLi8uLi9maWVsZC9kb21haW4vY29yZS9maWVsZC1jb2xsZWN0aW9uLmZhY3RvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgU29ydGVyQ29sbGVjdGlvbiB9IGZyb20gJy4uLy4uL3NvcnRpbmcvZG9tYWluL3NvcnRlci5jb2xsZWN0aW9uJztcbmltcG9ydCB7IFNlYXJjaE1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi4vLi4vc2VhcmNoL2RvbWFpbi9zZWFyY2gubWFuYWdlci1mYWN0b3J5JztcbmltcG9ydCB7IFVuaXF1ZUZpbHRlck1hbmFnZXIgfSBmcm9tICcuLi8uLi9maWx0ZXIvZG9tYWluL3VuaXF1ZS91bmlxdWUtZmlsdGVyLW1hbmFnZXInO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVBZ2dyZWdhdGVGYWN0b3J5IGV4dGVuZHMgQWdncmVnYXRlRmFjdG9yeTxTdHJ1Y3R1cmVJZCwgU3RydWN0dXJlQWdncmVnYXRlPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBwYWdpbmdBZ2dyZWdhdGVGYWN0b3J5OiBQYWdpbmdNYW5hZ2VyRmFjdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VNYW5hZ2VyRmFjdG9yeTogU291cmNlTWFuYWdlckZhY3RvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdmVydGljYWxGb3JtYXRpb25GYWN0b3J5OiBWZXJ0aWNhbEZvcm1hdGlvbkZhY3RvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3VtbWFyaWVzTWFuYWdlckZhY3Rvcnk6IFN1bW1hcmllc01hbmFnZXJGYWN0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlck1hbmFnZXJGYWN0b3J5OiBGaWx0ZXJNYW5hZ2VyRmFjdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWFyY2hNYW5hZ2VyRmFjdG9yeTogU2VhcmNoTWFuYWdlckZhY3RvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmllbGRDb2xsZWN0aW9uRmFjdG9yeTogRmllbGRDb2xsZWN0aW9uRmFjdG9yeSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRjcmVhdGUoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogU3RydWN0dXJlQWdncmVnYXRlIHtcblxuXHRcdGNvbnN0IHBhZ2luZyA9IHRoaXMucGFnaW5nQWdncmVnYXRlRmFjdG9yeS5jcmVhdGVEZWZhdWx0KCksXG5cdFx0XHRzb3VyY2UgPSB0aGlzLnNvdXJjZU1hbmFnZXJGYWN0b3J5LmNyZWF0ZURlZmF1bHQoKSxcblx0XHRcdHZlcnRpY2FsRm9ybWF0aW9uID0gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvbkZhY3RvcnkuY3JlYXRlKCk7XG5cblx0XHRjb25zdCBzb3J0ZXJDb250YWluZXI6IFNvcnRlckNvbGxlY3Rpb24gPSBuZXcgU29ydGVyQ29sbGVjdGlvbigpLFxuXHRcdFx0ZmlsdGVyQ29udGFpbmVyID0gdGhpcy5maWx0ZXJNYW5hZ2VyRmFjdG9yeS5jcmVhdGUoZmFsc2UpLFxuXHRcdFx0ZmllbGRDb250YWluZXIgPSB0aGlzLmZpZWxkQ29sbGVjdGlvbkZhY3RvcnkuY3JlYXRlKCksXG5cdFx0XHRzdW1tYXJpZXNNYW5hZ2VyID0gdGhpcy5zdW1tYXJpZXNNYW5hZ2VyRmFjdG9yeS5jcmVhdGUoc3RydWN0dXJlSWQpLFxuXHRcdFx0c2VhcmNoTWFuYWdlciA9IHRoaXMuc2VhcmNoTWFuYWdlckZhY3RvcnkuY3JlYXRlKCk7XG5cblx0XHRjb25zdCBzdHJ1Y3R1cmVBZ2dyZWdhdGUgPSBuZXcgU3RydWN0dXJlQWdncmVnYXRlKHN0cnVjdHVyZUlkLFxuXHRcdFx0cGFnaW5nLFxuXHRcdFx0c291cmNlLFxuXHRcdFx0dmVydGljYWxGb3JtYXRpb24sXG5cdFx0XHRzdW1tYXJpZXNNYW5hZ2VyLFxuXHRcdFx0c29ydGVyQ29udGFpbmVyLFxuXHRcdFx0ZmlsdGVyQ29udGFpbmVyLFxuXHRcdFx0bmV3IFVuaXF1ZUZpbHRlck1hbmFnZXIoKSxcblx0XHRcdHNlYXJjaE1hbmFnZXIsXG5cdFx0XHRmaWVsZENvbnRhaW5lclxuXHRcdCk7XG5cblx0XHR0aGlzLmluaXQoc3RydWN0dXJlQWdncmVnYXRlKTtcblxuXHRcdHJldHVybiBzdHJ1Y3R1cmVBZ2dyZWdhdGU7XG5cdH1cblxuXHRpbml0KHN0cnVjdHVyZUFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlKTogdm9pZCB7XG5cdFx0c3RydWN0dXJlQWdncmVnYXRlLmluaXQoKTtcblx0fVxuXG59XG4iXX0=