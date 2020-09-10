/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { CompositionWarehouse } from '../../../../composition/domain-api/composition.warehouse';
import { FieldWarehouse } from '../../../field/domain-api/field.warehouse';
import { StructureId } from '../../../core/domain/structure.id';
import { FilterWarehouse } from '../../domain-api/filter.warehouse';
import { FilterCommandInvoker } from '../../domain-api/filter.command-invoker';
export class FilterMenuComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} structureId
     * @param {?} fieldWarehouse
     * @param {?} filterWarehouse
     * @param {?} filterCommandDispatcher
     * @param {?} compositionWarehouse
     */
    constructor(changeDetectorRef, structureId, fieldWarehouse, filterWarehouse, filterCommandDispatcher, compositionWarehouse) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.fieldWarehouse = fieldWarehouse;
        this.filterWarehouse = filterWarehouse;
        this.filterCommandDispatcher = filterCommandDispatcher;
        this.compositionWarehouse = compositionWarehouse;
        this.columns = [];
        this.fields = [];
        this.activeFilters = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.filterWarehouse
            .onActiveFilters(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} activeFilters
         * @return {?}
         */
        (activeFilters) => {
            this.activeFilters = activeFilters;
            this.changeDetectorRef.detectChanges();
        }));
        this.filterWarehouse
            .onFilterTypes(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} filterTypeMap
         * @return {?}
         */
        (filterTypeMap) => {
            this.filterTypeMap = filterTypeMap;
            this.changeDetectorRef.detectChanges();
        }));
        this.fieldWarehouse
            .onFields(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} fieldReadModels
         * @return {?}
         */
        (fieldReadModels) => {
            this.fields = fieldReadModels;
            this.changeDetectorRef.detectChanges();
        }));
        this.compositionWarehouse
            .onHeaderColumns()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} columns
         * @return {?}
         */
        (columns) => {
            this.columns = columns;
            this.changeDetectorRef.detectChanges();
        }));
    }
    /**
     * @param {?} selectedColumn
     * @return {?}
     */
    onColumnSelect(selectedColumn) {
        this.selectedColumn = selectedColumn;
        this.filterTypes = this.filterTypeMap.getFilterTypes(this.selectedColumn.getFieldId());
        this.changeDetectorRef.detectChanges();
    }
    /**
     * @param {?} field
     * @return {?}
     */
    onFieldSelect(field) {
        this.selectedField = field;
        this.filterTypes = this.filterTypeMap.getFilterTypes(this.selectedField.getFieldId());
        this.changeDetectorRef.detectChanges();
    }
    /**
     * @param {?} filterTypeId
     * @return {?}
     */
    onFilterTypeSelect(filterTypeId) {
        this.selectedFilterTypeId = filterTypeId;
        this.changeDetectorRef.detectChanges();
    }
    /**
     * @return {?}
     */
    removeAllFilters() {
        this.filterCommandDispatcher.removeAllFilters(this.structureId);
    }
    /**
     * @return {?}
     */
    addFilter() {
        /** @type {?} */
        const fieldId = this.selectedField.getFieldId();
        /** @type {?} */
        const filterTypeId = this.selectedFilterTypeId;
        /** @type {?} */
        const value = this.selectedValue;
        this.filterCommandDispatcher.add(fieldId, filterTypeId, value, this.structureId);
        this.clearAddFilterForm();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onValueChanged(value) {
        this.selectedValue = value;
    }
    /**
     * @return {?}
     */
    clearAddFilterForm() {
        this.selectedColumn = null;
        this.selectedField = null;
        this.selectedFilterTypeId = null;
        this.selectedValue = null;
        this.changeDetectorRef.detectChanges();
    }
}
FilterMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-filter-menu',
                template: `

		<div>
			<gui-active-filter-list></gui-active-filter-list>
		</div>

		<!--		<div>-->
		<!--			<gui-column-selector-->
		<!--					[columns]="columns"-->
		<!--					(columnSelected)="onColumnSelect($event)">-->
		<!--			</gui-column-selector>-->

		<!--			<ng-container *ngIf="selectedColumn">-->
		<!--				{{selectedColumn.getFieldId()}}-->
		<!--			</ng-container>-->
		<!--		</div>-->

		<div>
			<gui-field-selector
					[fields]="fields"
					(fieldSelected)="onFieldSelect($event)">
			</gui-field-selector>

			<ng-container *ngIf="selectedColumn">
				{{selectedColumn.getFieldId()}}
			</ng-container>
		</div>

		<div>
			<gui-filter-type-selector
					[filterTypes]="filterTypes"
					(filterTypeSelected)="onFilterTypeSelect($event)">
			</gui-filter-type-selector>

			<ng-container *ngIf="selectedFilterTypeId">
				{{selectedFilterTypeId.toString()}}
			</ng-container>
		</div>

		<div>

			<gui-filter-value *ngIf="selectedFilterTypeId"
							  (valueChanged)="onValueChanged($event)">
			</gui-filter-value>

		</div>

		<div>
			<button gui-button
					[primary]="true"
					[disabled]="!selectedFilterTypeId"
					(click)="addFilter()">
				Filter
			</button>
		</div>

		<div>
			<button gui-button
					[secondary]="true"
					(click)="removeAllFilters()">
				Clear filters
			</button>
		</div>

	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-filter-menu]': 'true'
                }
            }] }
];
/** @nocollapse */
FilterMenuComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: StructureId },
    { type: FieldWarehouse },
    { type: FilterWarehouse },
    { type: FilterCommandInvoker },
    { type: CompositionWarehouse }
];
if (false) {
    /** @type {?} */
    FilterMenuComponent.prototype.selectedColumn;
    /** @type {?} */
    FilterMenuComponent.prototype.columns;
    /** @type {?} */
    FilterMenuComponent.prototype.selectedField;
    /** @type {?} */
    FilterMenuComponent.prototype.fields;
    /** @type {?} */
    FilterMenuComponent.prototype.filterTypeMap;
    /** @type {?} */
    FilterMenuComponent.prototype.filterTypes;
    /** @type {?} */
    FilterMenuComponent.prototype.selectedFilterTypeId;
    /** @type {?} */
    FilterMenuComponent.prototype.selectedValue;
    /** @type {?} */
    FilterMenuComponent.prototype.activeFilters;
    /**
     * @type {?}
     * @private
     */
    FilterMenuComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    FilterMenuComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    FilterMenuComponent.prototype.fieldWarehouse;
    /**
     * @type {?}
     * @private
     */
    FilterMenuComponent.prototype.filterWarehouse;
    /**
     * @type {?}
     * @private
     */
    FilterMenuComponent.prototype.filterCommandDispatcher;
    /**
     * @type {?}
     * @private
     */
    FilterMenuComponent.prototype.compositionWarehouse;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvbWVudS9maWx0ZXItbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHakgsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBSXBFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBOEUvRSxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsY0FBYzs7Ozs7Ozs7O0lBb0J0RCxZQUE2QixpQkFBb0MsRUFDN0MsV0FBd0IsRUFDeEIsY0FBOEIsRUFDOUIsZUFBZ0MsRUFDaEMsdUJBQTZDLEVBQzdDLG9CQUEwQztRQUM3RCxLQUFLLEVBQUUsQ0FBQztRQU5vQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUFzQjtRQUM3Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBckI5RCxZQUFPLEdBQW1DLEVBQUUsQ0FBQztRQUk3QyxXQUFNLEdBQTBCLEVBQUUsQ0FB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c0RBQThEOzs7OztJQUM5RCxtREFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4tYXBpL2NvbXBvc2l0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBGaWVsZFdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2RvbWFpbi1hcGkvZmllbGQud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpZWxkUmVhZE1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvZG9tYWluLWFwaS9yZWFkL2ZpZWxkLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgRmlsdGVyV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9maWx0ZXIud2FyZWhvdXNlJztcbmltcG9ydCB7IEZpbHRlclR5cGVNYXAgfSBmcm9tICcuLi8uLi9kb21haW4tYXBpL3R5cGUvZmlsdGVyLXR5cGUtbWFwJztcbmltcG9ydCB7IEZpbHRlclR5cGVSZWFkTW9kZWwgfSBmcm9tICcuLi8uLi9kb21haW4tYXBpL3R5cGUvZmlsdGVyLXR5cGUucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vdHlwZS9maWx0ZXItdHlwZS5pZCc7XG5pbXBvcnQgeyBGaWx0ZXJDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uL2RvbWFpbi1hcGkvZmlsdGVyLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvZG9tYWluL2NvcmUvZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyUmVhZE1vZGVsIH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9hY3RpdmUvYWN0aXZlLWZpbHRlci5yZWFkLW1vZGVsJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktZmlsdGVyLW1lbnUnLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PGRpdj5cblx0XHRcdDxndWktYWN0aXZlLWZpbHRlci1saXN0PjwvZ3VpLWFjdGl2ZS1maWx0ZXItbGlzdD5cblx0XHQ8L2Rpdj5cblxuXHRcdDwhLS1cdFx0PGRpdj4tLT5cblx0XHQ8IS0tXHRcdFx0PGd1aS1jb2x1bW4tc2VsZWN0b3ItLT5cblx0XHQ8IS0tXHRcdFx0XHRcdFtjb2x1bW5zXT1cImNvbHVtbnNcIi0tPlxuXHRcdDwhLS1cdFx0XHRcdFx0KGNvbHVtblNlbGVjdGVkKT1cIm9uQ29sdW1uU2VsZWN0KCRldmVudClcIj4tLT5cblx0XHQ8IS0tXHRcdFx0PC9ndWktY29sdW1uLXNlbGVjdG9yPi0tPlxuXG5cdFx0PCEtLVx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJzZWxlY3RlZENvbHVtblwiPi0tPlxuXHRcdDwhLS1cdFx0XHRcdHt7c2VsZWN0ZWRDb2x1bW4uZ2V0RmllbGRJZCgpfX0tLT5cblx0XHQ8IS0tXHRcdFx0PC9uZy1jb250YWluZXI+LS0+XG5cdFx0PCEtLVx0XHQ8L2Rpdj4tLT5cblxuXHRcdDxkaXY+XG5cdFx0XHQ8Z3VpLWZpZWxkLXNlbGVjdG9yXG5cdFx0XHRcdFx0W2ZpZWxkc109XCJmaWVsZHNcIlxuXHRcdFx0XHRcdChmaWVsZFNlbGVjdGVkKT1cIm9uRmllbGRTZWxlY3QoJGV2ZW50KVwiPlxuXHRcdFx0PC9ndWktZmllbGQtc2VsZWN0b3I+XG5cblx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJzZWxlY3RlZENvbHVtblwiPlxuXHRcdFx0XHR7e3NlbGVjdGVkQ29sdW1uLmdldEZpZWxkSWQoKX19XG5cdFx0XHQ8L25nLWNvbnRhaW5lcj5cblx0XHQ8L2Rpdj5cblxuXHRcdDxkaXY+XG5cdFx0XHQ8Z3VpLWZpbHRlci10eXBlLXNlbGVjdG9yXG5cdFx0XHRcdFx0W2ZpbHRlclR5cGVzXT1cImZpbHRlclR5cGVzXCJcblx0XHRcdFx0XHQoZmlsdGVyVHlwZVNlbGVjdGVkKT1cIm9uRmlsdGVyVHlwZVNlbGVjdCgkZXZlbnQpXCI+XG5cdFx0XHQ8L2d1aS1maWx0ZXItdHlwZS1zZWxlY3Rvcj5cblxuXHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cInNlbGVjdGVkRmlsdGVyVHlwZUlkXCI+XG5cdFx0XHRcdHt7c2VsZWN0ZWRGaWx0ZXJUeXBlSWQudG9TdHJpbmcoKX19XG5cdFx0XHQ8L25nLWNvbnRhaW5lcj5cblx0XHQ8L2Rpdj5cblxuXHRcdDxkaXY+XG5cblx0XHRcdDxndWktZmlsdGVyLXZhbHVlICpuZ0lmPVwic2VsZWN0ZWRGaWx0ZXJUeXBlSWRcIlxuXHRcdFx0XHRcdFx0XHQgICh2YWx1ZUNoYW5nZWQpPVwib25WYWx1ZUNoYW5nZWQoJGV2ZW50KVwiPlxuXHRcdFx0PC9ndWktZmlsdGVyLXZhbHVlPlxuXG5cdFx0PC9kaXY+XG5cblx0XHQ8ZGl2PlxuXHRcdFx0PGJ1dHRvbiBndWktYnV0dG9uXG5cdFx0XHRcdFx0W3ByaW1hcnldPVwidHJ1ZVwiXG5cdFx0XHRcdFx0W2Rpc2FibGVkXT1cIiFzZWxlY3RlZEZpbHRlclR5cGVJZFwiXG5cdFx0XHRcdFx0KGNsaWNrKT1cImFkZEZpbHRlcigpXCI+XG5cdFx0XHRcdEZpbHRlclxuXHRcdFx0PC9idXR0b24+XG5cdFx0PC9kaXY+XG5cblx0XHQ8ZGl2PlxuXHRcdFx0PGJ1dHRvbiBndWktYnV0dG9uXG5cdFx0XHRcdFx0W3NlY29uZGFyeV09XCJ0cnVlXCJcblx0XHRcdFx0XHQoY2xpY2spPVwicmVtb3ZlQWxsRmlsdGVycygpXCI+XG5cdFx0XHRcdENsZWFyIGZpbHRlcnNcblx0XHRcdDwvYnV0dG9uPlxuXHRcdDwvZGl2PlxuXG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktZmlsdGVyLW1lbnVdJzogJ3RydWUnXG5cdH1cbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyTWVudUNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRzZWxlY3RlZENvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQ7XG5cblx0Y29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+ID0gW107XG5cblx0c2VsZWN0ZWRGaWVsZDogRmllbGRSZWFkTW9kZWw7XG5cblx0ZmllbGRzOiBBcnJheTxGaWVsZFJlYWRNb2RlbD4gPSBbXTtcblxuXHRmaWx0ZXJUeXBlTWFwOiBGaWx0ZXJUeXBlTWFwO1xuXG5cdGZpbHRlclR5cGVzOiBBcnJheTxGaWx0ZXJUeXBlUmVhZE1vZGVsPjtcblxuXHRzZWxlY3RlZEZpbHRlclR5cGVJZDogRmlsdGVyVHlwZUlkO1xuXG5cdHNlbGVjdGVkVmFsdWU6IHN0cmluZztcblxuXHRhY3RpdmVGaWx0ZXJzOiBBcnJheTxBY3RpdmVGaWx0ZXJSZWFkTW9kZWw+ID0gW107XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkV2FyZWhvdXNlOiBGaWVsZFdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJXYXJlaG91c2U6IEZpbHRlcldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJDb21tYW5kRGlzcGF0Y2hlcjogRmlsdGVyQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25XYXJlaG91c2U6IENvbXBvc2l0aW9uV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5maWx0ZXJXYXJlaG91c2Vcblx0XHRcdC5vbkFjdGl2ZUZpbHRlcnModGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChhY3RpdmVGaWx0ZXJzOiBBcnJheTxBY3RpdmVGaWx0ZXJSZWFkTW9kZWw+KSA9PiB7XG5cdFx0XHRcdHRoaXMuYWN0aXZlRmlsdGVycyA9IGFjdGl2ZUZpbHRlcnM7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmZpbHRlcldhcmVob3VzZVxuXHRcdFx0Lm9uRmlsdGVyVHlwZXModGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChmaWx0ZXJUeXBlTWFwOiBGaWx0ZXJUeXBlTWFwKSA9PiB7XG5cdFx0XHRcdHRoaXMuZmlsdGVyVHlwZU1hcCA9IGZpbHRlclR5cGVNYXA7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmZpZWxkV2FyZWhvdXNlXG5cdFx0XHQub25GaWVsZHModGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChmaWVsZFJlYWRNb2RlbHM6IEFycmF5PEZpZWxkUmVhZE1vZGVsPikgPT4ge1xuXHRcdFx0XHR0aGlzLmZpZWxkcyA9IGZpZWxkUmVhZE1vZGVscztcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuY29tcG9zaXRpb25XYXJlaG91c2Vcblx0XHRcdC5vbkhlYWRlckNvbHVtbnMoKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PikgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0b25Db2x1bW5TZWxlY3Qoc2VsZWN0ZWRDb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KTogdm9pZCB7XG5cblx0XHR0aGlzLnNlbGVjdGVkQ29sdW1uID0gc2VsZWN0ZWRDb2x1bW47XG5cblx0XHR0aGlzLmZpbHRlclR5cGVzID0gdGhpcy5maWx0ZXJUeXBlTWFwLmdldEZpbHRlclR5cGVzKHRoaXMuc2VsZWN0ZWRDb2x1bW4uZ2V0RmllbGRJZCgpKTtcblxuXHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0b25GaWVsZFNlbGVjdChmaWVsZDogRmllbGRSZWFkTW9kZWwpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdGVkRmllbGQgPSBmaWVsZDtcblxuXHRcdHRoaXMuZmlsdGVyVHlwZXMgPSB0aGlzLmZpbHRlclR5cGVNYXAuZ2V0RmlsdGVyVHlwZXModGhpcy5zZWxlY3RlZEZpZWxkLmdldEZpZWxkSWQoKSk7XG5cblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG5cdG9uRmlsdGVyVHlwZVNlbGVjdChmaWx0ZXJUeXBlSWQ6IEZpbHRlclR5cGVJZCk6IHZvaWQge1xuXG5cdFx0dGhpcy5zZWxlY3RlZEZpbHRlclR5cGVJZCA9IGZpbHRlclR5cGVJZDtcblxuXHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0cmVtb3ZlQWxsRmlsdGVycygpOiB2b2lkIHtcblx0XHR0aGlzLmZpbHRlckNvbW1hbmREaXNwYXRjaGVyLnJlbW92ZUFsbEZpbHRlcnModGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRhZGRGaWx0ZXIoKTogdm9pZCB7XG5cblx0XHRjb25zdCBmaWVsZElkOiBGaWVsZElkID0gdGhpcy5zZWxlY3RlZEZpZWxkLmdldEZpZWxkSWQoKSxcblx0XHRcdGZpbHRlclR5cGVJZDogRmlsdGVyVHlwZUlkID0gdGhpcy5zZWxlY3RlZEZpbHRlclR5cGVJZCxcblx0XHRcdHZhbHVlOiBhbnkgPSB0aGlzLnNlbGVjdGVkVmFsdWU7XG5cblx0XHR0aGlzLmZpbHRlckNvbW1hbmREaXNwYXRjaGVyLmFkZChmaWVsZElkLCBmaWx0ZXJUeXBlSWQsIHZhbHVlLCB0aGlzLnN0cnVjdHVyZUlkKTtcblxuXHRcdHRoaXMuY2xlYXJBZGRGaWx0ZXJGb3JtKCk7XG5cdH1cblxuXHRvblZhbHVlQ2hhbmdlZCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RlZFZhbHVlID0gdmFsdWU7XG5cdH1cblxuXHRjbGVhckFkZEZpbHRlckZvcm0oKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RlZENvbHVtbiA9IG51bGw7XG5cdFx0dGhpcy5zZWxlY3RlZEZpZWxkID0gbnVsbDtcblx0XHR0aGlzLnNlbGVjdGVkRmlsdGVyVHlwZUlkID0gbnVsbDtcblx0XHR0aGlzLnNlbGVjdGVkVmFsdWUgPSBudWxsO1xuXHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG59XG4iXX0=