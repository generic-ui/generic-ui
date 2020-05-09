import { Command } from '@generic-ui/hermes';
import { SchemaId } from '../../schema.id';
export declare class SetSchemaVerticalGridCommand extends Command {
    private readonly enabled;
    constructor(schemaId: SchemaId, enabled: boolean);
    isEnabled(): boolean;
}
