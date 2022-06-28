import { CoreContainer, DomainEventPublisher } from '@generic-ui/hermes';
import { SetEnabledSelectionCommand } from './set-enabled-selection.command';
export class SetEnabledSelectionCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return SetEnabledSelectionCommand;
    }
    handle(aggregate, command) {
        aggregate.setSelection(command.isEnabled());
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWVuYWJsZWQtc2VsZWN0aW9uLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL2NvcmUvc2V0LWVuYWJsZWQvc2V0LWVuYWJsZWQtc2VsZWN0aW9uLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQStCLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXRHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBSTdFLE1BQU0sT0FBTyxpQ0FBaUM7SUFBOUM7UUFFa0IseUJBQW9CLEdBQXlCLGFBQWEsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQWMzRyxDQUFDO0lBWkEsVUFBVTtRQUNULE9BQU8sMEJBQTBCLENBQUM7SUFDbkMsQ0FBQztJQUVELE1BQU0sQ0FBQyxTQUE2QixFQUFFLE9BQW1DO1FBQ3hFLFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELE9BQU8sQ0FBQyxTQUE2QixFQUFFLE9BQW1DO1FBQ3pFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzRCxDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgQ29tbWFuZFR5cGUsIENvcmVDb250YWluZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2V0RW5hYmxlZFNlbGVjdGlvbkNvbW1hbmQgfSBmcm9tICcuL3NldC1lbmFibGVkLXNlbGVjdGlvbi5jb21tYW5kJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS1jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcblxuXG5leHBvcnQgY2xhc3MgU2V0RW5hYmxlZFNlbGVjdGlvbkNvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8U3RydWN0dXJlQWdncmVnYXRlLCBTZXRFbmFibGVkU2VsZWN0aW9uQ29tbWFuZD4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyID0gQ29yZUNvbnRhaW5lci5yZXNvbHZlKERvbWFpbkV2ZW50UHVibGlzaGVyKTtcblxuXHRmb3JDb21tYW5kKCk6IENvbW1hbmRUeXBlPFNldEVuYWJsZWRTZWxlY3Rpb25Db21tYW5kPiB7XG5cdFx0cmV0dXJuIFNldEVuYWJsZWRTZWxlY3Rpb25Db21tYW5kO1xuXHR9XG5cblx0aGFuZGxlKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBTZXRFbmFibGVkU2VsZWN0aW9uQ29tbWFuZCk6IHZvaWQge1xuXHRcdGFnZ3JlZ2F0ZS5zZXRTZWxlY3Rpb24oY29tbWFuZC5pc0VuYWJsZWQoKSk7XG5cdH1cblxuXHRwdWJsaXNoKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBTZXRFbmFibGVkU2VsZWN0aW9uQ29tbWFuZCk6IHZvaWQge1xuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaEZyb21BZ2dyZWdhdGUoYWdncmVnYXRlKTtcblx0fVxuXG59XG4iXX0=