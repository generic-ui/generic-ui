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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWVsZC9kb21haW4vY29yZS9maWVsZC9maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBVzVDO0lBWUMsZUFBWSxFQUFXLEVBQ3BCLEtBQXFCLEVBQ3JCLElBQVk7UUFDZCxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2xCLENBQUM7Ozs7Ozs7SUFoQk0sUUFBRTs7Ozs7O0lBQVQsVUFBVSxFQUFXLEVBQUUsU0FBeUIsRUFBRSxJQUFZO1FBQzdELE9BQU8sSUFBSSxLQUFLLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7O0lBZ0JELHFCQUFLOzs7SUFBTDtRQUNDLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQsc0JBQU07OztJQUFOO1FBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELDJCQUFXOzs7SUFBWDtRQUNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsdUJBQU87OztJQUFQO1FBQ0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCx3QkFBUTs7OztJQUFSO1FBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0gsMkJBQVc7Ozs7OztJQUFYO1FBQ0MsT0FBTyxJ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bXBvcnQgeyBEYXRhRmllbGRUeXBlcyB9IGZyb20gJy4vZGF0YS9kYXRhLWZpZWxkLXR5cGVzJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi9kYXRhL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBOdW1iZXJEYXRhRmllbGQgfSBmcm9tICcuL2RhdGEvdHlwZS9udW1iZXItZGF0YS1maWVsZCc7XG5pbXBvcnQgeyBCb29sZWFuRGF0YUZpZWxkIH0gZnJvbSAnLi9kYXRhL3R5cGUvYm9vbGVhbi1kYXRhLWZpZWxkJztcbmltcG9ydCB7IFN0cmluZ0RhdGFGaWVsZCB9IGZyb20gJy4vZGF0YS90eXBlL3N0cmluZy1kYXRhLWZpZWxkJztcbmltcG9ydCB7IERhdGVEYXRhRmllbGQgfSBmcm9tICcuL2RhdGEvdHlwZS9kYXRlLWRhdGEtZmllbGQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4vZmllbGQuaWQnO1xuXG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IFN1bW1hcmllc1R5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdW1tYXJpZXMvc3VtbWFyaWVzLnR5cGUnO1xuXG5cbmV4cG9ydCBjbGFzcyBGaWVsZCB7XG5cblx0c3RhdGljIG9mKGlkOiBGaWVsZElkLCBkYXRhRmllbGQ6IERhdGFGaWVsZFR5cGVzLCBuYW1lOiBzdHJpbmcpOiBGaWVsZCB7XG5cdFx0cmV0dXJuIG5ldyBGaWVsZChpZCwgZGF0YUZpZWxkLCBuYW1lKTtcblx0fVxuXG5cdHByaXZhdGUgcmVhZG9ubHkgaWQ6IEZpZWxkSWQ7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmaWVsZDogRGF0YUZpZWxkVHlwZXM7XG5cblx0cHJpdmF0ZSByZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoaWQ6IEZpZWxkSWQsXG5cdFx0XHRcdGZpZWxkOiBEYXRhRmllbGRUeXBlcyxcblx0XHRcdFx0bmFtZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5pZCA9IGlkO1xuXHRcdHRoaXMuZmllbGQgPSBmaWVsZDtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHR9XG5cblx0Z2V0SWQoKTogRmllbGRJZCB7XG5cdFx0cmV0dXJuIHRoaXMuaWQ7XG5cdH1cblxuXHRnZXRLZXkoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRJZCgpLnRvU3RyaW5nKCk7XG5cdH1cblxuXHRnZXREYXRhVHlwZSgpOiBEYXRhVHlwZSB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGQuZ2V0RGF0YVR5cGUoKTtcblx0fVxuXG5cdGdldE5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBkZXByZWNhdGVkXG5cdCAqL1xuXHRnZXRGaWVsZCgpOiBEYXRhRmllbGRUeXBlcyB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGQ7XG5cdH1cblxuXHQvKipcblx0ICogUHJvYmFibHkgc2hvdWxkIG5vdCBiZSB1c2VkLlxuXHQgKlxuXHQgKiBAZGVwcmVjYXRlZFxuXHQgKi9cblx0Z2V0QWNjZXNzb3IoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZC5nZXRBY2Nlc3NvcigpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFByb2JhYmx5IHNob3VsZCBub3QgYmUgdXNlZC5cblx0ICpcblx0ICogQGRlcHJlY2F0ZWRcblx0ICovXG5cdGdldEFjY2Vzc29yTWV0aG9kKCk6IChlbnRpdHk6IE9yaWdpbkl0ZW1FbnRpdHkpID0+IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGQuZ2V0QWNjZXNzb3JNZXRob2QoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQcm9iYWJseSBzaG91bGQgbm90IGJlIHVzZWQuXG5cdCAqXG5cdCAqIEBkZXByZWNhdGVkXG5cdCAqL1xuXHRnZXRTZWFyY2hBY2Nlc3Nvck1ldGhvZCgpOiAoZW50aXR5OiBPcmlnaW5JdGVtRW50aXR5KSA9PiBhbnkge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkLmdldFNlYXJjaEFjY2Vzc29yTWV0aG9kKCk7XG5cdH1cblxuXHRnZXRWYWx1ZShlbnRpdHk6IE9yaWdpbkl0ZW1FbnRpdHkpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkLmdldFZhbHVlKGVudGl0eSk7XG5cdH1cblxuXHRnZXREaXNwbGF5VmFsdWUodmFsdWU6IGFueSk6IGFueSB7XG5cdFx0cmV0dXJuICh0aGlzLmZpZWxkIGFzIGFueSkuZ2V0RGlzcGxheVZhbHVlKHZhbHVlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQcm9iYWJseSBzaG91bGQgbm90IGJlIHVzZWQuXG5cdCAqXG5cdCAqIEBkZXByZWNhdGVkXG5cdCAqL1xuXHRpc1N1bW1hcmllcyh0eXBlOiBTdW1tYXJpZXNUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGQuaXNTdW1tYXJpZXModHlwZSk7XG5cdH1cblxuXHQvKipcblx0ICogUHJvYmFibHkgc2hvdWxkIG5vdCBiZSB1c2VkLlxuXHQgKlxuXHQgKiBAZGVwcmVjYXRlZFxuXHQgKi9cblx0aXNTdW1tYXJpZXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkLmlzU3VtbWFyaWVzRW5hYmxlZCgpO1xuXHR9XG5cblx0c2VhcmNoKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHksIHNlYXJjaFBocmFzZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGQuc2VhcmNoKGl0ZW0sIHNlYXJjaFBocmFzZSk7XG5cdH1cblxuXHRmaWx0ZXIoaXRlbTogT3JpZ2luSXRlbUVudGl0eSwgZmlsdGVyUGhyYXNlOiBhbnkpOiBib29sZWFuIHtcblxuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5maWVsZC5nZXRWYWx1ZShpdGVtKTtcblxuXHRcdGlmICh0aGlzLmZpZWxkLmdldERhdGFUeXBlKCkgPT09IERhdGFUeXBlLk5VTUJFUikge1xuXHRcdFx0cmV0dXJuICh0aGlzLmZpZWxkIGFzIE51bWJlckRhdGFGaWVsZCkuZmlsdGVyKHZhbHVlLCBmaWx0ZXJQaHJhc2UpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5maWVsZC5nZXREYXRhVHlwZSgpID09PSBEYXRhVHlwZS5CT09MRUFOKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuZmllbGQgYXMgQm9vbGVhbkRhdGFGaWVsZCkuZmlsdGVyKHZhbHVlLCBmaWx0ZXJQaHJhc2UpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5maWVsZC5nZXREYXRhVHlwZSgpID09PSBEYXRhVHlwZS5TVFJJTkcpIHtcblx0XHRcdHJldHVybiAodGhpcy5maWVsZCBhcyBTdHJpbmdEYXRhRmllbGQpLmZpbHRlcih2YWx1ZSwgZmlsdGVyUGhyYXNlKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuZmllbGQuZ2V0RGF0YVR5cGUoKSA9PT0gRGF0YVR5cGUuREFURSkge1xuXHRcdFx0cmV0dXJuICh0aGlzLmZpZWxkIGFzIERhdGVEYXRhRmllbGQpLmZpbHRlcih2YWx1ZSwgZmlsdGVyUGhyYXNlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cblx0c29ydChlbnRpdHlPbmU6IE9yaWdpbkl0ZW1FbnRpdHksIGVudGl0eVR3bzogT3JpZ2luSXRlbUVudGl0eSwgZGlyZWN0aW9uOiBib29sZWFuKTogbnVtYmVyIHtcblxuXHRcdGxldCB2YWx1ZU9uZSA9IGRpcmVjdGlvbiA/IHRoaXMuZmllbGQuZ2V0U29ydFZhbHVlKGVudGl0eU9uZSkgOiB0aGlzLmZpZWxkLmdldFNvcnRWYWx1ZShlbnRpdHlUd28pLFxuXHRcdFx0dmFsdWVUd28gPSBkaXJlY3Rpb24gPyB0aGlzLmZpZWxkLmdldFNvcnRWYWx1ZShlbnRpdHlUd28pIDogdGhpcy5maWVsZC5nZXRTb3J0VmFsdWUoZW50aXR5T25lKTtcblxuXHRcdGlmICh0aGlzLmZpZWxkLmdldERhdGFUeXBlKCkgPT09IERhdGFUeXBlLk5VTUJFUikge1xuXHRcdFx0cmV0dXJuICh0aGlzLmZpZWxkIGFzIE51bWJlckRhdGFGaWVsZCkuc29ydCh2YWx1ZU9uZSwgdmFsdWVUd28pO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5maWVsZC5nZXREYXRhVHlwZSgpID09PSBEYXRhVHlwZS5CT09MRUFOKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuZmllbGQgYXMgQm9vbGVhbkRhdGFGaWVsZCkuc29ydCh2YWx1ZU9uZSwgdmFsdWVUd28pO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5maWVsZC5nZXREYXRhVHlwZSgpID09PSBEYXRhVHlwZS5TVFJJTkcpIHtcblx0XHRcdHJldHVybiAodGhpcy5maWVsZCBhcyBTdHJpbmdEYXRhRmllbGQpLnNvcnQodmFsdWVPbmUsIHZhbHVlVHdvKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuZmllbGQuZ2V0RGF0YVR5cGUoKSA9PT0gRGF0YVR5cGUuREFURSkge1xuXHRcdFx0cmV0dXJuICh0aGlzLmZpZWxkIGFzIERhdGVEYXRhRmllbGQpLnNvcnQodmFsdWVPbmUsIHZhbHVlVHdvKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==