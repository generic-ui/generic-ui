/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../../common/cdk/component/pure-component';
var StructureColumnMenuArrowIconComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureColumnMenuArrowIconComponent, _super);
    function StructureColumnMenuArrowIconComponent(elementRef) {
        var _this = _super.call(this, elementRef) || this;
        _this.rotateDeg = 90;
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    StructureColumnMenuArrowIconComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-structure-column-menu-arrow-icon';
    };
    StructureColumnMenuArrowIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[gui-structure-column-menu-arrow-icon]',
                    template: "\n\t\t<div [style.transform]=\"'rotate(' + rotateDeg + 'deg)'\"\n\t\t\t [class.gui-structure-column-menu-sort-icon]=\"sort\">\n\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 10.04 11.72\">\n\t\t\t\t<line class=\"cls-1\" x1=\"5.02\" y1=\"2.15\" x2=\"5.02\" y2=\"10.97\"/>\n\t\t\t\t<line class=\"cls-1\" x1=\"5.02\" y1=\"0.75\" x2=\"9.29\" y2=\"5.02\"/>\n\t\t\t\t<line class=\"cls-1\" x1=\"5.02\" y1=\"0.75\" x2=\"0.75\" y2=\"5.02\"/>\n\t\t\t</svg>\n\t\t</div>\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureColumnMenuArrowIconComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    StructureColumnMenuArrowIconComponent.propDecorators = {
        rotateDeg: [{ type: Input }],
        sort: [{ type: Input }]
    };
    return StructureColumnMenuArrowIconComponent;
}(PureComponent));
export { StructureColumnMenuArrowIconComponent };
if (false) {
    /** @type {?} */
    StructureColumnMenuArrowIconComponent.prototype.rotateDeg;
    /** @type {?} */
    StructureColumnMenuArrowIconComponent.prototype.sort;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tZW51LWFycm93LWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2hlYWRlci9tZW51L2ljb24vc3RydWN0dXJlLmNvbHVtbi1tZW51LWFycm93LWljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUd0RjtJQWUyRCxpRUFBYTtJQVF2RSwrQ0FBWSxVQUFzQjtRQUFsQyxZQUNDLGtCQUFNLFVBQVUsQ0FBQyxTQUNqQjtRQVBELGVBQVMsR0FBVyxFQUFFLENBQUM7O0lBT3ZCLENBQUM7Ozs7O0lBRVMsK0RBQWU7Ozs7SUFBekI7UUFDQyxPQUFPLHNDQUFzQyxDQUFDO0lBQy9DLENBQUM7O2dCQTdCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDJDQUEyQztvQkFDckQsUUFBUSxFQUFFLCtkQVNUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7Ozs7Z0JBbEI0QyxVQUFVOzs7NEJBcUJyRCxLQUFLO3VCQUdMLEtBQUs7O0lBVVAsNENBQUM7Q0FBQSxBQTlCRCxDQWUyRCxhQUFhLEdBZXZFO1NBZlkscUNBQXFDOzs7SUFFakQsMERBQ3VCOztJQUV2QixxREFDYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3B1cmUtY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXN0cnVjdHVyZS1jb2x1bW4tbWVudS1hcnJvdy1pY29uXScsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiBbc3R5bGUudHJhbnNmb3JtXT1cIidyb3RhdGUoJyArIHJvdGF0ZURlZyArICdkZWcpJ1wiXG5cdFx0XHQgW2NsYXNzLmd1aS1zdHJ1Y3R1cmUtY29sdW1uLW1lbnUtc29ydC1pY29uXT1cInNvcnRcIj5cblx0XHRcdDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTAuMDQgMTEuNzJcIj5cblx0XHRcdFx0PGxpbmUgY2xhc3M9XCJjbHMtMVwiIHgxPVwiNS4wMlwiIHkxPVwiMi4xNVwiIHgyPVwiNS4wMlwiIHkyPVwiMTAuOTdcIi8+XG5cdFx0XHRcdDxsaW5lIGNsYXNzPVwiY2xzLTFcIiB4MT1cIjUuMDJcIiB5MT1cIjAuNzVcIiB4Mj1cIjkuMjlcIiB5Mj1cIjUuMDJcIi8+XG5cdFx0XHRcdDxsaW5lIGNsYXNzPVwiY2xzLTFcIiB4MT1cIjUuMDJcIiB5MT1cIjAuNzVcIiB4Mj1cIjAuNzVcIiB5Mj1cIjUuMDJcIi8+XG5cdFx0XHQ8L3N2Zz5cblx0XHQ8L2Rpdj5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uTWVudUFycm93SWNvbkNvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdHJvdGF0ZURlZzogbnVtYmVyID0gOTA7XG5cblx0QElucHV0KClcblx0c29ydDogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZik7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLWNvbHVtbi1tZW51LWFycm93LWljb24nO1xuXHR9XG59XG4iXX0=