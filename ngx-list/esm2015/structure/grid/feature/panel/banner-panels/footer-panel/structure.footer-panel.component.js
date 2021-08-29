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
    getBannerPanelConfig() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZvb3Rlci1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvcGFuZWwvYmFubmVyLXBhbmVscy9mb290ZXItcGFuZWwvc3RydWN0dXJlLmZvb3Rlci1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJILE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzVGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBY2pFLE1BQU0sT0FBTyw2QkFBOEIsU0FBUSxvQkFBb0I7Ozs7OztJQUV0RSxZQUE2QixpQ0FBb0UsRUFDOUYsaUJBQW9DLEVBQ3BDLFVBQXNCO1FBQ3hCLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUhULHNDQUFpQyxHQUFqQyxpQ0FBaUMsQ0FBbUM7SUFJakcsQ0FBQzs7OztJQUVELG9CQUFvQjtRQUNuQixPQUFPLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLE9BQU8sNEJBQTRCLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLGNBQWMsQ0FBQztJQUN2QixDQUFDOzs7WUE1QkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxpQ0FBaUM7Z0JBQzNDLFFBQVEsRUFBRTs7OztFQUlUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7OztZQWRRLGlDQUFpQztZQUZSLGlCQUFpQjtZQUFhLFVBQVU7Ozs7Ozs7SUFtQjdELDBFQUFxRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVGb290ZXJQYW5lbENvbmZpZ0FyY2hpdmUgfSBmcm9tICcuL3N0cnVjdHVyZS5mb290ZXItcGFuZWwuY29uZmlnLWFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQmFubmVyUGFuZWwgfSBmcm9tICcuLi9zdHJ1Y3R1cmUtYmFubmVyLXBhbmVsJztcbmltcG9ydCB7IFN0cnVjdHVyZUJhbm5lclBhbmVsQ29uZmlnIH0gZnJvbSAnLi4vc3RydWN0dXJlLWJhbm5lci1wYW5lbC5jb25maWcnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXN0cnVjdHVyZS1mb290ZXItcGFuZWxdJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2IFtpbm5lckhUTUxdPVwiYmFubmVyUGFuZWwgfCBndWlTYWZlOiAnaHRtbCdcIlxuXHRcdFx0IGNsYXNzPVwiZ3VpLWZvb3Rlci1wYW5lbCBndWktcC02IGd1aS1ib3JkZXItdCBndWktYm9yZGVyLXQtc29saWRcIj5cblx0XHQ8L2Rpdj5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRm9vdGVyUGFuZWxDb21wb25lbnQgZXh0ZW5kcyBTdHJ1Y3R1cmVCYW5uZXJQYW5lbCB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVGb290ZXJQYW5lbENvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZSxcblx0XHRcdFx0Y2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0Z2V0QmFubmVyUGFuZWxDb25maWcoKTogT2JzZXJ2YWJsZTxTdHJ1Y3R1cmVCYW5uZXJQYW5lbENvbmZpZz4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZS5vbigpO1xuXHR9XG5cblx0Z2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLWZvb3Rlci1wYW5lbCc7XG5cdH1cblxuXHRnZXRQYW5lbFRpdGxlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdGb290ZXIgcGFuZWwnO1xuXHR9XG59XG4iXX0=