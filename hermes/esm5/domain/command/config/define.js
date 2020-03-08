/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Optional } from '../../../common/optional';
var AggregateFactoryArchive = /** @class */ (function () {
    function AggregateFactoryArchive() {
        this.map = new Map();
    }
    /**
     * @param {?} key
     * @param {?} factory
     * @return {?}
     */
    AggregateFactoryArchive.prototype.add = /**
     * @param {?} key
     * @param {?} factory
     * @return {?}
     */
    function (key, factory) {
        this.map.set(key, factory);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    AggregateFactoryArchive.prototype.get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return Optional.of(this.map.get(key));
    };
    return AggregateFactoryArchive;
}());
export { AggregateFactoryArchive };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AggregateFactoryArchive.prototype.map;
}
var AggregateRepositoryArchive = /** @class */ (function () {
    function AggregateRepositoryArchive() {
        this.map = new Map();
    }
    /**
     * @param {?} key
     * @param {?} repository
     * @return {?}
     */
    AggregateRepositoryArchive.prototype.add = /**
     * @param {?} key
     * @param {?} repository
     * @return {?}
     */
    function (key, repository) {
        this.map.set(key, repository);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    AggregateRepositoryArchive.prototype.get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return Optional.of(this.map.get(key));
    };
    return AggregateRepositoryArchive;
}());
export { AggregateRepositoryArchive };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AggregateRepositoryArchive.prototype.map;
}
/**
 * @record
 */
export function AggregateConfig() { }
if (false) {
    /** @type {?} */
    AggregateConfig.prototype.repository;
    /** @type {?} */
    AggregateConfig.prototype.factory;
    /** @type {?} */
    AggregateConfig.prototype.key;
    /** @type {?} */
    AggregateConfig.prototype.createHandler;
    /** @type {?|undefined} */
    AggregateConfig.prototype.handlers;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmaW5lLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2NvbW1hbmQvY29uZmlnL2RlZmluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBS3BEO0lBSUM7UUFGaUIsUUFBRyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFHakMsQ0FBQzs7Ozs7O0lBRUQscUNBQUc7Ozs7O0lBQUgsVUFBSSxHQUFXLEVBQUUsT0FBb0M7UUFFcEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQscUNBQUc7Ozs7SUFBSCxVQUFJLEdBQVc7UUFDZCxPQUFPLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0YsOEJBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQzs7Ozs7OztJQWJBLHNDQUFpQzs7QUFlbEM7SUFJQztRQUZpQixRQUFHLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUdqQyxDQUFDOzs7Ozs7SUFFRCx3Q0FBRzs7Ozs7SUFBSCxVQUFJLEdBQVcsRUFBRSxVQUEwQztRQUUxRCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCx3Q0FBRzs7OztJQUFILFVBQUksR0FBVztRQUNkLE9BQU8sUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRixpQ0FBQztBQUFELENBQUMsQUFmRCxJQWVDOzs7Ozs7O0lBYkEseUNBQWlDOzs7OztBQWVsQyxxQ0FZQzs7O0lBVkEscUNBQTJDOztJQUUzQyxrQ0FBcUM7O0lBRXJDLDhCQUFZOztJQUVaLHdDQUFpRDs7SUFFakQsbUNBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJy4uL2NyZWF0ZS1oYW5kbGVyL2FnZ3JlZ2F0ZS5mYWN0b3J5JztcbmltcG9ydCB7IEFnZ3JlZ2F0ZSB9IGZyb20gJy4uL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vb3B0aW9uYWwnO1xuaW1wb3J0IHsgQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2NyZWF0ZS1oYW5kbGVyL2FnZ3JlZ2F0ZS1jb21tYW5kLmhhbmRsZXInO1xuXG5cbmV4cG9ydCBjbGFzcyBBZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBtYXAgPSBuZXcgTWFwKCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHRhZGQoa2V5OiBzdHJpbmcsIGZhY3Rvcnk6IEFnZ3JlZ2F0ZUZhY3Rvcnk8QWdncmVnYXRlPik6IHZvaWQge1xuXG5cdFx0dGhpcy5tYXAuc2V0KGtleSwgZmFjdG9yeSk7XG5cdH1cblxuXHRnZXQoa2V5OiBzdHJpbmcpOiBPcHRpb25hbDxBZ2dyZWdhdGVGYWN0b3J5PEFnZ3JlZ2F0ZT4+IHtcblx0XHRyZXR1cm4gT3B0aW9uYWwub2YodGhpcy5tYXAuZ2V0KGtleSkpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBtYXAgPSBuZXcgTWFwKCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHRhZGQoa2V5OiBzdHJpbmcsIHJlcG9zaXRvcnk6IEFnZ3JlZ2F0ZVJlcG9zaXRvcnk8QWdncmVnYXRlPik6IHZvaWQge1xuXG5cdFx0dGhpcy5tYXAuc2V0KGtleSwgcmVwb3NpdG9yeSk7XG5cdH1cblxuXHRnZXQoa2V5OiBzdHJpbmcpOiBPcHRpb25hbDxBZ2dyZWdhdGVSZXBvc2l0b3J5PEFnZ3JlZ2F0ZT4+IHtcblx0XHRyZXR1cm4gT3B0aW9uYWwub2YodGhpcy5tYXAuZ2V0KGtleSkpO1xuXHR9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWdncmVnYXRlQ29uZmlnIHtcblxuXHRyZXBvc2l0b3J5OiBBZ2dyZWdhdGVSZXBvc2l0b3J5PEFnZ3JlZ2F0ZT47XG5cblx0ZmFjdG9yeTogQWdncmVnYXRlRmFjdG9yeTxBZ2dyZWdhdGU+O1xuXG5cdGtleTogc3RyaW5nO1xuXG5cdGNyZWF0ZUhhbmRsZXI6IEFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyPGFueSwgYW55PjtcblxuXHRoYW5kbGVycz86IEFycmF5PGFueT5cblxufVxuIl19