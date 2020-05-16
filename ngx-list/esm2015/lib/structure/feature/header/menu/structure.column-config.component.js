/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { StructureCommandDispatcher } from '../../../domain-api/structure.command-dispatcher';
import { CellTemplateWithContext } from '../../../../composition/domain-api/read/definition/cell-template-with-context';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { CompositionWarehouse } from '../../../../composition/domain-api/composition.warehouse';
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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
}
StructureColumnConfigComponent.decorators = [
    { type: Component, args: [{
                template: `
		<div *ngIf="isEnabled()"
			 class="gui-header-menu-tab">

			<gui-tab [menu]="config.getMenus()" [active]="config.getActiveMenu()">

				<ng-container *ngIf="config.isMainEnabled()">

					<gui-tab-item class="gui-tab-item-dropdown" [tab]="config.getMainMenu()">

						<gui-structure-column-config-sort *ngIf="column.isSortEnabled()"
														  [column]="column">
						</gui-structure-column-config-sort>

						<gui-structure-column-config-column-hide
								[column]="column">
						</gui-structure-column-config-column-hide>

						<gui-structure-column-config-column-move
								[column]="column">
						</gui-structure-column-config-column-move>

					</gui-tab-item>

				</ng-container>

				<ng-container *ngIf="config.isFilteringEnabled()">

					<gui-tab-item [tab]="config.getFilterMenu()">
						<div class="gui-header-menu-item">{{config.getFilterMenu()}}</div>
					</gui-tab-item>

				</ng-container>

				<ng-container *ngIf="config.isColumnManagerEnabled()">

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
    { type: StructureCommandDispatcher },
    { type: CompositionWarehouse },
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
    /** @type {?} */
    StructureColumnConfigComponent.prototype.column;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2ZlYXR1cmUvaGVhZGVyL21lbnUvc3RydWN0dXJlLmNvbHVtbi1jb25maWcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtFQUErRSxDQUFDO0FBQ3hILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUVoRyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQXNEakcsTUFBTSxPQUFPLDhCQUErQixTQUFRLGNBQWM7Ozs7Ozs7O0lBT2pFLFlBQW9CLGlCQUFvQyxFQUM3Qyx1QkFBbUQsRUFDbkQsMkJBQWlELEVBQ2pELGdDQUFrRSxFQUNqRCxNQUErQjtRQUMxRCxLQUFLLEVBQUUsQ0FBQztRQUxXLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0MsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUE0QjtRQUNuRCxnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQXNCO1FBQ2pELHFDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBa0M7UUFDakQsV0FBTSxHQUFOLE1BQU0sQ0FBeUI7SUFFM0QsQ0FBQzs7OztJQUVELFFBQVE7UUFFUCxJQUFJLENBQUMsZ0NBQWdDO2FBQ25DLE9BQU8sRUFBRTthQUNULElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsTUFBaUMsRUFBRSxFQUFFO1lBQ2hELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDL0MsQ0FBQzs7O1lBaEZELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBK0NUO2FBQ0Q7Ozs7WUE1RFEsaUJBQWlCO1lBRWpCLDBCQUEwQjtZQUcxQixvQkFBb0I7WUFFcEIsZ0NBQWdDO1lBSmhDLHVCQUF1Qix1QkFxRTNCLE1BQU0sU0FBQyxRQUFROzs7NkJBVGxCLFNBQVMsU0FBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Ozs7SUFBOUMsd0RBQzJCOztJQUUzQixnREFBa0M7Ozs7O0lBRXRCLDJEQUE0Qzs7Ozs7SUFDckQsaUVBQTJEOzs7OztJQUMzRCxxRUFBeUQ7Ozs7O0lBQ3pELDBFQUEwRTs7SUFDMUUsZ0RBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvc3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4tYXBpL2NvbXBvc2l0aW9uLndhcmVob3VzZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlIH0gZnJvbSAnLi9jb25maWcvc3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcgfSBmcm9tICcuL2NvbmZpZy9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUtY29uZmlnJztcblxuXG5AQ29tcG9uZW50KHtcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2ICpuZ0lmPVwiaXNFbmFibGVkKClcIlxuXHRcdFx0IGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51LXRhYlwiPlxuXG5cdFx0XHQ8Z3VpLXRhYiBbbWVudV09XCJjb25maWcuZ2V0TWVudXMoKVwiIFthY3RpdmVdPVwiY29uZmlnLmdldEFjdGl2ZU1lbnUoKVwiPlxuXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJjb25maWcuaXNNYWluRW5hYmxlZCgpXCI+XG5cblx0XHRcdFx0XHQ8Z3VpLXRhYi1pdGVtIGNsYXNzPVwiZ3VpLXRhYi1pdGVtLWRyb3Bkb3duXCIgW3RhYl09XCJjb25maWcuZ2V0TWFpbk1lbnUoKVwiPlxuXG5cdFx0XHRcdFx0XHQ8Z3VpLXN0cnVjdHVyZS1jb2x1bW4tY29uZmlnLXNvcnQgKm5nSWY9XCJjb2x1bW4uaXNTb3J0RW5hYmxlZCgpXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIFtjb2x1bW5dPVwiY29sdW1uXCI+XG5cdFx0XHRcdFx0XHQ8L2d1aS1zdHJ1Y3R1cmUtY29sdW1uLWNvbmZpZy1zb3J0PlxuXG5cdFx0XHRcdFx0XHQ8Z3VpLXN0cnVjdHVyZS1jb2x1bW4tY29uZmlnLWNvbHVtbi1oaWRlXG5cdFx0XHRcdFx0XHRcdFx0W2NvbHVtbl09XCJjb2x1bW5cIj5cblx0XHRcdFx0XHRcdDwvZ3VpLXN0cnVjdHVyZS1jb2x1bW4tY29uZmlnLWNvbHVtbi1oaWRlPlxuXG5cdFx0XHRcdFx0XHQ8Z3VpLXN0cnVjdHVyZS1jb2x1bW4tY29uZmlnLWNvbHVtbi1tb3ZlXG5cdFx0XHRcdFx0XHRcdFx0W2NvbHVtbl09XCJjb2x1bW5cIj5cblx0XHRcdFx0XHRcdDwvZ3VpLXN0cnVjdHVyZS1jb2x1bW4tY29uZmlnLWNvbHVtbi1tb3ZlPlxuXG5cdFx0XHRcdFx0PC9ndWktdGFiLWl0ZW0+XG5cblx0XHRcdFx0PC9uZy1jb250YWluZXI+XG5cblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZy5pc0ZpbHRlcmluZ0VuYWJsZWQoKVwiPlxuXG5cdFx0XHRcdFx0PGd1aS10YWItaXRlbSBbdGFiXT1cImNvbmZpZy5nZXRGaWx0ZXJNZW51KClcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJndWktaGVhZGVyLW1lbnUtaXRlbVwiPnt7Y29uZmlnLmdldEZpbHRlck1lbnUoKX19PC9kaXY+XG5cdFx0XHRcdFx0PC9ndWktdGFiLWl0ZW0+XG5cblx0XHRcdFx0PC9uZy1jb250YWluZXI+XG5cblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZy5pc0NvbHVtbk1hbmFnZXJFbmFibGVkKClcIj5cblxuXHRcdFx0XHRcdDxndWktdGFiLWl0ZW0gW3RhYl09XCJjb25maWcuZ2V0Q29sdW1uTWVudSgpXCI+XG5cblx0XHRcdFx0XHRcdDxndWktc3RydWN0dXJlLW1lbnUtY29sdW1uLW1hbmFnZXI+XG5cdFx0XHRcdFx0XHQ8L2d1aS1zdHJ1Y3R1cmUtbWVudS1jb2x1bW4tbWFuYWdlcj5cblxuXHRcdFx0XHRcdDwvZ3VpLXRhYi1pdGVtPlxuXG5cdFx0XHRcdDwvbmctY29udGFpbmVyPlxuXG5cdFx0XHQ8L2d1aS10YWI+XG5cdFx0PC9kaXY+XG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uQ29uZmlnQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBWaWV3Q2hpbGQoJ2hlYWRlclNvcnRNZW51JywgeyBzdGF0aWM6IGZhbHNlIH0pXG5cdGhlYWRlclNvcnRNZW51OiBFbGVtZW50UmVmO1xuXG5cdGNvbmZpZzogU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgY29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlOiBDb21wb3NpdGlvbldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZTogU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmUsXG5cdFx0XHRcdEBJbmplY3QoJ2NvbHVtbicpIHB1YmxpYyBjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZVxuXHRcdFx0Lm9uVmFsdWUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGNvbmZpZzogU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZykgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbmZpZyA9IGNvbmZpZztcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcuaXNFbmFibGVkKCk7XG5cdH1cbn1cbiJdfQ==