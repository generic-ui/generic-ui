/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateRoot } from '@generic-ui/hermes';
import { StructurePreparedEntitiesSetAggregateEvent } from '../source/prepared/structure.prepared-entities-set.aggregate-event';
import { FieldsInitedAggregateEvent } from './field/init/fields-inited.aggregate-event';
import { SchemaTheme } from '../../../schema/domain/schema-theme';
import { SchemaAggregate } from '../../../schema/domain/schema.aggregate';
import { StructureCreatedAggregateEvent } from './create-structure/structure-created.aggregate-event';
export class StructureAggregate extends AggregateRoot {
    /**
     * @param {?} structureId
     * @param {?} pagingAggregate
     * @param {?} formationAggregate
     * @param {?} sourceManager
     * @param {?} verticalFormation
     * @param {?} summariesManager
     * @param {?} sorterCollection
     * @param {?} filterCollection
     * @param {?} searchManager
     * @param {?} fieldCollection
     */
    constructor(structureId, pagingAggregate, formationAggregate, sourceManager, verticalFormation, summariesManager, sorterCollection, filterCollection, searchManager, fieldCollection) {
        super(structureId, 'StructureAggregate');
        this.pagingManager = pagingAggregate;
        this.formationAggregate = formationAggregate;
        this.sourceManager = sourceManager;
        this.verticalFormation = verticalFormation;
        this.summariesManager = summariesManager;
        this.sorterCollection = sorterCollection;
        this.filterManager = filterCollection;
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
     * @param {?} columns
     * @return {?}
     */
    createFields(columns) {
        this.fieldCollection.initFields(columns);
        /** @type {?} */
        const typeFields = this.fieldCollection.getAllFields();
        this.addEvent(new FieldsInitedAggregateEvent(this.getId(), columns, typeFields));
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
        if (!this.sourceManager.getOrigin() || !this.pagingManager) {
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
}
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL3N0cnVjdHVyZS5hZ2dyZWdhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBa0IsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFzQm5FLE9BQU8sRUFBRSwwQ0FBMEMsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBRWhJLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDMUUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFHdEcsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGFBQTBCOzs7Ozs7Ozs7Ozs7O0lBb0JqRSxZQUFZLFdBQXdCLEVBQ2pDLGVBQThCLEVBQzlCLGtCQUFzQyxFQUN0QyxhQUE0QixFQUM1QixpQkFBb0MsRUFDcEMsZ0JBQWtDLEVBQ2xDLGdCQUFrQyxFQUNsQyxnQkFBK0IsRUFDL0IsYUFBNEIsRUFDNUIsZUFBZ0M7UUFDbEMsS0FBSyxDQUFDLFdBQVcsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxhQUFhLEdBQUcsZUFBZSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztRQUM3QyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7UUFDM0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztR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LGlCQUFpQixDQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQ3hFLENBQUM7U0FDRjthQUFNO1lBQ04sSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FDaEMsQ0FBQztTQUNGO0lBQ0YsQ0FBQzs7Ozs7SUFFTyxTQUFTOzs7Y0FHVixLQUFLLEdBQUcsZUFBZSxDQUFDLGFBQWE7UUFFM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QixDQUFDO0NBRUQ7Ozs7OztJQXJWQSxnREFBK0M7Ozs7O0lBRS9DLDJDQUFxQzs7Ozs7SUFFckMsMkNBQXFDOzs7OztJQUVyQyw4Q0FBMkM7Ozs7O0lBRTNDLDJDQUFxQzs7Ozs7SUFFckMsMkNBQXFDOzs7OztJQUVyQywrQ0FBNkM7Ozs7O0lBRTdDLDZDQUF5Qzs7Ozs7SUFFekMsOENBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgQWdncmVnYXRlUm9vdCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFBhZ2luZ01hbmFnZXIgfSBmcm9tICcuLi9wYWdpbmcvcGFnaW5nLm1hbmFnZXInO1xuaW1wb3J0IHsgU291cmNlTWFuYWdlciB9IGZyb20gJy4uL3NvdXJjZS9zb3VyY2UubWFuYWdlcic7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbiB9IGZyb20gJy4vdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbic7XG5pbXBvcnQgeyBTdW1tYXJpZXNNYW5hZ2VyIH0gZnJvbSAnLi9zdW1tYXJpZXMvc3VtbWFyaWVzLm1hbmFnZXInO1xuaW1wb3J0IHsgU29ydGVyQ29sbGVjdGlvbiB9IGZyb20gJy4vc29ydC9zb3J0ZXIuY29sbGVjdGlvbic7XG5pbXBvcnQgeyBGaWx0ZXJNYW5hZ2VyIH0gZnJvbSAnLi9maWx0ZXIvZmlsdGVyLm1hbmFnZXInO1xuaW1wb3J0IHsgRmllbGRDb2xsZWN0aW9uIH0gZnJvbSAnLi9maWVsZC9maWVsZC5jb2xsZWN0aW9uJztcbmltcG9ydCB7IEZvcm1hdGlvbkFnZ3JlZ2F0ZSB9IGZyb20gJy4uL2Zvcm1hdGlvbi9mb3JtYXRpb24tYWdncmVnYXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zIH0gZnJvbSAnLi4vc291cmNlL29yaWdpbi9lZGl0L3N0cnVjdHVyZS5lZGl0LXNvdXJjZS1pdGVtLnBhcmFtcyc7XG5pbXBvcnQgeyBQYWdpbmdDb25maWcgfSBmcm9tICcuLi9wYWdpbmcvcGFnaW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vc291cmNlL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IFNvcnRpbmdDb25maWcgfSBmcm9tICcuLi8uLi91aS1hcGkvc29ydGluZy1jb25maWcnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4vZmllbGQvZGF0YS10eXBlL2ZpZWxkLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVNvcnRlciB9IGZyb20gJy4vc29ydC9zdHJ1Y3R1cmUuc29ydGVyJztcbmltcG9ydCB7IEZpbHRlckNvbmZpZyB9IGZyb20gJy4uLy4uL3VpLWFwaS9maWx0ZXIvZmlsdGVyLWNvbmZpZyc7XG5pbXBvcnQgeyBRdWlja0ZpbHRlcnNDb25maWcgfSBmcm9tICcuLi8uLi91aS1hcGkvZmlsdGVyL3F1aWNrLWZpbHRlcnMuY29uZmlnJztcbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uLy4uL3VpLWFwaS9zZWFyY2gvc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQgeyBTZWFyY2hNYW5hZ2VyIH0gZnJvbSAnLi9zZWFyY2gvc2VhcmNoLm1hbmFnZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vc291cmNlL3ByZXBhcmVkL3N0cnVjdHVyZS5wcmVwYXJlZC1lbnRpdGllcy1zZXQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IFNvcnRPcmRlciB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vc29ydC9zb3J0LW9yZGVyJztcbmltcG9ydCB7IEZpZWxkc0luaXRlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9maWVsZC9pbml0L2ZpZWxkcy1pbml0ZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi9zY2hlbWEuYWdncmVnYXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNyZWF0ZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vY3JlYXRlLXN0cnVjdHVyZS9zdHJ1Y3R1cmUtY3JlYXRlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuXG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgZXh0ZW5kcyBBZ2dyZWdhdGVSb290PFN0cnVjdHVyZUlkPiB7XG5cblx0cHJpdmF0ZSBmb3JtYXRpb25BZ2dyZWdhdGU6IEZvcm1hdGlvbkFnZ3JlZ2F0ZTtcblxuXHRwcml2YXRlIHBhZ2luZ01hbmFnZXI6IFBhZ2luZ01hbmFnZXI7XG5cblx0cHJpdmF0ZSBzb3VyY2VNYW5hZ2VyOiBTb3VyY2VNYW5hZ2VyO1xuXG5cdHByaXZhdGUgc29ydGVyQ29sbGVjdGlvbjogU29ydGVyQ29sbGVjdGlvbjtcblxuXHRwcml2YXRlIGZpbHRlck1hbmFnZXI6IEZpbHRlck1hbmFnZXI7XG5cblx0cHJpdmF0ZSBzZWFyY2hNYW5hZ2VyOiBTZWFyY2hNYW5hZ2VyO1xuXG5cdHByaXZhdGUgdmVydGljYWxGb3JtYXRpb246IFZlcnRpY2FsRm9ybWF0aW9uO1xuXG5cdHByaXZhdGUgZmllbGRDb2xsZWN0aW9uOiBGaWVsZENvbGxlY3Rpb247XG5cblx0cHJpdmF0ZSBzdW1tYXJpZXNNYW5hZ2VyOiBTdW1tYXJpZXNNYW5hZ2VyO1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cGFnaW5nQWdncmVnYXRlOiBQYWdpbmdNYW5hZ2VyLFxuXHRcdFx0XHRmb3JtYXRpb25BZ2dyZWdhdGU6IEZvcm1hdGlvbkFnZ3JlZ2F0ZSxcblx0XHRcdFx0c291cmNlTWFuYWdlcjogU291cmNlTWFuYWdlcixcblx0XHRcdFx0dmVydGljYWxGb3JtYXRpb246IFZlcnRpY2FsRm9ybWF0aW9uLFxuXHRcdFx0XHRzdW1tYXJpZXNNYW5hZ2VyOiBTdW1tYXJpZXNNYW5hZ2VyLFxuXHRcdFx0XHRzb3J0ZXJDb2xsZWN0aW9uOiBTb3J0ZXJDb2xsZWN0aW9uLFxuXHRcdFx0XHRmaWx0ZXJDb2xsZWN0aW9uOiBGaWx0ZXJNYW5hZ2VyLFxuXHRcdFx0XHRzZWFyY2hNYW5hZ2VyOiBTZWFyY2hNYW5hZ2VyLFxuXHRcdFx0XHRmaWVsZENvbGxlY3Rpb246IEZpZWxkQ29sbGVjdGlvbikge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCAnU3RydWN0dXJlQWdncmVnYXRlJyk7XG5cdFx0dGhpcy5wYWdpbmdNYW5hZ2VyID0gcGFnaW5nQWdncmVnYXRlO1xuXHRcdHRoaXMuZm9ybWF0aW9uQWdncmVnYXRlID0gZm9ybWF0aW9uQWdncmVnYXRlO1xuXHRcdHRoaXMuc291cmNlTWFuYWdlciA9IHNvdXJjZU1hbmFnZXI7XG5cdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbiA9IHZlcnRpY2FsRm9ybWF0aW9uO1xuXHRcdHRoaXMuc3VtbWFyaWVzTWFuYWdlciA9IHN1bW1hcmllc01hbmFnZXI7XG5cdFx0dGhpcy5zb3J0ZXJDb2xsZWN0aW9uID0gc29ydGVyQ29sbGVjdGlvbjtcblx0XHR0aGlzLmZpbHRlck1hbmFnZXIgPSBmaWx0ZXJDb2xsZWN0aW9uO1xuXHRcdHRoaXMuc2VhcmNoTWFuYWdlciA9IHNlYXJjaE1hbmFnZXI7XG5cdFx0dGhpcy5maWVsZENvbGxlY3Rpb24gPSBmaWVsZENvbGxlY3Rpb247XG5cdH1cblxuXHRjcmVhdGVFdmVudCgpOiBUeXBlPEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXHRcdHJldHVybiBTdHJ1Y3R1cmVDcmVhdGVkQWdncmVnYXRlRXZlbnQ7XG5cdH1cblxuXHRpbml0KCk6IHZvaWQge1xuXHRcdHRoaXMuaW5pdFRoZW1lKCk7XG5cdH1cblxuXHRzZXRWZXJ0aWNhbEZvcm1hdGlvbkVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb24uc2V0RW5hYmxlZChlbmFibGVkKTtcblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXHR9XG5cblx0Z2V0VmVydGljYWxGb3JtYXRpb24oKTogVmVydGljYWxGb3JtYXRpb24ge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uO1xuXHR9XG5cblx0c2V0U3VtbWFyaWVzRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdHRoaXMuc3VtbWFyaWVzTWFuYWdlci5zZXRFbmFibGVkKGVuYWJsZWQpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblxuXHRcdHJldHVybiB0aGlzLmdldEV2ZW50cygpO1xuXHR9XG5cblx0c2V0T3JpZ2luKGl0ZW1zOiBBcnJheTxhbnk+KTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2V0T3JpZ2luKGl0ZW1zLCB0aGlzLmdldElkKCkpXG5cdFx0KTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5nZXRFdmVudHMoKTtcblx0fVxuXG5cdGVkaXRJdGVtKGVkaXRQYXJhbXM6IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zKTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdGNvbnN0IGl0ZW1JZCA9IGVkaXRQYXJhbXMuZ2V0SXRlbUlkKCksXG5cdFx0XHRmaWVsZElkID0gZWRpdFBhcmFtcy5nZXRDb2x1bW5GaWVsZElkKCksXG5cdFx0XHRmaWVsZCA9IHRoaXMuZmllbGRDb2xsZWN0aW9uLmdldEZpZWxkKGZpZWxkSWQgYXMgYW55KSwgLy8gYXMgRmllbGRJZFxuXHRcdFx0dmFsdWUgPSBlZGl0UGFyYW1zLmdldFZhbHVlKCk7XG5cblx0XHRjb25zdCBlZGl0SXRlbUV2ZW50cyA9IHRoaXMuc291cmNlTWFuYWdlci5lZGl0T3JpZ2luSXRlbShpdGVtSWQsIHZhbHVlLCBmaWVsZCwgdGhpcy5nZXRJZCgpKTtcblxuXHRcdGVkaXRJdGVtRXZlbnRzLmZvckVhY2goKGUpID0+IHRoaXMuYWRkRXZlbnQoZSkpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblxuXHRcdHJldHVybiB0aGlzLmdldEV2ZW50cygpO1xuXHR9XG5cblx0c2V0SGVpZ2h0KGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG5cblx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLnNldFZpZXdwb3J0SGVpZ2h0KGhlaWdodCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZUJhc2VkT25WaXJ0dWFsU2Nyb2xsKCk7XG5cdH1cblxuXHRzZXRUaGVtZSh0aGVtZTogU2NoZW1hVGhlbWUpOiB2b2lkIHtcblxuXHRcdC8vICMxNzA3IE1vdmUgdG8gU2NoZW1lQWdncmVnYXRlXG5cdFx0aWYgKHRoZW1lID09PSBTY2hlbWFUaGVtZS5NQVRFUklBTCkge1xuXHRcdFx0dGhpcy5nZXRWZXJ0aWNhbEZvcm1hdGlvbigpLnNldFJvd0hlaWdodCg1Mik7XG5cdFx0fVxuXG5cdFx0aWYgKHRoZW1lID09PSBTY2hlbWFUaGVtZS5HRU5FUklDKSB7XG5cdFx0XHR0aGlzLmdldFZlcnRpY2FsRm9ybWF0aW9uKCkuc2V0Um93SGVpZ2h0KDQyKTtcblx0XHR9XG5cblx0XHRpZiAodGhlbWUgPT09IFNjaGVtYVRoZW1lLkZBQlJJQykge1xuXHRcdFx0dGhpcy5nZXRWZXJ0aWNhbEZvcm1hdGlvbigpLnNldFJvd0hlaWdodCgzNik7XG5cdFx0fVxuXG5cdFx0aWYgKHRoZW1lID09PSBTY2hlbWFUaGVtZS5MSUdIVCkge1xuXHRcdFx0dGhpcy5nZXRWZXJ0aWNhbEZvcm1hdGlvbigpLnNldFJvd0hlaWdodCg1Nik7XG5cdFx0fVxuXG5cdFx0aWYgKHRoZW1lID09PSBTY2hlbWFUaGVtZS5EQVJLKSB7XG5cdFx0XHR0aGlzLmdldFZlcnRpY2FsRm9ybWF0aW9uKCkuc2V0Um93SGVpZ2h0KDM4KTtcblx0XHR9XG5cdH1cblxuXHRzZXRGb3JtYXRpb24oZm9ybWF0aW9uOiBGb3JtYXRpb25BZ2dyZWdhdGUpOiB2b2lkIHtcblx0XHR0aGlzLmZvcm1hdGlvbkFnZ3JlZ2F0ZSA9IGZvcm1hdGlvbjtcblx0fVxuXG5cdHNldFNjcm9sbFBvc2l0aW9uKHBvc2l0aW9uOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLnNldFNjcm9sbFBvc2l0aW9uKHBvc2l0aW9uKTtcblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZUJhc2VkT25WaXJ0dWFsU2Nyb2xsKCk7XG5cdH1cblxuXHRnZXRGb3JtYXRpb24oKTogRm9ybWF0aW9uQWdncmVnYXRlIHtcblx0XHRyZXR1cm4gdGhpcy5mb3JtYXRpb25BZ2dyZWdhdGU7XG5cdH1cblxuXHRnZXRQYWdpbmcoKTogUGFnaW5nTWFuYWdlciB7XG5cdFx0cmV0dXJuIHRoaXMucGFnaW5nTWFuYWdlcjtcblx0fVxuXG5cdGNoYW5nZVBhZ2luZyhjb25maWc6IFBhZ2luZ0NvbmZpZykge1xuXHRcdHRoaXMucGFnaW5nTWFuYWdlci5jaGFuZ2UoY29uZmlnKTtcblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXHR9XG5cblx0c2V0UGFnaW5nKHBhZ2luZzogUGFnaW5nTWFuYWdlcik6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nTWFuYWdlciA9IHBhZ2luZztcblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXHR9XG5cblx0bmV4dFBhZ2UoKTogdm9pZCB7XG5cblx0XHR0aGlzLnBhZ2luZ01hbmFnZXIubmV4dFBhZ2UoKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cdH1cblxuXHRwcmV2UGFnZSgpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ01hbmFnZXIucHJldlBhZ2UoKTtcblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXHR9XG5cblx0Y2hhbmdlUGFnZVNpemUocGFnZVNpemU6IG51bWJlcik6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHRjb25zdCBwYWdpbmdFdmVudHMgPSB0aGlzLnBhZ2luZ01hbmFnZXIuY2hhbmdlUGFnZVNpemUocGFnZVNpemUpO1xuXG5cdFx0Ly8gVE9ET1xuXHRcdHBhZ2luZ0V2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuXHRcdFx0dGhpcy5hZGRFdmVudChldmVudCk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RXZlbnRzKCk7XG5cdH1cblxuXHRnZXRFbnRpdGllcygpOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlTWFuYWdlci5nZXRTbGljZWRFbnRpdGllcygpO1xuXHR9XG5cblx0Z2V0U291cmNlKCk6IFNvdXJjZU1hbmFnZXIge1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZU1hbmFnZXI7XG5cdH1cblxuXHRjcmVhdGVGaWVsZHMoY29sdW1uczogQXJyYXk8Q29sdW1uQ29uZmlnPik6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cdFx0dGhpcy5maWVsZENvbGxlY3Rpb24uaW5pdEZpZWxkcyhjb2x1bW5zKTtcblxuXHRcdGNvbnN0IHR5cGVGaWVsZHMgPSB0aGlzLmZpZWxkQ29sbGVjdGlvbi5nZXRBbGxGaWVsZHMoKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHRuZXcgRmllbGRzSW5pdGVkQWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCBjb2x1bW5zLCB0eXBlRmllbGRzKVxuXHRcdCk7XG5cblx0XHRyZXR1cm4gdGhpcy5nZXRFdmVudHMoKTtcblx0fVxuXG5cdHNldFNvcnRpbmdDb25maWcoY29uZmlnOiBTb3J0aW5nQ29uZmlnKTogdm9pZCB7XG5cdFx0dGhpcy5zb3J0ZXJDb2xsZWN0aW9uLnNldENvbmZpZyhjb25maWcpO1xuXHR9XG5cblx0dG9nZ2xlU29ydChmaWVsZElkOiBGaWVsZElkKTogQXJyYXk8U3RydWN0dXJlU29ydGVyPiB7XG5cblx0XHRjb25zdCBmaWVsZCA9IHRoaXMuZmllbGRDb2xsZWN0aW9uLmdldEZpZWxkKGZpZWxkSWQpO1xuXG5cdFx0dGhpcy5zb3J0ZXJDb2xsZWN0aW9uLnRvZ2dsZShmaWVsZCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIHRoaXMuc29ydGVyQ29sbGVjdGlvbi5nZXRBbGwoKTtcblx0fVxuXG5cdHNldFNvcnRPcmRlcihmaWVsZElkOiBGaWVsZElkLCBzb3J0T3JkZXI6IFNvcnRPcmRlcik6IEFycmF5PFN0cnVjdHVyZVNvcnRlcj4ge1xuXG5cdFx0Y29uc3QgZmllbGQgPSB0aGlzLmZpZWxkQ29sbGVjdGlvbi5nZXRGaWVsZChmaWVsZElkKTtcblxuXHRcdHRoaXMuc29ydGVyQ29sbGVjdGlvbi5zZXRTb3J0T3JkZXIoZmllbGQsIHNvcnRPcmRlcik7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIHRoaXMuc29ydGVyQ29sbGVjdGlvbi5nZXRBbGwoKTtcblx0fVxuXG5cdHNldEZpbHRlckNvbmZpZyhjb25maWc6IEZpbHRlckNvbmZpZyk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyTWFuYWdlci5nZXRTZXR0aW5ncygpLnNldEZpbHRlckNvbmZpZyhjb25maWcpO1xuXHR9XG5cblx0c2V0U2VhcmNoaW5nQ29uZmlnKGNvbmZpZzogU2VhcmNoQ29uZmlnKTogdm9pZCB7XG5cdFx0dGhpcy5maWx0ZXJNYW5hZ2VyLmdldFNldHRpbmdzKCkuc2V0U2VhcmNoaW5nQ29uZmlnKGNvbmZpZyk7XG5cdH1cblxuXHRzZXRRdWlja0ZpbHRlcnNDb25maWcoY29uZmlnOiBRdWlja0ZpbHRlcnNDb25maWcpOiB2b2lkIHtcblx0XHR0aGlzLmZpbHRlck1hbmFnZXIuZ2V0U2V0dGluZ3MoKS5zZXRRdWlja0ZpbHRlcnNDb25maWcoY29uZmlnKTtcblx0fVxuXG5cdHRvZ2dsZUZpbHRlcihmaWVsZElkOiBGaWVsZElkLCBleHRlcm5hbEZpbHRlcklkOiBzdHJpbmcsIGZpbHRlclZhbHVlOiBzdHJpbmcpOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdGNvbnN0IGZpZWxkID0gdGhpcy5maWVsZENvbGxlY3Rpb24uZ2V0RmllbGQoZmllbGRJZCk7XG5cblx0XHQvLyBGaWVsZCBub3QgZm91bmRcblx0XHQvLyBUT0RPIHRocm93IGFnZ3JlZ2F0ZSBldmVudFxuXHRcdGlmIChmaWVsZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXG5cdFx0dGhpcy5maWx0ZXJNYW5hZ2VyLmFkZEZpbHRlcihmaWVsZCwgZXh0ZXJuYWxGaWx0ZXJJZCwgZmlsdGVyVmFsdWUpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblxuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdGFkZFNlYXJjaFBocmFzZShwaHJhc2U6IHN0cmluZyk6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXG5cdFx0Y29uc3QgZmllbGRzID0gdGhpcy5maWVsZENvbGxlY3Rpb24uZ2V0QWxsRmllbGRzKCk7XG5cblx0XHR0aGlzLnNlYXJjaE1hbmFnZXIuYWRkU2VhcmNoUGhyYXNlKGZpZWxkcywgcGhyYXNlKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRyZW1vdmVTZWFyY2hQaHJhc2UoKTogQXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHR0aGlzLnNlYXJjaE1hbmFnZXIucmVtb3ZlU2VhcmNoRmlsdGVycygpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblxuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlU291cmNlKCk6IHZvaWQge1xuXG5cdFx0aWYgKCF0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0T3JpZ2luKCkgfHwgIXRoaXMucGFnaW5nTWFuYWdlcikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFRPRE8gUmVmYWN0b3Jcblx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2V0RW50aXRpZXModGhpcy5zb3VyY2VNYW5hZ2VyLmdldE9yaWdpbigpKTtcblxuXHRcdC8vIGZpbHRlcmluZ1xuXHRcdHRoaXMuc291cmNlTWFuYWdlci5zZXRFbnRpdGllcyh0aGlzLmZpbHRlck1hbmFnZXIuZmlsdGVyKHRoaXMuc291cmNlTWFuYWdlci5nZXRFbnRpdGllcygpKSk7XG5cblx0XHQvLyBzZWFyY2hcblx0XHRjb25zdCBzZWFyY2hlZEVudGl0aWVzID0gdGhpcy5zZWFyY2hNYW5hZ2VyLnNlYXJjaCh0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0RW50aXRpZXMoKSk7XG5cdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnNldEVudGl0aWVzKHNlYXJjaGVkRW50aXRpZXMpO1xuXG5cdFx0Ly8gc29ydGluZ1xuXHRcdGNvbnN0IGVudHMgPSB0aGlzLnNvcnRlckNvbGxlY3Rpb24uc29ydCh0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0RW50aXRpZXMoKSk7XG5cdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnNldEVudGl0aWVzKGVudHMpO1xuXG5cdFx0Ly8gY2FsY3VsYXRlIGZpbHRlcmVkRW50aXRpZXNcblx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2V0UHJlcGFyZWRFbnRpdGllcygpO1xuXG5cdFx0dGhpcy5wYWdpbmdNYW5hZ2VyLnNldFNvdXJjZVNpemUodGhpcy5zb3VyY2VNYW5hZ2VyLmdldFByZXBhcmVkRW50aXRpZXMoKS5sZW5ndGgpO1xuXG5cdFx0dGhpcy5hZGRFdmVudChuZXcgU3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSwgZW50cykpO1xuXG5cdFx0Ly8gc3VtbWFyaWVzXG5cdFx0Y29uc3Qgc3VtbWFyaWVzRXZlbnRzID0gdGhpcy5zdW1tYXJpZXNNYW5hZ2VyLmNhbGN1bGF0ZShcblx0XHRcdHRoaXMuZmllbGRDb2xsZWN0aW9uLmdldEFsbEZpZWxkcygpLFxuXHRcdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLmdldEVudGl0aWVzKClcblx0XHQpO1xuXG5cdFx0c3VtbWFyaWVzRXZlbnRzLmZvckVhY2goKGFlOiBBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4pID0+IHtcblx0XHRcdHRoaXMuYWRkRXZlbnQoYWUpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gcGFnaW5nXG5cdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnNldEVudGl0aWVzKHRoaXMucGFnaW5nTWFuYWdlci5zYW1wbGUodGhpcy5zb3VyY2VNYW5hZ2VyLmdldEVudGl0aWVzKCkpKTtcblxuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb24uc2V0U291cmNlU2l6ZSh0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0RW50aXRpZXMoKS5sZW5ndGgpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2VCYXNlZE9uVmlydHVhbFNjcm9sbCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVTb3VyY2VCYXNlZE9uVmlydHVhbFNjcm9sbCgpOiB2b2lkIHtcblxuXHRcdGlmICh0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLmlzRW5hYmxlZCgpKSB7XG5cblx0XHRcdGNvbnN0IHJhbmdlID0gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvbi5nZXRSYW5nZSgpO1xuXG5cdFx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2V0U2xpY2VkRW50aXRpZXMoXG5cdFx0XHRcdHRoaXMuc291cmNlTWFuYWdlci5nZXRFbnRpdGllcygpLnNsaWNlKHJhbmdlLmdldFN0YXJ0KCksIHJhbmdlLmdldEVuZCgpKVxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnNldFNsaWNlZEVudGl0aWVzKFxuXHRcdFx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0RW50aXRpZXMoKVxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGluaXRUaGVtZSgpIHtcblxuXHRcdC8vIFRPRE9cblx0XHRjb25zdCB0aGVtZSA9IFNjaGVtYUFnZ3JlZ2F0ZS5ERUZBVUxUX1RIRU1FO1xuXG5cdFx0dGhpcy5zZXRUaGVtZSh0aGVtZSk7XG5cdH1cblxufVxuIl19