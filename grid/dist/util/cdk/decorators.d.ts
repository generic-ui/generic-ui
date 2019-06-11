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
 *
 * @param container
 * @param key
 * @constructor
 */
export declare const Override: (container: {
    [key: string]: any;
}, key: string) => void;
