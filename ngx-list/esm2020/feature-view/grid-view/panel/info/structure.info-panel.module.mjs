import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricModule } from '@generic-ui/fabric';
import { NumberFormatterModule } from '../../../../feature/common/cdk/number-formatter/number-formatter.module';
import { StructureInfoPanelComponent } from './structure.info-panel.component';
import { StructureInfoModalComponent } from './info-modal/structure-info-modal.component';
import { StructureColumnManagerModule } from '../../column-manager/structure.column-manager.module';
import { StructureInfoIconComponent } from './icon/structure.info-icon.component';
import { StructureInfoPanelConfigConverter } from '../../../../core/structure/core/api/panel/info/structure.info-panel.config-converter';
import { SchemaManagerModule } from '../../../../feature/schema/manager/schema-manager.module';
import { SourceCounterFeatureModule } from '../../../../feature/structure/source/counter/source-counter.feature-module';
import { TranslationFeatureModule } from '../../../../feature/l10n/translation.feature-module';
import * as i0 from "@angular/core";
export class StructureInfoPanelModule {
}
StructureInfoPanelModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureInfoPanelModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
StructureInfoPanelModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureInfoPanelModule, declarations: [StructureInfoPanelComponent,
        StructureInfoModalComponent,
        StructureInfoIconComponent], imports: [CommonModule,
        NumberFormatterModule,
        FabricModule,
        StructureColumnManagerModule,
        SchemaManagerModule,
        SourceCounterFeatureModule,
        TranslationFeatureModule], exports: [StructureInfoModalComponent,
        StructureInfoPanelComponent] });
StructureInfoPanelModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureInfoPanelModule, providers: [
        StructureInfoPanelConfigConverter
    ], imports: [[
            CommonModule,
            NumberFormatterModule,
            FabricModule,
            StructureColumnManagerModule,
            SchemaManagerModule,
            SourceCounterFeatureModule,
            TranslationFeatureModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureInfoPanelModule, decorators: [{
            type: NgModule,
            args: [{
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
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8tcGFuZWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQUNoSCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMxRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUNwRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxzRkFBc0YsQ0FBQztBQUN6SSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUMvRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw0RUFBNEUsQ0FBQztBQUN4SCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQzs7QUE2Qi9GLE1BQU0sT0FBTyx3QkFBd0I7O3NIQUF4Qix3QkFBd0I7dUhBQXhCLHdCQUF3QixpQkFmbkMsMkJBQTJCO1FBQzNCLDJCQUEyQjtRQUMzQiwwQkFBMEIsYUFYMUIsWUFBWTtRQUNaLHFCQUFxQjtRQUNyQixZQUFZO1FBQ1osNEJBQTRCO1FBQzVCLG1CQUFtQjtRQUNuQiwwQkFBMEI7UUFDMUIsd0JBQXdCLGFBUXhCLDJCQUEyQjtRQUMzQiwyQkFBMkI7dUhBU2hCLHdCQUF3QixhQUp6QjtRQUNWLGlDQUFpQztLQUNqQyxZQXZCUTtZQUNSLFlBQVk7WUFDWixxQkFBcUI7WUFDckIsWUFBWTtZQUNaLDRCQUE0QjtZQUM1QixtQkFBbUI7WUFDbkIsMEJBQTBCO1lBQzFCLHdCQUF3QjtTQUN4Qjs0RkFpQlcsd0JBQXdCO2tCQTFCcEMsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixxQkFBcUI7d0JBQ3JCLFlBQVk7d0JBQ1osNEJBQTRCO3dCQUM1QixtQkFBbUI7d0JBQ25CLDBCQUEwQjt3QkFDMUIsd0JBQXdCO3FCQUN4QjtvQkFDRCxZQUFZLEVBQUU7d0JBQ2IsMkJBQTJCO3dCQUMzQiwyQkFBMkI7d0JBQzNCLDBCQUEwQjtxQkFDMUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNSLDJCQUEyQjt3QkFDM0IsMkJBQTJCO3FCQUMzQjtvQkFDRCxlQUFlLEVBQUU7d0JBQ2hCLDJCQUEyQjtxQkFDM0I7b0JBQ0QsU0FBUyxFQUFFO3dCQUNWLGlDQUFpQztxQkFDakM7aUJBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmFicmljTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgTnVtYmVyRm9ybWF0dGVyTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY2RrL251bWJlci1mb3JtYXR0ZXIvbnVtYmVyLWZvcm1hdHRlci5tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5mb1BhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuaW5mby1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5mb01vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9pbmZvLW1vZGFsL3N0cnVjdHVyZS1pbmZvLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5NYW5hZ2VyTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29sdW1uLW1hbmFnZXIvc3RydWN0dXJlLmNvbHVtbi1tYW5hZ2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvSWNvbkNvbXBvbmVudCB9IGZyb20gJy4vaWNvbi9zdHJ1Y3R1cmUuaW5mby1pY29uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWdDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9jb3JlL2FwaS9wYW5lbC9pbmZvL3N0cnVjdHVyZS5pbmZvLXBhbmVsLmNvbmZpZy1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU2NoZW1hTWFuYWdlck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2ZlYXR1cmUvc2NoZW1hL21hbmFnZXIvc2NoZW1hLW1hbmFnZXIubW9kdWxlJztcbmltcG9ydCB7IFNvdXJjZUNvdW50ZXJGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmVhdHVyZS9zdHJ1Y3R1cmUvc291cmNlL2NvdW50ZXIvc291cmNlLWNvdW50ZXIuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25GZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmVhdHVyZS9sMTBuL3RyYW5zbGF0aW9uLmZlYXR1cmUtbW9kdWxlJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdE51bWJlckZvcm1hdHRlck1vZHVsZSxcblx0XHRGYWJyaWNNb2R1bGUsXG5cdFx0U3RydWN0dXJlQ29sdW1uTWFuYWdlck1vZHVsZSxcblx0XHRTY2hlbWFNYW5hZ2VyTW9kdWxlLFxuXHRcdFNvdXJjZUNvdW50ZXJGZWF0dXJlTW9kdWxlLFxuXHRcdFRyYW5zbGF0aW9uRmVhdHVyZU1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRTdHJ1Y3R1cmVJbmZvUGFuZWxDb21wb25lbnQsXG5cdFx0U3RydWN0dXJlSW5mb01vZGFsQ29tcG9uZW50LFxuXHRcdFN0cnVjdHVyZUluZm9JY29uQ29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRTdHJ1Y3R1cmVJbmZvTW9kYWxDb21wb25lbnQsXG5cdFx0U3RydWN0dXJlSW5mb1BhbmVsQ29tcG9uZW50XG5cdF0sXG5cdGVudHJ5Q29tcG9uZW50czogW1xuXHRcdFN0cnVjdHVyZUluZm9Nb2RhbENvbXBvbmVudFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWdDb252ZXJ0ZXJcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVJbmZvUGFuZWxNb2R1bGUge1xuXG59XG4iXX0=