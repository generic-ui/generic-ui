import { ComponentFactoryResolver, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreContainer, FeatureModule } from '@generic-ui/hermes';
import { FabricButtonModule, FabricCheckboxModule, FabricChipModule, FabricDatePickerModule, FabricInputModule } from '@generic-ui/fabric';
import { initializeComposition } from '../../../core/composition/src/api/composition.api-module';
import { ViewTemplatesComponent } from './column/view/view-templates.component';
import { EditTemplatesComponent } from './column/edit/edit-templates.component';
import { SanitizeModule } from '../../common/cdk/src/sanitize/sanitize.module';
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CompositionFeatureModule, deps: [{ token: i0.ComponentFactoryResolver }], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: CompositionFeatureModule, declarations: [ViewTemplatesComponent,
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
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CompositionFeatureModule, providers: [
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
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CompositionFeatureModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uZmVhdHVyZS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUvY29tcG9zaXRpb24vc3JjL2NvbXBvc2l0aW9uLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEUsT0FBTyxFQUVOLGtCQUFrQixFQUVsQixvQkFBb0IsRUFFcEIsZ0JBQWdCLEVBQ2hCLHNCQUFzQixFQUV0QixpQkFBaUIsRUFDakIsTUFBTSxvQkFBb0IsQ0FBQztBQUU1QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUVoRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDL0UsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDcEcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDcEcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDdEcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDaEcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7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aEIsb0JBQW9CO3dCQUNwQixrQkFBa0I7d0JBQ2xCLGlCQUFpQjt3QkFDakIsc0JBQXNCO3FCQUN0QjtvQkFDRCxZQUFZLEVBQUU7d0JBQ2IsVUFBVTtxQkFDVjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Isa0JBQWtCO3FCQUNsQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1YsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsVUFBVSxFQUFFLGtDQUFrQyxFQUFFO3dCQUNqRixFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxVQUFVLEVBQUUsMkJBQTJCLEVBQUU7d0JBQzFFLEVBQUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLFVBQVUsRUFBRSxpQ0FBaUMsRUFBRTt3QkFDdEYsNEJBQTRCO3dCQUM1QixzQkFBc0I7d0JBQ3RCLG1CQUFtQjt3QkFDbkIsc0JBQXNCO3dCQUN0QixtQkFBbUI7d0JBRW5CLEVBQUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFVBQVUsRUFBRSw2QkFBNkIsRUFBRTt3QkFDOUUsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLHlCQUF5QixFQUFFO3FCQUN0RTtpQkFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQ29yZUNvbnRhaW5lciwgRmVhdHVyZU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7XG5cdEZhYnJpY0J1dHRvbkNvbXBvbmVudCxcblx0RmFicmljQnV0dG9uTW9kdWxlLFxuXHRGYWJyaWNDaGVja2JveENvbXBvbmVudCxcblx0RmFicmljQ2hlY2tib3hNb2R1bGUsXG5cdEZhYnJpY0NoaXBDb21wb25lbnQsXG5cdEZhYnJpY0NoaXBNb2R1bGUsXG5cdEZhYnJpY0RhdGVQaWNrZXJNb2R1bGUsXG5cdEZhYnJpY0lucHV0Q29tcG9uZW50LFxuXHRGYWJyaWNJbnB1dE1vZHVsZVxufSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBpbml0aWFsaXplQ29tcG9zaXRpb24gfSBmcm9tICcuLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL3NyYy9hcGkvY29tcG9zaXRpb24uYXBpLW1vZHVsZSc7XG5pbXBvcnQgeyBWaWV3VGVtcGxhdGVzQ29tcG9uZW50IH0gZnJvbSAnLi9jb2x1bW4vdmlldy92aWV3LXRlbXBsYXRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRWRpdFRlbXBsYXRlc0NvbXBvbmVudCB9IGZyb20gJy4vY29sdW1uL2VkaXQvZWRpdC10ZW1wbGF0ZXMuY29tcG9uZW50JztcblxuaW1wb3J0IHsgU2FuaXRpemVNb2R1bGUgfSBmcm9tICcuLi8uLi9jb21tb24vY2RrL3NyYy9zYW5pdGl6ZS9zYW5pdGl6ZS5tb2R1bGUnO1xuaW1wb3J0IHsgU3RyaW5nRWRpdFRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jb2x1bW4vZWRpdC90ZW1wbGF0ZS9zdHJpbmctZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnVtYmVyRWRpdFRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jb2x1bW4vZWRpdC90ZW1wbGF0ZS9udW1iZXItZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQm9vbGVhbkVkaXRUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vY29sdW1uL2VkaXQvdGVtcGxhdGUvYm9vbGVhbi1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlRWRpdFRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jb2x1bW4vZWRpdC90ZW1wbGF0ZS9kYXRlLWVkaXQtdGVtcGxhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IENvbHVtblF1ZXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9jb2x1bW4vY29sdW1uLXF1ZXJ5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGdW5jdGlvblZpZXdDb21wb25lbnQgfSBmcm9tICcuL2NvbHVtbi92aWV3L2Z1bmN0aW9uL2Z1bmN0aW9uLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEJhclZpZXdDb21wb25lbnQgfSBmcm9tICcuL2NvbHVtbi92aWV3L2Jhci9iYXItdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGVyY2VudGFnZVZpZXdDb21wb25lbnQgfSBmcm9tICcuL2NvbHVtbi92aWV3L3BlcmNlbnRhZ2UvcGVyY2VudGFnZS12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXh0Vmlld0NvbXBvbmVudCB9IGZyb20gJy4vY29sdW1uL3ZpZXcvdGV4dC90ZXh0LXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEh0bWxWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9jb2x1bW4vdmlldy9odG1sL2h0bWwtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25QdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL3NyYy9hcGkvY29tcG9zaXRpb24ucHVibGlzaGVyJztcbmltcG9ydCB7IENvbHVtbkZpZWxkRmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvY29tcG9zaXRpb24vc3JjL2RvbWFpbi9jb2x1bW4vZmllbGQvY29sdW0tZmllbGQuZmFjdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvY29tcG9zaXRpb24vc3JjL2FwaS9jb21wb3NpdGlvbi5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9jb21wb3NpdGlvbi9zcmMvYXBpL2NvbXBvc2l0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBDb2x1bW5BdXRvQ29uZmlndXJhdG9yIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9jb21wb3NpdGlvbi9zcmMvYXBpL2NvbHVtbi9hdXRvL2NvbHVtbi1hdXRvLmNvbmZpZ3VyYXRvcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvblRlbXBsYXRlV2FyZWhvdXNlIH0gZnJvbSAnLi9jb2x1bW4vY29tcG9zaXRpb24udGVtcGxhdGUtd2FyZWhvdXNlJztcbmltcG9ydCB7IFZpZXdUZW1wbGF0ZVJlcG9zaXRvcnkgfSBmcm9tICcuL2NvbHVtbi92aWV3L3ZpZXctdGVtcGxhdGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBFZGl0VGVtcGxhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi9jb2x1bW4vZWRpdC9lZGl0LXRlbXBsYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgVmlld1RlbXBsYXRlRmFjdG9yeSB9IGZyb20gJy4vY29sdW1uL3ZpZXcvdmlldy10ZW1wbGF0ZS5mYWN0b3J5JztcbmltcG9ydCB7IEVkaXRUZW1wbGF0ZUZhY3RvcnkgfSBmcm9tICcuL2NvbHVtbi9lZGl0L2VkaXQtdGVtcGxhdGUuZmFjdG9yeSc7XG5cblxuY29uc3QgY29tcG9uZW50cyA9IFtcblx0Vmlld1RlbXBsYXRlc0NvbXBvbmVudCxcblx0RWRpdFRlbXBsYXRlc0NvbXBvbmVudCxcblx0U3RyaW5nRWRpdFRlbXBsYXRlQ29tcG9uZW50LFxuXHROdW1iZXJFZGl0VGVtcGxhdGVDb21wb25lbnQsXG5cdEJvb2xlYW5FZGl0VGVtcGxhdGVDb21wb25lbnQsXG5cdERhdGVFZGl0VGVtcGxhdGVDb21wb25lbnQsXG5cdENvbHVtblF1ZXJ5Q29tcG9uZW50LFxuXG5cdEZ1bmN0aW9uVmlld0NvbXBvbmVudCxcblx0QmFyVmlld0NvbXBvbmVudCxcblx0UGVyY2VudGFnZVZpZXdDb21wb25lbnQsXG5cdFRleHRWaWV3Q29tcG9uZW50LFxuXHRIdG1sVmlld0NvbXBvbmVudFxuXTtcblxuY29uc3QgZXhwb3J0RGVjbGFyYXRpb25zID0gW1xuXHRWaWV3VGVtcGxhdGVzQ29tcG9uZW50LFxuXHRFZGl0VGVtcGxhdGVzQ29tcG9uZW50LFxuXHRDb2x1bW5RdWVyeUNvbXBvbmVudCxcblxuXHRGYWJyaWNDaGlwTW9kdWxlLFxuXHRGYWJyaWNDaGVja2JveE1vZHVsZSxcblx0RmFicmljQnV0dG9uTW9kdWxlLFxuXHRGYWJyaWNJbnB1dE1vZHVsZSxcblxuXHRGdW5jdGlvblZpZXdDb21wb25lbnQsXG5cdEJhclZpZXdDb21wb25lbnQsXG5cdFBlcmNlbnRhZ2VWaWV3Q29tcG9uZW50LFxuXHRIdG1sVmlld0NvbXBvbmVudFxuXTtcblxuaW5pdGlhbGl6ZUNvbXBvc2l0aW9uKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlQ29tcG9zaXRpb25Db21tYW5kUHVibGlzaGVyKCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKENvbXBvc2l0aW9uUHVibGlzaGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVDb21wb3NpdGlvbldhcmVob3VzZSgpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShDb21wb3NpdGlvbldhcmVob3VzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlQ29tcG9zaXRpb25FdmVudFJlcG9zaXRvcnkoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoQ29tcG9zaXRpb25FdmVudFJlcG9zaXRvcnkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUNvbHVtbkF1dG9Db25maWd1cmF0b3IoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoQ29sdW1uQXV0b0NvbmZpZ3VyYXRvcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlQ29sdW1uRmllbGRGYWN0b3J5KCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKENvbHVtbkZpZWxkRmFjdG9yeSk7XG59XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXG5cblx0XHRTYW5pdGl6ZU1vZHVsZSxcblxuXHRcdEZhYnJpY0NoaXBNb2R1bGUsXG5cdFx0RmFicmljQ2hlY2tib3hNb2R1bGUsXG5cdFx0RmFicmljQnV0dG9uTW9kdWxlLFxuXHRcdEZhYnJpY0lucHV0TW9kdWxlLFxuXHRcdEZhYnJpY0RhdGVQaWNrZXJNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Y29tcG9uZW50c1xuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0ZXhwb3J0RGVjbGFyYXRpb25zXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdHsgcHJvdmlkZTogQ29tcG9zaXRpb25QdWJsaXNoZXIsIHVzZUZhY3Rvcnk6IHByb3ZpZGVDb21wb3NpdGlvbkNvbW1hbmRQdWJsaXNoZXIgfSxcblx0XHR7IHByb3ZpZGU6IENvbXBvc2l0aW9uV2FyZWhvdXNlLCB1c2VGYWN0b3J5OiBwcm92aWRlQ29tcG9zaXRpb25XYXJlaG91c2UgfSxcblx0XHR7IHByb3ZpZGU6IENvbXBvc2l0aW9uRXZlbnRSZXBvc2l0b3J5LCB1c2VGYWN0b3J5OiBwcm92aWRlQ29tcG9zaXRpb25FdmVudFJlcG9zaXRvcnkgfSxcblx0XHRDb21wb3NpdGlvblRlbXBsYXRlV2FyZWhvdXNlLFxuXHRcdFZpZXdUZW1wbGF0ZVJlcG9zaXRvcnksXG5cdFx0Vmlld1RlbXBsYXRlRmFjdG9yeSxcblx0XHRFZGl0VGVtcGxhdGVSZXBvc2l0b3J5LFxuXHRcdEVkaXRUZW1wbGF0ZUZhY3RvcnksXG5cblx0XHR7IHByb3ZpZGU6IENvbHVtbkF1dG9Db25maWd1cmF0b3IsIHVzZUZhY3Rvcnk6IHByb3ZpZGVDb2x1bW5BdXRvQ29uZmlndXJhdG9yIH0sXG5cdFx0eyBwcm92aWRlOiBDb2x1bW5GaWVsZEZhY3RvcnksIHVzZUZhY3Rvcnk6IHByb3ZpZGVDb2x1bW5GaWVsZEZhY3RvcnkgfVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uRmVhdHVyZU1vZHVsZSBleHRlbmRzIEZlYXR1cmVNb2R1bGUge1xuXG5cdGNvbnN0cnVjdG9yKGNmcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7XG5cdFx0c3VwZXIoKTtcblx0XHRDb3JlQ29udGFpbmVyLnByb3ZpZGVWYWx1ZShDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIGNmcik7XG5cdH1cblxuXHRzdGF0aWMgZm9yQ29tcG9uZW50KCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cbn1cbiJdfQ==