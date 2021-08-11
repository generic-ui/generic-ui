/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Attribute, ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { CellValue, CellValueType } from '../../definition/cell-value';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
var TextViewComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TextViewComponent, _super);
    function TextViewComponent(isBold, isItalic, elementRef, renderer) {
        var _this = _super.call(this, elementRef) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        _this.isHtml = false;
        if (isBold !== null) {
            _this.addClassToHost('gui-bold');
        }
        if (isItalic !== null) {
            _this.addClassToHost('gui-italic');
        }
        return _this;
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
    /**
     * @protected
     * @return {?}
     */
    TextViewComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-text-view';
    };
    TextViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-view-text[value]',
                    template: "\n\n\t\t<ng-container *ngIf=\"isHtml; else text\">\n\t\t\t<span [innerHTML]=\"value.value | guiSafe: 'html'\"></span>\n\t\t</ng-container>\n\n\t\t<ng-template #text>\n\t\t\t<span>\n\t\t\t\t{{value.value}}\n\t\t\t</span>\n\t\t</ng-template>\n\t",
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
}(PureComponent));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC92aWV3L3RleHQvdGV4dC12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9ILE9BQU8sRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBRW5GO0lBaUJ1Qyw2Q0FBYTtJQU9uRCwyQkFBK0IsTUFBVyxFQUNsQixRQUFhLEVBQ2pCLFVBQXNCLEVBQ3RCLFFBQW1CO1FBSHZDLFlBSUMsa0JBQU0sVUFBVSxDQUFDLFNBU2pCO1FBWG1CLGdCQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGNBQVEsR0FBUixRQUFRLENBQVc7UUFMdkMsWUFBTSxHQUFHLEtBQUssQ0FBQztRQVFkLElBQUksTUFBTSxLQUFLLElBQUksRUFBRTtZQUNwQixLQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ2hDO1FBRUQsSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQ3RCLEtBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDbEM7O0lBQ0YsQ0FBQzs7OztJQUVELHVDQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssYUFBYSxDQUFDLElBQUksQ0FBQztJQUN0RCxDQUFDOzs7OztJQUVTLDJDQUFlOzs7O0lBQXpCO1FBQ0MsT0FBTyxlQUFlLENBQUM7SUFDeEIsQ0FBQzs7Z0JBN0NELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUUscVBBV1Q7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQzs7OztnREFRYSxTQUFTLFNBQUMsTUFBTTtnREFDekIsU0FBUyxTQUFDLFFBQVE7Z0JBOUJpQyxVQUFVO2dCQUFTLFNBQVM7Ozt3QkF3QmxGLEtBQUs7O0lBNEJQLHdCQUFDO0NBQUEsQUEvQ0QsQ0FpQnVDLGFBQWEsR0E4Qm5EO1NBOUJZLGlCQUFpQjs7O0lBRTdCLGtDQUNpQjs7SUFFakIsbUNBQWU7Ozs7O0lBSVosdUNBQXVDOzs7OztJQUN2QyxxQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdHRyaWJ1dGUsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBSZW5kZXJlcjIsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGxWYWx1ZSwgQ2VsbFZhbHVlVHlwZSB9IGZyb20gJy4uLy4uL2RlZmluaXRpb24vY2VsbC12YWx1ZSc7XG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvcHVyZS1jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktdmlldy10ZXh0W3ZhbHVlXScsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiaXNIdG1sOyBlbHNlIHRleHRcIj5cblx0XHRcdDxzcGFuIFtpbm5lckhUTUxdPVwidmFsdWUudmFsdWUgfCBndWlTYWZlOiAnaHRtbCdcIj48L3NwYW4+XG5cdFx0PC9uZy1jb250YWluZXI+XG5cblx0XHQ8bmctdGVtcGxhdGUgI3RleHQ+XG5cdFx0XHQ8c3Bhbj5cblx0XHRcdFx0e3t2YWx1ZS52YWx1ZX19XG5cdFx0XHQ8L3NwYW4+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgVGV4dFZpZXdDb21wb25lbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHR2YWx1ZTogQ2VsbFZhbHVlO1xuXG5cdGlzSHRtbCA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKEBBdHRyaWJ1dGUoJ2JvbGQnKSBpc0JvbGQ6IGFueSxcblx0XHRcdFx0QEF0dHJpYnV0ZSgnaXRhbGljJykgaXNJdGFsaWM6IGFueSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmKTtcblxuXHRcdGlmIChpc0JvbGQgIT09IG51bGwpIHtcblx0XHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1ib2xkJyk7XG5cdFx0fVxuXG5cdFx0aWYgKGlzSXRhbGljICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktaXRhbGljJyk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkNoYW5nZXMoKSB7XG5cdFx0dGhpcy5pc0h0bWwgPSB0aGlzLnZhbHVlLnR5cGUgPT09IENlbGxWYWx1ZVR5cGUuSFRNTDtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS10ZXh0LXZpZXcnO1xuXHR9XG5cbn1cbiJdfQ==