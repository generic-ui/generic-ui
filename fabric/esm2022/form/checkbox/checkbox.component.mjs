import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
export class FabricCheckboxComponent {
    elementRef;
    renderer;
    inputRef;
    name = '';
    inputChecked = false;
    disabled = false;
    readonly = false;
    indeterminate = false;
    changed = new EventEmitter();
    checked = false;
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    ngOnChanges(changes) {
        this.checked = this.inputChecked;
        if (changes['disabled']) {
            if (this.disabled) {
                this.renderer.addClass(this.elementRef.nativeElement, 'gui-disabled');
            }
            else {
                this.renderer.removeClass(this.elementRef.nativeElement, 'gui-disabled');
            }
        }
        if (changes['readonly']) {
            if (this.readonly) {
                this.renderer.addClass(this.elementRef.nativeElement, 'gui-readonly');
            }
            else {
                this.renderer.removeClass(this.elementRef.nativeElement, 'gui-readonly');
            }
        }
        if (changes['indeterminate']) {
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
        if (this.inputRef) {
            this.inputRef.nativeElement.indeterminate = this.indeterminate;
        }
    }
    check(event) {
        event.stopPropagation();
        this.checked = !this.checked;
        this.changed.emit(this.checked);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FabricCheckboxComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FabricCheckboxComponent, selector: "gui-checkbox", inputs: { name: "name", inputChecked: ["checked", "inputChecked"], disabled: "disabled", readonly: "readonly", indeterminate: "indeterminate" }, outputs: { changed: "changed" }, host: { properties: { "class.gui-checkbox": "true" } }, viewQueries: [{ propertyName: "inputRef", first: true, predicate: ["input"], descendants: true, read: ElementRef }], usesOnChanges: true, ngImport: i0, template: "<label>\n\t<input #input\n\t\t   (click)=\"check($event)\"\n\t\t   [attr.name]=\"name\"\n\t\t   [checked]=\"checked\"\n\t\t   [disabled]=\"disabled\"\n\t\t   type=\"checkbox\">\n\t<span class=\"gui-checkmark\"></span>\n\t<ng-content></ng-content>\n</label>\n", styles: [".gui-checkbox{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;line-height:24px;padding-left:32px;position:relative}.gui-checkbox label{cursor:pointer}.gui-checkbox label:hover .gui-checkmark{border-color:#999}.gui-checkbox input{height:0;opacity:0;position:absolute;width:0}.gui-checkbox .gui-checkmark{border-color:#575757;border-radius:4px;border-style:solid;border-width:2px;box-sizing:content-box;height:20px;left:0;position:absolute;width:20px}.gui-checkbox input:checked+.gui-checkmark{border-color:#575757}.gui-checkbox.gui-disabled.gui-checkbox{color:#ccc;pointer-events:none}.gui-checkbox.gui-readonly.gui-checkbox{pointer-events:none}.gui-checkbox .gui-checkmark:after{content:\" \";display:none;left:6px;position:absolute;-ms-transform:rotate(45deg);transform:rotate(45deg)}.gui-checkbox input:checked+.gui-checkmark:after{box-sizing:content-box;display:block}.gui-checkbox .gui-checkmark:after{border-color:#575757;border-style:solid;border-width:0 3.2px 3.2px 0;height:12px;width:5.2px}.gui-checkbox input:indeterminate+.gui-checkmark:after{display:block;height:10px;left:9px;top:4px;-ms-transform:rotate(90deg);transform:rotate(90deg);width:0}\n", ".gui-material .gui-checkbox{font-family:Roboto,Helvetica Neue,sans-serif}.gui-material .gui-checkbox input:focus+.gui-checkmark{border-color:#3949ab}.gui-material .gui-checkbox label:hover .gui-checkmark{border-color:#575757}.gui-material .gui-checkbox .gui-checkmark{border-color:#999}.gui-material .gui-checkbox input:checked+.gui-checkmark{background:#3949ab;border-color:#3949ab}.gui-material .gui-checkbox .gui-checkmark:after{border-color:#fff}.gui-material .gui-checkbox.gui-indeterminate .gui-checkmark{background:#3949ab;border-color:#3949ab}\n", ".gui-dark .gui-checkbox{color:#bdbdbd}.gui-dark .gui-checkbox .gui-checkmark{border-color:#878787}.gui-dark .gui-checkbox input:checked+.gui-checkmark{border-color:#878787}.gui-dark .gui-checkbox .gui-checkmark:after{border-color:#878787}.gui-dark .gui-checkbox.gui-disabled.gui-checkbox{opacity:.36}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FabricCheckboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-checkbox', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        '[class.gui-checkbox]': 'true'
                    }, template: "<label>\n\t<input #input\n\t\t   (click)=\"check($event)\"\n\t\t   [attr.name]=\"name\"\n\t\t   [checked]=\"checked\"\n\t\t   [disabled]=\"disabled\"\n\t\t   type=\"checkbox\">\n\t<span class=\"gui-checkmark\"></span>\n\t<ng-content></ng-content>\n</label>\n", styles: [".gui-checkbox{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;line-height:24px;padding-left:32px;position:relative}.gui-checkbox label{cursor:pointer}.gui-checkbox label:hover .gui-checkmark{border-color:#999}.gui-checkbox input{height:0;opacity:0;position:absolute;width:0}.gui-checkbox .gui-checkmark{border-color:#575757;border-radius:4px;border-style:solid;border-width:2px;box-sizing:content-box;height:20px;left:0;position:absolute;width:20px}.gui-checkbox input:checked+.gui-checkmark{border-color:#575757}.gui-checkbox.gui-disabled.gui-checkbox{color:#ccc;pointer-events:none}.gui-checkbox.gui-readonly.gui-checkbox{pointer-events:none}.gui-checkbox .gui-checkmark:after{content:\" \";display:none;left:6px;position:absolute;-ms-transform:rotate(45deg);transform:rotate(45deg)}.gui-checkbox input:checked+.gui-checkmark:after{box-sizing:content-box;display:block}.gui-checkbox .gui-checkmark:after{border-color:#575757;border-style:solid;border-width:0 3.2px 3.2px 0;height:12px;width:5.2px}.gui-checkbox input:indeterminate+.gui-checkmark:after{display:block;height:10px;left:9px;top:4px;-ms-transform:rotate(90deg);transform:rotate(90deg);width:0}\n", ".gui-material .gui-checkbox{font-family:Roboto,Helvetica Neue,sans-serif}.gui-material .gui-checkbox input:focus+.gui-checkmark{border-color:#3949ab}.gui-material .gui-checkbox label:hover .gui-checkmark{border-color:#575757}.gui-material .gui-checkbox .gui-checkmark{border-color:#999}.gui-material .gui-checkbox input:checked+.gui-checkmark{background:#3949ab;border-color:#3949ab}.gui-material .gui-checkbox .gui-checkmark:after{border-color:#fff}.gui-material .gui-checkbox.gui-indeterminate .gui-checkmark{background:#3949ab;border-color:#3949ab}\n", ".gui-dark .gui-checkbox{color:#bdbdbd}.gui-dark .gui-checkbox .gui-checkmark{border-color:#878787}.gui-dark .gui-checkbox input:checked+.gui-checkmark{border-color:#878787}.gui-dark .gui-checkbox .gui-checkmark:after{border-color:#878787}.gui-dark .gui-checkbox.gui-disabled.gui-checkbox{opacity:.36}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { inputRef: [{
                type: ViewChild,
                args: ['input', { read: ElementRef, static: false }]
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL2Zvcm0vY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL2Zvcm0vY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVOLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUdOLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7O0FBaUJ2QixNQUFNLE9BQU8sdUJBQXVCO0lBeUJmO0lBQ1Q7SUF2QkYsUUFBUSxDQUFjO0lBRy9CLElBQUksR0FBVyxFQUFFLENBQUM7SUFHbEIsWUFBWSxHQUFZLEtBQUssQ0FBQztJQUc5QixRQUFRLEdBQVksS0FBSyxDQUFDO0lBRzFCLFFBQVEsR0FBWSxLQUFLLENBQUM7SUFHMUIsYUFBYSxHQUFZLEtBQUssQ0FBQztJQUd0QixPQUFPLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7SUFFN0QsT0FBTyxHQUFZLEtBQUssQ0FBQztJQUV6QixZQUFvQixVQUFzQixFQUMvQixRQUFtQjtRQURWLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztJQUM5QixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUVqQyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN4QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQyxDQUFDO2FBQ3RFO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQyxDQUFDO2FBQ3pFO1NBQ0Q7UUFFRCxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN4QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQyxDQUFDO2FBQ3RFO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQyxDQUFDO2FBQ3pFO1NBQ0Q7UUFFRCxJQUFJLE9BQU8sQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUM3QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtvQkFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztpQkFDakQ7cUJBQU07b0JBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztvQkFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7aUJBQ25EO2FBQ0Q7U0FDRDtJQUNGLENBQUM7SUFFRCxlQUFlO1FBQ2QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQy9EO0lBQ0YsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFZO1FBQ2pCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQzt3R0F0RVcsdUJBQXVCOzRGQUF2Qix1QkFBdUIsNFdBRVAsVUFBVSxrRENoQ3ZDLG9RQVVBOzs0RkRvQmEsdUJBQXVCO2tCQWRuQyxTQUFTOytCQUNDLGNBQWMsbUJBT1AsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSxRQUMvQjt3QkFDTCxzQkFBc0IsRUFBRSxNQUFNO3FCQUM5Qjt5SEFLUSxRQUFRO3NCQURoQixTQUFTO3VCQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtnQkFJdkQsSUFBSTtzQkFESCxLQUFLO2dCQUlOLFlBQVk7c0JBRFgsS0FBSzt1QkFBQyxTQUFTO2dCQUloQixRQUFRO3NCQURQLEtBQUs7Z0JBSU4sUUFBUTtzQkFEUCxLQUFLO2dCQUlOLGFBQWE7c0JBRFosS0FBSztnQkFJRyxPQUFPO3NCQURmLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRBZnRlclZpZXdJbml0LFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRFdmVudEVtaXR0ZXIsXG5cdElucHV0LFxuXHRPbkNoYW5nZXMsXG5cdE91dHB1dCxcblx0UmVuZGVyZXIyLFxuXHRTaW1wbGVDaGFuZ2VzLFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1jaGVja2JveCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9jaGVja2JveC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL2NoZWNrYm94LmNvbXBvbmVudC5zY3NzJyxcblx0XHQnLi90aGVtZXMvY2hlY2tib3gubWF0ZXJpYWwubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9jaGVja2JveC5kYXJrLm5neC5zY3NzJ1xuXHRdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLWNoZWNrYm94XSc6ICd0cnVlJ1xuXHR9XG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0NoZWNrYm94Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcblxuXHRAVmlld0NoaWxkKCdpbnB1dCcsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiBmYWxzZSB9KVxuXHRyZWFkb25seSBpbnB1dFJlZj86IEVsZW1lbnRSZWY7XG5cblx0QElucHV0KClcblx0bmFtZTogc3RyaW5nID0gJyc7XG5cblx0QElucHV0KCdjaGVja2VkJylcblx0aW5wdXRDaGVja2VkOiBib29sZWFuID0gZmFsc2U7XG5cblx0QElucHV0KClcblx0ZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRASW5wdXQoKVxuXHRyZWFkb25seTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdEBJbnB1dCgpXG5cdGluZGV0ZXJtaW5hdGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRAT3V0cHV0KClcblx0cmVhZG9ubHkgY2hhbmdlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGNoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuXHRcdHRoaXMuY2hlY2tlZCA9IHRoaXMuaW5wdXRDaGVja2VkO1xuXG5cdFx0aWYgKGNoYW5nZXNbJ2Rpc2FibGVkJ10pIHtcblx0XHRcdGlmICh0aGlzLmRpc2FibGVkKSB7XG5cdFx0XHRcdHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdndWktZGlzYWJsZWQnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdndWktZGlzYWJsZWQnKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlc1sncmVhZG9ubHknXSkge1xuXHRcdFx0aWYgKHRoaXMucmVhZG9ubHkpIHtcblx0XHRcdFx0dGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2d1aS1yZWFkb25seScpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2d1aS1yZWFkb25seScpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzWydpbmRldGVybWluYXRlJ10pIHtcblx0XHRcdGlmICh0aGlzLmlucHV0UmVmKSB7XG5cdFx0XHRcdGlmICh0aGlzLmluZGV0ZXJtaW5hdGUpIHtcblx0XHRcdFx0XHR0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQuaW5kZXRlcm1pbmF0ZSA9IHRydWU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50LmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcblx0XHRcdFx0XHR0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQuY2hlY2tlZCA9IHRoaXMuY2hlY2tlZDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pbnB1dFJlZikge1xuXHRcdFx0dGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50LmluZGV0ZXJtaW5hdGUgPSB0aGlzLmluZGV0ZXJtaW5hdGU7XG5cdFx0fVxuXHR9XG5cblx0Y2hlY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0dGhpcy5jaGVja2VkID0gIXRoaXMuY2hlY2tlZDtcblx0XHR0aGlzLmNoYW5nZWQuZW1pdCh0aGlzLmNoZWNrZWQpO1xuXHR9XG5cbn1cbiIsIjxsYWJlbD5cblx0PGlucHV0ICNpbnB1dFxuXHRcdCAgIChjbGljayk9XCJjaGVjaygkZXZlbnQpXCJcblx0XHQgICBbYXR0ci5uYW1lXT1cIm5hbWVcIlxuXHRcdCAgIFtjaGVja2VkXT1cImNoZWNrZWRcIlxuXHRcdCAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG5cdFx0ICAgdHlwZT1cImNoZWNrYm94XCI+XG5cdDxzcGFuIGNsYXNzPVwiZ3VpLWNoZWNrbWFya1wiPjwvc3Bhbj5cblx0PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9sYWJlbD5cbiJdfQ==