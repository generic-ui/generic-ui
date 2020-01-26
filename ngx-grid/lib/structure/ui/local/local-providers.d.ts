import { CompositionCommandService } from '../../../composition/ui-api/composition.command-service';
import { PagingCommandService } from '../../ui-api/paging/paging-command.service';
import { LocalPagingCommandService } from './paging/local-paging-command.service';
import { LocalPagingReadModelService } from './paging/local-paging-read-model.service';
import { SchemaCommandService } from '../../ui-api/schema/schema-command.service';
import { LocalSchemaCommandService } from './schema/local-schema-command.service';
import { SchemaReadModelService } from '../../ui-api/schema/schema-read-model.service';
import { LocalSchemaReadModelService } from './schema/local-schema-read-model.service';
import { FormationCommandService } from '../../ui-api/formation/formation-command.service';
import { LocalFormationCommandService } from './formation/local-formation-command.service';
import { FormationReadModelService } from '../../ui-api/formation/formation-read-model.service';
import { LocalFormationReadModelService } from './formation/local-formation-read-model.service';
import { StructureCommandService } from '../../ui-api/structure/structure-command.service';
import { LocalStructureCommandService } from './structure/local-structure-command.service';
import { StructureReadModelService } from '../../ui-api/structure/structure-read-model.service';
import { LocalStructureReadModelService } from './structure/local-structure-read-model.service';
import { SourceCommandService } from '../../ui-api/source/source-command.service';
import { LocalSourceCommandService } from './source/local-source-command.service';
import { SourceReadModelService } from '../../ui-api/source/source-read-model.service';
import { LocalSourceReadModelService } from './source/local-source-read-model.service';
import { LocalCompositionCommandService } from './composition/local-composition-command.service';
import { CompositionReadModelService } from '../../../composition/ui-api/composition-read-model.service';
import { LocalCompositionReadModelService } from './composition/local-composition-read-model.service';
import { PagingReadModelService } from '../../ui-api/paging/paging-read-model.service';
export declare const localProviders: ({
    provide: typeof PagingCommandService;
    useClass: typeof LocalPagingCommandService;
} | {
    provide: typeof PagingReadModelService;
    useClass: typeof LocalPagingReadModelService;
} | {
    provide: typeof SchemaCommandService;
    useClass: typeof LocalSchemaCommandService;
} | {
    provide: typeof SchemaReadModelService;
    useClass: typeof LocalSchemaReadModelService;
} | {
    provide: typeof FormationCommandService;
    useClass: typeof LocalFormationCommandService;
} | {
    provide: typeof FormationReadModelService;
    useClass: typeof LocalFormationReadModelService;
} | {
    provide: typeof StructureCommandService;
    useClass: typeof LocalStructureCommandService;
} | {
    provide: typeof StructureReadModelService;
    useClass: typeof LocalStructureReadModelService;
} | {
    provide: typeof SourceCommandService;
    useClass: typeof LocalSourceCommandService;
} | {
    provide: typeof SourceReadModelService;
    useClass: typeof LocalSourceReadModelService;
} | {
    provide: typeof CompositionCommandService;
    useClass: typeof LocalCompositionCommandService;
} | {
    provide: typeof CompositionReadModelService;
    useClass: typeof LocalCompositionReadModelService;
})[];
