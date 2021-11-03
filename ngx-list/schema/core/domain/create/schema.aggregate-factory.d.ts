import { AggregateFactory } from '@generic-ui/hermes';
import { SchemaAggregate } from '../schema.aggregate';
import { SchemaId } from '../schema.id';
import * as i0 from "@angular/core";
export declare class SchemaAggregateFactory extends AggregateFactory<SchemaId, SchemaAggregate> {
    constructor();
    create(aggregateId: SchemaId): SchemaAggregate;
    static ɵfac: i0.ɵɵFactoryDeclaration<SchemaAggregateFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SchemaAggregateFactory>;
}
//# sourceMappingURL=schema.aggregate-factory.d.ts.map