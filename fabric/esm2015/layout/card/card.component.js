/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
export class FabricCardComponent {
    constructor() {
        this.contentBlock = [];
    }
    /**
     * @return {?}
     */
    isTitleEnabled() {
        return !!this.title;
    }
    /**
     * @return {?}
     */
    isImgEnabled() {
        return !!this.image;
    }
    /**
     * @return {?}
     */
    isContentBlockEnabled() {
        return !!this.contentBlock;
    }
}
FabricCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-card',
                template: "<div class=\"gui-card-body\">\n\n\t<div class=\"gui-card-image-wrapper\">\n\t\t<img [ngClass]=\"{'gui-card-img': isImgEnabled()}\"\n\t\t\t alt=\"{{alt}}\" src=\"{{image}}\"/>\n\t</div>\n\n\t<div [ngClass]=\"{'gui-card-title': isTitleEnabled()}\">\n\t\t{{title}}\n\t</div>\n\n\t<div [ngClass]=\"{'gui-card-content-block': isContentBlockEnabled()}\">\n\t\t<div\n\t\t\t\t*ngFor=\"let block of contentBlock\"\n\t\t\t\t[ngClass]=\"{'gui-card-content-block-item': isContentBlockEnabled()}\">\n\t\t\t{{block}}\n\t\t</div>\n\t</div>\n\n\t<div class=\"gui-content\">\n\t\t<ng-content></ng-content>\n\t</div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-card]': 'true'
                },
                styles: [".gui-card .gui-card-img{border-radius:4px 4px 0 0;height:auto;margin:0 0 12px;width:350px}.gui-card .gui-card-body{background:#fff;border-radius:4px;box-shadow:0 1px 3px #999;box-sizing:border-box;font-family:Roboto,'Helvetica Neue',sans-serif;font-size:14px;margin:0;padding:0 0 20px;transition:transform .3s ease-in-out;width:350px}.gui-card .gui-card-body:hover{box-shadow:0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05)}.gui-card .gui-card-body .gui-card-title{font-size:20px;font-weight:700;margin:0 0 12px;padding:0 20px}.gui-card .gui-card-body .gui-card-content-block{margin:0 0 12px}.gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item{padding:12px 20px;border-top:1px solid #d6d6d6}.gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item:last-child{border-bottom:1px solid #d6d6d6}.gui-card .gui-card-body .gui-content{padding:0 20px}", ".gui-material .gui-card .gui-card-body{font-family:Roboto,\"Helvetica Neue\",sans-serif}", ".gui-dark .gui-card .gui-card-body{background:#121212;border-color:#616161;color:#bdbdbd}.gui-dark .gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item{border-top-color:#616161}.gui-dark .gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item:last-child{border-bottom-color:#616161}.gui-dark .gui-content-block .gui-card-content-block{border-color:#616161}"]
            }] }
];
FabricCardComponent.propDecorators = {
    title: [{ type: Input }],
    image: [{ type: Input }],
    alt: [{ type: Input }],
    contentBlock: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FabricCardComponent.prototype.title;
    /** @type {?} */
    FabricCardComponent.prototype.image;
    /** @type {?} */
    FabricCardComponent.prototype.alt;
    /** @type {?} */
    FabricCardComponent.prototype.contentBlock;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJsYXlvdXQvY2FyZC9jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFnQjdGLE1BQU0sT0FBTyxtQkFBbUI7SUFkaEM7UUEwQkMsaUJBQVksR0FBa0IsRUFBRSxDQUFDO0lBYWxDLENBQUM7Ozs7SUFYQSxjQUFjO1FBQ2IsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsWUFBWTtRQUNYLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELHFCQUFxQjtRQUNwQixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzVCLENBQUM7OztZQXRDRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLDRtQkFBb0M7Z0JBTXBDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsSUFBSSxFQUFFO29CQUNMLGtCQUFrQixFQUFFLE1BQU07aUJBQzFCOzthQUNEOzs7b0JBR0MsS0FBSztvQkFHTCxLQUFLO2tCQUdMLEtBQUs7MkJBR0wsS0FBSzs7OztJQVROLG9DQUNjOztJQUVkLG9DQUNjOztJQUVkLGtDQUNZOztJQUVaLDJDQUNpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktY2FyZCcsXG5cdHRlbXBsYXRlVXJsOiBgLi9jYXJkLmNvbXBvbmVudC5odG1sYCxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vY2FyZC5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL2NhcmQubWF0ZXJpYWwubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9jYXJkLmRhcmsubmd4LnNjc3MnXG5cdF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktY2FyZF0nOiAndHJ1ZSdcblx0fVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNDYXJkQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHR0aXRsZTogc3RyaW5nO1xuXG5cdEBJbnB1dCgpXG5cdGltYWdlOiBzdHJpbmc7XG5cblx0QElucHV0KClcblx0YWx0OiBzdHJpbmc7XG5cblx0QElucHV0KClcblx0Y29udGVudEJsb2NrOiBBcnJheTxzdHJpbmc+ID0gW107XG5cblx0aXNUaXRsZUVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICEhdGhpcy50aXRsZTtcblx0fVxuXG5cdGlzSW1nRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gISF0aGlzLmltYWdlO1xuXHR9XG5cblx0aXNDb250ZW50QmxvY2tFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhIXRoaXMuY29udGVudEJsb2NrO1xuXHR9XG59XG4iXX0=