/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { EditCommunicationComponent } from '../edit-communication.component';
var BooleanEditTemplateComponent = /** @class */ (function (_super) {
    tslib_1.__extends(BooleanEditTemplateComponent, _super);
    function BooleanEditTemplateComponent(changeDetectorRef, elementRef) {
        var _this = _super.call(this, changeDetectorRef, elementRef) || this;
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
    /**
     * @protected
     * @return {?}
     */
    BooleanEditTemplateComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-boolean-edit';
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
        { type: ChangeDetectorRef },
        { type: ElementRef }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9lZGl0L3RlbXBsYXRlL2Jvb2xlYW4tZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEksT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFHN0U7SUFnQmtELHdEQUFtQztJQU9wRixzQ0FBNkIsaUJBQW9DLEVBQzlELFVBQXNCO1FBRHpCLFlBRUMsa0JBQU0saUJBQWlCLEVBQUUsVUFBVSxDQUFDLFNBQ3BDO1FBSDRCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFGeEQscUJBQWUsR0FBRyxhQUFhLENBQUM7O0lBS3pDLENBQUM7Ozs7O0lBRUQsNkNBQU07Ozs7SUFBTixVQUFPLE9BQWdCO1FBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNmLENBQUM7Ozs7O0lBRVMsc0RBQWU7Ozs7SUFBekI7UUFDQyxPQUFPLGtCQUFrQixDQUFDO0lBQzNCLENBQUM7O2dCQW5DRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLDhPQVVUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7Ozs7Z0JBcEJpQyxpQkFBaUI7Z0JBQWEsVUFBVTs7OzhCQXVCeEUsU0FBUyxTQUFDLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7SUFtQjFELG1DQUFDO0NBQUEsQUFyQ0QsQ0FnQmtELDBCQUEwQixHQXFCM0U7U0FyQlksNEJBQTRCOzs7SUFFeEMsbURBQ3dCOztJQUV4Qix1REFBeUM7Ozs7O0lBRTdCLHlEQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEVkaXRDb21tdW5pY2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vZWRpdC1jb21tdW5pY2F0aW9uLmNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWJvb2xlYW4tZWRpdCcsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8c3BhbiBjbGFzcz1cImd1aS1jZWxsLWJvb2xlYW5cIj5cblx0XHRcdDxndWktY2hlY2tib3ggI2NoZWNrYm94XG5cdFx0XHRcdFx0XHQgIFtjaGVja2VkXT1cInZhbHVlXCJcblx0XHRcdFx0XHRcdCAgW25hbWVdPVwiZmlsdGVyRmllbGROYW1lXCJcblx0XHRcdFx0XHRcdCAgKGNoYW5nZWQpPVwidG9nZ2xlKCRldmVudClcIj5cblx0XHRcdDwvZ3VpLWNoZWNrYm94PlxuXHRcdDwvc3Bhbj5cblxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBCb29sZWFuRWRpdFRlbXBsYXRlQ29tcG9uZW50IGV4dGVuZHMgRWRpdENvbW11bmljYXRpb25Db21wb25lbnQ8Ym9vbGVhbj4ge1xuXG5cdEBWaWV3Q2hpbGQoJ2NoZWNrYm94JywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IHRydWUgfSlcblx0Y2hlY2tib3hSZWY6IEVsZW1lbnRSZWY7XG5cblx0cmVhZG9ubHkgZmlsdGVyRmllbGROYW1lID0gJ2Jvb2xlYW5FZGl0JztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblx0fVxuXG5cdHRvZ2dsZShjaGFuZ2VkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy52YWx1ZUNoYW5nZXMuZW1pdChjaGFuZ2VkKTtcblx0XHR0aGlzLnN1Ym1pdCgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLWJvb2xlYW4tZWRpdCc7XG5cdH1cblxufVxuIl19