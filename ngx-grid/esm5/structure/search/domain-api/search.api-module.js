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
var SearchApiModule = /** @class */ (function (_super) {
    tslib_1.__extends(SearchApiModule, _super);
    function SearchApiModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SearchApiModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        SearchDomainModule
                    ],
                    providers: [
                        SearchCommandInvoker,
                        SearchWarehouse,
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
    return SearchApiModule;
}(ApiModule));
export { SearchApiModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zZWFyY2gvZG9tYWluLWFwaS9zZWFyY2guYXBpLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDM0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDcEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFHckU7SUFtQnFDLDJDQUFTO0lBbkI5Qzs7SUFzQkEsQ0FBQzs7Z0JBdEJBLFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixrQkFBa0I7cUJBQ2xCO29CQUNELFNBQVMsRUFBRTt3QkFDVixvQkFBb0I7d0JBQ3BCLGVBQWU7d0JBQ2YscUJBQXFCO3dCQUVyQixzQkFBc0I7d0JBQ3RCLHNCQUFzQjt3QkFDdEIsd0JBQXdCO3dCQUN4QixtQkFBbUI7cUJBRW5CO29CQUNELFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUUsRUFBRTtpQkFDWDs7SUFJRCxzQkFBQztDQUFBLEFBdEJELENBbUJxQyxTQUFTLEdBRzdDO1NBSFksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBBcGlNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTZWFyY2hEb21haW5Nb2R1bGUgfSBmcm9tICcuLi9kb21haW4vc2VhcmNoLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgU2VhcmNoQ29tbWFuZEludm9rZXIgfSBmcm9tICcuL3NlYXJjaC5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU2VhcmNoV2FyZWhvdXNlIH0gZnJvbSAnLi9zZWFyY2gud2FyZWhvdXNlJztcbmltcG9ydCB7IFNlYXJjaEV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4vc2VhcmNoLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2VhcmNoUGhyYXNlUmVwb3NpdG9yeSB9IGZyb20gJy4vcGhyYXNlL3NlYXJjaC1waHJhc2UucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTZWFyY2hIaWdobGlnaHRBcmNoaXZlIH0gZnJvbSAnLi9oaWdobGlnaHQvc2VhcmNoLWhpZ2hsaWdodC5hcmNoaXZlJztcbmltcG9ydCB7IFNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZSB9IGZyb20gJy4vcGxhY2Vob2xkZXIvc2VhcmNoLXBsYWNlaG9sZGVyLmFyY2hpdmUnO1xuaW1wb3J0IHsgU2VhcmNoaW5nUmVwb3NpdG9yeSB9IGZyb20gJy4vZW5hYmxlZC9zZWFyY2hpbmcucmVwb3NpdG9yeSc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRTZWFyY2hEb21haW5Nb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0U2VhcmNoQ29tbWFuZEludm9rZXIsXG5cdFx0U2VhcmNoV2FyZWhvdXNlLFxuXHRcdFNlYXJjaEV2ZW50UmVwb3NpdG9yeSxcblxuXHRcdFNlYXJjaFBocmFzZVJlcG9zaXRvcnksXG5cdFx0U2VhcmNoSGlnaGxpZ2h0QXJjaGl2ZSxcblx0XHRTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUsXG5cdFx0U2VhcmNoaW5nUmVwb3NpdG9yeVxuXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaEFwaU1vZHVsZSBleHRlbmRzIEFwaU1vZHVsZSB7XG5cblxufVxuIl19