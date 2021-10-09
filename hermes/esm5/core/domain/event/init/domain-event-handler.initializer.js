/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Reactive } from '../../../../common/reactive';
/**
 * @template I, E
 */
var /**
 * @template I, E
 */
DomainEventHandlerInitializer = /** @class */ (function (_super) {
    tslib_1.__extends(DomainEventHandlerInitializer, _super);
    function DomainEventHandlerInitializer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} eventHandlers
     * @param {?} domainEventBus
     * @return {?}
     */
    DomainEventHandlerInitializer.prototype.init = /**
     * @param {?} eventHandlers
     * @param {?} domainEventBus
     * @return {?}
     */
    function (eventHandlers, domainEventBus) {
        var _this = this;
        if (eventHandlers) {
            /** @type {?} */
            var set_1 = new Set();
            /** @type {?} */
            var filteredHandlers_1 = [];
            eventHandlers.filter((/**
             * @param {?} handler
             * @return {?}
             */
            function (handler) {
                if (!set_1.has(((/** @type {?} */ (handler))).domainEventHandler)) {
                    set_1.add(((/** @type {?} */ (handler))).domainEventHandler);
                    filteredHandlers_1.push(handler);
                }
            }));
            filteredHandlers_1.forEach((/**
             * @param {?} handler
             * @return {?}
             */
            function (handler) {
                domainEventBus
                    .ofEventHandler(handler)
                    .pipe(_this.hermesTakeUntil())
                    .subscribe((/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    handler.handleEvent(event);
                }));
            }));
            // console.log('Registered event handlers:', filteredHandlers.length)
            // console.log('Registered event handlers:', filteredHandlers)
        }
    };
    return DomainEventHandlerInitializer;
}(Reactive));
/**
 * @template I, E
 */
export { DomainEventHandlerInitializer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LWhhbmRsZXIuaW5pdGlhbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb3JlL2RvbWFpbi9ldmVudC9pbml0L2RvbWFpbi1ldmVudC1oYW5kbGVyLmluaXRpYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7O0FBR3ZEOzs7O0lBQW9HLHlEQUFRO0lBQTVHOztJQWdDQSxDQUFDOzs7Ozs7SUE5QkEsNENBQUk7Ozs7O0lBQUosVUFDQyxhQUFrRCxFQUNsRCxjQUE4QjtRQUYvQixpQkE2QkM7UUF4QkEsSUFBSSxhQUFhLEVBQUU7O2dCQUVaLEtBQUcsR0FBRyxJQUFJLEdBQUcsRUFBRTs7Z0JBQ2Ysa0JBQWdCLEdBQXdDLEVBQUU7WUFFaEUsYUFBYSxDQUFDLE1BQU07Ozs7WUFBQyxVQUFDLE9BQXFDO2dCQUMxRCxJQUFJLENBQUMsS0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLG1CQUFBLE9BQU8sRUFBTyxDQUFDLENBQUMsa0JBQWtCLENBQUMsRUFBRTtvQkFDbEQsS0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLG1CQUFBLE9BQU8sRUFBTyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQztvQkFDN0Msa0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUMvQjtZQUNGLENBQUMsRUFBQyxDQUFDO1lBRUgsa0JBQWdCLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsT0FBcUM7Z0JBQzlELGNBQWM7cUJBQ1osY0FBYyxDQUFDLE9BQU8sQ0FBQztxQkFDdkIsSUFBSSxDQUFDLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztxQkFDNUIsU0FBUzs7OztnQkFBQyxVQUFDLEtBQVE7b0JBQ25CLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzVCLENBQUMsRUFBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFDLENBQUM7WUFFSCxxRUFBcUU7WUFDckUsOERBQThEO1NBQzlEO0lBQ0YsQ0FBQztJQUNGLG9DQUFDO0FBQUQsQ0FBQyxBQWhDRCxDQUFvRyxRQUFRLEdBZ0MzRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlckltcGwgfSBmcm9tICcuLi9oYW5kbGVyL2RvbWFpbi1ldmVudC1oYW5kbGVyLWltcGwnO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi8uLi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi4vZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnLi4vZG9tYWluLWV2ZW50LmJ1cyc7XG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9yZWFjdGl2ZSc7XG5cblxuZXhwb3J0IGNsYXNzIERvbWFpbkV2ZW50SGFuZGxlckluaXRpYWxpemVyPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgRSBleHRlbmRzIERvbWFpbkV2ZW50PEk+PiBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRpbml0KFxuXHRcdGV2ZW50SGFuZGxlcnM6IEFycmF5PERvbWFpbkV2ZW50SGFuZGxlckltcGw8SSwgRT4+LFxuXHRcdGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1c1xuXHQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudEhhbmRsZXJzKSB7XG5cblx0XHRcdGNvbnN0IHNldCA9IG5ldyBTZXQoKTtcblx0XHRcdGNvbnN0IGZpbHRlcmVkSGFuZGxlcnM6IEFycmF5PERvbWFpbkV2ZW50SGFuZGxlckltcGw8SSwgRT4+ID0gW107XG5cblx0XHRcdGV2ZW50SGFuZGxlcnMuZmlsdGVyKChoYW5kbGVyOiBEb21haW5FdmVudEhhbmRsZXJJbXBsPEksIEU+KSA9PiB7XG5cdFx0XHRcdGlmICghc2V0LmhhcygoaGFuZGxlciBhcyBhbnkpLmRvbWFpbkV2ZW50SGFuZGxlcikpIHtcblx0XHRcdFx0XHRzZXQuYWRkKChoYW5kbGVyIGFzIGFueSkuZG9tYWluRXZlbnRIYW5kbGVyKTtcblx0XHRcdFx0XHRmaWx0ZXJlZEhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRmaWx0ZXJlZEhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXI6IERvbWFpbkV2ZW50SGFuZGxlckltcGw8SSwgRT4pID0+IHtcblx0XHRcdFx0ZG9tYWluRXZlbnRCdXNcblx0XHRcdFx0XHQub2ZFdmVudEhhbmRsZXIoaGFuZGxlcilcblx0XHRcdFx0XHQucGlwZSh0aGlzLmhlcm1lc1Rha2VVbnRpbCgpKVxuXHRcdFx0XHRcdC5zdWJzY3JpYmUoKGV2ZW50OiBFKSA9PiB7XG5cdFx0XHRcdFx0XHRoYW5kbGVyLmhhbmRsZUV2ZW50KGV2ZW50KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBjb25zb2xlLmxvZygnUmVnaXN0ZXJlZCBldmVudCBoYW5kbGVyczonLCBmaWx0ZXJlZEhhbmRsZXJzLmxlbmd0aClcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdSZWdpc3RlcmVkIGV2ZW50IGhhbmRsZXJzOicsIGZpbHRlcmVkSGFuZGxlcnMpXG5cdFx0fVxuXHR9XG59XG4iXX0=