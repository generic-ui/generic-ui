/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { CellTemplateWithContext } from '../../../../composition/read/definition/cell-template-with-context';
import { ChangedValueEmitter } from '../../../../composition/read/edit/changed-value.emitter';
import { StructureFilterCommandDispatcher } from '../../../ui-api/structure/filter/structure-filter.command-dispatcher';
import { StructureId } from '../../../domain/structure.id';
var StructureHeaderFilterComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureHeaderFilterComponent, _super);
    function StructureHeaderFilterComponent(structureFilterCommandService, structureId) {
        var _this = _super.call(this) || this;
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
        this.structureFilterCommandService.addFilter(this.column.getFieldId(), '1', phrase, this.structureId);
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
        { type: StructureFilterCommandDispatcher },
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
    StructureHeaderFilterComponent.prototype.structureFilterCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderFilterComponent.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmhlYWRlci1maWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2hlYWRlci9maWx0ZXJzL3N0cnVjdHVyZS5oZWFkZXItZmlsdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUUzRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUM3RyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUM5RixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUN4SCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFHM0Q7SUFjb0QsMERBQWM7SUFTakUsd0NBQW9CLDZCQUErRCxFQUN4RSxXQUF3QjtRQURuQyxZQUVDLGlCQUFPLFNBS1A7UUFQbUIsbUNBQTZCLEdBQTdCLDZCQUE2QixDQUFrQztRQUN4RSxpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUxuQyxTQUFHLEdBQUcsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO1FBUS9CLEtBQUksQ0FBQyxXQUFXLEdBQUc7WUFDbEIsT0FBTyxFQUFFLEtBQUksQ0FBQyxHQUFHO1NBQ2pCLENBQUM7O0lBQ0gsQ0FBQzs7OztJQUVELGlEQUFROzs7SUFBUjtRQUFBLGlCQUlDO1FBSEEsSUFBSSxDQUFDLEdBQUc7YUFDTixFQUFFLEVBQUU7YUFDSixTQUFTOzs7O1FBQUMsVUFBQyxNQUFjLElBQUssT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFuQixDQUFtQixFQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7SUFFRCwrQ0FBTTs7OztJQUFOLFVBQU8sTUFBYztRQUNwQixJQUFJLENBQUMsNkJBQTZCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkcsQ0FBQzs7Z0JBeENELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsNkJBQTZCO29CQUN2QyxRQUFRLEVBQUUsOE5BUVQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQzs7OztnQkFqQlEsZ0NBQWdDO2dCQUNoQyxXQUFXOzs7eUJBbUJsQixLQUFLOztJQTBCUCxxQ0FBQztDQUFBLEFBMUNELENBY29ELGNBQWMsR0E0QmpFO1NBNUJZLDhCQUE4Qjs7O0lBRTFDLGdEQUNnQzs7SUFFaEMsNkNBQWdDOztJQUVoQyxxREFBaUI7Ozs7O0lBRUwsdUVBQXVFOzs7OztJQUNoRixxREFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgQ2hhbmdlZFZhbHVlRW1pdHRlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL3JlYWQvZWRpdC9jaGFuZ2VkLXZhbHVlLmVtaXR0ZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlRmlsdGVyQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlL2ZpbHRlci9zdHJ1Y3R1cmUtZmlsdGVyLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtaGVhZGVyLWZpbHRlcicsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8IS0tXHRcdDxuZy1jb250YWluZXItLT5cblx0XHQ8IS0tXHRcdFx0XHQqbmdUZW1wbGF0ZU91dGxldD1cImNvbHVtbi5lZGl0VGVtcGxhdGU7IGNvbnRleHQ6IGVkaXRDb250ZXh0XCI+LS0+XG5cdFx0PCEtLVx0XHQ8L25nLWNvbnRhaW5lcj4tLT5cblxuXHRcdDxidXR0b24gZ3VpLWJ1dHRvbiBbcHJpbWFyeV09XCJ0cnVlXCI+QWRkIEZpbHRlcjwvYnV0dG9uPlxuXG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUhlYWRlckZpbHRlckNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0O1xuXG5cdHN1YiA9IG5ldyBDaGFuZ2VkVmFsdWVFbWl0dGVyKCk7XG5cblx0ZWRpdENvbnRleHQ6IGFueTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUZpbHRlckNvbW1hbmRTZXJ2aWNlOiBTdHJ1Y3R1cmVGaWx0ZXJDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5lZGl0Q29udGV4dCA9IHtcblx0XHRcdGNoYW5nZXM6IHRoaXMuc3ViXG5cdFx0fTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuc3ViXG5cdFx0XHQub24oKVxuXHRcdFx0LnN1YnNjcmliZSgocGhyYXNlOiBzdHJpbmcpID0+IHRoaXMuZmlsdGVyKHBocmFzZSkpO1xuXHR9XG5cblx0ZmlsdGVyKHBocmFzZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVGaWx0ZXJDb21tYW5kU2VydmljZS5hZGRGaWx0ZXIodGhpcy5jb2x1bW4uZ2V0RmllbGRJZCgpLCAnMScsIHBocmFzZSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19