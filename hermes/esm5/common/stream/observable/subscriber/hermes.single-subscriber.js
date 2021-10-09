/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HermesSubscriber } from './hermes.subscriber';
/**
 * @template T
 */
var /**
 * @template T
 */
HermesSingleSubscriber = /** @class */ (function (_super) {
    tslib_1.__extends(HermesSingleSubscriber, _super);
    function HermesSingleSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    HermesSingleSubscriber.prototype.next = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.isCompleted()) {
            return;
        }
        /** @type {?} */
        var observer = this.getObserver();
        if (observer && observer.next) {
            observer.next(value);
            this.complete();
        }
    };
    return HermesSingleSubscriber;
}(HermesSubscriber));
/**
 * @template T
 */
export { HermesSingleSubscriber };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnNpbmdsZS1zdWJzY3JpYmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29tbW9uL3N0cmVhbS9vYnNlcnZhYmxlL3N1YnNjcmliZXIvaGVybWVzLnNpbmdsZS1zdWJzY3JpYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFFdkQ7Ozs7SUFBK0Msa0RBQW1CO0lBQWxFOztJQWdCQSxDQUFDOzs7OztJQWRBLHFDQUFJOzs7O0lBQUosVUFBSyxLQUFRO1FBRVosSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDdkIsT0FBTztTQUNQOztZQUVLLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFO1FBRW5DLElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDOUIsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDaEI7SUFDRixDQUFDO0lBRUYsNkJBQUM7QUFBRCxDQUFDLEFBaEJELENBQStDLGdCQUFnQixHQWdCOUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZXJtZXNTdWJzY3JpYmVyIH0gZnJvbSAnLi9oZXJtZXMuc3Vic2NyaWJlcic7XG5cbmV4cG9ydCBjbGFzcyBIZXJtZXNTaW5nbGVTdWJzY3JpYmVyPFQ+IGV4dGVuZHMgSGVybWVzU3Vic2NyaWJlcjxUPiB7XG5cblx0bmV4dCh2YWx1ZTogVCk6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMuaXNDb21wbGV0ZWQoKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IG9ic2VydmVyID0gdGhpcy5nZXRPYnNlcnZlcigpO1xuXG5cdFx0aWYgKG9ic2VydmVyICYmIG9ic2VydmVyLm5leHQpIHtcblx0XHRcdG9ic2VydmVyLm5leHQodmFsdWUpO1xuXHRcdFx0dGhpcy5jb21wbGV0ZSgpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=