var _a;
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Modifier } from '../core/modifier';
export class ClassModifier extends Modifier {
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
        return new ClassModifier.ClassModifier(htmlElement);
    }
}
ClassModifier.ClassModifier = (_a = class {
        /**
         * @param {?} htmlElement
         */
        constructor(htmlElement) {
            this.htmlElement = htmlElement;
        }
        /**
         * @param {...?} classes
         * @return {?}
         */
        add(...classes) {
            this.addClassToDomElement(this.htmlElement, classes);
        }
        /**
         * @param {...?} classes
         * @return {?}
         */
        remove(...classes) {
            this.removeClassFromDomElement(this.htmlElement, classes);
        }
        /**
         * @return {?}
         */
        clear() {
            this.htmlElement.removeAttribute(ClassModifier.ClassModifier.CLASS);
        }
        /**
         * @private
         * @param {?} htmlElement
         * @param {?} classes
         * @return {?}
         */
        addClassToDomElement(htmlElement, classes) {
            for (let i = 0; i < classes.length; i++) {
                htmlElement.classList.add(classes[i]);
            }
        }
        /**
         * @private
         * @param {?} htmlElement
         * @param {?} classes
         * @return {?}
         */
        removeClassFromDomElement(htmlElement, classes) {
            for (let i = 0; i < classes.length; i++) {
                htmlElement.classList.remove(classes[i]);
            }
        }
    },
    _a.CLASS = 'class',
    _a);
if (false) {
    /**
     * @type {?}
     * @private
     */
    ClassModifier.ClassModifier;
    /**
     * @type {?}
     * @private
     */
    ClassModifier.prototype.htmlElement;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3MtbW9kaWZpZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImNvbW1vbi9jZGsvZG9tL2NsYXNzL2NsYXNzLW1vZGlmaWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRzVDLE1BQU0sT0FBTyxhQUFjLFNBQVEsUUFBMEI7Ozs7SUFFNUQsWUFDa0IsV0FBeUI7UUFFMUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRkYsZ0JBQVcsR0FBWCxXQUFXLENBQWM7SUFHM0MsQ0FBQzs7Ozs7O0lBRVMsY0FBYyxDQUFDLFdBQXdCO1FBQ2hELE9BQU8sSUFBSSxhQUFhLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7O0FBRXVCLDJCQUFhLFNBQUc7Ozs7UUFJdkMsWUFDa0IsV0FBd0I7WUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFFMUMsQ0FBQzs7Ozs7UUFFRCxHQUFHLENBQUMsR0FBRyxPQUFzQjtZQUM1QixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN0RCxDQUFDOzs7OztRQUVELE1BQU0sQ0FBQyxHQUFHLE9BQXNCO1lBQy9CLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzNELENBQUM7Ozs7UUFFRCxLQUFLO1lBQ0osSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyRSxDQUFDOzs7Ozs7O1FBRU8sb0JBQW9CLENBQUMsV0FBd0IsRUFBRSxPQUFzQjtZQUU1RSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDeEMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdEM7UUFDRixDQUFDOzs7Ozs7O1FBRU8seUJBQXlCLENBQUMsV0FBd0IsRUFBRSxPQUFzQjtZQUVqRixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDeEMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDekM7UUFDRixDQUFDO0tBRUQ7SUFqQ3dCLFFBQUssR0FBRyxPQUFRO1FBaUN2Qzs7Ozs7O0lBbkNGLDRCQW1DRTs7Ozs7SUE1Q0Qsb0NBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xhc3NNb2RpZmllckFwaSB9IGZyb20gJy4vY2xhc3MtbW9kaWZpZXItYXBpJztcbmltcG9ydCB7IE1vZGlmaWVyIH0gZnJvbSAnLi4vY29yZS9tb2RpZmllcic7XG5cblxuZXhwb3J0IGNsYXNzIENsYXNzTW9kaWZpZXIgZXh0ZW5kcyBNb2RpZmllcjxDbGFzc01vZGlmaWVyQXBpPiB7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByZWFkb25seSBodG1sRWxlbWVudD86IEhUTUxFbGVtZW50XG5cdCkge1xuXHRcdHN1cGVyKGh0bWxFbGVtZW50KTtcblx0fVxuXG5cdHByb3RlY3RlZCBjcmVhdGVNb2RpZmllcihodG1sRWxlbWVudDogSFRNTEVsZW1lbnQpOiBDbGFzc01vZGlmaWVyQXBpIHtcblx0XHRyZXR1cm4gbmV3IENsYXNzTW9kaWZpZXIuQ2xhc3NNb2RpZmllcihodG1sRWxlbWVudCk7XG5cdH1cblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBDbGFzc01vZGlmaWVyID0gY2xhc3MgaW1wbGVtZW50cyBDbGFzc01vZGlmaWVyQXBpIHtcblxuXHRcdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IENMQVNTID0gJ2NsYXNzJztcblxuXHRcdGNvbnN0cnVjdG9yKFxuXHRcdFx0cHJpdmF0ZSByZWFkb25seSBodG1sRWxlbWVudDogSFRNTEVsZW1lbnRcblx0XHQpIHtcblx0XHR9XG5cblx0XHRhZGQoLi4uY2xhc3NlczogQXJyYXk8c3RyaW5nPik6IHZvaWQge1xuXHRcdFx0dGhpcy5hZGRDbGFzc1RvRG9tRWxlbWVudCh0aGlzLmh0bWxFbGVtZW50LCBjbGFzc2VzKTtcblx0XHR9XG5cblx0XHRyZW1vdmUoLi4uY2xhc3NlczogQXJyYXk8c3RyaW5nPik6IHZvaWQge1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzc0Zyb21Eb21FbGVtZW50KHRoaXMuaHRtbEVsZW1lbnQsIGNsYXNzZXMpO1xuXHRcdH1cblxuXHRcdGNsZWFyKCk6IHZvaWQge1xuXHRcdFx0dGhpcy5odG1sRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoQ2xhc3NNb2RpZmllci5DbGFzc01vZGlmaWVyLkNMQVNTKTtcblx0XHR9XG5cblx0XHRwcml2YXRlIGFkZENsYXNzVG9Eb21FbGVtZW50KGh0bWxFbGVtZW50OiBIVE1MRWxlbWVudCwgY2xhc3NlczogQXJyYXk8c3RyaW5nPik6IHZvaWQge1xuXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNsYXNzZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aHRtbEVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc2VzW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRwcml2YXRlIHJlbW92ZUNsYXNzRnJvbURvbUVsZW1lbnQoaHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50LCBjbGFzc2VzOiBBcnJheTxzdHJpbmc+KTogdm9pZCB7XG5cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRodG1sRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzZXNbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHR9O1xuXG59XG4iXX0=