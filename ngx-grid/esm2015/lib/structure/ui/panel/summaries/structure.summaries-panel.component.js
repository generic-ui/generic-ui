/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { StructureId } from '../../../domain/structure.id';
import { StructureSummariesUiEventsRepository } from '../../../ui-api/summaries/structure-summaries.ui-events-repository';
import { CompositionWarehouse } from '../../../../composition/ui-api/composition.warehouse';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { StructureSourceWarehouse } from '../../../ui-api/source/structure-source.warehouse';
export class StructureSummariesPanelComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} structureId
     * @param {?} structureSummariesUiEventsRepository
     * @param {?} sourceReadModelService
     * @param {?} compositionReadModelService
     */
    constructor(changeDetectorRef, structureId, structureSummariesUiEventsRepository, sourceReadModelService, compositionReadModelService) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.structureSummariesUiEventsRepository = structureSummariesUiEventsRepository;
        this.sourceReadModelService = sourceReadModelService;
        this.compositionReadModelService = compositionReadModelService;
        this.sourceEmpty = false;
        this.structureSummariesUiEventsRepository
            .onSummariesChanged(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.summaries = event.getSummaries();
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
        this.compositionReadModelService
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
     * @param {?} summaries
     * @return {?}
     */
    isSummariesTypePresent(summaries) {
        return summaries !== undefined && summaries !== null;
    }
}
StructureSummariesPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-summaries-panel',
                template: `

		<ng-container *ngIf="enabled && summaries && !sourceEmpty">

			<div *ngFor="let column of headerColumns"
				 [style.width.px]="column.width"
				 class="gui-structure-summaries-cell">

				<ng-container *ngIf="summaries && !!summaries.get(column.getFieldId().getId())">

					<div *ngIf="isSummariesTypePresent(summaries.get(column.getFieldId().getId()).count)"
						 class="gui-structure-summaries-value">
						<span [gui-tooltip]="'Number of items in the grid'">Count</span>
						<span class="gui-summaries-value">{{ summaries.get(column.getFieldId().getId()).count }}</span>
					</div>

					<div *ngIf="isSummariesTypePresent(summaries.get(column.getFieldId().getId()).distinct)"
						 class="gui-structure-summaries-value">
						<span [gui-tooltip]="'Distinct Values'">Dist</span>
						<span class="gui-summaries-value">{{ summaries.get(column.getFieldId().getId()).distinct }}</span>
					</div>

					<div *ngIf=" isSummariesTypePresent(summaries.get(column.getFieldId().getId()).sum)"
						 class="gui-structure-summaries-value">

						<span>
							<!--							<span [gui-tooltip]="'Sum'" -->
							<!--								  class="gui-math-symbol">&sum;</span>-->
							Sum
						</span>
						<span class="gui-summaries-value">{{ summaries.get(column.getFieldId().getId()).sum }}</span>
					</div>

					<div *ngIf="isSummariesTypePresent(summaries.get(column.getFieldId().getId()).average)"
						 class="gui-structure-summaries-value">

						<!--						<div [gui-tooltip]="'Average'"-->
						<!--							 class="gui-mean">-->
						<!--							<span>_</span><span>X</span>-->
						<!--						</div>-->
						<span [gui-tooltip]="'Average'">Avg</span>
						<span class="gui-summaries-value">{{ summaries.get(column.getFieldId().getId()).average }}</span>
					</div>

					<div *ngIf=" isSummariesTypePresent(summaries.get(column.getFieldId().getId()).min)"
						 class="gui-structure-summaries-value">

						<!--						<div [gui-tooltip]="'Min'">-->
						<!--							<span class="gui-math-symbol">&and;</span>-->
						<!--						</div>-->
						<span [gui-tooltip]="'Min'">
							Min
						</span>

						<span class="gui-summaries-value">{{ summaries.get(column.getFieldId().getId()).min }}</span>
					</div>

					<div *ngIf=" isSummariesTypePresent(summaries.get(column.getFieldId().getId()).max)"
						 class="gui-structure-summaries-value">

						<!--						<div [gui-tooltip]="'Max'">-->
						<!--							<span class="gui-math-symbol">&or;</span>-->
						<!--						</div>-->

						<span [gui-tooltip]="'Max'">
							Max
						</span>
						<span class="gui-summaries-value">{{ summaries.get(column.getFieldId().getId()).max }}</span>
					</div>

					<div *ngIf="isSummariesTypePresent(summaries.get(column.getFieldId().getId()).median)"
						 class="gui-structure-summaries-value">

						<!--						<div [gui-tooltip]="'Median'"-->
						<!--							 class="gui-median">-->
						<!--							<span>~</span>-->
						<!--							<span>X</span>-->
						<!--						</div>-->

						<span [gui-tooltip]="'Median'">Med</span>
						<span class="gui-summaries-value">{{ summaries.get(column.getFieldId().getId()).median }}</span>
					</div>

					<div *ngIf="isSummariesTypePresent(summaries.get(column.getFieldId().getId()).truthy)"
						 class="gui-structure-summaries-value">
						<span>Truthy</span>
						<span class="gui-summaries-value">{{ summaries.get(column.getFieldId().getId()).truthy }}</span>
					</div>

					<div *ngIf="isSummariesTypePresent(summaries.get(column.getFieldId().getId()).falsy)"
						 class="gui-structure-summaries-value">
						<span>Falsy</span>
						<span class="gui-summaries-value">{{ summaries.get(column.getFieldId().getId()).falsy }}</span>
					</div>

				</ng-container>
			</div>

		</ng-container>

	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-structure-summaries-panel]': 'true'
                }
            }] }
];
/** @nocollapse */
StructureSummariesPanelComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: StructureId },
    { type: StructureSummariesUiEventsRepository },
    { type: StructureSourceWarehouse },
    { type: CompositionWarehouse }
];
StructureSummariesPanelComponent.propDecorators = {
    enabled: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvcGFuZWwvc3VtbWFyaWVzL3N0cnVjdHVyZS5zdW1tYXJpZXMtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdoSCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDMUgsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFFNUYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBZ0g3RixNQUFNLE9BQU8sZ0NBQWlDLFNBQVEsY0FBYzs7Ozs7Ozs7SUFXbkUsWUFBb0IsaUJBQW9DLEVBQzdDLFdBQXdCLEVBQ3hCLG9DQUEwRSxFQUMxRSxzQkFBZ0QsRUFDdkMsMkJBQWlEO1FBQ3BFLEtBQUssRUFBRSxDQUFDO1FBTFcsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix5Q0FBb0MsR0FBcEMsb0NBQW9DLENBQXNDO1FBQzFFLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBMEI7UUFDdkMsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUFzQjtRQVZyRSxnQkFBVyxHQUFZLEtBQUssQ0FBQztRQWE1QixJQUFJLENBQUMsb0NBQW9DO2FBQ3ZDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDcEMsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxLQUFxQyxFQUFFLEVBQUU7WUFFcEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDdEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFFBQVE7UUFFUCxJQUFJLENBQUMsc0JBQXNCO2FBQ3pCLGNBQWMsRUFBRTthQUNoQixJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxDQUFDLElBQVksRUFBRSxFQUFFO1lBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7UUFFSixJQUFJLENBQUMsMkJBQTJCO2FBQzlCLGVBQWUsRUFBRTthQUNqQixJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxDQUFDLE9BQXVDLEVBQUUsRUFBRTtZQUN0RCxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztZQUM3QixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFFTCxDQUFDOzs7OztJQUVELHNCQUFzQixDQUFDLFNBQWlCO1FBQ3ZDLE9BQU8sU0FBUyxLQUFLLFNBQVMsSUFBSSxTQUFTLEtBQUssSUFBSSxDQUFDO0lBQ3RELENBQUM7OztZQXJLRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBb0dUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsSUFBSSxFQUFFO29CQUNMLHVDQUF1QyxFQUFFLE1BQU07aUJBQy9DO2FBQ0Q7Ozs7WUF2SGlDLGlCQUFpQjtZQUcxQyxXQUFXO1lBQ1gsb0NBQW9DO1lBSXBDLHdCQUF3QjtZQUh4QixvQkFBb0I7OztzQkFxSDNCLEtBQUs7Ozs7SUFBTixtREFDaUI7O0lBRWpCLHVEQUE2Qjs7SUFFN0IseURBQThDOztJQUU5QyxxREFBNEI7Ozs7O0lBRWhCLDZEQUE0Qzs7Ozs7SUFDckQsdURBQWdDOzs7OztJQUNoQyxnRkFBa0Y7Ozs7O0lBQ2xGLGtFQUF3RDs7Ozs7SUFDeEQsdUVBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzVWlFdmVudHNSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3N1bW1hcmllcy9zdHJ1Y3R1cmUtc3VtbWFyaWVzLnVpLWV2ZW50cy1yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vdWktYXBpL2NvbXBvc2l0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL3N1bW1hcmllcy9zdHJ1Y3R1cmUuc3VtbWFyaWVzLWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc291cmNlL3N0cnVjdHVyZS1zb3VyY2Uud2FyZWhvdXNlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLXN1bW1hcmllcy1wYW5lbCcsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiZW5hYmxlZCAmJiBzdW1tYXJpZXMgJiYgIXNvdXJjZUVtcHR5XCI+XG5cblx0XHRcdDxkaXYgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBoZWFkZXJDb2x1bW5zXCJcblx0XHRcdFx0IFtzdHlsZS53aWR0aC5weF09XCJjb2x1bW4ud2lkdGhcIlxuXHRcdFx0XHQgY2xhc3M9XCJndWktc3RydWN0dXJlLXN1bW1hcmllcy1jZWxsXCI+XG5cblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cInN1bW1hcmllcyAmJiAhIXN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKVwiPlxuXG5cdFx0XHRcdFx0PGRpdiAqbmdJZj1cImlzU3VtbWFyaWVzVHlwZVByZXNlbnQoc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLmNvdW50KVwiXG5cdFx0XHRcdFx0XHQgY2xhc3M9XCJndWktc3RydWN0dXJlLXN1bW1hcmllcy12YWx1ZVwiPlxuXHRcdFx0XHRcdFx0PHNwYW4gW2d1aS10b29sdGlwXT1cIidOdW1iZXIgb2YgaXRlbXMgaW4gdGhlIGdyaWQnXCI+Q291bnQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1zdW1tYXJpZXMtdmFsdWVcIj57eyBzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkuY291bnQgfX08L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2ICpuZ0lmPVwiaXNTdW1tYXJpZXNUeXBlUHJlc2VudChzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkuZGlzdGluY3QpXCJcblx0XHRcdFx0XHRcdCBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtc3VtbWFyaWVzLXZhbHVlXCI+XG5cdFx0XHRcdFx0XHQ8c3BhbiBbZ3VpLXRvb2x0aXBdPVwiJ0Rpc3RpbmN0IFZhbHVlcydcIj5EaXN0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJndWktc3VtbWFyaWVzLXZhbHVlXCI+e3sgc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLmRpc3RpbmN0IH19PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiAqbmdJZj1cIiBpc1N1bW1hcmllc1R5cGVQcmVzZW50KHN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5zdW0pXCJcblx0XHRcdFx0XHRcdCBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtc3VtbWFyaWVzLXZhbHVlXCI+XG5cblx0XHRcdFx0XHRcdDxzcGFuPlxuXHRcdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0XHQ8c3BhbiBbZ3VpLXRvb2x0aXBdPVwiJ1N1bSdcIiAtLT5cblx0XHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdFx0XHQgIGNsYXNzPVwiZ3VpLW1hdGgtc3ltYm9sXCI+JnN1bTs8L3NwYW4+LS0+XG5cdFx0XHRcdFx0XHRcdFN1bVxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJndWktc3VtbWFyaWVzLXZhbHVlXCI+e3sgc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLnN1bSB9fTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgKm5nSWY9XCJpc1N1bW1hcmllc1R5cGVQcmVzZW50KHN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5hdmVyYWdlKVwiXG5cdFx0XHRcdFx0XHQgY2xhc3M9XCJndWktc3RydWN0dXJlLXN1bW1hcmllcy12YWx1ZVwiPlxuXG5cdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0PGRpdiBbZ3VpLXRvb2x0aXBdPVwiJ0F2ZXJhZ2UnXCItLT5cblx0XHRcdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHRcdCBjbGFzcz1cImd1aS1tZWFuXCI+LS0+XG5cdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0XHQ8c3Bhbj5fPC9zcGFuPjxzcGFuPlg8L3NwYW4+LS0+XG5cdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0PC9kaXY+LS0+XG5cdFx0XHRcdFx0XHQ8c3BhbiBbZ3VpLXRvb2x0aXBdPVwiJ0F2ZXJhZ2UnXCI+QXZnPC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJndWktc3VtbWFyaWVzLXZhbHVlXCI+e3sgc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLmF2ZXJhZ2UgfX08L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2ICpuZ0lmPVwiIGlzU3VtbWFyaWVzVHlwZVByZXNlbnQoc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLm1pbilcIlxuXHRcdFx0XHRcdFx0IGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1zdW1tYXJpZXMtdmFsdWVcIj5cblxuXHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdDxkaXYgW2d1aS10b29sdGlwXT1cIidNaW4nXCI+LS0+XG5cdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1tYXRoLXN5bWJvbFwiPiZhbmQ7PC9zcGFuPi0tPlxuXHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdDwvZGl2Pi0tPlxuXHRcdFx0XHRcdFx0PHNwYW4gW2d1aS10b29sdGlwXT1cIidNaW4nXCI+XG5cdFx0XHRcdFx0XHRcdE1pblxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1zdW1tYXJpZXMtdmFsdWVcIj57eyBzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkubWluIH19PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiAqbmdJZj1cIiBpc1N1bW1hcmllc1R5cGVQcmVzZW50KHN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5tYXgpXCJcblx0XHRcdFx0XHRcdCBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtc3VtbWFyaWVzLXZhbHVlXCI+XG5cblx0XHRcdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHQ8ZGl2IFtndWktdG9vbHRpcF09XCInTWF4J1wiPi0tPlxuXHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJndWktbWF0aC1zeW1ib2xcIj4mb3I7PC9zcGFuPi0tPlxuXHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdDwvZGl2Pi0tPlxuXG5cdFx0XHRcdFx0XHQ8c3BhbiBbZ3VpLXRvb2x0aXBdPVwiJ01heCdcIj5cblx0XHRcdFx0XHRcdFx0TWF4XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1zdW1tYXJpZXMtdmFsdWVcIj57eyBzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkubWF4IH19PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiAqbmdJZj1cImlzU3VtbWFyaWVzVHlwZVByZXNlbnQoc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLm1lZGlhbilcIlxuXHRcdFx0XHRcdFx0IGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1zdW1tYXJpZXMtdmFsdWVcIj5cblxuXHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdDxkaXYgW2d1aS10b29sdGlwXT1cIidNZWRpYW4nXCItLT5cblx0XHRcdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHRcdCBjbGFzcz1cImd1aS1tZWRpYW5cIj4tLT5cblx0XHRcdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHRcdDxzcGFuPn48L3NwYW4+LS0+XG5cdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0XHQ8c3Bhbj5YPC9zcGFuPi0tPlxuXHRcdFx0XHRcdFx0PCEtLVx0XHRcdFx0XHRcdDwvZGl2Pi0tPlxuXG5cdFx0XHRcdFx0XHQ8c3BhbiBbZ3VpLXRvb2x0aXBdPVwiJ01lZGlhbidcIj5NZWQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImd1aS1zdW1tYXJpZXMtdmFsdWVcIj57eyBzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkubWVkaWFuIH19PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiAqbmdJZj1cImlzU3VtbWFyaWVzVHlwZVByZXNlbnQoc3VtbWFyaWVzLmdldChjb2x1bW4uZ2V0RmllbGRJZCgpLmdldElkKCkpLnRydXRoeSlcIlxuXHRcdFx0XHRcdFx0IGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1zdW1tYXJpZXMtdmFsdWVcIj5cblx0XHRcdFx0XHRcdDxzcGFuPlRydXRoeTwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLXN1bW1hcmllcy12YWx1ZVwiPnt7IHN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS50cnV0aHkgfX08L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2ICpuZ0lmPVwiaXNTdW1tYXJpZXNUeXBlUHJlc2VudChzdW1tYXJpZXMuZ2V0KGNvbHVtbi5nZXRGaWVsZElkKCkuZ2V0SWQoKSkuZmFsc3kpXCJcblx0XHRcdFx0XHRcdCBjbGFzcz1cImd1aS1zdHJ1Y3R1cmUtc3VtbWFyaWVzLXZhbHVlXCI+XG5cdFx0XHRcdFx0XHQ8c3Bhbj5GYWxzeTwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiZ3VpLXN1bW1hcmllcy12YWx1ZVwiPnt7IHN1bW1hcmllcy5nZXQoY29sdW1uLmdldEZpZWxkSWQoKS5nZXRJZCgpKS5mYWxzeSB9fTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0PC9uZy1jb250YWluZXI+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1zdHJ1Y3R1cmUtc3VtbWFyaWVzLXBhbmVsXSc6ICd0cnVlJ1xuXHR9XG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdGVuYWJsZWQ6IGJvb2xlYW47XG5cblx0c291cmNlRW1wdHk6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRoZWFkZXJDb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD47XG5cblx0c3VtbWFyaWVzOiBNYXA8c3RyaW5nLCBhbnk+O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVTdW1tYXJpZXNVaUV2ZW50c1JlcG9zaXRvcnk6IFN0cnVjdHVyZVN1bW1hcmllc1VpRXZlbnRzUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSBzb3VyY2VSZWFkTW9kZWxTZXJ2aWNlOiBTdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlOiBDb21wb3NpdGlvbldhcmVob3VzZSkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVN1bW1hcmllc1VpRXZlbnRzUmVwb3NpdG9yeVxuXHRcdFx0Lm9uU3VtbWFyaWVzQ2hhbmdlZCh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGV2ZW50OiBTdHJ1Y3R1cmVTdW1tYXJpZXNDaGFuZ2VkRXZlbnQpID0+IHtcblxuXHRcdFx0XHR0aGlzLnN1bW1hcmllcyA9IGV2ZW50LmdldFN1bW1hcmllcygpO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLnNvdXJjZVJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vbkVudGl0aWVzU2l6ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoc2l6ZTogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMuc291cmNlRW1wdHkgPSBzaXplID09PSAwO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vbkhlYWRlckNvbHVtbnMoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PikgPT4ge1xuXHRcdFx0XHR0aGlzLmhlYWRlckNvbHVtbnMgPSBjb2x1bW5zO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdH1cblxuXHRpc1N1bW1hcmllc1R5cGVQcmVzZW50KHN1bW1hcmllczogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHN1bW1hcmllcyAhPT0gdW5kZWZpbmVkICYmIHN1bW1hcmllcyAhPT0gbnVsbDtcblx0fVxufVxuIl19