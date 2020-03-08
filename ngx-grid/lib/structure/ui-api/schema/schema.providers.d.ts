import { SchemaDispatcher } from '../../domain/schema/command/schema.dispatcher';
import { SchemaRepository } from '../../domain/schema/read/schema-repository';
import { SchemaConverter } from '../../domain/schema/schema.converter';
import { SchemaCommandService } from './schema-command.service';
import { SchemaReadModelService } from './schema-read-model.service';
import { SchemaAggregateFactory } from '../../domain/schema/command/schema.aggregate-factory';
export declare const schemaCommandHandlers: import("@angular/core").Provider[];
export declare const schemaProviders: (typeof SchemaDispatcher | typeof SchemaRepository | typeof SchemaReadModelService | typeof SchemaCommandService | typeof SchemaConverter | typeof SchemaAggregateFactory)[];
