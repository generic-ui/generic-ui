import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainModule, HermesModule } from '@generic-ui/hermes';
import { SetConfigSearchingCommandHandler } from './config/set-config-searching.command-handler';
import { StructureSetSearchPhraseCommandHandler } from './phrase/set-phrase/structure.set-search-phrase.command-handler';
import { SearchManagerFactory } from './search.manager-factory';
import { SearchDispatcher } from './search.dispatcher';
import { SearchPhraseSetEventHandler } from './phrase/search-phrase-set.event-handler';
import { ConfigSearchingSetEventHandler } from './enabled/config-searching-set.event-handler';
import { structureKey } from '../../../core/api/structre.key';
import * as i0 from "@angular/core";
export class SearchDomainModule extends DomainModule {
    constructor() {
        super();
    }
    static commandHandlers() {
        return [
            HermesModule.registerCommandHandler(SetConfigSearchingCommandHandler, structureKey),
            HermesModule.registerCommandHandler(StructureSetSearchPhraseCommandHandler, structureKey)
        ];
    }
    static domainEventHandlers() {
        return [
            HermesModule.registerDomainEventHandler(SearchPhraseSetEventHandler),
            HermesModule.registerDomainEventHandler(ConfigSearchingSetEventHandler)
        ];
    }
}
SearchDomainModule.ɵfac = function SearchDomainModule_Factory(t) { return new (t || SearchDomainModule)(); };
SearchDomainModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SearchDomainModule });
SearchDomainModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        SearchManagerFactory,
        SearchDispatcher
    ], imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchDomainModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                providers: [
                    SearchManagerFactory,
                    SearchDispatcher
                ],
                declarations: [],
                exports: []
            }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SearchDomainModule, { imports: [CommonModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmRvbWFpbi1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9zZWFyY2gvY29yZS9kb21haW4vc2VhcmNoLmRvbWFpbi1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVoRSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNqRyxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUN6SCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN2RixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUM5RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O0FBYzlELE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxZQUFZO0lBRW5EO1FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDVCxDQUFDO0lBRUQsTUFBTSxDQUFDLGVBQWU7UUFDckIsT0FBTztZQUNOLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxnQ0FBZ0MsRUFBRSxZQUFZLENBQUM7WUFDbkYsWUFBWSxDQUFDLHNCQUFzQixDQUFDLHNDQUFzQyxFQUFFLFlBQVksQ0FBQztTQUN6RixDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxtQkFBbUI7UUFDekIsT0FBTztZQUNOLFlBQVksQ0FBQywwQkFBMEIsQ0FBQywyQkFBMkIsQ0FBQztZQUNwRSxZQUFZLENBQUMsMEJBQTBCLENBQUMsOEJBQThCLENBQUM7U0FDdkUsQ0FBQztJQUNILENBQUM7O29GQWxCVyxrQkFBa0I7b0VBQWxCLGtCQUFrQjt5RUFQbkI7UUFDVixvQkFBb0I7UUFDcEIsZ0JBQWdCO0tBQ2hCLFlBTlE7WUFDUixZQUFZO1NBQ1o7dUZBUVcsa0JBQWtCO2NBWDlCLFFBQVE7ZUFBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtpQkFDWjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Ysb0JBQW9CO29CQUNwQixnQkFBZ0I7aUJBQ2hCO2dCQUNELFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsRUFBRTthQUNYOzt3RkFDWSxrQkFBa0IsY0FUN0IsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBEb21haW5Nb2R1bGUsIEhlcm1lc01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNldENvbmZpZ1NlYXJjaGluZ0NvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9jb25maWcvc2V0LWNvbmZpZy1zZWFyY2hpbmcuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVNldFNlYXJjaFBocmFzZUNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9waHJhc2Uvc2V0LXBocmFzZS9zdHJ1Y3R1cmUuc2V0LXNlYXJjaC1waHJhc2UuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNlYXJjaE1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi9zZWFyY2gubWFuYWdlci1mYWN0b3J5JztcbmltcG9ydCB7IFNlYXJjaERpc3BhdGNoZXIgfSBmcm9tICcuL3NlYXJjaC5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFNlYXJjaFBocmFzZVNldEV2ZW50SGFuZGxlciB9IGZyb20gJy4vcGhyYXNlL3NlYXJjaC1waHJhc2Utc2V0LmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgQ29uZmlnU2VhcmNoaW5nU2V0RXZlbnRIYW5kbGVyIH0gZnJvbSAnLi9lbmFibGVkL2NvbmZpZy1zZWFyY2hpbmctc2V0LmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgc3RydWN0dXJlS2V5IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0cmUua2V5JztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFNlYXJjaE1hbmFnZXJGYWN0b3J5LFxuXHRcdFNlYXJjaERpc3BhdGNoZXJcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoRG9tYWluTW9kdWxlIGV4dGVuZHMgRG9tYWluTW9kdWxlIHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0c3RhdGljIGNvbW1hbmRIYW5kbGVycygpIHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0SGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0Q29uZmlnU2VhcmNoaW5nQ29tbWFuZEhhbmRsZXIsIHN0cnVjdHVyZUtleSksXG5cdFx0XHRIZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTdHJ1Y3R1cmVTZXRTZWFyY2hQaHJhc2VDb21tYW5kSGFuZGxlciwgc3RydWN0dXJlS2V5KVxuXHRcdF07XG5cdH1cblxuXHRzdGF0aWMgZG9tYWluRXZlbnRIYW5kbGVycygpIHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0SGVybWVzTW9kdWxlLnJlZ2lzdGVyRG9tYWluRXZlbnRIYW5kbGVyKFNlYXJjaFBocmFzZVNldEV2ZW50SGFuZGxlciksXG5cdFx0XHRIZXJtZXNNb2R1bGUucmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXIoQ29uZmlnU2VhcmNoaW5nU2V0RXZlbnRIYW5kbGVyKVxuXHRcdF07XG5cdH1cblxufVxuIl19