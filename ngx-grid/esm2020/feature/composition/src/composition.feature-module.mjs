import { ComponentFactoryResolver, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreContainer, FeatureModule } from '@generic-ui/hermes';
import { FabricButtonComponent, FabricButtonModule, FabricCheckboxComponent, FabricCheckboxModule, FabricChipComponent, FabricChipModule, FabricDatePickerModule, FabricInputComponent, FabricInputModule } from '@generic-ui/fabric';
import { initializeComposition } from '../../../core/composition/src/api/composition.api-module';
import { ViewTemplatesComponent } from './column/view/view-templates.component';
import { EditTemplatesComponent } from './column/edit/edit-templates.component';
import { SanitizeModule } from '../../common/src/cdk/sanitize/sanitize.module';
import { StringEditTemplateComponent } from './column/edit/template/string-edit-template.component';
import { NumberEditTemplateComponent } from './column/edit/template/number-edit-template.component';
import { BooleanEditTemplateComponent } from './column/edit/template/boolean-edit-template.component';
import { DateEditTemplateComponent } from './column/edit/template/date-edit-template.component';
import { ColumnQueryComponent } from './column/column-query.component';
import { FunctionViewComponent } from './column/view/function/function-view.component';
import { BarViewComponent } from './column/view/bar/bar-view.component';
import { PercentageViewComponent } from './column/view/percentage/percentage-view.component';
import { TextViewComponent } from './column/view/text/text-view.component';
import { HtmlViewComponent } from './column/view/html/html-view.component';
import { CompositionPublisher } from '../../../core/composition/src/api/composition.publisher';
import { ColumnFieldFactory } from '../../../core/composition/src/domain/column/field/colum-field.factory';
import { CompositionEventRepository } from '../../../core/composition/src/api/composition.event-repository';
import { CompositionWarehouse } from '../../../core/composition/src/api/composition.warehouse';
import { ColumnAutoConfigurator } from '../../../core/composition/src/api/column/auto/column-auto.configurator';
import { CompositionTemplateWarehouse } from './column/composition.template-warehouse';
import { ViewTemplateRepository } from './column/view/view-template.repository';
import { EditTemplateRepository } from './column/edit/edit-template.repository';
import { ViewTemplateFactory } from './column/view/view-template.factory';
import { EditTemplateFactory } from './column/edit/edit-template.factory';
import * as i0 from "@angular/core";
const components = [
    ViewTemplatesComponent,
    EditTemplatesComponent,
    StringEditTemplateComponent,
    NumberEditTemplateComponent,
    BooleanEditTemplateComponent,
    DateEditTemplateComponent,
    ColumnQueryComponent,
    FunctionViewComponent,
    BarViewComponent,
    PercentageViewComponent,
    TextViewComponent,
    HtmlViewComponent
];
const exportDeclarations = [
    ViewTemplatesComponent,
    EditTemplatesComponent,
    ColumnQueryComponent,
    FabricChipModule,
    FabricCheckboxModule,
    FabricButtonModule,
    FabricInputModule,
    FunctionViewComponent,
    BarViewComponent,
    PercentageViewComponent,
    HtmlViewComponent
];
initializeComposition();
export function provideCompositionCommandPublisher() {
    return CoreContainer.resolve(CompositionPublisher);
}
export function provideCompositionWarehouse() {
    return CoreContainer.resolve(CompositionWarehouse);
}
export function provideCompositionEventRepository() {
    return CoreContainer.resolve(CompositionEventRepository);
}
export function provideColumnAutoConfigurator() {
    return CoreContainer.resolve(ColumnAutoConfigurator);
}
export function provideColumnFieldFactory() {
    return CoreContainer.resolve(ColumnFieldFactory);
}
export class CompositionFeatureModule extends FeatureModule {
    constructor(cfr) {
        super();
        CoreContainer.provideValue(ComponentFactoryResolver, cfr);
    }
    static forComponent() {
        return [];
    }
}
CompositionFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: CompositionFeatureModule, deps: [{ token: i0.ComponentFactoryResolver }], target: i0.ɵɵFactoryTarget.NgModule });
CompositionFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.2", ngImport: i0, type: CompositionFeatureModule, declarations: [ViewTemplatesComponent,
        EditTemplatesComponent,
        StringEditTemplateComponent,
        NumberEditTemplateComponent,
        BooleanEditTemplateComponent,
        DateEditTemplateComponent,
        ColumnQueryComponent,
        FunctionViewComponent,
        BarViewComponent,
        PercentageViewComponent,
        TextViewComponent,
        HtmlViewComponent], imports: [CommonModule,
        ReactiveFormsModule,
        SanitizeModule,
        FabricChipModule,
        FabricCheckboxModule,
        FabricButtonModule,
        FabricInputModule,
        FabricDatePickerModule], exports: [ViewTemplatesComponent,
        EditTemplatesComponent,
        ColumnQueryComponent,
        FabricChipModule,
        FabricCheckboxModule,
        FabricButtonModule,
        FabricInputModule,
        FunctionViewComponent,
        BarViewComponent,
        PercentageViewComponent,
        HtmlViewComponent] });
CompositionFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: CompositionFeatureModule, providers: [
        { provide: CompositionPublisher, useFactory: provideCompositionCommandPublisher },
        { provide: CompositionWarehouse, useFactory: provideCompositionWarehouse },
        { provide: CompositionEventRepository, useFactory: provideCompositionEventRepository },
        CompositionTemplateWarehouse,
        ViewTemplateRepository,
        ViewTemplateFactory,
        EditTemplateRepository,
        EditTemplateFactory,
        { provide: ColumnAutoConfigurator, useFactory: provideColumnAutoConfigurator },
        { provide: ColumnFieldFactory, useFactory: provideColumnFieldFactory }
    ], imports: [CommonModule,
        ReactiveFormsModule,
        SanitizeModule,
        FabricChipModule,
        FabricCheckboxModule,
        FabricButtonModule,
        FabricInputModule,
        FabricDatePickerModule, FabricChipModule,
        FabricCheckboxModule,
        FabricButtonModule,
        FabricInputModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: CompositionFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        SanitizeModule,
                        FabricChipModule,
                        FabricCheckboxModule,
                        FabricButtonModule,
                        FabricInputModule,
                        FabricDatePickerModule
                    ],
                    declarations: [
                        components
                    ],
                    exports: [
                        exportDeclarations
                    ],
                    entryComponents: [
                        ViewTemplatesComponent,
                        EditTemplatesComponent,
                        FabricChipComponent,
                        FabricCheckboxComponent,
                        FabricButtonComponent,
                        FabricInputComponent
                    ],
                    providers: [
                        { provide: CompositionPublisher, useFactory: provideCompositionCommandPublisher },
                        { provide: CompositionWarehouse, useFactory: provideCompositionWarehouse },
                        { provide: CompositionEventRepository, useFactory: provideCompositionEventRepository },
                        CompositionTemplateWarehouse,
                        ViewTemplateRepository,
                        ViewTemplateFactory,
                        EditTemplateRepository,
                        EditTemplateFactory,
                        { provide: ColumnAutoConfigurator, useFactory: provideColumnAutoConfigurator },
                        { provide: ColumnFieldFactory, useFactory: provideColumnFieldFactory }
                    ]
                }]
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uZmVhdHVyZS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvY29tcG9zaXRpb24vc3JjL2NvbXBvc2l0aW9uLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEUsT0FBTyxFQUNOLHFCQUFxQixFQUNyQixrQkFBa0IsRUFDbEIsdUJBQXVCLEVBQ3ZCLG9CQUFvQixFQUNwQixtQkFBbUIsRUFDbkIsZ0JBQWdCLEVBQ2hCLHNCQUFzQixFQUN0QixvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDakcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFaEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHFEQUFx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QkFDUixZQUFZO3dCQUVaLG1CQUFtQjt3QkFFbkIsY0FBYzt3QkFFZCxnQkFBZ0I7d0JBQ2hCLG9CQUFvQjt3QkFDcEIsa0JBQWtCO3dCQUNsQixpQkFBaUI7d0JBQ2pCLHNCQUFzQjtxQkFDdEI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLFVBQVU7cUJBQ1Y7b0JBQ0QsT0FBTyxFQUFFO3dCQUNSLGtCQUFrQjtxQkFDbEI7b0JBQ0QsZUFBZSxFQUFFO3dCQUNoQixzQkFBc0I7d0JBQ3RCLHNCQUFzQjt3QkFDdEIsbUJBQW1CO3dCQUNuQix1QkFBdUI7d0JBQ3ZCLHFCQUFxQjt3QkFDckIsb0JBQW9CO3FCQUNwQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1YsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsVUFBVSxFQUFFLGtDQUFrQyxFQUFFO3dCQUNqRixFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxVQUFVLEVBQUUsMkJBQTJCLEVBQUU7d0JBQzFFLEVBQUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLFVBQVUsRUFBRSxpQ0FBaUMsRUFBRTt3QkFDdEYsNEJBQTRCO3dCQUM1QixzQkFBc0I7d0JBQ3RCLG1CQUFtQjt3QkFDbkIsc0JBQXNCO3dCQUN0QixtQkFBbUI7d0JBRW5CLEVBQUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFVBQVUsRUFBRSw2QkFBNkIsRUFBRTt3QkFDOUUsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLHlCQUF5QixFQUFFO3FCQUN0RTtpQkFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQ29yZUNvbnRhaW5lciwgRmVhdHVyZU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7XG5cdEZhYnJpY0J1dHRvbkNvbXBvbmVudCxcblx0RmFicmljQnV0dG9uTW9kdWxlLFxuXHRGYWJyaWNDaGVja2JveENvbXBvbmVudCxcblx0RmFicmljQ2hlY2tib3hNb2R1bGUsXG5cdEZhYnJpY0NoaXBDb21wb25lbnQsXG5cdEZhYnJpY0NoaXBNb2R1bGUsXG5cdEZhYnJpY0RhdGVQaWNrZXJNb2R1bGUsXG5cdEZhYnJpY0lucHV0Q29tcG9uZW50LFxuXHRGYWJyaWNJbnB1dE1vZHVsZVxufSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBpbml0aWFsaXplQ29tcG9zaXRpb24gfSBmcm9tICcuLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL3NyYy9hcGkvY29tcG9zaXRpb24uYXBpLW1vZHVsZSc7XG5pbXBvcnQgeyBWaWV3VGVtcGxhdGVzQ29tcG9uZW50IH0gZnJvbSAnLi9jb2x1bW4vdmlldy92aWV3LXRlbXBsYXRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRWRpdFRlbXBsYXRlc0NvbXBvbmVudCB9IGZyb20gJy4vY29sdW1uL2VkaXQvZWRpdC10ZW1wbGF0ZXMuY29tcG9uZW50JztcblxuaW1wb3J0IHsgU2FuaXRpemVNb2R1bGUgfSBmcm9tICcuLi8uLi9jb21tb24vc3JjL2Nkay9zYW5pdGl6ZS9zYW5pdGl6ZS5tb2R1bGUnO1xuaW1wb3J0IHsgU3RyaW5nRWRpdFRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jb2x1bW4vZWRpdC90ZW1wbGF0ZS9zdHJpbmctZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnVtYmVyRWRpdFRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jb2x1bW4vZWRpdC90ZW1wbGF0ZS9udW1iZXItZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQm9vbGVhbkVkaXRUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vY29sdW1uL2VkaXQvdGVtcGxhdGUvYm9vbGVhbi1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlRWRpdFRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jb2x1bW4vZWRpdC90ZW1wbGF0ZS9kYXRlLWVkaXQtdGVtcGxhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IENvbHVtblF1ZXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9jb2x1bW4vY29sdW1uLXF1ZXJ5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGdW5jdGlvblZpZXdDb21wb25lbnQgfSBmcm9tICcuL2NvbHVtbi92aWV3L2Z1bmN0aW9uL2Z1bmN0aW9uLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEJhclZpZXdDb21wb25lbnQgfSBmcm9tICcuL2NvbHVtbi92aWV3L2Jhci9iYXItdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGVyY2VudGFnZVZpZXdDb21wb25lbnQgfSBmcm9tICcuL2NvbHVtbi92aWV3L3BlcmNlbnRhZ2UvcGVyY2VudGFnZS12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXh0Vmlld0NvbXBvbmVudCB9IGZyb20gJy4vY29sdW1uL3ZpZXcvdGV4dC90ZXh0LXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEh0bWxWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9jb2x1bW4vdmlldy9odG1sL2h0bWwtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25QdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL3NyYy9hcGkvY29tcG9zaXRpb24ucHVibGlzaGVyJztcbmltcG9ydCB7IENvbHVtbkZpZWxkRmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvY29tcG9zaXRpb24vc3JjL2RvbWFpbi9jb2x1bW4vZmllbGQvY29sdW0tZmllbGQuZmFjdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvY29tcG9zaXRpb24vc3JjL2FwaS9jb21wb3NpdGlvbi5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9jb21wb3NpdGlvbi9zcmMvYXBpL2NvbXBvc2l0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBDb2x1bW5BdXRvQ29uZmlndXJhdG9yIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9jb21wb3NpdGlvbi9zcmMvYXBpL2NvbHVtbi9hdXRvL2NvbHVtbi1hdXRvLmNvbmZpZ3VyYXRvcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvblRlbXBsYXRlV2FyZWhvdXNlIH0gZnJvbSAnLi9jb2x1bW4vY29tcG9zaXRpb24udGVtcGxhdGUtd2FyZWhvdXNlJztcbmltcG9ydCB7IFZpZXdUZW1wbGF0ZVJlcG9zaXRvcnkgfSBmcm9tICcuL2NvbHVtbi92aWV3L3ZpZXctdGVtcGxhdGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBFZGl0VGVtcGxhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi9jb2x1bW4vZWRpdC9lZGl0LXRlbXBsYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgVmlld1RlbXBsYXRlRmFjdG9yeSB9IGZyb20gJy4vY29sdW1uL3ZpZXcvdmlldy10ZW1wbGF0ZS5mYWN0b3J5JztcbmltcG9ydCB7IEVkaXRUZW1wbGF0ZUZhY3RvcnkgfSBmcm9tICcuL2NvbHVtbi9lZGl0L2VkaXQtdGVtcGxhdGUuZmFjdG9yeSc7XG5cblxuY29uc3QgY29tcG9uZW50cyA9IFtcblx0Vmlld1RlbXBsYXRlc0NvbXBvbmVudCxcblx0RWRpdFRlbXBsYXRlc0NvbXBvbmVudCxcblx0U3RyaW5nRWRpdFRlbXBsYXRlQ29tcG9uZW50LFxuXHROdW1iZXJFZGl0VGVtcGxhdGVDb21wb25lbnQsXG5cdEJvb2xlYW5FZGl0VGVtcGxhdGVDb21wb25lbnQsXG5cdERhdGVFZGl0VGVtcGxhdGVDb21wb25lbnQsXG5cdENvbHVtblF1ZXJ5Q29tcG9uZW50LFxuXG5cdEZ1bmN0aW9uVmlld0NvbXBvbmVudCxcblx0QmFyVmlld0NvbXBvbmVudCxcblx0UGVyY2VudGFnZVZpZXdDb21wb25lbnQsXG5cdFRleHRWaWV3Q29tcG9uZW50LFxuXHRIdG1sVmlld0NvbXBvbmVudFxuXTtcblxuY29uc3QgZXhwb3J0RGVjbGFyYXRpb25zID0gW1xuXHRWaWV3VGVtcGxhdGVzQ29tcG9uZW50LFxuXHRFZGl0VGVtcGxhdGVzQ29tcG9uZW50LFxuXHRDb2x1bW5RdWVyeUNvbXBvbmVudCxcblxuXHRGYWJyaWNDaGlwTW9kdWxlLFxuXHRGYWJyaWNDaGVja2JveE1vZHVsZSxcblx0RmFicmljQnV0dG9uTW9kdWxlLFxuXHRGYWJyaWNJbnB1dE1vZHVsZSxcblxuXHRGdW5jdGlvblZpZXdDb21wb25lbnQsXG5cdEJhclZpZXdDb21wb25lbnQsXG5cdFBlcmNlbnRhZ2VWaWV3Q29tcG9uZW50LFxuXHRIdG1sVmlld0NvbXBvbmVudFxuXTtcblxuaW5pdGlhbGl6ZUNvbXBvc2l0aW9uKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlQ29tcG9zaXRpb25Db21tYW5kUHVibGlzaGVyKCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKENvbXBvc2l0aW9uUHVibGlzaGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVDb21wb3NpdGlvbldhcmVob3VzZSgpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShDb21wb3NpdGlvbldhcmVob3VzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlQ29tcG9zaXRpb25FdmVudFJlcG9zaXRvcnkoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoQ29tcG9zaXRpb25FdmVudFJlcG9zaXRvcnkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUNvbHVtbkF1dG9Db25maWd1cmF0b3IoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoQ29sdW1uQXV0b0NvbmZpZ3VyYXRvcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlQ29sdW1uRmllbGRGYWN0b3J5KCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKENvbHVtbkZpZWxkRmFjdG9yeSk7XG59XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXG5cblx0XHRTYW5pdGl6ZU1vZHVsZSxcblxuXHRcdEZhYnJpY0NoaXBNb2R1bGUsXG5cdFx0RmFicmljQ2hlY2tib3hNb2R1bGUsXG5cdFx0RmFicmljQnV0dG9uTW9kdWxlLFxuXHRcdEZhYnJpY0lucHV0TW9kdWxlLFxuXHRcdEZhYnJpY0RhdGVQaWNrZXJNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Y29tcG9uZW50c1xuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0ZXhwb3J0RGVjbGFyYXRpb25zXG5cdF0sXG5cdGVudHJ5Q29tcG9uZW50czogW1xuXHRcdFZpZXdUZW1wbGF0ZXNDb21wb25lbnQsXG5cdFx0RWRpdFRlbXBsYXRlc0NvbXBvbmVudCxcblx0XHRGYWJyaWNDaGlwQ29tcG9uZW50LFxuXHRcdEZhYnJpY0NoZWNrYm94Q29tcG9uZW50LFxuXHRcdEZhYnJpY0J1dHRvbkNvbXBvbmVudCxcblx0XHRGYWJyaWNJbnB1dENvbXBvbmVudFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7IHByb3ZpZGU6IENvbXBvc2l0aW9uUHVibGlzaGVyLCB1c2VGYWN0b3J5OiBwcm92aWRlQ29tcG9zaXRpb25Db21tYW5kUHVibGlzaGVyIH0sXG5cdFx0eyBwcm92aWRlOiBDb21wb3NpdGlvbldhcmVob3VzZSwgdXNlRmFjdG9yeTogcHJvdmlkZUNvbXBvc2l0aW9uV2FyZWhvdXNlIH0sXG5cdFx0eyBwcm92aWRlOiBDb21wb3NpdGlvbkV2ZW50UmVwb3NpdG9yeSwgdXNlRmFjdG9yeTogcHJvdmlkZUNvbXBvc2l0aW9uRXZlbnRSZXBvc2l0b3J5IH0sXG5cdFx0Q29tcG9zaXRpb25UZW1wbGF0ZVdhcmVob3VzZSxcblx0XHRWaWV3VGVtcGxhdGVSZXBvc2l0b3J5LFxuXHRcdFZpZXdUZW1wbGF0ZUZhY3RvcnksXG5cdFx0RWRpdFRlbXBsYXRlUmVwb3NpdG9yeSxcblx0XHRFZGl0VGVtcGxhdGVGYWN0b3J5LFxuXG5cdFx0eyBwcm92aWRlOiBDb2x1bW5BdXRvQ29uZmlndXJhdG9yLCB1c2VGYWN0b3J5OiBwcm92aWRlQ29sdW1uQXV0b0NvbmZpZ3VyYXRvciB9LFxuXHRcdHsgcHJvdmlkZTogQ29sdW1uRmllbGRGYWN0b3J5LCB1c2VGYWN0b3J5OiBwcm92aWRlQ29sdW1uRmllbGRGYWN0b3J5IH1cblx0XVxufSlcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkZlYXR1cmVNb2R1bGUgZXh0ZW5kcyBGZWF0dXJlTW9kdWxlIHtcblxuXHRjb25zdHJ1Y3RvcihjZnI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge1xuXHRcdHN1cGVyKCk7XG5cdFx0Q29yZUNvbnRhaW5lci5wcm92aWRlVmFsdWUoQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBjZnIpO1xuXHR9XG5cblx0c3RhdGljIGZvckNvbXBvbmVudCgpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG59XG4iXX0=