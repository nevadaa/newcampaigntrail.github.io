(function(e) {
    var t = "0.3.0",
        n = "hasOwnProperty",
        r = /[\.\/]/,
        i = "*",
        s = function() {},
        o = function(e, t) {
            return e - t
        },
        u, a, f = {
            n: {}
        },
        l = function(e, t) {
            var n = f,
                r = Array.prototype.slice.call(arguments, 2),
                i = l.listeners(e),
                s = 0,
                c = false,
                h, p = [],
                d = {},
                v = [],
                m = [];
            u = e;
            a = 0;
            for (var g = 0, y = i.length; g < y; g++)
                if ("zIndex" in i[g]) {
                    p.push(i[g].zIndex);
                    if (i[g].zIndex < 0) {
                        d[i[g].zIndex] = i[g]
                    }
                }
            p.sort(o);
            while (p[s] < 0) {
                h = d[p[s++]];
                v.push(h.apply(t, r));
                if (a) {
                    return v
                }
            }
            for (g = 0; g < y; g++) {
                h = i[g];
                if ("zIndex" in h) {
                    if (h.zIndex == p[s]) {
                        v.push(h.apply(t, r));
                        if (a) {
                            return v
                        }
                        do {
                            s++;
                            h = d[p[s]];
                            h && v.push(h.apply(t, r));
                            if (a) {
                                return v
                            }
                        } while (h)
                    } else {
                        d[h.zIndex] = h
                    }
                } else {
                    v.push(h.apply(t, r));
                    if (a) {
                        return v
                    }
                }
            }
            return v.length ? v : null
        };
    l.listeners = function(e) {
        var t = e.split(r),
            n = f,
            s, o, u, a, l, c, h, p, d = [n],
            v = [];
        for (a = 0, l = t.length; a < l; a++) {
            p = [];
            for (c = 0, h = d.length; c < h; c++) {
                n = d[c].n;
                o = [n[t[a]], n[i]];
                u = 2;
                while (u--) {
                    s = o[u];
                    if (s) {
                        p.push(s);
                        v = v.concat(s.f || [])
                    }
                }
            }
            d = p
        }
        return v
    };
    l.on = function(e, t) {
        var n = e.split(r),
            i = f;
        for (var o = 0, u = n.length; o < u; o++) {
            i = i.n;
            !i[n[o]] && (i[n[o]] = {
                n: {}
            });
            i = i[n[o]]
        }
        i.f = i.f || [];
        for (o = 0, u = i.f.length; o < u; o++)
            if (i.f[o] == t) {
                return s
            }
        i.f.push(t);
        return function(e) {
            if (+e == +e) {
                t.zIndex = +e
            }
        }
    };
    l.stop = function() {
        a = 1
    };
    l.nt = function(e) {
        if (e) {
            return (new RegExp("(?:\\.|\\/|^)" + e + "(?:\\.|\\/|$)")).test(u)
        }
        return u
    };
    l.unbind = function(e, t) {
        var s = e.split(r),
            o, u, a, l = [f];
        for (var c = 0, h = s.length; c < h; c++) {
            for (var p = 0; p < l.length; p += a.length - 2) {
                a = [p, 1];
                o = l[p].n;
                if (s[c] != i) {
                    if (o[s[c]]) {
                        a.push(o[s[c]])
                    }
                } else {
                    for (u in o)
                        if (o[n](u)) {
                            a.push(o[u])
                        }
                }
                l.splice.apply(l, a)
            }
        }
        for (c = 0, h = l.length; c < h; c++) {
            o = l[c];
            while (o.n) {
                if (t) {
                    if (o.f) {
                        for (c = 0, h = o.f.length; c < h; c++)
                            if (o.f[c] == t) {
                                o.f.splice(c, 1);
                                break
                            }!o.f.length && delete o.f
                    }
                    for (u in o.n)
                        if (o.n[n](u) && o.n[u].f) {
                            var d = o.n[u].f;
                            for (c = 0, h = d.length; c < h; c++)
                                if (d[c] == t) {
                                    d.splice(c, 1);
                                    break
                                }!d.length && delete o.n[u].f
                        }
                } else {
                    delete o.f;
                    for (u in o.n)
                        if (o.n[n](u) && o.n[u].f) {
                            delete o.n[u].f
                        }
                }
                o = o.n
            }
        }
    };
    l.version = t;
    l.toString = function() {
        return "You are running Eve " + t
    };
    typeof module != "undefined" && module.exports ? module.exports = l : e.eve = l
})(this);
(function() {
    function e(n) {
        if (e.is(n, "function")) {
            return t ? n() : eve.on("DOMload", n)
        } else if (e.is(n, O)) {
            var i = n,
                s = e._engine.create[h](e, i.splice(0, 3 + e.is(i[0], L))),
                u = s.set(),
                a = 0,
                f = i.length,
                l;
            for (; a < f; a++) {
                l = i[a] || {};
                r[o](l.type) && u.push(s[l.type]().attr(l))
            }
            return u
        } else {
            var c = Array.prototype.slice.call(arguments, 0);
            if (e.is(c[c.length - 1], "function")) {
                var p = c.pop();
                return t ? p.call(e._engine.create[h](e, c)) : eve.on("DOMload", function() {
                    p.call(e._engine.create[h](e, c))
                })
            } else {
                return e._engine.create[h](e, arguments)
            }
        }
    }

    function yt(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            if (e[n] === t) {
                return e.push(e.splice(n, 1)[0])
            }
    }

    function bt(e, t, n) {
        function r() {
            var i = Array.prototype.slice.call(arguments, 0),
                s = i.join("␀"),
                u = r.cache = r.cache || {},
                a = r.count = r.count || [];
            if (u[o](s)) {
                yt(a, s);
                return n ? n(u[s]) : u[s]
            }
            a.length >= 1e3 && delete u[a.shift()];
            a.push(s);
            u[s] = e[h](t, i);
            return n ? n(u[s]) : u[s]
        }
        return r
    }

    function Et() {
        return this.hex
    }

    function St(e) {
        var t = [];
        for (var n = 0, r = e.length; r - 2 > n; n += 2) {
            var i = [{
                x: +e[n],
                y: +e[n + 1]
            }, {
                x: +e[n],
                y: +e[n + 1]
            }, {
                x: +e[n + 2],
                y: +e[n + 3]
            }, {
                x: +e[n + 4],
                y: +e[n + 5]
            }];
            if (r - 4 == n) {
                i[0] = {
                    x: +e[n - 2],
                    y: +e[n - 1]
                };
                i[3] = i[2]
            } else if (n) {
                i[0] = {
                    x: +e[n - 2],
                    y: +e[n - 1]
                }
            }
            t.push(["C", (-i[0].x + 6 * i[1].x + i[2].x) / 6, (-i[0].y + 6 * i[1].y + i[2].y) / 6, (i[1].x + 6 * i[2].x - i[3].x) / 6, (i[1].y + 6 * i[2].y - i[3].y) / 6, i[2].x, i[2].y])
        }
        return t
    }

    function zt(e, t, n, r, i, s) {
        if (e != null) {
            this.a = +e;
            this.b = +t;
            this.c = +n;
            this.d = +r;
            this.e = +i;
            this.f = +s
        } else {
            this.a = 1;
            this.b = 0;
            this.c = 0;
            this.d = 1;
            this.e = 0;
            this.f = 0
        }
    }

    function nn() {
        return this.x + m + this.y
    }

    function rn() {
        return this.x + m + this.y + m + this.width + " × " + this.height
    }

    function mn(e, t, n, r, i, s) {
        function h(e) {
            return ((a * e + u) * e + o) * e
        }

        function p(e, t) {
            var n = d(e, t);
            return ((c * n + l) * n + f) * n
        }

        function d(e, t) {
            var n, r, i, s, f, l;
            for (i = e, l = 0; l < 8; l++) {
                s = h(i) - e;
                if (N(s) < t) {
                    return i
                }
                f = (3 * a * i + 2 * u) * i + o;
                if (N(f) < 1e-6) {
                    break
                }
                i = i - s / f
            }
            n = 0;
            r = 1;
            i = e;
            if (i < n) {
                return n
            }
            if (i > r) {
                return r
            }
            while (n < r) {
                s = h(i);
                if (N(s - e) < t) {
                    return i
                }
                if (e > s) {
                    n = i
                } else {
                    r = i
                }
                i = (r - n) / 2 + n
            }
            return i
        }
        var o = 3 * t,
            u = 3 * (r - t) - o,
            a = 1 - o - u,
            f = 3 * n,
            l = 3 * (i - n) - f,
            c = 1 - f - l;
        return p(e, 1 / (200 * s))
    }

    function gn(e, t) {
        var n = [],
            r = {};
        this.ms = t;
        this.times = 1;
        if (e) {
            for (var i in e)
                if (e[o](i)) {
                    r[U(i)] = e[i];
                    n.push(U(i))
                }
            n.sort(nt)
        }
        this.anim = r;
        this.top = n[n.length - 1];
        this.percents = n
    }

    function yn(t, r, i, s, u, a) {
        i = U(i);
        var f, l, c, h = [],
            p, d, v, m = t.ms,
            y = {},
            b = {},
            w = {};
        if (s) {
            for (S = 0, x = hn.length; S < x; S++) {
                var E = hn[S];
                if (E.el.id == r.id && E.anim == t) {
                    if (E.percent != i) {
                        hn.splice(S, 1);
                        c = 1
                    } else {
                        l = E
                    }
                    r.attr(E.totalOrigin);
                    break
                }
            }
        } else {
            s = +b
        }
        for (var S = 0, x = t.percents.length; S < x; S++) {
            if (t.percents[S] == i || t.percents[S] > s * t.top) {
                i = t.percents[S];
                d = t.percents[S - 1] || 0;
                m = m / t.top * (i - d);
                p = t.percents[S + 1];
                f = t.anim[i];
                break
            } else if (s) {
                r.attr(t.anim[t.percents[S]])
            }
        }
        if (!f) {
            return
        }
        if (!l) {
            for (attr in f)
                if (f[o](attr)) {
                    if (V[o](attr) || r.paper.customAttributes[o](attr)) {
                        y[attr] = r.attr(attr);
                        y[attr] == null && (y[attr] = X[attr]);
                        b[attr] = f[attr];
                        switch (V[attr]) {
                            case L:
                                w[attr] = (b[attr] - y[attr]) / m;
                                break;
                            case "colour":
                                y[attr] = e.getRGB(y[attr]);
                                var T = e.getRGB(b[attr]);
                                w[attr] = {
                                    r: (T.r - y[attr].r) / m,
                                    g: (T.g - y[attr].g) / m,
                                    b: (T.b - y[attr].b) / m
                                };
                                break;
                            case "path":
                                var N = _t(y[attr], b[attr]),
                                    C = N[1];
                                y[attr] = N[0];
                                w[attr] = [];
                                for (S = 0, x = y[attr].length; S < x; S++) {
                                    w[attr][S] = [0];
                                    for (var k = 1, A = y[attr][S].length; k < A; k++) {
                                        w[attr][S][k] = (C[S][k] - y[attr][S][k]) / m
                                    }
                                }
                                break;
                            case "transform":
                                var O = r._,
                                    M = Ut(O[attr], b[attr]);
                                if (M) {
                                    y[attr] = M.from;
                                    b[attr] = M.to;
                                    w[attr] = [];
                                    w[attr].real = true;
                                    for (S = 0, x = y[attr].length; S < x; S++) {
                                        w[attr][S] = [y[attr][S][0]];
                                        for (k = 1, A = y[attr][S].length; k < A; k++) {
                                            w[attr][S][k] = (b[attr][S][k] - y[attr][S][k]) / m
                                        }
                                    }
                                } else {
                                    var _ = r.matrix || new zt,
                                        D = {
                                            _: {
                                                transform: O.transform
                                            },
                                            getBBox: function() {
                                                return r.getBBox(1)
                                            }
                                        };
                                    y[attr] = [_.a, _.b, _.c, _.d, _.e, _.f];
                                    qt(D, b[attr]);
                                    b[attr] = D._.transform;
                                    w[attr] = [(D.matrix.a - _.a) / m, (D.matrix.b - _.b) / m, (D.matrix.c - _.c) / m, (D.matrix.d - _.d) / m, (D.matrix.e - _.e) / m, (D.matrix.e - _.f) / m]
                                }
                                break;
                            case "csv":
                                var P = g(f[attr]).split(n),
                                    H = g(y[attr]).split(n);
                                if (attr == "clip-rect") {
                                    y[attr] = H;
                                    w[attr] = [];
                                    S = H.length;
                                    while (S--) {
                                        w[attr][S] = (P[S] - y[attr][S]) / m
                                    }
                                }
                                b[attr] = P;
                                break;
                            default:
                                P = [].concat(f[attr]);
                                H = [].concat(y[attr]);
                                w[attr] = [];
                                S = r.paper.customAttributes[attr].length;
                                while (S--) {
                                    w[attr][S] = ((P[S] || 0) - (H[S] || 0)) / m
                                }
                                break
                        }
                    }
                }
            var B = f.easing,
                j = e.easing_formulas[B];
            if (!j) {
                j = g(B).match(I);
                if (j && j.length == 5) {
                    var F = j;
                    j = function(e) {
                        return mn(e, +F[1], +F[2], +F[3], +F[4], m)
                    }
                } else {
                    j = it
                }
            }
            v = f.start || t.start || +(new Date);
            E = {
                anim: t,
                percent: i,
                timestamp: v,
                start: v + (t.del || 0),
                status: 0,
                initstatus: s || 0,
                stop: false,
                ms: m,
                easing: j,
                from: y,
                diff: w,
                to: b,
                el: r,
                callback: f.callback,
                prev: d,
                next: p,
                repeat: a || t.times,
                origin: r.attr(),
                totalOrigin: u
            };
            hn.push(E);
            if (s && !l && !c) {
                E.stop = true;
                E.start = new Date - m * s;
                if (hn.length == 1) {
                    return dn()
                }
            }
            if (c) {
                E.start = new Date - E.ms * s
            }
            hn.length == 1 && pn(dn)
        } else {
            l.initstatus = s;
            l.start = new Date - l.ms * s
        }
        eve("anim.start." + r.id, r, t)
    }
    e.version = "2.0.0";
    e.eve = eve;
    var t, n = /[, ]+/,
        r = {
            circle: 1,
            rect: 1,
            path: 1,
            ellipse: 1,
            text: 1,
            image: 1
        },
        i = /\{(\d+)\}/g,
        s = "prototype",
        o = "hasOwnProperty",
        u = {
            doc: document,
            win: window
        },
        a = {
            was: Object.prototype[o].call(u.win, "Raphael"),
            is: u.win.Raphael
        },
        f = function() {
            this.customAttributes = {}
        },
        l, c = "appendChild",
        h = "apply",
        p = "concat",
        d = "createTouch" in u.doc,
        v = "",
        m = " ",
        g = String,
        y = "split",
        b = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel".split(m),
        w = {
            mousedown: "touchstart",
            mousemove: "touchmove",
            mouseup: "touchend"
        },
        E = g.prototype.toLowerCase,
        S = Math,
        x = S.max,
        T = S.min,
        N = S.abs,
        C = S.pow,
        k = S.PI,
        L = "number",
        A = "string",
        O = "array",
        M = "toString",
        _ = "fill",
        D = Object.prototype.toString,
        P = {},
        H = "push",
        B = e._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i,
        j = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,
        F = {
            NaN: 1,
            Infinity: 1,
            "-Infinity": 1
        },
        I = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
        q = S.round,
        R = "setAttribute",
        U = parseFloat,
        z = parseInt,
        W = g.prototype.toUpperCase,
        X = e._availableAttrs = {
            "arrow-end": "none",
            "arrow-start": "none",
            blur: 0,
            "clip-rect": "0 0 1e9 1e9",
            cursor: "default",
            cx: 0,
            cy: 0,
            fill: "#fff",
            "fill-opacity": 1,
            font: '10px "Arial"',
            "font-family": '"Arial"',
            "font-size": "10",
            "font-style": "normal",
            "font-weight": 400,
            gradient: 0,
            height: 0,
            href: "http://raphaeljs.com/",
            opacity: 1,
            path: "M0,0",
            r: 0,
            rx: 0,
            ry: 0,
            src: "",
            stroke: "#000",
            "stroke-dasharray": "",
            "stroke-linecap": "butt",
            "stroke-linejoin": "butt",
            "stroke-miterlimit": 0,
            "stroke-opacity": 1,
            "stroke-width": 1,
            target: "_blank",
            "text-anchor": "middle",
            title: "Raphael",
            transform: "",
            width: 0,
            x: 0,
            y: 0
        },
        V = e._availableAnimAttrs = {
            blur: L,
            "clip-rect": "csv",
            cx: L,
            cy: L,
            fill: "colour",
            "fill-opacity": L,
            "font-size": L,
            height: L,
            opacity: L,
            path: "path",
            r: L,
            rx: L,
            ry: L,
            stroke: "colour",
            "stroke-opacity": L,
            "stroke-width": L,
            transform: "transform",
            width: L,
            x: L,
            y: L
        },
        $ = /\s*,\s*/,
        J = {
            hs: 1,
            rg: 1
        },
        K = /,?([achlmqrstvxz]),?/gi,
        Q = /([achlmrqstvz])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?\s*,?\s*)+)/ig,
        G = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?\s*,?\s*)+)/ig,
        Y = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)\s*,?\s*/ig,
        Z = e._radial_gradient = /^r(?:\(([^,]+?)\s*,\s*([^\)]+?)\))?/,
        et = {},
        tt = function(e, t) {
            return e.key - t.key
        },
        nt = function(e, t) {
            return U(e) - U(t)
        },
        rt = function() {},
        it = function(e) {
            return e
        },
        st = e._rectPath = function(e, t, n, r, i) {
            if (i) {
                return [
                    ["M", e + i, t],
                    ["l", n - i * 2, 0],
                    ["a", i, i, 0, 0, 1, i, i],
                    ["l", 0, r - i * 2],
                    ["a", i, i, 0, 0, 1, -i, i],
                    ["l", i * 2 - n, 0],
                    ["a", i, i, 0, 0, 1, -i, -i],
                    ["l", 0, i * 2 - r],
                    ["a", i, i, 0, 0, 1, i, -i],
                    ["z"]
                ]
            }
            return [
                ["M", e, t],
                ["l", n, 0],
                ["l", 0, r],
                ["l", -n, 0],
                ["z"]
            ]
        },
        ot = function(e, t, n, r) {
            if (r == null) {
                r = n
            }
            return [
                ["M", e, t],
                ["m", 0, -r],
                ["a", n, r, 0, 1, 1, 0, 2 * r],
                ["a", n, r, 0, 1, 1, 0, -2 * r],
                ["z"]
            ]
        },
        ut = e._getPath = {
            path: function(e) {
                return e.attr("path")
            },
            circle: function(e) {
                var t = e.attrs;
                return ot(t.cx, t.cy, t.r)
            },
            ellipse: function(e) {
                var t = e.attrs;
                return ot(t.cx, t.cy, t.rx, t.ry)
            },
            rect: function(e) {
                var t = e.attrs;
                return st(t.x, t.y, t.width, t.height, t.r)
            },
            image: function(e) {
                var t = e.attrs;
                return st(t.x, t.y, t.width, t.height)
            },
            text: function(e) {
                var t = e._getBBox();
                return st(t.x, t.y, t.width, t.height)
            }
        },
        at = e.mapPath = function(e, t) {
            if (!t) {
                return e
            }
            var n, r, i, s, o;
            e = _t(e);
            for (i = 0, ii = e.length; i < ii; i++) {
                o = e[i];
                for (s = 1, jj = o.length; s < jj; s += 2) {
                    n = t.x(o[s], o[s + 1]);
                    r = t.y(o[s], o[s + 1]);
                    o[s] = n;
                    o[s + 1] = r
                }
            }
            return e
        };
    e._g = u;
    e.type = u.win.SVGAngle || u.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML";
    if (e.type == "VML") {
        var ft = u.doc.createElement("div"),
            lt;
        ft.innerHTML = '<v:shape adj="1"/>';
        lt = ft.firstChild;
        lt.style.behavior = "url(#default#VML)";
        if (!(lt && typeof lt.adj == "object")) {
            return e.type = v
        }
        ft = null
    }
    e.svg = !(e.vml = e.type == "VML");
    e._Paper = f;
    e.fn = l = f.prototype = e.prototype;
    e._id = 0;
    e._oid = 0;
    e.is = function(e, t) {
        t = E.call(t);
        if (t == "finite") {
            return !F[o](+e)
        }
        if (t == "array") {
            return e instanceof Array
        }
        return t == "null" && e === null || t == typeof e || t == "object" && e === Object(e) || t == "array" && Array.isArray && Array.isArray(e) || D.call(e).slice(8, -1).toLowerCase() == t
    };
    e.angle = function(t, n, r, i, s, o) {
        if (s == null) {
            var u = t - r,
                a = n - i;
            if (!u && !a) {
                return 0
            }
            return (180 + S.atan2(-a, -u) * 180 / k + 360) % 360
        } else {
            return e.angle(t, n, s, o) - e.angle(r, i, s, o)
        }
    };
    e.rad = function(e) {
        return e % 360 * k / 180
    };
    e.deg = function(e) {
        return e * 180 / k % 360
    };
    e.snapTo = function(t, n, r) {
        r = e.is(r, "finite") ? r : 10;
        if (e.is(t, O)) {
            var i = t.length;
            while (i--)
                if (N(t[i] - n) <= r) {
                    return t[i]
                }
        } else {
            t = +t;
            var s = n % t;
            if (s < r) {
                return n - s
            }
            if (s > t - r) {
                return n - s + t
            }
        }
        return n
    };
    var ct = e.createUUID = function(e, t) {
        return function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(e, t).toUpperCase()
        }
    }(/[xy]/g, function(e) {
        var t = S.random() * 16 | 0,
            n = e == "x" ? t : t & 3 | 8;
        return n.toString(16)
    });
    e.setWindow = function(t) {
        eve("setWindow", e, u.win, t);
        u.win = t;
        u.doc = u.win.document;
        if (initWin) {
            initWin(u.win)
        }
    };
    var ht = function(t) {
            if (e.vml) {
                var n = /^\s+|\s+$/g;
                var r;
                try {
                    var i = new ActiveXObject("htmlfile");
                    i.write("<body>");
                    i.close();
                    r = i.body
                } catch (s) {
                    r = createPopup().document.body
                }
                var o = r.createTextRange();
                ht = bt(function(e) {
                    try {
                        r.style.color = g(e).replace(n, v);
                        var t = o.queryCommandValue("ForeColor");
                        t = (t & 255) << 16 | t & 65280 | (t & 16711680) >>> 16;
                        return "#" + ("000000" + t.toString(16)).slice(-6)
                    } catch (i) {
                        return "none"
                    }
                })
            } else {
                var a = u.doc.createElement("i");
                a.title = "Raphaël Colour Picker";
                a.style.display = "none";
                u.doc.body.appendChild(a);
                ht = bt(function(e) {
                    a.style.color = e;
                    return u.doc.defaultView.getComputedStyle(a, v).getPropertyValue("color")
                })
            }
            return ht(t)
        },
        pt = function() {
            return "hsb(" + [this.h, this.s, this.b] + ")"
        },
        dt = function() {
            return "hsl(" + [this.h, this.s, this.l] + ")"
        },
        vt = function() {
            return this.hex
        },
        mt = function(t, n, r) {
            if (n == null && e.is(t, "object") && "r" in t && "g" in t && "b" in t) {
                r = t.b;
                n = t.g;
                t = t.r
            }
            if (n == null && e.is(t, A)) {
                var i = e.getRGB(t);
                t = i.r;
                n = i.g;
                r = i.b
            }
            if (t > 1 || n > 1 || r > 1) {
                t /= 255;
                n /= 255;
                r /= 255
            }
            return [t, n, r]
        },
        gt = function(t, n, r, i) {
            t *= 255;
            n *= 255;
            r *= 255;
            var s = {
                r: t,
                g: n,
                b: r,
                hex: e.rgb(t, n, r),
                toString: vt
            };
            e.is(i, "finite") && (s.opacity = i);
            return s
        };
    e.color = function(t) {
        var n;
        if (e.is(t, "object") && "h" in t && "s" in t && "b" in t) {
            n = e.hsb2rgb(t);
            t.r = n.r;
            t.g = n.g;
            t.b = n.b;
            t.hex = n.hex
        } else if (e.is(t, "object") && "h" in t && "s" in t && "l" in t) {
            n = e.hsl2rgb(t);
            t.r = n.r;
            t.g = n.g;
            t.b = n.b;
            t.hex = n.hex
        } else {
            if (e.is(t, "string")) {
                t = e.getRGB(t)
            }
            if (e.is(t, "object") && "r" in t && "g" in t && "b" in t) {
                n = e.rgb2hsl(t);
                t.h = n.h;
                t.s = n.s;
                t.l = n.l;
                n = e.rgb2hsb(t);
                t.v = n.b
            } else {
                t = {
                    hex: "none"
                };
                crl.r = t.g = t.b = t.h = t.s = t.v = t.l = -1
            }
        }
        t.toString = vt;
        return t
    };
    e.hsb2rgb = function(e, t, n, r) {
        if (this.is(e, "object") && "h" in e && "s" in e && "b" in e) {
            n = e.b;
            t = e.s;
            e = e.h;
            r = e.o
        }
        e *= 360;
        var i, s, o, u, a;
        e = e % 360 / 60;
        a = n * t;
        u = a * (1 - N(e % 2 - 1));
        i = s = o = n - a;
        e = ~~e;
        i += [a, u, 0, 0, u, a][e];
        s += [u, a, a, u, 0, 0][e];
        o += [0, 0, u, a, a, u][e];
        return gt(i, s, o, r)
    };
    e.hsl2rgb = function(e, t, n, r) {
        if (this.is(e, "object") && "h" in e && "s" in e && "l" in e) {
            n = e.l;
            t = e.s;
            e = e.h
        }
        if (e > 1 || t > 1 || n > 1) {
            e /= 360;
            t /= 100;
            n /= 100
        }
        e *= 360;
        var i, s, o, u, a;
        e = e % 360 / 60;
        a = 2 * t * (n < .5 ? n : 1 - n);
        u = a * (1 - N(e % 2 - 1));
        i = s = o = n - a / 2;
        e = ~~e;
        i += [a, u, 0, 0, u, a][e];
        s += [u, a, a, u, 0, 0][e];
        o += [0, 0, u, a, a, u][e];
        return gt(i, s, o, r)
    };
    e.rgb2hsb = function(e, t, n) {
        n = mt(e, t, n);
        e = n[0];
        t = n[1];
        n = n[2];
        var r, i, s, o;
        s = x(e, t, n);
        o = s - T(e, t, n);
        r = o == 0 ? null : s == e ? (t - n) / o : s == t ? (n - e) / o + 2 : (e - t) / o + 4;
        r = (r + 360) % 6 * 60 / 360;
        i = o == 0 ? 0 : o / s;
        return {
            h: r,
            s: i,
            b: s,
            toString: pt
        }
    };
    e.rgb2hsl = function(e, t, n) {
        n = mt(e, t, n);
        e = n[0];
        t = n[1];
        n = n[2];
        var r, i, s, o, u, a;
        o = x(e, t, n);
        u = T(e, t, n);
        a = o - u;
        r = a == 0 ? null : o == e ? (t - n) / a : o == t ? (n - e) / a + 2 : (e - t) / a + 4;
        r = (r + 360) % 6 * 60 / 360;
        s = (o + u) / 2;
        i = a == 0 ? 0 : s < .5 ? a / (2 * s) : a / (2 - 2 * s);
        return {
            h: r,
            s: i,
            l: s,
            toString: dt
        }
    };
    e._path2string = function() {
        return this.join(",").replace(K, "$1")
    };
    var wt = e._preload = function(e, t) {
        var n = u.doc.createElement("img");
        n.style.cssText = "position:absolute;left:-9999em;top-9999em";
        n.onload = function() {
            t.call(this);
            this.onload = null;
            u.doc.body.removeChild(this)
        };
        n.onerror = function() {
            u.doc.body.removeChild(this)
        };
        u.doc.body.appendChild(n);
        n.src = e
    };
    e.getRGB = bt(function(t) {
        if (!t || !!((t = g(t)).indexOf("-") + 1)) {
            return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                error: 1,
                toString: Et
            }
        }
        if (t == "none") {
            return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                toString: Et
            }
        }!(J[o](t.toLowerCase().substring(0, 2)) || t.charAt() == "#") && (t = ht(t));
        var n, r, i, s, u, a, f, l = t.match(j);
        if (l) {
            if (l[2]) {
                s = z(l[2].substring(5), 16);
                i = z(l[2].substring(3, 5), 16);
                r = z(l[2].substring(1, 3), 16)
            }
            if (l[3]) {
                s = z((a = l[3].charAt(3)) + a, 16);
                i = z((a = l[3].charAt(2)) + a, 16);
                r = z((a = l[3].charAt(1)) + a, 16)
            }
            if (l[4]) {
                f = l[4].split($);
                r = U(f[0]);
                f[0].slice(-1) == "%" && (r *= 2.55);
                i = U(f[1]);
                f[1].slice(-1) == "%" && (i *= 2.55);
                s = U(f[2]);
                f[2].slice(-1) == "%" && (s *= 2.55);
                l[1].toLowerCase().slice(0, 4) == "rgba" && (u = U(f[3]));
                f[3] && f[3].slice(-1) == "%" && (u /= 100)
            }
            if (l[5]) {
                f = l[5].split($);
                r = U(f[0]);
                f[0].slice(-1) == "%" && (r *= 2.55);
                i = U(f[1]);
                f[1].slice(-1) == "%" && (i *= 2.55);
                s = U(f[2]);
                f[2].slice(-1) == "%" && (s *= 2.55);
                (f[0].slice(-3) == "deg" || f[0].slice(-1) == "°") && (r /= 360);
                l[1].toLowerCase().slice(0, 4) == "hsba" && (u = U(f[3]));
                f[3] && f[3].slice(-1) == "%" && (u /= 100);
                return e.hsb2rgb(r, i, s, u)
            }
            if (l[6]) {
                f = l[6].split($);
                r = U(f[0]);
                f[0].slice(-1) == "%" && (r *= 2.55);
                i = U(f[1]);
                f[1].slice(-1) == "%" && (i *= 2.55);
                s = U(f[2]);
                f[2].slice(-1) == "%" && (s *= 2.55);
                (f[0].slice(-3) == "deg" || f[0].slice(-1) == "°") && (r /= 360);
                l[1].toLowerCase().slice(0, 4) == "hsla" && (u = U(f[3]));
                f[3] && f[3].slice(-1) == "%" && (u /= 100);
                return e.hsl2rgb(r, i, s, u)
            }
            l = {
                r: r,
                g: i,
                b: s,
                toString: Et
            };
            l.hex = "#" + (16777216 | s | i << 8 | r << 16).toString(16).slice(1);
            e.is(u, "finite") && (l.opacity = u);
            return l
        }
        return {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            error: 1,
            toString: Et
        }
    }, e);
    e.hsb = bt(function(t, n, r) {
        return e.hsb2rgb(t, n, r).hex
    });
    e.hsl = bt(function(t, n, r) {
        return e.hsl2rgb(t, n, r).hex
    });
    e.rgb = bt(function(e, t, n) {
        return "#" + (16777216 | n | t << 8 | e << 16).toString(16).slice(1)
    });
    e.getColor = function(e) {
        var t = this.getColor.start = this.getColor.start || {
                h: 0,
                s: 1,
                b: e || .75
            },
            n = this.hsb2rgb(t.h, t.s, t.b);
        t.h += .075;
        if (t.h > 1) {
            t.h = 0;
            t.s -= .2;
            t.s <= 0 && (this.getColor.start = {
                h: 0,
                s: 1,
                b: t.b
            })
        }
        return n.hex
    };
    e.getColor.reset = function() {
        delete this.start
    };
    e.parsePathString = bt(function(t) {
        if (!t) {
            return null
        }
        var n = {
                a: 7,
                c: 6,
                h: 1,
                l: 2,
                m: 2,
                r: 4,
                q: 4,
                s: 4,
                t: 2,
                v: 1,
                z: 0
            },
            r = [];
        if (e.is(t, O) && e.is(t[0], O)) {
            r = Tt(t)
        }
        if (!r.length) {
            g(t).replace(Q, function(e, t, i) {
                var s = [],
                    o = t.toLowerCase();
                i.replace(Y, function(e, t) {
                    t && s.push(+t)
                });
                if (o == "m" && s.length > 2) {
                    r.push([t][p](s.splice(0, 2)));
                    o = "l";
                    t = t == "m" ? "l" : "L"
                }
                if (o == "r") {
                    r.push([t][p](s))
                } else
                    while (s.length >= n[o]) {
                        r.push([t][p](s.splice(0, n[o])));
                        if (!n[o]) {
                            break
                        }
                    }
            })
        }
        r.toString = e._path2string;
        return r
    });
    e.parseTransformString = bt(function(t) {
        if (!t) {
            return null
        }
        var n = {
                r: 3,
                s: 4,
                t: 2,
                m: 6
            },
            r = [];
        if (e.is(t, O) && e.is(t[0], O)) {
            r = Tt(t)
        }
        if (!r.length) {
            g(t).replace(G, function(e, t, n) {
                var i = [],
                    s = E.call(t);
                n.replace(Y, function(e, t) {
                    t && i.push(+t)
                });
                r.push([s][p](i))
            })
        }
        r.toString = e._path2string;
        return r
    });
    e.findDotsAtSegment = function(e, t, n, r, i, s, o, u, a) {
        var f = 1 - a,
            l = C(f, 3),
            c = C(f, 2),
            h = a * a,
            p = h * a,
            d = l * e + c * 3 * a * n + f * 3 * a * a * i + p * o,
            v = l * t + c * 3 * a * r + f * 3 * a * a * s + p * u,
            m = e + 2 * a * (n - e) + h * (i - 2 * n + e),
            g = t + 2 * a * (r - t) + h * (s - 2 * r + t),
            y = n + 2 * a * (i - n) + h * (o - 2 * i + n),
            b = r + 2 * a * (s - r) + h * (u - 2 * s + r),
            w = f * e + a * n,
            E = f * t + a * r,
            x = f * i + a * o,
            T = f * s + a * u,
            N = 90 - S.atan2(m - y, g - b) * 180 / k;
        (m > y || g < b) && (N += 180);
        return {
            x: d,
            y: v,
            m: {
                x: m,
                y: g
            },
            n: {
                x: y,
                y: b
            },
            start: {
                x: w,
                y: E
            },
            end: {
                x: x,
                y: T
            },
            alpha: N
        }
    };
    var xt = bt(function(e) {
            if (!e) {
                return {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                }
            }
            e = _t(e);
            var t = 0,
                n = 0,
                r = [],
                i = [],
                s;
            for (var o = 0, u = e.length; o < u; o++) {
                s = e[o];
                if (s[0] == "M") {
                    t = s[1];
                    n = s[2];
                    r.push(t);
                    i.push(n)
                } else {
                    var a = Mt(t, n, s[1], s[2], s[3], s[4], s[5], s[6]);
                    r = r[p](a.min.x, a.max.x);
                    i = i[p](a.min.y, a.max.y);
                    t = s[5];
                    n = s[6]
                }
            }
            var f = T[h](0, r),
                l = T[h](0, i);
            return {
                x: f,
                y: l,
                width: x[h](0, r) - f,
                height: x[h](0, i) - l
            }
        }, null, function(e) {
            return {
                x: e.x,
                y: e.y,
                width: e.width,
                height: e.height
            }
        }),
        Tt = function(t) {
            var n = [];
            if (!e.is(t, O) || !e.is(t && t[0], O)) {
                t = e.parsePathString(t)
            }
            for (var r = 0, i = t.length; r < i; r++) {
                n[r] = [];
                for (var s = 0, o = t[r].length; s < o; s++) {
                    n[r][s] = t[r][s]
                }
            }
            n.toString = e._path2string;
            return n
        },
        Nt = e._pathToRelative = bt(function(t) {
            if (!e.is(t, O) || !e.is(t && t[0], O)) {
                t = e.parsePathString(t)
            }
            var n = [],
                r = 0,
                i = 0,
                s = 0,
                o = 0,
                u = 0;
            if (t[0][0] == "M") {
                r = t[0][1];
                i = t[0][2];
                s = r;
                o = i;
                u++;
                n.push(["M", r, i])
            }
            for (var a = u, f = t.length; a < f; a++) {
                var l = n[a] = [],
                    c = t[a];
                if (c[0] != E.call(c[0])) {
                    l[0] = E.call(c[0]);
                    switch (l[0]) {
                        case "a":
                            l[1] = c[1];
                            l[2] = c[2];
                            l[3] = c[3];
                            l[4] = c[4];
                            l[5] = c[5];
                            l[6] = +(c[6] - r).toFixed(3);
                            l[7] = +(c[7] - i).toFixed(3);
                            break;
                        case "v":
                            l[1] = +(c[1] - i).toFixed(3);
                            break;
                        case "m":
                            s = c[1];
                            o = c[2];
                        default:
                            for (var h = 1, p = c.length; h < p; h++) {
                                l[h] = +(c[h] - (h % 2 ? r : i)).toFixed(3)
                            }
                    }
                } else {
                    l = n[a] = [];
                    if (c[0] == "m") {
                        s = c[1] + r;
                        o = c[2] + i
                    }
                    for (var d = 0, v = c.length; d < v; d++) {
                        n[a][d] = c[d]
                    }
                }
                var m = n[a].length;
                switch (n[a][0]) {
                    case "z":
                        r = s;
                        i = o;
                        break;
                    case "h":
                        r += +n[a][m - 1];
                        break;
                    case "v":
                        i += +n[a][m - 1];
                        break;
                    default:
                        r += +n[a][m - 2];
                        i += +n[a][m - 1]
                }
            }
            n.toString = e._path2string;
            return n
        }, 0, Tt),
        Ct = e._pathToAbsolute = bt(function(t) {
            if (!e.is(t, O) || !e.is(t && t[0], O)) {
                t = e.parsePathString(t)
            }
            if (!t || !t.length) {
                return [
                    ["M", 0, 0]
                ]
            }
            var n = [],
                r = 0,
                i = 0,
                s = 0,
                o = 0,
                u = 0;
            if (t[0][0] == "M") {
                r = +t[0][1];
                i = +t[0][2];
                s = r;
                o = i;
                u++;
                n[0] = ["M", r, i]
            }
            for (var a, f, l = u, c = t.length; l < c; l++) {
                n.push(a = []);
                f = t[l];
                if (f[0] != W.call(f[0])) {
                    a[0] = W.call(f[0]);
                    switch (a[0]) {
                        case "A":
                            a[1] = f[1];
                            a[2] = f[2];
                            a[3] = f[3];
                            a[4] = f[4];
                            a[5] = f[5];
                            a[6] = +(f[6] + r);
                            a[7] = +(f[7] + i);
                            break;
                        case "V":
                            a[1] = +f[1] + i;
                            break;
                        case "H":
                            a[1] = +f[1] + r;
                            break;
                        case "R":
                            var h = [r, i][p](f.slice(1));
                            for (var d = 2, v = h.length; d < v; d++) {
                                h[d] = +h[d] + r;
                                h[++d] = +h[d] + i
                            }
                            n.pop();
                            n = n[p](St(h));
                            break;
                        case "M":
                            s = +f[1] + r;
                            o = +f[2] + i;
                        default:
                            for (d = 1, v = f.length; d < v; d++) {
                                a[d] = +f[d] + (d % 2 ? r : i)
                            }
                    }
                } else if (f[0] == "R") {
                    h = [r, i][p](f.slice(1));
                    n.pop();
                    n = n[p](St(h));
                    a = ["R"][p](f.slice(-2))
                } else {
                    for (var m = 0, g = f.length; m < g; m++) {
                        a[m] = f[m]
                    }
                }
                switch (a[0]) {
                    case "Z":
                        r = s;
                        i = o;
                        break;
                    case "H":
                        r = a[1];
                        break;
                    case "V":
                        i = a[1];
                        break;
                    case "M":
                        s = a[a.length - 2];
                        o = a[a.length - 1];
                    default:
                        r = a[a.length - 2];
                        i = a[a.length - 1]
                }
            }
            n.toString = e._path2string;
            return n
        }, null, Tt),
        kt = function(e, t, n, r) {
            return [e, t, n, r, n, r]
        },
        Lt = function(e, t, n, r, i, s) {
            var o = 1 / 3,
                u = 2 / 3;
            return [o * e + u * n, o * t + u * r, o * i + u * n, o * s + u * r, i, s]
        },
        At = function(e, t, n, r, i, s, o, u, a, f) {
            var l = k * 120 / 180,
                c = k / 180 * (+i || 0),
                h = [],
                d, v = bt(function(e, t, n) {
                    var r = e * S.cos(n) - t * S.sin(n),
                        i = e * S.sin(n) + t * S.cos(n);
                    return {
                        x: r,
                        y: i
                    }
                });
            if (!f) {
                d = v(e, t, -c);
                e = d.x;
                t = d.y;
                d = v(u, a, -c);
                u = d.x;
                a = d.y;
                var m = S.cos(k / 180 * i),
                    g = S.sin(k / 180 * i),
                    y = (e - u) / 2,
                    b = (t - a) / 2;
                var w = y * y / (n * n) + b * b / (r * r);
                if (w > 1) {
                    w = S.sqrt(w);
                    n = w * n;
                    r = w * r
                }
                var E = n * n,
                    x = r * r,
                    T = (s == o ? -1 : 1) * S.sqrt(N((E * x - E * b * b - x * y * y) / (E * b * b + x * y * y))),
                    C = T * n * b / r + (e + u) / 2,
                    L = T * -r * y / n + (t + a) / 2,
                    A = S.asin(((t - L) / r).toFixed(9)),
                    O = S.asin(((a - L) / r).toFixed(9));
                A = e < C ? k - A : A;
                O = u < C ? k - O : O;
                A < 0 && (A = k * 2 + A);
                O < 0 && (O = k * 2 + O);
                if (o && A > O) {
                    A = A - k * 2
                }
                if (!o && O > A) {
                    O = O - k * 2
                }
            } else {
                A = f[0];
                O = f[1];
                C = f[2];
                L = f[3]
            }
            var M = O - A;
            if (N(M) > l) {
                var _ = O,
                    D = u,
                    P = a;
                O = A + l * (o && O > A ? 1 : -1);
                u = C + n * S.cos(O);
                a = L + r * S.sin(O);
                h = At(u, a, n, r, i, 0, o, D, P, [O, _, C, L])
            }
            M = O - A;
            var H = S.cos(A),
                B = S.sin(A),
                j = S.cos(O),
                F = S.sin(O),
                I = S.tan(M / 4),
                q = 4 / 3 * n * I,
                R = 4 / 3 * r * I,
                U = [e, t],
                z = [e + q * B, t - R * H],
                W = [u + q * F, a - R * j],
                X = [u, a];
            z[0] = 2 * U[0] - z[0];
            z[1] = 2 * U[1] - z[1];
            if (f) {
                return [z, W, X][p](h)
            } else {
                h = [z, W, X][p](h).join().split(",");
                var V = [];
                for (var $ = 0, J = h.length; $ < J; $++) {
                    V[$] = $ % 2 ? v(h[$ - 1], h[$], c).y : v(h[$], h[$ + 1], c).x
                }
                return V
            }
        },
        Ot = function(e, t, n, r, i, s, o, u, a) {
            var f = 1 - a;
            return {
                x: C(f, 3) * e + C(f, 2) * 3 * a * n + f * 3 * a * a * i + C(a, 3) * o,
                y: C(f, 3) * t + C(f, 2) * 3 * a * r + f * 3 * a * a * s + C(a, 3) * u
            }
        },
        Mt = bt(function(e, t, n, r, i, s, o, u) {
            var a = i - 2 * n + e - (o - 2 * i + n),
                f = 2 * (n - e) - 2 * (i - n),
                l = e - n,
                c = (-f + S.sqrt(f * f - 4 * a * l)) / 2 / a,
                p = (-f - S.sqrt(f * f - 4 * a * l)) / 2 / a,
                d = [t, u],
                v = [e, o],
                m;
            N(c) > "1e12" && (c = .5);
            N(p) > "1e12" && (p = .5);
            if (c > 0 && c < 1) {
                m = Ot(e, t, n, r, i, s, o, u, c);
                v.push(m.x);
                d.push(m.y)
            }
            if (p > 0 && p < 1) {
                m = Ot(e, t, n, r, i, s, o, u, p);
                v.push(m.x);
                d.push(m.y)
            }
            a = s - 2 * r + t - (u - 2 * s + r);
            f = 2 * (r - t) - 2 * (s - r);
            l = t - r;
            c = (-f + S.sqrt(f * f - 4 * a * l)) / 2 / a;
            p = (-f - S.sqrt(f * f - 4 * a * l)) / 2 / a;
            N(c) > "1e12" && (c = .5);
            N(p) > "1e12" && (p = .5);
            if (c > 0 && c < 1) {
                m = Ot(e, t, n, r, i, s, o, u, c);
                v.push(m.x);
                d.push(m.y)
            }
            if (p > 0 && p < 1) {
                m = Ot(e, t, n, r, i, s, o, u, p);
                v.push(m.x);
                d.push(m.y)
            }
            return {
                min: {
                    x: T[h](0, v),
                    y: T[h](0, d)
                },
                max: {
                    x: x[h](0, v),
                    y: x[h](0, d)
                }
            }
        }),
        _t = e._path2curve = bt(function(e, t) {
            var n = Ct(e),
                r = t && Ct(t),
                i = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                },
                s = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                },
                o = function(e, t) {
                    var n, r;
                    if (!e) {
                        return ["C", t.x, t.y, t.x, t.y, t.x, t.y]
                    }!(e[0] in {
                        T: 1,
                        Q: 1
                    }) && (t.qx = t.qy = null);
                    switch (e[0]) {
                        case "M":
                            t.X = e[1];
                            t.Y = e[2];
                            break;
                        case "A":
                            e = ["C"][p](At[h](0, [t.x, t.y][p](e.slice(1))));
                            break;
                        case "S":
                            n = t.x + (t.x - (t.bx || t.x));
                            r = t.y + (t.y - (t.by || t.y));
                            e = ["C", n, r][p](e.slice(1));
                            break;
                        case "T":
                            t.qx = t.x + (t.x - (t.qx || t.x));
                            t.qy = t.y + (t.y - (t.qy || t.y));
                            e = ["C"][p](Lt(t.x, t.y, t.qx, t.qy, e[1], e[2]));
                            break;
                        case "Q":
                            t.qx = e[1];
                            t.qy = e[2];
                            e = ["C"][p](Lt(t.x, t.y, e[1], e[2], e[3], e[4]));
                            break;
                        case "L":
                            e = ["C"][p](kt(t.x, t.y, e[1], e[2]));
                            break;
                        case "H":
                            e = ["C"][p](kt(t.x, t.y, e[1], t.y));
                            break;
                        case "V":
                            e = ["C"][p](kt(t.x, t.y, t.x, e[1]));
                            break;
                        case "Z":
                            e = ["C"][p](kt(t.x, t.y, t.X, t.Y));
                            break
                    }
                    return e
                },
                u = function(e, t) {
                    if (e[t].length > 7) {
                        e[t].shift();
                        var i = e[t];
                        while (i.length) {
                            e.splice(t++, 0, ["C"][p](i.splice(0, 6)))
                        }
                        e.splice(t, 1);
                        l = x(n.length, r && r.length || 0)
                    }
                },
                a = function(e, t, i, s, o) {
                    if (e && t && e[o][0] == "M" && t[o][0] != "M") {
                        t.splice(o, 0, ["M", s.x, s.y]);
                        i.bx = 0;
                        i.by = 0;
                        i.x = e[o][1];
                        i.y = e[o][2];
                        l = x(n.length, r && r.length || 0)
                    }
                };
            for (var f = 0, l = x(n.length, r && r.length || 0); f < l; f++) {
                n[f] = o(n[f], i);
                u(n, f);
                r && (r[f] = o(r[f], s));
                r && u(r, f);
                a(n, r, i, s, f);
                a(r, n, s, i, f);
                var c = n[f],
                    d = r && r[f],
                    v = c.length,
                    m = r && d.length;
                i.x = c[v - 2];
                i.y = c[v - 1];
                i.bx = U(c[v - 4]) || i.x;
                i.by = U(c[v - 3]) || i.y;
                s.bx = r && (U(d[m - 4]) || s.x);
                s.by = r && (U(d[m - 3]) || s.y);
                s.x = r && d[m - 2];
                s.y = r && d[m - 1]
            }
            return r ? [n, r] : n
        }, null, Tt),
        Dt = e._parseDots = bt(function(t) {
            var n = [];
            for (var r = 0, i = t.length; r < i; r++) {
                var s = {},
                    o = t[r].match(/^([^:]*):?([\d\.]*)/);
                s.color = e.getRGB(o[1]);
                if (s.color.error) {
                    return null
                }
                s.color = s.color.hex;
                o[2] && (s.offset = o[2] + "%");
                n.push(s)
            }
            for (r = 1, i = n.length - 1; r < i; r++) {
                if (!n[r].offset) {
                    var u = U(n[r - 1].offset || 0),
                        a = 0;
                    for (var f = r + 1; f < i; f++) {
                        if (n[f].offset) {
                            a = n[f].offset;
                            break
                        }
                    }
                    if (!a) {
                        a = 100;
                        f = i
                    }
                    a = U(a);
                    var l = (a - u) / (f - r + 1);
                    for (; r < f; r++) {
                        u += l;
                        n[r].offset = u + "%"
                    }
                }
            }
            return n
        }),
        Pt = e._tear = function(e, t) {
            e == t.top && (t.top = e.prev);
            e == t.bottom && (t.bottom = e.next);
            e.next && (e.next.prev = e.prev);
            e.prev && (e.prev.next = e.next)
        },
        Ht = e._tofront = function(e, t) {
            if (t.top === e) {
                return
            }
            Pt(e, t);
            e.next = null;
            e.prev = t.top;
            t.top.next = e;
            t.top = e
        },
        Bt = e._toback = function(e, t) {
            if (t.bottom === e) {
                return
            }
            Pt(e, t);
            e.next = t.bottom;
            e.prev = null;
            t.bottom.prev = e;
            t.bottom = e
        },
        jt = e._insertafter = function(e, t, n) {
            Pt(e, n);
            t == n.top && (n.top = e);
            t.next && (t.next.prev = e);
            e.next = t.next;
            e.prev = t;
            t.next = e
        },
        Ft = e._insertbefore = function(e, t, n) {
            Pt(e, n);
            t == n.bottom && (n.bottom = e);
            t.prev && (t.prev.next = e);
            e.prev = t.prev;
            t.prev = e;
            e.next = t
        },
        It = function(e) {
            return function() {
                throw new Error("Raphaël: you are calling to method “" + e + "” of removed object")
            }
        },
        qt = e._extractTransform = function(t, n) {
            if (n == null) {
                return t._.transform
            }
            n = g(n).replace(/\.{3}|\u2026/g, t._.transform || v);
            var r = e.parseTransformString(n),
                i = 0,
                s = 0,
                o = 0,
                u = 1,
                a = 1,
                f = t._,
                l = new zt;
            f.transform = r || [];
            if (r) {
                for (var c = 0, h = r.length; c < h; c++) {
                    var p = r[c],
                        d = p.length,
                        m;
                    p[0] = g(p[0]).toLowerCase();
                    if (p[0] == "t" && d == 3) {
                        l.translate(p[1], p[2])
                    } else if (p[0] == "r") {
                        if (d == 2) {
                            m = m || t.getBBox(1);
                            l.rotate(p[1], m.x + m.width / 2, m.y + m.height / 2);
                            i += p[1]
                        } else if (d == 4) {
                            l.rotate(p[1], p[2], p[3]);
                            i += p[1]
                        }
                    } else if (p[0] == "s") {
                        if (d == 2 || d == 3) {
                            m = m || t.getBBox(1);
                            l.scale(p[1], p[d - 1], m.x + m.width / 2, m.y + m.height / 2);
                            u *= p[1];
                            a *= p[d - 1]
                        } else if (d == 5) {
                            l.scale(p[1], p[2], p[3], p[4]);
                            u *= p[1];
                            a *= p[2]
                        }
                    } else if (p[0] == "m" && d == 7) {
                        l.add(p[1], p[2], p[3], p[4], p[5], p[6])
                    }
                    f.dirtyT = 1;
                    t.matrix = l
                }
            }
            t.matrix = l;
            f.sx = u;
            f.sy = a;
            f.deg = i;
            f.dx = s = l.e;
            f.dy = o = l.f;
            if (u == 1 && a == 1 && !i && f.bbox) {
                f.bbox.x += +s;
                f.bbox.y += +o
            } else {
                f.dirtyT = 1
            }
        },
        Rt = function(e) {
            switch (e[0]) {
                case "t":
                    return ["t", 0, 0];
                case "m":
                    return ["m", 1, 0, 0, 1, 0, 0];
                case "r":
                    if (e.length == 4) {
                        return ["r", 0, e[2], e[3]]
                    } else {
                        return ["r", 0]
                    };
                case "s":
                    if (e.length == 5) {
                        return ["s", 1, 1, e[3], e[4]]
                    } else if (e.length == 3) {
                        return ["s", 1, 1]
                    } else {
                        return ["s", 1]
                    }
            }
        },
        Ut = e._equaliseTransform = function(t, n) {
            n = g(n).replace(/\.{3}|\u2026/g, t);
            t = e.parseTransformString(t) || [];
            n = e.parseTransformString(n) || [];
            var r = x(t.length, n.length),
                i = [],
                s = [],
                o = 0,
                u, a, f, l;
            for (; o < r; o++) {
                f = t[o] || Rt(n[o]);
                l = n[o] || Rt(f);
                if (f[0] != l[0] || f[0] == "r" && (f[2] != l[2] || f[3] != l[3]) || f[0] == "s" && (f[3] != l[3] || f[4] != l[4])) {
                    return
                }
                i[o] = [];
                s[o] = [];
                for (u = 0, a = x(f.length, l.length); u < a; u++) {
                    u in f && (i[o][u] = f[u]);
                    u in l && (s[o][u] = l[u])
                }
            }
            return {
                from: i,
                to: s
            }
        };
    e._getContainer = function(t, n, r, i) {
        var s;
        s = i == null && !e.is(t, "object") ? u.doc.getElementById(t) : t;
        if (s == null) {
            return
        }
        if (s.tagName) {
            if (n == null) {
                return {
                    container: s,
                    width: s.style.pixelWidth || s.offsetWidth,
                    height: s.style.pixelHeight || s.offsetHeight
                }
            } else {
                return {
                    container: s,
                    width: n,
                    height: r
                }
            }
        }
        return {
            container: 1,
            x: t,
            y: n,
            width: r,
            height: i
        }
    };
    e.pathToRelative = Nt;
    e._engine = {};
    e.path2curve = _t;
    e.matrix = function(e, t, n, r, i, s) {
        return new zt(e, t, n, r, i, s)
    };
    (function(t) {
        function n(e) {
            return e[0] * e[0] + e[1] * e[1]
        }

        function r(e) {
            var t = S.sqrt(n(e));
            e[0] && (e[0] /= t);
            e[1] && (e[1] /= t)
        }
        t.add = function(e, t, n, r, i, s) {
            var o = [
                    [],
                    [],
                    []
                ],
                u = [
                    [this.a, this.c, this.e],
                    [this.b, this.d, this.f],
                    [0, 0, 1]
                ],
                a = [
                    [e, n, i],
                    [t, r, s],
                    [0, 0, 1]
                ],
                f, l, c, h;
            if (e && e instanceof zt) {
                a = [
                    [e.a, e.c, e.e],
                    [e.b, e.d, e.f],
                    [0, 0, 1]
                ]
            }
            for (f = 0; f < 3; f++) {
                for (l = 0; l < 3; l++) {
                    h = 0;
                    for (c = 0; c < 3; c++) {
                        h += u[f][c] * a[c][l]
                    }
                    o[f][l] = h
                }
            }
            this.a = o[0][0];
            this.b = o[1][0];
            this.c = o[0][1];
            this.d = o[1][1];
            this.e = o[0][2];
            this.f = o[1][2]
        };
        t.invert = function() {
            var e = this,
                t = e.a * e.d - e.b * e.c;
            return new zt(e.d / t, -e.b / t, -e.c / t, e.a / t, (e.c * e.f - e.d * e.e) / t, (e.b * e.e - e.a * e.f) / t)
        };
        t.clone = function() {
            return new zt(this.a, this.b, this.c, this.d, this.e, this.f)
        };
        t.translate = function(e, t) {
            this.add(1, 0, 0, 1, e, t)
        };
        t.scale = function(e, t, n, r) {
            t == null && (t = e);
            (n || r) && this.add(1, 0, 0, 1, n, r);
            this.add(e, 0, 0, t, 0, 0);
            (n || r) && this.add(1, 0, 0, 1, -n, -r)
        };
        t.rotate = function(t, n, r) {
            t = e.rad(t);
            n = n || 0;
            r = r || 0;
            var i = +S.cos(t).toFixed(9),
                s = +S.sin(t).toFixed(9);
            this.add(i, s, -s, i, n, r);
            this.add(1, 0, 0, 1, -n, -r)
        };
        t.x = function(e, t) {
            return e * this.a + t * this.c + this.e
        };
        t.y = function(e, t) {
            return e * this.b + t * this.d + this.f
        };
        t.get = function(e) {
            return +this[g.fromCharCode(97 + e)].toFixed(4)
        };
        t.toString = function() {
            return e.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join()
        };
        t.toFilter = function() {
            return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')"
        };
        t.offset = function() {
            return [this.e.toFixed(4), this.f.toFixed(4)]
        };
        t.split = function() {
            var t = {};
            t.dx = this.e;
            t.dy = this.f;
            var i = [
                [this.a, this.c],
                [this.b, this.d]
            ];
            t.scalex = S.sqrt(n(i[0]));
            r(i[0]);
            t.shear = i[0][0] * i[1][0] + i[0][1] * i[1][1];
            i[1] = [i[1][0] - i[0][0] * t.shear, i[1][1] - i[0][1] * t.shear];
            t.scaley = S.sqrt(n(i[1]));
            r(i[1]);
            t.shear /= t.scaley;
            var s = -i[0][1],
                o = i[1][1];
            if (o < 0) {
                t.rotate = e.deg(S.acos(o));
                if (s < 0) {
                    t.rotate = 360 - t.rotate
                }
            } else {
                t.rotate = e.deg(S.asin(s))
            }
            t.isSimple = !+t.shear.toFixed(9) && (t.scalex.toFixed(9) == t.scaley.toFixed(9) || !t.rotate);
            t.isSuperSimple = !+t.shear.toFixed(9) && t.scalex.toFixed(9) == t.scaley.toFixed(9) && !t.rotate;
            t.noRotation = !+t.shear.toFixed(9) && !t.rotate;
            return t
        };
        t.toTransformString = function() {
            var e = this.split();
            if (e.isSimple) {
                return "t" + [e.dx, e.dy] + "s" + [e.scalex, e.scaley, 0, 0] + "r" + [e.rotate, 0, 0]
            } else {
                return "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
            }
        }
    })(zt.prototype);
    var Wt = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);
    if (navigator.vendor == "Apple Computer, Inc." && (Wt && Wt[1] < 4 || navigator.platform.slice(0, 2) == "iP") || navigator.vendor == "Google Inc." && Wt && Wt[1] < 8) {
        l.safari = function() {
            var e = this.rect(-99, -99, this.width + 99, this.height + 99).attr({
                stroke: "none"
            });
            setTimeout(function() {
                e.remove()
            })
        }
    } else {
        l.safari = rt
    }
    var Xt = function() {
            this.returnValue = false
        },
        Vt = function() {
            return this.originalEvent.preventDefault()
        },
        $t = function() {
            this.cancelBubble = true
        },
        Jt = function() {
            return this.originalEvent.stopPropagation()
        },
        Kt = function() {
            if (u.doc.addEventListener) {
                return function(e, t, n, r) {
                    var i = d && w[t] ? w[t] : t,
                        s = function(i) {
                            var s = u.doc.documentElement.scrollTop || u.doc.body.scrollTop,
                                a = u.doc.documentElement.scrollLeft || u.doc.body.scrollLeft,
                                f = i.clientX + a,
                                l = i.clientY + s;
                            if (d && w[o](t)) {
                                for (var c = 0, h = i.targetTouches && i.targetTouches.length; c < h; c++) {
                                    if (i.targetTouches[c].target == e) {
                                        var p = i;
                                        i = i.targetTouches[c];
                                        i.originalEvent = p;
                                        i.preventDefault = Vt;
                                        i.stopPropagation = Jt;
                                        break
                                    }
                                }
                            }
                            return n.call(r, i, f, l)
                        };
                    e.addEventListener(i, s, false);
                    return function() {
                        e.removeEventListener(i, s, false);
                        return true
                    }
                }
            } else if (u.doc.attachEvent) {
                return function(e, t, n, r) {
                    var i = function(e) {
                        e = e || u.win.event;
                        var t = u.doc.documentElement.scrollTop || u.doc.body.scrollTop,
                            i = u.doc.documentElement.scrollLeft || u.doc.body.scrollLeft,
                            s = e.clientX + i,
                            o = e.clientY + t;
                        e.preventDefault = e.preventDefault || Xt;
                        e.stopPropagation = e.stopPropagation || $t;
                        return n.call(r, e, s, o)
                    };
                    e.attachEvent("on" + t, i);
                    var s = function() {
                        e.detachEvent("on" + t, i);
                        return true
                    };
                    return s
                }
            }
        }(),
        Qt = [],
        Gt = function(e) {
            var t = e.clientX,
                n = e.clientY,
                r = u.doc.documentElement.scrollTop || u.doc.body.scrollTop,
                i = u.doc.documentElement.scrollLeft || u.doc.body.scrollLeft,
                s, o = Qt.length;
            while (o--) {
                s = Qt[o];
                if (d) {
                    var a = e.touches.length,
                        f;
                    while (a--) {
                        f = e.touches[a];
                        if (f.identifier == s.el._drag.id) {
                            t = f.clientX;
                            n = f.clientY;
                            (e.originalEvent ? e.originalEvent : e).preventDefault();
                            break
                        }
                    }
                } else {
                    e.preventDefault()
                }
                var l = s.el.node,
                    c, h = l.nextSibling,
                    p = l.parentNode,
                    v = l.style.display;
                u.win.opera && p.removeChild(l);
                l.style.display = "none";
                c = s.el.paper.getElementByPoint(t, n);
                l.style.display = v;
                u.win.opera && (h ? p.insertBefore(l, h) : p.appendChild(l));
                c && eve("drag.over." + s.el.id, s.el, c);
                t += i;
                n += r;
                eve("drag.move." + s.el.id, s.move_scope || s.el, t - s.el._drag.x, n - s.el._drag.y, t, n, e)
            }
        },
        Yt = function(t) {
            e.unmousemove(Gt).unmouseup(Yt);
            var n = Qt.length,
                r;
            while (n--) {
                r = Qt[n];
                r.el._drag = {};
                eve("drag.end." + r.el.id, r.end_scope || r.start_scope || r.move_scope || r.el, t)
            }
            Qt = []
        },
        Zt = e.el = {};
    for (var en = b.length; en--;) {
        (function(t) {
            e[t] = Zt[t] = function(n, r) {
                if (e.is(n, "function")) {
                    this.events = this.events || [];
                    this.events.push({
                        name: t,
                        f: n,
                        unbind: Kt(this.shape || this.node || u.doc, t, n, r || this)
                    })
                }
                return this
            };
            e["un" + t] = Zt["un" + t] = function(e) {
                var n = this.events,
                    r = n.length;
                while (r--)
                    if (n[r].name == t && n[r].f == e) {
                        n[r].unbind();
                        n.splice(r, 1);
                        !n.length && delete this.events;
                        return this
                    }
                return this
            }
        })(b[en])
    }
    Zt.data = function(t, n) {
        var r = et[this.id] = et[this.id] || {};
        if (arguments.length == 1) {
            if (e.is(t, "object")) {
                for (var i in t)
                    if (t[o](i)) {
                        this.data(i, t[i])
                    }
                return this
            }
            eve("data.get." + this.id, this, r[t], t);
            return r[t]
        }
        r[t] = n;
        eve("data.set." + this.id, this, n, t);
        return this
    };
    Zt.removeData = function(e) {
        if (e == null) {
            et[this.id] = {}
        } else {
            et[this.id] && delete et[this.id][e]
        }
        return this
    };
    Zt.hover = function(e, t, n, r) {
        return this.mouseover(e, n).mouseout(t, r || n)
    };
    Zt.unhover = function(e, t) {
        return this.unmouseover(e).unmouseout(t)
    };
    Zt.drag = function(t, n, r, i, s, o) {
        function a(a) {
            (a.originalEvent || a).preventDefault();
            var f = u.doc.documentElement.scrollTop || u.doc.body.scrollTop,
                l = u.doc.documentElement.scrollLeft || u.doc.body.scrollLeft;
            this._drag.x = a.clientX + l;
            this._drag.y = a.clientY + f;
            this._drag.id = a.identifier;
            !Qt.length && e.mousemove(Gt).mouseup(Yt);
            Qt.push({
                el: this,
                move_scope: i,
                start_scope: s,
                end_scope: o
            });
            n && eve.on("drag.start." + this.id, n);
            t && eve.on("drag.move." + this.id, t);
            r && eve.on("drag.end." + this.id, r);
            eve("drag.start." + this.id, s || i || this, a.clientX + l, a.clientY + f, a)
        }
        this._drag = {};
        this.mousedown(a);
        return this
    };
    Zt.onDragOver = function(e) {
        e ? eve.on("drag.over." + this.id, e) : eve.unbind("drag.over." + this.id)
    };
    Zt.undrag = function() {
        var t = Qt.length;
        while (t--)
            if (Qt[t].el == this) {
                e.unmousedown(Qt[t].start);
                Qt.splice(t++, 1);
                eve.unbind("drag.*." + this.id)
            }!Qt.length && e.unmousemove(Gt).unmouseup(Yt)
    };
    l.circle = function(t, n, r) {
        var i = e._engine.circle(this, t || 0, n || 0, r || 0);
        this.__set__ && this.__set__.push(i);
        return i
    };
    l.rect = function(t, n, r, i, s) {
        var o = e._engine.rect(this, t || 0, n || 0, r || 0, i || 0, s || 0);
        this.__set__ && this.__set__.push(o);
        return o
    };
    l.ellipse = function(t, n, r, i) {
        var s = e._engine.ellipse(this, t || 0, n || 0, r || 0, i || 0);
        this.__set__ && this.__set__.push(s);
        return s
    };
    l.path = function(t) {
        t && !e.is(t, A) && !e.is(t[0], O) && (t += v);
        var n = e._engine.path(e.format[h](e, arguments), this);
        this.__set__ && this.__set__.push(n);
        return n
    };
    l.image = function(t, n, r, i, s) {
        var o = e._engine.image(this, t || "about:blank", n || 0, r || 0, i || 0, s || 0);
        this.__set__ && this.__set__.push(o);
        return o
    };
    l.text = function(t, n, r) {
        var i = e._engine.text(this, t || 0, n || 0, g(r));
        this.__set__ && this.__set__.push(i);
        return i
    };
    l.set = function(t) {
        !e.is(t, "array") && (t = Array.prototype.splice.call(arguments, 0, arguments.length));
        var n = new bn(t);
        this.__set__ && this.__set__.push(n);
        return n
    };
    l.setStart = function(e) {
        this.__set__ = e || this.set()
    };
    l.setFinish = function(e) {
        var t = this.__set__;
        delete this.__set__;
        return t
    };
    l.setSize = function(t, n) {
        return e._engine.setSize.call(this, t, n)
    };
    l.setViewBox = function(t, n, r, i, s) {
        return e._engine.setViewBox.call(this, t, n, r, i, s)
    };
    l.top = l.bottom = null;
    l.raphael = e;
    var tn = function(e) {
        var t = e.getBoundingClientRect(),
            n = e.ownerDocument,
            r = n.body,
            i = n.documentElement,
            s = i.clientTop || r.clientTop || 0,
            o = i.clientLeft || r.clientLeft || 0,
            a = t.top + (u.win.pageYOffset || i.scrollTop || r.scrollTop) - s,
            f = t.left + (u.win.pageXOffset || i.scrollLeft || r.scrollLeft) - o;
        return {
            y: a,
            x: f
        }
    };
    l.getElementByPoint = function(e, t) {
        var n = this,
            r = n.canvas,
            i = u.doc.elementFromPoint(e, t);
        if (u.win.opera && i.tagName == "svg") {
            var s = tn(r),
                o = r.createSVGRect();
            o.x = e - s.x;
            o.y = t - s.y;
            o.width = o.height = 1;
            var a = r.getIntersectionList(o, null);
            if (a.length) {
                i = a[a.length - 1]
            }
        }
        if (!i) {
            return null
        }
        while (i.parentNode && i != r.parentNode && !i.raphael) {
            i = i.parentNode
        }
        i == n.canvas.parentNode && (i = r);
        i = i && i.raphael ? n.getById(i.raphaelid) : null;
        return i
    };
    l.getById = function(e) {
        var t = this.bottom;
        while (t) {
            if (t.id == e) {
                return t
            }
            t = t.next
        }
        return null
    };
    l.forEach = function(e, t) {
        var n = this.bottom;
        while (n) {
            if (e.call(t, n) === false) {
                return this
            }
            n = n.next
        }
        return this
    };
    Zt.getBBox = function(e) {
        if (this.removed) {
            return {}
        }
        var t = this._;
        if (e) {
            if (t.dirty || !t.bboxwt) {
                this.realPath = ut[this.type](this);
                t.bboxwt = xt(this.realPath);
                t.bboxwt.toString = rn;
                t.dirty = 0
            }
            return t.bboxwt
        }
        if (t.dirty || t.dirtyT || !t.bbox) {
            if (t.dirty || !this.realPath) {
                t.bboxwt = 0;
                this.realPath = ut[this.type](this)
            }
            t.bbox = xt(at(this.realPath, this.matrix));
            t.bbox.toString = rn;
            t.dirty = t.dirtyT = 0
        }
        return t.bbox
    };
    Zt.clone = function() {
        if (this.removed) {
            return null
        }
        return this.paper[this.type]().attr(this.attr())
    };
    Zt.glow = function(e) {
        if (this.type == "text") {
            return null
        }
        e = e || {};
        var t = {
                width: (e.width || 10) + (+this.attr("stroke-width") || 1),
                fill: e.fill || false,
                opacity: e.opacity || .5,
                offsetx: e.offsetx || 0,
                offsety: e.offsety || 0,
                color: e.color || "#000"
            },
            n = t.width / 2,
            r = this.paper,
            i = r.set(),
            s = this.realPath || ut[this.type](this);
        s = this.matrix ? at(s, this.matrix) : s;
        for (var o = 1; o < n + 1; o++) {
            i.push(r.path(s).attr({
                stroke: t.color,
                fill: t.fill ? t.color : "none",
                "stroke-linejoin": "round",
                "stroke-linecap": "round",
                "stroke-width": +(t.width / n * o).toFixed(3),
                opacity: +(t.opacity / n).toFixed(3)
            }))
        }
        return i.insertBefore(this).translate(t.offsetx, t.offsety)
    };
    var sn = {},
        on = function(t, n, r, i, s, o, u, a, f) {
            var l = 0,
                c = 100,
                h = [t, n, r, i, s, o, u, a].join(),
                p = sn[h],
                d, v;
            !p && (sn[h] = p = {
                data: []
            });
            p.timer && clearTimeout(p.timer);
            p.timer = setTimeout(function() {
                delete sn[h]
            }, 2e3);
            if (f != null && !p.precision) {
                var m = on(t, n, r, i, s, o, u, a);
                p.precision = ~~m * 10;
                p.data = []
            }
            c = p.precision || c;
            for (var g = 0; g < c + 1; g++) {
                if (p.data[g * c]) {
                    v = p.data[g * c]
                } else {
                    v = e.findDotsAtSegment(t, n, r, i, s, o, u, a, g / c);
                    p.data[g * c] = v
                }
                g && (l += C(C(d.x - v.x, 2) + C(d.y - v.y, 2), .5));
                if (f != null && l >= f) {
                    return v
                }
                d = v
            }
            if (f == null) {
                return l
            }
        },
        un = function(t, n) {
            return function(r, i, s) {
                r = _t(r);
                var o, u, a, f, l = "",
                    c = {},
                    h, p = 0;
                for (var d = 0, v = r.length; d < v; d++) {
                    a = r[d];
                    if (a[0] == "M") {
                        o = +a[1];
                        u = +a[2]
                    } else {
                        f = on(o, u, a[1], a[2], a[3], a[4], a[5], a[6]);
                        if (p + f > i) {
                            if (n && !c.start) {
                                h = on(o, u, a[1], a[2], a[3], a[4], a[5], a[6], i - p);
                                l += ["C" + h.start.x, h.start.y, h.m.x, h.m.y, h.x, h.y];
                                if (s) {
                                    return l
                                }
                                c.start = l;
                                l = ["M" + h.x, h.y + "C" + h.n.x, h.n.y, h.end.x, h.end.y, a[5], a[6]].join();
                                p += f;
                                o = +a[5];
                                u = +a[6];
                                continue
                            }
                            if (!t && !n) {
                                h = on(o, u, a[1], a[2], a[3], a[4], a[5], a[6], i - p);
                                return {
                                    x: h.x,
                                    y: h.y,
                                    alpha: h.alpha
                                }
                            }
                        }
                        p += f;
                        o = +a[5];
                        u = +a[6]
                    }
                    l += a.shift() + a
                }
                c.end = l;
                h = t ? p : n ? c : e.findDotsAtSegment(o, u, a[0], a[1], a[2], a[3], a[4], a[5], 1);
                h.alpha && (h = {
                    x: h.x,
                    y: h.y,
                    alpha: h.alpha
                });
                return h
            }
        };
    var an = un(1),
        fn = un(),
        ln = un(0, 1);
    e.getTotalLength = an;
    e.getPointAtLength = fn;
    e.getSubpath = function(e, t, n) {
        if (this.getTotalLength(e) - n < 1e-6) {
            return ln(e, t).end
        }
        var r = ln(e, n, 1);
        return t ? ln(r, t).end : r
    };
    Zt.getTotalLength = function() {
        if (this.type != "path") {
            return
        }
        if (this.node.getTotalLength) {
            return this.node.getTotalLength()
        }
        return an(this.attrs.path)
    };
    Zt.getPointAtLength = function(e) {
        if (this.type != "path") {
            return
        }
        return fn(this.attrs.path, e)
    };
    Zt.getSubpath = function(t, n) {
        if (this.type != "path") {
            return
        }
        return e.getSubpath(this.attrs.path, t, n)
    };
    var cn = e.easing_formulas = {
        linear: function(e) {
            return e
        },
        "<": function(e) {
            return C(e, 1.7)
        },
        ">": function(e) {
            return C(e, .48)
        },
        "<>": function(e) {
            var t = .48 - e / 1.04,
                n = S.sqrt(.1734 + t * t),
                r = n - t,
                i = C(N(r), 1 / 3) * (r < 0 ? -1 : 1),
                s = -n - t,
                o = C(N(s), 1 / 3) * (s < 0 ? -1 : 1),
                u = i + o + .5;
            return (1 - u) * 3 * u * u + u * u * u
        },
        backIn: function(e) {
            var t = 1.70158;
            return e * e * ((t + 1) * e - t)
        },
        backOut: function(e) {
            e = e - 1;
            var t = 1.70158;
            return e * e * ((t + 1) * e + t) + 1
        },
        elastic: function(e) {
            if (e == !!e) {
                return e
            }
            return C(2, -10 * e) * S.sin((e - .075) * 2 * k / .3) + 1
        },
        bounce: function(e) {
            var t = 7.5625,
                n = 2.75,
                r;
            if (e < 1 / n) {
                r = t * e * e
            } else {
                if (e < 2 / n) {
                    e -= 1.5 / n;
                    r = t * e * e + .75
                } else {
                    if (e < 2.5 / n) {
                        e -= 2.25 / n;
                        r = t * e * e + .9375
                    } else {
                        e -= 2.625 / n;
                        r = t * e * e + .984375
                    }
                }
            }
            return r
        }
    };
    cn.easeIn = cn["ease-in"] = cn["<"];
    cn.easeOut = cn["ease-out"] = cn[">"];
    cn.easeInOut = cn["ease-in-out"] = cn["<>"];
    cn["back-in"] = cn.backIn;
    cn["back-out"] = cn.backOut;
    var hn = [],
        pn = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
            setTimeout(e, 16)
        },
        dn = function() {
            var t = +(new Date),
                n = 0;
            for (; n < hn.length; n++) {
                var r = hn[n];
                if (r.el.removed || r.paused) {
                    continue
                }
                var i = t - r.start,
                    s = r.ms,
                    u = r.easing,
                    a = r.from,
                    f = r.diff,
                    l = r.to,
                    c = r.t,
                    h = r.el,
                    p = {},
                    d;
                if (r.initstatus) {
                    i = (r.initstatus * r.anim.top - r.prev) / (r.percent - r.prev) * s;
                    r.status = r.initstatus;
                    delete r.initstatus;
                    r.stop && hn.splice(n--, 1)
                } else {
                    r.status = (r.prev + (r.percent - r.prev) * (i / s)) / r.anim.top
                }
                if (i < 0) {
                    continue
                }
                if (i < s) {
                    var v = u(i / s);
                    for (var g in a)
                        if (a[o](g)) {
                            switch (V[g]) {
                                case L:
                                    d = +a[g] + v * s * f[g];
                                    break;
                                case "colour":
                                    d = "rgb(" + [vn(q(a[g].r + v * s * f[g].r)), vn(q(a[g].g + v * s * f[g].g)), vn(q(a[g].b + v * s * f[g].b))].join(",") + ")";
                                    break;
                                case "path":
                                    d = [];
                                    for (var y = 0, b = a[g].length; y < b; y++) {
                                        d[y] = [a[g][y][0]];
                                        for (var w = 1, E = a[g][y].length; w < E; w++) {
                                            d[y][w] = +a[g][y][w] + v * s * f[g][y][w]
                                        }
                                        d[y] = d[y].join(m)
                                    }
                                    d = d.join(m);
                                    break;
                                case "transform":
                                    if (f[g].real) {
                                        d = [];
                                        for (y = 0, b = a[g].length; y < b; y++) {
                                            d[y] = [a[g][y][0]];
                                            for (w = 1, E = a[g][y].length; w < E; w++) {
                                                d[y][w] = a[g][y][w] + v * s * f[g][y][w]
                                            }
                                        }
                                    } else {
                                        var S = function(e) {
                                            return +a[g][e] + v * s * f[g][e]
                                        };
                                        d = [
                                            ["m", S(0), S(1), S(2), S(3), S(4), S(5)]
                                        ]
                                    }
                                    break;
                                case "csv":
                                    if (g == "clip-rect") {
                                        d = [];
                                        y = 4;
                                        while (y--) {
                                            d[y] = +a[g][y] + v * s * f[g][y]
                                        }
                                    }
                                    break;
                                default:
                                    var x = [].concat(a[g]);
                                    d = [];
                                    y = h.paper.customAttributes[g].length;
                                    while (y--) {
                                        d[y] = +x[y] + v * s * f[g][y]
                                    }
                                    break
                            }
                            p[g] = d
                        }
                    h.attr(p);
                    (function(e, t, n) {
                        setTimeout(function() {
                            eve("anim.frame." + e, t, n)
                        })
                    })(h.id, h, r.anim)
                } else {
                    (function(t, n, r) {
                        setTimeout(function() {
                            eve("anim.frame." + n.id, n, r);
                            eve("anim.finish." + n.id, n, r);
                            e.is(t, "function") && t.call(n)
                        })
                    })(r.callback, h, r.anim);
                    h.attr(l);
                    hn.splice(n--, 1);
                    if (r.repeat > 1 && !r.next) {
                        yn(r.anim, r.el, r.anim.percents[0], null, r.totalOrigin, r.repeat - 1)
                    }
                    if (r.next && !r.stop) {
                        yn(r.anim, r.el, r.next, null, r.totalOrigin, r.repeat)
                    }
                }
            }
            e.svg && h && h.paper && h.paper.safari();
            hn.length && pn(dn)
        },
        vn = function(e) {
            return e > 255 ? 255 : e < 0 ? 0 : e
        };
    Zt.animateWith = function(t, n, r, i, s, o) {
        var u = r ? e.animation(r, i, s, o) : n;
        status = t.status(n);
        return this.animate(u).status(u, status * n.ms / u.ms)
    };
    Zt.onAnimation = function(e) {
        e ? eve.on("anim.frame." + this.id, e) : eve.unbind("anim.frame." + this.id);
        return this
    };
    gn.prototype.delay = function(e) {
        var t = new gn(this.anim, this.ms);
        t.times = this.times;
        t.del = +e || 0;
        return t
    };
    gn.prototype.repeat = function(e) {
        var t = new gn(this.anim, this.ms);
        t.del = this.del;
        t.times = S.floor(x(e, 0)) || 1;
        return t
    };
    e.animation = function(t, n, r, i) {
        if (t instanceof gn) {
            return t
        }
        if (e.is(r, "function") || !r) {
            i = i || r || null;
            r = null
        }
        t = Object(t);
        n = +n || 0;
        var s = {},
            u, a;
        for (a in t)
            if (t[o](a) && U(a) != a && U(a) + "%" != a) {
                u = true;
                s[a] = t[a]
            }
        if (!u) {
            return new gn(t, n)
        } else {
            r && (s.easing = r);
            i && (s.callback = i);
            return new gn({
                100: s
            }, n)
        }
    };
    Zt.animate = function(t, n, r, i) {
        var s = this;
        if (s.removed) {
            i && i.call(s);
            return s
        }
        var o = t instanceof gn ? t : e.animation(t, n, r, i);
        yn(o, s, o.percents[0], null, s.attr());
        return s
    };
    Zt.setTime = function(e, t) {
        if (e && t != null) {
            this.status(e, T(t, e.ms) / e.ms)
        }
        return this
    };
    Zt.status = function(e, t) {
        var n = [],
            r = 0,
            i, s;
        if (t != null) {
            yn(e, this, -1, T(t, 1));
            return this
        } else {
            i = hn.length;
            for (; r < i; r++) {
                s = hn[r];
                if (s.el.id == this.id && (!e || s.anim == e)) {
                    if (e) {
                        return s.status
                    }
                    n.push({
                        anim: s.anim,
                        status: s.status
                    })
                }
            }
            if (e) {
                return 0
            }
            return n
        }
    };
    Zt.pause = function(e) {
        for (var t = 0; t < hn.length; t++)
            if (hn[t].el.id == this.id && (!e || hn[t].anim == e)) {
                if (eve("anim.pause." + this.id, this, hn[t].anim) !== false) {
                    hn[t].paused = true
                }
            }
        return this
    };
    Zt.resume = function(e) {
        for (var t = 0; t < hn.length; t++)
            if (hn[t].el.id == this.id && (!e || hn[t].anim == e)) {
                var n = hn[t];
                if (eve("anim.resume." + this.id, this, n.anim) !== false) {
                    delete n.paused;
                    this.status(n.anim, n.status)
                }
            }
        return this
    };
    Zt.stop = function(e) {
        for (var t = 0; t < hn.length; t++)
            if (hn[t].el.id == this.id && (!e || hn[t].anim == e)) {
                if (eve("anim.stop." + this.id, this, hn[t].anim) !== false) {
                    hn.splice(t--, 1)
                }
            }
        return this
    };
    Zt.toString = function() {
        return "Raphaël’s object"
    };
    var bn = function(e) {
            this.items = [];
            this.length = 0;
            this.type = "set";
            if (e) {
                for (var t = 0, n = e.length; t < n; t++) {
                    if (e[t] && (e[t].constructor == Zt.constructor || e[t].constructor == bn)) {
                        this[this.items.length] = this.items[this.items.length] = e[t];
                        this.length++
                    }
                }
            }
        },
        wn = bn.prototype;
    wn.push = function() {
        var e, t;
        for (var n = 0, r = arguments.length; n < r; n++) {
            e = arguments[n];
            if (e && (e.constructor == Zt.constructor || e.constructor == bn)) {
                t = this.items.length;
                this[t] = this.items[t] = e;
                this.length++
            }
        }
        return this
    };
    wn.pop = function() {
        this.length && delete this[this.length--];
        return this.items.pop()
    };
    wn.forEach = function(e, t) {
        for (var n = 0, r = this.items.length; n < r; n++) {
            if (e.call(t, this.items[n]) === false) {
                return this
            }
        }
        return this
    };
    for (var En in Zt)
        if (Zt[o](En)) {
            wn[En] = function(e) {
                return function() {
                    var t = arguments;
                    return this.forEach(function(n) {
                        n[e][h](n, t)
                    })
                }
            }(En)
        }
    wn.attr = function(t, n) {
        if (t && e.is(t, O) && e.is(t[0], "object")) {
            for (var r = 0, i = t.length; r < i; r++) {
                this.items[r].attr(t[r])
            }
        } else {
            for (var s = 0, o = this.items.length; s < o; s++) {
                this.items[s].attr(t, n)
            }
        }
        return this
    };
    wn.clear = function() {
        while (this.length) {
            this.pop()
        }
    };
    wn.splice = function(e, t, n) {
        e = e < 0 ? x(this.length + e, 0) : e;
        t = x(0, T(this.length - e, t));
        var r = [],
            i = [],
            s = [],
            o;
        for (o = 2; o < arguments.length; o++) {
            s.push(arguments[o])
        }
        for (o = 0; o < t; o++) {
            i.push(this[e + o])
        }
        for (; o < this.length - e; o++) {
            r.push(this[e + o])
        }
        var u = s.length;
        for (o = 0; o < u + r.length; o++) {
            this.items[e + o] = this[e + o] = o < u ? s[o] : r[o - u]
        }
        o = this.items.length = this.length -= t - u;
        while (this[o]) {
            delete this[o++]
        }
        return new bn(i)
    };
    wn.exclude = function(e) {
        for (var t = 0, n = this.length, r; t < n; t++)
            if (r || this[t] == e) {
                this[t] = this[t + 1];
                r = 1
            }
        if (r) {
            this.length--;
            delete this[t];
            return true
        }
    };
    wn.animate = function(t, n, r, i) {
        (e.is(r, "function") || !r) && (i = r || null);
        var s = this.items.length,
            o = s,
            u, a = this,
            f;
        if (!s) {
            return this
        }
        i && (f = function() {
            !--s && i.call(a)
        });
        r = e.is(r, A) ? r : f;
        var l = e.animation(t, n, r, f);
        u = this.items[--o].animate(l);
        while (o--) {
            this.items[o] && !this.items[o].removed && this.items[o].animateWith(u, l)
        }
        return this
    };
    wn.insertAfter = function(e) {
        var t = this.items.length;
        while (t--) {
            this.items[t].insertAfter(e)
        }
        return this
    };
    wn.getBBox = function() {
        var e = [],
            t = [],
            n = [],
            r = [];
        for (var i = this.items.length; i--;)
            if (!this.items[i].removed) {
                var s = this.items[i].getBBox();
                e.push(s.x);
                t.push(s.y);
                n.push(s.x + s.width);
                r.push(s.y + s.height)
            }
        e = T[h](0, e);
        t = T[h](0, t);
        return {
            x: e,
            y: t,
            width: x[h](0, n) - e,
            height: x[h](0, r) - t
        }
    };
    wn.clone = function(e) {
        e = new bn;
        for (var t = 0, n = this.items.length; t < n; t++) {
            e.push(this.items[t].clone())
        }
        return e
    };
    wn.toString = function() {
        return "Raphaël‘s set"
    };
    e.registerFont = function(e) {
        if (!e.face) {
            return e
        }
        this.fonts = this.fonts || {};
        var t = {
                w: e.w,
                face: {},
                glyphs: {}
            },
            n = e.face["font-family"];
        for (var r in e.face)
            if (e.face[o](r)) {
                t.face[r] = e.face[r]
            }
        if (this.fonts[n]) {
            this.fonts[n].push(t)
        } else {
            this.fonts[n] = [t]
        }
        if (!e.svg) {
            t.face["units-per-em"] = z(e.face["units-per-em"], 10);
            for (var i in e.glyphs)
                if (e.glyphs[o](i)) {
                    var s = e.glyphs[i];
                    t.glyphs[i] = {
                        w: s.w,
                        k: {},
                        d: s.d && "M" + s.d.replace(/[mlcxtrv]/g, function(e) {
                            return {
                                l: "L",
                                c: "C",
                                x: "z",
                                t: "m",
                                r: "l",
                                v: "c"
                            }[e] || "M"
                        }) + "z"
                    };
                    if (s.k) {
                        for (var u in s.k)
                            if (s[o](u)) {
                                t.glyphs[i].k[u] = s.k[u]
                            }
                    }
                }
        }
        return e
    };
    l.getFont = function(t, n, r, i) {
        i = i || "normal";
        r = r || "normal";
        n = +n || {
            normal: 400,
            bold: 700,
            lighter: 300,
            bolder: 800
        }[n] || 400;
        if (!e.fonts) {
            return
        }
        var s = e.fonts[t];
        if (!s) {
            var u = new RegExp("(^|\\s)" + t.replace(/[^\w\d\s+!~.:_-]/g, v) + "(\\s|$)", "i");
            for (var a in e.fonts)
                if (e.fonts[o](a)) {
                    if (u.test(a)) {
                        s = e.fonts[a];
                        break
                    }
                }
        }
        var f;
        if (s) {
            for (var l = 0, c = s.length; l < c; l++) {
                f = s[l];
                if (f.face["font-weight"] == n && (f.face["font-style"] == r || !f.face["font-style"]) && f.face["font-stretch"] == i) {
                    break
                }
            }
        }
        return f
    };
    l.print = function(t, r, i, s, o, u, a) {
        u = u || "middle";
        a = x(T(a || 0, 1), -1);
        var f = this.set(),
            l = g(i).split(v),
            c = 0,
            h = v,
            p;
        e.is(s, i) && (s = this.getFont(s));
        if (s) {
            p = (o || 16) / s.face["units-per-em"];
            var d = s.face.bbox.split(n),
                m = +d[0],
                y = +d[1] + (u == "baseline" ? d[3] - d[1] + +s.face.descent : (d[3] - d[1]) / 2);
            for (var b = 0, w = l.length; b < w; b++) {
                var E = b && s.glyphs[l[b - 1]] || {},
                    S = s.glyphs[l[b]];
                c += b ? (E.w || s.w) + (E.k && E.k[l[b]] || 0) + s.w * a : 0;
                S && S.d && f.push(this.path(S.d).attr({
                    fill: "#000",
                    stroke: "none",
                    transform: [
                        ["t", c * p, 0]
                    ]
                }))
            }
            f.transform(["...s", p, p, m, y, "t", (t - m) / p, (r - y) / p])
        }
        return f
    };
    e.format = function(t, n) {
        var r = e.is(n, O) ? [0][p](n) : arguments;
        t && e.is(t, A) && r.length - 1 && (t = t.replace(i, function(e, t) {
            return r[++t] == null ? v : r[t]
        }));
        return t || v
    };
    e.fullfill = function() {
        var e = /\{([^\}]+)\}/g,
            t = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
            n = function(e, n, r) {
                var i = r;
                n.replace(t, function(e, t, n, r, s) {
                    t = t || r;
                    if (i) {
                        if (t in i) {
                            i = i[t]
                        }
                        typeof i == "function" && s && (i = i())
                    }
                });
                i = (i == null || i == r ? e : i) + "";
                return i
            };
        return function(t, r) {
            return String(t).replace(e, function(e, t) {
                return n(e, t, r)
            })
        }
    }();
    e.ninja = function() {
        a.was ? u.win.Raphael = a.is : delete Raphael;
        return e
    };
    e.st = wn;
    (function(t, n, r) {
        function i() {
            /in/.test(t.readyState) ? setTimeout(i, 9) : e.eve("DOMload")
        }
        if (t.readyState == null && t.addEventListener) {
            t.addEventListener(n, r = function() {
                t.removeEventListener(n, r, false);
                t.readyState = "complete"
            }, false);
            t.readyState = "loading"
        }
        i()
    })(document, "DOMContentLoaded");
    a.was ? u.win.Raphael = e : Raphael = e;
    eve.on("DOMload", function() {
        t = true
    })
})();
window.Raphael.svg && function(e) {
    var t = "hasOwnProperty",
        n = String,
        r = parseFloat,
        i = parseInt,
        s = Math,
        o = s.max,
        u = s.abs,
        a = s.pow,
        f = /[, ]+/,
        l = e.eve,
        c = "",
        h = " ";
    var p = "http://www.w3.org/1999/xlink",
        d = {
            block: "M5,0 0,2.5 5,5z",
            classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
            diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
            open: "M6,1 1,3.5 6,6",
            oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
        },
        v = {};
    e.toString = function() {
        return "Your browser supports SVG.\nYou are running Raphaël " + this.version
    };
    var m = function(r, i) {
            if (i) {
                if (typeof r == "string") {
                    r = m(r)
                }
                for (var s in i)
                    if (i[t](s)) {
                        if (s.substring(0, 6) == "xlink:") {
                            r.setAttributeNS(p, s.substring(6), n(i[s]))
                        } else {
                            r.setAttribute(s, n(i[s]))
                        }
                    }
            } else {
                r = e._g.doc.createElementNS("http://www.w3.org/2000/svg", r);
                r.style && (r.style.webkitTapHighlightColor = "rgba(0,0,0,0)")
            }
            return r
        },
        g = {},
        y = /^url\(#(.*)\)$/,
        b = function(t, n) {
            var r = t.getAttribute("fill");
            r = r && r.match(y);
            if (r && !--g[r[1]]) {
                delete g[r[1]];
                n.defs.removeChild(e._g.doc.getElementById(r[1]))
            }
        },
        w = function(t, i) {
            var f = "linear",
                l = t.id + i,
                h = .5,
                p = .5,
                d = t.node,
                v = t.paper,
                g = d.style,
                y = e._g.doc.getElementById(l);
            if (!y) {
                i = n(i).replace(e._radial_gradient, function(e, t, n) {
                    f = "radial";
                    if (t && n) {
                        h = r(t);
                        p = r(n);
                        var i = (p > .5) * 2 - 1;
                        a(h - .5, 2) + a(p - .5, 2) > .25 && (p = s.sqrt(.25 - a(h - .5, 2)) * i + .5) && p != .5 && (p = p.toFixed(5) - 1e-5 * i)
                    }
                    return c
                });
                i = i.split(/\s*\-\s*/);
                if (f == "linear") {
                    var b = i.shift();
                    b = -r(b);
                    if (isNaN(b)) {
                        return null
                    }
                    var w = [0, 0, s.cos(e.rad(b)), s.sin(e.rad(b))],
                        E = 1 / (o(u(w[2]), u(w[3])) || 1);
                    w[2] *= E;
                    w[3] *= E;
                    if (w[2] < 0) {
                        w[0] = -w[2];
                        w[2] = 0
                    }
                    if (w[3] < 0) {
                        w[1] = -w[3];
                        w[3] = 0
                    }
                }
                var S = e._parseDots(i);
                if (!S) {
                    return null
                }
                if (t.gradient) {
                    v.defs.removeChild(t.gradient);
                    delete t.gradient
                }
                l = l.replace(/[\(\)\s,\xb0#]/g, "-");
                y = m(f + "Gradient", {
                    id: l
                });
                t.gradient = y;
                m(y, f == "radial" ? {
                    fx: h,
                    fy: p
                } : {
                    x1: w[0],
                    y1: w[1],
                    x2: w[2],
                    y2: w[3],
                    gradientTransform: t.matrix.invert()
                });
                v.defs.appendChild(y);
                for (var x = 0, T = S.length; x < T; x++) {
                    y.appendChild(m("stop", {
                        offset: S[x].offset ? S[x].offset : x ? "100%" : "0%",
                        "stop-color": S[x].color || "#fff"
                    }))
                }
            }
            m(d, {
                fill: "url(#" + l + ")",
                opacity: 1,
                "fill-opacity": 1
            });
            g.fill = c;
            g.opacity = 1;
            g.fillOpacity = 1;
            return 1
        },
        E = function(e) {
            var t = e.getBBox(1);
            m(e.pattern, {
                patternTransform: e.matrix.invert() + " translate(" + t.x + "," + t.y + ")"
            })
        },
        S = function(r, i, s) {
            if (r.type == "path") {
                var o = n(i).toLowerCase().split("-"),
                    u = r.paper,
                    a = s ? "end" : "start",
                    f = r.node,
                    l = r.attrs,
                    c = l["stroke-width"],
                    p = o.length,
                    g = "classic",
                    y, b, w, E, S, x = 3,
                    T = 3,
                    N = 5;
                while (p--) {
                    switch (o[p]) {
                        case "block":
                        case "classic":
                        case "oval":
                        case "diamond":
                        case "open":
                        case "none":
                            g = o[p];
                            break;
                        case "wide":
                            T = 5;
                            break;
                        case "narrow":
                            T = 2;
                            break;
                        case "long":
                            x = 5;
                            break;
                        case "short":
                            x = 2;
                            break
                    }
                }
                if (g == "open") {
                    x += 2;
                    T += 2;
                    N += 2;
                    w = 1;
                    E = s ? 4 : 1;
                    S = {
                        fill: "none",
                        stroke: l.stroke
                    }
                } else {
                    E = w = x / 2;
                    S = {
                        fill: l.stroke,
                        stroke: "none"
                    }
                }
                if (r._.arrows) {
                    if (s) {
                        r._.arrows.endPath && v[r._.arrows.endPath]--;
                        r._.arrows.endMarker && v[r._.arrows.endMarker]--
                    } else {
                        r._.arrows.startPath && v[r._.arrows.startPath]--;
                        r._.arrows.startMarker && v[r._.arrows.startMarker]--
                    }
                } else {
                    r._.arrows = {}
                }
                if (g != "none") {
                    var C = "raphael-marker-" + g,
                        k = "raphael-marker-" + a + g + x + T;
                    if (!e._g.doc.getElementById(C)) {
                        u.defs.appendChild(m(m("path"), {
                            "stroke-linecap": "round",
                            d: d[g],
                            id: C
                        }));
                        v[C] = 1
                    } else {
                        v[C]++
                    }
                    var L = e._g.doc.getElementById(k),
                        A;
                    if (!L) {
                        L = m(m("marker"), {
                            id: k,
                            markerHeight: T,
                            markerWidth: x,
                            orient: "auto",
                            refX: E,
                            refY: T / 2
                        });
                        A = m(m("use"), {
                            "xlink:href": "#" + C,
                            transform: (s ? " rotate(180 " + x / 2 + " " + T / 2 + ") " : h) + "scale(" + x / N + "," + T / N + ")",
                            "stroke-width": 1 / ((x / N + T / N) / 2)
                        });
                        L.appendChild(A);
                        u.defs.appendChild(L);
                        v[k] = 1
                    } else {
                        v[k]++;
                        A = L.getElementsByTagName("use")[0]
                    }
                    m(A, S);
                    var O = w * (g != "diamond" && g != "oval");
                    if (s) {
                        y = r._.arrows.startdx * c || 0;
                        b = e.getTotalLength(l.path) - O * c
                    } else {
                        y = O * c;
                        b = e.getTotalLength(l.path) - (r._.arrows.enddx * c || 0)
                    }
                    S = {};
                    S["marker-" + a] = "url(#" + k + ")";
                    if (b || y) {
                        S.d = Raphael.getSubpath(l.path, y, b)
                    }
                    m(f, S);
                    r._.arrows[a + "Path"] = C;
                    r._.arrows[a + "Marker"] = k;
                    r._.arrows[a + "dx"] = O;
                    r._.arrows[a + "Type"] = g;
                    r._.arrows[a + "String"] = i
                } else {
                    if (s) {
                        y = r._.arrows.startdx * c || 0;
                        b = e.getTotalLength(l.path) - y
                    } else {
                        y = 0;
                        b = e.getTotalLength(l.path) - (r._.arrows.enddx * c || 0)
                    }
                    r._.arrows[a + "Path"] && m(f, {
                        d: Raphael.getSubpath(l.path, y, b)
                    });
                    delete r._.arrows[a + "Path"];
                    delete r._.arrows[a + "Marker"];
                    delete r._.arrows[a + "dx"];
                    delete r._.arrows[a + "Type"];
                    delete r._.arrows[a + "String"]
                }
                for (S in v)
                    if (v[t](S) && !v[S]) {
                        var M = e._g.doc.getElementById(S);
                        M && M.parentNode.removeChild(M)
                    }
            }
        },
        x = {
            "": [0],
            none: [0],
            "-": [3, 1],
            ".": [1, 1],
            "-.": [3, 1, 1, 1],
            "-..": [3, 1, 1, 1, 1, 1],
            ". ": [1, 3],
            "- ": [4, 3],
            "--": [8, 3],
            "- .": [4, 3, 1, 3],
            "--.": [8, 3, 1, 3],
            "--..": [8, 3, 1, 3, 1, 3]
        },
        T = function(e, t, r) {
            t = x[n(t).toLowerCase()];
            if (t) {
                var i = e.attrs["stroke-width"] || "1",
                    s = {
                        round: i,
                        square: i,
                        butt: 0
                    }[e.attrs["stroke-linecap"] || r["stroke-linecap"]] || 0,
                    o = [],
                    u = t.length;
                while (u--) {
                    o[u] = t[u] * i + (u % 2 ? 1 : -1) * s
                }
                m(e.node, {
                    "stroke-dasharray": o.join(",")
                })
            }
        },
        N = function(r, s) {
            var a = r.node,
                l = r.attrs,
                h = a.style.visibility;
            a.style.visibility = "hidden";
            for (var d in s) {
                if (s[t](d)) {
                    if (!e._availableAttrs[t](d)) {
                        continue
                    }
                    var v = s[d];
                    l[d] = v;
                    switch (d) {
                        case "blur":
                            r.blur(v);
                            break;
                        case "href":
                        case "title":
                        case "target":
                            var g = a.parentNode;
                            if (g.tagName.toLowerCase() != "a") {
                                var y = m("a");
                                g.insertBefore(y, a);
                                y.appendChild(a);
                                g = y
                            }
                            if (d == "target" && v == "blank") {
                                g.setAttributeNS(p, "show", "new")
                            } else {
                                g.setAttributeNS(p, d, v)
                            }
                            break;
                        case "cursor":
                            a.style.cursor = v;
                            break;
                        case "transform":
                            r.transform(v);
                            break;
                        case "arrow-start":
                            S(r, v);
                            break;
                        case "arrow-end":
                            S(r, v, 1);
                            break;
                        case "clip-rect":
                            var b = n(v).split(f);
                            if (b.length == 4) {
                                r.clip && r.clip.parentNode.parentNode.removeChild(r.clip.parentNode);
                                var x = m("clipPath"),
                                    N = m("rect");
                                x.id = e.createUUID();
                                m(N, {
                                    x: b[0],
                                    y: b[1],
                                    width: b[2],
                                    height: b[3]
                                });
                                x.appendChild(N);
                                r.paper.defs.appendChild(x);
                                m(a, {
                                    "clip-path": "url(#" + x.id + ")"
                                });
                                r.clip = N
                            }
                            if (!v) {
                                var C = e._g.doc.getElementById(a.getAttribute("clip-path").replace(/(^url\(#|\)$)/g, c));
                                C && C.parentNode.removeChild(C);
                                m(a, {
                                    "clip-path": c
                                });
                                delete r.clip
                            }
                            break;
                        case "path":
                            if (r.type == "path") {
                                m(a, {
                                    d: v ? l.path = e._pathToAbsolute(v) : "M0,0"
                                });
                                r._.dirty = 1;
                                if (r._.arrows) {
                                    "startString" in r._.arrows && S(r, r._.arrows.startString);
                                    "endString" in r._.arrows && S(r, r._.arrows.endString, 1)
                                }
                            }
                            break;
                        case "width":
                            a.setAttribute(d, v);
                            r._.dirty = 1;
                            if (l.fx) {
                                d = "x";
                                v = l.x
                            } else {
                                break
                            };
                        case "x":
                            if (l.fx) {
                                v = -l.x - (l.width || 0)
                            };
                        case "rx":
                            if (d == "rx" && r.type == "rect") {
                                break
                            };
                        case "cx":
                            a.setAttribute(d, v);
                            r.pattern && E(r);
                            r._.dirty = 1;
                            break;
                        case "height":
                            a.setAttribute(d, v);
                            r._.dirty = 1;
                            if (l.fy) {
                                d = "y";
                                v = l.y
                            } else {
                                break
                            };
                        case "y":
                            if (l.fy) {
                                v = -l.y - (l.height || 0)
                            };
                        case "ry":
                            if (d == "ry" && r.type == "rect") {
                                break
                            };
                        case "cy":
                            a.setAttribute(d, v);
                            r.pattern && E(r);
                            r._.dirty = 1;
                            break;
                        case "r":
                            if (r.type == "rect") {
                                m(a, {
                                    rx: v,
                                    ry: v
                                })
                            } else {
                                a.setAttribute(d, v)
                            }
                            r._.dirty = 1;
                            break;
                        case "src":
                            if (r.type == "image") {
                                a.setAttributeNS(p, "href", v)
                            }
                            break;
                        case "stroke-width":
                            if (r._.sx != 1 || r._.sy != 1) {
                                v /= o(u(r._.sx), u(r._.sy)) || 1
                            }
                            if (r.paper._vbSize) {
                                v *= r.paper._vbSize
                            }
                            a.setAttribute(d, v);
                            if (l["stroke-dasharray"]) {
                                T(r, l["stroke-dasharray"], s)
                            }
                            if (r._.arrows) {
                                "startString" in r._.arrows && S(r, r._.arrows.startString);
                                "endString" in r._.arrows && S(r, r._.arrows.endString, 1)
                            }
                            break;
                        case "stroke-dasharray":
                            T(r, v, s);
                            break;
                        case "fill":
                            var L = n(v).match(e._ISURL);
                            if (L) {
                                x = m("pattern");
                                var A = m("image");
                                x.id = e.createUUID();
                                m(x, {
                                    x: 0,
                                    y: 0,
                                    patternUnits: "userSpaceOnUse",
                                    height: 1,
                                    width: 1
                                });
                                m(A, {
                                    x: 0,
                                    y: 0,
                                    "xlink:href": L[1]
                                });
                                x.appendChild(A);
                                (function(t) {
                                    e._preload(L[1], function() {
                                        var e = this.offsetWidth,
                                            n = this.offsetHeight;
                                        m(t, {
                                            width: e,
                                            height: n
                                        });
                                        m(A, {
                                            width: e,
                                            height: n
                                        });
                                        r.paper.safari()
                                    })
                                })(x);
                                r.paper.defs.appendChild(x);
                                a.style.fill = "url(#" + x.id + ")";
                                m(a, {
                                    fill: "url(#" + x.id + ")"
                                });
                                r.pattern = x;
                                r.pattern && E(r);
                                break
                            }
                            var O = e.getRGB(v);
                            if (!O.error) {
                                delete s.gradient;
                                delete l.gradient;
                                !e.is(l.opacity, "undefined") && e.is(s.opacity, "undefined") && m(a, {
                                    opacity: l.opacity
                                });
                                !e.is(l["fill-opacity"], "undefined") && e.is(s["fill-opacity"], "undefined") && m(a, {
                                    "fill-opacity": l["fill-opacity"]
                                })
                            } else if ((r.type == "circle" || r.type == "ellipse" || n(v).charAt() != "r") && w(r, v)) {
                                if ("opacity" in l || "fill-opacity" in l) {
                                    var M = e._g.doc.getElementById(a.getAttribute("fill").replace(/^url\(#|\)$/g, c));
                                    if (M) {
                                        var _ = M.getElementsByTagName("stop");
                                        m(_[_.length - 1], {
                                            "stop-opacity": ("opacity" in l ? l.opacity : 1) * ("fill-opacity" in l ? l["fill-opacity"] : 1)
                                        })
                                    }
                                }
                                l.gradient = v;
                                l.fill = "none";
                                break
                            }
                            O[t]("opacity") && m(a, {
                                "fill-opacity": O.opacity > 1 ? O.opacity / 100 : O.opacity
                            });
                        case "stroke":
                            O = e.getRGB(v);
                            a.setAttribute(d, O.hex);
                            d == "stroke" && O[t]("opacity") && m(a, {
                                "stroke-opacity": O.opacity > 1 ? O.opacity / 100 : O.opacity
                            });
                            if (d == "stroke" && r._.arrows) {
                                "startString" in r._.arrows && S(r, r._.arrows.startString);
                                "endString" in r._.arrows && S(r, r._.arrows.endString, 1)
                            }
                            break;
                        case "gradient":
                            (r.type == "circle" || r.type == "ellipse" || n(v).charAt() != "r") && w(r, v);
                            break;
                        case "opacity":
                            if (l.gradient && !l[t]("stroke-opacity")) {
                                m(a, {
                                    "stroke-opacity": v > 1 ? v / 100 : v
                                })
                            };
                        case "fill-opacity":
                            if (l.gradient) {
                                M = e._g.doc.getElementById(a.getAttribute("fill").replace(/^url\(#|\)$/g, c));
                                if (M) {
                                    _ = M.getElementsByTagName("stop");
                                    m(_[_.length - 1], {
                                        "stop-opacity": v
                                    })
                                }
                                break
                            };
                        default:
                            d == "font-size" && (v = i(v, 10) + "px");
                            var D = d.replace(/(\-.)/g, function(e) {
                                return e.substring(1).toUpperCase()
                            });
                            a.style[D] = v;
                            r._.dirty = 1;
                            a.setAttribute(d, v);
                            break
                    }
                }
            }
            k(r, s);
            a.style.visibility = h
        },
        C = 1.2,
        k = function(r, s) {
            if (r.type != "text" || !(s[t]("text") || s[t]("font") || s[t]("font-size") || s[t]("x") || s[t]("y"))) {
                return
            }
            var o = r.attrs,
                u = r.node,
                a = u.firstChild ? i(e._g.doc.defaultView.getComputedStyle(u.firstChild, c).getPropertyValue("font-size"), 10) : 10;
            if (s[t]("text")) {
                o.text = s.text;
                while (u.firstChild) {
                    u.removeChild(u.firstChild)
                }
                var f = n(s.text).split("\n"),
                    l = [],
                    h;
                for (var p = 0, d = f.length; p < d; p++) {
                    h = m("tspan");
                    p && m(h, {
                        dy: a * C,
                        x: o.x
                    });
                    h.appendChild(e._g.doc.createTextNode(f[p]));
                    u.appendChild(h);
                    l[p] = h
                }
            } else {
                l = u.getElementsByTagName("tspan");
                for (p = 0, d = l.length; p < d; p++)
                    if (p) {
                        m(l[p], {
                            dy: a * C,
                            x: o.x
                        })
                    } else {
                        m(l[0], {
                            dy: 0
                        })
                    }
            }
            m(u, {
                x: o.x,
                y: o.y
            });
            r._.dirty = 1;
            var v = r._getBBox(),
                g = o.y - (v.y + v.height / 2);
            g && e.is(g, "finite") && m(l[0], {
                dy: g
            })
        },
        L = function(t, n) {
            var r = 0,
                i = 0;
            this[0] = this.node = t;
            t.raphael = true;
            this.id = e._oid++;
            t.raphaelid = this.id;
            this.matrix = e.matrix();
            this.realPath = null;
            this.paper = n;
            this.attrs = this.attrs || {};
            this._ = {
                transform: [],
                sx: 1,
                sy: 1,
                deg: 0,
                dx: 0,
                dy: 0,
                dirty: 1
            };
            !n.bottom && (n.bottom = this);
            this.prev = n.top;
            n.top && (n.top.next = this);
            n.top = this;
            this.next = null
        },
        A = e.el;
    L.prototype = A;
    A.constructor = L;
    e._engine.path = function(e, t) {
        var n = m("path");
        t.canvas && t.canvas.appendChild(n);
        var r = new L(n, t);
        r.type = "path";
        N(r, {
            fill: "none",
            stroke: "#000",
            path: e
        });
        return r
    };
    A.rotate = function(e, t, i) {
        if (this.removed) {
            return this
        }
        e = n(e).split(f);
        if (e.length - 1) {
            t = r(e[1]);
            i = r(e[2])
        }
        e = r(e[0]);
        i == null && (t = i);
        if (t == null || i == null) {
            var s = this.getBBox(1);
            t = s.x + s.width / 2;
            i = s.y + s.height / 2
        }
        this.transform(this._.transform.concat([
            ["r", e, t, i]
        ]));
        return this
    };
    A.scale = function(e, t, i, s) {
        if (this.removed) {
            return this
        }
        e = n(e).split(f);
        if (e.length - 1) {
            t = r(e[1]);
            i = r(e[2]);
            s = r(e[3])
        }
        e = r(e[0]);
        t == null && (t = e);
        s == null && (i = s);
        if (i == null || s == null) {
            var o = this.getBBox(1)
        }
        i = i == null ? o.x + o.width / 2 : i;
        s = s == null ? o.y + o.height / 2 : s;
        this.transform(this._.transform.concat([
            ["s", e, t, i, s]
        ]));
        return this
    };
    A.translate = function(e, t) {
        if (this.removed) {
            return this
        }
        e = n(e).split(f);
        if (e.length - 1) {
            t = r(e[1])
        }
        e = r(e[0]) || 0;
        t = +t || 0;
        this.transform(this._.transform.concat([
            ["t", e, t]
        ]));
        return this
    };
    A.transform = function(n) {
        var r = this._;
        if (n == null) {
            return r.transform
        }
        e._extractTransform(this, n);
        this.clip && m(this.clip, {
            transform: this.matrix.invert()
        });
        this.pattern && E(this);
        this.node && m(this.node, {
            transform: this.matrix
        });
        if (r.sx != 1 || r.sy != 1) {
            var i = this.attrs[t]("stroke-width") ? this.attrs["stroke-width"] : 1;
            this.attr({
                "stroke-width": i
            })
        }
        return this
    };
    A.hide = function() {
        !this.removed && this.paper.safari(this.node.style.display = "none");
        return this
    };
    A.show = function() {
        !this.removed && this.paper.safari(this.node.style.display = "");
        return this
    };
    A.remove = function() {
        if (this.removed) {
            return
        }
        l.unbind("*.*." + this.id);
        e._tear(this, this.paper);
        this.node.parentNode.removeChild(this.node);
        for (var t in this) {
            delete this[t]
        }
        this.removed = true
    };
    A._getBBox = function() {
        if (this.node.style.display == "none") {
            this.show();
            var e = true
        }
        var t = {};
        try {
            t = this.node.getBBox()
        } catch (n) {} finally {
            t = t || {}
        }
        e && this.hide();
        return t
    };
    A.attr = function(n, r) {
        if (this.removed) {
            return this
        }
        if (n == null) {
            var i = {};
            for (var s in this.attrs)
                if (this.attrs[t](s)) {
                    i[s] = this.attrs[s]
                }
            i.gradient && i.fill == "none" && (i.fill = i.gradient) && delete i.gradient;
            i.transform = this._.transform;
            return i
        }
        if (r == null && e.is(n, "string")) {
            if (n == "fill" && this.attrs.fill == "none" && this.attrs.gradient) {
                return this.attrs.gradient
            }
            if (n == "transform") {
                return this._.transform
            }
            var o = n.split(f),
                u = {};
            for (var a = 0, l = o.length; a < l; a++) {
                n = o[a];
                if (n in this.attrs) {
                    u[n] = this.attrs[n]
                } else if (e.is(this.paper.customAttributes[n], "function")) {
                    u[n] = this.paper.customAttributes[n].def
                } else {
                    u[n] = e._availableAttrs[n]
                }
            }
            return l - 1 ? u : u[o[0]]
        }
        if (r == null && e.is(n, "array")) {
            u = {};
            for (a = 0, l = n.length; a < l; a++) {
                u[n[a]] = this.attr(n[a])
            }
            return u
        }
        if (r != null) {
            var c = {};
            c[n] = r
        } else if (n != null && e.is(n, "object")) {
            c = n
        }
        for (var h in this.paper.customAttributes)
            if (this.paper.customAttributes[t](h) && c[t](h) && e.is(this.paper.customAttributes[h], "function")) {
                var p = this.paper.customAttributes[h].apply(this, [].concat(c[h]));
                this.attrs[h] = c[h];
                for (var d in p)
                    if (p[t](d)) {
                        c[d] = p[d]
                    }
            }
        N(this, c);
        return this
    };
    A.toFront = function() {
        if (this.removed) {
            return this
        }
        this.node.parentNode.appendChild(this.node);
        var t = this.paper;
        t.top != this && e._tofront(this, t);
        return this
    };
    A.toBack = function() {
        if (this.removed) {
            return this
        }
        if (this.node.parentNode.firstChild != this.node) {
            this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild);
            e._toback(this, this.paper);
            var t = this.paper
        }
        return this
    };
    A.insertAfter = function(t) {
        if (this.removed) {
            return this
        }
        var n = t.node || t[t.length - 1].node;
        if (n.nextSibling) {
            n.parentNode.insertBefore(this.node, n.nextSibling)
        } else {
            n.parentNode.appendChild(this.node)
        }
        e._insertafter(this, t, this.paper);
        return this
    };
    A.insertBefore = function(t) {
        if (this.removed) {
            return this
        }
        var n = t.node || t[0].node;
        n.parentNode.insertBefore(this.node, n);
        e._insertbefore(this, t, this.paper);
        return this
    };
    A.blur = function(t) {
        var n = this;
        if (+t !== 0) {
            var r = m("filter"),
                i = m("feGaussianBlur");
            n.attrs.blur = t;
            r.id = e.createUUID();
            m(i, {
                stdDeviation: +t || 1.5
            });
            r.appendChild(i);
            n.paper.defs.appendChild(r);
            n._blur = r;
            m(n.node, {
                filter: "url(#" + r.id + ")"
            })
        } else {
            if (n._blur) {
                n._blur.parentNode.removeChild(n._blur);
                delete n._blur;
                delete n.attrs.blur
            }
            n.node.removeAttribute("filter")
        }
    };
    e._engine.circle = function(e, t, n, r) {
        var i = m("circle");
        e.canvas && e.canvas.appendChild(i);
        var s = new L(i, e);
        s.attrs = {
            cx: t,
            cy: n,
            r: r,
            fill: "none",
            stroke: "#000"
        };
        s.type = "circle";
        m(i, s.attrs);
        return s
    };
    e._engine.rect = function(e, t, n, r, i, s) {
        var o = m("rect");
        e.canvas && e.canvas.appendChild(o);
        var u = new L(o, e);
        u.attrs = {
            x: t,
            y: n,
            width: r,
            height: i,
            r: s || 0,
            rx: s || 0,
            ry: s || 0,
            fill: "none",
            stroke: "#000"
        };
        u.type = "rect";
        m(o, u.attrs);
        return u
    };
    e._engine.ellipse = function(e, t, n, r, i) {
        var s = m("ellipse");
        e.canvas && e.canvas.appendChild(s);
        var o = new L(s, e);
        o.attrs = {
            cx: t,
            cy: n,
            rx: r,
            ry: i,
            fill: "none",
            stroke: "#000"
        };
        o.type = "ellipse";
        m(s, o.attrs);
        return o
    };
    e._engine.image = function(e, t, n, r, i, s) {
        var o = m("image");
        m(o, {
            x: n,
            y: r,
            width: i,
            height: s,
            preserveAspectRatio: "none"
        });
        o.setAttributeNS(p, "href", t);
        e.canvas && e.canvas.appendChild(o);
        var u = new L(o, e);
        u.attrs = {
            x: n,
            y: r,
            width: i,
            height: s,
            src: t
        };
        u.type = "image";
        return u
    };
    e._engine.text = function(t, n, r, i) {
        var s = m("text");
        t.canvas && t.canvas.appendChild(s);
        var o = new L(s, t);
        o.attrs = {
            x: n,
            y: r,
            "text-anchor": "middle",
            text: i,
            font: e._availableAttrs.font,
            stroke: "none",
            fill: "#000"
        };
        o.type = "text";
        N(o, o.attrs);
        return o
    };
    e._engine.setSize = function(e, t) {
        this.width = e || this.width;
        this.height = t || this.height;
        this.canvas.setAttribute("width", this.width);
        this.canvas.setAttribute("height", this.height);
        if (this._viewBox) {
            this.setViewBox.apply(this, this._viewBox)
        }
        return this
    };
    e._engine.create = function() {
        var t = e._getContainer.apply(0, arguments),
            n = t && t.container,
            r = t.x,
            i = t.y,
            s = t.width,
            o = t.height;
        if (!n) {
            throw new Error("SVG container not found.")
        }
        var u = m("svg"),
            a = "overflow:hidden;",
            f;
        r = r || 0;
        i = i || 0;
        s = s || 512;
        o = o || 342;
        m(u, {
            height: o,
            version: 1.1,
            width: s,
            xmlns: "http://www.w3.org/2000/svg"
        });
        if (n == 1) {
            u.style.cssText = a + "position:absolute;left:" + r + "px;top:" + i + "px";
            e._g.doc.body.appendChild(u);
            f = 1
        } else {
            u.style.cssText = a + "position:relative";
            if (n.firstChild) {
                n.insertBefore(u, n.firstChild)
            } else {
                n.appendChild(u)
            }
        }
        n = new e._Paper;
        n.width = s;
        n.height = o;
        n.canvas = u;
        n.clear();
        n._left = n._top = 0;
        f && (n.renderfix = function() {});
        n.renderfix();
        return n
    };
    e._engine.setViewBox = function(e, t, n, r, i) {
        l("setViewBox", this, this._viewBox, [e, t, n, r, i]);
        var s = o(n / this.width, r / this.height),
            u = this.top,
            a = i ? "meet" : "xMinYMin",
            f, c;
        if (e == null) {
            if (this._vbSize) {
                s = 1
            }
            delete this._vbSize;
            f = "0 0 " + this.width + h + this.height
        } else {
            this._vbSize = s;
            f = e + h + t + h + n + h + r
        }
        m(this.canvas, {
            viewBox: f,
            preserveAspectRatio: a
        });
        while (s && u) {
            c = "stroke-width" in u.attrs ? u.attrs["stroke-width"] : 1;
            u.attr({
                "stroke-width": c
            });
            u._.dirty = 1;
            u._.dirtyT = 1;
            u = u.prev
        }
        this._viewBox = [e, t, n, r, !!i];
        return this
    };
    e.prototype.renderfix = function() {
        var e = this.canvas,
            t = e.style,
            n = e.getScreenCTM() || e.createSVGMatrix(),
            r = -n.e % 1,
            i = -n.f % 1;
        if (r || i) {
            if (r) {
                this._left = (this._left + r) % 1;
                t.left = this._left + "px"
            }
            if (i) {
                this._top = (this._top + i) % 1;
                t.top = this._top + "px"
            }
        }
    };
    e.prototype.clear = function() {
        e.eve("clear", this);
        var t = this.canvas;
        while (t.firstChild) {
            t.removeChild(t.firstChild)
        }
        this.bottom = this.top = null;
        (this.desc = m("desc")).appendChild(e._g.doc.createTextNode("Created with Raphaël " + e.version));
        t.appendChild(this.desc);
        t.appendChild(this.defs = m("defs"))
    };
    e.prototype.remove = function() {
        l("remove", this);
        this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
        for (var e in this) {
            this[e] = removed(e)
        }
    };
    var O = e.st;
    for (var M in A)
        if (A[t](M) && !O[t](M)) {
            O[M] = function(e) {
                return function() {
                    var t = arguments;
                    return this.forEach(function(n) {
                        n[e].apply(n, t)
                    })
                }
            }(M)
        }
}(window.Raphael);
window.Raphael.vml && function(e) {
    var t = "hasOwnProperty",
        n = String,
        r = parseFloat,
        i = Math,
        s = i.round,
        o = i.max,
        u = i.min,
        a = i.abs,
        f = "fill",
        l = /[, ]+/,
        c = e.eve,
        h = " progid:DXImageTransform.Microsoft",
        p = " ",
        d = "",
        v = {
            M: "m",
            L: "l",
            C: "c",
            Z: "x",
            m: "t",
            l: "r",
            c: "v",
            z: "x"
        },
        m = /([clmz]),?([^clmz]*)/gi,
        g = / progid:\S+Blur\([^\)]+\)/g,
        y = /-?[^,\s-]+/g,
        b = "position:absolute;left:0;top:0;width:1px;height:1px",
        w = 21600,
        E = {
            path: 1,
            rect: 1,
            image: 1
        },
        S = {
            circle: 1,
            ellipse: 1
        },
        x = function(t) {
            var r = /[ahqstv]/ig,
                i = e._pathToAbsolute;
            n(t).match(r) && (i = e._path2curve);
            r = /[clmz]/g;
            if (i == e._pathToAbsolute && !n(t).match(r)) {
                var o = n(t).replace(m, function(e, t, n) {
                    var r = [],
                        i = t.toLowerCase() == "m",
                        o = v[t];
                    n.replace(y, function(e) {
                        if (i && r.length == 2) {
                            o += r + v[t == "m" ? "l" : "L"];
                            r = []
                        }
                        r.push(s(e * w))
                    });
                    return o + r
                });
                return o
            }
            var u = i(t),
                a, f;
            o = [];
            for (var l = 0, c = u.length; l < c; l++) {
                a = u[l];
                f = u[l][0].toLowerCase();
                f == "z" && (f = "x");
                for (var h = 1, g = a.length; h < g; h++) {
                    f += s(a[h] * w) + (h != g - 1 ? "," : d)
                }
                o.push(f)
            }
            return o.join(p)
        },
        T = function(t, n, r) {
            var i = e.matrix();
            i.rotate(-t, .5, .5);
            return {
                dx: i.x(n, r),
                dy: i.y(n, r)
            }
        },
        N = function(e, t, n, r, i, s) {
            var o = e._,
                u = e.matrix,
                l = o.fillpos,
                c = e.node,
                h = c.style,
                d = 1,
                v = "",
                m, g = w / t,
                y = w / n;
            h.visibility = "hidden";
            if (!t || !n) {
                return
            }
            c.coordsize = a(g) + p + a(y);
            h.rotation = s * (t * n < 0 ? -1 : 1);
            if (s) {
                var b = T(s, r, i);
                r = b.dx;
                i = b.dy
            }
            t < 0 && (v += "x");
            n < 0 && (v += " y") && (d = -1);
            h.flip = v;
            c.coordorigin = r * -g + p + i * -y;
            if (l || o.fillsize) {
                var E = c.getElementsByTagName(f);
                E = E && E[0];
                c.removeChild(E);
                if (l) {
                    b = T(s, u.x(l[0], l[1]), u.y(l[0], l[1]));
                    E.position = b.dx * d + p + b.dy * d
                }
                if (o.fillsize) {
                    E.size = o.fillsize[0] * a(t) + p + o.fillsize[1] * a(n)
                }
                c.appendChild(E)
            }
            h.visibility = "visible"
        };
    e.toString = function() {
        return "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " + this.version
    };
    addArrow = function(e, t, r) {
        var i = n(t).toLowerCase().split("-"),
            s = r ? "end" : "start",
            o = i.length,
            u = "classic",
            a = "medium",
            f = "medium";
        while (o--) {
            switch (i[o]) {
                case "block":
                case "classic":
                case "oval":
                case "diamond":
                case "open":
                case "none":
                    u = i[o];
                    break;
                case "wide":
                case "narrow":
                    f = i[o];
                    break;
                case "long":
                case "short":
                    a = i[o];
                    break
            }
        }
        var l = e.node.getElementsByTagName("stroke")[0];
        l[s + "arrow"] = u;
        l[s + "arrowlength"] = a;
        l[s + "arrowwidth"] = f
    };
    setFillAndStroke = function(i, a) {
        i.attrs = i.attrs || {};
        var c = i.node,
            h = i.attrs,
            v = c.style,
            m, g = E[i.type] && (a.x != h.x || a.y != h.y || a.width != h.width || a.height != h.height || a.cx != h.cx || a.cy != h.cy || a.rx != h.rx || a.ry != h.ry || a.r != h.r),
            y = S[i.type] && (h.cx != a.cx || h.cy != a.cy || h.r != a.r || h.rx != a.rx || h.ry != a.ry),
            b = i;
        for (var T in a)
            if (a[t](T)) {
                h[T] = a[T]
            }
        if (g) {
            h.path = e._getPath[i.type](i);
            i._.dirty = 1
        }
        a.href && (c.href = a.href);
        a.title && (c.title = a.title);
        a.target && (c.target = a.target);
        a.cursor && (v.cursor = a.cursor);
        "blur" in a && i.blur(a.blur);
        if (a.path && i.type == "path" || g) {
            c.path = x(~n(h.path).toLowerCase().indexOf("r") ? e._pathToAbsolute(h.path) : h.path);
            if (i.type == "image") {
                i._.fillpos = [h.x, h.y];
                i._.fillsize = [h.width, h.height];
                N(i, 1, 1, 0, 0, 0)
            }
        }
        "transform" in a && i.transform(a.transform);
        if (y) {
            var C = +h.cx,
                L = +h.cy,
                A = +h.rx || +h.r || 0,
                O = +h.ry || +h.r || 0;
            c.path = e.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", s((C - A) * w), s((L - O) * w), s((C + A) * w), s((L + O) * w), s(C * w))
        }
        if ("clip-rect" in a) {
            var M = n(a["clip-rect"]).split(l);
            if (M.length == 4) {
                M[2] = +M[2] + +M[0];
                M[3] = +M[3] + +M[1];
                var _ = c.clipRect || e._g.doc.createElement("div"),
                    D = _.style;
                D.clip = e.format("rect({1}px {2}px {3}px {0}px)", M);
                if (!c.clipRect) {
                    D.position = "absolute";
                    D.top = 0;
                    D.left = 0;
                    D.width = i.paper.width + "px";
                    D.height = i.paper.height + "px";
                    c.parentNode.insertBefore(_, c);
                    _.appendChild(c);
                    c.clipRect = _
                }
            }
            if (!a["clip-rect"]) {
                c.clipRect && (c.clipRect.style.clip = d)
            }
        }
        if (i.textpath) {
            var P = i.textpath.style;
            a.font && (P.font = a.font);
            a["font-family"] && (P.fontFamily = '"' + a["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, d) + '"');
            a["font-size"] && (P.fontSize = a["font-size"]);
            a["font-weight"] && (P.fontWeight = a["font-weight"]);
            a["font-style"] && (P.fontStyle = a["font-style"])
        }
        if ("arrow-start" in a) {
            addArrow(b, a["arrow-start"])
        }
        if ("arrow-end" in a) {
            addArrow(b, a["arrow-end"], 1)
        }
        if (a.opacity != null || a["stroke-width"] != null || a.fill != null || a.src != null || a.stroke != null || a["stroke-width"] != null || a["stroke-opacity"] != null || a["fill-opacity"] != null || a["stroke-dasharray"] != null || a["stroke-miterlimit"] != null || a["stroke-linejoin"] != null || a["stroke-linecap"] != null) {
            var H = c.getElementsByTagName(f),
                B = false;
            H = H && H[0];
            !H && (B = H = k(f));
            if (i.type == "image" && a.src) {
                H.src = a.src
            }
            a.fill && (H.on = true);
            if (H.on == null || a.fill == "none" || a.fill === null) {
                H.on = false
            }
            if (H.on && a.fill) {
                var j = n(a.fill).match(e._ISURL);
                if (j) {
                    H.parentNode == c && c.removeChild(H);
                    H.rotate = true;
                    H.src = j[1];
                    H.type = "tile";
                    var F = i.getBBox(1);
                    H.position = F.x + p + F.y;
                    i._.fillpos = [F.x, F.y];
                    e._preload(j[1], function() {
                        i._.fillsize = [this.offsetWidth, this.offsetHeight]
                    })
                } else {
                    H.color = e.getRGB(a.fill).hex;
                    H.src = d;
                    H.type = "solid";
                    if (e.getRGB(a.fill).error && (b.type in {
                            circle: 1,
                            ellipse: 1
                        } || n(a.fill).charAt() != "r") && addGradientFill(b, a.fill, H)) {
                        h.fill = "none";
                        h.gradient = a.fill;
                        H.rotate = false
                    }
                }
            }
            if ("fill-opacity" in a || "opacity" in a) {
                var I = ((+h["fill-opacity"] + 1 || 2) - 1) * ((+h.opacity + 1 || 2) - 1) * ((+e.getRGB(a.fill).o + 1 || 2) - 1);
                I = u(o(I, 0), 1);
                H.opacity = I;
                if (H.src) {
                    H.color = "none"
                }
            }
            c.appendChild(H);
            var q = c.getElementsByTagName("stroke") && c.getElementsByTagName("stroke")[0],
                U = false;
            !q && (U = q = k("stroke"));
            if (a.stroke && a.stroke != "none" || a["stroke-width"] || a["stroke-opacity"] != null || a["stroke-dasharray"] || a["stroke-miterlimit"] || a["stroke-linejoin"] || a["stroke-linecap"]) {
                q.on = true
            }(a.stroke == "none" || a.stroke === null || q.on == null || a.stroke == 0 || a["stroke-width"] == 0) && (q.on = false);
            var z = e.getRGB(a.stroke);
            q.on && a.stroke && (q.color = z.hex);
            I = ((+h["stroke-opacity"] + 1 || 2) - 1) * ((+h.opacity + 1 || 2) - 1) * ((+z.o + 1 || 2) - 1);
            var W = (r(a["stroke-width"]) || 1) * .75;
            I = u(o(I, 0), 1);
            a["stroke-width"] == null && (W = h["stroke-width"]);
            a["stroke-width"] && (q.weight = W);
            W && W < 1 && (I *= W) && (q.weight = 1);
            q.opacity = I;
            a["stroke-linejoin"] && (q.joinstyle = a["stroke-linejoin"] || "miter");
            q.miterlimit = a["stroke-miterlimit"] || 8;
            a["stroke-linecap"] && (q.endcap = a["stroke-linecap"] == "butt" ? "flat" : a["stroke-linecap"] == "square" ? "square" : "round");
            if (a["stroke-dasharray"]) {
                var X = {
                    "-": "shortdash",
                    ".": "shortdot",
                    "-.": "shortdashdot",
                    "-..": "shortdashdotdot",
                    ". ": "dot",
                    "- ": "dash",
                    "--": "longdash",
                    "- .": "dashdot",
                    "--.": "longdashdot",
                    "--..": "longdashdotdot"
                };
                q.dashstyle = X[t](a["stroke-dasharray"]) ? X[a["stroke-dasharray"]] : d
            }
            U && c.appendChild(q)
        }
        if (b.type == "text") {
            b.paper.canvas.style.display = d;
            var V = b.paper.span,
                $ = 100,
                J = h.font && h.font.match(/\d+(?:\.\d*)?(?=px)/);
            v = V.style;
            h.font && (v.font = h.font);
            h["font-family"] && (v.fontFamily = h["font-family"]);
            h["font-weight"] && (v.fontWeight = h["font-weight"]);
            h["font-style"] && (v.fontStyle = h["font-style"]);
            J = r(J ? J[0] : h["font-size"]);
            v.fontSize = J * $ + "px";
            b.textpath.string && (V.innerHTML = n(b.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
            var K = V.getBoundingClientRect();
            b.W = h.w = (K.right - K.left) / $;
            b.H = h.h = (K.bottom - K.top) / $;
            b.X = h.x;
            b.Y = h.y + b.H / 2;
            ("x" in a || "y" in a) && (b.path.v = e.format("m{0},{1}l{2},{1}", s(h.x * w), s(h.y * w), s(h.x * w) + 1));
            var Q = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"];
            for (var G = 0, Y = Q.length; G < Y; G++)
                if (Q[G] in a) {
                    b._.dirty = 1;
                    break
                }
            switch (h["text-anchor"]) {
                case "start":
                    b.textpath.style["v-text-align"] = "left";
                    b.bbx = b.W / 2;
                    break;
                case "end":
                    b.textpath.style["v-text-align"] = "right";
                    b.bbx = -b.W / 2;
                    break;
                default:
                    b.textpath.style["v-text-align"] = "center";
                    b.bbx = 0;
                    break
            }
            b.textpath.style["v-text-kern"] = true
        }
    };
    addGradientFill = function(t, s, o) {
        t.attrs = t.attrs || {};
        var u = t.attrs,
            a, f, l = "linear",
            c = ".5 .5";
        t.attrs.gradient = s;
        s = n(s).replace(e._radial_gradient, function(e, t, n) {
            l = "radial";
            if (t && n) {
                t = r(t);
                n = r(n);
                pow(t - .5, 2) + pow(n - .5, 2) > .25 && (n = i.sqrt(.25 - pow(t - .5, 2)) * ((n > .5) * 2 - 1) + .5);
                c = t + p + n
            }
            return d
        });
        s = s.split(/\s*\-\s*/);
        if (l == "linear") {
            var h = s.shift();
            h = -r(h);
            if (isNaN(h)) {
                return null
            }
        }
        var v = e._parseDots(s);
        if (!v) {
            return null
        }
        t = t.shape || t.node;
        if (v.length) {
            t.removeChild(o);
            o.on = true;
            o.method = "none";
            o.color = v[0].color;
            o.color2 = v[v.length - 1].color;
            var m = [];
            for (var g = 0, y = v.length; g < y; g++) {
                v[g].offset && m.push(v[g].offset + p + v[g].color)
            }
            o.colors = m.length ? m.join() : "0% " + o.color;
            if (l == "radial") {
                o.type = "gradientTitle";
                o.focus = "100%";
                o.focussize = "0 0";
                o.focusposition = c;
                o.angle = 0
            } else {
                o.type = "gradient";
                o.angle = (270 - h) % 360
            }
            t.appendChild(o)
        }
        return 1
    };
    Element = function(t, n) {
        this[0] = this.node = t;
        t.raphael = true;
        this.id = e._oid++;
        t.raphaelid = this.id;
        this.X = 0;
        this.Y = 0;
        this.attrs = {};
        this.paper = n;
        this.matrix = e.matrix();
        this._ = {
            transform: [],
            sx: 1,
            sy: 1,
            dx: 0,
            dy: 0,
            deg: 0,
            dirty: 1,
            dirtyT: 1
        };
        !n.bottom && (n.bottom = this);
        this.prev = n.top;
        n.top && (n.top.next = this);
        n.top = this;
        this.next = null
    };
    var C = e.el;
    Element.prototype = C;
    C.constructor = Element;
    C.transform = function(t) {
        if (t == null) {
            return this._.transform
        }
        var r = this.paper._viewBoxShift,
            i = r ? "s" + [r.scale, r.scale] + "-1-1t" + [r.dx, r.dy] : d,
            s;
        if (r) {
            s = t = n(t).replace(/\.{3}|\u2026/g, this._.transform || d)
        }
        e._extractTransform(this, i + t);
        var o = this.matrix.clone(),
            u = this.skew,
            a = this.node,
            f, l = ~n(this.attrs.fill).indexOf("-"),
            c = !n(this.attrs.fill).indexOf("url(");
        o.translate(-.5, -.5);
        if (c || l || this.type == "image") {
            u.matrix = "1 0 0 1";
            u.offset = "0 0";
            f = o.split();
            if (l && f.noRotation || !f.isSimple) {
                a.style.filter = o.toFilter();
                var h = this.getBBox(),
                    v = this.getBBox(1),
                    m = h.x - v.x,
                    g = h.y - v.y;
                a.coordorigin = m * -w + p + g * -w;
                N(this, 1, 1, m, g, 0)
            } else {
                a.style.filter = d;
                N(this, f.scalex, f.scaley, f.dx, f.dy, f.rotate)
            }
        } else {
            a.style.filter = d;
            u.matrix = n(o);
            u.offset = o.offset()
        }
        s && (this._.transform = s);
        return this
    };
    C.rotate = function(e, t, i) {
        if (this.removed) {
            return this
        }
        if (e == null) {
            return
        }
        e = n(e).split(l);
        if (e.length - 1) {
            t = r(e[1]);
            i = r(e[2])
        }
        e = r(e[0]);
        i == null && (t = i);
        if (t == null || i == null) {
            var s = this.getBBox(1);
            t = s.x + s.width / 2;
            i = s.y + s.height / 2
        }
        this._.dirtyT = 1;
        this.transform(this._.transform.concat([
            ["r", e, t, i]
        ]));
        return this
    };
    C.translate = function(e, t) {
        if (this.removed) {
            return this
        }
        e = n(e).split(l);
        if (e.length - 1) {
            t = r(e[1])
        }
        e = r(e[0]) || 0;
        t = +t || 0;
        if (this._.bbox) {
            this._.bbox.x += e;
            this._.bbox.y += t
        }
        this.transform(this._.transform.concat([
            ["t", e, t]
        ]));
        return this
    };
    C.scale = function(e, t, i, s) {
        if (this.removed) {
            return this
        }
        e = n(e).split(l);
        if (e.length - 1) {
            t = r(e[1]);
            i = r(e[2]);
            s = r(e[3]);
            isNaN(i) && (i = null);
            isNaN(s) && (s = null)
        }
        e = r(e[0]);
        t == null && (t = e);
        s == null && (i = s);
        if (i == null || s == null) {
            var o = this.getBBox(1)
        }
        i = i == null ? o.x + o.width / 2 : i;
        s = s == null ? o.y + o.height / 2 : s;
        this.transform(this._.transform.concat([
            ["s", e, t, i, s]
        ]));
        this._.dirtyT = 1;
        return this
    };
    C.hide = function() {
        !this.removed && (this.node.style.display = "none");
        return this
    };
    C.show = function() {
        !this.removed && (this.node.style.display = d);
        return this
    };
    C._getBBox = function() {
        if (this.removed) {
            return {}
        }
        if (this.type == "text") {
            return {
                x: this.X + (this.bbx || 0) - this.W / 2,
                y: this.Y - this.H,
                width: this.W,
                height: this.H
            }
        } else {
            return pathDimensions(this.attrs.path)
        }
    };
    C.remove = function() {
        if (this.removed) {
            return
        }
        e.eve.unbind("*.*." + this.id);
        e._tear(this, this.paper);
        this.node.parentNode.removeChild(this.node);
        this.shape && this.shape.parentNode.removeChild(this.shape);
        for (var t in this) {
            delete this[t]
        }
        this.removed = true
    };
    C.attr = function(n, r) {
        if (this.removed) {
            return this
        }
        if (n == null) {
            var i = {};
            for (var s in this.attrs)
                if (this.attrs[t](s)) {
                    i[s] = this.attrs[s]
                }
            i.gradient && i.fill == "none" && (i.fill = i.gradient) && delete i.gradient;
            i.transform = this._.transform;
            return i
        }
        if (r == null && e.is(n, "string")) {
            if (n == f && this.attrs.fill == "none" && this.attrs.gradient) {
                return this.attrs.gradient
            }
            var o = n.split(l),
                u = {};
            for (var a = 0, c = o.length; a < c; a++) {
                n = o[a];
                if (n in this.attrs) {
                    u[n] = this.attrs[n]
                } else if (e.is(this.paper.customAttributes[n], "function")) {
                    u[n] = this.paper.customAttributes[n].def
                } else {
                    u[n] = e._availableAttrs[n]
                }
            }
            return c - 1 ? u : u[o[0]]
        }
        if (this.attrs && r == null && e.is(n, "array")) {
            u = {};
            for (a = 0, c = n.length; a < c; a++) {
                u[n[a]] = this.attr(n[a])
            }
            return u
        }
        var h;
        if (r != null) {
            h = {};
            h[n] = r
        }
        r == null && e.is(n, "object") && (h = n);
        for (var p in h) {
            e.eve("attr." + p + "." + this.id, this, h[p])
        }
        if (h) {
            for (p in this.paper.customAttributes)
                if (this.paper.customAttributes[t](p) && h[t](p) && e.is(this.paper.customAttributes[p], "function")) {
                    var d = this.paper.customAttributes[p].apply(this, [][concat](h[p]));
                    this.attrs[p] = h[p];
                    for (var v in d)
                        if (d[t](v)) {
                            h[v] = d[v]
                        }
                }
            if (h.text && this.type == "text") {
                this.textpath.string = h.text
            }
            setFillAndStroke(this, h)
        }
        return this
    };
    C.toFront = function() {
        !this.removed && this.node.parentNode.appendChild(this.node);
        this.paper && this.paper.top != this && e._tofront(this, this.paper);
        return this
    };
    C.toBack = function() {
        if (this.removed) {
            return this
        }
        if (this.node.parentNode.firstChild != this.node) {
            this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild);
            e._toback(this, this.paper)
        }
        return this
    };
    C.insertAfter = function(t) {
        if (this.removed) {
            return this
        }
        if (t.constructor == e.st.constructor) {
            t = t[t.length - 1]
        }
        if (t.node.nextSibling) {
            t.node.parentNode.insertBefore(this.node, t.node.nextSibling)
        } else {
            t.node.parentNode.appendChild(this.node)
        }
        e._insertafter(this, t, this.paper);
        return this
    };
    C.insertBefore = function(t) {
        if (this.removed) {
            return this
        }
        if (t.constructor == e.st.constructor) {
            t = t[0]
        }
        t.node.parentNode.insertBefore(this.node, t.node);
        e._insertbefore(this, t, this.paper);
        return this
    };
    C.blur = function(t) {
        var n = this.node.runtimeStyle,
            r = n.filter;
        r = r.replace(g, d);
        if (+t !== 0) {
            this.attrs.blur = t;
            n.filter = r + p + h + ".Blur(pixelradius=" + (+t || 1.5) + ")";
            n.margin = e.format("-{0}px 0 0 -{0}px", s(+t || 1.5))
        } else {
            n.filter = r;
            n.margin = 0;
            delete this.attrs.blur
        }
    };
    e._engine.path = function(e, t) {
        var n = k("shape");
        n.style.cssText = b;
        n.coordsize = w + p + w;
        n.coordorigin = t.coordorigin;
        var r = new Element(n, t),
            i = {
                fill: "none",
                stroke: "#000"
            };
        e && (i.path = e);
        r.type = "path";
        r.path = [];
        r.Path = d;
        setFillAndStroke(r, i);
        t.canvas.appendChild(n);
        var s = k("skew");
        s.on = true;
        n.appendChild(s);
        r.skew = s;
        r.transform(d);
        return r
    };
    e._engine.rect = function(t, n, r, i, s, o) {
        var u = e._rectPath(n, r, i, s, o),
            a = t.path(u),
            f = a.attrs;
        a.X = f.x = n;
        a.Y = f.y = r;
        a.W = f.width = i;
        a.H = f.height = s;
        f.r = o;
        f.path = u;
        a.type = "rect";
        return a
    };
    e._engine.ellipse = function(e, t, n, r, i) {
        var s = e.path(),
            o = s.attrs;
        s.X = t - r;
        s.Y = n - i;
        s.W = r * 2;
        s.H = i * 2;
        s.type = "ellipse";
        setFillAndStroke(s, {
            cx: t,
            cy: n,
            rx: r,
            ry: i
        });
        return s
    };
    e._engine.circle = function(e, t, n, r) {
        var i = e.path(),
            s = i.attrs;
        i.X = t - r;
        i.Y = n - r;
        i.W = i.H = r * 2;
        i.type = "circle";
        setFillAndStroke(i, {
            cx: t,
            cy: n,
            r: r
        });
        return i
    };
    e._engine.image = function(t, n, r, i, s, o) {
        var u = e._rectPath(r, i, s, o),
            a = t.path(u).attr({
                stroke: "none"
            }),
            l = a.attrs,
            c = a.node,
            h = c.getElementsByTagName(f)[0];
        l.src = n;
        a.X = l.x = r;
        a.Y = l.y = i;
        a.W = l.width = s;
        a.H = l.height = o;
        l.path = u;
        a.type = "image";
        h.parentNode == c && c.removeChild(h);
        h.rotate = true;
        h.src = n;
        h.type = "tile";
        a._.fillpos = [r, i];
        a._.fillsize = [s, o];
        c.appendChild(h);
        N(a, 1, 1, 0, 0, 0);
        return a
    };
    e._engine.text = function(t, r, i, o) {
        var u = k("shape"),
            a = k("path"),
            f = k("textpath");
        r = r || 0;
        i = i || 0;
        o = o || "";
        a.v = e.format("m{0},{1}l{2},{1}", s(r * w), s(i * w), s(r * w) + 1);
        a.textpathok = true;
        f.string = n(o);
        f.on = true;
        u.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px";
        u.coordsize = w + p + w;
        u.coordorigin = "0 0";
        var l = new Element(u, t),
            c = {
                fill: "#000",
                stroke: "none",
                font: e._availableAttrs.font,
                text: o
            };
        l.shape = u;
        l.path = a;
        l.textpath = f;
        l.type = "text";
        l.attrs.text = n(o);
        l.attrs.x = r;
        l.attrs.y = i;
        l.attrs.w = 1;
        l.attrs.h = 1;
        setFillAndStroke(l, c);
        u.appendChild(f);
        u.appendChild(a);
        t.canvas.appendChild(u);
        var h = k("skew");
        h.on = true;
        u.appendChild(h);
        l.skew = h;
        l.transform(d);
        return l
    };
    e._engine.setSize = function(e, t) {
        var n = this.canvas.style;
        this.width = e;
        this.height = t;
        e == +e && (e += "px");
        t == +t && (t += "px");
        n.width = e;
        n.height = t;
        n.clip = "rect(0 " + e + " " + t + " 0)";
        if (this._viewBox) {
            setViewBox.apply(this, this._viewBox)
        }
        return this
    };
    e._engine.setViewBox = function(t, n, r, i, s) {
        e.eve("setViewBox", this, this._viewBox, [t, n, r, i, s]);
        var u = this.width,
            a = this.height,
            f = 1 / o(r / u, i / a),
            l, c;
        if (s) {
            l = a / i;
            c = u / r;
            if (r * l < u) {
                t -= (u - r * l) / 2 / l
            }
            if (i * c < a) {
                n -= (a - i * c) / 2 / c
            }
        }
        this._viewBox = [t, n, r, i, !!s];
        this._viewBoxShift = {
            dx: -t,
            dy: -n,
            scale: f
        };
        this.forEach(function(e) {
            e.transform("...")
        });
        return this
    };
    var k, L = function(e) {
        var t = e.document;
        t.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
        try {
            !t.namespaces.rvml && t.namespaces.add("rvml", "urn:schemas-microsoft-com:vml");
            k = function(e) {
                return t.createElement("<rvml:" + e + ' class="rvml">')
            }
        } catch (n) {
            k = function(e) {
                return t.createElement("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
            }
        }
    };
    L(e._g.win);
    e._engine.create = function() {
        var t = e._getContainer.apply(0, arguments),
            n = t.container,
            r = t.height,
            i, s = t.width,
            o = t.x,
            u = t.y;
        if (!n) {
            throw new Error("VML container not found.")
        }
        var a = new e._Paper,
            f = a.canvas = e._g.doc.createElement("div"),
            l = f.style;
        o = o || 0;
        u = u || 0;
        s = s || 512;
        r = r || 342;
        a.width = s;
        a.height = r;
        s == +s && (s += "px");
        r == +r && (r += "px");
        a.coordsize = w * 1e3 + p + w * 1e3;
        a.coordorigin = "0 0";
        a.span = e._g.doc.createElement("span");
        a.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;";
        f.appendChild(a.span);
        l.cssText = e.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", s, r);
        if (n == 1) {
            e._g.doc.body.appendChild(f);
            l.left = o + "px";
            l.top = u + "px";
            l.position = "absolute"
        } else {
            if (n.firstChild) {
                n.insertBefore(f, n.firstChild)
            } else {
                n.appendChild(f)
            }
        }
        a.renderfix = function() {};
        return a
    };
    e.prototype.clear = function() {
        e.eve("clear", this);
        this.canvas.innerHTML = d;
        this.span = e._g.doc.createElement("span");
        this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";
        this.canvas.appendChild(this.span);
        this.bottom = this.top = null
    };
    e.prototype.remove = function() {
        e.eve("remove", this);
        this.canvas.parentNode.removeChild(this.canvas);
        for (var t in this) {
            this[t] = removed(t)
        }
        return true
    }
}(window.Raphael)