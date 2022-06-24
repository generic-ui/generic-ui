import { Directive } from '@angular/core';
import { PagingGate } from '../../../../feature/structure/paging/gate/paging.gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/structure/core/api/global/structure.id";
import * as i2 from "../../../../core/composition/api/global/composition.id";
import * as i3 from "../../../../core/structure/paging/api/paging.publisher";
import * as i4 from "../../../../core/structure/paging/api/paging.event-repository";
export class ListViewPagingGate extends PagingGate {
    constructor(structureId, compositionId, structurePagingCommandDispatcher, pagingEventRepository) {
        super(structureId, compositionId, structurePagingCommandDispatcher, pagingEventRepository);
    }
}
ListViewPagingGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ListViewPagingGate, deps: [{ token: i1.StructureId }, { token: i2.CompositionId }, { token: i3.PagingPublisher }, { token: i4.PagingEventRepository }], target: i0.ɵɵFactoryTarget.Directive });
ListViewPagingGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: ListViewPagingGate, selector: "gui-list-view[paging]", usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ListViewPagingGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-list-view[paging]'
                }]
        }], ctorParameters: function () { return [{ type: i1.StructureId }, { type: i2.CompositionId }, { type: i3.PagingPublisher }, { type: i4.PagingEventRepository }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXBhZ2luZy5nYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlLXZpZXcvbGlzdC12aWV3L2dhdGUvcGFnaW5nL2xpc3Qtdmlldy1wYWdpbmcuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1REFBdUQsQ0FBQzs7Ozs7O0FBT25GLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxVQUFVO0lBRWpELFlBQVksV0FBd0IsRUFDakMsYUFBNEIsRUFDNUIsZ0NBQWlELEVBQ2pELHFCQUE0QztRQUM5QyxLQUFLLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxnQ0FBZ0MsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0lBQzVGLENBQUM7O2dIQVBXLGtCQUFrQjtvR0FBbEIsa0JBQWtCOzRGQUFsQixrQkFBa0I7a0JBSDlCLFNBQVM7bUJBQUM7b0JBQ1YsUUFBUSxFQUFFLHVCQUF1QjtpQkFDakMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGFnaW5nUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvcGFnaW5nL2FwaS9wYWdpbmcucHVibGlzaGVyJztcbmltcG9ydCB7IFBhZ2luZ0V2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3BhZ2luZy9hcGkvcGFnaW5nLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9jb3JlL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFBhZ2luZ0dhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9mZWF0dXJlL3N0cnVjdHVyZS9wYWdpbmcvZ2F0ZS9wYWdpbmcuZ2F0ZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9jb21wb3NpdGlvbi9hcGkvZ2xvYmFsL2NvbXBvc2l0aW9uLmlkJztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktbGlzdC12aWV3W3BhZ2luZ10nXG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3UGFnaW5nR2F0ZSBleHRlbmRzIFBhZ2luZ0dhdGUge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0Y29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0c3RydWN0dXJlUGFnaW5nQ29tbWFuZERpc3BhdGNoZXI6IFBhZ2luZ1B1Ymxpc2hlcixcblx0XHRcdFx0cGFnaW5nRXZlbnRSZXBvc2l0b3J5OiBQYWdpbmdFdmVudFJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCwgY29tcG9zaXRpb25JZCwgc3RydWN0dXJlUGFnaW5nQ29tbWFuZERpc3BhdGNoZXIsIHBhZ2luZ0V2ZW50UmVwb3NpdG9yeSk7XG5cdH1cblxufVxuIl19