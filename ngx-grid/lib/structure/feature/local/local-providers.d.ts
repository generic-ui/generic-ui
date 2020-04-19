import { CompositionCommandDispatcher } from '../../../composition/feature-api/composition.command-dispatcher';
import { StructurePagingCommandDispatcher } from '../../feature-api/paging/structure-paging.command-dispatcher';
import { LocalPagingCommandDispatcher } from './paging/local-paging.command-dispatcher';
import { LocalPagingWarehouse } from './paging/local-paging.warehouse';
import { StructureFormationDispatcher } from '../../feature-api/formation/structure-formation.dispatcher';
import { LocalFormationCommandDispatcher } from './formation/local-formation.command-dispatcher';
import { StructureFormationWarehouse } from '../../feature-api/formation/structure-formation.warehouse';
import { LocalFormationWarehouse } from './formation/local-formation.warehouse';
import { StructureCommandDispatcher } from '../../feature-api/structure.command-dispatcher';
import { LocalStructureCommandDispatcher } from './structure/local-structure.command-dispatcher';
import { StructureWarehouse } from '../../feature-api/structure.warehouse';
import { LocalStructureWarehouse } from './structure/local-structure.warehouse';
import { SourceCommandDispatcher } from '../../feature-api/source/source.command-dispatcher';
import { LocalSourceCommandDispatcher } from './source/local-source.command-dispatcher';
import { StructureSourceWarehouse } from '../../feature-api/source/structure-source.warehouse';
import { LocalSourceWarehouse } from './source/local-source.warehouse';
import { LocalCompositionCommandDispatcher } from './composition/local-composition.command-dispatcher';
import { CompositionWarehouse } from '../../../composition/feature-api/composition.warehouse';
import { LocalCompositionWarehouse } from './composition/local-composition.warehouse';
import { StructurePagingWarehouse } from '../../feature-api/paging/structure-paging.warehouse';
import { StructureSearchDispatcher } from '../../domain/structure/search/structure.search.dispatcher';
import { LocalStructureSearchCommandDispatcher } from './search/local-structure-search.command-dispatcher';
import { SchemaWarehouse } from '../../../schema/feature-api/schema.warehouse';
import { LocalSchemaWarehouse } from './schema/local-schema.warehouse';
import { SchemaCommandDispatcher } from '../../../schema/feature-api/schema.command-dispatcher';
import { LocalSchemaCommandDispatcher } from './schema/local-schema.command-dispatcher';
import { StructureVerticalFormationWarehouse } from '../../feature-api/vertical-formation/structure-vertical-formation.warehouse';
import { LocalStructureVerticalFormationWarehouse } from './vertical-formation/local-structure-vertical-formation.warehouse';
export declare const localProviders: ({
    provide: typeof StructurePagingCommandDispatcher;
    useClass: typeof LocalPagingCommandDispatcher;
} | {
    provide: typeof StructurePagingWarehouse;
    useClass: typeof LocalPagingWarehouse;
} | {
    provide: typeof StructureFormationDispatcher;
    useClass: typeof LocalFormationCommandDispatcher;
} | {
    provide: typeof StructureFormationWarehouse;
    useClass: typeof LocalFormationWarehouse;
} | {
    provide: typeof StructureCommandDispatcher;
    useClass: typeof LocalStructureCommandDispatcher;
} | {
    provide: typeof StructureWarehouse;
    useClass: typeof LocalStructureWarehouse;
} | {
    provide: typeof SourceCommandDispatcher;
    useClass: typeof LocalSourceCommandDispatcher;
} | {
    provide: typeof StructureSourceWarehouse;
    useClass: typeof LocalSourceWarehouse;
} | {
    provide: typeof CompositionCommandDispatcher;
    useClass: typeof LocalCompositionCommandDispatcher;
} | {
    provide: typeof CompositionWarehouse;
    useClass: typeof LocalCompositionWarehouse;
} | {
    provide: typeof StructureSearchDispatcher;
    useClass: typeof LocalStructureSearchCommandDispatcher;
} | {
    provide: typeof StructureVerticalFormationWarehouse;
    useClass: typeof LocalStructureVerticalFormationWarehouse;
} | {
    provide: typeof SchemaWarehouse;
    useClass: typeof LocalSchemaWarehouse;
} | {
    provide: typeof SchemaCommandDispatcher;
    useClass: typeof LocalSchemaCommandDispatcher;
})[];
