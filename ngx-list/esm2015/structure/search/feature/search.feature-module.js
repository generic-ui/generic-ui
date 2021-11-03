import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FabricModule } from '@generic-ui/fabric';
import { FeatureModule } from '@generic-ui/hermes';
import { SearchApiModule } from '../core/api/search.api-module';
import { SearchIconComponent } from './icon/search-icon.component';
import { SearchComponent } from './search.component';
import * as i0 from "@angular/core";
import * as i1 from "../core/api/search.api-module";
export class SearchFeatureModule extends FeatureModule {
    constructor(searchApiModule) {
        super();
        if (searchApiModule === null) {
            throw new Error('SearchApiModule is required');
        }
    }
    static forComponent() {
        return [];
    }
}
SearchFeatureModule.ɵfac = function SearchFeatureModule_Factory(t) { return new (t || SearchFeatureModule)(i0.ɵɵinject(i1.SearchApiModule)); };
SearchFeatureModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SearchFeatureModule });
SearchFeatureModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FabricModule,
            SearchApiModule,
            ReactiveFormsModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchFeatureModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FabricModule,
                    SearchApiModule,
                    ReactiveFormsModule
                ],
                declarations: [
                    SearchIconComponent,
                    SearchComponent
                ],
                exports: [
                    SearchIconComponent,
                    SearchComponent
                ]
            }]
    }], function () { return [{ type: i1.SearchApiModule }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SearchFeatureModule, { declarations: [SearchIconComponent,
        SearchComponent], imports: [CommonModule,
        FabricModule,
        SearchApiModule,
        ReactiveFormsModule], exports: [SearchIconComponent,
        SearchComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvc2VhcmNoL2ZlYXR1cmUvc2VhcmNoLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7O0FBbUJyRCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsYUFBYTtJQU1yRCxZQUFZLGVBQWdDO1FBQzNDLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxlQUFlLEtBQUssSUFBSSxFQUFFO1lBQzdCLE1BQU0sSUFBSSxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztTQUMvQztJQUNGLENBQUM7SUFURCxNQUFNLENBQUMsWUFBWTtRQUNsQixPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7O3NGQUpXLG1CQUFtQjtxRUFBbkIsbUJBQW1CO3lFQWZ0QjtZQUNSLFlBQVk7WUFDWixZQUFZO1lBQ1osZUFBZTtZQUNmLG1CQUFtQjtTQUNuQjt1RkFVVyxtQkFBbUI7Y0FoQi9CLFFBQVE7ZUFBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixZQUFZO29CQUNaLGVBQWU7b0JBQ2YsbUJBQW1CO2lCQUNuQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ2IsbUJBQW1CO29CQUNuQixlQUFlO2lCQUNmO2dCQUNELE9BQU8sRUFBRTtvQkFDUixtQkFBbUI7b0JBQ25CLGVBQWU7aUJBQ2Y7YUFDRDs7d0ZBQ1ksbUJBQW1CLG1CQVI5QixtQkFBbUI7UUFDbkIsZUFBZSxhQVBmLFlBQVk7UUFDWixZQUFZO1FBQ1osZUFBZTtRQUNmLG1CQUFtQixhQU9uQixtQkFBbUI7UUFDbkIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEZhYnJpY01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5pbXBvcnQgeyBGZWF0dXJlTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2VhcmNoQXBpTW9kdWxlIH0gZnJvbSAnLi4vY29yZS9hcGkvc2VhcmNoLmFwaS1tb2R1bGUnO1xuaW1wb3J0IHsgU2VhcmNoSWNvbkNvbXBvbmVudCB9IGZyb20gJy4vaWNvbi9zZWFyY2gtaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi9zZWFyY2guY29tcG9uZW50JztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZhYnJpY01vZHVsZSxcblx0XHRTZWFyY2hBcGlNb2R1bGUsXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRTZWFyY2hJY29uQ29tcG9uZW50LFxuXHRcdFNlYXJjaENvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0U2VhcmNoSWNvbkNvbXBvbmVudCxcblx0XHRTZWFyY2hDb21wb25lbnRcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hGZWF0dXJlTW9kdWxlIGV4dGVuZHMgRmVhdHVyZU1vZHVsZSB7XG5cblx0c3RhdGljIGZvckNvbXBvbmVudCgpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKHNlYXJjaEFwaU1vZHVsZTogU2VhcmNoQXBpTW9kdWxlKSB7XG5cdFx0c3VwZXIoKTtcblx0XHRpZiAoc2VhcmNoQXBpTW9kdWxlID09PSBudWxsKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1NlYXJjaEFwaU1vZHVsZSBpcyByZXF1aXJlZCcpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=