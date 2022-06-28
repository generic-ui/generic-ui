import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreContainer, FeatureModule } from '@generic-ui/hermes';
import { SchemaPublisher } from '../../core/schema/api/schema.publisher';
import { SchemaWarehouse } from '../../core/schema/api/schema.warehouse';
import { SchemaEventRepository } from '../../core/schema/api/schema.event-repository';
import { initSchema } from '../../core/schema/api/schema.api-module';
import * as i0 from "@angular/core";
export function useFactorySchemaCommandInvoker() {
    return CoreContainer.resolve(SchemaPublisher);
}
export function useFactorySchemaWarehouse() {
    return CoreContainer.resolve(SchemaWarehouse);
}
export function useFactorySchemaEventRepository() {
    return CoreContainer.resolve(SchemaEventRepository);
}
initSchema();
export class SchemaFeatureModule extends FeatureModule {
    constructor() {
        super();
    }
    static forComponent() {
        return [];
    }
}
SchemaFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SchemaFeatureModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SchemaFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: SchemaFeatureModule, imports: [CommonModule] });
SchemaFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SchemaFeatureModule, providers: [
        { provide: SchemaPublisher, useFactory: useFactorySchemaCommandInvoker },
        { provide: SchemaWarehouse, useFactory: useFactorySchemaWarehouse },
        { provide: SchemaEventRepository, useFactory: useFactorySchemaEventRepository }
    ], imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SchemaFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule
                    ],
                    providers: [
                        { provide: SchemaPublisher, useFactory: useFactorySchemaCommandInvoker },
                        { provide: SchemaWarehouse, useFactory: useFactorySchemaWarehouse },
                        { provide: SchemaEventRepository, useFactory: useFactorySchemaEventRepository }
                    ],
                    declarations: [],
                    exports: []
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL3NjaGVtYS9zY2hlbWEuZmVhdHVyZS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7QUFFckUsTUFBTSxVQUFVLDhCQUE4QjtJQUM3QyxPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUVELE1BQU0sVUFBVSx5QkFBeUI7SUFDeEMsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQy9DLENBQUM7QUFFRCxNQUFNLFVBQVUsK0JBQStCO0lBQzlDLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ3JELENBQUM7QUFHRCxVQUFVLEVBQUUsQ0FBQztBQWNiLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxhQUFhO0lBRXJEO1FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDVCxDQUFDO0lBRUQsTUFBTSxDQUFDLFlBQVk7UUFDbEIsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDOztnSEFSVyxtQkFBbUI7aUhBQW5CLG1CQUFtQixZQVY5QixZQUFZO2lIQVVELG1CQUFtQixhQVJwQjtRQUNWLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsOEJBQThCLEVBQUU7UUFDeEUsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSx5QkFBeUIsRUFBRTtRQUNuRSxFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxVQUFVLEVBQUUsK0JBQStCLEVBQUU7S0FDL0UsWUFOQSxZQUFZOzJGQVVELG1CQUFtQjtrQkFaL0IsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTtxQkFDWjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1YsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSw4QkFBOEIsRUFBRTt3QkFDeEUsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSx5QkFBeUIsRUFBRTt3QkFDbkUsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsVUFBVSxFQUFFLCtCQUErQixFQUFFO3FCQUMvRTtvQkFDRCxZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLEVBQUU7aUJBQ1giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENvcmVDb250YWluZXIsIEZlYXR1cmVNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU2NoZW1hUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vY29yZS9zY2hlbWEvYXBpL3NjaGVtYS5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU2NoZW1hV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vY29yZS9zY2hlbWEvYXBpL3NjaGVtYS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU2NoZW1hRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vY29yZS9zY2hlbWEvYXBpL3NjaGVtYS5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IGluaXRTY2hlbWEgfSBmcm9tICcuLi8uLi9jb3JlL3NjaGVtYS9hcGkvc2NoZW1hLmFwaS1tb2R1bGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlRmFjdG9yeVNjaGVtYUNvbW1hbmRJbnZva2VyKCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKFNjaGVtYVB1Ymxpc2hlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VGYWN0b3J5U2NoZW1hV2FyZWhvdXNlKCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKFNjaGVtYVdhcmVob3VzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VGYWN0b3J5U2NoZW1hRXZlbnRSZXBvc2l0b3J5KCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKFNjaGVtYUV2ZW50UmVwb3NpdG9yeSk7XG59XG5cblxuaW5pdFNjaGVtYSgpO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdHsgcHJvdmlkZTogU2NoZW1hUHVibGlzaGVyLCB1c2VGYWN0b3J5OiB1c2VGYWN0b3J5U2NoZW1hQ29tbWFuZEludm9rZXIgfSxcblx0XHR7IHByb3ZpZGU6IFNjaGVtYVdhcmVob3VzZSwgdXNlRmFjdG9yeTogdXNlRmFjdG9yeVNjaGVtYVdhcmVob3VzZSB9LFxuXHRcdHsgcHJvdmlkZTogU2NoZW1hRXZlbnRSZXBvc2l0b3J5LCB1c2VGYWN0b3J5OiB1c2VGYWN0b3J5U2NoZW1hRXZlbnRSZXBvc2l0b3J5IH1cblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgU2NoZW1hRmVhdHVyZU1vZHVsZSBleHRlbmRzIEZlYXR1cmVNb2R1bGUge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRzdGF0aWMgZm9yQ29tcG9uZW50KCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cbn1cbiJdfQ==