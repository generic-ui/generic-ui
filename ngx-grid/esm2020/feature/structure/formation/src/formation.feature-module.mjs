import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreContainer, FeatureModule } from '@generic-ui/hermes';
import { FabricCheckboxModule, FabricTooltipModule } from '@generic-ui/fabric';
import { initializeFormation } from '../../../../core/structure/formation/src/api/formation.api-module';
import { FormationEventRepository } from '../../../../core/structure/formation/src/api/formation.event-repository';
import { FormationPublisher } from '../../../../core/structure/formation/src/api/formation.publisher';
import { FormationWarehouse } from '../../../../core/structure/formation/src/api/formation.warehouse';
import { SelectAllComponent } from './select-all/select-all.component';
import { SelectCustomComponent } from './select-custom/select-custom.component';
import { SelectCustomModalComponent } from './select-custom/select-custom-modal.component';
import * as i0 from "@angular/core";
initializeFormation();
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
}
FormationFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FormationFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
FormationFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.2", ngImport: i0, type: FormationFeatureModule, declarations: [SelectAllComponent,
        SelectCustomComponent,
        SelectCustomModalComponent], imports: [CommonModule,
        FabricCheckboxModule,
        FabricTooltipModule], exports: [SelectAllComponent,
        SelectCustomComponent,
        SelectCustomModalComponent] });
FormationFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FormationFeatureModule, providers: [
        { provide: FormationPublisher, useFactory: provideFormationCommandInvoker },
        { provide: FormationWarehouse, useFactory: provideFormationWarehouse },
        { provide: FormationEventRepository, useFactory: provideFormationEventRepository }
    ], imports: [CommonModule,
        FabricCheckboxModule,
        FabricTooltipModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FormationFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FabricCheckboxModule,
                        FabricTooltipModule
                    ],
                    declarations: [
                        SelectAllComponent,
                        SelectCustomComponent,
                        SelectCustomModalComponent
                    ],
                    exports: [
                        SelectAllComponent,
                        SelectCustomComponent,
                        SelectCustomModalComponent
                    ],
                    providers: [
                        { provide: FormationPublisher, useFactory: provideFormationCommandInvoker },
                        { provide: FormationWarehouse, useFactory: provideFormationWarehouse },
                        { provide: FormationEventRepository, useFactory: provideFormationEventRepository }
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9mb3JtYXRpb24vc3JjL2Zvcm1hdGlvbi5mZWF0dXJlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBQ25ILE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLCtDQUErQyxDQUFDOztBQUUzRixtQkFBbUIsRUFBRSxDQUFDO0FBRXRCLE1BQU0sVUFBVSw4QkFBOEI7SUFDN0MsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDbEQsQ0FBQztBQUVELE1BQU0sVUFBVSx5QkFBeUI7SUFDeEMsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDbEQsQ0FBQztBQUVELE1BQU0sVUFBVSwrQkFBK0I7SUFDOUMsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7QUFDeEQsQ0FBQztBQXlCRCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsYUFBYTs7bUhBQTVDLHNCQUFzQjtvSEFBdEIsc0JBQXNCLGlCQWZqQyxrQkFBa0I7UUFDbEIscUJBQXFCO1FBQ3JCLDBCQUEwQixhQVAxQixZQUFZO1FBQ1osb0JBQW9CO1FBQ3BCLG1CQUFtQixhQVFuQixrQkFBa0I7UUFDbEIscUJBQXFCO1FBQ3JCLDBCQUEwQjtvSEFRZixzQkFBc0IsYUFOdkI7UUFDVixFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxVQUFVLEVBQUUsOEJBQThCLEVBQUU7UUFDM0UsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLHlCQUF5QixFQUFFO1FBQ3RFLEVBQUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLFVBQVUsRUFBRSwrQkFBK0IsRUFBRTtLQUNsRixZQWxCQSxZQUFZO1FBQ1osb0JBQW9CO1FBQ3BCLG1CQUFtQjsyRkFrQlIsc0JBQXNCO2tCQXRCbEMsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixvQkFBb0I7d0JBQ3BCLG1CQUFtQjtxQkFDbkI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLGtCQUFrQjt3QkFDbEIscUJBQXFCO3dCQUNyQiwwQkFBMEI7cUJBQzFCO29CQUNELE9BQU8sRUFBRTt3QkFDUixrQkFBa0I7d0JBQ2xCLHFCQUFxQjt3QkFDckIsMEJBQTBCO3FCQUMxQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1YsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLDhCQUE4QixFQUFFO3dCQUMzRSxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxVQUFVLEVBQUUseUJBQXlCLEVBQUU7d0JBQ3RFLEVBQUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLFVBQVUsRUFBRSwrQkFBK0IsRUFBRTtxQkFDbEY7aUJBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ29yZUNvbnRhaW5lciwgRmVhdHVyZU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBGYWJyaWNDaGVja2JveE1vZHVsZSwgRmFicmljVG9vbHRpcE1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IGluaXRpYWxpemVGb3JtYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vc3JjL2FwaS9mb3JtYXRpb24uYXBpLW1vZHVsZSc7XG5pbXBvcnQgeyBGb3JtYXRpb25FdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vc3JjL2FwaS9mb3JtYXRpb24uZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBGb3JtYXRpb25QdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vc3JjL2FwaS9mb3JtYXRpb24ucHVibGlzaGVyJztcbmltcG9ydCB7IEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvYXBpL2Zvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgU2VsZWN0QWxsQ29tcG9uZW50IH0gZnJvbSAnLi9zZWxlY3QtYWxsL3NlbGVjdC1hbGwuY29tcG9uZW50JztcbmltcG9ydCB7IFNlbGVjdEN1c3RvbUNvbXBvbmVudCB9IGZyb20gJy4vc2VsZWN0LWN1c3RvbS9zZWxlY3QtY3VzdG9tLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWxlY3RDdXN0b21Nb2RhbENvbXBvbmVudCB9IGZyb20gJy4vc2VsZWN0LWN1c3RvbS9zZWxlY3QtY3VzdG9tLW1vZGFsLmNvbXBvbmVudCc7XG5cbmluaXRpYWxpemVGb3JtYXRpb24oKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVGb3JtYXRpb25Db21tYW5kSW52b2tlcigpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShGb3JtYXRpb25QdWJsaXNoZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUZvcm1hdGlvbldhcmVob3VzZSgpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShGb3JtYXRpb25XYXJlaG91c2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUZvcm1hdGlvbkV2ZW50UmVwb3NpdG9yeSgpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShGb3JtYXRpb25FdmVudFJlcG9zaXRvcnkpO1xufVxuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0RmFicmljQ2hlY2tib3hNb2R1bGUsXG5cdFx0RmFicmljVG9vbHRpcE1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRTZWxlY3RBbGxDb21wb25lbnQsXG5cdFx0U2VsZWN0Q3VzdG9tQ29tcG9uZW50LFxuXHRcdFNlbGVjdEN1c3RvbU1vZGFsQ29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRTZWxlY3RBbGxDb21wb25lbnQsXG5cdFx0U2VsZWN0Q3VzdG9tQ29tcG9uZW50LFxuXHRcdFNlbGVjdEN1c3RvbU1vZGFsQ29tcG9uZW50XG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdHsgcHJvdmlkZTogRm9ybWF0aW9uUHVibGlzaGVyLCB1c2VGYWN0b3J5OiBwcm92aWRlRm9ybWF0aW9uQ29tbWFuZEludm9rZXIgfSxcblx0XHR7IHByb3ZpZGU6IEZvcm1hdGlvbldhcmVob3VzZSwgdXNlRmFjdG9yeTogcHJvdmlkZUZvcm1hdGlvbldhcmVob3VzZSB9LFxuXHRcdHsgcHJvdmlkZTogRm9ybWF0aW9uRXZlbnRSZXBvc2l0b3J5LCB1c2VGYWN0b3J5OiBwcm92aWRlRm9ybWF0aW9uRXZlbnRSZXBvc2l0b3J5IH1cblx0XVxufSlcbmV4cG9ydCBjbGFzcyBGb3JtYXRpb25GZWF0dXJlTW9kdWxlIGV4dGVuZHMgRmVhdHVyZU1vZHVsZSB7XG5cbn1cbiJdfQ==