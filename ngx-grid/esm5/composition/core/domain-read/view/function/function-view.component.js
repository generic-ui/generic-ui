/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CellValue } from '../../definition/cell-value';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
var FunctionViewComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FunctionViewComponent, _super);
    function FunctionViewComponent(sanitizer, elRef) {
        var _this = _super.call(this, elRef) || this;
        _this.sanitizer = sanitizer;
        _this.elRef = elRef;
        _this.addClassToHost('gui-h-full');
        _this.addClassToHost('gui-w-full');
        return _this;
    }
    /**
     * @return {?}
     */
    FunctionViewComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.safeHTML = this.sanitizer.bypassSecurityTrustHtml(this.element.value);
    };
    /**
     * @protected
     * @return {?}
     */
    FunctionViewComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-function-view';
    };
    FunctionViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-function-view',
                    template: "\n\n\t\t<div class=\"gui-h-full gui-flex gui-items-center\"\n\t\t\t [innerHTML]=\"safeHTML\">\n\t\t</div>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    FunctionViewComponent.ctorParameters = function () { return [
        { type: DomSanitizer },
        { type: ElementRef }
    ]; };
    FunctionViewComponent.propDecorators = {
        element: [{ type: Input }]
    };
    return FunctionViewComponent;
}(PureComponent));
export { FunctionViewComponent };
if (false) {
    /** @type {?} */
    FunctionViewComponent.prototype.element;
    /** @type {?} */
    FunctionViewComponent.prototype.safeHTML;
    /**
     * @type {?}
     * @private
     */
    FunctionViewComponent.prototype.sanitizer;
    /**
     * @type {?}
     * @private
     */
    FunctionViewComponent.prototype.elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb24tdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvdmlldy9mdW5jdGlvbi9mdW5jdGlvbi12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RyxPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFFbkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUduRjtJQVkyQyxpREFBYTtJQU92RCwrQkFBNkIsU0FBdUIsRUFDaEMsS0FBaUI7UUFEckMsWUFFQyxrQkFBTSxLQUFLLENBQUMsU0FJWjtRQU40QixlQUFTLEdBQVQsU0FBUyxDQUFjO1FBQ2hDLFdBQUssR0FBTCxLQUFLLENBQVk7UUFHcEMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNsQyxLQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDOztJQUNuQyxDQUFDOzs7O0lBRUQsMkNBQVc7OztJQUFYO1FBQ0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7Ozs7SUFFUywrQ0FBZTs7OztJQUF6QjtRQUNDLE9BQU8sbUJBQW1CLENBQUM7SUFDNUIsQ0FBQzs7Z0JBakNELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsaUhBTVQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQzs7OztnQkFqQlEsWUFBWTtnQkFEd0IsVUFBVTs7OzBCQXFCckQsS0FBSzs7SUFxQlAsNEJBQUM7Q0FBQSxBQW5DRCxDQVkyQyxhQUFhLEdBdUJ2RDtTQXZCWSxxQkFBcUI7OztJQUVqQyx3Q0FDbUI7O0lBRW5CLHlDQUFtQjs7Ozs7SUFFUCwwQ0FBd0M7Ozs7O0lBQ2pELHNDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBDZWxsVmFsdWUgfSBmcm9tICcuLi8uLi9kZWZpbml0aW9uL2NlbGwtdmFsdWUnO1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3B1cmUtY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktZnVuY3Rpb24tdmlldycsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLWgtZnVsbCBndWktZmxleCBndWktaXRlbXMtY2VudGVyXCJcblx0XHRcdCBbaW5uZXJIVE1MXT1cInNhZmVIVE1MXCI+XG5cdFx0PC9kaXY+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRnVuY3Rpb25WaWV3Q29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0ZWxlbWVudDogQ2VsbFZhbHVlO1xuXG5cdHNhZmVIVE1MOiBTYWZlSHRtbDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVsUmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoZWxSZWYpO1xuXG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLWgtZnVsbCcpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS13LWZ1bGwnKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKCkge1xuXHRcdHRoaXMuc2FmZUhUTUwgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh0aGlzLmVsZW1lbnQudmFsdWUpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLWZ1bmN0aW9uLXZpZXcnO1xuXHR9XG5cbn1cbiJdfQ==