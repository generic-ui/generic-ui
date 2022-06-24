import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { EditCommunicationComponent } from '../edit-communication.component';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/fabric";
export class BooleanEditTemplateComponent extends EditCommunicationComponent {
    constructor(changeDetectorRef, elementRef) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.filterFieldName = 'booleanEdit';
    }
    toggle(changed) {
        this.valueChanges.emit(changed);
        this.submit();
    }
    getSelectorName() {
        return 'gui-boolean-edit';
    }
}
BooleanEditTemplateComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: BooleanEditTemplateComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
BooleanEditTemplateComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: BooleanEditTemplateComponent, selector: "gui-boolean-edit", viewQueries: [{ propertyName: "checkboxRef", first: true, predicate: ["checkbox"], descendants: true, read: ElementRef, static: true }], usesInheritance: true, ngImport: i0, template: `

		<span class="gui-cell-boolean">
			<gui-checkbox #checkbox
						  [checked]="value"
						  [name]="filterFieldName"
						  (changed)="toggle($event)">
			</gui-checkbox>
		</span>

	`, isInline: true, components: [{ type: i1.FabricCheckboxComponent, selector: "gui-checkbox", inputs: ["name", "checked", "disabled", "readonly", "indeterminate"], outputs: ["changed"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: BooleanEditTemplateComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'gui-boolean-edit',
                    template: `

		<span class="gui-cell-boolean">
			<gui-checkbox #checkbox
						  [checked]="value"
						  [name]="filterFieldName"
						  (changed)="toggle($event)">
			</gui-checkbox>
		</span>

	`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; }, propDecorators: { checkboxRef: [{
                type: ViewChild,
                args: ['checkbox', { read: ElementRef, static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29yZS9jb21wb3NpdGlvbi9kb21haW4tcmVhZC9lZGl0L3RlbXBsYXRlL2Jvb2xlYW4tZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVoSSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7O0FBbUI3RSxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsMEJBQW1DO0lBT3BGLFlBQTZCLGlCQUFvQyxFQUM5RCxVQUFzQjtRQUN4QixLQUFLLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFGVCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBRnhELG9CQUFlLEdBQUcsYUFBYSxDQUFDO0lBS3pDLENBQUM7SUFFRCxNQUFNLENBQUMsT0FBZ0I7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxrQkFBa0IsQ0FBQztJQUMzQixDQUFDOzswSEFuQlcsNEJBQTRCOzhHQUE1Qiw0QkFBNEIsNElBRVQsVUFBVSxrRUFoQi9COzs7Ozs7Ozs7O0VBVVQ7NEZBSVcsNEJBQTRCO2tCQWhCeEMsU0FBUzttQkFBQztvQkFDVixRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7RUFVVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDO2lJQUlBLFdBQVc7c0JBRFYsU0FBUzt1QkFBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFZGl0Q29tbXVuaWNhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uL2VkaXQtY29tbXVuaWNhdGlvbi5jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1ib29sZWFuLWVkaXQnLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PHNwYW4gY2xhc3M9XCJndWktY2VsbC1ib29sZWFuXCI+XG5cdFx0XHQ8Z3VpLWNoZWNrYm94ICNjaGVja2JveFxuXHRcdFx0XHRcdFx0ICBbY2hlY2tlZF09XCJ2YWx1ZVwiXG5cdFx0XHRcdFx0XHQgIFtuYW1lXT1cImZpbHRlckZpZWxkTmFtZVwiXG5cdFx0XHRcdFx0XHQgIChjaGFuZ2VkKT1cInRvZ2dsZSgkZXZlbnQpXCI+XG5cdFx0XHQ8L2d1aS1jaGVja2JveD5cblx0XHQ8L3NwYW4+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQm9vbGVhbkVkaXRUZW1wbGF0ZUNvbXBvbmVudCBleHRlbmRzIEVkaXRDb21tdW5pY2F0aW9uQ29tcG9uZW50PGJvb2xlYW4+IHtcblxuXHRAVmlld0NoaWxkKCdjaGVja2JveCcsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiB0cnVlIH0pXG5cdGNoZWNrYm94UmVmOiBFbGVtZW50UmVmO1xuXG5cdHJlYWRvbmx5IGZpbHRlckZpZWxkTmFtZSA9ICdib29sZWFuRWRpdCc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cdH1cblxuXHR0b2dnbGUoY2hhbmdlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMudmFsdWVDaGFuZ2VzLmVtaXQoY2hhbmdlZCk7XG5cdFx0dGhpcy5zdWJtaXQoKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1ib29sZWFuLWVkaXQnO1xuXHR9XG5cbn1cbiJdfQ==