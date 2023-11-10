import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricModule } from '@generic-ui/fabric';
import { NumberFormatterModule } from '../../../../../feature/common/cdk/src/number-formatter/number-formatter.module';
import { StructureInfoPanelComponent } from './structure.info-panel.component';
import { StructureInfoModalComponent } from './info-modal/structure-info-modal.component';
import { StructureColumnManagerModule } from '../../column-manager/structure.column-manager.module';
import { StructureInfoIconComponent } from './icon/structure.info-icon.component';
import { StructureInfoPanelConfigConverter } from '../../../../../core/structure/structure-core/src/api/panel/info/structure.info-panel.config-converter';
import { SchemaManagerModule } from '../../../../../feature/schema/src/manager/schema-manager.module';
import { SourceCounterFeatureModule } from '../../../../../feature/structure/source/src/counter/source-counter.feature-module';
import { TranslationFeatureModule } from '../../../../../feature/l10n/src/translation.feature-module';
import { GuiTemplateModule } from '../../../../../feature/gui-angular/template/gui.template.module';
import * as i0 from "@angular/core";
export class StructureInfoPanelModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureInfoPanelModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: StructureInfoPanelModule, declarations: [StructureInfoPanelComponent,
            StructureInfoModalComponent,
            StructureInfoIconComponent], imports: [CommonModule,
            NumberFormatterModule,
            FabricModule,
            StructureColumnManagerModule,
            SchemaManagerModule,
            SourceCounterFeatureModule,
            TranslationFeatureModule,
            GuiTemplateModule], exports: [StructureInfoModalComponent,
            StructureInfoPanelComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureInfoPanelModule, providers: [
            StructureInfoPanelConfigConverter
        ], imports: [CommonModule,
            NumberFormatterModule,
            FabricModule,
            StructureColumnManagerModule,
            SchemaManagerModule,
            SourceCounterFeatureModule,
            TranslationFeatureModule,
            GuiTemplateModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureInfoPanelModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        NumberFormatterModule,
                        FabricModule,
                        StructureColumnManagerModule,
                        SchemaManagerModule,
                        SourceCounterFeatureModule,
                        TranslationFeatureModule,
                        GuiTemplateModule
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
                    providers: [
                        StructureInfoPanelConfigConverter
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8tcGFuZWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L3NyYy9wYW5lbC9pbmZvL3N0cnVjdHVyZS5pbmZvLXBhbmVsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0ZBQWdGLENBQUM7QUFDdkgsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0UsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDMUYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDcEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sdUdBQXVHLENBQUM7QUFDMUosT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDdEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbUZBQW1GLENBQUM7QUFDL0gsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDdEcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUVBQWlFLENBQUM7O0FBMkJwRyxNQUFNLE9BQU8sd0JBQXdCO3dHQUF4Qix3QkFBd0I7eUdBQXhCLHdCQUF3QixpQkFabkMsMkJBQTJCO1lBQzNCLDJCQUEyQjtZQUMzQiwwQkFBMEIsYUFaMUIsWUFBWTtZQUNaLHFCQUFxQjtZQUNyQixZQUFZO1lBQ1osNEJBQTRCO1lBQzVCLG1CQUFtQjtZQUNuQiwwQkFBMEI7WUFDMUIsd0JBQXdCO1lBQ3hCLGlCQUFpQixhQVFqQiwyQkFBMkI7WUFDM0IsMkJBQTJCO3lHQU1oQix3QkFBd0IsYUFKekI7WUFDVixpQ0FBaUM7U0FDakMsWUFwQkEsWUFBWTtZQUNaLHFCQUFxQjtZQUNyQixZQUFZO1lBQ1osNEJBQTRCO1lBQzVCLG1CQUFtQjtZQUNuQiwwQkFBMEI7WUFDMUIsd0JBQXdCO1lBQ3hCLGlCQUFpQjs7NEZBZU4sd0JBQXdCO2tCQXhCcEMsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixxQkFBcUI7d0JBQ3JCLFlBQVk7d0JBQ1osNEJBQTRCO3dCQUM1QixtQkFBbUI7d0JBQ25CLDBCQUEwQjt3QkFDMUIsd0JBQXdCO3dCQUN4QixpQkFBaUI7cUJBQ2pCO29CQUNELFlBQVksRUFBRTt3QkFDYiwyQkFBMkI7d0JBQzNCLDJCQUEyQjt3QkFDM0IsMEJBQTBCO3FCQUMxQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1IsMkJBQTJCO3dCQUMzQiwyQkFBMkI7cUJBQzNCO29CQUNELFNBQVMsRUFBRTt3QkFDVixpQ0FBaUM7cUJBQ2pDO2lCQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZhYnJpY01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IE51bWJlckZvcm1hdHRlck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL2Nkay9zcmMvbnVtYmVyLWZvcm1hdHRlci9udW1iZXItZm9ybWF0dGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL3N0cnVjdHVyZS5pbmZvLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2luZm8tbW9kYWwvc3RydWN0dXJlLWluZm8tbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1hbmFnZXJNb2R1bGUgfSBmcm9tICcuLi8uLi9jb2x1bW4tbWFuYWdlci9zdHJ1Y3R1cmUuY29sdW1uLW1hbmFnZXIubW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9JY29uQ29tcG9uZW50IH0gZnJvbSAnLi9pY29uL3N0cnVjdHVyZS5pbmZvLWljb24uY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9QYW5lbENvbmZpZ0NvbnZlcnRlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvcGFuZWwvaW5mby9zdHJ1Y3R1cmUuaW5mby1wYW5lbC5jb25maWctY29udmVydGVyJztcbmltcG9ydCB7IFNjaGVtYU1hbmFnZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9mZWF0dXJlL3NjaGVtYS9zcmMvbWFuYWdlci9zY2hlbWEtbWFuYWdlci5tb2R1bGUnO1xuaW1wb3J0IHsgU291cmNlQ291bnRlckZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9mZWF0dXJlL3N0cnVjdHVyZS9zb3VyY2Uvc3JjL2NvdW50ZXIvc291cmNlLWNvdW50ZXIuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25GZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS9sMTBuL3NyYy90cmFuc2xhdGlvbi5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBHdWlUZW1wbGF0ZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvZ3VpLWFuZ3VsYXIvdGVtcGxhdGUvZ3VpLnRlbXBsYXRlLm1vZHVsZSc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHROdW1iZXJGb3JtYXR0ZXJNb2R1bGUsXG5cdFx0RmFicmljTW9kdWxlLFxuXHRcdFN0cnVjdHVyZUNvbHVtbk1hbmFnZXJNb2R1bGUsXG5cdFx0U2NoZW1hTWFuYWdlck1vZHVsZSxcblx0XHRTb3VyY2VDb3VudGVyRmVhdHVyZU1vZHVsZSxcblx0XHRUcmFuc2xhdGlvbkZlYXR1cmVNb2R1bGUsXG5cdFx0R3VpVGVtcGxhdGVNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0U3RydWN0dXJlSW5mb1BhbmVsQ29tcG9uZW50LFxuXHRcdFN0cnVjdHVyZUluZm9Nb2RhbENvbXBvbmVudCxcblx0XHRTdHJ1Y3R1cmVJbmZvSWNvbkNvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0U3RydWN0dXJlSW5mb01vZGFsQ29tcG9uZW50LFxuXHRcdFN0cnVjdHVyZUluZm9QYW5lbENvbXBvbmVudFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWdDb252ZXJ0ZXJcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVJbmZvUGFuZWxNb2R1bGUge1xuXG59XG4iXX0=