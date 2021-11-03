import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../../common/cdk/component/smart-component';
import { RowSelectionMode } from '../../../../../source/core/api/row-selection';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../core/api/structure.id";
import * as i2 from "../../../../../source/core/api/formation/mode/row-selection-mode.repository";
import * as i3 from "../../../../../source/core/api/formation/formation.command-invoker";
import * as i4 from "../../../../../source/core/api/formation/formation.warehouse";
import * as i5 from "@angular/common";
import * as i6 from "@generic-ui/fabric";
const _c0 = ["gui-select-all", ""];
function SelectAllComponent_gui_checkbox_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "gui-checkbox", 1);
    i0.ɵɵlistener("changed", function SelectAllComponent_gui_checkbox_0_Template_gui_checkbox_changed_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.toggleSelectAll(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("checked", ctx_r0.selectAllChecked)("gui-tooltip", "Select")("indeterminate", ctx_r0.selectAllIndeterminate);
} }
export class SelectAllComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, structureId, rowSelectionModeRepository, formationCommandDispatcher, formationWarehouse) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.rowSelectionModeRepository = rowSelectionModeRepository;
        this.formationCommandDispatcher = formationCommandDispatcher;
        this.formationWarehouse = formationWarehouse;
        this.modeMulti = false;
    }
    ngOnInit() {
        this.hermesSubscribe(this.formationWarehouse.onMode(this.structureId), (mode) => {
            this.modeMulti = mode === RowSelectionMode.MULTIPLE;
        });
        this.hermesSubscribe(this.formationWarehouse.onRowSelectedReadModel(this.structureId), (rowSelectedReadModel) => {
            this.selectAllChecked = rowSelectedReadModel.isAllSelected();
            this.selectAllIndeterminate = rowSelectedReadModel.isIndeterminate();
        });
    }
    toggleSelectAll() {
        if (this.selectAllIndeterminate) {
            this.formationCommandDispatcher.unselectAll(this.structureId);
        }
        else {
            if (this.selectAllChecked) {
                this.formationCommandDispatcher.unselectAll(this.structureId);
            }
            else {
                this.formationCommandDispatcher.selectAll(this.structureId);
            }
        }
    }
    getSelectorName() {
        return 'gui-select-all';
    }
}
SelectAllComponent.ɵfac = function SelectAllComponent_Factory(t) { return new (t || SelectAllComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.StructureId), i0.ɵɵdirectiveInject(i2.RowSelectionModeRepository), i0.ɵɵdirectiveInject(i3.FormationCommandInvoker), i0.ɵɵdirectiveInject(i4.FormationWarehouse)); };
SelectAllComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SelectAllComponent, selectors: [["div", "gui-select-all", ""]], features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 1, vars: 1, consts: [[3, "checked", "gui-tooltip", "indeterminate", "changed", 4, "ngIf"], [3, "checked", "gui-tooltip", "indeterminate", "changed"]], template: function SelectAllComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, SelectAllComponent_gui_checkbox_0_Template, 1, 3, "gui-checkbox", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.modeMulti);
    } }, directives: [i5.NgIf, i6.FabricCheckboxComponent, i6.FabricTooltipDirective], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectAllComponent, [{
        type: Component,
        args: [{
                selector: 'div[gui-select-all]',
                templateUrl: './select-all.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.StructureId }, { type: i2.RowSelectionModeRepository }, { type: i3.FormationCommandInvoker }, { type: i4.FormationWarehouse }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWFsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvaGVhZGVyL2NvbHVtbi9zZWxlY3QtYWxsL3NlbGVjdC1hbGwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2hlYWRlci9jb2x1bW4vc2VsZWN0LWFsbC9zZWxlY3QtYWxsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFzQixpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUk3SCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFJeEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOENBQThDLENBQUM7Ozs7Ozs7Ozs7O0lDUmhGLHVDQUk4QztJQUpoQyw4TUFBNkI7SUFLM0MsaUJBQWU7OztJQUhWLGlEQUE0Qix5QkFBQSxnREFBQTs7QURjakMsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGNBQWM7SUFRckQsWUFBNkIsaUJBQW9DLEVBQzlELFVBQXNCLEVBQ0wsV0FBd0IsRUFDeEIsMEJBQXNELEVBQ3RELDBCQUFtRCxFQUNuRCxrQkFBc0M7UUFDekQsS0FBSyxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBTlQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUU3QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QiwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQTRCO1FBQ3RELCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBeUI7UUFDbkQsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQVAxRCxjQUFTLEdBQVksS0FBSyxDQUFDO0lBUzNCLENBQUM7SUFFRCxRQUFRO1FBRVAsSUFBSSxDQUFDLGVBQWUsQ0FDbkIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQ2hELENBQUMsSUFBc0IsRUFBRSxFQUFFO1lBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxLQUFLLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztRQUNyRCxDQUFDLENBQ0QsQ0FBQztRQUVGLElBQUksQ0FBQyxlQUFlLENBQ25CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQ2hFLENBQUMsb0JBQTBDLEVBQUUsRUFBRTtZQUM5QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsb0JBQW9CLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDN0QsSUFBSSxDQUFDLHNCQUFzQixHQUFHLG9CQUFvQixDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3RFLENBQUMsQ0FDRCxDQUFDO0lBQ0gsQ0FBQztJQUVELGVBQWU7UUFFZCxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQUNoQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM5RDthQUFNO1lBRU4sSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQzFCLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzlEO2lCQUFNO2dCQUNOLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzVEO1NBQ0Q7SUFDRixDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLGdCQUFnQixDQUFDO0lBQ3pCLENBQUM7O29GQW5EVyxrQkFBa0I7cUVBQWxCLGtCQUFrQjtRQ2hCL0IscUZBS2U7O1FBSlQsb0NBQWU7O3VGRGVSLGtCQUFrQjtjQU45QixTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsV0FBVyxFQUFFLDZCQUE2QjtnQkFDMUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRm9ybWF0aW9uQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFJvd1NlbGVjdGVkUmVhZE1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9yb3ctc2VsZWN0ZWQucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25Nb2RlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vbW9kZS9yb3ctc2VsZWN0aW9uLW1vZGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25Nb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL3Jvdy1zZWxlY3Rpb24nO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXNlbGVjdC1hbGxdJyxcblx0dGVtcGxhdGVVcmw6ICcuL3NlbGVjdC1hbGwuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RBbGxDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0c2VsZWN0QWxsQ2hlY2tlZDogYm9vbGVhbjtcblxuXHRzZWxlY3RBbGxJbmRldGVybWluYXRlOiBib29sZWFuO1xuXG5cdG1vZGVNdWx0aTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByb3dTZWxlY3Rpb25Nb2RlUmVwb3NpdG9yeTogUm93U2VsZWN0aW9uTW9kZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXI6IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbldhcmVob3VzZTogRm9ybWF0aW9uV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuZm9ybWF0aW9uV2FyZWhvdXNlLm9uTW9kZSh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChtb2RlOiBSb3dTZWxlY3Rpb25Nb2RlKSA9PiB7XG5cdFx0XHRcdHRoaXMubW9kZU11bHRpID0gbW9kZSA9PT0gUm93U2VsZWN0aW9uTW9kZS5NVUxUSVBMRTtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLmZvcm1hdGlvbldhcmVob3VzZS5vblJvd1NlbGVjdGVkUmVhZE1vZGVsKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KHJvd1NlbGVjdGVkUmVhZE1vZGVsOiBSb3dTZWxlY3RlZFJlYWRNb2RlbCkgPT4ge1xuXHRcdFx0XHR0aGlzLnNlbGVjdEFsbENoZWNrZWQgPSByb3dTZWxlY3RlZFJlYWRNb2RlbC5pc0FsbFNlbGVjdGVkKCk7XG5cdFx0XHRcdHRoaXMuc2VsZWN0QWxsSW5kZXRlcm1pbmF0ZSA9IHJvd1NlbGVjdGVkUmVhZE1vZGVsLmlzSW5kZXRlcm1pbmF0ZSgpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHR0b2dnbGVTZWxlY3RBbGwoKTogdm9pZCB7XG5cblx0XHRpZiAodGhpcy5zZWxlY3RBbGxJbmRldGVybWluYXRlKSB7XG5cdFx0XHR0aGlzLmZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyLnVuc2VsZWN0QWxsKHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGlmICh0aGlzLnNlbGVjdEFsbENoZWNrZWQpIHtcblx0XHRcdFx0dGhpcy5mb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlci51bnNlbGVjdEFsbCh0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXIuc2VsZWN0QWxsKHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zZWxlY3QtYWxsJztcblx0fVxuXG59XG4iLCI8Z3VpLWNoZWNrYm94IChjaGFuZ2VkKT1cInRvZ2dsZVNlbGVjdEFsbCgpXCJcblx0XHRcdCAgKm5nSWY9XCJtb2RlTXVsdGlcIlxuXHRcdFx0ICBbY2hlY2tlZF09XCJzZWxlY3RBbGxDaGVja2VkXCJcblx0XHRcdCAgW2d1aS10b29sdGlwXT1cIidTZWxlY3QnXCJcblx0XHRcdCAgW2luZGV0ZXJtaW5hdGVdPVwic2VsZWN0QWxsSW5kZXRlcm1pbmF0ZVwiPlxuPC9ndWktY2hlY2tib3g+XG4iXX0=