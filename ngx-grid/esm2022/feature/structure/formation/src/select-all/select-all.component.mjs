import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RowSelectionMode } from '../../../../../core/structure/formation/src/api/row-selected/row-selection';
import { GuiComponent } from '../../../../common/component';
import { GuiState } from '../../../../gui-angular/state/gui.state';
import { hermesMap } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
import * as i1 from "../../../../gui-angular/state/gui.state";
import * as i2 from "../../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i3 from "../../../../../core/structure/formation/src/api/formation.publisher";
import * as i4 from "../../../../../core/structure/formation/src/api/formation.warehouse";
import * as i5 from "@angular/common";
import * as i6 from "../../../../gui-angular/template/let/gui.let.directive";
import * as i7 from "@generic-ui/fabric";
export class SelectAllComponent extends GuiComponent {
    state;
    structureId;
    formationCommandDispatcher;
    formationWarehouse;
    // @ts-ignore
    state$ = this.state.select();
    constructor(elementRef, 
    // @ts-ignore
    state, structureId, formationCommandDispatcher, formationWarehouse) {
        super(elementRef);
        this.state = state;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SelectAllComponent, deps: [{ token: i0.ElementRef }, { token: i1.GuiState }, { token: i2.StructureId }, { token: i3.FormationPublisher }, { token: i4.FormationWarehouse }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: SelectAllComponent, selector: "div[gui-select-all]", providers: [
            GuiState
        ], usesInheritance: true, ngImport: i0, template: "<ng-container *guiLet=\"state$; let localState\">\n\t<gui-checkbox (changed)=\"toggleSelectAll(localState.isAllIndeterminate, localState.isAllChecked)\"\n\t\t\t\t  *ngIf=\"localState.modeMulti\"\n\t\t\t\t  [checked]=\"localState.isAllChecked\"\n\t\t\t\t  [gui-tooltip]=\"'Select'\"\n\t\t\t\t  [indeterminate]=\"localState.isAllIndeterminate\">\n\t</gui-checkbox>\n</ng-container>\n", dependencies: [{ kind: "directive", type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i6.GuiLetDirective, selector: "[guiLet]", inputs: ["guiLet"] }, { kind: "component", type: i7.FabricCheckboxComponent, selector: "gui-checkbox", inputs: ["name", "checked", "disabled", "readonly", "indeterminate"], outputs: ["changed"] }, { kind: "directive", type: i7.FabricTooltipDirective, selector: "[gui-tooltip]", inputs: ["gui-tooltip"], exportAs: ["guiTooltip"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SelectAllComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-select-all]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [
                        GuiState
                    ], template: "<ng-container *guiLet=\"state$; let localState\">\n\t<gui-checkbox (changed)=\"toggleSelectAll(localState.isAllIndeterminate, localState.isAllChecked)\"\n\t\t\t\t  *ngIf=\"localState.modeMulti\"\n\t\t\t\t  [checked]=\"localState.isAllChecked\"\n\t\t\t\t  [gui-tooltip]=\"'Select'\"\n\t\t\t\t  [indeterminate]=\"localState.isAllIndeterminate\">\n\t</gui-checkbox>\n</ng-container>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.GuiState }, { type: i2.StructureId }, { type: i3.FormationPublisher }, { type: i4.FormationWarehouse }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWFsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvc2VsZWN0LWFsbC9zZWxlY3QtYWxsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9zZWxlY3QtYWxsL3NlbGVjdC1hbGwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBYyxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU1sRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0RUFBNEUsQ0FBQztBQUM5RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxTQUFTLEVBQW9CLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7OztBQXFCakUsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFlBQVk7SUFPL0I7SUFDQTtJQUNBO0lBQ0E7SUFScEIsYUFBYTtJQUNKLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBRXRDLFlBQVksVUFBc0I7SUFDL0IsYUFBYTtJQUNJLEtBQXdDLEVBQ3hDLFdBQXdCLEVBQ3hCLDBCQUE4QyxFQUM5QyxrQkFBc0M7UUFDekQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBSkMsVUFBSyxHQUFMLEtBQUssQ0FBbUM7UUFDeEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUFvQjtRQUM5Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBR3pELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1lBQ25CLFNBQVMsRUFBRSxLQUFLO1NBQ2hCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxlQUFlLENBQUMsa0JBQTJCLEVBQUUsWUFBcUI7UUFFakUsSUFBSSxrQkFBa0IsRUFBRTtZQUN2QixJQUFJLENBQUMsMEJBQTBCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM5RDthQUFNO1lBRU4sSUFBSSxZQUFZLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzlEO2lCQUFNO2dCQUNOLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzVEO1NBQ0Q7SUFDRixDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLGdCQUFnQixDQUFDO0lBQ3pCLENBQUM7SUFFTyxlQUFlO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQjthQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUN4QixJQUFJLENBQ0osU0FBUyxDQUFDLENBQUMsSUFBc0IsRUFBRSxFQUFFO1lBQ3BDLE9BQU8sSUFBSSxLQUFLLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQztJQUVPLGdCQUFnQjtRQUN2QixPQUFPLElBQUksQ0FBQyxrQkFBa0I7YUFDeEIsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUN4QyxJQUFJLENBQ0osU0FBUyxDQUFDLENBQUMsb0JBQTBDLEVBQUUsRUFBRTtZQUN4RCxPQUFPLG9CQUFvQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUNGLENBQUM7SUFDUixDQUFDO0lBRU8sc0JBQXNCO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQjthQUN4QixzQkFBc0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3hDLElBQUksQ0FDSixTQUFTLENBQUMsQ0FBQyxvQkFBMEMsRUFBRSxFQUFFO1lBQ3hELE9BQU8sb0JBQW9CLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7d0dBcEVXLGtCQUFrQjs0RkFBbEIsa0JBQWtCLDhDQUpuQjtZQUNWLFFBQVE7U0FDUixpREM1QkYsK1hBUUE7OzRGRHNCYSxrQkFBa0I7a0JBVDlCLFNBQVM7K0JBQ0MscUJBQXFCLG1CQUVkLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUksYUFDMUI7d0JBQ1YsUUFBUTtxQkFDUiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZvcm1hdGlvblB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvYXBpL2Zvcm1hdGlvbi5wdWJsaXNoZXInO1xuaW1wb3J0IHsgRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9hcGkvZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBSb3dTZWxlY3RlZFJlYWRNb2RlbCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvYXBpL3Jvdy1zZWxlY3RlZC9yb3ctc2VsZWN0ZWQucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25Nb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9hcGkvcm93LXNlbGVjdGVkL3Jvdy1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgR3VpQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBHdWlTdGF0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2d1aS1hbmd1bGFyL3N0YXRlL2d1aS5zdGF0ZSc7XG5pbXBvcnQgeyBoZXJtZXNNYXAsIEhlcm1lc09ic2VydmFibGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdEFsbENvbXBvbmVudFN0YXRlIHtcblxuXHRpc0FsbENoZWNrZWQ6IGJvb2xlYW47XG5cblx0aXNBbGxJbmRldGVybWluYXRlOiBib29sZWFuO1xuXG5cdG1vZGVNdWx0aTogYm9vbGVhbjtcblxufVxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXNlbGVjdC1hbGxdJyxcblx0dGVtcGxhdGVVcmw6ICcuL3NlbGVjdC1hbGwuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0R3VpU3RhdGVcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RBbGxDb21wb25lbnQgZXh0ZW5kcyBHdWlDb21wb25lbnQge1xuXG5cdC8vIEB0cy1pZ25vcmVcblx0cmVhZG9ubHkgc3RhdGUkID0gdGhpcy5zdGF0ZS5zZWxlY3QoKTtcblxuXHRjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RhdGU6IEd1aVN0YXRlPFNlbGVjdEFsbENvbXBvbmVudFN0YXRlPixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXI6IEZvcm1hdGlvblB1Ymxpc2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25XYXJlaG91c2U6IEZvcm1hdGlvbldhcmVob3VzZSkge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYpO1xuXG5cdFx0dGhpcy5zdGF0ZS5zZXRWYWx1ZSh7XG5cdFx0XHRtb2RlTXVsdGk6IGZhbHNlXG5cdFx0fSk7XG5cblx0XHR0aGlzLnN0YXRlLmNvbm5lY3QoJ21vZGVNdWx0aScsIHRoaXMuc2VsZWN0TW9kZU11bHRpKCkpO1xuXHRcdHRoaXMuc3RhdGUuY29ubmVjdCgnaXNBbGxDaGVja2VkJywgdGhpcy5zZWxlY3RBbGxDaGVja2VkKCkpO1xuXHRcdHRoaXMuc3RhdGUuY29ubmVjdCgnaXNBbGxJbmRldGVybWluYXRlJywgdGhpcy5zZWxlY3RBbGxJbmRldGVybWluYXRlKCkpO1xuXHR9XG5cblx0dG9nZ2xlU2VsZWN0QWxsKGlzQWxsSW5kZXRlcm1pbmF0ZTogYm9vbGVhbiwgaXNBbGxDaGVja2VkOiBib29sZWFuKTogdm9pZCB7XG5cblx0XHRpZiAoaXNBbGxJbmRldGVybWluYXRlKSB7XG5cdFx0XHR0aGlzLmZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyLnVuc2VsZWN0QWxsKHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGlmIChpc0FsbENoZWNrZWQpIHtcblx0XHRcdFx0dGhpcy5mb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlci51bnNlbGVjdEFsbCh0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXIuc2VsZWN0QWxsKHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zZWxlY3QtYWxsJztcblx0fVxuXG5cdHByaXZhdGUgc2VsZWN0TW9kZU11bHRpKCk6IEhlcm1lc09ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLmZvcm1hdGlvbldhcmVob3VzZVxuXHRcdFx0XHQgICAub25Nb2RlKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgobW9kZTogUm93U2VsZWN0aW9uTW9kZSkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIG1vZGUgPT09IFJvd1NlbGVjdGlvbk1vZGUuTVVMVElQTEU7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdHByaXZhdGUgc2VsZWN0QWxsQ2hlY2tlZCgpOiBIZXJtZXNPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5mb3JtYXRpb25XYXJlaG91c2Vcblx0XHRcdFx0ICAgLm9uUm93U2VsZWN0ZWRSZWFkTW9kZWwodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChyb3dTZWxlY3RlZFJlYWRNb2RlbDogUm93U2VsZWN0ZWRSZWFkTW9kZWwpID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiByb3dTZWxlY3RlZFJlYWRNb2RlbC5pc0FsbFNlbGVjdGVkKCk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdHByaXZhdGUgc2VsZWN0QWxsSW5kZXRlcm1pbmF0ZSgpOiBIZXJtZXNPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5mb3JtYXRpb25XYXJlaG91c2Vcblx0XHRcdFx0ICAgLm9uUm93U2VsZWN0ZWRSZWFkTW9kZWwodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChyb3dTZWxlY3RlZFJlYWRNb2RlbDogUm93U2VsZWN0ZWRSZWFkTW9kZWwpID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiByb3dTZWxlY3RlZFJlYWRNb2RlbC5pc0luZGV0ZXJtaW5hdGUoKTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiIsIjxuZy1jb250YWluZXIgKmd1aUxldD1cInN0YXRlJDsgbGV0IGxvY2FsU3RhdGVcIj5cblx0PGd1aS1jaGVja2JveCAoY2hhbmdlZCk9XCJ0b2dnbGVTZWxlY3RBbGwobG9jYWxTdGF0ZS5pc0FsbEluZGV0ZXJtaW5hdGUsIGxvY2FsU3RhdGUuaXNBbGxDaGVja2VkKVwiXG5cdFx0XHRcdCAgKm5nSWY9XCJsb2NhbFN0YXRlLm1vZGVNdWx0aVwiXG5cdFx0XHRcdCAgW2NoZWNrZWRdPVwibG9jYWxTdGF0ZS5pc0FsbENoZWNrZWRcIlxuXHRcdFx0XHQgIFtndWktdG9vbHRpcF09XCInU2VsZWN0J1wiXG5cdFx0XHRcdCAgW2luZGV0ZXJtaW5hdGVdPVwibG9jYWxTdGF0ZS5pc0FsbEluZGV0ZXJtaW5hdGVcIj5cblx0PC9ndWktY2hlY2tib3g+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==