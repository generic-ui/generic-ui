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
let StructureAggregate = class StructureAggregate extends Aggregate {
    /**
     * @param {?} structureId
     * @param {?} paging
     * @param {?} formationAggregate
     * @param {?} sourceManager
     * @param {?} verticalFormation
     * @param {?} aggregationManager
     * @param {?} sorterCollection
     * @param {?} filterCollection
     * @param {?} fieldCollection
     * @param {?} schema
     */
    constructor(structureId, paging, formationAggregate, sourceManager, verticalFormation, aggregationManager, sorterCollection, filterCollection, fieldCollection, schema) {
        super(structureId);
        this.search = false;
        this.quickFilters = false;
        this.paging = paging;
        this.formationAggregate = formationAggregate;
        this.sourceManager = sourceManager;
        this.verticalFormation = verticalFormation;
        this.aggregationManager = aggregationManager;
        this.sorterCollection = sorterCollection;
        this.filterCollection = filterCollection;
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
        return this.paging;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    changePaging(config) {
        this.paging.change(config);
        this.calculateSource();
    }
    /**
     * @param {?} paging
     * @return {?}
     */
    setPaging(paging) {
        this.paging = paging;
        this.calculateSource();
    }
    /**
     * @return {?}
     */
    nextPage() {
        /** @type {?} */
        const sourceSize = this.sourceManager.getOriginSize();
        this.paging.nextPage(sourceSize);
        this.calculateSource();
    }
    /**
     * @return {?}
     */
    prevPage() {
        this.paging.prevPage();
        this.calculateSource();
    }
    /**
     * @param {?} pageSize
     * @return {?}
     */
    changePageSize(pageSize) {
        /** @type {?} */
        const pagingEvents = this.paging.changePageSize(pageSize);
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
        this.filterCollection.setConfig(config);
    }
    /**
     * @param {?} config
     * @return {?}
     */
    setQuickFiltersConfig(config) {
        this.quickFilters = config.enabled;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    setSearchingConfig(config) {
        this.search = config.enabled;
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
        this.filterCollection.addFilter(field, externalFilterId, filterValue);
        this.calculateSource();
        return [];
    }
    /**
     * @private
     * @return {?}
     */
    calculateSource() {
        if (!this.sourceManager.getOrigin() || !this.paging) {
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
        this.sourceManager.setEntities(this.filterCollection.filter(this.sourceManager.getEntities()));
        // search
        // sorting
        this.sourceManager.setEntities(this.sorterCollection.sort(this.sourceManager.getEntities()));
        // paging
        this.sourceManager.setEntities(this.paging.sample(this.sourceManager.getEntities()));
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
    { type: FilterCollection },
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
        FilterCollection,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc3RydWN0dXJlLmFnZ3JlZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQStCLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTNGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7SUFjcEMsa0JBQWtCLFNBQWxCLGtCQUFtQixTQUFRLFNBQVM7Ozs7Ozs7Ozs7Ozs7SUF3QmhELFlBQVksV0FBd0IsRUFDakMsTUFBdUIsRUFDdkIsa0JBQXNDLEVBQ3RDLGFBQTRCLEVBQzVCLGlCQUFvQyxFQUNwQyxrQkFBc0MsRUFDdEMsZ0JBQWtDLEVBQ2xDLGdCQUFrQyxFQUNsQyxlQUFnQyxFQUNoQyxNQUF1QjtRQUN6QixLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFkWixX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QWE7UUFDVCxpQkFBaUI7UUFDaEIsa0JBQWtCO1FBQ3BCLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDakIsZUFBZTtRQUN4QixlQUFlO0dBakNkLGtCQUFrQixDQTZROUI7U0E3UVksa0JBQWtCOzs7Ozs7SUFFOUIsZ0RBQStDOzs7OztJQUUvQyxvQ0FBZ0M7Ozs7O0lBRWhDLG9DQUFnQzs7Ozs7SUFFaEMsMkNBQXFDOzs7OztJQUVyQyw4Q0FBMkM7Ozs7O0lBRTNDLDhDQUEyQzs7Ozs7SUFFM0MsK0NBQTZDOzs7OztJQUU3Qyw2Q0FBeUM7Ozs7O0lBRXpDLGdEQUErQzs7Ozs7SUFFL0Msb0NBQWdDOzs7OztJQUVoQywwQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGUsIEFnZ3JlZ2F0ZUV2ZW50LCBBZ2dyZWdhdGVJZCwgUm9vdEFnZ3JlZ2F0ZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFBhZ2luZ0FnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uL3BhZ2luZy9jb21tYW5kL3BhZ2luZy5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgU291cmNlTWFuYWdlciB9IGZyb20gJy4uLy4uL3NvdXJjZS9jb21tYW5kL3NvdXJjZS5tYW5hZ2VyJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uIH0gZnJvbSAnLi92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uJztcbmltcG9ydCB7IEFnZ3JlZ2F0aW9uTWFuYWdlciB9IGZyb20gJy4vYWdncmVnYXRpb24vYWdncmVnYXRpb24ubWFuYWdlcic7XG5pbXBvcnQgeyBTb3J0ZXJDb2xsZWN0aW9uIH0gZnJvbSAnLi9zb3J0L3NvcnRlci5jb2xsZWN0aW9uJztcbmltcG9ydCB7IEZpbHRlckNvbGxlY3Rpb24gfSBmcm9tICcuL2ZpbHRlci9maWx0ZXIuY29sbGVjdGlvbic7XG5pbXBvcnQgeyBGaWVsZENvbGxlY3Rpb24gfSBmcm9tICcuL2ZpZWxkL2ZpZWxkLmNvbGxlY3Rpb24nO1xuaW1wb3J0IHsgRm9ybWF0aW9uQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vZm9ybWF0aW9uL2NvbW1hbmQvZm9ybWF0aW9uLWFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBTY2hlbWFBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi9zY2hlbWEvY29tbWFuZC9zY2hlbWEtYWdncmVnYXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zIH0gZnJvbSAnLi4vLi4vc291cmNlL2NvbW1hbmQvb3JpZ2luL2VkaXQvc3RydWN0dXJlLmVkaXQtc291cmNlLWl0ZW0ucGFyYW1zJztcbmltcG9ydCB7IFBhZ2luZ0NvbmZpZyB9IGZyb20gJy4uLy4uL3BhZ2luZy9wYWdpbmctY29uZmlnJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi9zb3VyY2UvY29tbWFuZC9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IENvbHVtbkNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuL2ZpZWxkL2RhdGEtdHlwZS9maWVsZCc7XG5pbXBvcnQgeyBTb3J0aW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9zb3J0aW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi9maWVsZC9kYXRhLXR5cGUvZmllbGQuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU29ydGVyIH0gZnJvbSAnLi9zb3J0L3N0cnVjdHVyZS5zb3J0ZXInO1xuaW1wb3J0IHsgRmlsdGVyQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9maWx0ZXIvZmlsdGVyLWNvbmZpZyc7XG5pbXBvcnQgeyBRdWlja0ZpbHRlcnNDb25maWcgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlL2ZpbHRlci9xdWljay1maWx0ZXJzLmNvbmZpZyc7XG5pbXBvcnQgeyBTZWFyY2hDb25maWcgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlL3NlYXJjaC9zZWFyY2gtY29uZmlnJztcblxuQFJvb3RBZ2dyZWdhdGVcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgZXh0ZW5kcyBBZ2dyZWdhdGUge1xuXG5cdHByaXZhdGUgZm9ybWF0aW9uQWdncmVnYXRlOiBGb3JtYXRpb25BZ2dyZWdhdGU7XG5cblx0cHJpdmF0ZSBzY2hlbWE6IFNjaGVtYUFnZ3JlZ2F0ZTtcblxuXHRwcml2YXRlIHBhZ2luZzogUGFnaW5nQWdncmVnYXRlO1xuXG5cdHByaXZhdGUgc291cmNlTWFuYWdlcjogU291cmNlTWFuYWdlcjtcblxuXHRwcml2YXRlIHNvcnRlckNvbGxlY3Rpb246IFNvcnRlckNvbGxlY3Rpb247XG5cblx0cHJpdmF0ZSBmaWx0ZXJDb2xsZWN0aW9uOiBGaWx0ZXJDb2xsZWN0aW9uO1xuXG5cdHByaXZhdGUgdmVydGljYWxGb3JtYXRpb246IFZlcnRpY2FsRm9ybWF0aW9uO1xuXG5cdHByaXZhdGUgZmllbGRDb2xsZWN0aW9uOiBGaWVsZENvbGxlY3Rpb247XG5cblx0cHJpdmF0ZSBhZ2dyZWdhdGlvbk1hbmFnZXI6IEFnZ3JlZ2F0aW9uTWFuYWdlcjtcblxuXHRwcml2YXRlIHNlYXJjaDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgcXVpY2tGaWx0ZXJzOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwYWdpbmc6IFBhZ2luZ0FnZ3JlZ2F0ZSxcblx0XHRcdFx0Zm9ybWF0aW9uQWdncmVnYXRlOiBGb3JtYXRpb25BZ2dyZWdhdGUsXG5cdFx0XHRcdHNvdXJjZU1hbmFnZXI6IFNvdXJjZU1hbmFnZXIsXG5cdFx0XHRcdHZlcnRpY2FsRm9ybWF0aW9uOiBWZXJ0aWNhbEZvcm1hdGlvbixcblx0XHRcdFx0YWdncmVnYXRpb25NYW5hZ2VyOiBBZ2dyZWdhdGlvbk1hbmFnZXIsXG5cdFx0XHRcdHNvcnRlckNvbGxlY3Rpb246IFNvcnRlckNvbGxlY3Rpb24sXG5cdFx0XHRcdGZpbHRlckNvbGxlY3Rpb246IEZpbHRlckNvbGxlY3Rpb24sXG5cdFx0XHRcdGZpZWxkQ29sbGVjdGlvbjogRmllbGRDb2xsZWN0aW9uLFxuXHRcdFx0XHRzY2hlbWE6IFNjaGVtYUFnZ3JlZ2F0ZSkge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkKTtcblx0XHR0aGlzLnBhZ2luZyA9IHBhZ2luZztcblx0XHR0aGlzLmZvcm1hdGlvbkFnZ3JlZ2F0ZSA9IGZvcm1hdGlvbkFnZ3JlZ2F0ZTtcblx0XHR0aGlzLnNvdXJjZU1hbmFnZXIgPSBzb3VyY2VNYW5hZ2VyO1xuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb24gPSB2ZXJ0aWNhbEZvcm1hdGlvbjtcblx0XHR0aGlzLmFnZ3JlZ2F0aW9uTWFuYWdlciA9IGFnZ3JlZ2F0aW9uTWFuYWdlcjtcblx0XHR0aGlzLnNvcnRlckNvbGxlY3Rpb24gPSBzb3J0ZXJDb2xsZWN0aW9uO1xuXHRcdHRoaXMuZmlsdGVyQ29sbGVjdGlvbiA9IGZpbHRlckNvbGxlY3Rpb247XG5cdFx0dGhpcy5maWVsZENvbGxlY3Rpb24gPSBmaWVsZENvbGxlY3Rpb247XG5cdFx0dGhpcy5zY2hlbWEgPSBzY2hlbWE7XG5cdH1cblxuXHRnZXRWZXJ0aWNhbEZvcm1hdGlvbigpOiBWZXJ0aWNhbEZvcm1hdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxGb3JtYXRpb247XG5cdH1cblxuXHRzZXRBZ2dyZWdhdGlvbkVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ+IHtcblxuXHRcdHRoaXMuYWdncmVnYXRpb25NYW5hZ2VyLnNldEVuYWJsZWQoZW5hYmxlZCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RXZlbnRzKCk7XG5cdH1cblxuXHRzZXRPcmlnaW4oaXRlbXM6IEFycmF5PGFueT4pOiBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50PiB7XG5cblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnNldE9yaWdpbihpdGVtcywgdGhpcy5nZXRJZCgpKVxuXHRcdCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RXZlbnRzKCk7XG5cdH1cblxuXHRlZGl0SXRlbShlZGl0UGFyYW1zOiBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcyk6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ+IHtcblxuXHRcdGNvbnN0IGl0ZW1JZCA9IGVkaXRQYXJhbXMuZ2V0SXRlbUlkKCksXG5cdFx0XHRmaWVsZElkID0gZWRpdFBhcmFtcy5nZXRDb2x1bW5GaWVsZElkKCksXG5cdFx0XHRmaWVsZCA9IHRoaXMuZmllbGRDb2xsZWN0aW9uLmdldEZpZWxkKGZpZWxkSWQgYXMgYW55KSwgLy8gYXMgRmllbGRJZFxuXHRcdFx0dmFsdWUgPSBlZGl0UGFyYW1zLmdldFZhbHVlKCk7XG5cblx0XHRjb25zdCBlZGl0SXRlbUV2ZW50cyA9IHRoaXMuc291cmNlTWFuYWdlci5lZGl0T3JpZ2luSXRlbShpdGVtSWQsIHZhbHVlLCBmaWVsZCwgdGhpcy5nZXRJZCgpKTtcblxuXHRcdGVkaXRJdGVtRXZlbnRzLmZvckVhY2goKGUpID0+IHRoaXMuYWRkRXZlbnQoZSkpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblxuXHRcdHJldHVybiB0aGlzLmdldEV2ZW50cygpO1xuXHR9XG5cblx0c2V0SGVpZ2h0KGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5nZXRTY2hlbWEoKS5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuXHRcdGNvbnN0IHZpZXdwb3J0SGVpZ2h0ID0gdGhpcy5nZXRTY2hlbWEoKS5nZXRDb250YWluZXJIZWlnaHQoKTtcblxuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb24uc2V0Vmlld3BvcnRIZWlnaHQodmlld3BvcnRIZWlnaHQpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2VCYXNlZE9uVmlydHVhbFNjcm9sbCgpO1xuXHR9XG5cblx0c2V0Rm9ybWF0aW9uKGZvcm1hdGlvbjogRm9ybWF0aW9uQWdncmVnYXRlKTogdm9pZCB7XG5cdFx0dGhpcy5mb3JtYXRpb25BZ2dyZWdhdGUgPSBmb3JtYXRpb247XG5cdH1cblxuXHRzZXRTY3JvbGxQb3NpdGlvbihwb3NpdGlvbjogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbi5zZXRTY3JvbGxQb3NpdGlvbihwb3NpdGlvbik7XG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2VCYXNlZE9uVmlydHVhbFNjcm9sbCgpO1xuXHR9XG5cblx0Z2V0Rm9ybWF0aW9uKCk6IEZvcm1hdGlvbkFnZ3JlZ2F0ZSB7XG5cdFx0cmV0dXJuIHRoaXMuZm9ybWF0aW9uQWdncmVnYXRlO1xuXHR9XG5cblx0c2V0U2NoZW1hKHNjaGVtYTogU2NoZW1hQWdncmVnYXRlKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWEgPSBzY2hlbWE7XG5cdH1cblxuXHRnZXRTY2hlbWEoKTogU2NoZW1hQWdncmVnYXRlIHtcblx0XHRyZXR1cm4gdGhpcy5zY2hlbWE7XG5cdH1cblxuXHRnZXRQYWdpbmcoKTogUGFnaW5nQWdncmVnYXRlIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdpbmc7XG5cdH1cblxuXHRjaGFuZ2VQYWdpbmcoY29uZmlnOiBQYWdpbmdDb25maWcpIHtcblx0XHR0aGlzLnBhZ2luZy5jaGFuZ2UoY29uZmlnKTtcblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXHR9XG5cblx0c2V0UGFnaW5nKHBhZ2luZzogUGFnaW5nQWdncmVnYXRlKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmcgPSBwYWdpbmc7XG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblx0fVxuXG5cdG5leHRQYWdlKCk6IHZvaWQge1xuXG5cdFx0Y29uc3Qgc291cmNlU2l6ZSA9IHRoaXMuc291cmNlTWFuYWdlci5nZXRPcmlnaW5TaXplKCk7XG5cblx0XHR0aGlzLnBhZ2luZy5uZXh0UGFnZShzb3VyY2VTaXplKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cdH1cblxuXHRwcmV2UGFnZSgpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZy5wcmV2UGFnZSgpO1xuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cdH1cblxuXHRjaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudD4ge1xuXG5cdFx0Y29uc3QgcGFnaW5nRXZlbnRzID0gdGhpcy5wYWdpbmcuY2hhbmdlUGFnZVNpemUocGFnZVNpemUpO1xuXG5cdFx0Ly8gVE9ET1xuXHRcdHBhZ2luZ0V2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuXHRcdFx0dGhpcy5hZGRFdmVudChldmVudCk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RXZlbnRzKCk7XG5cdH1cblxuXHRnZXRFbnRpdGllcygpOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlTWFuYWdlci5nZXRTbGljZWRFbnRpdGllcygpO1xuXHR9XG5cblx0Z2V0U291cmNlKCk6IFNvdXJjZU1hbmFnZXIge1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZU1hbmFnZXI7XG5cdH1cblxuXHRjcmVhdGVGaWVsZHMoY29sdW1uczogQXJyYXk8Q29sdW1uQ29uZmlnPik6IEFycmF5PEZpZWxkPiB7XG5cdFx0dGhpcy5maWVsZENvbGxlY3Rpb24uaW5pdEZpZWxkcyhjb2x1bW5zKTtcblxuXHRcdC8vIFRPRE8gU2hvdWxkIHRocm93IGV2ZW50IGZpZWxkcyBjcmVhdGVkXG5cdFx0cmV0dXJuIHRoaXMuZmllbGRDb2xsZWN0aW9uLmdldEFsbEZpZWxkcygpO1xuXHR9XG5cblx0c2V0U29ydGluZ0NvbmZpZyhjb25maWc6IFNvcnRpbmdDb25maWcpOiB2b2lkIHtcblx0XHR0aGlzLnNvcnRlckNvbGxlY3Rpb24uc2V0Q29uZmlnKGNvbmZpZyk7XG5cdH1cblxuXHR0b2dnbGVTb3J0KGZpZWxkSWQ6IEZpZWxkSWQpOiBBcnJheTxTdHJ1Y3R1cmVTb3J0ZXI+IHtcblxuXHRcdGNvbnN0IGZpZWxkID0gdGhpcy5maWVsZENvbGxlY3Rpb24uZ2V0RmllbGQoZmllbGRJZCk7XG5cblx0XHR0aGlzLnNvcnRlckNvbGxlY3Rpb24udG9nZ2xlKGZpZWxkKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5zb3J0ZXJDb2xsZWN0aW9uLmdldEFsbCgpO1xuXHR9XG5cblx0c2V0RmlsdGVyQ29uZmlnKGNvbmZpZzogRmlsdGVyQ29uZmlnKTogdm9pZCB7XG5cdFx0dGhpcy5maWx0ZXJDb2xsZWN0aW9uLnNldENvbmZpZyhjb25maWcpO1xuXHR9XG5cblx0c2V0UXVpY2tGaWx0ZXJzQ29uZmlnKGNvbmZpZzogUXVpY2tGaWx0ZXJzQ29uZmlnKTogdm9pZCB7XG5cdFx0dGhpcy5xdWlja0ZpbHRlcnMgPSBjb25maWcuZW5hYmxlZDtcblx0fVxuXG5cdHNldFNlYXJjaGluZ0NvbmZpZyhjb25maWc6IFNlYXJjaENvbmZpZyk6IHZvaWQge1xuXHRcdHRoaXMuc2VhcmNoID0gY29uZmlnLmVuYWJsZWQ7XG5cdH1cblxuXHR0b2dnbGVGaWx0ZXIoZmllbGRJZDogRmllbGRJZCwgZXh0ZXJuYWxGaWx0ZXJJZDogc3RyaW5nLCBmaWx0ZXJWYWx1ZTogc3RyaW5nKTogQXJyYXk8QWdncmVnYXRlRXZlbnQ+IHtcblxuXHRcdGNvbnN0IGZpZWxkID0gdGhpcy5maWVsZENvbGxlY3Rpb24uZ2V0RmllbGQoZmllbGRJZCk7XG5cblx0XHQvLyBGaWVsZCBub3QgZm91bmRcblx0XHQvLyBUT0RPIHRocm93IGFnZ3JlZ2F0ZSBldmVudFxuXHRcdGlmIChmaWVsZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXG5cdFx0dGhpcy5maWx0ZXJDb2xsZWN0aW9uLmFkZEZpbHRlcihmaWVsZCwgZXh0ZXJuYWxGaWx0ZXJJZCwgZmlsdGVyVmFsdWUpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblxuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlU291cmNlKCk6IHZvaWQge1xuXG5cdFx0aWYgKCF0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0T3JpZ2luKCkgfHwgIXRoaXMucGFnaW5nKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gVE9ETyBSZWZhY3RvclxuXHRcdHRoaXMuc291cmNlTWFuYWdlci5zZXRFbnRpdGllcyh0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0T3JpZ2luKCkpO1xuXG5cdFx0Ly8gYWdncmVnYXRpb25zXG5cdFx0Y29uc3QgYWdncmVnYXRpb25FdmVudHMgPSB0aGlzLmFnZ3JlZ2F0aW9uTWFuYWdlci5jYWxjdWxhdGUoXG5cdFx0XHR0aGlzLmZpZWxkQ29sbGVjdGlvbi5nZXRBbGxGaWVsZHMoKSxcblx0XHRcdHRoaXMuc291cmNlTWFuYWdlci5nZXRFbnRpdGllcygpXG5cdFx0KTtcblxuXHRcdGFnZ3JlZ2F0aW9uRXZlbnRzLmZvckVhY2goKGFlOiBBZ2dyZWdhdGVFdmVudCkgPT4ge1xuXHRcdFx0dGhpcy5hZGRFdmVudChhZSk7XG5cdFx0fSk7XG5cblx0XHQvLyBmaWx0ZXJpbmdcblx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2V0RW50aXRpZXModGhpcy5maWx0ZXJDb2xsZWN0aW9uLmZpbHRlcih0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0RW50aXRpZXMoKSkpO1xuXG5cdFx0Ly8gc2VhcmNoXG5cblx0XHQvLyBzb3J0aW5nXG5cdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnNldEVudGl0aWVzKHRoaXMuc29ydGVyQ29sbGVjdGlvbi5zb3J0KHRoaXMuc291cmNlTWFuYWdlci5nZXRFbnRpdGllcygpKSk7XG5cblx0XHQvLyBwYWdpbmdcblx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2V0RW50aXRpZXModGhpcy5wYWdpbmcuc2FtcGxlKHRoaXMuc291cmNlTWFuYWdlci5nZXRFbnRpdGllcygpKSk7XG5cblx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLnNldFNvdXJjZVNpemUodGhpcy5zb3VyY2VNYW5hZ2VyLmdldEVudGl0aWVzKCkubGVuZ3RoKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlQmFzZWRPblZpcnR1YWxTY3JvbGwoKTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlU291cmNlQmFzZWRPblZpcnR1YWxTY3JvbGwoKTogdm9pZCB7XG5cblx0XHRpZiAodGhpcy52ZXJ0aWNhbEZvcm1hdGlvbi5pc0VuYWJsZWQoKSkge1xuXG5cdFx0XHRjb25zdCByYW5nZSA9IHRoaXMudmVydGljYWxGb3JtYXRpb24uZ2V0UmFuZ2UoKTtcblxuXHRcdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnNldFNsaWNlZEVudGl0aWVzKFxuXHRcdFx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0RW50aXRpZXMoKS5zbGljZShyYW5nZS5nZXRTdGFydCgpLCByYW5nZS5nZXRFbmQoKSlcblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc291cmNlTWFuYWdlci5zZXRTbGljZWRFbnRpdGllcyhcblx0XHRcdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLmdldEVudGl0aWVzKClcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==