/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { RandomStringGenerator } from '@generic-ui/hermes';
import { OriginItemEntity } from './origin/origin-item-entity';
import { StructureSourceItemEditedAggregateEvent } from './origin/edit/structure.source-item-edited.aggregate-event';
import { StructureOriginChangedAggregateEvent } from './origin/structure.origin-changed.aggregate-event';
import { OriginId } from './origin/origin-id';
export class SourceManager {
    constructor() {
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
    isLoading() {
        return this.loading;
    }
    /**
     * @return {?}
     */
    isFetched() {
        return this.fetched;
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    setLoading(enabled) {
        this.loading = enabled;
    }
    /**
     * @param {?} ent
     * @return {?}
     */
    setEntities(ent) {
        this.entities = ent;
        this.recalculatePositions();
    }
    /**
     * @return {?}
     */
    getEntities() {
        return this.entities;
    }
    /**
     * @return {?}
     */
    setPreparedEntities() {
        this.preparedEntities = [...this.entities];
    }
    /**
     * @return {?}
     */
    getPreparedEntities() {
        return this.preparedEntities;
    }
    /**
     * @param {?} ent
     * @return {?}
     */
    setSlicedEntities(ent) {
        this.slicedEntities = ent;
    }
    /**
     * @return {?}
     */
    getSlicedEntities() {
        return this.slicedEntities;
    }
    /**
     * @param {?=} items
     * @param {?=} structureId
     * @return {?}
     */
    setOrigin(items = [], structureId) {
        this.origin = this.convertItems(items);
        return this.createOriginChangedEvent(structureId);
    }
    /**
     * @param {?=} items
     * @param {?=} structureId
     * @return {?}
     */
    setConvertedOrigin(items = [], structureId) {
        this.origin = items;
        return this.createOriginChangedEvent(structureId);
    }
    /**
     * @return {?}
     */
    getOrigin() {
        return this.origin;
    }
    /**
     * @return {?}
     */
    getOriginSize() {
        return this.origin.length;
    }
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
    editOriginItem(itemId, value, field, structureId) {
        /** @type {?} */
        const item = this.findOriginItem(itemId);
        /** @type {?} */
        const itemBeforeChange = item.clone();
        if (item) {
            item.rawData[field.getAccessor()] = value;
            item.bumpVersion();
        }
        return [
            new StructureSourceItemEditedAggregateEvent(structureId, itemBeforeChange, item.clone()),
            this.createOriginChangedEvent(structureId)
        ];
    }
    /**
     * @param {?} itemId
     * @param {?} structureId
     * @return {?}
     */
    removeOriginItem(itemId, structureId) {
        /** @type {?} */
        const index = this.findOriginItemIndex(itemId);
        if (index > -1) {
            this.origin.splice(index, 1);
            return [this.createOriginChangedEvent(structureId)];
        }
        return [];
    }
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    convertItems(items) {
        return items.map((/**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        (item, index) => {
            return new OriginItemEntity(new OriginId(RandomStringGenerator.generate()), item, index);
        }));
    }
    /**
     * @private
     * @param {?} structureId
     * @return {?}
     */
    createOriginChangedEvent(structureId) {
        return new StructureOriginChangedAggregateEvent(structureId, this.origin);
    }
    /**
     * @private
     * @param {?} itemId
     * @return {?}
     */
    findOriginItem(itemId) {
        return this.origin.find((/**
         * @param {?} item
         * @return {?}
         */
        (item) => item.getId().toString() === itemId));
    }
    /**
     * @private
     * @param {?} itemId
     * @return {?}
     */
    findOriginItemIndex(itemId) {
        return this.origin.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        (item) => item.getId().toString() === itemId));
    }
    /**
     * @private
     * @return {?}
     */
    recalculatePositions() {
        this.entities.forEach((/**
         * @param {?} ent
         * @param {?} index
         * @return {?}
         */
        (ent, index) => {
            ent.setPosition(index);
        }));
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3NvdXJjZS9zb3VyY2UubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFrQixxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTNFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRS9ELE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3JILE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBRXpHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUc5QyxNQUFNLE9BQU8sYUFBYTtJQUExQjtRQUVTLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFFekIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUl6QixhQUFRLEdBQTRCLEVBQUUsQ0FBQzs7UUFHdkMscUJBQWdCLEdBQTRCLEVBQUUsQ0FBQztRQUUvQyxtQkFBYyxHQUE0QixFQUFFLENBQUM7SUFxSHRELENBQUM7Ozs7SUFuSEEsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxPQUFnQjtRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxHQUE0QjtRQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUNwQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsV0FBVztRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0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LEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssTUFBTSxFQUFDLENBQUM7SUFDekYsQ0FBQzs7Ozs7O0lBRU8sbUJBQW1CLENBQUMsTUFBYztRQUN6QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUzs7OztRQUFDLENBQUMsSUFBc0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLE1BQU0sRUFBQyxDQUFDO0lBQzlGLENBQUM7Ozs7O0lBRU8sb0JBQW9CO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTzs7Ozs7UUFBQyxDQUFDLEdBQXFCLEVBQUUsS0FBYSxFQUFFLEVBQUU7WUFDOUQsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Q0FFRDs7Ozs7O0lBaElBLGdDQUFpQzs7Ozs7SUFFakMsZ0NBQWlDOzs7OztJQUVqQywrQkFBd0M7Ozs7O0lBRXhDLGlDQUErQzs7Ozs7SUFHL0MseUNBQXVEOzs7OztJQUV2RCx1Q0FBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgUmFuZG9tU3RyaW5nR2VuZXJhdG9yIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VJdGVtRWRpdGVkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL29yaWdpbi9lZGl0L3N0cnVjdHVyZS5zb3VyY2UtaXRlbS1lZGl0ZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZU9yaWdpbkNoYW5nZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vb3JpZ2luL3N0cnVjdHVyZS5vcmlnaW4tY2hhbmdlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgVHlwZUZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2ZpZWxkL2RvbWFpbi9kYXRhLXR5cGUvdHlwZS5maWVsZCc7XG5pbXBvcnQgeyBPcmlnaW5JZCB9IGZyb20gJy4vb3JpZ2luL29yaWdpbi1pZCc7XG5cblxuZXhwb3J0IGNsYXNzIFNvdXJjZU1hbmFnZXIge1xuXG5cdHByaXZhdGUgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgZmV0Y2hlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgb3JpZ2luOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PjtcblxuXHRwcml2YXRlIGVudGl0aWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiA9IFtdO1xuXG5cdC8vIEVudGl0aWVzIGFmdGVyIGZpbHRlcmluZywgc2VhcmNoaW5nXG5cdHByaXZhdGUgcHJlcGFyZWRFbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4gPSBbXTtcblxuXHRwcml2YXRlIHNsaWNlZEVudGl0aWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiA9IFtdO1xuXG5cdGlzTG9hZGluZygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5sb2FkaW5nO1xuXHR9XG5cblx0aXNGZXRjaGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmZldGNoZWQ7XG5cdH1cblxuXHRzZXRMb2FkaW5nKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmxvYWRpbmcgPSBlbmFibGVkO1xuXHR9XG5cblx0c2V0RW50aXRpZXMoZW50OiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IHZvaWQge1xuXHRcdHRoaXMuZW50aXRpZXMgPSBlbnQ7XG5cdFx0dGhpcy5yZWNhbGN1bGF0ZVBvc2l0aW9ucygpO1xuXHR9XG5cblx0Z2V0RW50aXRpZXMoKTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLmVudGl0aWVzO1xuXHR9XG5cblx0c2V0UHJlcGFyZWRFbnRpdGllcygpOiB2b2lkIHtcblx0XHR0aGlzLnByZXBhcmVkRW50aXRpZXMgPSBbLi4udGhpcy5lbnRpdGllc107XG5cdH1cblxuXHRnZXRQcmVwYXJlZEVudGl0aWVzKCk6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5wcmVwYXJlZEVudGl0aWVzO1xuXHR9XG5cblx0c2V0U2xpY2VkRW50aXRpZXMoZW50OiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pikge1xuXHRcdHRoaXMuc2xpY2VkRW50aXRpZXMgPSBlbnQ7XG5cdH1cblxuXHRnZXRTbGljZWRFbnRpdGllcygpOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMuc2xpY2VkRW50aXRpZXM7XG5cdH1cblxuXHRzZXRPcmlnaW4oaXRlbXM6IEFycmF5PGFueT4gPSBbXSwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblx0XHR0aGlzLm9yaWdpbiA9IHRoaXMuY29udmVydEl0ZW1zKGl0ZW1zKTtcblxuXHRcdHJldHVybiB0aGlzLmNyZWF0ZU9yaWdpbkNoYW5nZWRFdmVudChzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRzZXRDb252ZXJ0ZWRPcmlnaW4oaXRlbXM6IEFycmF5PGFueT4gPSBbXSwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblx0XHR0aGlzLm9yaWdpbiA9IGl0ZW1zO1xuXG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlT3JpZ2luQ2hhbmdlZEV2ZW50KHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdGdldE9yaWdpbigpOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMub3JpZ2luO1xuXHR9XG5cblx0Z2V0T3JpZ2luU2l6ZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm9yaWdpbi5sZW5ndGg7XG5cdH1cblxuXHQvLyBlZGl0T3JpZ2luSXRlbUJ5UHJvcGVydHkoYnlGaWVsZCwgdmFsdWU6IGFueSwgZmllbGQ6IEZpZWxkLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBBZ2dyZWdhdGVFdmVudCB7XG5cdC8vXG5cdC8vIH1cblxuXHRlZGl0T3JpZ2luSXRlbShpdGVtSWQ6IHN0cmluZywgdmFsdWU6IGFueSwgZmllbGQ6IFR5cGVGaWVsZCwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdGNvbnN0IGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHkgPSB0aGlzLmZpbmRPcmlnaW5JdGVtKGl0ZW1JZCksXG5cdFx0XHRpdGVtQmVmb3JlQ2hhbmdlID0gaXRlbS5jbG9uZSgpO1xuXG5cdFx0aWYgKGl0ZW0pIHtcblx0XHRcdGl0ZW0ucmF3RGF0YVtmaWVsZC5nZXRBY2Nlc3NvcigpXSA9IHZhbHVlO1xuXHRcdFx0aXRlbS5idW1wVmVyc2lvbigpO1xuXHRcdH1cblxuXHRcdHJldHVybiBbXG5cdFx0XHRuZXcgU3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEFnZ3JlZ2F0ZUV2ZW50KHN0cnVjdHVyZUlkLCBpdGVtQmVmb3JlQ2hhbmdlLCBpdGVtLmNsb25lKCkpLFxuXHRcdFx0dGhpcy5jcmVhdGVPcmlnaW5DaGFuZ2VkRXZlbnQoc3RydWN0dXJlSWQpXG5cdFx0XTtcblx0fVxuXG5cdHJlbW92ZU9yaWdpbkl0ZW0oaXRlbUlkOiBzdHJpbmcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLmZpbmRPcmlnaW5JdGVtSW5kZXgoaXRlbUlkKTtcblxuXHRcdGlmIChpbmRleCA+IC0xKSB7XG5cblx0XHRcdHRoaXMub3JpZ2luLnNwbGljZShpbmRleCwgMSk7XG5cblx0XHRcdHJldHVybiBbdGhpcy5jcmVhdGVPcmlnaW5DaGFuZ2VkRXZlbnQoc3RydWN0dXJlSWQpXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRJdGVtcyhpdGVtczogQXJyYXk8YW55Pik6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gaXRlbXMubWFwKChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRcdHJldHVybiBuZXcgT3JpZ2luSXRlbUVudGl0eShuZXcgT3JpZ2luSWQoUmFuZG9tU3RyaW5nR2VuZXJhdG9yLmdlbmVyYXRlKCkpLCBpdGVtLCBpbmRleCk7XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZU9yaWdpbkNoYW5nZWRFdmVudChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXHRcdHJldHVybiBuZXcgU3RydWN0dXJlT3JpZ2luQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50KHN0cnVjdHVyZUlkLCB0aGlzLm9yaWdpbik7XG5cdH1cblxuXHRwcml2YXRlIGZpbmRPcmlnaW5JdGVtKGl0ZW1JZDogc3RyaW5nKTogT3JpZ2luSXRlbUVudGl0eSB7XG5cdFx0cmV0dXJuIHRoaXMub3JpZ2luLmZpbmQoKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHkpID0+IGl0ZW0uZ2V0SWQoKS50b1N0cmluZygpID09PSBpdGVtSWQpO1xuXHR9XG5cblx0cHJpdmF0ZSBmaW5kT3JpZ2luSXRlbUluZGV4KGl0ZW1JZDogc3RyaW5nKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5vcmlnaW4uZmluZEluZGV4KChpdGVtOiBPcmlnaW5JdGVtRW50aXR5KSA9PiBpdGVtLmdldElkKCkudG9TdHJpbmcoKSA9PT0gaXRlbUlkKTtcblx0fVxuXG5cdHByaXZhdGUgcmVjYWxjdWxhdGVQb3NpdGlvbnMoKTogdm9pZCB7XG5cdFx0dGhpcy5lbnRpdGllcy5mb3JFYWNoKChlbnQ6IE9yaWdpbkl0ZW1FbnRpdHksIGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRcdGVudC5zZXRQb3NpdGlvbihpbmRleCk7XG5cdFx0fSk7XG5cdH1cblxufVxuIl19