/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewEncapsulation } from '@angular/core';
var FabricCheckboxComponent = /** @class */ (function () {
    function FabricCheckboxComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.checked = false;
        this.disabled = false;
        this.changed = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FabricCheckboxComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.disabled) {
            if (this.disabled) {
                this.renderer.addClass(this.elementRef.nativeElement, 'gui-disabled');
            }
            else {
                this.renderer.removeClass(this.elementRef.nativeElement, 'gui-disabled');
            }
        }
    };
    /**
     * @return {?}
     */
    FabricCheckboxComponent.prototype.check = /**
     * @return {?}
     */
    function () {
        this.checked = !this.checked;
        this.changed.emit(this.checked);
    };
    FabricCheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-checkbox',
                    template: "<label>\n\t<input\n\t\t(click)='check()'\n\t\t[checked]=checked\n\t\t[disabled]=disabled\n\t\t[name]=name\n\t\ttype=\"checkbox\">\n\t<span class=\"gui-checkmark\"></span>\n\t<ng-content></ng-content>\n</label>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-checkbox]': 'true'
                    },
                    styles: [".gui-checkbox{display:inline-block;font:14px/22px Arial;padding-left:32px;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-checkbox label{cursor:pointer}.gui-checkbox label:hover .gui-checkmark{border-color:#999}.gui-checkbox input{position:absolute;opacity:0;height:0;width:0}.gui-checkbox .gui-checkmark{box-sizing:content-box;border-radius:4px;position:absolute;left:0;height:20px;width:20px;border:1px solid #d6d6d6}.gui-checkbox input:checked+.gui-checkmark{border-color:#333}.gui-checkbox.gui-disabled.gui-checkbox{pointer-events:none}.gui-checkbox .gui-checkmark:after{content:\" \";display:none;position:absolute;left:6px;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);border-color:#333;border-style:solid;border-width:0 3.2px 3.2px 0;width:5.2px;height:12px}.gui-checkbox input:checked+.gui-checkmark:after{box-sizing:content-box;display:block}", ".gui-material .gui-checkbox{font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-material .gui-checkbox input:checked+.gui-checkmark{border-color:#3949ab;background:#3949ab}.gui-material .gui-checkbox input:focus+.gui-checkmark{border-color:#3949ab}.gui-material .gui-checkbox .gui-checkmark:after{border-color:#fff}", ".gui-dark .gui-checkbox{color:#bdbdbd}.gui-dark .gui-checkbox .gui-checkmark,.gui-dark .gui-checkbox .gui-checkmark:after,.gui-dark .gui-checkbox input:checked+.gui-checkmark{border-color:#878787}"]
                }] }
    ];
    /** @nocollapse */
    FabricCheckboxComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    FabricCheckboxComponent.propDecorators = {
        name: [{ type: Input }],
        checked: [{ type: Input }],
        disabled: [{ type: Input }],
        changed: [{ type: Output }]
    };
    return FabricCheckboxComponent;
}());
export { FabricCheckboxComponent };
if (false) {
    /** @type {?} */
    FabricCheckboxComponent.prototype.name;
    /** @type {?} */
    FabricCheckboxComponent.prototype.checked;
    /** @type {?} */
    FabricCheckboxComponent.prototype.disabled;
    /** @type {?} */
    FabricCheckboxComponent.prototype.changed;
    /**
     * @type {?}
     * @private
     */
    FabricCheckboxComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    FabricCheckboxComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiZm9ybS9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBRVQsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCO0lBNEJDLGlDQUFvQixVQUFzQixFQUMvQixRQUFtQjtRQURWLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQVQ5QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBR3pCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFHMUIsWUFBTyxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBSXBELENBQUM7Ozs7O0lBRUQsNkNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2pDLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUNyQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQyxDQUFDO2FBQ3RFO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQyxDQUFDO2FBQ3pFO1NBQ0Q7SUFDRixDQUFDOzs7O0lBRUQsdUNBQUs7OztJQUFMO1FBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7O2dCQTdDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLCtOQUFzQztvQkFNdEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxJQUFJLEVBQUU7d0JBQ0wsc0JBQXNCLEVBQUUsTUFBTTtxQkFDOUI7O2lCQUNEOzs7O2dCQXhCQSxVQUFVO2dCQUtWLFNBQVM7Ozt1QkFzQlIsS0FBSzswQkFHTCxLQUFLOzJCQUdMLEtBQUs7MEJBR0wsTUFBTTs7SUFzQlIsOEJBQUM7Q0FBQSxBQS9DRCxJQStDQztTQWpDWSx1QkFBdUI7OztJQUVuQyx1Q0FDYTs7SUFFYiwwQ0FDeUI7O0lBRXpCLDJDQUMwQjs7SUFFMUIsMENBQ29EOzs7OztJQUV4Qyw2Q0FBOEI7Ozs7O0lBQ3ZDLDJDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdEV2ZW50RW1pdHRlcixcblx0SW5wdXQsXG5cdE9uQ2hhbmdlcyxcblx0T3V0cHV0LFxuXHRSZW5kZXJlcjIsXG5cdFNpbXBsZUNoYW5nZXMsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1jaGVja2JveCcsXG5cdHRlbXBsYXRlVXJsOiBgY2hlY2tib3guY29tcG9uZW50Lmh0bWxgLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9jaGVja2JveC5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL2NoZWNrYm94Lm1hdGVyaWFsLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvY2hlY2tib3guZGFyay5uZ3guc2Nzcydcblx0XSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1jaGVja2JveF0nOiAndHJ1ZSdcblx0fVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNDaGVja2JveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0bmFtZTogc3RyaW5nO1xuXG5cdEBJbnB1dCgpXG5cdGNoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRASW5wdXQoKVxuXHRkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdEBPdXRwdXQoKVxuXHRjaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRpZiAoY2hhbmdlcy5kaXNhYmxlZCkge1xuXHRcdFx0aWYgKHRoaXMuZGlzYWJsZWQpIHtcblx0XHRcdFx0dGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2d1aS1kaXNhYmxlZCcpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2d1aS1kaXNhYmxlZCcpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNoZWNrKCkge1xuXHRcdHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XG5cdFx0dGhpcy5jaGFuZ2VkLmVtaXQodGhpcy5jaGVja2VkKTtcblx0fVxuXG59XG4iXX0=