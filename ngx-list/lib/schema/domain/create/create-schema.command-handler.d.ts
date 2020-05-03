import { Type } from '@angular/core';
import { CreateAggregateCommandHandler } from '@generic-ui/hermes';
import { CreateSchemaCommand } from './create-schema.command';
import { SchemaAggregate } from '../schema.aggregate';
export declare class CreateSchemaCommandHandler implements CreateAggregateCommandHandler<SchemaAggregate, CreateSchemaCommand> {
    forCommand(): Type<CreateSchemaCommand>;
}
