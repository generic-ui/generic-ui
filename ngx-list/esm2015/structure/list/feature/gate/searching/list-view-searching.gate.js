import { Directive } from '@angular/core';
import { StructureId } from '../../../../core/api/structure.id';
import { SearchCommandInvoker } from '../../../../search/core/api/search.command-invoker';
import { SearchEventRepository } from '../../../../search/core/api/search.event-repository';
import { SearchingGate } from '../../../../search/feature/gate/searching.gate';
export class ListViewSearchingGate extends SearchingGate {
    constructor(structureId, searchEventRepository, searchCommandInvoker) {
        super(structureId, searchEventRepository, searchCommandInvoker);
    }
}
ListViewSearchingGate.decorators = [
    { type: Directive, args: [{
                selector: 'gui-list-view[searching]'
            },] }
];
ListViewSearchingGate.ctorParameters = () => [
    { type: StructureId },
    { type: SearchEventRepository },
    { type: SearchCommandInvoker }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXNlYXJjaGluZy5nYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2dhdGUvc2VhcmNoaW5nL2xpc3Qtdmlldy1zZWFyY2hpbmcuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMxRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUM1RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFNL0UsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGFBQWE7SUFFdkQsWUFBWSxXQUF3QixFQUNqQyxxQkFBNEMsRUFDNUMsb0JBQTBDO1FBQzVDLEtBQUssQ0FBQyxXQUFXLEVBQUUscUJBQXFCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7WUFURCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDBCQUEwQjthQUNwQzs7O1lBUlEsV0FBVztZQUVYLHFCQUFxQjtZQURyQixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU2VhcmNoQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zZWFyY2gvY29yZS9hcGkvc2VhcmNoLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTZWFyY2hFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9zZWFyY2gvY29yZS9hcGkvc2VhcmNoLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2VhcmNoaW5nR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlYXJjaC9mZWF0dXJlL2dhdGUvc2VhcmNoaW5nLmdhdGUnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1saXN0LXZpZXdbc2VhcmNoaW5nXSdcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdTZWFyY2hpbmdHYXRlIGV4dGVuZHMgU2VhcmNoaW5nR2F0ZSB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRzZWFyY2hFdmVudFJlcG9zaXRvcnk6IFNlYXJjaEV2ZW50UmVwb3NpdG9yeSxcblx0XHRcdFx0c2VhcmNoQ29tbWFuZEludm9rZXI6IFNlYXJjaENvbW1hbmRJbnZva2VyKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsIHNlYXJjaEV2ZW50UmVwb3NpdG9yeSwgc2VhcmNoQ29tbWFuZEludm9rZXIpO1xuXHR9XG5cbn1cbiJdfQ==