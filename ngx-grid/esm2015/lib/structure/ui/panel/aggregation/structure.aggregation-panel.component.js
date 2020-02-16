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

					<div *ngIf="isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).count)" class="gui-structure-aggregation-value">
						Count: <span>{{ aggregations.get(column.getFieldId().getId()).count }}</span>
					</div>

					<div *ngIf="isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).distinct)" class="gui-structure-aggregation-value">
						Distinct: <span>{{ aggregations.get(column.getFieldId().getId()).distinct }}</span>
					</div>

					<div *ngIf=" isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).sum)" class="gui-structure-aggregation-value">

						<div>
							<span [gui-tooltip]="'Sum'" 
								  class="gui-math-symbol">&sum;</span>
						</div>
						<span>{{ aggregations.get(column.getFieldId().getId()).sum }}</span>
					</div>

					<div *ngIf="isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).average)" class="gui-structure-aggregation-value">

						<div [gui-tooltip]="'Average'"
							 class="gui-mean">
							<span>_</span><span>X</span>
						</div>
						<span>{{ aggregations.get(column.getFieldId().getId()).average }}</span>
					</div>

					<div *ngIf=" isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).min)" class="gui-structure-aggregation-value">

						<div [gui-tooltip]="'Min'">
							<span class="gui-math-symbol">&and;</span>
						</div>
						<span>{{ aggregations.get(column.getFieldId().getId()).min }}</span>
					</div>

					<div *ngIf=" isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).max)" class="gui-structure-aggregation-value">

						<div [gui-tooltip]="'Max'">
							<span class="gui-math-symbol">&or;</span>
						</div>
						<span>{{ aggregations.get(column.getFieldId().getId()).max }}</span>
					</div>

					<div *ngIf="isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).median)" class="gui-structure-aggregation-value">

						<div [gui-tooltip]="'Median'"
							 class="gui-median">
							<span>~</span>
							<span>X</span>
						</div>
						<span>{{ aggregations.get(column.getFieldId().getId()).median }}</span>
					</div>

					<div *ngIf="isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).truthy)" class="gui-structure-aggregation-value">
						Truthy: <span>{{ aggregations.get(column.getFieldId().getId()).truthy }}</span>
					</div>

					<div *ngIf="isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).falsy)" class="gui-structure-aggregation-value">
						Falsy: <span>{{ aggregations.get(column.getFieldId().getId()).falsy }}</span>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0aW9uLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9wYW5lbC9hZ2dyZWdhdGlvbi9zdHJ1Y3R1cmUuYWdncmVnYXRpb24tcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdoSCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sa0ZBQWtGLENBQUM7QUFDMUksT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFFNUcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBb0YxRixNQUFNLE9BQU8sa0NBQW1DLFNBQVEsY0FBYzs7Ozs7Ozs7SUFXckUsWUFBb0IsaUJBQW9DLEVBQzdDLFdBQXdCLEVBQ3hCLHNDQUE4RSxFQUM5RSxzQkFBOEMsRUFDckMsdUJBQW9EO1FBQ3ZFLEtBQUssRUFBRSxDQUFDO1FBTFcsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QiwyQ0FBc0MsR0FBdEMsc0NBQXNDLENBQXdDO1FBQzlFLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDckMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUE2QjtRQVZ4RSxnQkFBVyxHQUFZLEtBQUssQ0FBQztRQWE1QixJQUFJLENBQUMsc0NBQXNDO2FBQ3pDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDdkMsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxLQUF3QyxFQUFFLEVBQUU7WUFFdkQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDNUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFFBQVE7UUFFUCxJQUFJLENBQUMsc0JBQXNCO2FBQ3pCLGNBQWMsRUFBRTthQUNoQixJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxDQUFDLElBQVksRUFBRSxFQUFFO1lBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7UUFFSixJQUFJLENBQUMsdUJBQXVCO2FBQzFCLGVBQWUsRUFBRTthQUNqQixJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxDQUFDLE9BQXVDLEVBQUUsRUFBRTtZQUN0RCxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztZQUM3QixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFFTCxDQUFDOzs7OztJQUVELHNCQUFzQixDQUFDLFdBQW1CO1FBQ3pDLE9BQU8sV0FBVyxLQUFLLFNBQVMsSUFBSSxXQUFXLEtBQUssSUFBSSxDQUFDO0lBQzFELENBQUM7OztZQXpJRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGlDQUFpQztnQkFDM0MsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEyRVQ7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDOzs7O1lBM0ZpQyxpQkFBaUI7WUFHMUMsV0FBVztZQUNYLHNDQUFzQztZQUl0QyxzQkFBc0I7WUFIdEIsMkJBQTJCOzs7c0JBeUZsQyxLQUFLOzs7O0lBQU4scURBQ2lCOztJQUVqQix5REFBNkI7O0lBRTdCLDJEQUE4Qzs7SUFFOUMsMERBQStCOzs7OztJQUVuQiwrREFBNEM7Ozs7O0lBQ3JELHlEQUFnQzs7Ozs7SUFDaEMsb0ZBQXNGOzs7OztJQUN0RixvRUFBc0Q7Ozs7O0lBQ3RELHFFQUFxRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGlvblVpRXZlbnRzUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvYWdncmVnYXRpb24vc3RydWN0dXJlLmFnZ3JlZ2F0aW9uLnVpLWV2ZW50cy1yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL3VpLWFwaS9jb21wb3NpdGlvbi1yZWFkLW1vZGVsLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRpb25zQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2FnZ3JlZ2F0aW9uL3N0cnVjdHVyZS5hZ2dyZWdhdGlvbnMtY2hhbmdlZC5ldmVudCc7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IFNvdXJjZVJlYWRNb2RlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc291cmNlL3NvdXJjZS1yZWFkLW1vZGVsLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtYWdncmVnYXRpb24tcGFuZWwnLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImVuYWJsZWQgJiYgYWdncmVnYXRpb25zICYmICFzb3VyY2VFbXB0eVwiPlxuXG5cdFx0XHQ8ZGl2ICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgaGVhZGVyQ29sdW1uc1wiXG5cdFx0XHRcdCBbc3R5bGUud2lkdGgucHhdPVwiY29sdW1uLndpZHRoXCJcblx0XHRcdFx0IGNsYXNzPVwiZ3VpLWhlYWRlci1jZWxsIGd1aS1zdHJ1Y3R1cmUtYWdncmVnYXRpb24tY2VsbFwiPlxuXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJhZ2dyZWdhdGlvbnMgJiYgISFhZ2dyZWdhdGlvbnMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSlcIj5cblxuXHRcdFx0XHRcdDxkaXYgKm5nSWY9XCJpc0FnZ3JlZ2F0ZVR5cGVQcmVzZW50KGFnZ3JlZ2F0aW9ucy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5jb3VudClcIiBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtYWdncmVnYXRpb24tdmFsdWVcIj5cblx0XHRcdFx0XHRcdENvdW50OiA8c3Bhbj57eyBhZ2dyZWdhdGlvbnMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkuY291bnQgfX08L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2ICpuZ0lmPVwiaXNBZ2dyZWdhdGVUeXBlUHJlc2VudChhZ2dyZWdhdGlvbnMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkuZGlzdGluY3QpXCIgY2xhc3M9XCJndWktc3RydWN0dXJlLWFnZ3JlZ2F0aW9uLXZhbHVlXCI+XG5cdFx0XHRcdFx0XHREaXN0aW5jdDogPHNwYW4+e3sgYWdncmVnYXRpb25zLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLmRpc3RpbmN0IH19PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiAqbmdJZj1cIiBpc0FnZ3JlZ2F0ZVR5cGVQcmVzZW50KGFnZ3JlZ2F0aW9ucy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5zdW0pXCIgY2xhc3M9XCJndWktc3RydWN0dXJlLWFnZ3JlZ2F0aW9uLXZhbHVlXCI+XG5cblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIFtndWktdG9vbHRpcF09XCInU3VtJ1wiIFxuXHRcdFx0XHRcdFx0XHRcdCAgY2xhc3M9XCJndWktbWF0aC1zeW1ib2xcIj4mc3VtOzwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PHNwYW4+e3sgYWdncmVnYXRpb25zLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLnN1bSB9fTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgKm5nSWY9XCJpc0FnZ3JlZ2F0ZVR5cGVQcmVzZW50KGFnZ3JlZ2F0aW9ucy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5hdmVyYWdlKVwiIGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1hZ2dyZWdhdGlvbi12YWx1ZVwiPlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IFtndWktdG9vbHRpcF09XCInQXZlcmFnZSdcIlxuXHRcdFx0XHRcdFx0XHQgY2xhc3M9XCJndWktbWVhblwiPlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5fPC9zcGFuPjxzcGFuPlg8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxzcGFuPnt7IGFnZ3JlZ2F0aW9ucy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5hdmVyYWdlIH19PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiAqbmdJZj1cIiBpc0FnZ3JlZ2F0ZVR5cGVQcmVzZW50KGFnZ3JlZ2F0aW9ucy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5taW4pXCIgY2xhc3M9XCJndWktc3RydWN0dXJlLWFnZ3JlZ2F0aW9uLXZhbHVlXCI+XG5cblx0XHRcdFx0XHRcdDxkaXYgW2d1aS10b29sdGlwXT1cIidNaW4nXCI+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLW1hdGgtc3ltYm9sXCI+JmFuZDs8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxzcGFuPnt7IGFnZ3JlZ2F0aW9ucy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5taW4gfX08L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2ICpuZ0lmPVwiIGlzQWdncmVnYXRlVHlwZVByZXNlbnQoYWdncmVnYXRpb25zLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLm1heClcIiBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtYWdncmVnYXRpb24tdmFsdWVcIj5cblxuXHRcdFx0XHRcdFx0PGRpdiBbZ3VpLXRvb2x0aXBdPVwiJ01heCdcIj5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJndWktbWF0aC1zeW1ib2xcIj4mb3I7PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8c3Bhbj57eyBhZ2dyZWdhdGlvbnMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkubWF4IH19PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiAqbmdJZj1cImlzQWdncmVnYXRlVHlwZVByZXNlbnQoYWdncmVnYXRpb25zLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLm1lZGlhbilcIiBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtYWdncmVnYXRpb24tdmFsdWVcIj5cblxuXHRcdFx0XHRcdFx0PGRpdiBbZ3VpLXRvb2x0aXBdPVwiJ01lZGlhbidcIlxuXHRcdFx0XHRcdFx0XHQgY2xhc3M9XCJndWktbWVkaWFuXCI+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPn48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPlg8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxzcGFuPnt7IGFnZ3JlZ2F0aW9ucy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5tZWRpYW4gfX08L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2ICpuZ0lmPVwiaXNBZ2dyZWdhdGVUeXBlUHJlc2VudChhZ2dyZWdhdGlvbnMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkudHJ1dGh5KVwiIGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1hZ2dyZWdhdGlvbi12YWx1ZVwiPlxuXHRcdFx0XHRcdFx0VHJ1dGh5OiA8c3Bhbj57eyBhZ2dyZWdhdGlvbnMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkudHJ1dGh5IH19PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiAqbmdJZj1cImlzQWdncmVnYXRlVHlwZVByZXNlbnQoYWdncmVnYXRpb25zLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLmZhbHN5KVwiIGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1hZ2dyZWdhdGlvbi12YWx1ZVwiPlxuXHRcdFx0XHRcdFx0RmFsc3k6IDxzcGFuPnt7IGFnZ3JlZ2F0aW9ucy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5mYWxzeSB9fTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0PC9uZy1jb250YWluZXI+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQWdncmVnYXRpb25QYW5lbENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRlbmFibGVkOiBib29sZWFuO1xuXG5cdHNvdXJjZUVtcHR5OiBib29sZWFuID0gZmFsc2U7XG5cblx0aGVhZGVyQ29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+O1xuXG5cdGFnZ3JlZ2F0aW9uczogTWFwPHN0cmluZywgYW55PjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlQWdncmVnYXRpb25VaUV2ZW50c1JlcG9zaXRvcnk6IFN0cnVjdHVyZUFnZ3JlZ2F0aW9uVWlFdmVudHNSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHNvdXJjZVJlYWRNb2RlbFNlcnZpY2U6IFNvdXJjZVJlYWRNb2RlbFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25RdWVyeVNlcnZpY2U6IENvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZSkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUFnZ3JlZ2F0aW9uVWlFdmVudHNSZXBvc2l0b3J5XG5cdFx0XHQub25BZ2dyZWdhdGlvbnNDaGFuZ2VkKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZXZlbnQ6IFN0cnVjdHVyZUFnZ3JlZ2F0aW9uc0NoYW5nZWRFdmVudCkgPT4ge1xuXG5cdFx0XHRcdHRoaXMuYWdncmVnYXRpb25zID0gZXZlbnQuZ2V0QWdncmVnYXRpb25zKCk7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuc291cmNlUmVhZE1vZGVsU2VydmljZVxuXHRcdFx0Lm9uRW50aXRpZXNTaXplKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChzaXplOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5zb3VyY2VFbXB0eSA9IHNpemUgPT09IDA7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uUXVlcnlTZXJ2aWNlXG5cdFx0XHQub25IZWFkZXJDb2x1bW5zKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4pID0+IHtcblx0XHRcdFx0dGhpcy5oZWFkZXJDb2x1bW5zID0gY29sdW1ucztcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHR9XG5cblx0aXNBZ2dyZWdhdGVUeXBlUHJlc2VudChhZ2dyZWdhdGlvbjogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGFnZ3JlZ2F0aW9uICE9PSB1bmRlZmluZWQgJiYgYWdncmVnYXRpb24gIT09IG51bGw7XG5cdH1cbn1cbiJdfQ==