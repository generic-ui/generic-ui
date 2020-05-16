/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation, Attribute, ElementRef, Renderer2 } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvcmVhZC92aWV3L3RleHQvdGV4dC12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0gsT0FBTyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV2RTtJQTJCQywyQkFBK0IsTUFBVyxFQUNsQixRQUFhLEVBQ2pCLFVBQXNCLEVBQ3RCLFFBQW1CO1FBRG5CLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUx2QyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBT2QsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ2xFO1FBRUQsSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQ3BFO1FBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFBO0lBQ3hDLENBQUM7Ozs7SUFFRCx1Q0FBVzs7O0lBQVg7UUFDQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDdEQsQ0FBQzs7Z0JBN0NELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUUsMFBBV1Q7b0JBQ0QsSUFBSSxFQUFFO3dCQUNMLHVCQUF1QixFQUFFLE1BQU07cUJBQy9CO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7Ozs7Z0RBUWEsU0FBUyxTQUFDLE1BQU07Z0RBQ3pCLFNBQVMsU0FBQyxRQUFRO2dCQWhDMkQsVUFBVTtnQkFBRSxTQUFTOzs7d0JBMEJyRyxLQUFLOztJQXlCUCx3QkFBQztDQUFBLEFBL0NELElBK0NDO1NBM0JZLGlCQUFpQjs7O0lBRTdCLGtDQUNpQjs7SUFFakIsbUNBQWU7Ozs7O0lBSVosdUNBQXVDOzs7OztJQUN2QyxxQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIEF0dHJpYnV0ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGxWYWx1ZSwgQ2VsbFZhbHVlVHlwZSB9IGZyb20gJy4uLy4uL2RlZmluaXRpb24vY2VsbC12YWx1ZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS12aWV3LXRleHRbdmFsdWVdJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0h0bWw7IGVsc2UgdGV4dFwiPlxuXHRcdFx0PHNwYW4gW2lubmVySFRNTF09XCJ2YWx1ZS52YWx1ZSB8IGd1aVNhZmU6ICdodG1sJ1wiPjwvc3Bhbj5cblx0XHQ8L25nLWNvbnRhaW5lcj5cblx0XHRcblx0XHQ8bmctdGVtcGxhdGUgI3RleHQ+XG5cdFx0XHQ8c3BhbiA+XG5cdFx0XHRcdHt7dmFsdWUudmFsdWV9fVxuXHRcdFx0PC9zcGFuPlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cdGAsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS10ZXh0LXZpZXddJzogJ3RydWUnXG5cdH0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFRleHRWaWV3Q29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHR2YWx1ZTogQ2VsbFZhbHVlO1xuXG5cdGlzSHRtbCA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKEBBdHRyaWJ1dGUoJ2JvbGQnKSBpc0JvbGQ6IGFueSxcblx0XHRcdFx0QEF0dHJpYnV0ZSgnaXRhbGljJykgaXNJdGFsaWM6IGFueSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcblxuXHRcdGlmIChpc0JvbGQgIT09IG51bGwpIHtcblx0XHRcdHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdndWktYm9sZCcpO1xuXHRcdH1cblxuXHRcdGlmIChpc0l0YWxpYyAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2d1aS1pdGFsaWMnKTtcblx0XHR9XG5cblx0XHR0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc05hbWVcblx0fVxuXG5cdG5nT25DaGFuZ2VzKCkge1xuXHRcdHRoaXMuaXNIdG1sID0gdGhpcy52YWx1ZS50eXBlID09PSBDZWxsVmFsdWVUeXBlLkhUTUw7XG5cdH1cblxufVxuIl19