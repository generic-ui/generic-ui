import { Directive } from '@angular/core';
import { SourceGate } from '../../../../source/feature/gate/source.gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/api/structure.id";
import * as i2 from "../../../../source/core/api/source.command-invoker";
import * as i3 from "../../../../source/core/api/event/source-event.service";
export class ListViewSourceGate extends SourceGate {
    constructor(structureId, sourceCommandService, sourceEventService) {
        super(structureId, sourceCommandService, sourceEventService);
        this.sourceCommandService = sourceCommandService;
        this.sourceEventService = sourceEventService;
    }
}
ListViewSourceGate.ɵfac = function ListViewSourceGate_Factory(t) { return new (t || ListViewSourceGate)(i0.ɵɵdirectiveInject(i1.StructureId), i0.ɵɵdirectiveInject(i2.SourceCommandInvoker), i0.ɵɵdirectiveInject(i3.SourceEventService)); };
ListViewSourceGate.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ListViewSourceGate, selectors: [["gui-list-view", "items", ""]], features: [i0.ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListViewSourceGate, [{
        type: Directive,
        args: [{
                selector: 'gui-list-view[items]'
            }]
    }], function () { return [{ type: i1.StructureId }, { type: i2.SourceCommandInvoker }, { type: i3.SourceEventService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXNvdXJjZS5nYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2dhdGUvc291cmNlL2xpc3Qtdmlldy1zb3VyY2UuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7Ozs7QUFTekUsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFVBQVU7SUFFakQsWUFBWSxXQUF3QixFQUNkLG9CQUEwQyxFQUMxQyxrQkFBc0M7UUFDM0QsS0FBSyxDQUFDLFdBQVcsRUFBRSxvQkFBb0IsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRnhDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUU1RCxDQUFDOztvRkFOVyxrQkFBa0I7cUVBQWxCLGtCQUFrQjt1RkFBbEIsa0JBQWtCO2NBSDlCLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsc0JBQXNCO2FBQ2hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNvdXJjZUdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvZmVhdHVyZS9nYXRlL3NvdXJjZS5nYXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNvdXJjZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL3NvdXJjZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU291cmNlRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL2V2ZW50L3NvdXJjZS1ldmVudC5zZXJ2aWNlJztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktbGlzdC12aWV3W2l0ZW1zXSdcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdTb3VyY2VHYXRlIGV4dGVuZHMgU291cmNlR2F0ZSB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcm90ZWN0ZWQgcmVhZG9ubHkgc291cmNlQ29tbWFuZFNlcnZpY2U6IFNvdXJjZUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcm90ZWN0ZWQgcmVhZG9ubHkgc291cmNlRXZlbnRTZXJ2aWNlOiBTb3VyY2VFdmVudFNlcnZpY2UpIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCwgc291cmNlQ29tbWFuZFNlcnZpY2UsIHNvdXJjZUV2ZW50U2VydmljZSk7XG5cdH1cblxufVxuIl19