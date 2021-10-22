/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
BaseDataField = /** @class */ (function () {
    function BaseDataField(accessor, dataType, matchers) {
        this.accessor = accessor;
        this.dataType = dataType;
        this.matchers = matchers;
        if (typeof accessor === 'string') {
            this.accessorMethod = (/**
             * @param {?} entity
             * @return {?}
             */
            function (entity) { return entity.getSourceItem()[accessor]; });
        }
        else if (typeof accessor === 'function') {
            this.accessorMethod = (/**
             * @param {?} entity
             * @return {?}
             */
            function (entity) { return accessor(entity.getSourceItem()); });
        }
        else {
            this.accessorMethod = (/**
             * @param {?} entity
             * @return {?}
             */
            function (entity) { return entity; });
        }
    }
    /**
     * @return {?}
     */
    BaseDataField.prototype.getDataType = /**
     * @return {?}
     */
    function () {
        return this.dataType;
    };
    /**
     * @return {?}
     */
    BaseDataField.prototype.getAccessor = /**
     * @return {?}
     */
    function () {
        return this.accessor;
    };
    /**
     * @return {?}
     */
    BaseDataField.prototype.getAccessorMethod = /**
     * @return {?}
     */
    function () {
        return this.accessorMethod;
    };
    /**
     * @return {?}
     */
    BaseDataField.prototype.getMatchers = /**
     * @return {?}
     */
    function () {
        return this.matchers;
    };
    /**
     * @return {?}
     */
    BaseDataField.prototype.getSearchAccessorMethod = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var matcher;
        this.matchers
            .getSearchMatcher()
            .ifPresent((/**
         * @param {?} m
         * @return {?}
         */
        function (m) {
            matcher = m;
        }));
        if (matcher) {
            return (/**
             * @param {?} entity
             * @return {?}
             */
            function (entity) {
                /** @type {?} */
                var val = _this.accessorMethod(entity);
                return matcher(val);
            });
        }
        else {
            return (/**
             * @param {?} entity
             * @return {?}
             */
            function (entity) {
                return _this.accessorMethod(entity);
            });
        }
    };
    /**
     * @param {?} entity
     * @return {?}
     */
    BaseDataField.prototype.getValue = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        return this.accessorMethod(entity);
    };
    /**
     * @param {?} entity
     * @return {?}
     */
    BaseDataField.prototype.getSortValue = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        /** @type {?} */
        var value = this.accessorMethod(entity);
        this.matchers
            .getSortMatcher()
            .ifPresent((/**
         * @param {?} matcher
         * @return {?}
         */
        function (matcher) {
            value = matcher(value);
        }));
        return value;
    };
    /**
     * @param {?} entity
     * @return {?}
     */
    BaseDataField.prototype.getSearchValue = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        /** @type {?} */
        var value = this.accessorMethod(entity);
        this.matchers
            .getSearchMatcher()
            .ifPresent((/**
         * @param {?} matcher
         * @return {?}
         */
        function (matcher) {
            value = matcher(value);
        }));
        return value;
    };
    return BaseDataField;
}());
/**
 * @abstract
 */
export { BaseDataField };
if (false) {
    /**
     * @type {?}
     * @private
     */
    BaseDataField.prototype.accessor;
    /**
     * @type {?}
     * @private
     */
    BaseDataField.prototype.dataType;
    /**
     * @type {?}
     * @private
     */
    BaseDataField.prototype.accessorMethod;
    /**
     * @type {?}
     * @private
     */
    BaseDataField.prototype.matchers;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1kYXRhLWZpZWxkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmllbGQvY29yZS9kb21haW4vZmllbGQvZGF0YS9iYXNlLWRhdGEtZmllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQU1BOzs7O0lBV0MsdUJBQXNCLFFBQWEsRUFDNUIsUUFBa0IsRUFDbEIsUUFBdUI7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFFekIsSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLEVBQUU7WUFDakMsSUFBSSxDQUFDLGNBQWM7Ozs7WUFBRyxVQUFDLE1BQXdCLElBQUssT0FBQSxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQWhDLENBQWdDLENBQUEsQ0FBQztTQUNyRjthQUFNLElBQUksT0FBTyxRQUFRLEtBQUssVUFBVSxFQUFFO1lBQzFDLElBQUksQ0FBQyxjQUFjOzs7O1lBQUcsVUFBQyxNQUF3QixJQUFLLE9BQUEsUUFBUSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFoQyxDQUFnQyxDQUFBLENBQUM7U0FDckY7YUFBTTtZQUNOLElBQUksQ0FBQyxjQUFjOzs7O1lBQUcsVUFBQyxNQUF3QixJQUFLLE9BQUEsTUFBTSxFQUFOLENBQU0sQ0FBQSxDQUFDO1NBQzNEO0lBRUYsQ0FBQzs7OztJQUVELG1DQUFXOzs7SUFBWDtRQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsbUNBQVc7OztJQUFYO1FBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCx5Q0FBaUI7OztJQUFqQjtRQUNDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsbUNBQVc7OztJQUFYO1FBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCwrQ0FBdUI7OztJQUF2QjtRQUFBLGlCQW9CQzs7WUFsQkksT0FBd0I7UUFFNUIsSUFBSSxDQUFDLFFBQVE7YUFDWCxnQkFBZ0IsRUFBRTthQUNsQixTQUFTOzs7O1FBQUMsVUFBQyxDQUFtQjtZQUM5QixPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsQ0FBQyxFQUFDLENBQUM7UUFFSixJQUFJLE9BQU8sRUFBRTtZQUNaOzs7O1lBQU8sVUFBQyxNQUFNOztvQkFDUCxHQUFHLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7Z0JBQ3ZDLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLENBQUMsRUFBQztTQUNGO2FBQU07WUFDTjs7OztZQUFPLFVBQUMsTUFBTTtnQkFDYixPQUFPLEtBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEMsQ0FBQyxFQUFDO1NBQ0Y7SUFDRixDQUFDOzs7OztJQUVELGdDQUFROzs7O0lBQVIsVUFBUyxNQUF3QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCxvQ0FBWTs7OztJQUFaLFVBQWEsTUFBd0I7O1lBQ2hDLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztRQUV2QyxJQUFJLENBQUMsUUFBUTthQUNYLGNBQWMsRUFBRTthQUNoQixTQUFTOzs7O1FBQUMsVUFBQyxPQUF5QjtZQUNwQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLENBQUMsRUFBQyxDQUFDO1FBRUosT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDOzs7OztJQUVELHNDQUFjOzs7O0lBQWQsVUFBZSxNQUF3Qjs7WUFDbEMsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO1FBRXZDLElBQUksQ0FBQyxRQUFRO2FBQ1gsZ0JBQWdCLEVBQUU7YUFDbEIsU0FBUzs7OztRQUFDLFVBQUMsT0FBeUI7WUFDcEMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixDQUFDLEVBQUMsQ0FBQztRQUVKLE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQUdGLG9CQUFDO0FBQUQsQ0FBQyxBQS9GRCxJQStGQzs7Ozs7Ozs7OztJQTVGQSxpQ0FBd0M7Ozs7O0lBRXhDLGlDQUFvQzs7Ozs7SUFFcEMsdUNBQW1FOzs7OztJQUVuRSxpQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vZGF0YS10eXBlJztcbmltcG9ydCB7IEZpZWxkTWF0Y2hlclR5cGUgfSBmcm9tICcuLi8uLi9tYXRjaGVyL2ZpZWxkLm1hdGNoZXIudHlwZSc7XG5pbXBvcnQgeyBGaWVsZE1hdGNoZXJzIH0gZnJvbSAnLi4vLi4vbWF0Y2hlci9maWVsZC5tYXRjaGVycyc7XG5cbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlRGF0YUZpZWxkIHtcblxuXHQvLyBUT0RPXG5cdHByaXZhdGUgcmVhZG9ubHkgYWNjZXNzb3I6IHN0cmluZyB8IGFueTsgLy8gKHJhd0RhdGE6IGFueSkgPT4gYW55O1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZGF0YVR5cGU6IERhdGFUeXBlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYWNjZXNzb3JNZXRob2Q6IChlbnRpdHk6IE9yaWdpbkl0ZW1FbnRpdHkpID0+IGFueTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IG1hdGNoZXJzOiBGaWVsZE1hdGNoZXJzO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcihhY2Nlc3NvcjogYW55LFxuXHRcdFx0XHRcdFx0ICBkYXRhVHlwZTogRGF0YVR5cGUsXG5cdFx0XHRcdFx0XHQgIG1hdGNoZXJzOiBGaWVsZE1hdGNoZXJzKSB7XG5cdFx0dGhpcy5hY2Nlc3NvciA9IGFjY2Vzc29yO1xuXHRcdHRoaXMuZGF0YVR5cGUgPSBkYXRhVHlwZTtcblx0XHR0aGlzLm1hdGNoZXJzID0gbWF0Y2hlcnM7XG5cblx0XHRpZiAodHlwZW9mIGFjY2Vzc29yID09PSAnc3RyaW5nJykge1xuXHRcdFx0dGhpcy5hY2Nlc3Nvck1ldGhvZCA9IChlbnRpdHk6IE9yaWdpbkl0ZW1FbnRpdHkpID0+IGVudGl0eS5nZXRTb3VyY2VJdGVtKClbYWNjZXNzb3JdO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIGFjY2Vzc29yID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHR0aGlzLmFjY2Vzc29yTWV0aG9kID0gKGVudGl0eTogT3JpZ2luSXRlbUVudGl0eSkgPT4gYWNjZXNzb3IoZW50aXR5LmdldFNvdXJjZUl0ZW0oKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuYWNjZXNzb3JNZXRob2QgPSAoZW50aXR5OiBPcmlnaW5JdGVtRW50aXR5KSA9PiBlbnRpdHk7XG5cdFx0fVxuXG5cdH1cblxuXHRnZXREYXRhVHlwZSgpOiBEYXRhVHlwZSB7XG5cdFx0cmV0dXJuIHRoaXMuZGF0YVR5cGU7XG5cdH1cblxuXHRnZXRBY2Nlc3NvcigpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmFjY2Vzc29yO1xuXHR9XG5cblx0Z2V0QWNjZXNzb3JNZXRob2QoKTogKGVudGl0eTogT3JpZ2luSXRlbUVudGl0eSkgPT4gYW55IHtcblx0XHRyZXR1cm4gdGhpcy5hY2Nlc3Nvck1ldGhvZDtcblx0fVxuXG5cdGdldE1hdGNoZXJzKCk6IEZpZWxkTWF0Y2hlcnMge1xuXHRcdHJldHVybiB0aGlzLm1hdGNoZXJzO1xuXHR9XG5cblx0Z2V0U2VhcmNoQWNjZXNzb3JNZXRob2QoKTogKGVudGl0eTogT3JpZ2luSXRlbUVudGl0eSkgPT4gYW55IHtcblxuXHRcdGxldCBtYXRjaGVyOiAoaTogYW55KSA9PiBhbnk7XG5cblx0XHR0aGlzLm1hdGNoZXJzXG5cdFx0XHQuZ2V0U2VhcmNoTWF0Y2hlcigpXG5cdFx0XHQuaWZQcmVzZW50KChtOiBGaWVsZE1hdGNoZXJUeXBlKSA9PiB7XG5cdFx0XHRcdG1hdGNoZXIgPSBtO1xuXHRcdFx0fSk7XG5cblx0XHRpZiAobWF0Y2hlcikge1xuXHRcdFx0cmV0dXJuIChlbnRpdHkpID0+IHtcblx0XHRcdFx0Y29uc3QgdmFsID0gdGhpcy5hY2Nlc3Nvck1ldGhvZChlbnRpdHkpO1xuXHRcdFx0XHRyZXR1cm4gbWF0Y2hlcih2YWwpO1xuXHRcdFx0fTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIChlbnRpdHkpID0+IHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuYWNjZXNzb3JNZXRob2QoZW50aXR5KTtcblx0XHRcdH07XG5cdFx0fVxuXHR9XG5cblx0Z2V0VmFsdWUoZW50aXR5OiBPcmlnaW5JdGVtRW50aXR5KTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5hY2Nlc3Nvck1ldGhvZChlbnRpdHkpO1xuXHR9XG5cblx0Z2V0U29ydFZhbHVlKGVudGl0eTogT3JpZ2luSXRlbUVudGl0eSk6IGFueSB7XG5cdFx0bGV0IHZhbHVlID0gdGhpcy5hY2Nlc3Nvck1ldGhvZChlbnRpdHkpO1xuXG5cdFx0dGhpcy5tYXRjaGVyc1xuXHRcdFx0LmdldFNvcnRNYXRjaGVyKClcblx0XHRcdC5pZlByZXNlbnQoKG1hdGNoZXI6IEZpZWxkTWF0Y2hlclR5cGUpID0+IHtcblx0XHRcdFx0dmFsdWUgPSBtYXRjaGVyKHZhbHVlKTtcblx0XHRcdH0pO1xuXG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0Z2V0U2VhcmNoVmFsdWUoZW50aXR5OiBPcmlnaW5JdGVtRW50aXR5KTogYW55IHtcblx0XHRsZXQgdmFsdWUgPSB0aGlzLmFjY2Vzc29yTWV0aG9kKGVudGl0eSk7XG5cblx0XHR0aGlzLm1hdGNoZXJzXG5cdFx0XHQuZ2V0U2VhcmNoTWF0Y2hlcigpXG5cdFx0XHQuaWZQcmVzZW50KChtYXRjaGVyOiBGaWVsZE1hdGNoZXJUeXBlKSA9PiB7XG5cdFx0XHRcdHZhbHVlID0gbWF0Y2hlcih2YWx1ZSk7XG5cdFx0XHR9KTtcblxuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cbn1cbiJdfQ==