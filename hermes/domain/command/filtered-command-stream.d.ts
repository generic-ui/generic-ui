import { InjectionToken } from '@angular/core';
import { Subject } from 'rxjs';
import { Command } from './command';
export declare const FILTERED_COMMAND_STREAM: InjectionToken<Subject<Command>>;
