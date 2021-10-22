/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { structureRowDetailViewItem, structureRowDetailViewTemplate } from './structure.row-detail-view.tokens';
import { SelectedRow } from '../../../../source/core/api/formation/selected-row';
import { DynamicallyCreatedComponent } from '../../../../../common/cdk/component/dynamically-created-component';
export class StructureRowDetailViewComponent extends DynamicallyCreatedComponent {
    /**
     * @param {?} item
     * @param {?} template
     * @param {?} sanitizer
     */
    constructor(item, template, sanitizer) {
        super();
        this.item = item;
        this.template = template;
        this.sanitizer = sanitizer;
        this.safeHTML = this.sanitizer.bypassSecurityTrustHtml(this.template(this.item.getSource(), this.item.getIndex()));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.selectedRowValue = this.item.getSource();
    }
}
StructureRowDetailViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-row-detail]',
                template: "<div [innerHTML]=\"safeHTML\"></div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureRowDetailViewComponent.ctorParameters = () => [
    { type: SelectedRow, decorators: [{ type: Inject, args: [structureRowDetailViewItem,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [structureRowDetailViewTemplate,] }] },
    { type: DomSanitizer }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJvdy1kZXRhaWwtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvcm93LWRldGFpbC92aWV3L3N0cnVjdHVyZS5yb3ctZGV0YWlsLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFFbkUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLDhCQUE4QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDaEgsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ2pGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBVWhILE1BQU0sT0FBTywrQkFBZ0MsU0FBUSwyQkFBMkI7Ozs7OztJQU0vRSxZQUFpRSxJQUFpQixFQUN0QixRQUFhLEVBQ3JELFNBQXVCO1FBQzFDLEtBQUssRUFBRSxDQUFDO1FBSHdELFNBQUksR0FBSixJQUFJLENBQWE7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUNyRCxjQUFTLEdBQVQsU0FBUyxDQUFjO1FBRzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEgsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMvQyxDQUFDOzs7WUF0QkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLGtEQUF5RDtnQkFDekQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDOzs7O1lBVlEsV0FBVyx1QkFpQk4sTUFBTSxTQUFDLDBCQUEwQjs0Q0FDMUMsTUFBTSxTQUFDLDhCQUE4QjtZQXJCakMsWUFBWTs7OztJQWdCcEIsMkRBQW1DOztJQUVuQyxtREFBbUI7Ozs7O0lBRVAsK0NBQXNFOzs7OztJQUMvRSxtREFBc0U7Ozs7O0lBQ3RFLG9EQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEluamVjdCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBzdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3SXRlbSwgc3RydWN0dXJlUm93RGV0YWlsVmlld1RlbXBsYXRlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUucm93LWRldGFpbC12aWV3LnRva2Vucyc7XG5pbXBvcnQgeyBTZWxlY3RlZFJvdyB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vc2VsZWN0ZWQtcm93JztcbmltcG9ydCB7IER5bmFtaWNhbGx5Q3JlYXRlZENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L2R5bmFtaWNhbGx5LWNyZWF0ZWQtY29tcG9uZW50JztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1yb3ctZGV0YWlsXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdHJ1Y3R1cmUucm93LWRldGFpbC12aWV3LmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUm93RGV0YWlsVmlld0NvbXBvbmVudCBleHRlbmRzIER5bmFtaWNhbGx5Q3JlYXRlZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0c2VsZWN0ZWRSb3dWYWx1ZTogT3JpZ2luSXRlbUVudGl0eTtcblxuXHRzYWZlSFRNTDogU2FmZUh0bWw7XG5cblx0Y29uc3RydWN0b3IoQEluamVjdChzdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3SXRlbSkgcHJpdmF0ZSByZWFkb25seSBpdGVtOiBTZWxlY3RlZFJvdyxcblx0XHRcdFx0QEluamVjdChzdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3VGVtcGxhdGUpIHByaXZhdGUgcmVhZG9ubHkgdGVtcGxhdGU6IGFueSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLnNhZmVIVE1MID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGhpcy50ZW1wbGF0ZSh0aGlzLml0ZW0uZ2V0U291cmNlKCksIHRoaXMuaXRlbS5nZXRJbmRleCgpKSk7XG5cdH1cblxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdGVkUm93VmFsdWUgPSB0aGlzLml0ZW0uZ2V0U291cmNlKCk7XG5cdH1cblxufVxuIl19