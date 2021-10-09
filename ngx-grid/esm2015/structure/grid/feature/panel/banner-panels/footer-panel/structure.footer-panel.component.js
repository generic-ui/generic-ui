/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { StructureFooterPanelConfigArchive } from './structure.footer-panel.config-archive';
import { StructureBannerPanel } from '../structure-banner-panel';
export class StructureFooterPanelComponent extends StructureBannerPanel {
    /**
     * @param {?} structureFooterPanelConfigArchive
     * @param {?} changeDetectorRef
     * @param {?} elementRef
     */
    constructor(structureFooterPanelConfigArchive, changeDetectorRef, elementRef) {
        super(changeDetectorRef, elementRef);
        this.structureFooterPanelConfigArchive = structureFooterPanelConfigArchive;
    }
    /**
     * @return {?}
     */
    onBannerPanelConfig() {
        return this.structureFooterPanelConfigArchive.on();
    }
    /**
     * @return {?}
     */
    getSelectorName() {
        return 'gui-structure-footer-panel';
    }
    /**
     * @return {?}
     */
    getPanelTitle() {
        return 'Footer panel';
    }
}
StructureFooterPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-structure-footer-panel]',
                template: `
		<div [innerHTML]="bannerPanel | guiSafe: 'html'"
			 class="gui-footer-panel gui-p-6 gui-border-t gui-border-t-solid">
		</div>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureFooterPanelComponent.ctorParameters = () => [
    { type: StructureFooterPanelConfigArchive },
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureFooterPanelComponent.prototype.structureFooterPanelConfigArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZvb3Rlci1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvcGFuZWwvYmFubmVyLXBhbmVscy9mb290ZXItcGFuZWwvc3RydWN0dXJlLmZvb3Rlci1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJILE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzVGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBY2pFLE1BQU0sT0FBTyw2QkFBOEIsU0FBUSxvQkFBb0I7Ozs7OztJQUV0RSxZQUE2QixpQ0FBb0UsRUFDOUYsaUJBQW9DLEVBQ3BDLFVBQXNCO1FBQ3hCLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUhULHNDQUFpQyxHQUFqQyxpQ0FBaUMsQ0FBbUM7SUFJakcsQ0FBQzs7OztJQUVELG1CQUFtQjtRQUNsQixPQUFPLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLE9BQU8sNEJBQTRCLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLGNBQWMsQ0FBQztJQUN2QixDQUFDOzs7WUE1QkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxpQ0FBaUM7Z0JBQzNDLFFBQVEsRUFBRTs7OztFQUlUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7OztZQWRRLGlDQUFpQztZQUZSLGlCQUFpQjtZQUFhLFVBQVU7Ozs7Ozs7SUFtQjdELDBFQUFxRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVGb290ZXJQYW5lbENvbmZpZ0FyY2hpdmUgfSBmcm9tICcuL3N0cnVjdHVyZS5mb290ZXItcGFuZWwuY29uZmlnLWFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQmFubmVyUGFuZWwgfSBmcm9tICcuLi9zdHJ1Y3R1cmUtYmFubmVyLXBhbmVsJztcbmltcG9ydCB7IFN0cnVjdHVyZUJhbm5lclBhbmVsQ29uZmlnIH0gZnJvbSAnLi4vc3RydWN0dXJlLWJhbm5lci1wYW5lbC5jb25maWcnO1xuaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLWZvb3Rlci1wYW5lbF0nLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgW2lubmVySFRNTF09XCJiYW5uZXJQYW5lbCB8IGd1aVNhZmU6ICdodG1sJ1wiXG5cdFx0XHQgY2xhc3M9XCJndWktZm9vdGVyLXBhbmVsIGd1aS1wLTYgZ3VpLWJvcmRlci10IGd1aS1ib3JkZXItdC1zb2xpZFwiPlxuXHRcdDwvZGl2PlxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVGb290ZXJQYW5lbENvbXBvbmVudCBleHRlbmRzIFN0cnVjdHVyZUJhbm5lclBhbmVsIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZTogU3RydWN0dXJlRm9vdGVyUGFuZWxDb25maWdBcmNoaXZlLFxuXHRcdFx0XHRjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cdH1cblxuXHRvbkJhbm5lclBhbmVsQ29uZmlnKCk6IEhlcm1lc09ic2VydmFibGU8U3RydWN0dXJlQmFubmVyUGFuZWxDb25maWc+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVGb290ZXJQYW5lbENvbmZpZ0FyY2hpdmUub24oKTtcblx0fVxuXG5cdGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS1mb290ZXItcGFuZWwnO1xuXHR9XG5cblx0Z2V0UGFuZWxUaXRsZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnRm9vdGVyIHBhbmVsJztcblx0fVxufVxuIl19