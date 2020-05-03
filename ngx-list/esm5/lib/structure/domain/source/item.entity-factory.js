/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ItemEntity } from './item.entity';
import { OriginItemEntity } from './origin/origin-item-entity';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5lbnRpdHktZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc291cmNlL2l0ZW0uZW50aXR5LWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUUvRDtJQUFBO0lBMEJBLENBQUM7Ozs7O0lBckJBLGtDQUFNOzs7O0lBQU4sVUFBTyxJQUFTO1FBRWYsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3hCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQzthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQy9CO0lBQ0YsQ0FBQzs7Ozs7SUFFRCwwQ0FBYzs7OztJQUFkLFVBQWUsSUFBZ0I7UUFBL0IsaUJBRUM7UUFEQSxPQUFPLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxJQUFTLElBQUssT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUF2QixDQUF1QixFQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7O0lBRU8sd0NBQVk7Ozs7O0lBQXBCLFVBQXFCLFVBQWtDO1FBRXRELElBQUksVUFBVSxZQUFZLGdCQUFnQixFQUFFO1lBQzNDLE9BQU8sSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsV0FBVyxFQUFFLEVBQUUsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1NBQzVIO2FBQU07WUFDTixPQUFPLElBQUksVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNyQztJQUNGLENBQUM7O2dCQXpCRCxVQUFVOztJQTBCWCx3QkFBQztDQUFBLEFBMUJELElBMEJDO1NBekJZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4vaXRlbS5lbnRpdHknO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJdGVtRW50aXR5RmFjdG9yeSB7XG5cblx0Y3JlYXRlKGRhdGE6IGFueSk6IEl0ZW1FbnRpdHk7XG5cdGNyZWF0ZShkYXRhOiBBcnJheTxhbnk+KTogQXJyYXk8SXRlbUVudGl0eT47XG5cdGNyZWF0ZShkYXRhOiBhbnkpOiBhbnkge1xuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVudGl0aWVzKGRhdGEpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFbnRpdHkoZGF0YSk7XG5cdFx0fVxuXHR9XG5cblx0Y3JlYXRlRW50aXRpZXMoZGF0YTogQXJyYXk8YW55Pik6IEFycmF5PEl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gZGF0YS5tYXAoKGRhdGE6IGFueSkgPT4gdGhpcy5jcmVhdGVFbnRpdHkoZGF0YSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVFbnRpdHkob3JpZ2luSXRlbTogT3JpZ2luSXRlbUVudGl0eSB8IGFueSk6IEl0ZW1FbnRpdHkge1xuXG5cdFx0aWYgKG9yaWdpbkl0ZW0gaW5zdGFuY2VvZiBPcmlnaW5JdGVtRW50aXR5KSB7XG5cdFx0XHRyZXR1cm4gbmV3IEl0ZW1FbnRpdHkob3JpZ2luSXRlbS5yYXdEYXRhLCBvcmlnaW5JdGVtLmdldFBvc2l0aW9uKCksIG9yaWdpbkl0ZW0uZ2V0SWQoKS50b1N0cmluZygpLCBvcmlnaW5JdGVtLmdldFZlcnNpb24oKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBuZXcgSXRlbUVudGl0eShvcmlnaW5JdGVtLCAwKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==