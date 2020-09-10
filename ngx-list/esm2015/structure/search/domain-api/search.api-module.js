/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class SearchApiModule extends ApiModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zZWFyY2gvZG9tYWluLWFwaS9zZWFyY2guYXBpLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNwRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQXNCckUsTUFBTSxPQUFPLGVBQWdCLFNBQVEsU0FBUzs7O1lBbkI3QyxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osa0JBQWtCO2lCQUNsQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Ysb0JBQW9CO29CQUNwQixlQUFlO29CQUNmLHFCQUFxQjtvQkFFckIsc0JBQXNCO29CQUN0QixzQkFBc0I7b0JBQ3RCLHdCQUF3QjtvQkFDeEIsbUJBQW1CO2lCQUVuQjtnQkFDRCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLEVBQUU7YUFDWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBBcGlNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTZWFyY2hEb21haW5Nb2R1bGUgfSBmcm9tICcuLi9kb21haW4vc2VhcmNoLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgU2VhcmNoQ29tbWFuZEludm9rZXIgfSBmcm9tICcuL3NlYXJjaC5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU2VhcmNoV2FyZWhvdXNlIH0gZnJvbSAnLi9zZWFyY2gud2FyZWhvdXNlJztcbmltcG9ydCB7IFNlYXJjaEV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4vc2VhcmNoLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2VhcmNoUGhyYXNlUmVwb3NpdG9yeSB9IGZyb20gJy4vcGhyYXNlL3NlYXJjaC1waHJhc2UucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTZWFyY2hIaWdobGlnaHRBcmNoaXZlIH0gZnJvbSAnLi9oaWdobGlnaHQvc2VhcmNoLWhpZ2hsaWdodC5hcmNoaXZlJztcbmltcG9ydCB7IFNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZSB9IGZyb20gJy4vcGxhY2Vob2xkZXIvc2VhcmNoLXBsYWNlaG9sZGVyLmFyY2hpdmUnO1xuaW1wb3J0IHsgU2VhcmNoaW5nUmVwb3NpdG9yeSB9IGZyb20gJy4vZW5hYmxlZC9zZWFyY2hpbmcucmVwb3NpdG9yeSc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRTZWFyY2hEb21haW5Nb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0U2VhcmNoQ29tbWFuZEludm9rZXIsXG5cdFx0U2VhcmNoV2FyZWhvdXNlLFxuXHRcdFNlYXJjaEV2ZW50UmVwb3NpdG9yeSxcblxuXHRcdFNlYXJjaFBocmFzZVJlcG9zaXRvcnksXG5cdFx0U2VhcmNoSGlnaGxpZ2h0QXJjaGl2ZSxcblx0XHRTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUsXG5cdFx0U2VhcmNoaW5nUmVwb3NpdG9yeVxuXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaEFwaU1vZHVsZSBleHRlbmRzIEFwaU1vZHVsZSB7XG5cblxufVxuIl19