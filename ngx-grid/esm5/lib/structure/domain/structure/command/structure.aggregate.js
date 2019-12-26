/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Aggregate, RootAggregate } from '@generic-ui/hermes';
import { PagingAggregate } from '../../paging/command/paging.aggregate';
import { SourceManager } from '../../source/command/source.manager';
import { VerticalFormation } from './vertical-formation/vertical-formation';
import { AggregationManager } from './aggregation/aggregation.manager';
import { SorterCollection } from './sort/sorter.collection';
import { FilterCollection } from './filter/filter.collection';
import { FieldCollection } from './field/field.collection';
import { FormationAggregate } from '../../formation/command/formation-aggregate';
import { SchemaAggregate } from '../../schema/command/schema-aggregate';
import { StructureId } from '../../structure-id';
var StructureAggregate = /** @class */ (function (_super) {
    tslib_1.__extends(StructureAggregate, _super);
    function StructureAggregate(structureId, paging, formationAggregate, sourceManager, verticalFormation, aggregationManager, sorterCollection, filterCollection, fieldCollection, schema) {
        var _this = _super.call(this, structureId) || this;
        _this.search = false;
        _this.quickFilters = false;
        _this.paging = paging;
        _this.formationAggregate = formationAggregate;
        _this.sourceManager = sourceManager;
        _this.verticalFormation = verticalFormation;
        _this.aggregationManager = aggregationManager;
        _this.sorterCollection = sorterCollection;
        _this.filterCollection = filterCollection;
        _this.fieldCollection = fieldCollection;
        _this.schema = schema;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureAggregate.prototype.getVerticalFormation = /**
     * @return {?}
     */
    function () {
        return this.verticalFormation;
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    StructureAggregate.prototype.setAggregationEnabled = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.aggregationManager.setEnabled(enabled);
        this.calculateSource();
        return this.getEvents();
    };
    /**
     * @param {?} items
     * @return {?}
     */
    StructureAggregate.prototype.setOrigin = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        this.addEvent(this.sourceManager.setOrigin(items, this.getId()));
        this.calculateSource();
        return this.getEvents();
    };
    /**
     * @param {?} editParams
     * @return {?}
     */
    StructureAggregate.prototype.editItem = /**
     * @param {?} editParams
     * @return {?}
     */
    function (editParams) {
        var _this = this;
        /** @type {?} */
        var itemId = editParams.getItemId();
        /** @type {?} */
        var fieldId = editParams.getColumnFieldId();
        /** @type {?} */
        var field = this.fieldCollection.getField((/** @type {?} */ (fieldId)));
        /** @type {?} */
        var // as FieldId
        value = editParams.getValue();
        /** @type {?} */
        var editItemEvents = this.sourceManager.editOriginItem(itemId, value, field, this.getId());
        editItemEvents.forEach((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return _this.addEvent(e); }));
        this.calculateSource();
        return this.getEvents();
    };
    /**
     * @param {?} height
     * @return {?}
     */
    StructureAggregate.prototype.setHeight = /**
     * @param {?} height
     * @return {?}
     */
    function (height) {
        this.getSchema().setHeight(height);
        /** @type {?} */
        var viewportHeight = this.getSchema().getContainerHeight();
        this.verticalFormation.setViewportHeight(viewportHeight);
        this.calculateSourceBasedOnVirtualScroll();
    };
    /**
     * @param {?} formation
     * @return {?}
     */
    StructureAggregate.prototype.setFormation = /**
     * @param {?} formation
     * @return {?}
     */
    function (formation) {
        this.formationAggregate = formation;
    };
    /**
     * @param {?} position
     * @return {?}
     */
    StructureAggregate.prototype.setScrollPosition = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        this.verticalFormation.setScrollPosition(position);
        this.calculateSourceBasedOnVirtualScroll();
    };
    /**
     * @return {?}
     */
    StructureAggregate.prototype.getFormation = /**
     * @return {?}
     */
    function () {
        return this.formationAggregate;
    };
    /**
     * @param {?} schema
     * @return {?}
     */
    StructureAggregate.prototype.setSchema = /**
     * @param {?} schema
     * @return {?}
     */
    function (schema) {
        this.schema = schema;
    };
    /**
     * @return {?}
     */
    StructureAggregate.prototype.getSchema = /**
     * @return {?}
     */
    function () {
        return this.schema;
    };
    /**
     * @return {?}
     */
    StructureAggregate.prototype.getPaging = /**
     * @return {?}
     */
    function () {
        return this.paging;
    };
    /**
     * @param {?} config
     * @return {?}
     */
    StructureAggregate.prototype.changePaging = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.paging.change(config);
        this.calculateSource();
    };
    /**
     * @param {?} paging
     * @return {?}
     */
    StructureAggregate.prototype.setPaging = /**
     * @param {?} paging
     * @return {?}
     */
    function (paging) {
        this.paging = paging;
        this.calculateSource();
    };
    /**
     * @return {?}
     */
    StructureAggregate.prototype.nextPage = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var sourceSize = this.sourceManager.getOriginSize();
        this.paging.nextPage(sourceSize);
        this.calculateSource();
    };
    /**
     * @return {?}
     */
    StructureAggregate.prototype.prevPage = /**
     * @return {?}
     */
    function () {
        this.paging.prevPage();
        this.calculateSource();
    };
    /**
     * @param {?} pageSize
     * @return {?}
     */
    StructureAggregate.prototype.changePageSize = /**
     * @param {?} pageSize
     * @return {?}
     */
    function (pageSize) {
        var _this = this;
        /** @type {?} */
        var pagingEvents = this.paging.changePageSize(pageSize);
        // TODO
        pagingEvents.forEach((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.addEvent(event);
        }));
        this.calculateSource();
        return this.getEvents();
    };
    /**
     * @return {?}
     */
    StructureAggregate.prototype.getEntities = /**
     * @return {?}
     */
    function () {
        return this.sourceManager.getSlicedEntities();
    };
    /**
     * @return {?}
     */
    StructureAggregate.prototype.getSource = /**
     * @return {?}
     */
    function () {
        return this.sourceManager;
    };
    /**
     * @param {?} columns
     * @return {?}
     */
    StructureAggregate.prototype.createFields = /**
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        this.fieldCollection.initFields(columns);
        // TODO Should throw event fields created
        return this.fieldCollection.getAllFields();
    };
    /**
     * @param {?} config
     * @return {?}
     */
    StructureAggregate.prototype.setSortingConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.sorterCollection.setConfig(config);
    };
    /**
     * @param {?} fieldId
     * @return {?}
     */
    StructureAggregate.prototype.toggleSort = /**
     * @param {?} fieldId
     * @return {?}
     */
    function (fieldId) {
        /** @type {?} */
        var field = this.fieldCollection.getField(fieldId);
        this.sorterCollection.toggle(field);
        this.calculateSource();
        return this.sorterCollection.getAll();
    };
    /**
     * @param {?} config
     * @return {?}
     */
    StructureAggregate.prototype.setFilterConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.filterCollection.setConfig(config);
    };
    /**
     * @param {?} config
     * @return {?}
     */
    StructureAggregate.prototype.setQuickFiltersConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.quickFilters = config.enabled;
    };
    /**
     * @param {?} config
     * @return {?}
     */
    StructureAggregate.prototype.setSearchingConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.search = config.enabled;
    };
    /**
     * @param {?} fieldId
     * @param {?} externalFilterId
     * @param {?} filterValue
     * @return {?}
     */
    StructureAggregate.prototype.toggleFilter = /**
     * @param {?} fieldId
     * @param {?} externalFilterId
     * @param {?} filterValue
     * @return {?}
     */
    function (fieldId, externalFilterId, filterValue) {
        /** @type {?} */
        var field = this.fieldCollection.getField(fieldId);
        // Field not found
        // TODO throw aggregate event
        if (field === undefined) {
            return [];
        }
        this.filterCollection.addFilter(field, externalFilterId, filterValue);
        this.calculateSource();
        return [];
    };
    /**
     * @private
     * @return {?}
     */
    StructureAggregate.prototype.calculateSource = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.sourceManager.getOrigin() || !this.paging) {
            return;
        }
        // TODO Refactor
        this.sourceManager.setEntities(this.sourceManager.getOrigin());
        // aggregations
        /** @type {?} */
        var aggregationEvents = this.aggregationManager.calculate(this.fieldCollection.getAllFields(), this.sourceManager.getEntities());
        aggregationEvents.forEach((/**
         * @param {?} ae
         * @return {?}
         */
        function (ae) {
            _this.addEvent(ae);
        }));
        // filtering
        this.sourceManager.setEntities(this.filterCollection.filter(this.sourceManager.getEntities()));
        // search
        // sorting
        this.sourceManager.setEntities(this.sorterCollection.sort(this.sourceManager.getEntities()));
        // paging
        this.sourceManager.setEntities(this.paging.sample(this.sourceManager.getEntities()));
        this.verticalFormation.setSourceSize(this.sourceManager.getEntities().length);
        this.calculateSourceBasedOnVirtualScroll();
    };
    /**
     * @private
     * @return {?}
     */
    StructureAggregate.prototype.calculateSourceBasedOnVirtualScroll = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.verticalFormation.isEnabled()) {
            /** @type {?} */
            var range = this.verticalFormation.getRange();
            this.sourceManager.setSlicedEntities(this.sourceManager.getEntities().slice(range.getStart(), range.getEnd()));
        }
        else {
            this.sourceManager.setSlicedEntities(this.sourceManager.getEntities());
        }
    };
    StructureAggregate.ctorParameters = function () { return [
        { type: StructureId },
        { type: PagingAggregate },
        { type: FormationAggregate },
        { type: SourceManager },
        { type: VerticalFormation },
        { type: AggregationManager },
        { type: SorterCollection },
        { type: FilterCollection },
        { type: FieldCollection },
        { type: SchemaAggregate }
    ]; };
    StructureAggregate = tslib_1.__decorate([
        RootAggregate,
        tslib_1.__metadata("design:paramtypes", [StructureId,
            PagingAggregate,
            FormationAggregate,
            SourceManager,
            VerticalFormation,
            AggregationManager,
            SorterCollection,
            FilterCollection,
            FieldCollection,
            SchemaAggregate])
    ], StructureAggregate);
    return StructureAggregate;
}(Aggregate));
export { StructureAggregate };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureAggregate.prototype.formationAggregate;
    /**
     * @type {?}
     * @private
     */
    StructureAggregate.prototype.schema;
    /**
     * @type {?}
     * @private
     */
    StructureAggregate.prototype.paging;
    /**
     * @type {?}
     * @private
     */
    StructureAggregate.prototype.sourceManager;
    /**
     * @type {?}
     * @private
     */
    StructureAggregate.prototype.sorterCollection;
    /**
     * @type {?}
     * @private
     */
    StructureAggregate.prototype.filterCollection;
    /**
     * @type {?}
     * @private
     */
    StructureAggregate.prototype.verticalFormation;
    /**
     * @type {?}
     * @private
     */
    StructureAggregate.prototype.fieldCollection;
    /**
     * @type {?}
     * @private
     */
    StructureAggregate.prototype.aggregationManager;
    /**
     * @type {?}
     * @private
     */
    StructureAggregate.prototype.search;
    /**
     * @type {?}
     * @private
     */
    StructureAggregate.prototype.quickFilters;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc3RydWN0dXJlLmFnZ3JlZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQStCLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTNGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0lBY1QsOENBQVM7SUF3QmhELDRCQUFZLFdBQXdCLEVBQ2pDLE1BQXVCLEVBQ3ZCLGtCQUFzQyxFQUN0QyxhQUE0QixFQUM1QixpQkFBb0MsRUFDcEMsa0JBQXNDLEVBQ3RDLGdCQUFrQyxFQUNsQyxnQkFBa0MsRUFDbEMsZUFBZ0MsRUFDaEMsTUFBdUI7UUFUMUIsWUFVQyxrQkFBTSxXQUFXLENBQUMsU0FVbEI7UUF4Qk8sWUFBTSxHQUFZLEtBQUssQ0FBQztRQUV4QixrQkFBWSxH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QVcsRUFBRSxDQUNoQyxDQUFDO1NBQ0Y7SUFDRixDQUFDOztnQkFuUHdCLFdBQVc7Z0JBQ3pCLGVBQWU7Z0JBQ0gsa0JBQWtCO2dCQUN2QixhQUFhO2dCQUNULGlCQUFpQjtnQkFDaEIsa0JBQWtCO2dCQUNwQixnQkFBZ0I7Z0JBQ2hCLGdCQUFnQjtnQkFDakIsZUFBZTtnQkFDeEIsZUFBZTs7SUFqQ2Qsa0JBQWtCO1FBRDlCLGFBQWE7aURBeUJZLFdBQVc7WUFDekIsZUFBZTtZQUNILGtCQUFrQjtZQUN2QixhQUFhO1lBQ1QsaUJBQWlCO1lBQ2hCLGtCQUFrQjtZQUNwQixnQkFBZ0I7WUFDaEIsZ0JBQWdCO1lBQ2pCLGVBQWU7WUFDeEIsZUFBZTtPQWpDZCxrQkFBa0IsQ0E2UTlCO0lBQUQseUJBQUM7Q0FBQSxDQTdRdUMsU0FBUyxHQTZRaEQ7U0E3UVksa0JBQWtCOzs7Ozs7SUFFOUIsZ0RBQStDOzs7OztJQUUvQyxvQ0FBZ0M7Ozs7O0lBRWhDLG9DQUFnQzs7Ozs7SUFFaEMsMkNBQXFDOzs7OztJQUVyQyw4Q0FBMkM7Ozs7O0lBRTNDLDhDQUEyQzs7Ozs7SUFFM0MsK0NBQTZDOzs7OztJQUU3Qyw2Q0FBeUM7Ozs7O0lBRXpDLGdEQUErQzs7Ozs7SUFFL0Msb0NBQWdDOzs7OztJQUVoQywwQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGUsIEFnZ3JlZ2F0ZUV2ZW50LCBBZ2dyZWdhdGVJZCwgUm9vdEFnZ3JlZ2F0ZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFBhZ2luZ0FnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uL3BhZ2luZy9jb21tYW5kL3BhZ2luZy5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgU291cmNlTWFuYWdlciB9IGZyb20gJy4uLy4uL3NvdXJjZS9jb21tYW5kL3NvdXJjZS5tYW5hZ2VyJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uIH0gZnJvbSAnLi92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uJztcbmltcG9ydCB7IEFnZ3JlZ2F0aW9uTWFuYWdlciB9IGZyb20gJy4vYWdncmVnYXRpb24vYWdncmVnYXRpb24ubWFuYWdlcic7XG5pbXBvcnQgeyBTb3J0ZXJDb2xsZWN0aW9uIH0gZnJvbSAnLi9zb3J0L3NvcnRlci5jb2xsZWN0aW9uJztcbmltcG9ydCB7IEZpbHRlckNvbGxlY3Rpb24gfSBmcm9tICcuL2ZpbHRlci9maWx0ZXIuY29sbGVjdGlvbic7XG5pbXBvcnQgeyBGaWVsZENvbGxlY3Rpb24gfSBmcm9tICcuL2ZpZWxkL2ZpZWxkLmNvbGxlY3Rpb24nO1xuaW1wb3J0IHsgRm9ybWF0aW9uQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vZm9ybWF0aW9uL2NvbW1hbmQvZm9ybWF0aW9uLWFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBTY2hlbWFBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi9zY2hlbWEvY29tbWFuZC9zY2hlbWEtYWdncmVnYXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zIH0gZnJvbSAnLi4vLi4vc291cmNlL2NvbW1hbmQvb3JpZ2luL2VkaXQvc3RydWN0dXJlLmVkaXQtc291cmNlLWl0ZW0ucGFyYW1zJztcbmltcG9ydCB7IFBhZ2luZ0NvbmZpZyB9IGZyb20gJy4uLy4uL3BhZ2luZy9wYWdpbmctY29uZmlnJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi9zb3VyY2UvY29tbWFuZC9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IENvbHVtbkNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuL2ZpZWxkL2RhdGEtdHlwZS9maWVsZCc7XG5pbXBvcnQgeyBTb3J0aW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9zb3J0aW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi9maWVsZC9kYXRhLXR5cGUvZmllbGQuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU29ydGVyIH0gZnJvbSAnLi9zb3J0L3N0cnVjdHVyZS5zb3J0ZXInO1xuaW1wb3J0IHsgRmlsdGVyQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9maWx0ZXIvZmlsdGVyLWNvbmZpZyc7XG5pbXBvcnQgeyBRdWlja0ZpbHRlcnNDb25maWcgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlL2ZpbHRlci9xdWljay1maWx0ZXJzLmNvbmZpZyc7XG5pbXBvcnQgeyBTZWFyY2hDb25maWcgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlL3NlYXJjaC9zZWFyY2gtY29uZmlnJztcblxuQFJvb3RBZ2dyZWdhdGVcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgZXh0ZW5kcyBBZ2dyZWdhdGUge1xuXG5cdHByaXZhdGUgZm9ybWF0aW9uQWdncmVnYXRlOiBGb3JtYXRpb25BZ2dyZWdhdGU7XG5cblx0cHJpdmF0ZSBzY2hlbWE6IFNjaGVtYUFnZ3JlZ2F0ZTtcblxuXHRwcml2YXRlIHBhZ2luZzogUGFnaW5nQWdncmVnYXRlO1xuXG5cdHByaXZhdGUgc291cmNlTWFuYWdlcjogU291cmNlTWFuYWdlcjtcblxuXHRwcml2YXRlIHNvcnRlckNvbGxlY3Rpb246IFNvcnRlckNvbGxlY3Rpb247XG5cblx0cHJpdmF0ZSBmaWx0ZXJDb2xsZWN0aW9uOiBGaWx0ZXJDb2xsZWN0aW9uO1xuXG5cdHByaXZhdGUgdmVydGljYWxGb3JtYXRpb246IFZlcnRpY2FsRm9ybWF0aW9uO1xuXG5cdHByaXZhdGUgZmllbGRDb2xsZWN0aW9uOiBGaWVsZENvbGxlY3Rpb247XG5cblx0cHJpdmF0ZSBhZ2dyZWdhdGlvbk1hbmFnZXI6IEFnZ3JlZ2F0aW9uTWFuYWdlcjtcblxuXHRwcml2YXRlIHNlYXJjaDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgcXVpY2tGaWx0ZXJzOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwYWdpbmc6IFBhZ2luZ0FnZ3JlZ2F0ZSxcblx0XHRcdFx0Zm9ybWF0aW9uQWdncmVnYXRlOiBGb3JtYXRpb25BZ2dyZWdhdGUsXG5cdFx0XHRcdHNvdXJjZU1hbmFnZXI6IFNvdXJjZU1hbmFnZXIsXG5cdFx0XHRcdHZlcnRpY2FsRm9ybWF0aW9uOiBWZXJ0aWNhbEZvcm1hdGlvbixcblx0XHRcdFx0YWdncmVnYXRpb25NYW5hZ2VyOiBBZ2dyZWdhdGlvbk1hbmFnZXIsXG5cdFx0XHRcdHNvcnRlckNvbGxlY3Rpb246IFNvcnRlckNvbGxlY3Rpb24sXG5cdFx0XHRcdGZpbHRlckNvbGxlY3Rpb246IEZpbHRlckNvbGxlY3Rpb24sXG5cdFx0XHRcdGZpZWxkQ29sbGVjdGlvbjogRmllbGRDb2xsZWN0aW9uLFxuXHRcdFx0XHRzY2hlbWE6IFNjaGVtYUFnZ3JlZ2F0ZSkge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkKTtcblx0XHR0aGlzLnBhZ2luZyA9IHBhZ2luZztcblx0XHR0aGlzLmZvcm1hdGlvbkFnZ3JlZ2F0ZSA9IGZvcm1hdGlvbkFnZ3JlZ2F0ZTtcblx0XHR0aGlzLnNvdXJjZU1hbmFnZXIgPSBzb3VyY2VNYW5hZ2VyO1xuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb24gPSB2ZXJ0aWNhbEZvcm1hdGlvbjtcblx0XHR0aGlzLmFnZ3JlZ2F0aW9uTWFuYWdlciA9IGFnZ3JlZ2F0aW9uTWFuYWdlcjtcblx0XHR0aGlzLnNvcnRlckNvbGxlY3Rpb24gPSBzb3J0ZXJDb2xsZWN0aW9uO1xuXHRcdHRoaXMuZmlsdGVyQ29sbGVjdGlvbiA9IGZpbHRlckNvbGxlY3Rpb247XG5cdFx0dGhpcy5maWVsZENvbGxlY3Rpb24gPSBmaWVsZENvbGxlY3Rpb247XG5cdFx0dGhpcy5zY2hlbWEgPSBzY2hlbWE7XG5cdH1cblxuXHRnZXRWZXJ0aWNhbEZvcm1hdGlvbigpOiBWZXJ0aWNhbEZvcm1hdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxGb3JtYXRpb247XG5cdH1cblxuXHRzZXRBZ2dyZWdhdGlvbkVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ+IHtcblxuXHRcdHRoaXMuYWdncmVnYXRpb25NYW5hZ2VyLnNldEVuYWJsZWQoZW5hYmxlZCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RXZlbnRzKCk7XG5cdH1cblxuXHRzZXRPcmlnaW4oaXRlbXM6IEFycmF5PGFueT4pOiBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50PiB7XG5cblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnNldE9yaWdpbihpdGVtcywgdGhpcy5nZXRJZCgpKVxuXHRcdCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RXZlbnRzKCk7XG5cdH1cblxuXHRlZGl0SXRlbShlZGl0UGFyYW1zOiBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcyk6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ+IHtcblxuXHRcdGNvbnN0IGl0ZW1JZCA9IGVkaXRQYXJhbXMuZ2V0SXRlbUlkKCksXG5cdFx0XHRmaWVsZElkID0gZWRpdFBhcmFtcy5nZXRDb2x1bW5GaWVsZElkKCksXG5cdFx0XHRmaWVsZCA9IHRoaXMuZmllbGRDb2xsZWN0aW9uLmdldEZpZWxkKGZpZWxkSWQgYXMgYW55KSwgLy8gYXMgRmllbGRJZFxuXHRcdFx0dmFsdWUgPSBlZGl0UGFyYW1zLmdldFZhbHVlKCk7XG5cblx0XHRjb25zdCBlZGl0SXRlbUV2ZW50cyA9IHRoaXMuc291cmNlTWFuYWdlci5lZGl0T3JpZ2luSXRlbShpdGVtSWQsIHZhbHVlLCBmaWVsZCwgdGhpcy5nZXRJZCgpKTtcblxuXHRcdGVkaXRJdGVtRXZlbnRzLmZvckVhY2goKGUpID0+IHRoaXMuYWRkRXZlbnQoZSkpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblxuXHRcdHJldHVybiB0aGlzLmdldEV2ZW50cygpO1xuXHR9XG5cblx0c2V0SGVpZ2h0KGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5nZXRTY2hlbWEoKS5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuXHRcdGNvbnN0IHZpZXdwb3J0SGVpZ2h0ID0gdGhpcy5nZXRTY2hlbWEoKS5nZXRDb250YWluZXJIZWlnaHQoKTtcblxuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb24uc2V0Vmlld3BvcnRIZWlnaHQodmlld3BvcnRIZWlnaHQpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2VCYXNlZE9uVmlydHVhbFNjcm9sbCgpO1xuXHR9XG5cblx0c2V0Rm9ybWF0aW9uKGZvcm1hdGlvbjogRm9ybWF0aW9uQWdncmVnYXRlKTogdm9pZCB7XG5cdFx0dGhpcy5mb3JtYXRpb25BZ2dyZWdhdGUgPSBmb3JtYXRpb247XG5cdH1cblxuXHRzZXRTY3JvbGxQb3NpdGlvbihwb3NpdGlvbjogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbi5zZXRTY3JvbGxQb3NpdGlvbihwb3NpdGlvbik7XG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2VCYXNlZE9uVmlydHVhbFNjcm9sbCgpO1xuXHR9XG5cblx0Z2V0Rm9ybWF0aW9uKCk6IEZvcm1hdGlvbkFnZ3JlZ2F0ZSB7XG5cdFx0cmV0dXJuIHRoaXMuZm9ybWF0aW9uQWdncmVnYXRlO1xuXHR9XG5cblx0c2V0U2NoZW1hKHNjaGVtYTogU2NoZW1hQWdncmVnYXRlKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWEgPSBzY2hlbWE7XG5cdH1cblxuXHRnZXRTY2hlbWEoKTogU2NoZW1hQWdncmVnYXRlIHtcblx0XHRyZXR1cm4gdGhpcy5zY2hlbWE7XG5cdH1cblxuXHRnZXRQYWdpbmcoKTogUGFnaW5nQWdncmVnYXRlIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdpbmc7XG5cdH1cblxuXHRjaGFuZ2VQYWdpbmcoY29uZmlnOiBQYWdpbmdDb25maWcpIHtcblx0XHR0aGlzLnBhZ2luZy5jaGFuZ2UoY29uZmlnKTtcblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXHR9XG5cblx0c2V0UGFnaW5nKHBhZ2luZzogUGFnaW5nQWdncmVnYXRlKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmcgPSBwYWdpbmc7XG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblx0fVxuXG5cdG5leHRQYWdlKCk6IHZvaWQge1xuXG5cdFx0Y29uc3Qgc291cmNlU2l6ZSA9IHRoaXMuc291cmNlTWFuYWdlci5nZXRPcmlnaW5TaXplKCk7XG5cblx0XHR0aGlzLnBhZ2luZy5uZXh0UGFnZShzb3VyY2VTaXplKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cdH1cblxuXHRwcmV2UGFnZSgpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZy5wcmV2UGFnZSgpO1xuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cdH1cblxuXHRjaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudD4ge1xuXG5cdFx0Y29uc3QgcGFnaW5nRXZlbnRzID0gdGhpcy5wYWdpbmcuY2hhbmdlUGFnZVNpemUocGFnZVNpemUpO1xuXG5cdFx0Ly8gVE9ET1xuXHRcdHBhZ2luZ0V2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuXHRcdFx0dGhpcy5hZGRFdmVudChldmVudCk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RXZlbnRzKCk7XG5cdH1cblxuXHRnZXRFbnRpdGllcygpOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlTWFuYWdlci5nZXRTbGljZWRFbnRpdGllcygpO1xuXHR9XG5cblx0Z2V0U291cmNlKCk6IFNvdXJjZU1hbmFnZXIge1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZU1hbmFnZXI7XG5cdH1cblxuXHRjcmVhdGVGaWVsZHMoY29sdW1uczogQXJyYXk8Q29sdW1uQ29uZmlnPik6IEFycmF5PEZpZWxkPiB7XG5cdFx0dGhpcy5maWVsZENvbGxlY3Rpb24uaW5pdEZpZWxkcyhjb2x1bW5zKTtcblxuXHRcdC8vIFRPRE8gU2hvdWxkIHRocm93IGV2ZW50IGZpZWxkcyBjcmVhdGVkXG5cdFx0cmV0dXJuIHRoaXMuZmllbGRDb2xsZWN0aW9uLmdldEFsbEZpZWxkcygpO1xuXHR9XG5cblx0c2V0U29ydGluZ0NvbmZpZyhjb25maWc6IFNvcnRpbmdDb25maWcpOiB2b2lkIHtcblx0XHR0aGlzLnNvcnRlckNvbGxlY3Rpb24uc2V0Q29uZmlnKGNvbmZpZyk7XG5cdH1cblxuXHR0b2dnbGVTb3J0KGZpZWxkSWQ6IEZpZWxkSWQpOiBBcnJheTxTdHJ1Y3R1cmVTb3J0ZXI+IHtcblxuXHRcdGNvbnN0IGZpZWxkID0gdGhpcy5maWVsZENvbGxlY3Rpb24uZ2V0RmllbGQoZmllbGRJZCk7XG5cblx0XHR0aGlzLnNvcnRlckNvbGxlY3Rpb24udG9nZ2xlKGZpZWxkKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5zb3J0ZXJDb2xsZWN0aW9uLmdldEFsbCgpO1xuXHR9XG5cblx0c2V0RmlsdGVyQ29uZmlnKGNvbmZpZzogRmlsdGVyQ29uZmlnKTogdm9pZCB7XG5cdFx0dGhpcy5maWx0ZXJDb2xsZWN0aW9uLnNldENvbmZpZyhjb25maWcpO1xuXHR9XG5cblx0c2V0UXVpY2tGaWx0ZXJzQ29uZmlnKGNvbmZpZzogUXVpY2tGaWx0ZXJzQ29uZmlnKTogdm9pZCB7XG5cdFx0dGhpcy5xdWlja0ZpbHRlcnMgPSBjb25maWcuZW5hYmxlZDtcblx0fVxuXG5cdHNldFNlYXJjaGluZ0NvbmZpZyhjb25maWc6IFNlYXJjaENvbmZpZyk6IHZvaWQge1xuXHRcdHRoaXMuc2VhcmNoID0gY29uZmlnLmVuYWJsZWQ7XG5cdH1cblxuXHR0b2dnbGVGaWx0ZXIoZmllbGRJZDogRmllbGRJZCwgZXh0ZXJuYWxGaWx0ZXJJZDogc3RyaW5nLCBmaWx0ZXJWYWx1ZTogc3RyaW5nKTogQXJyYXk8QWdncmVnYXRlRXZlbnQ+IHtcblxuXHRcdGNvbnN0IGZpZWxkID0gdGhpcy5maWVsZENvbGxlY3Rpb24uZ2V0RmllbGQoZmllbGRJZCk7XG5cblx0XHQvLyBGaWVsZCBub3QgZm91bmRcblx0XHQvLyBUT0RPIHRocm93IGFnZ3JlZ2F0ZSBldmVudFxuXHRcdGlmIChmaWVsZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXG5cdFx0dGhpcy5maWx0ZXJDb2xsZWN0aW9uLmFkZEZpbHRlcihmaWVsZCwgZXh0ZXJuYWxGaWx0ZXJJZCwgZmlsdGVyVmFsdWUpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblxuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlU291cmNlKCk6IHZvaWQge1xuXG5cdFx0aWYgKCF0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0T3JpZ2luKCkgfHwgIXRoaXMucGFnaW5nKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gVE9ETyBSZWZhY3RvclxuXHRcdHRoaXMuc291cmNlTWFuYWdlci5zZXRFbnRpdGllcyh0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0T3JpZ2luKCkpO1xuXG5cdFx0Ly8gYWdncmVnYXRpb25zXG5cdFx0Y29uc3QgYWdncmVnYXRpb25FdmVudHMgPSB0aGlzLmFnZ3JlZ2F0aW9uTWFuYWdlci5jYWxjdWxhdGUoXG5cdFx0XHR0aGlzLmZpZWxkQ29sbGVjdGlvbi5nZXRBbGxGaWVsZHMoKSxcblx0XHRcdHRoaXMuc291cmNlTWFuYWdlci5nZXRFbnRpdGllcygpXG5cdFx0KTtcblxuXHRcdGFnZ3JlZ2F0aW9uRXZlbnRzLmZvckVhY2goKGFlOiBBZ2dyZWdhdGVFdmVudCkgPT4ge1xuXHRcdFx0dGhpcy5hZGRFdmVudChhZSk7XG5cdFx0fSk7XG5cblx0XHQvLyBmaWx0ZXJpbmdcblx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2V0RW50aXRpZXModGhpcy5maWx0ZXJDb2xsZWN0aW9uLmZpbHRlcih0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0RW50aXRpZXMoKSkpO1xuXG5cdFx0Ly8gc2VhcmNoXG5cblx0XHQvLyBzb3J0aW5nXG5cdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnNldEVudGl0aWVzKHRoaXMuc29ydGVyQ29sbGVjdGlvbi5zb3J0KHRoaXMuc291cmNlTWFuYWdlci5nZXRFbnRpdGllcygpKSk7XG5cblx0XHQvLyBwYWdpbmdcblx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2V0RW50aXRpZXModGhpcy5wYWdpbmcuc2FtcGxlKHRoaXMuc291cmNlTWFuYWdlci5nZXRFbnRpdGllcygpKSk7XG5cblx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLnNldFNvdXJjZVNpemUodGhpcy5zb3VyY2VNYW5hZ2VyLmdldEVudGl0aWVzKCkubGVuZ3RoKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlQmFzZWRPblZpcnR1YWxTY3JvbGwoKTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlU291cmNlQmFzZWRPblZpcnR1YWxTY3JvbGwoKTogdm9pZCB7XG5cblx0XHRpZiAodGhpcy52ZXJ0aWNhbEZvcm1hdGlvbi5pc0VuYWJsZWQoKSkge1xuXG5cdFx0XHRjb25zdCByYW5nZSA9IHRoaXMudmVydGljYWxGb3JtYXRpb24uZ2V0UmFuZ2UoKTtcblxuXHRcdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnNldFNsaWNlZEVudGl0aWVzKFxuXHRcdFx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0RW50aXRpZXMoKS5zbGljZShyYW5nZS5nZXRTdGFydCgpLCByYW5nZS5nZXRFbmQoKSlcblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc291cmNlTWFuYWdlci5zZXRTbGljZWRFbnRpdGllcyhcblx0XHRcdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLmdldEVudGl0aWVzKClcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==