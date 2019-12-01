import { FormationDispatcher } from '../../domain/formation/command/formation.dispatcher';
import { SetFormationCommandHandler } from '../../domain/formation/command/set/set-formation.command-handler';
import { ToggleSelectedRowCommandHandler } from '../../domain/formation/command/toggle/toggle-selected-row.command-handler';
import { FormationRepository } from '../../domain/formation/query/formation-repository';
import { FormationEventService } from './formation-event.service';
import { FormationConverter } from '../../domain/formation/formation.converter';
import { FormationCommandService } from './formation-command.service';
import { FormationQueryService } from './formation-query.service';
export declare const formationProviders: (typeof FormationDispatcher | typeof FormationCommandService | typeof FormationRepository | typeof FormationQueryService | typeof FormationEventService | typeof FormationConverter | {
    provide: string;
    useClass: typeof SetFormationCommandHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof ToggleSelectedRowCommandHandler;
    multi: boolean;
})[];
