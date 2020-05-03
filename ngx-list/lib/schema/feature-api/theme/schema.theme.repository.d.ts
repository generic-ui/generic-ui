import { Observable } from 'rxjs';
import { SchemaId } from '../../domain/schema.id';
import { Reactive } from '../../../../common/cdk/reactive';
import { SchemaTheme } from '../../domain/theme/schema-theme';
export declare class SchemaThemeRepository extends Reactive {
    private theme;
    private theme$;
    constructor();
    setTheme(theme: SchemaTheme, schemaId: SchemaId): void;
    on(schemaId: SchemaId): Observable<SchemaTheme>;
    private next;
}
