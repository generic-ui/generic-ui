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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29yZS9kb21haW4vdGFjdGljYWwvZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsTUFBTSxPQUFnQixNQUFNOzs7OztJQUkzQixZQUFzQixFQUFLO1FBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLE1BQWlCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDN0MsQ0FBQztDQUVEOzs7Ozs7SUFkQSwwQkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnRpdHlJZCB9IGZyb20gJy4vZW50aXR5LmlkJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEVudGl0eTxUIGV4dGVuZHMgRW50aXR5SWQ+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGVudGl0eUlkOiBUO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcihpZDogVCkge1xuXHRcdHRoaXMuZW50aXR5SWQgPSBpZDtcblx0fVxuXG5cdGdldElkKCk6IEVudGl0eUlkIHtcblx0XHRyZXR1cm4gdGhpcy5lbnRpdHlJZDtcblx0fVxuXG5cdGVxdWFscyhlbnRpdHk6IEVudGl0eTxUPik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVudGl0eUlkLmVxdWFscyhlbnRpdHkuZ2V0SWQoKSk7XG5cdH1cblxufVxuIl19