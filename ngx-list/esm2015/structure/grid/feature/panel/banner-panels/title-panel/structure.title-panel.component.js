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
    getBannerPanelConfig() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnRpdGxlLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9wYW5lbC9iYW5uZXItcGFuZWxzL3RpdGxlLXBhbmVsL3N0cnVjdHVyZS50aXRsZS1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJILE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBY2pFLE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxvQkFBb0I7Ozs7OztJQUVyRSxZQUE2QixnQ0FBa0UsRUFDNUYsaUJBQW9DLEVBQ3BDLFVBQXNCO1FBQ3hCLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUhULHFDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBa0M7SUFJL0YsQ0FBQzs7OztJQUVELG9CQUFvQjtRQUNuQixPQUFPLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNuRCxDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLE9BQU8sMkJBQTJCLENBQUM7SUFDcEMsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLGFBQWEsQ0FBQztJQUN0QixDQUFDOzs7WUE1QkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLFFBQVEsRUFBRTs7OztFQUlUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7OztZQWRRLGdDQUFnQztZQUZQLGlCQUFpQjtZQUFhLFVBQVU7Ozs7Ozs7SUFtQjdELHdFQUFtRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4vc3RydWN0dXJlLnRpdGxlLXBhbmVsLmNvbmZpZy1hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUJhbm5lclBhbmVsIH0gZnJvbSAnLi4vc3RydWN0dXJlLWJhbm5lci1wYW5lbCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVCYW5uZXJQYW5lbENvbmZpZyB9IGZyb20gJy4uL3N0cnVjdHVyZS1iYW5uZXItcGFuZWwuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zdHJ1Y3R1cmUtdGl0bGUtcGFuZWxdJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2IFtpbm5lckhUTUxdPVwiYmFubmVyUGFuZWwgfCBndWlTYWZlOiAnaHRtbCdcIlxuXHRcdFx0IGNsYXNzPVwiZ3VpLXRpdGxlLXBhbmVsIGd1aS1wLTYgZ3VpLWJvcmRlci1iIGd1aS1ib3JkZXItYi1zb2xpZFwiPlxuXHRcdDwvZGl2PlxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVUaXRsZVBhbmVsQ29tcG9uZW50IGV4dGVuZHMgU3RydWN0dXJlQmFubmVyUGFuZWwge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZVRpdGxlUGFuZWxDb25maWdBcmNoaXZlLFxuXHRcdFx0XHRjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cdH1cblxuXHRnZXRCYW5uZXJQYW5lbENvbmZpZygpOiBPYnNlcnZhYmxlPFN0cnVjdHVyZUJhbm5lclBhbmVsQ29uZmlnPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmUub24oKTtcblx0fVxuXG5cdGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS10aXRsZS1wYW5lbCc7XG5cdH1cblxuXHRnZXRQYW5lbFRpdGxlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdUaXRsZSBwYW5lbCc7XG5cdH1cblxufVxuIl19