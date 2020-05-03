import { Command } from '@generic-ui/hermes';
import { SchemaId } from '../../schema.id';
export declare class SetSchemaHorizontalGridCommand extends Command {
    private readonly enabled;
    constructor(schemaId: SchemaId, enabled: boolean);
    isEnabled(): boolean;
}
