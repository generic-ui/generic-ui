import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { Gate } from '../../../../common/cdk/component/gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/api/structure.id";
import * as i2 from "../../core/api/formation/formation.event-repository";
import * as i3 from "../../core/api/formation/formation.command-invoker";
import * as i4 from "../../core/api/formation/type/row-selection-type.archive";
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
SelectionGate.ɵfac = function SelectionGate_Factory(t) { return new (t || SelectionGate)(i0.ɵɵdirectiveInject(i1.StructureId), i0.ɵɵdirectiveInject(i2.FormationEventRepository), i0.ɵɵdirectiveInject(i3.FormationCommandInvoker), i0.ɵɵdirectiveInject(i4.RowSelectionTypeArchive)); };
SelectionGate.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SelectionGate, inputs: { rowSelection: "rowSelection" }, outputs: { itemsSelected: "itemsSelected", selectedRows: "selectedRows" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectionGate, [{
        type: Directive
    }], function () { return [{ type: i1.StructureId }, { type: i2.FormationEventRepository }, { type: i3.FormationCommandInvoker }, { type: i4.RowSelectionTypeArchive }]; }, { rowSelection: [{
            type: Input
        }], itemsSelected: [{
            type: Output
        }], selectedRows: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLmdhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9zb3VyY2UvZmVhdHVyZS9nYXRlL3NlbGVjdGlvbi5nYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBZ0MsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJHLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7Ozs7O0FBVTdELE1BQU0sT0FBZ0IsYUFBYyxTQUFRLElBQUk7SUFXL0MsWUFBeUMsV0FBd0IsRUFDdkMscUJBQStDLEVBQy9DLDBCQUFtRCxFQUNuRCx1QkFBZ0Q7UUFDekUsS0FBSyxFQUFFLENBQUM7UUFKZ0MsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDdkMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUEwQjtRQUMvQywrQkFBMEIsR0FBMUIsMEJBQTBCLENBQXlCO1FBQ25ELDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFSMUUsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd0RCxpQkFBWSxHQUFxQyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBT3BFLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBaUM7UUFFNUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUM1QyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsRUFBRTtnQkFDekMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUM5RjtZQUVELElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsRUFBRTtnQkFDdEMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7YUFDL0Q7WUFFRCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDMUY7U0FDRDtJQUNGLENBQUM7SUFFRCxRQUFRO1FBRVAsSUFBSSxDQUFDLHFCQUFxQjthQUN4QixjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQzVCLFNBQVMsQ0FBQyxDQUFDLEtBQXlCLEVBQUUsRUFBRTtZQUN4QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1YsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7OzBFQWhEb0IsYUFBYTtnRUFBYixhQUFhO3VGQUFiLGFBQWE7Y0FEbEMsU0FBUztpTEFJVCxZQUFZO2tCQURYLEtBQUs7WUFJTixhQUFhO2tCQURaLE1BQU07WUFJUCxZQUFZO2tCQURYLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvZ2F0ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9yb3ctc2VsZWN0aW9uJztcbmltcG9ydCB7IFNlbGVjdGVkUm93IH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvZm9ybWF0aW9uL3NlbGVjdGVkLXJvdyc7XG5pbXBvcnQgeyBGb3JtYXRpb25FdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgRm9ybWF0aW9uQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZSB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2Zvcm1hdGlvbi90eXBlL3Jvdy1zZWxlY3Rpb24tdHlwZS5hcmNoaXZlJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTZWxlY3Rpb25HYXRlIGV4dGVuZHMgR2F0ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBJbnB1dCgpXG5cdHJvd1NlbGVjdGlvbjogUm93U2VsZWN0aW9uO1xuXG5cdEBPdXRwdXQoKVxuXHRpdGVtc1NlbGVjdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0c2VsZWN0ZWRSb3dzOiBFdmVudEVtaXR0ZXI8QXJyYXk8U2VsZWN0ZWRSb3c+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJvdGVjdGVkIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0XHRcdCAgcHJvdGVjdGVkIHJlYWRvbmx5IGZvcm1hdGlvbkV2ZW50U2VydmljZTogRm9ybWF0aW9uRXZlbnRSZXBvc2l0b3J5LFxuXHRcdFx0XHRcdFx0ICBwcm90ZWN0ZWQgcmVhZG9ubHkgZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXI6IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRcdFx0ICBwcm90ZWN0ZWQgcmVhZG9ubHkgcm93U2VsZWN0aW9uVHlwZUFyY2hpdmU6IFJvd1NlbGVjdGlvblR5cGVBcmNoaXZlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxTZWxlY3Rpb25HYXRlPikge1xuXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCdyb3dTZWxlY3Rpb24nLCBjaGFuZ2VzKSkge1xuXHRcdFx0aWYgKHRoaXMucm93U2VsZWN0aW9uLmlzRW5hYmxlZERlZmluZWQoKSkge1xuXHRcdFx0XHR0aGlzLmZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyLnNldFNlbGVjdGlvbih0aGlzLnJvd1NlbGVjdGlvbi5pc0VuYWJsZWQoKSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLnJvd1NlbGVjdGlvbi5pc1R5cGVEZWZpbmVkKCkpIHtcblx0XHRcdFx0dGhpcy5yb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZS5uZXh0KHRoaXMucm93U2VsZWN0aW9uLmdldFR5cGUoKSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLnJvd1NlbGVjdGlvbi5pc01vZGVEZWZpbmVkKCkpIHtcblx0XHRcdFx0dGhpcy5mb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlci5jaGFuZ2VNb2RlKHRoaXMucm93U2VsZWN0aW9uLmdldE1vZGUoKSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLmZvcm1hdGlvbkV2ZW50U2VydmljZVxuXHRcdFx0Lm9uSXRlbVNlbGVjdGVkKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZSh0aGlzLmhlcm1lc1Rha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoaXRlbXM6IEFycmF5PFNlbGVjdGVkUm93PikgPT4ge1xuXHRcdFx0XHR0aGlzLml0ZW1zU2VsZWN0ZWQuZW1pdChpdGVtcy5tYXAoaSA9PiBpLmdldFNvdXJjZSgpKSk7XG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRSb3dzLmVtaXQoaXRlbXMpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHRzdXBlci5uZ09uRGVzdHJveSgpO1xuXHR9XG5cbn1cbiJdfQ==