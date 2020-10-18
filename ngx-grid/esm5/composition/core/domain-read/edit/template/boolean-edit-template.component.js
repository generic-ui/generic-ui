/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { EditCommunicationComponent } from '../edit-communication.component';
var BooleanEditTemplateComponent = /** @class */ (function (_super) {
    tslib_1.__extends(BooleanEditTemplateComponent, _super);
    function BooleanEditTemplateComponent(changeDetectorRef) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.filterFieldName = 'booleanEdit';
        return _this;
    }
    /**
     * @param {?} changed
     * @return {?}
     */
    BooleanEditTemplateComponent.prototype.toggle = /**
     * @param {?} changed
     * @return {?}
     */
    function (changed) {
        this.valueChanges.emit(changed);
        this.submit();
    };
    BooleanEditTemplateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-boolean-edit',
                    template: "\n\n\t\t<span class=\"gui-cell-boolean\">\n\t\t\t<gui-checkbox #checkbox\n\t\t\t\t\t\t  [checked]=\"value\"\n\t\t\t\t\t\t  [name]=\"filterFieldName\"\n\t\t\t\t\t\t  (changed)=\"toggle($event)\">\n\t\t\t</gui-checkbox>\n\t\t</span>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    BooleanEditTemplateComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    BooleanEditTemplateComponent.propDecorators = {
        checkboxRef: [{ type: ViewChild, args: ['checkbox', { read: ElementRef, static: true },] }]
    };
    return BooleanEditTemplateComponent;
}(EditCommunicationComponent));
export { BooleanEditTemplateComponent };
if (false) {
    /** @type {?} */
    BooleanEditTemplateComponent.prototype.checkboxRef;
    /** @type {?} */
    BooleanEditTemplateComponent.prototype.filterFieldName;
    /**
     * @type {?}
     * @private
     */
    BooleanEditTemplateComponent.prototype.changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9lZGl0L3RlbXBsYXRlL2Jvb2xlYW4tZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEksT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFHN0U7SUFnQmtELHdEQUFtQztJQU9wRixzQ0FBNkIsaUJBQW9DO1FBQWpFLFlBQ0Msa0JBQU0saUJBQWlCLENBQUMsU0FDeEI7UUFGNEIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUZ4RCxxQkFBZSxHQUFHLGFBQWEsQ0FBQzs7SUFJekMsQ0FBQzs7Ozs7SUFFRCw2Q0FBTTs7OztJQUFOLFVBQU8sT0FBZ0I7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2YsQ0FBQzs7Z0JBOUJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsOE9BVVQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQzs7OztnQkFwQmlDLGlCQUFpQjs7OzhCQXVCakQsU0FBUyxTQUFDLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7SUFjMUQsbUNBQUM7Q0FBQSxBQWhDRCxDQWdCa0QsMEJBQTBCLEdBZ0IzRTtTQWhCWSw0QkFBNEI7OztJQUV4QyxtREFDd0I7O0lBRXhCLHVEQUF5Qzs7Ozs7SUFFN0IseURBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRWRpdENvbW11bmljYXRpb25Db21wb25lbnQgfSBmcm9tICcuLi9lZGl0LWNvbW11bmljYXRpb24uY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktYm9vbGVhbi1lZGl0Jyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxzcGFuIGNsYXNzPVwiZ3VpLWNlbGwtYm9vbGVhblwiPlxuXHRcdFx0PGd1aS1jaGVja2JveCAjY2hlY2tib3hcblx0XHRcdFx0XHRcdCAgW2NoZWNrZWRdPVwidmFsdWVcIlxuXHRcdFx0XHRcdFx0ICBbbmFtZV09XCJmaWx0ZXJGaWVsZE5hbWVcIlxuXHRcdFx0XHRcdFx0ICAoY2hhbmdlZCk9XCJ0b2dnbGUoJGV2ZW50KVwiPlxuXHRcdFx0PC9ndWktY2hlY2tib3g+XG5cdFx0PC9zcGFuPlxuXG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEJvb2xlYW5FZGl0VGVtcGxhdGVDb21wb25lbnQgZXh0ZW5kcyBFZGl0Q29tbXVuaWNhdGlvbkNvbXBvbmVudDxib29sZWFuPiB7XG5cblx0QFZpZXdDaGlsZCgnY2hlY2tib3gnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRjaGVja2JveFJlZjogRWxlbWVudFJlZjtcblxuXHRyZWFkb25seSBmaWx0ZXJGaWVsZE5hbWUgPSAnYm9vbGVhbkVkaXQnO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYpO1xuXHR9XG5cblx0dG9nZ2xlKGNoYW5nZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLnZhbHVlQ2hhbmdlcy5lbWl0KGNoYW5nZWQpO1xuXHRcdHRoaXMuc3VibWl0KCk7XG5cdH1cblxufVxuIl19