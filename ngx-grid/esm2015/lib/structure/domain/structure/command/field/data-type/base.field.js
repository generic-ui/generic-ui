/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class BaseField {
    /**
     * @protected
     * @param {?} id
     * @param {?} accessor
     * @param {?} dataType
     * @param {?} matchers
     */
    constructor(id, accessor, dataType, matchers) {
        this.id = id;
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
    getId() {
        return this.id;
    }
    /**
     * @return {?}
     */
    getKey() {
        return this.getId().getId();
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
    BaseField.prototype.id;
    /**
     * @type {?}
     * @private
     */
    BaseField.prototype.accessor;
    /**
     * @type {?}
     * @private
     */
    BaseField.prototype.dataType;
    /**
     * @type {?}
     * @private
     */
    BaseField.prototype.accessorMethod;
    /**
     * @type {?}
     * @private
     */
    BaseField.prototype.matchers;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5maWVsZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZGF0YS10eXBlL2Jhc2UuZmllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQU1BLE1BQU0sT0FBZ0IsU0FBUzs7Ozs7Ozs7SUFhOUIsWUFBc0IsRUFBVyxFQUMxQixRQUFhLEVBQ2IsUUFBa0IsRUFDbEIsUUFBdUI7UUFDN0IsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUV6QixJQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsRUFBRTtZQUNqQyxJQUFJLENBQUMsY0FBYzs7OztZQUFHLENBQUMsTUFBd0IsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFBLENBQUM7U0FDL0U7YUFBTSxJQUFJLE9BQU8sUUFBUSxLQUFLLFVBQVUsRUFBRTtZQUMxQyxJQUFJLENBQUMsY0FBYzs7OztZQUFHLENBQUMsTUFBd0IsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBLENBQUM7U0FDL0U7SUFFRixDQUFDOzs7O0lBRUQsS0FBSztRQUNKLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQsTUFBTTtRQUNMLE9BQU8sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxpQkFBaUI7UUFDaEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCx1QkFBdUI7O1lBRWxCLE9BQXdCO1FBRTVCLElBQUksQ0FBQyxRQUFRO2FBQ1gsZ0JBQWdCLEVBQUU7YUFDbEIsU0FBUzs7OztRQUFDLENBQUMsQ0FBbUIsRUFBRSxFQUFFO1lBQ2xDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDYixDQUFDLEVBQUMsQ0FBQztRQUVKLElBQUksT0FBTyxFQUFFO1lBQ1o7Ozs7WUFBTyxDQUFDLE1BQU0sRUFBRSxFQUFFOztzQkFDWCxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7Z0JBQ3ZDLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLENBQUMsRUFBQztTQUNGO2FBQU07WUFDTjs7OztZQUFPLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQyxDQUFDLEVBQUM7U0FDRjtJQUNGLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLE1BQXdCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxNQUF3Qjs7WUFDaEMsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO1FBRXZDLElBQUksQ0FBQyxRQUFRO2FBQ1gsY0FBYyxFQUFFO2FBQ2hCLFNBQVM7Ozs7UUFBQyxDQUFDLE9BQXlCLEVBQUUsRUFBRTtZQUN4QyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLENBQUMsRUFBQyxDQUFDO1FBRUosT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxNQUF3Qjs7WUFDbEMsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO1FBRXZDLElBQUksQ0FBQyxRQUFRO2FBQ1gsZ0JBQWdCLEVBQUU7YUFDbEIsU0FBUzs7OztRQUFDLENBQUMsT0FBeUIsRUFBRSxFQUFFO1lBQ3hDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsQ0FBQyxFQUFDLENBQUM7UUFFSixPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Q0FHRDs7Ozs7O0lBdkdBLHVCQUE2Qjs7Ozs7SUFHN0IsNkJBQXdDOzs7OztJQUV4Qyw2QkFBb0M7Ozs7O0lBRXBDLG1DQUFtRTs7Ozs7SUFFbkUsNkJBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4vZmllbGQuaWQnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvbW1hbmQvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBGaWVsZE1hdGNoZXJUeXBlIH0gZnJvbSAnLi4vbWF0Y2hlci9maWVsZC5tYXRjaGVyLnR5cGUnO1xuaW1wb3J0IHsgRmllbGRNYXRjaGVycyB9IGZyb20gJy4uL21hdGNoZXIvZmllbGQubWF0Y2hlcnMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUZpZWxkIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGlkOiBGaWVsZElkO1xuXG5cdC8vIFRPRE9cblx0cHJpdmF0ZSByZWFkb25seSBhY2Nlc3Nvcjogc3RyaW5nIHwgYW55OyAvLyhyYXdEYXRhOiBhbnkpID0+IGFueTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGRhdGFUeXBlOiBEYXRhVHlwZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGFjY2Vzc29yTWV0aG9kOiAoZW50aXR5OiBPcmlnaW5JdGVtRW50aXR5KSA9PiBhbnk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBtYXRjaGVyczogRmllbGRNYXRjaGVycztcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoaWQ6IEZpZWxkSWQsXG5cdFx0XHRcdFx0XHQgIGFjY2Vzc29yOiBhbnksXG5cdFx0XHRcdFx0XHQgIGRhdGFUeXBlOiBEYXRhVHlwZSxcblx0XHRcdFx0XHRcdCAgbWF0Y2hlcnM6IEZpZWxkTWF0Y2hlcnMpIHtcblx0XHR0aGlzLmlkID0gaWQ7XG5cdFx0dGhpcy5hY2Nlc3NvciA9IGFjY2Vzc29yO1xuXHRcdHRoaXMuZGF0YVR5cGUgPSBkYXRhVHlwZTtcblx0XHR0aGlzLm1hdGNoZXJzID0gbWF0Y2hlcnM7XG5cblx0XHRpZiAodHlwZW9mIGFjY2Vzc29yID09PSAnc3RyaW5nJykge1xuXHRcdFx0dGhpcy5hY2Nlc3Nvck1ldGhvZCA9IChlbnRpdHk6IE9yaWdpbkl0ZW1FbnRpdHkpID0+IGVudGl0eS5nZXREYXRhKClbYWNjZXNzb3JdO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIGFjY2Vzc29yID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHR0aGlzLmFjY2Vzc29yTWV0aG9kID0gKGVudGl0eTogT3JpZ2luSXRlbUVudGl0eSkgPT4gYWNjZXNzb3IoZW50aXR5LmdldERhdGEoKSk7XG5cdFx0fVxuXG5cdH1cblxuXHRnZXRJZCgpOiBGaWVsZElkIHtcblx0XHRyZXR1cm4gdGhpcy5pZDtcblx0fVxuXG5cdGdldEtleSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmdldElkKCkuZ2V0SWQoKTtcblx0fVxuXG5cdGdldERhdGFUeXBlKCk6IERhdGFUeXBlIHtcblx0XHRyZXR1cm4gdGhpcy5kYXRhVHlwZTtcblx0fVxuXG5cdGdldEFjY2Vzc29yKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuYWNjZXNzb3I7XG5cdH1cblxuXHRnZXRBY2Nlc3Nvck1ldGhvZCgpOiAoZW50aXR5OiBPcmlnaW5JdGVtRW50aXR5KSA9PiBhbnkge1xuXHRcdHJldHVybiB0aGlzLmFjY2Vzc29yTWV0aG9kO1xuXHR9XG5cblx0Z2V0TWF0Y2hlcnMoKTogRmllbGRNYXRjaGVycyB7XG5cdFx0cmV0dXJuIHRoaXMubWF0Y2hlcnM7XG5cdH1cblxuXHRnZXRTZWFyY2hBY2Nlc3Nvck1ldGhvZCgpOiAoZW50aXR5OiBPcmlnaW5JdGVtRW50aXR5KSA9PiBhbnkge1xuXG5cdFx0bGV0IG1hdGNoZXI6IChpOiBhbnkpID0+IGFueTtcblxuXHRcdHRoaXMubWF0Y2hlcnNcblx0XHRcdC5nZXRTZWFyY2hNYXRjaGVyKClcblx0XHRcdC5pZlByZXNlbnQoKG06IEZpZWxkTWF0Y2hlclR5cGUpID0+IHtcblx0XHRcdFx0bWF0Y2hlciA9IG07XG5cdFx0XHR9KTtcblxuXHRcdGlmIChtYXRjaGVyKSB7XG5cdFx0XHRyZXR1cm4gKGVudGl0eSkgPT4ge1xuXHRcdFx0XHRjb25zdCB2YWwgPSB0aGlzLmFjY2Vzc29yTWV0aG9kKGVudGl0eSk7XG5cdFx0XHRcdHJldHVybiBtYXRjaGVyKHZhbCk7XG5cdFx0XHR9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gKGVudGl0eSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5hY2Nlc3Nvck1ldGhvZChlbnRpdHkpO1xuXHRcdFx0fTtcblx0XHR9XG5cdH1cblxuXHRnZXRWYWx1ZShlbnRpdHk6IE9yaWdpbkl0ZW1FbnRpdHkpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLmFjY2Vzc29yTWV0aG9kKGVudGl0eSk7XG5cdH1cblxuXHRnZXRTb3J0VmFsdWUoZW50aXR5OiBPcmlnaW5JdGVtRW50aXR5KTogYW55IHtcblx0XHRsZXQgdmFsdWUgPSB0aGlzLmFjY2Vzc29yTWV0aG9kKGVudGl0eSk7XG5cblx0XHR0aGlzLm1hdGNoZXJzXG5cdFx0XHQuZ2V0U29ydE1hdGNoZXIoKVxuXHRcdFx0LmlmUHJlc2VudCgobWF0Y2hlcjogRmllbGRNYXRjaGVyVHlwZSkgPT4ge1xuXHRcdFx0XHR2YWx1ZSA9IG1hdGNoZXIodmFsdWUpO1xuXHRcdFx0fSk7XG5cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRnZXRTZWFyY2hWYWx1ZShlbnRpdHk6IE9yaWdpbkl0ZW1FbnRpdHkpOiBhbnkge1xuXHRcdGxldCB2YWx1ZSA9IHRoaXMuYWNjZXNzb3JNZXRob2QoZW50aXR5KTtcblxuXHRcdHRoaXMubWF0Y2hlcnNcblx0XHRcdC5nZXRTZWFyY2hNYXRjaGVyKClcblx0XHRcdC5pZlByZXNlbnQoKG1hdGNoZXI6IEZpZWxkTWF0Y2hlclR5cGUpID0+IHtcblx0XHRcdFx0dmFsdWUgPSBtYXRjaGVyKHZhbHVlKTtcblx0XHRcdH0pO1xuXG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblxufVxuIl19