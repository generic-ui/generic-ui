import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreContainer, FeatureModule } from '@generic-ui/hermes';
import { SchemaPublisher } from '../../../core/schema/src/api/schema.publisher';
import { SchemaWarehouse } from '../../../core/schema/src/api/schema.warehouse';
import { SchemaEventRepository } from '../../../core/schema/src/api/schema.event-repository';
import { initSchema } from '../../../core/schema/src/api/schema.api-module';
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SchemaFeatureModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: SchemaFeatureModule, imports: [CommonModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SchemaFeatureModule, providers: [
            { provide: SchemaPublisher, useFactory: useFactorySchemaCommandInvoker },
            { provide: SchemaWarehouse, useFactory: useFactorySchemaWarehouse },
            { provide: SchemaEventRepository, useFactory: useFactorySchemaEventRepository }
        ], imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SchemaFeatureModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL3NjaGVtYS9zcmMvc2NoZW1hLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNoRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUM3RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7O0FBRTVFLE1BQU0sVUFBVSw4QkFBOEI7SUFDN0MsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQy9DLENBQUM7QUFFRCxNQUFNLFVBQVUseUJBQXlCO0lBQ3hDLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUMvQyxDQUFDO0FBRUQsTUFBTSxVQUFVLCtCQUErQjtJQUM5QyxPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUNyRCxDQUFDO0FBR0QsVUFBVSxFQUFFLENBQUM7QUFjYixNQUFNLE9BQU8sbUJBQW9CLFNBQVEsYUFBYTtJQUVyRDtRQUNDLEtBQUssRUFBRSxDQUFDO0lBQ1QsQ0FBQztJQUVELE1BQU0sQ0FBQyxZQUFZO1FBQ2xCLE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQzt3R0FSVyxtQkFBbUI7eUdBQW5CLG1CQUFtQixZQVY5QixZQUFZO3lHQVVELG1CQUFtQixhQVJwQjtZQUNWLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsOEJBQThCLEVBQUU7WUFDeEUsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSx5QkFBeUIsRUFBRTtZQUNuRSxFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxVQUFVLEVBQUUsK0JBQStCLEVBQUU7U0FDL0UsWUFOQSxZQUFZOzs0RkFVRCxtQkFBbUI7a0JBWi9CLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7cUJBQ1o7b0JBQ0QsU0FBUyxFQUFFO3dCQUNWLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsOEJBQThCLEVBQUU7d0JBQ3hFLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUseUJBQXlCLEVBQUU7d0JBQ25FLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFVBQVUsRUFBRSwrQkFBK0IsRUFBRTtxQkFDL0U7b0JBQ0QsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2lCQUNYIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDb3JlQ29udGFpbmVyLCBGZWF0dXJlTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFNjaGVtYVB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc2NoZW1hL3NyYy9hcGkvc2NoZW1hLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBTY2hlbWFXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3NjaGVtYS9zcmMvYXBpL3NjaGVtYS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU2NoZW1hRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zY2hlbWEvc3JjL2FwaS9zY2hlbWEuZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBpbml0U2NoZW1hIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zY2hlbWEvc3JjL2FwaS9zY2hlbWEuYXBpLW1vZHVsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VGYWN0b3J5U2NoZW1hQ29tbWFuZEludm9rZXIoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoU2NoZW1hUHVibGlzaGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZhY3RvcnlTY2hlbWFXYXJlaG91c2UoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoU2NoZW1hV2FyZWhvdXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZhY3RvcnlTY2hlbWFFdmVudFJlcG9zaXRvcnkoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoU2NoZW1hRXZlbnRSZXBvc2l0b3J5KTtcbn1cblxuXG5pbml0U2NoZW1hKCk7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0eyBwcm92aWRlOiBTY2hlbWFQdWJsaXNoZXIsIHVzZUZhY3Rvcnk6IHVzZUZhY3RvcnlTY2hlbWFDb21tYW5kSW52b2tlciB9LFxuXHRcdHsgcHJvdmlkZTogU2NoZW1hV2FyZWhvdXNlLCB1c2VGYWN0b3J5OiB1c2VGYWN0b3J5U2NoZW1hV2FyZWhvdXNlIH0sXG5cdFx0eyBwcm92aWRlOiBTY2hlbWFFdmVudFJlcG9zaXRvcnksIHVzZUZhY3Rvcnk6IHVzZUZhY3RvcnlTY2hlbWFFdmVudFJlcG9zaXRvcnkgfVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTY2hlbWFGZWF0dXJlTW9kdWxlIGV4dGVuZHMgRmVhdHVyZU1vZHVsZSB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHN0YXRpYyBmb3JDb21wb25lbnQoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxufVxuIl19