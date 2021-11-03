import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { EditCommunicationComponent } from '../edit-communication.component';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/fabric";
const _c0 = ["checkbox"];
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
BooleanEditTemplateComponent.ɵfac = function BooleanEditTemplateComponent_Factory(t) { return new (t || BooleanEditTemplateComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef)); };
BooleanEditTemplateComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BooleanEditTemplateComponent, selectors: [["gui-boolean-edit"]], viewQuery: function BooleanEditTemplateComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7, ElementRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.checkboxRef = _t.first);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 2, consts: [[1, "gui-cell-boolean"], [3, "checked", "name", "changed"], ["checkbox", ""]], template: function BooleanEditTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵelementStart(1, "gui-checkbox", 1, 2);
        i0.ɵɵlistener("changed", function BooleanEditTemplateComponent_Template_gui_checkbox_changed_1_listener($event) { return ctx.toggle($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("checked", ctx.value)("name", ctx.filterFieldName);
    } }, directives: [i1.FabricCheckboxComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BooleanEditTemplateComponent, [{
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
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; }, { checkboxRef: [{
            type: ViewChild,
            args: ['checkbox', { read: ElementRef, static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9lZGl0L3RlbXBsYXRlL2Jvb2xlYW4tZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVoSSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7OztBQW1CN0UsTUFBTSxPQUFPLDRCQUE2QixTQUFRLDBCQUFtQztJQU9wRixZQUE2QixpQkFBb0MsRUFDOUQsVUFBc0I7UUFDeEIsS0FBSyxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRlQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUZ4RCxvQkFBZSxHQUFHLGFBQWEsQ0FBQztJQUt6QyxDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQWdCO1FBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sa0JBQWtCLENBQUM7SUFDM0IsQ0FBQzs7d0dBbkJXLDRCQUE0QjsrRUFBNUIsNEJBQTRCOytCQUVULFVBQVU7Ozs7O1FBZHhDLCtCQUErQjtRQUM5QiwwQ0FHZ0M7UUFBM0IseUhBQVcsa0JBQWMsSUFBQztRQUMvQixpQkFBZTtRQUNoQixpQkFBTzs7UUFKRCxlQUFpQjtRQUFqQixtQ0FBaUIsNkJBQUE7O3VGQVVaLDRCQUE0QjtjQWhCeEMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7OztFQVVUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs2RkFJQSxXQUFXO2tCQURWLFNBQVM7bUJBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRWRpdENvbW11bmljYXRpb25Db21wb25lbnQgfSBmcm9tICcuLi9lZGl0LWNvbW11bmljYXRpb24uY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktYm9vbGVhbi1lZGl0Jyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxzcGFuIGNsYXNzPVwiZ3VpLWNlbGwtYm9vbGVhblwiPlxuXHRcdFx0PGd1aS1jaGVja2JveCAjY2hlY2tib3hcblx0XHRcdFx0XHRcdCAgW2NoZWNrZWRdPVwidmFsdWVcIlxuXHRcdFx0XHRcdFx0ICBbbmFtZV09XCJmaWx0ZXJGaWVsZE5hbWVcIlxuXHRcdFx0XHRcdFx0ICAoY2hhbmdlZCk9XCJ0b2dnbGUoJGV2ZW50KVwiPlxuXHRcdFx0PC9ndWktY2hlY2tib3g+XG5cdFx0PC9zcGFuPlxuXG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEJvb2xlYW5FZGl0VGVtcGxhdGVDb21wb25lbnQgZXh0ZW5kcyBFZGl0Q29tbXVuaWNhdGlvbkNvbXBvbmVudDxib29sZWFuPiB7XG5cblx0QFZpZXdDaGlsZCgnY2hlY2tib3gnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuXHRjaGVja2JveFJlZjogRWxlbWVudFJlZjtcblxuXHRyZWFkb25seSBmaWx0ZXJGaWVsZE5hbWUgPSAnYm9vbGVhbkVkaXQnO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0dG9nZ2xlKGNoYW5nZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLnZhbHVlQ2hhbmdlcy5lbWl0KGNoYW5nZWQpO1xuXHRcdHRoaXMuc3VibWl0KCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktYm9vbGVhbi1lZGl0Jztcblx0fVxuXG59XG4iXX0=