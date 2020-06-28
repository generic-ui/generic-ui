/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { CompositionWarehouse } from '../../../../lib/composition/domain-api/composition.warehouse';
import { FieldWarehouse } from '../../../field/domain-api/field.warehouse';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
import { FilterWarehouse } from '../../domain-api/filter.warehouse';
import { FilterCommandDispatcher } from '../../domain-api/filter.command-dispatcher';
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
    { type: FilterCommandDispatcher },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvbWVudS9maWx0ZXItbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHakgsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFFNUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBSXBFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBOEVyRixNQUFNLE9BQU8sbUJBQW9CLFNBQVEsY0FBYzs7Ozs7Ozs7O0lBb0J0RCxZQUE2QixpQkFBb0MsRUFDN0MsV0FBd0IsRUFDeEIsY0FBOEIsRUFDOUIsZUFBZ0MsRUFDaEMsdUJBQWdELEVBQ2hELG9CQUEwQztRQUM3RCxLQUFLLEVBQUUsQ0FBQztRQU5vQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBckI5RCxZQUFPLEdBQW1DLEVBQUUsQ0FBQztRQUk3QyxXQUFNLEdBQTBCLEVBQUUsQ0FB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c0RBQWlFOzs7OztJQUNqRSxtREFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9jb21wb3NpdGlvbi9kb21haW4tYXBpL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvY29tcG9zaXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IEZpZWxkV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvZG9tYWluLWFwaS9maWVsZC53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmllbGRSZWFkTW9kZWwgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9kb21haW4tYXBpL3JlYWQvZmllbGQucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBGaWx0ZXJXYXJlaG91c2UgfSBmcm9tICcuLi8uLi9kb21haW4tYXBpL2ZpbHRlci53YXJlaG91c2UnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZU1hcCB9IGZyb20gJy4uLy4uL2RvbWFpbi1hcGkvdHlwZS9maWx0ZXItdHlwZS1tYXAnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZVJlYWRNb2RlbCB9IGZyb20gJy4uLy4uL2RvbWFpbi1hcGkvdHlwZS9maWx0ZXItdHlwZS5yZWFkLW1vZGVsJztcbmltcG9ydCB7IEZpbHRlclR5cGVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi90eXBlL2ZpbHRlci10eXBlLmlkJztcbmltcG9ydCB7IEZpbHRlckNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9maWx0ZXIuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9kb21haW4vY29yZS9maWVsZC9maWVsZC5pZCc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJSZWFkTW9kZWwgfSBmcm9tICcuLi8uLi9kb21haW4tYXBpL2FjdGl2ZS9hY3RpdmUtZmlsdGVyLnJlYWQtbW9kZWwnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1maWx0ZXItbWVudScsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8ZGl2PlxuXHRcdFx0PGd1aS1hY3RpdmUtZmlsdGVyLWxpc3Q+PC9ndWktYWN0aXZlLWZpbHRlci1saXN0PlxuXHRcdDwvZGl2PlxuXG5cdFx0PCEtLVx0XHQ8ZGl2Pi0tPlxuXHRcdDwhLS1cdFx0XHQ8Z3VpLWNvbHVtbi1zZWxlY3Rvci0tPlxuXHRcdDwhLS1cdFx0XHRcdFx0W2NvbHVtbnNdPVwiY29sdW1uc1wiLS0+XG5cdFx0PCEtLVx0XHRcdFx0XHQoY29sdW1uU2VsZWN0ZWQpPVwib25Db2x1bW5TZWxlY3QoJGV2ZW50KVwiPi0tPlxuXHRcdDwhLS1cdFx0XHQ8L2d1aS1jb2x1bW4tc2VsZWN0b3I+LS0+XG5cblx0XHQ8IS0tXHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cInNlbGVjdGVkQ29sdW1uXCI+LS0+XG5cdFx0PCEtLVx0XHRcdFx0e3tzZWxlY3RlZENvbHVtbi5nZXRGaWVsZElkKCl9fS0tPlxuXHRcdDwhLS1cdFx0XHQ8L25nLWNvbnRhaW5lcj4tLT5cblx0XHQ8IS0tXHRcdDwvZGl2Pi0tPlxuXG5cdFx0PGRpdj5cblx0XHRcdDxndWktZmllbGQtc2VsZWN0b3Jcblx0XHRcdFx0XHRbZmllbGRzXT1cImZpZWxkc1wiXG5cdFx0XHRcdFx0KGZpZWxkU2VsZWN0ZWQpPVwib25GaWVsZFNlbGVjdCgkZXZlbnQpXCI+XG5cdFx0XHQ8L2d1aS1maWVsZC1zZWxlY3Rvcj5cblxuXHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cInNlbGVjdGVkQ29sdW1uXCI+XG5cdFx0XHRcdHt7c2VsZWN0ZWRDb2x1bW4uZ2V0RmllbGRJZCgpfX1cblx0XHRcdDwvbmctY29udGFpbmVyPlxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdj5cblx0XHRcdDxndWktZmlsdGVyLXR5cGUtc2VsZWN0b3Jcblx0XHRcdFx0XHRbZmlsdGVyVHlwZXNdPVwiZmlsdGVyVHlwZXNcIlxuXHRcdFx0XHRcdChmaWx0ZXJUeXBlU2VsZWN0ZWQpPVwib25GaWx0ZXJUeXBlU2VsZWN0KCRldmVudClcIj5cblx0XHRcdDwvZ3VpLWZpbHRlci10eXBlLXNlbGVjdG9yPlxuXG5cdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwic2VsZWN0ZWRGaWx0ZXJUeXBlSWRcIj5cblx0XHRcdFx0e3tzZWxlY3RlZEZpbHRlclR5cGVJZC50b1N0cmluZygpfX1cblx0XHRcdDwvbmctY29udGFpbmVyPlxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdj5cblxuXHRcdFx0PGd1aS1maWx0ZXItdmFsdWUgKm5nSWY9XCJzZWxlY3RlZEZpbHRlclR5cGVJZFwiXG5cdFx0XHRcdFx0XHRcdCAgKHZhbHVlQ2hhbmdlZCk9XCJvblZhbHVlQ2hhbmdlZCgkZXZlbnQpXCI+XG5cdFx0XHQ8L2d1aS1maWx0ZXItdmFsdWU+XG5cblx0XHQ8L2Rpdj5cblxuXHRcdDxkaXY+XG5cdFx0XHQ8YnV0dG9uIGd1aS1idXR0b25cblx0XHRcdFx0XHRbcHJpbWFyeV09XCJ0cnVlXCJcblx0XHRcdFx0XHRbZGlzYWJsZWRdPVwiIXNlbGVjdGVkRmlsdGVyVHlwZUlkXCJcblx0XHRcdFx0XHQoY2xpY2spPVwiYWRkRmlsdGVyKClcIj5cblx0XHRcdFx0RmlsdGVyXG5cdFx0XHQ8L2J1dHRvbj5cblx0XHQ8L2Rpdj5cblxuXHRcdDxkaXY+XG5cdFx0XHQ8YnV0dG9uIGd1aS1idXR0b25cblx0XHRcdFx0XHRbc2Vjb25kYXJ5XT1cInRydWVcIlxuXHRcdFx0XHRcdChjbGljayk9XCJyZW1vdmVBbGxGaWx0ZXJzKClcIj5cblx0XHRcdFx0Q2xlYXIgZmlsdGVyc1xuXHRcdFx0PC9idXR0b24+XG5cdFx0PC9kaXY+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1maWx0ZXItbWVudV0nOiAndHJ1ZSdcblx0fVxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJNZW51Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHNlbGVjdGVkQ29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dDtcblxuXHRjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4gPSBbXTtcblxuXHRzZWxlY3RlZEZpZWxkOiBGaWVsZFJlYWRNb2RlbDtcblxuXHRmaWVsZHM6IEFycmF5PEZpZWxkUmVhZE1vZGVsPiA9IFtdO1xuXG5cdGZpbHRlclR5cGVNYXA6IEZpbHRlclR5cGVNYXA7XG5cblx0ZmlsdGVyVHlwZXM6IEFycmF5PEZpbHRlclR5cGVSZWFkTW9kZWw+O1xuXG5cdHNlbGVjdGVkRmlsdGVyVHlwZUlkOiBGaWx0ZXJUeXBlSWQ7XG5cblx0c2VsZWN0ZWRWYWx1ZTogc3RyaW5nO1xuXG5cdGFjdGl2ZUZpbHRlcnM6IEFycmF5PEFjdGl2ZUZpbHRlclJlYWRNb2RlbD4gPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmllbGRXYXJlaG91c2U6IEZpZWxkV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlcldhcmVob3VzZTogRmlsdGVyV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlckNvbW1hbmREaXNwYXRjaGVyOiBGaWx0ZXJDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbldhcmVob3VzZTogQ29tcG9zaXRpb25XYXJlaG91c2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLmZpbHRlcldhcmVob3VzZVxuXHRcdFx0Lm9uQWN0aXZlRmlsdGVycyh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGFjdGl2ZUZpbHRlcnM6IEFycmF5PEFjdGl2ZUZpbHRlclJlYWRNb2RlbD4pID0+IHtcblx0XHRcdFx0dGhpcy5hY3RpdmVGaWx0ZXJzID0gYWN0aXZlRmlsdGVycztcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuZmlsdGVyV2FyZWhvdXNlXG5cdFx0XHQub25GaWx0ZXJUeXBlcyh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGZpbHRlclR5cGVNYXA6IEZpbHRlclR5cGVNYXApID0+IHtcblx0XHRcdFx0dGhpcy5maWx0ZXJUeXBlTWFwID0gZmlsdGVyVHlwZU1hcDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuZmllbGRXYXJlaG91c2Vcblx0XHRcdC5vbkZpZWxkcyh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGZpZWxkUmVhZE1vZGVsczogQXJyYXk8RmllbGRSZWFkTW9kZWw+KSA9PiB7XG5cdFx0XHRcdHRoaXMuZmllbGRzID0gZmllbGRSZWFkTW9kZWxzO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvbldhcmVob3VzZVxuXHRcdFx0Lm9uSGVhZGVyQ29sdW1ucygpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoY29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+KSA9PiB7XG5cdFx0XHRcdHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRvbkNvbHVtblNlbGVjdChzZWxlY3RlZENvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQpOiB2b2lkIHtcblxuXHRcdHRoaXMuc2VsZWN0ZWRDb2x1bW4gPSBzZWxlY3RlZENvbHVtbjtcblxuXHRcdHRoaXMuZmlsdGVyVHlwZXMgPSB0aGlzLmZpbHRlclR5cGVNYXAuZ2V0RmlsdGVyVHlwZXModGhpcy5zZWxlY3RlZENvbHVtbi5nZXRGaWVsZElkKCkpO1xuXG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxuXHRvbkZpZWxkU2VsZWN0KGZpZWxkOiBGaWVsZFJlYWRNb2RlbCk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWRGaWVsZCA9IGZpZWxkO1xuXG5cdFx0dGhpcy5maWx0ZXJUeXBlcyA9IHRoaXMuZmlsdGVyVHlwZU1hcC5nZXRGaWx0ZXJUeXBlcyh0aGlzLnNlbGVjdGVkRmllbGQuZ2V0RmllbGRJZCgpKTtcblxuXHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0b25GaWx0ZXJUeXBlU2VsZWN0KGZpbHRlclR5cGVJZDogRmlsdGVyVHlwZUlkKTogdm9pZCB7XG5cblx0XHR0aGlzLnNlbGVjdGVkRmlsdGVyVHlwZUlkID0gZmlsdGVyVHlwZUlkO1xuXG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxuXHRyZW1vdmVBbGxGaWx0ZXJzKCk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyQ29tbWFuZERpc3BhdGNoZXIucmVtb3ZlQWxsRmlsdGVycyh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdGFkZEZpbHRlcigpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGZpZWxkSWQ6IEZpZWxkSWQgPSB0aGlzLnNlbGVjdGVkRmllbGQuZ2V0RmllbGRJZCgpLFxuXHRcdFx0ZmlsdGVyVHlwZUlkOiBGaWx0ZXJUeXBlSWQgPSB0aGlzLnNlbGVjdGVkRmlsdGVyVHlwZUlkLFxuXHRcdFx0dmFsdWU6IGFueSA9IHRoaXMuc2VsZWN0ZWRWYWx1ZTtcblxuXHRcdHRoaXMuZmlsdGVyQ29tbWFuZERpc3BhdGNoZXIuYWRkKGZpZWxkSWQsIGZpbHRlclR5cGVJZCwgdmFsdWUsIHRoaXMuc3RydWN0dXJlSWQpO1xuXG5cdFx0dGhpcy5jbGVhckFkZEZpbHRlckZvcm0oKTtcblx0fVxuXG5cdG9uVmFsdWVDaGFuZ2VkKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdGVkVmFsdWUgPSB2YWx1ZTtcblx0fVxuXG5cdGNsZWFyQWRkRmlsdGVyRm9ybSgpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdGVkQ29sdW1uID0gbnVsbDtcblx0XHR0aGlzLnNlbGVjdGVkRmllbGQgPSBudWxsO1xuXHRcdHRoaXMuc2VsZWN0ZWRGaWx0ZXJUeXBlSWQgPSBudWxsO1xuXHRcdHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IG51bGw7XG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cbn1cbiJdfQ==