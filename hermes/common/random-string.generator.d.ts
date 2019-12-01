export declare class RandomStringGenerator {
    static byteToHex: string[];
    static hexToByte: {
        [hex: string]: number;
    };
    constructor();
    static generate(): string;
    static getUuidV4(): any;
    static uuidToString(buf: Array<number>, offset?: number): string;
    static getRandomFromMathRandom(): Array<number>;
}
