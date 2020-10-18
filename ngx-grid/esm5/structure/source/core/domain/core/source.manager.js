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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9kb21haW4vY29yZS9zb3VyY2UubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBa0IscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUN0SCxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUUxRyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFLL0M7SUFpQkMsdUJBQVksZ0JBQWtDO1FBZnRDLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFFekIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUl6QixhQUFRLEdBQTRCLEVBQUUsQ0FBQzs7UUFHdkMscUJBQWdCLEdBQTRCLEVBQUUsQ0FBQztRQUUvQyxtQkFBYyxHQUE0QixFQUFFLENBQUM7UUFLcEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO0lBQzFDLENBQUM7Ozs7SUFFRCxpQ0FBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELGlDQUFTOzs7SUFBVDtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELGtDQUFVOzs7O0lBQVYsVUFBVyxPQUFnQjtRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELG1DQUFXOzs7O0lBQVgsVUFBWSxHQUE0QjtRQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUNwQixJQUFJLENB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eEIsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDO0lBRUYsb0JBQUM7QUFBRCxDQUFDLEFBM09ELElBMk9DOzs7Ozs7O0lBek9BLGdDQUFpQzs7Ozs7SUFFakMsZ0NBQWlDOzs7OztJQUVqQywrQkFBd0M7Ozs7O0lBRXhDLGlDQUErQzs7Ozs7SUFHL0MseUNBQXVEOzs7OztJQUV2RCx1Q0FBcUQ7Ozs7O0lBRXJELHlDQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBSYW5kb21TdHJpbmdHZW5lcmF0b3IgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VJdGVtRWRpdGVkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi9vcmlnaW4vZWRpdC9zdHJ1Y3R1cmUuc291cmNlLWl0ZW0tZWRpdGVkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVPcmlnaW5DaGFuZ2VkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi9vcmlnaW4vc3RydWN0dXJlLm9yaWdpbi1jaGFuZ2VkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2ZpZWxkJztcbmltcG9ydCB7IE9yaWdpbklkIH0gZnJvbSAnLi4vb3JpZ2luL29yaWdpbi1pZCc7XG5pbXBvcnQgeyBGb3JtYXRpb25NYW5hZ2VyIH0gZnJvbSAnLi4vZm9ybWF0aW9uL2NvcmUvZm9ybWF0aW9uLW1hbmFnZXInO1xuaW1wb3J0IHsgUm93U2VsZWN0VG9nZ2xlVHlwZSB9IGZyb20gJy4uL2Zvcm1hdGlvbi9jb3JlL3Jvdy1zZWxlY3QtdG9nZ2xlLXR5cGUnO1xuXG5cbmV4cG9ydCBjbGFzcyBTb3VyY2VNYW5hZ2VyIHtcblxuXHRwcml2YXRlIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIGZldGNoZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIG9yaWdpbjogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT47XG5cblx0cHJpdmF0ZSBlbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4gPSBbXTtcblxuXHQvLyBFbnRpdGllcyBhZnRlciBmaWx0ZXJpbmcsIHNlYXJjaGluZ1xuXHRwcml2YXRlIHByZXBhcmVkRW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+ID0gW107XG5cblx0cHJpdmF0ZSBzbGljZWRFbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4gPSBbXTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbk1hbmFnZXI6IEZvcm1hdGlvbk1hbmFnZXI7XG5cblx0Y29uc3RydWN0b3IoZm9ybWF0aW9uTWFuYWdlcjogRm9ybWF0aW9uTWFuYWdlcikge1xuXHRcdHRoaXMuZm9ybWF0aW9uTWFuYWdlciA9IGZvcm1hdGlvbk1hbmFnZXI7XG5cdH1cblxuXHRpc0xvYWRpbmcoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubG9hZGluZztcblx0fVxuXG5cdGlzRmV0Y2hlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5mZXRjaGVkO1xuXHR9XG5cblx0c2V0TG9hZGluZyhlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5sb2FkaW5nID0gZW5hYmxlZDtcblx0fVxuXG5cdHNldEVudGl0aWVzKGVudDogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiB2b2lkIHtcblx0XHR0aGlzLmVudGl0aWVzID0gZW50O1xuXHRcdHRoaXMucmVjYWxjdWxhdGVQb3NpdGlvbnMoKTtcblx0fVxuXG5cdGdldEVudGl0aWVzKCk6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5lbnRpdGllcztcblx0fVxuXG5cdHNldFByZXBhcmVkRW50aXRpZXMoKTogdm9pZCB7XG5cdFx0dGhpcy5wcmVwYXJlZEVudGl0aWVzID0gWy4uLnRoaXMuZW50aXRpZXNdO1xuXHR9XG5cblx0Z2V0UHJlcGFyZWRFbnRpdGllcygpOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMucHJlcGFyZWRFbnRpdGllcztcblx0fVxuXG5cdHNldFNsaWNlZEVudGl0aWVzKGVudDogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pIHtcblx0XHR0aGlzLnNsaWNlZEVudGl0aWVzID0gZW50O1xuXHR9XG5cblx0Z2V0U2xpY2VkRW50aXRpZXMoKTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLnNsaWNlZEVudGl0aWVzO1xuXHR9XG5cblx0c2V0T3JpZ2luKGl0ZW1zOiBBcnJheTxhbnk+ID0gW10sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cdFx0dGhpcy5vcmlnaW4gPSB0aGlzLmNvbnZlcnRJdGVtcyhpdGVtcyk7XG5cblx0XHRyZXR1cm4gdGhpcy5jcmVhdGVPcmlnaW5DaGFuZ2VkRXZlbnQoc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0c2V0Q29udmVydGVkT3JpZ2luKGl0ZW1zOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiA9IFtdLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXHRcdHRoaXMub3JpZ2luID0gWy4uLml0ZW1zXTtcblxuXHRcdHJldHVybiB0aGlzLmNyZWF0ZU9yaWdpbkNoYW5nZWRFdmVudChzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRnZXRPcmlnaW4oKTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLm9yaWdpbjtcblx0fVxuXG5cdGdldE9yaWdpblNpemUoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5vcmlnaW4ubGVuZ3RoO1xuXHR9XG5cblx0Ly8gZWRpdE9yaWdpbkl0ZW1CeVByb3BlcnR5KGJ5RmllbGQsIHZhbHVlOiBhbnksIGZpZWxkOiBGaWVsZCwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQWdncmVnYXRlRXZlbnQge1xuXHQvL1xuXHQvLyB9XG5cblx0ZWRpdE9yaWdpbkl0ZW0oaXRlbUlkOiBzdHJpbmcsIHZhbHVlOiBhbnksIGZpZWxkOiBGaWVsZCwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdGNvbnN0IGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHkgPSB0aGlzLmZpbmRPcmlnaW5JdGVtKGl0ZW1JZCksXG5cdFx0XHRpdGVtQmVmb3JlQ2hhbmdlID0gaXRlbS5jbG9uZSgpO1xuXG5cdFx0aWYgKGl0ZW0pIHtcblx0XHRcdGl0ZW0ucmF3RGF0YVtmaWVsZC5nZXRBY2Nlc3NvcigpXSA9IHZhbHVlO1xuXHRcdFx0aXRlbS5idW1wVmVyc2lvbigpO1xuXHRcdH1cblxuXHRcdHJldHVybiBbXG5cdFx0XHRuZXcgU3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEFnZ3JlZ2F0ZUV2ZW50KHN0cnVjdHVyZUlkLCBpdGVtQmVmb3JlQ2hhbmdlLCBpdGVtLmNsb25lKCkpLFxuXHRcdFx0dGhpcy5jcmVhdGVPcmlnaW5DaGFuZ2VkRXZlbnQoc3RydWN0dXJlSWQpXG5cdFx0XTtcblx0fVxuXG5cdGRlbGV0ZUFsbFNlbGVjdGVkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXHRcdGxldCBldmVudHM6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4gPSBbXTtcblxuXHRcdGNvbnN0IHJvd3MgPSB0aGlzLmZvcm1hdGlvbk1hbmFnZXIuZ2V0U2VsZWN0ZWRSb3dzKCk7XG5cblx0XHRyb3dzLmZvckVhY2goKHI6IHN0cmluZykgPT4ge1xuXHRcdFx0ZXZlbnRzLnB1c2goLi4udGhpcy5kZWxldGVPcmlnaW5JdGVtQnlJdGVtSWQobmV3IE9yaWdpbklkKHIpLCBzdHJ1Y3R1cmVJZCkpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGV2ZW50cztcblx0fVxuXG5cdGRlbGV0ZU9yaWdpbkl0ZW0ocGF5bG9hZDogbnVtYmVyIHwgT3JpZ2luSWQgfCBBcnJheTxudW1iZXI+IHwgQXJyYXk8T3JpZ2luSWQ+LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdGlmIChwYXlsb2FkIGluc3RhbmNlb2YgT3JpZ2luSWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmRlbGV0ZU9yaWdpbkl0ZW1CeUl0ZW1JZChwYXlsb2FkLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHBheWxvYWQpKSB7XG5cblx0XHRcdGxldCBldmVudHM6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4gPSBbXTtcblxuXHRcdFx0cGF5bG9hZC5mb3JFYWNoKChpdGVtOiBudW1iZXIgfCBPcmlnaW5JZCkgPT4ge1xuXHRcdFx0XHRldmVudHMucHVzaCguLi50aGlzLmRlbGV0ZU9uZU9yaWdpbkl0ZW0oaXRlbSwgc3RydWN0dXJlSWQpKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gZXZlbnRzO1xuXG5cdFx0fSBlbHNlIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHBheWxvYWQpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5kZWxldGVPcmlnaW5JdGVtQnlJbmRleChwYXlsb2FkLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBkZWxldGVPbmVPcmlnaW5JdGVtKGl0ZW06IG51bWJlciB8IE9yaWdpbklkLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdGlmIChpdGVtIGluc3RhbmNlb2YgT3JpZ2luSWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmRlbGV0ZU9yaWdpbkl0ZW1CeUl0ZW1JZChpdGVtLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0fSBlbHNlIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGl0ZW0pKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5kZWxldGVPcmlnaW5JdGVtQnlJbmRleChpdGVtLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGRlbGV0ZU9yaWdpbkl0ZW1CeUl0ZW1JZChpdGVtSWQ6IE9yaWdpbklkLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5maW5kT3JpZ2luSXRlbUluZGV4KGl0ZW1JZC50b1N0cmluZygpKTtcblxuXHRcdHJldHVybiB0aGlzLmRlbGV0ZU9yaWdpbkl0ZW1CeUluZGV4KGluZGV4LCBzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRwcml2YXRlIGRlbGV0ZU9yaWdpbkl0ZW1CeUluZGV4KGluZGV4OiBudW1iZXIsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXG5cdFx0aWYgKGluZGV4ID4gLTEpIHtcblx0XHRcdGNvbnN0IHJlbW92ZWRFbGVtZW50czogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4gPSB0aGlzLm9yaWdpbi5zcGxpY2UoaW5kZXgsIDEpO1xuXG5cdFx0XHRpZiAocmVtb3ZlZEVsZW1lbnRzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Zm9yIChsZXQgZWxlbWVudCBvZiByZW1vdmVkRWxlbWVudHMpIHtcblx0XHRcdFx0XHR0aGlzLmZvcm1hdGlvbk1hbmFnZXIudW5zZWxlY3RSb3coZWxlbWVudC5nZXRJZCgpLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuZm9ybWF0aW9uTWFuYWdlci5jYWxjdWxhdGVBbGxTZWxlY3RlZChyZW1vdmVkRWxlbWVudHMubWFwKChmKSA9PiBmLmdldElkKCkudG9TdHJpbmcoKSkpO1xuXHRcdFx0XHR0aGlzLmZvcm1hdGlvbk1hbmFnZXIuY2FsY3VsYXRlQWxsVW5zZWxlY3RlZCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHR0aGlzLmNyZWF0ZU9yaWdpbkNoYW5nZWRFdmVudChzdHJ1Y3R1cmVJZClcblx0XHRcdF07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0cHJpdmF0ZSBkZWxldGVNYW55T3JpZ2luSXRlbUJ5SW5kZXgoaW5kZXhlczogQXJyYXk8bnVtYmVyPiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHRsZXQgZXZlbnRzOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+ID0gW107XG5cblx0XHRpbmRleGVzLmZvckVhY2goKGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRcdGV2ZW50cy5wdXNoKC4uLnRoaXMuZGVsZXRlT3JpZ2luSXRlbUJ5SW5kZXgoaW5kZXgsIHN0cnVjdHVyZUlkKSk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gZXZlbnRzO1xuXHR9XG5cblx0cHJpdmF0ZSBkZWxldGVNYW55T3JpZ2luSXRlbUJ5SXRlbUlEKGl0ZW1JZHM6IEFycmF5PE9yaWdpbklkPiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHRsZXQgZXZlbnRzOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+ID0gW107XG5cblx0XHRpdGVtSWRzLmZvckVhY2goKGl0ZW1JZDogT3JpZ2luSWQpID0+IHtcblx0XHRcdGV2ZW50cy5wdXNoKC4uLnRoaXMuZGVsZXRlT3JpZ2luSXRlbUJ5SXRlbUlkKGl0ZW1JZCwgc3RydWN0dXJlSWQpKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBldmVudHM7XG5cdH1cblxuXHRhZGRPcmlnaW5JdGVtKGl0ZW06IGFueSwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblx0XHR0aGlzLm9yaWdpbi5wdXNoKGl0ZW0pO1xuXHRcdHJldHVybiBbdGhpcy5jcmVhdGVPcmlnaW5DaGFuZ2VkRXZlbnQoc3RydWN0dXJlSWQpXTtcblx0fVxuXG5cdHNlbGVjdEFsbCgpOiB2b2lkIHtcblx0XHR0aGlzLmZvcm1hdGlvbk1hbmFnZXIuc2VsZWN0QWxsKHRoaXMuZ2V0RW50aXRpZXMoKS5tYXAoZSA9PiBlLmdldElkKCkudG9TdHJpbmcoKSkpO1xuXHR9XG5cblx0dW5zZWxlY3RBbGwoKTogdm9pZCB7XG5cdFx0dGhpcy5mb3JtYXRpb25NYW5hZ2VyLnVuc2VsZWN0QWxsKCk7XG5cdH1cblxuXHR0b2dnbGVSb3coaXRlbUlkOiBzdHJpbmcsIHR5cGU6IFJvd1NlbGVjdFRvZ2dsZVR5cGUpOiB2b2lkIHtcblx0XHR0aGlzLmZvcm1hdGlvbk1hbmFnZXIudG9nZ2xlUm93KGl0ZW1JZCwgdHlwZSwgdGhpcy5nZXRFbnRpdGllcygpLm1hcChlID0+IGUuZ2V0SWQoKS50b1N0cmluZygpKSk7XG5cdH1cblxuXHRnZXRGb3JtYXRpb24oKTogRm9ybWF0aW9uTWFuYWdlciB7XG5cdFx0cmV0dXJuIHRoaXMuZm9ybWF0aW9uTWFuYWdlcjtcblx0fVxuXG5cdHByaXZhdGUgY29udmVydEl0ZW1zKGl0ZW1zOiBBcnJheTxhbnk+KTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiBpdGVtcy5tYXAoKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBPcmlnaW5JdGVtRW50aXR5KG5ldyBPcmlnaW5JZChSYW5kb21TdHJpbmdHZW5lcmF0b3IuZ2VuZXJhdGUoKSksIGl0ZW0sIGluZGV4KTtcblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlT3JpZ2luQ2hhbmdlZEV2ZW50KHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cdFx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmVPcmlnaW5DaGFuZ2VkQWdncmVnYXRlRXZlbnQoc3RydWN0dXJlSWQsIHRoaXMub3JpZ2luKTtcblx0fVxuXG5cdHByaXZhdGUgZmluZE9yaWdpbkl0ZW0oaXRlbUlkOiBzdHJpbmcpOiBPcmlnaW5JdGVtRW50aXR5IHtcblx0XHRyZXR1cm4gdGhpcy5vcmlnaW4uZmluZCgoaXRlbTogT3JpZ2luSXRlbUVudGl0eSkgPT4gaXRlbS5nZXRJZCgpLnRvU3RyaW5nKCkgPT09IGl0ZW1JZCk7XG5cdH1cblxuXHRwcml2YXRlIGZpbmRPcmlnaW5JdGVtSW5kZXgoaXRlbUlkOiBzdHJpbmcpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm9yaWdpbi5maW5kSW5kZXgoKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHkpID0+IGl0ZW0uZ2V0SWQoKS50b1N0cmluZygpID09PSBpdGVtSWQpO1xuXHR9XG5cblx0cHJpdmF0ZSByZWNhbGN1bGF0ZVBvc2l0aW9ucygpOiB2b2lkIHtcblx0XHR0aGlzLmVudGl0aWVzLmZvckVhY2goKGVudDogT3JpZ2luSXRlbUVudGl0eSwgaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdFx0ZW50LnNldFBvc2l0aW9uKGluZGV4KTtcblx0XHR9KTtcblx0fVxuXG59XG4iXX0=