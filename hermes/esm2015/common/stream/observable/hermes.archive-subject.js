/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HermesSubject } from './hermes.subject';
import { HermesBehaviorSubject } from './hermes.behavior-subject';
import { HermesReplaySubject } from './hermes.replay-subject';
/**
 * @template T
 */
export class HermesArchiveSubject extends HermesSubject {
    /**
     * @private
     */
    constructor() {
        super();
    }
    /**
     * @template T
     * @param {?=} value
     * @return {?}
     */
    static of(value) {
        if (value !== undefined) {
            return new HermesBehaviorSubject(value);
        }
        else {
            return new HermesReplaySubject(1);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLmFyY2hpdmUtc3ViamVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvbW1vbi9zdHJlYW0vb2JzZXJ2YWJsZS9oZXJtZXMuYXJjaGl2ZS1zdWJqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFFOUQsTUFBTSxPQUFPLG9CQUF3QixTQUFRLGFBQWdCOzs7O0lBVTVEO1FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDVCxDQUFDOzs7Ozs7SUFWRCxNQUFNLENBQUMsRUFBRSxDQUFJLEtBQVM7UUFDckIsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3hCLE9BQU8sSUFBSSxxQkFBcUIsQ0FBSSxLQUFLLENBQUMsQ0FBQztTQUMzQzthQUFNO1lBQ04sT0FBTyxJQUFJLG1CQUFtQixDQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0YsQ0FBQztDQUtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVybWVzU3ViamVjdCB9IGZyb20gJy4vaGVybWVzLnN1YmplY3QnO1xuaW1wb3J0IHsgSGVybWVzQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAnLi9oZXJtZXMuYmVoYXZpb3Itc3ViamVjdCc7XG5pbXBvcnQgeyBIZXJtZXNSZXBsYXlTdWJqZWN0IH0gZnJvbSAnLi9oZXJtZXMucmVwbGF5LXN1YmplY3QnO1xuXG5leHBvcnQgY2xhc3MgSGVybWVzQXJjaGl2ZVN1YmplY3Q8VD4gZXh0ZW5kcyBIZXJtZXNTdWJqZWN0PFQ+IHtcblxuXHRzdGF0aWMgb2Y8VD4odmFsdWU/OiBUKSB7XG5cdFx0aWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBuZXcgSGVybWVzQmVoYXZpb3JTdWJqZWN0PFQ+KHZhbHVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG5ldyBIZXJtZXNSZXBsYXlTdWJqZWN0PFQ+KDEpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxufVxuIl19