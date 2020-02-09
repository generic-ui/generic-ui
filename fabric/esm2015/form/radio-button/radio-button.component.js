/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewEncapsulation } from '@angular/core';
export class FabricRadioButtonComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.checked = false;
        this.changed = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.disabled) {
            this.renderer.addClass(this.elementRef.nativeElement, 'gui-disabled');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'gui-disabled');
        }
    }
    /**
     * @return {?}
     */
    check() {
        this.checked = true;
        this.changed.emit(this.checked);
    }
}
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
FabricRadioButtonComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
FabricRadioButtonComponent.propDecorators = {
    name: [{ type: Input }],
    checked: [{ type: Input }],
    disabled: [{ type: Input }],
    changed: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vcmFkaW8tYnV0dG9uL3JhZGlvLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWdCckosTUFBTSxPQUFPLDBCQUEwQjs7Ozs7SUFjdEMsWUFBb0IsVUFBc0IsRUFDL0IsUUFBbUI7UUFEVixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFUOUIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQU16QixZQUFPLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7SUFJcEQsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDdEU7YUFBTTtZQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQ3pFO0lBQ0YsQ0FBQzs7OztJQUVELEtBQUs7UUFDSixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7O1lBM0NELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixvT0FBMEM7Z0JBTTFDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsSUFBSSxFQUFFO29CQUNMLDBCQUEwQixFQUFFLE1BQU07aUJBQ2xDOzthQUNEOzs7O1lBZjRDLFVBQVU7WUFBMEMsU0FBUzs7O21CQWtCeEcsS0FBSztzQkFHTCxLQUFLO3VCQUdMLEtBQUs7c0JBR0wsTUFBTTs7OztJQVRQLDBDQUNhOztJQUViLDZDQUN5Qjs7SUFFekIsOENBQ2tCOztJQUVsQiw2Q0FDb0Q7Ozs7O0lBRXhDLGdEQUE4Qjs7Ozs7SUFDdkMsOENBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXQsIFJlbmRlcmVyMiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXJhZGlvLWJ1dHRvbicsXG5cdHRlbXBsYXRlVXJsOiBgcmFkaW8tYnV0dG9uLmNvbXBvbmVudC5odG1sYCxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vcmFkaW8tYnV0dG9uLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvcmFkaW8tYnV0dG9uLm1hdGVyaWFsLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvcmFkaW8tYnV0dG9uLmRhcmsubmd4LnNjc3MnXG5cdF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktcmFkaW8tYnV0dG9uXSc6ICd0cnVlJ1xuXHR9XG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY1JhZGlvQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRuYW1lOiBzdHJpbmc7XG5cblx0QElucHV0KClcblx0Y2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdEBJbnB1dCgpXG5cdGRpc2FibGVkOiBib29sZWFuO1xuXG5cdEBPdXRwdXQoKVxuXHRjaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKCkge1xuXHRcdGlmICh0aGlzLmRpc2FibGVkKSB7XG5cdFx0XHR0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZ3VpLWRpc2FibGVkJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdndWktZGlzYWJsZWQnKTtcblx0XHR9XG5cdH1cblxuXHRjaGVjaygpIHtcblx0XHR0aGlzLmNoZWNrZWQgPSB0cnVlO1xuXHRcdHRoaXMuY2hhbmdlZC5lbWl0KHRoaXMuY2hlY2tlZCk7XG5cdH1cbn1cbiJdfQ==