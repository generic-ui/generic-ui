import { Directive } from '@angular/core';
import { SearchingGate } from '../../../../feature/structure/search/gate/searching.gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/structure/core/api/global/structure.id";
import * as i2 from "../../../../core/structure/search/api/search.event-repository";
import * as i3 from "../../../../core/structure/search/api/search.publisher";
export class StructureSearchingGate extends SearchingGate {
    constructor(structureId, searchEventRepository, searchCommandInvoker) {
        super(structureId, searchEventRepository, searchCommandInvoker);
    }
}
StructureSearchingGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureSearchingGate, deps: [{ token: i1.StructureId }, { token: i2.SearchEventRepository }, { token: i3.SearchPublisher }], target: i0.ɵɵFactoryTarget.Directive });
StructureSearchingGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: StructureSearchingGate, selector: "gui-structure[searching]", usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureSearchingGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[searching]'
                }]
        }], ctorParameters: function () { return [{ type: i1.StructureId }, { type: i2.SearchEventRepository }, { type: i3.SearchPublisher }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXNlYXJjaGluZy5nYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L2dhdGUvc2VhcmNoaW5nL3N0cnVjdHVyZS1zZWFyY2hpbmcuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwREFBMEQsQ0FBQzs7Ozs7QUFRekYsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGFBQWE7SUFFeEQsWUFBWSxXQUF3QixFQUNqQyxxQkFBNEMsRUFDNUMsb0JBQXFDO1FBQ3ZDLEtBQUssQ0FBQyxXQUFXLEVBQUUscUJBQXFCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUNqRSxDQUFDOztvSEFOVyxzQkFBc0I7d0dBQXRCLHNCQUFzQjs0RkFBdEIsc0JBQXNCO2tCQUhsQyxTQUFTO21CQUFDO29CQUNWLFFBQVEsRUFBRSwwQkFBMEI7aUJBQ3BDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvY29yZS9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTZWFyY2hpbmdHYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmVhdHVyZS9zdHJ1Y3R1cmUvc2VhcmNoL2dhdGUvc2VhcmNoaW5nLmdhdGUnO1xuaW1wb3J0IHsgU2VhcmNoRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc2VhcmNoL2FwaS9zZWFyY2guZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTZWFyY2hQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zZWFyY2gvYXBpL3NlYXJjaC5wdWJsaXNoZXInO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmVbc2VhcmNoaW5nXSdcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU2VhcmNoaW5nR2F0ZSBleHRlbmRzIFNlYXJjaGluZ0dhdGUge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0c2VhcmNoRXZlbnRSZXBvc2l0b3J5OiBTZWFyY2hFdmVudFJlcG9zaXRvcnksXG5cdFx0XHRcdHNlYXJjaENvbW1hbmRJbnZva2VyOiBTZWFyY2hQdWJsaXNoZXIpIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCwgc2VhcmNoRXZlbnRSZXBvc2l0b3J5LCBzZWFyY2hDb21tYW5kSW52b2tlcik7XG5cdH1cblxufVxuIl19