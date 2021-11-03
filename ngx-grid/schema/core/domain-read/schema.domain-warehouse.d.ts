import { SchemaCssClassesRepository } from './css-classes/schema.css-classes.repository';
import { SchemaThemeRepository } from './theme/schema.theme.repository';
import { SchemaHorizontalGridRepository } from './horizontal-grid/schema.horizontal-grid.repository';
import { SchemaRowColoringRepository } from './row-coloring/schema.row-coloring.repository';
import { SchemaVerticalGridRepository } from './vertical-grid/schema.vertical-grid.repository';
import { SchemaReadModelRootId } from '../api/schema.read-model-root-id';
import { SchemaTheme } from '../api/theme/schema-theme';
import { SchemaRowColoring } from '../api/row-coloring/schema-row-coloring';
import { SchemaCssClass } from '../api/css-classes/schema-css-class';
import { SchemaWarehouse } from '../api/schema.warehouse';
import { HermesObservable } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export declare class SchemaDomainWarehouse extends SchemaWarehouse {
    private readonly schemaCssClassesRepository;
    private readonly schemaThemeRepository;
    private readonly schemaHorizontalGridRepository;
    private readonly schemaRowColoringRepository;
    private readonly schemaVerticalGridRepository;
    constructor(schemaCssClassesRepository: SchemaCssClassesRepository, schemaThemeRepository: SchemaThemeRepository, schemaHorizontalGridRepository: SchemaHorizontalGridRepository, schemaRowColoringRepository: SchemaRowColoringRepository, schemaVerticalGridRepository: SchemaVerticalGridRepository);
    onTheme(schemaId: SchemaReadModelRootId): HermesObservable<SchemaTheme>;
    onceTheme(schemaId: SchemaReadModelRootId): HermesObservable<SchemaTheme>;
    onHorizontalGrid(schemaId: SchemaReadModelRootId): HermesObservable<boolean>;
    onVerticalGrid(schemaId: SchemaReadModelRootId): HermesObservable<boolean>;
    onRowColoring(schemaId: SchemaReadModelRootId): HermesObservable<SchemaRowColoring>;
    onCssClasses(schemaId: SchemaReadModelRootId): HermesObservable<SchemaCssClass>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SchemaDomainWarehouse, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SchemaDomainWarehouse>;
}
//# sourceMappingURL=schema.domain-warehouse.d.ts.map