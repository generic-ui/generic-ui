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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvZG9tYWluL2NvcmUvc291cmNlLm1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWtCLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFaEUsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDdEgsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFFMUcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBSy9DO0lBaUJDLHVCQUFZLGdCQUFrQztRQWZ0QyxZQUFPLEdBQVksS0FBSyxDQUFDO1FBRXpCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFJekIsYUFBUSxHQUE0QixFQUFFLENBQUM7O1FBR3ZDLHFCQUFnQixHQUE0QixFQUFFLENBQUM7UUFFL0MsbUJBQWMsR0FBNEIsRUFBRSxDQUFDO1FBS3BELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztJQUMxQyxDQUFDOzs7O0lBRUQsaUNBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxpQ0FBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxrQ0FBVTs7OztJQUFWLFVBQVcsT0FBZ0I7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxtQ0FBVzs7OztJQUFYLFVBQVksR0FBNEI7UUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDcEIsSUFBSSxDQUFDLG9C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QUMsRUFBQyxDQUFDO0lBQ0osQ0FBQztJQUVGLG9CQUFDO0FBQUQsQ0FBQyxBQTNPRCxJQTJPQzs7Ozs7OztJQXpPQSxnQ0FBaUM7Ozs7O0lBRWpDLGdDQUFpQzs7Ozs7SUFFakMsK0JBQXdDOzs7OztJQUV4QyxpQ0FBK0M7Ozs7O0lBRy9DLHlDQUF1RDs7Ozs7SUFFdkQsdUNBQXFEOzs7OztJQUVyRCx5Q0FBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgUmFuZG9tU3RyaW5nR2VuZXJhdG9yIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vb3JpZ2luL2VkaXQvc3RydWN0dXJlLnNvdXJjZS1pdGVtLWVkaXRlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlT3JpZ2luQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vb3JpZ2luL3N0cnVjdHVyZS5vcmlnaW4tY2hhbmdlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9kb21haW4vY29yZS9maWVsZC9maWVsZCc7XG5pbXBvcnQgeyBPcmlnaW5JZCB9IGZyb20gJy4uL29yaWdpbi9vcmlnaW4taWQnO1xuaW1wb3J0IHsgRm9ybWF0aW9uTWFuYWdlciB9IGZyb20gJy4uL2Zvcm1hdGlvbi9jb3JlL2Zvcm1hdGlvbi1tYW5hZ2VyJztcbmltcG9ydCB7IFJvd1NlbGVjdFRvZ2dsZVR5cGUgfSBmcm9tICcuLi9mb3JtYXRpb24vY29yZS9yb3ctc2VsZWN0LXRvZ2dsZS10eXBlJztcblxuXG5leHBvcnQgY2xhc3MgU291cmNlTWFuYWdlciB7XG5cblx0cHJpdmF0ZSBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBmZXRjaGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBvcmlnaW46IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+O1xuXG5cdHByaXZhdGUgZW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+ID0gW107XG5cblx0Ly8gRW50aXRpZXMgYWZ0ZXIgZmlsdGVyaW5nLCBzZWFyY2hpbmdcblx0cHJpdmF0ZSBwcmVwYXJlZEVudGl0aWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiA9IFtdO1xuXG5cdHByaXZhdGUgc2xpY2VkRW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+ID0gW107XG5cblx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25NYW5hZ2VyOiBGb3JtYXRpb25NYW5hZ2VyO1xuXG5cdGNvbnN0cnVjdG9yKGZvcm1hdGlvbk1hbmFnZXI6IEZvcm1hdGlvbk1hbmFnZXIpIHtcblx0XHR0aGlzLmZvcm1hdGlvbk1hbmFnZXIgPSBmb3JtYXRpb25NYW5hZ2VyO1xuXHR9XG5cblx0aXNMb2FkaW5nKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmxvYWRpbmc7XG5cdH1cblxuXHRpc0ZldGNoZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZmV0Y2hlZDtcblx0fVxuXG5cdHNldExvYWRpbmcoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMubG9hZGluZyA9IGVuYWJsZWQ7XG5cdH1cblxuXHRzZXRFbnRpdGllcyhlbnQ6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogdm9pZCB7XG5cdFx0dGhpcy5lbnRpdGllcyA9IGVudDtcblx0XHR0aGlzLnJlY2FsY3VsYXRlUG9zaXRpb25zKCk7XG5cdH1cblxuXHRnZXRFbnRpdGllcygpOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMuZW50aXRpZXM7XG5cdH1cblxuXHRzZXRQcmVwYXJlZEVudGl0aWVzKCk6IHZvaWQge1xuXHRcdHRoaXMucHJlcGFyZWRFbnRpdGllcyA9IFsuLi50aGlzLmVudGl0aWVzXTtcblx0fVxuXG5cdGdldFByZXBhcmVkRW50aXRpZXMoKTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLnByZXBhcmVkRW50aXRpZXM7XG5cdH1cblxuXHRzZXRTbGljZWRFbnRpdGllcyhlbnQ6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KSB7XG5cdFx0dGhpcy5zbGljZWRFbnRpdGllcyA9IGVudDtcblx0fVxuXG5cdGdldFNsaWNlZEVudGl0aWVzKCk6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5zbGljZWRFbnRpdGllcztcblx0fVxuXG5cdHNldE9yaWdpbihpdGVtczogQXJyYXk8YW55PiA9IFtdLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXHRcdHRoaXMub3JpZ2luID0gdGhpcy5jb252ZXJ0SXRlbXMoaXRlbXMpO1xuXG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlT3JpZ2luQ2hhbmdlZEV2ZW50KHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHNldENvbnZlcnRlZE9yaWdpbihpdGVtczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4gPSBbXSwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblx0XHR0aGlzLm9yaWdpbiA9IFsuLi5pdGVtc107XG5cblx0XHRyZXR1cm4gdGhpcy5jcmVhdGVPcmlnaW5DaGFuZ2VkRXZlbnQoc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0Z2V0T3JpZ2luKCk6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5vcmlnaW47XG5cdH1cblxuXHRnZXRPcmlnaW5TaXplKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMub3JpZ2luLmxlbmd0aDtcblx0fVxuXG5cdC8vIGVkaXRPcmlnaW5JdGVtQnlQcm9wZXJ0eShieUZpZWxkLCB2YWx1ZTogYW55LCBmaWVsZDogRmllbGQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFnZ3JlZ2F0ZUV2ZW50IHtcblx0Ly9cblx0Ly8gfVxuXG5cdGVkaXRPcmlnaW5JdGVtKGl0ZW1JZDogc3RyaW5nLCB2YWx1ZTogYW55LCBmaWVsZDogRmllbGQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHRjb25zdCBpdGVtOiBPcmlnaW5JdGVtRW50aXR5ID0gdGhpcy5maW5kT3JpZ2luSXRlbShpdGVtSWQpLFxuXHRcdFx0aXRlbUJlZm9yZUNoYW5nZSA9IGl0ZW0uY2xvbmUoKTtcblxuXHRcdGlmIChpdGVtKSB7XG5cdFx0XHRpdGVtLnJhd0RhdGFbZmllbGQuZ2V0QWNjZXNzb3IoKV0gPSB2YWx1ZTtcblx0XHRcdGl0ZW0uYnVtcFZlcnNpb24oKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gW1xuXHRcdFx0bmV3IFN0cnVjdHVyZVNvdXJjZUl0ZW1FZGl0ZWRBZ2dyZWdhdGVFdmVudChzdHJ1Y3R1cmVJZCwgaXRlbUJlZm9yZUNoYW5nZSwgaXRlbS5jbG9uZSgpKSxcblx0XHRcdHRoaXMuY3JlYXRlT3JpZ2luQ2hhbmdlZEV2ZW50KHN0cnVjdHVyZUlkKVxuXHRcdF07XG5cdH1cblxuXHRkZWxldGVBbGxTZWxlY3RlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblx0XHRsZXQgZXZlbnRzOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+ID0gW107XG5cblx0XHRjb25zdCByb3dzID0gdGhpcy5mb3JtYXRpb25NYW5hZ2VyLmdldFNlbGVjdGVkUm93cygpO1xuXG5cdFx0cm93cy5mb3JFYWNoKChyOiBzdHJpbmcpID0+IHtcblx0XHRcdGV2ZW50cy5wdXNoKC4uLnRoaXMuZGVsZXRlT3JpZ2luSXRlbUJ5SXRlbUlkKG5ldyBPcmlnaW5JZChyKSwgc3RydWN0dXJlSWQpKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBldmVudHM7XG5cdH1cblxuXHRkZWxldGVPcmlnaW5JdGVtKHBheWxvYWQ6IG51bWJlciB8IE9yaWdpbklkIHwgQXJyYXk8bnVtYmVyPiB8IEFycmF5PE9yaWdpbklkPiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHRpZiAocGF5bG9hZCBpbnN0YW5jZW9mIE9yaWdpbklkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5kZWxldGVPcmlnaW5JdGVtQnlJdGVtSWQocGF5bG9hZCwgc3RydWN0dXJlSWQpO1xuXHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShwYXlsb2FkKSkge1xuXG5cdFx0XHRsZXQgZXZlbnRzOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+ID0gW107XG5cblx0XHRcdHBheWxvYWQuZm9yRWFjaCgoaXRlbTogbnVtYmVyIHwgT3JpZ2luSWQpID0+IHtcblx0XHRcdFx0ZXZlbnRzLnB1c2goLi4udGhpcy5kZWxldGVPbmVPcmlnaW5JdGVtKGl0ZW0sIHN0cnVjdHVyZUlkKSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIGV2ZW50cztcblxuXHRcdH0gZWxzZSBpZiAoTnVtYmVyLmlzSW50ZWdlcihwYXlsb2FkKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZGVsZXRlT3JpZ2luSXRlbUJ5SW5kZXgocGF5bG9hZCwgc3RydWN0dXJlSWQpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZGVsZXRlT25lT3JpZ2luSXRlbShpdGVtOiBudW1iZXIgfCBPcmlnaW5JZCwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHRpZiAoaXRlbSBpbnN0YW5jZW9mIE9yaWdpbklkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5kZWxldGVPcmlnaW5JdGVtQnlJdGVtSWQoaXRlbSwgc3RydWN0dXJlSWQpO1xuXHRcdH0gZWxzZSBpZiAoTnVtYmVyLmlzSW50ZWdlcihpdGVtKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZGVsZXRlT3JpZ2luSXRlbUJ5SW5kZXgoaXRlbSwgc3RydWN0dXJlSWQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBkZWxldGVPcmlnaW5JdGVtQnlJdGVtSWQoaXRlbUlkOiBPcmlnaW5JZCwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHRjb25zdCBpbmRleCA9IHRoaXMuZmluZE9yaWdpbkl0ZW1JbmRleChpdGVtSWQudG9TdHJpbmcoKSk7XG5cblx0XHRyZXR1cm4gdGhpcy5kZWxldGVPcmlnaW5JdGVtQnlJbmRleChpbmRleCwgc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0cHJpdmF0ZSBkZWxldGVPcmlnaW5JdGVtQnlJbmRleChpbmRleDogbnVtYmVyLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdGlmIChpbmRleCA+IC0xKSB7XG5cdFx0XHRjb25zdCByZW1vdmVkRWxlbWVudHM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+ID0gdGhpcy5vcmlnaW4uc3BsaWNlKGluZGV4LCAxKTtcblxuXHRcdFx0aWYgKHJlbW92ZWRFbGVtZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGZvciAobGV0IGVsZW1lbnQgb2YgcmVtb3ZlZEVsZW1lbnRzKSB7XG5cdFx0XHRcdFx0dGhpcy5mb3JtYXRpb25NYW5hZ2VyLnVuc2VsZWN0Um93KGVsZW1lbnQuZ2V0SWQoKS50b1N0cmluZygpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmZvcm1hdGlvbk1hbmFnZXIuY2FsY3VsYXRlQWxsU2VsZWN0ZWQocmVtb3ZlZEVsZW1lbnRzLm1hcCgoZikgPT4gZi5nZXRJZCgpLnRvU3RyaW5nKCkpKTtcblx0XHRcdFx0dGhpcy5mb3JtYXRpb25NYW5hZ2VyLmNhbGN1bGF0ZUFsbFVuc2VsZWN0ZWQoKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0dGhpcy5jcmVhdGVPcmlnaW5DaGFuZ2VkRXZlbnQoc3RydWN0dXJlSWQpXG5cdFx0XHRdO1xuXHRcdH1cblxuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdHByaXZhdGUgZGVsZXRlTWFueU9yaWdpbkl0ZW1CeUluZGV4KGluZGV4ZXM6IEFycmF5PG51bWJlcj4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXG5cdFx0bGV0IGV2ZW50czogQXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiA9IFtdO1xuXG5cdFx0aW5kZXhlcy5mb3JFYWNoKChpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0XHRldmVudHMucHVzaCguLi50aGlzLmRlbGV0ZU9yaWdpbkl0ZW1CeUluZGV4KGluZGV4LCBzdHJ1Y3R1cmVJZCkpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGV2ZW50cztcblx0fVxuXG5cdHByaXZhdGUgZGVsZXRlTWFueU9yaWdpbkl0ZW1CeUl0ZW1JRChpdGVtSWRzOiBBcnJheTxPcmlnaW5JZD4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXG5cdFx0bGV0IGV2ZW50czogQXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiA9IFtdO1xuXG5cdFx0aXRlbUlkcy5mb3JFYWNoKChpdGVtSWQ6IE9yaWdpbklkKSA9PiB7XG5cdFx0XHRldmVudHMucHVzaCguLi50aGlzLmRlbGV0ZU9yaWdpbkl0ZW1CeUl0ZW1JZChpdGVtSWQsIHN0cnVjdHVyZUlkKSk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gZXZlbnRzO1xuXHR9XG5cblx0YWRkT3JpZ2luSXRlbShpdGVtOiBhbnksIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cdFx0dGhpcy5vcmlnaW4ucHVzaChpdGVtKTtcblx0XHRyZXR1cm4gW3RoaXMuY3JlYXRlT3JpZ2luQ2hhbmdlZEV2ZW50KHN0cnVjdHVyZUlkKV07XG5cdH1cblxuXHRzZWxlY3RBbGwoKTogdm9pZCB7XG5cdFx0dGhpcy5mb3JtYXRpb25NYW5hZ2VyLnNlbGVjdEFsbCh0aGlzLmdldEVudGl0aWVzKCkubWFwKGUgPT4gZS5nZXRJZCgpLnRvU3RyaW5nKCkpKTtcblx0fVxuXG5cdHVuc2VsZWN0QWxsKCk6IHZvaWQge1xuXHRcdHRoaXMuZm9ybWF0aW9uTWFuYWdlci51bnNlbGVjdEFsbCgpO1xuXHR9XG5cblx0dG9nZ2xlUm93KGl0ZW1JZDogc3RyaW5nLCB0eXBlOiBSb3dTZWxlY3RUb2dnbGVUeXBlKTogdm9pZCB7XG5cdFx0dGhpcy5mb3JtYXRpb25NYW5hZ2VyLnRvZ2dsZVJvdyhpdGVtSWQsIHR5cGUsIHRoaXMuZ2V0RW50aXRpZXMoKS5tYXAoZSA9PiBlLmdldElkKCkudG9TdHJpbmcoKSkpO1xuXHR9XG5cblx0Z2V0Rm9ybWF0aW9uKCk6IEZvcm1hdGlvbk1hbmFnZXIge1xuXHRcdHJldHVybiB0aGlzLmZvcm1hdGlvbk1hbmFnZXI7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRJdGVtcyhpdGVtczogQXJyYXk8YW55Pik6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gaXRlbXMubWFwKChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRcdHJldHVybiBuZXcgT3JpZ2luSXRlbUVudGl0eShuZXcgT3JpZ2luSWQoUmFuZG9tU3RyaW5nR2VuZXJhdG9yLmdlbmVyYXRlKCkpLCBpdGVtLCBpbmRleCk7XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZU9yaWdpbkNoYW5nZWRFdmVudChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXHRcdHJldHVybiBuZXcgU3RydWN0dXJlT3JpZ2luQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50KHN0cnVjdHVyZUlkLCB0aGlzLm9yaWdpbik7XG5cdH1cblxuXHRwcml2YXRlIGZpbmRPcmlnaW5JdGVtKGl0ZW1JZDogc3RyaW5nKTogT3JpZ2luSXRlbUVudGl0eSB7XG5cdFx0cmV0dXJuIHRoaXMub3JpZ2luLmZpbmQoKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHkpID0+IGl0ZW0uZ2V0SWQoKS50b1N0cmluZygpID09PSBpdGVtSWQpO1xuXHR9XG5cblx0cHJpdmF0ZSBmaW5kT3JpZ2luSXRlbUluZGV4KGl0ZW1JZDogc3RyaW5nKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5vcmlnaW4uZmluZEluZGV4KChpdGVtOiBPcmlnaW5JdGVtRW50aXR5KSA9PiBpdGVtLmdldElkKCkudG9TdHJpbmcoKSA9PT0gaXRlbUlkKTtcblx0fVxuXG5cdHByaXZhdGUgcmVjYWxjdWxhdGVQb3NpdGlvbnMoKTogdm9pZCB7XG5cdFx0dGhpcy5lbnRpdGllcy5mb3JFYWNoKChlbnQ6IE9yaWdpbkl0ZW1FbnRpdHksIGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRcdGVudC5zZXRQb3NpdGlvbihpbmRleCk7XG5cdFx0fSk7XG5cdH1cblxufVxuIl19