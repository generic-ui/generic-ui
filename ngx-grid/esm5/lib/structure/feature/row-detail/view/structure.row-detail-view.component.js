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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJvdy1kZXRhaWwtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS9yb3ctZGV0YWlsL3ZpZXcvc3RydWN0dXJlLnJvdy1kZXRhaWwtdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxZQUFZLEVBQVksTUFBTSwyQkFBMkIsQ0FBQztBQUVuRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUdoSDtJQWVDLHlDQUF3RCxJQUFTLEVBQ2QsUUFBYSxFQUM1QyxTQUF1QjtRQUZhLFNBQUksR0FBSixJQUFJLENBQUs7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQzVDLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFFMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQzs7OztJQUVELGtEQUFROzs7SUFBUjtRQUNDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3BDLENBQUM7O2dCQXhCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDREQUlUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7Ozs7Z0RBT2EsTUFBTSxTQUFDLDBCQUEwQjtnREFDMUMsTUFBTSxTQUFDLDhCQUE4QjtnQkFyQmpDLFlBQVk7O0lBK0JyQixzQ0FBQztDQUFBLEFBMUJELElBMEJDO1NBakJZLCtCQUErQjs7O0lBRTNDLDREQUE4Qjs7SUFFOUIsbURBQW1COzs7OztJQUVQLCtDQUFxRDs7Ozs7SUFDOUQsbURBQTZEOzs7OztJQUM3RCxvREFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbmplY3QsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgc3RydWN0dXJlUm93RGV0YWlsVmlld0l0ZW0sIHN0cnVjdHVyZVJvd0RldGFpbFZpZXdUZW1wbGF0ZSB9IGZyb20gJy4vc3RydWN0dXJlLnJvdy1kZXRhaWwtdmlldy50b2tlbnMnO1xuXG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZTogYFxuXHRcdFxuXHRcdDxkaXYgW2lubmVySFRNTF09XCJzYWZlSFRNTFwiPjwvZGl2PlxuXHRcdFxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRzZWxlY3RlZFJvd1ZhbHVlczogQXJyYXk8YW55PjtcblxuXHRzYWZlSFRNTDogU2FmZUh0bWw7XG5cblx0Y29uc3RydWN0b3IoQEluamVjdChzdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3SXRlbSkgcHJpdmF0ZSBpdGVtOiBhbnksXG5cdFx0XHRcdEBJbmplY3Qoc3RydWN0dXJlUm93RGV0YWlsVmlld1RlbXBsYXRlKSBwcml2YXRlIHRlbXBsYXRlOiBhbnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcblxuXHRcdHRoaXMuc2FmZUhUTUwgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh0aGlzLnRlbXBsYXRlKHRoaXMuaXRlbSkpO1xuXHR9XG5cblx0bmdPbkluaXQoKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RlZFJvd1ZhbHVlcyA9IHRoaXMuaXRlbTtcblx0fVxuXG59XG4iXX0=