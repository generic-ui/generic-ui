/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { StructureId } from '../../../domain/structure-id';
import { StructureAggregationUiEventsRepository } from '../../../ui-api/structure/aggregation/structure.aggregation.ui-events-repository';
import { CompositionReadModelService } from '../../../ui-api/composition/composition-read-model.service';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
var StructureAggregationPanelComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureAggregationPanelComponent, _super);
    function StructureAggregationPanelComponent(changeDetectorRef, structureId, structureAggregationUiEventsRepository, compositionQueryService) {
        var _this = _super.call(this) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureId = structureId;
        _this.structureAggregationUiEventsRepository = structureAggregationUiEventsRepository;
        _this.compositionQueryService = compositionQueryService;
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
        this.compositionQueryService
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
                    template: "\n\n\t\t<ng-container *ngIf=\"enabled && aggregations\">\n\n\t\t\t<div *ngFor=\"let column of headerColumns\"\n\t\t\t\t [style.width.px]=\"column.width\"\n\t\t\t\t class=\"gui-header-cell gui-structure-aggregation-cell\">\n\n\t\t\t\t<ng-container *ngIf=\"aggregations && !!aggregations.get(column.getFieldId().getId())\">\n\n\t\t\t\t\t<div *ngIf=\"isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).count)\" class=\"gui-structure-aggregation-value\">\n\t\t\t\t\t\tCount: <span>{{ aggregations.get(column.getFieldId().getId()).count }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\"isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).distinct)\" class=\"gui-structure-aggregation-value\">\n\t\t\t\t\t\tDistinct: <span>{{ aggregations.get(column.getFieldId().getId()).distinct }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\" isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).sum)\" class=\"gui-structure-aggregation-value\">\n\n\t\t\t\t\t\t<div><span class=\"gui-math-symbol\">&sum;</span> Sum</div>\n\t\t\t\t\t\t<span>{{ aggregations.get(column.getFieldId().getId()).sum }}</span></div>\n\n\t\t\t\t\t<div *ngIf=\"isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).average)\" class=\"gui-structure-aggregation-value\">\n\n\t\t\t\t\t\t<div class=\"gui-mean\"><span>_</span><span>X Average</span></div>\n\t\t\t\t\t\t<span>{{ aggregations.get(column.getFieldId().getId()).average }}</span></div>\n\n\t\t\t\t\t<div *ngIf=\" isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).min)\" class=\"gui-structure-aggregation-value\">\n\n\t\t\t\t\t\t<div><span class=\"gui-math-symbol\">&and;</span> Min</div>\n\t\t\t\t\t\t<span>{{ aggregations.get(column.getFieldId().getId()).min }}</span></div>\n\n\t\t\t\t\t<div *ngIf=\" isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).max)\" class=\"gui-structure-aggregation-value\">\n\n\t\t\t\t\t\t<div><span class=\"gui-math-symbol\">&or;</span> Max</div>\n\t\t\t\t\t\t<span>{{ aggregations.get(column.getFieldId().getId()).max }}</span></div>\n\n\t\t\t\t\t<div *ngIf=\"isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).median)\" class=\"gui-structure-aggregation-value\">\n\n\t\t\t\t\t\t<div class=\"gui-median\"><span>~</span><span>X Median</span></div>\n\t\t\t\t\t\t<span>{{ aggregations.get(column.getFieldId().getId()).median }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\"isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).truthy)\" class=\"gui-structure-aggregation-value\">\n\t\t\t\t\t\tTruthy: <span>{{ aggregations.get(column.getFieldId().getId()).truthy }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\"isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).falsy)\" class=\"gui-structure-aggregation-value\">\n\t\t\t\t\t\tFalsy: <span>{{ aggregations.get(column.getFieldId().getId()).falsy }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t</ng-container>\n\t\t\t</div>\n\n\t\t</ng-container>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureAggregationPanelComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: StructureId },
        { type: StructureAggregationUiEventsRepository },
        { type: CompositionReadModelService }
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
    StructureAggregationPanelComponent.prototype.compositionQueryService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0aW9uLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9wYW5lbC9hZ2dyZWdhdGlvbi9zdHJ1Y3R1cmUuYWdncmVnYXRpb24tcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHaEgsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLGtGQUFrRixDQUFDO0FBQzFJLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBRXpHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUczRTtJQStEd0QsOERBQWM7SUFTckUsNENBQW9CLGlCQUFvQyxFQUM3QyxXQUF3QixFQUN4QixzQ0FBOEUsRUFDckUsdUJBQW9EO1FBSHhFLFlBSUMsaUJBQU8sU0FZUDtRQWhCbUIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3QyxpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qiw0Q0FBc0MsR0FBdEMsc0NBQXNDLENBQXdDO1FBQ3JFLDZCQUF1QixHQUF2Qix1QkFBdUIsQ0FBNkI7UUFHdkUsS0FBSSxDQUFDLHNDQUFzQzthQUN6QyxxQkFBcUIsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3ZDLElBQUksQ0FDSixLQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsS0FBd0M7WUFFbkQsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDNUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDOztJQUNMLENBQUM7Ozs7SUFFRCxxREFBUTs7O0lBQVI7UUFBQSxpQkFZQztRQVZBLElBQUksQ0FBQyx1QkFBdUI7YUFDMUIsZUFBZSxFQUFFO2FBQ2pCLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsT0FBdUM7WUFDbEQsS0FBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7WUFDN0IsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBRUwsQ0FBQzs7Ozs7SUFFRCxtRUFBc0I7Ozs7SUFBdEIsVUFBdUIsV0FBbUI7UUFDekMsT0FBTyxXQUFXLEtBQUssU0FBUyxJQUFJLFdBQVcsS0FBSyxJQUFJLENBQUM7SUFDMUQsQ0FBQzs7Z0JBMUdELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsaUNBQWlDO29CQUMzQyxRQUFRLEVBQUUsbzhGQXlEVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDOzs7O2dCQXhFaUMsaUJBQWlCO2dCQUcxQyxXQUFXO2dCQUNYLHNDQUFzQztnQkFDdEMsMkJBQTJCOzs7MEJBc0VsQyxLQUFLOztJQTBDUCx5Q0FBQztDQUFBLEFBM0dELENBK0R3RCxjQUFjLEdBNENyRTtTQTVDWSxrQ0FBa0M7OztJQUU5QyxxREFDaUI7O0lBRWpCLDJEQUE4Qzs7SUFFOUMsMERBQStCOzs7OztJQUVuQiwrREFBNEM7Ozs7O0lBQ3JELHlEQUFnQzs7Ozs7SUFDaEMsb0ZBQXNGOzs7OztJQUN0RixxRUFBcUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRpb25VaUV2ZW50c1JlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlL2FnZ3JlZ2F0aW9uL3N0cnVjdHVyZS5hZ2dyZWdhdGlvbi51aS1ldmVudHMtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvY29tcG9zaXRpb24vY29tcG9zaXRpb24tcmVhZC1tb2RlbC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0aW9uc0NoYW5nZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9hZ2dyZWdhdGlvbi9zdHJ1Y3R1cmUuYWdncmVnYXRpb25zLWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1hZ2dyZWdhdGlvbi1wYW5lbCcsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiZW5hYmxlZCAmJiBhZ2dyZWdhdGlvbnNcIj5cblxuXHRcdFx0PGRpdiAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGhlYWRlckNvbHVtbnNcIlxuXHRcdFx0XHQgW3N0eWxlLndpZHRoLnB4XT1cImNvbHVtbi53aWR0aFwiXG5cdFx0XHRcdCBjbGFzcz1cImd1aS1oZWFkZXItY2VsbCBndWktc3RydWN0dXJlLWFnZ3JlZ2F0aW9uLWNlbGxcIj5cblxuXHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiYWdncmVnYXRpb25zICYmICEhYWdncmVnYXRpb25zLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpXCI+XG5cblx0XHRcdFx0XHQ8ZGl2ICpuZ0lmPVwiaXNBZ2dyZWdhdGVUeXBlUHJlc2VudChhZ2dyZWdhdGlvbnMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkuY291bnQpXCIgY2xhc3M9XCJndWktc3RydWN0dXJlLWFnZ3JlZ2F0aW9uLXZhbHVlXCI+XG5cdFx0XHRcdFx0XHRDb3VudDogPHNwYW4+e3sgYWdncmVnYXRpb25zLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLmNvdW50IH19PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiAqbmdJZj1cImlzQWdncmVnYXRlVHlwZVByZXNlbnQoYWdncmVnYXRpb25zLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLmRpc3RpbmN0KVwiIGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1hZ2dyZWdhdGlvbi12YWx1ZVwiPlxuXHRcdFx0XHRcdFx0RGlzdGluY3Q6IDxzcGFuPnt7IGFnZ3JlZ2F0aW9ucy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5kaXN0aW5jdCB9fTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgKm5nSWY9XCIgaXNBZ2dyZWdhdGVUeXBlUHJlc2VudChhZ2dyZWdhdGlvbnMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkuc3VtKVwiIGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1hZ2dyZWdhdGlvbi12YWx1ZVwiPlxuXG5cdFx0XHRcdFx0XHQ8ZGl2PjxzcGFuIGNsYXNzPVwiZ3VpLW1hdGgtc3ltYm9sXCI+JnN1bTs8L3NwYW4+IFN1bTwvZGl2PlxuXHRcdFx0XHRcdFx0PHNwYW4+e3sgYWdncmVnYXRpb25zLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLnN1bSB9fTwvc3Bhbj48L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgKm5nSWY9XCJpc0FnZ3JlZ2F0ZVR5cGVQcmVzZW50KGFnZ3JlZ2F0aW9ucy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5hdmVyYWdlKVwiIGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1hZ2dyZWdhdGlvbi12YWx1ZVwiPlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLW1lYW5cIj48c3Bhbj5fPC9zcGFuPjxzcGFuPlggQXZlcmFnZTwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0XHRcdDxzcGFuPnt7IGFnZ3JlZ2F0aW9ucy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5hdmVyYWdlIH19PC9zcGFuPjwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiAqbmdJZj1cIiBpc0FnZ3JlZ2F0ZVR5cGVQcmVzZW50KGFnZ3JlZ2F0aW9ucy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5taW4pXCIgY2xhc3M9XCJndWktc3RydWN0dXJlLWFnZ3JlZ2F0aW9uLXZhbHVlXCI+XG5cblx0XHRcdFx0XHRcdDxkaXY+PHNwYW4gY2xhc3M9XCJndWktbWF0aC1zeW1ib2xcIj4mYW5kOzwvc3Bhbj4gTWluPC9kaXY+XG5cdFx0XHRcdFx0XHQ8c3Bhbj57eyBhZ2dyZWdhdGlvbnMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkubWluIH19PC9zcGFuPjwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiAqbmdJZj1cIiBpc0FnZ3JlZ2F0ZVR5cGVQcmVzZW50KGFnZ3JlZ2F0aW9ucy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5tYXgpXCIgY2xhc3M9XCJndWktc3RydWN0dXJlLWFnZ3JlZ2F0aW9uLXZhbHVlXCI+XG5cblx0XHRcdFx0XHRcdDxkaXY+PHNwYW4gY2xhc3M9XCJndWktbWF0aC1zeW1ib2xcIj4mb3I7PC9zcGFuPiBNYXg8L2Rpdj5cblx0XHRcdFx0XHRcdDxzcGFuPnt7IGFnZ3JlZ2F0aW9ucy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5tYXggfX08L3NwYW4+PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2ICpuZ0lmPVwiaXNBZ2dyZWdhdGVUeXBlUHJlc2VudChhZ2dyZWdhdGlvbnMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkubWVkaWFuKVwiIGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1hZ2dyZWdhdGlvbi12YWx1ZVwiPlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLW1lZGlhblwiPjxzcGFuPn48L3NwYW4+PHNwYW4+WCBNZWRpYW48L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8c3Bhbj57eyBhZ2dyZWdhdGlvbnMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkubWVkaWFuIH19PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiAqbmdJZj1cImlzQWdncmVnYXRlVHlwZVByZXNlbnQoYWdncmVnYXRpb25zLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLnRydXRoeSlcIiBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtYWdncmVnYXRpb24tdmFsdWVcIj5cblx0XHRcdFx0XHRcdFRydXRoeTogPHNwYW4+e3sgYWdncmVnYXRpb25zLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLnRydXRoeSB9fTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgKm5nSWY9XCJpc0FnZ3JlZ2F0ZVR5cGVQcmVzZW50KGFnZ3JlZ2F0aW9ucy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5mYWxzeSlcIiBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtYWdncmVnYXRpb24tdmFsdWVcIj5cblx0XHRcdFx0XHRcdEZhbHN5OiA8c3Bhbj57eyBhZ2dyZWdhdGlvbnMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkuZmFsc3kgfX08L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PC9uZy1jb250YWluZXI+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdDwvbmctY29udGFpbmVyPlxuXG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUFnZ3JlZ2F0aW9uUGFuZWxDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0ZW5hYmxlZDogYm9vbGVhbjtcblxuXHRoZWFkZXJDb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD47XG5cblx0YWdncmVnYXRpb25zOiBNYXA8c3RyaW5nLCBhbnk+O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVBZ2dyZWdhdGlvblVpRXZlbnRzUmVwb3NpdG9yeTogU3RydWN0dXJlQWdncmVnYXRpb25VaUV2ZW50c1JlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25RdWVyeVNlcnZpY2U6IENvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZSkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0aW9uVWlFdmVudHNSZXBvc2l0b3J5XG5cdFx0XHQub25BZ2dyZWdhdGlvbnNDaGFuZ2VkKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZXZlbnQ6IFN0cnVjdHVyZUFnZ3JlZ2F0aW9uc0NoYW5nZWRFdmVudCkgPT4ge1xuXG5cdFx0XHRcdHRoaXMuYWdncmVnYXRpb25zID0gZXZlbnQuZ2V0QWdncmVnYXRpb25zKCk7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuY29tcG9zaXRpb25RdWVyeVNlcnZpY2Vcblx0XHRcdC5vbkhlYWRlckNvbHVtbnMoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PikgPT4ge1xuXHRcdFx0XHR0aGlzLmhlYWRlckNvbHVtbnMgPSBjb2x1bW5zO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdH1cblxuXHRpc0FnZ3JlZ2F0ZVR5cGVQcmVzZW50KGFnZ3JlZ2F0aW9uOiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gYWdncmVnYXRpb24gIT09IHVuZGVmaW5lZCAmJiBhZ2dyZWdhdGlvbiAhPT0gbnVsbDtcblx0fVxufVxuIl19