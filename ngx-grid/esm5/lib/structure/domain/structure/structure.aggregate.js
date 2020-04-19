/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateRoot } from '@generic-ui/hermes';
import { StructurePreparedEntitiesSetAggregateEvent } from '../source/prepared/structure.prepared-entities-set.aggregate-event';
import { FieldsInitedAggregateEvent } from './field/init/fields-inited.aggregate-event';
import { SchemaTheme } from '../../../schema/domain/theme/schema-theme';
import { SchemaAggregate } from '../../../schema/domain/schema.aggregate';
import { StructureCreatedAggregateEvent } from './create-structure/structure-created.aggregate-event';
var StructureAggregate = /** @class */ (function (_super) {
    tslib_1.__extends(StructureAggregate, _super);
    function StructureAggregate(structureId, pagingAggregate, formationAggregate, sourceManager, verticalFormation, summariesManager, sorterCollection, filterCollection, searchManager, fieldCollection) {
        var _this = _super.call(this, structureId, 'StructureAggregate') || this;
        _this.pagingManager = pagingAggregate;
        _this.formationAggregate = formationAggregate;
        _this.sourceManager = sourceManager;
        _this.verticalFormation = verticalFormation;
        _this.summariesManager = summariesManager;
        _this.sorterCollection = sorterCollection;
        _this.filterManager = filterCollection;
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
     * @param {?} formation
     * @return {?}
     */
    StructureAggregate.prototype.setFormation = /**
     * @param {?} formation
     * @return {?}
     */
    function (formation) {
        this.formationAggregate = formation;
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
        return this.formationAggregate;
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
     * @param {?} columns
     * @return {?}
     */
    StructureAggregate.prototype.createFields = /**
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        this.fieldCollection.initFields(columns);
        /** @type {?} */
        var typeFields = this.fieldCollection.getAllFields();
        this.addEvent(new FieldsInitedAggregateEvent(this.getId(), columns, typeFields));
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
    StructureAggregate.prototype.setSearchingConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.filterManager.getSettings().setSearchingConfig(config);
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
        this.filterManager.addFilter(field, externalFilterId, filterValue);
        this.calculateSource();
        return [];
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
        this.sourceManager.setEntities(this.filterManager.filter(this.sourceManager.getEntities()));
        // search
        /** @type {?} */
        var searchedEntities = this.searchManager.search(this.sourceManager.getEntities());
        this.sourceManager.setEntities(searchedEntities);
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
    return StructureAggregate;
}(AggregateRoot));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL3N0cnVjdHVyZS5hZ2dyZWdhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQWtCLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBc0JuRSxPQUFPLEVBQUUsMENBQTBDLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUVoSSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN4RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBR3RHO0lBQXdDLDhDQUEwQjtJQW9CakUsNEJBQVksV0FBd0IsRUFDakMsZUFBOEIsRUFDOUIsa0JBQXNDLEVBQ3RDLGFBQTRCLEVBQzVCLGlCQUFvQyxFQUNwQyxnQkFBa0MsRUFDbEMsZ0JBQWtDLEVBQ2xDLGdCQUErQixFQUMvQixhQUE0QixFQUM1QixlQUFnQztRQVRuQyxZQVVDLGtCQUFNLFdBQVcsRUFBRSxvQkFBb0IsQ0FBQyxTQVV4QztRQVRBLEtBQUksQ0FBQyxhQUFhLEdBQUcsZUFBZSxDQUFDO1FBQ3JDLEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztRQUM3QyxLQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxLQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7UUFDM0MsS0FBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBQ3pDLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUN6QyxLQUFJLENBQUMsYUFBYSxHQUFH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LENBQUM7UUFFNUYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTlFLElBQUksQ0FBQyxtQ0FBbUMsRUFBRSxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBRU8sZ0VBQW1DOzs7O0lBQTNDO1FBRUMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLEVBQUU7O2dCQUVqQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRTtZQUUvQyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQ3hFLENBQUM7U0FDRjthQUFNO1lBQ04sSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FDaEMsQ0FBQztTQUNGO0lBQ0YsQ0FBQzs7Ozs7SUFFTyxzQ0FBUzs7OztJQUFqQjs7O1lBR08sS0FBSyxHQUFHLGVBQWUsQ0FBQyxhQUFhO1FBRTNDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVGLHlCQUFDO0FBQUQsQ0FBQyxBQXZWRCxDQUF3QyxhQUFhLEdBdVZwRDs7Ozs7OztJQXJWQSxnREFBK0M7Ozs7O0lBRS9DLDJDQUFxQzs7Ozs7SUFFckMsMkNBQXFDOzs7OztJQUVyQyw4Q0FBMkM7Ozs7O0lBRTNDLDJDQUFxQzs7Ozs7SUFFckMsMkNBQXFDOzs7OztJQUVyQywrQ0FBNkM7Ozs7O0lBRTdDLDZDQUF5Qzs7Ozs7SUFFekMsOENBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgQWdncmVnYXRlUm9vdCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFBhZ2luZ01hbmFnZXIgfSBmcm9tICcuLi9wYWdpbmcvcGFnaW5nLm1hbmFnZXInO1xuaW1wb3J0IHsgU291cmNlTWFuYWdlciB9IGZyb20gJy4uL3NvdXJjZS9zb3VyY2UubWFuYWdlcic7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbiB9IGZyb20gJy4vdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbic7XG5pbXBvcnQgeyBTdW1tYXJpZXNNYW5hZ2VyIH0gZnJvbSAnLi9zdW1tYXJpZXMvc3VtbWFyaWVzLm1hbmFnZXInO1xuaW1wb3J0IHsgU29ydGVyQ29sbGVjdGlvbiB9IGZyb20gJy4vc29ydC9zb3J0ZXIuY29sbGVjdGlvbic7XG5pbXBvcnQgeyBGaWx0ZXJNYW5hZ2VyIH0gZnJvbSAnLi9maWx0ZXIvZmlsdGVyLm1hbmFnZXInO1xuaW1wb3J0IHsgRmllbGRDb2xsZWN0aW9uIH0gZnJvbSAnLi9maWVsZC9maWVsZC5jb2xsZWN0aW9uJztcbmltcG9ydCB7IEZvcm1hdGlvbkFnZ3JlZ2F0ZSB9IGZyb20gJy4uL2Zvcm1hdGlvbi9mb3JtYXRpb24tYWdncmVnYXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zIH0gZnJvbSAnLi4vc291cmNlL29yaWdpbi9lZGl0L3N0cnVjdHVyZS5lZGl0LXNvdXJjZS1pdGVtLnBhcmFtcyc7XG5pbXBvcnQgeyBQYWdpbmdDb25maWcgfSBmcm9tICcuLi9wYWdpbmcvcGFnaW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vc291cmNlL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IFNvcnRpbmdDb25maWcgfSBmcm9tICcuLi8uLi9mZWF0dXJlLWFwaS9zb3J0aW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi9maWVsZC9kYXRhLXR5cGUvZmllbGQuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU29ydGVyIH0gZnJvbSAnLi9zb3J0L3N0cnVjdHVyZS5zb3J0ZXInO1xuaW1wb3J0IHsgRmlsdGVyQ29uZmlnIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS1hcGkvZmlsdGVyL2ZpbHRlci1jb25maWcnO1xuaW1wb3J0IHsgUXVpY2tGaWx0ZXJzQ29uZmlnIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS1hcGkvZmlsdGVyL3F1aWNrLWZpbHRlcnMuY29uZmlnJztcbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uLy4uL2ZlYXR1cmUtYXBpL3NlYXJjaC9zZWFyY2gtY29uZmlnJztcbmltcG9ydCB7IFNlYXJjaE1hbmFnZXIgfSBmcm9tICcuL3NlYXJjaC9zZWFyY2gubWFuYWdlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi9zb3VyY2UvcHJlcGFyZWQvc3RydWN0dXJlLnByZXBhcmVkLWVudGl0aWVzLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9zb3J0L3NvcnQtb3JkZXInO1xuaW1wb3J0IHsgRmllbGRzSW5pdGVkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL2ZpZWxkL2luaXQvZmllbGRzLWluaXRlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi8uLi9zY2hlbWEvZG9tYWluL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTY2hlbWFBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi9zY2hlbWEvZG9tYWluL3NjaGVtYS5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ3JlYXRlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9jcmVhdGUtc3RydWN0dXJlL3N0cnVjdHVyZS1jcmVhdGVkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUFnZ3JlZ2F0ZSBleHRlbmRzIEFnZ3JlZ2F0ZVJvb3Q8U3RydWN0dXJlSWQ+IHtcblxuXHRwcml2YXRlIGZvcm1hdGlvbkFnZ3JlZ2F0ZTogRm9ybWF0aW9uQWdncmVnYXRlO1xuXG5cdHByaXZhdGUgcGFnaW5nTWFuYWdlcjogUGFnaW5nTWFuYWdlcjtcblxuXHRwcml2YXRlIHNvdXJjZU1hbmFnZXI6IFNvdXJjZU1hbmFnZXI7XG5cblx0cHJpdmF0ZSBzb3J0ZXJDb2xsZWN0aW9uOiBTb3J0ZXJDb2xsZWN0aW9uO1xuXG5cdHByaXZhdGUgZmlsdGVyTWFuYWdlcjogRmlsdGVyTWFuYWdlcjtcblxuXHRwcml2YXRlIHNlYXJjaE1hbmFnZXI6IFNlYXJjaE1hbmFnZXI7XG5cblx0cHJpdmF0ZSB2ZXJ0aWNhbEZvcm1hdGlvbjogVmVydGljYWxGb3JtYXRpb247XG5cblx0cHJpdmF0ZSBmaWVsZENvbGxlY3Rpb246IEZpZWxkQ29sbGVjdGlvbjtcblxuXHRwcml2YXRlIHN1bW1hcmllc01hbmFnZXI6IFN1bW1hcmllc01hbmFnZXI7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwYWdpbmdBZ2dyZWdhdGU6IFBhZ2luZ01hbmFnZXIsXG5cdFx0XHRcdGZvcm1hdGlvbkFnZ3JlZ2F0ZTogRm9ybWF0aW9uQWdncmVnYXRlLFxuXHRcdFx0XHRzb3VyY2VNYW5hZ2VyOiBTb3VyY2VNYW5hZ2VyLFxuXHRcdFx0XHR2ZXJ0aWNhbEZvcm1hdGlvbjogVmVydGljYWxGb3JtYXRpb24sXG5cdFx0XHRcdHN1bW1hcmllc01hbmFnZXI6IFN1bW1hcmllc01hbmFnZXIsXG5cdFx0XHRcdHNvcnRlckNvbGxlY3Rpb246IFNvcnRlckNvbGxlY3Rpb24sXG5cdFx0XHRcdGZpbHRlckNvbGxlY3Rpb246IEZpbHRlck1hbmFnZXIsXG5cdFx0XHRcdHNlYXJjaE1hbmFnZXI6IFNlYXJjaE1hbmFnZXIsXG5cdFx0XHRcdGZpZWxkQ29sbGVjdGlvbjogRmllbGRDb2xsZWN0aW9uKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdTdHJ1Y3R1cmVBZ2dyZWdhdGUnKTtcblx0XHR0aGlzLnBhZ2luZ01hbmFnZXIgPSBwYWdpbmdBZ2dyZWdhdGU7XG5cdFx0dGhpcy5mb3JtYXRpb25BZ2dyZWdhdGUgPSBmb3JtYXRpb25BZ2dyZWdhdGU7XG5cdFx0dGhpcy5zb3VyY2VNYW5hZ2VyID0gc291cmNlTWFuYWdlcjtcblx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uID0gdmVydGljYWxGb3JtYXRpb247XG5cdFx0dGhpcy5zdW1tYXJpZXNNYW5hZ2VyID0gc3VtbWFyaWVzTWFuYWdlcjtcblx0XHR0aGlzLnNvcnRlckNvbGxlY3Rpb24gPSBzb3J0ZXJDb2xsZWN0aW9uO1xuXHRcdHRoaXMuZmlsdGVyTWFuYWdlciA9IGZpbHRlckNvbGxlY3Rpb247XG5cdFx0dGhpcy5zZWFyY2hNYW5hZ2VyID0gc2VhcmNoTWFuYWdlcjtcblx0XHR0aGlzLmZpZWxkQ29sbGVjdGlvbiA9IGZpZWxkQ29sbGVjdGlvbjtcblx0fVxuXG5cdGNyZWF0ZUV2ZW50KCk6IFR5cGU8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cdFx0cmV0dXJuIFN0cnVjdHVyZUNyZWF0ZWRBZ2dyZWdhdGVFdmVudDtcblx0fVxuXG5cdGluaXQoKTogdm9pZCB7XG5cdFx0dGhpcy5pbml0VGhlbWUoKTtcblx0fVxuXG5cdHNldFZlcnRpY2FsRm9ybWF0aW9uRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbi5zZXRFbmFibGVkKGVuYWJsZWQpO1xuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cdH1cblxuXHRnZXRWZXJ0aWNhbEZvcm1hdGlvbigpOiBWZXJ0aWNhbEZvcm1hdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxGb3JtYXRpb247XG5cdH1cblxuXHRzZXRTdW1tYXJpZXNFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXG5cdFx0dGhpcy5zdW1tYXJpZXNNYW5hZ2VyLnNldEVuYWJsZWQoZW5hYmxlZCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RXZlbnRzKCk7XG5cdH1cblxuXHRzZXRPcmlnaW4oaXRlbXM6IEFycmF5PGFueT4pOiBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXG5cdFx0dGhpcy5hZGRFdmVudChcblx0XHRcdHRoaXMuc291cmNlTWFuYWdlci5zZXRPcmlnaW4oaXRlbXMsIHRoaXMuZ2V0SWQoKSlcblx0XHQpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblxuXHRcdHJldHVybiB0aGlzLmdldEV2ZW50cygpO1xuXHR9XG5cblx0ZWRpdEl0ZW0oZWRpdFBhcmFtczogU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1QYXJhbXMpOiBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXG5cdFx0Y29uc3QgaXRlbUlkID0gZWRpdFBhcmFtcy5nZXRJdGVtSWQoKSxcblx0XHRcdGZpZWxkSWQgPSBlZGl0UGFyYW1zLmdldENvbHVtbkZpZWxkSWQoKSxcblx0XHRcdGZpZWxkID0gdGhpcy5maWVsZENvbGxlY3Rpb24uZ2V0RmllbGQoZmllbGRJZCBhcyBhbnkpLCAvLyBhcyBGaWVsZElkXG5cdFx0XHR2YWx1ZSA9IGVkaXRQYXJhbXMuZ2V0VmFsdWUoKTtcblxuXHRcdGNvbnN0IGVkaXRJdGVtRXZlbnRzID0gdGhpcy5zb3VyY2VNYW5hZ2VyLmVkaXRPcmlnaW5JdGVtKGl0ZW1JZCwgdmFsdWUsIGZpZWxkLCB0aGlzLmdldElkKCkpO1xuXG5cdFx0ZWRpdEl0ZW1FdmVudHMuZm9yRWFjaCgoZSkgPT4gdGhpcy5hZGRFdmVudChlKSk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RXZlbnRzKCk7XG5cdH1cblxuXHRzZXRIZWlnaHQoaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcblxuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb24uc2V0Vmlld3BvcnRIZWlnaHQoaGVpZ2h0KTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlQmFzZWRPblZpcnR1YWxTY3JvbGwoKTtcblx0fVxuXG5cdHNldFRoZW1lKHRoZW1lOiBTY2hlbWFUaGVtZSk6IHZvaWQge1xuXG5cdFx0Ly8gIzE3MDcgTW92ZSB0byBTY2hlbWVBZ2dyZWdhdGVcblx0XHRpZiAodGhlbWUgPT09IFNjaGVtYVRoZW1lLk1BVEVSSUFMKSB7XG5cdFx0XHR0aGlzLmdldFZlcnRpY2FsRm9ybWF0aW9uKCkuc2V0Um93SGVpZ2h0KDUyKTtcblx0XHR9XG5cblx0XHRpZiAodGhlbWUgPT09IFNjaGVtYVRoZW1lLkdFTkVSSUMpIHtcblx0XHRcdHRoaXMuZ2V0VmVydGljYWxGb3JtYXRpb24oKS5zZXRSb3dIZWlnaHQoNDIpO1xuXHRcdH1cblxuXHRcdGlmICh0aGVtZSA9PT0gU2NoZW1hVGhlbWUuRkFCUklDKSB7XG5cdFx0XHR0aGlzLmdldFZlcnRpY2FsRm9ybWF0aW9uKCkuc2V0Um93SGVpZ2h0KDM2KTtcblx0XHR9XG5cblx0XHRpZiAodGhlbWUgPT09IFNjaGVtYVRoZW1lLkxJR0hUKSB7XG5cdFx0XHR0aGlzLmdldFZlcnRpY2FsRm9ybWF0aW9uKCkuc2V0Um93SGVpZ2h0KDU2KTtcblx0XHR9XG5cblx0XHRpZiAodGhlbWUgPT09IFNjaGVtYVRoZW1lLkRBUkspIHtcblx0XHRcdHRoaXMuZ2V0VmVydGljYWxGb3JtYXRpb24oKS5zZXRSb3dIZWlnaHQoMzgpO1xuXHRcdH1cblx0fVxuXG5cdHNldEZvcm1hdGlvbihmb3JtYXRpb246IEZvcm1hdGlvbkFnZ3JlZ2F0ZSk6IHZvaWQge1xuXHRcdHRoaXMuZm9ybWF0aW9uQWdncmVnYXRlID0gZm9ybWF0aW9uO1xuXHR9XG5cblx0c2V0U2Nyb2xsUG9zaXRpb24ocG9zaXRpb246IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb24uc2V0U2Nyb2xsUG9zaXRpb24ocG9zaXRpb24pO1xuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlQmFzZWRPblZpcnR1YWxTY3JvbGwoKTtcblx0fVxuXG5cdGdldEZvcm1hdGlvbigpOiBGb3JtYXRpb25BZ2dyZWdhdGUge1xuXHRcdHJldHVybiB0aGlzLmZvcm1hdGlvbkFnZ3JlZ2F0ZTtcblx0fVxuXG5cdGdldFBhZ2luZygpOiBQYWdpbmdNYW5hZ2VyIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdpbmdNYW5hZ2VyO1xuXHR9XG5cblx0Y2hhbmdlUGFnaW5nKGNvbmZpZzogUGFnaW5nQ29uZmlnKSB7XG5cdFx0dGhpcy5wYWdpbmdNYW5hZ2VyLmNoYW5nZShjb25maWcpO1xuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cdH1cblxuXHRzZXRQYWdpbmcocGFnaW5nOiBQYWdpbmdNYW5hZ2VyKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdNYW5hZ2VyID0gcGFnaW5nO1xuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cdH1cblxuXHRuZXh0UGFnZSgpOiB2b2lkIHtcblxuXHRcdHRoaXMucGFnaW5nTWFuYWdlci5uZXh0UGFnZSgpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblx0fVxuXG5cdHByZXZQYWdlKCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nTWFuYWdlci5wcmV2UGFnZSgpO1xuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cdH1cblxuXHRjaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdGNvbnN0IHBhZ2luZ0V2ZW50cyA9IHRoaXMucGFnaW5nTWFuYWdlci5jaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZSk7XG5cblx0XHQvLyBUT0RPXG5cdFx0cGFnaW5nRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG5cdFx0XHR0aGlzLmFkZEV2ZW50KGV2ZW50KTtcblx0XHR9KTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5nZXRFdmVudHMoKTtcblx0fVxuXG5cdGdldEVudGl0aWVzKCk6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2VNYW5hZ2VyLmdldFNsaWNlZEVudGl0aWVzKCk7XG5cdH1cblxuXHRnZXRTb3VyY2UoKTogU291cmNlTWFuYWdlciB7XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlTWFuYWdlcjtcblx0fVxuXG5cdGNyZWF0ZUZpZWxkcyhjb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWc+KTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblx0XHR0aGlzLmZpZWxkQ29sbGVjdGlvbi5pbml0RmllbGRzKGNvbHVtbnMpO1xuXG5cdFx0Y29uc3QgdHlwZUZpZWxkcyA9IHRoaXMuZmllbGRDb2xsZWN0aW9uLmdldEFsbEZpZWxkcygpO1xuXG5cdFx0dGhpcy5hZGRFdmVudChcblx0XHRcdG5ldyBGaWVsZHNJbml0ZWRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCksIGNvbHVtbnMsIHR5cGVGaWVsZHMpXG5cdFx0KTtcblxuXHRcdHJldHVybiB0aGlzLmdldEV2ZW50cygpO1xuXHR9XG5cblx0c2V0U29ydGluZ0NvbmZpZyhjb25maWc6IFNvcnRpbmdDb25maWcpOiB2b2lkIHtcblx0XHR0aGlzLnNvcnRlckNvbGxlY3Rpb24uc2V0Q29uZmlnKGNvbmZpZyk7XG5cdH1cblxuXHR0b2dnbGVTb3J0KGZpZWxkSWQ6IEZpZWxkSWQpOiBBcnJheTxTdHJ1Y3R1cmVTb3J0ZXI+IHtcblxuXHRcdGNvbnN0IGZpZWxkID0gdGhpcy5maWVsZENvbGxlY3Rpb24uZ2V0RmllbGQoZmllbGRJZCk7XG5cblx0XHR0aGlzLnNvcnRlckNvbGxlY3Rpb24udG9nZ2xlKGZpZWxkKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5zb3J0ZXJDb2xsZWN0aW9uLmdldEFsbCgpO1xuXHR9XG5cblx0c2V0U29ydE9yZGVyKGZpZWxkSWQ6IEZpZWxkSWQsIHNvcnRPcmRlcjogU29ydE9yZGVyKTogQXJyYXk8U3RydWN0dXJlU29ydGVyPiB7XG5cblx0XHRjb25zdCBmaWVsZCA9IHRoaXMuZmllbGRDb2xsZWN0aW9uLmdldEZpZWxkKGZpZWxkSWQpO1xuXG5cdFx0dGhpcy5zb3J0ZXJDb2xsZWN0aW9uLnNldFNvcnRPcmRlcihmaWVsZCwgc29ydE9yZGVyKTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlU291cmNlKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5zb3J0ZXJDb2xsZWN0aW9uLmdldEFsbCgpO1xuXHR9XG5cblx0c2V0RmlsdGVyQ29uZmlnKGNvbmZpZzogRmlsdGVyQ29uZmlnKTogdm9pZCB7XG5cdFx0dGhpcy5maWx0ZXJNYW5hZ2VyLmdldFNldHRpbmdzKCkuc2V0RmlsdGVyQ29uZmlnKGNvbmZpZyk7XG5cdH1cblxuXHRzZXRTZWFyY2hpbmdDb25maWcoY29uZmlnOiBTZWFyY2hDb25maWcpOiB2b2lkIHtcblx0XHR0aGlzLmZpbHRlck1hbmFnZXIuZ2V0U2V0dGluZ3MoKS5zZXRTZWFyY2hpbmdDb25maWcoY29uZmlnKTtcblx0fVxuXG5cdHNldFF1aWNrRmlsdGVyc0NvbmZpZyhjb25maWc6IFF1aWNrRmlsdGVyc0NvbmZpZyk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyTWFuYWdlci5nZXRTZXR0aW5ncygpLnNldFF1aWNrRmlsdGVyc0NvbmZpZyhjb25maWcpO1xuXHR9XG5cblx0dG9nZ2xlRmlsdGVyKGZpZWxkSWQ6IEZpZWxkSWQsIGV4dGVybmFsRmlsdGVySWQ6IHN0cmluZywgZmlsdGVyVmFsdWU6IHN0cmluZyk6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXG5cdFx0Y29uc3QgZmllbGQgPSB0aGlzLmZpZWxkQ29sbGVjdGlvbi5nZXRGaWVsZChmaWVsZElkKTtcblxuXHRcdC8vIEZpZWxkIG5vdCBmb3VuZFxuXHRcdC8vIFRPRE8gdGhyb3cgYWdncmVnYXRlIGV2ZW50XG5cdFx0aWYgKGZpZWxkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cblx0XHR0aGlzLmZpbHRlck1hbmFnZXIuYWRkRmlsdGVyKGZpZWxkLCBleHRlcm5hbEZpbHRlcklkLCBmaWx0ZXJWYWx1ZSk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0YWRkU2VhcmNoUGhyYXNlKHBocmFzZTogc3RyaW5nKTogQXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHRjb25zdCBmaWVsZHMgPSB0aGlzLmZpZWxkQ29sbGVjdGlvbi5nZXRBbGxGaWVsZHMoKTtcblxuXHRcdHRoaXMuc2VhcmNoTWFuYWdlci5hZGRTZWFyY2hQaHJhc2UoZmllbGRzLCBwaHJhc2UpO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVTb3VyY2UoKTtcblxuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdHJlbW92ZVNlYXJjaFBocmFzZSgpOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdHRoaXMuc2VhcmNoTWFuYWdlci5yZW1vdmVTZWFyY2hGaWx0ZXJzKCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZSgpO1xuXG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVTb3VyY2UoKTogdm9pZCB7XG5cblx0XHRpZiAoIXRoaXMuc291cmNlTWFuYWdlci5nZXRPcmlnaW4oKSB8fCAhdGhpcy5wYWdpbmdNYW5hZ2VyKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gVE9ETyBSZWZhY3RvclxuXHRcdHRoaXMuc291cmNlTWFuYWdlci5zZXRFbnRpdGllcyh0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0T3JpZ2luKCkpO1xuXG5cdFx0Ly8gZmlsdGVyaW5nXG5cdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLnNldEVudGl0aWVzKHRoaXMuZmlsdGVyTWFuYWdlci5maWx0ZXIodGhpcy5zb3VyY2VNYW5hZ2VyLmdldEVudGl0aWVzKCkpKTtcblxuXHRcdC8vIHNlYXJjaFxuXHRcdGNvbnN0IHNlYXJjaGVkRW50aXRpZXMgPSB0aGlzLnNlYXJjaE1hbmFnZXIuc2VhcmNoKHRoaXMuc291cmNlTWFuYWdlci5nZXRFbnRpdGllcygpKTtcblx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2V0RW50aXRpZXMoc2VhcmNoZWRFbnRpdGllcyk7XG5cblx0XHQvLyBzb3J0aW5nXG5cdFx0Y29uc3QgZW50cyA9IHRoaXMuc29ydGVyQ29sbGVjdGlvbi5zb3J0KHRoaXMuc291cmNlTWFuYWdlci5nZXRFbnRpdGllcygpKTtcblx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2V0RW50aXRpZXMoZW50cyk7XG5cblx0XHQvLyBjYWxjdWxhdGUgZmlsdGVyZWRFbnRpdGllc1xuXHRcdHRoaXMuc291cmNlTWFuYWdlci5zZXRQcmVwYXJlZEVudGl0aWVzKCk7XG5cblx0XHR0aGlzLnBhZ2luZ01hbmFnZXIuc2V0U291cmNlU2l6ZSh0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0UHJlcGFyZWRFbnRpdGllcygpLmxlbmd0aCk7XG5cblx0XHR0aGlzLmFkZEV2ZW50KG5ldyBTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0QWdncmVnYXRlRXZlbnQodGhpcy5nZXRJZCgpLCBlbnRzKSk7XG5cblx0XHQvLyBzdW1tYXJpZXNcblx0XHRjb25zdCBzdW1tYXJpZXNFdmVudHMgPSB0aGlzLnN1bW1hcmllc01hbmFnZXIuY2FsY3VsYXRlKFxuXHRcdFx0dGhpcy5maWVsZENvbGxlY3Rpb24uZ2V0QWxsRmllbGRzKCksXG5cdFx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0RW50aXRpZXMoKVxuXHRcdCk7XG5cblx0XHRzdW1tYXJpZXNFdmVudHMuZm9yRWFjaCgoYWU6IEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPikgPT4ge1xuXHRcdFx0dGhpcy5hZGRFdmVudChhZSk7XG5cdFx0fSk7XG5cblx0XHQvLyBwYWdpbmdcblx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2V0RW50aXRpZXModGhpcy5wYWdpbmdNYW5hZ2VyLnNhbXBsZSh0aGlzLnNvdXJjZU1hbmFnZXIuZ2V0RW50aXRpZXMoKSkpO1xuXG5cdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbi5zZXRTb3VyY2VTaXplKHRoaXMuc291cmNlTWFuYWdlci5nZXRFbnRpdGllcygpLmxlbmd0aCk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZVNvdXJjZUJhc2VkT25WaXJ0dWFsU2Nyb2xsKCk7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZVNvdXJjZUJhc2VkT25WaXJ0dWFsU2Nyb2xsKCk6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMudmVydGljYWxGb3JtYXRpb24uaXNFbmFibGVkKCkpIHtcblxuXHRcdFx0Y29uc3QgcmFuZ2UgPSB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uLmdldFJhbmdlKCk7XG5cblx0XHRcdHRoaXMuc291cmNlTWFuYWdlci5zZXRTbGljZWRFbnRpdGllcyhcblx0XHRcdFx0dGhpcy5zb3VyY2VNYW5hZ2VyLmdldEVudGl0aWVzKCkuc2xpY2UocmFuZ2UuZ2V0U3RhcnQoKSwgcmFuZ2UuZ2V0RW5kKCkpXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNvdXJjZU1hbmFnZXIuc2V0U2xpY2VkRW50aXRpZXMoXG5cdFx0XHRcdHRoaXMuc291cmNlTWFuYWdlci5nZXRFbnRpdGllcygpXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgaW5pdFRoZW1lKCkge1xuXG5cdFx0Ly8gVE9ET1xuXHRcdGNvbnN0IHRoZW1lID0gU2NoZW1hQWdncmVnYXRlLkRFRkFVTFRfVEhFTUU7XG5cblx0XHR0aGlzLnNldFRoZW1lKHRoZW1lKTtcblx0fVxuXG59XG4iXX0=