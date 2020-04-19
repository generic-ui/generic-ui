/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { StructureId } from '../../../domain/structure.id';
import { StructureSummariesUiEventsRepository } from '../../../feature-api/summaries/structure-summaries.ui-events-repository';
import { CompositionWarehouse } from '../../../../composition/feature-api/composition.warehouse';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { StructureSourceWarehouse } from '../../../feature-api/source/structure-source.warehouse';
var StructureSummariesPanelComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureSummariesPanelComponent, _super);
    function StructureSummariesPanelComponent(changeDetectorRef, structureId, structureSummariesUiEventsRepository, sourceReadModelService, compositionReadModelService) {
        var _this = _super.call(this) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureId = structureId;
        _this.structureSummariesUiEventsRepository = structureSummariesUiEventsRepository;
        _this.sourceReadModelService = sourceReadModelService;
        _this.compositionReadModelService = compositionReadModelService;
        _this.sourceEmpty = false;
        _this.structureSummariesUiEventsRepository
            .onSummariesChanged(_this.structureId)
            .pipe(_this.takeUntil())
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.summaries = event.getSummaries();
            _this.changeDetectorRef.detectChanges();
        }));
        return _this;
    }
    /**
     * @return {?}
     */
    StructureSummariesPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.sourceReadModelService
            .onEntitiesSize()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} size
         * @return {?}
         */
        function (size) {
            _this.sourceEmpty = size === 0;
            _this.changeDetectorRef.detectChanges();
        }));
        this.compositionReadModelService
            .onHeaderColumns()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} columns
         * @return {?}
         */
        function (columns) {
            _this.headerColumns = columns;
            _this.changeDetectorRef.detectChanges();
        }));
    };
    /**
     * @param {?} summaries
     * @return {?}
     */
    StructureSummariesPanelComponent.prototype.isSummariesTypePresent = /**
     * @param {?} summaries
     * @return {?}
     */
    function (summaries) {
        return summaries !== undefined && summaries !== null;
    };
    StructureSummariesPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-summaries-panel',
                    template: "\n\n\t\t<ng-container *ngIf=\"enabled && summaries && !sourceEmpty\">\n\n\t\t\t<div *ngFor=\"let column of headerColumns\"\n\t\t\t\t [style.width.px]=\"column.width\"\n\t\t\t\t class=\"gui-structure-summaries-cell\">\n\n\t\t\t\t<ng-container *ngIf=\"summaries && !!summaries.get(column.getFieldId().getId())\">\n\n\t\t\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).count)\"\n\t\t\t\t\t\t class=\"gui-structure-summaries-value\">\n\t\t\t\t\t\t<span [gui-tooltip]=\"'Number of items in the grid'\">Count</span>\n\t\t\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).count }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).distinct)\"\n\t\t\t\t\t\t class=\"gui-structure-summaries-value\">\n\t\t\t\t\t\t<span [gui-tooltip]=\"'Distinct Values'\">Dist</span>\n\t\t\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).distinct }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\" isSummariesTypePresent(summaries.get(column.getFieldId().getId()).sum)\"\n\t\t\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t<!--\t\t\t\t\t\t\t<span [gui-tooltip]=\"'Sum'\" -->\n\t\t\t\t\t\t\t<!--\t\t\t\t\t\t\t\t  class=\"gui-math-symbol\">&sum;</span>-->\n\t\t\t\t\t\t\tSum\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).sum }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).average)\"\n\t\t\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t\t\t<!--\t\t\t\t\t\t<div [gui-tooltip]=\"'Average'\"-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t\t class=\"gui-mean\">-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t\t<span>_</span><span>X</span>-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t<span [gui-tooltip]=\"'Average'\">Avg</span>\n\t\t\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).average }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\" isSummariesTypePresent(summaries.get(column.getFieldId().getId()).min)\"\n\t\t\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t\t\t<!--\t\t\t\t\t\t<div [gui-tooltip]=\"'Min'\">-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t\t<span class=\"gui-math-symbol\">&and;</span>-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t<span [gui-tooltip]=\"'Min'\">\n\t\t\t\t\t\t\tMin\n\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).min }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\" isSummariesTypePresent(summaries.get(column.getFieldId().getId()).max)\"\n\t\t\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t\t\t<!--\t\t\t\t\t\t<div [gui-tooltip]=\"'Max'\">-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t\t<span class=\"gui-math-symbol\">&or;</span>-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t</div>-->\n\n\t\t\t\t\t\t<span [gui-tooltip]=\"'Max'\">\n\t\t\t\t\t\t\tMax\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).max }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).median)\"\n\t\t\t\t\t\t class=\"gui-structure-summaries-value\">\n\n\t\t\t\t\t\t<!--\t\t\t\t\t\t<div [gui-tooltip]=\"'Median'\"-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t\t class=\"gui-median\">-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t\t<span>~</span>-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t\t<span>X</span>-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t</div>-->\n\n\t\t\t\t\t\t<span [gui-tooltip]=\"'Median'\">Med</span>\n\t\t\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).median }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).truthy)\"\n\t\t\t\t\t\t class=\"gui-structure-summaries-value\">\n\t\t\t\t\t\t<span>Truthy</span>\n\t\t\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).truthy }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\"isSummariesTypePresent(summaries.get(column.getFieldId().getId()).falsy)\"\n\t\t\t\t\t\t class=\"gui-structure-summaries-value\">\n\t\t\t\t\t\t<span>Falsy</span>\n\t\t\t\t\t\t<span class=\"gui-summaries-value\">{{ summaries.get(column.getFieldId().getId()).falsy }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t</ng-container>\n\t\t\t</div>\n\n\t\t</ng-container>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-structure-summaries-panel]': 'true'
                    }
                }] }
    ];
    /** @nocollapse */
    StructureSummariesPanelComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: StructureId },
        { type: StructureSummariesUiEventsRepository },
        { type: StructureSourceWarehouse },
        { type: CompositionWarehouse }
    ]; };
    StructureSummariesPanelComponent.propDecorators = {
        enabled: [{ type: Input }]
    };
    return StructureSummariesPanelComponent;
}(SmartComponent));
export { StructureSummariesPanelComponent };
if (false) {
    /** @type {?} */
    StructureSummariesPanelComponent.prototype.enabled;
    /** @type {?} */
    StructureSummariesPanelComponent.prototype.sourceEmpty;
    /** @type {?} */
    StructureSummariesPanelComponent.prototype.headerColumns;
    /** @type {?} */
    StructureSummariesPanelComponent.prototype.summaries;
    /**
     * @type {?}
     * @private
     */
    StructureSummariesPanelComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureSummariesPanelComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureSummariesPanelComponent.prototype.structureSummariesUiEventsRepository;
    /**
     * @type {?}
     * @private
     */
    StructureSummariesPanelComponent.prototype.sourceReadModelService;
    /**
     * @type {?}
     * @private
     */
    StructureSummariesPanelComponent.prototype.compositionReadModelService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS9wYW5lbC9zdW1tYXJpZXMvc3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdoSCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDL0gsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFFakcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBR2xHO0lBNkdzRCw0REFBYztJQVduRSwwQ0FBb0IsaUJBQW9DLEVBQzdDLFdBQXdCLEVBQ3hCLG9DQUEwRSxFQUMxRSxzQkFBZ0QsRUFDdkMsMkJBQWlEO1FBSnJFLFlBS0MsaUJBQU8sU0FZUDtRQWpCbUIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3QyxpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QiwwQ0FBb0MsR0FBcEMsb0NBQW9DLENBQXNDO1FBQzFFLDRCQUFzQixHQUF0QixzQkFBc0IsQ0FBMEI7UUFDdkMsaUNBQTJCLEdBQTNCLDJCQUEyQixDQUFzQjtRQVZyRSxpQkFBVyxHQUFZLEtBQUssQ0FBQztRQWE1QixLQUFJLENBQUMsb0NBQW9DO2FBQ3ZDLGtCQUFrQixDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUM7YUFDcEMsSUFBSSxDQUNKLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxLQUFxQztZQUVoRCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN0QyxLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7O0lBQ0wsQ0FBQzs7OztJQUVELG1EQUFROzs7SUFBUjtRQUFBLGlCQXNCQztRQXBCQSxJQUFJLENBQUMsc0JBQXNCO2FBQ3pCLGNBQWMsRUFBRTthQUNoQixJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLElBQVk7WUFDdkIsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDO1lBQzlCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUVKLElBQUksQ0FBQywyQkFBMkI7YUFDOUIsZUFBZSxFQUFFO2FBQ2pCLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsT0FBdUM7WUFDbEQsS0FBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7WUFDN0IsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBRUwsQ0FBQzs7Ozs7SUFFRCxpRUFBc0I7Ozs7SUFBdEIsVUFBdUIsU0FBaUI7UUFDdkMsT0FBTyxTQUFTLEtBQUssU0FBUyxJQUFJLFNBQVMsS0FBSyxJQUFJLENBQUM7SUFDdEQsQ0FBQzs7Z0JBcktELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsK0JBQStCO29CQUN6QyxRQUFRLEVBQUUsNDVJQW9HVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLElBQUksRUFBRTt3QkFDTCx1Q0FBdUMsRUFBRSxNQUFNO3FCQUMvQztpQkFDRDs7OztnQkF2SGlDLGlCQUFpQjtnQkFHMUMsV0FBVztnQkFDWCxvQ0FBb0M7Z0JBSXBDLHdCQUF3QjtnQkFIeEIsb0JBQW9COzs7MEJBcUgzQixLQUFLOztJQXVEUCx1Q0FBQztDQUFBLEFBdEtELENBNkdzRCxjQUFjLEdBeURuRTtTQXpEWSxnQ0FBZ0M7OztJQUU1QyxtREFDaUI7O0lBRWpCLHVEQUE2Qjs7SUFFN0IseURBQThDOztJQUU5QyxxREFBNEI7Ozs7O0lBRWhCLDZEQUE0Qzs7Ozs7SUFDckQsdURBQWdDOzs7OztJQUNoQyxnRkFBa0Y7Ozs7O0lBQ2xGLGtFQUF3RDs7Ozs7SUFDeEQsdUVBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2ZlYXR1cmUtYXBpL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzVWlFdmVudHNSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZS1hcGkvc3VtbWFyaWVzL3N0cnVjdHVyZS1zdW1tYXJpZXMudWktZXZlbnRzLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9mZWF0dXJlLWFwaS9jb21wb3NpdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9zdW1tYXJpZXMvc3RydWN0dXJlLnN1bW1hcmllcy1jaGFuZ2VkLmV2ZW50JztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU291cmNlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZS1hcGkvc291cmNlL3N0cnVjdHVyZS1zb3VyY2Uud2FyZWhvdXNlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLXN1bW1hcmllcy1wYW5lbCcsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiZW5hYmxlZCAmJiBzdW1tYXJpZXMgJiYgIXNvdXJjZUVtcHR5XCI+XG5cblx0XHRcdDxkaXYgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBoZWFkZXJDb2x1bW5zXCJcblx0XHRcdFx0IFtzdHlsZS53aWR0aC5weF09XCJjb2x1bW4ud2lkdGhcIlxuXHRcdFx0XHQgY2xhc3M9XCJndWktc3RydWN0dXJlLXN1bW1hcmllcy1jZWxsXCI+XG5cblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cInN1bW1hcmllcyAmJiAhIXN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKVwiPlxuXG5cdFx0XHRcdFx0PGRpdiAqbmdJZj1cImlzU3VtbWFyaWVzVHlwZVByZXNlbnQoc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLmNvdW50KVwiXG5cdFx0XHRcdFx0XHQgY2xhc3M9XCJndWktc3RydWN0dXJlLXN1bW1hcmllcy12YWx1ZVwiPlxuXHRcdFx0XHRcdFx0PHNwYW4gW2d1aS10b29sdGlwXT1cIidOdW1iZXIgb2YgaXRlbXMgaW4gdGhlIGdyaWQnXCI+Q291bnQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1zdW1tYXJpZXMtdmFsdWVcIj57eyBzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkuY291bnQgfX08L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2ICpuZ0lmPVwiaXNTdW1tYXJpZXNUeXBlUHJlc2VudChzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkuZGlzdGluY3QpXCJcblx0XHRcdFx0XHRcdCBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtc3VtbWFyaWVzLXZhbHVlXCI+XG5cdFx0XHRcdFx0XHQ8c3BhbiBbZ3VpLXRvb2x0aXBdPVwiJ0Rpc3RpbmN0IFZhbHVlcydcIj5EaXN0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJndWktc3VtbWFyaWVzLXZhbHVlXCI+e3sgc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLmRpc3RpbmN0IH19PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiAqbmdJZj1cIiBpc1N1bW1hcmllc1R5cGVQcmVzZW50KHN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5zdW0pXCJcblx0XHRcdFx0XHRcdCBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtc3VtbWFyaWVzLXZhbHVlXCI+XG5cblx0XHRcdFx0XHRcdDxzcGFuPlxuXHRcdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0XHQ8c3BhbiBbZ3VpLXRvb2x0aXBdPVwiJ1N1bSdcIiAtLT5cblx0XHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdFx0XHQgIGNsYXNzPVwiZ3VpLW1hdGgtc3ltYm9sXCI+JnN1bTs8L3NwYW4+LS0+XG5cdFx0XHRcdFx0XHRcdFN1bVxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJndWktc3VtbWFyaWVzLXZhbHVlXCI+e3sgc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLnN1bSB9fTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgKm5nSWY9XCJpc1N1bW1hcmllc1R5cGVQcmVzZW50KHN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5hdmVyYWdlKVwiXG5cdFx0XHRcdFx0XHQgY2xhc3M9XCJndWktc3RydWN0dXJlLXN1bW1hcmllcy12YWx1ZVwiPlxuXG5cdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0PGRpdiBbZ3VpLXRvb2x0aXBdPVwiJ0F2ZXJhZ2UnXCItLT5cblx0XHRcdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHRcdCBjbGFzcz1cImd1aS1tZWFuXCI+LS0+XG5cdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0XHQ8c3Bhbj5fPC9zcGFuPjxzcGFuPlg8L3NwYW4+LS0+XG5cdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0PC9kaXY+LS0+XG5cdFx0XHRcdFx0XHQ8c3BhbiBbZ3VpLXRvb2x0aXBdPVwiJ0F2ZXJhZ2UnXCI+QXZnPC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJndWktc3VtbWFyaWVzLXZhbHVlXCI+e3sgc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLmF2ZXJhZ2UgfX08L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2ICpuZ0lmPVwiIGlzU3VtbWFyaWVzVHlwZVByZXNlbnQoc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLm1pbilcIlxuXHRcdFx0XHRcdFx0IGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1zdW1tYXJpZXMtdmFsdWVcIj5cblxuXHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdDxkaXYgW2d1aS10b29sdGlwXT1cIidNaW4nXCI+LS0+XG5cdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1tYXRoLXN5bWJvbFwiPiZhbmQ7PC9zcGFuPi0tPlxuXHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdDwvZGl2Pi0tPlxuXHRcdFx0XHRcdFx0PHNwYW4gW2d1aS10b29sdGlwXT1cIidNaW4nXCI+XG5cdFx0XHRcdFx0XHRcdE1pblxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1zdW1tYXJpZXMtdmFsdWVcIj57eyBzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkubWluIH19PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiAqbmdJZj1cIiBpc1N1bW1hcmllc1R5cGVQcmVzZW50KHN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5tYXgpXCJcblx0XHRcdFx0XHRcdCBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtc3VtbWFyaWVzLXZhbHVlXCI+XG5cblx0XHRcdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHQ8ZGl2IFtndWktdG9vbHRpcF09XCInTWF4J1wiPi0tPlxuXHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJndWktbWF0aC1zeW1ib2xcIj4mb3I7PC9zcGFuPi0tPlxuXHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdDwvZGl2Pi0tPlxuXG5cdFx0XHRcdFx0XHQ8c3BhbiBbZ3VpLXRvb2x0aXBdPVwiJ01heCdcIj5cblx0XHRcdFx0XHRcdFx0TWF4XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1zdW1tYXJpZXMtdmFsdWVcIj57eyBzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkubWF4IH19PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiAqbmdJZj1cImlzU3VtbWFyaWVzVHlwZVByZXNlbnQoc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLm1lZGlhbilcIlxuXHRcdFx0XHRcdFx0IGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1zdW1tYXJpZXMtdmFsdWVcIj5cblxuXHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdDxkaXYgW2d1aS10b29sdGlwXT1cIidNZWRpYW4nXCItLT5cblx0XHRcdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHRcdCBjbGFzcz1cImd1aS1tZWRpYW5cIj4tLT5cblx0XHRcdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHRcdDxzcGFuPn48L3NwYW4+LS0+XG5cdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0XHQ8c3Bhbj5YPC9zcGFuPi0tPlxuXHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdDwvZGl2Pi0tPlxuXG5cdFx0XHRcdFx0XHQ8c3BhbiBbZ3VpLXRvb2x0aXBdPVwiJ01lZGlhbidcIj5NZWQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1zdW1tYXJpZXMtdmFsdWVcIj57eyBzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkubWVkaWFuIH19PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiAqbmdJZj1cImlzU3VtbWFyaWVzVHlwZVByZXNlbnQoc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLnRydXRoeSlcIlxuXHRcdFx0XHRcdFx0IGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1zdW1tYXJpZXMtdmFsdWVcIj5cblx0XHRcdFx0XHRcdDxzcGFuPlRydXRoeTwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLXN1bW1hcmllcy12YWx1ZVwiPnt7IHN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS50cnV0aHkgfX08L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2ICpuZ0lmPVwiaXNTdW1tYXJpZXNUeXBlUHJlc2VudChzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkuZmFsc3kpXCJcblx0XHRcdFx0XHRcdCBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtc3VtbWFyaWVzLXZhbHVlXCI+XG5cdFx0XHRcdFx0XHQ8c3Bhbj5GYWxzeTwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLXN1bW1hcmllcy12YWx1ZVwiPnt7IHN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5mYWxzeSB9fTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0PC9uZy1jb250YWluZXI+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1zdHJ1Y3R1cmUtc3VtbWFyaWVzLXBhbmVsXSc6ICd0cnVlJ1xuXHR9XG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdGVuYWJsZWQ6IGJvb2xlYW47XG5cblx0c291cmNlRW1wdHk6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRoZWFkZXJDb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD47XG5cblx0c3VtbWFyaWVzOiBNYXA8c3RyaW5nLCBhbnk+O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVTdW1tYXJpZXNVaUV2ZW50c1JlcG9zaXRvcnk6IFN0cnVjdHVyZVN1bW1hcmllc1VpRXZlbnRzUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSBzb3VyY2VSZWFkTW9kZWxTZXJ2aWNlOiBTdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlOiBDb21wb3NpdGlvbldhcmVob3VzZSkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVN1bW1hcmllc1VpRXZlbnRzUmVwb3NpdG9yeVxuXHRcdFx0Lm9uU3VtbWFyaWVzQ2hhbmdlZCh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGV2ZW50OiBTdHJ1Y3R1cmVTdW1tYXJpZXNDaGFuZ2VkRXZlbnQpID0+IHtcblxuXHRcdFx0XHR0aGlzLnN1bW1hcmllcyA9IGV2ZW50LmdldFN1bW1hcmllcygpO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLnNvdXJjZVJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vbkVudGl0aWVzU2l6ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoc2l6ZTogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMuc291cmNlRW1wdHkgPSBzaXplID09PSAwO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vbkhlYWRlckNvbHVtbnMoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PikgPT4ge1xuXHRcdFx0XHR0aGlzLmhlYWRlckNvbHVtbnMgPSBjb2x1bW5zO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdH1cblxuXHRpc1N1bW1hcmllc1R5cGVQcmVzZW50KHN1bW1hcmllczogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHN1bW1hcmllcyAhPT0gdW5kZWZpbmVkICYmIHN1bW1hcmllcyAhPT0gbnVsbDtcblx0fVxufVxuIl19