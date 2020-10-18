/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { CompositionWarehouse } from '../../../../composition/core/api/composition.warehouse';
import { FieldWarehouse } from '../../../field/core/api/field.warehouse';
import { StructureId } from '../../../core/api/structure.id';
import { FilterWarehouse } from '../../core/api/filter.warehouse';
import { FilterCommandInvoker } from '../../core/api/filter.command-invoker';
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
        super(changeDetectorRef);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvbWVudS9maWx0ZXItbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHakgsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBSWxFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBOEU3RSxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsY0FBYzs7Ozs7Ozs7O0lBb0J0RCxZQUE2QixpQkFBb0MsRUFDN0MsV0FBd0IsRUFDeEIsY0FBOEIsRUFDOUIsZUFBZ0MsRUFDaEMsdUJBQTZDLEVBQzdDLG9CQUEwQztRQUM3RCxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQU5HLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0MsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXNCO1FBQzdDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFyQjlELFlBQU8sR0FBbUMsRUFBRSxDQUFDO1FBSTdDLFdBQU0sR0FB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Ozs7OztJQUNqRCxzREFBOEQ7Ozs7O0lBQzlELG1EQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgRmllbGRXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9jb3JlL2FwaS9maWVsZC53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmllbGRSZWFkTW9kZWwgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9jb3JlL2FwaS9yZWFkL2ZpZWxkLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgRmlsdGVyV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvZmlsdGVyLndhcmVob3VzZSc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlTWFwIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvdHlwZS9maWx0ZXItdHlwZS1tYXAnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZVJlYWRNb2RlbCB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3R5cGUvZmlsdGVyLXR5cGUucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlSWQgfSBmcm9tICcuLi8uLi9jb3JlL2RvbWFpbi90eXBlL2ZpbHRlci10eXBlLmlkJztcbmltcG9ydCB7IEZpbHRlckNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvZmlsdGVyLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyUmVhZE1vZGVsIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvYWN0aXZlL2FjdGl2ZS1maWx0ZXIucmVhZC1tb2RlbCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWZpbHRlci1tZW51Jyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxkaXY+XG5cdFx0XHQ8Z3VpLWFjdGl2ZS1maWx0ZXItbGlzdD48L2d1aS1hY3RpdmUtZmlsdGVyLWxpc3Q+XG5cdFx0PC9kaXY+XG5cblx0XHQ8IS0tXHRcdDxkaXY+LS0+XG5cdFx0PCEtLVx0XHRcdDxndWktY29sdW1uLXNlbGVjdG9yLS0+XG5cdFx0PCEtLVx0XHRcdFx0XHRbY29sdW1uc109XCJjb2x1bW5zXCItLT5cblx0XHQ8IS0tXHRcdFx0XHRcdChjb2x1bW5TZWxlY3RlZCk9XCJvbkNvbHVtblNlbGVjdCgkZXZlbnQpXCI+LS0+XG5cdFx0PCEtLVx0XHRcdDwvZ3VpLWNvbHVtbi1zZWxlY3Rvcj4tLT5cblxuXHRcdDwhLS1cdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwic2VsZWN0ZWRDb2x1bW5cIj4tLT5cblx0XHQ8IS0tXHRcdFx0XHR7e3NlbGVjdGVkQ29sdW1uLmdldEZpZWxkSWQoKX19LS0+XG5cdFx0PCEtLVx0XHRcdDwvbmctY29udGFpbmVyPi0tPlxuXHRcdDwhLS1cdFx0PC9kaXY+LS0+XG5cblx0XHQ8ZGl2PlxuXHRcdFx0PGd1aS1maWVsZC1zZWxlY3RvclxuXHRcdFx0XHRcdFtmaWVsZHNdPVwiZmllbGRzXCJcblx0XHRcdFx0XHQoZmllbGRTZWxlY3RlZCk9XCJvbkZpZWxkU2VsZWN0KCRldmVudClcIj5cblx0XHRcdDwvZ3VpLWZpZWxkLXNlbGVjdG9yPlxuXG5cdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwic2VsZWN0ZWRDb2x1bW5cIj5cblx0XHRcdFx0e3tzZWxlY3RlZENvbHVtbi5nZXRGaWVsZElkKCl9fVxuXHRcdFx0PC9uZy1jb250YWluZXI+XG5cdFx0PC9kaXY+XG5cblx0XHQ8ZGl2PlxuXHRcdFx0PGd1aS1maWx0ZXItdHlwZS1zZWxlY3RvclxuXHRcdFx0XHRcdFtmaWx0ZXJUeXBlc109XCJmaWx0ZXJUeXBlc1wiXG5cdFx0XHRcdFx0KGZpbHRlclR5cGVTZWxlY3RlZCk9XCJvbkZpbHRlclR5cGVTZWxlY3QoJGV2ZW50KVwiPlxuXHRcdFx0PC9ndWktZmlsdGVyLXR5cGUtc2VsZWN0b3I+XG5cblx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJzZWxlY3RlZEZpbHRlclR5cGVJZFwiPlxuXHRcdFx0XHR7e3NlbGVjdGVkRmlsdGVyVHlwZUlkLnRvU3RyaW5nKCl9fVxuXHRcdFx0PC9uZy1jb250YWluZXI+XG5cdFx0PC9kaXY+XG5cblx0XHQ8ZGl2PlxuXG5cdFx0XHQ8Z3VpLWZpbHRlci12YWx1ZSAqbmdJZj1cInNlbGVjdGVkRmlsdGVyVHlwZUlkXCJcblx0XHRcdFx0XHRcdFx0ICAodmFsdWVDaGFuZ2VkKT1cIm9uVmFsdWVDaGFuZ2VkKCRldmVudClcIj5cblx0XHRcdDwvZ3VpLWZpbHRlci12YWx1ZT5cblxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdj5cblx0XHRcdDxidXR0b24gZ3VpLWJ1dHRvblxuXHRcdFx0XHRcdFtwcmltYXJ5XT1cInRydWVcIlxuXHRcdFx0XHRcdFtkaXNhYmxlZF09XCIhc2VsZWN0ZWRGaWx0ZXJUeXBlSWRcIlxuXHRcdFx0XHRcdChjbGljayk9XCJhZGRGaWx0ZXIoKVwiPlxuXHRcdFx0XHRGaWx0ZXJcblx0XHRcdDwvYnV0dG9uPlxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdj5cblx0XHRcdDxidXR0b24gZ3VpLWJ1dHRvblxuXHRcdFx0XHRcdFtzZWNvbmRhcnldPVwidHJ1ZVwiXG5cdFx0XHRcdFx0KGNsaWNrKT1cInJlbW92ZUFsbEZpbHRlcnMoKVwiPlxuXHRcdFx0XHRDbGVhciBmaWx0ZXJzXG5cdFx0XHQ8L2J1dHRvbj5cblx0XHQ8L2Rpdj5cblxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLWZpbHRlci1tZW51XSc6ICd0cnVlJ1xuXHR9XG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlck1lbnVDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0c2VsZWN0ZWRDb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0O1xuXG5cdGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PiA9IFtdO1xuXG5cdHNlbGVjdGVkRmllbGQ6IEZpZWxkUmVhZE1vZGVsO1xuXG5cdGZpZWxkczogQXJyYXk8RmllbGRSZWFkTW9kZWw+ID0gW107XG5cblx0ZmlsdGVyVHlwZU1hcDogRmlsdGVyVHlwZU1hcDtcblxuXHRmaWx0ZXJUeXBlczogQXJyYXk8RmlsdGVyVHlwZVJlYWRNb2RlbD47XG5cblx0c2VsZWN0ZWRGaWx0ZXJUeXBlSWQ6IEZpbHRlclR5cGVJZDtcblxuXHRzZWxlY3RlZFZhbHVlOiBzdHJpbmc7XG5cblx0YWN0aXZlRmlsdGVyczogQXJyYXk8QWN0aXZlRmlsdGVyUmVhZE1vZGVsPiA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWVsZFdhcmVob3VzZTogRmllbGRXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyV2FyZWhvdXNlOiBGaWx0ZXJXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyQ29tbWFuZERpc3BhdGNoZXI6IEZpbHRlckNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uV2FyZWhvdXNlOiBDb21wb3NpdGlvbldhcmVob3VzZSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5maWx0ZXJXYXJlaG91c2Vcblx0XHRcdC5vbkFjdGl2ZUZpbHRlcnModGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChhY3RpdmVGaWx0ZXJzOiBBcnJheTxBY3RpdmVGaWx0ZXJSZWFkTW9kZWw+KSA9PiB7XG5cdFx0XHRcdHRoaXMuYWN0aXZlRmlsdGVycyA9IGFjdGl2ZUZpbHRlcnM7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmZpbHRlcldhcmVob3VzZVxuXHRcdFx0Lm9uRmlsdGVyVHlwZXModGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChmaWx0ZXJUeXBlTWFwOiBGaWx0ZXJUeXBlTWFwKSA9PiB7XG5cdFx0XHRcdHRoaXMuZmlsdGVyVHlwZU1hcCA9IGZpbHRlclR5cGVNYXA7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmZpZWxkV2FyZWhvdXNlXG5cdFx0XHQub25GaWVsZHModGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChmaWVsZFJlYWRNb2RlbHM6IEFycmF5PEZpZWxkUmVhZE1vZGVsPikgPT4ge1xuXHRcdFx0XHR0aGlzLmZpZWxkcyA9IGZpZWxkUmVhZE1vZGVscztcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuY29tcG9zaXRpb25XYXJlaG91c2Vcblx0XHRcdC5vbkhlYWRlckNvbHVtbnMoKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PikgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0b25Db2x1bW5TZWxlY3Qoc2VsZWN0ZWRDb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KTogdm9pZCB7XG5cblx0XHR0aGlzLnNlbGVjdGVkQ29sdW1uID0gc2VsZWN0ZWRDb2x1bW47XG5cblx0XHR0aGlzLmZpbHRlclR5cGVzID0gdGhpcy5maWx0ZXJUeXBlTWFwLmdldEZpbHRlclR5cGVzKHRoaXMuc2VsZWN0ZWRDb2x1bW4uZ2V0RmllbGRJZCgpKTtcblxuXHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0b25GaWVsZFNlbGVjdChmaWVsZDogRmllbGRSZWFkTW9kZWwpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdGVkRmllbGQgPSBmaWVsZDtcblxuXHRcdHRoaXMuZmlsdGVyVHlwZXMgPSB0aGlzLmZpbHRlclR5cGVNYXAuZ2V0RmlsdGVyVHlwZXModGhpcy5zZWxlY3RlZEZpZWxkLmdldEZpZWxkSWQoKSk7XG5cblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG5cdG9uRmlsdGVyVHlwZVNlbGVjdChmaWx0ZXJUeXBlSWQ6IEZpbHRlclR5cGVJZCk6IHZvaWQge1xuXG5cdFx0dGhpcy5zZWxlY3RlZEZpbHRlclR5cGVJZCA9IGZpbHRlclR5cGVJZDtcblxuXHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0cmVtb3ZlQWxsRmlsdGVycygpOiB2b2lkIHtcblx0XHR0aGlzLmZpbHRlckNvbW1hbmREaXNwYXRjaGVyLnJlbW92ZUFsbEZpbHRlcnModGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRhZGRGaWx0ZXIoKTogdm9pZCB7XG5cblx0XHRjb25zdCBmaWVsZElkOiBGaWVsZElkID0gdGhpcy5zZWxlY3RlZEZpZWxkLmdldEZpZWxkSWQoKSxcblx0XHRcdGZpbHRlclR5cGVJZDogRmlsdGVyVHlwZUlkID0gdGhpcy5zZWxlY3RlZEZpbHRlclR5cGVJZCxcblx0XHRcdHZhbHVlOiBhbnkgPSB0aGlzLnNlbGVjdGVkVmFsdWU7XG5cblx0XHR0aGlzLmZpbHRlckNvbW1hbmREaXNwYXRjaGVyLmFkZChmaWVsZElkLCBmaWx0ZXJUeXBlSWQsIHZhbHVlLCB0aGlzLnN0cnVjdHVyZUlkKTtcblxuXHRcdHRoaXMuY2xlYXJBZGRGaWx0ZXJGb3JtKCk7XG5cdH1cblxuXHRvblZhbHVlQ2hhbmdlZCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RlZFZhbHVlID0gdmFsdWU7XG5cdH1cblxuXHRjbGVhckFkZEZpbHRlckZvcm0oKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RlZENvbHVtbiA9IG51bGw7XG5cdFx0dGhpcy5zZWxlY3RlZEZpZWxkID0gbnVsbDtcblx0XHR0aGlzLnNlbGVjdGVkRmlsdGVyVHlwZUlkID0gbnVsbDtcblx0XHR0aGlzLnNlbGVjdGVkVmFsdWUgPSBudWxsO1xuXHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG59XG4iXX0=