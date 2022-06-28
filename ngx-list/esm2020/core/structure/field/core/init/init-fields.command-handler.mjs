import { CoreContainer, DomainEventPublisher } from '@generic-ui/hermes';
import { InitFieldsCommand } from './init-fields.command';
export class InitFieldsCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return InitFieldsCommand;
    }
    handle(structure, command) {
        const fieldConfigs = command.getFieldConfigs();
        structure.createFields(fieldConfigs);
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC1maWVsZHMuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL3N0cnVjdHVyZS9maWVsZC9jb3JlL2luaXQvaW5pdC1maWVsZHMuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBK0IsYUFBYSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdEcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFLMUQsTUFBTSxPQUFPLHdCQUF3QjtJQUFyQztRQUVrQix5QkFBb0IsR0FBeUIsYUFBYSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBa0IzRyxDQUFDO0lBaEJBLFVBQVU7UUFDVCxPQUFPLGlCQUFpQixDQUFDO0lBQzFCLENBQUM7SUFFRCxNQUFNLENBQUMsU0FBNkIsRUFBRSxPQUEwQjtRQUUvRCxNQUFNLFlBQVksR0FBdUIsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRW5FLFNBQVMsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELE9BQU8sQ0FBQyxTQUE2QixFQUFFLE9BQTBCO1FBQ2hFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzRCxDQUFDO0NBR0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgQ29tbWFuZFR5cGUsIENvcmVDb250YWluZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgSW5pdEZpZWxkc0NvbW1hbmQgfSBmcm9tICcuL2luaXQtZmllbGRzLmNvbW1hbmQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tICcuLi8uLi9hcGkvY29uZmlnL2ZpZWxkLmNvbmZpZyc7XG5cblxuZXhwb3J0IGNsYXNzIEluaXRGaWVsZHNDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgSW5pdEZpZWxkc0NvbW1hbmQ+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlciA9IENvcmVDb250YWluZXIucmVzb2x2ZShEb21haW5FdmVudFB1Ymxpc2hlcik7XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxJbml0RmllbGRzQ29tbWFuZD4ge1xuXHRcdHJldHVybiBJbml0RmllbGRzQ29tbWFuZDtcblx0fVxuXG5cdGhhbmRsZShzdHJ1Y3R1cmU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogSW5pdEZpZWxkc0NvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGZpZWxkQ29uZmlnczogQXJyYXk8RmllbGRDb25maWc+ID0gY29tbWFuZC5nZXRGaWVsZENvbmZpZ3MoKTtcblxuXHRcdHN0cnVjdHVyZS5jcmVhdGVGaWVsZHMoZmllbGRDb25maWdzKTtcblx0fVxuXG5cdHB1Ymxpc2goYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IEluaXRGaWVsZHNDb21tYW5kKTogdm9pZCB7XG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoRnJvbUFnZ3JlZ2F0ZShhZ2dyZWdhdGUpO1xuXHR9XG5cblxufVxuIl19