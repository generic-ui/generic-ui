/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Reactive } from '../../../../common/reactive';
/**
 * @template I, E
 */
export class DomainEventHandlerInitializer extends Reactive {
    /**
     * @param {?} eventHandlers
     * @param {?} domainEventBus
     * @return {?}
     */
    init(eventHandlers, domainEventBus) {
        if (eventHandlers) {
            /** @type {?} */
            const set = new Set();
            /** @type {?} */
            const filteredHandlers = [];
            eventHandlers.filter((/**
             * @param {?} handler
             * @return {?}
             */
            (handler) => {
                if (!set.has(((/** @type {?} */ (handler))).domainEventHandler)) {
                    set.add(((/** @type {?} */ (handler))).domainEventHandler);
                    filteredHandlers.push(handler);
                }
            }));
            filteredHandlers.forEach((/**
             * @param {?} handler
             * @return {?}
             */
            (handler) => {
                domainEventBus
                    .ofEventHandler(handler)
                    .pipe(this.hermesTakeUntil())
                    .subscribe((/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    handler.handleEvent(event);
                }));
            }));
            // console.log('Registered event handlers:', filteredHandlers.length)
            // console.log('Registered event handlers:', filteredHandlers)
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LWhhbmRsZXIuaW5pdGlhbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb3JlL2RvbWFpbi9ldmVudC9pbml0L2RvbWFpbi1ldmVudC1oYW5kbGVyLmluaXRpYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7QUFHdkQsTUFBTSxPQUFPLDZCQUErRSxTQUFRLFFBQVE7Ozs7OztJQUUzRyxJQUFJLENBQ0gsYUFBa0QsRUFDbEQsY0FBOEI7UUFHOUIsSUFBSSxhQUFhLEVBQUU7O2tCQUVaLEdBQUcsR0FBRyxJQUFJLEdBQUcsRUFBRTs7a0JBQ2YsZ0JBQWdCLEdBQXdDLEVBQUU7WUFFaEUsYUFBYSxDQUFDLE1BQU07Ozs7WUFBQyxDQUFDLE9BQXFDLEVBQUUsRUFBRTtnQkFDOUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxtQkFBQSxPQUFPLEVBQU8sQ0FBQyxDQUFDLGtCQUFrQixDQUFDLEVBQUU7b0JBQ2xELEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxtQkFBQSxPQUFPLEVBQU8sQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUM7b0JBQzdDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDL0I7WUFDRixDQUFDLEVBQUMsQ0FBQztZQUVILGdCQUFnQixDQUFDLE9BQU87Ozs7WUFBQyxDQUFDLE9BQXFDLEVBQUUsRUFBRTtnQkFDbEUsY0FBYztxQkFDWixjQUFjLENBQUMsT0FBTyxDQUFDO3FCQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO3FCQUM1QixTQUFTOzs7O2dCQUFDLENBQUMsS0FBUSxFQUFFLEVBQUU7b0JBQ3ZCLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzVCLENBQUMsRUFBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFDLENBQUM7WUFFSCxxRUFBcUU7WUFDckUsOERBQThEO1NBQzlEO0lBQ0YsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVySW1wbCB9IGZyb20gJy4uL2hhbmRsZXIvZG9tYWluLWV2ZW50LWhhbmRsZXItaW1wbCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uLy4uL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICcuLi9kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRCdXMgfSBmcm9tICcuLi9kb21haW4tZXZlbnQuYnVzJztcbmltcG9ydCB7IFJlYWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3JlYWN0aXZlJztcblxuXG5leHBvcnQgY2xhc3MgRG9tYWluRXZlbnRIYW5kbGVySW5pdGlhbGl6ZXI8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBFIGV4dGVuZHMgRG9tYWluRXZlbnQ8ST4+IGV4dGVuZHMgUmVhY3RpdmUge1xuXG5cdGluaXQoXG5cdFx0ZXZlbnRIYW5kbGVyczogQXJyYXk8RG9tYWluRXZlbnRIYW5kbGVySW1wbDxJLCBFPj4sXG5cdFx0ZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzXG5cdCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50SGFuZGxlcnMpIHtcblxuXHRcdFx0Y29uc3Qgc2V0ID0gbmV3IFNldCgpO1xuXHRcdFx0Y29uc3QgZmlsdGVyZWRIYW5kbGVyczogQXJyYXk8RG9tYWluRXZlbnRIYW5kbGVySW1wbDxJLCBFPj4gPSBbXTtcblxuXHRcdFx0ZXZlbnRIYW5kbGVycy5maWx0ZXIoKGhhbmRsZXI6IERvbWFpbkV2ZW50SGFuZGxlckltcGw8SSwgRT4pID0+IHtcblx0XHRcdFx0aWYgKCFzZXQuaGFzKChoYW5kbGVyIGFzIGFueSkuZG9tYWluRXZlbnRIYW5kbGVyKSkge1xuXHRcdFx0XHRcdHNldC5hZGQoKGhhbmRsZXIgYXMgYW55KS5kb21haW5FdmVudEhhbmRsZXIpO1xuXHRcdFx0XHRcdGZpbHRlcmVkSGFuZGxlcnMucHVzaChoYW5kbGVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdGZpbHRlcmVkSGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcjogRG9tYWluRXZlbnRIYW5kbGVySW1wbDxJLCBFPikgPT4ge1xuXHRcdFx0XHRkb21haW5FdmVudEJ1c1xuXHRcdFx0XHRcdC5vZkV2ZW50SGFuZGxlcihoYW5kbGVyKVxuXHRcdFx0XHRcdC5waXBlKHRoaXMuaGVybWVzVGFrZVVudGlsKCkpXG5cdFx0XHRcdFx0LnN1YnNjcmliZSgoZXZlbnQ6IEUpID0+IHtcblx0XHRcdFx0XHRcdGhhbmRsZXIuaGFuZGxlRXZlbnQoZXZlbnQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIGNvbnNvbGUubG9nKCdSZWdpc3RlcmVkIGV2ZW50IGhhbmRsZXJzOicsIGZpbHRlcmVkSGFuZGxlcnMubGVuZ3RoKVxuXHRcdFx0Ly8gY29uc29sZS5sb2coJ1JlZ2lzdGVyZWQgZXZlbnQgaGFuZGxlcnM6JywgZmlsdGVyZWRIYW5kbGVycylcblx0XHR9XG5cdH1cbn1cbiJdfQ==