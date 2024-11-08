// .wrangler/tmp/bundle-Hb3bna/checked-fetch.js
var urls = /* @__PURE__ */ new Set();
function checkURL(request, init) {
  const url =
    request instanceof URL
      ? request
      : new URL(
          (typeof request === "string"
            ? new Request(request, init)
            : request
          ).url,
        );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`,
      );
    }
  }
}
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    const [request, init] = argArray;
    checkURL(request, init);
    return Reflect.apply(target, thisArg, argArray);
  },
});

// ../../Library/Application Support/fnm/node-versions/v18.19.0/installation/lib/node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    },
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware,
  ]);
}

// src/index.ts
var src_default = {
  async fetch(request, env, ctx) {
    return new Response("Hello World!");
  },
};

// ../../Library/Application Support/fnm/node-versions/v18.19.0/installation/lib/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause),
  };
}
var jsonError = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" },
    });
  }
};
var middleware_miniflare3_json_error_default = jsonError;
var wrap = void 0;

// .wrangler/tmp/bundle-Hb3bna/middleware-insertion-facade.js
var envWrappers = [wrap].filter(Boolean);
var facade = {
  ...src_default,
  envWrappers,
  middleware: [
    middleware_miniflare3_json_error_default,
    ...(src_default.middleware ? src_default.middleware : []),
  ].filter(Boolean),
};
var middleware_insertion_facade_default = facade;

// .wrangler/tmp/bundle-Hb3bna/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
var __facade_modules_fetch__ = function (request, env, ctx) {
  if (middleware_insertion_facade_default.fetch === void 0)
    throw new Error("Handler does not export a fetch() function.");
  return middleware_insertion_facade_default.fetch(request, env, ctx);
};
function getMaskedEnv(rawEnv) {
  let env = rawEnv;
  if (
    middleware_insertion_facade_default.envWrappers &&
    middleware_insertion_facade_default.envWrappers.length > 0
  ) {
    for (const wrapFn of middleware_insertion_facade_default.envWrappers) {
      env = wrapFn(env);
    }
  }
  return env;
}
var registeredMiddleware = false;
var facade2 = {
  ...(middleware_insertion_facade_default.tail && {
    tail: maskHandlerEnv(middleware_insertion_facade_default.tail),
  }),
  ...(middleware_insertion_facade_default.trace && {
    trace: maskHandlerEnv(middleware_insertion_facade_default.trace),
  }),
  ...(middleware_insertion_facade_default.scheduled && {
    scheduled: maskHandlerEnv(middleware_insertion_facade_default.scheduled),
  }),
  ...(middleware_insertion_facade_default.queue && {
    queue: maskHandlerEnv(middleware_insertion_facade_default.queue),
  }),
  ...(middleware_insertion_facade_default.test && {
    test: maskHandlerEnv(middleware_insertion_facade_default.test),
  }),
  ...(middleware_insertion_facade_default.email && {
    email: maskHandlerEnv(middleware_insertion_facade_default.email),
  }),
  fetch(request, rawEnv, ctx) {
    const env = getMaskedEnv(rawEnv);
    if (
      middleware_insertion_facade_default.middleware &&
      middleware_insertion_facade_default.middleware.length > 0
    ) {
      if (!registeredMiddleware) {
        registeredMiddleware = true;
        for (const middleware of middleware_insertion_facade_default.middleware) {
          __facade_register__(middleware);
        }
      }
      const __facade_modules_dispatch__ = function (type, init) {
        if (
          type === "scheduled" &&
          middleware_insertion_facade_default.scheduled !== void 0
        ) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {},
          );
          return middleware_insertion_facade_default.scheduled(
            controller,
            env,
            ctx,
          );
        }
      };
      return __facade_invoke__(
        request,
        env,
        ctx,
        __facade_modules_dispatch__,
        __facade_modules_fetch__,
      );
    } else {
      return __facade_modules_fetch__(request, env, ctx);
    }
  },
};
function maskHandlerEnv(handler) {
  return (data, env, ctx) => handler(data, getMaskedEnv(env), ctx);
}
var middleware_loader_entry_default = facade2;
export { middleware_loader_entry_default as default };
//# sourceMappingURL=index.js.map
