import { CompositionCommandService } from '../api/composition/composition.command-service';
import { PagingCommandService } from '../../app/paging/paging-command.service';
import { LocalPagingCommandService } from './paging/local-paging-command.service';
import { LocalPagingQueryService } from './paging/local-paging-query.service';
import { SchemaCommandService } from '../../app/schema/schema-command.service';
import { LocalSchemaCommandService } from './schema/local-schema-command.service';
import { SchemaQueryService } from '../../app/schema/schema-query.service';
import { LocalSchemaQueryService } from './schema/local-schema-query.service';
import { FormationCommandService } from '../../app/formation/formation-command.service';
import { LocalFormationCommandService } from './formation/local-formation-command.service';
import { FormationQueryService } from '../../app/formation/formation-query.service';
import { LocalFormationQueryService } from './formation/local-formation-query.service';
import { StructureCommandService } from '../../app/structure/structure-command.service';
import { LocalStructureCommandService } from './structure/local-structure-command.service';
import { StructureQueryService } from '../../app/structure/structure-query.service';
import { LocalStructureQueryService } from './structure/local-structure-query.service';
import { SourceCommandService } from '../../app/source/source-command.service';
import { LocalSourceCommandService } from './source/local-source-command.service';
import { SourceQueryService } from '../../app/source/source-query.service';
import { LocalSourceQueryService } from './source/local-source-query.service';
import { LocalCompositionCommandService } from './composition/local-composition-command.service';
import { CompositionQueryService } from '../api/composition/composition.query-service';
import { LocalCompositionQueryService } from './composition/local-composition-query.service';
import { PagingQueryService } from '../../app/paging/paging-query.service';
export declare const localProviders: ({
    provide: typeof PagingCommandService;
    useClass: typeof LocalPagingCommandService;
} | {
    provide: typeof PagingQueryService;
    useClass: typeof LocalPagingQueryService;
} | {
    provide: typeof SchemaCommandService;
    useClass: typeof LocalSchemaCommandService;
} | {
    provide: typeof SchemaQueryService;
    useClass: typeof LocalSchemaQueryService;
} | {
    provide: typeof FormationCommandService;
    useClass: typeof LocalFormationCommandService;
} | {
    provide: typeof FormationQueryService;
    useClass: typeof LocalFormationQueryService;
} | {
    provide: typeof StructureCommandService;
    useClass: typeof LocalStructureCommandService;
} | {
    provide: typeof StructureQueryService;
    useClass: typeof LocalStructureQueryService;
} | {
    provide: typeof SourceCommandService;
    useClass: typeof LocalSourceCommandService;
} | {
    provide: typeof SourceQueryService;
    useClass: typeof LocalSourceQueryService;
} | {
    provide: typeof CompositionCommandService;
    useClass: typeof LocalCompositionCommandService;
} | {
    provide: typeof CompositionQueryService;
    useClass: typeof LocalCompositionQueryService;
})[];
