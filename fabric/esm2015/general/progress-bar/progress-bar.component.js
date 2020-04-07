/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
export class FabricProgressBarComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
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
    }
    /**
     * @private
     * @param {?} className
     * @return {?}
     */
    addClass(className) {
        this.renderer.addClass(this.elementRef.nativeElement, className);
    }
    /**
     * @private
     * @param {?} className
     * @return {?}
     */
    removeClass(className) {
        this.renderer.removeClass(this.elementRef.nativeElement, className);
    }
}
FabricProgressBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-progress-bar',
                template: "<div\n\t[style.height.px]=\"height\"\n\t[style.text-align]=\"textAlign\"\n\t[style.width.px]=\"width\"\n\tclass=\"gui-progress-bar\">\n\t<div\n\t\t[style.background]=\"color\"\n\t\t[style.width.%]=\"progress\"\n\t\tclass=\"gui-progress\">\n\t\t<span\n\t\t\t[style.top]=\"textTop\"\n\t\t\tclass=\"gui-progress-text\">\n\t\t\t<ng-content></ng-content>\n\t\t</span>\n\t</div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-progress]': 'true'
                },
                styles: [".gui-progress-bar{display:block;font-family:Arial;height:18px;margin-bottom:10px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid #d6d6d6}.gui-progress-bar .gui-progress{background:#999;border-bottom:inherit;height:inherit;width:0}.gui-primary .gui-progress-bar .gui-progress.gui-progress{background:#2185d0}.gui-secondary .gui-progress-bar .gui-progress.gui-progress{background:#3cb371}.gui-progress-bar .gui-progress-text{position:relative}", ".gui-material .gui-progress-bar{border-color:#5262c5;color:#fff;font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-material .gui-progress{background:#3949ab}.gui-material .gui-progress.gui-primary .gui-progress{background:#6200ee}.gui-material .gui-progress.gui-primary .gui-progress-bar{border-color:#6200ee}.gui-material .gui-progress.gui-secondary .gui-progress{background:#0097a7}.gui-material .gui-progress.gui-secondary .gui-progress-bar{border-color:#0097a7}", ".gui-dark .gui-progress-bar{border-color:#616161;color:#bdbdbd}.gui-dark .gui-progress{background:#424242}.gui-dark .gui-progress.gui-primary .gui-progress{background:#ce93d8}.gui-dark .gui-progress.gui-primary .gui-progress-bar{border-color:#ce93d8;color:#212121}.gui-dark .gui-progress.gui-secondary .gui-progress{background:#80cbc4}.gui-dark .gui-progress.gui-secondary .gui-progress-bar{border-color:#80cbc4;color:#212121}"]
            }] }
];
/** @nocollapse */
FabricProgressBarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImdlbmVyYWwvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQWlCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBaUJuSSxNQUFNLE9BQU8sMEJBQTBCOzs7OztJQTBCdEMsWUFBb0IsVUFBc0IsRUFDL0IsUUFBbUI7UUFEVixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQVc7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDakMsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQ3BCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUM3QjtpQkFBTTtnQkFDTixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ2hDO1NBQ0Q7UUFDRCxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDdEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQy9CO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDbEM7U0FDRDtJQUNGLENBQUM7Ozs7OztJQUVPLFFBQVEsQ0FBQyxTQUFpQjtRQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7Ozs7SUFFTyxXQUFXLENBQUMsU0FBaUI7UUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDckUsQ0FBQzs7O1lBbkVELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QiwwWUFBMEM7Z0JBTTFDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsSUFBSSxFQUFFO29CQUNMLHNCQUFzQixFQUFFLE1BQU07aUJBQzlCOzthQUNEOzs7O1lBaEI0QyxVQUFVO1lBQVMsU0FBUzs7O3VCQW1CdkUsS0FBSztvQkFHTCxLQUFLO3FCQUdMLEtBQUs7b0JBR0wsS0FBSztzQkFHTCxLQUFLO3dCQUdMLEtBQUs7c0JBR0wsS0FBSzt3QkFHTCxLQUFLOzs7O0lBckJOLDhDQUNpQjs7SUFFakIsMkNBQ2M7O0lBRWQsNENBQ2U7O0lBRWYsMkNBQ2M7O0lBRWQsNkNBQ2dCOztJQUVoQiwrQ0FDa0I7O0lBRWxCLDZDQUNpQjs7SUFFakIsK0NBQ21COzs7OztJQUVQLGdEQUE4Qjs7Ozs7SUFDdkMsOENBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktcHJvZ3Jlc3MtYmFyJyxcblx0dGVtcGxhdGVVcmw6ICdwcm9ncmVzcy1iYXIuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9wcm9ncmVzcy1iYXIubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9wcm9ncmVzcy1iYXIubWF0ZXJpYWwubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9wcm9ncmVzcy1iYXIuZGFyay5uZ3guc2Nzcydcblx0XSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1wcm9ncmVzc10nOiAndHJ1ZSdcblx0fVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNQcm9ncmVzc0JhckNvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0cHJvZ3Jlc3M6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHRjb2xvcjogc3RyaW5nO1xuXG5cdEBJbnB1dCgpXG5cdGhlaWdodDogbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdHdpZHRoOiBudW1iZXI7XG5cblx0QElucHV0KClcblx0dGV4dFRvcDogc3RyaW5nO1xuXG5cdEBJbnB1dCgpXG5cdHRleHRBbGlnbjogc3RyaW5nO1xuXG5cdEBJbnB1dCgpXG5cdHByaW1hcnk6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0c2Vjb25kYXJ5OiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0aWYgKGNoYW5nZXMucHJpbWFyeSkge1xuXHRcdFx0aWYgKHRoaXMucHJpbWFyeSkge1xuXHRcdFx0XHR0aGlzLmFkZENsYXNzKCdndWktcHJpbWFyeScpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnZ3VpLXByaW1hcnknKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGNoYW5nZXMuc2Vjb25kYXJ5KSB7XG5cdFx0XHRpZiAodGhpcy5zZWNvbmRhcnkpIHtcblx0XHRcdFx0dGhpcy5hZGRDbGFzcygnZ3VpLXNlY29uZGFyeScpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnZ3VpLXNlY29uZGFyeScpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgYWRkQ2xhc3MoY2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuXHR9XG5cblx0cHJpdmF0ZSByZW1vdmVDbGFzcyhjbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG5cdH1cbn1cbiJdfQ==