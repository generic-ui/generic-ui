import { DomainEventType, EventDrivenRepository } from '@generic-ui/hermes';
import { SchemaTheme } from '../../api/theme/schema-theme';
import { SchemaId } from '../../core/schema.id';
import { SchemaThemeSetEvent } from '../../core/theme/schema-theme-set.event';
export declare class SchemaThemeRepository extends EventDrivenRepository<SchemaId, SchemaThemeSetEvent, SchemaTheme> {
    constructor();
    forEvent(): DomainEventType<SchemaThemeSetEvent>;
}
