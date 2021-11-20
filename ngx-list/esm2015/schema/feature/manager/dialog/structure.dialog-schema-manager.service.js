import { Injectable, Injector } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { SchemaReadModelRootId } from '../../../core/api/schema.read-model-root-id';
import { StructureDialogSchemaManagerComponent } from './structure.dialog-schema-manager.component';
import { Reactive } from '@generic-ui/hermes';
export class StructureDialogSchemaManagerService extends Reactive {
    constructor(injector, fabricDialogService) {
        super();
        this.injector = injector;
        this.fabricDialogService = fabricDialogService;
    }
    open(readModelId, parentInjector) {
        if (!parentInjector) {
            parentInjector = this.injector;
        }
        const injector = Injector.create({
            providers: [{ provide: SchemaReadModelRootId, useValue: readModelId }],
            parent: parentInjector
        });
        this.fabricDialogService.open({
            injector: injector,
            component: StructureDialogSchemaManagerComponent
        });
    }
}
StructureDialogSchemaManagerService.decorators = [
    { type: Injectable }
];
StructureDialogSchemaManagerService.ctorParameters = () => [
    { type: Injector },
    { type: FabricDialogService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmRpYWxvZy1zY2hlbWEtbWFuYWdlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zY2hlbWEvZmVhdHVyZS9tYW5hZ2VyL2RpYWxvZy9zdHJ1Y3R1cmUuZGlhbG9nLXNjaGVtYS1tYW5hZ2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDcEcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSTlDLE1BQU0sT0FBTyxtQ0FBb0MsU0FBUSxRQUFRO0lBRWhFLFlBQTZCLFFBQWtCLEVBQzNCLG1CQUF3QztRQUMzRCxLQUFLLEVBQUUsQ0FBQztRQUZvQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQzNCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFFNUQsQ0FBQztJQUVELElBQUksQ0FBQyxXQUFrQyxFQUFFLGNBQXlCO1FBRWpFLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDcEIsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDL0I7UUFFRCxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ2hDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsQ0FBQztZQUN0RSxNQUFNLEVBQUUsY0FBYztTQUN0QixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDO1lBQzdCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFNBQVMsRUFBRSxxQ0FBcUM7U0FDaEQsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7O1lBdkJELFVBQVU7OztZQVJVLFFBQVE7WUFFcEIsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmFicmljRGlhbG9nU2VydmljZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZURpYWxvZ1NjaGVtYU1hbmFnZXJDb21wb25lbnQgfSBmcm9tICcuL3N0cnVjdHVyZS5kaWFsb2ctc2NoZW1hLW1hbmFnZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFJlYWN0aXZlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRGlhbG9nU2NoZW1hTWFuYWdlclNlcnZpY2UgZXh0ZW5kcyBSZWFjdGl2ZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmFicmljRGlhbG9nU2VydmljZTogRmFicmljRGlhbG9nU2VydmljZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRvcGVuKHJlYWRNb2RlbElkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsIHBhcmVudEluamVjdG9yPzogSW5qZWN0b3IpOiB2b2lkIHtcblxuXHRcdGlmICghcGFyZW50SW5qZWN0b3IpIHtcblx0XHRcdHBhcmVudEluamVjdG9yID0gdGhpcy5pbmplY3Rvcjtcblx0XHR9XG5cblx0XHRjb25zdCBpbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XG5cdFx0XHRwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCwgdXNlVmFsdWU6IHJlYWRNb2RlbElkIH1dLFxuXHRcdFx0cGFyZW50OiBwYXJlbnRJbmplY3RvclxuXHRcdH0pO1xuXG5cdFx0dGhpcy5mYWJyaWNEaWFsb2dTZXJ2aWNlLm9wZW4oe1xuXHRcdFx0aW5qZWN0b3I6IGluamVjdG9yLFxuXHRcdFx0Y29tcG9uZW50OiBTdHJ1Y3R1cmVEaWFsb2dTY2hlbWFNYW5hZ2VyQ29tcG9uZW50XG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==