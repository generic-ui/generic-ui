/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { RandomStringGenerator } from '@generic-ui/hermes';
import { OriginItemEntity } from './origin/origin-item-entity';
import { StructureSourceItemEditedAggregateEvent } from './origin/edit/structure.source-item-edited.aggregate-event';
import { StructureOriginChangedAggregateEvent } from './origin/structure.origin-changed.aggregate-event';
import { OriginId } from './origin/origin-id';
var SourceManager = /** @class */ (function () {
    function SourceManager() {
        this.loading = false;
        this.fetched = false;
        this.entities = [];
        // Entities after filtering, searching
        this.preparedEntities = [];
        this.slicedEntities = [];
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
     * @param {?} itemId
     * @param {?} structureId
     * @return {?}
     */
    SourceManager.prototype.removeOriginItem = /**
     * @param {?} itemId
     * @param {?} structureId
     * @return {?}
     */
    function (itemId, structureId) {
        /** @type {?} */
        var index = this.findOriginItemIndex(itemId);
        if (index > -1) {
            this.origin.splice(index, 1);
            return [this.createOriginChangedEvent(structureId)];
        }
        return [];
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3NvdXJjZS9zb3VyY2UubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBa0IscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUUvRCxPQUFPLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUNySCxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUV6RyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHOUM7SUFBQTtRQUVTLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFFekIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUl6QixhQUFRLEdBQTRCLEVBQUUsQ0FBQzs7UUFHdkMscUJBQWdCLEdBQTRCLEVBQUUsQ0FBQztRQUUvQyxtQkFBYyxHQUE0QixFQUFFLENBQUM7SUFxSHRELENBQUM7Ozs7SUFuSEEsaUNBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxpQ0FBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxrQ0FBVTs7OztJQUFWLFVBQVcsT0FBZ0I7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxtQ0FBVzs7OztJQUFYLFVBQVksR0FBNEI7UUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDcEIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELG1DQUFXOzs7SUFBWDtRQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsMkNBQW1COzs7SUFBbkI7UUFDQyxJQUFJLENBQUMsZ0JBQWdCLG9CQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBRUQsMkNBQW1COzs7SUFBbkI7UUFDQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELHlDQUFpQjs7OztJQUFqQixVQUFrQixHQUE0QjtRQUM3QyxJQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQseUNBQWlCOzs7SUFBakI7UUFDQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDNUIsQ0FBQzs7Ozs7O0lBRUQsaUNBQVM7Ozs7O0lBQVQsVUFBVSxLQUFzQixFQUFFLFdBQXdCO1FBQWhELHNCQUFBLEVBQUEsVUFBc0I7UUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXZDLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7OztJQUVELDBDQUFrQjs7Ozs7SUFBbEIsVUFBbUIsS0FBc0IsRUFBRSxXQUF3QjtRQUFoRCxzQkFBQSxFQUFBLFVBQXNCO1FBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRXBCLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFFRCxpQ0FBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELHFDQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDM0IsQ0FBQztJQUVELDBHQUEwRztJQUMxRyxFQUFFO0lBQ0YsSUFBSTs7Ozs7Ozs7Ozs7SUFFSixzQ0FBYzs7Ozs7Ozs7Ozs7SUFBZCxVQUFlLE1BQWMsRUFBRSxLQUFVLEVBQUUsS0FBZ0IsRUFBRSxXQUF3Qjs7WUFFOUUsSUFBSSxHQUFxQixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQzs7WUFDekQsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtRQUVoQyxJQUFJLElBQUksRUFBRTtZQUNULElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQzFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNuQjtRQUVELE9BQU87WUFDTixJQUFJLHVDQUF1QyxDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDeEYsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsQ0FBQztTQUMxQyxDQUFDO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsd0NBQWdCOzs7OztJQUFoQixVQUFpQixNQUFjLEVBQUUsV0FBd0I7O1lBRWxELEtBQUssR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDO1FBRTlDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBRWYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRTdCLE9BQU8sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztTQUNwRDtRQUVELE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQzs7Ozs7O0lBRU8sb0NBQVk7Ozs7O0lBQXBCLFVBQXFCLEtBQWlCO1FBQ3JDLE9BQU8sS0FBSyxDQUFDLEdBQUc7Ozs7O1FBQUMsVUFBQyxJQUFTLEVBQUUsS0FBYTtZQUN6QyxPQUFPLElBQUksZ0JBQWdCLENBQUMsSUFBSSxRQUFRLENBQUMscUJBQXFCLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUYsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTyxnREFBd0I7Ozs7O0lBQWhDLFVBQWlDLFdBQXdCO1FBQ3hELE9BQU8sSUFBSSxvQ0FBb0MsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNFLENBQUM7Ozs7OztJQUVPLHNDQUFjOzs7OztJQUF0QixVQUF1QixNQUFjO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQyxJQUFzQixJQUFLLE9BQUEsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLE1BQU0sRUFBbEMsQ0FBa0MsRUFBQyxDQUFDO0lBQ3pGLENBQUM7Ozs7OztJQUVPLDJDQUFtQjs7Ozs7SUFBM0IsVUFBNEIsTUFBYztRQUN6QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsSUFBc0IsSUFBSyxPQUFBLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxNQUFNLEVBQWxDLENBQWtDLEVBQUMsQ0FBQztJQUM5RixDQUFDOzs7OztJQUVPLDRDQUFvQjs7OztJQUE1QjtRQUNDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTzs7Ozs7UUFBQyxVQUFDLEdBQXFCLEVBQUUsS0FBYTtZQUMxRCxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQztJQUVGLG9CQUFDO0FBQUQsQ0FBQyxBQWxJRCxJQWtJQzs7Ozs7OztJQWhJQSxnQ0FBaUM7Ozs7O0lBRWpDLGdDQUFpQzs7Ozs7SUFFakMsK0JBQXdDOzs7OztJQUV4QyxpQ0FBK0M7Ozs7O0lBRy9DLHlDQUF1RDs7Ozs7SUFFdkQsdUNBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQsIFJhbmRvbVN0cmluZ0dlbmVyYXRvciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9vcmlnaW4vZWRpdC9zdHJ1Y3R1cmUuc291cmNlLWl0ZW0tZWRpdGVkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVPcmlnaW5DaGFuZ2VkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL29yaWdpbi9zdHJ1Y3R1cmUub3JpZ2luLWNoYW5nZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IFR5cGVGaWVsZCB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9maWVsZC9kb21haW4vZGF0YS10eXBlL3R5cGUuZmllbGQnO1xuaW1wb3J0IHsgT3JpZ2luSWQgfSBmcm9tICcuL29yaWdpbi9vcmlnaW4taWQnO1xuXG5cbmV4cG9ydCBjbGFzcyBTb3VyY2VNYW5hZ2VyIHtcblxuXHRwcml2YXRlIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIGZldGNoZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIG9yaWdpbjogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT47XG5cblx0cHJpdmF0ZSBlbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4gPSBbXTtcblxuXHQvLyBFbnRpdGllcyBhZnRlciBmaWx0ZXJpbmcsIHNlYXJjaGluZ1xuXHRwcml2YXRlIHByZXBhcmVkRW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+ID0gW107XG5cblx0cHJpdmF0ZSBzbGljZWRFbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4gPSBbXTtcblxuXHRpc0xvYWRpbmcoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubG9hZGluZztcblx0fVxuXG5cdGlzRmV0Y2hlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5mZXRjaGVkO1xuXHR9XG5cblx0c2V0TG9hZGluZyhlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5sb2FkaW5nID0gZW5hYmxlZDtcblx0fVxuXG5cdHNldEVudGl0aWVzKGVudDogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiB2b2lkIHtcblx0XHR0aGlzLmVudGl0aWVzID0gZW50O1xuXHRcdHRoaXMucmVjYWxjdWxhdGVQb3NpdGlvbnMoKTtcblx0fVxuXG5cdGdldEVudGl0aWVzKCk6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5lbnRpdGllcztcblx0fVxuXG5cdHNldFByZXBhcmVkRW50aXRpZXMoKTogdm9pZCB7XG5cdFx0dGhpcy5wcmVwYXJlZEVudGl0aWVzID0gWy4uLnRoaXMuZW50aXRpZXNdO1xuXHR9XG5cblx0Z2V0UHJlcGFyZWRFbnRpdGllcygpOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMucHJlcGFyZWRFbnRpdGllcztcblx0fVxuXG5cdHNldFNsaWNlZEVudGl0aWVzKGVudDogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pIHtcblx0XHR0aGlzLnNsaWNlZEVudGl0aWVzID0gZW50O1xuXHR9XG5cblx0Z2V0U2xpY2VkRW50aXRpZXMoKTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLnNsaWNlZEVudGl0aWVzO1xuXHR9XG5cblx0c2V0T3JpZ2luKGl0ZW1zOiBBcnJheTxhbnk+ID0gW10sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cdFx0dGhpcy5vcmlnaW4gPSB0aGlzLmNvbnZlcnRJdGVtcyhpdGVtcyk7XG5cblx0XHRyZXR1cm4gdGhpcy5jcmVhdGVPcmlnaW5DaGFuZ2VkRXZlbnQoc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0c2V0Q29udmVydGVkT3JpZ2luKGl0ZW1zOiBBcnJheTxhbnk+ID0gW10sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cdFx0dGhpcy5vcmlnaW4gPSBpdGVtcztcblxuXHRcdHJldHVybiB0aGlzLmNyZWF0ZU9yaWdpbkNoYW5nZWRFdmVudChzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRnZXRPcmlnaW4oKTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLm9yaWdpbjtcblx0fVxuXG5cdGdldE9yaWdpblNpemUoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5vcmlnaW4ubGVuZ3RoO1xuXHR9XG5cblx0Ly8gZWRpdE9yaWdpbkl0ZW1CeVByb3BlcnR5KGJ5RmllbGQsIHZhbHVlOiBhbnksIGZpZWxkOiBGaWVsZCwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQWdncmVnYXRlRXZlbnQge1xuXHQvL1xuXHQvLyB9XG5cblx0ZWRpdE9yaWdpbkl0ZW0oaXRlbUlkOiBzdHJpbmcsIHZhbHVlOiBhbnksIGZpZWxkOiBUeXBlRmllbGQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHRjb25zdCBpdGVtOiBPcmlnaW5JdGVtRW50aXR5ID0gdGhpcy5maW5kT3JpZ2luSXRlbShpdGVtSWQpLFxuXHRcdFx0aXRlbUJlZm9yZUNoYW5nZSA9IGl0ZW0uY2xvbmUoKTtcblxuXHRcdGlmIChpdGVtKSB7XG5cdFx0XHRpdGVtLnJhd0RhdGFbZmllbGQuZ2V0QWNjZXNzb3IoKV0gPSB2YWx1ZTtcblx0XHRcdGl0ZW0uYnVtcFZlcnNpb24oKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gW1xuXHRcdFx0bmV3IFN0cnVjdHVyZVNvdXJjZUl0ZW1FZGl0ZWRBZ2dyZWdhdGVFdmVudChzdHJ1Y3R1cmVJZCwgaXRlbUJlZm9yZUNoYW5nZSwgaXRlbS5jbG9uZSgpKSxcblx0XHRcdHRoaXMuY3JlYXRlT3JpZ2luQ2hhbmdlZEV2ZW50KHN0cnVjdHVyZUlkKVxuXHRcdF07XG5cdH1cblxuXHRyZW1vdmVPcmlnaW5JdGVtKGl0ZW1JZDogc3RyaW5nLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5maW5kT3JpZ2luSXRlbUluZGV4KGl0ZW1JZCk7XG5cblx0XHRpZiAoaW5kZXggPiAtMSkge1xuXG5cdFx0XHR0aGlzLm9yaWdpbi5zcGxpY2UoaW5kZXgsIDEpO1xuXG5cdFx0XHRyZXR1cm4gW3RoaXMuY3JlYXRlT3JpZ2luQ2hhbmdlZEV2ZW50KHN0cnVjdHVyZUlkKV07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0SXRlbXMoaXRlbXM6IEFycmF5PGFueT4pOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIGl0ZW1zLm1hcCgoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IE9yaWdpbkl0ZW1FbnRpdHkobmV3IE9yaWdpbklkKFJhbmRvbVN0cmluZ0dlbmVyYXRvci5nZW5lcmF0ZSgpKSwgaXRlbSwgaW5kZXgpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVPcmlnaW5DaGFuZ2VkRXZlbnQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZU9yaWdpbkNoYW5nZWRBZ2dyZWdhdGVFdmVudChzdHJ1Y3R1cmVJZCwgdGhpcy5vcmlnaW4pO1xuXHR9XG5cblx0cHJpdmF0ZSBmaW5kT3JpZ2luSXRlbShpdGVtSWQ6IHN0cmluZyk6IE9yaWdpbkl0ZW1FbnRpdHkge1xuXHRcdHJldHVybiB0aGlzLm9yaWdpbi5maW5kKChpdGVtOiBPcmlnaW5JdGVtRW50aXR5KSA9PiBpdGVtLmdldElkKCkudG9TdHJpbmcoKSA9PT0gaXRlbUlkKTtcblx0fVxuXG5cdHByaXZhdGUgZmluZE9yaWdpbkl0ZW1JbmRleChpdGVtSWQ6IHN0cmluZyk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMub3JpZ2luLmZpbmRJbmRleCgoaXRlbTogT3JpZ2luSXRlbUVudGl0eSkgPT4gaXRlbS5nZXRJZCgpLnRvU3RyaW5nKCkgPT09IGl0ZW1JZCk7XG5cdH1cblxuXHRwcml2YXRlIHJlY2FsY3VsYXRlUG9zaXRpb25zKCk6IHZvaWQge1xuXHRcdHRoaXMuZW50aXRpZXMuZm9yRWFjaCgoZW50OiBPcmlnaW5JdGVtRW50aXR5LCBpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0XHRlbnQuc2V0UG9zaXRpb24oaW5kZXgpO1xuXHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==