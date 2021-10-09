/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Reactive } from '../../../../common/reactive';
/**
 * @template I, A, C
 */
export class CommandHandlerInitializer extends Reactive {
    /**
     * @param {?} commandHandlers
     * @param {?} commandBus
     * @return {?}
     */
    register(commandHandlers, commandBus) {
        if (commandHandlers) {
            /** @type {?} */
            const set = new Set();
            /** @type {?} */
            const filteredHandlers = [];
            commandHandlers.filter((/**
             * @param {?} handler
             * @return {?}
             */
            (handler) => {
                if (!set.has(((/** @type {?} */ (handler))).commandHandler)) {
                    set.add(((/** @type {?} */ (handler))).commandHandler);
                    filteredHandlers.push(handler);
                }
            }));
            filteredHandlers.forEach((/**
             * @param {?} handler
             * @return {?}
             */
            (handler) => {
                commandBus
                    .ofCommandHandler(handler)
                    .pipe(this.hermesTakeUntil())
                    .subscribe((/**
                 * @param {?} command
                 * @return {?}
                 */
                (command) => {
                    handler.handleCommand(command);
                }));
            }));
            // console.log('Registered command handlers:' + filteredHandlers.length);
            // console.log('Registered command handlers:', filteredHandlers);
        }
    }
    /**
     * @param {?} aggregateCommandHandlers
     * @param {?} commandBus
     * @return {?}
     */
    registerAggregateCommandHandlers(aggregateCommandHandlers, commandBus) {
        if (aggregateCommandHandlers) {
            /** @type {?} */
            const set = new Set();
            /** @type {?} */
            const filteredHandlers = [];
            aggregateCommandHandlers.filter((/**
             * @param {?} handler
             * @return {?}
             */
            (handler) => {
                if (!set.has(((/** @type {?} */ (handler))).createAggregateCommandHandler)) {
                    set.add(((/** @type {?} */ (handler))).createAggregateCommandHandler);
                    filteredHandlers.push(handler);
                }
            }));
            filteredHandlers.forEach((/**
             * @param {?} handler
             * @return {?}
             */
            (handler) => {
                commandBus
                    .ofCreateAggregateHandler(handler)
                    .pipe(this.hermesTakeUntil())
                    .subscribe((/**
                 * @param {?} command
                 * @return {?}
                 */
                (command) => {
                    handler.handleCommand(command);
                }));
            }));
            // console.log('Registered create command handlers:' + filteredHandlers.length);
            // console.log('Registered create command handlers:', filteredHandlers);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC1oYW5kbGVyLmluaXRpYWxpemVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29yZS9kb21haW4vY29tbWFuZC9pbml0L2NvbW1hbmQtaGFuZGxlci5pbml0aWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7O0FBUXZELE1BQU0sT0FBTyx5QkFBbUcsU0FBUSxRQUFROzs7Ozs7SUFFL0gsUUFBUSxDQUNQLGVBQW1ELEVBQ25ELFVBQXNCO1FBR3RCLElBQUksZUFBZSxFQUFFOztrQkFFZCxHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQUU7O2tCQUNmLGdCQUFnQixHQUF1QyxFQUFFO1lBRS9ELGVBQWUsQ0FBQyxNQUFNOzs7O1lBQUMsQ0FBQyxPQUFvQyxFQUFFLEVBQUU7Z0JBQy9ELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsbUJBQUEsT0FBTyxFQUFPLENBQUMsQ0FBQyxjQUFjLENBQUMsRUFBRTtvQkFDOUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLG1CQUFBLE9BQU8sRUFBTyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQ3pDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDL0I7WUFDRixDQUFDLEVBQUMsQ0FBQztZQUVILGdCQUFnQixDQUFDLE9BQU87Ozs7WUFBQyxDQUFDLE9BQW9DLEVBQUUsRUFBRTtnQkFDakUsVUFBVTtxQkFDUixnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7cUJBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7cUJBQzVCLFNBQVM7Ozs7Z0JBQUMsQ0FBQyxPQUFVLEVBQUUsRUFBRTtvQkFDekIsT0FBTyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEMsQ0FBQyxFQUFDLENBQUM7WUFDTCxDQUFDLEVBQUMsQ0FBQztZQUVILHlFQUF5RTtZQUN6RSxpRUFBaUU7U0FDakU7SUFFRixDQUFDOzs7Ozs7SUFFRCxnQ0FBZ0MsQ0FDL0Isd0JBQTJFLEVBQzNFLFVBQXNCO1FBR3RCLElBQUksd0JBQXdCLEVBQUU7O2tCQUV2QixHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQUU7O2tCQUNmLGdCQUFnQixHQUFzRCxFQUFFO1lBRTlFLHdCQUF3QixDQUFDLE1BQU07Ozs7WUFBQyxDQUFDLE9BQW1ELEVBQUUsRUFBRTtnQkFDdkYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxtQkFBQSxPQUFPLEVBQU8sQ0FBQyxDQUFDLDZCQUE2QixDQUFDLEVBQUU7b0JBQzdELEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxtQkFBQSxPQUFPLEVBQU8sQ0FBQyxDQUFDLDZCQUE2QixDQUFDLENBQUM7b0JBQ3hELGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDL0I7WUFDRixDQUFDLEVBQUMsQ0FBQztZQUVILGdCQUFnQixDQUFDLE9BQU87Ozs7WUFBQyxDQUFDLE9BQW1ELEVBQUUsRUFBRTtnQkFDaEYsVUFBVTtxQkFDUix3QkFBd0IsQ0FBQyxPQUFPLENBQUM7cUJBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7cUJBQzVCLFNBQVM7Ozs7Z0JBQUMsQ0FBQyxPQUFVLEVBQUUsRUFBRTtvQkFDekIsT0FBTyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEMsQ0FBQyxFQUFDLENBQUM7WUFDTCxDQUFDLEVBQUMsQ0FBQztZQUVILGdGQUFnRjtZQUNoRix3RUFBd0U7U0FDeEU7SUFDRixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uLy4uL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vcmVhY3RpdmUnO1xuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXJJbXBsIH0gZnJvbSAnLi4vaGFuZGxlci9jb21tYW5kLWhhbmRsZXItaW1wbCc7XG5pbXBvcnQgeyBDb21tYW5kQnVzIH0gZnJvbSAnLi4vY29tbWFuZC5idXMnO1xuaW1wb3J0IHsgQWdncmVnYXRlUm9vdCB9IGZyb20gJy4uLy4uL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtcm9vdCc7XG5pbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnLi4vY29tbWFuZCc7XG5pbXBvcnQgeyBDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckltcGwgfSBmcm9tICcuLi9jcmVhdGUtYWdncmVnYXRlL2NyZWF0ZS1hZ2dyZWdhdGUuY29tbWFuZC1oYW5kbGVyLWltcGwnO1xuXG5cbmV4cG9ydCBjbGFzcyBDb21tYW5kSGFuZGxlckluaXRpYWxpemVyPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgQSBleHRlbmRzIEFnZ3JlZ2F0ZVJvb3Q8ST4sIEMgZXh0ZW5kcyBDb21tYW5kPEk+PiBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRyZWdpc3Rlcihcblx0XHRjb21tYW5kSGFuZGxlcnM6IEFycmF5PENvbW1hbmRIYW5kbGVySW1wbDxJLCBBLCBDPj4sXG5cdFx0Y29tbWFuZEJ1czogQ29tbWFuZEJ1c1xuXHQpOiB2b2lkIHtcblxuXHRcdGlmIChjb21tYW5kSGFuZGxlcnMpIHtcblxuXHRcdFx0Y29uc3Qgc2V0ID0gbmV3IFNldCgpO1xuXHRcdFx0Y29uc3QgZmlsdGVyZWRIYW5kbGVyczogQXJyYXk8Q29tbWFuZEhhbmRsZXJJbXBsPEksIEEsIEM+PiA9IFtdO1xuXG5cdFx0XHRjb21tYW5kSGFuZGxlcnMuZmlsdGVyKChoYW5kbGVyOiBDb21tYW5kSGFuZGxlckltcGw8SSwgQSwgQz4pID0+IHtcblx0XHRcdFx0aWYgKCFzZXQuaGFzKChoYW5kbGVyIGFzIGFueSkuY29tbWFuZEhhbmRsZXIpKSB7XG5cdFx0XHRcdFx0c2V0LmFkZCgoaGFuZGxlciBhcyBhbnkpLmNvbW1hbmRIYW5kbGVyKTtcblx0XHRcdFx0XHRmaWx0ZXJlZEhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRmaWx0ZXJlZEhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXI6IENvbW1hbmRIYW5kbGVySW1wbDxJLCBBLCBDPikgPT4ge1xuXHRcdFx0XHRjb21tYW5kQnVzXG5cdFx0XHRcdFx0Lm9mQ29tbWFuZEhhbmRsZXIoaGFuZGxlcilcblx0XHRcdFx0XHQucGlwZSh0aGlzLmhlcm1lc1Rha2VVbnRpbCgpKVxuXHRcdFx0XHRcdC5zdWJzY3JpYmUoKGNvbW1hbmQ6IEMpID0+IHtcblx0XHRcdFx0XHRcdGhhbmRsZXIuaGFuZGxlQ29tbWFuZChjb21tYW5kKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBjb25zb2xlLmxvZygnUmVnaXN0ZXJlZCBjb21tYW5kIGhhbmRsZXJzOicgKyBmaWx0ZXJlZEhhbmRsZXJzLmxlbmd0aCk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnUmVnaXN0ZXJlZCBjb21tYW5kIGhhbmRsZXJzOicsIGZpbHRlcmVkSGFuZGxlcnMpO1xuXHRcdH1cblxuXHR9XG5cblx0cmVnaXN0ZXJBZ2dyZWdhdGVDb21tYW5kSGFuZGxlcnMoXG5cdFx0YWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzOiBBcnJheTxDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckltcGw8SSwgQSwgQz4+LFxuXHRcdGNvbW1hbmRCdXM6IENvbW1hbmRCdXNcblx0KSB7XG5cblx0XHRpZiAoYWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzKSB7XG5cblx0XHRcdGNvbnN0IHNldCA9IG5ldyBTZXQoKTtcblx0XHRcdGNvbnN0IGZpbHRlcmVkSGFuZGxlcnM6IEFycmF5PENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbDxJLCBBLCBDPj4gPSBbXTtcblxuXHRcdFx0YWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzLmZpbHRlcigoaGFuZGxlcjogQ3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsPEksIEEsIEM+KSA9PiB7XG5cdFx0XHRcdGlmICghc2V0LmhhcygoaGFuZGxlciBhcyBhbnkpLmNyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyKSkge1xuXHRcdFx0XHRcdHNldC5hZGQoKGhhbmRsZXIgYXMgYW55KS5jcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlcik7XG5cdFx0XHRcdFx0ZmlsdGVyZWRIYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0ZmlsdGVyZWRIYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyOiBDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckltcGw8SSwgQSwgQz4pID0+IHtcblx0XHRcdFx0Y29tbWFuZEJ1c1xuXHRcdFx0XHRcdC5vZkNyZWF0ZUFnZ3JlZ2F0ZUhhbmRsZXIoaGFuZGxlcilcblx0XHRcdFx0XHQucGlwZSh0aGlzLmhlcm1lc1Rha2VVbnRpbCgpKVxuXHRcdFx0XHRcdC5zdWJzY3JpYmUoKGNvbW1hbmQ6IEMpID0+IHtcblx0XHRcdFx0XHRcdGhhbmRsZXIuaGFuZGxlQ29tbWFuZChjb21tYW5kKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBjb25zb2xlLmxvZygnUmVnaXN0ZXJlZCBjcmVhdGUgY29tbWFuZCBoYW5kbGVyczonICsgZmlsdGVyZWRIYW5kbGVycy5sZW5ndGgpO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ1JlZ2lzdGVyZWQgY3JlYXRlIGNvbW1hbmQgaGFuZGxlcnM6JywgZmlsdGVyZWRIYW5kbGVycyk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==