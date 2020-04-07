/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ItemEntity } from './item.entity';
import { OriginItemEntity } from './origin/origin-item-entity';
export class ItemEntityFactory {
    /**
     * @param {?} data
     * @return {?}
     */
    create(data) {
        if (Array.isArray(data)) {
            return this.createEntities(data);
        }
        else {
            return this.createEntity(data);
        }
    }
    /**
     * @param {?} data
     * @return {?}
     */
    createEntities(data) {
        return data.map((/**
         * @param {?} data
         * @return {?}
         */
        (data) => this.createEntity(data)));
    }
    /**
     * @private
     * @param {?} originItem
     * @return {?}
     */
    createEntity(originItem) {
        if (originItem instanceof OriginItemEntity) {
            return new ItemEntity(originItem.rawData, originItem.getPosition(), originItem.getId().toString(), originItem.getVersion());
        }
        else {
            return new ItemEntity(originItem, 0);
        }
    }
}
ItemEntityFactory.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5lbnRpdHktZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc291cmNlL2l0ZW0uZW50aXR5LWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUcvRCxNQUFNLE9BQU8saUJBQWlCOzs7OztJQUk3QixNQUFNLENBQUMsSUFBUztRQUVmLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN4QixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakM7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMvQjtJQUNGLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLElBQWdCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLElBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDO0lBQ3pELENBQUM7Ozs7OztJQUVPLFlBQVksQ0FBQyxVQUFrQztRQUV0RCxJQUFJLFVBQVUsWUFBWSxnQkFBZ0IsRUFBRTtZQUMzQyxPQUFPLElBQUksVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLFdBQVcsRUFBRSxFQUFFLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztTQUM1SDthQUFNO1lBQ04sT0FBTyxJQUFJLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDckM7SUFDRixDQUFDOzs7WUF6QkQsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4vaXRlbS5lbnRpdHknO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJdGVtRW50aXR5RmFjdG9yeSB7XG5cblx0Y3JlYXRlKGRhdGE6IGFueSk6IEl0ZW1FbnRpdHk7XG5cdGNyZWF0ZShkYXRhOiBBcnJheTxhbnk+KTogQXJyYXk8SXRlbUVudGl0eT47XG5cdGNyZWF0ZShkYXRhOiBhbnkpOiBhbnkge1xuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUVudGl0aWVzKGRhdGEpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFbnRpdHkoZGF0YSk7XG5cdFx0fVxuXHR9XG5cblx0Y3JlYXRlRW50aXRpZXMoZGF0YTogQXJyYXk8YW55Pik6IEFycmF5PEl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gZGF0YS5tYXAoKGRhdGE6IGFueSkgPT4gdGhpcy5jcmVhdGVFbnRpdHkoZGF0YSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVFbnRpdHkob3JpZ2luSXRlbTogT3JpZ2luSXRlbUVudGl0eSB8IGFueSk6IEl0ZW1FbnRpdHkge1xuXG5cdFx0aWYgKG9yaWdpbkl0ZW0gaW5zdGFuY2VvZiBPcmlnaW5JdGVtRW50aXR5KSB7XG5cdFx0XHRyZXR1cm4gbmV3IEl0ZW1FbnRpdHkob3JpZ2luSXRlbS5yYXdEYXRhLCBvcmlnaW5JdGVtLmdldFBvc2l0aW9uKCksIG9yaWdpbkl0ZW0uZ2V0SWQoKS50b1N0cmluZygpLCBvcmlnaW5JdGVtLmdldFZlcnNpb24oKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBuZXcgSXRlbUVudGl0eShvcmlnaW5JdGVtLCAwKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==