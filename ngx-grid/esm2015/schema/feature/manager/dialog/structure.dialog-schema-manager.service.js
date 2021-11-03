import { Injectable, Injector } from '@angular/core';
import { SchemaReadModelRootId } from '../../../core/api/schema.read-model-root-id';
import { StructureDialogSchemaManagerComponent } from './structure.dialog-schema-manager.component';
import { Reactive } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/fabric";
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
        this.fabricDialogService.open(StructureDialogSchemaManagerComponent, {
            injector: injector
        });
    }
}
StructureDialogSchemaManagerService.ɵfac = function StructureDialogSchemaManagerService_Factory(t) { return new (t || StructureDialogSchemaManagerService)(i0.ɵɵinject(i0.Injector), i0.ɵɵinject(i1.FabricDialogService)); };
StructureDialogSchemaManagerService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StructureDialogSchemaManagerService, factory: StructureDialogSchemaManagerService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureDialogSchemaManagerService, [{
        type: Injectable
    }], function () { return [{ type: i0.Injector }, { type: i1.FabricDialogService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmRpYWxvZy1zY2hlbWEtbWFuYWdlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zY2hlbWEvZmVhdHVyZS9tYW5hZ2VyL2RpYWxvZy9zdHJ1Y3R1cmUuZGlhbG9nLXNjaGVtYS1tYW5hZ2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHckQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDcEcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7QUFJOUMsTUFBTSxPQUFPLG1DQUFvQyxTQUFRLFFBQVE7SUFFaEUsWUFBNkIsUUFBa0IsRUFDM0IsbUJBQXdDO1FBQzNELEtBQUssRUFBRSxDQUFDO1FBRm9CLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDM0Isd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUU1RCxDQUFDO0lBRUQsSUFBSSxDQUFDLFdBQWtDLEVBQUUsY0FBeUI7UUFFakUsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNwQixjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUMvQjtRQUVELE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDaEMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxDQUFDO1lBQ3RFLE1BQU0sRUFBRSxjQUFjO1NBQ3RCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMscUNBQXFDLEVBQUU7WUFDcEUsUUFBUSxFQUFFLFFBQVE7U0FDbEIsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7c0hBckJXLG1DQUFtQzt5RkFBbkMsbUNBQW1DLFdBQW5DLG1DQUFtQzt1RkFBbkMsbUNBQW1DO2NBRC9DLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGYWJyaWNEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRGlhbG9nU2NoZW1hTWFuYWdlckNvbXBvbmVudCB9IGZyb20gJy4vc3RydWN0dXJlLmRpYWxvZy1zY2hlbWEtbWFuYWdlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVEaWFsb2dTY2hlbWFNYW5hZ2VyU2VydmljZSBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmYWJyaWNEaWFsb2dTZXJ2aWNlOiBGYWJyaWNEaWFsb2dTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG9wZW4ocmVhZE1vZGVsSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCwgcGFyZW50SW5qZWN0b3I/OiBJbmplY3Rvcik6IHZvaWQge1xuXG5cdFx0aWYgKCFwYXJlbnRJbmplY3Rvcikge1xuXHRcdFx0cGFyZW50SW5qZWN0b3IgPSB0aGlzLmluamVjdG9yO1xuXHRcdH1cblxuXHRcdGNvbnN0IGluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcblx0XHRcdHByb3ZpZGVyczogW3sgcHJvdmlkZTogU2NoZW1hUmVhZE1vZGVsUm9vdElkLCB1c2VWYWx1ZTogcmVhZE1vZGVsSWQgfV0sXG5cdFx0XHRwYXJlbnQ6IHBhcmVudEluamVjdG9yXG5cdFx0fSk7XG5cblx0XHR0aGlzLmZhYnJpY0RpYWxvZ1NlcnZpY2Uub3BlbihTdHJ1Y3R1cmVEaWFsb2dTY2hlbWFNYW5hZ2VyQ29tcG9uZW50LCB7XG5cdFx0XHRpbmplY3RvcjogaW5qZWN0b3Jcblx0XHR9KTtcblx0fVxufVxuIl19