/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ItemEntity } from './item.entity';
import { OriginItemEntity } from './command/origin/origin-item-entity';
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
     * @param {?} item
     * @return {?}
     */
    createEntity(item) {
        if (item instanceof OriginItemEntity) {
            return new ItemEntity(item.rawData, item.id, item.getVersion());
        }
        else {
            return new ItemEntity(item);
        }
    }
}
ItemEntityFactory.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5lbnRpdHktZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc291cmNlL2l0ZW0uZW50aXR5LWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUd2RSxNQUFNLE9BQU8saUJBQWlCOzs7OztJQUk3QixNQUFNLENBQUMsSUFBUztRQUVmLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN4QixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakM7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMvQjtJQUNGLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLElBQWdCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLElBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDO0lBQ3pELENBQUM7Ozs7OztJQUVPLFlBQVksQ0FBQyxJQUE0QjtRQUVoRCxJQUFJLElBQUksWUFBWSxnQkFBZ0IsRUFBRTtZQUNyQyxPQUFPLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztTQUNoRTthQUFNO1lBQ04sT0FBTyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1QjtJQUNGLENBQUM7OztZQXpCRCxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi9pdGVtLmVudGl0eSc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi9jb21tYW5kL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSXRlbUVudGl0eUZhY3Rvcnkge1xuXG5cdGNyZWF0ZShkYXRhOiBhbnkpOiBJdGVtRW50aXR5O1xuXHRjcmVhdGUoZGF0YTogQXJyYXk8YW55Pik6IEFycmF5PEl0ZW1FbnRpdHk+O1xuXHRjcmVhdGUoZGF0YTogYW55KTogYW55IHtcblxuXHRcdGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFbnRpdGllcyhkYXRhKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRW50aXR5KGRhdGEpO1xuXHRcdH1cblx0fVxuXG5cdGNyZWF0ZUVudGl0aWVzKGRhdGE6IEFycmF5PGFueT4pOiBBcnJheTxJdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIGRhdGEubWFwKChkYXRhOiBhbnkpID0+IHRoaXMuY3JlYXRlRW50aXR5KGRhdGEpKTtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlRW50aXR5KGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHkgfCBhbnkpOiBJdGVtRW50aXR5IHtcblxuXHRcdGlmIChpdGVtIGluc3RhbmNlb2YgT3JpZ2luSXRlbUVudGl0eSkge1xuXHRcdFx0cmV0dXJuIG5ldyBJdGVtRW50aXR5KGl0ZW0ucmF3RGF0YSwgaXRlbS5pZCwgaXRlbS5nZXRWZXJzaW9uKCkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gbmV3IEl0ZW1FbnRpdHkoaXRlbSk7XG5cdFx0fVxuXHR9XG59XG4iXX0=