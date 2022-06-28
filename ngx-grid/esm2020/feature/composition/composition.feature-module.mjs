import { ComponentFactoryResolver, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreContainer, FeatureModule } from '@generic-ui/hermes';
import { FabricButtonComponent, FabricButtonModule, FabricCheckboxComponent, FabricCheckboxModule, FabricChipComponent, FabricChipModule, FabricDatePickerModule, FabricInputComponent, FabricInputModule } from '@generic-ui/fabric';
import { compositionInitializer } from '../../core/composition/api/composition.api-module';
import { ViewTemplatesComponent } from '../../core/composition/core-read/view/view-templates.component';
import { EditTemplatesComponent } from '../../core/composition/core-read/edit/edit-templates.component';
import { SanitizeModule } from '../common/cdk/sanitize/sanitize.module';
import { StringEditTemplateComponent } from '../../core/composition/core-read/edit/template/string-edit-template.component';
import { NumberEditTemplateComponent } from '../../core/composition/core-read/edit/template/number-edit-template.component';
import { BooleanEditTemplateComponent } from '../../core/composition/core-read/edit/template/boolean-edit-template.component';
import { DateEditTemplateComponent } from '../../core/composition/core-read/edit/template/date-edit-template.component';
import { ColumnQueryComponent } from './column/column-query.component';
import { FunctionViewComponent } from '../../core/composition/core-read/view/function/function-view.component';
import { BarViewComponent } from '../../core/composition/core-read/view/bar/bar-view.component';
import { PercentageViewComponent } from '../../core/composition/core-read/view/percentage/percentage-view.component';
import { TextViewComponent } from '../../core/composition/core-read/view/text/text-view.component';
import { HtmlViewComponent } from '../../core/composition/core-read/view/html/html-view.component';
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
CompositionFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: CompositionFeatureModule, deps: [{ token: i0.ComponentFactoryResolver }], target: i0.ɵɵFactoryTarget.NgModule });
CompositionFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: CompositionFeatureModule, declarations: [ViewTemplatesComponent,
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
CompositionFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: CompositionFeatureModule, providers: [
        { provide: CompositionPublisher, useFactory: provideCompositionCommandPublisher },
        { provide: CompositionWarehouse, useFactory: provideCompositionWarehouse },
        { provide: CompositionEventRepository, useFactory: provideCompositionEventRepository },
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: CompositionFeatureModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uZmVhdHVyZS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvY29tcG9zaXRpb24vY29tcG9zaXRpb24uZmVhdHVyZS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHdCQUF3QixFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRSxPQUFPLEVBQ04scUJBQXFCLEVBQ3JCLGtCQUFrQixFQUNsQix1QkFBdUIsRUFDdkIsb0JBQW9CLEVBQ3BCLG1CQUFtQixFQUNuQixnQkFBZ0IsRUFDaEIsc0JBQXNCLEVBQ3RCLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsTUFBTSxvQkFBb0IsQ0FBQztBQUU1QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUN4RyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUV4RyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0VBQStFLENBQUM7QUFDNUgsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0VBQStFLENBQUM7QUFDNUgsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0ZBQWdGLENBQUM7QUFDOUgsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkVBQTZFLENBQUM7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b0JBQ0QsU0FBUyxFQUFFO3dCQUNWLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFVBQVUsRUFBRSxrQ0FBa0MsRUFBRTt3QkFDakYsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsVUFBVSxFQUFFLDJCQUEyQixFQUFFO3dCQUMxRSxFQUFFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxVQUFVLEVBQUUsaUNBQWlDLEVBQUU7d0JBRXRGLEVBQUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFVBQVUsRUFBRSw2QkFBNkIsRUFBRTt3QkFDOUUsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLHlCQUF5QixFQUFFO3FCQUN0RTtpQkFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQ29yZUNvbnRhaW5lciwgRmVhdHVyZU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7XG5cdEZhYnJpY0J1dHRvbkNvbXBvbmVudCxcblx0RmFicmljQnV0dG9uTW9kdWxlLFxuXHRGYWJyaWNDaGVja2JveENvbXBvbmVudCxcblx0RmFicmljQ2hlY2tib3hNb2R1bGUsXG5cdEZhYnJpY0NoaXBDb21wb25lbnQsXG5cdEZhYnJpY0NoaXBNb2R1bGUsXG5cdEZhYnJpY0RhdGVQaWNrZXJNb2R1bGUsXG5cdEZhYnJpY0lucHV0Q29tcG9uZW50LFxuXHRGYWJyaWNJbnB1dE1vZHVsZVxufSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBjb21wb3NpdGlvbkluaXRpYWxpemVyIH0gZnJvbSAnLi4vLi4vY29yZS9jb21wb3NpdGlvbi9hcGkvY29tcG9zaXRpb24uYXBpLW1vZHVsZSc7XG5pbXBvcnQgeyBWaWV3VGVtcGxhdGVzQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29yZS9jb21wb3NpdGlvbi9jb3JlLXJlYWQvdmlldy92aWV3LXRlbXBsYXRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRWRpdFRlbXBsYXRlc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvcmUvY29tcG9zaXRpb24vY29yZS1yZWFkL2VkaXQvZWRpdC10ZW1wbGF0ZXMuY29tcG9uZW50JztcblxuaW1wb3J0IHsgU2FuaXRpemVNb2R1bGUgfSBmcm9tICcuLi9jb21tb24vY2RrL3Nhbml0aXplL3Nhbml0aXplLm1vZHVsZSc7XG5pbXBvcnQgeyBTdHJpbmdFZGl0VGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb3JlL2NvbXBvc2l0aW9uL2NvcmUtcmVhZC9lZGl0L3RlbXBsYXRlL3N0cmluZy1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOdW1iZXJFZGl0VGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb3JlL2NvbXBvc2l0aW9uL2NvcmUtcmVhZC9lZGl0L3RlbXBsYXRlL251bWJlci1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCb29sZWFuRWRpdFRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29yZS9jb21wb3NpdGlvbi9jb3JlLXJlYWQvZWRpdC90ZW1wbGF0ZS9ib29sZWFuLWVkaXQtdGVtcGxhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGVFZGl0VGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb3JlL2NvbXBvc2l0aW9uL2NvcmUtcmVhZC9lZGl0L3RlbXBsYXRlL2RhdGUtZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29sdW1uUXVlcnlDb21wb25lbnQgfSBmcm9tICcuL2NvbHVtbi9jb2x1bW4tcXVlcnkuY29tcG9uZW50JztcbmltcG9ydCB7IEZ1bmN0aW9uVmlld0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvcmUvY29tcG9zaXRpb24vY29yZS1yZWFkL3ZpZXcvZnVuY3Rpb24vZnVuY3Rpb24tdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmFyVmlld0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvcmUvY29tcG9zaXRpb24vY29yZS1yZWFkL3ZpZXcvYmFyL2Jhci12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZXJjZW50YWdlVmlld0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvcmUvY29tcG9zaXRpb24vY29yZS1yZWFkL3ZpZXcvcGVyY2VudGFnZS9wZXJjZW50YWdlLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFRleHRWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29yZS9jb21wb3NpdGlvbi9jb3JlLXJlYWQvdmlldy90ZXh0L3RleHQtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSHRtbFZpZXdDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb3JlL2NvbXBvc2l0aW9uL2NvcmUtcmVhZC92aWV3L2h0bWwvaHRtbC12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblB1Ymxpc2hlciB9IGZyb20gJy4uLy4uL2NvcmUvY29tcG9zaXRpb24vYXBpL2NvbXBvc2l0aW9uLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZEZhY3RvcnkgfSBmcm9tICcuLi8uLi9jb3JlL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vZmllbGQvY29sdW0tZmllbGQuZmFjdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2NvcmUvY29tcG9zaXRpb24vYXBpL2NvbXBvc2l0aW9uLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi9jb3JlL2NvbXBvc2l0aW9uL2FwaS9jb21wb3NpdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgQ29sdW1uQXV0b0NvbmZpZ3VyYXRvciB9IGZyb20gJy4uLy4uL2NvcmUvY29tcG9zaXRpb24vYXBpL2NvbHVtbi9hdXRvL2NvbHVtbi1hdXRvLmNvbmZpZ3VyYXRvcic7XG5cblxuY29uc3QgY29tcG9uZW50cyA9IFtcblx0Vmlld1RlbXBsYXRlc0NvbXBvbmVudCxcblx0RWRpdFRlbXBsYXRlc0NvbXBvbmVudCxcblx0U3RyaW5nRWRpdFRlbXBsYXRlQ29tcG9uZW50LFxuXHROdW1iZXJFZGl0VGVtcGxhdGVDb21wb25lbnQsXG5cdEJvb2xlYW5FZGl0VGVtcGxhdGVDb21wb25lbnQsXG5cdERhdGVFZGl0VGVtcGxhdGVDb21wb25lbnQsXG5cdENvbHVtblF1ZXJ5Q29tcG9uZW50LFxuXG5cdEZ1bmN0aW9uVmlld0NvbXBvbmVudCxcblx0QmFyVmlld0NvbXBvbmVudCxcblx0UGVyY2VudGFnZVZpZXdDb21wb25lbnQsXG5cdFRleHRWaWV3Q29tcG9uZW50LFxuXHRIdG1sVmlld0NvbXBvbmVudFxuXTtcblxuY29uc3QgZXhwb3J0RGVjbGFyYXRpb25zID0gW1xuXHRWaWV3VGVtcGxhdGVzQ29tcG9uZW50LFxuXHRFZGl0VGVtcGxhdGVzQ29tcG9uZW50LFxuXHRDb2x1bW5RdWVyeUNvbXBvbmVudCxcblxuXHRGYWJyaWNDaGlwTW9kdWxlLFxuXHRGYWJyaWNDaGVja2JveE1vZHVsZSxcblx0RmFicmljQnV0dG9uTW9kdWxlLFxuXHRGYWJyaWNJbnB1dE1vZHVsZSxcblxuXHRGdW5jdGlvblZpZXdDb21wb25lbnQsXG5cdEJhclZpZXdDb21wb25lbnQsXG5cdFBlcmNlbnRhZ2VWaWV3Q29tcG9uZW50LFxuXHRIdG1sVmlld0NvbXBvbmVudFxuXTtcblxuY29tcG9zaXRpb25Jbml0aWFsaXplci5pbml0KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlQ29tcG9zaXRpb25Db21tYW5kUHVibGlzaGVyKCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKENvbXBvc2l0aW9uUHVibGlzaGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVDb21wb3NpdGlvbldhcmVob3VzZSgpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShDb21wb3NpdGlvbldhcmVob3VzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlQ29tcG9zaXRpb25FdmVudFJlcG9zaXRvcnkoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoQ29tcG9zaXRpb25FdmVudFJlcG9zaXRvcnkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUNvbHVtbkF1dG9Db25maWd1cmF0b3IoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoQ29sdW1uQXV0b0NvbmZpZ3VyYXRvcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlQ29sdW1uRmllbGRGYWN0b3J5KCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKENvbHVtbkZpZWxkRmFjdG9yeSk7XG59XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXG5cblx0XHRTYW5pdGl6ZU1vZHVsZSxcblxuXHRcdEZhYnJpY0NoaXBNb2R1bGUsXG5cdFx0RmFicmljQ2hlY2tib3hNb2R1bGUsXG5cdFx0RmFicmljQnV0dG9uTW9kdWxlLFxuXHRcdEZhYnJpY0lucHV0TW9kdWxlLFxuXHRcdEZhYnJpY0RhdGVQaWNrZXJNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Y29tcG9uZW50c1xuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0ZXhwb3J0RGVjbGFyYXRpb25zXG5cdF0sXG5cdGVudHJ5Q29tcG9uZW50czogW1xuXHRcdFZpZXdUZW1wbGF0ZXNDb21wb25lbnQsXG5cdFx0RWRpdFRlbXBsYXRlc0NvbXBvbmVudCxcblx0XHRGYWJyaWNDaGlwQ29tcG9uZW50LFxuXHRcdEZhYnJpY0NoZWNrYm94Q29tcG9uZW50LFxuXHRcdEZhYnJpY0J1dHRvbkNvbXBvbmVudCxcblx0XHRGYWJyaWNJbnB1dENvbXBvbmVudFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7IHByb3ZpZGU6IENvbXBvc2l0aW9uUHVibGlzaGVyLCB1c2VGYWN0b3J5OiBwcm92aWRlQ29tcG9zaXRpb25Db21tYW5kUHVibGlzaGVyIH0sXG5cdFx0eyBwcm92aWRlOiBDb21wb3NpdGlvbldhcmVob3VzZSwgdXNlRmFjdG9yeTogcHJvdmlkZUNvbXBvc2l0aW9uV2FyZWhvdXNlIH0sXG5cdFx0eyBwcm92aWRlOiBDb21wb3NpdGlvbkV2ZW50UmVwb3NpdG9yeSwgdXNlRmFjdG9yeTogcHJvdmlkZUNvbXBvc2l0aW9uRXZlbnRSZXBvc2l0b3J5IH0sXG5cblx0XHR7IHByb3ZpZGU6IENvbHVtbkF1dG9Db25maWd1cmF0b3IsIHVzZUZhY3Rvcnk6IHByb3ZpZGVDb2x1bW5BdXRvQ29uZmlndXJhdG9yIH0sXG5cdFx0eyBwcm92aWRlOiBDb2x1bW5GaWVsZEZhY3RvcnksIHVzZUZhY3Rvcnk6IHByb3ZpZGVDb2x1bW5GaWVsZEZhY3RvcnkgfVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uRmVhdHVyZU1vZHVsZSBleHRlbmRzIEZlYXR1cmVNb2R1bGUge1xuXG5cdGNvbnN0cnVjdG9yKGNmcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7XG5cdFx0c3VwZXIoKTtcblx0XHRDb3JlQ29udGFpbmVyLnByb3ZpZGVWYWx1ZShDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIGNmcik7XG5cdH1cblxuXHRzdGF0aWMgZm9yQ29tcG9uZW50KCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cbn1cbiJdfQ==