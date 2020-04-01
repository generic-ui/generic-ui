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
        this.readonly = false;
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
        if (changes.readonly) {
            if (this.readonly) {
                this.renderer.addClass(this.elementRef.nativeElement, 'gui-readonly');
            }
            else {
                this.renderer.removeClass(this.elementRef.nativeElement, 'gui-readonly');
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
                    styles: [".gui-checkbox{display:inline-block;line-height:24px;padding-left:32px;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-checkbox label{cursor:pointer}.gui-checkbox label:hover .gui-checkmark{border-color:#999}.gui-checkbox input{position:absolute;opacity:0;height:0;width:0}.gui-checkbox .gui-checkmark{box-sizing:content-box;border-radius:4px;position:absolute;left:0;height:20px;width:20px;border:2px solid #575757}.gui-checkbox input:checked+.gui-checkmark{border-color:#575757}.gui-checkbox.gui-disabled.gui-checkbox{color:#ccc;pointer-events:none}.gui-checkbox.gui-readonly.gui-checkbox{pointer-events:none}.gui-checkbox .gui-checkmark:after{content:\" \";display:none;position:absolute;left:6px;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);border-color:#575757;border-style:solid;border-width:0 3.2px 3.2px 0;width:5.2px;height:12px}.gui-checkbox input:checked+.gui-checkmark:after{box-sizing:content-box;display:block}", ".gui-material .gui-checkbox{font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-material .gui-checkbox input:focus+.gui-checkmark{border-color:#3949ab}.gui-material .gui-checkbox label:hover .gui-checkmark{border-color:#575757}.gui-material .gui-checkbox .gui-checkmark{border-color:#999}.gui-material .gui-checkbox input:checked+.gui-checkmark{border-color:#3949ab;background:#3949ab}.gui-material .gui-checkbox .gui-checkmark:after{border-color:#fff}", ".gui-dark .gui-checkbox{color:#bdbdbd}.gui-dark .gui-checkbox .gui-checkmark,.gui-dark .gui-checkbox .gui-checkmark:after,.gui-dark .gui-checkbox input:checked+.gui-checkmark{border-color:#878787}.gui-dark .gui-checkbox.gui-disabled.gui-checkbox{opacity:.36}"]
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
        readonly: [{ type: Input }],
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
    FabricCheckboxComponent.prototype.readonly;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiZm9ybS9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBRVQsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCO0lBK0JDLGlDQUFvQixVQUFzQixFQUMvQixRQUFtQjtRQURWLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQVo5QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBR3pCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFHMUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUcxQixZQUFPLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7SUFJcEQsQ0FBQzs7Ozs7SUFFRCw2Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDakMsSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQ3JCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDLENBQUM7YUFDdEU7aUJBQU07Z0JBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDLENBQUM7YUFDekU7U0FDRDtRQUVELElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUNyQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQyxDQUFDO2FBQ3RFO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQyxDQUFDO2FBQ3pFO1NBQ0Q7SUFDRixDQUFDOzs7O0lBRUQsdUNBQUs7OztJQUFMO1FBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7O2dCQXhERCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLCtOQUFzQztvQkFNdEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxJQUFJLEVBQUU7d0JBQ0wsc0JBQXNCLEVBQUUsTUFBTTtxQkFDOUI7O2lCQUNEOzs7O2dCQXhCQSxVQUFVO2dCQUtWLFNBQVM7Ozt1QkFzQlIsS0FBSzswQkFHTCxLQUFLOzJCQUdMLEtBQUs7MkJBR0wsS0FBSzswQkFHTCxNQUFNOztJQThCUiw4QkFBQztDQUFBLEFBMURELElBMERDO1NBNUNZLHVCQUF1Qjs7O0lBRW5DLHVDQUNhOztJQUViLDBDQUN5Qjs7SUFFekIsMkNBQzBCOztJQUUxQiwyQ0FDMEI7O0lBRTFCLDBDQUNvRDs7Ozs7SUFFeEMsNkNBQThCOzs7OztJQUN2QywyQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRFdmVudEVtaXR0ZXIsXG5cdElucHV0LFxuXHRPbkNoYW5nZXMsXG5cdE91dHB1dCxcblx0UmVuZGVyZXIyLFxuXHRTaW1wbGVDaGFuZ2VzLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktY2hlY2tib3gnLFxuXHR0ZW1wbGF0ZVVybDogYGNoZWNrYm94LmNvbXBvbmVudC5odG1sYCxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vY2hlY2tib3gubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9jaGVja2JveC5tYXRlcmlhbC5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL2NoZWNrYm94LmRhcmsubmd4LnNjc3MnXG5cdF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktY2hlY2tib3hdJzogJ3RydWUnXG5cdH1cbn0pXG5leHBvcnQgY2xhc3MgRmFicmljQ2hlY2tib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdG5hbWU6IHN0cmluZztcblxuXHRASW5wdXQoKVxuXHRjaGVja2VkOiBib29sZWFuID0gZmFsc2U7XG5cblx0QElucHV0KClcblx0ZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRASW5wdXQoKVxuXHRyZWFkb25seTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdEBPdXRwdXQoKVxuXHRjaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRpZiAoY2hhbmdlcy5kaXNhYmxlZCkge1xuXHRcdFx0aWYgKHRoaXMuZGlzYWJsZWQpIHtcblx0XHRcdFx0dGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2d1aS1kaXNhYmxlZCcpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2d1aS1kaXNhYmxlZCcpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLnJlYWRvbmx5KSB7XG5cdFx0XHRpZiAodGhpcy5yZWFkb25seSkge1xuXHRcdFx0XHR0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZ3VpLXJlYWRvbmx5Jyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZ3VpLXJlYWRvbmx5Jyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y2hlY2soKSB7XG5cdFx0dGhpcy5jaGVja2VkID0gIXRoaXMuY2hlY2tlZDtcblx0XHR0aGlzLmNoYW5nZWQuZW1pdCh0aGlzLmNoZWNrZWQpO1xuXHR9XG5cbn1cbiJdfQ==