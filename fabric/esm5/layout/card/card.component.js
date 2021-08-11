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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJsYXlvdXQvY2FyZC9jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0Y7SUFBQTtRQTBCQyxpQkFBWSxHQUFrQixFQUFFLENBQUM7SUFhbEMsQ0FBQzs7OztJQVhBLDRDQUFjOzs7SUFBZDtRQUNDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELDBDQUFZOzs7SUFBWjtRQUNDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELG1EQUFxQjs7O0lBQXJCO1FBQ0MsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUM1QixDQUFDOztnQkF0Q0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxVQUFVO29CQUNwQiw0bUJBQW9DO29CQU1wQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLElBQUksRUFBRTt3QkFDTCxrQkFBa0IsRUFBRSxNQUFNO3FCQUMxQjs7aUJBQ0Q7Ozt3QkFHQyxLQUFLO3dCQUdMLEtBQUs7c0JBR0wsS0FBSzsrQkFHTCxLQUFLOztJQWNQLDBCQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7U0F6QlksbUJBQW1COzs7SUFFL0Isb0NBQ2M7O0lBRWQsb0NBQ2M7O0lBRWQsa0NBQ1k7O0lBRVosMkNBQ2lDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1jYXJkJyxcblx0dGVtcGxhdGVVcmw6IGAuL2NhcmQuY29tcG9uZW50Lmh0bWxgLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9jYXJkLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvY2FyZC5tYXRlcmlhbC5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL2NhcmQuZGFyay5uZ3guc2Nzcydcblx0XSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1jYXJkXSc6ICd0cnVlJ1xuXHR9XG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0NhcmRDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdHRpdGxlOiBzdHJpbmc7XG5cblx0QElucHV0KClcblx0aW1hZ2U6IHN0cmluZztcblxuXHRASW5wdXQoKVxuXHRhbHQ6IHN0cmluZztcblxuXHRASW5wdXQoKVxuXHRjb250ZW50QmxvY2s6IEFycmF5PHN0cmluZz4gPSBbXTtcblxuXHRpc1RpdGxlRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gISF0aGlzLnRpdGxlO1xuXHR9XG5cblx0aXNJbWdFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhIXRoaXMuaW1hZ2U7XG5cdH1cblxuXHRpc0NvbnRlbnRCbG9ja0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICEhdGhpcy5jb250ZW50QmxvY2s7XG5cdH1cbn1cbiJdfQ==