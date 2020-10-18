/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class BaseDataField {
    /**
     * @protected
     * @param {?} accessor
     * @param {?} dataType
     * @param {?} matchers
     */
    constructor(accessor, dataType, matchers) {
        this.accessor = accessor;
        this.dataType = dataType;
        this.matchers = matchers;
        if (typeof accessor === 'string') {
            this.accessorMethod = (/**
             * @param {?} entity
             * @return {?}
             */
            (entity) => entity.getData()[accessor]);
        }
        else if (typeof accessor === 'function') {
            this.accessorMethod = (/**
             * @param {?} entity
             * @return {?}
             */
            (entity) => accessor(entity.getData()));
        }
    }
    /**
     * @return {?}
     */
    getDataType() {
        return this.dataType;
    }
    /**
     * @return {?}
     */
    getAccessor() {
        return this.accessor;
    }
    /**
     * @return {?}
     */
    getAccessorMethod() {
        return this.accessorMethod;
    }
    /**
     * @return {?}
     */
    getMatchers() {
        return this.matchers;
    }
    /**
     * @return {?}
     */
    getSearchAccessorMethod() {
        /** @type {?} */
        let matcher;
        this.matchers
            .getSearchMatcher()
            .ifPresent((/**
         * @param {?} m
         * @return {?}
         */
        (m) => {
            matcher = m;
        }));
        if (matcher) {
            return (/**
             * @param {?} entity
             * @return {?}
             */
            (entity) => {
                /** @type {?} */
                const val = this.accessorMethod(entity);
                return matcher(val);
            });
        }
        else {
            return (/**
             * @param {?} entity
             * @return {?}
             */
            (entity) => {
                return this.accessorMethod(entity);
            });
        }
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    getValue(entity) {
        return this.accessorMethod(entity);
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    getSortValue(entity) {
        /** @type {?} */
        let value = this.accessorMethod(entity);
        this.matchers
            .getSortMatcher()
            .ifPresent((/**
         * @param {?} matcher
         * @return {?}
         */
        (matcher) => {
            value = matcher(value);
        }));
        return value;
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    getSearchValue(entity) {
        /** @type {?} */
        let value = this.accessorMethod(entity);
        this.matchers
            .getSearchMatcher()
            .ifPresent((/**
         * @param {?} matcher
         * @return {?}
         */
        (matcher) => {
            value = matcher(value);
        }));
        return value;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1kYXRhLWZpZWxkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmllbGQvY29yZS9kb21haW4vZmllbGQvZGF0YS9iYXNlLWRhdGEtZmllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQU1BLE1BQU0sT0FBZ0IsYUFBYTs7Ozs7OztJQVdsQyxZQUFzQixRQUFhLEVBQzVCLFFBQWtCLEVBQ2xCLFFBQXVCO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBRXpCLElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxjQUFjOzs7O1lBQUcsQ0FBQyxNQUF3QixFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUEsQ0FBQztTQUMvRTthQUFNLElBQUksT0FBTyxRQUFRLEtBQUssVUFBVSxFQUFFO1lBQzFDLElBQUksQ0FBQyxjQUFjOzs7O1lBQUcsQ0FBQyxNQUF3QixFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUEsQ0FBQztTQUMvRTtJQUVGLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxpQkFBaUI7UUFDaEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCx1QkFBdUI7O1lBRWxCLE9BQXdCO1FBRTVCLElBQUksQ0FBQyxRQUFRO2FBQ1gsZ0JBQWdCLEVBQUU7YUFDbEIsU0FBUzs7OztRQUFDLENBQUMsQ0FBbUIsRUFBRSxFQUFFO1lBQ2xDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDYixDQUFDLEVBQUMsQ0FBQztRQUVKLElBQUksT0FBTyxFQUFFO1lBQ1o7Ozs7WUFBTyxDQUFDLE1BQU0sRUFBRSxFQUFFOztzQkFDWCxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7Z0JBQ3ZDLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLENBQUMsRUFBQztTQUNGO2FBQU07WUFDTjs7OztZQUFPLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQyxDQUFDLEVBQUM7U0FDRjtJQUNGLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLE1BQXdCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxNQUF3Qjs7WUFDaEMsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO1FBRXZDLElBQUksQ0FBQyxRQUFRO2FBQ1gsY0FBYyxFQUFFO2FBQ2hCLFNBQVM7Ozs7UUFBQyxDQUFDLE9BQXlCLEVBQUUsRUFBRTtZQUN4QyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLENBQUMsRUFBQyxDQUFDO1FBRUosT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxNQUF3Qjs7WUFDbEMsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO1FBRXZDLElBQUksQ0FBQyxRQUFRO2FBQ1gsZ0JBQWdCLEVBQUU7YUFDbEIsU0FBUzs7OztRQUFDLENBQUMsT0FBeUIsRUFBRSxFQUFFO1lBQ3hDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsQ0FBQyxFQUFDLENBQUM7UUFFSixPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Q0FHRDs7Ozs7O0lBMUZBLGlDQUF3Qzs7Ozs7SUFFeEMsaUNBQW9DOzs7OztJQUVwQyx1Q0FBbUU7Ozs7O0lBRW5FLGlDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgRmllbGRNYXRjaGVyVHlwZSB9IGZyb20gJy4uLy4uL21hdGNoZXIvZmllbGQubWF0Y2hlci50eXBlJztcbmltcG9ydCB7IEZpZWxkTWF0Y2hlcnMgfSBmcm9tICcuLi8uLi9tYXRjaGVyL2ZpZWxkLm1hdGNoZXJzJztcblxuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VEYXRhRmllbGQge1xuXG5cdC8vIFRPRE9cblx0cHJpdmF0ZSByZWFkb25seSBhY2Nlc3Nvcjogc3RyaW5nIHwgYW55OyAvLyhyYXdEYXRhOiBhbnkpID0+IGFueTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGRhdGFUeXBlOiBEYXRhVHlwZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGFjY2Vzc29yTWV0aG9kOiAoZW50aXR5OiBPcmlnaW5JdGVtRW50aXR5KSA9PiBhbnk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBtYXRjaGVyczogRmllbGRNYXRjaGVycztcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoYWNjZXNzb3I6IGFueSxcblx0XHRcdFx0XHRcdCAgZGF0YVR5cGU6IERhdGFUeXBlLFxuXHRcdFx0XHRcdFx0ICBtYXRjaGVyczogRmllbGRNYXRjaGVycykge1xuXHRcdHRoaXMuYWNjZXNzb3IgPSBhY2Nlc3Nvcjtcblx0XHR0aGlzLmRhdGFUeXBlID0gZGF0YVR5cGU7XG5cdFx0dGhpcy5tYXRjaGVycyA9IG1hdGNoZXJzO1xuXG5cdFx0aWYgKHR5cGVvZiBhY2Nlc3NvciA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHRoaXMuYWNjZXNzb3JNZXRob2QgPSAoZW50aXR5OiBPcmlnaW5JdGVtRW50aXR5KSA9PiBlbnRpdHkuZ2V0RGF0YSgpW2FjY2Vzc29yXTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBhY2Nlc3NvciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0dGhpcy5hY2Nlc3Nvck1ldGhvZCA9IChlbnRpdHk6IE9yaWdpbkl0ZW1FbnRpdHkpID0+IGFjY2Vzc29yKGVudGl0eS5nZXREYXRhKCkpO1xuXHRcdH1cblxuXHR9XG5cblx0Z2V0RGF0YVR5cGUoKTogRGF0YVR5cGUge1xuXHRcdHJldHVybiB0aGlzLmRhdGFUeXBlO1xuXHR9XG5cblx0Z2V0QWNjZXNzb3IoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5hY2Nlc3Nvcjtcblx0fVxuXG5cdGdldEFjY2Vzc29yTWV0aG9kKCk6IChlbnRpdHk6IE9yaWdpbkl0ZW1FbnRpdHkpID0+IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuYWNjZXNzb3JNZXRob2Q7XG5cdH1cblxuXHRnZXRNYXRjaGVycygpOiBGaWVsZE1hdGNoZXJzIHtcblx0XHRyZXR1cm4gdGhpcy5tYXRjaGVycztcblx0fVxuXG5cdGdldFNlYXJjaEFjY2Vzc29yTWV0aG9kKCk6IChlbnRpdHk6IE9yaWdpbkl0ZW1FbnRpdHkpID0+IGFueSB7XG5cblx0XHRsZXQgbWF0Y2hlcjogKGk6IGFueSkgPT4gYW55O1xuXG5cdFx0dGhpcy5tYXRjaGVyc1xuXHRcdFx0LmdldFNlYXJjaE1hdGNoZXIoKVxuXHRcdFx0LmlmUHJlc2VudCgobTogRmllbGRNYXRjaGVyVHlwZSkgPT4ge1xuXHRcdFx0XHRtYXRjaGVyID0gbTtcblx0XHRcdH0pO1xuXG5cdFx0aWYgKG1hdGNoZXIpIHtcblx0XHRcdHJldHVybiAoZW50aXR5KSA9PiB7XG5cdFx0XHRcdGNvbnN0IHZhbCA9IHRoaXMuYWNjZXNzb3JNZXRob2QoZW50aXR5KTtcblx0XHRcdFx0cmV0dXJuIG1hdGNoZXIodmFsKTtcblx0XHRcdH07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAoZW50aXR5KSA9PiB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmFjY2Vzc29yTWV0aG9kKGVudGl0eSk7XG5cdFx0XHR9O1xuXHRcdH1cblx0fVxuXG5cdGdldFZhbHVlKGVudGl0eTogT3JpZ2luSXRlbUVudGl0eSk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuYWNjZXNzb3JNZXRob2QoZW50aXR5KTtcblx0fVxuXG5cdGdldFNvcnRWYWx1ZShlbnRpdHk6IE9yaWdpbkl0ZW1FbnRpdHkpOiBhbnkge1xuXHRcdGxldCB2YWx1ZSA9IHRoaXMuYWNjZXNzb3JNZXRob2QoZW50aXR5KTtcblxuXHRcdHRoaXMubWF0Y2hlcnNcblx0XHRcdC5nZXRTb3J0TWF0Y2hlcigpXG5cdFx0XHQuaWZQcmVzZW50KChtYXRjaGVyOiBGaWVsZE1hdGNoZXJUeXBlKSA9PiB7XG5cdFx0XHRcdHZhbHVlID0gbWF0Y2hlcih2YWx1ZSk7XG5cdFx0XHR9KTtcblxuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdGdldFNlYXJjaFZhbHVlKGVudGl0eTogT3JpZ2luSXRlbUVudGl0eSk6IGFueSB7XG5cdFx0bGV0IHZhbHVlID0gdGhpcy5hY2Nlc3Nvck1ldGhvZChlbnRpdHkpO1xuXG5cdFx0dGhpcy5tYXRjaGVyc1xuXHRcdFx0LmdldFNlYXJjaE1hdGNoZXIoKVxuXHRcdFx0LmlmUHJlc2VudCgobWF0Y2hlcjogRmllbGRNYXRjaGVyVHlwZSkgPT4ge1xuXHRcdFx0XHR2YWx1ZSA9IG1hdGNoZXIodmFsdWUpO1xuXHRcdFx0fSk7XG5cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXG59XG4iXX0=