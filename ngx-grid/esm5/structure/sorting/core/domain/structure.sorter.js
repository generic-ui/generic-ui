/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureSorter = /** @class */ (function () {
    function StructureSorter(id, field, direction) {
        if (direction === void 0) { direction = true; }
        this.rank = 1;
        this.sorterId = id;
        this.field = field;
        this.direction = direction;
    }
    /**
     * @return {?}
     */
    StructureSorter.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.sorterId;
    };
    /**
     * @return {?}
     */
    StructureSorter.prototype.getRank = /**
     * @return {?}
     */
    function () {
        return this.rank;
    };
    /**
     * @return {?}
     */
    StructureSorter.prototype.getField = /**
     * @return {?}
     */
    function () {
        return this.field;
    };
    /**
     * @return {?}
     */
    StructureSorter.prototype.hasDirection = /**
     * @return {?}
     */
    function () {
        return this.direction;
    };
    /**
     * @return {?}
     */
    StructureSorter.prototype.changeDirection = /**
     * @return {?}
     */
    function () {
        this.direction = !this.direction;
    };
    /**
     * @param {?} direction
     * @return {?}
     */
    StructureSorter.prototype.setDirection = /**
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        this.direction = direction;
    };
    /**
     * @param {?} entities
     * @return {?}
     */
    StructureSorter.prototype.sort = /**
     * @param {?} entities
     * @return {?}
     */
    function (entities) {
        var _this = this;
        if (entities.length === 0) {
            return entities;
        }
        return entities.sort((/**
         * @param {?} entityOne
         * @param {?} entityTwo
         * @return {?}
         */
        function (entityOne, entityTwo) {
            return _this.field.sort(entityOne, entityTwo, _this.direction);
        }));
    };
    return StructureSorter;
}());
export { StructureSorter };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSorter.prototype.sorterId;
    /**
     * @type {?}
     * @private
     */
    StructureSorter.prototype.columnId;
    /**
     * @type {?}
     * @private
     */
    StructureSorter.prototype.field;
    /**
     * @type {?}
     * @private
     */
    StructureSorter.prototype.rank;
    /**
     * @type {?}
     * @private
     */
    StructureSorter.prototype.direction;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNvcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvcnRpbmcvY29yZS9kb21haW4vc3RydWN0dXJlLnNvcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUE7SUFZQyx5QkFBWSxFQUFZLEVBQ3JCLEtBQVksRUFDWixTQUF5QjtRQUF6QiwwQkFBQSxFQUFBLGdCQUF5QjtRQU5wQixTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBT3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCwrQkFBSzs7O0lBQUw7UUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELGlDQUFPOzs7SUFBUDtRQUNDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsa0NBQVE7OztJQUFSO1FBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxzQ0FBWTs7O0lBQVo7UUFDQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELHlDQUFlOzs7SUFBZjtRQUNDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRUQsc0NBQVk7Ozs7SUFBWixVQUFhLFNBQWtCO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsOEJBQUk7Ozs7SUFBSixVQUFLLFFBQWlDO1FBQXRDLGlCQVNDO1FBUEEsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUMxQixPQUFPLFFBQVEsQ0FBQztTQUNoQjtRQUVELE9BQU8sUUFBUSxDQUFDLElBQUk7Ozs7O1FBQUMsVUFBQyxTQUEyQixFQUFFLFNBQTJCO1lBQzdFLE9BQU8sS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUQsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDO0lBRUYsc0JBQUM7QUFBRCxDQUFDLEFBdkRELElBdURDOzs7Ozs7O0lBckRBLG1DQUFvQzs7Ozs7SUFFcEMsbUNBQXlCOzs7OztJQUV6QixnQ0FBcUI7Ozs7O0lBRXJCLCtCQUF5Qjs7Ozs7SUFFekIsb0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU29ydGVySWQgfSBmcm9tICcuLi9hcGkvc29ydGVyLmlkJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2ZpZWxkJztcblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVNvcnRlciB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzb3J0ZXJJZDogU29ydGVySWQ7XG5cblx0cHJpdmF0ZSBjb2x1bW5JZDogc3RyaW5nO1xuXG5cdHByaXZhdGUgZmllbGQ6IEZpZWxkO1xuXG5cdHByaXZhdGUgcmFuazogbnVtYmVyID0gMTtcblxuXHRwcml2YXRlIGRpcmVjdGlvbjogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvcihpZDogU29ydGVySWQsXG5cdFx0XHRcdGZpZWxkOiBGaWVsZCxcblx0XHRcdFx0ZGlyZWN0aW9uOiBib29sZWFuID0gdHJ1ZSkge1xuXHRcdHRoaXMuc29ydGVySWQgPSBpZDtcblx0XHR0aGlzLmZpZWxkID0gZmllbGQ7XG5cdFx0dGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG5cdH1cblxuXHRnZXRJZCgpOiBTb3J0ZXJJZCB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydGVySWQ7XG5cdH1cblxuXHRnZXRSYW5rKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMucmFuaztcblx0fVxuXG5cdGdldEZpZWxkKCk6IEZpZWxkIHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZDtcblx0fVxuXG5cdGhhc0RpcmVjdGlvbigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5kaXJlY3Rpb247XG5cdH1cblxuXHRjaGFuZ2VEaXJlY3Rpb24oKTogdm9pZCB7XG5cdFx0dGhpcy5kaXJlY3Rpb24gPSAhdGhpcy5kaXJlY3Rpb247XG5cdH1cblxuXHRzZXREaXJlY3Rpb24oZGlyZWN0aW9uOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG5cdH1cblxuXHRzb3J0KGVudGl0aWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblxuXHRcdGlmIChlbnRpdGllcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBlbnRpdGllcztcblx0XHR9XG5cblx0XHRyZXR1cm4gZW50aXRpZXMuc29ydCgoZW50aXR5T25lOiBPcmlnaW5JdGVtRW50aXR5LCBlbnRpdHlUd286IE9yaWdpbkl0ZW1FbnRpdHkpID0+IHtcblx0XHRcdHJldHVybiB0aGlzLmZpZWxkLnNvcnQoZW50aXR5T25lLCBlbnRpdHlUd28sIHRoaXMuZGlyZWN0aW9uKTtcblx0XHR9KTtcblx0fVxuXG59XG4iXX0=