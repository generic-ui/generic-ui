import { Reactive } from '../../../../common/reactive/reactive';
import { CommandBus } from '../command.bus';
import { CoreContainer } from '../../../api/core.container';
export class CommandHandlerInitializer extends Reactive {
    constructor() {
        super();
        this.commandBus = CoreContainer.resolve(CommandBus);
    }
    register(commandHandlers) {
        if (commandHandlers) {
            const set = new Set();
            const filteredHandlers = [];
            commandHandlers.filter((handler) => {
                if (!set.has(handler.commandHandler)) {
                    set.add(handler.commandHandler);
                    filteredHandlers.push(handler);
                }
            });
            filteredHandlers.forEach((handler) => {
                this.commandBus
                    .ofCommandHandler(handler)
                    .pipe(this.hermesTakeUntil())
                    .subscribe((command) => {
                    handler.handleCommand(command);
                });
            });
            // console.log('Registered command handlers:' + filteredHandlers.length);
            // console.log('Registered command handlers:', filteredHandlers);
        }
    }
    registerAggregateCommandHandlers(aggregateCommandHandlers) {
        if (aggregateCommandHandlers) {
            const set = new Set();
            const filteredHandlers = [];
            aggregateCommandHandlers.filter((handler) => {
                if (!set.has(handler.createAggregateCommandHandler)) {
                    set.add(handler.createAggregateCommandHandler);
                    filteredHandlers.push(handler);
                }
            });
            filteredHandlers.forEach((handler) => {
                this.commandBus
                    .ofCreateAggregateHandler(handler)
                    .pipe(this.hermesTakeUntil())
                    .subscribe((command) => {
                    handler.handleCommand(command);
                });
            });
            // console.log('Registered create command handlers:' + filteredHandlers.length);
            // console.log('Registered create command handlers:', filteredHandlers);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC1oYW5kbGVyLmluaXRpYWxpemVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1oZXJtZXMvc3JjL2NvcmUvZG9tYWluL2NvbW1hbmQvaW5pdC9jb21tYW5kLWhhbmRsZXIuaW5pdGlhbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUk1QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFHNUQsTUFBTSxPQUFPLHlCQUFtRyxTQUFRLFFBQVE7SUFJL0g7UUFDQyxLQUFLLEVBQUUsQ0FBQztRQUhRLGVBQVUsR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFhLFVBQVUsQ0FBQyxDQUFDO0lBSTVFLENBQUM7SUFFRCxRQUFRLENBQ1AsZUFBbUQ7UUFHbkQsSUFBSSxlQUFlLEVBQUU7WUFFcEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUN0QixNQUFNLGdCQUFnQixHQUF1QyxFQUFFLENBQUM7WUFFaEUsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQW9DLEVBQUUsRUFBRTtnQkFDL0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUUsT0FBZSxDQUFDLGNBQWMsQ0FBQyxFQUFFO29CQUM5QyxHQUFHLENBQUMsR0FBRyxDQUFFLE9BQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDekMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUMvQjtZQUNGLENBQUMsQ0FBQyxDQUFDO1lBRUgsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBb0MsRUFBRSxFQUFFO2dCQUNqRSxJQUFJLENBQUMsVUFBVTtxQkFDYixnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7cUJBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7cUJBQzVCLFNBQVMsQ0FBQyxDQUFDLE9BQVUsRUFBRSxFQUFFO29CQUN6QixPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNoQyxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1lBRUgseUVBQXlFO1lBQ3pFLGlFQUFpRTtTQUNqRTtJQUVGLENBQUM7SUFFRCxnQ0FBZ0MsQ0FDL0Isd0JBQTJFO1FBRzNFLElBQUksd0JBQXdCLEVBQUU7WUFFN0IsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUN0QixNQUFNLGdCQUFnQixHQUFzRCxFQUFFLENBQUM7WUFFL0Usd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBbUQsRUFBRSxFQUFFO2dCQUN2RixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBRSxPQUFlLENBQUMsNkJBQTZCLENBQUMsRUFBRTtvQkFDN0QsR0FBRyxDQUFDLEdBQUcsQ0FBRSxPQUFlLENBQUMsNkJBQTZCLENBQUMsQ0FBQztvQkFDeEQsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUMvQjtZQUNGLENBQUMsQ0FBQyxDQUFDO1lBRUgsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBbUQsRUFBRSxFQUFFO2dCQUNoRixJQUFJLENBQUMsVUFBVTtxQkFDYix3QkFBd0IsQ0FBQyxPQUFPLENBQUM7cUJBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7cUJBQzVCLFNBQVMsQ0FBQyxDQUFDLE9BQVUsRUFBRSxFQUFFO29CQUN6QixPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNoQyxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1lBRUgsZ0ZBQWdGO1lBQ2hGLHdFQUF3RTtTQUN4RTtJQUNGLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vLi4vYXBpL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vcmVhY3RpdmUvcmVhY3RpdmUnO1xuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXJJbXBsIH0gZnJvbSAnLi4vaGFuZGxlci9jb21tYW5kLWhhbmRsZXItaW1wbCc7XG5pbXBvcnQgeyBDb21tYW5kQnVzIH0gZnJvbSAnLi4vY29tbWFuZC5idXMnO1xuaW1wb3J0IHsgQWdncmVnYXRlUm9vdCB9IGZyb20gJy4uLy4uLy4uL2FwaS90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLXJvb3QnO1xuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJy4uLy4uLy4uL2FwaS9jb21tYW5kL2NvbW1hbmQnO1xuaW1wb3J0IHsgQ3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsIH0gZnJvbSAnLi4vY3JlYXRlLWFnZ3JlZ2F0ZS9jcmVhdGUtYWdncmVnYXRlLmNvbW1hbmQtaGFuZGxlci1pbXBsJztcbmltcG9ydCB7IENvcmVDb250YWluZXIgfSBmcm9tICcuLi8uLi8uLi9hcGkvY29yZS5jb250YWluZXInO1xuXG5cbmV4cG9ydCBjbGFzcyBDb21tYW5kSGFuZGxlckluaXRpYWxpemVyPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgQSBleHRlbmRzIEFnZ3JlZ2F0ZVJvb3Q8ST4sIEMgZXh0ZW5kcyBDb21tYW5kPEk+PiBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbW1hbmRCdXMgPSBDb3JlQ29udGFpbmVyLnJlc29sdmU8Q29tbWFuZEJ1cz4oQ29tbWFuZEJ1cyk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHJlZ2lzdGVyKFxuXHRcdGNvbW1hbmRIYW5kbGVyczogQXJyYXk8Q29tbWFuZEhhbmRsZXJJbXBsPEksIEEsIEM+PlxuXHQpOiB2b2lkIHtcblxuXHRcdGlmIChjb21tYW5kSGFuZGxlcnMpIHtcblxuXHRcdFx0Y29uc3Qgc2V0ID0gbmV3IFNldCgpO1xuXHRcdFx0Y29uc3QgZmlsdGVyZWRIYW5kbGVyczogQXJyYXk8Q29tbWFuZEhhbmRsZXJJbXBsPEksIEEsIEM+PiA9IFtdO1xuXG5cdFx0XHRjb21tYW5kSGFuZGxlcnMuZmlsdGVyKChoYW5kbGVyOiBDb21tYW5kSGFuZGxlckltcGw8SSwgQSwgQz4pID0+IHtcblx0XHRcdFx0aWYgKCFzZXQuaGFzKChoYW5kbGVyIGFzIGFueSkuY29tbWFuZEhhbmRsZXIpKSB7XG5cdFx0XHRcdFx0c2V0LmFkZCgoaGFuZGxlciBhcyBhbnkpLmNvbW1hbmRIYW5kbGVyKTtcblx0XHRcdFx0XHRmaWx0ZXJlZEhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRmaWx0ZXJlZEhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXI6IENvbW1hbmRIYW5kbGVySW1wbDxJLCBBLCBDPikgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbW1hbmRCdXNcblx0XHRcdFx0XHQub2ZDb21tYW5kSGFuZGxlcihoYW5kbGVyKVxuXHRcdFx0XHRcdC5waXBlKHRoaXMuaGVybWVzVGFrZVVudGlsKCkpXG5cdFx0XHRcdFx0LnN1YnNjcmliZSgoY29tbWFuZDogQykgPT4ge1xuXHRcdFx0XHRcdFx0aGFuZGxlci5oYW5kbGVDb21tYW5kKGNvbW1hbmQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIGNvbnNvbGUubG9nKCdSZWdpc3RlcmVkIGNvbW1hbmQgaGFuZGxlcnM6JyArIGZpbHRlcmVkSGFuZGxlcnMubGVuZ3RoKTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdSZWdpc3RlcmVkIGNvbW1hbmQgaGFuZGxlcnM6JywgZmlsdGVyZWRIYW5kbGVycyk7XG5cdFx0fVxuXG5cdH1cblxuXHRyZWdpc3RlckFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVycyhcblx0XHRhZ2dyZWdhdGVDb21tYW5kSGFuZGxlcnM6IEFycmF5PENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbDxJLCBBLCBDPj5cblx0KSB7XG5cblx0XHRpZiAoYWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzKSB7XG5cblx0XHRcdGNvbnN0IHNldCA9IG5ldyBTZXQoKTtcblx0XHRcdGNvbnN0IGZpbHRlcmVkSGFuZGxlcnM6IEFycmF5PENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbDxJLCBBLCBDPj4gPSBbXTtcblxuXHRcdFx0YWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzLmZpbHRlcigoaGFuZGxlcjogQ3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsPEksIEEsIEM+KSA9PiB7XG5cdFx0XHRcdGlmICghc2V0LmhhcygoaGFuZGxlciBhcyBhbnkpLmNyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyKSkge1xuXHRcdFx0XHRcdHNldC5hZGQoKGhhbmRsZXIgYXMgYW55KS5jcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlcik7XG5cdFx0XHRcdFx0ZmlsdGVyZWRIYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0ZmlsdGVyZWRIYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyOiBDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckltcGw8SSwgQSwgQz4pID0+IHtcblx0XHRcdFx0dGhpcy5jb21tYW5kQnVzXG5cdFx0XHRcdFx0Lm9mQ3JlYXRlQWdncmVnYXRlSGFuZGxlcihoYW5kbGVyKVxuXHRcdFx0XHRcdC5waXBlKHRoaXMuaGVybWVzVGFrZVVudGlsKCkpXG5cdFx0XHRcdFx0LnN1YnNjcmliZSgoY29tbWFuZDogQykgPT4ge1xuXHRcdFx0XHRcdFx0aGFuZGxlci5oYW5kbGVDb21tYW5kKGNvbW1hbmQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIGNvbnNvbGUubG9nKCdSZWdpc3RlcmVkIGNyZWF0ZSBjb21tYW5kIGhhbmRsZXJzOicgKyBmaWx0ZXJlZEhhbmRsZXJzLmxlbmd0aCk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnUmVnaXN0ZXJlZCBjcmVhdGUgY29tbWFuZCBoYW5kbGVyczonLCBmaWx0ZXJlZEhhbmRsZXJzKTtcblx0XHR9XG5cdH1cblxufVxuIl19