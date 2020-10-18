import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { SchemaThemeRepository } from './schema.theme.repository';
import { SchemaId } from '../../api/schema.id';
import { SchemaThemeSetEvent } from '../../domain/theme/schema-theme-set.event';
export declare class SchemaThemeSetEventHandler implements DomainEventHandler<SchemaId, SchemaThemeSetEvent> {
    private themeRepository;
    constructor(themeRepository: SchemaThemeRepository);
    forEvent(): DomainEventType<SchemaThemeSetEvent>;
    handle(event: SchemaThemeSetEvent): void;
}
