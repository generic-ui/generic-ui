/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { StructureTitlePanelConfigArchive } from './structure.title-panel.config-archive';
import { StructureBannerPanel } from '../structure-banner-panel';
export class StructureTitlePanelComponent extends StructureBannerPanel {
    /**
     * @param {?} structureTitlePanelConfigArchive
     * @param {?} changeDetectorRef
     * @param {?} elementRef
     */
    constructor(structureTitlePanelConfigArchive, changeDetectorRef, elementRef) {
        super(changeDetectorRef, elementRef);
        this.structureTitlePanelConfigArchive = structureTitlePanelConfigArchive;
    }
    /**
     * @return {?}
     */
    onBannerPanelConfig() {
        return this.structureTitlePanelConfigArchive.on();
    }
    /**
     * @return {?}
     */
    getSelectorName() {
        return 'gui-structure-title-panel';
    }
    /**
     * @return {?}
     */
    getPanelTitle() {
        return 'Title panel';
    }
}
StructureTitlePanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-structure-title-panel]',
                template: `
		<div [innerHTML]="bannerPanel | guiSafe: 'html'"
			 class="gui-title-panel gui-p-6 gui-border-b gui-border-b-solid">
		</div>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureTitlePanelComponent.ctorParameters = () => [
    { type: StructureTitlePanelConfigArchive },
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureTitlePanelComponent.prototype.structureTitlePanelConfigArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnRpdGxlLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9wYW5lbC9iYW5uZXItcGFuZWxzL3RpdGxlLXBhbmVsL3N0cnVjdHVyZS50aXRsZS1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJILE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBY2pFLE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxvQkFBb0I7Ozs7OztJQUVyRSxZQUE2QixnQ0FBa0UsRUFDNUYsaUJBQW9DLEVBQ3BDLFVBQXNCO1FBQ3hCLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUhULHFDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBa0M7SUFJL0YsQ0FBQzs7OztJQUVELG1CQUFtQjtRQUNsQixPQUFPLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNuRCxDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLE9BQU8sMkJBQTJCLENBQUM7SUFDcEMsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLGFBQWEsQ0FBQztJQUN0QixDQUFDOzs7WUE1QkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLFFBQVEsRUFBRTs7OztFQUlUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7OztZQWRRLGdDQUFnQztZQUZQLGlCQUFpQjtZQUFhLFVBQVU7Ozs7Ozs7SUFtQjdELHdFQUFtRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4vc3RydWN0dXJlLnRpdGxlLXBhbmVsLmNvbmZpZy1hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUJhbm5lclBhbmVsIH0gZnJvbSAnLi4vc3RydWN0dXJlLWJhbm5lci1wYW5lbCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVCYW5uZXJQYW5lbENvbmZpZyB9IGZyb20gJy4uL3N0cnVjdHVyZS1iYW5uZXItcGFuZWwuY29uZmlnJztcbmltcG9ydCB7IEhlcm1lc09ic2VydmFibGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXN0cnVjdHVyZS10aXRsZS1wYW5lbF0nLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgW2lubmVySFRNTF09XCJiYW5uZXJQYW5lbCB8IGd1aVNhZmU6ICdodG1sJ1wiXG5cdFx0XHQgY2xhc3M9XCJndWktdGl0bGUtcGFuZWwgZ3VpLXAtNiBndWktYm9yZGVyLWIgZ3VpLWJvcmRlci1iLXNvbGlkXCI+XG5cdFx0PC9kaXY+XG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVRpdGxlUGFuZWxDb21wb25lbnQgZXh0ZW5kcyBTdHJ1Y3R1cmVCYW5uZXJQYW5lbCB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZTogU3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmUsXG5cdFx0XHRcdGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblx0fVxuXG5cdG9uQmFubmVyUGFuZWxDb25maWcoKTogSGVybWVzT2JzZXJ2YWJsZTxTdHJ1Y3R1cmVCYW5uZXJQYW5lbENvbmZpZz4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVRpdGxlUGFuZWxDb25maWdBcmNoaXZlLm9uKCk7XG5cdH1cblxuXHRnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zdHJ1Y3R1cmUtdGl0bGUtcGFuZWwnO1xuXHR9XG5cblx0Z2V0UGFuZWxUaXRsZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnVGl0bGUgcGFuZWwnO1xuXHR9XG5cbn1cbiJdfQ==