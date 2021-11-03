import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '@generic-ui/hermes';
import { SummariesApiModule } from '../core/api/summaries.api-module';
import { StructureSummariesPanelComponent } from './panel/structure.summaries-panel.component';
import { StructureSummariesConfigArchive } from '../core/domain/config/structure.summaries-config.archive';
import { StructureSummariesPanelConfigConverter } from '../core/domain/config/structure.summaries-panel.config-converter';
import { FabricModule } from '@generic-ui/fabric';
import { TranslationFeatureModule } from '../../../l10n/feature/translation.feature-module';
import * as i0 from "@angular/core";
export class SummariesFeatureModule extends FeatureModule {
    static forComponent() {
        return [];
    }
}
SummariesFeatureModule.ɵfac = /*@__PURE__*/ function () { let ɵSummariesFeatureModule_BaseFactory; return function SummariesFeatureModule_Factory(t) { return (ɵSummariesFeatureModule_BaseFactory || (ɵSummariesFeatureModule_BaseFactory = i0.ɵɵgetInheritedFactory(SummariesFeatureModule)))(t || SummariesFeatureModule); }; }();
SummariesFeatureModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SummariesFeatureModule });
SummariesFeatureModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        StructureSummariesConfigArchive,
        StructureSummariesPanelConfigConverter
    ], imports: [[
            CommonModule,
            FabricModule,
            TranslationFeatureModule,
            SummariesApiModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SummariesFeatureModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FabricModule,
                    TranslationFeatureModule,
                    SummariesApiModule
                ],
                declarations: [
                    StructureSummariesPanelComponent
                ],
                exports: [
                    StructureSummariesPanelComponent
                ],
                providers: [
                    StructureSummariesConfigArchive,
                    StructureSummariesPanelConfigConverter
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SummariesFeatureModule, { declarations: [StructureSummariesPanelComponent], imports: [CommonModule,
        FabricModule,
        TranslationFeatureModule,
        SummariesApiModule], exports: [StructureSummariesPanelComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvc3VtbWFyaWVzL2ZlYXR1cmUvc3VtbWFyaWVzLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMvRixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUMzRyxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUMxSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0RBQWtELENBQUM7O0FBcUI1RixNQUFNLE9BQU8sc0JBQXVCLFNBQVEsYUFBYTtJQUV4RCxNQUFNLENBQUMsWUFBWTtRQUNsQixPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7O3NRQUpXLHNCQUFzQixTQUF0QixzQkFBc0I7d0VBQXRCLHNCQUFzQjs2RUFMdkI7UUFDViwrQkFBK0I7UUFDL0Isc0NBQXNDO0tBQ3RDLFlBZlE7WUFDUixZQUFZO1lBQ1osWUFBWTtZQUNaLHdCQUF3QjtZQUN4QixrQkFBa0I7U0FDbEI7dUZBWVcsc0JBQXNCO2NBbEJsQyxRQUFRO2VBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osWUFBWTtvQkFDWix3QkFBd0I7b0JBQ3hCLGtCQUFrQjtpQkFDbEI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLGdDQUFnQztpQkFDaEM7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLGdDQUFnQztpQkFDaEM7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLCtCQUErQjtvQkFDL0Isc0NBQXNDO2lCQUN0QzthQUNEOzt3RkFDWSxzQkFBc0IsbUJBVmpDLGdDQUFnQyxhQU5oQyxZQUFZO1FBQ1osWUFBWTtRQUNaLHdCQUF3QjtRQUN4QixrQkFBa0IsYUFNbEIsZ0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGZWF0dXJlTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3VtbWFyaWVzQXBpTW9kdWxlIH0gZnJvbSAnLi4vY29yZS9hcGkvc3VtbWFyaWVzLmFwaS1tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL3BhbmVsL3N0cnVjdHVyZS5zdW1tYXJpZXMtcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc0NvbmZpZ0FyY2hpdmUgfSBmcm9tICcuLi9jb3JlL2RvbWFpbi9jb25maWcvc3RydWN0dXJlLnN1bW1hcmllcy1jb25maWcuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZ0NvbnZlcnRlciB9IGZyb20gJy4uL2NvcmUvZG9tYWluL2NvbmZpZy9zdHJ1Y3R1cmUuc3VtbWFyaWVzLXBhbmVsLmNvbmZpZy1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgRmFicmljTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2wxMG4vZmVhdHVyZS90cmFuc2xhdGlvbi5mZWF0dXJlLW1vZHVsZSc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGYWJyaWNNb2R1bGUsXG5cdFx0VHJhbnNsYXRpb25GZWF0dXJlTW9kdWxlLFxuXHRcdFN1bW1hcmllc0FwaU1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0U3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb21wb25lbnRcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0U3RydWN0dXJlU3VtbWFyaWVzQ29uZmlnQXJjaGl2ZSxcblx0XHRTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZ0NvbnZlcnRlclxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFN1bW1hcmllc0ZlYXR1cmVNb2R1bGUgZXh0ZW5kcyBGZWF0dXJlTW9kdWxlIHtcblxuXHRzdGF0aWMgZm9yQ29tcG9uZW50KCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0Ly8gY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgc3VtbWFyaWVzQXBpTW9kdWxlOiBTdW1tYXJpZXNBcGlNb2R1bGUpIHtcblx0Ly8gXHRzdXBlcigpO1xuXHQvLyBcdGlmIChzdW1tYXJpZXNBcGlNb2R1bGUgPT09IG51bGwpIHtcblx0Ly8gXHRcdHRocm93IG5ldyBFcnJvcignU3VtbWFyaWVzQXBpTW9kdWxlIGlzIHJlcXVpcmVkLicpO1xuXHQvLyBcdH1cblx0Ly8gfVxuXG59XG4iXX0=