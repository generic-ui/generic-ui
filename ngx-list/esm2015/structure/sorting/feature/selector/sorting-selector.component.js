/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
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
                template: "<gui-select (optionChanged)=\"changeSorting($event)\"\n\t\t\t[options]=\"sortingOptions\"\n\t\t\t[selected]=\"selectedSorting\"\n\t\t\t[width]=\"200\">\n</gui-select>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy1zZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3J0aW5nL2ZlYXR1cmUvc2VsZWN0b3Ivc29ydGluZy1zZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQVNsRixNQUFNLE9BQU8sd0JBQXlCLFNBQVEsY0FBYzs7Ozs7SUFZM0QsWUFBWSxRQUEyQixFQUNwQyxVQUFzQjtRQUN4QixLQUFLLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBWjdCLG1CQUFjLEdBQUc7WUFDaEIsV0FBVztZQUNYLFdBQVc7WUFDWCxvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLE1BQU07U0FDTixDQUFDO1FBRUYsb0JBQWUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBS3pDLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLE9BQWU7SUFDN0IsQ0FBQzs7Ozs7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sc0JBQXNCLENBQUM7SUFDL0IsQ0FBQzs7O1lBNUJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxvTEFBZ0Q7Z0JBQ2hELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7OztZQVZpQyxpQkFBaUI7WUFBYSxVQUFVOzs7O0lBYXpFLGtEQU1FOztJQUVGLG1EQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zb3J0aW5nLXNlbGVjdG9yXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zb3J0aW5nLXNlbGVjdG9yLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU29ydGluZ1NlbGVjdG9yQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdHNvcnRpbmdPcHRpb25zID0gW1xuXHRcdCdOYW1lOiBBLVonLFxuXHRcdCdOYW1lOiBaLUEnLFxuXHRcdCdQcmljZTogTG93IHRvIEhpZ2gnLFxuXHRcdCdQcmljZTogSGlnaCB0byBMb3cnLFxuXHRcdCdOb25lJ1xuXHRdO1xuXG5cdHNlbGVjdGVkU29ydGluZyA9IHRoaXMuc29ydGluZ09wdGlvbnNbMF07XG5cblx0Y29uc3RydWN0b3IoZGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoZGV0ZWN0b3IsIGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0Y2hhbmdlU29ydGluZyhzb3J0aW5nOiBzdHJpbmcpIHtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zb3J0aW5nLXNlbGVjdG9yJztcblx0fVxufVxuIl19