/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { RandomStringGenerator } from '@generic-ui/hermes';
import { OriginItemEntity } from '../origin/origin-item-entity';
import { StructureSourceItemEditedAggregateEvent } from '../origin/edit/structure.source-item-edited.aggregate-event';
import { StructureOriginChangedAggregateEvent } from '../origin/structure.origin-changed.aggregate-event';
import { OriginId } from '../origin/origin-id';
var SourceManager = /** @class */ (function () {
    function SourceManager(formationManager) {
        this.loading = false;
        this.fetched = false;
        this.entities = [];
        // Entities after filtering, searching
        this.preparedEntities = [];
        this.slicedEntities = [];
        this.formationManager = formationManager;
    }
    /**
     * @return {?}
     */
    SourceManager.prototype.isLoading = /**
     * @return {?}
     */
    function () {
        return this.loading;
    };
    /**
     * @return {?}
     */
    SourceManager.prototype.isFetched = /**
     * @return {?}
     */
    function () {
        return this.fetched;
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    SourceManager.prototype.setLoading = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.loading = enabled;
    };
    /**
     * @param {?} ent
     * @return {?}
     */
    SourceManager.prototype.setEntities = /**
     * @param {?} ent
     * @return {?}
     */
    function (ent) {
        this.entities = ent;
        this.recalculatePositions();
    };
    /**
     * @return {?}
     */
    SourceManager.prototype.getEntities = /**
     * @return {?}
     */
    function () {
        return this.entities;
    };
    /**
     * @return {?}
     */
    SourceManager.prototype.setPreparedEntities = /**
     * @return {?}
     */
    function () {
        this.preparedEntities = tslib_1.__spread(this.entities);
    };
    /**
     * @return {?}
     */
    SourceManager.prototype.getPreparedEntities = /**
     * @return {?}
     */
    function () {
        return this.preparedEntities;
    };
    /**
     * @param {?} ent
     * @return {?}
     */
    SourceManager.prototype.setSlicedEntities = /**
     * @param {?} ent
     * @return {?}
     */
    function (ent) {
        this.slicedEntities = ent;
    };
    /**
     * @return {?}
     */
    SourceManager.prototype.getSlicedEntities = /**
     * @return {?}
     */
    function () {
        return this.slicedEntities;
    };
    /**
     * @param {?=} items
     * @param {?=} structureId
     * @return {?}
     */
    SourceManager.prototype.setOrigin = /**
     * @param {?=} items
     * @param {?=} structureId
     * @return {?}
     */
    function (items, structureId) {
        if (items === void 0) { items = []; }
        this.origin = this.convertItems(items);
        return this.createOriginChangedEvent(structureId);
    };
    /**
     * @param {?=} items
     * @param {?=} structureId
     * @return {?}
     */
    SourceManager.prototype.setConvertedOrigin = /**
     * @param {?=} items
     * @param {?=} structureId
     * @return {?}
     */
    function (items, structureId) {
        if (items === void 0) { items = []; }
        this.origin = tslib_1.__spread(items);
        return this.createOriginChangedEvent(structureId);
    };
    /**
     * @return {?}
     */
    SourceManager.prototype.getOrigin = /**
     * @return {?}
     */
    function () {
        return this.origin;
    };
    /**
     * @return {?}
     */
    SourceManager.prototype.getOriginSize = /**
     * @return {?}
     */
    function () {
        return this.origin.length;
    };
    // editOriginItemByProperty(byField, value: any, field: Field, structureId: StructureId): AggregateEvent {
    //
    // }
    // editOriginItemByProperty(byField, value: any, field: Field, structureId: StructureId): AggregateEvent {
    //
    // }
    /**
     * @param {?} itemId
     * @param {?} value
     * @param {?} field
     * @param {?} structureId
     * @return {?}
     */
    SourceManager.prototype.editOriginItem = 
    // editOriginItemByProperty(byField, value: any, field: Field, structureId: StructureId): AggregateEvent {
    //
    // }
    /**
     * @param {?} itemId
     * @param {?} value
     * @param {?} field
     * @param {?} structureId
     * @return {?}
     */
    function (itemId, value, field, structureId) {
        /** @type {?} */
        var item = this.findOriginItem(itemId);
        /** @type {?} */
        var itemBeforeChange = item.clone();
        if (item) {
            item.sourceItem[field.getAccessor()] = value;
            item.bumpVersion();
        }
        return [
            new StructureSourceItemEditedAggregateEvent(structureId, itemBeforeChange, item.clone()),
            this.createOriginChangedEvent(structureId)
        ];
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    SourceManager.prototype.deleteAllSelected = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        var _this = this;
        /** @type {?} */
        var events = [];
        /** @type {?} */
        var rows = this.formationManager.getSelectedRows();
        rows.forEach((/**
         * @param {?} r
         * @return {?}
         */
        function (r) {
            events.push.apply(events, tslib_1.__spread(_this.deleteOriginItemByItemId(new OriginId(r), structureId)));
        }));
        return events;
    };
    /**
     * @param {?} payload
     * @param {?} structureId
     * @return {?}
     */
    SourceManager.prototype.deleteOriginItem = /**
     * @param {?} payload
     * @param {?} structureId
     * @return {?}
     */
    function (payload, structureId) {
        var _this = this;
        if (payload instanceof OriginId) {
            return this.deleteOriginItemByItemId(payload, structureId);
        }
        else if (Array.isArray(payload)) {
            /** @type {?} */
            var events_1 = [];
            payload.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                events_1.push.apply(events_1, tslib_1.__spread(_this.deleteOneOriginItem(item, structureId)));
            }));
            return events_1;
        }
        else if (Number.isInteger(payload)) {
            return this.deleteOriginItemByIndex(payload, structureId);
        }
    };
    /**
     * @param {?} item
     * @param {?} structureId
     * @return {?}
     */
    SourceManager.prototype.addOriginItem = /**
     * @param {?} item
     * @param {?} structureId
     * @return {?}
     */
    function (item, structureId) {
        this.origin.push(item);
        return [this.createOriginChangedEvent(structureId)];
    };
    /**
     * @return {?}
     */
    SourceManager.prototype.selectAll = /**
     * @return {?}
     */
    function () {
        this.formationManager.selectAll(this.getEntities().map((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.getId().toString(); })));
    };
    /**
     * @return {?}
     */
    SourceManager.prototype.unselectAll = /**
     * @return {?}
     */
    function () {
        this.formationManager.unselectAll();
    };
    /**
     * @param {?} itemId
     * @param {?} type
     * @return {?}
     */
    SourceManager.prototype.toggleRow = /**
     * @param {?} itemId
     * @param {?} type
     * @return {?}
     */
    function (itemId, type) {
        this.formationManager.toggleRow(itemId, type, this.getEntities().map((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.getId().toString(); })));
    };
    /**
     * @return {?}
     */
    SourceManager.prototype.getFormation = /**
     * @return {?}
     */
    function () {
        return this.formationManager;
    };
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    SourceManager.prototype.convertItems = /**
     * @private
     * @param {?} items
     * @return {?}
     */
    function (items) {
        return items.map((/**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        function (item, index) {
            return new OriginItemEntity(new OriginId(RandomStringGenerator.generate()), item, index);
        }));
    };
    /**
     * @private
     * @param {?} structureId
     * @return {?}
     */
    SourceManager.prototype.createOriginChangedEvent = /**
     * @private
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return new StructureOriginChangedAggregateEvent(structureId, this.origin);
    };
    /**
     * @private
     * @param {?} itemId
     * @return {?}
     */
    SourceManager.prototype.findOriginItem = /**
     * @private
     * @param {?} itemId
     * @return {?}
     */
    function (itemId) {
        return this.origin.find((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.getId().toString() === itemId; }));
    };
    /**
     * @private
     * @param {?} itemId
     * @return {?}
     */
    SourceManager.prototype.findOriginItemIndex = /**
     * @private
     * @param {?} itemId
     * @return {?}
     */
    function (itemId) {
        return this.origin.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.getId().toString() === itemId; }));
    };
    /**
     * @private
     * @return {?}
     */
    SourceManager.prototype.recalculatePositions = /**
     * @private
     * @return {?}
     */
    function () {
        this.entities.forEach((/**
         * @param {?} ent
         * @param {?} index
         * @return {?}
         */
        function (ent, index) {
            ent.setPosition(index);
        }));
    };
    /**
     * @private
     * @param {?} item
     * @param {?} structureId
     * @return {?}
     */
    SourceManager.prototype.deleteOneOriginItem = /**
     * @private
     * @param {?} item
     * @param {?} structureId
     * @return {?}
     */
    function (item, structureId) {
        if (item instanceof OriginId) {
            return this.deleteOriginItemByItemId(item, structureId);
        }
        else if (Number.isInteger(item)) {
            return this.deleteOriginItemByIndex(item, structureId);
        }
        else {
            return [];
        }
    };
    /**
     * @private
     * @param {?} itemId
     * @param {?} structureId
     * @return {?}
     */
    SourceManager.prototype.deleteOriginItemByItemId = /**
     * @private
     * @param {?} itemId
     * @param {?} structureId
     * @return {?}
     */
    function (itemId, structureId) {
        /** @type {?} */
        var index = this.findOriginItemIndex(itemId.toString());
        return this.deleteOriginItemByIndex(index, structureId);
    };
    /**
     * @private
     * @param {?} index
     * @param {?} structureId
     * @return {?}
     */
    SourceManager.prototype.deleteOriginItemByIndex = /**
     * @private
     * @param {?} index
     * @param {?} structureId
     * @return {?}
     */
    function (index, structureId) {
        var e_1, _a;
        if (index > -1) {
            /** @type {?} */
            var removedElements = this.origin.splice(index, 1);
            if (removedElements.length > 0) {
                try {
                    for (var removedElements_1 = tslib_1.__values(removedElements), removedElements_1_1 = removedElements_1.next(); !removedElements_1_1.done; removedElements_1_1 = removedElements_1.next()) {
                        var element = removedElements_1_1.value;
                        this.formationManager.unselectRow(element.getId().toString());
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (removedElements_1_1 && !removedElements_1_1.done && (_a = removedElements_1.return)) _a.call(removedElements_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                this.formationManager.calculateAllSelected(removedElements.map((/**
                 * @param {?} f
                 * @return {?}
                 */
                function (f) { return f.getId().toString(); })));
                this.formationManager.calculateAllUnselected();
            }
            return [
                this.createOriginChangedEvent(structureId)
            ];
        }
        return [];
    };
    /**
     * @private
     * @param {?} indexes
     * @param {?} structureId
     * @return {?}
     */
    SourceManager.prototype.deleteManyOriginItemByIndex = /**
     * @private
     * @param {?} indexes
     * @param {?} structureId
     * @return {?}
     */
    function (indexes, structureId) {
        var _this = this;
        /** @type {?} */
        var events = [];
        indexes.forEach((/**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            events.push.apply(events, tslib_1.__spread(_this.deleteOriginItemByIndex(index, structureId)));
        }));
        return events;
    };
    /**
     * @private
     * @param {?} itemIds
     * @param {?} structureId
     * @return {?}
     */
    SourceManager.prototype.deleteManyOriginItemByItemID = /**
     * @private
     * @param {?} itemIds
     * @param {?} structureId
     * @return {?}
     */
    function (itemIds, structureId) {
        var _this = this;
        /** @type {?} */
        var events = [];
        itemIds.forEach((/**
         * @param {?} itemId
         * @return {?}
         */
        function (itemId) {
            events.push.apply(events, tslib_1.__spread(_this.deleteOriginItemByItemId(itemId, structureId)));
        }));
        return events;
    };
    return SourceManager;
}());
export { SourceManager };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceManager.prototype.loading;
    /**
     * @type {?}
     * @private
     */
    SourceManager.prototype.fetched;
    /**
     * @type {?}
     * @private
     */
    SourceManager.prototype.origin;
    /**
     * @type {?}
     * @private
     */
    SourceManager.prototype.entities;
    /**
     * @type {?}
     * @private
     */
    SourceManager.prototype.preparedEntities;
    /**
     * @type {?}
     * @private
     */
    SourceManager.prototype.slicedEntities;
    /**
     * @type {?}
     * @private
     */
    SourceManager.prototype.formationManager;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9kb21haW4vY29yZS9zb3VyY2UubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBa0IscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUN0SCxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUUxRyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFLL0M7SUFpQkMsdUJBQVksZ0JBQWtDO1FBZnRDLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFFekIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUl6QixhQUFRLEdBQTRCLEVBQUUsQ0FBQzs7UUFHdkMscUJBQWdCLEdBQTRCLEVBQUUsQ0FBQztRQUUvQyxtQkFBYyxHQUE0QixFQUFFLENBQUM7UUFLcEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO0lBQzFDLENBQUM7Ozs7SUFFRCxpQ0FBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELGlDQUFTOzs7SUFBVDtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELGtDQUFVOzs7O0lBQVYsVUFBVyxPQUFnQjtRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELG1DQUFXOzs7O0lBQVgsVUFBWSxHQUE0QjtRQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUNwQixJQUFJLENB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QUVILE9BQU8sTUFBTSxDQUFDO0lBQ2YsQ0FBQztJQUVGLG9CQUFDO0FBQUQsQ0FBQyxBQTNPRCxJQTJPQzs7Ozs7OztJQXpPQSxnQ0FBaUM7Ozs7O0lBRWpDLGdDQUFpQzs7Ozs7SUFFakMsK0JBQXdDOzs7OztJQUV4QyxpQ0FBK0M7Ozs7O0lBRy9DLHlDQUF1RDs7Ozs7SUFFdkQsdUNBQXFEOzs7OztJQUVyRCx5Q0FBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgUmFuZG9tU3RyaW5nR2VuZXJhdG9yIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vb3JpZ2luL2VkaXQvc3RydWN0dXJlLnNvdXJjZS1pdGVtLWVkaXRlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlT3JpZ2luQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vb3JpZ2luL3N0cnVjdHVyZS5vcmlnaW4tY2hhbmdlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9maWVsZCc7XG5pbXBvcnQgeyBPcmlnaW5JZCB9IGZyb20gJy4uL29yaWdpbi9vcmlnaW4taWQnO1xuaW1wb3J0IHsgRm9ybWF0aW9uTWFuYWdlciB9IGZyb20gJy4uL2Zvcm1hdGlvbi9jb3JlL2Zvcm1hdGlvbi1tYW5hZ2VyJztcbmltcG9ydCB7IFJvd1NlbGVjdFRvZ2dsZVR5cGUgfSBmcm9tICcuLi9mb3JtYXRpb24vY29yZS9yb3ctc2VsZWN0LXRvZ2dsZS10eXBlJztcblxuXG5leHBvcnQgY2xhc3MgU291cmNlTWFuYWdlciB7XG5cblx0cHJpdmF0ZSBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBmZXRjaGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBvcmlnaW46IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+O1xuXG5cdHByaXZhdGUgZW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+ID0gW107XG5cblx0Ly8gRW50aXRpZXMgYWZ0ZXIgZmlsdGVyaW5nLCBzZWFyY2hpbmdcblx0cHJpdmF0ZSBwcmVwYXJlZEVudGl0aWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiA9IFtdO1xuXG5cdHByaXZhdGUgc2xpY2VkRW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+ID0gW107XG5cblx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25NYW5hZ2VyOiBGb3JtYXRpb25NYW5hZ2VyO1xuXG5cdGNvbnN0cnVjdG9yKGZvcm1hdGlvbk1hbmFnZXI6IEZvcm1hdGlvbk1hbmFnZXIpIHtcblx0XHR0aGlzLmZvcm1hdGlvbk1hbmFnZXIgPSBmb3JtYXRpb25NYW5hZ2VyO1xuXHR9XG5cblx0aXNMb2FkaW5nKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmxvYWRpbmc7XG5cdH1cblxuXHRpc0ZldGNoZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZmV0Y2hlZDtcblx0fVxuXG5cdHNldExvYWRpbmcoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMubG9hZGluZyA9IGVuYWJsZWQ7XG5cdH1cblxuXHRzZXRFbnRpdGllcyhlbnQ6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogdm9pZCB7XG5cdFx0dGhpcy5lbnRpdGllcyA9IGVudDtcblx0XHR0aGlzLnJlY2FsY3VsYXRlUG9zaXRpb25zKCk7XG5cdH1cblxuXHRnZXRFbnRpdGllcygpOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMuZW50aXRpZXM7XG5cdH1cblxuXHRzZXRQcmVwYXJlZEVudGl0aWVzKCk6IHZvaWQge1xuXHRcdHRoaXMucHJlcGFyZWRFbnRpdGllcyA9IFsuLi50aGlzLmVudGl0aWVzXTtcblx0fVxuXG5cdGdldFByZXBhcmVkRW50aXRpZXMoKTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLnByZXBhcmVkRW50aXRpZXM7XG5cdH1cblxuXHRzZXRTbGljZWRFbnRpdGllcyhlbnQ6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KSB7XG5cdFx0dGhpcy5zbGljZWRFbnRpdGllcyA9IGVudDtcblx0fVxuXG5cdGdldFNsaWNlZEVudGl0aWVzKCk6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5zbGljZWRFbnRpdGllcztcblx0fVxuXG5cdHNldE9yaWdpbihpdGVtczogQXJyYXk8YW55PiA9IFtdLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXHRcdHRoaXMub3JpZ2luID0gdGhpcy5jb252ZXJ0SXRlbXMoaXRlbXMpO1xuXG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlT3JpZ2luQ2hhbmdlZEV2ZW50KHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHNldENvbnZlcnRlZE9yaWdpbihpdGVtczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4gPSBbXSwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblx0XHR0aGlzLm9yaWdpbiA9IFsuLi5pdGVtc107XG5cblx0XHRyZXR1cm4gdGhpcy5jcmVhdGVPcmlnaW5DaGFuZ2VkRXZlbnQoc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0Z2V0T3JpZ2luKCk6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5vcmlnaW47XG5cdH1cblxuXHRnZXRPcmlnaW5TaXplKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMub3JpZ2luLmxlbmd0aDtcblx0fVxuXG5cdC8vIGVkaXRPcmlnaW5JdGVtQnlQcm9wZXJ0eShieUZpZWxkLCB2YWx1ZTogYW55LCBmaWVsZDogRmllbGQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFnZ3JlZ2F0ZUV2ZW50IHtcblx0Ly9cblx0Ly8gfVxuXG5cdGVkaXRPcmlnaW5JdGVtKGl0ZW1JZDogc3RyaW5nLCB2YWx1ZTogYW55LCBmaWVsZDogRmllbGQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHRjb25zdCBpdGVtOiBPcmlnaW5JdGVtRW50aXR5ID0gdGhpcy5maW5kT3JpZ2luSXRlbShpdGVtSWQpLFxuXHRcdFx0aXRlbUJlZm9yZUNoYW5nZSA9IGl0ZW0uY2xvbmUoKTtcblxuXHRcdGlmIChpdGVtKSB7XG5cdFx0XHRpdGVtLnNvdXJjZUl0ZW1bZmllbGQuZ2V0QWNjZXNzb3IoKV0gPSB2YWx1ZTtcblx0XHRcdGl0ZW0uYnVtcFZlcnNpb24oKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gW1xuXHRcdFx0bmV3IFN0cnVjdHVyZVNvdXJjZUl0ZW1FZGl0ZWRBZ2dyZWdhdGVFdmVudChzdHJ1Y3R1cmVJZCwgaXRlbUJlZm9yZUNoYW5nZSwgaXRlbS5jbG9uZSgpKSxcblx0XHRcdHRoaXMuY3JlYXRlT3JpZ2luQ2hhbmdlZEV2ZW50KHN0cnVjdHVyZUlkKVxuXHRcdF07XG5cdH1cblxuXHRkZWxldGVBbGxTZWxlY3RlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblx0XHRjb25zdCBldmVudHM6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4gPSBbXTtcblxuXHRcdGNvbnN0IHJvd3MgPSB0aGlzLmZvcm1hdGlvbk1hbmFnZXIuZ2V0U2VsZWN0ZWRSb3dzKCk7XG5cblx0XHRyb3dzLmZvckVhY2goKHI6IHN0cmluZykgPT4ge1xuXHRcdFx0ZXZlbnRzLnB1c2goLi4udGhpcy5kZWxldGVPcmlnaW5JdGVtQnlJdGVtSWQobmV3IE9yaWdpbklkKHIpLCBzdHJ1Y3R1cmVJZCkpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGV2ZW50cztcblx0fVxuXG5cdGRlbGV0ZU9yaWdpbkl0ZW0ocGF5bG9hZDogbnVtYmVyIHwgT3JpZ2luSWQgfCBBcnJheTxudW1iZXI+IHwgQXJyYXk8T3JpZ2luSWQ+LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdGlmIChwYXlsb2FkIGluc3RhbmNlb2YgT3JpZ2luSWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmRlbGV0ZU9yaWdpbkl0ZW1CeUl0ZW1JZChwYXlsb2FkLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHBheWxvYWQpKSB7XG5cblx0XHRcdGNvbnN0IGV2ZW50czogQXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiA9IFtdO1xuXG5cdFx0XHRwYXlsb2FkLmZvckVhY2goKGl0ZW06IG51bWJlciB8IE9yaWdpbklkKSA9PiB7XG5cdFx0XHRcdGV2ZW50cy5wdXNoKC4uLnRoaXMuZGVsZXRlT25lT3JpZ2luSXRlbShpdGVtLCBzdHJ1Y3R1cmVJZCkpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiBldmVudHM7XG5cblx0XHR9IGVsc2UgaWYgKE51bWJlci5pc0ludGVnZXIocGF5bG9hZCkpIHtcblx0XHRcdHJldHVybiB0aGlzLmRlbGV0ZU9yaWdpbkl0ZW1CeUluZGV4KHBheWxvYWQsIHN0cnVjdHVyZUlkKTtcblx0XHR9XG5cdH1cblxuXHRhZGRPcmlnaW5JdGVtKGl0ZW06IGFueSwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblx0XHR0aGlzLm9yaWdpbi5wdXNoKGl0ZW0pO1xuXHRcdHJldHVybiBbdGhpcy5jcmVhdGVPcmlnaW5DaGFuZ2VkRXZlbnQoc3RydWN0dXJlSWQpXTtcblx0fVxuXG5cdHNlbGVjdEFsbCgpOiB2b2lkIHtcblx0XHR0aGlzLmZvcm1hdGlvbk1hbmFnZXIuc2VsZWN0QWxsKHRoaXMuZ2V0RW50aXRpZXMoKS5tYXAoZSA9PiBlLmdldElkKCkudG9TdHJpbmcoKSkpO1xuXHR9XG5cblx0dW5zZWxlY3RBbGwoKTogdm9pZCB7XG5cdFx0dGhpcy5mb3JtYXRpb25NYW5hZ2VyLnVuc2VsZWN0QWxsKCk7XG5cdH1cblxuXHR0b2dnbGVSb3coaXRlbUlkOiBzdHJpbmcsIHR5cGU6IFJvd1NlbGVjdFRvZ2dsZVR5cGUpOiB2b2lkIHtcblx0XHR0aGlzLmZvcm1hdGlvbk1hbmFnZXIudG9nZ2xlUm93KGl0ZW1JZCwgdHlwZSwgdGhpcy5nZXRFbnRpdGllcygpLm1hcChlID0+IGUuZ2V0SWQoKS50b1N0cmluZygpKSk7XG5cdH1cblxuXHRnZXRGb3JtYXRpb24oKTogRm9ybWF0aW9uTWFuYWdlciB7XG5cdFx0cmV0dXJuIHRoaXMuZm9ybWF0aW9uTWFuYWdlcjtcblx0fVxuXG5cdHByaXZhdGUgY29udmVydEl0ZW1zKGl0ZW1zOiBBcnJheTxhbnk+KTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiBpdGVtcy5tYXAoKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBPcmlnaW5JdGVtRW50aXR5KG5ldyBPcmlnaW5JZChSYW5kb21TdHJpbmdHZW5lcmF0b3IuZ2VuZXJhdGUoKSksIGl0ZW0sIGluZGV4KTtcblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlT3JpZ2luQ2hhbmdlZEV2ZW50KHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cdFx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmVPcmlnaW5DaGFuZ2VkQWdncmVnYXRlRXZlbnQoc3RydWN0dXJlSWQsIHRoaXMub3JpZ2luKTtcblx0fVxuXG5cdHByaXZhdGUgZmluZE9yaWdpbkl0ZW0oaXRlbUlkOiBzdHJpbmcpOiBPcmlnaW5JdGVtRW50aXR5IHtcblx0XHRyZXR1cm4gdGhpcy5vcmlnaW4uZmluZCgoaXRlbTogT3JpZ2luSXRlbUVudGl0eSkgPT4gaXRlbS5nZXRJZCgpLnRvU3RyaW5nKCkgPT09IGl0ZW1JZCk7XG5cdH1cblxuXHRwcml2YXRlIGZpbmRPcmlnaW5JdGVtSW5kZXgoaXRlbUlkOiBzdHJpbmcpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm9yaWdpbi5maW5kSW5kZXgoKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHkpID0+IGl0ZW0uZ2V0SWQoKS50b1N0cmluZygpID09PSBpdGVtSWQpO1xuXHR9XG5cblx0cHJpdmF0ZSByZWNhbGN1bGF0ZVBvc2l0aW9ucygpOiB2b2lkIHtcblx0XHR0aGlzLmVudGl0aWVzLmZvckVhY2goKGVudDogT3JpZ2luSXRlbUVudGl0eSwgaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdFx0ZW50LnNldFBvc2l0aW9uKGluZGV4KTtcblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgZGVsZXRlT25lT3JpZ2luSXRlbShpdGVtOiBudW1iZXIgfCBPcmlnaW5JZCwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHRpZiAoaXRlbSBpbnN0YW5jZW9mIE9yaWdpbklkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5kZWxldGVPcmlnaW5JdGVtQnlJdGVtSWQoaXRlbSwgc3RydWN0dXJlSWQpO1xuXHRcdH0gZWxzZSBpZiAoTnVtYmVyLmlzSW50ZWdlcihpdGVtKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZGVsZXRlT3JpZ2luSXRlbUJ5SW5kZXgoaXRlbSwgc3RydWN0dXJlSWQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBkZWxldGVPcmlnaW5JdGVtQnlJdGVtSWQoaXRlbUlkOiBPcmlnaW5JZCwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHRjb25zdCBpbmRleCA9IHRoaXMuZmluZE9yaWdpbkl0ZW1JbmRleChpdGVtSWQudG9TdHJpbmcoKSk7XG5cblx0XHRyZXR1cm4gdGhpcy5kZWxldGVPcmlnaW5JdGVtQnlJbmRleChpbmRleCwgc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0cHJpdmF0ZSBkZWxldGVPcmlnaW5JdGVtQnlJbmRleChpbmRleDogbnVtYmVyLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdGlmIChpbmRleCA+IC0xKSB7XG5cdFx0XHRjb25zdCByZW1vdmVkRWxlbWVudHM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+ID0gdGhpcy5vcmlnaW4uc3BsaWNlKGluZGV4LCAxKTtcblxuXHRcdFx0aWYgKHJlbW92ZWRFbGVtZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiByZW1vdmVkRWxlbWVudHMpIHtcblx0XHRcdFx0XHR0aGlzLmZvcm1hdGlvbk1hbmFnZXIudW5zZWxlY3RSb3coZWxlbWVudC5nZXRJZCgpLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuZm9ybWF0aW9uTWFuYWdlci5jYWxjdWxhdGVBbGxTZWxlY3RlZChyZW1vdmVkRWxlbWVudHMubWFwKChmKSA9PiBmLmdldElkKCkudG9TdHJpbmcoKSkpO1xuXHRcdFx0XHR0aGlzLmZvcm1hdGlvbk1hbmFnZXIuY2FsY3VsYXRlQWxsVW5zZWxlY3RlZCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHR0aGlzLmNyZWF0ZU9yaWdpbkNoYW5nZWRFdmVudChzdHJ1Y3R1cmVJZClcblx0XHRcdF07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0cHJpdmF0ZSBkZWxldGVNYW55T3JpZ2luSXRlbUJ5SW5kZXgoaW5kZXhlczogQXJyYXk8bnVtYmVyPiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHRjb25zdCBldmVudHM6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4gPSBbXTtcblxuXHRcdGluZGV4ZXMuZm9yRWFjaCgoaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdFx0ZXZlbnRzLnB1c2goLi4udGhpcy5kZWxldGVPcmlnaW5JdGVtQnlJbmRleChpbmRleCwgc3RydWN0dXJlSWQpKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBldmVudHM7XG5cdH1cblxuXHRwcml2YXRlIGRlbGV0ZU1hbnlPcmlnaW5JdGVtQnlJdGVtSUQoaXRlbUlkczogQXJyYXk8T3JpZ2luSWQ+LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdGNvbnN0IGV2ZW50czogQXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiA9IFtdO1xuXG5cdFx0aXRlbUlkcy5mb3JFYWNoKChpdGVtSWQ6IE9yaWdpbklkKSA9PiB7XG5cdFx0XHRldmVudHMucHVzaCguLi50aGlzLmRlbGV0ZU9yaWdpbkl0ZW1CeUl0ZW1JZChpdGVtSWQsIHN0cnVjdHVyZUlkKSk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gZXZlbnRzO1xuXHR9XG5cbn1cbiJdfQ==