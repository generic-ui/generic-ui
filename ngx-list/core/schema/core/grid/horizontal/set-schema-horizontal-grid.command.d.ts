import { SchemaId } from '../../schema.id';
import { SchemaCommand } from '../../schema.command';
export declare class SetSchemaHorizontalGridCommand extends SchemaCommand {
    private readonly enabled;
    constructor(schemaId: SchemaId, enabled: boolean);
    isEnabled(): boolean;
}
