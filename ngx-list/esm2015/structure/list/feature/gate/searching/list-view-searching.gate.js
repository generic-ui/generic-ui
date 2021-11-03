import { Directive } from '@angular/core';
import { SearchingGate } from '../../../../search/feature/gate/searching.gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/api/structure.id";
import * as i2 from "../../../../search/core/api/search.event-repository";
import * as i3 from "../../../../search/core/api/search.command-invoker";
export class ListViewSearchingGate extends SearchingGate {
    constructor(structureId, searchEventRepository, searchCommandInvoker) {
        super(structureId, searchEventRepository, searchCommandInvoker);
    }
}
ListViewSearchingGate.ɵfac = function ListViewSearchingGate_Factory(t) { return new (t || ListViewSearchingGate)(i0.ɵɵdirectiveInject(i1.StructureId), i0.ɵɵdirectiveInject(i2.SearchEventRepository), i0.ɵɵdirectiveInject(i3.SearchCommandInvoker)); };
ListViewSearchingGate.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ListViewSearchingGate, selectors: [["gui-list-view", "searching", ""]], features: [i0.ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListViewSearchingGate, [{
        type: Directive,
        args: [{
                selector: 'gui-list-view[searching]'
            }]
    }], function () { return [{ type: i1.StructureId }, { type: i2.SearchEventRepository }, { type: i3.SearchCommandInvoker }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXNlYXJjaGluZy5nYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2dhdGUvc2VhcmNoaW5nL2xpc3Qtdmlldy1zZWFyY2hpbmcuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQzs7Ozs7QUFNL0UsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGFBQWE7SUFFdkQsWUFBWSxXQUF3QixFQUNqQyxxQkFBNEMsRUFDNUMsb0JBQTBDO1FBQzVDLEtBQUssQ0FBQyxXQUFXLEVBQUUscUJBQXFCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUNqRSxDQUFDOzswRkFOVyxxQkFBcUI7d0VBQXJCLHFCQUFxQjt1RkFBckIscUJBQXFCO2NBSGpDLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsMEJBQTBCO2FBQ3BDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNlYXJjaENvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VhcmNoL2NvcmUvYXBpL3NlYXJjaC5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU2VhcmNoRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VhcmNoL2NvcmUvYXBpL3NlYXJjaC5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNlYXJjaGluZ0dhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zZWFyY2gvZmVhdHVyZS9nYXRlL3NlYXJjaGluZy5nYXRlJztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktbGlzdC12aWV3W3NlYXJjaGluZ10nXG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3U2VhcmNoaW5nR2F0ZSBleHRlbmRzIFNlYXJjaGluZ0dhdGUge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0c2VhcmNoRXZlbnRSZXBvc2l0b3J5OiBTZWFyY2hFdmVudFJlcG9zaXRvcnksXG5cdFx0XHRcdHNlYXJjaENvbW1hbmRJbnZva2VyOiBTZWFyY2hDb21tYW5kSW52b2tlcikge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCBzZWFyY2hFdmVudFJlcG9zaXRvcnksIHNlYXJjaENvbW1hbmRJbnZva2VyKTtcblx0fVxuXG59XG4iXX0=