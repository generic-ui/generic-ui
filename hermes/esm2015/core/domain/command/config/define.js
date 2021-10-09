/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Optional } from '../../../../common/optional';
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
    /**
     * @param {?} key
     * @return {?}
     */
    has(key) {
        return this.map.has(key);
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
    /**
     * @param {?} key
     * @return {?}
     */
    has(key) {
        return this.map.has(key);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmaW5lLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29yZS9kb21haW4vY29tbWFuZC9jb25maWcvZGVmaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7QUFPdkQsTUFBTSxPQUFPLHVCQUF1QjtJQUluQztRQUZpQixRQUFHLEdBQUcsSUFBSSxHQUFHLEVBQWtDLENBQUM7SUFHakUsQ0FBQzs7Ozs7O0lBRUQsR0FBRyxDQUFDLEdBQVcsRUFBRSxPQUErQjtRQUUvQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxHQUFHLENBQUMsR0FBVztRQUNkLE9BQU8sUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLEdBQVc7UUFDZCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7Q0FDRDs7Ozs7O0lBakJBLHNDQUFpRTs7Ozs7QUFtQmxFLE1BQU0sT0FBTywwQkFBMEI7SUFJdEM7UUFGaUIsUUFBRyxHQUFHLElBQUksR0FBRyxFQUFxQyxDQUFDO0lBR3BFLENBQUM7Ozs7OztJQUVELEdBQUcsQ0FBQyxHQUFXLEVBQUUsVUFBcUM7UUFFckQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLEdBQVc7UUFDZCxPQUFPLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7OztJQUVELEdBQUcsQ0FBQyxHQUFXO1FBQ2QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0NBQ0Q7Ozs7OztJQWpCQSx5Q0FBb0U7Ozs7OztBQW1CckUscUNBWUM7OztJQVZBLHFDQUFzQzs7SUFFdEMsa0NBQWdDOztJQUVoQyw4QkFBWTs7SUFFWix3Q0FBbUQ7O0lBRW5ELDBDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuLi8uLi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWZhY3RvcnknO1xuaW1wb3J0IHsgQWdncmVnYXRlUm9vdCB9IGZyb20gJy4uLy4uL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtcm9vdCc7XG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9vcHRpb25hbCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vY3JlYXRlLWFnZ3JlZ2F0ZS9jcmVhdGUtYWdncmVnYXRlLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uLy4uL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJy4uL2NvbW1hbmQnO1xuXG5cbmV4cG9ydCBjbGFzcyBBZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZTxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEEgZXh0ZW5kcyBBZ2dyZWdhdGVSb290PEk+PiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBtYXAgPSBuZXcgTWFwPHN0cmluZywgQWdncmVnYXRlRmFjdG9yeTxJLCBBPj4oKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0fVxuXG5cdGFkZChrZXk6IHN0cmluZywgZmFjdG9yeTogQWdncmVnYXRlRmFjdG9yeTxJLCBBPik6IHZvaWQge1xuXG5cdFx0dGhpcy5tYXAuc2V0KGtleSwgZmFjdG9yeSk7XG5cdH1cblxuXHRnZXQoa2V5OiBzdHJpbmcpOiBPcHRpb25hbDxBZ2dyZWdhdGVGYWN0b3J5PEksIEE+PiB7XG5cdFx0cmV0dXJuIE9wdGlvbmFsLm9mKHRoaXMubWFwLmdldChrZXkpKTtcblx0fVxuXG5cdGhhcyhrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm1hcC5oYXMoa2V5KTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmU8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPj4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgbWFwID0gbmV3IE1hcDxzdHJpbmcsIEFnZ3JlZ2F0ZVJlcG9zaXRvcnk8SSwgQT4+KCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHRhZGQoa2V5OiBzdHJpbmcsIHJlcG9zaXRvcnk6IEFnZ3JlZ2F0ZVJlcG9zaXRvcnk8SSwgQT4pOiB2b2lkIHtcblxuXHRcdHRoaXMubWFwLnNldChrZXksIHJlcG9zaXRvcnkpO1xuXHR9XG5cblx0Z2V0KGtleTogc3RyaW5nKTogT3B0aW9uYWw8QWdncmVnYXRlUmVwb3NpdG9yeTxJLCBBPj4ge1xuXHRcdHJldHVybiBPcHRpb25hbC5vZih0aGlzLm1hcC5nZXQoa2V5KSk7XG5cdH1cblxuXHRoYXMoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAuaGFzKGtleSk7XG5cdH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZ2dyZWdhdGVDb25maWc8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPiwgQyBleHRlbmRzIENvbW1hbmQ8ST4+IHtcblxuXHRyZXBvc2l0b3J5OiBBZ2dyZWdhdGVSZXBvc2l0b3J5PEksIEE+O1xuXG5cdGZhY3Rvcnk6IEFnZ3JlZ2F0ZUZhY3Rvcnk8SSwgQT47XG5cblx0a2V5OiBzdHJpbmc7XG5cblx0Y3JlYXRlSGFuZGxlcjogQ3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXI8QSwgQz47XG5cblx0Y29tbWFuZEhhbmRsZXJzOiBBcnJheTxQcm92aWRlcj5cblxufVxuIl19