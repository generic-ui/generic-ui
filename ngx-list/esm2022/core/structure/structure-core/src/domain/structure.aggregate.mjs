import { AggregateRoot } from '@generic-ui/hermes';
import { StructurePreparedEntitiesSetAggregateEvent } from '../../../source/src/core/prepared/structure.prepared-entities-set.aggregate-event';
import { FieldsInitedAggregateEvent } from '../../../field/src/core/init/fields-inited.aggregate-event';
import { SchemaTheme } from '../../../../schema/src/api/theme/schema-theme';
import { SchemaAggregate } from '../../../../schema/src/domain/schema.aggregate';
import { StructureCreatedAggregateEvent } from '../core/create/structure-created.aggregate-event';
import { FilterTypesInitedAggregateEvent } from '../../../filter/src/core/type/init/filter-types-inited.aggregate-event';
import { AllFiltersRemovedAggregateEvent } from '../../../filter/src/core/remove-all/all-filters-removed.aggregate-event';
import { FilterAddedAggregateEvent } from '../../../filter/src/core/add/filter-added.aggregate-event';
import { FilterRemovedAggregateEvent } from '../../../filter/src/core/remove/filter-removed.aggregate-event';
import { UniqueFilterCalculatedAggregateEvent } from '../../../filter/src/core/unique/calculate/unique-filter-calculated.aggregate-event';
import { UniqueFilterSelectedAggregateEvent } from '../../../filter/src/core/unique/select/unique-filter-selected.aggregate-event';
import { UniqueFilterUnselectedAggregateEvent } from '../../../filter/src/core/unique/unselect/unique-filter-unselected.aggregate-event';
import { AllUniqueFilterUnselectedAggregateEvent } from '../../../filter/src/core/unique/unselect-all/all-unique-filter-unselected.aggregate-event';
import { AllUniqueFilterSelectedAggregateEvent } from '../../../filter/src/core/unique/select-all/all-unique-filter-selected.aggregate-event';
import { SelectedRowChangedAggregateEvent } from '../../../formation/src/core/selected-row-changed.aggregate-event';
import { SelectionEnabledSetAggregateEvent } from '../../../formation/src/core/set-enabled/selection-enabled-set.aggregate-event';
import { structureKey } from '../api/global/structre.key';
export class StructureAggregate extends AggregateRoot {
    pagingManager;
    sourceManager;
    sorterManager;
    filterManager;
    searchManager;
    verticalFormation;
    fieldCollection;
    summariesManager;
    uniqueFilterManager;
    constructor(structureId, pagingAggregate, sourceManager, verticalFormation, summariesManager, sorterCollection, filterManager, uniqueFilterManager, searchManager, fieldCollection) {
        super(structureId, structureKey);
        this.pagingManager = pagingAggregate;
        this.sourceManager = sourceManager;
        this.verticalFormation = verticalFormation;
        this.summariesManager = summariesManager;
        this.sorterManager = sorterCollection;
        this.filterManager = filterManager;
        this.uniqueFilterManager = uniqueFilterManager;
        this.searchManager = searchManager;
        this.fieldCollection = fieldCollection;
        this.addEvent(this.sourceManager.events);
        this.sourceManager.events = [];
    }
    createEvent() {
        return StructureCreatedAggregateEvent;
    }
    clearEvents() {
        super.clearEvents();
        this.pagingManager.clearEvents();
    }
    init() {
        this.initTheme();
    }
    setVerticalFormationEnabled(enabled) {
        this.verticalFormation.setEnabled(enabled);
        this.calculateSource();
    }
    getVerticalFormation() {
        return this.verticalFormation;
    }
    setSummariesEnabled(enabled) {
        this.summariesManager.setEnabled(enabled);
        this.calculateSource();
        return this.getEvents();
    }
    setOrigin(items) {
        this.addEvent(this.sourceManager.setOrigin(items, this.getId()));
        // if (false) {
        this.calculateUniqueValues();
        // }
        this.calculateSource();
        return this.getEvents();
    }
    deleteItem(payload) {
        this.addEvent(this.sourceManager.deleteOriginItem(payload, this.getId()));
        this.generateSelectedRowChangedEvent();
        this.calculateSource();
    }
    editItem(editParams) {
        const itemId = editParams.getItemId(), fieldId = editParams.getColumnFieldId(), field = this.fieldCollection.getField(fieldId), // as FieldId
        value = editParams.getValue();
        const editItemEvents = this.sourceManager.editOriginItem(itemId, value, field, this.getId());
        editItemEvents.forEach((e) => this.addEvent(e));
        // TODO
        this.calculateUniqueValues();
        this.calculateSource();
        return this.getEvents();
    }
    setHeight(height) {
        this.verticalFormation.setViewportHeight(height);
        this.calculateSourceBasedOnVirtualScroll();
    }
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
    setScrollPosition(position) {
        this.verticalFormation.setScrollPosition(position);
        this.calculateSourceBasedOnVirtualScroll();
    }
    scrollToIndex(index) {
        this.addEvent(this.verticalFormation.scrollToIndex(index));
    }
    setSelection(enabled) {
        this.sourceManager.getFormation().setSelection(enabled);
        this.addEvent(new SelectionEnabledSetAggregateEvent(this.getId(), enabled));
    }
    setSelectionMode(mode) {
        this.addEvent(this.sourceManager.getFormation().setMode(mode));
    }
    setSelectionType(type) {
        this.addEvent(this.sourceManager.getFormation().setType(type));
    }
    setFormationMatcher(matcher) {
        this.getFormation().setMatcher(matcher);
        this.sourceManager.reSelect();
        this.generateSelectedRowChangedEvent();
    }
    selectByIndex(indexes) {
        this.sourceManager.selectByIndex(indexes);
        this.generateSelectedRowChangedEvent();
    }
    selectByIds(ids) {
        this.sourceManager.selectByIds(ids);
        this.generateSelectedRowChangedEvent();
    }
    /**
     *
     * Doesnt' work
     */
    setSelectedRows(selectedRows) {
        this.sourceManager.setSelectedRows(selectedRows);
        this.generateSelectedRowChangedEvent();
    }
    setSelectionCustomConfig(config) {
        this.addEvent(this.sourceManager.setCustomConfig(config));
    }
    toggleRow(selectedRow, type) {
        this.sourceManager.toggleRow(selectedRow, type);
        this.generateSelectedRowChangedEvent();
    }
    selectCustom(id) {
        this.sourceManager.selectCustom(id);
        this.generateSelectedRowChangedEvent();
    }
    selectAll() {
        this.sourceManager.selectAll();
        this.generateSelectedRowChangedEvent();
    }
    unselectAll() {
        this.sourceManager.unselectAll();
        this.generateSelectedRowChangedEvent();
    }
    getFormation() {
        return this.sourceManager.getFormation();
    }
    getPaging() {
        return this.pagingManager;
    }
    changePaging(config) {
        this.pagingManager.change(config);
        this.calculateSource();
    }
    setPaging(paging) {
        this.pagingManager = paging;
        this.calculateSource();
    }
    nextPage() {
        this.pagingManager.nextPage();
        this.calculateSource();
    }
    prevPage() {
        this.pagingManager.prevPage();
        this.calculateSource();
    }
    changePageSize(pageSize) {
        const pagingEvents = this.pagingManager.changePageSize(pageSize);
        // TODO
        pagingEvents.forEach((event) => {
            this.addEvent(event);
        });
        this.calculateSource();
        return this.getEvents();
    }
    getEntities() {
        return this.sourceManager.getSlicedEntities();
    }
    getSource() {
        return this.sourceManager;
    }
    createFields(fieldConfigs) {
        this.fieldCollection.initFields(fieldConfigs);
        const fields = this.fieldCollection.getAllFields();
        this.addEvent(new FieldsInitedAggregateEvent(this.getId(), fieldConfigs, fields));
        this.filterManager.assignFilterTypes(fields);
        this.addEvent(new FilterTypesInitedAggregateEvent(this.getId(), this.filterManager.getFilterTypes()));
        return this.getEvents();
    }
    setSortingConfig(config) {
        this.sorterManager.setConfig(config);
    }
    toggleSort(fieldId) {
        const field = this.fieldCollection.getField(fieldId);
        this.sorterManager.toggle(field);
        this.calculateSource();
        return this.sorterManager.getAll();
    }
    setSortOrder(fieldId, sortOrder) {
        const field = this.fieldCollection.getField(fieldId);
        this.sorterManager.setSortOrder(field, sortOrder);
        this.calculateSource();
        return this.sorterManager.getAll();
    }
    setFilterConfig(config) {
        this.filterManager.getSettings().setFilterConfig(config);
    }
    setQuickFiltersConfig(config) {
        this.filterManager.getSettings().setQuickFiltersConfig(config);
    }
    toggleFilter(fieldId, externalFilterId, filterValue) {
        const field = this.fieldCollection.getField(fieldId);
        // Field not found
        // TODO throw aggregate event
        if (field === undefined) {
            return [];
        }
        // this.filterManager.addFilter(field, externalFilterId, filterValue);
        this.calculateSource();
        return [];
    }
    addFilter(fieldId, filterTypeId, value) {
        this.filterManager.add(fieldId, filterTypeId, value);
        const fields = this.fieldCollection.getFieldsAsMap();
        const activeFilters = this.filterManager.getAllActiveFilters(fields);
        this.addEvent(new FilterAddedAggregateEvent(this.getId(), activeFilters));
        this.calculateSource();
    }
    removeAllFilters() {
        this.filterManager.removeAll();
        this.addEvent(new AllFiltersRemovedAggregateEvent(this.getId()));
        this.calculateSource();
    }
    removeFilter(filterId) {
        this.filterManager.remove(filterId);
        const fields = this.fieldCollection.getFieldsAsMap();
        const activeFilters = this.filterManager.getAllActiveFilters(fields);
        this.addEvent(new FilterRemovedAggregateEvent(this.getId(), activeFilters));
        this.calculateSource();
    }
    setSearchingConfig(config) {
        this.filterManager.getSettings().setSearchingConfig(config);
    }
    addSearchPhrase(phrase) {
        const fields = this.fieldCollection.getAllFields();
        this.searchManager.addSearchPhrase(fields, phrase);
        this.calculateSource();
        return [];
    }
    removeSearchPhrase() {
        this.searchManager.removeSearchFilters();
        this.calculateSource();
        return [];
    }
    selectAllUniqueFilter(fieldId) {
        this.uniqueFilterManager.selectAll(fieldId);
        this.addEvent(new AllUniqueFilterSelectedAggregateEvent(this.getId()));
        this.generateCalculateUniqueValuesAggregateEvent();
        this.calculateSource();
    }
    selectUniqueFilter(fieldId, uniqueValueId) {
        this.uniqueFilterManager.select(fieldId, uniqueValueId);
        this.addEvent(new UniqueFilterSelectedAggregateEvent(this.getId()));
        this.generateCalculateUniqueValuesAggregateEvent();
        this.calculateSource();
    }
    unselectAllUniqueFilter(fieldId) {
        this.uniqueFilterManager.unselectAll(fieldId);
        this.addEvent(new AllUniqueFilterUnselectedAggregateEvent(this.getId()));
        this.generateCalculateUniqueValuesAggregateEvent();
        this.calculateSource();
    }
    unselectUniqueFilter(fieldId, uniqueValueId) {
        this.uniqueFilterManager.unselect(fieldId, uniqueValueId);
        this.addEvent(new UniqueFilterUnselectedAggregateEvent(this.getId()));
        this.generateCalculateUniqueValuesAggregateEvent();
        this.calculateSource();
    }
    calculateSource() {
        if (!this.sourceManager.getOrigin() || !this.pagingManager) {
            return;
        }
        // TODO Refactor
        this.sourceManager.setEntities(this.sourceManager.getOrigin());
        // filtering
        this.sourceManager.setEntities(this.filterManager.filter(this.sourceManager.getEntities(), this.fieldCollection.getFieldsAsMap()));
        // search
        const searchedEntities = this.searchManager.search(this.sourceManager.getEntities());
        this.sourceManager.setEntities(searchedEntities);
        // unique filtering
        if (true) {
            // this.sourceManager.setEntities(
            // 	this.uniqueFilterManager.filterAll(this.sourceManager.getEntities(), this.fieldCollection.getAllFields())
            // );
        }
        // sorting
        const ents = this.sorterManager.sort(this.sourceManager.getEntities());
        this.sourceManager.setEntities(ents);
        // calculate filteredEntities
        this.sourceManager.setPreparedEntities();
        this.pagingManager.setSourceSize(this.sourceManager.getPreparedEntities().length);
        this.addEvent(new StructurePreparedEntitiesSetAggregateEvent(this.getId(), ents));
        // summaries
        const summariesEvents = this.summariesManager.calculate(this.fieldCollection.getAllFields(), this.sourceManager.getEntities());
        summariesEvents.forEach((ae) => {
            this.addEvent(ae);
        });
        // paging
        this.sourceManager.setEntities(this.pagingManager.sample(this.sourceManager.getEntities()));
        this.verticalFormation.setSourceSize(this.sourceManager.getEntities().length);
        this.calculateSourceBasedOnVirtualScroll();
    }
    calculateSourceBasedOnVirtualScroll() {
        if (this.verticalFormation.isEnabled()) {
            const range = this.verticalFormation.getRange();
            this.sourceManager.setSlicedEntities(this.sourceManager.getEntities().slice(range.getStart(), range.getEnd()));
        }
        else {
            this.sourceManager.setSlicedEntities(this.sourceManager.getEntities());
        }
    }
    initTheme() {
        // TODO
        const theme = SchemaAggregate.DEFAULT_THEME;
        this.setTheme(theme);
    }
    calculateUniqueValues() {
        const fields = this.fieldCollection.getAllFields(), items = this.sourceManager.getOrigin();
        this.uniqueFilterManager.calculateAll(items, fields);
        this.generateCalculateUniqueValuesAggregateEvent();
    }
    generateCalculateUniqueValuesAggregateEvent() {
        this.addEvent(new UniqueFilterCalculatedAggregateEvent(this.getId(), this.uniqueFilterManager.getAll(this.fieldCollection.getAllFields())));
    }
    generateSelectedRowChangedEvent() {
        this.addEvent(new SelectedRowChangedAggregateEvent(this.getId(), this.sourceManager.getFormation().getSelectedItemIds().map(i => i.toString()), this.sourceManager.getFormation().isAllSelected(), this.sourceManager.getFormation().isAllUnselected()));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBc0MsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFxQnZGLE9BQU8sRUFBRSwwQ0FBMEMsRUFBRSxNQUFNLG1GQUFtRixDQUFDO0FBRS9JLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDakYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFFbEcsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDekgsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFFMUgsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFFdEcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFFN0csT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sb0ZBQW9GLENBQUM7QUFFMUksT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sK0VBQStFLENBQUM7QUFDbkksT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sbUZBQW1GLENBQUM7QUFDekksT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sMkZBQTJGLENBQUM7QUFDcEosT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sdUZBQXVGLENBQUM7QUFDOUksT0FBTyxFQUFF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QUFJLENBQUMsS0FBSyxFQUFFLEVBQ1osSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FDOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FDbkMsQ0FDRCxDQUNELENBQUM7SUFDSCxDQUFDO0lBRU8sK0JBQStCO1FBQ3RDLElBQUksQ0FBQyxRQUFRLENBQ1osSUFBSSxnQ0FBZ0MsQ0FDbkMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUNaLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsRUFDN0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxhQUFhLEVBQUUsRUFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FDbkQsQ0FDRCxDQUFDO0lBQ0gsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQsIEFnZ3JlZ2F0ZUV2ZW50VHlwZSwgQWdncmVnYXRlUm9vdCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFBhZ2luZ01hbmFnZXIgfSBmcm9tICcuLi8uLi8uLi9wYWdpbmcvc3JjL2RvbWFpbi9wYWdpbmcubWFuYWdlcic7XG5pbXBvcnQgeyBTb3VyY2VNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL3NyYy9kb21haW4vc291cmNlLm1hbmFnZXInO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb24gfSBmcm9tICcuLi8uLi8uLi92ZXJ0aWNhbC1mb3JtYXRpb24vc3JjL2RvbWFpbi92ZXJ0aWNhbC1mb3JtYXRpb24nO1xuaW1wb3J0IHsgU3VtbWFyaWVzTWFuYWdlciB9IGZyb20gJy4uLy4uLy4uL3N1bW1hcmllcy9zcmMvZG9tYWluL3N1bW1hcmllcy5tYW5hZ2VyJztcbmltcG9ydCB7IFNvcnRlck1hbmFnZXIgfSBmcm9tICcuLi8uLi8uLi9zb3J0aW5nL3NyYy9kb21haW4vc29ydGVyLm1hbmFnZXInO1xuaW1wb3J0IHsgRmlsdGVyTWFuYWdlciB9IGZyb20gJy4uLy4uLy4uL2ZpbHRlci9zcmMvZG9tYWluL2ZpbHRlci5tYW5hZ2VyJztcbmltcG9ydCB7IEZpZWxkQ29sbGVjdGlvbiB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL3NyYy9kb21haW4vZmllbGQtY29sbGVjdGlvbic7XG5pbXBvcnQgeyBGb3JtYXRpb25NYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vZm9ybWF0aW9uL3NyYy9kb21haW4vZm9ybWF0aW9uLm1hbmFnZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcyB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9zcmMvY29yZS9vcmlnaW4vZWRpdC9zdHJ1Y3R1cmUuZWRpdC1zb3VyY2UtaXRlbS5wYXJhbXMnO1xuaW1wb3J0IHsgUGFnaW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vcGFnaW5nL3NyYy9hcGkvY29uZmlnL3BhZ2luZy1jb25maWcnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9zcmMvZG9tYWluL2l0ZW0vaXRlbS5lbnRpdHknO1xuaW1wb3J0IHsgU29ydGluZ0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3NvcnRpbmcvc3JjL2FwaS9jb25maWcvc29ydGluZy1jb25maWcnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL3NyYy9kb21haW4vZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgU29ydGVyIH0gZnJvbSAnLi4vLi4vLi4vc29ydGluZy9zcmMvZG9tYWluL3NvcnRlcic7XG5pbXBvcnQgeyBGaWx0ZXJDb25maWcgfSBmcm9tICcuLi8uLi8uLi9maWx0ZXIvc3JjL2FwaS9jb25maWcvZmlsdGVyLmNvbmZpZyc7XG5pbXBvcnQgeyBRdWlja0ZpbHRlcnNDb25maWcgfSBmcm9tICcuLi8uLi8uLi9maWx0ZXIvc3JjL2FwaS9xdWljay1maWx0ZXIvcXVpY2stZmlsdGVycy5jb25maWcnO1xuaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vc2VhcmNoL3NyYy9hcGkvY29uZmlnL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHsgU2VhcmNoTWFuYWdlciB9IGZyb20gJy4uLy4uLy4uL3NlYXJjaC9zcmMvZG9tYWluL3NlYXJjaC5tYW5hZ2VyJztcbmltcG9ydCB7IFN0cnVjdHVyZVByZXBhcmVkRW50aXRpZXNTZXRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9zcmMvY29yZS9wcmVwYXJlZC9zdHJ1Y3R1cmUucHJlcGFyZWQtZW50aXRpZXMtc2V0LmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBTb3J0T3JkZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9zcmMvZG9tYWluL2NvbHVtbi9zb3J0L3NvcnQtb3JkZXInO1xuaW1wb3J0IHsgRmllbGRzSW5pdGVkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9zcmMvY29yZS9pbml0L2ZpZWxkcy1pbml0ZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL3NyYy9hcGkvdGhlbWUvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9zcmMvZG9tYWluL3NjaGVtYS5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ3JlYXRlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vY29yZS9jcmVhdGUvc3RydWN0dXJlLWNyZWF0ZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvc3JjL2FwaS9jb25maWcvZmllbGQuY29uZmlnJztcbmltcG9ydCB7IEZpbHRlclR5cGVzSW5pdGVkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9maWx0ZXIvc3JjL2NvcmUvdHlwZS9pbml0L2ZpbHRlci10eXBlcy1pbml0ZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IEFsbEZpbHRlcnNSZW1vdmVkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9maWx0ZXIvc3JjL2NvcmUvcmVtb3ZlLWFsbC9hbGwtZmlsdGVycy1yZW1vdmVkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlSWQgfSBmcm9tICcuLi8uLi8uLi9maWx0ZXIvc3JjL2RvbWFpbi90eXBlL2ZpbHRlci10eXBlLmlkJztcbmltcG9ydCB7IEZpbHRlckFkZGVkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9maWx0ZXIvc3JjL2NvcmUvYWRkL2ZpbHRlci1hZGRlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgRmlsdGVySWQgfSBmcm9tICcuLi8uLi8uLi9maWx0ZXIvc3JjL2FwaS9pZC9maWx0ZXIuaWQnO1xuaW1wb3J0IHsgRmlsdGVyUmVtb3ZlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZmlsdGVyL3NyYy9jb3JlL3JlbW92ZS9maWx0ZXItcmVtb3ZlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgVW5pcXVlRmlsdGVyTWFuYWdlciB9IGZyb20gJy4uLy4uLy4uL2ZpbHRlci9zcmMvZG9tYWluL3VuaXF1ZS91bmlxdWUtZmlsdGVyLW1hbmFnZXInO1xuaW1wb3J0IHsgVW5pcXVlRmlsdGVyQ2FsY3VsYXRlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZmlsdGVyL3NyYy9jb3JlL3VuaXF1ZS9jYWxjdWxhdGUvdW5pcXVlLWZpbHRlci1jYWxjdWxhdGVkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZUlkIH0gZnJvbSAnLi4vLi4vLi4vZmlsdGVyL3NyYy9kb21haW4vdW5pcXVlL3VuaXF1ZS12YWx1ZS1pZCc7XG5pbXBvcnQgeyBVbmlxdWVGaWx0ZXJTZWxlY3RlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZmlsdGVyL3NyYy9jb3JlL3VuaXF1ZS9zZWxlY3QvdW5pcXVlLWZpbHRlci1zZWxlY3RlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgVW5pcXVlRmlsdGVyVW5zZWxlY3RlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZmlsdGVyL3NyYy9jb3JlL3VuaXF1ZS91bnNlbGVjdC91bmlxdWUtZmlsdGVyLXVuc2VsZWN0ZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IEFsbFVuaXF1ZUZpbHRlclVuc2VsZWN0ZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uLy4uLy4uL2ZpbHRlci9zcmMvY29yZS91bmlxdWUvdW5zZWxlY3QtYWxsL2FsbC11bmlxdWUtZmlsdGVyLXVuc2VsZWN0ZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IEFsbFVuaXF1ZUZpbHRlclNlbGVjdGVkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9maWx0ZXIvc3JjL2NvcmUvdW5pcXVlL3NlbGVjdC1hbGwvYWxsLXVuaXF1ZS1maWx0ZXItc2VsZWN0ZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IFNlbGVjdGVkUm93Q2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZm9ybWF0aW9uL3NyYy9jb3JlL3NlbGVjdGVkLXJvdy1jaGFuZ2VkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBSb3dTZWxlY3RUb2dnbGVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vZm9ybWF0aW9uL3NyYy9kb21haW4vcm93LXNlbGVjdC10b2dnbGUtdHlwZSc7XG5pbXBvcnQgeyBTZWxlY3Rpb25FbmFibGVkU2V0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9mb3JtYXRpb24vc3JjL2NvcmUvc2V0LWVuYWJsZWQvc2VsZWN0aW9uLWVuYWJsZWQtc2V0LmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25Nb2RlLCBSb3dTZWxlY3Rpb25UeXBlIH0gZnJvbSAnLi4vLi4vLi4vZm9ybWF0aW9uL3NyYy9hcGkvcm93LXNlbGVjdGVkL3Jvdy1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgSXRlbUVudGl0eUlkIH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL3NyYy9kb21haW4vaXRlbS9pdGVtLmVudGl0eS1pZCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVLZXkgfSBmcm9tICcuLi9hcGkvZ2xvYmFsL3N0cnVjdHJlLmtleSc7XG5pbXBvcnQgeyBGb3JtYXRpb25DdXN0b21TZWxlY3RJZCB9IGZyb20gJy4uLy4uLy4uL2Zvcm1hdGlvbi9zcmMvYXBpL2N1c3RvbS9mb3JtYXRpb24uY3VzdG9tLXNlbGVjdC5pZCc7XG5pbXBvcnQgeyBGb3JtYXRpb25DdXN0b21TZWxlY3Rpb25Db25maWcgfSBmcm9tICcuLi8uLi8uLi9mb3JtYXRpb24vc3JjL2FwaS9jdXN0b20vZm9ybWF0aW9uLmN1c3RvbS1zZWxlY3Rpb24uY29uZmlnJztcblxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQWdncmVnYXRlIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxTdHJ1Y3R1cmVJZD4ge1xuXG5cdHByaXZhdGUgcGFnaW5nTWFuYWdlcjogUGFnaW5nTWFuYWdlcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZU1hbmFnZXI6IFNvdXJjZU1hbmFnZXI7XG5cblx0cHJpdmF0ZSBzb3J0ZXJNYW5hZ2VyOiBTb3J0ZXJNYW5hZ2VyO1xuXG5cdHByaXZhdGUgZmlsdGVyTWFuYWdlcjogRmlsdGVyTWFuYWdlcjtcblxuXHRwcml2YXRlIHNlYXJjaE1hbmFnZXI6IFNlYXJjaE1hbmFnZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSB2ZXJ0aWNhbEZvcm1hdGlvbjogVmVydGljYWxGb3JtYXRpb247XG5cblx0cHJpdmF0ZSBmaWVsZENvbGxlY3Rpb246IEZpZWxkQ29sbGVjdGlvbjtcblxuXHRwcml2YXRlIHN1bW1hcmllc01hbmFnZXI6IFN1bW1hcmllc01hbmFnZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSB1bmlxdWVGaWx0ZXJNYW5hZ2VyOiBVbmlxdWVGaWx0ZXJNYW5hZ2VyO1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cGFnaW5nQWdncmVnYXRlOiBQYWdpbmdNYW5hZ2VyLFxuXHRcdFx0XHRzb3VyY2VNYW5hZ2VyOiBTb3VyY2VNYW5hZ2VyLFxuXHRcdFx0XHR2ZXJ0aWNhbEZvcm1hdGlvbjogVmVydGljYWxGb3JtYXRpb24sXG5cdFx0XHRcdHN1bW1hcmllc01hbmFnZXI6IFN1bW1hcmllc01hbmFnZXIsXG5cdFx0XHRcdHNvcnRlckNvbGxlY3Rpb246IFNvcnRlck1hbmFnZXIsXG5cdFx0XHRcdGZpbHRlck1hbmFnZXI6IEZpbHRlck1hbmFnZXIsXG5cdFx0XHRcdHVuaXF1ZUZpbHRlck1hbmFnZXI6IFVuaXF1ZUZpbHRlck1hbmFnZXIsXG5cdFx0XHRcdHNlYXJjaE1hbmFnZXI6IFNlYXJjaE1hbmFnZXIsXG5cdFx0XHRcdGZpZWxkQ29sbGVjdGlvbjogRmllbGRDb2xsZWN0aW9uKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsIHN0cnVjdHVyZUtleSk7XG5cdFx0dGhpcy5wYWdpbmdNYW5hZ2VyID0gcGFnaW5nQWdncmVnYXRlO1xuXHRcdHRoaXMuc291cmNlTWFuYWdlciA9IHNvdXJjZU1hbmFnZXI7XG5cdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbiA9IHZlcnRpY2FsRm9ybWF0aW9uO1xuXHRcdHRoaXMuc3VtbWFyaWVzTWFuYWdlciA9IHN1bW1hcmllc01hbmFnZXI7XG5cdFx0dGhpcy5zb3J0ZXJNYW5hZ2VyID0gc29ydGVyQ29sbGVjdGlvbjtcblx0XHR0aGlzLmZpbHRlck1hbmFnZXIgPSBmaWx0ZXJNYW5hZ2VyO1xuXHRcdHRoaXMudW5pcXVlRmlsdGVyTWFuYWdlciA9IHVuaXF1ZUZpbHRlck1hbmFnZXI7XG5cdFx0dGhpcy5zZWFyY2hNYW5hZ2VyID0gc2VhcmNoTWFuYWdlcjtcblx0XHR0aGlzLmZpZWxkQ29sbGVjdGlvbiA9IGZpZWxkQ29sbGVjdGlvbjtcblxuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuZXZlbnRzXG5cdFx0KTtcblx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuZXZlbnRzID0gW107XG5cdH1cblxuXHRjcmVhdGVFdmVudCgpOiBBZ2dyZWdhdGVFdmVudFR5cGU8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cdFx0cmV0dXJuIFN0cnVjdHVyZUNyZWF0ZWRBZ2dyZWdhdGVFdmVudDtcblx0fVxuXG5cdG92ZXJyaWRlIGNsZWFyRXZlbnRzKCk6IHZvaWQge1xuXHRcdHN1cGVyLmNsZWFyRXZlbnRzKCk7XG5cdFx0dGhpcy5wYWdpbmdNYW5hZ2VyLmNsZWFyRXZlbnRzKCk7XG5cdH1cblxuXHRpbml0KCk6IHZvaWQge1xuXHRcdHRoaXMuaW5pdFRoZW1lKCk7XG5cdH1cblxuXHRzZXRWZXJ0aWNhbEZvcm1hdGlvbkVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb24uc2V0RW5hYmxlZChlbmFibGVkKTtcblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXHR9XG5cblx0Z2V0VmVydGljYWxGb3JtYXRpb24oKTogVmVydGljYWxGb3JtYXRpb24ge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uO1xuXHR9XG5cblx0c2V0U3VtbWFyaWVzRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdHRoaXMuc3VtbWFyaWVzTWFuYWdlci5zZXRFbmFibGVkKGVuYWJsZWQpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblxuXHRcdHJldHVybiB0aGlzLmdldEV2ZW50cygpO1xuXHR9XG5cblx0c2V0T3JpZ2luKGl0ZW1zOiBBcnJheTxhbnk+KTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2V0T3JpZ2luKGl0ZW1zLCB0aGlzLmdldElkKCkpXG5cdFx0KTtcblxuXHRcdC8vIGlmIChmYWxzZSkge1xuXHRcdFx0dGhpcy5jYWxjdWxhdGVVbmlxdWVWYWx1ZXMoKTtcblx0XHQvLyB9XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RXZlbnRzKCk7XG5cdH1cblxuXHRkZWxldGVJdGVtKHBheWxvYWQ6IG51bWJlciB8IEl0ZW1FbnRpdHlJZCB8IEFycmF5PG51bWJlcj4gfCBBcnJheTxJdGVtRW50aXR5SWQ+KTogdm9pZCB7XG5cdFx0dGhpcy5hZGRFdmVudChcblx0XHRcdHRoaXMuc291cmNlTWFuYWdlci5kZWxldGVPcmlnaW5JdGVtKHBheWxvYWQsIHRoaXMuZ2V0SWQoKSlcblx0XHQpO1xuXHRcdHRoaXMuZ2VuZXJhdGVTZWxlY3RlZFJvd0NoYW5nZWRFdmVudCgpO1xuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cdH1cblxuXHRlZGl0SXRlbShlZGl0UGFyYW1zOiBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcyk6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHRjb25zdCBpdGVtSWQgPSBlZGl0UGFyYW1zLmdldEl0ZW1JZCgpLFxuXHRcdFx0ZmllbGRJZCA9IGVkaXRQYXJhbXMuZ2V0Q29sdW1uRmllbGRJZCgpLFxuXHRcdFx0ZmllbGQgPSB0aGlzLmZpZWxkQ29sbGVjdGlvbi5nZXRGaWVsZChmaWVsZElkIGFzIGFueSksIC8vIGFzIEZpZWxkSWRcblx0XHRcdHZhbHVlID0gZWRpdFBhcmFtcy5nZXRWYWx1ZSgpO1xuXG5cdFx0Y29uc3QgZWRpdEl0ZW1FdmVudHMgPSB0aGlzLnNvdXJjZU1hbmFnZXIuZWRpdE9yaWdpbkl0ZW0oaXRlbUlkLCB2YWx1ZSwgZmllbGQsIHRoaXMuZ2V0SWQoKSk7XG5cblx0XHRlZGl0SXRlbUV2ZW50cy5mb3JFYWNoKChlKSA9PiB0aGlzLmFkZEV2ZW50KGUpKTtcblxuXHRcdC8vIFRPRE9cblx0XHR0aGlzLmNhbGN1bGF0ZVVuaXF1ZVZhbHVlcygpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblxuXHRcdHJldHVybiB0aGlzLmdldEV2ZW50cygpO1xuXHR9XG5cblx0c2V0SGVpZ2h0KGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG5cblx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLnNldFZpZXdwb3J0SGVpZ2h0KGhlaWdodCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZUJhc2VkT25WaXJ0dWFsU2Nyb2xsKCk7XG5cdH1cblxuXHRzZXRUaGVtZSh0aGVtZTogU2NoZW1hVGhlbWUpOiB2b2lkIHtcblxuXHRcdC8vICMxNzA3IE1vdmUgdG8gU2NoZW1lQWdncmVnYXRlXG5cdFx0aWYgKHRoZW1lID09PSBTY2hlbWFUaGVtZS5NQVRFUklBTCkge1xuXHRcdFx0dGhpcy5nZXRWZXJ0aWNhbEZvcm1hdGlvbigpLnNldFJvd0hlaWdodCg1Mik7XG5cdFx0fVxuXG5cdFx0aWYgKHRoZW1lID09PSBTY2hlbWFUaGVtZS5HRU5FUklDKSB7XG5cdFx0XHR0aGlzLmdldFZlcnRpY2FsRm9ybWF0aW9uKCkuc2V0Um93SGVpZ2h0KDQyKTtcblx0XHR9XG5cblx0XHRpZiAodGhlbWUgPT09IFNjaGVtYVRoZW1lLkZBQlJJQykge1xuXHRcdFx0dGhpcy5nZXRWZXJ0aWNhbEZvcm1hdGlvbigpLnNldFJvd0hlaWdodCgzNik7XG5cdFx0fVxuXG5cdFx0aWYgKHRoZW1lID09PSBTY2hlbWFUaGVtZS5MSUdIVCkge1xuXHRcdFx0dGhpcy5nZXRWZXJ0aWNhbEZvcm1hdGlvbigpLnNldFJvd0hlaWdodCg1Nik7XG5cdFx0fVxuXG5cdFx0aWYgKHRoZW1lID09PSBTY2hlbWFUaGVtZS5EQVJLKSB7XG5cdFx0XHR0aGlzLmdldFZlcnRpY2FsRm9ybWF0aW9uKCkuc2V0Um93SGVpZ2h0KDM4KTtcblx0XHR9XG5cdH1cblxuXHRzZXRTY3JvbGxQb3NpdGlvbihwb3NpdGlvbjogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbi5zZXRTY3JvbGxQb3NpdGlvbihwb3NpdGlvbik7XG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2VCYXNlZE9uVmlydHVhbFNjcm9sbCgpO1xuXHR9XG5cblx0c2Nyb2xsVG9JbmRleChpbmRleDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5hZGRFdmVudChcblx0XHRcdHRoaXMudmVydGljYWxGb3JtYXRpb24uc2Nyb2xsVG9JbmRleChpbmRleClcblx0XHQpO1xuXHR9XG5cblx0c2V0U2VsZWN0aW9uKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblxuXHRcdHRoaXMuc291cmNlTWFuYWdlci5nZXRGb3JtYXRpb24oKS5zZXRTZWxlY3Rpb24oZW5hYmxlZCk7XG5cblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0bmV3IFNlbGVjdGlvbkVuYWJsZWRTZXRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCksIGVuYWJsZWQpXG5cdFx0KTtcblx0fVxuXG5cdHNldFNlbGVjdGlvbk1vZGUobW9kZTogUm93U2VsZWN0aW9uTW9kZSk6IHZvaWQge1xuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0Rm9ybWF0aW9uKCkuc2V0TW9kZShtb2RlKVxuXHRcdCk7XG5cdH1cblxuXHRzZXRTZWxlY3Rpb25UeXBlKHR5cGU6IFJvd1NlbGVjdGlvblR5cGUpOiB2b2lkIHtcblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLmdldEZvcm1hdGlvbigpLnNldFR5cGUodHlwZSlcblx0XHQpO1xuXHR9XG5cblx0c2V0Rm9ybWF0aW9uTWF0Y2hlcihtYXRjaGVyOiAoaXRlbTogYW55KSA9PiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLmdldEZvcm1hdGlvbigpLnNldE1hdGNoZXIobWF0Y2hlcik7XG5cdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnJlU2VsZWN0KCk7XG5cdFx0dGhpcy5nZW5lcmF0ZVNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50KCk7XG5cdH1cblxuXHRzZWxlY3RCeUluZGV4KGluZGV4ZXM6IEFycmF5PG51bWJlcj4pOiB2b2lkIHtcblx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2VsZWN0QnlJbmRleChpbmRleGVzKTtcblx0XHR0aGlzLmdlbmVyYXRlU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQoKTtcblx0fVxuXG5cdHNlbGVjdEJ5SWRzKGlkczogQXJyYXk8c3RyaW5nPik6IHZvaWQge1xuXHRcdHRoaXMuc291cmNlTWFuYWdlci5zZWxlY3RCeUlkcyhpZHMpO1xuXHRcdHRoaXMuZ2VuZXJhdGVTZWxlY3RlZFJvd0NoYW5nZWRFdmVudCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqIERvZXNudCcgd29ya1xuXHQgKi9cblx0c2V0U2VsZWN0ZWRSb3dzKHNlbGVjdGVkUm93czogQXJyYXk8c3RyaW5nPik6IHZvaWQge1xuXHRcdHRoaXMuc291cmNlTWFuYWdlci5zZXRTZWxlY3RlZFJvd3Moc2VsZWN0ZWRSb3dzKTtcblx0XHR0aGlzLmdlbmVyYXRlU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQoKTtcblx0fVxuXG5cdHNldFNlbGVjdGlvbkN1c3RvbUNvbmZpZyhjb25maWc6IEZvcm1hdGlvbkN1c3RvbVNlbGVjdGlvbkNvbmZpZyk6IHZvaWQge1xuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2V0Q3VzdG9tQ29uZmlnKGNvbmZpZylcblx0XHQpO1xuXHR9XG5cblx0dG9nZ2xlUm93KHNlbGVjdGVkUm93OiBzdHJpbmcsIHR5cGU6IFJvd1NlbGVjdFRvZ2dsZVR5cGUpOiB2b2lkIHtcblxuXHRcdHRoaXMuc291cmNlTWFuYWdlci50b2dnbGVSb3coc2VsZWN0ZWRSb3csIHR5cGUpO1xuXG5cdFx0dGhpcy5nZW5lcmF0ZVNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50KCk7XG5cdH1cblxuXHRzZWxlY3RDdXN0b20oaWQ6IEZvcm1hdGlvbkN1c3RvbVNlbGVjdElkKTogdm9pZCB7XG5cdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnNlbGVjdEN1c3RvbShpZCk7XG5cdFx0dGhpcy5nZW5lcmF0ZVNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50KCk7XG5cdH1cblxuXHRzZWxlY3RBbGwoKTogdm9pZCB7XG5cdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnNlbGVjdEFsbCgpO1xuXHRcdHRoaXMuZ2VuZXJhdGVTZWxlY3RlZFJvd0NoYW5nZWRFdmVudCgpO1xuXHR9XG5cblx0dW5zZWxlY3RBbGwoKTogdm9pZCB7XG5cdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnVuc2VsZWN0QWxsKCk7XG5cdFx0dGhpcy5nZW5lcmF0ZVNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50KCk7XG5cdH1cblxuXHRnZXRGb3JtYXRpb24oKTogRm9ybWF0aW9uTWFuYWdlciB7XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlTWFuYWdlci5nZXRGb3JtYXRpb24oKTtcblx0fVxuXG5cdGdldFBhZ2luZygpOiBQYWdpbmdNYW5hZ2VyIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdpbmdNYW5hZ2VyO1xuXHR9XG5cblx0Y2hhbmdlUGFnaW5nKGNvbmZpZzogUGFnaW5nQ29uZmlnKSB7XG5cdFx0dGhpcy5wYWdpbmdNYW5hZ2VyLmNoYW5nZShjb25maWcpO1xuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cdH1cblxuXHRzZXRQYWdpbmcocGFnaW5nOiBQYWdpbmdNYW5hZ2VyKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdNYW5hZ2VyID0gcGFnaW5nO1xuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cdH1cblxuXHRuZXh0UGFnZSgpOiB2b2lkIHtcblxuXHRcdHRoaXMucGFnaW5nTWFuYWdlci5uZXh0UGFnZSgpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblx0fVxuXG5cdHByZXZQYWdlKCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nTWFuYWdlci5wcmV2UGFnZSgpO1xuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cdH1cblxuXHRjaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdGNvbnN0IHBhZ2luZ0V2ZW50cyA9IHRoaXMucGFnaW5nTWFuYWdlci5jaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZSk7XG5cblx0XHQvLyBUT0RPXG5cdFx0cGFnaW5nRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG5cdFx0XHR0aGlzLmFkZEV2ZW50KGV2ZW50KTtcblx0XHR9KTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5nZXRFdmVudHMoKTtcblx0fVxuXG5cdGdldEVudGl0aWVzKCk6IEFycmF5PEl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2VNYW5hZ2VyLmdldFNsaWNlZEVudGl0aWVzKCk7XG5cdH1cblxuXHRnZXRTb3VyY2UoKTogU291cmNlTWFuYWdlciB7XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlTWFuYWdlcjtcblx0fVxuXG5cdGNyZWF0ZUZpZWxkcyhmaWVsZENvbmZpZ3M6IEFycmF5PEZpZWxkQ29uZmlnPik6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHR0aGlzLmZpZWxkQ29sbGVjdGlvbi5pbml0RmllbGRzKGZpZWxkQ29uZmlncyk7XG5cblx0XHRjb25zdCBmaWVsZHMgPSB0aGlzLmZpZWxkQ29sbGVjdGlvbi5nZXRBbGxGaWVsZHMoKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHRuZXcgRmllbGRzSW5pdGVkQWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCBmaWVsZENvbmZpZ3MsIGZpZWxkcylcblx0XHQpO1xuXG5cdFx0dGhpcy5maWx0ZXJNYW5hZ2VyLmFzc2lnbkZpbHRlclR5cGVzKGZpZWxkcyk7XG5cblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0bmV3IEZpbHRlclR5cGVzSW5pdGVkQWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCB0aGlzLmZpbHRlck1hbmFnZXIuZ2V0RmlsdGVyVHlwZXMoKSlcblx0XHQpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RXZlbnRzKCk7XG5cdH1cblxuXHRzZXRTb3J0aW5nQ29uZmlnKGNvbmZpZzogU29ydGluZ0NvbmZpZyk6IHZvaWQge1xuXHRcdHRoaXMuc29ydGVyTWFuYWdlci5zZXRDb25maWcoY29uZmlnKTtcblx0fVxuXG5cdHRvZ2dsZVNvcnQoZmllbGRJZDogRmllbGRJZCk6IEFycmF5PFNvcnRlcj4ge1xuXG5cdFx0Y29uc3QgZmllbGQgPSB0aGlzLmZpZWxkQ29sbGVjdGlvbi5nZXRGaWVsZChmaWVsZElkKTtcblxuXHRcdHRoaXMuc29ydGVyTWFuYWdlci50b2dnbGUoZmllbGQpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblxuXHRcdHJldHVybiB0aGlzLnNvcnRlck1hbmFnZXIuZ2V0QWxsKCk7XG5cdH1cblxuXHRzZXRTb3J0T3JkZXIoZmllbGRJZDogRmllbGRJZCwgc29ydE9yZGVyOiBTb3J0T3JkZXIpOiBBcnJheTxTb3J0ZXI+IHtcblxuXHRcdGNvbnN0IGZpZWxkID0gdGhpcy5maWVsZENvbGxlY3Rpb24uZ2V0RmllbGQoZmllbGRJZCk7XG5cblx0XHR0aGlzLnNvcnRlck1hbmFnZXIuc2V0U29ydE9yZGVyKGZpZWxkLCBzb3J0T3JkZXIpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblxuXHRcdHJldHVybiB0aGlzLnNvcnRlck1hbmFnZXIuZ2V0QWxsKCk7XG5cdH1cblxuXHRzZXRGaWx0ZXJDb25maWcoY29uZmlnOiBGaWx0ZXJDb25maWcpOiB2b2lkIHtcblx0XHR0aGlzLmZpbHRlck1hbmFnZXIuZ2V0U2V0dGluZ3MoKS5zZXRGaWx0ZXJDb25maWcoY29uZmlnKTtcblx0fVxuXG5cdHNldFF1aWNrRmlsdGVyc0NvbmZpZyhjb25maWc6IFF1aWNrRmlsdGVyc0NvbmZpZyk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyTWFuYWdlci5nZXRTZXR0aW5ncygpLnNldFF1aWNrRmlsdGVyc0NvbmZpZyhjb25maWcpO1xuXHR9XG5cblx0dG9nZ2xlRmlsdGVyKGZpZWxkSWQ6IEZpZWxkSWQsIGV4dGVybmFsRmlsdGVySWQ6IHN0cmluZywgZmlsdGVyVmFsdWU6IHN0cmluZyk6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXG5cdFx0Y29uc3QgZmllbGQgPSB0aGlzLmZpZWxkQ29sbGVjdGlvbi5nZXRGaWVsZChmaWVsZElkKTtcblxuXHRcdC8vIEZpZWxkIG5vdCBmb3VuZFxuXHRcdC8vIFRPRE8gdGhyb3cgYWdncmVnYXRlIGV2ZW50XG5cdFx0aWYgKGZpZWxkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cblx0XHQvLyB0aGlzLmZpbHRlck1hbmFnZXIuYWRkRmlsdGVyKGZpZWxkLCBleHRlcm5hbEZpbHRlcklkLCBmaWx0ZXJWYWx1ZSk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0YWRkRmlsdGVyKGZpZWxkSWQ6IEZpZWxkSWQsIGZpbHRlclR5cGVJZDogRmlsdGVyVHlwZUlkLCB2YWx1ZTogYW55KTogdm9pZCB7XG5cblx0XHR0aGlzLmZpbHRlck1hbmFnZXIuYWRkKGZpZWxkSWQsIGZpbHRlclR5cGVJZCwgdmFsdWUpO1xuXG5cdFx0Y29uc3QgZmllbGRzID0gdGhpcy5maWVsZENvbGxlY3Rpb24uZ2V0RmllbGRzQXNNYXAoKTtcblxuXHRcdGNvbnN0IGFjdGl2ZUZpbHRlcnMgPSB0aGlzLmZpbHRlck1hbmFnZXIuZ2V0QWxsQWN0aXZlRmlsdGVycyhmaWVsZHMpO1xuXG5cdFx0dGhpcy5hZGRFdmVudChcblx0XHRcdG5ldyBGaWx0ZXJBZGRlZEFnZ3JlZ2F0ZUV2ZW50KFxuXHRcdFx0XHR0aGlzLmdldElkKCksXG5cdFx0XHRcdGFjdGl2ZUZpbHRlcnNcblx0XHRcdClcblx0XHQpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblx0fVxuXG5cdHJlbW92ZUFsbEZpbHRlcnMoKTogdm9pZCB7XG5cdFx0dGhpcy5maWx0ZXJNYW5hZ2VyLnJlbW92ZUFsbCgpO1xuXG5cdFx0dGhpcy5hZGRFdmVudChcblx0XHRcdG5ldyBBbGxGaWx0ZXJzUmVtb3ZlZEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSlcblx0XHQpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblx0fVxuXG5cdHJlbW92ZUZpbHRlcihmaWx0ZXJJZDogRmlsdGVySWQpOiB2b2lkIHtcblx0XHR0aGlzLmZpbHRlck1hbmFnZXIucmVtb3ZlKGZpbHRlcklkKTtcblxuXHRcdGNvbnN0IGZpZWxkcyA9IHRoaXMuZmllbGRDb2xsZWN0aW9uLmdldEZpZWxkc0FzTWFwKCk7XG5cdFx0Y29uc3QgYWN0aXZlRmlsdGVycyA9IHRoaXMuZmlsdGVyTWFuYWdlci5nZXRBbGxBY3RpdmVGaWx0ZXJzKGZpZWxkcyk7XG5cblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0bmV3IEZpbHRlclJlbW92ZWRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCksIGFjdGl2ZUZpbHRlcnMpXG5cdFx0KTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cdH1cblxuXHRzZXRTZWFyY2hpbmdDb25maWcoY29uZmlnOiBTZWFyY2hDb25maWcpOiB2b2lkIHtcblx0XHR0aGlzLmZpbHRlck1hbmFnZXIuZ2V0U2V0dGluZ3MoKS5zZXRTZWFyY2hpbmdDb25maWcoY29uZmlnKTtcblx0fVxuXG5cdGFkZFNlYXJjaFBocmFzZShwaHJhc2U6IHN0cmluZyk6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXG5cdFx0Y29uc3QgZmllbGRzID0gdGhpcy5maWVsZENvbGxlY3Rpb24uZ2V0QWxsRmllbGRzKCk7XG5cblx0XHR0aGlzLnNlYXJjaE1hbmFnZXIuYWRkU2VhcmNoUGhyYXNlKGZpZWxkcywgcGhyYXNlKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRyZW1vdmVTZWFyY2hQaHJhc2UoKTogQXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHR0aGlzLnNlYXJjaE1hbmFnZXIucmVtb3ZlU2VhcmNoRmlsdGVycygpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblxuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdHNlbGVjdEFsbFVuaXF1ZUZpbHRlcihmaWVsZElkOiBGaWVsZElkKTogdm9pZCB7XG5cblx0XHR0aGlzLnVuaXF1ZUZpbHRlck1hbmFnZXIuc2VsZWN0QWxsKGZpZWxkSWQpO1xuXG5cdFx0dGhpcy5hZGRFdmVudChcblx0XHRcdG5ldyBBbGxVbmlxdWVGaWx0ZXJTZWxlY3RlZEFnZ3JlZ2F0ZUV2ZW50KFxuXHRcdFx0XHR0aGlzLmdldElkKClcblx0XHRcdClcblx0XHQpO1xuXG5cdFx0dGhpcy5nZW5lcmF0ZUNhbGN1bGF0ZVVuaXF1ZVZhbHVlc0FnZ3JlZ2F0ZUV2ZW50KCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXHR9XG5cblx0c2VsZWN0VW5pcXVlRmlsdGVyKGZpZWxkSWQ6IEZpZWxkSWQsIHVuaXF1ZVZhbHVlSWQ6IFVuaXF1ZVZhbHVlSWQpOiB2b2lkIHtcblxuXHRcdHRoaXMudW5pcXVlRmlsdGVyTWFuYWdlci5zZWxlY3QoZmllbGRJZCwgdW5pcXVlVmFsdWVJZCk7XG5cblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0bmV3IFVuaXF1ZUZpbHRlclNlbGVjdGVkQWdncmVnYXRlRXZlbnQoXG5cdFx0XHRcdHRoaXMuZ2V0SWQoKVxuXHRcdFx0KVxuXHRcdCk7XG5cblx0XHR0aGlzLmdlbmVyYXRlQ2FsY3VsYXRlVW5pcXVlVmFsdWVzQWdncmVnYXRlRXZlbnQoKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cdH1cblxuXHR1bnNlbGVjdEFsbFVuaXF1ZUZpbHRlcihmaWVsZElkOiBGaWVsZElkKTogdm9pZCB7XG5cblx0XHR0aGlzLnVuaXF1ZUZpbHRlck1hbmFnZXIudW5zZWxlY3RBbGwoZmllbGRJZCk7XG5cblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0bmV3IEFsbFVuaXF1ZUZpbHRlclVuc2VsZWN0ZWRBZ2dyZWdhdGVFdmVudChcblx0XHRcdFx0dGhpcy5nZXRJZCgpXG5cdFx0XHQpXG5cdFx0KTtcblxuXHRcdHRoaXMuZ2VuZXJhdGVDYWxjdWxhdGVVbmlxdWVWYWx1ZXNBZ2dyZWdhdGVFdmVudCgpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblx0fVxuXG5cdHVuc2VsZWN0VW5pcXVlRmlsdGVyKGZpZWxkSWQ6IEZpZWxkSWQsIHVuaXF1ZVZhbHVlSWQ6IFVuaXF1ZVZhbHVlSWQpOiB2b2lkIHtcblxuXHRcdHRoaXMudW5pcXVlRmlsdGVyTWFuYWdlci51bnNlbGVjdChmaWVsZElkLCB1bmlxdWVWYWx1ZUlkKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHRuZXcgVW5pcXVlRmlsdGVyVW5zZWxlY3RlZEFnZ3JlZ2F0ZUV2ZW50KFxuXHRcdFx0XHR0aGlzLmdldElkKClcblx0XHRcdClcblx0XHQpO1xuXG5cdFx0dGhpcy5nZW5lcmF0ZUNhbGN1bGF0ZVVuaXF1ZVZhbHVlc0FnZ3JlZ2F0ZUV2ZW50KCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVTb3VyY2UoKTogdm9pZCB7XG5cblx0XHRpZiAoIXRoaXMuc291cmNlTWFuYWdlci5nZXRPcmlnaW4oKSB8fCAhdGhpcy5wYWdpbmdNYW5hZ2VyKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gVE9ETyBSZWZhY3RvclxuXHRcdHRoaXMuc291cmNlTWFuYWdlci5zZXRFbnRpdGllcyh0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0T3JpZ2luKCkpO1xuXG5cdFx0Ly8gZmlsdGVyaW5nXG5cdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnNldEVudGl0aWVzKFxuXHRcdFx0dGhpcy5maWx0ZXJNYW5hZ2VyLmZpbHRlcih0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0RW50aXRpZXMoKSwgdGhpcy5maWVsZENvbGxlY3Rpb24uZ2V0RmllbGRzQXNNYXAoKSlcblx0XHQpO1xuXG5cdFx0Ly8gc2VhcmNoXG5cdFx0Y29uc3Qgc2VhcmNoZWRFbnRpdGllcyA9IHRoaXMuc2VhcmNoTWFuYWdlci5zZWFyY2godGhpcy5zb3VyY2VNYW5hZ2VyLmdldEVudGl0aWVzKCkpO1xuXHRcdHRoaXMuc291cmNlTWFuYWdlci5zZXRFbnRpdGllcyhzZWFyY2hlZEVudGl0aWVzKTtcblxuXHRcdC8vIHVuaXF1ZSBmaWx0ZXJpbmdcblx0XHRpZiAodHJ1ZSkge1xuXHRcdFx0Ly8gdGhpcy5zb3VyY2VNYW5hZ2VyLnNldEVudGl0aWVzKFxuXHRcdFx0Ly8gXHR0aGlzLnVuaXF1ZUZpbHRlck1hbmFnZXIuZmlsdGVyQWxsKHRoaXMuc291cmNlTWFuYWdlci5nZXRFbnRpdGllcygpLCB0aGlzLmZpZWxkQ29sbGVjdGlvbi5nZXRBbGxGaWVsZHMoKSlcblx0XHRcdC8vICk7XG5cdFx0fVxuXG5cdFx0Ly8gc29ydGluZ1xuXHRcdGNvbnN0IGVudHMgPSB0aGlzLnNvcnRlck1hbmFnZXIuc29ydCh0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0RW50aXRpZXMoKSk7XG5cdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnNldEVudGl0aWVzKGVudHMpO1xuXG5cdFx0Ly8gY2FsY3VsYXRlIGZpbHRlcmVkRW50aXRpZXNcblx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2V0UHJlcGFyZWRFbnRpdGllcygpO1xuXG5cdFx0dGhpcy5wYWdpbmdNYW5hZ2VyLnNldFNvdXJjZVNpemUodGhpcy5zb3VyY2VNYW5hZ2VyLmdldFByZXBhcmVkRW50aXRpZXMoKS5sZW5ndGgpO1xuXG5cdFx0dGhpcy5hZGRFdmVudChuZXcgU3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSwgZW50cykpO1xuXG5cdFx0Ly8gc3VtbWFyaWVzXG5cdFx0Y29uc3Qgc3VtbWFyaWVzRXZlbnRzID0gdGhpcy5zdW1tYXJpZXNNYW5hZ2VyLmNhbGN1bGF0ZShcblx0XHRcdHRoaXMuZmllbGRDb2xsZWN0aW9uLmdldEFsbEZpZWxkcygpLFxuXHRcdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLmdldEVudGl0aWVzKClcblx0XHQpO1xuXG5cdFx0c3VtbWFyaWVzRXZlbnRzLmZvckVhY2goKGFlOiBBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4pID0+IHtcblx0XHRcdHRoaXMuYWRkRXZlbnQoYWUpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gcGFnaW5nXG5cdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnNldEVudGl0aWVzKHRoaXMucGFnaW5nTWFuYWdlci5zYW1wbGUodGhpcy5zb3VyY2VNYW5hZ2VyLmdldEVudGl0aWVzKCkpKTtcblxuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb24uc2V0U291cmNlU2l6ZSh0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0RW50aXRpZXMoKS5sZW5ndGgpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2VCYXNlZE9uVmlydHVhbFNjcm9sbCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVTb3VyY2VCYXNlZE9uVmlydHVhbFNjcm9sbCgpOiB2b2lkIHtcblxuXHRcdGlmICh0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLmlzRW5hYmxlZCgpKSB7XG5cblx0XHRcdGNvbnN0IHJhbmdlID0gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvbi5nZXRSYW5nZSgpO1xuXG5cdFx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2V0U2xpY2VkRW50aXRpZXMoXG5cdFx0XHRcdHRoaXMuc291cmNlTWFuYWdlci5nZXRFbnRpdGllcygpLnNsaWNlKHJhbmdlLmdldFN0YXJ0KCksIHJhbmdlLmdldEVuZCgpKVxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnNldFNsaWNlZEVudGl0aWVzKFxuXHRcdFx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0RW50aXRpZXMoKVxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGluaXRUaGVtZSgpIHtcblxuXHRcdC8vIFRPRE9cblx0XHRjb25zdCB0aGVtZSA9IFNjaGVtYUFnZ3JlZ2F0ZS5ERUZBVUxUX1RIRU1FO1xuXG5cdFx0dGhpcy5zZXRUaGVtZSh0aGVtZSk7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZVVuaXF1ZVZhbHVlcygpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGZpZWxkcyA9IHRoaXMuZmllbGRDb2xsZWN0aW9uLmdldEFsbEZpZWxkcygpLFxuXHRcdFx0aXRlbXMgPSB0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0T3JpZ2luKCk7XG5cblx0XHR0aGlzLnVuaXF1ZUZpbHRlck1hbmFnZXIuY2FsY3VsYXRlQWxsKGl0ZW1zLCBmaWVsZHMpO1xuXG5cdFx0dGhpcy5nZW5lcmF0ZUNhbGN1bGF0ZVVuaXF1ZVZhbHVlc0FnZ3JlZ2F0ZUV2ZW50KCk7XG5cdH1cblxuXHRwcml2YXRlIGdlbmVyYXRlQ2FsY3VsYXRlVW5pcXVlVmFsdWVzQWdncmVnYXRlRXZlbnQoKTogdm9pZCB7XG5cdFx0dGhpcy5hZGRFdmVudChcblx0XHRcdG5ldyBVbmlxdWVGaWx0ZXJDYWxjdWxhdGVkQWdncmVnYXRlRXZlbnQoXG5cdFx0XHRcdHRoaXMuZ2V0SWQoKSxcblx0XHRcdFx0dGhpcy51bmlxdWVGaWx0ZXJNYW5hZ2VyLmdldEFsbChcblx0XHRcdFx0XHR0aGlzLmZpZWxkQ29sbGVjdGlvbi5nZXRBbGxGaWVsZHMoKVxuXHRcdFx0XHQpXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgZ2VuZXJhdGVTZWxlY3RlZFJvd0NoYW5nZWRFdmVudCgpIHtcblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0bmV3IFNlbGVjdGVkUm93Q2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50KFxuXHRcdFx0XHR0aGlzLmdldElkKCksXG5cdFx0XHRcdHRoaXMuc291cmNlTWFuYWdlci5nZXRGb3JtYXRpb24oKS5nZXRTZWxlY3RlZEl0ZW1JZHMoKS5tYXAoaSA9PiBpLnRvU3RyaW5nKCkpLFxuXHRcdFx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0Rm9ybWF0aW9uKCkuaXNBbGxTZWxlY3RlZCgpLFxuXHRcdFx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0Rm9ybWF0aW9uKCkuaXNBbGxVbnNlbGVjdGVkKClcblx0XHRcdClcblx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==