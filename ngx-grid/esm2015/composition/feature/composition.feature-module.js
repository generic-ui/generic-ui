import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FeatureModule } from '@generic-ui/hermes';
import { FabricButtonComponent, FabricButtonModule, FabricCheckboxComponent, FabricCheckboxModule, FabricChipComponent, FabricChipModule, FabricDatePickerModule, FabricInputComponent, FabricInputModule } from '@generic-ui/fabric';
import { CompositionApiModule } from '../core/api/composition.api-module';
import { ViewTemplatesComponent } from '../core/domain-read/view/view-templates.component';
import { EditTemplatesComponent } from '../core/domain-read/edit/edit-templates.component';
import { SanitizeModule } from '../../common/cdk/sanitize/sanitize.module';
import { StringEditTemplateComponent } from '../core/domain-read/edit/template/string-edit-template.component';
import { NumberEditTemplateComponent } from '../core/domain-read/edit/template/number-edit-template.component';
import { BooleanEditTemplateComponent } from '../core/domain-read/edit/template/boolean-edit-template.component';
import { DateEditTemplateComponent } from '../core/domain-read/edit/template/date-edit-template.component';
import { ColumnQueryComponent } from './column/column-query.component';
import { FunctionViewComponent } from '../core/domain-read/view/function/function-view.component';
import { BarViewComponent } from '../core/domain-read/view/bar/bar-view.component';
import { PercentageViewComponent } from '../core/domain-read/view/percentage/percentage-view.component';
import { TextViewComponent } from '../core/domain-read/view/text/text-view.component';
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
    TextViewComponent
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
    PercentageViewComponent
];
export class CompositionFeatureModule extends FeatureModule {
    static forComponent() {
        return [];
    }
}
CompositionFeatureModule.ɵfac = /*@__PURE__*/ function () { let ɵCompositionFeatureModule_BaseFactory; return function CompositionFeatureModule_Factory(t) { return (ɵCompositionFeatureModule_BaseFactory || (ɵCompositionFeatureModule_BaseFactory = i0.ɵɵgetInheritedFactory(CompositionFeatureModule)))(t || CompositionFeatureModule); }; }();
CompositionFeatureModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CompositionFeatureModule });
CompositionFeatureModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            CompositionApiModule,
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CompositionFeatureModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    CompositionApiModule,
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
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CompositionFeatureModule, { declarations: [ViewTemplatesComponent,
        EditTemplatesComponent,
        StringEditTemplateComponent,
        NumberEditTemplateComponent,
        BooleanEditTemplateComponent,
        DateEditTemplateComponent,
        ColumnQueryComponent,
        FunctionViewComponent,
        BarViewComponent,
        PercentageViewComponent,
        TextViewComponent], imports: [CommonModule,
        CompositionApiModule,
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
        PercentageViewComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uZmVhdHVyZS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvbXBvc2l0aW9uL2ZlYXR1cmUvY29tcG9zaXRpb24uZmVhdHVyZS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRW5ELE9BQU8sRUFDTixxQkFBcUIsRUFDckIsa0JBQWtCLEVBQ2xCLHVCQUF1QixFQUN2QixvQkFBb0IsRUFDcEIsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUNoQixzQkFBc0IsRUFDdEIsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixNQUFNLG9CQUFvQixDQUFDO0FBRTVCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBRTNGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUMvRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUMvRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUNqSCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUMzRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUNsRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNuRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUN4RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQzs7QUFHdEYsTUFBTSxVQUFVLEdBQUc7SUFDbEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsb0JBQW9CO0lBRXBCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtDQUNqQixDQUFDO0FBRUYsTUFBTSxrQkFBa0IsR0FBRztJQUMxQixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUVwQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFFakIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQix1QkFBdUI7Q0FDdkIsQ0FBQztBQWdDRixNQUFNLE9BQU8sd0JBQXlCLFNBQVEsYUFBYTtJQUUxRCxNQUFNLENBQUMsWUFBWTtRQUNsQixPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7O2dSQUpXLHdCQUF3QixTQUF4Qix3QkFBd0I7MEVBQXhCLHdCQUF3Qjs4RUE3QjNCO1lBQ1IsWUFBWTtZQUNaLG9CQUFvQjtZQUVwQixtQkFBbUI7WUFFbkIsY0FBYztZQUVkLGdCQUFnQjtZQUNoQixvQkFBb0I7WUFDcEIsa0JBQWtCO1lBQ2xCLGlCQUFpQjtZQUNqQixzQkFBc0I7U0FDdEIsRUF4QkQsZ0JBQWdCO1FBQ2hCLG9CQUFvQjtRQUNwQixrQkFBa0I7UUFDbEIsaUJBQWlCO3VGQXFDTCx3QkFBd0I7Y0E5QnBDLFFBQVE7ZUFBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixvQkFBb0I7b0JBRXBCLG1CQUFtQjtvQkFFbkIsY0FBYztvQkFFZCxnQkFBZ0I7b0JBQ2hCLG9CQUFvQjtvQkFDcEIsa0JBQWtCO29CQUNsQixpQkFBaUI7b0JBQ2pCLHNCQUFzQjtpQkFDdEI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLFVBQVU7aUJBQ1Y7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLGtCQUFrQjtpQkFDbEI7Z0JBQ0QsZUFBZSxFQUFFO29CQUNoQixzQkFBc0I7b0JBQ3RCLHNCQUFzQjtvQkFDdEIsbUJBQW1CO29CQUNuQix1QkFBdUI7b0JBQ3ZCLHFCQUFxQjtvQkFDckIsb0JBQW9CO2lCQUNwQjthQUNEOzt3RkFDWSx3QkFBd0IsbUJBM0RwQyxzQkFBc0I7UUFDdEIsc0JBQXNCO1FBQ3RCLDJCQUEyQjtRQUMzQiwyQkFBMkI7UUFDM0IsNEJBQTRCO1FBQzVCLHlCQUF5QjtRQUN6QixvQkFBb0I7UUFFcEIscUJBQXFCO1FBQ3JCLGdCQUFnQjtRQUNoQix1QkFBdUI7UUFDdkIsaUJBQWlCLGFBb0JoQixZQUFZO1FBQ1osb0JBQW9CO1FBRXBCLG1CQUFtQjtRQUVuQixjQUFjO1FBRWQsZ0JBQWdCO1FBQ2hCLG9CQUFvQjtRQUNwQixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLHNCQUFzQixhQTNCdkIsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0QixvQkFBb0I7UUFFcEIsZ0JBQWdCO1FBQ2hCLG9CQUFvQjtRQUNwQixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBRWpCLHFCQUFxQjtRQUNyQixnQkFBZ0I7UUFDaEIsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRmVhdHVyZU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7XG5cdEZhYnJpY0J1dHRvbkNvbXBvbmVudCxcblx0RmFicmljQnV0dG9uTW9kdWxlLFxuXHRGYWJyaWNDaGVja2JveENvbXBvbmVudCxcblx0RmFicmljQ2hlY2tib3hNb2R1bGUsXG5cdEZhYnJpY0NoaXBDb21wb25lbnQsXG5cdEZhYnJpY0NoaXBNb2R1bGUsXG5cdEZhYnJpY0RhdGVQaWNrZXJNb2R1bGUsXG5cdEZhYnJpY0lucHV0Q29tcG9uZW50LFxuXHRGYWJyaWNJbnB1dE1vZHVsZVxufSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbkFwaU1vZHVsZSB9IGZyb20gJy4uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLmFwaS1tb2R1bGUnO1xuaW1wb3J0IHsgVmlld1RlbXBsYXRlc0NvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUvZG9tYWluLXJlYWQvdmlldy92aWV3LXRlbXBsYXRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRWRpdFRlbXBsYXRlc0NvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUvZG9tYWluLXJlYWQvZWRpdC9lZGl0LXRlbXBsYXRlcy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBTYW5pdGl6ZU1vZHVsZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9jZGsvc2FuaXRpemUvc2FuaXRpemUubW9kdWxlJztcbmltcG9ydCB7IFN0cmluZ0VkaXRUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUvZG9tYWluLXJlYWQvZWRpdC90ZW1wbGF0ZS9zdHJpbmctZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnVtYmVyRWRpdFRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29yZS9kb21haW4tcmVhZC9lZGl0L3RlbXBsYXRlL251bWJlci1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCb29sZWFuRWRpdFRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29yZS9kb21haW4tcmVhZC9lZGl0L3RlbXBsYXRlL2Jvb2xlYW4tZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZUVkaXRUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUvZG9tYWluLXJlYWQvZWRpdC90ZW1wbGF0ZS9kYXRlLWVkaXQtdGVtcGxhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IENvbHVtblF1ZXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9jb2x1bW4vY29sdW1uLXF1ZXJ5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGdW5jdGlvblZpZXdDb21wb25lbnQgfSBmcm9tICcuLi9jb3JlL2RvbWFpbi1yZWFkL3ZpZXcvZnVuY3Rpb24vZnVuY3Rpb24tdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmFyVmlld0NvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUvZG9tYWluLXJlYWQvdmlldy9iYXIvYmFyLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFBlcmNlbnRhZ2VWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vY29yZS9kb21haW4tcmVhZC92aWV3L3BlcmNlbnRhZ2UvcGVyY2VudGFnZS12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXh0Vmlld0NvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUvZG9tYWluLXJlYWQvdmlldy90ZXh0L3RleHQtdmlldy5jb21wb25lbnQnO1xuXG5cbmNvbnN0IGNvbXBvbmVudHMgPSBbXG5cdFZpZXdUZW1wbGF0ZXNDb21wb25lbnQsXG5cdEVkaXRUZW1wbGF0ZXNDb21wb25lbnQsXG5cdFN0cmluZ0VkaXRUZW1wbGF0ZUNvbXBvbmVudCxcblx0TnVtYmVyRWRpdFRlbXBsYXRlQ29tcG9uZW50LFxuXHRCb29sZWFuRWRpdFRlbXBsYXRlQ29tcG9uZW50LFxuXHREYXRlRWRpdFRlbXBsYXRlQ29tcG9uZW50LFxuXHRDb2x1bW5RdWVyeUNvbXBvbmVudCxcblxuXHRGdW5jdGlvblZpZXdDb21wb25lbnQsXG5cdEJhclZpZXdDb21wb25lbnQsXG5cdFBlcmNlbnRhZ2VWaWV3Q29tcG9uZW50LFxuXHRUZXh0Vmlld0NvbXBvbmVudFxuXTtcblxuY29uc3QgZXhwb3J0RGVjbGFyYXRpb25zID0gW1xuXHRWaWV3VGVtcGxhdGVzQ29tcG9uZW50LFxuXHRFZGl0VGVtcGxhdGVzQ29tcG9uZW50LFxuXHRDb2x1bW5RdWVyeUNvbXBvbmVudCxcblxuXHRGYWJyaWNDaGlwTW9kdWxlLFxuXHRGYWJyaWNDaGVja2JveE1vZHVsZSxcblx0RmFicmljQnV0dG9uTW9kdWxlLFxuXHRGYWJyaWNJbnB1dE1vZHVsZSxcblxuXHRGdW5jdGlvblZpZXdDb21wb25lbnQsXG5cdEJhclZpZXdDb21wb25lbnQsXG5cdFBlcmNlbnRhZ2VWaWV3Q29tcG9uZW50XG5dO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdENvbXBvc2l0aW9uQXBpTW9kdWxlLFxuXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcblxuXHRcdFNhbml0aXplTW9kdWxlLFxuXG5cdFx0RmFicmljQ2hpcE1vZHVsZSxcblx0XHRGYWJyaWNDaGVja2JveE1vZHVsZSxcblx0XHRGYWJyaWNCdXR0b25Nb2R1bGUsXG5cdFx0RmFicmljSW5wdXRNb2R1bGUsXG5cdFx0RmFicmljRGF0ZVBpY2tlck1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRjb21wb25lbnRzXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRleHBvcnREZWNsYXJhdGlvbnNcblx0XSxcblx0ZW50cnlDb21wb25lbnRzOiBbXG5cdFx0Vmlld1RlbXBsYXRlc0NvbXBvbmVudCxcblx0XHRFZGl0VGVtcGxhdGVzQ29tcG9uZW50LFxuXHRcdEZhYnJpY0NoaXBDb21wb25lbnQsXG5cdFx0RmFicmljQ2hlY2tib3hDb21wb25lbnQsXG5cdFx0RmFicmljQnV0dG9uQ29tcG9uZW50LFxuXHRcdEZhYnJpY0lucHV0Q29tcG9uZW50XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25GZWF0dXJlTW9kdWxlIGV4dGVuZHMgRmVhdHVyZU1vZHVsZSB7XG5cblx0c3RhdGljIGZvckNvbXBvbmVudCgpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdC8vIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIGNvbXBvc2l0aW9uQXBpTW9kdWxlOiBDb21wb3NpdGlvbkFwaU1vZHVsZSkge1xuXHQvLyBcdHN1cGVyKCk7XG5cdC8vIFx0aWYgKGNvbXBvc2l0aW9uQXBpTW9kdWxlID09PSBudWxsKSB7XG5cdC8vIFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0NvbXBvc2l0aW9uQXBpTW9kdWxlIGlzIHJlcXVpcmVkLicpO1xuXHQvLyBcdH1cblx0Ly8gfVxuXG59XG4iXX0=