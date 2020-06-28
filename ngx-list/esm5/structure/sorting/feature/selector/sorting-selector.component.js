/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
var SortingSelectorComponent = /** @class */ (function () {
    function SortingSelectorComponent() {
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
    SortingSelectorComponent.prototype.changeSorting = /**
     * @param {?} sorting
     * @return {?}
     */
    function (sorting) {
        console.log(sorting);
    };
    SortingSelectorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-sorting-selector',
                    template: "\n\n\t\t<gui-select (optionChanged)=\"changeSorting($event)\"\n\t\t\t\t\t[options]=\"sortingOptions\"\n\t\t\t\t\t[selected]=\"selectedSorting\"\n\t\t\t\t\t[width]=\"200\">\n\t\t</gui-select>\n\n\t"
                }] }
    ];
    return SortingSelectorComponent;
}());
export { SortingSelectorComponent };
if (false) {
    /** @type {?} */
    SortingSelectorComponent.prototype.sortingOptions;
    /** @type {?} */
    SortingSelectorComponent.prototype.selectedSorting;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy1zZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3J0aW5nL2ZlYXR1cmUvc2VsZWN0b3Ivc29ydGluZy1zZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUM7SUFBQTtRQWNDLG1CQUFjLEdBQUc7WUFDaEIsV0FBVztZQUNYLFdBQVc7WUFDWCxvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLE1BQU07U0FDTixDQUFDO1FBRUYsb0JBQWUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBTTFDLENBQUM7Ozs7O0lBSEEsZ0RBQWE7Ozs7SUFBYixVQUFjLE9BQWU7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QixDQUFDOztnQkEzQkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFFBQVEsRUFBRSxzTUFRVDtpQkFDRDs7SUFpQkQsK0JBQUM7Q0FBQSxBQTVCRCxJQTRCQztTQWhCWSx3QkFBd0I7OztJQUVwQyxrREFNRTs7SUFFRixtREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXNvcnRpbmctc2VsZWN0b3InLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PGd1aS1zZWxlY3QgKG9wdGlvbkNoYW5nZWQpPVwiY2hhbmdlU29ydGluZygkZXZlbnQpXCJcblx0XHRcdFx0XHRbb3B0aW9uc109XCJzb3J0aW5nT3B0aW9uc1wiXG5cdFx0XHRcdFx0W3NlbGVjdGVkXT1cInNlbGVjdGVkU29ydGluZ1wiXG5cdFx0XHRcdFx0W3dpZHRoXT1cIjIwMFwiPlxuXHRcdDwvZ3VpLXNlbGVjdD5cblxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIFNvcnRpbmdTZWxlY3RvckNvbXBvbmVudCB7XG5cblx0c29ydGluZ09wdGlvbnMgPSBbXG5cdFx0J05hbWU6IEEtWicsXG5cdFx0J05hbWU6IFotQScsXG5cdFx0J1ByaWNlOiBMb3cgdG8gSGlnaCcsXG5cdFx0J1ByaWNlOiBIaWdoIHRvIExvdycsXG5cdFx0J05vbmUnXG5cdF07XG5cblx0c2VsZWN0ZWRTb3J0aW5nID0gdGhpcy5zb3J0aW5nT3B0aW9uc1swXTtcblxuXG5cdGNoYW5nZVNvcnRpbmcoc29ydGluZzogc3RyaW5nKSB7XG5cdFx0Y29uc29sZS5sb2coc29ydGluZyk7XG5cdH1cbn1cbiJdfQ==