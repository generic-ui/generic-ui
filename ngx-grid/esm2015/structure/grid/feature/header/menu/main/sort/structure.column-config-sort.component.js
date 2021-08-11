/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { Placement } from '@generic-ui/fabric';
import { SortOrder } from '../../../../../../../composition/core/domain/column/sort/sort-order';
import { CellTemplateWithContext } from '../../../../../../../composition/core/domain-read/definition/cell-template-with-context';
import { CompositionWarehouse } from '../../../../../../../composition/core/api/composition.warehouse';
import { SmartComponent } from '../../../../../../../common/cdk/component/smart-component';
import { SortingCommandInvoker } from '../../../../../../sorting/core/api/sorting.command-invoker';
import { CompositionId } from '../../../../../../../composition/core/api/composition.id';
import { StructureId } from '../../../../../../core/api/structure.id';
export class StructureColumnConfigSortComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} elementRef
     * @param {?} compositionId
     * @param {?} structureId
     * @param {?} sortingCommandDispatcher
     * @param {?} compositionReadModelService
     */
    constructor(changeDetectorRef, elementRef, compositionId, structureId, sortingCommandDispatcher, compositionReadModelService) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.compositionId = compositionId;
        this.structureId = structureId;
        this.sortingCommandDispatcher = sortingCommandDispatcher;
        this.compositionReadModelService = compositionReadModelService;
        this.placement = Placement.Right;
        this.status = SortOrder;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.sortStatus = this.column.getSortStatus();
        this.compositionReadModelService
            .onSortOrder(this.column.getFieldId())
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} sortStatus
         * @return {?}
         */
        (sortStatus) => {
            this.sortStatus = sortStatus;
            this.changeDetectorRef.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    isAscSort() {
        return this.sortStatus === SortOrder.ASC;
    }
    /**
     * @return {?}
     */
    isDescSort() {
        return this.sortStatus === SortOrder.DESC;
    }
    /**
     * @return {?}
     */
    isNoneSort() {
        return this.sortStatus === SortOrder.NONE;
    }
    /**
     * @param {?} sort
     * @return {?}
     */
    setSortOrder(sort) {
        event.stopPropagation();
        this.sortingCommandDispatcher.setSortOrder(this.column.getFieldId(), sort, this.compositionId, this.structureId);
    }
    /**
     * @protected
     * @return {?}
     */
    getSelectorName() {
        return 'gui-structure-column-config-sort';
    }
}
StructureColumnConfigSortComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-column-config-sort',
                template: `

		<gui-dropdown [placement]="placement"
					  [dropdownText]="dropdownTextTranslation"
					  [width]="225"
					  [showOnHover]="true"
					  class="gui-header-menu-dropdown">

			<gui-dropdown-item (click)="setSortOrder(status.ASC)"
							   [class.gui-header-item-active]="isAscSort()">
				<div class="gui-sort-title">
					{{'headerMenuMainTabColumnSortAscending' | guiTranslate}}
					<gui-structure-column-menu-arrow-icon [sort]="true" [rotateDeg]="0">
					</gui-structure-column-menu-arrow-icon>
				</div>
			</gui-dropdown-item>

			<gui-dropdown-item (click)="setSortOrder(status.DESC)"
							   [class.gui-header-item-active]="isDescSort()">
				<div class="gui-sort-title">
					{{'headerMenuMainTabColumnSortDescending' | guiTranslate}}
					<gui-structure-column-menu-arrow-icon [sort]="true" [rotateDeg]="180">
					</gui-structure-column-menu-arrow-icon>
				</div>
			</gui-dropdown-item>

			<gui-dropdown-item (click)="setSortOrder(status.NONE)"
							   [class.gui-header-item-active]="isNoneSort()">
				{{'headerMenuMainTabColumnSortNone' | guiTranslate}}
			</gui-dropdown-item>

		</gui-dropdown>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureColumnConfigSortComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: CompositionId },
    { type: StructureId },
    { type: SortingCommandInvoker },
    { type: CompositionWarehouse }
];
StructureColumnConfigSortComponent.propDecorators = {
    column: [{ type: Input }],
    dropdownTextTranslation: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructureColumnConfigSortComponent.prototype.column;
    /** @type {?} */
    StructureColumnConfigSortComponent.prototype.dropdownTextTranslation;
    /** @type {?} */
    StructureColumnConfigSortComponent.prototype.placement;
    /** @type {?} */
    StructureColumnConfigSortComponent.prototype.status;
    /** @type {?} */
    StructureColumnConfigSortComponent.prototype.sortStatus;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigSortComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigSortComponent.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigSortComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigSortComponent.prototype.sortingCommandDispatcher;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigSortComponent.prototype.compositionReadModelService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctc29ydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvaGVhZGVyL21lbnUvbWFpbi9zb3J0L3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLXNvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEksT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUNoRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5RkFBeUYsQ0FBQztBQUNsSSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUN2RyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDM0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDbkcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQXdDdEUsTUFBTSxPQUFPLGtDQUFtQyxTQUFRLGNBQWM7Ozs7Ozs7OztJQWNyRSxZQUE2QixpQkFBb0MsRUFDOUQsVUFBc0IsRUFDTCxhQUE0QixFQUM1QixXQUF3QixFQUN4Qix3QkFBK0MsRUFDL0MsMkJBQWlEO1FBQ3BFLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQztRQU5ULHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFFN0Msa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUF1QjtRQUMvQyxnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQXNCO1FBWHJFLGNBQVMsR0FBYyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBRXZDLFdBQU0sR0FBRyxTQUFTLENBQUM7SUFXbkIsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFOUMsSUFBSSxDQUFDLDJCQUEyQjthQUM5QixXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUNyQyxJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxDQUFDLFVBQXFCLEVBQUUsRUFBRTtZQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztZQUM3QixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsR0FBRyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1QsT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELFVBQVU7UUFDVCxPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxJQUFlO1FBQzNCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsd0JBQXdCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xILENBQUM7Ozs7O0lBRVMsZUFBZTtRQUN4QixPQUFPLGtDQUFrQyxDQUFDO0lBQzNDLENBQUM7OztZQTlGRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGtDQUFrQztnQkFDNUMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWdDVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7Ozs7WUFqRGlDLGlCQUFpQjtZQUFhLFVBQVU7WUFTakUsYUFBYTtZQUNiLFdBQVc7WUFGWCxxQkFBcUI7WUFGckIsb0JBQW9COzs7cUJBOEMzQixLQUFLO3NDQUdMLEtBQUs7Ozs7SUFITixvREFDZ0M7O0lBRWhDLHFFQUNnQzs7SUFFaEMsdURBQXVDOztJQUV2QyxvREFBbUI7O0lBRW5CLHdEQUFzQjs7Ozs7SUFFViwrREFBcUQ7Ozs7O0lBRTlELDJEQUE2Qzs7Ozs7SUFDN0MseURBQXlDOzs7OztJQUN6QyxzRUFBZ0U7Ozs7O0lBQ2hFLHlFQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQbGFjZW1lbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBTb3J0T3JkZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb2x1bW4vc29ydC9zb3J0LW9yZGVyJztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IFNvcnRpbmdDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3NvcnRpbmcvY29yZS9hcGkvc29ydGluZy5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1jb2x1bW4tY29uZmlnLXNvcnQnLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PGd1aS1kcm9wZG93biBbcGxhY2VtZW50XT1cInBsYWNlbWVudFwiXG5cdFx0XHRcdFx0ICBbZHJvcGRvd25UZXh0XT1cImRyb3Bkb3duVGV4dFRyYW5zbGF0aW9uXCJcblx0XHRcdFx0XHQgIFt3aWR0aF09XCIyMjVcIlxuXHRcdFx0XHRcdCAgW3Nob3dPbkhvdmVyXT1cInRydWVcIlxuXHRcdFx0XHRcdCAgY2xhc3M9XCJndWktaGVhZGVyLW1lbnUtZHJvcGRvd25cIj5cblxuXHRcdFx0PGd1aS1kcm9wZG93bi1pdGVtIChjbGljayk9XCJzZXRTb3J0T3JkZXIoc3RhdHVzLkFTQylcIlxuXHRcdFx0XHRcdFx0XHQgICBbY2xhc3MuZ3VpLWhlYWRlci1pdGVtLWFjdGl2ZV09XCJpc0FzY1NvcnQoKVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLXNvcnQtdGl0bGVcIj5cblx0XHRcdFx0XHR7eydoZWFkZXJNZW51TWFpblRhYkNvbHVtblNvcnRBc2NlbmRpbmcnIHwgZ3VpVHJhbnNsYXRlfX1cblx0XHRcdFx0XHQ8Z3VpLXN0cnVjdHVyZS1jb2x1bW4tbWVudS1hcnJvdy1pY29uIFtzb3J0XT1cInRydWVcIiBbcm90YXRlRGVnXT1cIjBcIj5cblx0XHRcdFx0XHQ8L2d1aS1zdHJ1Y3R1cmUtY29sdW1uLW1lbnUtYXJyb3ctaWNvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2d1aS1kcm9wZG93bi1pdGVtPlxuXG5cdFx0XHQ8Z3VpLWRyb3Bkb3duLWl0ZW0gKGNsaWNrKT1cInNldFNvcnRPcmRlcihzdGF0dXMuREVTQylcIlxuXHRcdFx0XHRcdFx0XHQgICBbY2xhc3MuZ3VpLWhlYWRlci1pdGVtLWFjdGl2ZV09XCJpc0Rlc2NTb3J0KClcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImd1aS1zb3J0LXRpdGxlXCI+XG5cdFx0XHRcdFx0e3snaGVhZGVyTWVudU1haW5UYWJDb2x1bW5Tb3J0RGVzY2VuZGluZycgfCBndWlUcmFuc2xhdGV9fVxuXHRcdFx0XHRcdDxndWktc3RydWN0dXJlLWNvbHVtbi1tZW51LWFycm93LWljb24gW3NvcnRdPVwidHJ1ZVwiIFtyb3RhdGVEZWddPVwiMTgwXCI+XG5cdFx0XHRcdFx0PC9ndWktc3RydWN0dXJlLWNvbHVtbi1tZW51LWFycm93LWljb24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9ndWktZHJvcGRvd24taXRlbT5cblxuXHRcdFx0PGd1aS1kcm9wZG93bi1pdGVtIChjbGljayk9XCJzZXRTb3J0T3JkZXIoc3RhdHVzLk5PTkUpXCJcblx0XHRcdFx0XHRcdFx0ICAgW2NsYXNzLmd1aS1oZWFkZXItaXRlbS1hY3RpdmVdPVwiaXNOb25lU29ydCgpXCI+XG5cdFx0XHRcdHt7J2hlYWRlck1lbnVNYWluVGFiQ29sdW1uU29ydE5vbmUnIHwgZ3VpVHJhbnNsYXRlfX1cblx0XHRcdDwvZ3VpLWRyb3Bkb3duLWl0ZW0+XG5cblx0XHQ8L2d1aS1kcm9wZG93bj5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uQ29uZmlnU29ydENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0O1xuXG5cdEBJbnB1dCgpXG5cdGRyb3Bkb3duVGV4dFRyYW5zbGF0aW9uOiBzdHJpbmc7XG5cblx0cGxhY2VtZW50OiBQbGFjZW1lbnQgPSBQbGFjZW1lbnQuUmlnaHQ7XG5cblx0c3RhdHVzID0gU29ydE9yZGVyO1xuXG5cdHNvcnRTdGF0dXM6IFNvcnRPcmRlcjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3J0aW5nQ29tbWFuZERpc3BhdGNoZXI6IFNvcnRpbmdDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2U6IENvbXBvc2l0aW9uV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5zb3J0U3RhdHVzID0gdGhpcy5jb2x1bW4uZ2V0U29ydFN0YXR1cygpO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vblNvcnRPcmRlcih0aGlzLmNvbHVtbi5nZXRGaWVsZElkKCkpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoc29ydFN0YXR1czogU29ydE9yZGVyKSA9PiB7XG5cdFx0XHRcdHRoaXMuc29ydFN0YXR1cyA9IHNvcnRTdGF0dXM7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRpc0FzY1NvcnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydFN0YXR1cyA9PT0gU29ydE9yZGVyLkFTQztcblx0fVxuXG5cdGlzRGVzY1NvcnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydFN0YXR1cyA9PT0gU29ydE9yZGVyLkRFU0M7XG5cdH1cblxuXHRpc05vbmVTb3J0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvcnRTdGF0dXMgPT09IFNvcnRPcmRlci5OT05FO1xuXHR9XG5cblx0c2V0U29ydE9yZGVyKHNvcnQ6IFNvcnRPcmRlcik6IHZvaWQge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdHRoaXMuc29ydGluZ0NvbW1hbmREaXNwYXRjaGVyLnNldFNvcnRPcmRlcih0aGlzLmNvbHVtbi5nZXRGaWVsZElkKCksIHNvcnQsIHRoaXMuY29tcG9zaXRpb25JZCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLWNvbHVtbi1jb25maWctc29ydCc7XG5cdH1cbn1cbiJdfQ==