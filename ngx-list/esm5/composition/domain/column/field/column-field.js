/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ColumnField = /** @class */ (function () {
    function ColumnField(fieldId, accessor, dataType, searchAccessor) {
        this.fieldId = fieldId;
        this.accessor = accessor;
        this.dataType = dataType;
        this.searchAccessor = searchAccessor;
    }
    /**
     * @return {?}
     */
    ColumnField.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.fieldId;
    };
    /**
     * @param {?} entity
     * @return {?}
     */
    ColumnField.prototype.getValue = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        return this.accessor(entity);
    };
    /**
     * @return {?}
     */
    ColumnField.prototype.getAccessor = /**
     * @return {?}
     */
    function () {
        return this.accessor;
    };
    /**
     * @return {?}
     */
    ColumnField.prototype.getSearchAccessor = /**
     * @return {?}
     */
    function () {
        return this.searchAccessor;
    };
    /**
     * @return {?}
     */
    ColumnField.prototype.getDataType = /**
     * @return {?}
     */
    function () {
        return this.dataType;
    };
    return ColumnField;
}());
export { ColumnField };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ColumnField.prototype.fieldId;
    /**
     * @type {?}
     * @private
     */
    ColumnField.prototype.accessor;
    /**
     * @type {?}
     * @private
     */
    ColumnField.prototype.searchAccessor;
    /**
     * @type {?}
     * @private
     */
    ColumnField.prototype.dataType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWZpZWxkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9kb21haW4vY29sdW1uL2ZpZWxkL2NvbHVtbi1maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBT0E7SUFVQyxxQkFBWSxPQUFzQixFQUMvQixRQUE2QixFQUM3QixRQUFrQixFQUNsQixjQUFtQztRQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsMkJBQUs7OztJQUFMO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsOEJBQVE7Ozs7SUFBUixVQUFTLE1BQXdCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsaUNBQVc7OztJQUFYO1FBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCx1Q0FBaUI7OztJQUFqQjtRQUNDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsaUNBQVc7OztJQUFYO1FBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7SUFFRixrQkFBQztBQUFELENBQUMsQUF4Q0QsSUF3Q0M7Ozs7Ozs7SUF0Q0EsOEJBQXdDOzs7OztJQUV4QywrQkFBK0M7Ozs7O0lBRS9DLHFDQUFxRDs7Ozs7SUFFckQsK0JBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uRmllbGRJZCB9IGZyb20gJy4vY29sdW1uLWZpZWxkLmlkJztcbmltcG9ydCB7IENvbHVtbkZpZWxkQWNjZXNzb3IgfSBmcm9tICcuL2NvbHVtbi1maWVsZC1hY2Nlc3Nvcic7XG5cbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2ZpZWxkL2RvbWFpbi9jb3JlL2ZpZWxkL2RhdGEvZGF0YS10eXBlJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcblxuXG5leHBvcnQgY2xhc3MgQ29sdW1uRmllbGQge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZmllbGRJZDogQ29sdW1uRmllbGRJZDtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGFjY2Vzc29yOiBDb2x1bW5GaWVsZEFjY2Vzc29yO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoQWNjZXNzb3I6IENvbHVtbkZpZWxkQWNjZXNzb3I7XG5cblx0cHJpdmF0ZSByZWFkb25seSBkYXRhVHlwZTogRGF0YVR5cGU7XG5cblx0Y29uc3RydWN0b3IoZmllbGRJZDogQ29sdW1uRmllbGRJZCxcblx0XHRcdFx0YWNjZXNzb3I6IENvbHVtbkZpZWxkQWNjZXNzb3IsXG5cdFx0XHRcdGRhdGFUeXBlOiBEYXRhVHlwZSxcblx0XHRcdFx0c2VhcmNoQWNjZXNzb3I6IENvbHVtbkZpZWxkQWNjZXNzb3IpIHtcblx0XHR0aGlzLmZpZWxkSWQgPSBmaWVsZElkO1xuXHRcdHRoaXMuYWNjZXNzb3IgPSBhY2Nlc3Nvcjtcblx0XHR0aGlzLmRhdGFUeXBlID0gZGF0YVR5cGU7XG5cdFx0dGhpcy5zZWFyY2hBY2Nlc3NvciA9IHNlYXJjaEFjY2Vzc29yO1xuXHR9XG5cblx0Z2V0SWQoKTogQ29sdW1uRmllbGRJZCB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGRJZDtcblx0fVxuXG5cdGdldFZhbHVlKGVudGl0eTogT3JpZ2luSXRlbUVudGl0eSk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuYWNjZXNzb3IoZW50aXR5KTtcblx0fVxuXG5cdGdldEFjY2Vzc29yKCk6IENvbHVtbkZpZWxkQWNjZXNzb3Ige1xuXHRcdHJldHVybiB0aGlzLmFjY2Vzc29yO1xuXHR9XG5cblx0Z2V0U2VhcmNoQWNjZXNzb3IoKTogQ29sdW1uRmllbGRBY2Nlc3NvciB7XG5cdFx0cmV0dXJuIHRoaXMuc2VhcmNoQWNjZXNzb3I7XG5cdH1cblxuXHRnZXREYXRhVHlwZSgpOiBEYXRhVHlwZSB7XG5cdFx0cmV0dXJuIHRoaXMuZGF0YVR5cGU7XG5cdH1cblxufVxuIl19