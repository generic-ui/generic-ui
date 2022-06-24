import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { Gate } from '../../../common/cdk/component/gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/structure/core/api/global/structure.id";
import * as i2 from "../../../../core/structure/formation/api/formation.event-repository";
import * as i3 from "../../../../core/structure/formation/api/formation.publisher";
import * as i4 from "../../../../core/structure/formation/api/type/row-selection-type.archive";
export class SelectionGate extends Gate {
    constructor(structureId, formationEventRepository, formationCommandDispatcher, rowSelectionTypeArchive) {
        super();
        this.structureId = structureId;
        this.formationEventRepository = formationEventRepository;
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
        this.formationEventRepository
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
SelectionGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SelectionGate, deps: [{ token: i1.StructureId }, { token: i2.FormationEventRepository }, { token: i3.FormationPublisher }, { token: i4.RowSelectionTypeArchive }], target: i0.ɵɵFactoryTarget.Directive });
SelectionGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: SelectionGate, inputs: { rowSelection: "rowSelection" }, outputs: { itemsSelected: "itemsSelected", selectedRows: "selectedRows" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SelectionGate, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i1.StructureId }, { type: i2.FormationEventRepository }, { type: i3.FormationPublisher }, { type: i4.RowSelectionTypeArchive }]; }, propDecorators: { rowSelection: [{
                type: Input
            }], itemsSelected: [{
                type: Output
            }], selectedRows: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLmdhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9nYXRlL3NlbGVjdGlvbi5nYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBZ0MsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJHLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7O0FBVzFELE1BQU0sT0FBZ0IsYUFBYyxTQUFRLElBQUk7SUFXL0MsWUFBeUMsV0FBd0IsRUFDdkMsd0JBQWtELEVBQ2xELDBCQUE4QyxFQUM5Qyx1QkFBZ0Q7UUFDekUsS0FBSyxFQUFFLENBQUM7UUFKZ0MsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDdkMsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQW9CO1FBQzlDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFSMUUsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd0RCxpQkFBWSxHQUFxQyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBT3BFLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBaUM7UUFFNUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUM1QyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsRUFBRTtnQkFDekMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUM5RjtZQUVELElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsRUFBRTtnQkFDdEMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7YUFDL0Q7WUFFRCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDMUY7U0FDRDtJQUNGLENBQUM7SUFFRCxRQUFRO1FBRVAsSUFBSSxDQUFDLHdCQUF3QjthQUMzQixjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQzVCLFNBQVMsQ0FBQyxDQUFDLEtBQXlCLEVBQUUsRUFBRTtZQUN4QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1YsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7OzJHQWhEb0IsYUFBYTsrRkFBYixhQUFhOzRGQUFiLGFBQWE7a0JBRGxDLFNBQVM7Z05BSVQsWUFBWTtzQkFEWCxLQUFLO2dCQUlOLGFBQWE7c0JBRFosTUFBTTtnQkFJUCxZQUFZO3NCQURYLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHYXRlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvZ2F0ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2NvcmUvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL2FwaS9yb3ctc2VsZWN0ZWQvcm93LXNlbGVjdGlvbic7XG5pbXBvcnQgeyBTZWxlY3RlZFJvdyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9hcGkvcm93LXNlbGVjdGVkL3NlbGVjdGVkLXJvdyc7XG5pbXBvcnQgeyBGb3JtYXRpb25FdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vYXBpL2Zvcm1hdGlvbi5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IEZvcm1hdGlvblB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9hcGkvZm9ybWF0aW9uLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9hcGkvdHlwZS9yb3ctc2VsZWN0aW9uLXR5cGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcblxuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTZWxlY3Rpb25HYXRlIGV4dGVuZHMgR2F0ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBJbnB1dCgpXG5cdHJvd1NlbGVjdGlvbjogUm93U2VsZWN0aW9uO1xuXG5cdEBPdXRwdXQoKVxuXHRpdGVtc1NlbGVjdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0c2VsZWN0ZWRSb3dzOiBFdmVudEVtaXR0ZXI8QXJyYXk8U2VsZWN0ZWRSb3c+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJvdGVjdGVkIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0XHRcdCAgcHJvdGVjdGVkIHJlYWRvbmx5IGZvcm1hdGlvbkV2ZW50UmVwb3NpdG9yeTogRm9ybWF0aW9uRXZlbnRSZXBvc2l0b3J5LFxuXHRcdFx0XHRcdFx0ICBwcm90ZWN0ZWQgcmVhZG9ubHkgZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXI6IEZvcm1hdGlvblB1Ymxpc2hlcixcblx0XHRcdFx0XHRcdCAgcHJvdGVjdGVkIHJlYWRvbmx5IHJvd1NlbGVjdGlvblR5cGVBcmNoaXZlOiBSb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8U2VsZWN0aW9uR2F0ZT4pIHtcblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgncm93U2VsZWN0aW9uJywgY2hhbmdlcykpIHtcblx0XHRcdGlmICh0aGlzLnJvd1NlbGVjdGlvbi5pc0VuYWJsZWREZWZpbmVkKCkpIHtcblx0XHRcdFx0dGhpcy5mb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlci5zZXRTZWxlY3Rpb24odGhpcy5yb3dTZWxlY3Rpb24uaXNFbmFibGVkKCksIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5yb3dTZWxlY3Rpb24uaXNUeXBlRGVmaW5lZCgpKSB7XG5cdFx0XHRcdHRoaXMucm93U2VsZWN0aW9uVHlwZUFyY2hpdmUubmV4dCh0aGlzLnJvd1NlbGVjdGlvbi5nZXRUeXBlKCkpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5yb3dTZWxlY3Rpb24uaXNNb2RlRGVmaW5lZCgpKSB7XG5cdFx0XHRcdHRoaXMuZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXIuY2hhbmdlTW9kZSh0aGlzLnJvd1NlbGVjdGlvbi5nZXRNb2RlKCksIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5mb3JtYXRpb25FdmVudFJlcG9zaXRvcnlcblx0XHRcdC5vbkl0ZW1TZWxlY3RlZCh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUodGhpcy5oZXJtZXNUYWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGl0ZW1zOiBBcnJheTxTZWxlY3RlZFJvdz4pID0+IHtcblx0XHRcdFx0dGhpcy5pdGVtc1NlbGVjdGVkLmVtaXQoaXRlbXMubWFwKGkgPT4gaS5nZXRTb3VyY2UoKSkpO1xuXHRcdFx0XHR0aGlzLnNlbGVjdGVkUm93cy5lbWl0KGl0ZW1zKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0c3VwZXIubmdPbkRlc3Ryb3koKTtcblx0fVxuXG59XG4iXX0=