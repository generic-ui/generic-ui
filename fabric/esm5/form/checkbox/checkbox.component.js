/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
var FabricCheckboxComponent = /** @class */ (function () {
    function FabricCheckboxComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.disabled = false;
        this.readonly = false;
        this.indeterminate = false;
        this.changed = new EventEmitter();
        this.checked = false;
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
        this.checked = this.inputChecked;
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
        if (changes.indeterminate) {
            if (this.inputRef) {
                if (this.indeterminate) {
                    this.inputRef.nativeElement.indeterminate = true;
                }
                else {
                    this.inputRef.nativeElement.indeterminate = false;
                    this.inputRef.nativeElement.checked = this.checked;
                }
            }
        }
    };
    /**
     * @return {?}
     */
    FabricCheckboxComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.inputRef.nativeElement.indeterminate = this.indeterminate;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FabricCheckboxComponent.prototype.check = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        this.checked = !this.checked;
        this.changed.emit(this.checked);
    };
    FabricCheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-checkbox',
                    template: "<label>\n\t<input #input\n\t\t\t(click)=\"check($event)\"\n\t\t\t[checked]=\"checked\"\n\t\t\t[disabled]=\"disabled\"\n\t\t\t[name]=\"name\"\n\t\t\ttype=\"checkbox\">\n\t<span class=\"gui-checkmark\"></span>\n\t<ng-content></ng-content>\n</label>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-checkbox]': 'true'
                    },
                    styles: [".gui-checkbox{display:inline-block;line-height:24px;padding-left:32px;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-checkbox label{cursor:pointer}.gui-checkbox label:hover .gui-checkmark{border-color:#999}.gui-checkbox input{position:absolute;opacity:0;height:0;width:0}.gui-checkbox .gui-checkmark{box-sizing:content-box;border-radius:4px;position:absolute;left:0;height:20px;width:20px;border:2px solid #575757}.gui-checkbox input:checked+.gui-checkmark{border-color:#575757}.gui-checkbox.gui-disabled.gui-checkbox{color:#ccc;pointer-events:none}.gui-checkbox.gui-readonly.gui-checkbox{pointer-events:none}.gui-checkbox .gui-checkmark:after{content:\" \";display:none;position:absolute;left:6px;-ms-transform:rotate(45deg);transform:rotate(45deg);border-color:#575757;border-style:solid;border-width:0 3.2px 3.2px 0;width:5.2px;height:12px}.gui-checkbox input:checked+.gui-checkmark:after{box-sizing:content-box;display:block}.gui-checkbox input:indeterminate+.gui-checkmark::after{display:block;width:0;height:10px;left:9px;top:4px;-ms-transform:rotate(90deg);transform:rotate(90deg)}", ".gui-material .gui-checkbox{font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-material .gui-checkbox input:focus+.gui-checkmark{border-color:#3949ab}.gui-material .gui-checkbox label:hover .gui-checkmark{border-color:#575757}.gui-material .gui-checkbox .gui-checkmark{border-color:#999}.gui-material .gui-checkbox input:checked+.gui-checkmark{border-color:#3949ab;background:#3949ab}.gui-material .gui-checkbox .gui-checkmark:after{border-color:#fff}.gui-material .gui-checkbox.gui-indeterminate .gui-checkmark{background:#3949ab;border-color:#3949ab}", ".gui-dark .gui-checkbox{color:#bdbdbd}.gui-dark .gui-checkbox .gui-checkmark,.gui-dark .gui-checkbox .gui-checkmark:after,.gui-dark .gui-checkbox input:checked+.gui-checkmark{border-color:#878787}.gui-dark .gui-checkbox.gui-disabled.gui-checkbox{opacity:.36}"]
                }] }
    ];
    /** @nocollapse */
    FabricCheckboxComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    FabricCheckboxComponent.propDecorators = {
        inputRef: [{ type: ViewChild, args: ['input', { static: false },] }],
        name: [{ type: Input }],
        inputChecked: [{ type: Input, args: ['checked',] }],
        disabled: [{ type: Input }],
        readonly: [{ type: Input }],
        indeterminate: [{ type: Input }],
        changed: [{ type: Output }]
    };
    return FabricCheckboxComponent;
}());
export { FabricCheckboxComponent };
if (false) {
    /** @type {?} */
    FabricCheckboxComponent.prototype.inputRef;
    /** @type {?} */
    FabricCheckboxComponent.prototype.name;
    /** @type {?} */
    FabricCheckboxComponent.prototype.inputChecked;
    /** @type {?} */
    FabricCheckboxComponent.prototype.disabled;
    /** @type {?} */
    FabricCheckboxComponent.prototype.readonly;
    /** @type {?} */
    FabricCheckboxComponent.prototype.indeterminate;
    /** @type {?} */
    FabricCheckboxComponent.prototype.changed;
    /** @type {?} */
    FabricCheckboxComponent.prototype.checked;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiZm9ybS9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBRVQsU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUd2QjtJQXNDQyxpQ0FBb0IsVUFBc0IsRUFDL0IsUUFBbUI7UUFEVixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFkOUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUcxQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRzFCLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBRy9CLFlBQU8sR0FBMEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVwRCxZQUFPLEdBQVksS0FBSyxDQUFDO0lBSXpCLENBQUM7Ozs7O0lBRUQsNkNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUVqQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDckIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUMsQ0FBQzthQUN0RTtpQkFBTTtnQkFDTixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUMsQ0FBQzthQUN6RTtTQUNEO1FBRUQsSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQ3JCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDLENBQUM7YUFDdEU7aUJBQU07Z0JBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDLENBQUM7YUFDekU7U0FDRDtRQUVELElBQUksT0FBTyxDQUFDLGFBQWEsRUFBRTtZQUMxQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtvQkFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztpQkFDakQ7cUJBQU07b0JBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztvQkFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7aUJBQ25EO2FBQ0Q7U0FDRDtJQUNGLENBQUM7Ozs7SUFFRCxpREFBZTs7O0lBQWY7UUFDQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUNoRSxDQUFDOzs7OztJQUVELHVDQUFLOzs7O0lBQUwsVUFBTSxLQUFZO1FBQ2pCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Z0JBakZELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsY0FBYztvQkFDeEIsb1FBQXdDO29CQU14QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLElBQUksRUFBRTt3QkFDTCxzQkFBc0IsRUFBRSxNQUFNO3FCQUM5Qjs7aUJBQ0Q7Ozs7Z0JBekJBLFVBQVU7Z0JBS1YsU0FBUzs7OzJCQXNCUixTQUFTLFNBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTt1QkFHcEMsS0FBSzsrQkFHTCxLQUFLLFNBQUMsU0FBUzsyQkFHZixLQUFLOzJCQUdMLEtBQUs7Z0NBR0wsS0FBSzswQkFHTCxNQUFNOztJQWtEUiw4QkFBQztDQUFBLEFBbkZELElBbUZDO1NBckVZLHVCQUF1Qjs7O0lBQ25DLDJDQUNxQjs7SUFFckIsdUNBQ2E7O0lBRWIsK0NBQ3NCOztJQUV0QiwyQ0FDMEI7O0lBRTFCLDJDQUMwQjs7SUFFMUIsZ0RBQytCOztJQUUvQiwwQ0FDb0Q7O0lBRXBELDBDQUF5Qjs7Ozs7SUFFYiw2Q0FBOEI7Ozs7O0lBQ3ZDLDJDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFmdGVyVmlld0luaXQsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdEV2ZW50RW1pdHRlcixcblx0SW5wdXQsXG5cdE9uQ2hhbmdlcyxcblx0T3V0cHV0LFxuXHRSZW5kZXJlcjIsXG5cdFNpbXBsZUNoYW5nZXMsXG5cdFZpZXdDaGlsZCxcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWNoZWNrYm94Jyxcblx0dGVtcGxhdGVVcmw6IGAuL2NoZWNrYm94LmNvbXBvbmVudC5odG1sYCxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vY2hlY2tib3gubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9jaGVja2JveC5tYXRlcmlhbC5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL2NoZWNrYm94LmRhcmsubmd4LnNjc3MnXG5cdF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktY2hlY2tib3hdJzogJ3RydWUnXG5cdH1cbn0pXG5leHBvcnQgY2xhc3MgRmFicmljQ2hlY2tib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQge1xuXHRAVmlld0NoaWxkKCdpbnB1dCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuXHRpbnB1dFJlZjogRWxlbWVudFJlZjtcblxuXHRASW5wdXQoKVxuXHRuYW1lOiBzdHJpbmc7XG5cblx0QElucHV0KCdjaGVja2VkJylcblx0aW5wdXRDaGVja2VkOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0QElucHV0KClcblx0cmVhZG9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRASW5wdXQoKVxuXHRpbmRldGVybWluYXRlOiBib29sZWFuID0gZmFsc2U7XG5cblx0QE91dHB1dCgpXG5cdGNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRjaGVja2VkOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHR0aGlzLmNoZWNrZWQgPSB0aGlzLmlucHV0Q2hlY2tlZDtcblxuXHRcdGlmIChjaGFuZ2VzLmRpc2FibGVkKSB7XG5cdFx0XHRpZiAodGhpcy5kaXNhYmxlZCkge1xuXHRcdFx0XHR0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZ3VpLWRpc2FibGVkJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZ3VpLWRpc2FibGVkJyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMucmVhZG9ubHkpIHtcblx0XHRcdGlmICh0aGlzLnJlYWRvbmx5KSB7XG5cdFx0XHRcdHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdndWktcmVhZG9ubHknKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdndWktcmVhZG9ubHknKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlcy5pbmRldGVybWluYXRlKSB7XG5cdFx0XHRpZiAodGhpcy5pbnB1dFJlZikge1xuXHRcdFx0XHRpZiAodGhpcy5pbmRldGVybWluYXRlKSB7XG5cdFx0XHRcdFx0dGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50LmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudC5pbmRldGVybWluYXRlID0gZmFsc2U7XG5cdFx0XHRcdFx0dGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50LmNoZWNrZWQgPSB0aGlzLmNoZWNrZWQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0dGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50LmluZGV0ZXJtaW5hdGUgPSB0aGlzLmluZGV0ZXJtaW5hdGU7XG5cdH1cblxuXHRjaGVjayhldmVudDogRXZlbnQpOiB2b2lkIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xuXHRcdHRoaXMuY2hhbmdlZC5lbWl0KHRoaXMuY2hlY2tlZCk7XG5cdH1cblxufVxuIl19