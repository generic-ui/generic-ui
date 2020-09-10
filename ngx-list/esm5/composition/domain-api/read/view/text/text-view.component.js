/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Attribute, ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { CellValue, CellValueType } from '../../definition/cell-value';
var TextViewComponent = /** @class */ (function () {
    function TextViewComponent(isBold, isItalic, elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.isHtml = false;
        if (isBold !== null) {
            this.renderer.addClass(this.elementRef.nativeElement, 'gui-bold');
        }
        if (isItalic !== null) {
            this.renderer.addClass(this.elementRef.nativeElement, 'gui-italic');
        }
        this.elementRef.nativeElement.className;
    }
    /**
     * @return {?}
     */
    TextViewComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.isHtml = this.value.type === CellValueType.HTML;
    };
    TextViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-view-text[value]',
                    template: "\n\n\t\t<ng-container *ngIf=\"isHtml; else text\">\n\t\t\t<span [innerHTML]=\"value.value | guiSafe: 'html'\"></span>\n\t\t</ng-container>\n\t\t\n\t\t<ng-template #text>\n\t\t\t<span >\n\t\t\t\t{{value.value}}\n\t\t\t</span>\n\t\t</ng-template>\n\t",
                    host: {
                        '[class.gui-text-view]': 'true'
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    TextViewComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Attribute, args: ['bold',] }] },
        { type: undefined, decorators: [{ type: Attribute, args: ['italic',] }] },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    TextViewComponent.propDecorators = {
        value: [{ type: Input }]
    };
    return TextViewComponent;
}());
export { TextViewComponent };
if (false) {
    /** @type {?} */
    TextViewComponent.prototype.value;
    /** @type {?} */
    TextViewComponent.prototype.isHtml;
    /**
     * @type {?}
     * @private
     */
    TextViewComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    TextViewComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vZG9tYWluLWFwaS9yZWFkL3ZpZXcvdGV4dC90ZXh0LXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvSCxPQUFPLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXZFO0lBMkJDLDJCQUErQixNQUFXLEVBQ2xCLFFBQWEsRUFDakIsVUFBc0IsRUFDdEIsUUFBbUI7UUFEbkIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBTHZDLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFPZCxJQUFJLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDbEU7UUFFRCxJQUFJLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDcEU7UUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELHVDQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssYUFBYSxDQUFDLElBQUksQ0FBQztJQUN0RCxDQUFDOztnQkE3Q0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFFBQVEsRUFBRSwwUEFXVDtvQkFDRCxJQUFJLEVBQUU7d0JBQ0wsdUJBQXVCLEVBQUUsTUFBTTtxQkFDL0I7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQzs7OztnREFRYSxTQUFTLFNBQUMsTUFBTTtnREFDekIsU0FBUyxTQUFDLFFBQVE7Z0JBaENpQyxVQUFVO2dCQUFTLFNBQVM7Ozt3QkEwQmxGLEtBQUs7O0lBeUJQLHdCQUFDO0NBQUEsQUEvQ0QsSUErQ0M7U0EzQlksaUJBQWlCOzs7SUFFN0Isa0NBQ2lCOztJQUVqQixtQ0FBZTs7Ozs7SUFJWix1Q0FBdUM7Ozs7O0lBQ3ZDLHFDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF0dHJpYnV0ZSwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFJlbmRlcmVyMiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbFZhbHVlLCBDZWxsVmFsdWVUeXBlIH0gZnJvbSAnLi4vLi4vZGVmaW5pdGlvbi9jZWxsLXZhbHVlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXZpZXctdGV4dFt2YWx1ZV0nLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImlzSHRtbDsgZWxzZSB0ZXh0XCI+XG5cdFx0XHQ8c3BhbiBbaW5uZXJIVE1MXT1cInZhbHVlLnZhbHVlIHwgZ3VpU2FmZTogJ2h0bWwnXCI+PC9zcGFuPlxuXHRcdDwvbmctY29udGFpbmVyPlxuXHRcdFxuXHRcdDxuZy10ZW1wbGF0ZSAjdGV4dD5cblx0XHRcdDxzcGFuID5cblx0XHRcdFx0e3t2YWx1ZS52YWx1ZX19XG5cdFx0XHQ8L3NwYW4+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0YCxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLXRleHQtdmlld10nOiAndHJ1ZSdcblx0fSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgVGV4dFZpZXdDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdHZhbHVlOiBDZWxsVmFsdWU7XG5cblx0aXNIdG1sID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoQEF0dHJpYnV0ZSgnYm9sZCcpIGlzQm9sZDogYW55LFxuXHRcdFx0XHRAQXR0cmlidXRlKCdpdGFsaWMnKSBpc0l0YWxpYzogYW55LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuXG5cdFx0aWYgKGlzQm9sZCAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2d1aS1ib2xkJyk7XG5cdFx0fVxuXG5cdFx0aWYgKGlzSXRhbGljICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZ3VpLWl0YWxpYycpO1xuXHRcdH1cblxuXHRcdHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTmFtZTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKCkge1xuXHRcdHRoaXMuaXNIdG1sID0gdGhpcy52YWx1ZS50eXBlID09PSBDZWxsVmFsdWVUeXBlLkhUTUw7XG5cdH1cblxufVxuIl19