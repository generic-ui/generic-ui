/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { SearchWarehouse } from '../../../../search/core/api/search.warehouse';
import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
import { StructureId } from '../../../../core/api/structure.id';
import { SearchCommandInvoker } from '../../../../search/core/api/search.command-invoker';
var ActiveSearchComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ActiveSearchComponent, _super);
    function ActiveSearchComponent(changeDetectorRef, elementRef, structureId, searchCommandDispatcher, searchWarehouse) {
        var _this = _super.call(this, changeDetectorRef, elementRef) || this;
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
        this.hermesSubscribe(this.searchWarehouse.onPhrase(this.structureId), (/**
         * @param {?} phrase
         * @return {?}
         */
        function (phrase) {
            _this.phrase = phrase;
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
    /**
     * @protected
     * @return {?}
     */
    ActiveSearchComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-active-search';
    };
    ActiveSearchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[gui-active-search]',
                    template: "<ng-container *ngIf=\"phrase\">\n\t<div>\n\t\tActive search by:\n\t</div>\n\n\t<div>\n\t\t<gui-chip>{{phrase}}</gui-chip>\n\t</div>\n\n\t<div>\n\t\t<button (click)=\"clearSearch()\"\n\t\t\t\t[outline]=\"true\"\n\t\t\t\t[primary]=\"true\"\n\t\t\t\tgui-button>\n\t\t\tClear search\n\t\t</button>\n\t</div>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    ActiveSearchComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLXNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvZmVhdHVyZS9hY3RpdmUtZmlsdGVycy9zZWFyY2gvYWN0aXZlLXNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUUxRjtJQU0yQyxpREFBYztJQUl4RCwrQkFBNkIsaUJBQW9DLEVBQzlELFVBQXNCLEVBQ0wsV0FBd0IsRUFDeEIsdUJBQTZDLEVBQzdDLGVBQWdDO1FBSnBELFlBS0Msa0JBQU0saUJBQWlCLEVBQUUsVUFBVSxDQUFDLFNBQ3BDO1FBTjRCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFFN0MsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsNkJBQXVCLEdBQXZCLHVCQUF1QixDQUFzQjtRQUM3QyxxQkFBZSxHQUFmLGVBQWUsQ0FBaUI7O0lBRXBELENBQUM7Ozs7SUFFRCx3Q0FBUTs7O0lBQVI7UUFBQSxpQkFRQztRQU5BLElBQUksQ0FBQyxlQUFlLENBQ25CLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7Ozs7UUFDL0MsVUFBQyxNQUFjO1lBQ2QsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdEIsQ0FBQyxFQUNELENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsMkNBQVc7OztJQUFYO1FBQ0MsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7OztJQUVTLCtDQUFlOzs7O0lBQXpCO1FBQ0MsT0FBTyxtQkFBbUIsQ0FBQztJQUM1QixDQUFDOztnQkFuQ0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLDhVQUE2QztvQkFDN0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQzs7OztnQkFYaUMsaUJBQWlCO2dCQUFhLFVBQVU7Z0JBR2pFLFdBQVc7Z0JBQ1gsb0JBQW9CO2dCQUhwQixlQUFlOztJQTBDeEIsNEJBQUM7Q0FBQSxBQXJDRCxDQU0yQyxjQUFjLEdBK0J4RDtTQS9CWSxxQkFBcUI7OztJQUVqQyx1Q0FBZTs7Ozs7SUFFSCxrREFBcUQ7Ozs7O0lBRTlELDRDQUF5Qzs7Ozs7SUFDekMsd0RBQThEOzs7OztJQUM5RCxnREFBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlYXJjaFdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlYXJjaC9jb3JlL2FwaS9zZWFyY2gud2FyZWhvdXNlJztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNlYXJjaENvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VhcmNoL2NvcmUvYXBpL3NlYXJjaC5jb21tYW5kLWludm9rZXInO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLWFjdGl2ZS1zZWFyY2hdJyxcblx0dGVtcGxhdGVVcmw6ICcuL2FjdGl2ZS1zZWFyY2guY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBBY3RpdmVTZWFyY2hDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCB7XG5cblx0cGhyYXNlOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlYXJjaENvbW1hbmREaXNwYXRjaGVyOiBTZWFyY2hDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWFyY2hXYXJlaG91c2U6IFNlYXJjaFdhcmVob3VzZSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnNlYXJjaFdhcmVob3VzZS5vblBocmFzZSh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChwaHJhc2U6IHN0cmluZykgPT4ge1xuXHRcdFx0XHR0aGlzLnBocmFzZSA9IHBocmFzZTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0Y2xlYXJTZWFyY2goKTogdm9pZCB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0dGhpcy5zZWFyY2hDb21tYW5kRGlzcGF0Y2hlci5zZWFyY2goJycsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLWFjdGl2ZS1zZWFyY2gnO1xuXHR9XG5cbn1cbiJdfQ==