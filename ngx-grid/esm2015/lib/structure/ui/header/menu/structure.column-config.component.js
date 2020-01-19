/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { StructureCommandService } from '../../../ui-api/structure/structure-command.service';
import { CellTemplateWithContext } from '../../../domain/composition/read/definition/cell-template-with-context';
import { SortStatus } from '../../../domain/composition/command/column/sort/sort-status';
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
									<div class="gui-sort-title">Ascending<span class="gui-sort gui-sort-asc"></span></div>
								</gui-dropdown-item>

								<gui-dropdown-item (click)="setSortOrder(status.DESC)"
												   [class.gui-header-text-bold]="isDescSort()">
									<div class="gui-sort-title">Descending<span class="gui-sort gui-sort-desc"></span></div>
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

						<gui-structure-menu-column-manager>
						</gui-structure-menu-column-manager>
						
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2hlYWRlci9tZW51L3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFVLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUUzRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUM5RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3RUFBd0UsQ0FBQztBQUNqSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDekYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQXNFakcsTUFBTSxPQUFPLDhCQUErQixTQUFRLGNBQWM7Ozs7Ozs7O0lBYWpFLFlBQW9CLGlCQUFvQyxFQUM3Qyx1QkFBZ0QsRUFDaEQsMkJBQXdELEVBQ3hELGdDQUFrRSxFQUNoRCxNQUErQjtRQUMzRCxLQUFLLEVBQUUsQ0FBQztRQUxXLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0MsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCxnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCO1FBQ3hELHFDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBa0M7UUFDaEQsV0FBTSxHQUFOLE1BQU0sQ0FBeUI7UUFSNUQsV0FBTSxHQUFHLFVBQVUsQ0FBQztRQUVwQixjQUFTLEdBQWMsU0FBUyxDQUFDLEtBQUssQ0FBQztJQVF2QyxDQUFDOzs7O0lBRUQsUUFBUTtRQUVQLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUU5QyxJQUFJLENBQUMsMkJBQTJCO2FBQzlCLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ3JDLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsVUFBc0IsRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQzdCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUVKLElBQUksQ0FBQyxnQ0FBZ0M7YUFDbkMsT0FBTyxFQUFFO2FBQ1QsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxNQUFpQyxFQUFFLEVBQUU7WUFDaEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDckIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMvQyxDQUFDOzs7O0lBRUQsVUFBVTtRQUNULElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLFVBQVUsQ0FBQyxHQUFHLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELFVBQVU7UUFDVCxPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxDQUFDLElBQUksQ0FBQztJQUM1QyxDQUFDOzs7O0lBRUQsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLElBQWdCO1FBQzVCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRSxDQUFDOzs7WUF0SUQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBK0RUO2FBQ0Q7Ozs7WUE3RVEsaUJBQWlCO1lBRWpCLHVCQUF1QjtZQUl2QiwyQkFBMkI7WUFFM0IsZ0NBQWdDO1lBTGhDLHVCQUF1Qix1QkE0RjNCLE1BQU0sU0FBQyxRQUFROzs7NkJBZmxCLFNBQVMsU0FBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Ozs7SUFBOUMsd0RBQzJCOztJQUUzQixnREFBa0M7O0lBRWxDLG9EQUF1Qjs7SUFFdkIsZ0RBQW9COztJQUVwQixtREFBdUM7Ozs7O0lBRTNCLDJEQUE0Qzs7Ozs7SUFDckQsaUVBQXdEOzs7OztJQUN4RCxxRUFBZ0U7Ozs7O0lBQ2hFLDBFQUEwRTs7Ozs7SUFDMUUsZ0RBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlL3N0cnVjdHVyZS1jb21tYW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IFNvcnRTdGF0dXMgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vY29tbWFuZC9jb2x1bW4vc29ydC9zb3J0LXN0YXR1cyc7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9jb21wb3NpdGlvbi9jb21wb3NpdGlvbi1yZWFkLW1vZGVsLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGxhY2VtZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlIH0gZnJvbSAnLi9jb25maWcvc3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcgfSBmcm9tICcuL2NvbmZpZy9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUtY29uZmlnJztcblxuXG5AQ29tcG9uZW50KHtcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2ICpuZ0lmPVwiaXNFbmFibGVkKClcIlxuXHRcdFx0IGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51LXRhYlwiPlxuXG5cdFx0XHQ8Z3VpLXRhYiBbbWVudV09XCJjb25maWcuZ2V0TWVudXMoKVwiIFthY3RpdmVdPVwiY29uZmlnLmdldEFjdGl2ZU1lbnUoKVwiPlxuXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJjb25maWcuaXNNYWluRW5hYmxlZCgpXCI+XG5cblx0XHRcdFx0XHQ8Z3VpLXRhYi1pdGVtIGNsYXNzPVwiZ3VpLXRhYi1pdGVtLWRyb3Bkb3duXCIgW3RhYl09XCJjb25maWcuZ2V0TWFpbk1lbnUoKVwiPlxuXHRcdFx0XHRcdFx0PGRpdiA+XG5cdFx0XHRcdFx0XHRcdDxndWktZHJvcGRvd24gW3BsYWNlbWVudF09XCJwbGFjZW1lbnRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIFtkcm9wZG93blRleHRdPVwiJ0NvbHVtbiBTb3J0J1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgW3dpZHRoXT1cIjIyNVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgW3Nob3dPbkhvdmVyXT1cInRydWVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51LWRyb3Bkb3duXCI+XG5cblx0XHRcdFx0XHRcdFx0XHQ8Z3VpLWRyb3Bkb3duLWl0ZW0gKGNsaWNrKT1cInNldFNvcnRPcmRlcihzdGF0dXMuQVNDKVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICBbY2xhc3MuZ3VpLWhlYWRlci10ZXh0LWJvbGRdPVwiaXNBc2NTb3J0KClcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJndWktc29ydC10aXRsZVwiPkFzY2VuZGluZzxzcGFuIGNsYXNzPVwiZ3VpLXNvcnQgZ3VpLXNvcnQtYXNjXCI+PC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZ3VpLWRyb3Bkb3duLWl0ZW0+XG5cblx0XHRcdFx0XHRcdFx0XHQ8Z3VpLWRyb3Bkb3duLWl0ZW0gKGNsaWNrKT1cInNldFNvcnRPcmRlcihzdGF0dXMuREVTQylcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgW2NsYXNzLmd1aS1oZWFkZXItdGV4dC1ib2xkXT1cImlzRGVzY1NvcnQoKVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImd1aS1zb3J0LXRpdGxlXCI+RGVzY2VuZGluZzxzcGFuIGNsYXNzPVwiZ3VpLXNvcnQgZ3VpLXNvcnQtZGVzY1wiPjwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2d1aS1kcm9wZG93bi1pdGVtPlxuXG5cdFx0XHRcdFx0XHRcdFx0PGd1aS1kcm9wZG93bi1pdGVtIChjbGljayk9XCJzZXRTb3J0T3JkZXIoc3RhdHVzLk5PTkUpXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIFtjbGFzcy5ndWktaGVhZGVyLXRleHQtYm9sZF09XCJpc05vbmVTb3J0KClcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFR1cm5lZCBvZmZcblx0XHRcdFx0XHRcdFx0XHQ8L2d1aS1kcm9wZG93bi1pdGVtPlxuXG5cdFx0XHRcdFx0XHRcdDwvZ3VpLWRyb3Bkb3duPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG48IS0tXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImd1aS1oZWFkZXItbWVudS1pdGVtXCI+QXV0b3NpemUgVGhpcyBDb2x1bW48L2Rpdj4tLT5cbjwhLS1cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51LWl0ZW1cIj5BdXRvc2l6ZSBBbGwgQ29sdW1uPC9kaXY+LS0+XG48IS0tXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImd1aS1oZWFkZXItbWVudS1pdGVtXCI+UmVzZXQgQ29sdW1uczwvZGl2Pi0tPlxuPCEtLVx0XHRcdFx0XHRcdDxocj4tLT5cbjwhLS1cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51LWl0ZW1cIj5HZW5lcmljVUkgaXMgR3JlYXQ8L2Rpdj4tLT5cblx0XHRcdFx0XHQ8L2d1aS10YWItaXRlbT5cblxuXHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cblxuXHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiY29uZmlnLmlzRmlsdGVyKClcIj5cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8Z3VpLXRhYi1pdGVtIFt0YWJdPVwiY29uZmlnLmdldEZpbHRlck1lbnUoKVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImd1aS1oZWFkZXItbWVudS1pdGVtXCI+e3tjb25maWcuZ2V0RmlsdGVyTWVudSgpfX08L2Rpdj5cblx0XHRcdFx0XHQ8L2d1aS10YWItaXRlbT5cblx0XHRcdFx0XHRcblx0XHRcdFx0PC9uZy1jb250YWluZXI+XG5cblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZy5pc0NvbHVtbnMoKVwiPlxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdDxndWktdGFiLWl0ZW0gW3RhYl09XCJjb25maWcuZ2V0Q29sdW1uTWVudSgpXCI+XG5cblx0XHRcdFx0XHRcdDxndWktc3RydWN0dXJlLW1lbnUtY29sdW1uLW1hbmFnZXI+XG5cdFx0XHRcdFx0XHQ8L2d1aS1zdHJ1Y3R1cmUtbWVudS1jb2x1bW4tbWFuYWdlcj5cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdDwvZ3VpLXRhYi1pdGVtPlxuXHRcdFx0XHRcdFxuXHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cblxuXHRcdFx0PC9ndWktdGFiPlxuXHRcdDwvZGl2PlxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRAVmlld0NoaWxkKCdoZWFkZXJTb3J0TWVudScsIHsgc3RhdGljOiBmYWxzZSB9KVxuXHRoZWFkZXJTb3J0TWVudTogRWxlbWVudFJlZjtcblxuXHRjb25maWc6IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWc7XG5cblx0c29ydFN0YXR1czogU29ydFN0YXR1cztcblxuXHRzdGF0dXMgPSBTb3J0U3RhdHVzO1xuXG5cdHBsYWNlbWVudDogUGxhY2VtZW50ID0gUGxhY2VtZW50LlJpZ2h0O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlOiBTdHJ1Y3R1cmVDb21tYW5kU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSBjb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2U6IENvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZTogU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmUsXG5cdFx0XHRcdEBJbmplY3QoJ2NvbHVtbicpIHByaXZhdGUgY29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuc29ydFN0YXR1cyA9IHRoaXMuY29sdW1uLmdldFNvcnRTdGF0dXMoKTtcblxuXHRcdHRoaXMuY29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlXG5cdFx0XHQub25Tb3J0T3JkZXIodGhpcy5jb2x1bW4uZ2V0RmllbGRJZCgpKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHNvcnRTdGF0dXM6IFNvcnRTdGF0dXMpID0+IHtcblx0XHRcdFx0dGhpcy5zb3J0U3RhdHVzID0gc29ydFN0YXR1cztcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmVcblx0XHRcdC5vblZhbHVlKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChjb25maWc6IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcpID0+IHtcblx0XHRcdFx0dGhpcy5jb25maWcgPSBjb25maWc7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLmlzRW5hYmxlZCgpO1xuXHR9XG5cblx0dG9nZ2xlU29ydCgpIHtcblx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLnRvZ2dsZVNvcnQodGhpcy5jb2x1bW4uZ2V0RmllbGRJZCgpKTtcblx0fVxuXG5cdGlzQXNjU29ydCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zb3J0U3RhdHVzID09PSBTb3J0U3RhdHVzLkFTQztcblx0fVxuXG5cdGlzRGVzY1NvcnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydFN0YXR1cyA9PT0gU29ydFN0YXR1cy5ERVNDO1xuXHR9XG5cblx0aXNOb25lU29ydCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zb3J0U3RhdHVzID09PSBTb3J0U3RhdHVzLk5PTkU7XG5cdH1cblxuXHRzZXRTb3J0T3JkZXIoc29ydDogU29ydFN0YXR1cyk6IHZvaWQge1xuXHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uuc2V0U29ydE9yZGVyKHRoaXMuY29sdW1uLmdldEZpZWxkSWQoKSwgc29ydCk7XG5cdH1cblxufVxuIl19