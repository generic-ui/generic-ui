import { ComponentFactoryResolver, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreContainer, FeatureModule } from '@generic-ui/hermes';
import { FabricButtonComponent, FabricButtonModule, FabricCheckboxComponent, FabricCheckboxModule, FabricChipComponent, FabricChipModule, FabricDatePickerModule, FabricInputComponent, FabricInputModule } from '@generic-ui/fabric';
import { compositionInitializer } from '../../core/composition/api/composition.api-module';
import { ViewTemplatesComponent } from '../../core/composition/domain-read/view/view-templates.component';
import { EditTemplatesComponent } from '../../core/composition/domain-read/edit/edit-templates.component';
import { SanitizeModule } from '../common/cdk/sanitize/sanitize.module';
import { StringEditTemplateComponent } from '../../core/composition/domain-read/edit/template/string-edit-template.component';
import { NumberEditTemplateComponent } from '../../core/composition/domain-read/edit/template/number-edit-template.component';
import { BooleanEditTemplateComponent } from '../../core/composition/domain-read/edit/template/boolean-edit-template.component';
import { DateEditTemplateComponent } from '../../core/composition/domain-read/edit/template/date-edit-template.component';
import { ColumnQueryComponent } from './column/column-query.component';
import { FunctionViewComponent } from '../../core/composition/domain-read/view/function/function-view.component';
import { BarViewComponent } from '../../core/composition/domain-read/view/bar/bar-view.component';
import { PercentageViewComponent } from '../../core/composition/domain-read/view/percentage/percentage-view.component';
import { TextViewComponent } from '../../core/composition/domain-read/view/text/text-view.component';
import { HtmlViewComponent } from '../../core/composition/domain-read/view/html/html-view.component';
import { CompositionPublisher } from '../../core/composition/api/composition.publisher';
import { ColumnFieldFactory } from '../../core/composition/domain/column/field/colum-field.factory';
import { CompositionEventRepository } from '../../core/composition/api/composition.event-repository';
import { CompositionWarehouse } from '../../core/composition/api/composition.warehouse';
import { ColumnAutoConfigurator } from '../../core/composition/api/column/auto/column-auto.configurator';
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
compositionInitializer.init();
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
CompositionFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CompositionFeatureModule, deps: [{ token: i0.ComponentFactoryResolver }], target: i0.ɵɵFactoryTarget.NgModule });
CompositionFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CompositionFeatureModule, declarations: [ViewTemplatesComponent,
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
CompositionFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CompositionFeatureModule, providers: [
        { provide: CompositionPublisher, useFactory: provideCompositionCommandPublisher },
        { provide: CompositionWarehouse, useFactory: provideCompositionWarehouse },
        { provide: CompositionEventRepository, useFactory: provideCompositionEventRepository },
        { provide: ColumnAutoConfigurator, useFactory: provideColumnAutoConfigurator },
        { provide: ColumnFieldFactory, useFactory: provideColumnFieldFactory }
    ], imports: [[
            CommonModule,
            ReactiveFormsModule,
            SanitizeModule,
            FabricChipModule,
            FabricCheckboxModule,
            FabricButtonModule,
            FabricInputModule,
            FabricDatePickerModule
        ], FabricChipModule,
        FabricCheckboxModule,
        FabricButtonModule,
        FabricInputModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CompositionFeatureModule, decorators: [{
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
                        { provide: ColumnAutoConfigurator, useFactory: provideColumnAutoConfigurator },
                        { provide: ColumnFieldFactory, useFactory: provideColumnFieldFactory }
                    ]
                }]
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uZmVhdHVyZS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvY29tcG9zaXRpb24vY29tcG9zaXRpb24uZmVhdHVyZS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHdCQUF3QixFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRSxPQUFPLEVBQ04scUJBQXFCLEVBQ3JCLGtCQUFrQixFQUNsQix1QkFBdUIsRUFDdkIsb0JBQW9CLEVBQ3BCLG1CQUFtQixFQUNuQixnQkFBZ0IsRUFDaEIsc0JBQXNCLEVBQ3RCLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsTUFBTSxvQkFBb0IsQ0FBQztBQUU1QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUMxRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUUxRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUZBQWlGLENBQUM7QUFDOUgsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUZBQWlGLENBQUM7QUFDOUgsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sa0ZBQWtGLENBQUM7QUFDaEksT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0VBQStFLENBQUM7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b0I7cUJBQ3BCO29CQUNELFNBQVMsRUFBRTt3QkFDVixFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxVQUFVLEVBQUUsa0NBQWtDLEVBQUU7d0JBQ2pGLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFVBQVUsRUFBRSwyQkFBMkIsRUFBRTt3QkFDMUUsRUFBRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsVUFBVSxFQUFFLGlDQUFpQyxFQUFFO3dCQUV0RixFQUFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxVQUFVLEVBQUUsNkJBQTZCLEVBQUU7d0JBQzlFLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSx5QkFBeUIsRUFBRTtxQkFDdEU7aUJBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIE5nTW9kdWxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IENvcmVDb250YWluZXIsIEZlYXR1cmVNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQge1xuXHRGYWJyaWNCdXR0b25Db21wb25lbnQsXG5cdEZhYnJpY0J1dHRvbk1vZHVsZSxcblx0RmFicmljQ2hlY2tib3hDb21wb25lbnQsXG5cdEZhYnJpY0NoZWNrYm94TW9kdWxlLFxuXHRGYWJyaWNDaGlwQ29tcG9uZW50LFxuXHRGYWJyaWNDaGlwTW9kdWxlLFxuXHRGYWJyaWNEYXRlUGlja2VyTW9kdWxlLFxuXHRGYWJyaWNJbnB1dENvbXBvbmVudCxcblx0RmFicmljSW5wdXRNb2R1bGVcbn0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgY29tcG9zaXRpb25Jbml0aWFsaXplciB9IGZyb20gJy4uLy4uL2NvcmUvY29tcG9zaXRpb24vYXBpL2NvbXBvc2l0aW9uLmFwaS1tb2R1bGUnO1xuaW1wb3J0IHsgVmlld1RlbXBsYXRlc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvcmUvY29tcG9zaXRpb24vZG9tYWluLXJlYWQvdmlldy92aWV3LXRlbXBsYXRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRWRpdFRlbXBsYXRlc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvcmUvY29tcG9zaXRpb24vZG9tYWluLXJlYWQvZWRpdC9lZGl0LXRlbXBsYXRlcy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBTYW5pdGl6ZU1vZHVsZSB9IGZyb20gJy4uL2NvbW1vbi9jZGsvc2FuaXRpemUvc2FuaXRpemUubW9kdWxlJztcbmltcG9ydCB7IFN0cmluZ0VkaXRUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvcmUvY29tcG9zaXRpb24vZG9tYWluLXJlYWQvZWRpdC90ZW1wbGF0ZS9zdHJpbmctZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnVtYmVyRWRpdFRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29yZS9jb21wb3NpdGlvbi9kb21haW4tcmVhZC9lZGl0L3RlbXBsYXRlL251bWJlci1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCb29sZWFuRWRpdFRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29yZS9jb21wb3NpdGlvbi9kb21haW4tcmVhZC9lZGl0L3RlbXBsYXRlL2Jvb2xlYW4tZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZUVkaXRUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvcmUvY29tcG9zaXRpb24vZG9tYWluLXJlYWQvZWRpdC90ZW1wbGF0ZS9kYXRlLWVkaXQtdGVtcGxhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IENvbHVtblF1ZXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9jb2x1bW4vY29sdW1uLXF1ZXJ5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGdW5jdGlvblZpZXdDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb3JlL2NvbXBvc2l0aW9uL2RvbWFpbi1yZWFkL3ZpZXcvZnVuY3Rpb24vZnVuY3Rpb24tdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmFyVmlld0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvcmUvY29tcG9zaXRpb24vZG9tYWluLXJlYWQvdmlldy9iYXIvYmFyLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFBlcmNlbnRhZ2VWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29yZS9jb21wb3NpdGlvbi9kb21haW4tcmVhZC92aWV3L3BlcmNlbnRhZ2UvcGVyY2VudGFnZS12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXh0Vmlld0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvcmUvY29tcG9zaXRpb24vZG9tYWluLXJlYWQvdmlldy90ZXh0L3RleHQtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSHRtbFZpZXdDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb3JlL2NvbXBvc2l0aW9uL2RvbWFpbi1yZWFkL3ZpZXcvaHRtbC9odG1sLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vY29yZS9jb21wb3NpdGlvbi9hcGkvY29tcG9zaXRpb24ucHVibGlzaGVyJztcbmltcG9ydCB7IENvbHVtbkZpZWxkRmFjdG9yeSB9IGZyb20gJy4uLy4uL2NvcmUvY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9maWVsZC9jb2x1bS1maWVsZC5mYWN0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vY29yZS9jb21wb3NpdGlvbi9hcGkvY29tcG9zaXRpb24uZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uL2NvcmUvY29tcG9zaXRpb24vYXBpL2NvbXBvc2l0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBDb2x1bW5BdXRvQ29uZmlndXJhdG9yIH0gZnJvbSAnLi4vLi4vY29yZS9jb21wb3NpdGlvbi9hcGkvY29sdW1uL2F1dG8vY29sdW1uLWF1dG8uY29uZmlndXJhdG9yJztcblxuXG5jb25zdCBjb21wb25lbnRzID0gW1xuXHRWaWV3VGVtcGxhdGVzQ29tcG9uZW50LFxuXHRFZGl0VGVtcGxhdGVzQ29tcG9uZW50LFxuXHRTdHJpbmdFZGl0VGVtcGxhdGVDb21wb25lbnQsXG5cdE51bWJlckVkaXRUZW1wbGF0ZUNvbXBvbmVudCxcblx0Qm9vbGVhbkVkaXRUZW1wbGF0ZUNvbXBvbmVudCxcblx0RGF0ZUVkaXRUZW1wbGF0ZUNvbXBvbmVudCxcblx0Q29sdW1uUXVlcnlDb21wb25lbnQsXG5cblx0RnVuY3Rpb25WaWV3Q29tcG9uZW50LFxuXHRCYXJWaWV3Q29tcG9uZW50LFxuXHRQZXJjZW50YWdlVmlld0NvbXBvbmVudCxcblx0VGV4dFZpZXdDb21wb25lbnQsXG5cdEh0bWxWaWV3Q29tcG9uZW50XG5dO1xuXG5jb25zdCBleHBvcnREZWNsYXJhdGlvbnMgPSBbXG5cdFZpZXdUZW1wbGF0ZXNDb21wb25lbnQsXG5cdEVkaXRUZW1wbGF0ZXNDb21wb25lbnQsXG5cdENvbHVtblF1ZXJ5Q29tcG9uZW50LFxuXG5cdEZhYnJpY0NoaXBNb2R1bGUsXG5cdEZhYnJpY0NoZWNrYm94TW9kdWxlLFxuXHRGYWJyaWNCdXR0b25Nb2R1bGUsXG5cdEZhYnJpY0lucHV0TW9kdWxlLFxuXG5cdEZ1bmN0aW9uVmlld0NvbXBvbmVudCxcblx0QmFyVmlld0NvbXBvbmVudCxcblx0UGVyY2VudGFnZVZpZXdDb21wb25lbnQsXG5cdEh0bWxWaWV3Q29tcG9uZW50XG5dO1xuXG5jb21wb3NpdGlvbkluaXRpYWxpemVyLmluaXQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVDb21wb3NpdGlvbkNvbW1hbmRQdWJsaXNoZXIoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoQ29tcG9zaXRpb25QdWJsaXNoZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUNvbXBvc2l0aW9uV2FyZWhvdXNlKCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKENvbXBvc2l0aW9uV2FyZWhvdXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVDb21wb3NpdGlvbkV2ZW50UmVwb3NpdG9yeSgpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShDb21wb3NpdGlvbkV2ZW50UmVwb3NpdG9yeSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlQ29sdW1uQXV0b0NvbmZpZ3VyYXRvcigpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShDb2x1bW5BdXRvQ29uZmlndXJhdG9yKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVDb2x1bW5GaWVsZEZhY3RvcnkoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoQ29sdW1uRmllbGRGYWN0b3J5KTtcbn1cblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcblxuXHRcdFNhbml0aXplTW9kdWxlLFxuXG5cdFx0RmFicmljQ2hpcE1vZHVsZSxcblx0XHRGYWJyaWNDaGVja2JveE1vZHVsZSxcblx0XHRGYWJyaWNCdXR0b25Nb2R1bGUsXG5cdFx0RmFicmljSW5wdXRNb2R1bGUsXG5cdFx0RmFicmljRGF0ZVBpY2tlck1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRjb21wb25lbnRzXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRleHBvcnREZWNsYXJhdGlvbnNcblx0XSxcblx0ZW50cnlDb21wb25lbnRzOiBbXG5cdFx0Vmlld1RlbXBsYXRlc0NvbXBvbmVudCxcblx0XHRFZGl0VGVtcGxhdGVzQ29tcG9uZW50LFxuXHRcdEZhYnJpY0NoaXBDb21wb25lbnQsXG5cdFx0RmFicmljQ2hlY2tib3hDb21wb25lbnQsXG5cdFx0RmFicmljQnV0dG9uQ29tcG9uZW50LFxuXHRcdEZhYnJpY0lucHV0Q29tcG9uZW50XG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdHsgcHJvdmlkZTogQ29tcG9zaXRpb25QdWJsaXNoZXIsIHVzZUZhY3Rvcnk6IHByb3ZpZGVDb21wb3NpdGlvbkNvbW1hbmRQdWJsaXNoZXIgfSxcblx0XHR7IHByb3ZpZGU6IENvbXBvc2l0aW9uV2FyZWhvdXNlLCB1c2VGYWN0b3J5OiBwcm92aWRlQ29tcG9zaXRpb25XYXJlaG91c2UgfSxcblx0XHR7IHByb3ZpZGU6IENvbXBvc2l0aW9uRXZlbnRSZXBvc2l0b3J5LCB1c2VGYWN0b3J5OiBwcm92aWRlQ29tcG9zaXRpb25FdmVudFJlcG9zaXRvcnkgfSxcblxuXHRcdHsgcHJvdmlkZTogQ29sdW1uQXV0b0NvbmZpZ3VyYXRvciwgdXNlRmFjdG9yeTogcHJvdmlkZUNvbHVtbkF1dG9Db25maWd1cmF0b3IgfSxcblx0XHR7IHByb3ZpZGU6IENvbHVtbkZpZWxkRmFjdG9yeSwgdXNlRmFjdG9yeTogcHJvdmlkZUNvbHVtbkZpZWxkRmFjdG9yeSB9XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25GZWF0dXJlTW9kdWxlIGV4dGVuZHMgRmVhdHVyZU1vZHVsZSB7XG5cblx0Y29uc3RydWN0b3IoY2ZyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHtcblx0XHRzdXBlcigpO1xuXHRcdENvcmVDb250YWluZXIucHJvdmlkZVZhbHVlKENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgY2ZyKTtcblx0fVxuXG5cdHN0YXRpYyBmb3JDb21wb25lbnQoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxufVxuIl19