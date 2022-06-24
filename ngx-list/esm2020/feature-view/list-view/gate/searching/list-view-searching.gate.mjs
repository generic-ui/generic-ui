import { Directive } from '@angular/core';
import { SearchingGate } from '../../../../feature/structure/search/gate/searching.gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/structure/core/api/global/structure.id";
import * as i2 from "../../../../core/structure/search/api/search.event-repository";
import * as i3 from "../../../../core/structure/search/api/search.publisher";
export class ListViewSearchingGate extends SearchingGate {
    constructor(structureId, searchEventRepository, searchCommandInvoker) {
        super(structureId, searchEventRepository, searchCommandInvoker);
    }
}
ListViewSearchingGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ListViewSearchingGate, deps: [{ token: i1.StructureId }, { token: i2.SearchEventRepository }, { token: i3.SearchPublisher }], target: i0.ɵɵFactoryTarget.Directive });
ListViewSearchingGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: ListViewSearchingGate, selector: "gui-list-view[searching]", usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ListViewSearchingGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-list-view[searching]'
                }]
        }], ctorParameters: function () { return [{ type: i1.StructureId }, { type: i2.SearchEventRepository }, { type: i3.SearchPublisher }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXNlYXJjaGluZy5nYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlLXZpZXcvbGlzdC12aWV3L2dhdGUvc2VhcmNoaW5nL2xpc3Qtdmlldy1zZWFyY2hpbmcuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwREFBMEQsQ0FBQzs7Ozs7QUFNekYsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGFBQWE7SUFFdkQsWUFBWSxXQUF3QixFQUNqQyxxQkFBNEMsRUFDNUMsb0JBQXFDO1FBQ3ZDLEtBQUssQ0FBQyxXQUFXLEVBQUUscUJBQXFCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUNqRSxDQUFDOzttSEFOVyxxQkFBcUI7dUdBQXJCLHFCQUFxQjs0RkFBckIscUJBQXFCO2tCQUhqQyxTQUFTO21CQUFDO29CQUNWLFFBQVEsRUFBRSwwQkFBMEI7aUJBQ3BDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvY29yZS9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTZWFyY2hQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zZWFyY2gvYXBpL3NlYXJjaC5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU2VhcmNoRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc2VhcmNoL2FwaS9zZWFyY2guZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTZWFyY2hpbmdHYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmVhdHVyZS9zdHJ1Y3R1cmUvc2VhcmNoL2dhdGUvc2VhcmNoaW5nLmdhdGUnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1saXN0LXZpZXdbc2VhcmNoaW5nXSdcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdTZWFyY2hpbmdHYXRlIGV4dGVuZHMgU2VhcmNoaW5nR2F0ZSB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRzZWFyY2hFdmVudFJlcG9zaXRvcnk6IFNlYXJjaEV2ZW50UmVwb3NpdG9yeSxcblx0XHRcdFx0c2VhcmNoQ29tbWFuZEludm9rZXI6IFNlYXJjaFB1Ymxpc2hlcikge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCBzZWFyY2hFdmVudFJlcG9zaXRvcnksIHNlYXJjaENvbW1hbmRJbnZva2VyKTtcblx0fVxuXG59XG4iXX0=