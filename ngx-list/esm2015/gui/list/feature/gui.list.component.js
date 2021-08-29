/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { GuiListGateway } from './gui.list.gateway';
import { guiListProviders } from './gui.list.providers';
export class GuiListComponent extends GuiListGateway {
    /**
     * @param {?} platformId
     */
    constructor(platformId) {
        super();
        this.platformId = platformId;
    }
    /**
     * @param {?} page
     * @return {?}
     */
    onPageChange(page) {
        this.pageChanged.emit(page);
    }
    /**
     * @param {?} pageSize
     * @return {?}
     */
    onPageSizeChange(pageSize) {
        this.pageSizeChanged.emit(pageSize);
    }
    /**
     * @param {?} phrase
     * @return {?}
     */
    onSearchPhraseChange(phrase) {
        this.searchPhraseChanged.emit(phrase);
    }
}
GuiListComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-list',
                template: "<gui-list-view\n\t(pageChanged)=\"onPageChange($event)\"\n\t(pageSizeChanged)=\"onPageSizeChange($event)\"\n\t(searchPhraseChanged)=\"onSearchPhraseChange($event)\"\n\t[cardTemplate]=\"listCardTemplate\"\n\t[fields]=\"listFields\"\n\t[items]=\"source\"\n\t[localization]=\"localization\"\n\t[modeSelector]=\"listViewModeSelector\"\n\t[mode]=\"listViewMode\"\n\t[paging]=\"paging\"\n\t[searching]=\"searchConfig\"\n\t[template]=\"containerTemplate\"\n>\n</gui-list-view>\n",
                providers: [
                    ...guiListProviders
                ],
                host: {
                    '[class.gui-list]': '"true"'
                },
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            }] }
];
/** @nocollapse */
GuiListComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    GuiListComponent.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJndWkvbGlzdC9mZWF0dXJlL2d1aS5saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQWlCeEQsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGNBQWM7Ozs7SUFFbkQsWUFBeUMsVUFBZTtRQUN2RCxLQUFLLEVBQUUsQ0FBQztRQURnQyxlQUFVLEdBQVYsVUFBVSxDQUFLO0lBRXhELENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLElBQVk7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxRQUFnQjtRQUNoQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELG9CQUFvQixDQUFDLE1BQWM7UUFDbEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7WUE5QkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixtZUFBd0M7Z0JBSXhDLFNBQVMsRUFBRTtvQkFDVixHQUFHLGdCQUFnQjtpQkFDbkI7Z0JBQ0QsSUFBSSxFQUFFO29CQUNMLGtCQUFrQixFQUFFLFFBQVE7aUJBQzVCO2dCQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUNyQzs7Ozs0Q0FHYSxNQUFNLFNBQUMsV0FBVzs7Ozs7OztJQUFuQixzQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgUExBVEZPUk1fSUQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEd1aUxpc3RHYXRld2F5IH0gZnJvbSAnLi9ndWkubGlzdC5nYXRld2F5JztcbmltcG9ydCB7IGd1aUxpc3RQcm92aWRlcnMgfSBmcm9tICcuL2d1aS5saXN0LnByb3ZpZGVycyc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWxpc3QnLFxuXHR0ZW1wbGF0ZVVybDogJy4vZ3VpLmxpc3QuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9ndWkubGlzdC5uZ3guc2Nzcydcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0Li4uZ3VpTGlzdFByb3ZpZGVyc1xuXHRdLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktbGlzdF0nOiAnXCJ0cnVlXCInXG5cdH0sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgR3VpTGlzdENvbXBvbmVudCBleHRlbmRzIEd1aUxpc3RHYXRld2F5IHtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRvblBhZ2VDaGFuZ2UocGFnZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdlQ2hhbmdlZC5lbWl0KHBhZ2UpO1xuXHR9XG5cblx0b25QYWdlU2l6ZUNoYW5nZShwYWdlU2l6ZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdlU2l6ZUNoYW5nZWQuZW1pdChwYWdlU2l6ZSk7XG5cdH1cblxuXHRvblNlYXJjaFBocmFzZUNoYW5nZShwaHJhc2U6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuc2VhcmNoUGhyYXNlQ2hhbmdlZC5lbWl0KHBocmFzZSk7XG5cdH1cblxufVxuIl19