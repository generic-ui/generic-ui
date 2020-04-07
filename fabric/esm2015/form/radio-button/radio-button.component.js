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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vcmFkaW8tYnV0dG9uL3JhZGlvLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBZ0J2QixNQUFNLE9BQU8sMEJBQTBCOzs7OztJQWN0QyxZQUFvQixVQUFzQixFQUMvQixRQUFtQjtRQURWLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQVQ5QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBTXpCLFlBQU8sR0FBMEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUlwRCxDQUFDOzs7O0lBRUQsV0FBVztRQUNWLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUMsQ0FBQztTQUN0RTthQUFNO1lBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDekU7SUFDRixDQUFDOzs7O0lBRUQsS0FBSztRQUNKLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7WUEzQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLG9PQUEwQztnQkFNMUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxJQUFJLEVBQUU7b0JBQ0wsMEJBQTBCLEVBQUUsTUFBTTtpQkFDbEM7O2FBQ0Q7Ozs7WUF0QkEsVUFBVTtZQUtWLFNBQVM7OzttQkFvQlIsS0FBSztzQkFHTCxLQUFLO3VCQUdMLEtBQUs7c0JBR0wsTUFBTTs7OztJQVRQLDBDQUNhOztJQUViLDZDQUN5Qjs7SUFFekIsOENBQ2tCOztJQUVsQiw2Q0FDb0Q7Ozs7O0lBRXhDLGdEQUE4Qjs7Ozs7SUFDdkMsOENBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0RXZlbnRFbWl0dGVyLFxuXHRJbnB1dCxcblx0T25DaGFuZ2VzLFxuXHRPdXRwdXQsXG5cdFJlbmRlcmVyMixcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1yYWRpby1idXR0b24nLFxuXHR0ZW1wbGF0ZVVybDogYHJhZGlvLWJ1dHRvbi5jb21wb25lbnQuaHRtbGAsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL3JhZGlvLWJ1dHRvbi5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL3JhZGlvLWJ1dHRvbi5tYXRlcmlhbC5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL3JhZGlvLWJ1dHRvbi5kYXJrLm5neC5zY3NzJ1xuXHRdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLXJhZGlvLWJ1dHRvbl0nOiAndHJ1ZSdcblx0fVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNSYWRpb0J1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0bmFtZTogc3RyaW5nO1xuXG5cdEBJbnB1dCgpXG5cdGNoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRASW5wdXQoKVxuXHRkaXNhYmxlZDogYm9vbGVhbjtcblxuXHRAT3V0cHV0KClcblx0Y2hhbmdlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcygpIHtcblx0XHRpZiAodGhpcy5kaXNhYmxlZCkge1xuXHRcdFx0dGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2d1aS1kaXNhYmxlZCcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZ3VpLWRpc2FibGVkJyk7XG5cdFx0fVxuXHR9XG5cblx0Y2hlY2soKSB7XG5cdFx0dGhpcy5jaGVja2VkID0gdHJ1ZTtcblx0XHR0aGlzLmNoYW5nZWQuZW1pdCh0aGlzLmNoZWNrZWQpO1xuXHR9XG59XG4iXX0=