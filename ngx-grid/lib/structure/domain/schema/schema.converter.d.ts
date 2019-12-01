import { SchemaAggregate } from './command/schema-aggregate';
import { Schema } from './query/schema';
export declare class SchemaConverter {
    convert(aggregate: SchemaAggregate): Schema;
    private convertColumnHeader;
}
