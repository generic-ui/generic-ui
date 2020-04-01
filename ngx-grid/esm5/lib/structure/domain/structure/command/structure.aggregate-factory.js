/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
import { AggregateFactory } from '@generic-ui/hermes';
var StructureAggregateFactory = /** @class */ (function (_super) {
    tslib_1.__extends(StructureAggregateFactory, _super);
    function StructureAggregateFactory(pagingAggregateFactory, sourceManagerFactory, formationAggregateFactory, verticalFormationFactory, aggregationManagerFactory, filterManagerFactory, searchManagerFactory, fieldCollectionFactory, schemaAggregateFactory) {
        var _this = _super.call(this) || this;
        _this.pagingAggregateFactory = pagingAggregateFactory;
        _this.sourceManagerFactory = sourceManagerFactory;
        _this.formationAggregateFactory = formationAggregateFactory;
        _this.verticalFormationFactory = verticalFormationFactory;
        _this.aggregationManagerFactory = aggregationManagerFactory;
        _this.filterManagerFactory = filterManagerFactory;
        _this.searchManagerFactory = searchManagerFactory;
        _this.fieldCollectionFactory = fieldCollectionFactory;
        _this.schemaAggregateFactory = schemaAggregateFactory;
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
        var schema = this.schemaAggregateFactory.create();
        /** @type {?} */
        var searchManager = this.searchManagerFactory.create();
        /** @type {?} */
        var structureAggregate = new StructureAggregate(structureId, paging, formationAggregate, source, verticalFormation, aggregationManager, sorterContainer, filterContainer, searchManager, fieldContainer, schema);
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
    /**
     * @type {?}
     * @private
     */
    StructureAggregateFactory.prototype.schemaAggregateFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0ZS1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9zdHJ1Y3R1cmUuYWdncmVnYXRlLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRTFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3REO0lBQytDLHFEQUFvQztJQUVsRixtQ0FBNkIsc0JBQThDLEVBQ3ZELG9CQUEwQyxFQUMxQyx5QkFBb0QsRUFDcEQsd0JBQWtELEVBQ2xELHlCQUFvRCxFQUNwRCxvQkFBMEMsRUFDMUMsb0JBQTBDLEVBQzFDLHNCQUE4QyxFQUM5QyxzQkFBOEM7UUFSbEUsWUFTQyxpQkFBTyxTQUNQO1FBVjRCLDRCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDdkQsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQywrQkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBQ3BELDhCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsK0JBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQUNwRCwwQkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsNEJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUM5Qyw0QkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCOztJQUVsRSxDQUFDOzs7OztJQUVELDBDQUFNOzs7O0lBQU4sVUFBTyxXQUF3Qjs7WUFFeEIsTUFBTSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLEVBQUU7O1lBQ3pELE1BQU0sR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxFQUFFOztZQUNsRCxpQkFBaUIsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxFQUFFOztZQUMxRCxrQkFBa0IsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxFQUFFOztZQUV2RCxlQUFlLEdBQXFCLElBQUksZ0JBQWdCLEVBQUU7O1lBQy9ELGVBQWUsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQzs7WUFDekQsY0FBYyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLEVBQUU7O1lBQ3JELGtCQUFrQixHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDOztZQUN2RSxNQUFNLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sRUFBRTs7WUFDN0MsYUFBYSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUU7O1lBRTdDLGtCQUFrQixHQUFHLElBQUksa0JBQWtCLENBQUMsV0FBVyxFQUM1RCxNQUFNLEVBQ04sa0JBQWtCLEVBQ2xCLE1BQU0sRUFDTixpQkFBaUIsRUFDakIsa0JBQWtCLEVBQ2xCLGVBQWUsRUFDZixlQUFlLEVBQ2YsYUFBYSxFQUNiLGNBQWMsRUFDZCxNQUFNLENBQ047UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFOUIsT0FBTyxrQkFBa0IsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELHdDQUFJOzs7O0lBQUosVUFBSyxrQkFBc0M7UUFDMUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Z0JBakRELFVBQVU7Ozs7Z0JBZkYsc0JBQXNCO2dCQUN0QixvQkFBb0I7Z0JBU3BCLHlCQUF5QjtnQkFSekIsd0JBQXdCO2dCQUN4Qix5QkFBeUI7Z0JBQ3pCLG9CQUFvQjtnQkFPcEIsb0JBQW9CO2dCQU5wQixzQkFBc0I7Z0JBSXRCLHNCQUFzQjs7SUF5RC9CLGdDQUFDO0NBQUEsQUFuREQsQ0FDK0MsZ0JBQWdCLEdBa0Q5RDtTQWxEWSx5QkFBeUI7Ozs7OztJQUV6QiwyREFBK0Q7Ozs7O0lBQ3hFLHlEQUEyRDs7Ozs7SUFDM0QsOERBQXFFOzs7OztJQUNyRSw2REFBbUU7Ozs7O0lBQ25FLDhEQUFxRTs7Ozs7SUFDckUseURBQTJEOzs7OztJQUMzRCx5REFBMkQ7Ozs7O0lBQzNELDJEQUErRDs7Ozs7SUFDL0QsMkRBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQYWdpbmdBZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnLi4vLi4vcGFnaW5nL2NvbW1hbmQvcGFnaW5nLmFnZ3JlZ2F0ZS1mYWN0b3J5JztcbmltcG9ydCB7IFNvdXJjZU1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi4vLi4vc291cmNlL2NvbW1hbmQvc291cmNlLm1hbmFnZXItZmFjdG9yeSc7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbkZhY3RvcnkgfSBmcm9tICcuL3ZlcnRpY2FsLWZvcm1hdGlvbi92ZXJ0aWNhbC1mb3JtYXRpb24uZmFjdG9yeSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGlvbk1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi9hZ2dyZWdhdGlvbi9hZ2dyZWdhdGlvbi5tYW5hZ2VyLmZhY3RvcnknO1xuaW1wb3J0IHsgRmlsdGVyTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuL2ZpbHRlci9maWx0ZXIubWFuYWdlci1mYWN0b3J5JztcbmltcG9ydCB7IEZpZWxkQ29sbGVjdGlvbkZhY3RvcnkgfSBmcm9tICcuL2ZpZWxkL2ZpZWxkLWNvbGxlY3Rpb24uZmFjdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgU29ydGVyQ29sbGVjdGlvbiB9IGZyb20gJy4vc29ydC9zb3J0ZXIuY29sbGVjdGlvbic7XG5pbXBvcnQgeyBTY2hlbWFBZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnLi4vLi4vc2NoZW1hL2NvbW1hbmQvc2NoZW1hLmFnZ3JlZ2F0ZS1mYWN0b3J5JztcbmltcG9ydCB7IEZvcm1hdGlvbkFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuLi8uLi9mb3JtYXRpb24vY29tbWFuZC9mb3JtYXRpb24uYWdncmVnYXRlLWZhY3RvcnknO1xuaW1wb3J0IHsgU2VhcmNoTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuL3NlYXJjaC9zZWFyY2gubWFuYWdlci1mYWN0b3J5JztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVBZ2dyZWdhdGVGYWN0b3J5IGV4dGVuZHMgQWdncmVnYXRlRmFjdG9yeTxTdHJ1Y3R1cmVBZ2dyZWdhdGU+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHBhZ2luZ0FnZ3JlZ2F0ZUZhY3Rvcnk6IFBhZ2luZ0FnZ3JlZ2F0ZUZhY3RvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlTWFuYWdlckZhY3Rvcnk6IFNvdXJjZU1hbmFnZXJGYWN0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbkFnZ3JlZ2F0ZUZhY3Rvcnk6IEZvcm1hdGlvbkFnZ3JlZ2F0ZUZhY3RvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdmVydGljYWxGb3JtYXRpb25GYWN0b3J5OiBWZXJ0aWNhbEZvcm1hdGlvbkZhY3RvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWdncmVnYXRpb25NYW5hZ2VyRmFjdG9yeTogQWdncmVnYXRpb25NYW5hZ2VyRmFjdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJNYW5hZ2VyRmFjdG9yeTogRmlsdGVyTWFuYWdlckZhY3RvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoTWFuYWdlckZhY3Rvcnk6IFNlYXJjaE1hbmFnZXJGYWN0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkQ29sbGVjdGlvbkZhY3Rvcnk6IEZpZWxkQ29sbGVjdGlvbkZhY3RvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hQWdncmVnYXRlRmFjdG9yeTogU2NoZW1hQWdncmVnYXRlRmFjdG9yeSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRjcmVhdGUoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogU3RydWN0dXJlQWdncmVnYXRlIHtcblxuXHRcdGNvbnN0IHBhZ2luZyA9IHRoaXMucGFnaW5nQWdncmVnYXRlRmFjdG9yeS5jcmVhdGVEZWZhdWx0KCksXG5cdFx0XHRzb3VyY2UgPSB0aGlzLnNvdXJjZU1hbmFnZXJGYWN0b3J5LmNyZWF0ZURlZmF1bHQoKSxcblx0XHRcdHZlcnRpY2FsRm9ybWF0aW9uID0gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvbkZhY3RvcnkuY3JlYXRlKCksXG5cdFx0XHRmb3JtYXRpb25BZ2dyZWdhdGUgPSB0aGlzLmZvcm1hdGlvbkFnZ3JlZ2F0ZUZhY3RvcnkuY3JlYXRlKCk7XG5cblx0XHRjb25zdCBzb3J0ZXJDb250YWluZXI6IFNvcnRlckNvbGxlY3Rpb24gPSBuZXcgU29ydGVyQ29sbGVjdGlvbigpLFxuXHRcdFx0ZmlsdGVyQ29udGFpbmVyID0gdGhpcy5maWx0ZXJNYW5hZ2VyRmFjdG9yeS5jcmVhdGUoZmFsc2UpLFxuXHRcdFx0ZmllbGRDb250YWluZXIgPSB0aGlzLmZpZWxkQ29sbGVjdGlvbkZhY3RvcnkuY3JlYXRlKCksXG5cdFx0XHRhZ2dyZWdhdGlvbk1hbmFnZXIgPSB0aGlzLmFnZ3JlZ2F0aW9uTWFuYWdlckZhY3RvcnkuY3JlYXRlKHN0cnVjdHVyZUlkKSxcblx0XHRcdHNjaGVtYSA9IHRoaXMuc2NoZW1hQWdncmVnYXRlRmFjdG9yeS5jcmVhdGUoKSxcblx0XHRcdHNlYXJjaE1hbmFnZXIgPSB0aGlzLnNlYXJjaE1hbmFnZXJGYWN0b3J5LmNyZWF0ZSgpO1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlQWdncmVnYXRlID0gbmV3IFN0cnVjdHVyZUFnZ3JlZ2F0ZShzdHJ1Y3R1cmVJZCxcblx0XHRcdHBhZ2luZyxcblx0XHRcdGZvcm1hdGlvbkFnZ3JlZ2F0ZSxcblx0XHRcdHNvdXJjZSxcblx0XHRcdHZlcnRpY2FsRm9ybWF0aW9uLFxuXHRcdFx0YWdncmVnYXRpb25NYW5hZ2VyLFxuXHRcdFx0c29ydGVyQ29udGFpbmVyLFxuXHRcdFx0ZmlsdGVyQ29udGFpbmVyLFxuXHRcdFx0c2VhcmNoTWFuYWdlcixcblx0XHRcdGZpZWxkQ29udGFpbmVyLFxuXHRcdFx0c2NoZW1hXG5cdFx0KTtcblxuXHRcdHRoaXMuaW5pdChzdHJ1Y3R1cmVBZ2dyZWdhdGUpO1xuXG5cdFx0cmV0dXJuIHN0cnVjdHVyZUFnZ3JlZ2F0ZTtcblx0fVxuXG5cdGluaXQoc3RydWN0dXJlQWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUpOiB2b2lkIHtcblx0XHRzdHJ1Y3R1cmVBZ2dyZWdhdGUuaW5pdCgpO1xuXHR9XG5cbn1cbiJdfQ==