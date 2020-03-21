import { Optional } from '@generic-ui/hermes';
import { FieldMatcherType } from './field.matcher.type';
export declare class FieldMatchers {
    private readonly matcher?;
    private readonly sortMatcher?;
    private readonly searchMatcher?;
    constructor(matcher?: FieldMatcherType, sortMatcher?: FieldMatcherType, searchMatcher?: FieldMatcherType);
    getMatcher(): Optional<FieldMatcherType>;
    getSortMatcher(): Optional<FieldMatcherType>;
    getSearchMatcher(): Optional<FieldMatcherType>;
}
