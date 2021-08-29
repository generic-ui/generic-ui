/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { RandomStringGenerator } from '@generic-ui/hermes';
import { OriginItemEntity } from '../origin/origin-item-entity';
import { StructureSourceItemEditedAggregateEvent } from '../origin/edit/structure.source-item-edited.aggregate-event';
import { StructureOriginChangedAggregateEvent } from '../origin/structure.origin-changed.aggregate-event';
import { OriginId } from '../origin/origin-id';
export class SourceManager {
    /**
     * @param {?} formationManager
     */
    constructor(formationManager) {
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
        this.origin = [...items];
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
     * @param {?} structureId
     * @return {?}
     */
    deleteAllSelected(structureId) {
        /** @type {?} */
        const events = [];
        /** @type {?} */
        const rows = this.formationManager.getSelectedRows();
        rows.forEach((/**
         * @param {?} r
         * @return {?}
         */
        (r) => {
            events.push(...this.deleteOriginItemByItemId(new OriginId(r), structureId));
        }));
        return events;
    }
    /**
     * @param {?} payload
     * @param {?} structureId
     * @return {?}
     */
    deleteOriginItem(payload, structureId) {
        if (payload instanceof OriginId) {
            return this.deleteOriginItemByItemId(payload, structureId);
        }
        else if (Array.isArray(payload)) {
            /** @type {?} */
            const events = [];
            payload.forEach((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                events.push(...this.deleteOneOriginItem(item, structureId));
            }));
            return events;
        }
        else if (Number.isInteger(payload)) {
            return this.deleteOriginItemByIndex(payload, structureId);
        }
    }
    /**
     * @private
     * @param {?} item
     * @param {?} structureId
     * @return {?}
     */
    deleteOneOriginItem(item, structureId) {
        if (item instanceof OriginId) {
            return this.deleteOriginItemByItemId(item, structureId);
        }
        else if (Number.isInteger(item)) {
            return this.deleteOriginItemByIndex(item, structureId);
        }
        else {
            return [];
        }
    }
    /**
     * @private
     * @param {?} itemId
     * @param {?} structureId
     * @return {?}
     */
    deleteOriginItemByItemId(itemId, structureId) {
        /** @type {?} */
        const index = this.findOriginItemIndex(itemId.toString());
        return this.deleteOriginItemByIndex(index, structureId);
    }
    /**
     * @private
     * @param {?} index
     * @param {?} structureId
     * @return {?}
     */
    deleteOriginItemByIndex(index, structureId) {
        if (index > -1) {
            /** @type {?} */
            const removedElements = this.origin.splice(index, 1);
            if (removedElements.length > 0) {
                for (const element of removedElements) {
                    this.formationManager.unselectRow(element.getId().toString());
                }
                this.formationManager.calculateAllSelected(removedElements.map((/**
                 * @param {?} f
                 * @return {?}
                 */
                (f) => f.getId().toString())));
                this.formationManager.calculateAllUnselected();
            }
            return [
                this.createOriginChangedEvent(structureId)
            ];
        }
        return [];
    }
    /**
     * @private
     * @param {?} indexes
     * @param {?} structureId
     * @return {?}
     */
    deleteManyOriginItemByIndex(indexes, structureId) {
        /** @type {?} */
        const events = [];
        indexes.forEach((/**
         * @param {?} index
         * @return {?}
         */
        (index) => {
            events.push(...this.deleteOriginItemByIndex(index, structureId));
        }));
        return events;
    }
    /**
     * @private
     * @param {?} itemIds
     * @param {?} structureId
     * @return {?}
     */
    deleteManyOriginItemByItemID(itemIds, structureId) {
        /** @type {?} */
        const events = [];
        itemIds.forEach((/**
         * @param {?} itemId
         * @return {?}
         */
        (itemId) => {
            events.push(...this.deleteOriginItemByItemId(itemId, structureId));
        }));
        return events;
    }
    /**
     * @param {?} item
     * @param {?} structureId
     * @return {?}
     */
    addOriginItem(item, structureId) {
        this.origin.push(item);
        return [this.createOriginChangedEvent(structureId)];
    }
    /**
     * @return {?}
     */
    selectAll() {
        this.formationManager.selectAll(this.getEntities().map((/**
         * @param {?} e
         * @return {?}
         */
        e => e.getId().toString())));
    }
    /**
     * @return {?}
     */
    unselectAll() {
        this.formationManager.unselectAll();
    }
    /**
     * @param {?} itemId
     * @param {?} type
     * @return {?}
     */
    toggleRow(itemId, type) {
        this.formationManager.toggleRow(itemId, type, this.getEntities().map((/**
         * @param {?} e
         * @return {?}
         */
        e => e.getId().toString())));
    }
    /**
     * @return {?}
     */
    getFormation() {
        return this.formationManager;
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
    /**
     * @type {?}
     * @private
     */
    SourceManager.prototype.formationManager;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9kb21haW4vY29yZS9zb3VyY2UubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFrQixxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTNFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRWhFLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ3RILE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBRTFHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUsvQyxNQUFNLE9BQU8sYUFBYTs7OztJQWlCekIsWUFBWSxnQkFBa0M7UUFmdEMsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUV6QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBSXpCLGFBQVEsR0FBNEIsRUFBRSxDQUFDOztRQUd2QyxxQkFBZ0IsR0FBNEIsRUFBRSxDQUFDO1FBRS9DLG1CQUFjLEdBQTRCLEVBQUUsQ0FBQztRQUtwRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsT0FBZ0I7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsR0FBNEI7UUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDcEIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENB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QUFNLENBQUMsQ0FBQztJQUMzRSxDQUFDOzs7Ozs7SUFFTyxjQUFjLENBQUMsTUFBYztRQUNwQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTs7OztRQUFDLENBQUMsSUFBc0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLE1BQU0sRUFBQyxDQUFDO0lBQ3pGLENBQUM7Ozs7OztJQUVPLG1CQUFtQixDQUFDLE1BQWM7UUFDekMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLElBQXNCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxNQUFNLEVBQUMsQ0FBQztJQUM5RixDQUFDOzs7OztJQUVPLG9CQUFvQjtRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU87Ozs7O1FBQUMsQ0FBQyxHQUFxQixFQUFFLEtBQWEsRUFBRSxFQUFFO1lBQzlELEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDO0NBRUQ7Ozs7OztJQXpPQSxnQ0FBaUM7Ozs7O0lBRWpDLGdDQUFpQzs7Ozs7SUFFakMsK0JBQXdDOzs7OztJQUV4QyxpQ0FBK0M7Ozs7O0lBRy9DLHlDQUF1RDs7Ozs7SUFFdkQsdUNBQXFEOzs7OztJQUVyRCx5Q0FBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgUmFuZG9tU3RyaW5nR2VuZXJhdG9yIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vb3JpZ2luL2VkaXQvc3RydWN0dXJlLnNvdXJjZS1pdGVtLWVkaXRlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlT3JpZ2luQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vb3JpZ2luL3N0cnVjdHVyZS5vcmlnaW4tY2hhbmdlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9maWVsZCc7XG5pbXBvcnQgeyBPcmlnaW5JZCB9IGZyb20gJy4uL29yaWdpbi9vcmlnaW4taWQnO1xuaW1wb3J0IHsgRm9ybWF0aW9uTWFuYWdlciB9IGZyb20gJy4uL2Zvcm1hdGlvbi9jb3JlL2Zvcm1hdGlvbi1tYW5hZ2VyJztcbmltcG9ydCB7IFJvd1NlbGVjdFRvZ2dsZVR5cGUgfSBmcm9tICcuLi9mb3JtYXRpb24vY29yZS9yb3ctc2VsZWN0LXRvZ2dsZS10eXBlJztcblxuXG5leHBvcnQgY2xhc3MgU291cmNlTWFuYWdlciB7XG5cblx0cHJpdmF0ZSBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBmZXRjaGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBvcmlnaW46IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+O1xuXG5cdHByaXZhdGUgZW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+ID0gW107XG5cblx0Ly8gRW50aXRpZXMgYWZ0ZXIgZmlsdGVyaW5nLCBzZWFyY2hpbmdcblx0cHJpdmF0ZSBwcmVwYXJlZEVudGl0aWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiA9IFtdO1xuXG5cdHByaXZhdGUgc2xpY2VkRW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+ID0gW107XG5cblx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25NYW5hZ2VyOiBGb3JtYXRpb25NYW5hZ2VyO1xuXG5cdGNvbnN0cnVjdG9yKGZvcm1hdGlvbk1hbmFnZXI6IEZvcm1hdGlvbk1hbmFnZXIpIHtcblx0XHR0aGlzLmZvcm1hdGlvbk1hbmFnZXIgPSBmb3JtYXRpb25NYW5hZ2VyO1xuXHR9XG5cblx0aXNMb2FkaW5nKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmxvYWRpbmc7XG5cdH1cblxuXHRpc0ZldGNoZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZmV0Y2hlZDtcblx0fVxuXG5cdHNldExvYWRpbmcoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMubG9hZGluZyA9IGVuYWJsZWQ7XG5cdH1cblxuXHRzZXRFbnRpdGllcyhlbnQ6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogdm9pZCB7XG5cdFx0dGhpcy5lbnRpdGllcyA9IGVudDtcblx0XHR0aGlzLnJlY2FsY3VsYXRlUG9zaXRpb25zKCk7XG5cdH1cblxuXHRnZXRFbnRpdGllcygpOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMuZW50aXRpZXM7XG5cdH1cblxuXHRzZXRQcmVwYXJlZEVudGl0aWVzKCk6IHZvaWQge1xuXHRcdHRoaXMucHJlcGFyZWRFbnRpdGllcyA9IFsuLi50aGlzLmVudGl0aWVzXTtcblx0fVxuXG5cdGdldFByZXBhcmVkRW50aXRpZXMoKTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLnByZXBhcmVkRW50aXRpZXM7XG5cdH1cblxuXHRzZXRTbGljZWRFbnRpdGllcyhlbnQ6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KSB7XG5cdFx0dGhpcy5zbGljZWRFbnRpdGllcyA9IGVudDtcblx0fVxuXG5cdGdldFNsaWNlZEVudGl0aWVzKCk6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5zbGljZWRFbnRpdGllcztcblx0fVxuXG5cdHNldE9yaWdpbihpdGVtczogQXJyYXk8YW55PiA9IFtdLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXHRcdHRoaXMub3JpZ2luID0gdGhpcy5jb252ZXJ0SXRlbXMoaXRlbXMpO1xuXG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlT3JpZ2luQ2hhbmdlZEV2ZW50KHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHNldENvbnZlcnRlZE9yaWdpbihpdGVtczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4gPSBbXSwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblx0XHR0aGlzLm9yaWdpbiA9IFsuLi5pdGVtc107XG5cblx0XHRyZXR1cm4gdGhpcy5jcmVhdGVPcmlnaW5DaGFuZ2VkRXZlbnQoc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0Z2V0T3JpZ2luKCk6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5vcmlnaW47XG5cdH1cblxuXHRnZXRPcmlnaW5TaXplKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMub3JpZ2luLmxlbmd0aDtcblx0fVxuXG5cdC8vIGVkaXRPcmlnaW5JdGVtQnlQcm9wZXJ0eShieUZpZWxkLCB2YWx1ZTogYW55LCBmaWVsZDogRmllbGQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFnZ3JlZ2F0ZUV2ZW50IHtcblx0Ly9cblx0Ly8gfVxuXG5cdGVkaXRPcmlnaW5JdGVtKGl0ZW1JZDogc3RyaW5nLCB2YWx1ZTogYW55LCBmaWVsZDogRmllbGQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHRjb25zdCBpdGVtOiBPcmlnaW5JdGVtRW50aXR5ID0gdGhpcy5maW5kT3JpZ2luSXRlbShpdGVtSWQpLFxuXHRcdFx0aXRlbUJlZm9yZUNoYW5nZSA9IGl0ZW0uY2xvbmUoKTtcblxuXHRcdGlmIChpdGVtKSB7XG5cdFx0XHRpdGVtLnJhd0RhdGFbZmllbGQuZ2V0QWNjZXNzb3IoKV0gPSB2YWx1ZTtcblx0XHRcdGl0ZW0uYnVtcFZlcnNpb24oKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gW1xuXHRcdFx0bmV3IFN0cnVjdHVyZVNvdXJjZUl0ZW1FZGl0ZWRBZ2dyZWdhdGVFdmVudChzdHJ1Y3R1cmVJZCwgaXRlbUJlZm9yZUNoYW5nZSwgaXRlbS5jbG9uZSgpKSxcblx0XHRcdHRoaXMuY3JlYXRlT3JpZ2luQ2hhbmdlZEV2ZW50KHN0cnVjdHVyZUlkKVxuXHRcdF07XG5cdH1cblxuXHRkZWxldGVBbGxTZWxlY3RlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblx0XHRjb25zdCBldmVudHM6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4gPSBbXTtcblxuXHRcdGNvbnN0IHJvd3MgPSB0aGlzLmZvcm1hdGlvbk1hbmFnZXIuZ2V0U2VsZWN0ZWRSb3dzKCk7XG5cblx0XHRyb3dzLmZvckVhY2goKHI6IHN0cmluZykgPT4ge1xuXHRcdFx0ZXZlbnRzLnB1c2goLi4udGhpcy5kZWxldGVPcmlnaW5JdGVtQnlJdGVtSWQobmV3IE9yaWdpbklkKHIpLCBzdHJ1Y3R1cmVJZCkpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGV2ZW50cztcblx0fVxuXG5cdGRlbGV0ZU9yaWdpbkl0ZW0ocGF5bG9hZDogbnVtYmVyIHwgT3JpZ2luSWQgfCBBcnJheTxudW1iZXI+IHwgQXJyYXk8T3JpZ2luSWQ+LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdGlmIChwYXlsb2FkIGluc3RhbmNlb2YgT3JpZ2luSWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmRlbGV0ZU9yaWdpbkl0ZW1CeUl0ZW1JZChwYXlsb2FkLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHBheWxvYWQpKSB7XG5cblx0XHRcdGNvbnN0IGV2ZW50czogQXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiA9IFtdO1xuXG5cdFx0XHRwYXlsb2FkLmZvckVhY2goKGl0ZW06IG51bWJlciB8IE9yaWdpbklkKSA9PiB7XG5cdFx0XHRcdGV2ZW50cy5wdXNoKC4uLnRoaXMuZGVsZXRlT25lT3JpZ2luSXRlbShpdGVtLCBzdHJ1Y3R1cmVJZCkpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiBldmVudHM7XG5cblx0XHR9IGVsc2UgaWYgKE51bWJlci5pc0ludGVnZXIocGF5bG9hZCkpIHtcblx0XHRcdHJldHVybiB0aGlzLmRlbGV0ZU9yaWdpbkl0ZW1CeUluZGV4KHBheWxvYWQsIHN0cnVjdHVyZUlkKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGRlbGV0ZU9uZU9yaWdpbkl0ZW0oaXRlbTogbnVtYmVyIHwgT3JpZ2luSWQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXG5cdFx0aWYgKGl0ZW0gaW5zdGFuY2VvZiBPcmlnaW5JZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZGVsZXRlT3JpZ2luSXRlbUJ5SXRlbUlkKGl0ZW0sIHN0cnVjdHVyZUlkKTtcblx0XHR9IGVsc2UgaWYgKE51bWJlci5pc0ludGVnZXIoaXRlbSkpIHtcblx0XHRcdHJldHVybiB0aGlzLmRlbGV0ZU9yaWdpbkl0ZW1CeUluZGV4KGl0ZW0sIHN0cnVjdHVyZUlkKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZGVsZXRlT3JpZ2luSXRlbUJ5SXRlbUlkKGl0ZW1JZDogT3JpZ2luSWQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLmZpbmRPcmlnaW5JdGVtSW5kZXgoaXRlbUlkLnRvU3RyaW5nKCkpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZGVsZXRlT3JpZ2luSXRlbUJ5SW5kZXgoaW5kZXgsIHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHByaXZhdGUgZGVsZXRlT3JpZ2luSXRlbUJ5SW5kZXgoaW5kZXg6IG51bWJlciwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHRpZiAoaW5kZXggPiAtMSkge1xuXHRcdFx0Y29uc3QgcmVtb3ZlZEVsZW1lbnRzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiA9IHRoaXMub3JpZ2luLnNwbGljZShpbmRleCwgMSk7XG5cblx0XHRcdGlmIChyZW1vdmVkRWxlbWVudHMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgcmVtb3ZlZEVsZW1lbnRzKSB7XG5cdFx0XHRcdFx0dGhpcy5mb3JtYXRpb25NYW5hZ2VyLnVuc2VsZWN0Um93KGVsZW1lbnQuZ2V0SWQoKS50b1N0cmluZygpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmZvcm1hdGlvbk1hbmFnZXIuY2FsY3VsYXRlQWxsU2VsZWN0ZWQocmVtb3ZlZEVsZW1lbnRzLm1hcCgoZikgPT4gZi5nZXRJZCgpLnRvU3RyaW5nKCkpKTtcblx0XHRcdFx0dGhpcy5mb3JtYXRpb25NYW5hZ2VyLmNhbGN1bGF0ZUFsbFVuc2VsZWN0ZWQoKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0dGhpcy5jcmVhdGVPcmlnaW5DaGFuZ2VkRXZlbnQoc3RydWN0dXJlSWQpXG5cdFx0XHRdO1xuXHRcdH1cblxuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdHByaXZhdGUgZGVsZXRlTWFueU9yaWdpbkl0ZW1CeUluZGV4KGluZGV4ZXM6IEFycmF5PG51bWJlcj4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXG5cdFx0Y29uc3QgZXZlbnRzOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+ID0gW107XG5cblx0XHRpbmRleGVzLmZvckVhY2goKGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRcdGV2ZW50cy5wdXNoKC4uLnRoaXMuZGVsZXRlT3JpZ2luSXRlbUJ5SW5kZXgoaW5kZXgsIHN0cnVjdHVyZUlkKSk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gZXZlbnRzO1xuXHR9XG5cblx0cHJpdmF0ZSBkZWxldGVNYW55T3JpZ2luSXRlbUJ5SXRlbUlEKGl0ZW1JZHM6IEFycmF5PE9yaWdpbklkPiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHRjb25zdCBldmVudHM6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4gPSBbXTtcblxuXHRcdGl0ZW1JZHMuZm9yRWFjaCgoaXRlbUlkOiBPcmlnaW5JZCkgPT4ge1xuXHRcdFx0ZXZlbnRzLnB1c2goLi4udGhpcy5kZWxldGVPcmlnaW5JdGVtQnlJdGVtSWQoaXRlbUlkLCBzdHJ1Y3R1cmVJZCkpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGV2ZW50cztcblx0fVxuXG5cdGFkZE9yaWdpbkl0ZW0oaXRlbTogYW55LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXHRcdHRoaXMub3JpZ2luLnB1c2goaXRlbSk7XG5cdFx0cmV0dXJuIFt0aGlzLmNyZWF0ZU9yaWdpbkNoYW5nZWRFdmVudChzdHJ1Y3R1cmVJZCldO1xuXHR9XG5cblx0c2VsZWN0QWxsKCk6IHZvaWQge1xuXHRcdHRoaXMuZm9ybWF0aW9uTWFuYWdlci5zZWxlY3RBbGwodGhpcy5nZXRFbnRpdGllcygpLm1hcChlID0+IGUuZ2V0SWQoKS50b1N0cmluZygpKSk7XG5cdH1cblxuXHR1bnNlbGVjdEFsbCgpOiB2b2lkIHtcblx0XHR0aGlzLmZvcm1hdGlvbk1hbmFnZXIudW5zZWxlY3RBbGwoKTtcblx0fVxuXG5cdHRvZ2dsZVJvdyhpdGVtSWQ6IHN0cmluZywgdHlwZTogUm93U2VsZWN0VG9nZ2xlVHlwZSk6IHZvaWQge1xuXHRcdHRoaXMuZm9ybWF0aW9uTWFuYWdlci50b2dnbGVSb3coaXRlbUlkLCB0eXBlLCB0aGlzLmdldEVudGl0aWVzKCkubWFwKGUgPT4gZS5nZXRJZCgpLnRvU3RyaW5nKCkpKTtcblx0fVxuXG5cdGdldEZvcm1hdGlvbigpOiBGb3JtYXRpb25NYW5hZ2VyIHtcblx0XHRyZXR1cm4gdGhpcy5mb3JtYXRpb25NYW5hZ2VyO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0SXRlbXMoaXRlbXM6IEFycmF5PGFueT4pOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIGl0ZW1zLm1hcCgoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IE9yaWdpbkl0ZW1FbnRpdHkobmV3IE9yaWdpbklkKFJhbmRvbVN0cmluZ0dlbmVyYXRvci5nZW5lcmF0ZSgpKSwgaXRlbSwgaW5kZXgpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVPcmlnaW5DaGFuZ2VkRXZlbnQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZU9yaWdpbkNoYW5nZWRBZ2dyZWdhdGVFdmVudChzdHJ1Y3R1cmVJZCwgdGhpcy5vcmlnaW4pO1xuXHR9XG5cblx0cHJpdmF0ZSBmaW5kT3JpZ2luSXRlbShpdGVtSWQ6IHN0cmluZyk6IE9yaWdpbkl0ZW1FbnRpdHkge1xuXHRcdHJldHVybiB0aGlzLm9yaWdpbi5maW5kKChpdGVtOiBPcmlnaW5JdGVtRW50aXR5KSA9PiBpdGVtLmdldElkKCkudG9TdHJpbmcoKSA9PT0gaXRlbUlkKTtcblx0fVxuXG5cdHByaXZhdGUgZmluZE9yaWdpbkl0ZW1JbmRleChpdGVtSWQ6IHN0cmluZyk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMub3JpZ2luLmZpbmRJbmRleCgoaXRlbTogT3JpZ2luSXRlbUVudGl0eSkgPT4gaXRlbS5nZXRJZCgpLnRvU3RyaW5nKCkgPT09IGl0ZW1JZCk7XG5cdH1cblxuXHRwcml2YXRlIHJlY2FsY3VsYXRlUG9zaXRpb25zKCk6IHZvaWQge1xuXHRcdHRoaXMuZW50aXRpZXMuZm9yRWFjaCgoZW50OiBPcmlnaW5JdGVtRW50aXR5LCBpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0XHRlbnQuc2V0UG9zaXRpb24oaW5kZXgpO1xuXHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==