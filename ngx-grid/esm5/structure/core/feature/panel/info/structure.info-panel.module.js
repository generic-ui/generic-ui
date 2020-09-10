/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricModule } from '@generic-ui/fabric';
import { NumberFormatterModule } from '../../../../../common/cdk/number-formatter/number-formatter.module';
import { StructureInfoPanelComponent } from './structure.info-panel.component';
import { StructureInfoModalComponent } from './info-modal/structure-info-modal.component';
import { StructureColumnManagerModule } from '../../column-manager/structure.column-manager.module';
import { StructureInfoIconComponent } from './icon/structure.info-icon.component';
import { StructureInfoPanelConfigConverter } from './structure.info-panel.config-converter';
import { StructureSchemaManagerModule } from '../../../../../schema/feature/manager/structure.schema-manager.module';
import { SourceCounterFeatureModule } from '../../../../source-counter/feature/source-counter.feature-module';
var StructureInfoPanelModule = /** @class */ (function () {
    function StructureInfoPanelModule() {
    }
    StructureInfoPanelModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        NumberFormatterModule,
                        FabricModule,
                        StructureColumnManagerModule,
                        StructureSchemaManagerModule,
                        SourceCounterFeatureModule
                    ],
                    declarations: [
                        StructureInfoPanelComponent,
                        StructureInfoModalComponent,
                        StructureInfoIconComponent
                    ],
                    exports: [
                        StructureInfoModalComponent,
                        StructureInfoPanelComponent
                    ],
                    entryComponents: [
                        StructureInfoModalComponent
                    ],
                    providers: [
                        StructureInfoPanelConfigConverter
                    ]
                },] }
    ];
    return StructureInfoPanelModule;
}());
export { StructureInfoPanelModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8tcGFuZWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvY29yZS9mZWF0dXJlL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDM0csT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0UsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDMUYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDcEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDNUYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sdUVBQXVFLENBQUM7QUFDckgsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFHOUc7SUFBQTtJQTJCQSxDQUFDOztnQkEzQkEsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLHFCQUFxQjt3QkFDckIsWUFBWTt3QkFDWiw0QkFBNEI7d0JBQzVCLDRCQUE0Qjt3QkFDNUIsMEJBQTBCO3FCQUMxQjtvQkFDRCxZQUFZLEVBQUU7d0JBQ2IsMkJBQTJCO3dCQUMzQiwyQkFBMkI7d0JBQzNCLDBCQUEwQjtxQkFDMUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNSLDJCQUEyQjt3QkFDM0IsMkJBQTJCO3FCQUMzQjtvQkFDRCxlQUFlLEVBQUU7d0JBQ2hCLDJCQUEyQjtxQkFDM0I7b0JBQ0QsU0FBUyxFQUFFO3dCQUNWLGlDQUFpQztxQkFDakM7aUJBQ0Q7O0lBR0QsK0JBQUM7Q0FBQSxBQTNCRCxJQTJCQztTQUZZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGYWJyaWNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBOdW1iZXJGb3JtYXR0ZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL251bWJlci1mb3JtYXR0ZXIvbnVtYmVyLWZvcm1hdHRlci5tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5mb1BhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuaW5mby1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5mb01vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9pbmZvLW1vZGFsL3N0cnVjdHVyZS1pbmZvLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5NYW5hZ2VyTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29sdW1uLW1hbmFnZXIvc3RydWN0dXJlLmNvbHVtbi1tYW5hZ2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvSWNvbkNvbXBvbmVudCB9IGZyb20gJy4vaWNvbi9zdHJ1Y3R1cmUuaW5mby1pY29uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWdDb252ZXJ0ZXIgfSBmcm9tICcuL3N0cnVjdHVyZS5pbmZvLXBhbmVsLmNvbmZpZy1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlU2NoZW1hTWFuYWdlck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9mZWF0dXJlL21hbmFnZXIvc3RydWN0dXJlLnNjaGVtYS1tYW5hZ2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBTb3VyY2VDb3VudGVyRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS1jb3VudGVyL2ZlYXR1cmUvc291cmNlLWNvdW50ZXIuZmVhdHVyZS1tb2R1bGUnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0TnVtYmVyRm9ybWF0dGVyTW9kdWxlLFxuXHRcdEZhYnJpY01vZHVsZSxcblx0XHRTdHJ1Y3R1cmVDb2x1bW5NYW5hZ2VyTW9kdWxlLFxuXHRcdFN0cnVjdHVyZVNjaGVtYU1hbmFnZXJNb2R1bGUsXG5cdFx0U291cmNlQ291bnRlckZlYXR1cmVNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0U3RydWN0dXJlSW5mb1BhbmVsQ29tcG9uZW50LFxuXHRcdFN0cnVjdHVyZUluZm9Nb2RhbENvbXBvbmVudCxcblx0XHRTdHJ1Y3R1cmVJbmZvSWNvbkNvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0U3RydWN0dXJlSW5mb01vZGFsQ29tcG9uZW50LFxuXHRcdFN0cnVjdHVyZUluZm9QYW5lbENvbXBvbmVudFxuXHRdLFxuXHRlbnRyeUNvbXBvbmVudHM6IFtcblx0XHRTdHJ1Y3R1cmVJbmZvTW9kYWxDb21wb25lbnRcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0U3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnQ29udmVydGVyXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlSW5mb1BhbmVsTW9kdWxlIHtcblxufVxuIl19