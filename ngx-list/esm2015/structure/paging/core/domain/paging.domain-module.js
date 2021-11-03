import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainModule, HermesModule } from '@generic-ui/hermes';
import { PagingManagerFactory } from './paging.manager-factory';
import { PagingDispatcher } from './paging.dispatcher';
import { SetPagingCommandHandler } from './set/set-paging.command-handler';
import { NextPageCommandHandler } from './next-page/next-page.command-handler';
import { PrevPageCommandHandler } from './prev-page/prev-page.command-handler';
import { ChangePagesizeCommandHandler } from './change-pagesize/change-pagesize.command-handler';
import { structureKey } from '../../../core/api/structre.key';
export class PagingDomainModule extends DomainModule {
    constructor() {
        super();
    }
    static commandHandlers() {
        return [
            HermesModule.registerCommandHandler(SetPagingCommandHandler, structureKey),
            HermesModule.registerCommandHandler(NextPageCommandHandler, structureKey),
            HermesModule.registerCommandHandler(PrevPageCommandHandler, structureKey),
            HermesModule.registerCommandHandler(ChangePagesizeCommandHandler, structureKey)
        ];
    }
}
PagingDomainModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                providers: [
                    PagingDispatcher,
                    PagingManagerFactory
                ],
                declarations: [],
                exports: []
            },] }
];
PagingDomainModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmRvbWFpbi1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9wYWdpbmcvY29yZS9kb21haW4vcGFnaW5nLmRvbWFpbi1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFjOUQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFlBQVk7SUFFbkQ7UUFDQyxLQUFLLEVBQUUsQ0FBQztJQUNULENBQUM7SUFFRCxNQUFNLENBQUMsZUFBZTtRQUNyQixPQUFPO1lBQ04sWUFBWSxDQUFDLHNCQUFzQixDQUFDLHVCQUF1QixFQUFFLFlBQVksQ0FBQztZQUMxRSxZQUFZLENBQUMsc0JBQXNCLENBQUMsc0JBQXNCLEVBQUUsWUFBWSxDQUFDO1lBQ3pFLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxzQkFBc0IsRUFBRSxZQUFZLENBQUM7WUFDekUsWUFBWSxDQUFDLHNCQUFzQixDQUFDLDRCQUE0QixFQUFFLFlBQVksQ0FBQztTQUMvRSxDQUFDO0lBQ0gsQ0FBQzs7O1lBeEJELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtpQkFDWjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1YsZ0JBQWdCO29CQUNoQixvQkFBb0I7aUJBQ3BCO2dCQUNELFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsRUFBRTthQUNYIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IERvbWFpbk1vZHVsZSwgSGVybWVzTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgUGFnaW5nTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuL3BhZ2luZy5tYW5hZ2VyLWZhY3RvcnknO1xuaW1wb3J0IHsgUGFnaW5nRGlzcGF0Y2hlciB9IGZyb20gJy4vcGFnaW5nLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU2V0UGFnaW5nQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL3NldC9zZXQtcGFnaW5nLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBOZXh0UGFnZUNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9uZXh0LXBhZ2UvbmV4dC1wYWdlLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBQcmV2UGFnZUNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9wcmV2LXBhZ2UvcHJldi1wYWdlLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBDaGFuZ2VQYWdlc2l6ZUNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9jaGFuZ2UtcGFnZXNpemUvY2hhbmdlLXBhZ2VzaXplLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVLZXkgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3RyZS5rZXknO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0UGFnaW5nRGlzcGF0Y2hlcixcblx0XHRQYWdpbmdNYW5hZ2VyRmFjdG9yeVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmdEb21haW5Nb2R1bGUgZXh0ZW5kcyBEb21haW5Nb2R1bGUge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRzdGF0aWMgY29tbWFuZEhhbmRsZXJzKCkge1xuXHRcdHJldHVybiBbXG5cdFx0XHRIZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRQYWdpbmdDb21tYW5kSGFuZGxlciwgc3RydWN0dXJlS2V5KSxcblx0XHRcdEhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKE5leHRQYWdlQ29tbWFuZEhhbmRsZXIsIHN0cnVjdHVyZUtleSksXG5cdFx0XHRIZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihQcmV2UGFnZUNvbW1hbmRIYW5kbGVyLCBzdHJ1Y3R1cmVLZXkpLFxuXHRcdFx0SGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoQ2hhbmdlUGFnZXNpemVDb21tYW5kSGFuZGxlciwgc3RydWN0dXJlS2V5KVxuXHRcdF07XG5cdH1cblxufVxuIl19