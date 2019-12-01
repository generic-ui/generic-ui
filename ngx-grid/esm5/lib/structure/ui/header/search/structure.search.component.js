/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
var StructureSearchComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureSearchComponent, _super);
    function StructureSearchComponent(formBuilder) {
        var _this = _super.call(this) || this;
        _this.formBuilder = formBuilder;
        _this.searchForm = _this.formBuilder.group({
            'searchPhrase': ''
        });
        return _this;
    }
    /**
     * @return {?}
     */
    StructureSearchComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.observeChanges();
    };
    /**
     * @private
     * @return {?}
     */
    StructureSearchComponent.prototype.observeChanges = /**
     * @private
     * @return {?}
     */
    function () {
        this.searchForm.controls['searchPhrase'].valueChanges
            .pipe(
        // debounceTime(0),
        this.takeUntil())
            .subscribe((/**
         * @param {?} name
         * @return {?}
         */
        function (name) { return console.log(name); }));
    };
    StructureSearchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-search-bar',
                    template: "\n\t\t<form [formGroup]=\"searchForm\">\n\t\t\t<div class=\"gui-search-icon\"></div>\n\t\t\t<input formControlName=\"searchPhrase\" [placeholder]=\"'Search ...'\">\n\t\t</form>\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureSearchComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    return StructureSearchComponent;
}(SmartComponent));
export { StructureSearchComponent };
if (false) {
    /** @type {?} */
    StructureSearchComponent.prototype.searchForm;
    /**
     * @type {?}
     * @private
     */
    StructureSearchComponent.prototype.formBuilder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvaGVhZGVyL3NlYXJjaC9zdHJ1Y3R1cmUuc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBRXhELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUczRTtJQVc4QyxvREFBYztJQUkzRCxrQ0FBb0IsV0FBd0I7UUFBNUMsWUFDQyxpQkFBTyxTQUlQO1FBTG1CLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRTNDLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDeEMsY0FBYyxFQUFFLEVBQUU7U0FDbEIsQ0FBQyxDQUFDOztJQUNKLENBQUM7Ozs7SUFFRCwyQ0FBUTs7O0lBQVI7UUFDQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFTyxpREFBYzs7OztJQUF0QjtRQUNDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVk7YUFDMUMsSUFBSTtRQUNKLG1CQUFtQjtRQUNuQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBakIsQ0FBaUIsRUFBQyxDQUFDO0lBQ25ELENBQUM7O2dCQWpDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsUUFBUSxFQUFFLHNMQUtUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7Ozs7Z0JBZlEsV0FBVzs7SUF1Q3BCLCtCQUFDO0NBQUEsQUFsQ0QsQ0FXOEMsY0FBYyxHQXVCM0Q7U0F2Qlksd0JBQXdCOzs7SUFFcEMsOENBQXNCOzs7OztJQUVWLCtDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtc2VhcmNoLWJhcicsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGZvcm0gW2Zvcm1Hcm91cF09XCJzZWFyY2hGb3JtXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLXNlYXJjaC1pY29uXCI+PC9kaXY+XG5cdFx0XHQ8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwic2VhcmNoUGhyYXNlXCIgW3BsYWNlaG9sZGVyXT1cIidTZWFyY2ggLi4uJ1wiPlxuXHRcdDwvZm9ybT5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU2VhcmNoQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHNlYXJjaEZvcm06IEZvcm1Hcm91cDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5zZWFyY2hGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG5cdFx0XHQnc2VhcmNoUGhyYXNlJzogJydcblx0XHR9KTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMub2JzZXJ2ZUNoYW5nZXMoKTtcblx0fVxuXG5cdHByaXZhdGUgb2JzZXJ2ZUNoYW5nZXMoKTogdm9pZCB7XG5cdFx0dGhpcy5zZWFyY2hGb3JtLmNvbnRyb2xzWydzZWFyY2hQaHJhc2UnXS52YWx1ZUNoYW5nZXNcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBkZWJvdW5jZVRpbWUoMCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5zdWJzY3JpYmUoKG5hbWUpID0+IGNvbnNvbGUubG9nKG5hbWUpKTtcblx0fVxufVxuIl19