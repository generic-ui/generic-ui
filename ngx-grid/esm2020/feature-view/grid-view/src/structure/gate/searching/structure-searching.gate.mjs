import { Directive } from '@angular/core';
import { SearchingGate } from '../../../../../../feature/structure/search/src/gate/searching.gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i2 from "../../../../../../core/structure/search/src/api/search.event-repository";
import * as i3 from "../../../../../../core/structure/search/src/api/search.publisher";
export class StructureSearchingGate extends SearchingGate {
    constructor(structureId, searchEventRepository, searchCommandInvoker) {
        super(structureId, searchEventRepository, searchCommandInvoker);
    }
}
StructureSearchingGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: StructureSearchingGate, deps: [{ token: i1.StructureId }, { token: i2.SearchEventRepository }, { token: i3.SearchPublisher }], target: i0.ɵɵFactoryTarget.Directive });
StructureSearchingGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: StructureSearchingGate, selector: "gui-structure[searching]", usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: StructureSearchingGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[searching]'
                }]
        }], ctorParameters: function () { return [{ type: i1.StructureId }, { type: i2.SearchEventRepository }, { type: i3.SearchPublisher }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXNlYXJjaGluZy5nYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L3NyYy9zdHJ1Y3R1cmUvZ2F0ZS9zZWFyY2hpbmcvc3RydWN0dXJlLXNlYXJjaGluZy5nYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9FQUFvRSxDQUFDOzs7OztBQVFuRyxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsYUFBYTtJQUV4RCxZQUFZLFdBQXdCLEVBQ2pDLHFCQUE0QyxFQUM1QyxvQkFBcUM7UUFDdkMsS0FBSyxDQUFDLFdBQVcsRUFBRSxxQkFBcUIsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7O29IQU5XLHNCQUFzQjt3R0FBdEIsc0JBQXNCOzRGQUF0QixzQkFBc0I7a0JBSGxDLFNBQVM7bUJBQUM7b0JBQ1YsUUFBUSxFQUFFLDBCQUEwQjtpQkFDcEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU2VhcmNoaW5nR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlL3NlYXJjaC9zcmMvZ2F0ZS9zZWFyY2hpbmcuZ2F0ZSc7XG5pbXBvcnQgeyBTZWFyY2hFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zZWFyY2gvc3JjL2FwaS9zZWFyY2guZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTZWFyY2hQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zZWFyY2gvc3JjL2FwaS9zZWFyY2gucHVibGlzaGVyJztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlW3NlYXJjaGluZ10nXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVNlYXJjaGluZ0dhdGUgZXh0ZW5kcyBTZWFyY2hpbmdHYXRlIHtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHNlYXJjaEV2ZW50UmVwb3NpdG9yeTogU2VhcmNoRXZlbnRSZXBvc2l0b3J5LFxuXHRcdFx0XHRzZWFyY2hDb21tYW5kSW52b2tlcjogU2VhcmNoUHVibGlzaGVyKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsIHNlYXJjaEV2ZW50UmVwb3NpdG9yeSwgc2VhcmNoQ29tbWFuZEludm9rZXIpO1xuXHR9XG5cbn1cbiJdfQ==