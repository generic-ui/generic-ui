import { SchemaCssClassesRepository } from './css-classes/schema.css-classes.repository';
import { SchemaThemeRepository } from './theme/schema.theme.repository';
import { SchemaHorizontalGridRepository } from './horizontal-grid/schema.horizontal-grid.repository';
import { SchemaRowColoringRepository } from './row-coloring/schema.row-coloring.repository';
import { SchemaVerticalGridRepository } from './vertical-grid/schema.vertical-grid.repository';
import { SchemaWarehouse } from '../api/schema.warehouse';
import { singleFromObservable } from '@generic-ui/hermes';
import { SchemaRowClassArchive } from '../core/styling/schema.row-class.archive';
import { SchemaRowStyleArchive } from '../core/styling/schema.row-style.archive';
export class SchemaDomainWarehouse extends SchemaWarehouse {
    constructor(schemaCssClassesRepository, schemaThemeRepository, schemaHorizontalGridRepository, schemaRowColoringRepository, schemaVerticalGridRepository, schemaRowClassArchive, schemaRowStyleArchive) {
        super();
        this.schemaCssClassesRepository = schemaCssClassesRepository;
        this.schemaThemeRepository = schemaThemeRepository;
        this.schemaHorizontalGridRepository = schemaHorizontalGridRepository;
        this.schemaRowColoringRepository = schemaRowColoringRepository;
        this.schemaVerticalGridRepository = schemaVerticalGridRepository;
        this.schemaRowClassArchive = schemaRowClassArchive;
        this.schemaRowStyleArchive = schemaRowStyleArchive;
    }
    onTheme(schemaId) {
        return this.schemaThemeRepository
            .on(schemaId.toAggregateId());
    }
    onceTheme(schemaId) {
        return singleFromObservable(this.onTheme(schemaId));
    }
    onHorizontalGrid(schemaId) {
        return this.schemaHorizontalGridRepository
            .on(schemaId.toAggregateId());
    }
    onVerticalGrid(schemaId) {
        return this.schemaVerticalGridRepository
            .on(schemaId.toAggregateId());
    }
    onRowColoring(schemaId) {
        return this.schemaRowColoringRepository
            .on(schemaId.toAggregateId());
    }
    onCssClasses(schemaId) {
        return this.schemaCssClassesRepository
            .on(schemaId.toAggregateId());
    }
    onRowClass(schemaId) {
        return this.schemaRowClassArchive.on(schemaId.toAggregateId());
    }
    onRowStyle(schemaId) {
        return this.schemaRowStyleArchive.on(schemaId.toAggregateId());
    }
}
SchemaDomainWarehouse.services = [
    SchemaCssClassesRepository,
    SchemaThemeRepository,
    SchemaHorizontalGridRepository,
    SchemaRowColoringRepository,
    SchemaVerticalGridRepository,
    SchemaRowClassArchive,
    SchemaRowStyleArchive
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmRvbWFpbi13YXJlaG91c2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvc2NoZW1hL2NvcmUtcmVhZC9zY2hlbWEuZG9tYWluLXdhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN6RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNyRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUM1RixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUsvRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDMUQsT0FBTyxFQUFrQyxvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzFGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBS2pGLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxlQUFlO0lBRXpELFlBQTZCLDBCQUFzRCxFQUMvRCxxQkFBNEMsRUFDNUMsOEJBQThELEVBQzlELDJCQUF3RCxFQUN4RCw0QkFBMEQsRUFDMUQscUJBQTRDLEVBQzVDLHFCQUE0QztRQUUvRCxLQUFLLEVBQUUsQ0FBQztRQVJvQiwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQTRCO1FBQy9ELDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsbUNBQThCLEdBQTlCLDhCQUE4QixDQUFnQztRQUM5RCxnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCO1FBQ3hELGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7UUFDMUQsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0lBR2hFLENBQUM7SUFZRCxPQUFPLENBQUMsUUFBK0I7UUFDdEMsT0FBTyxJQUFJLENBQUMscUJBQXFCO2FBQzNCLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsU0FBUyxDQUFDLFFBQStCO1FBQ3hDLE9BQU8sb0JBQW9CLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxRQUErQjtRQUMvQyxPQUFPLElBQUksQ0FBQyw4QkFBOEI7YUFDcEMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxjQUFjLENBQUMsUUFBK0I7UUFDN0MsT0FBTyxJQUFJLENBQUMsNEJBQTRCO2FBQ2xDLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsYUFBYSxDQUFDLFFBQStCO1FBQzVDLE9BQU8sSUFBSSxDQUFDLDJCQUEyQjthQUNqQyxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELFlBQVksQ0FBQyxRQUErQjtRQUMzQyxPQUFPLElBQUksQ0FBQywwQkFBMEI7YUFDaEMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxVQUFVLENBQUMsUUFBK0I7UUFDekMsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxVQUFVLENBQUMsUUFBK0I7UUFDekMsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7O0FBN0NlLDhCQUFRLEdBQUc7SUFDMUIsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIscUJBQXFCO0NBQ1osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5IH0gZnJvbSAnLi9jc3MtY2xhc3Nlcy9zY2hlbWEuY3NzLWNsYXNzZXMucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZVJlcG9zaXRvcnkgfSBmcm9tICcuL3RoZW1lL3NjaGVtYS50aGVtZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYUhvcml6b250YWxHcmlkUmVwb3NpdG9yeSB9IGZyb20gJy4vaG9yaXpvbnRhbC1ncmlkL3NjaGVtYS5ob3Jpem9udGFsLWdyaWQucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZ1JlcG9zaXRvcnkgfSBmcm9tICcuL3Jvdy1jb2xvcmluZy9zY2hlbWEucm93LWNvbG9yaW5nLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hVmVydGljYWxHcmlkUmVwb3NpdG9yeSB9IGZyb20gJy4vdmVydGljYWwtZ3JpZC9zY2hlbWEudmVydGljYWwtZ3JpZC5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uL2FwaS9nbG9iYWwvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uL2FwaS90aGVtZS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuLi9hcGkvcm93LWNvbG9yaW5nL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU2NoZW1hQ3NzQ2xhc3MgfSBmcm9tICcuLi9hcGkvY3NzLWNsYXNzZXMvc2NoZW1hLWNzcy1jbGFzcyc7XG5pbXBvcnQgeyBTY2hlbWFXYXJlaG91c2UgfSBmcm9tICcuLi9hcGkvc2NoZW1hLndhcmVob3VzZSc7XG5pbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlLCBIZXJtZXNTaW5nbGUsIHNpbmdsZUZyb21PYnNlcnZhYmxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFNjaGVtYVJvd0NsYXNzQXJjaGl2ZSB9IGZyb20gJy4uL2NvcmUvc3R5bGluZy9zY2hlbWEucm93LWNsYXNzLmFyY2hpdmUnO1xuaW1wb3J0IHsgU2NoZW1hUm93U3R5bGVBcmNoaXZlIH0gZnJvbSAnLi4vY29yZS9zdHlsaW5nL3NjaGVtYS5yb3ctc3R5bGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDbGFzcyB9IGZyb20gJy4uL2FwaS9zdHlsaW5nL3NjaGVtYS5yb3ctY2xhc3MnO1xuaW1wb3J0IHsgU2NoZW1hUm93U3R5bGUgfSBmcm9tICcuLi9hcGkvc3R5bGluZy9zY2hlbWEucm93LXN0eWxlJztcblxuXG5leHBvcnQgY2xhc3MgU2NoZW1hRG9tYWluV2FyZWhvdXNlIGV4dGVuZHMgU2NoZW1hV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5OiBTY2hlbWFDc3NDbGFzc2VzUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFUaGVtZVJlcG9zaXRvcnk6IFNjaGVtYVRoZW1lUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFIb3Jpem9udGFsR3JpZFJlcG9zaXRvcnk6IFNjaGVtYUhvcml6b250YWxHcmlkUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFSb3dDb2xvcmluZ1JlcG9zaXRvcnk6IFNjaGVtYVJvd0NvbG9yaW5nUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFWZXJ0aWNhbEdyaWRSZXBvc2l0b3J5OiBTY2hlbWFWZXJ0aWNhbEdyaWRSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVJvd0NsYXNzQXJjaGl2ZTogU2NoZW1hUm93Q2xhc3NBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVJvd1N0eWxlQXJjaGl2ZTogU2NoZW1hUm93U3R5bGVBcmNoaXZlXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRzdGF0aWMgcmVhZG9ubHkgc2VydmljZXMgPSBbXG5cdFx0U2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnksXG5cdFx0U2NoZW1hVGhlbWVSZXBvc2l0b3J5LFxuXHRcdFNjaGVtYUhvcml6b250YWxHcmlkUmVwb3NpdG9yeSxcblx0XHRTY2hlbWFSb3dDb2xvcmluZ1JlcG9zaXRvcnksXG5cdFx0U2NoZW1hVmVydGljYWxHcmlkUmVwb3NpdG9yeSxcblx0XHRTY2hlbWFSb3dDbGFzc0FyY2hpdmUsXG5cdFx0U2NoZW1hUm93U3R5bGVBcmNoaXZlXG5cdF0gYXMgY29uc3Q7XG5cblx0b25UaGVtZShzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkKTogSGVybWVzT2JzZXJ2YWJsZTxTY2hlbWFUaGVtZT4ge1xuXHRcdHJldHVybiB0aGlzLnNjaGVtYVRoZW1lUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oc2NoZW1hSWQudG9BZ2dyZWdhdGVJZCgpKTtcblx0fVxuXG5cdG9uY2VUaGVtZShzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkKTogSGVybWVzU2luZ2xlPFNjaGVtYVRoZW1lPiB7XG5cdFx0cmV0dXJuIHNpbmdsZUZyb21PYnNlcnZhYmxlKHRoaXMub25UaGVtZShzY2hlbWFJZCkpO1xuXHR9XG5cblx0b25Ib3Jpem9udGFsR3JpZChzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkKTogSGVybWVzT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuc2NoZW1hSG9yaXpvbnRhbEdyaWRSZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cblx0b25WZXJ0aWNhbEdyaWQoc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCk6IEhlcm1lc09ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLnNjaGVtYVZlcnRpY2FsR3JpZFJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKHNjaGVtYUlkLnRvQWdncmVnYXRlSWQoKSk7XG5cdH1cblxuXHRvblJvd0NvbG9yaW5nKHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQpOiBIZXJtZXNPYnNlcnZhYmxlPFNjaGVtYVJvd0NvbG9yaW5nPiB7XG5cdFx0cmV0dXJuIHRoaXMuc2NoZW1hUm93Q29sb3JpbmdSZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cblx0b25Dc3NDbGFzc2VzKHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQpOiBIZXJtZXNPYnNlcnZhYmxlPFNjaGVtYUNzc0NsYXNzPiB7XG5cdFx0cmV0dXJuIHRoaXMuc2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKHNjaGVtYUlkLnRvQWdncmVnYXRlSWQoKSk7XG5cdH1cblxuXHRvblJvd0NsYXNzKHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQpOiBIZXJtZXNPYnNlcnZhYmxlPFNjaGVtYVJvd0NsYXNzPiB7XG5cdFx0cmV0dXJuIHRoaXMuc2NoZW1hUm93Q2xhc3NBcmNoaXZlLm9uKHNjaGVtYUlkLnRvQWdncmVnYXRlSWQoKSk7XG5cdH1cblxuXHRvblJvd1N0eWxlKHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQpOiBIZXJtZXNPYnNlcnZhYmxlPFNjaGVtYVJvd1N0eWxlPiB7XG5cdFx0cmV0dXJuIHRoaXMuc2NoZW1hUm93U3R5bGVBcmNoaXZlLm9uKHNjaGVtYUlkLnRvQWdncmVnYXRlSWQoKSk7XG5cdH1cblxufVxuIl19