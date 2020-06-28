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
        this.origin = items;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvZG9tYWluL2NvcmUvc291cmNlLm1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWtCLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFaEUsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDdEgsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFFMUcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBSy9DO0lBaUJDLHVCQUFZLGdCQUFrQztRQWZ0QyxZQUFPLEdBQVksS0FBSyxDQUFDO1FBRXpCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFJekIsYUFBUSxHQUE0QixFQUFFLENBQUM7O1FBR3ZDLHFCQUFnQixHQUE0QixFQUFFLENBQUM7UUFFL0MsbUJBQWMsR0FBNEIsRUFBRSxDQUFDO1FBS3BELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztJQUMxQyxDQUFDOzs7O0lBRUQsaUNBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxpQ0FBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxrQ0FBVTs7OztJQUFWLFVBQVcsT0FBZ0I7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxtQ0FBVzs7OztJQUFYLFVBQVksR0FBNEI7UUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDcEIsSUFBSSxDQUFDLG9C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cG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBSYW5kb21TdHJpbmdHZW5lcmF0b3IgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VJdGVtRWRpdGVkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi9vcmlnaW4vZWRpdC9zdHJ1Y3R1cmUuc291cmNlLWl0ZW0tZWRpdGVkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVPcmlnaW5DaGFuZ2VkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi9vcmlnaW4vc3RydWN0dXJlLm9yaWdpbi1jaGFuZ2VkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2RvbWFpbi9jb3JlL2ZpZWxkL2ZpZWxkJztcbmltcG9ydCB7IE9yaWdpbklkIH0gZnJvbSAnLi4vb3JpZ2luL29yaWdpbi1pZCc7XG5pbXBvcnQgeyBGb3JtYXRpb25NYW5hZ2VyIH0gZnJvbSAnLi4vZm9ybWF0aW9uL2NvcmUvZm9ybWF0aW9uLW1hbmFnZXInO1xuaW1wb3J0IHsgUm93U2VsZWN0VG9nZ2xlVHlwZSB9IGZyb20gJy4uL2Zvcm1hdGlvbi9jb3JlL3Jvdy1zZWxlY3QtdG9nZ2xlLXR5cGUnO1xuXG5cbmV4cG9ydCBjbGFzcyBTb3VyY2VNYW5hZ2VyIHtcblxuXHRwcml2YXRlIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIGZldGNoZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIG9yaWdpbjogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT47XG5cblx0cHJpdmF0ZSBlbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4gPSBbXTtcblxuXHQvLyBFbnRpdGllcyBhZnRlciBmaWx0ZXJpbmcsIHNlYXJjaGluZ1xuXHRwcml2YXRlIHByZXBhcmVkRW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+ID0gW107XG5cblx0cHJpdmF0ZSBzbGljZWRFbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4gPSBbXTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbk1hbmFnZXI6IEZvcm1hdGlvbk1hbmFnZXI7XG5cblx0Y29uc3RydWN0b3IoZm9ybWF0aW9uTWFuYWdlcjogRm9ybWF0aW9uTWFuYWdlcikge1xuXHRcdHRoaXMuZm9ybWF0aW9uTWFuYWdlciA9IGZvcm1hdGlvbk1hbmFnZXI7XG5cdH1cblxuXHRpc0xvYWRpbmcoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubG9hZGluZztcblx0fVxuXG5cdGlzRmV0Y2hlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5mZXRjaGVkO1xuXHR9XG5cblx0c2V0TG9hZGluZyhlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5sb2FkaW5nID0gZW5hYmxlZDtcblx0fVxuXG5cdHNldEVudGl0aWVzKGVudDogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiB2b2lkIHtcblx0XHR0aGlzLmVudGl0aWVzID0gZW50O1xuXHRcdHRoaXMucmVjYWxjdWxhdGVQb3NpdGlvbnMoKTtcblx0fVxuXG5cdGdldEVudGl0aWVzKCk6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5lbnRpdGllcztcblx0fVxuXG5cdHNldFByZXBhcmVkRW50aXRpZXMoKTogdm9pZCB7XG5cdFx0dGhpcy5wcmVwYXJlZEVudGl0aWVzID0gWy4uLnRoaXMuZW50aXRpZXNdO1xuXHR9XG5cblx0Z2V0UHJlcGFyZWRFbnRpdGllcygpOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMucHJlcGFyZWRFbnRpdGllcztcblx0fVxuXG5cdHNldFNsaWNlZEVudGl0aWVzKGVudDogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pIHtcblx0XHR0aGlzLnNsaWNlZEVudGl0aWVzID0gZW50O1xuXHR9XG5cblx0Z2V0U2xpY2VkRW50aXRpZXMoKTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLnNsaWNlZEVudGl0aWVzO1xuXHR9XG5cblx0c2V0T3JpZ2luKGl0ZW1zOiBBcnJheTxhbnk+ID0gW10sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cdFx0dGhpcy5vcmlnaW4gPSB0aGlzLmNvbnZlcnRJdGVtcyhpdGVtcyk7XG5cblx0XHRyZXR1cm4gdGhpcy5jcmVhdGVPcmlnaW5DaGFuZ2VkRXZlbnQoc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0c2V0Q29udmVydGVkT3JpZ2luKGl0ZW1zOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiA9IFtdLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXHRcdHRoaXMub3JpZ2luID0gaXRlbXM7XG5cblx0XHRyZXR1cm4gdGhpcy5jcmVhdGVPcmlnaW5DaGFuZ2VkRXZlbnQoc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0Z2V0T3JpZ2luKCk6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5vcmlnaW47XG5cdH1cblxuXHRnZXRPcmlnaW5TaXplKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMub3JpZ2luLmxlbmd0aDtcblx0fVxuXG5cdC8vIGVkaXRPcmlnaW5JdGVtQnlQcm9wZXJ0eShieUZpZWxkLCB2YWx1ZTogYW55LCBmaWVsZDogRmllbGQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFnZ3JlZ2F0ZUV2ZW50IHtcblx0Ly9cblx0Ly8gfVxuXG5cdGVkaXRPcmlnaW5JdGVtKGl0ZW1JZDogc3RyaW5nLCB2YWx1ZTogYW55LCBmaWVsZDogRmllbGQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHRjb25zdCBpdGVtOiBPcmlnaW5JdGVtRW50aXR5ID0gdGhpcy5maW5kT3JpZ2luSXRlbShpdGVtSWQpLFxuXHRcdFx0aXRlbUJlZm9yZUNoYW5nZSA9IGl0ZW0uY2xvbmUoKTtcblxuXHRcdGlmIChpdGVtKSB7XG5cdFx0XHRpdGVtLnJhd0RhdGFbZmllbGQuZ2V0QWNjZXNzb3IoKV0gPSB2YWx1ZTtcblx0XHRcdGl0ZW0uYnVtcFZlcnNpb24oKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gW1xuXHRcdFx0bmV3IFN0cnVjdHVyZVNvdXJjZUl0ZW1FZGl0ZWRBZ2dyZWdhdGVFdmVudChzdHJ1Y3R1cmVJZCwgaXRlbUJlZm9yZUNoYW5nZSwgaXRlbS5jbG9uZSgpKSxcblx0XHRcdHRoaXMuY3JlYXRlT3JpZ2luQ2hhbmdlZEV2ZW50KHN0cnVjdHVyZUlkKVxuXHRcdF07XG5cdH1cblxuXHRkZWxldGVBbGxTZWxlY3RlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblx0XHRsZXQgZXZlbnRzOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+ID0gW107XG5cblx0XHRjb25zdCByb3dzID0gdGhpcy5mb3JtYXRpb25NYW5hZ2VyLmdldFNlbGVjdGVkUm93cygpO1xuXG5cdFx0cm93cy5mb3JFYWNoKChyOiBzdHJpbmcpID0+IHtcblx0XHRcdGV2ZW50cy5wdXNoKC4uLnRoaXMuZGVsZXRlT3JpZ2luSXRlbUJ5SXRlbUlkKG5ldyBPcmlnaW5JZChyKSwgc3RydWN0dXJlSWQpKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBldmVudHM7XG5cdH1cblxuXHRkZWxldGVPcmlnaW5JdGVtKHBheWxvYWQ6IG51bWJlciB8IE9yaWdpbklkIHwgQXJyYXk8bnVtYmVyPiB8IEFycmF5PE9yaWdpbklkPiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHRpZiAocGF5bG9hZCBpbnN0YW5jZW9mIE9yaWdpbklkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5kZWxldGVPcmlnaW5JdGVtQnlJdGVtSWQocGF5bG9hZCwgc3RydWN0dXJlSWQpO1xuXHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShwYXlsb2FkKSkge1xuXG5cdFx0XHRsZXQgZXZlbnRzOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+ID0gW107XG5cblx0XHRcdHBheWxvYWQuZm9yRWFjaCgoaXRlbTogbnVtYmVyIHwgT3JpZ2luSWQpID0+IHtcblx0XHRcdFx0ZXZlbnRzLnB1c2goLi4udGhpcy5kZWxldGVPbmVPcmlnaW5JdGVtKGl0ZW0sIHN0cnVjdHVyZUlkKSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIGV2ZW50cztcblxuXHRcdH0gZWxzZSBpZiAoTnVtYmVyLmlzSW50ZWdlcihwYXlsb2FkKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZGVsZXRlT3JpZ2luSXRlbUJ5SW5kZXgocGF5bG9hZCwgc3RydWN0dXJlSWQpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZGVsZXRlT25lT3JpZ2luSXRlbShpdGVtOiBudW1iZXIgfCBPcmlnaW5JZCwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHRpZiAoaXRlbSBpbnN0YW5jZW9mIE9yaWdpbklkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5kZWxldGVPcmlnaW5JdGVtQnlJdGVtSWQoaXRlbSwgc3RydWN0dXJlSWQpO1xuXHRcdH0gZWxzZSBpZiAoTnVtYmVyLmlzSW50ZWdlcihpdGVtKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZGVsZXRlT3JpZ2luSXRlbUJ5SW5kZXgoaXRlbSwgc3RydWN0dXJlSWQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBkZWxldGVPcmlnaW5JdGVtQnlJdGVtSWQoaXRlbUlkOiBPcmlnaW5JZCwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHRjb25zdCBpbmRleCA9IHRoaXMuZmluZE9yaWdpbkl0ZW1JbmRleChpdGVtSWQudG9TdHJpbmcoKSk7XG5cblx0XHRyZXR1cm4gdGhpcy5kZWxldGVPcmlnaW5JdGVtQnlJbmRleChpbmRleCwgc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0cHJpdmF0ZSBkZWxldGVPcmlnaW5JdGVtQnlJbmRleChpbmRleDogbnVtYmVyLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdGlmIChpbmRleCA+IC0xKSB7XG5cdFx0XHRjb25zdCByZW1vdmVkRWxlbWVudHM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+ID0gdGhpcy5vcmlnaW4uc3BsaWNlKGluZGV4LCAxKTtcblxuXHRcdFx0aWYgKHJlbW92ZWRFbGVtZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGZvciAobGV0IGVsZW1lbnQgb2YgcmVtb3ZlZEVsZW1lbnRzKSB7XG5cdFx0XHRcdFx0dGhpcy5mb3JtYXRpb25NYW5hZ2VyLnVuc2VsZWN0Um93KGVsZW1lbnQuZ2V0SWQoKS50b1N0cmluZygpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHR0aGlzLmNyZWF0ZU9yaWdpbkNoYW5nZWRFdmVudChzdHJ1Y3R1cmVJZClcblx0XHRcdF07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0cHJpdmF0ZSBkZWxldGVNYW55T3JpZ2luSXRlbUJ5SW5kZXgoaW5kZXhlczogQXJyYXk8bnVtYmVyPiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHRsZXQgZXZlbnRzOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+ID0gW107XG5cblx0XHRpbmRleGVzLmZvckVhY2goKGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRcdGV2ZW50cy5wdXNoKC4uLnRoaXMuZGVsZXRlT3JpZ2luSXRlbUJ5SW5kZXgoaW5kZXgsIHN0cnVjdHVyZUlkKSk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gZXZlbnRzO1xuXHR9XG5cblx0cHJpdmF0ZSBkZWxldGVNYW55T3JpZ2luSXRlbUJ5SXRlbUlEKGl0ZW1JZHM6IEFycmF5PE9yaWdpbklkPiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHRsZXQgZXZlbnRzOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+ID0gW107XG5cblx0XHRpdGVtSWRzLmZvckVhY2goKGl0ZW1JZDogT3JpZ2luSWQpID0+IHtcblx0XHRcdGV2ZW50cy5wdXNoKC4uLnRoaXMuZGVsZXRlT3JpZ2luSXRlbUJ5SXRlbUlkKGl0ZW1JZCwgc3RydWN0dXJlSWQpKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBldmVudHM7XG5cdH1cblxuXHRhZGRPcmlnaW5JdGVtKGl0ZW06IGFueSwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblx0XHR0aGlzLm9yaWdpbi5wdXNoKGl0ZW0pO1xuXHRcdHJldHVybiBbdGhpcy5jcmVhdGVPcmlnaW5DaGFuZ2VkRXZlbnQoc3RydWN0dXJlSWQpXTtcblx0fVxuXG5cdHNlbGVjdEFsbCgpOiB2b2lkIHtcblx0XHR0aGlzLmZvcm1hdGlvbk1hbmFnZXIuc2VsZWN0QWxsKHRoaXMuZ2V0RW50aXRpZXMoKS5tYXAoZSA9PiBlLmdldElkKCkudG9TdHJpbmcoKSkpO1xuXHR9XG5cblx0dW5zZWxlY3RBbGwoKTogdm9pZCB7XG5cdFx0dGhpcy5mb3JtYXRpb25NYW5hZ2VyLnVuc2VsZWN0QWxsKCk7XG5cdH1cblxuXHR0b2dnbGVSb3coaXRlbUlkOiBzdHJpbmcsIHR5cGU6IFJvd1NlbGVjdFRvZ2dsZVR5cGUpOiB2b2lkIHtcblx0XHR0aGlzLmZvcm1hdGlvbk1hbmFnZXIudG9nZ2xlUm93KGl0ZW1JZCwgdHlwZSwgdGhpcy5nZXRFbnRpdGllcygpLm1hcChlID0+IGUuZ2V0SWQoKS50b1N0cmluZygpKSk7XG5cdH1cblxuXHRnZXRGb3JtYXRpb24oKTogRm9ybWF0aW9uTWFuYWdlciB7XG5cdFx0cmV0dXJuIHRoaXMuZm9ybWF0aW9uTWFuYWdlcjtcblx0fVxuXG5cdHByaXZhdGUgY29udmVydEl0ZW1zKGl0ZW1zOiBBcnJheTxhbnk+KTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiBpdGVtcy5tYXAoKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBPcmlnaW5JdGVtRW50aXR5KG5ldyBPcmlnaW5JZChSYW5kb21TdHJpbmdHZW5lcmF0b3IuZ2VuZXJhdGUoKSksIGl0ZW0sIGluZGV4KTtcblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlT3JpZ2luQ2hhbmdlZEV2ZW50KHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cdFx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmVPcmlnaW5DaGFuZ2VkQWdncmVnYXRlRXZlbnQoc3RydWN0dXJlSWQsIHRoaXMub3JpZ2luKTtcblx0fVxuXG5cdHByaXZhdGUgZmluZE9yaWdpbkl0ZW0oaXRlbUlkOiBzdHJpbmcpOiBPcmlnaW5JdGVtRW50aXR5IHtcblx0XHRyZXR1cm4gdGhpcy5vcmlnaW4uZmluZCgoaXRlbTogT3JpZ2luSXRlbUVudGl0eSkgPT4gaXRlbS5nZXRJZCgpLnRvU3RyaW5nKCkgPT09IGl0ZW1JZCk7XG5cdH1cblxuXHRwcml2YXRlIGZpbmRPcmlnaW5JdGVtSW5kZXgoaXRlbUlkOiBzdHJpbmcpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm9yaWdpbi5maW5kSW5kZXgoKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHkpID0+IGl0ZW0uZ2V0SWQoKS50b1N0cmluZygpID09PSBpdGVtSWQpO1xuXHR9XG5cblx0cHJpdmF0ZSByZWNhbGN1bGF0ZVBvc2l0aW9ucygpOiB2b2lkIHtcblx0XHR0aGlzLmVudGl0aWVzLmZvckVhY2goKGVudDogT3JpZ2luSXRlbUVudGl0eSwgaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdFx0ZW50LnNldFBvc2l0aW9uKGluZGV4KTtcblx0XHR9KTtcblx0fVxuXG59XG4iXX0=