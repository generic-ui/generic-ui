import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SetSchemaThemeCommand } from './set-schema-theme.command';
import { SchemaAggregate } from '../schema.aggregate';
import * as i0 from "@angular/core";
export declare class SetSchemaThemeCommandHandler implements CommandHandler<SchemaAggregate, SetSchemaThemeCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetSchemaThemeCommand>;
    handle(schemaAggregate: SchemaAggregate, command: SetSchemaThemeCommand): void;
    publish(aggregate: SchemaAggregate, command: SetSchemaThemeCommand): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SetSchemaThemeCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SetSchemaThemeCommandHandler>;
}
//# sourceMappingURL=set-schema-theme.command-handler.d.ts.map