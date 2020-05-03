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
export declare function Override(container: {
    [key: string]: any;
}, key: string): void;
