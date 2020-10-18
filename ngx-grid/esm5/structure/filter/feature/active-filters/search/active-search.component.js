/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { SearchWarehouse } from '../../../../search/core/api/search.warehouse';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { StructureId } from '../../../../core/api/structure.id';
import { SearchCommandInvoker } from '../../../../search/core/api/search.command-invoker';
var ActiveSearchComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ActiveSearchComponent, _super);
    function ActiveSearchComponent(changeDetectorRef, structureId, searchCommandDispatcher, searchWarehouse) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureId = structureId;
        _this.searchCommandDispatcher = searchCommandDispatcher;
        _this.searchWarehouse = searchWarehouse;
        return _this;
    }
    /**
     * @return {?}
     */
    ActiveSearchComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.searchWarehouse
            .onPhrase(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} phrase
         * @return {?}
         */
        function (phrase) {
            _this.phrase = phrase;
            _this.changeDetectorRef.detectChanges();
        }));
    };
    /**
     * @return {?}
     */
    ActiveSearchComponent.prototype.clearSearch = /**
     * @return {?}
     */
    function () {
        event.stopPropagation();
        this.searchCommandDispatcher.search('', this.structureId);
    };
    ActiveSearchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-active-search',
                    template: "\n\n\t\t<ng-container *ngIf=\"phrase\">\n\t\t\t<div>\n\t\t\t\tActive search by:\n\t\t\t</div>\n\n\t\t\t<div>\n\t\t\t\t<gui-chip>{{phrase}}</gui-chip>\n\t\t\t</div>\n\n\t\t\t<div>\n\t\t\t\t<button gui-button\n\t\t\t\t\t\t[outline]=\"true\"\n\t\t\t\t\t\t[primary]=\"true\"\n\t\t\t\t\t\t(click)=\"clearSearch()\">\n\t\t\t\t\tClear search\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</ng-container>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    ActiveSearchComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: StructureId },
        { type: SearchCommandInvoker },
        { type: SearchWarehouse }
    ]; };
    return ActiveSearchComponent;
}(SmartComponent));
export { ActiveSearchComponent };
if (false) {
    /** @type {?} */
    ActiveSearchComponent.prototype.phrase;
    /**
     * @type {?}
     * @private
     */
    ActiveSearchComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    ActiveSearchComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    ActiveSearchComponent.prototype.searchCommandDispatcher;
    /**
     * @type {?}
     * @private
     */
    ActiveSearchComponent.prototype.searchWarehouse;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLXNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvZmVhdHVyZS9hY3RpdmUtZmlsdGVycy9zZWFyY2gvYWN0aXZlLXNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDM0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBRTFGO0lBMkIyQyxpREFBYztJQUl4RCwrQkFBNkIsaUJBQW9DLEVBQzdDLFdBQXdCLEVBQ3hCLHVCQUE2QyxFQUM3QyxlQUFnQztRQUhwRCxZQUlDLGtCQUFNLGlCQUFpQixDQUFDLFNBQ3hCO1FBTDRCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0MsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsNkJBQXVCLEdBQXZCLHVCQUF1QixDQUFzQjtRQUM3QyxxQkFBZSxHQUFmLGVBQWUsQ0FBaUI7O0lBRXBELENBQUM7Ozs7SUFFRCx3Q0FBUTs7O0lBQVI7UUFBQSxpQkFVQztRQVRBLElBQUksQ0FBQyxlQUFlO2FBQ2xCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQzFCLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsTUFBYztZQUN6QixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNyQixLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsMkNBQVc7OztJQUFYO1FBQ0MsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzRCxDQUFDOztnQkFyREQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRSw0WUFxQlQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQzs7OztnQkFoQ2lDLGlCQUFpQjtnQkFHMUMsV0FBVztnQkFDWCxvQkFBb0I7Z0JBSHBCLGVBQWU7O0lBNER4Qiw0QkFBQztDQUFBLEFBdkRELENBMkIyQyxjQUFjLEdBNEJ4RDtTQTVCWSxxQkFBcUI7OztJQUVqQyx1Q0FBZTs7Ozs7SUFFSCxrREFBcUQ7Ozs7O0lBQzlELDRDQUF5Qzs7Ozs7SUFDekMsd0RBQThEOzs7OztJQUM5RCxnREFBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlYXJjaFdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlYXJjaC9jb3JlL2FwaS9zZWFyY2gud2FyZWhvdXNlJztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU2VhcmNoQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zZWFyY2gvY29yZS9hcGkvc2VhcmNoLmNvbW1hbmQtaW52b2tlcic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1hY3RpdmUtc2VhcmNoJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJwaHJhc2VcIj5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdEFjdGl2ZSBzZWFyY2ggYnk6XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGd1aS1jaGlwPnt7cGhyYXNlfX08L2d1aS1jaGlwPlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxidXR0b24gZ3VpLWJ1dHRvblxuXHRcdFx0XHRcdFx0W291dGxpbmVdPVwidHJ1ZVwiXG5cdFx0XHRcdFx0XHRbcHJpbWFyeV09XCJ0cnVlXCJcblx0XHRcdFx0XHRcdChjbGljayk9XCJjbGVhclNlYXJjaCgpXCI+XG5cdFx0XHRcdFx0Q2xlYXIgc2VhcmNoXG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9uZy1jb250YWluZXI+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQWN0aXZlU2VhcmNoQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdHBocmFzZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWFyY2hDb21tYW5kRGlzcGF0Y2hlcjogU2VhcmNoQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoV2FyZWhvdXNlOiBTZWFyY2hXYXJlaG91c2UpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZik7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLnNlYXJjaFdhcmVob3VzZVxuXHRcdFx0Lm9uUGhyYXNlKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgocGhyYXNlOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0dGhpcy5waHJhc2UgPSBwaHJhc2U7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRjbGVhclNlYXJjaCgpOiB2b2lkIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR0aGlzLnNlYXJjaENvbW1hbmREaXNwYXRjaGVyLnNlYXJjaCgnJywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19