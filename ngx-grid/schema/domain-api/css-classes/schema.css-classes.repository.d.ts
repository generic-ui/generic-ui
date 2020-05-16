import { Observable } from 'rxjs';
import { SchemaId } from '../../domain/schema.id';
import { Reactive } from '../../../common/cdk/reactive';
import { SchemaCssClass } from './schema-css-class';
export declare class SchemaCssClassesRepository extends Reactive {
    private theme;
    private theme$;
    constructor();
    setTheme(theme: SchemaCssClass, schemaId: SchemaId): void;
    on(schemaId: SchemaId): Observable<SchemaCssClass>;
    private next;
}
