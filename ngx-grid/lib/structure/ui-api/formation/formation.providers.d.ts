import { FormationDispatcher } from '../../domain/formation/command/formation.dispatcher';
import { FormationRepository } from '../../domain/formation/read/formation-repository';
import { FormationAggregateFactory } from '../../domain/formation/command/formation.aggregate-factory';
import { FormationConverter } from '../../domain/formation/formation.converter';
import { FormationEventService } from './formation-event.service';
import { FormationCommandService } from './formation-command.service';
import { FormationReadModelService } from './formation-read-model.service';
export declare const formationCommandHandlers: import("@angular/core").Provider[];
export declare const formationProviders: (typeof FormationDispatcher | typeof FormationCommandService | typeof FormationRepository | typeof FormationReadModelService | typeof FormationConverter | typeof FormationEventService | typeof FormationAggregateFactory)[];
