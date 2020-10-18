/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ItemEntity } from './item.entity';
import { OriginItemEntity } from '../../origin/origin-item-entity';
var ItemEntityFactory = /** @class */ (function () {
    function ItemEntityFactory() {
    }
    /**
     * @param {?} data
     * @return {?}
     */
    ItemEntityFactory.prototype.create = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        if (Array.isArray(data)) {
            return this.createEntities(data);
        }
        else {
            return this.createEntity(data);
        }
    };
    /**
     * @param {?} data
     * @return {?}
     */
    ItemEntityFactory.prototype.createEntities = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        return data.map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return _this.createEntity(data); }));
    };
    /**
     * @private
     * @param {?} originItem
     * @return {?}
     */
    ItemEntityFactory.prototype.createEntity = /**
     * @private
     * @param {?} originItem
     * @return {?}
     */
    function (originItem) {
        if (originItem instanceof OriginItemEntity) {
            return new ItemEntity(originItem.rawData, originItem.getPosition(), originItem.getId().toString(), originItem.getVersion());
        }
        else {
            return new ItemEntity(originItem, 0);
        }
    };
    ItemEntityFactory.decorators = [
        { type: Injectable }
    ];
    return ItemEntityFactory;
}());
export { ItemEntityFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5lbnRpdHktZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9jb3JlL2RvbWFpbi9jb3JlL2l0ZW0vaXRlbS5lbnRpdHktZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRW5FO0lBQUE7SUEwQkEsQ0FBQzs7Ozs7SUFyQkEsa0NBQU07Ozs7SUFBTixVQUFPLElBQVM7UUFFZixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDeEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2pDO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0I7SUFDRixDQUFDOzs7OztJQUVELDBDQUFjOzs7O0lBQWQsVUFBZSxJQUFnQjtRQUEvQixpQkFFQztRQURBLE9BQU8sSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFDLElBQVMsSUFBSyxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQXZCLENBQXVCLEVBQUMsQ0FBQztJQUN6RCxDQUFDOzs7Ozs7SUFFTyx3Q0FBWTs7Ozs7SUFBcEIsVUFBcUIsVUFBa0M7UUFFdEQsSUFBSSxVQUFVLFlBQVksZ0JBQWdCLEVBQUU7WUFDM0MsT0FBTyxJQUFJLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxXQUFXLEVBQUUsRUFBRSxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7U0FDNUg7YUFBTTtZQUNOLE9BQU8sSUFBSSxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0YsQ0FBQzs7Z0JBekJELFVBQVU7O0lBMEJYLHdCQUFDO0NBQUEsQUExQkQsSUEwQkM7U0F6QlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi9pdGVtLmVudGl0eSc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJdGVtRW50aXR5RmFjdG9yeSB7XG5cblx0Y3JlYXRlKGRhdGE6IGFueSk6IEl0ZW1FbnRpdHk7XG5cdGNyZWF0ZShkYXRhOiBBcnJheTxhbnk+KTogQXJyYXk8SXRlbUVudGl0eT47XG5cdGNyZWF0ZShkYXRhOiBhbnkpOiBhbnkge1xuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVudGl0aWVzKGRhdGEpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFbnRpdHkoZGF0YSk7XG5cdFx0fVxuXHR9XG5cblx0Y3JlYXRlRW50aXRpZXMoZGF0YTogQXJyYXk8YW55Pik6IEFycmF5PEl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gZGF0YS5tYXAoKGRhdGE6IGFueSkgPT4gdGhpcy5jcmVhdGVFbnRpdHkoZGF0YSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVFbnRpdHkob3JpZ2luSXRlbTogT3JpZ2luSXRlbUVudGl0eSB8IGFueSk6IEl0ZW1FbnRpdHkge1xuXG5cdFx0aWYgKG9yaWdpbkl0ZW0gaW5zdGFuY2VvZiBPcmlnaW5JdGVtRW50aXR5KSB7XG5cdFx0XHRyZXR1cm4gbmV3IEl0ZW1FbnRpdHkob3JpZ2luSXRlbS5yYXdEYXRhLCBvcmlnaW5JdGVtLmdldFBvc2l0aW9uKCksIG9yaWdpbkl0ZW0uZ2V0SWQoKS50b1N0cmluZygpLCBvcmlnaW5JdGVtLmdldFZlcnNpb24oKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBuZXcgSXRlbUVudGl0eShvcmlnaW5JdGVtLCAwKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==