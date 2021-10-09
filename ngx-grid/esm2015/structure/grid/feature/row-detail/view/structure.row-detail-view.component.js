/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { structureRowDetailViewItem, structureRowDetailViewTemplate } from './structure.row-detail-view.tokens';
import { SelectedRow } from '../../../../source/core/api/formation/selected-row';
export class StructureRowDetailViewComponent {
    /**
     * @param {?} item
     * @param {?} template
     * @param {?} sanitizer
     */
    constructor(item, template, sanitizer) {
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
                template: `

		<div [innerHTML]="safeHTML"></div>

	`,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJvdy1kZXRhaWwtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvcm93LWRldGFpbC92aWV3L3N0cnVjdHVyZS5yb3ctZGV0YWlsLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFFbkUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLDhCQUE4QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDaEgsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBWWpGLE1BQU0sT0FBTywrQkFBK0I7Ozs7OztJQU0zQyxZQUF3RCxJQUFpQixFQUN0QixRQUFhLEVBQzVDLFNBQXVCO1FBRmEsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQzVDLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFFMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwSCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQy9DLENBQUM7OztZQXhCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFOzs7O0VBSVQ7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDOzs7O1lBWFEsV0FBVyx1QkFrQk4sTUFBTSxTQUFDLDBCQUEwQjs0Q0FDMUMsTUFBTSxTQUFDLDhCQUE4QjtZQXRCakMsWUFBWTs7OztJQWlCcEIsMkRBQThCOztJQUU5QixtREFBbUI7Ozs7O0lBRVAsK0NBQTZEOzs7OztJQUN0RSxtREFBNkQ7Ozs7O0lBQzdELG9EQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEluamVjdCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBzdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3SXRlbSwgc3RydWN0dXJlUm93RGV0YWlsVmlld1RlbXBsYXRlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUucm93LWRldGFpbC12aWV3LnRva2Vucyc7XG5pbXBvcnQgeyBTZWxlY3RlZFJvdyB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vc2VsZWN0ZWQtcm93JztcblxuXG5AQ29tcG9uZW50KHtcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxkaXYgW2lubmVySFRNTF09XCJzYWZlSFRNTFwiPjwvZGl2PlxuXG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVJvd0RldGFpbFZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHNlbGVjdGVkUm93VmFsdWU6IFNlbGVjdGVkUm93O1xuXG5cdHNhZmVIVE1MOiBTYWZlSHRtbDtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KHN0cnVjdHVyZVJvd0RldGFpbFZpZXdJdGVtKSBwcml2YXRlIGl0ZW06IFNlbGVjdGVkUm93LFxuXHRcdFx0XHRASW5qZWN0KHN0cnVjdHVyZVJvd0RldGFpbFZpZXdUZW1wbGF0ZSkgcHJpdmF0ZSB0ZW1wbGF0ZTogYW55LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XG5cblx0XHR0aGlzLnNhZmVIVE1MID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGhpcy50ZW1wbGF0ZSh0aGlzLml0ZW0uZ2V0U291cmNlKCksIHRoaXMuaXRlbS5nZXRJbmRleCgpKSk7XG5cdH1cblxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdGVkUm93VmFsdWUgPSB0aGlzLml0ZW0uZ2V0U291cmNlKCk7XG5cdH1cblxufVxuIl19