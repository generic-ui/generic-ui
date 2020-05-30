import { OnChanges, SimpleChanges } from '@angular/core';
import { SchemaTheme } from '../../../../../schema/domain/theme/schema-theme';
import { SchemaCommandDispatcher } from '../../../../../schema/domain-api/schema.command-dispatcher';
export declare class StructureThemeGateway implements OnChanges {
    private readonly schemaCommandDispatcher;
    theme2: SchemaTheme;
    constructor(schemaCommandDispatcher: SchemaCommandDispatcher);
    ngOnChanges(simpleChanges: SimpleChanges): void;
}
