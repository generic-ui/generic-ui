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
        console.log(sorting);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy1zZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3J0aW5nL2ZlYXR1cmUvc2VsZWN0b3Ivc29ydGluZy1zZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQWdCbEYsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGNBQWM7Ozs7O0lBWTNELFlBQVksUUFBMkIsRUFDcEMsVUFBc0I7UUFDeEIsS0FBSyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztRQVo3QixtQkFBYyxHQUFHO1lBQ2hCLFdBQVc7WUFDWCxXQUFXO1lBQ1gsb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQixNQUFNO1NBQ04sQ0FBQztRQUVGLG9CQUFlLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUt6QyxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sc0JBQXNCLENBQUM7SUFDL0IsQ0FBQzs7O1lBcENELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxRQUFRLEVBQUU7Ozs7Ozs7O0VBUVQ7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDL0M7Ozs7WUFqQmlDLGlCQUFpQjtZQUFhLFVBQVU7Ozs7SUFvQnpFLGtEQU1FOztJQUVGLG1EQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXNvcnRpbmctc2VsZWN0b3JdJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxndWktc2VsZWN0IChvcHRpb25DaGFuZ2VkKT1cImNoYW5nZVNvcnRpbmcoJGV2ZW50KVwiXG5cdFx0XHRcdFx0W29wdGlvbnNdPVwic29ydGluZ09wdGlvbnNcIlxuXHRcdFx0XHRcdFtzZWxlY3RlZF09XCJzZWxlY3RlZFNvcnRpbmdcIlxuXHRcdFx0XHRcdFt3aWR0aF09XCIyMDBcIj5cblx0XHQ8L2d1aS1zZWxlY3Q+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU29ydGluZ1NlbGVjdG9yQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdHNvcnRpbmdPcHRpb25zID0gW1xuXHRcdCdOYW1lOiBBLVonLFxuXHRcdCdOYW1lOiBaLUEnLFxuXHRcdCdQcmljZTogTG93IHRvIEhpZ2gnLFxuXHRcdCdQcmljZTogSGlnaCB0byBMb3cnLFxuXHRcdCdOb25lJ1xuXHRdO1xuXG5cdHNlbGVjdGVkU29ydGluZyA9IHRoaXMuc29ydGluZ09wdGlvbnNbMF07XG5cblx0Y29uc3RydWN0b3IoZGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoZGV0ZWN0b3IsIGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0Y2hhbmdlU29ydGluZyhzb3J0aW5nOiBzdHJpbmcpIHtcblx0XHRjb25zb2xlLmxvZyhzb3J0aW5nKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zb3J0aW5nLXNlbGVjdG9yJztcblx0fVxufVxuIl19