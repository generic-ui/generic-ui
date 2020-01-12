/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { StructureCommandService } from '../../../ui-api/structure/structure-command.service';
import { CellTemplateWithContext } from '../../../domain/composition/read/definition/cell-template-with-context';
import { SortStatus } from '../../../domain/composition/command/sort/sort-status';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { CompositionReadModelService } from '../../../ui-api/composition/composition-read-model.service';
import { Placement } from '@generic-ui/fabric';
import { StructureColumnMenuConfigArchive } from './config/structure.column-menu-config.archive';
export class StructureColumnConfigComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} structureCommandService
     * @param {?} compositionReadModelService
     * @param {?} structureColumnMenuConfigArchive
     * @param {?} column
     */
    constructor(changeDetectorRef, structureCommandService, compositionReadModelService, structureColumnMenuConfigArchive, column) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.structureCommandService = structureCommandService;
        this.compositionReadModelService = compositionReadModelService;
        this.structureColumnMenuConfigArchive = structureColumnMenuConfigArchive;
        this.column = column;
        this.status = SortStatus;
        this.placement = Placement.Right;
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
        this.structureColumnMenuConfigArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} config
         * @return {?}
         */
        (config) => {
            this.config = config;
            this.changeDetectorRef.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    isEnabled() {
        return this.config && this.config.isEnabled();
    }
    /**
     * @return {?}
     */
    toggleSort() {
        this.structureCommandService.toggleSort(this.column.getFieldId());
    }
    /**
     * @return {?}
     */
    isAscSort() {
        return this.sortStatus === SortStatus.ASC;
    }
    /**
     * @return {?}
     */
    isDescSort() {
        return this.sortStatus === SortStatus.DESC;
    }
    /**
     * @return {?}
     */
    isNoneSort() {
        return this.sortStatus === SortStatus.NONE;
    }
    /**
     * @param {?} sort
     * @return {?}
     */
    setSortOrder(sort) {
        this.structureCommandService.setSortOrder(this.column.getFieldId(), sort);
    }
}
StructureColumnConfigComponent.decorators = [
    { type: Component, args: [{
                template: `
		<div *ngIf="isEnabled()"
			 class="gui-header-menu-tab">

			<gui-tab [menu]="config.getMenus()" [active]="config.getActiveMenu()">

				<ng-container *ngIf="config.isMainEnabled()">

					<gui-tab-item class="gui-tab-item-dropdown" [tab]="config.getMainMenu()">
						<div >
							<gui-dropdown [placement]="placement"
										  [dropdownText]="'Column Sort'"
										  [width]="225"
										  [showOnHover]="true"
										  class="gui-header-menu-dropdown">

								<gui-dropdown-item (click)="setSortOrder(status.ASC)"
												   [class.gui-header-text-bold]="isAscSort()">
									Ascending
								</gui-dropdown-item>

								<gui-dropdown-item (click)="setSortOrder(status.DESC)"
												   [class.gui-header-text-bold]="isDescSort()">
									Descending
								</gui-dropdown-item>

								<gui-dropdown-item (click)="setSortOrder(status.NONE)"
												   [class.gui-header-text-bold]="isNoneSort()">
									Turned off
								</gui-dropdown-item>

							</gui-dropdown>
						</div>
<!--						<div class="gui-header-menu-item">Autosize This Column</div>-->
<!--						<div class="gui-header-menu-item">Autosize All Column</div>-->
<!--						<div class="gui-header-menu-item">Reset Columns</div>-->
<!--						<hr>-->
<!--						<div class="gui-header-menu-item">GenericUI is Great</div>-->
					</gui-tab-item>

				</ng-container>

				<ng-container *ngIf="config.isFilter()">
					
					<gui-tab-item [tab]="config.getFilterMenu()">
						<div class="gui-header-menu-item">{{config.getFilterMenu()}}</div>
					</gui-tab-item>
					
				</ng-container>

				<ng-container *ngIf="config.isColumns()">
					
					<gui-tab-item [tab]="config.getColumnMenu()">
						<div class="gui-header-menu-item">{{config.getColumnMenu()}}</div>
					</gui-tab-item>
					
				</ng-container>

			</gui-tab>
		</div>
	`
            }] }
];
/** @nocollapse */
StructureColumnConfigComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: StructureCommandService },
    { type: CompositionReadModelService },
    { type: StructureColumnMenuConfigArchive },
    { type: CellTemplateWithContext, decorators: [{ type: Inject, args: ['column',] }] }
];
StructureColumnConfigComponent.propDecorators = {
    headerSortMenu: [{ type: ViewChild, args: ['headerSortMenu', { static: false },] }]
};
if (false) {
    /** @type {?} */
    StructureColumnConfigComponent.prototype.headerSortMenu;
    /** @type {?} */
    StructureColumnConfigComponent.prototype.config;
    /** @type {?} */
    StructureColumnConfigComponent.prototype.sortStatus;
    /** @type {?} */
    StructureColumnConfigComponent.prototype.status;
    /** @type {?} */
    StructureColumnConfigComponent.prototype.placement;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigComponent.prototype.structureCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigComponent.prototype.compositionReadModelService;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigComponent.prototype.structureColumnMenuConfigArchive;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigComponent.prototype.column;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2hlYWRlci9tZW51L3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFVLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUUzRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUM5RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3RUFBd0UsQ0FBQztBQUNqSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDbEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQW1FakcsTUFBTSxPQUFPLDhCQUErQixTQUFRLGNBQWM7Ozs7Ozs7O0lBYWpFLFlBQW9CLGlCQUFvQyxFQUM3Qyx1QkFBZ0QsRUFDaEQsMkJBQXdELEVBQ3hELGdDQUFrRSxFQUNoRCxNQUErQjtRQUMzRCxLQUFLLEVBQUUsQ0FBQztRQUxXLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0MsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCxnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCO1FBQ3hELHFDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBa0M7UUFDaEQsV0FBTSxHQUFOLE1BQU0sQ0FBeUI7UUFSNUQsV0FBTSxHQUFHLFVBQVUsQ0FBQztRQUVwQixjQUFTLEdBQWMsU0FBUyxDQUFDLEtBQUssQ0FBQztJQVF2QyxDQUFDOzs7O0lBRUQsUUFBUTtRQUVQLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUU5QyxJQUFJLENBQUMsMkJBQTJCO2FBQzlCLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ3JDLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsVUFBc0IsRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQzdCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUVKLElBQUksQ0FBQyxnQ0FBZ0M7YUFDbkMsT0FBTyxFQUFFO2FBQ1QsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxNQUFpQyxFQUFFLEVBQUU7WUFDaEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDckIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMvQyxDQUFDOzs7O0lBRUQsVUFBVTtRQUNULElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLFVBQVUsQ0FBQyxHQUFHLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELFVBQVU7UUFDVCxPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxDQUFDLElBQUksQ0FBQztJQUM1QyxDQUFDOzs7O0lBRUQsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLElBQWdCO1FBQzVCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRSxDQUFDOzs7WUFuSUQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBNERUO2FBQ0Q7Ozs7WUExRVEsaUJBQWlCO1lBRWpCLHVCQUF1QjtZQUl2QiwyQkFBMkI7WUFFM0IsZ0NBQWdDO1lBTGhDLHVCQUF1Qix1QkF5RjNCLE1BQU0sU0FBQyxRQUFROzs7NkJBZmxCLFNBQVMsU0FBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Ozs7SUFBOUMsd0RBQzJCOztJQUUzQixnREFBa0M7O0lBRWxDLG9EQUF1Qjs7SUFFdkIsZ0RBQW9COztJQUVwQixtREFBdUM7Ozs7O0lBRTNCLDJEQUE0Qzs7Ozs7SUFDckQsaUVBQXdEOzs7OztJQUN4RCxxRUFBZ0U7Ozs7O0lBQ2hFLDBFQUEwRTs7Ozs7SUFDMUUsZ0RBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlL3N0cnVjdHVyZS1jb21tYW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IFNvcnRTdGF0dXMgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vY29tbWFuZC9zb3J0L3NvcnQtc3RhdHVzJztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL2NvbXBvc2l0aW9uL2NvbXBvc2l0aW9uLXJlYWQtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBQbGFjZW1lbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmUgfSBmcm9tICcuL2NvbmZpZy9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUtY29uZmlnLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZyB9IGZyb20gJy4vY29uZmlnL3N0cnVjdHVyZS5jb2x1bW4tbWVudS1jb25maWcnO1xuXG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgKm5nSWY9XCJpc0VuYWJsZWQoKVwiXG5cdFx0XHQgY2xhc3M9XCJndWktaGVhZGVyLW1lbnUtdGFiXCI+XG5cblx0XHRcdDxndWktdGFiIFttZW51XT1cImNvbmZpZy5nZXRNZW51cygpXCIgW2FjdGl2ZV09XCJjb25maWcuZ2V0QWN0aXZlTWVudSgpXCI+XG5cblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZy5pc01haW5FbmFibGVkKClcIj5cblxuXHRcdFx0XHRcdDxndWktdGFiLWl0ZW0gY2xhc3M9XCJndWktdGFiLWl0ZW0tZHJvcGRvd25cIiBbdGFiXT1cImNvbmZpZy5nZXRNYWluTWVudSgpXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2ID5cblx0XHRcdFx0XHRcdFx0PGd1aS1kcm9wZG93biBbcGxhY2VtZW50XT1cInBsYWNlbWVudFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgW2Ryb3Bkb3duVGV4dF09XCInQ29sdW1uIFNvcnQnXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICBbd2lkdGhdPVwiMjI1XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICBbc2hvd09uSG92ZXJdPVwidHJ1ZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgY2xhc3M9XCJndWktaGVhZGVyLW1lbnUtZHJvcGRvd25cIj5cblxuXHRcdFx0XHRcdFx0XHRcdDxndWktZHJvcGRvd24taXRlbSAoY2xpY2spPVwic2V0U29ydE9yZGVyKHN0YXR1cy5BU0MpXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIFtjbGFzcy5ndWktaGVhZGVyLXRleHQtYm9sZF09XCJpc0FzY1NvcnQoKVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0QXNjZW5kaW5nXG5cdFx0XHRcdFx0XHRcdFx0PC9ndWktZHJvcGRvd24taXRlbT5cblxuXHRcdFx0XHRcdFx0XHRcdDxndWktZHJvcGRvd24taXRlbSAoY2xpY2spPVwic2V0U29ydE9yZGVyKHN0YXR1cy5ERVNDKVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICBbY2xhc3MuZ3VpLWhlYWRlci10ZXh0LWJvbGRdPVwiaXNEZXNjU29ydCgpXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHREZXNjZW5kaW5nXG5cdFx0XHRcdFx0XHRcdFx0PC9ndWktZHJvcGRvd24taXRlbT5cblxuXHRcdFx0XHRcdFx0XHRcdDxndWktZHJvcGRvd24taXRlbSAoY2xpY2spPVwic2V0U29ydE9yZGVyKHN0YXR1cy5OT05FKVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICBbY2xhc3MuZ3VpLWhlYWRlci10ZXh0LWJvbGRdPVwiaXNOb25lU29ydCgpXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRUdXJuZWQgb2ZmXG5cdFx0XHRcdFx0XHRcdFx0PC9ndWktZHJvcGRvd24taXRlbT5cblxuXHRcdFx0XHRcdFx0XHQ8L2d1aS1kcm9wZG93bj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuPCEtLVx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJndWktaGVhZGVyLW1lbnUtaXRlbVwiPkF1dG9zaXplIFRoaXMgQ29sdW1uPC9kaXY+LS0+XG48IS0tXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImd1aS1oZWFkZXItbWVudS1pdGVtXCI+QXV0b3NpemUgQWxsIENvbHVtbjwvZGl2Pi0tPlxuPCEtLVx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJndWktaGVhZGVyLW1lbnUtaXRlbVwiPlJlc2V0IENvbHVtbnM8L2Rpdj4tLT5cbjwhLS1cdFx0XHRcdFx0XHQ8aHI+LS0+XG48IS0tXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImd1aS1oZWFkZXItbWVudS1pdGVtXCI+R2VuZXJpY1VJIGlzIEdyZWF0PC9kaXY+LS0+XG5cdFx0XHRcdFx0PC9ndWktdGFiLWl0ZW0+XG5cblx0XHRcdFx0PC9uZy1jb250YWluZXI+XG5cblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZy5pc0ZpbHRlcigpXCI+XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0PGd1aS10YWItaXRlbSBbdGFiXT1cImNvbmZpZy5nZXRGaWx0ZXJNZW51KClcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJndWktaGVhZGVyLW1lbnUtaXRlbVwiPnt7Y29uZmlnLmdldEZpbHRlck1lbnUoKX19PC9kaXY+XG5cdFx0XHRcdFx0PC9ndWktdGFiLWl0ZW0+XG5cdFx0XHRcdFx0XG5cdFx0XHRcdDwvbmctY29udGFpbmVyPlxuXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJjb25maWcuaXNDb2x1bW5zKClcIj5cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8Z3VpLXRhYi1pdGVtIFt0YWJdPVwiY29uZmlnLmdldENvbHVtbk1lbnUoKVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImd1aS1oZWFkZXItbWVudS1pdGVtXCI+e3tjb25maWcuZ2V0Q29sdW1uTWVudSgpfX08L2Rpdj5cblx0XHRcdFx0XHQ8L2d1aS10YWItaXRlbT5cblx0XHRcdFx0XHRcblx0XHRcdFx0PC9uZy1jb250YWluZXI+XG5cblx0XHRcdDwvZ3VpLXRhYj5cblx0XHQ8L2Rpdj5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0QFZpZXdDaGlsZCgnaGVhZGVyU29ydE1lbnUnLCB7IHN0YXRpYzogZmFsc2UgfSlcblx0aGVhZGVyU29ydE1lbnU6IEVsZW1lbnRSZWY7XG5cblx0Y29uZmlnOiBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnO1xuXG5cdHNvcnRTdGF0dXM6IFNvcnRTdGF0dXM7XG5cblx0c3RhdHVzID0gU29ydFN0YXR1cztcblxuXHRwbGFjZW1lbnQ6IFBsYWNlbWVudCA9IFBsYWNlbWVudC5SaWdodDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgY29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlOiBDb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlLFxuXHRcdFx0XHRASW5qZWN0KCdjb2x1bW4nKSBwcml2YXRlIGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLnNvcnRTdGF0dXMgPSB0aGlzLmNvbHVtbi5nZXRTb3J0U3RhdHVzKCk7XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZVxuXHRcdFx0Lm9uU29ydE9yZGVyKHRoaXMuY29sdW1uLmdldEZpZWxkSWQoKSlcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChzb3J0U3RhdHVzOiBTb3J0U3RhdHVzKSA9PiB7XG5cdFx0XHRcdHRoaXMuc29ydFN0YXR1cyA9IHNvcnRTdGF0dXM7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoY29uZmlnOiBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnKSA9PiB7XG5cdFx0XHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5pc0VuYWJsZWQoKTtcblx0fVxuXG5cdHRvZ2dsZVNvcnQoKSB7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS50b2dnbGVTb3J0KHRoaXMuY29sdW1uLmdldEZpZWxkSWQoKSk7XG5cdH1cblxuXHRpc0FzY1NvcnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydFN0YXR1cyA9PT0gU29ydFN0YXR1cy5BU0M7XG5cdH1cblxuXHRpc0Rlc2NTb3J0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvcnRTdGF0dXMgPT09IFNvcnRTdGF0dXMuREVTQztcblx0fVxuXG5cdGlzTm9uZVNvcnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydFN0YXR1cyA9PT0gU29ydFN0YXR1cy5OT05FO1xuXHR9XG5cblx0c2V0U29ydE9yZGVyKHNvcnQ6IFNvcnRTdGF0dXMpOiB2b2lkIHtcblx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLnNldFNvcnRPcmRlcih0aGlzLmNvbHVtbi5nZXRGaWVsZElkKCksIHNvcnQpO1xuXHR9XG5cbn1cbiJdfQ==