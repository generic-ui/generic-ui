/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Entity } from '@generic-ui/hermes';
export class OriginItemEntity extends Entity {
    /**
     * @param {?} id
     * @param {?} rawData
     * @param {?} position
     * @param {?=} version
     */
    constructor(id, rawData, position, version = 0) {
        super(id);
        this.rawData = rawData;
        this.position = position;
        this.version = version;
    }
    /**
     * @return {?}
     */
    getData() {
        return this.rawData;
    }
    /**
     * @return {?}
     */
    getVersion() {
        return this.version;
    }
    /**
     * @return {?}
     */
    getPosition() {
        return this.position;
    }
    /**
     * @return {?}
     */
    bumpVersion() {
        this.version += 1;
    }
    /**
     * @param {?} position
     * @return {?}
     */
    setPosition(position) {
        this.position = position;
    }
    /**
     * @return {?}
     */
    clone() {
        /** @type {?} */
        const rawData = Object.assign({}, this.rawData);
        return new OriginItemEntity(this.getId(), rawData, this.version);
    }
}
if (false) {
    /** @type {?} */
    OriginItemEntity.prototype.rawData;
    /**
     * @type {?}
     * @private
     */
    OriginItemEntity.prototype.version;
    /**
     * @type {?}
     * @private
     */
    OriginItemEntity.prototype.position;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JpZ2luLWl0ZW0tZW50aXR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc291cmNlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFLNUMsTUFBTSxPQUFPLGdCQUFpQixTQUFRLE1BQWdCOzs7Ozs7O0lBUXJELFlBQVksRUFBWSxFQUNyQixPQUFZLEVBQ1osUUFBZ0IsRUFDaEIsVUFBa0IsQ0FBQztRQUNyQixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsT0FBTztRQUNOLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsV0FBVztRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFFBQWdCO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxLQUFLOztjQUVFLE9BQU8scUJBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBRTtRQUVuQyxPQUFPLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEUsQ0FBQztDQUVEOzs7SUEzQ0EsbUNBQWE7Ozs7O0lBRWIsbUNBQXdCOzs7OztJQUV4QixvQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnRpdHkgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBPcmlnaW5JZCB9IGZyb20gJy4vb3JpZ2luLWlkJztcblxuXG5leHBvcnQgY2xhc3MgT3JpZ2luSXRlbUVudGl0eSBleHRlbmRzIEVudGl0eTxPcmlnaW5JZD4ge1xuXG5cdHJhd0RhdGE6IGFueTsgLy8gdE9ET1xuXG5cdHByaXZhdGUgdmVyc2lvbjogbnVtYmVyO1xuXG5cdHByaXZhdGUgcG9zaXRpb246IG51bWJlcjtcblxuXHRjb25zdHJ1Y3RvcihpZDogT3JpZ2luSWQsXG5cdFx0XHRcdHJhd0RhdGE6IGFueSxcblx0XHRcdFx0cG9zaXRpb246IG51bWJlcixcblx0XHRcdFx0dmVyc2lvbjogbnVtYmVyID0gMCkge1xuXHRcdHN1cGVyKGlkKTtcblx0XHR0aGlzLnJhd0RhdGEgPSByYXdEYXRhO1xuXHRcdHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcblx0XHR0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuXHR9XG5cblx0Z2V0RGF0YSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLnJhd0RhdGE7XG5cdH1cblxuXHRnZXRWZXJzaW9uKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMudmVyc2lvbjtcblx0fVxuXG5cdGdldFBvc2l0aW9uKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMucG9zaXRpb247XG5cdH1cblxuXHRidW1wVmVyc2lvbigpOiB2b2lkIHtcblx0XHR0aGlzLnZlcnNpb24gKz0gMTtcblx0fVxuXG5cdHNldFBvc2l0aW9uKHBvc2l0aW9uOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG5cdH1cblxuXHRjbG9uZSgpOiBPcmlnaW5JdGVtRW50aXR5IHtcblxuXHRcdGNvbnN0IHJhd0RhdGEgPSB7IC4uLnRoaXMucmF3RGF0YSB9O1xuXG5cdFx0cmV0dXJuIG5ldyBPcmlnaW5JdGVtRW50aXR5KHRoaXMuZ2V0SWQoKSwgcmF3RGF0YSwgdGhpcy52ZXJzaW9uKTtcblx0fVxuXG59XG4iXX0=