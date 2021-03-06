import { Observable } from 'rxjs';
import { SchemaId } from '../../api/schema.id';
import { Reactive } from '../../../../common/cdk/reactive';
import { SchemaCssClass } from '../../api/css-classes/schema-css-class';
export declare class SchemaCssClassesRepository extends Reactive {
    private theme;
    private theme$;
    constructor();
    setCssClass(theme: SchemaCssClass, schemaId: SchemaId): void;
    on(schemaId: SchemaId): Observable<SchemaCssClass>;
    private next;
}
