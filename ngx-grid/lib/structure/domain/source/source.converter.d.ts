import { Source } from './query/source';
import { SourceCoordinator } from './command/source-coordinator';
export declare class SourceConverter {
    convert(aggregate: SourceCoordinator): Source;
}
