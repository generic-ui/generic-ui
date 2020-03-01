/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { StructureId } from '../../../domain/structure-id';
import { StructureAggregationUiEventsRepository } from '../../../ui-api/structure/aggregation/structure.aggregation.ui-events-repository';
import { CompositionReadModelService } from '../../../../composition/ui-api/composition-read-model.service';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { SourceReadModelService } from '../../../ui-api/source/source-read-model.service';
export class StructureAggregationPanelComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} structureId
     * @param {?} structureAggregationUiEventsRepository
     * @param {?} sourceReadModelService
     * @param {?} compositionQueryService
     */
    constructor(changeDetectorRef, structureId, structureAggregationUiEventsRepository, sourceReadModelService, compositionQueryService) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.structureAggregationUiEventsRepository = structureAggregationUiEventsRepository;
        this.sourceReadModelService = sourceReadModelService;
        this.compositionQueryService = compositionQueryService;
        this.sourceEmpty = false;
        this.structureAggregationUiEventsRepository
            .onAggregationsChanged(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.aggregations = event.getAggregations();
            this.changeDetectorRef.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.sourceReadModelService
            .onEntitiesSize()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} size
         * @return {?}
         */
        (size) => {
            this.sourceEmpty = size === 0;
            this.changeDetectorRef.detectChanges();
        }));
        this.compositionQueryService
            .onHeaderColumns()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} columns
         * @return {?}
         */
        (columns) => {
            this.headerColumns = columns;
            this.changeDetectorRef.detectChanges();
        }));
    }
    /**
     * @param {?} aggregation
     * @return {?}
     */
    isAggregateTypePresent(aggregation) {
        return aggregation !== undefined && aggregation !== null;
    }
}
StructureAggregationPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-aggregation-panel',
                template: `

		<ng-container *ngIf="enabled && aggregations && !sourceEmpty">

			<div *ngFor="let column of headerColumns"
				 [style.width.px]="column.width"
				 class="gui-header-cell gui-structure-aggregation-cell">

				<ng-container *ngIf="aggregations && !!aggregations.get(column.getFieldId().getId())">

					<div *ngIf="isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).count)"
						 class="gui-structure-aggregation-value">
						<span>Count</span>
						<span class="gui-aggregation-value">{{ aggregations.get(column.getFieldId().getId()).count }}</span>
					</div>

					<div *ngIf="isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).distinct)"
						 class="gui-structure-aggregation-value">
						<span [gui-tooltip]="'Distinct'">Dist</span>
						<span class="gui-aggregation-value">{{ aggregations.get(column.getFieldId().getId()).distinct }}</span>
					</div>

					<div *ngIf=" isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).sum)"
						 class="gui-structure-aggregation-value">

						<span>
							<!--							<span [gui-tooltip]="'Sum'" -->
							<!--								  class="gui-math-symbol">&sum;</span>-->
							Sum
						</span>
						<span class="gui-aggregation-value">{{ aggregations.get(column.getFieldId().getId()).sum }}</span>
					</div>

					<div *ngIf="isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).average)"
						 class="gui-structure-aggregation-value">

						<!--						<div [gui-tooltip]="'Average'"-->
						<!--							 class="gui-mean">-->
						<!--							<span>_</span><span>X</span>-->
						<!--						</div>-->
						<span [gui-tooltip]="'Average'">Avg</span>
						<span class="gui-aggregation-value">{{ aggregations.get(column.getFieldId().getId()).average }}</span>
					</div>

					<div *ngIf=" isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).min)"
						 class="gui-structure-aggregation-value">

						<!--						<div [gui-tooltip]="'Min'">-->
						<!--							<span class="gui-math-symbol">&and;</span>-->
						<!--						</div>-->
						<span [gui-tooltip]="'Min'">
							Min
						</span>

						<span class="gui-aggregation-value">{{ aggregations.get(column.getFieldId().getId()).min }}</span>
					</div>

					<div *ngIf=" isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).max)"
						 class="gui-structure-aggregation-value">

						<!--						<div [gui-tooltip]="'Max'">-->
						<!--							<span class="gui-math-symbol">&or;</span>-->
						<!--						</div>-->

						<span [gui-tooltip]="'Max'">
							Max
						</span>
						<span class="gui-aggregation-value">{{ aggregations.get(column.getFieldId().getId()).max }}</span>
					</div>

					<div *ngIf="isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).median)"
						 class="gui-structure-aggregation-value">

						<!--						<div [gui-tooltip]="'Median'"-->
						<!--							 class="gui-median">-->
						<!--							<span>~</span>-->
						<!--							<span>X</span>-->
						<!--						</div>-->

						<span [gui-tooltip]="'Median'">Med</span>
						<span class="gui-aggregation-value">{{ aggregations.get(column.getFieldId().getId()).median }}</span>
					</div>

					<div *ngIf="isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).truthy)"
						 class="gui-structure-aggregation-value">
						<span>Truthy</span>
						<span class="gui-aggregation-value">{{ aggregations.get(column.getFieldId().getId()).truthy }}</span>
					</div>

					<div *ngIf="isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).falsy)"
						 class="gui-structure-aggregation-value">
						<span>Falsy</span>
						<span class="gui-aggregation-value">{{ aggregations.get(column.getFieldId().getId()).falsy }}</span>
					</div>

				</ng-container>
			</div>

		</ng-container>

	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureAggregationPanelComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: StructureId },
    { type: StructureAggregationUiEventsRepository },
    { type: SourceReadModelService },
    { type: CompositionReadModelService }
];
StructureAggregationPanelComponent.propDecorators = {
    enabled: [{ type: Input }]
};
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
    StructureAggregationPanelComponent.prototype.compositionQueryService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0aW9uLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9wYW5lbC9hZ2dyZWdhdGlvbi9zdHJ1Y3R1cmUuYWdncmVnYXRpb24tcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdoSCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sa0ZBQWtGLENBQUM7QUFDMUksT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFFNUcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBNkcxRixNQUFNLE9BQU8sa0NBQW1DLFNBQVEsY0FBYzs7Ozs7Ozs7SUFXckUsWUFBb0IsaUJBQW9DLEVBQzdDLFdBQXdCLEVBQ3hCLHNDQUE4RSxFQUM5RSxzQkFBOEMsRUFDckMsdUJBQW9EO1FBQ3ZFLEtBQUssRUFBRSxDQUFDO1FBTFcsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QiwyQ0FBc0MsR0FBdEMsc0NBQXNDLENBQXdDO1FBQzlFLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDckMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUE2QjtRQVZ4RSxnQkFBVyxHQUFZLEtBQUssQ0FBQztRQWE1QixJQUFJLENBQUMsc0NBQXNDO2FBQ3pDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDdkMsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxLQUF3QyxFQUFFLEVBQUU7WUFFdkQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDNUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFFBQVE7UUFFUCxJQUFJLENBQUMsc0JBQXNCO2FBQ3pCLGNBQWMsRUFBRTthQUNoQixJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxDQUFDLElBQVksRUFBRSxFQUFFO1lBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7UUFFSixJQUFJLENBQUMsdUJBQXVCO2FBQzFCLGVBQWUsRUFBRTthQUNqQixJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxDQUFDLE9BQXVDLEVBQUUsRUFBRTtZQUN0RCxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztZQUM3QixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFFTCxDQUFDOzs7OztJQUVELHNCQUFzQixDQUFDLFdBQW1CO1FBQ3pDLE9BQU8sV0FBVyxLQUFLLFNBQVMsSUFBSSxXQUFXLEtBQUssSUFBSSxDQUFDO0lBQzFELENBQUM7OztZQWxLRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGlDQUFpQztnQkFDM0MsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBb0dUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7OztZQXBIaUMsaUJBQWlCO1lBRzFDLFdBQVc7WUFDWCxzQ0FBc0M7WUFJdEMsc0JBQXNCO1lBSHRCLDJCQUEyQjs7O3NCQWtIbEMsS0FBSzs7OztJQUFOLHFEQUNpQjs7SUFFakIseURBQTZCOztJQUU3QiwyREFBOEM7O0lBRTlDLDBEQUErQjs7Ozs7SUFFbkIsK0RBQTRDOzs7OztJQUNyRCx5REFBZ0M7Ozs7O0lBQ2hDLG9GQUFzRjs7Ozs7SUFDdEYsb0VBQXNEOzs7OztJQUN0RCxxRUFBcUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRpb25VaUV2ZW50c1JlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlL2FnZ3JlZ2F0aW9uL3N0cnVjdHVyZS5hZ2dyZWdhdGlvbi51aS1ldmVudHMtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi91aS1hcGkvY29tcG9zaXRpb24tcmVhZC1tb2RlbC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0aW9uc0NoYW5nZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9hZ2dyZWdhdGlvbi9zdHJ1Y3R1cmUuYWdncmVnYXRpb25zLWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb3VyY2VSZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3NvdXJjZS9zb3VyY2UtcmVhZC1tb2RlbC5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLWFnZ3JlZ2F0aW9uLXBhbmVsJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJlbmFibGVkICYmIGFnZ3JlZ2F0aW9ucyAmJiAhc291cmNlRW1wdHlcIj5cblxuXHRcdFx0PGRpdiAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGhlYWRlckNvbHVtbnNcIlxuXHRcdFx0XHQgW3N0eWxlLndpZHRoLnB4XT1cImNvbHVtbi53aWR0aFwiXG5cdFx0XHRcdCBjbGFzcz1cImd1aS1oZWFkZXItY2VsbCBndWktc3RydWN0dXJlLWFnZ3JlZ2F0aW9uLWNlbGxcIj5cblxuXHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiYWdncmVnYXRpb25zICYmICEhYWdncmVnYXRpb25zLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpXCI+XG5cblx0XHRcdFx0XHQ8ZGl2ICpuZ0lmPVwiaXNBZ2dyZWdhdGVUeXBlUHJlc2VudChhZ2dyZWdhdGlvbnMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkuY291bnQpXCJcblx0XHRcdFx0XHRcdCBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtYWdncmVnYXRpb24tdmFsdWVcIj5cblx0XHRcdFx0XHRcdDxzcGFuPkNvdW50PC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJndWktYWdncmVnYXRpb24tdmFsdWVcIj57eyBhZ2dyZWdhdGlvbnMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkuY291bnQgfX08L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2ICpuZ0lmPVwiaXNBZ2dyZWdhdGVUeXBlUHJlc2VudChhZ2dyZWdhdGlvbnMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkuZGlzdGluY3QpXCJcblx0XHRcdFx0XHRcdCBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtYWdncmVnYXRpb24tdmFsdWVcIj5cblx0XHRcdFx0XHRcdDxzcGFuIFtndWktdG9vbHRpcF09XCInRGlzdGluY3QnXCI+RGlzdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLWFnZ3JlZ2F0aW9uLXZhbHVlXCI+e3sgYWdncmVnYXRpb25zLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLmRpc3RpbmN0IH19PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiAqbmdJZj1cIiBpc0FnZ3JlZ2F0ZVR5cGVQcmVzZW50KGFnZ3JlZ2F0aW9ucy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5zdW0pXCJcblx0XHRcdFx0XHRcdCBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtYWdncmVnYXRpb24tdmFsdWVcIj5cblxuXHRcdFx0XHRcdFx0PHNwYW4+XG5cdFx0XHRcdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHRcdDxzcGFuIFtndWktdG9vbHRpcF09XCInU3VtJ1wiIC0tPlxuXHRcdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0XHRcdCAgY2xhc3M9XCJndWktbWF0aC1zeW1ib2xcIj4mc3VtOzwvc3Bhbj4tLT5cblx0XHRcdFx0XHRcdFx0U3VtXG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1hZ2dyZWdhdGlvbi12YWx1ZVwiPnt7IGFnZ3JlZ2F0aW9ucy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5zdW0gfX08L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2ICpuZ0lmPVwiaXNBZ2dyZWdhdGVUeXBlUHJlc2VudChhZ2dyZWdhdGlvbnMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkuYXZlcmFnZSlcIlxuXHRcdFx0XHRcdFx0IGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1hZ2dyZWdhdGlvbi12YWx1ZVwiPlxuXG5cdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0PGRpdiBbZ3VpLXRvb2x0aXBdPVwiJ0F2ZXJhZ2UnXCItLT5cblx0XHRcdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHRcdCBjbGFzcz1cImd1aS1tZWFuXCI+LS0+XG5cdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0XHQ8c3Bhbj5fPC9zcGFuPjxzcGFuPlg8L3NwYW4+LS0+XG5cdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0PC9kaXY+LS0+XG5cdFx0XHRcdFx0XHQ8c3BhbiBbZ3VpLXRvb2x0aXBdPVwiJ0F2ZXJhZ2UnXCI+QXZnPC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJndWktYWdncmVnYXRpb24tdmFsdWVcIj57eyBhZ2dyZWdhdGlvbnMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkuYXZlcmFnZSB9fTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgKm5nSWY9XCIgaXNBZ2dyZWdhdGVUeXBlUHJlc2VudChhZ2dyZWdhdGlvbnMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkubWluKVwiXG5cdFx0XHRcdFx0XHQgY2xhc3M9XCJndWktc3RydWN0dXJlLWFnZ3JlZ2F0aW9uLXZhbHVlXCI+XG5cblx0XHRcdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHQ8ZGl2IFtndWktdG9vbHRpcF09XCInTWluJ1wiPi0tPlxuXHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJndWktbWF0aC1zeW1ib2xcIj4mYW5kOzwvc3Bhbj4tLT5cblx0XHRcdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHQ8L2Rpdj4tLT5cblx0XHRcdFx0XHRcdDxzcGFuIFtndWktdG9vbHRpcF09XCInTWluJ1wiPlxuXHRcdFx0XHRcdFx0XHRNaW5cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJndWktYWdncmVnYXRpb24tdmFsdWVcIj57eyBhZ2dyZWdhdGlvbnMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkubWluIH19PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiAqbmdJZj1cIiBpc0FnZ3JlZ2F0ZVR5cGVQcmVzZW50KGFnZ3JlZ2F0aW9ucy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5tYXgpXCJcblx0XHRcdFx0XHRcdCBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtYWdncmVnYXRpb24tdmFsdWVcIj5cblxuXHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdDxkaXYgW2d1aS10b29sdGlwXT1cIidNYXgnXCI+LS0+XG5cdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1tYXRoLXN5bWJvbFwiPiZvcjs8L3NwYW4+LS0+XG5cdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0PC9kaXY+LS0+XG5cblx0XHRcdFx0XHRcdDxzcGFuIFtndWktdG9vbHRpcF09XCInTWF4J1wiPlxuXHRcdFx0XHRcdFx0XHRNYXhcblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLWFnZ3JlZ2F0aW9uLXZhbHVlXCI+e3sgYWdncmVnYXRpb25zLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLm1heCB9fTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgKm5nSWY9XCJpc0FnZ3JlZ2F0ZVR5cGVQcmVzZW50KGFnZ3JlZ2F0aW9ucy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5tZWRpYW4pXCJcblx0XHRcdFx0XHRcdCBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtYWdncmVnYXRpb24tdmFsdWVcIj5cblxuXHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdDxkaXYgW2d1aS10b29sdGlwXT1cIidNZWRpYW4nXCItLT5cblx0XHRcdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHRcdCBjbGFzcz1cImd1aS1tZWRpYW5cIj4tLT5cblx0XHRcdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHRcdDxzcGFuPn48L3NwYW4+LS0+XG5cdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0XHQ8c3Bhbj5YPC9zcGFuPi0tPlxuXHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdDwvZGl2Pi0tPlxuXG5cdFx0XHRcdFx0XHQ8c3BhbiBbZ3VpLXRvb2x0aXBdPVwiJ01lZGlhbidcIj5NZWQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1hZ2dyZWdhdGlvbi12YWx1ZVwiPnt7IGFnZ3JlZ2F0aW9ucy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5tZWRpYW4gfX08L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2ICpuZ0lmPVwiaXNBZ2dyZWdhdGVUeXBlUHJlc2VudChhZ2dyZWdhdGlvbnMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkudHJ1dGh5KVwiXG5cdFx0XHRcdFx0XHQgY2xhc3M9XCJndWktc3RydWN0dXJlLWFnZ3JlZ2F0aW9uLXZhbHVlXCI+XG5cdFx0XHRcdFx0XHQ8c3Bhbj5UcnV0aHk8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1hZ2dyZWdhdGlvbi12YWx1ZVwiPnt7IGFnZ3JlZ2F0aW9ucy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS50cnV0aHkgfX08L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2ICpuZ0lmPVwiaXNBZ2dyZWdhdGVUeXBlUHJlc2VudChhZ2dyZWdhdGlvbnMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkuZmFsc3kpXCJcblx0XHRcdFx0XHRcdCBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtYWdncmVnYXRpb24tdmFsdWVcIj5cblx0XHRcdFx0XHRcdDxzcGFuPkZhbHN5PC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJndWktYWdncmVnYXRpb24tdmFsdWVcIj57eyBhZ2dyZWdhdGlvbnMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkuZmFsc3kgfX08L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PC9uZy1jb250YWluZXI+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdDwvbmctY29udGFpbmVyPlxuXG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUFnZ3JlZ2F0aW9uUGFuZWxDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0ZW5hYmxlZDogYm9vbGVhbjtcblxuXHRzb3VyY2VFbXB0eTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGhlYWRlckNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PjtcblxuXHRhZ2dyZWdhdGlvbnM6IE1hcDxzdHJpbmcsIGFueT47XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUFnZ3JlZ2F0aW9uVWlFdmVudHNSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVBZ2dyZWdhdGlvblVpRXZlbnRzUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSBzb3VyY2VSZWFkTW9kZWxTZXJ2aWNlOiBTb3VyY2VSZWFkTW9kZWxTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uUXVlcnlTZXJ2aWNlOiBDb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGlvblVpRXZlbnRzUmVwb3NpdG9yeVxuXHRcdFx0Lm9uQWdncmVnYXRpb25zQ2hhbmdlZCh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGV2ZW50OiBTdHJ1Y3R1cmVBZ2dyZWdhdGlvbnNDaGFuZ2VkRXZlbnQpID0+IHtcblxuXHRcdFx0XHR0aGlzLmFnZ3JlZ2F0aW9ucyA9IGV2ZW50LmdldEFnZ3JlZ2F0aW9ucygpO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLnNvdXJjZVJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vbkVudGl0aWVzU2l6ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoc2l6ZTogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMuc291cmNlRW1wdHkgPSBzaXplID09PSAwO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvblF1ZXJ5U2VydmljZVxuXHRcdFx0Lm9uSGVhZGVyQ29sdW1ucygpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoY29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+KSA9PiB7XG5cdFx0XHRcdHRoaXMuaGVhZGVyQ29sdW1ucyA9IGNvbHVtbnM7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0fVxuXG5cdGlzQWdncmVnYXRlVHlwZVByZXNlbnQoYWdncmVnYXRpb246IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBhZ2dyZWdhdGlvbiAhPT0gdW5kZWZpbmVkICYmIGFnZ3JlZ2F0aW9uICE9PSBudWxsO1xuXHR9XG59XG4iXX0=