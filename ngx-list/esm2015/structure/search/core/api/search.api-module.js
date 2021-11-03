import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@generic-ui/hermes';
import { SearchDomainModule } from '../domain/search.domain-module';
import { SearchCommandInvoker } from './search.command-invoker';
import { SearchWarehouse } from './search.warehouse';
import { SearchEventRepository } from './search.event-repository';
import { SearchPhraseArchive } from '../domain/phrase/search-phrase.archive';
import { SearchHighlightArchive } from '../domain/highlight/search-highlight.archive';
import { SearchPlaceholderArchive } from '../domain/placeholder/search-placeholder.archive';
import { SearchingEnabledArchive } from '../domain/enabled/searching-enabled.archive';
import { SearchDomainWarehouse } from '../domain-read/search.domain-warehouse';
import { SearchDomainEventRepository } from '../domain-read/search.domain-event-repository';
import { SearchDomainCommandInvoker } from '../domain/search.domain-command-invoker';
export class SearchApiModule extends ApiModule {
    constructor() {
        super();
    }
}
SearchApiModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    SearchDomainModule
                ],
                providers: [
                    {
                        provide: SearchCommandInvoker,
                        useClass: SearchDomainCommandInvoker
                    },
                    {
                        provide: SearchWarehouse,
                        useClass: SearchDomainWarehouse
                    },
                    {
                        provide: SearchEventRepository,
                        useClass: SearchDomainEventRepository
                    },
                    SearchPhraseArchive,
                    SearchHighlightArchive,
                    SearchPlaceholderArchive,
                    SearchingEnabledArchive
                ],
                declarations: [],
                exports: []
            },] }
];
SearchApiModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9zZWFyY2gvY29yZS9hcGkvc2VhcmNoLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUM1RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUM1RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQStCckYsTUFBTSxPQUFPLGVBQWdCLFNBQVEsU0FBUztJQUU3QztRQUNDLEtBQUssRUFBRSxDQUFDO0lBQ1QsQ0FBQzs7O1lBaENELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixrQkFBa0I7aUJBQ2xCO2dCQUNELFNBQVMsRUFBRTtvQkFDVjt3QkFDQyxPQUFPLEVBQUUsb0JBQW9CO3dCQUM3QixRQUFRLEVBQUUsMEJBQTBCO3FCQUNwQztvQkFDRDt3QkFDQyxPQUFPLEVBQUUsZUFBZTt3QkFDeEIsUUFBUSxFQUFFLHFCQUFxQjtxQkFDL0I7b0JBQ0Q7d0JBQ0MsT0FBTyxFQUFFLHFCQUFxQjt3QkFDOUIsUUFBUSxFQUFFLDJCQUEyQjtxQkFDckM7b0JBRUQsbUJBQW1CO29CQUNuQixzQkFBc0I7b0JBQ3RCLHdCQUF3QjtvQkFDeEIsdUJBQXVCO2lCQUV2QjtnQkFDRCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLEVBQUU7YUFDWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBBcGlNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTZWFyY2hEb21haW5Nb2R1bGUgfSBmcm9tICcuLi9kb21haW4vc2VhcmNoLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgU2VhcmNoQ29tbWFuZEludm9rZXIgfSBmcm9tICcuL3NlYXJjaC5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU2VhcmNoV2FyZWhvdXNlIH0gZnJvbSAnLi9zZWFyY2gud2FyZWhvdXNlJztcbmltcG9ydCB7IFNlYXJjaEV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4vc2VhcmNoLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2VhcmNoUGhyYXNlQXJjaGl2ZSB9IGZyb20gJy4uL2RvbWFpbi9waHJhc2Uvc2VhcmNoLXBocmFzZS5hcmNoaXZlJztcbmltcG9ydCB7IFNlYXJjaEhpZ2hsaWdodEFyY2hpdmUgfSBmcm9tICcuLi9kb21haW4vaGlnaGxpZ2h0L3NlYXJjaC1oaWdobGlnaHQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUgfSBmcm9tICcuLi9kb21haW4vcGxhY2Vob2xkZXIvc2VhcmNoLXBsYWNlaG9sZGVyLmFyY2hpdmUnO1xuaW1wb3J0IHsgU2VhcmNoaW5nRW5hYmxlZEFyY2hpdmUgfSBmcm9tICcuLi9kb21haW4vZW5hYmxlZC9zZWFyY2hpbmctZW5hYmxlZC5hcmNoaXZlJztcbmltcG9ydCB7IFNlYXJjaERvbWFpbldhcmVob3VzZSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL3NlYXJjaC5kb21haW4td2FyZWhvdXNlJztcbmltcG9ydCB7IFNlYXJjaERvbWFpbkV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL3NlYXJjaC5kb21haW4tZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTZWFyY2hEb21haW5Db21tYW5kSW52b2tlciB9IGZyb20gJy4uL2RvbWFpbi9zZWFyY2guZG9tYWluLWNvbW1hbmQtaW52b2tlcic7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRTZWFyY2hEb21haW5Nb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogU2VhcmNoQ29tbWFuZEludm9rZXIsXG5cdFx0XHR1c2VDbGFzczogU2VhcmNoRG9tYWluQ29tbWFuZEludm9rZXJcblx0XHR9LFxuXHRcdHtcblx0XHRcdHByb3ZpZGU6IFNlYXJjaFdhcmVob3VzZSxcblx0XHRcdHVzZUNsYXNzOiBTZWFyY2hEb21haW5XYXJlaG91c2Vcblx0XHR9LFxuXHRcdHtcblx0XHRcdHByb3ZpZGU6IFNlYXJjaEV2ZW50UmVwb3NpdG9yeSxcblx0XHRcdHVzZUNsYXNzOiBTZWFyY2hEb21haW5FdmVudFJlcG9zaXRvcnlcblx0XHR9LFxuXG5cdFx0U2VhcmNoUGhyYXNlQXJjaGl2ZSxcblx0XHRTZWFyY2hIaWdobGlnaHRBcmNoaXZlLFxuXHRcdFNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZSxcblx0XHRTZWFyY2hpbmdFbmFibGVkQXJjaGl2ZVxuXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaEFwaU1vZHVsZSBleHRlbmRzIEFwaU1vZHVsZSB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxufVxuIl19