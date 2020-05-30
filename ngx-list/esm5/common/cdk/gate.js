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
    function Gate() {
        return _super.call(this) || this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tbW9uL2Nkay9nYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBRW5EOzs7O0lBQW1DLGdDQUFjO0lBRWhEO2VBQ0MsaUJBQU87SUFDUixDQUFDOzs7Ozs7SUFFRCx3QkFBUzs7Ozs7SUFBVCxVQUFVLFlBQW9CLEVBQUUsYUFBNEI7UUFDM0QsT0FBTyxhQUFhLENBQUMsWUFBWSxDQUFDLEtBQUssU0FBUyxJQUFJLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLEtBQUssU0FBUyxDQUFDO0lBQzVHLENBQUM7SUFFRixXQUFDO0FBQUQsQ0FBQyxBQVZELENBQW1DLGNBQWMsR0FVaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9zbWFydC1jb21wb25lbnQnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR2F0ZSBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IHtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGlzRGVmaW5lZChwcm9wZXJ0eU5hbWU6IHN0cmluZywgc2ltcGxlQ2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBzaW1wbGVDaGFuZ2VzW3Byb3BlcnR5TmFtZV0gIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzW3Byb3BlcnR5TmFtZV0uY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQ7XG5cdH1cblxufVxuIl19