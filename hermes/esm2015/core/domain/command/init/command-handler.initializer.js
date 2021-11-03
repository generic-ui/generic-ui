import { Reactive } from '../../../../common/reactive';
export class CommandHandlerInitializer extends Reactive {
    register(commandHandlers, commandBus) {
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
                commandBus
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
    registerAggregateCommandHandlers(aggregateCommandHandlers, commandBus) {
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
                commandBus
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC1oYW5kbGVyLmluaXRpYWxpemVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1oZXJtZXMvc3JjL2NvcmUvZG9tYWluL2NvbW1hbmQvaW5pdC9jb21tYW5kLWhhbmRsZXIuaW5pdGlhbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBUXZELE1BQU0sT0FBTyx5QkFBbUcsU0FBUSxRQUFRO0lBRS9ILFFBQVEsQ0FDUCxlQUFtRCxFQUNuRCxVQUFzQjtRQUd0QixJQUFJLGVBQWUsRUFBRTtZQUVwQixNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ3RCLE1BQU0sZ0JBQWdCLEdBQXVDLEVBQUUsQ0FBQztZQUVoRSxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBb0MsRUFBRSxFQUFFO2dCQUMvRCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBRSxPQUFlLENBQUMsY0FBYyxDQUFDLEVBQUU7b0JBQzlDLEdBQUcsQ0FBQyxHQUFHLENBQUUsT0FBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUN6QyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQy9CO1lBQ0YsQ0FBQyxDQUFDLENBQUM7WUFFSCxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFvQyxFQUFFLEVBQUU7Z0JBQ2pFLFVBQVU7cUJBQ1IsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO3FCQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO3FCQUM1QixTQUFTLENBQUMsQ0FBQyxPQUFVLEVBQUUsRUFBRTtvQkFDekIsT0FBTyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEMsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUVILHlFQUF5RTtZQUN6RSxpRUFBaUU7U0FDakU7SUFFRixDQUFDO0lBRUQsZ0NBQWdDLENBQy9CLHdCQUEyRSxFQUMzRSxVQUFzQjtRQUd0QixJQUFJLHdCQUF3QixFQUFFO1lBRTdCLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7WUFDdEIsTUFBTSxnQkFBZ0IsR0FBc0QsRUFBRSxDQUFDO1lBRS9FLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQW1ELEVBQUUsRUFBRTtnQkFDdkYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUUsT0FBZSxDQUFDLDZCQUE2QixDQUFDLEVBQUU7b0JBQzdELEdBQUcsQ0FBQyxHQUFHLENBQUUsT0FBZSxDQUFDLDZCQUE2QixDQUFDLENBQUM7b0JBQ3hELGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDL0I7WUFDRixDQUFDLENBQUMsQ0FBQztZQUVILGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQW1ELEVBQUUsRUFBRTtnQkFDaEYsVUFBVTtxQkFDUix3QkFBd0IsQ0FBQyxPQUFPLENBQUM7cUJBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7cUJBQzVCLFNBQVMsQ0FBQyxDQUFDLE9BQVUsRUFBRSxFQUFFO29CQUN6QixPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNoQyxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1lBRUgsZ0ZBQWdGO1lBQ2hGLHdFQUF3RTtTQUN4RTtJQUNGLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9yZWFjdGl2ZSc7XG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlckltcGwgfSBmcm9tICcuLi9oYW5kbGVyL2NvbW1hbmQtaGFuZGxlci1pbXBsJztcbmltcG9ydCB7IENvbW1hbmRCdXMgfSBmcm9tICcuLi9jb21tYW5kLmJ1cyc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVSb290IH0gZnJvbSAnLi4vLi4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1yb290JztcbmltcG9ydCB7IENvbW1hbmQgfSBmcm9tICcuLi9jb21tYW5kJztcbmltcG9ydCB7IENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbCB9IGZyb20gJy4uL2NyZWF0ZS1hZ2dyZWdhdGUvY3JlYXRlLWFnZ3JlZ2F0ZS5jb21tYW5kLWhhbmRsZXItaW1wbCc7XG5cblxuZXhwb3J0IGNsYXNzIENvbW1hbmRIYW5kbGVySW5pdGlhbGl6ZXI8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPiwgQyBleHRlbmRzIENvbW1hbmQ8ST4+IGV4dGVuZHMgUmVhY3RpdmUge1xuXG5cdHJlZ2lzdGVyKFxuXHRcdGNvbW1hbmRIYW5kbGVyczogQXJyYXk8Q29tbWFuZEhhbmRsZXJJbXBsPEksIEEsIEM+Pixcblx0XHRjb21tYW5kQnVzOiBDb21tYW5kQnVzXG5cdCk6IHZvaWQge1xuXG5cdFx0aWYgKGNvbW1hbmRIYW5kbGVycykge1xuXG5cdFx0XHRjb25zdCBzZXQgPSBuZXcgU2V0KCk7XG5cdFx0XHRjb25zdCBmaWx0ZXJlZEhhbmRsZXJzOiBBcnJheTxDb21tYW5kSGFuZGxlckltcGw8SSwgQSwgQz4+ID0gW107XG5cblx0XHRcdGNvbW1hbmRIYW5kbGVycy5maWx0ZXIoKGhhbmRsZXI6IENvbW1hbmRIYW5kbGVySW1wbDxJLCBBLCBDPikgPT4ge1xuXHRcdFx0XHRpZiAoIXNldC5oYXMoKGhhbmRsZXIgYXMgYW55KS5jb21tYW5kSGFuZGxlcikpIHtcblx0XHRcdFx0XHRzZXQuYWRkKChoYW5kbGVyIGFzIGFueSkuY29tbWFuZEhhbmRsZXIpO1xuXHRcdFx0XHRcdGZpbHRlcmVkSGFuZGxlcnMucHVzaChoYW5kbGVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdGZpbHRlcmVkSGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcjogQ29tbWFuZEhhbmRsZXJJbXBsPEksIEEsIEM+KSA9PiB7XG5cdFx0XHRcdGNvbW1hbmRCdXNcblx0XHRcdFx0XHQub2ZDb21tYW5kSGFuZGxlcihoYW5kbGVyKVxuXHRcdFx0XHRcdC5waXBlKHRoaXMuaGVybWVzVGFrZVVudGlsKCkpXG5cdFx0XHRcdFx0LnN1YnNjcmliZSgoY29tbWFuZDogQykgPT4ge1xuXHRcdFx0XHRcdFx0aGFuZGxlci5oYW5kbGVDb21tYW5kKGNvbW1hbmQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIGNvbnNvbGUubG9nKCdSZWdpc3RlcmVkIGNvbW1hbmQgaGFuZGxlcnM6JyArIGZpbHRlcmVkSGFuZGxlcnMubGVuZ3RoKTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdSZWdpc3RlcmVkIGNvbW1hbmQgaGFuZGxlcnM6JywgZmlsdGVyZWRIYW5kbGVycyk7XG5cdFx0fVxuXG5cdH1cblxuXHRyZWdpc3RlckFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVycyhcblx0XHRhZ2dyZWdhdGVDb21tYW5kSGFuZGxlcnM6IEFycmF5PENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbDxJLCBBLCBDPj4sXG5cdFx0Y29tbWFuZEJ1czogQ29tbWFuZEJ1c1xuXHQpIHtcblxuXHRcdGlmIChhZ2dyZWdhdGVDb21tYW5kSGFuZGxlcnMpIHtcblxuXHRcdFx0Y29uc3Qgc2V0ID0gbmV3IFNldCgpO1xuXHRcdFx0Y29uc3QgZmlsdGVyZWRIYW5kbGVyczogQXJyYXk8Q3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsPEksIEEsIEM+PiA9IFtdO1xuXG5cdFx0XHRhZ2dyZWdhdGVDb21tYW5kSGFuZGxlcnMuZmlsdGVyKChoYW5kbGVyOiBDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckltcGw8SSwgQSwgQz4pID0+IHtcblx0XHRcdFx0aWYgKCFzZXQuaGFzKChoYW5kbGVyIGFzIGFueSkuY3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXIpKSB7XG5cdFx0XHRcdFx0c2V0LmFkZCgoaGFuZGxlciBhcyBhbnkpLmNyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyKTtcblx0XHRcdFx0XHRmaWx0ZXJlZEhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRmaWx0ZXJlZEhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXI6IENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbDxJLCBBLCBDPikgPT4ge1xuXHRcdFx0XHRjb21tYW5kQnVzXG5cdFx0XHRcdFx0Lm9mQ3JlYXRlQWdncmVnYXRlSGFuZGxlcihoYW5kbGVyKVxuXHRcdFx0XHRcdC5waXBlKHRoaXMuaGVybWVzVGFrZVVudGlsKCkpXG5cdFx0XHRcdFx0LnN1YnNjcmliZSgoY29tbWFuZDogQykgPT4ge1xuXHRcdFx0XHRcdFx0aGFuZGxlci5oYW5kbGVDb21tYW5kKGNvbW1hbmQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIGNvbnNvbGUubG9nKCdSZWdpc3RlcmVkIGNyZWF0ZSBjb21tYW5kIGhhbmRsZXJzOicgKyBmaWx0ZXJlZEhhbmRsZXJzLmxlbmd0aCk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnUmVnaXN0ZXJlZCBjcmVhdGUgY29tbWFuZCBoYW5kbGVyczonLCBmaWx0ZXJlZEhhbmRsZXJzKTtcblx0XHR9XG5cdH1cblxufVxuIl19