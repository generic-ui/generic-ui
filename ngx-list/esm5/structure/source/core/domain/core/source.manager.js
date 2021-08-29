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
            item.rawData[field.getAccessor()] = value;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9kb21haW4vY29yZS9zb3VyY2UubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBa0IscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUN0SCxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUUxRyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFLL0M7SUFpQkMsdUJBQVksZ0JBQWtDO1FBZnRDLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFFekIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUl6QixhQUFRLEdBQTRCLEVBQUUsQ0FBQzs7UUFHdkMscUJBQWdCLEdBQTRCLEVBQUUsQ0FBQztRQUUvQyxtQkFBYyxHQUE0QixFQUFFLENBQUM7UUFLcEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO0lBQzFDLENBQUM7Ozs7SUFFRCxpQ0FBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELGlDQUFTOzs7SUFBVDtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELGtDQUFVOzs7O0lBQVYsVUFBVyxPQUFnQjtRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELG1DQUFXOzs7O0lBQVgsVUFBWSxHQUE0QjtRQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUNwQixJQUFJLENB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Q3hCLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQztJQUVGLG9CQUFDO0FBQUQsQ0FBQyxBQTNPRCxJQTJPQzs7Ozs7OztJQXpPQSxnQ0FBaUM7Ozs7O0lBRWpDLGdDQUFpQzs7Ozs7SUFFakMsK0JBQXdDOzs7OztJQUV4QyxpQ0FBK0M7Ozs7O0lBRy9DLHlDQUF1RDs7Ozs7SUFFdkQsdUNBQXFEOzs7OztJQUVyRCx5Q0FBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgUmFuZG9tU3RyaW5nR2VuZXJhdG9yIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vb3JpZ2luL2VkaXQvc3RydWN0dXJlLnNvdXJjZS1pdGVtLWVkaXRlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlT3JpZ2luQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vb3JpZ2luL3N0cnVjdHVyZS5vcmlnaW4tY2hhbmdlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9maWVsZCc7XG5pbXBvcnQgeyBPcmlnaW5JZCB9IGZyb20gJy4uL29yaWdpbi9vcmlnaW4taWQnO1xuaW1wb3J0IHsgRm9ybWF0aW9uTWFuYWdlciB9IGZyb20gJy4uL2Zvcm1hdGlvbi9jb3JlL2Zvcm1hdGlvbi1tYW5hZ2VyJztcbmltcG9ydCB7IFJvd1NlbGVjdFRvZ2dsZVR5cGUgfSBmcm9tICcuLi9mb3JtYXRpb24vY29yZS9yb3ctc2VsZWN0LXRvZ2dsZS10eXBlJztcblxuXG5leHBvcnQgY2xhc3MgU291cmNlTWFuYWdlciB7XG5cblx0cHJpdmF0ZSBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBmZXRjaGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBvcmlnaW46IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+O1xuXG5cdHByaXZhdGUgZW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+ID0gW107XG5cblx0Ly8gRW50aXRpZXMgYWZ0ZXIgZmlsdGVyaW5nLCBzZWFyY2hpbmdcblx0cHJpdmF0ZSBwcmVwYXJlZEVudGl0aWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiA9IFtdO1xuXG5cdHByaXZhdGUgc2xpY2VkRW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+ID0gW107XG5cblx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25NYW5hZ2VyOiBGb3JtYXRpb25NYW5hZ2VyO1xuXG5cdGNvbnN0cnVjdG9yKGZvcm1hdGlvbk1hbmFnZXI6IEZvcm1hdGlvbk1hbmFnZXIpIHtcblx0XHR0aGlzLmZvcm1hdGlvbk1hbmFnZXIgPSBmb3JtYXRpb25NYW5hZ2VyO1xuXHR9XG5cblx0aXNMb2FkaW5nKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmxvYWRpbmc7XG5cdH1cblxuXHRpc0ZldGNoZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZmV0Y2hlZDtcblx0fVxuXG5cdHNldExvYWRpbmcoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMubG9hZGluZyA9IGVuYWJsZWQ7XG5cdH1cblxuXHRzZXRFbnRpdGllcyhlbnQ6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogdm9pZCB7XG5cdFx0dGhpcy5lbnRpdGllcyA9IGVudDtcblx0XHR0aGlzLnJlY2FsY3VsYXRlUG9zaXRpb25zKCk7XG5cdH1cblxuXHRnZXRFbnRpdGllcygpOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMuZW50aXRpZXM7XG5cdH1cblxuXHRzZXRQcmVwYXJlZEVudGl0aWVzKCk6IHZvaWQge1xuXHRcdHRoaXMucHJlcGFyZWRFbnRpdGllcyA9IFsuLi50aGlzLmVudGl0aWVzXTtcblx0fVxuXG5cdGdldFByZXBhcmVkRW50aXRpZXMoKTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLnByZXBhcmVkRW50aXRpZXM7XG5cdH1cblxuXHRzZXRTbGljZWRFbnRpdGllcyhlbnQ6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KSB7XG5cdFx0dGhpcy5zbGljZWRFbnRpdGllcyA9IGVudDtcblx0fVxuXG5cdGdldFNsaWNlZEVudGl0aWVzKCk6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5zbGljZWRFbnRpdGllcztcblx0fVxuXG5cdHNldE9yaWdpbihpdGVtczogQXJyYXk8YW55PiA9IFtdLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXHRcdHRoaXMub3JpZ2luID0gdGhpcy5jb252ZXJ0SXRlbXMoaXRlbXMpO1xuXG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlT3JpZ2luQ2hhbmdlZEV2ZW50KHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHNldENvbnZlcnRlZE9yaWdpbihpdGVtczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4gPSBbXSwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblx0XHR0aGlzLm9yaWdpbiA9IFsuLi5pdGVtc107XG5cblx0XHRyZXR1cm4gdGhpcy5jcmVhdGVPcmlnaW5DaGFuZ2VkRXZlbnQoc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0Z2V0T3JpZ2luKCk6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5vcmlnaW47XG5cdH1cblxuXHRnZXRPcmlnaW5TaXplKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMub3JpZ2luLmxlbmd0aDtcblx0fVxuXG5cdC8vIGVkaXRPcmlnaW5JdGVtQnlQcm9wZXJ0eShieUZpZWxkLCB2YWx1ZTogYW55LCBmaWVsZDogRmllbGQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFnZ3JlZ2F0ZUV2ZW50IHtcblx0Ly9cblx0Ly8gfVxuXG5cdGVkaXRPcmlnaW5JdGVtKGl0ZW1JZDogc3RyaW5nLCB2YWx1ZTogYW55LCBmaWVsZDogRmllbGQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHRjb25zdCBpdGVtOiBPcmlnaW5JdGVtRW50aXR5ID0gdGhpcy5maW5kT3JpZ2luSXRlbShpdGVtSWQpLFxuXHRcdFx0aXRlbUJlZm9yZUNoYW5nZSA9IGl0ZW0uY2xvbmUoKTtcblxuXHRcdGlmIChpdGVtKSB7XG5cdFx0XHRpdGVtLnJhd0RhdGFbZmllbGQuZ2V0QWNjZXNzb3IoKV0gPSB2YWx1ZTtcblx0XHRcdGl0ZW0uYnVtcFZlcnNpb24oKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gW1xuXHRcdFx0bmV3IFN0cnVjdHVyZVNvdXJjZUl0ZW1FZGl0ZWRBZ2dyZWdhdGVFdmVudChzdHJ1Y3R1cmVJZCwgaXRlbUJlZm9yZUNoYW5nZSwgaXRlbS5jbG9uZSgpKSxcblx0XHRcdHRoaXMuY3JlYXRlT3JpZ2luQ2hhbmdlZEV2ZW50KHN0cnVjdHVyZUlkKVxuXHRcdF07XG5cdH1cblxuXHRkZWxldGVBbGxTZWxlY3RlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblx0XHRjb25zdCBldmVudHM6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4gPSBbXTtcblxuXHRcdGNvbnN0IHJvd3MgPSB0aGlzLmZvcm1hdGlvbk1hbmFnZXIuZ2V0U2VsZWN0ZWRSb3dzKCk7XG5cblx0XHRyb3dzLmZvckVhY2goKHI6IHN0cmluZykgPT4ge1xuXHRcdFx0ZXZlbnRzLnB1c2goLi4udGhpcy5kZWxldGVPcmlnaW5JdGVtQnlJdGVtSWQobmV3IE9yaWdpbklkKHIpLCBzdHJ1Y3R1cmVJZCkpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGV2ZW50cztcblx0fVxuXG5cdGRlbGV0ZU9yaWdpbkl0ZW0ocGF5bG9hZDogbnVtYmVyIHwgT3JpZ2luSWQgfCBBcnJheTxudW1iZXI+IHwgQXJyYXk8T3JpZ2luSWQ+LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdGlmIChwYXlsb2FkIGluc3RhbmNlb2YgT3JpZ2luSWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmRlbGV0ZU9yaWdpbkl0ZW1CeUl0ZW1JZChwYXlsb2FkLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHBheWxvYWQpKSB7XG5cblx0XHRcdGNvbnN0IGV2ZW50czogQXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiA9IFtdO1xuXG5cdFx0XHRwYXlsb2FkLmZvckVhY2goKGl0ZW06IG51bWJlciB8IE9yaWdpbklkKSA9PiB7XG5cdFx0XHRcdGV2ZW50cy5wdXNoKC4uLnRoaXMuZGVsZXRlT25lT3JpZ2luSXRlbShpdGVtLCBzdHJ1Y3R1cmVJZCkpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiBldmVudHM7XG5cblx0XHR9IGVsc2UgaWYgKE51bWJlci5pc0ludGVnZXIocGF5bG9hZCkpIHtcblx0XHRcdHJldHVybiB0aGlzLmRlbGV0ZU9yaWdpbkl0ZW1CeUluZGV4KHBheWxvYWQsIHN0cnVjdHVyZUlkKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGRlbGV0ZU9uZU9yaWdpbkl0ZW0oaXRlbTogbnVtYmVyIHwgT3JpZ2luSWQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXG5cdFx0aWYgKGl0ZW0gaW5zdGFuY2VvZiBPcmlnaW5JZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZGVsZXRlT3JpZ2luSXRlbUJ5SXRlbUlkKGl0ZW0sIHN0cnVjdHVyZUlkKTtcblx0XHR9IGVsc2UgaWYgKE51bWJlci5pc0ludGVnZXIoaXRlbSkpIHtcblx0XHRcdHJldHVybiB0aGlzLmRlbGV0ZU9yaWdpbkl0ZW1CeUluZGV4KGl0ZW0sIHN0cnVjdHVyZUlkKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZGVsZXRlT3JpZ2luSXRlbUJ5SXRlbUlkKGl0ZW1JZDogT3JpZ2luSWQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLmZpbmRPcmlnaW5JdGVtSW5kZXgoaXRlbUlkLnRvU3RyaW5nKCkpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZGVsZXRlT3JpZ2luSXRlbUJ5SW5kZXgoaW5kZXgsIHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHByaXZhdGUgZGVsZXRlT3JpZ2luSXRlbUJ5SW5kZXgoaW5kZXg6IG51bWJlciwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHRpZiAoaW5kZXggPiAtMSkge1xuXHRcdFx0Y29uc3QgcmVtb3ZlZEVsZW1lbnRzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiA9IHRoaXMub3JpZ2luLnNwbGljZShpbmRleCwgMSk7XG5cblx0XHRcdGlmIChyZW1vdmVkRWxlbWVudHMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgcmVtb3ZlZEVsZW1lbnRzKSB7XG5cdFx0XHRcdFx0dGhpcy5mb3JtYXRpb25NYW5hZ2VyLnVuc2VsZWN0Um93KGVsZW1lbnQuZ2V0SWQoKS50b1N0cmluZygpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmZvcm1hdGlvbk1hbmFnZXIuY2FsY3VsYXRlQWxsU2VsZWN0ZWQocmVtb3ZlZEVsZW1lbnRzLm1hcCgoZikgPT4gZi5nZXRJZCgpLnRvU3RyaW5nKCkpKTtcblx0XHRcdFx0dGhpcy5mb3JtYXRpb25NYW5hZ2VyLmNhbGN1bGF0ZUFsbFVuc2VsZWN0ZWQoKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0dGhpcy5jcmVhdGVPcmlnaW5DaGFuZ2VkRXZlbnQoc3RydWN0dXJlSWQpXG5cdFx0XHRdO1xuXHRcdH1cblxuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdHByaXZhdGUgZGVsZXRlTWFueU9yaWdpbkl0ZW1CeUluZGV4KGluZGV4ZXM6IEFycmF5PG51bWJlcj4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXG5cdFx0Y29uc3QgZXZlbnRzOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+ID0gW107XG5cblx0XHRpbmRleGVzLmZvckVhY2goKGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRcdGV2ZW50cy5wdXNoKC4uLnRoaXMuZGVsZXRlT3JpZ2luSXRlbUJ5SW5kZXgoaW5kZXgsIHN0cnVjdHVyZUlkKSk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gZXZlbnRzO1xuXHR9XG5cblx0cHJpdmF0ZSBkZWxldGVNYW55T3JpZ2luSXRlbUJ5SXRlbUlEKGl0ZW1JZHM6IEFycmF5PE9yaWdpbklkPiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHRjb25zdCBldmVudHM6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4gPSBbXTtcblxuXHRcdGl0ZW1JZHMuZm9yRWFjaCgoaXRlbUlkOiBPcmlnaW5JZCkgPT4ge1xuXHRcdFx0ZXZlbnRzLnB1c2goLi4udGhpcy5kZWxldGVPcmlnaW5JdGVtQnlJdGVtSWQoaXRlbUlkLCBzdHJ1Y3R1cmVJZCkpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGV2ZW50cztcblx0fVxuXG5cdGFkZE9yaWdpbkl0ZW0oaXRlbTogYW55LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXHRcdHRoaXMub3JpZ2luLnB1c2goaXRlbSk7XG5cdFx0cmV0dXJuIFt0aGlzLmNyZWF0ZU9yaWdpbkNoYW5nZWRFdmVudChzdHJ1Y3R1cmVJZCldO1xuXHR9XG5cblx0c2VsZWN0QWxsKCk6IHZvaWQge1xuXHRcdHRoaXMuZm9ybWF0aW9uTWFuYWdlci5zZWxlY3RBbGwodGhpcy5nZXRFbnRpdGllcygpLm1hcChlID0+IGUuZ2V0SWQoKS50b1N0cmluZygpKSk7XG5cdH1cblxuXHR1bnNlbGVjdEFsbCgpOiB2b2lkIHtcblx0XHR0aGlzLmZvcm1hdGlvbk1hbmFnZXIudW5zZWxlY3RBbGwoKTtcblx0fVxuXG5cdHRvZ2dsZVJvdyhpdGVtSWQ6IHN0cmluZywgdHlwZTogUm93U2VsZWN0VG9nZ2xlVHlwZSk6IHZvaWQge1xuXHRcdHRoaXMuZm9ybWF0aW9uTWFuYWdlci50b2dnbGVSb3coaXRlbUlkLCB0eXBlLCB0aGlzLmdldEVudGl0aWVzKCkubWFwKGUgPT4gZS5nZXRJZCgpLnRvU3RyaW5nKCkpKTtcblx0fVxuXG5cdGdldEZvcm1hdGlvbigpOiBGb3JtYXRpb25NYW5hZ2VyIHtcblx0XHRyZXR1cm4gdGhpcy5mb3JtYXRpb25NYW5hZ2VyO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0SXRlbXMoaXRlbXM6IEFycmF5PGFueT4pOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIGl0ZW1zLm1hcCgoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IE9yaWdpbkl0ZW1FbnRpdHkobmV3IE9yaWdpbklkKFJhbmRvbVN0cmluZ0dlbmVyYXRvci5nZW5lcmF0ZSgpKSwgaXRlbSwgaW5kZXgpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVPcmlnaW5DaGFuZ2VkRXZlbnQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZU9yaWdpbkNoYW5nZWRBZ2dyZWdhdGVFdmVudChzdHJ1Y3R1cmVJZCwgdGhpcy5vcmlnaW4pO1xuXHR9XG5cblx0cHJpdmF0ZSBmaW5kT3JpZ2luSXRlbShpdGVtSWQ6IHN0cmluZyk6IE9yaWdpbkl0ZW1FbnRpdHkge1xuXHRcdHJldHVybiB0aGlzLm9yaWdpbi5maW5kKChpdGVtOiBPcmlnaW5JdGVtRW50aXR5KSA9PiBpdGVtLmdldElkKCkudG9TdHJpbmcoKSA9PT0gaXRlbUlkKTtcblx0fVxuXG5cdHByaXZhdGUgZmluZE9yaWdpbkl0ZW1JbmRleChpdGVtSWQ6IHN0cmluZyk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMub3JpZ2luLmZpbmRJbmRleCgoaXRlbTogT3JpZ2luSXRlbUVudGl0eSkgPT4gaXRlbS5nZXRJZCgpLnRvU3RyaW5nKCkgPT09IGl0ZW1JZCk7XG5cdH1cblxuXHRwcml2YXRlIHJlY2FsY3VsYXRlUG9zaXRpb25zKCk6IHZvaWQge1xuXHRcdHRoaXMuZW50aXRpZXMuZm9yRWFjaCgoZW50OiBPcmlnaW5JdGVtRW50aXR5LCBpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0XHRlbnQuc2V0UG9zaXRpb24oaW5kZXgpO1xuXHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==