import { Injectable, Injector } from '@angular/core';
import { SchemaReadModelRootId } from '../../../../../core/schema/src/api/global/schema.read-model-root-id';
import { StructureDialogSchemaManagerComponent } from './structure.dialog-schema-manager.component';
import { Reactive } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/fabric";
export class StructureDialogSchemaManagerService extends Reactive {
    injector;
    fabricDialogService;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureDialogSchemaManagerService, deps: [{ token: i0.Injector }, { token: i1.FabricDialogService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureDialogSchemaManagerService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureDialogSchemaManagerService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.FabricDialogService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmRpYWxvZy1zY2hlbWEtbWFuYWdlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL3NjaGVtYS9zcmMvbWFuYWdlci9kaWFsb2cvc3RydWN0dXJlLmRpYWxvZy1zY2hlbWEtbWFuYWdlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3JELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7O0FBSTlDLE1BQU0sT0FBTyxtQ0FBb0MsU0FBUSxRQUFRO0lBRW5DO0lBQ1Q7SUFEcEIsWUFBNkIsUUFBa0IsRUFDM0IsbUJBQXdDO1FBQzNELEtBQUssRUFBRSxDQUFDO1FBRm9CLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDM0Isd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUU1RCxDQUFDO0lBRUQsSUFBSSxDQUFDLFdBQWtDLEVBQUUsY0FBeUI7UUFFakUsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNwQixjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUMvQjtRQUVELE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDaEMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxDQUFDO1lBQ3RFLE1BQU0sRUFBRSxjQUFjO1NBQ3RCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7WUFDN0IsUUFBUSxFQUFFLFFBQVE7WUFDbEIsU0FBUyxFQUFFLHFDQUFxQztTQUNoRCxDQUFDLENBQUM7SUFDSixDQUFDO3dHQXRCVyxtQ0FBbUM7NEdBQW5DLG1DQUFtQzs7NEZBQW5DLG1DQUFtQztrQkFEL0MsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZhYnJpY0RpYWxvZ1NlcnZpY2UgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zY2hlbWEvc3JjL2FwaS9nbG9iYWwvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEaWFsb2dTY2hlbWFNYW5hZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuZGlhbG9nLXNjaGVtYS1tYW5hZ2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZURpYWxvZ1NjaGVtYU1hbmFnZXJTZXJ2aWNlIGV4dGVuZHMgUmVhY3RpdmUge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZhYnJpY0RpYWxvZ1NlcnZpY2U6IEZhYnJpY0RpYWxvZ1NlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0b3BlbihyZWFkTW9kZWxJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkLCBwYXJlbnRJbmplY3Rvcj86IEluamVjdG9yKTogdm9pZCB7XG5cblx0XHRpZiAoIXBhcmVudEluamVjdG9yKSB7XG5cdFx0XHRwYXJlbnRJbmplY3RvciA9IHRoaXMuaW5qZWN0b3I7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xuXHRcdFx0cHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsIHVzZVZhbHVlOiByZWFkTW9kZWxJZCB9XSxcblx0XHRcdHBhcmVudDogcGFyZW50SW5qZWN0b3Jcblx0XHR9KTtcblxuXHRcdHRoaXMuZmFicmljRGlhbG9nU2VydmljZS5vcGVuKHtcblx0XHRcdGluamVjdG9yOiBpbmplY3Rvcixcblx0XHRcdGNvbXBvbmVudDogU3RydWN0dXJlRGlhbG9nU2NoZW1hTWFuYWdlckNvbXBvbmVudFxuXHRcdH0pO1xuXHR9XG59XG4iXX0=