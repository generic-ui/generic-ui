import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreContainer, FeatureModule } from '@generic-ui/hermes';
import { SchemaRowClassArchive } from '../../core/schema/api/styling/schema.row-class.archive';
import { SchemaRowStyleArchive } from '../../core/schema/api/styling/schema.row-style.archive';
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
        return [
            SchemaRowClassArchive,
            SchemaRowStyleArchive
        ];
    }
}
SchemaFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SchemaFeatureModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SchemaFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SchemaFeatureModule, imports: [CommonModule] });
SchemaFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SchemaFeatureModule, providers: [
        { provide: SchemaPublisher, useFactory: useFactorySchemaCommandInvoker },
        { provide: SchemaWarehouse, useFactory: useFactorySchemaWarehouse },
        { provide: SchemaEventRepository, useFactory: useFactorySchemaEventRepository }
    ], imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SchemaFeatureModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL3NjaGVtYS9zY2hlbWEuZmVhdHVyZS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUMvRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUMvRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7QUFFckUsTUFBTSxVQUFVLDhCQUE4QjtJQUM3QyxPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUVELE1BQU0sVUFBVSx5QkFBeUI7SUFDeEMsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQy9DLENBQUM7QUFFRCxNQUFNLFVBQVUsK0JBQStCO0lBQzlDLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ3JELENBQUM7QUFHRCxVQUFVLEVBQUUsQ0FBQztBQWNiLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxhQUFhO0lBRXJEO1FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDVCxDQUFDO0lBRUQsTUFBTSxDQUFDLFlBQVk7UUFDbEIsT0FBTztZQUNOLHFCQUFxQjtZQUNyQixxQkFBcUI7U0FDckIsQ0FBQztJQUNILENBQUM7O2lIQVhXLG1CQUFtQjtrSEFBbkIsbUJBQW1CLFlBVjlCLFlBQVk7a0hBVUQsbUJBQW1CLGFBUnBCO1FBQ1YsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSw4QkFBOEIsRUFBRTtRQUN4RSxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLHlCQUF5QixFQUFFO1FBQ25FLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFVBQVUsRUFBRSwrQkFBK0IsRUFBRTtLQUMvRSxZQVBRO1lBQ1IsWUFBWTtTQUNaOzRGQVNXLG1CQUFtQjtrQkFaL0IsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTtxQkFDWjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1YsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSw4QkFBOEIsRUFBRTt3QkFDeEUsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSx5QkFBeUIsRUFBRTt3QkFDbkUsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsVUFBVSxFQUFFLCtCQUErQixFQUFFO3FCQUMvRTtvQkFDRCxZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLEVBQUU7aUJBQ1giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENvcmVDb250YWluZXIsIEZlYXR1cmVNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q2xhc3NBcmNoaXZlIH0gZnJvbSAnLi4vLi4vY29yZS9zY2hlbWEvYXBpL3N0eWxpbmcvc2NoZW1hLnJvdy1jbGFzcy5hcmNoaXZlJztcbmltcG9ydCB7IFNjaGVtYVJvd1N0eWxlQXJjaGl2ZSB9IGZyb20gJy4uLy4uL2NvcmUvc2NoZW1hL2FwaS9zdHlsaW5nL3NjaGVtYS5yb3ctc3R5bGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTY2hlbWFQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi9jb3JlL3NjaGVtYS9hcGkvc2NoZW1hLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBTY2hlbWFXYXJlaG91c2UgfSBmcm9tICcuLi8uLi9jb3JlL3NjaGVtYS9hcGkvc2NoZW1hLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTY2hlbWFFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9jb3JlL3NjaGVtYS9hcGkvc2NoZW1hLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgaW5pdFNjaGVtYSB9IGZyb20gJy4uLy4uL2NvcmUvc2NoZW1hL2FwaS9zY2hlbWEuYXBpLW1vZHVsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VGYWN0b3J5U2NoZW1hQ29tbWFuZEludm9rZXIoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoU2NoZW1hUHVibGlzaGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZhY3RvcnlTY2hlbWFXYXJlaG91c2UoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoU2NoZW1hV2FyZWhvdXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZhY3RvcnlTY2hlbWFFdmVudFJlcG9zaXRvcnkoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoU2NoZW1hRXZlbnRSZXBvc2l0b3J5KTtcbn1cblxuXG5pbml0U2NoZW1hKCk7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0eyBwcm92aWRlOiBTY2hlbWFQdWJsaXNoZXIsIHVzZUZhY3Rvcnk6IHVzZUZhY3RvcnlTY2hlbWFDb21tYW5kSW52b2tlciB9LFxuXHRcdHsgcHJvdmlkZTogU2NoZW1hV2FyZWhvdXNlLCB1c2VGYWN0b3J5OiB1c2VGYWN0b3J5U2NoZW1hV2FyZWhvdXNlIH0sXG5cdFx0eyBwcm92aWRlOiBTY2hlbWFFdmVudFJlcG9zaXRvcnksIHVzZUZhY3Rvcnk6IHVzZUZhY3RvcnlTY2hlbWFFdmVudFJlcG9zaXRvcnkgfVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTY2hlbWFGZWF0dXJlTW9kdWxlIGV4dGVuZHMgRmVhdHVyZU1vZHVsZSB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHN0YXRpYyBmb3JDb21wb25lbnQoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0U2NoZW1hUm93Q2xhc3NBcmNoaXZlLFxuXHRcdFx0U2NoZW1hUm93U3R5bGVBcmNoaXZlXG5cdFx0XTtcblx0fVxuXG59XG4iXX0=