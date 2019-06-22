import { Schema } from 'structure/domain/schema/query/schema';
import { SchemaAggregate } from 'structure/domain/schema/command/schema-aggregate';
export declare class SchemaConverter {
    convert(aggregate: SchemaAggregate): Schema;
    private convertColumnHeader;
}
