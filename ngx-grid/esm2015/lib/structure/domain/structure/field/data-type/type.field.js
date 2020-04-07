/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataType } from './data-type';
import { BaseField } from './base.field';
export class TypeField extends BaseField {
    /**
     * @param {?} field
     * @return {?}
     */
    static of(field) {
        return new TypeField(field);
    }
    /**
     * @param {?} field
     */
    constructor(field) {
        super(field.getId(), field.getAccessor(), field.getDataType(), field.getMatchers());
        this.field = field;
    }
    /**
     * @template U
     * @param {?} callback
     * @return {?}
     */
    mapNumber(callback) {
        if (this.field.getDataType() === DataType.NUMBER) {
            return callback((/** @type {?} */ (this.field)));
        }
    }
    /**
     * @return {?}
     */
    ifNumber() {
        if (this.field.getDataType() === DataType.NUMBER) {
            return ((/** @type {?} */ (this.field)));
        }
    }
    /**
     * @deprecated
     * @return {?}
     */
    getField() {
        return this.field;
    }
    /**
     * @param {?} item
     * @param {?} searchPhrase
     * @return {?}
     */
    search(item, searchPhrase) {
        return this.field.search(item, searchPhrase);
    }
    /**
     * @param {?} item
     * @param {?} filterPhrase
     * @return {?}
     */
    filter(item, filterPhrase) {
        /** @type {?} */
        const value = this.field.getValue(item);
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
    }
    /**
     * @param {?} entityOne
     * @param {?} entityTwo
     * @param {?} direction
     * @return {?}
     */
    sort(entityOne, entityTwo, direction) {
        /** @type {?} */
        let valueOne = direction ? this.field.getSortValue(entityOne) : this.field.getSortValue(entityTwo);
        /** @type {?} */
        let valueTwo = direction ? this.field.getSortValue(entityTwo) : this.field.getSortValue(entityOne);
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
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    TypeField.prototype.field;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5maWVsZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2ZpZWxkL2RhdGEtdHlwZS90eXBlLmZpZWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBTXZDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFHekMsTUFBTSxPQUFPLFNBQVUsU0FBUSxTQUFTOzs7OztJQUV2QyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQW9CO1FBQzdCLE9BQU8sSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7OztJQVFELFlBQVksS0FBb0I7UUFDL0IsS0FBSyxDQUNKLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFDYixLQUFLLENBQUMsV0FBVyxFQUFFLEVBQ25CLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFDbkIsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUNuQixDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFJLFFBQW1DO1FBQy9DLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ2pELE9BQU8sUUFBUSxDQUFDLG1CQUFBLElBQUksQ0FBQyxLQUFLLEVBQWUsQ0FBQyxDQUFDO1NBQzNDO0lBQ0YsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNqRCxPQUFPLENBQUMsbUJBQUEsSUFBSSxDQUFDLEtBQUssRUFBZSxDQUFDLENBQUM7U0FDbkM7SUFDRixDQUFDOzs7OztJQUtELFFBQVE7UUFDUCxP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QUMsS0FBSyxFQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzFEO2FBQU07WUFDTixPQUFPLENBQUMsQ0FBQztTQUNUO0lBQ0YsQ0FBQztDQUVEOzs7Ozs7SUF0RUEsMEJBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWxsRmllbGRUeXBlcyB9IGZyb20gJy4vYWxsLWZpZWxkLXR5cGVzJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgTnVtYmVyRmllbGQgfSBmcm9tICcuL2ZpZWxkcy9udW1iZXItZmllbGQnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IEJvb2xlYW5GaWVsZCB9IGZyb20gJy4vZmllbGRzL2Jvb2xlYW4tZmllbGQnO1xuaW1wb3J0IHsgU3RyaW5nRmllbGQgfSBmcm9tICcuL2ZpZWxkcy9zdHJpbmctZmllbGQnO1xuaW1wb3J0IHsgRGF0ZUZpZWxkIH0gZnJvbSAnLi9maWVsZHMvZGF0ZS1maWVsZCc7XG5pbXBvcnQgeyBCYXNlRmllbGQgfSBmcm9tICcuL2Jhc2UuZmllbGQnO1xuXG5cbmV4cG9ydCBjbGFzcyBUeXBlRmllbGQgZXh0ZW5kcyBCYXNlRmllbGQge1xuXG5cdHN0YXRpYyBvZihmaWVsZDogQWxsRmllbGRUeXBlcyk6IFR5cGVGaWVsZCB7XG5cdFx0cmV0dXJuIG5ldyBUeXBlRmllbGQoZmllbGQpO1xuXHR9XG5cblx0Ly8gcHJpdmF0ZSByZWFkb25seSBhbGxEYXRhVHlwZXMgPSBbXG5cdC8vIFx0Ly8gRGF0YVR5cGVcblx0Ly8gXVxuXG5cdHByaXZhdGUgcmVhZG9ubHkgZmllbGQ6IEFsbEZpZWxkVHlwZXM7XG5cblx0Y29uc3RydWN0b3IoZmllbGQ6IEFsbEZpZWxkVHlwZXMpIHtcblx0XHRzdXBlcihcblx0XHRcdGZpZWxkLmdldElkKCksXG5cdFx0XHRmaWVsZC5nZXRBY2Nlc3NvcigpLFxuXHRcdFx0ZmllbGQuZ2V0RGF0YVR5cGUoKSxcblx0XHRcdGZpZWxkLmdldE1hdGNoZXJzKClcblx0XHQpO1xuXHRcdHRoaXMuZmllbGQgPSBmaWVsZDtcblx0fVxuXG5cdG1hcE51bWJlcjxVPihjYWxsYmFjazogKGZpZWxkOiBOdW1iZXJGaWVsZCkgPT4gVSk6IFUge1xuXHRcdGlmICh0aGlzLmZpZWxkLmdldERhdGFUeXBlKCkgPT09IERhdGFUeXBlLk5VTUJFUikge1xuXHRcdFx0cmV0dXJuIGNhbGxiYWNrKHRoaXMuZmllbGQgYXMgTnVtYmVyRmllbGQpO1xuXHRcdH1cblx0fVxuXG5cdGlmTnVtYmVyKCk6IE51bWJlckZpZWxkIHtcblx0XHRpZiAodGhpcy5maWVsZC5nZXREYXRhVHlwZSgpID09PSBEYXRhVHlwZS5OVU1CRVIpIHtcblx0XHRcdHJldHVybiAodGhpcy5maWVsZCBhcyBOdW1iZXJGaWVsZCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEBkZXByZWNhdGVkXG5cdCAqL1xuXHRnZXRGaWVsZCgpOiBBbGxGaWVsZFR5cGVzIHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZDtcblx0fVxuXG5cdHNlYXJjaChpdGVtOiBPcmlnaW5JdGVtRW50aXR5LCBzZWFyY2hQaHJhc2U6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkLnNlYXJjaChpdGVtLCBzZWFyY2hQaHJhc2UpO1xuXHR9XG5cblx0ZmlsdGVyKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHksIGZpbHRlclBocmFzZTogYW55KTogYm9vbGVhbiB7XG5cblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuZmllbGQuZ2V0VmFsdWUoaXRlbSk7XG5cblx0XHRpZiAodGhpcy5maWVsZC5nZXREYXRhVHlwZSgpID09PSBEYXRhVHlwZS5OVU1CRVIpIHtcblx0XHRcdHJldHVybiAodGhpcy5maWVsZCBhcyBOdW1iZXJGaWVsZCkuZmlsdGVyKHZhbHVlLCBmaWx0ZXJQaHJhc2UpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5maWVsZC5nZXREYXRhVHlwZSgpID09PSBEYXRhVHlwZS5CT09MRUFOKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuZmllbGQgYXMgQm9vbGVhbkZpZWxkKS5maWx0ZXIodmFsdWUsIGZpbHRlclBocmFzZSk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLmZpZWxkLmdldERhdGFUeXBlKCkgPT09IERhdGFUeXBlLlNUUklORykge1xuXHRcdFx0cmV0dXJuICh0aGlzLmZpZWxkIGFzIFN0cmluZ0ZpZWxkKS5maWx0ZXIodmFsdWUsIGZpbHRlclBocmFzZSk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLmZpZWxkLmdldERhdGFUeXBlKCkgPT09IERhdGFUeXBlLkRBVEUpIHtcblx0XHRcdHJldHVybiAodGhpcy5maWVsZCBhcyBEYXRlRmllbGQpLmZpbHRlcih2YWx1ZSwgZmlsdGVyUGhyYXNlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cblx0c29ydChlbnRpdHlPbmU6IE9yaWdpbkl0ZW1FbnRpdHksIGVudGl0eVR3bzogT3JpZ2luSXRlbUVudGl0eSwgZGlyZWN0aW9uOiBib29sZWFuKTogbnVtYmVyIHtcblxuXHRcdGxldCB2YWx1ZU9uZSA9IGRpcmVjdGlvbiA/IHRoaXMuZmllbGQuZ2V0U29ydFZhbHVlKGVudGl0eU9uZSkgOiB0aGlzLmZpZWxkLmdldFNvcnRWYWx1ZShlbnRpdHlUd28pLFxuXHRcdFx0dmFsdWVUd28gPSBkaXJlY3Rpb24gPyB0aGlzLmZpZWxkLmdldFNvcnRWYWx1ZShlbnRpdHlUd28pIDogdGhpcy5maWVsZC5nZXRTb3J0VmFsdWUoZW50aXR5T25lKTtcblxuXHRcdGlmICh0aGlzLmZpZWxkLmdldERhdGFUeXBlKCkgPT09IERhdGFUeXBlLk5VTUJFUikge1xuXHRcdFx0cmV0dXJuICh0aGlzLmZpZWxkIGFzIE51bWJlckZpZWxkKS5zb3J0KHZhbHVlT25lLCB2YWx1ZVR3byk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLmZpZWxkLmdldERhdGFUeXBlKCkgPT09IERhdGFUeXBlLkJPT0xFQU4pIHtcblx0XHRcdHJldHVybiAodGhpcy5maWVsZCBhcyBCb29sZWFuRmllbGQpLnNvcnQodmFsdWVPbmUsIHZhbHVlVHdvKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuZmllbGQuZ2V0RGF0YVR5cGUoKSA9PT0gRGF0YVR5cGUuU1RSSU5HKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuZmllbGQgYXMgU3RyaW5nRmllbGQpLnNvcnQodmFsdWVPbmUsIHZhbHVlVHdvKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuZmllbGQuZ2V0RGF0YVR5cGUoKSA9PT0gRGF0YVR5cGUuREFURSkge1xuXHRcdFx0cmV0dXJuICh0aGlzLmZpZWxkIGFzIERhdGVGaWVsZCkuc29ydCh2YWx1ZU9uZSwgdmFsdWVUd28pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cdH1cblxufVxuIl19