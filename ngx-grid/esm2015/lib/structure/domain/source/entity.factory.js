/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Entity } from './entity';
import { OriginItemEntity } from './command/origin/origin-item-entity';
export class EntityFactory {
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
            return new Entity(item.rawData, item.id, item.getVersion());
        }
        else {
            return new Entity(item);
        }
    }
}
EntityFactory.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3NvdXJjZS9lbnRpdHkuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBR3ZFLE1BQU0sT0FBTyxhQUFhOzs7OztJQUl6QixNQUFNLENBQUMsSUFBUztRQUVmLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN4QixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakM7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMvQjtJQUNGLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLElBQWdCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLElBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDO0lBQ3pELENBQUM7Ozs7OztJQUVPLFlBQVksQ0FBQyxJQUE0QjtRQUVoRCxJQUFJLElBQUksWUFBWSxnQkFBZ0IsRUFBRTtZQUNyQyxPQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztTQUM1RDthQUFNO1lBQ04sT0FBTyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QjtJQUNGLENBQUM7OztZQXpCRCxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tICcuL2VudGl0eSc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi9jb21tYW5kL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRW50aXR5RmFjdG9yeSB7XG5cblx0Y3JlYXRlKGRhdGE6IGFueSk6IEVudGl0eTtcblx0Y3JlYXRlKGRhdGE6IEFycmF5PGFueT4pOiBBcnJheTxFbnRpdHk+O1xuXHRjcmVhdGUoZGF0YTogYW55KTogYW55IHtcblxuXHRcdGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFbnRpdGllcyhkYXRhKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRW50aXR5KGRhdGEpO1xuXHRcdH1cblx0fVxuXG5cdGNyZWF0ZUVudGl0aWVzKGRhdGE6IEFycmF5PGFueT4pOiBBcnJheTxFbnRpdHk+IHtcblx0XHRyZXR1cm4gZGF0YS5tYXAoKGRhdGE6IGFueSkgPT4gdGhpcy5jcmVhdGVFbnRpdHkoZGF0YSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVFbnRpdHkoaXRlbTogT3JpZ2luSXRlbUVudGl0eSB8IGFueSk6IEVudGl0eSB7XG5cblx0XHRpZiAoaXRlbSBpbnN0YW5jZW9mIE9yaWdpbkl0ZW1FbnRpdHkpIHtcblx0XHRcdHJldHVybiBuZXcgRW50aXR5KGl0ZW0ucmF3RGF0YSwgaXRlbS5pZCwgaXRlbS5nZXRWZXJzaW9uKCkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gbmV3IEVudGl0eShpdGVtKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==