import { Directive } from '@angular/core';
import { SearchingGate } from '../../../../search/feature/gate/searching.gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/api/structure.id";
import * as i2 from "../../../../search/core/api/search.event-repository";
import * as i3 from "../../../../search/core/api/search.command-invoker";
export class StructureSearchingGate extends SearchingGate {
    constructor(structureId, searchEventRepository, searchCommandInvoker) {
        super(structureId, searchEventRepository, searchCommandInvoker);
    }
}
StructureSearchingGate.ɵfac = function StructureSearchingGate_Factory(t) { return new (t || StructureSearchingGate)(i0.ɵɵdirectiveInject(i1.StructureId), i0.ɵɵdirectiveInject(i2.SearchEventRepository), i0.ɵɵdirectiveInject(i3.SearchCommandInvoker)); };
StructureSearchingGate.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: StructureSearchingGate, selectors: [["gui-structure", "searching", ""]], features: [i0.ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureSearchingGate, [{
        type: Directive,
        args: [{
                selector: 'gui-structure[searching]'
            }]
    }], function () { return [{ type: i1.StructureId }, { type: i2.SearchEventRepository }, { type: i3.SearchCommandInvoker }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXNlYXJjaGluZy5nYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2dhdGUvc2VhcmNoaW5nL3N0cnVjdHVyZS1zZWFyY2hpbmcuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQzs7Ozs7QUFRL0UsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGFBQWE7SUFFeEQsWUFBWSxXQUF3QixFQUNqQyxxQkFBNEMsRUFDNUMsb0JBQTBDO1FBQzVDLEtBQUssQ0FBQyxXQUFXLEVBQUUscUJBQXFCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs0RkFOVyxzQkFBc0I7eUVBQXRCLHNCQUFzQjt1RkFBdEIsc0JBQXNCO2NBSGxDLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsMEJBQTBCO2FBQ3BDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNlYXJjaGluZ0dhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zZWFyY2gvZmVhdHVyZS9nYXRlL3NlYXJjaGluZy5nYXRlJztcbmltcG9ydCB7IFNlYXJjaEV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlYXJjaC9jb3JlL2FwaS9zZWFyY2guZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTZWFyY2hDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3NlYXJjaC9jb3JlL2FwaS9zZWFyY2guY29tbWFuZC1pbnZva2VyJztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlW3NlYXJjaGluZ10nXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVNlYXJjaGluZ0dhdGUgZXh0ZW5kcyBTZWFyY2hpbmdHYXRlIHtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHNlYXJjaEV2ZW50UmVwb3NpdG9yeTogU2VhcmNoRXZlbnRSZXBvc2l0b3J5LFxuXHRcdFx0XHRzZWFyY2hDb21tYW5kSW52b2tlcjogU2VhcmNoQ29tbWFuZEludm9rZXIpIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCwgc2VhcmNoRXZlbnRSZXBvc2l0b3J5LCBzZWFyY2hDb21tYW5kSW52b2tlcik7XG5cdH1cblxufVxuIl19