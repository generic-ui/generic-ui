/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { CommandBus } from '../../../domain/command/command.bus';
import { CommandLogger } from '../../../domain/command/command.logger';
export class ConsoleCommandLogger extends CommandLogger {
    /**
     * @param {?} commandBus
     */
    constructor(commandBus) {
        super();
        this.enabled = false;
        this.unsubscribe$ = new Subject();
        commandBus
            .pipe(filter((/**
         * @return {?}
         */
        () => this.enabled)), takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} command
         * @return {?}
         */
        (command) => {
            this.log(command);
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    /**
     * @return {?}
     */
    start() {
        this.enabled = true;
    }
    /**
     * @return {?}
     */
    stop() {
        this.enabled = false;
    }
    /**
     * @protected
     * @param {?} command
     * @return {?}
     */
    print(command) {
        // eslint-disable-next-line no-console
        console.log(command.toString(), command);
    }
}
ConsoleCommandLogger.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ConsoleCommandLogger.ctorParameters = () => [
    { type: CommandBus }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS5jb21tYW5kLmxvZ2dlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvcmUvaW5mcmFzdHJ1Y3R1cmUvbG9nZ2VyL2NvbW1hbmQvY29uc29sZS5jb21tYW5kLmxvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRWpFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUt2RSxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsYUFBYTs7OztJQU10RCxZQUFZLFVBQXNCO1FBQ2pDLEtBQUssRUFBRSxDQUFDO1FBTEQsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUVoQixpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFLcEMsVUFBVTthQUNSLElBQUksQ0FDSixNQUFNOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLEVBQzFCLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQzVCO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsT0FBNkIsRUFBRSxFQUFFO1lBQzVDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsS0FBSztRQUNKLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxJQUFJO1FBQ0gsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7Ozs7O0lBRVMsS0FBSyxDQUFDLE9BQTZCO1FBQzVDLHNDQUFzQztRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7WUFwQ0QsVUFBVTs7OztZQU5GLFVBQVU7Ozs7Ozs7SUFTbEIsdUNBQXdCOzs7OztJQUV4Qiw0Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBDb21tYW5kQnVzIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvY29tbWFuZC5idXMnO1xuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQnO1xuaW1wb3J0IHsgQ29tbWFuZExvZ2dlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQubG9nZ2VyJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb25zb2xlQ29tbWFuZExvZ2dlciBleHRlbmRzIENvbW1hbmRMb2dnZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdHByaXZhdGUgZW5hYmxlZCA9IGZhbHNlO1xuXG5cdHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3QoKTtcblxuXHRjb25zdHJ1Y3Rvcihjb21tYW5kQnVzOiBDb21tYW5kQnVzKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdGNvbW1hbmRCdXNcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoKCkgPT4gdGhpcy5lbmFibGVkKSxcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoY29tbWFuZDogQ29tbWFuZDxBZ2dyZWdhdGVJZD4pID0+IHtcblx0XHRcdFx0dGhpcy5sb2coY29tbWFuZCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcblx0XHR0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuXHR9XG5cblx0c3RhcnQoKTogdm9pZCB7XG5cdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblx0fVxuXG5cdHN0b3AoKTogdm9pZCB7XG5cdFx0dGhpcy5lbmFibGVkID0gZmFsc2U7XG5cdH1cblxuXHRwcm90ZWN0ZWQgcHJpbnQoY29tbWFuZDogQ29tbWFuZDxBZ2dyZWdhdGVJZD4pOiB2b2lkIHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXHRcdGNvbnNvbGUubG9nKGNvbW1hbmQudG9TdHJpbmcoKSwgY29tbWFuZCk7XG5cdH1cblxufVxuIl19