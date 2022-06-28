import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreContainer, FeatureModule } from '@generic-ui/hermes';
import { RowSelectionTypeArchive } from '../../../core/structure/formation/api/type/row-selection-type.archive';
import { formationInitializer } from '../../../core/structure/formation/api/formation.api-module';
import { FormationEventRepository } from '../../../core/structure/formation/api/formation.event-repository';
import { FormationPublisher } from '../../../core/structure/formation/api/formation.publisher';
import { FormationWarehouse } from '../../../core/structure/formation/api/formation.warehouse';
import * as i0 from "@angular/core";
formationInitializer.init();
export function provideFormationCommandInvoker() {
    return CoreContainer.resolve(FormationPublisher);
}
export function provideFormationWarehouse() {
    return CoreContainer.resolve(FormationWarehouse);
}
export function provideFormationEventRepository() {
    return CoreContainer.resolve(FormationEventRepository);
}
export class FormationFeatureModule extends FeatureModule {
    static forComponent() {
        return [
            RowSelectionTypeArchive
        ];
    }
}
FormationFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FormationFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
FormationFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: FormationFeatureModule, imports: [CommonModule] });
FormationFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FormationFeatureModule, providers: [
        { provide: FormationPublisher, useFactory: provideFormationCommandInvoker },
        { provide: FormationWarehouse, useFactory: provideFormationWarehouse },
        { provide: FormationEventRepository, useFactory: provideFormationEventRepository }
    ], imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FormationFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [],
                    exports: [],
                    providers: [
                        { provide: FormationPublisher, useFactory: provideFormationCommandInvoker },
                        { provide: FormationWarehouse, useFactory: provideFormationWarehouse },
                        { provide: FormationEventRepository, useFactory: provideFormationEventRepository }
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9mb3JtYXRpb24vZm9ybWF0aW9uLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUVBQXVFLENBQUM7QUFDaEgsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDbEcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDNUcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDL0YsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkRBQTJELENBQUM7O0FBRS9GLG9CQUFvQixDQUFDLElBQUksRUFBRSxDQUFDO0FBRTVCLE1BQU0sVUFBVSw4QkFBOEI7SUFDN0MsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDbEQsQ0FBQztBQUVELE1BQU0sVUFBVSx5QkFBeUI7SUFDeEMsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDbEQsQ0FBQztBQUVELE1BQU0sVUFBVSwrQkFBK0I7SUFDOUMsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7QUFDeEQsQ0FBQztBQWVELE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxhQUFhO0lBRXhELE1BQU0sQ0FBQyxZQUFZO1FBQ2xCLE9BQU87WUFDTix1QkFBdUI7U0FDdkIsQ0FBQztJQUNILENBQUM7O21IQU5XLHNCQUFzQjtvSEFBdEIsc0JBQXNCLFlBVmpDLFlBQVk7b0hBVUQsc0JBQXNCLGFBTnZCO1FBQ1YsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLDhCQUE4QixFQUFFO1FBQzNFLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSx5QkFBeUIsRUFBRTtRQUN0RSxFQUFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsK0JBQStCLEVBQUU7S0FDbEYsWUFSQSxZQUFZOzJGQVVELHNCQUFzQjtrQkFabEMsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTtxQkFDWjtvQkFDRCxZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsU0FBUyxFQUFFO3dCQUNWLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSw4QkFBOEIsRUFBRTt3QkFDM0UsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLHlCQUF5QixFQUFFO3dCQUN0RSxFQUFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsK0JBQStCLEVBQUU7cUJBQ2xGO2lCQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDb3JlQ29udGFpbmVyLCBGZWF0dXJlTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgUm93U2VsZWN0aW9uVHlwZUFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vYXBpL3R5cGUvcm93LXNlbGVjdGlvbi10eXBlLmFyY2hpdmUnO1xuaW1wb3J0IHsgZm9ybWF0aW9uSW5pdGlhbGl6ZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vYXBpL2Zvcm1hdGlvbi5hcGktbW9kdWxlJztcbmltcG9ydCB7IEZvcm1hdGlvbkV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9hcGkvZm9ybWF0aW9uLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgRm9ybWF0aW9uUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL2FwaS9mb3JtYXRpb24ucHVibGlzaGVyJztcbmltcG9ydCB7IEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9hcGkvZm9ybWF0aW9uLndhcmVob3VzZSc7XG5cbmZvcm1hdGlvbkluaXRpYWxpemVyLmluaXQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVGb3JtYXRpb25Db21tYW5kSW52b2tlcigpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShGb3JtYXRpb25QdWJsaXNoZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUZvcm1hdGlvbldhcmVob3VzZSgpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShGb3JtYXRpb25XYXJlaG91c2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUZvcm1hdGlvbkV2ZW50UmVwb3NpdG9yeSgpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShGb3JtYXRpb25FdmVudFJlcG9zaXRvcnkpO1xufVxuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW10sXG5cdHByb3ZpZGVyczogW1xuXHRcdHsgcHJvdmlkZTogRm9ybWF0aW9uUHVibGlzaGVyLCB1c2VGYWN0b3J5OiBwcm92aWRlRm9ybWF0aW9uQ29tbWFuZEludm9rZXIgfSxcblx0XHR7IHByb3ZpZGU6IEZvcm1hdGlvbldhcmVob3VzZSwgdXNlRmFjdG9yeTogcHJvdmlkZUZvcm1hdGlvbldhcmVob3VzZSB9LFxuXHRcdHsgcHJvdmlkZTogRm9ybWF0aW9uRXZlbnRSZXBvc2l0b3J5LCB1c2VGYWN0b3J5OiBwcm92aWRlRm9ybWF0aW9uRXZlbnRSZXBvc2l0b3J5IH1cblx0XVxufSlcbmV4cG9ydCBjbGFzcyBGb3JtYXRpb25GZWF0dXJlTW9kdWxlIGV4dGVuZHMgRmVhdHVyZU1vZHVsZSB7XG5cblx0c3RhdGljIGZvckNvbXBvbmVudCgpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHRSb3dTZWxlY3Rpb25UeXBlQXJjaGl2ZVxuXHRcdF07XG5cdH1cblxuXHQvLyBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBzb3VyY2VBcGlNb2R1bGU6IFNvdXJjZUFwaU1vZHVsZSkge1xuXHQvLyBcdHN1cGVyKCk7XG5cdC8vIFx0aWYgKHNvdXJjZUFwaU1vZHVsZSA9PT0gbnVsbCkge1xuXHQvLyBcdFx0dGhyb3cgbmV3IEVycm9yKCdTb3VyY2VBcGlNb2R1bGUgaXMgcmVxdWlyZWQnKTtcblx0Ly8gXHR9XG5cdC8vIH1cblxufVxuIl19