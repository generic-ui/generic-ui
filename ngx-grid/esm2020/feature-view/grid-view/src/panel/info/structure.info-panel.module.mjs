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
}
StructureInfoPanelModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: StructureInfoPanelModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
StructureInfoPanelModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: StructureInfoPanelModule, declarations: [StructureInfoPanelComponent,
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
StructureInfoPanelModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: StructureInfoPanelModule, providers: [
        StructureInfoPanelConfigConverter
    ], imports: [CommonModule,
        NumberFormatterModule,
        FabricModule,
        StructureColumnManagerModule,
        SchemaManagerModule,
        SourceCounterFeatureModule,
        TranslationFeatureModule,
        GuiTemplateModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: StructureInfoPanelModule, decorators: [{
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
                    entryComponents: [
                        StructureInfoModalComponent
                    ],
                    providers: [
                        StructureInfoPanelConfigConverter
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8tcGFuZWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L3NyYy9wYW5lbC9pbmZvL3N0cnVjdHVyZS5pbmZvLXBhbmVsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0ZBQWdGLENBQUM7QUFDdkgsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0UsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDMUYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDcEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sdUdBQXVHLENBQUM7QUFDMUosT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDdEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbUZBQW1GLENBQUM7QUFDL0gsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDdEcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUVBQWlFLENBQUM7O0FBOEJwRyxNQUFNLE9BQU8sd0JBQXdCOztzSEFBeEIsd0JBQXdCO3VIQUF4Qix3QkFBd0IsaUJBZm5DLDJCQUEyQjtRQUMzQiwyQkFBMkI7UUFDM0IsMEJBQTBCLGFBWjFCLFlBQVk7UUFDWixxQkFBcUI7UUFDckIsWUFBWTtRQUNaLDRCQUE0QjtRQUM1QixtQkFBbUI7UUFDbkIsMEJBQTBCO1FBQzFCLHdCQUF3QjtRQUN4QixpQkFBaUIsYUFRakIsMkJBQTJCO1FBQzNCLDJCQUEyQjt1SEFTaEIsd0JBQXdCLGFBSnpCO1FBQ1YsaUNBQWlDO0tBQ2pDLFlBdkJBLFlBQVk7UUFDWixxQkFBcUI7UUFDckIsWUFBWTtRQUNaLDRCQUE0QjtRQUM1QixtQkFBbUI7UUFDbkIsMEJBQTBCO1FBQzFCLHdCQUF3QjtRQUN4QixpQkFBaUI7NEZBa0JOLHdCQUF3QjtrQkEzQnBDLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1oscUJBQXFCO3dCQUNyQixZQUFZO3dCQUNaLDRCQUE0Qjt3QkFDNUIsbUJBQW1CO3dCQUNuQiwwQkFBMEI7d0JBQzFCLHdCQUF3Qjt3QkFDeEIsaUJBQWlCO3FCQUNqQjtvQkFDRCxZQUFZLEVBQUU7d0JBQ2IsMkJBQTJCO3dCQUMzQiwyQkFBMkI7d0JBQzNCLDBCQUEwQjtxQkFDMUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNSLDJCQUEyQjt3QkFDM0IsMkJBQTJCO3FCQUMzQjtvQkFDRCxlQUFlLEVBQUU7d0JBQ2hCLDJCQUEyQjtxQkFDM0I7b0JBQ0QsU0FBUyxFQUFFO3dCQUNWLGlDQUFpQztxQkFDakM7aUJBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmFicmljTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgTnVtYmVyRm9ybWF0dGVyTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY2RrL3NyYy9udW1iZXItZm9ybWF0dGVyL251bWJlci1mb3JtYXR0ZXIubW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9QYW5lbENvbXBvbmVudCB9IGZyb20gJy4vc3RydWN0dXJlLmluZm8tcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9Nb2RhbENvbXBvbmVudCB9IGZyb20gJy4vaW5mby1tb2RhbC9zdHJ1Y3R1cmUtaW5mby1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uTWFuYWdlck1vZHVsZSB9IGZyb20gJy4uLy4uL2NvbHVtbi1tYW5hZ2VyL3N0cnVjdHVyZS5jb2x1bW4tbWFuYWdlci5tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5mb0ljb25Db21wb25lbnQgfSBmcm9tICcuL2ljb24vc3RydWN0dXJlLmluZm8taWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9wYW5lbC9pbmZvL3N0cnVjdHVyZS5pbmZvLXBhbmVsLmNvbmZpZy1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU2NoZW1hTWFuYWdlck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvc2NoZW1hL3NyYy9tYW5hZ2VyL3NjaGVtYS1tYW5hZ2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBTb3VyY2VDb3VudGVyRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlL3NvdXJjZS9zcmMvY291bnRlci9zb3VyY2UtY291bnRlci5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbkZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9mZWF0dXJlL2wxMG4vc3JjL3RyYW5zbGF0aW9uLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IEd1aVRlbXBsYXRlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS9ndWktYW5ndWxhci90ZW1wbGF0ZS9ndWkudGVtcGxhdGUubW9kdWxlJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdE51bWJlckZvcm1hdHRlck1vZHVsZSxcblx0XHRGYWJyaWNNb2R1bGUsXG5cdFx0U3RydWN0dXJlQ29sdW1uTWFuYWdlck1vZHVsZSxcblx0XHRTY2hlbWFNYW5hZ2VyTW9kdWxlLFxuXHRcdFNvdXJjZUNvdW50ZXJGZWF0dXJlTW9kdWxlLFxuXHRcdFRyYW5zbGF0aW9uRmVhdHVyZU1vZHVsZSxcblx0XHRHdWlUZW1wbGF0ZU1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRTdHJ1Y3R1cmVJbmZvUGFuZWxDb21wb25lbnQsXG5cdFx0U3RydWN0dXJlSW5mb01vZGFsQ29tcG9uZW50LFxuXHRcdFN0cnVjdHVyZUluZm9JY29uQ29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRTdHJ1Y3R1cmVJbmZvTW9kYWxDb21wb25lbnQsXG5cdFx0U3RydWN0dXJlSW5mb1BhbmVsQ29tcG9uZW50XG5cdF0sXG5cdGVudHJ5Q29tcG9uZW50czogW1xuXHRcdFN0cnVjdHVyZUluZm9Nb2RhbENvbXBvbmVudFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWdDb252ZXJ0ZXJcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVJbmZvUGFuZWxNb2R1bGUge1xuXG59XG4iXX0=