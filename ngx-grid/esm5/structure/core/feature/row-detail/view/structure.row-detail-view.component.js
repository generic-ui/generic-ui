/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { structureRowDetailViewItem, structureRowDetailViewTemplate } from './structure.row-detail-view.tokens';
var StructureRowDetailViewComponent = /** @class */ (function () {
    function StructureRowDetailViewComponent(item, template, sanitizer) {
        this.item = item;
        this.template = template;
        this.sanitizer = sanitizer;
        this.safeHTML = this.sanitizer.bypassSecurityTrustHtml(this.template(this.item));
    }
    /**
     * @return {?}
     */
    StructureRowDetailViewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.selectedRowValues = this.item;
    };
    StructureRowDetailViewComponent.decorators = [
        { type: Component, args: [{
                    template: "\n\t\t\n\t\t<div [innerHTML]=\"safeHTML\"></div>\n\t\t\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureRowDetailViewComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [structureRowDetailViewItem,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [structureRowDetailViewTemplate,] }] },
        { type: DomSanitizer }
    ]; };
    return StructureRowDetailViewComponent;
}());
export { StructureRowDetailViewComponent };
if (false) {
    /** @type {?} */
    StructureRowDetailViewComponent.prototype.selectedRowValues;
    /** @type {?} */
    StructureRowDetailViewComponent.prototype.safeHTML;
    /**
     * @type {?}
     * @private
     */
    StructureRowDetailViewComponent.prototype.item;
    /**
     * @type {?}
     * @private
     */
    StructureRowDetailViewComponent.prototype.template;
    /**
     * @type {?}
     * @private
     */
    StructureRowDetailViewComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJvdy1kZXRhaWwtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9jb3JlL2ZlYXR1cmUvcm93LWRldGFpbC92aWV3L3N0cnVjdHVyZS5yb3ctZGV0YWlsLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFFbkUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLDhCQUE4QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFHaEg7SUFlQyx5Q0FBd0QsSUFBUyxFQUNkLFFBQWEsRUFDNUMsU0FBdUI7UUFGYSxTQUFJLEdBQUosSUFBSSxDQUFLO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUM1QyxjQUFTLEdBQVQsU0FBUyxDQUFjO1FBRTFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7Ozs7SUFFRCxrREFBUTs7O0lBQVI7UUFDQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNwQyxDQUFDOztnQkF4QkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSw0REFJVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDOzs7O2dEQU9hLE1BQU0sU0FBQywwQkFBMEI7Z0RBQzFDLE1BQU0sU0FBQyw4QkFBOEI7Z0JBckJqQyxZQUFZOztJQStCckIsc0NBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQWpCWSwrQkFBK0I7OztJQUUzQyw0REFBOEI7O0lBRTlCLG1EQUFtQjs7Ozs7SUFFUCwrQ0FBcUQ7Ozs7O0lBQzlELG1EQUE2RDs7Ozs7SUFDN0Qsb0RBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5qZWN0LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IHN0cnVjdHVyZVJvd0RldGFpbFZpZXdJdGVtLCBzdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3VGVtcGxhdGUgfSBmcm9tICcuL3N0cnVjdHVyZS5yb3ctZGV0YWlsLXZpZXcudG9rZW5zJztcblxuXG5AQ29tcG9uZW50KHtcblx0dGVtcGxhdGU6IGBcblx0XHRcblx0XHQ8ZGl2IFtpbm5lckhUTUxdPVwic2FmZUhUTUxcIj48L2Rpdj5cblx0XHRcblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUm93RGV0YWlsVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0c2VsZWN0ZWRSb3dWYWx1ZXM6IEFycmF5PGFueT47XG5cblx0c2FmZUhUTUw6IFNhZmVIdG1sO1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3Qoc3RydWN0dXJlUm93RGV0YWlsVmlld0l0ZW0pIHByaXZhdGUgaXRlbTogYW55LFxuXHRcdFx0XHRASW5qZWN0KHN0cnVjdHVyZVJvd0RldGFpbFZpZXdUZW1wbGF0ZSkgcHJpdmF0ZSB0ZW1wbGF0ZTogYW55LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XG5cblx0XHR0aGlzLnNhZmVIVE1MID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGhpcy50ZW1wbGF0ZSh0aGlzLml0ZW0pKTtcblx0fVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWRSb3dWYWx1ZXMgPSB0aGlzLml0ZW07XG5cdH1cblxufVxuIl19