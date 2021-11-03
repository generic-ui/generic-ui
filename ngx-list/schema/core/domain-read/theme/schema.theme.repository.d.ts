import { DomainEventType, EventDrivenRepository } from '@generic-ui/hermes';
import { SchemaTheme } from '../../api/theme/schema-theme';
import { SchemaId } from '../../domain/schema.id';
import { SchemaThemeSetEvent } from '../../domain/theme/schema-theme-set.event';
import * as i0 from "@angular/core";
export declare class SchemaThemeRepository extends EventDrivenRepository<SchemaId, SchemaThemeSetEvent, SchemaTheme> {
    constructor();
    forEvent(): DomainEventType<SchemaThemeSetEvent>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SchemaThemeRepository, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SchemaThemeRepository>;
}
//# sourceMappingURL=schema.theme.repository.d.ts.map