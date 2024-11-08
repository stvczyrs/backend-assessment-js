import worker, * as OTHER_EXPORTS from "/Users/steve/Code/backend-assessment-js/src/index.ts";
import * as __MIDDLEWARE_0__ from "/Users/steve/Library/Application Support/fnm/node-versions/v18.19.0/installation/lib/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts";
const envWrappers = [__MIDDLEWARE_0__.wrap].filter(Boolean);
const facade = {
  ...worker,
  envWrappers,
  middleware: [
    __MIDDLEWARE_0__.default,
    ...(worker.middleware ? worker.middleware : []),
  ].filter(Boolean),
};
export * from "/Users/steve/Code/backend-assessment-js/src/index.ts";

const maskDurableObjectDefinition = (cls) =>
  class extends cls {
    constructor(state, env) {
      let wrappedEnv = env;
      for (const wrapFn of envWrappers) {
        wrappedEnv = wrapFn(wrappedEnv);
      }
      super(state, wrappedEnv);
    }
  };

export default facade;
