/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@generic-ui/hermes';
import { SearchDomainModule } from '../domain/search.domain-module';
import { SearchCommandInvoker } from './search.command-invoker';
import { SearchWarehouse } from './search.warehouse';
import { SearchEventRepository } from './search.event-repository';
import { SearchPhraseRepository } from './phrase/search-phrase.repository';
import { SearchHighlightArchive } from './highlight/search-highlight.archive';
import { SearchPlaceholderArchive } from './placeholder/search-placeholder.archive';
import { SearchingRepository } from './enabled/searching.repository';
import { SearchDomainWarehouse } from '../domain-read/search.domain-warehouse';
var SearchApiModule = /** @class */ (function (_super) {
    tslib_1.__extends(SearchApiModule, _super);
    function SearchApiModule() {
        return _super.call(this) || this;
    }
    SearchApiModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        SearchDomainModule
                    ],
                    providers: [
                        SearchCommandInvoker,
                        {
                            provide: SearchWarehouse,
                            useClass: SearchDomainWarehouse
                        },
                        SearchEventRepository,
                        SearchPhraseRepository,
                        SearchHighlightArchive,
                        SearchPlaceholderArchive,
                        SearchingRepository
                    ],
                    declarations: [],
                    exports: []
                },] }
    ];
    /** @nocollapse */
    SearchApiModule.ctorParameters = function () { return []; };
    return SearchApiModule;
}(ApiModule));
export { SearchApiModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zZWFyY2gvY29yZS9hcGkvc2VhcmNoLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRy9FO0lBc0JxQywyQ0FBUztJQUU3QztlQUNDLGlCQUFPO0lBQ1IsQ0FBQzs7Z0JBMUJELFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixrQkFBa0I7cUJBQ2xCO29CQUNELFNBQVMsRUFBRTt3QkFDVixvQkFBb0I7d0JBQ3BCOzRCQUNDLE9BQU8sRUFBRSxlQUFlOzRCQUN4QixRQUFRLEVBQUUscUJBQXFCO3lCQUMvQjt3QkFDRCxxQkFBcUI7d0JBRXJCLHNCQUFzQjt3QkFDdEIsc0JBQXNCO3dCQUN0Qix3QkFBd0I7d0JBQ3hCLG1CQUFtQjtxQkFFbkI7b0JBQ0QsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2lCQUNYOzs7O0lBTUQsc0JBQUM7Q0FBQSxBQTNCRCxDQXNCcUMsU0FBUyxHQUs3QztTQUxZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQXBpTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2VhcmNoRG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vZG9tYWluL3NlYXJjaC5kb21haW4tbW9kdWxlJztcbmltcG9ydCB7IFNlYXJjaENvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi9zZWFyY2guY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNlYXJjaFdhcmVob3VzZSB9IGZyb20gJy4vc2VhcmNoLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTZWFyY2hFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuL3NlYXJjaC5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNlYXJjaFBocmFzZVJlcG9zaXRvcnkgfSBmcm9tICcuL3BocmFzZS9zZWFyY2gtcGhyYXNlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2VhcmNoSGlnaGxpZ2h0QXJjaGl2ZSB9IGZyb20gJy4vaGlnaGxpZ2h0L3NlYXJjaC1oaWdobGlnaHQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUgfSBmcm9tICcuL3BsYWNlaG9sZGVyL3NlYXJjaC1wbGFjZWhvbGRlci5hcmNoaXZlJztcbmltcG9ydCB7IFNlYXJjaGluZ1JlcG9zaXRvcnkgfSBmcm9tICcuL2VuYWJsZWQvc2VhcmNoaW5nLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2VhcmNoRG9tYWluV2FyZWhvdXNlIH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvc2VhcmNoLmRvbWFpbi13YXJlaG91c2UnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0U2VhcmNoRG9tYWluTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFNlYXJjaENvbW1hbmRJbnZva2VyLFxuXHRcdHtcblx0XHRcdHByb3ZpZGU6IFNlYXJjaFdhcmVob3VzZSxcblx0XHRcdHVzZUNsYXNzOiBTZWFyY2hEb21haW5XYXJlaG91c2Vcblx0XHR9LFxuXHRcdFNlYXJjaEV2ZW50UmVwb3NpdG9yeSxcblxuXHRcdFNlYXJjaFBocmFzZVJlcG9zaXRvcnksXG5cdFx0U2VhcmNoSGlnaGxpZ2h0QXJjaGl2ZSxcblx0XHRTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUsXG5cdFx0U2VhcmNoaW5nUmVwb3NpdG9yeVxuXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaEFwaU1vZHVsZSBleHRlbmRzIEFwaU1vZHVsZSB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxufVxuIl19