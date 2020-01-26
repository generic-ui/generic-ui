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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc3RydWN0dXJlLmFnZ3JlZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWtCLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTlFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNqRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBWWpELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsMENBQTBDLEVBQUUsTUFBTSwrRUFBK0UsQ0FBQztJQUk5SCxrQkFBa0IsU0FBbEIsa0JBQW1CLFNBQVEsU0FBUzs7Ozs7Ozs7Ozs7Ozs7SUFzQmhELFlBQVksV0FBd0IsRUFDakMsZUFBZ0MsRUFDaEMsa0JBQXNDLEVBQ3RDLGFBQTRCLEVBQzVCLGlCQUFvQyxFQUNwQyxrQkFBc0Ms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LGdCQUFnQjtZQUNoQixhQUFhO1lBQ2hCLGFBQWE7WUFDWCxlQUFlO1lBQ3hCLGVBQWU7O0FBaENkLGtCQUFrQjtJQUQ5QixhQUFhOzZDQXVCWSxXQUFXO1FBQ2hCLGVBQWU7UUFDWixrQkFBa0I7UUFDdkIsYUFBYTtRQUNULGlCQUFpQjtRQUNoQixrQkFBa0I7UUFDcEIsZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDaEIsYUFBYTtRQUNYLGVBQWU7UUFDeEIsZUFBZTtHQWhDZCxrQkFBa0IsQ0FvVDlCO1NBcFRZLGtCQUFrQjs7Ozs7O0lBRTlCLGdEQUErQzs7Ozs7SUFFL0Msb0NBQWdDOzs7OztJQUVoQyw2Q0FBeUM7Ozs7O0lBRXpDLDJDQUFxQzs7Ozs7SUFFckMsOENBQTJDOzs7OztJQUUzQywyQ0FBcUM7Ozs7O0lBRXJDLDJDQUFxQzs7Ozs7SUFFckMsK0NBQTZDOzs7OztJQUU3Qyw2Q0FBeUM7Ozs7O0lBRXpDLGdEQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZSwgQWdncmVnYXRlRXZlbnQsIFJvb3RBZ2dyZWdhdGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBQYWdpbmdBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi9wYWdpbmcvY29tbWFuZC9wYWdpbmcuYWdncmVnYXRlJztcbmltcG9ydCB7IFNvdXJjZU1hbmFnZXIgfSBmcm9tICcuLi8uLi9zb3VyY2UvY29tbWFuZC9zb3VyY2UubWFuYWdlcic7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbiB9IGZyb20gJy4vdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbic7XG5pbXBvcnQgeyBBZ2dyZWdhdGlvbk1hbmFnZXIgfSBmcm9tICcuL2FnZ3JlZ2F0aW9uL2FnZ3JlZ2F0aW9uLm1hbmFnZXInO1xuaW1wb3J0IHsgU29ydGVyQ29sbGVjdGlvbiB9IGZyb20gJy4vc29ydC9zb3J0ZXIuY29sbGVjdGlvbic7XG5pbXBvcnQgeyBGaWx0ZXJNYW5hZ2VyIH0gZnJvbSAnLi9maWx0ZXIvZmlsdGVyLm1hbmFnZXInO1xuaW1wb3J0IHsgRmllbGRDb2xsZWN0aW9uIH0gZnJvbSAnLi9maWVsZC9maWVsZC5jb2xsZWN0aW9uJztcbmltcG9ydCB7IEZvcm1hdGlvbkFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uL2Zvcm1hdGlvbi9jb21tYW5kL2Zvcm1hdGlvbi1hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgU2NoZW1hQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vc2NoZW1hL2NvbW1hbmQvc2NoZW1hLWFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcyB9IGZyb20gJy4uLy4uL3NvdXJjZS9jb21tYW5kL29yaWdpbi9lZGl0L3N0cnVjdHVyZS5lZGl0LXNvdXJjZS1pdGVtLnBhcmFtcyc7XG5pbXBvcnQgeyBQYWdpbmdDb25maWcgfSBmcm9tICcuLi8uLi9wYWdpbmcvcGFnaW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vc291cmNlL2NvbW1hbmQvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4vZmllbGQvZGF0YS10eXBlL2ZpZWxkJztcbmltcG9ydCB7IFNvcnRpbmdDb25maWcgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlL3NvcnRpbmctY29uZmlnJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuL2ZpZWxkL2RhdGEtdHlwZS9maWVsZC5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3J0ZXIgfSBmcm9tICcuL3NvcnQvc3RydWN0dXJlLnNvcnRlcic7XG5pbXBvcnQgeyBGaWx0ZXJDb25maWcgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlL2ZpbHRlci9maWx0ZXItY29uZmlnJztcbmltcG9ydCB7IFF1aWNrRmlsdGVyc0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvZmlsdGVyL3F1aWNrLWZpbHRlcnMuY29uZmlnJztcbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvc2VhcmNoL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHsgU2VhcmNoTWFuYWdlciB9IGZyb20gJy4vc2VhcmNoL3NlYXJjaC5tYW5hZ2VyJztcbmltcG9ydCB7IFN0cnVjdHVyZVByZXBhcmVkRW50aXRpZXNTZXRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uLy4uL3NvdXJjZS9jb21tYW5kL3ByZXBhcmVkL3N0cnVjdHVyZS5wcmVwYXJlZC1lbnRpdGllcy1zZXQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IFNvcnRTdGF0dXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29tbWFuZC9jb2x1bW4vc29ydC9zb3J0LXN0YXR1cyc7XG5cbkBSb290QWdncmVnYXRlXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQWdncmVnYXRlIGV4dGVuZHMgQWdncmVnYXRlIHtcblxuXHRwcml2YXRlIGZvcm1hdGlvbkFnZ3JlZ2F0ZTogRm9ybWF0aW9uQWdncmVnYXRlO1xuXG5cdHByaXZhdGUgc2NoZW1hOiBTY2hlbWFBZ2dyZWdhdGU7XG5cblx0cHJpdmF0ZSBwYWdpbmdBZ2dyZWdhdGU6IFBhZ2luZ0FnZ3JlZ2F0ZTtcblxuXHRwcml2YXRlIHNvdXJjZU1hbmFnZXI6IFNvdXJjZU1hbmFnZXI7XG5cblx0cHJpdmF0ZSBzb3J0ZXJDb2xsZWN0aW9uOiBTb3J0ZXJDb2xsZWN0aW9uO1xuXG5cdHByaXZhdGUgZmlsdGVyTWFuYWdlcjogRmlsdGVyTWFuYWdlcjtcblxuXHRwcml2YXRlIHNlYXJjaE1hbmFnZXI6IFNlYXJjaE1hbmFnZXI7XG5cblx0cHJpdmF0ZSB2ZXJ0aWNhbEZvcm1hdGlvbjogVmVydGljYWxGb3JtYXRpb247XG5cblx0cHJpdmF0ZSBmaWVsZENvbGxlY3Rpb246IEZpZWxkQ29sbGVjdGlvbjtcblxuXHRwcml2YXRlIGFnZ3JlZ2F0aW9uTWFuYWdlcjogQWdncmVnYXRpb25NYW5hZ2VyO1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cGFnaW5nQWdncmVnYXRlOiBQYWdpbmdBZ2dyZWdhdGUsXG5cdFx0XHRcdGZvcm1hdGlvbkFnZ3JlZ2F0ZTogRm9ybWF0aW9uQWdncmVnYXRlLFxuXHRcdFx0XHRzb3VyY2VNYW5hZ2VyOiBTb3VyY2VNYW5hZ2VyLFxuXHRcdFx0XHR2ZXJ0aWNhbEZvcm1hdGlvbjogVmVydGljYWxGb3JtYXRpb24sXG5cdFx0XHRcdGFnZ3JlZ2F0aW9uTWFuYWdlcjogQWdncmVnYXRpb25NYW5hZ2VyLFxuXHRcdFx0XHRzb3J0ZXJDb2xsZWN0aW9uOiBTb3J0ZXJDb2xsZWN0aW9uLFxuXHRcdFx0XHRmaWx0ZXJDb2xsZWN0aW9uOiBGaWx0ZXJNYW5hZ2VyLFxuXHRcdFx0XHRzZWFyY2hNYW5hZ2VyOiBTZWFyY2hNYW5hZ2VyLFxuXHRcdFx0XHRmaWVsZENvbGxlY3Rpb246IEZpZWxkQ29sbGVjdGlvbixcblx0XHRcdFx0c2NoZW1hOiBTY2hlbWFBZ2dyZWdhdGUpIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCk7XG5cdFx0dGhpcy5wYWdpbmdBZ2dyZWdhdGUgPSBwYWdpbmdBZ2dyZWdhdGU7XG5cdFx0dGhpcy5mb3JtYXRpb25BZ2dyZWdhdGUgPSBmb3JtYXRpb25BZ2dyZWdhdGU7XG5cdFx0dGhpcy5zb3VyY2VNYW5hZ2VyID0gc291cmNlTWFuYWdlcjtcblx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uID0gdmVydGljYWxGb3JtYXRpb247XG5cdFx0dGhpcy5hZ2dyZWdhdGlvbk1hbmFnZXIgPSBhZ2dyZWdhdGlvbk1hbmFnZXI7XG5cdFx0dGhpcy5zb3J0ZXJDb2xsZWN0aW9uID0gc29ydGVyQ29sbGVjdGlvbjtcblx0XHR0aGlzLmZpbHRlck1hbmFnZXIgPSBmaWx0ZXJDb2xsZWN0aW9uO1xuXHRcdHRoaXMuc2VhcmNoTWFuYWdlciA9IHNlYXJjaE1hbmFnZXI7XG5cdFx0dGhpcy5maWVsZENvbGxlY3Rpb24gPSBmaWVsZENvbGxlY3Rpb247XG5cdFx0dGhpcy5zY2hlbWEgPSBzY2hlbWE7XG5cdH1cblxuXHRnZXRWZXJ0aWNhbEZvcm1hdGlvbigpOiBWZXJ0aWNhbEZvcm1hdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxGb3JtYXRpb247XG5cdH1cblxuXHRzZXRBZ2dyZWdhdGlvbkVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ+IHtcblxuXHRcdHRoaXMuYWdncmVnYXRpb25NYW5hZ2VyLnNldEVuYWJsZWQoZW5hYmxlZCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RXZlbnRzKCk7XG5cdH1cblxuXHRzZXRPcmlnaW4oaXRlbXM6IEFycmF5PGFueT4pOiBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50PiB7XG5cblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnNldE9yaWdpbihpdGVtcywgdGhpcy5nZXRJZCgpKVxuXHRcdCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RXZlbnRzKCk7XG5cdH1cblxuXHRlZGl0SXRlbShlZGl0UGFyYW1zOiBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcyk6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ+IHtcblxuXHRcdGNvbnN0IGl0ZW1JZCA9IGVkaXRQYXJhbXMuZ2V0SXRlbUlkKCksXG5cdFx0XHRmaWVsZElkID0gZWRpdFBhcmFtcy5nZXRDb2x1bW5GaWVsZElkKCksXG5cdFx0XHRmaWVsZCA9IHRoaXMuZmllbGRDb2xsZWN0aW9uLmdldEZpZWxkKGZpZWxkSWQgYXMgYW55KSwgLy8gYXMgRmllbGRJZFxuXHRcdFx0dmFsdWUgPSBlZGl0UGFyYW1zLmdldFZhbHVlKCk7XG5cblx0XHRjb25zdCBlZGl0SXRlbUV2ZW50cyA9IHRoaXMuc291cmNlTWFuYWdlci5lZGl0T3JpZ2luSXRlbShpdGVtSWQsIHZhbHVlLCBmaWVsZCwgdGhpcy5nZXRJZCgpKTtcblxuXHRcdGVkaXRJdGVtRXZlbnRzLmZvckVhY2goKGUpID0+IHRoaXMuYWRkRXZlbnQoZSkpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblxuXHRcdHJldHVybiB0aGlzLmdldEV2ZW50cygpO1xuXHR9XG5cblx0c2V0SGVpZ2h0KGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5nZXRTY2hlbWEoKS5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuXHRcdGNvbnN0IHZpZXdwb3J0SGVpZ2h0ID0gdGhpcy5nZXRTY2hlbWEoKS5nZXRDb250YWluZXJIZWlnaHQoKTtcblxuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb24uc2V0Vmlld3BvcnRIZWlnaHQodmlld3BvcnRIZWlnaHQpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2VCYXNlZE9uVmlydHVhbFNjcm9sbCgpO1xuXHR9XG5cblx0c2V0Rm9ybWF0aW9uKGZvcm1hdGlvbjogRm9ybWF0aW9uQWdncmVnYXRlKTogdm9pZCB7XG5cdFx0dGhpcy5mb3JtYXRpb25BZ2dyZWdhdGUgPSBmb3JtYXRpb247XG5cdH1cblxuXHRzZXRTY3JvbGxQb3NpdGlvbihwb3NpdGlvbjogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbi5zZXRTY3JvbGxQb3NpdGlvbihwb3NpdGlvbik7XG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2VCYXNlZE9uVmlydHVhbFNjcm9sbCgpO1xuXHR9XG5cblx0Z2V0Rm9ybWF0aW9uKCk6IEZvcm1hdGlvbkFnZ3JlZ2F0ZSB7XG5cdFx0cmV0dXJuIHRoaXMuZm9ybWF0aW9uQWdncmVnYXRlO1xuXHR9XG5cblx0c2V0U2NoZW1hKHNjaGVtYTogU2NoZW1hQWdncmVnYXRlKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWEgPSBzY2hlbWE7XG5cdH1cblxuXHRnZXRTY2hlbWEoKTogU2NoZW1hQWdncmVnYXRlIHtcblx0XHRyZXR1cm4gdGhpcy5zY2hlbWE7XG5cdH1cblxuXHRnZXRQYWdpbmcoKTogUGFnaW5nQWdncmVnYXRlIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdpbmdBZ2dyZWdhdGU7XG5cdH1cblxuXHRjaGFuZ2VQYWdpbmcoY29uZmlnOiBQYWdpbmdDb25maWcpIHtcblx0XHR0aGlzLnBhZ2luZ0FnZ3JlZ2F0ZS5jaGFuZ2UoY29uZmlnKTtcblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXHR9XG5cblx0c2V0UGFnaW5nKHBhZ2luZzogUGFnaW5nQWdncmVnYXRlKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdBZ2dyZWdhdGUgPSBwYWdpbmc7XG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblx0fVxuXG5cdG5leHRQYWdlKCk6IHZvaWQge1xuXG5cdFx0dGhpcy5wYWdpbmdBZ2dyZWdhdGUubmV4dFBhZ2UoKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cdH1cblxuXHRwcmV2UGFnZSgpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0FnZ3JlZ2F0ZS5wcmV2UGFnZSgpO1xuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cdH1cblxuXHRjaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudD4ge1xuXG5cdFx0Y29uc3QgcGFnaW5nRXZlbnRzID0gdGhpcy5wYWdpbmdBZ2dyZWdhdGUuY2hhbmdlUGFnZVNpemUocGFnZVNpemUpO1xuXG5cdFx0Ly8gVE9ET1xuXHRcdHBhZ2luZ0V2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuXHRcdFx0dGhpcy5hZGRFdmVudChldmVudCk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RXZlbnRzKCk7XG5cdH1cblxuXHRnZXRFbnRpdGllcygpOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlTWFuYWdlci5nZXRTbGljZWRFbnRpdGllcygpO1xuXHR9XG5cblx0Z2V0U291cmNlKCk6IFNvdXJjZU1hbmFnZXIge1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZU1hbmFnZXI7XG5cdH1cblxuXHRjcmVhdGVGaWVsZHMoY29sdW1uczogQXJyYXk8Q29sdW1uQ29uZmlnPik6IEFycmF5PEZpZWxkPiB7XG5cdFx0dGhpcy5maWVsZENvbGxlY3Rpb24uaW5pdEZpZWxkcyhjb2x1bW5zKTtcblxuXHRcdC8vIFRPRE8gU2hvdWxkIHRocm93IGV2ZW50IGZpZWxkcyBjcmVhdGVkXG5cdFx0cmV0dXJuIHRoaXMuZmllbGRDb2xsZWN0aW9uLmdldEFsbEZpZWxkcygpO1xuXHR9XG5cblx0c2V0U29ydGluZ0NvbmZpZyhjb25maWc6IFNvcnRpbmdDb25maWcpOiB2b2lkIHtcblx0XHR0aGlzLnNvcnRlckNvbGxlY3Rpb24uc2V0Q29uZmlnKGNvbmZpZyk7XG5cdH1cblxuXHR0b2dnbGVTb3J0KGZpZWxkSWQ6IEZpZWxkSWQpOiBBcnJheTxTdHJ1Y3R1cmVTb3J0ZXI+IHtcblxuXHRcdGNvbnN0IGZpZWxkID0gdGhpcy5maWVsZENvbGxlY3Rpb24uZ2V0RmllbGQoZmllbGRJZCk7XG5cblx0XHR0aGlzLnNvcnRlckNvbGxlY3Rpb24udG9nZ2xlKGZpZWxkKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5zb3J0ZXJDb2xsZWN0aW9uLmdldEFsbCgpO1xuXHR9XG5cblx0c2V0U29ydE9yZGVyKGZpZWxkSWQ6IEZpZWxkSWQsIHNvcnRPcmRlcjogU29ydFN0YXR1cyk6IEFycmF5PFN0cnVjdHVyZVNvcnRlcj4ge1xuXG5cdFx0Y29uc3QgZmllbGQgPSB0aGlzLmZpZWxkQ29sbGVjdGlvbi5nZXRGaWVsZChmaWVsZElkKTtcblxuXHRcdHRoaXMuc29ydGVyQ29sbGVjdGlvbi5zZXRTb3J0T3JkZXIoZmllbGQsIHNvcnRPcmRlcik7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIHRoaXMuc29ydGVyQ29sbGVjdGlvbi5nZXRBbGwoKTtcblx0fVxuXG5cdHNldEZpbHRlckNvbmZpZyhjb25maWc6IEZpbHRlckNvbmZpZyk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyTWFuYWdlci5nZXRTZXR0aW5ncygpLnNldEZpbHRlckNvbmZpZyhjb25maWcpO1xuXHR9XG5cblx0c2V0U2VhcmNoaW5nQ29uZmlnKGNvbmZpZzogU2VhcmNoQ29uZmlnKTogdm9pZCB7XG5cdFx0dGhpcy5maWx0ZXJNYW5hZ2VyLmdldFNldHRpbmdzKCkuc2V0U2VhcmNoaW5nQ29uZmlnKGNvbmZpZyk7XG5cdH1cblxuXHRzZXRRdWlja0ZpbHRlcnNDb25maWcoY29uZmlnOiBRdWlja0ZpbHRlcnNDb25maWcpOiB2b2lkIHtcblx0XHR0aGlzLmZpbHRlck1hbmFnZXIuZ2V0U2V0dGluZ3MoKS5zZXRRdWlja0ZpbHRlcnNDb25maWcoY29uZmlnKTtcblx0fVxuXG5cdHRvZ2dsZUZpbHRlcihmaWVsZElkOiBGaWVsZElkLCBleHRlcm5hbEZpbHRlcklkOiBzdHJpbmcsIGZpbHRlclZhbHVlOiBzdHJpbmcpOiBBcnJheTxBZ2dyZWdhdGVFdmVudD4ge1xuXG5cdFx0Y29uc3QgZmllbGQgPSB0aGlzLmZpZWxkQ29sbGVjdGlvbi5nZXRGaWVsZChmaWVsZElkKTtcblxuXHRcdC8vIEZpZWxkIG5vdCBmb3VuZFxuXHRcdC8vIFRPRE8gdGhyb3cgYWdncmVnYXRlIGV2ZW50XG5cdFx0aWYgKGZpZWxkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cblx0XHR0aGlzLmZpbHRlck1hbmFnZXIuYWRkRmlsdGVyKGZpZWxkLCBleHRlcm5hbEZpbHRlcklkLCBmaWx0ZXJWYWx1ZSk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0YWRkU2VhcmNoUGhyYXNlKHBocmFzZTogc3RyaW5nKTogQXJyYXk8QWdncmVnYXRlRXZlbnQ+IHtcblxuXHRcdGNvbnN0IGZpZWxkcyA9IHRoaXMuZmllbGRDb2xsZWN0aW9uLmdldEFsbEZpZWxkcygpO1xuXG5cdFx0dGhpcy5zZWFyY2hNYW5hZ2VyLmFkZFNlYXJjaFBocmFzZShmaWVsZHMsIHBocmFzZSk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0cmVtb3ZlU2VhcmNoUGhyYXNlKCk6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PiB7XG5cblx0XHR0aGlzLnNlYXJjaE1hbmFnZXIucmVtb3ZlU2VhcmNoRmlsdGVycygpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblxuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlU291cmNlKCk6IHZvaWQge1xuXG5cdFx0aWYgKCF0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0T3JpZ2luKCkgfHwgIXRoaXMucGFnaW5nQWdncmVnYXRlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gVE9ETyBSZWZhY3RvclxuXHRcdHRoaXMuc291cmNlTWFuYWdlci5zZXRFbnRpdGllcyh0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0T3JpZ2luKCkpO1xuXG5cdFx0Ly8gZmlsdGVyaW5nXG5cdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnNldEVudGl0aWVzKHRoaXMuZmlsdGVyTWFuYWdlci5maWx0ZXIodGhpcy5zb3VyY2VNYW5hZ2VyLmdldEVudGl0aWVzKCkpKTtcblxuXHRcdC8vIHNlYXJjaFxuXHRcdGNvbnN0IHNlYXJjaGVkRW50aXRpZXMgPSB0aGlzLnNlYXJjaE1hbmFnZXIuc2VhcmNoKHRoaXMuc291cmNlTWFuYWdlci5nZXRFbnRpdGllcygpKTtcblx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2V0RW50aXRpZXMoc2VhcmNoZWRFbnRpdGllcyk7XG5cblx0XHQvLyBzb3J0aW5nXG5cdFx0Y29uc3QgZW50cyA9IHRoaXMuc29ydGVyQ29sbGVjdGlvbi5zb3J0KHRoaXMuc291cmNlTWFuYWdlci5nZXRFbnRpdGllcygpKTtcblx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2V0RW50aXRpZXMoZW50cyk7XG5cblx0XHQvLyBjYWxjdWxhdGUgZmlsdGVyZWRFbnRpdGllc1xuXHRcdHRoaXMuc291cmNlTWFuYWdlci5zZXRQcmVwYXJlZEVudGl0aWVzKCk7XG5cblx0XHR0aGlzLnBhZ2luZ0FnZ3JlZ2F0ZS5zZXRTb3VyY2VTaXplKHRoaXMuc291cmNlTWFuYWdlci5nZXRQcmVwYXJlZEVudGl0aWVzKCkubGVuZ3RoKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQobmV3IFN0cnVjdHVyZVByZXBhcmVkRW50aXRpZXNTZXRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCksIGVudHMpKTtcblxuXHRcdC8vIGFnZ3JlZ2F0aW9uc1xuXHRcdGNvbnN0IGFnZ3JlZ2F0aW9uRXZlbnRzID0gdGhpcy5hZ2dyZWdhdGlvbk1hbmFnZXIuY2FsY3VsYXRlKFxuXHRcdFx0dGhpcy5maWVsZENvbGxlY3Rpb24uZ2V0QWxsRmllbGRzKCksXG5cdFx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0RW50aXRpZXMoKVxuXHRcdCk7XG5cblx0XHRhZ2dyZWdhdGlvbkV2ZW50cy5mb3JFYWNoKChhZTogQWdncmVnYXRlRXZlbnQpID0+IHtcblx0XHRcdHRoaXMuYWRkRXZlbnQoYWUpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gcGFnaW5nXG5cdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnNldEVudGl0aWVzKHRoaXMucGFnaW5nQWdncmVnYXRlLnNhbXBsZSh0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0RW50aXRpZXMoKSkpO1xuXG5cdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbi5zZXRTb3VyY2VTaXplKHRoaXMuc291cmNlTWFuYWdlci5nZXRFbnRpdGllcygpLmxlbmd0aCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZUJhc2VkT25WaXJ0dWFsU2Nyb2xsKCk7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZVNvdXJjZUJhc2VkT25WaXJ0dWFsU2Nyb2xsKCk6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMudmVydGljYWxGb3JtYXRpb24uaXNFbmFibGVkKCkpIHtcblxuXHRcdFx0Y29uc3QgcmFuZ2UgPSB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLmdldFJhbmdlKCk7XG5cblx0XHRcdHRoaXMuc291cmNlTWFuYWdlci5zZXRTbGljZWRFbnRpdGllcyhcblx0XHRcdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLmdldEVudGl0aWVzKCkuc2xpY2UocmFuZ2UuZ2V0U3RhcnQoKSwgcmFuZ2UuZ2V0RW5kKCkpXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2V0U2xpY2VkRW50aXRpZXMoXG5cdFx0XHRcdHRoaXMuc291cmNlTWFuYWdlci5nZXRFbnRpdGllcygpXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=