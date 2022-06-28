import { SetConfigSearchingCommandHandler } from './config/set-config-searching.command-handler';
import { StructureSetSearchPhraseCommandHandler } from './phrase/set-phrase/structure.set-search-phrase.command-handler';
import { SearchManagerFactory } from '../domain/search.manager-factory';
import { SearchDispatcher } from './search.dispatcher';
import { SearchPhraseSetEventHandler } from './phrase/search-phrase-set.event-handler';
import { ConfigSearchingSetEventHandler } from './enabled/config-searching-set.event-handler';
import { RemoveSearchPhraseCommandHandler } from './phrase/remove/remove-search-phrase.command-handler';
import { structureKey } from '../../structure-core/api/global/structre.key';
export class SearchDomainModule {
    defineAggregate() {
        return null;
    }
    registerKey() {
        return structureKey;
    }
    registerProviders(container) {
        container.provide(SearchManagerFactory);
        container.provide(SearchDispatcher);
    }
    registerCommandHandlers() {
        return [
            SetConfigSearchingCommandHandler,
            StructureSetSearchPhraseCommandHandler,
            RemoveSearchPhraseCommandHandler
        ];
    }
    registerDomainEventHandler() {
        return [
            SearchPhraseSetEventHandler,
            ConfigSearchingSetEventHandler
        ];
    }
    registerMultiDomainEventHandler() {
        return [];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmRvbWFpbi1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvc3RydWN0dXJlL3NlYXJjaC9jb3JlL3NlYXJjaC5kb21haW4tbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ3pILE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzlGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUc1RSxNQUFNLE9BQU8sa0JBQWtCO0lBRTlCLGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFRCxXQUFXO1FBQ1YsT0FBTyxZQUFZLENBQUM7SUFDckIsQ0FBQztJQUVELGlCQUFpQixDQUFDLFNBQW9CO1FBQ3JDLFNBQVMsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN4QyxTQUFTLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELHVCQUF1QjtRQUN0QixPQUFPO1lBQ04sZ0NBQWdDO1lBQ2hDLHNDQUFzQztZQUN0QyxnQ0FBZ0M7U0FDaEMsQ0FBQztJQUNILENBQUM7SUFFRCwwQkFBMEI7UUFDekIsT0FBTztZQUNOLDJCQUEyQjtZQUMzQiw4QkFBOEI7U0FDOUIsQ0FBQztJQUNILENBQUM7SUFFRCwrQkFBK0I7UUFDOUIsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVEZWZpbml0aW9uLCBBZ2dyZWdhdGVJZCwgQWdncmVnYXRlUm9vdCwgQ29tbWFuZCwgQ29udGFpbmVyLCBEb21haW5FdmVudCwgRG9tYWluUHJvdmlkZXJzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2V0Q29uZmlnU2VhcmNoaW5nQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL2NvbmZpZy9zZXQtY29uZmlnLXNlYXJjaGluZy5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlU2V0U2VhcmNoUGhyYXNlQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL3BocmFzZS9zZXQtcGhyYXNlL3N0cnVjdHVyZS5zZXQtc2VhcmNoLXBocmFzZS5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2VhcmNoTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuLi9kb21haW4vc2VhcmNoLm1hbmFnZXItZmFjdG9yeSc7XG5pbXBvcnQgeyBTZWFyY2hEaXNwYXRjaGVyIH0gZnJvbSAnLi9zZWFyY2guZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTZWFyY2hQaHJhc2VTZXRFdmVudEhhbmRsZXIgfSBmcm9tICcuL3BocmFzZS9zZWFyY2gtcGhyYXNlLXNldC5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IENvbmZpZ1NlYXJjaGluZ1NldEV2ZW50SGFuZGxlciB9IGZyb20gJy4vZW5hYmxlZC9jb25maWctc2VhcmNoaW5nLXNldC5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IFJlbW92ZVNlYXJjaFBocmFzZUNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9waHJhc2UvcmVtb3ZlL3JlbW92ZS1zZWFyY2gtcGhyYXNlLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVLZXkgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUtY29yZS9hcGkvZ2xvYmFsL3N0cnVjdHJlLmtleSc7XG5cblxuZXhwb3J0IGNsYXNzIFNlYXJjaERvbWFpbk1vZHVsZSBpbXBsZW1lbnRzIERvbWFpblByb3ZpZGVycyB7XG5cblx0ZGVmaW5lQWdncmVnYXRlKCk6IEFnZ3JlZ2F0ZURlZmluaXRpb248YW55LCBhbnksIGFueT4gfCBudWxsIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJlZ2lzdGVyS2V5KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHN0cnVjdHVyZUtleTtcblx0fVxuXG5cdHJlZ2lzdGVyUHJvdmlkZXJzKGNvbnRhaW5lcjogQ29udGFpbmVyKTogdm9pZCB7XG5cdFx0Y29udGFpbmVyLnByb3ZpZGUoU2VhcmNoTWFuYWdlckZhY3RvcnkpO1xuXHRcdGNvbnRhaW5lci5wcm92aWRlKFNlYXJjaERpc3BhdGNoZXIpO1xuXHR9XG5cblx0cmVnaXN0ZXJDb21tYW5kSGFuZGxlcnM8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPiwgQyBleHRlbmRzIENvbW1hbmQ8ST4+KCk6IEFycmF5PGFueT4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHRTZXRDb25maWdTZWFyY2hpbmdDb21tYW5kSGFuZGxlcixcblx0XHRcdFN0cnVjdHVyZVNldFNlYXJjaFBocmFzZUNvbW1hbmRIYW5kbGVyLFxuXHRcdFx0UmVtb3ZlU2VhcmNoUGhyYXNlQ29tbWFuZEhhbmRsZXJcblx0XHRdO1xuXHR9XG5cblx0cmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXI8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBFIGV4dGVuZHMgRG9tYWluRXZlbnQ8ST4+KCk6IEFycmF5PGFueT4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHRTZWFyY2hQaHJhc2VTZXRFdmVudEhhbmRsZXIsXG5cdFx0XHRDb25maWdTZWFyY2hpbmdTZXRFdmVudEhhbmRsZXJcblx0XHRdO1xuXHR9XG5cblx0cmVnaXN0ZXJNdWx0aURvbWFpbkV2ZW50SGFuZGxlcjxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEUgZXh0ZW5kcyBEb21haW5FdmVudDxJPj4oKTogQXJyYXk8YW55PiB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cbn1cbiJdfQ==