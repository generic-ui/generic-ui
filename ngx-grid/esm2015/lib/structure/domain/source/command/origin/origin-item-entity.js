/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class OriginItemEntity {
    /**
     * @param {?} id
     * @param {?} rawData
     * @param {?=} version
     */
    constructor(id, rawData, version = 0) {
        this.id = id;
        this.rawData = rawData;
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
    bumpVersion() {
        this.version += 1;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JpZ2luLWl0ZW0tZW50aXR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zb3VyY2UvY29tbWFuZC9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7SUFRNUIsWUFBWSxFQUFVLEVBQ25CLE9BQVksRUFDWixVQUFrQixDQUFDO1FBQ3JCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELE9BQU87UUFDTixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELFVBQVU7UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsS0FBSzs7Y0FFRSxPQUFPLHFCQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFakMsT0FBTyxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3RCxDQUFDO0NBRUQ7OztJQWpDQSw4QkFBVzs7SUFFWCxtQ0FBYTs7Ozs7SUFFYixtQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgT3JpZ2luSXRlbUVudGl0eSB7XG5cblx0aWQ6IHN0cmluZztcblxuXHRyYXdEYXRhOiBhbnk7XG5cblx0cHJpdmF0ZSB2ZXJzaW9uOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IoaWQ6IHN0cmluZyxcblx0XHRcdFx0cmF3RGF0YTogYW55LFxuXHRcdFx0XHR2ZXJzaW9uOiBudW1iZXIgPSAwKSB7XG5cdFx0dGhpcy5pZCA9IGlkO1xuXHRcdHRoaXMucmF3RGF0YSA9IHJhd0RhdGE7XG5cdFx0dGhpcy52ZXJzaW9uID0gdmVyc2lvbjtcblx0fVxuXG5cdGdldERhdGEoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5yYXdEYXRhO1xuXHR9XG5cblx0Z2V0VmVyc2lvbigpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnZlcnNpb247XG5cdH1cblxuXHRidW1wVmVyc2lvbigpOiB2b2lkIHtcblx0XHR0aGlzLnZlcnNpb24gKz0gMTtcblx0fVxuXG5cdGNsb25lKCk6IE9yaWdpbkl0ZW1FbnRpdHkge1xuXG5cdFx0Y29uc3QgcmF3RGF0YSA9IHsuLi50aGlzLnJhd0RhdGF9O1xuXG5cdFx0cmV0dXJuIG5ldyBPcmlnaW5JdGVtRW50aXR5KHRoaXMuaWQsIHJhd0RhdGEsIHRoaXMudmVyc2lvbik7XG5cdH1cblxufVxuIl19