/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule, Optional } from '@angular/core';
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
import { ColumnQueryComponent } from './column-query.component';
import { FunctionViewComponent } from '../core/domain-read/view/function/function-view.component';
import { BarViewComponent } from '../core/domain-read/view/bar/bar-view.component';
import { PercentageViewComponent } from '../core/domain-read/view/percentage/percentage-view.component';
import { TextViewComponent } from '../core/domain-read/view/text/text-view.component';
/** @type {?} */
var components = [
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
/** @type {?} */
var exportDeclarations = [
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
var CompositionFeatureModule = /** @class */ (function (_super) {
    tslib_1.__extends(CompositionFeatureModule, _super);
    function CompositionFeatureModule(compositionApiModule) {
        var _this = _super.call(this) || this;
        if (compositionApiModule === null) {
            throw new Error('CompositionApiModule is required.');
        }
        return _this;
    }
    /**
     * @return {?}
     */
    CompositionFeatureModule.forComponent = /**
     * @return {?}
     */
    function () {
        return [];
    };
    CompositionFeatureModule.decorators = [
        { type: NgModule, args: [{
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
                    declarations: tslib_1.__spread(components),
                    exports: tslib_1.__spread(exportDeclarations),
                    entryComponents: [
                        ViewTemplatesComponent,
                        EditTemplatesComponent,
                        FabricChipComponent,
                        FabricCheckboxComponent,
                        FabricButtonComponent,
                        FabricInputComponent
                    ]
                },] }
    ];
    /** @nocollapse */
    CompositionFeatureModule.ctorParameters = function () { return [
        { type: CompositionApiModule, decorators: [{ type: Optional }] }
    ]; };
    return CompositionFeatureModule;
}(FeatureModule));
export { CompositionFeatureModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uZmVhdHVyZS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2ZlYXR1cmUvY29tcG9zaXRpb24uZmVhdHVyZS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRW5ELE9BQU8sRUFDTixxQkFBcUIsRUFDckIsa0JBQWtCLEVBQ2xCLHVCQUF1QixFQUN2QixvQkFBb0IsRUFDcEIsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUNoQixzQkFBc0IsRUFDdEIsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixNQUFNLG9CQUFvQixDQUFDO0FBRTVCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBRTNGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUMvRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUMvRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUNqSCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUMzRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUNsRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNuRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUN4RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQzs7SUFHaEYsVUFBVSxHQUFHO0lBQ2xCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUVwQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixpQkFBaUI7Q0FDakI7O0lBRUssa0JBQWtCLEdBQUc7SUFDMUIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFFcEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBRWpCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0NBQ3ZCO0FBRUQ7SUE4QjhDLG9EQUFhO0lBTTFELGtDQUF3QixvQkFBMEM7UUFBbEUsWUFDQyxpQkFBTyxTQUlQO1FBSEEsSUFBSSxvQkFBb0IsS0FBSyxJQUFJLEVBQUU7WUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1NBQ3JEOztJQUNGLENBQUM7Ozs7SUFUTSxxQ0FBWTs7O0lBQW5CO1FBQ0MsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDOztnQkFsQ0QsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLG9CQUFvQjt3QkFFcEIsbUJBQW1CO3dCQUVuQixjQUFjO3dCQUVkLGdCQUFnQjt3QkFDaEIsb0JBQW9CO3dCQUNwQixrQkFBa0I7d0JBQ2xCLGlCQUFpQjt3QkFDakIsc0JBQXNCO3FCQUN0QjtvQkFDRCxZQUFZLG1CQUNSLFVBQVUsQ0FDYjtvQkFDRCxPQUFPLG1CQUNILGtCQUFrQixDQUNyQjtvQkFDRCxlQUFlLEVBQUU7d0JBQ2hCLHNCQUFzQjt3QkFDdEIsc0JBQXNCO3dCQUN0QixtQkFBbUI7d0JBQ25CLHVCQUF1Qjt3QkFDdkIscUJBQXFCO3dCQUNyQixvQkFBb0I7cUJBQ3BCO2lCQUNEOzs7O2dCQTNFUSxvQkFBb0IsdUJBa0ZmLFFBQVE7O0lBT3RCLCtCQUFDO0NBQUEsQUEzQ0QsQ0E4QjhDLGFBQWEsR0FhMUQ7U0FiWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgT3B0aW9uYWwsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRmVhdHVyZU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7XG5cdEZhYnJpY0J1dHRvbkNvbXBvbmVudCxcblx0RmFicmljQnV0dG9uTW9kdWxlLFxuXHRGYWJyaWNDaGVja2JveENvbXBvbmVudCxcblx0RmFicmljQ2hlY2tib3hNb2R1bGUsXG5cdEZhYnJpY0NoaXBDb21wb25lbnQsXG5cdEZhYnJpY0NoaXBNb2R1bGUsXG5cdEZhYnJpY0RhdGVQaWNrZXJNb2R1bGUsXG5cdEZhYnJpY0lucHV0Q29tcG9uZW50LFxuXHRGYWJyaWNJbnB1dE1vZHVsZVxufSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbkFwaU1vZHVsZSB9IGZyb20gJy4uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLmFwaS1tb2R1bGUnO1xuaW1wb3J0IHsgVmlld1RlbXBsYXRlc0NvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUvZG9tYWluLXJlYWQvdmlldy92aWV3LXRlbXBsYXRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRWRpdFRlbXBsYXRlc0NvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUvZG9tYWluLXJlYWQvZWRpdC9lZGl0LXRlbXBsYXRlcy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBTYW5pdGl6ZU1vZHVsZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9jZGsvc2FuaXRpemUvc2FuaXRpemUubW9kdWxlJztcbmltcG9ydCB7IFN0cmluZ0VkaXRUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUvZG9tYWluLXJlYWQvZWRpdC90ZW1wbGF0ZS9zdHJpbmctZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnVtYmVyRWRpdFRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29yZS9kb21haW4tcmVhZC9lZGl0L3RlbXBsYXRlL251bWJlci1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCb29sZWFuRWRpdFRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29yZS9kb21haW4tcmVhZC9lZGl0L3RlbXBsYXRlL2Jvb2xlYW4tZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZUVkaXRUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUvZG9tYWluLXJlYWQvZWRpdC90ZW1wbGF0ZS9kYXRlLWVkaXQtdGVtcGxhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IENvbHVtblF1ZXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9jb2x1bW4tcXVlcnkuY29tcG9uZW50JztcbmltcG9ydCB7IEZ1bmN0aW9uVmlld0NvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUvZG9tYWluLXJlYWQvdmlldy9mdW5jdGlvbi9mdW5jdGlvbi12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCYXJWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vY29yZS9kb21haW4tcmVhZC92aWV3L2Jhci9iYXItdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGVyY2VudGFnZVZpZXdDb21wb25lbnQgfSBmcm9tICcuLi9jb3JlL2RvbWFpbi1yZWFkL3ZpZXcvcGVyY2VudGFnZS9wZXJjZW50YWdlLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFRleHRWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vY29yZS9kb21haW4tcmVhZC92aWV3L3RleHQvdGV4dC12aWV3LmNvbXBvbmVudCc7XG5cblxuY29uc3QgY29tcG9uZW50cyA9IFtcblx0Vmlld1RlbXBsYXRlc0NvbXBvbmVudCxcblx0RWRpdFRlbXBsYXRlc0NvbXBvbmVudCxcblx0U3RyaW5nRWRpdFRlbXBsYXRlQ29tcG9uZW50LFxuXHROdW1iZXJFZGl0VGVtcGxhdGVDb21wb25lbnQsXG5cdEJvb2xlYW5FZGl0VGVtcGxhdGVDb21wb25lbnQsXG5cdERhdGVFZGl0VGVtcGxhdGVDb21wb25lbnQsXG5cdENvbHVtblF1ZXJ5Q29tcG9uZW50LFxuXG5cdEZ1bmN0aW9uVmlld0NvbXBvbmVudCxcblx0QmFyVmlld0NvbXBvbmVudCxcblx0UGVyY2VudGFnZVZpZXdDb21wb25lbnQsXG5cdFRleHRWaWV3Q29tcG9uZW50XG5dO1xuXG5jb25zdCBleHBvcnREZWNsYXJhdGlvbnMgPSBbXG5cdFZpZXdUZW1wbGF0ZXNDb21wb25lbnQsXG5cdEVkaXRUZW1wbGF0ZXNDb21wb25lbnQsXG5cdENvbHVtblF1ZXJ5Q29tcG9uZW50LFxuXG5cdEZhYnJpY0NoaXBNb2R1bGUsXG5cdEZhYnJpY0NoZWNrYm94TW9kdWxlLFxuXHRGYWJyaWNCdXR0b25Nb2R1bGUsXG5cdEZhYnJpY0lucHV0TW9kdWxlLFxuXG5cdEZ1bmN0aW9uVmlld0NvbXBvbmVudCxcblx0QmFyVmlld0NvbXBvbmVudCxcblx0UGVyY2VudGFnZVZpZXdDb21wb25lbnRcbl07XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0Q29tcG9zaXRpb25BcGlNb2R1bGUsXG5cblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXG5cdFx0U2FuaXRpemVNb2R1bGUsXG5cblx0XHRGYWJyaWNDaGlwTW9kdWxlLFxuXHRcdEZhYnJpY0NoZWNrYm94TW9kdWxlLFxuXHRcdEZhYnJpY0J1dHRvbk1vZHVsZSxcblx0XHRGYWJyaWNJbnB1dE1vZHVsZSxcblx0XHRGYWJyaWNEYXRlUGlja2VyTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdC4uLmNvbXBvbmVudHNcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdC4uLmV4cG9ydERlY2xhcmF0aW9uc1xuXHRdLFxuXHRlbnRyeUNvbXBvbmVudHM6IFtcblx0XHRWaWV3VGVtcGxhdGVzQ29tcG9uZW50LFxuXHRcdEVkaXRUZW1wbGF0ZXNDb21wb25lbnQsXG5cdFx0RmFicmljQ2hpcENvbXBvbmVudCxcblx0XHRGYWJyaWNDaGVja2JveENvbXBvbmVudCxcblx0XHRGYWJyaWNCdXR0b25Db21wb25lbnQsXG5cdFx0RmFicmljSW5wdXRDb21wb25lbnRcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkZlYXR1cmVNb2R1bGUgZXh0ZW5kcyBGZWF0dXJlTW9kdWxlIHtcblxuXHRzdGF0aWMgZm9yQ29tcG9uZW50KCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoQE9wdGlvbmFsKCkgY29tcG9zaXRpb25BcGlNb2R1bGU6IENvbXBvc2l0aW9uQXBpTW9kdWxlKSB7XG5cdFx0c3VwZXIoKTtcblx0XHRpZiAoY29tcG9zaXRpb25BcGlNb2R1bGUgPT09IG51bGwpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignQ29tcG9zaXRpb25BcGlNb2R1bGUgaXMgcmVxdWlyZWQuJyk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==