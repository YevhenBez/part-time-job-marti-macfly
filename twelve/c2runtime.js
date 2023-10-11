'use strict';
var aa, ba, ca, ea, fa, ga, ha, ia, ja, ka, la, ma, na, oa, pa, qa, ra, sa, va, wa, xa, ya, za, Aa, Ba, Ca, Da, G, Ha, Ia, Ja, La, Ma, I, Na, Oa, Pa, Qa, Ra, Sa, Ta, Ua, Va, Xa, Ya, Za, $a, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, nb, ob, ub, vb, wb, xb, yb, zb, Ab, Bb, Db, Eb, Fb, Gb, Hb, Ib, Kb, Lb, Mb, Nb, Ob, Pb, Qb, Rb, Sb, Tb, Ub, Vb, Wb, Xb, Yb, Zb, $b, ac, bc, dc, ec, fc, gc, hc, ic, jc, kc, lc, mc, nc, oc, pc = {},
    qc = {};
"function" !== typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === typeof "test".__proto__ ? function(k) {
    return k.__proto__
} : function(k) {
    return k.constructor.prototype
});
(function() {
    function k(c, h, f, a) {
        this.set(c, h, f, a)
    }

    function g() {
        this.Lc = this.Kc = this.Nc = this.Mc = this.Xc = this.Wc = this.tc = this.rc = 0
    }

    function e(c, h, f, a) {
        c < h ? f < a ? (t = c < f ? c : f, D = h > a ? h : a) : (t = c < a ? c : a, D = h > f ? h : f) : f < a ? (t = h < f ? h : f, D = c > a ? c : a) : (t = h < a ? h : a, D = c > f ? c : f)
    }

    function d() {
        this.items = this.zd = null;
        this.hl = 0;
        C && (this.zd = new Set);
        this.fk = [];
        this.Ig = !0
    }

    function b(c) {
        B[w++] = c
    }

    function a() {
        this.aa = this.Yj = this.y = this.Cq = 0
    }

    function l(c) {
        this.Lj = [];
        this.yv = this.Av = this.Bv = this.zv = 0;
        this.Sl(c)
    }

    function f(c, h) {
        this.Jq = c;
        this.Iq = h;
        this.cells = {}
    }

    function m(c, h) {
        this.Jq = c;
        this.Iq = h;
        this.cells = {}
    }

    function q(c, h, f) {
        var a;
        return z.length ? (a = z.pop(), a.Mr = c, a.x = h, a.y = f, a) : new ba(c, h, f)
    }

    function c(c, h, f) {
        this.Mr = c;
        this.x = h;
        this.y = f;
        this.pc = new ca
    }

    function h(c, h, f) {
        var a;
        return v.length ? (a = v.pop(), a.Mr = c, a.x = h, a.y = f, a) : new ea(c, h, f)
    }

    function p(c, h, f) {
        this.Mr = c;
        this.x = h;
        this.y = f;
        this.pc = [];
        this.kj = !0;
        this.tf = new ca;
        this.uk = !1
    }

    function n(c, h) {
        return c.We - h.We
    }
    fa = function(c) {
        window.console && window.console.log && window.console.log(c)
    };
    ga = function(c) {
        window.console && window.console.error && window.console.error(c)
    };
    aa = function(c) {
        return c
    };
    ha = function(c) {
        return "undefined" === typeof c
    };
    ia = function(c) {
        return "number" === typeof c
    };
    ja = function(c) {
        return "string" === typeof c
    };
    ka = function(c) {
        return 0 < c && 0 === (c - 1 & c)
    };
    la = function(c) {
        --c;
        for (var h = 1; 32 > h; h <<= 1) c = c | c >> h;
        return c + 1
    };
    ma = function(c) {
        return 0 > c ? -c : c
    };
    na = function(c, h) {
        return c > h ? c : h
    };
    oa = function(c, h) {
        return c < h ? c : h
    };
    pa = Math.PI;
    qa = function(c) {
        return 0 <= c ? c | 0 : (c | 0) - 1
    };
    ra = function(c) {
        var h = c | 0;
        return h === c ? h : h + 1
    };
    sa = function(c, h, f, a, b, n, d, p) {
        var l, m, e, q;
        c < f ? (m = c, l = f) : (m = f, l = c);
        b < d ? (q = b, e = d) : (q = d, e = b);
        if (l < q || m > e) return !1;
        h < a ? (m = h, l = a) : (m = a, l = h);
        n < p ? (q = n, e = p) : (q = p, e = n);
        if (l < q || m > e) return !1;
        l = b - c + d - f;
        m = n - h + p - a;
        c = f - c;
        h = a - h;
        b = d - b;
        n = p - n;
        p = ma(h * b - n * c);
        return ma(b * m - n * l) > p ? !1 : ma(c * m - h * l) <= p
    };
    k.prototype.set = function(c, h, f, a) {
        this.left = c;
        this.top = h;
        this.right = f;
        this.bottom = a
    };
    k.prototype.Ak = function(c) {
        this.left = c.left;
        this.top = c.top;
        this.right = c.right;
        this.bottom = c.bottom
    };
    k.prototype.width = function() {
        return this.right - this.left
    };
    k.prototype.height = function() {
        return this.bottom - this.top
    };
    k.prototype.offset = function(c, h) {
        this.left += c;
        this.top += h;
        this.right += c;
        this.bottom += h;
        return this
    };
    k.prototype.normalize = function() {
        var c = 0;
        this.left > this.right && (c = this.left, this.left = this.right, this.right = c);
        this.top > this.bottom && (c = this.top, this.top = this.bottom, this.bottom = c)
    };
    k.prototype.Pd = function(c, h) {
        return c >= this.left && c <= this.right && h >= this.top && h <= this.bottom
    };
    k.prototype.Ek = function(c) {
        return this.left === c.left && this.top === c.top && this.right === c.right && this.bottom === c.bottom
    };
    va = k;
    g.prototype.Rl = function(c) {
        this.rc = c.left;
        this.tc = c.top;
        this.Wc = c.right;
        this.Xc = c.top;
        this.Mc = c.right;
        this.Nc = c.bottom;
        this.Kc = c.left;
        this.Lc = c.bottom
    };
    g.prototype.Fy = function(c, h) {
        if (0 === h) this.Rl(c);
        else {
            var f = Math.sin(h),
                a = Math.cos(h),
                b = c.left * f,
                n = c.top * f,
                d = c.right * f,
                f = c.bottom * f,
                p = c.left * a,
                l = c.top * a,
                m = c.right * a,
                a = c.bottom * a;
            this.rc = p - n;
            this.tc = l + b;
            this.Wc = m - n;
            this.Xc = l + d;
            this.Mc = m - f;
            this.Nc = a + d;
            this.Kc = p - f;
            this.Lc = a +
                b
        }
    };
    g.prototype.offset = function(c, h) {
        this.rc += c;
        this.tc += h;
        this.Wc += c;
        this.Xc += h;
        this.Mc += c;
        this.Nc += h;
        this.Kc += c;
        this.Lc += h;
        return this
    };
    var t = 0,
        D = 0;
    g.prototype.Dv = function(c) {
        e(this.rc, this.Wc, this.Mc, this.Kc);
        c.left = t;
        c.right = D;
        e(this.tc, this.Xc, this.Nc, this.Lc);
        c.top = t;
        c.bottom = D
    };
    g.prototype.Pd = function(c, h) {
        var f = this.rc,
            a = this.tc,
            b = this.Wc - f,
            n = this.Xc - a,
            d = this.Mc - f,
            p = this.Nc - a,
            l = c - f,
            m = h - a,
            e = b * b + n * n,
            q = b * d + n * p,
            n = b * l + n * m,
            g = d * d + p * p,
            t = d * l + p * m,
            k = 1 / (e * g - q * q),
            b = (g * n - q * t) * k,
            e = (e * t - q * n) * k;
        if (0 <= b && 0 < e && 1 > b + e) return !0;
        b = this.Kc - f;
        n = this.Lc - a;
        e = b * b + n * n;
        q = b * d + n * p;
        n = b * l + n * m;
        k = 1 / (e * g - q * q);
        b = (g * n - q * t) * k;
        e = (e * t - q * n) * k;
        return 0 <= b && 0 < e && 1 > b + e
    };
    wa = g;
    xa = function(c, h, f) {
        return Math.max(Math.min(c, 255), 0) | Math.max(Math.min(h, 255), 0) << 8 | Math.max(Math.min(f, 255), 0) << 16
    };
    ya = function(c) {
        return c & 255
    };
    za = function(c) {
        return (c & 65280) >> 8
    };
    Aa = function(c) {
        return (c & 16711680) >> 16
    };
    Ba = function(c, h) {
        for (var f in h) h.hasOwnProperty(f) && (c[f] = h[f]);
        return c
    };
    Ca = function(c, h) {
        var f, a;
        h = qa(h);
        if (!(0 > h || h >= c.length)) {
            f = h;
            for (a = c.length - 1; f < a; f++) c[f] = c[f + 1];
            Da(c, a)
        }
    };
    Da = function(c, h) {
        c.length = h
    };
    G = function(c) {
        Da(c, 0)
    };
    Ha = function(c, h) {
        G(c);
        var f, a;
        f = 0;
        for (a = h.length; f < a; ++f) c[f] = h[f]
    };
    Ia = function(c, h) {
        c.push.apply(c, h)
    };
    Ja = function(c, h) {
        var f, a;
        f = 0;
        for (a = c.length; f < a; ++f)
            if (c[f] === h) return f;
        return -1
    };
    La = function(c, h) {
        var f = Ja(c, h); - 1 !== f && Ca(c, f)
    };
    Ma = function(c, h, f) {
        return c < h ? h : c > f ? f : c
    };
    I = function(c) {
        return c / (180 / pa)
    };
    Na = function(c) {
        return 180 / pa * c
    };
    Oa = function(c) {
        c %= 360;
        0 > c && (c += 360);
        return c
    };
    Pa = function(c) {
        c %= 2 * pa;
        0 > c && (c += 2 * pa);
        return c
    };
    Qa = function(c) {
        return Oa(Na(c))
    };
    Ra = function(c) {
        return Pa(I(c))
    };
    Sa = function(c, h, f, a) {
        return Math.atan2(a - h, f - c)
    };
    Ta = function(c, h) {
        if (c === h) return 0;
        var f = Math.sin(c),
            a = Math.cos(c),
            b = Math.sin(h),
            n = Math.cos(h),
            f = f * b + a * n;
        return 1 <= f ? 0 : -1 >= f ? pa : Math.acos(f)
    };
    Ua = function(c, h, f) {
        var a = Math.sin(c),
            b = Math.cos(c),
            n = Math.sin(h),
            d = Math.cos(h);
        return Math.acos(a * n + b * d) > f ? 0 < b * n - a * d ? Pa(c + f) : Pa(c - f) : Pa(h)
    };
    Va = function(c, h) {
        var f = Math.sin(c),
            a = Math.cos(c),
            b = Math.sin(h),
            n = Math.cos(h);
        return 0 >= a * b - f * n
    };
    Xa = function(c, h, f, a, b, n) {
        if (0 === f) return n ? c : h;
        var d = Math.sin(f);
        f = Math.cos(f);
        c -= a;
        h -= b;
        var p = c * d;
        c = c * f - h * d;
        h = h * f + p;
        return n ? c + a : h + b
    };
    Ya = function(c, h, f, a) {
        c = f - c;
        h = a - h;
        return Math.sqrt(c * c + h * h)
    };
    Za = function(c, h) {
        return !c !== !h
    };
    $a = function(c) {
        for (var h in c)
            if (c.hasOwnProperty(h)) return !0;
        return !1
    };
    bb = function(c) {
        for (var h in c) c.hasOwnProperty(h) && delete c[h]
    };
    var F = +new Date;
    cb = function() {
        if ("undefined" !== typeof window.performance) {
            var c = window.performance;
            if ("undefined" !== typeof c.now) return c.now();
            if ("undefined" !== typeof c.webkitNow) return c.webkitNow();
            if ("undefined" !== typeof c.mozNow) return c.mozNow();
            if ("undefined" !== typeof c.msNow) return c.msNow()
        }
        return Date.now() - F
    };
    var x = !1,
        u = x = !1,
        y = !1;
    "undefined" !== typeof window && (x = /chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent), x = !x && /safari/i.test(navigator.userAgent), u = /(iphone|ipod|ipad)/i.test(navigator.userAgent), y = window.c2ejecta);
    var C = !x && !y && !u && "undefined" !== typeof Set && "undefined" !== typeof Set.prototype.forEach;
    d.prototype.contains = function(c) {
        return this.Vf() ? !1 : C ? this.zd.has(c) : this.items && this.items.hasOwnProperty(c)
    };
    d.prototype.add = function(c) {
        if (C) this.zd.has(c) || (this.zd.add(c), this.Ig = !1);
        else {
            var h = c.toString(),
                f = this.items;
            f ? f.hasOwnProperty(h) || (f[h] = c, this.hl++, this.Ig = !1) : (this.items = {}, this.items[h] = c, this.hl = 1, this.Ig = !1)
        }
    };
    d.prototype.remove = function(c) {
        if (!this.Vf())
            if (C) this.zd.has(c) && (this.zd["delete"](c), this.Ig = !1);
            else if (this.items) {
            c = c.toString();
            var h = this.items;
            h.hasOwnProperty(c) && (delete h[c], this.hl--, this.Ig = !1)
        }
    };
    d.prototype.clear = function() {
        this.Vf() || (C ? this.zd.clear() : (this.items = null, this.hl = 0), G(this.fk), this.Ig = !0)
    };
    d.prototype.Vf = function() {
        return 0 === this.count()
    };
    d.prototype.count = function() {
        return C ? this.zd.size : this.hl
    };
    var B = null,
        w = 0;
    d.prototype.EG = function() {
        if (!this.Ig) {
            if (C) G(this.fk), B = this.fk, w = 0, this.zd.forEach(b), B = null, w = 0;
            else {
                var c = this.fk;
                G(c);
                var h, f = 0,
                    a = this.items;
                if (a)
                    for (h in a) a.hasOwnProperty(h) && (c[f++] = a[h])
            }
            this.Ig = !0
        }
    };
    d.prototype.qh = function() {
        this.EG();
        return this.fk
    };
    ca = d;
    new ca;
    db = function(c, h) {
        C ? eb(c, h.zd) : fb(c, h.qh())
    };
    eb = function(c, h) {
        var f, a, b, n;
        a = f = 0;
        for (b = c.length; f < b; ++f) n = c[f], h.has(n) || (c[a++] = n);
        Da(c, a)
    };
    fb = function(c, h) {
        var f, a, b, n;
        a = f = 0;
        for (b = c.length; f < b; ++f) n = c[f], -1 === Ja(h, n) && (c[a++] = n);
        Da(c, a)
    };
    a.prototype.add = function(c) {
        this.y = c - this.Cq;
        this.Yj = this.aa + this.y;
        this.Cq = this.Yj - this.aa - this.y;
        this.aa = this.Yj
    };
    a.prototype.reset = function() {
        this.aa = this.Yj = this.y = this.Cq = 0
    };
    gb = a;
    hb = function(c) {
        return c.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    };
    l.prototype.Sl = function(c) {
        this.dy = c;
        this.To = c.length / 2;
        this.Lj.length = c.length;
        this.Dq = this.Eq = -1;
        this.Hv = 0
    };
    l.prototype.WE = function() {
        return !this.dy.length
    };
    l.prototype.ib = function() {
        for (var c = this.Lj, h = c[0], f = h, a = c[1], b = a, n, d, p = 1, l = this.To; p < l; ++p) d = 2 * p, n = c[d], d = c[d + 1], n < h && (h = n), n > f && (f = n), d < a && (a = d), d > b && (b = d);
        this.zv = h;
        this.Av = f;
        this.Bv = a;
        this.yv = b
    };
    l.prototype.Rl = function(c, h, f) {
        this.Lj.length = 8;
        this.To = 4;
        var a = this.Lj;
        a[0] = c.left - h;
        a[1] = c.top - f;
        a[2] = c.right - h;
        a[3] = c.top - f;
        a[4] = c.right -
            h;
        a[5] = c.bottom - f;
        a[6] = c.left - h;
        a[7] = c.bottom - f;
        this.Eq = c.right - c.left;
        this.Dq = c.bottom - c.top;
        this.ib()
    };
    l.prototype.uC = function(c, h, f) {
        if (this.Eq !== c || this.Dq !== h || this.Hv !== f) {
            this.Eq = c;
            this.Dq = h;
            this.Hv = f;
            var a, b, n, d, p, l = 0,
                m = 1,
                e = this.dy,
                q = this.Lj;
            0 !== f && (l = Math.sin(f), m = Math.cos(f));
            f = 0;
            for (n = this.To; f < n; f++) a = 2 * f, b = a + 1, d = e[a] * c, p = e[b] * h, q[a] = d * m - p * l, q[b] = p * m + d * l;
            this.ib()
        }
    };
    l.prototype.Pd = function(c, h) {
        var f = this.Lj;
        if (c === f[0] && h === f[1]) return !0;
        var a, b, n, d = this.To,
            p = this.zv - 110,
            l = this.Bv - 101,
            m = this.Av + 131,
            e = this.yv + 120,
            q, g, t = 0,
            k = 0;
        for (a = 0; a < d; a++) b = 2 * a, n = (a + 1) % d * 2, q = f[b], b = f[b + 1], g = f[n], n = f[n + 1], sa(p, l, c, h, q, b, g, n) && t++, sa(m, e, c, h, q, b, g, n) && k++;
        return 1 === t % 2 || 1 === k % 2
    };
    ib = l;
    f.prototype.Tg = function(c, h, f) {
        var a;
        a = this.cells[c];
        return a ? (a = a[h]) ? a : f ? (a = q(this, c, h), this.cells[c][h] = a) : null : f ? (a = q(this, c, h), this.cells[c] = {}, this.cells[c][h] = a) : null
    };
    f.prototype.hd = function(c) {
        return qa(c / this.Jq)
    };
    f.prototype.jd = function(c) {
        return qa(c / this.Iq)
    };
    f.prototype.update = function(c, h, f) {
        var a, b, n, d, p;
        if (h)
            for (a = h.left, b = h.right; a <= b; ++a)
                for (n = h.top, d = h.bottom; n <= d; ++n)
                    if (!f || !f.Pd(a, n))
                        if (p = this.Tg(a, n, !1)) p.remove(c), p.Vf() && (p.pc.clear(), 1E3 > z.length && z.push(p), this.cells[a][n] = null);
        if (f)
            for (a = f.left, b = f.right; a <= b; ++a)
                for (n = f.top, d = f.bottom; n <= d; ++n) h && h.Pd(a, n) || this.Tg(a, n, !0).Xr(c)
    };
    f.prototype.fy = function(c, h) {
        var f, a, b, n, d, p;
        f = this.hd(c.left);
        b = this.jd(c.top);
        a = this.hd(c.right);
        for (d = this.jd(c.bottom); f <= a; ++f)
            for (n = b; n <= d; ++n)(p = this.Tg(f, n, !1)) && p.dump(h)
    };
    jb = f;
    m.prototype.Tg = function(c, f, a) {
        var b;
        b = this.cells[c];
        return b ? (b = b[f]) ? b : a ? (b = h(this, c, f), this.cells[c][f] = b) : null : a ? (b = h(this, c, f), this.cells[c] = {}, this.cells[c][f] = b) : null
    };
    m.prototype.hd = function(c) {
        return qa(c / this.Jq)
    };
    m.prototype.jd = function(c) {
        return qa(c / this.Iq)
    };
    m.prototype.update = function(c, h, f) {
        var a, b, n, d, p;
        if (h)
            for (a = h.left, b = h.right; a <= b; ++a)
                for (n = h.top, d = h.bottom; n <= d; ++n)
                    if (!f || !f.Pd(a, n))
                        if (p = this.Tg(a, n, !1)) p.remove(c), p.Vf() && (p.reset(), 1E3 > v.length && v.push(p), this.cells[a][n] = null);
        if (f)
            for (a = f.left, b = f.right; a <= b; ++a)
                for (n = f.top, d = f.bottom; n <= d; ++n) h && h.Pd(a, n) || this.Tg(a, n, !0).Xr(c)
    };
    m.prototype.fy = function(c, h, f, a, b) {
        var n, d;
        c = this.hd(c);
        h = this.jd(h);
        f = this.hd(f);
        for (n = this.jd(a); c <= f; ++c)
            for (a = h; a <= n; ++a)(d = this.Tg(c, a, !1)) && d.dump(b)
    };
    m.prototype.eF = function(c) {
        var h, f, a, b, n;
        h = c.left;
        a = c.top;
        f = c.right;
        for (b = c.bottom; h <= f; ++h)
            for (c = a; c <= b; ++c)
                if (n = this.Tg(h, c, !1)) n.kj = !1
    };
    kb = m;
    var z = [];
    c.prototype.Vf = function() {
        return this.pc.Vf()
    };
    c.prototype.Xr = function(c) {
        this.pc.add(c)
    };
    c.prototype.remove = function(c) {
        this.pc.remove(c)
    };
    c.prototype.dump = function(c) {
        Ia(c, this.pc.qh())
    };
    ba = c;
    var v = [];
    p.prototype.Vf = function() {
        if (!this.pc.length) return !0;
        if (this.pc.length > this.tf.count()) return !1;
        this.qr();
        return !0
    };
    p.prototype.Xr = function(c) {
        this.tf.contains(c) ? (this.tf.remove(c), this.tf.Vf() && (this.uk = !1)) : this.pc.length ? (this.pc[this.pc.length - 1].lf() > c.lf() && (this.kj = !1), this.pc.push(c)) : (this.pc.push(c), this.kj = !0)
    };
    p.prototype.remove = function(c) {
        this.tf.add(c);
        this.uk = !0;
        30 <= this.tf.count() && this.qr()
    };
    p.prototype.qr = function() {
        this.uk && (this.tf.count() === this.pc.length ? this.reset() : (db(this.pc, this.tf), this.tf.clear(), this.uk = !1))
    };
    p.prototype.pD = function() {
        this.kj || (this.pc.sort(n), this.kj = !0)
    };
    p.prototype.reset = function() {
        G(this.pc);
        this.kj = !0;
        this.tf.clear();
        this.uk = !1
    };
    p.prototype.dump = function(c) {
        this.qr();
        this.pD();
        this.pc.length && c.push(this.pc)
    };
    ea = p;
    var r = "lighter xor copy destination-over source-in destination-in source-out destination-out source-atop destination-atop".split(" ");
    lb = function(c) {
        return 0 >= c || 11 <= c ? "source-over" : r[c - 1]
    };
    mb = function(c, h, f) {
        if (f) switch (c.Uc = f.ONE, c.Pc = f.ONE_MINUS_SRC_ALPHA, h) {
            case 1:
                c.Uc = f.ONE;
                c.Pc = f.ONE;
                break;
            case 3:
                c.Uc = f.ONE;
                c.Pc = f.ZERO;
                break;
            case 4:
                c.Uc = f.ONE_MINUS_DST_ALPHA;
                c.Pc = f.ONE;
                break;
            case 5:
                c.Uc = f.DST_ALPHA;
                c.Pc = f.ZERO;
                break;
            case 6:
                c.Uc = f.ZERO;
                c.Pc = f.SRC_ALPHA;
                break;
            case 7:
                c.Uc = f.ONE_MINUS_DST_ALPHA;
                c.Pc = f.ZERO;
                break;
            case 8:
                c.Uc = f.ZERO;
                c.Pc = f.ONE_MINUS_SRC_ALPHA;
                break;
            case 9:
                c.Uc = f.DST_ALPHA;
                c.Pc = f.ONE_MINUS_SRC_ALPHA;
                break;
            case 10:
                c.Uc = f.ONE_MINUS_DST_ALPHA, c.Pc = f.SRC_ALPHA
        }
    };
    nb = function(c) {
        return Math.round(1E6 * c) / 1E6
    };
    ob = function(c, h) {
        return "string" !== typeof c || "string" !== typeof h || c.length !== h.length ? !1 : c === h ? !0 : c.toLowerCase() === h.toLowerCase()
    };
    ub = function(c) {
        c = c.target;
        return !c || c === document || c === window || document && document.body && c === document.body || ob(c.tagName, "canvas") ? !0 : !1
    }
})();
var rc = "undefined" !== typeof Float32Array ? Float32Array : Array;

function sc(k) {
    var g = new rc(3);
    k && (g[0] = k[0], g[1] = k[1], g[2] = k[2]);
    return g
}

function tc(k) {
    var g = new rc(16);
    k && (g[0] = k[0], g[1] = k[1], g[2] = k[2], g[3] = k[3], g[4] = k[4], g[5] = k[5], g[6] = k[6], g[7] = k[7], g[8] = k[8], g[9] = k[9], g[10] = k[10], g[11] = k[11], g[12] = k[12], g[13] = k[13], g[14] = k[14], g[15] = k[15]);
    return g
}

function uc(k, g) {
    g[0] = k[0];
    g[1] = k[1];
    g[2] = k[2];
    g[3] = k[3];
    g[4] = k[4];
    g[5] = k[5];
    g[6] = k[6];
    g[7] = k[7];
    g[8] = k[8];
    g[9] = k[9];
    g[10] = k[10];
    g[11] = k[11];
    g[12] = k[12];
    g[13] = k[13];
    g[14] = k[14];
    g[15] = k[15]
}

function vc(k, g) {
    var e = g[0],
        d = g[1];
    g = g[2];
    k[0] *= e;
    k[1] *= e;
    k[2] *= e;
    k[3] *= e;
    k[4] *= d;
    k[5] *= d;
    k[6] *= d;
    k[7] *= d;
    k[8] *= g;
    k[9] *= g;
    k[10] *= g;
    k[11] *= g
}

function wc(k, g, e, d) {
    d || (d = tc());
    var b, a, l, f, m, q, c, h, p = k[0],
        n = k[1];
    k = k[2];
    a = e[0];
    l = e[1];
    b = e[2];
    e = g[1];
    q = g[2];
    p === g[0] && n === e && k === q ? (k = d, k[0] = 1, k[1] = 0, k[2] = 0, k[3] = 0, k[4] = 0, k[5] = 1, k[6] = 0, k[7] = 0, k[8] = 0, k[9] = 0, k[10] = 1, k[11] = 0, k[12] = 0, k[13] = 0, k[14] = 0, k[15] = 1) : (e = p - g[0], q = n - g[1], c = k - g[2], h = 1 / Math.sqrt(e * e + q * q + c * c), e *= h, q *= h, c *= h, g = l * c - b * q, b = b * e - a * c, a = a * q - l * e, (h = Math.sqrt(g * g + b * b + a * a)) ? (h = 1 / h, g *= h, b *= h, a *= h) : a = b = g = 0, l = q * a - c * b, f = c * g - e * a, m = e * b - q * g, (h = Math.sqrt(l * l + f * f + m * m)) ? (h = 1 / h, l *= h, f *= h, m *= h) : m = f = l = 0, d[0] = g, d[1] = l, d[2] = e, d[3] = 0, d[4] = b, d[5] = f, d[6] = q, d[7] = 0, d[8] = a, d[9] = m, d[10] = c, d[11] = 0, d[12] = -(g * p + b * n + a * k), d[13] = -(l * p + f * n + m * k), d[14] = -(e * p + q * n + c * k), d[15] = 1)
}
(function() {
    function k(f, a, b) {
        this.Wf = /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent);
        this.height = this.width = 0;
        this.ob = !!b;
        this.Xn = this.Yk = !1;
        this.Tq = 0;
        this.Pp = 1;
        this.Ut = 1E3;
        this.OG = (this.Ut - this.Pp) / 32768;
        this.Gq = sc([0, 0, 100]);
        this.Yw = sc([0, 0, 0]);
        this.$y = sc([0, 1, 0]);
        this.mm = sc([1, 1, 1]);
        this.Tv = !0;
        this.uo = tc();
        this.Yd = tc();
        this.ns = tc();
        this.Sq = tc();
        this.X = f;
        this.version = 0 === this.X.getParameter(this.X.VERSION).indexOf("WebGL 2") ? 2 : 1;
        this.Cw()
    }

    function g(f, a, b) {
        this.X = f;
        this.Tl =
            a;
        this.name = b;
        this.re = f.getAttribLocation(a, "aPos");
        this.dh = f.getAttribLocation(a, "aTex");
        this.Ww = f.getUniformLocation(a, "matP");
        this.po = f.getUniformLocation(a, "matMV");
        this.vj = f.getUniformLocation(a, "opacity");
        this.vs = f.getUniformLocation(a, "colorFill");
        this.Xw = f.getUniformLocation(a, "samplerFront");
        this.pl = f.getUniformLocation(a, "samplerBack");
        this.ji = f.getUniformLocation(a, "destStart");
        this.ii = f.getUniformLocation(a, "destEnd");
        this.rl = f.getUniformLocation(a, "seconds");
        this.xs = f.getUniformLocation(a, "pixelWidth");
        this.ws = f.getUniformLocation(a, "pixelHeight");
        this.ol = f.getUniformLocation(a, "layerScale");
        this.nl = f.getUniformLocation(a, "layerAngle");
        this.sl = f.getUniformLocation(a, "viewOrigin");
        this.ql = f.getUniformLocation(a, "scrollPos");
        this.DE = !!(this.xs || this.ws || this.rl || this.pl || this.ji || this.ii || this.ol || this.nl || this.sl || this.ql);
        this.hx = this.ix = -999;
        this.so = 1;
        this.bx = this.ax = 0;
        this.dx = this.$w = this.Zw = 1;
        this.lx = this.kx = this.jx = this.qx = this.nx = this.cx = 0;
        this.ms = [];
        this.gx = tc();
        this.vj && f.uniform1f(this.vj, 1);
        this.vs && f.uniform4f(this.vs, 1, 1, 1, 1);
        this.Xw && f.uniform1i(this.Xw, 0);
        this.pl && f.uniform1i(this.pl, 1);
        this.ji && f.uniform2f(this.ji, 0, 0);
        this.ii && f.uniform2f(this.ii, 1, 1);
        this.ol && f.uniform1f(this.ol, 1);
        this.nl && f.uniform1f(this.nl, 0);
        this.sl && f.uniform2f(this.sl, 0, 0);
        this.ql && f.uniform2f(this.ql, 0, 0);
        this.rl && f.uniform1f(this.rl, 0);
        this.Xh = !1
    }

    function e(f, a) {
        return f[0] === a[0] && f[1] === a[1] && f[2] === a[2] && f[3] === a[3] && f[4] === a[4] && f[5] === a[5] && f[6] === a[6] && f[7] === a[7] && f[8] === a[8] && f[9] === a[9] && f[10] === a[10] && f[11] === a[11] && f[12] === a[12] && f[13] === a[13] && f[14] === a[14] && f[15] === a[15]
    }

    function d(f, a) {
        this.type = f;
        this.S = a;
        this.X = a.X;
        this.ne = this.Vc = this.Ox = 0;
        this.Da = this.ye = null;
        this.Iy = []
    }
    var b = tc();
    k.prototype.Cw = function() {
        var f = this.X,
            a;
        this.Rw = 1;
        this.di = this.$g = null;
        this.ln = 1;
        f.clearColor(0, 0, 0, 0);
        f.clear(f.COLOR_BUFFER_BIT);
        f.enable(f.BLEND);
        f.blendFunc(f.ONE, f.ONE_MINUS_SRC_ALPHA);
        f.disable(f.CULL_FACE);
        f.disable(f.STENCIL_TEST);
        f.disable(f.DITHER);
        this.ob ? (f.enable(f.DEPTH_TEST), f.depthFunc(f.LEQUAL)) : f.disable(f.DEPTH_TEST);
        this.Sw = f.ONE;
        this.Qw = f.ONE_MINUS_SRC_ALPHA;
        this.Hp = new Float32Array(8E3 * (this.ob ? 3 : 2));
        this.sp = new Float32Array(16E3);
        this.Xs = new Float32Array(32E3);
        this.Ws = f.createBuffer();
        f.bindBuffer(f.ARRAY_BUFFER, this.Ws);
        f.bufferData(f.ARRAY_BUFFER, this.Xs.byteLength, f.DYNAMIC_DRAW);
        this.km = Array(4);
        this.$l = Array(4);
        for (a = 0; 4 > a; a++) this.km[a] = f.createBuffer(), f.bindBuffer(f.ARRAY_BUFFER, this.km[a]), f.bufferData(f.ARRAY_BUFFER, this.Hp.byteLength, f.DYNAMIC_DRAW), this.$l[a] = f.createBuffer(), f.bindBuffer(f.ARRAY_BUFFER, this.$l[a]), f.bufferData(f.ARRAY_BUFFER, this.sp.byteLength, f.DYNAMIC_DRAW);
        this.Jf = 0;
        this.HE = f.createBuffer();
        f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, this.HE);
        for (var b = new Uint16Array(12E3), c = a = 0; 12E3 > a;) b[a++] = c, b[a++] = c + 1, b[a++] = c + 2, b[a++] = c, b[a++] = c + 2, b[a++] = c + 3, c += 4;
        f.bufferData(f.ELEMENT_ARRAY_BUFFER, b, f.STATIC_DRAW);
        this.Kj = this.Zj = this.tg = 0;
        this.Fb = [];
        a = this.ob ? "attribute highp vec3 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, aPos.z, 1.0);\n\tvTex = aTex;\n}" : "attribute highp vec2 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tvTex = aTex;\n}";
        b = this.Bk({
            src: "varying mediump vec2 vTex;\nuniform lowp float opacity;\nuniform lowp sampler2D samplerFront;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, vTex);\n\tgl_FragColor *= opacity;\n}"
        }, a, "<default>");
        this.Fb.push(b);
        b = this.Bk({
            src: "uniform mediump sampler2D samplerFront;\nvarying lowp float opacity;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, gl_PointCoord);\n\tgl_FragColor *= opacity;\n}"
        }, "attribute vec4 aPos;\nvarying float opacity;\nuniform mat4 matP;\nuniform mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tgl_PointSize = aPos.z;\n\topacity = aPos.w;\n}", "<point>");
        this.Fb.push(b);
        b = this.Bk({
            src: "varying mediump vec2 vTex;\nuniform lowp sampler2D samplerFront;\nvoid main(void) {\n\tif (texture2D(samplerFront, vTex).a < 1.0)\n\t\tdiscard;\n}"
        }, a, "<earlyz>");
        this.Fb.push(b);
        b = this.Bk({
            src: "uniform lowp vec4 colorFill;\nvoid main(void) {\n\tgl_FragColor = colorFill;\n}"
        }, a, "<fill>");
        this.Fb.push(b);
        for (var h in xc) xc.hasOwnProperty(h) && this.Fb.push(this.Bk(xc[h], a, h));
        f.activeTexture(f.TEXTURE0);
        f.bindTexture(f.TEXTURE_2D, null);
        this.Ff = [];
        this.cf = 0;
        this.Rc = this.yc = !1;
        this.Pv = this.il = -1;
        this.Ti = null;
        this.nr = f.createFramebuffer();
        this.qn = this.Wo = null;
        this.xv = !1;
        this.ob && (this.qn = f.createRenderbuffer());
        this.nh = sc([0, 0, 0]);
        f = f.getParameter(f.ALIASED_POINT_SIZE_RANGE);
        this.hF = f[0];
        this.Bs = f[1];
        2048 < this.Bs && (this.Bs = 2048);
        this.Bd(0)
    };
    g.prototype.It = function(f) {
        e(this.gx, f) || (uc(f, this.gx), this.X.uniformMatrix4fv(this.po, !1, f))
    };
    k.prototype.Bk = function(f, a, b) {
        var c = this.X,
            h = c.createShader(c.FRAGMENT_SHADER);
        c.shaderSource(h, f.src);
        c.compileShader(h);
        if (!c.getShaderParameter(h, c.COMPILE_STATUS)) return c.deleteShader(h), null;
        var d = c.createShader(c.VERTEX_SHADER);
        c.shaderSource(d, a);
        c.compileShader(d);
        if (!c.getShaderParameter(d, c.COMPILE_STATUS)) return c.deleteShader(h), c.deleteShader(d), null;
        a = c.createProgram();
        c.attachShader(a, h);
        c.attachShader(a, d);
        c.linkProgram(a);
        if (!c.getProgramParameter(a, c.LINK_STATUS)) return c.deleteShader(h), c.deleteShader(d), c.deleteProgram(a), null;
        c.useProgram(a);
        c.deleteShader(h);
        c.deleteShader(d);
        b = new g(c, a, b);
        b.lr = f.lr || 0;
        b.mr = f.mr || 0;
        b.Ov = !!f.Ov;
        b.Re = !!f.Re;
        b.tv = !!f.tv;
        b.wa = f.wa || [];
        f = 0;
        for (h = b.wa.length; f < h; f++) b.wa[f][1] = c.getUniformLocation(a, b.wa[f][0]), b.ms.push(0), c.uniform1f(b.wa[f][1], 0);
        return b
    };
    k.prototype.Kr = function(f) {
        var a, b;
        a = 0;
        for (b = this.Fb.length; a < b; a++)
            if (this.Fb[a].name === f) return a;
        return -1
    };
    k.prototype.cy = function(f, a, b) {
        var c = this.Yd,
            h = this.uo,
            d = [0, 0, 0, 0, 0, 0, 0, 0];
        d[0] = c[0] * f + c[4] * a + c[12];
        d[1] = c[1] * f + c[5] * a + c[13];
        d[2] = c[2] * f + c[6] * a + c[14];
        d[3] = c[3] * f + c[7] * a + c[15];
        d[4] = h[0] * d[0] + h[4] * d[1] + h[8] * d[2] + h[12] * d[3];
        d[5] = h[1] * d[0] + h[5] * d[1] + h[9] * d[2] + h[13] * d[3];
        d[6] = h[2] * d[0] + h[6] * d[1] + h[10] * d[2] + h[14] * d[3];
        d[7] = -d[2];
        0 !== d[7] && (d[7] = 1 / d[7], d[4] *= d[7], d[5] *= d[7], d[6] *= d[7], b[0] = (.5 * d[4] + .5) * this.width, b[1] = (.5 * d[5] + .5) * this.height)
    };
    k.prototype.si = function(f, a, b) {
        if (this.width !== f || this.height !== a || b) {
            this.Of();
            b = this.X;
            this.width = f;
            this.height = a;
            b.viewport(0, 0, f, a);
            wc(this.Gq, this.Yw, this.$y, this.Yd);
            if (this.ob) {
                var c = -f / 2;
                f = f / 2;
                var h = a / 2;
                a = -a / 2;
                var d = this.Pp,
                    n = this.Ut,
                    l = this.uo;
                l || (l = tc());
                var e = f - c,
                    g = a - h,
                    k = n - d;
                l[0] = 2 / e;
                l[1] = 0;
                l[2] = 0;
                l[3] = 0;
                l[4] = 0;
                l[5] = 2 / g;
                l[6] = 0;
                l[7] = 0;
                l[8] = 0;
                l[9] = 0;
                l[10] = -2 / k;
                l[11] = 0;
                l[12] = -(c + f) / e;
                l[13] = -(a + h) / g;
                l[14] = -(n + d) / k;
                l[15] = 1;
                this.mm[0] = 1;
                this.mm[1] = 1
            } else a = f / a, c = this.Pp, f = this.Ut, l = this.uo, n = c * Math.tan(45 * Math.PI / 360), a *= n, h = -a, d = -n, l || (l = tc()), e = a - h, g = n - d, k = f - c, l[0] = 2 * c /
                e, l[1] = 0, l[2] = 0, l[3] = 0, l[4] = 0, l[5] = 2 * c / g, l[6] = 0, l[7] = 0, l[8] = (a + h) / e, l[9] = (n + d) / g, l[10] = -(f + c) / k, l[11] = -1, l[12] = 0, l[13] = 0, l[14] = -(f * c * 2) / k, l[15] = 0, c = [0, 0], f = [0, 0], this.cy(0, 0, c), this.cy(1, 1, f), this.mm[0] = 1 / (f[0] - c[0]), this.mm[1] = -1 / (f[1] - c[1]);
            c = 0;
            for (f = this.Fb.length; c < f; c++) h = this.Fb[c], h.Xh = !1, h.Ww && (b.useProgram(h.Tl), b.uniformMatrix4fv(h.Ww, !1, this.uo));
            b.useProgram(this.Fb[this.il].Tl);
            b.bindTexture(b.TEXTURE_2D, null);
            b.activeTexture(b.TEXTURE1);
            b.bindTexture(b.TEXTURE_2D, null);
            b.activeTexture(b.TEXTURE0);
            this.di = this.$g = null;
            this.qn && (b.bindFramebuffer(b.FRAMEBUFFER, this.nr), b.bindRenderbuffer(b.RENDERBUFFER, this.qn), b.renderbufferStorage(b.RENDERBUFFER, b.DEPTH_COMPONENT16, this.width, this.height), this.xv || (b.framebufferRenderbuffer(b.FRAMEBUFFER, b.DEPTH_ATTACHMENT, b.RENDERBUFFER, this.qn), this.xv = !0), b.bindRenderbuffer(b.RENDERBUFFER, null), b.bindFramebuffer(b.FRAMEBUFFER, null), this.Wo = null)
        }
    };
    k.prototype.ue = function() {
        wc(this.Gq, this.Yw, this.$y, this.Yd);
        vc(this.Yd, this.mm)
    };
    k.prototype.translate = function(f, a) {
        if (0 !== f || 0 !== a) {
            this.nh[0] = f;
            this.nh[1] = a;
            this.nh[2] = 0;
            var b = this.Yd,
                c = this.nh,
                h = c[0],
                d = c[1],
                c = c[2];
            b[12] = b[0] * h + b[4] * d + b[8] * c + b[12];
            b[13] = b[1] * h + b[5] * d + b[9] * c + b[13];
            b[14] = b[2] * h + b[6] * d + b[10] * c + b[14];
            b[15] = b[3] * h + b[7] * d + b[11] * c + b[15]
        }
    };
    k.prototype.scale = function(f, a) {
        if (1 !== f || 1 !== a) this.nh[0] = f, this.nh[1] = a, this.nh[2] = 1, vc(this.Yd, this.nh)
    };
    k.prototype.$o = function(f) {
        if (0 !== f) {
            var a = this.Yd,
                b, c = Math.sin(f);
            f = Math.cos(f);
            var h = a[0],
                d = a[1],
                n = a[2],
                l = a[3],
                e = a[4],
                g = a[5],
                k = a[6],
                u = a[7];
            b ? a !== b && (b[8] = a[8], b[9] = a[9], b[10] = a[10], b[11] = a[11], b[12] = a[12], b[13] = a[13], b[14] = a[14], b[15] = a[15]) : b = a;
            b[0] = h * f + e * c;
            b[1] = d * f + g * c;
            b[2] = n * f + k * c;
            b[3] = l * f + u * c;
            b[4] = h * -c + e * f;
            b[5] = d * -c + g * f;
            b[6] = n * -c + k * f;
            b[7] = l * -c + u * f
        }
    };
    k.prototype.ge = function() {
        if (!e(this.ns, this.Yd)) {
            var a = this.wd();
            a.type = 5;
            a.Da ? uc(this.Yd, a.Da) : a.Da = tc(this.Yd);
            uc(this.Yd, this.ns);
            this.Rc = this.yc = !1
        }
    };
    k.prototype.ep = function(a) {
        this.ob && (32760 < a && (a = 32760), this.Tq = this.Gq[2] - this.Pp - a * this.OG)
    };
    d.prototype.XC = function() {
        var a = this.X,
            b = this.S;
        0 !== this.Vc ? (a.depthMask(!0), a.colorMask(!1, !1, !1, !1), a.disable(a.BLEND), a.bindFramebuffer(a.FRAMEBUFFER, b.nr), a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, null, 0), a.clear(a.DEPTH_BUFFER_BIT), a.bindFramebuffer(a.FRAMEBUFFER, null), b.Xn = !0) : (a.depthMask(!1), a.colorMask(!0, !0, !0, !0), a.enable(a.BLEND), b.Xn = !1)
    };
    d.prototype.aD = function() {
        this.X.bindTexture(this.X.TEXTURE_2D, this.ye)
    };
    d.prototype.bD = function() {
        var a = this.X;
        a.activeTexture(a.TEXTURE1);
        a.bindTexture(a.TEXTURE_2D, this.ye);
        a.activeTexture(a.TEXTURE0)
    };
    d.prototype.YC = function() {
        var a = this.Ox,
            b = this.S;
        b.ln = a;
        b = b.Ti;
        b.vj && b.so !== a && (b.so = a, this.X.uniform1f(b.vj, a))
    };
    d.prototype.SC = function() {
        this.X.drawElements(this.X.TRIANGLES, this.ne, this.X.UNSIGNED_SHORT, this.Vc)
    };
    d.prototype.UC = function() {
        this.X.blendFunc(this.Vc, this.ne)
    };
    d.prototype.dD = function() {
        var a, b, d, c = this.S.Fb,
            h = this.S.Pv;
        a = 0;
        for (b = c.length; a < b; a++) d = c[a], a === h && d.po ? (d.It(this.Da), d.Xh = !0) : d.Xh = !1;
        uc(this.Da, this.S.Sq)
    };
    d.prototype.TC = function() {
        var a = this.X,
            b = this.S;
        this.ye ? (b.di === this.ye && (a.activeTexture(a.TEXTURE1), a.bindTexture(a.TEXTURE_2D, null), b.di = null, a.activeTexture(a.TEXTURE0)), a.bindFramebuffer(a.FRAMEBUFFER, b.nr), b.Xn || a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, this.ye, 0)) : (b.ob || a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, null, 0), a.bindFramebuffer(a.FRAMEBUFFER, null))
    };
    d.prototype.OC = function() {
        var a = this.X,
            b = this.Vc;
        0 === b ? (a.clearColor(this.Da[0], this.Da[1], this.Da[2], this.Da[3]), a.clear(a.COLOR_BUFFER_BIT)) : 1 === b ? (a.enable(a.SCISSOR_TEST), a.scissor(this.Da[0], this.Da[1], this.Da[2], this.Da[3]), a.clearColor(0, 0, 0, 0), a.clear(a.COLOR_BUFFER_BIT), a.disable(a.SCISSOR_TEST)) : a.clear(a.DEPTH_BUFFER_BIT)
    };
    d.prototype.WC = function() {
        var a = this.X;
        0 !== this.Vc ? a.enable(a.DEPTH_TEST) : a.disable(a.DEPTH_TEST)
    };
    d.prototype.RC = function() {
        var a = this.X,
            b = this.S;
        b.ob && a.disable(a.DEPTH_TEST);
        var d = b.Fb[1];
        a.useProgram(d.Tl);
        !d.Xh && d.po && (d.It(b.Sq), d.Xh = !0);
        a.enableVertexAttribArray(d.re);
        a.bindBuffer(a.ARRAY_BUFFER, b.Ws);
        a.vertexAttribPointer(d.re, 4, a.FLOAT, !1, 0, 0);
        a.drawArrays(a.POINTS, this.Vc / 4, this.ne);
        d = b.Ti;
        a.useProgram(d.Tl);
        0 <= d.re && (a.enableVertexAttribArray(d.re), a.bindBuffer(a.ARRAY_BUFFER, b.km[b.Jf]), a.vertexAttribPointer(d.re, b.ob ? 3 : 2, a.FLOAT, !1, 0, 0));
        0 <= d.dh && (a.enableVertexAttribArray(d.dh), a.bindBuffer(a.ARRAY_BUFFER, b.$l[b.Jf]), a.vertexAttribPointer(d.dh, 2, a.FLOAT, !1, 0, 0));
        b.ob && a.enable(a.DEPTH_TEST)
    };
    d.prototype.ZC = function() {
        var a = this.X,
            b = this.S,
            d = b.Fb[this.Vc];
        b.Pv = this.Vc;
        b.Ti = d;
        a.useProgram(d.Tl);
        !d.Xh && d.po && (d.It(b.Sq), d.Xh = !0);
        d.vj && d.so !== b.ln && (d.so = b.ln, a.uniform1f(d.vj, b.ln));
        0 <= d.re && (a.enableVertexAttribArray(d.re), a.bindBuffer(a.ARRAY_BUFFER, b.km[b.Jf]), a.vertexAttribPointer(d.re, b.ob ? 3 : 2, a.FLOAT, !1, 0, 0));
        0 <= d.dh && (a.enableVertexAttribArray(d.dh), a.bindBuffer(a.ARRAY_BUFFER, b.$l[b.Jf]), a.vertexAttribPointer(d.dh, 2, a.FLOAT, !1, 0, 0))
    };
    d.prototype.VC = function() {
        var a = this.Da;
        this.X.uniform4f(this.S.Ti.vs, a[0], a[1], a[2], a[3])
    };
    d.prototype.$C = function() {
        var a, b, d = this.S.Ti,
            c = this.X;
        a = this.Da;
        d.pl && this.S.di !== this.ye && (c.activeTexture(c.TEXTURE1), c.bindTexture(c.TEXTURE_2D, this.ye), this.S.di = this.ye, c.activeTexture(c.TEXTURE0));
        var h = a[0];
        d.xs && h !== d.ix && (d.ix = h, c.uniform1f(d.xs, h));
        h = a[1];
        d.ws && h !== d.hx && (d.hx = h, c.uniform1f(d.ws, h));
        h = a[2];
        b = a[3];
        !d.ji || h === d.ax && b === d.bx || (d.ax = h, d.bx = b, c.uniform2f(d.ji, h, b));
        h = a[4];
        b = a[5];
        !d.ii || h === d.Zw && b === d.$w || (d.Zw = h, d.$w = b, c.uniform2f(d.ii, h, b));
        h = a[6];
        d.ol && h !== d.dx && (d.dx = h, c.uniform1f(d.ol, h));
        h = a[7];
        d.nl && h !== d.cx && (d.cx = h, c.uniform1f(d.nl, h));
        h = a[8];
        b = a[9];
        !d.sl || h === d.nx && b === d.qx || (d.nx = h, d.qx = b, c.uniform2f(d.sl, h, b));
        h = a[10];
        b = a[11];
        !d.ql || h === d.jx && b === d.kx || (d.jx = h, d.kx = b, c.uniform2f(d.ql, h, b));
        h = a[12];
        d.rl && h !== d.lx && (d.lx = h, c.uniform1f(d.rl, h));
        if (d.wa.length)
            for (a = 0, b = d.wa.length; a < b; a++) h = this.Iy[a], h !== d.ms[a] && (d.ms[a] = h, c.uniform1f(d.wa[a][1], h))
    };
    k.prototype.wd = function() {
        this.cf === this.Ff.length && this.Ff.push(new d(0, this));
        return this.Ff[this.cf++]
    };
    k.prototype.Of = function() {
        if (0 !== this.cf && !this.X.isContextLost()) {
            var a = this.X;
            0 < this.Kj && (a.bindBuffer(a.ARRAY_BUFFER, this.Ws), a.bufferSubData(a.ARRAY_BUFFER, 0, this.Xs.subarray(0, this.Kj)), b && 0 <= b.re && "<point>" === b.name && a.vertexAttribPointer(b.re, 4, a.FLOAT, !1, 0, 0));
            if (0 < this.tg) {
                var b = this.Ti;
                a.bindBuffer(a.ARRAY_BUFFER, this.km[this.Jf]);
                a.bufferSubData(a.ARRAY_BUFFER, 0, this.Hp.subarray(0, this.tg));
                b && 0 <= b.re && "<point>" !== b.name && a.vertexAttribPointer(b.re, this.ob ? 3 : 2, a.FLOAT, !1, 0, 0);
                a.bindBuffer(a.ARRAY_BUFFER, this.$l[this.Jf]);
                a.bufferSubData(a.ARRAY_BUFFER, 0, this.sp.subarray(0, this.Zj));
                b && 0 <= b.dh && "<point>" !== b.name && a.vertexAttribPointer(b.dh, 2, a.FLOAT, !1, 0, 0)
            }
            for (var d, a = 0, b = this.cf; a < b; a++) switch (d = this.Ff[a], d.type) {
                case 1:
                    d.SC();
                    break;
                case 2:
                    d.aD();
                    break;
                case 3:
                    d.YC();
                    break;
                case 4:
                    d.UC();
                    break;
                case 5:
                    d.dD();
                    break;
                case 6:
                    d.TC();
                    break;
                case 7:
                    d.OC();
                    break;
                case 8:
                    d.RC();
                    break;
                case 9:
                    d.ZC();
                    break;
                case 10:
                    d.$C();
                    break;
                case 11:
                    d.bD();
                    break;
                case 12:
                    d.VC();
                    break;
                case 13:
                    d.WC();
                    break;
                case 14:
                    d.XC()
            }
            this.Kj = this.Zj = this.tg = this.cf = 0;
            this.Xn = this.Rc = this.yc = !1;
            this.Jf++;
            4 <= this.Jf && (this.Jf = 0)
        }
    };
    k.prototype.kh = function(a) {
        if (a !== this.Rw && !this.Yk) {
            var b = this.wd();
            b.type = 3;
            this.Rw = b.Ox = a;
            this.Rc = this.yc = !1
        }
    };
    k.prototype.Ad = function(a) {
        if (a !== this.$g) {
            var b = this.wd();
            b.type = 2;
            this.$g = b.ye = a;
            this.Rc = this.yc = !1
        }
    };
    k.prototype.jh = function(a, b) {
        if ((a !== this.Sw || b !== this.Qw) && !this.Yk) {
            var d = this.wd();
            d.type = 4;
            d.Vc = a;
            d.ne = b;
            this.Sw = a;
            this.Qw = b;
            this.Rc = this.yc = !1
        }
    };
    k.prototype.vy = function() {
        this.jh(this.X.ONE, this.X.ONE_MINUS_SRC_ALPHA)
    };
    k.prototype.Oj = function(a, b, d, c, h, l, n, e) {
        15992 <= this.tg && this.Of();
        var g = this.tg,
            k = this.Zj,
            x = this.Hp,
            u = this.sp,
            y = this.Tq;
        if (this.yc) this.Ff[this.cf - 1].ne += 6;
        else {
            var C = this.wd();
            C.type = 1;
            C.Vc = this.ob ? g : g / 2 * 3;
            C.ne = 6;
            this.yc = !0;
            this.Rc = !1
        }
        this.ob ? (x[g++] = a, x[g++] = b, x[g++] = y, x[g++] = d, x[g++] = c, x[g++] = y, x[g++] = h, x[g++] = l, x[g++] = y, x[g++] = n, x[g++] = e, x[g++] = y) : (x[g++] = a, x[g++] = b, x[g++] = d, x[g++] = c, x[g++] = h, x[g++] = l, x[g++] = n, x[g++] = e);
        u[k++] = 0;
        u[k++] = 0;
        u[k++] = 1;
        u[k++] = 0;
        u[k++] = 1;
        u[k++] = 1;
        u[k++] = 0;
        u[k++] = 1;
        this.tg = g;
        this.Zj = k
    };
    k.prototype.ig = function(a, b, d, c, h, l, n, e, g) {
        15992 <= this.tg && this.Of();
        var k = this.tg,
            x = this.Zj,
            u = this.Hp,
            y = this.sp,
            C = this.Tq;
        if (this.yc) this.Ff[this.cf - 1].ne += 6;
        else {
            var B = this.wd();
            B.type = 1;
            B.Vc = this.ob ? k : k / 2 * 3;
            B.ne = 6;
            this.yc = !0;
            this.Rc = !1
        }
        var B = g.left,
            w = g.top,
            z = g.right;
        g = g.bottom;
        this.ob ? (u[k++] = a, u[k++] = b, u[k++] = C, u[k++] = d, u[k++] = c, u[k++] = C, u[k++] = h, u[k++] = l, u[k++] = C, u[k++] = n, u[k++] = e, u[k++] = C) : (u[k++] = a, u[k++] = b, u[k++] = d, u[k++] = c, u[k++] = h, u[k++] = l, u[k++] = n, u[k++] = e);
        y[x++] = B;
        y[x++] = w;
        y[x++] = z;
        y[x++] = w;
        y[x++] = z;
        y[x++] = g;
        y[x++] = B;
        y[x++] = g;
        this.tg = k;
        this.Zj = x
    };
    k.prototype.DF = function(a, b, d, c) {
        7996 <= this.Kj && this.Of();
        var h = this.Kj,
            l = this.Xs;
        if (this.Rc) this.Ff[this.cf - 1].ne++;
        else {
            var n = this.wd();
            n.type = 8;
            n.Vc = h;
            n.ne = 1;
            this.Rc = !0;
            this.yc = !1
        }
        l[h++] = a;
        l[h++] = b;
        l[h++] = d;
        l[h++] = c;
        this.Kj = h
    };
    k.prototype.Bd = function(a) {
        if (this.il !== a) {
            if (!this.Fb[a]) {
                if (0 === this.il) return;
                a = 0
            }
            var b = this.wd();
            b.type = 9;
            this.il = b.Vc = a;
            this.Rc = this.yc = !1
        }
    };
    k.prototype.Il = function(a) {
        a = this.Fb[a];
        return !(!a.ji && !a.ii)
    };
    k.prototype.Zs = function(a) {
        a = this.Fb[a];
        return !!(a.ji || a.ii || a.Ov)
    };
    k.prototype.Ys = function(a) {
        return this.Fb[a].Re
    };
    k.prototype.MF = function(a) {
        a = this.Fb[a];
        return 0 !== a.lr || 0 !== a.mr
    };
    k.prototype.hE = function(a) {
        return this.Fb[a].lr
    };
    k.prototype.iE = function(a) {
        return this.Fb[a].mr
    };
    k.prototype.jE = function(a, b) {
        return this.Fb[a].wa[b][2]
    };
    k.prototype.So = function(a) {
        return this.Fb[a].tv
    };
    k.prototype.Uj = function(a, b, d, c, h, l, n, e, g, k, x, u, y, C, B) {
        var w = this.Fb[this.il],
            z, v;
        if (w.DE || B.length) {
            z = this.wd();
            z.type = 10;
            z.Da ? uc(this.Yd, z.Da) : z.Da = tc();
            v = z.Da;
            v[0] = b;
            v[1] = d;
            v[2] = c;
            v[3] = h;
            v[4] = l;
            v[5] = n;
            v[6] = e;
            v[7] = g;
            v[8] = k;
            v[9] = x;
            v[10] = u;
            v[11] = y;
            v[12] = C;
            w.pl ? z.ye = a : z.ye = null;
            if (B.length)
                for (d = z.Iy, d.length = B.length, a = 0, b = B.length; a < b; a++) d[a] = B[a];
            this.Rc = this.yc = !1
        }
    };
    k.prototype.clear = function(a, b, d, c) {
        var h = this.wd();
        h.type = 7;
        h.Vc = 0;
        h.Da || (h.Da = tc());
        h.Da[0] = a;
        h.Da[1] = b;
        h.Da[2] = d;
        h.Da[3] = c;
        this.Rc = this.yc = !1
    };
    k.prototype.clearRect = function(a, b, d, c) {
        if (!(0 > d || 0 > c)) {
            var h = this.wd();
            h.type = 7;
            h.Vc = 1;
            h.Da || (h.Da = tc());
            h.Da[0] = a;
            h.Da[1] = b;
            h.Da[2] = d;
            h.Da[3] = c;
            this.Rc = this.yc = !1
        }
    };
    k.prototype.yy = function(a) {
        if (this.ob && (a = !!a, this.Yk !== a)) {
            var b = this.wd();
            b.type = 14;
            b.Vc = a ? 1 : 0;
            this.Rc = this.yc = !1;
            this.Yk = a;
            this.Wo = null;
            this.Yk ? this.Bd(2) : this.Bd(0)
        }
    };
    k.prototype.xy = function(a) {
        if (this.ob) {
            var b = this.wd();
            b.type = 13;
            b.Vc = a ? 1 : 0;
            this.Rc = this.yc = !1
        }
    };
    k.prototype.kw = function() {
        uc(this.ns, b);
        this.ue();
        this.ge();
        var a = this.width / 2,
            d = this.height / 2;
        this.Oj(-a, d, a, d, a, -d, -a, -d);
        uc(b, this.Yd);
        this.ge()
    };
    k.prototype.wy = function(a, b, d) {
        this.Bd(3);
        var c = this.wd();
        c.type = 12;
        c.Da || (c.Da = tc());
        c.Da[0] = a;
        c.Da[1] = b;
        c.Da[2] = d;
        c.Da[3] = 1;
        this.Rc = this.yc = !1
    };
    k.prototype.mG = function() {
        this.Bd(0)
    };
    k.prototype.WF = function() {
        this.Bd(2)
    };
    k.prototype.LF = function() {
        this.Of();
        this.X.flush()
    };
    var a = [],
        l = {};
    k.prototype.EC = function() {
        G(a);
        l = {}
    };
    k.prototype.tj = function(b, d, e, c) {
        d = !!d;
        e = !!e;
        var h = b.src + "," + d + "," + e + (d ? ",undefined" : ""),
            p = null;
        if ("undefined" !== typeof b.src && l.hasOwnProperty(h)) return p = l[h], p.$m++, p;
        this.Of();
        var n = this.X,
            g = ka(b.width) && ka(b.height),
            p = n.createTexture();
        n.bindTexture(n.TEXTURE_2D, p);
        n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
        var k = n.RGBA,
            F = n.RGBA,
            x = n.UNSIGNED_BYTE;
        if (c && !this.Wf) switch (c) {
            case 1:
                F = k = n.RGB;
                break;
            case 2:
                x = n.UNSIGNED_SHORT_4_4_4_4;
                break;
            case 3:
                x = n.UNSIGNED_SHORT_5_5_5_1;
                break;
            case 4:
                F = k = n.RGB, x = n.UNSIGNED_SHORT_5_6_5
        }
        if (1 === this.version && !g && d) {
            c = document.createElement("canvas");
            c.width = la(b.width);
            c.height = la(b.height);
            var u = c.getContext("2d");
            "undefined" !== typeof u.imageSmoothingEnabled ? u.imageSmoothingEnabled = e : (u.webkitImageSmoothingEnabled = e, u.mozImageSmoothingEnabled = e, u.msImageSmoothingEnabled = e);
            u.drawImage(b, 0, 0, b.width, b.height, 0, 0, c.width, c.height);
            n.texImage2D(n.TEXTURE_2D, 0, k, F, x, c)
        } else n.texImage2D(n.TEXTURE_2D, 0, k, F, x, b);
        d ? (n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.REPEAT), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.REPEAT)) : (n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE));
        e ? (n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), (g || 2 <= this.version) && this.Tv ? (n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR_MIPMAP_LINEAR), n.generateMipmap(n.TEXTURE_2D)) : n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR)) : (n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.NEAREST), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.NEAREST));
        n.bindTexture(n.TEXTURE_2D, null);
        this.$g = null;
        p.Jh = b.width;
        p.Ih = b.height;
        p.$m = 1;
        p.Gv = h;
        a.push(p);
        return l[h] = p
    };
    k.prototype.Qd = function(b, d, l, c) {
        this.Of();
        var h = this.X;
        this.Wf && (c = !1);
        var p = h.createTexture();
        h.bindTexture(h.TEXTURE_2D, p);
        h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, b, d, 0, h.RGBA, c ? h.UNSIGNED_SHORT_4_4_4_4 : h.UNSIGNED_BYTE, null);
        h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.CLAMP_TO_EDGE);
        h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.CLAMP_TO_EDGE);
        h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, l ? h.LINEAR : h.NEAREST);
        h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, l ? h.LINEAR : h.NEAREST);
        h.bindTexture(h.TEXTURE_2D, null);
        this.$g = null;
        p.Jh = b;
        p.Ih = d;
        a.push(p);
        return p
    };
    k.prototype.JG = function(a, b, d) {
        this.Of();
        var c = this.X;
        this.Wf && (d = !1);
        c.bindTexture(c.TEXTURE_2D, b);
        c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
        try {
            c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, c.RGBA, d ? c.UNSIGNED_SHORT_4_4_4_4 : c.UNSIGNED_BYTE, a)
        } catch (h) {
            console && console.error && console.error("Error updating WebGL texture: ", h)
        }
        c.bindTexture(c.TEXTURE_2D, null);
        this.$g = null
    };
    k.prototype.deleteTexture = function(b) {
        b && ("undefined" !== typeof b.$m && 1 < b.$m ? b.$m-- : (this.Of(), b === this.$g && (this.X.bindTexture(this.X.TEXTURE_2D, null), this.$g = null), b === this.di && (this.X.activeTexture(this.X.TEXTURE1), this.X.bindTexture(this.X.TEXTURE_2D, null), this.X.activeTexture(this.X.TEXTURE0), this.di = null), La(a, b), "undefined" !== typeof b.Gv && delete l[b.Gv], this.X.deleteTexture(b)))
    };
    k.prototype.ve = function(a) {
        if (a !== this.Wo) {
            var b = this.wd();
            b.type = 6;
            this.Wo = b.ye = a;
            this.Rc = this.yc = !1
        }
    };
    vb = k
})();
(function() {
    function k(c) {
        if (c && (c.getContext || c.dc) && !c.c2runtime) {
            c.c2runtime = this;
            var a = this;
            this.Fd = (this.Yn = /crosswalk/i.test(navigator.userAgent) || /xwalk/i.test(navigator.userAgent) || !("undefined" === typeof window.c2isCrosswalk || !window.c2isCrosswalk)) || "undefined" !== typeof window.device && ("undefined" !== typeof window.device.cordova || "undefined" !== typeof window.device.phonegap) || "undefined" !== typeof window.c2iscordova && window.c2iscordova;
            this.Sc = !!c.dc;
            this.Hw = "undefined" !== typeof window.AppMobi || this.Sc;
            this.Vd = !!window.c2cocoonjs;
            this.oe = !!window.c2ejecta;
            this.Vd && (CocoonJS.App.onSuspended.addEventListener(function() {
                a.setSuspended(!0)
            }), CocoonJS.App.onActivated.addEventListener(function() {
                a.setSuspended(!1)
            }));
            this.oe && (document.addEventListener("pagehide", function() {
                a.setSuspended(!0)
            }), document.addEventListener("pageshow", function() {
                a.setSuspended(!1)
            }), document.addEventListener("resize", function() {
                a.setSize(window.innerWidth, window.innerHeight)
            }));
            this.Tb = this.Sc || this.Vd || this.oe;
            this.$k = /edge\//i.test(navigator.userAgent);
            this.Wf = (/msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent) || /iemobile/i.test(navigator.userAgent)) && !this.$k;
            this.Kw = /tizen/i.test(navigator.userAgent);
            this.Vn = /android/i.test(navigator.userAgent) && !this.Kw && !this.Wf && !this.$k;
            this.Ow = (/iphone/i.test(navigator.userAgent) || /ipod/i.test(navigator.userAgent)) && !this.Wf && !this.$k;
            this.ZE = /ipad/i.test(navigator.userAgent);
            this.mj = this.Ow || this.ZE || this.oe;
            this.Xk = (/chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent)) && !this.Wf && !this.$k;
            this.Gw = /amazonwebappplatform/i.test(navigator.userAgent);
            this.LE = /firefox/i.test(navigator.userAgent);
            this.OE = /safari/i.test(navigator.userAgent) && !this.Xk && !this.Wf && !this.$k;
            this.PE = /windows/i.test(navigator.userAgent);
            this.bi = "undefined" !== typeof window.c2nodewebkit || "undefined" !== typeof window.c2nwjs || /nodewebkit/i.test(navigator.userAgent) || /nwjs/i.test(navigator.userAgent);
            this.Lw = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
            this.RE = !("undefined" === typeof window.c2isWindows8Capable || !window.c2isWindows8Capable);
            this.dl = !("undefined" === typeof window.c2isWindowsPhone8 || !window.c2isWindowsPhone8);
            this.js = !("undefined" === typeof window.c2isWindowsPhone81 || !window.c2isWindowsPhone81);
            this.hs = !!window.cr_windows10;
            this.gs = this.Lw || this.RE || this.js || this.hs;
            this.KE = !("undefined" === typeof window.c2isBlackberry10 || !window.c2isBlackberry10);
            this.Wn = this.Vn && !this.Xk && !this.Yn && !this.LE && !this.Gw && !this.Tb;
            this.devicePixelRatio = 1;
            this.Wg = this.Fd || this.Yn || this.Hw || this.Vd || this.Vn || this.mj || this.dl || this.js || this.KE || this.Kw || this.oe;
            this.Wg || (this.Wg = /(blackberry|bb10|playbook|palm|symbian|nokia|windows\s+ce|phone|mobile|tablet|kindle|silk)/i.test(navigator.userAgent));
            this.cl = !!(this.mj && this.Fd && window.webkit);
            this.Qr = null;
            this.FE = "";
            this.cl && (this.Qr = cordova && cordova.plugins && cordova.plugins.CorHttpd ? cordova.plugins.CorHttpd : null);
            "undefined" === typeof cr_is_preview || this.bi || "?nw" !== window.location.search && !/nodewebkit/i.test(navigator.userAgent) && !/nwjs/i.test(navigator.userAgent) || (this.bi = !0);
            this.canvas = c;
            this.Iv = document.getElementById("c2canvasdiv");
            this.S = this.X = null;
            this.Lr = "(unavailable)";
            this.ob = !1;
            this.Oh = 0;
            this.yb = null;
            this.tr = "";
            this.Gn = !1;
            this.Fx = this.Gx = 0;
            this.canvas.oncontextmenu = function(c) {
                c.preventDefault && c.preventDefault();
                return !1
            };
            this.canvas.onselectstart = function(c) {
                c.preventDefault && c.preventDefault();
                return !1
            };
            this.Sc && (window.c2runtime = this);
            this.bi && (window.ondragover = function(c) {
                c.preventDefault();
                return !1
            }, window.ondrop = function(c) {
                c.preventDefault();
                return !1
            }, window.nwgui && window.nwgui.App.clearCache && window.nwgui.App.clearCache());
            this.Wn && "undefined" !== typeof jQuery && jQuery("canvas").parents("*").css("overflow", "visible");
            this.width = c.width;
            this.height = c.height;
            this.fa = this.width;
            this.ea = this.height;
            this.jn = this.width;
            this.Dk = this.height;
            this.qj = window.innerWidth;
            this.pj = window.innerHeight;
            this.xa = !0;
            this.bl = !1;
            Date.now || (Date.now = function() {
                return +new Date
            });
            this.plugins = [];
            this.types = {};
            this.T = [];
            this.xb = [];
            this.ss = {};
            this.Hd = [];
            this.$q = {};
            this.Pf = [];
            this.hk = [];
            this.yp = [];
            this.wq = [];
            this.mC = [];
            this.Mh = {};
            this.as = this.Vg = !1;
            this.Wd = 0;
            this.$r = this.ds = !1;
            this.ef = [];
            this.Zk = !1;
            this.lo = this.nt = "";
            this.hc = null;
            this.Xf = "";
            this.Yl = this.Ly = !1;
            this.Fn = [];
            this.Nh = this.Rg = 0;
            this.wx = 30;
            this.Qq = this.tl = 0;
            this.$j = 1;
            this.gb = new gb;
            this.ug = new gb;
            this.wo = this.Kn = this.Th = this.ze = this.fi = this.sr = this.co = 0;
            this.Kh = null;
            this.rn = [];
            this.Zq = [];
            this.tn = -1;
            this.ys = [
                []
            ];
            this.Et = this.qo = 0;
            this.Uo(null);
            this.ul = [];
            this.wj = -1;
            this.Ax = this.yl = 0;
            this.rs = !0;
            this.Jk = 0;
            this.Zl = [];
            this.Bt = this.bt = -1;
            this.nj = !0;
            this.uj = 0;
            this.al = !1;
            this.oG = 0;
            this.Pi = null;
            this.nf = this.yw = !1;
            this.Ex = new ca;
            this.Ls = new ca;
            this.Ms = new ca;
            this.jy = [];
            new ib([]);
            new ib([]);
            this.Hg = [];
            this.Pn = {};
            this.Ng = {};
            this.Fg = {};
            this.gk = {};
            this.Cv = {};
            this.Vw = this.ko = this.Ub = this.gc = this.Uw = this.ho = this.eb = null;
            this.ek = this.ks = !1;
            this.ur = [null, null];
            this.Vh = 0;
            this.or = "";
            this.ag = {};
            this.Vl = this.ah = null;
            this.My = "";
            this.vo = [];
            this.TF()
        }
    }

    function g(c, a) {
        return 128 >= a ? c[3] : 256 >= a ? c[2] : 512 >= a ? c[1] : c[0]
    }

    function e() {
        try {
            return !!window.indexedDB
        } catch (c) {
            return !1
        }
    }

    function d(c) {
        c.target.result.createObjectStore("saves", {
            keyPath: "slot"
        })
    }

    function b(c, a, h, b) {
        try {
            var n = indexedDB.open("_C2SaveStates");
            n.onupgradeneeded = d;
            n.onerror = b;
            n.onsuccess = function(d) {
                d = d.target.result;
                d.onerror = b;
                d.transaction(["saves"], "readwrite").objectStore("saves").put({
                    slot: c,
                    data: a
                }).onsuccess = h
            }
        } catch (f) {
            b(f)
        }
    }

    function a(c, a, h) {
        try {
            var b = indexedDB.open("_C2SaveStates");
            b.onupgradeneeded = d;
            b.onerror = h;
            b.onsuccess = function(b) {
                b = b.target.result;
                b.onerror = h;
                var d = b.transaction(["saves"]).objectStore("saves").get(c);
                d.onsuccess = function() {
                    d.result ? a(d.result.data) : a(null)
                }
            }
        } catch (n) {
            h(n)
        }
    }

    function l() {
        fa("Reloading for continuous preview");
        window.c2cocoonjs ? CocoonJS.App.reload() : -1 < window.location.search.indexOf("continuous") ? window.location.reload(!0) : window.location = window.location + "?continuous"
    }

    function f(c) {
        var a, h = {};
        for (a in c) !c.hasOwnProperty(a) || c[a] instanceof ca || c[a] && "undefined" !== typeof c[a].cJ || "spriteCreatedDestroyCallback" !== a && (h[a] = c[a]);
        return h
    }
    var m = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
    k.prototype.TF = function() {
        var c = this;
        if (this.cl) this.Qr ? this.Qr.startServer({
            port: 0,
            localhost_only: !0
        }, function(a) {
            c.FE = a;
            c.ew(function(a) {
                c.sj(JSON.parse(a))
            }, function() {
                alert("Error fetching data.js")
            })
        }, function(c) {
            alert("error starting local server: " + c)
        }) : this.ew(function(a) {
            c.sj(JSON.parse(a))
        }, function() {
            alert("Error fetching data.js")
        });
        else {
            var a;
            this.dl ? a = new ActiveXObject("Microsoft.XMLHTTP") : a = new XMLHttpRequest;
            var h = "data.js";
            if (this.Lw || this.dl || this.js || this.hs) h = "data.json";
            a.open("GET", h, !0);
            var b = !1;
            if (!this.Tb && "response" in a && "responseType" in a) try {
                a.responseType = "json", b = "json" === a.responseType
            } catch (d) {
                b = !1
            }
            if (!b && "responseType" in a) try {
                a.responseType = "text"
            } catch (n) {}
            if ("overrideMimeType" in a) try {
                a.overrideMimeType("application/json; charset=utf-8")
            } catch (f) {}
            this.dl ? a.onreadystatechange = function() {
                4 === a.readyState && c.sj(JSON.parse(a.responseText))
            } : (a.onload = function() {
                if (b) c.sj(a.response);
                else if (c.oe) {
                    var h = a.responseText,
                        h = h.substr(h.indexOf("{"));
                    c.sj(JSON.parse(h))
                } else c.sj(JSON.parse(a.responseText))
            }, a.onerror = function(c) {
                ga("Error requesting " + h + ":");
                ga(c)
            });
            a.send()
        }
    };
    k.prototype.IE = function() {
        var c = this,
            a, h, b, d, n, f, l, p, e;
        this.fj = (!this.Tb || this.oe || this.Fd) && this.GG && !this.Wn;
        0 === this.ld && this.mj && (this.fj = !1);
        this.devicePixelRatio = this.fj ? window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio || window.msDevicePixelRatio || 1 : 1;
        this.Hc();
        0 < this.ld && this.setSize(window.innerWidth, window.innerHeight, !0);
        try {
            this.mD && (this.Vd || this.oe || !this.Tb) && (a = {
                alpha: !0,
                depth: !1,
                antialias: !1,
                failIfMajorPerformanceCaveat: !0
            }, this.X = this.canvas.getContext("webgl2", a) || this.canvas.getContext("webgl", a) || this.canvas.getContext("experimental-webgl", a))
        } catch (g) {}
        if (this.X) {
            if (a = this.X.getExtension("WEBGL_debug_renderer_info")) this.Lr = this.X.getParameter(a.UNMASKED_RENDERER_WEBGL) + " [" + this.X.getParameter(a.UNMASKED_VENDOR_WEBGL) + "]";
            this.ob && (this.Lr += " [front-to-back enabled]");
            this.Tb || (this.Bc = document.createElement("canvas"), jQuery(this.Bc).appendTo(this.canvas.parentNode), this.Bc.oncontextmenu = function() {
                return !1
            }, this.Bc.onselectstart = function() {
                return !1
            }, this.Bc.width = Math.round(this.jn * this.devicePixelRatio), this.Bc.height = Math.round(this.Dk * this.devicePixelRatio), jQuery(this.Bc).css({
                width: this.jn + "px",
                height: this.Dk + "px"
            }), this.by(), this.Vs = this.Bc.getContext("2d"));
            this.S = new vb(this.X, this.Wg, this.ob);
            this.S.si(this.canvas.width, this.canvas.height);
            this.S.Tv = 0 !== this.eD;
            this.yb = null;
            this.canvas.addEventListener("webglcontextlost", function(a) {
                a.preventDefault();
                c.nF();
                fa("[Construct 2] WebGL context lost");
                window.cr_setSuspended(!0)
            }, !1);
            this.canvas.addEventListener("webglcontextrestored", function() {
                c.S.Cw();
                c.S.si(c.S.width, c.S.height, !0);
                c.gc = null;
                c.Ub = null;
                c.ur[0] = null;
                c.ur[1] = null;
                c.oF();
                c.xa = !0;
                fa("[Construct 2] WebGL context restored");
                window.cr_setSuspended(!1)
            }, !1);
            a = 0;
            for (h = this.T.length; a < h; a++)
                for (n = this.T[a], b = 0, d = n.ma.length; b < d; b++) l = n.ma[b], l.Xb = this.S.Kr(l.id), l.Re = this.S.Ys(l.Xb), this.ek = this.ek || this.S.Il(l.Xb);
            a = 0;
            for (h = this.Hd.length; a < h; a++) {
                p = this.Hd[a];
                b = 0;
                for (d = p.ma.length; b < d; b++) l = p.ma[b], l.Xb = this.S.Kr(l.id), l.Re = this.S.Ys(l.Xb);
                p.Ve();
                b = 0;
                for (d = p.ta.length; b < d; b++) {
                    e = p.ta[b];
                    n = 0;
                    for (f = e.ma.length; n < f; n++) l = e.ma[n], l.Xb = this.S.Kr(l.id), l.Re = this.S.Ys(l.Xb), this.ek = this.ek || this.S.Il(l.Xb);
                    e.Ve()
                }
            }
        } else {
            if (0 < this.ld && this.Sc) {
                this.canvas = null;
                document.oncontextmenu = function() {
                    return !1
                };
                document.onselectstart = function() {
                    return !1
                };
                this.yb = AppMobi.canvas.getContext("2d");
                try {
                    this.yb.samplingMode = this.rb ? "smooth" : "sharp", this.yb.globalScale = 1, this.yb.HTML5CompatibilityMode = !0, this.yb.imageSmoothingEnabled = this.rb
                } catch (k) {}
                0 !== this.width && 0 !== this.height && (this.yb.width = this.width, this.yb.height = this.height)
            }
            this.yb || (this.Vd ? (a = {
                antialias: !!this.rb,
                alpha: !0
            }, this.yb = this.canvas.getContext("2d", a)) : (a = {
                alpha: !0
            }, this.yb = this.canvas.getContext("2d", a)), this.dp(this.yb, this.rb));
            this.Vs = this.Bc = null
        }
        this.Sy = function(a) {
            c.Ra(!1, a)
        };
        window == window.top || this.Tb || this.gs || this.dl || (document.addEventListener("mousedown", function() {
            window.focus()
        }, !0), document.addEventListener("touchstart", function() {
            window.focus()
        }, !0));
        "undefined" !== typeof cr_is_preview && (this.Vd && console.log("[Construct 2] In preview-over-wifi via CocoonJS mode"), -1 < window.location.search.indexOf("continuous") && (fa("Reloading for continuous preview"), this.lo = "__c2_continuouspreview", this.Yl = !0), this.BF && !this.Wg && (jQuery(window).focus(function() {
            c.setSuspended(!1)
        }), jQuery(window).blur(function() {
            var a = window.parent;
            a && a.document.hasFocus() || c.setSuspended(!0)
        })));
        window.addEventListener("blur", function() {});
        this.Tb || (a = function(c) {
            if (ub(c) && document.activeElement && document.activeElement !== document.getElementsByTagName("body")[0] && document.activeElement.blur) try {
                document.activeElement.blur()
            } catch (a) {}
        }, "undefined" !== typeof PointerEvent ? document.addEventListener("pointerdown", a) : window.navigator.msPointerEnabled ? document.addEventListener("MSPointerDown", a) : document.addEventListener("touchstart", a), document.addEventListener("mousedown", a));
        0 === this.ld && this.fj && 1 < this.devicePixelRatio && this.setSize(this.Kb, this.Jb, !0);
        this.Wy();
        this.AE();
        this.go();
        this.cb = {}
    };
    k.prototype.setSize = function(c, a, h) {
        var b = 0,
            d = 0,
            n = 0,
            f = 0,
            f = 0;
        if (this.qj !== c || this.pj !== a || h) {
            this.qj = c;
            this.pj = a;
            var l = this.ld,
                p = (document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.al) && !this.Fd;
            if (p || 0 !== this.ld || h) p && 0 < this.Vh && (l = this.Vh), h = this.devicePixelRatio, 4 <= l ? (n = this.Kb / this.Jb, c / a > n ? (n *= a, 5 === l ? (f = n * h / this.Kb, 1 < f ? f = Math.floor(f) : 1 > f && (f = 1 / Math.ceil(1 / f)), n = this.Kb * f / h, f = this.Jb * f / h, b = (c - n) / 2, d = (a - f) / 2, c = n, a = f) : (b = (c - n) / 2, c = n)) : (f = c / n, 5 === l ? (f = f * h / this.Jb, 1 < f ? f = Math.floor(f) : 1 > f && (f = 1 / Math.ceil(1 / f)), n = this.Kb * f / h, f = this.Jb * f / h, b = (c - n) / 2, d = (a - f) / 2, c = n) : d = (a - f) / 2, a = f), p && !this.bi && (d = b = 0)) : this.bi && this.al && 0 === this.lw && (b = Math.floor((c - this.Kb) /
                2), d = Math.floor((a - this.Jb) / 2), c = this.Kb, a = this.Jb), 2 > l && (this.wk = h), this.jn = Math.round(c), this.Dk = Math.round(a), this.width = Math.round(c * h), this.height = Math.round(a * h), this.xa = !0, this.hz ? (this.fa = this.width, this.ea = this.height, this.Sd = !0) : this.width < this.Kb && this.height < this.Jb || 1 === l ? (this.fa = this.width, this.ea = this.height, this.Sd = !0) : (this.fa = this.Kb, this.ea = this.Jb, this.Sd = !1, 2 === l ? (n = this.Kb / this.Jb, l = this.qj / this.pj, l < n ? this.fa = this.ea * l : l > n && (this.ea = this.fa / l)) : 3 === l && (n = this.Kb / this.Jb, l =
                this.qj / this.pj, l > n ? this.fa = this.ea * l : l < n && (this.ea = this.fa / l))), this.Iv && !this.Tb && (jQuery(this.Iv).css({
                width: Math.round(c) + "px",
                height: Math.round(a) + "px",
                "margin-left": Math.floor(b) + "px",
                "margin-top": Math.floor(d) + "px"
            }), "undefined" !== typeof cr_is_preview && jQuery("#borderwrap").css({
                width: Math.round(c) + "px",
                height: Math.round(a) + "px"
            })), this.canvas && (this.canvas.width = Math.round(c * h), this.canvas.height = Math.round(a * h), this.oe ? (this.canvas.style.left = Math.floor(b) + "px", this.canvas.style.top = Math.floor(d) + "px", this.canvas.style.width = Math.round(c) + "px", this.canvas.style.height = Math.round(a) + "px") : this.fj && !this.Tb && (this.canvas.style.width = Math.round(c) + "px", this.canvas.style.height = Math.round(a) + "px")), this.Bc && (this.Bc.width = Math.round(c * h), this.Bc.height = Math.round(a * h), this.Bc.style.width = this.jn + "px", this.Bc.style.height = this.Dk + "px"), this.S && this.S.si(Math.round(c * h), Math.round(a * h)), this.Sc && this.yb && (this.yb.width = Math.round(c), this.yb.height = Math.round(a)), this.yb && this.dp(this.yb, this.rb), this.Wy(), this.Ow && !this.Fd && window.scrollTo(0, 0)
        }
    };
    k.prototype.Wy = function() {
        if (this.qC && 0 !== this.Ts) {
            var c = "portrait";
            2 === this.Ts && (c = "landscape");
            try {
                screen.orientation && screen.orientation.lock ? screen.orientation.lock(c).catch(function() {}) : screen.lockOrientation ? screen.lockOrientation(c) : screen.webkitLockOrientation ? screen.webkitLockOrientation(c) : screen.mozLockOrientation ? screen.mozLockOrientation(c) : screen.msLockOrientation && screen.msLockOrientation(c)
            } catch (a) {
                console && console.warn && console.warn("Failed to lock orientation: ", a)
            }
        }
    };
    k.prototype.nF = function() {
        this.S.EC();
        this.ks = !0;
        var c, a, h;
        c = 0;
        for (a = this.T.length; c < a; c++) h = this.T[c], h.Dl && h.Dl()
    };
    k.prototype.oF = function() {
        this.ks = !1;
        var c, a, h;
        c = 0;
        for (a = this.T.length; c < a; c++) h = this.T[c], h.yo && h.yo()
    };
    k.prototype.by = function() {
        if (!this.Tb) {
            var c = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || document.msFullscreenElement || this.al) && !this.Fd ? jQuery(this.canvas).offset() : jQuery(this.canvas).position();
            c.position = "absolute";
            jQuery(this.Bc).css(c)
        }
    };
    var q = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame;
    k.prototype.setSuspended = function(c) {
        var a;
        if (c && !this.bl)
            for (fa("[Construct 2] Suspending"), this.bl = !0, -1 !== this.bt && q && q(this.bt), -1 !== this.Bt && clearTimeout(this.Bt), c = 0, a = this.Zl.length; c < a; c++) this.Zl[c](!0);
        else if (!c && this.bl) {
            fa("[Construct 2] Resuming");
            this.bl = !1;
            this.co = cb();
            this.fi = cb();
            c = this.tl = this.Kn = 0;
            for (a = this.Zl.length; c < a; c++) this.Zl[c](!1);
            this.Ra(!1)
        }
    };
    k.prototype.nv = function(c) {
        this.Zl.push(c)
    };
    k.prototype.zg = function(c) {
        return this.vo[c]
    };
    k.prototype.sj = function(c) {
        c && c.project || ga("Project model unavailable");
        c = c.project;
        this.name = c[0];
        this.gw = c[1];
        this.ld = c[12];
        this.lw = c[12];
        this.Kb = c[10];
        this.Jb = c[11];
        this.Wx = this.Kb / 2;
        this.Xx = this.Jb / 2;
        this.Tb && !this.oe && (4 <= c[12] || 0 === c[12]) && (fa("[Construct 2] Letterbox scale fullscreen modes are not supported on this platform - falling back to 'Scale outer'"), this.lw = this.ld = 3);
        this.Lt = c[18];
        this.bh = c[19];
        if (0 === this.bh) {
            var a = new Image;
            a.crossOrigin = "anonymous";
            this.Ay(a, "loading-logo.png");
            this.ah = {
                ro: a
            }
        } else if (4 === this.bh) {
            a = new Image;
            a.src = "";
            var h = new Image;
            h.src = "";
            var b = new Image;
            b.src = "";
            var d = new Image;
            d.src = "";
            var n = new Image;
            n.src = "";
            var f = new Image;
            f.src = "";
            var l = new Image;
            l.src = "";
            var p = new Image;
            p.src = "";
            var e = new Image;
            e.src = "";
            var g = new Image;
            g.src = "";
            var k = new Image;
            k.src = "";
            var t = new Image;
            t.src = "";
            this.ah = {
                ro: [a, h, b, d],
                IF: [n, f, l, p],
                KG: [e, g, k, t]
            }
        }
        this.yl = c[21];
        this.vo = yc();
        this.xf = new P(this);
        a = 0;
        for (h = c[2].length; a < h; a++) l = c[2][a], b = this.zg(l[0]), wb(l, b.prototype), p = new b(this), p.ip = l[1], p.Zg = l[2], p.jJ = l[5], p.xx = l[9], p.J && p.J(), this.plugins.push(p);
        this.vo = yc();
        a = 0;
        for (h = c[3].length; a < h; a++) {
            l = c[3][a];
            n = this.zg(l[1]);
            p = null;
            b = 0;
            for (d = this.plugins.length; b < d; b++)
                if (this.plugins[b] instanceof n) {
                    p = this.plugins[b];
                    break
                }
            e = new p.R(p);
            e.name = l[0];
            e.ca = l[2];
            e.Yr = l[3].slice(0);
            e.IG = l[3].length;
            e.rC = l[4];
            e.XD = l[5];
            e.Ja = l[11];
            e.ca ? (e.yj = [], e.Qf = this.Jk++, e.pb = null) : (e.yj = null, e.Qf = -1, e.pb = []);
            e.Dn = null;
            e.$i = null;
            e.Zv = null;
            e.cd = !1;
            e.Ed = null;
            l[6] ? (e.tp = l[6][0], e.At = l[6][1], e.am = l[6][2]) : (e.tp = null, e.At = 0, e.am = 0);
            l[7] ? e.Cd = l[7] : e.Cd = null;
            e.index = a;
            e.n = [];
            e.nn = [];
            e.mg = [new xb(e)];
            e.ff = 0;
            e.le = null;
            e.KC = 0;
            e.Xj = !0;
            e.Cp = yb;
            e.kf = zb;
            e.fE = Ab;
            e.da = Bb;
            e.Kl = Db;
            e.pi = Eb;
            e.uf = Fb;
            e.Mn = Gb;
            e.Ar = Hb;
            e.Fr = Ib;
            e.Dd = Kb;
            e.Gr = Lb;
            e.Kv = new jb(this.Kb, this.Jb);
            e.uv = !0;
            e.vv = !1;
            e.cb = {};
            e.toString = Mb;
            e.xb = [];
            b = 0;
            for (d = l[8].length; b < d; b++) {
                g = l[8][b];
                k = this.zg(g[1]);
                t = null;
                n = 0;
                for (f = this.xb.length; n < f; n++)
                    if (this.xb[n] instanceof k) {
                        t = this.xb[n];
                        break
                    }
                t || (t = new k(this), t.yx = [], t.Hs = new ca, t.J && t.J(), this.xb.push(t)); - 1 === t.yx.indexOf(e) && t.yx.push(e);
                n = new t.R(t, e);
                n.name = g[0];
                n.Ja = g[2];
                n.J();
                e.xb.push(n)
            }
            e.global = l[9];
            e.bs = l[10];
            e.ma = [];
            b = 0;
            for (d = l[12].length; b < d; b++) e.ma.push({
                id: l[12][b][0],
                name: l[12][b][1],
                Xb: -1,
                Re: !1,
                K: !0,
                index: b
            });
            e.xJ = l[13];
            this.Lt && !e.ca && !e.bs && p.Zg || e.J();
            e.name && (this.types[e.name] = e);
            this.T.push(e);
            p.ip && (b = new p.I(e), b.uid = this.yl++, b.ey = this.Ax++, b.Zh = 0, b.Qk = Nb, b.toString = Ob, b.A = l[14], b.J(), e.n.push(b), this.ag[b.uid.toString()] = b)
        }
        a = 0;
        for (h = c[4].length; a < h; a++)
            for (n = c[4][a], f = this.T[n[0]], b = 1, d = n.length; b < d; b++) l = this.T[n[b]], l.pb.push(f), f.yj.push(l);
        a = 0;
        for (h = c[28].length; a < h; a++) {
            n = c[28][a];
            f = [];
            b = 0;
            for (d = n.length; b < d; b++) f.push(this.T[n[b]]);
            b = 0;
            for (d = f.length; b < d; b++) f[b].cd = !0, f[b].Ed = f
        }
        if (0 < this.Jk)
            for (a = 0, h = this.T.length; a < h; a++)
                if (l = this.T[a], !l.ca && l.pb.length) {
                    l.Dn = Array(this.Jk);
                    l.$i = Array(this.Jk);
                    l.Zv = Array(this.Jk);
                    e = [];
                    b = t = k = g = 0;
                    for (d = l.pb.length; b < d; b++)
                        for (p = l.pb[b], l.Dn[p.Qf] = g, g += p.IG, l.$i[p.Qf] = k, k += p.rC, l.Zv[p.Qf] = t, t += p.XD, n = 0, f = p.ma.length; n < f; n++) e.push(Ba({}, p.ma[n]));
                    l.ma = e.concat(l.ma);
                    b = 0;
                    for (d = l.ma.length; b < d; b++) l.ma[b].index = b
                }
        a = 0;
        for (h = c[5].length; a < h; a++) l = c[5][a], b = new Pb(this, l), this.ss[b.name] = b, this.Hd.push(b);
        a = 0;
        for (h = c[6].length; a < h; a++) l = c[6][a], b = new Qb(this, l), this.$q[b.name] = b, this.Pf.push(b);
        a = 0;
        for (h = this.Pf.length; a < h; a++) this.Pf[a].Lb();
        a = 0;
        for (h = this.Pf.length; a < h; a++) this.Pf[a].Ht();
        a = 0;
        for (h = this.yp.length; a < h; a++) this.yp[a].Lb();
        G(this.yp);
        this.pC = c[7];
        this.or = c[8];
        this.$d = c[9];
        this.wk = 1;
        this.mD = c[13];
        this.rb = c[14];
        this.Jv = c[15];
        this.GG = c[17];
        this.Ts = c[20];
        this.qC = 0 < this.Ts;
        this.BF = c[22];
        this.Sd = this.hz = c[23];
        this.eD = c[24];
        this.JF = c[25];
        this.ob = c[27] && !this.Wf;
        this.np = Date.now();
        G(this.vo);
        this.IE()
    };
    var c = !1;
    k.prototype.Nt = function(a, h) {
        a.cocoonLazyLoad = !0;
        a.onerror = function(h) {
            c = a.Fv = !0;
            console && console.error && console.error("Error loading image '" + a.src + "': ", h)
        };
        this.oe ? a.src = h : a.src || ("undefined" !== typeof XAPKReader ? XAPKReader.get(h, function(c) {
            a.src = c
        }, function(b) {
            c = a.Fv = !0;
            console && console.error && console.error("Error extracting image '" + h + "' from expansion file: ", b)
        }) : (a.crossOrigin = "anonymous", this.Ay(a, h)));
        this.hk.push(a)
    };
    k.prototype.VD = function(c) {
        var a, h;
        a = 0;
        for (h = this.hk.length; a < h; a++)
            if (this.hk[a].HC === c) return this.hk[a];
        return null
    };
    var h = 0,
        p = !1;
    k.prototype.AE = function() {
        this.Pi && (h = this.Pi.jG(this.pC))
    };
    k.prototype.wv = function() {
        var c = h,
            a = 0,
            b = 0,
            d = !0,
            n, f, b = 0;
        for (n = this.hk.length; b < n; b++) {
            f = this.hk[b];
            var l = f.Nv;
            if (!l || 0 >= l) l = 5E4;
            c += l;
            f.src && (f.complete || f.loaded) && !f.Fv ? a += l : d = !1
        }
        d && this.JF && this.Pi && (p || (this.Pi.pG(), p = !0), b = this.Pi.gE(), a += b, b < h && (d = !1));
        this.Ea = 0 == c ? 1 : a / c;
        return d
    };
    var n = !1;
    k.prototype.go = function() {
        if (this.yb || this.S) {
            var a = this.yb || this.Vs;
            this.Bc && this.by();
            var h = window.innerWidth,
                b = window.innerHeight;
            this.qj === h && this.pj === b || this.setSize(h, b);
            this.Ea = 0;
            this.Tw = -1;
            var d = this;
            if (this.wv() && (4 !== this.bh || n)) this.BE();
            else {
                b = Date.now() - this.np;
                if (a) {
                    var f = this.width,
                        l = this.height,
                        h = this.devicePixelRatio;
                    if (3 > this.bh && (this.Vd || 500 <= b && this.Tw != this.Ea)) {
                        a.clearRect(0, 0, f, l);
                        var b = f / 2,
                            l = l / 2,
                            f = 0 === this.bh && this.ah.ro.complete,
                            e = 40 * h,
                            p = 0,
                            g = 80 * h,
                            k;
                        if (f) {
                            var t = this.ah.ro,
                                g = t.width * h;
                            k = t.height * h;
                            e = g / 2;
                            p = k / 2;
                            a.drawImage(t, qa(b - e), qa(l - p), g, k)
                        }
                        1 >= this.bh ? (b = qa(b - e) + .5, l = qa(l + (p + (f ? 12 * h : 0))) + .5, a.fillStyle = c ? "red" : "DodgerBlue", a.fillRect(b, l, Math.floor(g * this.Ea), 6 * h), a.strokeStyle = "black", a.strokeRect(b, l, g, 6 * h), a.strokeStyle = "white", a.strokeRect(b - 1 * h, l - 1 * h, g + 2 * h, 8 * h)) : 2 === this.bh && (a.font = this.oe ? "12pt ArialMT" : "12pt Arial", a.fillStyle = c ? "#f00" : "#999", a.wJ = "middle", h = Math.round(100 * this.Ea) + "%", f = a.measureText ? a.measureText(h) : null, a.fillText(h, b - (f ? f.width : 0) / 2, l));
                        this.Tw = this.Ea
                    } else if (4 === this.bh) {
                        this.jD(a);
                        m ? m(function() {
                            d.go()
                        }) : setTimeout(function() {
                            d.go()
                        }, 16);
                        return
                    }
                }
                setTimeout(function() {
                    d.go()
                }, this.Vd ? 10 : 100)
            }
        }
    };
    var t = -1,
        D = "undefined" === typeof cr_is_preview ? 200 : 0,
        F = !0,
        x = !1,
        u = 0,
        y = 0,
        C = "undefined" === typeof cr_is_preview ?
        3E3 : 0,
        B = null,
        w = null,
        z = 0;
    k.prototype.jD = function(a) {
        if (!n) {
            for (var h = Math.ceil(this.width), b = Math.ceil(this.height), d = this.ah.ro, f = this.ah.IF, l = this.ah.KG, e = 0; 4 > e; ++e)
                if (!d[e].complete || !f[e].complete || !l[e].complete) return;
            0 === z && (t = Date.now());
            var e = Date.now(),
                p = !1,
                k = a,
                m, q;
            F || x ? (a.clearRect(0, 0, h, b), B && B.width === h && B.height === b || (B = document.createElement("canvas"), B.width = h, B.height = b, w = B.getContext("2d")), k = w, p = !0, F && 1 === z && (t = Date.now())) : a.globalAlpha = 1;
            k.fillStyle = "#333333";
            k.fillRect(0, 0, h, b);
            256 < this.Dk ? (m = Ma(.22 * b, 105, .6 * h), q = .25 * m, k.drawImage(g(f, m), .5 * h - m / 2, .2 * b - q / 2, m, q), q = m = Math.min(.395 * b, .95 * h), k.drawImage(g(d, m), .5 * h - m / 2, .485 * b - q / 2, m, q), m = Ma(.22 * b, 105, .6 * h), q = .25 * m, k.drawImage(g(l, m), .5 * h - m / 2, .868 * b - q / 2, m, q), k.fillStyle = "#3C3C3C", m = h, q = Math.max(.005 * b, 2), k.fillRect(0, .8 * b - q / 2, m, q), k.fillStyle = c ? "red" : "#E0FF65", m = h * this.Ea, k.fillRect(.5 * h - m / 2, .8 * b - q / 2, m, q)) : (q = m = .55 * b, k.drawImage(g(d, m), .5 * h - m / 2, .45 * b - q / 2, m, q), k.fillStyle = "#3C3C3C", m = h, q = Math.max(.005 * b, 2), k.fillRect(0, .85 * b -
                q / 2, m, q), k.fillStyle = c ? "red" : "#E0FF65", m = h * this.Ea, k.fillRect(.5 * h - m / 2, .85 * b - q / 2, m, q));
            p && (F ? a.globalAlpha = 0 === z ? 0 : Math.min((e - t) / 300, 1) : x && (a.globalAlpha = Math.max(1 - (e - y) / 300, 0)), a.drawImage(B, 0, 0, h, b));
            F && 300 <= e - t && 2 <= z && (F = !1, u = e);
            !F && e - u >= C && !x && 1 <= this.Ea && (x = !0, y = e);
            if (x && e - y >= 300 + D || "undefined" !== typeof cr_is_preview && 1 <= this.Ea && 500 > Date.now() - t) n = !0, x = F = !1, this.ah = w = B = null;
            ++z
        }
    };
    k.prototype.BE = function() {
        this.Bc && (this.canvas.parentNode.removeChild(this.Bc), this.Bc = this.Vs = null);
        this.np =
            Date.now();
        this.fi = cb();
        var c, a, h;
        if (this.Lt)
            for (c = 0, a = this.T.length; c < a; c++) h = this.T[c], h.ca || h.bs || !h.G.Zg || h.J();
        else this.nj = !1;
        c = 0;
        for (a = this.Hd.length; c < a; c++) this.Hd[c].IC();
        2 <= this.ld && (c = this.Kb / this.Jb, a = this.width / this.height, this.wk = 2 !== this.ld && a > c || 2 === this.ld && a < c ? this.height / this.Jb : this.width / this.Kb);
        this.gw ? this.ss[this.gw].yt() : this.Hd[0].yt();
        this.Lt || (this.uj = 1, this.trigger(P.prototype.k.pu, null), window.C2_RegisterSW && window.C2_RegisterSW());
        navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide();
        c = 0;
        for (a = this.T.length; c < a; c++) h = this.T[c], h.Hx && h.Hx();
        document.hidden || document.webkitHidden || document.mozHidden || document.msHidden ? window.cr_setSuspended(!0) : this.Ra(!1);
        this.Sc && AppMobi.webview.execute("onGameReady();")
    };
    k.prototype.Ra = function(c, a, h) {
        if (this.eb) {
            var b = cb();
            if (h || !this.bl || c) {
                c || (m ? this.bt = m(this.Sy) : this.Bt = setTimeout(this.Sy, this.Wg ? 1 : 16));
                a = a || b;
                var d = this.ld;
                ((h = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement) && !this.Fd) || this.al) && 0 < this.Vh && (d = this.Vh);
                if (0 < d) {
                    var d = window.innerWidth,
                        n = window.innerHeight;
                    this.qj === d && this.pj === n || this.setSize(d, n)
                }
                this.Tb || (h ? (this.Gn || (this.tr = jQuery(this.canvas).css("margin") || "0", this.Gn = !0), this.Xk || this.bi || jQuery(this.canvas).css({
                    "margin-left": "" + Math.floor((screen.width - this.width / this.devicePixelRatio) / 2) + "px",
                    "margin-top": "" + Math.floor((screen.height - this.height / this.devicePixelRatio) / 2) + "px"
                })) : this.Gn ? (this.Xk || this.bi || jQuery(this.canvas).css("margin", this.tr),
                    this.tr = "", this.Gn = !1, 0 === this.ld && this.setSize(Math.round(this.Gx / this.devicePixelRatio), Math.round(this.Fx / this.devicePixelRatio), !0)) : (this.Gx = this.width, this.Fx = this.height));
                this.nj && (h = this.wv(), this.uj = this.Ea, h && (this.nj = !1, this.Ea = 1, this.trigger(P.prototype.k.pu, null), window.C2_RegisterSW && window.C2_RegisterSW()));
                this.bF(a);
                !this.xa && !this.Vd || this.ks || this.Yl || c || (this.xa = !1, this.S ? this.wc() : this.kd(), this.Vl && (this.canvas && this.canvas.toDataURL && (this.My = this.canvas.toDataURL(this.Vl[0], this.Vl[1]), window.cr_onSnapshot && window.cr_onSnapshot(this.My), this.trigger(P.prototype.k.qA, null)), this.Vl = null));
                this.iJ || (this.ze++, this.Th++, this.Kn++);
                this.tl += cb() - b
            }
        }
    };
    k.prototype.bF = function(c) {
        var a, h, b, d, n, f, l, e;
        1E3 <= c - this.fi && (this.fi += 1E3, 1E3 <= c - this.fi && (this.fi = c), this.sr = this.Kn, this.Kn = 0, this.Qq = this.tl, this.tl = 0);
        a = 0;
        0 !== this.co && (a = c - this.co, 0 > a && (a = 0), this.Nh = a /= 1E3, .5 < this.Nh ? this.Nh = 0 : this.Nh > 1 / this.wx && (this.Nh = 1 / this.wx));
        this.co = c;
        this.Rg = this.Nh * this.$j;
        this.gb.add(this.Rg);
        this.ug.add(a);
        c = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement || this.al) && !this.Fd;
        2 <= this.ld || c && 0 < this.Vh ? (a = this.Kb / this.Jb, h = this.width / this.height, b = this.ld, c && 0 < this.Vh && (b = this.Vh), this.wk = 2 !== b && h > a || 2 === b && h < a ? this.height / this.Jb : this.width / this.Kb, this.eb && (this.eb.ty(this.eb.scrollX), this.eb.uy(this.eb.scrollY))) : this.wk = this.fj ? this.devicePixelRatio : 1;
        this.Hc();
        this.Wd++;
        this.xf.aG();
        this.Wd--;
        this.Hc();
        this.Wd++;
        h = this.Ex.qh();
        c = 0;
        for (a = h.length; c < a; c++) h[c].sJ();
        c = 0;
        for (a = this.T.length; c < a; c++)
            if (f = this.T[c], !f.ca && (f.xb.length || f.pb.length))
                for (h = 0, b = f.n.length; h < b; h++)
                    for (l = f.n[h], d = 0, n = l.Ca.length; d < n; d++) l.Ca[d].Ra();
        c = 0;
        for (a = this.T.length; c < a; c++)
            if (f = this.T[c], !f.ca && (f.xb.length || f.pb.length))
                for (h = 0, b = f.n.length; h < b; h++)
                    for (l = f.n[h], d = 0, n = l.Ca.length; d < n; d++) e = l.Ca[d], e.HF && e.HF();
        h = this.Ls.qh();
        c = 0;
        for (a = h.length; c < a; c++) h[c].Ra();
        this.Wd--;
        this.CE();
        for (c = 0; this.Kh && 10 > c++;) this.Sv(this.Kh);
        c = 0;
        for (a = this.Pf.length; c < a; c++) this.Pf[c].Pr = !1;
        this.eb.Rh && this.eb.Rh.Wb();
        G(this.jy);
        this.rs = !1;
        this.Wd++;
        c = 0;
        for (a = this.T.length; c < a; c++)
            if (f = this.T[c], !f.ca && (f.xb.length || f.pb.length))
                for (h = 0, b = f.n.length; h < b; h++)
                    for (l = f.n[h], d = 0, n = l.Ca.length; d < n; d++) e = l.Ca[d], e.em && e.em();
        h = this.Ms.qh();
        c = 0;
        for (a = h.length; c < a; c++) h[c].em();
        this.Wd--
    };
    k.prototype.Sv = function(c) {
        var a = this.eb;
        this.eb.qG();
        var h, b, d;
        if (this.S)
            for (h = 0, b = this.T.length; h < b; h++) d = this.T[h], d.ca || !d.Bp || d.global && 0 !== d.n.length || -1 !== c.Wk.indexOf(d) || d.Bp();
        a == c && G(this.xf.Gc);
        G(this.jy);
        this.ly(!0);
        c.yt();
        this.ly(!1);
        this.rs = this.xa = !0;
        this.Hc()
    };
    k.prototype.ly = function(c) {
        var a, h, b, d, f, n, l, e, p;
        a = 0;
        for (h = this.xb.length; a < h; a++) b = this.xb[a], c ? b.zl && b.zl() : b.Cl && b.Cl();
        a = 0;
        for (h = this.T.length; a < h; a++)
            if (b = this.T[a], b.global || b.G.ip)
                for (d = 0, f = b.n.length; d < f; d++)
                    if (n = b.n[d], c ? n.zl && n.zl() : n.Cl && n.Cl(), n.Ca)
                        for (l = 0, e = n.Ca.length; l < e; l++) p = n.Ca[l], c ? p.zl && p.zl() : p.Cl && p.Cl()
    };
    k.prototype.fm = function(c) {
        this.Ls.add(c)
    };
    k.prototype.wG = function(c) {
        this.Ms.add(c)
    };
    k.prototype.Ne = function(c) {
        return c && -1 !== c.xl ? this.Nh * c.xl : this.Rg
    };
    k.prototype.kd = function() {
        this.eb.kd(this.yb);
        this.Sc && this.yb.present()
    };
    k.prototype.wc = function() {
        this.ob && (this.Oh = 1, this.eb.Vi(this.S));
        this.eb.wc(this.S);
        this.S.LF()
    };
    k.prototype.Xm = function(c) {
        c && this.rn.push(c)
    };
    k.prototype.gt = function(c) {
        La(this.rn, c)
    };
    k.prototype.nc = function(c) {
        c = c.toString();
        return this.ag.hasOwnProperty(c) ? this.ag[c] : null
    };
    var v = [];
    k.prototype.Ce = function(c) {
        var a, h;
        a = c.type.name;
        var b = null;
        if (this.Mh.hasOwnProperty(a)) {
            if (b = this.Mh[a], b.contains(c)) return
        } else b = v.length ? v.pop() : new ca, this.Mh[a] = b;
        b.add(c);
        this.Vg = !0;
        if (c.cd)
            for (a = 0, h = c.siblings.length; a < h; a++) this.Ce(c.siblings[a]);
        this.as && b.fk.push(c);
        this.$r || (this.Wd++, this.trigger(Object.getPrototypeOf(c.type.G).k.yA, c), this.Wd--)
    };
    k.prototype.Hc = function() {
        if (this.Vg) {
            var c, a, h, b, d, n;
            this.as = !0;
            h = 0;
            for (d = this.ef.length; h < d; ++h)
                for (c = this.ef[h], a = c.type, a.n.push(c), b = 0, n = a.pb.length; b < n; ++b) a.pb[b].n.push(c), a.pb[b].Xj = !0;
            G(this.ef);
            this.bA();
            bb(this.Mh);
            this.Vg = this.as = !1
        }
    };
    k.prototype.bA = function() {
        for (var c in this.Mh) this.Mh.hasOwnProperty(c) && this.wz(this.Mh[c])
    };
    k.prototype.wz = function(c) {
        var a = c.qh(),
            h = a[0].type,
            b, d, n, f, l, e;
        db(h.n, c);
        h.Xj = !0;
        0 === h.n.length && (h.vv = !1);
        b = 0;
        for (d = h.pb.length; b < d; ++b) e = h.pb[b], db(e.n, c), e.Xj = !0;
        b = 0;
        for (d = this.xf.Gc.length; b < d; ++b)
            if (l = this.xf.Gc[b], l.Tc.hasOwnProperty(h.index) && db(l.Tc[h.index].mf, c), !h.ca)
                for (n = 0, f = h.pb.length; n < f; ++n) e = h.pb[n], l.Tc.hasOwnProperty(e.index) && db(l.Tc[e.index].mf, c);
        if (l = a[0].C) {
            if (l.he)
                for (n = l.n, b = 0, d = n.length; b < d; ++b) f = n[b], c.contains(f) && (f.ib(), l.Ec.update(f, f.xd, null), f.xd.set(0, 0, -1, -1));
            db(l.n, c);
            l.Ql(0)
        }
        for (b = 0; b < a.length; ++b) this.vz(a[b], h);
        c.clear();
        v.push(c);
        this.xa = !0
    };
    k.prototype.vz = function(c, a) {
        var h, b, d;
        h = 0;
        for (b = this.rn.length; h < b; ++h) this.rn[h](c);
        c.Og && a.Kv.update(c, c.Og, null);
        (h = c.C) && h.Qj(c, !0);
        if (c.Ca)
            for (h = 0, b = c.Ca.length; h < b; ++h) d = c.Ca[h], d.se && d.se(), d.behavior.Hs.remove(c);
        this.Ex.remove(c);
        this.Ls.remove(c);
        this.Ms.remove(c);
        c.se && c.se();
        this.ag.hasOwnProperty(c.uid.toString()) && delete this.ag[c.uid.toString()];
        this.wo--;
        100 > a.nn.length && a.nn.push(c)
    };
    k.prototype.Rq = function(c, a, h, b) {
        if (c.ca) {
            var d = qa(Math.random() * c.yj.length);
            return this.Rq(c.yj[d], a, h, b)
        }
        return c.le ? this.Pg(c.le, a, !1, h, b, !1) : null
    };
    var r = [];
    k.prototype.Pg = function(c, a, h, b, d, n) {
        var f, l, e, p;
        if (!c) return null;
        var g = this.T[c[1]],
            k = g.G.Zg;
        if (this.nj && k && !g.bs || k && !this.S && 11 === c[0][11]) return null;
        var t = a;
        k || (a = null);
        var m;
        g.nn.length ? (m = g.nn.pop(), m.Mb = !0, g.G.I.call(m, g)) : (m = new g.G.I(g), m.Mb = !1);
        !h || n || this.ag.hasOwnProperty(c[2].toString()) ? m.uid = this.yl++ : m.uid = c[2];
        this.ag[m.uid.toString()] = m;
        m.ey = this.Ax++;
        m.Zh = g.n.length;
        f = 0;
        for (l = this.ef.length; f < l; ++f) this.ef[f].type === g && m.Zh++;
        m.Qk = Nb;
        m.toString = Ob;
        e = c[3];
        if (m.Mb) bb(m.cb);
        else {
            m.cb = {};
            if ("undefined" !== typeof cr_is_preview)
                for (m.Fw = [], m.Fw.length = e.length, f = 0, l = e.length; f < l; f++) m.Fw[f] = e[f][1];
            m.ec = [];
            m.ec.length = e.length
        }
        f = 0;
        for (l = e.length; f < l; f++) m.ec[f] = e[f][0];
        if (k) {
            var q = c[0];
            m.x = ha(b) ? q[0] : b;
            m.y = ha(d) ? q[1] : d;
            m.z = q[2];
            m.width = q[3];
            m.height = q[4];
            m.depth = q[5];
            m.u = q[6];
            m.opacity = q[7];
            m.nd = q[8];
            m.od = q[9];
            m.Jc = q[10];
            f = q[11];
            !this.S && g.ma.length && (m.Jc = f);
            m.zk = lb(m.Jc);
            this.X && mb(m, m.Jc, this.X);
            if (m.Mb) {
                f = 0;
                for (l = q[12].length; f < l; f++)
                    for (e = 0, p = q[12][f].length; e < p; e++) m.Bb[f][e] = q[12][f][e];
                m.lb.set(0, 0, 0, 0);
                m.Og.set(0, 0, -1, -1);
                m.xd.set(0, 0, -1, -1);
                m.Hf.Rl(m.lb);
                G(m.Aq)
            } else {
                m.Bb = q[12].slice(0);
                f = 0;
                for (l = m.Bb.length; f < l; f++) m.Bb[f] = q[12][f].slice(0);
                m.Xa = [];
                m.Eg = [];
                m.Eg.length = g.ma.length;
                m.lb = new va(0, 0, 0, 0);
                m.Og = new va(0, 0, -1, -1);
                m.xd = new va(0, 0, -1, -1);
                m.Hf = new wa;
                m.Aq = [];
                m.za = Rb;
                m.lC = Sb;
                m.Pd = Tb;
                m.ib = Ub;
                m.cz = Vb;
                m.FG = Wb;
                m.lf = Xb
            }
            m.zG = !1;
            m.BG = 0;
            m.AG = 0;
            m.yG = null;
            14 === q.length && (m.zG = !0, m.BG = q[13][0], m.AG = q[13][1], m.yG = q[13][2]);
            f = 0;
            for (l = g.ma.length; f < l; f++) m.Eg[f] = !0;
            m.kg = !0;
            m.Ve = Yb;
            m.Ve();
            m.dz = !!m.Xa.length;
            m.Zm = !0;
            m.Hq = !0;
            g.uv = !0;
            m.visible = !0;
            m.xl = -1;
            m.C = a;
            m.We = a.n.length;
            m.Oh = 0;
            "undefined" === typeof m.df && (m.df = null);
            this.xa = m.yk = !0
        }
        var x;
        G(r);
        f = 0;
        for (l = g.pb.length; f < l; f++) r.push.apply(r, g.pb[f].xb);
        r.push.apply(r, g.xb);
        if (m.Mb)
            for (f = 0, l = r.length; f < l; f++) {
                var u = r[f];
                x = m.Ca[f];
                x.Mb = !0;
                u.behavior.I.call(x, u, m);
                q = c[4][f];
                e = 0;
                for (p = q.length; e < p; e++) x.A[e] = q[e];
                x.J();
                u.behavior.Hs.add(m)
            } else
                for (m.Ca = [], f = 0, l = r.length; f < l; f++) u = r[f], x = new u.behavior.I(u, m), x.Mb = !1, x.A = c[4][f].slice(0), x.J(), m.Ca.push(x), u.behavior.Hs.add(m);
        q = c[5];
        if (m.Mb)
            for (f = 0, l = q.length; f < l; f++) m.A[f] = q[f];
        else m.A = q.slice(0);
        this.ef.push(m);
        this.Vg = !0;
        a && (a.vk(m, !0), 1 !== a.bg || 1 !== a.dg) && (g.vv = !0);
        this.wo++;
        if (g.cd) {
            if (m.cd = !0, m.Mb ? G(m.siblings) : m.siblings = [], !h && !n) {
                f = 0;
                for (l = g.Ed.length; f < l; f++)
                    if (g.Ed[f] !== g) {
                        if (!g.Ed[f].le) return null;
                        m.siblings.push(this.Pg(g.Ed[f].le, t, !1, k ? m.x : b, k ? m.y : d, !0))
                    }
                f = 0;
                for (l = m.siblings.length; f < l; f++)
                    for (m.siblings[f].siblings.push(m), e = 0; e < l; e++) f !== e && m.siblings[f].siblings.push(m.siblings[e])
            }
        } else m.cd = !1, m.siblings = null;
        m.J();
        f = 0;
        for (l = m.Ca.length; f < l; f++) m.Ca[f].GF && m.Ca[f].GF();
        return m
    };
    k.prototype.Hr = function(c) {
        var a, h;
        a = 0;
        for (h = this.eb.ta.length; a < h; a++) {
            var b = this.eb.ta[a];
            if (ob(b.name, c)) return b
        }
        return null
    };
    k.prototype.Nk = function(c) {
        c = qa(c);
        0 > c && (c = 0);
        c >= this.eb.ta.length && (c = this.eb.ta.length - 1);
        return this.eb.ta[c]
    };
    k.prototype.Nq = function(c) {
        var a, h;
        a = 0;
        for (h = c.length; a < h; a++) c[a].da().qa = !0
    };
    k.prototype.Kl = function(c) {
        var a, h;
        a = 0;
        for (h = c.length; a < h; a++) c[a].Kl()
    };
    k.prototype.pi = function(c) {
        var a, h;
        a = 0;
        for (h = c.length; a < h; a++) c[a].pi()
    };
    k.prototype.uf = function(c) {
        var a, h;
        a = 0;
        for (h = c.length; a < h; a++) c[a].uf()
    };
    k.prototype.rp = function(c, a, h) {
        var b = c.da(),
            d, f, n, l, e = this.Ib().Ab.te,
            p, g, m;
        if (b.qa)
            for (b.qa = !1, G(b.n), d = 0, l = c.n.length; d < l; d++) n = c.n[d], n.ib(), p = n.C.uc(a, h, !0), g = n.C.uc(a, h, !1), n.Pd(p, g) ? b.n.push(n) : e && b.ya.push(n);
        else {
            f = 0;
            m = e ? b.ya : b.n;
            d = 0;
            for (l = m.length; d < l; d++) n = m[d], n.ib(), p = n.C.uc(a, h, !0), g = n.C.uc(a, h, !1), n.Pd(p, g) && (e ? b.n.push(n) : (b.n[f] = b.n[d], f++));
            m.length = f
        }
        c.Dd();
        return b.Or()
    };
    new wa;
    new va(0, 0, 0, 0);
    k.prototype.Yy = function(c, a) {
        if (!a) return !1;
        var h, b, d, f, n;
        h = 0;
        for (b = c.xb.length; h < b; h++)
            if (c.xb[h].behavior instanceof a) return !0;
        if (!c.ca)
            for (h = 0, b = c.pb.length; h < b; h++)
                for (n = c.pb[h], d = 0, f = n.xb.length; d < f; d++)
                    if (n.xb[d].behavior instanceof a) return !0;
        return !1
    };
    k.prototype.Ft = function(c) {
        return this.Yy(c, qc.VH)
    };
    k.prototype.Gt = function(c) {
        return this.Yy(c, qc.ZH)
    };
    var L = -1;
    k.prototype.trigger = function(c, a, h) {
        if (!this.eb) return !1;
        var b = this.eb.Rh;
        if (!b) return !1;
        var d = !1,
            f, n, l;
        L++;
        var e = b.Vq;
        n = 0;
        for (l = e.length; n < l; ++n) f = this.Uy(c, a, e[n], h), d = d || f;
        f = this.Uy(c, a, b, h);
        L--;
        return d || f
    };
    k.prototype.Uy = function(c, a, h, b) {
        var d = !1,
            f, n, l, e;
        if (a)
            for (l = this.Dt(c, a, a.type.name, h, b), d = d || l, e = a.type.pb, f = 0, n = e.length; f < n; ++f) l = this.Dt(c, a, e[f].name, h, b), d = d || l;
        else l = this.Dt(c, a, "system", h, b), d = d || l;
        return d
    };
    k.prototype.Dt = function(c, a, h, b, d) {
        var f, n = !1,
            l = !1,
            l = "undefined" !== typeof d,
            e = (l ? b.aw : b.Vy)[h];
        if (!e) return n;
        var p = null;
        b = 0;
        for (f = e.length; b < f; ++b)
            if (e[b].method == c) {
                p = e[b].Fk;
                break
            }
        if (!p) return n;
        var g;
        l ? g = p[d] : g = p;
        if (!g) return null;
        b = 0;
        for (f = g.length; b < f; b++) c = g[b][0], d = g[b][1], l = this.TD(a, h, c, d), n = n || l;
        return n
    };
    k.prototype.TD = function(c, a, h, b) {
        var d, f, n = !1;
        this.Et++;
        var l = this.Ib().Ab;
        l && this.Kl(l.mh);
        var e = 1 < this.Et;
        this.Kl(h.mh);
        e && this.NF();
        var p = this.Uo(h);
        p.Ab = h;
        c && (d = this.types[a].da(), d.qa = !1, G(d.n), d.n[0] = c, this.types[a].Dd());
        c = !0;
        if (h.parent) {
            a = p.Qy;
            for (d = h.parent; d;) a.push(d), d = d.parent;
            a.reverse();
            d = 0;
            for (f = a.length; d < f; d++)
                if (!a[d].cG()) {
                    c = !1;
                    break
                }
        }
        c && (this.Th++, h.te ? h.bG(b) : h.Wb(), n = n || p.ei);
        this.Oo();
        e && this.EF();
        this.uf(h.mh);
        l && this.uf(l.mh);
        this.Vg && 0 === this.Wd && 0 === L && !this.ds && this.Hc();
        this.Et--;
        return n
    };
    k.prototype.Cr = function() {
        var c = this.Ib();
        return c.Ab.Zb[c.Yb]
    };
    k.prototype.aE = function() {
        var c = this.Ib();
        return c.Ab.je[c.Ic]
    };
    k.prototype.NF = function() {
        this.qo++;
        this.qo >= this.ys.length && this.ys.push([])
    };
    k.prototype.EF = function() {
        this.qo--
    };
    k.prototype.qw = function() {
        return this.ys[this.qo]
    };
    k.prototype.Uo = function(c) {
        this.tn++;
        this.tn >= this.Zq.length && this.Zq.push(new Zb);
        var a = this.Ib();
        a.reset(c);
        return a
    };
    k.prototype.Oo = function() {
        this.tn--
    };
    k.prototype.Ib = function() {
        return this.Zq[this.tn]
    };
    k.prototype.OF = function(c) {
        this.wj++;
        this.wj >= this.ul.length && this.ul.push(aa({
            name: c,
            index: 0,
            Nb: !1
        }));
        var a = this.Dr();
        a.name = c;
        a.index = 0;
        a.Nb = !1;
        return a
    };
    k.prototype.FF = function() {
        this.wj--
    };
    k.prototype.Dr = function() {
        return this.ul[this.wj]
    };
    k.prototype.rw = function(c, a) {
        for (var h, b, d, f, n, l; a;) {
            h = 0;
            for (b = a.xe.length; h < b; h++)
                if (l = a.xe[h], l instanceof $b && ob(c, l.name)) return l;
            a = a.parent
        }
        h = 0;
        for (b = this.Pf.length; h < b; h++)
            for (n = this.Pf[h], d = 0, f = n.Sg.length; d < f; d++)
                if (l = n.Sg[d], l instanceof $b && ob(c, l.name)) return l;
        return null
    };
    k.prototype.sw = function(c) {
        var a, h;
        a = 0;
        for (h = this.Hd.length; a < h; a++)
            if (this.Hd[a].Ja === c) return this.Hd[a];
        return null
    };
    k.prototype.On = function(c) {
        var a, h;
        a = 0;
        for (h = this.T.length; a < h; a++)
            if (this.T[a].Ja === c) return this.T[a];
        return null
    };
    k.prototype.bE = function(c) {
        var a, h;
        a = 0;
        for (h = this.Hg.length; a < h; a++)
            if (this.Hg[a].Ja === c) return this.Hg[a];
        return null
    };
    k.prototype.MC = function(c, a) {
        this.Vl = [c, a];
        this.xa = !0
    };
    k.prototype.CE = function() {
        var c = this,
            h = this.nt,
            d = this.Xf,
            f = this.lo,
            n = !1;
        this.Ly && (n = !0, h = "__c2_continuouspreview", this.Ly = !1);
        if (h.length) {
            this.Hc();
            d = this.gG();
            if (e() && !this.Vd) b(h, d, function() {
                fa("Saved state to IndexedDB storage (" + d.length + " bytes)");
                c.Xf = d;
                c.trigger(P.prototype.k.Xp, null);
                c.Xf = "";
                n && l()
            }, function(a) {
                try {
                    localStorage.setItem("__c2save_" + h, d), fa("Saved state to WebStorage (" + d.length + " bytes)"), c.Xf = d, c.trigger(P.prototype.k.Xp, null), c.Xf = "", n && l()
                } catch (b) {
                    fa("Failed to save game state: " + a + "; " + b), c.trigger(P.prototype.k.vu, null)
                }
            });
            else try {
                localStorage.setItem("__c2save_" + h, d), fa("Saved state to WebStorage (" + d.length + " bytes)"), c.Xf = d, this.trigger(P.prototype.k.Xp, null), c.Xf = "", n && l()
            } catch (p) {
                fa("Error saving to WebStorage: " + p), c.trigger(P.prototype.k.vu, null)
            }
            this.lo = this.nt = "";
            this.hc = null
        }
        if (f.length) {
            if (e() && !this.Vd) a(f, function(a) {
                a ? (c.hc = a, fa("Loaded state from IndexedDB storage (" + c.hc.length + " bytes)")) : (c.hc = localStorage.getItem("__c2save_" + f) || "", fa("Loaded state from WebStorage (" + c.hc.length + " bytes)"));
                c.Yl = !1;
                c.hc || (c.hc = null, c.trigger(P.prototype.k.wm, null))
            }, function() {
                c.hc = localStorage.getItem("__c2save_" + f) || "";
                fa("Loaded state from WebStorage (" +
                    c.hc.length + " bytes)");
                c.Yl = !1;
                c.hc || (c.hc = null, c.trigger(P.prototype.k.wm, null))
            });
            else {
                try {
                    this.hc = localStorage.getItem("__c2save_" + f) || "", fa("Loaded state from WebStorage (" + this.hc.length + " bytes)")
                } catch (g) {
                    this.hc = null
                }
                this.Yl = !1;
                c.hc || (c.hc = null, c.trigger(P.prototype.k.wm, null))
            }
            this.nt = this.lo = ""
        }
        null !== this.hc && (this.Hc(), this.aF(this.hc) ? (this.Xf = this.hc, this.trigger(P.prototype.k.IA, null), this.Xf = "") : c.trigger(P.prototype.k.wm, null), this.hc = null)
    };
    k.prototype.gG = function() {
        var c, a, h, b, d, n, l, e = {
            c2save: !0,
            version: 1,
            rt: {
                time: this.gb.aa,
                walltime: this.ug.aa,
                timescale: this.$j,
                tickcount: this.ze,
                execcount: this.Th,
                next_uid: this.yl,
                running_layout: this.eb.Ja,
                start_time_offset: Date.now() - this.np
            },
            types: {},
            layouts: {},
            events: {
                groups: {},
                cnds: {},
                acts: {},
                vars: {}
            }
        };
        c = 0;
        for (a = this.T.length; c < a; c++)
            if (d = this.T[c], !d.ca && !this.Ft(d)) {
                n = {
                    instances: []
                };
                $a(d.cb) && (n.ex = f(d.cb));
                h = 0;
                for (b = d.n.length; h < b; h++) n.instances.push(this.lt(d.n[h]));
                e.types[d.Ja.toString()] = n
            }
        c = 0;
        for (a = this.Hd.length; c < a; c++) h = this.Hd[c], e.layouts[h.Ja.toString()] = h.ja();
        b = e.events.groups;
        c = 0;
        for (a = this.Hg.length; c < a; c++) h = this.Hg[c], b[h.Ja.toString()] = this.Pn[h.Sk].Rk;
        a = e.events.cnds;
        for (l in this.Ng) this.Ng.hasOwnProperty(l) && (c = this.Ng[l], $a(c.cb) && (a[l] = {
            ex: f(c.cb)
        }));
        a = e.events.acts;
        for (l in this.Fg) this.Fg.hasOwnProperty(l) && (c = this.Fg[l], $a(c.cb) && (a[l] = {
            ex: f(c.cb)
        }));
        a = e.events.vars;
        for (l in this.gk) this.gk.hasOwnProperty(l) && (c = this.gk[l], c.$n || c.parent && !c.gl || (a[l] = c.data));
        e.system = this.xf.ja();
        return JSON.stringify(e)
    };
    k.prototype.iy = function() {
        var c, a, h, b, d, f;
        this.ag = {};
        c = 0;
        for (a = this.T.length; c < a; c++)
            if (h = this.T[c], !h.ca)
                for (b = 0, d = h.n.length; b < d; b++) f = h.n[b], this.ag[f.uid.toString()] = f
    };
    k.prototype.aF = function(c) {
        var a;
        try {
            a = JSON.parse(c)
        } catch (h) {
            return !1
        }
        if (!a.c2save || 1 < a.version) return !1;
        this.Zk = !0;
        c = a.rt;
        this.gb.reset();
        this.gb.aa = c.time;
        this.ug.reset();
        this.ug.aa = c.walltime || 0;
        this.$j = c.timescale;
        this.ze = c.tickcount;
        this.Th = c.execcount;
        this.np = Date.now() - c.start_time_offset;
        var b = c.running_layout;
        if (b !== this.eb.Ja)
            if (b = this.sw(b)) this.Sv(b);
            else return;
        var d, f, n, l, e, p, g;
        p = a.types;
        for (f in p)
            if (p.hasOwnProperty(f) && (l = this.On(parseInt(f, 10))) && !l.ca && !this.Ft(l)) {
                p[f].ex ? l.cb = p[f].ex : bb(l.cb);
                e = l.n;
                n = p[f].instances;
                b = 0;
                for (d = oa(e.length, n.length); b < d; b++) this.no(e[b], n[b]);
                b = n.length;
                for (d = e.length; b < d; b++) this.Ce(e[b]);
                b = e.length;
                for (d = n.length; b < d; b++) {
                    e = null;
                    if (l.G.Zg && (e = this.eb.Nn(n[b].w.l), !e)) continue;
                    e = this.Pg(l.le, e, !1, 0, 0, !0);
                    this.no(e, n[b])
                }
                l.Xj = !0
            }
        this.Hc();
        this.iy();
        d = a.layouts;
        for (f in d) d.hasOwnProperty(f) && (b = this.sw(parseInt(f, 10))) && b.ua(d[f]);
        d = a.events.groups;
        for (f in d) d.hasOwnProperty(f) && (b = this.bE(parseInt(f, 10))) && this.Pn[b.Sk] && this.Pn[b.Sk].zy(d[f]);
        b = a.events.cnds;
        for (f in this.Ng) this.Ng.hasOwnProperty(f) && (b.hasOwnProperty(f) ? this.Ng[f].cb = b[f].ex : this.Ng[f].cb = {});
        b = a.events.acts;
        for (f in this.Fg) this.Fg.hasOwnProperty(f) && (b.hasOwnProperty(f) ? this.Fg[f].cb = b[f].ex : this.Fg[f].cb = {});
        b = a.events.vars;
        for (f in b) b.hasOwnProperty(f) && this.gk.hasOwnProperty(f) && (this.gk[f].data = b[f]);
        this.yl = c.next_uid;
        this.Zk = !1;
        b = 0;
        for (d = this.Fn.length; b < d; ++b) e = this.Fn[b], this.trigger(Object.getPrototypeOf(e.type.G).k.zh, e);
        G(this.Fn);
        this.xf.ua(a.system);
        b = 0;
        for (d = this.T.length; b < d; b++)
            if (l = this.T[b], !l.ca && !this.Ft(l))
                for (a = 0, f = l.n.length; a < f; a++) {
                    e = l.n[a];
                    if (l.cd)
                        for (p = e.Qk(), G(e.siblings), c = 0, n = l.Ed.length; c < n; c++) g = l.Ed[c], l !== g && e.siblings.push(g.n[p]);
                    e.bd && e.bd();
                    if (e.Ca)
                        for (c = 0, n = e.Ca.length; c < n; c++) p = e.Ca[c], p.bd && p.bd()
                }
        return this.xa = !0
    };
    k.prototype.lt = function(c, a) {
        var h, b, d, n, l;
        n = c.type;
        d = n.G;
        var e = {};
        a ? e.c2 = !0 : e.uid = c.uid;
        $a(c.cb) && (e.ex = f(c.cb));
        if (c.ec && c.ec.length)
            for (e.ivs = {}, h = 0, b = c.ec.length; h < b; h++) e.ivs[c.type.Yr[h].toString()] = c.ec[h];
        if (d.Zg) {
            d = {
                x: c.x,
                y: c.y,
                w: c.width,
                h: c.height,
                l: c.C.Ja,
                zi: c.lf()
            };
            0 !== c.u && (d.a = c.u);
            1 !== c.opacity && (d.o = c.opacity);
            .5 !== c.nd && (d.hX = c.nd);
            .5 !== c.od && (d.hY = c.od);
            0 !== c.Jc && (d.bm = c.Jc);
            c.visible || (d.v = c.visible);
            c.yk || (d.ce = c.yk); - 1 !== c.xl && (d.mts = c.xl);
            if (n.ma.length)
                for (d.fx = [], h = 0, b = n.ma.length; h < b; h++) l = n.ma[h], d.fx.push({
                    name: l.name,
                    active: c.Eg[l.index],
                    params: c.Bb[l.index]
                });
            e.w = d
        }
        if (c.Ca && c.Ca.length)
            for (e.behs = {}, h = 0, b = c.Ca.length; h < b; h++) n = c.Ca[h], n.ja && (e.behs[n.type.Ja.toString()] = n.ja());
        c.ja && (e.data = c.ja());
        return e
    };
    k.prototype.dE = function(c, a) {
        var h, b;
        h = 0;
        for (b = c.Yr.length; h < b; h++)
            if (c.Yr[h] === a) return h;
        return -1
    };
    k.prototype.$D = function(c, a) {
        var h, b;
        h = 0;
        for (b = c.Ca.length; h < b; h++)
            if (c.Ca[h].type.Ja === a) return h;
        return -1
    };
    k.prototype.no = function(c, a, h) {
        var b, d, f, n, l;
        l = c.type;
        n = l.G;
        if (h) {
            if (!a.c2) return
        } else c.uid = a.uid;
        a.ex ? c.cb = a.ex : bb(c.cb);
        if (d = a.ivs)
            for (b in d) d.hasOwnProperty(b) && (f = this.dE(l, parseInt(b, 10)), 0 > f || f >= c.ec.length || (c.ec[f] = d[b]));
        if (n.Zg) {
            f = a.w;
            c.C.Ja !== f.l && (d = c.C, c.C = this.eb.Nn(f.l), c.C ? (d.Qj(c, !0), c.C.vk(c, !0), c.za(), c.C.Ql(0)) : (c.C = d, h || this.Ce(c)));
            c.x = f.x;
            c.y = f.y;
            c.width = f.w;
            c.height = f.h;
            c.We = f.zi;
            c.u = f.hasOwnProperty("a") ? f.a : 0;
            c.opacity = f.hasOwnProperty("o") ? f.o : 1;
            c.nd = f.hasOwnProperty("hX") ? f.hX : .5;
            c.od = f.hasOwnProperty("hY") ? f.hY : .5;
            c.visible = f.hasOwnProperty("v") ? f.v : !0;
            c.yk = f.hasOwnProperty("ce") ? f.ce : !0;
            c.xl = f.hasOwnProperty("mts") ? f.mts : -1;
            c.Jc = f.hasOwnProperty("bm") ? f.bm : 0;
            c.zk = lb(c.Jc);
            this.X && mb(c, c.Jc, this.X);
            c.za();
            if (f.hasOwnProperty("fx"))
                for (h = 0, d = f.fx.length; h < d; h++) n = l.Fr(f.fx[h].name), 0 > n || (c.Eg[n] = f.fx[h].active, c.Bb[n] = f.fx[h].params);
            c.Ve()
        }
        if (l = a.behs)
            for (b in l) l.hasOwnProperty(b) && (h = this.$D(c, parseInt(b, 10)), 0 > h || c.Ca[h].ua(l[b]));
        a.data && c.ua(a.data)
    };
    k.prototype.bw = function(c, a, h) {
        window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + "www/" + c, function(c) {
            c.file(a, h)
        }, h)
    };
    k.prototype.ew = function(c, a) {
        this.bw("data.js", function(h) {
            var b = new FileReader;
            b.onload = function(a) {
                c(a.target.result)
            };
            b.onerror = a;
            b.readAsText(h)
        }, a)
    };
    var N = [],
        J = 0;
    k.prototype.Cs = function() {
        if (N.length && !(8 <= J)) {
            J++;
            var c = N.shift();
            this.QC(c.filename, c.tG, c.qD)
        }
    };
    k.prototype.dw = function(c, a, h) {
        var b = this;
        N.push({
            filename: c,
            tG: function(c) {
                J--;
                b.Cs();
                a(c)
            },
            qD: function(c) {
                J--;
                b.Cs();
                h(c)
            }
        });
        this.Cs()
    };
    k.prototype.QC = function(c, a, h) {
        this.bw(c, function(c) {
            var h = new FileReader;
            h.onload = function(c) {
                a(c.target.result)
            };
            h.readAsArrayBuffer(c)
        }, h)
    };
    k.prototype.UD = function(c, a, h) {
        this.dw(c, function(c) {
            c = URL.createObjectURL(new Blob([c]));
            a(c)
        }, h)
    };
    k.prototype.JE = function(c) {
        return /^(?:[a-z]+:)?\/\//.test(c) || "data:" === c.substr(0, 5) || "blob:" === c.substr(0, 5)
    };
    k.prototype.Ay = function(c, a) {
        this.cl && !this.JE(a) ? this.UD(a, function(a) {
            c.src = a
        }, function(c) {
            alert("Failed to load image: " + c)
        }) : c.src = a
    };
    k.prototype.dp = function(c, a) {
        "undefined" !== typeof c.imageSmoothingEnabled ? c.imageSmoothingEnabled = a : (c.webkitImageSmoothingEnabled = a, c.mozImageSmoothingEnabled = a, c.msImageSmoothingEnabled = a)
    };
    ac = function(c) {
        return new k(document.getElementById(c))
    };
    bc = function(c, a) {
        return new k({
            dc: !0,
            width: c,
            height: a
        })
    };
    window.cr_createRuntime = ac;
    window.cr_createDCRuntime = bc;
    window.createCocoonJSRuntime = function() {
        window.c2cocoonjs = !0;
        var c = document.createElement("screencanvas") || document.createElement("canvas");
        c.Fa = !0;
        document.body.appendChild(c);
        c = new k(c);
        window.c2runtime = c;
        window.addEventListener("orientationchange", function() {
            window.c2runtime.setSize(window.innerWidth, window.innerHeight)
        });
        window.c2runtime.setSize(window.innerWidth, window.innerHeight);
        return c
    };
    window.createEjectaRuntime = function() {
        var c = new k(document.getElementById("canvas"));
        window.c2runtime = c;
        window.c2runtime.setSize(window.innerWidth, window.innerHeight);
        return c
    }
})();
window.cr_getC2Runtime = function() {
    var k = document.getElementById("c2canvas");
    return k ? k.c2runtime : window.c2runtime ? window.c2runtime : null
};
window.cr_getSnapshot = function(k, g) {
    var e = window.cr_getC2Runtime();
    e && e.MC(k, g)
};
window.cr_sizeCanvas = function(k, g) {
    if (0 !== k && 0 !== g) {
        var e = window.cr_getC2Runtime();
        e && e.setSize(k, g)
    }
};
window.cr_setSuspended = function(k) {
    var g = window.cr_getC2Runtime();
    g && g.setSuspended(k)
};
(function() {
    function k(c, a) {
        this.e = c;
        this.Rh = null;
        this.scrollX = this.e.Kb / 2;
        this.scrollY = this.e.Jb / 2;
        this.scale = 1;
        this.u = 0;
        this.Uh = !0;
        this.name = a[0];
        this.vF = a[1];
        this.uF = a[2];
        this.width = a[1];
        this.height = a[2];
        this.Zy = a[3];
        this.Jy = a[4];
        this.Ja = a[5];
        var b = a[6],
            d, f;
        this.ta = [];
        this.Wk = [];
        d = 0;
        for (f = b.length; d < f; d++) {
            var l = new dc(this, b[d]);
            l.Cx = d;
            this.ta.push(l)
        }
        b = a[7];
        this.ai = [];
        d = 0;
        for (f = b.length; d < f; d++) {
            var l = b[d],
                e = this.e.T[l[1]];
            e.le || (e.le = l);
            this.ai.push(l); - 1 === this.Wk.indexOf(e) && this.Wk.push(e)
        }
        this.ma = [];
        this.Xa = [];
        this.kg = !0;
        this.Bb = [];
        d = 0;
        for (f = a[8].length; d < f; d++) this.ma.push({
            id: a[8][d][0],
            name: a[8][d][1],
            Xb: -1,
            Re: !1,
            K: !0,
            index: d
        }), this.Bb.push(a[8][d][2].slice(0));
        this.Ve();
        this.Pj = new va(0, 0, 1, 1);
        this.ct = new va(0, 0, 1, 1);
        this.fg = {}
    }

    function g(c, a) {
        return c.We - a.We
    }

    function e(c, a) {
        this.qb = c;
        this.e = c.e;
        this.n = [];
        this.scale = 1;
        this.u = 0;
        this.Mf = !1;
        this.rg = new va(0, 0, 0, 0);
        this.Ty = new wa;
        this.Sa = this.Oa = this.Ta = this.Na = 0;
        this.yi = !1;
        this.vg = -1;
        this.Oq = 0;
        this.name = a[0];
        this.index = a[1];
        this.Ja = a[2];
        this.visible = a[3];
        this.Ie = a[4];
        this.Ue = a[5];
        this.bg = a[6];
        this.dg = a[7];
        this.opacity = a[8];
        this.Jn = a[9];
        this.he = a[10];
        this.wg = a[11];
        this.Jc = a[12];
        this.lD = a[13];
        this.zk = "source-over";
        this.Pc = this.Uc = 0;
        this.Ec = null;
        this.Yf = d();
        this.Se = !0;
        this.rj = new va(0, 0, -1, -1);
        this.vc = new va(0, 0, -1, -1);
        this.he && (this.Ec = new kb(this.e.Kb, this.e.Jb));
        this.wf = !1;
        var b = a[14],
            f, l;
        this.Oy = [];
        this.Ud = [];
        this.Ck = [];
        f = 0;
        for (l = b.length; f < l; f++) {
            var e = b[f],
                g = this.e.T[e[1]];
            g.le || (g.le = e, g.KC = this.index);
            this.Ud.push(e); - 1 === this.qb.Wk.indexOf(g) && this.qb.Wk.push(g)
        }
        Ha(this.Oy, this.Ud);
        this.ma = [];
        this.Xa = [];
        this.kg = !0;
        this.Bb = [];
        f = 0;
        for (l = a[15].length; f < l; f++) this.ma.push({
            id: a[15][f][0],
            name: a[15][f][1],
            Xb: -1,
            Re: !1,
            K: !0,
            index: f
        }), this.Bb.push(a[15][f][2].slice(0));
        this.Ve();
        this.Pj = new va(0, 0, 1, 1);
        this.ct = new va(0, 0, 1, 1)
    }

    function d() {
        return f.length ? f.pop() : []
    }

    function b(c) {
        G(c);
        f.push(c)
    }
    k.prototype.fG = function(c) {
        var a = c.type.Ja.toString();
        this.fg.hasOwnProperty(a) || (this.fg[a] = []);
        this.fg[a].push(this.e.lt(c))
    };
    k.prototype.zw = function() {
        var c = this.ta[0];
        return !c.Ue && 1 === c.opacity && !c.Jn && c.visible
    };
    k.prototype.Ve = function() {
        G(this.Xa);
        this.kg = !0;
        var c, a, b;
        c = 0;
        for (a = this.ma.length; c < a; c++) b = this.ma[c], b.K && (this.Xa.push(b), b.Re || (this.kg = !1))
    };
    k.prototype.Er = function(c) {
        var a, b, d;
        a = 0;
        for (b = this.ma.length; a < b; a++)
            if (d = this.ma[a], d.name === c) return d;
        return null
    };
    var a = [],
        l = !0;
    k.prototype.yt = function() {
        this.Jy && (this.Rh = this.e.$q[this.Jy], this.Rh.Ht());
        this.e.eb = this;
        this.width = this.vF;
        this.height = this.uF;
        this.scrollX = this.e.Kb / 2;
        this.scrollY = this.e.Jb / 2;
        var c, h, b, d, f, e, m;
        c = 0;
        for (b = this.e.T.length; c < b; c++)
            if (h = this.e.T[c], !h.ca)
                for (f = h.n, h = 0, d = f.length; h < d; h++)
                    if (e = f[h], e.C) {
                        var k = e.C.Cx;
                        k >= this.ta.length && (k = this.ta.length - 1);
                        e.C = this.ta[k]; - 1 === e.C.n.indexOf(e) && e.C.n.push(e);
                        e.C.yi = !0
                    }
        if (!l)
            for (c = 0, b = this.ta.length; c < b; ++c) this.ta[c].n.sort(g);
        G(a);
        this.sC();
        c = 0;
        for (b = this.ta.length; c < b; c++) e = this.ta[c], e.JC(), e.Ep();
        f = !1;
        if (!this.Uh) {
            for (m in this.fg)
                if (this.fg.hasOwnProperty(m) && (h = this.e.On(parseInt(m, 10))) && !h.ca && this.e.Gt(h)) {
                    d = this.fg[m];
                    c = 0;
                    for (b = d.length; c < b; c++) {
                        e = null;
                        if (h.G.Zg && (e = this.Nn(d[c].w.l), !e)) continue;
                        e = this.e.Pg(h.le, e, !1, 0, 0, !0);
                        this.e.no(e, d[c]);
                        f = !0;
                        a.push(e)
                    }
                    G(d)
                }
            c = 0;
            for (b = this.ta.length; c < b; c++) this.ta[c].n.sort(g), this.ta[c].yi = !0
        }
        f && (this.e.Hc(), this.e.iy());
        for (c = 0; c < a.length; c++)
            if (e = a[c], e.type.cd)
                for (b = e.Qk(), h = 0, d = e.type.Ed.length; h < d; h++) m = e.type.Ed[h], e.type !== m && (m.n.length > b ? e.siblings.push(m.n[b]) : m.le && (f = this.e.Pg(m.le, e.C, !0, e.x, e.y, !0), this.e.Hc(), m.Cp(), e.siblings.push(f), a.push(f)));
        c = 0;
        for (b = this.ai.length; c < b; c++) this.e.Pg(this.ai[c], null, !0);
        this.e.Kh = null;
        this.e.Hc();
        if (this.e.yb && !this.e.Tb)
            for (c = 0, b = this.e.T.length; c < b; c++) m = this.e.T[c], !m.ca && m.n.length && m.Ro && m.Ro(this.e.yb);
        if (this.e.Zk) Ha(this.e.Fn, a);
        else
            for (c = 0, b = a.length; c < b; c++) e = a[c], this.e.trigger(Object.getPrototypeOf(e.type.G).k.zh, e);
        G(a);
        this.e.Zk || this.e.trigger(P.prototype.k.ou, null);
        this.Uh = !1
    };
    k.prototype.IC = function() {
        var c, a, b, d, f;
        a = c = 0;
        for (b = this.ai.length; c < b; c++) d = this.ai[c], f = this.e.T[d[1]], f.global ? f.cd || this.e.Pg(d, null, !0) : (this.ai[a] = d, a++);
        Da(this.ai, a)
    };
    k.prototype.qG = function() {
        this.e.Zk || this.e.trigger(P.prototype.k.HA, null);
        this.e.$r = !0;
        G(this.e.xf.Gc);
        var c, a, b, d, f, e;
        if (!this.Uh)
            for (c = 0, a = this.ta.length; c < a; c++)
                for (this.ta[c].Kt(), f = this.ta[c].n, b = 0, d = f.length; b < d; b++) e = f[b], e.type.global || this.e.Gt(e.type) && this.fG(e);
        c = 0;
        for (a = this.ta.length; c < a; c++) {
            f = this.ta[c].n;
            b = 0;
            for (d = f.length; b < d; b++) e = f[b], e.type.global || this.e.Ce(e);
            this.e.Hc();
            G(f);
            this.ta[c].yi = !0
        }
        c = 0;
        for (a = this.e.T.length; c < a; c++)
            if (f = this.e.T[c], !(f.global || f.G.Zg || f.G.ip || f.ca)) {
                b = 0;
                for (d = f.n.length; b < d; b++) this.e.Ce(f.n[b]);
                this.e.Hc()
            }
        l = !1;
        this.e.$r = !1
    };
    new va(0, 0, 0, 0);
    k.prototype.kd = function(c) {
        var a, b = c,
            d = !1,
            f = !this.e.Sd;
        f && (this.e.ko || (this.e.ko = document.createElement("canvas"), a = this.e.ko, a.width = this.e.fa, a.height = this.e.ea, this.e.Vw = a.getContext("2d"), d = !0), a = this.e.ko, b = this.e.Vw, a.width !== this.e.fa && (a.width = this.e.fa, d = !0), a.height !== this.e.ea && (a.height = this.e.ea, d = !0), d && this.e.dp(b, this.e.rb));
        b.globalAlpha = 1;
        b.globalCompositeOperation = "source-over";
        this.e.Jv && !this.zw() && b.clearRect(0, 0, this.e.fa, this.e.ea);
        var l, e, d = 0;
        for (l = this.ta.length; d < l; d++) e = this.ta[d], e.visible && 0 < e.opacity && 11 !== e.Jc && (e.n.length || !e.Ue) ? e.kd(b) : e.Ep();
        f && c.drawImage(a, 0, 0, this.e.width, this.e.height)
    };
    k.prototype.Vi = function(c) {
        c.yy(!0);
        this.e.Ub || (this.e.Ub = c.Qd(this.e.fa, this.e.ea, this.e.rb));
        if (this.e.Ub.Jh !== this.e.fa || this.e.Ub.Ih !== this.e.ea) c.deleteTexture(this.e.Ub), this.e.Ub = c.Qd(this.e.fa, this.e.ea, this.e.rb);
        c.ve(this.e.Ub);
        this.e.Sd || c.si(this.e.fa, this.e.ea);
        var a, b;
        for (a = this.ta.length - 1; 0 <= a; --a) b = this.ta[a], b.visible && 1 === b.opacity && b.kg && 0 === b.Jc && (b.n.length || !b.Ue) ? b.Vi(c) : b.Ep();
        c.yy(!1)
    };
    k.prototype.wc = function(c) {
        var a = 0 < this.Xa.length || this.e.ek || !this.e.Sd || this.e.ob;
        if (a) {
            this.e.Ub || (this.e.Ub = c.Qd(this.e.fa, this.e.ea, this.e.rb));
            if (this.e.Ub.Jh !== this.e.fa || this.e.Ub.Ih !== this.e.ea) c.deleteTexture(this.e.Ub), this.e.Ub = c.Qd(this.e.fa, this.e.ea, this.e.rb);
            c.ve(this.e.Ub);
            this.e.Sd || c.si(this.e.fa, this.e.ea)
        } else this.e.Ub && (c.ve(null), c.deleteTexture(this.e.Ub), this.e.Ub = null);
        this.e.Jv && !this.zw() && c.clear(0, 0, 0, 0);
        var b, d, f;
        b = 0;
        for (d = this.ta.length; b < d; b++) f = this.ta[b], f.visible && 0 < f.opacity && (f.n.length || !f.Ue) ? f.wc(c) : f.Ep();
        a && (0 === this.Xa.length || 1 === this.Xa.length && this.e.Sd ? (1 === this.Xa.length ? (a = this.Xa[0].index, c.Bd(this.Xa[0].Xb), c.Uj(null, 1 / this.e.fa, 1 / this.e.ea, 0, 0, 1, 1, this.scale, this.u, 0, 0, this.e.fa / 2, this.e.ea / 2, this.e.gb.aa, this.Bb[a]), c.So(this.Xa[0].Xb) && (this.e.xa = !0)) : c.Bd(0), this.e.Sd || c.si(this.e.width, this.e.height), c.ve(null), c.xy(!1), c.kh(1), c.Ad(this.e.Ub), c.vy(), c.ue(), c.ge(), a = this.e.width / 2, b = this.e.height / 2, c.Oj(-a, b, a, b, a, -b, -a, -b), c.Ad(null), c.xy(!0)) : this.ht(c, null, null, null))
    };
    k.prototype.Ok = function() {
        return 0 < this.Xa.length || this.e.ek || !this.e.Sd || this.e.ob ? this.e.Ub : null
    };
    k.prototype.uw = function() {
        var c = this.ta[0].md(),
            a, b, d;
        a = 1;
        for (b = this.ta.length; a < b; a++) d = this.ta[a], (0 !== d.bg || 0 !== d.dg) && d.md() < c && (c = d.md());
        return c
    };
    k.prototype.ty = function(c) {
        if (!this.Zy) {
            var a = 1 / this.uw() * this.e.fa / 2;
            c > this.width - a && (c = this.width - a);
            c < a && (c = a)
        }
        this.scrollX !== c && (this.scrollX = c, this.e.xa = !0)
    };
    k.prototype.uy = function(c) {
        if (!this.Zy) {
            var a = 1 / this.uw() * this.e.ea / 2;
            c > this.height - a && (c = this.height - a);
            c < a && (c = a)
        }
        this.scrollY !== c && (this.scrollY = c, this.e.xa = !0)
    };
    k.prototype.sC = function() {
        this.ty(this.scrollX);
        this.uy(this.scrollY)
    };
    k.prototype.ht = function(c, a, b, d) {
        var f = b ? b.Xa : a ? a.Xa : this.Xa,
            l = 1,
            e = 0,
            g = 0,
            m = 0,
            k = this.e.fa,
            q = this.e.ea;
        b ? (l = b.C.md(), e = b.C.ac(), g = b.C.Na, m = b.C.Oa, k = b.C.Ta, q = b.C.Sa) : a && (l = a.md(), e = a.ac(), g = a.Na, m = a.Oa, k = a.Ta, q = a.Sa);
        var B = this.e.ur,
            w, z, v, r, L = 0,
            N = 1,
            J, S, R = this.e.fa,
            O = this.e.ea,
            X = R / 2,
            E = O / 2,
            H = a ? a.Pj : this.Pj,
            A = a ? a.ct : this.ct,
            Q = 0,
            U = 0,
            M = 0,
            K = 0,
            V = R,
            ta = R,
            W = O,
            Ka = O,
            ua = v = 0;
        r = b ? b.C.ac() : 0;
        if (b) {
            w = 0;
            for (z = f.length; w < z; w++) v += c.hE(f[w].Xb), ua += c.iE(f[w].Xb);
            K = b.lb;
            Q = a.fc(K.left, K.top, !0);
            M = a.fc(K.left, K.top, !1);
            V = a.fc(K.right, K.bottom, !0);
            W = a.fc(K.right, K.bottom, !1);
            0 !== r && (w = a.fc(K.right, K.top, !0), z = a.fc(K.right, K.top, !1), U = a.fc(K.left, K.bottom, !0), K = a.fc(K.left, K.bottom, !1), r = Math.min(Q, V, w, U), V = Math.max(Q, V, w, U), Q = r, r = Math.min(M, W, z, K), W = Math.max(M, W, z, K), M = r);
            Q -= v;
            M -= ua;
            V += v;
            W += ua;
            A.left = Q / R;
            A.top = 1 - M / O;
            A.right = V / R;
            A.bottom = 1 - W / O;
            U = Q = qa(Q);
            K = M = qa(M);
            ta = V = ra(V);
            Ka = W = ra(W);
            U -= v;
            K -= ua;
            ta += v;
            Ka += ua;
            0 > Q && (Q = 0);
            0 > M && (M = 0);
            V > R && (V = R);
            W > O && (W = O);
            0 > U && (U = 0);
            0 > K && (K = 0);
            ta > R && (ta = R);
            Ka > O && (Ka = O);
            H.left = Q / R;
            H.top = 1 - M / O;
            H.right = V / R;
            H.bottom = 1 - W / O
        } else H.left = A.left = 0, H.top = A.top = 0, H.right = A.right = 1, H.bottom = A.bottom = 1;
        ua = b && (c.Il(f[0].Xb) || 0 !== v || 0 !== ua || 1 !== b.opacity || b.type.G.xx) || a && !b && 1 !== a.opacity;
        c.vy();
        if (ua) {
            B[L] || (B[L] = c.Qd(R, O, this.e.rb));
            if (B[L].Jh !== R || B[L].Ih !== O) c.deleteTexture(B[L]), B[L] = c.Qd(R, O, this.e.rb);
            c.Bd(0);
            c.ve(B[L]);
            S = Ka - K;
            c.clearRect(U, O - K - S, ta - U, S);
            b ? b.wc(c) : (c.Ad(this.e.gc), c.kh(a.opacity), c.ue(), c.translate(-X, -E), c.ge(), c.ig(Q, W, V, W, V, M, Q, M, H));
            A.left = A.top = 0;
            A.right = A.bottom = 1;
            b && (r = H.top, H.top = H.bottom, H.bottom = r);
            L = 1;
            N = 0
        }
        c.kh(1);
        v = f.length - 1;
        var Wa = c.Zs(f[v].Xb) || !a && !b && !this.e.Sd;
        w = r = 0;
        for (z = f.length; w < z; w++) {
            B[L] || (B[L] = c.Qd(R, O, this.e.rb));
            if (B[L].Jh !== R || B[L].Ih !== O) c.deleteTexture(B[L]), B[L] = c.Qd(R, O, this.e.rb);
            c.Bd(f[w].Xb);
            r = f[w].index;
            c.So(f[w].Xb) && (this.e.xa = !0);
            0 != w || ua ? (c.Uj(d, 1 / R, 1 / O, A.left, A.top, A.right, A.bottom, l, e, g, m, (g + k) / 2, (m + q) / 2, this.e.gb.aa, b ? b.Bb[r] : a ? a.Bb[r] : this.Bb[r]), c.Ad(null), w !== v || Wa ? (c.ve(B[L]), S = Ka - K, J = O - K - S, c.clearRect(U, J, ta - U, S)) : (b ? c.jh(b.Uc, b.Pc) : a && c.jh(a.Uc, a.Pc), c.ve(d)), c.Ad(B[N]), c.ue(), c.translate(-X, -E), c.ge(), c.ig(Q, W, V, W, V, M, Q, M, H), w !== v || Wa || c.Ad(null)) : (c.ve(B[L]), S = Ka - K, J = O - K - S, c.clearRect(U,
                J, ta - U, S), b ? (b.zb && b.zb.Ia ? (J = b.zb.Ia, N = 1 / J.width, J = 1 / J.height) : (N = 1 / b.width, J = 1 / b.height), c.Uj(d, N, J, A.left, A.top, A.right, A.bottom, l, e, g, m, (g + k) / 2, (m + q) / 2, this.e.gb.aa, b.Bb[r]), b.wc(c)) : (c.Uj(d, 1 / R, 1 / O, 0, 0, 1, 1, l, e, g, m, (g + k) / 2, (m + q) / 2, this.e.gb.aa, a ? a.Bb[r] : this.Bb[r]), c.Ad(a ? this.e.gc : this.e.Ub), c.ue(), c.translate(-X, -E), c.ge(), c.ig(Q, W, V, W, V, M, Q, M, H)), A.left = A.top = 0, A.right = A.bottom = 1, b && !Wa && (r = W, W = M, M = r));
            L = 0 === L ? 1 : 0;
            N = 0 === L ? 1 : 0
        }
        Wa && (c.Bd(0), b ? c.jh(b.Uc, b.Pc) : a ? c.jh(a.Uc, a.Pc) : this.e.Sd || (c.si(this.e.width,
            this.e.height), X = this.e.width / 2, E = this.e.height / 2, M = Q = 0, V = this.e.width, W = this.e.height), c.ve(d), c.Ad(B[N]), c.ue(), c.translate(-X, -E), c.ge(), b && 1 === f.length && !ua ? c.ig(Q, M, V, M, V, W, Q, W, H) : c.ig(Q, W, V, W, V, M, Q, M, H), c.Ad(null))
    };
    k.prototype.Nn = function(c) {
        var a, b;
        a = 0;
        for (b = this.ta.length; a < b; a++)
            if (this.ta[a].Ja === c) return this.ta[a];
        return null
    };
    k.prototype.ja = function() {
        var c, a, b, d = {
            sx: this.scrollX,
            sy: this.scrollY,
            s: this.scale,
            a: this.u,
            w: this.width,
            h: this.height,
            fv: this.Uh,
            persist: this.fg,
            fx: [],
            layers: {}
        };
        c = 0;
        for (a = this.ma.length; c < a; c++) b = this.ma[c], d.fx.push({
            name: b.name,
            active: b.K,
            params: this.Bb[b.index]
        });
        c = 0;
        for (a = this.ta.length; c < a; c++) b = this.ta[c], d.layers[b.Ja.toString()] = b.ja();
        return d
    };
    k.prototype.ua = function(c) {
        var a, b, d, f;
        this.scrollX = c.sx;
        this.scrollY = c.sy;
        this.scale = c.s;
        this.u = c.a;
        this.width = c.w;
        this.height = c.h;
        this.fg = c.persist;
        "undefined" !== typeof c.fv && (this.Uh = c.fv);
        var l = c.fx;
        a = 0;
        for (b = l.length; a < b; a++)
            if (d = this.Er(l[a].name)) d.K = l[a].active, this.Bb[d.index] = l[a].params;
        this.Ve();
        a = c.layers;
        for (f in a) a.hasOwnProperty(f) && (c = this.Nn(parseInt(f, 10))) && c.ua(a[f])
    };
    Pb = k;
    e.prototype.Ve = function() {
        G(this.Xa);
        this.kg = !0;
        var c, a, b;
        c = 0;
        for (a = this.ma.length; c < a; c++) b = this.ma[c], b.K && (this.Xa.push(b), b.Re || (this.kg = !1))
    };
    e.prototype.Er = function(c) {
        var a, b, d;
        a = 0;
        for (b = this.ma.length; a < b; a++)
            if (d = this.ma[a], d.name === c) return d;
        return null
    };
    e.prototype.JC = function() {
        var c, b, d, f, l, e;
        b = c = 0;
        for (d = this.Ud.length; c < d; c++) {
            f = this.Ud[c];
            l = this.e.T[f[1]];
            e = this.e.Gt(l);
            l = !0;
            if (!e || this.qb.Uh) {
                f = this.e.Pg(f, this, !0);
                if (!f) continue;
                a.push(f);
                f.type.global && (l = !1, this.Ck.push(f.uid))
            }
            l && (this.Ud[b] = this.Ud[c], b++)
        }
        this.Ud.length = b;
        this.e.Hc();
        !this.e.S && this.ma.length && (this.Jc = this.lD);
        this.zk = lb(this.Jc);
        this.e.X && mb(this, this.Jc, this.e.X);
        this.Se = !0
    };
    e.prototype.Qj = function(c, a) {
        var b = Ja(this.n, c);
        0 > b || (a && this.he && c.xd && c.xd.right >= c.xd.left && (c.ib(), this.Ec.update(c, c.xd, null), c.xd.set(0, 0, -1, -1)), b === this.n.length - 1 ? this.n.pop() : (Ca(this.n, b), this.Ql(b)), this.Se = !0)
    };
    e.prototype.vk = function(c, a) {
        c.We = this.n.length;
        this.n.push(c);
        a && this.he && c.xd && c.za();
        this.Se = !0
    };
    e.prototype.KF = function(c) {
        this.n.unshift(c);
        this.Ql(0)
    };
    e.prototype.iF = function(c, a, b) {
        var d = c.lf();
        a = a.lf();
        Ca(this.n, d);
        d < a && a--;
        b && a++;
        a === this.n.length ? this.n.push(c) : this.n.splice(a, 0, c);
        this.Ql(d < a ? d : a)
    };
    e.prototype.Ql = function(c) {
        -1 === this.vg ? this.vg = c : c < this.vg && (this.vg = c);
        this.Se = this.yi = !0
    };
    e.prototype.Kt = function() {
        if (this.yi) {
            -1 === this.vg && (this.vg = 0);
            var c, a, b;
            if (this.he)
                for (c = this.vg, a = this.n.length; c < a; ++c) b = this.n[c], b.We = c, this.Ec.eF(b.xd);
            else
                for (c = this.vg, a = this.n.length; c < a; ++c) this.n[c].We = c;
            this.yi = !1;
            this.vg = -1
        }
    };
    e.prototype.md = function(c) {
        return this.eE() * (this.e.Sd || c ? this.e.wk : 1)
    };
    e.prototype.eE = function() {
        return (this.scale * this.qb.scale - 1) * this.wg + 1
    };
    e.prototype.ac = function() {
        return this.Mf ? 0 : Pa(this.qb.u + this.u)
    };
    var f = [],
        m = [],
        q = [];
    e.prototype.Jr = function() {
        this.Kt();
        this.Ec.fy(this.Na, this.Oa, this.Ta, this.Sa, q);
        if (!q.length) return d();
        if (1 === q.length) {
            var c = d();
            Ha(c, q[0]);
            G(q);
            return c
        }
        for (var a = !0; 1 < q.length;) {
            for (var c = q, f = void 0, l = void 0, e = void 0, g = void 0, k = void 0, f = 0, l = c.length; f < l - 1; f += 2) {
                var e = c[f],
                    g = c[f + 1],
                    k = d(),
                    x = e,
                    u = g,
                    y = k,
                    C = 0,
                    B = 0,
                    w = 0,
                    z = x.length,
                    v = u.length,
                    r = void 0,
                    L = void 0;
                for (y.length = z + v; C < z && B < v; ++w) r = x[C], L = u[B], r.We < L.We ? (y[w] = r, ++C) : (y[w] = L, ++B);
                for (; C < z; ++C, ++w) y[w] = x[C];
                for (; B < v; ++B, ++w) y[w] = u[B];
                a || (b(e), b(g));
                m.push(k)
            }
            1 === l % 2 && (a ? (e = d(), Ha(e, c[l - 1]), m.push(e)) : m.push(c[l - 1]));
            Ha(c, m);
            G(m);
            a = !1
        }
        c = q[0];
        G(q);
        return c
    };
    e.prototype.kd = function(c) {
        this.wf = this.Jn || 1 !== this.opacity || 0 !== this.Jc;
        var a = this.e.canvas,
            d = c,
            f = !1;
        this.wf && (this.e.ho || (this.e.ho = document.createElement("canvas"), a = this.e.ho, a.width = this.e.fa, a.height = this.e.ea, this.e.Uw = a.getContext("2d"), f = !0), a = this.e.ho, d = this.e.Uw, a.width !== this.e.fa && (a.width = this.e.fa, f = !0), a.height !== this.e.ea && (a.height = this.e.ea, f = !0), f && this.e.dp(d, this.e.rb), this.Ue && d.clearRect(0, 0, this.e.fa, this.e.ea));
        d.globalAlpha = 1;
        d.globalCompositeOperation = "source-over";
        this.Ue || (d.fillStyle = "rgb(" + this.Ie[0] + "," + this.Ie[1] + "," + this.Ie[2] + ")", d.fillRect(0, 0, this.e.fa, this.e.ea));
        d.save();
        this.Mf = !0;
        var f = this.uc(0, 0, !0, !0),
            l = this.uc(0, 0, !1, !0);
        this.Mf = !1;
        this.e.$d && (f = Math.round(f), l = Math.round(l));
        this.Zo(f, l, d);
        var e = this.md();
        d.scale(e, e);
        d.translate(-f, -l);
        this.he ? (this.vc.left = this.Ec.hd(this.Na), this.vc.top = this.Ec.jd(this.Oa), this.vc.right = this.Ec.hd(this.Ta), this.vc.bottom = this.Ec.jd(this.Sa), this.Se || !this.vc.Ek(this.rj) ? (b(this.Yf), f = this.Jr(), this.Se = !1, this.rj.Ak(this.vc)) : f = this.Yf) : f = this.n;
        for (var g, m = null, l = 0, e = f.length; l < e; ++l) g = f[l], g !== m && (this.fD(g, d), m = g);
        this.he && (this.Yf = f);
        d.restore();
        this.wf && (c.globalCompositeOperation = this.zk, c.globalAlpha = this.opacity, c.drawImage(a, 0, 0))
    };
    e.prototype.fD = function(c, a) {
        if (c.visible && 0 !== c.width && 0 !== c.height) {
            c.ib();
            var b = c.lb;
            b.right < this.Na || b.bottom < this.Oa || b.left > this.Ta || b.top > this.Sa || (a.globalCompositeOperation = c.zk, c.kd(a))
        }
    };
    e.prototype.Ep = function() {
        this.Mf = !0;
        var c = this.uc(0, 0, !0, !0),
            a = this.uc(0, 0, !1, !0);
        this.Mf = !1;
        this.e.$d && (c = Math.round(c), a = Math.round(a));
        this.Zo(c, a, null)
    };
    e.prototype.Zo = function(c, a, b) {
        var d = this.md();
        this.Na = c;
        this.Oa = a;
        this.Ta = c + 1 / d * this.e.fa;
        this.Sa = a + 1 / d * this.e.ea;
        this.Na > this.Ta && (c = this.Na, this.Na = this.Ta, this.Ta = c);
        this.Oa > this.Sa && (c = this.Oa, this.Oa = this.Sa, this.Sa = c);
        c = this.ac();
        0 !== c && (b && (b.translate(this.e.fa / 2, this.e.ea / 2), b.rotate(-c), b.translate(this.e.fa / -2, this.e.ea / -2)), this.rg.set(this.Na, this.Oa, this.Ta, this.Sa), this.rg.offset((this.Na + this.Ta) / -2, (this.Oa + this.Sa) / -2), this.Ty.Fy(this.rg, c), this.Ty.Dv(this.rg),
            this.rg.offset((this.Na + this.Ta) / 2, (this.Oa + this.Sa) / 2), this.Na = this.rg.left, this.Oa = this.rg.top, this.Ta = this.rg.right, this.Sa = this.rg.bottom)
    };
    e.prototype.Vi = function(c) {
        if (this.wf = this.Jn) {
            this.e.gc || (this.e.gc = c.Qd(this.e.fa, this.e.ea, this.e.rb));
            if (this.e.gc.Jh !== this.e.fa || this.e.gc.Ih !== this.e.ea) c.deleteTexture(this.e.gc), this.e.gc = c.Qd(this.e.fa, this.e.ea, this.e.rb);
            c.ve(this.e.gc)
        }
        this.Mf = !0;
        var a = this.uc(0, 0, !0, !0),
            d = this.uc(0, 0, !1, !0);
        this.Mf = !1;
        this.e.$d && (a = Math.round(a), d = Math.round(d));
        this.Zo(a, d, null);
        a = this.md();
        c.ue();
        c.scale(a, a);
        c.$o(-this.ac());
        c.translate((this.Na + this.Ta) / -2, (this.Oa + this.Sa) / -2);
        c.ge();
        this.he ? (this.vc.left = this.Ec.hd(this.Na), this.vc.top = this.Ec.jd(this.Oa), this.vc.right = this.Ec.hd(this.Ta), this.vc.bottom = this.Ec.jd(this.Sa), this.Se || !this.vc.Ek(this.rj) ? (b(this.Yf), a = this.Jr(), this.Se = !1, this.rj.Ak(this.vc)) : a = this.Yf) : a = this.n;
        for (var f, l = null, d = a.length - 1; 0 <= d; --d) f = a[d], f !== l && (this.hD(a[d], c), l = f);
        this.he && (this.Yf = a);
        this.Ue || (this.Oq = this.e.Oh++,
            c.ep(this.Oq), c.wy(1, 1, 1), c.kw(), c.WF())
    };
    e.prototype.wc = function(c) {
        var a = 0,
            d = 0;
        if (this.wf = this.Jn || 1 !== this.opacity || 0 < this.Xa.length || 0 !== this.Jc) {
            this.e.gc || (this.e.gc = c.Qd(this.e.fa, this.e.ea, this.e.rb));
            if (this.e.gc.Jh !== this.e.fa || this.e.gc.Ih !== this.e.ea) c.deleteTexture(this.e.gc), this.e.gc = c.Qd(this.e.fa, this.e.ea, this.e.rb);
            c.ve(this.e.gc);
            this.Ue && c.clear(0, 0, 0, 0)
        }
        this.Ue || (this.e.ob ? (c.ep(this.Oq), c.wy(this.Ie[0] / 255, this.Ie[1] / 255, this.Ie[2] / 255), c.kw(), c.mG()) : c.clear(this.Ie[0] / 255, this.Ie[1] / 255, this.Ie[2] / 255, 1));
        this.Mf = !0;
        var f = this.uc(0, 0, !0, !0),
            a = this.uc(0, 0, !1, !0);
        this.Mf = !1;
        this.e.$d && (f = Math.round(f), a = Math.round(a));
        this.Zo(f, a, null);
        f = this.md();
        c.ue();
        c.scale(f, f);
        c.$o(-this.ac());
        c.translate((this.Na + this.Ta) / -2, (this.Oa + this.Sa) / -2);
        c.ge();
        this.he ? (this.vc.left = this.Ec.hd(this.Na), this.vc.top = this.Ec.jd(this.Oa), this.vc.right = this.Ec.hd(this.Ta), this.vc.bottom = this.Ec.jd(this.Sa), this.Se || !this.vc.Ek(this.rj) ? (b(this.Yf), a = this.Jr(), this.Se = !1, this.rj.Ak(this.vc)) :
            a = this.Yf) : a = this.n;
        var l, e, g = null,
            d = 0;
        for (l = a.length; d < l; ++d) e = a[d], e !== g && (this.gD(a[d], c), g = e);
        this.he && (this.Yf = a);
        this.wf && (a = this.Xa.length ? this.Xa[0].Xb : 0, d = this.Xa.length ? this.Xa[0].index : 0, 0 === this.Xa.length || 1 === this.Xa.length && !c.Zs(a) && 1 === this.opacity ? (1 === this.Xa.length ? (c.Bd(a), c.Uj(this.qb.Ok(), 1 / this.e.fa, 1 / this.e.ea, 0, 0, 1, 1, f, this.ac(), this.Na, this.Oa, (this.Na + this.Ta) / 2, (this.Oa + this.Sa) / 2, this.e.gb.aa, this.Bb[d]), c.So(a) && (this.e.xa = !0)) : c.Bd(0), c.ve(this.qb.Ok()), c.kh(this.opacity),
            c.Ad(this.e.gc), c.jh(this.Uc, this.Pc), c.ue(), c.ge(), f = this.e.fa / 2, a = this.e.ea / 2, c.Oj(-f, a, f, a, f, -a, -f, -a), c.Ad(null)) : this.qb.ht(c, this, null, this.qb.Ok()))
    };
    e.prototype.gD = function(c, a) {
        if (c.visible && 0 !== c.width && 0 !== c.height) {
            c.ib();
            var b = c.lb;
            b.right < this.Na || b.bottom < this.Oa || b.left > this.Ta || b.top > this.Sa || (a.ep(c.Oh), c.dz ? this.iD(c, a) : (a.Bd(0), a.jh(c.Uc, c.Pc), c.wc(a)))
        }
    };
    e.prototype.hD = function(c, a) {
        if (c.visible && 0 !== c.width && 0 !== c.height) {
            c.ib();
            var b = c.lb;
            b.right < this.Na || b.bottom < this.Oa || b.left > this.Ta || b.top > this.Sa || (c.Oh = this.e.Oh++, 0 === c.Jc && 1 === c.opacity && c.kg && c.Vi && (a.ep(c.Oh), c.Vi(a)))
        }
    };
    e.prototype.iD = function(c, a) {
        var b = c.Xa[0].Xb,
            d = c.Xa[0].index,
            f = this.md();
        if (1 !== c.Xa.length || a.Zs(b) || a.MF(b) || (c.u || c.C.ac()) && a.Il(b) || 1 !== c.opacity || c.type.G.xx) this.qb.ht(a, this, c, this.wf ? this.e.gc : this.qb.Ok()), a.ue(), a.scale(f, f), a.$o(-this.ac()), a.translate((this.Na + this.Ta) / -2, (this.Oa + this.Sa) / -2), a.ge();
        else {
            a.Bd(b);
            a.jh(c.Uc, c.Pc);
            a.So(b) && (this.e.xa = !0);
            var l = 0,
                e = 0,
                g = 0,
                m = 0;
            a.Il(b) &&
                (m = c.lb, l = this.fc(m.left, m.top, !0), e = this.fc(m.left, m.top, !1), g = this.fc(m.right, m.bottom, !0), m = this.fc(m.right, m.bottom, !1), l = l / windowWidth, e = 1 - e / windowHeight, g = g / windowWidth, m = 1 - m / windowHeight);
            var k;
            c.zb && c.zb.Ia ? (k = c.zb.Ia, b = 1 / k.width, k = 1 / k.height) : (b = 1 / c.width, k = 1 / c.height);
            a.Uj(this.wf ? this.e.gc : this.qb.Ok(), b, k, l, e, g, m, f, this.ac(), this.Na, this.Oa, (this.Na + this.Ta) / 2, (this.Oa + this.Sa) / 2, this.e.gb.aa, c.Bb[d]);
            c.wc(a)
        }
    };
    e.prototype.uc = function(c, a, b, d) {
        var f = this.e.devicePixelRatio;
        this.e.fj &&
            (c *= f, a *= f);
        var f = this.e.Wx,
            l = this.e.Xx,
            f = (this.qb.scrollX - f) * this.bg + f,
            l = (this.qb.scrollY - l) * this.dg + l,
            e = f,
            g = l,
            m = 1 / this.md(!d);
        d ? (e -= this.e.fa * m / 2, g -= this.e.ea * m / 2) : (e -= this.e.width * m / 2, g -= this.e.height * m / 2);
        e += c * m;
        g += a * m;
        a = this.ac();
        0 !== a && (e -= f, g -= l, c = Math.cos(a), a = Math.sin(a), d = e * c - g * a, g = g * c + e * a, e = d + f, g += l);
        return b ? e : g
    };
    e.prototype.fc = function(c, a, b) {
        var d = this.e.Wx,
            f = this.e.Xx,
            d = (this.qb.scrollX - d) * this.bg + d,
            l = (this.qb.scrollY - f) * this.dg + f,
            f = d,
            e = l,
            g = this.ac();
        if (0 !== g) {
            c -= d;
            a -= l;
            var m = Math.cos(-g),
                g = Math.sin(-g),
                k = c * m - a * g;
            a = a * m + c * g;
            c = k + d;
            a += l
        }
        d = 1 / this.md(!1);
        f -= this.e.fa * d / 2;
        e -= this.e.ea * d / 2;
        f = (c - f) / d;
        return b ? f : (a - e) / d
    };
    e.prototype.ja = function() {
        var c, a, b, d = {
            s: this.scale,
            a: this.u,
            vl: this.Na,
            vt: this.Oa,
            vr: this.Ta,
            vb: this.Sa,
            v: this.visible,
            bc: this.Ie,
            t: this.Ue,
            px: this.bg,
            py: this.dg,
            o: this.opacity,
            zr: this.wg,
            fx: [],
            cg: this.Ck,
            instances: []
        };
        c = 0;
        for (a = this.ma.length; c < a; c++) b = this.ma[c], d.fx.push({
            name: b.name,
            active: b.K,
            params: this.Bb[b.index]
        });
        return d
    };
    e.prototype.ua = function(c) {
        var a, b, d;
        this.scale =
            c.s;
        this.u = c.a;
        this.Na = c.vl;
        this.Oa = c.vt;
        this.Ta = c.vr;
        this.Sa = c.vb;
        this.visible = c.v;
        this.Ie = c.bc;
        this.Ue = c.t;
        this.bg = c.px;
        this.dg = c.py;
        this.opacity = c.o;
        this.wg = c.zr;
        this.Ck = c.cg || [];
        Ha(this.Ud, this.Oy);
        var f = new ca;
        a = 0;
        for (d = this.Ck.length; a < d; ++a) f.add(this.Ck[a]);
        b = a = 0;
        for (d = this.Ud.length; a < d; ++a) f.contains(this.Ud[a][2]) || (this.Ud[b] = this.Ud[a], ++b);
        Da(this.Ud, b);
        b = c.fx;
        a = 0;
        for (d = b.length; a < d; a++)
            if (c = this.Er(b[a].name)) c.K = b[a].active, this.Bb[c.index] = b[a].params;
        this.Ve();
        this.n.sort(g);
        this.yi = !0
    };
    dc = e
})();
(function() {
    function k(c, a) {
        var b, d = c.length;
        switch (d) {
            case 0:
                return !0;
            case 1:
                return c[0] === a[0];
            case 2:
                return c[0] === a[0] && c[1] === a[1];
            default:
                for (b = 0; b < d; b++)
                    if (c[b] !== a[b]) return !1;
                return !0
        }
    }

    function g(c, a) {
        return c.index - a.index
    }

    function e(c) {
        var a, b, d, h;
        2 === c.length ? c[0].index > c[1].index && (a = c[0], c[0] = c[1], c[1] = a) : 2 < c.length && c.sort(g);
        c.length >= t.length && (t.length = c.length + 1);
        t[c.length] || (t[c.length] = []);
        h = t[c.length];
        a = 0;
        for (b = h.length; a < b; a++)
            if (d = h[a], k(c, d)) return d;
        h.push(c);
        return c
    }

    function d(c, a) {
        this.e = c;
        this.Vy = {};
        this.aw = {};
        this.Pr = !1;
        this.Bw = new ca;
        this.Vq = [];
        this.yq = [];
        this.name = a[0];
        var b = a[1];
        this.Sg = [];
        var d, h;
        d = 0;
        for (h = b.length; d < h; d++) this.Dw(b[d], null, this.Sg)
    }

    function b(c) {
        this.type = c;
        this.n = [];
        this.ya = [];
        this.qa = !0
    }

    function a(c, a, b) {
        this.sheet = c;
        this.parent = a;
        this.e = c.e;
        this.Ha = [];
        this.mh = [];
        this.Aw = this.wp = this.Ct = this.Un = this.group = this.ut = !1;
        this.Zb = [];
        this.je = [];
        this.xe = [];
        this.Sk = "";
        this.Rk = this.Un = this.group = !1;
        this.gn = null;
        b[1] && (this.Sk = b[1][1].toLowerCase(), this.group = !0, this.Un = !!b[1][0], this.gn = [], this.Rk = this.Un, this.e.Hg.push(this), this.e.Pn[this.Sk] = this);
        this.te = b[2];
        this.Ja = b[4];
        this.group || (this.e.Cv[this.Ja.toString()] = this);
        var d = b[5];
        c = 0;
        for (a = d.length; c < a; c++) {
            var h = new ec(this, d[c]);
            h.index = c;
            this.Zb.push(h);
            this.lv(h.type)
        }
        d = b[6];
        c = 0;
        for (a = d.length; c < a; c++) h = new fc(this, d[c]), h.index = c, this.je.push(h);
        if (8 === b.length)
            for (b = b[7], c = 0, a = b.length; c < a; c++) this.sheet.Dw(b[c], this, this.xe);
        this.ao = !1;
        this.Zb.length && (this.ao = null == this.Zb[0].type && this.Zb[0].xc == P.prototype.k.au)
    }

    function l(c, a) {
        var b, d, h;
        if (c && (-1 === a.indexOf(c) && a.push(c), c.cd))
            for (b = 0, d = c.Ed.length; b < d; b++) h = c.Ed[b], c !== h && -1 === a.indexOf(h) && a.push(h)
    }

    function f(c, a) {
        this.Od = c;
        this.sheet = c.sheet;
        this.e = c.e;
        this.wa = [];
        this.Eb = [];
        this.cb = {};
        this.index = -1;
        this.tk = !1;
        this.xc = this.e.zg(a[1]);
        this.trigger = 0 < a[3];
        this.$v = 2 === a[3];
        this.pf = a[4];
        this.Zr = a[5];
        this.$E = a[6];
        this.Ja = a[7];
        this.e.Ng[this.Ja.toString()] = this; - 1 === a[0] ? (this.type = null, this.Wb = this.kt, this.Hh = null, this.Je = -1) : (this.type = this.e.T[a[0]], this.Wb = this.$E ? this.dG : this.jt, a[2] ? (this.Hh = this.type.Mn(a[2]), this.Je = this.type.Ar(a[2])) : (this.Hh = null, this.Je = -1), this.Od.parent && this.Od.parent.fp());
        this.$v && (this.Wb = this.eG);
        if (10 === a.length) {
            var b, d, h = a[9];
            b = 0;
            for (d = h.length; b < d; b++) {
                var f = new gc(this, h[b]);
                this.wa.push(f)
            }
            this.Eb.length = h.length
        }
    }

    function m(c, a) {
        this.Od = c;
        this.sheet = c.sheet;
        this.e = c.e;
        this.wa = [];
        this.Eb = [];
        this.cb = {};
        this.index = -1;
        this.tk = !1;
        this.xc = this.e.zg(a[1]); - 1 === a[0] ? (this.type = null, this.Wb = this.kt, this.Hh = null, this.Je = -1) : (this.type = this.e.T[a[0]], this.Wb = this.jt, a[2] ? (this.Hh = this.type.Mn(a[2]), this.Je = this.type.Ar(a[2])) : (this.Hh = null, this.Je = -1));
        this.Ja = a[3];
        this.e.Fg[this.Ja.toString()] = this;
        if (6 === a.length) {
            var b, d, h = a[5];
            b = 0;
            for (d = h.length; b < d; b++) {
                var f = new gc(this, h[b]);
                this.wa.push(f)
            }
            this.Eb.length = h.length
        }
    }

    function q() {
        F++;
        D.length === F && D.push(new hc);
        return D[F]
    }

    function c(c, a) {
        this.sb = c;
        this.Od = c.Od;
        this.sheet = c.sheet;
        this.e = c.e;
        this.type = a[0];
        this.gf = null;
        this.lg = 0;
        this.get = null;
        this.Lv = 0;
        this.qb = null;
        this.key = 0;
        this.object = null;
        this.index = 0;
        this.im = this.wi = this.im = this.wi = this.fw = this.Sh = this.jm = null;
        this.Ae = !1;
        var b, d, h;
        switch (a[0]) {
            case 0:
            case 7:
                this.gf = new ic(this, a[1]);
                this.lg = 0;
                this.get = this.nE;
                break;
            case 1:
                this.gf = new ic(this, a[1]);
                this.lg = 0;
                this.get = this.oE;
                break;
            case 5:
                this.gf = new ic(this, a[1]);
                this.lg = 0;
                this.get = this.sE;
                break;
            case 3:
            case 8:
                this.Lv = a[1];
                this.get = this.lE;
                break;
            case 6:
                this.qb = this.e.ss[a[1]];
                this.get = this.tE;
                break;
            case 9:
                this.key = a[1];
                this.get = this.rE;
                break;
            case 4:
                this.object = this.e.T[a[1]];
                this.get = this.wE;
                this.Od.lv(this.object);
                this.sb instanceof fc ? this.Od.fp() : this.Od.parent && this.Od.parent.fp();
                break;
            case 10:
                this.index = a[1];
                c.type && c.type.ca ? (this.get = this.pE, this.Ae = !0) : this.get = this.qE;
                break;
            case 11:
                this.jm = a[1];
                this.Sh = null;
                this.get = this.mE;
                break;
            case 2:
            case 12:
                this.fw = a[1];
                this.get = this.kE;
                break;
            case 13:
                for (this.get = this.zE, this.wi = [], this.im = [], b = 1, d = a.length; b < d; b++) h = new gc(this.sb, a[b]), this.wi.push(h), this.im.push(0)
        }
    }

    function h(c, a, b) {
        this.sheet = c;
        this.parent = a;
        this.e = c.e;
        this.Ha = [];
        this.name = b[1];
        this.Gp = b[2];
        this.L = b[3];
        this.gl = !!b[4];
        this.$n = !!b[5];
        this.Ja = b[6];
        this.e.gk[this.Ja.toString()] = this;
        this.data = this.L;
        this.parent ? (this.ki = this.gl || this.$n ? -1 : this.e.oG++, this.e.mC.push(this)) : (this.ki = -1, this.e.wq.push(this))
    }

    function p(c, a, b) {
        this.sheet = c;
        this.parent = a;
        this.e = c.e;
        this.Ha = [];
        this.Vk = null;
        this.GE = b[1];
        this.K = !0
    }

    function n() {
        this.Qy = [];
        this.reset(null)
    }
    var t = [];
    d.prototype.toString = function() {
        return this.name
    };
    d.prototype.Dw = function(c, a, b) {
        switch (c[0]) {
            case 0:
                c = new jc(this, a, c);
                if (c.te)
                    for (b.push(c), b = 0, a = c.Zb.length; b < a; b++) c.Zb[b].trigger && this.Ew(c, b);
                else c.Mw() ? this.Ew(c, 0) : b.push(c);
                break;
            case 1:
                c = new $b(this, a, c);
                b.push(c);
                break;
            case 2:
                c = new kc(this, a, c), b.push(c)
        }
    };
    d.prototype.Lb = function() {
        var c, a;
        c = 0;
        for (a = this.Sg.length; c < a; c++) this.Sg[c].Lb(c < a - 1 && this.Sg[c + 1].ao)
    };
    d.prototype.Ht = function() {
        G(this.Vq);
        G(this.yq);
        this.kv(this);
        G(this.yq)
    };
    d.prototype.kv = function(c) {
        var a, b, d, h, f = c.Vq,
            l = c.yq,
            e = this.Bw.qh();
        a = 0;
        for (b = e.length; a < b; ++a) d = e[a], h = d.Vk, !d.K || c === h || -1 < l.indexOf(h) || (l.push(h), h.kv(c), f.push(h))
    };
    d.prototype.Wb = function(c) {
        this.e.vJ || (this.Pr = !0, c || (this.e.ds = !0));
        var a, b;
        a = 0;
        for (b = this.Sg.length; a < b; a++) {
            var d = this.Sg[a];
            d.Wb();
            this.e.Nq(d.Ha);
            this.e.Vg && this.e.Hc()
        }
        c || (this.e.ds = !1)
    };
    d.prototype.Ew = function(c, a) {
        c.te || this.e.yp.push(c);
        var b, d, h = c.Zb[a],
            f;
        h.type ? f = h.type.name : f = "system";
        var l = (b = h.$v) ? this.aw : this.Vy;
        l[f] || (l[f] = []);
        f = l[f];
        l = h.xc;
        if (b) {
            if (h.wa.length && (h = h.wa[0], 1 === h.type && 2 === h.gf.type)) {
                h = h.gf.value.toLowerCase();
                b = 0;
                for (d = f.length; b < d; b++)
                    if (f[b].method == l) {
                        b = f[b].Fk;
                        b[h] ? b[h].push([c, a]) : b[h] = [
                            [c, a]
                        ];
                        return
                    }
                b = {};
                b[h] = [
                    [c, a]
                ];
                f.push({
                    method: l,
                    Fk: b
                })
            }
        } else {
            b = 0;
            for (d = f.length; b < d; b++)
                if (f[b].method == l) {
                    f[b].Fk.push([c, a]);
                    return
                }
            Ac && l === Ac.prototype.k.Fi ? f.unshift({
                method: l,
                Fk: [
                    [c, a]
                ]
            }) : f.push({
                method: l,
                Fk: [
                    [c, a]
                ]
            })
        }
    };
    Qb = d;
    b.prototype.Or = function() {
        return this.qa ? this.type.n.length : this.n.length
    };
    b.prototype.cc = function() {
        return this.qa ? this.type.n : this.n
    };
    b.prototype.Jj = function(c) {
        c && (c.e.Ib().Ab.te ? (this.qa && (G(this.n), Ha(this.ya, c.type.n), this.qa = !1), c = this.ya.indexOf(c), -1 !== c && (this.n.push(this.ya[c]), this.ya.splice(c, 1))) : (this.qa = !1, G(this.n), this.n[0] = c))
    };
    xb = b;
    window._c2hh_ = "9B8E65E8653E4C80672958512A488E29C3DF5E90";
    a.prototype.Lb = function(c) {
        var a, b = this.parent;
        if (this.group)
            for (this.wp = !0; b;) {
                if (!b.group) {
                    this.wp = !1;
                    break
                }
                b = b.parent
            }
        this.Ct = !this.Mw() && (!this.parent || this.parent.group && this.parent.wp);
        this.Aw = !!c;
        this.mh = this.Ha.slice(0);
        for (b = this.parent; b;) {
            c = 0;
            for (a = b.Ha.length; c < a; c++) this.kC(b.Ha[c]);
            b = b.parent
        }
        this.Ha = e(this.Ha);
        this.mh = e(this.mh);
        c = 0;
        for (a = this.Zb.length; c < a; c++) this.Zb[c].Lb();
        c = 0;
        for (a = this.je.length; c < a; c++) this.je[c].Lb();
        c = 0;
        for (a = this.xe.length; c < a; c++) this.xe[c].Lb(c < a - 1 && this.xe[c + 1].ao)
    };
    a.prototype.zy = function(c) {
        if (this.Rk !== !!c) {
            this.Rk = !!c;
            var a;
            c = 0;
            for (a = this.gn.length; c < a; ++c) this.gn[c].az();
            0 < a && this.e.eb.Rh && this.e.eb.Rh.Ht()
        }
    };
    a.prototype.lv = function(c) {
        l(c, this.Ha)
    };
    a.prototype.kC = function(c) {
        l(c, this.mh)
    };
    a.prototype.fp = function() {
        this.ut = !0;
        this.parent && this.parent.fp()
    };
    a.prototype.Mw = function() {
        return this.Zb.length ? this.Zb[0].trigger : !1
    };
    a.prototype.Wb = function() {
        var c, a, b = !1,
            d = this.e,
            h = this.e.Ib();
        h.Ab = this;
        var f = this.Zb;
        this.ao || (h.Yq = !1);
        if (this.te) {
            0 === f.length && (b = !0);
            h.Yb = 0;
            for (c = f.length; h.Yb < c; h.Yb++) a = f[h.Yb], a.trigger || (a = a.Wb()) && (b = !0);
            (h.ei = b) && this.bp()
        } else {
            h.Yb = 0;
            for (c = f.length; h.Yb < c; h.Yb++)
                if (a = f[h.Yb].Wb(), !a) {
                    h.ei = !1;
                    this.Ct && d.Vg && d.Hc();
                    return
                }
            h.ei = !0;
            this.bp()
        }
        this.oD(h)
    };
    a.prototype.oD = function(c) {
        c.ei && this.Aw && (c.Yq = !0);
        this.Ct && this.e.Vg && this.e.Hc()
    };
    a.prototype.bG = function(c) {
        this.e.Ib().Ab = this;
        this.Zb[c].Wb() && (this.bp(), this.e.Ib().ei = !0)
    };
    a.prototype.bp = function() {
        var c = this.e.Ib(),
            a;
        c.Ic = 0;
        for (a = this.je.length; c.Ic < a; c.Ic++)
            if (this.je[c.Ic].Wb()) return;
        this.ny()
    };
    a.prototype.YF = function() {
        var c = this.e.Ib(),
            a;
        for (a = this.je.length; c.Ic < a; c.Ic++)
            if (this.je[c.Ic].Wb()) return;
        this.ny()
    };
    a.prototype.ny = function() {
        if (this.xe.length) {
            var c, a, b, d, h = this.xe.length -
                1;
            this.e.Uo(this);
            if (this.ut)
                for (c = 0, a = this.xe.length; c < a; c++) b = this.xe[c], (d = !this.wp || !this.group && c < h) && this.e.pi(b.Ha), b.Wb(), d ? this.e.uf(b.Ha) : this.e.Nq(b.Ha);
            else
                for (c = 0, a = this.xe.length; c < a; c++) this.xe[c].Wb();
            this.e.Oo()
        }
    };
    a.prototype.cG = function() {
        var c = this.e.Ib();
        c.Ab = this;
        var a = !1,
            b;
        c.Yb = 0;
        for (b = this.Zb.length; c.Yb < b; c.Yb++)
            if (this.Zb[c.Yb].Wb()) a = !0;
            else if (!this.te) return !1;
        return this.te ? a : !0
    };
    a.prototype.Rj = function() {
        this.e.Th++;
        var c = this.e.Ib().Yb,
            a = this.e.Uo(this);
        if (!this.te)
            for (a.Yb = c + 1, c = this.Zb.length; a.Yb < c; a.Yb++)
                if (!this.Zb[a.Yb].Wb()) {
                    this.e.Oo();
                    return
                }
        this.bp();
        this.e.Oo()
    };
    a.prototype.ME = function(c) {
        var a = c.index;
        if (0 === a) return !0;
        for (--a; 0 <= a; --a)
            if (this.Zb[a].type === c.type) return !1;
        return !0
    };
    jc = a;
    f.prototype.Lb = function() {
        var c, a, b;
        c = 0;
        for (a = this.wa.length; c < a; c++) b = this.wa[c], b.Lb(), b.Ae && (this.tk = !0)
    };
    f.prototype.eG = function() {
        return !0
    };
    f.prototype.kt = function() {
        var c, a;
        c = 0;
        for (a = this.wa.length; c < a; c++) this.Eb[c] = this.wa[c].get();
        return Za(this.xc.apply(this.e.xf, this.Eb), this.Zr)
    };
    f.prototype.dG = function() {
        var c, a;
        c = 0;
        for (a = this.wa.length; c < a; c++) this.Eb[c] = this.wa[c].get();
        c = this.xc.apply(this.Hh ? this.Hh : this.type, this.Eb);
        this.type.Dd();
        return c
    };
    f.prototype.jt = function() {
        var c, a, b, d, h, f, l, e, n = this.type,
            g = n.da(),
            m = this.Od.te && !this.trigger;
        a = 0;
        var k = n.cd,
            p = n.ca,
            q = n.Qf,
            t = this.Je,
            D = -1 < t,
            F = this.tk,
            H = this.wa,
            A = this.Eb,
            Q = this.Zr,
            U = this.xc,
            M;
        if (F)
            for (a = 0, h = H.length; a < h; ++a) f = H[a], f.Ae || (A[a] = f.get(0));
        else
            for (a = 0, h = H.length; a < h; ++a) A[a] = H[a].get(0);
        if (g.qa) {
            G(g.n);
            G(g.ya);
            M = n.n;
            c = 0;
            for (d = M.length; c < d; ++c) {
                e = M[c];
                if (F)
                    for (a = 0, h = H.length; a < h; ++a) f = H[a], f.Ae && (A[a] = f.get(c));
                D ? (a = 0, p && (a = e.type.$i[q]), a = U.apply(e.Ca[t + a], A)) : a = U.apply(e, A);
                (l = Za(a, Q)) ? g.n.push(e): m && g.ya.push(e)
            }
            n.finish && n.finish(!0);
            g.qa = !1;
            n.Dd();
            return g.Or()
        }
        b = 0;
        M = (l = m && !this.Od.ME(this)) ? g.ya : g.n;
        var K = !1;
        c = 0;
        for (d = M.length; c < d; ++c) {
            e = M[c];
            if (F)
                for (a = 0, h = H.length; a < h; ++a) f = H[a], f.Ae && (A[a] = f.get(c));
            D ? (a = 0, p && (a = e.type.$i[q]), a = U.apply(e.Ca[t + a], A)) : a = U.apply(e, A);
            if (Za(a, Q))
                if (K = !0, l) {
                    if (g.n.push(e), k)
                        for (a = 0, h = e.siblings.length; a < h; a++) f = e.siblings[a], f.type.da().n.push(f)
                } else {
                    M[b] = e;
                    if (k)
                        for (a = 0, h = e.siblings.length; a < h; a++) f = e.siblings[a], f.type.da().n[b] = f;
                    b++
                }
            else if (l) {
                M[b] = e;
                if (k)
                    for (a = 0, h = e.siblings.length; a < h; a++) f = e.siblings[a], f.type.da().ya[b] = f;
                b++
            } else if (m && (g.ya.push(e), k))
                for (a = 0, h = e.siblings.length; a < h; a++) f = e.siblings[a], f.type.da().ya.push(f)
        }
        Da(M, b);
        if (k)
            for (p = n.Ed, c = 0, d = p.length; c < d; c++) e = p[c].da(), l ? Da(e.ya, b) : Da(e.n, b);
        b = K;
        if (l && !K)
            for (c = 0, d = g.n.length; c < d; c++) {
                e = g.n[c];
                if (F)
                    for (a = 0, h = H.length; a < h; a++) f = H[a], f.Ae && (A[a] = f.get(c));
                a = D ? U.apply(e.Ca[t], A) : U.apply(e, A);
                if (Za(a, Q)) {
                    K = !0;
                    break
                }
            }
        n.finish && n.finish(b || m);
        return m ? K : g.Or()
    };
    ec = f;
    m.prototype.Lb = function() {
        var c, a, b;
        c = 0;
        for (a = this.wa.length; c < a; c++) b = this.wa[c], b.Lb(), b.Ae && (this.tk = !0)
    };
    m.prototype.kt = function() {
        var c = this.e,
            a, b, d = this.wa,
            h = this.Eb;
        a = 0;
        for (b = d.length; a < b; ++a) h[a] = d[a].get();
        return this.xc.apply(c.xf, h)
    };
    m.prototype.jt = function() {
        var c = this.type,
            a = this.Je,
            b = c.Qf,
            d = this.tk,
            h = this.wa,
            f = this.Eb,
            l = this.xc,
            e = c.da().cc(),
            c = c.ca,
            n = -1 < a,
            g, m, k, p, q, t;
        if (d)
            for (m = 0, p = h.length; m < p; ++m) q = h[m], q.Ae || (f[m] = q.get(0));
        else
            for (m = 0, p = h.length; m < p; ++m) f[m] = h[m].get(0);
        g = 0;
        for (k = e.length; g < k; ++g) {
            t = e[g];
            if (d)
                for (m = 0, p = h.length; m < p; ++m) q = h[m], q.Ae && (f[m] = q.get(g));
            n ? (m = 0, c && (m = t.type.$i[b]), l.apply(t.Ca[a + m], f)) : l.apply(t, f)
        }
        return !1
    };
    fc = m;
    var D = [],
        F = -1;
    c.prototype.Lb = function() {
        var c, a;
        if (11 === this.type) this.Sh = this.e.rw(this.jm, this.Od.parent);
        else if (13 === this.type)
            for (c = 0, a = this.wi.length; c < a; c++) this.wi[c].Lb();
        this.gf && this.gf.Lb()
    };
    c.prototype.gF = function(c) {
        this.Ae || !c || c.G.ip || (this.Ae = !0)
    };
    c.prototype.Ey = function() {
        this.Ae = !0
    };
    c.prototype.nE = function(c) {
        this.lg = c || 0;
        c = q();
        this.gf.get(c);
        F--;
        return c.data
    };
    c.prototype.oE = function(c) {
        this.lg = c || 0;
        c = q();
        this.gf.get(c);
        F--;
        return ja(c.data) ? c.data : ""
    };
    c.prototype.wE = function() {
        return this.object
    };
    c.prototype.lE = function() {
        return this.Lv
    };
    c.prototype.sE = function(c) {
        this.lg = c || 0;
        c = q();
        this.gf.get(c);
        F--;
        return c.oc() ? this.e.Nk(c.data) : this.e.Hr(c.data)
    };
    c.prototype.tE = function() {
        return this.qb
    };
    c.prototype.rE = function() {
        return this.key
    };
    c.prototype.qE = function() {
        return this.index
    };
    c.prototype.pE = function(c) {
        c = c || 0;
        var a = this.sb.type,
            b = null,
            b = a.da(),
            d = b.cc();
        if (d.length) b = d[c % d.length].type;
        else if (b.ya.length) b = b.ya[c % b.ya.length].type;
        else if (a.n.length) b = a.n[c % a.n.length].type;
        else return 0;
        return this.index + b.Dn[a.Qf]
    };
    c.prototype.mE = function() {
        return this.Sh
    };
    c.prototype.kE = function() {
        return this.fw
    };
    c.prototype.zE = function() {
        var c, a;
        c = 0;
        for (a = this.wi.length; c < a; c++) this.im[c] = this.wi[c].get();
        return this.im
    };
    gc = c;
    h.prototype.Lb = function() {
        this.Ha = e(this.Ha)
    };
    h.prototype.ti = function(c) {
        var a = this.e.qw();
        this.parent && !this.gl && a ? (this.ki >= a.length && (a.length = this.ki + 1), a[this.ki] = c) : this.data = c
    };
    h.prototype.Pk = function() {
        var c = this.e.qw();
        return !this.parent || this.gl || !c || this.$n ? this.data : this.ki >= c.length || "undefined" === typeof c[this.ki] ? this.L : c[this.ki]
    };
    h.prototype.Wb = function() {
        !this.parent || this.gl || this.$n || this.ti(this.L)
    };
    $b = h;
    p.prototype.toString = function() {
        return "include:" + this.Vk.toString()
    };
    p.prototype.Lb = function() {
        this.Vk = this.e.$q[this.GE];
        this.sheet.Bw.add(this);
        this.Ha = e(this.Ha);
        for (var c = this.parent; c;) c.group && c.gn.push(this), c = c.parent;
        this.az()
    };
    p.prototype.Wb = function() {
        this.parent && this.e.Kl(this.e.T);
        this.Vk.Pr || this.Vk.Wb(!0);
        this.parent && this.e.uf(this.e.T)
    };
    p.prototype.az = function() {
        for (var c = this.parent; c;) {
            if (c.group && !c.Rk) {
                this.K = !1;
                return
            }
            c = c.parent
        }
        this.K = !0
    };
    kc = p;
    n.prototype.reset = function(c) {
        this.Ab = c;
        this.Ic = this.Yb = 0;
        G(this.Qy);
        this.Yq = this.ei = !1
    };
    n.prototype.Jw = function() {
        return this.Ab.ut ? !0 : this.Yb < this.Ab.Zb.length - 1 ? !!this.Ab.Ha.length : !1
    };
    Zb = n
})();
(function() {
    function k(a, b) {
        this.sb = a;
        this.e = a.e;
        this.type = b[0];
        this.get = [this.GD, this.CD, this.PD, this.SD, this.rD, this.QD, this.KD, this.zD, this.JD, this.OD, this.sD, this.ND, this.AD, this.LD, this.HD, this.ID, this.DD, this.ED, this.yD, this.RD, this.MD, this.FD, this.xD, this.BD][this.type];
        var d = null;
        this.$f = this.wa = this.Eb = this.xc = this.vp = this.second = this.first = this.value = null;
        this.Je = -1;
        this.Oe = null;
        this.ez = -1;
        this.Sh = this.jm = null;
        this.Sj = !1;
        switch (this.type) {
            case 0:
            case 1:
            case 2:
                this.value = b[1];
                break;
            case 3:
                this.first = new ic(a, b[1]);
                break;
            case 18:
                this.first = new ic(a, b[1]);
                this.second = new ic(a, b[2]);
                this.vp = new ic(a, b[3]);
                break;
            case 19:
                this.xc = this.e.zg(b[1]);
                this.xc !== P.prototype.M.random && this.xc !== P.prototype.M.yC || this.sb.Ey();
                this.Eb = [];
                this.wa = [];
                3 === b.length ? (d = b[2], this.Eb.length = d.length + 1) : this.Eb.length = 1;
                break;
            case 20:
                this.$f = this.e.T[b[1]];
                this.Je = -1;
                this.xc = this.e.zg(b[2]);
                this.Sj = b[3];
                Bc && this.xc === Bc.prototype.M.Sp && this.sb.Ey();
                b[4] ? this.Oe = new ic(a, b[4]) : this.Oe = null;
                this.Eb = [];
                this.wa = [];
                6 === b.length ? (d = b[5], this.Eb.length = d.length + 1) : this.Eb.length = 1;
                break;
            case 21:
                this.$f = this.e.T[b[1]];
                this.Sj = b[2];
                b[3] ? this.Oe = new ic(a, b[3]) : this.Oe = null;
                this.ez = b[4];
                break;
            case 22:
                this.$f = this.e.T[b[1]];
                this.$f.Mn(b[2]);
                this.Je = this.$f.Ar(b[2]);
                this.xc = this.e.zg(b[3]);
                this.Sj = b[4];
                b[5] ? this.Oe = new ic(a, b[5]) : this.Oe = null;
                this.Eb = [];
                this.wa = [];
                7 === b.length ? (d = b[6], this.Eb.length = d.length + 1) : this.Eb.length = 1;
                break;
            case 23:
                this.jm = b[1], this.Sh = null
        }
        this.sb.gF(this.$f);
        4 <= this.type && 17 >= this.type && (this.first = new ic(a, b[1]), this.second = new ic(a, b[2]));
        if (d) {
            var e, c;
            e = 0;
            for (c = d.length; e < c; e++) this.wa.push(new ic(a, d[e]))
        }
    }

    function g() {
        ++a;
        b.length === a && b.push(new hc);
        return b[a]
    }

    function e(a, b, d) {
        var e, c;
        e = 0;
        for (c = a.length; e < c; ++e) a[e].get(d), b[e + 1] = d.data
    }

    function d(a, b) {
        this.type = a || lc.Di;
        this.data = b || 0;
        this.mi = null;
        this.type == lc.Di && (this.data = Math.floor(this.data))
    }
    k.prototype.Lb = function() {
        23 === this.type && (this.Sh = this.sb.e.rw(this.jm, this.sb.Od.parent));
        this.first && this.first.Lb();
        this.second && this.second.Lb();
        this.vp && this.vp.Lb();
        this.Oe && this.Oe.Lb();
        if (this.wa) {
            var a, b;
            a = 0;
            for (b = this.wa.length; a < b; a++) this.wa[a].Lb()
        }
    };
    var b = [],
        a = -1;
    k.prototype.RD = function(b) {
        var d = this.wa,
            m = this.Eb;
        m[0] = b;
        b = g();
        e(d, m, b);
        --a;
        this.xc.apply(this.e.xf, m)
    };
    k.prototype.MD = function(b) {
        var d = this.$f,
            m = this.Eb,
            k = this.wa,
            c = this.Oe,
            h = this.xc,
            p = this.sb.lg,
            n = d.da(),
            t = n.cc();
        if (!t.length)
            if (n.ya.length) t = n.ya;
            else {
                this.Sj ? b.H("") : b.Z(0);
                return
            }
        m[0] = b;
        b.mi = d;
        b = g();
        e(k, m, b);
        c && (c.get(b), b.oc() && (p = b.data, t = d.n));
        --a;
        d = t.length;
        if (p >= d || p <= -d) p %= d;
        0 > p && (p += d);
        h.apply(t[p], m)
    };
    k.prototype.xD = function(b) {
        var d = this.$f,
            m = this.Eb,
            k = this.wa,
            c = this.Oe,
            h = this.Je,
            p = this.xc,
            n = this.sb.lg,
            t = d.da(),
            D = t.cc();
        if (!D.length)
            if (t.ya.length) D = t.ya;
            else {
                this.Sj ? b.H("") : b.Z(0);
                return
            }
        m[0] = b;
        b.mi = d;
        b = g();
        e(k, m, b);
        c && (c.get(b), b.oc() && (n = b.data, D = d.n));
        --a;
        k = D.length;
        if (n >= k || n <= -k) n %= k;
        0 > n && (n += k);
        n = D[n];
        D = 0;
        d.ca && (D = n.type.$i[d.Qf]);
        p.apply(n.Ca[h + D], m)
    };
    k.prototype.FD = function(b) {
        var d = this.Oe,
            e = this.$f,
            k = this.ez,
            c = this.sb.lg,
            h = e.da(),
            p = h.cc();
        if (!p.length)
            if (h.ya.length) p = h.ya;
            else {
                this.Sj ? b.H("") : b.Z(0);
                return
            }
        if (d) {
            h = g();
            d.get(h);
            if (h.oc()) {
                c = h.data;
                p = e.n;
                0 !== p.length && (c %= p.length, 0 > c && (c += p.length));
                c = e.Gr(c);
                e = c.ec[k];
                ja(e) ? b.H(e) : b.P(e);
                --a;
                return
            }--a
        }
        d = p.length;
        if (c >= d || c <= -d) c %= d;
        0 > c && (c += d);
        c = p[c];
        p = 0;
        e.ca && (p = c.type.Dn[e.Qf]);
        e = c.ec[k + p];
        ja(e) ? b.H(e) : b.P(e)
    };
    k.prototype.GD = function(a) {
        a.type = lc.Di;
        a.data = this.value
    };
    k.prototype.CD = function(a) {
        a.type = lc.Ci;
        a.data = this.value
    };
    k.prototype.PD = function(a) {
        a.type = lc.String;
        a.data = this.value
    };
    k.prototype.SD = function(a) {
        this.first.get(a);
        a.oc() && (a.data = -a.data)
    };
    k.prototype.rD = function(b) {
        this.first.get(b);
        var d = g();
        this.second.get(d);
        b.oc() && d.oc() && (b.data += d.data, d.hj() && b.xj());
        --a
    };
    k.prototype.QD = function(b) {
        this.first.get(b);
        var d = g();
        this.second.get(d);
        b.oc() && d.oc() && (b.data -= d.data, d.hj() && b.xj());
        --a
    };
    k.prototype.KD = function(b) {
        this.first.get(b);
        var d = g();
        this.second.get(d);
        b.oc() && d.oc() && (b.data *= d.data, d.hj() && b.xj());
        --a
    };
    k.prototype.zD = function(b) {
        this.first.get(b);
        var d = g();
        this.second.get(d);
        b.oc() && d.oc() && (b.data /= d.data, b.xj());
        --a
    };
    k.prototype.JD = function(b) {
        this.first.get(b);
        var d = g();
        this.second.get(d);
        b.oc() && d.oc() && (b.data %= d.data, d.hj() && b.xj());
        --a
    };
    k.prototype.OD = function(b) {
        this.first.get(b);
        var d = g();
        this.second.get(d);
        b.oc() && d.oc() && (b.data = Math.pow(b.data, d.data), d.hj() && b.xj());
        --a
    };
    k.prototype.sD = function(b) {
        this.first.get(b);
        var d = g();
        this.second.get(d);
        d.lj() || b.lj() ? this.uD(b, d) : this.tD(b, d);
        --a
    };
    k.prototype.uD = function(a, b) {
        a.lj() && b.lj() ? this.wD(a, b) : this.vD(a, b)
    };
    k.prototype.wD = function(a, b) {
        a.data += b.data
    };
    k.prototype.vD = function(a, b) {
        a.lj() ? a.data += (Math.round(1E10 * b.data) / 1E10).toString() : a.H(a.data.toString() + b.data)
    };
    k.prototype.tD = function(a, b) {
        a.Z(a.data && b.data ? 1 : 0)
    };
    k.prototype.ND = function(b) {
        this.first.get(b);
        var d = g();
        this.second.get(d);
        b.oc() && d.oc() && (b.data || d.data ? b.Z(1) : b.Z(0));
        --a
    };
    k.prototype.yD = function(a) {
        this.first.get(a);
        a.data ? this.second.get(a) : this.vp.get(a)
    };
    k.prototype.AD = function(b) {
        this.first.get(b);
        var d = g();
        this.second.get(d);
        b.Z(b.data === d.data ? 1 : 0);
        --a
    };
    k.prototype.LD = function(b) {
        this.first.get(b);
        var d = g();
        this.second.get(d);
        b.Z(b.data !== d.data ? 1 : 0);
        --a
    };
    k.prototype.HD = function(b) {
        this.first.get(b);
        var d = g();
        this.second.get(d);
        b.Z(b.data < d.data ? 1 : 0);
        --a
    };
    k.prototype.ID = function(b) {
        this.first.get(b);
        var d = g();
        this.second.get(d);
        b.Z(b.data <= d.data ? 1 : 0);
        --a
    };
    k.prototype.DD = function(b) {
        this.first.get(b);
        var d = g();
        this.second.get(d);
        b.Z(b.data > d.data ? 1 : 0);
        --a
    };
    k.prototype.ED = function(b) {
        this.first.get(b);
        var d = g();
        this.second.get(d);
        b.Z(b.data >= d.data ? 1 : 0);
        --a
    };
    k.prototype.BD = function(a) {
        var b = this.Sh.Pk();
        ia(b) ? a.P(b) : a.H(b)
    };
    ic = k;
    d.prototype.hj = function() {
        return this.type === lc.Ci
    };
    d.prototype.oc = function() {
        return this.type === lc.Di || this.type === lc.Ci
    };
    d.prototype.lj = function() {
        return this.type === lc.String
    };
    d.prototype.xj = function() {
        this.hj() || (this.lj() && (this.data = parseFloat(this.data)), this.type = lc.Ci)
    };
    d.prototype.Z = function(a) {
        this.type = lc.Di;
        this.data = Math.floor(a)
    };
    d.prototype.P = function(a) {
        this.type = lc.Ci;
        this.data = a
    };
    d.prototype.H = function(a) {
        this.type = lc.String;
        this.data = a
    };
    d.prototype.vi = function(a) {
        ia(a) ? (this.type = lc.Ci, this.data = a) : ja(a) ? (this.type = lc.String, this.data = a.toString()) : (this.type = lc.Di, this.data = 0)
    };
    hc = d;
    lc = {
        Di: 0,
        Ci: 1,
        String: 2
    }
})();

function P(k) {
    this.e = k;
    this.Gc = []
}
P.prototype.ja = function() {
    var k = {},
        g, e, d, b, a, l, f, m;
    k.waits = [];
    var q = k.waits,
        c;
    g = 0;
    for (e = this.Gc.length; g < e; g++) {
        l = this.Gc[g];
        c = {
            t: l.time,
            st: l.hp,
            s: l.Ul,
            ev: l.Qh.Ja,
            sm: [],
            sols: {}
        };
        l.Qh.je[l.Ic] && (c.act = l.Qh.je[l.Ic].Ja);
        d = 0;
        for (b = l.Ha.length; d < b; d++) c.sm.push(l.Ha[d].Ja);
        for (a in l.Tc)
            if (l.Tc.hasOwnProperty(a)) {
                f = this.e.T[parseInt(a, 10)];
                m = {
                    sa: l.Tc[a].Ol,
                    insts: []
                };
                d = 0;
                for (b = l.Tc[a].mf.length; d < b; d++) m.insts.push(l.Tc[a].mf[d].uid);
                c.sols[f.Ja.toString()] = m
            }
        q.push(c)
    }
    return k
};
P.prototype.ua = function(k) {
    k = k.waits;
    var g, e, d, b, a, l, f, m, q, c, h;
    G(this.Gc);
    g = 0;
    for (e = k.length; g < e; g++)
        if (l = k[g], m = this.e.Cv[l.ev.toString()]) {
            q = -1;
            d = 0;
            for (b = m.je.length; d < b; d++)
                if (m.je[d].Ja === l.act) {
                    q = d;
                    break
                }
            if (-1 !== q) {
                f = {
                    Tc: {},
                    Ha: [],
                    Wq: !1
                };
                f.time = l.t;
                f.hp = l.st || "";
                f.Ul = !!l.s;
                f.Qh = m;
                f.Ic = q;
                d = 0;
                for (b = l.sm.length; d < b; d++)(m = this.e.On(l.sm[d])) && f.Ha.push(m);
                for (a in l.sols)
                    if (l.sols.hasOwnProperty(a) && (m = this.e.On(parseInt(a, 10)))) {
                        q = l.sols[a];
                        c = {
                            Ol: q.sa,
                            mf: []
                        };
                        d = 0;
                        for (b = q.insts.length; d < b; d++)(h = this.e.nc(q.insts[d])) && c.mf.push(h);
                        f.Tc[m.index.toString()] = c
                    }
                this.Gc.push(f)
            }
        }
};
(function() {
    function k() {}

    function g() {}

    function e() {
        var c;
        m.length ? c = m.pop() : c = {
            Tc: {},
            Ha: []
        };
        c.Wq = !1;
        return c
    }

    function d() {
        var c;
        q.length ? c = q.pop() : c = {
            mf: []
        };
        c.Ol = !1;
        return c
    }

    function b() {}
    var a = P.prototype;
    k.prototype.Jz = function() {
        return !0
    };
    k.prototype.ou = function() {
        return !0
    };
    k.prototype.HA = function() {
        return !0
    };
    k.prototype.xz = function(c, a, b) {
        return mc(c, a, b)
    };
    k.prototype.Lz = function(c, a, b) {
        var d = this.e.Ib(),
            f = d.Ab,
            d = d.Jw();
        c = this.e.OF(c);
        if (b < a)
            if (d)
                for (; a >= b && !c.Nb; --a) this.e.pi(f.Ha), c.index = a, f.Rj(), this.e.uf(f.Ha);
            else
                for (; a >= b && !c.Nb; --a) c.index = a, f.Rj();
        else if (d)
            for (; a <= b && !c.Nb; ++a) this.e.pi(f.Ha), c.index = a, f.Rj(), this.e.uf(f.Ha);
        else
            for (; a <= b && !c.Nb; ++a) c.index = a, f.Rj();
        this.e.FF();
        return !1
    };
    var l = [],
        f = -1;
    k.prototype.dB = function(a, b, d, e) {
        var g, m, k, q;
        if (a) {
            f++;
            l.length === f && l.push([]);
            var u = l[f],
                y = a.da();
            Ha(u, y.cc());
            y.qa && G(y.ya);
            var C = this.e.Cr();
            k = g = 0;
            for (m = u.length; g < m; g++) q = u[g], u[k] = q, b = C.wa[1].get(g), e = C.wa[3].get(g), mc(b, d, e) ? k++ : y.ya.push(q);
            Da(u, k);
            y.qa = !1;
            Ha(y.n, u);
            G(u);
            f--;
            a.Dd();
            return !!y.n.length
        }
    };
    k.prototype.SB = function() {
        var a = this.e.Cr().cb;
        "undefined" === typeof a.TriggerOnce_lastTick && (a.TriggerOnce_lastTick = -1);
        var b = a.TriggerOnce_lastTick,
            d = this.e.ze;
        a.TriggerOnce_lastTick = d;
        return this.e.rs || b !== d - 1
    };
    k.prototype.fB = function(a) {
        if (!a) return !1;
        var b = a.da(),
            d = b.cc(),
            f = qa(Math.random() * d.length);
        if (f >= d.length) return !1;
        b.Jj(d[f]);
        a.Dd();
        return !0
    };
    k.prototype.Dz = function(a, b, d) {
        return mc(a.Pk(), b, d)
    };
    k.prototype.au = function() {
        var a = this.e.Ib();
        return a.Yq ? !1 : !a.ei
    };
    k.prototype.pu = function() {
        return !0
    };
    k.prototype.qA = function() {
        return !0
    };
    k.prototype.Xp = function() {
        return !0
    };
    k.prototype.vu = function() {
        return !0
    };
    k.prototype.IA = function() {
        return !0
    };
    k.prototype.wm = function() {
        return !0
    };
    k.prototype.oz = function(a, b, d) {
        return Ta(I(a), I(d)) <= I(b)
    };
    k.prototype.Xz = function(a, b) {
        return Va(I(a), I(b))
    };
    k.prototype.Wz = function(a, b, d) {
        a = Ra(a);
        b = Ra(b);
        d = Ra(d);
        return Va(d, b) ? Va(a, b) && !Va(a, d) : !(!Va(a, b) && Va(a, d))
    };
    a.k = new k;
    g.prototype.Qz = function(a) {
        this.e.nj || this.e.Kh || (this.e.Kh = a)
    };
    g.prototype.EB = function(a, b) {
        0 === a.Gp ? ia(b) ? a.ti(b) : a.ti(parseFloat(b)) : 1 === a.Gp && a.ti(b.toString())
    };
    g.prototype.nz = function(a, b) {
        0 === a.Gp ? ia(b) ? a.ti(a.Pk() + b) : a.ti(a.Pk() + parseFloat(b)) : 1 === a.Gp && a.ti(a.Pk() + b.toString())
    };
    var m = [],
        q = [];
    g.prototype.UB = function(a) {
        if (!(0 > a)) {
            var b, f, l, g = this.e.Ib(),
                m = e();
            m.time = this.e.gb.aa + a;
            m.hp = "";
            m.Ul = !1;
            m.Qh = g.Ab;
            m.Ic = g.Ic + 1;
            a = 0;
            for (b = this.e.T.length; a < b; a++) l = this.e.T[a], f = l.da(), f.qa && -1 === g.Ab.Ha.indexOf(l) || (m.Ha.push(l), l = d(), l.Ol = f.qa, Ha(l.mf, f.n), m.Tc[a.toString()] = l);
            this.Gc.push(m);
            return !0
        }
    };
    g.prototype.VB = function(a) {
        var b, f, l, g = this.e.Ib(),
            m = e();
        m.time = -1;
        m.hp = a.toLowerCase();
        m.Ul = !1;
        m.Qh = g.Ab;
        m.Ic = g.Ic + 1;
        a = 0;
        for (b = this.e.T.length; a < b; a++) l = this.e.T[a], f = l.da(), f.qa && -1 === g.Ab.Ha.indexOf(l) || (m.Ha.push(l), l = d(), l.Ol = f.qa, Ha(l.mf, f.n), m.Tc[a.toString()] = l);
        this.Gc.push(m);
        return !0
    };
    g.prototype.IB = function(a) {
        a = a.toLowerCase();
        var b, d, f;
        b = 0;
        for (d = this.Gc.length; b < d; ++b) f = this.Gc[b], -1 === f.time && f.hp === a && (f.Ul = !0)
    };
    g.prototype.lB = function() {
        var a, b, d;
        a = 0;
        for (b = this.e.wq.length; a < b; a++) d = this.e.wq[a], d.data = d.L
    };
    g.prototype.NB = function() {
        0 > this.e.wj || (this.e.Dr().Nb = !0)
    };
    g.prototype.nB = function() {
        if (!this.e.nj && !this.e.Kh && this.e.eb) {
            this.e.Kh = this.e.eb;
            var a, b, d;
            a = 0;
            for (b = this.e.Hg.length; a < b; a++) d = this.e.Hg[a], d.zy(d.Un)
        }
    };
    g.prototype.mB = function() {
        var a, b;
        a = 0;
        for (b = this.e.Hd.length; a < b; ++a) this.e.Hd[a].fg = {}, this.e.Hd[a].Uh = !0
    };
    a.B = new g;
    b.prototype["int"] = function(a, b) {
        ja(b) ? (a.Z(parseInt(b, 10)), isNaN(a.data) && (a.data = 0)) : a.Z(b)
    };
    b.prototype["float"] = function(a, b) {
        ja(b) ? (a.P(parseFloat(b)), isNaN(a.data) && (a.data = 0)) : a.P(b)
    };
    b.prototype.sG = function(a, b) {
        ja(b) ? a.H(b) : a.H(b.toString())
    };
    b.prototype.random = function(a, b, d) {
        void 0 === d ? a.P(Math.random() * b) : a.P(Math.random() * (d - b) + b)
    };
    b.prototype.sqrt = function(a, b) {
        a.P(Math.sqrt(b))
    };
    b.prototype.abs = function(a, b) {
        a.P(Math.abs(b))
    };
    b.prototype.round = function(a, b) {
        a.Z(Math.round(b))
    };
    b.prototype.floor = function(a, b) {
        a.Z(Math.floor(b))
    };
    b.prototype.ceil = function(a, b) {
        a.Z(Math.ceil(b))
    };
    b.prototype.sin = function(a, b) {
        a.P(Math.sin(I(b)))
    };
    b.prototype.cos = function(a, b) {
        a.P(Math.cos(I(b)))
    };
    b.prototype.tan = function(a, b) {
        a.P(Math.tan(I(b)))
    };
    b.prototype.asin = function(a, b) {
        a.P(Na(Math.asin(b)))
    };
    b.prototype.acos = function(a, b) {
        a.P(Na(Math.acos(b)))
    };
    b.prototype.atan = function(a, b) {
        a.P(Na(Math.atan(b)))
    };
    b.prototype.exp = function(a, b) {
        a.P(Math.exp(b))
    };
    b.prototype.log10 = function(a, b) {
        a.P(Math.log(b) / Math.LN10)
    };
    b.prototype.max = function(a) {
        var b = arguments[1];
        "number" !== typeof b && (b = 0);
        var d,
            f, e;
        d = 2;
        for (f = arguments.length; d < f; d++) e = arguments[d], "number" === typeof e && b < e && (b = e);
        a.P(b)
    };
    b.prototype.min = function(a) {
        var b = arguments[1];
        "number" !== typeof b && (b = 0);
        var d, f, e;
        d = 2;
        for (f = arguments.length; d < f; d++) e = arguments[d], "number" === typeof e && b > e && (b = e);
        a.P(b)
    };
    b.prototype.Rg = function(a) {
        a.P(this.e.Rg)
    };
    b.prototype.$j = function(a) {
        a.P(this.e.$j)
    };
    b.prototype.time = function(a) {
        a.P(this.e.gb.aa)
    };
    b.prototype.ze = function(a) {
        a.Z(this.e.ze)
    };
    b.prototype.wo = function(a) {
        a.Z(this.e.wo)
    };
    b.prototype.sr = function(a) {
        a.Z(this.e.sr)
    };
    b.prototype.cF = function(a, b) {
        var d, f;
        if (this.e.ul.length)
            if (b) {
                for (f = this.e.wj; 0 <= f; --f)
                    if (d = this.e.ul[f], d.name === b) {
                        a.Z(d.index);
                        return
                    }
                a.Z(0)
            } else d = this.e.Dr(), a.Z(d ? d.index : -1);
        else a.Z(0)
    };
    b.prototype.u = function(a, b, d, f, e) {
        a.P(Na(Sa(b, d, f, e)))
    };
    b.prototype.left = function(a, b, d) {
        a.H(ja(b) ? b.substr(0, d) : "")
    };
    b.prototype.right = function(a, b, d) {
        a.H(ja(b) ? b.substr(b.length - d) : "")
    };
    b.prototype.replace = function(a, b, d, f) {
        ja(b) && ja(d) && ja(f) ? a.H(b.replace(new RegExp(hb(d), "gi"), f)) : a.H(ja(b) ? b : "")
    };
    b.prototype.trim = function(a, b) {
        a.H(ja(b) ? b.trim() : "")
    };
    b.prototype.yC = function(a) {
        var b = qa(Math.random() * (arguments.length - 1));
        a.vi(arguments[b + 1])
    };
    b.prototype.$F = function(a, b, d, f) {
        a.Z(xa(b, d, f))
    };
    b.prototype.Qq = function(a) {
        a.P(this.e.Qq / 1E3)
    };
    b.prototype.uj = function(a) {
        a.P(this.e.uj)
    };
    a.M = new b;
    a.aG = function() {
        var a, b, d, f, e, l, g = this.e.Ib();
        a = 0;
        for (d = this.Gc.length; a < d; a++) {
            f = this.Gc[a];
            if (-1 === f.time) {
                if (!f.Ul) continue
            } else if (f.time > this.e.gb.aa) continue;
            g.Ab = f.Qh;
            g.Ic = f.Ic;
            g.Yb = 0;
            for (b in f.Tc) f.Tc.hasOwnProperty(b) && (e = this.e.T[parseInt(b, 10)].da(), l = f.Tc[b], e.qa = l.Ol, Ha(e.n, l.mf), e = l, G(e.mf), q.push(e));
            f.Qh.YF();
            this.e.Nq(f.Ha);
            f.Wq = !0
        }
        b = a = 0;
        for (d = this.Gc.length; a < d; a++) f = this.Gc[a], this.Gc[b] = f, f.Wq ? (bb(f.Tc), G(f.Ha), m.push(f)) : b++;
        Da(this.Gc, b)
    }
})();
(function() {
    wb = function(g, e) {
        var d = g[1],
            b = g[3],
            a = g[4],
            l = g[5],
            f = g[6],
            m = g[7],
            k = g[8];
        e.k || (e.k = {});
        e.B || (e.B = {});
        e.M || (e.M = {});
        var c = e.k,
            h = e.B,
            p = e.M;
        b && (c.dH = function(a, c) {
            return mc(this.x, a, c)
        }, c.eH = function(a, c) {
            return mc(this.y, a, c)
        }, c.KH = function() {
            var a = this.C;
            this.ib();
            var c = this.lb;
            return !(c.right < a.Na || c.bottom < a.Oa || c.left > a.Ta || c.top > a.Sa)
        }, c.LH = function() {
            this.ib();
            var a = this.lb,
                c = this.e.eb;
            return 0 > a.right || 0 > a.bottom || a.left > c.width || a.top > c.height
        }, c.$H = function(a, c, b) {
            var d = this.da(),
                h = d.cc();
            if (!h.length) return !1;
            var f = h[0],
                e = f,
                l = Ya(f.x, f.y, c, b),
                g, m, k;
            g = 1;
            for (m = h.length; g < m; g++)
                if (f = h[g], k = Ya(f.x, f.y, c, b), 0 === a && k < l || 1 === a && k > l) l = k, e = f;
            d.Jj(e);
            return !0
        }, h.KI = function(a) {
            this.x !== a && (this.x = a, this.za())
        }, h.LI = function(a) {
            this.y !== a && (this.y = a, this.za())
        }, h.CI = function(a, c) {
            if (this.x !== a || this.y !== c) this.x = a, this.y = c, this.za()
        }, h.DI = function(a, c) {
            var b = a.fE(this);
            if (b) {
                var d;
                b.Mk ? (d = b.Mk(c, !0), b = b.Mk(c, !1)) : (d = b.x, b = b.y);
                if (this.x !== d || this.y !== b) this.x = d, this.y = b, this.za()
            }
        }, h.UH = function(a) {
            0 !== a && (this.x += Math.cos(this.u) * a, this.y += Math.sin(this.u) * a, this.za())
        }, h.TH = function(a, c) {
            0 !== c && (this.x += Math.cos(I(a)) * c, this.y += Math.sin(I(a)) * c, this.za())
        }, p.XB = function(a) {
            a.P(this.x)
        }, p.YB = function(a) {
            a.P(this.y)
        }, p.Rg = function(a) {
            a.P(this.e.Ne(this))
        });
        a && (c.cH = function(a, c) {
            return mc(this.width, a, c)
        }, c.aH = function(a, c) {
            return mc(this.height, a, c)
        }, h.Lm = function(a) {
            this.width !== a && (this.width = a, this.za())
        }, h.gq = function(a) {
            this.height !== a && (this.height = a, this.za())
        }, h.AB = function(a, c) {
            if (this.width !== a || this.height !== c) this.width = a, this.height = c, this.za()
        }, p.WB = function(a) {
            a.P(this.width)
        }, p.Vz = function(a) {
            a.P(this.height)
        }, p.UG = function(a) {
            this.ib();
            a.P(this.lb.left)
        }, p.WG = function(a) {
            this.ib();
            a.P(this.lb.top)
        }, p.VG = function(a) {
            this.ib();
            a.P(this.lb.right)
        }, p.TG = function(a) {
            this.ib();
            a.P(this.lb.bottom)
        });
        l && (c.oz = function(a, c) {
            return Ta(this.u, I(c)) <= I(a)
        }, c.Xz = function(a) {
            return Va(this.u, I(a))
        }, c.Wz = function(a, c) {
            var b = Ra(a),
                d = Ra(c),
                h = Pa(this.u);
            return Va(d, b) ? Va(h, b) && !Va(h, d) : !(!Va(h, b) && Va(h, d))
        }, h.qI = function(a) {
            a = I(Oa(a));
            isNaN(a) || this.u === a || (this.u = a, this.za())
        }, h.kI = function(a) {
            0 === a || isNaN(a) || (this.u += I(a), this.u = Pa(this.u), this.za())
        }, h.lI = function(a) {
            0 === a || isNaN(a) || (this.u -= I(a), this.u = Pa(this.u), this.za())
        }, h.mI = function(a, c) {
            var b = Ua(this.u, I(c), I(a));
            isNaN(b) || this.u === b || (this.u = b, this.za())
        }, h.nI = function(a, c, b) {
            a = Ua(this.u, Math.atan2(b - this.y, c - this.x), I(a));
            isNaN(a) || this.u === a || (this.u = a, this.za())
        }, h.JI = function(a, c) {
            var b = Math.atan2(c -
                this.y, a - this.x);
            isNaN(b) || this.u === b || (this.u = b, this.za())
        }, p.RG = function(a) {
            a.P(Qa(this.u))
        });
        d || (c.Yt = function(a, c, b) {
            return mc(this.ec[a], c, b)
        }, c.EH = function(a) {
            return this.ec[a]
        }, c.aI = function(a, c) {
            var b = this.da(),
                d = b.cc();
            if (!d.length) return !1;
            var h = d[0],
                f = h,
                e = h.ec[c],
                l, g, m;
            l = 1;
            for (g = d.length; l < g; l++)
                if (h = d[l], m = h.ec[c], 0 === a && m < e || 1 === a && m > e) e = m, f = h;
            b.Jj(f);
            return !0
        }, c.eB = function(a) {
            var c, b, d, h, f;
            if (this.e.Cr().Zr) {
                f = this.da();
                if (f.qa)
                    for (f.qa = !1, G(f.n), G(f.ya), d = this.n, c = 0, b = d.length; c < b; c++) h = d[c], h.uid === a ? f.ya.push(h) : f.n.push(h);
                else {
                    d = c = 0;
                    for (b = f.n.length; c < b; c++) h = f.n[c], f.n[d] = h, h.uid === a ? f.ya.push(h) : d++;
                    Da(f.n, d)
                }
                this.Dd();
                return !!f.n.length
            }
            h = this.e.nc(a);
            if (!h) return !1;
            f = this.da();
            if (!f.qa && -1 === f.n.indexOf(h)) return !1;
            if (this.ca)
                for (a = h.type.pb, c = 0, b = a.length; c < b; c++) {
                    if (a[c] === this) return f.Jj(h), this.Dd(), !0
                } else if (h.type === this) return f.Jj(h), this.Dd(), !0;
            return !1
        }, c.zh = function() {
            return !0
        }, c.yA = function() {
            return !0
        }, h.Hu = function(a, c) {
            var b = this.ec;
            ia(b[a]) ? b[a] = ia(c) ? c : parseFloat(c) : ja(b[a]) && (b[a] = ja(c) ? c : c.toString())
        }, h.lz = function(a, c) {
            var b = this.ec;
            ia(b[a]) ? b[a] = ia(c) ? b[a] + c : b[a] + parseFloat(c) : ja(b[a]) && (b[a] = ja(c) ? b[a] + c : b[a] + c.toString())
        }, h.TI = function(a, c) {
            var b = this.ec;
            ia(b[a]) && (b[a] = ia(c) ? b[a] - c : b[a] - parseFloat(c))
        }, h.rI = function(a, c) {
            this.ec[a] = c ? 1 : 0
        }, h.YI = function(a) {
            this.ec[a] = 1 - this.ec[a]
        }, h.Hz = function() {
            this.e.Ce(this)
        }, h.gA || (h.gA = function(a) {
            var c, b;
            try {
                c = JSON.parse(a)
            } catch (d) {
                return
            }
            this.e.no(this, c, !0);
            this.bd && this.bd();
            if (this.Ca)
                for (a = 0, c = this.Ca.length; a < c; ++a) b = this.Ca[a], b.bd && b.bd()
        }), p.Fz = function(a) {
            var c = a.mi.n.length,
                b, d, h;
            b = 0;
            for (d = this.e.ef.length; b < d; b++) h = this.e.ef[b], a.mi.ca ? 0 <= h.type.pb.indexOf(a.mi) && c++ : h.type === a.mi && c++;
            a.Z(c)
        }, p.cI = function(a) {
            a.Z(a.mi.da().cc().length)
        }, p.TB = function(a) {
            a.Z(this.uid)
        }, p.CH = function(a) {
            a.Z(this.Qk())
        }, p.Rp || (p.Rp = function(a) {
            a.H(JSON.stringify(this.e.lt(this, !0)))
        }));
        f && (c.NH = function() {
            return this.visible
        }, h.GB = function(a) {
            !a !== !this.visible && (this.visible = !!a, this.e.xa = !0)
        }, c.bH = function(a, c) {
            return mc(nb(100 * this.opacity), a, c)
        }, h.wB = function(a) {
            a = a / 100;
            0 > a ? a = 0 : 1 < a && (a = 1);
            a !== this.opacity && (this.opacity = a, this.e.xa = !0)
        }, p.Opacity = function(a) {
            a.P(nb(100 * this.opacity))
        });
        m && (c.JH = function(a) {
            return a ? this.C === a : !1
        }, c.bI = function(a) {
            var c = this.da(),
                b = c.cc();
            if (!b.length) return !1;
            var d = b[0],
                h = d,
                f, e;
            f = 1;
            for (e = b.length; f < e; f++)
                if (d = b[f], 0 === a) {
                    if (d.C.index > h.C.index || d.C.index === h.C.index && d.lf() > h.lf()) h = d
                } else if (d.C.index < h.C.index || d.C.index === h.C.index && d.lf() < h.lf()) h = d;
            c.Jj(h);
            return !0
        }, h.hu = function() {
            var a = this.C,
                c = a.n;
            c.length && c[c.length - 1] === this || (a.Qj(this, !1), a.vk(this, !1), this.e.xa = !0)
        }, h.jA = function() {
            var a = this.C,
                c = a.n;
            c.length && c[0] === this || (a.Qj(this, !1), a.KF(this), this.e.xa = !0)
        }, h.kA = function(a) {
            a && a != this.C && (this.C.Qj(this, !0), this.C = a, a.vk(this, !0), this.e.xa = !0)
        }, h.aJ = function(a, c) {
            var b = 0 === a;
            if (c) {
                var d = c.kf(this);
                d && d.uid !== this.uid && (this.C.index !== d.C.index && (this.C.Qj(this, !0), this.C = d.C, d.C.vk(this, !0)), this.C.iF(this, d, b), this.e.xa = !0)
            }
        }, p.PH = function(a) {
            a.Z(this.C.Cx)
        }, p.OH = function(a) {
            a.H(this.C.name)
        }, p.$I = function(a) {
            a.Z(this.lf())
        });
        k && (h.uI = function(a, c) {
            if (this.e.S) {
                var b = this.type.Fr(c);
                if (!(0 > b)) {
                    var d = 1 === a;
                    this.Eg[b] !== d && (this.Eg[b] = d, this.Ve(), this.e.xa = !0)
                }
            }
        }, h.vI = function(a, c, b) {
            if (this.e.S) {
                var d = this.type.Fr(a);
                0 > d || (a = this.type.ma[d], d = this.Bb[d], c = Math.floor(c), 0 > c || c >= d.length || (1 === this.e.S.jE(a.Xb, c) && (b /= 100), d[c] !== b && (d[c] = b, a.K && (this.e.xa = !0))))
            }
        })
    };
    Rb = function() {
        this.Hq = this.Zm = !0;
        this.type.uv = !0;
        this.e.xa = !0;
        var g, e, d = this.Aq;
        g = 0;
        for (e = d.length; g < e; ++g) d[g](this);
        this.C.he && this.ib()
    };
    Sb = function(g) {
        g && this.Aq.push(g)
    };
    Ub = function() {
        if (this.Zm) {
            var g = this.lb,
                e = this.Hf;
            g.set(this.x, this.y, this.x + this.width, this.y + this.height);
            g.offset(-this.nd * this.width, -this.od * this.height);
            this.u ? (g.offset(-this.x, -this.y), e.Fy(g, this.u), e.offset(this.x, this.y), e.Dv(g)) : e.Rl(g);
            g.normalize();
            this.Zm = !1;
            this.cz()
        }
    };
    var k = new va(0, 0, 0, 0);
    Vb = function() {
        if (this.C.he) {
            var g = this.C.Ec,
                e = this.lb;
            k.set(g.hd(e.left), g.jd(e.top), g.hd(e.right), g.jd(e.bottom));
            this.xd.Ek(k) || (this.xd.right < this.xd.left ? g.update(this, null, k) : g.update(this, this.xd, k), this.xd.Ak(k), this.C.Se = !0)
        }
    };
    Wb = function() {
        if (this.Hq && this.yk) {
            this.ib();
            var g = this.type.Kv,
                e = this.lb;
            k.set(g.hd(e.left), g.jd(e.top), g.hd(e.right), g.jd(e.bottom));
            this.Og.Ek(k) || (this.Og.right < this.Og.left ? g.update(this, null, k) : g.update(this, this.Og, k), this.Og.Ak(k), this.Hq = !1)
        }
    };
    Tb = function(g, e) {
        return this.lb.Pd(g, e) && this.Hf.Pd(g, e) ? this.df && !this.df.WE() ? (this.df.uC(this.width, this.height, this.u), this.df.Pd(g - this.x, e - this.y)) : !0 : !1
    };
    Nb = function() {
        this.type.Cp();
        return this.Zh
    };
    Xb = function() {
        this.C.Kt();
        return this.We
    };
    Yb = function() {
        G(this.Xa);
        var g, e, d, b = !0;
        g = 0;
        for (e = this.Eg.length; g < e; g++) this.Eg[g] && (d = this.type.ma[g], this.Xa.push(d), d.Re || (b = !1));
        this.dz = !!this.Xa.length;
        this.kg = b
    };
    Ob = function() {
        return "Inst" + this.ey
    };
    zb = function(g) {
        if (g && g.cd && g.type != this) {
            var e, d, b;
            e = 0;
            for (d = g.siblings.length; e < d; e++)
                if (b = g.siblings[e], b.type == this) return b
        }
        g = this.da().cc();
        return g.length ? g[0] : null
    };
    Ab = function(g) {
        var e = this.da().cc();
        return e.length ? e[g.Qk() % e.length] : null
    };
    yb = function() {
        if (this.Xj && !this.ca) {
            var g, e;
            g = 0;
            for (e = this.n.length; g < e; g++) this.n[g].Zh = g;
            var d = g,
                b = this.e.ef;
            g = 0;
            for (e = b.length; g < e; ++g) b[g].type === this && (b[g].Zh = d++);
            this.Xj = !1
        }
    };
    Lb = function(g) {
        if (g < this.n.length) return this.n[g];
        g -= this.n.length;
        var e = this.e.ef,
            d, b;
        d = 0;
        for (b = e.length; d < b; ++d)
            if (e[d].type === this) {
                if (0 === g) return e[d];
                --g
            }
        return null
    };
    Bb = function() {
        return this.mg[this.ff]
    };
    Db = function() {
        this.ff++;
        this.ff === this.mg.length ? this.mg.push(new xb(this)) : (this.mg[this.ff].qa = !0, G(this.mg[this.ff].ya))
    };
    Eb = function() {
        this.ff++;
        this.ff === this.mg.length && this.mg.push(new xb(this));
        var g = this.mg[this.ff],
            e = this.mg[this.ff - 1];
        e.qa ? (g.qa = !0, G(g.ya)) : (g.qa = !1, Ha(g.n, e.n), Ha(g.ya, e.ya))
    };
    Fb = function() {
        this.ff--
    };
    Gb = function(g) {
        var e, d, b, a, l, f = 0;
        if (!this.ca)
            for (e = 0, d = this.pb.length; e < d; e++)
                for (l = this.pb[e], b = 0, a = l.xb.length; b < a; b++) {
                    if (g === l.xb[b].name) return this.cb.lastBehIndex = f, l.xb[b];
                    f++
                }
        e = 0;
        for (d = this.xb.length; e < d; e++) {
            if (g === this.xb[e].name) return this.cb.lastBehIndex = f, this.xb[e];
            f++
        }
        return null
    };
    Hb = function(g) {
        return this.Mn(g) ? this.cb.lastBehIndex : -1
    };
    Ib = function(g) {
        var e, d;
        e = 0;
        for (d = this.ma.length; e < d; e++)
            if (this.ma[e].name === g) return e;
        return -1
    };
    Kb = function() {
        if (this.cd && !this.ca) {
            var g, e, d, b, a, l, f;
            this.Cp();
            l = this.da();
            var m = l.qa,
                k = (g = this.e.Ib()) && g.Ab && g.Ab.te;
            g = 0;
            for (e = this.Ed.length; g < e; g++)
                if (a = this.Ed[g], a !== this && (a.Cp(), f = a.da(), f.qa = m, !m)) {
                    G(f.n);
                    d = 0;
                    for (b = l.n.length; d < b; ++d) f.n[d] = a.Gr(l.n[d].Zh);
                    if (k)
                        for (G(f.ya), d = 0, b = l.ya.length; d < b; ++d) f.ya[d] = a.Gr(l.ya[d].Zh)
                }
        }
    };
    Mb = function() {
        return "Type" + this.Ja
    };
    mc = function(g, e, d) {
        if ("undefined" === typeof g || "undefined" === typeof d) return !1;
        switch (e) {
            case 0:
                return g === d;
            case 1:
                return g !== d;
            case 2:
                return g < d;
            case 3:
                return g <= d;
            case 4:
                return g > d;
            case 5:
                return g >= d;
            default:
                return !1
        }
    }
})();
var xc = {};

function Cc(k) {
    this.e = k
}
(function() {
    function k(a) {
        0 > a && (a = 0);
        1 < a && (a = 1);
        return Math.log(a) / Math.log(10) * 20
    }

    function g(a) {
        a = a.toLowerCase();
        return da.hasOwnProperty(a) && da[a].length ? da[a][0].Td() : E.destination
    }

    function e() {
        return E.createGain ? E.createGain() : E.createGainNode()
    }

    function d(a) {
        return E.createDelay ? E.createDelay(a) : E.createDelayNode(a)
    }

    function b(a, c) {
        a.start ? a.start(c || 0) : a.noteOn(c || 0)
    }

    function a(a, c, b, d) {
        a.start ? a.start(d || 0, c) : a.noteGrainOn(d || 0, c, b - c)
    }

    function l(a) {
        try {
            a.stop ? a.stop(0) : a.noteOff(0)
        } catch (c) {}
    }

    function f(a, c, b, d, h, f) {
        this.type = "filter";
        this.ic = [a, c, b, d, h, f];
        this.La = e();
        this.la = e();
        this.la.gain.value = f;
        this.ka = e();
        this.ka.gain.value = 1 - f;
        this.Qb = E.createBiquadFilter();
        this.Qb.type = "number" === typeof this.Qb.type ? a : yd[a];
        this.Qb.frequency.value = c;
        this.Qb.detune && (this.Qb.detune.value = b);
        this.Qb.Q.value = d;
        this.Qb.gain.value = h;
        this.La.connect(this.Qb);
        this.La.connect(this.ka);
        this.Qb.connect(this.la)
    }

    function m(a, c, b) {
        this.type = "delay";
        this.ic = [a, c, b];
        this.La = e();
        this.la = e();
        this.la.gain.value = b;
        this.ka = e();
        this.ka.gain.value = 1 - b;
        this.wl = e();
        this.me = d(a);
        this.me.delayTime.value = a;
        this.pn = e();
        this.pn.gain.value = c;
        this.La.connect(this.wl);
        this.La.connect(this.ka);
        this.wl.connect(this.la);
        this.wl.connect(this.me);
        this.me.connect(this.pn);
        this.pn.connect(this.wl)
    }

    function q(a, c, b, d) {
        this.type = "convolve";
        this.ic = [c, b, d];
        this.La = e();
        this.la = e();
        this.la.gain.value = b;
        this.ka = e();
        this.ka.gain.value = 1 - b;
        this.Lh = E.createConvolver();
        a && (this.Lh.normalize = c, this.Lh.buffer = a);
        this.La.connect(this.Lh);
        this.La.connect(this.ka);
        this.Lh.connect(this.la)
    }

    function c(a, c, h, f, l) {
        this.type = "flanger";
        this.ic = [a, c, h, f, l];
        this.La = e();
        this.ka = e();
        this.ka.gain.value = 1 - l / 2;
        this.la = e();
        this.la.gain.value = l / 2;
        this.En = e();
        this.En.gain.value = f;
        this.me = d(a + c);
        this.me.delayTime.value = a;
        this.qc = E.createOscillator();
        this.qc.frequency.value = h;
        this.Ld = e();
        this.Ld.gain.value = c;
        this.La.connect(this.me);
        this.La.connect(this.ka);
        this.me.connect(this.la);
        this.me.connect(this.En);
        this.En.connect(this.me);
        this.qc.connect(this.Ld);
        this.Ld.connect(this.me.delayTime);
        b(this.qc)
    }

    function h(a, c, d, h, f, l) {
        this.type = "phaser";
        this.ic = [a, c, d, h, f, l];
        this.La = e();
        this.ka = e();
        this.ka.gain.value = 1 - l / 2;
        this.la = e();
        this.la.gain.value = l / 2;
        this.Qb = E.createBiquadFilter();
        this.Qb.type = "number" === typeof this.Qb.type ? 7 : "allpass";
        this.Qb.frequency.value = a;
        this.Qb.detune && (this.Qb.detune.value = c);
        this.Qb.Q.value = d;
        this.qc = E.createOscillator();
        this.qc.frequency.value = f;
        this.Ld = e();
        this.Ld.gain.value = h;
        this.La.connect(this.Qb);
        this.La.connect(this.ka);
        this.Qb.connect(this.la);
        this.qc.connect(this.Ld);
        this.Ld.connect(this.Qb.frequency);
        b(this.qc)
    }

    function p(a) {
        this.type = "gain";
        this.ic = [a];
        this.Qa = e();
        this.Qa.gain.value = a
    }

    function n(a, c) {
        this.type = "tremolo";
        this.ic = [a, c];
        this.Qa = e();
        this.Qa.gain.value = 1 - c / 2;
        this.qc = E.createOscillator();
        this.qc.frequency.value = a;
        this.Ld = e();
        this.Ld.gain.value = c / 2;
        this.qc.connect(this.Ld);
        this.Ld.connect(this.Qa.gain);
        b(this.qc)
    }

    function t(a, c) {
        this.type = "ringmod";
        this.ic = [a, c];
        this.La = e();
        this.la = e();
        this.la.gain.value = c;
        this.ka = e();
        this.ka.gain.value = 1 - c;
        this.Nl = e();
        this.Nl.gain.value = 0;
        this.qc = E.createOscillator();
        this.qc.frequency.value = a;
        this.qc.connect(this.Nl.gain);
        b(this.qc);
        this.La.connect(this.Nl);
        this.La.connect(this.ka);
        this.Nl.connect(this.la)
    }

    function D(a, c, b, d, h) {
        this.type = "distortion";
        this.ic = [a, c, b, d, h];
        this.La = e();
        this.Qo = e();
        this.Po = e();
        this.hG(b, Math.pow(10, d / 20));
        this.la = e();
        this.la.gain.value = h;
        this.ka = e();
        this.ka.gain.value = 1 - h;
        this.Ip = E.createWaveShaper();
        this.mn = new Float32Array(65536);
        this.YD(a, c);
        this.Ip.mn = this.mn;
        this.La.connect(this.Qo);
        this.La.connect(this.ka);
        this.Qo.connect(this.Ip);
        this.Ip.connect(this.Po);
        this.Po.connect(this.la)
    }

    function F(a, c, b, d, h) {
        this.type = "compressor";
        this.ic = [a, c, b, d, h];
        this.Qa = E.createDynamicsCompressor();
        try {
            this.Qa.threshold.value = a, this.Qa.knee.value = c, this.Qa.ratio.value = b, this.Qa.attack.value = d, this.Qa.release.value = h
        } catch (f) {}
    }

    function x(a, c) {
        this.type = "analyser";
        this.ic = [a, c];
        this.Qa = E.createAnalyser();
        this.Qa.fftSize = a;
        this.Qa.smoothingTimeConstant = c;
        this.WD = new Float32Array(this.Qa.frequencyBinCount);
        this.Ky = new Uint8Array(a);
        this.Gl = 0
    }

    function u() {
        this.$a = null;
        this.oo = 0
    }

    function y(a, c) {
        this.src = a;
        this.Ga = X;
        this.pe = c;
        this.Ym = !1;
        var b = this;
        this.Es = this.Us = null;
        this.Ij = [];
        this.cp = 0;
        this.Ot = this.Cn = this.Py = this.Ko = !1;
        1 === X && c && !pb && (this.Ga = 0, this.Us = e());
        this.Ef = this.Ya = null;
        var d;
        switch (this.Ga) {
            case 0:
                this.Ya = new Audio;
                this.Ya.crossOrigin = "anonymous";
                this.Ya.addEventListener("canplaythrough", function() {
                    b.Ot = !0
                });
                1 === X && E.createMediaElementSource && !/wiiu/i.test(navigator.userAgent) && (this.Py = !0, this.Ya.addEventListener("canplay", function() {
                    b.Es || (b.Es = E.createMediaElementSource(b.Ya), b.Es.connect(b.Us))
                }));
                this.Ya.autoplay = !1;
                this.Ya.rJ = "auto";
                this.Ya.src = a;
                break;
            case 1:
                J.cl ? J.dw(a, function(a) {
                    b.Ef = a;
                    b.Qv()
                }, function() {
                    b.Cn = !0
                }) : (d = new XMLHttpRequest, d.open("GET", a, !0), d.responseType = "arraybuffer", d.onload = function() {
                    b.Ef = d.response;
                    b.Qv()
                }, d.onerror = function() {
                    b.Cn = !0
                }, d.send());
                break;
            case 2:
                this.Ya = !0;
                break;
            case 3:
                this.Ya = !0
        }
    }

    function C(a, c) {
        var b = this;
        this.tag = c;
        this.Nb = this.hf = !0;
        this.src = a.src;
        this.buffer = a;
        this.Ga = X;
        this.pe = a.pe;
        this.playbackRate = 1;
        this.ej = !0;
        this.Gd = this.be = !1;
        this.yd = 0;
        this.fl = this.jj = this.pf = !1;
        this.volume = 1;
        this.Rs = function(a) {
            if (!b.Gd && !b.be) {
                var c = this;
                c || (c = a.target);
                c === b.Wm && (b.ej = !0, b.Nb = !0, R = b.tag, J.trigger(Cc.prototype.k.tm, S))
            }
        };
        this.Wm = null;
        this.gj = 1 === M && !this.pe || 2 === M;
        this.Aj = 1;
        this.startTime = this.gj ? J.gb.aa : J.ug.aa;
        this.Vb = this.$b = null;
        this.rf = !1;
        this.Ac = null;
        this.Tx = this.Sx = this.Rx = this.Qx = this.Vx = this.Ux = 0;
        this.D = null;
        var d = !1;
        1 !== this.Ga || 0 !== this.buffer.Ga || this.buffer.Py || (this.Ga = 0);
        switch (this.Ga) {
            case 0:
                this.pe ? (this.D = a.Ya, d = !a.Ym, a.Ym = !0) : (this.D = new Audio, this.D.crossOrigin = "anonymous", this.D.autoplay = !1, this.D.src = a.Ya.src, d = !0);
                d && this.D.addEventListener("ended", function() {
                    R = b.tag;
                    b.Nb = !0;
                    J.trigger(Cc.prototype.k.tm, S)
                });
                break;
            case 1:
                this.$b = e();
                this.$b.connect(g(c));
                1 === this.buffer.Ga ? a.Ya && (this.D = E.createBufferSource(), this.D.buffer = a.Ya, this.D.connect(this.$b)) : (this.D = this.buffer.Ya, this.buffer.Us.connect(this.$b), this.buffer.Ym || (this.buffer.Ym = !0, this.buffer.Ya.addEventListener("ended", function() {
                    R = b.tag;
                    b.Nb = !0;
                    J.trigger(Cc.prototype.k.tm, S)
                })));
                break;
            case 2:
                this.D = new window.Media(O + this.src, null, null, function(a) {
                    a === window.Media.MEDIA_STOPPED && (b.ej = !0, b.Nb = !0, R = b.tag, J.trigger(Cc.prototype.k.tm, S))
                });
                break;
            case 3:
                this.D = !0
        }
    }

    function B(a, c) {
        var b = a.Xg() ? 1 : 0,
            d = c.Xg() ? 1 : 0;
        return b === d ? 0 : b < d ? 1 : -1
    }

    function w(a, c) {
        G(Ea);
        if (a.length) {
            var b, d, h;
            b = 0;
            for (d = A.length; b < d; b++) h = A[b], ob(a, h.tag) && Ea.push(h);
            c && Ea.sort(B)
        } else Q && !Q.Yh() && (G(Ea), Ea[0] = Q)
    }

    function z(a, c) {
        da.hasOwnProperty(a) ? da[a].push(c) : da[a] = [c];
        var b, d, h, f, e = E.destination;
        if (da.hasOwnProperty(a) && (h = da[a], h.length))
            for (e = h[0].Td(), b = 0, d = h.length; b < d; b++) f = h[b], b + 1 === d ? f.ke(E.destination) : f.ke(h[b + 1].Td());
        w(a);
        b = 0;
        for (d = Ea.length; b < d; b++) Ea[b].QF(e);
        ab && cc === a && (ab.disconnect(), ab.connect(e))
    }

    function v() {}

    function r() {}

    function L() {}
    var N = Cc.prototype;
    N.R = function(a) {
        this.G = a;
        this.e = a.e
    };
    N.R.prototype.J = function() {};
    var J = null,
        S = null,
        R = "",
        O = "",
        X = 0,
        E = null,
        H = [],
        A = [],
        Q = null,
        U = !1,
        M = 0,
        K = !1,
        V = 1,
        ta = 0,
        W = 0,
        Ka = !1,
        ua = 1,
        Wa = 1,
        kd = 10,
        ld = 1E4,
        md = 1,
        ab = null,
        cc = "",
        qb = !1,
        rb = [],
        pb = !1,
        da = {},
        yd = "lowpass highpass bandpass lowshelf highshelf peaking notch allpass".split(" ");
    f.prototype.ke = function(a) {
        this.la.disconnect();
        this.la.connect(a);
        this.ka.disconnect();
        this.ka.connect(a)
    };
    f.prototype.remove = function() {
        this.La.disconnect();
        this.Qb.disconnect();
        this.la.disconnect();
        this.ka.disconnect()
    };
    f.prototype.Td = function() {
        return this.La
    };
    m.prototype.ke = function(a) {
        this.la.disconnect();
        this.la.connect(a);
        this.ka.disconnect();
        this.ka.connect(a)
    };
    m.prototype.remove = function() {
        this.La.disconnect();
        this.wl.disconnect();
        this.me.disconnect();
        this.pn.disconnect();
        this.la.disconnect();
        this.ka.disconnect()
    };
    m.prototype.Td = function() {
        return this.La
    };
    q.prototype.ke = function(a) {
        this.la.disconnect();
        this.la.connect(a);
        this.ka.disconnect();
        this.ka.connect(a)
    };
    q.prototype.remove = function() {
        this.La.disconnect();
        this.Lh.disconnect();
        this.la.disconnect();
        this.ka.disconnect()
    };
    q.prototype.Td = function() {
        return this.La
    };
    c.prototype.ke = function(a) {
        this.ka.disconnect();
        this.ka.connect(a);
        this.la.disconnect();
        this.la.connect(a)
    };
    c.prototype.remove = function() {
        this.La.disconnect();
        this.me.disconnect();
        this.qc.disconnect();
        this.Ld.disconnect();
        this.ka.disconnect();
        this.la.disconnect();
        this.En.disconnect()
    };
    c.prototype.Td = function() {
        return this.La
    };
    h.prototype.ke = function(a) {
        this.ka.disconnect();
        this.ka.connect(a);
        this.la.disconnect();
        this.la.connect(a)
    };
    h.prototype.remove = function() {
        this.La.disconnect();
        this.Qb.disconnect();
        this.qc.disconnect();
        this.Ld.disconnect();
        this.ka.disconnect();
        this.la.disconnect()
    };
    h.prototype.Td = function() {
        return this.La
    };
    p.prototype.ke = function(a) {
        this.Qa.disconnect();
        this.Qa.connect(a)
    };
    p.prototype.remove = function() {
        this.Qa.disconnect()
    };
    p.prototype.Td = function() {
        return this.Qa
    };
    n.prototype.ke = function(a) {
        this.Qa.disconnect();
        this.Qa.connect(a)
    };
    n.prototype.remove = function() {
        this.qc.disconnect();
        this.Ld.disconnect();
        this.Qa.disconnect()
    };
    n.prototype.Td = function() {
        return this.Qa
    };
    t.prototype.ke = function(a) {
        this.la.disconnect();
        this.la.connect(a);
        this.ka.disconnect();
        this.ka.connect(a)
    };
    t.prototype.remove = function() {
        this.qc.disconnect();
        this.Nl.disconnect();
        this.La.disconnect();
        this.la.disconnect();
        this.ka.disconnect()
    };
    t.prototype.Td = function() {
        return this.La
    };
    D.prototype.hG = function(a, c) {
        .01 > a && (a = .01);
        this.Qo.gain.value = a;
        this.Po.gain.value = Math.pow(1 / a, .6) * c
    };
    D.prototype.shape = function(a, c, b) {
        var d = 1.05 * b * c - c;
        b = 0 > a ? -1 : 1;
        a = 0 > a ? -a : a;
        c = a < c ? a : c + d * (1 - Math.exp(-(1 / d) * (a - c)));
        return c * b
    };
    D.prototype.YD = function(a, c) {
        for (var b = Math.pow(10, a / 20), d = Math.pow(10, c / 20), h = 0, f = 0; 32768 > f; ++f) h = f / 32768, h = this.shape(h, b, d), this.mn[32768 + f] = h, this.mn[32768 - f - 1] = -h
    };
    D.prototype.ke = function(a) {
        this.la.disconnect();
        this.la.connect(a);
        this.ka.disconnect();
        this.ka.connect(a)
    };
    D.prototype.remove = function() {
        this.La.disconnect();
        this.Qo.disconnect();
        this.Ip.disconnect();
        this.Po.disconnect();
        this.la.disconnect();
        this.ka.disconnect()
    };
    D.prototype.Td = function() {
        return this.La
    };
    F.prototype.ke = function(a) {
        this.Qa.disconnect();
        this.Qa.connect(a)
    };
    F.prototype.remove = function() {
        this.Qa.disconnect()
    };
    F.prototype.Td = function() {
        return this.Qa
    };
    x.prototype.Ra = function() {
        this.Qa.getFloatFrequencyData(this.WD);
        this.Qa.getByteTimeDomainData(this.Ky);
        for (var a = this.Qa.fftSize, c = 0, b = this.Gl = 0, d = 0; c < a; c++) d = (this.Ky[c] - 128) / 128, 0 > d && (d = -d), this.Gl < d && (this.Gl = d), b += d * d;
        this.Gl = k(this.Gl);
        k(Math.sqrt(b / a))
    };
    x.prototype.ke = function(a) {
        this.Qa.disconnect();
        this.Qa.connect(a)
    };
    x.prototype.remove = function() {
        this.Qa.disconnect()
    };
    x.prototype.Td = function() {
        return this.Qa
    };
    u.prototype.Pl = function(a) {
        this.$a = a
    };
    u.prototype.Sn = function() {
        return !!this.$a
    };
    u.prototype.Ra = function() {};
    var Jb = !1;
    y.prototype.RF = function() {
        var a, c, b, d;
        b = a = 0;
        for (c = A.length; a < c; ++a) d = A[a], A[b] = d, d.buffer === this ? d.stop() : ++b;
        A.length = b;
        this.Ef = this.Ya = null
    };
    y.prototype.Qv = function() {
        if (!this.Ya && this.Ef) {
            var a = this;
            if (E.decodeAudioData) E.decodeAudioData(this.Ef, function(c) {
                a.Ya = c;
                a.Ef = null;
                var b, d, h;
                if (ha(a.Mo) || K) ha(a.hn) || (b = a.hn.Lh, b.normalize = a.Bx, b.buffer = c);
                else if (a.Ij.length) {
                    b = 0;
                    for (d = a.Ij.length; b < d; b++) {
                        c = a.Ij[b];
                        h = new C(a, c.Ry);
                        h.pt(!0);
                        if ("undefined" !== typeof c.Dx && (c.$a = J.nc(c.Dx), !c.$a)) continue;
                        if (c.$a) {
                            var f = Xa(c.$a.x, c.$a.y, -c.$a.C.ac(), ta, W, !0),
                                e = Xa(c.$a.x, c.$a.y, -c.$a.C.ac(), ta, W, !1);
                            h.ot(f, e, Na(c.$a.u - c.$a.C.ac()), c.Rr, c.Ks, c.Os);
                            h.Pl(c.$a)
                        } else h.ot(c.x, c.y, c.Mi, c.Rr, c.Ks, c.Os);
                        h.play(a.zs, a.Mt, a.cp);
                        a.Ko && h.pause();
                        A.push(h)
                    }
                    G(a.Ij)
                } else h = new C(a, a.Mo || ""), h.play(a.zs, a.Mt, a.cp), a.Ko && h.pause(), A.push(h)
            }, function() {
                a.Cn = !0
            });
            else if (this.Ya = E.createBuffer(this.Ef, !1), this.Ef = null, ha(this.Mo) || K) ha(this.hn) || (c = this.hn.Lh, c.normalize = this.Bx, c.buffer = this.Ya);
            else {
                var c = new C(this, this.Mo);
                c.play(this.zs, this.Mt, this.cp);
                this.Ko && c.pause();
                A.push(c)
            }
        }
    };
    y.prototype.Iw = function() {
        switch (this.Ga) {
            case 0:
                var a = 4 <= this.Ya.readyState;
                a && (this.Ot = !0);
                return a || this.Ot;
            case 1:
                return !!this.Ef || !!this.Ya;
            case 2:
                return !0;
            case 3:
                return !0
        }
        return !1
    };
    y.prototype.NE = function() {
        switch (this.Ga) {
            case 0:
                return this.Iw();
            case 1:
                return !!this.Ya;
            case 2:
                return !0;
            case 3:
                return !0
        }
        return !1
    };
    y.prototype.EE = function() {
        switch (this.Ga) {
            case 0:
                return !!this.Ya.error;
            case 1:
                return this.Cn
        }
        return !1
    };
    C.prototype.Yh = function() {
        switch (this.Ga) {
            case 0:
                return this.D.ended;
            case 1:
                return 1 === this.buffer.Ga ? !this.hf && !this.Nb && this.D.loop || this.Gd ? !1 : this.ej : this.D.ended;
            case 2:
                return this.ej;
            case 3:
                !0
        }
        return !0
    };
    C.prototype.wC = function() {
        return this.hf || this.Nb ? !0 : this.Yh()
    };
    C.prototype.pt = function(a) {
        1 === X && (!this.rf && a ? this.$b && (this.Vb || (this.Vb = E.createPanner(), this.Vb.panningModel = "number" === typeof this.Vb.panningModel ? ua : ["equalpower", "HRTF", "soundfield"][ua], this.Vb.distanceModel = "number" === typeof this.Vb.distanceModel ? Wa : ["linear", "inverse", "exponential"][Wa], this.Vb.refDistance = kd, this.Vb.maxDistance = ld, this.Vb.rolloffFactor = md), this.$b.disconnect(), this.$b.connect(this.Vb), this.Vb.connect(g(this.tag)), this.rf = !0) : this.rf && !a && this.$b && (this.Vb.disconnect(), this.$b.disconnect(), this.$b.connect(g(this.tag)), this.rf = !1))
    };
    C.prototype.ot = function(a, c, b, d, h, f) {
        this.rf && 1 === X && (this.Vb.setPosition(a, c, 0), this.Vb.setOrientation(Math.cos(I(b)), Math.sin(I(b)), 0), this.Vb.coneInnerAngle = d, this.Vb.coneOuterAngle = h, this.Vb.coneOuterGain = f, this.Ux = a, this.Vx = c, this.Qx = b, this.Rx = d, this.Sx = h, this.Tx = f)
    };
    C.prototype.Pl = function(a) {
        this.rf && 1 === X && (this.Ac || (this.Ac = new u), this.Ac.Pl(a))
    };
    C.prototype.Ra = function(a) {
        if (this.rf && 1 === X && this.Ac && this.Ac.Sn() && this.Xg()) {
            this.Ac.Ra(a);
            a = this.Ac.$a;
            var c = Xa(a.x, a.y, -a.C.ac(), ta, W, !0),
                b = Xa(a.x, a.y, -a.C.ac(), ta, W, !1);
            this.Vb.setPosition(c, b, 0);
            c = 0;
            "undefined" !== typeof this.Ac.$a.u && (c = a.u - a.C.ac(), this.Vb.setOrientation(Math.cos(c), Math.sin(c), 0))
        }
    };
    C.prototype.play = function(c, d, h, f) {
        var e = this.D;
        this.pf = c;
        this.volume = d;
        h = h || 0;
        f = f || 0;
        switch (this.Ga) {
            case 0:
                1 !== e.playbackRate && (e.playbackRate = 1);
                e.volume !== d * V && (e.volume = d * V);
                e.loop !== c && (e.loop = c);
                e.muted && (e.muted = !1);
                if (e.currentTime !== h) try {
                    e.currentTime = h
                } catch (l) {}
                if (this.pe && qb && !J.nf) rb.push(this);
                else try {
                    this.D.play()
                } catch (g) {
                    console && console.log && console.log("[C2] WARNING: exception trying to play audio '" + this.buffer.src + "': ", g)
                }
                break;
            case 1:
                this.muted = !1;
                this.Aj = 1;
                if (1 === this.buffer.Ga) this.$b.gain.value = d * V, this.hf || (this.D = E.createBufferSource(), this.D.buffer = this.buffer.Ya, this.D.connect(this.$b)), this.D.onended = this.Rs, this.Wm = this.D, this.D.loop = c, this.ej = !1, 0 === h ? b(this.D, f) : a(this.D, h, this.Ug(), f);
                else {
                    1 !== e.playbackRate && (e.playbackRate = 1);
                    e.loop !== c && (e.loop = c);
                    e.volume = d * V;
                    if (e.currentTime !== h) try {
                        e.currentTime = h
                    } catch (m) {}
                    this.pe && qb && !J.nf ? rb.push(this) : e.play()
                }
                break;
            case 2:
                (!this.hf && this.Nb || 0 !== h) && e.seekTo(h);
                e.play();
                this.ej = !1;
                break;
            case 3:
                J.Sc ? AppMobi.context.playSound(this.src, c) : AppMobi.player.playSound(this.src, c)
        }
        this.playbackRate = 1;
        this.startTime = (this.gj ? J.gb.aa : J.ug.aa) - h;
        this.Gd = this.Nb = this.hf = !1
    };
    C.prototype.stop = function() {
        switch (this.Ga) {
            case 0:
                this.D.paused || this.D.pause();
                break;
            case 1:
                1 === this.buffer.Ga ? l(this.D) : this.D.paused || this.D.pause();
                break;
            case 2:
                this.D.stop();
                break;
            case 3:
                J.Sc && AppMobi.context.stopSound(this.src)
        }
        this.Nb = !0;
        this.Gd = !1
    };
    C.prototype.pause = function() {
        if (!(this.hf || this.Nb || this.Yh() || this.Gd)) {
            switch (this.Ga) {
                case 0:
                    this.D.paused || this.D.pause();
                    break;
                case 1:
                    1 === this.buffer.Ga ? (this.yd = this.Ir(!0), this.pf && (this.yd = this.yd % this.Ug()), this.Gd = !0, l(this.D)) : this.D.paused || this.D.pause();
                    break;
                case 2:
                    this.D.pause();
                    break;
                case 3:
                    J.Sc && AppMobi.context.stopSound(this.src)
            }
            this.Gd = !0
        }
    };
    C.prototype.XF = function() {
        if (!(this.hf || this.Nb || this.Yh()) && this.Gd) {
            switch (this.Ga) {
                case 0:
                    this.D.play();
                    break;
                case 1:
                    1 === this.buffer.Ga ? (this.D = E.createBufferSource(), this.D.buffer = this.buffer.Ya, this.D.connect(this.$b), this.D.onended = this.Rs, this.Wm = this.D, this.D.loop = this.pf, this.$b.gain.value = V * this.volume * this.Aj, this.Dp(), this.startTime = (this.gj ? J.gb.aa : J.ug.aa) - this.yd / (this.playbackRate || .001), a(this.D, this.yd, this.Ug())) : this.D.play();
                    break;
                case 2:
                    this.D.play();
                    break;
                case 3:
                    J.Sc && AppMobi.context.resumeSound(this.src)
            }
            this.Gd = !1
        }
    };
    C.prototype.seek = function(a) {
        if (!(this.hf || this.Nb || this.Yh())) switch (this.Ga) {
            case 0:
                try {
                    this.D.currentTime = a
                } catch (c) {}
                break;
            case 1:
                if (1 === this.buffer.Ga) this.Gd ? this.yd = a : (this.pause(), this.yd = a, this.XF());
                else try {
                    this.D.currentTime = a
                } catch (b) {}
                break;
            case 3:
                J.Sc && AppMobi.context.seekSound(this.src, a)
        }
    };
    C.prototype.QF = function(a) {
        1 === this.Ga && (this.rf ? (this.Vb.disconnect(), this.Vb.connect(a)) : (this.$b.disconnect(), this.$b.connect(a)))
    };
    C.prototype.Ug = function() {
        var a = 0;
        switch (this.Ga) {
            case 0:
                "undefined" !== typeof this.D.duration && (a = this.D.duration);
                break;
            case 1:
                a = this.buffer.Ya.duration;
                break;
            case 2:
                a = this.D.getDuration();
                break;
            case 3:
                J.Sc && (a = AppMobi.context.getDurationSound(this.src))
        }
        return a
    };
    C.prototype.Ir = function(a) {
        var c = this.Ug(),
            b = 0;
        switch (this.Ga) {
            case 0:
                "undefined" !== typeof this.D.currentTime && (b = this.D.currentTime);
                break;
            case 1:
                if (1 === this.buffer.Ga) {
                    if (this.Gd) return this.yd;
                    b = (this.gj ? J.gb.aa : J.ug.aa) - this.startTime
                } else "undefined" !== typeof this.D.currentTime && (b = this.D.currentTime);
                break;
            case 3:
                J.Sc && (b = AppMobi.context.getPlaybackTimeSound(this.src))
        }
        a && (b *= this.playbackRate);
        !this.pf && b > c && (b = c);
        return b
    };
    C.prototype.Xg = function() {
        return !this.Gd && !this.hf && !this.Nb && !this.Yh()
    };
    C.prototype.nG = function() {
        return !this.hf && !this.Nb && !this.Yh()
    };
    C.prototype.DG = function() {
        var a = this.volume * V;
        isFinite(a) || (a = 0);
        switch (this.Ga) {
            case 0:
                "undefined" !== typeof this.D.volume && this.D.volume !== a && (this.D.volume = a);
                break;
            case 1:
                1 === this.buffer.Ga ? this.$b.gain.value = a * this.Aj : "undefined" !== typeof this.D.volume && this.D.volume !== a && (this.D.volume = a)
        }
    };
    C.prototype.sn = function(a) {
        switch (this.Ga) {
            case 0:
                this.D.muted !== !!a && (this.D.muted = !!a);
                break;
            case 1:
                1 === this.buffer.Ga ? (this.Aj = a ? 0 : 1, this.$b.gain.value = V * this.volume * this.Aj) : this.D.muted !== !!a && (this.D.muted = !!a)
        }
    };
    C.prototype.iG = function() {
        this.jj = !0;
        this.sn(this.jj || this.fl)
    };
    C.prototype.Dy = function(a) {
        this.fl = !!a;
        this.sn(this.jj || this.fl)
    };
    C.prototype.Dp = function() {
        var a = this.playbackRate;
        this.gj && (a *= J.$j);
        switch (this.Ga) {
            case 0:
                this.D.playbackRate !== a && (this.D.playbackRate = a);
                break;
            case 1:
                1 === this.buffer.Ga ? this.D.playbackRate.value !== a && (this.D.playbackRate.value = a) : this.D.playbackRate !== a && (this.D.playbackRate = a)
        }
    };
    C.prototype.lG = function(c) {
        switch (this.Ga) {
            case 0:
                c ? this.Xg() ? (this.be = !0, this.D.pause()) : this.be = !1 : this.be && (this.D.play(), this.be = !1);
                break;
            case 1:
                c ? this.Xg() ? (this.be = !0, 1 === this.buffer.Ga ? (this.yd = this.Ir(!0), this.pf && (this.yd = this.yd % this.Ug()), l(this.D)) : this.D.pause()) : this.be = !1 : this.be && (1 === this.buffer.Ga ? (this.D = E.createBufferSource(), this.D.buffer = this.buffer.Ya, this.D.connect(this.$b), this.D.onended = this.Rs, this.Wm = this.D, this.D.loop = this.pf, this.$b.gain.value = V * this.volume * this.Aj, this.Dp(), this.startTime = (this.gj ? J.gb.aa : J.ug.aa) - this.yd / (this.playbackRate || .001), a(this.D, this.yd, this.Ug())) : this.D.play(), this.be = !1);
                break;
            case 2:
                c ? this.Xg() ? (this.D.pause(), this.be = !0) : this.be = !1 : this.be && (this.be = !1, this.D.play())
        }
    };
    N.I = function(a) {
        function c() {
            if (!Ka && E.createBuffer) {
                var a = E.createBuffer(1, 220, 22050),
                    d = E.createBufferSource();
                d.buffer = a;
                d.connect(E.destination);
                b(d)
            }
        }
        this.type = a;
        J = this.e = a.e;
        S = this;
        this.Id = null;
        this.ml = -600;
        this.e.cl && (pb = !0);
        !(this.e.mj || this.e.Vn && (this.e.Xk || this.e.Wn)) || this.e.Yn || this.e.Tb || this.e.Gw || pb || (qb = !0);
        E = null;
        "undefined" !== typeof AudioContext ? (X = 1, E = new AudioContext) : "undefined" !== typeof webkitAudioContext && (X = 1, E = new webkitAudioContext);
        this.e.mj && E && (E.close && E.close(), "undefined" !== typeof AudioContext ? E = new AudioContext : "undefined" !== typeof webkitAudioContext && (E = new webkitAudioContext));
        qb ? document.addEventListener("touchend", function() {
            !Jb && E && (c(), Jb = !0);
            var a, b, d;
            if (qb) {
                if (!K)
                    for (a = 0, b = rb.length; a < b; ++a) d = rb[a], d.Nb || d.Gd || d.D.play();
                G(rb)
            }
        }, !0) : pb && document.addEventListener("touchend", function() {
            !Jb && E && (c(), Jb = !0)
        }, !0);
        1 !== X && (this.e.Fd && "undefined" !== typeof window.Media ? X = 2 : this.e.Hw && (X = 3));
        2 === X && (O = location.href, a = O.lastIndexOf("/"), -1 < a && (O = O.substr(0, a + 1)), O = O.replace("file://", ""));
        if (this.e.OE && this.e.PE && "undefined" === typeof Audio) alert("It looks like you're using Safari for Windows without Quicktime.  Audio cannot be played until Quicktime is installed."), this.e.Ce(this);
        else {
            if (this.e.Sc) U = this.e.Vn;
            else try {
                U = !!(new Audio).canPlayType('audio/ogg; codecs="vorbis"')
            } catch (d) {
                U = !1
            }
            this.e.fm(this)
        }
    };
    var Ga = N.I.prototype;
    Ga.J = function() {
        this.e.Pi = this;
        M = this.A[0];
        this.jg = this.A[1];
        this.CF = 0 !== this.A[2];
        this.zx = 0;
        ua = this.A[3];
        Wa = this.A[4];
        this.ml = -this.A[5];
        kd = this.A[6];
        ld = this.A[7];
        md = this.A[8];
        this.Id = new u;
        var a = this.e.fa || this.e.width,
            c = this.e.ea || this.e.height;
        1 === X && (E.listener.setPosition(a / 2, c / 2, this.ml), E.listener.setOrientation(0, 0, 1, 0, -1, 0), window.c2OnAudioMicStream = function(a, c) {
            ab && ab.disconnect();
            cc = c.toLowerCase();
            ab = E.createMediaStreamSource(a);
            ab.connect(g(cc))
        });
        this.e.nv(function(a) {
            S.tF(a)
        });
        var b = this;
        this.e.Xm(function(a) {
            b.ni(a)
        })
    };
    Ga.ni = function(a) {
        var c, b, d;
        c = 0;
        for (b = A.length; c < b; c++) d = A[c], d.Ac && d.Ac.$a === a && (d.Ac.$a = null, d.rf && d.Xg() && d.pf && d.stop());
        this.Id.$a === a && (this.Id.$a = null)
    };
    Ga.ja = function() {
        var a = {
                silent: K,
                masterVolume: V,
                listenerZ: this.ml,
                listenerUid: this.Id.Sn() ? this.Id.$a.uid : -1,
                playing: [],
                effects: {}
            },
            c = a.playing,
            b, d, h, f, e, l;
        b = 0;
        for (d = A.length; b < d; b++) h = A[b], !h.nG() || 3 === this.jg || h.pe && 1 === this.jg || !h.pe && 2 === this.jg || (f = h.Ir(), h.pf && (f = f % h.Ug()), f = {
            tag: h.tag,
            buffersrc: h.buffer.src,
            is_music: h.pe,
            playbackTime: f,
            volume: h.volume,
            looping: h.pf,
            muted: h.jj,
            playbackRate: h.playbackRate,
            paused: h.Gd,
            resume_position: h.yd
        }, h.rf && (f.pan = {}, l = f.pan, h.Ac && h.Ac.Sn() ? l.objUid = h.Ac.$a.uid : (l.x = h.Ux, l.y = h.Vx, l.a = h.Qx), l.ia = h.Rx, l.oa = h.Sx, l.og = h.Tx), c.push(f));
        c = a.effects;
        for (e in da)
            if (da.hasOwnProperty(e)) {
                h = [];
                b = 0;
                for (d = da[e].length; b < d; b++) h.push({
                    type: da[e][b].type,
                    params: da[e][b].ic
                });
                c[e] = h
            }
        return a
    };
    var sb = [];
    Ga.ua = function(a) {
        var b = a.silent;
        V = a.masterVolume;
        this.ml = a.listenerZ;
        this.Id.Pl(null);
        var d = a.listenerUid; - 1 !== d && (this.Id.oo = d, sb.push(this.Id));
        var d = a.playing,
            e, l, g, k, y, C, B, w, v, r, O;
        if (3 !== this.jg)
            for (e = 0, l = A.length; e < l; e++) v = A[e], v.pe && 1 === this.jg || (v.pe || 2 !== this.jg) && v.stop();
        for (y in da)
            if (da.hasOwnProperty(y))
                for (e = 0, l = da[y].length; e < l; e++) da[y][e].remove();
        bb(da);
        for (y in a.effects)
            if (a.effects.hasOwnProperty(y))
                for (C = a.effects[y], e = 0, l = C.length; e < l; e++) switch (g = C[e].type, r = C[e].params, g) {
                    case "filter":
                        z(y, new f(r[0], r[1], r[2], r[3], r[4], r[5]));
                        break;
                    case "delay":
                        z(y, new m(r[0], r[1], r[2]));
                        break;
                    case "convolve":
                        g = r[2];
                        v = this.Ln(g, !1);
                        v.Ya ? g = new q(v.Ya, r[0], r[1], g) : (g = new q(null, r[0], r[1], g), v.Bx = r[0], v.hn = g);
                        z(y, g);
                        break;
                    case "flanger":
                        z(y, new c(r[0], r[1], r[2], r[3], r[4]));
                        break;
                    case "phaser":
                        z(y, new h(r[0], r[1], r[2], r[3], r[4], r[5]));
                        break;
                    case "gain":
                        z(y, new p(r[0]));
                        break;
                    case "tremolo":
                        z(y, new n(r[0], r[1]));
                        break;
                    case "ringmod":
                        z(y, new t(r[0], r[1]));
                        break;
                    case "distortion":
                        z(y, new D(r[0], r[1], r[2], r[3], r[4]));
                        break;
                    case "compressor":
                        z(y, new F(r[0], r[1], r[2], r[3], r[4]));
                        break;
                    case "analyser":
                        z(y, new x(r[0], r[1]))
                }
        e = 0;
        for (l = d.length; e < l; e++) 3 === this.jg || (a = d[e], g = a.buffersrc, k = a.is_music, y = a.tag, C = a.playbackTime, B = a.looping, w = a.volume, O = (r = a.pan) && r.hasOwnProperty("objUid") ? r.objUid : -1, k && 1 === this.jg) || !k && 2 === this.jg || ((v = this.ow(g, y, k, B, w)) ? (v.yd = a.resume_position, v.pt(!!r), v.play(B, w, C), v.Dp(), v.DG(), v.sn(v.jj || v.fl), a.paused && v.pause(), a.muted && v.iG(), v.sn(v.jj || v.fl), r && (-1 !== O ? (v.Ac = v.Ac || new u, v.Ac.oo = O, sb.push(v.Ac)) : v.ot(r.x, r.y, r.a, r.ia, r.oa, r.og))) : (v = this.Ln(g, k), v.cp = C, v.Ko = a.paused, r && (-1 !== O ? v.Ij.push({
            Dx: O,
            Rr: r.ia,
            Ks: r.oa,
            Os: r.og,
            Ry: y
        }) : v.Ij.push({
            x: r.x,
            y: r.y,
            Mi: r.a,
            Rr: r.ia,
            Ks: r.oa,
            Os: r.og,
            Ry: y
        }))));
        if (b && !K) {
            e = 0;
            for (l = A.length; e < l; e++) A[e].Dy(!0);
            K = !0
        } else if (!b && K) {
            e = 0;
            for (l = A.length; e < l; e++) A[e].Dy(!1);
            K = !1
        }
    };
    Ga.bd = function() {
        var a, c, b, d;
        a = 0;
        for (c = sb.length; a < c; a++) b = sb[a], d = this.e.nc(b.oo), b.Pl(d), b.oo = -1, d && (ta = d.x, W = d.y);
        G(sb)
    };
    Ga.tF = function(a) {
        if (!this.CF) {
            !a && E && E.resume && (E.resume(), Ka = !1);
            var c, b;
            c = 0;
            for (b = A.length; c < b; c++) A[c].lG(a);
            a && E && E.suspend && (E.suspend(), Ka = !0)
        }
    };
    Ga.Ra = function() {
        var a = this.e.Rg,
            c, b, d;
        c = 0;
        for (b = A.length; c < b; c++) d = A[c], d.Ra(a), 0 !== M && d.Dp();
        var h, f;
        for (h in da)
            if (da.hasOwnProperty(h))
                for (d = da[h], c = 0, b = d.length; c < b; c++) f = d[c], f.Ra && f.Ra();
        1 === X && this.Id.Sn() && (this.Id.Ra(a), ta = this.Id.$a.x, W = this.Id.$a.y, E.listener.setPosition(this.Id.$a.x, this.Id.$a.y, this.ml))
    };
    var tb = [];
    Ga.jG = function(a) {
        var c, b, d, h, f, e = 0;
        c = 0;
        for (b = a.length; c < b; ++c)
            if (d = a[c], h = d[0], d = 2 * d[1], (f = 4 < h.length && ".ogg" === h.substr(h.length - 4)) && U || !f && !U) tb.push({
                filename: h,
                size: d,
                $a: null
            }), e += d;
        return e
    };
    Ga.pG = function() {
        var a, c, b, d;
        a = 0;
        for (c = tb.length; a < c; ++a) b = tb[a], d = this.e.or + b.filename, b.$a = this.Ln(d, !1)
    };
    Ga.gE = function() {
        var a = 0,
            c, b, d;
        c = 0;
        for (b = tb.length; c < b; ++c) d = tb[c], d.$a.NE() || d.$a.EE() || this.e.Tb || this.e.Wn ? a += d.size : d.$a.Iw() && (a += Math.floor(d.size / 2));
        return a
    };
    Ga.SF = function() {
        var a, c, b, d;
        b = a = 0;
        for (c = H.length; a < c; ++a) d = H[a], H[b] = d, d.pe ? d.RF() : ++b;
        H.length = b
    };
    Ga.Ln = function(a, c) {
        var b, d, h, f = null;
        b = 0;
        for (d = H.length; b < d; b++)
            if (h = H[b], h.src === a) {
                f = h;
                break
            }
        f || (pb && c && this.SF(), f = new y(a, c), H.push(f));
        return f
    };
    Ga.ow = function(a, c, b, d, h) {
        var f, e, l;
        f = 0;
        for (e = A.length; f < e; f++)
            if (l = A[f], l.src === a && (l.wC() || b)) return l.tag = c, l;
        a = this.Ln(a, b);
        if (!a.Ya) return "<preload>" !== c && (a.Mo = c, a.zs = d, a.Mt = h), null;
        l = new C(a, c);
        A.push(l);
        return l
    };
    var Ea = [];
    v.prototype.tm = function(a) {
        return ob(R, a)
    };
    v.prototype.$z = function(a) {
        w(a);
        var c;
        a = 0;
        for (c = Ea.length; a < c; a++)
            if (Ea[a].Xg()) return !0;
        return !1
    };
    N.k = new v;
    r.prototype.hB = function(a, c, b, d, h) {
        !K && (d = Math.pow(10, d / 20), isFinite(d) || (d = 0), 0 > d && (d = 0), 1 < d && (d = 1), Q = this.ow(this.e.or + c.toLowerCase() + (U ? ".ogg" : ".m4a"), h, 1 === a, 0 !== b, d)) && (Q.pt(!1), Q.play(0 !== b, d, 0, this.zx), this.zx = 0)
    };
    r.prototype.Nm = function(a) {
        w(a);
        var c;
        a = 0;
        for (c = Ea.length; a < c; a++) Ea[a].stop()
    };
    r.prototype.MB = function() {
        var a, c;
        a = 0;
        for (c = A.length; a < c; a++) A[a].stop()
    };
    N.B = new r;
    L.prototype.$t = function(a, c) {
        w(c, !0);
        Ea.length ? a.P(Ea[0].Ug()) : a.P(0)
    };
    N.M = new L
})();

function Dc(k) {
    this.e = k
}
(function() {
    function k() {
        a && l && window.OfflineClientInfo && window.OfflineClientInfo.SetMessageCallback(function(a) {
            f.sF(a)
        })
    }

    function g() {}

    function e() {}
    var d = Dc.prototype;
    d.R = function(a) {
        this.G = a;
        this.e = a.e
    };
    var b = d.R.prototype;
    b.J = function() {};
    var a = !1,
        l = !1;
    document.addEventListener("DOMContentLoaded", function() {
        if (window.C2_RegisterSW && navigator.Fa) {
            var b = document.createElement("script");
            b.onload = function() {
                a = !0;
                k()
            };
            b.src = "offlineClient.js";
            document.head.appendChild(b)
        }
    });
    var f = null;
    b.Hx = function() {
        l = !0;
        k()
    };
    d.I = function(a) {
        this.type = a;
        this.e = a.e
    };
    b = d.I.prototype;
    b.J = function() {
        var a = this;
        window.addEventListener("resize", function() {
            a.e.trigger(Dc.prototype.k.WA, a)
        });
        f = this;
        "undefined" !== typeof navigator.onLine && (window.addEventListener("online", function() {
            a.e.trigger(Dc.prototype.k.SA, a)
        }), window.addEventListener("offline", function() {
            a.e.trigger(Dc.prototype.k.QA, a)
        }));
        "undefined" !== typeof window.applicationCache && (window.applicationCache.addEventListener("updateready", function() {
            a.e.uj = 1;
            a.e.trigger(Dc.prototype.k.xm, a)
        }), window.applicationCache.addEventListener("progress", function(b) {
            a.e.uj = b.loaded / b.total || 0
        }));
        this.e.Sc || (document.addEventListener("appMobi.device.update.available", function() {
            a.e.trigger(Dc.prototype.k.xm, a)
        }), document.addEventListener("backbutton", function() {
            a.e.trigger(Dc.prototype.k.rm, a)
        }), document.addEventListener("menubutton", function() {
            a.e.trigger(Dc.prototype.k.ru, a)
        }), document.addEventListener("searchbutton", function() {
            a.e.trigger(Dc.prototype.k.YA, a)
        }), document.addEventListener("tizenhwkey", function(b) {
            var c;
            switch (b.keyName) {
                case "back":
                    c = a.e.trigger(Dc.prototype.k.rm, a);
                    !c && window.tizen && window.tizen.application.getCurrentApplication().exit();
                    break;
                case "menu":
                    (c = a.e.trigger(Dc.prototype.k.ru, a)) || b.preventDefault()
            }
        }));
        this.e.hs && "undefined" !== typeof Windows ? Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested", function(b) {
            a.e.trigger(Dc.prototype.k.rm, a) && (b.hJ = !0)
        }) : this.e.gs && WinJS.Application && (WinJS.Application.onbackclick = function() {
            return !!a.e.trigger(Dc.prototype.k.rm, a)
        });
        this.e.nv(function(b) {
            b ? a.e.trigger(Dc.prototype.k.TA, a) : a.e.trigger(Dc.prototype.k.UA, a)
        });
        this.SE = "undefined" !== typeof window.is_scirra_arcade
    };
    b.sF = function(a) {
        a = a.data.type;
        "downloading-update" === a ? this.e.trigger(Dc.prototype.k.aB, this) : "update-ready" === a || "update-pending" === a ? this.e.trigger(Dc.prototype.k.xm, this) : "offline-ready" === a && this.e.trigger(Dc.prototype.k.RA, this)
    };
    g.prototype.SA = function() {
        return !0
    };
    g.prototype.QA = function() {
        return !0
    };
    g.prototype.xm = function() {
        return !0
    };
    g.prototype.UA = function() {
        return !0
    };
    g.prototype.TA = function() {
        return !0
    };
    g.prototype.WA = function() {
        return !0
    };
    g.prototype.rm = function() {
        return !0
    };
    g.prototype.ru = function() {
        return !0
    };
    g.prototype.YA = function() {
        return !0
    };
    g.prototype.aB = function() {
        return !0
    };
    g.prototype.xm = function() {
        return !0
    };
    g.prototype.RA = function() {
        return !0
    };
    d.k = new g;
    e.prototype.Rz = function(a, b) {
        this.e.Vd ? CocoonJS.App.openURL(a) : this.e.oe ? ejecta.openURL(a) : this.e.gs ? Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(a)) : navigator.app && navigator.app.loadUrl ? navigator.app.loadUrl(a, {
            openExternal: !0
        }) : this.e.Fd ? window.open(a, "_system") : this.SE || this.e.Tb || window.open(a, b)
    };
    e.prototype.Ez = function(a, b) {
        "undefined" !== typeof console && (0 === a && console.log && console.log(b.toString()), 1 === a && console.warn && console.warn(b.toString()), 2 === a && console.error && console.error(b.toString()))
    };
    d.B = new e;
    d.M = new function() {}
})();

function Ec(k) {
    this.e = k
}
(function() {
    var k = Ec.prototype;
    k.R = function(d) {
        this.G = d;
        this.e = d.e
    };
    k.R.prototype.J = function() {};
    k.I = function(d) {
        this.type = d;
        this.e = d.e
    };
    var g = k.I.prototype;
    g.J = function() {
        this.q = null;
        this.Zf = 0;
        this.tb = []
    };
    g.se = function() {};
    g.ja = function() {
        return {
            TimerList: this.tb
        }
    };
    g.ua = function(d) {
        this.tb = d.TimerList
    };
    g.kd = function() {};
    g.wc = function() {};
    g.zc = function(d, b) {
        var a = "",
            e = parseInt(d / 6E4 / 60 % 60);
        0 > e && (e = 0);
        10 > e && b && (a += "0");
        return a + e
    };
    g.Fa = function(d, b) {
        var a = "",
            e = parseInt(d / 6E4 % 60);
        0 > e && (e = 0);
        10 > e && b && (a += "0");
        return a + e
    };
    g.Cb = function(d, b) {
        var a = "",
            e = parseInt(d / 1E3 % 60);
        0 > e && (e = 0);
        10 > e && b && (a += "0");
        return a + e
    };
    g.Pe = function(d) {
        var b = "";
        d = parseInt(d % 1E3);
        0 > d && (d = 0);
        100 > d && (b += "0");
        return b + d
    };
    g.wh = function(d, b) {
        var a = "",
            e = parseInt(d / (1E3 * this.q.Im) / this.q.qm % this.q.qm);
        0 > e && (e = 0);
        10 > e && b && (a += "0");
        return a + e
    };
    g.Ee = function(d, b) {
        var a = "",
            e = parseInt(d / (1E3 * this.q.Im) % this.q.qm);
        0 > e && (e = 0);
        10 > e && b && (a += "0");
        return a + e
    };
    g.Yc = function(d, b) {
        var a = "",
            e = parseInt(d / this.q.Wp % this.q.Im);
        0 > e && (e = 0);
        10 > e &&
            b && (a += "0");
        return a + e
    };
    g.De = function(d) {
        var b = "";
        d = parseInt(d % this.q.Wp);
        0 > d && (d = 0);
        100 > d && (b += "0");
        return b + d
    };
    g.Hb = function(d) {
        if (1 == d.Ye) d.ok = 0;
        else if (0 == d.Md) d.ok = 1E3 * this.e.gb.aa - d.cq;
        else {
            var b = 1E3 * this.e.gb.aa - d.ym;
            1 == d.Bi && (d.N = d.gd - b, 0 >= d.N && (d.N = 0));
            1 == d.vh && (d.N = b - d.Cf, d.N >= d.gd && 0 != d.gd && (d.N = d.gd))
        }
    };
    g.Wa = function(d) {
        this.q = null;
        for (var b = 0; b < this.tb.length; b++)
            if (this.tb[b].Ji == d) {
                this.q = this.tb[b];
                return
            }
        this.q = null
    };
    g.Cg = function(d) {
        if (null != d) {
            if (1 == d.Bi) {
                var b = d.Nu;
                d.Cf = 1E3 * this.e.gb.aa -
                    d.Qm;
                d.gd = b + d.Cf;
                d.N = b
            }
            1 == d.vh && 0 == d.gd && (d.Cf = 1E3 * this.e.gb.aa - d.Qm, d.gd = 0, d.N = 0);
            1 == d.vh && 0 != d.gd && (d.Cf = 1E3 * this.e.gb.aa - d.Qm, d.gd = d.Nu, d.N = 0);
            d.ok = 0;
            d.ym = 0;
            d.cq = 1E3 * this.e.gb.aa - d.Qm
        }
    };
    g.Pm = function(d, b, a, e, f) {
        this.Ji = d;
        this.Cf = b;
        this.gd = a;
        this.Qm = f;
        this.vh = this.Bi = !1;
        this.Md = !0;
        this.Ye = !1;
        this.N = 0;
        this.Nu = e;
        this.ym = this.ok = this.cq = 0;
        this.Im = this.qm = 60;
        this.Wp = 1E3
    };
    k.k = {};
    var e = k.k;
    e.HH = function(d) {
        this.Wa(d);
        return null == this.q ? !1 : 0 == this.q.Ye ? !0 : !1
    };
    e.GH = function(d) {
        this.Wa(d);
        return null == this.q || 1 == this.q.Md ? !1 : !0
    };
    e.FH = function(d) {
        this.Wa(d);
        if (null == this.q || 1 == this.q.Ye || 0 == this.q.Md) return !1;
        this.Hb(this.q);
        return 1 == this.q.Bi && 0 >= this.q.N || 1 == this.q.vh && 0 != this.q.gd && this.q.N >= this.q.gd ? !0 : !1
    };
    e.IH = function(d) {
        this.Wa(d);
        return null == this.q ? !1 : this.q.Ye
    };
    e.ZG = function(d, b, a, e, f, g) {
        this.Wa(d);
        if (null == this.q) return !1;
        d = 36E5 * a + 6E4 * e + 1E3 * f + g;
        this.Hb(this.q);
        switch (b) {
            case 0:
                if (this.q.N < d) return this.Zf = d, !0;
                break;
            case 1:
                if (this.q.N > d) return this.Zf = d, !0;
                break;
            case 2:
                if (this.q.N != d) return this.Zf = d, !0;
                break;
            case 3:
                if (this.q.N == d || this.q.N > this.Zf && this.q.N > d) return this.Zf = d, !0;
                break;
            case 4:
                if (this.q.N <= d) return this.Zf = d, !0;
                break;
            case 5:
                if (this.q.N >= d) return this.Zf = d, !0
        }
        this.Zf = d;
        return !1
    };
    k.B = {};
    e = k.B;
    e.AI = function(d, b) {
        this.Wa(d);
        null != this.q && (this.q.qm = b)
    };
    e.FI = function(d, b) {
        this.Wa(d);
        null != this.q && (this.q.Im = b)
    };
    e.zI = function(d, b) {
        this.Wa(d);
        null != this.q && (this.q.Wp = b)
    };
    e.SI = function(d) {
        this.Wa(d);
        null != this.q && (this.Cg(this.q), this.q.Md = !0, this.q.Ye = !0)
    };
    e.OI = function(d) {
        this.q = null;
        this.Wa(d);
        null != this.q && (this.Cg(this.q), this.q.Md = !0, this.q.Ye = !1)
    };
    e.pH = function() {
        this.tb.length = 0
    };
    e.YH = function(d, b) {
        this.Wa(d);
        null != this.q && (0 == b && 1 == this.q.Md ? (this.q.Md = !1, this.q.cq = 1E3 * this.e.gb.aa) : 1 == b && 0 == this.q.Md && (this.q.Md = !0, this.q.ym += this.q.ok), this.q.ok = 0)
    };
    e.hI = function(d) {
        this.Wa(d);
        null != this.q && this.Cg(this.q)
    };
    e.VI = function(d, b, a) {
        for (var e = 0; e < this.tb.length; e++)
            if (this.tb[e].Ji == b) {
                this.tb.splice(e, 1);
                break
            }
        e = 1E3 * this.e.gb.aa;
        d = new this.Pm(b, e, d + e, d, 0);
        d.Bi = !0;
        d.Ye = a;
        this.Cg(d);
        this.tb.push(d)
    };
    e.QB = function(d, b) {
        for (var a = 0; a < this.tb.length; a++)
            if (this.tb[a].Ji == d) {
                this.tb.splice(a, 1);
                break
            }
        a = new this.Pm(d, 1E3 * this.e.gb.aa, 0, 0, 0);
        a.vh = !0;
        a.Ye = b;
        this.Cg(a);
        this.tb.push(a)
    };
    e.XI = function(d, b, a) {
        for (var e = 0; e < this.tb.length; e++)
            if (this.tb[e].Ji == d) {
                this.tb.splice(e, 1);
                break
            }
        d = new this.Pm(d, 1E3 * this.e.gb.aa - a, 0, 0, a);
        d.vh = !0;
        d.Ye = b;
        this.Cg(d);
        this.tb.push(d)
    };
    e.WI = function(d, b, a) {
        for (var e = 0; e < this.tb.length; e++)
            if (this.tb[e].Ji == b) {
                this.tb.splice(e, 1);
                break
            }
        d = new this.Pm(b, 1E3 * this.e.gb.aa, d, d, 0);
        d.vh = !0;
        d.Ye = a;
        this.Cg(d);
        this.tb.push(d)
    };
    e.fI = function(d) {
        for (var b = 0; b < this.tb.length; b++)
            if (this.tb[b].Ji == d) {
                this.tb.splice(b, 1);
                break
            }
    };
    e.YG = function(d, b, a) {
        this.Wa(d);
        if (null != this.q) switch (b) {
            case 0:
                1 == this.q.Bi ? this.q.gd += a : this.q.Cf -= a;
                break;
            case 1:
                1 == this.q.Bi ? this.q.gd -= a : (this.q.Cf += a, this.Hb(this.q), 0 > this.q.N && this.Cg(this.q))
        }
    };
    k.M = {};
    k = k.M;
    k.AH = function(d, b) {
        this.Wa(b);
        if (null == this.q) return d.H("");
        this.Hb(this.q);
        return d.H(this.wh(this.q.N, !1) + ":" + this.Ee(this.q.N, !1) + ":" + this.Yc(this.q.N, !1) + ":" + this.De(this.q.N))
    };
    k.BH = function(d, b) {
        this.Wa(b);
        if (null == this.q) return d.H("");
        this.Hb(this.q);
        return d.H(this.wh(this.q.N, !1) + ":" + this.Ee(this.q.N, !1) + ":" + this.Yc(this.q.N, !0) + ":" + this.De(this.q.N))
    };
    k.zH = function(d, b) {
        this.Wa(b);
        if (null == this.q) return d.H("");
        this.Hb(this.q);
        return d.H(this.wh(this.q.N, !1) + ":" + this.Ee(this.q.N, !0) + ":" + this.Yc(this.q.N, !0) + ":" + this.De(this.q.N))
    };
    k.yH = function(d, b) {
        this.Wa(b);
        if (null == this.q) return d.H("");
        this.Hb(this.q);
        return d.H(this.wh(this.q.N, !0) + ":" + this.Ee(this.q.N, !0) + ":" + this.Yc(this.q.N, !0) + ":" + this.De(this.q.N))
    };
    k.Tz = function(d, b) {
        this.Wa(b);
        if (null == this.q) return d.H("");
        this.Hb(this.q);
        return d.H(this.wh(this.q.N, !0) + ":" + this.Ee(this.q.N, !0) + ":" + this.Yc(this.q.N, !0))
    };
    k.RH = function(d, b) {
        this.Wa(b);
        if (null == this.q) return d.H("");
        this.Hb(this.q);
        return d.H(this.Ee(this.q.N, !0) + ":" + this.Yc(this.q.N, !0) + ":" + this.De(this.q.N))
    };
    k.oI = function(d, b) {
        this.Wa(b);
        if (null == this.q) return d.H("");
        this.Hb(this.q);
        return d.H(this.Yc(this.q.N, !0) + ":" + this.De(this.q.N))
    };
    k.QH = function(d, b) {
        this.Wa(b);
        if (null == this.q) return d.H("");
        this.Hb(this.q);
        return d.H(this.Ee(this.q.N, !0) + ":" + this.Yc(this.q.N, !0))
    };
    k.pI = function(d, b) {
        this.Wa(b);
        if (null == this.q) return d.H("");
        this.Hb(this.q);
        return d.H(this.Yc(this.q.N, !0))
    };
    k.MI = function(d, b) {
        this.Wa(b);
        if (null == this.q) return d.H("");
        this.Hb(this.q);
        return d.H(this.Yc(this.q.N, !1))
    };
    k.SH = function(d, b) {
        this.Wa(b);
        if (null == this.q) return d.H("");
        this.Hb(this.q);
        return d.H(this.De(this.q.N))
    };
    k.xH = function(d, b) {
        this.Wa(b);
        if (null == this.q) return d.Z(0);
        this.Hb(this.q);
        return d.Z(this.q.N)
    };
    k.qH = function(d, b) {
        this.Wa(b);
        if (null == this.q) return d.H("");
        this.Hb(this.q);
        return d.H(this.wh(this.q.N, !1) + ":" + this.Ee(this.q.N, !0) + ":" + this.Yc(this.q.N, !0) + ":" + this.De(this.q.N))
    };
    k.rH = function(d, b) {
        this.Wa(b);
        if (null == this.q) return d.H("");
        this.Hb(this.q);
        return d.H(this.wh(this.q.N, !0) + ":" + this.Ee(this.q.N, !0) + ":" + this.Yc(this.q.N, !0))
    };
    k.sH = function(d, b) {
        this.Wa(b);
        if (null == this.q) return d.H("");
        this.Hb(this.q);
        return d.H(this.Ee(this.q.N, !0) + ":" + this.Yc(this.q.N, !0) + ":" + this.De(this.q.N))
    };
    k.vH = function(d, b) {
        this.Wa(b);
        if (null == this.q) return d.H("");
        this.Hb(this.q);
        return d.H(this.Yc(this.q.N, !0) + ":" + this.De(this.q.N))
    };
    k.tH = function(d, b) {
        this.Wa(b);
        if (null == this.q) return d.H("");
        this.Hb(this.q);
        return d.H(this.Ee(this.q.N, !0) + ":" + this.Yc(this.q.N, !0))
    };
    k.wH = function(d, b) {
        this.Wa(b);
        if (null == this.q) return d.H("");
        this.Hb(this.q);
        return d.H(this.Yc(this.q.N, !0))
    };
    k.uH = function(d, b) {
        this.Wa(b);
        if (null == this.q) return d.H("");
        this.Hb(this.q);
        return d.H(this.De(this.q.N))
    };
    k.gH = function(d, b) {
        d.H(g.zc(b, !0) + ":" + g.Fa(b, !0) + ":" + g.Cb(b, !0) + ":" + g.Pe(b))
    };
    k.iH = function(d, b) {
        d.H(g.zc(b, !1) + ":" + g.Fa(b, !0) + ":" + g.Cb(b, !0) + ":" + g.Pe(b))
    };
    k.mH = function(d, b) {
        d.H(g.zc(b, !1) + ":" + g.Fa(b, !1) + ":" + g.Cb(b, !0) + ":" + g.Pe(b))
    };
    k.kH = function(d, b) {
        d.H(g.zc(b, !0) + ":" + g.Fa(b, !1) + ":" + g.Cb(b, !1) + ":" + g.Pe(b))
    };
    k.fH = function(d, b) {
        d.H(g.zc(b, !0) + ":" + g.Fa(b, !0) + ":" + g.Cb(b, !0))
    };
    k.hH = function(d, b) {
        d.H(g.zc(b, !1) + ":" + g.Fa(b, !0) + ":" + g.Cb(b, !0))
    };
    k.lH = function(d, b) {
        d.H(g.zc(b, !1) + ":" + g.Fa(b, !1) + ":" + g.Cb(b, !0))
    };
    k.jH = function(d, b) {
        d.H(g.zc(b, !1) + ":" + g.Fa(b, !1) + ":" + g.Cb(b, !1))
    };
    k.nH = function(d, b) {
        d.H(g.Fa(b, !0) + ":" + g.Cb(b, !0) + ":" + g.Pe(b))
    }
})();

function Bc(k) {
    this.e = k
}
(function() {
    function k() {
        this.name = "";
        this.qi = 0;
        this.ic = []
    }

    function g() {
        f++;
        f === l.length && l.push(new k);
        return l[f]
    }

    function e() {}

    function d() {}

    function b() {}
    var a = Bc.prototype;
    a.R = function(a) {
        this.G = a;
        this.e = a.e
    };
    a.R.prototype.J = function() {};
    a.I = function(a) {
        this.type = a;
        this.e = a.e
    };
    var l = [],
        f = -1;
    a.I.prototype.J = function() {
        var a = this;
        window.c2_callFunction = function(b, c) {
            var d, e, l, k = g();
            k.name = b.toLowerCase();
            k.qi = 0;
            if (c)
                for (k.ic.length = c.length, d = 0, e = c.length; d < e; ++d) l = c[d], k.ic[d] = "number" === typeof l || "string" === typeof l ? l : "boolean" === typeof l ? l ? 1 : 0 : 0;
            else G(k.ic);
            a.e.trigger(Bc.prototype.k.um, a, k.name);
            f--;
            return k.qi
        }
    };
    e.prototype.um = function(a) {
        var b = 0 > f ? null : l[f];
        return b ? ob(a, b.name) : !1
    };
    a.k = new e;
    d.prototype.CallFunction = function(a, b) {
        var c = g();
        c.name = a.toLowerCase();
        c.qi = 0;
        Ha(c.ic, b);
        this.e.trigger(Bc.prototype.k.um, this, c.name);
        f--
    };
    d.prototype.zB = function(a) {
        var b = 0 > f ? null : l[f];
        b && (b.qi = a)
    };
    a.B = new d;
    b.prototype.oB = function(a) {
        var b;
        l.length ? (b = f + 1, b >= l.length && (b = l.length - 1), b = l[b]) : b = null;
        b ? a.vi(b.qi) : a.Z(0)
    };
    b.prototype.bB = function(a, b) {
        b = qa(b);
        var c = 0 > f ? null : l[f];
        c ? 0 <= b && b < c.ic.length ? a.vi(c.ic[b]) : a.Z(0) : a.Z(0)
    };
    b.prototype.Sp = function(a, b) {
        var c = g();
        c.name = b.toLowerCase();
        c.qi = 0;
        G(c.ic);
        var d, e;
        d = 2;
        for (e = arguments.length; d < e; d++) c.ic.push(arguments[d]);
        this.e.trigger(Bc.prototype.k.um, this, c.name);
        f--;
        a.vi(c.qi)
    };
    a.M = new b
})();

function Fc(k) {
    this.e = k
}
(function() {
    var k = Fc.prototype;
    k.R = function(e) {
        this.G = e;
        this.e = e.e
    };
    k.R.prototype.J = function() {};
    k.I = function(e) {
        this.type = e;
        this.e = e.e;
        this.qy = []
    };
    var g = k.I.prototype;
    g.J = function() {
        (function(e, d, b, a, l, f, g) {
            e[l] = e[l] || function() {
                (e[l].PF = e[l].PF || []).push(arguments)
            };
            e[l].kJ = 1 * new Date;
            f = d.createElement(b);
            g = d.getElementsByTagName(b)[0];
            f.async = 1;
            f.src = a;
            g.parentNode.insertBefore(f, g)
        })(window, document, "script", "", "")
    };
    g.kd = function() {};
    g.wc = function() {};
    k.k = {};
    k.B = {};
    g = k.B;
    g.CC = function(e, d) {
        LaggedAPI.APIAds.show("interstitial", e, d, function(b) {
            b.success ? console.log("ad done") : console.log(b.Uv)
        })
    };
    g.AC = function(e) {
        LaggedAPI.init(e, "lagdevaF3001")
    };
    g.dJ = function(e, d) {
        var b = {};
        b.score = e;
        b.board = d;
        LaggedAPI.Scores.save(b, function(a) {
            a.success ? console.log("high score saved") : console.log(a.Uv)
        })
    };
    g.BC = function(e) {
        if (!(-1 < this.qy.indexOf(e))) {
            var d = [];
            d.push(e);
            this.qy.push(e);
            LaggedAPI.Achievements.save(d, function(b) {
                b.success ? console.log("achievement saved") : console.log(b.Uv)
            })
        }
    };
    k.M = {}
})();

function Gc(k) {
    this.e = k
}
(function() {
    function k(b) {
        this.sb = b;
        this.K = !1;
        this.u = this.speed = this.y = this.x = 0;
        this.opacity = 1;
        this.Gg = this.cj = this.size = this.Qn = 0
    }
    var g = Gc.prototype;
    g.R = function(b) {
        this.G = b;
        this.e = b.e
    };
    var e = g.R.prototype;
    e.J = function() {
        this.ca || (this.Ia = new Image, this.Ia.Nv = this.At, this.Ua = null, this.e.Nt(this.Ia, this.tp))
    };
    e.Dl = function() {
        this.ca || (this.Ua = null)
    };
    e.yo = function() {
        this.ca || !this.n.length || this.Ua || (this.Ua = this.e.S.tj(this.Ia, !0, this.e.rb, this.am))
    };
    e.us = function() {
        this.ca || this.Ua || !this.e.S || (this.Ua = this.e.S.tj(this.Ia, !0, this.e.rb, this.am))
    };
    e.Bp = function() {
        this.ca || this.n.length || !this.Ua || (this.e.S.deleteTexture(this.Ua), this.Ua = null)
    };
    e.Ro = function(b) {
        b.drawImage(this.Ia, 0, 0)
    };
    k.prototype.init = function() {
        var b = this.sb;
        this.x = b.x - b.Lp / 2 + Math.random() * b.Lp;
        this.y = b.y - b.Op / 2 + Math.random() * b.Op;
        this.speed = b.Wr - b.kp / 2 + Math.random() * b.kp;
        this.u = b.u - b.mp / 2 + Math.random() * b.mp;
        this.opacity = b.Ur;
        this.size = b.Vr - b.jp / 2 + Math.random() * b.jp;
        this.Qn = b.Nr - b.Rn / 2 + Math.random() * b.Rn;
        this.Gg = this.cj = 0
    };
    k.prototype.Ra = function(b) {
        var a = this.sb;
        this.x += Math.cos(this.u) * this.speed * b;
        this.y += Math.sin(this.u) * this.speed * b;
        this.y += this.cj * b;
        this.speed += a.Eh * b;
        this.size += this.Qn * b;
        this.cj += a.Me * b;
        this.Gg += b;
        1 > this.size ? this.K = !1 : (0 !== a.jl && (this.u += Math.random() * a.jl * b - a.jl * b / 2), 0 !== a.ll && (this.speed += Math.random() * a.ll * b - a.ll * b / 2), 0 !== a.kl && (this.opacity += Math.random() * a.kl * b - a.kl * b / 2, 0 > this.opacity ? this.opacity = 0 : 1 < this.opacity && (this.opacity = 1)), 1 >= a.Ui && this.Gg >= a.timeout && (this.K = !1), 2 === a.Ui && 0 >= this.speed && (this.K = !1))
    };
    k.prototype.kd = function(b) {
        var a = this.sb.opacity * this.opacity;
        if (0 !== a) {
            0 === this.sb.Ui && (a *= 1 - this.Gg / this.sb.timeout);
            b.globalAlpha = a;
            var a = this.x - this.size / 2,
                d = this.y - this.size / 2;
            this.sb.e.$d && (a = a + .5 | 0, d = d + .5 | 0);
            b.drawImage(this.sb.type.Ia, a, d, this.size, this.size)
        }
    };
    k.prototype.wc = function(b) {
        var a = this.sb.opacity * this.opacity;
        0 === this.sb.Ui && (a *= 1 - this.Gg / this.sb.timeout);
        var d = this.size,
            f = d * this.sb.Yx,
            e = this.x - d / 2,
            g = this.y - d / 2;
        this.sb.e.$d && (e = e + .5 | 0, g = g + .5 | 0);
        1 > f || 0 === a || (f < b.hF || f > b.Bs ? (b.kh(a), b.Oj(e, g, e + d, g, e + d, g + d, e, g + d)) : b.DF(this.x, this.y, f, a))
    };
    k.prototype.left = function() {
        return this.x - this.size / 2
    };
    k.prototype.right = function() {
        return this.x + this.size / 2
    };
    k.prototype.top = function() {
        return this.y - this.size / 2
    };
    k.prototype.bottom = function() {
        return this.y + this.size / 2
    };
    g.I = function(b) {
        this.type = b;
        this.e = b.e
    };
    var e = g.I.prototype,
        d = [];
    e.J = function() {
        var b = this.A;
        this.Vo = b[0];
        this.mp = I(b[1]);
        this.Vj = b[2];
        this.xt = !0;
        this.Wr = b[3];
        this.Vr = b[4];
        this.Ur = b[5] / 100;
        this.Nr = b[6];
        this.Lp = b[7];
        this.Op = b[8];
        this.kp = b[9];
        this.jp = b[10];
        this.Rn = b[11];
        this.Eh = b[12];
        this.Me = b[13];
        this.jl = b[14];
        this.ll = b[15];
        this.kl = b[16];
        this.Ui = b[17];
        this.timeout = b[18];
        this.oi = 0;
        this.Yx = 1;
        this.Ho = this.x;
        this.Jo = this.y;
        this.Io = this.x;
        this.Go = this.y;
        this.lC(function(a) {
            a.lb.set(a.Ho, a.Jo, a.Io, a.Go);
            a.Hf.Rl(a.lb);
            a.Zm = !1;
            a.FG();
            a.cz()
        });
        this.Mb || (this.ed = []);
        this.e.fm(this);
        this.type.us();
        if (1 === this.Vj)
            for (b = 0; b < this.Vo; b++) this.xq().opacity = 0;
        this.Hn = !0
    };
    e.ja = function() {
        var b = {
                r: this.Vo,
                sc: this.mp,
                st: this.Vj,
                s: this.xt,
                isp: this.Wr,
                isz: this.Vr,
                io: this.Ur,
                gr: this.Nr,
                xr: this.Lp,
                yr: this.Op,
                spr: this.kp,
                szr: this.jp,
                grnd: this.Rn,
                acc: this.Eh,
                g: this.Me,
                lar: this.jl,
                lsr: this.ll,
                lor: this.kl,
                dm: this.Ui,
                to: this.timeout,
                pcc: this.oi,
                ft: this.Hn,
                p: []
            },
            a, d, f, e = b.p;
        a = 0;
        for (d = this.ed.length; a < d; a++) f = this.ed[a], e.push([f.x, f.y, f.speed, f.u, f.opacity, f.Qn, f.size, f.cj, f.Gg]);
        return b
    };
    e.ua = function(b) {
        this.Vo = b.r;
        this.mp = b.sc;
        this.Vj = b.st;
        this.xt = b.s;
        this.Wr = b.isp;
        this.Vr = b.isz;
        this.Ur = b.io;
        this.Nr = b.gr;
        this.Lp = b.xr;
        this.Op = b.yr;
        this.kp = b.spr;
        this.jp = b.szr;
        this.Rn = b.grnd;
        this.Eh = b.acc;
        this.Me = b.g;
        this.jl = b.lar;
        this.ll = b.lsr;
        this.kl = b.lor;
        this.Ui = b.dm;
        this.timeout = b.to;
        this.oi = b.pcc;
        this.Hn = b.ft;
        d.push.apply(d, this.ed);
        G(this.ed);
        var a, e, f, g = b.p;
        b = 0;
        for (a = g.length; b < a; b++) e = this.xq(), f = g[b], e.x = f[0], e.y = f[1], e.speed = f[2], e.u = f[3], e.opacity = f[4], e.Qn = f[5], e.size = f[6], e.cj = f[7], e.Gg = f[8]
    };
    e.se = function() {
        d.push.apply(d, this.ed);
        G(this.ed)
    };
    e.xq = function() {
        var b;
        d.length ? (b = d.pop(), b.sb = this) : b = new k(this);
        this.ed.push(b);
        b.K = !0;
        return b
    };
    e.Ra = function() {
        var b = this.e.Ne(this),
            a, e, f, g;
        if (0 === this.Vj && this.xt)
            for (this.oi += b * this.Vo, e = qa(this.oi), this.oi -= e, a = 0; a < e; a++) f = this.xq(), f.init();
        this.Ho = this.x;
        this.Jo = this.y;
        this.Io = this.x;
        this.Go = this.y;
        g = a = 0;
        for (e = this.ed.length; a < e; a++) f = this.ed[a], this.ed[g] = f, this.e.xa = !0, 1 === this.Vj && this.Hn && f.init(), f.Ra(b), f.K ? (f.left() < this.Ho && (this.Ho = f.left()), f.right() > this.Io && (this.Io = f.right()), f.top() < this.Jo && (this.Jo = f.top()), f.bottom() > this.Go && (this.Go = f.bottom()), g++) : d.push(f);
        Da(this.ed, g);
        this.za();
        this.Hn = !1;
        1 === this.Vj && 0 === this.ed.length && this.e.Ce(this)
    };
    e.kd = function(b) {
        var a, d, f, e = this.C;
        a = 0;
        for (d = this.ed.length; a < d; a++) f = this.ed[a], f.right() >= e.Na && f.bottom() >= e.Oa && f.left() <= e.Ta && f.top() <= e.Sa && f.kd(b)
    };
    e.wc = function(b) {
        this.Yx = this.C.md();
        b.Ad(this.type.Ua);
        var a, d, f, e = this.C;
        a = 0;
        for (d = this.ed.length; a < d; a++) f = this.ed[a], f.right() >= e.Na && f.bottom() >= e.Oa && f.left() <= e.Ta && f.top() <= e.Sa && f.wc(b)
    };
    g.k = new function() {};
    g.B = new function() {};
    g.M = new function() {}
})();

function T(k) {
    this.e = k
}
(function() {
    function k() {}

    function g() {}

    function e() {}
    var d = T.prototype;
    d.R = function(a) {
        this.G = a;
        this.e = a.e
    };
    d.R.prototype.J = function() {};
    d.I = function(a) {
        this.type = a;
        this.e = a.e
    };
    var b = d.I.prototype;
    b.J = function() {
        this.ad = 1 == this.A[0];
        var a = this.A[1],
            a = "" != a ? a : "Off";
        this.Mb ? this.jf.Ze(this, "Off", a) : this.jf = new T.Fa(this, "Off", a);
        this.Mq = this.If = null;
        this.of = !1;
        this.Js = null
    };
    b.hh = function(a) {
        this.of = !1;
        this.e.trigger(a, this);
        return this.of
    };
    b.vE = function() {
        this.Js = null;
        this.hh(T.prototype.k.qu) || this.hh(T.prototype.k.xA);
        return this.Js
    };
    b.ja = function() {
        return {
            en: this.ad,
            fsm: this.jf.ja()
        }
    };
    b.ua = function(a) {
        this.ad = a.en;
        this.jf.ua(a.fsm)
    };
    d.k = new k;
    k.prototype.lu = function(a) {
        a = this.If == a;
        this.of |= a;
        return a
    };
    k.prototype.vA = function() {
        return !0
    };
    k.prototype.mu = function(a) {
        a = this.If == a;
        this.of |= a;
        return a
    };
    k.prototype.wA = function() {
        return !0
    };
    k.prototype.$A = function(a, b) {
        var d = this.If == a && this.Mq == b;
        this.of |= d;
        return d
    };
    k.prototype.wu = function() {
        return !0
    };
    k.prototype.qu = function(a) {
        a = this.jf.Xe == a;
        this.of |= a;
        return a
    };
    k.prototype.Yz = function(a) {
        return this.jf.Xe == a
    };
    k.prototype.Zz = function(a) {
        return this.jf.Bg == a
    };
    k.prototype.xA = function() {
        return !0
    };
    d.B = new g;
    g.prototype.Jm = function(a) {
        this.ad = 1 == a
    };
    g.prototype.Fm = function() {
        this.ad && this.jf.Fm()
    };
    g.prototype.Sz = function(a) {
        this.ad && this.jf.Fm(a)
    };
    g.prototype.nA = function(a) {
        this.Js = a
    };
    d.M = new e;
    e.prototype.Xe = function(a) {
        a.H(this.jf.Xe)
    };
    e.prototype.Bg = function(a) {
        a.H(this.jf.Bg)
    }
})();
(function() {
    T.Fa = function(g, e, d) {
        this.Ze(g, e, d)
    };
    var k = T.Fa.prototype;
    k.Ze = function(g, e, d) {
        this.G = g;
        this.Bg = e;
        this.Xe = d
    };
    k.Fm = function(g) {
        if (null == g && (g = this.G.vE(), null == g)) return;
        this.Bg = this.Xe;
        this.Xe = g;
        g = this.Bg;
        var e = this.Xe;
        this.G.hh(T.prototype.k.wu);
        this.fC(g, e) || (this.eC(g), this.dC(e))
    };
    k.fC = function(g, e) {
        this.G.If = g;
        this.G.Mq = e;
        var d = this.G.hh(T.prototype.k.$A);
        this.G.If = null;
        this.G.Mq = null;
        return d
    };
    k.eC = function(g) {
        this.G.If = g;
        g = this.G.hh(T.prototype.k.mu);
        this.G.If = null;
        g || this.G.hh(T.prototype.k.wA)
    };
    k.dC = function(g) {
        this.G.If = g;
        g = this.G.hh(T.prototype.k.lu);
        this.G.If = null;
        g || this.G.hh(T.prototype.k.vA)
    };
    k.ja = function() {
        return {
            ps: this.Bg,
            cs: this.Xe
        }
    };
    k.ua = function(g) {
        this.Bg = g.ps;
        this.Xe = g.cs
    }
})();

function Hc(k) {
    this.e = k
}
(function() {
    function k(a) {
        var c = a.length,
            b = [],
            d;
        for (d = 0; d < c; d++) a[d].eJ = !0, b.push(a[d].uid);
        return b
    }

    function g() {
        this.hb = []
    }

    function e() {}

    function d() {}

    function b() {}
    var a = Hc.prototype;
    a.R = function(a) {
        this.G = a;
        this.e = a.e
    };
    a.R.prototype.J = function() {};
    a.I = function(a) {
        this.type = a;
        this.e = a.e
    };
    var l = a.I.prototype;
    l.J = function() {
        this.TE = 1 == this.A[3];
        this.W = null;
        this.Gf = -1;
        this.group = this.sk = null;
        this.Sf = -1;
        this.Xv = this.Wv = 0;
        this.uq = this.qq = "";
        this.Bh = {};
        this.Ch = [];
        this.Rm = !1;
        this.Tm = null;
        this.Vm = [1 == this.A[0], 1 == this.A[1], 1 == this.A[2], 1 == this.A[2]];
        this.iz = this.A[4]
    };
    l.se = function() {
        this.Vu()
    };
    l.Va = function() {
        if (null != this.W) return this.W;
        var a = this.e.types,
            c, b;
        for (c in a)
            if (b = a[c].n[0], Ic && b instanceof Ic.prototype.I) return this.W = b;
        return null
    };
    l.jk = function() {
        if (null != this.group) return this.group;
        var a = this.e.types,
            c, b;
        for (c in a)
            if (b = a[c].n[0], Jc && b instanceof Jc.prototype.I) return this.group = b;
        return null
    };
    var f = g.prototype;
    f.Ni = function() {
        return 0 < this.hb.length ? this.hb.pop() : null
    };
    f.aj = function(a) {
        this.hb.push(a)
    };
    var m = new g;
    l.Vu = function() {
        var a, c, b;
        for (a in this.Bh)
            for (c in b = this.Bh[a], b) m.aj(b[c]);
        this.Bh = {}
    };
    l.MG = function(a, c) {
        var b = this.Va().ub(a, c, 0);
        if (null != b) {
            this.Wv = a;
            this.Xv = c;
            this.uq = "";
            this.e.trigger(Hc.prototype.k.nu, this);
            null == this.Bh[a] && (this.Bh[a] = {});
            var d = this.Bh[a];
            if (null == d[c]) {
                var f = m.Ni();
                null == f && (f = {});
                d[c] = f
            }
            f = d[c];
            f.symbol = this.uq;
            f.uid = b;
            this.Tm = this.e.ze
        }
    };
    l.tq = function(a, c) {
        var b = this.Bh[a];
        return null == b ? b : b[c]
    };
    l.rq = function(a) {
        return a ? "" !== a.symbol : !1
    };
    l.Zu = function(a) {
        return a && "" !== this.iz ? a.symbol === this.iz : !1
    };
    l.hy = function() {
        this.Vu();
        var a, c;
        a = this.Va();
        var b = a.jb,
            d = a.kb;
        for (c = 0; c <= d; c++)
            for (a = 0; a <= b; a++) this.MG(a, c)
    };
    l.Fa = function(a, c) {
        this.qq = a;
        this.Nw() && this.hy();
        this.Rm = !1;
        1 == c ? this.e.trigger(Hc.prototype.k.KA, this) : 2 == c && (this.e.trigger(Hc.prototype.k.MA, this), this.e.trigger(Hc.prototype.k.LA, this));
        this.Rm || this.e.trigger(Hc.prototype.k.PA, this)
    };
    l.Zx = function(a) {
        this.Ch.length = 0;
        null == this.sk && (this.sk = this.Va().lc().ik());
        4 == this.sk || 8 == this.sk ? this.AF(a) : 6 == this.sk && this.zF(a);
        return this.Ch
    };
    l.AF = function(a) {
        var c = "number" == typeof a;
        c || (a = a.split(null != a.indexOf(",") ? "," : ""));
        var b, d, f, e, l, g = [],
            m = c ? a : a.length,
            u = this.Va(),
            y = u.jb,
            C = u.kb,
            B, w, z, v, r, L = this.Vm.length,
            N;
        for (r = 0; r < L; r++)
            if (this.Vm[r])
                for (d = 0; d <= C; d++)
                    for (b = 0; b <= y; b++) {
                        l = !0;
                        g.length = 0;
                        c && (a = null);
                        B = b;
                        w = d;
                        for (f = 0; f < m; f++) {
                            e = this.tq(B, w);
                            if (!this.rq(e)) {
                                l = !1;
                                break
                            }
                            N = this.Zu(e);
                            if (!N && c && null === a) {
                                a = [];
                                for (var J = 0; J < m; J++) a.push(e.symbol)
                            }
                            if (!N && e.symbol != a[f]) {
                                l = !1;
                                break
                            }
                            g.push(e);
                            switch (r) {
                                case 0:
                                    z = u.Fe(B, w, 0);
                                    v = u.Ge(B, w, 0);
                                    break;
                                case 1:
                                    z = u.Fe(B, w, 1);
                                    v = u.Ge(B, w, 1);
                                    break;
                                case 2:
                                    z = u.Fe(B, w, 4);
                                    v = u.Ge(B, w, 4);
                                    break;
                                case 3:
                                    z = u.Fe(B, w, 5), v = u.Ge(B, w, 5)
                            }
                            B = z;
                            w = v
                        }
                        l && this.Ch.push({
                            uid: k(g),
                            dir: r
                        })
                    }
    };
    l.zF = function(a) {
        var c = "number" == typeof a;
        c || (a = a.split(null != a.indexOf(",") ? "," : ""));
        var b, d, f, e, l, g, m = [],
            u = c ? a : a.length,
            y = this.Va(),
            C = y.jb,
            B = y.kb,
            w, z, v;
        for (b = 0; 3 > b; b++)
            for (d = 0; d <= C; d++)
                for (f = 0; f <= B; f++) {
                    g = !0;
                    m.length = 0;
                    c && (a = null);
                    w = d;
                    z = f;
                    for (e = 0; e < u; e++) {
                        l = this.tq(w, z);
                        if (!this.rq(l)) {
                            g = !1;
                            break
                        }
                        v = this.Zu(l);
                        if (!v && c && null === a) {
                            a = [];
                            for (var r = 0; r < u; r++) a.push(l.symbol)
                        }
                        if (!v && l.symbol != a[e]) {
                            g = !1;
                            break
                        }
                        m.push(l);
                        l = y.Fe(w, z, b);
                        z = y.Ge(w, z, b);
                        w = l
                    }
                    g && this.Ch.push({
                        uid: k(m),
                        dir: b
                    })
                }
    };
    l.$x = function(a, c) {
        var b = a.split("\n"),
            d, f = b.length;
        for (d = 0; d < f; d++) b[d] = b[d].split(",");
        a = b;
        this.Ch.length = 0;
        var e, l, g, m, u = [],
            y = this.Va(),
            C = y.jb,
            B = y.kb,
            w = a.length,
            z, v, r;
        for (d = 0; d <= B; d++)
            for (b = 0; b <= C; b++) {
                m = !0;
                u.length = 0;
                c && (v = !0);
                for (f = 0; f < w; f++) {
                    z = a[f].length;
                    for (e = 0; e < z; e++)
                        if (l = a[f][e], "" != l) {
                            g = y.Su(b + e);
                            r = y.Tu(d + f);
                            g = this.tq(g, r);
                            if (!this.rq(g)) {
                                m = !1;
                                break
                            } else if (v) {
                                v = a;
                                l = g.symbol;
                                r = void 0;
                                var L = v.length,
                                    N = void 0,
                                    J = void 0;
                                for (r = 0; r < L; r++)
                                    for (J = v[r].length, N = 0; N < J; N++) "" != v[r][N] && (v[r][N] = l);
                                v = !1
                            } else if (g.symbol != l) {
                                m = !1;
                                break
                            }
                            u.push(g)
                        }
                    if (!m) break
                }
                m && this.Ch.push({
                    uid: k(u),
                    dir: null
                })
            }
        return this.Ch
    };
    l.Bo = function(a) {
        var c, b = a.length,
            d = this.e;
        c = d.Ib();
        var f = c.Ab,
            e = c.Jw(),
            l = this.jk().bb(this.qq);
        for (c = 0; c < b; c++) e && d.pi(f.Ha), l.Km(a[c].uid), f.Rj(), e && d.uf(f.Ha)
    };
    l.Nw = function() {
        return this.TE && this.YE()
    };
    l.YE = function() {
        var a = this.e.ze,
            c = this.Tm !== a;
        this.Tm = a;
        return c
    };
    l.ja = function() {
        return {
            boarduid: null != this.W ? this.W.uid : -1,
            groupuid: null != this.group ? this.group.uid : -1,
            sm: this.Vm
        }
    };
    l.ua = function(a) {
        this.Gf = a.boarduid;
        this.Sf = a.groupuid;
        this.Vm = a.sm;
        this.Tm = null
    };
    l.bd = function() {
        -1 === this.Gf ? this.W = null : this.W = this.e.nc(this.Gf);
        this.Gf = -1; - 1 === this.Sf ? this.group = null : this.group = this.e.nc(this.Sf);
        this.Sf = -1
    };
    a.k = new e;
    e.prototype.nu = function() {
        return !0
    };
    e.prototype.KA = function(a) {
        a = this.Zx(a);
        this.Bo(a);
        return !1
    };
    e.prototype.PA = function() {
        return !0
    };
    e.prototype.LA = function(a) {
        a = this.$x(a, !1);
        this.Bo(a);
        return !1
    };
    e.prototype.MA = function(a) {
        a = this.$x(a, !0);
        this.Bo(a);
        return !1
    };
    e.prototype.Mz = function(a, c) {
        this.Nw() && this.hy();
        var b = this.Zx(a);
        if (this.Rm = 0 != b.length) this.qq = c, this.Bo(b);
        return !1
    };
    a.B = new d;
    d.prototype.BB = function(a) {
        this.uq = a
    };
    a.M = new b;
    b.prototype.iq = function(a) {
        a.Z(this.Wv)
    };
    b.prototype.jq = function(a) {
        a.Z(this.Xv)
    }
})();

function Kc(k) {
    this.e = k
}
(function() {
    function k() {}

    function g() {}
    var e = Kc.prototype;
    e.R = function(b) {
        this.G = b;
        this.e = b.e
    };
    e.R.prototype.J = function() {};
    e.I = function(b) {
        this.type = b;
        this.e = b.e
    };
    var d = e.I.prototype;
    d.J = function() {
        this.mode = this.A[0];
        var b = this.A[1];
        "" != b ? this.gh = JSON.parse(b) : this.gh = {};
        this.Li = [];
        this.$c = {};
        this.Ny();
        this.Ll = null;
        this.xn = "";
        this.Dc = -1
    };
    d.ky = function(b) {
        var a;
        this.Li.length = 0;
        var d, f = 0;
        for (a in b) d = b[a], 0 < d && (f += d);
        for (a in b) d = b[a], 0 < d && this.Li.push({
            rate: d / f,
            pattern: a
        })
    };
    d.yE = function() {
        return null == this.Ll ? Math.random() : this.Ll.random()
    };
    d.ww = function(b) {
        var a = this.yE(),
            d = "",
            f, e = b.length;
        for (f = 0; f < e; f++)
            if (a -= b[f].rate, 0 > a) {
                d = b[f].pattern;
                break
            }
        return d
    };
    d.Ny = function() {
        var b, a;
        for (b in this.$c) delete this.$c[b];
        for (b in this.gh) a = this.gh[b], 0 < a && (this.$c[b] = this.gh[b]);
        1 == this.mode && this.ky(this.$c);
        this.Ml = !1
    };
    d.pv = function(b) {
        if (null != b) {
            this.$c.hasOwnProperty(b) || (this.$c[b] = 0);
            this.$c[b] += -1;
            0 >= this.$c[b] && delete this.$c[b];
            if (b = 0 == this.mode) {
                b = this.$c;
                var a = !0,
                    d;
                for (d in b) {
                    a = !1;
                    break
                }
                b = a
            }
            b && (this.Ml = !0)
        }
    };
    d.xE = function() {
        var b;
        this.Ml && this.Ny();
        null == b ? 0 == this.mode || 2 == this.mode ? (this.ky(this.$c), b = this.ww(this.Li), this.pv(b)) : 1 == this.mode && (b = this.ww(this.Li)) : this.$c.hasOwnProperty(b) ? 0 != this.mode && 2 != this.mode || this.pv(b) : b = "";
        return b
    };
    d.Fa = function(b, a) {
        return (a ? this.$c : this.gh)[b] || 0
    };
    d.ja = function() {
        return {
            m: this.mode,
            pats: this.gh,
            pr: this.Li,
            spats: this.$c,
            rstf: this.Ml,
            randomuid: null != this.Ll ? this.Ll.uid : -1,
            lp: this.xn
        }
    };
    d.ua = function(b) {
        this.mode = b.m;
        this.gh = b.pats;
        this.Li = b.pr;
        this.$c = b.spats;
        this.Ml = b.rstf;
        this.Dc = b.randomuid;
        this.xn = b.lp
    };
    d.bd = function() {
        var b; - 1 === this.Dc ? b = null : b = this.e.nc(this.Dc);
        this.Dc = -1;
        this.Ll = b
    };
    e.k = new function() {};
    e.B = new k;
    k.prototype.yB = function(b, a) {
        "" != b && (this.gh[b] = a, this.Ml = !0)
    };
    e.M = new g;
    g.prototype.cB = function(b) {
        this.xn = this.xE();
        b.H(this.xn)
    };
    g.prototype.Rp = function(b) {
        b.H(JSON.stringify(this.ja()))
    }
})();

function Ic(k) {
    this.e = k
}
(function() {
    function k(a) {
        for (var c in a) delete a[c]
    }

    function g(a) {
        null == a ? a = null : "object" === typeof a && (a = a.kf(), a = null != a ? a.uid : null);
        return a
    }

    function e() {}

    function d() {}

    function b() {}
    var a = Ic.prototype;
    a.R = function(a) {
        this.G = a;
        this.e = a.e
    };
    a.R.prototype.J = function() {};
    a.I = function(a) {
        this.type = a;
        this.e = a.e
    };
    var l = a.I.prototype,
        f = [];
    l.J = function() {
        this.Lq = "BOARD";
        this.W = new window.zc;
        this.qd = 1 === this.A[3];
        this.Yg = 1 === this.A[2];
        this.Gm(this.A[0] - 1, this.A[1] - 1);
        this.qb = null;
        this.Pw = this.jo = -1;
        this.Mb || (this.fh = function(a) {
            return function(c) {
                a.ni(c)
            }
        }(this));
        this.e.Xm(this.fh)
    };
    l.se = function() {
        this.Gm(-1, -1);
        this.e.gt(this.fh)
    };
    l.ni = function(a) {
        this.Zc(a.uid)
    };
    l.lc = function() {
        if (null != this.qb) return this.qb;
        var a = this.e.types,
            c, b;
        for (c in a)
            if (b = a[c].n[0], Lc && b instanceof Lc.prototype.I || pc.qB && b instanceof pc.qB.prototype.I || pc.pB && b instanceof pc.pB.prototype.I) return this.qb = b;
        return null
    };
    l.Gm = function(a, c) {
        this.qd ? this.jb = -1 : -1 <= a && (this.jb = a);
        this.qd && (this.kb = -1); - 1 <= c && (this.kb = c);
        this.W.Ze()
    };
    l.yg = function() {
        return this.W.yg()
    };
    l.Eu = function(a) {
        if (!this.qd && this.jb !== a) {
            if (!(this.jb < a)) {
                var c, b, d, f;
                for (c = this.jb; c > a; c--)
                    for (b = 0; b <= this.kb; b++)
                        if (f = this.Be(c, b))
                            for (d in f) this.Zc(f[d], !0)
            }
            this.jb = a
        }
    };
    l.Du = function(a) {
        if (!this.qd && this.kb != a) {
            if (!(this.kb < a)) {
                var c, b, d, f;
                for (c = 0; c <= this.jb; c++)
                    for (b = this.kb; b > a; b--)
                        if (f = this.Be(c, b))
                            for (d in f) this.Zc(f[d], !0)
            }
            this.kb = a
        }
    };
    l.Bf = function(a, c, b) {
        var d;
        (d = this.qd ? !0 : 0 <= a && 0 <= c && a <= this.jb && c <= this.kb) && null != b && (d = null != this.ub(a, c, b));
        return d
    };
    l.Ei = function(a, c, b) {
        var d = this.Be(a, c);
        return d ? 0 === b ? null == d[0] : null != d[0] && null == d[b] : this.qd ? !0 : this.Bf(a, c) ? !0 : !1
    };
    l.ub = function(a, c, b) {
        return this.W.Vp(a, c, b)
    };
    l.Be = function(a, c) {
        return this.W.Vp(a, c) || null
    };
    l.NG = function(a, c) {
        var b = this.Be(a, c);
        if (!b) return 0;
        var d = 0,
            f;
        for (f in b) d += 1;
        return d
    };
    l.As = function(a, c) {
        var b = this.V(a);
        return null == b ? null : b.z == c ? a : this.ub(b.x, b.y, c)
    };
    l.Fe = function(a, c, b, d) {
        this.qd ? d = !1 : null == d && (d = this.Yg);
        a = this.lc().Fe(a, c, b);
        d && (a = this.Su(a));
        return a
    };
    l.Su = function(a) {
        var c;
        this.qd ? c = !1 : null == c && (c = this.Yg);
        if (!c) return a;
        c = this.jb + 1;
        a = a % c;
        0 > a && (a = a + c);
        return a
    };
    l.Ge = function(a, c, b, d) {
        this.qd ? d = !1 : null == d && (d = this.Yg);
        a = this.lc().Ge(a, c, b);
        d && (a = this.Tu(a));
        return a
    };
    l.Tu = function(a) {
        var c;
        this.qd ? c = !1 : null == c && (c = this.Yg);
        if (!c) return a;
        c = this.kb + 1;
        a = a % c;
        0 > a && (a = a + c);
        return a
    };
    l.Xq = function(a, c, b) {
        var d = 0;
        a = this.V(a);
        if (null == a) return null;
        var f = this.Fe(a.x, a.y, c, b);
        c = this.Ge(a.x, a.y, c, b);
        null == d && (d = a.z);
        return this.ub(f, c, d)
    };
    l.V = function(a) {
        return this.yg()[a] || null
    };
    l.dk = function(a) {
        var c = parseInt(a);
        return "number" !== typeof c ? null : 0 > c ? null : this.V(a) ? this.e.nc(a) : null
    };
    l.Om = function(a, c) {
        var b = this.V(a),
            d = this.V(c);
        if (null == b || null == d) return !1;
        this.Zc(a);
        this.Zc(c);
        this.xg(a, d.x, d.y, d.z);
        this.xg(c, b.x, b.y, b.z);
        return !0
    };
    l.Fa = function(a, c, b, d) {
        var f;
        switch (d) {
            case 0:
                f = this.Bf(a, c);
                break;
            case 1:
                f = this.Bf(a, c, 0 == b ? null : 0);
                break;
            case 2:
                f = this.Ei(a, c, b)
        }
        return f
    };
    l.Zc = function(a, c) {
        null != a && null != this.V(a) && (c && this.dk(a) && (this.Pw = a, this.e.trigger(Ic.prototype.k.rA, this)), this.W.kB(a))
    };
    l.xg = function(a, c, b, d) {
        if (a && this.Bf(c, b)) {
            var f = "object" === typeof a;
            a = f ? a.uid : a;
            this.Zc(a);
            this.Zc(this.ub(c, b, d), !0);
            this.W.Xt(a, c, b, d);
            (f || null != this.dk(a)) && this.e.trigger(Ic.prototype.k.ju, this)
        }
    };
    l.kk = function(a, c, b, d) {
        a = "object" === typeof a ? a.uid : a;
        this.Zc(a);
        this.xg(a, c, b, d)
    };
    l.zc = function(a, c, b) {
        a = this.V(a);
        c = this.V(c);
        return a && c ? this.jz(a.x, a.y, c.x, c.y, b) : null
    };
    var m = {
            x: 0,
            y: 0,
            z: 0
        },
        q = {
            x: 0,
            y: 0,
            z: 0
        };
    l.jz = function(a, c, b, d, f) {
        m.x = a;
        m.y = c;
        q.x = b;
        q.y = d;
        c = this.lc();
        a = c.mA(m, q);
        if (null == a && (this.qd && (f = !1), null == f && (f = this.Yg), f)) {
            b = c.ik();
            var e;
            for (c = 0; c < b; c++)
                if (d = this.Fe(m.x, m.y, c, f), e = this.Ge(m.x, m.y, c, f), d == q.x && e == q.y) {
                    a = c;
                    break
                }
        }
        return a
    };
    l.om = function(a, c, b, d, f) {
        if (a && f && this.Bf(c, b)) {
            var e = this,
                l = this.lc(),
                g = l.xh(c, b, d),
                l = l.yh(c, b, d);
            return window.Pe.call(this, a, f, g, l, function(a) {
                e.xg(a, c, b, d)
            })
        }
    };
    l.wF = function(a, c) {
        var b = a.da().cc(),
            d = c.da().cc(),
            f, e, l;
        b.length > d.length ? (f = c, e = a, l = d) : (f = a, e = c, l = b, b = d);
        var d = this.e,
            g = d.Ib().Ab,
            k = f === e,
            m = l.length,
            q, w, z, v, r, L, N, J;
        for (q = 0; q < m; q++)
            if (z = l[q], v = z.uid, r = this.V(v), null != r && (r = this.Be(r.x, r.y)))
                for (w in r) L = r[w], L != v && (L = this.dk(L), -1 != b.indexOf(L) && (d.pi(g.Ha), N = f.da(), J = e.da(), N.qa = !1, J.qa = !1, k ? (N.n.length = 2, N.n[0] = z, N.n[1] = L) : (N.n.length = 1, N.n[0] = z, J.n.length = 1, J.n[0] = L), g.Rj(), d.uf(g.Ha)))
    };
    l.Nd = function(a, c, b) {
        if (!c) return !1;
        var d;
        if (!b) {
            var f = this;
            d = function(a) {
                return null != f.V(a)
            }
        }
        return window.Cb.call(this, a, c, d)
    };
    var c = {};
    l.Cb = function() {
        var a, b, d, f;
        k(c);
        d = !1;
        b = this.yg();
        for (a in b)
            if (b = this.dk(a)) d = b.type, f = d.da(), d.name in c || (f.qa = !1, f.n.length = 0, c[d.name] = d), f.n.push(b), d = !0;
        for (var e in c) c[e].Dd();
        k(c);
        return d
    };
    l.zm = function(a) {
        if (!a) return !1;
        f.length = 0;
        var c, b = this.yg();
        for (c in b) f.push(parseInt(c));
        a = this.Nd(f, a);
        f.length = 0;
        return a
    };
    l.Gi = function(a, c, b) {
        if (!a) return !1;
        c = this.Be(c, b);
        if (!c) return !1;
        f.length = 0;
        for (var d in c) f.push(c[d]);
        a = this.Nd(f, a);
        f.length = 0;
        return a
    };
    l.dq = function(a, c) {
        if (!a) return !1;
        f.length = 0;
        var b = c.length,
            d, e, l;
        for (d = 0; d < b; d++)
            if (e = c[d], e = "object" === typeof e ? e.uid : e, e = this.V(e))
                if (e = this.Be(e.x, e.y))
                    for (l in e) f.push(e[l]);
        b = this.Nd(f, a);
        f.length = 0;
        return b
    };
    l.zu = function(a, c) {
        if (this.qd) return !0;
        var b = this.lc(),
            d = b.mk(a, c),
            b = b.nk(a, c);
        return this.Bf(d, b)
    };
    l.qk = function(a, c, b, d) {
        if (!a) return !1;
        f.length = 0;
        c = this.ub(c, b, d);
        null != c && f.push(c);
        a = this.Nd(f, a);
        f.length = 0;
        return a
    };
    l.Bm = function(a, c) {
        if (!a) return !1;
        f.length = 0;
        if (this.qd) {
            var b, d;
            d = this.yg();
            for (b in d) b = parseInt(b), d = this.V(b), d.x === c && f.push(b)
        } else {
            var e;
            for (b = 0; b <= this.kb; b++)
                if (e = this.Be(c, b))
                    for (d in e) f.push(e[d])
        }
        b = this.Nd(f, a);
        f.length = 0;
        return b
    };
    l.Cm = function(a, c) {
        if (!a) return !1;
        f.length = 0;
        if (this.qd) {
            var b, d;
            d = this.yg();
            for (b in d) b = parseInt(b), d = this.V(b), d.y === c && f.push(b)
        } else {
            var e;
            for (b = 0; b <= this.jb; b++)
                if (e = this.Be(b, c))
                    for (d in e) f.push(e[d])
        }
        b = this.Nd(f, a);
        f.length = 0;
        return b
    };
    l.Dm = function(a, c) {
        if (!a) return !1;
        f.length = 0;
        if (this.qd) {
            var b, d;
            d = this.yg();
            for (b in d) b = parseInt(b), d = this.V(b), d.z === c && f.push(b)
        } else {
            var e;
            for (e = 0; e <= this.kb; e++)
                for (d = 0; d <= this.jb; d++) b = this.ub(d, e, c), null != b && f.push(b)
        }
        b = this.Nd(f, a);
        f.length = 0;
        return b
    };
    l.Em = function(a, c, b, d, e) {
        if (!a) return !1;
        var l = Math.min(c, b);
        c = Math.max(c, b);
        b = Math.min(d, e);
        d = Math.max(d, e);
        var g, k;
        for (f.length = 0; b <= d; b++)
            for (e = l; e <= c; e++)
                if (k = this.Be(e, b))
                    for (g in k) f.push(k[g]);
        a = this.Nd(f, a);
        f.length = 0;
        return a
    };
    l.rk = function(a, c, b, d) {
        if (!b || null == a) return !1;
        var f = this.lc().ik();
        a = a.uid;
        var e = [],
            l;
        if (-1 == c)
            for (c = 0; c < f; c++) l = this.Xq(a, c, d), null != l && e.push(l);
        else 0 <= c && c < f && (l = this.Xq(a, c, d), null != l && e.push(this.Xq(a, c, d)));
        return this.dq(b, e)
    };
    l.pk = function(a, c) {
        if (!a || !c) return !1;
        var b = c.da().cc();
        return this.dq(a, b)
    };
    l.Am = function(a, c) {
        if (a) {
            var b = this.V(c);
            if (b) return this.Gi(a, b.x, b.y);
            var d;
            try {
                d = JSON.parse(c)
            } catch (f) {
                d = null
            }
            return d ? this.dq(a, d) : !1
        }
    };
    l.ja = function() {
        var a = this.lc();
        return {
            luid: null != a ? a.uid : -1,
            mx: this.jb,
            my: this.kb,
            b: this.W.ja(),
            iswrap: this.Yg
        }
    };
    l.ua = function(a) {
        this.jo = a.luid;
        this.jb = a.mx;
        this.kb = a.my;
        this.W.ua(a.b);
        this.Yg = a.iswrap
    };
    l.bd = function() {
        -1 === this.jo ? this.qb = null : this.qb = this.e.nc(this.jo);
        this.jo = -1
    };
    a.k = new e;
    e.prototype.Ei = function(a, c, b) {
        return this.Ei(a, c, b)
    };
    e.prototype.ju = function(a, c) {
        this.wF(a, c);
        return !1
    };
    e.prototype.zu = function(a, c) {
        return this.zu(a, c)
    };
    e.prototype.rA = function(a) {
        f.length = 0;
        f.push(this.Pw);
        a = this.Nd(f, a);
        f.length = 0;
        return a
    };
    e.prototype.Gi = function(a, c, b) {
        return this.Gi(a, c, b)
    };
    e.prototype.pk = function(a, c) {
        return this.pk(a, c)
    };
    e.prototype.Am = function(a, c) {
        return this.Am(a, c)
    };
    e.prototype.qk = function(a, c, b, d) {
        return this.qk(a, c, b, d)
    };
    e.prototype.rk = function(a, c, b) {
        return a ? this.rk(a.kf(), c, b) : !1
    };
    e.prototype.zm = function(a) {
        return this.zm(a)
    };
    e.prototype.Bm = function(a, c) {
        return this.Bm(a, c)
    };
    e.prototype.Cm = function(a, c) {
        return this.Cm(a, c)
    };
    e.prototype.Dm = function(a, c) {
        return this.Dm(a, c)
    };
    e.prototype.Em = function(a, c, b, d, f) {
        return this.Em(a, c, b, d, f)
    };
    a.B = new d;
    d.prototype.Gm = function(a, c) {
        this.Gm(a - 1, c - 1)
    };
    d.prototype.Iz = function(a) {
        if (a) {
            a = a.da().cc();
            var c, b = a.length;
            for (c = 0; c < b; c++) this.Zc(a[c].uid), this.e.Ce(a[c])
        }
    };
    d.prototype.xg = function(a, c, b, d) {
        null != a && (a = "object" === typeof a ? a.kf() : a, this.xg(a, c, b, d))
    };
    d.prototype.Gz = function(a, c, b, d) {
        this.om(a, c, b, 0, d)
    };
    d.prototype.om = function(a, c, b, d, f) {
        this.om(a, c, b, d, f)
    };
    d.prototype.Zc = function(a) {
        if (a)
            if ("object" === typeof a) {
                a = a.da().cc();
                var c, b = a.length;
                for (c = 0; c < b; c++) this.Zc(a[c].uid)
            } else this.Zc(a)
    };
    d.prototype.kk = function(a, c) {
        var b = g(a),
            d = g(c);
        if (null != b && null != d) {
            var f = this.V(b),
                d = this.V(d);
            null != f && null != d && this.kk(b, d.x, d.y, f.z)
        }
    };
    d.prototype.Om = function(a, c) {
        this.Om(a, c)
    };
    d.prototype.Gi = function(a, c, b) {
        this.Gi(a, c, b)
    };
    d.prototype.pk = function(a, c) {
        this.pk(a, c)
    };
    d.prototype.Am = function(a, c) {
        this.Am(a, c)
    };
    d.prototype.qk = function(a, c, b, d) {
        this.qk(a, c, b, d)
    };
    d.prototype.Eu = function(a) {
        this.Eu(a - 1)
    };
    d.prototype.Du = function(a) {
        this.Du(a - 1)
    };
    d.prototype.rk = function(a, c, b) {
        if (!a) return !1;
        this.rk(a.kf(), c, b)
    };
    d.prototype.zm = function(a) {
        this.zm(a)
    };
    d.prototype.Bm = function(a, c) {
        this.Bm(a, c)
    };
    d.prototype.Cm = function(a, c) {
        this.Cm(a, c)
    };
    d.prototype.Dm = function(a, c) {
        this.Dm(a, c)
    };
    d.prototype.Em = function(a, c, b, d, f) {
        this.Em(a, c, b, d, f)
    };
    a.M = new b;
    b.prototype.xh = function(a, c, b, d) {
        a.P(this.lc().xh(c, b, d))
    };
    b.prototype.yh = function(a, c, b, d) {
        a.P(this.lc().yh(c, b, d))
    };
    b.prototype.mk = function(a, c, b) {
        a.Z(this.lc().mk(c, b))
    };
    b.prototype.nk = function(a, c, b) {
        a.Z(this.lc().nk(c, b))
    };
    b.prototype.uz = function(a) {
        a.Z(this.jb + 1)
    };
    b.prototype.sz = function(a) {
        a.Z(this.kb + 1)
    }
})();
(function() {
    if (null == window.zc) {
        var k = function() {
                this.ub = {};
                this.V = {};
                this.sh = this.rh = this.kb = this.jb = null
            },
            g = k.prototype;
        g.Ze = function() {
            this.ub = {};
            window.Fa.jw(this.V);
            this.sh = this.rh = this.kb = this.jb = null
        };
        g.yg = function() {
            return this.V
        };
        g.Xt = function(d, b, a, e) {
            if (2 == arguments.length) {
                var f = b;
                b = f.x;
                a = f.y;
                e = f.z
            }
            this.ub.hasOwnProperty(b) || (this.ub[b] = {});
            f = this.ub[b];
            f.hasOwnProperty(a) || (f[a] = {});
            f[a][e] = d;
            this.V[d] = window.Fa.Ni(b, a, e);
            this.sh = this.rh = this.kb = this.jb = null
        };
        g.Vp = function(d, b, a) {
            d = this.ub[d];
            if (null != d) {
                d = d[b];
                if (null == a) return d;
                if (null != d) return d[a]
            }
            return null
        };
        g.kB = function(d, b, a) {
            var l, f;
            if (1 === arguments.length) {
                l = d;
                f = this.V[l];
                if (!f) return;
                d = f.x;
                b = f.y;
                a = f.z
            } else if (3 === arguments.length) {
                l = this.Vp(d, b, a);
                if (null == l) return;
                f = this.V[l]
            } else return;
            if (this.ub.hasOwnProperty(d)) {
                var g = this.ub[d];
                if (g.hasOwnProperty(b)) {
                    var k = g[b];
                    k.hasOwnProperty(a) && (delete k[a], e(k) && delete g[b], e(g) && delete this.ub[d], delete this.V[l], window.Fa.aj(f), this.sh = this.rh = this.kb = this.jb = null)
                }
            }
        };
        var e = function(d) {
            for (var b in d) return !1;
            return !0
        };
        g.hm = function(d) {
            this.Ze();
            var b, a;
            for (b in d) a = d[b], this.Xt(parseInt(b), a.x, a.y, a.z)
        };
        g.Fa = function() {
            if (null === this.jb) {
                var d, b;
                for (d in this.V)
                    if (b = this.V[d], null === this.jb || this.jb < b.x) this.jb = b.x
            }
            return this.jb
        };
        g.Cb = function() {
            if (null === this.kb) {
                var d, b;
                for (d in this.V)
                    if (b = this.V[d], null === this.kb || this.kb < b.y) this.kb = b.y
            }
            return this.kb
        };
        g.zc = function() {
            if (null === this.rh) {
                var d, b;
                for (d in this.V)
                    if (b = this.V[d], null === this.rh || this.rh > b.x) this.rh = b.x
            }
            return this.rh
        };
        g.Pe = function() {
            if (null === this.sh) {
                var d, b;
                for (d in this.V)
                    if (b = this.V[d], null === this.sh || this.sh > b.y) this.sh = b.y
            }
            return this.sh
        };
        g.ja = function() {
            var d, b = {},
                a;
            for (d in this.V) b[d] = {}, a = this.V[d], b[d].x = a.x, b[d].y = a.y, b[d].z = a.z;
            return {
                xyz2uid: this.ub,
                uid2xyz: b
            }
        };
        g.ua = function(d) {
            this.ub = d.xyz2uid;
            window.Fa.jw(this.V);
            var b;
            d = d.uid2xyz;
            var a;
            for (b in d) a = d[b], this.V[b] = window.Fa.Ni(a.x, a.y, a.z)
        };
        window.zc = k
    }
})();
null == window.Pe && (window.Pe = function(k, g, e, d, b, a) {
    if (g && k && (g = this.e.Rq(k, g, e, d))) {
        this.e.Wd++;
        b && b(g);
        this.e.trigger(Object.getPrototypeOf(k.G).k.zh, g);
        if (g.cd)
            for (b = 0, e = g.siblings.length; b < e; b++) d = g.siblings[b], this.e.trigger(Object.getPrototypeOf(d.type.G).k.zh, d);
        this.e.Wd--;
        if (!0 !== a && (k = k.da(), k.qa = !1, k.n.length = 1, k.n[0] = g, g.cd))
            for (b = 0, e = g.siblings.length; b < e; b++) d = g.siblings[b], k = d.type.da(), k.qa = !1, k.n.length = 1, k.n[0] = d;
        return g
    }
});
null == window.Cb && (window.Cb = function(k, g, e) {
    var d = g.da();
    d.n.length = 0;
    d.qa = !1;
    var b = g.ca,
        a, l, f;
    b && (a = g.yj, l = a.length);
    var m, q = k.length;
    for (f = 0; f < q; f++)
        if (m = k[f], null != m) {
            var c = this.e.nc(m);
            if (null != c && (null == e || e(m))) {
                var h = c.type.name;
                if (b)
                    for (m = 0; m < l; m++) {
                        if (h == a[m].name) {
                            d.n.push(c);
                            break
                        }
                    } else h == g.name && d.n.push(c)
            }
        }
    g.Dd();
    return 0 < d.n.length
});
(function() {
    if (null == window.Fa) {
        var k = function() {
                this.hb = []
            },
            g = k.prototype;
        g.Ni = function(e, d, b) {
            var a = 0 < this.hb.length ? this.hb.pop() : {};
            a.x = e;
            a.y = d;
            a.z = b;
            return a
        };
        g.aj = function(e) {
            this.hb.push(e)
        };
        g.jw = function(e) {
            for (var d in e) this.hb.push(e[d]), delete e[d]
        };
        g.Fa = function(e) {
            var d, b;
            d = 0;
            for (b = e.length; d < b; d++) this.aj(e[d]);
            e.length = 0
        };
        window.Fa = new k
    }
})();

function Mc(k) {
    this.e = k
}
(function() {
    function k(a) {
        this.content = [];
        this.ri = a
    }

    function g(a, c) {
        this.parent = [];
        this.init(a, c)
    }

    function e(a, c) {
        var b = a.Px,
            d = c.Px;
        return b > d ? 1 : b < d ? -1 : 0
    }

    function d() {
        this.hb = []
    }

    function b(a) {
        null == a ? a = null : "object" === typeof a && (a = a.kf(), a = null != a ? a.uid : null);
        return a
    }

    function a(a) {
        return 0 > a ? -a : a
    }

    function l() {}

    function f() {}

    function m() {}
    var q = Mc.prototype;
    q.R = function(a) {
        this.G = a;
        this.e = a.e
    };
    q.R.prototype.J = function() {};
    q.I = function(a) {
        this.type = a;
        this.e = a.e
    };
    var c = q.I.prototype,
        h = {};
    c.J = function() {
        this.ud = this.A[0];
        this.UE = 1 === this.A[1];
        this.XE = 1 === this.A[2];
        this.LG = this.A[3];
        this.W = null;
        this.Gf = -1;
        this.group = null;
        this.Sf = -1;
        this.Cc = null;
        this.Dc = -1;
        this.oq = null;
        this.pq = 0;
        this.Yu = null;
        this.$e = [];
        this.Ap = {};
        this.Wi = this.An = this.zn = this.yn = this.br = -1;
        this.un = null;
        this.wn = this.vn = this.Hk = -1
    };
    c.Va = function() {
        if (null != this.W) return this.W;
        var a = this.e.types,
            c, b;
        for (c in a)
            if (b = a[c].n[0], Ic && b instanceof Ic.prototype.I) return this.W = b;
        return null
    };
    c.jk = function() {
        if (null != this.group) return this.group;
        var a = this.e.types,
            c, b;
        for (c in a)
            if (b = a[c].n[0], Jc && b instanceof Jc.prototype.I) return this.group = b;
        return null
    };
    c.Bf = function(a, c, b) {
        return this.Va().Bf(a, c, b)
    };
    c.ub = function(a, c, b) {
        return this.Va().ub(a, c, b)
    };
    c.V = function(a) {
        return this.Va().V(a)
    };
    c.As = function(a, c) {
        return this.Va().As(a, c)
    };
    c.dF = function(a, c, b, d) {
        return this.Va().lc().dA(b, d, a, c)
    };
    c.tx = function(a, c) {
        return this.Va().lc().xh(a, c, 0)
    };
    c.ux = function(a, c) {
        return this.Va().lc().yh(a, c, 0)
    };
    c.Mv = function(a) {
        this.Yu ? (this.un = a, this.pq = -1, this.e.trigger(Mc.prototype.k.ku, this), this.un = null, a = this.pq) : a = this.oq;
        return a
    };
    c.bC = function(a) {
        if (this.$e.length > a) this.$e.length = a;
        else if (this.$e.length < a)
            for (var c = this.$e.length; c < a; c++) this.$e.push({
                x: 0,
                y: 0
            })
    };
    c.mF = function(a, c) {
        var b = this.Va();
        this.bC(b.lc().ik());
        var d, f = this.$e.length;
        for (d = 0; d < f; d++) this.$e[d].x = b.Fe(a, c, d), this.$e[d].y = b.Ge(a, c, d);
        if (this.XE) {
            b = this.$e;
            d = this.Cc;
            var f = b.length,
                e, h;
            if (0 != f)
                for (; --f;) e = null == d ? Math.random() : d.random(), e = Math.floor(e * (f + 1)), h = b[f], b[f] = b[e], b[e] = h
        }
        return this.$e
    };
    c.jB = function(a) {
        return Math.floor(this.Cu() * (a - 0) + 0)
    };
    c.Cu = function() {
        return null == this.Cc ? Math.random() : this.Cc.random()
    };
    c.Ou = function(a, c) {
        var b = this.V(a),
            d = this.V(c);
        return this.Va().lc().Uu(b, d)
    };
    c.FC = function(a) {
        this.oq = a;
        this.Yu = "string" == typeof a
    };
    c.xG = function(a) {
        a = this.V(a);
        return null == a ? null : this.ub(a.x, a.y, 0)
    };
    c.UF = function() {
        var a = this.Ap,
            c;
        for (c in a) delete a[c];
        this.Wi = -1
    };
    c.vw = function(a) {
        a = this.xG(a);
        if (null != a) {
            this.yn = a;
            var c = this.V(a);
            this.zn = c.x;
            this.An = c.y
        } else this.An = this.zn = this.yn = -1;
        return a
    };
    c.Fa = function(a, c, b) {
        a = this.vw(a);
        if (null == a) return [];
        c = this.Wt(a, null, c, b, t);
        if (null == c) return [];
        c = this.kz(c);
        La(c, a);
        this.Vt();
        return c
    };
    c.uE = function(a, c, b, d, f) {
        a = this.vw(a);
        if (null == a) return [];
        b = this.Wt(a, c, b, d, 1 === f ? n : p);
        if (null == b) return [];
        1 === f && (c = this.Wi);
        c = b[c].yF(b[a]);
        this.Vt();
        return c
    };
    var p = 0,
        n = 1,
        t = 16;
    c.Wt = function(a, c, b, d, f) {
        f = f == p || f == n;
        var e = 3 == this.ud || 5 == this.ud || 6 == this.ud,
            l = f && e,
            e = f && !e,
            g = l ? 3 == this.ud ? 0 : 5 == this.ud ? 1 : 6 == this.ud ? 2 : null : null;
        this.FC(d);
        c = null != c ? this.Qp(c) : null;
        a = this.Qp(a);
        a.Tf = a.Tn(c, g);
        d = a;
        f && (d.Mg = l ? d.Tf : d.Mg || d.Tn(c, g, void 0), this.Wi = d.uid);
        for (u.push(a); 0 < u.size();) {
            var k = u.pop();
            if (k === c) break;
            k.closed = !0;
            for (var m = k.lF(), q = m.length, F = 0; F < q; ++F) {
                var t = m[F],
                    x = t.GC();
                if (!t.closed && -1 != x) {
                    var x = k.Me + x,
                        D = t.fz; - 1 != b && x > b || (!D || x < t.Me ? (t.fz = !0, t.parent.length = 0, t.parent.push(k.uid), t.Tf = t.Tf || t.Tn(c, g, a), t.Me = x, t.Yv = t.Me + t.Tf, this.Ap[t.uid] = x, f && (t.Mg = l ? t.Tf : t.Mg || t.Tn(c, g, a), t.Mg < d.Mg || t.Mg === d.Mg && t.Me < d.Me) && (d = t, this.Wi = d.uid), D ? u.VF(t) : u.push(t)) : x == t.Me && e && t.parent.push(k.uid))
                }
            }
        }
        u.zC();
        return h
    };
    var D = d.prototype;
    D.Ni = function() {
        return 0 < this.hb.length ? this.hb.pop() : null
    };
    D.aj = function(a) {
        this.hb.push(a)
    };
    var F = new d,
        x = -1;
    c.Qp = function(a) {
        x += 1;
        if (null == h[a]) {
            var c = F.Ni();
            null == c ? c = new g(this, a) : c.init(this, a);
            h[a] = c
        }
        return h[a]
    };
    c.kz = function(a) {
        var c = [],
            b, d;
        for (b in a) d = a[b], d.closed && c.push(d);
        c.sort(e);
        b = c.length;
        for (a = 0; a < b; a++) c[a] = c[a].uid;
        return c
    };
    c.Vt = function() {
        for (var a in h) F.aj(h[a]), delete h[a];
        x = -1
    };
    D = g.prototype;
    D.init = function(a, c) {
        this.Px = x;
        var b = a.V(c);
        this.G = a;
        this.uid = c;
        this.x = b.x;
        this.y = b.y;
        this.Pq = this.Nj = this.Mj = null;
        this.Mg = this.Tf = this.Me = this.Yv = 0;
        this.closed = this.fz = !1;
        this.parent.length = 0
    };
    D.Tn = function(c, b, d) {
        if (null === b) return 0;
        var f, e = this.G.dF(c.x, c.y, this.x, this.y) * this.G.LG;
        1 === b && d ? (c = c.Oi(d) - this.Oi(d), f = e + a(c)) : 2 === b ? f = e + this.G.Cu() : f = e;
        return f
    };
    D.lF = function() {
        var a = this.G.mF(this.x, this.y),
            c, b = [],
            d, f = a.length;
        for (d = 0; d < f; d++) c = a[d], c = this.G.ub(c.x, c.y, 0), null != c && b.push(this.G.Qp(c));
        return b
    };
    D.GC = function() {
        var a;
        this.G.UE ? (null == this.Pq && (this.Pq = this.G.Mv(this)), a = this.Pq) : a = this.G.Mv(this);
        return a
    };
    D.yF = function(c) {
        var b = 3 == this.G.ud || 5 == this.G.ud || 6 == this.G.ud,
            d = 0 == this.G.ud,
            f = 1 == this.G.ud,
            e = 2 == this.G.ud,
            l = 4 == this.G.ud,
            g, k = null,
            m, n, q;
        if (l) var p = c.Oi(this);
        for (var F = this, t = []; 0 < F.parent.length;)
            if (t.push(F.uid), q = F.parent.length, b) F = h[F.parent[0].toString()];
            else if (d) g = 1 === q ? 0 : this.G.jB(q), F = h[F.parent[g].toString()];
        else if (f) {
            for (n = 0; n < q; n++)
                if (m = this.G.Ou(F.uid, F.parent[n]), m != k || n == q - 1) {
                    g = n;
                    k = m;
                    break
                }
            F = h[F.parent[g].toString()]
        } else if (e) {
            for (n = 0; n < q; n++)
                if (m = this.G.Ou(F.uid, F.parent[n]), m == k || n == q - 1) {
                    g = n;
                    k = m;
                    break
                }
            F = h[F.parent[g].toString()]
        } else if (l)
            if (1 == q) n = F = h[F.parent[0].toString()], p = c.Oi(n);
            else {
                m = h[F.parent[0].toString()];
                var u, x = a(c.Oi(m) - p),
                    D;
                for (n = 1; n < q; n++) u = h[F.parent[n].toString()], D = a(c.Oi(u) - p), D < x && (m = u, x = D);
                F = m
            }
        return t.reverse()
    };
    D.Oi = function(a) {
        null == this.Mj && (this.Mj = this.G.tx(this.x, this.y));
        null == this.Nj && (this.Nj = this.G.ux(this.x, this.y));
        null == a.Mj && (a.Mj = this.G.tx(a.x, a.y));
        null == a.Nj && (a.Nj = this.G.ux(a.x, a.y));
        return Sa(this.Mj, this.Nj, a.Mj, a.Nj)
    };
    var u, D = k.prototype;
    D.zC = function() {
        this.content.length = 0
    };
    D.push = function(a) {
        this.content.push(a);
        this.tt(this.content.length - 1)
    };
    D.pop = function() {
        var a = this.content[0],
            c = this.content.pop();
        0 < this.content.length && (this.content[0] = c, this.Ev(0));
        return a
    };
    D.remove = function(a) {
        var c = this.content.indexOf(a),
            b = this.content.pop();
        c !== this.content.length - 1 && (this.content[c] = b, this.ri(b) < this.ri(a) ? this.tt(c) : this.Ev(c))
    };
    D.size = function() {
        return this.content.length
    };
    D.VF = function(a) {
        this.tt(this.content.indexOf(a))
    };
    D.tt = function(a) {
        for (var c = this.content[a]; 0 < a;) {
            var b = (a + 1 >> 1) - 1,
                d = this.content[b];
            if (this.ri(c) < this.ri(d)) this.content[b] = c, this.content[a] = d, a = b;
            else break
        }
    };
    D.Ev = function(a) {
        for (var c = this.content.length, b = this.content[a], d = this.ri(b);;) {
            var f = a + 1 << 1,
                e = f - 1,
                h = null,
                l;
            e < c && (l = this.ri(this.content[e]), l < d && (h = e));
            f < c && this.ri(this.content[f]) < (null === h ? d : l) && (h = f);
            if (null !== h) this.content[a] = this.content[h], this.content[h] = b, a = h;
            else break
        }
    };
    u = new k(function(a) {
        return a.Yv
    });
    c.ja = function() {
        return {
            pm: this.ud,
            boarduid: null != this.W ? this.W.uid : -1,
            groupuid: null != this.group ? this.group.uid : -1,
            randomuid: null != this.Cc ? this.Cc.uid : -1,
            chessuid: this.br,
            nearesttileuid: this.Wi,
            uid2cost: this.Ap,
            start: [this.yn, this.zn, this.An],
            end: [this.Hk, this.vn, this.wn]
        }
    };
    c.ua = function(a) {
        this.ud = a.pm;
        this.Gf = a.boarduid;
        this.Sf = a.groupuid;
        this.Dc = a.randomuid;
        this.br = a.chessuid;
        this.Wi = a.nearesttileuid;
        this.Ap = a.uid2cost;
        this.yn = a.start[0];
        this.zn = a.start[1];
        this.An = a.start[2];
        this.Hk = a.end[0];
        this.vn = a.end[1];
        this.wn = a.end[2]
    };
    c.bd = function() {
        -1 === this.Gf ? this.W = null : this.W = this.e.nc(this.Gf);
        this.Gf = -1; - 1 === this.Sf ? this.group = null : this.group = this.e.nc(this.Sf);
        this.Sf = -1; - 1 === this.Dc ? this.Cc = null : this.Cc = this.e.nc(this.Dc);
        this.Dc = -1
    };
    q.k = new l;
    l.prototype.ku = function(a) {
        return ob(a, this.oq)
    };
    q.B = new f;
    f.prototype.tB = function(a) {
        0 > a && -1 != a && (a = 0);
        this.pq = a
    };
    f.prototype.Pz = function(a, c, d, f, e, h) {
        this.UF();
        var l = this.jk();
        this.Va();
        l.bb(e).uh();
        a = b(a);
        c = b(c);
        null == a || null == c || -1 != d && 0 >= d || null == this.V(a) || (c = this.As(c, 0), null != c && (this.br = a, d = this.uE(a, c, d, f, h), 0 < d.length ? (l.bb(e).Km(d), this.Hk = d[d.length - 1], e = this.V(this.Hk), this.vn = e.x, this.wn = e.y) : this.wn = this.vn = this.Hk = -1))
    };
    q.M = new m;
    m.prototype.rz = function(a) {
        a.Z(-1)
    };
    m.prototype.iq = function(a) {
        var c = this.un;
        a.Z(null != c ? c.x : -1)
    };
    m.prototype.jq = function(a) {
        var c = this.un;
        a.Z(null != c ? c.y : -1)
    }
})();

function Lc(k) {
    this.e = k
}
(function() {
    function k(a, b, c, d) {
        var f;
        0 == d ? f = 1 == a && 0 == b ? 0 : 0 == a && 1 == b ? 1 : -1 == a && 0 == b ? 2 : 0 == a && -1 == b ? 3 : 1 == a && 1 == b ? 4 : -1 == a && 1 == b ? 5 : -1 == a && -1 == b ? 6 : 1 == a && -1 == b ? 7 : null : 1 == d ? f = 1 == a && 0 == b ? 0 : 0 == a && 1 == b ? 1 : -1 == a && 0 == b ? 2 : 0 == a && -1 == b ? 3 : 1 == a && 1 == b ? 4 : -1 == a && 1 == b ? 5 : -1 == a && -1 == b ? 6 : 1 == a && -1 == b ? 7 : null : 2 == d && (f = c & 1 ? 1 == a && -1 == b ? 0 : 1 == a && 1 == b ? 1 : 0 == a && 1 == b ? 2 : 0 == a && -1 == b ? 3 : 0 == a && 2 == b ? 4 : -1 == a && 0 == b ? 5 : 0 == a && -2 == b ? 6 : 1 == a && -0 == b ? 7 : null : 0 == a && -1 == b ? 0 : 0 == a && 1 == b ? 1 : -1 == a && 1 == b ? 2 : -1 == a && -1 == b ? 3 : 0 == a && 2 == b ? 4 : -1 == a && 0 == b ? 5 : 0 == a && -2 == b ? 6 : 1 == a && -0 == b ? 7 : null);
        return f
    }

    function g() {}
    var e = Lc.prototype;
    e.R = function(a) {
        this.G = a;
        this.e = a.e
    };
    e.R.prototype.J = function() {};
    e.I = function(a) {
        this.type = a;
        this.e = a.e
    };
    var d = e.I.prototype;
    d.J = function() {
        this.Lq = "LAYOUT";
        this.mode = this.A[0];
        this.Zn = 1 == this.A[5];
        this.Iu(this.A[1]);
        this.Ju(this.A[2]);
        this.Lm(this.A[3]);
        this.gq(this.A[4])
    };
    d.Iu = function(a) {
        this.Ah = a
    };
    d.Ju = function(a) {
        this.Ag = a
    };
    d.Fa = function() {
        return this.Ah
    };
    d.Cb = function() {
        return this.Ag
    };
    d.Lm = function(a) {
        this.width = a;
        this.Tk = a /
            2
    };
    d.gq = function(a) {
        this.height = a;
        this.dj = a / 2
    };
    d.xh = function(a, b) {
        var c;
        0 == this.mode ? c = a * this.width : 1 == this.mode ? c = (a - b) * this.Tk : 2 == this.mode && (c = a * this.width, b & 1 && (c += this.Tk));
        return c + this.Ah
    };
    d.yh = function(a, b) {
        var c;
        0 == this.mode ? c = b * this.height : 1 == this.mode ? c = (a + b) * this.dj : 2 == this.mode && (c = b * this.dj);
        return c + this.Ag
    };
    d.mk = function(a, b) {
        var c;
        0 == this.mode ? (a -= this.Ah, c = Math.round(a / this.width)) : 1 == this.mode ? (a -= this.Ah, b -= this.Ag, c = .5 * (Math.round(b / this.dj) + Math.round(a / this.Tk))) : 2 == this.mode && (c = Math.round((b - this.Ag) / this.dj), a = a - this.Ah, c & 1 && (a -= this.Tk), c = Math.round(a / this.width));
        return c
    };
    d.nk = function(a, b) {
        var c;
        0 == this.mode ? (b -= this.Ag, c = Math.round(b / this.height)) : 1 == this.mode ? (a -= this.Ah, b -= this.Ag, c = .5 * (Math.round(b / this.dj) - Math.round(a / this.Tk))) : 2 == this.mode && (c = Math.round((b - this.Ag) / this.dj));
        return c
    };
    var b = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1],
            [1, 1],
            [-1, 1],
            [-1, -1],
            [1, -1]
        ],
        a = [0, -1, -1, 0, 0, -1, 0, 1],
        l = [1, 0, 0, 1, 0, -1, 0, 1];
    d.Fe = function(d, f, c) {
        var e;
        0 == this.mode ? e = b[c][0] : 1 == this.mode ? e =
            b[c][0] : 2 == this.mode && (e = f & 1 ? l[c] : a[c]);
        return d + e
    };
    var f = [1, 1, -1, -1, 2, 0, -2, 0];
    d.Ge = function(a, d, c) {
        var e;
        0 == this.mode ? e = b[c][1] : 1 == this.mode ? e = b[c][1] : 2 == this.mode && (e = f[c]);
        return d + e
    };
    d.ik = function() {
        return this.Zn ? 8 : 4
    };
    d.XG = function(a, b) {
        var c = this.Uu(a, b);
        return null == c ? -1 : 4 > c ? 90 * c : 90 * (c - 4) + 45
    };
    d.Uu = function(a, b) {
        var c = b.x - a.x,
            d = b.y - a.y,
            f = Math.max(0 > c ? -c : c, 0 > d ? -d : d);
        0 != f && (c /= f, d /= f);
        return k(c, d, a.y, this.mode)
    };
    d.mA = function(a, b) {
        var c = k(b.x - a.x, b.y - a.y, a.y, this.mode);
        null != c && !this.Zn && 3 < c && (c = null);
        return c
    };
    d.zc = function(a, b, c, d) {
        var f;
        switch (this.mode) {
            case 0:
            case 1:
                switch (d) {
                    case 1:
                        f = -b;
                        break;
                    case 2:
                        f = -a;
                        break;
                    case 3:
                        f = b;
                        break;
                    default:
                        f = a
                }
        }
        return f
    };
    d.Pe = function(a, b, c, d) {
        var f;
        switch (this.mode) {
            case 0:
            case 1:
                switch (d) {
                    case 1:
                        f = a;
                        break;
                    case 2:
                        f = -b;
                        break;
                    case 3:
                        f = -a;
                        break;
                    default:
                        f = b
                }
        }
        return f
    };
    d.dA = function(a, b, c, d) {
        a = c - a;
        b = d - b;
        return (0 > a ? -a : a) + (0 > b ? -b : b)
    };
    d.hm = function(a, b, c, d) {
        return a + d
    };
    d.PG = function(a, b, c, d, f) {
        return b + f
    };
    d.SG = function(a, b, c, d) {
        var f;
        a = Sa(a, b, c, d);
        switch (this.mode) {
            case 0:
                f = a;
                break;
            case 1:
            case 2:
                f = 4.7123889804 - a
        }
        return f
    };
    d.ja = function() {
        return {
            iso: this.mode,
            w: this.width,
            h: this.height,
            ox: this.Ah,
            oy: this.Ag,
            is8d: this.Zn
        }
    };
    d.ua = function(a) {
        this.mode = a.iso;
        this.Lm(a.w);
        this.gq(a.h);
        this.Iu(a.ox);
        this.Ju(a.oy);
        this.Zn = a.is8d
    };
    e.k = new function() {};
    e.B = new function() {};
    e.M = new g;
    g.prototype.WB = function(a) {
        a.P(this.width)
    };
    g.prototype.Vz = function(a) {
        a.P(this.height)
    };
    g.prototype.mk = function(a, b, c) {
        b = this.mk(b, c);
        a.P(b)
    };
    g.prototype.nk = function(a, b, c) {
        b = this.nk(b, c);
        a.P(b)
    }
})();

function Nc(k) {
    this.e = k
}
(function() {
    function k() {}

    function g() {}
    var e = Nc.prototype;
    e.R = function(a) {
        this.G = a;
        this.e = a.e
    };
    e.R.prototype.J = function() {};
    e.I = function(a) {
        this.type = a;
        this.e = a.e
    };
    var d = e.I.prototype;
    d.J = function() {
        this.xk = null;
        this.hw = []
    };
    d.se = function() {};
    d.pw = function() {
        null === this.xk && (this.xk = window.c2_callRexFunction2 ? "c2_callRexFunction2" : window.c2_callFunction ? "c2_callFunction" : "");
        return this.xk
    };
    var b = [];
    d.Fq = function() {
        var a = this.pw();
        if ("" === a) return 0;
        var d = arguments[0],
            e, g = arguments.length;
        for (e = 1; e < g; e++) b.push(arguments[e]);
        a = window[a](d, b);
        b.length = 0;
        return a
    };
    d.Vv = function(a, b) {
        if ("" !== this.pw()) {
            var d;
            if ("string" == typeof a[0]) d = this.Fq.apply(this, a);
            else {
                var e, c = a.length;
                if (1 !== b)
                    for (e = 0; e < c; e++) d = this.Fq.apply(this, a[e]);
                else
                    for (e = c - 1; 0 <= e; e--) d = this.Fq.apply(this, a[e])
            }
            return d
        }
    };
    d.ja = function() {
        return {
            ft: this.xk,
            fq: this.hw
        }
    };
    d.ua = function(a) {
        this.xk = a.ft;
        this.hw = a.fq
    };
    e.k = new function() {};
    e.B = new k;
    k.prototype.CallFunction = function(a, b) {
        if ("" != a) {
            try {
                a = JSON.parse(a)
            } catch (d) {
                return
            }
            this.Vv(a, b)
        }
    };
    e.M = new g;
    var a = [];
    g.prototype.Kz = function(b) {
        var d, e = arguments.length;
        for (d = 1; d < e; d++) a.push(arguments[d]);
        d = JSON.stringify(a);
        a.length = 0;
        b.H(d)
    };
    g.prototype.Sp = function(a, b, d) {
        var e = null;
        if ("" == b) e = 0;
        else {
            try {
                b = JSON.parse(b)
            } catch (c) {
                e = 0
            }
            null === e && (e = this.Vv(b, d))
        }
        a.vi(e)
    }
})();

function Jc(k) {
    this.e = k
}
(function() {
    function k() {}

    function g() {}

    function e() {}
    var d = Jc.prototype;
    d.R = function(a) {
        this.G = a;
        this.e = a.e
    };
    d.R.prototype.J = function() {};
    d.I = function(a) {
        this.type = a;
        this.e = a.e
    };
    var b = d.I.prototype,
        a = [];
    b.J = function() {
        this.Lq = "INSTGROUP";
        this.Wh = {};
        this.Cc = null;
        this.Dc = -1;
        this.$u = "";
        this.av = 0;
        this.Sm = {};
        this.Mb || (this.fh = function(a) {
            return function(b) {
                a.ni(b)
            }
        }(this));
        this.e.Xm(this.fh)
    };
    b.se = function() {
        this.e.gt(this.fh)
    };
    b.ni = function(a) {
        a = a.uid;
        var b, d = this.Wh;
        for (b in d) d[b].Hi(a);
        this.cC(a)
    };
    b.ZB = function(a) {
        var b;
        "@" != a.charAt(0) ? b = -1 : (b = a.indexOf("$"), b = -1 == b ? -1 : parseInt(a.substring(1, b)));
        if (-1 != b) {
            var d = this.Sm[b];
            null == d ? (d = [a], this.Sm[b] = d) : d.push(a)
        }
    };
    b.cC = function(a) {
        var b = this.Sm[a];
        if (null != b) {
            var d = b.length,
                e;
            for (e = 0; e < d; e++) this.Up(b[e]);
            delete this.Sm[a]
        }
    };
    b.bb = function(a) {
        var b = this.Wh[a];
        null == b && (b = new window.hm, this.Wh[a] = b, this.ZB(a));
        return b
    };
    b.Uz = function(a) {
        return this.Wh.hasOwnProperty(a)
    };
    b.Up = function(a) {
        this.Uz(a) && delete this.Wh[a]
    };
    b.Cb = function() {
        var a = {},
            b, d = this.Wh;
        for (b in d) a[b] = d[b].RB();
        return JSON.stringify(a)
    };
    b.sq = function(a, b, d) {
        a != d && b != d ? (this.bb(d).Tp(this.bb(a)), a = d) : d == b && (b = a, a = d);
        return {
            a: a,
            b: b
        }
    };
    b.dv = function(a, b) {
        var d = this.e.nc(a);
        if (null == d) return null;
        if (null == b || d.type == b) return d;
        if (b.ca) {
            var e = d.type.pb,
                c = e.length,
                h;
            for (h = 0; h < c; h++)
                if (b == e[h]) return d
        }
        return null
    };
    b.Nd = function(a, b) {
        return b ? window.Cb.call(this, a, b) : !1
    };
    b.vC = function(a) {
        this.$u = a;
        this.av = 0;
        this.e.trigger(Jc.prototype.k.JA, this, a);
        return this.av
    };
    b.Xu = function(b, d, e) {
        b = this.bb(b);
        var g = b.Ba,
            c, h = g.length;
        for (c = 0; c < h; c++) a.push(g[c]);
        d = this.Nd(a, d);
        if (1 == e)
            for (c = 0; c < h; c++) b.Hi(a[c]);
        a.length = 0;
        return d
    };
    b.bv = function(b, d, e, g) {
        b = this.bb(b);
        d = b.Ba[d];
        a.push(d);
        e = this.Nd(a, e);
        1 == g && b.Hi(d);
        a.length = 0;
        return e
    };
    b.Fa = function(b, d, e, g, c) {
        b = this.bb(b);
        var h = b.Ba,
            k, n = h.length,
            t = null,
            D, F = 1 === c;
        c = -1;
        var x;
        for (k = 0; k < n; k++)
            if (D = this.vC(g), x = null === t || !F && t > D || F && t < D) t = D, c = h[k];
        a.push(c);
        d = this.Nd(a, d);
        1 == e && b.Hi(c);
        a.length = 0;
        return d
    };
    b.ja = function() {
        var a = {},
            b, d = this.Wh;
        for (b in d) a[b] = d[b].Ba;
        return {
            d: a,
            randomuid: null != this.Cc ? this.Cc.uid : -1
        }
    };
    b.ua = function(a) {
        var b = a.d,
            d;
        for (d in b) this.bb(d).Km(b[d]);
        this.Dc = a.randomuid
    };
    b.bd = function() {
        -1 === this.Dc ? this.Cc = null : this.Cc = this.e.nc(this.Dc);
        this.Dc = -1
    };
    d.k = new k;
    k.prototype.JA = function(a) {
        return this.$u === a
    };
    k.prototype.cu = function(a, b, d) {
        if (b) return this.Xu(a, b, d)
    };
    k.prototype.fu = function(a, b) {
        return this.bb(b).fu(a)
    };
    k.prototype.Ei = function(a) {
        return 0 == this.bb(a).Ba.length
    };
    k.prototype.Bu = function(a, b, d, e) {
        if (d) return this.bv(a, b, d, e)
    };
    k.prototype.gu = function(a, b) {
        var d = this.bb(b),
            e = this.bb(a);
        return d.gu(e)
    };
    d.B = new g;
    g.prototype.uh = function(a) {
        this.bb(a).uh()
    };
    g.prototype.Up = function(a) {
        this.Up(a)
    };
    g.prototype.Tp = function(a, b) {
        a != b && this.bb(b).Tp(this.bb(a))
    };
    g.prototype.mz = function(a, b) {
        if (a) {
            var d = a.da().cc(),
                e = d.length;
            if (1 == e) this.bb(b).Ai(d[0].uid);
            else {
                var c, h = [];
                h.length = d.length;
                for (c = 0; c < e; c++) h[c] = d[c].uid;
                this.bb(b).Ai(h)
            }
        }
    };
    g.prototype.Qu = function(a, b, d) {
        a = this.sq(a, b, d);
        this.bb(a.a).Qu(this.bb(a.b))
    };
    g.prototype.Zt = function(a, b, d) {
        a = this.sq(a, b, d);
        this.bb(a.a).Zt(this.bb(a.b))
    };
    g.prototype.eu = function(a, b, d) {
        a = this.sq(a, b, d);
        this.bb(a.a).eu(this.bb(a.b))
    };
    g.prototype.Mu = function(a) {
        this.bb(a).Mu(this.Cc)
    };
    g.prototype.cu = function(a, b, d) {
        b && this.Xu(a, b, d)
    };
    g.prototype.Hm = function(a) {
        this.bb(a).Ba.reverse()
    };
    g.prototype.Bu = function(a, b, d, e) {
        d && this.bv(a, b, d, e)
    };
    d.M = new e;
    e.prototype.Pu = function(a, b, d) {
        a.Z(this.bb(b).Pu(d))
    };
    e.prototype.du = function(a, b, d) {
        a.vi(this.bb(b).du(d))
    };
    e.prototype.Au = function(a, b, d) {
        a.vi(this.bb(b).Au(d))
    }
})();
null == window.Cb && (window.Cb = function(k, g, e) {
    var d = g.da();
    d.n.length = 0;
    d.qa = !1;
    var b = g.ca,
        a, l, f;
    b && (a = g.yj, l = a.length);
    var m, q = k.length;
    for (f = 0; f < q; f++)
        if (m = k[f], null != m) {
            var c = this.e.nc(m);
            if (null != c && (null == e || e(m))) {
                var h = c.type.name;
                if (b)
                    for (m = 0; m < l; m++) {
                        if (h == a[m].name) {
                            d.n.push(c);
                            break
                        }
                    } else h == g.name && d.n.push(c)
            }
        }
    g.Dd();
    return 0 < d.n.length
});
(function() {
    if (null == window.hm) {
        var k = function() {
                this.fb = {};
                this.Ba = []
            },
            g = k.prototype;
        g.uh = function() {
            for (var e in this.fb) delete this.fb[e];
            this.Ba.length = 0;
            return this
        };
        g.Tp = function(e) {
            var d, b;
            b = this.fb;
            for (d in b) delete this.fb[d];
            b = e.fb;
            for (d in b) this.fb[d] = b[d];
            Ha(this.Ba, e.Ba);
            return this
        };
        g.Km = function(e) {
            this.uh();
            this.Ai(e)
        };
        g.Ai = function(e) {
            if ("object" === typeof e) {
                var d, b, a = e.length;
                for (d = 0; d < a; d++) b = e[d], null == this.fb[b] && (this.fb[b] = !0, this.Ba.push(b))
            } else null == this.fb[e] && (this.fb[e] = !0, this.Ba.push(e))
        };
        g.hm = function(e, d) {
            if ("object" === typeof e) {
                var b, a, g = e.length;
                for (b = 0; b < g; b++) a = e[b], null == this.fb[a] ? this.fb[a] = !0 : Ca(this.Ba, this.Ba.indexOf(a));
                d ? this.Ba.unshift.apply(this.Ba, e) : this.Ba.push.apply(this.Ba, e)
            } else null == this.fb[e] ? this.fb[e] = !0 : Ca(this.Ba, this.Ba.indexOf(e)), d ? this.Ba.unshift(e) : this.Ba.push(e);
            return this
        };
        g.zc = function(e, d) {
            if ("object" === typeof e) {
                var b, a, g = e.length;
                for (b = 0; b < g; b++) a = e[b], null == this.fb[a] ? this.fb[a] = !0 : Ca(this.Ba, this.Ba.indexOf(a))
            } else null == this.fb[e] ? this.fb[e] = !0 : Ca(this.Ba, this.Ba.indexOf(e));
            b = this.Ba;
            a = d;
            g = b.length;
            a > g && (a = g);
            if ("object" != typeof e)
                if (0 == a) b.unshift(e);
                else if (a == g) b.push(e);
            else {
                var f, g = b.length;
                b.length += 1;
                for (f = g; f > a; f--) b[f] = b[f - 1];
                b[a] = e
            } else if (0 == a) b.unshift.apply(b, e);
            else if (a == g) b.push.apply(b, e);
            else {
                f = b.length - 1;
                var g = a,
                    k = e.length;
                for (b.length += k; f >= g; f--) b[f + k] = b[f];
                for (f = 0; f < k; f++) b[f + a] = e[f]
            }
            return this
        };
        g.Hi = function(e) {
            if ("object" === typeof e) {
                var d, b, a = e.length;
                for (d = 0; d < a; d++) b = e[d], null != this.fb[b] && (delete this.fb[b], Ca(this.Ba, this.Ba.indexOf(b)))
            } else null != this.fb[e] && (delete this.fb[e], Ca(this.Ba, this.Ba.indexOf(e)))
        };
        g.Pu = function(e) {
            return this.Ba.indexOf(e)
        };
        g.du = function(e) {
            e = this.Ba[e];
            null == e && (e = -1);
            return e
        };
        g.Au = function(e) {
            var d = this.Ba;
            0 > e && (e = d.length + e);
            e = d[e];
            null == e ? e = -1 : this.Hi(e);
            return e
        };
        g.Qu = function(e) {
            e = e.fb;
            for (var d in e) this.Ai(parseInt(d));
            return this
        };
        g.Zt = function(e) {
            this.Hi(e.Ba);
            return this
        };
        g.eu = function(e) {
            var d, b = this.fb,
                a = {};
            for (d in b) a[d] = !0;
            this.uh();
            b = e.fb;
            for (d in b) null != a[d] && this.Ai(parseInt(d));
            return this
        };
        g.gu = function(e) {
            e = e.fb;
            var d, b = !0;
            for (d in e)
                if (!(d in this.fb)) {
                    b = !1;
                    break
                }
            return b
        };
        g.Cb = function() {
            return this.fb
        };
        g.Fa = function() {
            return this.Ba
        };
        g.fu = function(e) {
            return null != this.fb[e]
        };
        g.RB = function() {
            return JSON.stringify(this.Ba)
        };
        g.Pe = function(e) {
            this.Km(JSON.parse(e))
        };
        g.Mu = function(e) {
            var d = this.Ba,
                b = d.length,
                a, g;
            if (0 != b)
                for (; --b;) a = null == e ? Math.random() : e.random(), a = Math.floor(a * (b + 1)), g = d[b], d[b] = d[a], d[a] = g
        };
        window.hm = k
    }
})();

function Ac(k) {
    this.e = k
}
(function() {
    function k() {
        if (0 === this.Uq.length) {
            var a = document.createElement("canvas");
            a.width = this.width;
            a.height = this.height;
            var b = a.getContext("2d");
            this.Wj ? b.drawImage(this.Ia, this.Cj, this.Dj, this.width, this.height, 0, 0, this.width, this.height) : b.drawImage(this.Ia, 0, 0, this.width, this.height);
            this.Uq = a.toDataURL("image/png")
        }
        return this.Uq
    }

    function g() {}

    function e() {}

    function d() {}
    var b = Ac.prototype;
    b.R = function(a) {
        this.G = a;
        this.e = a.e
    };
    var a = b.R.prototype;
    a.J = function() {
        if (!this.ca) {
            var a, b, d, e, f, g, l, m, q;
            this.He = [];
            this.Uk = !1;
            a = 0;
            for (b = this.Cd.length; a < b; a++) {
                f = this.Cd[a];
                l = {};
                l.name = f[0];
                l.speed = f[1];
                l.loop = f[2];
                l.ae = f[3];
                l.it = f[4];
                l.hg = f[5];
                l.Ja = f[6];
                l.frames = [];
                d = 0;
                for (e = f[7].length; d < e; d++) g = f[7][d], m = {}, m.tp = g[0], m.At = g[1], m.Cj = g[2], m.Dj = g[3], m.width = g[4], m.height = g[5], m.duration = g[6], m.nd = g[7], m.od = g[8], m.Sr = g[9], m.No = g[10], m.ay = g[11], m.Wj = 0 !== m.width, m.Uq = "", m.gJ = k, q = {
                    left: 0,
                    top: 0,
                    right: 1,
                    bottom: 1
                }, m.qt = q, m.Ua = null, (q = this.e.VD(g[0])) ? m.Ia = q : (m.Ia = new Image, m.Ia.HC = g[0], m.Ia.Nv = g[1], m.Ia.tC = null, this.e.Nt(m.Ia, g[0])), l.frames.push(m), this.He.push(m);
                this.Cd[a] = l
            }
        }
    };
    a.bz = function() {
        var a, b, d;
        a = 0;
        for (b = this.n.length; a < b; a++) d = this.n[a], d.kn = d.zb.Ua
    };
    a.Dl = function() {
        if (!this.ca) {
            var a, b, d;
            a = 0;
            for (b = this.He.length; a < b; ++a) d = this.He[a], d.Ia.tC = null, d.Ua = null;
            this.Uk = !1;
            this.bz()
        }
    };
    a.yo = function() {
        if (!this.ca && this.n.length) {
            var a, b, d;
            a = 0;
            for (b = this.He.length; a < b; ++a) d = this.He[a], d.Ua = this.e.S.tj(d.Ia, !1, this.e.rb, d.ay);
            this.bz()
        }
    };
    a.us = function() {
        if (!this.ca && !this.Uk && this.e.S) {
            var a, b, d;
            a = 0;
            for (b = this.He.length; a < b; ++a) d = this.He[a], d.Ua = this.e.S.tj(d.Ia, !1, this.e.rb, d.ay);
            this.Uk = !0
        }
    };
    a.Bp = function() {
        if (!this.ca && !this.n.length && this.Uk) {
            var a, b, d;
            a = 0;
            for (b = this.He.length; a < b; ++a) d = this.He[a], this.e.S.deleteTexture(d.Ua), d.Ua = null;
            this.Uk = !1
        }
    };
    var l = [];
    a.Ro = function(a) {
        var b, d, e;
        G(l);
        b = 0;
        for (d = this.He.length; b < d; ++b) e = this.He[b].Ia, -1 === l.indexOf(e) && (a.drawImage(e, 0, 0), l.push(e))
    };
    b.I = function(a) {
        this.type = a;
        this.e = a.e;
        a = this.type.Cd[0].frames[0].No;
        this.Mb ? this.df.Sl(a) : this.df = new ib(a)
    };
    var f = b.I.prototype;
    f.J = function() {
        this.visible = 0 === this.A[0];
        this.Tr = this.es = !1;
        this.yk = 0 !== this.A[3];
        this.nb = this.mw(this.A[1]) || this.type.Cd[0];
        this.ba = this.A[2];
        0 > this.ba && (this.ba = 0);
        this.ba >= this.nb.frames.length && (this.ba = this.nb.frames.length - 1);
        var a = this.nb.frames[this.ba];
        this.df.Sl(a.No);
        this.nd = a.nd;
        this.od = a.od;
        this.Si = this.nb.speed;
        this.Qg = this.nb.it;
        1 === this.type.Cd.length && 1 === this.type.Cd[0].frames.length || 0 === this.Si || (this.e.fm(this), this.es = !0);
        this.Mb ? this.bf.reset() : this.bf = new gb;
        this.Rf = this.bf.aa;
        this.Gh = !0;
        this.Df = 0;
        this.Fh = !0;
        this.Kq = this.sv = "";
        this.xC = 0;
        this.an = -1;
        this.type.us();
        var b, d, e, f, g, l, k, a = 0;
        for (b = this.type.Cd.length; a < b; a++)
            for (f = this.type.Cd[a], d = 0, e = f.frames.length; d < e; d++) g = f.frames[d], 0 === g.width && (g.width = g.Ia.width, g.height = g.Ia.height), g.Wj && (k = g.Ia, l = g.qt, l.left = g.Cj / k.width, l.top = g.Dj / k.height, l.right = (g.Cj + g.width) / k.width, l.bottom = (g.Dj + g.height) / k.height, 0 === g.Cj && 0 === g.Dj && g.width === k.width && g.height === k.height && (g.Wj = !1));
        this.zb =
            this.nb.frames[this.ba];
        this.kn = this.zb.Ua
    };
    f.ja = function() {
        var a = {
            a: this.nb.Ja,
            f: this.ba,
            cas: this.Si,
            fs: this.Rf,
            ar: this.Df,
            at: this.bf.aa,
            rt: this.Qg
        };
        this.Gh || (a.ap = this.Gh);
        this.Fh || (a.af = this.Fh);
        return a
    };
    f.ua = function(a) {
        var b = this.ZD(a.a);
        b && (this.nb = b);
        this.ba = a.f;
        0 > this.ba && (this.ba = 0);
        this.ba >= this.nb.frames.length && (this.ba = this.nb.frames.length - 1);
        this.Si = a.cas;
        this.Rf = a.fs;
        this.Df = a.ar;
        this.bf.reset();
        this.bf.aa = a.at;
        this.Gh = a.hasOwnProperty("ap") ? a.ap : !0;
        this.Fh = a.hasOwnProperty("af") ? a.af : !0;
        a.hasOwnProperty("rt") ? this.Qg = a.rt : this.Qg = this.nb.it;
        this.zb = this.nb.frames[this.ba];
        this.kn = this.zb.Ua;
        this.df.Sl(this.zb.No);
        this.nd = this.zb.nd;
        this.od = this.zb.od
    };
    f.zq = function(a) {
        this.ba = a ? 0 : this.nb.frames.length - 1;
        this.Gh = !1;
        this.sv = this.nb.name;
        this.Tr = !0;
        this.e.trigger(Ac.prototype.k.pA, this);
        this.e.trigger(Ac.prototype.k.iu, this);
        this.Tr = !1;
        this.Df = 0
    };
    f.Fa = function() {
        return this.bf.aa
    };
    f.Ra = function() {
        this.bf.add(this.e.Ne(this));
        this.Kq.length && this.NC();
        0 <= this.an && this.Rv();
        var a = this.bf.aa,
            b = this.nb,
            d = b.frames[this.ba],
            e = d.duration / this.Si;
        this.Gh && a >= this.Rf + e && (this.Fh ? this.ba++ : this.ba--, this.Rf += e, this.ba >= b.frames.length && (b.hg ? (this.Fh = !1, this.ba = b.frames.length - 2) : b.loop ? this.ba = this.Qg : (this.Df++, this.Df >= b.ae ? this.zq(!1) : this.ba = this.Qg)), 0 > this.ba && (b.hg ? (this.ba = 1, this.Fh = !0, b.loop || (this.Df++, this.Df >= b.ae && this.zq(!0))) : b.loop ? this.ba = this.Qg : (this.Df++, this.Df >= b.ae ? this.zq(!0) : this.ba = this.Qg)), 0 > this.ba ? this.ba = 0 : this.ba >= b.frames.length && (this.ba = b.frames.length -
            1), a > this.Rf + b.frames[this.ba].duration / this.Si && (this.Rf = a), a = b.frames[this.ba], this.Fi(d, a), this.e.xa = !0)
    };
    f.mw = function(a) {
        var b, d, e;
        b = 0;
        for (d = this.type.Cd.length; b < d; b++)
            if (e = this.type.Cd[b], ob(e.name, a)) return e;
        return null
    };
    f.ZD = function(a) {
        var b, d, e;
        b = 0;
        for (d = this.type.Cd.length; b < d; b++)
            if (e = this.type.Cd[b], e.Ja === a) return e;
        return null
    };
    f.NC = function() {
        var a = this.nb.frames[this.ba],
            b = this.mw(this.Kq);
        this.Kq = "";
        !b || ob(b.name, this.nb.name) && this.Gh || (this.nb = b, this.Si = b.speed, this.Qg = b.it, 0 > this.ba && (this.ba = 0), this.ba >= this.nb.frames.length && (this.ba = this.nb.frames.length - 1), 1 === this.xC && (this.ba = 0), this.Gh = !0, this.Rf = this.bf.aa, this.Fh = !0, this.Fi(a, this.nb.frames[this.ba]), this.e.xa = !0)
    };
    f.Rv = function() {
        var a = this.nb.frames[this.ba],
            b = this.ba;
        this.ba = qa(this.an);
        0 > this.ba && (this.ba = 0);
        this.ba >= this.nb.frames.length && (this.ba = this.nb.frames.length - 1);
        b !== this.ba && (this.Fi(a, this.nb.frames[this.ba]), this.Rf = this.bf.aa, this.e.xa = !0);
        this.an = -1
    };
    f.Fi = function(a, b) {
        var d = a.width,
            e = a.height,
            f = b.width,
            g = b.height;
        d != f && (this.width *= f / d);
        e != g && (this.height *= g / e);
        this.nd = b.nd;
        this.od = b.od;
        this.df.Sl(b.No);
        this.za();
        this.zb = b;
        this.kn = b.Ua;
        d = 0;
        for (e = this.Ca.length; d < e; d++) f = this.Ca[d], f.Kx && f.Kx(a, b);
        this.e.trigger(Ac.prototype.k.Fi, this)
    };
    f.kd = function(a) {
        a.globalAlpha = this.opacity;
        var b = this.zb,
            d = b.Wj,
            e = b.Ia,
            f = this.x,
            g = this.y,
            l = this.width,
            k = this.height;
        if (0 === this.u && 0 <= l && 0 <= k) f -= this.nd * l, g -= this.od * k, this.e.$d && (f = Math.round(f), g = Math.round(g)), d ? a.drawImage(e, b.Cj, b.Dj, b.width, b.height, f, g, l, k) : a.drawImage(e, f, g, l, k);
        else {
            this.e.$d && (f = Math.round(f), g = Math.round(g));
            a.save();
            var m = 0 < l ? 1 : -1,
                q = 0 < k ? 1 : -1;
            a.translate(f, g);
            1 === m && 1 === q || a.scale(m, q);
            a.rotate(this.u * m * q);
            f = 0 - this.nd * ma(l);
            g = 0 - this.od * ma(k);
            d ? a.drawImage(e, b.Cj, b.Dj, b.width, b.height, f, g, ma(l), ma(k)) : a.drawImage(e, f, g, ma(l), ma(k));
            a.restore()
        }
    };
    f.Vi = function(a) {
        this.wc(a)
    };
    f.wc = function(a) {
        a.Ad(this.kn);
        a.kh(this.opacity);
        var b = this.zb,
            d = this.Hf;
        if (this.e.$d) {
            var e = Math.round(this.x) - this.x,
                f = Math.round(this.y) - this.y;
            b.Wj ? a.ig(d.rc + e, d.tc + f, d.Wc + e, d.Xc + f, d.Mc + e, d.Nc + f, d.Kc + e, d.Lc + f, b.qt) : a.Oj(d.rc + e, d.tc + f, d.Wc + e, d.Xc + f, d.Mc + e, d.Nc + f, d.Kc + e, d.Lc + f)
        } else b.Wj ? a.ig(d.rc, d.tc, d.Wc, d.Xc, d.Mc, d.Nc, d.Kc, d.Lc, b.qt) : a.Oj(d.rc, d.tc, d.Wc, d.Xc, d.Mc, d.Nc, d.Kc, d.Lc)
    };
    f.cE = function(a) {
        var b = this.zb,
            d, e;
        d = 0;
        for (e = b.Sr.length; d < e; d++)
            if (ob(a, b.Sr[d][0])) return d;
        return -1
    };
    f.Mk = function(a, b) {
        var d = this.zb,
            e = d.Sr,
            f;
        ja(a) ? f = this.cE(a) : f = a - 1;
        f = qa(f);
        if (0 > f || f >= e.length) return b ? this.x : this.y;
        var g = (e[f][1] - d.nd) * this.width,
            e = e[f][2],
            e = (e - d.od) * this.height,
            d = Math.cos(this.u);
        f = Math.sin(this.u);
        var l = g * d - e * f,
            e = e * d + g * f,
            g = l + this.x,
            e = e + this.y;
        return b ? g : e
    };
    var m = new ca,
        q = !1;
    new va(0, 0, 0, 0);
    a.finish = function(a) {
        if (q) {
            if (a) {
                var b = this.e.Ib().Ab.te;
                a = null.da();
                var d = m.qh(),
                    e, f;
                if (a.qa) {
                    a.qa = !1;
                    G(a.n);
                    e = 0;
                    for (f = d.length; e < f; ++e) a.n[e] = d[e];
                    if (b)
                        for (G(a.ya), e = 0, f = null.n.length; e < f; ++e) d = null.n[e], m.contains(d) || a.ya.push(d)
                } else if (b)
                    for (b = a.n.length, e = 0, f = d.length; e < f; ++e) a.n[b + e] = d[e], La(a.ya, d[e]);
                else Ha(a.n, d);
                null.Dd()
            }
            m.clear();
            q = !1
        }
    };
    g.prototype.yz = function(a, b) {
        return mc(this.ba, a, b)
    };
    g.prototype.iu = function(a) {
        return ob(this.sv, a)
    };
    g.prototype.pA = function() {
        return !0
    };
    g.prototype.Fi = function() {
        return !0
    };
    b.k = new g;
    e.prototype.JB = function(a, b, d) {
        if (a && b && (b = this.e.Rq(a, b, this.Mk(d, !0), this.Mk(d, !1)))) {
            "undefined" !== typeof b.u && (b.u = this.u, b.za());
            this.e.Wd++;
            var e, f, g;
            this.e.trigger(Object.getPrototypeOf(a.G).k.zh, b);
            if (b.cd)
                for (e = 0, f = b.siblings.length; e < f; e++) g = b.siblings[e], this.e.trigger(Object.getPrototypeOf(g.type.G).k.zh, g);
            this.e.Wd--;
            e = this.e.aE();
            d = !1;
            if (ha(e.cb.Spawn_LastExec) || e.cb.Spawn_LastExec < this.e.Th) d = !0, e.cb.Spawn_LastExec = this.e.Th;
            if (a != this.type && (a = a.da(), a.qa = !1, d ? (G(a.n), a.n[0] = b) : a.n.push(b), b.cd))
                for (e = 0, f = b.siblings.length; e < f; e++) g = b.siblings[e], a = g.type.da(), a.qa = !1, d ? (G(a.n), a.n[0] = g) : a.n.push(g)
        }
    };
    e.prototype.sB = function(a) {
        this.an = a;
        this.es || (this.e.fm(this), this.es = !0);
        this.Tr || this.Rv()
    };
    b.B = new e;
    d.prototype.pz = function(a) {
        a.Z(this.ba)
    };
    d.prototype.qz = function(a) {
        a.Z(this.nb.frames.length)
    };
    b.M = new d
})();

function Oc(k) {
    this.e = k
}
(function() {
    function k(a, b) {
        return a.length ? a.pop() : new b
    }

    function g(a, b, c) {
        if (c) {
            var d;
            c = 0;
            for (d = b.length; c < d; c++) a.length < f && a.push(b[c]);
            G(b)
        } else
            for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (a.length < f && a.push(b[d]), delete b[d])
    }

    function e(a, b, c) {
        var d = a.hb;
        c = c.replace(/\s\s*$/, "");
        b >= d.length && d.push(k(m, Object));
        b = d[b];
        b.text = c;
        b.width = a.Ds(c);
        a.pg = na(a.pg, b.width)
    }

    function d() {}

    function b() {}
    var a = Oc.prototype;
    a.J = function() {};
    a.R = function(a) {
        this.G = a;
        this.e = a.e
    };
    var l = a.R.prototype;
    l.J = function() {
        this.ca || (this.Ia = new Image, this.e.Nt(this.Ia, this.tp), this.Ua = null)
    };
    l.Dl = function() {
        this.ca || (this.Ua = null)
    };
    l.yo = function() {
        if (!this.ca && this.n.length) {
            this.Ua || (this.Ua = this.e.S.tj(this.Ia, !1, this.e.rb, this.am));
            var a, b;
            a = 0;
            for (b = this.n.length; a < b; a++) this.n[a].Ua = this.Ua
        }
    };
    l.Bp = function() {
        this.ca || this.n.length || !this.Ua || (this.e.S.deleteTexture(this.Ua), this.Ua = null)
    };
    l.Ro = function(a) {
        a.drawImage(this.Ia, 0, 0)
    };
    a.I = function(a) {
        this.type = a;
        this.e = a.e
    };
    l = a.I.prototype;
    l.se = function() {
        g(m, this.hb, !0);
        g(q, this.cn, !1);
        g(c, this.dn, !1);
        bb(this.Lg)
    };
    l.J = function() {
        this.Ia = this.type.Ia;
        this.bn = this.A[0];
        this.Jg = this.A[1];
        this.characterSet = this.A[2];
        this.text = this.A[3];
        this.Kg = this.A[4];
        this.visible = 0 === this.A[5];
        this.Uf = this.A[6] / 2;
        this.sg = this.A[7] / 2;
        this.nm = 0 === this.A[9];
        this.Qi = this.A[10];
        this.lineHeight = this.A[11];
        this.yf = this.pg = 0;
        this.Mb ? (G(this.hb), bb(this.cn), bb(this.dn), bb(this.Lg)) : (this.hb = [], this.cn = {}, this.dn = {}, this.Lg = {});
        this.de = !0;
        this.hi = this.width;
        this.e.S && (this.type.Ua || (this.type.Ua = this.e.S.tj(this.type.Ia, !1, this.e.rb, this.type.am)), this.Ua = this.type.Ua);
        this.KB()
    };
    l.ja = function() {
        var a = {
                t: this.text,
                csc: this.Kg,
                csp: this.Qi,
                lh: this.lineHeight,
                tw: this.pg,
                th: this.yf,
                lrt: this.gi,
                ha: this.Uf,
                va: this.sg,
                cw: {}
            },
            b;
        for (b in this.Lg) a.cw[b] = this.Lg[b];
        return a
    };
    l.ua = function(a) {
        this.text = a.t;
        this.Kg = a.csc;
        this.Qi = a.csp;
        this.lineHeight = a.lh;
        this.pg = a.tw;
        this.yf = a.th;
        this.gi = a.lrt;
        a.hasOwnProperty("ha") && (this.Uf = a.ha);
        a.hasOwnProperty("va") && (this.sg = a.va);
        for (var b in a.cw) this.Lg[b] = a.cw[b];
        this.de = !0;
        this.hi = this.width
    };
    var f = 1E3,
        m = [],
        q = [],
        c = [];
    l.KB = function() {
        for (var a = this.Ia, b = a.width, d = a.height, a = this.bn, e = this.Jg, f = a / b, h = e / d, g = this.characterSet, b = Math.floor(b / a), d = Math.floor(d / e), l = 0; l < g.length && !(l >= b * d); l++) {
            var m = l % b,
                p = Math.floor(l / b),
                z = g.charAt(l);
            if (this.e.S) {
                var v = this.dn,
                    r = m * f,
                    L = p * h,
                    m = (m + 1) * f,
                    p = (p + 1) * h;
                void 0 === v[z] && (v[z] = k(c, va));
                v[z].left = r;
                v[z].top = L;
                v[z].right = m;
                v[z].bottom = p
            } else v = this.cn, m = m * a, p = p * e, r = a, L = e, void 0 === v[z] && (v[z] = k(q, Object)), v[z].x = m, v[z].y = p, v[z].gz = r, v[z].Tf = L
        }
    };
    var h = [];
    a.kq = function(a) {
        G(h);
        for (var b = "", c, d = 0; d < a.length;)
            if (c = a.charAt(d), "\n" === c) b.length && (h.push(b), b = ""), h.push("\n"), ++d;
            else if (" " === c || "\t" === c || "-" === c) {
            do b += a.charAt(d), d++; while (d < a.length && (" " === a.charAt(d) || "\t" === a.charAt(d)));
            h.push(b);
            b = ""
        } else d < a.length && (b += c, d++);
        b.length && h.push(b)
    };
    a.lq = function(a) {
        var b = a.text,
            c = a.hb;
        if (b && b.length) {
            var d = a.width;
            if (2 >= d) g(m, c, !0);
            else {
                var e = a.Kg,
                    f = a.Qi;
                if (b.length * (a.bn * e + f) - f <= d && -1 === b.indexOf("\n") && (f = a.Ds(b), f <= d)) {
                    g(m, c, !0);
                    c.push(k(m, Object));
                    c[0].text = b;
                    c[0].width = f;
                    a.pg = f;
                    a.yf = a.Jg * e + a.lineHeight;
                    return
                }
                this.mq(a);
                a.yf = c.length * (a.Jg * e + a.lineHeight)
            }
        } else g(m, c, !0)
    };
    a.mq = function(a) {
        var b = a.nm,
            c = a.text,
            d = a.hb,
            g = a.width;
        b && (this.kq(c), c = h);
        var l = "",
            k, q, p, w = 0,
            z = !1;
        for (p = 0; p < c.length; p++) "\n" === c[p] ? (!0 === z ? z = !1 : (e(a, w, l), w++), l = "") : (z = !1, k = l, l += c[p], q = a.Ds(l.replace(/\s\s*$/, "")), q > g && ("" === k ? (e(a, w, l), l = "", z = !0) : (e(a, w, k), l = c[p]), w++, b || " " !== l || (l = "")));
        l.replace(/\s\s*$/, "").length && (e(a, w, l), w++);
        for (p = w; p < d.length; p++) m.length < f && m.push(d[p]);
        d.length = w
    };
    l.Ds = function(a) {
        for (var b = this.Qi, c = a.length, d = 0, e = 0; e < c; e++) d += this.Br(a.charAt(e)) * this.Kg + b;
        return d - (0 < d ? b : 0)
    };
    l.Br = function(a) {
        var b = this.Lg;
        return void 0 !== b[a] ? b[a] : this.bn
    };
    l.gy = function() {
        if (this.de || this.width !== this.hi) this.yf = this.pg = 0, this.type.G.lq(this), this.de = !1, this.hi = this.width
    };
    l.kd = function(a) {
        var b = this.Ia;
        if ("" !== this.text && null != b && (this.gy(), !(this.height < this.Jg * this.Kg + this.lineHeight))) {
            a.globalAlpha = this.opacity;
            var b = this.x,
                c = this.y;
            this.e.$d && (b = Math.round(b), c = Math.round(c));
            var d = this.C.Na,
                e = this.C.Oa,
                f = this.C.Ta,
                h = this.C.Sa;
            a.save();
            a.translate(b, c);
            a.rotate(this.u);
            for (var g = this.u, l = this.Uf, k = this.Kg, m = this.Jg * k, q = this.lineHeight, p = this.Qi, L = this.hb, N, J = -(this.nd * this.width), S = -(this.od * this.height), S = S + this.sg * na(0, this.height - this.yf), R, O, X, E = 0; E < L.length; E++) {
                var H = L[E].text;
                N = l * na(0, this.width - L[E].width);
                R = J + N;
                S += q;
                if (0 === g && c + S + m < e) S += m;
                else {
                    for (var A = 0; A < H.length; A++) {
                        O = H.charAt(A);
                        N = this.Br(O);
                        var Q = this.cn[O];
                        if (0 === g && b + R + N * k + p < d) R += N * k + p;
                        else {
                            if (R + N * k > this.width + 1E-5) break;
                            void 0 !== Q && (O = R, X = S, 0 === g && 1 === k && (O = Math.round(O), X = Math.round(X)), a.drawImage(this.Ia, Q.x, Q.y, Q.gz, Q.Tf, O, X, Q.gz * k, Q.Tf * k));
                            R += N * k + p;
                            if (0 === g && b + R > f) break
                        }
                    }
                    S += m;
                    if (0 === g && (S + m + q > this.height || c + S > h)) break
                }
            }
            a.restore()
        }
    };
    var p = new wa;
    l.wc = function(a) {
        a.Ad(this.Ua);
        a.kh(this.opacity);
        if (this.text && (this.gy(), !(this.height < this.Jg * this.Kg + this.lineHeight))) {
            this.ib();
            var b = this.Hf,
                c = 0,
                d = 0;
            this.e.$d && (c = Math.round(this.x) -
                this.x, d = Math.round(this.y) - this.y);
            var e = this.C.Na,
                f = this.C.Oa,
                h = this.C.Ta,
                g = this.C.Sa,
                l = this.u,
                k = this.Uf,
                m = this.sg,
                q = this.Kg,
                r = this.Jg * q,
                L = this.lineHeight,
                N = this.Qi,
                J = this.hb,
                S = this.yf,
                R, O, X;
            0 !== l && (O = Math.cos(l), X = Math.sin(l));
            for (var c = b.rc + c, b = b.tc + d, E, m = m * na(0, this.height - S), H, A, S = 0; S < J.length; S++)
                if (d = J[S].text, E = R = k * na(0, this.width - J[S].width), m += L, 0 === l && b + m + r < f) m += r;
                else {
                    for (var Q = 0; Q < d.length; Q++) {
                        var U = d.charAt(Q);
                        R = this.Br(U);
                        U = this.dn[U];
                        if (0 === l && c + E + R * q + N < e) E += R * q + N;
                        else {
                            if (E + R * q > this.width + 1E-5) break;
                            if (void 0 !== U) {
                                var M = this.bn * q,
                                    K = this.Jg * q;
                                H = E;
                                A = m;
                                0 === l && 1 === q && (H = Math.round(H), A = Math.round(A));
                                p.rc = H;
                                p.tc = A;
                                p.Wc = H + M;
                                p.Xc = A;
                                p.Kc = H;
                                p.Lc = A + K;
                                p.Mc = H + M;
                                p.Nc = A + K;
                                0 !== l && (H = p, A = O, M = X, K = void 0, K = H.rc * A - H.tc * M, H.tc = H.tc * A + H.rc * M, H.rc = K, K = H.Wc * A - H.Xc * M, H.Xc = H.Xc * A + H.Wc * M, H.Wc = K, K = H.Kc * A - H.Lc * M, H.Lc = H.Lc * A + H.Kc * M, H.Kc = K, K = H.Mc * A - H.Nc * M, H.Nc = H.Nc * A + H.Mc * M, H.Mc = K);
                                p.offset(c, b);
                                a.ig(p.rc, p.tc, p.Wc, p.Xc, p.Mc, p.Nc, p.Kc, p.Lc, U)
                            }
                            E += R * q + N;
                            if (0 === l && c + E > h) break
                        }
                    }
                    m += r;
                    if (0 === l && (m + r + L > this.height || b + m > g)) break
                }
        }
    };
    a.k = new function() {};
    d.prototype.hq = function(a) {
        ia(a) && 1E9 > a && (a = Math.round(1E10 * a) / 1E10);
        a = a.toString();
        this.text !== a && (this.text = a, this.de = !0, this.e.xa = !0)
    };
    l.Fa = function(a, b) {
        var c = parseInt(b, 10);
        this.Lg[a] !== c && (this.Lg[a] = c, this.de = !0, this.e.xa = !0)
    };
    a.B = new d;
    b.prototype.Text = function(a) {
        a.H(this.text)
    };
    a.M = new b
})();

function Pc(k) {
    this.e = k
}
(function() {
    function k() {
        return m.length ? m.pop() : {}
    }

    function g(a) {
        var b, d;
        b = 0;
        for (d = a.length; b < d; b++) m.push(a[b]);
        G(a)
    }

    function e(a) {
        return a.length && " " === a.charAt(a.length - 1) ? a.substring(0, a.length - 1) : a
    }

    function d() {}

    function b() {}
    var a = Pc.prototype;
    a.J = function() {
        a.B.Lm = function(a) {
            this.width !== a && (this.width = a, this.de = !0, this.za())
        }
    };
    a.R = function(a) {
        this.G = a;
        this.e = a.e
    };
    var l = a.R.prototype;
    l.J = function() {};
    l.Dl = function() {
        if (!this.ca) {
            var a, b, d;
            a = 0;
            for (b = this.n.length; a < b; a++) d = this.n[a], d.qf = null, d.li = null, d.Jd = null
        }
    };
    a.I = function(a) {
        this.type = a;
        this.e = a.e;
        this.Mb ? G(this.hb) : this.hb = [];
        this.de = !0
    };
    l = a.I.prototype;
    l.J = function() {
        this.text = this.A[0];
        this.visible = 0 === this.A[1];
        this.font = this.A[2];
        this.color = this.A[3];
        this.Uf = this.A[4];
        this.sg = this.A[5];
        this.nm = 0 === this.A[7];
        this.hi = this.fo = this.width;
        this.eo = this.height;
        this.ts = this.A[8];
        this.In = this.Zi = "";
        this.yf = this.pg = this.Jl = 0;
        this.xF();
        this.Jd = this.li = this.qf = null;
        this.Is = !1;
        this.gi = this.e.ze;
        this.Mb ? this.Pj.set(0, 0, 1, 1) : this.Pj = new va(0, 0, 1, 1);
        this.e.S && this.e.fm(this)
    };
    l.xF = function() {
        var a = this.font.split(" "),
            b;
        for (b = 0; b < a.length; b++)
            if ("pt" === a[b].substr(a[b].length - 2, 2)) {
                this.Jl = parseInt(a[b].substr(0, a[b].length - 2));
                this.$s = Math.ceil(this.Jl / 72 * 96) + 4;
                0 < b && (this.In = a[b - 1]);
                this.Zi = a[b + 1];
                for (b += 2; b < a.length; b++) this.Zi += " " + a[b];
                break
            }
    };
    l.ja = function() {
        return {
            t: this.text,
            f: this.font,
            c: this.color,
            ha: this.Uf,
            va: this.sg,
            wr: this.nm,
            lho: this.ts,
            fn: this.Zi,
            fs: this.In,
            ps: this.Jl,
            pxh: this.$s,
            tw: this.pg,
            th: this.yf,
            lrt: this.gi
        }
    };
    l.ua = function(a) {
        this.text = a.t;
        this.font = a.f;
        this.color = a.c;
        this.Uf = a.ha;
        this.sg = a.va;
        this.nm = a.wr;
        this.ts = a.lho;
        this.Zi = a.fn;
        this.In = a.fs;
        this.Jl = a.ps;
        this.$s = a.pxh;
        this.pg = a.tw;
        this.yf = a.th;
        this.gi = a.lrt;
        this.de = !0;
        this.hi = this.fo = this.width;
        this.eo = this.height
    };
    l.Ra = function() {
        if (this.e.S && this.Jd && 300 <= this.e.ze - this.gi) {
            var a = this.C;
            this.ib();
            var b = this.lb;
            if (b.right < a.Na || b.bottom < a.Oa || b.left > a.Ta || b.top > a.Sa) this.e.S.deleteTexture(this.Jd), this.qf = this.li = this.Jd = null
        }
    };
    l.se = function() {
        this.qf = this.li = null;
        this.e.S && this.Jd && this.e.S.deleteTexture(this.Jd);
        this.Jd = null
    };
    l.Fa = function() {
        this.font = this.In + " " + this.Jl.toString() + "pt " + this.Zi;
        this.de = !0;
        this.e.xa = !0
    };
    l.kd = function(a, b) {
        a.font = this.font;
        a.textBaseline = "top";
        a.fillStyle = this.color;
        a.globalAlpha = b ? 1 : this.opacity;
        var d = 1;
        b && (d = Math.abs(this.C.md()), a.save(), a.scale(d, d));
        if (this.de || this.width !== this.hi) this.type.G.lq(this.text, this.hb, a, this.width, this.nm), this.de = !1, this.hi = this.width;
        this.ib();
        var d = b ? 0 : this.Hf.rc,
            e = b ? 0 : this.Hf.tc;
        this.e.$d && (d = d + .5 | 0, e = e + .5 | 0);
        0 === this.u || b || (a.save(), a.translate(d, e), a.rotate(this.u), e = d = 0);
        var f = e + this.height,
            g = this.$s,
            g = g + this.ts,
            l, k;
        1 === this.sg ? e += Math.max(this.height / 2 - this.hb.length * g / 2, 0) : 2 === this.sg && (e += Math.max(this.height - this.hb.length * g - 2, 0));
        for (k = 0; k < this.hb.length && !(l = d, 1 === this.Uf ? l = d + (this.width - this.hb[k].width) / 2 : 2 === this.Uf && (l = d + (this.width - this.hb[k].width)), a.fillText(this.hb[k].text, l, e), e += g, e >= f - g); k++);
        (0 !== this.u || b) && a.restore();
        this.gi = this.e.ze
    };
    l.wc = function(a) {
        if (!(1 >
                this.width || 1 > this.height)) {
            var b = this.de || this.Is;
            this.Is = !1;
            var d = this.C.md(),
                e = this.C.ac(),
                f = this.Pj,
                g = d * this.width,
                l = d * this.height,
                k = Math.ceil(g),
                m = Math.ceil(l),
                u = Math.abs(k),
                y = Math.abs(m),
                C = this.e.fa / 2,
                B = this.e.ea / 2;
            this.li || (this.qf = document.createElement("canvas"), this.qf.width = u, this.qf.height = y, this.fo = u, this.eo = y, b = !0, this.li = this.qf.getContext("2d"));
            if (u !== this.fo || y !== this.eo) this.qf.width = u, this.qf.height = y, this.Jd && (a.deleteTexture(this.Jd), this.Jd = null), b = !0;
            b && (this.li.clearRect(0, 0, u, y), this.kd(this.li, !0), this.Jd || (this.Jd = a.Qd(u, y, this.e.rb, this.e.Wg)), a.JG(this.qf, this.Jd, this.e.Wg));
            this.fo = u;
            this.eo = y;
            a.Ad(this.Jd);
            a.kh(this.opacity);
            a.ue();
            a.translate(-C, -B);
            a.ge();
            var w = this.Hf,
                b = this.C.fc(w.rc, w.tc, !0),
                u = this.C.fc(w.rc, w.tc, !1),
                y = this.C.fc(w.Wc, w.Xc, !0),
                C = this.C.fc(w.Wc, w.Xc, !1),
                B = this.C.fc(w.Mc, w.Nc, !0),
                z = this.C.fc(w.Mc, w.Nc, !1),
                v = this.C.fc(w.Kc, w.Lc, !0),
                w = this.C.fc(w.Kc, w.Lc, !1);
            if (this.e.$d || 0 === this.u && 0 === e) var r = (b + .5 | 0) - b,
                L = (u + .5 | 0) - u,
                b = b + r,
                u = u + L,
                y = y + r,
                C = C +
                L,
                B = B + r,
                z = z + L,
                v = v + r,
                w = w + L;
            0 === this.u && 0 === e ? (y = b + k, C = u, B = y, z = u + m, v = b, w = z, f.right = 1, f.bottom = 1) : (f.right = g / k, f.bottom = l / m);
            a.ig(b, u, y, C, B, z, v, w, f);
            a.ue();
            a.scale(d, d);
            a.$o(-this.C.ac());
            a.translate((this.C.Na + this.C.Ta) / -2, (this.C.Oa + this.C.Sa) / -2);
            a.ge();
            this.gi = this.e.ze
        }
    };
    var f = [];
    a.kq = function(a) {
        G(f);
        for (var b = "", d, e = 0; e < a.length;)
            if (d = a.charAt(e), "\n" === d) b.length && (f.push(b), b = ""), f.push("\n"), ++e;
            else if (" " === d || "\t" === d || "-" === d) {
            do b += a.charAt(e), e++; while (e < a.length && (" " === a.charAt(e) ||
                    "\t" === a.charAt(e)));
            f.push(b);
            b = ""
        } else e < a.length && (b += d, e++);
        b.length && f.push(b)
    };
    var m = [];
    a.lq = function(a, b, d, e, f) {
        if (a && a.length)
            if (2 >= e) g(b);
            else {
                if (100 >= a.length && -1 === a.indexOf("\n")) {
                    var l = d.measureText(a).width;
                    if (l <= e) {
                        g(b);
                        b.push(k());
                        b[0].text = a;
                        b[0].width = l;
                        return
                    }
                }
                this.mq(a, b, d, e, f)
            }
        else g(b)
    };
    a.mq = function(a, b, d, g, l) {
        l && (this.kq(a), a = f);
        var t = "",
            D, F, x, u = 0;
        for (x = 0; x < a.length; x++) "\n" === a[x] ? (u >= b.length && b.push(k()), t = e(t), F = b[u], F.text = t, F.width = d.measureText(t).width, u++, t = "") : (D = t, t += a[x], F = d.measureText(t).width, F >= g && (u >= b.length && b.push(k()), D = e(D), F = b[u], F.text = D, F.width = d.measureText(D).width, u++, t = a[x], l || " " !== t || (t = "")));
        t.length && (u >= b.length && b.push(k()), t = e(t), F = b[u], F.text = t, F.width = d.measureText(t).width, u++);
        for (x = u; x < b.length; x++) m.push(b[x]);
        b.length = u
    };
    a.k = new function() {};
    d.prototype.hq = function(a) {
        ia(a) && 1E9 > a && (a = Math.round(1E10 * a) / 1E10);
        a = a.toString();
        this.text !== a && (this.text = a, this.de = !0, this.e.xa = !0)
    };
    d.prototype.vB = function(a) {
        a = "rgb(" + ya(a).toString() +
            "," + za(a).toString() + "," + Aa(a).toString() + ")";
        a !== this.color && (this.color = a, this.Is = !0, this.e.xa = !0)
    };
    a.B = new d;
    b.prototype.Text = function(a) {
        a.H(this.text)
    };
    a.M = new b
})();

function Qc(k) {
    this.e = k
}
(function() {
    function k(a) {
        m = a.x;
        q = a.y;
        c = a.z
    }

    function g(a, b, c, d) {
        var f;
        f = h.length ? h.pop() : new e;
        f.init(a, b, c, d);
        return f
    }

    function e() {
        this.Xl = this.id = this.y = this.x = this.pp = this.op = this.qs = this.time = this.zt = 0;
        this.gm = this.xp = !1
    }

    function d() {}

    function b() {}
    var a = Qc.prototype;
    a.R = function(a) {
        this.G = a;
        this.e = a.e
    };
    a.R.prototype.J = function() {};
    a.I = function(a) {
        this.type = a;
        this.e = a.e;
        this.touches = [];
        this.Fs = !1
    };
    var l = a.I.prototype,
        f = {
            left: 0,
            top: 0
        };
    l.Kk = function(a) {
        var b, c;
        b = 0;
        for (c = this.touches.length; b < c; b++)
            if (this.touches[b].id === a) return b;
        return -1
    };
    var m = 0,
        q = 0,
        c = 0,
        h = [];
    e.prototype.init = function(a, b, c, d) {
        var e = cb();
        this.zt = this.qs = this.time = e;
        this.op = a;
        this.pp = b;
        this.x = a;
        this.y = b;
        this.pressure = this.height = this.width = 0;
        this.id = c;
        this.Xl = d;
        this.gm = this.xp = !1
    };
    e.prototype.update = function(a, b, c, d, e, f) {
        this.qs = this.time;
        this.time = a;
        this.x = b;
        this.y = c;
        this.width = d;
        this.height = e;
        this.pressure = f;
        !this.gm && 15 <= Ya(this.op, this.pp, this.x, this.y) && (this.gm = !0)
    };
    e.prototype.fF = function(a, b) {
        !this.xp && 500 <= cb() - this.zt && !this.gm && 15 > Ya(this.op, this.pp, this.x, this.y) && (this.xp = !0, a.zf = this.Xl, a.ak = this.id, a.bj = b, a.e.trigger(Qc.prototype.k.FA, a), a.Kf = this.x, a.Lf = this.y, a.e.trigger(Qc.prototype.k.GA, a), a.bj = 0)
    };
    var p = -1E3,
        n = -1E3,
        t = -1E4;
    e.prototype.vx = function(a, b) {
        if (!this.xp) {
            var c = cb();
            333 >= c - this.zt && !this.gm && 15 > Ya(this.op, this.pp, this.x, this.y) && (a.zf = this.Xl, a.ak = this.id, a.bj = b, 666 >= c - t && 25 > Ya(p, n, this.x, this.y) ? (a.e.trigger(Qc.prototype.k.zA, a), a.Kf = this.x, a.Lf = this.y, a.e.trigger(Qc.prototype.k.AA, a), n = p = -1E3, t = -1E4) : (a.e.trigger(Qc.prototype.k.ZA, a), a.Kf = this.x, a.Lf = this.y, a.e.trigger(Qc.prototype.k.xu, a), p = this.x, n = this.y, t = c), a.bj = 0)
        }
    };
    l.J = function() {
        this.QE = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
        this.bj = this.ak = this.zf = this.Lf = this.Kf = this.jv = this.hv = this.gv = this.jC = this.iC = this.hC = this.Eo = this.Do = this.Co = 0;
        this.HG = 0 !== this.A[0];
        var a = 0 < this.e.ld ? document : this.e.canvas,
            b = document;
        this.e.Sc ? b = a = window.Canvas : this.e.Vd && (b = a = window);
        var c = this;
        "undefined" !== typeof PointerEvent ? (a.addEventListener("pointerdown", function(a) {
            c.Jx(a)
        }, !1), a.addEventListener("pointermove", function(a) {
            c.Ix(a)
        }, !1), b.addEventListener("pointerup", function(a) {
            c.xo(a, !1)
        }, !1), b.addEventListener("pointercancel", function(a) {
            c.xo(a, !0)
        }, !1), this.e.canvas && (this.e.canvas.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1), document.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1), this.e.canvas.addEventListener("gesturehold", function(a) {
            a.preventDefault()
        }, !1), document.addEventListener("gesturehold", function(a) {
            a.preventDefault()
        }, !1))) : window.navigator.msPointerEnabled ? (a.addEventListener("MSPointerDown", function(a) {
            c.Jx(a)
        }, !1), a.addEventListener("MSPointerMove", function(a) {
            c.Ix(a)
        }, !1), b.addEventListener("MSPointerUp", function(a) {
            c.xo(a, !1)
        }, !1), b.addEventListener("MSPointerCancel", function(a) {
            c.xo(a, !0)
        }, !1), this.e.canvas && (this.e.canvas.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1), document.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1))) : (a.addEventListener("touchstart", function(a) {
            c.Mx(a)
        }, !1), a.addEventListener("touchmove", function(a) {
            c.Lx(a)
        }, !1), b.addEventListener("touchend", function(a) {
            c.Qs(a, !1)
        }, !1), b.addEventListener("touchcancel", function(a) {
            c.Qs(a, !0)
        }, !1));
        if (this.QE) {
            var d = function(a) {
                    a = a.reading;
                    c.gv = a.accelerationX;
                    c.hv = a.accelerationY;
                    c.jv = a.accelerationZ
                },
                e = function(a) {
                    a = a.reading;
                    c.Co = a.yawDegrees;
                    c.Do = a.pitchDegrees;
                    c.Eo = a.rollDegrees
                },
                f = Windows.Devices.Sensors.Accelerometer.getDefault();
            f && (f.reportInterval = Math.max(f.minimumReportInterval, 16), f.addEventListener("readingchanged", d));
            var g = Windows.Devices.Sensors.Inclinometer.getDefault();
            g && (g.reportInterval = Math.max(g.minimumReportInterval, 16), g.addEventListener("readingchanged", e));
            document.addEventListener("visibilitychange", function() {
                document.hidden || document.msHidden ? (f && f.removeEventListener("readingchanged", d), g && g.removeEventListener("readingchanged", e)) : (f && f.addEventListener("readingchanged", d), g && g.addEventListener("readingchanged", e))
            }, !1)
        } else window.addEventListener("deviceorientation", function(a) {
            c.Co = a.alpha || 0;
            c.Do = a.beta || 0;
            c.Eo = a.gamma || 0
        }, !1), window.addEventListener("devicemotion", function(a) {
            a.accelerationIncludingGravity && (c.hC = a.accelerationIncludingGravity.x || 0, c.iC = a.accelerationIncludingGravity.y || 0, c.jC = a.accelerationIncludingGravity.z || 0);
            a.acceleration && (c.gv = a.acceleration.x || 0, c.hv = a.acceleration.y || 0, c.jv = a.acceleration.z || 0)
        }, !1);
        this.HG && !this.e.Tb && (jQuery(document).mousemove(function(a) {
            c.qF(a)
        }), jQuery(document).mousedown(function(a) {
            c.pF(a)
        }), jQuery(document).mouseup(function(a) {
            c.rF(a)
        }));
        !this.e.mj && this.e.Fd && navigator.accelerometer && navigator.accelerometer.watchAcceleration && navigator.accelerometer.watchAcceleration(k, null, {
            frequency: 40
        });
        this.e.wG(this)
    };
    l.Ix = function(a) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && a.preventDefault();
            var b = this.Kk(a.pointerId),
                c = cb();
            if (0 <= b) {
                var d = this.e.Tb ? f : jQuery(this.e.canvas).offset(),
                    b = this.touches[b];
                2 > c - b.time || b.update(c, a.pageX - d.left, a.pageY - d.top, a.width || 0, a.height || 0, a.pressure || 0)
            }
        }
    };
    l.Jx = function(a) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && ub(a) && a.preventDefault();
            var b = this.e.Tb ? f : jQuery(this.e.canvas).offset(),
                c = a.pageX - b.left,
                b = a.pageY - b.top;
            cb();
            this.zf = this.touches.length;
            this.ak = a.pointerId;
            this.touches.push(g(c, b, a.pointerId, this.zf));
            this.e.nf = !0;
            this.e.trigger(Qc.prototype.k.tu, this);
            this.e.trigger(Qc.prototype.k.yu, this);
            this.Kf = c;
            this.Lf = b;
            this.e.trigger(Qc.prototype.k.aq, this);
            this.e.nf = !1
        }
    };
    l.xo = function(a, b) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && ub(a) && a.preventDefault();
            var c = this.Kk(a.pointerId);
            this.zf = 0 <= c ? this.touches[c].Xl : -1;
            this.ak = 0 <= c ? this.touches[c].id : -1;
            this.e.nf = !0;
            this.e.trigger(Qc.prototype.k.su, this);
            this.e.trigger(Qc.prototype.k.$p, this);
            0 <= c && (b || this.touches[c].vx(this, c), 100 > h.length && h.push(this.touches[c]), this.touches.splice(c, 1));
            this.e.nf = !1
        }
    };
    l.Lx = function(a) {
        a.preventDefault && a.preventDefault();
        var b = cb(),
            c, d, e, g;
        c = 0;
        for (d = a.changedTouches.length; c < d; c++)
            if (e = a.changedTouches[c], g = this.Kk(e.identifier), 0 <= g) {
                var h = this.e.Tb ? f : jQuery(this.e.canvas).offset();
                g = this.touches[g];
                2 > b - g.time || g.update(b, e.pageX - h.left, e.pageY - h.top, 2 * (e.tJ || e.zJ || e.mJ || e.pJ || 0), 2 * (e.uJ || e.AJ || e.nJ || e.qJ || 0), e.fJ || e.yJ || e.lJ || e.oJ || 0)
            }
    };
    l.Mx = function(a) {
        a.preventDefault && ub(a) && a.preventDefault();
        var b = this.e.Tb ? f : jQuery(this.e.canvas).offset();
        cb();
        this.e.nf = !0;
        var c, d, e, h;
        c = 0;
        for (d = a.changedTouches.length; c < d; c++)
            if (e = a.changedTouches[c], h = this.Kk(e.identifier), -1 === h) {
                h = e.pageX - b.left;
                var l = e.pageY - b.top;
                this.zf = this.touches.length;
                this.ak = e.identifier;
                this.touches.push(g(h, l, e.identifier, this.zf));
                this.e.trigger(Qc.prototype.k.tu, this);
                this.e.trigger(Qc.prototype.k.yu, this);
                this.Kf = h;
                this.Lf = l;
                this.e.trigger(Qc.prototype.k.aq, this)
            }
        this.e.nf = !1
    };
    l.Qs = function(a, b) {
        a.preventDefault && ub(a) && a.preventDefault();
        this.e.nf = !0;
        var c, d, e;
        c = 0;
        for (d = a.changedTouches.length; c < d; c++) e = a.changedTouches[c], e = this.Kk(e.identifier), 0 <= e && (this.zf = this.touches[e].Xl, this.ak = this.touches[e].id, this.e.trigger(Qc.prototype.k.su, this), this.e.trigger(Qc.prototype.k.$p, this), b || this.touches[e].vx(this, e), 100 > h.length && h.push(this.touches[e]), this.touches.splice(e, 1));
        this.e.nf = !1
    };
    l.Fa = function() {
        return this.e.Fd && 0 === this.Co && 0 !== c ? 90 * c : this.Co
    };
    l.Cb = function() {
        return this.e.Fd && 0 === this.Do && 0 !== q ? 90 * q : this.Do
    };
    l.zc = function() {
        return this.e.Fd && 0 === this.Eo && 0 !== m ? 90 * m : this.Eo
    };
    l.pF = function(a) {
        this.Mx({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        });
        this.Fs = !0
    };
    l.qF = function(a) {
        this.Fs && this.Lx({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        })
    };
    l.rF = function(a) {
        a.preventDefault && this.e.yw && !this.e.Wg && a.preventDefault();
        this.e.yw = !0;
        this.Qs({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        });
        this.Fs = !1
    };
    l.em = function() {
        var a, b, c, d = cb();
        a = 0;
        for (b = this.touches.length; a < b; ++a) c = this.touches[a], c.time <= d - 50 && (c.qs = d), c.fF(this, a)
    };
    d.prototype.yu = function() {
        return !0
    };
    d.prototype.$p = function() {
        return !0
    };
    d.prototype.aq = function(a) {
        return a ? this.e.rp(a, this.Kf, this.Lf) : !1
    };
    var D = [];
    d.prototype.aA = function(a) {
        if (!a) return !1;
        var b = a.da(),
            c = b.cc(),
            d, e, f, g, h, l;
        f = 0;
        for (g = c.length; f < g; f++) {
            var k = c[f];
            k.ib();
            h = 0;
            for (l = this.touches.length; h < l; h++)
                if (e = this.touches[h], d = k.C.uc(e.x, e.y, !0), e = k.C.uc(e.x, e.y, !1), k.Pd(d, e)) {
                    D.push(k);
                    break
                }
        }
        return D.length ? (b.qa = !1, Ha(b.n, D), a.Dd(), G(D), !0) : !1
    };
    d.prototype.tu = function(a) {
        a = Math.floor(a);
        return a === this.zf
    };
    d.prototype.su = function(a) {
        a = Math.floor(a);
        return a === this.zf
    };
    d.prototype.FA = function() {
        return !0
    };
    d.prototype.ZA = function() {
        return !0
    };
    d.prototype.zA = function() {
        return !0
    };
    d.prototype.GA = function(a) {
        return a ? this.e.rp(a, this.Kf, this.Lf) : !1
    };
    d.prototype.xu = function(a) {
        return a ? this.e.rp(a, this.Kf, this.Lf) : !1
    };
    d.prototype.AA = function(a) {
        return a ? this.e.rp(a, this.Kf, this.Lf) : !1
    };
    a.k = new d;
    b.prototype.XB = function(a, b) {
        var c = this.bj;
        if (0 > c || c >= this.touches.length) a.P(0);
        else {
            var d, e, f, g, h;
            ha(b) ? (d = this.e.Nk(0), e = d.scale, f = d.wg, g = d.bg, h = d.u, d.scale = 1, d.wg = 1, d.bg = 1, d.u = 0, a.P(d.uc(this.touches[c].x, this.touches[c].y, !0)), d.scale = e, d.wg = f, d.bg = g, d.u = h) : (d = ia(b) ? this.e.Nk(b) : this.e.Hr(b)) ? a.P(d.uc(this.touches[c].x, this.touches[c].y, !0)) : a.P(0)
        }
    };
    b.prototype.YB = function(a, b) {
        var c = this.bj;
        if (0 > c || c >= this.touches.length) a.P(0);
        else {
            var d, e, f, g, h;
            ha(b) ? (d = this.e.Nk(0), e = d.scale, f = d.wg, g = d.dg, h = d.u, d.scale = 1, d.wg = 1, d.dg = 1, d.u = 0, a.P(d.uc(this.touches[c].x, this.touches[c].y, !1)), d.scale = e, d.wg = f, d.dg = g, d.u = h) : (d = ia(b) ? this.e.Nk(b) : this.e.Hr(b)) ? a.P(d.uc(this.touches[c].x, this.touches[c].y, !1)) : a.P(0)
        }
    };
    a.M = new b
})();

function Rc(k) {
    this.e = k
}
(function() {
    function k() {}

    function g() {}

    function e() {}
    var d = Rc.prototype;
    d.R = function(a) {
        this.G = a;
        this.e = a.e
    };
    d.R.prototype.J = function() {};
    d.I = function(a) {
        this.type = a;
        this.e = a.e
    };
    var b = d.I.prototype,
        a = "",
        l = "undefined" !== typeof window.is_scirra_arcade;
    l && (a = "arcade" + window.scirra_arcade_id);
    var f = !1;
    try {
        localStorage.getItem("test"), f = !0
    } catch (m) {
        f = !1
    }
    b.J = function() {
        f || fa("[Construct 2] Webstorage plugin: local storage is not supported on this platform.")
    };
    k.prototype.hA = function(b) {
        return f ? null != localStorage.getItem(a + b) : !1
    };
    k.prototype.VA = function() {
        return !0
    };
    k.prototype.zz = function(b, c, d) {
        if (!f) return !1;
        b = localStorage.getItem(a + b) || "";
        return mc(parseFloat(b), c, d)
    };
    d.k = new k;
    g.prototype.OB = function(b, c) {
        if (f) try {
            localStorage.setItem(a + b, c)
        } catch (d) {
            this.e.trigger(Rc.prototype.k.VA, this)
        }
    };
    d.B = new g;
    e.prototype.iA = function(b, c) {
        f ? b.H(localStorage.getItem(a + c) || "") : b.H("")
    };
    e.prototype.Rp = function(b) {
        if (f) {
            var c = {},
                d, e, g;
            d = 0;
            for (e = localStorage.length; d < e; d++) g = localStorage.key(d), l ? g.substr(0, a.length) === a && (c[g.substr(a.length)] = localStorage.getItem(g)) : c[g] = localStorage.getItem(g);
            b.H(JSON.stringify({
                c2dictionary: !0,
                data: c
            }))
        } else b.H("")
    };
    d.M = new e
})();

function Sc(k) {
    this.e = k
}
(function() {
    var k = Sc.prototype;
    k.R = function(e) {
        this.behavior = e;
        this.e = e.e
    };
    k.R.prototype.J = function() {};
    k.I = function(e, d) {
        this.type = e;
        this.behavior = e.behavior;
        this.j = d;
        this.e = e.e
    };
    var g = k.I.prototype;
    g.J = function() {
        this.qv = this.A[0];
        this.rv = this.A[1];
        this.oC = this.A[2];
        this.nC = this.A[3];
        this.j.ib();
        this.Qt = this.j.lb.left;
        this.Tt = this.j.lb.top;
        this.Rt = this.e.Kb - this.j.lb.left;
        this.St = this.e.Jb - this.j.lb.top;
        this.dt = this.e.Kb - this.j.lb.right;
        this.Bq = this.e.Jb - this.j.lb.bottom;
        this.enabled = 0 !== this.A[4]
    };
    g.ja = function() {
        return {
            xleft: this.Qt,
            ytop: this.Tt,
            xright: this.Rt,
            ybottom: this.St,
            rdiff: this.dt,
            bdiff: this.Bq,
            enabled: this.enabled
        }
    };
    g.ua = function(e) {
        this.Qt = e.xleft;
        this.Tt = e.ytop;
        this.Rt = e.xright;
        this.St = e.ybottom;
        this.dt = e.rdiff;
        this.Bq = e.bdiff;
        this.enabled = e.enabled
    };
    g.Ra = function() {
        if (this.enabled) {
            var e, d = this.j.C,
                b = this.j,
                a = this.j.lb;
            0 === this.qv ? (b.ib(), e = d.Na + this.Qt - a.left, 0 !== e && (b.x += e, b.za())) : 1 === this.qv && (b.ib(), e = d.Ta - this.Rt - a.left, 0 !== e && (b.x += e, b.za()));
            0 === this.rv ? (b.ib(), e = d.Oa +
                this.Tt - a.top, 0 !== e && (b.y += e, b.za())) : 1 === this.rv && (b.ib(), e = d.Sa - this.St - a.top, 0 !== e && (b.y += e, b.za()));
            1 === this.oC && (b.ib(), e = d.Ta - this.dt - a.right, 0 !== e && (b.width += e, 0 > b.width && (b.width = 0), b.za()));
            1 === this.nC && (b.ib(), e = d.Sa - this.Bq - a.bottom, 0 !== e && (b.height += e, 0 > b.height && (b.height = 0), b.za()))
        }
    };
    k.k = new function() {};
    k.B = new function() {};
    k.M = new function() {}
})();

function Tc(k) {
    this.e = k
}
(function() {
    function k() {}

    function g() {}
    var e = Tc.prototype;
    e.R = function(b) {
        this.behavior = b;
        this.e = b.e
    };
    e.R.prototype.J = function() {};
    e.I = function(b, a) {
        this.type = b;
        this.behavior = b.behavior;
        this.j = a;
        this.e = b.e
    };
    var d = e.I.prototype;
    d.J = function() {
        this.vq = 1 === this.A[0];
        this.By = !1;
        this.Ik = this.A[1];
        this.lm = this.A[2];
        this.Bn = this.A[3];
        this.LC = this.A[4];
        this.kc = this.vq ? 0 : 3;
        this.Mb ? this.we.reset() : this.we = new gb;
        this.eh = this.j.opacity ? this.j.opacity : 1;
        this.vq && (0 === this.Ik ? (this.kc = 1, 0 === this.lm && (this.kc = 2)) : (this.j.opacity = 0, this.e.xa = !0))
    };
    d.ja = function() {
        return {
            fit: this.Ik,
            wt: this.lm,
            fot: this.Bn,
            s: this.kc,
            st: this.we.aa,
            mo: this.eh
        }
    };
    d.ua = function(b) {
        this.Ik = b.fit;
        this.lm = b.wt;
        this.Bn = b.fot;
        this.kc = b.s;
        this.we.reset();
        this.we.aa = b.st;
        this.eh = b.mo
    };
    d.Ra = function() {
        this.we.add(this.e.Ne(this.j));
        0 === this.kc && (this.j.opacity = this.we.aa / this.Ik * this.eh, this.e.xa = !0, this.j.opacity >= this.eh && (this.j.opacity = this.eh, this.kc = 1, this.we.reset(), this.e.trigger(Tc.prototype.k.BA, this.j)));
        1 === this.kc && this.we.aa >= this.lm && (this.kc = 2, this.we.reset(), this.e.trigger(Tc.prototype.k.bq, this.j));
        2 === this.kc && 0 !== this.Bn && (this.j.opacity = this.eh - this.we.aa / this.Bn * this.eh, this.e.xa = !0, 0 > this.j.opacity && (this.j.opacity = 0, this.kc = 3, this.we.reset(), this.e.trigger(Tc.prototype.k.CA, this.j), 1 === this.LC && this.e.Ce(this.j)))
    };
    d.cD = function() {
        this.kc = 0;
        this.we.reset();
        0 === this.Ik ? (this.kc = 1, 0 === this.lm && (this.kc = 2)) : (this.j.opacity = 0, this.e.xa = !0)
    };
    k.prototype.CA = function() {
        return !0
    };
    k.prototype.BA = function() {
        return !0
    };
    k.prototype.bq = function() {
        return !0
    };
    e.k = new k;
    g.prototype.LB = function() {
        this.vq || this.By || (this.eh = this.j.opacity ? this.j.opacity : 1, this.By = !0);
        3 === this.kc && this.cD()
    };
    e.B = new g;
    e.M = new function() {}
})();

function Uc(k) {
    this.e = k
}
(function() {
    function k() {}
    var g = Uc.prototype;
    g.R = function(d) {
        this.behavior = d;
        this.e = d.e
    };
    g.R.prototype.J = function() {};
    g.I = function(d, b) {
        this.type = d;
        this.behavior = d.behavior;
        this.j = b;
        this.e = d.e
    };
    var e = g.I.prototype;
    e.J = function() {
        this.qg = this.ng = this.kc = this.Ns = this.Ss = 0
    };
    e.ja = function() {
        return {
            ontime: this.Ss,
            offtime: this.Ns,
            stage: this.kc,
            stagetimeleft: this.ng,
            timeleft: this.qg
        }
    };
    e.ua = function(d) {
        this.Ss = d.ontime;
        this.Ns = d.offtime;
        this.kc = d.stage;
        this.ng = d.stagetimeleft;
        this.qg = d.timeleft;
        null === this.qg && (this.qg = Infinity)
    };
    e.Ra = function() {
        if (!(0 >= this.qg)) {
            var d = this.e.Ne(this.j);
            this.qg -= d;
            0 >= this.qg ? (this.qg = 0, this.j.visible = !0, this.e.xa = !0, this.e.trigger(Uc.prototype.k.DA, this.j)) : (this.ng -= d, 0 >= this.ng && (0 === this.kc ? (this.j.visible = !1, this.kc = 1, this.ng += this.Ns) : (this.j.visible = !0, this.kc = 0, this.ng += this.Ss), this.e.xa = !0))
        }
    };
    k.prototype.DA = function() {
        return !0
    };
    g.k = new k;
    g.B = new function() {};
    g.M = new function() {}
})();

function Vc(k) {
    this.e = k
}
(function() {
    function k() {}
    var g = Vc.prototype;
    g.R = function(d) {
        this.behavior = d;
        this.e = d.e
    };
    g.R.prototype.J = function() {};
    g.I = function(d, b) {
        this.type = d;
        this.behavior = d.behavior;
        this.j = b;
        this.e = d.e
    };
    var e = g.I.prototype;
    e.J = function() {
        this.jc = null;
        this.Lo = -1;
        this.mode = this.oj = this.up = this.Bj = this.gg = this.Hl = 0;
        var d = this;
        this.Mb || (this.fh = function(b) {
            d.ni(b)
        });
        this.e.Xm(this.fh)
    };
    e.ja = function() {
        return {
            uid: this.jc ? this.jc.uid : -1,
            pa: this.Hl,
            pd: this.gg,
            msa: this.Bj,
            tsa: this.up,
            lka: this.oj,
            m: this.mode
        }
    };
    e.ua = function(d) {
        this.Lo = d.uid;
        this.Hl = d.pa;
        this.gg = d.pd;
        this.Bj = d.msa;
        this.up = d.tsa;
        this.oj = d.lka;
        this.mode = d.m
    };
    e.bd = function() {
        -1 === this.Lo ? this.jc = null : this.jc = this.e.nc(this.Lo);
        this.Lo = -1
    };
    e.ni = function(d) {
        this.jc == d && (this.jc = null)
    };
    e.se = function() {
        this.jc = null;
        this.e.gt(this.fh)
    };
    e.Ra = function() {};
    e.em = function() {
        if (this.jc) {
            this.oj !== this.j.u && (this.Bj = Pa(this.Bj + (this.j.u - this.oj)));
            var d = this.j.x,
                b = this.j.y;
            if (3 === this.mode || 4 === this.mode) {
                var a = Ya(this.j.x, this.j.y, this.jc.x, this.jc.y);
                if (a > this.gg || 4 === this.mode && a < this.gg) b = Sa(this.jc.x, this.jc.y, this.j.x, this.j.y), d = this.jc.x + Math.cos(b) * this.gg, b = this.jc.y + Math.sin(b) * this.gg
            } else d = this.jc.x + Math.cos(this.jc.u + this.Hl) * this.gg, b = this.jc.y + Math.sin(this.jc.u + this.Hl) * this.gg;
            this.oj = a = Pa(this.Bj + (this.jc.u - this.up));
            0 !== this.mode && 1 !== this.mode && 3 !== this.mode && 4 !== this.mode || this.j.x === d && this.j.y === b || (this.j.x = d, this.j.y = b, this.j.za());
            0 !== this.mode && 2 !== this.mode || this.j.u === a || (this.j.u = a, this.j.za())
        }
    };
    g.k = new function() {};
    k.prototype.gB = function(d, b) {
        if (d) {
            var a = d.kf(this.j);
            a && (this.jc = a, this.Hl = Sa(a.x, a.y, this.j.x, this.j.y) - a.u, this.gg = Ya(a.x, a.y, this.j.x, this.j.y), this.oj = this.Bj = this.j.u, this.up = a.u, this.mode = b)
        }
    };
    g.B = new k;
    g.M = new function() {}
})();

function Wc(k) {
    this.e = k
}
(function() {
    function k() {}

    function g() {}
    var e = Wc.prototype;
    e.R = function(b) {
        this.behavior = b;
        this.e = b.e
    };
    var d = e.R.prototype;
    d.J = function() {
        this.Cc = this.group = null
    };
    d.jk = function() {
        if (null != this.group) return this.group;
        var b = this.e.types,
            a, d;
        for (a in b)
            if (d = b[a].n[0], Jc && d instanceof Jc.prototype.I) return this.group = d;
        return null
    };
    e.I = function(b, a) {
        this.type = b;
        this.behavior = b.behavior;
        this.j = a;
        this.e = b.e
    };
    d = e.I.prototype;
    d.J = function() {
        this.W = null;
        this.Mb || (this.ie = new Wc.Cb(this));
        this.ie.Ze(this);
        this.qe = this.bo = !1;
        this.er = this.dr = this.cr = this.kr = this.jr = this.hr = this.fr = this.Gk = -1;
        this.Yi = this.Xi = 0;
        this.ls = null;
        this.Mb || (this.Dh = {
            rx: 0,
            ry: 0,
            o: {
                x: 0,
                y: 0,
                z: 0
            }
        });
        this.Dh.rx = this.A[4];
        this.Dh.ry = this.A[5];
        this.iw = 1 == this.A[6];
        this.nD = 1 == this.A[7];
        if (this.Mb) {
            this.Wu.length = 0;
            for (var b in this.Ki) delete this.Ki[b];
            for (b in this.nq) delete this.nq[b]
        } else this.Wu = [], this.Ki = {}, this.nq = {};
        this.Dg = this.cv = null
    };
    d.Ra = function() {
        this.ie.Ra()
    };
    d.Va = function() {
        var b;
        if (null != this.W) {
            b = this.W.V(this.j.uid);
            if (null != b) return this.W;
            this.W = null
        }
        var a = this.e.types,
            d, e;
        for (d in a)
            if (e = a[d].n[0], Ic && e instanceof Ic.prototype.I && (b = e.V(this.j.uid), null != b)) {
                this.W = e;
                a = this.Wu;
                e = e.lc().ik();
                d = void 0;
                for (d = a.length = 0; d < e; d++) a.push(d);
                this.Dh.o.x = b.x;
                this.Dh.o.y = b.y;
                this.Dh.o.z = b.z;
                return this.W
            }
        return null
    };
    d.Ri = function(b) {
        null == b && (b = this.j.uid);
        var a = this.Va();
        return null != a ? a.V(b) : null
    };
    d.Fa = function(b) {
        var a = this.Va();
        return null != a ? a.dk(b) : null
    };
    d.uG = function(b, a) {
        var d = this.Ri();
        return this.Va().jz(d.x, d.y, b, a)
    };
    d.Gy = function(b, a, d, e) {
        var g = this.Ri();
        this.hr = g.x;
        this.jr = g.y;
        this.kr = g.z;
        this.cr = b;
        this.dr = a;
        this.er = d;
        this.fr = null != e ? e : -1
    };
    d.aC = function() {
        this.ls = null;
        this.e.trigger(Wc.prototype.k.EA, this.j);
        var b;
        null == this.ls ? b = null : b = this.ls ? -1 : 1;
        return b
    };
    d.vG = function(b, a, d, e) {
        this.Gy(b, a, d, e);
        this.Gk = -1;
        e = this.Ri();
        if (b === e.x && a === e.y && d === e.z) return 1;
        if (!this.W.Bf(b, a)) return null;
        this.cv = e = this.W.ub(b, a, d);
        if (this.iw) return 1;
        if (null == e) {
            e = this.aC();
            if (null != e) return e;
            b = this.W.Be(b, a);
            if (!b) return null;
            var g;
            if (0 != d) {
                if (null == b[0]) return null;
                for (g in b)
                    if (e = b[g], (d = this.W.dk(e)) && d.cb && d.cb.solidEnabled) return this.Gk = e, -1;
                return 1
            }
            return null == b[0] ? 1 : null
        }
        this.Gk = e;
        return -1
    };
    d.jF = function(b, a, d, e) {
        var g = this.vG(b, a, d, e);
        if (1 == g) {
            var k;
            if (this.iw)
                if (null != this.Dg && null == this.W.ub(b, a, this.Dg)) k = this.Dg, this.Dg = null;
                else if (null == this.cv) k = d;
            else
                for (null == this.Dg ? (this.Dg = d, k = "#" + this.j.uid.toString()) : k += "#"; null != this.W.ub(b, a, k);) k += "#";
            else k = d;
            this.kF(b, a, d, e);
            this.W.kk(this.j, b, a, k);
            this.Nx(!0)
        } else -1 == g ? this.Nx(!1) : this.bo = !1
    };
    d.kF = function(b, a, d, e) {
        var g = this.Va(),
            k = g.lc();
        this.Xi = k.xh(b, a, d);
        this.Yi = k.yh(b, a, d);
        if (this.nD)
            if (d = Wc.zc, g.Yg && null != e) {
                var c = this.Ri(),
                    h = k.Fe(c.x, c.y, e);
                e = k.Ge(c.x, c.y, e);
                if (h == b && e == a) g = new d(this.j.x, this.j.y, this.Xi, this.Yi), this.ie.Gs(g);
                else {
                    a = k.xh(h, e, 0);
                    c = k.yh(h, e, 0);
                    b = new d(this.j.x, this.j.y, a, c);
                    if (0 > h || h > g.jb) h = g.jb - h;
                    if (0 > e || e > g.kb) e = g.kb - e;
                    a = k.xh(h, e, 0);
                    c = k.yh(h, e, 0);
                    g = new d(a, c, this.Xi, this.Yi);
                    this.ie.Gs(b, g)
                }
            } else g = new d(this.j.x, this.j.y, this.Xi, this.Yi), this.ie.Gs(g)
    };
    d.Nx = function(b) {
        this.bo = b;
        this.qe = !0;
        this.e.trigger(b ? Wc.prototype.k.NA : Wc.prototype.k.OA, this.j);
        this.qe = !1
    };
    d.DC = function(b, a, d, e) {
        this.Gy(b, a, d, e);
        this.Ki.x = b;
        this.Ki.y = a;
        this.Ki.z = d;
        this.e.trigger(Wc.prototype.k.sA, this.j)
    };
    d.gC = function(b) {
        var a, d = this.nq;
        for (a in d) delete d[a];
        for (a in b) d[b[a]] = !0;
        return d
    };
    d.$B = function(b, a, d) {
        var e, g;
        null != d ? (e = this.type.jk().bb(d), e.uh()) : (g = a.da(), g.qa = !1, g.n.length = 0);
        b = this.W.Be(b.x, b.y);
        if (!b) return !1;
        var k = this.gC(b);
        b = !1;
        for (var c in k) c = parseInt(c), c !== this.j.uid && (k = this.dv(c, a), null !== k && (null != d ? e.Ai(c) : g.n.push(k), b = !0));
        return b
    };
    d.dv = function(b, a) {
        var d = this.e.nc(b);
        if (null == d) return null;
        if (null == a || d.type == a) return d;
        if (a.ca) {
            var e = d.type.pb,
                g = e.length,
                k;
            for (k = 0; k < g; k++)
                if (a == e[k]) return d
        }
        return null
    };
    d.ja = function() {
        var b = null != this.type.Cc ? this.type.Cc.uid : -1;
        return {
            mrq: this.bo,
            mt: this.ie.ja(),
            wander: this.Dh,
            z: this.Dg,
            e_buid: this.Gk,
            e_dir: this.fr,
            e_slx: this.hr,
            e_sly: this.jr,
            e_slz: this.kr,
            e_dlx: this.cr,
            e_dly: this.dr,
            e_dlz: this.er,
            e_tpx: this.Xi,
            e_tpy: this.Yi,
            ruid: b
        }
    };
    d.ua = function(b) {
        this.bo = b.mrq;
        this.ie.ua(b.mt);
        this.Dh = b.wander;
        this.Dg = b.z;
        this.Gk = b.e_buid;
        this.fr = b.e_dir;
        this.hr = b.e_slx;
        this.jr = b.e_sly;
        this.kr = b.e_slz;
        this.cr = b.e_dlx;
        this.dr = b.e_dly;
        this.er = b.e_dlz;
        this.Xi = b.e_tpx;
        this.Yi = b.e_tpy;
        this.Dc = b.ruid
    };
    d.bd = function() {
        -1 === this.Dc ? this.type.Cc = null : this.type.Cc = this.e.nc(this.Dc);
        this.Dc = -1;
        this.W = null
    };
    e.k = new k;
    k.prototype.vm = function() {
        return this.ie.qe
    };
    k.prototype.NA = function() {
        return this.qe
    };
    k.prototype.OA = function() {
        return this.qe
    };
    k.prototype.sA = function(b, a) {
        return this.$B(this.Ki, b, a)
    };
    k.prototype.EA = function() {
        return !0
    };
    e.B = new g;
    g.prototype.Jm = function(b) {
        this.ie.ad = 1 == b
    };
    g.prototype.Ii = function(b) {
        this.ie.Um(b)
    };
    g.prototype.lA = function(b) {
        if (this.ie.ad && (null == b ? b = null : "object" === typeof b && (b = b.kf(), b = null != b ? b.uid : null), null != b)) {
            var a = this.Ri(b);
            if (null != a) {
                var d = this.Ri();
                if (null != d) {
                    b = a.x;
                    var a = a.y,
                        d = d.z,
                        e = this.uG(b, a);
                    this.DC(b, a, d, e);
                    this.jF(b, a, d, e)
                }
            }
        }
    };
    g.prototype.Nm = function() {
        this.ie.ij = !1
    };
    e.M = new function() {}
})();
(function() {
    function k() {
        this.Zd = {
            max: 0,
            acc: 0,
            dec: 0
        };
        this.Te = []
    }

    function g(d, b, a, e) {
        0 < arguments.length ? this.Ze(d, b, a, e) : this.Ze(0, 0, 0, 0)
    }
    var e = g.prototype;
    e.Ze = function(d, b, a, e) {
        this.Jp = d;
        this.Mp = b;
        this.Kp = a;
        this.Np = e;
        this.u = Sa(d, b, a, e);
        this.Db = Ya(this.Jp, this.Mp, this.Kp, this.Np)
    };
    e.bu = function(d) {
        return this.Db -= d
    };
    e.ja = function() {
        return {
            x0: this.Jp,
            y0: this.Mp,
            x1: this.Kp,
            y1: this.Np,
            a: this.u,
            rd: this.Db
        }
    };
    e.ua = function(d) {
        this.Jp = d.x0;
        this.Mp = d.y0;
        this.Kp = d.x1;
        this.Np = d.y1;
        this.u = d.a;
        this.Db = d.rd
    };
    Wc.zc = g;
    e = k.prototype;
    e.Ze = function(d) {
        this.ad = d.A[0];
        this.Zd.max = d.A[1];
        this.Zd.acc = d.A[2];
        this.Zd.dec = d.A[3];
        this.VE = 1 == d.A[8];
        this.Te.length = 0;
        this.ij = !1;
        this.et = this.Db = this.mc = 0;
        this.qe = !1;
        this.j = d.j;
        this.e = d.e
    };
    e.Ra = function() {
        this.et = 0;
        this.ad && this.ij && this.move(this.e.Ne(this.j))
    };
    e.move = function(d) {
        if (0 != d) {
            var b = !1;
            0 != this.Zd.dec && (b = this.mc, b = b * b / (2 * this.Zd.dec) >= this.Db);
            b = b ? -this.Zd.dec : this.Zd.acc;
            0 != b && this.Um(this.mc + b * d);
            d = this.mc * d;
            this.Db -= d;
            var a = this.Te[0],
                e = a.bu(d),
                b = !1;
            0 >= e || 0 >= this.mc ? 1 == this.Te.length ? (b = !0, this.j.x = a.Kp, this.j.y = a.Np, this.Te.length = 0, 0 < this.mc && (this.et = -e / this.mc), this.Um(0)) : (this.Te.shift(), this.Hy(e)) : (a = a.u, this.j.x += d * Math.cos(a), this.j.y += d * Math.sin(a));
            this.j.za();
            b && (this.ij = !1, this.qe = !0, this.e.trigger(Wc.prototype.k.vm, this.j), this.qe = !1)
        }
    };
    e.Um = function(d) {
        null != d ? this.mc = d > this.Zd.max ? this.Zd.max : d : 0 == this.Zd.acc && (this.mc = this.Zd.max)
    };
    e.Gs = function() {
        this.Db = this.Te.length = 0;
        var d, b = arguments.length,
            a;
        for (d = 0; d < b; d++) a = arguments[d], this.Te.push(a), this.Db += a.Db;
        this.Um(null);
        this.ij = !0;
        this.Hy();
        this.VE && this.move(this.et)
    };
    e.Hy = function(d) {
        var b = this.Te[0],
            a = 0,
            e = 0;
        null != d && 0 != d && (a = d * Math.cos(b.u), e = d * Math.sin(b.u), b.bu(d));
        this.j.x = b.Jp + a;
        this.j.y = b.Mp + e;
        this.j.za()
    };
    e.ja = function() {
        var d, b = this.Te.length,
            a = [];
        for (d = 0; d < b; d++) a.push(this.Te[d].ja());
        return {
            en: this.ad,
            v: this.Zd,
            is_m: this.ij,
            c_spd: this.mc,
            rd: this.Db,
            seg: a
        }
    };
    e.ua = function(d) {
        this.ad = d.en;
        this.Zd = d.v;
        this.ij = d.is_m;
        this.mc = d.c_spd;
        this.Db = d.rd;
        d = d.seg;
        var b, a = d.length;
        for (b = 0; b < a; b++) {
            var e = new g;
            e.ua(d[b]);
            this.Te.push(e)
        }
    };
    Wc.Cb = k
})();

function Xc(k) {
    this.e = k
}
(function() {
    function k() {}
    var g = Xc.prototype;
    g.R = function(d) {
        this.behavior = d;
        this.e = d.e
    };
    g.R.prototype.J = function() {};
    g.I = function(d, b) {
        this.type = d;
        this.behavior = d.behavior;
        this.j = b;
        this.e = d.e
    };
    var e = g.I.prototype;
    e.J = function() {
        this.enable = 1 == this.A[0];
        this.direction = this.A[1];
        this.speed = this.A[2];
        this.Eh = this.A[3]
    };
    e.Ra = function() {
        if (this.enable) {
            var d = this.e.Ne(this.j);
            this.speed += this.Eh * d;
            0 != this.speed && (d = this.speed * d, 0 == this.direction && (d = -d), this.j.u += Ra(d), this.j.za())
        }
    };
    e.ja = function() {
        return {
            en: this.enable,
            d: this.direction,
            s: this.speed,
            a: this.Eh
        }
    };
    e.ua = function(d) {
        this.enable = d.en;
        this.direction = d.d;
        this.speed = d.s;
        this.Eh = d.a
    };
    g.k = new function() {};
    g.B = new k;
    k.prototype.Jm = function(d) {
        this.enable = 1 == d
    };
    g.M = new function() {}
})();

function Yc(k) {
    this.e = k
}
(function() {
    function k() {}

    function g() {}
    var e = Yc.prototype;
    e.R = function(b) {
        this.behavior = b;
        this.e = b.e
    };
    e.R.prototype.J = function() {};
    e.I = function(b, a) {
        this.type = b;
        this.behavior = b.behavior;
        this.j = a;
        this.e = b.e
    };
    var d = e.I.prototype;
    d.J = function() {
        this.ad = 1 == this.A[0];
        this.move = {
            max: this.A[1],
            acc: this.A[2],
            dec: this.A[3]
        };
        this.target = {
            a: 0,
            cw: !0
        };
        this.el = !1;
        this.Db = this.mc = 0;
        this.qe = !1
    };
    d.Ra = function() {
        if (this.ad && this.el) {
            var b = this.e.Ne(this.j);
            if (0 != b) {
                var a = !1;
                0 != this.move.dec && (a = this.mc, a = a * a / (2 * this.move.dec) >= this.Db);
                a = a ? -this.move.dec : this.move.acc;
                0 != a && this.Ii(this.mc + a * b);
                b = this.mc * b;
                this.Db -= b;
                a = !1;
                0 >= this.Db || 0 >= this.mc ? (this.el = !1, this.j.u = Ra(this.target.a), this.Ii(0), a = !0) : this.j.u = this.target.cw ? this.j.u + Ra(b) : this.j.u - Ra(b);
                this.j.za();
                a && (this.qe = !0, this.e.trigger(Yc.prototype.k.vm, this.j), this.qe = !1)
            }
        }
    };
    d.em = function() {};
    d.Ii = function(b) {
        null != b ? this.mc = b > this.move.max ? this.move.max : b : 0 == this.move.acc && (this.mc = this.move.max)
    };
    d.Lu = function(b, a) {
        this.el = !0;
        var d = this.j.u;
        this.target.cw = 2 == a ? Va(b, d) : 1 == a;
        d = 2 == a ? Ta(d, b) : 1 == a ? b - d : d - b;
        this.Db = Qa(d);
        this.target.a = Qa(b);
        this.Ii(null)
    };
    d.ja = function() {
        return {
            en: this.ad,
            v: this.move,
            t: this.target,
            ir: this.el,
            cs: this.mc,
            rd: this.Db
        }
    };
    d.ua = function(b) {
        this.ad = b.en;
        this.move = b.v;
        this.target = b.t;
        this.el = b.ir;
        this.mc = b.cs;
        this.Db = b.rd
    };
    e.k = new k;
    k.prototype.vm = function() {
        return this.qe
    };
    e.B = new g;
    g.prototype.Jm = function(b) {
        this.ad = 1 == b
    };
    g.prototype.Lu = function(b, a) {
        this.Lu(Ra(b), a)
    };
    g.prototype.Ii = function(b) {
        this.Ii(b)
    };
    e.M = new function() {}
})();

function Zc(k) {
    this.e = k
}
(function() {
    function k() {}

    function g() {}

    function e() {}
    var d = Zc.prototype;
    d.R = function(a) {
        this.behavior = a;
        this.e = a.e
    };
    d.R.prototype.J = function() {};
    d.I = function(a, b) {
        this.type = a;
        this.behavior = a.behavior;
        this.j = b;
        this.e = a.e
    };
    var b = d.I.prototype;
    b.J = function() {
        this.W = null
    };
    b.Ra = function() {};
    b.Va = function() {
        var a;
        if (null != this.W) {
            a = this.W.V(this.j.uid);
            if (null != a) return this.W;
            this.W = null
        }
        var b = this.e.types,
            d, e;
        for (d in b)
            if (e = b[d].n[0], null != e && "BOARD" == e.Lq && (a = e.V(this.j.uid), null != a)) return this.W = e;
        return null
    };
    b.bd = function() {
        this.W = null
    };
    d.k = new k;
    k.prototype.Az = function(a, b) {
        var d = this.Va();
        if (null == d) return !1;
        d = d.V(this.j.uid);
        return mc(d.x, a, b)
    };
    k.prototype.Bz = function(a, b) {
        var d = this.Va();
        if (null == d) return !1;
        d = d.V(this.j.uid);
        return mc(d.y, a, b)
    };
    k.prototype.ju = function(a) {
        if (a) {
            var b = this.j.type,
                d = this.Va();
            if (null == d) return !1;
            d.bJ(b, a);
            return !1
        }
    };
    k.prototype.oA = function() {
        var a = this.Va();
        if (null == a) return !1;
        var b = a.V(this.j.uid);
        return 0 !== b.z ? !1 : 1 == a.NG(b.x, b.y)
    };
    d.B = new g;
    g.prototype.xg = function(a, b, d, e) {
        if (a) {
            var g = this.j.uid;
            null != this.W && this.W.Zc(g);
            this.W = a.n[0];
            this.W.xg(this.j, b, d, e);
            null == this.W.V(g) && (this.W = null)
        }
    };
    g.prototype.Zc = function() {
        var a = this.Va();
        null != a && a.Zc(this.j.uid)
    };
    g.prototype.kk = function(a) {
        if (a) {
            var b = this.Va();
            if (null != b) {
                var d;
                null == a ? a = null : "object" === typeof a && (a = a.kf(), a = null != a ? a.uid : null);
                d = a;
                if (null != d) {
                    a = this.j.uid;
                    var e = b.V(a);
                    d = b.V(d);
                    null != d && b.kk(a, d.x, d.y, e.z)
                }
            }
        }
    };
    g.prototype.Om = function(a) {
        var b = this.Va();
        null != b && b.Om(this.j.uid, a)
    };
    d.M = new e;
    e.prototype.cA = function(a) {
        var b, d = this.Va();
        null == d ? b = -1 : b = d.V(this.j.uid).x;
        a.Z(b)
    };
    e.prototype.eA = function(a) {
        var b, d = this.Va();
        null == d ? b = -1 : b = d.V(this.j.uid).y;
        a.Z(b)
    }
})();

function $c(k) {
    this.e = k
}
(function() {
    function k() {}

    function g() {}

    function e() {}
    var d = $c.prototype;
    d.R = function(a) {
        this.behavior = a;
        this.e = a.e
    };
    d.R.prototype.J = function() {};
    d.I = function(a, b) {
        this.type = a;
        this.behavior = a.behavior;
        this.j = b;
        this.e = a.e;
        this.O = 0
    };
    var b = d.I.prototype,
        a = 2 * Math.PI,
        l = Math.PI / 2,
        f = 3 * Math.PI / 2;
    b.J = function() {
        this.K = 1 === this.A[0];
        this.zj = this.A[1];
        this.Pt = this.A[2];
        this.eg = this.A[3];
        this.eg += Math.random() * this.A[4];
        0 === this.eg ? this.O = 0 : (this.O = this.A[5] / this.eg * a, this.O += Math.random() * this.A[6] / this.eg * a);
        this.dd = this.A[7];
        this.dd += Math.random() * this.A[8];
        this.vf = this.$h = this.Ka = 0;
        this.init()
    };
    b.ja = function() {
        return {
            i: this.O,
            a: this.K,
            mv: this.zj,
            w: this.Pt,
            p: this.eg,
            mag: this.dd,
            iv: this.Ka,
            iv2: this.$h,
            r: this.vf,
            lkv: this.ga,
            lkv2: this.wb
        }
    };
    b.ua = function(a) {
        this.O = a.i;
        this.K = a.a;
        this.zj = a.mv;
        this.Pt = a.w;
        this.eg = a.p;
        this.dd = a.mag;
        this.Ka = a.iv;
        this.$h = a.iv2 || 0;
        this.vf = a.r;
        this.ga = a.lkv;
        this.wb = a.lkv2 || 0
    };
    b.init = function() {
        switch (this.zj) {
            case 0:
                this.Ka = this.j.x;
                break;
            case 1:
                this.Ka = this.j.y;
                break;
            case 2:
                this.Ka = this.j.width;
                this.vf = this.j.height / this.j.width;
                break;
            case 3:
                this.Ka = this.j.width;
                break;
            case 4:
                this.Ka = this.j.height;
                break;
            case 5:
                this.Ka = this.j.u;
                this.dd = I(this.dd);
                break;
            case 6:
                this.Ka = this.j.opacity;
                break;
            case 7:
                this.Ka = 0;
                break;
            case 8:
                this.Ka = this.j.x, this.$h = this.j.y
        }
        this.ga = this.Ka;
        this.wb = this.$h
    };
    b.Af = function(b) {
        b = b % a;
        switch (this.Pt) {
            case 0:
                return Math.sin(b);
            case 1:
                return b <= l ? b / l : b <= f ? 1 - 2 * (b - l) / Math.PI : (b - f) / l - 1;
            case 2:
                return 2 * b / a - 1;
            case 3:
                return -2 * b / a + 1;
            case 4:
                return b < Math.PI ? -1 : 1
        }
        return 0
    };
    b.Ra = function() {
        var b = this.e.Ne(this.j);
        this.K && 0 !== b && (0 === this.eg ? this.O = 0 : (this.O += b / this.eg * a, this.O = this.O % a), this.CG())
    };
    b.CG = function() {
        switch (this.zj) {
            case 0:
                this.j.x !== this.ga && (this.Ka += this.j.x - this.ga);
                this.j.x = this.Ka + this.Af(this.O) * this.dd;
                this.ga = this.j.x;
                break;
            case 1:
                this.j.y !== this.ga && (this.Ka += this.j.y - this.ga);
                this.j.y = this.Ka + this.Af(this.O) * this.dd;
                this.ga = this.j.y;
                break;
            case 2:
                this.j.width = this.Ka + this.Af(this.O) * this.dd;
                this.j.height = this.j.width * this.vf;
                break;
            case 3:
                this.j.width = this.Ka + this.Af(this.O) * this.dd;
                break;
            case 4:
                this.j.height = this.Ka + this.Af(this.O) * this.dd;
                break;
            case 5:
                this.j.u !== this.ga && (this.Ka = Pa(this.Ka + (this.j.u - this.ga)));
                this.j.u = Pa(this.Ka + this.Af(this.O) * this.dd);
                this.ga = this.j.u;
                break;
            case 6:
                this.j.opacity = this.Ka + this.Af(this.O) * this.dd / 100;
                0 > this.j.opacity ? this.j.opacity = 0 : 1 < this.j.opacity && (this.j.opacity = 1);
                break;
            case 8:
                this.j.x !== this.ga && (this.Ka += this.j.x - this.ga), this.j.y !== this.wb && (this.$h += this.j.y - this.wb), this.j.x = this.Ka + Math.cos(this.j.u) * this.Af(this.O) * this.dd, this.j.y = this.$h + Math.sin(this.j.u) * this.Af(this.O) * this.dd, this.ga = this.j.x, this.wb = this.j.y
        }
        this.j.za()
    };
    b.Kx = function(a, b) {
        switch (this.zj) {
            case 2:
                this.Ka *= b.width / a.width;
                this.vf = b.height / b.width;
                break;
            case 3:
                this.Ka *= b.width / a.width;
                break;
            case 4:
                this.Ka *= b.height / a.height
        }
    };
    k.prototype.Md = function() {
        return this.K
    };
    d.k = new k;
    g.prototype.rB = function(a) {
        this.K = 1 === a
    };
    d.B = new g;
    e.prototype.Ru = function(a) {
        a.P(this.Af(this.O) * this.dd)
    };
    d.M = new e
})();
var ad = [],
    bd = [],
    cd = [],
    dd = [],
    ed = [],
    fd = [],
    gd = [],
    hd = [],
    id = [],
    jd = [];

function nd(k) {
    return result = (k /= 1) < 1 / 2.75 ? 7.5625 * k * k + 0 : k < 2 / 2.75 ? 1 * (7.5625 * (k -= 1.5 / 2.75) * k + .75) + 0 : k < 2.5 / 2.75 ? 1 * (7.5625 * (k -= 2.25 / 2.75) * k + .9375) + 0 : 1 * (7.5625 * (k -= 2.625 / 2.75) * k + .984375) + 0
}

function od(k, g) {
    return Math.round(k / g * 1E4)
}

function pd(k, g, e, d, b) {
    var a = 0;
    switch (k) {
        case 0:
            a = 1 * g / e + 0;
            break;
        case 1:
            a = 1 * (g /= e) * g + 0;
            break;
        case 2:
            a = -1 * (g /= e) * (g - 2) + 0;
            break;
        case 3:
            a = 1 > (g /= e / 2) ? .5 * g * g + 0 : -.5 * (--g * (g - 2) - 1) + 0;
            break;
        case 4:
            a = 1 * (g /= e) * g * g + 0;
            break;
        case 5:
            a = 1 * ((g = g / e - 1) * g * g + 1) + 0;
            break;
        case 6:
            a = 1 > (g /= e / 2) ? .5 * g * g * g + 0 : .5 * ((g -= 2) * g * g + 2) + 0;
            break;
        case 7:
            a = 1 * (g /= e) * g * g * g + 0;
            break;
        case 8:
            a = -1 * ((g = g / e - 1) * g * g * g - 1) + 0;
            break;
        case 9:
            a = 1 > (g /= e / 2) ? .5 * g * g * g * g + 0 : -.5 * ((g -= 2) * g * g * g - 2) + 0;
            break;
        case 10:
            a = 1 * (g /= e) * g * g * g * g + 0;
            break;
        case 11:
            a = 1 * ((g = g / e - 1) * g * g * g * g + 1) + 0;
            break;
        case 12:
            a = 1 > (g /= e / 2) ? .5 * g * g * g * g * g + 0 : .5 * ((g -= 2) * g * g * g * g + 2) + 0;
            break;
        case 13:
            b.Kd ? a = ed[od(g, e)] : a = -(Math.sqrt(1 - g * g) - 1);
            break;
        case 14:
            b.Kd ? a = fd[od(g, e)] : a = Math.sqrt(1 - (g - 1) * (g - 1));
            break;
        case 15:
            a = b.Kd ? gd[od(g, e)] : 1 > (g /= e / 2) ? -.5 * (Math.sqrt(1 - g * g) - 1) + 0 : .5 * (Math.sqrt(1 - (g -= 2) * g) + 1) + 0;
            break;
        case 16:
            b.Kd ? a = hd[od(g, e)] : (b = b.zd, a = 1 * (g /= e) * g * ((b + 1) * g - b) + 0);
            break;
        case 17:
            b.Kd ? a = id[od(g, e)] : (b = b.zd, a = 1 * ((g = g / e - 1) * g * ((b + 1) * g + b) + 1) + 0);
            break;
        case 18:
            b.Kd ? a = jd[od(g, e)] : (b = b.zd, a = 1 > (g /= e / 2) ? .5 * g * g * (((b *= 1.525) + 1) * g - b) + 0 : .5 * ((g -= 2) * g * (((b *= 1.525) + 1) * g + b) + 2) + 0);
            break;
        case 19:
            b.Kd ? a = bd[od(g, e)] : (a = b.Mi, k = b.Fo, g /= e, 0 == k && (k = .3 * e), 0 == a || a < Math.abs(1) ? (a = 1, b = k / 4) : b = k / (2 * Math.PI) * Math.asin(1 / a), a = -(a * Math.pow(2, 10 * --g) * Math.sin(2 * (g * e - b) * Math.PI / k)) + 0);
            break;
        case 20:
            b.Kd ? a = cd[od(g, e)] : (a = b.Mi, k = b.Fo, g /= e, 0 == k && (k = .3 * e), 0 == a || a < Math.abs(1) ? (a = 1, b = k / 4) : b = k / (2 * Math.PI) * Math.asin(1 / a), a = a * Math.pow(2, -10 * g) * Math.sin(2 * (g * e - b) * Math.PI / k) + 1);
            break;
        case 21:
            b.Kd ? a = dd[od(g, e)] : (a = b.Mi, k = b.Fo, g /= e / 2, 0 == k && (k = .3 * e * 1.5), 0 == a || a < Math.abs(1) ? (a = 1, b = k / 4) : b = k / (2 * Math.PI) * Math.asin(1 / a), a = 1 > g ? -.5 * a * Math.pow(2, 10 * --g) * Math.sin(2 * (g * e - b) * Math.PI / k) + 0 : a * Math.pow(2, -10 * --g) * Math.sin(2 * (g * e - b) * Math.PI / k) * .5 + 1);
            break;
        case 22:
            a = b.Kd ? 1 - ad[od(e - g, e)] + 0 : 1 - nd(e - g / e) + 0;
            break;
        case 23:
            a = b.Kd ? ad[od(g, e)] : nd(g / e);
            break;
        case 24:
            a = b.Kd ? g < e / 2 ? .5 * (1 - ad[od(e - 2 * g, e)] + 0) + 0 : .5 * ad[od(2 * g - e, e)] + .5 : g < e / 2 ? .5 * (1 - nd(e - 2 * g) + 0) + 0 : .5 * nd((2 * g - e) / e) + .5;
            break;
        case 25:
            g = g / e / 2;
            a = 2 * g * g * (3 - 2 * g);
            break;
        case 26:
            g = (g / e + 1) / 2;
            a = 2 * g * g * (3 - 2 * g) - 1;
            break;
        case 27:
            g =
                g / e, a = g * g * (3 - 2 * g)
    }
    return d ? 1 - a : a
}
for (var qd = 0, rd = 0, sd = 0, Y = 0, Z = 0, td = 0; 1E4 >= td; td++) Y = td / 1E4, qd = (Y /= 1) < 1 / 2.75 ? 7.5625 * Y * Y + 0 : Y < 2 / 2.75 ? 1 * (7.5625 * (Y -= 1.5 / 2.75) * Y + .75) + 0 : Y < 2.5 / 2.75 ? 1 * (7.5625 * (Y -= 2.25 / 2.75) * Y + .9375) + 0 : 1 * (7.5625 * (Y -= 2.625 / 2.75) * Y + .984375) + 0, ad[td] = qd, Y = td / 1E4, sd = rd = 0, Y /= 1, 0 == sd && (sd = .3), 0 == rd || rd < Math.abs(1) ? (rd = 1, Z = sd / 4) : Z = sd / (2 * Math.PI) * Math.asin(1 / rd), qd = -(rd * Math.pow(2, 10 * --Y) * Math.sin(2 * (1 * Y - Z) * Math.PI / sd)) + 0, bd[td] = qd, Y = td / 1E4, sd = rd = 0, Y /= 1, 0 == sd && (sd = .3), 0 == rd || rd < Math.abs(1) ? (rd = 1, Z = sd / 4) : Z = sd / (2 * Math.PI) * Math.asin(1 /
    rd), qd = rd * Math.pow(2, -10 * Y) * Math.sin(2 * (1 * Y - Z) * Math.PI / sd) + 1, cd[td] = qd, Y = td / 1E4, sd = rd = 0, Y /= .5, 0 == sd && (sd = .3 * 1.5), 0 == rd || rd < Math.abs(1) ? (rd = 1, Z = sd / 4) : Z = sd / (2 * Math.PI) * Math.asin(1 / rd), qd = 1 > Y ? -.5 * rd * Math.pow(2, 10 * --Y) * Math.sin(2 * (1 * Y - Z) * Math.PI / sd) + 0 : rd * Math.pow(2, -10 * --Y) * Math.sin(2 * (1 * Y - Z) * Math.PI / sd) * .5 + 1, dd[td] = qd, Y = td / 1E4, ed[td] = -(Math.sqrt(1 - Y * Y) - 1), Y = td / 1E4, fd[td] = Math.sqrt(1 - (Y - 1) * (Y - 1)), Y = td / 1E4, qd = 1 > (Y /= .5) ? -.5 * (Math.sqrt(1 - Y * Y) - 1) + 0 : .5 * (Math.sqrt(1 - (Y -= 2) * Y) + 1) + 0, gd[td] = qd, Y = td / 1E4, Z = 0, 0 == Z && (Z = 1.70158), qd = 1 * (Y /= 1) * Y * ((Z + 1) * Y - Z) + 0, hd[td] = qd, Y = td / 1E4, Z = 0, 0 == Z && (Z = 1.70158), qd = 1 * ((Y = Y / 1 - 1) * Y * ((Z + 1) * Y + Z) + 1) + 0, id[td] = qd, Y = td / 1E4, Z = 0, 0 == Z && (Z = 1.70158), qd = 1 > (Y /= .5) ? .5 * Y * Y * (((Z *= 1.525) + 1) * Y - Z) + 0 : .5 * ((Y -= 2) * Y * (((Z *= 1.525) + 1) * Y + Z) + 2) + 0, jd[td] = qd;

function ud(k, g, e, d, b, a, l) {
    this.name = k;
    this.value = 0;
    this.Tj(d);
    this.gp(b);
    this.Ph = e;
    this.F = g;
    this.duration = a;
    this.state = this.Ea = 0;
    this.zo = this.Ao = this.Qe = this.Fj = !1;
    this.wb = this.ga = 0;
    this.Qc = l;
    this.hg = 1;
    this.Lk = !1;
    this.Rd = [];
    for (k = 0; 28 > k; k++) this.Rd[k] = {}, this.Rd[k].Mi = 0, this.Rd[k].Fo = 0, this.Rd[k].Yj = 0, this.Rd[k].zd = 0, this.Rd[k].Kd = !0
}
ud.prototype = {};
ud.prototype.Tj = function(k) {
    this.Pa = parseFloat(k.split(",")[0]);
    this.Sb = parseFloat(k.split(",")[1]);
    this.wb = this.ga = 0
};
ud.prototype.gp = function(k) {
    this.Ma = parseFloat(k.split(",")[0]);
    this.Gb = parseFloat(k.split(",")[1]);
    isNaN(this.Gb) && (this.Gb = this.Ma)
};
ud.prototype.Zp = function(k) {
    if (0 === this.state) return -1;
    1 === this.state && (this.Ea += k);
    2 === this.state && (this.Ea -= k);
    3 === this.state && (this.state = 0);
    if (4 === this.state || 6 === this.state) this.Ea += k * this.hg;
    5 === this.state && (this.Ea += k * this.hg);
    return 0 > this.Ea ? (this.Ea = 0, 4 === this.state ? this.hg = 1 : 6 === this.state ? (this.hg = 1, this.Lk = !1) : this.state = 0, this.zo = !0, 0) : this.Ea > this.duration ? (this.Ea = this.duration, 4 === this.state ? this.hg = -1 : 6 === this.state ? (this.hg = -1, this.Lk = !0) : 5 === this.state ? this.Ea = 0 : this.state = 0, this.Qe = !0, 1) : this.Lk ? pd(this.Ph, this.duration - this.Ea, this.duration, this.Lk, this.Rd[this.Ph]) : pd(this.Ph, this.Ea, this.duration, this.Lk, this.Rd[this.Ph])
};

function vd(k) {
    return k.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
}

function wd(k) {
    this.e = k
}
(function() {
    var k = wd.prototype;
    k.R = function(e) {
        this.behavior = e;
        this.e = e.e
    };
    k.R.prototype.J = function() {};
    k.I = function(e, d) {
        this.type = e;
        this.behavior = e.behavior;
        this.j = d;
        this.e = e.e;
        this.O = 0
    };
    var g = k.I.prototype;
    g.J = function() {
        this.Y = this.A[0];
        this.K = 1 == this.Y || 2 == this.Y || 3 == this.Y || 4 == this.Y;
        this.F = this.A[1];
        this.Nf = this.A[2];
        this.target = this.A[3];
        this.qp = this.A[4];
        this.Fp = !1;
        1 === this.qp && (this.target = "relative(" + this.target + ")");
        this.duration = this.A[5];
        this.Qc = 1 === this.A[6];
        this.value = 0;
        this.U = {};
        this.ov(this.F, this.Nf, "current", this.target, this.duration, this.Qc);
        1 === this.A[0] && this.Wl(0);
        2 === this.A[0] && this.Wl(2);
        3 === this.A[0] && this.Wl(3);
        4 === this.A[0] && this.Wl(4)
    };
    g.sf = function(e, d) {
        void 0 === d && (d = "current");
        var b = vd(d);
        d = vd(d);
        var a = this.value;
        if ("current" === d) switch (e) {
            case 0:
                b = this.j.x + "," + this.j.y;
                break;
            case 1:
                b = this.j.width + "," + this.j.height;
                break;
            case 2:
                b = this.j.width + "," + this.j.height;
                break;
            case 3:
                b = this.j.width + "," + this.j.height;
                break;
            case 4:
                b = Na(this.j.u) + "," + Na(this.j.u);
                break;
            case 5:
                b = 100 * this.j.opacity + "," + 100 * this.j.opacity;
                break;
            case 6:
                b = a + "," + a;
                break;
            case 7:
                b = this.j.x + "," + this.j.y;
                break;
            case 8:
                b = this.j.x + "," + this.j.y;
                break;
            case 9:
                b = void 0 !== this.j.zb ? this.j.width / this.j.zb.width + "," + this.j.height / this.j.zb.height : "1,1"
        }
        if ("relative" === d.substring(0, 8)) {
            var g = d.match(/\((.*?)\)/);
            if (g) var f = parseFloat(g[1].split(",")[0]),
                k = parseFloat(g[1].split(",")[1]);
            isNaN(f) && (f = 0);
            isNaN(k) && (k = 0);
            switch (e) {
                case 0:
                    b = this.j.x + f + "," + (this.j.y + k);
                    break;
                case 1:
                    b = this.j.width + f + "," +
                        (this.j.height + k);
                    break;
                case 2:
                    b = this.j.width + f + "," + (this.j.height + k);
                    break;
                case 3:
                    b = this.j.width + f + "," + (this.j.height + k);
                    break;
                case 4:
                    b = Na(this.j.u) + f + "," + (Na(this.j.u) + k);
                    break;
                case 5:
                    b = 100 * this.j.opacity + f + "," + (100 * this.j.opacity + k);
                    break;
                case 6:
                    b = a + f + "," + a + f;
                    break;
                case 7:
                    b = this.j.x + f + "," + this.j.y;
                    break;
                case 8:
                    b = this.j.x + "," + (this.j.y + f);
                    break;
                case 9:
                    b = f + "," + k
            }
        }
        return b
    };
    g.ov = function(e, d, b, a, g, f) {
        b = this.sf(e, b);
        a = this.sf(e, a);
        void 0 !== this.U["default"] && delete this.U["default"];
        this.U["default"] = new ud("default", e, d, b, a, g, f);
        this.U["default"].Rg = 0
    };
    g.ja = function() {
        JSON.stringify(this.U["default"]);
        return {
            playmode: this.Y,
            active: this.K,
            tweened: this.F,
            easing: this.Nf,
            target: this.target,
            targetmode: this.qp,
            useCurrent: this.Fp,
            duration: this.duration,
            enforce: this.Qc,
            value: this.value,
            tweenlist: JSON.stringify(this.U["default"])
        }
    };
    ud.fA = function(e, d, b, a, g, f, k, q) {
        d = new ud(d, b, a, g, f, k, q);
        for (var c in e) d[c] = e[c];
        return d
    };
    g.ua = function(e) {
        var d = JSON.parse(e.tweenlist),
            d = ud.fA(d, d.name, d.F, d.Ph, d.Pa + "," +
                d.Sb, d.Ma + "," + d.Gb, d.duration, d.Qc);
        console.log(d);
        this.U["default"] = d;
        this.Y = e.playmode;
        this.K = e.active;
        this.zj = e.tweened;
        this.Nf = e.easing;
        this.target = e.target;
        this.qp = e.targetmode;
        this.Fp = e.useCurrent;
        this.duration = e.duration;
        this.Qc = e.enforce;
        this.value = e.value
    };
    g.kG = function(e) {
        1 < e && (e = 1);
        0 > e && (e = 0);
        for (var d in this.U) {
            var b = this.U[d];
            b.ga = 0;
            b.wb = 0;
            b.state = 3;
            b.Ea = e * b.duration;
            var a = b.Zp(0);
            this.Jt(b, a)
        }
    };
    g.Wl = function(e) {
        for (var d in this.U) {
            var b = this.U[d];
            if (this.Fp) {
                var a = this.sf(b.F, "current"),
                    g = this.sf(b.F, this.target);
                b.Tj(a);
                b.gp(g)
            }
            0 === e && (b.Ea = 1E-6, b.ga = 0, b.wb = 0, b.Fj = !0, b.state = 1);
            1 === e && (b.state = 1);
            if (2 === e || 4 === e) b.Ea = 1E-6, b.ga = 0, b.wb = 0, b.Fj = !0, 2 == e && (b.state = 4), 4 == e && (b.state = 6);
            3 === e && (b.Ea = 1E-6, b.ga = 0, b.wb = 0, b.Fj = !0, b.state = 5)
        }
    };
    g.rG = function(e) {
        for (var d in this.U) {
            var b = this.U[d];
            1 === e && (b.Ea = 0);
            2 === e && (b.Ea = b.duration);
            b.state = 3;
            var a = b.Zp(0);
            this.Jt(b, a)
        }
    };
    g.ZF = function(e) {
        for (var d in this.U) {
            var b = this.U[d];
            1 === e && (b.Ea = b.duration, b.ga = 0, b.wb = 0, b.Ao = !0);
            b.state = 2
        }
    };
    g.Jt = function(e, d) {
        if (0 === e.F) e.Qc ? (this.j.x = e.Pa + (e.Ma - e.Pa) * d, this.j.y = e.Sb + (e.Gb - e.Sb) * d) : (this.j.x += (e.Ma - e.Pa) * d - e.ga, this.j.y += (e.Gb - e.Sb) * d - e.wb, e.ga = (e.Ma - e.Pa) * d, e.wb = (e.Gb - e.Sb) * d);
        else if (1 === e.F) e.Qc ? (this.j.width = e.Pa + (e.Ma - e.Pa) * d, this.j.height = e.Sb + (e.Gb - e.Sb) * d) : (this.j.width += (e.Ma - e.Pa) * d - e.ga, this.j.height += (e.Gb - e.Sb) * d - e.wb, e.ga = (e.Ma - e.Pa) * d, e.wb = (e.Gb - e.Sb) * d);
        else if (2 === e.F) e.Qc ? this.j.width = e.Pa + (e.Ma - e.Pa) * d : (this.j.width += (e.Ma - e.Pa) * d - e.ga, e.ga = (e.Ma - e.Pa) * d);
        else if (3 === e.F) e.Qc ? this.j.height = e.Sb + (e.Gb - e.Sb) * d : (this.j.height += (e.Gb - e.Sb) * d - e.wb, e.wb = (e.Gb - e.Sb) * d);
        else if (4 === e.F)
            if (e.Qc) {
                var b = e.Pa + (e.Ma - e.Pa) * d;
                this.j.u = Pa(I(b))
            } else b = (e.Ma - e.Pa) * d - e.ga, this.j.u = Pa(this.j.u + I(b)), e.ga = (e.Ma - e.Pa) * d;
        else if (5 === e.F) e.Qc ? this.j.opacity = (e.Pa + (e.Ma - e.Pa) * d) / 100 : (this.j.opacity += ((e.Ma - e.Pa) * d - e.ga) / 100, e.ga = (e.Ma - e.Pa) * d);
        else if (6 === e.F) e.Qc ? this.value = e.Pa + (e.Ma - e.Pa) * d : (this.value += (e.Ma - e.Pa) * d - e.ga, e.ga = (e.Ma - e.Pa) * d);
        else if (7 === e.F) e.Qc ? this.j.x = e.Pa + (e.Ma - e.Pa) *
            d : (this.j.x += (e.Ma - e.Pa) * d - e.ga, e.ga = (e.Ma - e.Pa) * d);
        else if (8 === e.F) e.Qc ? this.j.y = e.Sb + (e.Gb - e.Sb) * d : (this.j.y += (e.Gb - e.Sb) * d - e.wb, e.wb = (e.Gb - e.Sb) * d);
        else if (9 === e.F) {
            var b = e.Pa + (e.Ma - e.Pa) * d,
                a = e.Sb + (e.Gb - e.Sb) * d;
            0 > this.j.width && (b = e.Pa + (e.Ma + e.Pa) * -d);
            0 > this.j.height && (a = e.Sb + (e.Gb + e.Sb) * -d);
            e.Qc ? (this.j.width = this.j.zb.width * b, this.j.height = this.j.zb.height * a) : (0 > this.j.width ? (this.j.width = this.j.width / (-1 + e.ga) * b, e.ga = b + 1) : (this.j.width = this.j.width / (1 + e.ga) * b, e.ga = b - 1), 0 > this.j.height ? (this.j.height = this.j.height / (-1 + e.wb) * a, e.wb = a + 1) : (this.j.height = this.j.height / (1 + e.wb) * a, e.wb = a - 1))
        }
        this.j.za()
    };
    g.Ra = function() {
        var e = this.e.Ne(this.j),
            d = this.U["default"];
        0 !== d.state && (d.Fj && (this.e.trigger(wd.prototype.k.Yp, this.j), d.Fj = !1), d.Ao && (this.e.trigger(wd.prototype.k.XA, this.j), d.Ao = !1), this.K = 1 == d.state || 2 == d.state || 4 == d.state || 5 == d.state || 6 == d.state, e = d.Zp(e), this.Jt(d, e), d.Qe && (this.e.trigger(wd.prototype.k.lk, this.j), d.Qe = !1), d.zo && (this.e.trigger(wd.prototype.k.uu, this.j), d.zo = !1))
    };
    k.k = {};
    g = k.k;
    g.Md = function() {
        return 0 !== this.U["default"].state
    };
    g.MH = function() {
        return 2 == this.U["default"].state
    };
    g.Cz = function(e, d) {
        var b = this.U["default"];
        return mc(b.Ea / b.duration, e, d)
    };
    g.WH = function(e, d) {
        var b = this.U["default"];
        this.cm = mc(b.Ea / b.duration, e, d);
        if (b = this.Ps != this.cm && this.cm) this.Ps = this.cm;
        return b
    };
    g.Yp = function() {
        return void 0 === this.U["default"] ? !1 : this.U["default"].Fj
    };
    g.XA = function() {
        return void 0 === this.U["default"] ? !1 : this.U["default"].Ao
    };
    g.lk = function() {
        return void 0 === this.U["default"] ? !1 : this.U["default"].Qe
    };
    g.uu = function() {
        return void 0 === this.U["default"] ? !1 : this.U["default"].zo
    };
    k.B = {};
    g = k.B;
    g.Mm = function(e, d) {
        this.Ps = this.cm = !1;
        this.Fp = 1 == d;
        this.Wl(e)
    };
    g.Nm = function(e) {
        this.rG(e)
    };
    g.Hm = function(e) {
        this.Ps = this.cm = !1;
        this.ZF(e)
    };
    g.eI = function(e) {
        this.kG(e)
    };
    g.Fu = function(e) {
        isNaN(e) || 0 > e || void 0 === this.U["default"] || (this.U["default"].duration = e)
    };
    g.wI = function(e) {
        void 0 !== this.U["default"] && (this.U["default"].Qc = 1 === e)
    };
    g.Gu = function(e) {
        void 0 !== this.U["default"] && (e = this.sf(this.U["default"].F, e), this.U["default"].Tj(e))
    };
    g.Ku = function(e, d, b) {
        if (void 0 !== this.U["default"] && !isNaN(b)) {
            var a = this.U["default"],
                g = b + "";
            this.qp = d;
            var f = "",
                k = "";
            if (1 === d) {
                this.target = "relative(" + g + ")";
                switch (e) {
                    case 0:
                        f = this.j.x + b;
                        k = a.Gb;
                        break;
                    case 1:
                        f = a.Ma;
                        k = this.j.y + b;
                        break;
                    case 2:
                        k = f = "" + Na(this.j.u + I(b));
                        break;
                    case 3:
                        k = f = "" + 100 * this.j.opacity + b;
                        break;
                    case 4:
                        f = this.j.width + b;
                        k = a.Gb;
                        break;
                    case 5:
                        f = a.Ma;
                        k = this.j.height + b;
                        break;
                    case 6:
                        k = f = b
                }
                g = f + "," + k
            } else {
                switch (e) {
                    case 0:
                        f = b;
                        k = a.Gb;
                        break;
                    case 1:
                        f = a.Ma;
                        k = b;
                        break;
                    case 2:
                        k = f = b;
                        break;
                    case 3:
                        k = f = b;
                        break;
                    case 4:
                        f = b;
                        k = a.Gb;
                        break;
                    case 5:
                        f = a.Ma;
                        k = b;
                        break;
                    case 6:
                        k = f = b
                }
                this.target = g = f + "," + k
            }
            e = this.sf(this.U["default"].F, "current");
            g = this.sf(this.U["default"].F, g);
            a.Tj(e);
            a.gp(g)
        }
    };
    g.CB = function(e) {
        void 0 !== this.U["default"] && (this.U["default"].F = e)
    };
    g.uB = function(e) {
        void 0 !== this.U["default"] && (this.U["default"].Ph = e)
    };
    g.tI = function(e, d, b, a, g) {
        void 0 !== this.U["default"] && (this.U["default"].Rd[e].Kd = !1, this.U["default"].Rd[e].Mi = d, this.U["default"].Rd[e].Fo = b, this.U["default"].Rd[e].Yj = a, this.U["default"].Rd[e].zd = g)
    };
    g.gI = function() {
        void 0 !== this.U["default"] && (this.U["default"].Kd = !0)
    };
    g.DB = function(e) {
        var d = this.U["default"];
        this.value = e;
        6 === d.F && d.Tj(this.sf(d.F, "current"))
    };
    g.xB = function(e, d, b, a, g) {
        if (void 0 === this.U["default"]) this.ov(e, d, initial, b, a, g);
        else {
            var f = this.U["default"];
            f.F = e;
            f.Ph = d;
            f.Tj(this.sf(e, "current"));
            f.gp(this.sf(e, b));
            f.duration = a;
            f.Qc = 1 === g
        }
    };
    k.M = {};
    k = k.M;
    k.QI = function(e) {
        var d = "N/A";
        switch (this.U["default"].state) {
            case 0:
                d = "paused";
                break;
            case 1:
                d = "playing";
                break;
            case 2:
                d = "reversing";
                break;
            case 3:
                d = "seeking"
        }
        e.H(d)
    };
    k.iB = function(e) {
        e.P(this.U["default"].Ea / this.U["default"].duration)
    };
    k.$t = function(e) {
        e.P(this.U["default"].duration)
    };
    k.PB = function(e) {
        var d = this.U["default"],
            b = "N/A";
        switch (d.F) {
            case 0:
                b = d.Ma;
                break;
            case 1:
                b = d.Gb;
                break;
            case 2:
                b = d.Ma;
                break;
            case 3:
                b = d.Ma;
                break;
            case 4:
                b = d.Ma;
                break;
            case 5:
                b = d.Gb;
                break;
            case 6:
                b = d.Ma
        }
        e.P(b)
    };
    k.Ru = function(e) {
        e.P(this.value)
    };
    k.ZI = function(e, d, b, a, g) {
        a = 1 < a ? 1 : a;
        g = pd(g, 0 > a ? 0 : a, 1, !1, !1);
        e.P(d + g * (b - d))
    }
})();

function vd(k) {
    return k.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
}

function xd(k) {
    this.e = k
}
(function() {
    function k(a, b) {
        return (a /= b) < 1 / 2.75 ? 7.5625 * a * a + 0 : a < 2 / 2.75 ? 1 * (7.5625 * (a -= 1.5 / 2.75) * a + .75) + 0 : a < 2.5 / 2.75 ? 1 * (7.5625 * (a -= 2.25 / 2.75) * a + .9375) + 0 : 1 * (7.5625 * (a -= 2.625 / 2.75) * a + .984375) + 0
    }
    var g = xd.prototype;
    g.R = function(a) {
        this.behavior = a;
        this.e = a.e
    };
    g.R.prototype.J = function() {};
    g.I = function(a, b) {
        this.type = a;
        this.behavior = a.behavior;
        this.j = b;
        this.e = a.e;
        this.O = 0
    };
    var e = g.I.prototype;
    e.Fa = function(a) {
        1 < a && (a = 1);
        nc[this.group] = -1;
        nc[this.group] = a;
        nc[this.group] >= a && (nc[this.group] = a)
    };
    e.xw = function() {
        "" != this.group && ("undefined" === typeof oc && (oc = {}, nc = {}), "undefined" === typeof oc[this.group] && (oc[this.group] = [], nc[this.group] = -1), -1 == oc[this.group].indexOf(this) && oc[this.group].push(this))
    };
    e.ih = function() {
        this.fe = this.j.width;
        this.ee = this.j.height;
        this.bk = this.j.u;
        this.Xy = this.j.opacity;
        this.oh = this.j.x;
        this.ph = this.j.y;
        this.zp = this.value
    };
    e.J = function() {
        this.K = 1 === this.A[0];
        this.F = this.A[1];
        this.Nf = this.A[2];
        this.L = this.A[3];
        this.target = this.A[4];
        this.duration = this.A[5];
        this.xi = this.A[6];
        this.Y = this.A[7];
        this.value = this.A[8];
        this.Oc = this.A[9];
        this.rr = 1 === this.A[10];
        this.group = this.A[11];
        this.Cy(this.A[12]);
        this.fd = null;
        this.vd = 0;
        5 == this.Y && (this.vd = 1);
        this.xw();
        this.ci = !1;
        this.na = this.j.x;
        this.Rb = this.j.y;
        this.ra = parseFloat(this.target.split(",")[0]);
        this.Ob = parseFloat(this.target.split(",")[1]);
        this.ih();
        this.ck = this.Fc = this.ab = this.Pb = this.Aa = 0;
        this.vf = this.j.height / this.j.width;
        this.Yo = this.reverse = !1;
        this.Le = this.Ke = !0;
        this.loop = !1;
        this.mb = this.Za = 0;
        this.os = this.Y;
        this.sd = this.ga = this.Aa;
        this.Xd = this.Pb;
        this.rr && this.init();
        "" == this.L && (this.L = "current");
        this.td = this.Al = this.Ej = this.Bl = this.Qe = this.Fl = this.Hj = this.El = this.Gj = !1;
        this.K && this.init()
    };
    e.init = function() {
        this.Gj = !1;
        "" === this.L && (this.L = "current");
        "" === this.target && (this.target = "current");
        var a = "current" === this.L,
            b = "current" === this.target,
            d = "OBJ" === this.target;
        "OBJ" === this.target && null != this.fd && (0 == this.F ? this.target = 1 == this.Oc ? this.fd.x - this.j.x + "," + (this.fd.y - this.j.y) : this.fd.x + "," + this.fd.y : 1 == this.F || 2 == this.F || 3 == this.F || 7 == this.F ? this.target = 1 == this.Oc ? (2 == this.F ? 1 : this.fd.width) + "," + (3 == this.F ? 1 : this.fd.height) : (2 == this.F ? 1 : this.fd.width / this.fe) + "," + (3 == this.F ? 1 : this.fd.height / this.ee) : 4 == this.F ? this.target = 1 == this.Oc ? Na(this.fd.u - this.j.u) + "" : Na(this.fd.u) + "" : 5 == this.F && (this.target = 1 == this.Oc ? 100 * (this.fd.opacity - this.j.opacity) + "" : 100 * this.fd.opacity + ""));
        if (0 == this.F) b && (this.target = this.j.x + "," + this.j.y), a ? this.L = 1 == this.Oc ? this.j.x + "," + this.j.y : this.oh + "," + this.ph : this.reverse || 1 == this.Y || (this.j.x = parseFloat(this.L.split(",")[0]), this.j.y = parseFloat(this.L.split(",")[1])), 1 == this.Oc ? (this.loop && (this.j.x = this.oh, this.j.y = this.ph), this.na = this.j.x, this.Rb = this.j.y, this.reverse ? (this.ra = -parseFloat(this.target.split(",")[0]), this.Ob = -parseFloat(this.target.split(",")[1])) : (this.ra = parseFloat(this.target.split(",")[0]), this.Ob = parseFloat(this.target.split(",")[1])), this.Aa = this.na, this.Pb = this.Rb, this.ab = this.Aa + this.ra, this.Fc = this.Pb + this.Ob) : (this.reverse ? (this.j.x = parseFloat(this.target.split(",")[0]), this.j.y = parseFloat(this.target.split(",")[1]), this.ra = this.oh, this.Ob = this.ph) : (this.j.x = this.oh, this.j.y = this.ph, this.ra = parseFloat(this.target.split(",")[0]), this.Ob = parseFloat(this.target.split(",")[1])), this.na = this.j.x, this.Rb = this.j.y, this.Aa = this.na, this.Pb = this.Rb, this.ab = this.ra, this.Fc = this.Ob, -6 == this.Y && (this.ab = this.oh, this.Fc = this.ph));
        else if (1 == this.F || 2 == this.F || 3 == this.F) {
            b && (this.target = "1,1");
            "current" == this.L && (this.L = "1,1");
            this.L = "" + this.L;
            this.target = "" + this.target;
            2 == this.F ? (-1 == this.L.indexOf(",") && (this.L = parseFloat(this.L) + ",1"), -1 == this.target.indexOf(",") && (this.target = parseFloat(this.target) + ",1")) : 3 == this.F ? (-1 == this.L.indexOf(",") && (this.L = "1," + parseFloat(this.L)), -1 == this.target.indexOf(",") && (this.target = "1," + parseFloat(this.target))) : (-1 == this.L.indexOf(",") && (this.L = parseFloat(this.L) + "," + parseFloat(this.L)), -1 == this.target.indexOf(",") && (this.target = parseFloat(this.target) + "," + parseFloat(this.target)));
            var e = parseFloat(this.L.split(",")[0]),
                g = parseFloat(this.L.split(",")[1]);
            this.Ke = !0;
            var c = parseFloat(this.target.split(",")[0]);
            if (0 == c || isNaN(c)) this.Ke = !1;
            3 == this.F && (this.Ke = !1);
            this.Le = !0;
            var h = parseFloat(this.target.split(",")[1]);
            if (0 == h || isNaN(h)) this.Le = !1;
            2 == this.F && (this.Le = !1);
            1 == this.Oc ? (this.loop && (this.j.width = this.fe, this.j.height = this.ee), a || (this.reverse ? (this.j.width = this.j.width * c, this.j.height = this.j.height * h) : (this.j.width = this.j.width * e, this.j.height = this.j.height * g)), this.na = this.j.width, this.Rb = this.j.height, this.Aa = this.na, this.Pb = this.Rb, this.reverse ? (this.ra = this.na * e / c, this.Ob = this.Rb * g / h) : (this.ra = this.na * c, this.Ob = this.Rb * h)) : (a || (this.reverse ? (this.j.width = this.fe * c, this.j.height = this.ee * h) : (this.j.width = this.fe * e, this.j.height = this.ee * g)), this.na = this.j.width, this.Rb = this.j.height, this.Aa = this.na, this.Pb = this.Rb, this.reverse ? (this.ra = this.fe * e, this.Ob = this.ee * g) : (this.ra = this.fe * c, this.Ob = this.ee * h));
            this.ab = this.ra;
            this.Fc = this.Ob; - 6 == this.Y && (this.ab = this.fe * e, this.Fc = this.ee * g)
        } else if (4 == this.F) b && (this.target = Na(this.j.u)), "current" == this.L || this.reverse || 1 == this.Y || (this.j.u = I(parseFloat(this.L.split(",")[0]))), 1 == this.Oc ? (this.loop && (this.j.u = this.bk), this.na = this.j.u, this.reverse ? this.ra = this.j.u - I(parseFloat(this.target.split(",")[0])) : this.ra = this.j.u + I(parseFloat(this.target.split(",")[0]))) : this.reverse ? (this.j.u = I(parseFloat(this.target.split(",")[0])), this.na = this.j.u, this.ra = this.bk) : (this.j.u = this.bk, this.na = this.j.u, this.ra = I(parseFloat(this.target.split(",")[0]))), this.Aa = this.na, this.ab = Na(this.ra), -6 == this.Y && (this.ab = Na(this.bk)), this.ck = I(this.ab);
        else if (5 == this.F) "current" == this.L && (this.L = this.j.opacity), b && (this.target = "" + this.j.opacity), a || this.reverse || 1 == this.Y || (this.j.opacity = parseFloat(this.L.split(",")[0]) / 100), 1 == this.Oc ? (this.loop && (this.j.opacity = this.Xy), this.Aa = this.na = this.j.opacity, this.ra = this.reverse ? -parseFloat(this.target.split(",")[0]) / 100 : parseFloat(this.target.split(",")[0]) / 100, this.ab = this.Aa + this.ra) : (this.na = this.j.opacity, this.reverse ? (this.Aa = parseFloat(this.target.split(",")[0]) /
            100, this.ra = parseFloat(this.L.split(",")[0]) / 100) : (this.Aa = this.na, this.ra = parseFloat(this.target.split(",")[0]) / 100), this.ab = this.ra), -6 == this.Y && (this.ab = this.Xy);
        else if (6 == this.F) isNaN(this.value) && (this.value = 0), "current" == this.L && (this.L = "" + this.value), b && (this.target = "" + this.value), a || this.reverse || 1 == this.Y || (this.value = parseFloat(this.L.split(",")[0])), 1 == this.Oc ? (this.loop && (this.value = this.zp), a || (this.value = this.reverse ? parseFloat(this.target.split(",")[0]) : parseFloat(this.L.split(",")[0])),
            this.na = this.value, this.reverse ? this.ra = this.na - parseFloat(this.target.split(",")[0]) : this.ra = this.na + parseFloat(this.target.split(",")[0]), this.Aa = this.na, this.ab = this.ra) : (a || (this.value = this.reverse ? parseFloat(this.target.split(",")[0]) : parseFloat(this.L.split(",")[0])), this.na = this.value, this.ra = this.reverse ? parseFloat(this.L.split(",")[0]) : parseFloat(this.target.split(",")[0]), this.Aa = this.na, this.ab = this.ra), -6 == this.Y && (this.ab = this.zp);
        else if (7 == this.F) {
            b && (this.target = this.j.width + "," + this.j.height);
            "current" == this.L || this.reverse || 1 == this.Y || (this.j.width = parseFloat(this.L.split(",")[0]), this.j.height = parseFloat(this.L.split(",")[1]));
            this.Ke = !0;
            c = parseFloat(this.target.split(",")[0]);
            if (0 > c || isNaN(c)) this.Ke = !1;
            this.Le = !0;
            h = parseFloat(this.target.split(",")[1]);
            if (0 > h || isNaN(h)) this.Le = !1;
            1 == this.Oc ? (this.loop && (this.j.width = this.fe, this.j.height = this.ee), this.na = this.j.width, this.Rb = this.j.height, this.reverse ? (this.ra = this.na - parseFloat(this.target.split(",")[0]), this.Ob = this.Rb - parseFloat(this.target.split(",")[1])) : (this.ra = this.na + parseFloat(this.target.split(",")[0]), this.Ob = this.Rb + parseFloat(this.target.split(",")[1]))) : (a || (this.reverse ? (this.j.width = parseFloat(this.target.split(",")[0]), this.j.height = parseFloat(this.target.split(",")[1])) : (this.j.width = this.fe, this.j.height = this.ee)), this.na = this.j.width, this.Rb = this.j.height, this.reverse ? (this.ra = this.fe, this.Ob = this.ee) : (this.ra = parseFloat(this.target.split(",")[0]), this.Ob = parseFloat(this.target.split(",")[1])));
            this.Aa = this.na;
            this.Pb = this.Rb;
            this.ab = this.ra;
            this.Fc = this.Ob; - 6 == this.Y && (this.ab = this.fe, this.Fc = this.ee)
        }
        this.sd = this.ga = this.Aa;
        this.Xd = this.Pb;
        this.Za = parseFloat(this.xi.split(",")[0]);
        this.mb = parseFloat(this.xi.split(",")[1]);
        if (0 > this.Za || isNaN(this.Za)) this.Za = 0;
        if (0 > this.mb || isNaN(this.mb)) this.mb = 0;
        a && (this.L = "current");
        b && (this.target = "current");
        d && (this.target = "OBJ")
    };
    e.kD = function(a, b) {
        switch (this.Nf) {
            case 0:
                return 1 * a / b + 0;
            case 1:
                return 1 * (a /= b) * a + 0;
            case 2:
                return -1 * (a /= b) * (a - 2) + 0;
            case 3:
                return 1 > (a /= b / 2) ? .5 * a * a + 0 : -.5 * (--a * (a - 2) - 1) + 0;
            case 4:
                return 1 * (a /= b) * a * a + 0;
            case 5:
                return 1 * ((a = a / b - 1) * a * a + 1) + 0;
            case 6:
                return 1 > (a /= b / 2) ? .5 * a * a * a + 0 : .5 * ((a -= 2) * a * a + 2) + 0;
            case 7:
                return 1 * (a /= b) * a * a * a + 0;
            case 8:
                return -1 * ((a = a / b - 1) * a * a * a - 1) + 0;
            case 9:
                return 1 > (a /= b / 2) ? .5 * a * a * a * a + 0 : -.5 * ((a -= 2) * a * a * a - 2) + 0;
            case 10:
                return 1 * (a /= b) * a * a * a * a + 0;
            case 11:
                return 1 * ((a = a / b - 1) * a * a * a * a + 1) + 0;
            case 12:
                return 1 > (a /= b / 2) ? .5 * a * a * a * a * a + 0 : .5 * ((a -= 2) * a * a * a * a + 2) + 0;
            case 13:
                return -1 * (Math.sqrt(1 - (a /= b) * a) - 1) + 0;
            case 14:
                return 1 * Math.sqrt(1 - (a = a / b - 1) * a) + 0;
            case 15:
                return 1 > (a /= b / 2) ? -.5 * (Math.sqrt(1 - a * a) - 1) + 0 : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1) + 0;
            case 16:
                var d = 0;
                0 == d && (d = 1.70158);
                return 1 * (a /= b) * a * ((d + 1) * a - d) + 0;
            case 17:
                return d = 0, 0 == d && (d = 1.70158), 1 * ((a = a / b - 1) * a * ((d + 1) * a + d) + 1) + 0;
            case 18:
                return d = 0, 0 == d && (d = 1.70158), 1 > (a /= b / 2) ? .5 * a * a * (((d *= 1.525) + 1) * a - d) + 0 : .5 * ((a -= 2) * a * (((d *= 1.525) + 1) * a + d) + 2) + 0;
            case 19:
                var e = 0,
                    g = 0;
                if (0 == a) break;
                if (1 == (a /= b)) return 1;
                0 == g && (g = .3 * b);
                0 == e || e < Math.abs(1) ? (e = 1, d = g / 4) : d = g / (2 * Math.PI) * Math.asin(1 / e);
                return -(e * Math.pow(2, 10 * --a) * Math.sin(2 * (a * b - d) * Math.PI / g)) + 0;
            case 20:
                g = e = 0;
                if (0 == a) break;
                if (1 == (a /= b)) return 1;
                0 == g && (g = .3 * b);
                0 == e || e < Math.abs(1) ? (e = 1, d = g / 4) : d = g / (2 * Math.PI) * Math.asin(1 / e);
                return e * Math.pow(2, -10 * a) * Math.sin(2 * (a * b - d) * Math.PI / g) + 1;
            case 21:
                g = e = 0;
                if (0 == a) break;
                if (2 == (a /= b / 2)) return 1;
                0 == g && (g = .3 * b * 1.5);
                0 == e || e < Math.abs(1) ? (e = 1, d = g / 4) : d = g / (2 * Math.PI) * Math.asin(1 / e);
                return 1 > a ? -.5 * e * Math.pow(2, 10 * --a) * Math.sin(2 * (a * b - d) * Math.PI / g) + 0 : e * Math.pow(2, -10 * --a) * Math.sin(2 * (a * b - d) * Math.PI / g) * .5 + 1;
            case 22:
                return 1 - k(b - a, b) + 0;
            case 23:
                return k(a, b);
            case 24:
                return a < b / 2 ? .5 * (1 - k(b - 2 * a, b) + 0) + 0 : .5 * k(2 * a - b, b) + .5;
            case 25:
                return d = a / b / 2, 2 * d * d * (3 - 2 * d);
            case 26:
                return d = (a / b + 1) / 2, 2 * d * d * (3 - 2 * d) - 1;
            case 27:
                return d = a / b, d * d * (3 - 2 * d)
        }
        return 0
    };
    e.ja = function() {
        return {
            i: this.O,
            active: this.K,
            tweened: this.F,
            easing: this.Nf,
            initial: this.L,
            target: this.target,
            duration: this.duration,
            wait: this.xi,
            playmode: this.Y,
            value: this.value,
            coord_mode: this.Oc,
            forceInit: this.rr,
            group: this.group,
            repeatcount: this.ae,
            targetObject: this.fd,
            pingpongCounter: this.vd,
            isPaused: this.ci,
            initialX: this.na,
            initialY: this.Rb,
            targetX: this.ra,
            targetY: this.Ob,
            tweenSaveWidth: this.fe,
            tweenSaveHeight: this.ee,
            tweenSaveAngle: this.bk,
            tweenSaveX: this.oh,
            tweenSaveY: this.ph,
            tweenSaveValue: this.zp,
            tweenInitialX: this.Aa,
            tweenInitialY: this.Pb,
            tweenTargetX: this.ab,
            tweenTargetY: this.Fc,
            tweenTargetAngle: this.ck,
            ratio: this.vf,
            reverse: this.reverse,
            rewindMode: this.Yo,
            doTweenX: this.Ke,
            doTweenY: this.Le,
            loop: this.loop,
            initiating: this.Za,
            cooldown: this.mb,
            lastPlayMode: this.os,
            lastKnownValue: this.ga,
            lastKnownX: this.sd,
            lastKnownY: this.Xd,
            onStarted: this.Gj,
            onStartedDone: this.El,
            onWaitEnd: this.Hj,
            onWaitEndDone: this.Fl,
            onEnd: this.Qe,
            onEndDone: this.Bl,
            onCooldown: this.Ej,
            onCooldownDone: this.Al,
            onCountEnd: this.td
        }
    };
    e.ua = function(a) {
        this.O = a.i;
        this.K = a.active;
        this.F = a.tweened;
        this.Nf = a.easing;
        this.L = a.initial;
        this.target = a.target;
        this.duration = a.duration;
        this.xi = a.wait;
        this.Y = a.playmode;
        this.value = a.value;
        this.Oc = a.coord_mode;
        this.rr = a.forceInit;
        this.group = a.group;
        this.ae = a.repeatcount;
        this.fd = a.targetObject;
        this.vd = a.pingpongCounter;
        this.ci = a.isPaused;
        this.na = a.initialX;
        this.Rb = a.initialY;
        this.ra = a.targetX;
        this.Ob = a.targetY;
        this.fe = a.tweenSaveWidth;
        this.ee = a.tweenSaveHeight;
        this.bk = a.tweenSaveAngle;
        this.oh = a.tweenSaveX;
        this.ph = a.tweenSaveY;
        this.zp = a.tweenSaveValue;
        this.Aa = a.tweenInitialX;
        this.Pb = a.tweenInitialY;
        this.ab = a.tweenTargetX;
        this.Fc = a.tweenTargetY;
        this.ck = a.tweenTargetAngle;
        this.vf = a.ratio;
        this.reverse = a.reverse;
        this.Yo = a.rewindMode;
        this.Ke = a.doTweenX;
        this.Le = a.doTweenY;
        this.loop = a.loop;
        this.Za = a.initiating;
        this.mb = a.cooldown;
        this.os = a.lastPlayMode;
        this.ga = a.lastKnownValue;
        this.sd = a.lastKnownX;
        this.Xd = a.lastKnownY;
        this.Gj = a.onStarted;
        this.El = a.onStartedDone;
        this.Hj = a.onWaitEnd;
        this.Fl = a.onWaitEndDone;
        this.Qe = a.onEnd;
        this.Bl = a.onEndDone;
        this.Ej = a.onCooldown;
        this.Al = a.onCooldownDone;
        this.td = a.onCountEnd;
        this.xw()
    };
    e.Ra = function() {
        var a = this.e.Ne(this.j),
            b = -1 == this.O;
        this.K && 0 !== a && (0 != this.O || this.Gj || (this.Gj = !0, this.Al = this.Ej = this.Bl = this.Qe = this.Fl = this.Hj = this.El = !1, this.e.trigger(xd.prototype.k.Yp, this.j), this.El = !0), this.O = -1 == this.O ? this.Za + this.duration + this.mb : this.O + a, this.O <= this.Za || (0 == this.Hj && (this.Hj = !0, this.e.trigger(xd.prototype.k.bq, this.j), this.Fl = !0), this.O <= this.duration + this.Za && (a = this.kD(this.O - this.Za, this.duration), 0 == this.F ? (1 == this.Oc ? (this.j.x !== this.sd && (this.Aa += this.j.x - this.sd, this.ab += this.j.x - this.sd), this.j.y !== this.Xd && (this.Pb += this.j.y - this.Xd, this.Fc += this.j.y - this.Xd)) : (this.j.x !== this.sd && (this.Aa += this.j.x - this.sd), this.j.y !== this.Xd && (this.Pb += this.j.y - this.Xd)), this.j.x = this.Aa + (this.ab - this.Aa) * a, this.j.y = this.Pb + (this.Fc - this.Pb) * a, this.sd = this.j.x, this.Xd = this.j.y) : 1 == this.F || 2 == this.F || 3 == this.F ? (this.j.width !== this.sd && (this.Aa = this.j.width), this.j.height !== this.Xd && (this.Pb = this.j.height), this.Ke && (this.j.width = this.Aa + (this.ab - this.Aa) * a), this.Le ? this.j.height = this.Pb + (this.Fc - this.Pb) * a : 1 == this.F && (this.j.height = this.j.width * this.vf), this.sd = this.j.width, this.Xd = this.j.height) : 4 == this.F ? (a = this.Aa + (this.ck - this.Aa) * a, this.O >= this.duration + this.Za && (a = this.ck), this.j.u = Pa(a)) : 5 == this.F ? (1 == this.Oc && this.j.opacity !== this.sd && (this.Aa = this.j.opacity), this.j.opacity = this.Aa + (this.ab - this.Aa) * a, this.sd = this.j.opacity) : 6 == this.F ? this.value = this.Aa + (this.ab - this.Aa) * a : 7 == this.F && (1 == this.Oc && (this.j.width !== this.sd && (this.Aa = this.j.width), this.j.height !== this.Xd && (this.Pb = this.j.height)), this.Ke && (this.j.width = this.Aa + (this.ab - this.Aa) * a), this.Le && (this.j.height = this.Pb + (this.Fc - this.Pb) * a), this.sd = this.j.width, this.Xd = this.j.height), this.j.za()), this.O >= this.duration + this.Za && (this.PC(b), this.j.za(), 0 == this.Qe && (this.Qe = !0, this.e.trigger(xd.prototype.k.lk, this.j), this.Bl = !0))))
    };
    e.PC = function(a) {
        switch (this.F) {
            case 0:
                this.j.x = this.ab;
                this.j.y = this.Fc;
                break;
            case 1:
                this.Ke && (this.j.width = this.ab);
                this.Le ? this.j.height = this.Fc : this.j.height = this.j.width * this.vf;
                break;
            case 2:
                this.j.width = this.ab;
                break;
            case 3:
                this.j.height = this.Fc;
                break;
            case 4:
                this.j.u = Pa(this.ck);
                this.ga = this.j.u;
                break;
            case 5:
                this.j.opacity = this.ab;
                break;
            case 6:
                this.value = this.ab;
                break;
            case 7:
                this.Ke && (this.j.width = this.ab), this.Le && (this.j.height = this.Fc)
        }
        0 < this.ae && --this.ae;
        this.O >= this.duration + this.Za + this.mb && (0 == this.Y ? (this.reverse = this.K = !1, this.O = this.duration + this.Za + this.mb, this.td = !0) : 1 == this.Y ? (this.O = 0, this.init(), this.td = 0 == this.ae, this.K = !this.td) : 2 == this.Y ? a ? (this.reverse = !1, this.init()) : (this.reverse = !this.reverse, this.O = 0, this.init(), this.td = 0 == this.ae, this.K = !this.td) : 3 == this.Y ? this.e.Ce(this.j) : 4 == this.Y ? (this.loop = !0, this.O = 0, this.init(), this.td = 0 == this.ae, this.K = !this.td) : 5 == this.Y ? a ? (this.reverse = !1, this.init()) : 0 >= this.vd ? (this.O = this.duration + this.Za + this.mb, this.td = 0 == this.ae, this.K = !this.td) : (this.reverse ? (--this.vd, this.reverse = !1) : (--this.vd, this.reverse = !0), this.O = 0, this.init(), this.K = !0) : -6 == this.Y ? (this.Y = this.os, this.reverse = !1, this.O = 0, this.K = !1) : 6 == this.Y && (this.reverse = !1, this.O = this.duration + this.Za + this.mb, this.K = !1, this.td = !0));
        0 == this.Ej && (this.Ej = !0, this.e.trigger(xd.prototype.k.tA, this.j), this.Al = !0);
        this.td && (this.e.trigger(xd.prototype.k.uA, this.j), this.td = !1)
    };
    e.Cy = function(a) {
        this.Xo = a;
        0 >= this.Xo && (this.Xo = -1);
        this.ae = this.Xo
    };
    g.k = {};
    e = g.k;
    e.Md = function() {
        return this.K
    };
    e.$G = function(a, b) {
        var d = [];
        oc[this.group].forEach(function(a) {
            d.push(a.O / (a.duration + a.Za + a.mb))
        });
        return mc(Math.min.apply(null, d), a, b)
    };
    e.Cz = function(a, b) {
        return mc(this.O / (this.duration + this.Za + this.mb), a, b)
    };
    e.Yp = function() {
        if (!1 === this.El) return this.Gj
    };
    e.bq = function() {
        if (!1 === this.Fl) return this.Hj
    };
    e.lk = function() {
        if (!1 === this.Bl) return this.Qe
    };
    e.tA = function() {
        if (!1 === this.Al) return this.Ej
    };
    e.uA = function() {
        return this.td
    };
    g.B = {};
    var d = g.B;
    d.rB = function(a) {
        this.K = 1 === a
    };
    d.NI = function(a, b) {
        "" === b && (b = this.group);
        (1 === a || oc[b].every(function(a) {
            return !a.K
        })) && oc[b].forEach(function(b) {
            1 === a ? d.Nz.apply(b) : d.Mm.apply(b)
        })
    };
    d.RI = function(a, b) {
        "" === b && (b = this.group);
        oc[b].forEach(function(b) {
            d.Nm.apply(b, [a])
        })
    };
    d.jI = function(a, b, e) {
        "" === e && (e = this.group);
        (1 === a || oc[e].every(function(a) {
            return !a.K
        })) && oc[e].forEach(function(e) {
            1 === a ? d.Oz.apply(e, [b]) : d.Hm.apply(e, [b])
        })
    };
    d.Nz = function() {
        this.loop = 4 === this.Y;
        5 == this.Y && (this.vd = 1);
        6 == this.Y || -6 == this.Y ? this.O < this.duration + this.mb + this.Za && (this.reverse = !1, this.init(), this.K = !0) : (this.reverse = !1, this.O = 0, this.init(), this.K = !0)
    };
    d.Oz = function(a) {
        this.Yo = 1 == a;
        this.loop = 4 === this.Y;
        5 == this.Y && (this.vd = 1);
        6 == this.Y || -6 == this.Y ? this.O < this.duration + this.mb + this.Za && (this.reverse = !0, this.init(), this.K = !0) : a ? 1 == this.vd && this.O >= this.duration + this.mb + this.Za && (this.reverse = !0, this.O = 0, this.vd = 2, this.init(), this.K = !0) : (this.reverse = !0, this.O = 0, this.init(), this.K = !0)
    };
    d.Mm = function() {
        this.K || (this.ae = this.Xo, this.loop = 4 === this.Y, 5 == this.Y && (this.vd = 1), 6 == this.Y || -6 == this.Y ? this.O < this.duration + this.mb + this.Za && (this.reverse = !1, this.init(), this.K = !0) : (this.vd = 1, this.reverse = !1, this.O = 0, this.init(), this.K = !0))
    };
    d.Nm = function(a) {
        this.K && (2 == this.Y || 4 == this.Y ? this.O = this.reverse ? 0 : -1 : 1 == a ? this.ih() : 0 == a ? this.O = this.Za + this.mb + this.duration : this.O = 0, this.Ra(), this.K = !1)
    };
    d.XH = function() {
        this.K && (this.ci = !0, this.K = !1)
    };
    d.iI = function() {
        this.ci ? (this.K = !0, this.ci = !1) : this.K || (this.reverse = !1, this.O = 0, this.init(), this.K = !0)
    };
    d.Hm = function(a) {
        this.Yo = 1 == a;
        this.K || (this.loop = 4 === this.Y, 5 == this.Y && (this.vd = 1), 6 == this.Y || -6 == this.Y ? this.O < this.duration + this.mb + this.Za && (this.reverse = !0, this.init(), this.K = !0) : a ? 1 == this.vd && this.O >= this.duration + this.mb + this.Za && (this.reverse = !0, this.O = 0, this.vd = 2, this.init(), this.K = !0) : (this.reverse = !0, this.O = 0, this.init(), this.K = !0))
    };
    d.Fu = function(a) {
        this.duration = a
    };
    d.HB = function(a) {
        this.xi = a;
        this.Za = parseFloat(this.xi.split(",")[0]);
        this.mb = parseFloat(this.xi.split(",")[1]);
        if (0 > this.Za || isNaN(this.Za)) this.Za = 0;
        if (0 > this.mb || isNaN(this.mb)) this.mb = 0
    };
    d.Ku = function(a) {
        "string" == typeof a ? (this.target = a, this.ra = parseFloat(a.split(",")[0]), this.Ob = parseFloat(a.split(",")[1])) : this.ra = this.target = a;
        this.K || this.init()
    };
    d.GI = function(a) {
        a && (a = a.kf()) && (this.fd = a, this.target = "OBJ")
    };
    d.EI = function(a) {
        this.Cy(a)
    };
    d.HI = function(a) {
        2 == this.F || 3 == this.F || 4 == this.F || 5 == this.F || 6 == this.F ? ("string" == typeof a ? this.target = parseFloat(a.split(",")[0]) : this.target = "" + a + "," + this.Ob, this.ra = this.target) : (this.target = String(a) + "," + this.target.split(",")[1], this.ra = parseFloat(this.target.split(",")[0]), this.Ob = parseFloat(this.target.split(",")[1]));
        this.K || (this.ih(), this.init())
    };
    d.II = function(a) {
        2 == this.F || 3 == this.F || 4 == this.F || 5 == this.F || 6 == this.F ? this.ra = this.target = "string" == typeof a ? parseFloat(a) + "" : this.ra + "," + a : (this.target = this.target.split(",")[0] + "," + String(a), this.ra = parseFloat(this.target.split(",")[0]), this.Ob = parseFloat(this.target.split(",")[1]));
        this.K || (this.ih(), this.init())
    };
    d.Gu = function(a) {
        "string" == typeof a ? (this.L = a, this.na = parseFloat(a.split(",")[0]), this.Rb = parseFloat(a.split(",")[1])) : (this.L = "" + a, this.na = a);
        6 == this.F && (this.value = this.na);
        this.K || (this.ih(), this.init())
    };
    d.xI = function(a) {
        2 == this.F || 3 == this.F || 4 == this.F || 5 == this.F || 6 == this.F ? ("string" == typeof a ? this.L = parseFloat(a) : this.L = "" + a + "," + this.Rb, this.na = this.L) : ("" == this.L && (this.L = "current"), this.L = String(a) + "," + ("current" == this.L ? this.ph : this.L.split(",")[1]), this.na = parseFloat(this.L.split(",")[0]), this.Rb = parseFloat(this.L.split(",")[1]));
        6 == this.F && (this.value = this.na);
        this.K || (this.ih(), this.init())
    };
    d.yI = function(a) {
        2 == this.F || 3 == this.F || 4 == this.F || 5 == this.F || 6 == this.F ? ("string" == typeof a ? this.L = parseFloat(a) : this.L = "" + this.na + "," + a, this.na = this.L) : ("" == this.L && (this.L = "current"), this.L = ("current" == this.L ? this.oh : this.L.split(",")[0]) + "," + String(a), this.na = parseFloat(this.L.split(",")[0]), this.Rb = parseFloat(this.L.split(",")[1]));
        this.K || (this.ih(), this.init())
    };
    d.DB = function(a) {
        this.value = a
    };
    d.CB = function(a) {
        this.F = a
    };
    d.uB = function(a) {
        this.Nf = a
    };
    d.BI = function(a) {
        this.Y = a
    };
    d.xB = function(a, e, f, g, k, c, h, p) {
        "string" == typeof f && (f = b[f], null == f && (f = 0));
        this.F = a;
        this.Y = e;
        this.Nf = f;
        d.Gu.apply(this, [g]);
        d.Ku.apply(this, [k]);
        d.Fu.apply(this, [c]);
        d.HB.apply(this, [h]);
        this.Oc = p;
        this.ih()
    };
    var b = {};
    d.sI = function(a, d) {
        b[a] = d
    };
    g.M = {};
    g = g.M;
    g.iB = function(a) {
        a.P(this.O / (this.duration + this.Za + this.mb))
    };
    g.dI = function(a) {
        a.P(this.O)
    };
    g.$t = function(a) {
        a.P(this.duration)
    };
    g.DH = function(a) {
        a.P(this.Za)
    };
    g.oH = function(a) {
        a.P(this.mb)
    };
    g.PB = function(a) {
        a.H(this.target)
    };
    g.Ru = function(a) {
        a.P(this.value)
    };
    g.ci = function(a) {
        a.Z(this.ci ? 1 : 0)
    }
})();

function yc() {
    return [Cc, Dc, Bc, Gc, Fc, Lc, Ic, T, Nc, Jc, Hc, Kc, Mc, Oc, Ac, Pc, Qc, Ec, Rc, Vc, wd, Sc, $c, xd, Zc, Wc, Tc, Uc, Xc, Yc, Bc.prototype.k.um, Zc.prototype.k.oA, P.prototype.k.fB, Ic.prototype.B.om, Zc.prototype.M.cA, Zc.prototype.M.eA, Ac.prototype.B.AB, Bc.prototype.B.zB, Ac.prototype.M.TB, P.prototype.k.au, Ac.prototype.k.zh, Ac.prototype.B.sB, P.prototype.M["int"], Kc.prototype.M.cB, P.prototype.B.nz, Bc.prototype.B.CallFunction, P.prototype.B.EB, P.prototype.k.xz, Bc.prototype.M.Sp, T.prototype.k.Zz, T.prototype.k.Yz, P.prototype.k.Dz, P.prototype.M.floor, P.prototype.M.random, Ac.prototype.M.qz, xd.prototype.B.Mm, P.prototype.B.UB, xd.prototype.k.lk, P.prototype.k.Lz, Ic.prototype.M.uz, Ic.prototype.M.sz, Ic.prototype.k.Gi, P.prototype.M.cF, Ac.prototype.k.Yt, Ac.prototype.M.pz, Ic.prototype.k.rk, P.prototype.B.NB, T.prototype.B.Hu, T.prototype.B.Fm, Xc.prototype.B.Jm, Ac.prototype.k.eB, Bc.prototype.M.bB, $c.prototype.k.Md, Rc.prototype.M.iA, P.prototype.k.SB, Cc.prototype.B.hB, Ac.prototype.M.Fz, Zc.prototype.k.Az, Zc.prototype.k.Bz, Mc.prototype.B.Pz, Jc.prototype.k.Ei, Mc.prototype.k.ku, Mc.prototype.B.tB, Mc.prototype.M.rz, Ic.prototype.k.Ei, Mc.prototype.M.iq, Mc.prototype.M.jq, Ac.prototype.B.Hu, wd.prototype.k.uu, Ac.prototype.B.JB, wd.prototype.k.lk, wd.prototype.B.Hm, Ac.prototype.k.yz, Fc.prototype.B.AC, Ac.prototype.B.kA, wd.prototype.B.Mm, Fc.prototype.B.BC, Ac.prototype.B.hu, Ac.prototype.B.GB, Fc.prototype.B.CC, Jc.prototype.k.Bu, Wc.prototype.B.lA, Nc.prototype.B.CallFunction, Ac.prototype.B.Hz, Wc.prototype.k.vm, Hc.prototype.k.nu, Ic.prototype.k.qk, Hc.prototype.M.iq, Hc.prototype.M.jq, Hc.prototype.B.BB, P.prototype.M.sG, Jc.prototype.B.uh, Hc.prototype.k.Mz, Jc.prototype.k.cu, Ic.prototype.k.pk, Jc.prototype.B.mz, T.prototype.k.lu, Ic.prototype.B.Gz, T.prototype.k.qu, T.prototype.B.nA, Oc.prototype.B.hq, P.prototype.k.ou, Kc.prototype.B.yB, Vc.prototype.B.gB, Ec.prototype.B.QB, P.prototype.k.Jz, Pc.prototype.B.hq, Ec.prototype.M.Tz, Nc.prototype.M.Kz, Bc.prototype.M.oB, T.prototype.B.lz, T.prototype.k.Yt, T.prototype.M.Bg, Tc.prototype.B.LB, Dc.prototype.B.Ez, Pc.prototype.B.vB, P.prototype.M.$F, Oc.prototype.M.Text, Pc.prototype.B.hu, P.prototype.B.VB, T.prototype.k.mu, T.prototype.k.wu, T.prototype.M.Xe, Qc.prototype.k.aq, Ac.prototype.k.iu, P.prototype.B.IB, Ic.prototype.B.Iz, Ic.prototype.B.Zc, Ac.prototype.B.jA, T.prototype.B.Sz, Rc.prototype.B.OB, P.prototype.B.mB, P.prototype.B.lB, P.prototype.B.nB, P.prototype.B.Qz, P.prototype.k.dB, Qc.prototype.k.aA, Rc.prototype.k.hA, Qc.prototype.k.xu, Dc.prototype.B.Rz, Rc.prototype.k.zz, Cc.prototype.k.$z, Ac.prototype.B.wB, Cc.prototype.B.MB, Qc.prototype.k.$p]
};