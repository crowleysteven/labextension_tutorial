import * as React from 'react';

import {
  VDomRenderer
} from '@jupyterlab/apputils';

import {
  ISignal, Signal
} from '@phosphor/signaling';

import {
  Widget, BoxLayout
} from '@phosphor/widgets';


export
class TutorialView extends VDomRenderer<any> {
  constructor() {
    super();
    this.id = `TutorialWidget`
  }

  protected render(): React.ReactElement<any>[] {
    const elements: React.ReactElement<any>[] = [];

    elements.push(<button key='header-thread' className="jp-tutorial-button">Clickme</button>);
    return elements;
  }
}

export
class TutorialWidget extends Widget {
    constructor() {
        super();
        this.id = 'TutorialWidget';
        this.title.label = 'TutorialWidget';
        this.title.closable = true;

        let layout = this.layout = new BoxLayout();
        this._vdom = new TutorialView();
        layout.addWidget(this._vdom);
    }

    get executed(): ISignal<this, Date> {
        return this._executed;
    }

    private _executed = new Signal<this, Date>(this);
    private _vdom: TutorialView;
}
