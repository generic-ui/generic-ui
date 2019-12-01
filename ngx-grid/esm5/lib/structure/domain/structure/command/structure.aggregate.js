/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Aggregate } from '@generic-ui/hermes';
import { FormationAggregate } from '../../formation/command/formation-aggregate';
import { SchemaAggregate } from '../../schema/command/schema-aggregate';
var StructureAggregate = /** @class */ (function (_super) {
    tslib_1.__extends(StructureAggregate, _super);
    function StructureAggregate(structureId, paging, source, verticalFormation, aggregationManager, sorterContainer, filterContainer, fieldContainer) {
        var _this = _super.call(this, structureId) || this;
        _this.formation = FormationAggregate.default();
        _this.schema = SchemaAggregate.default();
        _this.search = false;
        _this.quickFilters = false;
        _this.paging = paging;
        _this.sourceCoordinator = source;
        _this.verticalFormation = verticalFormation;
        _this.aggregationManager = aggregationManager;
        _this.sorterContainer = sorterContainer;
        _this.filterContainer = filterContainer;
        _this.fieldContainer = fieldContainer;
        return _this;
    }
    // TODO Get rid of
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
    StructureAggregate.default = 
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
    function (uid, paging, sourceCoordinator, verticalFormation, aggregationManager, sorterContainer, filterContainer, fieldContainer) {
        return new StructureAggregate(uid, paging, sourceCoordinator, verticalFormation, aggregationManager, sorterContainer, filterContainer, fieldContainer);
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
        this.addEvent(this.sourceCoordinator.setOrigin(items, this.getId()));
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
        var field = this.fieldContainer.getField((/** @type {?} */ (fieldId)));
        /** @type {?} */
        var // as FieldId
        value = editParams.getValue();
        /** @type {?} */
        var editItemEvents = this.sourceCoordinator.editOriginItem(itemId, value, field, this.getId());
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
     * @param {?} formation
     * @return {?}
     */
    StructureAggregate.prototype.setFormation = /**
     * @param {?} formation
     * @return {?}
     */
    function (formation) {
        this.formation = formation;
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
        return this.formation;
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
        return this.paging;
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
        this.paging.change(config);
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
        this.paging = paging;
        this.calculateSource();
    };
    /**
     * @return {?}
     */
    StructureAggregate.prototype.nextPage = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var sourceSize = this.sourceCoordinator.getOriginSize();
        this.paging.nextPage(sourceSize);
        this.calculateSource();
    };
    /**
     * @return {?}
     */
    StructureAggregate.prototype.prevPage = /**
     * @return {?}
     */
    function () {
        this.paging.prevPage();
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
        var pagingEvents = this.paging.changePageSize(pageSize);
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
        return this.sourceCoordinator.getSlicedEntities();
    };
    /**
     * @return {?}
     */
    StructureAggregate.prototype.getSource = /**
     * @return {?}
     */
    function () {
        return this.sourceCoordinator;
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
        this.fieldContainer.initFields(columns);
        // TODO Should throw event fields created
        return this.fieldContainer.getAllFields();
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
        this.sorterContainer.setConfig(config);
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
        var field = this.fieldContainer.getField(fieldId);
        this.sorterContainer.toggle(field);
        this.calculateSource();
        return this.sorterContainer.getAll();
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
        this.filterContainer.setConfig(config);
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
        this.quickFilters = config.enabled;
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
        this.search = config.enabled;
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
        var field = this.fieldContainer.getField(fieldId);
        // Field not found
        // TODO throw aggregate event
        if (field === undefined) {
            return [];
        }
        this.filterContainer.addFilter(field, externalFilterId, filterValue);
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
        if (!this.sourceCoordinator.getOrigin() || !this.paging) {
            return;
        }
        // TODO Refactor
        this.sourceCoordinator.setEntities(this.sourceCoordinator.getOrigin());
        // aggregations
        /** @type {?} */
        var aggregationEvents = this.aggregationManager.calculate(this.fieldContainer.getAllFields(), this.sourceCoordinator.getEntities());
        aggregationEvents.forEach((/**
         * @param {?} ae
         * @return {?}
         */
        function (ae) {
            _this.addEvent(ae);
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
            this.sourceCoordinator.setSlicedEntities(this.sourceCoordinator.getEntities().slice(range.getStart(), range.getEnd()));
        }
        else {
            this.sourceCoordinator.setSlicedEntities(this.sourceCoordinator.getEntities());
        }
    };
    return StructureAggregate;
}(Aggregate));
export { StructureAggregate };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc3RydWN0dXJlLmFnZ3JlZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQStCLE1BQU0sb0JBQW9CLENBQUM7QUFTNUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDakYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBZXhFO0lBQXdDLDhDQUFTO0lBNkJoRCw0QkFBWSxXQUF3QixFQUNqQyxNQUF1QixFQUN2QixNQUF5QixFQUN6QixpQkFBb0MsRUFDcEMsa0JBQXNDLEVBQ3RDLGVBQWdDLEVBQ2hDLGVBQWdDLEVBQ2hDLGNBQThCO1FBUGpDLFlBUUMsa0JBQU0sV0FBVyxDQUFDLFNBUWxCO1FBdENPLGVBQVMsR0FBdUIsa0JBQWtCLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFN0QsWUFBTSxHQUFvQixlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7UUFnQnBELFlBQU0sR0FBWSxLQUFLLENBQUM7UUFFeEIsa0JBQVksR0FBWSxLQUFLLENBQUM7UUFXckMsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsS0FBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQztRQUNoQyxLQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7UUFDM0MsS0FBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO1FBQzdDLEtBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1FBQ3ZDLEtBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1FBQ3ZDLEtBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDOztJQUN0QyxDQUFDO0lBM0NELGtC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Ozs7O0lBdlFBLHVDQUFxRTs7Ozs7SUFFckUsb0NBQTREOzs7OztJQUU1RCxvQ0FBZ0M7Ozs7O0lBRWhDLCtDQUE2Qzs7Ozs7SUFFN0MsNkNBQXlDOzs7OztJQUV6Qyw2Q0FBeUM7Ozs7O0lBRXpDLCtDQUE2Qzs7Ozs7SUFFN0MsNENBQXVDOzs7OztJQUV2QyxnREFBK0M7Ozs7O0lBRS9DLG9DQUFnQzs7Ozs7SUFFaEMsMENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlLCBBZ2dyZWdhdGVFdmVudCwgQWdncmVnYXRlSWQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBQYWdpbmdBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi9wYWdpbmcvY29tbWFuZC9wYWdpbmcuYWdncmVnYXRlJztcbmltcG9ydCB7IFNvdXJjZUNvb3JkaW5hdG9yIH0gZnJvbSAnLi4vLi4vc291cmNlL2NvbW1hbmQvc291cmNlLWNvb3JkaW5hdG9yJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uIH0gZnJvbSAnLi92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uJztcbmltcG9ydCB7IEFnZ3JlZ2F0aW9uTWFuYWdlciB9IGZyb20gJy4vYWdncmVnYXRpb24vYWdncmVnYXRpb24ubWFuYWdlcic7XG5pbXBvcnQgeyBTb3J0ZXJDb250YWluZXIgfSBmcm9tICcuL3NvcnQvc29ydGVyLmNvbnRhaW5lcic7XG5pbXBvcnQgeyBGaWx0ZXJDb250YWluZXIgfSBmcm9tICcuL2ZpbHRlci9maWx0ZXIuY29udGFpbmVyJztcbmltcG9ydCB7IEZpZWxkQ29udGFpbmVyIH0gZnJvbSAnLi9maWVsZC9maWVsZC5jb250YWluZXInO1xuaW1wb3J0IHsgRm9ybWF0aW9uQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vZm9ybWF0aW9uL2NvbW1hbmQvZm9ybWF0aW9uLWFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBTY2hlbWFBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi9zY2hlbWEvY29tbWFuZC9zY2hlbWEtYWdncmVnYXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zIH0gZnJvbSAnLi4vLi4vc291cmNlL2NvbW1hbmQvb3JpZ2luL2VkaXQvc3RydWN0dXJlLmVkaXQtc291cmNlLWl0ZW0ucGFyYW1zJztcbmltcG9ydCB7IFBhZ2luZ0NvbmZpZyB9IGZyb20gJy4uLy4uL3BhZ2luZy9wYWdpbmctY29uZmlnJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi9zb3VyY2UvY29tbWFuZC9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IENvbHVtbkNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuL2ZpZWxkL2RhdGEtdHlwZS9maWVsZCc7XG5pbXBvcnQgeyBTb3J0aW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9zb3J0aW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi9maWVsZC9kYXRhLXR5cGUvZmllbGQuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU29ydGVyIH0gZnJvbSAnLi9zb3J0L3N0cnVjdHVyZS5zb3J0ZXInO1xuaW1wb3J0IHsgRmlsdGVyQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9maWx0ZXIvZmlsdGVyLWNvbmZpZyc7XG5pbXBvcnQgeyBRdWlja0ZpbHRlcnNDb25maWcgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlL2ZpbHRlci9xdWljay1maWx0ZXJzLmNvbmZpZyc7XG5pbXBvcnQgeyBTZWFyY2hDb25maWcgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlL3NlYXJjaC9zZWFyY2gtY29uZmlnJztcblxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQWdncmVnYXRlIGV4dGVuZHMgQWdncmVnYXRlIHtcblxuXHQvLyBUT0RPIEdldCByaWQgb2Zcblx0c3RhdGljIGRlZmF1bHQodWlkOiBBZ2dyZWdhdGVJZCwgcGFnaW5nOiBQYWdpbmdBZ2dyZWdhdGUsIHNvdXJjZUNvb3JkaW5hdG9yOiBTb3VyY2VDb29yZGluYXRvciwgdmVydGljYWxGb3JtYXRpb246IFZlcnRpY2FsRm9ybWF0aW9uLCBhZ2dyZWdhdGlvbk1hbmFnZXI6IEFnZ3JlZ2F0aW9uTWFuYWdlciwgIHNvcnRlckNvbnRhaW5lcjogU29ydGVyQ29udGFpbmVyLCBmaWx0ZXJDb250YWluZXI6IEZpbHRlckNvbnRhaW5lciwgZmllbGRDb250YWluZXI6IEZpZWxkQ29udGFpbmVyKTogU3RydWN0dXJlQWdncmVnYXRlIHtcblx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZUFnZ3JlZ2F0ZSh1aWQsIHBhZ2luZywgc291cmNlQ29vcmRpbmF0b3IsIHZlcnRpY2FsRm9ybWF0aW9uLCBhZ2dyZWdhdGlvbk1hbmFnZXIsIHNvcnRlckNvbnRhaW5lciwgZmlsdGVyQ29udGFpbmVyLCBmaWVsZENvbnRhaW5lcik7XG5cdH1cblxuXHRwcml2YXRlIGZvcm1hdGlvbjogRm9ybWF0aW9uQWdncmVnYXRlID0gRm9ybWF0aW9uQWdncmVnYXRlLmRlZmF1bHQoKTtcblxuXHRwcml2YXRlIHNjaGVtYTogU2NoZW1hQWdncmVnYXRlID0gU2NoZW1hQWdncmVnYXRlLmRlZmF1bHQoKTtcblxuXHRwcml2YXRlIHBhZ2luZzogUGFnaW5nQWdncmVnYXRlO1xuXG5cdHByaXZhdGUgc291cmNlQ29vcmRpbmF0b3I6IFNvdXJjZUNvb3JkaW5hdG9yO1xuXG5cdHByaXZhdGUgc29ydGVyQ29udGFpbmVyOiBTb3J0ZXJDb250YWluZXI7XG5cblx0cHJpdmF0ZSBmaWx0ZXJDb250YWluZXI6IEZpbHRlckNvbnRhaW5lcjtcblxuXHRwcml2YXRlIHZlcnRpY2FsRm9ybWF0aW9uOiBWZXJ0aWNhbEZvcm1hdGlvbjtcblxuXHRwcml2YXRlIGZpZWxkQ29udGFpbmVyOiBGaWVsZENvbnRhaW5lcjtcblxuXHRwcml2YXRlIGFnZ3JlZ2F0aW9uTWFuYWdlcjogQWdncmVnYXRpb25NYW5hZ2VyO1xuXG5cdHByaXZhdGUgc2VhcmNoOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBxdWlja0ZpbHRlcnM6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHBhZ2luZzogUGFnaW5nQWdncmVnYXRlLFxuXHRcdFx0XHRzb3VyY2U6IFNvdXJjZUNvb3JkaW5hdG9yLFxuXHRcdFx0XHR2ZXJ0aWNhbEZvcm1hdGlvbjogVmVydGljYWxGb3JtYXRpb24sXG5cdFx0XHRcdGFnZ3JlZ2F0aW9uTWFuYWdlcjogQWdncmVnYXRpb25NYW5hZ2VyLFxuXHRcdFx0XHRzb3J0ZXJDb250YWluZXI6IFNvcnRlckNvbnRhaW5lcixcblx0XHRcdFx0ZmlsdGVyQ29udGFpbmVyOiBGaWx0ZXJDb250YWluZXIsXG5cdFx0XHRcdGZpZWxkQ29udGFpbmVyOiBGaWVsZENvbnRhaW5lcikge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkKTtcblx0XHR0aGlzLnBhZ2luZyA9IHBhZ2luZztcblx0XHR0aGlzLnNvdXJjZUNvb3JkaW5hdG9yID0gc291cmNlO1xuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb24gPSB2ZXJ0aWNhbEZvcm1hdGlvbjtcblx0XHR0aGlzLmFnZ3JlZ2F0aW9uTWFuYWdlciA9IGFnZ3JlZ2F0aW9uTWFuYWdlcjtcblx0XHR0aGlzLnNvcnRlckNvbnRhaW5lciA9IHNvcnRlckNvbnRhaW5lcjtcblx0XHR0aGlzLmZpbHRlckNvbnRhaW5lciA9IGZpbHRlckNvbnRhaW5lcjtcblx0XHR0aGlzLmZpZWxkQ29udGFpbmVyID0gZmllbGRDb250YWluZXI7XG5cdH1cblxuXHRnZXRWZXJ0aWNhbEZvcm1hdGlvbigpOiBWZXJ0aWNhbEZvcm1hdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxGb3JtYXRpb247XG5cdH1cblxuXHRzZXRBZ2dyZWdhdGlvbkVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ+IHtcblxuXHRcdHRoaXMuYWdncmVnYXRpb25NYW5hZ2VyLnNldEVuYWJsZWQoZW5hYmxlZCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RXZlbnRzKCk7XG5cdH1cblxuXHRzZXRPcmlnaW4oaXRlbXM6IEFycmF5PGFueT4pOiBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50PiB7XG5cblx0XHR0aGlzLmFkZEV2ZW50KFxuXHRcdFx0dGhpcy5zb3VyY2VDb29yZGluYXRvci5zZXRPcmlnaW4oaXRlbXMsIHRoaXMuZ2V0SWQoKSlcblx0XHQpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblxuXHRcdHJldHVybiB0aGlzLmdldEV2ZW50cygpO1xuXHR9XG5cblx0ZWRpdEl0ZW0oZWRpdFBhcmFtczogU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1QYXJhbXMpOiBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50PiB7XG5cblx0XHRjb25zdCBpdGVtSWQgPSBlZGl0UGFyYW1zLmdldEl0ZW1JZCgpLFxuXHRcdFx0ZmllbGRJZCA9IGVkaXRQYXJhbXMuZ2V0Q29sdW1uRmllbGRJZCgpLFxuXHRcdFx0ZmllbGQgPSB0aGlzLmZpZWxkQ29udGFpbmVyLmdldEZpZWxkKGZpZWxkSWQgYXMgYW55KSwgLy8gYXMgRmllbGRJZFxuXHRcdFx0dmFsdWUgPSBlZGl0UGFyYW1zLmdldFZhbHVlKCk7XG5cblx0XHRjb25zdCBlZGl0SXRlbUV2ZW50cyA9IHRoaXMuc291cmNlQ29vcmRpbmF0b3IuZWRpdE9yaWdpbkl0ZW0oaXRlbUlkLCB2YWx1ZSwgZmllbGQsIHRoaXMuZ2V0SWQoKSk7XG5cblx0XHRlZGl0SXRlbUV2ZW50cy5mb3JFYWNoKChlKSA9PiB0aGlzLmFkZEV2ZW50KGUpKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5nZXRFdmVudHMoKTtcblx0fVxuXG5cdHNldEhlaWdodChoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuZ2V0U2NoZW1hKCkuc2V0SGVpZ2h0KGhlaWdodCk7XG5cblx0XHRjb25zdCB2aWV3cG9ydEhlaWdodCA9IHRoaXMuZ2V0U2NoZW1hKCkuZ2V0Q29udGFpbmVySGVpZ2h0KCk7XG5cblx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLnNldFZpZXdwb3J0SGVpZ2h0KHZpZXdwb3J0SGVpZ2h0KTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlQmFzZWRPblZpcnR1YWxTY3JvbGwoKTtcblx0fVxuXG5cdHNldEZvcm1hdGlvbihmb3JtYXRpb246IEZvcm1hdGlvbkFnZ3JlZ2F0ZSk6IHZvaWQge1xuXHRcdHRoaXMuZm9ybWF0aW9uID0gZm9ybWF0aW9uO1xuXHR9XG5cblx0c2V0U2Nyb2xsUG9zaXRpb24ocG9zaXRpb246IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb24uc2V0U2Nyb2xsUG9zaXRpb24ocG9zaXRpb24pO1xuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlQmFzZWRPblZpcnR1YWxTY3JvbGwoKTtcblx0fVxuXG5cdGdldEZvcm1hdGlvbigpOiBGb3JtYXRpb25BZ2dyZWdhdGUge1xuXHRcdHJldHVybiB0aGlzLmZvcm1hdGlvbjtcblx0fVxuXG5cdHNldFNjaGVtYShzY2hlbWE6IFNjaGVtYUFnZ3JlZ2F0ZSk6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hID0gc2NoZW1hO1xuXHR9XG5cblx0Z2V0U2NoZW1hKCk6IFNjaGVtYUFnZ3JlZ2F0ZSB7XG5cdFx0cmV0dXJuIHRoaXMuc2NoZW1hO1xuXHR9XG5cblx0Z2V0UGFnaW5nKCk6IFBhZ2luZ0FnZ3JlZ2F0ZSB7XG5cdFx0cmV0dXJuIHRoaXMucGFnaW5nO1xuXHR9XG5cblx0Y2hhbmdlUGFnaW5nKGNvbmZpZzogUGFnaW5nQ29uZmlnKSB7XG5cdFx0dGhpcy5wYWdpbmcuY2hhbmdlKGNvbmZpZyk7XG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblx0fVxuXG5cdHNldFBhZ2luZyhwYWdpbmc6IFBhZ2luZ0FnZ3JlZ2F0ZSk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nID0gcGFnaW5nO1xuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cdH1cblxuXHRuZXh0UGFnZSgpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHNvdXJjZVNpemUgPSB0aGlzLnNvdXJjZUNvb3JkaW5hdG9yLmdldE9yaWdpblNpemUoKTtcblxuXHRcdHRoaXMucGFnaW5nLm5leHRQYWdlKHNvdXJjZVNpemUpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblx0fVxuXG5cdHByZXZQYWdlKCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nLnByZXZQYWdlKCk7XG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblx0fVxuXG5cdGNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplOiBudW1iZXIpOiBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50PiB7XG5cblx0XHRjb25zdCBwYWdpbmdFdmVudHMgPSB0aGlzLnBhZ2luZy5jaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZSk7XG5cblx0XHQvLyBUT0RPXG5cdFx0cGFnaW5nRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG5cdFx0XHR0aGlzLmFkZEV2ZW50KGV2ZW50KTtcblx0XHR9KTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5nZXRFdmVudHMoKTtcblx0fVxuXG5cdGdldEVudGl0aWVzKCk6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2VDb29yZGluYXRvci5nZXRTbGljZWRFbnRpdGllcygpO1xuXHR9XG5cblx0Z2V0U291cmNlKCk6IFNvdXJjZUNvb3JkaW5hdG9yIHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2VDb29yZGluYXRvcjtcblx0fVxuXG5cdGNyZWF0ZUZpZWxkcyhjb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWc+KTogQXJyYXk8RmllbGQ+IHtcblx0XHR0aGlzLmZpZWxkQ29udGFpbmVyLmluaXRGaWVsZHMoY29sdW1ucyk7XG5cblx0XHQvLyBUT0RPIFNob3VsZCB0aHJvdyBldmVudCBmaWVsZHMgY3JlYXRlZFxuXHRcdHJldHVybiB0aGlzLmZpZWxkQ29udGFpbmVyLmdldEFsbEZpZWxkcygpO1xuXHR9XG5cblx0c2V0U29ydGluZ0NvbmZpZyhjb25maWc6IFNvcnRpbmdDb25maWcpOiB2b2lkIHtcblx0XHR0aGlzLnNvcnRlckNvbnRhaW5lci5zZXRDb25maWcoY29uZmlnKTtcblx0fVxuXG5cdHRvZ2dsZVNvcnQoZmllbGRJZDogRmllbGRJZCk6IEFycmF5PFN0cnVjdHVyZVNvcnRlcj4ge1xuXG5cdFx0Y29uc3QgZmllbGQgPSB0aGlzLmZpZWxkQ29udGFpbmVyLmdldEZpZWxkKGZpZWxkSWQpO1xuXG5cdFx0dGhpcy5zb3J0ZXJDb250YWluZXIudG9nZ2xlKGZpZWxkKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5zb3J0ZXJDb250YWluZXIuZ2V0QWxsKCk7XG5cdH1cblxuXHRzZXRGaWx0ZXJDb25maWcoY29uZmlnOiBGaWx0ZXJDb25maWcpOiB2b2lkIHtcblx0XHR0aGlzLmZpbHRlckNvbnRhaW5lci5zZXRDb25maWcoY29uZmlnKTtcblx0fVxuXG5cdHNldFF1aWNrRmlsdGVyc0NvbmZpZyhjb25maWc6IFF1aWNrRmlsdGVyc0NvbmZpZyk6IHZvaWQge1xuXHRcdHRoaXMucXVpY2tGaWx0ZXJzID0gY29uZmlnLmVuYWJsZWQ7XG5cdH1cblxuXHRzZXRTZWFyY2hpbmdDb25maWcoY29uZmlnOiBTZWFyY2hDb25maWcpOiB2b2lkIHtcblx0XHR0aGlzLnNlYXJjaCA9IGNvbmZpZy5lbmFibGVkO1xuXHR9XG5cblx0dG9nZ2xlRmlsdGVyKGZpZWxkSWQ6IEZpZWxkSWQsIGV4dGVybmFsRmlsdGVySWQ6IHN0cmluZywgZmlsdGVyVmFsdWU6IHN0cmluZyk6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PiB7XG5cblx0XHRjb25zdCBmaWVsZCA9IHRoaXMuZmllbGRDb250YWluZXIuZ2V0RmllbGQoZmllbGRJZCk7XG5cblx0XHQvLyBGaWVsZCBub3QgZm91bmRcblx0XHQvLyBUT0RPIHRocm93IGFnZ3JlZ2F0ZSBldmVudFxuXHRcdGlmIChmaWVsZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXG5cdFx0dGhpcy5maWx0ZXJDb250YWluZXIuYWRkRmlsdGVyKGZpZWxkLCBleHRlcm5hbEZpbHRlcklkLCBmaWx0ZXJWYWx1ZSk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVTb3VyY2UoKTogdm9pZCB7XG5cblx0XHRpZiAoIXRoaXMuc291cmNlQ29vcmRpbmF0b3IuZ2V0T3JpZ2luKCkgfHwgIXRoaXMucGFnaW5nKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gVE9ETyBSZWZhY3RvclxuXHRcdHRoaXMuc291cmNlQ29vcmRpbmF0b3Iuc2V0RW50aXRpZXModGhpcy5zb3VyY2VDb29yZGluYXRvci5nZXRPcmlnaW4oKSk7XG5cblx0XHQvLyBhZ2dyZWdhdGlvbnNcblx0XHRjb25zdCBhZ2dyZWdhdGlvbkV2ZW50cyA9IHRoaXMuYWdncmVnYXRpb25NYW5hZ2VyLmNhbGN1bGF0ZShcblx0XHRcdHRoaXMuZmllbGRDb250YWluZXIuZ2V0QWxsRmllbGRzKCksXG5cdFx0XHR0aGlzLnNvdXJjZUNvb3JkaW5hdG9yLmdldEVudGl0aWVzKClcblx0XHQpO1xuXG5cdFx0YWdncmVnYXRpb25FdmVudHMuZm9yRWFjaCgoYWU6IEFnZ3JlZ2F0ZUV2ZW50KSA9PiB7XG5cdFx0XHR0aGlzLmFkZEV2ZW50KGFlKTtcblx0XHR9KTtcblxuXHRcdC8vIGZpbHRlcmluZ1xuXHRcdHRoaXMuc291cmNlQ29vcmRpbmF0b3Iuc2V0RW50aXRpZXModGhpcy5maWx0ZXJDb250YWluZXIuZmlsdGVyKHRoaXMuc291cmNlQ29vcmRpbmF0b3IuZ2V0RW50aXRpZXMoKSkpO1xuXG5cdFx0Ly8gc2VhcmNoXG5cblx0XHQvLyBzb3J0aW5nXG5cdFx0dGhpcy5zb3VyY2VDb29yZGluYXRvci5zZXRFbnRpdGllcyh0aGlzLnNvcnRlckNvbnRhaW5lci5zb3J0KHRoaXMuc291cmNlQ29vcmRpbmF0b3IuZ2V0RW50aXRpZXMoKSkpO1xuXG5cdFx0Ly8gcGFnaW5nXG5cdFx0dGhpcy5zb3VyY2VDb29yZGluYXRvci5zZXRFbnRpdGllcyh0aGlzLnBhZ2luZy5zYW1wbGUodGhpcy5zb3VyY2VDb29yZGluYXRvci5nZXRFbnRpdGllcygpKSk7XG5cblx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLnNldFNvdXJjZVNpemUodGhpcy5zb3VyY2VDb29yZGluYXRvci5nZXRFbnRpdGllcygpLmxlbmd0aCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZUJhc2VkT25WaXJ0dWFsU2Nyb2xsKCk7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZVNvdXJjZUJhc2VkT25WaXJ0dWFsU2Nyb2xsKCk6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMudmVydGljYWxGb3JtYXRpb24uaXNFbmFibGVkKCkpIHtcblxuXHRcdFx0Y29uc3QgcmFuZ2UgPSB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLmdldFJhbmdlKCk7XG5cblx0XHRcdHRoaXMuc291cmNlQ29vcmRpbmF0b3Iuc2V0U2xpY2VkRW50aXRpZXMoXG5cdFx0XHRcdHRoaXMuc291cmNlQ29vcmRpbmF0b3IuZ2V0RW50aXRpZXMoKS5zbGljZShyYW5nZS5nZXRTdGFydCgpLCByYW5nZS5nZXRFbmQoKSlcblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc291cmNlQ29vcmRpbmF0b3Iuc2V0U2xpY2VkRW50aXRpZXMoXG5cdFx0XHRcdHRoaXMuc291cmNlQ29vcmRpbmF0b3IuZ2V0RW50aXRpZXMoKVxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxufVxuIl19