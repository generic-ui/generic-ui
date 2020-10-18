/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataType } from './data/data-type';
export class Field {
    /**
     * @param {?} id
     * @param {?} dataField
     * @param {?} name
     * @return {?}
     */
    static of(id, dataField, name) {
        return new Field(id, dataField, name);
    }
    /**
     * @param {?} id
     * @param {?} field
     * @param {?} name
     */
    constructor(id, field, name) {
        this.id = id;
        this.field = field;
        this.name = name;
    }
    /**
     * @return {?}
     */
    getId() {
        return this.id;
    }
    /**
     * @return {?}
     */
    getKey() {
        return this.getId().toString();
    }
    /**
     * @return {?}
     */
    getDataType() {
        return this.field.getDataType();
    }
    /**
     * @return {?}
     */
    getName() {
        return this.name;
    }
    /**
     * @deprecated
     * @return {?}
     */
    getField() {
        return this.field;
    }
    /**
     * Probably should not be used.
     *
     * @deprecated
     * @return {?}
     */
    getAccessor() {
        return this.field.getAccessor();
    }
    /**
     * Probably should not be used.
     *
     * @deprecated
     * @return {?}
     */
    getAccessorMethod() {
        return this.field.getAccessorMethod();
    }
    /**
     * Probably should not be used.
     *
     * @deprecated
     * @return {?}
     */
    getSearchAccessorMethod() {
        return this.field.getSearchAccessorMethod();
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    getValue(entity) {
        return this.field.getValue(entity);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getDisplayValue(value) {
        return ((/** @type {?} */ (this.field))).getDisplayValue(value);
    }
    /**
     * Probably should not be used.
     *
     * @deprecated
     * @param {?} type
     * @return {?}
     */
    isSummaries(type) {
        return this.field.isSummaries(type);
    }
    /**
     * Probably should not be used.
     *
     * @deprecated
     * @return {?}
     */
    isSummariesEnabled() {
        return this.field.isSummariesEnabled();
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
    Field.prototype.id;
    /**
     * @type {?}
     * @private
     */
    Field.prototype.field;
    /**
     * @type {?}
     * @private
     */
    Field.prototype.name;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBVzVDLE1BQU0sT0FBTyxLQUFLOzs7Ozs7O0lBRWpCLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBVyxFQUFFLFNBQXlCLEVBQUUsSUFBWTtRQUM3RCxPQUFPLElBQUksS0FBSyxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7O0lBUUQsWUFBWSxFQUFXLEVBQ3BCLEtBQXFCLEVBQ3JCLElBQVk7UUFDZCxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0osT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0wsT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakMsQ0FBQzs7OztJQUVELE9BQU87UUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFLRCxRQUFRO1FBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7Ozs7Ozs7SUFPRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7Ozs7Ozs7SUFPRCxp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QUFBLElBQUksQ0FBQyxLQUFLLEVBQW1CLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ2hFO2FBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDekQsT0FBTyxDQUFDLG1CQUFBLElBQUksQ0FBQyxLQUFLLEVBQW9CLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ2pFO2FBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDeEQsT0FBTyxDQUFDLG1CQUFBLElBQUksQ0FBQyxLQUFLLEVBQW1CLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ2hFO2FBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDdEQsT0FBTyxDQUFDLG1CQUFBLElBQUksQ0FBQyxLQUFLLEVBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzlEO2FBQU07WUFDTixPQUFPLENBQUMsQ0FBQztTQUNUO0lBQ0YsQ0FBQztDQUVEOzs7Ozs7SUFqSUEsbUJBQTZCOzs7OztJQUU3QixzQkFBdUM7Ozs7O0lBRXZDLHFCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFGaWVsZFR5cGVzIH0gZnJvbSAnLi9kYXRhL2RhdGEtZmllbGQtdHlwZXMnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL2RhdGEvZGF0YS10eXBlJztcbmltcG9ydCB7IE51bWJlckRhdGFGaWVsZCB9IGZyb20gJy4vZGF0YS90eXBlL251bWJlci1kYXRhLWZpZWxkJztcbmltcG9ydCB7IEJvb2xlYW5EYXRhRmllbGQgfSBmcm9tICcuL2RhdGEvdHlwZS9ib29sZWFuLWRhdGEtZmllbGQnO1xuaW1wb3J0IHsgU3RyaW5nRGF0YUZpZWxkIH0gZnJvbSAnLi9kYXRhL3R5cGUvc3RyaW5nLWRhdGEtZmllbGQnO1xuaW1wb3J0IHsgRGF0ZURhdGFGaWVsZCB9IGZyb20gJy4vZGF0YS90eXBlL2RhdGUtZGF0YS1maWVsZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi9maWVsZC5pZCc7XG5cbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBTdW1tYXJpZXNUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3VtbWFyaWVzL2NvcmUvZG9tYWluL3N1bW1hcmllcy50eXBlJztcblxuXG5leHBvcnQgY2xhc3MgRmllbGQge1xuXG5cdHN0YXRpYyBvZihpZDogRmllbGRJZCwgZGF0YUZpZWxkOiBEYXRhRmllbGRUeXBlcywgbmFtZTogc3RyaW5nKTogRmllbGQge1xuXHRcdHJldHVybiBuZXcgRmllbGQoaWQsIGRhdGFGaWVsZCwgbmFtZSk7XG5cdH1cblxuXHRwcml2YXRlIHJlYWRvbmx5IGlkOiBGaWVsZElkO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZmllbGQ6IERhdGFGaWVsZFR5cGVzO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKGlkOiBGaWVsZElkLFxuXHRcdFx0XHRmaWVsZDogRGF0YUZpZWxkVHlwZXMsXG5cdFx0XHRcdG5hbWU6IHN0cmluZykge1xuXHRcdHRoaXMuaWQgPSBpZDtcblx0XHR0aGlzLmZpZWxkID0gZmllbGQ7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0fVxuXG5cdGdldElkKCk6IEZpZWxkSWQge1xuXHRcdHJldHVybiB0aGlzLmlkO1xuXHR9XG5cblx0Z2V0S2V5KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0SWQoKS50b1N0cmluZygpO1xuXHR9XG5cblx0Z2V0RGF0YVR5cGUoKTogRGF0YVR5cGUge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkLmdldERhdGFUeXBlKCk7XG5cdH1cblxuXHRnZXROYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAZGVwcmVjYXRlZFxuXHQgKi9cblx0Z2V0RmllbGQoKTogRGF0YUZpZWxkVHlwZXMge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkO1xuXHR9XG5cblx0LyoqXG5cdCAqIFByb2JhYmx5IHNob3VsZCBub3QgYmUgdXNlZC5cblx0ICpcblx0ICogQGRlcHJlY2F0ZWRcblx0ICovXG5cdGdldEFjY2Vzc29yKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGQuZ2V0QWNjZXNzb3IoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQcm9iYWJseSBzaG91bGQgbm90IGJlIHVzZWQuXG5cdCAqXG5cdCAqIEBkZXByZWNhdGVkXG5cdCAqL1xuXHRnZXRBY2Nlc3Nvck1ldGhvZCgpOiAoZW50aXR5OiBPcmlnaW5JdGVtRW50aXR5KSA9PiBhbnkge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkLmdldEFjY2Vzc29yTWV0aG9kKCk7XG5cdH1cblxuXHQvKipcblx0ICogUHJvYmFibHkgc2hvdWxkIG5vdCBiZSB1c2VkLlxuXHQgKlxuXHQgKiBAZGVwcmVjYXRlZFxuXHQgKi9cblx0Z2V0U2VhcmNoQWNjZXNzb3JNZXRob2QoKTogKGVudGl0eTogT3JpZ2luSXRlbUVudGl0eSkgPT4gYW55IHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZC5nZXRTZWFyY2hBY2Nlc3Nvck1ldGhvZCgpO1xuXHR9XG5cblx0Z2V0VmFsdWUoZW50aXR5OiBPcmlnaW5JdGVtRW50aXR5KTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZC5nZXRWYWx1ZShlbnRpdHkpO1xuXHR9XG5cblx0Z2V0RGlzcGxheVZhbHVlKHZhbHVlOiBhbnkpOiBhbnkge1xuXHRcdHJldHVybiAodGhpcy5maWVsZCBhcyBhbnkpLmdldERpc3BsYXlWYWx1ZSh2YWx1ZSk7XG5cdH1cblxuXHQvKipcblx0ICogUHJvYmFibHkgc2hvdWxkIG5vdCBiZSB1c2VkLlxuXHQgKlxuXHQgKiBAZGVwcmVjYXRlZFxuXHQgKi9cblx0aXNTdW1tYXJpZXModHlwZTogU3VtbWFyaWVzVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkLmlzU3VtbWFyaWVzKHR5cGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFByb2JhYmx5IHNob3VsZCBub3QgYmUgdXNlZC5cblx0ICpcblx0ICogQGRlcHJlY2F0ZWRcblx0ICovXG5cdGlzU3VtbWFyaWVzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZC5pc1N1bW1hcmllc0VuYWJsZWQoKTtcblx0fVxuXG5cdHNlYXJjaChpdGVtOiBPcmlnaW5JdGVtRW50aXR5LCBzZWFyY2hQaHJhc2U6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkLnNlYXJjaChpdGVtLCBzZWFyY2hQaHJhc2UpO1xuXHR9XG5cblx0ZmlsdGVyKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHksIGZpbHRlclBocmFzZTogYW55KTogYm9vbGVhbiB7XG5cblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuZmllbGQuZ2V0VmFsdWUoaXRlbSk7XG5cblx0XHRpZiAodGhpcy5maWVsZC5nZXREYXRhVHlwZSgpID09PSBEYXRhVHlwZS5OVU1CRVIpIHtcblx0XHRcdHJldHVybiAodGhpcy5maWVsZCBhcyBOdW1iZXJEYXRhRmllbGQpLmZpbHRlcih2YWx1ZSwgZmlsdGVyUGhyYXNlKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuZmllbGQuZ2V0RGF0YVR5cGUoKSA9PT0gRGF0YVR5cGUuQk9PTEVBTikge1xuXHRcdFx0cmV0dXJuICh0aGlzLmZpZWxkIGFzIEJvb2xlYW5EYXRhRmllbGQpLmZpbHRlcih2YWx1ZSwgZmlsdGVyUGhyYXNlKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuZmllbGQuZ2V0RGF0YVR5cGUoKSA9PT0gRGF0YVR5cGUuU1RSSU5HKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuZmllbGQgYXMgU3RyaW5nRGF0YUZpZWxkKS5maWx0ZXIodmFsdWUsIGZpbHRlclBocmFzZSk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLmZpZWxkLmdldERhdGFUeXBlKCkgPT09IERhdGFUeXBlLkRBVEUpIHtcblx0XHRcdHJldHVybiAodGhpcy5maWVsZCBhcyBEYXRlRGF0YUZpZWxkKS5maWx0ZXIodmFsdWUsIGZpbHRlclBocmFzZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdHNvcnQoZW50aXR5T25lOiBPcmlnaW5JdGVtRW50aXR5LCBlbnRpdHlUd286IE9yaWdpbkl0ZW1FbnRpdHksIGRpcmVjdGlvbjogYm9vbGVhbik6IG51bWJlciB7XG5cblx0XHRsZXQgdmFsdWVPbmUgPSBkaXJlY3Rpb24gPyB0aGlzLmZpZWxkLmdldFNvcnRWYWx1ZShlbnRpdHlPbmUpIDogdGhpcy5maWVsZC5nZXRTb3J0VmFsdWUoZW50aXR5VHdvKSxcblx0XHRcdHZhbHVlVHdvID0gZGlyZWN0aW9uID8gdGhpcy5maWVsZC5nZXRTb3J0VmFsdWUoZW50aXR5VHdvKSA6IHRoaXMuZmllbGQuZ2V0U29ydFZhbHVlKGVudGl0eU9uZSk7XG5cblx0XHRpZiAodGhpcy5maWVsZC5nZXREYXRhVHlwZSgpID09PSBEYXRhVHlwZS5OVU1CRVIpIHtcblx0XHRcdHJldHVybiAodGhpcy5maWVsZCBhcyBOdW1iZXJEYXRhRmllbGQpLnNvcnQodmFsdWVPbmUsIHZhbHVlVHdvKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuZmllbGQuZ2V0RGF0YVR5cGUoKSA9PT0gRGF0YVR5cGUuQk9PTEVBTikge1xuXHRcdFx0cmV0dXJuICh0aGlzLmZpZWxkIGFzIEJvb2xlYW5EYXRhRmllbGQpLnNvcnQodmFsdWVPbmUsIHZhbHVlVHdvKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuZmllbGQuZ2V0RGF0YVR5cGUoKSA9PT0gRGF0YVR5cGUuU1RSSU5HKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuZmllbGQgYXMgU3RyaW5nRGF0YUZpZWxkKS5zb3J0KHZhbHVlT25lLCB2YWx1ZVR3byk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLmZpZWxkLmdldERhdGFUeXBlKCkgPT09IERhdGFUeXBlLkRBVEUpIHtcblx0XHRcdHJldHVybiAodGhpcy5maWVsZCBhcyBEYXRlRGF0YUZpZWxkKS5zb3J0KHZhbHVlT25lLCB2YWx1ZVR3byk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=