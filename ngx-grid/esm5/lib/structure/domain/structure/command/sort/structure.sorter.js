/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataType } from '../field/data-type/data-type';
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
    StructureSorter.prototype.getDirection = /**
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
            /** @type {?} */
            var valueOne = _this.direction ? _this.field.getValue(entityOne) : _this.field.getValue(entityTwo);
            /** @type {?} */
            var valueTwo = _this.direction ? _this.field.getValue(entityTwo) : _this.field.getValue(entityOne);
            if (_this.field.getDataType() === DataType.NUMBER) {
                return _this.sortNumber(valueOne, valueTwo);
            }
            else if (_this.field.getDataType() === DataType.BOOLEAN) {
                return _this.sortBoolean(valueOne, valueTwo);
            }
            else if (_this.field.getDataType() === DataType.STRING) {
                return _this.sortString(valueOne, valueTwo);
            }
            else {
                return _this.sortUnknown(valueOne, valueTwo);
            }
        }));
    };
    /**
     * @private
     * @param {?} strOne
     * @param {?} strTwo
     * @return {?}
     */
    StructureSorter.prototype.sortString = /**
     * @private
     * @param {?} strOne
     * @param {?} strTwo
     * @return {?}
     */
    function (strOne, strTwo) {
        /** @type {?} */
        var sureStrOne = '' + strOne;
        /** @type {?} */
        var sureStrTwo = '' + strTwo;
        return sureStrOne.localeCompare(sureStrTwo);
    };
    /**
     * @private
     * @param {?} numOne
     * @param {?} numTwo
     * @return {?}
     */
    StructureSorter.prototype.sortNumber = /**
     * @private
     * @param {?} numOne
     * @param {?} numTwo
     * @return {?}
     */
    function (numOne, numTwo) {
        /** @type {?} */
        var sureNumOne = +numOne;
        /** @type {?} */
        var sureNumTwo = +numTwo;
        return sureNumOne - sureNumTwo;
    };
    /**
     * @private
     * @param {?} booleanOne
     * @param {?} booleanTwo
     * @return {?}
     */
    StructureSorter.prototype.sortBoolean = /**
     * @private
     * @param {?} booleanOne
     * @param {?} booleanTwo
     * @return {?}
     */
    function (booleanOne, booleanTwo) {
        /** @type {?} */
        var sureBoolOne = !!booleanOne;
        /** @type {?} */
        var sureBoolTwo = !!booleanTwo;
        return (sureBoolOne === sureBoolTwo) ? 0 : sureBoolTwo ? -1 : 1;
    };
    /**
     * @private
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    StructureSorter.prototype.sortUnknown = /**
     * @private
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        return 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNvcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc29ydC9zdHJ1Y3R1cmUuc29ydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFeEQ7SUFZQyx5QkFBWSxFQUFZLEVBQ3JCLEtBQVksRUFDWixTQUF5QjtRQUF6QiwwQkFBQSxFQUFBLGdCQUF5QjtRQU5wQixTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBT3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCwrQkFBSzs7O0lBQUw7UUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELGlDQUFPOzs7SUFBUDtRQUNDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsa0NBQVE7OztJQUFSO1FBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxzQ0FBWTs7O0lBQVo7UUFDQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELHlDQUFlOzs7SUFBZjtRQUNDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRUQsOEJBQUk7Ozs7SUFBSixVQUFLLFFBQWlDO1FBQXRDLGlCQXFCQztRQW5CQSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzFCLE9BQU8sUUFBUSxDQUFDO1NBQ2hCO1FBRUQsT0FBTyxRQUFRLENBQUMsSUFBSTs7Ozs7UUFBQyxVQUFDLFNBQTJCLEVBQUUsU0FBMkI7O2dCQUV6RSxRQUFRLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQzs7Z0JBQzlGLFFBQVEsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO1lBRTVGLElBQUksS0FBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxRQUFRLENBQUMsTUFBTSxFQUFFO2dCQUNqRCxPQUFPLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQzNDO2lCQUFNLElBQUksS0FBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxRQUFRLENBQUMsT0FBTyxFQUFFO2dCQUN6RCxPQUFPLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQzVDO2lCQUFNLElBQUksS0FBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxRQUFRLENBQUMsTUFBTSxFQUFFO2dCQUN4RCxPQUFPLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQzNDO2lCQUFNO2dCQUNOLE9BQU8sS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDNUM7UUFDRixDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFFTyxvQ0FBVTs7Ozs7O0lBQWxCLFVBQW1CLE1BQWMsRUFBRSxNQUFjOztZQUUxQyxVQUFVLEdBQUcsRUFBRSxHQUFHLE1BQU07O1lBQzdCLFVBQVUsR0FBRyxFQUFFLEdBQUcsTUFBTTtRQUV6QixPQUFPLFVBQVUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7OztJQUVPLG9DQUFVOzs7Ozs7SUFBbEIsVUFBbUIsTUFBYyxFQUFFLE1BQWM7O1lBRTFDLFVBQVUsR0FBRyxDQUFDLE1BQU07O1lBQ3pCLFVBQVUsR0FBRyxDQUFDLE1BQU07UUFFckIsT0FBTyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQ2hDLENBQUM7Ozs7Ozs7SUFFTyxxQ0FBVzs7Ozs7O0lBQW5CLFVBQW9CLFVBQW1CLEVBQUUsVUFBbUI7O1lBRXJELFdBQVcsR0FBRyxDQUFDLENBQUMsVUFBVTs7WUFDL0IsV0FBVyxHQUFHLENBQUMsQ0FBQyxVQUFVO1FBRTNCLE9BQU8sQ0FBQyxXQUFXLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7Ozs7SUFFTyxxQ0FBVzs7Ozs7O0lBQW5CLFVBQW9CLENBQU0sRUFBRSxDQUFNO1FBQ2pDLE9BQU8sQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVGLHNCQUFDO0FBQUQsQ0FBQyxBQTNGRCxJQTJGQzs7Ozs7OztJQXpGQSxtQ0FBb0M7Ozs7O0lBRXBDLG1DQUF5Qjs7Ozs7SUFFekIsZ0NBQXFCOzs7OztJQUVyQiwrQkFBeUI7Ozs7O0lBRXpCLG9DQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNvcnRlcklkIH0gZnJvbSAnLi9zb3J0ZXIuaWQnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi9maWVsZC9kYXRhLXR5cGUvZmllbGQnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb21tYW5kL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi9maWVsZC9kYXRhLXR5cGUvZGF0YS10eXBlJztcblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVNvcnRlciB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzb3J0ZXJJZDogU29ydGVySWQ7XG5cblx0cHJpdmF0ZSBjb2x1bW5JZDogc3RyaW5nO1xuXG5cdHByaXZhdGUgZmllbGQ6IEZpZWxkO1xuXG5cdHByaXZhdGUgcmFuazogbnVtYmVyID0gMTtcblxuXHRwcml2YXRlIGRpcmVjdGlvbjogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvcihpZDogU29ydGVySWQsXG5cdFx0XHRcdGZpZWxkOiBGaWVsZCxcblx0XHRcdFx0ZGlyZWN0aW9uOiBib29sZWFuID0gdHJ1ZSkge1xuXHRcdHRoaXMuc29ydGVySWQgPSBpZDtcblx0XHR0aGlzLmZpZWxkID0gZmllbGQ7XG5cdFx0dGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG5cdH1cblxuXHRnZXRJZCgpOiBTb3J0ZXJJZCB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydGVySWQ7XG5cdH1cblxuXHRnZXRSYW5rKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMucmFuaztcblx0fVxuXG5cdGdldEZpZWxkKCk6IEZpZWxkIHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZDtcblx0fVxuXG5cdGdldERpcmVjdGlvbigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5kaXJlY3Rpb247XG5cdH1cblxuXHRjaGFuZ2VEaXJlY3Rpb24oKTogdm9pZCB7XG5cdFx0dGhpcy5kaXJlY3Rpb24gPSAhdGhpcy5kaXJlY3Rpb247XG5cdH1cblxuXHRzb3J0KGVudGl0aWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblxuXHRcdGlmIChlbnRpdGllcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBlbnRpdGllcztcblx0XHR9XG5cblx0XHRyZXR1cm4gZW50aXRpZXMuc29ydCgoZW50aXR5T25lOiBPcmlnaW5JdGVtRW50aXR5LCBlbnRpdHlUd286IE9yaWdpbkl0ZW1FbnRpdHkpID0+IHtcblxuXHRcdFx0bGV0IHZhbHVlT25lID0gdGhpcy5kaXJlY3Rpb24gPyB0aGlzLmZpZWxkLmdldFZhbHVlKGVudGl0eU9uZSkgOiB0aGlzLmZpZWxkLmdldFZhbHVlKGVudGl0eVR3byksXG5cdFx0XHRcdHZhbHVlVHdvID0gdGhpcy5kaXJlY3Rpb24gPyB0aGlzLmZpZWxkLmdldFZhbHVlKGVudGl0eVR3bykgOiB0aGlzLmZpZWxkLmdldFZhbHVlKGVudGl0eU9uZSk7XG5cblx0XHRcdGlmICh0aGlzLmZpZWxkLmdldERhdGFUeXBlKCkgPT09IERhdGFUeXBlLk5VTUJFUikge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5zb3J0TnVtYmVyKHZhbHVlT25lLCB2YWx1ZVR3byk7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuZmllbGQuZ2V0RGF0YVR5cGUoKSA9PT0gRGF0YVR5cGUuQk9PTEVBTikge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5zb3J0Qm9vbGVhbih2YWx1ZU9uZSwgdmFsdWVUd28pO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLmZpZWxkLmdldERhdGFUeXBlKCkgPT09IERhdGFUeXBlLlNUUklORykge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5zb3J0U3RyaW5nKHZhbHVlT25lLCB2YWx1ZVR3byk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5zb3J0VW5rbm93bih2YWx1ZU9uZSwgdmFsdWVUd28pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBzb3J0U3RyaW5nKHN0ck9uZTogc3RyaW5nLCBzdHJUd286IHN0cmluZyk6IG51bWJlciB7XG5cblx0XHRjb25zdCBzdXJlU3RyT25lID0gJycgKyBzdHJPbmUsXG5cdFx0XHRzdXJlU3RyVHdvID0gJycgKyBzdHJUd287XG5cblx0XHRyZXR1cm4gc3VyZVN0ck9uZS5sb2NhbGVDb21wYXJlKHN1cmVTdHJUd28pO1xuXHR9XG5cblx0cHJpdmF0ZSBzb3J0TnVtYmVyKG51bU9uZTogbnVtYmVyLCBudW1Ud286IG51bWJlcik6IG51bWJlciB7XG5cblx0XHRjb25zdCBzdXJlTnVtT25lID0gK251bU9uZSxcblx0XHRcdHN1cmVOdW1Ud28gPSArbnVtVHdvO1xuXG5cdFx0cmV0dXJuIHN1cmVOdW1PbmUgLSBzdXJlTnVtVHdvO1xuXHR9XG5cblx0cHJpdmF0ZSBzb3J0Qm9vbGVhbihib29sZWFuT25lOiBib29sZWFuLCBib29sZWFuVHdvOiBib29sZWFuKTogbnVtYmVyIHtcblxuXHRcdGNvbnN0IHN1cmVCb29sT25lID0gISFib29sZWFuT25lLFxuXHRcdFx0c3VyZUJvb2xUd28gPSAhIWJvb2xlYW5Ud287XG5cblx0XHRyZXR1cm4gKHN1cmVCb29sT25lID09PSBzdXJlQm9vbFR3bykgPyAwIDogc3VyZUJvb2xUd28gPyAtMSA6IDE7XG5cdH1cblxuXHRwcml2YXRlIHNvcnRVbmtub3duKGE6IGFueSwgYjogYW55KTogbnVtYmVyIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG59XG4iXX0=