/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandBus } from '../../../domain/command/command.bus';
import { CommandLogger } from '../../../domain/command/command.logger';
import { hermesFilter } from '../../../../common/stream/operator/hermes.filter';
import { hermesTakeUntil } from '../../../../common/stream/operator/hermes.take-until';
import { HermesSubject } from '../../../../common/stream/observable/hermes.subject';
var ConsoleCommandLogger = /** @class */ (function (_super) {
    tslib_1.__extends(ConsoleCommandLogger, _super);
    function ConsoleCommandLogger(commandBus) {
        var _this = _super.call(this) || this;
        _this.enabled = false;
        _this.unsubscribe$ = new HermesSubject();
        commandBus
            .pipe(hermesFilter((/**
         * @return {?}
         */
        function () { return _this.enabled; })), hermesTakeUntil(_this.unsubscribe$))
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS5jb21tYW5kLmxvZ2dlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvcmUvaW5mcmFzdHJ1Y3R1cmUvbG9nZ2VyL2NvbW1hbmQvY29uc29sZS5jb21tYW5kLmxvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFdEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRWpFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUV2RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDaEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUdwRjtJQUMwQyxnREFBYTtJQU10RCw4QkFBWSxVQUFzQjtRQUFsQyxZQUNDLGlCQUFPLFNBVVA7UUFmTyxhQUFPLEdBQUcsS0FBSyxDQUFDO1FBRWhCLGtCQUFZLEdBQUcsSUFBSSxhQUFhLEVBQVEsQ0FBQztRQUtoRCxVQUFVO2FBQ1IsSUFBSSxDQUNKLFlBQVk7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxFQUFaLENBQVksRUFBQyxFQUNoQyxlQUFlLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUNsQzthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLE9BQTZCO1lBQ3hDLEtBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxFQUFDLENBQUM7O0lBQ0wsQ0FBQzs7OztJQUVELDBDQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsb0NBQUs7OztJQUFMO1FBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELG1DQUFJOzs7SUFBSjtRQUNDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7OztJQUVTLG9DQUFLOzs7OztJQUFmLFVBQWdCLE9BQTZCO1FBQzVDLHNDQUFzQztRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDOztnQkFwQ0QsVUFBVTs7OztnQkFURixVQUFVOztJQStDbkIsMkJBQUM7Q0FBQSxBQXRDRCxDQUMwQyxhQUFhLEdBcUN0RDtTQXJDWSxvQkFBb0I7Ozs7OztJQUVoQyx1Q0FBd0I7Ozs7O0lBRXhCLDRDQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kQnVzIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvY29tbWFuZC5idXMnO1xuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQnO1xuaW1wb3J0IHsgQ29tbWFuZExvZ2dlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQubG9nZ2VyJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgaGVybWVzRmlsdGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3N0cmVhbS9vcGVyYXRvci9oZXJtZXMuZmlsdGVyJztcbmltcG9ydCB7IGhlcm1lc1Rha2VVbnRpbCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9zdHJlYW0vb3BlcmF0b3IvaGVybWVzLnRha2UtdW50aWwnO1xuaW1wb3J0IHsgSGVybWVzU3ViamVjdCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9zdHJlYW0vb2JzZXJ2YWJsZS9oZXJtZXMuc3ViamVjdCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbnNvbGVDb21tYW5kTG9nZ2VyIGV4dGVuZHMgQ29tbWFuZExvZ2dlciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0cHJpdmF0ZSBlbmFibGVkID0gZmFsc2U7XG5cblx0cHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgSGVybWVzU3ViamVjdDx2b2lkPigpO1xuXG5cdGNvbnN0cnVjdG9yKGNvbW1hbmRCdXM6IENvbW1hbmRCdXMpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0Y29tbWFuZEJ1c1xuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGhlcm1lc0ZpbHRlcigoKSA9PiB0aGlzLmVuYWJsZWQpLFxuXHRcdFx0XHRoZXJtZXNUYWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChjb21tYW5kOiBDb21tYW5kPEFnZ3JlZ2F0ZUlkPikgPT4ge1xuXHRcdFx0XHR0aGlzLmxvZyhjb21tYW5kKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuXHRcdHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG5cdH1cblxuXHRzdGFydCgpOiB2b2lkIHtcblx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXHR9XG5cblx0c3RvcCgpOiB2b2lkIHtcblx0XHR0aGlzLmVuYWJsZWQgPSBmYWxzZTtcblx0fVxuXG5cdHByb3RlY3RlZCBwcmludChjb21tYW5kOiBDb21tYW5kPEFnZ3JlZ2F0ZUlkPik6IHZvaWQge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cdFx0Y29uc29sZS5sb2coY29tbWFuZC50b1N0cmluZygpLCBjb21tYW5kKTtcblx0fVxuXG59XG4iXX0=