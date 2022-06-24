import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../feature/common/cdk/component/smart-component';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/composition/api/global/composition.id";
import * as i2 from "../../../core/composition/api/composition.publisher";
import * as i3 from "../../../core/composition/api/composition.warehouse";
import * as i4 from "@generic-ui/fabric";
import * as i5 from "@angular/common";
export class StructureColumnManagerComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, compositionId, compositionCommandInvoker, compositionWarehouse) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.compositionId = compositionId;
        this.compositionCommandInvoker = compositionCommandInvoker;
        this.compositionWarehouse = compositionWarehouse;
        this.addClassToHost('gui-block');
    }
    ngOnInit() {
        this.subscribe(this.compositionWarehouse.onAllColumns(this.compositionId), (columns) => {
            this.columns = columns;
            this.enabledColumnsCount = this.columns
                .map((c) => +c.isEnabled())
                .reduce((accumulator, currentValue) => accumulator + currentValue);
        });
    }
    toggleColumn(column) {
        event.stopPropagation();
        if (column.isEnabled()) {
            this.compositionCommandInvoker.disableColumn(column.getColumnDefinitionId(), this.compositionId);
        }
        else {
            this.compositionCommandInvoker.enableColumn(column.getColumnDefinitionId(), this.compositionId);
        }
    }
    getSelectorName() {
        return 'gui-structure-column-manager';
    }
}
StructureColumnManagerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureColumnManagerComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1.CompositionId }, { token: i2.CompositionPublisher }, { token: i3.CompositionWarehouse }], target: i0.ɵɵFactoryTarget.Component });
StructureColumnManagerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: StructureColumnManagerComponent, selector: "div[gui-structure-column-manager]", usesInheritance: true, ngImport: i0, template: `

		<ol class="gui-structure-ordered-list gui-p-0 gui-my-4 gui-list-none gui-overflow-auto">
			<li *ngFor="let column of columns"
				(click)="toggleColumn(column)"
				class="gui-px-13 gui-py-6 gui-cursor-pointer">

				<gui-checkbox [checked]="column.isEnabled()"
							  [disabled]="enabledColumnsCount === 1 && column.isEnabled()">

					<ng-container
						*ngTemplateOutlet="column.viewTemplate;
											context: column.context">
					</ng-container>

				</gui-checkbox>

			</li>
		</ol>

	`, isInline: true, components: [{ type: i4.FabricCheckboxComponent, selector: "gui-checkbox", inputs: ["name", "checked", "disabled", "readonly", "indeterminate"], outputs: ["changed"] }], directives: [{ type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i5.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureColumnManagerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'div[gui-structure-column-manager]',
                    template: `

		<ol class="gui-structure-ordered-list gui-p-0 gui-my-4 gui-list-none gui-overflow-auto">
			<li *ngFor="let column of columns"
				(click)="toggleColumn(column)"
				class="gui-px-13 gui-py-6 gui-cursor-pointer">

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
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.CompositionId }, { type: i2.CompositionPublisher }, { type: i3.CompositionWarehouse }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tYW5hZ2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9jb2x1bW4tbWFuYWdlci9zdHJ1Y3R1cmUuY29sdW1uLW1hbmFnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFzQixpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3SCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdURBQXVELENBQUM7Ozs7Ozs7QUFrQ3ZGLE1BQU0sT0FBTywrQkFBZ0MsU0FBUSxjQUFjO0lBTWxFLFlBQW9CLGlCQUFvQyxFQUNyRCxVQUFzQixFQUNkLGFBQTRCLEVBQzVCLHlCQUErQyxFQUMvQyxvQkFBMEM7UUFDcEQsS0FBSyxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBTGxCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFFN0Msa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUFzQjtRQUMvQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBR3BELElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELFFBQVE7UUFFUCxJQUFJLENBQUMsU0FBUyxDQUNiLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUMxRCxDQUFDLE9BQXVDLEVBQUUsRUFBRTtZQUMzQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLE9BQU87aUJBQzVCLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7aUJBQzFCLE1BQU0sQ0FBQyxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsRUFBRSxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUMsQ0FBQztRQUM5RSxDQUFDLENBQ0QsQ0FBQztJQUNILENBQUM7SUFFRCxZQUFZLENBQUMsTUFBK0I7UUFDM0MsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksTUFBTSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ2pHO2FBQU07WUFDTixJQUFJLENBQUMseUJBQXlCLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNoRztJQUNGLENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sOEJBQThCLENBQUM7SUFDdkMsQ0FBQzs7NkhBeENXLCtCQUErQjtpSEFBL0IsK0JBQStCLGdHQXhCakM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBb0JUOzRGQUlXLCtCQUErQjtrQkExQjNDLFNBQVM7bUJBQUM7b0JBQ1YsUUFBUSxFQUFFLG1DQUFtQztvQkFDN0MsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW9CVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9jb21wb3NpdGlvbi9hcGkvY29tcG9zaXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9jb21wb3NpdGlvbi9kb21haW4tcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IENvbXBvc2l0aW9uUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9jb21wb3NpdGlvbi9hcGkvY29tcG9zaXRpb24ucHVibGlzaGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL2FwaS9nbG9iYWwvY29tcG9zaXRpb24uaWQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLWNvbHVtbi1tYW5hZ2VyXScsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8b2wgY2xhc3M9XCJndWktc3RydWN0dXJlLW9yZGVyZWQtbGlzdCBndWktcC0wIGd1aS1teS00IGd1aS1saXN0LW5vbmUgZ3VpLW92ZXJmbG93LWF1dG9cIj5cblx0XHRcdDxsaSAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNcIlxuXHRcdFx0XHQoY2xpY2spPVwidG9nZ2xlQ29sdW1uKGNvbHVtbilcIlxuXHRcdFx0XHRjbGFzcz1cImd1aS1weC0xMyBndWktcHktNiBndWktY3Vyc29yLXBvaW50ZXJcIj5cblxuXHRcdFx0XHQ8Z3VpLWNoZWNrYm94IFtjaGVja2VkXT1cImNvbHVtbi5pc0VuYWJsZWQoKVwiXG5cdFx0XHRcdFx0XHRcdCAgW2Rpc2FibGVkXT1cImVuYWJsZWRDb2x1bW5zQ291bnQgPT09IDEgJiYgY29sdW1uLmlzRW5hYmxlZCgpXCI+XG5cblx0XHRcdFx0XHQ8bmctY29udGFpbmVyXG5cdFx0XHRcdFx0XHQqbmdUZW1wbGF0ZU91dGxldD1cImNvbHVtbi52aWV3VGVtcGxhdGU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29udGV4dDogY29sdW1uLmNvbnRleHRcIj5cblx0XHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cblxuXHRcdFx0XHQ8L2d1aS1jaGVja2JveD5cblxuXHRcdFx0PC9saT5cblx0XHQ8L29sPlxuXG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbHVtbk1hbmFnZXJDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0Y29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+O1xuXG5cdGVuYWJsZWRDb2x1bW5zQ291bnQ6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRwcml2YXRlIGNvbXBvc2l0aW9uQ29tbWFuZEludm9rZXI6IENvbXBvc2l0aW9uUHVibGlzaGVyLFxuXHRcdFx0XHRwcml2YXRlIGNvbXBvc2l0aW9uV2FyZWhvdXNlOiBDb21wb3NpdGlvbldhcmVob3VzZSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblxuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1ibG9jaycpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLnN1YnNjcmliZShcblx0XHRcdHRoaXMuY29tcG9zaXRpb25XYXJlaG91c2Uub25BbGxDb2x1bW5zKHRoaXMuY29tcG9zaXRpb25JZCksXG5cdFx0XHQoY29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+KSA9PiB7XG5cdFx0XHRcdHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XG5cdFx0XHRcdHRoaXMuZW5hYmxlZENvbHVtbnNDb3VudCA9IHRoaXMuY29sdW1uc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIC5tYXAoKGMpID0+ICtjLmlzRW5hYmxlZCgpKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIC5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBjdXJyZW50VmFsdWUpID0+IGFjY3VtdWxhdG9yICsgY3VycmVudFZhbHVlKTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0dG9nZ2xlQ29sdW1uKGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQpOiB2b2lkIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRpZiAoY29sdW1uLmlzRW5hYmxlZCgpKSB7XG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIuZGlzYWJsZUNvbHVtbihjb2x1bW4uZ2V0Q29sdW1uRGVmaW5pdGlvbklkKCksIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kSW52b2tlci5lbmFibGVDb2x1bW4oY29sdW1uLmdldENvbHVtbkRlZmluaXRpb25JZCgpLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHRcdH1cblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zdHJ1Y3R1cmUtY29sdW1uLW1hbmFnZXInO1xuXHR9XG59XG4iXX0=