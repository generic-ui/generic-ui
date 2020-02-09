/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewEncapsulation } from '@angular/core';
var FabricRadioButtonComponent = /** @class */ (function () {
    function FabricRadioButtonComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.checked = false;
        this.changed = new EventEmitter();
    }
    /**
     * @return {?}
     */
    FabricRadioButtonComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.disabled) {
            this.renderer.addClass(this.elementRef.nativeElement, 'gui-disabled');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'gui-disabled');
        }
    };
    /**
     * @return {?}
     */
    FabricRadioButtonComponent.prototype.check = /**
     * @return {?}
     */
    function () {
        this.checked = true;
        this.changed.emit(this.checked);
    };
    FabricRadioButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-radio-button',
                    template: "<label>\n\t<input\n\t\t(click)=\"check()\"\n\t\t[checked]=checked\n\t\t[disabled]=disabled\n\t\t[name]=name\n\t\ttype=\"radio\">\n\t<span class=\"gui-radio-checkmark\"></span>\n\t<ng-content></ng-content>\n</label>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-radio-button]': 'true'
                    },
                    styles: [".gui-radio-button{display:inline-block;font:14px/18px Arial;padding-left:32px;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-radio-button label{cursor:pointer}.gui-radio-button label:hover .gui-radio-checkmark{border-color:#999}.gui-radio-button input{position:absolute;opacity:0;height:0;width:0}.gui-radio-button .gui-radio-checkmark{box-sizing:content-box;border-radius:50%;position:absolute;left:0;height:16px;width:16px;border:1px solid #d6d6d6}.gui-radio-button input:checked+.gui-radio-checkmark{border-color:#999}.gui-radio-button input:focus+.gui-radio-checkmark{border-color:#6fb4e8}.gui-radio-button.gui-disabled.gui-radio-button{color:#ccc;pointer-events:none}.gui-radio-button .gui-radio-checkmark:after{content:\"\";position:absolute;display:none;background:#333;border-radius:50%;width:16px;height:16px;-webkit-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5)}.gui-radio-button input:checked+.gui-radio-checkmark:after{box-sizing:content-box;display:block}", ".gui-material .gui-radio-button{font-family:Roboto,\"Helvetica Neue\",sans-serif}", ".gui-dark .gui-radio-button{color:#bdbdbd}.gui-dark .gui-radio-button .gui-radio-checkmark,.gui-dark .gui-radio-button input:checked+.gui-radio-checkmark{border-color:#878787}.gui-dark .gui-radio-button input:focus+.gui-radio-checkmark{border-color:#ce93d8}.gui-dark .gui-radio-button .gui-radio-checkmark:after{background:#878787}.gui-dark .gui-radio-button.gui-disabled.gui-radio-button{opacity:.36}"]
                }] }
    ];
    /** @nocollapse */
    FabricRadioButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    FabricRadioButtonComponent.propDecorators = {
        name: [{ type: Input }],
        checked: [{ type: Input }],
        disabled: [{ type: Input }],
        changed: [{ type: Output }]
    };
    return FabricRadioButtonComponent;
}());
export { FabricRadioButtonComponent };
if (false) {
    /** @type {?} */
    FabricRadioButtonComponent.prototype.name;
    /** @type {?} */
    FabricRadioButtonComponent.prototype.checked;
    /** @type {?} */
    FabricRadioButtonComponent.prototype.disabled;
    /** @type {?} */
    FabricRadioButtonComponent.prototype.changed;
    /**
     * @type {?}
     * @private
     */
    FabricRadioButtonComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    FabricRadioButtonComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vcmFkaW8tYnV0dG9uL3JhZGlvLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVySjtJQTRCQyxvQ0FBb0IsVUFBc0IsRUFDL0IsUUFBbUI7UUFEVixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFUOUIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQU16QixZQUFPLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7SUFJcEQsQ0FBQzs7OztJQUVELGdEQUFXOzs7SUFBWDtRQUNDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUMsQ0FBQztTQUN0RTthQUFNO1lBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDekU7SUFDRixDQUFDOzs7O0lBRUQsMENBQUs7OztJQUFMO1FBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7O2dCQTNDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsb09BQTBDO29CQU0xQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLElBQUksRUFBRTt3QkFDTCwwQkFBMEIsRUFBRSxNQUFNO3FCQUNsQzs7aUJBQ0Q7Ozs7Z0JBZjRDLFVBQVU7Z0JBQTBDLFNBQVM7Ozt1QkFrQnhHLEtBQUs7MEJBR0wsS0FBSzsyQkFHTCxLQUFLOzBCQUdMLE1BQU07O0lBbUJSLGlDQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7U0E5QlksMEJBQTBCOzs7SUFFdEMsMENBQ2E7O0lBRWIsNkNBQ3lCOztJQUV6Qiw4Q0FDa0I7O0lBRWxCLDZDQUNvRDs7Ozs7SUFFeEMsZ0RBQThCOzs7OztJQUN2Qyw4Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE91dHB1dCwgUmVuZGVyZXIyLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktcmFkaW8tYnV0dG9uJyxcblx0dGVtcGxhdGVVcmw6IGByYWRpby1idXR0b24uY29tcG9uZW50Lmh0bWxgLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9yYWRpby1idXR0b24ubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9yYWRpby1idXR0b24ubWF0ZXJpYWwubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9yYWRpby1idXR0b24uZGFyay5uZ3guc2Nzcydcblx0XSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1yYWRpby1idXR0b25dJzogJ3RydWUnXG5cdH1cbn0pXG5leHBvcnQgY2xhc3MgRmFicmljUmFkaW9CdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdG5hbWU6IHN0cmluZztcblxuXHRASW5wdXQoKVxuXHRjaGVja2VkOiBib29sZWFuID0gZmFsc2U7XG5cblx0QElucHV0KClcblx0ZGlzYWJsZWQ6IGJvb2xlYW47XG5cblx0QE91dHB1dCgpXG5cdGNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoKSB7XG5cdFx0aWYgKHRoaXMuZGlzYWJsZWQpIHtcblx0XHRcdHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdndWktZGlzYWJsZWQnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2d1aS1kaXNhYmxlZCcpO1xuXHRcdH1cblx0fVxuXG5cdGNoZWNrKCkge1xuXHRcdHRoaXMuY2hlY2tlZCA9IHRydWU7XG5cdFx0dGhpcy5jaGFuZ2VkLmVtaXQodGhpcy5jaGVja2VkKTtcblx0fVxufVxuIl19