import { FormationDispatcher } from 'structure/domain/formation/command/formation.dispatcher';
import { ToggleSelectedRowCommandHandler } from 'structure/domain/formation/command/toggle/toggle-selected-row.command-handler';
import { FormationRepository } from 'structure/domain/formation/query/formation-repository';
import { FormationCommandService } from 'structure/app/formation/formation-command.service';
import { FormationQueryService } from 'structure/app/formation/formation-query.service';
import { SetFormationCommandHandler } from 'structure/domain/formation/command/set/set-formation.command-handler';
import { FormationConverter } from 'structure/domain/formation/formation.converter';
export declare const formationProviders: (typeof FormationDispatcher | typeof FormationCommandService | typeof FormationRepository | typeof FormationQueryService | typeof FormationConverter | {
    provide: string;
    useClass: typeof SetFormationCommandHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof ToggleSelectedRowCommandHandler;
    multi: boolean;
})[];
