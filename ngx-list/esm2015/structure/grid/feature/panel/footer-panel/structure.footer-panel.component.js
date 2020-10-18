/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { StructureFooterPanelConfigArchive } from './structure.footer-panel.config-archive';
import { DomSanitizer } from '@angular/platform-browser';
import { Reactive } from '../../../../../common/cdk/reactive';
export class StructureFooterPanelComponent extends Reactive {
    /**
     * @param {?} structureFooterPanelConfigArchive
     * @param {?} sanitizer
     */
    constructor(structureFooterPanelConfigArchive, sanitizer) {
        super();
        this.structureFooterPanelConfigArchive = structureFooterPanelConfigArchive;
        this.sanitizer = sanitizer;
        this.structureFooterPanelConfigArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} title
         * @return {?}
         */
        (title) => {
            this.footerTitle = title.template;
            if (typeof this.footerTitle === 'function') {
                this.footerTitle = this.footerTitle('Title panel');
            }
            this.safeHTML = this.sanitizer.bypassSecurityTrustHtml(this.footerTitle);
        }));
    }
}
StructureFooterPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-footer-panel',
                template: `
		<div [innerHTML]="safeHTML" class="gui-footer-panel"></div>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureFooterPanelComponent.ctorParameters = () => [
    { type: StructureFooterPanelConfigArchive },
    { type: DomSanitizer }
];
if (false) {
    /** @type {?} */
    StructureFooterPanelComponent.prototype.footerTitle;
    /** @type {?} */
    StructureFooterPanelComponent.prototype.safeHTML;
    /**
     * @type {?}
     * @private
     */
    StructureFooterPanelComponent.prototype.structureFooterPanelConfigArchive;
    /**
     * @type {?}
     * @private
     */
    StructureFooterPanelComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZvb3Rlci1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvcGFuZWwvZm9vdGVyLXBhbmVsL3N0cnVjdHVyZS5mb290ZXItcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzVGLE9BQU8sRUFBRSxZQUFZLEVBQVksTUFBTSwyQkFBMkIsQ0FBQztBQUVuRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFVOUQsTUFBTSxPQUFPLDZCQUE4QixTQUFRLFFBQVE7Ozs7O0lBSTFELFlBQW9CLGlDQUFvRSxFQUNwRSxTQUF1QjtRQUMxQyxLQUFLLEVBQUUsQ0FBQztRQUZXLHNDQUFpQyxHQUFqQyxpQ0FBaUMsQ0FBbUM7UUFDcEUsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUUxQyxJQUFJLENBQUMsaUNBQWlDO2FBQ3BDLE9BQU8sRUFBRTthQUNULElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEIsU0FBUzs7OztRQUFDLENBQUMsS0FBd0IsRUFBRSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUVsQyxJQUFJLE9BQU8sSUFBSSxDQUFDLFdBQVcsS0FBSyxVQUFVLEVBQUU7Z0JBQzNDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUNuRDtZQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUUsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUEzQkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFFBQVEsRUFBRTs7RUFFVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7Ozs7WUFaUSxpQ0FBaUM7WUFDakMsWUFBWTs7OztJQWFwQixvREFBK0M7O0lBQy9DLGlEQUFtQjs7Ozs7SUFFUCwwRUFBNEU7Ozs7O0lBQ3JGLGtEQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGb290ZXJQYW5lbENvbmZpZ0FyY2hpdmUgfSBmcm9tICcuL3N0cnVjdHVyZS5mb290ZXItcGFuZWwuY29uZmlnLWFyY2hpdmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRm9vdGVyUGFuZWxDb25maWcgfSBmcm9tICcuL2Zvb3Rlci1wYW5lbC5jb25maWcnO1xuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3JlYWN0aXZlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1mb290ZXItcGFuZWwnLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgW2lubmVySFRNTF09XCJzYWZlSFRNTFwiIGNsYXNzPVwiZ3VpLWZvb3Rlci1wYW5lbFwiPjwvZGl2PlxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVGb290ZXJQYW5lbENvbXBvbmVudCBleHRlbmRzIFJlYWN0aXZlIHtcblx0Zm9vdGVyVGl0bGU6IHN0cmluZyB8ICgodGl0bGU6IGFueSkgPT4gc3RyaW5nKTtcblx0c2FmZUhUTUw6IFNhZmVIdG1sO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlRm9vdGVyUGFuZWxDb25maWdBcmNoaXZlOiBTdHJ1Y3R1cmVGb290ZXJQYW5lbENvbmZpZ0FyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuc3RydWN0dXJlRm9vdGVyUGFuZWxDb25maWdBcmNoaXZlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgodGl0bGU6IEZvb3RlclBhbmVsQ29uZmlnKSA9PiB7XG5cdFx0XHRcdHRoaXMuZm9vdGVyVGl0bGUgPSB0aXRsZS50ZW1wbGF0ZTtcblxuXHRcdFx0XHRpZiAodHlwZW9mIHRoaXMuZm9vdGVyVGl0bGUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHR0aGlzLmZvb3RlclRpdGxlID0gdGhpcy5mb290ZXJUaXRsZSgnVGl0bGUgcGFuZWwnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc2FmZUhUTUwgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh0aGlzLmZvb3RlclRpdGxlKTtcblx0XHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==