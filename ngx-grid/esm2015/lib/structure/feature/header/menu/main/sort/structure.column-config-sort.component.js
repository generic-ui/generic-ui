/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Placement } from '@generic-ui/fabric';
import { SortOrder } from '../../../../../../composition/domain/column/sort/sort-order';
import { CellTemplateWithContext } from '../../../../../../composition/domain-api/read/definition/cell-template-with-context';
import { CompositionWarehouse } from '../../../../../../composition/domain-api/composition.warehouse';
import { SmartComponent } from '../../../../../../../common/cdk/smart-component';
import { SortingCommandDispatcher } from '../../../../../../../structure/sorting/domain-api/sorting.command-dispatcher';
import { CompositionId } from '../../../../../../composition/domain/composition.id';
import { StructureId } from '../../../../../domain/structure.id';
export class StructureColumnConfigSortComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} compositionId
     * @param {?} structureId
     * @param {?} sortingCommandDispatcher
     * @param {?} compositionReadModelService
     */
    constructor(changeDetectorRef, compositionId, structureId, sortingCommandDispatcher, compositionReadModelService) {
        super();
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
    { type: CompositionId },
    { type: StructureId },
    { type: SortingCommandDispatcher },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctc29ydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS9oZWFkZXIvbWVudS9tYWluL3NvcnQvc3RydWN0dXJlLmNvbHVtbi1jb25maWctc29ydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRTVFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDeEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUZBQXFGLENBQUM7QUFDOUgsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDdEcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ2pGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhFQUE4RSxDQUFDO0FBQ3hILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNwRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFvQ2pFLE1BQU0sT0FBTyxrQ0FBbUMsU0FBUSxjQUFjOzs7Ozs7OztJQVdyRSxZQUE2QixpQkFBb0MsRUFDN0MsYUFBNEIsRUFDNUIsV0FBd0IsRUFDeEIsd0JBQWtELEVBQ2xELDJCQUFpRDtRQUNwRSxLQUFLLEVBQUUsQ0FBQztRQUxvQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUFzQjtRQVZyRSxjQUFTLEdBQWMsU0FBUyxDQUFDLEtBQUssQ0FBQztRQUV2QyxXQUFNLEdBQUcsU0FBUyxDQUFDO0lBVW5CLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRTlDLElBQUksQ0FBQywyQkFBMkI7YUFDOUIsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDckMsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxVQUFxQixFQUFFLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7WUFDN0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLEdBQUcsQ0FBQztJQUMxQyxDQUFDOzs7O0lBRUQsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsSUFBSSxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1QsT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsSUFBZTtRQUMzQixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsSCxDQUFDOzs7WUFsRkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxrQ0FBa0M7Z0JBQzVDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBOEJUO2FBQ0Q7Ozs7WUE3Q1EsaUJBQWlCO1lBU2pCLGFBQWE7WUFDYixXQUFXO1lBRlgsd0JBQXdCO1lBRnhCLG9CQUFvQjs7O3FCQTBDM0IsS0FBSzs7OztJQUFOLG9EQUNnQzs7SUFFaEMsdURBQXVDOztJQUV2QyxvREFBbUI7O0lBRW5CLHdEQUFzQjs7Ozs7SUFFViwrREFBcUQ7Ozs7O0lBQzlELDJEQUE2Qzs7Ozs7SUFDN0MseURBQXlDOzs7OztJQUN6QyxzRUFBbUU7Ozs7O0lBQ25FLHlFQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGxhY2VtZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9zb3J0L3NvcnQtb3JkZXInO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4tYXBpL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvY29tcG9zaXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgU29ydGluZ0NvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvcnRpbmcvZG9tYWluLWFwaS9zb3J0aW5nLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtY29sdW1uLWNvbmZpZy1zb3J0Jyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxndWktZHJvcGRvd24gW3BsYWNlbWVudF09XCJwbGFjZW1lbnRcIlxuXHRcdFx0XHRcdCAgW2Ryb3Bkb3duVGV4dF09XCInQ29sdW1uIFNvcnQnXCJcblx0XHRcdFx0XHQgIFt3aWR0aF09XCIyMjVcIlxuXHRcdFx0XHRcdCAgW3Nob3dPbkhvdmVyXT1cInRydWVcIlxuXHRcdFx0XHRcdCAgY2xhc3M9XCJndWktaGVhZGVyLW1lbnUtZHJvcGRvd25cIj5cblxuXHRcdFx0PGd1aS1kcm9wZG93bi1pdGVtIChjbGljayk9XCJzZXRTb3J0T3JkZXIoc3RhdHVzLkFTQylcIlxuXHRcdFx0XHRcdFx0XHQgICBbY2xhc3MuZ3VpLWhlYWRlci1pdGVtLWFjdGl2ZV09XCJpc0FzY1NvcnQoKVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLXNvcnQtdGl0bGVcIj5Bc2NlbmRpbmdcblx0XHRcdFx0XHQ8Z3VpLXN0cnVjdHVyZS1jb2x1bW4tbWVudS1hcnJvdy1pY29uIFtzb3J0XT1cInRydWVcIiBbcm90YXRlRGVnXT1cIjBcIj5cblx0XHRcdFx0XHQ8L2d1aS1zdHJ1Y3R1cmUtY29sdW1uLW1lbnUtYXJyb3ctaWNvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2d1aS1kcm9wZG93bi1pdGVtPlxuXG5cdFx0XHQ8Z3VpLWRyb3Bkb3duLWl0ZW0gKGNsaWNrKT1cInNldFNvcnRPcmRlcihzdGF0dXMuREVTQylcIlxuXHRcdFx0XHRcdFx0XHQgICBbY2xhc3MuZ3VpLWhlYWRlci1pdGVtLWFjdGl2ZV09XCJpc0Rlc2NTb3J0KClcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImd1aS1zb3J0LXRpdGxlXCI+RGVzY2VuZGluZ1xuXHRcdFx0XHRcdDxndWktc3RydWN0dXJlLWNvbHVtbi1tZW51LWFycm93LWljb24gW3NvcnRdPVwidHJ1ZVwiIFtyb3RhdGVEZWddPVwiMTgwXCI+XG5cdFx0XHRcdFx0PC9ndWktc3RydWN0dXJlLWNvbHVtbi1tZW51LWFycm93LWljb24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9ndWktZHJvcGRvd24taXRlbT5cblxuXHRcdFx0PGd1aS1kcm9wZG93bi1pdGVtIChjbGljayk9XCJzZXRTb3J0T3JkZXIoc3RhdHVzLk5PTkUpXCJcblx0XHRcdFx0XHRcdFx0ICAgW2NsYXNzLmd1aS1oZWFkZXItaXRlbS1hY3RpdmVdPVwiaXNOb25lU29ydCgpXCI+XG5cdFx0XHRcdE5vbmVcblx0XHRcdDwvZ3VpLWRyb3Bkb3duLWl0ZW0+XG5cblx0XHQ8L2d1aS1kcm9wZG93bj5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdTb3J0Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQ7XG5cblx0cGxhY2VtZW50OiBQbGFjZW1lbnQgPSBQbGFjZW1lbnQuUmlnaHQ7XG5cblx0c3RhdHVzID0gU29ydE9yZGVyO1xuXG5cdHNvcnRTdGF0dXM6IFNvcnRPcmRlcjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3J0aW5nQ29tbWFuZERpc3BhdGNoZXI6IFNvcnRpbmdDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2U6IENvbXBvc2l0aW9uV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuc29ydFN0YXR1cyA9IHRoaXMuY29sdW1uLmdldFNvcnRTdGF0dXMoKTtcblxuXHRcdHRoaXMuY29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlXG5cdFx0XHQub25Tb3J0T3JkZXIodGhpcy5jb2x1bW4uZ2V0RmllbGRJZCgpKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHNvcnRTdGF0dXM6IFNvcnRPcmRlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnNvcnRTdGF0dXMgPSBzb3J0U3RhdHVzO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0aXNBc2NTb3J0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvcnRTdGF0dXMgPT09IFNvcnRPcmRlci5BU0M7XG5cdH1cblxuXHRpc0Rlc2NTb3J0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvcnRTdGF0dXMgPT09IFNvcnRPcmRlci5ERVNDO1xuXHR9XG5cblx0aXNOb25lU29ydCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zb3J0U3RhdHVzID09PSBTb3J0T3JkZXIuTk9ORTtcblx0fVxuXG5cdHNldFNvcnRPcmRlcihzb3J0OiBTb3J0T3JkZXIpOiB2b2lkIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR0aGlzLnNvcnRpbmdDb21tYW5kRGlzcGF0Y2hlci5zZXRTb3J0T3JkZXIodGhpcy5jb2x1bW4uZ2V0RmllbGRJZCgpLCBzb3J0LCB0aGlzLmNvbXBvc2l0aW9uSWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG59XG4iXX0=