/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
export class SortingSelectorComponent {
    constructor() {
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
}
SortingSelectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-sorting-selector',
                template: `

		<gui-select (optionChanged)="changeSorting($event)"
					[options]="sortingOptions"
					[selected]="selectedSorting"
					[width]="200">
		</gui-select>

	`
            }] }
];
if (false) {
    /** @type {?} */
    SortingSelectorComponent.prototype.sortingOptions;
    /** @type {?} */
    SortingSelectorComponent.prototype.selectedSorting;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy1zZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3J0aW5nL2ZlYXR1cmUvc2VsZWN0b3Ivc29ydGluZy1zZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFjMUMsTUFBTSxPQUFPLHdCQUF3QjtJQVpyQztRQWNDLG1CQUFjLEdBQUc7WUFDaEIsV0FBVztZQUNYLFdBQVc7WUFDWCxvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLE1BQU07U0FDTixDQUFDO1FBRUYsb0JBQWUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBTTFDLENBQUM7Ozs7O0lBSEEsYUFBYSxDQUFDLE9BQWU7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QixDQUFDOzs7WUEzQkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRTs7Ozs7Ozs7RUFRVDthQUNEOzs7O0lBR0Esa0RBTUU7O0lBRUYsbURBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zb3J0aW5nLXNlbGVjdG9yJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxndWktc2VsZWN0IChvcHRpb25DaGFuZ2VkKT1cImNoYW5nZVNvcnRpbmcoJGV2ZW50KVwiXG5cdFx0XHRcdFx0W29wdGlvbnNdPVwic29ydGluZ09wdGlvbnNcIlxuXHRcdFx0XHRcdFtzZWxlY3RlZF09XCJzZWxlY3RlZFNvcnRpbmdcIlxuXHRcdFx0XHRcdFt3aWR0aF09XCIyMDBcIj5cblx0XHQ8L2d1aS1zZWxlY3Q+XG5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBTb3J0aW5nU2VsZWN0b3JDb21wb25lbnQge1xuXG5cdHNvcnRpbmdPcHRpb25zID0gW1xuXHRcdCdOYW1lOiBBLVonLFxuXHRcdCdOYW1lOiBaLUEnLFxuXHRcdCdQcmljZTogTG93IHRvIEhpZ2gnLFxuXHRcdCdQcmljZTogSGlnaCB0byBMb3cnLFxuXHRcdCdOb25lJ1xuXHRdO1xuXG5cdHNlbGVjdGVkU29ydGluZyA9IHRoaXMuc29ydGluZ09wdGlvbnNbMF07XG5cblxuXHRjaGFuZ2VTb3J0aW5nKHNvcnRpbmc6IHN0cmluZykge1xuXHRcdGNvbnNvbGUubG9nKHNvcnRpbmcpO1xuXHR9XG59XG4iXX0=