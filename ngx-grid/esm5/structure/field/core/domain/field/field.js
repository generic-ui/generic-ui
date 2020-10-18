/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataType } from './data/data-type';
var Field = /** @class */ (function () {
    function Field(id, field, name) {
        this.id = id;
        this.field = field;
        this.name = name;
    }
    /**
     * @param {?} id
     * @param {?} dataField
     * @param {?} name
     * @return {?}
     */
    Field.of = /**
     * @param {?} id
     * @param {?} dataField
     * @param {?} name
     * @return {?}
     */
    function (id, dataField, name) {
        return new Field(id, dataField, name);
    };
    /**
     * @return {?}
     */
    Field.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.id;
    };
    /**
     * @return {?}
     */
    Field.prototype.getKey = /**
     * @return {?}
     */
    function () {
        return this.getId().toString();
    };
    /**
     * @return {?}
     */
    Field.prototype.getDataType = /**
     * @return {?}
     */
    function () {
        return this.field.getDataType();
    };
    /**
     * @return {?}
     */
    Field.prototype.getName = /**
     * @return {?}
     */
    function () {
        return this.name;
    };
    /**
     * @deprecated
     */
    /**
     * @deprecated
     * @return {?}
     */
    Field.prototype.getField = /**
     * @deprecated
     * @return {?}
     */
    function () {
        return this.field;
    };
    /**
     * Probably should not be used.
     *
     * @deprecated
     */
    /**
     * Probably should not be used.
     *
     * @deprecated
     * @return {?}
     */
    Field.prototype.getAccessor = /**
     * Probably should not be used.
     *
     * @deprecated
     * @return {?}
     */
    function () {
        return this.field.getAccessor();
    };
    /**
     * Probably should not be used.
     *
     * @deprecated
     */
    /**
     * Probably should not be used.
     *
     * @deprecated
     * @return {?}
     */
    Field.prototype.getAccessorMethod = /**
     * Probably should not be used.
     *
     * @deprecated
     * @return {?}
     */
    function () {
        return this.field.getAccessorMethod();
    };
    /**
     * Probably should not be used.
     *
     * @deprecated
     */
    /**
     * Probably should not be used.
     *
     * @deprecated
     * @return {?}
     */
    Field.prototype.getSearchAccessorMethod = /**
     * Probably should not be used.
     *
     * @deprecated
     * @return {?}
     */
    function () {
        return this.field.getSearchAccessorMethod();
    };
    /**
     * @param {?} entity
     * @return {?}
     */
    Field.prototype.getValue = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        return this.field.getValue(entity);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    Field.prototype.getDisplayValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return ((/** @type {?} */ (this.field))).getDisplayValue(value);
    };
    /**
     * Probably should not be used.
     *
     * @deprecated
     */
    /**
     * Probably should not be used.
     *
     * @deprecated
     * @param {?} type
     * @return {?}
     */
    Field.prototype.isSummaries = /**
     * Probably should not be used.
     *
     * @deprecated
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return this.field.isSummaries(type);
    };
    /**
     * Probably should not be used.
     *
     * @deprecated
     */
    /**
     * Probably should not be used.
     *
     * @deprecated
     * @return {?}
     */
    Field.prototype.isSummariesEnabled = /**
     * Probably should not be used.
     *
     * @deprecated
     * @return {?}
     */
    function () {
        return this.field.isSummariesEnabled();
    };
    /**
     * @param {?} item
     * @param {?} searchPhrase
     * @return {?}
     */
    Field.prototype.search = /**
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
    Field.prototype.filter = /**
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
    Field.prototype.sort = /**
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
    return Field;
}());
export { Field };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBVzVDO0lBWUMsZUFBWSxFQUFXLEVBQ3BCLEtBQXFCLEVBQ3JCLElBQVk7UUFDZCxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2xCLENBQUM7Ozs7Ozs7SUFoQk0sUUFBRTs7Ozs7O0lBQVQsVUFBVSxFQUFXLEVBQUUsU0FBeUIsRUFBRSxJQUFZO1FBQzdELE9BQU8sSUFBSSxLQUFLLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7O0lBZ0JELHFCQUFLOzs7SUFBTDtRQUNDLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQsc0JBQU07OztJQUFOO1FBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELDJCQUFXOzs7SUFBWDtRQUNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsdUJBQU87OztJQUFQO1FBQ0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCx3QkFBUTs7OztJQUFSO1FBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0gsMkJBQVc7Ozs7OztJQUFYO1FBQ0MsT0FBTyxJ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bXBvcnQgeyBEYXRhRmllbGRUeXBlcyB9IGZyb20gJy4vZGF0YS9kYXRhLWZpZWxkLXR5cGVzJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi9kYXRhL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBOdW1iZXJEYXRhRmllbGQgfSBmcm9tICcuL2RhdGEvdHlwZS9udW1iZXItZGF0YS1maWVsZCc7XG5pbXBvcnQgeyBCb29sZWFuRGF0YUZpZWxkIH0gZnJvbSAnLi9kYXRhL3R5cGUvYm9vbGVhbi1kYXRhLWZpZWxkJztcbmltcG9ydCB7IFN0cmluZ0RhdGFGaWVsZCB9IGZyb20gJy4vZGF0YS90eXBlL3N0cmluZy1kYXRhLWZpZWxkJztcbmltcG9ydCB7IERhdGVEYXRhRmllbGQgfSBmcm9tICcuL2RhdGEvdHlwZS9kYXRlLWRhdGEtZmllbGQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4vZmllbGQuaWQnO1xuXG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgU3VtbWFyaWVzVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL3N1bW1hcmllcy9jb3JlL2RvbWFpbi9zdW1tYXJpZXMudHlwZSc7XG5cblxuZXhwb3J0IGNsYXNzIEZpZWxkIHtcblxuXHRzdGF0aWMgb2YoaWQ6IEZpZWxkSWQsIGRhdGFGaWVsZDogRGF0YUZpZWxkVHlwZXMsIG5hbWU6IHN0cmluZyk6IEZpZWxkIHtcblx0XHRyZXR1cm4gbmV3IEZpZWxkKGlkLCBkYXRhRmllbGQsIG5hbWUpO1xuXHR9XG5cblx0cHJpdmF0ZSByZWFkb25seSBpZDogRmllbGRJZDtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkOiBEYXRhRmllbGRUeXBlcztcblxuXHRwcml2YXRlIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihpZDogRmllbGRJZCxcblx0XHRcdFx0ZmllbGQ6IERhdGFGaWVsZFR5cGVzLFxuXHRcdFx0XHRuYW1lOiBzdHJpbmcpIHtcblx0XHR0aGlzLmlkID0gaWQ7XG5cdFx0dGhpcy5maWVsZCA9IGZpZWxkO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdH1cblxuXHRnZXRJZCgpOiBGaWVsZElkIHtcblx0XHRyZXR1cm4gdGhpcy5pZDtcblx0fVxuXG5cdGdldEtleSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmdldElkKCkudG9TdHJpbmcoKTtcblx0fVxuXG5cdGdldERhdGFUeXBlKCk6IERhdGFUeXBlIHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZC5nZXREYXRhVHlwZSgpO1xuXHR9XG5cblx0Z2V0TmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5hbWU7XG5cdH1cblxuXHQvKipcblx0ICogQGRlcHJlY2F0ZWRcblx0ICovXG5cdGdldEZpZWxkKCk6IERhdGFGaWVsZFR5cGVzIHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBQcm9iYWJseSBzaG91bGQgbm90IGJlIHVzZWQuXG5cdCAqXG5cdCAqIEBkZXByZWNhdGVkXG5cdCAqL1xuXHRnZXRBY2Nlc3NvcigpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkLmdldEFjY2Vzc29yKCk7XG5cdH1cblxuXHQvKipcblx0ICogUHJvYmFibHkgc2hvdWxkIG5vdCBiZSB1c2VkLlxuXHQgKlxuXHQgKiBAZGVwcmVjYXRlZFxuXHQgKi9cblx0Z2V0QWNjZXNzb3JNZXRob2QoKTogKGVudGl0eTogT3JpZ2luSXRlbUVudGl0eSkgPT4gYW55IHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZC5nZXRBY2Nlc3Nvck1ldGhvZCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFByb2JhYmx5IHNob3VsZCBub3QgYmUgdXNlZC5cblx0ICpcblx0ICogQGRlcHJlY2F0ZWRcblx0ICovXG5cdGdldFNlYXJjaEFjY2Vzc29yTWV0aG9kKCk6IChlbnRpdHk6IE9yaWdpbkl0ZW1FbnRpdHkpID0+IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGQuZ2V0U2VhcmNoQWNjZXNzb3JNZXRob2QoKTtcblx0fVxuXG5cdGdldFZhbHVlKGVudGl0eTogT3JpZ2luSXRlbUVudGl0eSk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGQuZ2V0VmFsdWUoZW50aXR5KTtcblx0fVxuXG5cdGdldERpc3BsYXlWYWx1ZSh2YWx1ZTogYW55KTogYW55IHtcblx0XHRyZXR1cm4gKHRoaXMuZmllbGQgYXMgYW55KS5nZXREaXNwbGF5VmFsdWUodmFsdWUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFByb2JhYmx5IHNob3VsZCBub3QgYmUgdXNlZC5cblx0ICpcblx0ICogQGRlcHJlY2F0ZWRcblx0ICovXG5cdGlzU3VtbWFyaWVzKHR5cGU6IFN1bW1hcmllc1R5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZC5pc1N1bW1hcmllcyh0eXBlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQcm9iYWJseSBzaG91bGQgbm90IGJlIHVzZWQuXG5cdCAqXG5cdCAqIEBkZXByZWNhdGVkXG5cdCAqL1xuXHRpc1N1bW1hcmllc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGQuaXNTdW1tYXJpZXNFbmFibGVkKCk7XG5cdH1cblxuXHRzZWFyY2goaXRlbTogT3JpZ2luSXRlbUVudGl0eSwgc2VhcmNoUGhyYXNlOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZC5zZWFyY2goaXRlbSwgc2VhcmNoUGhyYXNlKTtcblx0fVxuXG5cdGZpbHRlcihpdGVtOiBPcmlnaW5JdGVtRW50aXR5LCBmaWx0ZXJQaHJhc2U6IGFueSk6IGJvb2xlYW4ge1xuXG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmZpZWxkLmdldFZhbHVlKGl0ZW0pO1xuXG5cdFx0aWYgKHRoaXMuZmllbGQuZ2V0RGF0YVR5cGUoKSA9PT0gRGF0YVR5cGUuTlVNQkVSKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuZmllbGQgYXMgTnVtYmVyRGF0YUZpZWxkKS5maWx0ZXIodmFsdWUsIGZpbHRlclBocmFzZSk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLmZpZWxkLmdldERhdGFUeXBlKCkgPT09IERhdGFUeXBlLkJPT0xFQU4pIHtcblx0XHRcdHJldHVybiAodGhpcy5maWVsZCBhcyBCb29sZWFuRGF0YUZpZWxkKS5maWx0ZXIodmFsdWUsIGZpbHRlclBocmFzZSk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLmZpZWxkLmdldERhdGFUeXBlKCkgPT09IERhdGFUeXBlLlNUUklORykge1xuXHRcdFx0cmV0dXJuICh0aGlzLmZpZWxkIGFzIFN0cmluZ0RhdGFGaWVsZCkuZmlsdGVyKHZhbHVlLCBmaWx0ZXJQaHJhc2UpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5maWVsZC5nZXREYXRhVHlwZSgpID09PSBEYXRhVHlwZS5EQVRFKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuZmllbGQgYXMgRGF0ZURhdGFGaWVsZCkuZmlsdGVyKHZhbHVlLCBmaWx0ZXJQaHJhc2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRzb3J0KGVudGl0eU9uZTogT3JpZ2luSXRlbUVudGl0eSwgZW50aXR5VHdvOiBPcmlnaW5JdGVtRW50aXR5LCBkaXJlY3Rpb246IGJvb2xlYW4pOiBudW1iZXIge1xuXG5cdFx0bGV0IHZhbHVlT25lID0gZGlyZWN0aW9uID8gdGhpcy5maWVsZC5nZXRTb3J0VmFsdWUoZW50aXR5T25lKSA6IHRoaXMuZmllbGQuZ2V0U29ydFZhbHVlKGVudGl0eVR3byksXG5cdFx0XHR2YWx1ZVR3byA9IGRpcmVjdGlvbiA/IHRoaXMuZmllbGQuZ2V0U29ydFZhbHVlKGVudGl0eVR3bykgOiB0aGlzLmZpZWxkLmdldFNvcnRWYWx1ZShlbnRpdHlPbmUpO1xuXG5cdFx0aWYgKHRoaXMuZmllbGQuZ2V0RGF0YVR5cGUoKSA9PT0gRGF0YVR5cGUuTlVNQkVSKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuZmllbGQgYXMgTnVtYmVyRGF0YUZpZWxkKS5zb3J0KHZhbHVlT25lLCB2YWx1ZVR3byk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLmZpZWxkLmdldERhdGFUeXBlKCkgPT09IERhdGFUeXBlLkJPT0xFQU4pIHtcblx0XHRcdHJldHVybiAodGhpcy5maWVsZCBhcyBCb29sZWFuRGF0YUZpZWxkKS5zb3J0KHZhbHVlT25lLCB2YWx1ZVR3byk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLmZpZWxkLmdldERhdGFUeXBlKCkgPT09IERhdGFUeXBlLlNUUklORykge1xuXHRcdFx0cmV0dXJuICh0aGlzLmZpZWxkIGFzIFN0cmluZ0RhdGFGaWVsZCkuc29ydCh2YWx1ZU9uZSwgdmFsdWVUd28pO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5maWVsZC5nZXREYXRhVHlwZSgpID09PSBEYXRhVHlwZS5EQVRFKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuZmllbGQgYXMgRGF0ZURhdGFGaWVsZCkuc29ydCh2YWx1ZU9uZSwgdmFsdWVUd28pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cdH1cblxufVxuIl19