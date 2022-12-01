import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreContainer, FeatureModule } from '@generic-ui/hermes';
import { SchemaPublisher } from '../../core/schema/src/api/schema.publisher';
import { SchemaWarehouse } from '../../core/schema/src/api/schema.warehouse';
import { SchemaEventRepository } from '../../core/schema/src/api/schema.event-repository';
import { initSchema } from '../../core/schema/src/api/schema.api-module';
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
SchemaFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: SchemaFeatureModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SchemaFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.2", ngImport: i0, type: SchemaFeatureModule, imports: [CommonModule] });
SchemaFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: SchemaFeatureModule, providers: [
        { provide: SchemaPublisher, useFactory: useFactorySchemaCommandInvoker },
        { provide: SchemaWarehouse, useFactory: useFactorySchemaWarehouse },
        { provide: SchemaEventRepository, useFactory: useFactorySchemaEventRepository }
    ], imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: SchemaFeatureModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL3NjaGVtYS9zY2hlbWEuZmVhdHVyZS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7QUFFekUsTUFBTSxVQUFVLDhCQUE4QjtJQUM3QyxPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUVELE1BQU0sVUFBVSx5QkFBeUI7SUFDeEMsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQy9DLENBQUM7QUFFRCxNQUFNLFVBQVUsK0JBQStCO0lBQzlDLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ3JELENBQUM7QUFHRCxVQUFVLEVBQUUsQ0FBQztBQWNiLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxhQUFhO0lBRXJEO1FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDVCxDQUFDO0lBRUQsTUFBTSxDQUFDLFlBQVk7UUFDbEIsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDOztnSEFSVyxtQkFBbUI7aUhBQW5CLG1CQUFtQixZQVY5QixZQUFZO2lIQVVELG1CQUFtQixhQVJwQjtRQUNWLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsOEJBQThCLEVBQUU7UUFDeEUsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSx5QkFBeUIsRUFBRTtRQUNuRSxFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxVQUFVLEVBQUUsK0JBQStCLEVBQUU7S0FDL0UsWUFOQSxZQUFZOzJGQVVELG1CQUFtQjtrQkFaL0IsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTtxQkFDWjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1YsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSw4QkFBOEIsRUFBRTt3QkFDeEUsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSx5QkFBeUIsRUFBRTt3QkFDbkUsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsVUFBVSxFQUFFLCtCQUErQixFQUFFO3FCQUMvRTtvQkFDRCxZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLEVBQUU7aUJBQ1giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENvcmVDb250YWluZXIsIEZlYXR1cmVNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU2NoZW1hUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vY29yZS9zY2hlbWEvc3JjL2FwaS9zY2hlbWEucHVibGlzaGVyJztcbmltcG9ydCB7IFNjaGVtYVdhcmVob3VzZSB9IGZyb20gJy4uLy4uL2NvcmUvc2NoZW1hL3NyYy9hcGkvc2NoZW1hLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTY2hlbWFFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9jb3JlL3NjaGVtYS9zcmMvYXBpL3NjaGVtYS5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IGluaXRTY2hlbWEgfSBmcm9tICcuLi8uLi9jb3JlL3NjaGVtYS9zcmMvYXBpL3NjaGVtYS5hcGktbW9kdWxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZhY3RvcnlTY2hlbWFDb21tYW5kSW52b2tlcigpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShTY2hlbWFQdWJsaXNoZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlRmFjdG9yeVNjaGVtYVdhcmVob3VzZSgpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShTY2hlbWFXYXJlaG91c2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlRmFjdG9yeVNjaGVtYUV2ZW50UmVwb3NpdG9yeSgpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShTY2hlbWFFdmVudFJlcG9zaXRvcnkpO1xufVxuXG5cbmluaXRTY2hlbWEoKTtcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZVxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7IHByb3ZpZGU6IFNjaGVtYVB1Ymxpc2hlciwgdXNlRmFjdG9yeTogdXNlRmFjdG9yeVNjaGVtYUNvbW1hbmRJbnZva2VyIH0sXG5cdFx0eyBwcm92aWRlOiBTY2hlbWFXYXJlaG91c2UsIHVzZUZhY3Rvcnk6IHVzZUZhY3RvcnlTY2hlbWFXYXJlaG91c2UgfSxcblx0XHR7IHByb3ZpZGU6IFNjaGVtYUV2ZW50UmVwb3NpdG9yeSwgdXNlRmFjdG9yeTogdXNlRmFjdG9yeVNjaGVtYUV2ZW50UmVwb3NpdG9yeSB9XG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFNjaGVtYUZlYXR1cmVNb2R1bGUgZXh0ZW5kcyBGZWF0dXJlTW9kdWxlIHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0c3RhdGljIGZvckNvbXBvbmVudCgpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG59XG4iXX0=