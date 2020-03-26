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
    /**
     * @return {?}
     */
    isOnlyContentBlockEnabled() {
        return !this.title && !this.image && !!this.contentBlock;
    }
}
FabricCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-card',
                template: "<div [ngClass]=\"{'gui-content-block': isOnlyContentBlockEnabled()}\"\n\t class=\"gui-card-body\">\n\n\t<img [ngClass]=\"{'gui-card-img': isImgEnabled()}\"\n\t\t alt=\"{{alt}}\" src=\"{{image}}\"/>\n\n\t<div [ngClass]=\"{'gui-card-title': isTitleEnabled()}\">\n\t\t{{title}}\n\t</div>\n\n\t<div [ngClass]=\"{'gui-card-content-block': isContentBlockEnabled()}\">\n\t\t<div\n\t\t\t*ngFor=\"let block of contentBlock\"\n\t\t\t[ngClass]=\"{'gui-card-content-block-item': isContentBlockEnabled()}\">\n\t\t\t{{block}}\n\t\t</div>\n\t</div>\n\n\t<div class=\"gui-content\">\n\t\t<ng-content></ng-content>\n\t</div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-card]': 'true'
                },
                styles: [".gui-card .gui-card-img{margin:0 0 12px;border-radius:4px 4px 0 0;width:350px;height:auto}.gui-card .gui-card-body{box-sizing:border-box;background:#fff;border-radius:4px;width:350px;margin:0;padding:0 0 20px;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;-webkit-transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out,-webkit-transform .3s ease-in-out;box-shadow:0 1px 3px #999}.gui-card .gui-card-body:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);box-shadow:0 14px 28px #999}.gui-card .gui-card-body .gui-card-title{font-size:20px;font-weight:700;margin:0 0 12px;padding:0 20px}.gui-card .gui-card-body .gui-card-content-block{margin:0 0 12px}.gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item{padding:12px 20px;border-top:1px solid #d6d6d6}.gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item:last-child{border-bottom:1px solid #d6d6d6}.gui-card .gui-card-body .gui-content{padding:0 20px}.gui-content-block.gui-card-body{padding:0;border:none}.gui-content-block .gui-card-content-block{border-color:#d6d6d6;border-style:solid;border-width:0 1px}", ".gui-material .gui-card .gui-card-body{font-family:Roboto,\"Helvetica Neue\",sans-serif}", ".gui-dark .gui-card .gui-card-body{background:#121212;color:#bdbdbd;border-color:#616161}.gui-dark .gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item{border-top-color:#616161}.gui-dark .gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item:last-child{border-bottom-color:#616161}.gui-dark .gui-content-block .gui-card-content-block{border-color:#616161}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJsYXlvdXQvY2FyZC9jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFnQjdGLE1BQU0sT0FBTyxtQkFBbUI7SUFkaEM7UUEwQkMsaUJBQVksR0FBa0IsRUFBRSxDQUFDO0lBaUJsQyxDQUFDOzs7O0lBZkEsY0FBYztRQUNiLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELFlBQVk7UUFDWCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxxQkFBcUI7UUFDcEIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQseUJBQXlCO1FBQ3hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxRCxDQUFDOzs7WUExQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixxbkJBQWtDO2dCQU1sQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLElBQUksRUFBRTtvQkFDTCxrQkFBa0IsRUFBRSxNQUFNO2lCQUMxQjs7YUFDRDs7O29CQUdDLEtBQUs7b0JBR0wsS0FBSztrQkFHTCxLQUFLOzJCQUdMLEtBQUs7Ozs7SUFUTixvQ0FDYzs7SUFFZCxvQ0FDYzs7SUFFZCxrQ0FDWTs7SUFFWiwyQ0FDaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWNhcmQnLFxuXHR0ZW1wbGF0ZVVybDogYGNhcmQuY29tcG9uZW50Lmh0bWxgLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9jYXJkLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvY2FyZC5tYXRlcmlhbC5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL2NhcmQuZGFyay5uZ3guc2Nzcydcblx0XSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1jYXJkXSc6ICd0cnVlJ1xuXHR9XG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0NhcmRDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdHRpdGxlOiBzdHJpbmc7XG5cblx0QElucHV0KClcblx0aW1hZ2U6IHN0cmluZztcblxuXHRASW5wdXQoKVxuXHRhbHQ6IHN0cmluZztcblxuXHRASW5wdXQoKVxuXHRjb250ZW50QmxvY2s6IEFycmF5PHN0cmluZz4gPSBbXTtcblxuXHRpc1RpdGxlRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gISF0aGlzLnRpdGxlO1xuXHR9XG5cblx0aXNJbWdFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhIXRoaXMuaW1hZ2U7XG5cdH1cblxuXHRpc0NvbnRlbnRCbG9ja0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICEhdGhpcy5jb250ZW50QmxvY2s7XG5cdH1cblxuXHRpc09ubHlDb250ZW50QmxvY2tFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhdGhpcy50aXRsZSAmJiAhdGhpcy5pbWFnZSAmJiAhIXRoaXMuY29udGVudEJsb2NrO1xuXHR9XG59XG4iXX0=