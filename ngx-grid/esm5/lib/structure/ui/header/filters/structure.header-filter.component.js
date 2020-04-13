/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { CellTemplateWithContext } from '../../../../composition/read/definition/cell-template-with-context';
import { ChangedValueEmitter } from '../../../../composition/read/edit/changed-value.emitter';
import { StructureFilterCommandDispatcher } from '../../../ui-api/filter/structure-filter.command-dispatcher';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmhlYWRlci1maWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2hlYWRlci9maWx0ZXJzL3N0cnVjdHVyZS5oZWFkZXItZmlsdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUUzRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUM3RyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUM5RixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUM5RyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFHM0Q7SUFjb0QsMERBQWM7SUFTakUsd0NBQW9CLDZCQUErRCxFQUN4RSxXQUF3QjtRQURuQyxZQUVDLGlCQUFPLFNBS1A7UUFQbUIsbUNBQTZCLEdBQTdCLDZCQUE2QixDQUFrQztRQUN4RSxpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUxuQyxTQUFHLEdBQUcsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO1FBUS9CLEtBQUksQ0FBQyxXQUFXLEdBQUc7WUFDbEIsT0FBTyxFQUFFLEtBQUksQ0FBQyxHQUFHO1NBQ2pCLENBQUM7O0lBQ0gsQ0FBQzs7OztJQUVELGlEQUFROzs7SUFBUjtRQUFBLGlCQUlDO1FBSEEsSUFBSSxDQUFDLEdBQUc7YUFDTixFQUFFLEVBQUU7YUFDSixTQUFTOzs7O1FBQUMsVUFBQyxNQUFjLElBQUssT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFuQixDQUFtQixFQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7SUFFRCwrQ0FBTTs7OztJQUFOLFVBQU8sTUFBYztRQUNwQixJQUFJLENBQUMsNkJBQTZCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkcsQ0FBQzs7Z0JBeENELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsNkJBQTZCO29CQUN2QyxRQUFRLEVBQUUsOE5BUVQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQzs7OztnQkFqQlEsZ0NBQWdDO2dCQUNoQyxXQUFXOzs7eUJBbUJsQixLQUFLOztJQTBCUCxxQ0FBQztDQUFBLEFBMUNELENBY29ELGNBQWMsR0E0QmpFO1NBNUJZLDhCQUE4Qjs7O0lBRTFDLGdEQUNnQzs7SUFFaEMsNkNBQWdDOztJQUVoQyxxREFBaUI7Ozs7O0lBRUwsdUVBQXVFOzs7OztJQUNoRixxREFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgQ2hhbmdlZFZhbHVlRW1pdHRlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL3JlYWQvZWRpdC9jaGFuZ2VkLXZhbHVlLmVtaXR0ZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlRmlsdGVyQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvZmlsdGVyL3N0cnVjdHVyZS1maWx0ZXIuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1oZWFkZXItZmlsdGVyJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDwhLS1cdFx0PG5nLWNvbnRhaW5lci0tPlxuXHRcdDwhLS1cdFx0XHRcdCpuZ1RlbXBsYXRlT3V0bGV0PVwiY29sdW1uLmVkaXRUZW1wbGF0ZTsgY29udGV4dDogZWRpdENvbnRleHRcIj4tLT5cblx0XHQ8IS0tXHRcdDwvbmctY29udGFpbmVyPi0tPlxuXG5cdFx0PGJ1dHRvbiBndWktYnV0dG9uIFtwcmltYXJ5XT1cInRydWVcIj5BZGQgRmlsdGVyPC9idXR0b24+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlSGVhZGVyRmlsdGVyQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQ7XG5cblx0c3ViID0gbmV3IENoYW5nZWRWYWx1ZUVtaXR0ZXIoKTtcblxuXHRlZGl0Q29udGV4dDogYW55O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlRmlsdGVyQ29tbWFuZFNlcnZpY2U6IFN0cnVjdHVyZUZpbHRlckNvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmVkaXRDb250ZXh0ID0ge1xuXHRcdFx0Y2hhbmdlczogdGhpcy5zdWJcblx0XHR9O1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5zdWJcblx0XHRcdC5vbigpXG5cdFx0XHQuc3Vic2NyaWJlKChwaHJhc2U6IHN0cmluZykgPT4gdGhpcy5maWx0ZXIocGhyYXNlKSk7XG5cdH1cblxuXHRmaWx0ZXIocGhyYXNlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnN0cnVjdHVyZUZpbHRlckNvbW1hbmRTZXJ2aWNlLmFkZEZpbHRlcih0aGlzLmNvbHVtbi5nZXRGaWVsZElkKCksICcxJywgcGhyYXNlLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=