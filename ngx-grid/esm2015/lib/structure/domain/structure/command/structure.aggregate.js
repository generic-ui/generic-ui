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
let StructureAggregate = class StructureAggregate extends Aggregate {
    /**
     * @param {?} structureId
     * @param {?} pagingAggregate
     * @param {?} formationAggregate
     * @param {?} sourceManager
     * @param {?} verticalFormation
     * @param {?} aggregationManager
     * @param {?} sorterCollection
     * @param {?} filterCollection
     * @param {?} searchManager
     * @param {?} fieldCollection
     * @param {?} schema
     */
    constructor(structureId, pagingAggregate, formationAggregate, sourceManager, verticalFormation, aggregationManager, sorterCollection, filterCollection, searchManager, fieldCollection, schema) {
        super(structureId);
        this.pagingAggregate = pagingAggregate;
        this.formationAggregate = formationAggregate;
        this.sourceManager = sourceManager;
        this.verticalFormation = verticalFormation;
        this.aggregationManager = aggregationManager;
        this.sorterCollection = sorterCollection;
        this.filterManager = filterCollection;
        this.searchManager = searchManager;
        this.fieldCollection = fieldCollection;
        this.schema = schema;
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
    setAggregationEnabled(enabled) {
        this.aggregationManager.setEnabled(enabled);
        this.calculateSource();
        return this.getEvents();
    }
    /**
     * @param {?} items
     * @return {?}
     */
    setOrigin(items) {
        this.addEvent(this.sourceManager.setOrigin(items, this.getId()));
        this.calculateSource();
        return this.getEvents();
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
        this.calculateSource();
        return this.getEvents();
    }
    /**
     * @param {?} height
     * @return {?}
     */
    setHeight(height) {
        this.getSchema().setHeight(height);
        /** @type {?} */
        const viewportHeight = this.getSchema().getContainerHeight();
        this.verticalFormation.setViewportHeight(viewportHeight);
        this.calculateSourceBasedOnVirtualScroll();
    }
    /**
     * @param {?} formation
     * @return {?}
     */
    setFormation(formation) {
        this.formationAggregate = formation;
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
     * @return {?}
     */
    getFormation() {
        return this.formationAggregate;
    }
    /**
     * @param {?} schema
     * @return {?}
     */
    setSchema(schema) {
        this.schema = schema;
    }
    /**
     * @return {?}
     */
    getSchema() {
        return this.schema;
    }
    /**
     * @return {?}
     */
    getPaging() {
        return this.pagingAggregate;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    changePaging(config) {
        this.pagingAggregate.change(config);
        this.calculateSource();
    }
    /**
     * @param {?} paging
     * @return {?}
     */
    setPaging(paging) {
        this.pagingAggregate = paging;
        this.calculateSource();
    }
    /**
     * @return {?}
     */
    nextPage() {
        this.pagingAggregate.nextPage();
        this.calculateSource();
    }
    /**
     * @return {?}
     */
    prevPage() {
        this.pagingAggregate.prevPage();
        this.calculateSource();
    }
    /**
     * @param {?} pageSize
     * @return {?}
     */
    changePageSize(pageSize) {
        /** @type {?} */
        const pagingEvents = this.pagingAggregate.changePageSize(pageSize);
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
     * @param {?} columns
     * @return {?}
     */
    createFields(columns) {
        this.fieldCollection.initFields(columns);
        // TODO Should throw event fields created
        return this.fieldCollection.getAllFields();
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
    setSearchingConfig(config) {
        this.filterManager.getSettings().setSearchingConfig(config);
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
        this.filterManager.addFilter(field, externalFilterId, filterValue);
        this.calculateSource();
        return [];
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
     * @private
     * @return {?}
     */
    calculateSource() {
        if (!this.sourceManager.getOrigin() || !this.pagingAggregate) {
            return;
        }
        // TODO Refactor
        this.sourceManager.setEntities(this.sourceManager.getOrigin());
        // aggregations
        /** @type {?} */
        const aggregationEvents = this.aggregationManager.calculate(this.fieldCollection.getAllFields(), this.sourceManager.getEntities());
        aggregationEvents.forEach((/**
         * @param {?} ae
         * @return {?}
         */
        (ae) => {
            this.addEvent(ae);
        }));
        // filtering
        this.sourceManager.setEntities(this.filterManager.filter(this.sourceManager.getEntities()));
        // search
        /** @type {?} */
        const searchedEntities = this.searchManager.search(this.sourceManager.getEntities());
        this.sourceManager.setEntities(searchedEntities);
        // sorting
        /** @type {?} */
        const ents = this.sorterCollection.sort(this.sourceManager.getEntities());
        this.sourceManager.setEntities(ents);
        // calculate filteredEntities
        this.sourceManager.setPreparedEntities();
        this.pagingAggregate.setSourceSize(this.sourceManager.getPreparedEntities().length);
        this.addEvent(new StructurePreparedEntitiesSetAggregateEvent(this.getId(), ents));
        // paging
        this.sourceManager.setEntities(this.pagingAggregate.sample(this.sourceManager.getEntities()));
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
};
StructureAggregate.ctorParameters = () => [
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
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc3RydWN0dXJlLmFnZ3JlZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWtCLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTlFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNqRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBWWpELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsMENBQTBDLEVBQUUsTUFBTSwrRUFBK0UsQ0FBQztJQUc5SCxrQkFBa0IsU0FBbEIsa0JBQW1CLFNBQVEsU0FBUzs7Ozs7Ozs7Ozs7Ozs7SUFzQmhELFlBQVksV0FBd0IsRUFDakMsZUFBZ0MsRUFDaEMsa0JBQXNDLEVBQ3RDLGFBQTRCLEVBQzVCLGlCQUFvQyxFQUNwQyxrQkFBc0Ms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Z0RBQStDOzs7OztJQUUvQyxvQ0FBZ0M7Ozs7O0lBRWhDLDZDQUF5Qzs7Ozs7SUFFekMsMkNBQXFDOzs7OztJQUVyQyw4Q0FBMkM7Ozs7O0lBRTNDLDJDQUFxQzs7Ozs7SUFFckMsMkNBQXFDOzs7OztJQUVyQywrQ0FBNkM7Ozs7O0lBRTdDLDZDQUF5Qzs7Ozs7SUFFekMsZ0RBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlLCBBZ2dyZWdhdGVFdmVudCwgUm9vdEFnZ3JlZ2F0ZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFBhZ2luZ0FnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uL3BhZ2luZy9jb21tYW5kL3BhZ2luZy5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgU291cmNlTWFuYWdlciB9IGZyb20gJy4uLy4uL3NvdXJjZS9jb21tYW5kL3NvdXJjZS5tYW5hZ2VyJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uIH0gZnJvbSAnLi92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uJztcbmltcG9ydCB7IEFnZ3JlZ2F0aW9uTWFuYWdlciB9IGZyb20gJy4vYWdncmVnYXRpb24vYWdncmVnYXRpb24ubWFuYWdlcic7XG5pbXBvcnQgeyBTb3J0ZXJDb2xsZWN0aW9uIH0gZnJvbSAnLi9zb3J0L3NvcnRlci5jb2xsZWN0aW9uJztcbmltcG9ydCB7IEZpbHRlck1hbmFnZXIgfSBmcm9tICcuL2ZpbHRlci9maWx0ZXIubWFuYWdlcic7XG5pbXBvcnQgeyBGaWVsZENvbGxlY3Rpb24gfSBmcm9tICcuL2ZpZWxkL2ZpZWxkLmNvbGxlY3Rpb24nO1xuaW1wb3J0IHsgRm9ybWF0aW9uQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vZm9ybWF0aW9uL2NvbW1hbmQvZm9ybWF0aW9uLWFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBTY2hlbWFBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi9zY2hlbWEvY29tbWFuZC9zY2hlbWEtYWdncmVnYXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zIH0gZnJvbSAnLi4vLi4vc291cmNlL2NvbW1hbmQvb3JpZ2luL2VkaXQvc3RydWN0dXJlLmVkaXQtc291cmNlLWl0ZW0ucGFyYW1zJztcbmltcG9ydCB7IFBhZ2luZ0NvbmZpZyB9IGZyb20gJy4uLy4uL3BhZ2luZy9wYWdpbmctY29uZmlnJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi9zb3VyY2UvY29tbWFuZC9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IENvbHVtbkNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuL2ZpZWxkL2RhdGEtdHlwZS9maWVsZCc7XG5pbXBvcnQgeyBTb3J0aW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9zb3J0aW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi9maWVsZC9kYXRhLXR5cGUvZmllbGQuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU29ydGVyIH0gZnJvbSAnLi9zb3J0L3N0cnVjdHVyZS5zb3J0ZXInO1xuaW1wb3J0IHsgRmlsdGVyQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9maWx0ZXIvZmlsdGVyLWNvbmZpZyc7XG5pbXBvcnQgeyBRdWlja0ZpbHRlcnNDb25maWcgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlL2ZpbHRlci9xdWljay1maWx0ZXJzLmNvbmZpZyc7XG5pbXBvcnQgeyBTZWFyY2hDb25maWcgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlL3NlYXJjaC9zZWFyY2gtY29uZmlnJztcbmltcG9ydCB7IFNlYXJjaE1hbmFnZXIgfSBmcm9tICcuL3NlYXJjaC9zZWFyY2gubWFuYWdlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi9zb3VyY2UvY29tbWFuZC9wcmVwYXJlZC9zdHJ1Y3R1cmUucHJlcGFyZWQtZW50aXRpZXMtc2V0LmFnZ3JlZ2F0ZS1ldmVudCc7XG5cbkBSb290QWdncmVnYXRlXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQWdncmVnYXRlIGV4dGVuZHMgQWdncmVnYXRlIHtcblxuXHRwcml2YXRlIGZvcm1hdGlvbkFnZ3JlZ2F0ZTogRm9ybWF0aW9uQWdncmVnYXRlO1xuXG5cdHByaXZhdGUgc2NoZW1hOiBTY2hlbWFBZ2dyZWdhdGU7XG5cblx0cHJpdmF0ZSBwYWdpbmdBZ2dyZWdhdGU6IFBhZ2luZ0FnZ3JlZ2F0ZTtcblxuXHRwcml2YXRlIHNvdXJjZU1hbmFnZXI6IFNvdXJjZU1hbmFnZXI7XG5cblx0cHJpdmF0ZSBzb3J0ZXJDb2xsZWN0aW9uOiBTb3J0ZXJDb2xsZWN0aW9uO1xuXG5cdHByaXZhdGUgZmlsdGVyTWFuYWdlcjogRmlsdGVyTWFuYWdlcjtcblxuXHRwcml2YXRlIHNlYXJjaE1hbmFnZXI6IFNlYXJjaE1hbmFnZXI7XG5cblx0cHJpdmF0ZSB2ZXJ0aWNhbEZvcm1hdGlvbjogVmVydGljYWxGb3JtYXRpb247XG5cblx0cHJpdmF0ZSBmaWVsZENvbGxlY3Rpb246IEZpZWxkQ29sbGVjdGlvbjtcblxuXHRwcml2YXRlIGFnZ3JlZ2F0aW9uTWFuYWdlcjogQWdncmVnYXRpb25NYW5hZ2VyO1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cGFnaW5nQWdncmVnYXRlOiBQYWdpbmdBZ2dyZWdhdGUsXG5cdFx0XHRcdGZvcm1hdGlvbkFnZ3JlZ2F0ZTogRm9ybWF0aW9uQWdncmVnYXRlLFxuXHRcdFx0XHRzb3VyY2VNYW5hZ2VyOiBTb3VyY2VNYW5hZ2VyLFxuXHRcdFx0XHR2ZXJ0aWNhbEZvcm1hdGlvbjogVmVydGljYWxGb3JtYXRpb24sXG5cdFx0XHRcdGFnZ3JlZ2F0aW9uTWFuYWdlcjogQWdncmVnYXRpb25NYW5hZ2VyLFxuXHRcdFx0XHRzb3J0ZXJDb2xsZWN0aW9uOiBTb3J0ZXJDb2xsZWN0aW9uLFxuXHRcdFx0XHRmaWx0ZXJDb2xsZWN0aW9uOiBGaWx0ZXJNYW5hZ2VyLFxuXHRcdFx0XHRzZWFyY2hNYW5hZ2VyOiBTZWFyY2hNYW5hZ2VyLFxuXHRcdFx0XHRmaWVsZENvbGxlY3Rpb246IEZpZWxkQ29sbGVjdGlvbixcblx0XHRcdFx0c2NoZW1hOiBTY2hlbWFBZ2dyZWdhdGUpIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCk7XG5cdFx0dGhpcy5wYWdpbmdBZ2dyZWdhdGUgPSBwYWdpbmdBZ2dyZWdhdGU7XG5cdFx0dGhpcy5mb3JtYXRpb25BZ2dyZWdhdGUgPSBmb3JtYXRpb25BZ2dyZWdhdGU7XG5cdFx0dGhpcy5zb3VyY2VNYW5hZ2VyID0gc291cmNlTWFuYWdlcjtcblx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uID0gdmVydGljYWxGb3JtYXRpb247XG5cdFx0dGhpcy5hZ2dyZWdhdGlvbk1hbmFnZXIgPSBhZ2dyZWdhdGlvbk1hbmFnZXI7XG5cdFx0dGhpcy5zb3J0ZXJDb2xsZWN0aW9uID0gc29ydGVyQ29sbGVjdGlvbjtcblx0XHR0aGlzLmZpbHRlck1hbmFnZXIgPSBmaWx0ZXJDb2xsZWN0aW9uO1xuXHRcdHRoaXMuc2VhcmNoTWFuYWdlciA9IHNlYXJjaE1hbmFnZXI7XG5cdFx0dGhpcy5maWVsZENvbGxlY3Rpb24gPSBmaWVsZENvbGxlY3Rpb247XG5cdFx0dGhpcy5zY2hlbWEgPSBzY2hlbWE7XG5cdH1cblxuXHRnZXRWZXJ0aWNhbEZvcm1hdGlvbigpOiBWZXJ0aWNhbEZvcm1hdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxGb3JtYXRpb247XG5cdH1cblxuXHRzZXRBZ2dyZWdhdGlvbkVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ+IHtcblxuXHRcdHRoaXMuYWdncmVnYXRpb25NYW5hZ2VyLnNldEVuYWJsZWQoZW5hYmxlZCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RXZlbnRzKCk7XG5cdH1cblxuXHRzZXRPcmlnaW4oaXRlbXM6IEFycmF5PGFueT4pOiBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50PiB7XG5cblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnNldE9yaWdpbihpdGVtcywgdGhpcy5nZXRJZCgpKVxuXHRcdCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RXZlbnRzKCk7XG5cdH1cblxuXHRlZGl0SXRlbShlZGl0UGFyYW1zOiBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcyk6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ+IHtcblxuXHRcdGNvbnN0IGl0ZW1JZCA9IGVkaXRQYXJhbXMuZ2V0SXRlbUlkKCksXG5cdFx0XHRmaWVsZElkID0gZWRpdFBhcmFtcy5nZXRDb2x1bW5GaWVsZElkKCksXG5cdFx0XHRmaWVsZCA9IHRoaXMuZmllbGRDb2xsZWN0aW9uLmdldEZpZWxkKGZpZWxkSWQgYXMgYW55KSwgLy8gYXMgRmllbGRJZFxuXHRcdFx0dmFsdWUgPSBlZGl0UGFyYW1zLmdldFZhbHVlKCk7XG5cblx0XHRjb25zdCBlZGl0SXRlbUV2ZW50cyA9IHRoaXMuc291cmNlTWFuYWdlci5lZGl0T3JpZ2luSXRlbShpdGVtSWQsIHZhbHVlLCBmaWVsZCwgdGhpcy5nZXRJZCgpKTtcblxuXHRcdGVkaXRJdGVtRXZlbnRzLmZvckVhY2goKGUpID0+IHRoaXMuYWRkRXZlbnQoZSkpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblxuXHRcdHJldHVybiB0aGlzLmdldEV2ZW50cygpO1xuXHR9XG5cblx0c2V0SGVpZ2h0KGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5nZXRTY2hlbWEoKS5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuXHRcdGNvbnN0IHZpZXdwb3J0SGVpZ2h0ID0gdGhpcy5nZXRTY2hlbWEoKS5nZXRDb250YWluZXJIZWlnaHQoKTtcblxuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb24uc2V0Vmlld3BvcnRIZWlnaHQodmlld3BvcnRIZWlnaHQpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2VCYXNlZE9uVmlydHVhbFNjcm9sbCgpO1xuXHR9XG5cblx0c2V0Rm9ybWF0aW9uKGZvcm1hdGlvbjogRm9ybWF0aW9uQWdncmVnYXRlKTogdm9pZCB7XG5cdFx0dGhpcy5mb3JtYXRpb25BZ2dyZWdhdGUgPSBmb3JtYXRpb247XG5cdH1cblxuXHRzZXRTY3JvbGxQb3NpdGlvbihwb3NpdGlvbjogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbi5zZXRTY3JvbGxQb3NpdGlvbihwb3NpdGlvbik7XG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2VCYXNlZE9uVmlydHVhbFNjcm9sbCgpO1xuXHR9XG5cblx0Z2V0Rm9ybWF0aW9uKCk6IEZvcm1hdGlvbkFnZ3JlZ2F0ZSB7XG5cdFx0cmV0dXJuIHRoaXMuZm9ybWF0aW9uQWdncmVnYXRlO1xuXHR9XG5cblx0c2V0U2NoZW1hKHNjaGVtYTogU2NoZW1hQWdncmVnYXRlKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWEgPSBzY2hlbWE7XG5cdH1cblxuXHRnZXRTY2hlbWEoKTogU2NoZW1hQWdncmVnYXRlIHtcblx0XHRyZXR1cm4gdGhpcy5zY2hlbWE7XG5cdH1cblxuXHRnZXRQYWdpbmcoKTogUGFnaW5nQWdncmVnYXRlIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdpbmdBZ2dyZWdhdGU7XG5cdH1cblxuXHRjaGFuZ2VQYWdpbmcoY29uZmlnOiBQYWdpbmdDb25maWcpIHtcblx0XHR0aGlzLnBhZ2luZ0FnZ3JlZ2F0ZS5jaGFuZ2UoY29uZmlnKTtcblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXHR9XG5cblx0c2V0UGFnaW5nKHBhZ2luZzogUGFnaW5nQWdncmVnYXRlKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdBZ2dyZWdhdGUgPSBwYWdpbmc7XG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblx0fVxuXG5cdG5leHRQYWdlKCk6IHZvaWQge1xuXG5cdFx0dGhpcy5wYWdpbmdBZ2dyZWdhdGUubmV4dFBhZ2UoKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cdH1cblxuXHRwcmV2UGFnZSgpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0FnZ3JlZ2F0ZS5wcmV2UGFnZSgpO1xuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cdH1cblxuXHRjaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudD4ge1xuXG5cdFx0Y29uc3QgcGFnaW5nRXZlbnRzID0gdGhpcy5wYWdpbmdBZ2dyZWdhdGUuY2hhbmdlUGFnZVNpemUocGFnZVNpemUpO1xuXG5cdFx0Ly8gVE9ET1xuXHRcdHBhZ2luZ0V2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuXHRcdFx0dGhpcy5hZGRFdmVudChldmVudCk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RXZlbnRzKCk7XG5cdH1cblxuXHRnZXRFbnRpdGllcygpOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlTWFuYWdlci5nZXRTbGljZWRFbnRpdGllcygpO1xuXHR9XG5cblx0Z2V0U291cmNlKCk6IFNvdXJjZU1hbmFnZXIge1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZU1hbmFnZXI7XG5cdH1cblxuXHRjcmVhdGVGaWVsZHMoY29sdW1uczogQXJyYXk8Q29sdW1uQ29uZmlnPik6IEFycmF5PEZpZWxkPiB7XG5cdFx0dGhpcy5maWVsZENvbGxlY3Rpb24uaW5pdEZpZWxkcyhjb2x1bW5zKTtcblxuXHRcdC8vIFRPRE8gU2hvdWxkIHRocm93IGV2ZW50IGZpZWxkcyBjcmVhdGVkXG5cdFx0cmV0dXJuIHRoaXMuZmllbGRDb2xsZWN0aW9uLmdldEFsbEZpZWxkcygpO1xuXHR9XG5cblx0c2V0U29ydGluZ0NvbmZpZyhjb25maWc6IFNvcnRpbmdDb25maWcpOiB2b2lkIHtcblx0XHR0aGlzLnNvcnRlckNvbGxlY3Rpb24uc2V0Q29uZmlnKGNvbmZpZyk7XG5cdH1cblxuXHR0b2dnbGVTb3J0KGZpZWxkSWQ6IEZpZWxkSWQpOiBBcnJheTxTdHJ1Y3R1cmVTb3J0ZXI+IHtcblxuXHRcdGNvbnN0IGZpZWxkID0gdGhpcy5maWVsZENvbGxlY3Rpb24uZ2V0RmllbGQoZmllbGRJZCk7XG5cblx0XHR0aGlzLnNvcnRlckNvbGxlY3Rpb24udG9nZ2xlKGZpZWxkKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5zb3J0ZXJDb2xsZWN0aW9uLmdldEFsbCgpO1xuXHR9XG5cblx0c2V0RmlsdGVyQ29uZmlnKGNvbmZpZzogRmlsdGVyQ29uZmlnKTogdm9pZCB7XG5cdFx0dGhpcy5maWx0ZXJNYW5hZ2VyLmdldFNldHRpbmdzKCkuc2V0RmlsdGVyQ29uZmlnKGNvbmZpZyk7XG5cdH1cblxuXHRzZXRTZWFyY2hpbmdDb25maWcoY29uZmlnOiBTZWFyY2hDb25maWcpOiB2b2lkIHtcblx0XHR0aGlzLmZpbHRlck1hbmFnZXIuZ2V0U2V0dGluZ3MoKS5zZXRTZWFyY2hpbmdDb25maWcoY29uZmlnKTtcblx0fVxuXG5cdHNldFF1aWNrRmlsdGVyc0NvbmZpZyhjb25maWc6IFF1aWNrRmlsdGVyc0NvbmZpZyk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyTWFuYWdlci5nZXRTZXR0aW5ncygpLnNldFF1aWNrRmlsdGVyc0NvbmZpZyhjb25maWcpO1xuXHR9XG5cblx0dG9nZ2xlRmlsdGVyKGZpZWxkSWQ6IEZpZWxkSWQsIGV4dGVybmFsRmlsdGVySWQ6IHN0cmluZywgZmlsdGVyVmFsdWU6IHN0cmluZyk6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PiB7XG5cblx0XHRjb25zdCBmaWVsZCA9IHRoaXMuZmllbGRDb2xsZWN0aW9uLmdldEZpZWxkKGZpZWxkSWQpO1xuXG5cdFx0Ly8gRmllbGQgbm90IGZvdW5kXG5cdFx0Ly8gVE9ETyB0aHJvdyBhZ2dyZWdhdGUgZXZlbnRcblx0XHRpZiAoZmllbGQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblxuXHRcdHRoaXMuZmlsdGVyTWFuYWdlci5hZGRGaWx0ZXIoZmllbGQsIGV4dGVybmFsRmlsdGVySWQsIGZpbHRlclZhbHVlKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRhZGRTZWFyY2hQaHJhc2UocGhyYXNlOiBzdHJpbmcpOiBBcnJheTxBZ2dyZWdhdGVFdmVudD4ge1xuXG5cdFx0Y29uc3QgZmllbGRzID0gdGhpcy5maWVsZENvbGxlY3Rpb24uZ2V0QWxsRmllbGRzKCk7XG5cblx0XHR0aGlzLnNlYXJjaE1hbmFnZXIuYWRkU2VhcmNoUGhyYXNlKGZpZWxkcywgcGhyYXNlKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRyZW1vdmVTZWFyY2hQaHJhc2UoKTogQXJyYXk8QWdncmVnYXRlRXZlbnQ+IHtcblxuXHRcdHRoaXMuc2VhcmNoTWFuYWdlci5yZW1vdmVTZWFyY2hGaWx0ZXJzKCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVTb3VyY2UoKTogdm9pZCB7XG5cblx0XHRpZiAoIXRoaXMuc291cmNlTWFuYWdlci5nZXRPcmlnaW4oKSB8fCAhdGhpcy5wYWdpbmdBZ2dyZWdhdGUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBUT0RPIFJlZmFjdG9yXG5cdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnNldEVudGl0aWVzKHRoaXMuc291cmNlTWFuYWdlci5nZXRPcmlnaW4oKSk7XG5cblx0XHQvLyBhZ2dyZWdhdGlvbnNcblx0XHRjb25zdCBhZ2dyZWdhdGlvbkV2ZW50cyA9IHRoaXMuYWdncmVnYXRpb25NYW5hZ2VyLmNhbGN1bGF0ZShcblx0XHRcdHRoaXMuZmllbGRDb2xsZWN0aW9uLmdldEFsbEZpZWxkcygpLFxuXHRcdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLmdldEVudGl0aWVzKClcblx0XHQpO1xuXG5cdFx0YWdncmVnYXRpb25FdmVudHMuZm9yRWFjaCgoYWU6IEFnZ3JlZ2F0ZUV2ZW50KSA9PiB7XG5cdFx0XHR0aGlzLmFkZEV2ZW50KGFlKTtcblx0XHR9KTtcblxuXHRcdC8vIGZpbHRlcmluZ1xuXHRcdHRoaXMuc291cmNlTWFuYWdlci5zZXRFbnRpdGllcyh0aGlzLmZpbHRlck1hbmFnZXIuZmlsdGVyKHRoaXMuc291cmNlTWFuYWdlci5nZXRFbnRpdGllcygpKSk7XG5cblx0XHQvLyBzZWFyY2hcblx0XHRjb25zdCBzZWFyY2hlZEVudGl0aWVzID0gdGhpcy5zZWFyY2hNYW5hZ2VyLnNlYXJjaCh0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0RW50aXRpZXMoKSk7XG5cdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnNldEVudGl0aWVzKHNlYXJjaGVkRW50aXRpZXMpO1xuXG5cdFx0Ly8gc29ydGluZ1xuXHRcdGNvbnN0IGVudHMgPSB0aGlzLnNvcnRlckNvbGxlY3Rpb24uc29ydCh0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0RW50aXRpZXMoKSk7XG5cdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnNldEVudGl0aWVzKGVudHMpO1xuXG5cdFx0Ly8gY2FsY3VsYXRlIGZpbHRlcmVkRW50aXRpZXNcblx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2V0UHJlcGFyZWRFbnRpdGllcygpO1xuXG5cdFx0dGhpcy5wYWdpbmdBZ2dyZWdhdGUuc2V0U291cmNlU2l6ZSh0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0UHJlcGFyZWRFbnRpdGllcygpLmxlbmd0aCk7XG5cblx0XHR0aGlzLmFkZEV2ZW50KG5ldyBTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0QWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCBlbnRzKSk7XG5cblx0XHQvLyBwYWdpbmdcblx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2V0RW50aXRpZXModGhpcy5wYWdpbmdBZ2dyZWdhdGUuc2FtcGxlKHRoaXMuc291cmNlTWFuYWdlci5nZXRFbnRpdGllcygpKSk7XG5cblx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLnNldFNvdXJjZVNpemUodGhpcy5zb3VyY2VNYW5hZ2VyLmdldEVudGl0aWVzKCkubGVuZ3RoKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlQmFzZWRPblZpcnR1YWxTY3JvbGwoKTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlU291cmNlQmFzZWRPblZpcnR1YWxTY3JvbGwoKTogdm9pZCB7XG5cblx0XHRpZiAodGhpcy52ZXJ0aWNhbEZvcm1hdGlvbi5pc0VuYWJsZWQoKSkge1xuXG5cdFx0XHRjb25zdCByYW5nZSA9IHRoaXMudmVydGljYWxGb3JtYXRpb24uZ2V0UmFuZ2UoKTtcblxuXHRcdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnNldFNsaWNlZEVudGl0aWVzKFxuXHRcdFx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0RW50aXRpZXMoKS5zbGljZShyYW5nZS5nZXRTdGFydCgpLCByYW5nZS5nZXRFbmQoKSlcblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc291cmNlTWFuYWdlci5zZXRTbGljZWRFbnRpdGllcyhcblx0XHRcdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLmdldEVudGl0aWVzKClcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==