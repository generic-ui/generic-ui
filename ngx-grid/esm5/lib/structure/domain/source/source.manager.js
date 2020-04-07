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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3NvdXJjZS9zb3VyY2UubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBa0IscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUUvRCxPQUFPLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUNySCxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUV6RyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHOUM7SUFBQTtRQUVTLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFFekIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUl6QixhQUFRLEdBQTRCLEVBQUUsQ0FBQzs7UUFHdkMscUJBQWdCLEdBQTRCLEVBQUUsQ0FBQztRQUUvQyxtQkFBYyxHQUE0QixFQUFFLENBQUM7SUFxSHRELENBQUM7Ozs7SUFuSEEsaUNBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxpQ0FBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxrQ0FBVTs7OztJQUFWLFVBQVcsT0FBZ0I7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxtQ0FBVzs7OztJQUFYLFVBQVksR0FBNEI7UUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDcEIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELG1DQUFXOzs7SUFBWDtRQUNDLE9B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Ozs7SUFFTyxnREFBd0I7Ozs7O0lBQWhDLFVBQWlDLFdBQXdCO1FBQ3hELE9BQU8sSUFBSSxvQ0FBb0MsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNFLENBQUM7Ozs7OztJQUVPLHNDQUFjOzs7OztJQUF0QixVQUF1QixNQUFjO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQyxJQUFzQixJQUFLLE9BQUEsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLE1BQU0sRUFBbEMsQ0FBa0MsRUFBQyxDQUFDO0lBQ3pGLENBQUM7Ozs7OztJQUVPLDJDQUFtQjs7Ozs7SUFBM0IsVUFBNEIsTUFBYztRQUN6QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsSUFBc0IsSUFBSyxPQUFBLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxNQUFNLEVBQWxDLENBQWtDLEVBQUMsQ0FBQztJQUM5RixDQUFDOzs7OztJQUVPLDRDQUFvQjs7OztJQUE1QjtRQUNDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTzs7Ozs7UUFBQyxVQUFDLEdBQXFCLEVBQUUsS0FBYTtZQUMxRCxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQztJQUVGLG9CQUFDO0FBQUQsQ0FBQyxBQWxJRCxJQWtJQzs7Ozs7OztJQWhJQSxnQ0FBaUM7Ozs7O0lBRWpDLGdDQUFpQzs7Ozs7SUFFakMsK0JBQXdDOzs7OztJQUV4QyxpQ0FBK0M7Ozs7O0lBRy9DLHlDQUF1RDs7Ozs7SUFFdkQsdUNBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQsIFJhbmRvbVN0cmluZ0dlbmVyYXRvciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9vcmlnaW4vZWRpdC9zdHJ1Y3R1cmUuc291cmNlLWl0ZW0tZWRpdGVkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVPcmlnaW5DaGFuZ2VkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL29yaWdpbi9zdHJ1Y3R1cmUub3JpZ2luLWNoYW5nZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IFR5cGVGaWVsZCB9IGZyb20gJy4uL3N0cnVjdHVyZS9maWVsZC9kYXRhLXR5cGUvdHlwZS5maWVsZCc7XG5pbXBvcnQgeyBPcmlnaW5JZCB9IGZyb20gJy4vb3JpZ2luL29yaWdpbi1pZCc7XG5cblxuZXhwb3J0IGNsYXNzIFNvdXJjZU1hbmFnZXIge1xuXG5cdHByaXZhdGUgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgZmV0Y2hlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgb3JpZ2luOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PjtcblxuXHRwcml2YXRlIGVudGl0aWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiA9IFtdO1xuXG5cdC8vIEVudGl0aWVzIGFmdGVyIGZpbHRlcmluZywgc2VhcmNoaW5nXG5cdHByaXZhdGUgcHJlcGFyZWRFbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4gPSBbXTtcblxuXHRwcml2YXRlIHNsaWNlZEVudGl0aWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiA9IFtdO1xuXG5cdGlzTG9hZGluZygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5sb2FkaW5nO1xuXHR9XG5cblx0aXNGZXRjaGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmZldGNoZWQ7XG5cdH1cblxuXHRzZXRMb2FkaW5nKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmxvYWRpbmcgPSBlbmFibGVkO1xuXHR9XG5cblx0c2V0RW50aXRpZXMoZW50OiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IHZvaWQge1xuXHRcdHRoaXMuZW50aXRpZXMgPSBlbnQ7XG5cdFx0dGhpcy5yZWNhbGN1bGF0ZVBvc2l0aW9ucygpO1xuXHR9XG5cblx0Z2V0RW50aXRpZXMoKTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLmVudGl0aWVzO1xuXHR9XG5cblx0c2V0UHJlcGFyZWRFbnRpdGllcygpOiB2b2lkIHtcblx0XHR0aGlzLnByZXBhcmVkRW50aXRpZXMgPSBbLi4udGhpcy5lbnRpdGllc107XG5cdH1cblxuXHRnZXRQcmVwYXJlZEVudGl0aWVzKCk6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5wcmVwYXJlZEVudGl0aWVzO1xuXHR9XG5cblx0c2V0U2xpY2VkRW50aXRpZXMoZW50OiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pikge1xuXHRcdHRoaXMuc2xpY2VkRW50aXRpZXMgPSBlbnQ7XG5cdH1cblxuXHRnZXRTbGljZWRFbnRpdGllcygpOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMuc2xpY2VkRW50aXRpZXM7XG5cdH1cblxuXHRzZXRPcmlnaW4oaXRlbXM6IEFycmF5PGFueT4gPSBbXSwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblx0XHR0aGlzLm9yaWdpbiA9IHRoaXMuY29udmVydEl0ZW1zKGl0ZW1zKTtcblxuXHRcdHJldHVybiB0aGlzLmNyZWF0ZU9yaWdpbkNoYW5nZWRFdmVudChzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRzZXRDb252ZXJ0ZWRPcmlnaW4oaXRlbXM6IEFycmF5PGFueT4gPSBbXSwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblx0XHR0aGlzLm9yaWdpbiA9IGl0ZW1zO1xuXG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlT3JpZ2luQ2hhbmdlZEV2ZW50KHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdGdldE9yaWdpbigpOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMub3JpZ2luO1xuXHR9XG5cblx0Z2V0T3JpZ2luU2l6ZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm9yaWdpbi5sZW5ndGg7XG5cdH1cblxuXHQvLyBlZGl0T3JpZ2luSXRlbUJ5UHJvcGVydHkoYnlGaWVsZCwgdmFsdWU6IGFueSwgZmllbGQ6IEZpZWxkLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBBZ2dyZWdhdGVFdmVudCB7XG5cdC8vXG5cdC8vIH1cblxuXHRlZGl0T3JpZ2luSXRlbShpdGVtSWQ6IHN0cmluZywgdmFsdWU6IGFueSwgZmllbGQ6IFR5cGVGaWVsZCwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdGNvbnN0IGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHkgPSB0aGlzLmZpbmRPcmlnaW5JdGVtKGl0ZW1JZCksXG5cdFx0XHRpdGVtQmVmb3JlQ2hhbmdlID0gaXRlbS5jbG9uZSgpO1xuXG5cdFx0aWYgKGl0ZW0pIHtcblx0XHRcdGl0ZW0ucmF3RGF0YVtmaWVsZC5nZXRBY2Nlc3NvcigpXSA9IHZhbHVlO1xuXHRcdFx0aXRlbS5idW1wVmVyc2lvbigpO1xuXHRcdH1cblxuXHRcdHJldHVybiBbXG5cdFx0XHRuZXcgU3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEFnZ3JlZ2F0ZUV2ZW50KHN0cnVjdHVyZUlkLCBpdGVtQmVmb3JlQ2hhbmdlLCBpdGVtLmNsb25lKCkpLFxuXHRcdFx0dGhpcy5jcmVhdGVPcmlnaW5DaGFuZ2VkRXZlbnQoc3RydWN0dXJlSWQpXG5cdFx0XTtcblx0fVxuXG5cdHJlbW92ZU9yaWdpbkl0ZW0oaXRlbUlkOiBzdHJpbmcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLmZpbmRPcmlnaW5JdGVtSW5kZXgoaXRlbUlkKTtcblxuXHRcdGlmIChpbmRleCA+IC0xKSB7XG5cblx0XHRcdHRoaXMub3JpZ2luLnNwbGljZShpbmRleCwgMSk7XG5cblx0XHRcdHJldHVybiBbdGhpcy5jcmVhdGVPcmlnaW5DaGFuZ2VkRXZlbnQoc3RydWN0dXJlSWQpXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRJdGVtcyhpdGVtczogQXJyYXk8YW55Pik6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gaXRlbXMubWFwKChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRcdHJldHVybiBuZXcgT3JpZ2luSXRlbUVudGl0eShuZXcgT3JpZ2luSWQoUmFuZG9tU3RyaW5nR2VuZXJhdG9yLmdlbmVyYXRlKCkpLCBpdGVtLCBpbmRleCk7XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZU9yaWdpbkNoYW5nZWRFdmVudChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXHRcdHJldHVybiBuZXcgU3RydWN0dXJlT3JpZ2luQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50KHN0cnVjdHVyZUlkLCB0aGlzLm9yaWdpbik7XG5cdH1cblxuXHRwcml2YXRlIGZpbmRPcmlnaW5JdGVtKGl0ZW1JZDogc3RyaW5nKTogT3JpZ2luSXRlbUVudGl0eSB7XG5cdFx0cmV0dXJuIHRoaXMub3JpZ2luLmZpbmQoKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHkpID0+IGl0ZW0uZ2V0SWQoKS50b1N0cmluZygpID09PSBpdGVtSWQpO1xuXHR9XG5cblx0cHJpdmF0ZSBmaW5kT3JpZ2luSXRlbUluZGV4KGl0ZW1JZDogc3RyaW5nKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5vcmlnaW4uZmluZEluZGV4KChpdGVtOiBPcmlnaW5JdGVtRW50aXR5KSA9PiBpdGVtLmdldElkKCkudG9TdHJpbmcoKSA9PT0gaXRlbUlkKTtcblx0fVxuXG5cdHByaXZhdGUgcmVjYWxjdWxhdGVQb3NpdGlvbnMoKTogdm9pZCB7XG5cdFx0dGhpcy5lbnRpdGllcy5mb3JFYWNoKChlbnQ6IE9yaWdpbkl0ZW1FbnRpdHksIGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRcdGVudC5zZXRQb3NpdGlvbihpbmRleCk7XG5cdFx0fSk7XG5cdH1cblxufVxuIl19