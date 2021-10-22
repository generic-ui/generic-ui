/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../../common/cdk/component/pure-component';
export class StructureColumnMenuArrowIconComponent extends PureComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super(elementRef);
        this.rotateDeg = 90;
    }
    /**
     * @protected
     * @return {?}
     */
    getSelectorName() {
        return 'gui-structure-column-menu-arrow-icon';
    }
}
StructureColumnMenuArrowIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-structure-column-menu-arrow-icon]',
                template: `
		<div [style.transform]="'rotate(' + rotateDeg + 'deg)'"
			 [class.gui-structure-column-menu-sort-icon]="sort">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.04 11.72">
				<line class="cls-1" x1="5.02" y1="2.15" x2="5.02" y2="10.97"/>
				<line class="cls-1" x1="5.02" y1="0.75" x2="9.29" y2="5.02"/>
				<line class="cls-1" x1="5.02" y1="0.75" x2="0.75" y2="5.02"/>
			</svg>
		</div>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureColumnMenuArrowIconComponent.ctorParameters = () => [
    { type: ElementRef }
];
StructureColumnMenuArrowIconComponent.propDecorators = {
    rotateDeg: [{ type: Input }],
    sort: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructureColumnMenuArrowIconComponent.prototype.rotateDeg;
    /** @type {?} */
    StructureColumnMenuArrowIconComponent.prototype.sort;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tZW51LWFycm93LWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2hlYWRlci9tZW51L2ljb24vc3RydWN0dXJlLmNvbHVtbi1tZW51LWFycm93LWljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBa0J0RixNQUFNLE9BQU8scUNBQXNDLFNBQVEsYUFBYTs7OztJQVF2RSxZQUFZLFVBQXNCO1FBQ2pDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQU5uQixjQUFTLEdBQVcsRUFBRSxDQUFDO0lBT3ZCLENBQUM7Ozs7O0lBRVMsZUFBZTtRQUN4QixPQUFPLHNDQUFzQyxDQUFDO0lBQy9DLENBQUM7OztZQTdCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDJDQUEyQztnQkFDckQsUUFBUSxFQUFFOzs7Ozs7Ozs7RUFTVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7Ozs7WUFsQjRDLFVBQVU7Ozt3QkFxQnJELEtBQUs7bUJBR0wsS0FBSzs7OztJQUhOLDBEQUN1Qjs7SUFFdkIscURBQ2MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9wdXJlLWNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zdHJ1Y3R1cmUtY29sdW1uLW1lbnUtYXJyb3ctaWNvbl0nLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgW3N0eWxlLnRyYW5zZm9ybV09XCIncm90YXRlKCcgKyByb3RhdGVEZWcgKyAnZGVnKSdcIlxuXHRcdFx0IFtjbGFzcy5ndWktc3RydWN0dXJlLWNvbHVtbi1tZW51LXNvcnQtaWNvbl09XCJzb3J0XCI+XG5cdFx0XHQ8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDEwLjA0IDExLjcyXCI+XG5cdFx0XHRcdDxsaW5lIGNsYXNzPVwiY2xzLTFcIiB4MT1cIjUuMDJcIiB5MT1cIjIuMTVcIiB4Mj1cIjUuMDJcIiB5Mj1cIjEwLjk3XCIvPlxuXHRcdFx0XHQ8bGluZSBjbGFzcz1cImNscy0xXCIgeDE9XCI1LjAyXCIgeTE9XCIwLjc1XCIgeDI9XCI5LjI5XCIgeTI9XCI1LjAyXCIvPlxuXHRcdFx0XHQ8bGluZSBjbGFzcz1cImNscy0xXCIgeDE9XCI1LjAyXCIgeTE9XCIwLjc1XCIgeDI9XCIwLjc1XCIgeTI9XCI1LjAyXCIvPlxuXHRcdFx0PC9zdmc+XG5cdFx0PC9kaXY+XG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbHVtbk1lbnVBcnJvd0ljb25Db21wb25lbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRyb3RhdGVEZWc6IG51bWJlciA9IDkwO1xuXG5cdEBJbnB1dCgpXG5cdHNvcnQ6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS1jb2x1bW4tbWVudS1hcnJvdy1pY29uJztcblx0fVxufVxuIl19