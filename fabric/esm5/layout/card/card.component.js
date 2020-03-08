/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
var FabricCardComponent = /** @class */ (function () {
    function FabricCardComponent() {
        this.contentBlock = [];
    }
    /**
     * @return {?}
     */
    FabricCardComponent.prototype.isTitleEnabled = /**
     * @return {?}
     */
    function () {
        return !!this.title;
    };
    /**
     * @return {?}
     */
    FabricCardComponent.prototype.isImgEnabled = /**
     * @return {?}
     */
    function () {
        return !!this.image;
    };
    /**
     * @return {?}
     */
    FabricCardComponent.prototype.isContentBlockEnabled = /**
     * @return {?}
     */
    function () {
        return !!this.contentBlock;
    };
    /**
     * @return {?}
     */
    FabricCardComponent.prototype.isOnlyContentBlockEnabled = /**
     * @return {?}
     */
    function () {
        return !this.title && !this.image && !!this.contentBlock;
    };
    FabricCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-card',
                    template: "<div [ngClass]=\"{'gui-content-block': isOnlyContentBlockEnabled()}\"\n\t class=\"gui-card-body\">\n\n\t<img [ngClass]=\"{'gui-card-img': isImgEnabled()}\"\n\t\t alt=\"{{alt}}\" src=\"{{image}}\"/>\n\n\t<div [ngClass]=\"{'gui-card-title': isTitleEnabled()}\">\n\t\t{{title}}\n\t</div>\n\n\t<div [ngClass]=\"{'gui-card-content-block': isContentBlockEnabled()}\">\n\t\t<div\n\t\t\t*ngFor=\"let block of contentBlock\"\n\t\t\t[ngClass]=\"{'gui-card-content-block-item': isContentBlockEnabled()}\">\n\t\t\t{{block}}\n\t\t</div>\n\t</div>\n\n\t<div class=\"gui-content\">\n\t\t<ng-content></ng-content>\n\t</div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-card]': 'true'
                    },
                    styles: [".gui-card .gui-card-img{margin:0 0 12px;border-radius:4px 4px 0 0;width:350px;height:auto}.gui-card .gui-card-body{box-sizing:border-box;background:#fff;border-radius:8px;width:350px;margin:0;padding:0 0 20px;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;-webkit-transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out,-webkit-transform .3s ease-in-out;box-shadow:0 1px 3px #999}.gui-card .gui-card-body:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);box-shadow:0 14px 28px #999}.gui-card .gui-card-body .gui-card-title{font-size:20px;font-weight:700;margin:0 0 12px;padding:0 20px}.gui-card .gui-card-body .gui-card-content-block{margin:0 0 12px}.gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item{padding:12px 20px;border-top:1px solid #d6d6d6}.gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item:last-child{border-bottom:1px solid #d6d6d6}.gui-card .gui-card-body .gui-content{padding:0 20px}.gui-content-block.gui-card-body{padding:0;border:none}.gui-content-block .gui-card-content-block{border-color:#d6d6d6;border-style:solid;border-width:0 1px}", ".gui-material .gui-card .gui-card-body{font-family:Roboto,\"Helvetica Neue\",sans-serif}", ".gui-dark .gui-card .gui-card-body{background:#121212;color:#bdbdbd;border-color:#616161}.gui-dark .gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item{border-top-color:#616161}.gui-dark .gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item:last-child{border-bottom-color:#616161}.gui-dark .gui-content-block .gui-card-content-block{border-color:#616161}"]
                }] }
    ];
    FabricCardComponent.propDecorators = {
        title: [{ type: Input }],
        image: [{ type: Input }],
        alt: [{ type: Input }],
        contentBlock: [{ type: Input }]
    };
    return FabricCardComponent;
}());
export { FabricCardComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJsYXlvdXQvY2FyZC9jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0Y7SUFBQTtRQTBCQyxpQkFBWSxHQUFrQixFQUFFLENBQUM7SUFpQmxDLENBQUM7Ozs7SUFmQSw0Q0FBYzs7O0lBQWQ7UUFDQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCwwQ0FBWTs7O0lBQVo7UUFDQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxtREFBcUI7OztJQUFyQjtRQUNDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELHVEQUF5Qjs7O0lBQXpCO1FBQ0MsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFELENBQUM7O2dCQTFDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLHFuQkFBa0M7b0JBTWxDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsSUFBSSxFQUFFO3dCQUNMLGtCQUFrQixFQUFFLE1BQU07cUJBQzFCOztpQkFDRDs7O3dCQUdDLEtBQUs7d0JBR0wsS0FBSztzQkFHTCxLQUFLOytCQUdMLEtBQUs7O0lBa0JQLDBCQUFDO0NBQUEsQUEzQ0QsSUEyQ0M7U0E3QlksbUJBQW1COzs7SUFFL0Isb0NBQ2M7O0lBRWQsb0NBQ2M7O0lBRWQsa0NBQ1k7O0lBRVosMkNBQ2lDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1jYXJkJyxcblx0dGVtcGxhdGVVcmw6IGBjYXJkLmNvbXBvbmVudC5odG1sYCxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vY2FyZC5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL2NhcmQubWF0ZXJpYWwubmd4LnNjc3MnLFxuXHRcdCcuL3RoZW1lcy9jYXJkLmRhcmsubmd4LnNjc3MnXG5cdF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktY2FyZF0nOiAndHJ1ZSdcblx0fVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNDYXJkQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHR0aXRsZTogc3RyaW5nO1xuXG5cdEBJbnB1dCgpXG5cdGltYWdlOiBzdHJpbmc7XG5cblx0QElucHV0KClcblx0YWx0OiBzdHJpbmc7XG5cblx0QElucHV0KClcblx0Y29udGVudEJsb2NrOiBBcnJheTxzdHJpbmc+ID0gW107XG5cblx0aXNUaXRsZUVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICEhdGhpcy50aXRsZTtcblx0fVxuXG5cdGlzSW1nRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gISF0aGlzLmltYWdlO1xuXHR9XG5cblx0aXNDb250ZW50QmxvY2tFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhIXRoaXMuY29udGVudEJsb2NrO1xuXHR9XG5cblx0aXNPbmx5Q29udGVudEJsb2NrRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gIXRoaXMudGl0bGUgJiYgIXRoaXMuaW1hZ2UgJiYgISF0aGlzLmNvbnRlbnRCbG9jaztcblx0fVxufVxuIl19