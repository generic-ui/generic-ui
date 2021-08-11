/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
var FabricSelectedOptionsRepository = /** @class */ (function () {
    function FabricSelectedOptionsRepository() {
        this.selectedOption$ = new ReplaySubject(1);
    }
    /**
     * @return {?}
     */
    FabricSelectedOptionsRepository.prototype.onSelectedOption = /**
     * @return {?}
     */
    function () {
        return this.selectedOption$.asObservable();
    };
    /**
     * @param {?} option
     * @return {?}
     */
    FabricSelectedOptionsRepository.prototype.next = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.selectedOption$.next(option);
    };
    FabricSelectedOptionsRepository.decorators = [
        { type: Injectable }
    ];
    return FabricSelectedOptionsRepository;
}());
export { FabricSelectedOptionsRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FabricSelectedOptionsRepository.prototype.selectedOption$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0ZWQtb3B0aW9uLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJmb3JtL3NlbGVjdC9zZWxlY3RlZC1vcHRpb24ucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR2pEO0lBQUE7UUFHa0Isb0JBQWUsR0FBRyxJQUFJLGFBQWEsQ0FBa0IsQ0FBQyxDQUFDLENBQUM7SUFVMUUsQ0FBQzs7OztJQVJBLDBEQUFnQjs7O0lBQWhCO1FBQ0MsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBRUQsOENBQUk7Ozs7SUFBSixVQUFLLE1BQXVCO1FBQzNCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7O2dCQVhELFVBQVU7O0lBYVgsc0NBQUM7Q0FBQSxBQWJELElBYUM7U0FaWSwrQkFBK0I7Ozs7OztJQUUzQywwREFBeUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBHdWlTZWxlY3RPcHRpb24gfSBmcm9tICcuL3NlbGVjdC1vcHRpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmFicmljU2VsZWN0ZWRPcHRpb25zUmVwb3NpdG9yeSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzZWxlY3RlZE9wdGlvbiQgPSBuZXcgUmVwbGF5U3ViamVjdDxHdWlTZWxlY3RPcHRpb24+KDEpO1xuXG5cdG9uU2VsZWN0ZWRPcHRpb24oKTogT2JzZXJ2YWJsZTxHdWlTZWxlY3RPcHRpb24+IHtcblx0XHRyZXR1cm4gdGhpcy5zZWxlY3RlZE9wdGlvbiQuYXNPYnNlcnZhYmxlKCk7XG5cdH1cblxuXHRuZXh0KG9wdGlvbjogR3VpU2VsZWN0T3B0aW9uKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RlZE9wdGlvbiQubmV4dChvcHRpb24pO1xuXHR9XG5cbn1cbiJdfQ==