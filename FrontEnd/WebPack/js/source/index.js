import Core from "./Core";
import Loader from "./Loader";

class WebPackBundlerJS {
    constructor() {
        this.Loader = new Loader()
        this.Core = new Core();
    }
}

export default new WebPackBundlerJS()