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
FormationFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FormationFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
FormationFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FormationFeatureModule, imports: [CommonModule] });
FormationFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FormationFeatureModule, providers: [
        { provide: FormationPublisher, useFactory: provideFormationCommandInvoker },
        { provide: FormationWarehouse, useFactory: provideFormationWarehouse },
        { provide: FormationEventRepository, useFactory: provideFormationEventRepository }
    ], imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FormationFeatureModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9mb3JtYXRpb24vZm9ybWF0aW9uLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUVBQXVFLENBQUM7QUFDaEgsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDbEcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDNUcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDL0YsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkRBQTJELENBQUM7O0FBRS9GLG9CQUFvQixDQUFDLElBQUksRUFBRSxDQUFDO0FBRTVCLE1BQU0sVUFBVSw4QkFBOEI7SUFDN0MsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDbEQsQ0FBQztBQUVELE1BQU0sVUFBVSx5QkFBeUI7SUFDeEMsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDbEQsQ0FBQztBQUVELE1BQU0sVUFBVSwrQkFBK0I7SUFDOUMsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7QUFDeEQsQ0FBQztBQWVELE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxhQUFhO0lBRXhELE1BQU0sQ0FBQyxZQUFZO1FBQ2xCLE9BQU87WUFDTix1QkFBdUI7U0FDdkIsQ0FBQztJQUNILENBQUM7O29IQU5XLHNCQUFzQjtxSEFBdEIsc0JBQXNCLFlBVmpDLFlBQVk7cUhBVUQsc0JBQXNCLGFBTnZCO1FBQ1YsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLDhCQUE4QixFQUFFO1FBQzNFLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSx5QkFBeUIsRUFBRTtRQUN0RSxFQUFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsK0JBQStCLEVBQUU7S0FDbEYsWUFUUTtZQUNSLFlBQVk7U0FDWjs0RkFTVyxzQkFBc0I7a0JBWmxDLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7cUJBQ1o7b0JBQ0QsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxFQUFFO29CQUNYLFNBQVMsRUFBRTt3QkFDVixFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxVQUFVLEVBQUUsOEJBQThCLEVBQUU7d0JBQzNFLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSx5QkFBeUIsRUFBRTt3QkFDdEUsRUFBRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsVUFBVSxFQUFFLCtCQUErQixFQUFFO3FCQUNsRjtpQkFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ29yZUNvbnRhaW5lciwgRmVhdHVyZU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFJvd1NlbGVjdGlvblR5cGVBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL2FwaS90eXBlL3Jvdy1zZWxlY3Rpb24tdHlwZS5hcmNoaXZlJztcbmltcG9ydCB7IGZvcm1hdGlvbkluaXRpYWxpemVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL2FwaS9mb3JtYXRpb24uYXBpLW1vZHVsZSc7XG5pbXBvcnQgeyBGb3JtYXRpb25FdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vYXBpL2Zvcm1hdGlvbi5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IEZvcm1hdGlvblB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9hcGkvZm9ybWF0aW9uLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vYXBpL2Zvcm1hdGlvbi53YXJlaG91c2UnO1xuXG5mb3JtYXRpb25Jbml0aWFsaXplci5pbml0KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlRm9ybWF0aW9uQ29tbWFuZEludm9rZXIoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoRm9ybWF0aW9uUHVibGlzaGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVGb3JtYXRpb25XYXJlaG91c2UoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoRm9ybWF0aW9uV2FyZWhvdXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVGb3JtYXRpb25FdmVudFJlcG9zaXRvcnkoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoRm9ybWF0aW9uRXZlbnRSZXBvc2l0b3J5KTtcbn1cblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7IHByb3ZpZGU6IEZvcm1hdGlvblB1Ymxpc2hlciwgdXNlRmFjdG9yeTogcHJvdmlkZUZvcm1hdGlvbkNvbW1hbmRJbnZva2VyIH0sXG5cdFx0eyBwcm92aWRlOiBGb3JtYXRpb25XYXJlaG91c2UsIHVzZUZhY3Rvcnk6IHByb3ZpZGVGb3JtYXRpb25XYXJlaG91c2UgfSxcblx0XHR7IHByb3ZpZGU6IEZvcm1hdGlvbkV2ZW50UmVwb3NpdG9yeSwgdXNlRmFjdG9yeTogcHJvdmlkZUZvcm1hdGlvbkV2ZW50UmVwb3NpdG9yeSB9XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRm9ybWF0aW9uRmVhdHVyZU1vZHVsZSBleHRlbmRzIEZlYXR1cmVNb2R1bGUge1xuXG5cdHN0YXRpYyBmb3JDb21wb25lbnQoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0Um93U2VsZWN0aW9uVHlwZUFyY2hpdmVcblx0XHRdO1xuXHR9XG5cblx0Ly8gY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgc291cmNlQXBpTW9kdWxlOiBTb3VyY2VBcGlNb2R1bGUpIHtcblx0Ly8gXHRzdXBlcigpO1xuXHQvLyBcdGlmIChzb3VyY2VBcGlNb2R1bGUgPT09IG51bGwpIHtcblx0Ly8gXHRcdHRocm93IG5ldyBFcnJvcignU291cmNlQXBpTW9kdWxlIGlzIHJlcXVpcmVkJyk7XG5cdC8vIFx0fVxuXHQvLyB9XG5cbn1cbiJdfQ==