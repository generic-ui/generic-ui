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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlLW1vZGlmaWVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21tb24vY2RrL2RvbS9hdHRyaWJ1dGUvYXR0cmlidXRlLW1vZGlmaWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHNUMsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFFBQThCOzs7O0lBRXBFLFlBQ2tCLFdBQXlCO1FBRTFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUZGLGdCQUFXLEdBQVgsV0FBVyxDQUFjO0lBRzNDLENBQUM7Ozs7OztJQUVTLGNBQWMsQ0FBQyxXQUF3QjtRQUNoRCxPQUFPLElBQUksaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7QUFFdUIsbUNBQWlCLEdBQUc7Ozs7SUFFM0MsWUFDa0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFFMUMsQ0FBQzs7Ozs7O0lBRUQsWUFBWSxDQUFDLElBQVksRUFBRSxLQUFhO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxJQUFZO1FBQzNCLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Q0FFRCxDQUFDOzs7Ozs7SUFmRixvQ0FlRTs7Ozs7SUF4QkQsd0NBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXR0cmlidXRlTW9kaWZpZXJBcGkgfSBmcm9tICcuL2F0dHJpYnV0ZS1tb2RpZmllci1hcGknO1xuaW1wb3J0IHsgTW9kaWZpZXIgfSBmcm9tICcuLi9jb3JlL21vZGlmaWVyJztcblxuXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlTW9kaWZpZXIgZXh0ZW5kcyBNb2RpZmllcjxBdHRyaWJ1dGVNb2RpZmllckFwaT4ge1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgaHRtbEVsZW1lbnQ/OiBIVE1MRWxlbWVudFxuXHQpIHtcblx0XHRzdXBlcihodG1sRWxlbWVudCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgY3JlYXRlTW9kaWZpZXIoaHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogQXR0cmlidXRlTW9kaWZpZXJBcGkge1xuXHRcdHJldHVybiBuZXcgQXR0cmlidXRlTW9kaWZpZXIuQXR0cmlidXRlTW9kaWZpZXIoaHRtbEVsZW1lbnQpO1xuXHR9XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgQXR0cmlidXRlTW9kaWZpZXIgPSBjbGFzcyBpbXBsZW1lbnRzIEF0dHJpYnV0ZU1vZGlmaWVyQXBpIHtcblxuXHRcdGNvbnN0cnVjdG9yKFxuXHRcdFx0cHJpdmF0ZSByZWFkb25seSBodG1sRWxlbWVudDogSFRNTEVsZW1lbnRcblx0XHQpIHtcblx0XHR9XG5cblx0XHRzZXRBdHRyaWJ1dGUobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0XHR0aGlzLmh0bWxFbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG5cdFx0fVxuXG5cdFx0cmVtb3ZlQXR0cmlidXRlKG5hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdFx0dGhpcy5odG1sRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0fVxuXG5cdH07XG5cbn1cbiJdfQ==