import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainModule, HermesModule } from '@generic-ui/hermes';
import { structureKey } from '../../../core/api/structre.key';
import { StructureSetSummariesEnabledCommandHandler } from './set/structure.set-summaries-enabled.command-handler';
import { StructureSummariesEnabledSetEventHandler } from './enabled/structure.summaries-enabled-set.event-handler';
import { provideSummariesCalculator } from './summaries.providers';
import { BooleanSummariesCalculator } from './calculation/boolean/boolean-summaries.calculator';
import { DateSummariesCalculator } from './calculation/date/date-summaries.calculator';
import { NumberSummariesCalculator } from './calculation/number/number-summaries.calculator';
import { StringSummariesCalculator } from './calculation/string/string-summaries.calculator';
import { UnknownSummariesCalculator } from './calculation/unknown/unknown-summaries.calculator';
import { SummariesManagerFactory } from './summaries.manager.factory';
export class SummariesDomainModule extends DomainModule {
    constructor() {
        super();
    }
    static commandHandlers() {
        return HermesModule.registerCommandHandler(StructureSetSummariesEnabledCommandHandler, structureKey);
    }
    static domainEventHandlers() {
        return HermesModule.registerDomainEventHandler(StructureSummariesEnabledSetEventHandler);
    }
}
SummariesDomainModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                providers: [
                    provideSummariesCalculator(BooleanSummariesCalculator),
                    provideSummariesCalculator(DateSummariesCalculator),
                    provideSummariesCalculator(NumberSummariesCalculator),
                    provideSummariesCalculator(StringSummariesCalculator),
                    provideSummariesCalculator(UnknownSummariesCalculator),
                    SummariesManagerFactory
                ],
                declarations: [],
                exports: []
            },] }
];
SummariesDomainModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLmRvbWFpbi1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9zdW1tYXJpZXMvY29yZS9kb21haW4vc3VtbWFyaWVzLmRvbWFpbi1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVoRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxFQUFFLDBDQUEwQyxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDbkgsT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0seURBQXlELENBQUM7QUFDbkgsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbkUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDaEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdkYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDN0YsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDN0YsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDaEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFtQnRFLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxZQUFZO0lBRXREO1FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDVCxDQUFDO0lBRUQsTUFBTSxDQUFDLGVBQWU7UUFDckIsT0FBTyxZQUFZLENBQUMsc0JBQXNCLENBQUMsMENBQTBDLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDdEcsQ0FBQztJQUVELE1BQU0sQ0FBQyxtQkFBbUI7UUFDekIsT0FBTyxZQUFZLENBQUMsMEJBQTBCLENBQUMsd0NBQXdDLENBQUMsQ0FBQztJQUMxRixDQUFDOzs7WUE1QkQsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO2lCQUNaO2dCQUNELFNBQVMsRUFBRTtvQkFDViwwQkFBMEIsQ0FBQywwQkFBMEIsQ0FBQztvQkFDdEQsMEJBQTBCLENBQUMsdUJBQXVCLENBQUM7b0JBQ25ELDBCQUEwQixDQUFDLHlCQUF5QixDQUFDO29CQUNyRCwwQkFBMEIsQ0FBQyx5QkFBeUIsQ0FBQztvQkFDckQsMEJBQTBCLENBQUMsMEJBQTBCLENBQUM7b0JBRXRELHVCQUF1QjtpQkFDdkI7Z0JBQ0QsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2FBQ1giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRG9tYWluTW9kdWxlLCBIZXJtZXNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBzdHJ1Y3R1cmVLZXkgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3RyZS5rZXknO1xuaW1wb3J0IHsgU3RydWN0dXJlU2V0U3VtbWFyaWVzRW5hYmxlZENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9zZXQvc3RydWN0dXJlLnNldC1zdW1tYXJpZXMtZW5hYmxlZC5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzRW5hYmxlZFNldEV2ZW50SGFuZGxlciB9IGZyb20gJy4vZW5hYmxlZC9zdHJ1Y3R1cmUuc3VtbWFyaWVzLWVuYWJsZWQtc2V0LmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgcHJvdmlkZVN1bW1hcmllc0NhbGN1bGF0b3IgfSBmcm9tICcuL3N1bW1hcmllcy5wcm92aWRlcnMnO1xuaW1wb3J0IHsgQm9vbGVhblN1bW1hcmllc0NhbGN1bGF0b3IgfSBmcm9tICcuL2NhbGN1bGF0aW9uL2Jvb2xlYW4vYm9vbGVhbi1zdW1tYXJpZXMuY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBEYXRlU3VtbWFyaWVzQ2FsY3VsYXRvciB9IGZyb20gJy4vY2FsY3VsYXRpb24vZGF0ZS9kYXRlLXN1bW1hcmllcy5jYWxjdWxhdG9yJztcbmltcG9ydCB7IE51bWJlclN1bW1hcmllc0NhbGN1bGF0b3IgfSBmcm9tICcuL2NhbGN1bGF0aW9uL251bWJlci9udW1iZXItc3VtbWFyaWVzLmNhbGN1bGF0b3InO1xuaW1wb3J0IHsgU3RyaW5nU3VtbWFyaWVzQ2FsY3VsYXRvciB9IGZyb20gJy4vY2FsY3VsYXRpb24vc3RyaW5nL3N0cmluZy1zdW1tYXJpZXMuY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBVbmtub3duU3VtbWFyaWVzQ2FsY3VsYXRvciB9IGZyb20gJy4vY2FsY3VsYXRpb24vdW5rbm93bi91bmtub3duLXN1bW1hcmllcy5jYWxjdWxhdG9yJztcbmltcG9ydCB7IFN1bW1hcmllc01hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi9zdW1tYXJpZXMubWFuYWdlci5mYWN0b3J5JztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdHByb3ZpZGVTdW1tYXJpZXNDYWxjdWxhdG9yKEJvb2xlYW5TdW1tYXJpZXNDYWxjdWxhdG9yKSxcblx0XHRwcm92aWRlU3VtbWFyaWVzQ2FsY3VsYXRvcihEYXRlU3VtbWFyaWVzQ2FsY3VsYXRvciksXG5cdFx0cHJvdmlkZVN1bW1hcmllc0NhbGN1bGF0b3IoTnVtYmVyU3VtbWFyaWVzQ2FsY3VsYXRvciksXG5cdFx0cHJvdmlkZVN1bW1hcmllc0NhbGN1bGF0b3IoU3RyaW5nU3VtbWFyaWVzQ2FsY3VsYXRvciksXG5cdFx0cHJvdmlkZVN1bW1hcmllc0NhbGN1bGF0b3IoVW5rbm93blN1bW1hcmllc0NhbGN1bGF0b3IpLFxuXG5cdFx0U3VtbWFyaWVzTWFuYWdlckZhY3Rvcnlcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgU3VtbWFyaWVzRG9tYWluTW9kdWxlIGV4dGVuZHMgRG9tYWluTW9kdWxlIHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0c3RhdGljIGNvbW1hbmRIYW5kbGVycygpIHtcblx0XHRyZXR1cm4gSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU3RydWN0dXJlU2V0U3VtbWFyaWVzRW5hYmxlZENvbW1hbmRIYW5kbGVyLCBzdHJ1Y3R1cmVLZXkpO1xuXHR9XG5cblx0c3RhdGljIGRvbWFpbkV2ZW50SGFuZGxlcnMoKSB7XG5cdFx0cmV0dXJuIEhlcm1lc01vZHVsZS5yZWdpc3RlckRvbWFpbkV2ZW50SGFuZGxlcihTdHJ1Y3R1cmVTdW1tYXJpZXNFbmFibGVkU2V0RXZlbnRIYW5kbGVyKTtcblx0fVxuXG59XG4iXX0=