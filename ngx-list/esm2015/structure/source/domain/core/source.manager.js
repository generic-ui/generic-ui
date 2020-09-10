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
        let events = [];
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
            let events = [];
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
                for (let element of removedElements) {
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
        let events = [];
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
        let events = [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvZG9tYWluL2NvcmUvc291cmNlLm1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBa0IscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUN0SCxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUUxRyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFLL0MsTUFBTSxPQUFPLGFBQWE7Ozs7SUFpQnpCLFlBQVksZ0JBQWtDO1FBZnRDLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFFekIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUl6QixhQUFRLEdBQTRCLEVBQUUsQ0FBQzs7UUFHdkMscUJBQWdCLEdBQTRCLEVBQUUsQ0FBQztRQUUvQyxtQkFBYyxHQUE0QixFQUFFLENBQUM7UUFLcEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO0lBQzFDLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLE9BQWdCO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLEdBQTRCO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lB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QUFDLENBQUM7SUFDM0UsQ0FBQzs7Ozs7O0lBRU8sY0FBYyxDQUFDLE1BQWM7UUFDcEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7Ozs7UUFBQyxDQUFDLElBQXNCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxNQUFNLEVBQUMsQ0FBQztJQUN6RixDQUFDOzs7Ozs7SUFFTyxtQkFBbUIsQ0FBQyxNQUFjO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxJQUFzQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssTUFBTSxFQUFDLENBQUM7SUFDOUYsQ0FBQzs7Ozs7SUFFTyxvQkFBb0I7UUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7OztRQUFDLENBQUMsR0FBcUIsRUFBRSxLQUFhLEVBQUUsRUFBRTtZQUM5RCxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQztDQUVEOzs7Ozs7SUF6T0EsZ0NBQWlDOzs7OztJQUVqQyxnQ0FBaUM7Ozs7O0lBRWpDLCtCQUF3Qzs7Ozs7SUFFeEMsaUNBQStDOzs7OztJQUcvQyx5Q0FBdUQ7Ozs7O0lBRXZELHVDQUFxRDs7Ozs7SUFFckQseUNBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQsIFJhbmRvbVN0cmluZ0dlbmVyYXRvciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZUl0ZW1FZGl0ZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uL29yaWdpbi9lZGl0L3N0cnVjdHVyZS5zb3VyY2UtaXRlbS1lZGl0ZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZU9yaWdpbkNoYW5nZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uL29yaWdpbi9zdHJ1Y3R1cmUub3JpZ2luLWNoYW5nZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvZG9tYWluL2NvcmUvZmllbGQvZmllbGQnO1xuaW1wb3J0IHsgT3JpZ2luSWQgfSBmcm9tICcuLi9vcmlnaW4vb3JpZ2luLWlkJztcbmltcG9ydCB7IEZvcm1hdGlvbk1hbmFnZXIgfSBmcm9tICcuLi9mb3JtYXRpb24vY29yZS9mb3JtYXRpb24tbWFuYWdlcic7XG5pbXBvcnQgeyBSb3dTZWxlY3RUb2dnbGVUeXBlIH0gZnJvbSAnLi4vZm9ybWF0aW9uL2NvcmUvcm93LXNlbGVjdC10b2dnbGUtdHlwZSc7XG5cblxuZXhwb3J0IGNsYXNzIFNvdXJjZU1hbmFnZXIge1xuXG5cdHByaXZhdGUgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgZmV0Y2hlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgb3JpZ2luOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PjtcblxuXHRwcml2YXRlIGVudGl0aWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiA9IFtdO1xuXG5cdC8vIEVudGl0aWVzIGFmdGVyIGZpbHRlcmluZywgc2VhcmNoaW5nXG5cdHByaXZhdGUgcHJlcGFyZWRFbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4gPSBbXTtcblxuXHRwcml2YXRlIHNsaWNlZEVudGl0aWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiA9IFtdO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uTWFuYWdlcjogRm9ybWF0aW9uTWFuYWdlcjtcblxuXHRjb25zdHJ1Y3Rvcihmb3JtYXRpb25NYW5hZ2VyOiBGb3JtYXRpb25NYW5hZ2VyKSB7XG5cdFx0dGhpcy5mb3JtYXRpb25NYW5hZ2VyID0gZm9ybWF0aW9uTWFuYWdlcjtcblx0fVxuXG5cdGlzTG9hZGluZygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5sb2FkaW5nO1xuXHR9XG5cblx0aXNGZXRjaGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmZldGNoZWQ7XG5cdH1cblxuXHRzZXRMb2FkaW5nKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmxvYWRpbmcgPSBlbmFibGVkO1xuXHR9XG5cblx0c2V0RW50aXRpZXMoZW50OiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IHZvaWQge1xuXHRcdHRoaXMuZW50aXRpZXMgPSBlbnQ7XG5cdFx0dGhpcy5yZWNhbGN1bGF0ZVBvc2l0aW9ucygpO1xuXHR9XG5cblx0Z2V0RW50aXRpZXMoKTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLmVudGl0aWVzO1xuXHR9XG5cblx0c2V0UHJlcGFyZWRFbnRpdGllcygpOiB2b2lkIHtcblx0XHR0aGlzLnByZXBhcmVkRW50aXRpZXMgPSBbLi4udGhpcy5lbnRpdGllc107XG5cdH1cblxuXHRnZXRQcmVwYXJlZEVudGl0aWVzKCk6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5wcmVwYXJlZEVudGl0aWVzO1xuXHR9XG5cblx0c2V0U2xpY2VkRW50aXRpZXMoZW50OiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pikge1xuXHRcdHRoaXMuc2xpY2VkRW50aXRpZXMgPSBlbnQ7XG5cdH1cblxuXHRnZXRTbGljZWRFbnRpdGllcygpOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMuc2xpY2VkRW50aXRpZXM7XG5cdH1cblxuXHRzZXRPcmlnaW4oaXRlbXM6IEFycmF5PGFueT4gPSBbXSwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblx0XHR0aGlzLm9yaWdpbiA9IHRoaXMuY29udmVydEl0ZW1zKGl0ZW1zKTtcblxuXHRcdHJldHVybiB0aGlzLmNyZWF0ZU9yaWdpbkNoYW5nZWRFdmVudChzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRzZXRDb252ZXJ0ZWRPcmlnaW4oaXRlbXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+ID0gW10sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cdFx0dGhpcy5vcmlnaW4gPSBbLi4uaXRlbXNdO1xuXG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlT3JpZ2luQ2hhbmdlZEV2ZW50KHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdGdldE9yaWdpbigpOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMub3JpZ2luO1xuXHR9XG5cblx0Z2V0T3JpZ2luU2l6ZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm9yaWdpbi5sZW5ndGg7XG5cdH1cblxuXHQvLyBlZGl0T3JpZ2luSXRlbUJ5UHJvcGVydHkoYnlGaWVsZCwgdmFsdWU6IGFueSwgZmllbGQ6IEZpZWxkLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBBZ2dyZWdhdGVFdmVudCB7XG5cdC8vXG5cdC8vIH1cblxuXHRlZGl0T3JpZ2luSXRlbShpdGVtSWQ6IHN0cmluZywgdmFsdWU6IGFueSwgZmllbGQ6IEZpZWxkLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXG5cdFx0Y29uc3QgaXRlbTogT3JpZ2luSXRlbUVudGl0eSA9IHRoaXMuZmluZE9yaWdpbkl0ZW0oaXRlbUlkKSxcblx0XHRcdGl0ZW1CZWZvcmVDaGFuZ2UgPSBpdGVtLmNsb25lKCk7XG5cblx0XHRpZiAoaXRlbSkge1xuXHRcdFx0aXRlbS5yYXdEYXRhW2ZpZWxkLmdldEFjY2Vzc29yKCldID0gdmFsdWU7XG5cdFx0XHRpdGVtLmJ1bXBWZXJzaW9uKCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFtcblx0XHRcdG5ldyBTdHJ1Y3R1cmVTb3VyY2VJdGVtRWRpdGVkQWdncmVnYXRlRXZlbnQoc3RydWN0dXJlSWQsIGl0ZW1CZWZvcmVDaGFuZ2UsIGl0ZW0uY2xvbmUoKSksXG5cdFx0XHR0aGlzLmNyZWF0ZU9yaWdpbkNoYW5nZWRFdmVudChzdHJ1Y3R1cmVJZClcblx0XHRdO1xuXHR9XG5cblx0ZGVsZXRlQWxsU2VsZWN0ZWQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cdFx0bGV0IGV2ZW50czogQXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiA9IFtdO1xuXG5cdFx0Y29uc3Qgcm93cyA9IHRoaXMuZm9ybWF0aW9uTWFuYWdlci5nZXRTZWxlY3RlZFJvd3MoKTtcblxuXHRcdHJvd3MuZm9yRWFjaCgocjogc3RyaW5nKSA9PiB7XG5cdFx0XHRldmVudHMucHVzaCguLi50aGlzLmRlbGV0ZU9yaWdpbkl0ZW1CeUl0ZW1JZChuZXcgT3JpZ2luSWQociksIHN0cnVjdHVyZUlkKSk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gZXZlbnRzO1xuXHR9XG5cblx0ZGVsZXRlT3JpZ2luSXRlbShwYXlsb2FkOiBudW1iZXIgfCBPcmlnaW5JZCB8IEFycmF5PG51bWJlcj4gfCBBcnJheTxPcmlnaW5JZD4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXG5cdFx0aWYgKHBheWxvYWQgaW5zdGFuY2VvZiBPcmlnaW5JZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZGVsZXRlT3JpZ2luSXRlbUJ5SXRlbUlkKHBheWxvYWQsIHN0cnVjdHVyZUlkKTtcblx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocGF5bG9hZCkpIHtcblxuXHRcdFx0bGV0IGV2ZW50czogQXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiA9IFtdO1xuXG5cdFx0XHRwYXlsb2FkLmZvckVhY2goKGl0ZW06IG51bWJlciB8IE9yaWdpbklkKSA9PiB7XG5cdFx0XHRcdGV2ZW50cy5wdXNoKC4uLnRoaXMuZGVsZXRlT25lT3JpZ2luSXRlbShpdGVtLCBzdHJ1Y3R1cmVJZCkpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiBldmVudHM7XG5cblx0XHR9IGVsc2UgaWYgKE51bWJlci5pc0ludGVnZXIocGF5bG9hZCkpIHtcblx0XHRcdHJldHVybiB0aGlzLmRlbGV0ZU9yaWdpbkl0ZW1CeUluZGV4KHBheWxvYWQsIHN0cnVjdHVyZUlkKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGRlbGV0ZU9uZU9yaWdpbkl0ZW0oaXRlbTogbnVtYmVyIHwgT3JpZ2luSWQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXG5cdFx0aWYgKGl0ZW0gaW5zdGFuY2VvZiBPcmlnaW5JZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZGVsZXRlT3JpZ2luSXRlbUJ5SXRlbUlkKGl0ZW0sIHN0cnVjdHVyZUlkKTtcblx0XHR9IGVsc2UgaWYgKE51bWJlci5pc0ludGVnZXIoaXRlbSkpIHtcblx0XHRcdHJldHVybiB0aGlzLmRlbGV0ZU9yaWdpbkl0ZW1CeUluZGV4KGl0ZW0sIHN0cnVjdHVyZUlkKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZGVsZXRlT3JpZ2luSXRlbUJ5SXRlbUlkKGl0ZW1JZDogT3JpZ2luSWQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLmZpbmRPcmlnaW5JdGVtSW5kZXgoaXRlbUlkLnRvU3RyaW5nKCkpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZGVsZXRlT3JpZ2luSXRlbUJ5SW5kZXgoaW5kZXgsIHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHByaXZhdGUgZGVsZXRlT3JpZ2luSXRlbUJ5SW5kZXgoaW5kZXg6IG51bWJlciwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiB7XG5cblx0XHRpZiAoaW5kZXggPiAtMSkge1xuXHRcdFx0Y29uc3QgcmVtb3ZlZEVsZW1lbnRzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiA9IHRoaXMub3JpZ2luLnNwbGljZShpbmRleCwgMSk7XG5cblx0XHRcdGlmIChyZW1vdmVkRWxlbWVudHMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRmb3IgKGxldCBlbGVtZW50IG9mIHJlbW92ZWRFbGVtZW50cykge1xuXHRcdFx0XHRcdHRoaXMuZm9ybWF0aW9uTWFuYWdlci51bnNlbGVjdFJvdyhlbGVtZW50LmdldElkKCkudG9TdHJpbmcoKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5mb3JtYXRpb25NYW5hZ2VyLmNhbGN1bGF0ZUFsbFNlbGVjdGVkKHJlbW92ZWRFbGVtZW50cy5tYXAoKGYpID0+IGYuZ2V0SWQoKS50b1N0cmluZygpKSk7XG5cdFx0XHRcdHRoaXMuZm9ybWF0aW9uTWFuYWdlci5jYWxjdWxhdGVBbGxVbnNlbGVjdGVkKCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBbXG5cdFx0XHRcdHRoaXMuY3JlYXRlT3JpZ2luQ2hhbmdlZEV2ZW50KHN0cnVjdHVyZUlkKVxuXHRcdFx0XTtcblx0XHR9XG5cblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRwcml2YXRlIGRlbGV0ZU1hbnlPcmlnaW5JdGVtQnlJbmRleChpbmRleGVzOiBBcnJheTxudW1iZXI+LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdGxldCBldmVudHM6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4gPSBbXTtcblxuXHRcdGluZGV4ZXMuZm9yRWFjaCgoaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdFx0ZXZlbnRzLnB1c2goLi4udGhpcy5kZWxldGVPcmlnaW5JdGVtQnlJbmRleChpbmRleCwgc3RydWN0dXJlSWQpKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBldmVudHM7XG5cdH1cblxuXHRwcml2YXRlIGRlbGV0ZU1hbnlPcmlnaW5JdGVtQnlJdGVtSUQoaXRlbUlkczogQXJyYXk8T3JpZ2luSWQ+LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxTdHJ1Y3R1cmVJZD4+IHtcblxuXHRcdGxldCBldmVudHM6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4gPSBbXTtcblxuXHRcdGl0ZW1JZHMuZm9yRWFjaCgoaXRlbUlkOiBPcmlnaW5JZCkgPT4ge1xuXHRcdFx0ZXZlbnRzLnB1c2goLi4udGhpcy5kZWxldGVPcmlnaW5JdGVtQnlJdGVtSWQoaXRlbUlkLCBzdHJ1Y3R1cmVJZCkpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGV2ZW50cztcblx0fVxuXG5cdGFkZE9yaWdpbkl0ZW0oaXRlbTogYW55LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXHRcdHRoaXMub3JpZ2luLnB1c2goaXRlbSk7XG5cdFx0cmV0dXJuIFt0aGlzLmNyZWF0ZU9yaWdpbkNoYW5nZWRFdmVudChzdHJ1Y3R1cmVJZCldO1xuXHR9XG5cblx0c2VsZWN0QWxsKCk6IHZvaWQge1xuXHRcdHRoaXMuZm9ybWF0aW9uTWFuYWdlci5zZWxlY3RBbGwodGhpcy5nZXRFbnRpdGllcygpLm1hcChlID0+IGUuZ2V0SWQoKS50b1N0cmluZygpKSk7XG5cdH1cblxuXHR1bnNlbGVjdEFsbCgpOiB2b2lkIHtcblx0XHR0aGlzLmZvcm1hdGlvbk1hbmFnZXIudW5zZWxlY3RBbGwoKTtcblx0fVxuXG5cdHRvZ2dsZVJvdyhpdGVtSWQ6IHN0cmluZywgdHlwZTogUm93U2VsZWN0VG9nZ2xlVHlwZSk6IHZvaWQge1xuXHRcdHRoaXMuZm9ybWF0aW9uTWFuYWdlci50b2dnbGVSb3coaXRlbUlkLCB0eXBlLCB0aGlzLmdldEVudGl0aWVzKCkubWFwKGUgPT4gZS5nZXRJZCgpLnRvU3RyaW5nKCkpKTtcblx0fVxuXG5cdGdldEZvcm1hdGlvbigpOiBGb3JtYXRpb25NYW5hZ2VyIHtcblx0XHRyZXR1cm4gdGhpcy5mb3JtYXRpb25NYW5hZ2VyO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0SXRlbXMoaXRlbXM6IEFycmF5PGFueT4pOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIGl0ZW1zLm1hcCgoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IE9yaWdpbkl0ZW1FbnRpdHkobmV3IE9yaWdpbklkKFJhbmRvbVN0cmluZ0dlbmVyYXRvci5nZW5lcmF0ZSgpKSwgaXRlbSwgaW5kZXgpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVPcmlnaW5DaGFuZ2VkRXZlbnQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZU9yaWdpbkNoYW5nZWRBZ2dyZWdhdGVFdmVudChzdHJ1Y3R1cmVJZCwgdGhpcy5vcmlnaW4pO1xuXHR9XG5cblx0cHJpdmF0ZSBmaW5kT3JpZ2luSXRlbShpdGVtSWQ6IHN0cmluZyk6IE9yaWdpbkl0ZW1FbnRpdHkge1xuXHRcdHJldHVybiB0aGlzLm9yaWdpbi5maW5kKChpdGVtOiBPcmlnaW5JdGVtRW50aXR5KSA9PiBpdGVtLmdldElkKCkudG9TdHJpbmcoKSA9PT0gaXRlbUlkKTtcblx0fVxuXG5cdHByaXZhdGUgZmluZE9yaWdpbkl0ZW1JbmRleChpdGVtSWQ6IHN0cmluZyk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMub3JpZ2luLmZpbmRJbmRleCgoaXRlbTogT3JpZ2luSXRlbUVudGl0eSkgPT4gaXRlbS5nZXRJZCgpLnRvU3RyaW5nKCkgPT09IGl0ZW1JZCk7XG5cdH1cblxuXHRwcml2YXRlIHJlY2FsY3VsYXRlUG9zaXRpb25zKCk6IHZvaWQge1xuXHRcdHRoaXMuZW50aXRpZXMuZm9yRWFjaCgoZW50OiBPcmlnaW5JdGVtRW50aXR5LCBpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0XHRlbnQuc2V0UG9zaXRpb24oaW5kZXgpO1xuXHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==