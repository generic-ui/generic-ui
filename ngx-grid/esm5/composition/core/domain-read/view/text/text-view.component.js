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
                    template: "\n\n\t\t<ng-container *ngIf=\"isHtml; else text\">\n\t\t\t<span [innerHTML]=\"value.value | guiSafe: 'html'\"></span>\n\t\t</ng-container>\n\n\t\t<ng-template #text>\n\t\t\t<span>\n\t\t\t\t{{value.value}}\n\t\t\t</span>\n\t\t</ng-template>\n\t",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC92aWV3L3RleHQvdGV4dC12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0gsT0FBTyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV2RTtJQTJCQywyQkFBK0IsTUFBVyxFQUNsQixRQUFhLEVBQ2pCLFVBQXNCLEVBQ3RCLFFBQW1CO1FBRG5CLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUx2QyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBT2QsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ2xFO1FBRUQsSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQ3BFO1FBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCx1Q0FBVzs7O0lBQVg7UUFDQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDdEQsQ0FBQzs7Z0JBN0NELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUUscVBBV1Q7b0JBQ0QsSUFBSSxFQUFFO3dCQUNMLHVCQUF1QixFQUFFLE1BQU07cUJBQy9CO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7Ozs7Z0RBUWEsU0FBUyxTQUFDLE1BQU07Z0RBQ3pCLFNBQVMsU0FBQyxRQUFRO2dCQWhDaUMsVUFBVTtnQkFBUyxTQUFTOzs7d0JBMEJsRixLQUFLOztJQXlCUCx3QkFBQztDQUFBLEFBL0NELElBK0NDO1NBM0JZLGlCQUFpQjs7O0lBRTdCLGtDQUNpQjs7SUFFakIsbUNBQWU7Ozs7O0lBSVosdUNBQXVDOzs7OztJQUN2QyxxQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdHRyaWJ1dGUsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBSZW5kZXJlcjIsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGxWYWx1ZSwgQ2VsbFZhbHVlVHlwZSB9IGZyb20gJy4uLy4uL2RlZmluaXRpb24vY2VsbC12YWx1ZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS12aWV3LXRleHRbdmFsdWVdJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0h0bWw7IGVsc2UgdGV4dFwiPlxuXHRcdFx0PHNwYW4gW2lubmVySFRNTF09XCJ2YWx1ZS52YWx1ZSB8IGd1aVNhZmU6ICdodG1sJ1wiPjwvc3Bhbj5cblx0XHQ8L25nLWNvbnRhaW5lcj5cblxuXHRcdDxuZy10ZW1wbGF0ZSAjdGV4dD5cblx0XHRcdDxzcGFuPlxuXHRcdFx0XHR7e3ZhbHVlLnZhbHVlfX1cblx0XHRcdDwvc3Bhbj5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXHRgLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktdGV4dC12aWV3XSc6ICd0cnVlJ1xuXHR9LFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBUZXh0Vmlld0NvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0dmFsdWU6IENlbGxWYWx1ZTtcblxuXHRpc0h0bWwgPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3RvcihAQXR0cmlidXRlKCdib2xkJykgaXNCb2xkOiBhbnksXG5cdFx0XHRcdEBBdHRyaWJ1dGUoJ2l0YWxpYycpIGlzSXRhbGljOiBhbnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG5cblx0XHRpZiAoaXNCb2xkICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZ3VpLWJvbGQnKTtcblx0XHR9XG5cblx0XHRpZiAoaXNJdGFsaWMgIT09IG51bGwpIHtcblx0XHRcdHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdndWktaXRhbGljJyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NOYW1lO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoKSB7XG5cdFx0dGhpcy5pc0h0bWwgPSB0aGlzLnZhbHVlLnR5cGUgPT09IENlbGxWYWx1ZVR5cGUuSFRNTDtcblx0fVxuXG59XG4iXX0=