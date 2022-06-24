import { Directive } from '@angular/core';
import { SourceGate } from '../../../../feature/structure/source/gate/source.gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/structure/core/api/global/structure.id";
import * as i2 from "../../../../core/structure/source/api/source.publisher";
import * as i3 from "../../../../core/structure/source/api/edit/source-event.service";
export class ListViewSourceGate extends SourceGate {
    constructor(structureId, sourceCommandService, sourceEventService) {
        super(structureId, sourceCommandService, sourceEventService);
        this.sourceCommandService = sourceCommandService;
        this.sourceEventService = sourceEventService;
    }
}
ListViewSourceGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ListViewSourceGate, deps: [{ token: i1.StructureId }, { token: i2.SourcePublisher }, { token: i3.SourceEventService }], target: i0.ɵɵFactoryTarget.Directive });
ListViewSourceGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: ListViewSourceGate, selector: "gui-list-view[items]", usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ListViewSourceGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-list-view[items]'
                }]
        }], ctorParameters: function () { return [{ type: i1.StructureId }, { type: i2.SourcePublisher }, { type: i3.SourceEventService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXNvdXJjZS5nYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlLXZpZXcvbGlzdC12aWV3L2dhdGUvc291cmNlL2xpc3Qtdmlldy1zb3VyY2UuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1REFBdUQsQ0FBQzs7Ozs7QUFTbkYsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFVBQVU7SUFFakQsWUFBWSxXQUF3QixFQUNkLG9CQUFxQyxFQUNyQyxrQkFBc0M7UUFDM0QsS0FBSyxDQUFDLFdBQVcsRUFBRSxvQkFBb0IsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRnhDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBaUI7UUFDckMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUU1RCxDQUFDOztnSEFOVyxrQkFBa0I7b0dBQWxCLGtCQUFrQjs0RkFBbEIsa0JBQWtCO2tCQUg5QixTQUFTO21CQUFDO29CQUNWLFFBQVEsRUFBRSxzQkFBc0I7aUJBQ2hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNvdXJjZUdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9mZWF0dXJlL3N0cnVjdHVyZS9zb3VyY2UvZ2F0ZS9zb3VyY2UuZ2F0ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2NvcmUvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU291cmNlUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc291cmNlL2FwaS9zb3VyY2UucHVibGlzaGVyJztcbmltcG9ydCB7IFNvdXJjZUV2ZW50U2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NvdXJjZS9hcGkvZWRpdC9zb3VyY2UtZXZlbnQuc2VydmljZSc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLWxpc3Qtdmlld1tpdGVtc10nXG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3U291cmNlR2F0ZSBleHRlbmRzIFNvdXJjZUdhdGUge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJvdGVjdGVkIHJlYWRvbmx5IHNvdXJjZUNvbW1hbmRTZXJ2aWNlOiBTb3VyY2VQdWJsaXNoZXIsXG5cdFx0XHRcdHByb3RlY3RlZCByZWFkb25seSBzb3VyY2VFdmVudFNlcnZpY2U6IFNvdXJjZUV2ZW50U2VydmljZSkge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCBzb3VyY2VDb21tYW5kU2VydmljZSwgc291cmNlRXZlbnRTZXJ2aWNlKTtcblx0fVxuXG59XG4iXX0=