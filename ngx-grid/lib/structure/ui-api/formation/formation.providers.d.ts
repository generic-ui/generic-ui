import { FormationDispatcher } from '../../domain/formation/formation.dispatcher';
import { FormationRepository } from '../../read/formation/formation-repository';
import { FormationAggregateFactory } from '../../domain/formation/formation.aggregate-factory';
import { FormationConverter } from '../../read/formation/formation.converter';
import { FormationEventService } from './formation-event.service';
import { StructureFormationDispatcher } from './structure-formation.dispatcher';
import { StructureFormationWarehouse } from './structure-formation.warehouse';
export declare const formationCommandHandlers: import("@angular/core").Provider[];
export declare const formationProviders: (typeof FormationDispatcher | typeof StructureFormationDispatcher | typeof FormationRepository | typeof StructureFormationWarehouse | typeof FormationConverter | typeof FormationEventService | typeof FormationAggregateFactory)[];
