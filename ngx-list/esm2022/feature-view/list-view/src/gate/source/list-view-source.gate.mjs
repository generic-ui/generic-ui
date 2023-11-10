import { Directive } from '@angular/core';
import { SourceGate } from '../../../../../feature/structure/source/src/gate/source.gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i2 from "../../../../../core/structure/source/src/api/source.publisher";
import * as i3 from "../../../../../core/structure/source/src/api/edit/source-event.service";
export class ListViewSourceGate extends SourceGate {
    sourceCommandService;
    sourceEventService;
    constructor(structureId, sourceCommandService, sourceEventService) {
        super(structureId, sourceCommandService, sourceEventService);
        this.sourceCommandService = sourceCommandService;
        this.sourceEventService = sourceEventService;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ListViewSourceGate, deps: [{ token: i1.StructureId }, { token: i2.SourcePublisher }, { token: i3.SourceEventService }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: ListViewSourceGate, selector: "gui-list-view[items]", usesInheritance: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ListViewSourceGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-list-view[items]'
                }]
        }], ctorParameters: function () { return [{ type: i1.StructureId }, { type: i2.SourcePublisher }, { type: i3.SourceEventService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXNvdXJjZS5nYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlLXZpZXcvbGlzdC12aWV3L3NyYy9nYXRlL3NvdXJjZS9saXN0LXZpZXctc291cmNlLmdhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOERBQThELENBQUM7Ozs7O0FBUzFGLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxVQUFVO0lBRzNCO0lBQ0E7SUFGdEIsWUFBWSxXQUF3QixFQUNkLG9CQUFxQyxFQUNyQyxrQkFBc0M7UUFDM0QsS0FBSyxDQUFDLFdBQVcsRUFBRSxvQkFBb0IsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRnhDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBaUI7UUFDckMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUU1RCxDQUFDO3dHQU5XLGtCQUFrQjs0RkFBbEIsa0JBQWtCOzs0RkFBbEIsa0JBQWtCO2tCQUg5QixTQUFTO21CQUFDO29CQUNWLFFBQVEsRUFBRSxzQkFBc0I7aUJBQ2hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNvdXJjZUdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9mZWF0dXJlL3N0cnVjdHVyZS9zb3VyY2Uvc3JjL2dhdGUvc291cmNlLmdhdGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU291cmNlUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc291cmNlL3NyYy9hcGkvc291cmNlLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBTb3VyY2VFdmVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zb3VyY2Uvc3JjL2FwaS9lZGl0L3NvdXJjZS1ldmVudC5zZXJ2aWNlJztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktbGlzdC12aWV3W2l0ZW1zXSdcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdTb3VyY2VHYXRlIGV4dGVuZHMgU291cmNlR2F0ZSB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcm90ZWN0ZWQgcmVhZG9ubHkgc291cmNlQ29tbWFuZFNlcnZpY2U6IFNvdXJjZVB1Ymxpc2hlcixcblx0XHRcdFx0cHJvdGVjdGVkIHJlYWRvbmx5IHNvdXJjZUV2ZW50U2VydmljZTogU291cmNlRXZlbnRTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsIHNvdXJjZUNvbW1hbmRTZXJ2aWNlLCBzb3VyY2VFdmVudFNlcnZpY2UpO1xuXHR9XG5cbn1cbiJdfQ==