import { DomainEventBus, HermesObservable } from '@generic-ui/hermes';
import { SchemaReadModelRootId } from '../api/schema.read-model-root-id';
import { SchemaTheme } from '../api/theme/schema-theme';
import { SchemaRowColoring } from '../api/row-coloring/schema-row-coloring';
import { SchemaEventRepository } from '../api/schema.event-repository';
import * as i0 from "@angular/core";
export declare class SchemaDomainEventRepository extends SchemaEventRepository {
    constructor(domainEventBus: DomainEventBus);
    onThemeChanged(schemaId: SchemaReadModelRootId): HermesObservable<SchemaTheme>;
    onHorizontalGridChanged(schemaId: SchemaReadModelRootId): HermesObservable<boolean>;
    onVerticalGridChanged(schemaId: SchemaReadModelRootId): HermesObservable<boolean>;
    onRowColoring(schemaId: SchemaReadModelRootId): HermesObservable<SchemaRowColoring>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SchemaDomainEventRepository, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SchemaDomainEventRepository>;
}
//# sourceMappingURL=schema.domain-event-repository.d.ts.map