/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Reactive } from './reactive';
/**
 * @abstract
 */
var /**
 * @abstract
 */
SmartComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SmartComponent, _super);
    function SmartComponent(detector) {
        var _this = _super.call(this) || this;
        _this.detector = detector;
        return _this;
    }
    /**
     * @return {?}
     */
    SmartComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    /**
     * @return {?}
     */
    SmartComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        this.detector.detectChanges();
    };
    return SmartComponent;
}(Reactive));
/**
 * @abstract
 */
export { SmartComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    SmartComponent.prototype.detector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7Ozs7QUFFdEM7Ozs7SUFBNkMsMENBQVE7SUFFcEQsd0JBQXlDLFFBQTRCO1FBQXJFLFlBQ0MsaUJBQU8sU0FDUDtRQUZ3QyxjQUFRLEdBQVIsUUFBUSxDQUFvQjs7SUFFckUsQ0FBQzs7OztJQUVELG9DQUFXOzs7SUFBWDtRQUNDLGlCQUFNLFdBQVcsV0FBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCwrQkFBTTs7O0lBQU47UUFDQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRixxQkFBQztBQUFELENBQUMsQUFkRCxDQUE2QyxRQUFRLEdBY3BEOzs7Ozs7Ozs7O0lBWnNCLGtDQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFJlYWN0aXZlIH0gZnJvbSAnLi9yZWFjdGl2ZSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTbWFydENvbXBvbmVudCBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJvdGVjdGVkIHJlYWRvbmx5IGRldGVjdG9yPzogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0c3VwZXIubmdPbkRlc3Ryb3koKTtcblx0fVxuXG5cdHJlbmRlcigpOiB2b2lkIHtcblx0XHR0aGlzLmRldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG59XG4iXX0=