import { __decorate } from "tslib";
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
export class StructureAggregate extends AggregateRoot {
    constructor(structureId, pagingAggregate, sourceManager, verticalFormation, summariesManager, sorterCollection, filterManager, uniqueFilterManager, searchManager, fieldCollection) {
        super(structureId, structureKey);
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
        this.calculateUniqueValues();
        this.calculateSource();
        return this.getEvents();
    }
    deleteAllSelected() {
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
        // this.calculateUniqueValues();
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
        this.sourceManager.getFormation().setMode(mode);
        this.addEvent(new SelectionModeSetAggregateEvent(this.getId(), mode));
    }
    toggleRow(selectedRow, type) {
        this.sourceManager.toggleRow(selectedRow, type);
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
        this.sorterCollection.setConfig(config);
    }
    toggleSort(fieldId) {
        const field = this.fieldCollection.getField(fieldId);
        this.sorterCollection.toggle(field);
        this.calculateSource();
        return this.sorterCollection.getAll();
    }
    setSortOrder(fieldId, sortOrder) {
        const field = this.fieldCollection.getField(fieldId);
        this.sorterCollection.setSortOrder(field, sortOrder);
        this.calculateSource();
        return this.sorterCollection.getAll();
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
        // this.filterManager.a
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
        this.sourceManager.setEntities(this.uniqueFilterManager.filterAll(this.sourceManager.getEntities(), this.fieldCollection.getAllFields()));
        // sorting
        const ents = this.sorterCollection.sort(this.sourceManager.getEntities());
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
        this.addEvent(new SelectedRowChangedAggregateEvent(this.getId(), this.sourceManager.getFormation().getSelectedRows(), this.sourceManager.getFormation().isAllSelected(), this.sourceManager.getFormation().isAllUnselected()));
    }
}
__decorate([
    Override
], StructureAggregate.prototype, "clearEvents", null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvc3RydWN0dXJlL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBc0MsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFxQnZGLE9BQU8sRUFBRSwwQ0FBMEMsRUFBRSxNQUFNLG1GQUFtRixDQUFDO0FBRS9JLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDL0UsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFFdEcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzFELE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBQ3pILE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDhFQUE4RSxDQUFDO0FBRS9ILE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBRTNHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBRWxILE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLG9GQUFvRixDQUFDO0FBRTFJLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLCtFQUErRSxDQUFDO0FBQ25JLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLG1GQUFtRixDQUFDO0FBQ3pJLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLDJGQUEyRixDQUFDO0FBQ3BKLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLHVGQUF1RixD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QUUsRUFDWixJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUM5QixJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUNuQyxDQUNELENBQ0QsQ0FBQztJQUNILENBQUM7SUFFTywrQkFBK0I7UUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FDWixJQUFJLGdDQUFnQyxDQUNuQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQ1osSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUsRUFDbkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxhQUFhLEVBQUUsRUFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FDbkQsQ0FDRCxDQUFDO0lBQ0gsQ0FBQztDQUVEO0FBeGZBO0lBREMsUUFBUTtxREFJUiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBBZ2dyZWdhdGVFdmVudFR5cGUsIEFnZ3JlZ2F0ZVJvb3QgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBQYWdpbmdNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vcGFnaW5nL2NvcmUvZG9tYWluL3BhZ2luZy5tYW5hZ2VyJztcbmltcG9ydCB7IFNvdXJjZU1hbmFnZXIgfSBmcm9tICcuLi8uLi9zb3VyY2UvY29yZS9kb21haW4vY29yZS9zb3VyY2UubWFuYWdlcic7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbiB9IGZyb20gJy4uLy4uL3ZlcnRpY2FsLWZvcm1hdGlvbi9jb3JlL2RvbWFpbi92ZXJ0aWNhbC1mb3JtYXRpb24nO1xuaW1wb3J0IHsgU3VtbWFyaWVzTWFuYWdlciB9IGZyb20gJy4uLy4uL3N1bW1hcmllcy9jb3JlL2RvbWFpbi9zdW1tYXJpZXMubWFuYWdlcic7XG5pbXBvcnQgeyBTb3J0ZXJDb2xsZWN0aW9uIH0gZnJvbSAnLi4vLi4vc29ydGluZy9jb3JlL2RvbWFpbi9zb3J0ZXIuY29sbGVjdGlvbic7XG5pbXBvcnQgeyBGaWx0ZXJNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vZmlsdGVyL2NvcmUvZG9tYWluL2ZpbHRlci5tYW5hZ2VyJztcbmltcG9ydCB7IEZpZWxkQ29sbGVjdGlvbiB9IGZyb20gJy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkLWNvbGxlY3Rpb24nO1xuaW1wb3J0IHsgRm9ybWF0aW9uTWFuYWdlciB9IGZyb20gJy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9mb3JtYXRpb24vY29yZS9mb3JtYXRpb24tbWFuYWdlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1QYXJhbXMgfSBmcm9tICcuLi8uLi9zb3VyY2UvY29yZS9kb21haW4vb3JpZ2luL2VkaXQvc3RydWN0dXJlLmVkaXQtc291cmNlLWl0ZW0ucGFyYW1zJztcbmltcG9ydCB7IFBhZ2luZ0NvbmZpZyB9IGZyb20gJy4uLy4uL3BhZ2luZy9jb3JlL2FwaS9wYWdpbmctY29uZmlnJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi9zb3VyY2UvY29yZS9kb21haW4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBTb3J0aW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vc29ydGluZy9jb3JlL2FwaS9zb3J0aW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU29ydGVyIH0gZnJvbSAnLi4vLi4vc29ydGluZy9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuc29ydGVyJztcbmltcG9ydCB7IEZpbHRlckNvbmZpZyB9IGZyb20gJy4uLy4uL2ZpbHRlci9jb3JlL2FwaS9maWx0ZXIuY29uZmlnJztcbmltcG9ydCB7IFF1aWNrRmlsdGVyc0NvbmZpZyB9IGZyb20gJy4uLy4uL2ZpbHRlci9jb3JlL2FwaS9xdWljay1maWx0ZXIvcXVpY2stZmlsdGVycy5jb25maWcnO1xuaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vLi4vc2VhcmNoL2NvcmUvYXBpL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHsgU2VhcmNoTWFuYWdlciB9IGZyb20gJy4uLy4uL3NlYXJjaC9jb3JlL2RvbWFpbi9zZWFyY2gubWFuYWdlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi9zb3VyY2UvY29yZS9kb21haW4vcHJlcGFyZWQvc3RydWN0dXJlLnByZXBhcmVkLWVudGl0aWVzLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4vY29sdW1uL3NvcnQvc29ydC1vcmRlcic7XG5pbXBvcnQgeyBGaWVsZHNJbml0ZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2luaXQvZmllbGRzLWluaXRlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvdGhlbWUvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uL3NjaGVtYS9jb3JlL2RvbWFpbi9zY2hlbWEuYWdncmVnYXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNyZWF0ZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vY3JlYXRlLXN0cnVjdHVyZS9zdHJ1Y3R1cmUtY3JlYXRlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tICcuLi8uLi9maWVsZC9jb3JlL2FwaS9maWVsZC5jb25maWcnO1xuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZXNJbml0ZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uLy4uL2ZpbHRlci9jb3JlL2RvbWFpbi90eXBlL2luaXQvZmlsdGVyLXR5cGVzLWluaXRlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgQWxsRmlsdGVyc1JlbW92ZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uLy4uL2ZpbHRlci9jb3JlL2RvbWFpbi9jb3JlL3JlbW92ZS1hbGwvYWxsLWZpbHRlcnMtcmVtb3ZlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUlkIH0gZnJvbSAnLi4vLi4vZmlsdGVyL2NvcmUvZG9tYWluL3R5cGUvZmlsdGVyLXR5cGUuaWQnO1xuaW1wb3J0IHsgRmlsdGVyQWRkZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uLy4uL2ZpbHRlci9jb3JlL2RvbWFpbi9jb3JlL2FkZC9maWx0ZXItYWRkZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IEZpbHRlcklkIH0gZnJvbSAnLi4vLi4vZmlsdGVyL2NvcmUvYXBpL2ZpbHRlci5pZCc7XG5pbXBvcnQgeyBGaWx0ZXJSZW1vdmVkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi9maWx0ZXIvY29yZS9kb21haW4vY29yZS9yZW1vdmUvZmlsdGVyLXJlbW92ZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IFVuaXF1ZUZpbHRlck1hbmFnZXIgfSBmcm9tICcuLi8uLi9maWx0ZXIvY29yZS9kb21haW4vdW5pcXVlL3VuaXF1ZS1maWx0ZXItbWFuYWdlcic7XG5pbXBvcnQgeyBVbmlxdWVGaWx0ZXJDYWxjdWxhdGVkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi9maWx0ZXIvY29yZS9kb21haW4vdW5pcXVlL2NhbGN1bGF0ZS91bmlxdWUtZmlsdGVyLWNhbGN1bGF0ZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlSWQgfSBmcm9tICcuLi8uLi9maWx0ZXIvY29yZS9kb21haW4vdW5pcXVlL3VuaXF1ZS12YWx1ZS1pZCc7XG5pbXBvcnQgeyBVbmlxdWVGaWx0ZXJTZWxlY3RlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vLi4vZmlsdGVyL2NvcmUvZG9tYWluL3VuaXF1ZS9zZWxlY3QvdW5pcXVlLWZpbHRlci1zZWxlY3RlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgVW5pcXVlRmlsdGVyVW5zZWxlY3RlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vLi4vZmlsdGVyL2NvcmUvZG9tYWluL3VuaXF1ZS91bnNlbGVjdC91bmlxdWUtZmlsdGVyLXVuc2VsZWN0ZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IEFsbFVuaXF1ZUZpbHRlclVuc2VsZWN0ZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uLy4uL2ZpbHRlci9jb3JlL2RvbWFpbi91bmlxdWUvdW5zZWxlY3QtYWxsL2FsbC11bmlxdWUtZmlsdGVyLXVuc2VsZWN0ZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IEFsbFVuaXF1ZUZpbHRlclNlbGVjdGVkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi9maWx0ZXIvY29yZS9kb21haW4vdW5pcXVlL3NlbGVjdC1hbGwvYWxsLXVuaXF1ZS1maWx0ZXItc2VsZWN0ZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IFNlbGVjdGVkUm93Q2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL2Zvcm1hdGlvbi9zZWxlY3RlZC1yb3ctY2hhbmdlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgUm93U2VsZWN0VG9nZ2xlVHlwZSB9IGZyb20gJy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9mb3JtYXRpb24vY29yZS9yb3ctc2VsZWN0LXRvZ2dsZS10eXBlJztcbmltcG9ydCB7IFNlbGVjdGlvbkVuYWJsZWRTZXRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9mb3JtYXRpb24vc2V0LWVuYWJsZWQvc2VsZWN0aW9uLWVuYWJsZWQtc2V0LmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25Nb2RlIH0gZnJvbSAnLi4vLi4vc291cmNlL2NvcmUvYXBpL3Jvdy1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgU2VsZWN0aW9uTW9kZVNldEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL2Zvcm1hdGlvbi9tb2RlL3NlbGVjdGlvbi1tb2RlLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgT3JpZ2luSWQgfSBmcm9tICcuLi8uLi9zb3VyY2UvY29yZS9kb21haW4vb3JpZ2luL29yaWdpbi1pZCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVLZXkgfSBmcm9tICcuLi9hcGkvc3RydWN0cmUua2V5JztcblxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQWdncmVnYXRlIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxTdHJ1Y3R1cmVJZD4ge1xuXG5cdHByaXZhdGUgcGFnaW5nTWFuYWdlcjogUGFnaW5nTWFuYWdlcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZU1hbmFnZXI6IFNvdXJjZU1hbmFnZXI7XG5cblx0cHJpdmF0ZSBzb3J0ZXJDb2xsZWN0aW9uOiBTb3J0ZXJDb2xsZWN0aW9uO1xuXG5cdHByaXZhdGUgZmlsdGVyTWFuYWdlcjogRmlsdGVyTWFuYWdlcjtcblxuXHRwcml2YXRlIHNlYXJjaE1hbmFnZXI6IFNlYXJjaE1hbmFnZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSB2ZXJ0aWNhbEZvcm1hdGlvbjogVmVydGljYWxGb3JtYXRpb247XG5cblx0cHJpdmF0ZSBmaWVsZENvbGxlY3Rpb246IEZpZWxkQ29sbGVjdGlvbjtcblxuXHRwcml2YXRlIHN1bW1hcmllc01hbmFnZXI6IFN1bW1hcmllc01hbmFnZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSB1bmlxdWVGaWx0ZXJNYW5hZ2VyOiBVbmlxdWVGaWx0ZXJNYW5hZ2VyO1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cGFnaW5nQWdncmVnYXRlOiBQYWdpbmdNYW5hZ2VyLFxuXHRcdFx0XHRzb3VyY2VNYW5hZ2VyOiBTb3VyY2VNYW5hZ2VyLFxuXHRcdFx0XHR2ZXJ0aWNhbEZvcm1hdGlvbjogVmVydGljYWxGb3JtYXRpb24sXG5cdFx0XHRcdHN1bW1hcmllc01hbmFnZXI6IFN1bW1hcmllc01hbmFnZXIsXG5cdFx0XHRcdHNvcnRlckNvbGxlY3Rpb246IFNvcnRlckNvbGxlY3Rpb24sXG5cdFx0XHRcdGZpbHRlck1hbmFnZXI6IEZpbHRlck1hbmFnZXIsXG5cdFx0XHRcdHVuaXF1ZUZpbHRlck1hbmFnZXI6IFVuaXF1ZUZpbHRlck1hbmFnZXIsXG5cdFx0XHRcdHNlYXJjaE1hbmFnZXI6IFNlYXJjaE1hbmFnZXIsXG5cdFx0XHRcdGZpZWxkQ29sbGVjdGlvbjogRmllbGRDb2xsZWN0aW9uKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsIHN0cnVjdHVyZUtleSk7XG5cdFx0dGhpcy5wYWdpbmdNYW5hZ2VyID0gcGFnaW5nQWdncmVnYXRlO1xuXHRcdHRoaXMuc291cmNlTWFuYWdlciA9IHNvdXJjZU1hbmFnZXI7XG5cdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbiA9IHZlcnRpY2FsRm9ybWF0aW9uO1xuXHRcdHRoaXMuc3VtbWFyaWVzTWFuYWdlciA9IHN1bW1hcmllc01hbmFnZXI7XG5cdFx0dGhpcy5zb3J0ZXJDb2xsZWN0aW9uID0gc29ydGVyQ29sbGVjdGlvbjtcblx0XHR0aGlzLmZpbHRlck1hbmFnZXIgPSBmaWx0ZXJNYW5hZ2VyO1xuXHRcdHRoaXMudW5pcXVlRmlsdGVyTWFuYWdlciA9IHVuaXF1ZUZpbHRlck1hbmFnZXI7XG5cdFx0dGhpcy5zZWFyY2hNYW5hZ2VyID0gc2VhcmNoTWFuYWdlcjtcblx0XHR0aGlzLmZpZWxkQ29sbGVjdGlvbiA9IGZpZWxkQ29sbGVjdGlvbjtcblx0fVxuXG5cdGNyZWF0ZUV2ZW50KCk6IEFnZ3JlZ2F0ZUV2ZW50VHlwZTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblx0XHRyZXR1cm4gU3RydWN0dXJlQ3JlYXRlZEFnZ3JlZ2F0ZUV2ZW50O1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdGNsZWFyRXZlbnRzKCk6IHZvaWQge1xuXHRcdHN1cGVyLmNsZWFyRXZlbnRzKCk7XG5cdFx0dGhpcy5wYWdpbmdNYW5hZ2VyLmNsZWFyRXZlbnRzKCk7XG5cdH1cblxuXHRpbml0KCk6IHZvaWQge1xuXHRcdHRoaXMuaW5pdFRoZW1lKCk7XG5cdH1cblxuXHRzZXRWZXJ0aWNhbEZvcm1hdGlvbkVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb24uc2V0RW5hYmxlZChlbmFibGVkKTtcblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXHR9XG5cblx0Z2V0VmVydGljYWxGb3JtYXRpb24oKTogVmVydGljYWxGb3JtYXRpb24ge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uO1xuXHR9XG5cblx0c2V0U3VtbWFyaWVzRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdHRoaXMuc3VtbWFyaWVzTWFuYWdlci5zZXRFbmFibGVkKGVuYWJsZWQpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblxuXHRcdHJldHVybiB0aGlzLmdldEV2ZW50cygpO1xuXHR9XG5cblx0c2V0T3JpZ2luKGl0ZW1zOiBBcnJheTxhbnk+KTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2V0T3JpZ2luKGl0ZW1zLCB0aGlzLmdldElkKCkpXG5cdFx0KTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlVW5pcXVlVmFsdWVzKCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RXZlbnRzKCk7XG5cdH1cblxuXHRkZWxldGVBbGxTZWxlY3RlZCgpOiB2b2lkIHtcblxuXHR9XG5cblx0ZGVsZXRlSXRlbShwYXlsb2FkOiBudW1iZXIgfCBPcmlnaW5JZCB8IEFycmF5PG51bWJlcj4gfCBBcnJheTxPcmlnaW5JZD4pOiB2b2lkIHtcblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLmRlbGV0ZU9yaWdpbkl0ZW0ocGF5bG9hZCwgdGhpcy5nZXRJZCgpKVxuXHRcdCk7XG5cdFx0dGhpcy5nZW5lcmF0ZVNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50KCk7XG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblx0fVxuXG5cdGVkaXRJdGVtKGVkaXRQYXJhbXM6IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zKTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdGNvbnN0IGl0ZW1JZCA9IGVkaXRQYXJhbXMuZ2V0SXRlbUlkKCksXG5cdFx0XHRmaWVsZElkID0gZWRpdFBhcmFtcy5nZXRDb2x1bW5GaWVsZElkKCksXG5cdFx0XHRmaWVsZCA9IHRoaXMuZmllbGRDb2xsZWN0aW9uLmdldEZpZWxkKGZpZWxkSWQgYXMgYW55KSwgLy8gYXMgRmllbGRJZFxuXHRcdFx0dmFsdWUgPSBlZGl0UGFyYW1zLmdldFZhbHVlKCk7XG5cblx0XHRjb25zdCBlZGl0SXRlbUV2ZW50cyA9IHRoaXMuc291cmNlTWFuYWdlci5lZGl0T3JpZ2luSXRlbShpdGVtSWQsIHZhbHVlLCBmaWVsZCwgdGhpcy5nZXRJZCgpKTtcblxuXHRcdGVkaXRJdGVtRXZlbnRzLmZvckVhY2goKGUpID0+IHRoaXMuYWRkRXZlbnQoZSkpO1xuXG5cdFx0Ly8gVE9ET1xuXHRcdC8vIHRoaXMuY2FsY3VsYXRlVW5pcXVlVmFsdWVzKCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RXZlbnRzKCk7XG5cdH1cblxuXHRzZXRIZWlnaHQoaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcblxuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb24uc2V0Vmlld3BvcnRIZWlnaHQoaGVpZ2h0KTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlQmFzZWRPblZpcnR1YWxTY3JvbGwoKTtcblx0fVxuXG5cdHNldFRoZW1lKHRoZW1lOiBTY2hlbWFUaGVtZSk6IHZvaWQge1xuXG5cdFx0Ly8gIzE3MDcgTW92ZSB0byBTY2hlbWVBZ2dyZWdhdGVcblx0XHRpZiAodGhlbWUgPT09IFNjaGVtYVRoZW1lLk1BVEVSSUFMKSB7XG5cdFx0XHR0aGlzLmdldFZlcnRpY2FsRm9ybWF0aW9uKCkuc2V0Um93SGVpZ2h0KDUyKTtcblx0XHR9XG5cblx0XHRpZiAodGhlbWUgPT09IFNjaGVtYVRoZW1lLkdFTkVSSUMpIHtcblx0XHRcdHRoaXMuZ2V0VmVydGljYWxGb3JtYXRpb24oKS5zZXRSb3dIZWlnaHQoNDIpO1xuXHRcdH1cblxuXHRcdGlmICh0aGVtZSA9PT0gU2NoZW1hVGhlbWUuRkFCUklDKSB7XG5cdFx0XHR0aGlzLmdldFZlcnRpY2FsRm9ybWF0aW9uKCkuc2V0Um93SGVpZ2h0KDM2KTtcblx0XHR9XG5cblx0XHRpZiAodGhlbWUgPT09IFNjaGVtYVRoZW1lLkxJR0hUKSB7XG5cdFx0XHR0aGlzLmdldFZlcnRpY2FsRm9ybWF0aW9uKCkuc2V0Um93SGVpZ2h0KDU2KTtcblx0XHR9XG5cblx0XHRpZiAodGhlbWUgPT09IFNjaGVtYVRoZW1lLkRBUkspIHtcblx0XHRcdHRoaXMuZ2V0VmVydGljYWxGb3JtYXRpb24oKS5zZXRSb3dIZWlnaHQoMzgpO1xuXHRcdH1cblx0fVxuXG5cdHNldFNjcm9sbFBvc2l0aW9uKHBvc2l0aW9uOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLnNldFNjcm9sbFBvc2l0aW9uKHBvc2l0aW9uKTtcblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZUJhc2VkT25WaXJ0dWFsU2Nyb2xsKCk7XG5cdH1cblxuXHRzY3JvbGxUb0luZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbi5zY3JvbGxUb0luZGV4KGluZGV4KVxuXHRcdCk7XG5cdH1cblxuXHRzZXRTZWxlY3Rpb24oZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXG5cdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLmdldEZvcm1hdGlvbigpLnNldFNlbGVjdGlvbihlbmFibGVkKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHRuZXcgU2VsZWN0aW9uRW5hYmxlZFNldEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSwgZW5hYmxlZClcblx0XHQpO1xuXHR9XG5cblx0c2V0U2VsZWN0aW9uTW9kZShtb2RlOiBSb3dTZWxlY3Rpb25Nb2RlKTogdm9pZCB7XG5cblx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0Rm9ybWF0aW9uKCkuc2V0TW9kZShtb2RlKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHRuZXcgU2VsZWN0aW9uTW9kZVNldEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSwgbW9kZSlcblx0XHQpO1xuXHR9XG5cblx0dG9nZ2xlUm93KHNlbGVjdGVkUm93OiBzdHJpbmcsIHR5cGU6IFJvd1NlbGVjdFRvZ2dsZVR5cGUpOiB2b2lkIHtcblxuXHRcdHRoaXMuc291cmNlTWFuYWdlci50b2dnbGVSb3coc2VsZWN0ZWRSb3csIHR5cGUpO1xuXG5cdFx0dGhpcy5nZW5lcmF0ZVNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50KCk7XG5cdH1cblxuXHRzZWxlY3RBbGwoKTogdm9pZCB7XG5cdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnNlbGVjdEFsbCgpO1xuXHRcdHRoaXMuZ2VuZXJhdGVTZWxlY3RlZFJvd0NoYW5nZWRFdmVudCgpO1xuXHR9XG5cblx0dW5zZWxlY3RBbGwoKTogdm9pZCB7XG5cdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnVuc2VsZWN0QWxsKCk7XG5cdFx0dGhpcy5nZW5lcmF0ZVNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50KCk7XG5cdH1cblxuXHRnZXRGb3JtYXRpb24oKTogRm9ybWF0aW9uTWFuYWdlciB7XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlTWFuYWdlci5nZXRGb3JtYXRpb24oKTtcblx0fVxuXG5cdGdldFBhZ2luZygpOiBQYWdpbmdNYW5hZ2VyIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdpbmdNYW5hZ2VyO1xuXHR9XG5cblx0Y2hhbmdlUGFnaW5nKGNvbmZpZzogUGFnaW5nQ29uZmlnKSB7XG5cdFx0dGhpcy5wYWdpbmdNYW5hZ2VyLmNoYW5nZShjb25maWcpO1xuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cdH1cblxuXHRzZXRQYWdpbmcocGFnaW5nOiBQYWdpbmdNYW5hZ2VyKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdNYW5hZ2VyID0gcGFnaW5nO1xuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cdH1cblxuXHRuZXh0UGFnZSgpOiB2b2lkIHtcblxuXHRcdHRoaXMucGFnaW5nTWFuYWdlci5uZXh0UGFnZSgpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblx0fVxuXG5cdHByZXZQYWdlKCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nTWFuYWdlci5wcmV2UGFnZSgpO1xuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cdH1cblxuXHRjaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdGNvbnN0IHBhZ2luZ0V2ZW50cyA9IHRoaXMucGFnaW5nTWFuYWdlci5jaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZSk7XG5cblx0XHQvLyBUT0RPXG5cdFx0cGFnaW5nRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG5cdFx0XHR0aGlzLmFkZEV2ZW50KGV2ZW50KTtcblx0XHR9KTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5nZXRFdmVudHMoKTtcblx0fVxuXG5cdGdldEVudGl0aWVzKCk6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2VNYW5hZ2VyLmdldFNsaWNlZEVudGl0aWVzKCk7XG5cdH1cblxuXHRnZXRTb3VyY2UoKTogU291cmNlTWFuYWdlciB7XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlTWFuYWdlcjtcblx0fVxuXG5cdGNyZWF0ZUZpZWxkcyhmaWVsZENvbmZpZ3M6IEFycmF5PEZpZWxkQ29uZmlnPik6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHR0aGlzLmZpZWxkQ29sbGVjdGlvbi5pbml0RmllbGRzKGZpZWxkQ29uZmlncyk7XG5cblx0XHRjb25zdCBmaWVsZHMgPSB0aGlzLmZpZWxkQ29sbGVjdGlvbi5nZXRBbGxGaWVsZHMoKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHRuZXcgRmllbGRzSW5pdGVkQWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCBmaWVsZENvbmZpZ3MsIGZpZWxkcylcblx0XHQpO1xuXG5cdFx0dGhpcy5maWx0ZXJNYW5hZ2VyLmFzc2lnbkZpbHRlclR5cGVzKGZpZWxkcyk7XG5cblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0bmV3IEZpbHRlclR5cGVzSW5pdGVkQWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCB0aGlzLmZpbHRlck1hbmFnZXIuZ2V0RmlsdGVyVHlwZXMoKSlcblx0XHQpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RXZlbnRzKCk7XG5cdH1cblxuXHRzZXRTb3J0aW5nQ29uZmlnKGNvbmZpZzogU29ydGluZ0NvbmZpZyk6IHZvaWQge1xuXHRcdHRoaXMuc29ydGVyQ29sbGVjdGlvbi5zZXRDb25maWcoY29uZmlnKTtcblx0fVxuXG5cdHRvZ2dsZVNvcnQoZmllbGRJZDogRmllbGRJZCk6IEFycmF5PFN0cnVjdHVyZVNvcnRlcj4ge1xuXG5cdFx0Y29uc3QgZmllbGQgPSB0aGlzLmZpZWxkQ29sbGVjdGlvbi5nZXRGaWVsZChmaWVsZElkKTtcblxuXHRcdHRoaXMuc29ydGVyQ29sbGVjdGlvbi50b2dnbGUoZmllbGQpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblxuXHRcdHJldHVybiB0aGlzLnNvcnRlckNvbGxlY3Rpb24uZ2V0QWxsKCk7XG5cdH1cblxuXHRzZXRTb3J0T3JkZXIoZmllbGRJZDogRmllbGRJZCwgc29ydE9yZGVyOiBTb3J0T3JkZXIpOiBBcnJheTxTdHJ1Y3R1cmVTb3J0ZXI+IHtcblxuXHRcdGNvbnN0IGZpZWxkID0gdGhpcy5maWVsZENvbGxlY3Rpb24uZ2V0RmllbGQoZmllbGRJZCk7XG5cblx0XHR0aGlzLnNvcnRlckNvbGxlY3Rpb24uc2V0U29ydE9yZGVyKGZpZWxkLCBzb3J0T3JkZXIpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblxuXHRcdHJldHVybiB0aGlzLnNvcnRlckNvbGxlY3Rpb24uZ2V0QWxsKCk7XG5cdH1cblxuXHRzZXRGaWx0ZXJDb25maWcoY29uZmlnOiBGaWx0ZXJDb25maWcpOiB2b2lkIHtcblx0XHR0aGlzLmZpbHRlck1hbmFnZXIuZ2V0U2V0dGluZ3MoKS5zZXRGaWx0ZXJDb25maWcoY29uZmlnKTtcblx0fVxuXG5cdHNldFF1aWNrRmlsdGVyc0NvbmZpZyhjb25maWc6IFF1aWNrRmlsdGVyc0NvbmZpZyk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyTWFuYWdlci5nZXRTZXR0aW5ncygpLnNldFF1aWNrRmlsdGVyc0NvbmZpZyhjb25maWcpO1xuXHR9XG5cblx0dG9nZ2xlRmlsdGVyKGZpZWxkSWQ6IEZpZWxkSWQsIGV4dGVybmFsRmlsdGVySWQ6IHN0cmluZywgZmlsdGVyVmFsdWU6IHN0cmluZyk6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXG5cdFx0Y29uc3QgZmllbGQgPSB0aGlzLmZpZWxkQ29sbGVjdGlvbi5nZXRGaWVsZChmaWVsZElkKTtcblxuXHRcdC8vIEZpZWxkIG5vdCBmb3VuZFxuXHRcdC8vIFRPRE8gdGhyb3cgYWdncmVnYXRlIGV2ZW50XG5cdFx0aWYgKGZpZWxkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cblx0XHQvLyB0aGlzLmZpbHRlck1hbmFnZXIuYWRkRmlsdGVyKGZpZWxkLCBleHRlcm5hbEZpbHRlcklkLCBmaWx0ZXJWYWx1ZSk7XG5cblx0XHQvLyB0aGlzLmZpbHRlck1hbmFnZXIuYVxuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblxuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdGFkZEZpbHRlcihmaWVsZElkOiBGaWVsZElkLCBmaWx0ZXJUeXBlSWQ6IEZpbHRlclR5cGVJZCwgdmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyTWFuYWdlci5hZGQoZmllbGRJZCwgZmlsdGVyVHlwZUlkLCB2YWx1ZSk7XG5cblx0XHRjb25zdCBmaWVsZHMgPSB0aGlzLmZpZWxkQ29sbGVjdGlvbi5nZXRGaWVsZHNBc01hcCgpO1xuXG5cdFx0Y29uc3QgYWN0aXZlRmlsdGVycyA9IHRoaXMuZmlsdGVyTWFuYWdlci5nZXRBbGxBY3RpdmVGaWx0ZXJzKGZpZWxkcyk7XG5cblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0bmV3IEZpbHRlckFkZGVkQWdncmVnYXRlRXZlbnQoXG5cdFx0XHRcdHRoaXMuZ2V0SWQoKSxcblx0XHRcdFx0YWN0aXZlRmlsdGVyc1xuXHRcdFx0KVxuXHRcdCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXHR9XG5cblx0cmVtb3ZlQWxsRmlsdGVycygpOiB2b2lkIHtcblx0XHR0aGlzLmZpbHRlck1hbmFnZXIucmVtb3ZlQWxsKCk7XG5cblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0bmV3IEFsbEZpbHRlcnNSZW1vdmVkQWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpKVxuXHRcdCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXHR9XG5cblx0cmVtb3ZlRmlsdGVyKGZpbHRlcklkOiBGaWx0ZXJJZCk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyTWFuYWdlci5yZW1vdmUoZmlsdGVySWQpO1xuXG5cdFx0Y29uc3QgZmllbGRzID0gdGhpcy5maWVsZENvbGxlY3Rpb24uZ2V0RmllbGRzQXNNYXAoKTtcblx0XHRjb25zdCBhY3RpdmVGaWx0ZXJzID0gdGhpcy5maWx0ZXJNYW5hZ2VyLmdldEFsbEFjdGl2ZUZpbHRlcnMoZmllbGRzKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHRuZXcgRmlsdGVyUmVtb3ZlZEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSwgYWN0aXZlRmlsdGVycylcblx0XHQpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblx0fVxuXG5cdHNldFNlYXJjaGluZ0NvbmZpZyhjb25maWc6IFNlYXJjaENvbmZpZyk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyTWFuYWdlci5nZXRTZXR0aW5ncygpLnNldFNlYXJjaGluZ0NvbmZpZyhjb25maWcpO1xuXHR9XG5cblx0YWRkU2VhcmNoUGhyYXNlKHBocmFzZTogc3RyaW5nKTogQXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHRjb25zdCBmaWVsZHMgPSB0aGlzLmZpZWxkQ29sbGVjdGlvbi5nZXRBbGxGaWVsZHMoKTtcblxuXHRcdHRoaXMuc2VhcmNoTWFuYWdlci5hZGRTZWFyY2hQaHJhc2UoZmllbGRzLCBwaHJhc2UpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblxuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdHJlbW92ZVNlYXJjaFBocmFzZSgpOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdHRoaXMuc2VhcmNoTWFuYWdlci5yZW1vdmVTZWFyY2hGaWx0ZXJzKCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0c2VsZWN0QWxsVW5pcXVlRmlsdGVyKGZpZWxkSWQ6IEZpZWxkSWQpOiB2b2lkIHtcblxuXHRcdHRoaXMudW5pcXVlRmlsdGVyTWFuYWdlci5zZWxlY3RBbGwoZmllbGRJZCk7XG5cblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0bmV3IEFsbFVuaXF1ZUZpbHRlclNlbGVjdGVkQWdncmVnYXRlRXZlbnQoXG5cdFx0XHRcdHRoaXMuZ2V0SWQoKVxuXHRcdFx0KVxuXHRcdCk7XG5cblx0XHR0aGlzLmdlbmVyYXRlQ2FsY3VsYXRlVW5pcXVlVmFsdWVzQWdncmVnYXRlRXZlbnQoKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cdH1cblxuXHRzZWxlY3RVbmlxdWVGaWx0ZXIoZmllbGRJZDogRmllbGRJZCwgdW5pcXVlVmFsdWVJZDogVW5pcXVlVmFsdWVJZCk6IHZvaWQge1xuXG5cdFx0dGhpcy51bmlxdWVGaWx0ZXJNYW5hZ2VyLnNlbGVjdChmaWVsZElkLCB1bmlxdWVWYWx1ZUlkKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHRuZXcgVW5pcXVlRmlsdGVyU2VsZWN0ZWRBZ2dyZWdhdGVFdmVudChcblx0XHRcdFx0dGhpcy5nZXRJZCgpXG5cdFx0XHQpXG5cdFx0KTtcblxuXHRcdHRoaXMuZ2VuZXJhdGVDYWxjdWxhdGVVbmlxdWVWYWx1ZXNBZ2dyZWdhdGVFdmVudCgpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblx0fVxuXG5cdHVuc2VsZWN0QWxsVW5pcXVlRmlsdGVyKGZpZWxkSWQ6IEZpZWxkSWQpOiB2b2lkIHtcblxuXHRcdHRoaXMudW5pcXVlRmlsdGVyTWFuYWdlci51bnNlbGVjdEFsbChmaWVsZElkKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHRuZXcgQWxsVW5pcXVlRmlsdGVyVW5zZWxlY3RlZEFnZ3JlZ2F0ZUV2ZW50KFxuXHRcdFx0XHR0aGlzLmdldElkKClcblx0XHRcdClcblx0XHQpO1xuXG5cdFx0dGhpcy5nZW5lcmF0ZUNhbGN1bGF0ZVVuaXF1ZVZhbHVlc0FnZ3JlZ2F0ZUV2ZW50KCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXHR9XG5cblx0dW5zZWxlY3RVbmlxdWVGaWx0ZXIoZmllbGRJZDogRmllbGRJZCwgdW5pcXVlVmFsdWVJZDogVW5pcXVlVmFsdWVJZCk6IHZvaWQge1xuXG5cdFx0dGhpcy51bmlxdWVGaWx0ZXJNYW5hZ2VyLnVuc2VsZWN0KGZpZWxkSWQsIHVuaXF1ZVZhbHVlSWQpO1xuXG5cdFx0dGhpcy5hZGRFdmVudChcblx0XHRcdG5ldyBVbmlxdWVGaWx0ZXJVbnNlbGVjdGVkQWdncmVnYXRlRXZlbnQoXG5cdFx0XHRcdHRoaXMuZ2V0SWQoKVxuXHRcdFx0KVxuXHRcdCk7XG5cblx0XHR0aGlzLmdlbmVyYXRlQ2FsY3VsYXRlVW5pcXVlVmFsdWVzQWdncmVnYXRlRXZlbnQoKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZVNvdXJjZSgpOiB2b2lkIHtcblxuXHRcdGlmICghdGhpcy5zb3VyY2VNYW5hZ2VyLmdldE9yaWdpbigpIHx8ICF0aGlzLnBhZ2luZ01hbmFnZXIpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBUT0RPIFJlZmFjdG9yXG5cdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnNldEVudGl0aWVzKHRoaXMuc291cmNlTWFuYWdlci5nZXRPcmlnaW4oKSk7XG5cblx0XHQvLyBmaWx0ZXJpbmdcblx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2V0RW50aXRpZXMoXG5cdFx0XHR0aGlzLmZpbHRlck1hbmFnZXIuZmlsdGVyKHRoaXMuc291cmNlTWFuYWdlci5nZXRFbnRpdGllcygpLCB0aGlzLmZpZWxkQ29sbGVjdGlvbi5nZXRGaWVsZHNBc01hcCgpKVxuXHRcdCk7XG5cblx0XHQvLyBzZWFyY2hcblx0XHRjb25zdCBzZWFyY2hlZEVudGl0aWVzID0gdGhpcy5zZWFyY2hNYW5hZ2VyLnNlYXJjaCh0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0RW50aXRpZXMoKSk7XG5cdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnNldEVudGl0aWVzKHNlYXJjaGVkRW50aXRpZXMpO1xuXG5cdFx0Ly8gdW5pcXVlIGZpbHRlcmluZ1xuXHRcdHRoaXMuc291cmNlTWFuYWdlci5zZXRFbnRpdGllcyhcblx0XHRcdHRoaXMudW5pcXVlRmlsdGVyTWFuYWdlci5maWx0ZXJBbGwodGhpcy5zb3VyY2VNYW5hZ2VyLmdldEVudGl0aWVzKCksIHRoaXMuZmllbGRDb2xsZWN0aW9uLmdldEFsbEZpZWxkcygpKVxuXHRcdCk7XG5cblx0XHQvLyBzb3J0aW5nXG5cdFx0Y29uc3QgZW50cyA9IHRoaXMuc29ydGVyQ29sbGVjdGlvbi5zb3J0KHRoaXMuc291cmNlTWFuYWdlci5nZXRFbnRpdGllcygpKTtcblx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2V0RW50aXRpZXMoZW50cyk7XG5cblx0XHQvLyBjYWxjdWxhdGUgZmlsdGVyZWRFbnRpdGllc1xuXHRcdHRoaXMuc291cmNlTWFuYWdlci5zZXRQcmVwYXJlZEVudGl0aWVzKCk7XG5cblx0XHR0aGlzLnBhZ2luZ01hbmFnZXIuc2V0U291cmNlU2l6ZSh0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0UHJlcGFyZWRFbnRpdGllcygpLmxlbmd0aCk7XG5cblx0XHR0aGlzLmFkZEV2ZW50KG5ldyBTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0QWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCBlbnRzKSk7XG5cblx0XHQvLyBzdW1tYXJpZXNcblx0XHRjb25zdCBzdW1tYXJpZXNFdmVudHMgPSB0aGlzLnN1bW1hcmllc01hbmFnZXIuY2FsY3VsYXRlKFxuXHRcdFx0dGhpcy5maWVsZENvbGxlY3Rpb24uZ2V0QWxsRmllbGRzKCksXG5cdFx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0RW50aXRpZXMoKVxuXHRcdCk7XG5cblx0XHRzdW1tYXJpZXNFdmVudHMuZm9yRWFjaCgoYWU6IEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPikgPT4ge1xuXHRcdFx0dGhpcy5hZGRFdmVudChhZSk7XG5cdFx0fSk7XG5cblx0XHQvLyBwYWdpbmdcblx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2V0RW50aXRpZXModGhpcy5wYWdpbmdNYW5hZ2VyLnNhbXBsZSh0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0RW50aXRpZXMoKSkpO1xuXG5cdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbi5zZXRTb3VyY2VTaXplKHRoaXMuc291cmNlTWFuYWdlci5nZXRFbnRpdGllcygpLmxlbmd0aCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZUJhc2VkT25WaXJ0dWFsU2Nyb2xsKCk7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZVNvdXJjZUJhc2VkT25WaXJ0dWFsU2Nyb2xsKCk6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMudmVydGljYWxGb3JtYXRpb24uaXNFbmFibGVkKCkpIHtcblxuXHRcdFx0Y29uc3QgcmFuZ2UgPSB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLmdldFJhbmdlKCk7XG5cblx0XHRcdHRoaXMuc291cmNlTWFuYWdlci5zZXRTbGljZWRFbnRpdGllcyhcblx0XHRcdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLmdldEVudGl0aWVzKCkuc2xpY2UocmFuZ2UuZ2V0U3RhcnQoKSwgcmFuZ2UuZ2V0RW5kKCkpXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2V0U2xpY2VkRW50aXRpZXMoXG5cdFx0XHRcdHRoaXMuc291cmNlTWFuYWdlci5nZXRFbnRpdGllcygpXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgaW5pdFRoZW1lKCkge1xuXG5cdFx0Ly8gVE9ET1xuXHRcdGNvbnN0IHRoZW1lID0gU2NoZW1hQWdncmVnYXRlLkRFRkFVTFRfVEhFTUU7XG5cblx0XHR0aGlzLnNldFRoZW1lKHRoZW1lKTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlVW5pcXVlVmFsdWVzKCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZmllbGRzID0gdGhpcy5maWVsZENvbGxlY3Rpb24uZ2V0QWxsRmllbGRzKCksXG5cdFx0XHRpdGVtcyA9IHRoaXMuc291cmNlTWFuYWdlci5nZXRPcmlnaW4oKTtcblxuXHRcdHRoaXMudW5pcXVlRmlsdGVyTWFuYWdlci5jYWxjdWxhdGVBbGwoaXRlbXMsIGZpZWxkcyk7XG5cblx0XHR0aGlzLmdlbmVyYXRlQ2FsY3VsYXRlVW5pcXVlVmFsdWVzQWdncmVnYXRlRXZlbnQoKTtcblx0fVxuXG5cdHByaXZhdGUgZ2VuZXJhdGVDYWxjdWxhdGVVbmlxdWVWYWx1ZXNBZ2dyZWdhdGVFdmVudCgpOiB2b2lkIHtcblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0bmV3IFVuaXF1ZUZpbHRlckNhbGN1bGF0ZWRBZ2dyZWdhdGVFdmVudChcblx0XHRcdFx0dGhpcy5nZXRJZCgpLFxuXHRcdFx0XHR0aGlzLnVuaXF1ZUZpbHRlck1hbmFnZXIuZ2V0QWxsKFxuXHRcdFx0XHRcdHRoaXMuZmllbGRDb2xsZWN0aW9uLmdldEFsbEZpZWxkcygpXG5cdFx0XHRcdClcblx0XHRcdClcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSBnZW5lcmF0ZVNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50KCkge1xuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHRuZXcgU2VsZWN0ZWRSb3dDaGFuZ2VkQWdncmVnYXRlRXZlbnQoXG5cdFx0XHRcdHRoaXMuZ2V0SWQoKSxcblx0XHRcdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLmdldEZvcm1hdGlvbigpLmdldFNlbGVjdGVkUm93cygpLFxuXHRcdFx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0Rm9ybWF0aW9uKCkuaXNBbGxTZWxlY3RlZCgpLFxuXHRcdFx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0Rm9ybWF0aW9uKCkuaXNBbGxVbnNlbGVjdGVkKClcblx0XHRcdClcblx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==