/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
import * as import0 from './button';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import7 from '@angular/core/src/linker/component_factory';
export declare class Wrapper_Button {
    _eventHandler: Function;
    context: import0.Button;
    _changed: boolean;
    _expr_0: any;
    _expr_1: any;
    _expr_2: any;
    _expr_3: any;
    _expr_4: any;
    _expr_5: any;
    _expr_6: any;
    _expr_7: any;
    _expr_8: any;
    _expr_9: any;
    _expr_10: any;
    _expr_11: any;
    constructor(p0: any, p1: any, p2: any, p3: any);
    ngOnDetach(view: import2.AppView<any>, componentView: import2.AppView<any>, el: any): void;
    ngOnDestroy(): void;
    check_large(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_small(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_default(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_outline(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_clear(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_solid(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_round(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_block(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_full(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_strong(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_mode(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_color(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    ngDoCheck(view: import2.AppView<any>, el: any, throwOnChange: boolean): boolean;
    checkHost(view: import2.AppView<any>, componentView: import2.AppView<any>, el: any, throwOnChange: boolean): void;
    handleEvent(eventName: string, $event: any): boolean;
    subscribe(view: import2.AppView<any>, _eventHandler: any): void;
}
export declare const ButtonNgFactory: import7.ComponentFactory<import0.Button>;
export declare class View_Button0 extends import2.AppView<import0.Button> {
    _el_0: any;
    _el_1: any;
    constructor(viewUtils: import3.ViewUtils, parentView: import2.AppView<any>, parentIndex: number, parentElement: any);
    createInternal(rootSelector: string): import7.ComponentRef<any>;
}