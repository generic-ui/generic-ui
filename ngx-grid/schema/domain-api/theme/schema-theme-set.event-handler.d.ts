import { DomainEventHandler } from '@generic-ui/hermes';
import { SchemaThemeRepository } from './schema.theme.repository';
import { SchemaId } from '../../domain/schema.id';
import { SchemaThemeSetEvent } from '../../domain/theme/schema-theme-set.event';
export declare class SchemaThemeSetEventHandler extends DomainEventHandler<SchemaId, SchemaThemeSetEvent> {
    private themeRepository;
    constructor(themeRepository: SchemaThemeRepository);
    handle(event: SchemaThemeSetEvent): void;
}
