import { DomainEventType, EventDrivenRepository } from '@generic-ui/hermes';
import { SchemaTheme } from '../../api/theme/schema-theme';
import { SchemaId } from '../../domain/schema.id';
import { SchemaThemeSetEvent } from '../../domain/theme/schema-theme-set.event';
export declare class SchemaThemeRepository extends EventDrivenRepository<SchemaId, SchemaThemeSetEvent, SchemaTheme> {
    constructor();
    forEvent(): DomainEventType<SchemaThemeSetEvent>;
}
