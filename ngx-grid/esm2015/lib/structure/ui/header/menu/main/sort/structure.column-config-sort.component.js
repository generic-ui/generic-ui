/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Placement } from '@generic-ui/fabric';
import { SortOrder } from '../../../../../../composition/domain/command/column/sort/sort-order';
import { CellTemplateWithContext } from '../../../../../../composition/domain/read/definition/cell-template-with-context';
import { StructureCommandService } from '../../../../../ui-api/structure/structure-command.service';
import { CompositionReadModelService } from '../../../../../../composition/ui-api/composition-read-model.service';
import { SmartComponent } from '../../../../../../../common/cdk/smart-component';
export class StructureColumnConfigSortComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} structureCommandService
     * @param {?} compositionReadModelService
     */
    constructor(changeDetectorRef, structureCommandService, compositionReadModelService) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.structureCommandService = structureCommandService;
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
        this.structureCommandService.setSortOrder(this.column.getFieldId(), sort);
    }
}
StructureColumnConfigSortComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-column-config-sort',
                template: `

		<gui-dropdown [placement]="placement"
					  [dropdownText]="'Column Sort'"
					  [width]="225"
					  [showOnHover]="true"
					  class="gui-header-menu-dropdown">

			<gui-dropdown-item (click)="setSortOrder(status.ASC)"
							   [class.gui-header-item-active]="isAscSort()">
				<div class="gui-sort-title">Ascending<span class="gui-sort gui-sort-asc"></span></div>
			</gui-dropdown-item>

			<gui-dropdown-item (click)="setSortOrder(status.DESC)"
							   [class.gui-header-item-active]="isDescSort()">
				<div class="gui-sort-title">Descending<span class="gui-sort gui-sort-desc"></span></div>
			</gui-dropdown-item>

			<gui-dropdown-item (click)="setSortOrder(status.NONE)"
							   [class.gui-header-item-active]="isNoneSort()">
				None
			</gui-dropdown-item>

		</gui-dropdown>
	`
            }] }
];
/** @nocollapse */
StructureColumnConfigSortComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: StructureCommandService },
    { type: CompositionReadModelService }
];
StructureColumnConfigSortComponent.propDecorators = {
    column: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructureColumnConfigSortComponent.prototype.column;
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
    StructureColumnConfigSortComponent.prototype.structureCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigSortComponent.prototype.compositionReadModelService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctc29ydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvaGVhZGVyL21lbnUvbWFpbi9zb3J0L3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLXNvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUU1RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBQ2hHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlGQUFpRixDQUFDO0FBQzFILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBQ2xILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQThCakYsTUFBTSxPQUFPLGtDQUFtQyxTQUFRLGNBQWM7Ozs7OztJQVdyRSxZQUFvQixpQkFBb0MsRUFDN0MsdUJBQWdELEVBQ2hELDJCQUF3RDtRQUNsRSxLQUFLLEVBQUUsQ0FBQztRQUhXLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0MsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCxnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCO1FBUm5FLGNBQVMsR0FBYyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBRXZDLFdBQU0sR0FBRyxTQUFTLENBQUM7SUFRbkIsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFOUMsSUFBSSxDQUFDLDJCQUEyQjthQUM5QixXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUNyQyxJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxDQUFDLFVBQXFCLEVBQUUsRUFBRTtZQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztZQUM3QixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsR0FBRyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1QsT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELFVBQVU7UUFDVCxPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxJQUFlO1FBQzNCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsdUJBQXVCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0UsQ0FBQzs7O1lBMUVELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsa0NBQWtDO2dCQUM1QyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXdCVDthQUNEOzs7O1lBckNRLGlCQUFpQjtZQU1qQix1QkFBdUI7WUFDdkIsMkJBQTJCOzs7cUJBaUNsQyxLQUFLOzs7O0lBQU4sb0RBQ2dDOztJQUVoQyx1REFBdUM7O0lBRXZDLG9EQUFtQjs7SUFFbkIsd0RBQXNCOzs7OztJQUVWLCtEQUE0Qzs7Ozs7SUFDckQscUVBQXdEOzs7OztJQUN4RCx5RUFBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBsYWNlbWVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IFNvcnRPcmRlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21tYW5kL2NvbHVtbi9zb3J0L3NvcnQtb3JkZXInO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29tbWFuZC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL3VpLWFwaS9jb21wb3NpdGlvbi1yZWFkLW1vZGVsLnNlcnZpY2UnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtY29sdW1uLWNvbmZpZy1zb3J0Jyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxndWktZHJvcGRvd24gW3BsYWNlbWVudF09XCJwbGFjZW1lbnRcIlxuXHRcdFx0XHRcdCAgW2Ryb3Bkb3duVGV4dF09XCInQ29sdW1uIFNvcnQnXCJcblx0XHRcdFx0XHQgIFt3aWR0aF09XCIyMjVcIlxuXHRcdFx0XHRcdCAgW3Nob3dPbkhvdmVyXT1cInRydWVcIlxuXHRcdFx0XHRcdCAgY2xhc3M9XCJndWktaGVhZGVyLW1lbnUtZHJvcGRvd25cIj5cblxuXHRcdFx0PGd1aS1kcm9wZG93bi1pdGVtIChjbGljayk9XCJzZXRTb3J0T3JkZXIoc3RhdHVzLkFTQylcIlxuXHRcdFx0XHRcdFx0XHQgICBbY2xhc3MuZ3VpLWhlYWRlci1pdGVtLWFjdGl2ZV09XCJpc0FzY1NvcnQoKVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLXNvcnQtdGl0bGVcIj5Bc2NlbmRpbmc8c3BhbiBjbGFzcz1cImd1aS1zb3J0IGd1aS1zb3J0LWFzY1wiPjwvc3Bhbj48L2Rpdj5cblx0XHRcdDwvZ3VpLWRyb3Bkb3duLWl0ZW0+XG5cblx0XHRcdDxndWktZHJvcGRvd24taXRlbSAoY2xpY2spPVwic2V0U29ydE9yZGVyKHN0YXR1cy5ERVNDKVwiXG5cdFx0XHRcdFx0XHRcdCAgIFtjbGFzcy5ndWktaGVhZGVyLWl0ZW0tYWN0aXZlXT1cImlzRGVzY1NvcnQoKVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLXNvcnQtdGl0bGVcIj5EZXNjZW5kaW5nPHNwYW4gY2xhc3M9XCJndWktc29ydCBndWktc29ydC1kZXNjXCI+PC9zcGFuPjwvZGl2PlxuXHRcdFx0PC9ndWktZHJvcGRvd24taXRlbT5cblxuXHRcdFx0PGd1aS1kcm9wZG93bi1pdGVtIChjbGljayk9XCJzZXRTb3J0T3JkZXIoc3RhdHVzLk5PTkUpXCJcblx0XHRcdFx0XHRcdFx0ICAgW2NsYXNzLmd1aS1oZWFkZXItaXRlbS1hY3RpdmVdPVwiaXNOb25lU29ydCgpXCI+XG5cdFx0XHRcdE5vbmVcblx0XHRcdDwvZ3VpLWRyb3Bkb3duLWl0ZW0+XG5cblx0XHQ8L2d1aS1kcm9wZG93bj5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdTb3J0Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQ7XG5cblx0cGxhY2VtZW50OiBQbGFjZW1lbnQgPSBQbGFjZW1lbnQuUmlnaHQ7XG5cblx0c3RhdHVzID0gU29ydE9yZGVyO1xuXG5cdHNvcnRTdGF0dXM6IFNvcnRPcmRlcjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgY29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlOiBDb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5zb3J0U3RhdHVzID0gdGhpcy5jb2x1bW4uZ2V0U29ydFN0YXR1cygpO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vblNvcnRPcmRlcih0aGlzLmNvbHVtbi5nZXRGaWVsZElkKCkpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoc29ydFN0YXR1czogU29ydE9yZGVyKSA9PiB7XG5cdFx0XHRcdHRoaXMuc29ydFN0YXR1cyA9IHNvcnRTdGF0dXM7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRpc0FzY1NvcnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydFN0YXR1cyA9PT0gU29ydE9yZGVyLkFTQztcblx0fVxuXG5cdGlzRGVzY1NvcnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydFN0YXR1cyA9PT0gU29ydE9yZGVyLkRFU0M7XG5cdH1cblxuXHRpc05vbmVTb3J0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvcnRTdGF0dXMgPT09IFNvcnRPcmRlci5OT05FO1xuXHR9XG5cblx0c2V0U29ydE9yZGVyKHNvcnQ6IFNvcnRPcmRlcik6IHZvaWQge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uuc2V0U29ydE9yZGVyKHRoaXMuY29sdW1uLmdldEZpZWxkSWQoKSwgc29ydCk7XG5cdH1cbn1cbiJdfQ==