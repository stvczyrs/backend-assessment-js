var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) =>
  key in obj
    ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value,
      })
    : (obj[key] = value);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// .wrangler/tmp/bundle-aHNCF1/checked-fetch.js
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

// node_modules/@neondatabase/serverless/index.mjs
var io = Object.create;
var Te = Object.defineProperty;
var so = Object.getOwnPropertyDescriptor;
var oo = Object.getOwnPropertyNames;
var ao = Object.getPrototypeOf;
var uo = Object.prototype.hasOwnProperty;
var co = (r, e, t) =>
  e in r
    ? Te(r, e, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: t,
      })
    : (r[e] = t);
var a = (r, e) => Te(r, "name", { value: e, configurable: true });
var z = (r, e) => () => (r && (e = r((r = 0))), e);
var I = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports);
var se = (r, e) => {
  for (var t in e) Te(r, t, { get: e[t], enumerable: true });
};
var Tn = (r, e, t, n) => {
  if ((e && typeof e == "object") || typeof e == "function")
    for (let i of oo(e))
      !uo.call(r, i) &&
        i !== t &&
        Te(r, i, {
          get: () => e[i],
          enumerable: !(n = so(e, i)) || n.enumerable,
        });
  return r;
};
var Ie = (r, e, t) => (
  (t = r != null ? io(ao(r)) : {}),
  Tn(
    e || !r || !r.__esModule
      ? Te(t, "default", {
          value: r,
          enumerable: true,
        })
      : t,
    r,
  )
);
var O = (r) => Tn(Te({}, "__esModule", { value: true }), r);
var _ = (r, e, t) => co(r, typeof e != "symbol" ? e + "" : e, t);
var Bn = I((st) => {
  "use strict";
  p();
  st.byteLength = lo;
  st.toByteArray = po;
  st.fromByteArray = go;
  var oe = [],
    re = [],
    ho = typeof Uint8Array < "u" ? Uint8Array : Array,
    Rt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (ve = 0, In = Rt.length; ve < In; ++ve)
    (oe[ve] = Rt[ve]), (re[Rt.charCodeAt(ve)] = ve);
  var ve, In;
  re[45] = 62;
  re[95] = 63;
  function Pn(r) {
    var e = r.length;
    if (e % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var t = r.indexOf("=");
    t === -1 && (t = e);
    var n = t === e ? 0 : 4 - (t % 4);
    return [t, n];
  }
  a(Pn, "getLens");
  function lo(r) {
    var e = Pn(r),
      t = e[0],
      n = e[1];
    return ((t + n) * 3) / 4 - n;
  }
  a(lo, "byteLength");
  function fo(r, e, t) {
    return ((e + t) * 3) / 4 - t;
  }
  a(fo, "_byteLength");
  function po(r) {
    var e,
      t = Pn(r),
      n = t[0],
      i = t[1],
      s = new ho(fo(r, n, i)),
      o = 0,
      u = i > 0 ? n - 4 : n,
      c;
    for (c = 0; c < u; c += 4)
      (e =
        (re[r.charCodeAt(c)] << 18) |
        (re[r.charCodeAt(c + 1)] << 12) |
        (re[r.charCodeAt(c + 2)] << 6) |
        re[r.charCodeAt(c + 3)]),
        (s[o++] = (e >> 16) & 255),
        (s[o++] = (e >> 8) & 255),
        (s[o++] = e & 255);
    return (
      i === 2 &&
        ((e = (re[r.charCodeAt(c)] << 2) | (re[r.charCodeAt(c + 1)] >> 4)),
        (s[o++] = e & 255)),
      i === 1 &&
        ((e =
          (re[r.charCodeAt(c)] << 10) |
          (re[r.charCodeAt(c + 1)] << 4) |
          (re[r.charCodeAt(c + 2)] >> 2)),
        (s[o++] = (e >> 8) & 255),
        (s[o++] = e & 255)),
      s
    );
  }
  a(po, "toByteArray");
  function yo(r) {
    return (
      oe[(r >> 18) & 63] + oe[(r >> 12) & 63] + oe[(r >> 6) & 63] + oe[r & 63]
    );
  }
  a(yo, "tripletToBase64");
  function mo(r, e, t) {
    for (var n, i = [], s = e; s < t; s += 3)
      (n =
        ((r[s] << 16) & 16711680) +
        ((r[s + 1] << 8) & 65280) +
        (r[s + 2] & 255)),
        i.push(yo(n));
    return i.join("");
  }
  a(mo, "encodeChunk");
  function go(r) {
    for (
      var e, t = r.length, n = t % 3, i = [], s = 16383, o = 0, u = t - n;
      o < u;
      o += s
    )
      i.push(mo(r, o, o + s > u ? u : o + s));
    return (
      n === 1
        ? ((e = r[t - 1]), i.push(oe[e >> 2] + oe[(e << 4) & 63] + "=="))
        : n === 2 &&
          ((e = (r[t - 2] << 8) + r[t - 1]),
          i.push(oe[e >> 10] + oe[(e >> 4) & 63] + oe[(e << 2) & 63] + "=")),
      i.join("")
    );
  }
  a(go, "fromByteArray");
});
var Ln = I((Ft) => {
  p();
  Ft.read = function (r, e, t, n, i) {
    var s,
      o,
      u = i * 8 - n - 1,
      c = (1 << u) - 1,
      h = c >> 1,
      l = -7,
      d = t ? i - 1 : 0,
      b = t ? -1 : 1,
      C = r[e + d];
    for (
      d += b, s = C & ((1 << -l) - 1), C >>= -l, l += u;
      l > 0;
      s = s * 256 + r[e + d], d += b, l -= 8
    );
    for (
      o = s & ((1 << -l) - 1), s >>= -l, l += n;
      l > 0;
      o = o * 256 + r[e + d], d += b, l -= 8
    );
    if (s === 0) s = 1 - h;
    else {
      if (s === c) return o ? NaN : (C ? -1 : 1) * (1 / 0);
      (o = o + Math.pow(2, n)), (s = s - h);
    }
    return (C ? -1 : 1) * o * Math.pow(2, s - n);
  };
  Ft.write = function (r, e, t, n, i, s) {
    var o,
      u,
      c,
      h = s * 8 - i - 1,
      l = (1 << h) - 1,
      d = l >> 1,
      b = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
      C = n ? 0 : s - 1,
      B = n ? 1 : -1,
      Q = e < 0 || (e === 0 && 1 / e < 0) ? 1 : 0;
    for (
      e = Math.abs(e),
        isNaN(e) || e === 1 / 0
          ? ((u = isNaN(e) ? 1 : 0), (o = l))
          : ((o = Math.floor(Math.log(e) / Math.LN2)),
            e * (c = Math.pow(2, -o)) < 1 && (o--, (c *= 2)),
            o + d >= 1 ? (e += b / c) : (e += b * Math.pow(2, 1 - d)),
            e * c >= 2 && (o++, (c /= 2)),
            o + d >= l
              ? ((u = 0), (o = l))
              : o + d >= 1
                ? ((u = (e * c - 1) * Math.pow(2, i)), (o = o + d))
                : ((u = e * Math.pow(2, d - 1) * Math.pow(2, i)), (o = 0)));
      i >= 8;
      r[t + C] = u & 255, C += B, u /= 256, i -= 8
    );
    for (
      o = (o << i) | u, h += i;
      h > 0;
      r[t + C] = o & 255, C += B, o /= 256, h -= 8
    );
    r[t + C - B] |= Q * 128;
  };
});
var Kn = I((Re) => {
  "use strict";
  p();
  var Mt = Bn(),
    Be = Ln(),
    Rn =
      typeof Symbol == "function" && typeof Symbol.for == "function"
        ? Symbol.for("nodejs.util.inspect.custom")
        : null;
  Re.Buffer = f;
  Re.SlowBuffer = xo;
  Re.INSPECT_MAX_BYTES = 50;
  var ot = 2147483647;
  Re.kMaxLength = ot;
  f.TYPED_ARRAY_SUPPORT = wo();
  !f.TYPED_ARRAY_SUPPORT &&
    typeof console < "u" &&
    typeof console.error == "function" &&
    console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.",
    );
  function wo() {
    try {
      let r = new Uint8Array(1),
        e = {
          foo: a(function () {
            return 42;
          }, "foo"),
        };
      return (
        Object.setPrototypeOf(e, Uint8Array.prototype),
        Object.setPrototypeOf(r, e),
        r.foo() === 42
      );
    } catch {
      return false;
    }
  }
  a(wo, "typedArraySupport");
  Object.defineProperty(f.prototype, "parent", {
    enumerable: true,
    get: a(function () {
      if (f.isBuffer(this)) return this.buffer;
    }, "get"),
  });
  Object.defineProperty(f.prototype, "offset", {
    enumerable: true,
    get: a(function () {
      if (f.isBuffer(this)) return this.byteOffset;
    }, "get"),
  });
  function le(r) {
    if (r > ot)
      throw new RangeError(
        'The value "' + r + '" is invalid for option "size"',
      );
    let e = new Uint8Array(r);
    return Object.setPrototypeOf(e, f.prototype), e;
  }
  a(le, "createBuffer");
  function f(r, e, t) {
    if (typeof r == "number") {
      if (typeof e == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number',
        );
      return Ot(r);
    }
    return kn(r, e, t);
  }
  a(f, "Buffer");
  f.poolSize = 8192;
  function kn(r, e, t) {
    if (typeof r == "string") return So(r, e);
    if (ArrayBuffer.isView(r)) return Eo(r);
    if (r == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
          typeof r,
      );
    if (
      ae(r, ArrayBuffer) ||
      (r && ae(r.buffer, ArrayBuffer)) ||
      (typeof SharedArrayBuffer < "u" &&
        (ae(r, SharedArrayBuffer) || (r && ae(r.buffer, SharedArrayBuffer))))
    )
      return kt(r, e, t);
    if (typeof r == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number',
      );
    let n = r.valueOf && r.valueOf();
    if (n != null && n !== r) return f.from(n, e, t);
    let i = vo(r);
    if (i) return i;
    if (
      typeof Symbol < "u" &&
      Symbol.toPrimitive != null &&
      typeof r[Symbol.toPrimitive] == "function"
    )
      return f.from(r[Symbol.toPrimitive]("string"), e, t);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
        typeof r,
    );
  }
  a(kn, "from");
  f.from = function (r, e, t) {
    return kn(r, e, t);
  };
  Object.setPrototypeOf(f.prototype, Uint8Array.prototype);
  Object.setPrototypeOf(f, Uint8Array);
  function Un(r) {
    if (typeof r != "number")
      throw new TypeError('"size" argument must be of type number');
    if (r < 0)
      throw new RangeError(
        'The value "' + r + '" is invalid for option "size"',
      );
  }
  a(Un, "assertSize");
  function bo(r, e, t) {
    return (
      Un(r),
      r <= 0
        ? le(r)
        : e !== void 0
          ? typeof t == "string"
            ? le(r).fill(e, t)
            : le(r).fill(e)
          : le(r)
    );
  }
  a(bo, "alloc");
  f.alloc = function (r, e, t) {
    return bo(r, e, t);
  };
  function Ot(r) {
    return Un(r), le(r < 0 ? 0 : Nt(r) | 0);
  }
  a(Ot, "allocUnsafe");
  f.allocUnsafe = function (r) {
    return Ot(r);
  };
  f.allocUnsafeSlow = function (r) {
    return Ot(r);
  };
  function So(r, e) {
    if (((typeof e != "string" || e === "") && (e = "utf8"), !f.isEncoding(e)))
      throw new TypeError("Unknown encoding: " + e);
    let t = On(r, e) | 0,
      n = le(t),
      i = n.write(r, e);
    return i !== t && (n = n.slice(0, i)), n;
  }
  a(So, "fromString");
  function Dt(r) {
    let e = r.length < 0 ? 0 : Nt(r.length) | 0,
      t = le(e);
    for (let n = 0; n < e; n += 1) t[n] = r[n] & 255;
    return t;
  }
  a(Dt, "fromArrayLike");
  function Eo(r) {
    if (ae(r, Uint8Array)) {
      let e = new Uint8Array(r);
      return kt(e.buffer, e.byteOffset, e.byteLength);
    }
    return Dt(r);
  }
  a(Eo, "fromArrayView");
  function kt(r, e, t) {
    if (e < 0 || r.byteLength < e)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (r.byteLength < e + (t || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let n;
    return (
      e === void 0 && t === void 0
        ? (n = new Uint8Array(r))
        : t === void 0
          ? (n = new Uint8Array(r, e))
          : (n = new Uint8Array(r, e, t)),
      Object.setPrototypeOf(n, f.prototype),
      n
    );
  }
  a(kt, "fromArrayBuffer");
  function vo(r) {
    if (f.isBuffer(r)) {
      let e = Nt(r.length) | 0,
        t = le(e);
      return t.length === 0 || r.copy(t, 0, 0, e), t;
    }
    if (r.length !== void 0)
      return typeof r.length != "number" || Qt(r.length) ? le(0) : Dt(r);
    if (r.type === "Buffer" && Array.isArray(r.data)) return Dt(r.data);
  }
  a(vo, "fromObject");
  function Nt(r) {
    if (r >= ot)
      throw new RangeError(
        "Attempt to allocate Buffer larger than maximum size: 0x" +
          ot.toString(16) +
          " bytes",
      );
    return r | 0;
  }
  a(Nt, "checked");
  function xo(r) {
    return +r != r && (r = 0), f.alloc(+r);
  }
  a(xo, "SlowBuffer");
  f.isBuffer = a(function (e) {
    return e != null && e._isBuffer === true && e !== f.prototype;
  }, "isBuffer");
  f.compare = a(function (e, t) {
    if (
      (ae(e, Uint8Array) && (e = f.from(e, e.offset, e.byteLength)),
      ae(t, Uint8Array) && (t = f.from(t, t.offset, t.byteLength)),
      !f.isBuffer(e) || !f.isBuffer(t))
    )
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
      );
    if (e === t) return 0;
    let n = e.length,
      i = t.length;
    for (let s = 0, o = Math.min(n, i); s < o; ++s)
      if (e[s] !== t[s]) {
        (n = e[s]), (i = t[s]);
        break;
      }
    return n < i ? -1 : i < n ? 1 : 0;
  }, "compare");
  f.isEncoding = a(function (e) {
    switch (String(e).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return true;
      default:
        return false;
    }
  }, "isEncoding");
  f.concat = a(function (e, t) {
    if (!Array.isArray(e))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (e.length === 0) return f.alloc(0);
    let n;
    if (t === void 0) for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
    let i = f.allocUnsafe(t),
      s = 0;
    for (n = 0; n < e.length; ++n) {
      let o = e[n];
      if (ae(o, Uint8Array))
        s + o.length > i.length
          ? (f.isBuffer(o) || (o = f.from(o)), o.copy(i, s))
          : Uint8Array.prototype.set.call(i, o, s);
      else if (f.isBuffer(o)) o.copy(i, s);
      else throw new TypeError('"list" argument must be an Array of Buffers');
      s += o.length;
    }
    return i;
  }, "concat");
  function On(r, e) {
    if (f.isBuffer(r)) return r.length;
    if (ArrayBuffer.isView(r) || ae(r, ArrayBuffer)) return r.byteLength;
    if (typeof r != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
          typeof r,
      );
    let t = r.length,
      n = arguments.length > 2 && arguments[2] === true;
    if (!n && t === 0) return 0;
    let i = false;
    for (;;)
      switch (e) {
        case "ascii":
        case "latin1":
        case "binary":
          return t;
        case "utf8":
        case "utf-8":
          return Ut(r).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return t * 2;
        case "hex":
          return t >>> 1;
        case "base64":
          return Vn(r).length;
        default:
          if (i) return n ? -1 : Ut(r).length;
          (e = ("" + e).toLowerCase()), (i = true);
      }
  }
  a(On, "byteLength");
  f.byteLength = On;
  function _o(r, e, t) {
    let n = false;
    if (
      ((e === void 0 || e < 0) && (e = 0),
      e > this.length ||
        ((t === void 0 || t > this.length) && (t = this.length), t <= 0) ||
        ((t >>>= 0), (e >>>= 0), t <= e))
    )
      return "";
    for (r || (r = "utf8"); ; )
      switch (r) {
        case "hex":
          return Mo(this, e, t);
        case "utf8":
        case "utf-8":
          return qn(this, e, t);
        case "ascii":
          return Ro(this, e, t);
        case "latin1":
        case "binary":
          return Fo(this, e, t);
        case "base64":
          return Bo(this, e, t);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Do(this, e, t);
        default:
          if (n) throw new TypeError("Unknown encoding: " + r);
          (r = (r + "").toLowerCase()), (n = true);
      }
  }
  a(_o, "slowToString");
  f.prototype._isBuffer = true;
  function xe(r, e, t) {
    let n = r[e];
    (r[e] = r[t]), (r[t] = n);
  }
  a(xe, "swap");
  f.prototype.swap16 = a(function () {
    let e = this.length;
    if (e % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let t = 0; t < e; t += 2) xe(this, t, t + 1);
    return this;
  }, "swap16");
  f.prototype.swap32 = a(function () {
    let e = this.length;
    if (e % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let t = 0; t < e; t += 4) xe(this, t, t + 3), xe(this, t + 1, t + 2);
    return this;
  }, "swap32");
  f.prototype.swap64 = a(function () {
    let e = this.length;
    if (e % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let t = 0; t < e; t += 8)
      xe(this, t, t + 7),
        xe(this, t + 1, t + 6),
        xe(this, t + 2, t + 5),
        xe(this, t + 3, t + 4);
    return this;
  }, "swap64");
  f.prototype.toString = a(function () {
    let e = this.length;
    return e === 0
      ? ""
      : arguments.length === 0
        ? qn(this, 0, e)
        : _o.apply(this, arguments);
  }, "toString");
  f.prototype.toLocaleString = f.prototype.toString;
  f.prototype.equals = a(function (e) {
    if (!f.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
    return this === e ? true : f.compare(this, e) === 0;
  }, "equals");
  f.prototype.inspect = a(function () {
    let e = "",
      t = Re.INSPECT_MAX_BYTES;
    return (
      (e = this.toString("hex", 0, t)
        .replace(/(.{2})/g, "$1 ")
        .trim()),
      this.length > t && (e += " ... "),
      "<Buffer " + e + ">"
    );
  }, "inspect");
  Rn && (f.prototype[Rn] = f.prototype.inspect);
  f.prototype.compare = a(function (e, t, n, i, s) {
    if (
      (ae(e, Uint8Array) && (e = f.from(e, e.offset, e.byteLength)),
      !f.isBuffer(e))
    )
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
          typeof e,
      );
    if (
      (t === void 0 && (t = 0),
      n === void 0 && (n = e ? e.length : 0),
      i === void 0 && (i = 0),
      s === void 0 && (s = this.length),
      t < 0 || n > e.length || i < 0 || s > this.length)
    )
      throw new RangeError("out of range index");
    if (i >= s && t >= n) return 0;
    if (i >= s) return -1;
    if (t >= n) return 1;
    if (((t >>>= 0), (n >>>= 0), (i >>>= 0), (s >>>= 0), this === e)) return 0;
    let o = s - i,
      u = n - t,
      c = Math.min(o, u),
      h = this.slice(i, s),
      l = e.slice(t, n);
    for (let d = 0; d < c; ++d)
      if (h[d] !== l[d]) {
        (o = h[d]), (u = l[d]);
        break;
      }
    return o < u ? -1 : u < o ? 1 : 0;
  }, "compare");
  function Nn(r, e, t, n, i) {
    if (r.length === 0) return -1;
    if (
      (typeof t == "string"
        ? ((n = t), (t = 0))
        : t > 2147483647
          ? (t = 2147483647)
          : t < -2147483648 && (t = -2147483648),
      (t = +t),
      Qt(t) && (t = i ? 0 : r.length - 1),
      t < 0 && (t = r.length + t),
      t >= r.length)
    ) {
      if (i) return -1;
      t = r.length - 1;
    } else if (t < 0)
      if (i) t = 0;
      else return -1;
    if ((typeof e == "string" && (e = f.from(e, n)), f.isBuffer(e)))
      return e.length === 0 ? -1 : Fn(r, e, t, n, i);
    if (typeof e == "number")
      return (
        (e = e & 255),
        typeof Uint8Array.prototype.indexOf == "function"
          ? i
            ? Uint8Array.prototype.indexOf.call(r, e, t)
            : Uint8Array.prototype.lastIndexOf.call(r, e, t)
          : Fn(r, [e], t, n, i)
      );
    throw new TypeError("val must be string, number or Buffer");
  }
  a(Nn, "bidirectionalIndexOf");
  function Fn(r, e, t, n, i) {
    let s = 1,
      o = r.length,
      u = e.length;
    if (
      n !== void 0 &&
      ((n = String(n).toLowerCase()),
      n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")
    ) {
      if (r.length < 2 || e.length < 2) return -1;
      (s = 2), (o /= 2), (u /= 2), (t /= 2);
    }
    function c(l, d) {
      return s === 1 ? l[d] : l.readUInt16BE(d * s);
    }
    a(c, "read");
    let h;
    if (i) {
      let l = -1;
      for (h = t; h < o; h++)
        if (c(r, h) === c(e, l === -1 ? 0 : h - l)) {
          if ((l === -1 && (l = h), h - l + 1 === u)) return l * s;
        } else l !== -1 && (h -= h - l), (l = -1);
    } else
      for (t + u > o && (t = o - u), h = t; h >= 0; h--) {
        let l = true;
        for (let d = 0; d < u; d++)
          if (c(r, h + d) !== c(e, d)) {
            l = false;
            break;
          }
        if (l) return h;
      }
    return -1;
  }
  a(Fn, "arrayIndexOf");
  f.prototype.includes = a(function (e, t, n) {
    return this.indexOf(e, t, n) !== -1;
  }, "includes");
  f.prototype.indexOf = a(function (e, t, n) {
    return Nn(this, e, t, n, true);
  }, "indexOf");
  f.prototype.lastIndexOf = a(function (e, t, n) {
    return Nn(this, e, t, n, false);
  }, "lastIndexOf");
  function Ao(r, e, t, n) {
    t = Number(t) || 0;
    let i = r.length - t;
    n ? ((n = Number(n)), n > i && (n = i)) : (n = i);
    let s = e.length;
    n > s / 2 && (n = s / 2);
    let o;
    for (o = 0; o < n; ++o) {
      let u = parseInt(e.substr(o * 2, 2), 16);
      if (Qt(u)) return o;
      r[t + o] = u;
    }
    return o;
  }
  a(Ao, "hexWrite");
  function Co(r, e, t, n) {
    return at(Ut(e, r.length - t), r, t, n);
  }
  a(Co, "utf8Write");
  function To(r, e, t, n) {
    return at(No(e), r, t, n);
  }
  a(To, "asciiWrite");
  function Io(r, e, t, n) {
    return at(Vn(e), r, t, n);
  }
  a(Io, "base64Write");
  function Po(r, e, t, n) {
    return at(qo(e, r.length - t), r, t, n);
  }
  a(Po, "ucs2Write");
  f.prototype.write = a(function (e, t, n, i) {
    if (t === void 0) (i = "utf8"), (n = this.length), (t = 0);
    else if (n === void 0 && typeof t == "string")
      (i = t), (n = this.length), (t = 0);
    else if (isFinite(t))
      (t = t >>> 0),
        isFinite(n)
          ? ((n = n >>> 0), i === void 0 && (i = "utf8"))
          : ((i = n), (n = void 0));
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported",
      );
    let s = this.length - t;
    if (
      ((n === void 0 || n > s) && (n = s),
      (e.length > 0 && (n < 0 || t < 0)) || t > this.length)
    )
      throw new RangeError("Attempt to write outside buffer bounds");
    i || (i = "utf8");
    let o = false;
    for (;;)
      switch (i) {
        case "hex":
          return Ao(this, e, t, n);
        case "utf8":
        case "utf-8":
          return Co(this, e, t, n);
        case "ascii":
        case "latin1":
        case "binary":
          return To(this, e, t, n);
        case "base64":
          return Io(this, e, t, n);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Po(this, e, t, n);
        default:
          if (o) throw new TypeError("Unknown encoding: " + i);
          (i = ("" + i).toLowerCase()), (o = true);
      }
  }, "write");
  f.prototype.toJSON = a(function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0),
    };
  }, "toJSON");
  function Bo(r, e, t) {
    return e === 0 && t === r.length
      ? Mt.fromByteArray(r)
      : Mt.fromByteArray(r.slice(e, t));
  }
  a(Bo, "base64Slice");
  function qn(r, e, t) {
    t = Math.min(r.length, t);
    let n = [],
      i = e;
    for (; i < t; ) {
      let s = r[i],
        o = null,
        u = s > 239 ? 4 : s > 223 ? 3 : s > 191 ? 2 : 1;
      if (i + u <= t) {
        let c, h, l, d;
        switch (u) {
          case 1:
            s < 128 && (o = s);
            break;
          case 2:
            (c = r[i + 1]),
              (c & 192) === 128 &&
                ((d = ((s & 31) << 6) | (c & 63)), d > 127 && (o = d));
            break;
          case 3:
            (c = r[i + 1]),
              (h = r[i + 2]),
              (c & 192) === 128 &&
                (h & 192) === 128 &&
                ((d = ((s & 15) << 12) | ((c & 63) << 6) | (h & 63)),
                d > 2047 && (d < 55296 || d > 57343) && (o = d));
            break;
          case 4:
            (c = r[i + 1]),
              (h = r[i + 2]),
              (l = r[i + 3]),
              (c & 192) === 128 &&
                (h & 192) === 128 &&
                (l & 192) === 128 &&
                ((d =
                  ((s & 15) << 18) |
                  ((c & 63) << 12) |
                  ((h & 63) << 6) |
                  (l & 63)),
                d > 65535 && d < 1114112 && (o = d));
        }
      }
      o === null
        ? ((o = 65533), (u = 1))
        : o > 65535 &&
          ((o -= 65536),
          n.push(((o >>> 10) & 1023) | 55296),
          (o = 56320 | (o & 1023))),
        n.push(o),
        (i += u);
    }
    return Lo(n);
  }
  a(qn, "utf8Slice");
  var Mn = 4096;
  function Lo(r) {
    let e = r.length;
    if (e <= Mn) return String.fromCharCode.apply(String, r);
    let t = "",
      n = 0;
    for (; n < e; )
      t += String.fromCharCode.apply(String, r.slice(n, (n += Mn)));
    return t;
  }
  a(Lo, "decodeCodePointsArray");
  function Ro(r, e, t) {
    let n = "";
    t = Math.min(r.length, t);
    for (let i = e; i < t; ++i) n += String.fromCharCode(r[i] & 127);
    return n;
  }
  a(Ro, "asciiSlice");
  function Fo(r, e, t) {
    let n = "";
    t = Math.min(r.length, t);
    for (let i = e; i < t; ++i) n += String.fromCharCode(r[i]);
    return n;
  }
  a(Fo, "latin1Slice");
  function Mo(r, e, t) {
    let n = r.length;
    (!e || e < 0) && (e = 0), (!t || t < 0 || t > n) && (t = n);
    let i = "";
    for (let s = e; s < t; ++s) i += Qo[r[s]];
    return i;
  }
  a(Mo, "hexSlice");
  function Do(r, e, t) {
    let n = r.slice(e, t),
      i = "";
    for (let s = 0; s < n.length - 1; s += 2)
      i += String.fromCharCode(n[s] + n[s + 1] * 256);
    return i;
  }
  a(Do, "utf16leSlice");
  f.prototype.slice = a(function (e, t) {
    let n = this.length;
    (e = ~~e),
      (t = t === void 0 ? n : ~~t),
      e < 0 ? ((e += n), e < 0 && (e = 0)) : e > n && (e = n),
      t < 0 ? ((t += n), t < 0 && (t = 0)) : t > n && (t = n),
      t < e && (t = e);
    let i = this.subarray(e, t);
    return Object.setPrototypeOf(i, f.prototype), i;
  }, "slice");
  function N(r, e, t) {
    if (r % 1 !== 0 || r < 0) throw new RangeError("offset is not uint");
    if (r + e > t)
      throw new RangeError("Trying to access beyond buffer length");
  }
  a(N, "checkOffset");
  f.prototype.readUintLE = f.prototype.readUIntLE = a(function (e, t, n) {
    (e = e >>> 0), (t = t >>> 0), n || N(e, t, this.length);
    let i = this[e],
      s = 1,
      o = 0;
    for (; ++o < t && (s *= 256); ) i += this[e + o] * s;
    return i;
  }, "readUIntLE");
  f.prototype.readUintBE = f.prototype.readUIntBE = a(function (e, t, n) {
    (e = e >>> 0), (t = t >>> 0), n || N(e, t, this.length);
    let i = this[e + --t],
      s = 1;
    for (; t > 0 && (s *= 256); ) i += this[e + --t] * s;
    return i;
  }, "readUIntBE");
  f.prototype.readUint8 = f.prototype.readUInt8 = a(function (e, t) {
    return (e = e >>> 0), t || N(e, 1, this.length), this[e];
  }, "readUInt8");
  f.prototype.readUint16LE = f.prototype.readUInt16LE = a(function (e, t) {
    return (
      (e = e >>> 0), t || N(e, 2, this.length), this[e] | (this[e + 1] << 8)
    );
  }, "readUInt16LE");
  f.prototype.readUint16BE = f.prototype.readUInt16BE = a(function (e, t) {
    return (
      (e = e >>> 0), t || N(e, 2, this.length), (this[e] << 8) | this[e + 1]
    );
  }, "readUInt16BE");
  f.prototype.readUint32LE = f.prototype.readUInt32LE = a(function (e, t) {
    return (
      (e = e >>> 0),
      t || N(e, 4, this.length),
      (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
        this[e + 3] * 16777216
    );
  }, "readUInt32LE");
  f.prototype.readUint32BE = f.prototype.readUInt32BE = a(function (e, t) {
    return (
      (e = e >>> 0),
      t || N(e, 4, this.length),
      this[e] * 16777216 +
        ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
    );
  }, "readUInt32BE");
  f.prototype.readBigUInt64LE = me(
    a(function (e) {
      (e = e >>> 0), Le(e, "offset");
      let t = this[e],
        n = this[e + 7];
      (t === void 0 || n === void 0) && We(e, this.length - 8);
      let i =
          t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24,
        s = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + n * 2 ** 24;
      return BigInt(i) + (BigInt(s) << BigInt(32));
    }, "readBigUInt64LE"),
  );
  f.prototype.readBigUInt64BE = me(
    a(function (e) {
      (e = e >>> 0), Le(e, "offset");
      let t = this[e],
        n = this[e + 7];
      (t === void 0 || n === void 0) && We(e, this.length - 8);
      let i =
          t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e],
        s = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n;
      return (BigInt(i) << BigInt(32)) + BigInt(s);
    }, "readBigUInt64BE"),
  );
  f.prototype.readIntLE = a(function (e, t, n) {
    (e = e >>> 0), (t = t >>> 0), n || N(e, t, this.length);
    let i = this[e],
      s = 1,
      o = 0;
    for (; ++o < t && (s *= 256); ) i += this[e + o] * s;
    return (s *= 128), i >= s && (i -= Math.pow(2, 8 * t)), i;
  }, "readIntLE");
  f.prototype.readIntBE = a(function (e, t, n) {
    (e = e >>> 0), (t = t >>> 0), n || N(e, t, this.length);
    let i = t,
      s = 1,
      o = this[e + --i];
    for (; i > 0 && (s *= 256); ) o += this[e + --i] * s;
    return (s *= 128), o >= s && (o -= Math.pow(2, 8 * t)), o;
  }, "readIntBE");
  f.prototype.readInt8 = a(function (e, t) {
    return (
      (e = e >>> 0),
      t || N(e, 1, this.length),
      this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e]
    );
  }, "readInt8");
  f.prototype.readInt16LE = a(function (e, t) {
    (e = e >>> 0), t || N(e, 2, this.length);
    let n = this[e] | (this[e + 1] << 8);
    return n & 32768 ? n | 4294901760 : n;
  }, "readInt16LE");
  f.prototype.readInt16BE = a(function (e, t) {
    (e = e >>> 0), t || N(e, 2, this.length);
    let n = this[e + 1] | (this[e] << 8);
    return n & 32768 ? n | 4294901760 : n;
  }, "readInt16BE");
  f.prototype.readInt32LE = a(function (e, t) {
    return (
      (e = e >>> 0),
      t || N(e, 4, this.length),
      this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24)
    );
  }, "readInt32LE");
  f.prototype.readInt32BE = a(function (e, t) {
    return (
      (e = e >>> 0),
      t || N(e, 4, this.length),
      (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]
    );
  }, "readInt32BE");
  f.prototype.readBigInt64LE = me(
    a(function (e) {
      (e = e >>> 0), Le(e, "offset");
      let t = this[e],
        n = this[e + 7];
      (t === void 0 || n === void 0) && We(e, this.length - 8);
      let i =
        this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (n << 24);
      return (
        (BigInt(i) << BigInt(32)) +
        BigInt(
          t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24,
        )
      );
    }, "readBigInt64LE"),
  );
  f.prototype.readBigInt64BE = me(
    a(function (e) {
      (e = e >>> 0), Le(e, "offset");
      let t = this[e],
        n = this[e + 7];
      (t === void 0 || n === void 0) && We(e, this.length - 8);
      let i = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
      return (
        (BigInt(i) << BigInt(32)) +
        BigInt(
          this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n,
        )
      );
    }, "readBigInt64BE"),
  );
  f.prototype.readFloatLE = a(function (e, t) {
    return (
      (e = e >>> 0), t || N(e, 4, this.length), Be.read(this, e, true, 23, 4)
    );
  }, "readFloatLE");
  f.prototype.readFloatBE = a(function (e, t) {
    return (
      (e = e >>> 0), t || N(e, 4, this.length), Be.read(this, e, false, 23, 4)
    );
  }, "readFloatBE");
  f.prototype.readDoubleLE = a(function (e, t) {
    return (
      (e = e >>> 0), t || N(e, 8, this.length), Be.read(this, e, true, 52, 8)
    );
  }, "readDoubleLE");
  f.prototype.readDoubleBE = a(function (e, t) {
    return (
      (e = e >>> 0), t || N(e, 8, this.length), Be.read(this, e, false, 52, 8)
    );
  }, "readDoubleBE");
  function Y(r, e, t, n, i, s) {
    if (!f.isBuffer(r))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (e > i || e < s)
      throw new RangeError('"value" argument is out of bounds');
    if (t + n > r.length) throw new RangeError("Index out of range");
  }
  a(Y, "checkInt");
  f.prototype.writeUintLE = f.prototype.writeUIntLE = a(function (e, t, n, i) {
    if (((e = +e), (t = t >>> 0), (n = n >>> 0), !i)) {
      let u = Math.pow(2, 8 * n) - 1;
      Y(this, e, t, n, u, 0);
    }
    let s = 1,
      o = 0;
    for (this[t] = e & 255; ++o < n && (s *= 256); )
      this[t + o] = (e / s) & 255;
    return t + n;
  }, "writeUIntLE");
  f.prototype.writeUintBE = f.prototype.writeUIntBE = a(function (e, t, n, i) {
    if (((e = +e), (t = t >>> 0), (n = n >>> 0), !i)) {
      let u = Math.pow(2, 8 * n) - 1;
      Y(this, e, t, n, u, 0);
    }
    let s = n - 1,
      o = 1;
    for (this[t + s] = e & 255; --s >= 0 && (o *= 256); )
      this[t + s] = (e / o) & 255;
    return t + n;
  }, "writeUIntBE");
  f.prototype.writeUint8 = f.prototype.writeUInt8 = a(function (e, t, n) {
    return (
      (e = +e),
      (t = t >>> 0),
      n || Y(this, e, t, 1, 255, 0),
      (this[t] = e & 255),
      t + 1
    );
  }, "writeUInt8");
  f.prototype.writeUint16LE = f.prototype.writeUInt16LE = a(function (e, t, n) {
    return (
      (e = +e),
      (t = t >>> 0),
      n || Y(this, e, t, 2, 65535, 0),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      t + 2
    );
  }, "writeUInt16LE");
  f.prototype.writeUint16BE = f.prototype.writeUInt16BE = a(function (e, t, n) {
    return (
      (e = +e),
      (t = t >>> 0),
      n || Y(this, e, t, 2, 65535, 0),
      (this[t] = e >>> 8),
      (this[t + 1] = e & 255),
      t + 2
    );
  }, "writeUInt16BE");
  f.prototype.writeUint32LE = f.prototype.writeUInt32LE = a(function (e, t, n) {
    return (
      (e = +e),
      (t = t >>> 0),
      n || Y(this, e, t, 4, 4294967295, 0),
      (this[t + 3] = e >>> 24),
      (this[t + 2] = e >>> 16),
      (this[t + 1] = e >>> 8),
      (this[t] = e & 255),
      t + 4
    );
  }, "writeUInt32LE");
  f.prototype.writeUint32BE = f.prototype.writeUInt32BE = a(function (e, t, n) {
    return (
      (e = +e),
      (t = t >>> 0),
      n || Y(this, e, t, 4, 4294967295, 0),
      (this[t] = e >>> 24),
      (this[t + 1] = e >>> 16),
      (this[t + 2] = e >>> 8),
      (this[t + 3] = e & 255),
      t + 4
    );
  }, "writeUInt32BE");
  function Qn(r, e, t, n, i) {
    $n(e, n, i, r, t, 7);
    let s = Number(e & BigInt(4294967295));
    (r[t++] = s),
      (s = s >> 8),
      (r[t++] = s),
      (s = s >> 8),
      (r[t++] = s),
      (s = s >> 8),
      (r[t++] = s);
    let o = Number((e >> BigInt(32)) & BigInt(4294967295));
    return (
      (r[t++] = o),
      (o = o >> 8),
      (r[t++] = o),
      (o = o >> 8),
      (r[t++] = o),
      (o = o >> 8),
      (r[t++] = o),
      t
    );
  }
  a(Qn, "wrtBigUInt64LE");
  function jn(r, e, t, n, i) {
    $n(e, n, i, r, t, 7);
    let s = Number(e & BigInt(4294967295));
    (r[t + 7] = s),
      (s = s >> 8),
      (r[t + 6] = s),
      (s = s >> 8),
      (r[t + 5] = s),
      (s = s >> 8),
      (r[t + 4] = s);
    let o = Number((e >> BigInt(32)) & BigInt(4294967295));
    return (
      (r[t + 3] = o),
      (o = o >> 8),
      (r[t + 2] = o),
      (o = o >> 8),
      (r[t + 1] = o),
      (o = o >> 8),
      (r[t] = o),
      t + 8
    );
  }
  a(jn, "wrtBigUInt64BE");
  f.prototype.writeBigUInt64LE = me(
    a(function (e, t = 0) {
      return Qn(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
    }, "writeBigUInt64LE"),
  );
  f.prototype.writeBigUInt64BE = me(
    a(function (e, t = 0) {
      return jn(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
    }, "writeBigUInt64BE"),
  );
  f.prototype.writeIntLE = a(function (e, t, n, i) {
    if (((e = +e), (t = t >>> 0), !i)) {
      let c = Math.pow(2, 8 * n - 1);
      Y(this, e, t, n, c - 1, -c);
    }
    let s = 0,
      o = 1,
      u = 0;
    for (this[t] = e & 255; ++s < n && (o *= 256); )
      e < 0 && u === 0 && this[t + s - 1] !== 0 && (u = 1),
        (this[t + s] = (((e / o) >> 0) - u) & 255);
    return t + n;
  }, "writeIntLE");
  f.prototype.writeIntBE = a(function (e, t, n, i) {
    if (((e = +e), (t = t >>> 0), !i)) {
      let c = Math.pow(2, 8 * n - 1);
      Y(this, e, t, n, c - 1, -c);
    }
    let s = n - 1,
      o = 1,
      u = 0;
    for (this[t + s] = e & 255; --s >= 0 && (o *= 256); )
      e < 0 && u === 0 && this[t + s + 1] !== 0 && (u = 1),
        (this[t + s] = (((e / o) >> 0) - u) & 255);
    return t + n;
  }, "writeIntBE");
  f.prototype.writeInt8 = a(function (e, t, n) {
    return (
      (e = +e),
      (t = t >>> 0),
      n || Y(this, e, t, 1, 127, -128),
      e < 0 && (e = 255 + e + 1),
      (this[t] = e & 255),
      t + 1
    );
  }, "writeInt8");
  f.prototype.writeInt16LE = a(function (e, t, n) {
    return (
      (e = +e),
      (t = t >>> 0),
      n || Y(this, e, t, 2, 32767, -32768),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      t + 2
    );
  }, "writeInt16LE");
  f.prototype.writeInt16BE = a(function (e, t, n) {
    return (
      (e = +e),
      (t = t >>> 0),
      n || Y(this, e, t, 2, 32767, -32768),
      (this[t] = e >>> 8),
      (this[t + 1] = e & 255),
      t + 2
    );
  }, "writeInt16BE");
  f.prototype.writeInt32LE = a(function (e, t, n) {
    return (
      (e = +e),
      (t = t >>> 0),
      n || Y(this, e, t, 4, 2147483647, -2147483648),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      (this[t + 2] = e >>> 16),
      (this[t + 3] = e >>> 24),
      t + 4
    );
  }, "writeInt32LE");
  f.prototype.writeInt32BE = a(function (e, t, n) {
    return (
      (e = +e),
      (t = t >>> 0),
      n || Y(this, e, t, 4, 2147483647, -2147483648),
      e < 0 && (e = 4294967295 + e + 1),
      (this[t] = e >>> 24),
      (this[t + 1] = e >>> 16),
      (this[t + 2] = e >>> 8),
      (this[t + 3] = e & 255),
      t + 4
    );
  }, "writeInt32BE");
  f.prototype.writeBigInt64LE = me(
    a(function (e, t = 0) {
      return Qn(
        this,
        e,
        t,
        -BigInt("0x8000000000000000"),
        BigInt("0x7fffffffffffffff"),
      );
    }, "writeBigInt64LE"),
  );
  f.prototype.writeBigInt64BE = me(
    a(function (e, t = 0) {
      return jn(
        this,
        e,
        t,
        -BigInt("0x8000000000000000"),
        BigInt("0x7fffffffffffffff"),
      );
    }, "writeBigInt64BE"),
  );
  function Wn(r, e, t, n, i, s) {
    if (t + n > r.length) throw new RangeError("Index out of range");
    if (t < 0) throw new RangeError("Index out of range");
  }
  a(Wn, "checkIEEE754");
  function Hn(r, e, t, n, i) {
    return (
      (e = +e),
      (t = t >>> 0),
      i || Wn(r, e, t, 4, 34028234663852886e22, -34028234663852886e22),
      Be.write(r, e, t, n, 23, 4),
      t + 4
    );
  }
  a(Hn, "writeFloat");
  f.prototype.writeFloatLE = a(function (e, t, n) {
    return Hn(this, e, t, true, n);
  }, "writeFloatLE");
  f.prototype.writeFloatBE = a(function (e, t, n) {
    return Hn(this, e, t, false, n);
  }, "writeFloatBE");
  function Gn(r, e, t, n, i) {
    return (
      (e = +e),
      (t = t >>> 0),
      i || Wn(r, e, t, 8, 17976931348623157e292, -17976931348623157e292),
      Be.write(r, e, t, n, 52, 8),
      t + 8
    );
  }
  a(Gn, "writeDouble");
  f.prototype.writeDoubleLE = a(function (e, t, n) {
    return Gn(this, e, t, true, n);
  }, "writeDoubleLE");
  f.prototype.writeDoubleBE = a(function (e, t, n) {
    return Gn(this, e, t, false, n);
  }, "writeDoubleBE");
  f.prototype.copy = a(function (e, t, n, i) {
    if (!f.isBuffer(e)) throw new TypeError("argument should be a Buffer");
    if (
      (n || (n = 0),
      !i && i !== 0 && (i = this.length),
      t >= e.length && (t = e.length),
      t || (t = 0),
      i > 0 && i < n && (i = n),
      i === n || e.length === 0 || this.length === 0)
    )
      return 0;
    if (t < 0) throw new RangeError("targetStart out of bounds");
    if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
    if (i < 0) throw new RangeError("sourceEnd out of bounds");
    i > this.length && (i = this.length),
      e.length - t < i - n && (i = e.length - t + n);
    let s = i - n;
    return (
      this === e && typeof Uint8Array.prototype.copyWithin == "function"
        ? this.copyWithin(t, n, i)
        : Uint8Array.prototype.set.call(e, this.subarray(n, i), t),
      s
    );
  }, "copy");
  f.prototype.fill = a(function (e, t, n, i) {
    if (typeof e == "string") {
      if (
        (typeof t == "string"
          ? ((i = t), (t = 0), (n = this.length))
          : typeof n == "string" && ((i = n), (n = this.length)),
        i !== void 0 && typeof i != "string")
      )
        throw new TypeError("encoding must be a string");
      if (typeof i == "string" && !f.isEncoding(i))
        throw new TypeError("Unknown encoding: " + i);
      if (e.length === 1) {
        let o = e.charCodeAt(0);
        ((i === "utf8" && o < 128) || i === "latin1") && (e = o);
      }
    } else
      typeof e == "number"
        ? (e = e & 255)
        : typeof e == "boolean" && (e = Number(e));
    if (t < 0 || this.length < t || this.length < n)
      throw new RangeError("Out of range index");
    if (n <= t) return this;
    (t = t >>> 0), (n = n === void 0 ? this.length : n >>> 0), e || (e = 0);
    let s;
    if (typeof e == "number") for (s = t; s < n; ++s) this[s] = e;
    else {
      let o = f.isBuffer(e) ? e : f.from(e, i),
        u = o.length;
      if (u === 0)
        throw new TypeError(
          'The value "' + e + '" is invalid for argument "value"',
        );
      for (s = 0; s < n - t; ++s) this[s + t] = o[s % u];
    }
    return this;
  }, "fill");
  var Pe = {};
  function qt(r, e, t) {
    var n;
    Pe[r] =
      ((n = class extends t {
        constructor() {
          super(),
            Object.defineProperty(this, "message", {
              value: e.apply(this, arguments),
              writable: true,
              configurable: true,
            }),
            (this.name = `${this.name} [${r}]`),
            this.stack,
            delete this.name;
        }
        get code() {
          return r;
        }
        set code(s) {
          Object.defineProperty(this, "code", {
            configurable: true,
            enumerable: true,
            value: s,
            writable: true,
          });
        }
        toString() {
          return `${this.name} [${r}]: ${this.message}`;
        }
      }),
      a(n, "NodeError"),
      n);
  }
  a(qt, "E");
  qt(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function (r) {
      return r
        ? `${r} is outside of buffer bounds`
        : "Attempt to access memory outside buffer bounds";
    },
    RangeError,
  );
  qt(
    "ERR_INVALID_ARG_TYPE",
    function (r, e) {
      return `The "${r}" argument must be of type number. Received type ${typeof e}`;
    },
    TypeError,
  );
  qt(
    "ERR_OUT_OF_RANGE",
    function (r, e, t) {
      let n = `The value of "${r}" is out of range.`,
        i = t;
      return (
        Number.isInteger(t) && Math.abs(t) > 2 ** 32
          ? (i = Dn(String(t)))
          : typeof t == "bigint" &&
            ((i = String(t)),
            (t > BigInt(2) ** BigInt(32) || t < -(BigInt(2) ** BigInt(32))) &&
              (i = Dn(i)),
            (i += "n")),
        (n += ` It must be ${e}. Received ${i}`),
        n
      );
    },
    RangeError,
  );
  function Dn(r) {
    let e = "",
      t = r.length,
      n = r[0] === "-" ? 1 : 0;
    for (; t >= n + 4; t -= 3) e = `_${r.slice(t - 3, t)}${e}`;
    return `${r.slice(0, t)}${e}`;
  }
  a(Dn, "addNumericalSeparator");
  function ko(r, e, t) {
    Le(e, "offset"),
      (r[e] === void 0 || r[e + t] === void 0) && We(e, r.length - (t + 1));
  }
  a(ko, "checkBounds");
  function $n(r, e, t, n, i, s) {
    if (r > t || r < e) {
      let o = typeof e == "bigint" ? "n" : "",
        u;
      throw (
        (s > 3
          ? e === 0 || e === BigInt(0)
            ? (u = `>= 0${o} and < 2${o} ** ${(s + 1) * 8}${o}`)
            : (u = `>= -(2${o} ** ${(s + 1) * 8 - 1}${o}) and < 2 ** ${(s + 1) * 8 - 1}${o}`)
          : (u = `>= ${e}${o} and <= ${t}${o}`),
        new Pe.ERR_OUT_OF_RANGE("value", u, r))
      );
    }
    ko(n, i, s);
  }
  a($n, "checkIntBI");
  function Le(r, e) {
    if (typeof r != "number") throw new Pe.ERR_INVALID_ARG_TYPE(e, "number", r);
  }
  a(Le, "validateNumber");
  function We(r, e, t) {
    throw Math.floor(r) !== r
      ? (Le(r, t), new Pe.ERR_OUT_OF_RANGE(t || "offset", "an integer", r))
      : e < 0
        ? new Pe.ERR_BUFFER_OUT_OF_BOUNDS()
        : new Pe.ERR_OUT_OF_RANGE(
            t || "offset",
            `>= ${t ? 1 : 0} and <= ${e}`,
            r,
          );
  }
  a(We, "boundsError");
  var Uo = /[^+/0-9A-Za-z-_]/g;
  function Oo(r) {
    if (((r = r.split("=")[0]), (r = r.trim().replace(Uo, "")), r.length < 2))
      return "";
    for (; r.length % 4 !== 0; ) r = r + "=";
    return r;
  }
  a(Oo, "base64clean");
  function Ut(r, e) {
    e = e || 1 / 0;
    let t,
      n = r.length,
      i = null,
      s = [];
    for (let o = 0; o < n; ++o) {
      if (((t = r.charCodeAt(o)), t > 55295 && t < 57344)) {
        if (!i) {
          if (t > 56319) {
            (e -= 3) > -1 && s.push(239, 191, 189);
            continue;
          } else if (o + 1 === n) {
            (e -= 3) > -1 && s.push(239, 191, 189);
            continue;
          }
          i = t;
          continue;
        }
        if (t < 56320) {
          (e -= 3) > -1 && s.push(239, 191, 189), (i = t);
          continue;
        }
        t = (((i - 55296) << 10) | (t - 56320)) + 65536;
      } else i && (e -= 3) > -1 && s.push(239, 191, 189);
      if (((i = null), t < 128)) {
        if ((e -= 1) < 0) break;
        s.push(t);
      } else if (t < 2048) {
        if ((e -= 2) < 0) break;
        s.push((t >> 6) | 192, (t & 63) | 128);
      } else if (t < 65536) {
        if ((e -= 3) < 0) break;
        s.push((t >> 12) | 224, ((t >> 6) & 63) | 128, (t & 63) | 128);
      } else if (t < 1114112) {
        if ((e -= 4) < 0) break;
        s.push(
          (t >> 18) | 240,
          ((t >> 12) & 63) | 128,
          ((t >> 6) & 63) | 128,
          (t & 63) | 128,
        );
      } else throw new Error("Invalid code point");
    }
    return s;
  }
  a(Ut, "utf8ToBytes");
  function No(r) {
    let e = [];
    for (let t = 0; t < r.length; ++t) e.push(r.charCodeAt(t) & 255);
    return e;
  }
  a(No, "asciiToBytes");
  function qo(r, e) {
    let t,
      n,
      i,
      s = [];
    for (let o = 0; o < r.length && !((e -= 2) < 0); ++o)
      (t = r.charCodeAt(o)), (n = t >> 8), (i = t % 256), s.push(i), s.push(n);
    return s;
  }
  a(qo, "utf16leToBytes");
  function Vn(r) {
    return Mt.toByteArray(Oo(r));
  }
  a(Vn, "base64ToBytes");
  function at(r, e, t, n) {
    let i;
    for (i = 0; i < n && !(i + t >= e.length || i >= r.length); ++i)
      e[i + t] = r[i];
    return i;
  }
  a(at, "blitBuffer");
  function ae(r, e) {
    return (
      r instanceof e ||
      (r != null &&
        r.constructor != null &&
        r.constructor.name != null &&
        r.constructor.name === e.name)
    );
  }
  a(ae, "isInstance");
  function Qt(r) {
    return r !== r;
  }
  a(Qt, "numberIsNaN");
  var Qo = (function () {
    let r = "0123456789abcdef",
      e = new Array(256);
    for (let t = 0; t < 16; ++t) {
      let n = t * 16;
      for (let i = 0; i < 16; ++i) e[n + i] = r[t] + r[i];
    }
    return e;
  })();
  function me(r) {
    return typeof BigInt > "u" ? jo : r;
  }
  a(me, "defineBigIntMethod");
  function jo() {
    throw new Error("BigInt not supported");
  }
  a(jo, "BufferBigIntNotDefined");
});
var S;
var E;
var v;
var w;
var y;
var m;
var p = z(() => {
  "use strict";
  (S = globalThis),
    (E = globalThis.setImmediate ?? ((r) => setTimeout(r, 0))),
    (v = globalThis.clearImmediate ?? ((r) => clearTimeout(r))),
    (w = globalThis.crypto ?? {});
  w.subtle ?? (w.subtle = {});
  (y =
    typeof globalThis.Buffer == "function" &&
    typeof globalThis.Buffer.allocUnsafe == "function"
      ? globalThis.Buffer
      : Kn().Buffer),
    (m = globalThis.process ?? {});
  m.env ?? (m.env = {});
  try {
    m.nextTick(() => {});
  } catch {
    let e = Promise.resolve();
    m.nextTick = e.then.bind(e);
  }
});
var ge = I((rh, jt) => {
  "use strict";
  p();
  var Fe = typeof Reflect == "object" ? Reflect : null,
    zn =
      Fe && typeof Fe.apply == "function"
        ? Fe.apply
        : a(function (e, t, n) {
            return Function.prototype.apply.call(e, t, n);
          }, "ReflectApply"),
    ut;
  Fe && typeof Fe.ownKeys == "function"
    ? (ut = Fe.ownKeys)
    : Object.getOwnPropertySymbols
      ? (ut = a(function (e) {
          return Object.getOwnPropertyNames(e).concat(
            Object.getOwnPropertySymbols(e),
          );
        }, "ReflectOwnKeys"))
      : (ut = a(function (e) {
          return Object.getOwnPropertyNames(e);
        }, "ReflectOwnKeys"));
  function Wo(r) {
    console && console.warn && console.warn(r);
  }
  a(Wo, "ProcessEmitWarning");
  var Zn =
    Number.isNaN ||
    a(function (e) {
      return e !== e;
    }, "NumberIsNaN");
  function L() {
    L.init.call(this);
  }
  a(L, "EventEmitter");
  jt.exports = L;
  jt.exports.once = Vo;
  L.EventEmitter = L;
  L.prototype._events = void 0;
  L.prototype._eventsCount = 0;
  L.prototype._maxListeners = void 0;
  var Yn = 10;
  function ct(r) {
    if (typeof r != "function")
      throw new TypeError(
        'The "listener" argument must be of type Function. Received type ' +
          typeof r,
      );
  }
  a(ct, "checkListener");
  Object.defineProperty(L, "defaultMaxListeners", {
    enumerable: true,
    get: a(function () {
      return Yn;
    }, "get"),
    set: a(function (r) {
      if (typeof r != "number" || r < 0 || Zn(r))
        throw new RangeError(
          'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
            r +
            ".",
        );
      Yn = r;
    }, "set"),
  });
  L.init = function () {
    (this._events === void 0 ||
      this._events === Object.getPrototypeOf(this)._events) &&
      ((this._events = /* @__PURE__ */ Object.create(null)),
      (this._eventsCount = 0)),
      (this._maxListeners = this._maxListeners || void 0);
  };
  L.prototype.setMaxListeners = a(function (e) {
    if (typeof e != "number" || e < 0 || Zn(e))
      throw new RangeError(
        'The value of "n" is out of range. It must be a non-negative number. Received ' +
          e +
          ".",
      );
    return (this._maxListeners = e), this;
  }, "setMaxListeners");
  function Jn(r) {
    return r._maxListeners === void 0 ? L.defaultMaxListeners : r._maxListeners;
  }
  a(Jn, "_getMaxListeners");
  L.prototype.getMaxListeners = a(function () {
    return Jn(this);
  }, "getMaxListeners");
  L.prototype.emit = a(function (e) {
    for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
    var i = e === "error",
      s = this._events;
    if (s !== void 0) i = i && s.error === void 0;
    else if (!i) return false;
    if (i) {
      var o;
      if ((t.length > 0 && (o = t[0]), o instanceof Error)) throw o;
      var u = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
      throw ((u.context = o), u);
    }
    var c = s[e];
    if (c === void 0) return false;
    if (typeof c == "function") zn(c, this, t);
    else
      for (var h = c.length, l = ni(c, h), n = 0; n < h; ++n) zn(l[n], this, t);
    return true;
  }, "emit");
  function Xn(r, e, t, n) {
    var i, s, o;
    if (
      (ct(t),
      (s = r._events),
      s === void 0
        ? ((s = r._events = /* @__PURE__ */ Object.create(null)),
          (r._eventsCount = 0))
        : (s.newListener !== void 0 &&
            (r.emit("newListener", e, t.listener ? t.listener : t),
            (s = r._events)),
          (o = s[e])),
      o === void 0)
    )
      (o = s[e] = t), ++r._eventsCount;
    else if (
      (typeof o == "function"
        ? (o = s[e] = n ? [t, o] : [o, t])
        : n
          ? o.unshift(t)
          : o.push(t),
      (i = Jn(r)),
      i > 0 && o.length > i && !o.warned)
    ) {
      o.warned = true;
      var u = new Error(
        "Possible EventEmitter memory leak detected. " +
          o.length +
          " " +
          String(e) +
          " listeners added. Use emitter.setMaxListeners() to increase limit",
      );
      (u.name = "MaxListenersExceededWarning"),
        (u.emitter = r),
        (u.type = e),
        (u.count = o.length),
        Wo(u);
    }
    return r;
  }
  a(Xn, "_addListener");
  L.prototype.addListener = a(function (e, t) {
    return Xn(this, e, t, false);
  }, "addListener");
  L.prototype.on = L.prototype.addListener;
  L.prototype.prependListener = a(function (e, t) {
    return Xn(this, e, t, true);
  }, "prependListener");
  function Ho() {
    if (!this.fired)
      return (
        this.target.removeListener(this.type, this.wrapFn),
        (this.fired = true),
        arguments.length === 0
          ? this.listener.call(this.target)
          : this.listener.apply(this.target, arguments)
      );
  }
  a(Ho, "onceWrapper");
  function ei(r, e, t) {
    var n = {
        fired: false,
        wrapFn: void 0,
        target: r,
        type: e,
        listener: t,
      },
      i = Ho.bind(n);
    return (i.listener = t), (n.wrapFn = i), i;
  }
  a(ei, "_onceWrap");
  L.prototype.once = a(function (e, t) {
    return ct(t), this.on(e, ei(this, e, t)), this;
  }, "once");
  L.prototype.prependOnceListener = a(function (e, t) {
    return ct(t), this.prependListener(e, ei(this, e, t)), this;
  }, "prependOnceListener");
  L.prototype.removeListener = a(function (e, t) {
    var n, i, s, o, u;
    if ((ct(t), (i = this._events), i === void 0)) return this;
    if (((n = i[e]), n === void 0)) return this;
    if (n === t || n.listener === t)
      --this._eventsCount === 0
        ? (this._events = /* @__PURE__ */ Object.create(null))
        : (delete i[e],
          i.removeListener && this.emit("removeListener", e, n.listener || t));
    else if (typeof n != "function") {
      for (s = -1, o = n.length - 1; o >= 0; o--)
        if (n[o] === t || n[o].listener === t) {
          (u = n[o].listener), (s = o);
          break;
        }
      if (s < 0) return this;
      s === 0 ? n.shift() : Go(n, s),
        n.length === 1 && (i[e] = n[0]),
        i.removeListener !== void 0 && this.emit("removeListener", e, u || t);
    }
    return this;
  }, "removeListener");
  L.prototype.off = L.prototype.removeListener;
  L.prototype.removeAllListeners = a(function (e) {
    var t, n, i;
    if (((n = this._events), n === void 0)) return this;
    if (n.removeListener === void 0)
      return (
        arguments.length === 0
          ? ((this._events = /* @__PURE__ */ Object.create(null)),
            (this._eventsCount = 0))
          : n[e] !== void 0 &&
            (--this._eventsCount === 0
              ? (this._events = /* @__PURE__ */ Object.create(null))
              : delete n[e]),
        this
      );
    if (arguments.length === 0) {
      var s = Object.keys(n),
        o;
      for (i = 0; i < s.length; ++i)
        (o = s[i]), o !== "removeListener" && this.removeAllListeners(o);
      return (
        this.removeAllListeners("removeListener"),
        (this._events = /* @__PURE__ */ Object.create(null)),
        (this._eventsCount = 0),
        this
      );
    }
    if (((t = n[e]), typeof t == "function")) this.removeListener(e, t);
    else if (t !== void 0)
      for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]);
    return this;
  }, "removeAllListeners");
  function ti(r, e, t) {
    var n = r._events;
    if (n === void 0) return [];
    var i = n[e];
    return i === void 0
      ? []
      : typeof i == "function"
        ? t
          ? [i.listener || i]
          : [i]
        : t
          ? $o(i)
          : ni(i, i.length);
  }
  a(ti, "_listeners");
  L.prototype.listeners = a(function (e) {
    return ti(this, e, true);
  }, "listeners");
  L.prototype.rawListeners = a(function (e) {
    return ti(this, e, false);
  }, "rawListeners");
  L.listenerCount = function (r, e) {
    return typeof r.listenerCount == "function"
      ? r.listenerCount(e)
      : ri.call(r, e);
  };
  L.prototype.listenerCount = ri;
  function ri(r) {
    var e = this._events;
    if (e !== void 0) {
      var t = e[r];
      if (typeof t == "function") return 1;
      if (t !== void 0) return t.length;
    }
    return 0;
  }
  a(ri, "listenerCount");
  L.prototype.eventNames = a(function () {
    return this._eventsCount > 0 ? ut(this._events) : [];
  }, "eventNames");
  function ni(r, e) {
    for (var t = new Array(e), n = 0; n < e; ++n) t[n] = r[n];
    return t;
  }
  a(ni, "arrayClone");
  function Go(r, e) {
    for (; e + 1 < r.length; e++) r[e] = r[e + 1];
    r.pop();
  }
  a(Go, "spliceOne");
  function $o(r) {
    for (var e = new Array(r.length), t = 0; t < e.length; ++t)
      e[t] = r[t].listener || r[t];
    return e;
  }
  a($o, "unwrapListeners");
  function Vo(r, e) {
    return new Promise(function (t, n) {
      function i(o) {
        r.removeListener(e, s), n(o);
      }
      a(i, "errorListener");
      function s() {
        typeof r.removeListener == "function" && r.removeListener("error", i),
          t([].slice.call(arguments));
      }
      a(s, "resolver"),
        ii(r, e, s, { once: true }),
        e !== "error" && Ko(r, i, { once: true });
    });
  }
  a(Vo, "once");
  function Ko(r, e, t) {
    typeof r.on == "function" && ii(r, "error", e, t);
  }
  a(Ko, "addErrorHandlerIfEventEmitter");
  function ii(r, e, t, n) {
    if (typeof r.on == "function") n.once ? r.once(e, t) : r.on(e, t);
    else if (typeof r.addEventListener == "function")
      r.addEventListener(
        e,
        a(function i(s) {
          n.once && r.removeEventListener(e, i), t(s);
        }, "wrapListener"),
      );
    else
      throw new TypeError(
        'The "emitter" argument must be of type EventEmitter. Received type ' +
          typeof r,
      );
  }
  a(ii, "eventTargetAgnosticAddListener");
});
var He = {};
se(He, { default: () => zo });
var zo;
var Ge = z(() => {
  "use strict";
  p();
  zo = {};
});
function $e(r) {
  let e = 1779033703,
    t = 3144134277,
    n = 1013904242,
    i = 2773480762,
    s = 1359893119,
    o = 2600822924,
    u = 528734635,
    c = 1541459225,
    h = 0,
    l = 0,
    d = [
      1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
      2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
      1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
      264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
      2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
      113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
      1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
      3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
      430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
      1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
      2428436474, 2756734187, 3204031479, 3329325298,
    ],
    b = a((A, g) => (A >>> g) | (A << (32 - g)), "rrot"),
    C = new Uint32Array(64),
    B = new Uint8Array(64),
    Q = a(() => {
      for (let R = 0, $ = 0; R < 16; R++, $ += 4)
        C[R] = (B[$] << 24) | (B[$ + 1] << 16) | (B[$ + 2] << 8) | B[$ + 3];
      for (let R = 16; R < 64; R++) {
        let $ = b(C[R - 15], 7) ^ b(C[R - 15], 18) ^ (C[R - 15] >>> 3),
          ce = b(C[R - 2], 17) ^ b(C[R - 2], 19) ^ (C[R - 2] >>> 10);
        C[R] = (C[R - 16] + $ + C[R - 7] + ce) | 0;
      }
      let A = e,
        g = t,
        P = n,
        K = i,
        k = s,
        j = o,
        ue = u,
        ee = c;
      for (let R = 0; R < 64; R++) {
        let $ = b(k, 6) ^ b(k, 11) ^ b(k, 25),
          ce = (k & j) ^ (~k & ue),
          ye = (ee + $ + ce + d[R] + C[R]) | 0,
          Se = b(A, 2) ^ b(A, 13) ^ b(A, 22),
          Ae = (A & g) ^ (A & P) ^ (g & P),
          he = (Se + Ae) | 0;
        (ee = ue),
          (ue = j),
          (j = k),
          (k = (K + ye) | 0),
          (K = P),
          (P = g),
          (g = A),
          (A = (ye + he) | 0);
      }
      (e = (e + A) | 0),
        (t = (t + g) | 0),
        (n = (n + P) | 0),
        (i = (i + K) | 0),
        (s = (s + k) | 0),
        (o = (o + j) | 0),
        (u = (u + ue) | 0),
        (c = (c + ee) | 0),
        (l = 0);
    }, "process"),
    X = a((A) => {
      typeof A == "string" && (A = new TextEncoder().encode(A));
      for (let g = 0; g < A.length; g++) (B[l++] = A[g]), l === 64 && Q();
      h += A.length;
    }, "add"),
    de = a(() => {
      if (((B[l++] = 128), l == 64 && Q(), l + 8 > 64)) {
        for (; l < 64; ) B[l++] = 0;
        Q();
      }
      for (; l < 58; ) B[l++] = 0;
      let A = h * 8;
      (B[l++] = (A / 1099511627776) & 255),
        (B[l++] = (A / 4294967296) & 255),
        (B[l++] = A >>> 24),
        (B[l++] = (A >>> 16) & 255),
        (B[l++] = (A >>> 8) & 255),
        (B[l++] = A & 255),
        Q();
      let g = new Uint8Array(32);
      return (
        (g[0] = e >>> 24),
        (g[1] = (e >>> 16) & 255),
        (g[2] = (e >>> 8) & 255),
        (g[3] = e & 255),
        (g[4] = t >>> 24),
        (g[5] = (t >>> 16) & 255),
        (g[6] = (t >>> 8) & 255),
        (g[7] = t & 255),
        (g[8] = n >>> 24),
        (g[9] = (n >>> 16) & 255),
        (g[10] = (n >>> 8) & 255),
        (g[11] = n & 255),
        (g[12] = i >>> 24),
        (g[13] = (i >>> 16) & 255),
        (g[14] = (i >>> 8) & 255),
        (g[15] = i & 255),
        (g[16] = s >>> 24),
        (g[17] = (s >>> 16) & 255),
        (g[18] = (s >>> 8) & 255),
        (g[19] = s & 255),
        (g[20] = o >>> 24),
        (g[21] = (o >>> 16) & 255),
        (g[22] = (o >>> 8) & 255),
        (g[23] = o & 255),
        (g[24] = u >>> 24),
        (g[25] = (u >>> 16) & 255),
        (g[26] = (u >>> 8) & 255),
        (g[27] = u & 255),
        (g[28] = c >>> 24),
        (g[29] = (c >>> 16) & 255),
        (g[30] = (c >>> 8) & 255),
        (g[31] = c & 255),
        g
      );
    }, "digest");
  return r === void 0 ? { add: X, digest: de } : (X(r), de());
}
var si = z(() => {
  "use strict";
  p();
  a($e, "sha256");
});
var U;
var Ve;
var oi = z(() => {
  "use strict";
  p();
  U = class U2 {
    constructor() {
      _(this, "_dataLength", 0);
      _(this, "_bufferLength", 0);
      _(this, "_state", new Int32Array(4));
      _(this, "_buffer", new ArrayBuffer(68));
      _(this, "_buffer8");
      _(this, "_buffer32");
      (this._buffer8 = new Uint8Array(this._buffer, 0, 68)),
        (this._buffer32 = new Uint32Array(this._buffer, 0, 17)),
        this.start();
    }
    static hashByteArray(e, t = false) {
      return this.onePassHasher.start().appendByteArray(e).end(t);
    }
    static hashStr(e, t = false) {
      return this.onePassHasher.start().appendStr(e).end(t);
    }
    static hashAsciiStr(e, t = false) {
      return this.onePassHasher.start().appendAsciiStr(e).end(t);
    }
    static _hex(e) {
      let t = U2.hexChars,
        n = U2.hexOut,
        i,
        s,
        o,
        u;
      for (u = 0; u < 4; u += 1)
        for (s = u * 8, i = e[u], o = 0; o < 8; o += 2)
          (n[s + 1 + o] = t.charAt(i & 15)),
            (i >>>= 4),
            (n[s + 0 + o] = t.charAt(i & 15)),
            (i >>>= 4);
      return n.join("");
    }
    static _md5cycle(e, t) {
      let n = e[0],
        i = e[1],
        s = e[2],
        o = e[3];
      (n += (((i & s) | (~i & o)) + t[0] - 680876936) | 0),
        (n = (((n << 7) | (n >>> 25)) + i) | 0),
        (o += (((n & i) | (~n & s)) + t[1] - 389564586) | 0),
        (o = (((o << 12) | (o >>> 20)) + n) | 0),
        (s += (((o & n) | (~o & i)) + t[2] + 606105819) | 0),
        (s = (((s << 17) | (s >>> 15)) + o) | 0),
        (i += (((s & o) | (~s & n)) + t[3] - 1044525330) | 0),
        (i = (((i << 22) | (i >>> 10)) + s) | 0),
        (n += (((i & s) | (~i & o)) + t[4] - 176418897) | 0),
        (n = (((n << 7) | (n >>> 25)) + i) | 0),
        (o += (((n & i) | (~n & s)) + t[5] + 1200080426) | 0),
        (o = (((o << 12) | (o >>> 20)) + n) | 0),
        (s += (((o & n) | (~o & i)) + t[6] - 1473231341) | 0),
        (s = (((s << 17) | (s >>> 15)) + o) | 0),
        (i += (((s & o) | (~s & n)) + t[7] - 45705983) | 0),
        (i = (((i << 22) | (i >>> 10)) + s) | 0),
        (n += (((i & s) | (~i & o)) + t[8] + 1770035416) | 0),
        (n = (((n << 7) | (n >>> 25)) + i) | 0),
        (o += (((n & i) | (~n & s)) + t[9] - 1958414417) | 0),
        (o = (((o << 12) | (o >>> 20)) + n) | 0),
        (s += (((o & n) | (~o & i)) + t[10] - 42063) | 0),
        (s = (((s << 17) | (s >>> 15)) + o) | 0),
        (i += (((s & o) | (~s & n)) + t[11] - 1990404162) | 0),
        (i = (((i << 22) | (i >>> 10)) + s) | 0),
        (n += (((i & s) | (~i & o)) + t[12] + 1804603682) | 0),
        (n = (((n << 7) | (n >>> 25)) + i) | 0),
        (o += (((n & i) | (~n & s)) + t[13] - 40341101) | 0),
        (o = (((o << 12) | (o >>> 20)) + n) | 0),
        (s += (((o & n) | (~o & i)) + t[14] - 1502002290) | 0),
        (s = (((s << 17) | (s >>> 15)) + o) | 0),
        (i += (((s & o) | (~s & n)) + t[15] + 1236535329) | 0),
        (i = (((i << 22) | (i >>> 10)) + s) | 0),
        (n += (((i & o) | (s & ~o)) + t[1] - 165796510) | 0),
        (n = (((n << 5) | (n >>> 27)) + i) | 0),
        (o += (((n & s) | (i & ~s)) + t[6] - 1069501632) | 0),
        (o = (((o << 9) | (o >>> 23)) + n) | 0),
        (s += (((o & i) | (n & ~i)) + t[11] + 643717713) | 0),
        (s = (((s << 14) | (s >>> 18)) + o) | 0),
        (i += (((s & n) | (o & ~n)) + t[0] - 373897302) | 0),
        (i = (((i << 20) | (i >>> 12)) + s) | 0),
        (n += (((i & o) | (s & ~o)) + t[5] - 701558691) | 0),
        (n = (((n << 5) | (n >>> 27)) + i) | 0),
        (o += (((n & s) | (i & ~s)) + t[10] + 38016083) | 0),
        (o = (((o << 9) | (o >>> 23)) + n) | 0),
        (s += (((o & i) | (n & ~i)) + t[15] - 660478335) | 0),
        (s = (((s << 14) | (s >>> 18)) + o) | 0),
        (i += (((s & n) | (o & ~n)) + t[4] - 405537848) | 0),
        (i = (((i << 20) | (i >>> 12)) + s) | 0),
        (n += (((i & o) | (s & ~o)) + t[9] + 568446438) | 0),
        (n = (((n << 5) | (n >>> 27)) + i) | 0),
        (o += (((n & s) | (i & ~s)) + t[14] - 1019803690) | 0),
        (o = (((o << 9) | (o >>> 23)) + n) | 0),
        (s += (((o & i) | (n & ~i)) + t[3] - 187363961) | 0),
        (s = (((s << 14) | (s >>> 18)) + o) | 0),
        (i += (((s & n) | (o & ~n)) + t[8] + 1163531501) | 0),
        (i = (((i << 20) | (i >>> 12)) + s) | 0),
        (n += (((i & o) | (s & ~o)) + t[13] - 1444681467) | 0),
        (n = (((n << 5) | (n >>> 27)) + i) | 0),
        (o += (((n & s) | (i & ~s)) + t[2] - 51403784) | 0),
        (o = (((o << 9) | (o >>> 23)) + n) | 0),
        (s += (((o & i) | (n & ~i)) + t[7] + 1735328473) | 0),
        (s = (((s << 14) | (s >>> 18)) + o) | 0),
        (i += (((s & n) | (o & ~n)) + t[12] - 1926607734) | 0),
        (i = (((i << 20) | (i >>> 12)) + s) | 0),
        (n += ((i ^ s ^ o) + t[5] - 378558) | 0),
        (n = (((n << 4) | (n >>> 28)) + i) | 0),
        (o += ((n ^ i ^ s) + t[8] - 2022574463) | 0),
        (o = (((o << 11) | (o >>> 21)) + n) | 0),
        (s += ((o ^ n ^ i) + t[11] + 1839030562) | 0),
        (s = (((s << 16) | (s >>> 16)) + o) | 0),
        (i += ((s ^ o ^ n) + t[14] - 35309556) | 0),
        (i = (((i << 23) | (i >>> 9)) + s) | 0),
        (n += ((i ^ s ^ o) + t[1] - 1530992060) | 0),
        (n = (((n << 4) | (n >>> 28)) + i) | 0),
        (o += ((n ^ i ^ s) + t[4] + 1272893353) | 0),
        (o = (((o << 11) | (o >>> 21)) + n) | 0),
        (s += ((o ^ n ^ i) + t[7] - 155497632) | 0),
        (s = (((s << 16) | (s >>> 16)) + o) | 0),
        (i += ((s ^ o ^ n) + t[10] - 1094730640) | 0),
        (i = (((i << 23) | (i >>> 9)) + s) | 0),
        (n += ((i ^ s ^ o) + t[13] + 681279174) | 0),
        (n = (((n << 4) | (n >>> 28)) + i) | 0),
        (o += ((n ^ i ^ s) + t[0] - 358537222) | 0),
        (o = (((o << 11) | (o >>> 21)) + n) | 0),
        (s += ((o ^ n ^ i) + t[3] - 722521979) | 0),
        (s = (((s << 16) | (s >>> 16)) + o) | 0),
        (i += ((s ^ o ^ n) + t[6] + 76029189) | 0),
        (i = (((i << 23) | (i >>> 9)) + s) | 0),
        (n += ((i ^ s ^ o) + t[9] - 640364487) | 0),
        (n = (((n << 4) | (n >>> 28)) + i) | 0),
        (o += ((n ^ i ^ s) + t[12] - 421815835) | 0),
        (o = (((o << 11) | (o >>> 21)) + n) | 0),
        (s += ((o ^ n ^ i) + t[15] + 530742520) | 0),
        (s = (((s << 16) | (s >>> 16)) + o) | 0),
        (i += ((s ^ o ^ n) + t[2] - 995338651) | 0),
        (i = (((i << 23) | (i >>> 9)) + s) | 0),
        (n += ((s ^ (i | ~o)) + t[0] - 198630844) | 0),
        (n = (((n << 6) | (n >>> 26)) + i) | 0),
        (o += ((i ^ (n | ~s)) + t[7] + 1126891415) | 0),
        (o = (((o << 10) | (o >>> 22)) + n) | 0),
        (s += ((n ^ (o | ~i)) + t[14] - 1416354905) | 0),
        (s = (((s << 15) | (s >>> 17)) + o) | 0),
        (i += ((o ^ (s | ~n)) + t[5] - 57434055) | 0),
        (i = (((i << 21) | (i >>> 11)) + s) | 0),
        (n += ((s ^ (i | ~o)) + t[12] + 1700485571) | 0),
        (n = (((n << 6) | (n >>> 26)) + i) | 0),
        (o += ((i ^ (n | ~s)) + t[3] - 1894986606) | 0),
        (o = (((o << 10) | (o >>> 22)) + n) | 0),
        (s += ((n ^ (o | ~i)) + t[10] - 1051523) | 0),
        (s = (((s << 15) | (s >>> 17)) + o) | 0),
        (i += ((o ^ (s | ~n)) + t[1] - 2054922799) | 0),
        (i = (((i << 21) | (i >>> 11)) + s) | 0),
        (n += ((s ^ (i | ~o)) + t[8] + 1873313359) | 0),
        (n = (((n << 6) | (n >>> 26)) + i) | 0),
        (o += ((i ^ (n | ~s)) + t[15] - 30611744) | 0),
        (o = (((o << 10) | (o >>> 22)) + n) | 0),
        (s += ((n ^ (o | ~i)) + t[6] - 1560198380) | 0),
        (s = (((s << 15) | (s >>> 17)) + o) | 0),
        (i += ((o ^ (s | ~n)) + t[13] + 1309151649) | 0),
        (i = (((i << 21) | (i >>> 11)) + s) | 0),
        (n += ((s ^ (i | ~o)) + t[4] - 145523070) | 0),
        (n = (((n << 6) | (n >>> 26)) + i) | 0),
        (o += ((i ^ (n | ~s)) + t[11] - 1120210379) | 0),
        (o = (((o << 10) | (o >>> 22)) + n) | 0),
        (s += ((n ^ (o | ~i)) + t[2] + 718787259) | 0),
        (s = (((s << 15) | (s >>> 17)) + o) | 0),
        (i += ((o ^ (s | ~n)) + t[9] - 343485551) | 0),
        (i = (((i << 21) | (i >>> 11)) + s) | 0),
        (e[0] = (n + e[0]) | 0),
        (e[1] = (i + e[1]) | 0),
        (e[2] = (s + e[2]) | 0),
        (e[3] = (o + e[3]) | 0);
    }
    start() {
      return (
        (this._dataLength = 0),
        (this._bufferLength = 0),
        this._state.set(U2.stateIdentity),
        this
      );
    }
    appendStr(e) {
      let t = this._buffer8,
        n = this._buffer32,
        i = this._bufferLength,
        s,
        o;
      for (o = 0; o < e.length; o += 1) {
        if (((s = e.charCodeAt(o)), s < 128)) t[i++] = s;
        else if (s < 2048)
          (t[i++] = (s >>> 6) + 192), (t[i++] = (s & 63) | 128);
        else if (s < 55296 || s > 56319)
          (t[i++] = (s >>> 12) + 224),
            (t[i++] = ((s >>> 6) & 63) | 128),
            (t[i++] = (s & 63) | 128);
        else {
          if (
            ((s = (s - 55296) * 1024 + (e.charCodeAt(++o) - 56320) + 65536),
            s > 1114111)
          )
            throw new Error(
              "Unicode standard supports code points up to U+10FFFF",
            );
          (t[i++] = (s >>> 18) + 240),
            (t[i++] = ((s >>> 12) & 63) | 128),
            (t[i++] = ((s >>> 6) & 63) | 128),
            (t[i++] = (s & 63) | 128);
        }
        i >= 64 &&
          ((this._dataLength += 64),
          U2._md5cycle(this._state, n),
          (i -= 64),
          (n[0] = n[16]));
      }
      return (this._bufferLength = i), this;
    }
    appendAsciiStr(e) {
      let t = this._buffer8,
        n = this._buffer32,
        i = this._bufferLength,
        s,
        o = 0;
      for (;;) {
        for (s = Math.min(e.length - o, 64 - i); s--; )
          t[i++] = e.charCodeAt(o++);
        if (i < 64) break;
        (this._dataLength += 64), U2._md5cycle(this._state, n), (i = 0);
      }
      return (this._bufferLength = i), this;
    }
    appendByteArray(e) {
      let t = this._buffer8,
        n = this._buffer32,
        i = this._bufferLength,
        s,
        o = 0;
      for (;;) {
        for (s = Math.min(e.length - o, 64 - i); s--; ) t[i++] = e[o++];
        if (i < 64) break;
        (this._dataLength += 64), U2._md5cycle(this._state, n), (i = 0);
      }
      return (this._bufferLength = i), this;
    }
    getState() {
      let e = this._state;
      return {
        buffer: String.fromCharCode.apply(null, Array.from(this._buffer8)),
        buflen: this._bufferLength,
        length: this._dataLength,
        state: [e[0], e[1], e[2], e[3]],
      };
    }
    setState(e) {
      let t = e.buffer,
        n = e.state,
        i = this._state,
        s;
      for (
        this._dataLength = e.length,
          this._bufferLength = e.buflen,
          i[0] = n[0],
          i[1] = n[1],
          i[2] = n[2],
          i[3] = n[3],
          s = 0;
        s < t.length;
        s += 1
      )
        this._buffer8[s] = t.charCodeAt(s);
    }
    end(e = false) {
      let t = this._bufferLength,
        n = this._buffer8,
        i = this._buffer32,
        s = (t >> 2) + 1;
      this._dataLength += t;
      let o = this._dataLength * 8;
      if (
        ((n[t] = 128),
        (n[t + 1] = n[t + 2] = n[t + 3] = 0),
        i.set(U2.buffer32Identity.subarray(s), s),
        t > 55 && (U2._md5cycle(this._state, i), i.set(U2.buffer32Identity)),
        o <= 4294967295)
      )
        i[14] = o;
      else {
        let u = o.toString(16).match(/(.*?)(.{0,8})$/);
        if (u === null) return;
        let c = parseInt(u[2], 16),
          h = parseInt(u[1], 16) || 0;
        (i[14] = c), (i[15] = h);
      }
      return (
        U2._md5cycle(this._state, i), e ? this._state : U2._hex(this._state)
      );
    }
  };
  a(U, "Md5"),
    _(
      U,
      "stateIdentity",
      new Int32Array([1732584193, -271733879, -1732584194, 271733878]),
    ),
    _(
      U,
      "buffer32Identity",
      new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
    ),
    _(U, "hexChars", "0123456789abcdef"),
    _(U, "hexOut", []),
    _(U, "onePassHasher", new U());
  Ve = U;
});
var Wt = {};
se(Wt, { createHash: () => Zo, createHmac: () => Jo, randomBytes: () => Yo });
function Yo(r) {
  return w.getRandomValues(y.alloc(r));
}
function Zo(r) {
  if (r === "sha256")
    return {
      update: a(function (e) {
        return {
          digest: a(function () {
            return y.from($e(e));
          }, "digest"),
        };
      }, "update"),
    };
  if (r === "md5")
    return {
      update: a(function (e) {
        return {
          digest: a(function () {
            return typeof e == "string" ? Ve.hashStr(e) : Ve.hashByteArray(e);
          }, "digest"),
        };
      }, "update"),
    };
  throw new Error(`Hash type '${r}' not supported`);
}
function Jo(r, e) {
  if (r !== "sha256")
    throw new Error(`Only sha256 is supported (requested: '${r}')`);
  return {
    update: a(function (t) {
      return {
        digest: a(function () {
          typeof e == "string" && (e = new TextEncoder().encode(e)),
            typeof t == "string" && (t = new TextEncoder().encode(t));
          let n = e.length;
          if (n > 64) e = $e(e);
          else if (n < 64) {
            let c = new Uint8Array(64);
            c.set(e), (e = c);
          }
          let i = new Uint8Array(64),
            s = new Uint8Array(64);
          for (let c = 0; c < 64; c++) (i[c] = 54 ^ e[c]), (s[c] = 92 ^ e[c]);
          let o = new Uint8Array(t.length + 64);
          o.set(i, 0), o.set(t, 64);
          let u = new Uint8Array(96);
          return u.set(s, 0), u.set($e(o), 64), y.from($e(u));
        }, "digest"),
      };
    }, "update"),
  };
}
var Ht = z(() => {
  "use strict";
  p();
  si();
  oi();
  a(Yo, "randomBytes");
  a(Zo, "createHash");
  a(Jo, "createHmac");
});
var $t = I((ai) => {
  "use strict";
  p();
  ai.parse = function (r, e) {
    return new Gt(r, e).parse();
  };
  var ht = class ht2 {
    constructor(e, t) {
      (this.source = e),
        (this.transform = t || Xo),
        (this.position = 0),
        (this.entries = []),
        (this.recorded = []),
        (this.dimension = 0);
    }
    isEof() {
      return this.position >= this.source.length;
    }
    nextCharacter() {
      var e = this.source[this.position++];
      return e === "\\"
        ? { value: this.source[this.position++], escaped: true }
        : { value: e, escaped: false };
    }
    record(e) {
      this.recorded.push(e);
    }
    newEntry(e) {
      var t;
      (this.recorded.length > 0 || e) &&
        ((t = this.recorded.join("")),
        t === "NULL" && !e && (t = null),
        t !== null && (t = this.transform(t)),
        this.entries.push(t),
        (this.recorded = []));
    }
    consumeDimensions() {
      if (this.source[0] === "[")
        for (; !this.isEof(); ) {
          var e = this.nextCharacter();
          if (e.value === "=") break;
        }
    }
    parse(e) {
      var t, n, i;
      for (this.consumeDimensions(); !this.isEof(); )
        if (((t = this.nextCharacter()), t.value === "{" && !i))
          this.dimension++,
            this.dimension > 1 &&
              ((n = new ht2(
                this.source.substr(this.position - 1),
                this.transform,
              )),
              this.entries.push(n.parse(true)),
              (this.position += n.position - 2));
        else if (t.value === "}" && !i) {
          if ((this.dimension--, !this.dimension && (this.newEntry(), e)))
            return this.entries;
        } else
          t.value === '"' && !t.escaped
            ? (i && this.newEntry(true), (i = !i))
            : t.value === "," && !i
              ? this.newEntry()
              : this.record(t.value);
      if (this.dimension !== 0) throw new Error("array dimension not balanced");
      return this.entries;
    }
  };
  a(ht, "ArrayParser");
  var Gt = ht;
  function Xo(r) {
    return r;
  }
  a(Xo, "identity");
});
var Vt = I((bh, ui) => {
  p();
  var ea = $t();
  ui.exports = {
    create: a(function (r, e) {
      return {
        parse: a(function () {
          return ea.parse(r, e);
        }, "parse"),
      };
    }, "create"),
  };
});
var li = I((vh, hi) => {
  "use strict";
  p();
  var ta =
      /(\d{1,})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(\.\d{1,})?.*?( BC)?$/,
    ra = /^(\d{1,})-(\d{2})-(\d{2})( BC)?$/,
    na = /([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/,
    ia = /^-?infinity$/;
  hi.exports = a(function (e) {
    if (ia.test(e)) return Number(e.replace("i", "I"));
    var t = ta.exec(e);
    if (!t) return sa(e) || null;
    var n = !!t[8],
      i = parseInt(t[1], 10);
    n && (i = ci(i));
    var s = parseInt(t[2], 10) - 1,
      o = t[3],
      u = parseInt(t[4], 10),
      c = parseInt(t[5], 10),
      h = parseInt(t[6], 10),
      l = t[7];
    l = l ? 1e3 * parseFloat(l) : 0;
    var d,
      b = oa(e);
    return (
      b != null
        ? ((d = new Date(Date.UTC(i, s, o, u, c, h, l))),
          Kt(i) && d.setUTCFullYear(i),
          b !== 0 && d.setTime(d.getTime() - b))
        : ((d = new Date(i, s, o, u, c, h, l)), Kt(i) && d.setFullYear(i)),
      d
    );
  }, "parseDate");
  function sa(r) {
    var e = ra.exec(r);
    if (e) {
      var t = parseInt(e[1], 10),
        n = !!e[4];
      n && (t = ci(t));
      var i = parseInt(e[2], 10) - 1,
        s = e[3],
        o = new Date(t, i, s);
      return Kt(t) && o.setFullYear(t), o;
    }
  }
  a(sa, "getDate");
  function oa(r) {
    if (r.endsWith("+00")) return 0;
    var e = na.exec(r.split(" ")[1]);
    if (e) {
      var t = e[1];
      if (t === "Z") return 0;
      var n = t === "-" ? -1 : 1,
        i =
          parseInt(e[2], 10) * 3600 +
          parseInt(e[3] || 0, 10) * 60 +
          parseInt(e[4] || 0, 10);
      return i * n * 1e3;
    }
  }
  a(oa, "timeZoneOffset");
  function ci(r) {
    return -(r - 1);
  }
  a(ci, "bcYearToNegativeYear");
  function Kt(r) {
    return r >= 0 && r < 100;
  }
  a(Kt, "is0To99");
});
var pi = I((Ah, fi) => {
  p();
  fi.exports = ua;
  var aa = Object.prototype.hasOwnProperty;
  function ua(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t) aa.call(t, n) && (r[n] = t[n]);
    }
    return r;
  }
  a(ua, "extend");
});
var mi = I((Ih, yi) => {
  "use strict";
  p();
  var ca = pi();
  yi.exports = Me;
  function Me(r) {
    if (!(this instanceof Me)) return new Me(r);
    ca(this, Ea(r));
  }
  a(Me, "PostgresInterval");
  var ha = ["seconds", "minutes", "hours", "days", "months", "years"];
  Me.prototype.toPostgres = function () {
    var r = ha.filter(this.hasOwnProperty, this);
    return (
      this.milliseconds && r.indexOf("seconds") < 0 && r.push("seconds"),
      r.length === 0
        ? "0"
        : r
            .map(function (e) {
              var t = this[e] || 0;
              return (
                e === "seconds" &&
                  this.milliseconds &&
                  (t = (t + this.milliseconds / 1e3)
                    .toFixed(6)
                    .replace(/\.?0+$/, "")),
                t + " " + e
              );
            }, this)
            .join(" ")
    );
  };
  var la = {
      years: "Y",
      months: "M",
      days: "D",
      hours: "H",
      minutes: "M",
      seconds: "S",
    },
    fa = ["years", "months", "days"],
    pa = ["hours", "minutes", "seconds"];
  Me.prototype.toISOString = Me.prototype.toISO = function () {
    var r = fa.map(t, this).join(""),
      e = pa.map(t, this).join("");
    return "P" + r + "T" + e;
    function t(n) {
      var i = this[n] || 0;
      return (
        n === "seconds" &&
          this.milliseconds &&
          (i = (i + this.milliseconds / 1e3).toFixed(6).replace(/0+$/, "")),
        i + la[n]
      );
    }
  };
  var zt = "([+-]?\\d+)",
    da = zt + "\\s+years?",
    ya = zt + "\\s+mons?",
    ma = zt + "\\s+days?",
    ga = "([+-])?([\\d]*):(\\d\\d):(\\d\\d)\\.?(\\d{1,6})?",
    wa = new RegExp(
      [da, ya, ma, ga]
        .map(function (r) {
          return "(" + r + ")?";
        })
        .join("\\s*"),
    ),
    di = {
      years: 2,
      months: 4,
      days: 6,
      hours: 9,
      minutes: 10,
      seconds: 11,
      milliseconds: 12,
    },
    ba = ["hours", "minutes", "seconds", "milliseconds"];
  function Sa(r) {
    var e = r + "000000".slice(r.length);
    return parseInt(e, 10) / 1e3;
  }
  a(Sa, "parseMilliseconds");
  function Ea(r) {
    if (!r) return {};
    var e = wa.exec(r),
      t = e[8] === "-";
    return Object.keys(di).reduce(function (n, i) {
      var s = di[i],
        o = e[s];
      return (
        !o ||
          ((o = i === "milliseconds" ? Sa(o) : parseInt(o, 10)), !o) ||
          (t && ~ba.indexOf(i) && (o *= -1), (n[i] = o)),
        n
      );
    }, {});
  }
  a(Ea, "parse");
});
var wi = I((Lh, gi) => {
  "use strict";
  p();
  gi.exports = a(function (e) {
    if (/^\\x/.test(e)) return new y(e.substr(2), "hex");
    for (var t = "", n = 0; n < e.length; )
      if (e[n] !== "\\") (t += e[n]), ++n;
      else if (/[0-7]{3}/.test(e.substr(n + 1, 3)))
        (t += String.fromCharCode(parseInt(e.substr(n + 1, 3), 8))), (n += 4);
      else {
        for (var i = 1; n + i < e.length && e[n + i] === "\\"; ) i++;
        for (var s = 0; s < Math.floor(i / 2); ++s) t += "\\";
        n += Math.floor(i / 2) * 2;
      }
    return new y(t, "binary");
  }, "parseBytea");
});
var Ai = I((Mh, _i) => {
  p();
  var Ke = $t(),
    ze = Vt(),
    lt2 = li(),
    Si = mi(),
    Ei = wi();
  function ft(r) {
    return a(function (t) {
      return t === null ? t : r(t);
    }, "nullAllowed");
  }
  a(ft, "allowNull");
  function vi(r) {
    return r === null
      ? r
      : r === "TRUE" ||
          r === "t" ||
          r === "true" ||
          r === "y" ||
          r === "yes" ||
          r === "on" ||
          r === "1";
  }
  a(vi, "parseBool");
  function va(r) {
    return r ? Ke.parse(r, vi) : null;
  }
  a(va, "parseBoolArray");
  function xa(r) {
    return parseInt(r, 10);
  }
  a(xa, "parseBaseTenInt");
  function Yt(r) {
    return r ? Ke.parse(r, ft(xa)) : null;
  }
  a(Yt, "parseIntegerArray");
  function _a150(r) {
    return r
      ? Ke.parse(
          r,
          ft(function (e) {
            return xi(e).trim();
          }),
        )
      : null;
  }
  a(_a150, "parseBigIntegerArray");
  var Aa = a(function (r) {
      if (!r) return null;
      var e = ze.create(r, function (t) {
        return t !== null && (t = er(t)), t;
      });
      return e.parse();
    }, "parsePointArray"),
    Zt = a(function (r) {
      if (!r) return null;
      var e = ze.create(r, function (t) {
        return t !== null && (t = parseFloat(t)), t;
      });
      return e.parse();
    }, "parseFloatArray"),
    ne2 = a(function (r) {
      if (!r) return null;
      var e = ze.create(r);
      return e.parse();
    }, "parseStringArray"),
    Jt = a(function (r) {
      if (!r) return null;
      var e = ze.create(r, function (t) {
        return t !== null && (t = lt2(t)), t;
      });
      return e.parse();
    }, "parseDateArray"),
    Ca = a(function (r) {
      if (!r) return null;
      var e = ze.create(r, function (t) {
        return t !== null && (t = Si(t)), t;
      });
      return e.parse();
    }, "parseIntervalArray"),
    Ta = a(function (r) {
      return r ? Ke.parse(r, ft(Ei)) : null;
    }, "parseByteAArray"),
    Xt = a(function (r) {
      return parseInt(r, 10);
    }, "parseInteger"),
    xi = a(function (r) {
      var e = String(r);
      return /^\d+$/.test(e) ? e : r;
    }, "parseBigInteger"),
    bi = a(function (r) {
      return r ? Ke.parse(r, ft(JSON.parse)) : null;
    }, "parseJsonArray"),
    er = a(function (r) {
      return r[0] !== "("
        ? null
        : ((r = r.substring(1, r.length - 1).split(",")),
          { x: parseFloat(r[0]), y: parseFloat(r[1]) });
    }, "parsePoint"),
    Ia = a(function (r) {
      if (r[0] !== "<" && r[1] !== "(") return null;
      for (var e = "(", t = "", n = false, i = 2; i < r.length - 1; i++) {
        if ((n || (e += r[i]), r[i] === ")")) {
          n = true;
          continue;
        } else if (!n) continue;
        r[i] !== "," && (t += r[i]);
      }
      var s = er(e);
      return (s.radius = parseFloat(t)), s;
    }, "parseCircle"),
    Pa = a(function (r) {
      r(20, xi),
        r(21, Xt),
        r(23, Xt),
        r(26, Xt),
        r(700, parseFloat),
        r(701, parseFloat),
        r(16, vi),
        r(1082, lt2),
        r(1114, lt2),
        r(1184, lt2),
        r(600, er),
        r(651, ne2),
        r(718, Ia),
        r(1e3, va),
        r(1001, Ta),
        r(1005, Yt),
        r(1007, Yt),
        r(1028, Yt),
        r(1016, _a150),
        r(1017, Aa),
        r(1021, Zt),
        r(1022, Zt),
        r(1231, Zt),
        r(1014, ne2),
        r(1015, ne2),
        r(1008, ne2),
        r(1009, ne2),
        r(1040, ne2),
        r(1041, ne2),
        r(1115, Jt),
        r(1182, Jt),
        r(1185, Jt),
        r(1186, Si),
        r(1187, Ca),
        r(17, Ei),
        r(114, JSON.parse.bind(JSON)),
        r(3802, JSON.parse.bind(JSON)),
        r(199, bi),
        r(3807, bi),
        r(3907, ne2),
        r(2951, ne2),
        r(791, ne2),
        r(1183, ne2),
        r(1270, ne2);
    }, "init");
  _i.exports = { init: Pa };
});
var Ti = I((Uh, Ci) => {
  "use strict";
  p();
  var Z = 1e6;
  function Ba(r) {
    var e = r.readInt32BE(0),
      t = r.readUInt32BE(4),
      n = "";
    e < 0 && ((e = ~e + (t === 0)), (t = (~t + 1) >>> 0), (n = "-"));
    var i = "",
      s,
      o,
      u,
      c,
      h,
      l;
    {
      if (
        ((s = e % Z),
        (e = (e / Z) >>> 0),
        (o = 4294967296 * s + t),
        (t = (o / Z) >>> 0),
        (u = "" + (o - Z * t)),
        t === 0 && e === 0)
      )
        return n + u + i;
      for (c = "", h = 6 - u.length, l = 0; l < h; l++) c += "0";
      i = c + u + i;
    }
    {
      if (
        ((s = e % Z),
        (e = (e / Z) >>> 0),
        (o = 4294967296 * s + t),
        (t = (o / Z) >>> 0),
        (u = "" + (o - Z * t)),
        t === 0 && e === 0)
      )
        return n + u + i;
      for (c = "", h = 6 - u.length, l = 0; l < h; l++) c += "0";
      i = c + u + i;
    }
    {
      if (
        ((s = e % Z),
        (e = (e / Z) >>> 0),
        (o = 4294967296 * s + t),
        (t = (o / Z) >>> 0),
        (u = "" + (o - Z * t)),
        t === 0 && e === 0)
      )
        return n + u + i;
      for (c = "", h = 6 - u.length, l = 0; l < h; l++) c += "0";
      i = c + u + i;
    }
    return (s = e % Z), (o = 4294967296 * s + t), (u = "" + (o % Z)), n + u + i;
  }
  a(Ba, "readInt8");
  Ci.exports = Ba;
});
var Ri = I((qh, Li) => {
  p();
  var La = Ti(),
    F = a(function (r, e, t, n, i) {
      (t = t || 0),
        (n = n || false),
        (i =
          i ||
          function (C, B, Q) {
            return C * Math.pow(2, Q) + B;
          });
      var s = t >> 3,
        o = a(function (C) {
          return n ? ~C & 255 : C;
        }, "inv"),
        u = 255,
        c = 8 - (t % 8);
      e < c && ((u = (255 << (8 - e)) & 255), (c = e)), t && (u = u >> t % 8);
      var h = 0;
      (t % 8) + e >= 8 && (h = i(0, o(r[s]) & u, c));
      for (var l = (e + t) >> 3, d = s + 1; d < l; d++) h = i(h, o(r[d]), 8);
      var b = (e + t) % 8;
      return b > 0 && (h = i(h, o(r[l]) >> (8 - b), b)), h;
    }, "parseBits"),
    Bi = a(function (r, e, t) {
      var n = Math.pow(2, t - 1) - 1,
        i = F(r, 1),
        s = F(r, t, 1);
      if (s === 0) return 0;
      var o = 1,
        u = a(function (h, l, d) {
          h === 0 && (h = 1);
          for (var b = 1; b <= d; b++)
            (o /= 2), (l & (1 << (d - b))) > 0 && (h += o);
          return h;
        }, "parsePrecisionBits"),
        c = F(r, e, t + 1, false, u);
      return s == Math.pow(2, t + 1) - 1
        ? c === 0
          ? i === 0
            ? 1 / 0
            : -1 / 0
          : NaN
        : (i === 0 ? 1 : -1) * Math.pow(2, s - n) * c;
    }, "parseFloatFromBits"),
    Ra = a(function (r) {
      return F(r, 1) == 1 ? -1 * (F(r, 15, 1, true) + 1) : F(r, 15, 1);
    }, "parseInt16"),
    Ii = a(function (r) {
      return F(r, 1) == 1 ? -1 * (F(r, 31, 1, true) + 1) : F(r, 31, 1);
    }, "parseInt32"),
    Fa = a(function (r) {
      return Bi(r, 23, 8);
    }, "parseFloat32"),
    Ma = a(function (r) {
      return Bi(r, 52, 11);
    }, "parseFloat64"),
    Da = a(function (r) {
      var e = F(r, 16, 32);
      if (e == 49152) return NaN;
      for (
        var t = Math.pow(1e4, F(r, 16, 16)), n = 0, i = [], s = F(r, 16), o = 0;
        o < s;
        o++
      )
        (n += F(r, 16, 64 + 16 * o) * t), (t /= 1e4);
      var u = Math.pow(10, F(r, 16, 48));
      return ((e === 0 ? 1 : -1) * Math.round(n * u)) / u;
    }, "parseNumeric"),
    Pi = a(function (r, e) {
      var t = F(e, 1),
        n = F(e, 63, 1),
        i = new Date(((t === 0 ? 1 : -1) * n) / 1e3 + 9466848e5);
      return (
        r || i.setTime(i.getTime() + i.getTimezoneOffset() * 6e4),
        (i.usec = n % 1e3),
        (i.getMicroSeconds = function () {
          return this.usec;
        }),
        (i.setMicroSeconds = function (s) {
          this.usec = s;
        }),
        (i.getUTCMicroSeconds = function () {
          return this.usec;
        }),
        i
      );
    }, "parseDate"),
    Ye = a(function (r) {
      for (
        var e = F(r, 32),
          t = F(r, 32, 32),
          n = F(r, 32, 64),
          i = 96,
          s = [],
          o = 0;
        o < e;
        o++
      )
        (s[o] = F(r, 32, i)), (i += 32), (i += 32);
      var u = a(function (h) {
          var l = F(r, 32, i);
          if (((i += 32), l == 4294967295)) return null;
          var d;
          if (h == 23 || h == 20) return (d = F(r, l * 8, i)), (i += l * 8), d;
          if (h == 25)
            return (
              (d = r.toString(this.encoding, i >> 3, (i += l << 3) >> 3)), d
            );
          console.log("ERROR: ElementType not implemented: " + h);
        }, "parseElement"),
        c = a(function (h, l) {
          var d = [],
            b;
          if (h.length > 1) {
            var C = h.shift();
            for (b = 0; b < C; b++) d[b] = c(h, l);
            h.unshift(C);
          } else for (b = 0; b < h[0]; b++) d[b] = u(l);
          return d;
        }, "parse");
      return c(s, n);
    }, "parseArray"),
    ka = a(function (r) {
      return r.toString("utf8");
    }, "parseText"),
    Ua = a(function (r) {
      return r === null ? null : F(r, 8) > 0;
    }, "parseBool"),
    Oa = a(function (r) {
      r(20, La),
        r(21, Ra),
        r(23, Ii),
        r(26, Ii),
        r(1700, Da),
        r(700, Fa),
        r(701, Ma),
        r(16, Ua),
        r(1114, Pi.bind(null, false)),
        r(1184, Pi.bind(null, true)),
        r(1e3, Ye),
        r(1007, Ye),
        r(1016, Ye),
        r(1008, Ye),
        r(1009, Ye),
        r(25, ka);
    }, "init");
  Li.exports = { init: Oa };
});
var Mi = I((Wh, Fi) => {
  p();
  Fi.exports = {
    BOOL: 16,
    BYTEA: 17,
    CHAR: 18,
    INT8: 20,
    INT2: 21,
    INT4: 23,
    REGPROC: 24,
    TEXT: 25,
    OID: 26,
    TID: 27,
    XID: 28,
    CID: 29,
    JSON: 114,
    XML: 142,
    PG_NODE_TREE: 194,
    SMGR: 210,
    PATH: 602,
    POLYGON: 604,
    CIDR: 650,
    FLOAT4: 700,
    FLOAT8: 701,
    ABSTIME: 702,
    RELTIME: 703,
    TINTERVAL: 704,
    CIRCLE: 718,
    MACADDR8: 774,
    MONEY: 790,
    MACADDR: 829,
    INET: 869,
    ACLITEM: 1033,
    BPCHAR: 1042,
    VARCHAR: 1043,
    DATE: 1082,
    TIME: 1083,
    TIMESTAMP: 1114,
    TIMESTAMPTZ: 1184,
    INTERVAL: 1186,
    TIMETZ: 1266,
    BIT: 1560,
    VARBIT: 1562,
    NUMERIC: 1700,
    REFCURSOR: 1790,
    REGPROCEDURE: 2202,
    REGOPER: 2203,
    REGOPERATOR: 2204,
    REGCLASS: 2205,
    REGTYPE: 2206,
    UUID: 2950,
    TXID_SNAPSHOT: 2970,
    PG_LSN: 3220,
    PG_NDISTINCT: 3361,
    PG_DEPENDENCIES: 3402,
    TSVECTOR: 3614,
    TSQUERY: 3615,
    GTSVECTOR: 3642,
    REGCONFIG: 3734,
    REGDICTIONARY: 3769,
    JSONB: 3802,
    REGNAMESPACE: 4089,
    REGROLE: 4096,
  };
});
var Xe = I((Je) => {
  p();
  var Na = Ai(),
    qa = Ri(),
    Qa = Vt(),
    ja = Mi();
  Je.getTypeParser = Wa;
  Je.setTypeParser = Ha;
  Je.arrayParser = Qa;
  Je.builtins = ja;
  var Ze = { text: {}, binary: {} };
  function Di(r) {
    return String(r);
  }
  a(Di, "noParse");
  function Wa(r, e) {
    return (e = e || "text"), (Ze[e] && Ze[e][r]) || Di;
  }
  a(Wa, "getTypeParser");
  function Ha(r, e, t) {
    typeof e == "function" && ((t = e), (e = "text")), (Ze[e][r] = t);
  }
  a(Ha, "setTypeParser");
  Na.init(function (r, e) {
    Ze.text[r] = e;
  });
  qa.init(function (r, e) {
    Ze.binary[r] = e;
  });
});
var et = I((Kh, tr) => {
  "use strict";
  p();
  tr.exports = {
    host: "localhost",
    user: m.platform === "win32" ? m.env.USERNAME : m.env.USER,
    database: void 0,
    password: null,
    connectionString: void 0,
    port: 5432,
    rows: 0,
    binary: false,
    max: 10,
    idleTimeoutMillis: 3e4,
    client_encoding: "",
    ssl: false,
    application_name: void 0,
    fallback_application_name: void 0,
    options: void 0,
    parseInputDatesAsUTC: false,
    statement_timeout: false,
    lock_timeout: false,
    idle_in_transaction_session_timeout: false,
    query_timeout: false,
    connect_timeout: 0,
    keepalives: 1,
    keepalives_idle: 0,
  };
  var De = Xe(),
    Ga = De.getTypeParser(20, "text"),
    $a = De.getTypeParser(1016, "text");
  tr.exports.__defineSetter__("parseInt8", function (r) {
    De.setTypeParser(20, "text", r ? De.getTypeParser(23, "text") : Ga),
      De.setTypeParser(1016, "text", r ? De.getTypeParser(1007, "text") : $a);
  });
});
var tt = I((Yh, Ui) => {
  "use strict";
  p();
  var Va = (Ht(), O(Wt)),
    Ka = et();
  function za(r) {
    var e = r.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
    return '"' + e + '"';
  }
  a(za, "escapeElement");
  function ki(r) {
    for (var e = "{", t = 0; t < r.length; t++)
      t > 0 && (e = e + ","),
        r[t] === null || typeof r[t] > "u"
          ? (e = e + "NULL")
          : Array.isArray(r[t])
            ? (e = e + ki(r[t]))
            : r[t] instanceof y
              ? (e += "\\\\x" + r[t].toString("hex"))
              : (e += za(pt(r[t])));
    return (e = e + "}"), e;
  }
  a(ki, "arrayString");
  var pt = a(function (r, e) {
    if (r == null) return null;
    if (r instanceof y) return r;
    if (ArrayBuffer.isView(r)) {
      var t = y.from(r.buffer, r.byteOffset, r.byteLength);
      return t.length === r.byteLength
        ? t
        : t.slice(r.byteOffset, r.byteOffset + r.byteLength);
    }
    return r instanceof Date
      ? Ka.parseInputDatesAsUTC
        ? Ja(r)
        : Za(r)
      : Array.isArray(r)
        ? ki(r)
        : typeof r == "object"
          ? Ya(r, e)
          : r.toString();
  }, "prepareValue");
  function Ya(r, e) {
    if (r && typeof r.toPostgres == "function") {
      if (((e = e || []), e.indexOf(r) !== -1))
        throw new Error(
          'circular reference detected while preparing "' + r + '" for query',
        );
      return e.push(r), pt(r.toPostgres(pt), e);
    }
    return JSON.stringify(r);
  }
  a(Ya, "prepareObject");
  function G(r, e) {
    for (r = "" + r; r.length < e; ) r = "0" + r;
    return r;
  }
  a(G, "pad");
  function Za(r) {
    var e = -r.getTimezoneOffset(),
      t = r.getFullYear(),
      n = t < 1;
    n && (t = Math.abs(t) + 1);
    var i =
      G(t, 4) +
      "-" +
      G(r.getMonth() + 1, 2) +
      "-" +
      G(r.getDate(), 2) +
      "T" +
      G(r.getHours(), 2) +
      ":" +
      G(r.getMinutes(), 2) +
      ":" +
      G(r.getSeconds(), 2) +
      "." +
      G(r.getMilliseconds(), 3);
    return (
      e < 0 ? ((i += "-"), (e *= -1)) : (i += "+"),
      (i += G(Math.floor(e / 60), 2) + ":" + G(e % 60, 2)),
      n && (i += " BC"),
      i
    );
  }
  a(Za, "dateToString");
  function Ja(r) {
    var e = r.getUTCFullYear(),
      t = e < 1;
    t && (e = Math.abs(e) + 1);
    var n =
      G(e, 4) +
      "-" +
      G(r.getUTCMonth() + 1, 2) +
      "-" +
      G(r.getUTCDate(), 2) +
      "T" +
      G(r.getUTCHours(), 2) +
      ":" +
      G(r.getUTCMinutes(), 2) +
      ":" +
      G(r.getUTCSeconds(), 2) +
      "." +
      G(r.getUTCMilliseconds(), 3);
    return (n += "+00:00"), t && (n += " BC"), n;
  }
  a(Ja, "dateToStringUTC");
  function Xa(r, e, t) {
    return (
      (r = typeof r == "string" ? { text: r } : r),
      e && (typeof e == "function" ? (r.callback = e) : (r.values = e)),
      t && (r.callback = t),
      r
    );
  }
  a(Xa, "normalizeQueryConfig");
  var rr = a(function (r) {
      return Va.createHash("md5").update(r, "utf-8").digest("hex");
    }, "md5"),
    eu = a(function (r, e, t) {
      var n = rr(e + r),
        i = rr(y.concat([y.from(n), t]));
      return "md5" + i;
    }, "postgresMd5PasswordHash");
  Ui.exports = {
    prepareValue: a(function (e) {
      return pt(e);
    }, "prepareValueWrapper"),
    normalizeQueryConfig: Xa,
    postgresMd5PasswordHash: eu,
    md5: rr,
  };
});
var ji = I((Xh, Qi) => {
  "use strict";
  p();
  var nr = (Ht(), O(Wt));
  function tu(r) {
    if (r.indexOf("SCRAM-SHA-256") === -1)
      throw new Error(
        "SASL: Only mechanism SCRAM-SHA-256 is currently supported",
      );
    let e = nr.randomBytes(18).toString("base64");
    return {
      mechanism: "SCRAM-SHA-256",
      clientNonce: e,
      response: "n,,n=*,r=" + e,
      message: "SASLInitialResponse",
    };
  }
  a(tu, "startSession");
  function ru(r, e, t) {
    if (r.message !== "SASLInitialResponse")
      throw new Error("SASL: Last message was not SASLInitialResponse");
    if (typeof e != "string")
      throw new Error(
        "SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a string",
      );
    if (typeof t != "string")
      throw new Error(
        "SASL: SCRAM-SERVER-FIRST-MESSAGE: serverData must be a string",
      );
    let n = su(t);
    if (n.nonce.startsWith(r.clientNonce)) {
      if (n.nonce.length === r.clientNonce.length)
        throw new Error(
          "SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce is too short",
        );
    } else
      throw new Error(
        "SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce",
      );
    var i = y.from(n.salt, "base64"),
      s = uu(e, i, n.iteration),
      o = ke(s, "Client Key"),
      u = au(o),
      c = "n=*,r=" + r.clientNonce,
      h = "r=" + n.nonce + ",s=" + n.salt + ",i=" + n.iteration,
      l = "c=biws,r=" + n.nonce,
      d = c + "," + h + "," + l,
      b = ke(u, d),
      C = qi(o, b),
      B = C.toString("base64"),
      Q = ke(s, "Server Key"),
      X = ke(Q, d);
    (r.message = "SASLResponse"),
      (r.serverSignature = X.toString("base64")),
      (r.response = l + ",p=" + B);
  }
  a(ru, "continueSession");
  function nu(r, e) {
    if (r.message !== "SASLResponse")
      throw new Error("SASL: Last message was not SASLResponse");
    if (typeof e != "string")
      throw new Error(
        "SASL: SCRAM-SERVER-FINAL-MESSAGE: serverData must be a string",
      );
    let { serverSignature: t } = ou(e);
    if (t !== r.serverSignature)
      throw new Error(
        "SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature does not match",
      );
  }
  a(nu, "finalizeSession");
  function iu(r) {
    if (typeof r != "string")
      throw new TypeError("SASL: text must be a string");
    return r
      .split("")
      .map((e, t) => r.charCodeAt(t))
      .every((e) => (e >= 33 && e <= 43) || (e >= 45 && e <= 126));
  }
  a(iu, "isPrintableChars");
  function Oi(r) {
    return /^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.test(
      r,
    );
  }
  a(Oi, "isBase64");
  function Ni(r) {
    if (typeof r != "string")
      throw new TypeError("SASL: attribute pairs text must be a string");
    return new Map(
      r.split(",").map((e) => {
        if (!/^.=/.test(e))
          throw new Error("SASL: Invalid attribute pair entry");
        let t = e[0],
          n = e.substring(2);
        return [t, n];
      }),
    );
  }
  a(Ni, "parseAttributePairs");
  function su(r) {
    let e = Ni(r),
      t = e.get("r");
    if (t) {
      if (!iu(t))
        throw new Error(
          "SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce must only contain printable characters",
        );
    } else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce missing");
    let n = e.get("s");
    if (n) {
      if (!Oi(n))
        throw new Error(
          "SASL: SCRAM-SERVER-FIRST-MESSAGE: salt must be base64",
        );
    } else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing");
    let i = e.get("i");
    if (i) {
      if (!/^[1-9][0-9]*$/.test(i))
        throw new Error(
          "SASL: SCRAM-SERVER-FIRST-MESSAGE: invalid iteration count",
        );
    } else
      throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: iteration missing");
    let s = parseInt(i, 10);
    return { nonce: t, salt: n, iteration: s };
  }
  a(su, "parseServerFirstMessage");
  function ou(r) {
    let t = Ni(r).get("v");
    if (t) {
      if (!Oi(t))
        throw new Error(
          "SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature must be base64",
        );
    } else
      throw new Error(
        "SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature is missing",
      );
    return { serverSignature: t };
  }
  a(ou, "parseServerFinalMessage");
  function qi(r, e) {
    if (!y.isBuffer(r)) throw new TypeError("first argument must be a Buffer");
    if (!y.isBuffer(e)) throw new TypeError("second argument must be a Buffer");
    if (r.length !== e.length) throw new Error("Buffer lengths must match");
    if (r.length === 0) throw new Error("Buffers cannot be empty");
    return y.from(r.map((t, n) => r[n] ^ e[n]));
  }
  a(qi, "xorBuffers");
  function au(r) {
    return nr.createHash("sha256").update(r).digest();
  }
  a(au, "sha256");
  function ke(r, e) {
    return nr.createHmac("sha256", r).update(e).digest();
  }
  a(ke, "hmacSha256");
  function uu(r, e, t) {
    for (
      var n = ke(r, y.concat([e, y.from([0, 0, 0, 1])])), i = n, s = 0;
      s < t - 1;
      s++
    )
      (n = ke(r, n)), (i = qi(i, n));
    return i;
  }
  a(uu, "Hi");
  Qi.exports = { startSession: tu, continueSession: ru, finalizeSession: nu };
});
var ir = {};
se(ir, { join: () => cu });
function cu(...r) {
  return r.join("/");
}
var sr = z(() => {
  "use strict";
  p();
  a(cu, "join");
});
var or = {};
se(or, { stat: () => hu });
function hu(r, e) {
  e(new Error("No filesystem"));
}
var ar = z(() => {
  "use strict";
  p();
  a(hu, "stat");
});
var ur = {};
se(ur, { default: () => lu });
var lu;
var cr = z(() => {
  "use strict";
  p();
  lu = {};
});
var Wi = {};
se(Wi, { StringDecoder: () => hr });
var lr;
var hr;
var Hi = z(() => {
  "use strict";
  p();
  lr = class lr {
    constructor(e) {
      _(this, "td");
      this.td = new TextDecoder(e);
    }
    write(e) {
      return this.td.decode(e, { stream: true });
    }
    end(e) {
      return this.td.decode(e);
    }
  };
  a(lr, "StringDecoder");
  hr = lr;
});
var Ki = I((cl, Vi) => {
  "use strict";
  p();
  var { Transform: fu } = (cr(), O(ur)),
    { StringDecoder: pu } = (Hi(), O(Wi)),
    we = Symbol("last"),
    dt = Symbol("decoder");
  function du(r, e, t) {
    let n;
    if (this.overflow) {
      if (((n = this[dt].write(r).split(this.matcher)), n.length === 1))
        return t();
      n.shift(), (this.overflow = false);
    } else (this[we] += this[dt].write(r)), (n = this[we].split(this.matcher));
    this[we] = n.pop();
    for (let i = 0; i < n.length; i++)
      try {
        $i(this, this.mapper(n[i]));
      } catch (s) {
        return t(s);
      }
    if (
      ((this.overflow = this[we].length > this.maxLength),
      this.overflow && !this.skipOverflow)
    ) {
      t(new Error("maximum buffer reached"));
      return;
    }
    t();
  }
  a(du, "transform");
  function yu(r) {
    if (((this[we] += this[dt].end()), this[we]))
      try {
        $i(this, this.mapper(this[we]));
      } catch (e) {
        return r(e);
      }
    r();
  }
  a(yu, "flush");
  function $i(r, e) {
    e !== void 0 && r.push(e);
  }
  a($i, "push");
  function Gi(r) {
    return r;
  }
  a(Gi, "noop");
  function mu(r, e, t) {
    switch (
      ((r = r || /\r?\n/), (e = e || Gi), (t = t || {}), arguments.length)
    ) {
      case 1:
        typeof r == "function"
          ? ((e = r), (r = /\r?\n/))
          : typeof r == "object" &&
            !(r instanceof RegExp) &&
            !r[Symbol.split] &&
            ((t = r), (r = /\r?\n/));
        break;
      case 2:
        typeof r == "function"
          ? ((t = e), (e = r), (r = /\r?\n/))
          : typeof e == "object" && ((t = e), (e = Gi));
    }
    (t = Object.assign({}, t)),
      (t.autoDestroy = true),
      (t.transform = du),
      (t.flush = yu),
      (t.readableObjectMode = true);
    let n = new fu(t);
    return (
      (n[we] = ""),
      (n[dt] = new pu("utf8")),
      (n.matcher = r),
      (n.mapper = e),
      (n.maxLength = t.maxLength),
      (n.skipOverflow = t.skipOverflow || false),
      (n.overflow = false),
      (n._destroy = function (i, s) {
        (this._writableState.errorEmitted = false), s(i);
      }),
      n
    );
  }
  a(mu, "split");
  Vi.exports = mu;
});
var Zi = I((fl, fe) => {
  "use strict";
  p();
  var zi = (sr(), O(ir)),
    gu = (cr(), O(ur)).Stream,
    wu = Ki(),
    Yi = (Ge(), O(He)),
    bu = 5432,
    yt = m.platform === "win32",
    rt = m.stderr,
    Su = 56,
    Eu = 7,
    vu = 61440,
    xu = 32768;
  function _u(r) {
    return (r & vu) == xu;
  }
  a(_u, "isRegFile");
  var Ue = ["host", "port", "database", "user", "password"],
    fr = Ue.length,
    Au = Ue[fr - 1];
  function pr() {
    var r = rt instanceof gu && rt.writable === true;
    if (r) {
      var e = Array.prototype.slice.call(arguments).concat(`
`);
      rt.write(Yi.format.apply(Yi, e));
    }
  }
  a(pr, "warn");
  Object.defineProperty(fe.exports, "isWin", {
    get: a(function () {
      return yt;
    }, "get"),
    set: a(function (r) {
      yt = r;
    }, "set"),
  });
  fe.exports.warnTo = function (r) {
    var e = rt;
    return (rt = r), e;
  };
  fe.exports.getFileName = function (r) {
    var e = r || m.env,
      t =
        e.PGPASSFILE ||
        (yt
          ? zi.join(e.APPDATA || "./", "postgresql", "pgpass.conf")
          : zi.join(e.HOME || "./", ".pgpass"));
    return t;
  };
  fe.exports.usePgPass = function (r, e) {
    return Object.prototype.hasOwnProperty.call(m.env, "PGPASSWORD")
      ? false
      : yt
        ? true
        : ((e = e || "<unkn>"),
          _u(r.mode)
            ? r.mode & (Su | Eu)
              ? (pr(
                  'WARNING: password file "%s" has group or world access; permissions should be u=rw (0600) or less',
                  e,
                ),
                false)
              : true
            : (pr('WARNING: password file "%s" is not a plain file', e),
              false));
  };
  var Cu = (fe.exports.match = function (r, e) {
    return Ue.slice(0, -1).reduce(function (t, n, i) {
      return i == 1 && Number(r[n] || bu) === Number(e[n])
        ? t && true
        : t && (e[n] === "*" || e[n] === r[n]);
    }, true);
  });
  fe.exports.getPassword = function (r, e, t) {
    var n,
      i = e.pipe(wu());
    function s(c) {
      var h = Tu(c);
      h && Iu(h) && Cu(r, h) && ((n = h[Au]), i.end());
    }
    a(s, "onLine");
    var o = a(function () {
        e.destroy(), t(n);
      }, "onEnd"),
      u = a(function (c) {
        e.destroy(), pr("WARNING: error on reading file: %s", c), t(void 0);
      }, "onErr");
    e.on("error", u), i.on("data", s).on("end", o).on("error", u);
  };
  var Tu = (fe.exports.parseLine = function (r) {
      if (r.length < 11 || r.match(/^\s+#/)) return null;
      for (
        var e = "",
          t = "",
          n = 0,
          i = 0,
          s = 0,
          o = {},
          u = false,
          c = a(function (l, d, b) {
            var C = r.substring(d, b);
            Object.hasOwnProperty.call(m.env, "PGPASS_NO_DEESCAPE") ||
              (C = C.replace(/\\([:\\])/g, "$1")),
              (o[Ue[l]] = C);
          }, "addToObj"),
          h = 0;
        h < r.length - 1;
        h += 1
      ) {
        if (((e = r.charAt(h + 1)), (t = r.charAt(h)), (u = n == fr - 1), u)) {
          c(n, i);
          break;
        }
        h >= 0 &&
          e == ":" &&
          t !== "\\" &&
          (c(n, i, h + 1), (i = h + 2), (n += 1));
      }
      return (o = Object.keys(o).length === fr ? o : null), o;
    }),
    Iu = (fe.exports.isValidEntry = function (r) {
      for (
        var e = {
            0: function (o) {
              return o.length > 0;
            },
            1: function (o) {
              return o === "*"
                ? true
                : ((o = Number(o)),
                  isFinite(o) &&
                    o > 0 &&
                    o < 9007199254740992 &&
                    Math.floor(o) === o);
            },
            2: function (o) {
              return o.length > 0;
            },
            3: function (o) {
              return o.length > 0;
            },
            4: function (o) {
              return o.length > 0;
            },
          },
          t = 0;
        t < Ue.length;
        t += 1
      ) {
        var n = e[t],
          i = r[Ue[t]] || "",
          s = n(i);
        if (!s) return false;
      }
      return true;
    });
});
var Xi = I((ml, dr) => {
  "use strict";
  p();
  var yl = (sr(), O(ir)),
    Ji = (ar(), O(or)),
    mt = Zi();
  dr.exports = function (r, e) {
    var t = mt.getFileName();
    Ji.stat(t, function (n, i) {
      if (n || !mt.usePgPass(i, t)) return e(void 0);
      var s = Ji.createReadStream(t);
      mt.getPassword(r, s, e);
    });
  };
  dr.exports.warnTo = mt.warnTo;
});
var wt = I((wl, es) => {
  "use strict";
  p();
  var Pu = Xe();
  function gt2(r) {
    (this._types = r || Pu), (this.text = {}), (this.binary = {});
  }
  a(gt2, "TypeOverrides");
  gt2.prototype.getOverrides = function (r) {
    switch (r) {
      case "text":
        return this.text;
      case "binary":
        return this.binary;
      default:
        return {};
    }
  };
  gt2.prototype.setTypeParser = function (r, e, t) {
    typeof e == "function" && ((t = e), (e = "text")),
      (this.getOverrides(e)[r] = t);
  };
  gt2.prototype.getTypeParser = function (r, e) {
    return (
      (e = e || "text"),
      this.getOverrides(e)[r] || this._types.getTypeParser(r, e)
    );
  };
  es.exports = gt2;
});
var ts = {};
se(ts, { default: () => Bu });
var Bu;
var rs = z(() => {
  "use strict";
  p();
  Bu = {};
});
var ns = {};
se(ns, { parse: () => yr });
function yr(r, e = false) {
  let { protocol: t } = new URL(r),
    n = "http:" + r.substring(t.length),
    {
      username: i,
      password: s,
      host: o,
      hostname: u,
      port: c,
      pathname: h,
      search: l,
      searchParams: d,
      hash: b,
    } = new URL(n);
  (s = decodeURIComponent(s)),
    (i = decodeURIComponent(i)),
    (h = decodeURIComponent(h));
  let C = i + ":" + s,
    B = e ? Object.fromEntries(d.entries()) : l;
  return {
    href: r,
    protocol: t,
    auth: C,
    username: i,
    password: s,
    host: o,
    hostname: u,
    port: c,
    pathname: h,
    search: l,
    query: B,
    hash: b,
  };
}
var mr = z(() => {
  "use strict";
  p();
  a(yr, "parse");
});
var ss = I((_l, is2) => {
  "use strict";
  p();
  var Lu = (mr(), O(ns)),
    gr = (ar(), O(or));
  function wr(r) {
    if (r.charAt(0) === "/") {
      var t = r.split(" ");
      return { host: t[0], database: t[1] };
    }
    var e = Lu.parse(
        / |%[^a-f0-9]|%[a-f0-9][^a-f0-9]/i.test(r)
          ? encodeURI(r).replace(/\%25(\d\d)/g, "%$1")
          : r,
        true,
      ),
      t = e.query;
    for (var n in t) Array.isArray(t[n]) && (t[n] = t[n][t[n].length - 1]);
    var i = (e.auth || ":").split(":");
    if (
      ((t.user = i[0]),
      (t.password = i.splice(1).join(":")),
      (t.port = e.port),
      e.protocol == "socket:")
    )
      return (
        (t.host = decodeURI(e.pathname)),
        (t.database = e.query.db),
        (t.client_encoding = e.query.encoding),
        t
      );
    t.host || (t.host = e.hostname);
    var s = e.pathname;
    if (!t.host && s && /^%2f/i.test(s)) {
      var o = s.split("/");
      (t.host = decodeURIComponent(o[0])), (s = o.splice(1).join("/"));
    }
    switch (
      (s && s.charAt(0) === "/" && (s = s.slice(1) || null),
      (t.database = s && decodeURI(s)),
      (t.ssl === "true" || t.ssl === "1") && (t.ssl = true),
      t.ssl === "0" && (t.ssl = false),
      (t.sslcert || t.sslkey || t.sslrootcert || t.sslmode) && (t.ssl = {}),
      t.sslcert && (t.ssl.cert = gr.readFileSync(t.sslcert).toString()),
      t.sslkey && (t.ssl.key = gr.readFileSync(t.sslkey).toString()),
      t.sslrootcert && (t.ssl.ca = gr.readFileSync(t.sslrootcert).toString()),
      t.sslmode)
    ) {
      case "disable": {
        t.ssl = false;
        break;
      }
      case "prefer":
      case "require":
      case "verify-ca":
      case "verify-full":
        break;
      case "no-verify": {
        t.ssl.rejectUnauthorized = false;
        break;
      }
    }
    return t;
  }
  a(wr, "parse");
  is2.exports = wr;
  wr.parse = wr;
});
var bt = I((Tl, us) => {
  "use strict";
  p();
  var Ru = (rs(), O(ts)),
    as = et(),
    os = ss().parse,
    V = a(function (r, e, t) {
      return (
        t === void 0
          ? (t = m.env["PG" + r.toUpperCase()])
          : t === false || (t = m.env[t]),
        e[r] || t || as[r]
      );
    }, "val"),
    Fu = a(function () {
      switch (m.env.PGSSLMODE) {
        case "disable":
          return false;
        case "prefer":
        case "require":
        case "verify-ca":
        case "verify-full":
          return true;
        case "no-verify":
          return { rejectUnauthorized: false };
      }
      return as.ssl;
    }, "readSSLConfigFromEnvironment"),
    Oe = a(function (r) {
      return "'" + ("" + r).replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "'";
    }, "quoteParamValue"),
    ie = a(function (r, e, t) {
      var n = e[t];
      n != null && r.push(t + "=" + Oe(n));
    }, "add"),
    Sr = class Sr {
      constructor(e) {
        (e = typeof e == "string" ? os(e) : e || {}),
          e.connectionString &&
            (e = Object.assign({}, e, os(e.connectionString))),
          (this.user = V("user", e)),
          (this.database = V("database", e)),
          this.database === void 0 && (this.database = this.user),
          (this.port = parseInt(V("port", e), 10)),
          (this.host = V("host", e)),
          Object.defineProperty(this, "password", {
            configurable: true,
            enumerable: false,
            writable: true,
            value: V("password", e),
          }),
          (this.binary = V("binary", e)),
          (this.options = V("options", e)),
          (this.ssl = typeof e.ssl > "u" ? Fu() : e.ssl),
          typeof this.ssl == "string" &&
            this.ssl === "true" &&
            (this.ssl = true),
          this.ssl === "no-verify" &&
            (this.ssl = { rejectUnauthorized: false }),
          this.ssl &&
            this.ssl.key &&
            Object.defineProperty(this.ssl, "key", { enumerable: false }),
          (this.client_encoding = V("client_encoding", e)),
          (this.replication = V("replication", e)),
          (this.isDomainSocket = !(this.host || "").indexOf("/")),
          (this.application_name = V("application_name", e, "PGAPPNAME")),
          (this.fallback_application_name = V(
            "fallback_application_name",
            e,
            false,
          )),
          (this.statement_timeout = V("statement_timeout", e, false)),
          (this.lock_timeout = V("lock_timeout", e, false)),
          (this.idle_in_transaction_session_timeout = V(
            "idle_in_transaction_session_timeout",
            e,
            false,
          )),
          (this.query_timeout = V("query_timeout", e, false)),
          e.connectionTimeoutMillis === void 0
            ? (this.connect_timeout = m.env.PGCONNECT_TIMEOUT || 0)
            : (this.connect_timeout = Math.floor(
                e.connectionTimeoutMillis / 1e3,
              )),
          e.keepAlive === false
            ? (this.keepalives = 0)
            : e.keepAlive === true && (this.keepalives = 1),
          typeof e.keepAliveInitialDelayMillis == "number" &&
            (this.keepalives_idle = Math.floor(
              e.keepAliveInitialDelayMillis / 1e3,
            ));
      }
      getLibpqConnectionString(e) {
        var t = [];
        ie(t, this, "user"),
          ie(t, this, "password"),
          ie(t, this, "port"),
          ie(t, this, "application_name"),
          ie(t, this, "fallback_application_name"),
          ie(t, this, "connect_timeout"),
          ie(t, this, "options");
        var n =
          typeof this.ssl == "object"
            ? this.ssl
            : this.ssl
              ? { sslmode: this.ssl }
              : {};
        if (
          (ie(t, n, "sslmode"),
          ie(t, n, "sslca"),
          ie(t, n, "sslkey"),
          ie(t, n, "sslcert"),
          ie(t, n, "sslrootcert"),
          this.database && t.push("dbname=" + Oe(this.database)),
          this.replication && t.push("replication=" + Oe(this.replication)),
          this.host && t.push("host=" + Oe(this.host)),
          this.isDomainSocket)
        )
          return e(null, t.join(" "));
        this.client_encoding &&
          t.push("client_encoding=" + Oe(this.client_encoding)),
          Ru.lookup(this.host, function (i, s) {
            return i
              ? e(i, null)
              : (t.push("hostaddr=" + Oe(s)), e(null, t.join(" ")));
          });
      }
    };
  a(Sr, "ConnectionParameters");
  var br = Sr;
  us.exports = br;
});
var ls = I((Bl, hs) => {
  "use strict";
  p();
  var Mu = Xe(),
    cs = /^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/,
    vr = class vr {
      constructor(e, t) {
        (this.command = null),
          (this.rowCount = null),
          (this.oid = null),
          (this.rows = []),
          (this.fields = []),
          (this._parsers = void 0),
          (this._types = t),
          (this.RowCtor = null),
          (this.rowAsArray = e === "array"),
          this.rowAsArray && (this.parseRow = this._parseRowAsArray);
      }
      addCommandComplete(e) {
        var t;
        e.text ? (t = cs.exec(e.text)) : (t = cs.exec(e.command)),
          t &&
            ((this.command = t[1]),
            t[3]
              ? ((this.oid = parseInt(t[2], 10)),
                (this.rowCount = parseInt(t[3], 10)))
              : t[2] && (this.rowCount = parseInt(t[2], 10)));
      }
      _parseRowAsArray(e) {
        for (var t = new Array(e.length), n = 0, i = e.length; n < i; n++) {
          var s = e[n];
          s !== null ? (t[n] = this._parsers[n](s)) : (t[n] = null);
        }
        return t;
      }
      parseRow(e) {
        for (var t = {}, n = 0, i = e.length; n < i; n++) {
          var s = e[n],
            o = this.fields[n].name;
          s !== null ? (t[o] = this._parsers[n](s)) : (t[o] = null);
        }
        return t;
      }
      addRow(e) {
        this.rows.push(e);
      }
      addFields(e) {
        (this.fields = e),
          this.fields.length && (this._parsers = new Array(e.length));
        for (var t = 0; t < e.length; t++) {
          var n = e[t];
          this._types
            ? (this._parsers[t] = this._types.getTypeParser(
                n.dataTypeID,
                n.format || "text",
              ))
            : (this._parsers[t] = Mu.getTypeParser(
                n.dataTypeID,
                n.format || "text",
              ));
        }
      }
    };
  a(vr, "Result");
  var Er = vr;
  hs.exports = Er;
});
var ys = I((Fl, ds) => {
  "use strict";
  p();
  var { EventEmitter: Du } = ge(),
    fs = ls(),
    ps = tt(),
    _r = class _r extends Du {
      constructor(e, t, n) {
        super(),
          (e = ps.normalizeQueryConfig(e, t, n)),
          (this.text = e.text),
          (this.values = e.values),
          (this.rows = e.rows),
          (this.types = e.types),
          (this.name = e.name),
          (this.binary = e.binary),
          (this.portal = e.portal || ""),
          (this.callback = e.callback),
          (this._rowMode = e.rowMode),
          m.domain && e.callback && (this.callback = m.domain.bind(e.callback)),
          (this._result = new fs(this._rowMode, this.types)),
          (this._results = this._result),
          (this.isPreparedStatement = false),
          (this._canceledDueToError = false),
          (this._promise = null);
      }
      requiresPreparation() {
        return this.name || this.rows
          ? true
          : !this.text || !this.values
            ? false
            : this.values.length > 0;
      }
      _checkForMultirow() {
        this._result.command &&
          (Array.isArray(this._results) || (this._results = [this._result]),
          (this._result = new fs(this._rowMode, this.types)),
          this._results.push(this._result));
      }
      handleRowDescription(e) {
        this._checkForMultirow(),
          this._result.addFields(e.fields),
          (this._accumulateRows =
            this.callback || !this.listeners("row").length);
      }
      handleDataRow(e) {
        let t;
        if (!this._canceledDueToError) {
          try {
            t = this._result.parseRow(e.fields);
          } catch (n) {
            this._canceledDueToError = n;
            return;
          }
          this.emit("row", t, this._result),
            this._accumulateRows && this._result.addRow(t);
        }
      }
      handleCommandComplete(e, t) {
        this._checkForMultirow(),
          this._result.addCommandComplete(e),
          this.rows && t.sync();
      }
      handleEmptyQuery(e) {
        this.rows && e.sync();
      }
      handleError(e, t) {
        if (
          (this._canceledDueToError &&
            ((e = this._canceledDueToError),
            (this._canceledDueToError = false)),
          this.callback)
        )
          return this.callback(e);
        this.emit("error", e);
      }
      handleReadyForQuery(e) {
        if (this._canceledDueToError)
          return this.handleError(this._canceledDueToError, e);
        if (this.callback)
          try {
            this.callback(null, this._results);
          } catch (t) {
            m.nextTick(() => {
              throw t;
            });
          }
        this.emit("end", this._results);
      }
      submit(e) {
        if (typeof this.text != "string" && typeof this.name != "string")
          return new Error(
            "A query must have either text or a name. Supplying neither is unsupported.",
          );
        let t = e.parsedStatements[this.name];
        return this.text && t && this.text !== t
          ? new Error(
              `Prepared statements must be unique - '${this.name}' was used for a different statement`,
            )
          : this.values && !Array.isArray(this.values)
            ? new Error("Query values must be an array")
            : (this.requiresPreparation()
                ? this.prepare(e)
                : e.query(this.text),
              null);
      }
      hasBeenParsed(e) {
        return this.name && e.parsedStatements[this.name];
      }
      handlePortalSuspended(e) {
        this._getRows(e, this.rows);
      }
      _getRows(e, t) {
        e.execute({ portal: this.portal, rows: t }), t ? e.flush() : e.sync();
      }
      prepare(e) {
        (this.isPreparedStatement = true),
          this.hasBeenParsed(e) ||
            e.parse({ text: this.text, name: this.name, types: this.types });
        try {
          e.bind({
            portal: this.portal,
            statement: this.name,
            values: this.values,
            binary: this.binary,
            valueMapper: ps.prepareValue,
          });
        } catch (t) {
          this.handleError(t, e);
          return;
        }
        e.describe({ type: "P", name: this.portal || "" }),
          this._getRows(e, this.rows);
      }
      handleCopyInResponse(e) {
        e.sendCopyFail("No source stream defined");
      }
      handleCopyData(e, t) {}
    };
  a(_r, "Query");
  var xr = _r;
  ds.exports = xr;
});
var ws = {};
se(ws, { Socket: () => _e, isIP: () => ku });
function ku(r) {
  return 0;
}
var gs;
var ms;
var x;
var _e;
var St = z(() => {
  "use strict";
  p();
  gs = Ie(ge(), 1);
  a(ku, "isIP");
  (ms = /^[^.]+\./),
    (x = class x2 extends gs.EventEmitter {
      constructor() {
        super(...arguments);
        _(this, "opts", {});
        _(this, "connecting", false);
        _(this, "pending", true);
        _(this, "writable", true);
        _(this, "encrypted", false);
        _(this, "authorized", false);
        _(this, "destroyed", false);
        _(this, "ws", null);
        _(this, "writeBuffer");
        _(this, "tlsState", 0);
        _(this, "tlsRead");
        _(this, "tlsWrite");
      }
      static get poolQueryViaFetch() {
        return x2.opts.poolQueryViaFetch ?? x2.defaults.poolQueryViaFetch;
      }
      static set poolQueryViaFetch(t) {
        x2.opts.poolQueryViaFetch = t;
      }
      static get fetchEndpoint() {
        return x2.opts.fetchEndpoint ?? x2.defaults.fetchEndpoint;
      }
      static set fetchEndpoint(t) {
        x2.opts.fetchEndpoint = t;
      }
      static get fetchConnectionCache() {
        return true;
      }
      static set fetchConnectionCache(t) {
        console.warn(
          "The `fetchConnectionCache` option is deprecated (now always `true`)",
        );
      }
      static get fetchFunction() {
        return x2.opts.fetchFunction ?? x2.defaults.fetchFunction;
      }
      static set fetchFunction(t) {
        x2.opts.fetchFunction = t;
      }
      static get webSocketConstructor() {
        return x2.opts.webSocketConstructor ?? x2.defaults.webSocketConstructor;
      }
      static set webSocketConstructor(t) {
        x2.opts.webSocketConstructor = t;
      }
      get webSocketConstructor() {
        return this.opts.webSocketConstructor ?? x2.webSocketConstructor;
      }
      set webSocketConstructor(t) {
        this.opts.webSocketConstructor = t;
      }
      static get wsProxy() {
        return x2.opts.wsProxy ?? x2.defaults.wsProxy;
      }
      static set wsProxy(t) {
        x2.opts.wsProxy = t;
      }
      get wsProxy() {
        return this.opts.wsProxy ?? x2.wsProxy;
      }
      set wsProxy(t) {
        this.opts.wsProxy = t;
      }
      static get coalesceWrites() {
        return x2.opts.coalesceWrites ?? x2.defaults.coalesceWrites;
      }
      static set coalesceWrites(t) {
        x2.opts.coalesceWrites = t;
      }
      get coalesceWrites() {
        return this.opts.coalesceWrites ?? x2.coalesceWrites;
      }
      set coalesceWrites(t) {
        this.opts.coalesceWrites = t;
      }
      static get useSecureWebSocket() {
        return x2.opts.useSecureWebSocket ?? x2.defaults.useSecureWebSocket;
      }
      static set useSecureWebSocket(t) {
        x2.opts.useSecureWebSocket = t;
      }
      get useSecureWebSocket() {
        return this.opts.useSecureWebSocket ?? x2.useSecureWebSocket;
      }
      set useSecureWebSocket(t) {
        this.opts.useSecureWebSocket = t;
      }
      static get forceDisablePgSSL() {
        return x2.opts.forceDisablePgSSL ?? x2.defaults.forceDisablePgSSL;
      }
      static set forceDisablePgSSL(t) {
        x2.opts.forceDisablePgSSL = t;
      }
      get forceDisablePgSSL() {
        return this.opts.forceDisablePgSSL ?? x2.forceDisablePgSSL;
      }
      set forceDisablePgSSL(t) {
        this.opts.forceDisablePgSSL = t;
      }
      static get disableSNI() {
        return x2.opts.disableSNI ?? x2.defaults.disableSNI;
      }
      static set disableSNI(t) {
        x2.opts.disableSNI = t;
      }
      get disableSNI() {
        return this.opts.disableSNI ?? x2.disableSNI;
      }
      set disableSNI(t) {
        this.opts.disableSNI = t;
      }
      static get pipelineConnect() {
        return x2.opts.pipelineConnect ?? x2.defaults.pipelineConnect;
      }
      static set pipelineConnect(t) {
        x2.opts.pipelineConnect = t;
      }
      get pipelineConnect() {
        return this.opts.pipelineConnect ?? x2.pipelineConnect;
      }
      set pipelineConnect(t) {
        this.opts.pipelineConnect = t;
      }
      static get subtls() {
        return x2.opts.subtls ?? x2.defaults.subtls;
      }
      static set subtls(t) {
        x2.opts.subtls = t;
      }
      get subtls() {
        return this.opts.subtls ?? x2.subtls;
      }
      set subtls(t) {
        this.opts.subtls = t;
      }
      static get pipelineTLS() {
        return x2.opts.pipelineTLS ?? x2.defaults.pipelineTLS;
      }
      static set pipelineTLS(t) {
        x2.opts.pipelineTLS = t;
      }
      get pipelineTLS() {
        return this.opts.pipelineTLS ?? x2.pipelineTLS;
      }
      set pipelineTLS(t) {
        this.opts.pipelineTLS = t;
      }
      static get rootCerts() {
        return x2.opts.rootCerts ?? x2.defaults.rootCerts;
      }
      static set rootCerts(t) {
        x2.opts.rootCerts = t;
      }
      get rootCerts() {
        return this.opts.rootCerts ?? x2.rootCerts;
      }
      set rootCerts(t) {
        this.opts.rootCerts = t;
      }
      wsProxyAddrForHost(t, n) {
        let i = this.wsProxy;
        if (i === void 0)
          throw new Error(
            "No WebSocket proxy is configured. Please see https://github.com/neondatabase/serverless/blob/main/CONFIG.md#wsproxy-string--host-string-port-number--string--string",
          );
        return typeof i == "function" ? i(t, n) : `${i}?address=${t}:${n}`;
      }
      setNoDelay() {
        return this;
      }
      setKeepAlive() {
        return this;
      }
      ref() {
        return this;
      }
      unref() {
        return this;
      }
      connect(t, n, i) {
        (this.connecting = true), i && this.once("connect", i);
        let s = a(() => {
            (this.connecting = false),
              (this.pending = false),
              this.emit("connect"),
              this.emit("ready");
          }, "handleWebSocketOpen"),
          o = a((c, h = false) => {
            (c.binaryType = "arraybuffer"),
              c.addEventListener("error", (l) => {
                this.emit("error", l), this.emit("close");
              }),
              c.addEventListener("message", (l) => {
                if (this.tlsState === 0) {
                  let d = y.from(l.data);
                  this.emit("data", d);
                }
              }),
              c.addEventListener("close", () => {
                this.emit("close");
              }),
              h ? s() : c.addEventListener("open", s);
          }, "configureWebSocket"),
          u;
        try {
          u = this.wsProxyAddrForHost(
            n,
            typeof t == "string" ? parseInt(t, 10) : t,
          );
        } catch (c) {
          this.emit("error", c), this.emit("close");
          return;
        }
        try {
          let h = (this.useSecureWebSocket ? "wss:" : "ws:") + "//" + u;
          if (this.webSocketConstructor !== void 0)
            (this.ws = new this.webSocketConstructor(h)), o(this.ws);
          else
            try {
              (this.ws = new WebSocket(h)), o(this.ws);
            } catch {
              (this.ws = new __unstable_WebSocket(h)), o(this.ws);
            }
        } catch (c) {
          let l = (this.useSecureWebSocket ? "https:" : "http:") + "//" + u;
          fetch(l, { headers: { Upgrade: "websocket" } })
            .then((d) => {
              if (((this.ws = d.webSocket), this.ws == null)) throw c;
              this.ws.accept(), o(this.ws, true);
            })
            .catch((d) => {
              this.emit(
                "error",
                new Error(
                  `All attempts to open a WebSocket to connect to the database failed. Please refer to https://github.com/neondatabase/serverless/blob/main/CONFIG.md#websocketconstructor-typeof-websocket--undefined. Details: ${d.message}`,
                ),
              ),
                this.emit("close");
            });
        }
      }
      async startTls(t) {
        if (this.subtls === void 0)
          throw new Error(
            "For Postgres SSL connections, you must set `neonConfig.subtls` to the subtls library. See https://github.com/neondatabase/serverless/blob/main/CONFIG.md for more information.",
          );
        this.tlsState = 1;
        let n = this.subtls.TrustedCert.fromPEM(this.rootCerts),
          i = new this.subtls.WebSocketReadQueue(this.ws),
          s = i.read.bind(i),
          o = this.rawWrite.bind(this),
          [u, c] = await this.subtls.startTls(t, n, s, o, {
            useSNI: !this.disableSNI,
            expectPreData: this.pipelineTLS ? new Uint8Array([83]) : void 0,
          });
        (this.tlsRead = u),
          (this.tlsWrite = c),
          (this.tlsState = 2),
          (this.encrypted = true),
          (this.authorized = true),
          this.emit("secureConnection", this),
          this.tlsReadLoop();
      }
      async tlsReadLoop() {
        for (;;) {
          let t = await this.tlsRead();
          if (t === void 0) break;
          {
            let n = y.from(t);
            this.emit("data", n);
          }
        }
      }
      rawWrite(t) {
        if (!this.coalesceWrites) {
          this.ws.send(t);
          return;
        }
        if (this.writeBuffer === void 0)
          (this.writeBuffer = t),
            setTimeout(() => {
              this.ws.send(this.writeBuffer), (this.writeBuffer = void 0);
            }, 0);
        else {
          let n = new Uint8Array(this.writeBuffer.length + t.length);
          n.set(this.writeBuffer),
            n.set(t, this.writeBuffer.length),
            (this.writeBuffer = n);
        }
      }
      write(t, n = "utf8", i = (s) => {}) {
        return t.length === 0
          ? (i(), true)
          : (typeof t == "string" && (t = y.from(t, n)),
            this.tlsState === 0
              ? (this.rawWrite(t), i())
              : this.tlsState === 1
                ? this.once("secureConnection", () => {
                    this.write(t, n, i);
                  })
                : (this.tlsWrite(t), i()),
            true);
      }
      end(t = y.alloc(0), n = "utf8", i = () => {}) {
        return (
          this.write(t, n, () => {
            this.ws.close(), i();
          }),
          this
        );
      }
      destroy() {
        return (this.destroyed = true), this.end();
      }
    });
  a(x, "Socket"),
    _(x, "defaults", {
      poolQueryViaFetch: false,
      fetchEndpoint: a((t, n, i) => {
        let s;
        return (
          i?.jwtAuth
            ? (s = t.replace(ms, "apiauth."))
            : (s = t.replace(ms, "api.")),
          "https://" + s + "/sql"
        );
      }, "fetchEndpoint"),
      fetchConnectionCache: true,
      fetchFunction: void 0,
      webSocketConstructor: void 0,
      wsProxy: a((t) => t + "/v2", "wsProxy"),
      useSecureWebSocket: true,
      forceDisablePgSSL: true,
      coalesceWrites: true,
      pipelineConnect: "password",
      subtls: void 0,
      rootCerts: "",
      pipelineTLS: false,
      disableSNI: false,
    }),
    _(x, "opts", {});
  _e = x;
});
var Xr = I((T) => {
  "use strict";
  p();
  Object.defineProperty(T, "__esModule", { value: true });
  T.NoticeMessage =
    T.DataRowMessage =
    T.CommandCompleteMessage =
    T.ReadyForQueryMessage =
    T.NotificationResponseMessage =
    T.BackendKeyDataMessage =
    T.AuthenticationMD5Password =
    T.ParameterStatusMessage =
    T.ParameterDescriptionMessage =
    T.RowDescriptionMessage =
    T.Field =
    T.CopyResponse =
    T.CopyDataMessage =
    T.DatabaseError =
    T.copyDone =
    T.emptyQuery =
    T.replicationStart =
    T.portalSuspended =
    T.noData =
    T.closeComplete =
    T.bindComplete =
    T.parseComplete =
      void 0;
  T.parseComplete = { name: "parseComplete", length: 5 };
  T.bindComplete = { name: "bindComplete", length: 5 };
  T.closeComplete = { name: "closeComplete", length: 5 };
  T.noData = { name: "noData", length: 5 };
  T.portalSuspended = { name: "portalSuspended", length: 5 };
  T.replicationStart = { name: "replicationStart", length: 4 };
  T.emptyQuery = { name: "emptyQuery", length: 4 };
  T.copyDone = { name: "copyDone", length: 4 };
  var Nr = class Nr extends Error {
    constructor(e, t, n) {
      super(e), (this.length = t), (this.name = n);
    }
  };
  a(Nr, "DatabaseError");
  var Ar = Nr;
  T.DatabaseError = Ar;
  var qr = class qr {
    constructor(e, t) {
      (this.length = e), (this.chunk = t), (this.name = "copyData");
    }
  };
  a(qr, "CopyDataMessage");
  var Cr = qr;
  T.CopyDataMessage = Cr;
  var Qr = class Qr {
    constructor(e, t, n, i) {
      (this.length = e),
        (this.name = t),
        (this.binary = n),
        (this.columnTypes = new Array(i));
    }
  };
  a(Qr, "CopyResponse");
  var Tr = Qr;
  T.CopyResponse = Tr;
  var jr = class jr {
    constructor(e, t, n, i, s, o, u) {
      (this.name = e),
        (this.tableID = t),
        (this.columnID = n),
        (this.dataTypeID = i),
        (this.dataTypeSize = s),
        (this.dataTypeModifier = o),
        (this.format = u);
    }
  };
  a(jr, "Field");
  var Ir = jr;
  T.Field = Ir;
  var Wr = class Wr {
    constructor(e, t) {
      (this.length = e),
        (this.fieldCount = t),
        (this.name = "rowDescription"),
        (this.fields = new Array(this.fieldCount));
    }
  };
  a(Wr, "RowDescriptionMessage");
  var Pr = Wr;
  T.RowDescriptionMessage = Pr;
  var Hr = class Hr {
    constructor(e, t) {
      (this.length = e),
        (this.parameterCount = t),
        (this.name = "parameterDescription"),
        (this.dataTypeIDs = new Array(this.parameterCount));
    }
  };
  a(Hr, "ParameterDescriptionMessage");
  var Br = Hr;
  T.ParameterDescriptionMessage = Br;
  var Gr = class Gr {
    constructor(e, t, n) {
      (this.length = e),
        (this.parameterName = t),
        (this.parameterValue = n),
        (this.name = "parameterStatus");
    }
  };
  a(Gr, "ParameterStatusMessage");
  var Lr = Gr;
  T.ParameterStatusMessage = Lr;
  var $r = class $r {
    constructor(e, t) {
      (this.length = e),
        (this.salt = t),
        (this.name = "authenticationMD5Password");
    }
  };
  a($r, "AuthenticationMD5Password");
  var Rr = $r;
  T.AuthenticationMD5Password = Rr;
  var Vr = class Vr {
    constructor(e, t, n) {
      (this.length = e),
        (this.processID = t),
        (this.secretKey = n),
        (this.name = "backendKeyData");
    }
  };
  a(Vr, "BackendKeyDataMessage");
  var Fr = Vr;
  T.BackendKeyDataMessage = Fr;
  var Kr = class Kr {
    constructor(e, t, n, i) {
      (this.length = e),
        (this.processId = t),
        (this.channel = n),
        (this.payload = i),
        (this.name = "notification");
    }
  };
  a(Kr, "NotificationResponseMessage");
  var Mr = Kr;
  T.NotificationResponseMessage = Mr;
  var zr = class zr {
    constructor(e, t) {
      (this.length = e), (this.status = t), (this.name = "readyForQuery");
    }
  };
  a(zr, "ReadyForQueryMessage");
  var Dr = zr;
  T.ReadyForQueryMessage = Dr;
  var Yr = class Yr {
    constructor(e, t) {
      (this.length = e), (this.text = t), (this.name = "commandComplete");
    }
  };
  a(Yr, "CommandCompleteMessage");
  var kr = Yr;
  T.CommandCompleteMessage = kr;
  var Zr = class Zr {
    constructor(e, t) {
      (this.length = e),
        (this.fields = t),
        (this.name = "dataRow"),
        (this.fieldCount = t.length);
    }
  };
  a(Zr, "DataRowMessage");
  var Ur = Zr;
  T.DataRowMessage = Ur;
  var Jr = class Jr {
    constructor(e, t) {
      (this.length = e), (this.message = t), (this.name = "notice");
    }
  };
  a(Jr, "NoticeMessage");
  var Or = Jr;
  T.NoticeMessage = Or;
});
var bs = I((Et) => {
  "use strict";
  p();
  Object.defineProperty(Et, "__esModule", { value: true });
  Et.Writer = void 0;
  var tn = class tn {
    constructor(e = 256) {
      (this.size = e),
        (this.offset = 5),
        (this.headerPosition = 0),
        (this.buffer = y.allocUnsafe(e));
    }
    ensure(e) {
      var t = this.buffer.length - this.offset;
      if (t < e) {
        var n = this.buffer,
          i = n.length + (n.length >> 1) + e;
        (this.buffer = y.allocUnsafe(i)), n.copy(this.buffer);
      }
    }
    addInt32(e) {
      return (
        this.ensure(4),
        (this.buffer[this.offset++] = (e >>> 24) & 255),
        (this.buffer[this.offset++] = (e >>> 16) & 255),
        (this.buffer[this.offset++] = (e >>> 8) & 255),
        (this.buffer[this.offset++] = (e >>> 0) & 255),
        this
      );
    }
    addInt16(e) {
      return (
        this.ensure(2),
        (this.buffer[this.offset++] = (e >>> 8) & 255),
        (this.buffer[this.offset++] = (e >>> 0) & 255),
        this
      );
    }
    addCString(e) {
      if (!e) this.ensure(1);
      else {
        var t = y.byteLength(e);
        this.ensure(t + 1),
          this.buffer.write(e, this.offset, "utf-8"),
          (this.offset += t);
      }
      return (this.buffer[this.offset++] = 0), this;
    }
    addString(e = "") {
      var t = y.byteLength(e);
      return (
        this.ensure(t),
        this.buffer.write(e, this.offset),
        (this.offset += t),
        this
      );
    }
    add(e) {
      return (
        this.ensure(e.length),
        e.copy(this.buffer, this.offset),
        (this.offset += e.length),
        this
      );
    }
    join(e) {
      if (e) {
        this.buffer[this.headerPosition] = e;
        let t = this.offset - (this.headerPosition + 1);
        this.buffer.writeInt32BE(t, this.headerPosition + 1);
      }
      return this.buffer.slice(e ? 0 : 5, this.offset);
    }
    flush(e) {
      var t = this.join(e);
      return (
        (this.offset = 5),
        (this.headerPosition = 0),
        (this.buffer = y.allocUnsafe(this.size)),
        t
      );
    }
  };
  a(tn, "Writer");
  var en = tn;
  Et.Writer = en;
});
var Es = I((xt) => {
  "use strict";
  p();
  Object.defineProperty(xt, "__esModule", { value: true });
  xt.serialize = void 0;
  var rn = bs(),
    M = new rn.Writer(),
    Uu = a((r) => {
      M.addInt16(3).addInt16(0);
      for (let n of Object.keys(r)) M.addCString(n).addCString(r[n]);
      M.addCString("client_encoding").addCString("UTF8");
      var e = M.addCString("").flush(),
        t = e.length + 4;
      return new rn.Writer().addInt32(t).add(e).flush();
    }, "startup"),
    Ou = a(() => {
      let r = y.allocUnsafe(8);
      return r.writeInt32BE(8, 0), r.writeInt32BE(80877103, 4), r;
    }, "requestSsl"),
    Nu = a((r) => M.addCString(r).flush(112), "password"),
    qu = a(function (r, e) {
      return (
        M.addCString(r).addInt32(y.byteLength(e)).addString(e), M.flush(112)
      );
    }, "sendSASLInitialResponseMessage"),
    Qu = a(function (r) {
      return M.addString(r).flush(112);
    }, "sendSCRAMClientFinalMessage"),
    ju = a((r) => M.addCString(r).flush(81), "query"),
    Ss = [],
    Wu = a((r) => {
      let e = r.name || "";
      e.length > 63 &&
        (console.error(
          "Warning! Postgres only supports 63 characters for query names.",
        ),
        console.error("You supplied %s (%s)", e, e.length),
        console.error(
          "This can cause conflicts and silent errors executing queries",
        ));
      let t = r.types || Ss;
      for (
        var n = t.length,
          i = M.addCString(e).addCString(r.text).addInt16(n),
          s = 0;
        s < n;
        s++
      )
        i.addInt32(t[s]);
      return M.flush(80);
    }, "parse"),
    Ne = new rn.Writer(),
    Hu = a(function (r, e) {
      for (let t = 0; t < r.length; t++) {
        let n = e ? e(r[t], t) : r[t];
        n == null
          ? (M.addInt16(0), Ne.addInt32(-1))
          : n instanceof y
            ? (M.addInt16(1), Ne.addInt32(n.length), Ne.add(n))
            : (M.addInt16(0), Ne.addInt32(y.byteLength(n)), Ne.addString(n));
      }
    }, "writeValues"),
    Gu = a((r = {}) => {
      let e = r.portal || "",
        t = r.statement || "",
        n = r.binary || false,
        i = r.values || Ss,
        s = i.length;
      return (
        M.addCString(e).addCString(t),
        M.addInt16(s),
        Hu(i, r.valueMapper),
        M.addInt16(s),
        M.add(Ne.flush()),
        M.addInt16(n ? 1 : 0),
        M.flush(66)
      );
    }, "bind"),
    $u = y.from([69, 0, 0, 0, 9, 0, 0, 0, 0, 0]),
    Vu = a((r) => {
      if (!r || (!r.portal && !r.rows)) return $u;
      let e = r.portal || "",
        t = r.rows || 0,
        n = y.byteLength(e),
        i = 4 + n + 1 + 4,
        s = y.allocUnsafe(1 + i);
      return (
        (s[0] = 69),
        s.writeInt32BE(i, 1),
        s.write(e, 5, "utf-8"),
        (s[n + 5] = 0),
        s.writeUInt32BE(t, s.length - 4),
        s
      );
    }, "execute"),
    Ku = a((r, e) => {
      let t = y.allocUnsafe(16);
      return (
        t.writeInt32BE(16, 0),
        t.writeInt16BE(1234, 4),
        t.writeInt16BE(5678, 6),
        t.writeInt32BE(r, 8),
        t.writeInt32BE(e, 12),
        t
      );
    }, "cancel"),
    nn = a((r, e) => {
      let n = 4 + y.byteLength(e) + 1,
        i = y.allocUnsafe(1 + n);
      return (
        (i[0] = r), i.writeInt32BE(n, 1), i.write(e, 5, "utf-8"), (i[n] = 0), i
      );
    }, "cstringMessage"),
    zu = M.addCString("P").flush(68),
    Yu = M.addCString("S").flush(68),
    Zu = a(
      (r) =>
        r.name ? nn(68, `${r.type}${r.name || ""}`) : r.type === "P" ? zu : Yu,
      "describe",
    ),
    Ju = a((r) => {
      let e = `${r.type}${r.name || ""}`;
      return nn(67, e);
    }, "close"),
    Xu = a((r) => M.add(r).flush(100), "copyData"),
    ec = a((r) => nn(102, r), "copyFail"),
    vt = a((r) => y.from([r, 0, 0, 0, 4]), "codeOnlyBuffer"),
    tc = vt(72),
    rc = vt(83),
    nc = vt(88),
    ic = vt(99),
    sc = {
      startup: Uu,
      password: Nu,
      requestSsl: Ou,
      sendSASLInitialResponseMessage: qu,
      sendSCRAMClientFinalMessage: Qu,
      query: ju,
      parse: Wu,
      bind: Gu,
      execute: Vu,
      describe: Zu,
      close: Ju,
      flush: a(() => tc, "flush"),
      sync: a(() => rc, "sync"),
      end: a(() => nc, "end"),
      copyData: Xu,
      copyDone: a(() => ic, "copyDone"),
      copyFail: ec,
      cancel: Ku,
    };
  xt.serialize = sc;
});
var vs = I((_t) => {
  "use strict";
  p();
  Object.defineProperty(_t, "__esModule", { value: true });
  _t.BufferReader = void 0;
  var oc = y.allocUnsafe(0),
    on = class on {
      constructor(e = 0) {
        (this.offset = e), (this.buffer = oc), (this.encoding = "utf-8");
      }
      setBuffer(e, t) {
        (this.offset = e), (this.buffer = t);
      }
      int16() {
        let e = this.buffer.readInt16BE(this.offset);
        return (this.offset += 2), e;
      }
      byte() {
        let e = this.buffer[this.offset];
        return this.offset++, e;
      }
      int32() {
        let e = this.buffer.readInt32BE(this.offset);
        return (this.offset += 4), e;
      }
      string(e) {
        let t = this.buffer.toString(
          this.encoding,
          this.offset,
          this.offset + e,
        );
        return (this.offset += e), t;
      }
      cstring() {
        let e = this.offset,
          t = e;
        for (; this.buffer[t++] !== 0; );
        return (this.offset = t), this.buffer.toString(this.encoding, e, t - 1);
      }
      bytes(e) {
        let t = this.buffer.slice(this.offset, this.offset + e);
        return (this.offset += e), t;
      }
    };
  a(on, "BufferReader");
  var sn = on;
  _t.BufferReader = sn;
});
var As = I((At) => {
  "use strict";
  p();
  Object.defineProperty(At, "__esModule", { value: true });
  At.Parser = void 0;
  var D = Xr(),
    ac = vs(),
    an = 1,
    uc = 4,
    xs = an + uc,
    _s = y.allocUnsafe(0),
    cn = class cn {
      constructor(e) {
        if (
          ((this.buffer = _s),
          (this.bufferLength = 0),
          (this.bufferOffset = 0),
          (this.reader = new ac.BufferReader()),
          e?.mode === "binary")
        )
          throw new Error("Binary mode not supported yet");
        this.mode = e?.mode || "text";
      }
      parse(e, t) {
        this.mergeBuffer(e);
        let n = this.bufferOffset + this.bufferLength,
          i = this.bufferOffset;
        for (; i + xs <= n; ) {
          let s = this.buffer[i],
            o = this.buffer.readUInt32BE(i + an),
            u = an + o;
          if (u + i <= n) {
            let c = this.handlePacket(i + xs, s, o, this.buffer);
            t(c), (i += u);
          } else break;
        }
        i === n
          ? ((this.buffer = _s),
            (this.bufferLength = 0),
            (this.bufferOffset = 0))
          : ((this.bufferLength = n - i), (this.bufferOffset = i));
      }
      mergeBuffer(e) {
        if (this.bufferLength > 0) {
          let t = this.bufferLength + e.byteLength;
          if (t + this.bufferOffset > this.buffer.byteLength) {
            let i;
            if (
              t <= this.buffer.byteLength &&
              this.bufferOffset >= this.bufferLength
            )
              i = this.buffer;
            else {
              let s = this.buffer.byteLength * 2;
              for (; t >= s; ) s *= 2;
              i = y.allocUnsafe(s);
            }
            this.buffer.copy(
              i,
              0,
              this.bufferOffset,
              this.bufferOffset + this.bufferLength,
            ),
              (this.buffer = i),
              (this.bufferOffset = 0);
          }
          e.copy(this.buffer, this.bufferOffset + this.bufferLength),
            (this.bufferLength = t);
        } else
          (this.buffer = e),
            (this.bufferOffset = 0),
            (this.bufferLength = e.byteLength);
      }
      handlePacket(e, t, n, i) {
        switch (t) {
          case 50:
            return D.bindComplete;
          case 49:
            return D.parseComplete;
          case 51:
            return D.closeComplete;
          case 110:
            return D.noData;
          case 115:
            return D.portalSuspended;
          case 99:
            return D.copyDone;
          case 87:
            return D.replicationStart;
          case 73:
            return D.emptyQuery;
          case 68:
            return this.parseDataRowMessage(e, n, i);
          case 67:
            return this.parseCommandCompleteMessage(e, n, i);
          case 90:
            return this.parseReadyForQueryMessage(e, n, i);
          case 65:
            return this.parseNotificationMessage(e, n, i);
          case 82:
            return this.parseAuthenticationResponse(e, n, i);
          case 83:
            return this.parseParameterStatusMessage(e, n, i);
          case 75:
            return this.parseBackendKeyData(e, n, i);
          case 69:
            return this.parseErrorMessage(e, n, i, "error");
          case 78:
            return this.parseErrorMessage(e, n, i, "notice");
          case 84:
            return this.parseRowDescriptionMessage(e, n, i);
          case 116:
            return this.parseParameterDescriptionMessage(e, n, i);
          case 71:
            return this.parseCopyInMessage(e, n, i);
          case 72:
            return this.parseCopyOutMessage(e, n, i);
          case 100:
            return this.parseCopyData(e, n, i);
          default:
            return new D.DatabaseError(
              "received invalid response: " + t.toString(16),
              n,
              "error",
            );
        }
      }
      parseReadyForQueryMessage(e, t, n) {
        this.reader.setBuffer(e, n);
        let i = this.reader.string(1);
        return new D.ReadyForQueryMessage(t, i);
      }
      parseCommandCompleteMessage(e, t, n) {
        this.reader.setBuffer(e, n);
        let i = this.reader.cstring();
        return new D.CommandCompleteMessage(t, i);
      }
      parseCopyData(e, t, n) {
        let i = n.slice(e, e + (t - 4));
        return new D.CopyDataMessage(t, i);
      }
      parseCopyInMessage(e, t, n) {
        return this.parseCopyMessage(e, t, n, "copyInResponse");
      }
      parseCopyOutMessage(e, t, n) {
        return this.parseCopyMessage(e, t, n, "copyOutResponse");
      }
      parseCopyMessage(e, t, n, i) {
        this.reader.setBuffer(e, n);
        let s = this.reader.byte() !== 0,
          o = this.reader.int16(),
          u = new D.CopyResponse(t, i, s, o);
        for (let c = 0; c < o; c++) u.columnTypes[c] = this.reader.int16();
        return u;
      }
      parseNotificationMessage(e, t, n) {
        this.reader.setBuffer(e, n);
        let i = this.reader.int32(),
          s = this.reader.cstring(),
          o = this.reader.cstring();
        return new D.NotificationResponseMessage(t, i, s, o);
      }
      parseRowDescriptionMessage(e, t, n) {
        this.reader.setBuffer(e, n);
        let i = this.reader.int16(),
          s = new D.RowDescriptionMessage(t, i);
        for (let o = 0; o < i; o++) s.fields[o] = this.parseField();
        return s;
      }
      parseField() {
        let e = this.reader.cstring(),
          t = this.reader.int32(),
          n = this.reader.int16(),
          i = this.reader.int32(),
          s = this.reader.int16(),
          o = this.reader.int32(),
          u = this.reader.int16() === 0 ? "text" : "binary";
        return new D.Field(e, t, n, i, s, o, u);
      }
      parseParameterDescriptionMessage(e, t, n) {
        this.reader.setBuffer(e, n);
        let i = this.reader.int16(),
          s = new D.ParameterDescriptionMessage(t, i);
        for (let o = 0; o < i; o++) s.dataTypeIDs[o] = this.reader.int32();
        return s;
      }
      parseDataRowMessage(e, t, n) {
        this.reader.setBuffer(e, n);
        let i = this.reader.int16(),
          s = new Array(i);
        for (let o = 0; o < i; o++) {
          let u = this.reader.int32();
          s[o] = u === -1 ? null : this.reader.string(u);
        }
        return new D.DataRowMessage(t, s);
      }
      parseParameterStatusMessage(e, t, n) {
        this.reader.setBuffer(e, n);
        let i = this.reader.cstring(),
          s = this.reader.cstring();
        return new D.ParameterStatusMessage(t, i, s);
      }
      parseBackendKeyData(e, t, n) {
        this.reader.setBuffer(e, n);
        let i = this.reader.int32(),
          s = this.reader.int32();
        return new D.BackendKeyDataMessage(t, i, s);
      }
      parseAuthenticationResponse(e, t, n) {
        this.reader.setBuffer(e, n);
        let i = this.reader.int32(),
          s = { name: "authenticationOk", length: t };
        switch (i) {
          case 0:
            break;
          case 3:
            s.length === 8 && (s.name = "authenticationCleartextPassword");
            break;
          case 5:
            if (s.length === 12) {
              s.name = "authenticationMD5Password";
              let u = this.reader.bytes(4);
              return new D.AuthenticationMD5Password(t, u);
            }
            break;
          case 10:
            (s.name = "authenticationSASL"), (s.mechanisms = []);
            let o;
            do (o = this.reader.cstring()), o && s.mechanisms.push(o);
            while (o);
            break;
          case 11:
            (s.name = "authenticationSASLContinue"),
              (s.data = this.reader.string(t - 8));
            break;
          case 12:
            (s.name = "authenticationSASLFinal"),
              (s.data = this.reader.string(t - 8));
            break;
          default:
            throw new Error("Unknown authenticationOk message type " + i);
        }
        return s;
      }
      parseErrorMessage(e, t, n, i) {
        this.reader.setBuffer(e, n);
        let s = {},
          o = this.reader.string(1);
        for (; o !== "\0"; )
          (s[o] = this.reader.cstring()), (o = this.reader.string(1));
        let u = s.M,
          c =
            i === "notice"
              ? new D.NoticeMessage(t, u)
              : new D.DatabaseError(u, t, i);
        return (
          (c.severity = s.S),
          (c.code = s.C),
          (c.detail = s.D),
          (c.hint = s.H),
          (c.position = s.P),
          (c.internalPosition = s.p),
          (c.internalQuery = s.q),
          (c.where = s.W),
          (c.schema = s.s),
          (c.table = s.t),
          (c.column = s.c),
          (c.dataType = s.d),
          (c.constraint = s.n),
          (c.file = s.F),
          (c.line = s.L),
          (c.routine = s.R),
          c
        );
      }
    };
  a(cn, "Parser");
  var un = cn;
  At.Parser = un;
});
var hn = I((be) => {
  "use strict";
  p();
  Object.defineProperty(be, "__esModule", { value: true });
  be.DatabaseError = be.serialize = be.parse = void 0;
  var cc = Xr();
  Object.defineProperty(be, "DatabaseError", {
    enumerable: true,
    get: a(function () {
      return cc.DatabaseError;
    }, "get"),
  });
  var hc = Es();
  Object.defineProperty(be, "serialize", {
    enumerable: true,
    get: a(function () {
      return hc.serialize;
    }, "get"),
  });
  var lc = As();
  function fc(r, e) {
    let t = new lc.Parser();
    return (
      r.on("data", (n) => t.parse(n, e)),
      new Promise((n) => r.on("end", () => n()))
    );
  }
  a(fc, "parse");
  be.parse = fc;
});
var Cs = {};
se(Cs, { connect: () => pc });
function pc({ socket: r, servername: e }) {
  return r.startTls(e), r;
}
var Ts = z(() => {
  "use strict";
  p();
  a(pc, "connect");
});
var pn = I((sf, Bs) => {
  "use strict";
  p();
  var Is = (St(), O(ws)),
    dc = ge().EventEmitter,
    { parse: yc, serialize: q } = hn(),
    Ps = q.flush(),
    mc = q.sync(),
    gc = q.end(),
    fn = class fn extends dc {
      constructor(e) {
        super(),
          (e = e || {}),
          (this.stream = e.stream || new Is.Socket()),
          (this._keepAlive = e.keepAlive),
          (this._keepAliveInitialDelayMillis = e.keepAliveInitialDelayMillis),
          (this.lastBuffer = false),
          (this.parsedStatements = {}),
          (this.ssl = e.ssl || false),
          (this._ending = false),
          (this._emitMessage = false);
        var t = this;
        this.on("newListener", function (n) {
          n === "message" && (t._emitMessage = true);
        });
      }
      connect(e, t) {
        var n = this;
        (this._connecting = true),
          this.stream.setNoDelay(true),
          this.stream.connect(e, t),
          this.stream.once("connect", function () {
            n._keepAlive &&
              n.stream.setKeepAlive(true, n._keepAliveInitialDelayMillis),
              n.emit("connect");
          });
        let i = a(function (s) {
          (n._ending && (s.code === "ECONNRESET" || s.code === "EPIPE")) ||
            n.emit("error", s);
        }, "reportStreamError");
        if (
          (this.stream.on("error", i),
          this.stream.on("close", function () {
            n.emit("end");
          }),
          !this.ssl)
        )
          return this.attachListeners(this.stream);
        this.stream.once("data", function (s) {
          var o = s.toString("utf8");
          switch (o) {
            case "S":
              break;
            case "N":
              return (
                n.stream.end(),
                n.emit(
                  "error",
                  new Error("The server does not support SSL connections"),
                )
              );
            default:
              return (
                n.stream.end(),
                n.emit(
                  "error",
                  new Error(
                    "There was an error establishing an SSL connection",
                  ),
                )
              );
          }
          var u = (Ts(), O(Cs));
          let c = { socket: n.stream };
          n.ssl !== true &&
            (Object.assign(c, n.ssl), "key" in n.ssl && (c.key = n.ssl.key)),
            Is.isIP(t) === 0 && (c.servername = t);
          try {
            n.stream = u.connect(c);
          } catch (h) {
            return n.emit("error", h);
          }
          n.attachListeners(n.stream),
            n.stream.on("error", i),
            n.emit("sslconnect");
        });
      }
      attachListeners(e) {
        e.on("end", () => {
          this.emit("end");
        }),
          yc(e, (t) => {
            var n = t.name === "error" ? "errorMessage" : t.name;
            this._emitMessage && this.emit("message", t), this.emit(n, t);
          });
      }
      requestSsl() {
        this.stream.write(q.requestSsl());
      }
      startup(e) {
        this.stream.write(q.startup(e));
      }
      cancel(e, t) {
        this._send(q.cancel(e, t));
      }
      password(e) {
        this._send(q.password(e));
      }
      sendSASLInitialResponseMessage(e, t) {
        this._send(q.sendSASLInitialResponseMessage(e, t));
      }
      sendSCRAMClientFinalMessage(e) {
        this._send(q.sendSCRAMClientFinalMessage(e));
      }
      _send(e) {
        return this.stream.writable ? this.stream.write(e) : false;
      }
      query(e) {
        this._send(q.query(e));
      }
      parse(e) {
        this._send(q.parse(e));
      }
      bind(e) {
        this._send(q.bind(e));
      }
      execute(e) {
        this._send(q.execute(e));
      }
      flush() {
        this.stream.writable && this.stream.write(Ps);
      }
      sync() {
        (this._ending = true), this._send(Ps), this._send(mc);
      }
      ref() {
        this.stream.ref();
      }
      unref() {
        this.stream.unref();
      }
      end() {
        if (
          ((this._ending = true), !this._connecting || !this.stream.writable)
        ) {
          this.stream.end();
          return;
        }
        return this.stream.write(gc, () => {
          this.stream.end();
        });
      }
      close(e) {
        this._send(q.close(e));
      }
      describe(e) {
        this._send(q.describe(e));
      }
      sendCopyFromChunk(e) {
        this._send(q.copyData(e));
      }
      endCopyFrom() {
        this._send(q.copyDone());
      }
      sendCopyFail(e) {
        this._send(q.copyFail(e));
      }
    };
  a(fn, "Connection");
  var ln = fn;
  Bs.exports = ln;
});
var Fs = I((cf, Rs) => {
  "use strict";
  p();
  var wc = ge().EventEmitter,
    uf = (Ge(), O(He)),
    bc = tt(),
    dn = ji(),
    Sc = Xi(),
    Ec = wt(),
    vc = bt(),
    Ls = ys(),
    xc = et(),
    _c = pn(),
    yn = class yn extends wc {
      constructor(e) {
        super(),
          (this.connectionParameters = new vc(e)),
          (this.user = this.connectionParameters.user),
          (this.database = this.connectionParameters.database),
          (this.port = this.connectionParameters.port),
          (this.host = this.connectionParameters.host),
          Object.defineProperty(this, "password", {
            configurable: true,
            enumerable: false,
            writable: true,
            value: this.connectionParameters.password,
          }),
          (this.replication = this.connectionParameters.replication);
        var t = e || {};
        (this._Promise = t.Promise || S.Promise),
          (this._types = new Ec(t.types)),
          (this._ending = false),
          (this._connecting = false),
          (this._connected = false),
          (this._connectionError = false),
          (this._queryable = true),
          (this.connection =
            t.connection ||
            new _c({
              stream: t.stream,
              ssl: this.connectionParameters.ssl,
              keepAlive: t.keepAlive || false,
              keepAliveInitialDelayMillis: t.keepAliveInitialDelayMillis || 0,
              encoding: this.connectionParameters.client_encoding || "utf8",
            })),
          (this.queryQueue = []),
          (this.binary = t.binary || xc.binary),
          (this.processID = null),
          (this.secretKey = null),
          (this.ssl = this.connectionParameters.ssl || false),
          this.ssl &&
            this.ssl.key &&
            Object.defineProperty(this.ssl, "key", { enumerable: false }),
          (this._connectionTimeoutMillis = t.connectionTimeoutMillis || 0);
      }
      _errorAllQueries(e) {
        let t = a((n) => {
          m.nextTick(() => {
            n.handleError(e, this.connection);
          });
        }, "enqueueError");
        this.activeQuery && (t(this.activeQuery), (this.activeQuery = null)),
          this.queryQueue.forEach(t),
          (this.queryQueue.length = 0);
      }
      _connect(e) {
        var t = this,
          n = this.connection;
        if (
          ((this._connectionCallback = e), this._connecting || this._connected)
        ) {
          let i = new Error(
            "Client has already been connected. You cannot reuse a client.",
          );
          m.nextTick(() => {
            e(i);
          });
          return;
        }
        (this._connecting = true),
          this.connectionTimeoutHandle,
          this._connectionTimeoutMillis > 0 &&
            (this.connectionTimeoutHandle = setTimeout(() => {
              (n._ending = true),
                n.stream.destroy(new Error("timeout expired"));
            }, this._connectionTimeoutMillis)),
          this.host && this.host.indexOf("/") === 0
            ? n.connect(this.host + "/.s.PGSQL." + this.port)
            : n.connect(this.port, this.host),
          n.on("connect", function () {
            t.ssl ? n.requestSsl() : n.startup(t.getStartupConf());
          }),
          n.on("sslconnect", function () {
            n.startup(t.getStartupConf());
          }),
          this._attachListeners(n),
          n.once("end", () => {
            let i = this._ending
              ? new Error("Connection terminated")
              : new Error("Connection terminated unexpectedly");
            clearTimeout(this.connectionTimeoutHandle),
              this._errorAllQueries(i),
              this._ending ||
                (this._connecting && !this._connectionError
                  ? this._connectionCallback
                    ? this._connectionCallback(i)
                    : this._handleErrorEvent(i)
                  : this._connectionError || this._handleErrorEvent(i)),
              m.nextTick(() => {
                this.emit("end");
              });
          });
      }
      connect(e) {
        if (e) {
          this._connect(e);
          return;
        }
        return new this._Promise((t, n) => {
          this._connect((i) => {
            i ? n(i) : t();
          });
        });
      }
      _attachListeners(e) {
        e.on(
          "authenticationCleartextPassword",
          this._handleAuthCleartextPassword.bind(this),
        ),
          e.on(
            "authenticationMD5Password",
            this._handleAuthMD5Password.bind(this),
          ),
          e.on("authenticationSASL", this._handleAuthSASL.bind(this)),
          e.on(
            "authenticationSASLContinue",
            this._handleAuthSASLContinue.bind(this),
          ),
          e.on("authenticationSASLFinal", this._handleAuthSASLFinal.bind(this)),
          e.on("backendKeyData", this._handleBackendKeyData.bind(this)),
          e.on("error", this._handleErrorEvent.bind(this)),
          e.on("errorMessage", this._handleErrorMessage.bind(this)),
          e.on("readyForQuery", this._handleReadyForQuery.bind(this)),
          e.on("notice", this._handleNotice.bind(this)),
          e.on("rowDescription", this._handleRowDescription.bind(this)),
          e.on("dataRow", this._handleDataRow.bind(this)),
          e.on("portalSuspended", this._handlePortalSuspended.bind(this)),
          e.on("emptyQuery", this._handleEmptyQuery.bind(this)),
          e.on("commandComplete", this._handleCommandComplete.bind(this)),
          e.on("parseComplete", this._handleParseComplete.bind(this)),
          e.on("copyInResponse", this._handleCopyInResponse.bind(this)),
          e.on("copyData", this._handleCopyData.bind(this)),
          e.on("notification", this._handleNotification.bind(this));
      }
      _checkPgPass(e) {
        let t = this.connection;
        typeof this.password == "function"
          ? this._Promise
              .resolve()
              .then(() => this.password())
              .then((n) => {
                if (n !== void 0) {
                  if (typeof n != "string") {
                    t.emit("error", new TypeError("Password must be a string"));
                    return;
                  }
                  this.connectionParameters.password = this.password = n;
                } else
                  this.connectionParameters.password = this.password = null;
                e();
              })
              .catch((n) => {
                t.emit("error", n);
              })
          : this.password !== null
            ? e()
            : Sc(this.connectionParameters, (n) => {
                n !== void 0 &&
                  (this.connectionParameters.password = this.password = n),
                  e();
              });
      }
      _handleAuthCleartextPassword(e) {
        this._checkPgPass(() => {
          this.connection.password(this.password);
        });
      }
      _handleAuthMD5Password(e) {
        this._checkPgPass(() => {
          let t = bc.postgresMd5PasswordHash(this.user, this.password, e.salt);
          this.connection.password(t);
        });
      }
      _handleAuthSASL(e) {
        this._checkPgPass(() => {
          (this.saslSession = dn.startSession(e.mechanisms)),
            this.connection.sendSASLInitialResponseMessage(
              this.saslSession.mechanism,
              this.saslSession.response,
            );
        });
      }
      _handleAuthSASLContinue(e) {
        dn.continueSession(this.saslSession, this.password, e.data),
          this.connection.sendSCRAMClientFinalMessage(
            this.saslSession.response,
          );
      }
      _handleAuthSASLFinal(e) {
        dn.finalizeSession(this.saslSession, e.data), (this.saslSession = null);
      }
      _handleBackendKeyData(e) {
        (this.processID = e.processID), (this.secretKey = e.secretKey);
      }
      _handleReadyForQuery(e) {
        this._connecting &&
          ((this._connecting = false),
          (this._connected = true),
          clearTimeout(this.connectionTimeoutHandle),
          this._connectionCallback &&
            (this._connectionCallback(null, this),
            (this._connectionCallback = null)),
          this.emit("connect"));
        let { activeQuery: t } = this;
        (this.activeQuery = null),
          (this.readyForQuery = true),
          t && t.handleReadyForQuery(this.connection),
          this._pulseQueryQueue();
      }
      _handleErrorWhileConnecting(e) {
        if (!this._connectionError) {
          if (
            ((this._connectionError = true),
            clearTimeout(this.connectionTimeoutHandle),
            this._connectionCallback)
          )
            return this._connectionCallback(e);
          this.emit("error", e);
        }
      }
      _handleErrorEvent(e) {
        if (this._connecting) return this._handleErrorWhileConnecting(e);
        (this._queryable = false),
          this._errorAllQueries(e),
          this.emit("error", e);
      }
      _handleErrorMessage(e) {
        if (this._connecting) return this._handleErrorWhileConnecting(e);
        let t = this.activeQuery;
        if (!t) {
          this._handleErrorEvent(e);
          return;
        }
        (this.activeQuery = null), t.handleError(e, this.connection);
      }
      _handleRowDescription(e) {
        this.activeQuery.handleRowDescription(e);
      }
      _handleDataRow(e) {
        this.activeQuery.handleDataRow(e);
      }
      _handlePortalSuspended(e) {
        this.activeQuery.handlePortalSuspended(this.connection);
      }
      _handleEmptyQuery(e) {
        this.activeQuery.handleEmptyQuery(this.connection);
      }
      _handleCommandComplete(e) {
        this.activeQuery.handleCommandComplete(e, this.connection);
      }
      _handleParseComplete(e) {
        this.activeQuery.name &&
          (this.connection.parsedStatements[this.activeQuery.name] =
            this.activeQuery.text);
      }
      _handleCopyInResponse(e) {
        this.activeQuery.handleCopyInResponse(this.connection);
      }
      _handleCopyData(e) {
        this.activeQuery.handleCopyData(e, this.connection);
      }
      _handleNotification(e) {
        this.emit("notification", e);
      }
      _handleNotice(e) {
        this.emit("notice", e);
      }
      getStartupConf() {
        var e = this.connectionParameters,
          t = { user: e.user, database: e.database },
          n = e.application_name || e.fallback_application_name;
        return (
          n && (t.application_name = n),
          e.replication && (t.replication = "" + e.replication),
          e.statement_timeout &&
            (t.statement_timeout = String(parseInt(e.statement_timeout, 10))),
          e.lock_timeout &&
            (t.lock_timeout = String(parseInt(e.lock_timeout, 10))),
          e.idle_in_transaction_session_timeout &&
            (t.idle_in_transaction_session_timeout = String(
              parseInt(e.idle_in_transaction_session_timeout, 10),
            )),
          e.options && (t.options = e.options),
          t
        );
      }
      cancel(e, t) {
        if (e.activeQuery === t) {
          var n = this.connection;
          this.host && this.host.indexOf("/") === 0
            ? n.connect(this.host + "/.s.PGSQL." + this.port)
            : n.connect(this.port, this.host),
            n.on("connect", function () {
              n.cancel(e.processID, e.secretKey);
            });
        } else
          e.queryQueue.indexOf(t) !== -1 &&
            e.queryQueue.splice(e.queryQueue.indexOf(t), 1);
      }
      setTypeParser(e, t, n) {
        return this._types.setTypeParser(e, t, n);
      }
      getTypeParser(e, t) {
        return this._types.getTypeParser(e, t);
      }
      escapeIdentifier(e) {
        return '"' + e.replace(/"/g, '""') + '"';
      }
      escapeLiteral(e) {
        for (var t = false, n = "'", i = 0; i < e.length; i++) {
          var s = e[i];
          s === "'"
            ? (n += s + s)
            : s === "\\"
              ? ((n += s + s), (t = true))
              : (n += s);
        }
        return (n += "'"), t === true && (n = " E" + n), n;
      }
      _pulseQueryQueue() {
        if (this.readyForQuery === true)
          if (
            ((this.activeQuery = this.queryQueue.shift()), this.activeQuery)
          ) {
            (this.readyForQuery = false), (this.hasExecuted = true);
            let e = this.activeQuery.submit(this.connection);
            e &&
              m.nextTick(() => {
                this.activeQuery.handleError(e, this.connection),
                  (this.readyForQuery = true),
                  this._pulseQueryQueue();
              });
          } else
            this.hasExecuted && ((this.activeQuery = null), this.emit("drain"));
      }
      query(e, t, n) {
        var i, s, o, u, c;
        if (e == null)
          throw new TypeError("Client was passed a null or undefined query");
        return (
          typeof e.submit == "function"
            ? ((o = e.query_timeout || this.connectionParameters.query_timeout),
              (s = i = e),
              typeof t == "function" && (i.callback = i.callback || t))
            : ((o = this.connectionParameters.query_timeout),
              (i = new Ls(e, t, n)),
              i.callback ||
                (s = new this._Promise((h, l) => {
                  i.callback = (d, b) => (d ? l(d) : h(b));
                }))),
          o &&
            ((c = i.callback),
            (u = setTimeout(() => {
              var h = new Error("Query read timeout");
              m.nextTick(() => {
                i.handleError(h, this.connection);
              }),
                c(h),
                (i.callback = () => {});
              var l = this.queryQueue.indexOf(i);
              l > -1 && this.queryQueue.splice(l, 1), this._pulseQueryQueue();
            }, o)),
            (i.callback = (h, l) => {
              clearTimeout(u), c(h, l);
            })),
          this.binary && !i.binary && (i.binary = true),
          i._result && !i._result._types && (i._result._types = this._types),
          this._queryable
            ? this._ending
              ? (m.nextTick(() => {
                  i.handleError(
                    new Error("Client was closed and is not queryable"),
                    this.connection,
                  );
                }),
                s)
              : (this.queryQueue.push(i), this._pulseQueryQueue(), s)
            : (m.nextTick(() => {
                i.handleError(
                  new Error(
                    "Client has encountered a connection error and is not queryable",
                  ),
                  this.connection,
                );
              }),
              s)
        );
      }
      ref() {
        this.connection.ref();
      }
      unref() {
        this.connection.unref();
      }
      end(e) {
        if (((this._ending = true), !this.connection._connecting))
          if (e) e();
          else return this._Promise.resolve();
        if (
          (this.activeQuery || !this._queryable
            ? this.connection.stream.destroy()
            : this.connection.end(),
          e)
        )
          this.connection.once("end", e);
        else
          return new this._Promise((t) => {
            this.connection.once("end", t);
          });
      }
    };
  a(yn, "Client");
  var Ct = yn;
  Ct.Query = Ls;
  Rs.exports = Ct;
});
var Us = I((ff, ks) => {
  "use strict";
  p();
  var Ac = ge().EventEmitter,
    Ms = a(function () {}, "NOOP"),
    Ds = a((r, e) => {
      let t = r.findIndex(e);
      return t === -1 ? void 0 : r.splice(t, 1)[0];
    }, "removeWhere"),
    wn = class wn {
      constructor(e, t, n) {
        (this.client = e), (this.idleListener = t), (this.timeoutId = n);
      }
    };
  a(wn, "IdleItem");
  var mn = wn,
    bn = class bn {
      constructor(e) {
        this.callback = e;
      }
    };
  a(bn, "PendingItem");
  var qe = bn;
  function Cc() {
    throw new Error(
      "Release called on client which has already been released to the pool.",
    );
  }
  a(Cc, "throwOnDoubleRelease");
  function Tt(r, e) {
    if (e) return { callback: e, result: void 0 };
    let t,
      n,
      i = a(function (o, u) {
        o ? t(o) : n(u);
      }, "cb"),
      s = new r(function (o, u) {
        (n = o), (t = u);
      }).catch((o) => {
        throw (Error.captureStackTrace(o), o);
      });
    return { callback: i, result: s };
  }
  a(Tt, "promisify");
  function Tc(r, e) {
    return a(function t(n) {
      (n.client = e),
        e.removeListener("error", t),
        e.on("error", () => {
          r.log("additional client error after disconnection due to error", n);
        }),
        r._remove(e),
        r.emit("error", n, e);
    }, "idleListener");
  }
  a(Tc, "makeIdleListener");
  var Sn = class Sn extends Ac {
    constructor(e, t) {
      super(),
        (this.options = Object.assign({}, e)),
        e != null &&
          "password" in e &&
          Object.defineProperty(this.options, "password", {
            configurable: true,
            enumerable: false,
            writable: true,
            value: e.password,
          }),
        e != null &&
          e.ssl &&
          e.ssl.key &&
          Object.defineProperty(this.options.ssl, "key", { enumerable: false }),
        (this.options.max = this.options.max || this.options.poolSize || 10),
        (this.options.maxUses = this.options.maxUses || 1 / 0),
        (this.options.allowExitOnIdle = this.options.allowExitOnIdle || false),
        (this.options.maxLifetimeSeconds =
          this.options.maxLifetimeSeconds || 0),
        (this.log = this.options.log || function () {}),
        (this.Client = this.options.Client || t || It().Client),
        (this.Promise = this.options.Promise || S.Promise),
        typeof this.options.idleTimeoutMillis > "u" &&
          (this.options.idleTimeoutMillis = 1e4),
        (this._clients = []),
        (this._idle = []),
        (this._expired = /* @__PURE__ */ new WeakSet()),
        (this._pendingQueue = []),
        (this._endCallback = void 0),
        (this.ending = false),
        (this.ended = false);
    }
    _isFull() {
      return this._clients.length >= this.options.max;
    }
    _pulseQueue() {
      if ((this.log("pulse queue"), this.ended)) {
        this.log("pulse queue ended");
        return;
      }
      if (this.ending) {
        this.log("pulse queue on ending"),
          this._idle.length &&
            this._idle.slice().map((t) => {
              this._remove(t.client);
            }),
          this._clients.length || ((this.ended = true), this._endCallback());
        return;
      }
      if (!this._pendingQueue.length) {
        this.log("no queued requests");
        return;
      }
      if (!this._idle.length && this._isFull()) return;
      let e = this._pendingQueue.shift();
      if (this._idle.length) {
        let t = this._idle.pop();
        clearTimeout(t.timeoutId);
        let n = t.client;
        n.ref && n.ref();
        let i = t.idleListener;
        return this._acquireClient(n, e, i, false);
      }
      if (!this._isFull()) return this.newClient(e);
      throw new Error("unexpected condition");
    }
    _remove(e) {
      let t = Ds(this._idle, (n) => n.client === e);
      t !== void 0 && clearTimeout(t.timeoutId),
        (this._clients = this._clients.filter((n) => n !== e)),
        e.end(),
        this.emit("remove", e);
    }
    connect(e) {
      if (this.ending) {
        let i = new Error("Cannot use a pool after calling end on the pool");
        return e ? e(i) : this.Promise.reject(i);
      }
      let t = Tt(this.Promise, e),
        n = t.result;
      if (this._isFull() || this._idle.length) {
        if (
          (this._idle.length && m.nextTick(() => this._pulseQueue()),
          !this.options.connectionTimeoutMillis)
        )
          return this._pendingQueue.push(new qe(t.callback)), n;
        let i = a((u, c, h) => {
            clearTimeout(o), t.callback(u, c, h);
          }, "queueCallback"),
          s = new qe(i),
          o = setTimeout(() => {
            Ds(this._pendingQueue, (u) => u.callback === i),
              (s.timedOut = true),
              t.callback(new Error("timeout exceeded when trying to connect"));
          }, this.options.connectionTimeoutMillis);
        return this._pendingQueue.push(s), n;
      }
      return this.newClient(new qe(t.callback)), n;
    }
    newClient(e) {
      let t = new this.Client(this.options);
      this._clients.push(t);
      let n = Tc(this, t);
      this.log("checking client timeout");
      let i,
        s = false;
      this.options.connectionTimeoutMillis &&
        (i = setTimeout(() => {
          this.log("ending client due to timeout"),
            (s = true),
            t.connection ? t.connection.stream.destroy() : t.end();
        }, this.options.connectionTimeoutMillis)),
        this.log("connecting new client"),
        t.connect((o) => {
          if ((i && clearTimeout(i), t.on("error", n), o))
            this.log("client failed to connect", o),
              (this._clients = this._clients.filter((u) => u !== t)),
              s &&
                (o.message = "Connection terminated due to connection timeout"),
              this._pulseQueue(),
              e.timedOut || e.callback(o, void 0, Ms);
          else {
            if (
              (this.log("new client connected"),
              this.options.maxLifetimeSeconds !== 0)
            ) {
              let u = setTimeout(() => {
                this.log("ending client due to expired lifetime"),
                  this._expired.add(t),
                  this._idle.findIndex((h) => h.client === t) !== -1 &&
                    this._acquireClient(t, new qe((h, l, d) => d()), n, false);
              }, this.options.maxLifetimeSeconds * 1e3);
              u.unref(), t.once("end", () => clearTimeout(u));
            }
            return this._acquireClient(t, e, n, true);
          }
        });
    }
    _acquireClient(e, t, n, i) {
      i && this.emit("connect", e),
        this.emit("acquire", e),
        (e.release = this._releaseOnce(e, n)),
        e.removeListener("error", n),
        t.timedOut
          ? i && this.options.verify
            ? this.options.verify(e, e.release)
            : e.release()
          : i && this.options.verify
            ? this.options.verify(e, (s) => {
                if (s) return e.release(s), t.callback(s, void 0, Ms);
                t.callback(void 0, e, e.release);
              })
            : t.callback(void 0, e, e.release);
    }
    _releaseOnce(e, t) {
      let n = false;
      return (i) => {
        n && Cc(), (n = true), this._release(e, t, i);
      };
    }
    _release(e, t, n) {
      if (
        (e.on("error", t),
        (e._poolUseCount = (e._poolUseCount || 0) + 1),
        this.emit("release", n, e),
        n ||
          this.ending ||
          !e._queryable ||
          e._ending ||
          e._poolUseCount >= this.options.maxUses)
      ) {
        e._poolUseCount >= this.options.maxUses &&
          this.log("remove expended client"),
          this._remove(e),
          this._pulseQueue();
        return;
      }
      if (this._expired.has(e)) {
        this.log("remove expired client"),
          this._expired.delete(e),
          this._remove(e),
          this._pulseQueue();
        return;
      }
      let s;
      this.options.idleTimeoutMillis &&
        ((s = setTimeout(() => {
          this.log("remove idle client"), this._remove(e);
        }, this.options.idleTimeoutMillis)),
        this.options.allowExitOnIdle && s.unref()),
        this.options.allowExitOnIdle && e.unref(),
        this._idle.push(new mn(e, t, s)),
        this._pulseQueue();
    }
    query(e, t, n) {
      if (typeof e == "function") {
        let s = Tt(this.Promise, e);
        return (
          E(function () {
            return s.callback(
              new Error(
                "Passing a function as the first parameter to pool.query is not supported",
              ),
            );
          }),
          s.result
        );
      }
      typeof t == "function" && ((n = t), (t = void 0));
      let i = Tt(this.Promise, n);
      return (
        (n = i.callback),
        this.connect((s, o) => {
          if (s) return n(s);
          let u = false,
            c = a((h) => {
              u || ((u = true), o.release(h), n(h));
            }, "onError");
          o.once("error", c), this.log("dispatching query");
          try {
            o.query(e, t, (h, l) => {
              if (
                (this.log("query dispatched"), o.removeListener("error", c), !u)
              )
                return (u = true), o.release(h), h ? n(h) : n(void 0, l);
            });
          } catch (h) {
            return o.release(h), n(h);
          }
        }),
        i.result
      );
    }
    end(e) {
      if ((this.log("ending"), this.ending)) {
        let n = new Error("Called end on pool more than once");
        return e ? e(n) : this.Promise.reject(n);
      }
      this.ending = true;
      let t = Tt(this.Promise, e);
      return (this._endCallback = t.callback), this._pulseQueue(), t.result;
    }
    get waitingCount() {
      return this._pendingQueue.length;
    }
    get idleCount() {
      return this._idle.length;
    }
    get expiredCount() {
      return this._clients.reduce(
        (e, t) => e + (this._expired.has(t) ? 1 : 0),
        0,
      );
    }
    get totalCount() {
      return this._clients.length;
    }
  };
  a(Sn, "Pool");
  var gn = Sn;
  ks.exports = gn;
});
var Os = {};
se(Os, { default: () => Ic });
var Ic;
var Ns = z(() => {
  "use strict";
  p();
  Ic = {};
});
var qs = I((mf, Pc) => {
  Pc.exports = {
    name: "pg",
    version: "8.8.0",
    description:
      "PostgreSQL client - pure javascript & libpq with the same API",
    keywords: [
      "database",
      "libpq",
      "pg",
      "postgre",
      "postgres",
      "postgresql",
      "rdbms",
    ],
    homepage: "https://github.com/brianc/node-postgres",
    repository: {
      type: "git",
      url: "git://github.com/brianc/node-postgres.git",
      directory: "packages/pg",
    },
    author: "Brian Carlson <brian.m.carlson@gmail.com>",
    main: "./lib",
    dependencies: {
      "buffer-writer": "2.0.0",
      "packet-reader": "1.0.0",
      "pg-connection-string": "^2.5.0",
      "pg-pool": "^3.5.2",
      "pg-protocol": "^1.5.0",
      "pg-types": "^2.1.0",
      pgpass: "1.x",
    },
    devDependencies: {
      async: "2.6.4",
      bluebird: "3.5.2",
      co: "4.6.0",
      "pg-copy-streams": "0.3.0",
    },
    peerDependencies: { "pg-native": ">=3.0.1" },
    peerDependenciesMeta: {
      "pg-native": { optional: true },
    },
    scripts: { test: "make test-all" },
    files: ["lib", "SPONSORS.md"],
    license: "MIT",
    engines: { node: ">= 8.0.0" },
    gitHead: "c99fb2c127ddf8d712500db2c7b9a5491a178655",
  };
});
var Ws = I((gf, js) => {
  "use strict";
  p();
  var Qs = ge().EventEmitter,
    Bc = (Ge(), O(He)),
    En = tt(),
    Qe = (js.exports = function (r, e, t) {
      Qs.call(this),
        (r = En.normalizeQueryConfig(r, e, t)),
        (this.text = r.text),
        (this.values = r.values),
        (this.name = r.name),
        (this.callback = r.callback),
        (this.state = "new"),
        (this._arrayMode = r.rowMode === "array"),
        (this._emitRowEvents = false),
        this.on(
          "newListener",
          function (n) {
            n === "row" && (this._emitRowEvents = true);
          }.bind(this),
        );
    });
  Bc.inherits(Qe, Qs);
  var Lc = {
    sqlState: "code",
    statementPosition: "position",
    messagePrimary: "message",
    context: "where",
    schemaName: "schema",
    tableName: "table",
    columnName: "column",
    dataTypeName: "dataType",
    constraintName: "constraint",
    sourceFile: "file",
    sourceLine: "line",
    sourceFunction: "routine",
  };
  Qe.prototype.handleError = function (r) {
    var e = this.native.pq.resultErrorFields();
    if (e)
      for (var t in e) {
        var n = Lc[t] || t;
        r[n] = e[t];
      }
    this.callback ? this.callback(r) : this.emit("error", r),
      (this.state = "error");
  };
  Qe.prototype.then = function (r, e) {
    return this._getPromise().then(r, e);
  };
  Qe.prototype.catch = function (r) {
    return this._getPromise().catch(r);
  };
  Qe.prototype._getPromise = function () {
    return this._promise
      ? this._promise
      : ((this._promise = new Promise(
          function (r, e) {
            this._once("end", r), this._once("error", e);
          }.bind(this),
        )),
        this._promise);
  };
  Qe.prototype.submit = function (r) {
    this.state = "running";
    var e = this;
    (this.native = r.native), (r.native.arrayMode = this._arrayMode);
    var t = a(function (s, o, u) {
      if (
        ((r.native.arrayMode = false),
        E(function () {
          e.emit("_done");
        }),
        s)
      )
        return e.handleError(s);
      e._emitRowEvents &&
        (u.length > 1
          ? o.forEach((c, h) => {
              c.forEach((l) => {
                e.emit("row", l, u[h]);
              });
            })
          : o.forEach(function (c) {
              e.emit("row", c, u);
            })),
        (e.state = "end"),
        e.emit("end", u),
        e.callback && e.callback(null, u);
    }, "after");
    if ((m.domain && (t = m.domain.bind(t)), this.name)) {
      this.name.length > 63 &&
        (console.error(
          "Warning! Postgres only supports 63 characters for query names.",
        ),
        console.error("You supplied %s (%s)", this.name, this.name.length),
        console.error(
          "This can cause conflicts and silent errors executing queries",
        ));
      var n = (this.values || []).map(En.prepareValue);
      if (r.namedQueries[this.name]) {
        if (this.text && r.namedQueries[this.name] !== this.text) {
          let s = new Error(
            `Prepared statements must be unique - '${this.name}' was used for a different statement`,
          );
          return t(s);
        }
        return r.native.execute(this.name, n, t);
      }
      return r.native.prepare(this.name, this.text, n.length, function (s) {
        return s
          ? t(s)
          : ((r.namedQueries[e.name] = e.text), e.native.execute(e.name, n, t));
      });
    } else if (this.values) {
      if (!Array.isArray(this.values)) {
        let s = new Error("Query values must be an array");
        return t(s);
      }
      var i = this.values.map(En.prepareValue);
      r.native.query(this.text, i, t);
    } else r.native.query(this.text, t);
  };
});
var Vs = I((Ef, $s) => {
  "use strict";
  p();
  var Rc = (Ns(), O(Os)),
    Fc = wt(),
    Sf = qs(),
    Hs = ge().EventEmitter,
    Mc = (Ge(), O(He)),
    Dc = bt(),
    Gs = Ws(),
    J = ($s.exports = function (r) {
      Hs.call(this),
        (r = r || {}),
        (this._Promise = r.Promise || S.Promise),
        (this._types = new Fc(r.types)),
        (this.native = new Rc({ types: this._types })),
        (this._queryQueue = []),
        (this._ending = false),
        (this._connecting = false),
        (this._connected = false),
        (this._queryable = true);
      var e = (this.connectionParameters = new Dc(r));
      (this.user = e.user),
        Object.defineProperty(this, "password", {
          configurable: true,
          enumerable: false,
          writable: true,
          value: e.password,
        }),
        (this.database = e.database),
        (this.host = e.host),
        (this.port = e.port),
        (this.namedQueries = {});
    });
  J.Query = Gs;
  Mc.inherits(J, Hs);
  J.prototype._errorAllQueries = function (r) {
    let e = a((t) => {
      m.nextTick(() => {
        (t.native = this.native), t.handleError(r);
      });
    }, "enqueueError");
    this._hasActiveQuery() &&
      (e(this._activeQuery), (this._activeQuery = null)),
      this._queryQueue.forEach(e),
      (this._queryQueue.length = 0);
  };
  J.prototype._connect = function (r) {
    var e = this;
    if (this._connecting) {
      m.nextTick(() =>
        r(
          new Error(
            "Client has already been connected. You cannot reuse a client.",
          ),
        ),
      );
      return;
    }
    (this._connecting = true),
      this.connectionParameters.getLibpqConnectionString(function (t, n) {
        if (t) return r(t);
        e.native.connect(n, function (i) {
          if (i) return e.native.end(), r(i);
          (e._connected = true),
            e.native.on("error", function (s) {
              (e._queryable = false), e._errorAllQueries(s), e.emit("error", s);
            }),
            e.native.on("notification", function (s) {
              e.emit("notification", { channel: s.relname, payload: s.extra });
            }),
            e.emit("connect"),
            e._pulseQueryQueue(true),
            r();
        });
      });
  };
  J.prototype.connect = function (r) {
    if (r) {
      this._connect(r);
      return;
    }
    return new this._Promise((e, t) => {
      this._connect((n) => {
        n ? t(n) : e();
      });
    });
  };
  J.prototype.query = function (r, e, t) {
    var n, i, s, o, u;
    if (r == null)
      throw new TypeError("Client was passed a null or undefined query");
    if (typeof r.submit == "function")
      (s = r.query_timeout || this.connectionParameters.query_timeout),
        (i = n = r),
        typeof e == "function" && (r.callback = e);
    else if (
      ((s = this.connectionParameters.query_timeout),
      (n = new Gs(r, e, t)),
      !n.callback)
    ) {
      let c, h;
      (i = new this._Promise((l, d) => {
        (c = l), (h = d);
      })),
        (n.callback = (l, d) => (l ? h(l) : c(d)));
    }
    return (
      s &&
        ((u = n.callback),
        (o = setTimeout(() => {
          var c = new Error("Query read timeout");
          m.nextTick(() => {
            n.handleError(c, this.connection);
          }),
            u(c),
            (n.callback = () => {});
          var h = this._queryQueue.indexOf(n);
          h > -1 && this._queryQueue.splice(h, 1), this._pulseQueryQueue();
        }, s)),
        (n.callback = (c, h) => {
          clearTimeout(o), u(c, h);
        })),
      this._queryable
        ? this._ending
          ? ((n.native = this.native),
            m.nextTick(() => {
              n.handleError(
                new Error("Client was closed and is not queryable"),
              );
            }),
            i)
          : (this._queryQueue.push(n), this._pulseQueryQueue(), i)
        : ((n.native = this.native),
          m.nextTick(() => {
            n.handleError(
              new Error(
                "Client has encountered a connection error and is not queryable",
              ),
            );
          }),
          i)
    );
  };
  J.prototype.end = function (r) {
    var e = this;
    (this._ending = true),
      this._connected || this.once("connect", this.end.bind(this, r));
    var t;
    return (
      r ||
        (t = new this._Promise(function (n, i) {
          r = a((s) => (s ? i(s) : n()), "cb");
        })),
      this.native.end(function () {
        e._errorAllQueries(new Error("Connection terminated")),
          m.nextTick(() => {
            e.emit("end"), r && r();
          });
      }),
      t
    );
  };
  J.prototype._hasActiveQuery = function () {
    return (
      this._activeQuery &&
      this._activeQuery.state !== "error" &&
      this._activeQuery.state !== "end"
    );
  };
  J.prototype._pulseQueryQueue = function (r) {
    if (this._connected && !this._hasActiveQuery()) {
      var e = this._queryQueue.shift();
      if (!e) {
        r || this.emit("drain");
        return;
      }
      (this._activeQuery = e), e.submit(this);
      var t = this;
      e.once("_done", function () {
        t._pulseQueryQueue();
      });
    }
  };
  J.prototype.cancel = function (r) {
    this._activeQuery === r
      ? this.native.cancel(function () {})
      : this._queryQueue.indexOf(r) !== -1 &&
        this._queryQueue.splice(this._queryQueue.indexOf(r), 1);
  };
  J.prototype.ref = function () {};
  J.prototype.unref = function () {};
  J.prototype.setTypeParser = function (r, e, t) {
    return this._types.setTypeParser(r, e, t);
  };
  J.prototype.getTypeParser = function (r, e) {
    return this._types.getTypeParser(r, e);
  };
});
var vn = I((_f, Ks) => {
  "use strict";
  p();
  Ks.exports = Vs();
});
var It = I((Cf, nt) => {
  "use strict";
  p();
  var kc = Fs(),
    Uc = et(),
    Oc = pn(),
    Nc = Us(),
    { DatabaseError: qc } = hn(),
    Qc = a((r) => {
      var e;
      return (
        (e = class extends Nc {
          constructor(n) {
            super(n, r);
          }
        }),
        a(e, "BoundPool"),
        e
      );
    }, "poolFactory"),
    xn = a(function (r) {
      (this.defaults = Uc),
        (this.Client = r),
        (this.Query = this.Client.Query),
        (this.Pool = Qc(this.Client)),
        (this._pools = []),
        (this.Connection = Oc),
        (this.types = Xe()),
        (this.DatabaseError = qc);
    }, "PG");
  typeof m.env.NODE_PG_FORCE_NATIVE < "u"
    ? (nt.exports = new xn(vn()))
    : ((nt.exports = new xn(kc)),
      Object.defineProperty(nt.exports, "native", {
        configurable: true,
        enumerable: false,
        get() {
          var r = null;
          try {
            r = new xn(vn());
          } catch (e) {
            if (e.code !== "MODULE_NOT_FOUND") throw e;
          }
          return Object.defineProperty(nt.exports, "native", { value: r }), r;
        },
      }));
});
p();
var Bt = Ie(It());
St();
p();
St();
mr();
var Zs = Ie(tt());
var Js = Ie(wt());
var Pt = class Pt2 extends Error {
  constructor(t) {
    super(t);
    _(this, "name", "NeonDbError");
    _(this, "severity");
    _(this, "code");
    _(this, "detail");
    _(this, "hint");
    _(this, "position");
    _(this, "internalPosition");
    _(this, "internalQuery");
    _(this, "where");
    _(this, "schema");
    _(this, "table");
    _(this, "column");
    _(this, "dataType");
    _(this, "constraint");
    _(this, "file");
    _(this, "line");
    _(this, "routine");
    _(this, "sourceError");
    "captureStackTrace" in Error &&
      typeof Error.captureStackTrace == "function" &&
      Error.captureStackTrace(this, Pt2);
  }
};
a(Pt, "NeonDbError");
var pe = Pt;
var zs =
  "transaction() expects an array of queries, or a function returning an array of queries";
var jc = [
  "severity",
  "code",
  "detail",
  "hint",
  "position",
  "internalPosition",
  "internalQuery",
  "where",
  "schema",
  "table",
  "column",
  "dataType",
  "constraint",
  "file",
  "line",
  "routine",
];
function Xs(
  r,
  {
    arrayMode: e,
    fullResults: t,
    fetchOptions: n,
    isolationLevel: i,
    readOnly: s,
    deferrable: o,
    queryCallback: u,
    resultCallback: c,
    authToken: h,
  } = {},
) {
  if (!r)
    throw new Error(
      "No database connection string was provided to `neon()`. Perhaps an environment variable has not been set?",
    );
  let l;
  try {
    l = yr(r);
  } catch {
    throw new Error(
      "Database connection string provided to `neon()` is not a valid URL. Connection string: " +
        String(r),
    );
  }
  let { protocol: d, username: b, hostname: C, port: B, pathname: Q } = l;
  if ((d !== "postgres:" && d !== "postgresql:") || !b || !C || !Q)
    throw new Error(
      "Database connection string format for `neon()` should be: postgresql://user:password@host.tld/dbname?option=value",
    );
  function X(A, ...g) {
    let P, K;
    if (typeof A == "string") (P = A), (K = g[1]), (g = g[0] ?? []);
    else {
      P = "";
      for (let j = 0; j < A.length; j++)
        (P += A[j]), j < g.length && (P += "$" + (j + 1));
    }
    g = g.map((j) => (0, Zs.prepareValue)(j));
    let k = {
      query: P,
      params: g,
    };
    return u && u(k), Wc(de, k, K);
  }
  a(X, "resolve"),
    (X.transaction = async (A, g) => {
      if ((typeof A == "function" && (A = A(X)), !Array.isArray(A)))
        throw new Error(zs);
      A.forEach((k) => {
        if (k[Symbol.toStringTag] !== "NeonQueryPromise") throw new Error(zs);
      });
      let P = A.map((k) => k.parameterizedQuery),
        K = A.map((k) => k.opts ?? {});
      return de(P, K, g);
    });
  async function de(A, g, P) {
    let { fetchEndpoint: K, fetchFunction: k } = _e,
      j = typeof K == "function" ? K(C, B, { jwtAuth: h !== void 0 }) : K,
      ue = Array.isArray(A) ? { queries: A } : A,
      ee = n ?? {},
      R = e ?? false,
      $ = t ?? false,
      ce = i,
      ye = s,
      Se = o;
    P !== void 0 &&
      (P.fetchOptions !== void 0 && (ee = { ...ee, ...P.fetchOptions }),
      P.arrayMode !== void 0 && (R = P.arrayMode),
      P.fullResults !== void 0 && ($ = P.fullResults),
      P.isolationLevel !== void 0 && (ce = P.isolationLevel),
      P.readOnly !== void 0 && (ye = P.readOnly),
      P.deferrable !== void 0 && (Se = P.deferrable)),
      g !== void 0 &&
        !Array.isArray(g) &&
        g.fetchOptions !== void 0 &&
        (ee = {
          ...ee,
          ...g.fetchOptions,
        });
    let Ae = h;
    !Array.isArray(g) && g?.authToken !== void 0 && (Ae = g.authToken);
    let he = {
        "Neon-Connection-String": r,
        "Neon-Raw-Text-Output": "true",
        "Neon-Array-Mode": "true",
      },
      it = await Hc(Ae);
    it && (he.Authorization = `Bearer ${it}`),
      Array.isArray(A) &&
        (ce !== void 0 && (he["Neon-Batch-Isolation-Level"] = ce),
        ye !== void 0 && (he["Neon-Batch-Read-Only"] = String(ye)),
        Se !== void 0 && (he["Neon-Batch-Deferrable"] = String(Se)));
    let te;
    try {
      te = await (k ?? fetch)(j, {
        method: "POST",
        body: JSON.stringify(ue),
        headers: he,
        ...ee,
      });
    } catch (W) {
      let H = new pe(`Error connecting to database: ${W.message}`);
      throw ((H.sourceError = W), H);
    }
    if (te.ok) {
      let W = await te.json();
      if (Array.isArray(A)) {
        let H = W.results;
        if (!Array.isArray(H))
          throw new pe("Neon internal error: unexpected result format");
        return H.map((Ce, Ee) => {
          let Lt = g[Ee] ?? {},
            ro = Lt.arrayMode ?? R,
            no = Lt.fullResults ?? $;
          return Ys(Ce, {
            arrayMode: ro,
            fullResults: no,
            parameterizedQuery: A[Ee],
            resultCallback: c,
            types: Lt.types,
          });
        });
      } else {
        let H = g ?? {},
          Ce = H.arrayMode ?? R,
          Ee = H.fullResults ?? $;
        return Ys(W, {
          arrayMode: Ce,
          fullResults: Ee,
          parameterizedQuery: A,
          resultCallback: c,
          types: H.types,
        });
      }
    } else {
      let { status: W } = te;
      if (W === 400) {
        let H = await te.json(),
          Ce = new pe(H.message);
        for (let Ee of jc) Ce[Ee] = H[Ee] ?? void 0;
        throw Ce;
      } else {
        let H = await te.text();
        throw new pe(`Server error (HTTP status ${W}): ${H}`);
      }
    }
  }
  return a(de, "execute"), X;
}
a(Xs, "neon");
function Wc(r, e, t) {
  return {
    [Symbol.toStringTag]: "NeonQueryPromise",
    parameterizedQuery: e,
    opts: t,
    then: a((n, i) => r(e, t).then(n, i), "then"),
    catch: a((n) => r(e, t).catch(n), "catch"),
    finally: a((n) => r(e, t).finally(n), "finally"),
  };
}
a(Wc, "createNeonQueryPromise");
function Ys(
  r,
  {
    arrayMode: e,
    fullResults: t,
    parameterizedQuery: n,
    resultCallback: i,
    types: s,
  },
) {
  let o = new Js.default(s),
    u = r.fields.map((l) => l.name),
    c = r.fields.map((l) => o.getTypeParser(l.dataTypeID)),
    h =
      e === true
        ? r.rows.map((l) => l.map((d, b) => (d === null ? null : c[b](d))))
        : r.rows.map((l) =>
            Object.fromEntries(
              l.map((d, b) => [u[b], d === null ? null : c[b](d)]),
            ),
          );
  return (
    i && i(n, r, h, { arrayMode: e, fullResults: t }),
    t
      ? ((r.viaNeonFetch = true),
        (r.rowAsArray = e),
        (r.rows = h),
        (r._parsers = c),
        (r._types = o),
        r)
      : h
  );
}
a(Ys, "processQueryResult");
async function Hc(r) {
  if (typeof r == "string") return r;
  if (typeof r == "function")
    try {
      return await Promise.resolve(r());
    } catch (e) {
      let t = new pe("Error getting auth token.");
      throw (
        (e instanceof Error &&
          (t = new pe(`Error getting auth token: ${e.message}`)),
        t)
      );
    }
}
a(Hc, "getAuthToken");
var to = Ie(bt());
var je = Ie(It());
var An = class An2 extends Bt.Client {
  constructor(t) {
    super(t);
    this.config = t;
  }
  get neonConfig() {
    return this.connection.stream;
  }
  connect(t) {
    let { neonConfig: n } = this;
    n.forceDisablePgSSL && (this.ssl = this.connection.ssl = false),
      this.ssl &&
        n.useSecureWebSocket &&
        console.warn(
          "SSL is enabled for both Postgres (e.g. ?sslmode=require in the connection string + forceDisablePgSSL = false) and the WebSocket tunnel (useSecureWebSocket = true). Double encryption will increase latency and CPU usage. It may be appropriate to disable SSL in the Postgres connection parameters or set forceDisablePgSSL = true.",
        );
    let i =
        this.config?.host !== void 0 ||
        this.config?.connectionString !== void 0 ||
        m.env.PGHOST !== void 0,
      s = m.env.USER ?? m.env.USERNAME;
    if (
      !i &&
      this.host === "localhost" &&
      this.user === s &&
      this.database === s &&
      this.password === null
    )
      throw new Error(
        `No database host or connection string was set, and key parameters have default values (host: localhost, user: ${s}, db: ${s}, password: null). Is an environment variable missing? Alternatively, if you intended to connect with these parameters, please set the host to 'localhost' explicitly.`,
      );
    let o = super.connect(t),
      u = n.pipelineTLS && this.ssl,
      c = n.pipelineConnect === "password";
    if (!u && !n.pipelineConnect) return o;
    let h = this.connection;
    if ((u && h.on("connect", () => h.stream.emit("data", "S")), c)) {
      h.removeAllListeners("authenticationCleartextPassword"),
        h.removeAllListeners("readyForQuery"),
        h.once("readyForQuery", () =>
          h.on("readyForQuery", this._handleReadyForQuery.bind(this)),
        );
      let l = this.ssl ? "sslconnect" : "connect";
      h.on(l, () => {
        this._handleAuthCleartextPassword(), this._handleReadyForQuery();
      });
    }
    return o;
  }
  async _handleAuthSASLContinue(t) {
    let n = this.saslSession,
      i = this.password,
      s = t.data;
    if (
      n.message !== "SASLInitialResponse" ||
      typeof i != "string" ||
      typeof s != "string"
    )
      throw new Error("SASL: protocol error");
    let o = Object.fromEntries(
        s.split(",").map((te) => {
          if (!/^.=/.test(te))
            throw new Error("SASL: Invalid attribute pair entry");
          let W = te[0],
            H = te.substring(2);
          return [W, H];
        }),
      ),
      u = o.r,
      c = o.s,
      h = o.i;
    if (!u || !/^[!-+--~]+$/.test(u))
      throw new Error(
        "SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce missing/unprintable",
      );
    if (
      !c ||
      !/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.test(
        c,
      )
    )
      throw new Error(
        "SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing/not base64",
      );
    if (!h || !/^[1-9][0-9]*$/.test(h))
      throw new Error(
        "SASL: SCRAM-SERVER-FIRST-MESSAGE: missing/invalid iteration count",
      );
    if (!u.startsWith(n.clientNonce))
      throw new Error(
        "SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce",
      );
    if (u.length === n.clientNonce.length)
      throw new Error(
        "SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce is too short",
      );
    let l = parseInt(h, 10),
      d = y.from(c, "base64"),
      b = new TextEncoder(),
      C = b.encode(i),
      B = await w.subtle.importKey(
        "raw",
        C,
        { name: "HMAC", hash: { name: "SHA-256" } },
        false,
        ["sign"],
      ),
      Q = new Uint8Array(
        await w.subtle.sign("HMAC", B, y.concat([d, y.from([0, 0, 0, 1])])),
      ),
      X = Q;
    for (var de = 0; de < l - 1; de++)
      (Q = new Uint8Array(await w.subtle.sign("HMAC", B, Q))),
        (X = y.from(X.map((te, W) => X[W] ^ Q[W])));
    let A = X,
      g = await w.subtle.importKey(
        "raw",
        A,
        { name: "HMAC", hash: { name: "SHA-256" } },
        false,
        ["sign"],
      ),
      P = new Uint8Array(
        await w.subtle.sign("HMAC", g, b.encode("Client Key")),
      ),
      K = await w.subtle.digest("SHA-256", P),
      k = "n=*,r=" + n.clientNonce,
      j = "r=" + u + ",s=" + c + ",i=" + l,
      ue = "c=biws,r=" + u,
      ee = k + "," + j + "," + ue,
      R = await w.subtle.importKey(
        "raw",
        K,
        { name: "HMAC", hash: { name: "SHA-256" } },
        false,
        ["sign"],
      );
    var $ = new Uint8Array(await w.subtle.sign("HMAC", R, b.encode(ee))),
      ce = y.from(P.map((te, W) => P[W] ^ $[W])),
      ye = ce.toString("base64");
    let Se = await w.subtle.importKey(
        "raw",
        A,
        { name: "HMAC", hash: { name: "SHA-256" } },
        false,
        ["sign"],
      ),
      Ae = await w.subtle.sign("HMAC", Se, b.encode("Server Key")),
      he = await w.subtle.importKey(
        "raw",
        Ae,
        { name: "HMAC", hash: { name: "SHA-256" } },
        false,
        ["sign"],
      );
    var it = y.from(await w.subtle.sign("HMAC", he, b.encode(ee)));
    (n.message = "SASLResponse"),
      (n.serverSignature = it.toString("base64")),
      (n.response = ue + ",p=" + ye),
      this.connection.sendSCRAMClientFinalMessage(this.saslSession.response);
  }
};
a(An, "NeonClient");
var _n = An;
function Gc(r, e) {
  if (e)
    return {
      callback: e,
      result: void 0,
    };
  let t,
    n,
    i = a(function (o, u) {
      o ? t(o) : n(u);
    }, "cb"),
    s = new r(function (o, u) {
      (n = o), (t = u);
    });
  return { callback: i, result: s };
}
a(Gc, "promisify");
var Cn = class Cn2 extends Bt.Pool {
  constructor() {
    super(...arguments);
    _(this, "Client", _n);
    _(this, "hasFetchUnsupportedListeners", false);
  }
  on(t, n) {
    return (
      t !== "error" && (this.hasFetchUnsupportedListeners = true),
      super.on(t, n)
    );
  }
  query(t, n, i) {
    if (
      !_e.poolQueryViaFetch ||
      this.hasFetchUnsupportedListeners ||
      typeof t == "function"
    )
      return super.query(t, n, i);
    typeof n == "function" && ((i = n), (n = void 0));
    let s = Gc(this.Promise, i);
    i = s.callback;
    try {
      let o = new to.default(this.options),
        u = encodeURIComponent,
        c = encodeURI,
        h = `postgresql://${u(o.user)}:${u(o.password)}@${u(o.host)}/${c(o.database)}`,
        l = typeof t == "string" ? t : t.text,
        d = n ?? t.values ?? [];
      Xs(h, { fullResults: true, arrayMode: t.rowMode === "array" })(l, d, {
        types: t.types ?? this.options?.types,
      })
        .then((C) => i(void 0, C))
        .catch((C) => i(C));
    } catch (o) {
      i(o);
    }
    return s.result;
  }
};
a(Cn, "NeonPool");
var export_ClientBase = je.ClientBase;
var export_Connection = je.Connection;
var export_DatabaseError = je.DatabaseError;
var export_Query = je.Query;
var export_defaults = je.defaults;
var export_types = je.types;

// node_modules/drizzle-orm/entity.js
var entityKind = Symbol.for("drizzle:entityKind");
var hasOwnEntityKind = Symbol.for("drizzle:hasOwnEntityKind");
function is(value, type) {
  if (!value || typeof value !== "object") {
    return false;
  }
  if (value instanceof type) {
    return true;
  }
  if (!Object.prototype.hasOwnProperty.call(type, entityKind)) {
    throw new Error(
      `Class "${type.name ?? "<unknown>"}" doesn't look like a Drizzle entity. If this is incorrect and the class is provided by Drizzle, please report this as a bug.`,
    );
  }
  let cls = Object.getPrototypeOf(value).constructor;
  if (cls) {
    while (cls) {
      if (entityKind in cls && cls[entityKind] === type[entityKind]) {
        return true;
      }
      cls = Object.getPrototypeOf(cls);
    }
  }
  return false;
}

// node_modules/drizzle-orm/logger.js
var _a;
var ConsoleLogWriter = class {
  write(message) {
    console.log(message);
  }
};
_a = entityKind;
__publicField(ConsoleLogWriter, _a, "ConsoleLogWriter");
var _a2;
var DefaultLogger = class {
  writer;
  constructor(config) {
    this.writer = config?.writer ?? new ConsoleLogWriter();
  }
  logQuery(query, params) {
    const stringifiedParams = params.map((p2) => {
      try {
        return JSON.stringify(p2);
      } catch {
        return String(p2);
      }
    });
    const paramsStr = stringifiedParams.length
      ? ` -- params: [${stringifiedParams.join(", ")}]`
      : "";
    this.writer.write(`Query: ${query}${paramsStr}`);
  }
};
_a2 = entityKind;
__publicField(DefaultLogger, _a2, "DefaultLogger");
var _a3;
var NoopLogger = class {
  logQuery() {}
};
_a3 = entityKind;
__publicField(NoopLogger, _a3, "NoopLogger");

// node_modules/drizzle-orm/query-promise.js
var _a4;
var QueryPromise = class {
  [((_a4 = entityKind), Symbol.toStringTag)] = "QueryPromise";
  catch(onRejected) {
    return this.then(void 0, onRejected);
  }
  finally(onFinally) {
    return this.then(
      (value) => {
        onFinally?.();
        return value;
      },
      (reason) => {
        onFinally?.();
        throw reason;
      },
    );
  }
  then(onFulfilled, onRejected) {
    return this.execute().then(onFulfilled, onRejected);
  }
};
__publicField(QueryPromise, _a4, "QueryPromise");

// node_modules/drizzle-orm/table.utils.js
var TableName = Symbol.for("drizzle:Name");

// node_modules/drizzle-orm/table.js
var Schema = Symbol.for("drizzle:Schema");
var Columns = Symbol.for("drizzle:Columns");
var ExtraConfigColumns = Symbol.for("drizzle:ExtraConfigColumns");
var OriginalName = Symbol.for("drizzle:OriginalName");
var BaseName = Symbol.for("drizzle:BaseName");
var IsAlias = Symbol.for("drizzle:IsAlias");
var ExtraConfigBuilder = Symbol.for("drizzle:ExtraConfigBuilder");
var IsDrizzleTable = Symbol.for("drizzle:IsDrizzleTable");
var _a5;
var Table = class {
  /**
   * @internal
   * Can be changed if the table is aliased.
   */
  [((_a5 = entityKind), TableName)];
  /**
   * @internal
   * Used to store the original name of the table, before any aliasing.
   */
  [OriginalName];
  /** @internal */
  [Schema];
  /** @internal */
  [Columns];
  /** @internal */
  [ExtraConfigColumns];
  /**
   *  @internal
   * Used to store the table name before the transformation via the `tableCreator` functions.
   */
  [BaseName];
  /** @internal */
  [IsAlias] = false;
  /** @internal */
  [IsDrizzleTable] = true;
  /** @internal */
  [ExtraConfigBuilder] = void 0;
  constructor(name, schema, baseName) {
    this[TableName] = this[OriginalName] = name;
    this[Schema] = schema;
    this[BaseName] = baseName;
  }
};
__publicField(Table, _a5, "Table");
/** @internal */
__publicField(Table, "Symbol", {
  Name: TableName,
  Schema,
  OriginalName,
  Columns,
  ExtraConfigColumns,
  BaseName,
  IsAlias,
  ExtraConfigBuilder,
});
function getTableName(table) {
  return table[TableName];
}
function getTableUniqueName(table) {
  return `${table[Schema] ?? "public"}.${table[TableName]}`;
}

// node_modules/drizzle-orm/tracing-utils.js
function iife(fn, ...args) {
  return fn(...args);
}

// node_modules/drizzle-orm/version.js
var version = "0.36.1";

// node_modules/drizzle-orm/tracing.js
var otel;
var rawTracer;
var tracer = {
  startActiveSpan(name, fn) {
    if (!otel) {
      return fn();
    }
    if (!rawTracer) {
      rawTracer = otel.trace.getTracer("drizzle-orm", version);
    }
    return iife(
      (otel2, rawTracer2) =>
        rawTracer2.startActiveSpan(name, (span) => {
          try {
            return fn(span);
          } catch (e) {
            span.setStatus({
              code: otel2.SpanStatusCode.ERROR,
              message: e instanceof Error ? e.message : "Unknown error",
              // eslint-disable-line no-instanceof/no-instanceof
            });
            throw e;
          } finally {
            span.end();
          }
        }),
      otel,
      rawTracer,
    );
  },
};

// node_modules/drizzle-orm/column.js
var _a6;
var Column = class {
  constructor(table, config) {
    this.table = table;
    this.config = config;
    this.name = config.name;
    this.keyAsName = config.keyAsName;
    this.notNull = config.notNull;
    this.default = config.default;
    this.defaultFn = config.defaultFn;
    this.onUpdateFn = config.onUpdateFn;
    this.hasDefault = config.hasDefault;
    this.primary = config.primaryKey;
    this.isUnique = config.isUnique;
    this.uniqueName = config.uniqueName;
    this.uniqueType = config.uniqueType;
    this.dataType = config.dataType;
    this.columnType = config.columnType;
    this.generated = config.generated;
    this.generatedIdentity = config.generatedIdentity;
  }
  name;
  keyAsName;
  primary;
  notNull;
  default;
  defaultFn;
  onUpdateFn;
  hasDefault;
  isUnique;
  uniqueName;
  uniqueType;
  dataType;
  columnType;
  enumValues = void 0;
  generated = void 0;
  generatedIdentity = void 0;
  config;
  mapFromDriverValue(value) {
    return value;
  }
  mapToDriverValue(value) {
    return value;
  }
  // ** @internal */
  shouldDisableInsert() {
    return (
      this.config.generated !== void 0 &&
      this.config.generated.type !== "byDefault"
    );
  }
};
_a6 = entityKind;
__publicField(Column, _a6, "Column");

// node_modules/drizzle-orm/column-builder.js
var _a7;
var ColumnBuilder = class {
  config;
  constructor(name, dataType, columnType) {
    this.config = {
      name,
      keyAsName: name === "",
      notNull: false,
      default: void 0,
      hasDefault: false,
      primaryKey: false,
      isUnique: false,
      uniqueName: void 0,
      uniqueType: void 0,
      dataType,
      columnType,
      generated: void 0,
    };
  }
  /**
   * Changes the data type of the column. Commonly used with `json` columns. Also, useful for branded types.
   *
   * @example
   * ```ts
   * const users = pgTable('users', {
   * 	id: integer('id').$type<UserId>().primaryKey(),
   * 	details: json('details').$type<UserDetails>().notNull(),
   * });
   * ```
   */
  $type() {
    return this;
  }
  /**
   * Adds a `not null` clause to the column definition.
   *
   * Affects the `select` model of the table - columns *without* `not null` will be nullable on select.
   */
  notNull() {
    this.config.notNull = true;
    return this;
  }
  /**
   * Adds a `default <value>` clause to the column definition.
   *
   * Affects the `insert` model of the table - columns *with* `default` are optional on insert.
   *
   * If you need to set a dynamic default value, use {@link $defaultFn} instead.
   */
  default(value) {
    this.config.default = value;
    this.config.hasDefault = true;
    return this;
  }
  /**
   * Adds a dynamic default value to the column.
   * The function will be called when the row is inserted, and the returned value will be used as the column value.
   *
   * **Note:** This value does not affect the `drizzle-kit` behavior, it is only used at runtime in `drizzle-orm`.
   */
  $defaultFn(fn) {
    this.config.defaultFn = fn;
    this.config.hasDefault = true;
    return this;
  }
  /**
   * Alias for {@link $defaultFn}.
   */
  $default = this.$defaultFn;
  /**
   * Adds a dynamic update value to the column.
   * The function will be called when the row is updated, and the returned value will be used as the column value if none is provided.
   * If no `default` (or `$defaultFn`) value is provided, the function will be called when the row is inserted as well, and the returned value will be used as the column value.
   *
   * **Note:** This value does not affect the `drizzle-kit` behavior, it is only used at runtime in `drizzle-orm`.
   */
  $onUpdateFn(fn) {
    this.config.onUpdateFn = fn;
    this.config.hasDefault = true;
    return this;
  }
  /**
   * Alias for {@link $onUpdateFn}.
   */
  $onUpdate = this.$onUpdateFn;
  /**
   * Adds a `primary key` clause to the column definition. This implicitly makes the column `not null`.
   *
   * In SQLite, `integer primary key` implicitly makes the column auto-incrementing.
   */
  primaryKey() {
    this.config.primaryKey = true;
    this.config.notNull = true;
    return this;
  }
  /** @internal Sets the name of the column to the key within the table definition if a name was not given. */
  setName(name) {
    if (this.config.name !== "") return;
    this.config.name = name;
  }
};
_a7 = entityKind;
__publicField(ColumnBuilder, _a7, "ColumnBuilder");

// node_modules/drizzle-orm/pg-core/foreign-keys.js
var _a8;
var ForeignKeyBuilder = class {
  /** @internal */
  reference;
  /** @internal */
  _onUpdate = "no action";
  /** @internal */
  _onDelete = "no action";
  constructor(config, actions) {
    this.reference = () => {
      const { name, columns, foreignColumns } = config();
      return {
        name,
        columns,
        foreignTable: foreignColumns[0].table,
        foreignColumns,
      };
    };
    if (actions) {
      this._onUpdate = actions.onUpdate;
      this._onDelete = actions.onDelete;
    }
  }
  onUpdate(action) {
    this._onUpdate = action === void 0 ? "no action" : action;
    return this;
  }
  onDelete(action) {
    this._onDelete = action === void 0 ? "no action" : action;
    return this;
  }
  /** @internal */
  build(table) {
    return new ForeignKey(table, this);
  }
};
_a8 = entityKind;
__publicField(ForeignKeyBuilder, _a8, "PgForeignKeyBuilder");
var _a9;
var ForeignKey = class {
  constructor(table, builder) {
    this.table = table;
    this.reference = builder.reference;
    this.onUpdate = builder._onUpdate;
    this.onDelete = builder._onDelete;
  }
  reference;
  onUpdate;
  onDelete;
  getName() {
    const { name, columns, foreignColumns } = this.reference();
    const columnNames = columns.map((column) => column.name);
    const foreignColumnNames = foreignColumns.map((column) => column.name);
    const chunks = [
      this.table[TableName],
      ...columnNames,
      foreignColumns[0].table[TableName],
      ...foreignColumnNames,
    ];
    return name ?? `${chunks.join("_")}_fk`;
  }
};
_a9 = entityKind;
__publicField(ForeignKey, _a9, "PgForeignKey");

// node_modules/drizzle-orm/pg-core/unique-constraint.js
function uniqueKeyName(table, columns) {
  return `${table[TableName]}_${columns.join("_")}_unique`;
}
var _a10;
var UniqueConstraintBuilder = class {
  constructor(columns, name) {
    this.name = name;
    this.columns = columns;
  }
  /** @internal */
  columns;
  /** @internal */
  nullsNotDistinctConfig = false;
  nullsNotDistinct() {
    this.nullsNotDistinctConfig = true;
    return this;
  }
  /** @internal */
  build(table) {
    return new UniqueConstraint(
      table,
      this.columns,
      this.nullsNotDistinctConfig,
      this.name,
    );
  }
};
_a10 = entityKind;
__publicField(UniqueConstraintBuilder, _a10, "PgUniqueConstraintBuilder");
var _a11;
var UniqueOnConstraintBuilder = class {
  /** @internal */
  name;
  constructor(name) {
    this.name = name;
  }
  on(...columns) {
    return new UniqueConstraintBuilder(columns, this.name);
  }
};
_a11 = entityKind;
__publicField(UniqueOnConstraintBuilder, _a11, "PgUniqueOnConstraintBuilder");
var _a12;
var UniqueConstraint = class {
  constructor(table, columns, nullsNotDistinct, name) {
    this.table = table;
    this.columns = columns;
    this.name =
      name ??
      uniqueKeyName(
        this.table,
        this.columns.map((column) => column.name),
      );
    this.nullsNotDistinct = nullsNotDistinct;
  }
  columns;
  name;
  nullsNotDistinct = false;
  getName() {
    return this.name;
  }
};
_a12 = entityKind;
__publicField(UniqueConstraint, _a12, "PgUniqueConstraint");

// node_modules/drizzle-orm/pg-core/utils/array.js
function parsePgArrayValue(arrayString, startFrom, inQuotes) {
  for (let i = startFrom; i < arrayString.length; i++) {
    const char2 = arrayString[i];
    if (char2 === "\\") {
      i++;
      continue;
    }
    if (char2 === '"') {
      return [arrayString.slice(startFrom, i).replace(/\\/g, ""), i + 1];
    }
    if (inQuotes) {
      continue;
    }
    if (char2 === "," || char2 === "}") {
      return [arrayString.slice(startFrom, i).replace(/\\/g, ""), i];
    }
  }
  return [arrayString.slice(startFrom).replace(/\\/g, ""), arrayString.length];
}
function parsePgNestedArray(arrayString, startFrom = 0) {
  const result = [];
  let i = startFrom;
  let lastCharIsComma = false;
  while (i < arrayString.length) {
    const char2 = arrayString[i];
    if (char2 === ",") {
      if (lastCharIsComma || i === startFrom) {
        result.push("");
      }
      lastCharIsComma = true;
      i++;
      continue;
    }
    lastCharIsComma = false;
    if (char2 === "\\") {
      i += 2;
      continue;
    }
    if (char2 === '"') {
      const [value2, startFrom2] = parsePgArrayValue(arrayString, i + 1, true);
      result.push(value2);
      i = startFrom2;
      continue;
    }
    if (char2 === "}") {
      return [result, i + 1];
    }
    if (char2 === "{") {
      const [value2, startFrom2] = parsePgNestedArray(arrayString, i + 1);
      result.push(value2);
      i = startFrom2;
      continue;
    }
    const [value, newStartFrom] = parsePgArrayValue(arrayString, i, false);
    result.push(value);
    i = newStartFrom;
  }
  return [result, i];
}
function parsePgArray(arrayString) {
  const [result] = parsePgNestedArray(arrayString, 1);
  return result;
}
function makePgArray(array) {
  return `{${array
    .map((item) => {
      if (Array.isArray(item)) {
        return makePgArray(item);
      }
      if (typeof item === "string") {
        return `"${item.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
      }
      return `${item}`;
    })
    .join(",")}}`;
}

// node_modules/drizzle-orm/pg-core/columns/common.js
var _a13;
var PgColumnBuilder = class extends ColumnBuilder {
  foreignKeyConfigs = [];
  array(size) {
    return new PgArrayBuilder(this.config.name, this, size);
  }
  references(ref, actions = {}) {
    this.foreignKeyConfigs.push({ ref, actions });
    return this;
  }
  unique(name, config) {
    this.config.isUnique = true;
    this.config.uniqueName = name;
    this.config.uniqueType = config?.nulls;
    return this;
  }
  generatedAlwaysAs(as) {
    this.config.generated = {
      as,
      type: "always",
      mode: "stored",
    };
    return this;
  }
  /** @internal */
  buildForeignKeys(column, table) {
    return this.foreignKeyConfigs.map(({ ref, actions }) => {
      return iife(
        (ref2, actions2) => {
          const builder = new ForeignKeyBuilder(() => {
            const foreignColumn = ref2();
            return { columns: [column], foreignColumns: [foreignColumn] };
          });
          if (actions2.onUpdate) {
            builder.onUpdate(actions2.onUpdate);
          }
          if (actions2.onDelete) {
            builder.onDelete(actions2.onDelete);
          }
          return builder.build(table);
        },
        ref,
        actions,
      );
    });
  }
  /** @internal */
  buildExtraConfigColumn(table) {
    return new ExtraConfigColumn(table, this.config);
  }
};
_a13 = entityKind;
__publicField(PgColumnBuilder, _a13, "PgColumnBuilder");
var _a14;
var PgColumn = class extends Column {
  constructor(table, config) {
    if (!config.uniqueName) {
      config.uniqueName = uniqueKeyName(table, [config.name]);
    }
    super(table, config);
    this.table = table;
  }
};
_a14 = entityKind;
__publicField(PgColumn, _a14, "PgColumn");
var _a15;
var ExtraConfigColumn = class extends PgColumn {
  getSQLType() {
    return this.getSQLType();
  }
  indexConfig = {
    order: this.config.order ?? "asc",
    nulls: this.config.nulls ?? "last",
    opClass: this.config.opClass,
  };
  defaultConfig = {
    order: "asc",
    nulls: "last",
    opClass: void 0,
  };
  asc() {
    this.indexConfig.order = "asc";
    return this;
  }
  desc() {
    this.indexConfig.order = "desc";
    return this;
  }
  nullsFirst() {
    this.indexConfig.nulls = "first";
    return this;
  }
  nullsLast() {
    this.indexConfig.nulls = "last";
    return this;
  }
  /**
   * ### PostgreSQL documentation quote
   *
   * > An operator class with optional parameters can be specified for each column of an index.
   * The operator class identifies the operators to be used by the index for that column.
   * For example, a B-tree index on four-byte integers would use the int4_ops class;
   * this operator class includes comparison functions for four-byte integers.
   * In practice the default operator class for the column's data type is usually sufficient.
   * The main point of having operator classes is that for some data types, there could be more than one meaningful ordering.
   * For example, we might want to sort a complex-number data type either by absolute value or by real part.
   * We could do this by defining two operator classes for the data type and then selecting the proper class when creating an index.
   * More information about operator classes check:
   *
   * ### Useful links
   * https://www.postgresql.org/docs/current/sql-createindex.html
   *
   * https://www.postgresql.org/docs/current/indexes-opclass.html
   *
   * https://www.postgresql.org/docs/current/xindex.html
   *
   * ### Additional types
   * If you have the `pg_vector` extension installed in your database, you can use the
   * `vector_l2_ops`, `vector_ip_ops`, `vector_cosine_ops`, `vector_l1_ops`, `bit_hamming_ops`, `bit_jaccard_ops`, `halfvec_l2_ops`, `sparsevec_l2_ops` options, which are predefined types.
   *
   * **You can always specify any string you want in the operator class, in case Drizzle doesn't have it natively in its types**
   *
   * @param opClass
   * @returns
   */
  op(opClass) {
    this.indexConfig.opClass = opClass;
    return this;
  }
};
_a15 = entityKind;
__publicField(ExtraConfigColumn, _a15, "ExtraConfigColumn");
var _a16;
var IndexedColumn = class {
  constructor(name, keyAsName, type, indexConfig) {
    this.name = name;
    this.keyAsName = keyAsName;
    this.type = type;
    this.indexConfig = indexConfig;
  }
  name;
  keyAsName;
  type;
  indexConfig;
};
_a16 = entityKind;
__publicField(IndexedColumn, _a16, "IndexedColumn");
var _a17;
var PgArrayBuilder = class extends PgColumnBuilder {
  constructor(name, baseBuilder, size) {
    super(name, "array", "PgArray");
    this.config.baseBuilder = baseBuilder;
    this.config.size = size;
  }
  /** @internal */
  build(table) {
    const baseColumn = this.config.baseBuilder.build(table);
    return new PgArray(table, this.config, baseColumn);
  }
};
_a17 = entityKind;
__publicField(PgArrayBuilder, _a17, "PgArrayBuilder");
var _a18;
var _PgArray = class extends PgColumn {
  constructor(table, config, baseColumn, range) {
    super(table, config);
    this.baseColumn = baseColumn;
    this.range = range;
    this.size = config.size;
  }
  size;
  getSQLType() {
    return `${this.baseColumn.getSQLType()}[${typeof this.size === "number" ? this.size : ""}]`;
  }
  mapFromDriverValue(value) {
    if (typeof value === "string") {
      value = parsePgArray(value);
    }
    return value.map((v2) => this.baseColumn.mapFromDriverValue(v2));
  }
  mapToDriverValue(value, isNestedArray = false) {
    const a2 = value.map((v2) =>
      v2 === null
        ? null
        : is(this.baseColumn, _PgArray)
          ? this.baseColumn.mapToDriverValue(v2, true)
          : this.baseColumn.mapToDriverValue(v2),
    );
    if (isNestedArray) return a2;
    return makePgArray(a2);
  }
};
var PgArray = _PgArray;
_a18 = entityKind;
__publicField(PgArray, _a18, "PgArray");

// node_modules/drizzle-orm/pg-core/columns/enum.js
var isPgEnumSym = Symbol.for("drizzle:isPgEnum");
function isPgEnum(obj) {
  return (
    !!obj &&
    typeof obj === "function" &&
    isPgEnumSym in obj &&
    obj[isPgEnumSym] === true
  );
}
var _a19;
var PgEnumColumnBuilder = class extends PgColumnBuilder {
  constructor(name, enumInstance) {
    super(name, "string", "PgEnumColumn");
    this.config.enum = enumInstance;
  }
  /** @internal */
  build(table) {
    return new PgEnumColumn(table, this.config);
  }
};
_a19 = entityKind;
__publicField(PgEnumColumnBuilder, _a19, "PgEnumColumnBuilder");
var _a20;
var PgEnumColumn = class extends PgColumn {
  enum = this.config.enum;
  enumValues = this.config.enum.enumValues;
  constructor(table, config) {
    super(table, config);
    this.enum = config.enum;
  }
  getSQLType() {
    return this.enum.enumName;
  }
};
_a20 = entityKind;
__publicField(PgEnumColumn, _a20, "PgEnumColumn");

// node_modules/drizzle-orm/subquery.js
var _a21;
var Subquery = class {
  constructor(sql2, selection, alias, isWith = false) {
    this._ = {
      brand: "Subquery",
      sql: sql2,
      selectedFields: selection,
      alias,
      isWith,
    };
  }
  // getSQL(): SQL<unknown> {
  // 	return new SQL([this]);
  // }
};
_a21 = entityKind;
__publicField(Subquery, _a21, "Subquery");
var _a22;
var WithSubquery = class extends Subquery {};
_a22 = entityKind;
__publicField(WithSubquery, _a22, "WithSubquery");

// node_modules/drizzle-orm/view-common.js
var ViewBaseConfig = Symbol.for("drizzle:ViewBaseConfig");

// node_modules/drizzle-orm/sql/sql.js
var _a23;
var FakePrimitiveParam = class {};
_a23 = entityKind;
__publicField(FakePrimitiveParam, _a23, "FakePrimitiveParam");
function isSQLWrapper(value) {
  return (
    value !== null && value !== void 0 && typeof value.getSQL === "function"
  );
}
function mergeQueries(queries) {
  const result = { sql: "", params: [] };
  for (const query of queries) {
    result.sql += query.sql;
    result.params.push(...query.params);
    if (query.typings?.length) {
      if (!result.typings) {
        result.typings = [];
      }
      result.typings.push(...query.typings);
    }
  }
  return result;
}
var _a24;
var StringChunk = class {
  value;
  constructor(value) {
    this.value = Array.isArray(value) ? value : [value];
  }
  getSQL() {
    return new SQL([this]);
  }
};
_a24 = entityKind;
__publicField(StringChunk, _a24, "StringChunk");
var _a25;
var _SQL = class {
  constructor(queryChunks) {
    this.queryChunks = queryChunks;
  }
  /** @internal */
  decoder = noopDecoder;
  shouldInlineParams = false;
  append(query) {
    this.queryChunks.push(...query.queryChunks);
    return this;
  }
  toQuery(config) {
    return tracer.startActiveSpan("drizzle.buildSQL", (span) => {
      const query = this.buildQueryFromSourceParams(this.queryChunks, config);
      span?.setAttributes({
        "drizzle.query.text": query.sql,
        "drizzle.query.params": JSON.stringify(query.params),
      });
      return query;
    });
  }
  buildQueryFromSourceParams(chunks, _config) {
    const config = Object.assign({}, _config, {
      inlineParams: _config.inlineParams || this.shouldInlineParams,
      paramStartIndex: _config.paramStartIndex || { value: 0 },
    });
    const {
      casing,
      escapeName,
      escapeParam,
      prepareTyping,
      inlineParams,
      paramStartIndex,
    } = config;
    return mergeQueries(
      chunks.map((chunk) => {
        if (is(chunk, StringChunk)) {
          return { sql: chunk.value.join(""), params: [] };
        }
        if (is(chunk, Name)) {
          return { sql: escapeName(chunk.value), params: [] };
        }
        if (chunk === void 0) {
          return { sql: "", params: [] };
        }
        if (Array.isArray(chunk)) {
          const result = [new StringChunk("(")];
          for (const [i, p2] of chunk.entries()) {
            result.push(p2);
            if (i < chunk.length - 1) {
              result.push(new StringChunk(", "));
            }
          }
          result.push(new StringChunk(")"));
          return this.buildQueryFromSourceParams(result, config);
        }
        if (is(chunk, _SQL)) {
          return this.buildQueryFromSourceParams(chunk.queryChunks, {
            ...config,
            inlineParams: inlineParams || chunk.shouldInlineParams,
          });
        }
        if (is(chunk, Table)) {
          const schemaName = chunk[Table.Symbol.Schema];
          const tableName = chunk[Table.Symbol.Name];
          return {
            sql:
              schemaName === void 0
                ? escapeName(tableName)
                : escapeName(schemaName) + "." + escapeName(tableName),
            params: [],
          };
        }
        if (is(chunk, Column)) {
          const columnName = casing.getColumnCasing(chunk);
          if (_config.invokeSource === "indexes") {
            return { sql: escapeName(columnName), params: [] };
          }
          return {
            sql:
              escapeName(chunk.table[Table.Symbol.Name]) +
              "." +
              escapeName(columnName),
            params: [],
          };
        }
        if (is(chunk, View)) {
          const schemaName = chunk[ViewBaseConfig].schema;
          const viewName = chunk[ViewBaseConfig].name;
          return {
            sql:
              schemaName === void 0
                ? escapeName(viewName)
                : escapeName(schemaName) + "." + escapeName(viewName),
            params: [],
          };
        }
        if (is(chunk, Param)) {
          if (is(chunk.value, Placeholder)) {
            return {
              sql: escapeParam(paramStartIndex.value++, chunk),
              params: [chunk],
              typings: ["none"],
            };
          }
          const mappedValue =
            chunk.value === null
              ? null
              : chunk.encoder.mapToDriverValue(chunk.value);
          if (is(mappedValue, _SQL)) {
            return this.buildQueryFromSourceParams([mappedValue], config);
          }
          if (inlineParams) {
            return {
              sql: this.mapInlineParam(mappedValue, config),
              params: [],
            };
          }
          let typings = ["none"];
          if (prepareTyping) {
            typings = [prepareTyping(chunk.encoder)];
          }
          return {
            sql: escapeParam(paramStartIndex.value++, mappedValue),
            params: [mappedValue],
            typings,
          };
        }
        if (is(chunk, Placeholder)) {
          return {
            sql: escapeParam(paramStartIndex.value++, chunk),
            params: [chunk],
            typings: ["none"],
          };
        }
        if (is(chunk, _SQL.Aliased) && chunk.fieldAlias !== void 0) {
          return { sql: escapeName(chunk.fieldAlias), params: [] };
        }
        if (is(chunk, Subquery)) {
          if (chunk._.isWith) {
            return { sql: escapeName(chunk._.alias), params: [] };
          }
          return this.buildQueryFromSourceParams(
            [
              new StringChunk("("),
              chunk._.sql,
              new StringChunk(") "),
              new Name(chunk._.alias),
            ],
            config,
          );
        }
        if (isPgEnum(chunk)) {
          if (chunk.schema) {
            return {
              sql: escapeName(chunk.schema) + "." + escapeName(chunk.enumName),
              params: [],
            };
          }
          return { sql: escapeName(chunk.enumName), params: [] };
        }
        if (isSQLWrapper(chunk)) {
          if (chunk.shouldOmitSQLParens?.()) {
            return this.buildQueryFromSourceParams([chunk.getSQL()], config);
          }
          return this.buildQueryFromSourceParams(
            [new StringChunk("("), chunk.getSQL(), new StringChunk(")")],
            config,
          );
        }
        if (inlineParams) {
          return { sql: this.mapInlineParam(chunk, config), params: [] };
        }
        return {
          sql: escapeParam(paramStartIndex.value++, chunk),
          params: [chunk],
          typings: ["none"],
        };
      }),
    );
  }
  mapInlineParam(chunk, { escapeString }) {
    if (chunk === null) {
      return "null";
    }
    if (typeof chunk === "number" || typeof chunk === "boolean") {
      return chunk.toString();
    }
    if (typeof chunk === "string") {
      return escapeString(chunk);
    }
    if (typeof chunk === "object") {
      const mappedValueAsString = chunk.toString();
      if (mappedValueAsString === "[object Object]") {
        return escapeString(JSON.stringify(chunk));
      }
      return escapeString(mappedValueAsString);
    }
    throw new Error("Unexpected param value: " + chunk);
  }
  getSQL() {
    return this;
  }
  as(alias) {
    if (alias === void 0) {
      return this;
    }
    return new _SQL.Aliased(this, alias);
  }
  mapWith(decoder) {
    this.decoder =
      typeof decoder === "function" ? { mapFromDriverValue: decoder } : decoder;
    return this;
  }
  inlineParams() {
    this.shouldInlineParams = true;
    return this;
  }
  /**
   * This method is used to conditionally include a part of the query.
   *
   * @param condition - Condition to check
   * @returns itself if the condition is `true`, otherwise `undefined`
   */
  if(condition) {
    return condition ? this : void 0;
  }
};
var SQL = _SQL;
_a25 = entityKind;
__publicField(SQL, _a25, "SQL");
var _a26;
var Name = class {
  constructor(value) {
    this.value = value;
  }
  brand;
  getSQL() {
    return new SQL([this]);
  }
};
_a26 = entityKind;
__publicField(Name, _a26, "Name");
function isDriverValueEncoder(value) {
  return (
    typeof value === "object" &&
    value !== null &&
    "mapToDriverValue" in value &&
    typeof value.mapToDriverValue === "function"
  );
}
var noopDecoder = {
  mapFromDriverValue: (value) => value,
};
var noopEncoder = {
  mapToDriverValue: (value) => value,
};
var noopMapper = {
  ...noopDecoder,
  ...noopEncoder,
};
var _a27;
var Param = class {
  /**
   * @param value - Parameter value
   * @param encoder - Encoder to convert the value to a driver parameter
   */
  constructor(value, encoder = noopEncoder) {
    this.value = value;
    this.encoder = encoder;
  }
  brand;
  getSQL() {
    return new SQL([this]);
  }
};
_a27 = entityKind;
__publicField(Param, _a27, "Param");
function sql(strings, ...params) {
  const queryChunks = [];
  if (params.length > 0 || (strings.length > 0 && strings[0] !== "")) {
    queryChunks.push(new StringChunk(strings[0]));
  }
  for (const [paramIndex, param2] of params.entries()) {
    queryChunks.push(param2, new StringChunk(strings[paramIndex + 1]));
  }
  return new SQL(queryChunks);
}
((sql2) => {
  function empty() {
    return new SQL([]);
  }
  sql2.empty = empty;
  function fromList(list) {
    return new SQL(list);
  }
  sql2.fromList = fromList;
  function raw2(str) {
    return new SQL([new StringChunk(str)]);
  }
  sql2.raw = raw2;
  function join(chunks, separator) {
    const result = [];
    for (const [i, chunk] of chunks.entries()) {
      if (i > 0 && separator !== void 0) {
        result.push(separator);
      }
      result.push(chunk);
    }
    return new SQL(result);
  }
  sql2.join = join;
  function identifier(value) {
    return new Name(value);
  }
  sql2.identifier = identifier;
  function placeholder2(name2) {
    return new Placeholder(name2);
  }
  sql2.placeholder = placeholder2;
  function param2(value, encoder) {
    return new Param(value, encoder);
  }
  sql2.param = param2;
})(sql || (sql = {}));
((SQL2) => {
  class Aliased {
    constructor(sql2, fieldAlias) {
      this.sql = sql2;
      this.fieldAlias = fieldAlias;
    }
    static [entityKind] = "SQL.Aliased";
    /** @internal */
    isSelectionField = false;
    getSQL() {
      return this.sql;
    }
    /** @internal */
    clone() {
      return new Aliased(this.sql, this.fieldAlias);
    }
  }
  SQL2.Aliased = Aliased;
})(SQL || (SQL = {}));
var _a28;
var Placeholder = class {
  constructor(name2) {
    this.name = name2;
  }
  getSQL() {
    return new SQL([this]);
  }
};
_a28 = entityKind;
__publicField(Placeholder, _a28, "Placeholder");
function fillPlaceholders(params, values) {
  return params.map((p2) => {
    if (is(p2, Placeholder)) {
      if (!(p2.name in values)) {
        throw new Error(`No value for placeholder "${p2.name}" was provided`);
      }
      return values[p2.name];
    }
    if (is(p2, Param) && is(p2.value, Placeholder)) {
      if (!(p2.value.name in values)) {
        throw new Error(
          `No value for placeholder "${p2.value.name}" was provided`,
        );
      }
      return p2.encoder.mapToDriverValue(values[p2.value.name]);
    }
    return p2;
  });
}
var _a29;
var View = class {
  /** @internal */
  [((_a29 = entityKind), ViewBaseConfig)];
  constructor({ name: name2, schema, selectedFields, query }) {
    this[ViewBaseConfig] = {
      name: name2,
      originalName: name2,
      schema,
      selectedFields,
      query,
      isExisting: !query,
      isAlias: false,
    };
  }
  getSQL() {
    return new SQL([this]);
  }
};
__publicField(View, _a29, "View");
Column.prototype.getSQL = function () {
  return new SQL([this]);
};
Table.prototype.getSQL = function () {
  return new SQL([this]);
};
Subquery.prototype.getSQL = function () {
  return new SQL([this]);
};

// node_modules/drizzle-orm/utils.js
function mapResultRow(columns, row, joinsNotNullableMap) {
  const nullifyMap = {};
  const result = columns.reduce((result2, { path, field }, columnIndex) => {
    let decoder;
    if (is(field, Column)) {
      decoder = field;
    } else if (is(field, SQL)) {
      decoder = field.decoder;
    } else {
      decoder = field.sql.decoder;
    }
    let node = result2;
    for (const [pathChunkIndex, pathChunk] of path.entries()) {
      if (pathChunkIndex < path.length - 1) {
        if (!(pathChunk in node)) {
          node[pathChunk] = {};
        }
        node = node[pathChunk];
      } else {
        const rawValue = row[columnIndex];
        const value = (node[pathChunk] =
          rawValue === null ? null : decoder.mapFromDriverValue(rawValue));
        if (joinsNotNullableMap && is(field, Column) && path.length === 2) {
          const objectName = path[0];
          if (!(objectName in nullifyMap)) {
            nullifyMap[objectName] =
              value === null ? getTableName(field.table) : false;
          } else if (
            typeof nullifyMap[objectName] === "string" &&
            nullifyMap[objectName] !== getTableName(field.table)
          ) {
            nullifyMap[objectName] = false;
          }
        }
      }
    }
    return result2;
  }, {});
  if (joinsNotNullableMap && Object.keys(nullifyMap).length > 0) {
    for (const [objectName, tableName] of Object.entries(nullifyMap)) {
      if (typeof tableName === "string" && !joinsNotNullableMap[tableName]) {
        result[objectName] = null;
      }
    }
  }
  return result;
}
function orderSelectedFields(fields, pathPrefix) {
  return Object.entries(fields).reduce((result, [name, field]) => {
    if (typeof name !== "string") {
      return result;
    }
    const newPath = pathPrefix ? [...pathPrefix, name] : [name];
    if (is(field, Column) || is(field, SQL) || is(field, SQL.Aliased)) {
      result.push({ path: newPath, field });
    } else if (is(field, Table)) {
      result.push(...orderSelectedFields(field[Table.Symbol.Columns], newPath));
    } else {
      result.push(...orderSelectedFields(field, newPath));
    }
    return result;
  }, []);
}
function haveSameKeys(left, right) {
  const leftKeys = Object.keys(left);
  const rightKeys = Object.keys(right);
  if (leftKeys.length !== rightKeys.length) {
    return false;
  }
  for (const [index, key] of leftKeys.entries()) {
    if (key !== rightKeys[index]) {
      return false;
    }
  }
  return true;
}
function mapUpdateSet(table, values) {
  const entries = Object.entries(values)
    .filter(([, value]) => value !== void 0)
    .map(([key, value]) => {
      if (is(value, SQL)) {
        return [key, value];
      } else {
        return [key, new Param(value, table[Table.Symbol.Columns][key])];
      }
    });
  if (entries.length === 0) {
    throw new Error("No values to set");
  }
  return Object.fromEntries(entries);
}
function applyMixins(baseClass, extendedClasses) {
  for (const extendedClass of extendedClasses) {
    for (const name of Object.getOwnPropertyNames(extendedClass.prototype)) {
      if (name === "constructor") continue;
      Object.defineProperty(
        baseClass.prototype,
        name,
        Object.getOwnPropertyDescriptor(extendedClass.prototype, name) ||
          /* @__PURE__ */ Object.create(null),
      );
    }
  }
}
function getTableColumns(table) {
  return table[Table.Symbol.Columns];
}
function getTableLikeName(table) {
  return is(table, Subquery)
    ? table._.alias
    : is(table, View)
      ? table[ViewBaseConfig].name
      : is(table, SQL)
        ? void 0
        : table[Table.Symbol.IsAlias]
          ? table[Table.Symbol.Name]
          : table[Table.Symbol.BaseName];
}
function getColumnNameAndConfig(a2, b) {
  return {
    name: typeof a2 === "string" && a2.length > 0 ? a2 : "",
    config: typeof a2 === "object" ? a2 : b,
  };
}
function isConfig(data) {
  if (typeof data !== "object" || data === null) return false;
  if (data.constructor.name !== "Object") return false;
  if ("logger" in data) {
    const type = typeof data["logger"];
    if (
      type !== "boolean" &&
      (type !== "object" || typeof data["logger"]["logQuery"] !== "function") &&
      type !== "undefined"
    )
      return false;
    return true;
  }
  if ("schema" in data) {
    const type = typeof data["logger"];
    if (type !== "object" && type !== "undefined") return false;
    return true;
  }
  if ("casing" in data) {
    const type = typeof data["logger"];
    if (type !== "string" && type !== "undefined") return false;
    return true;
  }
  if ("mode" in data) {
    if (
      data["mode"] !== "default" ||
      data["mode"] !== "planetscale" ||
      data["mode"] !== void 0
    )
      return false;
    return true;
  }
  if ("connection" in data) {
    const type = typeof data["connection"];
    if (type !== "string" && type !== "object" && type !== "undefined")
      return false;
    return true;
  }
  if ("client" in data) {
    const type = typeof data["client"];
    if (type !== "object" && type !== "function" && type !== "undefined")
      return false;
    return true;
  }
  if (Object.keys(data).length === 0) return true;
  return false;
}

// node_modules/drizzle-orm/pg-core/query-builders/delete.js
var _a30;
var PgDeleteBase = class extends QueryPromise {
  constructor(table, session, dialect, withList) {
    super();
    this.session = session;
    this.dialect = dialect;
    this.config = { table, withList };
  }
  config;
  /**
   * Adds a `where` clause to the query.
   *
   * Calling this method will delete only those rows that fulfill a specified condition.
   *
   * See docs: {@link https://orm.drizzle.team/docs/delete}
   *
   * @param where the `where` clause.
   *
   * @example
   * You can use conditional operators and `sql function` to filter the rows to be deleted.
   *
   * ```ts
   * // Delete all cars with green color
   * await db.delete(cars).where(eq(cars.color, 'green'));
   * // or
   * await db.delete(cars).where(sql`${cars.color} = 'green'`)
   * ```
   *
   * You can logically combine conditional operators with `and()` and `or()` operators:
   *
   * ```ts
   * // Delete all BMW cars with a green color
   * await db.delete(cars).where(and(eq(cars.color, 'green'), eq(cars.brand, 'BMW')));
   *
   * // Delete all cars with the green or blue color
   * await db.delete(cars).where(or(eq(cars.color, 'green'), eq(cars.color, 'blue')));
   * ```
   */
  where(where) {
    this.config.where = where;
    return this;
  }
  returning(fields = this.config.table[Table.Symbol.Columns]) {
    this.config.returning = orderSelectedFields(fields);
    return this;
  }
  /** @internal */
  getSQL() {
    return this.dialect.buildDeleteQuery(this.config);
  }
  toSQL() {
    const { typings: _typings, ...rest } = this.dialect.sqlToQuery(
      this.getSQL(),
    );
    return rest;
  }
  /** @internal */
  _prepare(name) {
    return tracer.startActiveSpan("drizzle.prepareQuery", () => {
      return this.session.prepareQuery(
        this.dialect.sqlToQuery(this.getSQL()),
        this.config.returning,
        name,
        true,
      );
    });
  }
  prepare(name) {
    return this._prepare(name);
  }
  execute = (placeholderValues) => {
    return tracer.startActiveSpan("drizzle.operation", () => {
      return this._prepare().execute(placeholderValues);
    });
  };
  $dynamic() {
    return this;
  }
};
_a30 = entityKind;
__publicField(PgDeleteBase, _a30, "PgDelete");

// node_modules/drizzle-orm/pg-core/query-builders/insert.js
var _a31;
var PgInsertBuilder = class {
  constructor(table, session, dialect, withList) {
    this.table = table;
    this.session = session;
    this.dialect = dialect;
    this.withList = withList;
  }
  values(values) {
    values = Array.isArray(values) ? values : [values];
    if (values.length === 0) {
      throw new Error("values() must be called with at least one value");
    }
    const mappedValues = values.map((entry) => {
      const result = {};
      const cols = this.table[Table.Symbol.Columns];
      for (const colKey of Object.keys(entry)) {
        const colValue = entry[colKey];
        result[colKey] = is(colValue, SQL)
          ? colValue
          : new Param(colValue, cols[colKey]);
      }
      return result;
    });
    return new PgInsertBase(
      this.table,
      mappedValues,
      this.session,
      this.dialect,
      this.withList,
    );
  }
};
_a31 = entityKind;
__publicField(PgInsertBuilder, _a31, "PgInsertBuilder");
var _a32;
var PgInsertBase = class extends QueryPromise {
  constructor(table, values, session, dialect, withList) {
    super();
    this.session = session;
    this.dialect = dialect;
    this.config = { table, values, withList };
  }
  config;
  returning(fields = this.config.table[Table.Symbol.Columns]) {
    this.config.returning = orderSelectedFields(fields);
    return this;
  }
  /**
   * Adds an `on conflict do nothing` clause to the query.
   *
   * Calling this method simply avoids inserting a row as its alternative action.
   *
   * See docs: {@link https://orm.drizzle.team/docs/insert#on-conflict-do-nothing}
   *
   * @param config The `target` and `where` clauses.
   *
   * @example
   * ```ts
   * // Insert one row and cancel the insert if there's a conflict
   * await db.insert(cars)
   *   .values({ id: 1, brand: 'BMW' })
   *   .onConflictDoNothing();
   *
   * // Explicitly specify conflict target
   * await db.insert(cars)
   *   .values({ id: 1, brand: 'BMW' })
   *   .onConflictDoNothing({ target: cars.id });
   * ```
   */
  onConflictDoNothing(config = {}) {
    if (config.target === void 0) {
      this.config.onConflict = sql`do nothing`;
    } else {
      let targetColumn = "";
      targetColumn = Array.isArray(config.target)
        ? config.target
            .map((it) =>
              this.dialect.escapeName(this.dialect.casing.getColumnCasing(it)),
            )
            .join(",")
        : this.dialect.escapeName(
            this.dialect.casing.getColumnCasing(config.target),
          );
      const whereSql = config.where ? sql` where ${config.where}` : void 0;
      this.config.onConflict = sql`(${sql.raw(targetColumn)})${whereSql} do nothing`;
    }
    return this;
  }
  /**
   * Adds an `on conflict do update` clause to the query.
   *
   * Calling this method will update the existing row that conflicts with the row proposed for insertion as its alternative action.
   *
   * See docs: {@link https://orm.drizzle.team/docs/insert#upserts-and-conflicts}
   *
   * @param config The `target`, `set` and `where` clauses.
   *
   * @example
   * ```ts
   * // Update the row if there's a conflict
   * await db.insert(cars)
   *   .values({ id: 1, brand: 'BMW' })
   *   .onConflictDoUpdate({
   *     target: cars.id,
   *     set: { brand: 'Porsche' }
   *   });
   *
   * // Upsert with 'where' clause
   * await db.insert(cars)
   *   .values({ id: 1, brand: 'BMW' })
   *   .onConflictDoUpdate({
   *     target: cars.id,
   *     set: { brand: 'newBMW' },
   *     targetWhere: sql`${cars.createdAt} > '2023-01-01'::date`,
   *   });
   * ```
   */
  onConflictDoUpdate(config) {
    if (config.where && (config.targetWhere || config.setWhere)) {
      throw new Error(
        'You cannot use both "where" and "targetWhere"/"setWhere" at the same time - "where" is deprecated, use "targetWhere" or "setWhere" instead.',
      );
    }
    const whereSql = config.where ? sql` where ${config.where}` : void 0;
    const targetWhereSql = config.targetWhere
      ? sql` where ${config.targetWhere}`
      : void 0;
    const setWhereSql = config.setWhere
      ? sql` where ${config.setWhere}`
      : void 0;
    const setSql = this.dialect.buildUpdateSet(
      this.config.table,
      mapUpdateSet(this.config.table, config.set),
    );
    let targetColumn = "";
    targetColumn = Array.isArray(config.target)
      ? config.target
          .map((it) =>
            this.dialect.escapeName(this.dialect.casing.getColumnCasing(it)),
          )
          .join(",")
      : this.dialect.escapeName(
          this.dialect.casing.getColumnCasing(config.target),
        );
    this.config.onConflict = sql`(${sql.raw(targetColumn)})${targetWhereSql} do update set ${setSql}${whereSql}${setWhereSql}`;
    return this;
  }
  /** @internal */
  getSQL() {
    return this.dialect.buildInsertQuery(this.config);
  }
  toSQL() {
    const { typings: _typings, ...rest } = this.dialect.sqlToQuery(
      this.getSQL(),
    );
    return rest;
  }
  /** @internal */
  _prepare(name) {
    return tracer.startActiveSpan("drizzle.prepareQuery", () => {
      return this.session.prepareQuery(
        this.dialect.sqlToQuery(this.getSQL()),
        this.config.returning,
        name,
        true,
      );
    });
  }
  prepare(name) {
    return this._prepare(name);
  }
  execute = (placeholderValues) => {
    return tracer.startActiveSpan("drizzle.operation", () => {
      return this._prepare().execute(placeholderValues);
    });
  };
  $dynamic() {
    return this;
  }
};
_a32 = entityKind;
__publicField(PgInsertBase, _a32, "PgInsert");

// node_modules/drizzle-orm/alias.js
var _a33;
var ColumnAliasProxyHandler = class {
  constructor(table) {
    this.table = table;
  }
  get(columnObj, prop) {
    if (prop === "table") {
      return this.table;
    }
    return columnObj[prop];
  }
};
_a33 = entityKind;
__publicField(ColumnAliasProxyHandler, _a33, "ColumnAliasProxyHandler");
var _a34;
var TableAliasProxyHandler = class {
  constructor(alias, replaceOriginalName) {
    this.alias = alias;
    this.replaceOriginalName = replaceOriginalName;
  }
  get(target, prop) {
    if (prop === Table.Symbol.IsAlias) {
      return true;
    }
    if (prop === Table.Symbol.Name) {
      return this.alias;
    }
    if (this.replaceOriginalName && prop === Table.Symbol.OriginalName) {
      return this.alias;
    }
    if (prop === ViewBaseConfig) {
      return {
        ...target[ViewBaseConfig],
        name: this.alias,
        isAlias: true,
      };
    }
    if (prop === Table.Symbol.Columns) {
      const columns = target[Table.Symbol.Columns];
      if (!columns) {
        return columns;
      }
      const proxiedColumns = {};
      Object.keys(columns).map((key) => {
        proxiedColumns[key] = new Proxy(
          columns[key],
          new ColumnAliasProxyHandler(new Proxy(target, this)),
        );
      });
      return proxiedColumns;
    }
    const value = target[prop];
    if (is(value, Column)) {
      return new Proxy(
        value,
        new ColumnAliasProxyHandler(new Proxy(target, this)),
      );
    }
    return value;
  }
};
_a34 = entityKind;
__publicField(TableAliasProxyHandler, _a34, "TableAliasProxyHandler");
var _a35;
var RelationTableAliasProxyHandler = class {
  constructor(alias) {
    this.alias = alias;
  }
  get(target, prop) {
    if (prop === "sourceTable") {
      return aliasedTable(target.sourceTable, this.alias);
    }
    return target[prop];
  }
};
_a35 = entityKind;
__publicField(
  RelationTableAliasProxyHandler,
  _a35,
  "RelationTableAliasProxyHandler",
);
function aliasedTable(table, tableAlias) {
  return new Proxy(table, new TableAliasProxyHandler(tableAlias, false));
}
function aliasedTableColumn(column, tableAlias) {
  return new Proxy(
    column,
    new ColumnAliasProxyHandler(
      new Proxy(column.table, new TableAliasProxyHandler(tableAlias, false)),
    ),
  );
}
function mapColumnsInAliasedSQLToAlias(query, alias) {
  return new SQL.Aliased(
    mapColumnsInSQLToAlias(query.sql, alias),
    query.fieldAlias,
  );
}
function mapColumnsInSQLToAlias(query, alias) {
  return sql.join(
    query.queryChunks.map((c) => {
      if (is(c, Column)) {
        return aliasedTableColumn(c, alias);
      }
      if (is(c, SQL)) {
        return mapColumnsInSQLToAlias(c, alias);
      }
      if (is(c, SQL.Aliased)) {
        return mapColumnsInAliasedSQLToAlias(c, alias);
      }
      return c;
    }),
  );
}

// node_modules/drizzle-orm/casing.js
function toSnakeCase(input) {
  const words =
    input
      .replace(/['\u2019]/g, "")
      .match(/[\da-z]+|[A-Z]+(?![a-z])|[A-Z][\da-z]+/g) ?? [];
  return words.map((word) => word.toLowerCase()).join("_");
}
function toCamelCase(input) {
  const words =
    input
      .replace(/['\u2019]/g, "")
      .match(/[\da-z]+|[A-Z]+(?![a-z])|[A-Z][\da-z]+/g) ?? [];
  return words.reduce((acc, word, i) => {
    const formattedWord =
      i === 0 ? word.toLowerCase() : `${word[0].toUpperCase()}${word.slice(1)}`;
    return acc + formattedWord;
  }, "");
}
function noopCase(input) {
  return input;
}
var _a36;
var CasingCache = class {
  /** @internal */
  cache = {};
  cachedTables = {};
  convert;
  constructor(casing) {
    this.convert =
      casing === "snake_case"
        ? toSnakeCase
        : casing === "camelCase"
          ? toCamelCase
          : noopCase;
  }
  getColumnCasing(column) {
    if (!column.keyAsName) return column.name;
    const schema = column.table[Table.Symbol.Schema] ?? "public";
    const tableName = column.table[Table.Symbol.OriginalName];
    const key = `${schema}.${tableName}.${column.name}`;
    if (!this.cache[key]) {
      this.cacheTable(column.table);
    }
    return this.cache[key];
  }
  cacheTable(table) {
    const schema = table[Table.Symbol.Schema] ?? "public";
    const tableName = table[Table.Symbol.OriginalName];
    const tableKey = `${schema}.${tableName}`;
    if (!this.cachedTables[tableKey]) {
      for (const column of Object.values(table[Table.Symbol.Columns])) {
        const columnKey = `${tableKey}.${column.name}`;
        this.cache[columnKey] = this.convert(column.name);
      }
      this.cachedTables[tableKey] = true;
    }
  }
  clearCache() {
    this.cache = {};
    this.cachedTables = {};
  }
};
_a36 = entityKind;
__publicField(CasingCache, _a36, "CasingCache");

// node_modules/drizzle-orm/errors.js
var _a37;
var DrizzleError = class extends Error {
  constructor({ message, cause }) {
    super(message);
    this.name = "DrizzleError";
    this.cause = cause;
  }
};
_a37 = entityKind;
__publicField(DrizzleError, _a37, "DrizzleError");
var _a38;
var TransactionRollbackError = class extends DrizzleError {
  constructor() {
    super({ message: "Rollback" });
  }
};
_a38 = entityKind;
__publicField(TransactionRollbackError, _a38, "TransactionRollbackError");

// node_modules/drizzle-orm/pg-core/columns/int.common.js
var _a39;
var PgIntColumnBaseBuilder = class extends PgColumnBuilder {
  generatedAlwaysAsIdentity(sequence) {
    if (sequence) {
      const { name, ...options } = sequence;
      this.config.generatedIdentity = {
        type: "always",
        sequenceName: name,
        sequenceOptions: options,
      };
    } else {
      this.config.generatedIdentity = {
        type: "always",
      };
    }
    this.config.hasDefault = true;
    this.config.notNull = true;
    return this;
  }
  generatedByDefaultAsIdentity(sequence) {
    if (sequence) {
      const { name, ...options } = sequence;
      this.config.generatedIdentity = {
        type: "byDefault",
        sequenceName: name,
        sequenceOptions: options,
      };
    } else {
      this.config.generatedIdentity = {
        type: "byDefault",
      };
    }
    this.config.hasDefault = true;
    this.config.notNull = true;
    return this;
  }
};
_a39 = entityKind;
__publicField(PgIntColumnBaseBuilder, _a39, "PgIntColumnBaseBuilder");

// node_modules/drizzle-orm/pg-core/columns/bigint.js
var _a40;
var PgBigInt53Builder = class extends PgIntColumnBaseBuilder {
  constructor(name) {
    super(name, "number", "PgBigInt53");
  }
  /** @internal */
  build(table) {
    return new PgBigInt53(table, this.config);
  }
};
_a40 = entityKind;
__publicField(PgBigInt53Builder, _a40, "PgBigInt53Builder");
var _a41;
var PgBigInt53 = class extends PgColumn {
  getSQLType() {
    return "bigint";
  }
  mapFromDriverValue(value) {
    if (typeof value === "number") {
      return value;
    }
    return Number(value);
  }
};
_a41 = entityKind;
__publicField(PgBigInt53, _a41, "PgBigInt53");
var _a42;
var PgBigInt64Builder = class extends PgIntColumnBaseBuilder {
  constructor(name) {
    super(name, "bigint", "PgBigInt64");
  }
  /** @internal */
  build(table) {
    return new PgBigInt64(table, this.config);
  }
};
_a42 = entityKind;
__publicField(PgBigInt64Builder, _a42, "PgBigInt64Builder");
var _a43;
var PgBigInt64 = class extends PgColumn {
  getSQLType() {
    return "bigint";
  }
  // eslint-disable-next-line unicorn/prefer-native-coercion-functions
  mapFromDriverValue(value) {
    return BigInt(value);
  }
};
_a43 = entityKind;
__publicField(PgBigInt64, _a43, "PgBigInt64");
function bigint(a2, b) {
  const { name, config } = getColumnNameAndConfig(a2, b);
  if (config.mode === "number") {
    return new PgBigInt53Builder(name);
  }
  return new PgBigInt64Builder(name);
}

// node_modules/drizzle-orm/pg-core/columns/bigserial.js
var _a44;
var PgBigSerial53Builder = class extends PgColumnBuilder {
  constructor(name) {
    super(name, "number", "PgBigSerial53");
    this.config.hasDefault = true;
    this.config.notNull = true;
  }
  /** @internal */
  build(table) {
    return new PgBigSerial53(table, this.config);
  }
};
_a44 = entityKind;
__publicField(PgBigSerial53Builder, _a44, "PgBigSerial53Builder");
var _a45;
var PgBigSerial53 = class extends PgColumn {
  getSQLType() {
    return "bigserial";
  }
  mapFromDriverValue(value) {
    if (typeof value === "number") {
      return value;
    }
    return Number(value);
  }
};
_a45 = entityKind;
__publicField(PgBigSerial53, _a45, "PgBigSerial53");
var _a46;
var PgBigSerial64Builder = class extends PgColumnBuilder {
  constructor(name) {
    super(name, "bigint", "PgBigSerial64");
    this.config.hasDefault = true;
  }
  /** @internal */
  build(table) {
    return new PgBigSerial64(table, this.config);
  }
};
_a46 = entityKind;
__publicField(PgBigSerial64Builder, _a46, "PgBigSerial64Builder");
var _a47;
var PgBigSerial64 = class extends PgColumn {
  getSQLType() {
    return "bigserial";
  }
  // eslint-disable-next-line unicorn/prefer-native-coercion-functions
  mapFromDriverValue(value) {
    return BigInt(value);
  }
};
_a47 = entityKind;
__publicField(PgBigSerial64, _a47, "PgBigSerial64");
function bigserial(a2, b) {
  const { name, config } = getColumnNameAndConfig(a2, b);
  if (config.mode === "number") {
    return new PgBigSerial53Builder(name);
  }
  return new PgBigSerial64Builder(name);
}

// node_modules/drizzle-orm/pg-core/columns/boolean.js
var _a48;
var PgBooleanBuilder = class extends PgColumnBuilder {
  constructor(name) {
    super(name, "boolean", "PgBoolean");
  }
  /** @internal */
  build(table) {
    return new PgBoolean(table, this.config);
  }
};
_a48 = entityKind;
__publicField(PgBooleanBuilder, _a48, "PgBooleanBuilder");
var _a49;
var PgBoolean = class extends PgColumn {
  getSQLType() {
    return "boolean";
  }
};
_a49 = entityKind;
__publicField(PgBoolean, _a49, "PgBoolean");
function boolean(name) {
  return new PgBooleanBuilder(name ?? "");
}

// node_modules/drizzle-orm/pg-core/columns/char.js
var _a50;
var PgCharBuilder = class extends PgColumnBuilder {
  constructor(name, config) {
    super(name, "string", "PgChar");
    this.config.length = config.length;
    this.config.enumValues = config.enum;
  }
  /** @internal */
  build(table) {
    return new PgChar(table, this.config);
  }
};
_a50 = entityKind;
__publicField(PgCharBuilder, _a50, "PgCharBuilder");
var _a51;
var PgChar = class extends PgColumn {
  length = this.config.length;
  enumValues = this.config.enumValues;
  getSQLType() {
    return this.length === void 0 ? `char` : `char(${this.length})`;
  }
};
_a51 = entityKind;
__publicField(PgChar, _a51, "PgChar");
function char(a2, b = {}) {
  const { name, config } = getColumnNameAndConfig(a2, b);
  return new PgCharBuilder(name, config);
}

// node_modules/drizzle-orm/pg-core/columns/cidr.js
var _a52;
var PgCidrBuilder = class extends PgColumnBuilder {
  constructor(name) {
    super(name, "string", "PgCidr");
  }
  /** @internal */
  build(table) {
    return new PgCidr(table, this.config);
  }
};
_a52 = entityKind;
__publicField(PgCidrBuilder, _a52, "PgCidrBuilder");
var _a53;
var PgCidr = class extends PgColumn {
  getSQLType() {
    return "cidr";
  }
};
_a53 = entityKind;
__publicField(PgCidr, _a53, "PgCidr");
function cidr(name) {
  return new PgCidrBuilder(name ?? "");
}

// node_modules/drizzle-orm/pg-core/columns/custom.js
var _a54;
var PgCustomColumnBuilder = class extends PgColumnBuilder {
  constructor(name, fieldConfig, customTypeParams) {
    super(name, "custom", "PgCustomColumn");
    this.config.fieldConfig = fieldConfig;
    this.config.customTypeParams = customTypeParams;
  }
  /** @internal */
  build(table) {
    return new PgCustomColumn(table, this.config);
  }
};
_a54 = entityKind;
__publicField(PgCustomColumnBuilder, _a54, "PgCustomColumnBuilder");
var _a55;
var PgCustomColumn = class extends PgColumn {
  sqlName;
  mapTo;
  mapFrom;
  constructor(table, config) {
    super(table, config);
    this.sqlName = config.customTypeParams.dataType(config.fieldConfig);
    this.mapTo = config.customTypeParams.toDriver;
    this.mapFrom = config.customTypeParams.fromDriver;
  }
  getSQLType() {
    return this.sqlName;
  }
  mapFromDriverValue(value) {
    return typeof this.mapFrom === "function" ? this.mapFrom(value) : value;
  }
  mapToDriverValue(value) {
    return typeof this.mapTo === "function" ? this.mapTo(value) : value;
  }
};
_a55 = entityKind;
__publicField(PgCustomColumn, _a55, "PgCustomColumn");
function customType(customTypeParams) {
  return (a2, b) => {
    const { name, config } = getColumnNameAndConfig(a2, b);
    return new PgCustomColumnBuilder(name, config, customTypeParams);
  };
}

// node_modules/drizzle-orm/pg-core/columns/date.common.js
var _a56;
var PgDateColumnBaseBuilder = class extends PgColumnBuilder {
  defaultNow() {
    return this.default(sql`now()`);
  }
};
_a56 = entityKind;
__publicField(PgDateColumnBaseBuilder, _a56, "PgDateColumnBaseBuilder");

// node_modules/drizzle-orm/pg-core/columns/date.js
var _a57;
var PgDateBuilder = class extends PgDateColumnBaseBuilder {
  constructor(name) {
    super(name, "date", "PgDate");
  }
  /** @internal */
  build(table) {
    return new PgDate(table, this.config);
  }
};
_a57 = entityKind;
__publicField(PgDateBuilder, _a57, "PgDateBuilder");
var _a58;
var PgDate = class extends PgColumn {
  getSQLType() {
    return "date";
  }
  mapFromDriverValue(value) {
    return new Date(value);
  }
  mapToDriverValue(value) {
    return value.toISOString();
  }
};
_a58 = entityKind;
__publicField(PgDate, _a58, "PgDate");
var _a59;
var PgDateStringBuilder = class extends PgDateColumnBaseBuilder {
  constructor(name) {
    super(name, "string", "PgDateString");
  }
  /** @internal */
  build(table) {
    return new PgDateString(table, this.config);
  }
};
_a59 = entityKind;
__publicField(PgDateStringBuilder, _a59, "PgDateStringBuilder");
var _a60;
var PgDateString = class extends PgColumn {
  getSQLType() {
    return "date";
  }
};
_a60 = entityKind;
__publicField(PgDateString, _a60, "PgDateString");
function date(a2, b) {
  const { name, config } = getColumnNameAndConfig(a2, b);
  if (config?.mode === "date") {
    return new PgDateBuilder(name);
  }
  return new PgDateStringBuilder(name);
}

// node_modules/drizzle-orm/pg-core/columns/double-precision.js
var _a61;
var PgDoublePrecisionBuilder = class extends PgColumnBuilder {
  constructor(name) {
    super(name, "number", "PgDoublePrecision");
  }
  /** @internal */
  build(table) {
    return new PgDoublePrecision(table, this.config);
  }
};
_a61 = entityKind;
__publicField(PgDoublePrecisionBuilder, _a61, "PgDoublePrecisionBuilder");
var _a62;
var PgDoublePrecision = class extends PgColumn {
  getSQLType() {
    return "double precision";
  }
  mapFromDriverValue(value) {
    if (typeof value === "string") {
      return Number.parseFloat(value);
    }
    return value;
  }
};
_a62 = entityKind;
__publicField(PgDoublePrecision, _a62, "PgDoublePrecision");
function doublePrecision(name) {
  return new PgDoublePrecisionBuilder(name ?? "");
}

// node_modules/drizzle-orm/pg-core/columns/inet.js
var _a63;
var PgInetBuilder = class extends PgColumnBuilder {
  constructor(name) {
    super(name, "string", "PgInet");
  }
  /** @internal */
  build(table) {
    return new PgInet(table, this.config);
  }
};
_a63 = entityKind;
__publicField(PgInetBuilder, _a63, "PgInetBuilder");
var _a64;
var PgInet = class extends PgColumn {
  getSQLType() {
    return "inet";
  }
};
_a64 = entityKind;
__publicField(PgInet, _a64, "PgInet");
function inet(name) {
  return new PgInetBuilder(name ?? "");
}

// node_modules/drizzle-orm/pg-core/columns/integer.js
var _a65;
var PgIntegerBuilder = class extends PgIntColumnBaseBuilder {
  constructor(name) {
    super(name, "number", "PgInteger");
  }
  /** @internal */
  build(table) {
    return new PgInteger(table, this.config);
  }
};
_a65 = entityKind;
__publicField(PgIntegerBuilder, _a65, "PgIntegerBuilder");
var _a66;
var PgInteger = class extends PgColumn {
  getSQLType() {
    return "integer";
  }
  mapFromDriverValue(value) {
    if (typeof value === "string") {
      return Number.parseInt(value);
    }
    return value;
  }
};
_a66 = entityKind;
__publicField(PgInteger, _a66, "PgInteger");
function integer(name) {
  return new PgIntegerBuilder(name ?? "");
}

// node_modules/drizzle-orm/pg-core/columns/interval.js
var _a67;
var PgIntervalBuilder = class extends PgColumnBuilder {
  constructor(name, intervalConfig) {
    super(name, "string", "PgInterval");
    this.config.intervalConfig = intervalConfig;
  }
  /** @internal */
  build(table) {
    return new PgInterval(table, this.config);
  }
};
_a67 = entityKind;
__publicField(PgIntervalBuilder, _a67, "PgIntervalBuilder");
var _a68;
var PgInterval = class extends PgColumn {
  fields = this.config.intervalConfig.fields;
  precision = this.config.intervalConfig.precision;
  getSQLType() {
    const fields = this.fields ? ` ${this.fields}` : "";
    const precision = this.precision ? `(${this.precision})` : "";
    return `interval${fields}${precision}`;
  }
};
_a68 = entityKind;
__publicField(PgInterval, _a68, "PgInterval");
function interval(a2, b = {}) {
  const { name, config } = getColumnNameAndConfig(a2, b);
  return new PgIntervalBuilder(name, config);
}

// node_modules/drizzle-orm/pg-core/columns/json.js
var _a69;
var PgJsonBuilder = class extends PgColumnBuilder {
  constructor(name) {
    super(name, "json", "PgJson");
  }
  /** @internal */
  build(table) {
    return new PgJson(table, this.config);
  }
};
_a69 = entityKind;
__publicField(PgJsonBuilder, _a69, "PgJsonBuilder");
var _a70;
var PgJson = class extends PgColumn {
  constructor(table, config) {
    super(table, config);
  }
  getSQLType() {
    return "json";
  }
  mapToDriverValue(value) {
    return JSON.stringify(value);
  }
  mapFromDriverValue(value) {
    if (typeof value === "string") {
      try {
        return JSON.parse(value);
      } catch {
        return value;
      }
    }
    return value;
  }
};
_a70 = entityKind;
__publicField(PgJson, _a70, "PgJson");
function json(name) {
  return new PgJsonBuilder(name ?? "");
}

// node_modules/drizzle-orm/pg-core/columns/jsonb.js
var _a71;
var PgJsonbBuilder = class extends PgColumnBuilder {
  constructor(name) {
    super(name, "json", "PgJsonb");
  }
  /** @internal */
  build(table) {
    return new PgJsonb(table, this.config);
  }
};
_a71 = entityKind;
__publicField(PgJsonbBuilder, _a71, "PgJsonbBuilder");
var _a72;
var PgJsonb = class extends PgColumn {
  constructor(table, config) {
    super(table, config);
  }
  getSQLType() {
    return "jsonb";
  }
  mapToDriverValue(value) {
    return JSON.stringify(value);
  }
  mapFromDriverValue(value) {
    if (typeof value === "string") {
      try {
        return JSON.parse(value);
      } catch {
        return value;
      }
    }
    return value;
  }
};
_a72 = entityKind;
__publicField(PgJsonb, _a72, "PgJsonb");
function jsonb(name) {
  return new PgJsonbBuilder(name ?? "");
}

// node_modules/drizzle-orm/pg-core/columns/line.js
var _a73;
var PgLineBuilder = class extends PgColumnBuilder {
  constructor(name) {
    super(name, "array", "PgLine");
  }
  /** @internal */
  build(table) {
    return new PgLineTuple(table, this.config);
  }
};
_a73 = entityKind;
__publicField(PgLineBuilder, _a73, "PgLineBuilder");
var _a74;
var PgLineTuple = class extends PgColumn {
  getSQLType() {
    return "line";
  }
  mapFromDriverValue(value) {
    const [a2, b, c] = value.slice(1, -1).split(",");
    return [Number.parseFloat(a2), Number.parseFloat(b), Number.parseFloat(c)];
  }
  mapToDriverValue(value) {
    return `{${value[0]},${value[1]},${value[2]}}`;
  }
};
_a74 = entityKind;
__publicField(PgLineTuple, _a74, "PgLine");
var _a75;
var PgLineABCBuilder = class extends PgColumnBuilder {
  constructor(name) {
    super(name, "json", "PgLineABC");
  }
  /** @internal */
  build(table) {
    return new PgLineABC(table, this.config);
  }
};
_a75 = entityKind;
__publicField(PgLineABCBuilder, _a75, "PgLineABCBuilder");
var _a76;
var PgLineABC = class extends PgColumn {
  getSQLType() {
    return "line";
  }
  mapFromDriverValue(value) {
    const [a2, b, c] = value.slice(1, -1).split(",");
    return {
      a: Number.parseFloat(a2),
      b: Number.parseFloat(b),
      c: Number.parseFloat(c),
    };
  }
  mapToDriverValue(value) {
    return `{${value.a},${value.b},${value.c}}`;
  }
};
_a76 = entityKind;
__publicField(PgLineABC, _a76, "PgLineABC");
function line(a2, b) {
  const { name, config } = getColumnNameAndConfig(a2, b);
  if (!config?.mode || config.mode === "tuple") {
    return new PgLineBuilder(name);
  }
  return new PgLineABCBuilder(name);
}

// node_modules/drizzle-orm/pg-core/columns/macaddr.js
var _a77;
var PgMacaddrBuilder = class extends PgColumnBuilder {
  constructor(name) {
    super(name, "string", "PgMacaddr");
  }
  /** @internal */
  build(table) {
    return new PgMacaddr(table, this.config);
  }
};
_a77 = entityKind;
__publicField(PgMacaddrBuilder, _a77, "PgMacaddrBuilder");
var _a78;
var PgMacaddr = class extends PgColumn {
  getSQLType() {
    return "macaddr";
  }
};
_a78 = entityKind;
__publicField(PgMacaddr, _a78, "PgMacaddr");
function macaddr(name) {
  return new PgMacaddrBuilder(name ?? "");
}

// node_modules/drizzle-orm/pg-core/columns/macaddr8.js
var _a79;
var PgMacaddr8Builder = class extends PgColumnBuilder {
  constructor(name) {
    super(name, "string", "PgMacaddr8");
  }
  /** @internal */
  build(table) {
    return new PgMacaddr8(table, this.config);
  }
};
_a79 = entityKind;
__publicField(PgMacaddr8Builder, _a79, "PgMacaddr8Builder");
var _a80;
var PgMacaddr8 = class extends PgColumn {
  getSQLType() {
    return "macaddr8";
  }
};
_a80 = entityKind;
__publicField(PgMacaddr8, _a80, "PgMacaddr8");
function macaddr8(name) {
  return new PgMacaddr8Builder(name ?? "");
}

// node_modules/drizzle-orm/pg-core/columns/numeric.js
var _a81;
var PgNumericBuilder = class extends PgColumnBuilder {
  constructor(name, precision, scale) {
    super(name, "string", "PgNumeric");
    this.config.precision = precision;
    this.config.scale = scale;
  }
  /** @internal */
  build(table) {
    return new PgNumeric(table, this.config);
  }
};
_a81 = entityKind;
__publicField(PgNumericBuilder, _a81, "PgNumericBuilder");
var _a82;
var PgNumeric = class extends PgColumn {
  precision;
  scale;
  constructor(table, config) {
    super(table, config);
    this.precision = config.precision;
    this.scale = config.scale;
  }
  getSQLType() {
    if (this.precision !== void 0 && this.scale !== void 0) {
      return `numeric(${this.precision}, ${this.scale})`;
    } else if (this.precision === void 0) {
      return "numeric";
    } else {
      return `numeric(${this.precision})`;
    }
  }
};
_a82 = entityKind;
__publicField(PgNumeric, _a82, "PgNumeric");
function numeric(a2, b) {
  const { name, config } = getColumnNameAndConfig(a2, b);
  return new PgNumericBuilder(name, config?.precision, config?.scale);
}

// node_modules/drizzle-orm/pg-core/columns/point.js
var _a83;
var PgPointTupleBuilder = class extends PgColumnBuilder {
  constructor(name) {
    super(name, "array", "PgPointTuple");
  }
  /** @internal */
  build(table) {
    return new PgPointTuple(table, this.config);
  }
};
_a83 = entityKind;
__publicField(PgPointTupleBuilder, _a83, "PgPointTupleBuilder");
var _a84;
var PgPointTuple = class extends PgColumn {
  getSQLType() {
    return "point";
  }
  mapFromDriverValue(value) {
    if (typeof value === "string") {
      const [x2, y2] = value.slice(1, -1).split(",");
      return [Number.parseFloat(x2), Number.parseFloat(y2)];
    }
    return [value.x, value.y];
  }
  mapToDriverValue(value) {
    return `(${value[0]},${value[1]})`;
  }
};
_a84 = entityKind;
__publicField(PgPointTuple, _a84, "PgPointTuple");
var _a85;
var PgPointObjectBuilder = class extends PgColumnBuilder {
  constructor(name) {
    super(name, "json", "PgPointObject");
  }
  /** @internal */
  build(table) {
    return new PgPointObject(table, this.config);
  }
};
_a85 = entityKind;
__publicField(PgPointObjectBuilder, _a85, "PgPointObjectBuilder");
var _a86;
var PgPointObject = class extends PgColumn {
  getSQLType() {
    return "point";
  }
  mapFromDriverValue(value) {
    if (typeof value === "string") {
      const [x2, y2] = value.slice(1, -1).split(",");
      return { x: Number.parseFloat(x2), y: Number.parseFloat(y2) };
    }
    return value;
  }
  mapToDriverValue(value) {
    return `(${value.x},${value.y})`;
  }
};
_a86 = entityKind;
__publicField(PgPointObject, _a86, "PgPointObject");
function point(a2, b) {
  const { name, config } = getColumnNameAndConfig(a2, b);
  if (!config?.mode || config.mode === "tuple") {
    return new PgPointTupleBuilder(name);
  }
  return new PgPointObjectBuilder(name);
}

// node_modules/drizzle-orm/pg-core/columns/postgis_extension/utils.js
function hexToBytes(hex) {
  const bytes = [];
  for (let c = 0; c < hex.length; c += 2) {
    bytes.push(Number.parseInt(hex.slice(c, c + 2), 16));
  }
  return new Uint8Array(bytes);
}
function bytesToFloat64(bytes, offset) {
  const buffer = new ArrayBuffer(8);
  const view = new DataView(buffer);
  for (let i = 0; i < 8; i++) {
    view.setUint8(i, bytes[offset + i]);
  }
  return view.getFloat64(0, true);
}
function parseEWKB(hex) {
  const bytes = hexToBytes(hex);
  let offset = 0;
  const byteOrder = bytes[offset];
  offset += 1;
  const view = new DataView(bytes.buffer);
  const geomType = view.getUint32(offset, byteOrder === 1);
  offset += 4;
  let _srid;
  if (geomType & 536870912) {
    _srid = view.getUint32(offset, byteOrder === 1);
    offset += 4;
  }
  if ((geomType & 65535) === 1) {
    const x2 = bytesToFloat64(bytes, offset);
    offset += 8;
    const y2 = bytesToFloat64(bytes, offset);
    offset += 8;
    return [x2, y2];
  }
  throw new Error("Unsupported geometry type");
}

// node_modules/drizzle-orm/pg-core/columns/postgis_extension/geometry.js
var _a87;
var PgGeometryBuilder = class extends PgColumnBuilder {
  constructor(name) {
    super(name, "array", "PgGeometry");
  }
  /** @internal */
  build(table) {
    return new PgGeometry(table, this.config);
  }
};
_a87 = entityKind;
__publicField(PgGeometryBuilder, _a87, "PgGeometryBuilder");
var _a88;
var PgGeometry = class extends PgColumn {
  getSQLType() {
    return "geometry(point)";
  }
  mapFromDriverValue(value) {
    return parseEWKB(value);
  }
  mapToDriverValue(value) {
    return `point(${value[0]} ${value[1]})`;
  }
};
_a88 = entityKind;
__publicField(PgGeometry, _a88, "PgGeometry");
var _a89;
var PgGeometryObjectBuilder = class extends PgColumnBuilder {
  constructor(name) {
    super(name, "json", "PgGeometryObject");
  }
  /** @internal */
  build(table) {
    return new PgGeometryObject(table, this.config);
  }
};
_a89 = entityKind;
__publicField(PgGeometryObjectBuilder, _a89, "PgGeometryObjectBuilder");
var _a90;
var PgGeometryObject = class extends PgColumn {
  getSQLType() {
    return "geometry(point)";
  }
  mapFromDriverValue(value) {
    const parsed = parseEWKB(value);
    return { x: parsed[0], y: parsed[1] };
  }
  mapToDriverValue(value) {
    return `point(${value.x} ${value.y})`;
  }
};
_a90 = entityKind;
__publicField(PgGeometryObject, _a90, "PgGeometryObject");
function geometry(a2, b) {
  const { name, config } = getColumnNameAndConfig(a2, b);
  if (!config?.mode || config.mode === "tuple") {
    return new PgGeometryBuilder(name);
  }
  return new PgGeometryObjectBuilder(name);
}

// node_modules/drizzle-orm/pg-core/columns/real.js
var _a91;
var PgRealBuilder = class extends PgColumnBuilder {
  constructor(name, length) {
    super(name, "number", "PgReal");
    this.config.length = length;
  }
  /** @internal */
  build(table) {
    return new PgReal(table, this.config);
  }
};
_a91 = entityKind;
__publicField(PgRealBuilder, _a91, "PgRealBuilder");
var _a92;
var PgReal = class extends PgColumn {
  constructor(table, config) {
    super(table, config);
  }
  getSQLType() {
    return "real";
  }
  mapFromDriverValue = (value) => {
    if (typeof value === "string") {
      return Number.parseFloat(value);
    }
    return value;
  };
};
_a92 = entityKind;
__publicField(PgReal, _a92, "PgReal");
function real(name) {
  return new PgRealBuilder(name ?? "");
}

// node_modules/drizzle-orm/pg-core/columns/serial.js
var _a93;
var PgSerialBuilder = class extends PgColumnBuilder {
  constructor(name) {
    super(name, "number", "PgSerial");
    this.config.hasDefault = true;
    this.config.notNull = true;
  }
  /** @internal */
  build(table) {
    return new PgSerial(table, this.config);
  }
};
_a93 = entityKind;
__publicField(PgSerialBuilder, _a93, "PgSerialBuilder");
var _a94;
var PgSerial = class extends PgColumn {
  getSQLType() {
    return "serial";
  }
};
_a94 = entityKind;
__publicField(PgSerial, _a94, "PgSerial");
function serial(name) {
  return new PgSerialBuilder(name ?? "");
}

// node_modules/drizzle-orm/pg-core/columns/smallint.js
var _a95;
var PgSmallIntBuilder = class extends PgIntColumnBaseBuilder {
  constructor(name) {
    super(name, "number", "PgSmallInt");
  }
  /** @internal */
  build(table) {
    return new PgSmallInt(table, this.config);
  }
};
_a95 = entityKind;
__publicField(PgSmallIntBuilder, _a95, "PgSmallIntBuilder");
var _a96;
var PgSmallInt = class extends PgColumn {
  getSQLType() {
    return "smallint";
  }
  mapFromDriverValue = (value) => {
    if (typeof value === "string") {
      return Number(value);
    }
    return value;
  };
};
_a96 = entityKind;
__publicField(PgSmallInt, _a96, "PgSmallInt");
function smallint(name) {
  return new PgSmallIntBuilder(name ?? "");
}

// node_modules/drizzle-orm/pg-core/columns/smallserial.js
var _a97;
var PgSmallSerialBuilder = class extends PgColumnBuilder {
  constructor(name) {
    super(name, "number", "PgSmallSerial");
    this.config.hasDefault = true;
    this.config.notNull = true;
  }
  /** @internal */
  build(table) {
    return new PgSmallSerial(table, this.config);
  }
};
_a97 = entityKind;
__publicField(PgSmallSerialBuilder, _a97, "PgSmallSerialBuilder");
var _a98;
var PgSmallSerial = class extends PgColumn {
  getSQLType() {
    return "smallserial";
  }
};
_a98 = entityKind;
__publicField(PgSmallSerial, _a98, "PgSmallSerial");
function smallserial(name) {
  return new PgSmallSerialBuilder(name ?? "");
}

// node_modules/drizzle-orm/pg-core/columns/text.js
var _a99;
var PgTextBuilder = class extends PgColumnBuilder {
  constructor(name, config) {
    super(name, "string", "PgText");
    this.config.enumValues = config.enum;
  }
  /** @internal */
  build(table) {
    return new PgText(table, this.config);
  }
};
_a99 = entityKind;
__publicField(PgTextBuilder, _a99, "PgTextBuilder");
var _a100;
var PgText = class extends PgColumn {
  enumValues = this.config.enumValues;
  getSQLType() {
    return "text";
  }
};
_a100 = entityKind;
__publicField(PgText, _a100, "PgText");
function text(a2, b = {}) {
  const { name, config } = getColumnNameAndConfig(a2, b);
  return new PgTextBuilder(name, config);
}

// node_modules/drizzle-orm/pg-core/columns/time.js
var _a101;
var PgTimeBuilder = class extends PgDateColumnBaseBuilder {
  constructor(name, withTimezone, precision) {
    super(name, "string", "PgTime");
    this.withTimezone = withTimezone;
    this.precision = precision;
    this.config.withTimezone = withTimezone;
    this.config.precision = precision;
  }
  /** @internal */
  build(table) {
    return new PgTime(table, this.config);
  }
};
_a101 = entityKind;
__publicField(PgTimeBuilder, _a101, "PgTimeBuilder");
var _a102;
var PgTime = class extends PgColumn {
  withTimezone;
  precision;
  constructor(table, config) {
    super(table, config);
    this.withTimezone = config.withTimezone;
    this.precision = config.precision;
  }
  getSQLType() {
    const precision = this.precision === void 0 ? "" : `(${this.precision})`;
    return `time${precision}${this.withTimezone ? " with time zone" : ""}`;
  }
};
_a102 = entityKind;
__publicField(PgTime, _a102, "PgTime");
function time(a2, b = {}) {
  const { name, config } = getColumnNameAndConfig(a2, b);
  return new PgTimeBuilder(
    name,
    config.withTimezone ?? false,
    config.precision,
  );
}

// node_modules/drizzle-orm/pg-core/columns/timestamp.js
var _a103;
var PgTimestampBuilder = class extends PgDateColumnBaseBuilder {
  constructor(name, withTimezone, precision) {
    super(name, "date", "PgTimestamp");
    this.config.withTimezone = withTimezone;
    this.config.precision = precision;
  }
  /** @internal */
  build(table) {
    return new PgTimestamp(table, this.config);
  }
};
_a103 = entityKind;
__publicField(PgTimestampBuilder, _a103, "PgTimestampBuilder");
var _a104;
var PgTimestamp = class extends PgColumn {
  withTimezone;
  precision;
  constructor(table, config) {
    super(table, config);
    this.withTimezone = config.withTimezone;
    this.precision = config.precision;
  }
  getSQLType() {
    const precision = this.precision === void 0 ? "" : ` (${this.precision})`;
    return `timestamp${precision}${this.withTimezone ? " with time zone" : ""}`;
  }
  mapFromDriverValue = (value) => {
    return new Date(this.withTimezone ? value : value + "+0000");
  };
  mapToDriverValue = (value) => {
    return value.toISOString();
  };
};
_a104 = entityKind;
__publicField(PgTimestamp, _a104, "PgTimestamp");
var _a105;
var PgTimestampStringBuilder = class extends PgDateColumnBaseBuilder {
  constructor(name, withTimezone, precision) {
    super(name, "string", "PgTimestampString");
    this.config.withTimezone = withTimezone;
    this.config.precision = precision;
  }
  /** @internal */
  build(table) {
    return new PgTimestampString(table, this.config);
  }
};
_a105 = entityKind;
__publicField(PgTimestampStringBuilder, _a105, "PgTimestampStringBuilder");
var _a106;
var PgTimestampString = class extends PgColumn {
  withTimezone;
  precision;
  constructor(table, config) {
    super(table, config);
    this.withTimezone = config.withTimezone;
    this.precision = config.precision;
  }
  getSQLType() {
    const precision = this.precision === void 0 ? "" : `(${this.precision})`;
    return `timestamp${precision}${this.withTimezone ? " with time zone" : ""}`;
  }
};
_a106 = entityKind;
__publicField(PgTimestampString, _a106, "PgTimestampString");
function timestamp(a2, b = {}) {
  const { name, config } = getColumnNameAndConfig(a2, b);
  if (config?.mode === "string") {
    return new PgTimestampStringBuilder(
      name,
      config.withTimezone ?? false,
      config.precision,
    );
  }
  return new PgTimestampBuilder(
    name,
    config?.withTimezone ?? false,
    config?.precision,
  );
}

// node_modules/drizzle-orm/pg-core/columns/uuid.js
var _a107;
var PgUUIDBuilder = class extends PgColumnBuilder {
  constructor(name) {
    super(name, "string", "PgUUID");
  }
  /**
   * Adds `default gen_random_uuid()` to the column definition.
   */
  defaultRandom() {
    return this.default(sql`gen_random_uuid()`);
  }
  /** @internal */
  build(table) {
    return new PgUUID(table, this.config);
  }
};
_a107 = entityKind;
__publicField(PgUUIDBuilder, _a107, "PgUUIDBuilder");
var _a108;
var PgUUID = class extends PgColumn {
  getSQLType() {
    return "uuid";
  }
};
_a108 = entityKind;
__publicField(PgUUID, _a108, "PgUUID");
function uuid(name) {
  return new PgUUIDBuilder(name ?? "");
}

// node_modules/drizzle-orm/pg-core/columns/varchar.js
var _a109;
var PgVarcharBuilder = class extends PgColumnBuilder {
  constructor(name, config) {
    super(name, "string", "PgVarchar");
    this.config.length = config.length;
    this.config.enumValues = config.enum;
  }
  /** @internal */
  build(table) {
    return new PgVarchar(table, this.config);
  }
};
_a109 = entityKind;
__publicField(PgVarcharBuilder, _a109, "PgVarcharBuilder");
var _a110;
var PgVarchar = class extends PgColumn {
  length = this.config.length;
  enumValues = this.config.enumValues;
  getSQLType() {
    return this.length === void 0 ? `varchar` : `varchar(${this.length})`;
  }
};
_a110 = entityKind;
__publicField(PgVarchar, _a110, "PgVarchar");
function varchar(a2, b = {}) {
  const { name, config } = getColumnNameAndConfig(a2, b);
  return new PgVarcharBuilder(name, config);
}

// node_modules/drizzle-orm/pg-core/columns/vector_extension/bit.js
var _a111;
var PgBinaryVectorBuilder = class extends PgColumnBuilder {
  constructor(name, config) {
    super(name, "string", "PgBinaryVector");
    this.config.dimensions = config.dimensions;
  }
  /** @internal */
  build(table) {
    return new PgBinaryVector(table, this.config);
  }
};
_a111 = entityKind;
__publicField(PgBinaryVectorBuilder, _a111, "PgBinaryVectorBuilder");
var _a112;
var PgBinaryVector = class extends PgColumn {
  dimensions = this.config.dimensions;
  getSQLType() {
    return `bit(${this.dimensions})`;
  }
};
_a112 = entityKind;
__publicField(PgBinaryVector, _a112, "PgBinaryVector");
function bit(a2, b) {
  const { name, config } = getColumnNameAndConfig(a2, b);
  return new PgBinaryVectorBuilder(name, config);
}

// node_modules/drizzle-orm/pg-core/columns/vector_extension/halfvec.js
var _a113;
var PgHalfVectorBuilder = class extends PgColumnBuilder {
  constructor(name, config) {
    super(name, "array", "PgHalfVector");
    this.config.dimensions = config.dimensions;
  }
  /** @internal */
  build(table) {
    return new PgHalfVector(table, this.config);
  }
};
_a113 = entityKind;
__publicField(PgHalfVectorBuilder, _a113, "PgHalfVectorBuilder");
var _a114;
var PgHalfVector = class extends PgColumn {
  dimensions = this.config.dimensions;
  getSQLType() {
    return `halfvec(${this.dimensions})`;
  }
  mapToDriverValue(value) {
    return JSON.stringify(value);
  }
  mapFromDriverValue(value) {
    return value
      .slice(1, -1)
      .split(",")
      .map((v2) => Number.parseFloat(v2));
  }
};
_a114 = entityKind;
__publicField(PgHalfVector, _a114, "PgHalfVector");
function halfvec(a2, b) {
  const { name, config } = getColumnNameAndConfig(a2, b);
  return new PgHalfVectorBuilder(name, config);
}

// node_modules/drizzle-orm/pg-core/columns/vector_extension/sparsevec.js
var _a115;
var PgSparseVectorBuilder = class extends PgColumnBuilder {
  constructor(name, config) {
    super(name, "string", "PgSparseVector");
    this.config.dimensions = config.dimensions;
  }
  /** @internal */
  build(table) {
    return new PgSparseVector(table, this.config);
  }
};
_a115 = entityKind;
__publicField(PgSparseVectorBuilder, _a115, "PgSparseVectorBuilder");
var _a116;
var PgSparseVector = class extends PgColumn {
  dimensions = this.config.dimensions;
  getSQLType() {
    return `sparsevec(${this.dimensions})`;
  }
};
_a116 = entityKind;
__publicField(PgSparseVector, _a116, "PgSparseVector");
function sparsevec(a2, b) {
  const { name, config } = getColumnNameAndConfig(a2, b);
  return new PgSparseVectorBuilder(name, config);
}

// node_modules/drizzle-orm/pg-core/columns/vector_extension/vector.js
var _a117;
var PgVectorBuilder = class extends PgColumnBuilder {
  constructor(name, config) {
    super(name, "array", "PgVector");
    this.config.dimensions = config.dimensions;
  }
  /** @internal */
  build(table) {
    return new PgVector(table, this.config);
  }
};
_a117 = entityKind;
__publicField(PgVectorBuilder, _a117, "PgVectorBuilder");
var _a118;
var PgVector = class extends PgColumn {
  dimensions = this.config.dimensions;
  getSQLType() {
    return `vector(${this.dimensions})`;
  }
  mapToDriverValue(value) {
    return JSON.stringify(value);
  }
  mapFromDriverValue(value) {
    return value
      .slice(1, -1)
      .split(",")
      .map((v2) => Number.parseFloat(v2));
  }
};
_a118 = entityKind;
__publicField(PgVector, _a118, "PgVector");
function vector(a2, b) {
  const { name, config } = getColumnNameAndConfig(a2, b);
  return new PgVectorBuilder(name, config);
}

// node_modules/drizzle-orm/pg-core/columns/all.js
function getPgColumnBuilders() {
  return {
    bigint,
    bigserial,
    boolean,
    char,
    cidr,
    customType,
    date,
    doublePrecision,
    inet,
    integer,
    interval,
    json,
    jsonb,
    line,
    macaddr,
    macaddr8,
    numeric,
    point,
    geometry,
    real,
    serial,
    smallint,
    smallserial,
    text,
    time,
    timestamp,
    uuid,
    varchar,
    bit,
    halfvec,
    sparsevec,
    vector,
  };
}

// node_modules/drizzle-orm/pg-core/table.js
var InlineForeignKeys = Symbol.for("drizzle:PgInlineForeignKeys");
var EnableRLS = Symbol.for("drizzle:EnableRLS");
var _a119;
var PgTable = class extends Table {
  /**@internal */
  [((_a119 = entityKind), InlineForeignKeys)] = [];
  /** @internal */
  [EnableRLS] = false;
  /** @internal */
  [Table.Symbol.ExtraConfigBuilder] = void 0;
};
__publicField(PgTable, _a119, "PgTable");
/** @internal */
__publicField(
  PgTable,
  "Symbol",
  Object.assign({}, Table.Symbol, {
    InlineForeignKeys,
    EnableRLS,
  }),
);
function pgTableWithSchema(
  name,
  columns,
  extraConfig,
  schema,
  baseName = name,
) {
  const rawTable = new PgTable(name, schema, baseName);
  const parsedColumns =
    typeof columns === "function" ? columns(getPgColumnBuilders()) : columns;
  const builtColumns = Object.fromEntries(
    Object.entries(parsedColumns).map(([name2, colBuilderBase]) => {
      const colBuilder = colBuilderBase;
      colBuilder.setName(name2);
      const column = colBuilder.build(rawTable);
      rawTable[InlineForeignKeys].push(
        ...colBuilder.buildForeignKeys(column, rawTable),
      );
      return [name2, column];
    }),
  );
  const builtColumnsForExtraConfig = Object.fromEntries(
    Object.entries(parsedColumns).map(([name2, colBuilderBase]) => {
      const colBuilder = colBuilderBase;
      colBuilder.setName(name2);
      const column = colBuilder.buildExtraConfigColumn(rawTable);
      return [name2, column];
    }),
  );
  const table = Object.assign(rawTable, builtColumns);
  table[Table.Symbol.Columns] = builtColumns;
  table[Table.Symbol.ExtraConfigColumns] = builtColumnsForExtraConfig;
  if (extraConfig) {
    table[PgTable.Symbol.ExtraConfigBuilder] = extraConfig;
  }
  return Object.assign(table, {
    enableRLS: () => {
      table[PgTable.Symbol.EnableRLS] = true;
      return table;
    },
  });
}
var pgTable = (name, columns, extraConfig) => {
  return pgTableWithSchema(name, columns, extraConfig, void 0);
};

// node_modules/drizzle-orm/pg-core/primary-keys.js
var _a120;
var PrimaryKeyBuilder = class {
  /** @internal */
  columns;
  /** @internal */
  name;
  constructor(columns, name) {
    this.columns = columns;
    this.name = name;
  }
  /** @internal */
  build(table) {
    return new PrimaryKey(table, this.columns, this.name);
  }
};
_a120 = entityKind;
__publicField(PrimaryKeyBuilder, _a120, "PgPrimaryKeyBuilder");
var _a121;
var PrimaryKey = class {
  constructor(table, columns, name) {
    this.table = table;
    this.columns = columns;
    this.name = name;
  }
  columns;
  name;
  getName() {
    return (
      this.name ??
      `${this.table[PgTable.Symbol.Name]}_${this.columns.map((column) => column.name).join("_")}_pk`
    );
  }
};
_a121 = entityKind;
__publicField(PrimaryKey, _a121, "PgPrimaryKey");

// node_modules/drizzle-orm/sql/expressions/conditions.js
function bindIfParam(value, column) {
  if (
    isDriverValueEncoder(column) &&
    !isSQLWrapper(value) &&
    !is(value, Param) &&
    !is(value, Placeholder) &&
    !is(value, Column) &&
    !is(value, Table) &&
    !is(value, View)
  ) {
    return new Param(value, column);
  }
  return value;
}
var eq = (left, right) => {
  return sql`${left} = ${bindIfParam(right, left)}`;
};
var ne = (left, right) => {
  return sql`${left} <> ${bindIfParam(right, left)}`;
};
function and(...unfilteredConditions) {
  const conditions = unfilteredConditions.filter((c) => c !== void 0);
  if (conditions.length === 0) {
    return void 0;
  }
  if (conditions.length === 1) {
    return new SQL(conditions);
  }
  return new SQL([
    new StringChunk("("),
    sql.join(conditions, new StringChunk(" and ")),
    new StringChunk(")"),
  ]);
}
function or2(...unfilteredConditions) {
  const conditions = unfilteredConditions.filter((c) => c !== void 0);
  if (conditions.length === 0) {
    return void 0;
  }
  if (conditions.length === 1) {
    return new SQL(conditions);
  }
  return new SQL([
    new StringChunk("("),
    sql.join(conditions, new StringChunk(" or ")),
    new StringChunk(")"),
  ]);
}
function not(condition) {
  return sql`not ${condition}`;
}
var gt = (left, right) => {
  return sql`${left} > ${bindIfParam(right, left)}`;
};
var gte = (left, right) => {
  return sql`${left} >= ${bindIfParam(right, left)}`;
};
var lt = (left, right) => {
  return sql`${left} < ${bindIfParam(right, left)}`;
};
var lte = (left, right) => {
  return sql`${left} <= ${bindIfParam(right, left)}`;
};
function inArray(column, values) {
  if (Array.isArray(values)) {
    if (values.length === 0) {
      return sql`false`;
    }
    return sql`${column} in ${values.map((v2) => bindIfParam(v2, column))}`;
  }
  return sql`${column} in ${bindIfParam(values, column)}`;
}
function notInArray(column, values) {
  if (Array.isArray(values)) {
    if (values.length === 0) {
      return sql`true`;
    }
    return sql`${column} not in ${values.map((v2) => bindIfParam(v2, column))}`;
  }
  return sql`${column} not in ${bindIfParam(values, column)}`;
}
function isNull(value) {
  return sql`${value} is null`;
}
function isNotNull(value) {
  return sql`${value} is not null`;
}
function exists(subquery) {
  return sql`exists ${subquery}`;
}
function notExists(subquery) {
  return sql`not exists ${subquery}`;
}
function between(column, min, max) {
  return sql`${column} between ${bindIfParam(min, column)} and ${bindIfParam(
    max,
    column,
  )}`;
}
function notBetween(column, min, max) {
  return sql`${column} not between ${bindIfParam(
    min,
    column,
  )} and ${bindIfParam(max, column)}`;
}
function like(column, value) {
  return sql`${column} like ${value}`;
}
function notLike(column, value) {
  return sql`${column} not like ${value}`;
}
function ilike(column, value) {
  return sql`${column} ilike ${value}`;
}
function notIlike(column, value) {
  return sql`${column} not ilike ${value}`;
}

// node_modules/drizzle-orm/sql/expressions/select.js
function asc(column) {
  return sql`${column} asc`;
}
function desc(column) {
  return sql`${column} desc`;
}

// node_modules/drizzle-orm/relations.js
var _a122;
var Relation = class {
  constructor(sourceTable, referencedTable, relationName) {
    this.sourceTable = sourceTable;
    this.referencedTable = referencedTable;
    this.relationName = relationName;
    this.referencedTableName = referencedTable[Table.Symbol.Name];
  }
  referencedTableName;
  fieldName;
};
_a122 = entityKind;
__publicField(Relation, _a122, "Relation");
var _a123;
var Relations = class {
  constructor(table, config) {
    this.table = table;
    this.config = config;
  }
};
_a123 = entityKind;
__publicField(Relations, _a123, "Relations");
var _a124;
var _One = class extends Relation {
  constructor(sourceTable, referencedTable, config, isNullable) {
    super(sourceTable, referencedTable, config?.relationName);
    this.config = config;
    this.isNullable = isNullable;
  }
  withFieldName(fieldName) {
    const relation = new _One(
      this.sourceTable,
      this.referencedTable,
      this.config,
      this.isNullable,
    );
    relation.fieldName = fieldName;
    return relation;
  }
};
var One = _One;
_a124 = entityKind;
__publicField(One, _a124, "One");
var _a125;
var _Many = class extends Relation {
  constructor(sourceTable, referencedTable, config) {
    super(sourceTable, referencedTable, config?.relationName);
    this.config = config;
  }
  withFieldName(fieldName) {
    const relation = new _Many(
      this.sourceTable,
      this.referencedTable,
      this.config,
    );
    relation.fieldName = fieldName;
    return relation;
  }
};
var Many = _Many;
_a125 = entityKind;
__publicField(Many, _a125, "Many");
function getOperators() {
  return {
    and,
    between,
    eq,
    exists,
    gt,
    gte,
    ilike,
    inArray,
    isNull,
    isNotNull,
    like,
    lt,
    lte,
    ne,
    not,
    notBetween,
    notExists,
    notLike,
    notIlike,
    notInArray,
    or: or2,
    sql,
  };
}
function getOrderByOperators() {
  return {
    sql,
    asc,
    desc,
  };
}
function extractTablesRelationalConfig(schema, configHelpers) {
  if (
    Object.keys(schema).length === 1 &&
    "default" in schema &&
    !is(schema["default"], Table)
  ) {
    schema = schema["default"];
  }
  const tableNamesMap = {};
  const relationsBuffer = {};
  const tablesConfig = {};
  for (const [key, value] of Object.entries(schema)) {
    if (is(value, Table)) {
      const dbName = getTableUniqueName(value);
      const bufferedRelations = relationsBuffer[dbName];
      tableNamesMap[dbName] = key;
      tablesConfig[key] = {
        tsName: key,
        dbName: value[Table.Symbol.Name],
        schema: value[Table.Symbol.Schema],
        columns: value[Table.Symbol.Columns],
        relations: bufferedRelations?.relations ?? {},
        primaryKey: bufferedRelations?.primaryKey ?? [],
      };
      for (const column of Object.values(value[Table.Symbol.Columns])) {
        if (column.primary) {
          tablesConfig[key].primaryKey.push(column);
        }
      }
      const extraConfig = value[Table.Symbol.ExtraConfigBuilder]?.(
        value[Table.Symbol.ExtraConfigColumns],
      );
      if (extraConfig) {
        for (const configEntry of Object.values(extraConfig)) {
          if (is(configEntry, PrimaryKeyBuilder)) {
            tablesConfig[key].primaryKey.push(...configEntry.columns);
          }
        }
      }
    } else if (is(value, Relations)) {
      const dbName = getTableUniqueName(value.table);
      const tableName = tableNamesMap[dbName];
      const relations2 = value.config(configHelpers(value.table));
      let primaryKey2;
      for (const [relationName, relation] of Object.entries(relations2)) {
        if (tableName) {
          const tableConfig = tablesConfig[tableName];
          tableConfig.relations[relationName] = relation;
          if (primaryKey2) {
            tableConfig.primaryKey.push(...primaryKey2);
          }
        } else {
          if (!(dbName in relationsBuffer)) {
            relationsBuffer[dbName] = {
              relations: {},
              primaryKey: primaryKey2,
            };
          }
          relationsBuffer[dbName].relations[relationName] = relation;
        }
      }
    }
  }
  return { tables: tablesConfig, tableNamesMap };
}
function createOne(sourceTable) {
  return function one(table, config) {
    return new One(
      sourceTable,
      table,
      config,
      config?.fields.reduce((res, f) => res && f.notNull, true) ?? false,
    );
  };
}
function createMany(sourceTable) {
  return function many(referencedTable, config) {
    return new Many(sourceTable, referencedTable, config);
  };
}
function normalizeRelation(schema, tableNamesMap, relation) {
  if (is(relation, One) && relation.config) {
    return {
      fields: relation.config.fields,
      references: relation.config.references,
    };
  }
  const referencedTableTsName =
    tableNamesMap[getTableUniqueName(relation.referencedTable)];
  if (!referencedTableTsName) {
    throw new Error(
      `Table "${relation.referencedTable[Table.Symbol.Name]}" not found in schema`,
    );
  }
  const referencedTableConfig = schema[referencedTableTsName];
  if (!referencedTableConfig) {
    throw new Error(`Table "${referencedTableTsName}" not found in schema`);
  }
  const sourceTable = relation.sourceTable;
  const sourceTableTsName = tableNamesMap[getTableUniqueName(sourceTable)];
  if (!sourceTableTsName) {
    throw new Error(
      `Table "${sourceTable[Table.Symbol.Name]}" not found in schema`,
    );
  }
  const reverseRelations = [];
  for (const referencedTableRelation of Object.values(
    referencedTableConfig.relations,
  )) {
    if (
      (relation.relationName &&
        relation !== referencedTableRelation &&
        referencedTableRelation.relationName === relation.relationName) ||
      (!relation.relationName &&
        referencedTableRelation.referencedTable === relation.sourceTable)
    ) {
      reverseRelations.push(referencedTableRelation);
    }
  }
  if (reverseRelations.length > 1) {
    throw relation.relationName
      ? new Error(
          `There are multiple relations with name "${relation.relationName}" in table "${referencedTableTsName}"`,
        )
      : new Error(
          `There are multiple relations between "${referencedTableTsName}" and "${relation.sourceTable[Table.Symbol.Name]}". Please specify relation name`,
        );
  }
  if (
    reverseRelations[0] &&
    is(reverseRelations[0], One) &&
    reverseRelations[0].config
  ) {
    return {
      fields: reverseRelations[0].config.references,
      references: reverseRelations[0].config.fields,
    };
  }
  throw new Error(
    `There is not enough information to infer relation "${sourceTableTsName}.${relation.fieldName}"`,
  );
}
function createTableRelationsHelpers(sourceTable) {
  return {
    one: createOne(sourceTable),
    many: createMany(sourceTable),
  };
}
function mapRelationalRow(
  tablesConfig,
  tableConfig,
  row,
  buildQueryResultSelection,
  mapColumnValue = (value) => value,
) {
  const result = {};
  for (const [
    selectionItemIndex,
    selectionItem,
  ] of buildQueryResultSelection.entries()) {
    if (selectionItem.isJson) {
      const relation = tableConfig.relations[selectionItem.tsKey];
      const rawSubRows = row[selectionItemIndex];
      const subRows =
        typeof rawSubRows === "string" ? JSON.parse(rawSubRows) : rawSubRows;
      result[selectionItem.tsKey] = is(relation, One)
        ? subRows &&
          mapRelationalRow(
            tablesConfig,
            tablesConfig[selectionItem.relationTableTsKey],
            subRows,
            selectionItem.selection,
            mapColumnValue,
          )
        : subRows.map((subRow) =>
            mapRelationalRow(
              tablesConfig,
              tablesConfig[selectionItem.relationTableTsKey],
              subRow,
              selectionItem.selection,
              mapColumnValue,
            ),
          );
    } else {
      const value = mapColumnValue(row[selectionItemIndex]);
      const field = selectionItem.field;
      let decoder;
      if (is(field, Column)) {
        decoder = field;
      } else if (is(field, SQL)) {
        decoder = field.decoder;
      } else {
        decoder = field.sql.decoder;
      }
      result[selectionItem.tsKey] =
        value === null ? null : decoder.mapFromDriverValue(value);
    }
  }
  return result;
}

// node_modules/drizzle-orm/pg-core/view-base.js
var _a126;
var PgViewBase = class extends View {};
_a126 = entityKind;
__publicField(PgViewBase, _a126, "PgViewBase");

// node_modules/drizzle-orm/pg-core/dialect.js
var _a127;
var PgDialect = class {
  /** @internal */
  casing;
  constructor(config) {
    this.casing = new CasingCache(config?.casing);
  }
  async migrate(migrations, session, config) {
    const migrationsTable =
      typeof config === "string"
        ? "__drizzle_migrations"
        : (config.migrationsTable ?? "__drizzle_migrations");
    const migrationsSchema =
      typeof config === "string"
        ? "drizzle"
        : (config.migrationsSchema ?? "drizzle");
    const migrationTableCreate = sql`
			CREATE TABLE IF NOT EXISTS ${sql.identifier(migrationsSchema)}.${sql.identifier(migrationsTable)} (
				id SERIAL PRIMARY KEY,
				hash text NOT NULL,
				created_at bigint
			)
		`;
    await session.execute(
      sql`CREATE SCHEMA IF NOT EXISTS ${sql.identifier(migrationsSchema)}`,
    );
    await session.execute(migrationTableCreate);
    const dbMigrations = await session.all(
      sql`select id, hash, created_at from ${sql.identifier(migrationsSchema)}.${sql.identifier(migrationsTable)} order by created_at desc limit 1`,
    );
    const lastDbMigration = dbMigrations[0];
    await session.transaction(async (tx) => {
      for await (const migration of migrations) {
        if (
          !lastDbMigration ||
          Number(lastDbMigration.created_at) < migration.folderMillis
        ) {
          for (const stmt of migration.sql) {
            await tx.execute(sql.raw(stmt));
          }
          await tx.execute(
            sql`insert into ${sql.identifier(migrationsSchema)}.${sql.identifier(migrationsTable)} ("hash", "created_at") values(${migration.hash}, ${migration.folderMillis})`,
          );
        }
      }
    });
  }
  escapeName(name) {
    return `"${name}"`;
  }
  escapeParam(num) {
    return `$${num + 1}`;
  }
  escapeString(str) {
    return `'${str.replace(/'/g, "''")}'`;
  }
  buildWithCTE(queries) {
    if (!queries?.length) return void 0;
    const withSqlChunks = [sql`with `];
    for (const [i, w2] of queries.entries()) {
      withSqlChunks.push(sql`${sql.identifier(w2._.alias)} as (${w2._.sql})`);
      if (i < queries.length - 1) {
        withSqlChunks.push(sql`, `);
      }
    }
    withSqlChunks.push(sql` `);
    return sql.join(withSqlChunks);
  }
  buildDeleteQuery({ table, where, returning, withList }) {
    const withSql = this.buildWithCTE(withList);
    const returningSql = returning
      ? sql` returning ${this.buildSelection(returning, { isSingleTable: true })}`
      : void 0;
    const whereSql = where ? sql` where ${where}` : void 0;
    return sql`${withSql}delete from ${table}${whereSql}${returningSql}`;
  }
  buildUpdateSet(table, set) {
    const tableColumns = table[Table.Symbol.Columns];
    const columnNames = Object.keys(tableColumns).filter(
      (colName) =>
        set[colName] !== void 0 || tableColumns[colName]?.onUpdateFn !== void 0,
    );
    const setSize = columnNames.length;
    return sql.join(
      columnNames.flatMap((colName, i) => {
        const col = tableColumns[colName];
        const value = set[colName] ?? sql.param(col.onUpdateFn(), col);
        const res = sql`${sql.identifier(this.casing.getColumnCasing(col))} = ${value}`;
        if (i < setSize - 1) {
          return [res, sql.raw(", ")];
        }
        return [res];
      }),
    );
  }
  buildUpdateQuery({ table, set, where, returning, withList }) {
    const withSql = this.buildWithCTE(withList);
    const setSql = this.buildUpdateSet(table, set);
    const returningSql = returning
      ? sql` returning ${this.buildSelection(returning, { isSingleTable: true })}`
      : void 0;
    const whereSql = where ? sql` where ${where}` : void 0;
    return sql`${withSql}update ${table} set ${setSql}${whereSql}${returningSql}`;
  }
  /**
   * Builds selection SQL with provided fields/expressions
   *
   * Examples:
   *
   * `select <selection> from`
   *
   * `insert ... returning <selection>`
   *
   * If `isSingleTable` is true, then columns won't be prefixed with table name
   */
  buildSelection(fields, { isSingleTable = false } = {}) {
    const columnsLen = fields.length;
    const chunks = fields.flatMap(({ field }, i) => {
      const chunk = [];
      if (is(field, SQL.Aliased) && field.isSelectionField) {
        chunk.push(sql.identifier(field.fieldAlias));
      } else if (is(field, SQL.Aliased) || is(field, SQL)) {
        const query = is(field, SQL.Aliased) ? field.sql : field;
        if (isSingleTable) {
          chunk.push(
            new SQL(
              query.queryChunks.map((c) => {
                if (is(c, PgColumn)) {
                  return sql.identifier(this.casing.getColumnCasing(c));
                }
                return c;
              }),
            ),
          );
        } else {
          chunk.push(query);
        }
        if (is(field, SQL.Aliased)) {
          chunk.push(sql` as ${sql.identifier(field.fieldAlias)}`);
        }
      } else if (is(field, Column)) {
        if (isSingleTable) {
          chunk.push(sql.identifier(this.casing.getColumnCasing(field)));
        } else {
          chunk.push(field);
        }
      }
      if (i < columnsLen - 1) {
        chunk.push(sql`, `);
      }
      return chunk;
    });
    return sql.join(chunks);
  }
  buildSelectQuery({
    withList,
    fields,
    fieldsFlat,
    where,
    having,
    table,
    joins,
    orderBy,
    groupBy,
    limit,
    offset,
    lockingClause,
    distinct,
    setOperators,
  }) {
    const fieldsList = fieldsFlat ?? orderSelectedFields(fields);
    for (const f of fieldsList) {
      if (
        is(f.field, Column) &&
        getTableName(f.field.table) !==
          (is(table, Subquery)
            ? table._.alias
            : is(table, PgViewBase)
              ? table[ViewBaseConfig].name
              : is(table, SQL)
                ? void 0
                : getTableName(table)) &&
        !((table2) =>
          joins?.some(
            ({ alias }) =>
              alias ===
              (table2[Table.Symbol.IsAlias]
                ? getTableName(table2)
                : table2[Table.Symbol.BaseName]),
          ))(f.field.table)
      ) {
        const tableName = getTableName(f.field.table);
        throw new Error(
          `Your "${f.path.join("->")}" field references a column "${tableName}"."${f.field.name}", but the table "${tableName}" is not part of the query! Did you forget to join it?`,
        );
      }
    }
    const isSingleTable = !joins || joins.length === 0;
    const withSql = this.buildWithCTE(withList);
    let distinctSql;
    if (distinct) {
      distinctSql =
        distinct === true
          ? sql` distinct`
          : sql` distinct on (${sql.join(distinct.on, sql`, `)})`;
    }
    const selection = this.buildSelection(fieldsList, { isSingleTable });
    const tableSql = (() => {
      if (
        is(table, Table) &&
        table[Table.Symbol.OriginalName] !== table[Table.Symbol.Name]
      ) {
        let fullName = sql`${sql.identifier(table[Table.Symbol.OriginalName])}`;
        if (table[Table.Symbol.Schema]) {
          fullName = sql`${sql.identifier(table[Table.Symbol.Schema])}.${fullName}`;
        }
        return sql`${fullName} ${sql.identifier(table[Table.Symbol.Name])}`;
      }
      return table;
    })();
    const joinsArray = [];
    if (joins) {
      for (const [index, joinMeta] of joins.entries()) {
        if (index === 0) {
          joinsArray.push(sql` `);
        }
        const table2 = joinMeta.table;
        const lateralSql = joinMeta.lateral ? sql` lateral` : void 0;
        if (is(table2, PgTable)) {
          const tableName = table2[PgTable.Symbol.Name];
          const tableSchema = table2[PgTable.Symbol.Schema];
          const origTableName = table2[PgTable.Symbol.OriginalName];
          const alias = tableName === origTableName ? void 0 : joinMeta.alias;
          joinsArray.push(
            sql`${sql.raw(joinMeta.joinType)} join${lateralSql} ${tableSchema ? sql`${sql.identifier(tableSchema)}.` : void 0}${sql.identifier(origTableName)}${alias && sql` ${sql.identifier(alias)}`} on ${joinMeta.on}`,
          );
        } else if (is(table2, View)) {
          const viewName = table2[ViewBaseConfig].name;
          const viewSchema = table2[ViewBaseConfig].schema;
          const origViewName = table2[ViewBaseConfig].originalName;
          const alias = viewName === origViewName ? void 0 : joinMeta.alias;
          joinsArray.push(
            sql`${sql.raw(joinMeta.joinType)} join${lateralSql} ${viewSchema ? sql`${sql.identifier(viewSchema)}.` : void 0}${sql.identifier(origViewName)}${alias && sql` ${sql.identifier(alias)}`} on ${joinMeta.on}`,
          );
        } else {
          joinsArray.push(
            sql`${sql.raw(joinMeta.joinType)} join${lateralSql} ${table2} on ${joinMeta.on}`,
          );
        }
        if (index < joins.length - 1) {
          joinsArray.push(sql` `);
        }
      }
    }
    const joinsSql = sql.join(joinsArray);
    const whereSql = where ? sql` where ${where}` : void 0;
    const havingSql = having ? sql` having ${having}` : void 0;
    let orderBySql;
    if (orderBy && orderBy.length > 0) {
      orderBySql = sql` order by ${sql.join(orderBy, sql`, `)}`;
    }
    let groupBySql;
    if (groupBy && groupBy.length > 0) {
      groupBySql = sql` group by ${sql.join(groupBy, sql`, `)}`;
    }
    const limitSql =
      typeof limit === "object" || (typeof limit === "number" && limit >= 0)
        ? sql` limit ${limit}`
        : void 0;
    const offsetSql = offset ? sql` offset ${offset}` : void 0;
    const lockingClauseSql = sql.empty();
    if (lockingClause) {
      const clauseSql = sql` for ${sql.raw(lockingClause.strength)}`;
      if (lockingClause.config.of) {
        clauseSql.append(
          sql` of ${sql.join(
            Array.isArray(lockingClause.config.of)
              ? lockingClause.config.of
              : [lockingClause.config.of],
            sql`, `,
          )}`,
        );
      }
      if (lockingClause.config.noWait) {
        clauseSql.append(sql` no wait`);
      } else if (lockingClause.config.skipLocked) {
        clauseSql.append(sql` skip locked`);
      }
      lockingClauseSql.append(clauseSql);
    }
    const finalQuery = sql`${withSql}select${distinctSql} ${selection} from ${tableSql}${joinsSql}${whereSql}${groupBySql}${havingSql}${orderBySql}${limitSql}${offsetSql}${lockingClauseSql}`;
    if (setOperators.length > 0) {
      return this.buildSetOperations(finalQuery, setOperators);
    }
    return finalQuery;
  }
  buildSetOperations(leftSelect, setOperators) {
    const [setOperator, ...rest] = setOperators;
    if (!setOperator) {
      throw new Error("Cannot pass undefined values to any set operator");
    }
    if (rest.length === 0) {
      return this.buildSetOperationQuery({ leftSelect, setOperator });
    }
    return this.buildSetOperations(
      this.buildSetOperationQuery({ leftSelect, setOperator }),
      rest,
    );
  }
  buildSetOperationQuery({
    leftSelect,
    setOperator: { type, isAll, rightSelect, limit, orderBy, offset },
  }) {
    const leftChunk = sql`(${leftSelect.getSQL()}) `;
    const rightChunk = sql`(${rightSelect.getSQL()})`;
    let orderBySql;
    if (orderBy && orderBy.length > 0) {
      const orderByValues = [];
      for (const singleOrderBy of orderBy) {
        if (is(singleOrderBy, PgColumn)) {
          orderByValues.push(sql.identifier(singleOrderBy.name));
        } else if (is(singleOrderBy, SQL)) {
          for (let i = 0; i < singleOrderBy.queryChunks.length; i++) {
            const chunk = singleOrderBy.queryChunks[i];
            if (is(chunk, PgColumn)) {
              singleOrderBy.queryChunks[i] = sql.identifier(chunk.name);
            }
          }
          orderByValues.push(sql`${singleOrderBy}`);
        } else {
          orderByValues.push(sql`${singleOrderBy}`);
        }
      }
      orderBySql = sql` order by ${sql.join(orderByValues, sql`, `)} `;
    }
    const limitSql =
      typeof limit === "object" || (typeof limit === "number" && limit >= 0)
        ? sql` limit ${limit}`
        : void 0;
    const operatorChunk = sql.raw(`${type} ${isAll ? "all " : ""}`);
    const offsetSql = offset ? sql` offset ${offset}` : void 0;
    return sql`${leftChunk}${operatorChunk}${rightChunk}${orderBySql}${limitSql}${offsetSql}`;
  }
  buildInsertQuery({ table, values, onConflict, returning, withList }) {
    const valuesSqlList = [];
    const columns = table[Table.Symbol.Columns];
    const colEntries = Object.entries(columns).filter(
      ([_2, col]) => !col.shouldDisableInsert(),
    );
    const insertOrder = colEntries.map(([, column]) =>
      sql.identifier(this.casing.getColumnCasing(column)),
    );
    for (const [valueIndex, value] of values.entries()) {
      const valueList = [];
      for (const [fieldName, col] of colEntries) {
        const colValue = value[fieldName];
        if (
          colValue === void 0 ||
          (is(colValue, Param) && colValue.value === void 0)
        ) {
          if (col.defaultFn !== void 0) {
            const defaultFnResult = col.defaultFn();
            const defaultValue = is(defaultFnResult, SQL)
              ? defaultFnResult
              : sql.param(defaultFnResult, col);
            valueList.push(defaultValue);
          } else if (!col.default && col.onUpdateFn !== void 0) {
            const onUpdateFnResult = col.onUpdateFn();
            const newValue = is(onUpdateFnResult, SQL)
              ? onUpdateFnResult
              : sql.param(onUpdateFnResult, col);
            valueList.push(newValue);
          } else {
            valueList.push(sql`default`);
          }
        } else {
          valueList.push(colValue);
        }
      }
      valuesSqlList.push(valueList);
      if (valueIndex < values.length - 1) {
        valuesSqlList.push(sql`, `);
      }
    }
    const withSql = this.buildWithCTE(withList);
    const valuesSql = sql.join(valuesSqlList);
    const returningSql = returning
      ? sql` returning ${this.buildSelection(returning, { isSingleTable: true })}`
      : void 0;
    const onConflictSql = onConflict ? sql` on conflict ${onConflict}` : void 0;
    return sql`${withSql}insert into ${table} ${insertOrder} values ${valuesSql}${onConflictSql}${returningSql}`;
  }
  buildRefreshMaterializedViewQuery({ view, concurrently, withNoData }) {
    const concurrentlySql = concurrently ? sql` concurrently` : void 0;
    const withNoDataSql = withNoData ? sql` with no data` : void 0;
    return sql`refresh materialized view${concurrentlySql} ${view}${withNoDataSql}`;
  }
  prepareTyping(encoder) {
    if (is(encoder, PgJsonb) || is(encoder, PgJson)) {
      return "json";
    } else if (is(encoder, PgNumeric)) {
      return "decimal";
    } else if (is(encoder, PgTime)) {
      return "time";
    } else if (is(encoder, PgTimestamp) || is(encoder, PgTimestampString)) {
      return "timestamp";
    } else if (is(encoder, PgDate) || is(encoder, PgDateString)) {
      return "date";
    } else if (is(encoder, PgUUID)) {
      return "uuid";
    } else {
      return "none";
    }
  }
  sqlToQuery(sql2, invokeSource) {
    return sql2.toQuery({
      casing: this.casing,
      escapeName: this.escapeName,
      escapeParam: this.escapeParam,
      escapeString: this.escapeString,
      prepareTyping: this.prepareTyping,
      invokeSource,
    });
  }
  // buildRelationalQueryWithPK({
  // 	fullSchema,
  // 	schema,
  // 	tableNamesMap,
  // 	table,
  // 	tableConfig,
  // 	queryConfig: config,
  // 	tableAlias,
  // 	isRoot = false,
  // 	joinOn,
  // }: {
  // 	fullSchema: Record<string, unknown>;
  // 	schema: TablesRelationalConfig;
  // 	tableNamesMap: Record<string, string>;
  // 	table: PgTable;
  // 	tableConfig: TableRelationalConfig;
  // 	queryConfig: true | DBQueryConfig<'many', true>;
  // 	tableAlias: string;
  // 	isRoot?: boolean;
  // 	joinOn?: SQL;
  // }): BuildRelationalQueryResult<PgTable, PgColumn> {
  // 	// For { "<relation>": true }, return a table with selection of all columns
  // 	if (config === true) {
  // 		const selectionEntries = Object.entries(tableConfig.columns);
  // 		const selection: BuildRelationalQueryResult<PgTable, PgColumn>['selection'] = selectionEntries.map((
  // 			[key, value],
  // 		) => ({
  // 			dbKey: value.name,
  // 			tsKey: key,
  // 			field: value as PgColumn,
  // 			relationTableTsKey: undefined,
  // 			isJson: false,
  // 			selection: [],
  // 		}));
  // 		return {
  // 			tableTsKey: tableConfig.tsName,
  // 			sql: table,
  // 			selection,
  // 		};
  // 	}
  // 	// let selection: BuildRelationalQueryResult<PgTable, PgColumn>['selection'] = [];
  // 	// let selectionForBuild = selection;
  // 	const aliasedColumns = Object.fromEntries(
  // 		Object.entries(tableConfig.columns).map(([key, value]) => [key, aliasedTableColumn(value, tableAlias)]),
  // 	);
  // 	const aliasedRelations = Object.fromEntries(
  // 		Object.entries(tableConfig.relations).map(([key, value]) => [key, aliasedRelation(value, tableAlias)]),
  // 	);
  // 	const aliasedFields = Object.assign({}, aliasedColumns, aliasedRelations);
  // 	let where, hasUserDefinedWhere;
  // 	if (config.where) {
  // 		const whereSql = typeof config.where === 'function' ? config.where(aliasedFields, operators) : config.where;
  // 		where = whereSql && mapColumnsInSQLToAlias(whereSql, tableAlias);
  // 		hasUserDefinedWhere = !!where;
  // 	}
  // 	where = and(joinOn, where);
  // 	// const fieldsSelection: { tsKey: string; value: PgColumn | SQL.Aliased; isExtra?: boolean }[] = [];
  // 	let joins: Join[] = [];
  // 	let selectedColumns: string[] = [];
  // 	// Figure out which columns to select
  // 	if (config.columns) {
  // 		let isIncludeMode = false;
  // 		for (const [field, value] of Object.entries(config.columns)) {
  // 			if (value === undefined) {
  // 				continue;
  // 			}
  // 			if (field in tableConfig.columns) {
  // 				if (!isIncludeMode && value === true) {
  // 					isIncludeMode = true;
  // 				}
  // 				selectedColumns.push(field);
  // 			}
  // 		}
  // 		if (selectedColumns.length > 0) {
  // 			selectedColumns = isIncludeMode
  // 				? selectedColumns.filter((c) => config.columns?.[c] === true)
  // 				: Object.keys(tableConfig.columns).filter((key) => !selectedColumns.includes(key));
  // 		}
  // 	} else {
  // 		// Select all columns if selection is not specified
  // 		selectedColumns = Object.keys(tableConfig.columns);
  // 	}
  // 	// for (const field of selectedColumns) {
  // 	// 	const column = tableConfig.columns[field]! as PgColumn;
  // 	// 	fieldsSelection.push({ tsKey: field, value: column });
  // 	// }
  // 	let initiallySelectedRelations: {
  // 		tsKey: string;
  // 		queryConfig: true | DBQueryConfig<'many', false>;
  // 		relation: Relation;
  // 	}[] = [];
  // 	// let selectedRelations: BuildRelationalQueryResult<PgTable, PgColumn>['selection'] = [];
  // 	// Figure out which relations to select
  // 	if (config.with) {
  // 		initiallySelectedRelations = Object.entries(config.with)
  // 			.filter((entry): entry is [typeof entry[0], NonNullable<typeof entry[1]>] => !!entry[1])
  // 			.map(([tsKey, queryConfig]) => ({ tsKey, queryConfig, relation: tableConfig.relations[tsKey]! }));
  // 	}
  // 	const manyRelations = initiallySelectedRelations.filter((r) =>
  // 		is(r.relation, Many)
  // 		&& (schema[tableNamesMap[r.relation.referencedTable[Table.Symbol.Name]]!]?.primaryKey.length ?? 0) > 0
  // 	);
  // 	// If this is the last Many relation (or there are no Many relations), we are on the innermost subquery level
  // 	const isInnermostQuery = manyRelations.length < 2;
  // 	const selectedExtras: {
  // 		tsKey: string;
  // 		value: SQL.Aliased;
  // 	}[] = [];
  // 	// Figure out which extras to select
  // 	if (isInnermostQuery && config.extras) {
  // 		const extras = typeof config.extras === 'function'
  // 			? config.extras(aliasedFields, { sql })
  // 			: config.extras;
  // 		for (const [tsKey, value] of Object.entries(extras)) {
  // 			selectedExtras.push({
  // 				tsKey,
  // 				value: mapColumnsInAliasedSQLToAlias(value, tableAlias),
  // 			});
  // 		}
  // 	}
  // 	// Transform `fieldsSelection` into `selection`
  // 	// `fieldsSelection` shouldn't be used after this point
  // 	// for (const { tsKey, value, isExtra } of fieldsSelection) {
  // 	// 	selection.push({
  // 	// 		dbKey: is(value, SQL.Aliased) ? value.fieldAlias : tableConfig.columns[tsKey]!.name,
  // 	// 		tsKey,
  // 	// 		field: is(value, Column) ? aliasedTableColumn(value, tableAlias) : value,
  // 	// 		relationTableTsKey: undefined,
  // 	// 		isJson: false,
  // 	// 		isExtra,
  // 	// 		selection: [],
  // 	// 	});
  // 	// }
  // 	let orderByOrig = typeof config.orderBy === 'function'
  // 		? config.orderBy(aliasedFields, orderByOperators)
  // 		: config.orderBy ?? [];
  // 	if (!Array.isArray(orderByOrig)) {
  // 		orderByOrig = [orderByOrig];
  // 	}
  // 	const orderBy = orderByOrig.map((orderByValue) => {
  // 		if (is(orderByValue, Column)) {
  // 			return aliasedTableColumn(orderByValue, tableAlias) as PgColumn;
  // 		}
  // 		return mapColumnsInSQLToAlias(orderByValue, tableAlias);
  // 	});
  // 	const limit = isInnermostQuery ? config.limit : undefined;
  // 	const offset = isInnermostQuery ? config.offset : undefined;
  // 	// For non-root queries without additional config except columns, return a table with selection
  // 	if (
  // 		!isRoot
  // 		&& initiallySelectedRelations.length === 0
  // 		&& selectedExtras.length === 0
  // 		&& !where
  // 		&& orderBy.length === 0
  // 		&& limit === undefined
  // 		&& offset === undefined
  // 	) {
  // 		return {
  // 			tableTsKey: tableConfig.tsName,
  // 			sql: table,
  // 			selection: selectedColumns.map((key) => ({
  // 				dbKey: tableConfig.columns[key]!.name,
  // 				tsKey: key,
  // 				field: tableConfig.columns[key] as PgColumn,
  // 				relationTableTsKey: undefined,
  // 				isJson: false,
  // 				selection: [],
  // 			})),
  // 		};
  // 	}
  // 	const selectedRelationsWithoutPK:
  // 	// Process all relations without primary keys, because they need to be joined differently and will all be on the same query level
  // 	for (
  // 		const {
  // 			tsKey: selectedRelationTsKey,
  // 			queryConfig: selectedRelationConfigValue,
  // 			relation,
  // 		} of initiallySelectedRelations
  // 	) {
  // 		const normalizedRelation = normalizeRelation(schema, tableNamesMap, relation);
  // 		const relationTableName = relation.referencedTable[Table.Symbol.Name];
  // 		const relationTableTsName = tableNamesMap[relationTableName]!;
  // 		const relationTable = schema[relationTableTsName]!;
  // 		if (relationTable.primaryKey.length > 0) {
  // 			continue;
  // 		}
  // 		const relationTableAlias = `${tableAlias}_${selectedRelationTsKey}`;
  // 		const joinOn = and(
  // 			...normalizedRelation.fields.map((field, i) =>
  // 				eq(
  // 					aliasedTableColumn(normalizedRelation.references[i]!, relationTableAlias),
  // 					aliasedTableColumn(field, tableAlias),
  // 				)
  // 			),
  // 		);
  // 		const builtRelation = this.buildRelationalQueryWithoutPK({
  // 			fullSchema,
  // 			schema,
  // 			tableNamesMap,
  // 			table: fullSchema[relationTableTsName] as PgTable,
  // 			tableConfig: schema[relationTableTsName]!,
  // 			queryConfig: selectedRelationConfigValue,
  // 			tableAlias: relationTableAlias,
  // 			joinOn,
  // 			nestedQueryRelation: relation,
  // 		});
  // 		const field = sql`${sql.identifier(relationTableAlias)}.${sql.identifier('data')}`.as(selectedRelationTsKey);
  // 		joins.push({
  // 			on: sql`true`,
  // 			table: new Subquery(builtRelation.sql as SQL, {}, relationTableAlias),
  // 			alias: relationTableAlias,
  // 			joinType: 'left',
  // 			lateral: true,
  // 		});
  // 		selectedRelations.push({
  // 			dbKey: selectedRelationTsKey,
  // 			tsKey: selectedRelationTsKey,
  // 			field,
  // 			relationTableTsKey: relationTableTsName,
  // 			isJson: true,
  // 			selection: builtRelation.selection,
  // 		});
  // 	}
  // 	const oneRelations = initiallySelectedRelations.filter((r): r is typeof r & { relation: One } =>
  // 		is(r.relation, One)
  // 	);
  // 	// Process all One relations with PKs, because they can all be joined on the same level
  // 	for (
  // 		const {
  // 			tsKey: selectedRelationTsKey,
  // 			queryConfig: selectedRelationConfigValue,
  // 			relation,
  // 		} of oneRelations
  // 	) {
  // 		const normalizedRelation = normalizeRelation(schema, tableNamesMap, relation);
  // 		const relationTableName = relation.referencedTable[Table.Symbol.Name];
  // 		const relationTableTsName = tableNamesMap[relationTableName]!;
  // 		const relationTableAlias = `${tableAlias}_${selectedRelationTsKey}`;
  // 		const relationTable = schema[relationTableTsName]!;
  // 		if (relationTable.primaryKey.length === 0) {
  // 			continue;
  // 		}
  // 		const joinOn = and(
  // 			...normalizedRelation.fields.map((field, i) =>
  // 				eq(
  // 					aliasedTableColumn(normalizedRelation.references[i]!, relationTableAlias),
  // 					aliasedTableColumn(field, tableAlias),
  // 				)
  // 			),
  // 		);
  // 		const builtRelation = this.buildRelationalQueryWithPK({
  // 			fullSchema,
  // 			schema,
  // 			tableNamesMap,
  // 			table: fullSchema[relationTableTsName] as PgTable,
  // 			tableConfig: schema[relationTableTsName]!,
  // 			queryConfig: selectedRelationConfigValue,
  // 			tableAlias: relationTableAlias,
  // 			joinOn,
  // 		});
  // 		const field = sql`case when ${sql.identifier(relationTableAlias)} is null then null else json_build_array(${
  // 			sql.join(
  // 				builtRelation.selection.map(({ field }) =>
  // 					is(field, SQL.Aliased)
  // 						? sql`${sql.identifier(relationTableAlias)}.${sql.identifier(field.fieldAlias)}`
  // 						: is(field, Column)
  // 						? aliasedTableColumn(field, relationTableAlias)
  // 						: field
  // 				),
  // 				sql`, `,
  // 			)
  // 		}) end`.as(selectedRelationTsKey);
  // 		const isLateralJoin = is(builtRelation.sql, SQL);
  // 		joins.push({
  // 			on: isLateralJoin ? sql`true` : joinOn,
  // 			table: is(builtRelation.sql, SQL)
  // 				? new Subquery(builtRelation.sql, {}, relationTableAlias)
  // 				: aliasedTable(builtRelation.sql, relationTableAlias),
  // 			alias: relationTableAlias,
  // 			joinType: 'left',
  // 			lateral: is(builtRelation.sql, SQL),
  // 		});
  // 		selectedRelations.push({
  // 			dbKey: selectedRelationTsKey,
  // 			tsKey: selectedRelationTsKey,
  // 			field,
  // 			relationTableTsKey: relationTableTsName,
  // 			isJson: true,
  // 			selection: builtRelation.selection,
  // 		});
  // 	}
  // 	let distinct: PgSelectConfig['distinct'];
  // 	let tableFrom: PgTable | Subquery = table;
  // 	// Process first Many relation - each one requires a nested subquery
  // 	const manyRelation = manyRelations[0];
  // 	if (manyRelation) {
  // 		const {
  // 			tsKey: selectedRelationTsKey,
  // 			queryConfig: selectedRelationQueryConfig,
  // 			relation,
  // 		} = manyRelation;
  // 		distinct = {
  // 			on: tableConfig.primaryKey.map((c) => aliasedTableColumn(c as PgColumn, tableAlias)),
  // 		};
  // 		const normalizedRelation = normalizeRelation(schema, tableNamesMap, relation);
  // 		const relationTableName = relation.referencedTable[Table.Symbol.Name];
  // 		const relationTableTsName = tableNamesMap[relationTableName]!;
  // 		const relationTableAlias = `${tableAlias}_${selectedRelationTsKey}`;
  // 		const joinOn = and(
  // 			...normalizedRelation.fields.map((field, i) =>
  // 				eq(
  // 					aliasedTableColumn(normalizedRelation.references[i]!, relationTableAlias),
  // 					aliasedTableColumn(field, tableAlias),
  // 				)
  // 			),
  // 		);
  // 		const builtRelationJoin = this.buildRelationalQueryWithPK({
  // 			fullSchema,
  // 			schema,
  // 			tableNamesMap,
  // 			table: fullSchema[relationTableTsName] as PgTable,
  // 			tableConfig: schema[relationTableTsName]!,
  // 			queryConfig: selectedRelationQueryConfig,
  // 			tableAlias: relationTableAlias,
  // 			joinOn,
  // 		});
  // 		const builtRelationSelectionField = sql`case when ${
  // 			sql.identifier(relationTableAlias)
  // 		} is null then '[]' else json_agg(json_build_array(${
  // 			sql.join(
  // 				builtRelationJoin.selection.map(({ field }) =>
  // 					is(field, SQL.Aliased)
  // 						? sql`${sql.identifier(relationTableAlias)}.${sql.identifier(field.fieldAlias)}`
  // 						: is(field, Column)
  // 						? aliasedTableColumn(field, relationTableAlias)
  // 						: field
  // 				),
  // 				sql`, `,
  // 			)
  // 		})) over (partition by ${sql.join(distinct.on, sql`, `)}) end`.as(selectedRelationTsKey);
  // 		const isLateralJoin = is(builtRelationJoin.sql, SQL);
  // 		joins.push({
  // 			on: isLateralJoin ? sql`true` : joinOn,
  // 			table: isLateralJoin
  // 				? new Subquery(builtRelationJoin.sql as SQL, {}, relationTableAlias)
  // 				: aliasedTable(builtRelationJoin.sql as PgTable, relationTableAlias),
  // 			alias: relationTableAlias,
  // 			joinType: 'left',
  // 			lateral: isLateralJoin,
  // 		});
  // 		// Build the "from" subquery with the remaining Many relations
  // 		const builtTableFrom = this.buildRelationalQueryWithPK({
  // 			fullSchema,
  // 			schema,
  // 			tableNamesMap,
  // 			table,
  // 			tableConfig,
  // 			queryConfig: {
  // 				...config,
  // 				where: undefined,
  // 				orderBy: undefined,
  // 				limit: undefined,
  // 				offset: undefined,
  // 				with: manyRelations.slice(1).reduce<NonNullable<typeof config['with']>>(
  // 					(result, { tsKey, queryConfig: configValue }) => {
  // 						result[tsKey] = configValue;
  // 						return result;
  // 					},
  // 					{},
  // 				),
  // 			},
  // 			tableAlias,
  // 		});
  // 		selectedRelations.push({
  // 			dbKey: selectedRelationTsKey,
  // 			tsKey: selectedRelationTsKey,
  // 			field: builtRelationSelectionField,
  // 			relationTableTsKey: relationTableTsName,
  // 			isJson: true,
  // 			selection: builtRelationJoin.selection,
  // 		});
  // 		// selection = builtTableFrom.selection.map((item) =>
  // 		// 	is(item.field, SQL.Aliased)
  // 		// 		? { ...item, field: sql`${sql.identifier(tableAlias)}.${sql.identifier(item.field.fieldAlias)}` }
  // 		// 		: item
  // 		// );
  // 		// selectionForBuild = [{
  // 		// 	dbKey: '*',
  // 		// 	tsKey: '*',
  // 		// 	field: sql`${sql.identifier(tableAlias)}.*`,
  // 		// 	selection: [],
  // 		// 	isJson: false,
  // 		// 	relationTableTsKey: undefined,
  // 		// }];
  // 		// const newSelectionItem: (typeof selection)[number] = {
  // 		// 	dbKey: selectedRelationTsKey,
  // 		// 	tsKey: selectedRelationTsKey,
  // 		// 	field,
  // 		// 	relationTableTsKey: relationTableTsName,
  // 		// 	isJson: true,
  // 		// 	selection: builtRelationJoin.selection,
  // 		// };
  // 		// selection.push(newSelectionItem);
  // 		// selectionForBuild.push(newSelectionItem);
  // 		tableFrom = is(builtTableFrom.sql, PgTable)
  // 			? builtTableFrom.sql
  // 			: new Subquery(builtTableFrom.sql, {}, tableAlias);
  // 	}
  // 	if (selectedColumns.length === 0 && selectedRelations.length === 0 && selectedExtras.length === 0) {
  // 		throw new DrizzleError(`No fields selected for table "${tableConfig.tsName}" ("${tableAlias}")`);
  // 	}
  // 	let selection: BuildRelationalQueryResult<PgTable, PgColumn>['selection'];
  // 	function prepareSelectedColumns() {
  // 		return selectedColumns.map((key) => ({
  // 			dbKey: tableConfig.columns[key]!.name,
  // 			tsKey: key,
  // 			field: tableConfig.columns[key] as PgColumn,
  // 			relationTableTsKey: undefined,
  // 			isJson: false,
  // 			selection: [],
  // 		}));
  // 	}
  // 	function prepareSelectedExtras() {
  // 		return selectedExtras.map((item) => ({
  // 			dbKey: item.value.fieldAlias,
  // 			tsKey: item.tsKey,
  // 			field: item.value,
  // 			relationTableTsKey: undefined,
  // 			isJson: false,
  // 			selection: [],
  // 		}));
  // 	}
  // 	if (isRoot) {
  // 		selection = [
  // 			...prepareSelectedColumns(),
  // 			...prepareSelectedExtras(),
  // 		];
  // 	}
  // 	if (hasUserDefinedWhere || orderBy.length > 0) {
  // 		tableFrom = new Subquery(
  // 			this.buildSelectQuery({
  // 				table: is(tableFrom, PgTable) ? aliasedTable(tableFrom, tableAlias) : tableFrom,
  // 				fields: {},
  // 				fieldsFlat: selectionForBuild.map(({ field }) => ({
  // 					path: [],
  // 					field: is(field, Column) ? aliasedTableColumn(field, tableAlias) : field,
  // 				})),
  // 				joins,
  // 				distinct,
  // 			}),
  // 			{},
  // 			tableAlias,
  // 		);
  // 		selectionForBuild = selection.map((item) =>
  // 			is(item.field, SQL.Aliased)
  // 				? { ...item, field: sql`${sql.identifier(tableAlias)}.${sql.identifier(item.field.fieldAlias)}` }
  // 				: item
  // 		);
  // 		joins = [];
  // 		distinct = undefined;
  // 	}
  // 	const result = this.buildSelectQuery({
  // 		table: is(tableFrom, PgTable) ? aliasedTable(tableFrom, tableAlias) : tableFrom,
  // 		fields: {},
  // 		fieldsFlat: selectionForBuild.map(({ field }) => ({
  // 			path: [],
  // 			field: is(field, Column) ? aliasedTableColumn(field, tableAlias) : field,
  // 		})),
  // 		where,
  // 		limit,
  // 		offset,
  // 		joins,
  // 		orderBy,
  // 		distinct,
  // 	});
  // 	return {
  // 		tableTsKey: tableConfig.tsName,
  // 		sql: result,
  // 		selection,
  // 	};
  // }
  buildRelationalQueryWithoutPK({
    fullSchema,
    schema,
    tableNamesMap,
    table,
    tableConfig,
    queryConfig: config,
    tableAlias,
    nestedQueryRelation,
    joinOn,
  }) {
    let selection = [];
    let limit,
      offset,
      orderBy = [],
      where;
    const joins = [];
    if (config === true) {
      const selectionEntries = Object.entries(tableConfig.columns);
      selection = selectionEntries.map(([key, value]) => ({
        dbKey: value.name,
        tsKey: key,
        field: aliasedTableColumn(value, tableAlias),
        relationTableTsKey: void 0,
        isJson: false,
        selection: [],
      }));
    } else {
      const aliasedColumns = Object.fromEntries(
        Object.entries(tableConfig.columns).map(([key, value]) => [
          key,
          aliasedTableColumn(value, tableAlias),
        ]),
      );
      if (config.where) {
        const whereSql =
          typeof config.where === "function"
            ? config.where(aliasedColumns, getOperators())
            : config.where;
        where = whereSql && mapColumnsInSQLToAlias(whereSql, tableAlias);
      }
      const fieldsSelection = [];
      let selectedColumns = [];
      if (config.columns) {
        let isIncludeMode = false;
        for (const [field, value] of Object.entries(config.columns)) {
          if (value === void 0) {
            continue;
          }
          if (field in tableConfig.columns) {
            if (!isIncludeMode && value === true) {
              isIncludeMode = true;
            }
            selectedColumns.push(field);
          }
        }
        if (selectedColumns.length > 0) {
          selectedColumns = isIncludeMode
            ? selectedColumns.filter((c) => config.columns?.[c] === true)
            : Object.keys(tableConfig.columns).filter(
                (key) => !selectedColumns.includes(key),
              );
        }
      } else {
        selectedColumns = Object.keys(tableConfig.columns);
      }
      for (const field of selectedColumns) {
        const column = tableConfig.columns[field];
        fieldsSelection.push({ tsKey: field, value: column });
      }
      let selectedRelations = [];
      if (config.with) {
        selectedRelations = Object.entries(config.with)
          .filter((entry) => !!entry[1])
          .map(([tsKey, queryConfig2]) => ({
            tsKey,
            queryConfig: queryConfig2,
            relation: tableConfig.relations[tsKey],
          }));
      }
      let extras;
      if (config.extras) {
        extras =
          typeof config.extras === "function"
            ? config.extras(aliasedColumns, { sql })
            : config.extras;
        for (const [tsKey, value] of Object.entries(extras)) {
          fieldsSelection.push({
            tsKey,
            value: mapColumnsInAliasedSQLToAlias(value, tableAlias),
          });
        }
      }
      for (const { tsKey, value } of fieldsSelection) {
        selection.push({
          dbKey: is(value, SQL.Aliased)
            ? value.fieldAlias
            : tableConfig.columns[tsKey].name,
          tsKey,
          field: is(value, Column)
            ? aliasedTableColumn(value, tableAlias)
            : value,
          relationTableTsKey: void 0,
          isJson: false,
          selection: [],
        });
      }
      let orderByOrig =
        typeof config.orderBy === "function"
          ? config.orderBy(aliasedColumns, getOrderByOperators())
          : (config.orderBy ?? []);
      if (!Array.isArray(orderByOrig)) {
        orderByOrig = [orderByOrig];
      }
      orderBy = orderByOrig.map((orderByValue) => {
        if (is(orderByValue, Column)) {
          return aliasedTableColumn(orderByValue, tableAlias);
        }
        return mapColumnsInSQLToAlias(orderByValue, tableAlias);
      });
      limit = config.limit;
      offset = config.offset;
      for (const {
        tsKey: selectedRelationTsKey,
        queryConfig: selectedRelationConfigValue,
        relation,
      } of selectedRelations) {
        const normalizedRelation = normalizeRelation(
          schema,
          tableNamesMap,
          relation,
        );
        const relationTableName = getTableUniqueName(relation.referencedTable);
        const relationTableTsName = tableNamesMap[relationTableName];
        const relationTableAlias = `${tableAlias}_${selectedRelationTsKey}`;
        const joinOn2 = and(
          ...normalizedRelation.fields.map((field2, i) =>
            eq(
              aliasedTableColumn(
                normalizedRelation.references[i],
                relationTableAlias,
              ),
              aliasedTableColumn(field2, tableAlias),
            ),
          ),
        );
        const builtRelation = this.buildRelationalQueryWithoutPK({
          fullSchema,
          schema,
          tableNamesMap,
          table: fullSchema[relationTableTsName],
          tableConfig: schema[relationTableTsName],
          queryConfig: is(relation, One)
            ? selectedRelationConfigValue === true
              ? { limit: 1 }
              : { ...selectedRelationConfigValue, limit: 1 }
            : selectedRelationConfigValue,
          tableAlias: relationTableAlias,
          joinOn: joinOn2,
          nestedQueryRelation: relation,
        });
        const field =
          sql`${sql.identifier(relationTableAlias)}.${sql.identifier("data")}`.as(
            selectedRelationTsKey,
          );
        joins.push({
          on: sql`true`,
          table: new Subquery(builtRelation.sql, {}, relationTableAlias),
          alias: relationTableAlias,
          joinType: "left",
          lateral: true,
        });
        selection.push({
          dbKey: selectedRelationTsKey,
          tsKey: selectedRelationTsKey,
          field,
          relationTableTsKey: relationTableTsName,
          isJson: true,
          selection: builtRelation.selection,
        });
      }
    }
    if (selection.length === 0) {
      throw new DrizzleError({
        message: `No fields selected for table "${tableConfig.tsName}" ("${tableAlias}")`,
      });
    }
    let result;
    where = and(joinOn, where);
    if (nestedQueryRelation) {
      let field = sql`json_build_array(${sql.join(
        selection.map(({ field: field2, tsKey, isJson }) =>
          isJson
            ? sql`${sql.identifier(`${tableAlias}_${tsKey}`)}.${sql.identifier("data")}`
            : is(field2, SQL.Aliased)
              ? field2.sql
              : field2,
        ),
        sql`, `,
      )})`;
      if (is(nestedQueryRelation, Many)) {
        field = sql`coalesce(json_agg(${field}${orderBy.length > 0 ? sql` order by ${sql.join(orderBy, sql`, `)}` : void 0}), '[]'::json)`;
      }
      const nestedSelection = [
        {
          dbKey: "data",
          tsKey: "data",
          field: field.as("data"),
          isJson: true,
          relationTableTsKey: tableConfig.tsName,
          selection,
        },
      ];
      const needsSubquery =
        limit !== void 0 || offset !== void 0 || orderBy.length > 0;
      if (needsSubquery) {
        result = this.buildSelectQuery({
          table: aliasedTable(table, tableAlias),
          fields: {},
          fieldsFlat: [
            {
              path: [],
              field: sql.raw("*"),
            },
          ],
          where,
          limit,
          offset,
          orderBy,
          setOperators: [],
        });
        where = void 0;
        limit = void 0;
        offset = void 0;
        orderBy = [];
      } else {
        result = aliasedTable(table, tableAlias);
      }
      result = this.buildSelectQuery({
        table: is(result, PgTable)
          ? result
          : new Subquery(result, {}, tableAlias),
        fields: {},
        fieldsFlat: nestedSelection.map(({ field: field2 }) => ({
          path: [],
          field: is(field2, Column)
            ? aliasedTableColumn(field2, tableAlias)
            : field2,
        })),
        joins,
        where,
        limit,
        offset,
        orderBy,
        setOperators: [],
      });
    } else {
      result = this.buildSelectQuery({
        table: aliasedTable(table, tableAlias),
        fields: {},
        fieldsFlat: selection.map(({ field }) => ({
          path: [],
          field: is(field, Column)
            ? aliasedTableColumn(field, tableAlias)
            : field,
        })),
        joins,
        where,
        limit,
        offset,
        orderBy,
        setOperators: [],
      });
    }
    return {
      tableTsKey: tableConfig.tsName,
      sql: result,
      selection,
    };
  }
};
_a127 = entityKind;
__publicField(PgDialect, _a127, "PgDialect");

// node_modules/drizzle-orm/selection-proxy.js
var _a128;
var _SelectionProxyHandler = class {
  config;
  constructor(config) {
    this.config = { ...config };
  }
  get(subquery, prop) {
    if (prop === "_") {
      return {
        ...subquery["_"],
        selectedFields: new Proxy(subquery._.selectedFields, this),
      };
    }
    if (prop === ViewBaseConfig) {
      return {
        ...subquery[ViewBaseConfig],
        selectedFields: new Proxy(
          subquery[ViewBaseConfig].selectedFields,
          this,
        ),
      };
    }
    if (typeof prop === "symbol") {
      return subquery[prop];
    }
    const columns = is(subquery, Subquery)
      ? subquery._.selectedFields
      : is(subquery, View)
        ? subquery[ViewBaseConfig].selectedFields
        : subquery;
    const value = columns[prop];
    if (is(value, SQL.Aliased)) {
      if (this.config.sqlAliasedBehavior === "sql" && !value.isSelectionField) {
        return value.sql;
      }
      const newValue = value.clone();
      newValue.isSelectionField = true;
      return newValue;
    }
    if (is(value, SQL)) {
      if (this.config.sqlBehavior === "sql") {
        return value;
      }
      throw new Error(
        `You tried to reference "${prop}" field from a subquery, which is a raw SQL field, but it doesn't have an alias declared. Please add an alias to the field using ".as('alias')" method.`,
      );
    }
    if (is(value, Column)) {
      if (this.config.alias) {
        return new Proxy(
          value,
          new ColumnAliasProxyHandler(
            new Proxy(
              value.table,
              new TableAliasProxyHandler(
                this.config.alias,
                this.config.replaceOriginalName ?? false,
              ),
            ),
          ),
        );
      }
      return value;
    }
    if (typeof value !== "object" || value === null) {
      return value;
    }
    return new Proxy(value, new _SelectionProxyHandler(this.config));
  }
};
var SelectionProxyHandler = _SelectionProxyHandler;
_a128 = entityKind;
__publicField(SelectionProxyHandler, _a128, "SelectionProxyHandler");

// node_modules/drizzle-orm/query-builders/query-builder.js
var _a129;
var TypedQueryBuilder = class {
  /** @internal */
  getSelectedFields() {
    return this._.selectedFields;
  }
};
_a129 = entityKind;
__publicField(TypedQueryBuilder, _a129, "TypedQueryBuilder");

// node_modules/drizzle-orm/pg-core/query-builders/select.js
var _a130;
var PgSelectBuilder = class {
  fields;
  session;
  dialect;
  withList = [];
  distinct;
  constructor(config) {
    this.fields = config.fields;
    this.session = config.session;
    this.dialect = config.dialect;
    if (config.withList) {
      this.withList = config.withList;
    }
    this.distinct = config.distinct;
  }
  /**
   * Specify the table, subquery, or other target that you're
   * building a select query against.
   *
   * {@link https://www.postgresql.org/docs/current/sql-select.html#SQL-FROM | Postgres from documentation}
   */
  from(source) {
    const isPartialSelect = !!this.fields;
    let fields;
    if (this.fields) {
      fields = this.fields;
    } else if (is(source, Subquery)) {
      fields = Object.fromEntries(
        Object.keys(source._.selectedFields).map((key) => [key, source[key]]),
      );
    } else if (is(source, PgViewBase)) {
      fields = source[ViewBaseConfig].selectedFields;
    } else if (is(source, SQL)) {
      fields = {};
    } else {
      fields = getTableColumns(source);
    }
    return new PgSelectBase({
      table: source,
      fields,
      isPartialSelect,
      session: this.session,
      dialect: this.dialect,
      withList: this.withList,
      distinct: this.distinct,
    });
  }
};
_a130 = entityKind;
__publicField(PgSelectBuilder, _a130, "PgSelectBuilder");
var _a131;
var PgSelectQueryBuilderBase = class extends TypedQueryBuilder {
  _;
  config;
  joinsNotNullableMap;
  tableName;
  isPartialSelect;
  session;
  dialect;
  constructor({
    table,
    fields,
    isPartialSelect,
    session,
    dialect,
    withList,
    distinct,
  }) {
    super();
    this.config = {
      withList,
      table,
      fields: { ...fields },
      distinct,
      setOperators: [],
    };
    this.isPartialSelect = isPartialSelect;
    this.session = session;
    this.dialect = dialect;
    this._ = {
      selectedFields: fields,
    };
    this.tableName = getTableLikeName(table);
    this.joinsNotNullableMap =
      typeof this.tableName === "string" ? { [this.tableName]: true } : {};
  }
  createJoin(joinType) {
    return (table, on) => {
      const baseTableName = this.tableName;
      const tableName = getTableLikeName(table);
      if (
        typeof tableName === "string" &&
        this.config.joins?.some((join) => join.alias === tableName)
      ) {
        throw new Error(`Alias "${tableName}" is already used in this query`);
      }
      if (!this.isPartialSelect) {
        if (
          Object.keys(this.joinsNotNullableMap).length === 1 &&
          typeof baseTableName === "string"
        ) {
          this.config.fields = {
            [baseTableName]: this.config.fields,
          };
        }
        if (typeof tableName === "string" && !is(table, SQL)) {
          const selection = is(table, Subquery)
            ? table._.selectedFields
            : is(table, View)
              ? table[ViewBaseConfig].selectedFields
              : table[Table.Symbol.Columns];
          this.config.fields[tableName] = selection;
        }
      }
      if (typeof on === "function") {
        on = on(
          new Proxy(
            this.config.fields,
            new SelectionProxyHandler({
              sqlAliasedBehavior: "sql",
              sqlBehavior: "sql",
            }),
          ),
        );
      }
      if (!this.config.joins) {
        this.config.joins = [];
      }
      this.config.joins.push({ on, table, joinType, alias: tableName });
      if (typeof tableName === "string") {
        switch (joinType) {
          case "left": {
            this.joinsNotNullableMap[tableName] = false;
            break;
          }
          case "right": {
            this.joinsNotNullableMap = Object.fromEntries(
              Object.entries(this.joinsNotNullableMap).map(([key]) => [
                key,
                false,
              ]),
            );
            this.joinsNotNullableMap[tableName] = true;
            break;
          }
          case "inner": {
            this.joinsNotNullableMap[tableName] = true;
            break;
          }
          case "full": {
            this.joinsNotNullableMap = Object.fromEntries(
              Object.entries(this.joinsNotNullableMap).map(([key]) => [
                key,
                false,
              ]),
            );
            this.joinsNotNullableMap[tableName] = false;
            break;
          }
        }
      }
      return this;
    };
  }
  /**
   * Executes a `left join` operation by adding another table to the current query.
   *
   * Calling this method associates each row of the table with the corresponding row from the joined table, if a match is found. If no matching row exists, it sets all columns of the joined table to null.
   *
   * See docs: {@link https://orm.drizzle.team/docs/joins#left-join}
   *
   * @param table the table to join.
   * @param on the `on` clause.
   *
   * @example
   *
   * ```ts
   * // Select all users and their pets
   * const usersWithPets: { user: User; pets: Pet | null }[] = await db.select()
   *   .from(users)
   *   .leftJoin(pets, eq(users.id, pets.ownerId))
   *
   * // Select userId and petId
   * const usersIdsAndPetIds: { userId: number; petId: number | null }[] = await db.select({
   *   userId: users.id,
   *   petId: pets.id,
   * })
   *   .from(users)
   *   .leftJoin(pets, eq(users.id, pets.ownerId))
   * ```
   */
  leftJoin = this.createJoin("left");
  /**
   * Executes a `right join` operation by adding another table to the current query.
   *
   * Calling this method associates each row of the joined table with the corresponding row from the main table, if a match is found. If no matching row exists, it sets all columns of the main table to null.
   *
   * See docs: {@link https://orm.drizzle.team/docs/joins#right-join}
   *
   * @param table the table to join.
   * @param on the `on` clause.
   *
   * @example
   *
   * ```ts
   * // Select all users and their pets
   * const usersWithPets: { user: User | null; pets: Pet }[] = await db.select()
   *   .from(users)
   *   .rightJoin(pets, eq(users.id, pets.ownerId))
   *
   * // Select userId and petId
   * const usersIdsAndPetIds: { userId: number | null; petId: number }[] = await db.select({
   *   userId: users.id,
   *   petId: pets.id,
   * })
   *   .from(users)
   *   .rightJoin(pets, eq(users.id, pets.ownerId))
   * ```
   */
  rightJoin = this.createJoin("right");
  /**
   * Executes an `inner join` operation, creating a new table by combining rows from two tables that have matching values.
   *
   * Calling this method retrieves rows that have corresponding entries in both joined tables. Rows without matching entries in either table are excluded, resulting in a table that includes only matching pairs.
   *
   * See docs: {@link https://orm.drizzle.team/docs/joins#inner-join}
   *
   * @param table the table to join.
   * @param on the `on` clause.
   *
   * @example
   *
   * ```ts
   * // Select all users and their pets
   * const usersWithPets: { user: User; pets: Pet }[] = await db.select()
   *   .from(users)
   *   .innerJoin(pets, eq(users.id, pets.ownerId))
   *
   * // Select userId and petId
   * const usersIdsAndPetIds: { userId: number; petId: number }[] = await db.select({
   *   userId: users.id,
   *   petId: pets.id,
   * })
   *   .from(users)
   *   .innerJoin(pets, eq(users.id, pets.ownerId))
   * ```
   */
  innerJoin = this.createJoin("inner");
  /**
   * Executes a `full join` operation by combining rows from two tables into a new table.
   *
   * Calling this method retrieves all rows from both main and joined tables, merging rows with matching values and filling in `null` for non-matching columns.
   *
   * See docs: {@link https://orm.drizzle.team/docs/joins#full-join}
   *
   * @param table the table to join.
   * @param on the `on` clause.
   *
   * @example
   *
   * ```ts
   * // Select all users and their pets
   * const usersWithPets: { user: User | null; pets: Pet | null }[] = await db.select()
   *   .from(users)
   *   .fullJoin(pets, eq(users.id, pets.ownerId))
   *
   * // Select userId and petId
   * const usersIdsAndPetIds: { userId: number | null; petId: number | null }[] = await db.select({
   *   userId: users.id,
   *   petId: pets.id,
   * })
   *   .from(users)
   *   .fullJoin(pets, eq(users.id, pets.ownerId))
   * ```
   */
  fullJoin = this.createJoin("full");
  createSetOperator(type, isAll) {
    return (rightSelection) => {
      const rightSelect =
        typeof rightSelection === "function"
          ? rightSelection(getPgSetOperators())
          : rightSelection;
      if (
        !haveSameKeys(this.getSelectedFields(), rightSelect.getSelectedFields())
      ) {
        throw new Error(
          "Set operator error (union / intersect / except): selected fields are not the same or are in a different order",
        );
      }
      this.config.setOperators.push({ type, isAll, rightSelect });
      return this;
    };
  }
  /**
   * Adds `union` set operator to the query.
   *
   * Calling this method will combine the result sets of the `select` statements and remove any duplicate rows that appear across them.
   *
   * See docs: {@link https://orm.drizzle.team/docs/set-operations#union}
   *
   * @example
   *
   * ```ts
   * // Select all unique names from customers and users tables
   * await db.select({ name: users.name })
   *   .from(users)
   *   .union(
   *     db.select({ name: customers.name }).from(customers)
   *   );
   * // or
   * import { union } from 'drizzle-orm/pg-core'
   *
   * await union(
   *   db.select({ name: users.name }).from(users),
   *   db.select({ name: customers.name }).from(customers)
   * );
   * ```
   */
  union = this.createSetOperator("union", false);
  /**
   * Adds `union all` set operator to the query.
   *
   * Calling this method will combine the result-set of the `select` statements and keep all duplicate rows that appear across them.
   *
   * See docs: {@link https://orm.drizzle.team/docs/set-operations#union-all}
   *
   * @example
   *
   * ```ts
   * // Select all transaction ids from both online and in-store sales
   * await db.select({ transaction: onlineSales.transactionId })
   *   .from(onlineSales)
   *   .unionAll(
   *     db.select({ transaction: inStoreSales.transactionId }).from(inStoreSales)
   *   );
   * // or
   * import { unionAll } from 'drizzle-orm/pg-core'
   *
   * await unionAll(
   *   db.select({ transaction: onlineSales.transactionId }).from(onlineSales),
   *   db.select({ transaction: inStoreSales.transactionId }).from(inStoreSales)
   * );
   * ```
   */
  unionAll = this.createSetOperator("union", true);
  /**
   * Adds `intersect` set operator to the query.
   *
   * Calling this method will retain only the rows that are present in both result sets and eliminate duplicates.
   *
   * See docs: {@link https://orm.drizzle.team/docs/set-operations#intersect}
   *
   * @example
   *
   * ```ts
   * // Select course names that are offered in both departments A and B
   * await db.select({ courseName: depA.courseName })
   *   .from(depA)
   *   .intersect(
   *     db.select({ courseName: depB.courseName }).from(depB)
   *   );
   * // or
   * import { intersect } from 'drizzle-orm/pg-core'
   *
   * await intersect(
   *   db.select({ courseName: depA.courseName }).from(depA),
   *   db.select({ courseName: depB.courseName }).from(depB)
   * );
   * ```
   */
  intersect = this.createSetOperator("intersect", false);
  /**
   * Adds `intersect all` set operator to the query.
   *
   * Calling this method will retain only the rows that are present in both result sets including all duplicates.
   *
   * See docs: {@link https://orm.drizzle.team/docs/set-operations#intersect-all}
   *
   * @example
   *
   * ```ts
   * // Select all products and quantities that are ordered by both regular and VIP customers
   * await db.select({
   *   productId: regularCustomerOrders.productId,
   *   quantityOrdered: regularCustomerOrders.quantityOrdered
   * })
   * .from(regularCustomerOrders)
   * .intersectAll(
   *   db.select({
   *     productId: vipCustomerOrders.productId,
   *     quantityOrdered: vipCustomerOrders.quantityOrdered
   *   })
   *   .from(vipCustomerOrders)
   * );
   * // or
   * import { intersectAll } from 'drizzle-orm/pg-core'
   *
   * await intersectAll(
   *   db.select({
   *     productId: regularCustomerOrders.productId,
   *     quantityOrdered: regularCustomerOrders.quantityOrdered
   *   })
   *   .from(regularCustomerOrders),
   *   db.select({
   *     productId: vipCustomerOrders.productId,
   *     quantityOrdered: vipCustomerOrders.quantityOrdered
   *   })
   *   .from(vipCustomerOrders)
   * );
   * ```
   */
  intersectAll = this.createSetOperator("intersect", true);
  /**
   * Adds `except` set operator to the query.
   *
   * Calling this method will retrieve all unique rows from the left query, except for the rows that are present in the result set of the right query.
   *
   * See docs: {@link https://orm.drizzle.team/docs/set-operations#except}
   *
   * @example
   *
   * ```ts
   * // Select all courses offered in department A but not in department B
   * await db.select({ courseName: depA.courseName })
   *   .from(depA)
   *   .except(
   *     db.select({ courseName: depB.courseName }).from(depB)
   *   );
   * // or
   * import { except } from 'drizzle-orm/pg-core'
   *
   * await except(
   *   db.select({ courseName: depA.courseName }).from(depA),
   *   db.select({ courseName: depB.courseName }).from(depB)
   * );
   * ```
   */
  except = this.createSetOperator("except", false);
  /**
   * Adds `except all` set operator to the query.
   *
   * Calling this method will retrieve all rows from the left query, except for the rows that are present in the result set of the right query.
   *
   * See docs: {@link https://orm.drizzle.team/docs/set-operations#except-all}
   *
   * @example
   *
   * ```ts
   * // Select all products that are ordered by regular customers but not by VIP customers
   * await db.select({
   *   productId: regularCustomerOrders.productId,
   *   quantityOrdered: regularCustomerOrders.quantityOrdered,
   * })
   * .from(regularCustomerOrders)
   * .exceptAll(
   *   db.select({
   *     productId: vipCustomerOrders.productId,
   *     quantityOrdered: vipCustomerOrders.quantityOrdered,
   *   })
   *   .from(vipCustomerOrders)
   * );
   * // or
   * import { exceptAll } from 'drizzle-orm/pg-core'
   *
   * await exceptAll(
   *   db.select({
   *     productId: regularCustomerOrders.productId,
   *     quantityOrdered: regularCustomerOrders.quantityOrdered
   *   })
   *   .from(regularCustomerOrders),
   *   db.select({
   *     productId: vipCustomerOrders.productId,
   *     quantityOrdered: vipCustomerOrders.quantityOrdered
   *   })
   *   .from(vipCustomerOrders)
   * );
   * ```
   */
  exceptAll = this.createSetOperator("except", true);
  /** @internal */
  addSetOperators(setOperators) {
    this.config.setOperators.push(...setOperators);
    return this;
  }
  /**
   * Adds a `where` clause to the query.
   *
   * Calling this method will select only those rows that fulfill a specified condition.
   *
   * See docs: {@link https://orm.drizzle.team/docs/select#filtering}
   *
   * @param where the `where` clause.
   *
   * @example
   * You can use conditional operators and `sql function` to filter the rows to be selected.
   *
   * ```ts
   * // Select all cars with green color
   * await db.select().from(cars).where(eq(cars.color, 'green'));
   * // or
   * await db.select().from(cars).where(sql`${cars.color} = 'green'`)
   * ```
   *
   * You can logically combine conditional operators with `and()` and `or()` operators:
   *
   * ```ts
   * // Select all BMW cars with a green color
   * await db.select().from(cars).where(and(eq(cars.color, 'green'), eq(cars.brand, 'BMW')));
   *
   * // Select all cars with the green or blue color
   * await db.select().from(cars).where(or(eq(cars.color, 'green'), eq(cars.color, 'blue')));
   * ```
   */
  where(where) {
    if (typeof where === "function") {
      where = where(
        new Proxy(
          this.config.fields,
          new SelectionProxyHandler({
            sqlAliasedBehavior: "sql",
            sqlBehavior: "sql",
          }),
        ),
      );
    }
    this.config.where = where;
    return this;
  }
  /**
   * Adds a `having` clause to the query.
   *
   * Calling this method will select only those rows that fulfill a specified condition. It is typically used with aggregate functions to filter the aggregated data based on a specified condition.
   *
   * See docs: {@link https://orm.drizzle.team/docs/select#aggregations}
   *
   * @param having the `having` clause.
   *
   * @example
   *
   * ```ts
   * // Select all brands with more than one car
   * await db.select({
   * 	brand: cars.brand,
   * 	count: sql<number>`cast(count(${cars.id}) as int)`,
   * })
   *   .from(cars)
   *   .groupBy(cars.brand)
   *   .having(({ count }) => gt(count, 1));
   * ```
   */
  having(having) {
    if (typeof having === "function") {
      having = having(
        new Proxy(
          this.config.fields,
          new SelectionProxyHandler({
            sqlAliasedBehavior: "sql",
            sqlBehavior: "sql",
          }),
        ),
      );
    }
    this.config.having = having;
    return this;
  }
  groupBy(...columns) {
    if (typeof columns[0] === "function") {
      const groupBy = columns[0](
        new Proxy(
          this.config.fields,
          new SelectionProxyHandler({
            sqlAliasedBehavior: "alias",
            sqlBehavior: "sql",
          }),
        ),
      );
      this.config.groupBy = Array.isArray(groupBy) ? groupBy : [groupBy];
    } else {
      this.config.groupBy = columns;
    }
    return this;
  }
  orderBy(...columns) {
    if (typeof columns[0] === "function") {
      const orderBy = columns[0](
        new Proxy(
          this.config.fields,
          new SelectionProxyHandler({
            sqlAliasedBehavior: "alias",
            sqlBehavior: "sql",
          }),
        ),
      );
      const orderByArray = Array.isArray(orderBy) ? orderBy : [orderBy];
      if (this.config.setOperators.length > 0) {
        this.config.setOperators.at(-1).orderBy = orderByArray;
      } else {
        this.config.orderBy = orderByArray;
      }
    } else {
      const orderByArray = columns;
      if (this.config.setOperators.length > 0) {
        this.config.setOperators.at(-1).orderBy = orderByArray;
      } else {
        this.config.orderBy = orderByArray;
      }
    }
    return this;
  }
  /**
   * Adds a `limit` clause to the query.
   *
   * Calling this method will set the maximum number of rows that will be returned by this query.
   *
   * See docs: {@link https://orm.drizzle.team/docs/select#limit--offset}
   *
   * @param limit the `limit` clause.
   *
   * @example
   *
   * ```ts
   * // Get the first 10 people from this query.
   * await db.select().from(people).limit(10);
   * ```
   */
  limit(limit) {
    if (this.config.setOperators.length > 0) {
      this.config.setOperators.at(-1).limit = limit;
    } else {
      this.config.limit = limit;
    }
    return this;
  }
  /**
   * Adds an `offset` clause to the query.
   *
   * Calling this method will skip a number of rows when returning results from this query.
   *
   * See docs: {@link https://orm.drizzle.team/docs/select#limit--offset}
   *
   * @param offset the `offset` clause.
   *
   * @example
   *
   * ```ts
   * // Get the 10th-20th people from this query.
   * await db.select().from(people).offset(10).limit(10);
   * ```
   */
  offset(offset) {
    if (this.config.setOperators.length > 0) {
      this.config.setOperators.at(-1).offset = offset;
    } else {
      this.config.offset = offset;
    }
    return this;
  }
  /**
   * Adds a `for` clause to the query.
   *
   * Calling this method will specify a lock strength for this query that controls how strictly it acquires exclusive access to the rows being queried.
   *
   * See docs: {@link https://www.postgresql.org/docs/current/sql-select.html#SQL-FOR-UPDATE-SHARE}
   *
   * @param strength the lock strength.
   * @param config the lock configuration.
   */
  for(strength, config = {}) {
    this.config.lockingClause = { strength, config };
    return this;
  }
  /** @internal */
  getSQL() {
    return this.dialect.buildSelectQuery(this.config);
  }
  toSQL() {
    const { typings: _typings, ...rest } = this.dialect.sqlToQuery(
      this.getSQL(),
    );
    return rest;
  }
  as(alias) {
    return new Proxy(
      new Subquery(this.getSQL(), this.config.fields, alias),
      new SelectionProxyHandler({
        alias,
        sqlAliasedBehavior: "alias",
        sqlBehavior: "error",
      }),
    );
  }
  /** @internal */
  getSelectedFields() {
    return new Proxy(
      this.config.fields,
      new SelectionProxyHandler({
        alias: this.tableName,
        sqlAliasedBehavior: "alias",
        sqlBehavior: "error",
      }),
    );
  }
  $dynamic() {
    return this;
  }
};
_a131 = entityKind;
__publicField(PgSelectQueryBuilderBase, _a131, "PgSelectQueryBuilder");
var _a132;
var PgSelectBase = class extends PgSelectQueryBuilderBase {
  /** @internal */
  _prepare(name) {
    const { session, config, dialect, joinsNotNullableMap } = this;
    if (!session) {
      throw new Error(
        "Cannot execute a query on a query builder. Please use a database instance instead.",
      );
    }
    return tracer.startActiveSpan("drizzle.prepareQuery", () => {
      const fieldsList = orderSelectedFields(config.fields);
      const query = session.prepareQuery(
        dialect.sqlToQuery(this.getSQL()),
        fieldsList,
        name,
        true,
      );
      query.joinsNotNullableMap = joinsNotNullableMap;
      return query;
    });
  }
  /**
   * Create a prepared statement for this query. This allows
   * the database to remember this query for the given session
   * and call it by name, rather than specifying the full query.
   *
   * {@link https://www.postgresql.org/docs/current/sql-prepare.html | Postgres prepare documentation}
   */
  prepare(name) {
    return this._prepare(name);
  }
  execute = (placeholderValues) => {
    return tracer.startActiveSpan("drizzle.operation", () => {
      return this._prepare().execute(placeholderValues);
    });
  };
};
_a132 = entityKind;
__publicField(PgSelectBase, _a132, "PgSelect");
applyMixins(PgSelectBase, [QueryPromise]);
function createSetOperator(type, isAll) {
  return (leftSelect, rightSelect, ...restSelects) => {
    const setOperators = [rightSelect, ...restSelects].map((select) => ({
      type,
      isAll,
      rightSelect: select,
    }));
    for (const setOperator of setOperators) {
      if (
        !haveSameKeys(
          leftSelect.getSelectedFields(),
          setOperator.rightSelect.getSelectedFields(),
        )
      ) {
        throw new Error(
          "Set operator error (union / intersect / except): selected fields are not the same or are in a different order",
        );
      }
    }
    return leftSelect.addSetOperators(setOperators);
  };
}
var getPgSetOperators = () => ({
  union,
  unionAll,
  intersect,
  intersectAll,
  except,
  exceptAll,
});
var union = createSetOperator("union", false);
var unionAll = createSetOperator("union", true);
var intersect = createSetOperator("intersect", false);
var intersectAll = createSetOperator("intersect", true);
var except = createSetOperator("except", false);
var exceptAll = createSetOperator("except", true);

// node_modules/drizzle-orm/pg-core/query-builders/query-builder.js
var _a133;
var QueryBuilder = class {
  dialect;
  dialectConfig;
  constructor(dialect) {
    this.dialect = is(dialect, PgDialect) ? dialect : void 0;
    this.dialectConfig = is(dialect, PgDialect) ? void 0 : dialect;
  }
  $with(alias) {
    const queryBuilder = this;
    return {
      as(qb) {
        if (typeof qb === "function") {
          qb = qb(queryBuilder);
        }
        return new Proxy(
          new WithSubquery(qb.getSQL(), qb.getSelectedFields(), alias, true),
          new SelectionProxyHandler({
            alias,
            sqlAliasedBehavior: "alias",
            sqlBehavior: "error",
          }),
        );
      },
    };
  }
  with(...queries) {
    const self = this;
    function select(fields) {
      return new PgSelectBuilder({
        fields: fields ?? void 0,
        session: void 0,
        dialect: self.getDialect(),
        withList: queries,
      });
    }
    function selectDistinct(fields) {
      return new PgSelectBuilder({
        fields: fields ?? void 0,
        session: void 0,
        dialect: self.getDialect(),
        distinct: true,
      });
    }
    function selectDistinctOn(on, fields) {
      return new PgSelectBuilder({
        fields: fields ?? void 0,
        session: void 0,
        dialect: self.getDialect(),
        distinct: { on },
      });
    }
    return { select, selectDistinct, selectDistinctOn };
  }
  select(fields) {
    return new PgSelectBuilder({
      fields: fields ?? void 0,
      session: void 0,
      dialect: this.getDialect(),
    });
  }
  selectDistinct(fields) {
    return new PgSelectBuilder({
      fields: fields ?? void 0,
      session: void 0,
      dialect: this.getDialect(),
      distinct: true,
    });
  }
  selectDistinctOn(on, fields) {
    return new PgSelectBuilder({
      fields: fields ?? void 0,
      session: void 0,
      dialect: this.getDialect(),
      distinct: { on },
    });
  }
  // Lazy load dialect to avoid circular dependency
  getDialect() {
    if (!this.dialect) {
      this.dialect = new PgDialect(this.dialectConfig);
    }
    return this.dialect;
  }
};
_a133 = entityKind;
__publicField(QueryBuilder, _a133, "PgQueryBuilder");

// node_modules/drizzle-orm/pg-core/query-builders/refresh-materialized-view.js
var _a134;
var PgRefreshMaterializedView = class extends QueryPromise {
  constructor(view, session, dialect) {
    super();
    this.session = session;
    this.dialect = dialect;
    this.config = { view };
  }
  config;
  concurrently() {
    if (this.config.withNoData !== void 0) {
      throw new Error("Cannot use concurrently and withNoData together");
    }
    this.config.concurrently = true;
    return this;
  }
  withNoData() {
    if (this.config.concurrently !== void 0) {
      throw new Error("Cannot use concurrently and withNoData together");
    }
    this.config.withNoData = true;
    return this;
  }
  /** @internal */
  getSQL() {
    return this.dialect.buildRefreshMaterializedViewQuery(this.config);
  }
  toSQL() {
    const { typings: _typings, ...rest } = this.dialect.sqlToQuery(
      this.getSQL(),
    );
    return rest;
  }
  /** @internal */
  _prepare(name) {
    return tracer.startActiveSpan("drizzle.prepareQuery", () => {
      return this.session.prepareQuery(
        this.dialect.sqlToQuery(this.getSQL()),
        void 0,
        name,
        true,
      );
    });
  }
  prepare(name) {
    return this._prepare(name);
  }
  execute = (placeholderValues) => {
    return tracer.startActiveSpan("drizzle.operation", () => {
      return this._prepare().execute(placeholderValues);
    });
  };
};
_a134 = entityKind;
__publicField(PgRefreshMaterializedView, _a134, "PgRefreshMaterializedView");

// node_modules/drizzle-orm/pg-core/query-builders/update.js
var _a135;
var PgUpdateBuilder = class {
  constructor(table, session, dialect, withList) {
    this.table = table;
    this.session = session;
    this.dialect = dialect;
    this.withList = withList;
  }
  set(values) {
    return new PgUpdateBase(
      this.table,
      mapUpdateSet(this.table, values),
      this.session,
      this.dialect,
      this.withList,
    );
  }
};
_a135 = entityKind;
__publicField(PgUpdateBuilder, _a135, "PgUpdateBuilder");
var _a136;
var PgUpdateBase = class extends QueryPromise {
  constructor(table, set, session, dialect, withList) {
    super();
    this.session = session;
    this.dialect = dialect;
    this.config = { set, table, withList };
  }
  config;
  /**
   * Adds a 'where' clause to the query.
   *
   * Calling this method will update only those rows that fulfill a specified condition.
   *
   * See docs: {@link https://orm.drizzle.team/docs/update}
   *
   * @param where the 'where' clause.
   *
   * @example
   * You can use conditional operators and `sql function` to filter the rows to be updated.
   *
   * ```ts
   * // Update all cars with green color
   * await db.update(cars).set({ color: 'red' })
   *   .where(eq(cars.color, 'green'));
   * // or
   * await db.update(cars).set({ color: 'red' })
   *   .where(sql`${cars.color} = 'green'`)
   * ```
   *
   * You can logically combine conditional operators with `and()` and `or()` operators:
   *
   * ```ts
   * // Update all BMW cars with a green color
   * await db.update(cars).set({ color: 'red' })
   *   .where(and(eq(cars.color, 'green'), eq(cars.brand, 'BMW')));
   *
   * // Update all cars with the green or blue color
   * await db.update(cars).set({ color: 'red' })
   *   .where(or(eq(cars.color, 'green'), eq(cars.color, 'blue')));
   * ```
   */
  where(where) {
    this.config.where = where;
    return this;
  }
  returning(fields = this.config.table[Table.Symbol.Columns]) {
    this.config.returning = orderSelectedFields(fields);
    return this;
  }
  /** @internal */
  getSQL() {
    return this.dialect.buildUpdateQuery(this.config);
  }
  toSQL() {
    const { typings: _typings, ...rest } = this.dialect.sqlToQuery(
      this.getSQL(),
    );
    return rest;
  }
  /** @internal */
  _prepare(name) {
    return this.session.prepareQuery(
      this.dialect.sqlToQuery(this.getSQL()),
      this.config.returning,
      name,
      true,
    );
  }
  prepare(name) {
    return this._prepare(name);
  }
  execute = (placeholderValues) => {
    return this._prepare().execute(placeholderValues);
  };
  $dynamic() {
    return this;
  }
};
_a136 = entityKind;
__publicField(PgUpdateBase, _a136, "PgUpdate");

// node_modules/drizzle-orm/pg-core/query-builders/count.js
var _a137;
var _PgCountBuilder = class extends SQL {
  constructor(params) {
    super(
      _PgCountBuilder.buildEmbeddedCount(params.source, params.filters)
        .queryChunks,
    );
    this.params = params;
    this.mapWith(Number);
    this.session = params.session;
    this.sql = _PgCountBuilder.buildCount(params.source, params.filters);
  }
  sql;
  [((_a137 = entityKind), Symbol.toStringTag)] = "PgCountBuilder";
  session;
  static buildEmbeddedCount(source, filters) {
    return sql`(select count(*) from ${source}${sql.raw(" where ").if(filters)}${filters})`;
  }
  static buildCount(source, filters) {
    return sql`select count(*) as count from ${source}${sql.raw(" where ").if(filters)}${filters};`;
  }
  then(onfulfilled, onrejected) {
    return Promise.resolve(this.session.count(this.sql)).then(
      onfulfilled,
      onrejected,
    );
  }
  catch(onRejected) {
    return this.then(void 0, onRejected);
  }
  finally(onFinally) {
    return this.then(
      (value) => {
        onFinally?.();
        return value;
      },
      (reason) => {
        onFinally?.();
        throw reason;
      },
    );
  }
};
var PgCountBuilder = _PgCountBuilder;
__publicField(PgCountBuilder, _a137, "PgCountBuilder");

// node_modules/drizzle-orm/pg-core/query-builders/query.js
var _a138;
var RelationalQueryBuilder = class {
  constructor(
    fullSchema,
    schema,
    tableNamesMap,
    table,
    tableConfig,
    dialect,
    session,
  ) {
    this.fullSchema = fullSchema;
    this.schema = schema;
    this.tableNamesMap = tableNamesMap;
    this.table = table;
    this.tableConfig = tableConfig;
    this.dialect = dialect;
    this.session = session;
  }
  findMany(config) {
    return new PgRelationalQuery(
      this.fullSchema,
      this.schema,
      this.tableNamesMap,
      this.table,
      this.tableConfig,
      this.dialect,
      this.session,
      config ? config : {},
      "many",
    );
  }
  findFirst(config) {
    return new PgRelationalQuery(
      this.fullSchema,
      this.schema,
      this.tableNamesMap,
      this.table,
      this.tableConfig,
      this.dialect,
      this.session,
      config ? { ...config, limit: 1 } : { limit: 1 },
      "first",
    );
  }
};
_a138 = entityKind;
__publicField(RelationalQueryBuilder, _a138, "PgRelationalQueryBuilder");
var _a139;
var PgRelationalQuery = class extends QueryPromise {
  constructor(
    fullSchema,
    schema,
    tableNamesMap,
    table,
    tableConfig,
    dialect,
    session,
    config,
    mode,
  ) {
    super();
    this.fullSchema = fullSchema;
    this.schema = schema;
    this.tableNamesMap = tableNamesMap;
    this.table = table;
    this.tableConfig = tableConfig;
    this.dialect = dialect;
    this.session = session;
    this.config = config;
    this.mode = mode;
  }
  /** @internal */
  _prepare(name) {
    return tracer.startActiveSpan("drizzle.prepareQuery", () => {
      const { query, builtQuery } = this._toSQL();
      return this.session.prepareQuery(
        builtQuery,
        void 0,
        name,
        true,
        (rawRows, mapColumnValue) => {
          const rows = rawRows.map((row) =>
            mapRelationalRow(
              this.schema,
              this.tableConfig,
              row,
              query.selection,
              mapColumnValue,
            ),
          );
          if (this.mode === "first") {
            return rows[0];
          }
          return rows;
        },
      );
    });
  }
  prepare(name) {
    return this._prepare(name);
  }
  _getQuery() {
    return this.dialect.buildRelationalQueryWithoutPK({
      fullSchema: this.fullSchema,
      schema: this.schema,
      tableNamesMap: this.tableNamesMap,
      table: this.table,
      tableConfig: this.tableConfig,
      queryConfig: this.config,
      tableAlias: this.tableConfig.tsName,
    });
  }
  /** @internal */
  getSQL() {
    return this._getQuery().sql;
  }
  _toSQL() {
    const query = this._getQuery();
    const builtQuery = this.dialect.sqlToQuery(query.sql);
    return { query, builtQuery };
  }
  toSQL() {
    return this._toSQL().builtQuery;
  }
  execute() {
    return tracer.startActiveSpan("drizzle.operation", () => {
      return this._prepare().execute();
    });
  }
};
_a139 = entityKind;
__publicField(PgRelationalQuery, _a139, "PgRelationalQuery");

// node_modules/drizzle-orm/pg-core/query-builders/raw.js
var _a140;
var PgRaw = class extends QueryPromise {
  constructor(execute, sql2, query, mapBatchResult) {
    super();
    this.execute = execute;
    this.sql = sql2;
    this.query = query;
    this.mapBatchResult = mapBatchResult;
  }
  /** @internal */
  getSQL() {
    return this.sql;
  }
  getQuery() {
    return this.query;
  }
  mapResult(result, isFromBatch) {
    return isFromBatch ? this.mapBatchResult(result) : result;
  }
  _prepare() {
    return this;
  }
  /** @internal */
  isResponseInArrayMode() {
    return false;
  }
};
_a140 = entityKind;
__publicField(PgRaw, _a140, "PgRaw");

// node_modules/drizzle-orm/pg-core/db.js
var _a141;
var PgDatabase = class {
  constructor(dialect, session, schema) {
    this.dialect = dialect;
    this.session = session;
    this._ = schema
      ? {
          schema: schema.schema,
          fullSchema: schema.fullSchema,
          tableNamesMap: schema.tableNamesMap,
          session,
        }
      : {
          schema: void 0,
          fullSchema: {},
          tableNamesMap: {},
          session,
        };
    this.query = {};
    if (this._.schema) {
      for (const [tableName, columns] of Object.entries(this._.schema)) {
        this.query[tableName] = new RelationalQueryBuilder(
          schema.fullSchema,
          this._.schema,
          this._.tableNamesMap,
          schema.fullSchema[tableName],
          columns,
          dialect,
          session,
        );
      }
    }
  }
  query;
  /**
   * Creates a subquery that defines a temporary named result set as a CTE.
   *
   * It is useful for breaking down complex queries into simpler parts and for reusing the result set in subsequent parts of the query.
   *
   * See docs: {@link https://orm.drizzle.team/docs/select#with-clause}
   *
   * @param alias The alias for the subquery.
   *
   * Failure to provide an alias will result in a DrizzleTypeError, preventing the subquery from being referenced in other queries.
   *
   * @example
   *
   * ```ts
   * // Create a subquery with alias 'sq' and use it in the select query
   * const sq = db.$with('sq').as(db.select().from(users).where(eq(users.id, 42)));
   *
   * const result = await db.with(sq).select().from(sq);
   * ```
   *
   * To select arbitrary SQL values as fields in a CTE and reference them in other CTEs or in the main query, you need to add aliases to them:
   *
   * ```ts
   * // Select an arbitrary SQL value as a field in a CTE and reference it in the main query
   * const sq = db.$with('sq').as(db.select({
   *   name: sql<string>`upper(${users.name})`.as('name'),
   * })
   * .from(users));
   *
   * const result = await db.with(sq).select({ name: sq.name }).from(sq);
   * ```
   */
  $with(alias) {
    const self = this;
    return {
      as(qb) {
        if (typeof qb === "function") {
          qb = qb(new QueryBuilder(self.dialect));
        }
        return new Proxy(
          new WithSubquery(qb.getSQL(), qb.getSelectedFields(), alias, true),
          new SelectionProxyHandler({
            alias,
            sqlAliasedBehavior: "alias",
            sqlBehavior: "error",
          }),
        );
      },
    };
  }
  $count(source, filters) {
    return new PgCountBuilder({ source, filters, session: this.session });
  }
  /**
   * Incorporates a previously defined CTE (using `$with`) into the main query.
   *
   * This method allows the main query to reference a temporary named result set.
   *
   * See docs: {@link https://orm.drizzle.team/docs/select#with-clause}
   *
   * @param queries The CTEs to incorporate into the main query.
   *
   * @example
   *
   * ```ts
   * // Define a subquery 'sq' as a CTE using $with
   * const sq = db.$with('sq').as(db.select().from(users).where(eq(users.id, 42)));
   *
   * // Incorporate the CTE 'sq' into the main query and select from it
   * const result = await db.with(sq).select().from(sq);
   * ```
   */
  with(...queries) {
    const self = this;
    function select(fields) {
      return new PgSelectBuilder({
        fields: fields ?? void 0,
        session: self.session,
        dialect: self.dialect,
        withList: queries,
      });
    }
    function selectDistinct(fields) {
      return new PgSelectBuilder({
        fields: fields ?? void 0,
        session: self.session,
        dialect: self.dialect,
        withList: queries,
        distinct: true,
      });
    }
    function selectDistinctOn(on, fields) {
      return new PgSelectBuilder({
        fields: fields ?? void 0,
        session: self.session,
        dialect: self.dialect,
        withList: queries,
        distinct: { on },
      });
    }
    function update(table) {
      return new PgUpdateBuilder(table, self.session, self.dialect, queries);
    }
    function insert(table) {
      return new PgInsertBuilder(table, self.session, self.dialect, queries);
    }
    function delete_(table) {
      return new PgDeleteBase(table, self.session, self.dialect, queries);
    }
    return {
      select,
      selectDistinct,
      selectDistinctOn,
      update,
      insert,
      delete: delete_,
    };
  }
  select(fields) {
    return new PgSelectBuilder({
      fields: fields ?? void 0,
      session: this.session,
      dialect: this.dialect,
    });
  }
  selectDistinct(fields) {
    return new PgSelectBuilder({
      fields: fields ?? void 0,
      session: this.session,
      dialect: this.dialect,
      distinct: true,
    });
  }
  selectDistinctOn(on, fields) {
    return new PgSelectBuilder({
      fields: fields ?? void 0,
      session: this.session,
      dialect: this.dialect,
      distinct: { on },
    });
  }
  /**
   * Creates an update query.
   *
   * Calling this method without `.where()` clause will update all rows in a table. The `.where()` clause specifies which rows should be updated.
   *
   * Use `.set()` method to specify which values to update.
   *
   * See docs: {@link https://orm.drizzle.team/docs/update}
   *
   * @param table The table to update.
   *
   * @example
   *
   * ```ts
   * // Update all rows in the 'cars' table
   * await db.update(cars).set({ color: 'red' });
   *
   * // Update rows with filters and conditions
   * await db.update(cars).set({ color: 'red' }).where(eq(cars.brand, 'BMW'));
   *
   * // Update with returning clause
   * const updatedCar: Car[] = await db.update(cars)
   *   .set({ color: 'red' })
   *   .where(eq(cars.id, 1))
   *   .returning();
   * ```
   */
  update(table) {
    return new PgUpdateBuilder(table, this.session, this.dialect);
  }
  /**
   * Creates an insert query.
   *
   * Calling this method will create new rows in a table. Use `.values()` method to specify which values to insert.
   *
   * See docs: {@link https://orm.drizzle.team/docs/insert}
   *
   * @param table The table to insert into.
   *
   * @example
   *
   * ```ts
   * // Insert one row
   * await db.insert(cars).values({ brand: 'BMW' });
   *
   * // Insert multiple rows
   * await db.insert(cars).values([{ brand: 'BMW' }, { brand: 'Porsche' }]);
   *
   * // Insert with returning clause
   * const insertedCar: Car[] = await db.insert(cars)
   *   .values({ brand: 'BMW' })
   *   .returning();
   * ```
   */
  insert(table) {
    return new PgInsertBuilder(table, this.session, this.dialect);
  }
  /**
   * Creates a delete query.
   *
   * Calling this method without `.where()` clause will delete all rows in a table. The `.where()` clause specifies which rows should be deleted.
   *
   * See docs: {@link https://orm.drizzle.team/docs/delete}
   *
   * @param table The table to delete from.
   *
   * @example
   *
   * ```ts
   * // Delete all rows in the 'cars' table
   * await db.delete(cars);
   *
   * // Delete rows with filters and conditions
   * await db.delete(cars).where(eq(cars.color, 'green'));
   *
   * // Delete with returning clause
   * const deletedCar: Car[] = await db.delete(cars)
   *   .where(eq(cars.id, 1))
   *   .returning();
   * ```
   */
  delete(table) {
    return new PgDeleteBase(table, this.session, this.dialect);
  }
  refreshMaterializedView(view) {
    return new PgRefreshMaterializedView(view, this.session, this.dialect);
  }
  execute(query) {
    const sequel = typeof query === "string" ? sql.raw(query) : query.getSQL();
    const builtQuery = this.dialect.sqlToQuery(sequel);
    const prepared = this.session.prepareQuery(
      builtQuery,
      void 0,
      void 0,
      false,
    );
    return new PgRaw(
      () => prepared.execute(),
      sequel,
      builtQuery,
      (result) => prepared.mapResult(result, true),
    );
  }
  transaction(transaction, config) {
    return this.session.transaction(transaction, config);
  }
};
_a141 = entityKind;
__publicField(PgDatabase, _a141, "PgDatabase");

// node_modules/drizzle-orm/pg-core/session.js
var _a142;
var PgPreparedQuery = class {
  constructor(query) {
    this.query = query;
  }
  getQuery() {
    return this.query;
  }
  mapResult(response, _isFromBatch) {
    return response;
  }
  /** @internal */
  joinsNotNullableMap;
};
_a142 = entityKind;
__publicField(PgPreparedQuery, _a142, "PgPreparedQuery");
var _a143;
var PgSession = class {
  constructor(dialect) {
    this.dialect = dialect;
  }
  execute(query) {
    return tracer.startActiveSpan("drizzle.operation", () => {
      const prepared = tracer.startActiveSpan("drizzle.prepareQuery", () => {
        return this.prepareQuery(
          this.dialect.sqlToQuery(query),
          void 0,
          void 0,
          false,
        );
      });
      return prepared.execute();
    });
  }
  all(query) {
    return this.prepareQuery(
      this.dialect.sqlToQuery(query),
      void 0,
      void 0,
      false,
    ).all();
  }
  async count(sql2) {
    const res = await this.execute(sql2);
    return Number(res[0]["count"]);
  }
};
_a143 = entityKind;
__publicField(PgSession, _a143, "PgSession");
var _a144;
var PgTransaction = class extends PgDatabase {
  constructor(dialect, session, schema, nestedIndex = 0) {
    super(dialect, session, schema);
    this.schema = schema;
    this.nestedIndex = nestedIndex;
  }
  rollback() {
    throw new TransactionRollbackError();
  }
  /** @internal */
  getTransactionConfigSQL(config) {
    const chunks = [];
    if (config.isolationLevel) {
      chunks.push(`isolation level ${config.isolationLevel}`);
    }
    if (config.accessMode) {
      chunks.push(config.accessMode);
    }
    if (typeof config.deferrable === "boolean") {
      chunks.push(config.deferrable ? "deferrable" : "not deferrable");
    }
    return sql.raw(chunks.join(" "));
  }
  setTransaction(config) {
    return this.session.execute(
      sql`set transaction ${this.getTransactionConfigSQL(config)}`,
    );
  }
};
_a144 = entityKind;
__publicField(PgTransaction, _a144, "PgTransaction");

// node_modules/drizzle-orm/neon-http/session.js
var rawQueryConfig = {
  arrayMode: false,
  fullResults: true,
};
var queryConfig = {
  arrayMode: true,
  fullResults: true,
};
var _a145;
var NeonHttpPreparedQuery = class extends PgPreparedQuery {
  constructor(
    client,
    query,
    logger,
    fields,
    _isResponseInArrayMode,
    customResultMapper,
  ) {
    super(query);
    this.client = client;
    this.logger = logger;
    this.fields = fields;
    this._isResponseInArrayMode = _isResponseInArrayMode;
    this.customResultMapper = customResultMapper;
  }
  async execute(placeholderValues = {}) {
    const params = fillPlaceholders(this.query.params, placeholderValues);
    this.logger.logQuery(this.query.sql, params);
    const { fields, client, query, customResultMapper } = this;
    if (!fields && !customResultMapper) {
      return client(query.sql, params, rawQueryConfig);
    }
    const result = await client(query.sql, params, queryConfig);
    return this.mapResult(result);
  }
  mapResult(result) {
    if (!this.fields && !this.customResultMapper) {
      return result;
    }
    const rows = result.rows;
    if (this.customResultMapper) {
      return this.customResultMapper(rows);
    }
    return rows.map((row) =>
      mapResultRow(this.fields, row, this.joinsNotNullableMap),
    );
  }
  all(placeholderValues = {}) {
    const params = fillPlaceholders(this.query.params, placeholderValues);
    this.logger.logQuery(this.query.sql, params);
    return this.client(this.query.sql, params, rawQueryConfig).then(
      (result) => result.rows,
    );
  }
  values(placeholderValues = {}) {
    const params = fillPlaceholders(this.query.params, placeholderValues);
    this.logger.logQuery(this.query.sql, params);
    return this.client(this.query.sql, params, {
      arrayMode: true,
      fullResults: true,
    }).then((result) => result.rows);
  }
  /** @internal */
  isResponseInArrayMode() {
    return this._isResponseInArrayMode;
  }
};
_a145 = entityKind;
__publicField(NeonHttpPreparedQuery, _a145, "NeonHttpPreparedQuery");
var _a146;
var NeonHttpSession = class extends PgSession {
  constructor(client, dialect, schema, options = {}) {
    super(dialect);
    this.client = client;
    this.schema = schema;
    this.options = options;
    this.logger = options.logger ?? new NoopLogger();
  }
  logger;
  prepareQuery(query, fields, name, isResponseInArrayMode, customResultMapper) {
    return new NeonHttpPreparedQuery(
      this.client,
      query,
      this.logger,
      fields,
      isResponseInArrayMode,
      customResultMapper,
    );
  }
  async batch(queries) {
    const preparedQueries = [];
    const builtQueries = [];
    for (const query of queries) {
      const preparedQuery = query._prepare();
      const builtQuery = preparedQuery.getQuery();
      preparedQueries.push(preparedQuery);
      builtQueries.push(
        this.client(builtQuery.sql, builtQuery.params, {
          fullResults: true,
          arrayMode: preparedQuery.isResponseInArrayMode(),
        }),
      );
    }
    const batchResults = await this.client.transaction(
      builtQueries,
      queryConfig,
    );
    return batchResults.map((result, i) =>
      preparedQueries[i].mapResult(result, true),
    );
  }
  // change return type to QueryRows<true>
  async query(query, params) {
    this.logger.logQuery(query, params);
    const result = await this.client(query, params, {
      arrayMode: true,
      fullResults: true,
    });
    return result;
  }
  // change return type to QueryRows<false>
  async queryObjects(query, params) {
    return this.client(query, params, { arrayMode: false, fullResults: true });
  }
  async count(sql2) {
    const res = await this.execute(sql2);
    return Number(res["rows"][0]["count"]);
  }
  async transaction(_transaction, _config = {}) {
    throw new Error("No transactions support in neon-http driver");
  }
};
_a146 = entityKind;
__publicField(NeonHttpSession, _a146, "NeonHttpSession");
var _a147;
var NeonTransaction = class extends PgTransaction {
  async transaction(_transaction) {
    throw new Error("No transactions support in neon-http driver");
  }
};
_a147 = entityKind;
__publicField(NeonTransaction, _a147, "NeonHttpTransaction");

// node_modules/drizzle-orm/neon-http/driver.js
var _a148;
var NeonHttpDriver = class {
  constructor(client, dialect, options = {}) {
    this.client = client;
    this.dialect = dialect;
    this.options = options;
    this.initMappers();
  }
  createSession(schema) {
    return new NeonHttpSession(this.client, this.dialect, schema, {
      logger: this.options.logger,
    });
  }
  initMappers() {
    export_types.setTypeParser(export_types.builtins.TIMESTAMPTZ, (val) => val);
    export_types.setTypeParser(export_types.builtins.TIMESTAMP, (val) => val);
    export_types.setTypeParser(export_types.builtins.DATE, (val) => val);
    export_types.setTypeParser(export_types.builtins.INTERVAL, (val) => val);
  }
};
_a148 = entityKind;
__publicField(NeonHttpDriver, _a148, "NeonDriver");
var _a149;
var NeonHttpDatabase = class extends PgDatabase {
  async batch(batch) {
    return this.session.batch(batch);
  }
};
_a149 = entityKind;
__publicField(NeonHttpDatabase, _a149, "NeonHttpDatabase");
function construct(client, config = {}) {
  const dialect = new PgDialect({ casing: config.casing });
  let logger;
  if (config.logger === true) {
    logger = new DefaultLogger();
  } else if (config.logger !== false) {
    logger = config.logger;
  }
  let schema;
  if (config.schema) {
    const tablesConfig = extractTablesRelationalConfig(
      config.schema,
      createTableRelationsHelpers,
    );
    schema = {
      fullSchema: config.schema,
      schema: tablesConfig.tables,
      tableNamesMap: tablesConfig.tableNamesMap,
    };
  }
  const driver = new NeonHttpDriver(client, dialect, { logger });
  const session = driver.createSession(schema);
  const db = new NeonHttpDatabase(dialect, session, schema);
  db.$client = client;
  return db;
}
function drizzle(...params) {
  if (typeof params[0] === "string") {
    const instance = Xs(params[0]);
    return construct(instance, params[1]);
  }
  if (isConfig(params[0])) {
    const { connection, client, ...drizzleConfig } = params[0];
    if (client) return construct(client, drizzleConfig);
    if (typeof connection === "object") {
      const { connectionString, ...options } = connection;
      const instance2 = Xs(connectionString, options);
      return construct(instance2, drizzleConfig);
    }
    const instance = Xs(connection);
    return construct(instance, drizzleConfig);
  }
  return construct(params[0], params[1]);
}
((drizzle2) => {
  function mock(config) {
    return construct({}, config);
  }
  drizzle2.mock = mock;
})(drizzle || (drizzle = {}));

// node_modules/hono/dist/utils/body.js
var parseBody = async (
  request,
  options = /* @__PURE__ */ Object.create(null),
) => {
  const { all = false, dot = false } = options;
  const headers =
    request instanceof HonoRequest ? request.raw.headers : request.headers;
  const contentType = headers.get("Content-Type");
  if (
    contentType?.startsWith("multipart/form-data") ||
    contentType?.startsWith("application/x-www-form-urlencoded")
  ) {
    return parseFormData(request, { all, dot });
  }
  return {};
};
async function parseFormData(request, options) {
  const formData = await request.formData();
  if (formData) {
    return convertFormDataToBodyData(formData, options);
  }
  return {};
}
function convertFormDataToBodyData(formData, options) {
  const form = /* @__PURE__ */ Object.create(null);
  formData.forEach((value, key) => {
    const shouldParseAllValues = options.all || key.endsWith("[]");
    if (!shouldParseAllValues) {
      form[key] = value;
    } else {
      handleParsingAllValues(form, key, value);
    }
  });
  if (options.dot) {
    Object.entries(form).forEach(([key, value]) => {
      const shouldParseDotValues = key.includes(".");
      if (shouldParseDotValues) {
        handleParsingNestedValues(form, key, value);
        delete form[key];
      }
    });
  }
  return form;
}
var handleParsingAllValues = (form, key, value) => {
  if (form[key] !== void 0) {
    if (Array.isArray(form[key])) {
      form[key].push(value);
    } else {
      form[key] = [form[key], value];
    }
  } else {
    form[key] = value;
  }
};
var handleParsingNestedValues = (form, key, value) => {
  let nestedForm = form;
  const keys = key.split(".");
  keys.forEach((key2, index) => {
    if (index === keys.length - 1) {
      nestedForm[key2] = value;
    } else {
      if (
        !nestedForm[key2] ||
        typeof nestedForm[key2] !== "object" ||
        Array.isArray(nestedForm[key2]) ||
        nestedForm[key2] instanceof File
      ) {
        nestedForm[key2] = /* @__PURE__ */ Object.create(null);
      }
      nestedForm = nestedForm[key2];
    }
  });
};

// node_modules/hono/dist/utils/url.js
var splitPath = (path) => {
  const paths = path.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  return paths;
};
var splitRoutingPath = (routePath) => {
  const { groups, path } = extractGroupsFromPath(routePath);
  const paths = splitPath(path);
  return replaceGroupMarks(paths, groups);
};
var extractGroupsFromPath = (path) => {
  const groups = [];
  path = path.replace(/\{[^}]+\}/g, (match, index) => {
    const mark = `@${index}`;
    groups.push([mark, match]);
    return mark;
  });
  return { groups, path };
};
var replaceGroupMarks = (paths, groups) => {
  for (let i = groups.length - 1; i >= 0; i--) {
    const [mark] = groups[i];
    for (let j = paths.length - 1; j >= 0; j--) {
      if (paths[j].includes(mark)) {
        paths[j] = paths[j].replace(mark, groups[i][1]);
        break;
      }
    }
  }
  return paths;
};
var patternCache = {};
var getPattern = (label) => {
  if (label === "*") {
    return "*";
  }
  const match = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match) {
    if (!patternCache[label]) {
      if (match[2]) {
        patternCache[label] = [
          label,
          match[1],
          new RegExp("^" + match[2] + "$"),
        ];
      } else {
        patternCache[label] = [label, match[1], true];
      }
    }
    return patternCache[label];
  }
  return null;
};
var tryDecode = (str, decoder) => {
  try {
    return decoder(str);
  } catch {
    return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match) => {
      try {
        return decoder(match);
      } catch {
        return match;
      }
    });
  }
};
var tryDecodeURI = (str) => tryDecode(str, decodeURI);
var getPath = (request) => {
  const url = request.url;
  const start = url.indexOf("/", 8);
  let i = start;
  for (; i < url.length; i++) {
    const charCode = url.charCodeAt(i);
    if (charCode === 37) {
      const queryIndex = url.indexOf("?", i);
      const path = url.slice(start, queryIndex === -1 ? void 0 : queryIndex);
      return tryDecodeURI(
        path.includes("%25") ? path.replace(/%25/g, "%2525") : path,
      );
    } else if (charCode === 63) {
      break;
    }
  }
  return url.slice(start, i);
};
var getPathNoStrict = (request) => {
  const result = getPath(request);
  return result.length > 1 && result[result.length - 1] === "/"
    ? result.slice(0, -1)
    : result;
};
var mergePath = (...paths) => {
  let p2 = "";
  let endsWithSlash = false;
  for (let path of paths) {
    if (p2[p2.length - 1] === "/") {
      p2 = p2.slice(0, -1);
      endsWithSlash = true;
    }
    if (path[0] !== "/") {
      path = `/${path}`;
    }
    if (path === "/" && endsWithSlash) {
      p2 = `${p2}/`;
    } else if (path !== "/") {
      p2 = `${p2}${path}`;
    }
    if (path === "/" && p2 === "") {
      p2 = "/";
    }
  }
  return p2;
};
var checkOptionalParameter = (path) => {
  if (!path.match(/\:.+\?$/)) {
    return null;
  }
  const segments = path.split("/");
  const results = [];
  let basePath = "";
  segments.forEach((segment) => {
    if (segment !== "" && !/\:/.test(segment)) {
      basePath += "/" + segment;
    } else if (/\:/.test(segment)) {
      if (/\?/.test(segment)) {
        if (results.length === 0 && basePath === "") {
          results.push("/");
        } else {
          results.push(basePath);
        }
        const optionalSegment = segment.replace("?", "");
        basePath += "/" + optionalSegment;
        results.push(basePath);
      } else {
        basePath += "/" + segment;
      }
    }
  });
  return results.filter((v2, i, a2) => a2.indexOf(v2) === i);
};
var _decodeURI = (value) => {
  if (!/[%+]/.test(value)) {
    return value;
  }
  if (value.indexOf("+") !== -1) {
    value = value.replace(/\+/g, " ");
  }
  return value.indexOf("%") !== -1 ? decodeURIComponent_(value) : value;
};
var _getQueryParam = (url, key, multiple) => {
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url.indexOf(`?${key}`, 8);
    if (keyIndex2 === -1) {
      keyIndex2 = url.indexOf(`&${key}`, 8);
    }
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        const valueIndex = keyIndex2 + key.length + 2;
        const endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(
          url.slice(valueIndex, endIndex === -1 ? void 0 : endIndex),
        );
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
        return "";
      }
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) {
      return void 0;
    }
  }
  const results = {};
  encoded ??= /[%+]/.test(url);
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
      valueIndex = -1;
    }
    let name = url.slice(
      keyIndex + 1,
      valueIndex === -1
        ? nextKeyIndex === -1
          ? void 0
          : nextKeyIndex
        : valueIndex,
    );
    if (encoded) {
      name = _decodeURI(name);
    }
    keyIndex = nextKeyIndex;
    if (name === "") {
      continue;
    }
    let value;
    if (valueIndex === -1) {
      value = "";
    } else {
      value = url.slice(
        valueIndex + 1,
        nextKeyIndex === -1 ? void 0 : nextKeyIndex,
      );
      if (encoded) {
        value = _decodeURI(value);
      }
    }
    if (multiple) {
      if (!(results[name] && Array.isArray(results[name]))) {
        results[name] = [];
      }
      results[name].push(value);
    } else {
      results[name] ??= value;
    }
  }
  return key ? results[key] : results;
};
var getQueryParam = _getQueryParam;
var getQueryParams = (url, key) => {
  return _getQueryParam(url, key, true);
};
var decodeURIComponent_ = decodeURIComponent;

// node_modules/hono/dist/request.js
var tryDecodeURIComponent = (str) => tryDecode(str, decodeURIComponent_);
var HonoRequest = class {
  raw;
  #validatedData;
  #matchResult;
  routeIndex = 0;
  path;
  bodyCache = {};
  constructor(request, path = "/", matchResult = [[]]) {
    this.raw = request;
    this.path = path;
    this.#matchResult = matchResult;
    this.#validatedData = {};
  }
  param(key) {
    return key ? this.#getDecodedParam(key) : this.#getAllDecodedParams();
  }
  #getDecodedParam(key) {
    const paramKey = this.#matchResult[0][this.routeIndex][1][key];
    const param = this.#getParamValue(paramKey);
    return param
      ? /\%/.test(param)
        ? tryDecodeURIComponent(param)
        : param
      : void 0;
  }
  #getAllDecodedParams() {
    const decoded = {};
    const keys = Object.keys(this.#matchResult[0][this.routeIndex][1]);
    for (const key of keys) {
      const value = this.#getParamValue(
        this.#matchResult[0][this.routeIndex][1][key],
      );
      if (value && typeof value === "string") {
        decoded[key] = /\%/.test(value) ? tryDecodeURIComponent(value) : value;
      }
    }
    return decoded;
  }
  #getParamValue(paramKey) {
    return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name) {
      return this.raw.headers.get(name.toLowerCase()) ?? void 0;
    }
    const headerData = {};
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  async parseBody(options) {
    return (this.bodyCache.parsedBody ??= await parseBody(this, options));
  }
  #cachedBody = (key) => {
    const { bodyCache, raw: raw2 } = this;
    const cachedBody = bodyCache[key];
    if (cachedBody) {
      return cachedBody;
    }
    const anyCachedKey = Object.keys(bodyCache)[0];
    if (anyCachedKey) {
      return bodyCache[anyCachedKey].then((body) => {
        if (anyCachedKey === "json") {
          body = JSON.stringify(body);
        }
        return new Response(body)[key]();
      });
    }
    return (bodyCache[key] = raw2[key]());
  };
  json() {
    return this.#cachedBody("json");
  }
  text() {
    return this.#cachedBody("text");
  }
  arrayBuffer() {
    return this.#cachedBody("arrayBuffer");
  }
  blob() {
    return this.#cachedBody("blob");
  }
  formData() {
    return this.#cachedBody("formData");
  }
  addValidatedData(target, data) {
    this.#validatedData[target] = data;
  }
  valid(target) {
    return this.#validatedData[target];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get matchedRoutes() {
    return this.#matchResult[0].map(([[, route]]) => route);
  }
  get routePath() {
    return this.#matchResult[0].map(([[, route]]) => route)[this.routeIndex]
      .path;
  }
};

// node_modules/hono/dist/utils/html.js
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3,
};
var raw = (value, callbacks) => {
  const escapedString = new String(value);
  escapedString.isEscaped = true;
  escapedString.callbacks = callbacks;
  return escapedString;
};
var resolveCallback = async (
  str,
  phase,
  preserveCallbacks,
  context,
  buffer,
) => {
  if (typeof str === "object" && !(str instanceof String)) {
    if (!(str instanceof Promise)) {
      str = str.toString();
    }
    if (str instanceof Promise) {
      str = await str;
    }
  }
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
    return Promise.resolve(str);
  }
  if (buffer) {
    buffer[0] += str;
  } else {
    buffer = [str];
  }
  const resStr = Promise.all(
    callbacks.map((c) => c({ phase, buffer, context })),
  ).then((res) =>
    Promise.all(
      res
        .filter(Boolean)
        .map((str2) => resolveCallback(str2, phase, false, context, buffer)),
    ).then(() => buffer[0]),
  );
  if (preserveCallbacks) {
    return raw(await resStr, callbacks);
  } else {
    return resStr;
  }
};

// node_modules/hono/dist/context.js
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setHeaders = (headers, map = {}) => {
  for (const key of Object.keys(map)) {
    headers.set(key, map[key]);
  }
  return headers;
};
var Context = class {
  #rawRequest;
  #req;
  env = {};
  #var;
  finalized = false;
  error;
  #status = 200;
  #executionCtx;
  #headers;
  #preparedHeaders;
  #res;
  #isFresh = true;
  #layout;
  #renderer;
  #notFoundHandler;
  #matchResult;
  #path;
  constructor(req, options) {
    this.#rawRequest = req;
    if (options) {
      this.#executionCtx = options.executionCtx;
      this.env = options.env;
      this.#notFoundHandler = options.notFoundHandler;
      this.#path = options.path;
      this.#matchResult = options.matchResult;
    }
  }
  get req() {
    this.#req ??= new HonoRequest(
      this.#rawRequest,
      this.#path,
      this.#matchResult,
    );
    return this.#req;
  }
  get event() {
    if (this.#executionCtx && "respondWith" in this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  get executionCtx() {
    if (this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  get res() {
    this.#isFresh = false;
    return (this.#res ||= new Response("404 Not Found", { status: 404 }));
  }
  set res(_res) {
    this.#isFresh = false;
    if (this.#res && _res) {
      try {
        for (const [k, v2] of this.#res.headers.entries()) {
          if (k === "content-type") {
            continue;
          }
          if (k === "set-cookie") {
            const cookies = this.#res.headers.getSetCookie();
            _res.headers.delete("set-cookie");
            for (const cookie of cookies) {
              _res.headers.append("set-cookie", cookie);
            }
          } else {
            _res.headers.set(k, v2);
          }
        }
      } catch (e) {
        if (e instanceof TypeError && e.message.includes("immutable")) {
          this.res = new Response(_res.body, {
            headers: _res.headers,
            status: _res.status,
          });
          return;
        } else {
          throw e;
        }
      }
    }
    this.#res = _res;
    this.finalized = true;
  }
  render = (...args) => {
    this.#renderer ??= (content) => this.html(content);
    return this.#renderer(...args);
  };
  setLayout = (layout) => (this.#layout = layout);
  getLayout = () => this.#layout;
  setRenderer = (renderer) => {
    this.#renderer = renderer;
  };
  header = (name, value, options) => {
    if (value === void 0) {
      if (this.#headers) {
        this.#headers.delete(name);
      } else if (this.#preparedHeaders) {
        delete this.#preparedHeaders[name.toLocaleLowerCase()];
      }
      if (this.finalized) {
        this.res.headers.delete(name);
      }
      return;
    }
    if (options?.append) {
      if (!this.#headers) {
        this.#isFresh = false;
        this.#headers = new Headers(this.#preparedHeaders);
        this.#preparedHeaders = {};
      }
      this.#headers.append(name, value);
    } else {
      if (this.#headers) {
        this.#headers.set(name, value);
      } else {
        this.#preparedHeaders ??= {};
        this.#preparedHeaders[name.toLowerCase()] = value;
      }
    }
    if (this.finalized) {
      if (options?.append) {
        this.res.headers.append(name, value);
      } else {
        this.res.headers.set(name, value);
      }
    }
  };
  status = (status) => {
    this.#isFresh = false;
    this.#status = status;
  };
  set = (key, value) => {
    this.#var ??= /* @__PURE__ */ new Map();
    this.#var.set(key, value);
  };
  get = (key) => {
    return this.#var ? this.#var.get(key) : void 0;
  };
  get var() {
    if (!this.#var) {
      return {};
    }
    return Object.fromEntries(this.#var);
  }
  #newResponse(data, arg, headers) {
    if (this.#isFresh && !headers && !arg && this.#status === 200) {
      return new Response(data, {
        headers: this.#preparedHeaders,
      });
    }
    if (arg && typeof arg !== "number") {
      const header = new Headers(arg.headers);
      if (this.#headers) {
        this.#headers.forEach((v2, k) => {
          if (k === "set-cookie") {
            header.append(k, v2);
          } else {
            header.set(k, v2);
          }
        });
      }
      const headers2 = setHeaders(header, this.#preparedHeaders);
      return new Response(data, {
        headers: headers2,
        status: arg.status ?? this.#status,
      });
    }
    const status = typeof arg === "number" ? arg : this.#status;
    this.#preparedHeaders ??= {};
    this.#headers ??= new Headers();
    setHeaders(this.#headers, this.#preparedHeaders);
    if (this.#res) {
      this.#res.headers.forEach((v2, k) => {
        if (k === "set-cookie") {
          this.#headers?.append(k, v2);
        } else {
          this.#headers?.set(k, v2);
        }
      });
      setHeaders(this.#headers, this.#preparedHeaders);
    }
    headers ??= {};
    for (const [k, v2] of Object.entries(headers)) {
      if (typeof v2 === "string") {
        this.#headers.set(k, v2);
      } else {
        this.#headers.delete(k);
        for (const v22 of v2) {
          this.#headers.append(k, v22);
        }
      }
    }
    return new Response(data, {
      status,
      headers: this.#headers,
    });
  }
  newResponse = (...args) => this.#newResponse(...args);
  body = (data, arg, headers) => {
    return typeof arg === "number"
      ? this.#newResponse(data, arg, headers)
      : this.#newResponse(data, arg);
  };
  text = (text2, arg, headers) => {
    if (!this.#preparedHeaders) {
      if (this.#isFresh && !headers && !arg) {
        return new Response(text2);
      }
      this.#preparedHeaders = {};
    }
    this.#preparedHeaders["content-type"] = TEXT_PLAIN;
    return typeof arg === "number"
      ? this.#newResponse(text2, arg, headers)
      : this.#newResponse(text2, arg);
  };
  json = (object, arg, headers) => {
    const body = JSON.stringify(object);
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "application/json; charset=UTF-8";
    return typeof arg === "number"
      ? this.#newResponse(body, arg, headers)
      : this.#newResponse(body, arg);
  };
  html = (html, arg, headers) => {
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "text/html; charset=UTF-8";
    if (typeof html === "object") {
      return resolveCallback(
        html,
        HtmlEscapedCallbackPhase.Stringify,
        false,
        {},
      ).then((html2) => {
        return typeof arg === "number"
          ? this.#newResponse(html2, arg, headers)
          : this.#newResponse(html2, arg);
      });
    }
    return typeof arg === "number"
      ? this.#newResponse(html, arg, headers)
      : this.#newResponse(html, arg);
  };
  redirect = (location, status) => {
    this.#headers ??= new Headers();
    this.#headers.set("Location", String(location));
    return this.newResponse(null, status ?? 302);
  };
  notFound = () => {
    this.#notFoundHandler ??= () => new Response();
    return this.#notFoundHandler(this);
  };
};

// node_modules/hono/dist/compose.js
var compose = (middleware, onError, onNotFound) => {
  return (context, next) => {
    let index = -1;
    const isContext = context instanceof Context;
    return dispatch(0);
    async function dispatch(i) {
      if (i <= index) {
        throw new Error("next() called multiple times");
      }
      index = i;
      let res;
      let isError = false;
      let handler;
      if (middleware[i]) {
        handler = middleware[i][0][0];
        if (isContext) {
          context.req.routeIndex = i;
        }
      } else {
        handler = (i === middleware.length && next) || void 0;
      }
      if (!handler) {
        if (isContext && context.finalized === false && onNotFound) {
          res = await onNotFound(context);
        }
      } else {
        try {
          res = await handler(context, () => {
            return dispatch(i + 1);
          });
        } catch (err) {
          if (err instanceof Error && isContext && onError) {
            context.error = err;
            res = await onError(err, context);
            isError = true;
          } else {
            throw err;
          }
        }
      }
      if (res && (context.finalized === false || isError)) {
        context.res = res;
      }
      return context;
    }
  };
};

// node_modules/hono/dist/router.js
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var MESSAGE_MATCHER_IS_ALREADY_BUILT =
  "Can not add a route since the matcher is already built.";
var UnsupportedPathError = class extends Error {};

// node_modules/hono/dist/hono-base.js
var COMPOSED_HANDLER = Symbol("composedHandler");
var notFoundHandler = (c) => {
  return c.text("404 Not Found", 404);
};
var errorHandler = (err, c) => {
  if ("getResponse" in err) {
    return err.getResponse();
  }
  console.error(err);
  return c.text("Internal Server Error", 500);
};
var Hono = class {
  get;
  post;
  put;
  delete;
  options;
  patch;
  all;
  on;
  use;
  router;
  getPath;
  _basePath = "/";
  #path = "/";
  routes = [];
  constructor(options = {}) {
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.forEach((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          this.#path = args1;
        } else {
          this.#addRoute(method, this.#path, args1);
        }
        args.forEach((handler) => {
          if (typeof handler !== "string") {
            this.#addRoute(method, this.#path, handler);
          }
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      for (const p2 of [path].flat()) {
        this.#path = p2;
        for (const m2 of [method].flat()) {
          handlers.map((handler) => {
            this.#addRoute(m2.toUpperCase(), this.#path, handler);
          });
        }
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        this.#path = arg1;
      } else {
        this.#path = "*";
        handlers.unshift(arg1);
      }
      handlers.forEach((handler) => {
        this.#addRoute(METHOD_NAME_ALL, this.#path, handler);
      });
      return this;
    };
    const strict = options.strict ?? true;
    delete options.strict;
    Object.assign(this, options);
    this.getPath = strict ? (options.getPath ?? getPath) : getPathNoStrict;
  }
  #clone() {
    const clone = new Hono({
      router: this.router,
      getPath: this.getPath,
    });
    clone.routes = this.routes;
    return clone;
  }
  #notFoundHandler = notFoundHandler;
  #errorHandler = errorHandler;
  route(path, app2) {
    const subApp = this.basePath(path);
    app2.routes.map((r) => {
      let handler;
      if (app2.#errorHandler === errorHandler) {
        handler = r.handler;
      } else {
        handler = async (c, next) =>
          (await compose([], app2.#errorHandler)(c, () => r.handler(c, next)))
            .res;
        handler[COMPOSED_HANDLER] = r.handler;
      }
      subApp.#addRoute(r.method, r.path, handler);
    });
    return this;
  }
  basePath(path) {
    const subApp = this.#clone();
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  onError = (handler) => {
    this.#errorHandler = handler;
    return this;
  };
  notFound = (handler) => {
    this.#notFoundHandler = handler;
    return this;
  };
  mount(path, applicationHandler, options) {
    let replaceRequest;
    let optionHandler;
    if (options) {
      if (typeof options === "function") {
        optionHandler = options;
      } else {
        optionHandler = options.optionHandler;
        replaceRequest = options.replaceRequest;
      }
    }
    const getOptions = optionHandler
      ? (c) => {
          const options2 = optionHandler(c);
          return Array.isArray(options2) ? options2 : [options2];
        }
      : (c) => {
          let executionContext = void 0;
          try {
            executionContext = c.executionCtx;
          } catch {}
          return [c.env, executionContext];
        };
    replaceRequest ||= (() => {
      const mergedPath = mergePath(this._basePath, path);
      const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
      return (request) => {
        const url = new URL(request.url);
        url.pathname = url.pathname.slice(pathPrefixLength) || "/";
        return new Request(url, request);
      };
    })();
    const handler = async (c, next) => {
      const res = await applicationHandler(
        replaceRequest(c.req.raw),
        ...getOptions(c),
      );
      if (res) {
        return res;
      }
      await next();
    };
    this.#addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler);
    return this;
  }
  #addRoute(method, path, handler) {
    method = method.toUpperCase();
    path = mergePath(this._basePath, path);
    const r = { path, method, handler };
    this.router.add(method, path, [handler, r]);
    this.routes.push(r);
  }
  #handleError(err, c) {
    if (err instanceof Error) {
      return this.#errorHandler(err, c);
    }
    throw err;
  }
  #dispatch(request, executionCtx, env, method) {
    if (method === "HEAD") {
      return (async () =>
        new Response(
          null,
          await this.#dispatch(request, executionCtx, env, "GET"),
        ))();
    }
    const path = this.getPath(request, { env });
    const matchResult = this.router.match(method, path);
    const c = new Context(request, {
      path,
      matchResult,
      env,
      executionCtx,
      notFoundHandler: this.#notFoundHandler,
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
          c.res = await this.#notFoundHandler(c);
        });
      } catch (err) {
        return this.#handleError(err, c);
      }
      return res instanceof Promise
        ? res
            .then(
              (resolved) =>
                resolved || (c.finalized ? c.res : this.#notFoundHandler(c)),
            )
            .catch((err) => this.#handleError(err, c))
        : (res ?? this.#notFoundHandler(c));
    }
    const composed = compose(
      matchResult[0],
      this.#errorHandler,
      this.#notFoundHandler,
    );
    return (async () => {
      try {
        const context = await composed(c);
        if (!context.finalized) {
          throw new Error(
            "Context is not finalized. Did you forget to return a Response object or `await next()`?",
          );
        }
        return context.res;
      } catch (err) {
        return this.#handleError(err, c);
      }
    })();
  }
  fetch = (request, ...rest) => {
    return this.#dispatch(request, rest[1], rest[0], request.method);
  };
  request = (input, requestInit, Env, executionCtx) => {
    if (input instanceof Request) {
      if (requestInit !== void 0) {
        input = new Request(input, requestInit);
      }
      return this.fetch(input, Env, executionCtx);
    }
    input = input.toString();
    const path = /^https?:\/\//.test(input)
      ? input
      : `http://localhost${mergePath("/", input)}`;
    const req = new Request(path, requestInit);
    return this.fetch(req, Env, executionCtx);
  };
  fire = () => {
    addEventListener("fetch", (event) => {
      event.respondWith(
        this.#dispatch(event.request, event, void 0, event.request.method),
      );
    });
  };
};

// node_modules/hono/dist/router/reg-exp-router/node.js
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = Symbol();
var regExpMetaChars = new Set(".\\+*[^]$()");
function compareKey(a2, b) {
  if (a2.length === 1) {
    return b.length === 1 ? (a2 < b ? -1 : 1) : -1;
  }
  if (b.length === 1) {
    return 1;
  }
  if (a2 === ONLY_WILDCARD_REG_EXP_STR || a2 === TAIL_WILDCARD_REG_EXP_STR) {
    return 1;
  } else if (
    b === ONLY_WILDCARD_REG_EXP_STR ||
    b === TAIL_WILDCARD_REG_EXP_STR
  ) {
    return -1;
  }
  if (a2 === LABEL_REG_EXP_STR) {
    return 1;
  } else if (b === LABEL_REG_EXP_STR) {
    return -1;
  }
  return a2.length === b.length ? (a2 < b ? -1 : 1) : b.length - a2.length;
}
var Node = class {
  index;
  varIndex;
  children = /* @__PURE__ */ Object.create(null);
  insert(tokens, index, paramMap, context, pathErrorCheckOnly) {
    if (tokens.length === 0) {
      if (this.index !== void 0) {
        throw PATH_ERROR;
      }
      if (pathErrorCheckOnly) {
        return;
      }
      this.index = index;
      return;
    }
    const [token, ...restTokens] = tokens;
    const pattern =
      token === "*"
        ? restTokens.length === 0
          ? ["", "", ONLY_WILDCARD_REG_EXP_STR]
          : ["", "", LABEL_REG_EXP_STR]
        : token === "/*"
          ? ["", "", TAIL_WILDCARD_REG_EXP_STR]
          : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let node;
    if (pattern) {
      const name = pattern[1];
      let regexpStr = pattern[2] || LABEL_REG_EXP_STR;
      if (name && pattern[2]) {
        regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
        if (/\((?!\?:)/.test(regexpStr)) {
          throw PATH_ERROR;
        }
      }
      node = this.children[regexpStr];
      if (!node) {
        if (
          Object.keys(this.children).some(
            (k) =>
              k !== ONLY_WILDCARD_REG_EXP_STR &&
              k !== TAIL_WILDCARD_REG_EXP_STR,
          )
        ) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.children[regexpStr] = new Node();
        if (name !== "") {
          node.varIndex = context.varIndex++;
        }
      }
      if (!pathErrorCheckOnly && name !== "") {
        paramMap.push([name, node.varIndex]);
      }
    } else {
      node = this.children[token];
      if (!node) {
        if (
          Object.keys(this.children).some(
            (k) =>
              k.length > 1 &&
              k !== ONLY_WILDCARD_REG_EXP_STR &&
              k !== TAIL_WILDCARD_REG_EXP_STR,
          )
        ) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.children[token] = new Node();
      }
    }
    node.insert(restTokens, index, paramMap, context, pathErrorCheckOnly);
  }
  buildRegExpStr() {
    const childKeys = Object.keys(this.children).sort(compareKey);
    const strList = childKeys.map((k) => {
      const c = this.children[k];
      return (
        (typeof c.varIndex === "number"
          ? `(${k})@${c.varIndex}`
          : regExpMetaChars.has(k)
            ? `\\${k}`
            : k) + c.buildRegExpStr()
      );
    });
    if (typeof this.index === "number") {
      strList.unshift(`#${this.index}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
};

// node_modules/hono/dist/router/reg-exp-router/trie.js
var Trie = class {
  context = { varIndex: 0 };
  root = new Node();
  insert(path, index, pathErrorCheckOnly) {
    const paramAssoc = [];
    const groups = [];
    for (let i = 0; ; ) {
      let replaced = false;
      path = path.replace(/\{[^}]+\}/g, (m2) => {
        const mark = `@\\${i}`;
        groups[i] = [mark, m2];
        i++;
        replaced = true;
        return mark;
      });
      if (!replaced) {
        break;
      }
    }
    const tokens = path.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i = groups.length - 1; i >= 0; i--) {
      const [mark] = groups[i];
      for (let j = tokens.length - 1; j >= 0; j--) {
        if (tokens[j].indexOf(mark) !== -1) {
          tokens[j] = tokens[j].replace(mark, groups[i][1]);
          break;
        }
      }
    }
    this.root.insert(
      tokens,
      index,
      paramAssoc,
      this.context,
      pathErrorCheckOnly,
    );
    return paramAssoc;
  }
  buildRegExp() {
    let regexp = this.root.buildRegExpStr();
    if (regexp === "") {
      return [/^$/, [], []];
    }
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(
      /#(\d+)|@(\d+)|\.\*\$/g,
      (_2, handlerIndex, paramIndex) => {
        if (handlerIndex !== void 0) {
          indexReplacementMap[++captureIndex] = Number(handlerIndex);
          return "$()";
        }
        if (paramIndex !== void 0) {
          paramReplacementMap[Number(paramIndex)] = ++captureIndex;
          return "";
        }
        return "";
      },
    );
    return [new RegExp(`^${regexp}`), indexReplacementMap, paramReplacementMap];
  }
};

// node_modules/hono/dist/router/reg-exp-router/router.js
var emptyParam = [];
var nullMatcher = [/^$/, [], /* @__PURE__ */ Object.create(null)];
var wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
function buildWildcardRegExp(path) {
  return (wildcardRegExpCache[path] ??= new RegExp(
    path === "*"
      ? ""
      : `^${path.replace(/\/\*$|([.\\+*[^\]$()])/g, (_2, metaChar) =>
          metaChar ? `\\${metaChar}` : "(?:|/.*)",
        )}$`,
  ));
}
function clearWildcardRegExpCache() {
  wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
}
function buildMatcherFromPreprocessedRoutes(routes) {
  const trie = new Trie();
  const handlerData = [];
  if (routes.length === 0) {
    return nullMatcher;
  }
  const routesWithStaticPathFlag = routes
    .map((route) => [!/\*|\/:/.test(route[0]), ...route])
    .sort(([isStaticA, pathA], [isStaticB, pathB]) =>
      isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length,
    );
  const staticMap = /* @__PURE__ */ Object.create(null);
  for (let i = 0, j = -1, len = routesWithStaticPathFlag.length; i < len; i++) {
    const [pathErrorCheckOnly, path, handlers] = routesWithStaticPathFlag[i];
    if (pathErrorCheckOnly) {
      staticMap[path] = [
        handlers.map(([h]) => [h, /* @__PURE__ */ Object.create(null)]),
        emptyParam,
      ];
    } else {
      j++;
    }
    let paramAssoc;
    try {
      paramAssoc = trie.insert(path, j, pathErrorCheckOnly);
    } catch (e) {
      throw e === PATH_ERROR ? new UnsupportedPathError(path) : e;
    }
    if (pathErrorCheckOnly) {
      continue;
    }
    handlerData[j] = handlers.map(([h, paramCount]) => {
      const paramIndexMap = /* @__PURE__ */ Object.create(null);
      paramCount -= 1;
      for (; paramCount >= 0; paramCount--) {
        const [key, value] = paramAssoc[paramCount];
        paramIndexMap[key] = value;
      }
      return [h, paramIndexMap];
    });
  }
  const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
  for (let i = 0, len = handlerData.length; i < len; i++) {
    for (let j = 0, len2 = handlerData[i].length; j < len2; j++) {
      const map = handlerData[i][j]?.[1];
      if (!map) {
        continue;
      }
      const keys = Object.keys(map);
      for (let k = 0, len3 = keys.length; k < len3; k++) {
        map[keys[k]] = paramReplacementMap[map[keys[k]]];
      }
    }
  }
  const handlerMap = [];
  for (const i in indexReplacementMap) {
    handlerMap[i] = handlerData[indexReplacementMap[i]];
  }
  return [regexp, handlerMap, staticMap];
}
function findMiddleware(middleware, path) {
  if (!middleware) {
    return void 0;
  }
  for (const k of Object.keys(middleware).sort(
    (a2, b) => b.length - a2.length,
  )) {
    if (buildWildcardRegExp(k).test(path)) {
      return [...middleware[k]];
    }
  }
  return void 0;
}
var RegExpRouter = class {
  name = "RegExpRouter";
  middleware;
  routes;
  constructor() {
    this.middleware = {
      [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null),
    };
    this.routes = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
  }
  add(method, path, handler) {
    const { middleware, routes } = this;
    if (!middleware || !routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    if (!middleware[method]) {
      [middleware, routes].forEach((handlerMap) => {
        handlerMap[method] = /* @__PURE__ */ Object.create(null);
        Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p2) => {
          handlerMap[method][p2] = [...handlerMap[METHOD_NAME_ALL][p2]];
        });
      });
    }
    if (path === "/*") {
      path = "*";
    }
    const paramCount = (path.match(/\/:/g) || []).length;
    if (/\*$/.test(path)) {
      const re = buildWildcardRegExp(path);
      if (method === METHOD_NAME_ALL) {
        Object.keys(middleware).forEach((m2) => {
          middleware[m2][path] ||=
            findMiddleware(middleware[m2], path) ||
            findMiddleware(middleware[METHOD_NAME_ALL], path) ||
            [];
        });
      } else {
        middleware[method][path] ||=
          findMiddleware(middleware[method], path) ||
          findMiddleware(middleware[METHOD_NAME_ALL], path) ||
          [];
      }
      Object.keys(middleware).forEach((m2) => {
        if (method === METHOD_NAME_ALL || method === m2) {
          Object.keys(middleware[m2]).forEach((p2) => {
            re.test(p2) && middleware[m2][p2].push([handler, paramCount]);
          });
        }
      });
      Object.keys(routes).forEach((m2) => {
        if (method === METHOD_NAME_ALL || method === m2) {
          Object.keys(routes[m2]).forEach(
            (p2) => re.test(p2) && routes[m2][p2].push([handler, paramCount]),
          );
        }
      });
      return;
    }
    const paths = checkOptionalParameter(path) || [path];
    for (let i = 0, len = paths.length; i < len; i++) {
      const path2 = paths[i];
      Object.keys(routes).forEach((m2) => {
        if (method === METHOD_NAME_ALL || method === m2) {
          routes[m2][path2] ||= [
            ...(findMiddleware(middleware[m2], path2) ||
              findMiddleware(middleware[METHOD_NAME_ALL], path2) ||
              []),
          ];
          routes[m2][path2].push([handler, paramCount - len + i + 1]);
        }
      });
    }
  }
  match(method, path) {
    clearWildcardRegExpCache();
    const matchers = this.#buildAllMatchers();
    this.match = (method2, path2) => {
      const matcher = matchers[method2] || matchers[METHOD_NAME_ALL];
      const staticMatch = matcher[2][path2];
      if (staticMatch) {
        return staticMatch;
      }
      const match = path2.match(matcher[0]);
      if (!match) {
        return [[], emptyParam];
      }
      const index = match.indexOf("", 1);
      return [matcher[1][index], match];
    };
    return this.match(method, path);
  }
  #buildAllMatchers() {
    const matchers = /* @__PURE__ */ Object.create(null);
    Object.keys(this.routes)
      .concat(Object.keys(this.middleware))
      .forEach((method) => {
        matchers[method] ||= this.#buildMatcher(method);
      });
    this.middleware = this.routes = void 0;
    return matchers;
  }
  #buildMatcher(method) {
    const routes = [];
    let hasOwnRoute = method === METHOD_NAME_ALL;
    [this.middleware, this.routes].forEach((r) => {
      const ownRoute = r[method]
        ? Object.keys(r[method]).map((path) => [path, r[method][path]])
        : [];
      if (ownRoute.length !== 0) {
        hasOwnRoute ||= true;
        routes.push(...ownRoute);
      } else if (method !== METHOD_NAME_ALL) {
        routes.push(
          ...Object.keys(r[METHOD_NAME_ALL]).map((path) => [
            path,
            r[METHOD_NAME_ALL][path],
          ]),
        );
      }
    });
    if (!hasOwnRoute) {
      return null;
    } else {
      return buildMatcherFromPreprocessedRoutes(routes);
    }
  }
};

// node_modules/hono/dist/router/smart-router/router.js
var SmartRouter = class {
  name = "SmartRouter";
  routers = [];
  routes = [];
  constructor(init) {
    Object.assign(this, init);
  }
  add(method, path, handler) {
    if (!this.routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    this.routes.push([method, path, handler]);
  }
  match(method, path) {
    if (!this.routes) {
      throw new Error("Fatal error");
    }
    const { routers, routes } = this;
    const len = routers.length;
    let i = 0;
    let res;
    for (; i < len; i++) {
      const router = routers[i];
      try {
        for (let i2 = 0, len2 = routes.length; i2 < len2; i2++) {
          router.add(...routes[i2]);
        }
        res = router.match(method, path);
      } catch (e) {
        if (e instanceof UnsupportedPathError) {
          continue;
        }
        throw e;
      }
      this.match = router.match.bind(router);
      this.routers = [router];
      this.routes = void 0;
      break;
    }
    if (i === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (this.routes || this.routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.routers[0];
  }
};

// node_modules/hono/dist/router/trie-router/node.js
var Node2 = class {
  methods;
  children;
  patterns;
  order = 0;
  params = /* @__PURE__ */ Object.create(null);
  constructor(method, handler, children) {
    this.children = children || /* @__PURE__ */ Object.create(null);
    this.methods = [];
    if (method && handler) {
      const m2 = /* @__PURE__ */ Object.create(null);
      m2[method] = { handler, possibleKeys: [], score: 0 };
      this.methods = [m2];
    }
    this.patterns = [];
  }
  insert(method, path, handler) {
    this.order = ++this.order;
    let curNode = this;
    const parts = splitRoutingPath(path);
    const possibleKeys = [];
    for (let i = 0, len = parts.length; i < len; i++) {
      const p2 = parts[i];
      if (Object.keys(curNode.children).includes(p2)) {
        curNode = curNode.children[p2];
        const pattern2 = getPattern(p2);
        if (pattern2) {
          possibleKeys.push(pattern2[1]);
        }
        continue;
      }
      curNode.children[p2] = new Node2();
      const pattern = getPattern(p2);
      if (pattern) {
        curNode.patterns.push(pattern);
        possibleKeys.push(pattern[1]);
      }
      curNode = curNode.children[p2];
    }
    if (!curNode.methods.length) {
      curNode.methods = [];
    }
    const m2 = /* @__PURE__ */ Object.create(null);
    const handlerSet = {
      handler,
      possibleKeys: possibleKeys.filter((v2, i, a2) => a2.indexOf(v2) === i),
      score: this.order,
    };
    m2[method] = handlerSet;
    curNode.methods.push(m2);
    return curNode;
  }
  #gHSets(node, method, nodeParams, params) {
    const handlerSets = [];
    for (let i = 0, len = node.methods.length; i < len; i++) {
      const m2 = node.methods[i];
      const handlerSet = m2[method] || m2[METHOD_NAME_ALL];
      const processedSet = /* @__PURE__ */ Object.create(null);
      if (handlerSet !== void 0) {
        handlerSet.params = /* @__PURE__ */ Object.create(null);
        for (
          let i2 = 0, len2 = handlerSet.possibleKeys.length;
          i2 < len2;
          i2++
        ) {
          const key = handlerSet.possibleKeys[i2];
          const processed = processedSet[handlerSet.score];
          handlerSet.params[key] =
            params[key] && !processed
              ? params[key]
              : (nodeParams[key] ?? params[key]);
          processedSet[handlerSet.score] = true;
        }
        handlerSets.push(handlerSet);
      }
    }
    return handlerSets;
  }
  search(method, path) {
    const handlerSets = [];
    this.params = /* @__PURE__ */ Object.create(null);
    const curNode = this;
    let curNodes = [curNode];
    const parts = splitPath(path);
    for (let i = 0, len = parts.length; i < len; i++) {
      const part = parts[i];
      const isLast = i === len - 1;
      const tempNodes = [];
      for (let j = 0, len2 = curNodes.length; j < len2; j++) {
        const node = curNodes[j];
        const nextNode = node.children[part];
        if (nextNode) {
          nextNode.params = node.params;
          if (isLast) {
            if (nextNode.children["*"]) {
              handlerSets.push(
                ...this.#gHSets(
                  nextNode.children["*"],
                  method,
                  node.params,
                  /* @__PURE__ */ Object.create(null),
                ),
              );
            }
            handlerSets.push(
              ...this.#gHSets(
                nextNode,
                method,
                node.params,
                /* @__PURE__ */ Object.create(null),
              ),
            );
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (let k = 0, len3 = node.patterns.length; k < len3; k++) {
          const pattern = node.patterns[k];
          const params = { ...node.params };
          if (pattern === "*") {
            const astNode = node.children["*"];
            if (astNode) {
              handlerSets.push(
                ...this.#gHSets(
                  astNode,
                  method,
                  node.params,
                  /* @__PURE__ */ Object.create(null),
                ),
              );
              tempNodes.push(astNode);
            }
            continue;
          }
          if (part === "") {
            continue;
          }
          const [key, name, matcher] = pattern;
          const child = node.children[key];
          const restPathString = parts.slice(i).join("/");
          if (matcher instanceof RegExp && matcher.test(restPathString)) {
            params[name] = restPathString;
            handlerSets.push(
              ...this.#gHSets(child, method, node.params, params),
            );
            continue;
          }
          if (matcher === true || matcher.test(part)) {
            if (typeof key === "string") {
              params[name] = part;
              if (isLast) {
                handlerSets.push(
                  ...this.#gHSets(child, method, params, node.params),
                );
                if (child.children["*"]) {
                  handlerSets.push(
                    ...this.#gHSets(
                      child.children["*"],
                      method,
                      params,
                      node.params,
                    ),
                  );
                }
              } else {
                child.params = params;
                tempNodes.push(child);
              }
            }
          }
        }
      }
      curNodes = tempNodes;
    }
    const results = handlerSets.sort((a2, b) => {
      return a2.score - b.score;
    });
    return [results.map(({ handler, params }) => [handler, params])];
  }
};

// node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = class {
  name = "TrieRouter";
  node;
  constructor() {
    this.node = new Node2();
  }
  add(method, path, handler) {
    const results = checkOptionalParameter(path);
    if (results) {
      for (let i = 0, len = results.length; i < len; i++) {
        this.node.insert(method, results[i], handler);
      }
      return;
    }
    this.node.insert(method, path, handler);
  }
  match(method, path) {
    return this.node.search(method, path);
  }
};

// node_modules/hono/dist/hono.js
var Hono2 = class extends Hono {
  constructor(options = {}) {
    super(options);
    this.router =
      options.router ??
      new SmartRouter({
        routers: [new RegExpRouter(), new TrieRouter()],
      });
  }
};

// src/db/schema/product.ts
var productsSchema = pgTable("products", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  variantTitles: text("variant_titles").array(),
  tags: text("tags").array(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
  skus: text("skus").array(),
});

// src/index.ts
var app = new Hono2();
app.get("/", async (c) => {
  const sql2 = Xs(c.env.DATABASE_URL);
  const db = drizzle(sql2);
  const products = await db.select().from(productsSchema);
  return c.json(products);
});
var src_default = app;

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {}
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
};
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
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

// .wrangler/tmp/bundle-aHNCF1/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default,
];
var middleware_insertion_facade_default = src_default;

// node_modules/wrangler/templates/middleware/common.ts
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

// .wrangler/tmp/bundle-aHNCF1/middleware-loader.entry.ts
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
function wrapExportedHandler(worker) {
  if (
    __INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 ||
    __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0
  ) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = function (request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  };
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = function (type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {},
          );
          return worker.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    },
  };
}
function wrapWorkerEntrypoint(klass) {
  if (
    __INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 ||
    __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0
  ) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {},
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher,
      );
    }
  };
}
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default,
};
/*! Bundled license information:

@neondatabase/serverless/index.mjs:
  (*! Bundled license information:
  
  ieee754/index.js:
    (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)
  
  buffer/index.js:
    (*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     *)
  *)
*/
//# sourceMappingURL=index.js.map
