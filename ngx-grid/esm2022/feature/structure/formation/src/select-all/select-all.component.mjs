import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { RowSelectionMode } from '../../../../../core/structure/formation/src/api/row-selected/row-selection';
import { GuiComponent } from '../../../../common/component';
import { GuiState } from '../../../../gui-angular/state/gui.state';
import { hermesMap } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i2 from "../../../../../core/structure/formation/src/api/formation.publisher";
import * as i3 from "../../../../../core/structure/formation/src/api/formation.warehouse";
import * as i4 from "@angular/common";
import * as i5 from "../../../../gui-angular/template/let/gui.let.directive";
import * as i6 from "@generic-ui/fabric";
export class SelectAllComponent extends GuiComponent {
    structureId;
    formationCommandDispatcher;
    formationWarehouse;
    state = inject((GuiState));
    state$ = this.state.select();
    constructor(elementRef, structureId, formationCommandDispatcher, formationWarehouse) {
        super(elementRef);
        this.structureId = structureId;
        this.formationCommandDispatcher = formationCommandDispatcher;
        this.formationWarehouse = formationWarehouse;
        this.state.setValue({
            modeMulti: false
        });
        this.state.connect('modeMulti', this.selectModeMulti());
        this.state.connect('isAllChecked', this.selectAllChecked());
        this.state.connect('isAllIndeterminate', this.selectAllIndeterminate());
    }
    toggleSelectAll(isAllIndeterminate, isAllChecked) {
        if (isAllIndeterminate) {
            this.formationCommandDispatcher.unselectAll(this.structureId);
        }
        else {
            if (isAllChecked) {
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
    selectModeMulti() {
        return this.formationWarehouse
            .onMode(this.structureId)
            .pipe(hermesMap((mode) => {
            return mode === RowSelectionMode.MULTIPLE;
        }));
    }
    selectAllChecked() {
        return this.formationWarehouse
            .onRowSelectedReadModel(this.structureId)
            .pipe(hermesMap((rowSelectedReadModel) => {
            return rowSelectedReadModel.isAllSelected();
        }));
    }
    selectAllIndeterminate() {
        return this.formationWarehouse
            .onRowSelectedReadModel(this.structureId)
            .pipe(hermesMap((rowSelectedReadModel) => {
            return rowSelectedReadModel.isIndeterminate();
        }));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: SelectAllComponent, deps: [{ token: i0.ElementRef }, { token: i1.StructureId }, { token: i2.FormationPublisher }, { token: i3.FormationWarehouse }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.2", type: SelectAllComponent, selector: "div[gui-select-all]", providers: [
            GuiState
        ], usesInheritance: true, ngImport: i0, template: "<ng-container *guiLet=\"state$; let localState\">\n\t<gui-checkbox (changed)=\"toggleSelectAll(localState.isAllIndeterminate, localState.isAllChecked)\"\n\t\t\t\t  *ngIf=\"localState.modeMulti\"\n\t\t\t\t  [checked]=\"localState.isAllChecked\"\n\t\t\t\t  [gui-tooltip]=\"'Select'\"\n\t\t\t\t  [indeterminate]=\"localState.isAllIndeterminate\">\n\t</gui-checkbox>\n</ng-container>\n", dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i5.GuiLetDirective, selector: "[guiLet]", inputs: ["guiLet"] }, { kind: "component", type: i6.FabricCheckboxComponent, selector: "gui-checkbox", inputs: ["name", "checked", "disabled", "readonly", "indeterminate"], outputs: ["changed"] }, { kind: "directive", type: i6.FabricTooltipDirective, selector: "[gui-tooltip]", inputs: ["gui-tooltip"], exportAs: ["guiTooltip"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: SelectAllComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-select-all]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [
                        GuiState
                    ], template: "<ng-container *guiLet=\"state$; let localState\">\n\t<gui-checkbox (changed)=\"toggleSelectAll(localState.isAllIndeterminate, localState.isAllChecked)\"\n\t\t\t\t  *ngIf=\"localState.modeMulti\"\n\t\t\t\t  [checked]=\"localState.isAllChecked\"\n\t\t\t\t  [gui-tooltip]=\"'Select'\"\n\t\t\t\t  [indeterminate]=\"localState.isAllIndeterminate\">\n\t</gui-checkbox>\n</ng-container>\n" }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i1.StructureId }, { type: i2.FormationPublisher }, { type: i3.FormationWarehouse }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWFsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvc2VsZWN0LWFsbC9zZWxlY3QtYWxsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9zZWxlY3QtYWxsL3NlbGVjdC1hbGwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBYyxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNMUcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFDOUcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzVELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsU0FBUyxFQUFvQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7OztBQXFCakUsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFlBQVk7SUFPL0I7SUFDQTtJQUNBO0lBUEgsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFBLFFBQWlDLENBQUEsQ0FBQyxDQUFDO0lBRTFELE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBRXRDLFlBQVksVUFBc0IsRUFDZCxXQUF3QixFQUN4QiwwQkFBOEMsRUFDOUMsa0JBQXNDO1FBQ3pELEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUhDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBb0I7UUFDOUMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUd6RCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUNuQixTQUFTLEVBQUUsS0FBSztTQUNoQixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQsZUFBZSxDQUFDLGtCQUEyQixFQUFFLFlBQXFCO1FBRWpFLElBQUksa0JBQWtCLEVBQUU7WUFDdkIsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDOUQ7YUFBTTtZQUVOLElBQUksWUFBWSxFQUFFO2dCQUNqQixJQUFJLENBQUMsMEJBQTBCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUM5RDtpQkFBTTtnQkFDTixJQUFJLENBQUMsMEJBQTBCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUM1RDtTQUNEO0lBQ0YsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxnQkFBZ0IsQ0FBQztJQUN6QixDQUFDO0lBRU8sZUFBZTtRQUN0QixPQUFPLElBQUksQ0FBQyxrQkFBa0I7YUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDeEIsSUFBSSxDQUNKLFNBQVMsQ0FBQyxDQUFDLElBQXNCLEVBQUUsRUFBRTtZQUNwQyxPQUFPLElBQUksS0FBSyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7SUFFTyxnQkFBZ0I7UUFDdkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCO2FBQ3hCLHNCQUFzQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDeEMsSUFBSSxDQUNKLFNBQVMsQ0FBQyxDQUFDLG9CQUEwQyxFQUFFLEVBQUU7WUFDeEQsT0FBTyxvQkFBb0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQztJQUVPLHNCQUFzQjtRQUM3QixPQUFPLElBQUksQ0FBQyxrQkFBa0I7YUFDeEIsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUN4QyxJQUFJLENBQ0osU0FBUyxDQUFDLENBQUMsb0JBQTBDLEVBQUUsRUFBRTtZQUN4RCxPQUFPLG9CQUFvQixDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUNGLENBQUM7SUFDUixDQUFDO3VHQW5FVyxrQkFBa0I7MkZBQWxCLGtCQUFrQiw4Q0FKbkI7WUFDVixRQUFRO1NBQ1IsaURDNUJGLCtYQVFBOzsyRkRzQmEsa0JBQWtCO2tCQVQ5QixTQUFTOytCQUNDLHFCQUFxQixtQkFFZCx1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJLGFBQzFCO3dCQUNWLFFBQVE7cUJBQ1IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBpbmplY3QsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZvcm1hdGlvblB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvYXBpL2Zvcm1hdGlvbi5wdWJsaXNoZXInO1xuaW1wb3J0IHsgRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9hcGkvZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBSb3dTZWxlY3RlZFJlYWRNb2RlbCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvYXBpL3Jvdy1zZWxlY3RlZC9yb3ctc2VsZWN0ZWQucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25Nb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9hcGkvcm93LXNlbGVjdGVkL3Jvdy1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgR3VpQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBHdWlTdGF0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2d1aS1hbmd1bGFyL3N0YXRlL2d1aS5zdGF0ZSc7XG5pbXBvcnQgeyBoZXJtZXNNYXAsIEhlcm1lc09ic2VydmFibGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdEFsbENvbXBvbmVudFN0YXRlIHtcblxuXHRpc0FsbENoZWNrZWQ6IGJvb2xlYW47XG5cblx0aXNBbGxJbmRldGVybWluYXRlOiBib29sZWFuO1xuXG5cdG1vZGVNdWx0aTogYm9vbGVhbjtcblxufVxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXNlbGVjdC1hbGxdJyxcblx0dGVtcGxhdGVVcmw6ICcuL3NlbGVjdC1hbGwuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0R3VpU3RhdGVcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RBbGxDb21wb25lbnQgZXh0ZW5kcyBHdWlDb21wb25lbnQge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3RhdGUgPSBpbmplY3QoR3VpU3RhdGU8U2VsZWN0QWxsQ29tcG9uZW50U3RhdGU+KTtcblxuXHRyZWFkb25seSBzdGF0ZSQgPSB0aGlzLnN0YXRlLnNlbGVjdCgpO1xuXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyOiBGb3JtYXRpb25QdWJsaXNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uV2FyZWhvdXNlOiBGb3JtYXRpb25XYXJlaG91c2UpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmKTtcblxuXHRcdHRoaXMuc3RhdGUuc2V0VmFsdWUoe1xuXHRcdFx0bW9kZU11bHRpOiBmYWxzZVxuXHRcdH0pO1xuXG5cdFx0dGhpcy5zdGF0ZS5jb25uZWN0KCdtb2RlTXVsdGknLCB0aGlzLnNlbGVjdE1vZGVNdWx0aSgpKTtcblx0XHR0aGlzLnN0YXRlLmNvbm5lY3QoJ2lzQWxsQ2hlY2tlZCcsIHRoaXMuc2VsZWN0QWxsQ2hlY2tlZCgpKTtcblx0XHR0aGlzLnN0YXRlLmNvbm5lY3QoJ2lzQWxsSW5kZXRlcm1pbmF0ZScsIHRoaXMuc2VsZWN0QWxsSW5kZXRlcm1pbmF0ZSgpKTtcblx0fVxuXG5cdHRvZ2dsZVNlbGVjdEFsbChpc0FsbEluZGV0ZXJtaW5hdGU6IGJvb2xlYW4sIGlzQWxsQ2hlY2tlZDogYm9vbGVhbik6IHZvaWQge1xuXG5cdFx0aWYgKGlzQWxsSW5kZXRlcm1pbmF0ZSkge1xuXHRcdFx0dGhpcy5mb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlci51bnNlbGVjdEFsbCh0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRpZiAoaXNBbGxDaGVja2VkKSB7XG5cdFx0XHRcdHRoaXMuZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXIudW5zZWxlY3RBbGwodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyLnNlbGVjdEFsbCh0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc2VsZWN0LWFsbCc7XG5cdH1cblxuXHRwcml2YXRlIHNlbGVjdE1vZGVNdWx0aSgpOiBIZXJtZXNPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5mb3JtYXRpb25XYXJlaG91c2Vcblx0XHRcdFx0ICAgLm9uTW9kZSh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKG1vZGU6IFJvd1NlbGVjdGlvbk1vZGUpID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBtb2RlID09PSBSb3dTZWxlY3Rpb25Nb2RlLk1VTFRJUExFO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRwcml2YXRlIHNlbGVjdEFsbENoZWNrZWQoKTogSGVybWVzT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuZm9ybWF0aW9uV2FyZWhvdXNlXG5cdFx0XHRcdCAgIC5vblJvd1NlbGVjdGVkUmVhZE1vZGVsKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgocm93U2VsZWN0ZWRSZWFkTW9kZWw6IFJvd1NlbGVjdGVkUmVhZE1vZGVsKSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gcm93U2VsZWN0ZWRSZWFkTW9kZWwuaXNBbGxTZWxlY3RlZCgpO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRwcml2YXRlIHNlbGVjdEFsbEluZGV0ZXJtaW5hdGUoKTogSGVybWVzT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuZm9ybWF0aW9uV2FyZWhvdXNlXG5cdFx0XHRcdCAgIC5vblJvd1NlbGVjdGVkUmVhZE1vZGVsKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgocm93U2VsZWN0ZWRSZWFkTW9kZWw6IFJvd1NlbGVjdGVkUmVhZE1vZGVsKSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gcm93U2VsZWN0ZWRSZWFkTW9kZWwuaXNJbmRldGVybWluYXRlKCk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iLCI8bmctY29udGFpbmVyICpndWlMZXQ9XCJzdGF0ZSQ7IGxldCBsb2NhbFN0YXRlXCI+XG5cdDxndWktY2hlY2tib3ggKGNoYW5nZWQpPVwidG9nZ2xlU2VsZWN0QWxsKGxvY2FsU3RhdGUuaXNBbGxJbmRldGVybWluYXRlLCBsb2NhbFN0YXRlLmlzQWxsQ2hlY2tlZClcIlxuXHRcdFx0XHQgICpuZ0lmPVwibG9jYWxTdGF0ZS5tb2RlTXVsdGlcIlxuXHRcdFx0XHQgIFtjaGVja2VkXT1cImxvY2FsU3RhdGUuaXNBbGxDaGVja2VkXCJcblx0XHRcdFx0ICBbZ3VpLXRvb2x0aXBdPVwiJ1NlbGVjdCdcIlxuXHRcdFx0XHQgIFtpbmRldGVybWluYXRlXT1cImxvY2FsU3RhdGUuaXNBbGxJbmRldGVybWluYXRlXCI+XG5cdDwvZ3VpLWNoZWNrYm94PlxuPC9uZy1jb250YWluZXI+XG4iXX0=