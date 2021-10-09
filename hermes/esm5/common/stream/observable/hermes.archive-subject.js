/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HermesSubject } from './hermes.subject';
import { HermesBehaviorSubject } from './hermes.behavior-subject';
import { HermesReplaySubject } from './hermes.replay-subject';
/**
 * @template T
 */
var /**
 * @template T
 */
HermesArchiveSubject = /** @class */ (function (_super) {
    tslib_1.__extends(HermesArchiveSubject, _super);
    function HermesArchiveSubject() {
        return _super.call(this) || this;
    }
    /**
     * @template T
     * @param {?=} value
     * @return {?}
     */
    HermesArchiveSubject.of = /**
     * @template T
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value !== undefined) {
            return new HermesBehaviorSubject(value);
        }
        else {
            return new HermesReplaySubject(1);
        }
    };
    return HermesArchiveSubject;
}(HermesSubject));
/**
 * @template T
 */
export { HermesArchiveSubject };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLmFyY2hpdmUtc3ViamVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvbW1vbi9zdHJlYW0vb2JzZXJ2YWJsZS9oZXJtZXMuYXJjaGl2ZS1zdWJqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0FBRTlEOzs7O0lBQTZDLGdEQUFnQjtJQVU1RDtlQUNDLGlCQUFPO0lBQ1IsQ0FBQzs7Ozs7O0lBVk0sdUJBQUU7Ozs7O0lBQVQsVUFBYSxLQUFTO1FBQ3JCLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN4QixPQUFPLElBQUkscUJBQXFCLENBQUksS0FBSyxDQUFDLENBQUM7U0FDM0M7YUFBTTtZQUNOLE9BQU8sSUFBSSxtQkFBbUIsQ0FBSSxDQUFDLENBQUMsQ0FBQztTQUNyQztJQUNGLENBQUM7SUFLRiwyQkFBQztBQUFELENBQUMsQUFiRCxDQUE2QyxhQUFhLEdBYXpEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVybWVzU3ViamVjdCB9IGZyb20gJy4vaGVybWVzLnN1YmplY3QnO1xuaW1wb3J0IHsgSGVybWVzQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAnLi9oZXJtZXMuYmVoYXZpb3Itc3ViamVjdCc7XG5pbXBvcnQgeyBIZXJtZXNSZXBsYXlTdWJqZWN0IH0gZnJvbSAnLi9oZXJtZXMucmVwbGF5LXN1YmplY3QnO1xuXG5leHBvcnQgY2xhc3MgSGVybWVzQXJjaGl2ZVN1YmplY3Q8VD4gZXh0ZW5kcyBIZXJtZXNTdWJqZWN0PFQ+IHtcblxuXHRzdGF0aWMgb2Y8VD4odmFsdWU/OiBUKSB7XG5cdFx0aWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBuZXcgSGVybWVzQmVoYXZpb3JTdWJqZWN0PFQ+KHZhbHVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG5ldyBIZXJtZXNSZXBsYXlTdWJqZWN0PFQ+KDEpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxufVxuIl19