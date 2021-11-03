import { ChangeDetectionStrategy, Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../../common/cdk/component/smart-component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../core/api/structure.command-invoker";
import * as i2 from "../config/structure.column-menu-config.archive";
import * as i3 from "../structure.column-config.service";
import * as i4 from "@angular/common";
import * as i5 from "../icon/structure.column-menu-icon.component";
const _c0 = ["headerDialogContainer"];
const _c1 = ["gui-structure-column-config-trigger", ""];
function StructureColumnConfigTriggerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1, 2);
    i0.ɵɵlistener("click", function StructureColumnConfigTriggerComponent_div_0_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.openConfigDialog(); });
    i0.ɵɵelement(2, "div", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", "gui-header-menu-icon");
} }
export class StructureColumnConfigTriggerComponent extends SmartComponent {
    constructor(elementRef, changeDetectorRef, structureCommandService, structureColumnMenuConfigArchive, structureColumnConfigService) {
        super(changeDetectorRef, elementRef);
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.structureCommandService = structureCommandService;
        this.structureColumnMenuConfigArchive = structureColumnMenuConfigArchive;
        this.structureColumnConfigService = structureColumnConfigService;
    }
    ngOnInit() {
        this.hermesSubscribe(this.structureColumnMenuConfigArchive.on(), (config) => {
            this.config = config;
        });
    }
    openConfigDialog() {
        this.structureColumnConfigService.open(this.headerDialogContainer, this.column);
    }
    closeConfigDialog() {
        this.structureColumnConfigService.close();
    }
    isEnabled() {
        return this.config && this.config.isEnabled();
    }
    getSelectorName() {
        return 'gui-structure-column-config-trigger';
    }
}
StructureColumnConfigTriggerComponent.ɵfac = function StructureColumnConfigTriggerComponent_Factory(t) { return new (t || StructureColumnConfigTriggerComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.StructureCommandInvoker), i0.ɵɵdirectiveInject(i2.StructureColumnMenuConfigArchive), i0.ɵɵdirectiveInject(i3.StructureColumnConfigService)); };
StructureColumnConfigTriggerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StructureColumnConfigTriggerComponent, selectors: [["div", "gui-structure-column-config-trigger", ""]], viewQuery: function StructureColumnConfigTriggerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.headerDialogContainer = _t.first);
    } }, inputs: { column: "column" }, features: [i0.ɵɵInheritDefinitionFeature], attrs: _c1, decls: 1, vars: 1, consts: [["class", "gui-header-menu-icon-wrapper", 3, "click", 4, "ngIf"], [1, "gui-header-menu-icon-wrapper", 3, "click"], ["headerDialogContainer", ""], ["gui-structure-column-menu-icon", "", 3, "ngClass"]], template: function StructureColumnConfigTriggerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, StructureColumnConfigTriggerComponent_div_0_Template, 3, 1, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.isEnabled());
    } }, directives: [i4.NgIf, i5.StructureColumnMenuIconComponent, i4.NgClass], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureColumnConfigTriggerComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-structure-column-config-trigger]',
                templateUrl: './structure.column-config-trigger.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i1.StructureCommandInvoker }, { type: i2.StructureColumnMenuConfigArchive }, { type: i3.StructureColumnConfigService }]; }, { headerDialogContainer: [{
            type: ViewChild,
            args: ['headerDialogContainer', { static: false }]
        }], column: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctdHJpZ2dlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvaGVhZGVyL21lbnUvdHJpZ2dlci9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy10cmlnZ2VyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvc3RydWN0dXJlL2dyaWQvZmVhdHVyZS9oZWFkZXIvbWVudS90cmlnZ2VyL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLXRyaWdnZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQWMsS0FBSyxFQUFVLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU0vSSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0RBQXdELENBQUM7Ozs7Ozs7Ozs7O0lDTnhGLGlDQUd1QztJQUZyQyw0TUFBNEI7SUFJN0IseUJBQTZFO0lBRTlFLGlCQUFNOztJQUZBLGVBQWtDO0lBQWxDLGdEQUFrQzs7QURXeEMsTUFBTSxPQUFPLHFDQUFzQyxTQUFRLGNBQWM7SUFVeEUsWUFBNkIsVUFBc0IsRUFDL0IsaUJBQW9DLEVBQ3BDLHVCQUFnRCxFQUNoRCxnQ0FBa0UsRUFDbEUsNEJBQTBEO1FBQzdFLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUxULGVBQVUsR0FBVixVQUFVLENBQVk7UUFDL0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELHFDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBa0M7UUFDbEUsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtJQUU5RSxDQUFDO0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxlQUFlLENBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxFQUFFLEVBQUUsRUFDMUMsQ0FBQyxNQUFpQyxFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdEIsQ0FBQyxDQUNELENBQUM7SUFDSCxDQUFDO0lBRUQsZ0JBQWdCO1FBQ2YsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFRCxpQkFBaUI7UUFDaEIsSUFBSSxDQUFDLDRCQUE0QixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxxQ0FBcUMsQ0FBQztJQUM5QyxDQUFDOzswSEF6Q1cscUNBQXFDO3dGQUFyQyxxQ0FBcUM7Ozs7OztRQ2hCbEQsc0ZBT007O1FBTEgsc0NBQWlCOzt1RkRjUCxxQ0FBcUM7Y0FOakQsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSwwQ0FBMEM7Z0JBQ3BELFdBQVcsRUFBRSxrREFBa0Q7Z0JBQy9ELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs2TkFJQSxxQkFBcUI7a0JBRHBCLFNBQVM7bUJBQUMsdUJBQXVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBSXJELE1BQU07a0JBREwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vc3RydWN0dXJlLmNvbHVtbi1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL3N0cnVjdHVyZS5jb2x1bW4tbWVudS1jb25maWcnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmUgfSBmcm9tICcuLi9jb25maWcvc3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy5hcmNoaXZlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXN0cnVjdHVyZS1jb2x1bW4tY29uZmlnLXRyaWdnZXJdJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLXRyaWdnZXIuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdUcmlnZ2VyQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBWaWV3Q2hpbGQoJ2hlYWRlckRpYWxvZ0NvbnRhaW5lcicsIHsgc3RhdGljOiBmYWxzZSB9KVxuXHRoZWFkZXJEaWFsb2dDb250YWluZXI6IEVsZW1lbnRSZWY7XG5cblx0QElucHV0KClcblx0Y29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dDtcblxuXHRjb25maWc6IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2U6IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuc3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmUub24oKSxcblx0XHRcdChjb25maWc6IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcpID0+IHtcblx0XHRcdFx0dGhpcy5jb25maWcgPSBjb25maWc7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdG9wZW5Db25maWdEaWFsb2coKTogdm9pZCB7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlLm9wZW4odGhpcy5oZWFkZXJEaWFsb2dDb250YWluZXIsIHRoaXMuY29sdW1uKTtcblx0fVxuXG5cdGNsb3NlQ29uZmlnRGlhbG9nKCk6IHZvaWQge1xuXHRcdHRoaXMuc3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZS5jbG9zZSgpO1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5pc0VuYWJsZWQoKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zdHJ1Y3R1cmUtY29sdW1uLWNvbmZpZy10cmlnZ2VyJztcblx0fVxuXG59XG4iLCI8ZGl2ICNoZWFkZXJEaWFsb2dDb250YWluZXJcblx0IChjbGljayk9XCJvcGVuQ29uZmlnRGlhbG9nKClcIlxuXHQgKm5nSWY9XCJpc0VuYWJsZWQoKVwiXG5cdCBjbGFzcz1cImd1aS1oZWFkZXItbWVudS1pY29uLXdyYXBwZXJcIj5cblxuXHQ8ZGl2IFtuZ0NsYXNzXT1cIidndWktaGVhZGVyLW1lbnUtaWNvbidcIiBndWktc3RydWN0dXJlLWNvbHVtbi1tZW51LWljb24+PC9kaXY+XG5cbjwvZGl2PlxuIl19