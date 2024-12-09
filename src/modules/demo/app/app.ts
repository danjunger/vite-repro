import { LightningElement } from 'lwc';
import Foo from '../foo/foo';
import Bar from '../bar/bar';

export default class App extends LightningElement {
    myProp: string;
    myComponent: typeof LightningElement = Foo;

    connectedCallback(): void {
        this.myProp = 'hello';
    }

    handleToggle() {
        if (this.myComponent === Foo) {
            this.myComponent = Bar;
        } else {
            this.myComponent = Foo;
        }
    }
}
