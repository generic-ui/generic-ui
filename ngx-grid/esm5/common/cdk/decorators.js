/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Override decorator
 *
 * class Car {
 *     drive() {}
 * }
 *
 * class FastCar {
 * \@Override
 *     drive() {}}
 * }
 * @param {?} container
 * @param {?} key
 * @return {?}
 */
export function Override(container, key) {
    /** @type {?} */
    var basePrototype = Object.getPrototypeOf(container);
    if (typeof basePrototype[key] !== 'function') {
        throw new Error('Method "' + key + '" of class "' + container.constructor.name + '" doesn\'t override any method of base class.');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tbW9uL2Nkay9kZWNvcmF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQSxNQUFNLFVBQVUsUUFBUSxDQUFDLFNBQWlDLEVBQUUsR0FBVzs7UUFDaEUsYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO0lBQ3RELElBQUksT0FBTyxhQUFhLENBQUMsR0FBRyxDQUFDLEtBQUssVUFBVSxFQUFFO1FBQzdDLE1BQU0sSUFBSSxLQUFLLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxjQUFjLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsK0NBQStDLENBQUMsQ0FBQztLQUNsSTtBQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE92ZXJyaWRlIGRlY29yYXRvclxuICpcbiAqIGNsYXNzIENhciB7XG4gKiAgICAgZHJpdmUoKSB7fVxuICogfVxuICpcbiAqIGNsYXNzIEZhc3RDYXIge1xuICogICAgIEBPdmVycmlkZVxuICogICAgIGRyaXZlKCkge319XG4gKiB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBPdmVycmlkZShjb250YWluZXI6IHsgW2tleTogc3RyaW5nXTogYW55IH0sIGtleTogc3RyaW5nKSB7XG5cdGNvbnN0IGJhc2VQcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoY29udGFpbmVyKTtcblx0aWYgKHR5cGVvZiBiYXNlUHJvdG90eXBlW2tleV0gIT09ICdmdW5jdGlvbicpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBcIicgKyBrZXkgKyAnXCIgb2YgY2xhc3MgXCInICsgY29udGFpbmVyLmNvbnN0cnVjdG9yLm5hbWUgKyAnXCIgZG9lc25cXCd0IG92ZXJyaWRlIGFueSBtZXRob2Qgb2YgYmFzZSBjbGFzcy4nKTtcblx0fVxufVxuIl19