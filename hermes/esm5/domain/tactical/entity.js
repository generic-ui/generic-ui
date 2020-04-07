/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
var /**
 * @abstract
 * @template T
 */
Entity = /** @class */ (function () {
    function Entity(id) {
        this.entityId = id;
    }
    /**
     * @return {?}
     */
    Entity.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.entityId;
    };
    /**
     * @param {?} entity
     * @return {?}
     */
    Entity.prototype.equals = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        return this.entityId.equals(entity.getId());
    };
    return Entity;
}());
/**
 * @abstract
 * @template T
 */
export { Entity };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Entity.prototype.entityId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL3RhY3RpY2FsL2VudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBOzs7OztJQUlDLGdCQUFzQixFQUFLO1FBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxzQkFBSzs7O0lBQUw7UUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCx1QkFBTTs7OztJQUFOLFVBQU8sTUFBaUI7UUFDdkIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUYsYUFBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7Ozs7Ozs7Ozs7O0lBZEEsMEJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW50aXR5SWQgfSBmcm9tICcuL2VudGl0eS1pZCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFbnRpdHk8VCBleHRlbmRzIEVudGl0eUlkPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBlbnRpdHlJZDogVDtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoaWQ6IFQpIHtcblx0XHR0aGlzLmVudGl0eUlkID0gaWQ7XG5cdH1cblxuXHRnZXRJZCgpOiBFbnRpdHlJZCB7XG5cdFx0cmV0dXJuIHRoaXMuZW50aXR5SWQ7XG5cdH1cblxuXHRlcXVhbHMoZW50aXR5OiBFbnRpdHk8VD4pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbnRpdHlJZC5lcXVhbHMoZW50aXR5LmdldElkKCkpO1xuXHR9XG5cbn1cbiJdfQ==