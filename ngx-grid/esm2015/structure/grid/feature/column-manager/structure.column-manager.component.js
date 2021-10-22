/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { CompositionWarehouse } from '../../../../composition/core/api/composition.warehouse';
import { CompositionCommandInvoker } from '../../../../composition/core/api/composition.command-invoker';
import { CompositionId } from '../../../../composition/core/api/composition.id';
export class StructureColumnManagerComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} elementRef
     * @param {?} compositionId
     * @param {?} compositionCommandInvoker
     * @param {?} compositionWarehouse
     */
    constructor(changeDetectorRef, elementRef, compositionId, compositionCommandInvoker, compositionWarehouse) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.compositionId = compositionId;
        this.compositionCommandInvoker = compositionCommandInvoker;
        this.compositionWarehouse = compositionWarehouse;
        this.addClassToHost('gui-block');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.hermesSubscribe(this.compositionWarehouse.onAllColumns(this.compositionId), (/**
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
        }));
    }
    /**
     * @param {?} column
     * @return {?}
     */
    toggleColumn(column) {
        event.stopPropagation();
        if (column.isEnabled()) {
            this.compositionCommandInvoker.disableColumn(column.getColumnDefinitionId(), this.compositionId);
        }
        else {
            this.compositionCommandInvoker.enableColumn(column.getColumnDefinitionId(), this.compositionId);
        }
    }
    /**
     * @protected
     * @return {?}
     */
    getSelectorName() {
        return 'gui-structure-column-manager';
    }
}
StructureColumnManagerComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-structure-column-manager]',
                template: `

		<ol class="gui-p-0 gui-my-4 gui-mx-0 gui-list-none gui-overflow-auto">
			<li *ngFor="let column of columns"
				(click)="toggleColumn(column)"
				class="gui-p-6 gui-cursor-pointer">

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
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureColumnManagerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
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
    StructureColumnManagerComponent.prototype.compositionCommandInvoker;
    /**
     * @type {?}
     * @private
     */
    StructureColumnManagerComponent.prototype.compositionWarehouse;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tYW5hZ2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9jb2x1bW4tbWFuYWdlci9zdHJ1Y3R1cmUuY29sdW1uLW1hbmFnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3SCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFFbEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFFOUYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDekcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBNEJoRixNQUFNLE9BQU8sK0JBQWdDLFNBQVEsY0FBYzs7Ozs7Ozs7SUFNbEUsWUFBb0IsaUJBQW9DLEVBQ3JELFVBQXNCLEVBQ2QsYUFBNEIsRUFDNUIseUJBQW9ELEVBQ3BELG9CQUEwQztRQUNwRCxLQUFLLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFMbEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUU3QyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1Qiw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBQ3BELHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFHcEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsUUFBUTtRQUVQLElBQUksQ0FBQyxlQUFlLENBQ25CLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQzs7OztRQUMxRCxDQUFDLE9BQXVDLEVBQUUsRUFBRTtZQUMzQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLE9BQU87aUJBQzVCLEdBQUc7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUM7aUJBQzFCLE1BQU07Ozs7O1lBQUMsQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLEVBQUUsQ0FBQyxXQUFXLEdBQUcsWUFBWSxFQUFDLENBQUM7UUFDOUUsQ0FBQyxFQUNELENBQUM7SUFDSCxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxNQUErQjtRQUMzQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDdkIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDakc7YUFBTTtZQUNOLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ2hHO0lBQ0YsQ0FBQzs7Ozs7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sOEJBQThCLENBQUM7SUFDdkMsQ0FBQzs7O1lBakVELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsbUNBQW1DO2dCQUM3QyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFtQlQ7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDOzs7O1lBbENpQyxpQkFBaUI7WUFBYSxVQUFVO1lBT2pFLGFBQWE7WUFEYix5QkFBeUI7WUFGekIsb0JBQW9COzs7O0lBaUM1QixrREFBd0M7O0lBRXhDLDhEQUE0Qjs7Ozs7SUFFaEIsNERBQTRDOzs7OztJQUVyRCx3REFBb0M7Ozs7O0lBQ3BDLG9FQUE0RDs7Ozs7SUFDNUQsK0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi5pZCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zdHJ1Y3R1cmUtY29sdW1uLW1hbmFnZXJdJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxvbCBjbGFzcz1cImd1aS1wLTAgZ3VpLW15LTQgZ3VpLW14LTAgZ3VpLWxpc3Qtbm9uZSBndWktb3ZlcmZsb3ctYXV0b1wiPlxuXHRcdFx0PGxpICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1uc1wiXG5cdFx0XHRcdChjbGljayk9XCJ0b2dnbGVDb2x1bW4oY29sdW1uKVwiXG5cdFx0XHRcdGNsYXNzPVwiZ3VpLXAtNiBndWktY3Vyc29yLXBvaW50ZXJcIj5cblxuXHRcdFx0XHQ8Z3VpLWNoZWNrYm94IFtjaGVja2VkXT1cImNvbHVtbi5pc0VuYWJsZWQoKVwiXG5cdFx0XHRcdFx0XHRcdCAgW2Rpc2FibGVkXT1cImVuYWJsZWRDb2x1bW5zQ291bnQgPT09IDEgJiYgY29sdW1uLmlzRW5hYmxlZCgpXCI+XG5cblx0XHRcdFx0XHQ8bmctY29udGFpbmVyXG5cdFx0XHRcdFx0XHQqbmdUZW1wbGF0ZU91dGxldD1cImNvbHVtbi52aWV3VGVtcGxhdGU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29udGV4dDogY29sdW1uLmNvbnRleHRcIj5cblx0XHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cblx0XHRcdFx0PC9ndWktY2hlY2tib3g+XG5cblx0XHRcdDwvbGk+XG5cdFx0PC9vbD5cblxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5NYW5hZ2VyQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PjtcblxuXHRlbmFibGVkQ29sdW1uc0NvdW50OiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0cHJpdmF0ZSBjb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyOiBDb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIGNvbXBvc2l0aW9uV2FyZWhvdXNlOiBDb21wb3NpdGlvbldhcmVob3VzZSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblxuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1ibG9jaycpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuY29tcG9zaXRpb25XYXJlaG91c2Uub25BbGxDb2x1bW5zKHRoaXMuY29tcG9zaXRpb25JZCksXG5cdFx0XHQoY29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+KSA9PiB7XG5cdFx0XHRcdHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XG5cdFx0XHRcdHRoaXMuZW5hYmxlZENvbHVtbnNDb3VudCA9IHRoaXMuY29sdW1uc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIC5tYXAoKGMpID0+ICtjLmlzRW5hYmxlZCgpKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIC5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBjdXJyZW50VmFsdWUpID0+IGFjY3VtdWxhdG9yICsgY3VycmVudFZhbHVlKTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0dG9nZ2xlQ29sdW1uKGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQpOiB2b2lkIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRpZiAoY29sdW1uLmlzRW5hYmxlZCgpKSB7XG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIuZGlzYWJsZUNvbHVtbihjb2x1bW4uZ2V0Q29sdW1uRGVmaW5pdGlvbklkKCksIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kSW52b2tlci5lbmFibGVDb2x1bW4oY29sdW1uLmdldENvbHVtbkRlZmluaXRpb25JZCgpLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHRcdH1cblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zdHJ1Y3R1cmUtY29sdW1uLW1hbmFnZXInO1xuXHR9XG59XG4iXX0=