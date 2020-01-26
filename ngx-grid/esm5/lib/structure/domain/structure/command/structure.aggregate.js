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
import { FilterManager } from './filter/filter.manager';
import { FieldCollection } from './field/field.collection';
import { FormationAggregate } from '../../formation/command/formation-aggregate';
import { SchemaAggregate } from '../../schema/command/schema-aggregate';
import { StructureId } from '../../structure-id';
import { SearchManager } from './search/search.manager';
import { StructurePreparedEntitiesSetAggregateEvent } from '../../source/command/prepared/structure.prepared-entities-set.aggregate-event';
var StructureAggregate = /** @class */ (function (_super) {
    tslib_1.__extends(StructureAggregate, _super);
    function StructureAggregate(structureId, pagingAggregate, formationAggregate, sourceManager, verticalFormation, aggregationManager, sorterCollection, filterCollection, searchManager, fieldCollection, schema) {
        var _this = _super.call(this, structureId) || this;
        _this.pagingAggregate = pagingAggregate;
        _this.formationAggregate = formationAggregate;
        _this.sourceManager = sourceManager;
        _this.verticalFormation = verticalFormation;
        _this.aggregationManager = aggregationManager;
        _this.sorterCollection = sorterCollection;
        _this.filterManager = filterCollection;
        _this.searchManager = searchManager;
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
        return this.pagingAggregate;
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
        this.pagingAggregate.change(config);
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
        this.pagingAggregate = paging;
        this.calculateSource();
    };
    /**
     * @return {?}
     */
    StructureAggregate.prototype.nextPage = /**
     * @return {?}
     */
    function () {
        this.pagingAggregate.nextPage();
        this.calculateSource();
    };
    /**
     * @return {?}
     */
    StructureAggregate.prototype.prevPage = /**
     * @return {?}
     */
    function () {
        this.pagingAggregate.prevPage();
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
        var pagingEvents = this.pagingAggregate.changePageSize(pageSize);
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
     * @param {?} fieldId
     * @param {?} sortOrder
     * @return {?}
     */
    StructureAggregate.prototype.setSortOrder = /**
     * @param {?} fieldId
     * @param {?} sortOrder
     * @return {?}
     */
    function (fieldId, sortOrder) {
        /** @type {?} */
        var field = this.fieldCollection.getField(fieldId);
        this.sorterCollection.setSortOrder(field, sortOrder);
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
        this.filterManager.getSettings().setFilterConfig(config);
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
        this.filterManager.getSettings().setSearchingConfig(config);
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
        this.filterManager.getSettings().setQuickFiltersConfig(config);
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
        this.filterManager.addFilter(field, externalFilterId, filterValue);
        this.calculateSource();
        return [];
    };
    /**
     * @param {?} phrase
     * @return {?}
     */
    StructureAggregate.prototype.addSearchPhrase = /**
     * @param {?} phrase
     * @return {?}
     */
    function (phrase) {
        /** @type {?} */
        var fields = this.fieldCollection.getAllFields();
        this.searchManager.addSearchPhrase(fields, phrase);
        this.calculateSource();
        return [];
    };
    /**
     * @return {?}
     */
    StructureAggregate.prototype.removeSearchPhrase = /**
     * @return {?}
     */
    function () {
        this.searchManager.removeSearchFilters();
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
        if (!this.sourceManager.getOrigin() || !this.pagingAggregate) {
            return;
        }
        // TODO Refactor
        this.sourceManager.setEntities(this.sourceManager.getOrigin());
        // filtering
        this.sourceManager.setEntities(this.filterManager.filter(this.sourceManager.getEntities()));
        // search
        /** @type {?} */
        var searchedEntities = this.searchManager.search(this.sourceManager.getEntities());
        this.sourceManager.setEntities(searchedEntities);
        // sorting
        /** @type {?} */
        var ents = this.sorterCollection.sort(this.sourceManager.getEntities());
        this.sourceManager.setEntities(ents);
        // calculate filteredEntities
        this.sourceManager.setPreparedEntities();
        this.pagingAggregate.setSourceSize(this.sourceManager.getPreparedEntities().length);
        this.addEvent(new StructurePreparedEntitiesSetAggregateEvent(this.getId(), ents));
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
        // paging
        this.sourceManager.setEntities(this.pagingAggregate.sample(this.sourceManager.getEntities()));
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
        { type: FilterManager },
        { type: SearchManager },
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
            FilterManager,
            SearchManager,
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
    StructureAggregate.prototype.pagingAggregate;
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
    StructureAggregate.prototype.filterManager;
    /**
     * @type {?}
     * @private
     */
    StructureAggregate.prototype.searchManager;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc3RydWN0dXJlLmFnZ3JlZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWtCLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTlFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNqRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBWWpELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsMENBQTBDLEVBQUUsTUFBTSwrRUFBK0UsQ0FBQzs7SUFJbkcsOENBQVM7SUFzQmhELDRCQUFZLFdBQXdCLEVBQ2pDLGVBQWdDLEVBQ2hDLGtCQUFzQyxFQUN0QyxhQUE0QixFQUM1QixpQkFBb0MsRUFDcEMsa0JBQXNDLEVBQ3RDLGdCQUFrQyxFQUNsQyxnQkFBK0IsRUFDL0IsYUFB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Q0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQ3hFLENBQUM7U0FDRjthQUFNO1lBQ04sSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FDaEMsQ0FBQztTQUNGO0lBQ0YsQ0FBQzs7Z0JBNVJ3QixXQUFXO2dCQUNoQixlQUFlO2dCQUNaLGtCQUFrQjtnQkFDdkIsYUFBYTtnQkFDVCxpQkFBaUI7Z0JBQ2hCLGtCQUFrQjtnQkFDcEIsZ0JBQWdCO2dCQUNoQixhQUFhO2dCQUNoQixhQUFhO2dCQUNYLGVBQWU7Z0JBQ3hCLGVBQWU7O0lBaENkLGtCQUFrQjtRQUQ5QixhQUFhO2lEQXVCWSxXQUFXO1lBQ2hCLGVBQWU7WUFDWixrQkFBa0I7WUFDdkIsYUFBYTtZQUNULGlCQUFpQjtZQUNoQixrQkFBa0I7WUFDcEIsZ0JBQWdCO1lBQ2hCLGFBQWE7WUFDaEIsYUFBYTtZQUNYLGVBQWU7WUFDeEIsZUFBZTtPQWhDZCxrQkFBa0IsQ0FvVDlCO0lBQUQseUJBQUM7Q0FBQSxDQXBUdUMsU0FBUyxHQW9UaEQ7U0FwVFksa0JBQWtCOzs7Ozs7SUFFOUIsZ0RBQStDOzs7OztJQUUvQyxvQ0FBZ0M7Ozs7O0lBRWhDLDZDQUF5Qzs7Ozs7SUFFekMsMkNBQXFDOzs7OztJQUVyQyw4Q0FBMkM7Ozs7O0lBRTNDLDJDQUFxQzs7Ozs7SUFFckMsMkNBQXFDOzs7OztJQUVyQywrQ0FBNkM7Ozs7O0lBRTdDLDZDQUF5Qzs7Ozs7SUFFekMsZ0RBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlLCBBZ2dyZWdhdGVFdmVudCwgUm9vdEFnZ3JlZ2F0ZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFBhZ2luZ0FnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uL3BhZ2luZy9jb21tYW5kL3BhZ2luZy5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgU291cmNlTWFuYWdlciB9IGZyb20gJy4uLy4uL3NvdXJjZS9jb21tYW5kL3NvdXJjZS5tYW5hZ2VyJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uIH0gZnJvbSAnLi92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uJztcbmltcG9ydCB7IEFnZ3JlZ2F0aW9uTWFuYWdlciB9IGZyb20gJy4vYWdncmVnYXRpb24vYWdncmVnYXRpb24ubWFuYWdlcic7XG5pbXBvcnQgeyBTb3J0ZXJDb2xsZWN0aW9uIH0gZnJvbSAnLi9zb3J0L3NvcnRlci5jb2xsZWN0aW9uJztcbmltcG9ydCB7IEZpbHRlck1hbmFnZXIgfSBmcm9tICcuL2ZpbHRlci9maWx0ZXIubWFuYWdlcic7XG5pbXBvcnQgeyBGaWVsZENvbGxlY3Rpb24gfSBmcm9tICcuL2ZpZWxkL2ZpZWxkLmNvbGxlY3Rpb24nO1xuaW1wb3J0IHsgRm9ybWF0aW9uQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vZm9ybWF0aW9uL2NvbW1hbmQvZm9ybWF0aW9uLWFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBTY2hlbWFBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi9zY2hlbWEvY29tbWFuZC9zY2hlbWEtYWdncmVnYXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zIH0gZnJvbSAnLi4vLi4vc291cmNlL2NvbW1hbmQvb3JpZ2luL2VkaXQvc3RydWN0dXJlLmVkaXQtc291cmNlLWl0ZW0ucGFyYW1zJztcbmltcG9ydCB7IFBhZ2luZ0NvbmZpZyB9IGZyb20gJy4uLy4uL3BhZ2luZy9wYWdpbmctY29uZmlnJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi9zb3VyY2UvY29tbWFuZC9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IENvbHVtbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi9maWVsZC9kYXRhLXR5cGUvZmllbGQnO1xuaW1wb3J0IHsgU29ydGluZ0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvc29ydGluZy1jb25maWcnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4vZmllbGQvZGF0YS10eXBlL2ZpZWxkLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVNvcnRlciB9IGZyb20gJy4vc29ydC9zdHJ1Y3R1cmUuc29ydGVyJztcbmltcG9ydCB7IEZpbHRlckNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvZmlsdGVyL2ZpbHRlci1jb25maWcnO1xuaW1wb3J0IHsgUXVpY2tGaWx0ZXJzQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9maWx0ZXIvcXVpY2stZmlsdGVycy5jb25maWcnO1xuaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9zZWFyY2gvc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQgeyBTZWFyY2hNYW5hZ2VyIH0gZnJvbSAnLi9zZWFyY2gvc2VhcmNoLm1hbmFnZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vLi4vc291cmNlL2NvbW1hbmQvcHJlcGFyZWQvc3RydWN0dXJlLnByZXBhcmVkLWVudGl0aWVzLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgU29ydFN0YXR1cyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21tYW5kL2NvbHVtbi9zb3J0L3NvcnQtc3RhdHVzJztcblxuQFJvb3RBZ2dyZWdhdGVcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgZXh0ZW5kcyBBZ2dyZWdhdGUge1xuXG5cdHByaXZhdGUgZm9ybWF0aW9uQWdncmVnYXRlOiBGb3JtYXRpb25BZ2dyZWdhdGU7XG5cblx0cHJpdmF0ZSBzY2hlbWE6IFNjaGVtYUFnZ3JlZ2F0ZTtcblxuXHRwcml2YXRlIHBhZ2luZ0FnZ3JlZ2F0ZTogUGFnaW5nQWdncmVnYXRlO1xuXG5cdHByaXZhdGUgc291cmNlTWFuYWdlcjogU291cmNlTWFuYWdlcjtcblxuXHRwcml2YXRlIHNvcnRlckNvbGxlY3Rpb246IFNvcnRlckNvbGxlY3Rpb247XG5cblx0cHJpdmF0ZSBmaWx0ZXJNYW5hZ2VyOiBGaWx0ZXJNYW5hZ2VyO1xuXG5cdHByaXZhdGUgc2VhcmNoTWFuYWdlcjogU2VhcmNoTWFuYWdlcjtcblxuXHRwcml2YXRlIHZlcnRpY2FsRm9ybWF0aW9uOiBWZXJ0aWNhbEZvcm1hdGlvbjtcblxuXHRwcml2YXRlIGZpZWxkQ29sbGVjdGlvbjogRmllbGRDb2xsZWN0aW9uO1xuXG5cdHByaXZhdGUgYWdncmVnYXRpb25NYW5hZ2VyOiBBZ2dyZWdhdGlvbk1hbmFnZXI7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwYWdpbmdBZ2dyZWdhdGU6IFBhZ2luZ0FnZ3JlZ2F0ZSxcblx0XHRcdFx0Zm9ybWF0aW9uQWdncmVnYXRlOiBGb3JtYXRpb25BZ2dyZWdhdGUsXG5cdFx0XHRcdHNvdXJjZU1hbmFnZXI6IFNvdXJjZU1hbmFnZXIsXG5cdFx0XHRcdHZlcnRpY2FsRm9ybWF0aW9uOiBWZXJ0aWNhbEZvcm1hdGlvbixcblx0XHRcdFx0YWdncmVnYXRpb25NYW5hZ2VyOiBBZ2dyZWdhdGlvbk1hbmFnZXIsXG5cdFx0XHRcdHNvcnRlckNvbGxlY3Rpb246IFNvcnRlckNvbGxlY3Rpb24sXG5cdFx0XHRcdGZpbHRlckNvbGxlY3Rpb246IEZpbHRlck1hbmFnZXIsXG5cdFx0XHRcdHNlYXJjaE1hbmFnZXI6IFNlYXJjaE1hbmFnZXIsXG5cdFx0XHRcdGZpZWxkQ29sbGVjdGlvbjogRmllbGRDb2xsZWN0aW9uLFxuXHRcdFx0XHRzY2hlbWE6IFNjaGVtYUFnZ3JlZ2F0ZSkge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkKTtcblx0XHR0aGlzLnBhZ2luZ0FnZ3JlZ2F0ZSA9IHBhZ2luZ0FnZ3JlZ2F0ZTtcblx0XHR0aGlzLmZvcm1hdGlvbkFnZ3JlZ2F0ZSA9IGZvcm1hdGlvbkFnZ3JlZ2F0ZTtcblx0XHR0aGlzLnNvdXJjZU1hbmFnZXIgPSBzb3VyY2VNYW5hZ2VyO1xuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb24gPSB2ZXJ0aWNhbEZvcm1hdGlvbjtcblx0XHR0aGlzLmFnZ3JlZ2F0aW9uTWFuYWdlciA9IGFnZ3JlZ2F0aW9uTWFuYWdlcjtcblx0XHR0aGlzLnNvcnRlckNvbGxlY3Rpb24gPSBzb3J0ZXJDb2xsZWN0aW9uO1xuXHRcdHRoaXMuZmlsdGVyTWFuYWdlciA9IGZpbHRlckNvbGxlY3Rpb247XG5cdFx0dGhpcy5zZWFyY2hNYW5hZ2VyID0gc2VhcmNoTWFuYWdlcjtcblx0XHR0aGlzLmZpZWxkQ29sbGVjdGlvbiA9IGZpZWxkQ29sbGVjdGlvbjtcblx0XHR0aGlzLnNjaGVtYSA9IHNjaGVtYTtcblx0fVxuXG5cdGdldFZlcnRpY2FsRm9ybWF0aW9uKCk6IFZlcnRpY2FsRm9ybWF0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvbjtcblx0fVxuXG5cdHNldEFnZ3JlZ2F0aW9uRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudD4ge1xuXG5cdFx0dGhpcy5hZ2dyZWdhdGlvbk1hbmFnZXIuc2V0RW5hYmxlZChlbmFibGVkKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5nZXRFdmVudHMoKTtcblx0fVxuXG5cdHNldE9yaWdpbihpdGVtczogQXJyYXk8YW55Pik6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ+IHtcblxuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2V0T3JpZ2luKGl0ZW1zLCB0aGlzLmdldElkKCkpXG5cdFx0KTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5nZXRFdmVudHMoKTtcblx0fVxuXG5cdGVkaXRJdGVtKGVkaXRQYXJhbXM6IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zKTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudD4ge1xuXG5cdFx0Y29uc3QgaXRlbUlkID0gZWRpdFBhcmFtcy5nZXRJdGVtSWQoKSxcblx0XHRcdGZpZWxkSWQgPSBlZGl0UGFyYW1zLmdldENvbHVtbkZpZWxkSWQoKSxcblx0XHRcdGZpZWxkID0gdGhpcy5maWVsZENvbGxlY3Rpb24uZ2V0RmllbGQoZmllbGRJZCBhcyBhbnkpLCAvLyBhcyBGaWVsZElkXG5cdFx0XHR2YWx1ZSA9IGVkaXRQYXJhbXMuZ2V0VmFsdWUoKTtcblxuXHRcdGNvbnN0IGVkaXRJdGVtRXZlbnRzID0gdGhpcy5zb3VyY2VNYW5hZ2VyLmVkaXRPcmlnaW5JdGVtKGl0ZW1JZCwgdmFsdWUsIGZpZWxkLCB0aGlzLmdldElkKCkpO1xuXG5cdFx0ZWRpdEl0ZW1FdmVudHMuZm9yRWFjaCgoZSkgPT4gdGhpcy5hZGRFdmVudChlKSk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RXZlbnRzKCk7XG5cdH1cblxuXHRzZXRIZWlnaHQoaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmdldFNjaGVtYSgpLnNldEhlaWdodChoZWlnaHQpO1xuXG5cdFx0Y29uc3Qgdmlld3BvcnRIZWlnaHQgPSB0aGlzLmdldFNjaGVtYSgpLmdldENvbnRhaW5lckhlaWdodCgpO1xuXG5cdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbi5zZXRWaWV3cG9ydEhlaWdodCh2aWV3cG9ydEhlaWdodCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZUJhc2VkT25WaXJ0dWFsU2Nyb2xsKCk7XG5cdH1cblxuXHRzZXRGb3JtYXRpb24oZm9ybWF0aW9uOiBGb3JtYXRpb25BZ2dyZWdhdGUpOiB2b2lkIHtcblx0XHR0aGlzLmZvcm1hdGlvbkFnZ3JlZ2F0ZSA9IGZvcm1hdGlvbjtcblx0fVxuXG5cdHNldFNjcm9sbFBvc2l0aW9uKHBvc2l0aW9uOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLnNldFNjcm9sbFBvc2l0aW9uKHBvc2l0aW9uKTtcblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZUJhc2VkT25WaXJ0dWFsU2Nyb2xsKCk7XG5cdH1cblxuXHRnZXRGb3JtYXRpb24oKTogRm9ybWF0aW9uQWdncmVnYXRlIHtcblx0XHRyZXR1cm4gdGhpcy5mb3JtYXRpb25BZ2dyZWdhdGU7XG5cdH1cblxuXHRzZXRTY2hlbWEoc2NoZW1hOiBTY2hlbWFBZ2dyZWdhdGUpOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYSA9IHNjaGVtYTtcblx0fVxuXG5cdGdldFNjaGVtYSgpOiBTY2hlbWFBZ2dyZWdhdGUge1xuXHRcdHJldHVybiB0aGlzLnNjaGVtYTtcblx0fVxuXG5cdGdldFBhZ2luZygpOiBQYWdpbmdBZ2dyZWdhdGUge1xuXHRcdHJldHVybiB0aGlzLnBhZ2luZ0FnZ3JlZ2F0ZTtcblx0fVxuXG5cdGNoYW5nZVBhZ2luZyhjb25maWc6IFBhZ2luZ0NvbmZpZykge1xuXHRcdHRoaXMucGFnaW5nQWdncmVnYXRlLmNoYW5nZShjb25maWcpO1xuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cdH1cblxuXHRzZXRQYWdpbmcocGFnaW5nOiBQYWdpbmdBZ2dyZWdhdGUpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0FnZ3JlZ2F0ZSA9IHBhZ2luZztcblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXHR9XG5cblx0bmV4dFBhZ2UoKTogdm9pZCB7XG5cblx0XHR0aGlzLnBhZ2luZ0FnZ3JlZ2F0ZS5uZXh0UGFnZSgpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblx0fVxuXG5cdHByZXZQYWdlKCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nQWdncmVnYXRlLnByZXZQYWdlKCk7XG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblx0fVxuXG5cdGNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplOiBudW1iZXIpOiBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50PiB7XG5cblx0XHRjb25zdCBwYWdpbmdFdmVudHMgPSB0aGlzLnBhZ2luZ0FnZ3JlZ2F0ZS5jaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZSk7XG5cblx0XHQvLyBUT0RPXG5cdFx0cGFnaW5nRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG5cdFx0XHR0aGlzLmFkZEV2ZW50KGV2ZW50KTtcblx0XHR9KTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5nZXRFdmVudHMoKTtcblx0fVxuXG5cdGdldEVudGl0aWVzKCk6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2VNYW5hZ2VyLmdldFNsaWNlZEVudGl0aWVzKCk7XG5cdH1cblxuXHRnZXRTb3VyY2UoKTogU291cmNlTWFuYWdlciB7XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlTWFuYWdlcjtcblx0fVxuXG5cdGNyZWF0ZUZpZWxkcyhjb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWc+KTogQXJyYXk8RmllbGQ+IHtcblx0XHR0aGlzLmZpZWxkQ29sbGVjdGlvbi5pbml0RmllbGRzKGNvbHVtbnMpO1xuXG5cdFx0Ly8gVE9ETyBTaG91bGQgdGhyb3cgZXZlbnQgZmllbGRzIGNyZWF0ZWRcblx0XHRyZXR1cm4gdGhpcy5maWVsZENvbGxlY3Rpb24uZ2V0QWxsRmllbGRzKCk7XG5cdH1cblxuXHRzZXRTb3J0aW5nQ29uZmlnKGNvbmZpZzogU29ydGluZ0NvbmZpZyk6IHZvaWQge1xuXHRcdHRoaXMuc29ydGVyQ29sbGVjdGlvbi5zZXRDb25maWcoY29uZmlnKTtcblx0fVxuXG5cdHRvZ2dsZVNvcnQoZmllbGRJZDogRmllbGRJZCk6IEFycmF5PFN0cnVjdHVyZVNvcnRlcj4ge1xuXG5cdFx0Y29uc3QgZmllbGQgPSB0aGlzLmZpZWxkQ29sbGVjdGlvbi5nZXRGaWVsZChmaWVsZElkKTtcblxuXHRcdHRoaXMuc29ydGVyQ29sbGVjdGlvbi50b2dnbGUoZmllbGQpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblxuXHRcdHJldHVybiB0aGlzLnNvcnRlckNvbGxlY3Rpb24uZ2V0QWxsKCk7XG5cdH1cblxuXHRzZXRTb3J0T3JkZXIoZmllbGRJZDogRmllbGRJZCwgc29ydE9yZGVyOiBTb3J0U3RhdHVzKTogQXJyYXk8U3RydWN0dXJlU29ydGVyPiB7XG5cblx0XHRjb25zdCBmaWVsZCA9IHRoaXMuZmllbGRDb2xsZWN0aW9uLmdldEZpZWxkKGZpZWxkSWQpO1xuXG5cdFx0dGhpcy5zb3J0ZXJDb2xsZWN0aW9uLnNldFNvcnRPcmRlcihmaWVsZCwgc29ydE9yZGVyKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5zb3J0ZXJDb2xsZWN0aW9uLmdldEFsbCgpO1xuXHR9XG5cblx0c2V0RmlsdGVyQ29uZmlnKGNvbmZpZzogRmlsdGVyQ29uZmlnKTogdm9pZCB7XG5cdFx0dGhpcy5maWx0ZXJNYW5hZ2VyLmdldFNldHRpbmdzKCkuc2V0RmlsdGVyQ29uZmlnKGNvbmZpZyk7XG5cdH1cblxuXHRzZXRTZWFyY2hpbmdDb25maWcoY29uZmlnOiBTZWFyY2hDb25maWcpOiB2b2lkIHtcblx0XHR0aGlzLmZpbHRlck1hbmFnZXIuZ2V0U2V0dGluZ3MoKS5zZXRTZWFyY2hpbmdDb25maWcoY29uZmlnKTtcblx0fVxuXG5cdHNldFF1aWNrRmlsdGVyc0NvbmZpZyhjb25maWc6IFF1aWNrRmlsdGVyc0NvbmZpZyk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyTWFuYWdlci5nZXRTZXR0aW5ncygpLnNldFF1aWNrRmlsdGVyc0NvbmZpZyhjb25maWcpO1xuXHR9XG5cblx0dG9nZ2xlRmlsdGVyKGZpZWxkSWQ6IEZpZWxkSWQsIGV4dGVybmFsRmlsdGVySWQ6IHN0cmluZywgZmlsdGVyVmFsdWU6IHN0cmluZyk6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PiB7XG5cblx0XHRjb25zdCBmaWVsZCA9IHRoaXMuZmllbGRDb2xsZWN0aW9uLmdldEZpZWxkKGZpZWxkSWQpO1xuXG5cdFx0Ly8gRmllbGQgbm90IGZvdW5kXG5cdFx0Ly8gVE9ETyB0aHJvdyBhZ2dyZWdhdGUgZXZlbnRcblx0XHRpZiAoZmllbGQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblxuXHRcdHRoaXMuZmlsdGVyTWFuYWdlci5hZGRGaWx0ZXIoZmllbGQsIGV4dGVybmFsRmlsdGVySWQsIGZpbHRlclZhbHVlKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRhZGRTZWFyY2hQaHJhc2UocGhyYXNlOiBzdHJpbmcpOiBBcnJheTxBZ2dyZWdhdGVFdmVudD4ge1xuXG5cdFx0Y29uc3QgZmllbGRzID0gdGhpcy5maWVsZENvbGxlY3Rpb24uZ2V0QWxsRmllbGRzKCk7XG5cblx0XHR0aGlzLnNlYXJjaE1hbmFnZXIuYWRkU2VhcmNoUGhyYXNlKGZpZWxkcywgcGhyYXNlKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRyZW1vdmVTZWFyY2hQaHJhc2UoKTogQXJyYXk8QWdncmVnYXRlRXZlbnQ+IHtcblxuXHRcdHRoaXMuc2VhcmNoTWFuYWdlci5yZW1vdmVTZWFyY2hGaWx0ZXJzKCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVTb3VyY2UoKTogdm9pZCB7XG5cblx0XHRpZiAoIXRoaXMuc291cmNlTWFuYWdlci5nZXRPcmlnaW4oKSB8fCAhdGhpcy5wYWdpbmdBZ2dyZWdhdGUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBUT0RPIFJlZmFjdG9yXG5cdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnNldEVudGl0aWVzKHRoaXMuc291cmNlTWFuYWdlci5nZXRPcmlnaW4oKSk7XG5cblx0XHQvLyBmaWx0ZXJpbmdcblx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2V0RW50aXRpZXModGhpcy5maWx0ZXJNYW5hZ2VyLmZpbHRlcih0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0RW50aXRpZXMoKSkpO1xuXG5cdFx0Ly8gc2VhcmNoXG5cdFx0Y29uc3Qgc2VhcmNoZWRFbnRpdGllcyA9IHRoaXMuc2VhcmNoTWFuYWdlci5zZWFyY2godGhpcy5zb3VyY2VNYW5hZ2VyLmdldEVudGl0aWVzKCkpO1xuXHRcdHRoaXMuc291cmNlTWFuYWdlci5zZXRFbnRpdGllcyhzZWFyY2hlZEVudGl0aWVzKTtcblxuXHRcdC8vIHNvcnRpbmdcblx0XHRjb25zdCBlbnRzID0gdGhpcy5zb3J0ZXJDb2xsZWN0aW9uLnNvcnQodGhpcy5zb3VyY2VNYW5hZ2VyLmdldEVudGl0aWVzKCkpO1xuXHRcdHRoaXMuc291cmNlTWFuYWdlci5zZXRFbnRpdGllcyhlbnRzKTtcblxuXHRcdC8vIGNhbGN1bGF0ZSBmaWx0ZXJlZEVudGl0aWVzXG5cdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnNldFByZXBhcmVkRW50aXRpZXMoKTtcblxuXHRcdHRoaXMucGFnaW5nQWdncmVnYXRlLnNldFNvdXJjZVNpemUodGhpcy5zb3VyY2VNYW5hZ2VyLmdldFByZXBhcmVkRW50aXRpZXMoKS5sZW5ndGgpO1xuXG5cdFx0dGhpcy5hZGRFdmVudChuZXcgU3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSwgZW50cykpO1xuXG5cdFx0Ly8gYWdncmVnYXRpb25zXG5cdFx0Y29uc3QgYWdncmVnYXRpb25FdmVudHMgPSB0aGlzLmFnZ3JlZ2F0aW9uTWFuYWdlci5jYWxjdWxhdGUoXG5cdFx0XHR0aGlzLmZpZWxkQ29sbGVjdGlvbi5nZXRBbGxGaWVsZHMoKSxcblx0XHRcdHRoaXMuc291cmNlTWFuYWdlci5nZXRFbnRpdGllcygpXG5cdFx0KTtcblxuXHRcdGFnZ3JlZ2F0aW9uRXZlbnRzLmZvckVhY2goKGFlOiBBZ2dyZWdhdGVFdmVudCkgPT4ge1xuXHRcdFx0dGhpcy5hZGRFdmVudChhZSk7XG5cdFx0fSk7XG5cblx0XHQvLyBwYWdpbmdcblx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2V0RW50aXRpZXModGhpcy5wYWdpbmdBZ2dyZWdhdGUuc2FtcGxlKHRoaXMuc291cmNlTWFuYWdlci5nZXRFbnRpdGllcygpKSk7XG5cblx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLnNldFNvdXJjZVNpemUodGhpcy5zb3VyY2VNYW5hZ2VyLmdldEVudGl0aWVzKCkubGVuZ3RoKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlQmFzZWRPblZpcnR1YWxTY3JvbGwoKTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlU291cmNlQmFzZWRPblZpcnR1YWxTY3JvbGwoKTogdm9pZCB7XG5cblx0XHRpZiAodGhpcy52ZXJ0aWNhbEZvcm1hdGlvbi5pc0VuYWJsZWQoKSkge1xuXG5cdFx0XHRjb25zdCByYW5nZSA9IHRoaXMudmVydGljYWxGb3JtYXRpb24uZ2V0UmFuZ2UoKTtcblxuXHRcdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnNldFNsaWNlZEVudGl0aWVzKFxuXHRcdFx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0RW50aXRpZXMoKS5zbGljZShyYW5nZS5nZXRTdGFydCgpLCByYW5nZS5nZXRFbmQoKSlcblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc291cmNlTWFuYWdlci5zZXRTbGljZWRFbnRpdGllcyhcblx0XHRcdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLmdldEVudGl0aWVzKClcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==