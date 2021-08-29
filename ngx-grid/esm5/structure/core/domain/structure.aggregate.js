/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateRoot } from '@generic-ui/hermes';
import { StructurePreparedEntitiesSetAggregateEvent } from '../../source/core/domain/prepared/structure.prepared-entities-set.aggregate-event';
import { FieldsInitedAggregateEvent } from '../../field/core/domain/init/fields-inited.aggregate-event';
import { SchemaTheme } from '../../../schema/core/api/theme/schema-theme';
import { SchemaAggregate } from '../../../schema/core/domain/schema.aggregate';
import { StructureCreatedAggregateEvent } from './create-structure/structure-created.aggregate-event';
import { Override } from '../../../common/cdk/decorators';
import { FilterTypesInitedAggregateEvent } from '../../filter/core/domain/type/init/filter-types-inited.aggregate-event';
import { AllFiltersRemovedAggregateEvent } from '../../filter/core/domain/core/remove-all/all-filters-removed.aggregate-event';
import { FilterAddedAggregateEvent } from '../../filter/core/domain/core/add/filter-added.aggregate-event';
import { FilterRemovedAggregateEvent } from '../../filter/core/domain/core/remove/filter-removed.aggregate-event';
import { UniqueFilterCalculatedAggregateEvent } from '../../filter/core/domain/unique/calculate/unique-filter-calculated.aggregate-event';
import { UniqueFilterSelectedAggregateEvent } from '../../filter/core/domain/unique/select/unique-filter-selected.aggregate-event';
import { UniqueFilterUnselectedAggregateEvent } from '../../filter/core/domain/unique/unselect/unique-filter-unselected.aggregate-event';
import { AllUniqueFilterUnselectedAggregateEvent } from '../../filter/core/domain/unique/unselect-all/all-unique-filter-unselected.aggregate-event';
import { AllUniqueFilterSelectedAggregateEvent } from '../../filter/core/domain/unique/select-all/all-unique-filter-selected.aggregate-event';
import { SelectedRowChangedAggregateEvent } from '../../source/core/domain/formation/selected-row-changed.aggregate-event';
import { SelectionEnabledSetAggregateEvent } from '../../source/core/domain/formation/set-enabled/selection-enabled-set.aggregate-event';
import { SelectionModeSetAggregateEvent } from '../../source/core/domain/formation/mode/selection-mode-set.aggregate-event';
import { structureKey } from '../api/structre.key';
var StructureAggregate = /** @class */ (function (_super) {
    tslib_1.__extends(StructureAggregate, _super);
    function StructureAggregate(structureId, pagingAggregate, sourceManager, verticalFormation, summariesManager, sorterCollection, filterManager, uniqueFilterManager, searchManager, fieldCollection) {
        var _this = _super.call(this, structureId, structureKey) || this;
        _this.pagingManager = pagingAggregate;
        _this.sourceManager = sourceManager;
        _this.verticalFormation = verticalFormation;
        _this.summariesManager = summariesManager;
        _this.sorterCollection = sorterCollection;
        _this.filterManager = filterManager;
        _this.uniqueFilterManager = uniqueFilterManager;
        _this.searchManager = searchManager;
        _this.fieldCollection = fieldCollection;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureAggregate.prototype.createEvent = /**
     * @return {?}
     */
    function () {
        return StructureCreatedAggregateEvent;
    };
    /**
     * @return {?}
     */
    StructureAggregate.prototype.clearEvents = /**
     * @return {?}
     */
    function () {
        _super.prototype.clearEvents.call(this);
        this.pagingManager.clearEvents();
    };
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
     * @param {?} enabled
     * @return {?}
     */
    StructureAggregate.prototype.setVerticalFormationEnabled = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.verticalFormation.setEnabled(enabled);
        this.calculateSource();
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
    StructureAggregate.prototype.setSummariesEnabled = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.summariesManager.setEnabled(enabled);
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
        this.calculateUniqueValues();
        this.calculateSource();
        return this.getEvents();
    };
    /**
     * @return {?}
     */
    StructureAggregate.prototype.deleteAllSelected = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    StructureAggregate.prototype.deleteItem = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        this.addEvent(this.sourceManager.deleteOriginItem(payload, this.getId()));
        this.generateSelectedRowChangedEvent();
        this.calculateSource();
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
        // TODO
        // this.calculateUniqueValues();
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
        this.verticalFormation.setViewportHeight(height);
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
     * @param {?} index
     * @return {?}
     */
    StructureAggregate.prototype.scrollToIndex = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.addEvent(this.verticalFormation.scrollToIndex(index));
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    StructureAggregate.prototype.setSelection = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.sourceManager.getFormation().setSelection(enabled);
        this.addEvent(new SelectionEnabledSetAggregateEvent(this.getId(), enabled));
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    StructureAggregate.prototype.setSelectionMode = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        this.sourceManager.getFormation().setMode(mode);
        this.addEvent(new SelectionModeSetAggregateEvent(this.getId(), mode));
    };
    /**
     * @param {?} selectedRow
     * @param {?} type
     * @return {?}
     */
    StructureAggregate.prototype.toggleRow = /**
     * @param {?} selectedRow
     * @param {?} type
     * @return {?}
     */
    function (selectedRow, type) {
        this.sourceManager.toggleRow(selectedRow, type);
        this.generateSelectedRowChangedEvent();
    };
    /**
     * @return {?}
     */
    StructureAggregate.prototype.selectAll = /**
     * @return {?}
     */
    function () {
        this.sourceManager.selectAll();
        this.generateSelectedRowChangedEvent();
    };
    /**
     * @return {?}
     */
    StructureAggregate.prototype.unselectAll = /**
     * @return {?}
     */
    function () {
        this.sourceManager.unselectAll();
        this.generateSelectedRowChangedEvent();
    };
    /**
     * @return {?}
     */
    StructureAggregate.prototype.getFormation = /**
     * @return {?}
     */
    function () {
        return this.sourceManager.getFormation();
    };
    /**
     * @return {?}
     */
    StructureAggregate.prototype.getPaging = /**
     * @return {?}
     */
    function () {
        return this.pagingManager;
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
        this.pagingManager.change(config);
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
        this.pagingManager = paging;
        this.calculateSource();
    };
    /**
     * @return {?}
     */
    StructureAggregate.prototype.nextPage = /**
     * @return {?}
     */
    function () {
        this.pagingManager.nextPage();
        this.calculateSource();
    };
    /**
     * @return {?}
     */
    StructureAggregate.prototype.prevPage = /**
     * @return {?}
     */
    function () {
        this.pagingManager.prevPage();
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
        var pagingEvents = this.pagingManager.changePageSize(pageSize);
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
     * @param {?} fieldConfigs
     * @return {?}
     */
    StructureAggregate.prototype.createFields = /**
     * @param {?} fieldConfigs
     * @return {?}
     */
    function (fieldConfigs) {
        this.fieldCollection.initFields(fieldConfigs);
        /** @type {?} */
        var fields = this.fieldCollection.getAllFields();
        this.addEvent(new FieldsInitedAggregateEvent(this.getId(), fieldConfigs, fields));
        this.filterManager.assignFilterTypes(fields);
        this.addEvent(new FilterTypesInitedAggregateEvent(this.getId(), this.filterManager.getFilterTypes()));
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
        // this.filterManager.addFilter(field, externalFilterId, filterValue);
        // this.filterManager.a
        this.calculateSource();
        return [];
    };
    /**
     * @param {?} fieldId
     * @param {?} filterTypeId
     * @param {?} value
     * @return {?}
     */
    StructureAggregate.prototype.addFilter = /**
     * @param {?} fieldId
     * @param {?} filterTypeId
     * @param {?} value
     * @return {?}
     */
    function (fieldId, filterTypeId, value) {
        this.filterManager.add(fieldId, filterTypeId, value);
        /** @type {?} */
        var fields = this.fieldCollection.getFieldsAsMap();
        /** @type {?} */
        var activeFilters = this.filterManager.getAllActiveFilters(fields);
        this.addEvent(new FilterAddedAggregateEvent(this.getId(), activeFilters));
        this.calculateSource();
    };
    /**
     * @return {?}
     */
    StructureAggregate.prototype.removeAllFilters = /**
     * @return {?}
     */
    function () {
        this.filterManager.removeAll();
        this.addEvent(new AllFiltersRemovedAggregateEvent(this.getId()));
        this.calculateSource();
    };
    /**
     * @param {?} filterId
     * @return {?}
     */
    StructureAggregate.prototype.removeFilter = /**
     * @param {?} filterId
     * @return {?}
     */
    function (filterId) {
        this.filterManager.remove(filterId);
        /** @type {?} */
        var fields = this.fieldCollection.getFieldsAsMap();
        /** @type {?} */
        var activeFilters = this.filterManager.getAllActiveFilters(fields);
        this.addEvent(new FilterRemovedAggregateEvent(this.getId(), activeFilters));
        this.calculateSource();
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
     * @param {?} fieldId
     * @return {?}
     */
    StructureAggregate.prototype.selectAllUniqueFilter = /**
     * @param {?} fieldId
     * @return {?}
     */
    function (fieldId) {
        this.uniqueFilterManager.selectAll(fieldId);
        this.addEvent(new AllUniqueFilterSelectedAggregateEvent(this.getId()));
        this.generateCalculateUniqueValuesAggregateEvent();
        this.calculateSource();
    };
    /**
     * @param {?} fieldId
     * @param {?} uniqueValueId
     * @return {?}
     */
    StructureAggregate.prototype.selectUniqueFilter = /**
     * @param {?} fieldId
     * @param {?} uniqueValueId
     * @return {?}
     */
    function (fieldId, uniqueValueId) {
        this.uniqueFilterManager.select(fieldId, uniqueValueId);
        this.addEvent(new UniqueFilterSelectedAggregateEvent(this.getId()));
        this.generateCalculateUniqueValuesAggregateEvent();
        this.calculateSource();
    };
    /**
     * @param {?} fieldId
     * @return {?}
     */
    StructureAggregate.prototype.unselectAllUniqueFilter = /**
     * @param {?} fieldId
     * @return {?}
     */
    function (fieldId) {
        this.uniqueFilterManager.unselectAll(fieldId);
        this.addEvent(new AllUniqueFilterUnselectedAggregateEvent(this.getId()));
        this.generateCalculateUniqueValuesAggregateEvent();
        this.calculateSource();
    };
    /**
     * @param {?} fieldId
     * @param {?} uniqueValueId
     * @return {?}
     */
    StructureAggregate.prototype.unselectUniqueFilter = /**
     * @param {?} fieldId
     * @param {?} uniqueValueId
     * @return {?}
     */
    function (fieldId, uniqueValueId) {
        this.uniqueFilterManager.unselect(fieldId, uniqueValueId);
        this.addEvent(new UniqueFilterUnselectedAggregateEvent(this.getId()));
        this.generateCalculateUniqueValuesAggregateEvent();
        this.calculateSource();
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
        if (!this.sourceManager.getOrigin() || !this.pagingManager) {
            return;
        }
        // TODO Refactor
        this.sourceManager.setEntities(this.sourceManager.getOrigin());
        // filtering
        this.sourceManager.setEntities(this.filterManager.filter(this.sourceManager.getEntities(), this.fieldCollection.getFieldsAsMap()));
        // search
        /** @type {?} */
        var searchedEntities = this.searchManager.search(this.sourceManager.getEntities());
        this.sourceManager.setEntities(searchedEntities);
        // unique filtering
        this.sourceManager.setEntities(this.uniqueFilterManager.filterAll(this.sourceManager.getEntities(), this.fieldCollection.getAllFields()));
        // sorting
        /** @type {?} */
        var ents = this.sorterCollection.sort(this.sourceManager.getEntities());
        this.sourceManager.setEntities(ents);
        // calculate filteredEntities
        this.sourceManager.setPreparedEntities();
        this.pagingManager.setSourceSize(this.sourceManager.getPreparedEntities().length);
        this.addEvent(new StructurePreparedEntitiesSetAggregateEvent(this.getId(), ents));
        // summaries
        /** @type {?} */
        var summariesEvents = this.summariesManager.calculate(this.fieldCollection.getAllFields(), this.sourceManager.getEntities());
        summariesEvents.forEach((/**
         * @param {?} ae
         * @return {?}
         */
        function (ae) {
            _this.addEvent(ae);
        }));
        // paging
        this.sourceManager.setEntities(this.pagingManager.sample(this.sourceManager.getEntities()));
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
        // TODO
        /** @type {?} */
        var theme = SchemaAggregate.DEFAULT_THEME;
        this.setTheme(theme);
    };
    /**
     * @private
     * @return {?}
     */
    StructureAggregate.prototype.calculateUniqueValues = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var fields = this.fieldCollection.getAllFields();
        /** @type {?} */
        var items = this.sourceManager.getOrigin();
        this.uniqueFilterManager.calculateAll(items, fields);
        this.generateCalculateUniqueValuesAggregateEvent();
    };
    /**
     * @private
     * @return {?}
     */
    StructureAggregate.prototype.generateCalculateUniqueValuesAggregateEvent = /**
     * @private
     * @return {?}
     */
    function () {
        this.addEvent(new UniqueFilterCalculatedAggregateEvent(this.getId(), this.uniqueFilterManager.getAll(this.fieldCollection.getAllFields())));
    };
    /**
     * @private
     * @return {?}
     */
    StructureAggregate.prototype.generateSelectedRowChangedEvent = /**
     * @private
     * @return {?}
     */
    function () {
        this.addEvent(new SelectedRowChangedAggregateEvent(this.getId(), this.sourceManager.getFormation().getSelectedRows(), this.sourceManager.getFormation().isAllSelected(), this.sourceManager.getFormation().isAllUnselected()));
    };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], StructureAggregate.prototype, "clearEvents", null);
    return StructureAggregate;
}(AggregateRoot));
export { StructureAggregate };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureAggregate.prototype.pagingManager;
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
    StructureAggregate.prototype.summariesManager;
    /**
     * @type {?}
     * @private
     */
    StructureAggregate.prototype.uniqueFilterManager;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQXNDLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBcUJ2RixPQUFPLEVBQUUsMENBQTBDLEVBQUUsTUFBTSxtRkFBbUYsQ0FBQztBQUUvSSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN4RyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRXRHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMxRCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx3RUFBd0UsQ0FBQztBQUN6SCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw4RUFBOEUsQ0FBQztBQUUvSCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUUzRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUVsSCxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSxvRkFBb0YsQ0FBQztBQUUxSSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSwrRUFBK0UsQ0FBQztBQUNuSSxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSxtRkFBbUYsQ0FBQztBQUN6SSxPQUFPLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSwyRkFBMkYsQ0FBQztBQUNwSixPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSx1RkFBdUYsQ0FBQztBQUM5SSxPQUFPLEVB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Qlksa0JBQWtCOzs7Ozs7SUFFOUIsMkNBQXFDOzs7OztJQUVyQywyQ0FBOEM7Ozs7O0lBRTlDLDhDQUEyQzs7Ozs7SUFFM0MsMkNBQXFDOzs7OztJQUVyQywyQ0FBcUM7Ozs7O0lBRXJDLCtDQUFzRDs7Ozs7SUFFdEQsNkNBQXlDOzs7OztJQUV6Qyw4Q0FBMkM7Ozs7O0lBRTNDLGlEQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBBZ2dyZWdhdGVFdmVudFR5cGUsIEFnZ3JlZ2F0ZVJvb3QgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBQYWdpbmdNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vcGFnaW5nL2NvcmUvZG9tYWluL3BhZ2luZy5tYW5hZ2VyJztcbmltcG9ydCB7IFNvdXJjZU1hbmFnZXIgfSBmcm9tICcuLi8uLi9zb3VyY2UvY29yZS9kb21haW4vY29yZS9zb3VyY2UubWFuYWdlcic7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbiB9IGZyb20gJy4uLy4uL3ZlcnRpY2FsLWZvcm1hdGlvbi9jb3JlL2RvbWFpbi92ZXJ0aWNhbC1mb3JtYXRpb24nO1xuaW1wb3J0IHsgU3VtbWFyaWVzTWFuYWdlciB9IGZyb20gJy4uLy4uL3N1bW1hcmllcy9jb3JlL2RvbWFpbi9zdW1tYXJpZXMubWFuYWdlcic7XG5pbXBvcnQgeyBTb3J0ZXJDb2xsZWN0aW9uIH0gZnJvbSAnLi4vLi4vc29ydGluZy9jb3JlL2RvbWFpbi9zb3J0ZXIuY29sbGVjdGlvbic7XG5pbXBvcnQgeyBGaWx0ZXJNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vZmlsdGVyL2NvcmUvZG9tYWluL2ZpbHRlci5tYW5hZ2VyJztcbmltcG9ydCB7IEZpZWxkQ29sbGVjdGlvbiB9IGZyb20gJy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkLWNvbGxlY3Rpb24nO1xuaW1wb3J0IHsgRm9ybWF0aW9uTWFuYWdlciB9IGZyb20gJy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9mb3JtYXRpb24vY29yZS9mb3JtYXRpb24tbWFuYWdlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zIH0gZnJvbSAnLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL29yaWdpbi9lZGl0L3N0cnVjdHVyZS5lZGl0LXNvdXJjZS1pdGVtLnBhcmFtcyc7XG5pbXBvcnQgeyBQYWdpbmdDb25maWcgfSBmcm9tICcuLi8uLi9wYWdpbmcvY29yZS9hcGkvcGFnaW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgU29ydGluZ0NvbmZpZyB9IGZyb20gJy4uLy4uL3NvcnRpbmcvY29yZS9hcGkvc29ydGluZy1jb25maWcnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2ZpZWxkLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVNvcnRlciB9IGZyb20gJy4uLy4uL3NvcnRpbmcvY29yZS9kb21haW4vc3RydWN0dXJlLnNvcnRlcic7XG5pbXBvcnQgeyBGaWx0ZXJDb25maWcgfSBmcm9tICcuLi8uLi9maWx0ZXIvY29yZS9hcGkvZmlsdGVyLWNvbmZpZyc7XG5pbXBvcnQgeyBRdWlja0ZpbHRlcnNDb25maWcgfSBmcm9tICcuLi8uLi9maWx0ZXIvY29yZS9hcGkvcXVpY2stZmlsdGVycy5jb25maWcnO1xuaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vLi4vc2VhcmNoL2NvcmUvYXBpL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHsgU2VhcmNoTWFuYWdlciB9IGZyb20gJy4uLy4uL3NlYXJjaC9jb3JlL2RvbWFpbi9zZWFyY2gubWFuYWdlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi9zb3VyY2UvY29yZS9kb21haW4vcHJlcGFyZWQvc3RydWN0dXJlLnByZXBhcmVkLWVudGl0aWVzLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4vY29sdW1uL3NvcnQvc29ydC1vcmRlcic7XG5pbXBvcnQgeyBGaWVsZHNJbml0ZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2luaXQvZmllbGRzLWluaXRlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvdGhlbWUvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uL3NjaGVtYS9jb3JlL2RvbWFpbi9zY2hlbWEuYWdncmVnYXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNyZWF0ZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vY3JlYXRlLXN0cnVjdHVyZS9zdHJ1Y3R1cmUtY3JlYXRlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tICcuLi8uLi9maWVsZC9jb3JlL2FwaS9maWVsZC5jb25maWcnO1xuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZXNJbml0ZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uLy4uL2ZpbHRlci9jb3JlL2RvbWFpbi90eXBlL2luaXQvZmlsdGVyLXR5cGVzLWluaXRlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgQWxsRmlsdGVyc1JlbW92ZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uLy4uL2ZpbHRlci9jb3JlL2RvbWFpbi9jb3JlL3JlbW92ZS1hbGwvYWxsLWZpbHRlcnMtcmVtb3ZlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUlkIH0gZnJvbSAnLi4vLi4vZmlsdGVyL2NvcmUvZG9tYWluL3R5cGUvZmlsdGVyLXR5cGUuaWQnO1xuaW1wb3J0IHsgRmlsdGVyQWRkZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uLy4uL2ZpbHRlci9jb3JlL2RvbWFpbi9jb3JlL2FkZC9maWx0ZXItYWRkZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IEZpbHRlcklkIH0gZnJvbSAnLi4vLi4vZmlsdGVyL2NvcmUvYXBpL2ZpbHRlci5pZCc7XG5pbXBvcnQgeyBGaWx0ZXJSZW1vdmVkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi9maWx0ZXIvY29yZS9kb21haW4vY29yZS9yZW1vdmUvZmlsdGVyLXJlbW92ZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IFVuaXF1ZUZpbHRlck1hbmFnZXIgfSBmcm9tICcuLi8uLi9maWx0ZXIvY29yZS9kb21haW4vdW5pcXVlL3VuaXF1ZS1maWx0ZXItbWFuYWdlcic7XG5pbXBvcnQgeyBVbmlxdWVGaWx0ZXJDYWxjdWxhdGVkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi9maWx0ZXIvY29yZS9kb21haW4vdW5pcXVlL2NhbGN1bGF0ZS91bmlxdWUtZmlsdGVyLWNhbGN1bGF0ZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlSWQgfSBmcm9tICcuLi8uLi9maWx0ZXIvY29yZS9kb21haW4vdW5pcXVlL3VuaXF1ZS12YWx1ZS1pZCc7XG5pbXBvcnQgeyBVbmlxdWVGaWx0ZXJTZWxlY3RlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vLi4vZmlsdGVyL2NvcmUvZG9tYWluL3VuaXF1ZS9zZWxlY3QvdW5pcXVlLWZpbHRlci1zZWxlY3RlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgVW5pcXVlRmlsdGVyVW5zZWxlY3RlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vLi4vZmlsdGVyL2NvcmUvZG9tYWluL3VuaXF1ZS91bnNlbGVjdC91bmlxdWUtZmlsdGVyLXVuc2VsZWN0ZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IEFsbFVuaXF1ZUZpbHRlclVuc2VsZWN0ZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uLy4uL2ZpbHRlci9jb3JlL2RvbWFpbi91bmlxdWUvdW5zZWxlY3QtYWxsL2FsbC11bmlxdWUtZmlsdGVyLXVuc2VsZWN0ZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IEFsbFVuaXF1ZUZpbHRlclNlbGVjdGVkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi9maWx0ZXIvY29yZS9kb21haW4vdW5pcXVlL3NlbGVjdC1hbGwvYWxsLXVuaXF1ZS1maWx0ZXItc2VsZWN0ZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IFNlbGVjdGVkUm93Q2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL2Zvcm1hdGlvbi9zZWxlY3RlZC1yb3ctY2hhbmdlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgUm93U2VsZWN0VG9nZ2xlVHlwZSB9IGZyb20gJy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9mb3JtYXRpb24vY29yZS9yb3ctc2VsZWN0LXRvZ2dsZS10eXBlJztcbmltcG9ydCB7IFNlbGVjdGlvbkVuYWJsZWRTZXRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9mb3JtYXRpb24vc2V0LWVuYWJsZWQvc2VsZWN0aW9uLWVuYWJsZWQtc2V0LmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25Nb2RlIH0gZnJvbSAnLi4vLi4vc291cmNlL2NvcmUvYXBpL3Jvdy1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgU2VsZWN0aW9uTW9kZVNldEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL2Zvcm1hdGlvbi9tb2RlL3NlbGVjdGlvbi1tb2RlLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgT3JpZ2luSWQgfSBmcm9tICcuLi8uLi9zb3VyY2UvY29yZS9kb21haW4vb3JpZ2luL29yaWdpbi1pZCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVLZXkgfSBmcm9tICcuLi9hcGkvc3RydWN0cmUua2V5JztcblxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQWdncmVnYXRlIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxTdHJ1Y3R1cmVJZD4ge1xuXG5cdHByaXZhdGUgcGFnaW5nTWFuYWdlcjogUGFnaW5nTWFuYWdlcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZU1hbmFnZXI6IFNvdXJjZU1hbmFnZXI7XG5cblx0cHJpdmF0ZSBzb3J0ZXJDb2xsZWN0aW9uOiBTb3J0ZXJDb2xsZWN0aW9uO1xuXG5cdHByaXZhdGUgZmlsdGVyTWFuYWdlcjogRmlsdGVyTWFuYWdlcjtcblxuXHRwcml2YXRlIHNlYXJjaE1hbmFnZXI6IFNlYXJjaE1hbmFnZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSB2ZXJ0aWNhbEZvcm1hdGlvbjogVmVydGljYWxGb3JtYXRpb247XG5cblx0cHJpdmF0ZSBmaWVsZENvbGxlY3Rpb246IEZpZWxkQ29sbGVjdGlvbjtcblxuXHRwcml2YXRlIHN1bW1hcmllc01hbmFnZXI6IFN1bW1hcmllc01hbmFnZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSB1bmlxdWVGaWx0ZXJNYW5hZ2VyOiBVbmlxdWVGaWx0ZXJNYW5hZ2VyO1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cGFnaW5nQWdncmVnYXRlOiBQYWdpbmdNYW5hZ2VyLFxuXHRcdFx0XHRzb3VyY2VNYW5hZ2VyOiBTb3VyY2VNYW5hZ2VyLFxuXHRcdFx0XHR2ZXJ0aWNhbEZvcm1hdGlvbjogVmVydGljYWxGb3JtYXRpb24sXG5cdFx0XHRcdHN1bW1hcmllc01hbmFnZXI6IFN1bW1hcmllc01hbmFnZXIsXG5cdFx0XHRcdHNvcnRlckNvbGxlY3Rpb246IFNvcnRlckNvbGxlY3Rpb24sXG5cdFx0XHRcdGZpbHRlck1hbmFnZXI6IEZpbHRlck1hbmFnZXIsXG5cdFx0XHRcdHVuaXF1ZUZpbHRlck1hbmFnZXI6IFVuaXF1ZUZpbHRlck1hbmFnZXIsXG5cdFx0XHRcdHNlYXJjaE1hbmFnZXI6IFNlYXJjaE1hbmFnZXIsXG5cdFx0XHRcdGZpZWxkQ29sbGVjdGlvbjogRmllbGRDb2xsZWN0aW9uKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsIHN0cnVjdHVyZUtleSk7XG5cdFx0dGhpcy5wYWdpbmdNYW5hZ2VyID0gcGFnaW5nQWdncmVnYXRlO1xuXHRcdHRoaXMuc291cmNlTWFuYWdlciA9IHNvdXJjZU1hbmFnZXI7XG5cdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbiA9IHZlcnRpY2FsRm9ybWF0aW9uO1xuXHRcdHRoaXMuc3VtbWFyaWVzTWFuYWdlciA9IHN1bW1hcmllc01hbmFnZXI7XG5cdFx0dGhpcy5zb3J0ZXJDb2xsZWN0aW9uID0gc29ydGVyQ29sbGVjdGlvbjtcblx0XHR0aGlzLmZpbHRlck1hbmFnZXIgPSBmaWx0ZXJNYW5hZ2VyO1xuXHRcdHRoaXMudW5pcXVlRmlsdGVyTWFuYWdlciA9IHVuaXF1ZUZpbHRlck1hbmFnZXI7XG5cdFx0dGhpcy5zZWFyY2hNYW5hZ2VyID0gc2VhcmNoTWFuYWdlcjtcblx0XHR0aGlzLmZpZWxkQ29sbGVjdGlvbiA9IGZpZWxkQ29sbGVjdGlvbjtcblx0fVxuXG5cdGNyZWF0ZUV2ZW50KCk6IEFnZ3JlZ2F0ZUV2ZW50VHlwZTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblx0XHRyZXR1cm4gU3RydWN0dXJlQ3JlYXRlZEFnZ3JlZ2F0ZUV2ZW50O1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdGNsZWFyRXZlbnRzKCk6IHZvaWQge1xuXHRcdHN1cGVyLmNsZWFyRXZlbnRzKCk7XG5cdFx0dGhpcy5wYWdpbmdNYW5hZ2VyLmNsZWFyRXZlbnRzKCk7XG5cdH1cblxuXHRpbml0KCk6IHZvaWQge1xuXHRcdHRoaXMuaW5pdFRoZW1lKCk7XG5cdH1cblxuXHRzZXRWZXJ0aWNhbEZvcm1hdGlvbkVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb24uc2V0RW5hYmxlZChlbmFibGVkKTtcblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXHR9XG5cblx0Z2V0VmVydGljYWxGb3JtYXRpb24oKTogVmVydGljYWxGb3JtYXRpb24ge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uO1xuXHR9XG5cblx0c2V0U3VtbWFyaWVzRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdHRoaXMuc3VtbWFyaWVzTWFuYWdlci5zZXRFbmFibGVkKGVuYWJsZWQpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblxuXHRcdHJldHVybiB0aGlzLmdldEV2ZW50cygpO1xuXHR9XG5cblx0c2V0T3JpZ2luKGl0ZW1zOiBBcnJheTxhbnk+KTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2V0T3JpZ2luKGl0ZW1zLCB0aGlzLmdldElkKCkpXG5cdFx0KTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlVW5pcXVlVmFsdWVzKCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RXZlbnRzKCk7XG5cdH1cblxuXHRkZWxldGVBbGxTZWxlY3RlZCgpOiB2b2lkIHtcblxuXHR9XG5cblx0ZGVsZXRlSXRlbShwYXlsb2FkOiBudW1iZXIgfCBPcmlnaW5JZCB8IEFycmF5PG51bWJlcj4gfCBBcnJheTxPcmlnaW5JZD4pOiB2b2lkIHtcblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLmRlbGV0ZU9yaWdpbkl0ZW0ocGF5bG9hZCwgdGhpcy5nZXRJZCgpKVxuXHRcdCk7XG5cdFx0dGhpcy5nZW5lcmF0ZVNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50KCk7XG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblx0fVxuXG5cdGVkaXRJdGVtKGVkaXRQYXJhbXM6IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zKTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdGNvbnN0IGl0ZW1JZCA9IGVkaXRQYXJhbXMuZ2V0SXRlbUlkKCksXG5cdFx0XHRmaWVsZElkID0gZWRpdFBhcmFtcy5nZXRDb2x1bW5GaWVsZElkKCksXG5cdFx0XHRmaWVsZCA9IHRoaXMuZmllbGRDb2xsZWN0aW9uLmdldEZpZWxkKGZpZWxkSWQgYXMgYW55KSwgLy8gYXMgRmllbGRJZFxuXHRcdFx0dmFsdWUgPSBlZGl0UGFyYW1zLmdldFZhbHVlKCk7XG5cblx0XHRjb25zdCBlZGl0SXRlbUV2ZW50cyA9IHRoaXMuc291cmNlTWFuYWdlci5lZGl0T3JpZ2luSXRlbShpdGVtSWQsIHZhbHVlLCBmaWVsZCwgdGhpcy5nZXRJZCgpKTtcblxuXHRcdGVkaXRJdGVtRXZlbnRzLmZvckVhY2goKGUpID0+IHRoaXMuYWRkRXZlbnQoZSkpO1xuXG5cdFx0Ly8gVE9ET1xuXHRcdC8vIHRoaXMuY2FsY3VsYXRlVW5pcXVlVmFsdWVzKCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RXZlbnRzKCk7XG5cdH1cblxuXHRzZXRIZWlnaHQoaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcblxuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb24uc2V0Vmlld3BvcnRIZWlnaHQoaGVpZ2h0KTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlQmFzZWRPblZpcnR1YWxTY3JvbGwoKTtcblx0fVxuXG5cdHNldFRoZW1lKHRoZW1lOiBTY2hlbWFUaGVtZSk6IHZvaWQge1xuXG5cdFx0Ly8gIzE3MDcgTW92ZSB0byBTY2hlbWVBZ2dyZWdhdGVcblx0XHRpZiAodGhlbWUgPT09IFNjaGVtYVRoZW1lLk1BVEVSSUFMKSB7XG5cdFx0XHR0aGlzLmdldFZlcnRpY2FsRm9ybWF0aW9uKCkuc2V0Um93SGVpZ2h0KDUyKTtcblx0XHR9XG5cblx0XHRpZiAodGhlbWUgPT09IFNjaGVtYVRoZW1lLkdFTkVSSUMpIHtcblx0XHRcdHRoaXMuZ2V0VmVydGljYWxGb3JtYXRpb24oKS5zZXRSb3dIZWlnaHQoNDIpO1xuXHRcdH1cblxuXHRcdGlmICh0aGVtZSA9PT0gU2NoZW1hVGhlbWUuRkFCUklDKSB7XG5cdFx0XHR0aGlzLmdldFZlcnRpY2FsRm9ybWF0aW9uKCkuc2V0Um93SGVpZ2h0KDM2KTtcblx0XHR9XG5cblx0XHRpZiAodGhlbWUgPT09IFNjaGVtYVRoZW1lLkxJR0hUKSB7XG5cdFx0XHR0aGlzLmdldFZlcnRpY2FsRm9ybWF0aW9uKCkuc2V0Um93SGVpZ2h0KDU2KTtcblx0XHR9XG5cblx0XHRpZiAodGhlbWUgPT09IFNjaGVtYVRoZW1lLkRBUkspIHtcblx0XHRcdHRoaXMuZ2V0VmVydGljYWxGb3JtYXRpb24oKS5zZXRSb3dIZWlnaHQoMzgpO1xuXHRcdH1cblx0fVxuXG5cdHNldFNjcm9sbFBvc2l0aW9uKHBvc2l0aW9uOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLnNldFNjcm9sbFBvc2l0aW9uKHBvc2l0aW9uKTtcblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZUJhc2VkT25WaXJ0dWFsU2Nyb2xsKCk7XG5cdH1cblxuXHRzY3JvbGxUb0luZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbi5zY3JvbGxUb0luZGV4KGluZGV4KVxuXHRcdCk7XG5cdH1cblxuXHRzZXRTZWxlY3Rpb24oZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXG5cdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLmdldEZvcm1hdGlvbigpLnNldFNlbGVjdGlvbihlbmFibGVkKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHRuZXcgU2VsZWN0aW9uRW5hYmxlZFNldEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSwgZW5hYmxlZClcblx0XHQpO1xuXHR9XG5cblx0c2V0U2VsZWN0aW9uTW9kZShtb2RlOiBSb3dTZWxlY3Rpb25Nb2RlKTogdm9pZCB7XG5cblx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0Rm9ybWF0aW9uKCkuc2V0TW9kZShtb2RlKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHRuZXcgU2VsZWN0aW9uTW9kZVNldEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSwgbW9kZSlcblx0XHQpO1xuXHR9XG5cblx0dG9nZ2xlUm93KHNlbGVjdGVkUm93OiBzdHJpbmcsIHR5cGU6IFJvd1NlbGVjdFRvZ2dsZVR5cGUpOiB2b2lkIHtcblxuXHRcdHRoaXMuc291cmNlTWFuYWdlci50b2dnbGVSb3coc2VsZWN0ZWRSb3csIHR5cGUpO1xuXG5cdFx0dGhpcy5nZW5lcmF0ZVNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50KCk7XG5cdH1cblxuXHRzZWxlY3RBbGwoKTogdm9pZCB7XG5cdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnNlbGVjdEFsbCgpO1xuXHRcdHRoaXMuZ2VuZXJhdGVTZWxlY3RlZFJvd0NoYW5nZWRFdmVudCgpO1xuXHR9XG5cblx0dW5zZWxlY3RBbGwoKTogdm9pZCB7XG5cdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnVuc2VsZWN0QWxsKCk7XG5cdFx0dGhpcy5nZW5lcmF0ZVNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50KCk7XG5cdH1cblxuXHRnZXRGb3JtYXRpb24oKTogRm9ybWF0aW9uTWFuYWdlciB7XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlTWFuYWdlci5nZXRGb3JtYXRpb24oKTtcblx0fVxuXG5cdGdldFBhZ2luZygpOiBQYWdpbmdNYW5hZ2VyIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdpbmdNYW5hZ2VyO1xuXHR9XG5cblx0Y2hhbmdlUGFnaW5nKGNvbmZpZzogUGFnaW5nQ29uZmlnKSB7XG5cdFx0dGhpcy5wYWdpbmdNYW5hZ2VyLmNoYW5nZShjb25maWcpO1xuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cdH1cblxuXHRzZXRQYWdpbmcocGFnaW5nOiBQYWdpbmdNYW5hZ2VyKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdNYW5hZ2VyID0gcGFnaW5nO1xuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cdH1cblxuXHRuZXh0UGFnZSgpOiB2b2lkIHtcblxuXHRcdHRoaXMucGFnaW5nTWFuYWdlci5uZXh0UGFnZSgpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblx0fVxuXG5cdHByZXZQYWdlKCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nTWFuYWdlci5wcmV2UGFnZSgpO1xuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cdH1cblxuXHRjaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdGNvbnN0IHBhZ2luZ0V2ZW50cyA9IHRoaXMucGFnaW5nTWFuYWdlci5jaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZSk7XG5cblx0XHQvLyBUT0RPXG5cdFx0cGFnaW5nRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG5cdFx0XHR0aGlzLmFkZEV2ZW50KGV2ZW50KTtcblx0XHR9KTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5nZXRFdmVudHMoKTtcblx0fVxuXG5cdGdldEVudGl0aWVzKCk6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2VNYW5hZ2VyLmdldFNsaWNlZEVudGl0aWVzKCk7XG5cdH1cblxuXHRnZXRTb3VyY2UoKTogU291cmNlTWFuYWdlciB7XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlTWFuYWdlcjtcblx0fVxuXG5cdGNyZWF0ZUZpZWxkcyhmaWVsZENvbmZpZ3M6IEFycmF5PEZpZWxkQ29uZmlnPik6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHR0aGlzLmZpZWxkQ29sbGVjdGlvbi5pbml0RmllbGRzKGZpZWxkQ29uZmlncyk7XG5cblx0XHRjb25zdCBmaWVsZHMgPSB0aGlzLmZpZWxkQ29sbGVjdGlvbi5nZXRBbGxGaWVsZHMoKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHRuZXcgRmllbGRzSW5pdGVkQWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCBmaWVsZENvbmZpZ3MsIGZpZWxkcylcblx0XHQpO1xuXG5cdFx0dGhpcy5maWx0ZXJNYW5hZ2VyLmFzc2lnbkZpbHRlclR5cGVzKGZpZWxkcyk7XG5cblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0bmV3IEZpbHRlclR5cGVzSW5pdGVkQWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCB0aGlzLmZpbHRlck1hbmFnZXIuZ2V0RmlsdGVyVHlwZXMoKSlcblx0XHQpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RXZlbnRzKCk7XG5cdH1cblxuXHRzZXRTb3J0aW5nQ29uZmlnKGNvbmZpZzogU29ydGluZ0NvbmZpZyk6IHZvaWQge1xuXHRcdHRoaXMuc29ydGVyQ29sbGVjdGlvbi5zZXRDb25maWcoY29uZmlnKTtcblx0fVxuXG5cdHRvZ2dsZVNvcnQoZmllbGRJZDogRmllbGRJZCk6IEFycmF5PFN0cnVjdHVyZVNvcnRlcj4ge1xuXG5cdFx0Y29uc3QgZmllbGQgPSB0aGlzLmZpZWxkQ29sbGVjdGlvbi5nZXRGaWVsZChmaWVsZElkKTtcblxuXHRcdHRoaXMuc29ydGVyQ29sbGVjdGlvbi50b2dnbGUoZmllbGQpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblxuXHRcdHJldHVybiB0aGlzLnNvcnRlckNvbGxlY3Rpb24uZ2V0QWxsKCk7XG5cdH1cblxuXHRzZXRTb3J0T3JkZXIoZmllbGRJZDogRmllbGRJZCwgc29ydE9yZGVyOiBTb3J0T3JkZXIpOiBBcnJheTxTdHJ1Y3R1cmVTb3J0ZXI+IHtcblxuXHRcdGNvbnN0IGZpZWxkID0gdGhpcy5maWVsZENvbGxlY3Rpb24uZ2V0RmllbGQoZmllbGRJZCk7XG5cblx0XHR0aGlzLnNvcnRlckNvbGxlY3Rpb24uc2V0U29ydE9yZGVyKGZpZWxkLCBzb3J0T3JkZXIpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblxuXHRcdHJldHVybiB0aGlzLnNvcnRlckNvbGxlY3Rpb24uZ2V0QWxsKCk7XG5cdH1cblxuXHRzZXRGaWx0ZXJDb25maWcoY29uZmlnOiBGaWx0ZXJDb25maWcpOiB2b2lkIHtcblx0XHR0aGlzLmZpbHRlck1hbmFnZXIuZ2V0U2V0dGluZ3MoKS5zZXRGaWx0ZXJDb25maWcoY29uZmlnKTtcblx0fVxuXG5cdHNldFF1aWNrRmlsdGVyc0NvbmZpZyhjb25maWc6IFF1aWNrRmlsdGVyc0NvbmZpZyk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyTWFuYWdlci5nZXRTZXR0aW5ncygpLnNldFF1aWNrRmlsdGVyc0NvbmZpZyhjb25maWcpO1xuXHR9XG5cblx0dG9nZ2xlRmlsdGVyKGZpZWxkSWQ6IEZpZWxkSWQsIGV4dGVybmFsRmlsdGVySWQ6IHN0cmluZywgZmlsdGVyVmFsdWU6IHN0cmluZyk6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXG5cdFx0Y29uc3QgZmllbGQgPSB0aGlzLmZpZWxkQ29sbGVjdGlvbi5nZXRGaWVsZChmaWVsZElkKTtcblxuXHRcdC8vIEZpZWxkIG5vdCBmb3VuZFxuXHRcdC8vIFRPRE8gdGhyb3cgYWdncmVnYXRlIGV2ZW50XG5cdFx0aWYgKGZpZWxkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cblx0XHQvLyB0aGlzLmZpbHRlck1hbmFnZXIuYWRkRmlsdGVyKGZpZWxkLCBleHRlcm5hbEZpbHRlcklkLCBmaWx0ZXJWYWx1ZSk7XG5cblx0XHQvLyB0aGlzLmZpbHRlck1hbmFnZXIuYVxuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblxuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdGFkZEZpbHRlcihmaWVsZElkOiBGaWVsZElkLCBmaWx0ZXJUeXBlSWQ6IEZpbHRlclR5cGVJZCwgdmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyTWFuYWdlci5hZGQoZmllbGRJZCwgZmlsdGVyVHlwZUlkLCB2YWx1ZSk7XG5cblx0XHRjb25zdCBmaWVsZHMgPSB0aGlzLmZpZWxkQ29sbGVjdGlvbi5nZXRGaWVsZHNBc01hcCgpO1xuXG5cdFx0Y29uc3QgYWN0aXZlRmlsdGVycyA9IHRoaXMuZmlsdGVyTWFuYWdlci5nZXRBbGxBY3RpdmVGaWx0ZXJzKGZpZWxkcyk7XG5cblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0bmV3IEZpbHRlckFkZGVkQWdncmVnYXRlRXZlbnQoXG5cdFx0XHRcdHRoaXMuZ2V0SWQoKSxcblx0XHRcdFx0YWN0aXZlRmlsdGVyc1xuXHRcdFx0KVxuXHRcdCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXHR9XG5cblx0cmVtb3ZlQWxsRmlsdGVycygpOiB2b2lkIHtcblx0XHR0aGlzLmZpbHRlck1hbmFnZXIucmVtb3ZlQWxsKCk7XG5cblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0bmV3IEFsbEZpbHRlcnNSZW1vdmVkQWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpKVxuXHRcdCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXHR9XG5cblx0cmVtb3ZlRmlsdGVyKGZpbHRlcklkOiBGaWx0ZXJJZCk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyTWFuYWdlci5yZW1vdmUoZmlsdGVySWQpO1xuXG5cdFx0Y29uc3QgZmllbGRzID0gdGhpcy5maWVsZENvbGxlY3Rpb24uZ2V0RmllbGRzQXNNYXAoKTtcblx0XHRjb25zdCBhY3RpdmVGaWx0ZXJzID0gdGhpcy5maWx0ZXJNYW5hZ2VyLmdldEFsbEFjdGl2ZUZpbHRlcnMoZmllbGRzKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHRuZXcgRmlsdGVyUmVtb3ZlZEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSwgYWN0aXZlRmlsdGVycylcblx0XHQpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblx0fVxuXG5cdHNldFNlYXJjaGluZ0NvbmZpZyhjb25maWc6IFNlYXJjaENvbmZpZyk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyTWFuYWdlci5nZXRTZXR0aW5ncygpLnNldFNlYXJjaGluZ0NvbmZpZyhjb25maWcpO1xuXHR9XG5cblx0YWRkU2VhcmNoUGhyYXNlKHBocmFzZTogc3RyaW5nKTogQXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHRjb25zdCBmaWVsZHMgPSB0aGlzLmZpZWxkQ29sbGVjdGlvbi5nZXRBbGxGaWVsZHMoKTtcblxuXHRcdHRoaXMuc2VhcmNoTWFuYWdlci5hZGRTZWFyY2hQaHJhc2UoZmllbGRzLCBwaHJhc2UpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblxuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdHJlbW92ZVNlYXJjaFBocmFzZSgpOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdHRoaXMuc2VhcmNoTWFuYWdlci5yZW1vdmVTZWFyY2hGaWx0ZXJzKCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0c2VsZWN0QWxsVW5pcXVlRmlsdGVyKGZpZWxkSWQ6IEZpZWxkSWQpOiB2b2lkIHtcblxuXHRcdHRoaXMudW5pcXVlRmlsdGVyTWFuYWdlci5zZWxlY3RBbGwoZmllbGRJZCk7XG5cblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0bmV3IEFsbFVuaXF1ZUZpbHRlclNlbGVjdGVkQWdncmVnYXRlRXZlbnQoXG5cdFx0XHRcdHRoaXMuZ2V0SWQoKVxuXHRcdFx0KVxuXHRcdCk7XG5cblx0XHR0aGlzLmdlbmVyYXRlQ2FsY3VsYXRlVW5pcXVlVmFsdWVzQWdncmVnYXRlRXZlbnQoKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cdH1cblxuXHRzZWxlY3RVbmlxdWVGaWx0ZXIoZmllbGRJZDogRmllbGRJZCwgdW5pcXVlVmFsdWVJZDogVW5pcXVlVmFsdWVJZCk6IHZvaWQge1xuXG5cdFx0dGhpcy51bmlxdWVGaWx0ZXJNYW5hZ2VyLnNlbGVjdChmaWVsZElkLCB1bmlxdWVWYWx1ZUlkKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHRuZXcgVW5pcXVlRmlsdGVyU2VsZWN0ZWRBZ2dyZWdhdGVFdmVudChcblx0XHRcdFx0dGhpcy5nZXRJZCgpXG5cdFx0XHQpXG5cdFx0KTtcblxuXHRcdHRoaXMuZ2VuZXJhdGVDYWxjdWxhdGVVbmlxdWVWYWx1ZXNBZ2dyZWdhdGVFdmVudCgpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblx0fVxuXG5cdHVuc2VsZWN0QWxsVW5pcXVlRmlsdGVyKGZpZWxkSWQ6IEZpZWxkSWQpOiB2b2lkIHtcblxuXHRcdHRoaXMudW5pcXVlRmlsdGVyTWFuYWdlci51bnNlbGVjdEFsbChmaWVsZElkKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHRuZXcgQWxsVW5pcXVlRmlsdGVyVW5zZWxlY3RlZEFnZ3JlZ2F0ZUV2ZW50KFxuXHRcdFx0XHR0aGlzLmdldElkKClcblx0XHRcdClcblx0XHQpO1xuXG5cdFx0dGhpcy5nZW5lcmF0ZUNhbGN1bGF0ZVVuaXF1ZVZhbHVlc0FnZ3JlZ2F0ZUV2ZW50KCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXHR9XG5cblx0dW5zZWxlY3RVbmlxdWVGaWx0ZXIoZmllbGRJZDogRmllbGRJZCwgdW5pcXVlVmFsdWVJZDogVW5pcXVlVmFsdWVJZCk6IHZvaWQge1xuXG5cdFx0dGhpcy51bmlxdWVGaWx0ZXJNYW5hZ2VyLnVuc2VsZWN0KGZpZWxkSWQsIHVuaXF1ZVZhbHVlSWQpO1xuXG5cdFx0dGhpcy5hZGRFdmVudChcblx0XHRcdG5ldyBVbmlxdWVGaWx0ZXJVbnNlbGVjdGVkQWdncmVnYXRlRXZlbnQoXG5cdFx0XHRcdHRoaXMuZ2V0SWQoKVxuXHRcdFx0KVxuXHRcdCk7XG5cblx0XHR0aGlzLmdlbmVyYXRlQ2FsY3VsYXRlVW5pcXVlVmFsdWVzQWdncmVnYXRlRXZlbnQoKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZVNvdXJjZSgpOiB2b2lkIHtcblxuXHRcdGlmICghdGhpcy5zb3VyY2VNYW5hZ2VyLmdldE9yaWdpbigpIHx8ICF0aGlzLnBhZ2luZ01hbmFnZXIpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBUT0RPIFJlZmFjdG9yXG5cdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnNldEVudGl0aWVzKHRoaXMuc291cmNlTWFuYWdlci5nZXRPcmlnaW4oKSk7XG5cblx0XHQvLyBmaWx0ZXJpbmdcblx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2V0RW50aXRpZXMoXG5cdFx0XHR0aGlzLmZpbHRlck1hbmFnZXIuZmlsdGVyKHRoaXMuc291cmNlTWFuYWdlci5nZXRFbnRpdGllcygpLCB0aGlzLmZpZWxkQ29sbGVjdGlvbi5nZXRGaWVsZHNBc01hcCgpKVxuXHRcdCk7XG5cblx0XHQvLyBzZWFyY2hcblx0XHRjb25zdCBzZWFyY2hlZEVudGl0aWVzID0gdGhpcy5zZWFyY2hNYW5hZ2VyLnNlYXJjaCh0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0RW50aXRpZXMoKSk7XG5cdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnNldEVudGl0aWVzKHNlYXJjaGVkRW50aXRpZXMpO1xuXG5cdFx0Ly8gdW5pcXVlIGZpbHRlcmluZ1xuXHRcdHRoaXMuc291cmNlTWFuYWdlci5zZXRFbnRpdGllcyhcblx0XHRcdHRoaXMudW5pcXVlRmlsdGVyTWFuYWdlci5maWx0ZXJBbGwodGhpcy5zb3VyY2VNYW5hZ2VyLmdldEVudGl0aWVzKCksIHRoaXMuZmllbGRDb2xsZWN0aW9uLmdldEFsbEZpZWxkcygpKVxuXHRcdCk7XG5cblx0XHQvLyBzb3J0aW5nXG5cdFx0Y29uc3QgZW50cyA9IHRoaXMuc29ydGVyQ29sbGVjdGlvbi5zb3J0KHRoaXMuc291cmNlTWFuYWdlci5nZXRFbnRpdGllcygpKTtcblx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2V0RW50aXRpZXMoZW50cyk7XG5cblx0XHQvLyBjYWxjdWxhdGUgZmlsdGVyZWRFbnRpdGllc1xuXHRcdHRoaXMuc291cmNlTWFuYWdlci5zZXRQcmVwYXJlZEVudGl0aWVzKCk7XG5cblx0XHR0aGlzLnBhZ2luZ01hbmFnZXIuc2V0U291cmNlU2l6ZSh0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0UHJlcGFyZWRFbnRpdGllcygpLmxlbmd0aCk7XG5cblx0XHR0aGlzLmFkZEV2ZW50KG5ldyBTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0QWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCBlbnRzKSk7XG5cblx0XHQvLyBzdW1tYXJpZXNcblx0XHRjb25zdCBzdW1tYXJpZXNFdmVudHMgPSB0aGlzLnN1bW1hcmllc01hbmFnZXIuY2FsY3VsYXRlKFxuXHRcdFx0dGhpcy5maWVsZENvbGxlY3Rpb24uZ2V0QWxsRmllbGRzKCksXG5cdFx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0RW50aXRpZXMoKVxuXHRcdCk7XG5cblx0XHRzdW1tYXJpZXNFdmVudHMuZm9yRWFjaCgoYWU6IEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPikgPT4ge1xuXHRcdFx0dGhpcy5hZGRFdmVudChhZSk7XG5cdFx0fSk7XG5cblx0XHQvLyBwYWdpbmdcblx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2V0RW50aXRpZXModGhpcy5wYWdpbmdNYW5hZ2VyLnNhbXBsZSh0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0RW50aXRpZXMoKSkpO1xuXG5cdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbi5zZXRTb3VyY2VTaXplKHRoaXMuc291cmNlTWFuYWdlci5nZXRFbnRpdGllcygpLmxlbmd0aCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZUJhc2VkT25WaXJ0dWFsU2Nyb2xsKCk7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZVNvdXJjZUJhc2VkT25WaXJ0dWFsU2Nyb2xsKCk6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMudmVydGljYWxGb3JtYXRpb24uaXNFbmFibGVkKCkpIHtcblxuXHRcdFx0Y29uc3QgcmFuZ2UgPSB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLmdldFJhbmdlKCk7XG5cblx0XHRcdHRoaXMuc291cmNlTWFuYWdlci5zZXRTbGljZWRFbnRpdGllcyhcblx0XHRcdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLmdldEVudGl0aWVzKCkuc2xpY2UocmFuZ2UuZ2V0U3RhcnQoKSwgcmFuZ2UuZ2V0RW5kKCkpXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2V0U2xpY2VkRW50aXRpZXMoXG5cdFx0XHRcdHRoaXMuc291cmNlTWFuYWdlci5nZXRFbnRpdGllcygpXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgaW5pdFRoZW1lKCkge1xuXG5cdFx0Ly8gVE9ET1xuXHRcdGNvbnN0IHRoZW1lID0gU2NoZW1hQWdncmVnYXRlLkRFRkFVTFRfVEhFTUU7XG5cblx0XHR0aGlzLnNldFRoZW1lKHRoZW1lKTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlVW5pcXVlVmFsdWVzKCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZmllbGRzID0gdGhpcy5maWVsZENvbGxlY3Rpb24uZ2V0QWxsRmllbGRzKCksXG5cdFx0XHRpdGVtcyA9IHRoaXMuc291cmNlTWFuYWdlci5nZXRPcmlnaW4oKTtcblxuXHRcdHRoaXMudW5pcXVlRmlsdGVyTWFuYWdlci5jYWxjdWxhdGVBbGwoaXRlbXMsIGZpZWxkcyk7XG5cblx0XHR0aGlzLmdlbmVyYXRlQ2FsY3VsYXRlVW5pcXVlVmFsdWVzQWdncmVnYXRlRXZlbnQoKTtcblx0fVxuXG5cdHByaXZhdGUgZ2VuZXJhdGVDYWxjdWxhdGVVbmlxdWVWYWx1ZXNBZ2dyZWdhdGVFdmVudCgpOiB2b2lkIHtcblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0bmV3IFVuaXF1ZUZpbHRlckNhbGN1bGF0ZWRBZ2dyZWdhdGVFdmVudChcblx0XHRcdFx0dGhpcy5nZXRJZCgpLFxuXHRcdFx0XHR0aGlzLnVuaXF1ZUZpbHRlck1hbmFnZXIuZ2V0QWxsKFxuXHRcdFx0XHRcdHRoaXMuZmllbGRDb2xsZWN0aW9uLmdldEFsbEZpZWxkcygpXG5cdFx0XHRcdClcblx0XHRcdClcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSBnZW5lcmF0ZVNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50KCkge1xuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHRuZXcgU2VsZWN0ZWRSb3dDaGFuZ2VkQWdncmVnYXRlRXZlbnQoXG5cdFx0XHRcdHRoaXMuZ2V0SWQoKSxcblx0XHRcdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLmdldEZvcm1hdGlvbigpLmdldFNlbGVjdGVkUm93cygpLFxuXHRcdFx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0Rm9ybWF0aW9uKCkuaXNBbGxTZWxlY3RlZCgpLFxuXHRcdFx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0Rm9ybWF0aW9uKCkuaXNBbGxVbnNlbGVjdGVkKClcblx0XHRcdClcblx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==