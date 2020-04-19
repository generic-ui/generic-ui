/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Placement } from '@generic-ui/fabric';
import { SortOrder } from '../../../../../../composition/domain/column/sort/sort-order';
import { CellTemplateWithContext } from '../../../../../../composition/feature-api/read/definition/cell-template-with-context';
import { StructureCommandDispatcher } from '../../../../../feature-api/structure.command-dispatcher';
import { CompositionWarehouse } from '../../../../../../composition/feature-api/composition.warehouse';
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
				<div class="gui-sort-title">Ascending
					<gui-structure-column-menu-arrow-icon [sort]="true" [rotateDeg]="0">
					</gui-structure-column-menu-arrow-icon>
				</div>
			</gui-dropdown-item>

			<gui-dropdown-item (click)="setSortOrder(status.DESC)"
							   [class.gui-header-item-active]="isDescSort()">
				<div class="gui-sort-title">Descending
					<gui-structure-column-menu-arrow-icon [sort]="true" [rotateDeg]="180">
					</gui-structure-column-menu-arrow-icon>
				</div>
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
    { type: StructureCommandDispatcher },
    { type: CompositionWarehouse }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctc29ydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS9oZWFkZXIvbWVudS9tYWluL3NvcnQvc3RydWN0dXJlLmNvbHVtbi1jb25maWctc29ydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRTVFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDeEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0ZBQXNGLENBQUM7QUFDL0gsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDckcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDdkcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBb0NqRixNQUFNLE9BQU8sa0NBQW1DLFNBQVEsY0FBYzs7Ozs7O0lBV3JFLFlBQW9CLGlCQUFvQyxFQUM3Qyx1QkFBbUQsRUFDbkQsMkJBQWlEO1FBQzNELEtBQUssRUFBRSxDQUFDO1FBSFcsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3Qyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQTRCO1FBQ25ELGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBc0I7UUFSNUQsY0FBUyxHQUFjLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFFdkMsV0FBTSxHQUFHLFNBQVMsQ0FBQztJQVFuQixDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUU5QyxJQUFJLENBQUMsMkJBQTJCO2FBQzlCLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ3JDLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsVUFBcUIsRUFBRSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQzdCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxHQUFHLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELFVBQVU7UUFDVCxPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQztJQUMzQyxDQUFDOzs7O0lBRUQsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsSUFBSSxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLElBQWU7UUFDM0IsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRSxDQUFDOzs7WUFoRkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxrQ0FBa0M7Z0JBQzVDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBOEJUO2FBQ0Q7Ozs7WUEzQ1EsaUJBQWlCO1lBTWpCLDBCQUEwQjtZQUMxQixvQkFBb0I7OztxQkF1QzNCLEtBQUs7Ozs7SUFBTixvREFDZ0M7O0lBRWhDLHVEQUF1Qzs7SUFFdkMsb0RBQW1COztJQUVuQix3REFBc0I7Ozs7O0lBRVYsK0RBQTRDOzs7OztJQUNyRCxxRUFBMkQ7Ozs7O0lBQzNELHlFQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGxhY2VtZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9zb3J0L3NvcnQtb3JkZXInO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9mZWF0dXJlLWFwaS9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWFwaS9zdHJ1Y3R1cmUuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZmVhdHVyZS1hcGkvY29tcG9zaXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLWNvbHVtbi1jb25maWctc29ydCcsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8Z3VpLWRyb3Bkb3duIFtwbGFjZW1lbnRdPVwicGxhY2VtZW50XCJcblx0XHRcdFx0XHQgIFtkcm9wZG93blRleHRdPVwiJ0NvbHVtbiBTb3J0J1wiXG5cdFx0XHRcdFx0ICBbd2lkdGhdPVwiMjI1XCJcblx0XHRcdFx0XHQgIFtzaG93T25Ib3Zlcl09XCJ0cnVlXCJcblx0XHRcdFx0XHQgIGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51LWRyb3Bkb3duXCI+XG5cblx0XHRcdDxndWktZHJvcGRvd24taXRlbSAoY2xpY2spPVwic2V0U29ydE9yZGVyKHN0YXR1cy5BU0MpXCJcblx0XHRcdFx0XHRcdFx0ICAgW2NsYXNzLmd1aS1oZWFkZXItaXRlbS1hY3RpdmVdPVwiaXNBc2NTb3J0KClcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImd1aS1zb3J0LXRpdGxlXCI+QXNjZW5kaW5nXG5cdFx0XHRcdFx0PGd1aS1zdHJ1Y3R1cmUtY29sdW1uLW1lbnUtYXJyb3ctaWNvbiBbc29ydF09XCJ0cnVlXCIgW3JvdGF0ZURlZ109XCIwXCI+XG5cdFx0XHRcdFx0PC9ndWktc3RydWN0dXJlLWNvbHVtbi1tZW51LWFycm93LWljb24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9ndWktZHJvcGRvd24taXRlbT5cblxuXHRcdFx0PGd1aS1kcm9wZG93bi1pdGVtIChjbGljayk9XCJzZXRTb3J0T3JkZXIoc3RhdHVzLkRFU0MpXCJcblx0XHRcdFx0XHRcdFx0ICAgW2NsYXNzLmd1aS1oZWFkZXItaXRlbS1hY3RpdmVdPVwiaXNEZXNjU29ydCgpXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJndWktc29ydC10aXRsZVwiPkRlc2NlbmRpbmdcblx0XHRcdFx0XHQ8Z3VpLXN0cnVjdHVyZS1jb2x1bW4tbWVudS1hcnJvdy1pY29uIFtzb3J0XT1cInRydWVcIiBbcm90YXRlRGVnXT1cIjE4MFwiPlxuXHRcdFx0XHRcdDwvZ3VpLXN0cnVjdHVyZS1jb2x1bW4tbWVudS1hcnJvdy1pY29uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZ3VpLWRyb3Bkb3duLWl0ZW0+XG5cblx0XHRcdDxndWktZHJvcGRvd24taXRlbSAoY2xpY2spPVwic2V0U29ydE9yZGVyKHN0YXR1cy5OT05FKVwiXG5cdFx0XHRcdFx0XHRcdCAgIFtjbGFzcy5ndWktaGVhZGVyLWl0ZW0tYWN0aXZlXT1cImlzTm9uZVNvcnQoKVwiPlxuXHRcdFx0XHROb25lXG5cdFx0XHQ8L2d1aS1kcm9wZG93bi1pdGVtPlxuXG5cdFx0PC9ndWktZHJvcGRvd24+XG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uQ29uZmlnU29ydENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0O1xuXG5cdHBsYWNlbWVudDogUGxhY2VtZW50ID0gUGxhY2VtZW50LlJpZ2h0O1xuXG5cdHN0YXR1cyA9IFNvcnRPcmRlcjtcblxuXHRzb3J0U3RhdHVzOiBTb3J0T3JkZXI7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlQ29tbWFuZFNlcnZpY2U6IFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIGNvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZTogQ29tcG9zaXRpb25XYXJlaG91c2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5zb3J0U3RhdHVzID0gdGhpcy5jb2x1bW4uZ2V0U29ydFN0YXR1cygpO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vblNvcnRPcmRlcih0aGlzLmNvbHVtbi5nZXRGaWVsZElkKCkpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoc29ydFN0YXR1czogU29ydE9yZGVyKSA9PiB7XG5cdFx0XHRcdHRoaXMuc29ydFN0YXR1cyA9IHNvcnRTdGF0dXM7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRpc0FzY1NvcnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydFN0YXR1cyA9PT0gU29ydE9yZGVyLkFTQztcblx0fVxuXG5cdGlzRGVzY1NvcnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydFN0YXR1cyA9PT0gU29ydE9yZGVyLkRFU0M7XG5cdH1cblxuXHRpc05vbmVTb3J0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvcnRTdGF0dXMgPT09IFNvcnRPcmRlci5OT05FO1xuXHR9XG5cblx0c2V0U29ydE9yZGVyKHNvcnQ6IFNvcnRPcmRlcik6IHZvaWQge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uuc2V0U29ydE9yZGVyKHRoaXMuY29sdW1uLmdldEZpZWxkSWQoKSwgc29ydCk7XG5cdH1cbn1cbiJdfQ==