/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataType } from './data-type';
import { BaseField } from './base.field';
var TypeField = /** @class */ (function (_super) {
    tslib_1.__extends(TypeField, _super);
    function TypeField(field) {
        var _this = _super.call(this, field.getId(), field.getAccessor(), field.getDataType(), field.getMatchers()) || this;
        _this.field = field;
        return _this;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    TypeField.of = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return new TypeField(field);
    };
    /**
     * @template U
     * @param {?} callback
     * @return {?}
     */
    TypeField.prototype.mapNumber = /**
     * @template U
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        if (this.field.getDataType() === DataType.NUMBER) {
            return callback((/** @type {?} */ (this.field)));
        }
    };
    /**
     * @return {?}
     */
    TypeField.prototype.ifNumber = /**
     * @return {?}
     */
    function () {
        if (this.field.getDataType() === DataType.NUMBER) {
            return ((/** @type {?} */ (this.field)));
        }
    };
    /**
     * @deprecated
     */
    /**
     * @deprecated
     * @return {?}
     */
    TypeField.prototype.getField = /**
     * @deprecated
     * @return {?}
     */
    function () {
        return this.field;
    };
    /**
     * @param {?} item
     * @param {?} searchPhrase
     * @return {?}
     */
    TypeField.prototype.search = /**
     * @param {?} item
     * @param {?} searchPhrase
     * @return {?}
     */
    function (item, searchPhrase) {
        return this.field.search(item, searchPhrase);
    };
    /**
     * @param {?} item
     * @param {?} filterPhrase
     * @return {?}
     */
    TypeField.prototype.filter = /**
     * @param {?} item
     * @param {?} filterPhrase
     * @return {?}
     */
    function (item, filterPhrase) {
        /** @type {?} */
        var value = this.field.getValue(item);
        if (this.field.getDataType() === DataType.NUMBER) {
            return ((/** @type {?} */ (this.field))).filter(value, filterPhrase);
        }
        else if (this.field.getDataType() === DataType.BOOLEAN) {
            return ((/** @type {?} */ (this.field))).filter(value, filterPhrase);
        }
        else if (this.field.getDataType() === DataType.STRING) {
            return ((/** @type {?} */ (this.field))).filter(value, filterPhrase);
        }
        else if (this.field.getDataType() === DataType.DATE) {
            return ((/** @type {?} */ (this.field))).filter(value, filterPhrase);
        }
        else {
            return true;
        }
    };
    /**
     * @param {?} entityOne
     * @param {?} entityTwo
     * @param {?} direction
     * @return {?}
     */
    TypeField.prototype.sort = /**
     * @param {?} entityOne
     * @param {?} entityTwo
     * @param {?} direction
     * @return {?}
     */
    function (entityOne, entityTwo, direction) {
        /** @type {?} */
        var valueOne = direction ? this.field.getSortValue(entityOne) : this.field.getSortValue(entityTwo);
        /** @type {?} */
        var valueTwo = direction ? this.field.getSortValue(entityTwo) : this.field.getSortValue(entityOne);
        if (this.field.getDataType() === DataType.NUMBER) {
            return ((/** @type {?} */ (this.field))).sort(valueOne, valueTwo);
        }
        else if (this.field.getDataType() === DataType.BOOLEAN) {
            return ((/** @type {?} */ (this.field))).sort(valueOne, valueTwo);
        }
        else if (this.field.getDataType() === DataType.STRING) {
            return ((/** @type {?} */ (this.field))).sort(valueOne, valueTwo);
        }
        else if (this.field.getDataType() === DataType.DATE) {
            return ((/** @type {?} */ (this.field))).sort(valueOne, valueTwo);
        }
        else {
            return 0;
        }
    };
    return TypeField;
}(BaseField));
export { TypeField };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TypeField.prototype.field;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5maWVsZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2ZpZWxkL2RhdGEtdHlwZS90eXBlLmZpZWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU12QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBR3pDO0lBQStCLHFDQUFTO0lBWXZDLG1CQUFZLEtBQW9CO1FBQWhDLFlBQ0Msa0JBQ0MsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUNiLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFDbkIsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUNuQixLQUFLLENBQUMsV0FBVyxFQUFFLENBQ25CLFNBRUQ7UUFEQSxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzs7SUFDcEIsQ0FBQzs7Ozs7SUFsQk0sWUFBRTs7OztJQUFULFVBQVUsS0FBb0I7UUFDN0IsT0FBTyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7Ozs7SUFrQkQsNkJBQVM7Ozs7O0lBQVQsVUFBYSxRQUFtQztRQUMvQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNqRCxPQUFPLFFBQVEsQ0FBQyxtQkFBQSxJQUFJLENBQUMsS0FBSyxFQUFlLENBQUMsQ0FBQztTQUMzQztJQUNGLENBQUM7Ozs7SUFFRCw0QkFBUTs7O0lBQVI7UUFDQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNqRCxPQUFPLENBQUMsbUJBQUEsSUFBSSxDQUFDLEtBQUssRUFBZSxDQUFDLENBQUM7U0FDbkM7SUFDRixDQUFDO0lBRUQ7O09BRUc7Ozs7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QUUsS0FBSyxRQUFRLENBQUMsSUFBSSxFQUFFO1lBQ3RELE9BQU8sQ0FBQyxtQkFBQSxJQUFJLENBQUMsS0FBSyxFQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzFEO2FBQU07WUFDTixPQUFPLENBQUMsQ0FBQztTQUNUO0lBQ0YsQ0FBQztJQUVGLGdCQUFDO0FBQUQsQ0FBQyxBQWhGRCxDQUErQixTQUFTLEdBZ0Z2Qzs7Ozs7OztJQXRFQSwwQkFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbGxGaWVsZFR5cGVzIH0gZnJvbSAnLi9hbGwtZmllbGQtdHlwZXMnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBOdW1iZXJGaWVsZCB9IGZyb20gJy4vZmllbGRzL251bWJlci1maWVsZCc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgQm9vbGVhbkZpZWxkIH0gZnJvbSAnLi9maWVsZHMvYm9vbGVhbi1maWVsZCc7XG5pbXBvcnQgeyBTdHJpbmdGaWVsZCB9IGZyb20gJy4vZmllbGRzL3N0cmluZy1maWVsZCc7XG5pbXBvcnQgeyBEYXRlRmllbGQgfSBmcm9tICcuL2ZpZWxkcy9kYXRlLWZpZWxkJztcbmltcG9ydCB7IEJhc2VGaWVsZCB9IGZyb20gJy4vYmFzZS5maWVsZCc7XG5cblxuZXhwb3J0IGNsYXNzIFR5cGVGaWVsZCBleHRlbmRzIEJhc2VGaWVsZCB7XG5cblx0c3RhdGljIG9mKGZpZWxkOiBBbGxGaWVsZFR5cGVzKTogVHlwZUZpZWxkIHtcblx0XHRyZXR1cm4gbmV3IFR5cGVGaWVsZChmaWVsZCk7XG5cdH1cblxuXHQvLyBwcml2YXRlIHJlYWRvbmx5IGFsbERhdGFUeXBlcyA9IFtcblx0Ly8gXHQvLyBEYXRhVHlwZVxuXHQvLyBdXG5cblx0cHJpdmF0ZSByZWFkb25seSBmaWVsZDogQWxsRmllbGRUeXBlcztcblxuXHRjb25zdHJ1Y3RvcihmaWVsZDogQWxsRmllbGRUeXBlcykge1xuXHRcdHN1cGVyKFxuXHRcdFx0ZmllbGQuZ2V0SWQoKSxcblx0XHRcdGZpZWxkLmdldEFjY2Vzc29yKCksXG5cdFx0XHRmaWVsZC5nZXREYXRhVHlwZSgpLFxuXHRcdFx0ZmllbGQuZ2V0TWF0Y2hlcnMoKVxuXHRcdCk7XG5cdFx0dGhpcy5maWVsZCA9IGZpZWxkO1xuXHR9XG5cblx0bWFwTnVtYmVyPFU+KGNhbGxiYWNrOiAoZmllbGQ6IE51bWJlckZpZWxkKSA9PiBVKTogVSB7XG5cdFx0aWYgKHRoaXMuZmllbGQuZ2V0RGF0YVR5cGUoKSA9PT0gRGF0YVR5cGUuTlVNQkVSKSB7XG5cdFx0XHRyZXR1cm4gY2FsbGJhY2sodGhpcy5maWVsZCBhcyBOdW1iZXJGaWVsZCk7XG5cdFx0fVxuXHR9XG5cblx0aWZOdW1iZXIoKTogTnVtYmVyRmllbGQge1xuXHRcdGlmICh0aGlzLmZpZWxkLmdldERhdGFUeXBlKCkgPT09IERhdGFUeXBlLk5VTUJFUikge1xuXHRcdFx0cmV0dXJuICh0aGlzLmZpZWxkIGFzIE51bWJlckZpZWxkKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQGRlcHJlY2F0ZWRcblx0ICovXG5cdGdldEZpZWxkKCk6IEFsbEZpZWxkVHlwZXMge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkO1xuXHR9XG5cblx0c2VhcmNoKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHksIHNlYXJjaFBocmFzZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGQuc2VhcmNoKGl0ZW0sIHNlYXJjaFBocmFzZSk7XG5cdH1cblxuXHRmaWx0ZXIoaXRlbTogT3JpZ2luSXRlbUVudGl0eSwgZmlsdGVyUGhyYXNlOiBhbnkpOiBib29sZWFuIHtcblxuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5maWVsZC5nZXRWYWx1ZShpdGVtKTtcblxuXHRcdGlmICh0aGlzLmZpZWxkLmdldERhdGFUeXBlKCkgPT09IERhdGFUeXBlLk5VTUJFUikge1xuXHRcdFx0cmV0dXJuICh0aGlzLmZpZWxkIGFzIE51bWJlckZpZWxkKS5maWx0ZXIodmFsdWUsIGZpbHRlclBocmFzZSk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLmZpZWxkLmdldERhdGFUeXBlKCkgPT09IERhdGFUeXBlLkJPT0xFQU4pIHtcblx0XHRcdHJldHVybiAodGhpcy5maWVsZCBhcyBCb29sZWFuRmllbGQpLmZpbHRlcih2YWx1ZSwgZmlsdGVyUGhyYXNlKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuZmllbGQuZ2V0RGF0YVR5cGUoKSA9PT0gRGF0YVR5cGUuU1RSSU5HKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuZmllbGQgYXMgU3RyaW5nRmllbGQpLmZpbHRlcih2YWx1ZSwgZmlsdGVyUGhyYXNlKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuZmllbGQuZ2V0RGF0YVR5cGUoKSA9PT0gRGF0YVR5cGUuREFURSkge1xuXHRcdFx0cmV0dXJuICh0aGlzLmZpZWxkIGFzIERhdGVGaWVsZCkuZmlsdGVyKHZhbHVlLCBmaWx0ZXJQaHJhc2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRzb3J0KGVudGl0eU9uZTogT3JpZ2luSXRlbUVudGl0eSwgZW50aXR5VHdvOiBPcmlnaW5JdGVtRW50aXR5LCBkaXJlY3Rpb246IGJvb2xlYW4pOiBudW1iZXIge1xuXG5cdFx0bGV0IHZhbHVlT25lID0gZGlyZWN0aW9uID8gdGhpcy5maWVsZC5nZXRTb3J0VmFsdWUoZW50aXR5T25lKSA6IHRoaXMuZmllbGQuZ2V0U29ydFZhbHVlKGVudGl0eVR3byksXG5cdFx0XHR2YWx1ZVR3byA9IGRpcmVjdGlvbiA/IHRoaXMuZmllbGQuZ2V0U29ydFZhbHVlKGVudGl0eVR3bykgOiB0aGlzLmZpZWxkLmdldFNvcnRWYWx1ZShlbnRpdHlPbmUpO1xuXG5cdFx0aWYgKHRoaXMuZmllbGQuZ2V0RGF0YVR5cGUoKSA9PT0gRGF0YVR5cGUuTlVNQkVSKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuZmllbGQgYXMgTnVtYmVyRmllbGQpLnNvcnQodmFsdWVPbmUsIHZhbHVlVHdvKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuZmllbGQuZ2V0RGF0YVR5cGUoKSA9PT0gRGF0YVR5cGUuQk9PTEVBTikge1xuXHRcdFx0cmV0dXJuICh0aGlzLmZpZWxkIGFzIEJvb2xlYW5GaWVsZCkuc29ydCh2YWx1ZU9uZSwgdmFsdWVUd28pO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5maWVsZC5nZXREYXRhVHlwZSgpID09PSBEYXRhVHlwZS5TVFJJTkcpIHtcblx0XHRcdHJldHVybiAodGhpcy5maWVsZCBhcyBTdHJpbmdGaWVsZCkuc29ydCh2YWx1ZU9uZSwgdmFsdWVUd28pO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5maWVsZC5nZXREYXRhVHlwZSgpID09PSBEYXRhVHlwZS5EQVRFKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuZmllbGQgYXMgRGF0ZUZpZWxkKS5zb3J0KHZhbHVlT25lLCB2YWx1ZVR3byk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=