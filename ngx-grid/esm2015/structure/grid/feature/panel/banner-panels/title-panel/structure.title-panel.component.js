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
                template: "<div [innerHTML]=\"bannerPanel | guiSafe: 'html'\"\n\t class=\"gui-title-panel gui-p-6 gui-border-b gui-border-b-solid\">\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnRpdGxlLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9wYW5lbC9iYW5uZXItcGFuZWxzL3RpdGxlLXBhbmVsL3N0cnVjdHVyZS50aXRsZS1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJILE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBV2pFLE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxvQkFBb0I7Ozs7OztJQUVyRSxZQUE2QixnQ0FBa0UsRUFDNUYsaUJBQW9DLEVBQ3BDLFVBQXNCO1FBQ3hCLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUhULHFDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBa0M7SUFJL0YsQ0FBQzs7OztJQUVELG1CQUFtQjtRQUNsQixPQUFPLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNuRCxDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLE9BQU8sMkJBQTJCLENBQUM7SUFDcEMsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLGFBQWEsQ0FBQztJQUN0QixDQUFDOzs7WUF4QkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLCtJQUFxRDtnQkFDckQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDOzs7O1lBWFEsZ0NBQWdDO1lBRlAsaUJBQWlCO1lBQWEsVUFBVTs7Ozs7OztJQWdCN0Qsd0VBQW1GIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVRpdGxlUGFuZWxDb25maWdBcmNoaXZlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUudGl0bGUtcGFuZWwuY29uZmlnLWFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQmFubmVyUGFuZWwgfSBmcm9tICcuLi9zdHJ1Y3R1cmUtYmFubmVyLXBhbmVsJztcbmltcG9ydCB7IFN0cnVjdHVyZUJhbm5lclBhbmVsQ29uZmlnIH0gZnJvbSAnLi4vc3RydWN0dXJlLWJhbm5lci1wYW5lbC5jb25maWcnO1xuaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zdHJ1Y3R1cmUtdGl0bGUtcGFuZWxdJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0cnVjdHVyZS50aXRsZS1wYW5lbC5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVRpdGxlUGFuZWxDb21wb25lbnQgZXh0ZW5kcyBTdHJ1Y3R1cmVCYW5uZXJQYW5lbCB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZTogU3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmUsXG5cdFx0XHRcdGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblx0fVxuXG5cdG9uQmFubmVyUGFuZWxDb25maWcoKTogSGVybWVzT2JzZXJ2YWJsZTxTdHJ1Y3R1cmVCYW5uZXJQYW5lbENvbmZpZz4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVRpdGxlUGFuZWxDb25maWdBcmNoaXZlLm9uKCk7XG5cdH1cblxuXHRnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zdHJ1Y3R1cmUtdGl0bGUtcGFuZWwnO1xuXHR9XG5cblx0Z2V0UGFuZWxUaXRsZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnVGl0bGUgcGFuZWwnO1xuXHR9XG5cbn1cbiJdfQ==