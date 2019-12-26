import { FormationDispatcher } from '../../domain/formation/command/formation.dispatcher';
import { SetFormationCommandHandler } from '../../domain/formation/command/set/set-formation.command-handler';
import { ToggleSelectedRowCommandHandler } from '../../domain/formation/command/toggle/toggle-selected-row.command-handler';
import { FormationRepository } from '../../domain/formation/read/formation-repository';
import { FormationAggregateFactory } from '../../domain/formation/command/formation.aggregate-factory';
import { FormationConverter } from '../../domain/formation/formation.converter';
import { FormationEventService } from './formation-event.service';
import { FormationCommandService } from './formation-command.service';
import { FormationReadModelService } from './formation-read-model.service';
export declare const formationProviders: (typeof FormationDispatcher | typeof FormationCommandService | typeof FormationRepository | typeof FormationReadModelService | typeof FormationEventService | typeof FormationConverter | typeof FormationAggregateFactory | {
    provide: string;
    useClass: typeof SetFormationCommandHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof ToggleSelectedRowCommandHandler;
    multi: boolean;
})[];
