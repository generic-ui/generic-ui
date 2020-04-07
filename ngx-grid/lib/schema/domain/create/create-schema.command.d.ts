import { Command } from '@generic-ui/hermes';
import { SchemaId } from '../schema.id';
export declare class CreateSchemaCommand extends Command {
    private readonly schemaId;
    constructor(schemaId: SchemaId);
}
