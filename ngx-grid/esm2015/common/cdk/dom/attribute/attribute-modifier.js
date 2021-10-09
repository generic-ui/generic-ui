/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Modifier } from '../core/modifier';
export class AttributeModifier extends Modifier {
    /**
     * @param {?=} htmlElement
     */
    constructor(htmlElement) {
        super(htmlElement);
        this.htmlElement = htmlElement;
    }
    /**
     * @protected
     * @param {?} htmlElement
     * @return {?}
     */
    createModifier(htmlElement) {
        return new AttributeModifier.AttributeModifier(htmlElement);
    }
}
AttributeModifier.AttributeModifier = class {
    /**
     * @param {?} htmlElement
     */
    constructor(htmlElement) {
        this.htmlElement = htmlElement;
    }
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    setAttribute(name, value) {
        this.htmlElement.setAttribute(name, value);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    removeAttribute(name) {
        this.htmlElement.removeAttribute(name);
    }
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    AttributeModifier.AttributeModifier;
    /**
     * @type {?}
     * @private
     */
    AttributeModifier.prototype.htmlElement;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlLW1vZGlmaWVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21tb24vY2RrL2RvbS9hdHRyaWJ1dGUvYXR0cmlidXRlLW1vZGlmaWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHNUMsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFFBQThCOzs7O0lBbUJwRSxZQUNrQixXQUF5QjtRQUUxQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFGRixnQkFBVyxHQUFYLFdBQVcsQ0FBYztJQUczQyxDQUFDOzs7Ozs7SUFFUyxjQUFjLENBQUMsV0FBd0I7UUFDaEQsT0FBTyxJQUFJLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdELENBQUM7O0FBekJ1QixtQ0FBaUIsR0FBRzs7OztJQUUzQyxZQUNrQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUUxQyxDQUFDOzs7Ozs7SUFFRCxZQUFZLENBQUMsSUFBWSxFQUFFLEtBQWE7UUFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLElBQVk7UUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztDQUVELENBQUM7Ozs7OztJQWZGLG9DQWVFOzs7OztJQUdELHdDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF0dHJpYnV0ZU1vZGlmaWVyQXBpIH0gZnJvbSAnLi9hdHRyaWJ1dGUtbW9kaWZpZXItYXBpJztcbmltcG9ydCB7IE1vZGlmaWVyIH0gZnJvbSAnLi4vY29yZS9tb2RpZmllcic7XG5cblxuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZU1vZGlmaWVyIGV4dGVuZHMgTW9kaWZpZXI8QXR0cmlidXRlTW9kaWZpZXJBcGk+IHtcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBBdHRyaWJ1dGVNb2RpZmllciA9IGNsYXNzIGltcGxlbWVudHMgQXR0cmlidXRlTW9kaWZpZXJBcGkge1xuXG5cdFx0Y29uc3RydWN0b3IoXG5cdFx0XHRwcml2YXRlIHJlYWRvbmx5IGh0bWxFbGVtZW50OiBIVE1MRWxlbWVudFxuXHRcdCkge1xuXHRcdH1cblxuXHRcdHNldEF0dHJpYnV0ZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRcdHRoaXMuaHRtbEVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcblx0XHR9XG5cblx0XHRyZW1vdmVBdHRyaWJ1dGUobmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0XHR0aGlzLmh0bWxFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcblx0XHR9XG5cblx0fTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHJlYWRvbmx5IGh0bWxFbGVtZW50PzogSFRNTEVsZW1lbnRcblx0KSB7XG5cdFx0c3VwZXIoaHRtbEVsZW1lbnQpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGNyZWF0ZU1vZGlmaWVyKGh0bWxFbGVtZW50OiBIVE1MRWxlbWVudCk6IEF0dHJpYnV0ZU1vZGlmaWVyQXBpIHtcblx0XHRyZXR1cm4gbmV3IEF0dHJpYnV0ZU1vZGlmaWVyLkF0dHJpYnV0ZU1vZGlmaWVyKGh0bWxFbGVtZW50KTtcblx0fVxuXG59XG4iXX0=