import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SetSchemaHorizontalGridCommand } from './set-schema-horizontal-grid.command';
import { SchemaAggregate } from '../../schema.aggregate';
import * as i0 from "@angular/core";
export declare class SetSchemaHorizontalGridCommandHandler implements CommandHandler<SchemaAggregate, SetSchemaHorizontalGridCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetSchemaHorizontalGridCommand>;
    handle(schemaAggregate: SchemaAggregate, command: SetSchemaHorizontalGridCommand): void;
    publish(schemaAggregate: SchemaAggregate, command: SetSchemaHorizontalGridCommand): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SetSchemaHorizontalGridCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SetSchemaHorizontalGridCommandHandler>;
}
//# sourceMappingURL=set-schema-horizontal-grid.command-handler.d.ts.map