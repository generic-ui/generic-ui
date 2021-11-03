import { CommandType, CreateAggregateCommandHandler } from '@generic-ui/hermes';
import { CreateSchemaCommand } from './create-schema.command';
import { SchemaAggregate } from '../schema.aggregate';
import * as i0 from "@angular/core";
export declare class CreateSchemaCommandHandler implements CreateAggregateCommandHandler<SchemaAggregate, CreateSchemaCommand> {
    forCommand(): CommandType<CreateSchemaCommand>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CreateSchemaCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CreateSchemaCommandHandler>;
}
//# sourceMappingURL=create-schema.command-handler.d.ts.map