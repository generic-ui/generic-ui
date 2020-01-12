/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class OriginItemEntity {
    /**
     * @param {?} id
     * @param {?} rawData
     * @param {?} position
     * @param {?=} version
     */
    constructor(id, rawData, position, version = 0) {
        this.id = id;
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
        return new OriginItemEntity(this.id, rawData, this.version);
    }
}
if (false) {
    /** @type {?} */
    OriginItemEntity.prototype.id;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JpZ2luLWl0ZW0tZW50aXR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zb3VyY2UvY29tbWFuZC9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7O0lBVTVCLFlBQVksRUFBVSxFQUNuQixPQUFZLEVBQ1osUUFBZ0IsRUFDaEIsVUFBa0IsQ0FBQztRQUNyQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ04sT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsUUFBZ0I7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELEtBQUs7O2NBRUUsT0FBTyxxQkFBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRWpDLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0QsQ0FBQztDQUVEOzs7SUE3Q0EsOEJBQVc7O0lBRVgsbUNBQWE7Ozs7O0lBRWIsbUNBQXdCOzs7OztJQUV4QixvQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgT3JpZ2luSXRlbUVudGl0eSB7XG5cblx0aWQ6IHN0cmluZztcblxuXHRyYXdEYXRhOiBhbnk7XG5cblx0cHJpdmF0ZSB2ZXJzaW9uOiBudW1iZXI7XG5cblx0cHJpdmF0ZSBwb3NpdGlvbjogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcsXG5cdFx0XHRcdHJhd0RhdGE6IGFueSxcblx0XHRcdFx0cG9zaXRpb246IG51bWJlcixcblx0XHRcdFx0dmVyc2lvbjogbnVtYmVyID0gMCkge1xuXHRcdHRoaXMuaWQgPSBpZDtcblx0XHR0aGlzLnJhd0RhdGEgPSByYXdEYXRhO1xuXHRcdHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcblx0XHR0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuXHR9XG5cblx0Z2V0RGF0YSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLnJhd0RhdGE7XG5cdH1cblxuXHRnZXRWZXJzaW9uKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMudmVyc2lvbjtcblx0fVxuXG5cdGdldFBvc2l0aW9uKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMucG9zaXRpb247XG5cdH1cblxuXHRidW1wVmVyc2lvbigpOiB2b2lkIHtcblx0XHR0aGlzLnZlcnNpb24gKz0gMTtcblx0fVxuXG5cdHNldFBvc2l0aW9uKHBvc2l0aW9uOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG5cdH1cblxuXHRjbG9uZSgpOiBPcmlnaW5JdGVtRW50aXR5IHtcblxuXHRcdGNvbnN0IHJhd0RhdGEgPSB7Li4udGhpcy5yYXdEYXRhfTtcblxuXHRcdHJldHVybiBuZXcgT3JpZ2luSXRlbUVudGl0eSh0aGlzLmlkLCByYXdEYXRhLCB0aGlzLnZlcnNpb24pO1xuXHR9XG5cbn1cbiJdfQ==