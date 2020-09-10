import { CompositionCommandInvoker } from '../../../../composition/domain-api/composition.command-invoker';
import { PagingCommandInvoker } from '../../../paging/domain-api/paging.command-invoker';
import { LocalPagingCommandDispatcher } from './paging/local-paging.command-dispatcher';
import { LocalPagingWarehouse } from './paging/local-paging.warehouse';
import { FormationCommandInvoker } from '../../../source/domain-api/formation/formation.command-invoker';
import { LocalFormationCommandDispatcher } from './formation/local-formation.command-dispatcher';
import { FormationWarehouse } from '../../../source/domain-api/formation/formation.warehouse';
import { LocalFormationWarehouse } from './formation/local-formation.warehouse';
import { StructureCommandDispatcher } from '../../domain-api/structure.command-dispatcher';
import { LocalStructureCommandDispatcher } from './structure/local-structure.command-dispatcher';
import { StructureWarehouse } from '../../domain-api/structure.warehouse';
import { LocalStructureWarehouse } from './structure/local-structure.warehouse';
import { SourceCommandInvoker } from '../../../source/domain-api/source.command-invoker';
import { LocalSourceCommandDispatcher } from './source/local-source.command-dispatcher';
import { SourceWarehouse } from '../../../source/domain-api/source.warehouse';
import { LocalSourceWarehouse } from './source/local-source.warehouse';
import { LocalCompositionCommandDispatcher } from './composition/local-composition.command-dispatcher';
import { CompositionWarehouse } from '../../../../composition/domain-api/composition.warehouse';
import { LocalCompositionWarehouse } from './composition/local-composition.warehouse';
import { PagingWarehouse } from '../../../paging/domain-api/paging.warehouse';
import { SearchDispatcher } from '../../../search/domain/search.dispatcher';
import { LocalStructureSearchCommandDispatcher } from './search/local-structure-search.command-dispatcher';
import { SchemaWarehouse } from '../../../../schema/domain-api/schema.warehouse';
import { LocalSchemaWarehouse } from './schema/local-schema.warehouse';
import { SchemaCommandInvoker } from '../../../../schema/domain-api/schema.command-invoker';
import { LocalSchemaCommandDispatcher } from './schema/local-schema.command-dispatcher';
import { StructureVerticalFormationWarehouse } from '../../domain-api/vertical-formation/structure-vertical-formation.warehouse';
import { LocalStructureVerticalFormationWarehouse } from './vertical-formation/local-structure-vertical-formation.warehouse';
import { Provider } from '@angular/core';
export declare const localProviders: ({
    provide: typeof PagingCommandInvoker;
    useClass: typeof LocalPagingCommandDispatcher;
} | {
    provide: typeof PagingWarehouse;
    useClass: typeof LocalPagingWarehouse;
} | {
    provide: typeof FormationCommandInvoker;
    useClass: typeof LocalFormationCommandDispatcher;
} | {
    provide: typeof FormationWarehouse;
    useClass: typeof LocalFormationWarehouse;
} | {
    provide: typeof StructureCommandDispatcher;
    useClass: typeof LocalStructureCommandDispatcher;
} | {
    provide: typeof StructureWarehouse;
    useClass: typeof LocalStructureWarehouse;
} | {
    provide: typeof SourceCommandInvoker;
    useClass: typeof LocalSourceCommandDispatcher;
} | {
    provide: typeof SourceWarehouse;
    useClass: typeof LocalSourceWarehouse;
} | {
    provide: typeof CompositionCommandInvoker;
    useClass: typeof LocalCompositionCommandDispatcher;
} | {
    provide: typeof CompositionWarehouse;
    useClass: typeof LocalCompositionWarehouse;
} | {
    provide: typeof SearchDispatcher;
    useClass: typeof LocalStructureSearchCommandDispatcher;
} | {
    provide: typeof StructureVerticalFormationWarehouse;
    useClass: typeof LocalStructureVerticalFormationWarehouse;
} | {
    provide: typeof SchemaWarehouse;
    useClass: typeof LocalSchemaWarehouse;
} | {
    provide: typeof SchemaCommandInvoker;
    useClass: typeof LocalSchemaCommandDispatcher;
})[];
export declare function provideComponentServices(): Array<Provider>;
