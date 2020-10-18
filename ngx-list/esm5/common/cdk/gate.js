/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { SmartComponent } from './smart-component';
/**
 * @abstract
 */
var /**
 * @abstract
 */
Gate = /** @class */ (function (_super) {
    tslib_1.__extends(Gate, _super);
    function Gate(cDetector) {
        return _super.call(this, cDetector) || this;
    }
    /**
     * @param {?} propertyName
     * @param {?} simpleChanges
     * @return {?}
     */
    Gate.prototype.isDefined = /**
     * @param {?} propertyName
     * @param {?} simpleChanges
     * @return {?}
     */
    function (propertyName, simpleChanges) {
        return simpleChanges[propertyName] !== undefined && simpleChanges[propertyName].currentValue !== undefined;
    };
    return Gate;
}(SmartComponent));
/**
 * @abstract
 */
export { Gate };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tbW9uL2Nkay9nYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBRW5EOzs7O0lBQW1DLGdDQUFjO0lBRWhELGNBQXNCLFNBQTRCO2VBQ2pELGtCQUFNLFNBQVMsQ0FBQztJQUNqQixDQUFDOzs7Ozs7SUFFRCx3QkFBUzs7Ozs7SUFBVCxVQUFVLFlBQW9CLEVBQUUsYUFBNEI7UUFDM0QsT0FBTyxhQUFhLENBQUMsWUFBWSxDQUFDLEtBQUssU0FBUyxJQUFJLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLEtBQUssU0FBUyxDQUFDO0lBQzVHLENBQUM7SUFFRixXQUFDO0FBQUQsQ0FBQyxBQVZELENBQW1DLGNBQWMsR0FVaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4vc21hcnQtY29tcG9uZW50JztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEdhdGUgZXh0ZW5kcyBTbWFydENvbXBvbmVudCB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGNEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcblx0XHRzdXBlcihjRGV0ZWN0b3IpO1xuXHR9XG5cblx0aXNEZWZpbmVkKHByb3BlcnR5TmFtZTogc3RyaW5nLCBzaW1wbGVDaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHNpbXBsZUNoYW5nZXNbcHJvcGVydHlOYW1lXSAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXNbcHJvcGVydHlOYW1lXS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZDtcblx0fVxuXG59XG4iXX0=