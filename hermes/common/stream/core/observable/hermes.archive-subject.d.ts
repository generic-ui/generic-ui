import { HermesSubject } from './hermes.subject';
import { HermesBehaviorSubject } from './hermes.behavior-subject';
import { HermesReplaySubject } from './hermes.replay-subject';
export declare class HermesArchiveSubject<T> extends HermesSubject<T> {
    private constructor();
    static of<T>(value?: T): HermesBehaviorSubject<T> | HermesReplaySubject<T>;
}
