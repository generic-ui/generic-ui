import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { Gate } from '../../../../../../common/cdk/component/gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../../schema/core/api/schema.read-model-root-id";
import * as i2 from "../../../../../../schema/core/api/schema.command-invoker";
import * as i3 from "../../../../../../schema/core/api/schema.event-repository";
export class StructureRowColoringGate extends Gate {
    constructor(schemaId, schemaCommandInvoker, schemaEventRepository) {
        super();
        this.schemaId = schemaId;
        this.schemaCommandInvoker = schemaCommandInvoker;
        this.schemaEventRepository = schemaEventRepository;
        this.rowColoringChanged = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (this.isDefined('rowColoring', changes)) {
            this.schemaCommandInvoker.setRowColoring(this.rowColoring, this.schemaId);
        }
    }
    ngOnInit() {
        this.subscribeAndEmit(this.schemaEventRepository.onRowColoring(this.schemaId), this.rowColoringChanged);
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
}
StructureRowColoringGate.ɵfac = function StructureRowColoringGate_Factory(t) { return new (t || StructureRowColoringGate)(i0.ɵɵdirectiveInject(i1.SchemaReadModelRootId), i0.ɵɵdirectiveInject(i2.SchemaCommandInvoker), i0.ɵɵdirectiveInject(i3.SchemaEventRepository)); };
StructureRowColoringGate.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: StructureRowColoringGate, selectors: [["gui-structure", "rowColoring", ""]], inputs: { rowColoring: "rowColoring" }, outputs: { rowColoringChanged: "rowColoringChanged" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureRowColoringGate, [{
        type: Directive,
        args: [{
                selector: 'gui-structure[rowColoring]'
            }]
    }], function () { return [{ type: i1.SchemaReadModelRootId }, { type: i2.SchemaCommandInvoker }, { type: i3.SchemaEventRepository }]; }, { rowColoring: [{
            type: Input
        }], rowColoringChanged: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXJvdy1jb2xvcmluZy5nYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2dhdGUvcm93L2NvbG9yaW5nL3N0cnVjdHVyZS1yb3ctY29sb3JpbmcuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWdDLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7Ozs7O0FBV25FLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxJQUFJO0lBUWpELFlBQTZCLFFBQStCLEVBQ3hDLG9CQUEwQyxFQUMxQyxxQkFBNEM7UUFDL0QsS0FBSyxFQUFFLENBQUM7UUFIb0IsYUFBUSxHQUFSLFFBQVEsQ0FBdUI7UUFDeEMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBSmhFLHVCQUFrQixHQUFvQyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBTXpFLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBNEM7UUFFdkQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzFFO0lBQ0YsQ0FBQztJQUVELFFBQVE7UUFFUCxJQUFJLENBQUMsZ0JBQWdCLENBQ3BCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUN2RCxJQUFJLENBQUMsa0JBQWtCLENBQ3ZCLENBQUM7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNWLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOztnR0EvQlcsd0JBQXdCOzJFQUF4Qix3QkFBd0I7dUZBQXhCLHdCQUF3QjtjQUhwQyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLDRCQUE0QjthQUN0QzsrSUFJQSxXQUFXO2tCQURWLEtBQUs7WUFJTixrQkFBa0I7a0JBRGpCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvZ2F0ZSc7XG5pbXBvcnQgeyBSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9yb3ctY29sb3Jpbmcvcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3Jvdy1jb2xvcmluZy9zY2hlbWEtcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IFNjaGVtYUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3NjaGVtYS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU2NoZW1hRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3NjaGVtYS5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlW3Jvd0NvbG9yaW5nXSdcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUm93Q29sb3JpbmdHYXRlIGV4dGVuZHMgR2F0ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBJbnB1dCgpXG5cdHJvd0NvbG9yaW5nOiBSb3dDb2xvcmluZztcblxuXHRAT3V0cHV0KClcblx0cm93Q29sb3JpbmdDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8U2NoZW1hUm93Q29sb3Jpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFDb21tYW5kSW52b2tlcjogU2NoZW1hQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hRXZlbnRSZXBvc2l0b3J5OiBTY2hlbWFFdmVudFJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFN0cnVjdHVyZVJvd0NvbG9yaW5nR2F0ZT4pIHtcblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgncm93Q29sb3JpbmcnLCBjaGFuZ2VzKSkge1xuXHRcdFx0dGhpcy5zY2hlbWFDb21tYW5kSW52b2tlci5zZXRSb3dDb2xvcmluZyh0aGlzLnJvd0NvbG9yaW5nLCB0aGlzLnNjaGVtYUlkKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuc3Vic2NyaWJlQW5kRW1pdChcblx0XHRcdHRoaXMuc2NoZW1hRXZlbnRSZXBvc2l0b3J5Lm9uUm93Q29sb3JpbmcodGhpcy5zY2hlbWFJZCksXG5cdFx0XHR0aGlzLnJvd0NvbG9yaW5nQ2hhbmdlZFxuXHRcdCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHRzdXBlci5uZ09uRGVzdHJveSgpO1xuXHR9XG59XG4iXX0=