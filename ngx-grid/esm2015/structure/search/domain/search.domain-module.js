/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainModule, HermesModule } from '@generic-ui/hermes';
import { SetConfigSearchingCommandHandler } from './config/set-config-searching.command-handler';
import { StructureSetSearchPhraseCommandHandler } from './set-phrase/structure.set-search-phrase.command-handler';
import { SearchManagerFactory } from './search.manager-factory';
import { SearchDispatcher } from './search.dispatcher';
import { SearchPhraseSetEventHandler } from '../domain-api/phrase/search-phrase-set.event-handler';
import { ConfigSearchingSetEventHandler } from '../domain-api/enabled/config-searching-set.event-handler';
export class SearchDomainModule extends DomainModule {
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    static commandHandlers() {
        return [
            ...HermesModule.registerCommandHandler(SetConfigSearchingCommandHandler, 'StructureAggregate'),
            ...HermesModule.registerCommandHandler(StructureSetSearchPhraseCommandHandler, 'StructureAggregate'),
        ];
    }
    /**
     * @return {?}
     */
    static domainEventHandlers() {
        return [
            ...HermesModule.registerDomainEventHandler(SearchPhraseSetEventHandler),
            ...HermesModule.registerDomainEventHandler(ConfigSearchingSetEventHandler),
        ];
    }
}
SearchDomainModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                providers: [
                    SearchManagerFactory,
                    SearchDispatcher,
                ],
                declarations: [],
                exports: []
            },] }
];
/** @nocollapse */
SearchDomainModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmRvbWFpbi1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zZWFyY2gvZG9tYWluL3NlYXJjaC5kb21haW4tbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ2xILE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ25HLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBYzFHLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxZQUFZO0lBRW5EO1FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDVCxDQUFDOzs7O0lBRUQsTUFBTSxDQUFDLGVBQWU7UUFDckIsT0FBTztZQUNOLEdBQUcsWUFBWSxDQUFDLHNCQUFzQixDQUFDLGdDQUFnQyxFQUFFLG9CQUFvQixDQUFDO1lBQzlGLEdBQUcsWUFBWSxDQUFDLHNCQUFzQixDQUFDLHNDQUFzQyxFQUFFLG9CQUFvQixDQUFDO1NBQ3BHLENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsTUFBTSxDQUFDLG1CQUFtQjtRQUN6QixPQUFPO1lBQ04sR0FBRyxZQUFZLENBQUMsMEJBQTBCLENBQUMsMkJBQTJCLENBQUM7WUFDdkUsR0FBRyxZQUFZLENBQUMsMEJBQTBCLENBQUMsOEJBQThCLENBQUM7U0FDMUUsQ0FBQztJQUNILENBQUM7OztZQTdCRCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7aUJBQ1o7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLG9CQUFvQjtvQkFDcEIsZ0JBQWdCO2lCQUNoQjtnQkFDRCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLEVBQUU7YUFDWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBEb21haW5Nb2R1bGUsIEhlcm1lc01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNldENvbmZpZ1NlYXJjaGluZ0NvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9jb25maWcvc2V0LWNvbmZpZy1zZWFyY2hpbmcuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVNldFNlYXJjaFBocmFzZUNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9zZXQtcGhyYXNlL3N0cnVjdHVyZS5zZXQtc2VhcmNoLXBocmFzZS5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2VhcmNoTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuL3NlYXJjaC5tYW5hZ2VyLWZhY3RvcnknO1xuaW1wb3J0IHsgU2VhcmNoRGlzcGF0Y2hlciB9IGZyb20gJy4vc2VhcmNoLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU2VhcmNoUGhyYXNlU2V0RXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluLWFwaS9waHJhc2Uvc2VhcmNoLXBocmFzZS1zZXQuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBDb25maWdTZWFyY2hpbmdTZXRFdmVudEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4tYXBpL2VuYWJsZWQvY29uZmlnLXNlYXJjaGluZy1zZXQuZXZlbnQtaGFuZGxlcic7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZVxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRTZWFyY2hNYW5hZ2VyRmFjdG9yeSxcblx0XHRTZWFyY2hEaXNwYXRjaGVyLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hEb21haW5Nb2R1bGUgZXh0ZW5kcyBEb21haW5Nb2R1bGUge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRzdGF0aWMgY29tbWFuZEhhbmRsZXJzKCkge1xuXHRcdHJldHVybiBbXG5cdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRDb25maWdTZWFyY2hpbmdDb21tYW5kSGFuZGxlciwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpLFxuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU3RydWN0dXJlU2V0U2VhcmNoUGhyYXNlQ29tbWFuZEhhbmRsZXIsICdTdHJ1Y3R1cmVBZ2dyZWdhdGUnKSxcblx0XHRdO1xuXHR9XG5cblx0c3RhdGljIGRvbWFpbkV2ZW50SGFuZGxlcnMoKSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckRvbWFpbkV2ZW50SGFuZGxlcihTZWFyY2hQaHJhc2VTZXRFdmVudEhhbmRsZXIpLFxuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyRG9tYWluRXZlbnRIYW5kbGVyKENvbmZpZ1NlYXJjaGluZ1NldEV2ZW50SGFuZGxlciksXG5cdFx0XTtcblx0fVxuXG59XG4iXX0=