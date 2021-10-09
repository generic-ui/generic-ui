/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
import { CellTemplateWithContext } from '../../../../../composition/core/domain-read/definition/cell-template-with-context';
import { ChangedValueEmitter } from '../../../../../composition/core/domain-read/edit/changed-value.emitter';
import { FilterCommandInvoker } from '../../../../filter/core/api/filter.command-invoker';
import { StructureId } from '../../../../core/api/structure.id';
var StructureHeaderFilterComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureHeaderFilterComponent, _super);
    function StructureHeaderFilterComponent(changeDetectorRef, elementRef, structureFilterCommandService, structureId) {
        var _this = _super.call(this, changeDetectorRef, elementRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureFilterCommandService = structureFilterCommandService;
        _this.structureId = structureId;
        _this.sub = new ChangedValueEmitter();
        _this.editContext = {
            changes: _this.sub
        };
        return _this;
    }
    /**
     * @return {?}
     */
    StructureHeaderFilterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.sub
            .on()
            .subscribe((/**
         * @param {?} phrase
         * @return {?}
         */
        function (phrase) { return _this.filter(phrase); }));
    };
    /**
     * @param {?} phrase
     * @return {?}
     */
    StructureHeaderFilterComponent.prototype.filter = /**
     * @param {?} phrase
     * @return {?}
     */
    function (phrase) {
        // this.structureFilterCommandService.addFilter(this.column.getFieldId(), '1', phrase, this.structureId);
    };
    /**
     * @protected
     * @return {?}
     */
    StructureHeaderFilterComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-structure-header-filter';
    };
    StructureHeaderFilterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-header-filter',
                    template: "\n\n\t\t<!--\t\t<ng-container-->\n\t\t<!--\t\t\t\t*ngTemplateOutlet=\"column.editTemplate; context: editContext\">-->\n\t\t<!--\t\t</ng-container>-->\n\n\t\t<button gui-button [primary]=\"true\">Add Filter</button>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureHeaderFilterComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: FilterCommandInvoker },
        { type: StructureId }
    ]; };
    StructureHeaderFilterComponent.propDecorators = {
        column: [{ type: Input }]
    };
    return StructureHeaderFilterComponent;
}(SmartComponent));
export { StructureHeaderFilterComponent };
if (false) {
    /** @type {?} */
    StructureHeaderFilterComponent.prototype.column;
    /** @type {?} */
    StructureHeaderFilterComponent.prototype.sub;
    /** @type {?} */
    StructureHeaderFilterComponent.prototype.editContext;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderFilterComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderFilterComponent.prototype.structureFilterCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderFilterComponent.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmhlYWRlci1maWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2hlYWRlci9maWx0ZXJzL3N0cnVjdHVyZS5oZWFkZXItZmlsdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwSSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scURBQXFELENBQUM7QUFFckYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbUZBQW1GLENBQUM7QUFDNUgsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDN0csT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDMUYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBR2hFO0lBY29ELDBEQUFjO0lBU2pFLHdDQUE2QixpQkFBb0MsRUFDOUQsVUFBc0IsRUFDTCw2QkFBbUQsRUFDbkQsV0FBd0I7UUFINUMsWUFJQyxrQkFBTSxpQkFBaUIsRUFBRSxVQUFVLENBQUMsU0FLcEM7UUFUNEIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUU3QyxtQ0FBNkIsR0FBN0IsNkJBQTZCLENBQXNCO1FBQ25ELGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBUDVDLFNBQUcsR0FBRyxJQUFJLG1CQUFtQixFQUFFLENBQUM7UUFVL0IsS0FBSSxDQUFDLFdBQVcsR0FBRztZQUNsQixPQUFPLEVBQUUsS0FBSSxDQUFDLEdBQUc7U0FDakIsQ0FBQzs7SUFDSCxDQUFDOzs7O0lBRUQsaURBQVE7OztJQUFSO1FBQUEsaUJBSUM7UUFIQSxJQUFJLENBQUMsR0FBRzthQUNOLEVBQUUsRUFBRTthQUNKLFNBQVM7Ozs7UUFBQyxVQUFDLE1BQWMsSUFBSyxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQW5CLENBQW1CLEVBQUMsQ0FBQztJQUN0RCxDQUFDOzs7OztJQUVELCtDQUFNOzs7O0lBQU4sVUFBTyxNQUFjO1FBQ3BCLHlHQUF5RztJQUMxRyxDQUFDOzs7OztJQUVTLHdEQUFlOzs7O0lBQXpCO1FBQ0MsT0FBTyw2QkFBNkIsQ0FBQztJQUN0QyxDQUFDOztnQkE5Q0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSw2QkFBNkI7b0JBQ3ZDLFFBQVEsRUFBRSw4TkFRVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDOzs7O2dCQXZCaUMsaUJBQWlCO2dCQUFhLFVBQVU7Z0JBTWpFLG9CQUFvQjtnQkFDcEIsV0FBVzs7O3lCQW1CbEIsS0FBSzs7SUFnQ1AscUNBQUM7Q0FBQSxBQWhERCxDQWNvRCxjQUFjLEdBa0NqRTtTQWxDWSw4QkFBOEI7OztJQUUxQyxnREFDZ0M7O0lBRWhDLDZDQUFnQzs7SUFFaEMscURBQWlCOzs7OztJQUVMLDJEQUFxRDs7Ozs7SUFFOUQsdUVBQW9FOzs7OztJQUNwRSxxREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBDaGFuZ2VkVmFsdWVFbWl0dGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9lZGl0L2NoYW5nZWQtdmFsdWUuZW1pdHRlcic7XG5pbXBvcnQgeyBGaWx0ZXJDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpbHRlci9jb3JlL2FwaS9maWx0ZXIuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLWhlYWRlci1maWx0ZXInLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PCEtLVx0XHQ8bmctY29udGFpbmVyLS0+XG5cdFx0PCEtLVx0XHRcdFx0Km5nVGVtcGxhdGVPdXRsZXQ9XCJjb2x1bW4uZWRpdFRlbXBsYXRlOyBjb250ZXh0OiBlZGl0Q29udGV4dFwiPi0tPlxuXHRcdDwhLS1cdFx0PC9uZy1jb250YWluZXI+LS0+XG5cblx0XHQ8YnV0dG9uIGd1aS1idXR0b24gW3ByaW1hcnldPVwidHJ1ZVwiPkFkZCBGaWx0ZXI8L2J1dHRvbj5cblxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVIZWFkZXJGaWx0ZXJDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0QElucHV0KClcblx0Y29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dDtcblxuXHRzdWIgPSBuZXcgQ2hhbmdlZFZhbHVlRW1pdHRlcigpO1xuXG5cdGVkaXRDb250ZXh0OiBhbnk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlRmlsdGVyQ29tbWFuZFNlcnZpY2U6IEZpbHRlckNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblxuXHRcdHRoaXMuZWRpdENvbnRleHQgPSB7XG5cdFx0XHRjaGFuZ2VzOiB0aGlzLnN1YlxuXHRcdH07XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLnN1YlxuXHRcdFx0Lm9uKClcblx0XHRcdC5zdWJzY3JpYmUoKHBocmFzZTogc3RyaW5nKSA9PiB0aGlzLmZpbHRlcihwaHJhc2UpKTtcblx0fVxuXG5cdGZpbHRlcihwaHJhc2U6IHN0cmluZyk6IHZvaWQge1xuXHRcdC8vIHRoaXMuc3RydWN0dXJlRmlsdGVyQ29tbWFuZFNlcnZpY2UuYWRkRmlsdGVyKHRoaXMuY29sdW1uLmdldEZpZWxkSWQoKSwgJzEnLCBwaHJhc2UsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS1oZWFkZXItZmlsdGVyJztcblx0fVxuXG59XG4iXX0=