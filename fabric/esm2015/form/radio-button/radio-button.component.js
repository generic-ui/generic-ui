import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class FabricRadioButtonComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.checked = false;
        this.changed = new EventEmitter();
    }
    ngOnChanges() {
        if (this.disabled) {
            this.renderer.addClass(this.elementRef.nativeElement, 'gui-disabled');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'gui-disabled');
        }
    }
    check() {
        this.checked = true;
        this.changed.emit(this.checked);
    }
}
FabricRadioButtonComponent.ɵfac = function FabricRadioButtonComponent_Factory(t) { return new (t || FabricRadioButtonComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
FabricRadioButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricRadioButtonComponent, selectors: [["gui-radio-button"]], hostVars: 2, hostBindings: function FabricRadioButtonComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("gui-radio-button", true);
    } }, inputs: { name: "name", checked: "checked", disabled: "disabled" }, outputs: { changed: "changed" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 4, vars: 3, consts: [["type", "radio", 3, "checked", "disabled", "name", "click"], [1, "gui-radio-checkmark"]], template: function FabricRadioButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "label");
        i0.ɵɵelementStart(1, "input", 0);
        i0.ɵɵlistener("click", function FabricRadioButtonComponent_Template_input_click_1_listener() { return ctx.check(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelement(2, "span", 1);
        i0.ɵɵprojection(3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("checked", ctx.checked)("disabled", ctx.disabled)("name", ctx.name);
    } }, styles: [".gui-radio-button{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;font:14px Arial;line-height:18px;padding-left:32px;position:relative}.gui-radio-button label{cursor:pointer}.gui-radio-button label:hover .gui-radio-checkmark{border-color:#999}.gui-radio-button input{height:0;opacity:0;position:absolute;width:0}.gui-radio-button .gui-radio-checkmark{border-color:#d6d6d6;border-radius:50%;border-style:solid;border-width:1px;box-sizing:content-box;height:16px;left:0;position:absolute;width:16px}.gui-radio-button input:checked+.gui-radio-checkmark{border-color:#999}.gui-radio-button input:focus+.gui-radio-checkmark{border-color:#6fb4e8}.gui-radio-button.gui-disabled.gui-radio-button{color:#ccc;pointer-events:none}.gui-radio-button .gui-radio-checkmark:after{content:\"\";display:none;position:absolute}.gui-radio-button input:checked+.gui-radio-checkmark:after{box-sizing:content-box;display:block}.gui-radio-button .gui-radio-checkmark:after{background:#333;border-radius:50%;height:16px;-ms-transform:scale(.5);transform:scale(.5);width:16px}\n", ".gui-material .gui-radio-button{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n", ".gui-dark .gui-radio-button{color:#bdbdbd}.gui-dark .gui-radio-button .gui-radio-checkmark{border-color:#878787}.gui-dark .gui-radio-button input:checked+.gui-radio-checkmark{border-color:#878787}.gui-dark .gui-radio-button input:focus+.gui-radio-checkmark{border-color:#ce93d8}.gui-dark .gui-radio-button .gui-radio-checkmark:after{background:#878787}.gui-dark .gui-radio-button.gui-disabled.gui-radio-button{opacity:.36}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricRadioButtonComponent, [{
        type: Component,
        args: [{
                selector: 'gui-radio-button',
                templateUrl: './radio-button.component.html',
                styleUrls: [
                    './radio-button.ngx.scss',
                    './themes/radio-button.material.ngx.scss',
                    './themes/radio-button.dark.ngx.scss'
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-radio-button]': 'true'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { name: [{
            type: Input
        }], checked: [{
            type: Input
        }], disabled: [{
            type: Input
        }], changed: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9mb3JtL3JhZGlvLWJ1dHRvbi9yYWRpby1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL2Zvcm0vcmFkaW8tYnV0dG9uL3JhZGlvLWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFhLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFnQnJKLE1BQU0sT0FBTywwQkFBMEI7SUFjdEMsWUFBb0IsVUFBc0IsRUFDL0IsUUFBbUI7UUFEVixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFUOUIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQU16QixZQUFPLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7SUFJcEQsQ0FBQztJQUVELFdBQVc7UUFDVixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDdEU7YUFBTTtZQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQ3pFO0lBQ0YsQ0FBQztJQUVELEtBQUs7UUFDSixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7b0dBN0JXLDBCQUEwQjs2RUFBMUIsMEJBQTBCOzs7O1FDaEJ2Qyw2QkFBTztRQUNOLGdDQUtjO1FBSmIsc0dBQVMsV0FBTyxJQUFDO1FBRGxCLGlCQUtjO1FBQ2QsMEJBQXlDO1FBQ3pDLGtCQUF5QjtRQUMxQixpQkFBUTs7UUFOTixlQUFpQjtRQUFqQixxQ0FBaUIsMEJBQUEsa0JBQUE7O3VGRGFOLDBCQUEwQjtjQWR0QyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFO29CQUNWLHlCQUF5QjtvQkFDekIseUNBQXlDO29CQUN6QyxxQ0FBcUM7aUJBQ3JDO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsSUFBSSxFQUFFO29CQUNMLDBCQUEwQixFQUFFLE1BQU07aUJBQ2xDO2FBQ0Q7cUZBSUEsSUFBSTtrQkFESCxLQUFLO1lBSU4sT0FBTztrQkFETixLQUFLO1lBSU4sUUFBUTtrQkFEUCxLQUFLO1lBSU4sT0FBTztrQkFETixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXQsIFJlbmRlcmVyMiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXJhZGlvLWJ1dHRvbicsXG5cdHRlbXBsYXRlVXJsOiAnLi9yYWRpby1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9yYWRpby1idXR0b24ubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9yYWRpby1idXR0b24ubWF0ZXJpYWwubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9yYWRpby1idXR0b24uZGFyay5uZ3guc2Nzcydcblx0XSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1yYWRpby1idXR0b25dJzogJ3RydWUnXG5cdH1cbn0pXG5leHBvcnQgY2xhc3MgRmFicmljUmFkaW9CdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdG5hbWU6IHN0cmluZztcblxuXHRASW5wdXQoKVxuXHRjaGVja2VkOiBib29sZWFuID0gZmFsc2U7XG5cblx0QElucHV0KClcblx0ZGlzYWJsZWQ6IGJvb2xlYW47XG5cblx0QE91dHB1dCgpXG5cdGNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoKSB7XG5cdFx0aWYgKHRoaXMuZGlzYWJsZWQpIHtcblx0XHRcdHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdndWktZGlzYWJsZWQnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2d1aS1kaXNhYmxlZCcpO1xuXHRcdH1cblx0fVxuXG5cdGNoZWNrKCkge1xuXHRcdHRoaXMuY2hlY2tlZCA9IHRydWU7XG5cdFx0dGhpcy5jaGFuZ2VkLmVtaXQodGhpcy5jaGVja2VkKTtcblx0fVxufVxuIiwiPGxhYmVsPlxuXHQ8aW5wdXRcblx0XHQoY2xpY2spPVwiY2hlY2soKVwiXG5cdFx0W2NoZWNrZWRdPWNoZWNrZWRcblx0XHRbZGlzYWJsZWRdPWRpc2FibGVkXG5cdFx0W25hbWVdPW5hbWVcblx0XHR0eXBlPVwicmFkaW9cIj5cblx0PHNwYW4gY2xhc3M9XCJndWktcmFkaW8tY2hlY2ttYXJrXCI+PC9zcGFuPlxuXHQ8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2xhYmVsPlxuIl19