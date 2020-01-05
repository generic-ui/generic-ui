/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { RandomStringGenerator } from '@generic-ui/hermes';
import { OriginItemEntity } from './origin/origin-item-entity';
import { StructureSourceItemEditedAggregateEvent } from './origin/edit/structure.source-item-edited.aggregate-event';
import { StructureOriginChangedAggregateEvent } from './origin/structure.origin-changed.aggregate-event';
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
         * @return {?}
         */
        (item) => new OriginItemEntity(RandomStringGenerator.generate(), item)));
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
        (item) => item.id === itemId));
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
        (item) => item.id === itemId));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3NvdXJjZS9jb21tYW5kL3NvdXJjZS5tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWtCLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFHL0QsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDckgsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFHekcsTUFBTSxPQUFPLGFBQWE7SUFBMUI7UUFFUyxZQUFPLEdBQVksS0FBSyxDQUFDO1FBRXpCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFJekIsYUFBUSxHQUE0QixFQUFFLENBQUM7O1FBR3ZDLHFCQUFnQixHQUE0QixFQUFFLENBQUM7UUFFL0MsbUJBQWMsR0FBNEIsRUFBRSxDQUFDO0lBNEd0RCxDQUFDOzs7O0lBMUdBLFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsT0FBZ0I7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsR0FBNEI7UUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELG1CQUFtQjtRQUNsQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FB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QyxJQUFzQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLE1BQU0sRUFBQyxDQUFDO0lBQzlFLENBQUM7Q0FFRDs7Ozs7O0lBdkhBLGdDQUFpQzs7Ozs7SUFFakMsZ0NBQWlDOzs7OztJQUVqQywrQkFBd0M7Ozs7O0lBRXhDLGlDQUErQzs7Ozs7SUFHL0MseUNBQXVEOzs7OztJQUV2RCx1Q0FBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgUmFuZG9tU3RyaW5nR2VuZXJhdG9yIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2RhdGEtdHlwZS9maWVsZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VJdGVtRWRpdGVkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL29yaWdpbi9lZGl0L3N0cnVjdHVyZS5zb3VyY2UtaXRlbS1lZGl0ZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZU9yaWdpbkNoYW5nZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vb3JpZ2luL3N0cnVjdHVyZS5vcmlnaW4tY2hhbmdlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuXG5cbmV4cG9ydCBjbGFzcyBTb3VyY2VNYW5hZ2VyIHtcblxuXHRwcml2YXRlIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIGZldGNoZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIG9yaWdpbjogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT47XG5cblx0cHJpdmF0ZSBlbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4gPSBbXTtcblxuXHQvLyBFbnRpdGllcyBhZnRlciBmaWx0ZXJpbmcsIHNlYXJjaGluZ1xuXHRwcml2YXRlIHByZXBhcmVkRW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+ID0gW107XG5cblx0cHJpdmF0ZSBzbGljZWRFbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4gPSBbXTtcblxuXHRpc0xvYWRpbmcoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubG9hZGluZztcblx0fVxuXG5cdGlzRmV0Y2hlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5mZXRjaGVkO1xuXHR9XG5cblx0c2V0TG9hZGluZyhlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5sb2FkaW5nID0gZW5hYmxlZDtcblx0fVxuXG5cdHNldEVudGl0aWVzKGVudDogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiB2b2lkIHtcblx0XHR0aGlzLmVudGl0aWVzID0gZW50O1xuXHR9XG5cblx0Z2V0RW50aXRpZXMoKTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLmVudGl0aWVzO1xuXHR9XG5cblx0c2V0UHJlcGFyZWRFbnRpdGllcygpOiB2b2lkIHtcblx0XHR0aGlzLnByZXBhcmVkRW50aXRpZXMgPSBbLi4udGhpcy5lbnRpdGllc107XG5cdH1cblxuXHRnZXRQcmVwYXJlZEVudGl0aWVzKCk6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5wcmVwYXJlZEVudGl0aWVzO1xuXHR9XG5cblx0c2V0U2xpY2VkRW50aXRpZXMoZW50OiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pikge1xuXHRcdHRoaXMuc2xpY2VkRW50aXRpZXMgPSBlbnQ7XG5cdH1cblxuXHRnZXRTbGljZWRFbnRpdGllcygpOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMuc2xpY2VkRW50aXRpZXM7XG5cdH1cblxuXHRzZXRPcmlnaW4oaXRlbXM6IEFycmF5PGFueT4gPSBbXSwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQWdncmVnYXRlRXZlbnQge1xuXHRcdHRoaXMub3JpZ2luID0gdGhpcy5jb252ZXJ0SXRlbXMoaXRlbXMpO1xuXG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlT3JpZ2luQ2hhbmdlZEV2ZW50KHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHNldENvbnZlcnRlZE9yaWdpbihpdGVtczogQXJyYXk8YW55PiA9IFtdLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBBZ2dyZWdhdGVFdmVudCB7XG5cdFx0dGhpcy5vcmlnaW4gPSBpdGVtcztcblxuXHRcdHJldHVybiB0aGlzLmNyZWF0ZU9yaWdpbkNoYW5nZWRFdmVudChzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRnZXRPcmlnaW4oKTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLm9yaWdpbjtcblx0fVxuXG5cdGdldE9yaWdpblNpemUoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5vcmlnaW4ubGVuZ3RoO1xuXHR9XG5cblx0Ly8gZWRpdE9yaWdpbkl0ZW1CeVByb3BlcnR5KGJ5RmllbGQsIHZhbHVlOiBhbnksIGZpZWxkOiBGaWVsZCwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQWdncmVnYXRlRXZlbnQge1xuXHQvL1xuXHQvLyB9XG5cblx0ZWRpdE9yaWdpbkl0ZW0oaXRlbUlkOiBzdHJpbmcsIHZhbHVlOiBhbnksIGZpZWxkOiBGaWVsZCwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudD4ge1xuXG5cdFx0Y29uc3QgaXRlbTogT3JpZ2luSXRlbUVudGl0eSA9IHRoaXMuZmluZE9yaWdpbkl0ZW0oaXRlbUlkKSxcblx0XHRcdGl0ZW1CZWZvcmVDaGFuZ2UgPSBpdGVtLmNsb25lKCk7XG5cblx0XHRpZiAoaXRlbSkge1xuXHRcdFx0aXRlbS5yYXdEYXRhW2ZpZWxkLmdldEFjY2Vzc29yKCldID0gdmFsdWU7XG5cdFx0XHRpdGVtLmJ1bXBWZXJzaW9uKCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFtcblx0XHRcdG5ldyBTdHJ1Y3R1cmVTb3VyY2VJdGVtRWRpdGVkQWdncmVnYXRlRXZlbnQoc3RydWN0dXJlSWQsIGl0ZW1CZWZvcmVDaGFuZ2UsIGl0ZW0uY2xvbmUoKSksXG5cdFx0XHR0aGlzLmNyZWF0ZU9yaWdpbkNoYW5nZWRFdmVudChzdHJ1Y3R1cmVJZClcblx0XHRdO1xuXHR9XG5cblx0cmVtb3ZlT3JpZ2luSXRlbShpdGVtSWQ6IHN0cmluZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQXJyYXk8QWdncmVnYXRlRXZlbnQ+IHtcblxuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5maW5kT3JpZ2luSXRlbUluZGV4KGl0ZW1JZCk7XG5cblx0XHRpZiAoaW5kZXggPiAtMSkge1xuXG5cdFx0XHR0aGlzLm9yaWdpbi5zcGxpY2UoaW5kZXgsIDEpO1xuXG5cdFx0XHRyZXR1cm4gW3RoaXMuY3JlYXRlT3JpZ2luQ2hhbmdlZEV2ZW50KHN0cnVjdHVyZUlkKV07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0SXRlbXMoaXRlbXM6IEFycmF5PGFueT4pOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIGl0ZW1zLm1hcCgoaXRlbTogYW55KSA9PiBuZXcgT3JpZ2luSXRlbUVudGl0eShSYW5kb21TdHJpbmdHZW5lcmF0b3IuZ2VuZXJhdGUoKSwgaXRlbSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVPcmlnaW5DaGFuZ2VkRXZlbnQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQWdncmVnYXRlRXZlbnQge1xuXHRcdHJldHVybiBuZXcgU3RydWN0dXJlT3JpZ2luQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50KHN0cnVjdHVyZUlkLCB0aGlzLm9yaWdpbik7XG5cdH1cblxuXHRwcml2YXRlIGZpbmRPcmlnaW5JdGVtKGl0ZW1JZDogc3RyaW5nKTogT3JpZ2luSXRlbUVudGl0eSB7XG5cdFx0cmV0dXJuIHRoaXMub3JpZ2luLmZpbmQoKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHkpID0+IGl0ZW0uaWQgPT09IGl0ZW1JZCk7XG5cdH1cblxuXHRwcml2YXRlIGZpbmRPcmlnaW5JdGVtSW5kZXgoaXRlbUlkOiBzdHJpbmcpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm9yaWdpbi5maW5kSW5kZXgoKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHkpID0+IGl0ZW0uaWQgPT09IGl0ZW1JZCk7XG5cdH1cblxufVxuIl19