import { OnChanges, SimpleChanges } from '@angular/core';
import { SchemaTheme } from '../../../../../schema/domain/theme/schema-theme';
import { SchemaCommandInvoker } from '../../../../../schema/domain-api/schema.command-invoker';
export declare class StructureThemeGateway implements OnChanges {
    private readonly schemaCommandDispatcher;
    theme2: SchemaTheme;
    constructor(schemaCommandDispatcher: SchemaCommandInvoker);
    ngOnChanges(simpleChanges: SimpleChanges): void;
}
