/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainModule, HermesModule } from '@generic-ui/hermes';
import { SetConfigSearchingCommandHandler } from './config/set-config-searching.command-handler';
import { StructureSetSearchPhraseCommandHandler } from './set-phrase/structure.set-search-phrase.command-handler';
import { SearchManagerFactory } from './search.manager-factory';
import { SearchDispatcher } from './search.dispatcher';
import { SearchPhraseSetEventHandler } from '../domain-api/phrase/search-phrase-set.event-handler';
import { ConfigSearchingSetEventHandler } from '../domain-api/enabled/config-searching-set.event-handler';
var SearchDomainModule = /** @class */ (function (_super) {
    tslib_1.__extends(SearchDomainModule, _super);
    function SearchDomainModule() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    SearchDomainModule.commandHandlers = /**
     * @return {?}
     */
    function () {
        return tslib_1.__spread(HermesModule.registerCommandHandler(SetConfigSearchingCommandHandler, 'StructureAggregate'), HermesModule.registerCommandHandler(StructureSetSearchPhraseCommandHandler, 'StructureAggregate'));
    };
    /**
     * @return {?}
     */
    SearchDomainModule.domainEventHandlers = /**
     * @return {?}
     */
    function () {
        return tslib_1.__spread(HermesModule.registerDomainEventHandler(SearchPhraseSetEventHandler), HermesModule.registerDomainEventHandler(ConfigSearchingSetEventHandler));
    };
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
    SearchDomainModule.ctorParameters = function () { return []; };
    return SearchDomainModule;
}(DomainModule));
export { SearchDomainModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmRvbWFpbi1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zZWFyY2gvZG9tYWluL3NlYXJjaC5kb21haW4tbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVoRSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNqRyxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNsSCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUNuRyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUcxRztJQVd3Qyw4Q0FBWTtJQUVuRDtlQUNDLGlCQUFPO0lBQ1IsQ0FBQzs7OztJQUVNLGtDQUFlOzs7SUFBdEI7UUFDQyx3QkFDSSxZQUFZLENBQUMsc0JBQXNCLENBQUMsZ0NBQWdDLEVBQUUsb0JBQW9CLENBQUMsRUFDM0YsWUFBWSxDQUFDLHNCQUFzQixDQUFDLHNDQUFzQyxFQUFFLG9CQUFvQixDQUFDLEVBQ25HO0lBQ0gsQ0FBQzs7OztJQUVNLHNDQUFtQjs7O0lBQTFCO1FBQ0Msd0JBQ0ksWUFBWSxDQUFDLDBCQUEwQixDQUFDLDJCQUEyQixDQUFDLEVBQ3BFLFlBQVksQ0FBQywwQkFBMEIsQ0FBQyw4QkFBOEIsQ0FBQyxFQUN6RTtJQUNILENBQUM7O2dCQTdCRCxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7cUJBQ1o7b0JBQ0QsU0FBUyxFQUFFO3dCQUNWLG9CQUFvQjt3QkFDcEIsZ0JBQWdCO3FCQUNoQjtvQkFDRCxZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLEVBQUU7aUJBQ1g7Ozs7SUFxQkQseUJBQUM7Q0FBQSxBQS9CRCxDQVd3QyxZQUFZLEdBb0JuRDtTQXBCWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRG9tYWluTW9kdWxlLCBIZXJtZXNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTZXRDb25maWdTZWFyY2hpbmdDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vY29uZmlnL3NldC1jb25maWctc2VhcmNoaW5nLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZXRTZWFyY2hQaHJhc2VDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vc2V0LXBocmFzZS9zdHJ1Y3R1cmUuc2V0LXNlYXJjaC1waHJhc2UuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNlYXJjaE1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi9zZWFyY2gubWFuYWdlci1mYWN0b3J5JztcbmltcG9ydCB7IFNlYXJjaERpc3BhdGNoZXIgfSBmcm9tICcuL3NlYXJjaC5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFNlYXJjaFBocmFzZVNldEV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi1hcGkvcGhyYXNlL3NlYXJjaC1waHJhc2Utc2V0LmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgQ29uZmlnU2VhcmNoaW5nU2V0RXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluLWFwaS9lbmFibGVkL2NvbmZpZy1zZWFyY2hpbmctc2V0LmV2ZW50LWhhbmRsZXInO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0U2VhcmNoTWFuYWdlckZhY3RvcnksXG5cdFx0U2VhcmNoRGlzcGF0Y2hlcixcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoRG9tYWluTW9kdWxlIGV4dGVuZHMgRG9tYWluTW9kdWxlIHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0c3RhdGljIGNvbW1hbmRIYW5kbGVycygpIHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0Q29uZmlnU2VhcmNoaW5nQ29tbWFuZEhhbmRsZXIsICdTdHJ1Y3R1cmVBZ2dyZWdhdGUnKSxcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFN0cnVjdHVyZVNldFNlYXJjaFBocmFzZUNvbW1hbmRIYW5kbGVyLCAnU3RydWN0dXJlQWdncmVnYXRlJyksXG5cdFx0XTtcblx0fVxuXG5cdHN0YXRpYyBkb21haW5FdmVudEhhbmRsZXJzKCkge1xuXHRcdHJldHVybiBbXG5cdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXIoU2VhcmNoUGhyYXNlU2V0RXZlbnRIYW5kbGVyKSxcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckRvbWFpbkV2ZW50SGFuZGxlcihDb25maWdTZWFyY2hpbmdTZXRFdmVudEhhbmRsZXIpLFxuXHRcdF07XG5cdH1cblxufVxuIl19