/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SmartComponent } from './smart-component';
/**
 * @abstract
 */
export class Gate extends SmartComponent {
    /**
     * @protected
     * @param {?} cDetector
     */
    constructor(cDetector) {
        super(cDetector);
    }
    /**
     * @param {?} propertyName
     * @param {?} simpleChanges
     * @return {?}
     */
    isDefined(propertyName, simpleChanges) {
        return simpleChanges[propertyName] !== undefined && simpleChanges[propertyName].currentValue !== undefined;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tbW9uL2Nkay9nYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFFbkQsTUFBTSxPQUFnQixJQUFLLFNBQVEsY0FBYzs7Ozs7SUFFaEQsWUFBc0IsU0FBNEI7UUFDakQsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7Ozs7OztJQUVELFNBQVMsQ0FBQyxZQUFvQixFQUFFLGFBQTRCO1FBQzNELE9BQU8sYUFBYSxDQUFDLFlBQVksQ0FBQyxLQUFLLFNBQVMsSUFBSSxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxLQUFLLFNBQVMsQ0FBQztJQUM1RyxDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4vc21hcnQtY29tcG9uZW50JztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEdhdGUgZXh0ZW5kcyBTbWFydENvbXBvbmVudCB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGNEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcblx0XHRzdXBlcihjRGV0ZWN0b3IpO1xuXHR9XG5cblx0aXNEZWZpbmVkKHByb3BlcnR5TmFtZTogc3RyaW5nLCBzaW1wbGVDaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHNpbXBsZUNoYW5nZXNbcHJvcGVydHlOYW1lXSAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXNbcHJvcGVydHlOYW1lXS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZDtcblx0fVxuXG59XG4iXX0=