import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { StructureId } from '../../../../../core/api/structure.id';
import { FormationCommandInvoker } from '../../../../../formation/core/api/formation.command-invoker';
import { SmartComponent } from '../../../../../../common/cdk/component/smart-component';
import { FormationWarehouse } from '../../../../../formation/core/api/formation.warehouse';
import { RowSelectionModeArchive } from '../../../../../formation/core/api/mode/row-selection-mode.archive';
import { RowSelectionMode } from '../../../../../formation/core/api/row-selected/row-selection';
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
        this.subscribe(this.formationWarehouse.onMode(this.structureId), (mode) => {
            this.modeMulti = mode === RowSelectionMode.MULTIPLE;
        });
        this.subscribe(this.formationWarehouse.onRowSelectedReadModel(this.structureId), (rowSelectedReadModel) => {
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
SelectAllComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-select-all]',
                template: "<gui-checkbox (changed)=\"toggleSelectAll()\"\n\t\t\t  *ngIf=\"modeMulti\"\n\t\t\t  [checked]=\"selectAllChecked\"\n\t\t\t  [gui-tooltip]=\"'Select'\"\n\t\t\t  [indeterminate]=\"selectAllIndeterminate\">\n</gui-checkbox>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
SelectAllComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: StructureId },
    { type: RowSelectionModeArchive },
    { type: FormationCommandInvoker },
    { type: FormationWarehouse }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWFsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvaGVhZGVyL2NvbHVtbi9zZWxlY3QtYWxsL3NlbGVjdC1hbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDeEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFFM0YsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDNUcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFRaEcsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGNBQWM7SUFRckQsWUFBNkIsaUJBQW9DLEVBQzlELFVBQXNCLEVBQ0wsV0FBd0IsRUFDeEIsMEJBQW1ELEVBQ25ELDBCQUFtRCxFQUNuRCxrQkFBc0M7UUFDekQsS0FBSyxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBTlQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUU3QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QiwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQXlCO1FBQ25ELCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBeUI7UUFDbkQsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQVAxRCxjQUFTLEdBQVksS0FBSyxDQUFDO0lBUzNCLENBQUM7SUFFRCxRQUFRO1FBRVAsSUFBSSxDQUFDLFNBQVMsQ0FDYixJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFDaEQsQ0FBQyxJQUFzQixFQUFFLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEtBQUssZ0JBQWdCLENBQUMsUUFBUSxDQUFDO1FBQ3JELENBQUMsQ0FDRCxDQUFDO1FBRUYsSUFBSSxDQUFDLFNBQVMsQ0FDYixJQUFJLENBQUMsa0JBQWtCLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUNoRSxDQUFDLG9CQUEwQyxFQUFFLEVBQUU7WUFDOUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLG9CQUFvQixDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzdELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxvQkFBb0IsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN0RSxDQUFDLENBQ0QsQ0FBQztJQUNILENBQUM7SUFFRCxlQUFlO1FBRWQsSUFBSSxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDaEMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDOUQ7YUFBTTtZQUVOLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUMxQixJQUFJLENBQUMsMEJBQTBCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUM5RDtpQkFBTTtnQkFDTixJQUFJLENBQUMsMEJBQTBCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUM1RDtTQUNEO0lBQ0YsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxnQkFBZ0IsQ0FBQztJQUN6QixDQUFDOzs7WUF6REQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLDBPQUEwQztnQkFDMUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDOzs7WUFmaUMsaUJBQWlCO1lBQWEsVUFBVTtZQUVqRSxXQUFXO1lBS1gsdUJBQXVCO1lBSnZCLHVCQUF1QjtZQUV2QixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGb3JtYXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2Zvcm1hdGlvbi9jb3JlL2FwaS9mb3JtYXRpb24uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2Zvcm1hdGlvbi9jb3JlL2FwaS9mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFJvd1NlbGVjdGVkUmVhZE1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZm9ybWF0aW9uL2NvcmUvYXBpL3Jvdy1zZWxlY3RlZC9yb3ctc2VsZWN0ZWQucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25Nb2RlQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2Zvcm1hdGlvbi9jb3JlL2FwaS9tb2RlL3Jvdy1zZWxlY3Rpb24tbW9kZS5hcmNoaXZlJztcbmltcG9ydCB7IFJvd1NlbGVjdGlvbk1vZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9mb3JtYXRpb24vY29yZS9hcGkvcm93LXNlbGVjdGVkL3Jvdy1zZWxlY3Rpb24nO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXNlbGVjdC1hbGxdJyxcblx0dGVtcGxhdGVVcmw6ICcuL3NlbGVjdC1hbGwuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RBbGxDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0c2VsZWN0QWxsQ2hlY2tlZDogYm9vbGVhbjtcblxuXHRzZWxlY3RBbGxJbmRldGVybWluYXRlOiBib29sZWFuO1xuXG5cdG1vZGVNdWx0aTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByb3dTZWxlY3Rpb25Nb2RlUmVwb3NpdG9yeTogUm93U2VsZWN0aW9uTW9kZUFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXI6IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbldhcmVob3VzZTogRm9ybWF0aW9uV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLnN1YnNjcmliZShcblx0XHRcdHRoaXMuZm9ybWF0aW9uV2FyZWhvdXNlLm9uTW9kZSh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChtb2RlOiBSb3dTZWxlY3Rpb25Nb2RlKSA9PiB7XG5cdFx0XHRcdHRoaXMubW9kZU11bHRpID0gbW9kZSA9PT0gUm93U2VsZWN0aW9uTW9kZS5NVUxUSVBMRTtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5zdWJzY3JpYmUoXG5cdFx0XHR0aGlzLmZvcm1hdGlvbldhcmVob3VzZS5vblJvd1NlbGVjdGVkUmVhZE1vZGVsKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KHJvd1NlbGVjdGVkUmVhZE1vZGVsOiBSb3dTZWxlY3RlZFJlYWRNb2RlbCkgPT4ge1xuXHRcdFx0XHR0aGlzLnNlbGVjdEFsbENoZWNrZWQgPSByb3dTZWxlY3RlZFJlYWRNb2RlbC5pc0FsbFNlbGVjdGVkKCk7XG5cdFx0XHRcdHRoaXMuc2VsZWN0QWxsSW5kZXRlcm1pbmF0ZSA9IHJvd1NlbGVjdGVkUmVhZE1vZGVsLmlzSW5kZXRlcm1pbmF0ZSgpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHR0b2dnbGVTZWxlY3RBbGwoKTogdm9pZCB7XG5cblx0XHRpZiAodGhpcy5zZWxlY3RBbGxJbmRldGVybWluYXRlKSB7XG5cdFx0XHR0aGlzLmZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyLnVuc2VsZWN0QWxsKHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGlmICh0aGlzLnNlbGVjdEFsbENoZWNrZWQpIHtcblx0XHRcdFx0dGhpcy5mb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlci51bnNlbGVjdEFsbCh0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXIuc2VsZWN0QWxsKHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zZWxlY3QtYWxsJztcblx0fVxuXG59XG4iXX0=