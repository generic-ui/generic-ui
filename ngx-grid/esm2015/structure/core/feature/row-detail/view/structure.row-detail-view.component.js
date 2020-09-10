/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { structureRowDetailViewItem, structureRowDetailViewTemplate } from './structure.row-detail-view.tokens';
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
        this.safeHTML = this.sanitizer.bypassSecurityTrustHtml(this.template(this.item));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.selectedRowValues = this.item;
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
    { type: undefined, decorators: [{ type: Inject, args: [structureRowDetailViewItem,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [structureRowDetailViewTemplate,] }] },
    { type: DomSanitizer }
];
if (false) {
    /** @type {?} */
    StructureRowDetailViewComponent.prototype.selectedRowValues;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJvdy1kZXRhaWwtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9jb3JlL2ZlYXR1cmUvcm93LWRldGFpbC92aWV3L3N0cnVjdHVyZS5yb3ctZGV0YWlsLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFFbkUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLDhCQUE4QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFZaEgsTUFBTSxPQUFPLCtCQUErQjs7Ozs7O0lBTTNDLFlBQXdELElBQVMsRUFDZCxRQUFhLEVBQzVDLFNBQXVCO1FBRmEsU0FBSSxHQUFKLElBQUksQ0FBSztRQUNkLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDNUMsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUUxQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsRixDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3BDLENBQUM7OztZQXhCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFOzs7O0VBSVQ7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDOzs7OzRDQU9hLE1BQU0sU0FBQywwQkFBMEI7NENBQzFDLE1BQU0sU0FBQyw4QkFBOEI7WUFyQmpDLFlBQVk7Ozs7SUFnQnBCLDREQUE4Qjs7SUFFOUIsbURBQW1COzs7OztJQUVQLCtDQUFxRDs7Ozs7SUFDOUQsbURBQTZEOzs7OztJQUM3RCxvREFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbmplY3QsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgc3RydWN0dXJlUm93RGV0YWlsVmlld0l0ZW0sIHN0cnVjdHVyZVJvd0RldGFpbFZpZXdUZW1wbGF0ZSB9IGZyb20gJy4vc3RydWN0dXJlLnJvdy1kZXRhaWwtdmlldy50b2tlbnMnO1xuXG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZTogYFxuXHRcdFxuXHRcdDxkaXYgW2lubmVySFRNTF09XCJzYWZlSFRNTFwiPjwvZGl2PlxuXHRcdFxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRzZWxlY3RlZFJvd1ZhbHVlczogQXJyYXk8YW55PjtcblxuXHRzYWZlSFRNTDogU2FmZUh0bWw7XG5cblx0Y29uc3RydWN0b3IoQEluamVjdChzdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3SXRlbSkgcHJpdmF0ZSBpdGVtOiBhbnksXG5cdFx0XHRcdEBJbmplY3Qoc3RydWN0dXJlUm93RGV0YWlsVmlld1RlbXBsYXRlKSBwcml2YXRlIHRlbXBsYXRlOiBhbnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcblxuXHRcdHRoaXMuc2FmZUhUTUwgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh0aGlzLnRlbXBsYXRlKHRoaXMuaXRlbSkpO1xuXHR9XG5cblx0bmdPbkluaXQoKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RlZFJvd1ZhbHVlcyA9IHRoaXMuaXRlbTtcblx0fVxuXG59XG4iXX0=