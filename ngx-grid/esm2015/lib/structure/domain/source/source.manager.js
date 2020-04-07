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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3NvdXJjZS9zb3VyY2UubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFrQixxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTNFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRS9ELE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3JILE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBRXpHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUc5QyxNQUFNLE9BQU8sYUFBYTtJQUExQjtRQUVTLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFFekIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUl6QixhQUFRLEdBQTRCLEVBQUUsQ0FBQzs7UUFHdkMscUJBQWdCLEdBQTRCLEVBQUUsQ0FBQztRQUUvQyxtQkFBYyxHQUE0QixFQUFFLENBQUM7SUFxSHRELENBQUM7Ozs7SUFuSEEsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxPQUFnQjtRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxHQUE0QjtRQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUNwQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsV0FBVztRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsbUJBQW1CO1FBQ2xCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7SUFFRCxtQkFBbUI7UUFDbEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxHQUE0QjtRQUM3QyxJQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsaUJBQWlCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM1QixDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsUUFBb0IsRUFBRSxFQUFFLFdBQXdCO1FBQ3pELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV2QyxPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxRQUFvQixFQUFFLEVBQUUsV0FBd0I7UUFDbEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFFcEIsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQzNCLENBQUM7Ozs7Ozs7Ozs7O0lBTUQsY0FBYyxDQUFDLE1BQWMsRUFBRSxLQUFVLEVBQUUsS0FBZ0IsRUFBRSxXQUF3Qjs7Y0FFOUUsSUFBSSxHQUFxQixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQzs7Y0FDekQsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtRQUVoQyxJQUFJLElBQUksRUFBRTtZQUNULElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQzFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNuQjtRQUVELE9BQU87WUFDTixJQUFJLHVDQUF1QyxDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDeEYsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsQ0FBQztTQUMxQyxDQUFDO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsTUFBYyxFQUFFLFdBQXdCOztjQUVsRCxLQUFLLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztRQUU5QyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtZQUVmLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUU3QixPQUFPLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7U0FDcEQ7UUFFRCxPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7Ozs7OztJQUVPLFlBQVksQ0FBQyxLQUFpQjtRQUNyQyxPQUFPLEtBQUssQ0FBQyxHQUFHOzs7OztRQUFDLENBQUMsSUFBUyxFQUFFLEtBQWEsRUFBRSxFQUFFO1lBQzdDLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxRixDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLHdCQUF3QixDQUFDLFdBQXdCO1FBQ3hELE9BQU8sSUFBSSxvQ0FBb0MsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNFLENBQUM7Ozs7OztJQUVPLGNBQWMsQ0FBQyxNQUFjO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxJQUFzQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssTUFBTSxFQUFDLENBQUM7SUFDekYsQ0FBQzs7Ozs7O0lBRU8sbUJBQW1CLENBQUMsTUFBYztRQUN6QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUzs7OztRQUFDLENBQUMsSUFBc0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLE1BQU0sRUFBQyxDQUFDO0lBQzlGLENBQUM7Ozs7O0lBRU8sb0JBQW9CO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTzs7Ozs7UUFBQyxDQUFDLEdBQXFCLEVBQUUsS0FBYSxFQUFFLEVBQUU7WUFDOUQsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Q0FFRDs7Ozs7O0lBaElBLGdDQUFpQzs7Ozs7SUFFakMsZ0NBQWlDOzs7OztJQUVqQywrQkFBd0M7Ozs7O0lBRXhDLGlDQUErQzs7Ozs7SUFHL0MseUNBQXVEOzs7OztJQUV2RCx1Q0FBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgUmFuZG9tU3RyaW5nR2VuZXJhdG9yIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VJdGVtRWRpdGVkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL29yaWdpbi9lZGl0L3N0cnVjdHVyZS5zb3VyY2UtaXRlbS1lZGl0ZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZU9yaWdpbkNoYW5nZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vb3JpZ2luL3N0cnVjdHVyZS5vcmlnaW4tY2hhbmdlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgVHlwZUZpZWxkIH0gZnJvbSAnLi4vc3RydWN0dXJlL2ZpZWxkL2RhdGEtdHlwZS90eXBlLmZpZWxkJztcbmltcG9ydCB7IE9yaWdpbklkIH0gZnJvbSAnLi9vcmlnaW4vb3JpZ2luLWlkJztcblxuXG5leHBvcnQgY2xhc3MgU291cmNlTWFuYWdlciB7XG5cblx0cHJpdmF0ZSBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBmZXRjaGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBvcmlnaW46IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+O1xuXG5cdHByaXZhdGUgZW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+ID0gW107XG5cblx0Ly8gRW50aXRpZXMgYWZ0ZXIgZmlsdGVyaW5nLCBzZWFyY2hpbmdcblx0cHJpdmF0ZSBwcmVwYXJlZEVudGl0aWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiA9IFtdO1xuXG5cdHByaXZhdGUgc2xpY2VkRW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+ID0gW107XG5cblx0aXNMb2FkaW5nKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmxvYWRpbmc7XG5cdH1cblxuXHRpc0ZldGNoZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZmV0Y2hlZDtcblx0fVxuXG5cdHNldExvYWRpbmcoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMubG9hZGluZyA9IGVuYWJsZWQ7XG5cdH1cblxuXHRzZXRFbnRpdGllcyhlbnQ6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogdm9pZCB7XG5cdFx0dGhpcy5lbnRpdGllcyA9IGVudDtcblx0XHR0aGlzLnJlY2FsY3VsYXRlUG9zaXRpb25zKCk7XG5cdH1cblxuXHRnZXRFbnRpdGllcygpOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMuZW50aXRpZXM7XG5cdH1cblxuXHRzZXRQcmVwYXJlZEVudGl0aWVzKCk6IHZvaWQge1xuXHRcdHRoaXMucHJlcGFyZWRFbnRpdGllcyA9IFsuLi50aGlzLmVudGl0aWVzXTtcblx0fVxuXG5cdGdldFByZXBhcmVkRW50aXRpZXMoKTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLnByZXBhcmVkRW50aXRpZXM7XG5cdH1cblxuXHRzZXRTbGljZWRFbnRpdGllcyhlbnQ6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KSB7XG5cdFx0dGhpcy5zbGljZWRFbnRpdGllcyA9IGVudDtcblx0fVxuXG5cdGdldFNsaWNlZEVudGl0aWVzKCk6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5zbGljZWRFbnRpdGllcztcblx0fVxuXG5cdHNldE9yaWdpbihpdGVtczogQXJyYXk8YW55PiA9IFtdLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXHRcdHRoaXMub3JpZ2luID0gdGhpcy5jb252ZXJ0SXRlbXMoaXRlbXMpO1xuXG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlT3JpZ2luQ2hhbmdlZEV2ZW50KHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHNldENvbnZlcnRlZE9yaWdpbihpdGVtczogQXJyYXk8YW55PiA9IFtdLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXHRcdHRoaXMub3JpZ2luID0gaXRlbXM7XG5cblx0XHRyZXR1cm4gdGhpcy5jcmVhdGVPcmlnaW5DaGFuZ2VkRXZlbnQoc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0Z2V0T3JpZ2luKCk6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5vcmlnaW47XG5cdH1cblxuXHRnZXRPcmlnaW5TaXplKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMub3JpZ2luLmxlbmd0aDtcblx0fVxuXG5cdC8vIGVkaXRPcmlnaW5JdGVtQnlQcm9wZXJ0eShieUZpZWxkLCB2YWx1ZTogYW55LCBmaWVsZDogRmllbGQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFnZ3JlZ2F0ZUV2ZW50IHtcblx0Ly9cblx0Ly8gfVxuXG5cdGVkaXRPcmlnaW5JdGVtKGl0ZW1JZDogc3RyaW5nLCB2YWx1ZTogYW55LCBmaWVsZDogVHlwZUZpZWxkLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXG5cdFx0Y29uc3QgaXRlbTogT3JpZ2luSXRlbUVudGl0eSA9IHRoaXMuZmluZE9yaWdpbkl0ZW0oaXRlbUlkKSxcblx0XHRcdGl0ZW1CZWZvcmVDaGFuZ2UgPSBpdGVtLmNsb25lKCk7XG5cblx0XHRpZiAoaXRlbSkge1xuXHRcdFx0aXRlbS5yYXdEYXRhW2ZpZWxkLmdldEFjY2Vzc29yKCldID0gdmFsdWU7XG5cdFx0XHRpdGVtLmJ1bXBWZXJzaW9uKCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFtcblx0XHRcdG5ldyBTdHJ1Y3R1cmVTb3VyY2VJdGVtRWRpdGVkQWdncmVnYXRlRXZlbnQoc3RydWN0dXJlSWQsIGl0ZW1CZWZvcmVDaGFuZ2UsIGl0ZW0uY2xvbmUoKSksXG5cdFx0XHR0aGlzLmNyZWF0ZU9yaWdpbkNoYW5nZWRFdmVudChzdHJ1Y3R1cmVJZClcblx0XHRdO1xuXHR9XG5cblx0cmVtb3ZlT3JpZ2luSXRlbShpdGVtSWQ6IHN0cmluZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHRjb25zdCBpbmRleCA9IHRoaXMuZmluZE9yaWdpbkl0ZW1JbmRleChpdGVtSWQpO1xuXG5cdFx0aWYgKGluZGV4ID4gLTEpIHtcblxuXHRcdFx0dGhpcy5vcmlnaW4uc3BsaWNlKGluZGV4LCAxKTtcblxuXHRcdFx0cmV0dXJuIFt0aGlzLmNyZWF0ZU9yaWdpbkNoYW5nZWRFdmVudChzdHJ1Y3R1cmVJZCldO1xuXHRcdH1cblxuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdHByaXZhdGUgY29udmVydEl0ZW1zKGl0ZW1zOiBBcnJheTxhbnk+KTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiBpdGVtcy5tYXAoKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBPcmlnaW5JdGVtRW50aXR5KG5ldyBPcmlnaW5JZChSYW5kb21TdHJpbmdHZW5lcmF0b3IuZ2VuZXJhdGUoKSksIGl0ZW0sIGluZGV4KTtcblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlT3JpZ2luQ2hhbmdlZEV2ZW50KHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cdFx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmVPcmlnaW5DaGFuZ2VkQWdncmVnYXRlRXZlbnQoc3RydWN0dXJlSWQsIHRoaXMub3JpZ2luKTtcblx0fVxuXG5cdHByaXZhdGUgZmluZE9yaWdpbkl0ZW0oaXRlbUlkOiBzdHJpbmcpOiBPcmlnaW5JdGVtRW50aXR5IHtcblx0XHRyZXR1cm4gdGhpcy5vcmlnaW4uZmluZCgoaXRlbTogT3JpZ2luSXRlbUVudGl0eSkgPT4gaXRlbS5nZXRJZCgpLnRvU3RyaW5nKCkgPT09IGl0ZW1JZCk7XG5cdH1cblxuXHRwcml2YXRlIGZpbmRPcmlnaW5JdGVtSW5kZXgoaXRlbUlkOiBzdHJpbmcpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm9yaWdpbi5maW5kSW5kZXgoKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHkpID0+IGl0ZW0uZ2V0SWQoKS50b1N0cmluZygpID09PSBpdGVtSWQpO1xuXHR9XG5cblx0cHJpdmF0ZSByZWNhbGN1bGF0ZVBvc2l0aW9ucygpOiB2b2lkIHtcblx0XHR0aGlzLmVudGl0aWVzLmZvckVhY2goKGVudDogT3JpZ2luSXRlbUVudGl0eSwgaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdFx0ZW50LnNldFBvc2l0aW9uKGluZGV4KTtcblx0XHR9KTtcblx0fVxuXG59XG4iXX0=