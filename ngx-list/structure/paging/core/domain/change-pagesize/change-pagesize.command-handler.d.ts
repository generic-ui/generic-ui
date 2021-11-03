import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { ChangePagesizeCommand } from './change-pagesize.command';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
import * as i0 from "@angular/core";
export declare class ChangePagesizeCommandHandler implements CommandHandler<StructureAggregate, ChangePagesizeCommand> {
    protected domainEventPublisher: DomainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<ChangePagesizeCommand>;
    handle(structureAggregate: StructureAggregate, command: ChangePagesizeCommand): void;
    publish(aggregate: StructureAggregate, command: ChangePagesizeCommand): void;
    private publishAggregateEvents;
    private publishAggregateEvent;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChangePagesizeCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ChangePagesizeCommandHandler>;
}
//# sourceMappingURL=change-pagesize.command-handler.d.ts.map