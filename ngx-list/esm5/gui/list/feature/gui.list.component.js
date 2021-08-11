/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { GuiListGateway } from './gui.list.gateway';
import { guiListProviders } from './gui.list.providers';
var GuiListComponent = /** @class */ (function (_super) {
    tslib_1.__extends(GuiListComponent, _super);
    function GuiListComponent(platformId) {
        var _this = _super.call(this) || this;
        _this.platformId = platformId;
        return _this;
    }
    /**
     * @param {?} page
     * @return {?}
     */
    GuiListComponent.prototype.onPageChange = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        this.pageChanged.emit(page);
    };
    /**
     * @param {?} pageSize
     * @return {?}
     */
    GuiListComponent.prototype.onPageSizeChange = /**
     * @param {?} pageSize
     * @return {?}
     */
    function (pageSize) {
        this.pageSizeChanged.emit(pageSize);
    };
    /**
     * @param {?} phrase
     * @return {?}
     */
    GuiListComponent.prototype.onSearchPhraseChange = /**
     * @param {?} phrase
     * @return {?}
     */
    function (phrase) {
        this.searchPhraseChanged.emit(phrase);
    };
    GuiListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-list',
                    template: "<gui-list-view\n\t\t(pageChanged)=\"onPageChange($event)\"\n\t\t(pageSizeChanged)=\"onPageSizeChange($event)\"\n\t\t(searchPhraseChanged)=\"onSearchPhraseChange($event)\"\n\t\t[cardTemplate]=\"listCardTemplate\"\n\t\t[fields]=\"listFields\"\n\t\t[items]=\"source\"\n\t\t[localization]=\"localization\"\n\t\t[modeSelector]=\"listViewModeSelector\"\n\t\t[mode]=\"listViewMode\"\n\t\t[paging]=\"paging\"\n\t\t[searching]=\"searchConfig\"\n\t\t[template]=\"containerTemplate\"\n>\n</gui-list-view>\n",
                    providers: tslib_1.__spread(guiListProviders),
                    host: {
                        '[class.gui-list]': "\"true\""
                    },
                    encapsulation: ViewEncapsulation.None,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    GuiListComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    return GuiListComponent;
}(GuiListGateway));
export { GuiListComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GuiListComponent.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJndWkvbGlzdC9mZWF0dXJlL2d1aS5saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHeEQ7SUFjc0MsNENBQWM7SUFFbkQsMEJBQXlDLFVBQWU7UUFBeEQsWUFDQyxpQkFBTyxTQUNQO1FBRndDLGdCQUFVLEdBQVYsVUFBVSxDQUFLOztJQUV4RCxDQUFDOzs7OztJQUVELHVDQUFZOzs7O0lBQVosVUFBYSxJQUFZO1FBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQsMkNBQWdCOzs7O0lBQWhCLFVBQWlCLFFBQWdCO1FBQ2hDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRUQsK0NBQW9COzs7O0lBQXBCLFVBQXFCLE1BQWM7UUFDbEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDOztnQkE5QkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxVQUFVO29CQUNwQiwyZkFBd0M7b0JBSXhDLFNBQVMsbUJBQ0wsZ0JBQWdCLENBQ25CO29CQUNELElBQUksRUFBRTt3QkFDTCxrQkFBa0IsRUFBRSxVQUFRO3FCQUM1QjtvQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3JDOzs7O2dEQUdhLE1BQU0sU0FBQyxXQUFXOztJQWdCaEMsdUJBQUM7Q0FBQSxBQWhDRCxDQWNzQyxjQUFjLEdBa0JuRDtTQWxCWSxnQkFBZ0I7Ozs7OztJQUVoQixzQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgUExBVEZPUk1fSUQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEd1aUxpc3RHYXRld2F5IH0gZnJvbSAnLi9ndWkubGlzdC5nYXRld2F5JztcbmltcG9ydCB7IGd1aUxpc3RQcm92aWRlcnMgfSBmcm9tICcuL2d1aS5saXN0LnByb3ZpZGVycyc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWxpc3QnLFxuXHR0ZW1wbGF0ZVVybDogJy4vZ3VpLmxpc3QuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9ndWkubGlzdC5uZ3guc2Nzcydcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0Li4uZ3VpTGlzdFByb3ZpZGVyc1xuXHRdLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktbGlzdF0nOiBgXCJ0cnVlXCJgXG5cdH0sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgR3VpTGlzdENvbXBvbmVudCBleHRlbmRzIEd1aUxpc3RHYXRld2F5IHtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRvblBhZ2VDaGFuZ2UocGFnZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdlQ2hhbmdlZC5lbWl0KHBhZ2UpO1xuXHR9XG5cblx0b25QYWdlU2l6ZUNoYW5nZShwYWdlU2l6ZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdlU2l6ZUNoYW5nZWQuZW1pdChwYWdlU2l6ZSk7XG5cdH1cblxuXHRvblNlYXJjaFBocmFzZUNoYW5nZShwaHJhc2U6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuc2VhcmNoUGhyYXNlQ2hhbmdlZC5lbWl0KHBocmFzZSk7XG5cdH1cblxufVxuIl19