/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { StructureId } from '../../../domain/structure.id';
import { StructureAggregationUiEventsRepository } from '../../../ui-api/structure/aggregation/structure-aggregation.ui-events-repository';
import { CompositionReadModelWarehouse } from '../../../../composition/ui-api/composition.read-model-warehouse';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { StructureSourceReadModelWarehouse } from '../../../ui-api/source/structure-source.read-model-warehouse';
var StructureAggregationPanelComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureAggregationPanelComponent, _super);
    function StructureAggregationPanelComponent(changeDetectorRef, structureId, structureAggregationUiEventsRepository, sourceReadModelService, compositionReadModelService) {
        var _this = _super.call(this) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureId = structureId;
        _this.structureAggregationUiEventsRepository = structureAggregationUiEventsRepository;
        _this.sourceReadModelService = sourceReadModelService;
        _this.compositionReadModelService = compositionReadModelService;
        _this.sourceEmpty = false;
        _this.structureAggregationUiEventsRepository
            .onAggregationsChanged(_this.structureId)
            .pipe(_this.takeUntil())
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.aggregations = event.getAggregations();
            _this.changeDetectorRef.detectChanges();
        }));
        return _this;
    }
    /**
     * @return {?}
     */
    StructureAggregationPanelComponent.prototype.ngOnInit = /**
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
     * @param {?} aggregation
     * @return {?}
     */
    StructureAggregationPanelComponent.prototype.isAggregateTypePresent = /**
     * @param {?} aggregation
     * @return {?}
     */
    function (aggregation) {
        return aggregation !== undefined && aggregation !== null;
    };
    StructureAggregationPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-aggregation-panel',
                    template: "\n\n\t\t<ng-container *ngIf=\"enabled && aggregations && !sourceEmpty\">\n\n\t\t\t<div *ngFor=\"let column of headerColumns\"\n\t\t\t\t [style.width.px]=\"column.width\"\n\t\t\t\t class=\"gui-structure-aggregation-cell\">\n\n\t\t\t\t<ng-container *ngIf=\"aggregations && !!aggregations.get(column.getFieldId().getId())\">\n\n\t\t\t\t\t<div *ngIf=\"isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).count)\"\n\t\t\t\t\t\t class=\"gui-structure-aggregation-value\">\n\t\t\t\t\t\t<span>Count</span>\n\t\t\t\t\t\t<span class=\"gui-aggregation-value\">{{ aggregations.get(column.getFieldId().getId()).count }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\"isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).distinct)\"\n\t\t\t\t\t\t class=\"gui-structure-aggregation-value\">\n\t\t\t\t\t\t<span [gui-tooltip]=\"'Distinct'\">Dist</span>\n\t\t\t\t\t\t<span class=\"gui-aggregation-value\">{{ aggregations.get(column.getFieldId().getId()).distinct }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\" isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).sum)\"\n\t\t\t\t\t\t class=\"gui-structure-aggregation-value\">\n\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t<!--\t\t\t\t\t\t\t<span [gui-tooltip]=\"'Sum'\" -->\n\t\t\t\t\t\t\t<!--\t\t\t\t\t\t\t\t  class=\"gui-math-symbol\">&sum;</span>-->\n\t\t\t\t\t\t\tSum\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span class=\"gui-aggregation-value\">{{ aggregations.get(column.getFieldId().getId()).sum }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\"isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).average)\"\n\t\t\t\t\t\t class=\"gui-structure-aggregation-value\">\n\n\t\t\t\t\t\t<!--\t\t\t\t\t\t<div [gui-tooltip]=\"'Average'\"-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t\t class=\"gui-mean\">-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t\t<span>_</span><span>X</span>-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t<span [gui-tooltip]=\"'Average'\">Avg</span>\n\t\t\t\t\t\t<span class=\"gui-aggregation-value\">{{ aggregations.get(column.getFieldId().getId()).average }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\" isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).min)\"\n\t\t\t\t\t\t class=\"gui-structure-aggregation-value\">\n\n\t\t\t\t\t\t<!--\t\t\t\t\t\t<div [gui-tooltip]=\"'Min'\">-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t\t<span class=\"gui-math-symbol\">&and;</span>-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t<span [gui-tooltip]=\"'Min'\">\n\t\t\t\t\t\t\tMin\n\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t<span class=\"gui-aggregation-value\">{{ aggregations.get(column.getFieldId().getId()).min }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\" isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).max)\"\n\t\t\t\t\t\t class=\"gui-structure-aggregation-value\">\n\n\t\t\t\t\t\t<!--\t\t\t\t\t\t<div [gui-tooltip]=\"'Max'\">-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t\t<span class=\"gui-math-symbol\">&or;</span>-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t</div>-->\n\n\t\t\t\t\t\t<span [gui-tooltip]=\"'Max'\">\n\t\t\t\t\t\t\tMax\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span class=\"gui-aggregation-value\">{{ aggregations.get(column.getFieldId().getId()).max }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\"isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).median)\"\n\t\t\t\t\t\t class=\"gui-structure-aggregation-value\">\n\n\t\t\t\t\t\t<!--\t\t\t\t\t\t<div [gui-tooltip]=\"'Median'\"-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t\t class=\"gui-median\">-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t\t<span>~</span>-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t\t<span>X</span>-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t</div>-->\n\n\t\t\t\t\t\t<span [gui-tooltip]=\"'Median'\">Med</span>\n\t\t\t\t\t\t<span class=\"gui-aggregation-value\">{{ aggregations.get(column.getFieldId().getId()).median }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\"isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).truthy)\"\n\t\t\t\t\t\t class=\"gui-structure-aggregation-value\">\n\t\t\t\t\t\t<span>Truthy</span>\n\t\t\t\t\t\t<span class=\"gui-aggregation-value\">{{ aggregations.get(column.getFieldId().getId()).truthy }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\"isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).falsy)\"\n\t\t\t\t\t\t class=\"gui-structure-aggregation-value\">\n\t\t\t\t\t\t<span>Falsy</span>\n\t\t\t\t\t\t<span class=\"gui-aggregation-value\">{{ aggregations.get(column.getFieldId().getId()).falsy }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t</ng-container>\n\t\t\t</div>\n\n\t\t</ng-container>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-structure-aggregation-panel]': 'true'
                    }
                }] }
    ];
    /** @nocollapse */
    StructureAggregationPanelComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: StructureId },
        { type: StructureAggregationUiEventsRepository },
        { type: StructureSourceReadModelWarehouse },
        { type: CompositionReadModelWarehouse }
    ]; };
    StructureAggregationPanelComponent.propDecorators = {
        enabled: [{ type: Input }]
    };
    return StructureAggregationPanelComponent;
}(SmartComponent));
export { StructureAggregationPanelComponent };
if (false) {
    /** @type {?} */
    StructureAggregationPanelComponent.prototype.enabled;
    /** @type {?} */
    StructureAggregationPanelComponent.prototype.sourceEmpty;
    /** @type {?} */
    StructureAggregationPanelComponent.prototype.headerColumns;
    /** @type {?} */
    StructureAggregationPanelComponent.prototype.aggregations;
    /**
     * @type {?}
     * @private
     */
    StructureAggregationPanelComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureAggregationPanelComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureAggregationPanelComponent.prototype.structureAggregationUiEventsRepository;
    /**
     * @type {?}
     * @private
     */
    StructureAggregationPanelComponent.prototype.sourceReadModelService;
    /**
     * @type {?}
     * @private
     */
    StructureAggregationPanelComponent.prototype.compositionReadModelService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0aW9uLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9wYW5lbC9hZ2dyZWdhdGlvbi9zdHJ1Y3R1cmUuYWdncmVnYXRpb24tcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHaEgsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLGtGQUFrRixDQUFDO0FBQzFJLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBRWhILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUdqSDtJQTZHd0QsOERBQWM7SUFXckUsNENBQW9CLGlCQUFvQyxFQUM3QyxXQUF3QixFQUN4QixzQ0FBOEUsRUFDOUUsc0JBQXlELEVBQ2hELDJCQUEwRDtRQUo5RSxZQUtDLGlCQUFPLFNBWVA7UUFqQm1CLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0MsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsNENBQXNDLEdBQXRDLHNDQUFzQyxDQUF3QztRQUM5RSw0QkFBc0IsR0FBdEIsc0JBQXNCLENBQW1DO1FBQ2hELGlDQUEyQixHQUEzQiwyQkFBMkIsQ0FBK0I7UUFWOUUsaUJBQVcsR0FBWSxLQUFLLENBQUM7UUFhNUIsS0FBSSxDQUFDLHNDQUFzQzthQUN6QyxxQkFBcUIsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3ZDLElBQUksQ0FDSixLQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsS0FBd0M7WUFFbkQsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDNUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDOztJQUNMLENBQUM7Ozs7SUFFRCxxREFBUTs7O0lBQVI7UUFBQSxpQkFzQkM7UUFwQkEsSUFBSSxDQUFDLHNCQUFzQjthQUN6QixjQUFjLEVBQUU7YUFDaEIsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxJQUFZO1lBQ3ZCLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQztZQUM5QixLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7UUFFSixJQUFJLENBQUMsMkJBQTJCO2FBQzlCLGVBQWUsRUFBRTthQUNqQixJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLE9BQXVDO1lBQ2xELEtBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO1lBQzdCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztJQUVMLENBQUM7Ozs7O0lBRUQsbUVBQXNCOzs7O0lBQXRCLFVBQXVCLFdBQW1CO1FBQ3pDLE9BQU8sV0FBVyxLQUFLLFNBQVMsSUFBSSxXQUFXLEtBQUssSUFBSSxDQUFDO0lBQzFELENBQUM7O2dCQXJLRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGlDQUFpQztvQkFDM0MsUUFBUSxFQUFFLDA4SUFvR1Q7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxJQUFJLEVBQUU7d0JBQ0wseUNBQXlDLEVBQUUsTUFBTTtxQkFDakQ7aUJBQ0Q7Ozs7Z0JBdkhpQyxpQkFBaUI7Z0JBRzFDLFdBQVc7Z0JBQ1gsc0NBQXNDO2dCQUl0QyxpQ0FBaUM7Z0JBSGpDLDZCQUE2Qjs7OzBCQXFIcEMsS0FBSzs7SUF1RFAseUNBQUM7Q0FBQSxBQXRLRCxDQTZHd0QsY0FBYyxHQXlEckU7U0F6RFksa0NBQWtDOzs7SUFFOUMscURBQ2lCOztJQUVqQix5REFBNkI7O0lBRTdCLDJEQUE4Qzs7SUFFOUMsMERBQStCOzs7OztJQUVuQiwrREFBNEM7Ozs7O0lBQ3JELHlEQUFnQzs7Ozs7SUFDaEMsb0ZBQXNGOzs7OztJQUN0RixvRUFBaUU7Ozs7O0lBQ2pFLHlFQUEyRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0aW9uVWlFdmVudHNSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9hZ2dyZWdhdGlvbi9zdHJ1Y3R1cmUtYWdncmVnYXRpb24udWktZXZlbnRzLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZWFkTW9kZWxXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi91aS1hcGkvY29tcG9zaXRpb24ucmVhZC1tb2RlbC13YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRpb25zQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9hZ2dyZWdhdGlvbi9zdHJ1Y3R1cmUuYWdncmVnYXRpb25zLWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VSZWFkTW9kZWxXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc291cmNlL3N0cnVjdHVyZS1zb3VyY2UucmVhZC1tb2RlbC13YXJlaG91c2UnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtYWdncmVnYXRpb24tcGFuZWwnLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImVuYWJsZWQgJiYgYWdncmVnYXRpb25zICYmICFzb3VyY2VFbXB0eVwiPlxuXG5cdFx0XHQ8ZGl2ICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgaGVhZGVyQ29sdW1uc1wiXG5cdFx0XHRcdCBbc3R5bGUud2lkdGgucHhdPVwiY29sdW1uLndpZHRoXCJcblx0XHRcdFx0IGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1hZ2dyZWdhdGlvbi1jZWxsXCI+XG5cblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImFnZ3JlZ2F0aW9ucyAmJiAhIWFnZ3JlZ2F0aW9ucy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKVwiPlxuXG5cdFx0XHRcdFx0PGRpdiAqbmdJZj1cImlzQWdncmVnYXRlVHlwZVByZXNlbnQoYWdncmVnYXRpb25zLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLmNvdW50KVwiXG5cdFx0XHRcdFx0XHQgY2xhc3M9XCJndWktc3RydWN0dXJlLWFnZ3JlZ2F0aW9uLXZhbHVlXCI+XG5cdFx0XHRcdFx0XHQ8c3Bhbj5Db3VudDwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLWFnZ3JlZ2F0aW9uLXZhbHVlXCI+e3sgYWdncmVnYXRpb25zLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLmNvdW50IH19PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiAqbmdJZj1cImlzQWdncmVnYXRlVHlwZVByZXNlbnQoYWdncmVnYXRpb25zLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLmRpc3RpbmN0KVwiXG5cdFx0XHRcdFx0XHQgY2xhc3M9XCJndWktc3RydWN0dXJlLWFnZ3JlZ2F0aW9uLXZhbHVlXCI+XG5cdFx0XHRcdFx0XHQ8c3BhbiBbZ3VpLXRvb2x0aXBdPVwiJ0Rpc3RpbmN0J1wiPkRpc3Q8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1hZ2dyZWdhdGlvbi12YWx1ZVwiPnt7IGFnZ3JlZ2F0aW9ucy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5kaXN0aW5jdCB9fTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgKm5nSWY9XCIgaXNBZ2dyZWdhdGVUeXBlUHJlc2VudChhZ2dyZWdhdGlvbnMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkuc3VtKVwiXG5cdFx0XHRcdFx0XHQgY2xhc3M9XCJndWktc3RydWN0dXJlLWFnZ3JlZ2F0aW9uLXZhbHVlXCI+XG5cblx0XHRcdFx0XHRcdDxzcGFuPlxuXHRcdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0XHQ8c3BhbiBbZ3VpLXRvb2x0aXBdPVwiJ1N1bSdcIiAtLT5cblx0XHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdFx0XHQgIGNsYXNzPVwiZ3VpLW1hdGgtc3ltYm9sXCI+JnN1bTs8L3NwYW4+LS0+XG5cdFx0XHRcdFx0XHRcdFN1bVxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJndWktYWdncmVnYXRpb24tdmFsdWVcIj57eyBhZ2dyZWdhdGlvbnMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkuc3VtIH19PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiAqbmdJZj1cImlzQWdncmVnYXRlVHlwZVByZXNlbnQoYWdncmVnYXRpb25zLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLmF2ZXJhZ2UpXCJcblx0XHRcdFx0XHRcdCBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtYWdncmVnYXRpb24tdmFsdWVcIj5cblxuXHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdDxkaXYgW2d1aS10b29sdGlwXT1cIidBdmVyYWdlJ1wiLS0+XG5cdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0XHQgY2xhc3M9XCJndWktbWVhblwiPi0tPlxuXHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdFx0PHNwYW4+Xzwvc3Bhbj48c3Bhbj5YPC9zcGFuPi0tPlxuXHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdDwvZGl2Pi0tPlxuXHRcdFx0XHRcdFx0PHNwYW4gW2d1aS10b29sdGlwXT1cIidBdmVyYWdlJ1wiPkF2Zzwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLWFnZ3JlZ2F0aW9uLXZhbHVlXCI+e3sgYWdncmVnYXRpb25zLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLmF2ZXJhZ2UgfX08L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2ICpuZ0lmPVwiIGlzQWdncmVnYXRlVHlwZVByZXNlbnQoYWdncmVnYXRpb25zLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLm1pbilcIlxuXHRcdFx0XHRcdFx0IGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1hZ2dyZWdhdGlvbi12YWx1ZVwiPlxuXG5cdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0PGRpdiBbZ3VpLXRvb2x0aXBdPVwiJ01pbidcIj4tLT5cblx0XHRcdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLW1hdGgtc3ltYm9sXCI+JmFuZDs8L3NwYW4+LS0+XG5cdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0PC9kaXY+LS0+XG5cdFx0XHRcdFx0XHQ8c3BhbiBbZ3VpLXRvb2x0aXBdPVwiJ01pbidcIj5cblx0XHRcdFx0XHRcdFx0TWluXG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLWFnZ3JlZ2F0aW9uLXZhbHVlXCI+e3sgYWdncmVnYXRpb25zLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLm1pbiB9fTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgKm5nSWY9XCIgaXNBZ2dyZWdhdGVUeXBlUHJlc2VudChhZ2dyZWdhdGlvbnMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkubWF4KVwiXG5cdFx0XHRcdFx0XHQgY2xhc3M9XCJndWktc3RydWN0dXJlLWFnZ3JlZ2F0aW9uLXZhbHVlXCI+XG5cblx0XHRcdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHQ8ZGl2IFtndWktdG9vbHRpcF09XCInTWF4J1wiPi0tPlxuXHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJndWktbWF0aC1zeW1ib2xcIj4mb3I7PC9zcGFuPi0tPlxuXHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdDwvZGl2Pi0tPlxuXG5cdFx0XHRcdFx0XHQ8c3BhbiBbZ3VpLXRvb2x0aXBdPVwiJ01heCdcIj5cblx0XHRcdFx0XHRcdFx0TWF4XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1hZ2dyZWdhdGlvbi12YWx1ZVwiPnt7IGFnZ3JlZ2F0aW9ucy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5tYXggfX08L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2ICpuZ0lmPVwiaXNBZ2dyZWdhdGVUeXBlUHJlc2VudChhZ2dyZWdhdGlvbnMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkubWVkaWFuKVwiXG5cdFx0XHRcdFx0XHQgY2xhc3M9XCJndWktc3RydWN0dXJlLWFnZ3JlZ2F0aW9uLXZhbHVlXCI+XG5cblx0XHRcdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHQ8ZGl2IFtndWktdG9vbHRpcF09XCInTWVkaWFuJ1wiLS0+XG5cdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0XHQgY2xhc3M9XCJndWktbWVkaWFuXCI+LS0+XG5cdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0XHQ8c3Bhbj5+PC9zcGFuPi0tPlxuXHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdFx0PHNwYW4+WDwvc3Bhbj4tLT5cblx0XHRcdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHQ8L2Rpdj4tLT5cblxuXHRcdFx0XHRcdFx0PHNwYW4gW2d1aS10b29sdGlwXT1cIidNZWRpYW4nXCI+TWVkPC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJndWktYWdncmVnYXRpb24tdmFsdWVcIj57eyBhZ2dyZWdhdGlvbnMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkubWVkaWFuIH19PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiAqbmdJZj1cImlzQWdncmVnYXRlVHlwZVByZXNlbnQoYWdncmVnYXRpb25zLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLnRydXRoeSlcIlxuXHRcdFx0XHRcdFx0IGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1hZ2dyZWdhdGlvbi12YWx1ZVwiPlxuXHRcdFx0XHRcdFx0PHNwYW4+VHJ1dGh5PC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJndWktYWdncmVnYXRpb24tdmFsdWVcIj57eyBhZ2dyZWdhdGlvbnMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkudHJ1dGh5IH19PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiAqbmdJZj1cImlzQWdncmVnYXRlVHlwZVByZXNlbnQoYWdncmVnYXRpb25zLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLmZhbHN5KVwiXG5cdFx0XHRcdFx0XHQgY2xhc3M9XCJndWktc3RydWN0dXJlLWFnZ3JlZ2F0aW9uLXZhbHVlXCI+XG5cdFx0XHRcdFx0XHQ8c3Bhbj5GYWxzeTwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLWFnZ3JlZ2F0aW9uLXZhbHVlXCI+e3sgYWdncmVnYXRpb25zLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLmZhbHN5IH19PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDwvbmctY29udGFpbmVyPlxuXHRcdFx0PC9kaXY+XG5cblx0XHQ8L25nLWNvbnRhaW5lcj5cblxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLXN0cnVjdHVyZS1hZ2dyZWdhdGlvbi1wYW5lbF0nOiAndHJ1ZSdcblx0fVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVBZ2dyZWdhdGlvblBhbmVsQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdGVuYWJsZWQ6IGJvb2xlYW47XG5cblx0c291cmNlRW1wdHk6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRoZWFkZXJDb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD47XG5cblx0YWdncmVnYXRpb25zOiBNYXA8c3RyaW5nLCBhbnk+O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVBZ2dyZWdhdGlvblVpRXZlbnRzUmVwb3NpdG9yeTogU3RydWN0dXJlQWdncmVnYXRpb25VaUV2ZW50c1JlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgc291cmNlUmVhZE1vZGVsU2VydmljZTogU3RydWN0dXJlU291cmNlUmVhZE1vZGVsV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZTogQ29tcG9zaXRpb25SZWFkTW9kZWxXYXJlaG91c2UpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGlvblVpRXZlbnRzUmVwb3NpdG9yeVxuXHRcdFx0Lm9uQWdncmVnYXRpb25zQ2hhbmdlZCh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGV2ZW50OiBTdHJ1Y3R1cmVBZ2dyZWdhdGlvbnNDaGFuZ2VkRXZlbnQpID0+IHtcblxuXHRcdFx0XHR0aGlzLmFnZ3JlZ2F0aW9ucyA9IGV2ZW50LmdldEFnZ3JlZ2F0aW9ucygpO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLnNvdXJjZVJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vbkVudGl0aWVzU2l6ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoc2l6ZTogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMuc291cmNlRW1wdHkgPSBzaXplID09PSAwO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vbkhlYWRlckNvbHVtbnMoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PikgPT4ge1xuXHRcdFx0XHR0aGlzLmhlYWRlckNvbHVtbnMgPSBjb2x1bW5zO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdH1cblxuXHRpc0FnZ3JlZ2F0ZVR5cGVQcmVzZW50KGFnZ3JlZ2F0aW9uOiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gYWdncmVnYXRpb24gIT09IHVuZGVmaW5lZCAmJiBhZ2dyZWdhdGlvbiAhPT0gbnVsbDtcblx0fVxufVxuIl19