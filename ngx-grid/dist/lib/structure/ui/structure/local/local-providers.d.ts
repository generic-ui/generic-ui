import { LocalPagingCommandService } from 'structure/ui/structure/local/paging/local-paging-command.service';
import { LocalPagingQueryService } from 'structure/ui/structure/local/paging/local-paging-query.service';
import { LocalOriginCommandService } from 'structure/ui/structure/local/origin/local-origin-command.service';
import { LocalOriginQueryService } from 'structure/ui/structure/local/origin/local-origin-query.service';
import { LocalSchemaCommandService } from 'structure/ui/structure/local/schema/local-schema-command.service';
import { LocalSchemaQueryService } from 'structure/ui/structure/local/schema/local-schema-query.service';
import { LocalFormationCommandService } from 'structure/ui/structure/local/formation/local-formation-command.service';
import { LocalFormationQueryService } from 'structure/ui/structure/local/formation/local-formation-query.service';
import { LocalStructureCommandService } from 'structure/ui/structure/local/structure/local-structure-command.service';
import { LocalStructureQueryService } from 'structure/ui/structure/local/structure/local-structure-query.service';
import { LocalPresentationCommandService } from 'structure/ui/structure/local/presentation/local-presentation-command.service';
import { LocalPresentationQueryService } from 'structure/ui/structure/local/presentation/local-presentation-query.service';
import { FormationCommandService } from 'structure/app/formation/formation-command.service';
import { FormationQueryService } from 'structure/app/formation/formation-query.service';
import { SchemaCommandService } from 'structure/app/schema/schema-command.service';
import { SchemaQueryService } from 'structure/app/schema/schema-query.service';
import { OriginQueryService } from 'structure/app/origin/origin-query.service';
import { OriginCommandService } from 'structure/app/origin/origin-command.service';
import { PagingCommandService } from 'structure/app/paging/paging-command.service';
import { PagingQueryService } from 'structure/app/paging/paging-query.service';
import { PresentationCommandService } from 'structure/app/presentation/presentation-command.service';
import { PresentationQueryService } from 'structure/app/presentation/presentation-query.service';
import { StructureCommandService } from 'structure/app/structure/structure-command.service';
import { StructureQueryService } from 'structure/app/structure/structure-query.service';
export declare const localProviders: ({
    provide: typeof PagingCommandService;
    useClass: typeof LocalPagingCommandService;
} | {
    provide: typeof PagingQueryService;
    useClass: typeof LocalPagingQueryService;
} | {
    provide: typeof OriginCommandService;
    useClass: typeof LocalOriginCommandService;
} | {
    provide: typeof OriginQueryService;
    useClass: typeof LocalOriginQueryService;
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
    provide: typeof PresentationCommandService;
    useClass: typeof LocalPresentationCommandService;
} | {
    provide: typeof PresentationQueryService;
    useClass: typeof LocalPresentationQueryService;
} | {
    provide: typeof StructureCommandService;
    useClass: typeof LocalStructureCommandService;
} | {
    provide: typeof StructureQueryService;
    useClass: typeof LocalStructureQueryService;
})[];
