/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Reactive } from './reactive';
/**
 * @abstract
 */
export class SmartComponent extends Reactive {
    /**
     * @protected
     * @param {?=} detector
     */
    constructor(detector) {
        super();
        this.detector = detector;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    /**
     * @return {?}
     */
    render() {
        this.detector.detectChanges();
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    SmartComponent.prototype.detector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQzs7OztBQUV0QyxNQUFNLE9BQWdCLGNBQWUsU0FBUSxRQUFROzs7OztJQUVwRCxZQUF5QyxRQUE0QjtRQUNwRSxLQUFLLEVBQUUsQ0FBQztRQURnQyxhQUFRLEdBQVIsUUFBUSxDQUFvQjtJQUVyRSxDQUFDOzs7O0lBRUQsV0FBVztRQUNWLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsTUFBTTtRQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDL0IsQ0FBQztDQUVEOzs7Ozs7SUFac0Isa0NBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuL3JlYWN0aXZlJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNtYXJ0Q29tcG9uZW50IGV4dGVuZHMgUmVhY3RpdmUge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmVhZG9ubHkgZGV0ZWN0b3I/OiBDaGFuZ2VEZXRlY3RvclJlZikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHRzdXBlci5uZ09uRGVzdHJveSgpO1xuXHR9XG5cblx0cmVuZGVyKCk6IHZvaWQge1xuXHRcdHRoaXMuZGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cbn1cbiJdfQ==