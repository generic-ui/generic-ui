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
     * @param {?} source
     * @return {?}
     */
    ItemEntityFactory.prototype.create = /**
     * @param {?} source
     * @return {?}
     */
    function (source) {
        if (Array.isArray(source)) {
            return this.createEntities(source);
        }
        else {
            return this.createEntity(source);
        }
    };
    /**
     * @param {?} source
     * @return {?}
     */
    ItemEntityFactory.prototype.createEntities = /**
     * @param {?} source
     * @return {?}
     */
    function (source) {
        var _this = this;
        return source.map((/**
         * @param {?} source
         * @return {?}
         */
        function (source) { return _this.createEntity(source); }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5lbnRpdHktZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9jb3JlL2RvbWFpbi9jb3JlL2l0ZW0vaXRlbS5lbnRpdHktZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRW5FO0lBQUE7SUEwQkEsQ0FBQzs7Ozs7SUFyQkEsa0NBQU07Ozs7SUFBTixVQUFPLE1BQVc7UUFFakIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzFCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNuQzthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pDO0lBQ0YsQ0FBQzs7Ozs7SUFFRCwwQ0FBYzs7OztJQUFkLFVBQWUsTUFBa0I7UUFBakMsaUJBRUM7UUFEQSxPQUFPLE1BQU0sQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxNQUFXLElBQUssT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUF6QixDQUF5QixFQUFDLENBQUM7SUFDL0QsQ0FBQzs7Ozs7O0lBRU8sd0NBQVk7Ozs7O0lBQXBCLFVBQXFCLFVBQWtDO1FBRXRELElBQUksVUFBVSxZQUFZLGdCQUFnQixFQUFFO1lBQzNDLE9BQU8sSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsV0FBVyxFQUFFLEVBQUUsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1NBQzVIO2FBQU07WUFDTixPQUFPLElBQUksVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNyQztJQUNGLENBQUM7O2dCQXpCRCxVQUFVOztJQTBCWCx3QkFBQztDQUFBLEFBMUJELElBMEJDO1NBekJZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4vaXRlbS5lbnRpdHknO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSXRlbUVudGl0eUZhY3Rvcnkge1xuXG5cdGNyZWF0ZShzb3VyY2U6IGFueSk6IEl0ZW1FbnRpdHk7XG5cdGNyZWF0ZShzb3VyY2U6IEFycmF5PGFueT4pOiBBcnJheTxJdGVtRW50aXR5Pjtcblx0Y3JlYXRlKHNvdXJjZTogYW55KTogYW55IHtcblxuXHRcdGlmIChBcnJheS5pc0FycmF5KHNvdXJjZSkpIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVudGl0aWVzKHNvdXJjZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVudGl0eShzb3VyY2UpO1xuXHRcdH1cblx0fVxuXG5cdGNyZWF0ZUVudGl0aWVzKHNvdXJjZTogQXJyYXk8YW55Pik6IEFycmF5PEl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gc291cmNlLm1hcCgoc291cmNlOiBhbnkpID0+IHRoaXMuY3JlYXRlRW50aXR5KHNvdXJjZSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVFbnRpdHkob3JpZ2luSXRlbTogT3JpZ2luSXRlbUVudGl0eSB8IGFueSk6IEl0ZW1FbnRpdHkge1xuXG5cdFx0aWYgKG9yaWdpbkl0ZW0gaW5zdGFuY2VvZiBPcmlnaW5JdGVtRW50aXR5KSB7XG5cdFx0XHRyZXR1cm4gbmV3IEl0ZW1FbnRpdHkob3JpZ2luSXRlbS5yYXdEYXRhLCBvcmlnaW5JdGVtLmdldFBvc2l0aW9uKCksIG9yaWdpbkl0ZW0uZ2V0SWQoKS50b1N0cmluZygpLCBvcmlnaW5JdGVtLmdldFZlcnNpb24oKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBuZXcgSXRlbUVudGl0eShvcmlnaW5JdGVtLCAwKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==