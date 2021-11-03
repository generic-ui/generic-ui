import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { Gate } from '../../../../common/cdk/component/gate';
import { StructureId } from '../../../core/api/structure.id';
import { FormationEventRepository } from '../../core/api/formation/formation.event-repository';
import { FormationCommandInvoker } from '../../core/api/formation/formation.command-invoker';
import { RowSelectionTypeArchive } from '../../core/api/formation/type/row-selection-type.archive';
export class SelectionGate extends Gate {
    constructor(structureId, formationEventService, formationCommandDispatcher, rowSelectionTypeArchive) {
        super();
        this.structureId = structureId;
        this.formationEventService = formationEventService;
        this.formationCommandDispatcher = formationCommandDispatcher;
        this.rowSelectionTypeArchive = rowSelectionTypeArchive;
        this.itemsSelected = new EventEmitter();
        this.selectedRows = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (this.isDefined('rowSelection', changes)) {
            if (this.rowSelection.isEnabledDefined()) {
                this.formationCommandDispatcher.setSelection(this.rowSelection.isEnabled(), this.structureId);
            }
            if (this.rowSelection.isTypeDefined()) {
                this.rowSelectionTypeArchive.next(this.rowSelection.getType());
            }
            if (this.rowSelection.isModeDefined()) {
                this.formationCommandDispatcher.changeMode(this.rowSelection.getMode(), this.structureId);
            }
        }
    }
    ngOnInit() {
        this.formationEventService
            .onItemSelected(this.structureId)
            .pipe(this.hermesTakeUntil())
            .subscribe((items) => {
            this.itemsSelected.emit(items.map(i => i.getSource()));
            this.selectedRows.emit(items);
        });
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
}
SelectionGate.decorators = [
    { type: Directive }
];
SelectionGate.ctorParameters = () => [
    { type: StructureId },
    { type: FormationEventRepository },
    { type: FormationCommandInvoker },
    { type: RowSelectionTypeArchive }
];
SelectionGate.propDecorators = {
    rowSelection: [{ type: Input }],
    itemsSelected: [{ type: Output }],
    selectedRows: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLmdhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9zb3VyY2UvZmVhdHVyZS9nYXRlL3NlbGVjdGlvbi5nYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBZ0MsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJHLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFHN0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDL0YsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDN0YsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFJbkcsTUFBTSxPQUFnQixhQUFjLFNBQVEsSUFBSTtJQVcvQyxZQUF5QyxXQUF3QixFQUN2QyxxQkFBK0MsRUFDL0MsMEJBQW1ELEVBQ25ELHVCQUFnRDtRQUN6RSxLQUFLLEVBQUUsQ0FBQztRQUpnQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN2QywwQkFBcUIsR0FBckIscUJBQXFCLENBQTBCO1FBQy9DLCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBeUI7UUFDbkQsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQVIxRSxrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3RELGlCQUFZLEdBQXFDLElBQUksWUFBWSxFQUFFLENBQUM7SUFPcEUsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFpQztRQUU1QyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQzVDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFO2dCQUN6QyxJQUFJLENBQUMsMEJBQTBCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzlGO1lBRUQsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxFQUFFO2dCQUN0QyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQzthQUMvRDtZQUVELElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsRUFBRTtnQkFDdEMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUMxRjtTQUNEO0lBQ0YsQ0FBQztJQUVELFFBQVE7UUFFUCxJQUFJLENBQUMscUJBQXFCO2FBQ3hCLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDNUIsU0FBUyxDQUFDLENBQUMsS0FBeUIsRUFBRSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVixLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7O1lBakRELFNBQVM7OztZQVJELFdBQVc7WUFHWCx3QkFBd0I7WUFDeEIsdUJBQXVCO1lBQ3ZCLHVCQUF1Qjs7OzJCQU05QixLQUFLOzRCQUdMLE1BQU07MkJBR04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9nYXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFJvd1NlbGVjdGlvbiB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3Jvdy1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3cgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9mb3JtYXRpb24vc2VsZWN0ZWQtcm93JztcbmltcG9ydCB7IEZvcm1hdGlvbkV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24uZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBGb3JtYXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFJvd1NlbGVjdGlvblR5cGVBcmNoaXZlIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvZm9ybWF0aW9uL3R5cGUvcm93LXNlbGVjdGlvbi10eXBlLmFyY2hpdmUnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvbmctY2hhbmdlcyc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNlbGVjdGlvbkdhdGUgZXh0ZW5kcyBHYXRlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG5cblx0QElucHV0KClcblx0cm93U2VsZWN0aW9uOiBSb3dTZWxlY3Rpb247XG5cblx0QE91dHB1dCgpXG5cdGl0ZW1zU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRzZWxlY3RlZFJvd3M6IEV2ZW50RW1pdHRlcjxBcnJheTxTZWxlY3RlZFJvdz4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRcdFx0ICBwcm90ZWN0ZWQgcmVhZG9ubHkgZm9ybWF0aW9uRXZlbnRTZXJ2aWNlOiBGb3JtYXRpb25FdmVudFJlcG9zaXRvcnksXG5cdFx0XHRcdFx0XHQgIHByb3RlY3RlZCByZWFkb25seSBmb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcjogRm9ybWF0aW9uQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdFx0XHQgIHByb3RlY3RlZCByZWFkb25seSByb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZTogUm93U2VsZWN0aW9uVHlwZUFyY2hpdmUpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFNlbGVjdGlvbkdhdGU+KSB7XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ3Jvd1NlbGVjdGlvbicsIGNoYW5nZXMpKSB7XG5cdFx0XHRpZiAodGhpcy5yb3dTZWxlY3Rpb24uaXNFbmFibGVkRGVmaW5lZCgpKSB7XG5cdFx0XHRcdHRoaXMuZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXIuc2V0U2VsZWN0aW9uKHRoaXMucm93U2VsZWN0aW9uLmlzRW5hYmxlZCgpLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMucm93U2VsZWN0aW9uLmlzVHlwZURlZmluZWQoKSkge1xuXHRcdFx0XHR0aGlzLnJvd1NlbGVjdGlvblR5cGVBcmNoaXZlLm5leHQodGhpcy5yb3dTZWxlY3Rpb24uZ2V0VHlwZSgpKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMucm93U2VsZWN0aW9uLmlzTW9kZURlZmluZWQoKSkge1xuXHRcdFx0XHR0aGlzLmZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyLmNoYW5nZU1vZGUodGhpcy5yb3dTZWxlY3Rpb24uZ2V0TW9kZSgpLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuZm9ybWF0aW9uRXZlbnRTZXJ2aWNlXG5cdFx0XHQub25JdGVtU2VsZWN0ZWQodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKHRoaXMuaGVybWVzVGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChpdGVtczogQXJyYXk8U2VsZWN0ZWRSb3c+KSA9PiB7XG5cdFx0XHRcdHRoaXMuaXRlbXNTZWxlY3RlZC5lbWl0KGl0ZW1zLm1hcChpID0+IGkuZ2V0U291cmNlKCkpKTtcblx0XHRcdFx0dGhpcy5zZWxlY3RlZFJvd3MuZW1pdChpdGVtcyk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHN1cGVyLm5nT25EZXN0cm95KCk7XG5cdH1cblxufVxuIl19