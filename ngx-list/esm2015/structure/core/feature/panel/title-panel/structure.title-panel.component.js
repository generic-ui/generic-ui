/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { StructureTitlePanelConfigArchive } from './structure.title-panel.config-archive';
import { DomSanitizer } from '@angular/platform-browser';
import { Reactive } from '../../../../../common/cdk/reactive';
export class StructureTitlePanelComponent extends Reactive {
    /**
     * @param {?} structureTitlePanelConfigArchive
     * @param {?} sanitizer
     */
    constructor(structureTitlePanelConfigArchive, sanitizer) {
        super();
        this.structureTitlePanelConfigArchive = structureTitlePanelConfigArchive;
        this.sanitizer = sanitizer;
        this.structureTitlePanelConfigArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} title
         * @return {?}
         */
        (title) => {
            this.title = title.template;
            if (typeof this.title === 'function') {
                this.title = this.title('Title panel');
            }
            this.safeHTML = this.sanitizer.bypassSecurityTrustHtml(this.title);
        }));
    }
}
StructureTitlePanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-title-panel',
                template: `
		<div [innerHTML]="safeHTML" class="gui-title-panel"></div>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureTitlePanelComponent.ctorParameters = () => [
    { type: StructureTitlePanelConfigArchive },
    { type: DomSanitizer }
];
if (false) {
    /** @type {?} */
    StructureTitlePanelComponent.prototype.title;
    /** @type {?} */
    StructureTitlePanelComponent.prototype.safeHTML;
    /**
     * @type {?}
     * @private
     */
    StructureTitlePanelComponent.prototype.structureTitlePanelConfigArchive;
    /**
     * @type {?}
     * @private
     */
    StructureTitlePanelComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnRpdGxlLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvZmVhdHVyZS9wYW5lbC90aXRsZS1wYW5lbC9zdHJ1Y3R1cmUudGl0bGUtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFGLE9BQU8sRUFBRSxZQUFZLEVBQVksTUFBTSwyQkFBMkIsQ0FBQztBQUVuRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFVOUQsTUFBTSxPQUFPLDRCQUE2QixTQUFRLFFBQVE7Ozs7O0lBSXpELFlBQW9CLGdDQUFrRSxFQUNsRSxTQUF1QjtRQUMxQyxLQUFLLEVBQUUsQ0FBQztRQUZXLHFDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBa0M7UUFDbEUsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUUxQyxJQUFJLENBQUMsZ0NBQWdDO2FBQ25DLE9BQU8sRUFBRTthQUNULElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEIsU0FBUzs7OztRQUFDLENBQUMsS0FBdUIsRUFBRSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUU1QixJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxVQUFVLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUN2QztZQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEUsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUEzQkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFFBQVEsRUFBRTs7RUFFVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7Ozs7WUFaUSxnQ0FBZ0M7WUFDaEMsWUFBWTs7OztJQWFwQiw2Q0FBeUM7O0lBQ3pDLGdEQUFtQjs7Ozs7SUFFUCx3RUFBMEU7Ozs7O0lBQ25GLGlEQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4vc3RydWN0dXJlLnRpdGxlLXBhbmVsLmNvbmZpZy1hcmNoaXZlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFRpdGxlUGFuZWxDb25maWcgfSBmcm9tICcuL3RpdGxlLXBhbmVsLmNvbmZpZyc7XG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvcmVhY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLXRpdGxlLXBhbmVsJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2IFtpbm5lckhUTUxdPVwic2FmZUhUTUxcIiBjbGFzcz1cImd1aS10aXRsZS1wYW5lbFwiPjwvZGl2PlxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVUaXRsZVBhbmVsQ29tcG9uZW50IGV4dGVuZHMgUmVhY3RpdmUge1xuXHR0aXRsZTogc3RyaW5nIHwgKCh0aXRsZTogYW55KSA9PiBzdHJpbmcpO1xuXHRzYWZlSFRNTDogU2FmZUh0bWw7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZTogU3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuc3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmVcblx0XHRcdC5vblZhbHVlKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKCh0aXRsZTogVGl0bGVQYW5lbENvbmZpZykgPT4ge1xuXHRcdFx0XHR0aGlzLnRpdGxlID0gdGl0bGUudGVtcGxhdGU7XG5cblx0XHRcdFx0aWYgKHR5cGVvZiB0aGlzLnRpdGxlID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0dGhpcy50aXRsZSA9IHRoaXMudGl0bGUoJ1RpdGxlIHBhbmVsJyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnNhZmVIVE1MID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGhpcy50aXRsZSk7XG5cdFx0XHR9KTtcblx0fVxuXG59XG4iXX0=