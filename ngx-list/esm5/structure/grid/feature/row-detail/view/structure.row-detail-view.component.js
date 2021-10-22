/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { structureRowDetailViewItem, structureRowDetailViewTemplate } from './structure.row-detail-view.tokens';
import { SelectedRow } from '../../../../source/core/api/formation/selected-row';
import { DynamicallyCreatedComponent } from '../../../../../common/cdk/component/dynamically-created-component';
var StructureRowDetailViewComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureRowDetailViewComponent, _super);
    function StructureRowDetailViewComponent(item, template, sanitizer) {
        var _this = _super.call(this) || this;
        _this.item = item;
        _this.template = template;
        _this.sanitizer = sanitizer;
        _this.safeHTML = _this.sanitizer.bypassSecurityTrustHtml(_this.template(_this.item.getSource(), _this.item.getIndex()));
        return _this;
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
                    selector: 'div[gui-row-detail]',
                    template: "<div [innerHTML]=\"safeHTML\"></div>\n",
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
}(DynamicallyCreatedComponent));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJvdy1kZXRhaWwtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvcm93LWRldGFpbC92aWV3L3N0cnVjdHVyZS5yb3ctZGV0YWlsLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDO0FBRW5FLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSw4QkFBOEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2hILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNqRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUloSDtJQU1xRCwyREFBMkI7SUFNL0UseUNBQWlFLElBQWlCLEVBQ3RCLFFBQWEsRUFDckQsU0FBdUI7UUFGM0MsWUFHQyxpQkFBTyxTQUdQO1FBTmdFLFVBQUksR0FBSixJQUFJLENBQWE7UUFDdEIsY0FBUSxHQUFSLFFBQVEsQ0FBSztRQUNyRCxlQUFTLEdBQVQsU0FBUyxDQUFjO1FBRzFDLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7O0lBQ3BILENBQUM7Ozs7SUFFRCxrREFBUTs7O0lBQVI7UUFDQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMvQyxDQUFDOztnQkF0QkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLGtEQUF5RDtvQkFDekQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQzs7OztnQkFWUSxXQUFXLHVCQWlCTixNQUFNLFNBQUMsMEJBQTBCO2dEQUMxQyxNQUFNLFNBQUMsOEJBQThCO2dCQXJCakMsWUFBWTs7SUFnQ3JCLHNDQUFDO0NBQUEsQUF4QkQsQ0FNcUQsMkJBQTJCLEdBa0IvRTtTQWxCWSwrQkFBK0I7OztJQUUzQywyREFBbUM7O0lBRW5DLG1EQUFtQjs7Ozs7SUFFUCwrQ0FBc0U7Ozs7O0lBQy9FLG1EQUFzRTs7Ozs7SUFDdEUsb0RBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5qZWN0LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IHN0cnVjdHVyZVJvd0RldGFpbFZpZXdJdGVtLCBzdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3VGVtcGxhdGUgfSBmcm9tICcuL3N0cnVjdHVyZS5yb3ctZGV0YWlsLXZpZXcudG9rZW5zJztcbmltcG9ydCB7IFNlbGVjdGVkUm93IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9zZWxlY3RlZC1yb3cnO1xuaW1wb3J0IHsgRHluYW1pY2FsbHlDcmVhdGVkQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvZHluYW1pY2FsbHktY3JlYXRlZC1jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXJvdy1kZXRhaWxdJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0cnVjdHVyZS5yb3ctZGV0YWlsLXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3Q29tcG9uZW50IGV4dGVuZHMgRHluYW1pY2FsbHlDcmVhdGVkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRzZWxlY3RlZFJvd1ZhbHVlOiBPcmlnaW5JdGVtRW50aXR5O1xuXG5cdHNhZmVIVE1MOiBTYWZlSHRtbDtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KHN0cnVjdHVyZVJvd0RldGFpbFZpZXdJdGVtKSBwcml2YXRlIHJlYWRvbmx5IGl0ZW06IFNlbGVjdGVkUm93LFxuXHRcdFx0XHRASW5qZWN0KHN0cnVjdHVyZVJvd0RldGFpbFZpZXdUZW1wbGF0ZSkgcHJpdmF0ZSByZWFkb25seSB0ZW1wbGF0ZTogYW55LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuc2FmZUhUTUwgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh0aGlzLnRlbXBsYXRlKHRoaXMuaXRlbS5nZXRTb3VyY2UoKSwgdGhpcy5pdGVtLmdldEluZGV4KCkpKTtcblx0fVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWRSb3dWYWx1ZSA9IHRoaXMuaXRlbS5nZXRTb3VyY2UoKTtcblx0fVxuXG59XG4iXX0=