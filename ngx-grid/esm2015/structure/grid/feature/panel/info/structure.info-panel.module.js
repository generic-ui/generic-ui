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
import { SchemaManagerModule } from '../../../../../schema/feature/manager/schema-manager.module';
import { SourceCounterFeatureModule } from '../../../../source-counter/feature/source-counter.feature-module';
import { TranslationFeatureModule } from '../../../../../l10n/feature/translation.feature-module';
export class StructureInfoPanelModule {
}
StructureInfoPanelModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    NumberFormatterModule,
                    FabricModule,
                    StructureColumnManagerModule,
                    SchemaManagerModule,
                    SourceCounterFeatureModule,
                    TranslationFeatureModule
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8tcGFuZWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDM0csT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0UsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDMUYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDcEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDNUYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDbEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDOUcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUE2QmxHLE1BQU0sT0FBTyx3QkFBd0I7OztZQTFCcEMsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLHFCQUFxQjtvQkFDckIsWUFBWTtvQkFDWiw0QkFBNEI7b0JBQzVCLG1CQUFtQjtvQkFDbkIsMEJBQTBCO29CQUMxQix3QkFBd0I7aUJBQ3hCO2dCQUNELFlBQVksRUFBRTtvQkFDYiwyQkFBMkI7b0JBQzNCLDJCQUEyQjtvQkFDM0IsMEJBQTBCO2lCQUMxQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1IsMkJBQTJCO29CQUMzQiwyQkFBMkI7aUJBQzNCO2dCQUNELGVBQWUsRUFBRTtvQkFDaEIsMkJBQTJCO2lCQUMzQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1YsaUNBQWlDO2lCQUNqQzthQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZhYnJpY01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IE51bWJlckZvcm1hdHRlck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvbnVtYmVyLWZvcm1hdHRlci9udW1iZXItZm9ybWF0dGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL3N0cnVjdHVyZS5pbmZvLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2luZm8tbW9kYWwvc3RydWN0dXJlLWluZm8tbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1hbmFnZXJNb2R1bGUgfSBmcm9tICcuLi8uLi9jb2x1bW4tbWFuYWdlci9zdHJ1Y3R1cmUuY29sdW1uLW1hbmFnZXIubW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9JY29uQ29tcG9uZW50IH0gZnJvbSAnLi9pY29uL3N0cnVjdHVyZS5pbmZvLWljb24uY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9QYW5lbENvbmZpZ0NvbnZlcnRlciB9IGZyb20gJy4vc3RydWN0dXJlLmluZm8tcGFuZWwuY29uZmlnLWNvbnZlcnRlcic7XG5pbXBvcnQgeyBTY2hlbWFNYW5hZ2VyTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2ZlYXR1cmUvbWFuYWdlci9zY2hlbWEtbWFuYWdlci5tb2R1bGUnO1xuaW1wb3J0IHsgU291cmNlQ291bnRlckZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UtY291bnRlci9mZWF0dXJlL3NvdXJjZS1jb3VudGVyLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2wxMG4vZmVhdHVyZS90cmFuc2xhdGlvbi5mZWF0dXJlLW1vZHVsZSc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHROdW1iZXJGb3JtYXR0ZXJNb2R1bGUsXG5cdFx0RmFicmljTW9kdWxlLFxuXHRcdFN0cnVjdHVyZUNvbHVtbk1hbmFnZXJNb2R1bGUsXG5cdFx0U2NoZW1hTWFuYWdlck1vZHVsZSxcblx0XHRTb3VyY2VDb3VudGVyRmVhdHVyZU1vZHVsZSxcblx0XHRUcmFuc2xhdGlvbkZlYXR1cmVNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0U3RydWN0dXJlSW5mb1BhbmVsQ29tcG9uZW50LFxuXHRcdFN0cnVjdHVyZUluZm9Nb2RhbENvbXBvbmVudCxcblx0XHRTdHJ1Y3R1cmVJbmZvSWNvbkNvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0U3RydWN0dXJlSW5mb01vZGFsQ29tcG9uZW50LFxuXHRcdFN0cnVjdHVyZUluZm9QYW5lbENvbXBvbmVudFxuXHRdLFxuXHRlbnRyeUNvbXBvbmVudHM6IFtcblx0XHRTdHJ1Y3R1cmVJbmZvTW9kYWxDb21wb25lbnRcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0U3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnQ29udmVydGVyXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlSW5mb1BhbmVsTW9kdWxlIHtcblxufVxuIl19