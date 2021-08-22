import { OnChanges } from '@angular/core';
import { SchemaTheme } from '../../../../../schema/core/api/theme/schema-theme';
import { SchemaCommandInvoker } from '../../../../../schema/core/api/schema.command-invoker';
import { NgChanges } from '../../../../../common/cdk/component/ng-changes';
export declare class StructureThemeGateway implements OnChanges {
    private readonly schemaCommandDispatcher;
    theme2: SchemaTheme;
    constructor(schemaCommandDispatcher: SchemaCommandInvoker);
    ngOnChanges(changes: NgChanges<StructureThemeGateway>): void;
}
