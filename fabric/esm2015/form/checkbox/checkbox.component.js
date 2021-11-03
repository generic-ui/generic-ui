import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["input"];
const _c1 = ["*"];
export class FabricCheckboxComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.disabled = false;
        this.readonly = false;
        this.indeterminate = false;
        this.changed = new EventEmitter();
        this.checked = false;
    }
    ngOnChanges(changes) {
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
    }
    ngAfterViewInit() {
        this.inputRef.nativeElement.indeterminate = this.indeterminate;
    }
    check(event) {
        event.stopPropagation();
        this.checked = !this.checked;
        this.changed.emit(this.checked);
    }
}
FabricCheckboxComponent.ɵfac = function FabricCheckboxComponent_Factory(t) { return new (t || FabricCheckboxComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
FabricCheckboxComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricCheckboxComponent, selectors: [["gui-checkbox"]], viewQuery: function FabricCheckboxComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputRef = _t.first);
    } }, hostVars: 2, hostBindings: function FabricCheckboxComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("gui-checkbox", true);
    } }, inputs: { name: "name", inputChecked: ["checked", "inputChecked"], disabled: "disabled", readonly: "readonly", indeterminate: "indeterminate" }, outputs: { changed: "changed" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c1, decls: 5, vars: 3, consts: [["type", "checkbox", 3, "checked", "disabled", "name", "click"], ["input", ""], [1, "gui-checkmark"]], template: function FabricCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "label");
        i0.ɵɵelementStart(1, "input", 0, 1);
        i0.ɵɵlistener("click", function FabricCheckboxComponent_Template_input_click_1_listener($event) { return ctx.check($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "span", 2);
        i0.ɵɵprojection(4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("checked", ctx.checked)("disabled", ctx.disabled)("name", ctx.name);
    } }, styles: [".gui-checkbox{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;line-height:24px;padding-left:32px;position:relative}.gui-checkbox label{cursor:pointer}.gui-checkbox label:hover .gui-checkmark{border-color:#999}.gui-checkbox input{height:0;opacity:0;position:absolute;width:0}.gui-checkbox .gui-checkmark{border-color:#575757;border-radius:4px;border-style:solid;border-width:2px;box-sizing:content-box;height:20px;left:0;position:absolute;width:20px}.gui-checkbox input:checked+.gui-checkmark{border-color:#575757}.gui-checkbox.gui-disabled.gui-checkbox{color:#ccc;pointer-events:none}.gui-checkbox.gui-readonly.gui-checkbox{pointer-events:none}.gui-checkbox .gui-checkmark:after{content:\" \";display:none;left:6px;position:absolute;-ms-transform:rotate(45deg);transform:rotate(45deg)}.gui-checkbox input:checked+.gui-checkmark:after{box-sizing:content-box;display:block}.gui-checkbox .gui-checkmark:after{border-color:#575757;border-style:solid;border-width:0 3.2px 3.2px 0;height:12px;width:5.2px}.gui-checkbox input:indeterminate+.gui-checkmark:after{display:block;height:10px;left:9px;top:4px;-ms-transform:rotate(90deg);transform:rotate(90deg);width:0}\n", ".gui-material .gui-checkbox{font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-material .gui-checkbox input:focus+.gui-checkmark{border-color:#3949ab}.gui-material .gui-checkbox label:hover .gui-checkmark{border-color:#575757}.gui-material .gui-checkbox .gui-checkmark{border-color:#999}.gui-material .gui-checkbox input:checked+.gui-checkmark{background:#3949ab;border-color:#3949ab}.gui-material .gui-checkbox .gui-checkmark:after{border-color:#fff}.gui-material .gui-checkbox.gui-indeterminate .gui-checkmark{background:#3949ab;border-color:#3949ab}\n", ".gui-dark .gui-checkbox{color:#bdbdbd}.gui-dark .gui-checkbox .gui-checkmark{border-color:#878787}.gui-dark .gui-checkbox input:checked+.gui-checkmark{border-color:#878787}.gui-dark .gui-checkbox .gui-checkmark:after{border-color:#878787}.gui-dark .gui-checkbox.gui-disabled.gui-checkbox{opacity:.36}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricCheckboxComponent, [{
        type: Component,
        args: [{
                selector: 'gui-checkbox',
                templateUrl: './checkbox.component.html',
                styleUrls: [
                    './checkbox.ngx.scss',
                    './themes/checkbox.material.ngx.scss',
                    './themes/checkbox.dark.ngx.scss'
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-checkbox]': 'true'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { inputRef: [{
            type: ViewChild,
            args: ['input', { static: false }]
        }], name: [{
            type: Input
        }], inputChecked: [{
            type: Input,
            args: ['checked']
        }], disabled: [{
            type: Input
        }], readonly: [{
            type: Input
        }], indeterminate: [{
            type: Input
        }], changed: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL2Zvcm0vY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL2Zvcm0vY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVOLHVCQUF1QixFQUN2QixTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBR04sU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQzs7OztBQWlCdkIsTUFBTSxPQUFPLHVCQUF1QjtJQXdCbkMsWUFBb0IsVUFBc0IsRUFDL0IsUUFBbUI7UUFEVixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFkOUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUcxQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRzFCLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBRy9CLFlBQU8sR0FBMEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVwRCxZQUFPLEdBQVksS0FBSyxDQUFDO0lBSXpCLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBRWpDLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUNyQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQyxDQUFDO2FBQ3RFO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQyxDQUFDO2FBQ3pFO1NBQ0Q7UUFFRCxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDckIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUMsQ0FBQzthQUN0RTtpQkFBTTtnQkFDTixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUMsQ0FBQzthQUN6RTtTQUNEO1FBRUQsSUFBSSxPQUFPLENBQUMsYUFBYSxFQUFFO1lBQzFCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDbEIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO29CQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO2lCQUNqRDtxQkFBTTtvQkFDTixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO29CQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztpQkFDbkQ7YUFDRDtTQUNEO0lBQ0YsQ0FBQztJQUVELGVBQWU7UUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUNoRSxDQUFDO0lBRUQsS0FBSyxDQUFDLEtBQVk7UUFDakIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs4RkFuRVcsdUJBQXVCOzBFQUF2Qix1QkFBdUI7Ozs7Ozs7OztRQzlCcEMsNkJBQU87UUFDTixtQ0FLb0I7UUFKaEIseUdBQVMsaUJBQWEsSUFBQztRQUQzQixpQkFLb0I7UUFDcEIsMEJBQW1DO1FBQ25DLGtCQUF5QjtRQUMxQixpQkFBUTs7UUFOSCxlQUFtQjtRQUFuQixxQ0FBbUIsMEJBQUEsa0JBQUE7O3VGRDJCWCx1QkFBdUI7Y0FkbkMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixXQUFXLEVBQUUsMkJBQTJCO2dCQUN4QyxTQUFTLEVBQUU7b0JBQ1YscUJBQXFCO29CQUNyQixxQ0FBcUM7b0JBQ3JDLGlDQUFpQztpQkFDakM7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxJQUFJLEVBQUU7b0JBQ0wsc0JBQXNCLEVBQUUsTUFBTTtpQkFDOUI7YUFDRDtxRkFHQSxRQUFRO2tCQURQLFNBQVM7bUJBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUlyQyxJQUFJO2tCQURILEtBQUs7WUFJTixZQUFZO2tCQURYLEtBQUs7bUJBQUMsU0FBUztZQUloQixRQUFRO2tCQURQLEtBQUs7WUFJTixRQUFRO2tCQURQLEtBQUs7WUFJTixhQUFhO2tCQURaLEtBQUs7WUFJTixPQUFPO2tCQUROLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRBZnRlclZpZXdJbml0LFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRFdmVudEVtaXR0ZXIsXG5cdElucHV0LFxuXHRPbkNoYW5nZXMsXG5cdE91dHB1dCxcblx0UmVuZGVyZXIyLFxuXHRTaW1wbGVDaGFuZ2VzLFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1jaGVja2JveCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9jaGVja2JveC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL2NoZWNrYm94Lm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvY2hlY2tib3gubWF0ZXJpYWwubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9jaGVja2JveC5kYXJrLm5neC5zY3NzJ1xuXHRdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLWNoZWNrYm94XSc6ICd0cnVlJ1xuXHR9XG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0NoZWNrYm94Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcblx0QFZpZXdDaGlsZCgnaW5wdXQnLCB7IHN0YXRpYzogZmFsc2UgfSlcblx0aW5wdXRSZWY6IEVsZW1lbnRSZWY7XG5cblx0QElucHV0KClcblx0bmFtZTogc3RyaW5nO1xuXG5cdEBJbnB1dCgnY2hlY2tlZCcpXG5cdGlucHV0Q2hlY2tlZDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdEBJbnB1dCgpXG5cdHJlYWRvbmx5OiBib29sZWFuID0gZmFsc2U7XG5cblx0QElucHV0KClcblx0aW5kZXRlcm1pbmF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdEBPdXRwdXQoKVxuXHRjaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0dGhpcy5jaGVja2VkID0gdGhpcy5pbnB1dENoZWNrZWQ7XG5cblx0XHRpZiAoY2hhbmdlcy5kaXNhYmxlZCkge1xuXHRcdFx0aWYgKHRoaXMuZGlzYWJsZWQpIHtcblx0XHRcdFx0dGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2d1aS1kaXNhYmxlZCcpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2d1aS1kaXNhYmxlZCcpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzLnJlYWRvbmx5KSB7XG5cdFx0XHRpZiAodGhpcy5yZWFkb25seSkge1xuXHRcdFx0XHR0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZ3VpLXJlYWRvbmx5Jyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZ3VpLXJlYWRvbmx5Jyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXMuaW5kZXRlcm1pbmF0ZSkge1xuXHRcdFx0aWYgKHRoaXMuaW5wdXRSZWYpIHtcblx0XHRcdFx0aWYgKHRoaXMuaW5kZXRlcm1pbmF0ZSkge1xuXHRcdFx0XHRcdHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudC5pbmRldGVybWluYXRlID0gdHJ1ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuXHRcdFx0XHRcdHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudC5jaGVja2VkID0gdGhpcy5jaGVja2VkO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudC5pbmRldGVybWluYXRlID0gdGhpcy5pbmRldGVybWluYXRlO1xuXHR9XG5cblx0Y2hlY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0dGhpcy5jaGVja2VkID0gIXRoaXMuY2hlY2tlZDtcblx0XHR0aGlzLmNoYW5nZWQuZW1pdCh0aGlzLmNoZWNrZWQpO1xuXHR9XG5cbn1cbiIsIjxsYWJlbD5cblx0PGlucHV0ICNpbnB1dFxuXHRcdCAgIChjbGljayk9XCJjaGVjaygkZXZlbnQpXCJcblx0XHQgICBbY2hlY2tlZF09XCJjaGVja2VkXCJcblx0XHQgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuXHRcdCAgIFtuYW1lXT1cIm5hbWVcIlxuXHRcdCAgIHR5cGU9XCJjaGVja2JveFwiPlxuXHQ8c3BhbiBjbGFzcz1cImd1aS1jaGVja21hcmtcIj48L3NwYW4+XG5cdDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbGFiZWw+XG4iXX0=