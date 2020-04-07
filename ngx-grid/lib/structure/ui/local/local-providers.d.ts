import { CompositionCommandDispatcher } from '../../../composition/ui-api/composition.command-dispatcher';
import { StructurePagingCommandDispatcher } from '../../ui-api/paging/structure-paging.command-dispatcher';
import { LocalPagingCommandDispatcher } from './paging/local-paging.command-dispatcher';
import { LocalPagingReadModelWarehouse } from './paging/local-paging.read-model-warehouse';
import { FormationCommandService } from '../../ui-api/formation/formation-command.service';
import { LocalFormationCommandDispatcher } from './formation/local-formation.command-dispatcher';
import { FormationReadModelService } from '../../ui-api/formation/formation-read-model.service';
import { LocalFormationReadModelWarehouse } from './formation/local-formation.read-model-warehouse';
import { StructureCommandDispatcher } from '../../ui-api/structure/structure.command-dispatcher';
import { LocalStructureCommandDispatcher } from './structure/local-structure.command-dispatcher';
import { StructureReadModelWarehouse } from '../../ui-api/structure/structure.read-model-warehouse';
import { LocalStructureReadModelWarehouse } from './structure/local-structure.read-model-warehouse';
import { SourceCommandDispatcher } from '../../ui-api/source/source.command-dispatcher';
import { LocalSourceCommandDispatcher } from './source/local-source.command-dispatcher';
import { StructureSourceReadModelWarehouse } from '../../ui-api/source/structure-source.read-model-warehouse';
import { LocalSourceReadModelWarehouse } from './source/local-source.read-model-warehouse';
import { LocalCompositionCommandDispatcher } from './composition/local-composition.command-dispatcher';
import { CompositionReadModelWarehouse } from '../../../composition/ui-api/composition.read-model-warehouse';
import { LocalCompositionReadModelWarehouse } from './composition/local-composition.read-model-warehouse';
import { StructurePagingReadModelWarehouse } from '../../ui-api/paging/structure-paging.read-model-warehouse';
import { StructureSearchDispatcher } from '../../domain/structure/search/structure.search.dispatcher';
import { LocalStructureSearchCommandDispatcher } from './search/local-structure-search.command-dispatcher';
import { SchemaReadModelWarehouse } from '../../../schema/ui-api/schema.read-model-warehouse';
import { LocalSchemaReadModelWarehouse } from './schema/local-schema.read-model-warehouse';
import { SchemaCommandDispatcher } from '../../../schema/ui-api/schema.command-dispatcher';
import { LocalSchemaCommandDispatcher } from './schema/local-schema.command-dispatcher';
export declare const localProviders: ({
    provide: typeof StructurePagingCommandDispatcher;
    useClass: typeof LocalPagingCommandDispatcher;
} | {
    provide: typeof StructurePagingReadModelWarehouse;
    useClass: typeof LocalPagingReadModelWarehouse;
} | {
    provide: typeof FormationCommandService;
    useClass: typeof LocalFormationCommandDispatcher;
} | {
    provide: typeof FormationReadModelService;
    useClass: typeof LocalFormationReadModelWarehouse;
} | {
    provide: typeof StructureCommandDispatcher;
    useClass: typeof LocalStructureCommandDispatcher;
} | {
    provide: typeof StructureReadModelWarehouse;
    useClass: typeof LocalStructureReadModelWarehouse;
} | {
    provide: typeof SourceCommandDispatcher;
    useClass: typeof LocalSourceCommandDispatcher;
} | {
    provide: typeof StructureSourceReadModelWarehouse;
    useClass: typeof LocalSourceReadModelWarehouse;
} | {
    provide: typeof CompositionCommandDispatcher;
    useClass: typeof LocalCompositionCommandDispatcher;
} | {
    provide: typeof CompositionReadModelWarehouse;
    useClass: typeof LocalCompositionReadModelWarehouse;
} | {
    provide: typeof StructureSearchDispatcher;
    useClass: typeof LocalStructureSearchCommandDispatcher;
} | {
    provide: typeof SchemaReadModelWarehouse;
    useClass: typeof LocalSchemaReadModelWarehouse;
} | {
    provide: typeof SchemaCommandDispatcher;
    useClass: typeof LocalSchemaCommandDispatcher;
})[];
