/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Optional } from '../../../common/optional';
/**
 * @template I, A
 */
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
/**
 * @template I, A
 */
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
 * @template I, A, C
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
    /** @type {?} */
    AggregateConfig.prototype.commandHandlers;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmaW5lLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2NvbW1hbmQvY29uZmlnL2RlZmluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBT3BELE1BQU0sT0FBTyx1QkFBdUI7SUFJbkM7UUFGaUIsUUFBRyxHQUFHLElBQUksR0FBRyxFQUFrQyxDQUFDO0lBR2pFLENBQUM7Ozs7OztJQUVELEdBQUcsQ0FBQyxHQUFXLEVBQUUsT0FBK0I7UUFFL0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLEdBQVc7UUFDZCxPQUFPLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0NBQ0Q7Ozs7OztJQWJBLHNDQUFpRTs7Ozs7QUFlbEUsTUFBTSxPQUFPLDBCQUEwQjtJQUl0QztRQUZpQixRQUFHLEdBQUcsSUFBSSxHQUFHLEVBQXFDLENBQUM7SUFHcEUsQ0FBQzs7Ozs7O0lBRUQsR0FBRyxDQUFDLEdBQVcsRUFBRSxVQUFxQztRQUVyRCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCxHQUFHLENBQUMsR0FBVztRQUNkLE9BQU8sUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FDRDs7Ozs7O0lBYkEseUNBQW9FOzs7Ozs7QUFlckUscUNBWUM7OztJQVZBLHFDQUFzQzs7SUFFdEMsa0NBQWdDOztJQUVoQyw4QkFBWTs7SUFFWix3Q0FBNkM7O0lBRTdDLDBDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuLi9hZ2dyZWdhdGUvYWdncmVnYXRlLWZhY3RvcnknO1xuaW1wb3J0IHsgQWdncmVnYXRlUm9vdCB9IGZyb20gJy4uL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtcm9vdCc7XG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9vcHRpb25hbCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vYWdncmVnYXRlL2FnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vYWdncmVnYXRlL2NyZWF0ZS9hZ2dyZWdhdGUtY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IENvbW1hbmQgfSBmcm9tICcuLi9jb21tYW5kJztcblxuXG5leHBvcnQgY2xhc3MgQWdncmVnYXRlRmFjdG9yeUFyY2hpdmU8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPj4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgbWFwID0gbmV3IE1hcDxzdHJpbmcsIEFnZ3JlZ2F0ZUZhY3Rvcnk8SSwgQT4+KCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHRhZGQoa2V5OiBzdHJpbmcsIGZhY3Rvcnk6IEFnZ3JlZ2F0ZUZhY3Rvcnk8SSwgQT4pOiB2b2lkIHtcblxuXHRcdHRoaXMubWFwLnNldChrZXksIGZhY3RvcnkpO1xuXHR9XG5cblx0Z2V0KGtleTogc3RyaW5nKTogT3B0aW9uYWw8QWdncmVnYXRlRmFjdG9yeTxJLCBBPj4ge1xuXHRcdHJldHVybiBPcHRpb25hbC5vZih0aGlzLm1hcC5nZXQoa2V5KSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgQSBleHRlbmRzIEFnZ3JlZ2F0ZVJvb3Q8ST4+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IG1hcCA9IG5ldyBNYXA8c3RyaW5nLCBBZ2dyZWdhdGVSZXBvc2l0b3J5PEksIEE+PigpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cblx0YWRkKGtleTogc3RyaW5nLCByZXBvc2l0b3J5OiBBZ2dyZWdhdGVSZXBvc2l0b3J5PEksIEE+KTogdm9pZCB7XG5cblx0XHR0aGlzLm1hcC5zZXQoa2V5LCByZXBvc2l0b3J5KTtcblx0fVxuXG5cdGdldChrZXk6IHN0cmluZyk6IE9wdGlvbmFsPEFnZ3JlZ2F0ZVJlcG9zaXRvcnk8SSwgQT4+IHtcblx0XHRyZXR1cm4gT3B0aW9uYWwub2YodGhpcy5tYXAuZ2V0KGtleSkpO1xuXHR9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWdncmVnYXRlQ29uZmlnPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgQSBleHRlbmRzIEFnZ3JlZ2F0ZVJvb3Q8ST4sIEMgZXh0ZW5kcyBDb21tYW5kPiB7XG5cblx0cmVwb3NpdG9yeTogQWdncmVnYXRlUmVwb3NpdG9yeTxJLCBBPjtcblxuXHRmYWN0b3J5OiBBZ2dyZWdhdGVGYWN0b3J5PEksIEE+O1xuXG5cdGtleTogc3RyaW5nO1xuXG5cdGNyZWF0ZUhhbmRsZXI6IEFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyPEEsIEM+O1xuXG5cdGNvbW1hbmRIYW5kbGVyczogQXJyYXk8UHJvdmlkZXI+XG5cbn1cbiJdfQ==