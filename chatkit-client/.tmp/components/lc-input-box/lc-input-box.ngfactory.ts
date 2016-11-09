/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './lc-input-box';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/util/events';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from 'ionic-angular/components/item/item';
import * as import12 from '@angular/core/src/linker/query_list';
import * as import13 from '@angular/forms/src/directives/ng_model';
import * as import14 from '@angular/forms/src/directives/ng_control_status';
import * as import15 from 'ionic-angular/components/input/input';
import * as import16 from 'ionic-angular/components/button/button';
import * as import17 from 'ionic-angular/components/icon/icon';
import * as import18 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import19 from 'ionic-angular/util/form';
import * as import20 from 'ionic-angular/config/config';
import * as import21 from '@angular/core/src/linker/element_ref';
import * as import22 from '../../node_modules/ionic-angular/components/input/input.ngfactory';
import * as import23 from 'ionic-angular/components/app/app';
import * as import24 from 'ionic-angular/platform/platform';
import * as import25 from 'ionic-angular/components/content/content';
import * as import26 from 'ionic-angular/navigation/nav-controller';
import * as import27 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import28 from '@angular/forms/src/directives/ng_control';
var renderType_LCInputBox_Host:import0.RenderComponentType = (null as any);
class _View_LCInputBox_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _LCInputBox_0_4:import3.LCInputBox;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_LCInputBox_Host0,renderType_LCInputBox_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('lc-input-box',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_LCInputBox0(this.viewUtils,this.injector(0),this._appEl_0);
    this._LCInputBox_0_4 = new import3.LCInputBox(this.parentInjector.get(import8.Events));
    this._appEl_0.initComponent(this._LCInputBox_0_4,([] as any[]),compView_0);
    compView_0.create(this._LCInputBox_0_4,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.LCInputBox) && (0 === requestNodeIndex))) { return this._LCInputBox_0_4; }
    return notFoundResult;
  }
}
function viewFactory_LCInputBox_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_LCInputBox_Host === (null as any))) { (renderType_LCInputBox_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_LCInputBox_Host0(viewUtils,parentInjector,declarationEl);
}
export const LCInputBoxNgFactory:import10.ComponentFactory<import3.LCInputBox> = new import10.ComponentFactory<import3.LCInputBox>('lc-input-box',viewFactory_LCInputBox_Host0,import3.LCInputBox);
const styles_LCInputBox:any[] = ([] as any[]);
var renderType_LCInputBox:import0.RenderComponentType = (null as any);
class _View_LCInputBox0 extends import1.AppView<import3.LCInputBox> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _Item_0_4:import11.Item;
  _ItemContent_0_5:import11.ItemContent;
  _query_Label_0_0:import12.QueryList<any>;
  _query_Button_0_1:import12.QueryList<any>;
  _query_Icon_0_2:import12.QueryList<any>;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _NgModel_2_4:import13.NgModel;
  _NgControl_2_5:any;
  _NgControlStatus_2_6:import14.NgControlStatus;
  _TextInput_2_7:import15.TextInput;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  /*private*/ _appEl_5:import2.AppElement;
  _Button_5_4:import16.Button;
  _text_6:any;
  _el_7:any;
  _Icon_7_3:import17.Icon;
  _text_8:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_11:any;
  /*private*/ _expr_12:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_LCInputBox0,renderType_LCInputBox,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-item',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','item item-block');
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import18.viewFactory_Item0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Item_0_4 = new import11.Item(this.parentInjector.get(import19.Form),this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_0),this.renderer);
    this._ItemContent_0_5 = new import11.ItemContent();
    this._query_Label_0_0 = new import12.QueryList<any>();
    this._query_Button_0_1 = new import12.QueryList<any>();
    this._query_Icon_0_2 = new import12.QueryList<any>();
    this._appEl_0.initComponent(this._Item_0_4,([] as any[]),compView_0);
    this._text_1 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._el_2 = this.renderer.createElement((null as any),'ion-input',(null as any));
    this.renderer.setElementAttribute(this._el_2,'placeholder','说点什么');
    this.renderer.setElementAttribute(this._el_2,'type','text');
    this._appEl_2 = new import2.AppElement(2,0,this,this._el_2);
    var compView_2:any = import22.viewFactory_TextInput0(this.viewUtils,this.injector(2),this._appEl_2);
    this._NgModel_2_4 = new import13.NgModel((null as any),(null as any),(null as any),(null as any));
    this._NgControl_2_5 = this._NgModel_2_4;
    this._NgControlStatus_2_6 = new import14.NgControlStatus(this._NgControl_2_5);
    this._TextInput_2_7 = new import15.TextInput(this.parentInjector.get(import20.Config),this.parentInjector.get(import19.Form),this._Item_0_4,this.parentInjector.get(import23.App),this.parentInjector.get(import24.Platform),new import21.ElementRef(this._el_2),this.renderer,this.parentInjector.get(import25.Content,(null as any)),this.parentInjector.get(import26.NavController,(null as any)),this._NgControl_2_5);
    this._appEl_2.initComponent(this._TextInput_2_7,([] as any[]),compView_2);
    compView_2.create(this._TextInput_2_7,([] as any[]),(null as any));
    this._text_3 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._text_4 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._el_5 = this.renderer.createElement((null as any),'button',(null as any));
    this.renderer.setElementAttribute(this._el_5,'icon-right','');
    this.renderer.setElementAttribute(this._el_5,'ion-button','');
    this.renderer.setElementAttribute(this._el_5,'item-right','');
    this._appEl_5 = new import2.AppElement(5,0,this,this._el_5);
    var compView_5:any = import27.viewFactory_Button0(this.viewUtils,this.injector(5),this._appEl_5);
    this._Button_5_4 = new import16.Button((null as any),'',this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_5),this.renderer);
    this._appEl_5.initComponent(this._Button_5_4,([] as any[]),compView_5);
    this._text_6 = this.renderer.createText((null as any),'发送',(null as any));
    this._el_7 = this.renderer.createElement((null as any),'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_7,'name','send');
    this.renderer.setElementAttribute(this._el_7,'role','img');
    this._Icon_7_3 = new import17.Icon(this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_7),this.renderer);
      compView_5.create(this._Button_5_4,[([] as any[]).concat([
        this._text_6,
        this._el_7
      ]
    )],(null as any));
    this._text_8 = this.renderer.createText((null as any),'\n',(null as any));
    this._query_Label_0_0.reset(([] as any[]));
    this._Item_0_4.contentLabel = this._query_Label_0_0.first;
    compView_0.create(this._Item_0_4,[
      ([] as any[]),
      ([] as any[]),
      ([] as any[]).concat([
        this._text_1,
        this._text_3,
        this._text_4,
        this._text_8
      ]
      ),
      ([] as any[]).concat([this._el_2]),
      ([] as any[]).concat([this._el_5])
    ]
    ,(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_2,'ngModelChange',this.eventHandler(this._handle_ngModelChange_2_0.bind(this)));
    this._expr_1 = import7.UNINITIALIZED;
    const subscription_0:any = this._NgModel_2_4.update.subscribe(this.eventHandler(this._handle_ngModelChange_2_0.bind(this)));
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this._expr_8 = import7.UNINITIALIZED;
    this._expr_9 = import7.UNINITIALIZED;
    var disposable_1:Function = this.renderer.listen(this._el_5,'click',this.eventHandler(this._handle_click_5_0.bind(this)));
    this._expr_11 = import7.UNINITIALIZED;
    this._expr_12 = import7.UNINITIALIZED;
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8
    ]
    ,[
      disposable_0,
      disposable_1
    ]
    ,[subscription_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.NgModel) && (2 === requestNodeIndex))) { return this._NgModel_2_4; }
    if (((token === import28.NgControl) && (2 === requestNodeIndex))) { return this._NgControl_2_5; }
    if (((token === import14.NgControlStatus) && (2 === requestNodeIndex))) { return this._NgControlStatus_2_6; }
    if (((token === import15.TextInput) && (2 === requestNodeIndex))) { return this._TextInput_2_7; }
    if (((token === import17.Icon) && (7 === requestNodeIndex))) { return this._Icon_7_3; }
    if (((token === import16.Button) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._Button_5_4; }
    if (((token === import11.Item) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 8)))) { return this._Item_0_4; }
    if (((token === import11.ItemContent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 8)))) { return this._ItemContent_0_5; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_1:any = this.context.text;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgModel_2_4.model = currVal_1;
      if ((changes === (null as any))) { (changes = {}); }
      changes['model'] = new import7.SimpleChange(this._expr_1,currVal_1);
      this._expr_1 = currVal_1;
    }
    if ((changes !== (null as any))) { this._NgModel_2_4.ngOnChanges(changes); }
    const currVal_8:any = '说点什么';
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this._TextInput_2_7.placeholder = currVal_8;
      this._expr_8 = currVal_8;
    }
    const currVal_9:any = 'text';
    if (import4.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this._TextInput_2_7.type = currVal_9;
      this._expr_9 = currVal_9;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._TextInput_2_7.ngOnInit(); }
    const currVal_11:any = 'send';
    if (import4.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this._Icon_7_3.name = currVal_11;
      this._expr_11 = currVal_11;
    }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_Button_0_1.dirty) {
        this._query_Button_0_1.reset([this._Button_5_4]);
        this._Item_0_4._buttons = this._query_Button_0_1;
        this._query_Button_0_1.notifyOnChanges();
      }
      if (this._query_Icon_0_2.dirty) {
        this._query_Icon_0_2.reset(([] as any[]));
        this._Item_0_4._icons = this._query_Icon_0_2;
        this._query_Icon_0_2.notifyOnChanges();
      }
      this._TextInput_2_7.ngAfterContentChecked();
      if ((this.numberOfChecks === 0)) { this._Button_5_4.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Item_0_4.ngAfterContentInit(); }
    }
    const currVal_2:any = this._NgControlStatus_2_6.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementClass(this._el_2,'ng-untouched',currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = this._NgControlStatus_2_6.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementClass(this._el_2,'ng-touched',currVal_3);
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = this._NgControlStatus_2_6.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementClass(this._el_2,'ng-pristine',currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this._NgControlStatus_2_6.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementClass(this._el_2,'ng-dirty',currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this._NgControlStatus_2_6.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementClass(this._el_2,'ng-valid',currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this._NgControlStatus_2_6.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementClass(this._el_2,'ng-invalid',currVal_7);
      this._expr_7 = currVal_7;
    }
    const currVal_12:any = this._Icon_7_3._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this.renderer.setElementClass(this._el_7,'hide',currVal_12);
      this._expr_12 = currVal_12;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._NgModel_2_4.ngOnDestroy();
    this._TextInput_2_7.ngOnDestroy();
    this._Icon_7_3.ngOnDestroy();
  }
  private _handle_ngModelChange_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.context.text = $event)) !== false);
    return (true && pd_0);
  }
  private _handle_click_5_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.send()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_LCInputBox0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.LCInputBox> {
  if ((renderType_LCInputBox === (null as any))) { (renderType_LCInputBox = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,styles_LCInputBox,{})); }
  return new _View_LCInputBox0(viewUtils,parentInjector,declarationEl);
}