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
import { FieldsInitedAggregateEvent } from './field/init/fields-inited.aggregate-event';
import { SchemaTheme } from '../../schema/schema-theme';
var StructureAggregate = /** @class */ (function (_super) {
    tslib_1.__extends(StructureAggregate, _super);
    function StructureAggregate(structureId, pagingAggregate, formationAggregate, sourceManager, verticalFormation, aggregationManager, sorterCollection, filterCollection, searchManager, fieldCollection, schema) {
        var _this = _super.call(this, structureId, 'StructureAggregate') || this;
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
    StructureAggregate.prototype.init = /**
     * @return {?}
     */
    function () {
        this.initTheme();
    };
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
     * @param {?} theme
     * @return {?}
     */
    StructureAggregate.prototype.setTheme = /**
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        this.getSchema().setTheme(theme);
        // #1707 Move to SchemeAggregate
        if (theme === SchemaTheme.MATERIAL) {
            this.getVerticalFormation().setRowHeight(52);
        }
        if (theme === SchemaTheme.GENERIC) {
            this.getVerticalFormation().setRowHeight(42);
        }
        if (theme === SchemaTheme.FABRIC) {
            this.getVerticalFormation().setRowHeight(36);
        }
        if (theme === SchemaTheme.LIGHT) {
            this.getVerticalFormation().setRowHeight(56);
        }
        if (theme === SchemaTheme.DARK) {
            this.getVerticalFormation().setRowHeight(38);
        }
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
        /** @type {?} */
        var typeFields = this.fieldCollection.getAllFields();
        this.addEvent(new FieldsInitedAggregateEvent(this.getId(), columns, typeFields));
        return this.getEvents();
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
    /**
     * @private
     * @return {?}
     */
    StructureAggregate.prototype.initTheme = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var theme = this.getSchema().getTheme();
        this.setTheme(theme);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc3RydWN0dXJlLmFnZ3JlZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWtCLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTlFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNqRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBV2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsMENBQTBDLEVBQUUsTUFBTSwrRUFBK0UsQ0FBQztBQUUzSSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN4RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0lBR2hCLDhDQUFTO0lBc0JoRCw0QkFBWSxXQUF3QixFQUNqQyxlQUFn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IFJvb3RBZ2dyZWdhdGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBQYWdpbmdBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi9wYWdpbmcvY29tbWFuZC9wYWdpbmcuYWdncmVnYXRlJztcbmltcG9ydCB7IFNvdXJjZU1hbmFnZXIgfSBmcm9tICcuLi8uLi9zb3VyY2UvY29tbWFuZC9zb3VyY2UubWFuYWdlcic7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbiB9IGZyb20gJy4vdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbic7XG5pbXBvcnQgeyBBZ2dyZWdhdGlvbk1hbmFnZXIgfSBmcm9tICcuL2FnZ3JlZ2F0aW9uL2FnZ3JlZ2F0aW9uLm1hbmFnZXInO1xuaW1wb3J0IHsgU29ydGVyQ29sbGVjdGlvbiB9IGZyb20gJy4vc29ydC9zb3J0ZXIuY29sbGVjdGlvbic7XG5pbXBvcnQgeyBGaWx0ZXJNYW5hZ2VyIH0gZnJvbSAnLi9maWx0ZXIvZmlsdGVyLm1hbmFnZXInO1xuaW1wb3J0IHsgRmllbGRDb2xsZWN0aW9uIH0gZnJvbSAnLi9maWVsZC9maWVsZC5jb2xsZWN0aW9uJztcbmltcG9ydCB7IEZvcm1hdGlvbkFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uL2Zvcm1hdGlvbi9jb21tYW5kL2Zvcm1hdGlvbi1hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgU2NoZW1hQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vc2NoZW1hL2NvbW1hbmQvc2NoZW1hLWFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcyB9IGZyb20gJy4uLy4uL3NvdXJjZS9jb21tYW5kL29yaWdpbi9lZGl0L3N0cnVjdHVyZS5lZGl0LXNvdXJjZS1pdGVtLnBhcmFtcyc7XG5pbXBvcnQgeyBQYWdpbmdDb25maWcgfSBmcm9tICcuLi8uLi9wYWdpbmcvcGFnaW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vc291cmNlL2NvbW1hbmQvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBTb3J0aW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9zb3J0aW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi9maWVsZC9kYXRhLXR5cGUvZmllbGQuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU29ydGVyIH0gZnJvbSAnLi9zb3J0L3N0cnVjdHVyZS5zb3J0ZXInO1xuaW1wb3J0IHsgRmlsdGVyQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9maWx0ZXIvZmlsdGVyLWNvbmZpZyc7XG5pbXBvcnQgeyBRdWlja0ZpbHRlcnNDb25maWcgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlL2ZpbHRlci9xdWljay1maWx0ZXJzLmNvbmZpZyc7XG5pbXBvcnQgeyBTZWFyY2hDb25maWcgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlL3NlYXJjaC9zZWFyY2gtY29uZmlnJztcbmltcG9ydCB7IFNlYXJjaE1hbmFnZXIgfSBmcm9tICcuL3NlYXJjaC9zZWFyY2gubWFuYWdlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi9zb3VyY2UvY29tbWFuZC9wcmVwYXJlZC9zdHJ1Y3R1cmUucHJlcGFyZWQtZW50aXRpZXMtc2V0LmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBTb3J0T3JkZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29tbWFuZC9jb2x1bW4vc29ydC9zb3J0LW9yZGVyJztcbmltcG9ydCB7IEZpZWxkc0luaXRlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9maWVsZC9pbml0L2ZpZWxkcy1pbml0ZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vc2NoZW1hL3NjaGVtYS10aGVtZSc7XG5cbkBSb290QWdncmVnYXRlXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQWdncmVnYXRlIGV4dGVuZHMgQWdncmVnYXRlIHtcblxuXHRwcml2YXRlIGZvcm1hdGlvbkFnZ3JlZ2F0ZTogRm9ybWF0aW9uQWdncmVnYXRlO1xuXG5cdHByaXZhdGUgc2NoZW1hOiBTY2hlbWFBZ2dyZWdhdGU7XG5cblx0cHJpdmF0ZSBwYWdpbmdBZ2dyZWdhdGU6IFBhZ2luZ0FnZ3JlZ2F0ZTtcblxuXHRwcml2YXRlIHNvdXJjZU1hbmFnZXI6IFNvdXJjZU1hbmFnZXI7XG5cblx0cHJpdmF0ZSBzb3J0ZXJDb2xsZWN0aW9uOiBTb3J0ZXJDb2xsZWN0aW9uO1xuXG5cdHByaXZhdGUgZmlsdGVyTWFuYWdlcjogRmlsdGVyTWFuYWdlcjtcblxuXHRwcml2YXRlIHNlYXJjaE1hbmFnZXI6IFNlYXJjaE1hbmFnZXI7XG5cblx0cHJpdmF0ZSB2ZXJ0aWNhbEZvcm1hdGlvbjogVmVydGljYWxGb3JtYXRpb247XG5cblx0cHJpdmF0ZSBmaWVsZENvbGxlY3Rpb246IEZpZWxkQ29sbGVjdGlvbjtcblxuXHRwcml2YXRlIGFnZ3JlZ2F0aW9uTWFuYWdlcjogQWdncmVnYXRpb25NYW5hZ2VyO1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cGFnaW5nQWdncmVnYXRlOiBQYWdpbmdBZ2dyZWdhdGUsXG5cdFx0XHRcdGZvcm1hdGlvbkFnZ3JlZ2F0ZTogRm9ybWF0aW9uQWdncmVnYXRlLFxuXHRcdFx0XHRzb3VyY2VNYW5hZ2VyOiBTb3VyY2VNYW5hZ2VyLFxuXHRcdFx0XHR2ZXJ0aWNhbEZvcm1hdGlvbjogVmVydGljYWxGb3JtYXRpb24sXG5cdFx0XHRcdGFnZ3JlZ2F0aW9uTWFuYWdlcjogQWdncmVnYXRpb25NYW5hZ2VyLFxuXHRcdFx0XHRzb3J0ZXJDb2xsZWN0aW9uOiBTb3J0ZXJDb2xsZWN0aW9uLFxuXHRcdFx0XHRmaWx0ZXJDb2xsZWN0aW9uOiBGaWx0ZXJNYW5hZ2VyLFxuXHRcdFx0XHRzZWFyY2hNYW5hZ2VyOiBTZWFyY2hNYW5hZ2VyLFxuXHRcdFx0XHRmaWVsZENvbGxlY3Rpb246IEZpZWxkQ29sbGVjdGlvbixcblx0XHRcdFx0c2NoZW1hOiBTY2hlbWFBZ2dyZWdhdGUpIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpO1xuXHRcdHRoaXMucGFnaW5nQWdncmVnYXRlID0gcGFnaW5nQWdncmVnYXRlO1xuXHRcdHRoaXMuZm9ybWF0aW9uQWdncmVnYXRlID0gZm9ybWF0aW9uQWdncmVnYXRlO1xuXHRcdHRoaXMuc291cmNlTWFuYWdlciA9IHNvdXJjZU1hbmFnZXI7XG5cdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbiA9IHZlcnRpY2FsRm9ybWF0aW9uO1xuXHRcdHRoaXMuYWdncmVnYXRpb25NYW5hZ2VyID0gYWdncmVnYXRpb25NYW5hZ2VyO1xuXHRcdHRoaXMuc29ydGVyQ29sbGVjdGlvbiA9IHNvcnRlckNvbGxlY3Rpb247XG5cdFx0dGhpcy5maWx0ZXJNYW5hZ2VyID0gZmlsdGVyQ29sbGVjdGlvbjtcblx0XHR0aGlzLnNlYXJjaE1hbmFnZXIgPSBzZWFyY2hNYW5hZ2VyO1xuXHRcdHRoaXMuZmllbGRDb2xsZWN0aW9uID0gZmllbGRDb2xsZWN0aW9uO1xuXHRcdHRoaXMuc2NoZW1hID0gc2NoZW1hO1xuXHR9XG5cblx0aW5pdCgpOiB2b2lkIHtcblx0XHR0aGlzLmluaXRUaGVtZSgpO1xuXHR9XG5cblx0Z2V0VmVydGljYWxGb3JtYXRpb24oKTogVmVydGljYWxGb3JtYXRpb24ge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uO1xuXHR9XG5cblx0c2V0QWdncmVnYXRpb25FbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50PiB7XG5cblx0XHR0aGlzLmFnZ3JlZ2F0aW9uTWFuYWdlci5zZXRFbmFibGVkKGVuYWJsZWQpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblxuXHRcdHJldHVybiB0aGlzLmdldEV2ZW50cygpO1xuXHR9XG5cblx0c2V0T3JpZ2luKGl0ZW1zOiBBcnJheTxhbnk+KTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudD4ge1xuXG5cdFx0dGhpcy5hZGRFdmVudChcblx0XHRcdHRoaXMuc291cmNlTWFuYWdlci5zZXRPcmlnaW4oaXRlbXMsIHRoaXMuZ2V0SWQoKSlcblx0XHQpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblxuXHRcdHJldHVybiB0aGlzLmdldEV2ZW50cygpO1xuXHR9XG5cblx0ZWRpdEl0ZW0oZWRpdFBhcmFtczogU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1QYXJhbXMpOiBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50PiB7XG5cblx0XHRjb25zdCBpdGVtSWQgPSBlZGl0UGFyYW1zLmdldEl0ZW1JZCgpLFxuXHRcdFx0ZmllbGRJZCA9IGVkaXRQYXJhbXMuZ2V0Q29sdW1uRmllbGRJZCgpLFxuXHRcdFx0ZmllbGQgPSB0aGlzLmZpZWxkQ29sbGVjdGlvbi5nZXRGaWVsZChmaWVsZElkIGFzIGFueSksIC8vIGFzIEZpZWxkSWRcblx0XHRcdHZhbHVlID0gZWRpdFBhcmFtcy5nZXRWYWx1ZSgpO1xuXG5cdFx0Y29uc3QgZWRpdEl0ZW1FdmVudHMgPSB0aGlzLnNvdXJjZU1hbmFnZXIuZWRpdE9yaWdpbkl0ZW0oaXRlbUlkLCB2YWx1ZSwgZmllbGQsIHRoaXMuZ2V0SWQoKSk7XG5cblx0XHRlZGl0SXRlbUV2ZW50cy5mb3JFYWNoKChlKSA9PiB0aGlzLmFkZEV2ZW50KGUpKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5nZXRFdmVudHMoKTtcblx0fVxuXG5cdHNldEhlaWdodChoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuZ2V0U2NoZW1hKCkuc2V0SGVpZ2h0KGhlaWdodCk7XG5cblx0XHRjb25zdCB2aWV3cG9ydEhlaWdodCA9IHRoaXMuZ2V0U2NoZW1hKCkuZ2V0Q29udGFpbmVySGVpZ2h0KCk7XG5cblx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLnNldFZpZXdwb3J0SGVpZ2h0KHZpZXdwb3J0SGVpZ2h0KTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlQmFzZWRPblZpcnR1YWxTY3JvbGwoKTtcblx0fVxuXG5cdHNldFRoZW1lKHRoZW1lOiBTY2hlbWFUaGVtZSk6IHZvaWQge1xuXHRcdHRoaXMuZ2V0U2NoZW1hKCkuc2V0VGhlbWUodGhlbWUpO1xuXG5cdFx0Ly8gIzE3MDcgTW92ZSB0byBTY2hlbWVBZ2dyZWdhdGVcblx0XHRpZiAodGhlbWUgPT09IFNjaGVtYVRoZW1lLk1BVEVSSUFMKSB7XG5cdFx0XHR0aGlzLmdldFZlcnRpY2FsRm9ybWF0aW9uKCkuc2V0Um93SGVpZ2h0KDUyKTtcblx0XHR9XG5cblx0XHRpZiAodGhlbWUgPT09IFNjaGVtYVRoZW1lLkdFTkVSSUMpIHtcblx0XHRcdHRoaXMuZ2V0VmVydGljYWxGb3JtYXRpb24oKS5zZXRSb3dIZWlnaHQoNDIpO1xuXHRcdH1cblxuXHRcdGlmICh0aGVtZSA9PT0gU2NoZW1hVGhlbWUuRkFCUklDKSB7XG5cdFx0XHR0aGlzLmdldFZlcnRpY2FsRm9ybWF0aW9uKCkuc2V0Um93SGVpZ2h0KDM2KTtcblx0XHR9XG5cblx0XHRpZiAodGhlbWUgPT09IFNjaGVtYVRoZW1lLkxJR0hUKSB7XG5cdFx0XHR0aGlzLmdldFZlcnRpY2FsRm9ybWF0aW9uKCkuc2V0Um93SGVpZ2h0KDU2KTtcblx0XHR9XG5cblx0XHRpZiAodGhlbWUgPT09IFNjaGVtYVRoZW1lLkRBUkspIHtcblx0XHRcdHRoaXMuZ2V0VmVydGljYWxGb3JtYXRpb24oKS5zZXRSb3dIZWlnaHQoMzgpO1xuXHRcdH1cblx0fVxuXG5cdHNldEZvcm1hdGlvbihmb3JtYXRpb246IEZvcm1hdGlvbkFnZ3JlZ2F0ZSk6IHZvaWQge1xuXHRcdHRoaXMuZm9ybWF0aW9uQWdncmVnYXRlID0gZm9ybWF0aW9uO1xuXHR9XG5cblx0c2V0U2Nyb2xsUG9zaXRpb24ocG9zaXRpb246IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb24uc2V0U2Nyb2xsUG9zaXRpb24ocG9zaXRpb24pO1xuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlQmFzZWRPblZpcnR1YWxTY3JvbGwoKTtcblx0fVxuXG5cdGdldEZvcm1hdGlvbigpOiBGb3JtYXRpb25BZ2dyZWdhdGUge1xuXHRcdHJldHVybiB0aGlzLmZvcm1hdGlvbkFnZ3JlZ2F0ZTtcblx0fVxuXG5cdHNldFNjaGVtYShzY2hlbWE6IFNjaGVtYUFnZ3JlZ2F0ZSk6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hID0gc2NoZW1hO1xuXHR9XG5cblx0Z2V0U2NoZW1hKCk6IFNjaGVtYUFnZ3JlZ2F0ZSB7XG5cdFx0cmV0dXJuIHRoaXMuc2NoZW1hO1xuXHR9XG5cblx0Z2V0UGFnaW5nKCk6IFBhZ2luZ0FnZ3JlZ2F0ZSB7XG5cdFx0cmV0dXJuIHRoaXMucGFnaW5nQWdncmVnYXRlO1xuXHR9XG5cblx0Y2hhbmdlUGFnaW5nKGNvbmZpZzogUGFnaW5nQ29uZmlnKSB7XG5cdFx0dGhpcy5wYWdpbmdBZ2dyZWdhdGUuY2hhbmdlKGNvbmZpZyk7XG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblx0fVxuXG5cdHNldFBhZ2luZyhwYWdpbmc6IFBhZ2luZ0FnZ3JlZ2F0ZSk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nQWdncmVnYXRlID0gcGFnaW5nO1xuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cdH1cblxuXHRuZXh0UGFnZSgpOiB2b2lkIHtcblxuXHRcdHRoaXMucGFnaW5nQWdncmVnYXRlLm5leHRQYWdlKCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXHR9XG5cblx0cHJldlBhZ2UoKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdBZ2dyZWdhdGUucHJldlBhZ2UoKTtcblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXHR9XG5cblx0Y2hhbmdlUGFnZVNpemUocGFnZVNpemU6IG51bWJlcik6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ+IHtcblxuXHRcdGNvbnN0IHBhZ2luZ0V2ZW50cyA9IHRoaXMucGFnaW5nQWdncmVnYXRlLmNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplKTtcblxuXHRcdC8vIFRPRE9cblx0XHRwYWdpbmdFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcblx0XHRcdHRoaXMuYWRkRXZlbnQoZXZlbnQpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblxuXHRcdHJldHVybiB0aGlzLmdldEV2ZW50cygpO1xuXHR9XG5cblx0Z2V0RW50aXRpZXMoKTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0U2xpY2VkRW50aXRpZXMoKTtcblx0fVxuXG5cdGdldFNvdXJjZSgpOiBTb3VyY2VNYW5hZ2VyIHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2VNYW5hZ2VyO1xuXHR9XG5cblx0Y3JlYXRlRmllbGRzKGNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZz4pOiBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50PiB7XG5cdFx0dGhpcy5maWVsZENvbGxlY3Rpb24uaW5pdEZpZWxkcyhjb2x1bW5zKTtcblxuXHRcdGNvbnN0IHR5cGVGaWVsZHMgPSB0aGlzLmZpZWxkQ29sbGVjdGlvbi5nZXRBbGxGaWVsZHMoKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHRuZXcgRmllbGRzSW5pdGVkQWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCBjb2x1bW5zLCB0eXBlRmllbGRzKVxuXHRcdCk7XG5cblx0XHRyZXR1cm4gdGhpcy5nZXRFdmVudHMoKTtcblx0fVxuXG5cdHNldFNvcnRpbmdDb25maWcoY29uZmlnOiBTb3J0aW5nQ29uZmlnKTogdm9pZCB7XG5cdFx0dGhpcy5zb3J0ZXJDb2xsZWN0aW9uLnNldENvbmZpZyhjb25maWcpO1xuXHR9XG5cblx0dG9nZ2xlU29ydChmaWVsZElkOiBGaWVsZElkKTogQXJyYXk8U3RydWN0dXJlU29ydGVyPiB7XG5cblx0XHRjb25zdCBmaWVsZCA9IHRoaXMuZmllbGRDb2xsZWN0aW9uLmdldEZpZWxkKGZpZWxkSWQpO1xuXG5cdFx0dGhpcy5zb3J0ZXJDb2xsZWN0aW9uLnRvZ2dsZShmaWVsZCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIHRoaXMuc29ydGVyQ29sbGVjdGlvbi5nZXRBbGwoKTtcblx0fVxuXG5cdHNldFNvcnRPcmRlcihmaWVsZElkOiBGaWVsZElkLCBzb3J0T3JkZXI6IFNvcnRPcmRlcik6IEFycmF5PFN0cnVjdHVyZVNvcnRlcj4ge1xuXG5cdFx0Y29uc3QgZmllbGQgPSB0aGlzLmZpZWxkQ29sbGVjdGlvbi5nZXRGaWVsZChmaWVsZElkKTtcblxuXHRcdHRoaXMuc29ydGVyQ29sbGVjdGlvbi5zZXRTb3J0T3JkZXIoZmllbGQsIHNvcnRPcmRlcik7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIHRoaXMuc29ydGVyQ29sbGVjdGlvbi5nZXRBbGwoKTtcblx0fVxuXG5cdHNldEZpbHRlckNvbmZpZyhjb25maWc6IEZpbHRlckNvbmZpZyk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyTWFuYWdlci5nZXRTZXR0aW5ncygpLnNldEZpbHRlckNvbmZpZyhjb25maWcpO1xuXHR9XG5cblx0c2V0U2VhcmNoaW5nQ29uZmlnKGNvbmZpZzogU2VhcmNoQ29uZmlnKTogdm9pZCB7XG5cdFx0dGhpcy5maWx0ZXJNYW5hZ2VyLmdldFNldHRpbmdzKCkuc2V0U2VhcmNoaW5nQ29uZmlnKGNvbmZpZyk7XG5cdH1cblxuXHRzZXRRdWlja0ZpbHRlcnNDb25maWcoY29uZmlnOiBRdWlja0ZpbHRlcnNDb25maWcpOiB2b2lkIHtcblx0XHR0aGlzLmZpbHRlck1hbmFnZXIuZ2V0U2V0dGluZ3MoKS5zZXRRdWlja0ZpbHRlcnNDb25maWcoY29uZmlnKTtcblx0fVxuXG5cdHRvZ2dsZUZpbHRlcihmaWVsZElkOiBGaWVsZElkLCBleHRlcm5hbEZpbHRlcklkOiBzdHJpbmcsIGZpbHRlclZhbHVlOiBzdHJpbmcpOiBBcnJheTxBZ2dyZWdhdGVFdmVudD4ge1xuXG5cdFx0Y29uc3QgZmllbGQgPSB0aGlzLmZpZWxkQ29sbGVjdGlvbi5nZXRGaWVsZChmaWVsZElkKTtcblxuXHRcdC8vIEZpZWxkIG5vdCBmb3VuZFxuXHRcdC8vIFRPRE8gdGhyb3cgYWdncmVnYXRlIGV2ZW50XG5cdFx0aWYgKGZpZWxkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cblx0XHR0aGlzLmZpbHRlck1hbmFnZXIuYWRkRmlsdGVyKGZpZWxkLCBleHRlcm5hbEZpbHRlcklkLCBmaWx0ZXJWYWx1ZSk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0YWRkU2VhcmNoUGhyYXNlKHBocmFzZTogc3RyaW5nKTogQXJyYXk8QWdncmVnYXRlRXZlbnQ+IHtcblxuXHRcdGNvbnN0IGZpZWxkcyA9IHRoaXMuZmllbGRDb2xsZWN0aW9uLmdldEFsbEZpZWxkcygpO1xuXG5cdFx0dGhpcy5zZWFyY2hNYW5hZ2VyLmFkZFNlYXJjaFBocmFzZShmaWVsZHMsIHBocmFzZSk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0cmVtb3ZlU2VhcmNoUGhyYXNlKCk6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PiB7XG5cblx0XHR0aGlzLnNlYXJjaE1hbmFnZXIucmVtb3ZlU2VhcmNoRmlsdGVycygpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblxuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlU291cmNlKCk6IHZvaWQge1xuXG5cdFx0aWYgKCF0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0T3JpZ2luKCkgfHwgIXRoaXMucGFnaW5nQWdncmVnYXRlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gVE9ETyBSZWZhY3RvclxuXHRcdHRoaXMuc291cmNlTWFuYWdlci5zZXRFbnRpdGllcyh0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0T3JpZ2luKCkpO1xuXG5cdFx0Ly8gZmlsdGVyaW5nXG5cdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnNldEVudGl0aWVzKHRoaXMuZmlsdGVyTWFuYWdlci5maWx0ZXIodGhpcy5zb3VyY2VNYW5hZ2VyLmdldEVudGl0aWVzKCkpKTtcblxuXHRcdC8vIHNlYXJjaFxuXHRcdGNvbnN0IHNlYXJjaGVkRW50aXRpZXMgPSB0aGlzLnNlYXJjaE1hbmFnZXIuc2VhcmNoKHRoaXMuc291cmNlTWFuYWdlci5nZXRFbnRpdGllcygpKTtcblx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2V0RW50aXRpZXMoc2VhcmNoZWRFbnRpdGllcyk7XG5cblx0XHQvLyBzb3J0aW5nXG5cdFx0Y29uc3QgZW50cyA9IHRoaXMuc29ydGVyQ29sbGVjdGlvbi5zb3J0KHRoaXMuc291cmNlTWFuYWdlci5nZXRFbnRpdGllcygpKTtcblx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2V0RW50aXRpZXMoZW50cyk7XG5cblx0XHQvLyBjYWxjdWxhdGUgZmlsdGVyZWRFbnRpdGllc1xuXHRcdHRoaXMuc291cmNlTWFuYWdlci5zZXRQcmVwYXJlZEVudGl0aWVzKCk7XG5cblx0XHR0aGlzLnBhZ2luZ0FnZ3JlZ2F0ZS5zZXRTb3VyY2VTaXplKHRoaXMuc291cmNlTWFuYWdlci5nZXRQcmVwYXJlZEVudGl0aWVzKCkubGVuZ3RoKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQobmV3IFN0cnVjdHVyZVByZXBhcmVkRW50aXRpZXNTZXRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCksIGVudHMpKTtcblxuXHRcdC8vIGFnZ3JlZ2F0aW9uc1xuXHRcdGNvbnN0IGFnZ3JlZ2F0aW9uRXZlbnRzID0gdGhpcy5hZ2dyZWdhdGlvbk1hbmFnZXIuY2FsY3VsYXRlKFxuXHRcdFx0dGhpcy5maWVsZENvbGxlY3Rpb24uZ2V0QWxsRmllbGRzKCksXG5cdFx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0RW50aXRpZXMoKVxuXHRcdCk7XG5cblx0XHRhZ2dyZWdhdGlvbkV2ZW50cy5mb3JFYWNoKChhZTogQWdncmVnYXRlRXZlbnQpID0+IHtcblx0XHRcdHRoaXMuYWRkRXZlbnQoYWUpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gcGFnaW5nXG5cdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnNldEVudGl0aWVzKHRoaXMucGFnaW5nQWdncmVnYXRlLnNhbXBsZSh0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0RW50aXRpZXMoKSkpO1xuXG5cdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbi5zZXRTb3VyY2VTaXplKHRoaXMuc291cmNlTWFuYWdlci5nZXRFbnRpdGllcygpLmxlbmd0aCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZUJhc2VkT25WaXJ0dWFsU2Nyb2xsKCk7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZVNvdXJjZUJhc2VkT25WaXJ0dWFsU2Nyb2xsKCk6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMudmVydGljYWxGb3JtYXRpb24uaXNFbmFibGVkKCkpIHtcblxuXHRcdFx0Y29uc3QgcmFuZ2UgPSB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLmdldFJhbmdlKCk7XG5cblx0XHRcdHRoaXMuc291cmNlTWFuYWdlci5zZXRTbGljZWRFbnRpdGllcyhcblx0XHRcdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLmdldEVudGl0aWVzKCkuc2xpY2UocmFuZ2UuZ2V0U3RhcnQoKSwgcmFuZ2UuZ2V0RW5kKCkpXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2V0U2xpY2VkRW50aXRpZXMoXG5cdFx0XHRcdHRoaXMuc291cmNlTWFuYWdlci5nZXRFbnRpdGllcygpXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgaW5pdFRoZW1lKCkge1xuXHRcdGNvbnN0IHRoZW1lID0gdGhpcy5nZXRTY2hlbWEoKS5nZXRUaGVtZSgpO1xuXG5cdFx0dGhpcy5zZXRUaGVtZSh0aGVtZSk7XG5cdH1cblxufVxuIl19