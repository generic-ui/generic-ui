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
                selector: 'gui-structure-column-menu-arrow-icon',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tZW51LWFycm93LWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2hlYWRlci9tZW51L2ljb24vc3RydWN0dXJlLmNvbHVtbi1tZW51LWFycm93LWljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBa0J0RixNQUFNLE9BQU8scUNBQXNDLFNBQVEsYUFBYTs7OztJQVF2RSxZQUFZLFVBQXNCO1FBQ2pDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQU5uQixjQUFTLEdBQVcsRUFBRSxDQUFDO0lBT3ZCLENBQUM7Ozs7O0lBRVMsZUFBZTtRQUN4QixPQUFPLHNDQUFzQyxDQUFDO0lBQy9DLENBQUM7OztZQTdCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHNDQUFzQztnQkFDaEQsUUFBUSxFQUFFOzs7Ozs7Ozs7RUFTVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7Ozs7WUFsQjRDLFVBQVU7Ozt3QkFxQnJELEtBQUs7bUJBR0wsS0FBSzs7OztJQUhOLDBEQUN1Qjs7SUFFdkIscURBQ2MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9wdXJlLWNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1jb2x1bW4tbWVudS1hcnJvdy1pY29uJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2IFtzdHlsZS50cmFuc2Zvcm1dPVwiJ3JvdGF0ZSgnICsgcm90YXRlRGVnICsgJ2RlZyknXCJcblx0XHRcdCBbY2xhc3MuZ3VpLXN0cnVjdHVyZS1jb2x1bW4tbWVudS1zb3J0LWljb25dPVwic29ydFwiPlxuXHRcdFx0PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxMC4wNCAxMS43MlwiPlxuXHRcdFx0XHQ8bGluZSBjbGFzcz1cImNscy0xXCIgeDE9XCI1LjAyXCIgeTE9XCIyLjE1XCIgeDI9XCI1LjAyXCIgeTI9XCIxMC45N1wiLz5cblx0XHRcdFx0PGxpbmUgY2xhc3M9XCJjbHMtMVwiIHgxPVwiNS4wMlwiIHkxPVwiMC43NVwiIHgyPVwiOS4yOVwiIHkyPVwiNS4wMlwiLz5cblx0XHRcdFx0PGxpbmUgY2xhc3M9XCJjbHMtMVwiIHgxPVwiNS4wMlwiIHkxPVwiMC43NVwiIHgyPVwiMC43NVwiIHkyPVwiNS4wMlwiLz5cblx0XHRcdDwvc3ZnPlxuXHRcdDwvZGl2PlxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5NZW51QXJyb3dJY29uQ29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0cm90YXRlRGVnOiBudW1iZXIgPSA5MDtcblxuXHRASW5wdXQoKVxuXHRzb3J0OiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zdHJ1Y3R1cmUtY29sdW1uLW1lbnUtYXJyb3ctaWNvbic7XG5cdH1cbn1cbiJdfQ==