/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { FieldId } from '../../../field/domain/core/field/field.id';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
import { FilterWarehouse } from '../../domain-api/filter.warehouse';
import { FilterCommandDispatcher } from '../../domain-api/filter.command-dispatcher';
var UniqueValueListComponent = /** @class */ (function (_super) {
    tslib_1.__extends(UniqueValueListComponent, _super);
    function UniqueValueListComponent(changeDetectorRef, structureId, filterWarehouse, filterCommandDispatcher) {
        var _this = _super.call(this) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureId = structureId;
        _this.filterWarehouse = filterWarehouse;
        _this.filterCommandDispatcher = filterCommandDispatcher;
        _this.uniqueValues = [];
        return _this;
    }
    /**
     * @return {?}
     */
    UniqueValueListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.filterWarehouse
            .onUniqueValues(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} uniqueValuesReadModel
         * @return {?}
         */
        function (uniqueValuesReadModel) {
            _this.uniqueValues = uniqueValuesReadModel.getValues(_this.fieldId);
            _this.selectAllChecked = uniqueValuesReadModel.isSelectAllChecked(_this.fieldId);
            _this.selectAllIndeterminate = uniqueValuesReadModel.isIndeterminate(_this.fieldId);
            _this.changeDetectorRef.detectChanges();
        }));
    };
    /**
     * @return {?}
     */
    UniqueValueListComponent.prototype.toggleAllSelect = /**
     * @return {?}
     */
    function () {
        event.stopPropagation();
        if (this.selectAllChecked) {
            this.filterCommandDispatcher.unselectAllUniqueFilter(this.fieldId, this.structureId);
        }
        else {
            this.filterCommandDispatcher.selectAllUniqueFilter(this.fieldId, this.structureId);
        }
    };
    /**
     * @param {?} uniqueValueReadModel
     * @return {?}
     */
    UniqueValueListComponent.prototype.toggleSelect = /**
     * @param {?} uniqueValueReadModel
     * @return {?}
     */
    function (uniqueValueReadModel) {
        event.stopPropagation();
        if (uniqueValueReadModel.isEnabled()) {
            this.filterCommandDispatcher.unselectUniqueFilter(this.fieldId, uniqueValueReadModel.getId(), this.structureId);
        }
        else {
            this.filterCommandDispatcher.selectUniqueFilter(this.fieldId, uniqueValueReadModel.getId(), this.structureId);
        }
    };
    /**
     * @return {?}
     */
    UniqueValueListComponent.prototype.clearFilters = /**
     * @return {?}
     */
    function () {
        this.filterCommandDispatcher.selectAllUniqueFilter(this.fieldId, this.structureId);
    };
    UniqueValueListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-unique-value-list',
                    template: "\n\n\t\t<gui-checkbox [checked]=\"selectAllChecked\"\n\t\t\t\t\t  [indeterminate]=\"selectAllIndeterminate\"\n\t\t\t\t\t  (changed)=\"toggleAllSelect()\">\n\t\t\tSelect all\n\t\t</gui-checkbox>\n\t\t<div class=\"gui-unique-value-list\">\n\t\t\t<div *ngFor=\"let value of uniqueValues\">\n\t\t\t\t<gui-checkbox [checked]=\"value.isEnabled()\"\n\t\t\t\t\t\t\t  (changed)=\"toggleSelect(value)\">\n\t\t\t\t\t{{value.getValue()}}\n\t\t\t\t</gui-checkbox>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"gui-unique-value-list-actions\">\n<!--\t\t\t<button gui-button-->\n<!--\t\t\t\t\t[outline]=\"true\"-->\n<!--\t\t\t\t\t(click)=\"clearFilters()\">-->\n<!--\t\t\t\tCancel-->\n<!--\t\t\t</button>-->\n\t\t\t\n\t\t\t<button gui-button\n\t\t\t\t\t[outline]=\"true\"\n\t\t\t\t\t[primary]=\"true\"\n\t\t\t\t\t(click)=\"clearFilters()\">\n\t\t\t\tClear\n\t\t\t</button>\n\t\t</div>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: [".gui-unique-value-list{max-height:300px;overflow-y:scroll;overflow-x:hidden}.gui-unique-value-list-actions{padding:8px;display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end}"]
                }] }
    ];
    /** @nocollapse */
    UniqueValueListComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: StructureId },
        { type: FilterWarehouse },
        { type: FilterCommandDispatcher }
    ]; };
    UniqueValueListComponent.propDecorators = {
        fieldId: [{ type: Input }]
    };
    return UniqueValueListComponent;
}(SmartComponent));
export { UniqueValueListComponent };
if (false) {
    /** @type {?} */
    UniqueValueListComponent.prototype.fieldId;
    /** @type {?} */
    UniqueValueListComponent.prototype.selectAllChecked;
    /** @type {?} */
    UniqueValueListComponent.prototype.selectAllIndeterminate;
    /** @type {?} */
    UniqueValueListComponent.prototype.uniqueValues;
    /**
     * @type {?}
     * @private
     */
    UniqueValueListComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    UniqueValueListComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    UniqueValueListComponent.prototype.filterWarehouse;
    /**
     * @type {?}
     * @private
     */
    UniqueValueListComponent.prototype.filterCommandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXZhbHVlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvdW5pcXVlL3VuaXF1ZS12YWx1ZS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFcEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVwRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUVyRjtJQXNDOEMsb0RBQWM7SUFXM0Qsa0NBQTZCLGlCQUFvQyxFQUM3QyxXQUF3QixFQUN4QixlQUFnQyxFQUNoQyx1QkFBZ0Q7UUFIcEUsWUFJQyxpQkFBTyxTQUNQO1FBTDRCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0MsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIscUJBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLDZCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFMcEUsa0JBQVksR0FBZ0MsRUFBRSxDQUFDOztJQU8vQyxDQUFDOzs7O0lBRUQsMkNBQVE7OztJQUFSO1FBQUEsaUJBZUM7UUFiQSxJQUFJLENBQUMsZUFBZTthQUNsQixjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNoQyxJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLHFCQUE0QztZQUN2RCxLQUFJLENBQUMsWUFBWSxHQUFHLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFbEUsS0FBSSxDQUFDLGdCQUFnQixHQUFHLHFCQUFxQixDQUFDLGtCQUFrQixDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMvRSxLQUFJLENBQUMsc0JBQXNCLEdBQUcscUJBQXFCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUVsRixLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsa0RBQWU7OztJQUFmO1FBQ0MsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXhCLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQzFCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNyRjthQUFNO1lBQ04sSUFBSSxDQUFDLHVCQUF1QixDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ25GO0lBQ0YsQ0FBQzs7Ozs7SUFFRCwrQ0FBWTs7OztJQUFaLFVBQWEsb0JBQTBDO1FBQ3RELEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV4QixJQUFJLG9CQUFvQixDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLG9CQUFvQixDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNoSDthQUFNO1lBQ04sSUFBSSxDQUFDLHVCQUF1QixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsb0JBQW9CLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzlHO0lBQ0YsQ0FBQzs7OztJQUVELCtDQUFZOzs7SUFBWjtRQUNDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwRixDQUFDOztnQkEvRkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFFBQVEsRUFBRSxpM0JBK0JUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBRXJDOzs7O2dCQS9DaUMsaUJBQWlCO2dCQUsxQyxXQUFXO2dCQUNYLGVBQWU7Z0JBRWYsdUJBQXVCOzs7MEJBMEM5QixLQUFLOztJQXlEUCwrQkFBQztDQUFBLEFBakdELENBc0M4QyxjQUFjLEdBMkQzRDtTQTNEWSx3QkFBd0I7OztJQUVwQywyQ0FDaUI7O0lBRWpCLG9EQUEwQjs7SUFFMUIsMERBQWdDOztJQUVoQyxnREFBK0M7Ozs7O0lBRW5DLHFEQUFxRDs7Ozs7SUFDOUQsK0NBQXlDOzs7OztJQUN6QyxtREFBaUQ7Ozs7O0lBQ2pELDJEQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvZG9tYWluL2NvcmUvZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWVzUmVhZE1vZGVsIH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS91bmlxdWUvdW5pcXVlLXZhbHVlcy5yZWFkLW1vZGVsJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpbHRlcldhcmVob3VzZSB9IGZyb20gJy4uLy4uL2RvbWFpbi1hcGkvZmlsdGVyLndhcmVob3VzZSc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZVJlYWRNb2RlbCB9IGZyb20gJy4uLy4uL2RvbWFpbi1hcGkvdW5pcXVlL3VuaXF1ZS12YWx1ZS5yZWFkLW1vZGVsJztcbmltcG9ydCB7IEZpbHRlckNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9maWx0ZXIuY29tbWFuZC1kaXNwYXRjaGVyJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXVuaXF1ZS12YWx1ZS1saXN0Jyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxndWktY2hlY2tib3ggW2NoZWNrZWRdPVwic2VsZWN0QWxsQ2hlY2tlZFwiXG5cdFx0XHRcdFx0ICBbaW5kZXRlcm1pbmF0ZV09XCJzZWxlY3RBbGxJbmRldGVybWluYXRlXCJcblx0XHRcdFx0XHQgIChjaGFuZ2VkKT1cInRvZ2dsZUFsbFNlbGVjdCgpXCI+XG5cdFx0XHRTZWxlY3QgYWxsXG5cdFx0PC9ndWktY2hlY2tib3g+XG5cdFx0PGRpdiBjbGFzcz1cImd1aS11bmlxdWUtdmFsdWUtbGlzdFwiPlxuXHRcdFx0PGRpdiAqbmdGb3I9XCJsZXQgdmFsdWUgb2YgdW5pcXVlVmFsdWVzXCI+XG5cdFx0XHRcdDxndWktY2hlY2tib3ggW2NoZWNrZWRdPVwidmFsdWUuaXNFbmFibGVkKClcIlxuXHRcdFx0XHRcdFx0XHQgIChjaGFuZ2VkKT1cInRvZ2dsZVNlbGVjdCh2YWx1ZSlcIj5cblx0XHRcdFx0XHR7e3ZhbHVlLmdldFZhbHVlKCl9fVxuXHRcdFx0XHQ8L2d1aS1jaGVja2JveD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdFxuXHRcdDxkaXYgY2xhc3M9XCJndWktdW5pcXVlLXZhbHVlLWxpc3QtYWN0aW9uc1wiPlxuPCEtLVx0XHRcdDxidXR0b24gZ3VpLWJ1dHRvbi0tPlxuPCEtLVx0XHRcdFx0XHRbb3V0bGluZV09XCJ0cnVlXCItLT5cbjwhLS1cdFx0XHRcdFx0KGNsaWNrKT1cImNsZWFyRmlsdGVycygpXCI+LS0+XG48IS0tXHRcdFx0XHRDYW5jZWwtLT5cbjwhLS1cdFx0XHQ8L2J1dHRvbj4tLT5cblx0XHRcdFxuXHRcdFx0PGJ1dHRvbiBndWktYnV0dG9uXG5cdFx0XHRcdFx0W291dGxpbmVdPVwidHJ1ZVwiXG5cdFx0XHRcdFx0W3ByaW1hcnldPVwidHJ1ZVwiXG5cdFx0XHRcdFx0KGNsaWNrKT1cImNsZWFyRmlsdGVycygpXCI+XG5cdFx0XHRcdENsZWFyXG5cdFx0XHQ8L2J1dHRvbj5cblx0XHQ8L2Rpdj5cblxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0c3R5bGVVcmxzOiBbJy4uL3N0eWxlL3VuaXF1ZS12YWx1ZS1saXN0Lm5neC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVW5pcXVlVmFsdWVMaXN0Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdGZpZWxkSWQ6IEZpZWxkSWQ7XG5cblx0c2VsZWN0QWxsQ2hlY2tlZDogYm9vbGVhbjtcblxuXHRzZWxlY3RBbGxJbmRldGVybWluYXRlOiBib29sZWFuO1xuXG5cdHVuaXF1ZVZhbHVlczogQXJyYXk8VW5pcXVlVmFsdWVSZWFkTW9kZWw+ID0gW107XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlcldhcmVob3VzZTogRmlsdGVyV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlckNvbW1hbmREaXNwYXRjaGVyOiBGaWx0ZXJDb21tYW5kRGlzcGF0Y2hlcikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuZmlsdGVyV2FyZWhvdXNlXG5cdFx0XHQub25VbmlxdWVWYWx1ZXModGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh1bmlxdWVWYWx1ZXNSZWFkTW9kZWw6IFVuaXF1ZVZhbHVlc1JlYWRNb2RlbCkgPT4ge1xuXHRcdFx0XHR0aGlzLnVuaXF1ZVZhbHVlcyA9IHVuaXF1ZVZhbHVlc1JlYWRNb2RlbC5nZXRWYWx1ZXModGhpcy5maWVsZElkKTtcblxuXHRcdFx0XHR0aGlzLnNlbGVjdEFsbENoZWNrZWQgPSB1bmlxdWVWYWx1ZXNSZWFkTW9kZWwuaXNTZWxlY3RBbGxDaGVja2VkKHRoaXMuZmllbGRJZCk7XG5cdFx0XHRcdHRoaXMuc2VsZWN0QWxsSW5kZXRlcm1pbmF0ZSA9IHVuaXF1ZVZhbHVlc1JlYWRNb2RlbC5pc0luZGV0ZXJtaW5hdGUodGhpcy5maWVsZElkKTtcblxuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0dG9nZ2xlQWxsU2VsZWN0KCk6IHZvaWQge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0aWYgKHRoaXMuc2VsZWN0QWxsQ2hlY2tlZCkge1xuXHRcdFx0dGhpcy5maWx0ZXJDb21tYW5kRGlzcGF0Y2hlci51bnNlbGVjdEFsbFVuaXF1ZUZpbHRlcih0aGlzLmZpZWxkSWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmZpbHRlckNvbW1hbmREaXNwYXRjaGVyLnNlbGVjdEFsbFVuaXF1ZUZpbHRlcih0aGlzLmZpZWxkSWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH1cblx0fVxuXG5cdHRvZ2dsZVNlbGVjdCh1bmlxdWVWYWx1ZVJlYWRNb2RlbDogVW5pcXVlVmFsdWVSZWFkTW9kZWwpOiB2b2lkIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdGlmICh1bmlxdWVWYWx1ZVJlYWRNb2RlbC5pc0VuYWJsZWQoKSkge1xuXHRcdFx0dGhpcy5maWx0ZXJDb21tYW5kRGlzcGF0Y2hlci51bnNlbGVjdFVuaXF1ZUZpbHRlcih0aGlzLmZpZWxkSWQsIHVuaXF1ZVZhbHVlUmVhZE1vZGVsLmdldElkKCksIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmZpbHRlckNvbW1hbmREaXNwYXRjaGVyLnNlbGVjdFVuaXF1ZUZpbHRlcih0aGlzLmZpZWxkSWQsIHVuaXF1ZVZhbHVlUmVhZE1vZGVsLmdldElkKCksIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH1cblx0fVxuXG5cdGNsZWFyRmlsdGVycygpOiB2b2lkIHtcblx0XHR0aGlzLmZpbHRlckNvbW1hbmREaXNwYXRjaGVyLnNlbGVjdEFsbFVuaXF1ZUZpbHRlcih0aGlzLmZpZWxkSWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==