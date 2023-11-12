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
import { SelectCustomModalComponent } from './select-custom/modal/select-custom-modal.component';
import { GuiTemplateModule } from '../../../gui-angular/template/gui.template.module';
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FormationFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.2", ngImport: i0, type: FormationFeatureModule, declarations: [SelectAllComponent,
            SelectCustomComponent,
            SelectCustomModalComponent], imports: [CommonModule,
            GuiTemplateModule,
            FabricCheckboxModule,
            FabricTooltipModule], exports: [SelectAllComponent,
            SelectCustomComponent,
            SelectCustomModalComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FormationFeatureModule, providers: [
            { provide: FormationPublisher, useFactory: provideFormationCommandInvoker },
            { provide: FormationWarehouse, useFactory: provideFormationWarehouse },
            { provide: FormationEventRepository, useFactory: provideFormationEventRepository }
        ], imports: [CommonModule,
            GuiTemplateModule,
            FabricCheckboxModule,
            FabricTooltipModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FormationFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        GuiTemplateModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9mb3JtYXRpb24vc3JjL2Zvcm1hdGlvbi5mZWF0dXJlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBQ25ILE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDOztBQUV0RixtQkFBbUIsRUFBRSxDQUFDO0FBRXRCLE1BQU0sVUFBVSw4QkFBOEI7SUFDN0MsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDbEQsQ0FBQztBQUVELE1BQU0sVUFBVSx5QkFBeUI7SUFDeEMsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDbEQsQ0FBQztBQUVELE1BQU0sVUFBVSwrQkFBK0I7SUFDOUMsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7QUFDeEQsQ0FBQztBQTBCRCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsYUFBYTt1R0FBNUMsc0JBQXNCO3dHQUF0QixzQkFBc0IsaUJBZmpDLGtCQUFrQjtZQUNsQixxQkFBcUI7WUFDckIsMEJBQTBCLGFBUjFCLFlBQVk7WUFDWixpQkFBaUI7WUFDakIsb0JBQW9CO1lBQ3BCLG1CQUFtQixhQVFuQixrQkFBa0I7WUFDbEIscUJBQXFCO1lBQ3JCLDBCQUEwQjt3R0FRZixzQkFBc0IsYUFOdkI7WUFDVixFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxVQUFVLEVBQUUsOEJBQThCLEVBQUU7WUFDM0UsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLHlCQUF5QixFQUFFO1lBQ3RFLEVBQUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLFVBQVUsRUFBRSwrQkFBK0IsRUFBRTtTQUNsRixZQW5CQSxZQUFZO1lBQ1osaUJBQWlCO1lBQ2pCLG9CQUFvQjtZQUNwQixtQkFBbUI7OzJGQWtCUixzQkFBc0I7a0JBdkJsQyxRQUFRO21CQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLGlCQUFpQjt3QkFDakIsb0JBQW9CO3dCQUNwQixtQkFBbUI7cUJBQ25CO29CQUNELFlBQVksRUFBRTt3QkFDYixrQkFBa0I7d0JBQ2xCLHFCQUFxQjt3QkFDckIsMEJBQTBCO3FCQUMxQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Isa0JBQWtCO3dCQUNsQixxQkFBcUI7d0JBQ3JCLDBCQUEwQjtxQkFDMUI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNWLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSw4QkFBOEIsRUFBRTt3QkFDM0UsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLHlCQUF5QixFQUFFO3dCQUN0RSxFQUFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsK0JBQStCLEVBQUU7cUJBQ2xGO2lCQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENvcmVDb250YWluZXIsIEZlYXR1cmVNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgRmFicmljQ2hlY2tib3hNb2R1bGUsIEZhYnJpY1Rvb2x0aXBNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBpbml0aWFsaXplRm9ybWF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9hcGkvZm9ybWF0aW9uLmFwaS1tb2R1bGUnO1xuaW1wb3J0IHsgRm9ybWF0aW9uRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9hcGkvZm9ybWF0aW9uLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgRm9ybWF0aW9uUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9hcGkvZm9ybWF0aW9uLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vc3JjL2FwaS9mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFNlbGVjdEFsbENvbXBvbmVudCB9IGZyb20gJy4vc2VsZWN0LWFsbC9zZWxlY3QtYWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWxlY3RDdXN0b21Db21wb25lbnQgfSBmcm9tICcuL3NlbGVjdC1jdXN0b20vc2VsZWN0LWN1c3RvbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0Q3VzdG9tTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL3NlbGVjdC1jdXN0b20vbW9kYWwvc2VsZWN0LWN1c3RvbS1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3VpVGVtcGxhdGVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9ndWktYW5ndWxhci90ZW1wbGF0ZS9ndWkudGVtcGxhdGUubW9kdWxlJztcblxuaW5pdGlhbGl6ZUZvcm1hdGlvbigpO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUZvcm1hdGlvbkNvbW1hbmRJbnZva2VyKCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKEZvcm1hdGlvblB1Ymxpc2hlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlRm9ybWF0aW9uV2FyZWhvdXNlKCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKEZvcm1hdGlvbldhcmVob3VzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlRm9ybWF0aW9uRXZlbnRSZXBvc2l0b3J5KCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKEZvcm1hdGlvbkV2ZW50UmVwb3NpdG9yeSk7XG59XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRHdWlUZW1wbGF0ZU1vZHVsZSxcblx0XHRGYWJyaWNDaGVja2JveE1vZHVsZSxcblx0XHRGYWJyaWNUb29sdGlwTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdFNlbGVjdEFsbENvbXBvbmVudCxcblx0XHRTZWxlY3RDdXN0b21Db21wb25lbnQsXG5cdFx0U2VsZWN0Q3VzdG9tTW9kYWxDb21wb25lbnRcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdFNlbGVjdEFsbENvbXBvbmVudCxcblx0XHRTZWxlY3RDdXN0b21Db21wb25lbnQsXG5cdFx0U2VsZWN0Q3VzdG9tTW9kYWxDb21wb25lbnRcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0eyBwcm92aWRlOiBGb3JtYXRpb25QdWJsaXNoZXIsIHVzZUZhY3Rvcnk6IHByb3ZpZGVGb3JtYXRpb25Db21tYW5kSW52b2tlciB9LFxuXHRcdHsgcHJvdmlkZTogRm9ybWF0aW9uV2FyZWhvdXNlLCB1c2VGYWN0b3J5OiBwcm92aWRlRm9ybWF0aW9uV2FyZWhvdXNlIH0sXG5cdFx0eyBwcm92aWRlOiBGb3JtYXRpb25FdmVudFJlcG9zaXRvcnksIHVzZUZhY3Rvcnk6IHByb3ZpZGVGb3JtYXRpb25FdmVudFJlcG9zaXRvcnkgfVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1hdGlvbkZlYXR1cmVNb2R1bGUgZXh0ZW5kcyBGZWF0dXJlTW9kdWxlIHtcblxufVxuIl19