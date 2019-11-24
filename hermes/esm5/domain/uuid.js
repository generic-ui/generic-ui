/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:no-bitwise
/**
 * @return {?}
 */
function getRandomFromMathRandom() {
    /** @type {?} */
    var result = new Array(16);
    /** @type {?} */
    var r = 0;
    for (var i = 0; i < 16; i++) {
        if ((i & 0x03) === 0) {
            r = Math.random() * 0x100000000;
        }
        result[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }
    return (/** @type {?} */ (result));
}
/**
 * @return {?}
 */
function getRandomFunction() {
    // tslint:disable-next-line:no-string-literal
    /** @type {?} */
    var browserCrypto = window.crypto || ((/** @type {?} */ (window['msCrypto'])));
    if (browserCrypto && browserCrypto.getRandomValues) {
        // WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
        //
        // Moderately fast, high quality
        try {
            return (/**
             * @return {?}
             */
            function getRandomFromCryptoRandom() {
                /** @type {?} */
                var result = new Uint8Array(16);
                browserCrypto.getRandomValues(result);
                return (/** @type {?} */ (result));
            });
        }
        catch (e) { /* fallback*/
        }
    }
    // Math.random()-based (RNG)
    //
    // If all else fails, use Math.random().  It's fast, but is of unspecified
    // quality.
    return getRandomFromMathRandom;
}
/** @type {?} */
var getRandom = getRandomFunction();
var ByteHexMappings = /** @class */ (function () {
    function ByteHexMappings() {
        this.byteToHex = [];
        this.hexToByte = {};
        for (var i = 0; i < 256; i++) {
            this.byteToHex[i] = (i + 0x100).toString(16).substr(1);
            this.hexToByte[this.byteToHex[i]] = i;
        }
    }
    return ByteHexMappings;
}());
if (false) {
    /** @type {?} */
    ByteHexMappings.prototype.byteToHex;
    /** @type {?} */
    ByteHexMappings.prototype.hexToByte;
}
/** @type {?} */
var byteHexMappings = new ByteHexMappings();
/**
 * @return {?}
 */
export function getUuidV4() {
    /** @type {?} */
    var result = getRandom();
    // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    result[6] = (result[6] & 0x0f) | 0x40;
    result[8] = (result[8] & 0x3f) | 0x80;
    return result;
}
/**
 * @param {?} buf
 * @param {?=} offset
 * @return {?}
 */
export function uuidToString(buf, offset) {
    if (offset === void 0) { offset = 0; }
    /** @type {?} */
    var i = offset;
    /** @type {?} */
    var bth = byteHexMappings.byteToHex;
    return bth[buf[i++]] + bth[buf[i++]] +
        bth[buf[i++]] + bth[buf[i++]] + '-' +
        bth[buf[i++]] + bth[buf[i++]] + '-' +
        bth[buf[i++]] + bth[buf[i++]] + '-' +
        bth[buf[i++]] + bth[buf[i++]] + '-' +
        bth[buf[i++]] + bth[buf[i++]] +
        bth[buf[i++]] + bth[buf[i++]] +
        bth[buf[i++]] + bth[buf[i++]];
}
/**
 * @return {?}
 */
export function getUuidV4String() {
    return uuidToString(getUuidV4());
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXVpZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi91dWlkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0EsU0FBUyx1QkFBdUI7O1FBQzNCLE1BQU0sR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUM7O1FBRXRCLENBQUMsR0FBRyxDQUFDO0lBQ1QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUM1QixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNyQixDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFdBQVcsQ0FBQztTQUNoQztRQUNELE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7S0FDM0M7SUFFRCxPQUFPLG1CQUFBLE1BQU0sRUFBaUIsQ0FBQztBQUNoQyxDQUFDOzs7O0FBRUQsU0FBUyxpQkFBaUI7OztRQUVyQixhQUFhLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLG1CQUFBLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBVSxDQUFDO0lBQ25FLElBQUksYUFBYSxJQUFJLGFBQWEsQ0FBQyxlQUFlLEVBQUU7UUFDbkQsK0RBQStEO1FBQy9ELEVBQUU7UUFDRixnQ0FBZ0M7UUFDaEMsSUFBSTtZQUNIOzs7WUFBTyxTQUFTLHlCQUF5Qjs7b0JBQ3BDLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUM7Z0JBQy9CLGFBQWEsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3RDLE9BQU8sbUJBQUEsTUFBTSxFQUFPLENBQUM7WUFDdEIsQ0FBQyxFQUFDO1NBQ0Y7UUFBQyxPQUFPLENB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QVMsRUFBRSxDQUFDLENBQUM7QUFDbEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2VcbmZ1bmN0aW9uIGdldFJhbmRvbUZyb21NYXRoUmFuZG9tKCkge1xuXHRsZXQgcmVzdWx0ID0gbmV3IEFycmF5KDE2KTtcblxuXHRsZXQgciA9IDA7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xuXHRcdGlmICgoaSAmIDB4MDMpID09PSAwKSB7XG5cdFx0XHRyID0gTWF0aC5yYW5kb20oKSAqIDB4MTAwMDAwMDAwO1xuXHRcdH1cblx0XHRyZXN1bHRbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0IGFzIEFycmF5PG51bWJlcj47XG59XG5cbmZ1bmN0aW9uIGdldFJhbmRvbUZ1bmN0aW9uKCkge1xuXHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc3RyaW5nLWxpdGVyYWxcblx0bGV0IGJyb3dzZXJDcnlwdG8gPSB3aW5kb3cuY3J5cHRvIHx8ICh3aW5kb3dbJ21zQ3J5cHRvJ10gYXMgQ3J5cHRvKTtcblx0aWYgKGJyb3dzZXJDcnlwdG8gJiYgYnJvd3NlckNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcblx0XHQvLyBXSEFUV0cgY3J5cHRvLWJhc2VkIFJORyAtIGh0dHA6Ly93aWtpLndoYXR3Zy5vcmcvd2lraS9DcnlwdG9cblx0XHQvL1xuXHRcdC8vIE1vZGVyYXRlbHkgZmFzdCwgaGlnaCBxdWFsaXR5XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiBmdW5jdGlvbiBnZXRSYW5kb21Gcm9tQ3J5cHRvUmFuZG9tKCkge1xuXHRcdFx0XHRsZXQgcmVzdWx0ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuXHRcdFx0XHRicm93c2VyQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyhyZXN1bHQpO1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0IGFzIGFueTtcblx0XHRcdH07XG5cdFx0fSBjYXRjaCAoZSkgeyAvKiBmYWxsYmFjayovXG5cdFx0fVxuXHR9XG5cblx0Ly8gTWF0aC5yYW5kb20oKS1iYXNlZCAoUk5HKVxuXHQvL1xuXHQvLyBJZiBhbGwgZWxzZSBmYWlscywgdXNlIE1hdGgucmFuZG9tKCkuICBJdCdzIGZhc3QsIGJ1dCBpcyBvZiB1bnNwZWNpZmllZFxuXHQvLyBxdWFsaXR5LlxuXHRyZXR1cm4gZ2V0UmFuZG9tRnJvbU1hdGhSYW5kb207XG59XG5cbmNvbnN0IGdldFJhbmRvbSA9IGdldFJhbmRvbUZ1bmN0aW9uKCk7XG5cbmNsYXNzIEJ5dGVIZXhNYXBwaW5ncyB7XG5cdGJ5dGVUb0hleDogc3RyaW5nW10gPSBbXTtcblx0aGV4VG9CeXRlOiB7IFtoZXg6IHN0cmluZ106IG51bWJlcjsgfSA9IHt9O1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyBpKyspIHtcblx0XHRcdHRoaXMuYnl0ZVRvSGV4W2ldID0gKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKTtcblx0XHRcdHRoaXMuaGV4VG9CeXRlW3RoaXMuYnl0ZVRvSGV4W2ldXSA9IGk7XG5cdFx0fVxuXHR9XG59XG5cbmNvbnN0IGJ5dGVIZXhNYXBwaW5ncyA9IG5ldyBCeXRlSGV4TWFwcGluZ3MoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFV1aWRWNCgpIHtcblx0Y29uc3QgcmVzdWx0ID0gZ2V0UmFuZG9tKCk7XG5cblx0Ly8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXHRyZXN1bHRbNl0gPSAocmVzdWx0WzZdICYgMHgwZikgfCAweDQwO1xuXHRyZXN1bHRbOF0gPSAocmVzdWx0WzhdICYgMHgzZikgfCAweDgwO1xuXG5cdHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1dWlkVG9TdHJpbmcoYnVmOiBBcnJheTxudW1iZXI+LCBvZmZzZXQ6IG51bWJlciA9IDApIHtcblx0bGV0IGkgPSBvZmZzZXQ7XG5cdGxldCBidGggPSBieXRlSGV4TWFwcGluZ3MuYnl0ZVRvSGV4O1xuXHRyZXR1cm4gYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuXHRcdGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcblx0XHRidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG5cdFx0YnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuXHRcdGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcblx0XHRidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG5cdFx0YnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuXHRcdGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXVpZFY0U3RyaW5nKCk6IHN0cmluZyB7XG5cdHJldHVybiB1dWlkVG9TdHJpbmcoZ2V0VXVpZFY0KCkpO1xufVxuIl19