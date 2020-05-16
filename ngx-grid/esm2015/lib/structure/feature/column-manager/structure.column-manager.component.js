/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { CompositionWarehouse } from '../../../composition/domain-api/composition.warehouse';
import { CompositionCommandDispatcher } from '../../../composition/domain-api/composition.command-dispatcher';
import { CompositionId } from '../../../composition/domain/composition.id';
export class StructureColumnManagerComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} compositionId
     * @param {?} compositionCommandService
     * @param {?} compositionReadModelService
     */
    constructor(changeDetectorRef, compositionId, compositionCommandService, compositionReadModelService) {
        super();
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
    { type: CompositionCommandDispatcher },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tYW5hZ2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL2NvbHVtbi1tYW5hZ2VyL3N0cnVjdHVyZS5jb2x1bW4tbWFuYWdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakgsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRXhFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBRTdGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQThCM0UsTUFBTSxPQUFPLCtCQUFnQyxTQUFRLGNBQWM7Ozs7Ozs7SUFNbEUsWUFBb0IsaUJBQW9DLEVBQzdDLGFBQTRCLEVBQzVCLHlCQUF1RCxFQUN2RCwyQkFBaUQ7UUFDM0QsS0FBSyxFQUFFLENBQUM7UUFKVyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBOEI7UUFDdkQsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUFzQjtJQUU1RCxDQUFDOzs7O0lBRUQsUUFBUTtRQUVQLElBQUksQ0FBQywyQkFBMkI7YUFDOUIsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7YUFDaEMsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxPQUF1QyxFQUFFLEVBQUU7WUFDdEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDdkIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxPQUFPO2lCQUM1QixHQUFHOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFDO2lCQUMxQixNQUFNOzs7OztZQUFDLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxFQUFFLENBQUMsV0FBVyxHQUFHLFlBQVksRUFBQyxDQUFDO1lBRTdFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLE1BQStCO1FBQzNDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUN2QixJQUFJLENBQUMseUJBQXlCLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNqRzthQUFNO1lBQ04sSUFBSSxDQUFDLHlCQUF5QixDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDaEc7SUFDRixDQUFDOzs7WUFoRUQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBa0JUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsSUFBSSxFQUFFO29CQUNMLHNDQUFzQyxFQUFFLE1BQU07aUJBQzlDO2FBQ0Q7Ozs7WUFwQ2lDLGlCQUFpQjtZQU8xQyxhQUFhO1lBRGIsNEJBQTRCO1lBRjVCLG9CQUFvQjs7OztJQW1DNUIsa0RBQXdDOztJQUV4Qyw4REFBNEI7Ozs7O0lBRWhCLDREQUE0Qzs7Ozs7SUFDckQsd0RBQW9DOzs7OztJQUNwQyxvRUFBK0Q7Ozs7O0lBQy9ELHNFQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvY29tcG9zaXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluLWFwaS9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvY29tcG9zaXRpb24uY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29tcG9zaXRpb24uaWQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtY29sdW1uLW1hbmFnZXInLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PG9sPlxuXHRcdFx0PGxpICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1uc1wiXG5cdFx0XHRcdChjbGljayk9XCJ0b2dnbGVDb2x1bW4oY29sdW1uKVwiPlxuXG5cdFx0XHRcdDxndWktY2hlY2tib3ggW2NoZWNrZWRdPVwiY29sdW1uLmlzRW5hYmxlZCgpXCJcblx0XHRcdFx0XHRcdFx0ICBbZGlzYWJsZWRdPVwiZW5hYmxlZENvbHVtbnNDb3VudCA9PT0gMSAmJiBjb2x1bW4uaXNFbmFibGVkKClcIj5cblxuXHRcdFx0XHRcdDxuZy1jb250YWluZXJcblx0XHRcdFx0XHRcdFx0Km5nVGVtcGxhdGVPdXRsZXQ9XCJjb2x1bW4udmlld1RlbXBsYXRlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnRleHQ6IGNvbHVtbi5jb250ZXh0XCI+XG5cdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdDwvZ3VpLWNoZWNrYm94PlxuXG5cdFx0XHQ8L2xpPlxuXHRcdDwvb2w+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1zdHJ1Y3R1cmUtY29sdW1uLW1hbmFnZXJdJzogJ3RydWUnXG5cdH1cbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uTWFuYWdlckNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD47XG5cblx0ZW5hYmxlZENvbHVtbnNDb3VudDogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgY29tcG9zaXRpb25Db21tYW5kU2VydmljZTogQ29tcG9zaXRpb25Db21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSBjb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2U6IENvbXBvc2l0aW9uV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vbkFsbENvbHVtbnModGhpcy5jb21wb3NpdGlvbklkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PikgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xuXHRcdFx0XHR0aGlzLmVuYWJsZWRDb2x1bW5zQ291bnQgPSB0aGlzLmNvbHVtbnNcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAubWFwKChjKSA9PiArYy5pc0VuYWJsZWQoKSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAucmVkdWNlKChhY2N1bXVsYXRvciwgY3VycmVudFZhbHVlKSA9PiBhY2N1bXVsYXRvciArIGN1cnJlbnRWYWx1ZSk7XG5cblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHRvZ2dsZUNvbHVtbihjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KTogdm9pZCB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0aWYgKGNvbHVtbi5pc0VuYWJsZWQoKSkge1xuXHRcdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlLmRpc2FibGVDb2x1bW4oY29sdW1uLmdldENvbHVtbkRlZmluaXRpb25JZCgpLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZFNlcnZpY2UuZW5hYmxlQ29sdW1uKGNvbHVtbi5nZXRDb2x1bW5EZWZpbml0aW9uSWQoKSwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==