/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
var StructureDetailViewComponent = /** @class */ (function () {
    function StructureDetailViewComponent(item, temp, sanitizer) {
        this.item = item;
        this.temp = temp;
        this.sanitizer = sanitizer;
        this.safeHTML = this.sanitizer.bypassSecurityTrustHtml(this.temp(this.item));
    }
    /**
     * @return {?}
     */
    StructureDetailViewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.selectedRowValues = this.item;
    };
    StructureDetailViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-detail-view',
                    template: "\n\n\t\t<div [innerHTML]=\"safeHTML\"></div>\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureDetailViewComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['item',] }] },
        { type: undefined, decorators: [{ type: Inject, args: ['template',] }] },
        { type: DomSanitizer }
    ]; };
    return StructureDetailViewComponent;
}());
export { StructureDetailViewComponent };
if (false) {
    /** @type {?} */
    StructureDetailViewComponent.prototype.selectedRowValues;
    /** @type {?} */
    StructureDetailViewComponent.prototype.safeHTML;
    /**
     * @type {?}
     * @private
     */
    StructureDetailViewComponent.prototype.item;
    /**
     * @type {?}
     * @private
     */
    StructureDetailViewComponent.prototype.temp;
    /**
     * @type {?}
     * @private
     */
    StructureDetailViewComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmRldGFpbC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL3Jvdy1kZXRhaWwvZGV0YWlsLXZpZXcvc3RydWN0dXJlLmRldGFpbC12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQVUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFZLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRW5FO0lBZUMsc0NBQW9DLElBQVMsRUFDZCxJQUFTLEVBQ3BCLFNBQXVCO1FBRlAsU0FBSSxHQUFKLElBQUksQ0FBSztRQUNkLFNBQUksR0FBSixJQUFJLENBQUs7UUFDcEIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUUxQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDOzs7O0lBRUQsK0NBQVE7OztJQUFSO1FBQ0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDcEMsQ0FBQzs7Z0JBeEJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxRQUFRLEVBQUUsa0RBR1Q7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQzs7OztnREFPYSxNQUFNLFNBQUMsTUFBTTtnREFDdEIsTUFBTSxTQUFDLFVBQVU7Z0JBbEJILFlBQVk7O0lBNEIvQixtQ0FBQztDQUFBLEFBMUJELElBMEJDO1NBakJZLDRCQUE0Qjs7O0lBRXhDLHlEQUE4Qjs7SUFFOUIsZ0RBQW1COzs7OztJQUVQLDRDQUFpQzs7Ozs7SUFDMUMsNENBQXFDOzs7OztJQUNyQyxpREFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNhZmVIdG1sLCBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1kZXRhaWwtdmlldycsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8ZGl2IFtpbm5lckhUTUxdPVwic2FmZUhUTUxcIj48L2Rpdj5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRGV0YWlsVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0c2VsZWN0ZWRSb3dWYWx1ZXM6IEFycmF5PGFueT47XG5cblx0c2FmZUhUTUw6IFNhZmVIdG1sO1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoJ2l0ZW0nKSBwcml2YXRlIGl0ZW06IGFueSxcblx0XHRcdFx0QEluamVjdCgndGVtcGxhdGUnKSBwcml2YXRlIHRlbXA6IGFueSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xuXG5cdFx0dGhpcy5zYWZlSFRNTCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRoaXMudGVtcCh0aGlzLml0ZW0pKTtcblx0fVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWRSb3dWYWx1ZXMgPSB0aGlzLml0ZW07XG5cdH1cblxufVxuIl19