/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { CompositionWarehouse } from '../../../../composition/core/api/composition.warehouse';
import { CompositionCommandInvoker } from '../../../../composition/core/api/composition.command-invoker';
import { CompositionId } from '../../../../composition/core/api/composition.id';
export class StructureColumnManagerComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} compositionId
     * @param {?} compositionCommandService
     * @param {?} compositionReadModelService
     */
    constructor(changeDetectorRef, compositionId, compositionCommandService, compositionReadModelService) {
        super(changeDetectorRef);
        this.changeDetectorRef = changeDetectorRef;
        this.compositionId = compositionId;
        this.compositionCommandService = compositionCommandService;
        this.compositionReadModelService = compositionReadModelService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.compositionReadModelService
            .onAllColumns(this.compositionId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} columns
         * @return {?}
         */
        (columns) => {
            this.columns = columns;
            this.enabledColumnsCount = this.columns
                .map((/**
             * @param {?} c
             * @return {?}
             */
            (c) => +c.isEnabled()))
                .reduce((/**
             * @param {?} accumulator
             * @param {?} currentValue
             * @return {?}
             */
            (accumulator, currentValue) => accumulator + currentValue));
            this.changeDetectorRef.detectChanges();
        }));
    }
    /**
     * @param {?} column
     * @return {?}
     */
    toggleColumn(column) {
        event.stopPropagation();
        if (column.isEnabled()) {
            this.compositionCommandService.disableColumn(column.getColumnDefinitionId(), this.compositionId);
        }
        else {
            this.compositionCommandService.enableColumn(column.getColumnDefinitionId(), this.compositionId);
        }
    }
}
StructureColumnManagerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-column-manager',
                template: `

		<ol>
			<li *ngFor="let column of columns"
				(click)="toggleColumn(column)">

				<gui-checkbox [checked]="column.isEnabled()"
							  [disabled]="enabledColumnsCount === 1 && column.isEnabled()">

					<ng-container
							*ngTemplateOutlet="column.viewTemplate;
											context: column.context">
					</ng-container>
				</gui-checkbox>

			</li>
		</ol>

	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-structure-column-manager]': 'true'
                }
            }] }
];
/** @nocollapse */
StructureColumnManagerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: CompositionId },
    { type: CompositionCommandInvoker },
    { type: CompositionWarehouse }
];
if (false) {
    /** @type {?} */
    StructureColumnManagerComponent.prototype.columns;
    /** @type {?} */
    StructureColumnManagerComponent.prototype.enabledColumnsCount;
    /**
     * @type {?}
     * @private
     */
    StructureColumnManagerComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureColumnManagerComponent.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    StructureColumnManagerComponent.prototype.compositionCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureColumnManagerComponent.prototype.compositionReadModelService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tYW5hZ2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9jb2x1bW4tbWFuYWdlci9zdHJ1Y3R1cmUuY29sdW1uLW1hbmFnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUV4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUU5RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUN6RyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saURBQWlELENBQUM7QUE4QmhGLE1BQU0sT0FBTywrQkFBZ0MsU0FBUSxjQUFjOzs7Ozs7O0lBTWxFLFlBQW9CLGlCQUFvQyxFQUM3QyxhQUE0QixFQUM1Qix5QkFBb0QsRUFDcEQsMkJBQWlEO1FBQzNELEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBSk4sc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3QyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1Qiw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBQ3BELGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBc0I7SUFFNUQsQ0FBQzs7OztJQUVELFFBQVE7UUFFUCxJQUFJLENBQUMsMkJBQTJCO2FBQzlCLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO2FBQ2hDLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsT0FBdUMsRUFBRSxFQUFFO1lBQ3RELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsT0FBTztpQkFDNUIsR0FBRzs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBQztpQkFDMUIsTUFBTTs7Ozs7WUFBQyxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsRUFBRSxDQUFDLFdBQVcsR0FBRyxZQUFZLEVBQUMsQ0FBQztZQUU3RSxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxNQUErQjtRQUMzQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDdkIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDakc7YUFBTTtZQUNOLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ2hHO0lBQ0YsQ0FBQzs7O1lBaEVELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWtCVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLElBQUksRUFBRTtvQkFDTCxzQ0FBc0MsRUFBRSxNQUFNO2lCQUM5QzthQUNEOzs7O1lBcENpQyxpQkFBaUI7WUFPMUMsYUFBYTtZQURiLHlCQUF5QjtZQUZ6QixvQkFBb0I7Ozs7SUFtQzVCLGtEQUF3Qzs7SUFFeEMsOERBQTRCOzs7OztJQUVoQiw0REFBNEM7Ozs7O0lBQ3JELHdEQUFvQzs7Ozs7SUFDcEMsb0VBQTREOzs7OztJQUM1RCxzRUFBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uaWQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtY29sdW1uLW1hbmFnZXInLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PG9sPlxuXHRcdFx0PGxpICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1uc1wiXG5cdFx0XHRcdChjbGljayk9XCJ0b2dnbGVDb2x1bW4oY29sdW1uKVwiPlxuXG5cdFx0XHRcdDxndWktY2hlY2tib3ggW2NoZWNrZWRdPVwiY29sdW1uLmlzRW5hYmxlZCgpXCJcblx0XHRcdFx0XHRcdFx0ICBbZGlzYWJsZWRdPVwiZW5hYmxlZENvbHVtbnNDb3VudCA9PT0gMSAmJiBjb2x1bW4uaXNFbmFibGVkKClcIj5cblxuXHRcdFx0XHRcdDxuZy1jb250YWluZXJcblx0XHRcdFx0XHRcdFx0Km5nVGVtcGxhdGVPdXRsZXQ9XCJjb2x1bW4udmlld1RlbXBsYXRlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnRleHQ6IGNvbHVtbi5jb250ZXh0XCI+XG5cdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdDwvZ3VpLWNoZWNrYm94PlxuXG5cdFx0XHQ8L2xpPlxuXHRcdDwvb2w+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1zdHJ1Y3R1cmUtY29sdW1uLW1hbmFnZXJdJzogJ3RydWUnXG5cdH1cbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uTWFuYWdlckNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD47XG5cblx0ZW5hYmxlZENvbHVtbnNDb3VudDogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgY29tcG9zaXRpb25Db21tYW5kU2VydmljZTogQ29tcG9zaXRpb25Db21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSBjb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2U6IENvbXBvc2l0aW9uV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZVxuXHRcdFx0Lm9uQWxsQ29sdW1ucyh0aGlzLmNvbXBvc2l0aW9uSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoY29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+KSA9PiB7XG5cdFx0XHRcdHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XG5cdFx0XHRcdHRoaXMuZW5hYmxlZENvbHVtbnNDb3VudCA9IHRoaXMuY29sdW1uc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIC5tYXAoKGMpID0+ICtjLmlzRW5hYmxlZCgpKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIC5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBjdXJyZW50VmFsdWUpID0+IGFjY3VtdWxhdG9yICsgY3VycmVudFZhbHVlKTtcblxuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0dG9nZ2xlQ29sdW1uKGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQpOiB2b2lkIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRpZiAoY29sdW1uLmlzRW5hYmxlZCgpKSB7XG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZFNlcnZpY2UuZGlzYWJsZUNvbHVtbihjb2x1bW4uZ2V0Q29sdW1uRGVmaW5pdGlvbklkKCksIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kU2VydmljZS5lbmFibGVDb2x1bW4oY29sdW1uLmdldENvbHVtbkRlZmluaXRpb25JZCgpLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHRcdH1cblx0fVxufVxuIl19