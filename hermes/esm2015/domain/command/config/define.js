/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Optional } from '../../../common/optional';
export class AggregateFactoryArchive {
    constructor() {
        this.map = new Map();
    }
    /**
     * @param {?} key
     * @param {?} factory
     * @return {?}
     */
    add(key, factory) {
        this.map.set(key, factory);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    get(key) {
        return Optional.of(this.map.get(key));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AggregateFactoryArchive.prototype.map;
}
export class AggregateRepositoryArchive {
    constructor() {
        this.map = new Map();
    }
    /**
     * @param {?} key
     * @param {?} repository
     * @return {?}
     */
    add(key, repository) {
        this.map.set(key, repository);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    get(key) {
        return Optional.of(this.map.get(key));
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmaW5lLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2NvbW1hbmQvY29uZmlnL2RlZmluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBS3BELE1BQU0sT0FBTyx1QkFBdUI7SUFJbkM7UUFGaUIsUUFBRyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFHakMsQ0FBQzs7Ozs7O0lBRUQsR0FBRyxDQUFDLEdBQVcsRUFBRSxPQUFvQztRQUVwRCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxHQUFHLENBQUMsR0FBVztRQUNkLE9BQU8sUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FDRDs7Ozs7O0lBYkEsc0NBQWlDOztBQWVsQyxNQUFNLE9BQU8sMEJBQTBCO0lBSXRDO1FBRmlCLFFBQUcsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBR2pDLENBQUM7Ozs7OztJQUVELEdBQUcsQ0FBQyxHQUFXLEVBQUUsVUFBMEM7UUFFMUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLEdBQVc7UUFDZCxPQUFPLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0NBQ0Q7Ozs7OztJQWJBLHlDQUFpQzs7Ozs7QUFlbEMscUNBWUM7OztJQVZBLHFDQUEyQzs7SUFFM0Msa0NBQXFDOztJQUVyQyw4QkFBWTs7SUFFWix3Q0FBaUQ7O0lBRWpELG1DQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuLi9jcmVhdGUtaGFuZGxlci9hZ2dyZWdhdGUuZmFjdG9yeSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGUgfSBmcm9tICcuLi9hZ2dyZWdhdGUvYWdncmVnYXRlJztcbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL29wdGlvbmFsJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9hZ2dyZWdhdGUvYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQWdncmVnYXRlQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9jcmVhdGUtaGFuZGxlci9hZ2dyZWdhdGUtY29tbWFuZC5oYW5kbGVyJztcblxuXG5leHBvcnQgY2xhc3MgQWdncmVnYXRlRmFjdG9yeUFyY2hpdmUge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgbWFwID0gbmV3IE1hcCgpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cblx0YWRkKGtleTogc3RyaW5nLCBmYWN0b3J5OiBBZ2dyZWdhdGVGYWN0b3J5PEFnZ3JlZ2F0ZT4pOiB2b2lkIHtcblxuXHRcdHRoaXMubWFwLnNldChrZXksIGZhY3RvcnkpO1xuXHR9XG5cblx0Z2V0KGtleTogc3RyaW5nKTogT3B0aW9uYWw8QWdncmVnYXRlRmFjdG9yeTxBZ2dyZWdhdGU+PiB7XG5cdFx0cmV0dXJuIE9wdGlvbmFsLm9mKHRoaXMubWFwLmdldChrZXkpKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgbWFwID0gbmV3IE1hcCgpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cblx0YWRkKGtleTogc3RyaW5nLCByZXBvc2l0b3J5OiBBZ2dyZWdhdGVSZXBvc2l0b3J5PEFnZ3JlZ2F0ZT4pOiB2b2lkIHtcblxuXHRcdHRoaXMubWFwLnNldChrZXksIHJlcG9zaXRvcnkpO1xuXHR9XG5cblx0Z2V0KGtleTogc3RyaW5nKTogT3B0aW9uYWw8QWdncmVnYXRlUmVwb3NpdG9yeTxBZ2dyZWdhdGU+PiB7XG5cdFx0cmV0dXJuIE9wdGlvbmFsLm9mKHRoaXMubWFwLmdldChrZXkpKTtcblx0fVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFnZ3JlZ2F0ZUNvbmZpZyB7XG5cblx0cmVwb3NpdG9yeTogQWdncmVnYXRlUmVwb3NpdG9yeTxBZ2dyZWdhdGU+O1xuXG5cdGZhY3Rvcnk6IEFnZ3JlZ2F0ZUZhY3Rvcnk8QWdncmVnYXRlPjtcblxuXHRrZXk6IHN0cmluZztcblxuXHRjcmVhdGVIYW5kbGVyOiBBZ2dyZWdhdGVDb21tYW5kSGFuZGxlcjxhbnksIGFueT47XG5cblx0aGFuZGxlcnM/OiBBcnJheTxhbnk+XG5cbn1cbiJdfQ==