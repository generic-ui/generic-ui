/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export class StructureDetailViewComponent {
    /**
     * @param {?} item
     * @param {?} temp
     * @param {?} sanitizer
     */
    constructor(item, temp, sanitizer) {
        this.item = item;
        this.temp = temp;
        this.sanitizer = sanitizer;
        this.safeHTML = this.sanitizer.bypassSecurityTrustHtml(this.temp(this.item));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.selectedRowValues = this.item;
    }
}
StructureDetailViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-detail-view',
                template: `

		<div [innerHTML]="safeHTML"></div>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureDetailViewComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['item',] }] },
    { type: undefined, decorators: [{ type: Inject, args: ['template',] }] },
    { type: DomSanitizer }
];
if (false) {
    /** @type {?} */
    StructureDetailViewComponent.prototype.selectedRowValues;
    /** @type {?} */
    StructureDetailViewComponent.prototype.safeHTML;
    /**
     * @type {?}
     * @private
     */
    StructureDetailViewComponent.prototype.item;
    /**
     * @type {?}
     * @private
     */
    StructureDetailViewComponent.prototype.temp;
    /**
     * @type {?}
     * @private
     */
    StructureDetailViewComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmRldGFpbC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL3Jvdy1kZXRhaWwvZGV0YWlsLXZpZXcvc3RydWN0dXJlLmRldGFpbC12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQVUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFZLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBV25FLE1BQU0sT0FBTyw0QkFBNEI7Ozs7OztJQU14QyxZQUFvQyxJQUFTLEVBQ2QsSUFBUyxFQUNwQixTQUF1QjtRQUZQLFNBQUksR0FBSixJQUFJLENBQUs7UUFDZCxTQUFJLEdBQUosSUFBSSxDQUFLO1FBQ3BCLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFFMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNwQyxDQUFDOzs7WUF4QkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFFBQVEsRUFBRTs7O0VBR1Q7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDOzs7OzRDQU9hLE1BQU0sU0FBQyxNQUFNOzRDQUN0QixNQUFNLFNBQUMsVUFBVTtZQWxCSCxZQUFZOzs7O0lBYTlCLHlEQUE4Qjs7SUFFOUIsZ0RBQW1COzs7OztJQUVQLDRDQUFpQzs7Ozs7SUFDMUMsNENBQXFDOzs7OztJQUNyQyxpREFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNhZmVIdG1sLCBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1kZXRhaWwtdmlldycsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8ZGl2IFtpbm5lckhUTUxdPVwic2FmZUhUTUxcIj48L2Rpdj5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRGV0YWlsVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0c2VsZWN0ZWRSb3dWYWx1ZXM6IEFycmF5PGFueT47XG5cblx0c2FmZUhUTUw6IFNhZmVIdG1sO1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoJ2l0ZW0nKSBwcml2YXRlIGl0ZW06IGFueSxcblx0XHRcdFx0QEluamVjdCgndGVtcGxhdGUnKSBwcml2YXRlIHRlbXA6IGFueSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xuXG5cdFx0dGhpcy5zYWZlSFRNTCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRoaXMudGVtcCh0aGlzLml0ZW0pKTtcblx0fVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWRSb3dWYWx1ZXMgPSB0aGlzLml0ZW07XG5cdH1cblxufVxuIl19