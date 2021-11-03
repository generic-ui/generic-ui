import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SetSchemaVerticalGridCommand } from './set-schema-vertical-grid.command';
import { SchemaAggregate } from '../../schema.aggregate';
import * as i0 from "@angular/core";
export declare class SetSchemaVerticalGridCommandHandler implements CommandHandler<SchemaAggregate, SetSchemaVerticalGridCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetSchemaVerticalGridCommand>;
    handle(schemaAggregate: SchemaAggregate, command: SetSchemaVerticalGridCommand): void;
    publish(schemaAggregate: SchemaAggregate, command: SetSchemaVerticalGridCommand): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SetSchemaVerticalGridCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SetSchemaVerticalGridCommandHandler>;
}
//# sourceMappingURL=set-schema-vertical-grid.command-handler.d.ts.map