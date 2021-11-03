import { Directive } from '@angular/core';
import { SourceGate } from '../../../../source/feature/gate/source.gate';
import { StructureId } from '../../../../core/api/structure.id';
import { SourceCommandInvoker } from '../../../../source/core/api/source.command-invoker';
import { SourceEventService } from '../../../../source/core/api/event/source-event.service';
export class ListViewSourceGate extends SourceGate {
    constructor(structureId, sourceCommandService, sourceEventService) {
        super(structureId, sourceCommandService, sourceEventService);
        this.sourceCommandService = sourceCommandService;
        this.sourceEventService = sourceEventService;
    }
}
ListViewSourceGate.decorators = [
    { type: Directive, args: [{
                selector: 'gui-list-view[items]'
            },] }
];
ListViewSourceGate.ctorParameters = () => [
    { type: StructureId },
    { type: SourceCommandInvoker },
    { type: SourceEventService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXNvdXJjZS5nYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2dhdGUvc291cmNlL2xpc3Qtdmlldy1zb3VyY2UuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDMUYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFNNUYsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFVBQVU7SUFFakQsWUFBWSxXQUF3QixFQUNkLG9CQUEwQyxFQUMxQyxrQkFBc0M7UUFDM0QsS0FBSyxDQUFDLFdBQVcsRUFBRSxvQkFBb0IsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRnhDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUU1RCxDQUFDOzs7WUFURCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHNCQUFzQjthQUNoQzs7O1lBUFEsV0FBVztZQUNYLG9CQUFvQjtZQUNwQixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU291cmNlR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9mZWF0dXJlL2dhdGUvc291cmNlLmdhdGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU291cmNlQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvc291cmNlLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTb3VyY2VFdmVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvZXZlbnQvc291cmNlLWV2ZW50LnNlcnZpY2UnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1saXN0LXZpZXdbaXRlbXNdJ1xufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld1NvdXJjZUdhdGUgZXh0ZW5kcyBTb3VyY2VHYXRlIHtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByb3RlY3RlZCByZWFkb25seSBzb3VyY2VDb21tYW5kU2VydmljZTogU291cmNlQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByb3RlY3RlZCByZWFkb25seSBzb3VyY2VFdmVudFNlcnZpY2U6IFNvdXJjZUV2ZW50U2VydmljZSkge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCBzb3VyY2VDb21tYW5kU2VydmljZSwgc291cmNlRXZlbnRTZXJ2aWNlKTtcblx0fVxuXG59XG4iXX0=