/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../common/cdk/component/pure-component';
var StructureDialogSchemaManagerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureDialogSchemaManagerComponent, _super);
    function StructureDialogSchemaManagerComponent(elRef) {
        var _this = _super.call(this, elRef) || this;
        _this.addClassToHost('gui-pr-10');
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    StructureDialogSchemaManagerComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-schema-manager-dialog';
    };
    StructureDialogSchemaManagerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[gui-schema-manager-dialog]',
                    template: "\n\t\t<div gui-structure-schema-manager></div>\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureDialogSchemaManagerComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return StructureDialogSchemaManagerComponent;
}(PureComponent));
export { StructureDialogSchemaManagerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmRpYWxvZy1zY2hlbWEtbWFuYWdlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInNjaGVtYS9mZWF0dXJlL21hbmFnZXIvZGlhbG9nL3N0cnVjdHVyZS5kaWFsb2ctc2NoZW1hLW1hbmFnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBR2hGO0lBUTJELGlFQUFhO0lBRXZFLCtDQUFZLEtBQWlCO1FBQTdCLFlBQ0Msa0JBQU0sS0FBSyxDQUFDLFNBRVo7UUFEQSxLQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDOztJQUNsQyxDQUFDOzs7OztJQUVTLCtEQUFlOzs7O0lBQXpCO1FBQ0MsT0FBTywyQkFBMkIsQ0FBQztJQUNwQyxDQUFDOztnQkFqQkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxnQ0FBZ0M7b0JBQzFDLFFBQVEsRUFBRSxvREFFVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDOzs7O2dCQVo0QyxVQUFVOztJQXVCdkQsNENBQUM7Q0FBQSxBQWxCRCxDQVEyRCxhQUFhLEdBVXZFO1NBVlkscUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3B1cmUtY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXNjaGVtYS1tYW5hZ2VyLWRpYWxvZ10nLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgZ3VpLXN0cnVjdHVyZS1zY2hlbWEtbWFuYWdlcj48L2Rpdj5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRGlhbG9nU2NoZW1hTWFuYWdlckNvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKGVsUmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoZWxSZWYpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1wci0xMCcpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXNjaGVtYS1tYW5hZ2VyLWRpYWxvZyc7XG5cdH1cbn1cbiJdfQ==