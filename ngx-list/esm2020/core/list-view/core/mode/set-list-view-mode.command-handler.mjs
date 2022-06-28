import { CoreContainer, DomainEventPublisher } from '@generic-ui/hermes';
import { SetListViewModeCommand } from './set-list-view-mode.command';
export class SetListViewModeCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return SetListViewModeCommand;
    }
    handle(listViewAggregate, command) {
        const mode = command.getMode();
        listViewAggregate.setMode(mode);
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWxpc3Qtdmlldy1tb2RlLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9saXN0LXZpZXcvY29yZS9tb2RlL3NldC1saXN0LXZpZXctbW9kZS5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUErQixhQUFhLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUt0RSxNQUFNLE9BQU8sNkJBQTZCO0lBQTFDO1FBRWtCLHlCQUFvQixHQUF5QixhQUFhLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFpQjNHLENBQUM7SUFmQSxVQUFVO1FBQ1QsT0FBTyxzQkFBc0IsQ0FBQztJQUMvQixDQUFDO0lBRUQsTUFBTSxDQUFDLGlCQUFvQyxFQUFFLE9BQStCO1FBRTNFLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUUvQixpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELE9BQU8sQ0FBQyxTQUE0QixFQUFFLE9BQXdCO1FBQzdELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzRCxDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgQ29tbWFuZFR5cGUsIENvcmVDb250YWluZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2V0TGlzdFZpZXdNb2RlQ29tbWFuZCB9IGZyb20gJy4vc2V0LWxpc3Qtdmlldy1tb2RlLmNvbW1hbmQnO1xuaW1wb3J0IHsgTGlzdFZpZXdBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi9kb21haW4vbGlzdC12aWV3LmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBMaXN0Vmlld0NvbW1hbmQgfSBmcm9tICcuLi9saXN0LXZpZXcuY29tbWFuZCc7XG5cblxuZXhwb3J0IGNsYXNzIFNldExpc3RWaWV3TW9kZUNvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8TGlzdFZpZXdBZ2dyZWdhdGUsIFNldExpc3RWaWV3TW9kZUNvbW1hbmQ+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlciA9IENvcmVDb250YWluZXIucmVzb2x2ZShEb21haW5FdmVudFB1Ymxpc2hlcik7XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxTZXRMaXN0Vmlld01vZGVDb21tYW5kPiB7XG5cdFx0cmV0dXJuIFNldExpc3RWaWV3TW9kZUNvbW1hbmQ7XG5cdH1cblxuXHRoYW5kbGUobGlzdFZpZXdBZ2dyZWdhdGU6IExpc3RWaWV3QWdncmVnYXRlLCBjb21tYW5kOiBTZXRMaXN0Vmlld01vZGVDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBtb2RlID0gY29tbWFuZC5nZXRNb2RlKCk7XG5cblx0XHRsaXN0Vmlld0FnZ3JlZ2F0ZS5zZXRNb2RlKG1vZGUpO1xuXHR9XG5cblx0cHVibGlzaChhZ2dyZWdhdGU6IExpc3RWaWV3QWdncmVnYXRlLCBjb21tYW5kOiBMaXN0Vmlld0NvbW1hbmQpOiB2b2lkIHtcblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2hGcm9tQWdncmVnYXRlKGFnZ3JlZ2F0ZSk7XG5cdH1cblxufVxuIl19