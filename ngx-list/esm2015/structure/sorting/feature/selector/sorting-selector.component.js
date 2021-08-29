/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
export class SortingSelectorComponent extends SmartComponent {
    /**
     * @param {?} detector
     * @param {?} elementRef
     */
    constructor(detector, elementRef) {
        super(detector, elementRef);
        this.sortingOptions = [
            'Name: A-Z',
            'Name: Z-A',
            'Price: Low to High',
            'Price: High to Low',
            'None'
        ];
        this.selectedSorting = this.sortingOptions[0];
    }
    /**
     * @param {?} sorting
     * @return {?}
     */
    changeSorting(sorting) {
    }
    /**
     * @protected
     * @return {?}
     */
    getSelectorName() {
        return 'gui-sorting-selector';
    }
}
SortingSelectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-sorting-selector]',
                template: `

		<gui-select (optionChanged)="changeSorting($event)"
					[options]="sortingOptions"
					[selected]="selectedSorting"
					[width]="200">
		</gui-select>

	`,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
SortingSelectorComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
if (false) {
    /** @type {?} */
    SortingSelectorComponent.prototype.sortingOptions;
    /** @type {?} */
    SortingSelectorComponent.prototype.selectedSorting;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy1zZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3J0aW5nL2ZlYXR1cmUvc2VsZWN0b3Ivc29ydGluZy1zZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQWdCbEYsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGNBQWM7Ozs7O0lBWTNELFlBQVksUUFBMkIsRUFDcEMsVUFBc0I7UUFDeEIsS0FBSyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztRQVo3QixtQkFBYyxHQUFHO1lBQ2hCLFdBQVc7WUFDWCxXQUFXO1lBQ1gsb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQixNQUFNO1NBQ04sQ0FBQztRQUVGLG9CQUFlLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUt6QyxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxPQUFlO0lBQzdCLENBQUM7Ozs7O0lBRVMsZUFBZTtRQUN4QixPQUFPLHNCQUFzQixDQUFDO0lBQy9CLENBQUM7OztZQW5DRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsUUFBUSxFQUFFOzs7Ozs7OztFQVFUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQy9DOzs7O1lBakJpQyxpQkFBaUI7WUFBYSxVQUFVOzs7O0lBb0J6RSxrREFNRTs7SUFFRixtREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zb3J0aW5nLXNlbGVjdG9yXScsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8Z3VpLXNlbGVjdCAob3B0aW9uQ2hhbmdlZCk9XCJjaGFuZ2VTb3J0aW5nKCRldmVudClcIlxuXHRcdFx0XHRcdFtvcHRpb25zXT1cInNvcnRpbmdPcHRpb25zXCJcblx0XHRcdFx0XHRbc2VsZWN0ZWRdPVwic2VsZWN0ZWRTb3J0aW5nXCJcblx0XHRcdFx0XHRbd2lkdGhdPVwiMjAwXCI+XG5cdFx0PC9ndWktc2VsZWN0PlxuXG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFNvcnRpbmdTZWxlY3RvckNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IHtcblxuXHRzb3J0aW5nT3B0aW9ucyA9IFtcblx0XHQnTmFtZTogQS1aJyxcblx0XHQnTmFtZTogWi1BJyxcblx0XHQnUHJpY2U6IExvdyB0byBIaWdoJyxcblx0XHQnUHJpY2U6IEhpZ2ggdG8gTG93Jyxcblx0XHQnTm9uZSdcblx0XTtcblxuXHRzZWxlY3RlZFNvcnRpbmcgPSB0aGlzLnNvcnRpbmdPcHRpb25zWzBdO1xuXG5cdGNvbnN0cnVjdG9yKGRldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGRldGVjdG9yLCBlbGVtZW50UmVmKTtcblx0fVxuXG5cdGNoYW5nZVNvcnRpbmcoc29ydGluZzogc3RyaW5nKSB7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc29ydGluZy1zZWxlY3Rvcic7XG5cdH1cbn1cbiJdfQ==