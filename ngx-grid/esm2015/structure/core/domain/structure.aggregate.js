/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateRoot } from '@generic-ui/hermes';
import { StructurePreparedEntitiesSetAggregateEvent } from '../../source/domain/prepared/structure.prepared-entities-set.aggregate-event';
import { FieldsInitedAggregateEvent } from '../../field/domain/init/fields-inited.aggregate-event';
import { SchemaTheme } from '../../../schema/domain/theme/schema-theme';
import { SchemaAggregate } from '../../../schema/domain/schema.aggregate';
import { StructureCreatedAggregateEvent } from './create-structure/structure-created.aggregate-event';
import { Override } from '../../../common/cdk/decorators';
import { FilterTypesInitedAggregateEvent } from '../../filter/domain/type/init/filter-types-inited.aggregate-event';
import { AllFiltersRemovedAggregateEvent } from '../../filter/domain/core/remove-all/all-filters-removed.aggregate-event';
import { FilterAddedAggregateEvent } from '../../filter/domain/core/add/filter-added.aggregate-event';
import { FilterRemovedAggregateEvent } from '../../filter/domain/core/remove/filter-removed.aggregate-event';
import { UniqueFilterCalculatedAggregateEvent } from '../../filter/domain/unique/calculate/unique-filter-calculated.aggregate-event';
import { UniqueFilterSelectedAggregateEvent } from '../../filter/domain/unique/select/unique-filter-selected.aggregate-event';
import { UniqueFilterUnselectedAggregateEvent } from '../../filter/domain/unique/unselect/unique-filter-unselected.aggregate-event';
import { AllUniqueFilterUnselectedAggregateEvent } from '../../filter/domain/unique/unselect-all/all-unique-filter-unselected.aggregate-event';
import { AllUniqueFilterSelectedAggregateEvent } from '../../filter/domain/unique/select-all/all-unique-filter-selected.aggregate-event';
import { SelectedRowChangedAggregateEvent } from '../../source/domain/formation/selected-row-changed.aggregate-event';
import { SelectionEnabledSetAggregateEvent } from '../../source/domain/formation/set-enabled/selection-enabled-set.aggregate-event';
import { SelectionModeSetAggregateEvent } from '../../source/domain/formation/mode/selection-mode-set.aggregate-event';
export class StructureAggregate extends AggregateRoot {
    /**
     * @param {?} structureId
     * @param {?} pagingAggregate
     * @param {?} sourceManager
     * @param {?} verticalFormation
     * @param {?} summariesManager
     * @param {?} sorterCollection
     * @param {?} filterManager
     * @param {?} uniqueFilterManager
     * @param {?} searchManager
     * @param {?} fieldCollection
     */
    constructor(structureId, pagingAggregate, sourceManager, verticalFormation, summariesManager, sorterCollection, filterManager, uniqueFilterManager, searchManager, fieldCollection) {
        super(structureId, 'StructureAggregate');
        this.pagingManager = pagingAggregate;
        this.sourceManager = sourceManager;
        this.verticalFormation = verticalFormation;
        this.summariesManager = summariesManager;
        this.sorterCollection = sorterCollection;
        this.filterManager = filterManager;
        this.uniqueFilterManager = uniqueFilterManager;
        this.searchManager = searchManager;
        this.fieldCollection = fieldCollection;
    }
    /**
     * @return {?}
     */
    createEvent() {
        return StructureCreatedAggregateEvent;
    }
    /**
     * @return {?}
     */
    clearEvents() {
        super.clearEvents();
        this.pagingManager.clearEvents();
    }
    /**
     * @return {?}
     */
    init() {
        this.initTheme();
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    setVerticalFormationEnabled(enabled) {
        this.verticalFormation.setEnabled(enabled);
        this.calculateSource();
    }
    /**
     * @return {?}
     */
    getVerticalFormation() {
        return this.verticalFormation;
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    setSummariesEnabled(enabled) {
        this.summariesManager.setEnabled(enabled);
        this.calculateSource();
        return this.getEvents();
    }
    /**
     * @param {?} items
     * @return {?}
     */
    setOrigin(items) {
        this.addEvent(this.sourceManager.setOrigin(items, this.getId()));
        this.calculateUniqueValues();
        this.calculateSource();
        return this.getEvents();
    }
    /**
     * @return {?}
     */
    deleteAllSelected() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    deleteItem(payload) {
        this.addEvent(this.sourceManager.deleteOriginItem(payload, this.getId()));
        this.generateSelectedRowChangedEvent();
        this.calculateSource();
    }
    /**
     * @param {?} editParams
     * @return {?}
     */
    editItem(editParams) {
        /** @type {?} */
        const itemId = editParams.getItemId();
        /** @type {?} */
        const fieldId = editParams.getColumnFieldId();
        /** @type {?} */
        const field = this.fieldCollection.getField((/** @type {?} */ (fieldId)));
        /** @type {?} */
        const // as FieldId
        value = editParams.getValue();
        /** @type {?} */
        const editItemEvents = this.sourceManager.editOriginItem(itemId, value, field, this.getId());
        editItemEvents.forEach((/**
         * @param {?} e
         * @return {?}
         */
        (e) => this.addEvent(e)));
        // TODO
        // this.calculateUniqueValues();
        this.calculateSource();
        return this.getEvents();
    }
    /**
     * @param {?} height
     * @return {?}
     */
    setHeight(height) {
        this.verticalFormation.setViewportHeight(height);
        this.calculateSourceBasedOnVirtualScroll();
    }
    /**
     * @param {?} theme
     * @return {?}
     */
    setTheme(theme) {
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
    }
    /**
     * @param {?} position
     * @return {?}
     */
    setScrollPosition(position) {
        this.verticalFormation.setScrollPosition(position);
        this.calculateSourceBasedOnVirtualScroll();
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    setSelection(enabled) {
        this.sourceManager.getFormation().setSelection(enabled);
        this.addEvent(new SelectionEnabledSetAggregateEvent(this.getId(), enabled));
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    setSelectionMode(mode) {
        this.sourceManager.getFormation().setMode(mode);
        this.addEvent(new SelectionModeSetAggregateEvent(this.getId(), mode));
    }
    /**
     * @param {?} selectedRow
     * @param {?} type
     * @return {?}
     */
    toggleRow(selectedRow, type) {
        this.sourceManager.toggleRow(selectedRow, type);
        this.generateSelectedRowChangedEvent();
    }
    /**
     * @return {?}
     */
    selectAll() {
        this.sourceManager.selectAll();
        this.generateSelectedRowChangedEvent();
    }
    /**
     * @return {?}
     */
    unselectAll() {
        this.sourceManager.unselectAll();
        this.generateSelectedRowChangedEvent();
    }
    /**
     * @return {?}
     */
    getFormation() {
        return this.sourceManager.getFormation();
    }
    /**
     * @return {?}
     */
    getPaging() {
        return this.pagingManager;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    changePaging(config) {
        this.pagingManager.change(config);
        this.calculateSource();
    }
    /**
     * @param {?} paging
     * @return {?}
     */
    setPaging(paging) {
        this.pagingManager = paging;
        this.calculateSource();
    }
    /**
     * @return {?}
     */
    nextPage() {
        this.pagingManager.nextPage();
        this.calculateSource();
    }
    /**
     * @return {?}
     */
    prevPage() {
        this.pagingManager.prevPage();
        this.calculateSource();
    }
    /**
     * @param {?} pageSize
     * @return {?}
     */
    changePageSize(pageSize) {
        /** @type {?} */
        const pagingEvents = this.pagingManager.changePageSize(pageSize);
        // TODO
        pagingEvents.forEach((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.addEvent(event);
        }));
        this.calculateSource();
        return this.getEvents();
    }
    /**
     * @return {?}
     */
    getEntities() {
        return this.sourceManager.getSlicedEntities();
    }
    /**
     * @return {?}
     */
    getSource() {
        return this.sourceManager;
    }
    /**
     * @param {?} fieldConfigs
     * @return {?}
     */
    createFields(fieldConfigs) {
        this.fieldCollection.initFields(fieldConfigs);
        /** @type {?} */
        const fields = this.fieldCollection.getAllFields();
        this.addEvent(new FieldsInitedAggregateEvent(this.getId(), fieldConfigs, fields));
        this.filterManager.assignFilterTypes(fields);
        this.addEvent(new FilterTypesInitedAggregateEvent(this.getId(), this.filterManager.getFilterTypes()));
        return this.getEvents();
    }
    /**
     * @param {?} config
     * @return {?}
     */
    setSortingConfig(config) {
        this.sorterCollection.setConfig(config);
    }
    /**
     * @param {?} fieldId
     * @return {?}
     */
    toggleSort(fieldId) {
        /** @type {?} */
        const field = this.fieldCollection.getField(fieldId);
        this.sorterCollection.toggle(field);
        this.calculateSource();
        return this.sorterCollection.getAll();
    }
    /**
     * @param {?} fieldId
     * @param {?} sortOrder
     * @return {?}
     */
    setSortOrder(fieldId, sortOrder) {
        /** @type {?} */
        const field = this.fieldCollection.getField(fieldId);
        this.sorterCollection.setSortOrder(field, sortOrder);
        this.calculateSource();
        return this.sorterCollection.getAll();
    }
    /**
     * @param {?} config
     * @return {?}
     */
    setFilterConfig(config) {
        this.filterManager.getSettings().setFilterConfig(config);
    }
    /**
     * @param {?} config
     * @return {?}
     */
    setQuickFiltersConfig(config) {
        this.filterManager.getSettings().setQuickFiltersConfig(config);
    }
    /**
     * @param {?} fieldId
     * @param {?} externalFilterId
     * @param {?} filterValue
     * @return {?}
     */
    toggleFilter(fieldId, externalFilterId, filterValue) {
        /** @type {?} */
        const field = this.fieldCollection.getField(fieldId);
        // Field not found
        // TODO throw aggregate event
        if (field === undefined) {
            return [];
        }
        // this.filterManager.addFilter(field, externalFilterId, filterValue);
        // this.filterManager.a
        this.calculateSource();
        return [];
    }
    /**
     * @param {?} fieldId
     * @param {?} filterTypeId
     * @param {?} value
     * @return {?}
     */
    addFilter(fieldId, filterTypeId, value) {
        this.filterManager.add(fieldId, filterTypeId, value);
        /** @type {?} */
        const fields = this.fieldCollection.getFieldsAsMap();
        /** @type {?} */
        let activeFilters = this.filterManager.getAllActiveFilters(fields);
        this.addEvent(new FilterAddedAggregateEvent(this.getId(), activeFilters));
        this.calculateSource();
    }
    /**
     * @return {?}
     */
    removeAllFilters() {
        this.filterManager.removeAll();
        this.addEvent(new AllFiltersRemovedAggregateEvent(this.getId()));
        this.calculateSource();
    }
    /**
     * @param {?} filterId
     * @return {?}
     */
    removeFilter(filterId) {
        this.filterManager.remove(filterId);
        /** @type {?} */
        const fields = this.fieldCollection.getFieldsAsMap();
        /** @type {?} */
        let activeFilters = this.filterManager.getAllActiveFilters(fields);
        this.addEvent(new FilterRemovedAggregateEvent(this.getId(), activeFilters));
        this.calculateSource();
    }
    /**
     * @param {?} config
     * @return {?}
     */
    setSearchingConfig(config) {
        this.filterManager.getSettings().setSearchingConfig(config);
    }
    /**
     * @param {?} phrase
     * @return {?}
     */
    addSearchPhrase(phrase) {
        /** @type {?} */
        const fields = this.fieldCollection.getAllFields();
        this.searchManager.addSearchPhrase(fields, phrase);
        this.calculateSource();
        return [];
    }
    /**
     * @return {?}
     */
    removeSearchPhrase() {
        this.searchManager.removeSearchFilters();
        this.calculateSource();
        return [];
    }
    /**
     * @param {?} fieldId
     * @return {?}
     */
    selectAllUniqueFilter(fieldId) {
        this.uniqueFilterManager.selectAll(fieldId);
        this.addEvent(new AllUniqueFilterSelectedAggregateEvent(this.getId()));
        this.generateCalculateUniqueValuesAggregateEvent();
        this.calculateSource();
    }
    /**
     * @param {?} fieldId
     * @param {?} uniqueValueId
     * @return {?}
     */
    selectUniqueFilter(fieldId, uniqueValueId) {
        this.uniqueFilterManager.select(fieldId, uniqueValueId);
        this.addEvent(new UniqueFilterSelectedAggregateEvent(this.getId()));
        this.generateCalculateUniqueValuesAggregateEvent();
        this.calculateSource();
    }
    /**
     * @param {?} fieldId
     * @return {?}
     */
    unselectAllUniqueFilter(fieldId) {
        this.uniqueFilterManager.unselectAll(fieldId);
        this.addEvent(new AllUniqueFilterUnselectedAggregateEvent(this.getId()));
        this.generateCalculateUniqueValuesAggregateEvent();
        this.calculateSource();
    }
    /**
     * @param {?} fieldId
     * @param {?} uniqueValueId
     * @return {?}
     */
    unselectUniqueFilter(fieldId, uniqueValueId) {
        this.uniqueFilterManager.unselect(fieldId, uniqueValueId);
        this.addEvent(new UniqueFilterUnselectedAggregateEvent(this.getId()));
        this.generateCalculateUniqueValuesAggregateEvent();
        this.calculateSource();
    }
    /**
     * @private
     * @return {?}
     */
    calculateSource() {
        if (!this.sourceManager.getOrigin() || !this.pagingManager) {
            return;
        }
        // TODO Refactor
        this.sourceManager.setEntities(this.sourceManager.getOrigin());
        // filtering
        this.sourceManager.setEntities(this.filterManager.filter(this.sourceManager.getEntities(), this.fieldCollection.getFieldsAsMap()));
        // search
        /** @type {?} */
        const searchedEntities = this.searchManager.search(this.sourceManager.getEntities());
        this.sourceManager.setEntities(searchedEntities);
        // unique filtering
        this.sourceManager.setEntities(this.uniqueFilterManager.filterAll(this.sourceManager.getEntities(), this.fieldCollection.getAllFields()));
        // sorting
        /** @type {?} */
        const ents = this.sorterCollection.sort(this.sourceManager.getEntities());
        this.sourceManager.setEntities(ents);
        // calculate filteredEntities
        this.sourceManager.setPreparedEntities();
        this.pagingManager.setSourceSize(this.sourceManager.getPreparedEntities().length);
        this.addEvent(new StructurePreparedEntitiesSetAggregateEvent(this.getId(), ents));
        // summaries
        /** @type {?} */
        const summariesEvents = this.summariesManager.calculate(this.fieldCollection.getAllFields(), this.sourceManager.getEntities());
        summariesEvents.forEach((/**
         * @param {?} ae
         * @return {?}
         */
        (ae) => {
            this.addEvent(ae);
        }));
        // paging
        this.sourceManager.setEntities(this.pagingManager.sample(this.sourceManager.getEntities()));
        this.verticalFormation.setSourceSize(this.sourceManager.getEntities().length);
        this.calculateSourceBasedOnVirtualScroll();
    }
    /**
     * @private
     * @return {?}
     */
    calculateSourceBasedOnVirtualScroll() {
        if (this.verticalFormation.isEnabled()) {
            /** @type {?} */
            const range = this.verticalFormation.getRange();
            this.sourceManager.setSlicedEntities(this.sourceManager.getEntities().slice(range.getStart(), range.getEnd()));
        }
        else {
            this.sourceManager.setSlicedEntities(this.sourceManager.getEntities());
        }
    }
    /**
     * @private
     * @return {?}
     */
    initTheme() {
        // TODO
        /** @type {?} */
        const theme = SchemaAggregate.DEFAULT_THEME;
        this.setTheme(theme);
    }
    /**
     * @private
     * @return {?}
     */
    calculateUniqueValues() {
        /** @type {?} */
        const fields = this.fieldCollection.getAllFields();
        /** @type {?} */
        const items = this.sourceManager.getOrigin();
        this.uniqueFilterManager.calculateAll(items, fields);
        this.generateCalculateUniqueValuesAggregateEvent();
    }
    /**
     * @private
     * @return {?}
     */
    generateCalculateUniqueValuesAggregateEvent() {
        this.addEvent(new UniqueFilterCalculatedAggregateEvent(this.getId(), this.uniqueFilterManager.getAll(this.fieldCollection.getAllFields())));
    }
    /**
     * @private
     * @return {?}
     */
    generateSelectedRowChangedEvent() {
        this.addEvent(new SelectedRowChangedAggregateEvent(this.getId(), this.sourceManager.getFormation().getSelectedRows(), this.sourceManager.getFormation().isAllSelected(), this.sourceManager.getFormation().isAllUnselected()));
    }
}
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], StructureAggregate.prototype, "clearEvents", null);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQXNDLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBcUJ2RixPQUFPLEVBQUUsMENBQTBDLEVBQUUsTUFBTSw4RUFBOEUsQ0FBQztBQUUxSSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNuRyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRXRHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMxRCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUNwSCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQUUxSCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUV0RyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUU3RyxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSwrRUFBK0UsQ0FBQztBQUVySSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSwwRUFBMEUsQ0FBQztBQUM5SCxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSw4RUFBOEUsQ0FBQztBQUNwSSxPQUFPLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSxzRkFBc0YsQ0FBQztBQUMvSSxPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSxrRkFBa0YsQ0FBQztBQUN6SSxPQUFPLEVB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QUNaLElBQUksZ0NBQWdDLENBQ25DLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFDWixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLGVBQWUsRUFBRSxFQUNuRCxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLGFBQWEsRUFBRSxFQUNqRCxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUNuRCxDQUNELENBQUM7SUFDSCxDQUFDO0NBRUQ7QUFsZkE7SUFEQyxRQUFROzs7O3FEQUlSOzs7Ozs7SUFoREQsMkNBQXFDOzs7OztJQUVyQywyQ0FBOEM7Ozs7O0lBRTlDLDhDQUEyQzs7Ozs7SUFFM0MsMkNBQXFDOzs7OztJQUVyQywyQ0FBcUM7Ozs7O0lBRXJDLCtDQUFzRDs7Ozs7SUFFdEQsNkNBQXlDOzs7OztJQUV6Qyw4Q0FBMkM7Ozs7O0lBRTNDLGlEQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBBZ2dyZWdhdGVFdmVudFR5cGUsIEFnZ3JlZ2F0ZVJvb3QgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBQYWdpbmdNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vcGFnaW5nL2RvbWFpbi9wYWdpbmcubWFuYWdlcic7XG5pbXBvcnQgeyBTb3VyY2VNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vc291cmNlL2RvbWFpbi9jb3JlL3NvdXJjZS5tYW5hZ2VyJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uIH0gZnJvbSAnLi92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uJztcbmltcG9ydCB7IFN1bW1hcmllc01hbmFnZXIgfSBmcm9tICcuL3N1bW1hcmllcy9zdW1tYXJpZXMubWFuYWdlcic7XG5pbXBvcnQgeyBTb3J0ZXJDb2xsZWN0aW9uIH0gZnJvbSAnLi4vLi4vc29ydGluZy9kb21haW4vc29ydGVyLmNvbGxlY3Rpb24nO1xuaW1wb3J0IHsgRmlsdGVyTWFuYWdlciB9IGZyb20gJy4uLy4uL2ZpbHRlci9kb21haW4vZmlsdGVyLm1hbmFnZXInO1xuaW1wb3J0IHsgRmllbGRDb2xsZWN0aW9uIH0gZnJvbSAnLi4vLi4vZmllbGQvZG9tYWluL2NvcmUvZmllbGQtY29sbGVjdGlvbic7XG5pbXBvcnQgeyBGb3JtYXRpb25NYW5hZ2VyIH0gZnJvbSAnLi4vLi4vc291cmNlL2RvbWFpbi9mb3JtYXRpb24vY29yZS9mb3JtYXRpb24tbWFuYWdlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zIH0gZnJvbSAnLi4vLi4vc291cmNlL2RvbWFpbi9vcmlnaW4vZWRpdC9zdHJ1Y3R1cmUuZWRpdC1zb3VyY2UtaXRlbS5wYXJhbXMnO1xuaW1wb3J0IHsgUGFnaW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vcGFnaW5nL2RvbWFpbi1hcGkvcGFnaW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vc291cmNlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IFNvcnRpbmdDb25maWcgfSBmcm9tICcuLi8uLi9zb3J0aW5nL2RvbWFpbi1hcGkvc29ydGluZy1jb25maWcnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uL2ZpZWxkL2RvbWFpbi9jb3JlL2ZpZWxkL2ZpZWxkLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVNvcnRlciB9IGZyb20gJy4uLy4uL3NvcnRpbmcvZG9tYWluL3N0cnVjdHVyZS5zb3J0ZXInO1xuaW1wb3J0IHsgRmlsdGVyQ29uZmlnIH0gZnJvbSAnLi4vLi4vZmlsdGVyL2RvbWFpbi1hcGkvZmlsdGVyLWNvbmZpZyc7XG5pbXBvcnQgeyBRdWlja0ZpbHRlcnNDb25maWcgfSBmcm9tICcuLi8uLi9maWx0ZXIvZG9tYWluLWFwaS9xdWljay1maWx0ZXJzLmNvbmZpZyc7XG5pbXBvcnQgeyBTZWFyY2hDb25maWcgfSBmcm9tICcuLi8uLi9zZWFyY2gvZG9tYWluLWFwaS9zZWFyY2gtY29uZmlnJztcbmltcG9ydCB7IFNlYXJjaE1hbmFnZXIgfSBmcm9tICcuLi8uLi9zZWFyY2gvZG9tYWluL3NlYXJjaC5tYW5hZ2VyJztcbmltcG9ydCB7IFN0cnVjdHVyZVByZXBhcmVkRW50aXRpZXNTZXRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uLy4uL3NvdXJjZS9kb21haW4vcHJlcGFyZWQvc3RydWN0dXJlLnByZXBhcmVkLWVudGl0aWVzLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9zb3J0L3NvcnQtb3JkZXInO1xuaW1wb3J0IHsgRmllbGRzSW5pdGVkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi9maWVsZC9kb21haW4vaW5pdC9maWVsZHMtaW5pdGVkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uLy4uL3NjaGVtYS9kb21haW4vdGhlbWUvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uL3NjaGVtYS9kb21haW4vc2NoZW1hLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDcmVhdGVkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL2NyZWF0ZS1zdHJ1Y3R1cmUvc3RydWN0dXJlLWNyZWF0ZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSAnLi4vLi4vZmllbGQvZG9tYWluLWFwaS9maWVsZC5jb25maWcnO1xuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZXNJbml0ZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uLy4uL2ZpbHRlci9kb21haW4vdHlwZS9pbml0L2ZpbHRlci10eXBlcy1pbml0ZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IEFsbEZpbHRlcnNSZW1vdmVkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi9maWx0ZXIvZG9tYWluL2NvcmUvcmVtb3ZlLWFsbC9hbGwtZmlsdGVycy1yZW1vdmVkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlSWQgfSBmcm9tICcuLi8uLi9maWx0ZXIvZG9tYWluL3R5cGUvZmlsdGVyLXR5cGUuaWQnO1xuaW1wb3J0IHsgRmlsdGVyQWRkZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uLy4uL2ZpbHRlci9kb21haW4vY29yZS9hZGQvZmlsdGVyLWFkZGVkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJJZCB9IGZyb20gJy4uLy4uL2ZpbHRlci9kb21haW4vZmlsdGVyLmlkJztcbmltcG9ydCB7IEZpbHRlclJlbW92ZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uLy4uL2ZpbHRlci9kb21haW4vY29yZS9yZW1vdmUvZmlsdGVyLXJlbW92ZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IFVuaXF1ZUZpbHRlck1hbmFnZXIgfSBmcm9tICcuLi8uLi9maWx0ZXIvZG9tYWluL3VuaXF1ZS91bmlxdWUtZmlsdGVyLW1hbmFnZXInO1xuaW1wb3J0IHsgVW5pcXVlRmlsdGVyQ2FsY3VsYXRlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vLi4vZmlsdGVyL2RvbWFpbi91bmlxdWUvY2FsY3VsYXRlL3VuaXF1ZS1maWx0ZXItY2FsY3VsYXRlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWVJZCB9IGZyb20gJy4uLy4uL2ZpbHRlci9kb21haW4vdW5pcXVlL3VuaXF1ZS12YWx1ZS1pZCc7XG5pbXBvcnQgeyBVbmlxdWVGaWx0ZXJTZWxlY3RlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vLi4vZmlsdGVyL2RvbWFpbi91bmlxdWUvc2VsZWN0L3VuaXF1ZS1maWx0ZXItc2VsZWN0ZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IFVuaXF1ZUZpbHRlclVuc2VsZWN0ZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uLy4uL2ZpbHRlci9kb21haW4vdW5pcXVlL3Vuc2VsZWN0L3VuaXF1ZS1maWx0ZXItdW5zZWxlY3RlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgQWxsVW5pcXVlRmlsdGVyVW5zZWxlY3RlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vLi4vZmlsdGVyL2RvbWFpbi91bmlxdWUvdW5zZWxlY3QtYWxsL2FsbC11bmlxdWUtZmlsdGVyLXVuc2VsZWN0ZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IEFsbFVuaXF1ZUZpbHRlclNlbGVjdGVkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi9maWx0ZXIvZG9tYWluL3VuaXF1ZS9zZWxlY3QtYWxsL2FsbC11bmlxdWUtZmlsdGVyLXNlbGVjdGVkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBTZWxlY3RlZFJvd0NoYW5nZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uLy4uL3NvdXJjZS9kb21haW4vZm9ybWF0aW9uL3NlbGVjdGVkLXJvdy1jaGFuZ2VkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBSb3dTZWxlY3RUb2dnbGVUeXBlIH0gZnJvbSAnLi4vLi4vc291cmNlL2RvbWFpbi9mb3JtYXRpb24vY29yZS9yb3ctc2VsZWN0LXRvZ2dsZS10eXBlJztcbmltcG9ydCB7IFNlbGVjdGlvbkVuYWJsZWRTZXRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uLy4uL3NvdXJjZS9kb21haW4vZm9ybWF0aW9uL3NldC1lbmFibGVkL3NlbGVjdGlvbi1lbmFibGVkLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uTW9kZSB9IGZyb20gJy4uLy4uL3NvdXJjZS9kb21haW4tYXBpL3Jvdy1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgU2VsZWN0aW9uTW9kZVNldEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vLi4vc291cmNlL2RvbWFpbi9mb3JtYXRpb24vbW9kZS9zZWxlY3Rpb24tbW9kZS1zZXQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IE9yaWdpbklkIH0gZnJvbSAnLi4vLi4vc291cmNlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWlkJztcblxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQWdncmVnYXRlIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxTdHJ1Y3R1cmVJZD4ge1xuXG5cdHByaXZhdGUgcGFnaW5nTWFuYWdlcjogUGFnaW5nTWFuYWdlcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZU1hbmFnZXI6IFNvdXJjZU1hbmFnZXI7XG5cblx0cHJpdmF0ZSBzb3J0ZXJDb2xsZWN0aW9uOiBTb3J0ZXJDb2xsZWN0aW9uO1xuXG5cdHByaXZhdGUgZmlsdGVyTWFuYWdlcjogRmlsdGVyTWFuYWdlcjtcblxuXHRwcml2YXRlIHNlYXJjaE1hbmFnZXI6IFNlYXJjaE1hbmFnZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSB2ZXJ0aWNhbEZvcm1hdGlvbjogVmVydGljYWxGb3JtYXRpb247XG5cblx0cHJpdmF0ZSBmaWVsZENvbGxlY3Rpb246IEZpZWxkQ29sbGVjdGlvbjtcblxuXHRwcml2YXRlIHN1bW1hcmllc01hbmFnZXI6IFN1bW1hcmllc01hbmFnZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSB1bmlxdWVGaWx0ZXJNYW5hZ2VyOiBVbmlxdWVGaWx0ZXJNYW5hZ2VyO1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cGFnaW5nQWdncmVnYXRlOiBQYWdpbmdNYW5hZ2VyLFxuXHRcdFx0XHRzb3VyY2VNYW5hZ2VyOiBTb3VyY2VNYW5hZ2VyLFxuXHRcdFx0XHR2ZXJ0aWNhbEZvcm1hdGlvbjogVmVydGljYWxGb3JtYXRpb24sXG5cdFx0XHRcdHN1bW1hcmllc01hbmFnZXI6IFN1bW1hcmllc01hbmFnZXIsXG5cdFx0XHRcdHNvcnRlckNvbGxlY3Rpb246IFNvcnRlckNvbGxlY3Rpb24sXG5cdFx0XHRcdGZpbHRlck1hbmFnZXI6IEZpbHRlck1hbmFnZXIsXG5cdFx0XHRcdHVuaXF1ZUZpbHRlck1hbmFnZXI6IFVuaXF1ZUZpbHRlck1hbmFnZXIsXG5cdFx0XHRcdHNlYXJjaE1hbmFnZXI6IFNlYXJjaE1hbmFnZXIsXG5cdFx0XHRcdGZpZWxkQ29sbGVjdGlvbjogRmllbGRDb2xsZWN0aW9uKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdTdHJ1Y3R1cmVBZ2dyZWdhdGUnKTtcblx0XHR0aGlzLnBhZ2luZ01hbmFnZXIgPSBwYWdpbmdBZ2dyZWdhdGU7XG5cdFx0dGhpcy5zb3VyY2VNYW5hZ2VyID0gc291cmNlTWFuYWdlcjtcblx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uID0gdmVydGljYWxGb3JtYXRpb247XG5cdFx0dGhpcy5zdW1tYXJpZXNNYW5hZ2VyID0gc3VtbWFyaWVzTWFuYWdlcjtcblx0XHR0aGlzLnNvcnRlckNvbGxlY3Rpb24gPSBzb3J0ZXJDb2xsZWN0aW9uO1xuXHRcdHRoaXMuZmlsdGVyTWFuYWdlciA9IGZpbHRlck1hbmFnZXI7XG5cdFx0dGhpcy51bmlxdWVGaWx0ZXJNYW5hZ2VyID0gdW5pcXVlRmlsdGVyTWFuYWdlcjtcblx0XHR0aGlzLnNlYXJjaE1hbmFnZXIgPSBzZWFyY2hNYW5hZ2VyO1xuXHRcdHRoaXMuZmllbGRDb2xsZWN0aW9uID0gZmllbGRDb2xsZWN0aW9uO1xuXHR9XG5cblx0Y3JlYXRlRXZlbnQoKTogQWdncmVnYXRlRXZlbnRUeXBlPEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXHRcdHJldHVybiBTdHJ1Y3R1cmVDcmVhdGVkQWdncmVnYXRlRXZlbnQ7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0Y2xlYXJFdmVudHMoKTogdm9pZCB7XG5cdFx0c3VwZXIuY2xlYXJFdmVudHMoKTtcblx0XHR0aGlzLnBhZ2luZ01hbmFnZXIuY2xlYXJFdmVudHMoKTtcblx0fVxuXG5cdGluaXQoKTogdm9pZCB7XG5cdFx0dGhpcy5pbml0VGhlbWUoKTtcblx0fVxuXG5cdHNldFZlcnRpY2FsRm9ybWF0aW9uRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbi5zZXRFbmFibGVkKGVuYWJsZWQpO1xuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cdH1cblxuXHRnZXRWZXJ0aWNhbEZvcm1hdGlvbigpOiBWZXJ0aWNhbEZvcm1hdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxGb3JtYXRpb247XG5cdH1cblxuXHRzZXRTdW1tYXJpZXNFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXG5cdFx0dGhpcy5zdW1tYXJpZXNNYW5hZ2VyLnNldEVuYWJsZWQoZW5hYmxlZCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RXZlbnRzKCk7XG5cdH1cblxuXHRzZXRPcmlnaW4oaXRlbXM6IEFycmF5PGFueT4pOiBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXG5cdFx0dGhpcy5hZGRFdmVudChcblx0XHRcdHRoaXMuc291cmNlTWFuYWdlci5zZXRPcmlnaW4oaXRlbXMsIHRoaXMuZ2V0SWQoKSlcblx0XHQpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVVbmlxdWVWYWx1ZXMoKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5nZXRFdmVudHMoKTtcblx0fVxuXG5cdGRlbGV0ZUFsbFNlbGVjdGVkKCk6IHZvaWQge1xuXG5cdH1cblxuXHRkZWxldGVJdGVtKHBheWxvYWQ6IG51bWJlciB8IE9yaWdpbklkIHwgQXJyYXk8bnVtYmVyPiB8IEFycmF5PE9yaWdpbklkPik6IHZvaWQge1xuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuZGVsZXRlT3JpZ2luSXRlbShwYXlsb2FkLCB0aGlzLmdldElkKCkpXG5cdFx0KTtcblx0XHR0aGlzLmdlbmVyYXRlU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQoKTtcblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXHR9XG5cblx0ZWRpdEl0ZW0oZWRpdFBhcmFtczogU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1QYXJhbXMpOiBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXG5cdFx0Y29uc3QgaXRlbUlkID0gZWRpdFBhcmFtcy5nZXRJdGVtSWQoKSxcblx0XHRcdGZpZWxkSWQgPSBlZGl0UGFyYW1zLmdldENvbHVtbkZpZWxkSWQoKSxcblx0XHRcdGZpZWxkID0gdGhpcy5maWVsZENvbGxlY3Rpb24uZ2V0RmllbGQoZmllbGRJZCBhcyBhbnkpLCAvLyBhcyBGaWVsZElkXG5cdFx0XHR2YWx1ZSA9IGVkaXRQYXJhbXMuZ2V0VmFsdWUoKTtcblxuXHRcdGNvbnN0IGVkaXRJdGVtRXZlbnRzID0gdGhpcy5zb3VyY2VNYW5hZ2VyLmVkaXRPcmlnaW5JdGVtKGl0ZW1JZCwgdmFsdWUsIGZpZWxkLCB0aGlzLmdldElkKCkpO1xuXG5cdFx0ZWRpdEl0ZW1FdmVudHMuZm9yRWFjaCgoZSkgPT4gdGhpcy5hZGRFdmVudChlKSk7XG5cblx0XHQvLyBUT0RPXG5cdFx0Ly8gdGhpcy5jYWxjdWxhdGVVbmlxdWVWYWx1ZXMoKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5nZXRFdmVudHMoKTtcblx0fVxuXG5cdHNldEhlaWdodChoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuXG5cdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbi5zZXRWaWV3cG9ydEhlaWdodChoZWlnaHQpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2VCYXNlZE9uVmlydHVhbFNjcm9sbCgpO1xuXHR9XG5cblx0c2V0VGhlbWUodGhlbWU6IFNjaGVtYVRoZW1lKTogdm9pZCB7XG5cblx0XHQvLyAjMTcwNyBNb3ZlIHRvIFNjaGVtZUFnZ3JlZ2F0ZVxuXHRcdGlmICh0aGVtZSA9PT0gU2NoZW1hVGhlbWUuTUFURVJJQUwpIHtcblx0XHRcdHRoaXMuZ2V0VmVydGljYWxGb3JtYXRpb24oKS5zZXRSb3dIZWlnaHQoNTIpO1xuXHRcdH1cblxuXHRcdGlmICh0aGVtZSA9PT0gU2NoZW1hVGhlbWUuR0VORVJJQykge1xuXHRcdFx0dGhpcy5nZXRWZXJ0aWNhbEZvcm1hdGlvbigpLnNldFJvd0hlaWdodCg0Mik7XG5cdFx0fVxuXG5cdFx0aWYgKHRoZW1lID09PSBTY2hlbWFUaGVtZS5GQUJSSUMpIHtcblx0XHRcdHRoaXMuZ2V0VmVydGljYWxGb3JtYXRpb24oKS5zZXRSb3dIZWlnaHQoMzYpO1xuXHRcdH1cblxuXHRcdGlmICh0aGVtZSA9PT0gU2NoZW1hVGhlbWUuTElHSFQpIHtcblx0XHRcdHRoaXMuZ2V0VmVydGljYWxGb3JtYXRpb24oKS5zZXRSb3dIZWlnaHQoNTYpO1xuXHRcdH1cblxuXHRcdGlmICh0aGVtZSA9PT0gU2NoZW1hVGhlbWUuREFSSykge1xuXHRcdFx0dGhpcy5nZXRWZXJ0aWNhbEZvcm1hdGlvbigpLnNldFJvd0hlaWdodCgzOCk7XG5cdFx0fVxuXHR9XG5cblx0c2V0U2Nyb2xsUG9zaXRpb24ocG9zaXRpb246IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb24uc2V0U2Nyb2xsUG9zaXRpb24ocG9zaXRpb24pO1xuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlQmFzZWRPblZpcnR1YWxTY3JvbGwoKTtcblx0fVxuXG5cdHNldFNlbGVjdGlvbihlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cblx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0Rm9ybWF0aW9uKCkuc2V0U2VsZWN0aW9uKGVuYWJsZWQpO1xuXG5cdFx0dGhpcy5hZGRFdmVudChcblx0XHRcdG5ldyBTZWxlY3Rpb25FbmFibGVkU2V0QWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCBlbmFibGVkKVxuXHRcdCk7XG5cdH1cblxuXHRzZXRTZWxlY3Rpb25Nb2RlKG1vZGU6IFJvd1NlbGVjdGlvbk1vZGUpOiB2b2lkIHtcblxuXHRcdHRoaXMuc291cmNlTWFuYWdlci5nZXRGb3JtYXRpb24oKS5zZXRNb2RlKG1vZGUpO1xuXG5cdFx0dGhpcy5hZGRFdmVudChcblx0XHRcdG5ldyBTZWxlY3Rpb25Nb2RlU2V0QWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCBtb2RlKVxuXHRcdCk7XG5cdH1cblxuXHR0b2dnbGVSb3coc2VsZWN0ZWRSb3c6IHN0cmluZywgdHlwZTogUm93U2VsZWN0VG9nZ2xlVHlwZSk6IHZvaWQge1xuXG5cdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnRvZ2dsZVJvdyhzZWxlY3RlZFJvdywgdHlwZSk7XG5cblx0XHR0aGlzLmdlbmVyYXRlU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQoKTtcblx0fVxuXG5cdHNlbGVjdEFsbCgpOiB2b2lkIHtcblx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2VsZWN0QWxsKCk7XG5cdFx0dGhpcy5nZW5lcmF0ZVNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50KCk7XG5cdH1cblxuXHR1bnNlbGVjdEFsbCgpOiB2b2lkIHtcblx0XHR0aGlzLnNvdXJjZU1hbmFnZXIudW5zZWxlY3RBbGwoKTtcblx0XHR0aGlzLmdlbmVyYXRlU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQoKTtcblx0fVxuXG5cdGdldEZvcm1hdGlvbigpOiBGb3JtYXRpb25NYW5hZ2VyIHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2VNYW5hZ2VyLmdldEZvcm1hdGlvbigpO1xuXHR9XG5cblx0Z2V0UGFnaW5nKCk6IFBhZ2luZ01hbmFnZXIge1xuXHRcdHJldHVybiB0aGlzLnBhZ2luZ01hbmFnZXI7XG5cdH1cblxuXHRjaGFuZ2VQYWdpbmcoY29uZmlnOiBQYWdpbmdDb25maWcpIHtcblx0XHR0aGlzLnBhZ2luZ01hbmFnZXIuY2hhbmdlKGNvbmZpZyk7XG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblx0fVxuXG5cdHNldFBhZ2luZyhwYWdpbmc6IFBhZ2luZ01hbmFnZXIpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ01hbmFnZXIgPSBwYWdpbmc7XG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblx0fVxuXG5cdG5leHRQYWdlKCk6IHZvaWQge1xuXG5cdFx0dGhpcy5wYWdpbmdNYW5hZ2VyLm5leHRQYWdlKCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXHR9XG5cblx0cHJldlBhZ2UoKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdNYW5hZ2VyLnByZXZQYWdlKCk7XG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblx0fVxuXG5cdGNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplOiBudW1iZXIpOiBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXG5cdFx0Y29uc3QgcGFnaW5nRXZlbnRzID0gdGhpcy5wYWdpbmdNYW5hZ2VyLmNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplKTtcblxuXHRcdC8vIFRPRE9cblx0XHRwYWdpbmdFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcblx0XHRcdHRoaXMuYWRkRXZlbnQoZXZlbnQpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblxuXHRcdHJldHVybiB0aGlzLmdldEV2ZW50cygpO1xuXHR9XG5cblx0Z2V0RW50aXRpZXMoKTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0U2xpY2VkRW50aXRpZXMoKTtcblx0fVxuXG5cdGdldFNvdXJjZSgpOiBTb3VyY2VNYW5hZ2VyIHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2VNYW5hZ2VyO1xuXHR9XG5cblx0Y3JlYXRlRmllbGRzKGZpZWxkQ29uZmlnczogQXJyYXk8RmllbGRDb25maWc+KTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdHRoaXMuZmllbGRDb2xsZWN0aW9uLmluaXRGaWVsZHMoZmllbGRDb25maWdzKTtcblxuXHRcdGNvbnN0IGZpZWxkcyA9IHRoaXMuZmllbGRDb2xsZWN0aW9uLmdldEFsbEZpZWxkcygpO1xuXG5cdFx0dGhpcy5hZGRFdmVudChcblx0XHRcdG5ldyBGaWVsZHNJbml0ZWRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCksIGZpZWxkQ29uZmlncywgZmllbGRzKVxuXHRcdCk7XG5cblx0XHR0aGlzLmZpbHRlck1hbmFnZXIuYXNzaWduRmlsdGVyVHlwZXMoZmllbGRzKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHRuZXcgRmlsdGVyVHlwZXNJbml0ZWRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCksIHRoaXMuZmlsdGVyTWFuYWdlci5nZXRGaWx0ZXJUeXBlcygpKVxuXHRcdCk7XG5cblx0XHRyZXR1cm4gdGhpcy5nZXRFdmVudHMoKTtcblx0fVxuXG5cdHNldFNvcnRpbmdDb25maWcoY29uZmlnOiBTb3J0aW5nQ29uZmlnKTogdm9pZCB7XG5cdFx0dGhpcy5zb3J0ZXJDb2xsZWN0aW9uLnNldENvbmZpZyhjb25maWcpO1xuXHR9XG5cblx0dG9nZ2xlU29ydChmaWVsZElkOiBGaWVsZElkKTogQXJyYXk8U3RydWN0dXJlU29ydGVyPiB7XG5cblx0XHRjb25zdCBmaWVsZCA9IHRoaXMuZmllbGRDb2xsZWN0aW9uLmdldEZpZWxkKGZpZWxkSWQpO1xuXG5cdFx0dGhpcy5zb3J0ZXJDb2xsZWN0aW9uLnRvZ2dsZShmaWVsZCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIHRoaXMuc29ydGVyQ29sbGVjdGlvbi5nZXRBbGwoKTtcblx0fVxuXG5cdHNldFNvcnRPcmRlcihmaWVsZElkOiBGaWVsZElkLCBzb3J0T3JkZXI6IFNvcnRPcmRlcik6IEFycmF5PFN0cnVjdHVyZVNvcnRlcj4ge1xuXG5cdFx0Y29uc3QgZmllbGQgPSB0aGlzLmZpZWxkQ29sbGVjdGlvbi5nZXRGaWVsZChmaWVsZElkKTtcblxuXHRcdHRoaXMuc29ydGVyQ29sbGVjdGlvbi5zZXRTb3J0T3JkZXIoZmllbGQsIHNvcnRPcmRlcik7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIHRoaXMuc29ydGVyQ29sbGVjdGlvbi5nZXRBbGwoKTtcblx0fVxuXG5cdHNldEZpbHRlckNvbmZpZyhjb25maWc6IEZpbHRlckNvbmZpZyk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyTWFuYWdlci5nZXRTZXR0aW5ncygpLnNldEZpbHRlckNvbmZpZyhjb25maWcpO1xuXHR9XG5cblx0c2V0UXVpY2tGaWx0ZXJzQ29uZmlnKGNvbmZpZzogUXVpY2tGaWx0ZXJzQ29uZmlnKTogdm9pZCB7XG5cdFx0dGhpcy5maWx0ZXJNYW5hZ2VyLmdldFNldHRpbmdzKCkuc2V0UXVpY2tGaWx0ZXJzQ29uZmlnKGNvbmZpZyk7XG5cdH1cblxuXHR0b2dnbGVGaWx0ZXIoZmllbGRJZDogRmllbGRJZCwgZXh0ZXJuYWxGaWx0ZXJJZDogc3RyaW5nLCBmaWx0ZXJWYWx1ZTogc3RyaW5nKTogQXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHRjb25zdCBmaWVsZCA9IHRoaXMuZmllbGRDb2xsZWN0aW9uLmdldEZpZWxkKGZpZWxkSWQpO1xuXG5cdFx0Ly8gRmllbGQgbm90IGZvdW5kXG5cdFx0Ly8gVE9ETyB0aHJvdyBhZ2dyZWdhdGUgZXZlbnRcblx0XHRpZiAoZmllbGQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblxuXHRcdC8vIHRoaXMuZmlsdGVyTWFuYWdlci5hZGRGaWx0ZXIoZmllbGQsIGV4dGVybmFsRmlsdGVySWQsIGZpbHRlclZhbHVlKTtcblxuXHRcdC8vIHRoaXMuZmlsdGVyTWFuYWdlci5hXG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0YWRkRmlsdGVyKGZpZWxkSWQ6IEZpZWxkSWQsIGZpbHRlclR5cGVJZDogRmlsdGVyVHlwZUlkLCB2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5maWx0ZXJNYW5hZ2VyLmFkZChmaWVsZElkLCBmaWx0ZXJUeXBlSWQsIHZhbHVlKTtcblxuXHRcdGNvbnN0IGZpZWxkcyA9IHRoaXMuZmllbGRDb2xsZWN0aW9uLmdldEZpZWxkc0FzTWFwKCk7XG5cblx0XHRsZXQgYWN0aXZlRmlsdGVycyA9IHRoaXMuZmlsdGVyTWFuYWdlci5nZXRBbGxBY3RpdmVGaWx0ZXJzKGZpZWxkcyk7XG5cblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0bmV3IEZpbHRlckFkZGVkQWdncmVnYXRlRXZlbnQoXG5cdFx0XHRcdHRoaXMuZ2V0SWQoKSxcblx0XHRcdFx0YWN0aXZlRmlsdGVyc1xuXHRcdFx0KVxuXHRcdCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXHR9XG5cblx0cmVtb3ZlQWxsRmlsdGVycygpOiB2b2lkIHtcblx0XHR0aGlzLmZpbHRlck1hbmFnZXIucmVtb3ZlQWxsKCk7XG5cblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0bmV3IEFsbEZpbHRlcnNSZW1vdmVkQWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpKVxuXHRcdCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXHR9XG5cblx0cmVtb3ZlRmlsdGVyKGZpbHRlcklkOiBGaWx0ZXJJZCk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyTWFuYWdlci5yZW1vdmUoZmlsdGVySWQpO1xuXG5cdFx0Y29uc3QgZmllbGRzID0gdGhpcy5maWVsZENvbGxlY3Rpb24uZ2V0RmllbGRzQXNNYXAoKTtcblx0XHRsZXQgYWN0aXZlRmlsdGVycyA9IHRoaXMuZmlsdGVyTWFuYWdlci5nZXRBbGxBY3RpdmVGaWx0ZXJzKGZpZWxkcyk7XG5cblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0bmV3IEZpbHRlclJlbW92ZWRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCksIGFjdGl2ZUZpbHRlcnMpXG5cdFx0KTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cdH1cblxuXHRzZXRTZWFyY2hpbmdDb25maWcoY29uZmlnOiBTZWFyY2hDb25maWcpOiB2b2lkIHtcblx0XHR0aGlzLmZpbHRlck1hbmFnZXIuZ2V0U2V0dGluZ3MoKS5zZXRTZWFyY2hpbmdDb25maWcoY29uZmlnKTtcblx0fVxuXG5cdGFkZFNlYXJjaFBocmFzZShwaHJhc2U6IHN0cmluZyk6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXG5cdFx0Y29uc3QgZmllbGRzID0gdGhpcy5maWVsZENvbGxlY3Rpb24uZ2V0QWxsRmllbGRzKCk7XG5cblx0XHR0aGlzLnNlYXJjaE1hbmFnZXIuYWRkU2VhcmNoUGhyYXNlKGZpZWxkcywgcGhyYXNlKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRyZW1vdmVTZWFyY2hQaHJhc2UoKTogQXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHR0aGlzLnNlYXJjaE1hbmFnZXIucmVtb3ZlU2VhcmNoRmlsdGVycygpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblxuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdHNlbGVjdEFsbFVuaXF1ZUZpbHRlcihmaWVsZElkOiBGaWVsZElkKTogdm9pZCB7XG5cblx0XHR0aGlzLnVuaXF1ZUZpbHRlck1hbmFnZXIuc2VsZWN0QWxsKGZpZWxkSWQpO1xuXG5cdFx0dGhpcy5hZGRFdmVudChcblx0XHRcdG5ldyBBbGxVbmlxdWVGaWx0ZXJTZWxlY3RlZEFnZ3JlZ2F0ZUV2ZW50KFxuXHRcdFx0XHR0aGlzLmdldElkKClcblx0XHRcdClcblx0XHQpO1xuXG5cdFx0dGhpcy5nZW5lcmF0ZUNhbGN1bGF0ZVVuaXF1ZVZhbHVlc0FnZ3JlZ2F0ZUV2ZW50KCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXHR9XG5cblx0c2VsZWN0VW5pcXVlRmlsdGVyKGZpZWxkSWQ6IEZpZWxkSWQsIHVuaXF1ZVZhbHVlSWQ6IFVuaXF1ZVZhbHVlSWQpOiB2b2lkIHtcblxuXHRcdHRoaXMudW5pcXVlRmlsdGVyTWFuYWdlci5zZWxlY3QoZmllbGRJZCwgdW5pcXVlVmFsdWVJZCk7XG5cblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0bmV3IFVuaXF1ZUZpbHRlclNlbGVjdGVkQWdncmVnYXRlRXZlbnQoXG5cdFx0XHRcdHRoaXMuZ2V0SWQoKVxuXHRcdFx0KVxuXHRcdCk7XG5cblx0XHR0aGlzLmdlbmVyYXRlQ2FsY3VsYXRlVW5pcXVlVmFsdWVzQWdncmVnYXRlRXZlbnQoKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cdH1cblxuXHR1bnNlbGVjdEFsbFVuaXF1ZUZpbHRlcihmaWVsZElkOiBGaWVsZElkKTogdm9pZCB7XG5cblx0XHR0aGlzLnVuaXF1ZUZpbHRlck1hbmFnZXIudW5zZWxlY3RBbGwoZmllbGRJZCk7XG5cblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0bmV3IEFsbFVuaXF1ZUZpbHRlclVuc2VsZWN0ZWRBZ2dyZWdhdGVFdmVudChcblx0XHRcdFx0dGhpcy5nZXRJZCgpXG5cdFx0XHQpXG5cdFx0KTtcblxuXHRcdHRoaXMuZ2VuZXJhdGVDYWxjdWxhdGVVbmlxdWVWYWx1ZXNBZ2dyZWdhdGVFdmVudCgpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblx0fVxuXG5cdHVuc2VsZWN0VW5pcXVlRmlsdGVyKGZpZWxkSWQ6IEZpZWxkSWQsIHVuaXF1ZVZhbHVlSWQ6IFVuaXF1ZVZhbHVlSWQpOiB2b2lkIHtcblxuXHRcdHRoaXMudW5pcXVlRmlsdGVyTWFuYWdlci51bnNlbGVjdChmaWVsZElkLCB1bmlxdWVWYWx1ZUlkKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHRuZXcgVW5pcXVlRmlsdGVyVW5zZWxlY3RlZEFnZ3JlZ2F0ZUV2ZW50KFxuXHRcdFx0XHR0aGlzLmdldElkKClcblx0XHRcdClcblx0XHQpO1xuXG5cdFx0dGhpcy5nZW5lcmF0ZUNhbGN1bGF0ZVVuaXF1ZVZhbHVlc0FnZ3JlZ2F0ZUV2ZW50KCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVTb3VyY2UoKTogdm9pZCB7XG5cblx0XHRpZiAoIXRoaXMuc291cmNlTWFuYWdlci5nZXRPcmlnaW4oKSB8fCAhdGhpcy5wYWdpbmdNYW5hZ2VyKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gVE9ETyBSZWZhY3RvclxuXHRcdHRoaXMuc291cmNlTWFuYWdlci5zZXRFbnRpdGllcyh0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0T3JpZ2luKCkpO1xuXG5cdFx0Ly8gZmlsdGVyaW5nXG5cdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnNldEVudGl0aWVzKFxuXHRcdFx0dGhpcy5maWx0ZXJNYW5hZ2VyLmZpbHRlcih0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0RW50aXRpZXMoKSwgdGhpcy5maWVsZENvbGxlY3Rpb24uZ2V0RmllbGRzQXNNYXAoKSlcblx0XHQpO1xuXG5cdFx0Ly8gc2VhcmNoXG5cdFx0Y29uc3Qgc2VhcmNoZWRFbnRpdGllcyA9IHRoaXMuc2VhcmNoTWFuYWdlci5zZWFyY2godGhpcy5zb3VyY2VNYW5hZ2VyLmdldEVudGl0aWVzKCkpO1xuXHRcdHRoaXMuc291cmNlTWFuYWdlci5zZXRFbnRpdGllcyhzZWFyY2hlZEVudGl0aWVzKTtcblxuXHRcdC8vIHVuaXF1ZSBmaWx0ZXJpbmdcblx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2V0RW50aXRpZXMoXG5cdFx0XHR0aGlzLnVuaXF1ZUZpbHRlck1hbmFnZXIuZmlsdGVyQWxsKHRoaXMuc291cmNlTWFuYWdlci5nZXRFbnRpdGllcygpLCB0aGlzLmZpZWxkQ29sbGVjdGlvbi5nZXRBbGxGaWVsZHMoKSlcblx0XHQpO1xuXG5cdFx0Ly8gc29ydGluZ1xuXHRcdGNvbnN0IGVudHMgPSB0aGlzLnNvcnRlckNvbGxlY3Rpb24uc29ydCh0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0RW50aXRpZXMoKSk7XG5cdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnNldEVudGl0aWVzKGVudHMpO1xuXG5cdFx0Ly8gY2FsY3VsYXRlIGZpbHRlcmVkRW50aXRpZXNcblx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2V0UHJlcGFyZWRFbnRpdGllcygpO1xuXG5cdFx0dGhpcy5wYWdpbmdNYW5hZ2VyLnNldFNvdXJjZVNpemUodGhpcy5zb3VyY2VNYW5hZ2VyLmdldFByZXBhcmVkRW50aXRpZXMoKS5sZW5ndGgpO1xuXG5cdFx0dGhpcy5hZGRFdmVudChuZXcgU3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSwgZW50cykpO1xuXG5cdFx0Ly8gc3VtbWFyaWVzXG5cdFx0Y29uc3Qgc3VtbWFyaWVzRXZlbnRzID0gdGhpcy5zdW1tYXJpZXNNYW5hZ2VyLmNhbGN1bGF0ZShcblx0XHRcdHRoaXMuZmllbGRDb2xsZWN0aW9uLmdldEFsbEZpZWxkcygpLFxuXHRcdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLmdldEVudGl0aWVzKClcblx0XHQpO1xuXG5cdFx0c3VtbWFyaWVzRXZlbnRzLmZvckVhY2goKGFlOiBBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4pID0+IHtcblx0XHRcdHRoaXMuYWRkRXZlbnQoYWUpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gcGFnaW5nXG5cdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnNldEVudGl0aWVzKHRoaXMucGFnaW5nTWFuYWdlci5zYW1wbGUodGhpcy5zb3VyY2VNYW5hZ2VyLmdldEVudGl0aWVzKCkpKTtcblxuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb24uc2V0U291cmNlU2l6ZSh0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0RW50aXRpZXMoKS5sZW5ndGgpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2VCYXNlZE9uVmlydHVhbFNjcm9sbCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVTb3VyY2VCYXNlZE9uVmlydHVhbFNjcm9sbCgpOiB2b2lkIHtcblxuXHRcdGlmICh0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLmlzRW5hYmxlZCgpKSB7XG5cblx0XHRcdGNvbnN0IHJhbmdlID0gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvbi5nZXRSYW5nZSgpO1xuXG5cdFx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2V0U2xpY2VkRW50aXRpZXMoXG5cdFx0XHRcdHRoaXMuc291cmNlTWFuYWdlci5nZXRFbnRpdGllcygpLnNsaWNlKHJhbmdlLmdldFN0YXJ0KCksIHJhbmdlLmdldEVuZCgpKVxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnNldFNsaWNlZEVudGl0aWVzKFxuXHRcdFx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0RW50aXRpZXMoKVxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGluaXRUaGVtZSgpIHtcblxuXHRcdC8vIFRPRE9cblx0XHRjb25zdCB0aGVtZSA9IFNjaGVtYUFnZ3JlZ2F0ZS5ERUZBVUxUX1RIRU1FO1xuXG5cdFx0dGhpcy5zZXRUaGVtZSh0aGVtZSk7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZVVuaXF1ZVZhbHVlcygpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGZpZWxkcyA9IHRoaXMuZmllbGRDb2xsZWN0aW9uLmdldEFsbEZpZWxkcygpLFxuXHRcdFx0aXRlbXMgPSB0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0T3JpZ2luKCk7XG5cblx0XHR0aGlzLnVuaXF1ZUZpbHRlck1hbmFnZXIuY2FsY3VsYXRlQWxsKGl0ZW1zLCBmaWVsZHMpO1xuXG5cdFx0dGhpcy5nZW5lcmF0ZUNhbGN1bGF0ZVVuaXF1ZVZhbHVlc0FnZ3JlZ2F0ZUV2ZW50KCk7XG5cdH1cblxuXHRwcml2YXRlIGdlbmVyYXRlQ2FsY3VsYXRlVW5pcXVlVmFsdWVzQWdncmVnYXRlRXZlbnQoKTogdm9pZCB7XG5cdFx0dGhpcy5hZGRFdmVudChcblx0XHRcdG5ldyBVbmlxdWVGaWx0ZXJDYWxjdWxhdGVkQWdncmVnYXRlRXZlbnQoXG5cdFx0XHRcdHRoaXMuZ2V0SWQoKSxcblx0XHRcdFx0dGhpcy51bmlxdWVGaWx0ZXJNYW5hZ2VyLmdldEFsbChcblx0XHRcdFx0XHR0aGlzLmZpZWxkQ29sbGVjdGlvbi5nZXRBbGxGaWVsZHMoKVxuXHRcdFx0XHQpXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgZ2VuZXJhdGVTZWxlY3RlZFJvd0NoYW5nZWRFdmVudCgpIHtcblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0bmV3IFNlbGVjdGVkUm93Q2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50KFxuXHRcdFx0XHR0aGlzLmdldElkKCksXG5cdFx0XHRcdHRoaXMuc291cmNlTWFuYWdlci5nZXRGb3JtYXRpb24oKS5nZXRTZWxlY3RlZFJvd3MoKSxcblx0XHRcdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLmdldEZvcm1hdGlvbigpLmlzQWxsU2VsZWN0ZWQoKSxcblx0XHRcdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLmdldEZvcm1hdGlvbigpLmlzQWxsVW5zZWxlY3RlZCgpXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=