/**
 * Override decorator
 *
 * class Car {
 *     drive() {}
 * }
 *
 * class FastCar {
 *     @Override
 *     drive() {}}
 * }
 */
export function Override(container, key) {
    const basePrototype = Object.getPrototypeOf(container);
    if (typeof basePrototype[key] !== 'function') {
        throw new Error('Method "' + key + '" of class "' + container.constructor.name + '" doesn\'t override any method of base class.');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29tbW9uL2Nkay9kZWNvcmF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztHQVdHO0FBQ0gsTUFBTSxVQUFVLFFBQVEsQ0FBQyxTQUFpQyxFQUFFLEdBQVc7SUFDdEUsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2RCxJQUFJLE9BQU8sYUFBYSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFVBQVUsRUFBRTtRQUM3QyxNQUFNLElBQUksS0FBSyxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsY0FBYyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLCtDQUErQyxDQUFDLENBQUM7S0FDbEk7QUFDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBPdmVycmlkZSBkZWNvcmF0b3JcbiAqXG4gKiBjbGFzcyBDYXIge1xuICogICAgIGRyaXZlKCkge31cbiAqIH1cbiAqXG4gKiBjbGFzcyBGYXN0Q2FyIHtcbiAqICAgICBAT3ZlcnJpZGVcbiAqICAgICBkcml2ZSgpIHt9fVxuICogfVxuICovXG5leHBvcnQgZnVuY3Rpb24gT3ZlcnJpZGUoY29udGFpbmVyOiB7IFtrZXk6IHN0cmluZ106IGFueSB9LCBrZXk6IHN0cmluZykge1xuXHRjb25zdCBiYXNlUHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGNvbnRhaW5lcik7XG5cdGlmICh0eXBlb2YgYmFzZVByb3RvdHlwZVtrZXldICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdNZXRob2QgXCInICsga2V5ICsgJ1wiIG9mIGNsYXNzIFwiJyArIGNvbnRhaW5lci5jb25zdHJ1Y3Rvci5uYW1lICsgJ1wiIGRvZXNuXFwndCBvdmVycmlkZSBhbnkgbWV0aG9kIG9mIGJhc2UgY2xhc3MuJyk7XG5cdH1cbn1cbiJdfQ==