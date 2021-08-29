/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
var FabricProgressBarComponent = /** @class */ (function () {
    function FabricProgressBarComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FabricProgressBarComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.primary) {
            if (this.primary) {
                this.addClass('gui-primary');
            }
            else {
                this.removeClass('gui-primary');
            }
        }
        if (changes.secondary) {
            if (this.secondary) {
                this.addClass('gui-secondary');
            }
            else {
                this.removeClass('gui-secondary');
            }
        }
    };
    /**
     * @private
     * @param {?} className
     * @return {?}
     */
    FabricProgressBarComponent.prototype.addClass = /**
     * @private
     * @param {?} className
     * @return {?}
     */
    function (className) {
        this.renderer.addClass(this.elementRef.nativeElement, className);
    };
    /**
     * @private
     * @param {?} className
     * @return {?}
     */
    FabricProgressBarComponent.prototype.removeClass = /**
     * @private
     * @param {?} className
     * @return {?}
     */
    function (className) {
        this.renderer.removeClass(this.elementRef.nativeElement, className);
    };
    FabricProgressBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-progress-bar',
                    template: "<div\n\t[style.height.px]=\"height\"\n\t[style.text-align]=\"textAlign\"\n\t[style.width.px]=\"width\"\n\tclass=\"gui-progress-bar\">\n\t<div\n\t\t[style.background]=\"color\"\n\t\t[style.width.%]=\"progress\"\n\t\tclass=\"gui-progress\">\n\t\t<span\n\t\t\t[style.top]=\"textTop\"\n\t\t\tclass=\"gui-progress-text\">\n\t\t\t<ng-content></ng-content>\n\t\t</span>\n\t</div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-progress]': 'true'
                    },
                    styles: [".gui-progress-bar{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;font-family:Arial;height:18px;margin-bottom:10px;text-align:center;border:1px solid #d6d6d6}.gui-progress-bar .gui-progress{background:#999;border-bottom:inherit;height:inherit;width:0}.gui-primary .gui-progress-bar .gui-progress.gui-progress{background:#2185d0}.gui-secondary .gui-progress-bar .gui-progress.gui-progress{background:#3cb371}.gui-progress-bar .gui-progress-text{position:relative}", ".gui-material .gui-progress-bar{border-color:#5262c5;color:#fff;font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-material .gui-progress{background:#3949ab}.gui-material .gui-progress.gui-primary .gui-progress{background:#6200ee}.gui-material .gui-progress.gui-primary .gui-progress-bar{border-color:#6200ee}.gui-material .gui-progress.gui-secondary .gui-progress{background:#0097a7}.gui-material .gui-progress.gui-secondary .gui-progress-bar{border-color:#0097a7}", ".gui-dark .gui-progress-bar{border-color:#616161;color:#bdbdbd}.gui-dark .gui-progress{background:#424242}.gui-dark .gui-progress.gui-primary .gui-progress{background:#ce93d8}.gui-dark .gui-progress.gui-primary .gui-progress-bar{border-color:#ce93d8;color:#212121}.gui-dark .gui-progress.gui-secondary .gui-progress{background:#80cbc4}.gui-dark .gui-progress.gui-secondary .gui-progress-bar{border-color:#80cbc4;color:#212121}"]
                }] }
    ];
    /** @nocollapse */
    FabricProgressBarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    FabricProgressBarComponent.propDecorators = {
        progress: [{ type: Input }],
        color: [{ type: Input }],
        height: [{ type: Input }],
        width: [{ type: Input }],
        textTop: [{ type: Input }],
        textAlign: [{ type: Input }],
        primary: [{ type: Input }],
        secondary: [{ type: Input }]
    };
    return FabricProgressBarComponent;
}());
export { FabricProgressBarComponent };
if (false) {
    /** @type {?} */
    FabricProgressBarComponent.prototype.progress;
    /** @type {?} */
    FabricProgressBarComponent.prototype.color;
    /** @type {?} */
    FabricProgressBarComponent.prototype.height;
    /** @type {?} */
    FabricProgressBarComponent.prototype.width;
    /** @type {?} */
    FabricProgressBarComponent.prototype.textTop;
    /** @type {?} */
    FabricProgressBarComponent.prototype.textAlign;
    /** @type {?} */
    FabricProgressBarComponent.prototype.primary;
    /** @type {?} */
    FabricProgressBarComponent.prototype.secondary;
    /**
     * @type {?}
     * @private
     */
    FabricProgressBarComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    FabricProgressBarComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImdlbmVyYWwvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQWlCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR25JO0lBd0NDLG9DQUFvQixVQUFzQixFQUMvQixRQUFtQjtRQURWLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztJQUM5QixDQUFDOzs7OztJQUVELGdEQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNqQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDcEIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQzdCO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDaEM7U0FDRDtRQUNELElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtZQUN0QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDL0I7aUJBQU07Z0JBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUNsQztTQUNEO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sNkNBQVE7Ozs7O0lBQWhCLFVBQWlCLFNBQWlCO1FBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Ozs7OztJQUVPLGdEQUFXOzs7OztJQUFuQixVQUFvQixTQUFpQjtRQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNyRSxDQUFDOztnQkFuRUQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLDBZQUEwQztvQkFNMUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxJQUFJLEVBQUU7d0JBQ0wsc0JBQXNCLEVBQUUsTUFBTTtxQkFDOUI7O2lCQUNEOzs7O2dCQWhCNEMsVUFBVTtnQkFBUyxTQUFTOzs7MkJBbUJ2RSxLQUFLO3dCQUdMLEtBQUs7eUJBR0wsS0FBSzt3QkFHTCxLQUFLOzBCQUdMLEtBQUs7NEJBR0wsS0FBSzswQkFHTCxLQUFLOzRCQUdMLEtBQUs7O0lBK0JQLGlDQUFDO0NBQUEsQUFwRUQsSUFvRUM7U0F0RFksMEJBQTBCOzs7SUFFdEMsOENBQ2lCOztJQUVqQiwyQ0FDYzs7SUFFZCw0Q0FDZTs7SUFFZiwyQ0FDYzs7SUFFZCw2Q0FDZ0I7O0lBRWhCLCtDQUNrQjs7SUFFbEIsNkNBQ2lCOztJQUVqQiwrQ0FDbUI7Ozs7O0lBRVAsZ0RBQThCOzs7OztJQUN2Qyw4Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1wcm9ncmVzcy1iYXInLFxuXHR0ZW1wbGF0ZVVybDogJ3Byb2dyZXNzLWJhci5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL3Byb2dyZXNzLWJhci5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL3Byb2dyZXNzLWJhci5tYXRlcmlhbC5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL3Byb2dyZXNzLWJhci5kYXJrLm5neC5zY3NzJ1xuXHRdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLXByb2dyZXNzXSc6ICd0cnVlJ1xuXHR9XG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY1Byb2dyZXNzQmFyQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRwcm9ncmVzczogbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdGNvbG9yOiBzdHJpbmc7XG5cblx0QElucHV0KClcblx0aGVpZ2h0OiBudW1iZXI7XG5cblx0QElucHV0KClcblx0d2lkdGg6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHR0ZXh0VG9wOiBzdHJpbmc7XG5cblx0QElucHV0KClcblx0dGV4dEFsaWduOiBzdHJpbmc7XG5cblx0QElucHV0KClcblx0cHJpbWFyeTogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRzZWNvbmRhcnk6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRpZiAoY2hhbmdlcy5wcmltYXJ5KSB7XG5cdFx0XHRpZiAodGhpcy5wcmltYXJ5KSB7XG5cdFx0XHRcdHRoaXMuYWRkQ2xhc3MoJ2d1aS1wcmltYXJ5Jyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdndWktcHJpbWFyeScpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoY2hhbmdlcy5zZWNvbmRhcnkpIHtcblx0XHRcdGlmICh0aGlzLnNlY29uZGFyeSkge1xuXHRcdFx0XHR0aGlzLmFkZENsYXNzKCdndWktc2Vjb25kYXJ5Jyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdndWktc2Vjb25kYXJ5Jyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBhZGRDbGFzcyhjbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZUNsYXNzKGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcblx0fVxufVxuIl19