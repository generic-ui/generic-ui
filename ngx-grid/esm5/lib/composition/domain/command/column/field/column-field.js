/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ColumnField = /** @class */ (function () {
    function ColumnField(fieldId, accessor, dataType) {
        this.fieldId = fieldId;
        this.accessor = accessor;
        this.dataType = dataType;
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
    ColumnField.prototype.dataType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWZpZWxkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbW1hbmQvY29sdW1uL2ZpZWxkL2NvbHVtbi1maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBT0E7SUFRQyxxQkFBWSxPQUFzQixFQUMvQixRQUE2QixFQUM3QixRQUFrQjtRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsMkJBQUs7OztJQUFMO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsOEJBQVE7Ozs7SUFBUixVQUFTLE1BQXdCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsaUNBQVc7OztJQUFYO1FBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxpQ0FBVzs7O0lBQVg7UUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQztJQUVGLGtCQUFDO0FBQUQsQ0FBQyxBQWhDRCxJQWdDQzs7Ozs7OztJQTlCQSw4QkFBd0M7Ozs7O0lBRXhDLCtCQUErQzs7Ozs7SUFFL0MsK0JBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uRmllbGRJZCB9IGZyb20gJy4vY29sdW1uLWZpZWxkLmlkJztcbmltcG9ydCB7IENvbHVtbkZpZWxkQWNjZXNzb3IgfSBmcm9tICcuL2NvbHVtbi1maWVsZC1hY2Nlc3Nvcic7XG5cbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9kYXRhLXR5cGUvZGF0YS10eXBlJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZG9tYWluL3NvdXJjZS9jb21tYW5kL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuXG5cbmV4cG9ydCBjbGFzcyBDb2x1bW5GaWVsZCB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmaWVsZElkOiBDb2x1bW5GaWVsZElkO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYWNjZXNzb3I6IENvbHVtbkZpZWxkQWNjZXNzb3I7XG5cblx0cHJpdmF0ZSByZWFkb25seSBkYXRhVHlwZTogRGF0YVR5cGU7XG5cblx0Y29uc3RydWN0b3IoZmllbGRJZDogQ29sdW1uRmllbGRJZCxcblx0XHRcdFx0YWNjZXNzb3I6IENvbHVtbkZpZWxkQWNjZXNzb3IsXG5cdFx0XHRcdGRhdGFUeXBlOiBEYXRhVHlwZSkge1xuXHRcdHRoaXMuZmllbGRJZCA9IGZpZWxkSWQ7XG5cdFx0dGhpcy5hY2Nlc3NvciA9IGFjY2Vzc29yO1xuXHRcdHRoaXMuZGF0YVR5cGUgPSBkYXRhVHlwZTtcblx0fVxuXG5cdGdldElkKCk6IENvbHVtbkZpZWxkSWQge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkSWQ7XG5cdH1cblxuXHRnZXRWYWx1ZShlbnRpdHk6IE9yaWdpbkl0ZW1FbnRpdHkpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLmFjY2Vzc29yKGVudGl0eSk7XG5cdH1cblxuXHRnZXRBY2Nlc3NvcigpOiBDb2x1bW5GaWVsZEFjY2Vzc29yIHtcblx0XHRyZXR1cm4gdGhpcy5hY2Nlc3Nvcjtcblx0fVxuXG5cdGdldERhdGFUeXBlKCk6IERhdGFUeXBlIHtcblx0XHRyZXR1cm4gdGhpcy5kYXRhVHlwZTtcblx0fVxuXG59XG4iXX0=