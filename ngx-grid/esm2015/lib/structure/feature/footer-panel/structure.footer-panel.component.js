/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { StructureFooterPanelConfigArchive } from './structure.footer-panel.config-archive';
import { DomSanitizer } from '@angular/platform-browser';
import { Reactive } from '../../../../common/cdk/reactive';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZvb3Rlci1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS9mb290ZXItcGFuZWwvc3RydWN0dXJlLmZvb3Rlci1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEYsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDNUYsT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQVczRCxNQUFNLE9BQU8sNkJBQThCLFNBQVEsUUFBUTs7Ozs7SUFJMUQsWUFBb0IsaUNBQW9FLEVBQ3BFLFNBQXVCO1FBQzFDLEtBQUssRUFBRSxDQUFDO1FBRlcsc0NBQWlDLEdBQWpDLGlDQUFpQyxDQUFtQztRQUNwRSxjQUFTLEdBQVQsU0FBUyxDQUFjO1FBRTFDLElBQUksQ0FBQyxpQ0FBaUM7YUFDcEMsT0FBTyxFQUFFO2FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN0QixTQUFTOzs7O1FBQUMsQ0FBQyxLQUF3QixFQUFFLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1lBRWxDLElBQUksT0FBTyxJQUFJLENBQUMsV0FBVyxLQUFLLFVBQVUsRUFBRTtnQkFDM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ25EO1lBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxRSxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQTNCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsUUFBUSxFQUFFOztFQUVUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7OztZQVpRLGlDQUFpQztZQUNqQyxZQUFZOzs7O0lBYXBCLG9EQUErQzs7SUFDL0MsaURBQW1COzs7OztJQUVQLDBFQUE0RTs7Ozs7SUFDckYsa0RBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4vc3RydWN0dXJlLmZvb3Rlci1wYW5lbC5jb25maWctYXJjaGl2ZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvcmVhY3RpdmUnO1xuaW1wb3J0IHsgRm9vdGVyUGFuZWxDb25maWcgfSBmcm9tICcuL2Zvb3Rlci1wYW5lbC5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLWZvb3Rlci1wYW5lbCcsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiBbaW5uZXJIVE1MXT1cInNhZmVIVE1MXCIgY2xhc3M9XCJndWktZm9vdGVyLXBhbmVsXCI+PC9kaXY+XG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUZvb3RlclBhbmVsQ29tcG9uZW50IGV4dGVuZHMgUmVhY3RpdmUge1xuXHRmb290ZXJUaXRsZTogc3RyaW5nIHwgKCh0aXRsZTogYW55KSA9PiBzdHJpbmcpO1xuXHRzYWZlSFRNTDogU2FmZUh0bWw7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVGb290ZXJQYW5lbENvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVGb290ZXJQYW5lbENvbmZpZ0FyY2hpdmVcblx0XHRcdC5vblZhbHVlKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKCh0aXRsZTogRm9vdGVyUGFuZWxDb25maWcpID0+IHtcblx0XHRcdFx0dGhpcy5mb290ZXJUaXRsZSA9IHRpdGxlLnRlbXBsYXRlO1xuXG5cdFx0XHRcdGlmICh0eXBlb2YgdGhpcy5mb290ZXJUaXRsZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdHRoaXMuZm9vdGVyVGl0bGUgPSB0aGlzLmZvb3RlclRpdGxlKCdUaXRsZSBwYW5lbCcpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zYWZlSFRNTCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRoaXMuZm9vdGVyVGl0bGUpO1xuXHRcdFx0fSk7XG5cdH1cblxufVxuIl19