import { Directive } from '@angular/core';
import { SourceGate } from '../../../../feature/structure/source/gate/source.gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/structure/structure-core/api/global/structure.id";
import * as i2 from "../../../../core/structure/source/api/source.publisher";
import * as i3 from "../../../../core/structure/source/api/edit/source-event.service";
export class ListViewSourceGate extends SourceGate {
    constructor(structureId, sourceCommandService, sourceEventService) {
        super(structureId, sourceCommandService, sourceEventService);
        this.sourceCommandService = sourceCommandService;
        this.sourceEventService = sourceEventService;
    }
}
ListViewSourceGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewSourceGate, deps: [{ token: i1.StructureId }, { token: i2.SourcePublisher }, { token: i3.SourceEventService }], target: i0.ɵɵFactoryTarget.Directive });
ListViewSourceGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: ListViewSourceGate, selector: "gui-list-view[items]", usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ListViewSourceGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-list-view[items]'
                }]
        }], ctorParameters: function () { return [{ type: i1.StructureId }, { type: i2.SourcePublisher }, { type: i3.SourceEventService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXNvdXJjZS5nYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlLXZpZXcvbGlzdC12aWV3L2dhdGUvc291cmNlL2xpc3Qtdmlldy1zb3VyY2UuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1REFBdUQsQ0FBQzs7Ozs7QUFTbkYsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFVBQVU7SUFFakQsWUFBWSxXQUF3QixFQUNkLG9CQUFxQyxFQUNyQyxrQkFBc0M7UUFDM0QsS0FBSyxDQUFDLFdBQVcsRUFBRSxvQkFBb0IsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRnhDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBaUI7UUFDckMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUU1RCxDQUFDOzsrR0FOVyxrQkFBa0I7bUdBQWxCLGtCQUFrQjsyRkFBbEIsa0JBQWtCO2tCQUg5QixTQUFTO21CQUFDO29CQUNWLFFBQVEsRUFBRSxzQkFBc0I7aUJBQ2hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNvdXJjZUdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9mZWF0dXJlL3N0cnVjdHVyZS9zb3VyY2UvZ2F0ZS9zb3VyY2UuZ2F0ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N0cnVjdHVyZS1jb3JlL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNvdXJjZVB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NvdXJjZS9hcGkvc291cmNlLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBTb3VyY2VFdmVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zb3VyY2UvYXBpL2VkaXQvc291cmNlLWV2ZW50LnNlcnZpY2UnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1saXN0LXZpZXdbaXRlbXNdJ1xufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld1NvdXJjZUdhdGUgZXh0ZW5kcyBTb3VyY2VHYXRlIHtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByb3RlY3RlZCByZWFkb25seSBzb3VyY2VDb21tYW5kU2VydmljZTogU291cmNlUHVibGlzaGVyLFxuXHRcdFx0XHRwcm90ZWN0ZWQgcmVhZG9ubHkgc291cmNlRXZlbnRTZXJ2aWNlOiBTb3VyY2VFdmVudFNlcnZpY2UpIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCwgc291cmNlQ29tbWFuZFNlcnZpY2UsIHNvdXJjZUV2ZW50U2VydmljZSk7XG5cdH1cblxufVxuIl19