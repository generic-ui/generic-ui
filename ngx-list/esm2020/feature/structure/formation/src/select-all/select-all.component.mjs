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
    constructor(elementRef, state, structureId, formationCommandDispatcher, formationWarehouse) {
        super(elementRef);
        this.state = state;
        this.structureId = structureId;
        this.formationCommandDispatcher = formationCommandDispatcher;
        this.formationWarehouse = formationWarehouse;
        this.state$ = this.state.select();
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
}
SelectAllComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: SelectAllComponent, deps: [{ token: i0.ElementRef }, { token: i1.GuiState }, { token: i2.StructureId }, { token: i3.FormationPublisher }, { token: i4.FormationWarehouse }], target: i0.ɵɵFactoryTarget.Component });
SelectAllComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: SelectAllComponent, selector: "div[gui-select-all]", providers: [
        GuiState
    ], usesInheritance: true, ngImport: i0, template: "<ng-container *guiLet=\"state$; let localState\">\n\t<gui-checkbox (changed)=\"toggleSelectAll(localState.isAllIndeterminate, localState.isAllChecked)\"\n\t\t\t\t  *ngIf=\"localState.modeMulti\"\n\t\t\t\t  [checked]=\"localState.isAllChecked\"\n\t\t\t\t  [gui-tooltip]=\"'Select'\"\n\t\t\t\t  [indeterminate]=\"localState.isAllIndeterminate\">\n\t</gui-checkbox>\n</ng-container>\n", dependencies: [{ kind: "directive", type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i6.GuiLetDirective, selector: "[guiLet]", inputs: ["guiLet"] }, { kind: "component", type: i7.FabricCheckboxComponent, selector: "gui-checkbox", inputs: ["name", "checked", "disabled", "readonly", "indeterminate"], outputs: ["changed"] }, { kind: "directive", type: i7.FabricTooltipDirective, selector: "[gui-tooltip]", inputs: ["gui-tooltip"], exportAs: ["guiTooltip"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: SelectAllComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-select-all]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [
                        GuiState
                    ], template: "<ng-container *guiLet=\"state$; let localState\">\n\t<gui-checkbox (changed)=\"toggleSelectAll(localState.isAllIndeterminate, localState.isAllChecked)\"\n\t\t\t\t  *ngIf=\"localState.modeMulti\"\n\t\t\t\t  [checked]=\"localState.isAllChecked\"\n\t\t\t\t  [gui-tooltip]=\"'Select'\"\n\t\t\t\t  [indeterminate]=\"localState.isAllIndeterminate\">\n\t</gui-checkbox>\n</ng-container>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.GuiState }, { type: i2.StructureId }, { type: i3.FormationPublisher }, { type: i4.FormationWarehouse }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWFsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvc2VsZWN0LWFsbC9zZWxlY3QtYWxsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9zZWxlY3QtYWxsL3NlbGVjdC1hbGwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBYyxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU1sRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0RUFBNEUsQ0FBQztBQUM5RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxTQUFTLEVBQW9CLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7OztBQXFCakUsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFlBQVk7SUFJbkQsWUFBWSxVQUFzQixFQUNkLEtBQXdDLEVBQ3hDLFdBQXdCLEVBQ3hCLDBCQUE4QyxFQUM5QyxrQkFBc0M7UUFDekQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBSkMsVUFBSyxHQUFMLEtBQUssQ0FBbUM7UUFDeEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUFvQjtRQUM5Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBTmpELFdBQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBU3JDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1lBQ25CLFNBQVMsRUFBRSxLQUFLO1NBQ2hCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxlQUFlLENBQUMsa0JBQTJCLEVBQUUsWUFBcUI7UUFFakUsSUFBSSxrQkFBa0IsRUFBRTtZQUN2QixJQUFJLENBQUMsMEJBQTBCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM5RDthQUFNO1lBRU4sSUFBSSxZQUFZLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzlEO2lCQUFNO2dCQUNOLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzVEO1NBQ0Q7SUFDRixDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLGdCQUFnQixDQUFDO0lBQ3pCLENBQUM7SUFFTyxlQUFlO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQjthQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUN4QixJQUFJLENBQ0osU0FBUyxDQUFDLENBQUMsSUFBc0IsRUFBRSxFQUFFO1lBQ3BDLE9BQU8sSUFBSSxLQUFLLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQztJQUVPLGdCQUFnQjtRQUN2QixPQUFPLElBQUksQ0FBQyxrQkFBa0I7YUFDeEIsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUN4QyxJQUFJLENBQ0osU0FBUyxDQUFDLENBQUMsb0JBQTBDLEVBQUUsRUFBRTtZQUN4RCxPQUFPLG9CQUFvQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUNGLENBQUM7SUFDUixDQUFDO0lBRU8sc0JBQXNCO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQjthQUN4QixzQkFBc0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3hDLElBQUksQ0FDSixTQUFTLENBQUMsQ0FBQyxvQkFBMEMsRUFBRSxFQUFFO1lBQ3hELE9BQU8sb0JBQW9CLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7O2dIQWxFVyxrQkFBa0I7b0dBQWxCLGtCQUFrQiw4Q0FKbkI7UUFDVixRQUFRO0tBQ1IsaURDNUJGLCtYQVFBOzRGRHNCYSxrQkFBa0I7a0JBVDlCLFNBQVM7K0JBQ0MscUJBQXFCLG1CQUVkLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUksYUFDMUI7d0JBQ1YsUUFBUTtxQkFDUiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZvcm1hdGlvblB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvYXBpL2Zvcm1hdGlvbi5wdWJsaXNoZXInO1xuaW1wb3J0IHsgRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9hcGkvZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBSb3dTZWxlY3RlZFJlYWRNb2RlbCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvYXBpL3Jvdy1zZWxlY3RlZC9yb3ctc2VsZWN0ZWQucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25Nb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9hcGkvcm93LXNlbGVjdGVkL3Jvdy1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgR3VpQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBHdWlTdGF0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2d1aS1hbmd1bGFyL3N0YXRlL2d1aS5zdGF0ZSc7XG5pbXBvcnQgeyBoZXJtZXNNYXAsIEhlcm1lc09ic2VydmFibGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdEFsbENvbXBvbmVudFN0YXRlIHtcblxuXHRpc0FsbENoZWNrZWQ6IGJvb2xlYW47XG5cblx0aXNBbGxJbmRldGVybWluYXRlOiBib29sZWFuO1xuXG5cdG1vZGVNdWx0aTogYm9vbGVhbjtcblxufVxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXNlbGVjdC1hbGxdJyxcblx0dGVtcGxhdGVVcmw6ICcuL3NlbGVjdC1hbGwuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0R3VpU3RhdGVcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RBbGxDb21wb25lbnQgZXh0ZW5kcyBHdWlDb21wb25lbnQge1xuXG5cdHJlYWRvbmx5IHN0YXRlJCA9IHRoaXMuc3RhdGUuc2VsZWN0KCk7XG5cblx0Y29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdGF0ZTogR3VpU3RhdGU8U2VsZWN0QWxsQ29tcG9uZW50U3RhdGU+LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcjogRm9ybWF0aW9uUHVibGlzaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbldhcmVob3VzZTogRm9ybWF0aW9uV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZik7XG5cblx0XHR0aGlzLnN0YXRlLnNldFZhbHVlKHtcblx0XHRcdG1vZGVNdWx0aTogZmFsc2Vcblx0XHR9KTtcblxuXHRcdHRoaXMuc3RhdGUuY29ubmVjdCgnbW9kZU11bHRpJywgdGhpcy5zZWxlY3RNb2RlTXVsdGkoKSk7XG5cdFx0dGhpcy5zdGF0ZS5jb25uZWN0KCdpc0FsbENoZWNrZWQnLCB0aGlzLnNlbGVjdEFsbENoZWNrZWQoKSk7XG5cdFx0dGhpcy5zdGF0ZS5jb25uZWN0KCdpc0FsbEluZGV0ZXJtaW5hdGUnLCB0aGlzLnNlbGVjdEFsbEluZGV0ZXJtaW5hdGUoKSk7XG5cdH1cblxuXHR0b2dnbGVTZWxlY3RBbGwoaXNBbGxJbmRldGVybWluYXRlOiBib29sZWFuLCBpc0FsbENoZWNrZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblxuXHRcdGlmIChpc0FsbEluZGV0ZXJtaW5hdGUpIHtcblx0XHRcdHRoaXMuZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXIudW5zZWxlY3RBbGwodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0aWYgKGlzQWxsQ2hlY2tlZCkge1xuXHRcdFx0XHR0aGlzLmZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyLnVuc2VsZWN0QWxsKHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5mb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlci5zZWxlY3RBbGwodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXNlbGVjdC1hbGwnO1xuXHR9XG5cblx0cHJpdmF0ZSBzZWxlY3RNb2RlTXVsdGkoKTogSGVybWVzT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuZm9ybWF0aW9uV2FyZWhvdXNlXG5cdFx0XHRcdCAgIC5vbk1vZGUodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChtb2RlOiBSb3dTZWxlY3Rpb25Nb2RlKSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gbW9kZSA9PT0gUm93U2VsZWN0aW9uTW9kZS5NVUxUSVBMRTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0cHJpdmF0ZSBzZWxlY3RBbGxDaGVja2VkKCk6IEhlcm1lc09ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLmZvcm1hdGlvbldhcmVob3VzZVxuXHRcdFx0XHQgICAub25Sb3dTZWxlY3RlZFJlYWRNb2RlbCh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKHJvd1NlbGVjdGVkUmVhZE1vZGVsOiBSb3dTZWxlY3RlZFJlYWRNb2RlbCkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHJvd1NlbGVjdGVkUmVhZE1vZGVsLmlzQWxsU2VsZWN0ZWQoKTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0cHJpdmF0ZSBzZWxlY3RBbGxJbmRldGVybWluYXRlKCk6IEhlcm1lc09ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLmZvcm1hdGlvbldhcmVob3VzZVxuXHRcdFx0XHQgICAub25Sb3dTZWxlY3RlZFJlYWRNb2RlbCh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKHJvd1NlbGVjdGVkUmVhZE1vZGVsOiBSb3dTZWxlY3RlZFJlYWRNb2RlbCkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHJvd1NlbGVjdGVkUmVhZE1vZGVsLmlzSW5kZXRlcm1pbmF0ZSgpO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxufVxuIiwiPG5nLWNvbnRhaW5lciAqZ3VpTGV0PVwic3RhdGUkOyBsZXQgbG9jYWxTdGF0ZVwiPlxuXHQ8Z3VpLWNoZWNrYm94IChjaGFuZ2VkKT1cInRvZ2dsZVNlbGVjdEFsbChsb2NhbFN0YXRlLmlzQWxsSW5kZXRlcm1pbmF0ZSwgbG9jYWxTdGF0ZS5pc0FsbENoZWNrZWQpXCJcblx0XHRcdFx0ICAqbmdJZj1cImxvY2FsU3RhdGUubW9kZU11bHRpXCJcblx0XHRcdFx0ICBbY2hlY2tlZF09XCJsb2NhbFN0YXRlLmlzQWxsQ2hlY2tlZFwiXG5cdFx0XHRcdCAgW2d1aS10b29sdGlwXT1cIidTZWxlY3QnXCJcblx0XHRcdFx0ICBbaW5kZXRlcm1pbmF0ZV09XCJsb2NhbFN0YXRlLmlzQWxsSW5kZXRlcm1pbmF0ZVwiPlxuXHQ8L2d1aS1jaGVja2JveD5cbjwvbmctY29udGFpbmVyPlxuIl19