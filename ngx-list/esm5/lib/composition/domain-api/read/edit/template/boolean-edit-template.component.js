/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { EditCommunicationComponent } from '../edit-communication.component';
var BooleanEditTemplateComponent = /** @class */ (function (_super) {
    tslib_1.__extends(BooleanEditTemplateComponent, _super);
    function BooleanEditTemplateComponent() {
        var _this = _super.call(this) || this;
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
    BooleanEditTemplateComponent.ctorParameters = function () { return []; };
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvcmVhZC9lZGl0L3RlbXBsYXRlL2Jvb2xlYW4tZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0csT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFHN0U7SUFnQmtELHdEQUFtQztJQU9wRjtRQUFBLFlBQ0MsaUJBQU8sU0FDUDtRQUpRLHFCQUFlLEdBQUcsYUFBYSxDQUFDOztJQUl6QyxDQUFDOzs7OztJQUVELDZDQUFNOzs7O0lBQU4sVUFBTyxPQUFnQjtRQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDZixDQUFDOztnQkE5QkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSw4T0FVVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDOzs7Ozs4QkFHQyxTQUFTLFNBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztJQWMxRCxtQ0FBQztDQUFBLEFBaENELENBZ0JrRCwwQkFBMEIsR0FnQjNFO1NBaEJZLDRCQUE0Qjs7O0lBRXhDLG1EQUN3Qjs7SUFFeEIsdURBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFZGl0Q29tbXVuaWNhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uL2VkaXQtY29tbXVuaWNhdGlvbi5jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1ib29sZWFuLWVkaXQnLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PHNwYW4gY2xhc3M9XCJndWktY2VsbC1ib29sZWFuXCI+XG5cdFx0XHQ8Z3VpLWNoZWNrYm94ICNjaGVja2JveFxuXHRcdFx0XHRcdFx0ICBbY2hlY2tlZF09XCJ2YWx1ZVwiXG5cdFx0XHRcdFx0XHQgIFtuYW1lXT1cImZpbHRlckZpZWxkTmFtZVwiXG5cdFx0XHRcdFx0XHQgIChjaGFuZ2VkKT1cInRvZ2dsZSgkZXZlbnQpXCI+XG5cdFx0XHQ8L2d1aS1jaGVja2JveD5cblx0XHQ8L3NwYW4+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQm9vbGVhbkVkaXRUZW1wbGF0ZUNvbXBvbmVudCBleHRlbmRzIEVkaXRDb21tdW5pY2F0aW9uQ29tcG9uZW50PGJvb2xlYW4+IHtcblxuXHRAVmlld0NoaWxkKCdjaGVja2JveCcsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGNoZWNrYm94UmVmOiBFbGVtZW50UmVmO1xuXG5cdHJlYWRvbmx5IGZpbHRlckZpZWxkTmFtZSA9ICdib29sZWFuRWRpdCc7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHRvZ2dsZShjaGFuZ2VkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy52YWx1ZUNoYW5nZXMuZW1pdChjaGFuZ2VkKTtcblx0XHR0aGlzLnN1Ym1pdCgpO1xuXHR9XG5cbn1cbiJdfQ==