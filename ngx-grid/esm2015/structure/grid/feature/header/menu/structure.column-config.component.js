/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { StructureCommandDispatcher } from '../../../../core/api/structure.command-dispatcher';
import { CellTemplateWithContext } from '../../../../../composition/core/domain-read/definition/cell-template-with-context';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { CompositionWarehouse } from '../../../../../composition/core/api/composition.warehouse';
import { StructureColumnMenuConfigArchive } from './config/structure.column-menu-config.archive';
import { FilterWarehouse } from '../../../../filter/core/api/filter.warehouse';
import { StructureId } from '../../../../core/api/structure.id';
import { TranslationService } from '../../../../../l10n/core/api/translation.service';
import { switchMap } from 'rxjs/operators';
export class StructureColumnConfigComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} structureId
     * @param {?} structureCommandService
     * @param {?} compositionReadModelService
     * @param {?} filterWarehouse
     * @param {?} translationService
     * @param {?} structureColumnMenuConfigArchive
     * @param {?} column
     */
    constructor(changeDetectorRef, structureId, structureCommandService, compositionReadModelService, filterWarehouse, translationService, structureColumnMenuConfigArchive, column) {
        super(changeDetectorRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.structureCommandService = structureCommandService;
        this.compositionReadModelService = compositionReadModelService;
        this.filterWarehouse = filterWarehouse;
        this.translationService = translationService;
        this.structureColumnMenuConfigArchive = structureColumnMenuConfigArchive;
        this.column = column;
        this.uniqueValues = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.filterWarehouse
            .onUniqueValues(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} uniqueValuesReadModel
         * @return {?}
         */
        (uniqueValuesReadModel) => {
            this.uniqueValues = uniqueValuesReadModel.getValues(this.column.getFieldId());
            this.changeDetectorRef.detectChanges();
        }));
        this.structureColumnMenuConfigArchive
            .onValue()
            .pipe(switchMap((/**
         * @param {?} config
         * @return {?}
         */
        (config) => {
            this.config = config;
            return this.translationService.onTranslation();
        })), this.takeUntil())
            .subscribe((/**
         * @param {?} translation
         * @return {?}
         */
        (translation) => {
            this.setTabTitles(translation);
            this.dropdownTextTranslation = translation.headerMenuMainTabColumnSort;
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
     * @private
     * @param {?} translation
     * @return {?}
     */
    setTabTitles(translation) {
        this.config.setMainMenu(translation.headerMenuMainTab);
        this.config.setFilterMenu(translation.headerMenuFilterTab);
        this.config.setColumnsMenu(translation.headerMenuColumnsTab);
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
														  [dropdownTextTranslation]="dropdownTextTranslation"
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

						<!--						<div class="gui-header-menu-item">{{config.getFilterMenu()}}</div>-->

						<gui-unique-value-list
							[fieldId]="column.getFieldId()">
						</gui-unique-value-list>

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
    { type: StructureId },
    { type: StructureCommandDispatcher },
    { type: CompositionWarehouse },
    { type: FilterWarehouse },
    { type: TranslationService },
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
    StructureColumnConfigComponent.prototype.uniqueValues;
    /** @type {?} */
    StructureColumnConfigComponent.prototype.hideColumnTitle;
    /** @type {?} */
    StructureColumnConfigComponent.prototype.dropdownTextTranslation;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigComponent.prototype.structureId;
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
    StructureColumnConfigComponent.prototype.filterWarehouse;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigComponent.prototype.translationService;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigComponent.prototype.structureColumnMenuConfigArchive;
    /** @type {?} */
    StructureColumnConfigComponent.prototype.column;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2hlYWRlci9tZW51L3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUMvRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtRkFBbUYsQ0FBQztBQUM1SCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDM0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFFakcsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFFakcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN0RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUE2RDNDLE1BQU0sT0FBTyw4QkFBK0IsU0FBUSxjQUFjOzs7Ozs7Ozs7OztJQWFqRSxZQUE2QixpQkFBb0MsRUFDN0MsV0FBd0IsRUFDeEIsdUJBQW1ELEVBQ25ELDJCQUFpRCxFQUNqRCxlQUFnQyxFQUNoQyxrQkFBc0MsRUFDdEMsZ0NBQWtFLEVBQ2pELE1BQStCO1FBQ25FLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBUkcsc0JBQWlCLEdBQWpCLGlCQUFp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aW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLndhcmVob3VzZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlIH0gZnJvbSAnLi9jb25maWcvc3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcgfSBmcm9tICcuL2NvbmZpZy9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUtY29uZmlnJztcbmltcG9ydCB7IEZpbHRlcldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpbHRlci9jb3JlL2FwaS9maWx0ZXIud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlc1JlYWRNb2RlbCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpbHRlci9jb3JlL2FwaS91bmlxdWUvdW5pcXVlLXZhbHVlcy5yZWFkLW1vZGVsJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2wxMG4vY29yZS9hcGkvdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2wxMG4vY29yZS9hcGkvdHJhbnNsYXRpb24nO1xuXG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgKm5nSWY9XCJpc0VuYWJsZWQoKVwiXG5cdFx0XHQgY2xhc3M9XCJndWktaGVhZGVyLW1lbnUtdGFiXCI+XG5cblx0XHRcdDxndWktdGFiIFttZW51XT1cImNvbmZpZy5nZXRNZW51cygpXCIgW2FjdGl2ZV09XCJjb25maWcuZ2V0QWN0aXZlTWVudSgpXCI+XG5cblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZy5pc01haW5FbmFibGVkKClcIj5cblxuXHRcdFx0XHRcdDxndWktdGFiLWl0ZW0gY2xhc3M9XCJndWktdGFiLWl0ZW0tZHJvcGRvd25cIiBbdGFiXT1cImNvbmZpZy5nZXRNYWluTWVudSgpXCI+XG5cblx0XHRcdFx0XHRcdDxndWktc3RydWN0dXJlLWNvbHVtbi1jb25maWctc29ydCAqbmdJZj1cImNvbHVtbi5pc1NvcnRFbmFibGVkKClcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgW2Ryb3Bkb3duVGV4dFRyYW5zbGF0aW9uXT1cImRyb3Bkb3duVGV4dFRyYW5zbGF0aW9uXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIFtjb2x1bW5dPVwiY29sdW1uXCI+XG5cdFx0XHRcdFx0XHQ8L2d1aS1zdHJ1Y3R1cmUtY29sdW1uLWNvbmZpZy1zb3J0PlxuXG5cdFx0XHRcdFx0XHQ8Z3VpLXN0cnVjdHVyZS1jb2x1bW4tY29uZmlnLWNvbHVtbi1oaWRlXG5cdFx0XHRcdFx0XHRcdFtjb2x1bW5dPVwiY29sdW1uXCI+XG5cdFx0XHRcdFx0XHQ8L2d1aS1zdHJ1Y3R1cmUtY29sdW1uLWNvbmZpZy1jb2x1bW4taGlkZT5cblxuXHRcdFx0XHRcdFx0PGd1aS1zdHJ1Y3R1cmUtY29sdW1uLWNvbmZpZy1jb2x1bW4tbW92ZVxuXHRcdFx0XHRcdFx0XHRbY29sdW1uXT1cImNvbHVtblwiPlxuXHRcdFx0XHRcdFx0PC9ndWktc3RydWN0dXJlLWNvbHVtbi1jb25maWctY29sdW1uLW1vdmU+XG5cblx0XHRcdFx0XHQ8L2d1aS10YWItaXRlbT5cblxuXHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cblxuXHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiY29uZmlnLmlzRmlsdGVyaW5nRW5hYmxlZCgpXCI+XG5cblx0XHRcdFx0XHQ8Z3VpLXRhYi1pdGVtIFt0YWJdPVwiY29uZmlnLmdldEZpbHRlck1lbnUoKVwiPlxuXG5cdFx0XHRcdFx0XHQ8IS0tXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImd1aS1oZWFkZXItbWVudS1pdGVtXCI+e3tjb25maWcuZ2V0RmlsdGVyTWVudSgpfX08L2Rpdj4tLT5cblxuXHRcdFx0XHRcdFx0PGd1aS11bmlxdWUtdmFsdWUtbGlzdFxuXHRcdFx0XHRcdFx0XHRbZmllbGRJZF09XCJjb2x1bW4uZ2V0RmllbGRJZCgpXCI+XG5cdFx0XHRcdFx0XHQ8L2d1aS11bmlxdWUtdmFsdWUtbGlzdD5cblxuXHRcdFx0XHRcdDwvZ3VpLXRhYi1pdGVtPlxuXG5cdFx0XHRcdDwvbmctY29udGFpbmVyPlxuXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJjb25maWcuaXNDb2x1bW5NYW5hZ2VyRW5hYmxlZCgpXCI+XG5cblx0XHRcdFx0XHQ8Z3VpLXRhYi1pdGVtIFt0YWJdPVwiY29uZmlnLmdldENvbHVtbk1lbnUoKVwiPlxuXG5cdFx0XHRcdFx0XHQ8Z3VpLXN0cnVjdHVyZS1tZW51LWNvbHVtbi1tYW5hZ2VyPlxuXHRcdFx0XHRcdFx0PC9ndWktc3RydWN0dXJlLW1lbnUtY29sdW1uLW1hbmFnZXI+XG5cblx0XHRcdFx0XHQ8L2d1aS10YWItaXRlbT5cblxuXHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cblxuXHRcdFx0PC9ndWktdGFiPlxuXHRcdDwvZGl2PlxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRAVmlld0NoaWxkKCdoZWFkZXJTb3J0TWVudScsIHsgc3RhdGljOiBmYWxzZSB9KVxuXHRoZWFkZXJTb3J0TWVudTogRWxlbWVudFJlZjtcblxuXHRjb25maWc6IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWc7XG5cblx0dW5pcXVlVmFsdWVzOiBBcnJheTxhbnk+ID0gW107XG5cblx0aGlkZUNvbHVtblRpdGxlOiBzdHJpbmc7XG5cblx0ZHJvcGRvd25UZXh0VHJhbnNsYXRpb246IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQ29tbWFuZFNlcnZpY2U6IFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZTogQ29tcG9zaXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyV2FyZWhvdXNlOiBGaWx0ZXJXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlLFxuXHRcdFx0XHRASW5qZWN0KCdjb2x1bW4nKSBwdWJsaWMgcmVhZG9ubHkgY29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5maWx0ZXJXYXJlaG91c2Vcblx0XHRcdC5vblVuaXF1ZVZhbHVlcyh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHVuaXF1ZVZhbHVlc1JlYWRNb2RlbDogVW5pcXVlVmFsdWVzUmVhZE1vZGVsKSA9PiB7XG5cdFx0XHRcdHRoaXMudW5pcXVlVmFsdWVzID0gdW5pcXVlVmFsdWVzUmVhZE1vZGVsLmdldFZhbHVlcyh0aGlzLmNvbHVtbi5nZXRGaWVsZElkKCkpO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZVxuXHRcdFx0Lm9uVmFsdWUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHN3aXRjaE1hcCgoY29uZmlnOiBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5jb25maWcgPSBjb25maWc7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLm9uVHJhbnNsYXRpb24oKTtcblx0XHRcdFx0fSksXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvbikgPT4ge1xuXHRcdFx0XHR0aGlzLnNldFRhYlRpdGxlcyh0cmFuc2xhdGlvbik7XG5cdFx0XHRcdHRoaXMuZHJvcGRvd25UZXh0VHJhbnNsYXRpb24gPSB0cmFuc2xhdGlvbi5oZWFkZXJNZW51TWFpblRhYkNvbHVtblNvcnQ7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLmlzRW5hYmxlZCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRUYWJUaXRsZXModHJhbnNsYXRpb246IFRyYW5zbGF0aW9uKTogdm9pZCB7XG5cdFx0dGhpcy5jb25maWcuc2V0TWFpbk1lbnUodHJhbnNsYXRpb24uaGVhZGVyTWVudU1haW5UYWIpO1xuXHRcdHRoaXMuY29uZmlnLnNldEZpbHRlck1lbnUodHJhbnNsYXRpb24uaGVhZGVyTWVudUZpbHRlclRhYik7XG5cdFx0dGhpcy5jb25maWcuc2V0Q29sdW1uc01lbnUodHJhbnNsYXRpb24uaGVhZGVyTWVudUNvbHVtbnNUYWIpO1xuXHR9XG59XG4iXX0=