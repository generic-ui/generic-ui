/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
export class Entity {
    /**
     * @protected
     * @param {?} id
     */
    constructor(id) {
        this.entityId = id;
    }
    /**
     * @return {?}
     */
    getId() {
        return this.entityId;
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    equals(entity) {
        return this.entityId.equals(entity.getId());
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    Entity.prototype.entityId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL3RhY3RpY2FsL2VudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLE1BQU0sT0FBZ0IsTUFBTTs7Ozs7SUFJM0IsWUFBc0IsRUFBSztRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsS0FBSztRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxNQUFpQjtRQUN2QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Q0FFRDs7Ozs7O0lBZEEsMEJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW50aXR5SWQgfSBmcm9tICcuL2VudGl0eS1pZCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFbnRpdHk8VCBleHRlbmRzIEVudGl0eUlkPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBlbnRpdHlJZDogVDtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoaWQ6IFQpIHtcblx0XHR0aGlzLmVudGl0eUlkID0gaWQ7XG5cdH1cblxuXHRnZXRJZCgpOiBFbnRpdHlJZCB7XG5cdFx0cmV0dXJuIHRoaXMuZW50aXR5SWQ7XG5cdH1cblxuXHRlcXVhbHMoZW50aXR5OiBFbnRpdHk8VD4pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbnRpdHlJZC5lcXVhbHMoZW50aXR5LmdldElkKCkpO1xuXHR9XG5cbn1cbiJdfQ==