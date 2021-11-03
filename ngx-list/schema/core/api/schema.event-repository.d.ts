import { DomainEventBus, EventRepository, HermesObservable } from '@generic-ui/hermes';
import { SchemaReadModelRootId } from './schema.read-model-root-id';
import { SchemaTheme } from './theme/schema-theme';
import { SchemaRowColoring } from './row-coloring/schema-row-coloring';
import { SchemaId } from '../domain/schema.id';
import * as i0 from "@angular/core";
export declare abstract class SchemaEventRepository extends EventRepository<SchemaReadModelRootId, SchemaId> {
    protected constructor(domainEventBus: DomainEventBus);
    abstract onThemeChanged(schemaId: SchemaReadModelRootId): HermesObservable<SchemaTheme>;
    abstract onHorizontalGridChanged(schemaId: SchemaReadModelRootId): HermesObservable<boolean>;
    abstract onVerticalGridChanged(schemaId: SchemaReadModelRootId): HermesObservable<boolean>;
    abstract onRowColoring(schemaId: SchemaReadModelRootId): HermesObservable<SchemaRowColoring>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SchemaEventRepository, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SchemaEventRepository>;
}
//# sourceMappingURL=schema.event-repository.d.ts.map