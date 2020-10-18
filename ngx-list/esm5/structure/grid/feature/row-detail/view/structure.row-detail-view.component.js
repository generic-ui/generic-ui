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
        this.safeHTML = this.sanitizer.bypassSecurityTrustHtml(this.template(this.item.getData(), this.item.getIndex()));
    }
    /**
     * @return {?}
     */
    StructureRowDetailViewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.selectedRowValue = this.item.getData();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJvdy1kZXRhaWwtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvcm93LWRldGFpbC92aWV3L3N0cnVjdHVyZS5yb3ctZGV0YWlsLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFFbkUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLDhCQUE4QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDaEgsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBR2pGO0lBZUMseUNBQXdELElBQWlCLEVBQ3RCLFFBQWEsRUFDNUMsU0FBdUI7UUFGYSxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDNUMsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUUxQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xILENBQUM7Ozs7SUFFRCxrREFBUTs7O0lBQVI7UUFDQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM3QyxDQUFDOztnQkF4QkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSw0REFJVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDOzs7O2dCQVhRLFdBQVcsdUJBa0JOLE1BQU0sU0FBQywwQkFBMEI7Z0RBQzFDLE1BQU0sU0FBQyw4QkFBOEI7Z0JBdEJqQyxZQUFZOztJQWdDckIsc0NBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQWpCWSwrQkFBK0I7OztJQUUzQywyREFBOEI7O0lBRTlCLG1EQUFtQjs7Ozs7SUFFUCwrQ0FBNkQ7Ozs7O0lBQ3RFLG1EQUE2RDs7Ozs7SUFDN0Qsb0RBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5qZWN0LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IHN0cnVjdHVyZVJvd0RldGFpbFZpZXdJdGVtLCBzdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3VGVtcGxhdGUgfSBmcm9tICcuL3N0cnVjdHVyZS5yb3ctZGV0YWlsLXZpZXcudG9rZW5zJztcbmltcG9ydCB7IFNlbGVjdGVkUm93IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9zZWxlY3RlZC1yb3cnO1xuXG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZTogYFxuXHRcdFxuXHRcdDxkaXYgW2lubmVySFRNTF09XCJzYWZlSFRNTFwiPjwvZGl2PlxuXHRcdFxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRzZWxlY3RlZFJvd1ZhbHVlOiBTZWxlY3RlZFJvdztcblxuXHRzYWZlSFRNTDogU2FmZUh0bWw7XG5cblx0Y29uc3RydWN0b3IoQEluamVjdChzdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3SXRlbSkgcHJpdmF0ZSBpdGVtOiBTZWxlY3RlZFJvdyxcblx0XHRcdFx0QEluamVjdChzdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3VGVtcGxhdGUpIHByaXZhdGUgdGVtcGxhdGU6IGFueSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xuXG5cdFx0dGhpcy5zYWZlSFRNTCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRoaXMudGVtcGxhdGUodGhpcy5pdGVtLmdldERhdGEoKSwgdGhpcy5pdGVtLmdldEluZGV4KCkpKTtcblx0fVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWRSb3dWYWx1ZSA9IHRoaXMuaXRlbS5nZXREYXRhKCk7XG5cdH1cblxufVxuIl19