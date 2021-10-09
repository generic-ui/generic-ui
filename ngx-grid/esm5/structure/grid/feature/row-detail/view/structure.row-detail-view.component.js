/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { structureRowDetailViewItem, structureRowDetailViewTemplate } from './structure.row-detail-view.tokens';
import { SelectedRow } from '../../../../source/core/api/formation/selected-row';
var StructureRowDetailViewComponent = /** @class */ (function () {
    function StructureRowDetailViewComponent(item, template, sanitizer) {
        this.item = item;
        this.template = template;
        this.sanitizer = sanitizer;
        this.safeHTML = this.sanitizer.bypassSecurityTrustHtml(this.template(this.item.getSource(), this.item.getIndex()));
    }
    /**
     * @return {?}
     */
    StructureRowDetailViewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.selectedRowValue = this.item.getSource();
    };
    StructureRowDetailViewComponent.decorators = [
        { type: Component, args: [{
                    template: "\n\n\t\t<div [innerHTML]=\"safeHTML\"></div>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureRowDetailViewComponent.ctorParameters = function () { return [
        { type: SelectedRow, decorators: [{ type: Inject, args: [structureRowDetailViewItem,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [structureRowDetailViewTemplate,] }] },
        { type: DomSanitizer }
    ]; };
    return StructureRowDetailViewComponent;
}());
export { StructureRowDetailViewComponent };
if (false) {
    /** @type {?} */
    StructureRowDetailViewComponent.prototype.selectedRowValue;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJvdy1kZXRhaWwtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvcm93LWRldGFpbC92aWV3L3N0cnVjdHVyZS5yb3ctZGV0YWlsLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFFbkUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLDhCQUE4QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDaEgsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBR2pGO0lBZUMseUNBQXdELElBQWlCLEVBQ3RCLFFBQWEsRUFDNUMsU0FBdUI7UUFGYSxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDNUMsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUUxQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BILENBQUM7Ozs7SUFFRCxrREFBUTs7O0lBQVI7UUFDQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMvQyxDQUFDOztnQkF4QkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxvREFJVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDOzs7O2dCQVhRLFdBQVcsdUJBa0JOLE1BQU0sU0FBQywwQkFBMEI7Z0RBQzFDLE1BQU0sU0FBQyw4QkFBOEI7Z0JBdEJqQyxZQUFZOztJQWdDckIsc0NBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQWpCWSwrQkFBK0I7OztJQUUzQywyREFBOEI7O0lBRTlCLG1EQUFtQjs7Ozs7SUFFUCwrQ0FBNkQ7Ozs7O0lBQ3RFLG1EQUE2RDs7Ozs7SUFDN0Qsb0RBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5qZWN0LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IHN0cnVjdHVyZVJvd0RldGFpbFZpZXdJdGVtLCBzdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3VGVtcGxhdGUgfSBmcm9tICcuL3N0cnVjdHVyZS5yb3ctZGV0YWlsLXZpZXcudG9rZW5zJztcbmltcG9ydCB7IFNlbGVjdGVkUm93IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9zZWxlY3RlZC1yb3cnO1xuXG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PGRpdiBbaW5uZXJIVE1MXT1cInNhZmVIVE1MXCI+PC9kaXY+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUm93RGV0YWlsVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0c2VsZWN0ZWRSb3dWYWx1ZTogU2VsZWN0ZWRSb3c7XG5cblx0c2FmZUhUTUw6IFNhZmVIdG1sO1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3Qoc3RydWN0dXJlUm93RGV0YWlsVmlld0l0ZW0pIHByaXZhdGUgaXRlbTogU2VsZWN0ZWRSb3csXG5cdFx0XHRcdEBJbmplY3Qoc3RydWN0dXJlUm93RGV0YWlsVmlld1RlbXBsYXRlKSBwcml2YXRlIHRlbXBsYXRlOiBhbnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcblxuXHRcdHRoaXMuc2FmZUhUTUwgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh0aGlzLnRlbXBsYXRlKHRoaXMuaXRlbS5nZXRTb3VyY2UoKSwgdGhpcy5pdGVtLmdldEluZGV4KCkpKTtcblx0fVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWRSb3dWYWx1ZSA9IHRoaXMuaXRlbS5nZXRTb3VyY2UoKTtcblx0fVxuXG59XG4iXX0=