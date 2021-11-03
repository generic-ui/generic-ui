import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SetRowColoringCommand } from './set-row-coloring.command';
import { SchemaAggregate } from '../schema.aggregate';
import * as i0 from "@angular/core";
export declare class SetRowColoringCommandHandler implements CommandHandler<SchemaAggregate, SetRowColoringCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetRowColoringCommand>;
    handle(schemaAggregate: SchemaAggregate, command: SetRowColoringCommand): void;
    publish(aggregate: SchemaAggregate, command: SetRowColoringCommand): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SetRowColoringCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SetRowColoringCommandHandler>;
}
//# sourceMappingURL=set-row-coloring.command-handler.d.ts.map