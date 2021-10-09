/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var /**
 * @template T
 */
HermesSubscriber = /** @class */ (function () {
    function HermesSubscriber(config) {
        this.finalize = (/**
         * @return {?}
         */
        function () {
        });
        this.completed = false;
        this.closed = false;
        this.observer = config;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    HermesSubscriber.prototype.next = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.isCompleted()) {
            return;
        }
        if (this.observer && this.observer.next) {
            this.observer.next(value);
        }
    };
    /**
     * @param {?} error
     * @return {?}
     */
    HermesSubscriber.prototype.error = /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        if (this.completed) {
            return;
        }
        if (this.observer && this.observer.error) {
            this.observer.error(error);
        }
        this.unsubscribe();
    };
    /**
     * @return {?}
     */
    HermesSubscriber.prototype.complete = /**
     * @return {?}
     */
    function () {
        if (this.completed) {
            return;
        }
        this.completed = true;
        if (this.observer && this.observer.complete) {
            this.observer.complete();
        }
        this.unsubscribe();
    };
    /**
     * @return {?}
     */
    HermesSubscriber.prototype.unsubscribe = /**
     * @return {?}
     */
    function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        this.completed = true;
        this.finalize();
    };
    /**
     * @param {?} finalize
     * @return {?}
     */
    HermesSubscriber.prototype.setFinalize = /**
     * @param {?} finalize
     * @return {?}
     */
    function (finalize) {
        if (finalize && typeof finalize === 'function') {
            this.finalize = finalize;
        }
        else {
        }
    };
    /**
     * @protected
     * @return {?}
     */
    HermesSubscriber.prototype.isCompleted = /**
     * @protected
     * @return {?}
     */
    function () {
        return this.completed;
    };
    /**
     * @protected
     * @return {?}
     */
    HermesSubscriber.prototype.isClosed = /**
     * @protected
     * @return {?}
     */
    function () {
        return this.closed;
    };
    /**
     * @protected
     * @return {?}
     */
    HermesSubscriber.prototype.getObserver = /**
     * @protected
     * @return {?}
     */
    function () {
        return this.observer;
    };
    return HermesSubscriber;
}());
/**
 * @template T
 */
export { HermesSubscriber };
if (false) {
    /**
     * @type {?}
     * @private
     */
    HermesSubscriber.prototype.observer;
    /**
     * @type {?}
     * @private
     */
    HermesSubscriber.prototype.finalize;
    /**
     * @type {?}
     * @private
     */
    HermesSubscriber.prototype.completed;
    /**
     * @type {?}
     * @private
     */
    HermesSubscriber.prototype.closed;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnN1YnNjcmliZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24vc3RyZWFtL29ic2VydmFibGUvc3Vic2NyaWJlci9oZXJtZXMuc3Vic2NyaWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7Ozs7SUFXQywwQkFBWSxNQUFrQztRQVB0QyxhQUFROzs7UUFBZTtRQUMvQixDQUFDLEVBQUM7UUFFTSxjQUFTLEdBQVksS0FBSyxDQUFDO1FBRTNCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFHL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCwrQkFBSTs7OztJQUFKLFVBQUssS0FBUTtRQUVaLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQ3ZCLE9BQU87U0FDUDtRQUVELElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRTtZQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxQjtJQUNGLENBQUM7Ozs7O0lBRUQsZ0NBQUs7Ozs7SUFBTCxVQUFNLEtBQVU7UUFFZixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsT0FBTztTQUNQO1FBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxtQ0FBUTs7O0lBQVI7UUFFQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsT0FBTztTQUNQO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFO1lBQzVDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDekI7UUFFRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELHNDQUFXOzs7SUFBWDtRQUNDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixPQUFPO1NBQ1A7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUV0QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakIsQ0FBQzs7Ozs7SUFFRCxzQ0FBVzs7OztJQUFYLFVBQVksUUFBb0I7UUFDL0IsSUFBSSxRQUFRLElBQUksT0FBTyxRQUFRLEtBQUssVUFBVSxFQUFFO1lBQy9DLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1NBQ3pCO2FBQU07U0FFTjtJQUNGLENBQUM7Ozs7O0lBRVMsc0NBQVc7Ozs7SUFBckI7UUFDQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFUyxtQ0FBUTs7OztJQUFsQjtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDOzs7OztJQUVTLHNDQUFXOzs7O0lBQXJCO1FBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7SUFFRix1QkFBQztBQUFELENBQUMsQUFuRkQsSUFtRkM7Ozs7Ozs7Ozs7SUFqRkEsb0NBQTZDOzs7OztJQUU3QyxvQ0FDRTs7Ozs7SUFFRixxQ0FBbUM7Ozs7O0lBRW5DLGtDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlcm1lc09ic2VydmVyIH0gZnJvbSAnLi4vaGVybWVzLm9ic2VydmVyJztcblxuZXhwb3J0IGNsYXNzIEhlcm1lc1N1YnNjcmliZXI8VD4ge1xuXG5cdHByaXZhdGUgb2JzZXJ2ZXI6IFBhcnRpYWw8SGVybWVzT2JzZXJ2ZXI8VD4+O1xuXG5cdHByaXZhdGUgZmluYWxpemU6ICgpID0+IHZvaWQgPSAoKSA9PiB7XG5cdH07XG5cblx0cHJpdmF0ZSBjb21wbGV0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIGNsb3NlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKGNvbmZpZzogUGFydGlhbDxIZXJtZXNPYnNlcnZlcjxUPj4pIHtcblx0XHR0aGlzLm9ic2VydmVyID0gY29uZmlnO1xuXHR9XG5cblx0bmV4dCh2YWx1ZTogVCk6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMuaXNDb21wbGV0ZWQoKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLm9ic2VydmVyICYmIHRoaXMub2JzZXJ2ZXIubmV4dCkge1xuXHRcdFx0dGhpcy5vYnNlcnZlci5uZXh0KHZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHRlcnJvcihlcnJvcjogYW55KTogdm9pZCB7XG5cblx0XHRpZiAodGhpcy5jb21wbGV0ZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5vYnNlcnZlciAmJiB0aGlzLm9ic2VydmVyLmVycm9yKSB7XG5cdFx0XHR0aGlzLm9ic2VydmVyLmVycm9yKGVycm9yKTtcblx0XHR9XG5cdFx0dGhpcy51bnN1YnNjcmliZSgpO1xuXHR9XG5cblx0Y29tcGxldGUoKTogdm9pZCB7XG5cblx0XHRpZiAodGhpcy5jb21wbGV0ZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmNvbXBsZXRlZCA9IHRydWU7XG5cdFx0aWYgKHRoaXMub2JzZXJ2ZXIgJiYgdGhpcy5vYnNlcnZlci5jb21wbGV0ZSkge1xuXHRcdFx0dGhpcy5vYnNlcnZlci5jb21wbGV0ZSgpO1xuXHRcdH1cblxuXHRcdHRoaXMudW5zdWJzY3JpYmUoKTtcblx0fVxuXG5cdHVuc3Vic2NyaWJlKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmNsb3NlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuY2xvc2VkID0gdHJ1ZTtcblx0XHR0aGlzLmNvbXBsZXRlZCA9IHRydWU7XG5cblx0XHR0aGlzLmZpbmFsaXplKCk7XG5cdH1cblxuXHRzZXRGaW5hbGl6ZShmaW5hbGl6ZTogKCkgPT4gdm9pZCk6IHZvaWQge1xuXHRcdGlmIChmaW5hbGl6ZSAmJiB0eXBlb2YgZmluYWxpemUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRoaXMuZmluYWxpemUgPSBmaW5hbGl6ZTtcblx0XHR9IGVsc2Uge1xuXG5cdFx0fVxuXHR9XG5cblx0cHJvdGVjdGVkIGlzQ29tcGxldGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBsZXRlZDtcblx0fVxuXG5cdHByb3RlY3RlZCBpc0Nsb3NlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jbG9zZWQ7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0T2JzZXJ2ZXIoKTogUGFydGlhbDxIZXJtZXNPYnNlcnZlcjxUPj4ge1xuXHRcdHJldHVybiB0aGlzLm9ic2VydmVyO1xuXHR9XG5cbn1cbiJdfQ==