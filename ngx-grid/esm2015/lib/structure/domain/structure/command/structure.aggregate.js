/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Aggregate } from '@generic-ui/hermes';
import { FormationAggregate } from '../../formation/command/formation-aggregate';
import { SchemaAggregate } from '../../schema/command/schema-aggregate';
export class StructureAggregate extends Aggregate {
    /**
     * @param {?} structureId
     * @param {?} paging
     * @param {?} source
     * @param {?} verticalFormation
     * @param {?} aggregationManager
     * @param {?} sorterContainer
     * @param {?} filterContainer
     * @param {?} fieldContainer
     */
    constructor(structureId, paging, source, verticalFormation, aggregationManager, sorterContainer, filterContainer, fieldContainer) {
        super(structureId);
        this.formation = FormationAggregate.default();
        this.schema = SchemaAggregate.default();
        this.search = false;
        this.quickFilters = false;
        this.paging = paging;
        this.sourceCoordinator = source;
        this.verticalFormation = verticalFormation;
        this.aggregationManager = aggregationManager;
        this.sorterContainer = sorterContainer;
        this.filterContainer = filterContainer;
        this.fieldContainer = fieldContainer;
    }
    // TODO Get rid of
    /**
     * @param {?} uid
     * @param {?} paging
     * @param {?} sourceCoordinator
     * @param {?} verticalFormation
     * @param {?} aggregationManager
     * @param {?} sorterContainer
     * @param {?} filterContainer
     * @param {?} fieldContainer
     * @return {?}
     */
    static default(uid, paging, sourceCoordinator, verticalFormation, aggregationManager, sorterContainer, filterContainer, fieldContainer) {
        return new StructureAggregate(uid, paging, sourceCoordinator, verticalFormation, aggregationManager, sorterContainer, filterContainer, fieldContainer);
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
        this.addEvent(this.sourceCoordinator.setOrigin(items, this.getId()));
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
        const field = this.fieldContainer.getField((/** @type {?} */ (fieldId)));
        /** @type {?} */
        const // as FieldId
        value = editParams.getValue();
        /** @type {?} */
        const editItemEvents = this.sourceCoordinator.editOriginItem(itemId, value, field, this.getId());
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
        this.formation = formation;
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
        return this.formation;
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
        const sourceSize = this.sourceCoordinator.getOriginSize();
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
        return this.sourceCoordinator.getSlicedEntities();
    }
    /**
     * @return {?}
     */
    getSource() {
        return this.sourceCoordinator;
    }
    /**
     * @param {?} columns
     * @return {?}
     */
    createFields(columns) {
        this.fieldContainer.initFields(columns);
        // TODO Should throw event fields created
        return this.fieldContainer.getAllFields();
    }
    /**
     * @param {?} config
     * @return {?}
     */
    setSortingConfig(config) {
        this.sorterContainer.setConfig(config);
    }
    /**
     * @param {?} fieldId
     * @return {?}
     */
    toggleSort(fieldId) {
        /** @type {?} */
        const field = this.fieldContainer.getField(fieldId);
        this.sorterContainer.toggle(field);
        this.calculateSource();
        return this.sorterContainer.getAll();
    }
    /**
     * @param {?} config
     * @return {?}
     */
    setFilterConfig(config) {
        this.filterContainer.setConfig(config);
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
        const field = this.fieldContainer.getField(fieldId);
        // Field not found
        // TODO throw aggregate event
        if (field === undefined) {
            return [];
        }
        this.filterContainer.addFilter(field, externalFilterId, filterValue);
        this.calculateSource();
        return [];
    }
    /**
     * @private
     * @return {?}
     */
    calculateSource() {
        if (!this.sourceCoordinator.getOrigin() || !this.paging) {
            return;
        }
        // TODO Refactor
        this.sourceCoordinator.setEntities(this.sourceCoordinator.getOrigin());
        // aggregations
        /** @type {?} */
        const aggregationEvents = this.aggregationManager.calculate(this.fieldContainer.getAllFields(), this.sourceCoordinator.getEntities());
        aggregationEvents.forEach((/**
         * @param {?} ae
         * @return {?}
         */
        (ae) => {
            this.addEvent(ae);
        }));
        // filtering
        this.sourceCoordinator.setEntities(this.filterContainer.filter(this.sourceCoordinator.getEntities()));
        // search
        // sorting
        this.sourceCoordinator.setEntities(this.sorterContainer.sort(this.sourceCoordinator.getEntities()));
        // paging
        this.sourceCoordinator.setEntities(this.paging.sample(this.sourceCoordinator.getEntities()));
        this.verticalFormation.setSourceSize(this.sourceCoordinator.getEntities().length);
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
            this.sourceCoordinator.setSlicedEntities(this.sourceCoordinator.getEntities().slice(range.getStart(), range.getEnd()));
        }
        else {
            this.sourceCoordinator.setSlicedEntities(this.sourceCoordinator.getEntities());
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureAggregate.prototype.formation;
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
    StructureAggregate.prototype.sourceCoordinator;
    /**
     * @type {?}
     * @private
     */
    StructureAggregate.prototype.sorterContainer;
    /**
     * @type {?}
     * @private
     */
    StructureAggregate.prototype.filterContainer;
    /**
     * @type {?}
     * @private
     */
    StructureAggregate.prototype.verticalFormation;
    /**
     * @type {?}
     * @private
     */
    StructureAggregate.prototype.fieldContainer;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc3RydWN0dXJlLmFnZ3JlZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBK0IsTUFBTSxvQkFBb0IsQ0FBQztBQVM1RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNqRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFleEUsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFNBQVM7Ozs7Ozs7Ozs7O0lBNkJoRCxZQUFZLFdBQXdCLEVBQ2pDLE1BQXVCLEVBQ3ZCLE1BQXlCLEVBQ3pCLGlCQUFvQyxFQUNwQyxrQkFBc0MsRUFDdEMsZUFBZ0MsRUFDaEMsZUFBZ0MsRUFDaEMsY0FBOEI7UUFDaEMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBOUJaLGNBQVMsR0FBdUIsa0JBQWtCLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFN0QsV0FBTSxHQUFvQixlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7UUFnQnBELFdBQU0sR0FBWSxLQUFLLENBQUM7UUFFeEIsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFXckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQztRQUNoQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7UUFDM0MsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO1FBQzdDLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0lBQ3RDLENBQUM7Ozs7Ozs7Ozs7Ozs7SUExQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFnQixFQUFFLE1BQXVCLEVBQUUsaUJBQW9DLEVBQUUsaUJBQW9DLEVBQUUsa0JBQXNDLEVBQUcsZUFBZ0MsRUFBRSxlQUFnQyxFQUFFLGNBQThCO1FBQ2hSLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDeEosQ0FBQzs7OztJQTBDRCxvQkFBb0I7UUFDbkIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCxxQkFBcUIsQ0FBQyxPQUFnQjtRQUVyQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTVDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV2QixPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxLQUFpQjtRQUUxQixJQUFJLENBQUMsUUFBUSxDQUNaLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUNyRCxDQUFDO1FBRUYsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXZCLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLFVBQXlDOztjQUUzQyxNQUFNLEdBQUcsVUFBVSxDQUFDLFNBQVMsRUFBRTs7Y0FDcEMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRTs7Y0FDdkMsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLG1CQUFBLE9BQU8sRUFBTyxDQUFDOztjQUFFLGFBQWE7UUFDbkUsS0FBSyxHQUFHLFVBQVUsQ0FBQyxRQUFRLEVBQUU7O2NBRXhCLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVoRyxjQUFjLENBQUMsT0FBTzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFFaEQsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXZCLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLE1BQWM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Y0FFN0IsY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRTtRQUU1RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFekQsSUFBSSxDQUFDLG1DQUFtQyxFQUFFLENBQUM7SUFDNUMsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsU0FBNkI7UUFDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxRQUFnQjtRQUNqQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLG1DQUFtQyxFQUFFLENBQUM7SUFDNUMsQ0FBQzs7OztJQUVELFlBQVk7UUFDWCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBdUI7UUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsTUFBb0I7UUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLE1BQXVCO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsUUFBUTs7Y0FFRCxVQUFVLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRTtRQUV6RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVqQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxRQUFnQjs7Y0FFeEIsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztRQUV6RCxPQUFPO1FBQ1AsWUFBWSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFdkIsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ25ELENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsT0FBNEI7UUFDeEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFeEMseUNBQXlDO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLE1BQXFCO1FBQ3JDLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLE9BQWdCOztjQUVwQixLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBRW5ELElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRW5DLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV2QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsTUFBb0I7UUFDbkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFFRCxxQkFBcUIsQ0FBQyxNQUEwQjtRQUMvQyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxNQUFvQjtRQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDOUIsQ0FBQzs7Ozs7OztJQUVELFlBQVksQ0FBQyxPQUFnQixFQUFFLGdCQUF3QixFQUFFLFdBQW1COztjQUVyRSxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBRW5ELGtCQUFrQjtRQUNsQiw2QkFBNkI7UUFDN0IsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3hCLE9BQU8sRUFBRSxDQUFDO1NBQ1Y7UUFFRCxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFFckUsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXZCLE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQzs7Ozs7SUFFTyxlQUFlO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3hELE9BQU87U0FDUDtRQUVELGdCQUFnQjtRQUNoQixJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDOzs7Y0FHakUsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FDMUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsRUFDbEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUNwQztRQUVELGlCQUFpQixDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLEVBQWtCLEVBQUUsRUFBRTtZQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25CLENBQUMsRUFBQyxDQUFDO1FBRUgsWUFBWTtRQUNaLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUV0RyxTQUFTO1FBRVQsVUFBVTtRQUNWLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVwRyxTQUFTO1FBQ1QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTdGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWxGLElBQUksQ0FBQyxtQ0FBbUMsRUFBRSxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBRU8sbUNBQW1DO1FBRTFDLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxFQUFFOztrQkFFakMsS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUU7WUFFL0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUN2QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FDNUUsQ0FBQztTQUNGO2FBQU07WUFDTixJQUFJLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQ3ZDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FDcEMsQ0FBQztTQUNGO0lBQ0YsQ0FBQztDQUVEOzs7Ozs7SUF2UUEsdUNBQXFFOzs7OztJQUVyRSxvQ0FBNEQ7Ozs7O0lBRTVELG9DQUFnQzs7Ozs7SUFFaEMsK0NBQTZDOzs7OztJQUU3Qyw2Q0FBeUM7Ozs7O0lBRXpDLDZDQUF5Qzs7Ozs7SUFFekMsK0NBQTZDOzs7OztJQUU3Qyw0Q0FBdUM7Ozs7O0lBRXZDLGdEQUErQzs7Ozs7SUFFL0Msb0NBQWdDOzs7OztJQUVoQywwQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGUsIEFnZ3JlZ2F0ZUV2ZW50LCBBZ2dyZWdhdGVJZCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFBhZ2luZ0FnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uL3BhZ2luZy9jb21tYW5kL3BhZ2luZy5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgU291cmNlQ29vcmRpbmF0b3IgfSBmcm9tICcuLi8uLi9zb3VyY2UvY29tbWFuZC9zb3VyY2UtY29vcmRpbmF0b3InO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb24gfSBmcm9tICcuL3ZlcnRpY2FsLWZvcm1hdGlvbi92ZXJ0aWNhbC1mb3JtYXRpb24nO1xuaW1wb3J0IHsgQWdncmVnYXRpb25NYW5hZ2VyIH0gZnJvbSAnLi9hZ2dyZWdhdGlvbi9hZ2dyZWdhdGlvbi5tYW5hZ2VyJztcbmltcG9ydCB7IFNvcnRlckNvbnRhaW5lciB9IGZyb20gJy4vc29ydC9zb3J0ZXIuY29udGFpbmVyJztcbmltcG9ydCB7IEZpbHRlckNvbnRhaW5lciB9IGZyb20gJy4vZmlsdGVyL2ZpbHRlci5jb250YWluZXInO1xuaW1wb3J0IHsgRmllbGRDb250YWluZXIgfSBmcm9tICcuL2ZpZWxkL2ZpZWxkLmNvbnRhaW5lcic7XG5pbXBvcnQgeyBGb3JtYXRpb25BZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi9mb3JtYXRpb24vY29tbWFuZC9mb3JtYXRpb24tYWdncmVnYXRlJztcbmltcG9ydCB7IFNjaGVtYUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uL3NjaGVtYS9jb21tYW5kL3NjaGVtYS1hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1QYXJhbXMgfSBmcm9tICcuLi8uLi9zb3VyY2UvY29tbWFuZC9vcmlnaW4vZWRpdC9zdHJ1Y3R1cmUuZWRpdC1zb3VyY2UtaXRlbS5wYXJhbXMnO1xuaW1wb3J0IHsgUGFnaW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vcGFnaW5nL3BhZ2luZy1jb25maWcnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uL3NvdXJjZS9jb21tYW5kL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4vZmllbGQvZGF0YS10eXBlL2ZpZWxkJztcbmltcG9ydCB7IFNvcnRpbmdDb25maWcgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlL3NvcnRpbmctY29uZmlnJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuL2ZpZWxkL2RhdGEtdHlwZS9maWVsZC5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3J0ZXIgfSBmcm9tICcuL3NvcnQvc3RydWN0dXJlLnNvcnRlcic7XG5pbXBvcnQgeyBGaWx0ZXJDb25maWcgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlL2ZpbHRlci9maWx0ZXItY29uZmlnJztcbmltcG9ydCB7IFF1aWNrRmlsdGVyc0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvZmlsdGVyL3F1aWNrLWZpbHRlcnMuY29uZmlnJztcbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvc2VhcmNoL3NlYXJjaC1jb25maWcnO1xuXG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgZXh0ZW5kcyBBZ2dyZWdhdGUge1xuXG5cdC8vIFRPRE8gR2V0IHJpZCBvZlxuXHRzdGF0aWMgZGVmYXVsdCh1aWQ6IEFnZ3JlZ2F0ZUlkLCBwYWdpbmc6IFBhZ2luZ0FnZ3JlZ2F0ZSwgc291cmNlQ29vcmRpbmF0b3I6IFNvdXJjZUNvb3JkaW5hdG9yLCB2ZXJ0aWNhbEZvcm1hdGlvbjogVmVydGljYWxGb3JtYXRpb24sIGFnZ3JlZ2F0aW9uTWFuYWdlcjogQWdncmVnYXRpb25NYW5hZ2VyLCAgc29ydGVyQ29udGFpbmVyOiBTb3J0ZXJDb250YWluZXIsIGZpbHRlckNvbnRhaW5lcjogRmlsdGVyQ29udGFpbmVyLCBmaWVsZENvbnRhaW5lcjogRmllbGRDb250YWluZXIpOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUge1xuXHRcdHJldHVybiBuZXcgU3RydWN0dXJlQWdncmVnYXRlKHVpZCwgcGFnaW5nLCBzb3VyY2VDb29yZGluYXRvciwgdmVydGljYWxGb3JtYXRpb24sIGFnZ3JlZ2F0aW9uTWFuYWdlciwgc29ydGVyQ29udGFpbmVyLCBmaWx0ZXJDb250YWluZXIsIGZpZWxkQ29udGFpbmVyKTtcblx0fVxuXG5cdHByaXZhdGUgZm9ybWF0aW9uOiBGb3JtYXRpb25BZ2dyZWdhdGUgPSBGb3JtYXRpb25BZ2dyZWdhdGUuZGVmYXVsdCgpO1xuXG5cdHByaXZhdGUgc2NoZW1hOiBTY2hlbWFBZ2dyZWdhdGUgPSBTY2hlbWFBZ2dyZWdhdGUuZGVmYXVsdCgpO1xuXG5cdHByaXZhdGUgcGFnaW5nOiBQYWdpbmdBZ2dyZWdhdGU7XG5cblx0cHJpdmF0ZSBzb3VyY2VDb29yZGluYXRvcjogU291cmNlQ29vcmRpbmF0b3I7XG5cblx0cHJpdmF0ZSBzb3J0ZXJDb250YWluZXI6IFNvcnRlckNvbnRhaW5lcjtcblxuXHRwcml2YXRlIGZpbHRlckNvbnRhaW5lcjogRmlsdGVyQ29udGFpbmVyO1xuXG5cdHByaXZhdGUgdmVydGljYWxGb3JtYXRpb246IFZlcnRpY2FsRm9ybWF0aW9uO1xuXG5cdHByaXZhdGUgZmllbGRDb250YWluZXI6IEZpZWxkQ29udGFpbmVyO1xuXG5cdHByaXZhdGUgYWdncmVnYXRpb25NYW5hZ2VyOiBBZ2dyZWdhdGlvbk1hbmFnZXI7XG5cblx0cHJpdmF0ZSBzZWFyY2g6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIHF1aWNrRmlsdGVyczogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cGFnaW5nOiBQYWdpbmdBZ2dyZWdhdGUsXG5cdFx0XHRcdHNvdXJjZTogU291cmNlQ29vcmRpbmF0b3IsXG5cdFx0XHRcdHZlcnRpY2FsRm9ybWF0aW9uOiBWZXJ0aWNhbEZvcm1hdGlvbixcblx0XHRcdFx0YWdncmVnYXRpb25NYW5hZ2VyOiBBZ2dyZWdhdGlvbk1hbmFnZXIsXG5cdFx0XHRcdHNvcnRlckNvbnRhaW5lcjogU29ydGVyQ29udGFpbmVyLFxuXHRcdFx0XHRmaWx0ZXJDb250YWluZXI6IEZpbHRlckNvbnRhaW5lcixcblx0XHRcdFx0ZmllbGRDb250YWluZXI6IEZpZWxkQ29udGFpbmVyKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQpO1xuXHRcdHRoaXMucGFnaW5nID0gcGFnaW5nO1xuXHRcdHRoaXMuc291cmNlQ29vcmRpbmF0b3IgPSBzb3VyY2U7XG5cdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbiA9IHZlcnRpY2FsRm9ybWF0aW9uO1xuXHRcdHRoaXMuYWdncmVnYXRpb25NYW5hZ2VyID0gYWdncmVnYXRpb25NYW5hZ2VyO1xuXHRcdHRoaXMuc29ydGVyQ29udGFpbmVyID0gc29ydGVyQ29udGFpbmVyO1xuXHRcdHRoaXMuZmlsdGVyQ29udGFpbmVyID0gZmlsdGVyQ29udGFpbmVyO1xuXHRcdHRoaXMuZmllbGRDb250YWluZXIgPSBmaWVsZENvbnRhaW5lcjtcblx0fVxuXG5cdGdldFZlcnRpY2FsRm9ybWF0aW9uKCk6IFZlcnRpY2FsRm9ybWF0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy52ZXJ0aWNhbEZvcm1hdGlvbjtcblx0fVxuXG5cdHNldEFnZ3JlZ2F0aW9uRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudD4ge1xuXG5cdFx0dGhpcy5hZ2dyZWdhdGlvbk1hbmFnZXIuc2V0RW5hYmxlZChlbmFibGVkKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5nZXRFdmVudHMoKTtcblx0fVxuXG5cdHNldE9yaWdpbihpdGVtczogQXJyYXk8YW55Pik6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ+IHtcblxuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHR0aGlzLnNvdXJjZUNvb3JkaW5hdG9yLnNldE9yaWdpbihpdGVtcywgdGhpcy5nZXRJZCgpKVxuXHRcdCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RXZlbnRzKCk7XG5cdH1cblxuXHRlZGl0SXRlbShlZGl0UGFyYW1zOiBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcyk6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ+IHtcblxuXHRcdGNvbnN0IGl0ZW1JZCA9IGVkaXRQYXJhbXMuZ2V0SXRlbUlkKCksXG5cdFx0XHRmaWVsZElkID0gZWRpdFBhcmFtcy5nZXRDb2x1bW5GaWVsZElkKCksXG5cdFx0XHRmaWVsZCA9IHRoaXMuZmllbGRDb250YWluZXIuZ2V0RmllbGQoZmllbGRJZCBhcyBhbnkpLCAvLyBhcyBGaWVsZElkXG5cdFx0XHR2YWx1ZSA9IGVkaXRQYXJhbXMuZ2V0VmFsdWUoKTtcblxuXHRcdGNvbnN0IGVkaXRJdGVtRXZlbnRzID0gdGhpcy5zb3VyY2VDb29yZGluYXRvci5lZGl0T3JpZ2luSXRlbShpdGVtSWQsIHZhbHVlLCBmaWVsZCwgdGhpcy5nZXRJZCgpKTtcblxuXHRcdGVkaXRJdGVtRXZlbnRzLmZvckVhY2goKGUpID0+IHRoaXMuYWRkRXZlbnQoZSkpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblxuXHRcdHJldHVybiB0aGlzLmdldEV2ZW50cygpO1xuXHR9XG5cblx0c2V0SGVpZ2h0KGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5nZXRTY2hlbWEoKS5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuXHRcdGNvbnN0IHZpZXdwb3J0SGVpZ2h0ID0gdGhpcy5nZXRTY2hlbWEoKS5nZXRDb250YWluZXJIZWlnaHQoKTtcblxuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb24uc2V0Vmlld3BvcnRIZWlnaHQodmlld3BvcnRIZWlnaHQpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2VCYXNlZE9uVmlydHVhbFNjcm9sbCgpO1xuXHR9XG5cblx0c2V0Rm9ybWF0aW9uKGZvcm1hdGlvbjogRm9ybWF0aW9uQWdncmVnYXRlKTogdm9pZCB7XG5cdFx0dGhpcy5mb3JtYXRpb24gPSBmb3JtYXRpb247XG5cdH1cblxuXHRzZXRTY3JvbGxQb3NpdGlvbihwb3NpdGlvbjogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbi5zZXRTY3JvbGxQb3NpdGlvbihwb3NpdGlvbik7XG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2VCYXNlZE9uVmlydHVhbFNjcm9sbCgpO1xuXHR9XG5cblx0Z2V0Rm9ybWF0aW9uKCk6IEZvcm1hdGlvbkFnZ3JlZ2F0ZSB7XG5cdFx0cmV0dXJuIHRoaXMuZm9ybWF0aW9uO1xuXHR9XG5cblx0c2V0U2NoZW1hKHNjaGVtYTogU2NoZW1hQWdncmVnYXRlKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWEgPSBzY2hlbWE7XG5cdH1cblxuXHRnZXRTY2hlbWEoKTogU2NoZW1hQWdncmVnYXRlIHtcblx0XHRyZXR1cm4gdGhpcy5zY2hlbWE7XG5cdH1cblxuXHRnZXRQYWdpbmcoKTogUGFnaW5nQWdncmVnYXRlIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdpbmc7XG5cdH1cblxuXHRjaGFuZ2VQYWdpbmcoY29uZmlnOiBQYWdpbmdDb25maWcpIHtcblx0XHR0aGlzLnBhZ2luZy5jaGFuZ2UoY29uZmlnKTtcblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXHR9XG5cblx0c2V0UGFnaW5nKHBhZ2luZzogUGFnaW5nQWdncmVnYXRlKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmcgPSBwYWdpbmc7XG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblx0fVxuXG5cdG5leHRQYWdlKCk6IHZvaWQge1xuXG5cdFx0Y29uc3Qgc291cmNlU2l6ZSA9IHRoaXMuc291cmNlQ29vcmRpbmF0b3IuZ2V0T3JpZ2luU2l6ZSgpO1xuXG5cdFx0dGhpcy5wYWdpbmcubmV4dFBhZ2Uoc291cmNlU2l6ZSk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXHR9XG5cblx0cHJldlBhZ2UoKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmcucHJldlBhZ2UoKTtcblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXHR9XG5cblx0Y2hhbmdlUGFnZVNpemUocGFnZVNpemU6IG51bWJlcik6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ+IHtcblxuXHRcdGNvbnN0IHBhZ2luZ0V2ZW50cyA9IHRoaXMucGFnaW5nLmNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplKTtcblxuXHRcdC8vIFRPRE9cblx0XHRwYWdpbmdFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcblx0XHRcdHRoaXMuYWRkRXZlbnQoZXZlbnQpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblxuXHRcdHJldHVybiB0aGlzLmdldEV2ZW50cygpO1xuXHR9XG5cblx0Z2V0RW50aXRpZXMoKTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZUNvb3JkaW5hdG9yLmdldFNsaWNlZEVudGl0aWVzKCk7XG5cdH1cblxuXHRnZXRTb3VyY2UoKTogU291cmNlQ29vcmRpbmF0b3Ige1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZUNvb3JkaW5hdG9yO1xuXHR9XG5cblx0Y3JlYXRlRmllbGRzKGNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZz4pOiBBcnJheTxGaWVsZD4ge1xuXHRcdHRoaXMuZmllbGRDb250YWluZXIuaW5pdEZpZWxkcyhjb2x1bW5zKTtcblxuXHRcdC8vIFRPRE8gU2hvdWxkIHRocm93IGV2ZW50IGZpZWxkcyBjcmVhdGVkXG5cdFx0cmV0dXJuIHRoaXMuZmllbGRDb250YWluZXIuZ2V0QWxsRmllbGRzKCk7XG5cdH1cblxuXHRzZXRTb3J0aW5nQ29uZmlnKGNvbmZpZzogU29ydGluZ0NvbmZpZyk6IHZvaWQge1xuXHRcdHRoaXMuc29ydGVyQ29udGFpbmVyLnNldENvbmZpZyhjb25maWcpO1xuXHR9XG5cblx0dG9nZ2xlU29ydChmaWVsZElkOiBGaWVsZElkKTogQXJyYXk8U3RydWN0dXJlU29ydGVyPiB7XG5cblx0XHRjb25zdCBmaWVsZCA9IHRoaXMuZmllbGRDb250YWluZXIuZ2V0RmllbGQoZmllbGRJZCk7XG5cblx0XHR0aGlzLnNvcnRlckNvbnRhaW5lci50b2dnbGUoZmllbGQpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblxuXHRcdHJldHVybiB0aGlzLnNvcnRlckNvbnRhaW5lci5nZXRBbGwoKTtcblx0fVxuXG5cdHNldEZpbHRlckNvbmZpZyhjb25maWc6IEZpbHRlckNvbmZpZyk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyQ29udGFpbmVyLnNldENvbmZpZyhjb25maWcpO1xuXHR9XG5cblx0c2V0UXVpY2tGaWx0ZXJzQ29uZmlnKGNvbmZpZzogUXVpY2tGaWx0ZXJzQ29uZmlnKTogdm9pZCB7XG5cdFx0dGhpcy5xdWlja0ZpbHRlcnMgPSBjb25maWcuZW5hYmxlZDtcblx0fVxuXG5cdHNldFNlYXJjaGluZ0NvbmZpZyhjb25maWc6IFNlYXJjaENvbmZpZyk6IHZvaWQge1xuXHRcdHRoaXMuc2VhcmNoID0gY29uZmlnLmVuYWJsZWQ7XG5cdH1cblxuXHR0b2dnbGVGaWx0ZXIoZmllbGRJZDogRmllbGRJZCwgZXh0ZXJuYWxGaWx0ZXJJZDogc3RyaW5nLCBmaWx0ZXJWYWx1ZTogc3RyaW5nKTogQXJyYXk8QWdncmVnYXRlRXZlbnQ+IHtcblxuXHRcdGNvbnN0IGZpZWxkID0gdGhpcy5maWVsZENvbnRhaW5lci5nZXRGaWVsZChmaWVsZElkKTtcblxuXHRcdC8vIEZpZWxkIG5vdCBmb3VuZFxuXHRcdC8vIFRPRE8gdGhyb3cgYWdncmVnYXRlIGV2ZW50XG5cdFx0aWYgKGZpZWxkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cblx0XHR0aGlzLmZpbHRlckNvbnRhaW5lci5hZGRGaWx0ZXIoZmllbGQsIGV4dGVybmFsRmlsdGVySWQsIGZpbHRlclZhbHVlKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZVNvdXJjZSgpOiB2b2lkIHtcblxuXHRcdGlmICghdGhpcy5zb3VyY2VDb29yZGluYXRvci5nZXRPcmlnaW4oKSB8fCAhdGhpcy5wYWdpbmcpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBUT0RPIFJlZmFjdG9yXG5cdFx0dGhpcy5zb3VyY2VDb29yZGluYXRvci5zZXRFbnRpdGllcyh0aGlzLnNvdXJjZUNvb3JkaW5hdG9yLmdldE9yaWdpbigpKTtcblxuXHRcdC8vIGFnZ3JlZ2F0aW9uc1xuXHRcdGNvbnN0IGFnZ3JlZ2F0aW9uRXZlbnRzID0gdGhpcy5hZ2dyZWdhdGlvbk1hbmFnZXIuY2FsY3VsYXRlKFxuXHRcdFx0dGhpcy5maWVsZENvbnRhaW5lci5nZXRBbGxGaWVsZHMoKSxcblx0XHRcdHRoaXMuc291cmNlQ29vcmRpbmF0b3IuZ2V0RW50aXRpZXMoKVxuXHRcdCk7XG5cblx0XHRhZ2dyZWdhdGlvbkV2ZW50cy5mb3JFYWNoKChhZTogQWdncmVnYXRlRXZlbnQpID0+IHtcblx0XHRcdHRoaXMuYWRkRXZlbnQoYWUpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gZmlsdGVyaW5nXG5cdFx0dGhpcy5zb3VyY2VDb29yZGluYXRvci5zZXRFbnRpdGllcyh0aGlzLmZpbHRlckNvbnRhaW5lci5maWx0ZXIodGhpcy5zb3VyY2VDb29yZGluYXRvci5nZXRFbnRpdGllcygpKSk7XG5cblx0XHQvLyBzZWFyY2hcblxuXHRcdC8vIHNvcnRpbmdcblx0XHR0aGlzLnNvdXJjZUNvb3JkaW5hdG9yLnNldEVudGl0aWVzKHRoaXMuc29ydGVyQ29udGFpbmVyLnNvcnQodGhpcy5zb3VyY2VDb29yZGluYXRvci5nZXRFbnRpdGllcygpKSk7XG5cblx0XHQvLyBwYWdpbmdcblx0XHR0aGlzLnNvdXJjZUNvb3JkaW5hdG9yLnNldEVudGl0aWVzKHRoaXMucGFnaW5nLnNhbXBsZSh0aGlzLnNvdXJjZUNvb3JkaW5hdG9yLmdldEVudGl0aWVzKCkpKTtcblxuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb24uc2V0U291cmNlU2l6ZSh0aGlzLnNvdXJjZUNvb3JkaW5hdG9yLmdldEVudGl0aWVzKCkubGVuZ3RoKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlQmFzZWRPblZpcnR1YWxTY3JvbGwoKTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlU291cmNlQmFzZWRPblZpcnR1YWxTY3JvbGwoKTogdm9pZCB7XG5cblx0XHRpZiAodGhpcy52ZXJ0aWNhbEZvcm1hdGlvbi5pc0VuYWJsZWQoKSkge1xuXG5cdFx0XHRjb25zdCByYW5nZSA9IHRoaXMudmVydGljYWxGb3JtYXRpb24uZ2V0UmFuZ2UoKTtcblxuXHRcdFx0dGhpcy5zb3VyY2VDb29yZGluYXRvci5zZXRTbGljZWRFbnRpdGllcyhcblx0XHRcdFx0dGhpcy5zb3VyY2VDb29yZGluYXRvci5nZXRFbnRpdGllcygpLnNsaWNlKHJhbmdlLmdldFN0YXJ0KCksIHJhbmdlLmdldEVuZCgpKVxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zb3VyY2VDb29yZGluYXRvci5zZXRTbGljZWRFbnRpdGllcyhcblx0XHRcdFx0dGhpcy5zb3VyY2VDb29yZGluYXRvci5nZXRFbnRpdGllcygpXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=