import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { Gate } from '../../../../common/component/src/gate';
import { hermesMap } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i2 from "../../../../../core/structure/formation/src/api/formation.event-repository";
import * as i3 from "../../../../../core/structure/formation/src/api/formation.publisher";
export class SelectionGate extends Gate {
    constructor(structureId, formationEventRepository, formationPublisher) {
        super();
        this.structureId = structureId;
        this.formationEventRepository = formationEventRepository;
        this.formationPublisher = formationPublisher;
        this.itemsSelected = new EventEmitter();
        this.selectedRows = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (this.isDefined('rowSelection', changes)) {
            if (this.rowSelection.isEnabledDefined()) {
                this.formationPublisher.setSelection(this.rowSelection.isEnabled(), this.structureId);
            }
            if (this.rowSelection.isTypeDefined()) {
                this.formationPublisher.changeType(this.rowSelection.getType(), this.structureId);
            }
            if (this.rowSelection.isModeDefined()) {
                this.formationPublisher.changeMode(this.rowSelection.getMode(), this.structureId);
            }
            if (this.rowSelection.isMatcherDefined()) {
                this.formationPublisher.setMatcher(this.rowSelection.getMatcher(), this.structureId);
            }
            if (this.rowSelection.isSelectedRowIndexesDefined()) {
                this.formationPublisher.selectByIndex(this.rowSelection.getSelectedRowIndexes(), this.structureId);
            }
            if (this.rowSelection.isSelectedRowIdsDefined()) {
                this.formationPublisher.selectByIds(this.rowSelection.getSelectedRowIds(), this.structureId);
            }
            if (this.rowSelection.isCustomSelectConfig()) {
                this.formationPublisher.setCustomSelection(this.rowSelection.getCustomSelectConfig(), this.structureId);
            }
        }
    }
    ngOnInit() {
        this.subscribeAndEmit(this.formationEventRepository.onItemSelected(this.structureId), this.selectedRows);
        this.subscribeAndEmit(this.selectItemsSelected(), this.itemsSelected);
    }
    selectItemsSelected() {
        return this.formationEventRepository
            .onItemSelected(this.structureId)
            .pipe(hermesMap((items) => {
            return items.map(i => i.getItem());
        }));
    }
}
SelectionGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: SelectionGate, deps: [{ token: i1.StructureId }, { token: i2.FormationEventRepository }, { token: i3.FormationPublisher }], target: i0.ɵɵFactoryTarget.Directive });
SelectionGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: SelectionGate, inputs: { rowSelection: "rowSelection" }, outputs: { itemsSelected: "itemsSelected", selectedRows: "selectedRows" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: SelectionGate, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i1.StructureId }, { type: i2.FormationEventRepository }, { type: i3.FormationPublisher }]; }, propDecorators: { rowSelection: [{
                type: Input
            }], itemsSelected: [{
                type: Output
            }], selectedRows: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLmdhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvZ2F0ZS9zZWxlY3Rpb24uZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWdDLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFPN0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7OztBQUkvQyxNQUFNLE9BQWdCLGFBQWMsU0FBUSxJQUFJO0lBVy9DLFlBQXlDLFdBQXdCLEVBQ3ZDLHdCQUFrRCxFQUNsRCxrQkFBc0M7UUFDL0QsS0FBSyxFQUFFLENBQUM7UUFIZ0MsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDdkMsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBUGhFLGtCQUFhLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHdEQsaUJBQVksR0FBcUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQU1wRSxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQWlDO1FBRTVDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFFNUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDdEY7WUFFRCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDbEY7WUFFRCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDbEY7WUFFRCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsRUFBRTtnQkFDekMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNyRjtZQUVELElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQywyQkFBMkIsRUFBRSxFQUFFO2dCQUNwRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMscUJBQXFCLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDbkc7WUFFRCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsdUJBQXVCLEVBQUUsRUFBRTtnQkFDaEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzdGO1lBRUQsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixFQUFFLEVBQUU7Z0JBQzdDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFxQixFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3hHO1NBQ0Q7SUFDRixDQUFDO0lBRUQsUUFBUTtRQUVQLElBQUksQ0FBQyxnQkFBZ0IsQ0FDcEIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQzlELElBQUksQ0FBQyxZQUFZLENBQ2pCLENBQUM7UUFFRixJQUFJLENBQUMsZ0JBQWdCLENBQ3BCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUMxQixJQUFJLENBQUMsYUFBYSxDQUNsQixDQUFDO0lBQ0gsQ0FBQztJQUVPLG1CQUFtQjtRQUMxQixPQUFPLElBQUksQ0FBQyx3QkFBd0I7YUFDOUIsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDaEMsSUFBSSxDQUNKLFNBQVMsQ0FBQyxDQUFDLEtBQXlCLEVBQUUsRUFBRTtZQUN2QyxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzs7MkdBeEVvQixhQUFhOytGQUFiLGFBQWE7NEZBQWIsYUFBYTtrQkFEbEMsU0FBUzswS0FJVCxZQUFZO3NCQURYLEtBQUs7Z0JBSU4sYUFBYTtzQkFEWixNQUFNO2dCQUlQLFlBQVk7c0JBRFgsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY29tcG9uZW50L3NyYy9nYXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFJvd1NlbGVjdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvYXBpL3Jvdy1zZWxlY3RlZC9yb3ctc2VsZWN0aW9uJztcbmltcG9ydCB7IFNlbGVjdGVkUm93IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9hcGkvcm93LXNlbGVjdGVkL3NlbGVjdGVkLXJvdyc7XG5pbXBvcnQgeyBGb3JtYXRpb25FdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vc3JjL2FwaS9mb3JtYXRpb24uZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBGb3JtYXRpb25QdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vc3JjL2FwaS9mb3JtYXRpb24ucHVibGlzaGVyJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jb21wb25lbnQvc3JjL25nLWNoYW5nZXMnO1xuaW1wb3J0IHsgaGVybWVzTWFwIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTZWxlY3Rpb25HYXRlIGV4dGVuZHMgR2F0ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcblxuXHRASW5wdXQoKVxuXHRyb3dTZWxlY3Rpb246IFJvd1NlbGVjdGlvbjtcblxuXHRAT3V0cHV0KClcblx0aXRlbXNTZWxlY3RlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdHNlbGVjdGVkUm93czogRXZlbnRFbWl0dGVyPEFycmF5PFNlbGVjdGVkUm93Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByb3RlY3RlZCByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdFx0XHQgIHByb3RlY3RlZCByZWFkb25seSBmb3JtYXRpb25FdmVudFJlcG9zaXRvcnk6IEZvcm1hdGlvbkV2ZW50UmVwb3NpdG9yeSxcblx0XHRcdFx0XHRcdCAgcHJvdGVjdGVkIHJlYWRvbmx5IGZvcm1hdGlvblB1Ymxpc2hlcjogRm9ybWF0aW9uUHVibGlzaGVyKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxTZWxlY3Rpb25HYXRlPikge1xuXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCdyb3dTZWxlY3Rpb24nLCBjaGFuZ2VzKSkge1xuXG5cdFx0XHRpZiAodGhpcy5yb3dTZWxlY3Rpb24uaXNFbmFibGVkRGVmaW5lZCgpKSB7XG5cdFx0XHRcdHRoaXMuZm9ybWF0aW9uUHVibGlzaGVyLnNldFNlbGVjdGlvbih0aGlzLnJvd1NlbGVjdGlvbi5pc0VuYWJsZWQoKSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLnJvd1NlbGVjdGlvbi5pc1R5cGVEZWZpbmVkKCkpIHtcblx0XHRcdFx0dGhpcy5mb3JtYXRpb25QdWJsaXNoZXIuY2hhbmdlVHlwZSh0aGlzLnJvd1NlbGVjdGlvbi5nZXRUeXBlKCksIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5yb3dTZWxlY3Rpb24uaXNNb2RlRGVmaW5lZCgpKSB7XG5cdFx0XHRcdHRoaXMuZm9ybWF0aW9uUHVibGlzaGVyLmNoYW5nZU1vZGUodGhpcy5yb3dTZWxlY3Rpb24uZ2V0TW9kZSgpLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMucm93U2VsZWN0aW9uLmlzTWF0Y2hlckRlZmluZWQoKSkge1xuXHRcdFx0XHR0aGlzLmZvcm1hdGlvblB1Ymxpc2hlci5zZXRNYXRjaGVyKHRoaXMucm93U2VsZWN0aW9uLmdldE1hdGNoZXIoKSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLnJvd1NlbGVjdGlvbi5pc1NlbGVjdGVkUm93SW5kZXhlc0RlZmluZWQoKSkge1xuXHRcdFx0XHR0aGlzLmZvcm1hdGlvblB1Ymxpc2hlci5zZWxlY3RCeUluZGV4KHRoaXMucm93U2VsZWN0aW9uLmdldFNlbGVjdGVkUm93SW5kZXhlcygpLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMucm93U2VsZWN0aW9uLmlzU2VsZWN0ZWRSb3dJZHNEZWZpbmVkKCkpIHtcblx0XHRcdFx0dGhpcy5mb3JtYXRpb25QdWJsaXNoZXIuc2VsZWN0QnlJZHModGhpcy5yb3dTZWxlY3Rpb24uZ2V0U2VsZWN0ZWRSb3dJZHMoKSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLnJvd1NlbGVjdGlvbi5pc0N1c3RvbVNlbGVjdENvbmZpZygpKSB7XG5cdFx0XHRcdHRoaXMuZm9ybWF0aW9uUHVibGlzaGVyLnNldEN1c3RvbVNlbGVjdGlvbih0aGlzLnJvd1NlbGVjdGlvbi5nZXRDdXN0b21TZWxlY3RDb25maWcoKSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLnN1YnNjcmliZUFuZEVtaXQoXG5cdFx0XHR0aGlzLmZvcm1hdGlvbkV2ZW50UmVwb3NpdG9yeS5vbkl0ZW1TZWxlY3RlZCh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdHRoaXMuc2VsZWN0ZWRSb3dzXG5cdFx0KTtcblxuXHRcdHRoaXMuc3Vic2NyaWJlQW5kRW1pdChcblx0XHRcdHRoaXMuc2VsZWN0SXRlbXNTZWxlY3RlZCgpLFxuXHRcdFx0dGhpcy5pdGVtc1NlbGVjdGVkXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgc2VsZWN0SXRlbXNTZWxlY3RlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5mb3JtYXRpb25FdmVudFJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uSXRlbVNlbGVjdGVkKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgoaXRlbXM6IEFycmF5PFNlbGVjdGVkUm93PikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIGl0ZW1zLm1hcChpID0+IGkuZ2V0SXRlbSgpKTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==