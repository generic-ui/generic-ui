/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { CommandBus } from '../../../domain/command/command.bus';
import { CommandLogger } from '../../../domain/command/command.logger';
var ConsoleCommandLogger = /** @class */ (function (_super) {
    tslib_1.__extends(ConsoleCommandLogger, _super);
    function ConsoleCommandLogger(commandBus) {
        var _this = _super.call(this) || this;
        _this.enabled = false;
        _this.unsubscribe$ = new Subject();
        commandBus
            .pipe(filter((/**
         * @return {?}
         */
        function () { return _this.enabled; })), takeUntil(_this.unsubscribe$))
            .subscribe((/**
         * @param {?} command
         * @return {?}
         */
        function (command) {
            _this.log(command);
        }));
        return _this;
    }
    /**
     * @return {?}
     */
    ConsoleCommandLogger.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    /**
     * @return {?}
     */
    ConsoleCommandLogger.prototype.start = /**
     * @return {?}
     */
    function () {
        this.enabled = true;
    };
    /**
     * @return {?}
     */
    ConsoleCommandLogger.prototype.stop = /**
     * @return {?}
     */
    function () {
        this.enabled = false;
    };
    /**
     * @protected
     * @param {?} command
     * @return {?}
     */
    ConsoleCommandLogger.prototype.print = /**
     * @protected
     * @param {?} command
     * @return {?}
     */
    function (command) {
        // eslint-disable-next-line no-console
        console.log(command.toString(), command);
    };
    ConsoleCommandLogger.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ConsoleCommandLogger.ctorParameters = function () { return [
        { type: CommandBus }
    ]; };
    return ConsoleCommandLogger;
}(CommandLogger));
export { ConsoleCommandLogger };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConsoleCommandLogger.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    ConsoleCommandLogger.prototype.unsubscribe$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS5jb21tYW5kLmxvZ2dlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvcmUvaW5mcmFzdHJ1Y3R1cmUvbG9nZ2VyL2NvbW1hbmQvY29uc29sZS5jb21tYW5kLmxvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUVqRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFJdkU7SUFDMEMsZ0RBQWE7SUFNdEQsOEJBQVksVUFBc0I7UUFBbEMsWUFDQyxpQkFBTyxTQVVQO1FBZk8sYUFBTyxHQUFHLEtBQUssQ0FBQztRQUVoQixrQkFBWSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFLcEMsVUFBVTthQUNSLElBQUksQ0FDSixNQUFNOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sRUFBWixDQUFZLEVBQUMsRUFDMUIsU0FBUyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FDNUI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxPQUE2QjtZQUN4QyxLQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25CLENBQUMsRUFBQyxDQUFDOztJQUNMLENBQUM7Ozs7SUFFRCwwQ0FBVzs7O0lBQVg7UUFDQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELG9DQUFLOzs7SUFBTDtRQUNDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxtQ0FBSTs7O0lBQUo7UUFDQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7Ozs7SUFFUyxvQ0FBSzs7Ozs7SUFBZixVQUFnQixPQUE2QjtRQUM1QyxzQ0FBc0M7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Z0JBcENELFVBQVU7Ozs7Z0JBTkYsVUFBVTs7SUE0Q25CLDJCQUFDO0NBQUEsQUF0Q0QsQ0FDMEMsYUFBYSxHQXFDdEQ7U0FyQ1ksb0JBQW9COzs7Ozs7SUFFaEMsdUNBQXdCOzs7OztJQUV4Qiw0Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBDb21tYW5kQnVzIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvY29tbWFuZC5idXMnO1xuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQnO1xuaW1wb3J0IHsgQ29tbWFuZExvZ2dlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQubG9nZ2VyJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb25zb2xlQ29tbWFuZExvZ2dlciBleHRlbmRzIENvbW1hbmRMb2dnZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdHByaXZhdGUgZW5hYmxlZCA9IGZhbHNlO1xuXG5cdHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3QoKTtcblxuXHRjb25zdHJ1Y3Rvcihjb21tYW5kQnVzOiBDb21tYW5kQnVzKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdGNvbW1hbmRCdXNcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoKCkgPT4gdGhpcy5lbmFibGVkKSxcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoY29tbWFuZDogQ29tbWFuZDxBZ2dyZWdhdGVJZD4pID0+IHtcblx0XHRcdFx0dGhpcy5sb2coY29tbWFuZCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcblx0XHR0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuXHR9XG5cblx0c3RhcnQoKTogdm9pZCB7XG5cdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblx0fVxuXG5cdHN0b3AoKTogdm9pZCB7XG5cdFx0dGhpcy5lbmFibGVkID0gZmFsc2U7XG5cdH1cblxuXHRwcm90ZWN0ZWQgcHJpbnQoY29tbWFuZDogQ29tbWFuZDxBZ2dyZWdhdGVJZD4pOiB2b2lkIHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXHRcdGNvbnNvbGUubG9nKGNvbW1hbmQudG9TdHJpbmcoKSwgY29tbWFuZCk7XG5cdH1cblxufVxuIl19