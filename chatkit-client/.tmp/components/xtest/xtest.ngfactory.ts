/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './xtest';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
var renderType_Xtest_Host:import0.RenderComponentType = (null as any);
class _View_Xtest_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _Xtest_0_4:import3.Xtest;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_Xtest_Host0,renderType_Xtest_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('xtest',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_Xtest0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Xtest_0_4 = new import3.Xtest();
    this._appEl_0.initComponent(this._Xtest_0_4,([] as any[]),compView_0);
    compView_0.create(this._Xtest_0_4,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.Xtest) && (0 === requestNodeIndex))) { return this._Xtest_0_4; }
    return notFoundResult;
  }
}
function viewFactory_Xtest_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_Xtest_Host === (null as any))) { (renderType_Xtest_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_Xtest_Host0(viewUtils,parentInjector,declarationEl);
}
export const XtestNgFactory:import9.ComponentFactory<import3.Xtest> = new import9.ComponentFactory<import3.Xtest>('xtest',viewFactory_Xtest_Host0,import3.Xtest);
const styles_Xtest:any[] = ([] as any[]);
var renderType_Xtest:import0.RenderComponentType = (null as any);
class _View_Xtest0 extends import1.AppView<import3.Xtest> {
  _text_0:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_Xtest0,renderType_Xtest,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this.init(([] as any[]),[this._text_0],([] as any[]),([] as any[]));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import4.interpolate(1,'\n\n',this.context.text,'\n');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_0,currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_Xtest0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.Xtest> {
  if ((renderType_Xtest === (null as any))) { (renderType_Xtest = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,styles_Xtest,{})); }
  return new _View_Xtest0(viewUtils,parentInjector,declarationEl);
}