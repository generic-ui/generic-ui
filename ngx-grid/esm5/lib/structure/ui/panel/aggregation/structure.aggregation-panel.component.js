/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { StructureId } from '../../../domain/structure-id';
import { StructureAggregationUiEventsRepository } from '../../../ui-api/structure/aggregation/structure.aggregation.ui-events-repository';
import { CompositionQueryService } from '../../api/composition/composition.query-service';
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
            .selectAggregationsChanged(_this.structureId)
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
            .selectHeaderColumns()
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
        { type: CompositionQueryService }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0aW9uLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9wYW5lbC9hZ2dyZWdhdGlvbi9zdHJ1Y3R1cmUuYWdncmVnYXRpb24tcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHaEgsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLGtGQUFrRixDQUFDO0FBQzFJLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBRTFGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUczRTtJQStEd0QsOERBQWM7SUFTckUsNENBQW9CLGlCQUFvQyxFQUM3QyxXQUF3QixFQUN4QixzQ0FBOEUsRUFDckUsdUJBQWdEO1FBSHBFLFlBSUMsaUJBQU8sU0FZUDtRQWhCbUIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3QyxpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qiw0Q0FBc0MsR0FBdEMsc0NBQXNDLENBQXdDO1FBQ3JFLDZCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFHbkUsS0FBSSxDQUFDLHNDQUFzQzthQUN6Qyx5QkFBeUIsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDO2FBQzNDLElBQUksQ0FDSixLQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsS0FBd0M7WUFFbkQsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDNUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDOztJQUNMLENBQUM7Ozs7SUFFRCxxREFBUTs7O0lBQVI7UUFBQSxpQkFZQztRQVZBLElBQUksQ0FBQyx1QkFBdUI7YUFDMUIsbUJBQW1CLEVBQUU7YUFDckIsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxPQUF1QztZQUNsRCxLQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztZQUM3QixLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFFTCxDQUFDOzs7OztJQUVELG1FQUFzQjs7OztJQUF0QixVQUF1QixXQUFtQjtRQUN6QyxPQUFPLFdBQVcsS0FBSyxTQUFTLElBQUksV0FBVyxLQUFLLElBQUksQ0FBQztJQUMxRCxDQUFDOztnQkExR0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxpQ0FBaUM7b0JBQzNDLFFBQVEsRUFBRSxvOEZBeURUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7Ozs7Z0JBeEVpQyxpQkFBaUI7Z0JBRzFDLFdBQVc7Z0JBQ1gsc0NBQXNDO2dCQUN0Qyx1QkFBdUI7OzswQkFzRTlCLEtBQUs7O0lBMENQLHlDQUFDO0NBQUEsQUEzR0QsQ0ErRHdELGNBQWMsR0E0Q3JFO1NBNUNZLGtDQUFrQzs7O0lBRTlDLHFEQUNpQjs7SUFFakIsMkRBQThDOztJQUU5QywwREFBK0I7Ozs7O0lBRW5CLCtEQUE0Qzs7Ozs7SUFDckQseURBQWdDOzs7OztJQUNoQyxvRkFBc0Y7Ozs7O0lBQ3RGLHFFQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vcXVlcnkvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRpb25VaUV2ZW50c1JlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlL2FnZ3JlZ2F0aW9uL3N0cnVjdHVyZS5hZ2dyZWdhdGlvbi51aS1ldmVudHMtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblF1ZXJ5U2VydmljZSB9IGZyb20gJy4uLy4uL2FwaS9jb21wb3NpdGlvbi9jb21wb3NpdGlvbi5xdWVyeS1zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0aW9uc0NoYW5nZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9hZ2dyZWdhdGlvbi9zdHJ1Y3R1cmUuYWdncmVnYXRpb25zLWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1hZ2dyZWdhdGlvbi1wYW5lbCcsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiZW5hYmxlZCAmJiBhZ2dyZWdhdGlvbnNcIj5cblxuXHRcdFx0PGRpdiAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGhlYWRlckNvbHVtbnNcIlxuXHRcdFx0XHQgW3N0eWxlLndpZHRoLnB4XT1cImNvbHVtbi53aWR0aFwiXG5cdFx0XHRcdCBjbGFzcz1cImd1aS1oZWFkZXItY2VsbCBndWktc3RydWN0dXJlLWFnZ3JlZ2F0aW9uLWNlbGxcIj5cblxuXHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiYWdncmVnYXRpb25zICYmICEhYWdncmVnYXRpb25zLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpXCI+XG5cblx0XHRcdFx0XHQ8ZGl2ICpuZ0lmPVwiaXNBZ2dyZWdhdGVUeXBlUHJlc2VudChhZ2dyZWdhdGlvbnMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkuY291bnQpXCIgY2xhc3M9XCJndWktc3RydWN0dXJlLWFnZ3JlZ2F0aW9uLXZhbHVlXCI+XG5cdFx0XHRcdFx0XHRDb3VudDogPHNwYW4+e3sgYWdncmVnYXRpb25zLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLmNvdW50IH19PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiAqbmdJZj1cImlzQWdncmVnYXRlVHlwZVByZXNlbnQoYWdncmVnYXRpb25zLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLmRpc3RpbmN0KVwiIGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1hZ2dyZWdhdGlvbi12YWx1ZVwiPlxuXHRcdFx0XHRcdFx0RGlzdGluY3Q6IDxzcGFuPnt7IGFnZ3JlZ2F0aW9ucy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5kaXN0aW5jdCB9fTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgKm5nSWY9XCIgaXNBZ2dyZWdhdGVUeXBlUHJlc2VudChhZ2dyZWdhdGlvbnMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkuc3VtKVwiIGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1hZ2dyZWdhdGlvbi12YWx1ZVwiPlxuXG5cdFx0XHRcdFx0XHQ8ZGl2PjxzcGFuIGNsYXNzPVwiZ3VpLW1hdGgtc3ltYm9sXCI+JnN1bTs8L3NwYW4+IFN1bTwvZGl2PlxuXHRcdFx0XHRcdFx0PHNwYW4+e3sgYWdncmVnYXRpb25zLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLnN1bSB9fTwvc3Bhbj48L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgKm5nSWY9XCJpc0FnZ3JlZ2F0ZVR5cGVQcmVzZW50KGFnZ3JlZ2F0aW9ucy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5hdmVyYWdlKVwiIGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1hZ2dyZWdhdGlvbi12YWx1ZVwiPlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLW1lYW5cIj48c3Bhbj5fPC9zcGFuPjxzcGFuPlggQXZlcmFnZTwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0XHRcdDxzcGFuPnt7IGFnZ3JlZ2F0aW9ucy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5hdmVyYWdlIH19PC9zcGFuPjwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiAqbmdJZj1cIiBpc0FnZ3JlZ2F0ZVR5cGVQcmVzZW50KGFnZ3JlZ2F0aW9ucy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5taW4pXCIgY2xhc3M9XCJndWktc3RydWN0dXJlLWFnZ3JlZ2F0aW9uLXZhbHVlXCI+XG5cblx0XHRcdFx0XHRcdDxkaXY+PHNwYW4gY2xhc3M9XCJndWktbWF0aC1zeW1ib2xcIj4mYW5kOzwvc3Bhbj4gTWluPC9kaXY+XG5cdFx0XHRcdFx0XHQ8c3Bhbj57eyBhZ2dyZWdhdGlvbnMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkubWluIH19PC9zcGFuPjwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiAqbmdJZj1cIiBpc0FnZ3JlZ2F0ZVR5cGVQcmVzZW50KGFnZ3JlZ2F0aW9ucy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5tYXgpXCIgY2xhc3M9XCJndWktc3RydWN0dXJlLWFnZ3JlZ2F0aW9uLXZhbHVlXCI+XG5cblx0XHRcdFx0XHRcdDxkaXY+PHNwYW4gY2xhc3M9XCJndWktbWF0aC1zeW1ib2xcIj4mb3I7PC9zcGFuPiBNYXg8L2Rpdj5cblx0XHRcdFx0XHRcdDxzcGFuPnt7IGFnZ3JlZ2F0aW9ucy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5tYXggfX08L3NwYW4+PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2ICpuZ0lmPVwiaXNBZ2dyZWdhdGVUeXBlUHJlc2VudChhZ2dyZWdhdGlvbnMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkubWVkaWFuKVwiIGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1hZ2dyZWdhdGlvbi12YWx1ZVwiPlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLW1lZGlhblwiPjxzcGFuPn48L3NwYW4+PHNwYW4+WCBNZWRpYW48L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8c3Bhbj57eyBhZ2dyZWdhdGlvbnMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkubWVkaWFuIH19PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiAqbmdJZj1cImlzQWdncmVnYXRlVHlwZVByZXNlbnQoYWdncmVnYXRpb25zLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLnRydXRoeSlcIiBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtYWdncmVnYXRpb24tdmFsdWVcIj5cblx0XHRcdFx0XHRcdFRydXRoeTogPHNwYW4+e3sgYWdncmVnYXRpb25zLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLnRydXRoeSB9fTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgKm5nSWY9XCJpc0FnZ3JlZ2F0ZVR5cGVQcmVzZW50KGFnZ3JlZ2F0aW9ucy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5mYWxzeSlcIiBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtYWdncmVnYXRpb24tdmFsdWVcIj5cblx0XHRcdFx0XHRcdEZhbHN5OiA8c3Bhbj57eyBhZ2dyZWdhdGlvbnMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkuZmFsc3kgfX08L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PC9uZy1jb250YWluZXI+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdDwvbmctY29udGFpbmVyPlxuXG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUFnZ3JlZ2F0aW9uUGFuZWxDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0ZW5hYmxlZDogYm9vbGVhbjtcblxuXHRoZWFkZXJDb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD47XG5cblx0YWdncmVnYXRpb25zOiBNYXA8c3RyaW5nLCBhbnk+O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVBZ2dyZWdhdGlvblVpRXZlbnRzUmVwb3NpdG9yeTogU3RydWN0dXJlQWdncmVnYXRpb25VaUV2ZW50c1JlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25RdWVyeVNlcnZpY2U6IENvbXBvc2l0aW9uUXVlcnlTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQWdncmVnYXRpb25VaUV2ZW50c1JlcG9zaXRvcnlcblx0XHRcdC5zZWxlY3RBZ2dyZWdhdGlvbnNDaGFuZ2VkKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZXZlbnQ6IFN0cnVjdHVyZUFnZ3JlZ2F0aW9uc0NoYW5nZWRFdmVudCkgPT4ge1xuXG5cdFx0XHRcdHRoaXMuYWdncmVnYXRpb25zID0gZXZlbnQuZ2V0QWdncmVnYXRpb25zKCk7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuY29tcG9zaXRpb25RdWVyeVNlcnZpY2Vcblx0XHRcdC5zZWxlY3RIZWFkZXJDb2x1bW5zKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4pID0+IHtcblx0XHRcdFx0dGhpcy5oZWFkZXJDb2x1bW5zID0gY29sdW1ucztcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHR9XG5cblx0aXNBZ2dyZWdhdGVUeXBlUHJlc2VudChhZ2dyZWdhdGlvbjogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGFnZ3JlZ2F0aW9uICE9PSB1bmRlZmluZWQgJiYgYWdncmVnYXRpb24gIT09IG51bGw7XG5cdH1cbn1cbiJdfQ==