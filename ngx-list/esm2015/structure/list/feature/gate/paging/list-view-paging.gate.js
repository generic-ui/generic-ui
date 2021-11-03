import { Directive } from '@angular/core';
import { PagingCommandInvoker } from '../../../../paging/core/api/paging.command-invoker';
import { PagingEventRepository } from '../../../../paging/core/api/paging.event-repository';
import { StructureId } from '../../../../core/api/structure.id';
import { PagingGate } from '../../../../paging/feature/gate/paging.gate';
import { CompositionId } from '../../../../../composition/core/api/composition.id';
export class ListViewPagingGate extends PagingGate {
    constructor(structureId, compositionId, structurePagingCommandDispatcher, pagingEventRepository) {
        super(structureId, compositionId, structurePagingCommandDispatcher, pagingEventRepository);
    }
}
ListViewPagingGate.decorators = [
    { type: Directive, args: [{
                selector: 'gui-list-view[paging]'
            },] }
];
ListViewPagingGate.ctorParameters = () => [
    { type: StructureId },
    { type: CompositionId },
    { type: PagingCommandInvoker },
    { type: PagingEventRepository }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXBhZ2luZy5nYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2dhdGUvcGFnaW5nL2xpc3Qtdmlldy1wYWdpbmcuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDekUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBTW5GLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxVQUFVO0lBRWpELFlBQVksV0FBd0IsRUFDakMsYUFBNEIsRUFDNUIsZ0NBQXNELEVBQ3RELHFCQUE0QztRQUM5QyxLQUFLLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxnQ0FBZ0MsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0lBQzVGLENBQUM7OztZQVZELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsdUJBQXVCO2FBQ2pDOzs7WUFQUSxXQUFXO1lBRVgsYUFBYTtZQUpiLG9CQUFvQjtZQUNwQixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGFnaW5nQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9wYWdpbmcvY29yZS9hcGkvcGFnaW5nLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBQYWdpbmdFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9wYWdpbmcvY29yZS9hcGkvcGFnaW5nLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUGFnaW5nR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL3BhZ2luZy9mZWF0dXJlL2dhdGUvcGFnaW5nLmdhdGUnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLmlkJztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktbGlzdC12aWV3W3BhZ2luZ10nXG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3UGFnaW5nR2F0ZSBleHRlbmRzIFBhZ2luZ0dhdGUge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0Y29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0c3RydWN0dXJlUGFnaW5nQ29tbWFuZERpc3BhdGNoZXI6IFBhZ2luZ0NvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwYWdpbmdFdmVudFJlcG9zaXRvcnk6IFBhZ2luZ0V2ZW50UmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCBjb21wb3NpdGlvbklkLCBzdHJ1Y3R1cmVQYWdpbmdDb21tYW5kRGlzcGF0Y2hlciwgcGFnaW5nRXZlbnRSZXBvc2l0b3J5KTtcblx0fVxuXG59XG4iXX0=