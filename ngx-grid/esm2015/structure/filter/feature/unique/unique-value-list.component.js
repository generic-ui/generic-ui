/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { FieldId } from '../../../field/domain/core/field/field.id';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
import { FilterWarehouse } from '../../domain-api/filter.warehouse';
import { FilterCommandDispatcher } from '../../domain-api/filter.command-dispatcher';
export class UniqueValueListComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} structureId
     * @param {?} filterWarehouse
     * @param {?} filterCommandDispatcher
     */
    constructor(changeDetectorRef, structureId, filterWarehouse, filterCommandDispatcher) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.filterWarehouse = filterWarehouse;
        this.filterCommandDispatcher = filterCommandDispatcher;
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
            this.uniqueValues = uniqueValuesReadModel.getValues(this.fieldId);
            this.selectAllChecked = uniqueValuesReadModel.isSelectAllChecked(this.fieldId);
            this.selectAllIndeterminate = uniqueValuesReadModel.isIndeterminate(this.fieldId);
            this.changeDetectorRef.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    toggleAllSelect() {
        event.stopPropagation();
        if (this.selectAllChecked) {
            this.filterCommandDispatcher.unselectAllUniqueFilter(this.fieldId, this.structureId);
        }
        else {
            this.filterCommandDispatcher.selectAllUniqueFilter(this.fieldId, this.structureId);
        }
    }
    /**
     * @param {?} uniqueValueReadModel
     * @return {?}
     */
    toggleSelect(uniqueValueReadModel) {
        event.stopPropagation();
        if (uniqueValueReadModel.isEnabled()) {
            this.filterCommandDispatcher.unselectUniqueFilter(this.fieldId, uniqueValueReadModel.getId(), this.structureId);
        }
        else {
            this.filterCommandDispatcher.selectUniqueFilter(this.fieldId, uniqueValueReadModel.getId(), this.structureId);
        }
    }
    /**
     * @return {?}
     */
    clearFilters() {
        this.filterCommandDispatcher.selectAllUniqueFilter(this.fieldId, this.structureId);
    }
}
UniqueValueListComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-unique-value-list',
                template: `

		<gui-checkbox [checked]="selectAllChecked"
					  [indeterminate]="selectAllIndeterminate"
					  (changed)="toggleAllSelect()">
			Select all
		</gui-checkbox>
		<div class="gui-unique-value-list">
			<div *ngFor="let value of uniqueValues">
				<gui-checkbox [checked]="value.isEnabled()"
							  (changed)="toggleSelect(value)">
					{{value.getValue()}}
				</gui-checkbox>
			</div>
		</div>
		
		<div class="gui-unique-value-list-actions">
<!--			<button gui-button-->
<!--					[outline]="true"-->
<!--					(click)="clearFilters()">-->
<!--				Cancel-->
<!--			</button>-->
			
			<button gui-button
					[outline]="true"
					[primary]="true"
					(click)="clearFilters()">
				Clear
			</button>
		</div>

	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".gui-unique-value-list{max-height:300px;overflow-y:scroll;overflow-x:hidden}.gui-unique-value-list-actions{padding:8px;display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end}"]
            }] }
];
/** @nocollapse */
UniqueValueListComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: StructureId },
    { type: FilterWarehouse },
    { type: FilterCommandDispatcher }
];
UniqueValueListComponent.propDecorators = {
    fieldId: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    UniqueValueListComponent.prototype.fieldId;
    /** @type {?} */
    UniqueValueListComponent.prototype.selectAllChecked;
    /** @type {?} */
    UniqueValueListComponent.prototype.selectAllIndeterminate;
    /** @type {?} */
    UniqueValueListComponent.prototype.uniqueValues;
    /**
     * @type {?}
     * @private
     */
    UniqueValueListComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    UniqueValueListComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    UniqueValueListComponent.prototype.filterWarehouse;
    /**
     * @type {?}
     * @private
     */
    UniqueValueListComponent.prototype.filterCommandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXZhbHVlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvdW5pcXVlL3VuaXF1ZS12YWx1ZS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEgsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUVwRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXBFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBd0NyRixNQUFNLE9BQU8sd0JBQXlCLFNBQVEsY0FBYzs7Ozs7OztJQVczRCxZQUE2QixpQkFBb0MsRUFDN0MsV0FBd0IsRUFDeEIsZUFBZ0MsRUFDaEMsdUJBQWdEO1FBQ25FLEtBQUssRUFBRSxDQUFDO1FBSm9CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0MsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFMcEUsaUJBQVksR0FBZ0MsRUFBRSxDQUFDO0lBTy9DLENBQUM7Ozs7SUFFRCxRQUFRO1FBRVAsSUFBSSxDQUFDLGVBQWU7YUFDbEIsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDaEMsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxxQkFBNEMsRUFBRSxFQUFFO1lBQzNELElBQUksQ0FBQyxZQUFZLEdBQUcscUJBQXFCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUVsRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcscUJBQXFCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQy9FLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRWxGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXhCLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQzFCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNyRjthQUFNO1lBQ04sSUFBSSxDQUFDLHVCQUF1QixDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ25GO0lBQ0YsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsb0JBQTBDO1FBQ3RELEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV4QixJQUFJLG9CQUFvQixDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLG9CQUFvQixDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNoSDthQUFNO1lBQ04sSUFBSSxDQUFDLHVCQUF1QixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsb0JBQW9CLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzlHO0lBQ0YsQ0FBQzs7OztJQUVELFlBQVk7UUFDWCxJQUFJLENBQUMsdUJBQXVCLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEYsQ0FBQzs7O1lBL0ZELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUErQlQ7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUVyQzs7OztZQS9DaUMsaUJBQWlCO1lBSzFDLFdBQVc7WUFDWCxlQUFlO1lBRWYsdUJBQXVCOzs7c0JBMEM5QixLQUFLOzs7O0lBQU4sMkNBQ2lCOztJQUVqQixvREFBMEI7O0lBRTFCLDBEQUFnQzs7SUFFaEMsZ0RBQStDOzs7OztJQUVuQyxxREFBcUQ7Ozs7O0lBQzlELCtDQUF5Qzs7Ozs7SUFDekMsbURBQWlEOzs7OztJQUNqRCwyREFBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2RvbWFpbi9jb3JlL2ZpZWxkL2ZpZWxkLmlkJztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlc1JlYWRNb2RlbCB9IGZyb20gJy4uLy4uL2RvbWFpbi1hcGkvdW5pcXVlL3VuaXF1ZS12YWx1ZXMucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWx0ZXJXYXJlaG91c2UgfSBmcm9tICcuLi8uLi9kb21haW4tYXBpL2ZpbHRlci53YXJlaG91c2UnO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWVSZWFkTW9kZWwgfSBmcm9tICcuLi8uLi9kb21haW4tYXBpL3VuaXF1ZS91bmlxdWUtdmFsdWUucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBGaWx0ZXJDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL2RvbWFpbi1hcGkvZmlsdGVyLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS11bmlxdWUtdmFsdWUtbGlzdCcsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8Z3VpLWNoZWNrYm94IFtjaGVja2VkXT1cInNlbGVjdEFsbENoZWNrZWRcIlxuXHRcdFx0XHRcdCAgW2luZGV0ZXJtaW5hdGVdPVwic2VsZWN0QWxsSW5kZXRlcm1pbmF0ZVwiXG5cdFx0XHRcdFx0ICAoY2hhbmdlZCk9XCJ0b2dnbGVBbGxTZWxlY3QoKVwiPlxuXHRcdFx0U2VsZWN0IGFsbFxuXHRcdDwvZ3VpLWNoZWNrYm94PlxuXHRcdDxkaXYgY2xhc3M9XCJndWktdW5pcXVlLXZhbHVlLWxpc3RcIj5cblx0XHRcdDxkaXYgKm5nRm9yPVwibGV0IHZhbHVlIG9mIHVuaXF1ZVZhbHVlc1wiPlxuXHRcdFx0XHQ8Z3VpLWNoZWNrYm94IFtjaGVja2VkXT1cInZhbHVlLmlzRW5hYmxlZCgpXCJcblx0XHRcdFx0XHRcdFx0ICAoY2hhbmdlZCk9XCJ0b2dnbGVTZWxlY3QodmFsdWUpXCI+XG5cdFx0XHRcdFx0e3t2YWx1ZS5nZXRWYWx1ZSgpfX1cblx0XHRcdFx0PC9ndWktY2hlY2tib3g+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHRcblx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLXVuaXF1ZS12YWx1ZS1saXN0LWFjdGlvbnNcIj5cbjwhLS1cdFx0XHQ8YnV0dG9uIGd1aS1idXR0b24tLT5cbjwhLS1cdFx0XHRcdFx0W291dGxpbmVdPVwidHJ1ZVwiLS0+XG48IS0tXHRcdFx0XHRcdChjbGljayk9XCJjbGVhckZpbHRlcnMoKVwiPi0tPlxuPCEtLVx0XHRcdFx0Q2FuY2VsLS0+XG48IS0tXHRcdFx0PC9idXR0b24+LS0+XG5cdFx0XHRcblx0XHRcdDxidXR0b24gZ3VpLWJ1dHRvblxuXHRcdFx0XHRcdFtvdXRsaW5lXT1cInRydWVcIlxuXHRcdFx0XHRcdFtwcmltYXJ5XT1cInRydWVcIlxuXHRcdFx0XHRcdChjbGljayk9XCJjbGVhckZpbHRlcnMoKVwiPlxuXHRcdFx0XHRDbGVhclxuXHRcdFx0PC9idXR0b24+XG5cdFx0PC9kaXY+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdHN0eWxlVXJsczogWycuLi9zdHlsZS91bmlxdWUtdmFsdWUtbGlzdC5uZ3guc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFVuaXF1ZVZhbHVlTGlzdENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRmaWVsZElkOiBGaWVsZElkO1xuXG5cdHNlbGVjdEFsbENoZWNrZWQ6IGJvb2xlYW47XG5cblx0c2VsZWN0QWxsSW5kZXRlcm1pbmF0ZTogYm9vbGVhbjtcblxuXHR1bmlxdWVWYWx1ZXM6IEFycmF5PFVuaXF1ZVZhbHVlUmVhZE1vZGVsPiA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJXYXJlaG91c2U6IEZpbHRlcldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJDb21tYW5kRGlzcGF0Y2hlcjogRmlsdGVyQ29tbWFuZERpc3BhdGNoZXIpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLmZpbHRlcldhcmVob3VzZVxuXHRcdFx0Lm9uVW5pcXVlVmFsdWVzKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgodW5pcXVlVmFsdWVzUmVhZE1vZGVsOiBVbmlxdWVWYWx1ZXNSZWFkTW9kZWwpID0+IHtcblx0XHRcdFx0dGhpcy51bmlxdWVWYWx1ZXMgPSB1bmlxdWVWYWx1ZXNSZWFkTW9kZWwuZ2V0VmFsdWVzKHRoaXMuZmllbGRJZCk7XG5cblx0XHRcdFx0dGhpcy5zZWxlY3RBbGxDaGVja2VkID0gdW5pcXVlVmFsdWVzUmVhZE1vZGVsLmlzU2VsZWN0QWxsQ2hlY2tlZCh0aGlzLmZpZWxkSWQpO1xuXHRcdFx0XHR0aGlzLnNlbGVjdEFsbEluZGV0ZXJtaW5hdGUgPSB1bmlxdWVWYWx1ZXNSZWFkTW9kZWwuaXNJbmRldGVybWluYXRlKHRoaXMuZmllbGRJZCk7XG5cblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHRvZ2dsZUFsbFNlbGVjdCgpOiB2b2lkIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdGlmICh0aGlzLnNlbGVjdEFsbENoZWNrZWQpIHtcblx0XHRcdHRoaXMuZmlsdGVyQ29tbWFuZERpc3BhdGNoZXIudW5zZWxlY3RBbGxVbmlxdWVGaWx0ZXIodGhpcy5maWVsZElkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5maWx0ZXJDb21tYW5kRGlzcGF0Y2hlci5zZWxlY3RBbGxVbmlxdWVGaWx0ZXIodGhpcy5maWVsZElkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9XG5cdH1cblxuXHR0b2dnbGVTZWxlY3QodW5pcXVlVmFsdWVSZWFkTW9kZWw6IFVuaXF1ZVZhbHVlUmVhZE1vZGVsKTogdm9pZCB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRpZiAodW5pcXVlVmFsdWVSZWFkTW9kZWwuaXNFbmFibGVkKCkpIHtcblx0XHRcdHRoaXMuZmlsdGVyQ29tbWFuZERpc3BhdGNoZXIudW5zZWxlY3RVbmlxdWVGaWx0ZXIodGhpcy5maWVsZElkLCB1bmlxdWVWYWx1ZVJlYWRNb2RlbC5nZXRJZCgpLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5maWx0ZXJDb21tYW5kRGlzcGF0Y2hlci5zZWxlY3RVbmlxdWVGaWx0ZXIodGhpcy5maWVsZElkLCB1bmlxdWVWYWx1ZVJlYWRNb2RlbC5nZXRJZCgpLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9XG5cdH1cblxuXHRjbGVhckZpbHRlcnMoKTogdm9pZCB7XG5cdFx0dGhpcy5maWx0ZXJDb21tYW5kRGlzcGF0Y2hlci5zZWxlY3RBbGxVbmlxdWVGaWx0ZXIodGhpcy5maWVsZElkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=