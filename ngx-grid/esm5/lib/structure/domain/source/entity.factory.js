/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Entity } from './entity';
import { OriginItemEntity } from './command/origin/origin-item-entity';
var EntityFactory = /** @class */ (function () {
    function EntityFactory() {
    }
    /**
     * @param {?} data
     * @return {?}
     */
    EntityFactory.prototype.create = /**
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
    EntityFactory.prototype.createEntities = /**
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
     * @param {?} item
     * @return {?}
     */
    EntityFactory.prototype.createEntity = /**
     * @private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item instanceof OriginItemEntity) {
            return new Entity(item.rawData, item.id, item.getVersion());
        }
        else {
            return new Entity(item);
        }
    };
    EntityFactory.decorators = [
        { type: Injectable }
    ];
    return EntityFactory;
}());
export { EntityFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3NvdXJjZS9lbnRpdHkuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRXZFO0lBQUE7SUEwQkEsQ0FBQzs7Ozs7SUFyQkEsOEJBQU07Ozs7SUFBTixVQUFPLElBQVM7UUFFZixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDeEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2pDO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0I7SUFDRixDQUFDOzs7OztJQUVELHNDQUFjOzs7O0lBQWQsVUFBZSxJQUFnQjtRQUEvQixpQkFFQztRQURBLE9BQU8sSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFDLElBQVMsSUFBSyxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQXZCLENBQXVCLEVBQUMsQ0FBQztJQUN6RCxDQUFDOzs7Ozs7SUFFTyxvQ0FBWTs7Ozs7SUFBcEIsVUFBcUIsSUFBNEI7UUFFaEQsSUFBSSxJQUFJLFlBQVksZ0JBQWdCLEVBQUU7WUFDckMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7U0FDNUQ7YUFBTTtZQUNOLE9BQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEI7SUFDRixDQUFDOztnQkF6QkQsVUFBVTs7SUEwQlgsb0JBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQXpCWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tICcuL2VudGl0eSc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi9jb21tYW5kL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRW50aXR5RmFjdG9yeSB7XG5cblx0Y3JlYXRlKGRhdGE6IGFueSk6IEVudGl0eTtcblx0Y3JlYXRlKGRhdGE6IEFycmF5PGFueT4pOiBBcnJheTxFbnRpdHk+O1xuXHRjcmVhdGUoZGF0YTogYW55KTogYW55IHtcblxuXHRcdGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVFbnRpdGllcyhkYXRhKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRW50aXR5KGRhdGEpO1xuXHRcdH1cblx0fVxuXG5cdGNyZWF0ZUVudGl0aWVzKGRhdGE6IEFycmF5PGFueT4pOiBBcnJheTxFbnRpdHk+IHtcblx0XHRyZXR1cm4gZGF0YS5tYXAoKGRhdGE6IGFueSkgPT4gdGhpcy5jcmVhdGVFbnRpdHkoZGF0YSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVFbnRpdHkoaXRlbTogT3JpZ2luSXRlbUVudGl0eSB8IGFueSk6IEVudGl0eSB7XG5cblx0XHRpZiAoaXRlbSBpbnN0YW5jZW9mIE9yaWdpbkl0ZW1FbnRpdHkpIHtcblx0XHRcdHJldHVybiBuZXcgRW50aXR5KGl0ZW0ucmF3RGF0YSwgaXRlbS5pZCwgaXRlbS5nZXRWZXJzaW9uKCkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gbmV3IEVudGl0eShpdGVtKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==