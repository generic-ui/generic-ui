import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '@generic-ui/hermes';
import { RowSelectionTypeArchive } from '../core/api/formation/type/row-selection-type.archive';
import { SourceApiModule } from '../core/api/source.api-module';
import * as i0 from "@angular/core";
export class SourceFeatureModule extends FeatureModule {
    static forComponent() {
        return [
            RowSelectionTypeArchive
        ];
    }
}
SourceFeatureModule.ɵfac = /*@__PURE__*/ function () { let ɵSourceFeatureModule_BaseFactory; return function SourceFeatureModule_Factory(t) { return (ɵSourceFeatureModule_BaseFactory || (ɵSourceFeatureModule_BaseFactory = i0.ɵɵgetInheritedFactory(SourceFeatureModule)))(t || SourceFeatureModule); }; }();
SourceFeatureModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SourceFeatureModule });
SourceFeatureModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            SourceApiModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SourceFeatureModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    SourceApiModule
                ],
                declarations: [],
                exports: []
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SourceFeatureModule, { imports: [CommonModule,
        SourceApiModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvc291cmNlL2ZlYXR1cmUvc291cmNlLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNoRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBV2hFLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxhQUFhO0lBRXJELE1BQU0sQ0FBQyxZQUFZO1FBQ2xCLE9BQU87WUFDTix1QkFBdUI7U0FDdkIsQ0FBQztJQUNILENBQUM7O3VQQU5XLG1CQUFtQixTQUFuQixtQkFBbUI7cUVBQW5CLG1CQUFtQjt5RUFQdEI7WUFDUixZQUFZO1lBQ1osZUFBZTtTQUNmO3VGQUlXLG1CQUFtQjtjQVIvQixRQUFRO2VBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osZUFBZTtpQkFDZjtnQkFDRCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLEVBQUU7YUFDWDs7d0ZBQ1ksbUJBQW1CLGNBTjlCLFlBQVk7UUFDWixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGZWF0dXJlTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgUm93U2VsZWN0aW9uVHlwZUFyY2hpdmUgfSBmcm9tICcuLi9jb3JlL2FwaS9mb3JtYXRpb24vdHlwZS9yb3ctc2VsZWN0aW9uLXR5cGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTb3VyY2VBcGlNb2R1bGUgfSBmcm9tICcuLi9jb3JlL2FwaS9zb3VyY2UuYXBpLW1vZHVsZSc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRTb3VyY2VBcGlNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgU291cmNlRmVhdHVyZU1vZHVsZSBleHRlbmRzIEZlYXR1cmVNb2R1bGUge1xuXG5cdHN0YXRpYyBmb3JDb21wb25lbnQoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0Um93U2VsZWN0aW9uVHlwZUFyY2hpdmVcblx0XHRdO1xuXHR9XG5cblx0Ly8gY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgc291cmNlQXBpTW9kdWxlOiBTb3VyY2VBcGlNb2R1bGUpIHtcblx0Ly8gXHRzdXBlcigpO1xuXHQvLyBcdGlmIChzb3VyY2VBcGlNb2R1bGUgPT09IG51bGwpIHtcblx0Ly8gXHRcdHRocm93IG5ldyBFcnJvcignU291cmNlQXBpTW9kdWxlIGlzIHJlcXVpcmVkJyk7XG5cdC8vIFx0fVxuXHQvLyB9XG5cbn1cbiJdfQ==