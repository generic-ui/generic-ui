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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5maWVsZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpZWxkL2RvbWFpbi9kYXRhLXR5cGUvdHlwZS5maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU12QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBR3pDLE1BQU0sT0FBTyxTQUFVLFNBQVEsU0FBUzs7Ozs7SUFFdkMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFvQjtRQUM3QixPQUFPLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFRRCxZQUFZLEtBQW9CO1FBQy9CLEtBQUssQ0FDSixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQ2IsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUNuQixLQUFLLENBQUMsV0FBVyxFQUFFLEVBQ25CLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FDbkIsQ0FBQztRQUNGLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7OztJQUVELFNBQVMsQ0FBSSxRQUFtQztRQUMvQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNqRCxPQUFPLFFBQVEsQ0FBQyxtQkFBQSxJQUFJLENBQUMsS0FBSyxFQUFlLENBQUMsQ0FBQztTQUMzQztJQUNGLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDakQsT0FBTyxDQUFDLG1CQUFBLElBQUksQ0FBQyxLQUFLLEVBQWUsQ0FBQyxDQUFDO1NBQ25DO0lBQ0YsQ0FBQzs7Ozs7SUFLRCxRQUFRO1FBQ1AsT0FBTyxJQUFJLENBQUMs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QUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUMxRDthQUFNO1lBQ04sT0FBTyxDQUFDLENBQUM7U0FDVDtJQUNGLENBQUM7Q0FFRDs7Ozs7O0lBdEVBLDBCQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFsbEZpZWxkVHlwZXMgfSBmcm9tICcuL2FsbC1maWVsZC10eXBlcyc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vZGF0YS10eXBlJztcbmltcG9ydCB7IE51bWJlckZpZWxkIH0gZnJvbSAnLi9maWVsZHMvbnVtYmVyLWZpZWxkJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zb3VyY2Uvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBCb29sZWFuRmllbGQgfSBmcm9tICcuL2ZpZWxkcy9ib29sZWFuLWZpZWxkJztcbmltcG9ydCB7IFN0cmluZ0ZpZWxkIH0gZnJvbSAnLi9maWVsZHMvc3RyaW5nLWZpZWxkJztcbmltcG9ydCB7IERhdGVGaWVsZCB9IGZyb20gJy4vZmllbGRzL2RhdGUtZmllbGQnO1xuaW1wb3J0IHsgQmFzZUZpZWxkIH0gZnJvbSAnLi9iYXNlLmZpZWxkJztcblxuXG5leHBvcnQgY2xhc3MgVHlwZUZpZWxkIGV4dGVuZHMgQmFzZUZpZWxkIHtcblxuXHRzdGF0aWMgb2YoZmllbGQ6IEFsbEZpZWxkVHlwZXMpOiBUeXBlRmllbGQge1xuXHRcdHJldHVybiBuZXcgVHlwZUZpZWxkKGZpZWxkKTtcblx0fVxuXG5cdC8vIHByaXZhdGUgcmVhZG9ubHkgYWxsRGF0YVR5cGVzID0gW1xuXHQvLyBcdC8vIERhdGFUeXBlXG5cdC8vIF1cblxuXHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkOiBBbGxGaWVsZFR5cGVzO1xuXG5cdGNvbnN0cnVjdG9yKGZpZWxkOiBBbGxGaWVsZFR5cGVzKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRmaWVsZC5nZXRJZCgpLFxuXHRcdFx0ZmllbGQuZ2V0QWNjZXNzb3IoKSxcblx0XHRcdGZpZWxkLmdldERhdGFUeXBlKCksXG5cdFx0XHRmaWVsZC5nZXRNYXRjaGVycygpXG5cdFx0KTtcblx0XHR0aGlzLmZpZWxkID0gZmllbGQ7XG5cdH1cblxuXHRtYXBOdW1iZXI8VT4oY2FsbGJhY2s6IChmaWVsZDogTnVtYmVyRmllbGQpID0+IFUpOiBVIHtcblx0XHRpZiAodGhpcy5maWVsZC5nZXREYXRhVHlwZSgpID09PSBEYXRhVHlwZS5OVU1CRVIpIHtcblx0XHRcdHJldHVybiBjYWxsYmFjayh0aGlzLmZpZWxkIGFzIE51bWJlckZpZWxkKTtcblx0XHR9XG5cdH1cblxuXHRpZk51bWJlcigpOiBOdW1iZXJGaWVsZCB7XG5cdFx0aWYgKHRoaXMuZmllbGQuZ2V0RGF0YVR5cGUoKSA9PT0gRGF0YVR5cGUuTlVNQkVSKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuZmllbGQgYXMgTnVtYmVyRmllbGQpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBAZGVwcmVjYXRlZFxuXHQgKi9cblx0Z2V0RmllbGQoKTogQWxsRmllbGRUeXBlcyB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGQ7XG5cdH1cblxuXHRzZWFyY2goaXRlbTogT3JpZ2luSXRlbUVudGl0eSwgc2VhcmNoUGhyYXNlOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZC5zZWFyY2goaXRlbSwgc2VhcmNoUGhyYXNlKTtcblx0fVxuXG5cdGZpbHRlcihpdGVtOiBPcmlnaW5JdGVtRW50aXR5LCBmaWx0ZXJQaHJhc2U6IGFueSk6IGJvb2xlYW4ge1xuXG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmZpZWxkLmdldFZhbHVlKGl0ZW0pO1xuXG5cdFx0aWYgKHRoaXMuZmllbGQuZ2V0RGF0YVR5cGUoKSA9PT0gRGF0YVR5cGUuTlVNQkVSKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuZmllbGQgYXMgTnVtYmVyRmllbGQpLmZpbHRlcih2YWx1ZSwgZmlsdGVyUGhyYXNlKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuZmllbGQuZ2V0RGF0YVR5cGUoKSA9PT0gRGF0YVR5cGUuQk9PTEVBTikge1xuXHRcdFx0cmV0dXJuICh0aGlzLmZpZWxkIGFzIEJvb2xlYW5GaWVsZCkuZmlsdGVyKHZhbHVlLCBmaWx0ZXJQaHJhc2UpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5maWVsZC5nZXREYXRhVHlwZSgpID09PSBEYXRhVHlwZS5TVFJJTkcpIHtcblx0XHRcdHJldHVybiAodGhpcy5maWVsZCBhcyBTdHJpbmdGaWVsZCkuZmlsdGVyKHZhbHVlLCBmaWx0ZXJQaHJhc2UpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5maWVsZC5nZXREYXRhVHlwZSgpID09PSBEYXRhVHlwZS5EQVRFKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuZmllbGQgYXMgRGF0ZUZpZWxkKS5maWx0ZXIodmFsdWUsIGZpbHRlclBocmFzZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdHNvcnQoZW50aXR5T25lOiBPcmlnaW5JdGVtRW50aXR5LCBlbnRpdHlUd286IE9yaWdpbkl0ZW1FbnRpdHksIGRpcmVjdGlvbjogYm9vbGVhbik6IG51bWJlciB7XG5cblx0XHRsZXQgdmFsdWVPbmUgPSBkaXJlY3Rpb24gPyB0aGlzLmZpZWxkLmdldFNvcnRWYWx1ZShlbnRpdHlPbmUpIDogdGhpcy5maWVsZC5nZXRTb3J0VmFsdWUoZW50aXR5VHdvKSxcblx0XHRcdHZhbHVlVHdvID0gZGlyZWN0aW9uID8gdGhpcy5maWVsZC5nZXRTb3J0VmFsdWUoZW50aXR5VHdvKSA6IHRoaXMuZmllbGQuZ2V0U29ydFZhbHVlKGVudGl0eU9uZSk7XG5cblx0XHRpZiAodGhpcy5maWVsZC5nZXREYXRhVHlwZSgpID09PSBEYXRhVHlwZS5OVU1CRVIpIHtcblx0XHRcdHJldHVybiAodGhpcy5maWVsZCBhcyBOdW1iZXJGaWVsZCkuc29ydCh2YWx1ZU9uZSwgdmFsdWVUd28pO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5maWVsZC5nZXREYXRhVHlwZSgpID09PSBEYXRhVHlwZS5CT09MRUFOKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuZmllbGQgYXMgQm9vbGVhbkZpZWxkKS5zb3J0KHZhbHVlT25lLCB2YWx1ZVR3byk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLmZpZWxkLmdldERhdGFUeXBlKCkgPT09IERhdGFUeXBlLlNUUklORykge1xuXHRcdFx0cmV0dXJuICh0aGlzLmZpZWxkIGFzIFN0cmluZ0ZpZWxkKS5zb3J0KHZhbHVlT25lLCB2YWx1ZVR3byk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLmZpZWxkLmdldERhdGFUeXBlKCkgPT09IERhdGFUeXBlLkRBVEUpIHtcblx0XHRcdHJldHVybiAodGhpcy5maWVsZCBhcyBEYXRlRmllbGQpLnNvcnQodmFsdWVPbmUsIHZhbHVlVHdvKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==