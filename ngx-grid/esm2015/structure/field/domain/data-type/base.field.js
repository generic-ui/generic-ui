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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5maWVsZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpZWxkL2RvbWFpbi9kYXRhLXR5cGUvYmFzZS5maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBTUEsTUFBTSxPQUFnQixTQUFTOzs7Ozs7OztJQWE5QixZQUFzQixFQUFXLEVBQzFCLFFBQWEsRUFDYixRQUFrQixFQUNsQixRQUF1QjtRQUM3QixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBRXpCLElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxjQUFjOzs7O1lBQUcsQ0FBQyxNQUF3QixFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUEsQ0FBQztTQUMvRTthQUFNLElBQUksT0FBTyxRQUFRLEtBQUssVUFBVSxFQUFFO1lBQzFDLElBQUksQ0FBQyxjQUFjOzs7O1lBQUcsQ0FBQyxNQUF3QixFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUEsQ0FBQztTQUMvRTtJQUVGLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0osT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0wsT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELGlCQUFpQjtRQUNoQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELHVCQUF1Qjs7WUFFbEIsT0FBd0I7UUFFNUIsSUFBSSxDQUFDLFFBQVE7YUFDWCxnQkFBZ0IsRUFBRTthQUNsQixTQUFTOzs7O1FBQUMsQ0FBQyxDQUFtQixFQUFFLEVBQUU7WUFDbEMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNiLENBQUMsRUFBQyxDQUFDO1FBRUosSUFBSSxPQUFPLEVBQUU7WUFDWjs7OztZQUFPLENBQUMsTUFBTSxFQUFFLEVBQUU7O3NCQUNYLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztnQkFDdkMsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckIsQ0FBQyxFQUFDO1NBQ0Y7YUFBTTtZQUNOOzs7O1lBQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFDakIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BDLENBQUMsRUFBQztTQUNGO0lBQ0YsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsTUFBd0I7UUFDaEMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLE1BQXdCOztZQUNoQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7UUFFdkMsSUFBSSxDQUFDLFFBQVE7YUFDWCxjQUFjLEVBQUU7YUFDaEIsU0FBUzs7OztRQUFDLENBQUMsT0FBeUIsRUFBRSxFQUFFO1lBQ3hDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsQ0FBQyxFQUFDLENBQUM7UUFFSixPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLE1BQXdCOztZQUNsQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7UUFFdkMsSUFBSSxDQUFDLFFBQVE7YUFDWCxnQkFBZ0IsRUFBRTthQUNsQixTQUFTOzs7O1FBQUMsQ0FBQyxPQUF5QixFQUFFLEVBQUU7WUFDeEMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixDQUFDLEVBQUMsQ0FBQztRQUVKLE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQztDQUdEOzs7Ozs7SUF2R0EsdUJBQTZCOzs7OztJQUc3Qiw2QkFBd0M7Ozs7O0lBRXhDLDZCQUFvQzs7Ozs7SUFFcEMsbUNBQW1FOzs7OztJQUVuRSw2QkFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi9maWVsZC5pZCc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4vZGF0YS10eXBlJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zb3VyY2Uvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBGaWVsZE1hdGNoZXJUeXBlIH0gZnJvbSAnLi4vbWF0Y2hlci9maWVsZC5tYXRjaGVyLnR5cGUnO1xuaW1wb3J0IHsgRmllbGRNYXRjaGVycyB9IGZyb20gJy4uL21hdGNoZXIvZmllbGQubWF0Y2hlcnMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUZpZWxkIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGlkOiBGaWVsZElkO1xuXG5cdC8vIFRPRE9cblx0cHJpdmF0ZSByZWFkb25seSBhY2Nlc3Nvcjogc3RyaW5nIHwgYW55OyAvLyhyYXdEYXRhOiBhbnkpID0+IGFueTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGRhdGFUeXBlOiBEYXRhVHlwZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGFjY2Vzc29yTWV0aG9kOiAoZW50aXR5OiBPcmlnaW5JdGVtRW50aXR5KSA9PiBhbnk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBtYXRjaGVyczogRmllbGRNYXRjaGVycztcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoaWQ6IEZpZWxkSWQsXG5cdFx0XHRcdFx0XHQgIGFjY2Vzc29yOiBhbnksXG5cdFx0XHRcdFx0XHQgIGRhdGFUeXBlOiBEYXRhVHlwZSxcblx0XHRcdFx0XHRcdCAgbWF0Y2hlcnM6IEZpZWxkTWF0Y2hlcnMpIHtcblx0XHR0aGlzLmlkID0gaWQ7XG5cdFx0dGhpcy5hY2Nlc3NvciA9IGFjY2Vzc29yO1xuXHRcdHRoaXMuZGF0YVR5cGUgPSBkYXRhVHlwZTtcblx0XHR0aGlzLm1hdGNoZXJzID0gbWF0Y2hlcnM7XG5cblx0XHRpZiAodHlwZW9mIGFjY2Vzc29yID09PSAnc3RyaW5nJykge1xuXHRcdFx0dGhpcy5hY2Nlc3Nvck1ldGhvZCA9IChlbnRpdHk6IE9yaWdpbkl0ZW1FbnRpdHkpID0+IGVudGl0eS5nZXREYXRhKClbYWNjZXNzb3JdO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIGFjY2Vzc29yID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHR0aGlzLmFjY2Vzc29yTWV0aG9kID0gKGVudGl0eTogT3JpZ2luSXRlbUVudGl0eSkgPT4gYWNjZXNzb3IoZW50aXR5LmdldERhdGEoKSk7XG5cdFx0fVxuXG5cdH1cblxuXHRnZXRJZCgpOiBGaWVsZElkIHtcblx0XHRyZXR1cm4gdGhpcy5pZDtcblx0fVxuXG5cdGdldEtleSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmdldElkKCkuZ2V0SWQoKTtcblx0fVxuXG5cdGdldERhdGFUeXBlKCk6IERhdGFUeXBlIHtcblx0XHRyZXR1cm4gdGhpcy5kYXRhVHlwZTtcblx0fVxuXG5cdGdldEFjY2Vzc29yKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuYWNjZXNzb3I7XG5cdH1cblxuXHRnZXRBY2Nlc3Nvck1ldGhvZCgpOiAoZW50aXR5OiBPcmlnaW5JdGVtRW50aXR5KSA9PiBhbnkge1xuXHRcdHJldHVybiB0aGlzLmFjY2Vzc29yTWV0aG9kO1xuXHR9XG5cblx0Z2V0TWF0Y2hlcnMoKTogRmllbGRNYXRjaGVycyB7XG5cdFx0cmV0dXJuIHRoaXMubWF0Y2hlcnM7XG5cdH1cblxuXHRnZXRTZWFyY2hBY2Nlc3Nvck1ldGhvZCgpOiAoZW50aXR5OiBPcmlnaW5JdGVtRW50aXR5KSA9PiBhbnkge1xuXG5cdFx0bGV0IG1hdGNoZXI6IChpOiBhbnkpID0+IGFueTtcblxuXHRcdHRoaXMubWF0Y2hlcnNcblx0XHRcdC5nZXRTZWFyY2hNYXRjaGVyKClcblx0XHRcdC5pZlByZXNlbnQoKG06IEZpZWxkTWF0Y2hlclR5cGUpID0+IHtcblx0XHRcdFx0bWF0Y2hlciA9IG07XG5cdFx0XHR9KTtcblxuXHRcdGlmIChtYXRjaGVyKSB7XG5cdFx0XHRyZXR1cm4gKGVudGl0eSkgPT4ge1xuXHRcdFx0XHRjb25zdCB2YWwgPSB0aGlzLmFjY2Vzc29yTWV0aG9kKGVudGl0eSk7XG5cdFx0XHRcdHJldHVybiBtYXRjaGVyKHZhbCk7XG5cdFx0XHR9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gKGVudGl0eSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5hY2Nlc3Nvck1ldGhvZChlbnRpdHkpO1xuXHRcdFx0fTtcblx0XHR9XG5cdH1cblxuXHRnZXRWYWx1ZShlbnRpdHk6IE9yaWdpbkl0ZW1FbnRpdHkpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLmFjY2Vzc29yTWV0aG9kKGVudGl0eSk7XG5cdH1cblxuXHRnZXRTb3J0VmFsdWUoZW50aXR5OiBPcmlnaW5JdGVtRW50aXR5KTogYW55IHtcblx0XHRsZXQgdmFsdWUgPSB0aGlzLmFjY2Vzc29yTWV0aG9kKGVudGl0eSk7XG5cblx0XHR0aGlzLm1hdGNoZXJzXG5cdFx0XHQuZ2V0U29ydE1hdGNoZXIoKVxuXHRcdFx0LmlmUHJlc2VudCgobWF0Y2hlcjogRmllbGRNYXRjaGVyVHlwZSkgPT4ge1xuXHRcdFx0XHR2YWx1ZSA9IG1hdGNoZXIodmFsdWUpO1xuXHRcdFx0fSk7XG5cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRnZXRTZWFyY2hWYWx1ZShlbnRpdHk6IE9yaWdpbkl0ZW1FbnRpdHkpOiBhbnkge1xuXHRcdGxldCB2YWx1ZSA9IHRoaXMuYWNjZXNzb3JNZXRob2QoZW50aXR5KTtcblxuXHRcdHRoaXMubWF0Y2hlcnNcblx0XHRcdC5nZXRTZWFyY2hNYXRjaGVyKClcblx0XHRcdC5pZlByZXNlbnQoKG1hdGNoZXI6IEZpZWxkTWF0Y2hlclR5cGUpID0+IHtcblx0XHRcdFx0dmFsdWUgPSBtYXRjaGVyKHZhbHVlKTtcblx0XHRcdH0pO1xuXG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblxufVxuIl19