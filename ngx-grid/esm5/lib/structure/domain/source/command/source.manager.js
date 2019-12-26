/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { RandomStringGenerator } from '@generic-ui/hermes';
import { OriginItemEntity } from './origin/origin-item-entity';
import { StructureSourceItemEditedAggregateEvent } from './origin/edit/structure.source-item-edited.aggregate-event';
import { StructureOriginChangedAggregateEvent } from './origin/structure.origin-changed.aggregate-event';
var SourceManager = /** @class */ (function () {
    function SourceManager() {
        this.loading = false;
        this.fetched = false;
        this.entities = [];
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
         * @return {?}
         */
        function (item) { return new OriginItemEntity(RandomStringGenerator.generate(), item); }));
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
        function (item) { return item.id === itemId; }));
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
        function (item) { return item.id === itemId; }));
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
    SourceManager.prototype.slicedEntities;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLm1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3NvdXJjZS9jb21tYW5kL3NvdXJjZS5tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWtCLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFHL0QsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDckgsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFHekc7SUFBQTtRQUVTLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFFekIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUl6QixhQUFRLEdBQTRCLEVBQUUsQ0FBQztRQUV2QyxtQkFBYyxHQUE0QixFQUFFLENBQUM7SUFvR3RELENBQUM7Ozs7SUFsR0EsaUNBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxpQ0FBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxrQ0FBVTs7OztJQUFWLFVBQVcsT0FBZ0I7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxtQ0FBVzs7OztJQUFYLFVBQVksR0FBNEI7UUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELG1DQUFXOzs7SUFBWDtRQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELHlDQUFpQjs7OztJQUFqQixVQUFrQixHQUE0QjtRQUM3QyxJQUFJLENBQUMsY0FBYyxHQUFHLEdB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VUFBNEIsTUFBYztRQUN6QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsSUFBc0IsSUFBSyxPQUFBLElBQUksQ0FBQyxFQUFFLEtBQUssTUFBTSxFQUFsQixDQUFrQixFQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVGLG9CQUFDO0FBQUQsQ0FBQyxBQTlHRCxJQThHQzs7Ozs7OztJQTVHQSxnQ0FBaUM7Ozs7O0lBRWpDLGdDQUFpQzs7Ozs7SUFFakMsK0JBQXdDOzs7OztJQUV4QyxpQ0FBK0M7Ozs7O0lBRS9DLHVDQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBSYW5kb21TdHJpbmdHZW5lcmF0b3IgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZGF0YS10eXBlL2ZpZWxkJztcbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZUl0ZW1FZGl0ZWRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vb3JpZ2luL2VkaXQvc3RydWN0dXJlLnNvdXJjZS1pdGVtLWVkaXRlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlT3JpZ2luQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi9vcmlnaW4vc3RydWN0dXJlLm9yaWdpbi1jaGFuZ2VkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIFNvdXJjZU1hbmFnZXIge1xuXG5cdHByaXZhdGUgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgZmV0Y2hlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgb3JpZ2luOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PjtcblxuXHRwcml2YXRlIGVudGl0aWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiA9IFtdO1xuXG5cdHByaXZhdGUgc2xpY2VkRW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+ID0gW107XG5cblx0aXNMb2FkaW5nKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmxvYWRpbmc7XG5cdH1cblxuXHRpc0ZldGNoZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZmV0Y2hlZDtcblx0fVxuXG5cdHNldExvYWRpbmcoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMubG9hZGluZyA9IGVuYWJsZWQ7XG5cdH1cblxuXHRzZXRFbnRpdGllcyhlbnQ6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogdm9pZCB7XG5cdFx0dGhpcy5lbnRpdGllcyA9IGVudDtcblx0fVxuXG5cdGdldEVudGl0aWVzKCk6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5lbnRpdGllcztcblx0fVxuXG5cdHNldFNsaWNlZEVudGl0aWVzKGVudDogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pIHtcblx0XHR0aGlzLnNsaWNlZEVudGl0aWVzID0gZW50O1xuXHR9XG5cblx0Z2V0U2xpY2VkRW50aXRpZXMoKTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLnNsaWNlZEVudGl0aWVzO1xuXHR9XG5cblx0c2V0T3JpZ2luKGl0ZW1zOiBBcnJheTxhbnk+ID0gW10sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFnZ3JlZ2F0ZUV2ZW50IHtcblx0XHR0aGlzLm9yaWdpbiA9IHRoaXMuY29udmVydEl0ZW1zKGl0ZW1zKTtcblxuXHRcdHJldHVybiB0aGlzLmNyZWF0ZU9yaWdpbkNoYW5nZWRFdmVudChzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRzZXRDb252ZXJ0ZWRPcmlnaW4oaXRlbXM6IEFycmF5PGFueT4gPSBbXSwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogQWdncmVnYXRlRXZlbnQge1xuXHRcdHRoaXMub3JpZ2luID0gaXRlbXM7XG5cblx0XHRyZXR1cm4gdGhpcy5jcmVhdGVPcmlnaW5DaGFuZ2VkRXZlbnQoc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0Z2V0T3JpZ2luKCk6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5vcmlnaW47XG5cdH1cblxuXHRnZXRPcmlnaW5TaXplKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMub3JpZ2luLmxlbmd0aDtcblx0fVxuXG5cdC8vIGVkaXRPcmlnaW5JdGVtQnlQcm9wZXJ0eShieUZpZWxkLCB2YWx1ZTogYW55LCBmaWVsZDogRmllbGQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFnZ3JlZ2F0ZUV2ZW50IHtcblx0Ly9cblx0Ly8gfVxuXG5cdGVkaXRPcmlnaW5JdGVtKGl0ZW1JZDogc3RyaW5nLCB2YWx1ZTogYW55LCBmaWVsZDogRmllbGQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IFJlYWRvbmx5QXJyYXk8QWdncmVnYXRlRXZlbnQ+IHtcblxuXHRcdGNvbnN0IGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHkgPSB0aGlzLmZpbmRPcmlnaW5JdGVtKGl0ZW1JZCksXG5cdFx0XHRpdGVtQmVmb3JlQ2hhbmdlID0gaXRlbS5jbG9uZSgpO1xuXG5cdFx0aWYgKGl0ZW0pIHtcblx0XHRcdGl0ZW0ucmF3RGF0YVtmaWVsZC5nZXRBY2Nlc3NvcigpXSA9IHZhbHVlO1xuXHRcdFx0aXRlbS5idW1wVmVyc2lvbigpO1xuXHRcdH1cblxuXHRcdHJldHVybiBbXG5cdFx0XHRuZXcgU3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEFnZ3JlZ2F0ZUV2ZW50KHN0cnVjdHVyZUlkLCBpdGVtQmVmb3JlQ2hhbmdlLCBpdGVtLmNsb25lKCkpLFxuXHRcdFx0dGhpcy5jcmVhdGVPcmlnaW5DaGFuZ2VkRXZlbnQoc3RydWN0dXJlSWQpXG5cdFx0XTtcblx0fVxuXG5cdHJlbW92ZU9yaWdpbkl0ZW0oaXRlbUlkOiBzdHJpbmcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PiB7XG5cblx0XHRjb25zdCBpbmRleCA9IHRoaXMuZmluZE9yaWdpbkl0ZW1JbmRleChpdGVtSWQpO1xuXG5cdFx0aWYgKGluZGV4ID4gLTEpIHtcblxuXHRcdFx0dGhpcy5vcmlnaW4uc3BsaWNlKGluZGV4LCAxKTtcblxuXHRcdFx0cmV0dXJuIFt0aGlzLmNyZWF0ZU9yaWdpbkNoYW5nZWRFdmVudChzdHJ1Y3R1cmVJZCldO1xuXHRcdH1cblxuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdHByaXZhdGUgY29udmVydEl0ZW1zKGl0ZW1zOiBBcnJheTxhbnk+KTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiBpdGVtcy5tYXAoKGl0ZW06IGFueSkgPT4gbmV3IE9yaWdpbkl0ZW1FbnRpdHkoUmFuZG9tU3RyaW5nR2VuZXJhdG9yLmdlbmVyYXRlKCksIGl0ZW0pKTtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlT3JpZ2luQ2hhbmdlZEV2ZW50KHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFnZ3JlZ2F0ZUV2ZW50IHtcblx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZU9yaWdpbkNoYW5nZWRBZ2dyZWdhdGVFdmVudChzdHJ1Y3R1cmVJZCwgdGhpcy5vcmlnaW4pO1xuXHR9XG5cblx0cHJpdmF0ZSBmaW5kT3JpZ2luSXRlbShpdGVtSWQ6IHN0cmluZyk6IE9yaWdpbkl0ZW1FbnRpdHkge1xuXHRcdHJldHVybiB0aGlzLm9yaWdpbi5maW5kKChpdGVtOiBPcmlnaW5JdGVtRW50aXR5KSA9PiBpdGVtLmlkID09PSBpdGVtSWQpO1xuXHR9XG5cblx0cHJpdmF0ZSBmaW5kT3JpZ2luSXRlbUluZGV4KGl0ZW1JZDogc3RyaW5nKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5vcmlnaW4uZmluZEluZGV4KChpdGVtOiBPcmlnaW5JdGVtRW50aXR5KSA9PiBpdGVtLmlkID09PSBpdGVtSWQpO1xuXHR9XG5cbn1cbiJdfQ==