/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { FieldId } from '../../../field/core/domain/field/field.id';
import { StructureId } from '../../../core/api/structure.id';
import { FilterWarehouse } from '../../core/api/filter.warehouse';
import { FilterCommandInvoker } from '../../core/api/filter.command-invoker';
export class UniqueValueListComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} structureId
     * @param {?} filterWarehouse
     * @param {?} filterCommandDispatcher
     */
    constructor(changeDetectorRef, structureId, filterWarehouse, filterCommandDispatcher) {
        super(changeDetectorRef);
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
    { type: FilterCommandInvoker }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXZhbHVlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvdW5pcXVlL3VuaXF1ZS12YWx1ZS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEgsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUVwRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRWxFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBd0M3RSxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsY0FBYzs7Ozs7OztJQVczRCxZQUE2QixpQkFBb0MsRUFDN0MsV0FBd0IsRUFDeEIsZUFBZ0MsRUFDaEMsdUJBQTZDO1FBQ2hFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBSkcsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUFzQjtRQUxqRSxpQkFBWSxHQUFnQyxFQUFFLENBQUM7SUFPL0MsQ0FBQzs7OztJQUVELFFBQVE7UUFFUCxJQUFJLENBQUMsZUFBZTthQUNsQixjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNoQyxJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxDQUFDLHFCQUE0QyxFQUFFLEVBQUU7WUFDM0QsSUFBSSxDQUFDLFlBQVksR0FBRyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRWxFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxxQkFBcUIsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0UsSUFBSSxDQUFDLHNCQUFzQixHQUFHLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFbEYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELGVBQWU7UUFDZCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFeEIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDMUIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3JGO2FBQU07WUFDTixJQUFJLENBQUMsdUJBQXVCLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDbkY7SUFDRixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxvQkFBMEM7UUFDdEQsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXhCLElBQUksb0JBQW9CLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsb0JBQW9CLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2hIO2FBQU07WUFDTixJQUFJLENBQUMsdUJBQXVCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDOUc7SUFDRixDQUFDOzs7O0lBRUQsWUFBWTtRQUNYLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwRixDQUFDOzs7WUEvRkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQStCVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBRXJDOzs7O1lBL0NpQyxpQkFBaUI7WUFLMUMsV0FBVztZQUNYLGVBQWU7WUFFZixvQkFBb0I7OztzQkEwQzNCLEtBQUs7Ozs7SUFBTiwyQ0FDaUI7O0lBRWpCLG9EQUEwQjs7SUFFMUIsMERBQWdDOztJQUVoQyxnREFBK0M7Ozs7O0lBRW5DLHFEQUFxRDs7Ozs7SUFDOUQsK0NBQXlDOzs7OztJQUN6QyxtREFBaUQ7Ozs7O0lBQ2pELDJEQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWVzUmVhZE1vZGVsIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvdW5pcXVlL3VuaXF1ZS12YWx1ZXMucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWx0ZXJXYXJlaG91c2UgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9maWx0ZXIud2FyZWhvdXNlJztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlUmVhZE1vZGVsIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvdW5pcXVlL3VuaXF1ZS12YWx1ZS5yZWFkLW1vZGVsJztcbmltcG9ydCB7IEZpbHRlckNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvZmlsdGVyLmNvbW1hbmQtaW52b2tlcic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS11bmlxdWUtdmFsdWUtbGlzdCcsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8Z3VpLWNoZWNrYm94IFtjaGVja2VkXT1cInNlbGVjdEFsbENoZWNrZWRcIlxuXHRcdFx0XHRcdCAgW2luZGV0ZXJtaW5hdGVdPVwic2VsZWN0QWxsSW5kZXRlcm1pbmF0ZVwiXG5cdFx0XHRcdFx0ICAoY2hhbmdlZCk9XCJ0b2dnbGVBbGxTZWxlY3QoKVwiPlxuXHRcdFx0U2VsZWN0IGFsbFxuXHRcdDwvZ3VpLWNoZWNrYm94PlxuXHRcdDxkaXYgY2xhc3M9XCJndWktdW5pcXVlLXZhbHVlLWxpc3RcIj5cblx0XHRcdDxkaXYgKm5nRm9yPVwibGV0IHZhbHVlIG9mIHVuaXF1ZVZhbHVlc1wiPlxuXHRcdFx0XHQ8Z3VpLWNoZWNrYm94IFtjaGVja2VkXT1cInZhbHVlLmlzRW5hYmxlZCgpXCJcblx0XHRcdFx0XHRcdFx0ICAoY2hhbmdlZCk9XCJ0b2dnbGVTZWxlY3QodmFsdWUpXCI+XG5cdFx0XHRcdFx0e3t2YWx1ZS5nZXRWYWx1ZSgpfX1cblx0XHRcdFx0PC9ndWktY2hlY2tib3g+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblxuXHRcdDxkaXYgY2xhc3M9XCJndWktdW5pcXVlLXZhbHVlLWxpc3QtYWN0aW9uc1wiPlxuXHRcdFx0PCEtLVx0XHRcdDxidXR0b24gZ3VpLWJ1dHRvbi0tPlxuXHRcdFx0PCEtLVx0XHRcdFx0XHRbb3V0bGluZV09XCJ0cnVlXCItLT5cblx0XHRcdDwhLS1cdFx0XHRcdFx0KGNsaWNrKT1cImNsZWFyRmlsdGVycygpXCI+LS0+XG5cdFx0XHQ8IS0tXHRcdFx0XHRDYW5jZWwtLT5cblx0XHRcdDwhLS1cdFx0XHQ8L2J1dHRvbj4tLT5cblxuXHRcdFx0PGJ1dHRvbiBndWktYnV0dG9uXG5cdFx0XHRcdFx0W291dGxpbmVdPVwidHJ1ZVwiXG5cdFx0XHRcdFx0W3ByaW1hcnldPVwidHJ1ZVwiXG5cdFx0XHRcdFx0KGNsaWNrKT1cImNsZWFyRmlsdGVycygpXCI+XG5cdFx0XHRcdENsZWFyXG5cdFx0XHQ8L2J1dHRvbj5cblx0XHQ8L2Rpdj5cblxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0c3R5bGVVcmxzOiBbJy4uL3N0eWxlL3VuaXF1ZS12YWx1ZS1saXN0Lm5neC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVW5pcXVlVmFsdWVMaXN0Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdGZpZWxkSWQ6IEZpZWxkSWQ7XG5cblx0c2VsZWN0QWxsQ2hlY2tlZDogYm9vbGVhbjtcblxuXHRzZWxlY3RBbGxJbmRldGVybWluYXRlOiBib29sZWFuO1xuXG5cdHVuaXF1ZVZhbHVlczogQXJyYXk8VW5pcXVlVmFsdWVSZWFkTW9kZWw+ID0gW107XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlcldhcmVob3VzZTogRmlsdGVyV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlckNvbW1hbmREaXNwYXRjaGVyOiBGaWx0ZXJDb21tYW5kSW52b2tlcikge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5maWx0ZXJXYXJlaG91c2Vcblx0XHRcdC5vblVuaXF1ZVZhbHVlcyh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHVuaXF1ZVZhbHVlc1JlYWRNb2RlbDogVW5pcXVlVmFsdWVzUmVhZE1vZGVsKSA9PiB7XG5cdFx0XHRcdHRoaXMudW5pcXVlVmFsdWVzID0gdW5pcXVlVmFsdWVzUmVhZE1vZGVsLmdldFZhbHVlcyh0aGlzLmZpZWxkSWQpO1xuXG5cdFx0XHRcdHRoaXMuc2VsZWN0QWxsQ2hlY2tlZCA9IHVuaXF1ZVZhbHVlc1JlYWRNb2RlbC5pc1NlbGVjdEFsbENoZWNrZWQodGhpcy5maWVsZElkKTtcblx0XHRcdFx0dGhpcy5zZWxlY3RBbGxJbmRldGVybWluYXRlID0gdW5pcXVlVmFsdWVzUmVhZE1vZGVsLmlzSW5kZXRlcm1pbmF0ZSh0aGlzLmZpZWxkSWQpO1xuXG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHR0b2dnbGVBbGxTZWxlY3QoKTogdm9pZCB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRpZiAodGhpcy5zZWxlY3RBbGxDaGVja2VkKSB7XG5cdFx0XHR0aGlzLmZpbHRlckNvbW1hbmREaXNwYXRjaGVyLnVuc2VsZWN0QWxsVW5pcXVlRmlsdGVyKHRoaXMuZmllbGRJZCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZmlsdGVyQ29tbWFuZERpc3BhdGNoZXIuc2VsZWN0QWxsVW5pcXVlRmlsdGVyKHRoaXMuZmllbGRJZCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0fVxuXHR9XG5cblx0dG9nZ2xlU2VsZWN0KHVuaXF1ZVZhbHVlUmVhZE1vZGVsOiBVbmlxdWVWYWx1ZVJlYWRNb2RlbCk6IHZvaWQge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0aWYgKHVuaXF1ZVZhbHVlUmVhZE1vZGVsLmlzRW5hYmxlZCgpKSB7XG5cdFx0XHR0aGlzLmZpbHRlckNvbW1hbmREaXNwYXRjaGVyLnVuc2VsZWN0VW5pcXVlRmlsdGVyKHRoaXMuZmllbGRJZCwgdW5pcXVlVmFsdWVSZWFkTW9kZWwuZ2V0SWQoKSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZmlsdGVyQ29tbWFuZERpc3BhdGNoZXIuc2VsZWN0VW5pcXVlRmlsdGVyKHRoaXMuZmllbGRJZCwgdW5pcXVlVmFsdWVSZWFkTW9kZWwuZ2V0SWQoKSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0fVxuXHR9XG5cblx0Y2xlYXJGaWx0ZXJzKCk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyQ29tbWFuZERpc3BhdGNoZXIuc2VsZWN0QWxsVW5pcXVlRmlsdGVyKHRoaXMuZmllbGRJZCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19