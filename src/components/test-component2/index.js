import './index.less';
import comTemplate from './index.art';

class com2 {
    constructor(options) {
        this.options = options;
        this.init();
    }
    init() {
        this.options.container.innerHTML = comTemplate({
            options: this.options,
        });
    }
}

export default com2;
