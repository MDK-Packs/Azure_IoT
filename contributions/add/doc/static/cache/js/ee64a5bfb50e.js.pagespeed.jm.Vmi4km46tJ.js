!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = "1.11.1", m = function(a, b) {
        return new m.fn.init(a, b)
    }, n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, o = /^-ms-/, p = /-([\da-z])/gi, q = function(a, b) {
        return b.toUpperCase()
    };
    m.fn = m.prototype = {jquery: l,constructor: m,selector: "",length: 0,toArray: function() {
            return d.call(this)
        },get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },pushStack: function(a) {
            var b = m.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },each: function(a, b) {
            return m.each(this, a, b)
        },map: function(a) {
            return this.pushStack(m.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },first: function() {
            return this.eq(0)
        },last: function() {
            return this.eq(-1)
        },eq: function(a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },end: function() {
            return this.prevObject || this.constructor(null)
        },push: f,sort: c.sort,splice: c.splice}, m.extend = m.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e)
                    a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, m.extend({expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),isReady: !0,error: function(a) {
            throw new Error(a)
        },noop: function() {
        },isFunction: function(a) {
            return "function" === m.type(a)
        },isArray: Array.isArray || function(a) {
            return "array" === m.type(a)
        },isWindow: function(a) {
            return null != a && a == a.window
        },isNumeric: function(a) {
            return !m.isArray(a) && a - parseFloat(a) >= 0
        },isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },isPlainObject: function(a) {
            var b;
            if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a))
                return !1;
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (c) {
                return !1
            }
            if (k.ownLast)
                for (b in a)
                    return j.call(a, b);
            for (b in a)
                ;
            return void 0 === b || j.call(a, b)
        },type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },globalEval: function(b) {
            b && m.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },camelCase: function(a) {
            return a.replace(o, "ms-").replace(p, q)
        },nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },each: function(a, b, c) {
            var d, e = 0, f = a.length, g = r(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c), d === !1)
                            break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c), d === !1)
                            break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]), d === !1)
                        break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d === !1)
                        break;
            return a
        },trim: function(a) {
            return null == a ? "" : (a + "").replace(n, "")
        },makeArray: function(a, b) {
            var c = b || [];
            return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        },inArray: function(a, b, c) {
            var d;
            if (b) {
                if (g)
                    return g.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a)
                        return c
            }
            return -1
        },merge: function(a, b) {
            var c = +b.length, d = 0, e = a.length;
            while (c > d)
                a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d])
                    a[e++] = b[d++];
            return a.length = e, a
        },grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },map: function(a, b, c) {
            var d, f = 0, g = a.length, h = r(a), i = [];
            if (h)
                for (; g > f; f++)
                    d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a)
                    d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        },guid: 1,proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function() {
                return a.apply(b || this, c.concat(d.call(arguments)))
            }, e.guid = a.guid = a.guid || m.guid++, e) : void 0
        },now: function() {
            return +new Date
        },support: k}), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });
    function r(a) {
        var b = a.length, c = m.type(a);
        return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var s = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + -new Date, v = a.document, w = 0, x = 0, y = gb(), z = gb(), A = gb(), B = function(a, b) {
            return a === b && (l = !0), 0
        }, C = "undefined", D = 1 << 31, E = {}.hasOwnProperty, F = [], G = F.pop, H = F.push, I = F.push, J = F.slice, K = F.indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (this[b] === a)
                    return b;
            return -1
        }, L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", O = N.replace("w", "w#"), P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]", Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)", R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), S = new RegExp("^" + M + "*," + M + "*"), T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"), V = new RegExp(Q), W = new RegExp("^" + O + "$"), X = {ID: new RegExp("^#(" + N + ")"),CLASS: new RegExp("^\\.(" + N + ")"),TAG: new RegExp("^(" + N.replace("w", "w*") + ")"),ATTR: new RegExp("^" + P),PSEUDO: new RegExp("^" + Q),CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),bool: new RegExp("^(?:" + L + ")$", "i"),needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")}, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, bb = /'|\\/g, cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), db = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        };
        try {
            I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType
        } catch (eb) {
            I = {apply: F.length ? function(a, b) {
                    H.apply(a, J.call(b))
                } : function(a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++])
                        ;
                    a.length = c - 1
                }}
        }
        function fb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || "string" != typeof a)
                return d;
            if (1 !== (k = b.nodeType) && 9 !== k)
                return [];
            if (p && !e) {
                if (f = _.exec(a))
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j), !h || !h.parentNode)
                                return d;
                            if (h.id === j)
                                return d.push(h), d
                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)
                            return d.push(h), d
                    } else {
                        if (f[2])
                            return I.apply(d, b.getElementsByTagName(a)), d;
                        if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName)
                            return I.apply(d, b.getElementsByClassName(j)), d
                    }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 9 === k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--)
                            o[l] = s + qb(o[l]);
                        w = ab.test(a) && ob(b.parentNode) || b, x = o.join(",")
                    }
                    if (x)
                        try {
                            return I.apply(d, w.querySelectorAll(x)), d
                        } catch (y) {
                        }finally {
                            r || b.removeAttribute("id")
                        }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }
        function gb() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }
        function hb(a) {
            return a[u] = !0, a
        }
        function ib(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            }finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }
        function jb(a, b) {
            var c = a.split("|"), e = a.length;
            while (e--)
                d.attrHandle[c[e]] = b
        }
        function kb(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
            if (d)
                return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b)
                        return -1;
            return a ? 1 : -1
        }
        function lb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function mb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function nb(a) {
            return hb(function(b) {
                return b = +b, hb(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function ob(a) {
            return a && typeof a.getElementsByTagName !== C && a
        }
        c = fb.support = {}, f = fb.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fb.setDocument = function(a) {
            var b, e = a ? a.ownerDocument || a : v, g = e.defaultView;
            return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function() {
                m()
            }, !1) : g.attachEvent && g.attachEvent("onunload", function() {
                m()
            })), c.attributes = ib(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ib(function(a) {
                return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
            }), c.getById = ib(function(a) {
                return o.appendChild(a).id = u, !e.getElementsByName || !e.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if (typeof b.getElementById !== C && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++])
                        1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function(a) {
                a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"), a.querySelectorAll(":checked").length || q.push(":checked")
            }), ib(function(a) {
                var b = e.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", Q)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a)
                            return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b)
                    return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b)
                    return l = !0, 0;
                var c, d = 0, f = a.parentNode, g = b.parentNode, h = [a], i = [b];
                if (!f || !g)
                    return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;
                if (f === g)
                    return kb(a, b);
                c = a;
                while (c = c.parentNode)
                    h.unshift(c);
                c = b;
                while (c = c.parentNode)
                    i.unshift(c);
                while (h[d] === i[d])
                    d++;
                return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, e) : n
        }, fb.matches = function(a, b) {
            return fb(a, null, null, b)
        }, fb.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d
                } catch (e) {
                }
            return fb(b, n, null, [a]).length > 0
        }, fb.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fb.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()], f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fb.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fb.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++])
                    b === a[f] && (e = d.push(f));
                while (e--)
                    a.splice(d[e], 1)
            }
            return k = null, a
        }, e = fb.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += e(a)
                } else if (3 === f || 4 === f)
                    return a.nodeValue
            } else
                while (b = a[d++])
                    c += e(b);
            return c
        }, d = fb.selectors = {cacheLength: 50,createPseudo: hb,match: X,attrHandle: {},find: {},relative: {">": {dir: "parentNode",first: !0}," ": {dir: "parentNode"},"+": {dir: "previousSibling",first: !0},"~": {dir: "previousSibling"}},preFilter: {ATTR: function(a) {
                    return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]), a
                },PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }},filter: {TAG: function(a) {
                    var b = a.replace(cb, db).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
                    })
                },ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fb.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                                            return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [w, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)
                                m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b))
                                        break;
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function(a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--)
                            d = K.call(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }},pseudos: {not: hb(function(a) {
                    var b = [], c = [], d = h(a.replace(R, "$1"));
                    return d[u] ? hb(function(a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--)
                            (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop()
                    }
                }),has: hb(function(a) {
                    return function(b) {
                        return fb(a, b).length > 0
                    }
                }),contains: hb(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),lang: hb(function(a) {
                    return W.test(a || "") || fb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(), function(b) {
                        var c;
                        do
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }),target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },root: function(a) {
                    return a === o
                },focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },enabled: function(a) {
                    return a.disabled === !1
                },disabled: function(a) {
                    return a.disabled === !0
                },checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0
                },parent: function(a) {
                    return !d.pseudos.empty(a)
                },header: function(a) {
                    return Z.test(a.nodeName)
                },input: function(a) {
                    return Y.test(a.nodeName)
                },button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },first: nb(function() {
                    return [0]
                }),last: nb(function(a, b) {
                    return [b - 1]
                }),eq: nb(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),even: nb(function(a, b) {
                    for (var c = 0; b > c; c += 2)
                        a.push(c);
                    return a
                }),odd: nb(function(a, b) {
                    for (var c = 1; b > c; c += 2)
                        a.push(c);
                    return a
                }),lt: nb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; )
                        a.push(d);
                    return a
                }),gt: nb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; )
                        a.push(d);
                    return a
                })}}, d.pseudos.nth = d.pseudos.eq;
        for (b in {radio: !0,checkbox: !0,file: !0,password: !0,image: !0})
            d.pseudos[b] = lb(b);
        for (b in {submit: !0,reset: !0})
            d.pseudos[b] = mb(b);
        function pb() {
        }
        pb.prototype = d.filters = d.pseudos, d.setFilters = new pb, g = fb.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k)
                return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({value: c,type: e[0].replace(R, " ")}), h = h.slice(c.length));
                for (g in d.filter)
                    !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({value: c,type: g,matches: e}), h = h.slice(c.length));
                if (!c)
                    break
            }
            return b ? h.length : h ? fb.error(a) : z(a, i).slice(0)
        };
        function qb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)
                d += a[b].value;
            return d
        }
        function rb(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e)
                        return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f)
                                return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g))
                                return !0
                        }
            }
        }
        function sb(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            } : a[0]
        }
        function tb(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)
                fb(a, b[d], c);
            return c
        }
        function ub(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }
        function vb(a, b, c, d, e, f) {
            return d && !d[u] && (d = vb(d)), e && !e[u] && (e = vb(e, f)), hb(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || tb(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : ub(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ub(r, n), d(j, [], h, i), k = j.length;
                    while (k--)
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)
                                (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)
                            (l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else
                    r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r)
            })
        }
        function wb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb(function(a) {
                return a === b
            }, h, !0), l = rb(function(a) {
                return K.call(b, a) > -1
            }, h, !0), m = [function(a, c, d) {
                    return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
                }]; f > i; i++)
                if (c = d.relative[a[i].type])
                    m = [rb(sb(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type])
                                break;
                        return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({value: " " === a[i - 2].type ? "*" : ""})).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a))
                    }
                    m.push(c)
                }
            return sb(m)
        }
        function xb(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function(f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        m = 0;
                        while (o = a[m++])
                            if (o(l, g, h)) {
                                i.push(l);
                                break
                            }
                        k && (w = v)
                    }
                    c && ((l = !o && l) && p--, f && r.push(l))
                }
                if (p += q, c && q !== p) {
                    m = 0;
                    while (o = b[m++])
                        o(r, s, g, h);
                    if (f) {
                        if (p > 0)
                            while (q--)
                                r[q] || s[q] || (s[q] = G.call(i));
                        s = ub(s)
                    }
                    I.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i)
                }
                return k && (w = v, j = t), r
            };
            return c ? hb(f) : f
        }
        return h = fb.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--)
                    f = wb(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xb(e, d)), f.selector = a
            }
            return f
        }, i = fb.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b)
                        return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type])
                        break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qb(j), !a)
                            return I.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ib(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ib(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || jb("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ib(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || jb("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ib(function(a) {
            return null == a.getAttribute("disabled")
        }) || jb(L, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fb
    }(a);
    m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
    var t = m.expr.match.needsContext, u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, v = /^.[^:#\[\.,]*$/;
    function w(a, b, c) {
        if (m.isFunction(b))
            return m.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
        if (b.nodeType)
            return m.grep(a, function(a) {
                return a === b !== c
            });
        if ("string" == typeof b) {
            if (v.test(b))
                return m.filter(b, a, c);
            b = m.filter(b, a)
        }
        return m.grep(a, function(a) {
            return m.inArray(a, b) >= 0 !== c
        })
    }
    m.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, m.fn.extend({find: function(a) {
            var b, c = [], d = this, e = d.length;
            if ("string" != typeof a)
                return this.pushStack(m(a).filter(function() {
                    for (b = 0; e > b; b++)
                        if (m.contains(d[b], this))
                            return !0
                }));
            for (b = 0; e > b; b++)
                m.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },filter: function(a) {
            return this.pushStack(w(this, a || [], !1))
        },not: function(a) {
            return this.pushStack(w(this, a || [], !0))
        },is: function(a) {
            return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length
        }});
    var x, y = a.document, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = m.fn.init = function(a, b) {
        var c, d;
        if (!a)
            return this;
        if ("string" == typeof a) {
            if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b)
                return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b))
                    for (c in b)
                        m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            if (d = y.getElementById(c[2]), d && d.parentNode) {
                if (d.id !== c[2])
                    return x.find(a);
                this.length = 1, this[0] = d
            }
            return this.context = y, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this))
    };
    A.prototype = m.fn, x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/, C = {children: !0,contents: !0,next: !0,prev: !0};
    m.extend({dir: function(a, b, c) {
            var d = [], e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c)))
                1 === e.nodeType && d.push(e), e = e[b];
            return d
        },sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c
        }}), m.fn.extend({has: function(a) {
            var b, c = m(a, this), d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (m.contains(this, c[b]))
                        return !0
            })
        },closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? m.unique(f) : f)
        },index: function(a) {
            return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },add: function(a, b) {
            return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))
        },addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }});
    function D(a, b) {
        do
            a = a[b];
        while (a && 1 !== a.nodeType);
        return a
    }
    m.each({parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },parents: function(a) {
            return m.dir(a, "parentNode")
        },parentsUntil: function(a, b, c) {
            return m.dir(a, "parentNode", c)
        },next: function(a) {
            return D(a, "nextSibling")
        },prev: function(a) {
            return D(a, "previousSibling")
        },nextAll: function(a) {
            return m.dir(a, "nextSibling")
        },prevAll: function(a) {
            return m.dir(a, "previousSibling")
        },nextUntil: function(a, b, c) {
            return m.dir(a, "nextSibling", c)
        },prevUntil: function(a, b, c) {
            return m.dir(a, "previousSibling", c)
        },siblings: function(a) {
            return m.sibling((a.parentNode || {}).firstChild, a)
        },children: function(a) {
            return m.sibling(a.firstChild)
        },contents: function(a) {
            return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes)
        }}, function(a, b) {
        m.fn[a] = function(c, d) {
            var e = m.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var E = /\S+/g, F = {};
    function G(a) {
        var b = F[a] = {};
        return m.each(a.match(E) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    m.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function(l) {
            for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)
                if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                    c = !1;
                    break
                }
            b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
        }, k = {add: function() {
                if (h) {
                    var d = h.length;
                    !function f(b) {
                        m.each(b, function(b, c) {
                            var d = m.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                        })
                    }(arguments), b ? e = h.length : c && (g = d, j(c))
                }
                return this
            },remove: function() {
                return h && m.each(arguments, function(a, c) {
                    var d;
                    while ((d = m.inArray(c, h, d)) > -1)
                        h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
                }), this
            },has: function(a) {
                return a ? m.inArray(a, h) > -1 : !(!h || !h.length)
            },empty: function() {
                return h = [], e = 0, this
            },disable: function() {
                return h = i = c = void 0, this
            },disabled: function() {
                return !h
            },lock: function() {
                return i = void 0, c || k.disable(), this
            },locked: function() {
                return !i
            },fireWith: function(a, c) {
                return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
            },fire: function() {
                return k.fireWith(this, arguments), this
            },fired: function() {
                return !!d
            }};
        return k
    }, m.extend({Deferred: function(a) {
            var b = [["resolve", "done", m.Callbacks("once memory"), "resolved"], ["reject", "fail", m.Callbacks("once memory"), "rejected"], ["notify", "progress", m.Callbacks("memory")]], c = "pending", d = {state: function() {
                    return c
                },always: function() {
                    return e.done(arguments).fail(arguments), this
                },then: function() {
                    var a = arguments;
                    return m.Deferred(function(c) {
                        m.each(b, function(b, f) {
                            var g = m.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }), a = null
                    }).promise()
                },promise: function(a) {
                    return null != a ? m.extend(a, d) : d
                }}, e = {};
            return d.pipe = d.then, m.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },when: function(a) {
            var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && m.isFunction(a.promise) ? e : 0, g = 1 === f ? a : m.Deferred(), h = function(a, b, c) {
                return function(e) {
                    b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                }
            }, i, j, k;
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)
                    c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }});
    var H;
    m.fn.ready = function(a) {
        return m.ready.promise().done(a), this
    }, m.extend({isReady: !1,readyWait: 1,holdReady: function(a) {
            a ? m.readyWait++ : m.ready(!0)
        },ready: function(a) {
            if (a === !0 ? !--m.readyWait : !m.isReady) {
                if (!y.body)
                    return setTimeout(m.ready);
                m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")))
            }
        }});
    function I() {
        y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J))
    }
    function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready())
    }
    m.ready.promise = function(b) {
        if (!H)
            if (H = m.Deferred(), "complete" === y.readyState)
                setTimeout(m.ready);
            else if (y.addEventListener)
                y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1);
            else {
                y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
                var c = !1;
                try {
                    c = null == a.frameElement && y.documentElement
                } catch (d) {
                }
                c && c.doScroll && !function e() {
                    if (!m.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (a) {
                            return setTimeout(e, 50)
                        }
                        I(), m.ready()
                    }
                }()
            }
        return H.promise(b)
    };
    var K = "undefined", L;
    for (L in m(k))
        break;
    k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function() {
        var a, b, c, d;
        c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
    }), function() {
        var a = y.createElement("div");
        if (null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                k.deleteExpando = !1
            }
        }
        a = null
    }(), m.acceptData = function(a) {
        var b = m.noData[(a.nodeName + " ").toLowerCase()], c = +a.nodeType || 1;
        return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
    };
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, N = /([A-Z])/g;
    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c
                } catch (e) {
                }
                m.data(a, b, c)
            } else
                c = void 0
        }
        return c
    }
    function P(a) {
        var b;
        for (b in a)
            if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b)
                return !1;
        return !0
    }
    function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando, i = a.nodeType, j = i ? m.cache : a, k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b)
                return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : {toJSON: m.noop}), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f
        }
    }
    function R(a, b, c) {
        if (m.acceptData(a)) {
            var d, e, f = a.nodeType, g = f ? m.cache : a, h = f ? a[m.expando] : m.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--)
                        delete d[b[e]];
                    if (c ? !P(d) : !m.isEmptyObject(d))
                        return
                }
                (c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }
    m.extend({cache: {},noData: {"applet ": !0,"embed ": !0,"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData: function(a) {
            return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a)
        },data: function(a, b, c) {
            return Q(a, b, c)
        },removeData: function(a, b) {
            return R(a, b)
        },_data: function(a, b, c) {
            return Q(a, b, c, !0)
        },_removeData: function(a, b) {
            return R(a, b, !0)
        }}), m.fn.extend({data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--)
                        g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
                    m._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                m.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                m.data(this, a, b)
            }) : f ? O(f, a, m.data(f, a)) : void 0
        },removeData: function(a) {
            return this.each(function() {
                m.removeData(this, a)
            })
        }}), m.extend({queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0
        },dequeue: function(a, b) {
            b = b || "fx";
            var c = m.queue(a, b), d = c.length, e = c.shift(), f = m._queueHooks(a, b), g = function() {
                m.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },_queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return m._data(a, c) || m._data(a, c, {empty: m.Callbacks("once memory").add(function() {
                    m._removeData(a, b + "queue"), m._removeData(a, c)
                })})
        }}), m.fn.extend({queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
            })
        },dequeue: function(a) {
            return this.each(function() {
                m.dequeue(this, a)
            })
        },clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },promise: function(a, b) {
            var c, d = 1, e = m.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--)
                c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }});
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = ["Top", "Right", "Bottom", "Left"], U = function(a, b) {
        return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
    }, V = m.access = function(a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === m.type(c)) {
            e = !0;
            for (h in c)
                m.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
            return j.call(m(a), c)
        })), b))
            for (; i > h; h++)
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }, W = /^(?:checkbox|radio)$/i;
    !function() {
        var a = y.createElement("input"), b = y.createElement("div"), c = y.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() {
            k.noCloneEvent = !1
        }), b.cloneNode(!0).click()), null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                k.deleteExpando = !1
            }
        }
    }(), function() {
        var b, c, d = y.createElement("div");
        for (b in {submit: !0,change: !0,focusin: !0})
            c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    }();
    var X = /^(?:input|select|textarea)$/i, Y = /^key/, Z = /^(?:mouse|pointer|contextmenu)|click/, $ = /^(?:focusinfocus|focusoutblur)$/, _ = /^([^.]*)(?:\.(.+)|)$/;
    function ab() {
        return !0
    }
    function bb() {
        return !1
    }
    function cb() {
        try {
            return y.activeElement
        } catch (a) {
        }
    }
    m.event = {global: {},add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                    return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(E) || [""], h = b.length;
                while (h--)
                    f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({type: o,origType: q,data: d,handler: c,guid: c.guid,selector: e,needsContext: e && m.expr.match.needsContext.test(e),namespace: p.join(".")}, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);
                a = null
            }
        },remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--)
                    if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
                        while (f--)
                            g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o])
                    } else
                        for (o in k)
                            m.event.remove(a, o + b[j], c, d, !0);
                m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"))
            }
        },trigger: function(b, c, d, e) {
            var f, g, h, i, k, l, n, o = [d || y], p = j.call(b, "type") ? b.type : b, q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !m.isWindow(d)) {
                    for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode)
                        o.push(h), l = h;
                    l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
                }
                n = 0;
                while ((h = o[n++]) && !b.isPropagationStopped())
                    b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                    l = d[g], l && (d[g] = null), m.event.triggered = p;
                    try {
                        d[p]()
                    } catch (r) {
                    }
                    m.event.triggered = void 0, l && (d[g] = l)
                }
                return b.result
            }
        },dispatch: function(a) {
            a = m.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (m._data(this, "events") || {})[a.type] || [], k = m.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = m.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())
                        (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [], f = 0; h > f; f++)
                            d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d);
                        e.length && g.push({elem: i,handlers: e})
                    }
            return h < b.length && g.push({elem: this,handlers: b.slice(h)}), g
        },fix: function(a) {
            if (a[m.expando])
                return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;
            while (b--)
                c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        },props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks: {},keyHooks: {props: "char charCode key keyCode".split(" "),filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }},mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter: function(a, b) {
                var c, d, e, f = b.button, g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }},special: {load: {noBubble: !0},focus: {trigger: function() {
                    if (this !== cb() && this.focus)
                        try {
                            return this.focus(), !1
                        } catch (a) {
                        }
                },delegateType: "focusin"},blur: {trigger: function() {
                    return this === cb() && this.blur ? (this.blur(), !1) : void 0
                },delegateType: "focusout"},click: {trigger: function() {
                    return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },_default: function(a) {
                    return m.nodeName(a.target, "a")
                }},beforeunload: {postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }}},simulate: function(a, b, c, d) {
            var e = m.extend(new m.Event, c, {type: a,isSimulated: !0,originalEvent: {}});
            d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }}, m.removeEvent = y.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c))
    }, m.Event = function(a, b) {
        return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ab : bb) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void (this[m.expando] = !0)) : new m.Event(a, b)
    }, m.Event.prototype = {isDefaultPrevented: bb,isPropagationStopped: bb,isImmediatePropagationStopped: bb,preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ab, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ab, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ab, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }}, m.each({mouseenter: "mouseover",mouseleave: "mouseout",pointerenter: "pointerover",pointerleave: "pointerout"}, function(a, b) {
        m.event.special[a] = {delegateType: b,bindType: b,handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }}
    }), k.submitBubbles || (m.event.special.submit = {setup: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target, c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
                c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }), m._data(c, "submitBubbles", !0))
            })
        },postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0))
        },teardown: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit")
        }}), k.changeBubbles || (m.event.special.change = {setup: function() {
            return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), m.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0)
            })), !1) : void m.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0)
                }), m._data(b, "changeBubbles", !0))
            })
        },handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },teardown: function() {
            return m.event.remove(this, "._change"), !X.test(this.nodeName)
        }}), k.focusinBubbles || m.each({focus: "focusin",blur: "focusout"}, function(a, b) {
        var c = function(a) {
            m.event.simulate(b, a.target, m.event.fix(a), !0)
        };
        m.event.special[b] = {setup: function() {
                var d = this.ownerDocument || this, e = m._data(d, b);
                e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1)
            },teardown: function() {
                var d = this.ownerDocument || this, e = m._data(d, b) - 1;
                e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b))
            }}
    }), m.fn.extend({on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a)
                    this.on(f, b, c, a[f], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)
                d = bb;
            else if (!d)
                return this;
            return 1 === e && (g = d, d = function(a) {
                return m().off(a), g.apply(this, arguments)
            }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function() {
                m.event.add(this, a, d, c, b)
            })
        },one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)
                return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = bb), this.each(function() {
                m.event.remove(this, a, c, b)
            })
        },trigger: function(a, b) {
            return this.each(function() {
                m.event.trigger(a, b, this)
            })
        },triggerHandler: function(a, b) {
            var c = this[0];
            return c ? m.event.trigger(a, b, c, !0) : void 0
        }});
    function db(a) {
        var b = eb.split("|"), c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length)
                c.createElement(b.pop());
        return c
    }
    var eb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", fb = / jQuery\d+="(?:null|\d+)"/g, gb = new RegExp("<(?:" + eb + ")[\\s/>]", "i"), hb = /^\s+/, ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, jb = /<([\w:]+)/, kb = /<tbody/i, lb = /<|&#?\w+;/, mb = /<(?:script|style|link)/i, nb = /checked\s*(?:[^=]|=\s*.checked.)/i, ob = /^$|\/(?:java|ecma)script/i, pb = /^true\/(.*)/, qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, rb = {option: [1, "<select multiple='multiple'>", "</select>"],legend: [1, "<fieldset>", "</fieldset>"],area: [1, "<map>", "</map>"],param: [1, "<object>", "</object>"],thead: [1, "<table>", "</table>"],tr: [2, "<table><tbody>", "</tbody></table>"],col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],_default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]}, sb = db(y), tb = sb.appendChild(y.createElement("div"));
    rb.optgroup = rb.option, rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead, rb.th = rb.td;
    function ub(a, b) {
        var c, d, e = 0, f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)
                !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b));
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
    }
    function vb(a) {
        W.test(a.type) && (a.defaultChecked = a.checked)
    }
    function wb(a, b) {
        return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function xb(a) {
        return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a
    }
    function yb(a) {
        var b = pb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }
    function zb(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++)
            m._data(c, "globalEval", !b || m._data(b[d], "globalEval"))
    }
    function Ab(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c, d, e, f = m._data(a), g = m._data(b, f), h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++)
                        m.event.add(b, c, h[c][d])
            }
            g.data && (g.data = m.extend({}, g.data))
        }
    }
    function Bb(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
                e = m._data(b);
                for (d in e.events)
                    m.removeEvent(b, d, e.handle);
                b.removeAttribute(m.expando)
            }
            "script" === c && b.text !== a.text ? (xb(b).text = a.text, yb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    m.extend({clone: function(a, b, c) {
            var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
            if (k.html5Clone || m.isXMLDoc(a) || !gb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (tb.innerHTML = a.outerHTML, tb.removeChild(f = tb.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))
                for (d = ub(f), h = ub(a), g = 0; null != (e = h[g]); ++g)
                    d[g] && Bb(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ub(a), d = d || ub(f), g = 0; null != (e = h[g]); g++)
                        Ab(e, d[g]);
                else
                    Ab(a, f);
            return d = ub(f, "script"), d.length > 0 && zb(d, !i && ub(a, "script")), d = h = e = null, f
        },buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0; n > q; q++)
                if (f = a[q], f || 0 === f)
                    if ("object" === m.type(f))
                        m.merge(p, f.nodeType ? [f] : f);
                    else if (lb.test(f)) {
                        h = h || o.appendChild(b.createElement("div")), i = (jb.exec(f) || ["", ""])[1].toLowerCase(), l = rb[i] || rb._default, h.innerHTML = l[1] + f.replace(ib, "<$1></$2>") + l[2], e = l[0];
                        while (e--)
                            h = h.lastChild;
                        if (!k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])), !k.tbody) {
                            f = "table" !== i || kb.test(f) ? "<table>" !== l[1] || kb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
                            while (e--)
                                m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                        }
                        m.merge(p, h.childNodes), h.textContent = "";
                        while (h.firstChild)
                            h.removeChild(h.firstChild);
                        h = o.lastChild
                    } else
                        p.push(b.createTextNode(f));
            h && o.removeChild(h), k.appendChecked || m.grep(ub(p, "input"), vb), q = 0;
            while (f = p[q++])
                if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ub(o.appendChild(f), "script"), g && zb(h), c)) {
                    e = 0;
                    while (f = h[e++])
                        ob.test(f.type || "") && c.push(f)
                }
            return h = null, o
        },cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++)
                if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events)
                            n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f))
                }
        }}), m.fn.extend({text: function(a) {
            return V(this, function(a) {
                return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))
            }, null, a, arguments.length)
        },append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.appendChild(a)
                }
            })
        },prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },remove: function(a, b) {
            for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
                b || 1 !== c.nodeType || m.cleanData(ub(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && zb(ub(c, "script")), c.parentNode.removeChild(c));
            return this
        },empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && m.cleanData(ub(a, !1));
                while (a.firstChild)
                    a.removeChild(a.firstChild);
                a.options && m.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return m.clone(this, a, b)
            })
        },html: function(a) {
            return V(this, function(a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a)
                    return 1 === b.nodeType ? b.innerHTML.replace(fb, "") : void 0;
                if (!("string" != typeof a || mb.test(a) || !k.htmlSerialize && gb.test(a) || !k.leadingWhitespace && hb.test(a) || rb[(jb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(ib, "<$1></$2>");
                    try {
                        for (; d > c; c++)
                            b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ub(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {
                    }
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, m.cleanData(ub(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },detach: function(a) {
            return this.remove(a, !0)
        },domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, n = this, o = l - 1, p = a[0], q = m.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && nb.test(p))
                return this.each(function(c) {
                    var d = n.eq(c);
                    q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
                });
            if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                for (g = m.map(ub(i, "script"), xb), f = g.length; l > j; j++)
                    d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ub(d, "script"))), b.call(this[j], d, j);
                if (f)
                    for (h = g[g.length - 1].ownerDocument, m.map(g, yb), j = 0; f > j; j++)
                        d = g[j], ob.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qb, "")));
                i = c = null
            }
            return this
        }}), m.each({appendTo: "append",prependTo: "prepend",insertBefore: "before",insertAfter: "after",replaceAll: "replaceWith"}, function(a, b) {
        m.fn[a] = function(a) {
            for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++)
                c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Cb, Db = {};
    function Eb(b, c) {
        var d, e = m(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
        return e.detach(), f
    }
    function Fb(a) {
        var b = y, c = Db[a];
        return c || (c = Eb(a, b), "none" !== c && c || (Cb = (Cb || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Cb[0].contentWindow || Cb[0].contentDocument).document, b.write(), b.close(), c = Eb(a, b), Cb.detach()), Db[a] = c), c
    }
    !function() {
        var a;
        k.shrinkWrapBlocks = function() {
            if (null != a)
                return a;
            a = !1;
            var b, c, d;
            return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
        }
    }();
    var Gb = /^margin/, Hb = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"), Ib, Jb, Kb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ib = function(a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    }, Jb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Hb.test(g) && Gb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
    }) : y.documentElement.currentStyle && (Ib = function(a) {
        return a.currentStyle
    }, Jb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Hb.test(g) && !Kb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });
    function Lb(a, b) {
        return {get: function() {
                var c = a();
                if (null != c)
                    return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }}
    }
    !function() {
        var b, c, d, e, f, g, h;
        if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
            c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, {reliableHiddenOffsets: function() {
                    return null == g && i(), g
                },boxSizingReliable: function() {
                    return null == f && i(), f
                },pixelPosition: function() {
                    return null == e && i(), e
                },reliableMarginRight: function() {
                    return null == h && i(), h
                }});
            function i() {
                var b, c, d, i;
                c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || {width: "4px"}).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d))
            }
        }
    }(), m.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b)
            g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)
            a.style[f] = g[f];
        return e
    };
    var Mb = /alpha\([^)]*\)/i, Nb = /opacity\s*=\s*([^)]*)/, Ob = /^(none|table(?!-c[ea]).+)/, Pb = new RegExp("^(" + S + ")(.*)$", "i"), Qb = new RegExp("^([+-])=(" + S + ")", "i"), Rb = {position: "absolute",visibility: "hidden",display: "block"}, Sb = {letterSpacing: "0",fontWeight: "400"}, Tb = ["Webkit", "O", "Moz", "ms"];
    function Ub(a, b) {
        if (b in a)
            return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = Tb.length;
        while (e--)
            if (b = Tb[e] + c, b in a)
                return b;
        return d
    }
    function Vb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fb(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
        for (g = 0; h > g; g++)
            d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    function Wb(a, b, c) {
        var d = Pb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function Xb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
        return g
    }
    function Yb(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Ib(a), g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Jb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Hb.test(e))
                return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Xb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    m.extend({cssHooks: {opacity: {get: function(a, b) {
                    if (b) {
                        var c = Jb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }}},cssNumber: {columnCount: !0,fillOpacity: !0,flexGrow: !0,flexShrink: !0,fontWeight: !0,lineHeight: !0,opacity: !0,order: !0,orphans: !0,widows: !0,zIndex: !0,zoom: !0},cssProps: {"float": k.cssFloat ? "cssFloat" : "styleFloat"},style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = m.camelCase(b), i = a.style;
                if (b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c)
                    return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = Qb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d)))))
                    try {
                        i[b] = c
                    } catch (j) {
                    }
            }
        },css: function(a, b, c, d) {
            var e, f, g, h = m.camelCase(b);
            return b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Jb(a, b, d)), "normal" === f && b in Sb && (f = Sb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f
        }}), m.each(["height", "width"], function(a, b) {
        m.cssHooks[b] = {get: function(a, c, d) {
                return c ? Ob.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Rb, function() {
                    return Yb(a, b, d)
                }) : Yb(a, b, d) : void 0
            },set: function(a, c, d) {
                var e = d && Ib(a);
                return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0)
            }}
    }), k.opacity || (m.cssHooks.opacity = {get: function(a, b) {
            return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },set: function(a, b) {
            var c = a.style, d = a.currentStyle, e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Mb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + " " + e)
        }}), m.cssHooks.marginRight = Lb(k.reliableMarginRight, function(a, b) {
        return b ? m.swap(a, {display: "inline-block"}, Jb, [a, "marginRight"]) : void 0
    }), m.each({margin: "",padding: "",border: "Width"}, function(a, b) {
        m.cssHooks[a + b] = {expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                    e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }}, Gb.test(a) || (m.cssHooks[a + b].set = Wb)
    }), m.fn.extend({css: function(a, b) {
            return V(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (m.isArray(b)) {
                    for (d = Ib(a), e = b.length; e > g; g++)
                        f[b[g]] = m.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
            }, a, b, arguments.length > 1)
        },show: function() {
            return Vb(this, !0)
        },hide: function() {
            return Vb(this)
        },toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                U(this) ? m(this).show() : m(this).hide()
            })
        }});
    function Zb(a, b, c, d, e) {
        return new Zb.prototype.init(a, b, c, d, e)
    }
    m.Tween = Zb, Zb.prototype = {constructor: Zb,init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px")
        },cur: function() {
            var a = Zb.propHooks[this.prop];
            return a && a.get ? a.get(this) : Zb.propHooks._default.get(this)
        },run: function(a) {
            var b, c = Zb.propHooks[this.prop];
            return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Zb.propHooks._default.set(this), this
        }}, Zb.prototype.init.prototype = Zb.prototype, Zb.propHooks = {_default: {get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },set: function(a) {
                m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }}}, Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = {set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }}, m.easing = {linear: function(a) {
            return a
        },swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }}, m.fx = Zb.prototype.init, m.fx.step = {};
    var $b, _b, ac = /^(?:toggle|show|hide)$/, bc = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"), cc = /queueHooks$/, dc = [ic], ec = {"*": [function(a, b) {
                var c = this.createTween(a, b), d = c.cur(), e = bc.exec(b), f = e && e[3] || (m.cssNumber[a] ? "" : "px"), g = (m.cssNumber[a] || "px" !== f && +d) && bc.exec(m.css(c.elem, a)), h = 1, i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do
                        h = h || ".5", g /= h, m.style(c.elem, a, g + f);
                    while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]};
    function fc() {
        return setTimeout(function() {
            $b = void 0
        }), $b = m.now()
    }
    function gc(a, b) {
        var c, d = {height: a}, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b)
            c = T[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }
    function hc(a, b, c) {
        for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function ic(a, b, c) {
        var d, e, f, g, h, i, j, l, n = this, o = {}, p = a.style, q = a.nodeType && U(a), r = m._data(a, "fxshow");
        c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, n.always(function() {
            n.always(function() {
                h.unqueued--, m.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fb(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fb(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function() {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], ac.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d])
                        continue;
                    q = !0
                }
                o[d] = r && r[d] || m.style(a, d)
            } else
                j = void 0;
        if (m.isEmptyObject(o))
            "inline" === ("none" === j ? Fb(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function() {
                m(a).hide()
            }), n.done(function() {
                var b;
                m._removeData(a, "fxshow");
                for (b in o)
                    m.style(a, b, o[b])
            });
            for (d in o)
                g = hc(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function jc(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c], b[c] = e)
            } else
                b[d] = e
    }
    function kc(a, b, c) {
        var d, e, f = 0, g = dc.length, h = m.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (e)
                return !1;
            for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({elem: a,props: m.extend({}, b),opts: m.extend(!0, {specialEasing: {}}, c),originalProperties: b,originalOptions: c,startTime: $b || fc(),duration: c.duration,tweens: [],createTween: function(b, c) {
                var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d
            },stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; d > c; c++)
                    j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
            }}), k = j.props;
        for (jc(k, j.opts.specialEasing); g > f; f++)
            if (d = dc[f].call(j, a, k, j.opts))
                return d;
        return m.map(k, hc, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, {elem: a,anim: j,queue: j.opts.queue})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    m.Animation = m.extend(kc, {tweener: function(a, b) {
            m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b)
        },prefilter: function(a, b) {
            b ? dc.unshift(a) : dc.push(a)
        }}), m.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? m.extend({}, a) : {complete: c || !c && b || m.isFunction(a) && a,duration: a,easing: c && b || b && !m.isFunction(b) && b};
        return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue)
        }, d
    }, m.fn.extend({fadeTo: function(a, b, c, d) {
            return this.filter(U).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        },animate: function(a, b, c, d) {
            var e = m.isEmptyObject(a), f = m.speed(b, c, d), g = function() {
                var b = kc(this, m.extend({}, a), f);
                (e || m._data(this, "finish")) && b.stop(!0)
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                var b = !0, e = null != a && a + "queueHooks", f = m.timers, g = m._data(this);
                if (e)
                    g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g)
                        g[e] && g[e].stop && cc.test(e) && d(g[e]);
                for (e = f.length; e--; )
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && m.dequeue(this, a)
            })
        },finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = m._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = m.timers, g = d ? d.length : 0;
                for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--; )
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }}), m.each(["toggle", "show", "hide"], function(a, b) {
        var c = m.fn[b];
        m.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gc(b, !0), a, d, e)
        }
    }), m.each({slideDown: gc("show"),slideUp: gc("hide"),slideToggle: gc("toggle"),fadeIn: {opacity: "show"},fadeOut: {opacity: "hide"},fadeToggle: {opacity: "toggle"}}, function(a, b) {
        m.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), m.timers = [], m.fx.tick = function() {
        var a, b = m.timers, c = 0;
        for ($b = m.now(); c < b.length; c++)
            a = b[c], a() || b[c] !== a || b.splice(c--, 1);
        b.length || m.fx.stop(), $b = void 0
    }, m.fx.timer = function(a) {
        m.timers.push(a), a() ? m.fx.start() : m.timers.pop()
    }, m.fx.interval = 13, m.fx.start = function() {
        _b || (_b = setInterval(m.fx.tick, m.fx.interval))
    }, m.fx.stop = function() {
        clearInterval(_b), _b = null
    }, m.fx.speeds = {slow: 600,fast: 200,_default: 400}, m.fn.delay = function(a, b) {
        return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d)
            }
        })
    }, function() {
        var a, b, c, d, e;
        b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value
    }();
    var lc = /\r/g;
    m.fn.extend({val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)
                    return d = m.isFunction(a), this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function(a) {
                            return null == a ? "" : a + ""
                        })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                if (e)
                    return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lc, "") : null == c ? "" : c)
            }
        }}), m.extend({valHooks: {option: {get: function(a) {
                    var b = m.find.attr(a, "value");
                    return null != b ? b : m.trim(m.text(a))
                }},select: {get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                            if (b = m(c).val(), f)
                                return b;
                            g.push(b)
                        }
                    return g
                },set: function(a, b) {
                    var c, d, e = a.options, f = m.makeArray(b), g = e.length;
                    while (g--)
                        if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0)
                            try {
                                d.selected = c = !0
                            } catch (h) {
                                d.scrollHeight
                            }
                        else
                            d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }}}}), m.each(["radio", "checkbox"], function() {
        m.valHooks[this] = {set: function(a, b) {
                return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0
            }}, k.checkOn || (m.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var mc, nc, oc = m.expr.attrHandle, pc = /^(?:checked|selected)$/i, qc = k.getSetAttribute, rc = k.input;
    m.fn.extend({attr: function(a, b) {
            return V(this, m.attr, a, b, arguments.length > 1)
        },removeAttr: function(a) {
            return this.each(function() {
                m.removeAttr(this, a)
            })
        }}), m.extend({attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f)
                return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b))
        },removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType)
                while (c = f[e++])
                    d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rc && qc || !pc.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qc ? c : d)
        },attrHooks: {type: {set: function(a, b) {
                    if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }}}}), nc = {set: function(a, b, c) {
            return b === !1 ? m.removeAttr(a, c) : rc && qc || !pc.test(c) ? a.setAttribute(!qc && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c
        }}, m.each(m.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = oc[b] || m.find.attr;
        oc[b] = rc && qc || !pc.test(b) ? function(a, b, d) {
            var e, f;
            return d || (f = oc[b], oc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, oc[b] = f), e
        } : function(a, b, c) {
            return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), rc && qc || (m.attrHooks.value = {set: function(a, b, c) {
            return m.nodeName(a, "input") ? void (a.defaultValue = b) : mc && mc.set(a, b, c)
        }}), qc || (mc = {set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }}, oc.id = oc.name = oc.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, m.valHooks.button = {get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },set: mc.set}, m.attrHooks.contenteditable = {set: function(a, b, c) {
            mc.set(a, "" === b ? !1 : b, c)
        }}, m.each(["width", "height"], function(a, b) {
        m.attrHooks[b] = {set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }}
    })), k.style || (m.attrHooks.style = {get: function(a) {
            return a.style.cssText || void 0
        },set: function(a, b) {
            return a.style.cssText = b + ""
        }});
    var sc = /^(?:input|select|textarea|button|object)$/i, tc = /^(?:a|area)$/i;
    m.fn.extend({prop: function(a, b) {
            return V(this, m.prop, a, b, arguments.length > 1)
        },removeProp: function(a) {
            return a = m.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {
                }
            })
        }}), m.extend({propFix: {"for": "htmlFor","class": "className"},prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g)
                return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },propHooks: {tabIndex: {get: function(a) {
                    var b = m.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : -1
                }}}}), k.hrefNormalized || m.each(["href", "src"], function(a, b) {
        m.propHooks[b] = {get: function(a) {
                return a.getAttribute(b, 4)
            }}
    }), k.optSelected || (m.propHooks.selected = {get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }}), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        m.propFix[this.toLowerCase()] = this
    }), k.enctype || (m.propFix.enctype = "encoding");
    var uc = /[\t\r\n\f]/g;
    m.fn.extend({addClass: function(a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a;
            if (m.isFunction(a))
                return this.each(function(b) {
                    m(this).addClass(a.call(this, b, this.className))
                });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : " ")) {
                        f = 0;
                        while (e = b[f++])
                            d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = m.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },removeClass: function(a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a;
            if (m.isFunction(a))
                return this.each(function(b) {
                    m(this).removeClass(a.call(this, b, this.className))
                });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0)
                                d = d.replace(" " + e + " ", " ");
                        g = a ? m.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function(c) {
                m(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c) {
                    var b, d = 0, e = m(this), f = a.match(E) || [];
                    while (b = f[d++])
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else
                    (c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "")
            })
        },hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(uc, " ").indexOf(b) >= 0)
                    return !0;
            return !1
        }}), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        m.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), m.fn.extend({hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },unbind: function(a, b) {
            return this.off(a, null, b)
        },delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }});
    var vc = m.now(), wc = /\?/, xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse)
            return a.JSON.parse(b + "");
        var c, d = null, e = m.trim(b + "");
        return e && !m.trim(e.replace(xc, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
    }, m.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b)
            return null;
        try {
            a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c
    };
    var yc, zc, Ac = /#.*$/, Bc = /([?&])_=[^&]*/, Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ec = /^(?:GET|HEAD)$/, Fc = /^\/\//, Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Hc = {}, Ic = {}, Jc = "*/".concat("*");
    try {
        zc = location.href
    } catch (Kc) {
        zc = y.createElement("a"), zc.href = "", zc = zc.href
    }
    yc = Gc.exec(zc.toLowerCase()) || [];
    function Lc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (m.isFunction(c))
                while (d = f[e++])
                    "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function Mc(a, b, c, d) {
        var e = {}, f = a === Ic;
        function g(h) {
            var i;
            return e[h] = !0, m.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }
    function Nc(a, b) {
        var c, d, e = m.ajaxSettings.flatOptions || {};
        for (d in b)
            void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && m.extend(!0, a, c), a
    }
    function Oc(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0])
            i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0] in c)
            f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }
    function Pc(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f], !g)
                        for (e in j)
                            if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"])
                            b = g(b);
                        else
                            try {
                                b = g(b)
                            } catch (l) {
                                return {state: "parsererror",error: g ? l : "No conversion from " + i + " to " + f}
                            }
                }
        return {state: "success",data: b}
    }
    m.extend({active: 0,lastModified: {},etag: {},ajaxSettings: {url: zc,type: "GET",isLocal: Dc.test(yc[1]),global: !0,processData: !0,async: !0,contentType: "application/x-www-form-urlencoded; charset=UTF-8",accepts: {"*": Jc,text: "text/plain",html: "text/html",xml: "application/xml, text/xml",json: "application/json, text/javascript"},contents: {xml: /xml/,html: /html/,json: /json/},responseFields: {xml: "responseXML",text: "responseText",json: "responseJSON"},converters: {"* text": String,"text html": !0,"text json": m.parseJSON,"text xml": m.parseXML},flatOptions: {url: !0,context: !0}},ajaxSetup: function(a, b) {
            return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a)
        },ajaxPrefilter: Lc(Hc),ajaxTransport: Lc(Ic),ajax: function(a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b), l = k.context || k, n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event, o = m.Deferred(), p = m.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {readyState: 0,getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!j) {
                            j = {};
                            while (b = Cc.exec(f))
                                j[b[1].toLowerCase()] = b[2]
                        }
                        b = j[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },getAllResponseHeaders: function() {
                    return 2 === t ? f : null
                },setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a, r[a] = b), this
                },overrideMimeType: function(a) {
                    return t || (k.mimeType = a), this
                },statusCode: function(a) {
                    var b;
                    if (a)
                        if (2 > t)
                            for (b in a)
                                q[b] = [q[b], a[b]];
                        else
                            v.always(a[v.status]);
                    return this
                },abort: function(a) {
                    var b = a || u;
                    return i && i.abort(b), x(0, b), this
                }};
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zc) + "").replace(Ac, "").replace(Fc, yc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yc[1] && c[2] === yc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yc[3] || ("http:" === yc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mc(Hc, k, b, v), 2 === t)
                return v;
            h = k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Ec.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bc.test(e) ? e.replace(Bc, "$1_=" + vc++) : e + (wc.test(e) ? "&" : "?") + "_=" + vc++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jc + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers)
                v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))
                return v.abort();
            u = "abort";
            for (d in {success: 1,error: 1,complete: 1})
                v[d](k[d]);
            if (i = Mc(Ic, k, b, v)) {
                v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, i.send(r, x)
                } catch (w) {
                    if (!(2 > t))
                        throw w;
                    x(-1, w)
                }
            } else
                x(-1, "No Transport");
            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Oc(k, v, c)), u = Pc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")))
            }
            return v
        },getJSON: function(a, b, c) {
            return m.get(a, b, c, "json")
        },getScript: function(a, b) {
            return m.get(a, void 0, b, "script")
        }}), m.each(["get", "post"], function(a, b) {
        m[b] = function(a, c, d, e) {
            return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({url: a,type: b,dataType: e,data: c,success: d})
        }
    }), m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        m.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), m._evalUrl = function(a) {
        return m.ajax({url: a,type: "GET",dataType: "script",async: !1,global: !1,"throws": !0})
    }, m.fn.extend({wrapAll: function(a) {
            if (m.isFunction(a))
                return this.each(function(b) {
                    m(this).wrapAll(a.call(this, b))
                });
            if (this[0]) {
                var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType)
                        a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },wrapInner: function(a) {
            return this.each(m.isFunction(a) ? function(b) {
                m(this).wrapInner(a.call(this, b))
            } : function() {
                var b = m(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },wrap: function(a) {
            var b = m.isFunction(a);
            return this.each(function(c) {
                m(this).wrapAll(b ? a.call(this, c) : a)
            })
        },unwrap: function() {
            return this.parent().each(function() {
                m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
            }).end()
        }}), m.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"))
    }, m.expr.filters.visible = function(a) {
        return !m.expr.filters.hidden(a)
    };
    var Qc = /%20/g, Rc = /\[\]$/, Sc = /\r?\n/g, Tc = /^(?:submit|button|image|reset|file)$/i, Uc = /^(?:input|select|textarea|keygen)/i;
    function Vc(a, b, c, d) {
        var e;
        if (m.isArray(b))
            m.each(b, function(b, e) {
                c || Rc.test(a) ? d(a, e) : Vc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== m.type(b))
            d(a, b);
        else
            for (e in b)
                Vc(a + "[" + e + "]", b[e], c, d)
    }
    m.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a))
            m.each(a, function() {
                e(this.name, this.value)
            });
        else
            for (c in a)
                Vc(c, a[c], b, e);
        return d.join("&").replace(Qc, "+")
    }, m.fn.extend({serialize: function() {
            return m.param(this.serializeArray())
        },serializeArray: function() {
            return this.map(function() {
                var a = m.prop(this, "elements");
                return a ? m.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !m(this).is(":disabled") && Uc.test(this.nodeName) && !Tc.test(a) && (this.checked || !W.test(a))
            }).map(function(a, b) {
                var c = m(this).val();
                return null == c ? null : m.isArray(c) ? m.map(c, function(a) {
                    return {name: b.name,value: a.replace(Sc, "\r\n")}
                }) : {name: b.name,value: c.replace(Sc, "\r\n")}
            }).get()
        }}), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c()
    } : Zc;
    var Wc = 0, Xc = {}, Yc = m.ajaxSettings.xhr();
    a.ActiveXObject && m(a).on("unload", function() {
        for (var a in Xc)
            Xc[a](void 0, !0)
    }), k.cors = !!Yc && "withCredentials" in Yc, Yc = k.ajax = !!Yc, Yc && m.ajaxTransport(function(a) {
        if (!a.crossDomain || k.cors) {
            var b;
            return {send: function(c, d) {
                    var e, f = a.xhr(), g = ++Wc;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (e in a.xhrFields)
                            f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c)
                        void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function(c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))
                            if (delete Xc[g], b = void 0, f.onreadystatechange = m.noop, e)
                                4 !== f.readyState && f.abort();
                            else {
                                j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText
                                } catch (k) {
                                    i = ""
                                }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xc[g] = b : b()
                },abort: function() {
                    b && b(void 0, !0)
                }}
        }
    });
    function Zc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {
        }
    }
    function $c() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {
        }
    }
    m.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents: {script: /(?:java|ecma)script/},converters: {"text script": function(a) {
                return m.globalEval(a), a
            }}}), m.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), m.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = y.head || m("head")[0] || y.documentElement;
            return {send: function(d, e) {
                    b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },abort: function() {
                    b && b.onload(void 0, !0)
                }}
        }
    });
    var _c = [], ad = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({jsonp: "callback",jsonpCallback: function() {
            var a = _c.pop() || m.expando + "_" + vc++;
            return this[a] = !0, a
        }}), m.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (ad.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ad.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ad, "$1" + e) : b.jsonp !== !1 && (b.url += (wc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || m.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _c.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), m.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a)
            return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || y;
        var d = u.exec(a), e = !c && [];
        return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes))
    };
    var bd = m.fn.load;
    m.fn.load = function(a, b, c) {
        if ("string" != typeof a && bd)
            return bd.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({url: a,type: f,dataType: "html",data: b}).done(function(a) {
            e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, e || [a.responseText, b, a])
        }), this
    }, m.expr.filters.animated = function(a) {
        return m.grep(m.timers, function(b) {
            return a === b.elem
        }).length
    };
    var cd = a.document.documentElement;
    function dd(a) {
        return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    m.offset = {setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = m.css(a, "position"), l = m(a), n = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n)
        }}, m.fn.extend({offset: function(a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function(b) {
                    m.offset.setOffset(this, a, b)
                });
            var b, c, d = {top: 0,left: 0}, e = this[0], f = e && e.ownerDocument;
            if (f)
                return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dd(f), {top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)}) : d
        },position: function() {
            if (this[0]) {
                var a, b, c = {top: 0,left: 0}, d = this[0];
                return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), {top: b.top - c.top - m.css(d, "marginTop", !0),left: b.left - c.left - m.css(d, "marginLeft", !0)}
            }
        },offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || cd;
                while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position"))
                    a = a.offsetParent;
                return a || cd
            })
        }}), m.each({scrollLeft: "pageXOffset",scrollTop: "pageYOffset"}, function(a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function(d) {
            return V(this, function(a, d, e) {
                var f = dd(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), m.each(["top", "left"], function(a, b) {
        m.cssHooks[b] = Lb(k.pixelPosition, function(a, c) {
            return c ? (c = Jb(a, b), Hb.test(c) ? m(a).position()[b] + "px" : c) : void 0
        })
    }), m.each({Height: "height",Width: "width"}, function(a, b) {
        m.each({padding: "inner" + a,content: b,"": "outer" + a}, function(c, d) {
            m.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                return V(this, function(b, c, d) {
                    var e;
                    return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), m.fn.size = function() {
        return this.length
    }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return m
    });
    var ed = a.jQuery, fd = a.$;
    return m.noConflict = function(b) {
        return a.$ === m && (a.$ = fd), b && a.jQuery === m && (a.jQuery = ed), m
    }, typeof b === K && (a.jQuery = a.$ = m), m
});
(function(e, t) {
    function i(t, i) {
        var s, a, o, r = t.nodeName.toLowerCase();
        return "area" === r ? (s = t.parentNode, a = s.name, t.href && a && "map" === s.nodeName.toLowerCase() ? (o = e("img[usemap=#" + a + "]")[0], !!o && n(o)) : !1) : (/input|select|textarea|button|object/.test(r) ? !t.disabled : "a" === r ? t.href || i : i) && n(t)
    }
    function n(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
            return "hidden" === e.css(this, "visibility")
        }).length
    }
    var s = 0, a = /^ui-id-\d+$/;
    e.ui = e.ui || {}, e.extend(e.ui, {version: "1.10.4",keyCode: {BACKSPACE: 8,COMMA: 188,DELETE: 46,DOWN: 40,END: 35,ENTER: 13,ESCAPE: 27,HOME: 36,LEFT: 37,NUMPAD_ADD: 107,NUMPAD_DECIMAL: 110,NUMPAD_DIVIDE: 111,NUMPAD_ENTER: 108,NUMPAD_MULTIPLY: 106,NUMPAD_SUBTRACT: 109,PAGE_DOWN: 34,PAGE_UP: 33,PERIOD: 190,RIGHT: 39,SPACE: 32,TAB: 9,UP: 38}}), e.fn.extend({focus: function(t) {
            return function(i, n) {
                return "number" == typeof i ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        e(t).focus(), n && n.call(t)
                    }, i)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus),scrollParent: function() {
            var t;
            return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        },zIndex: function(i) {
            if (i !== t)
                return this.css("zIndex", i);
            if (this.length)
                for (var n, s, a = e(this[0]); a.length && a[0] !== document; ) {
                    if (n = a.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (s = parseInt(a.css("zIndex"), 10), !isNaN(s) && 0 !== s))
                        return s;
                    a = a.parent()
                }
            return 0
        },uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++s)
            })
        },removeUniqueId: function() {
            return this.each(function() {
                a.test(this.id) && e(this).removeAttr("id")
            })
        }}), e.extend(e.expr[":"], {data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(i) {
                return !!e.data(i, t)
            }
        }) : function(t, i, n) {
            return !!e.data(t, n[3])
        },focusable: function(t) {
            return i(t, !isNaN(e.attr(t, "tabindex")))
        },tabbable: function(t) {
            var n = e.attr(t, "tabindex"), s = isNaN(n);
            return (s || n >= 0) && i(t, !s)
        }}), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(i, n) {
        function s(t, i, n, s) {
            return e.each(a, function() {
                i -= parseFloat(e.css(t, "padding" + this)) || 0, n && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), i
        }
        var a = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"], o = n.toLowerCase(), r = {innerWidth: e.fn.innerWidth,innerHeight: e.fn.innerHeight,outerWidth: e.fn.outerWidth,outerHeight: e.fn.outerHeight};
        e.fn["inner" + n] = function(i) {
            return i === t ? r["inner" + n].call(this) : this.each(function() {
                e(this).css(o, s(this, i) + "px")
            })
        }, e.fn["outer" + n] = function(t, i) {
            return "number" != typeof t ? r["outer" + n].call(this, t) : this.each(function() {
                e(this).css(o, s(this, t, !0, i) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
        return function(i) {
            return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), e.fn.extend({disableSelection: function() {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                e.preventDefault()
            })
        },enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }}), e.extend(e.ui, {plugin: {add: function(t, i, n) {
                var s, a = e.ui[t].prototype;
                for (s in n)
                    a.plugins[s] = a.plugins[s] || [], a.plugins[s].push([i, n[s]])
            },call: function(e, t, i) {
                var n, s = e.plugins[t];
                if (s && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)
                    for (n = 0; s.length > n; n++)
                        e.options[s[n][0]] && s[n][1].apply(e.element, i)
            }},hasScroll: function(t, i) {
            if ("hidden" === e(t).css("overflow"))
                return !1;
            var n = i && "left" === i ? "scrollLeft" : "scrollTop", s = !1;
            return t[n] > 0 ? !0 : (t[n] = 1, s = t[n] > 0, t[n] = 0, s)
        }})
})(jQuery);
(function(t, e) {
    var i = 0, s = Array.prototype.slice, n = t.cleanData;
    t.cleanData = function(e) {
        for (var i, s = 0; null != (i = e[s]); s++)
            try {
                t(i).triggerHandler("remove")
            } catch (o) {
            }
        n(e)
    }, t.widget = function(i, s, n) {
        var o, a, r, h, l = {}, c = i.split(".")[0];
        i = i.split(".")[1], o = c + "-" + i, n || (n = s, s = t.Widget), t.expr[":"][o.toLowerCase()] = function(e) {
            return !!t.data(e, o)
        }, t[c] = t[c] || {}, a = t[c][i], r = t[c][i] = function(t, i) {
            return this._createWidget ? (arguments.length && this._createWidget(t, i), e) : new r(t, i)
        }, t.extend(r, a, {version: n.version,_proto: t.extend({}, n),_childConstructors: []}), h = new s, h.options = t.widget.extend({}, h.options), t.each(n, function(i, n) {
            return t.isFunction(n) ? (l[i] = function() {
                var t = function() {
                    return s.prototype[i].apply(this, arguments)
                }, e = function(t) {
                    return s.prototype[i].apply(this, t)
                };
                return function() {
                    var i, s = this._super, o = this._superApply;
                    return this._super = t, this._superApply = e, i = n.apply(this, arguments), this._super = s, this._superApply = o, i
                }
            }(), e) : (l[i] = n, e)
        }), r.prototype = t.widget.extend(h, {widgetEventPrefix: a ? h.widgetEventPrefix || i : i}, l, {constructor: r,namespace: c,widgetName: i,widgetFullName: o}), a ? (t.each(a._childConstructors, function(e, i) {
            var s = i.prototype;
            t.widget(s.namespace + "." + s.widgetName, r, i._proto)
        }), delete a._childConstructors) : s._childConstructors.push(r), t.widget.bridge(i, r)
    }, t.widget.extend = function(i) {
        for (var n, o, a = s.call(arguments, 1), r = 0, h = a.length; h > r; r++)
            for (n in a[r])
                o = a[r][n], a[r].hasOwnProperty(n) && o !== e && (i[n] = t.isPlainObject(o) ? t.isPlainObject(i[n]) ? t.widget.extend({}, i[n], o) : t.widget.extend({}, o) : o);
        return i
    }, t.widget.bridge = function(i, n) {
        var o = n.prototype.widgetFullName || i;
        t.fn[i] = function(a) {
            var r = "string" == typeof a, h = s.call(arguments, 1), l = this;
            return a = !r && h.length ? t.widget.extend.apply(null, [a].concat(h)) : a, r ? this.each(function() {
                var s, n = t.data(this, o);
                return n ? t.isFunction(n[a]) && "_" !== a.charAt(0) ? (s = n[a].apply(n, h), s !== n && s !== e ? (l = s && s.jquery ? l.pushStack(s.get()) : s, !1) : e) : t.error("no such method '" + a + "' for " + i + " widget instance") : t.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + a + "'")
            }) : this.each(function() {
                var e = t.data(this, o);
                e ? e.option(a || {})._init() : t.data(this, o, new n(a, this))
            }), l
        }
    }, t.Widget = function() {
    }, t.Widget._childConstructors = [], t.Widget.prototype = {widgetName: "widget",widgetEventPrefix: "",defaultElement: "<div>",options: {disabled: !1,create: null},_createWidget: function(e, s) {
            s = t(s || this.defaultElement || this)[0], this.element = t(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this.bindings = t(), this.hoverable = t(), this.focusable = t(), s !== this && (t.data(s, this.widgetFullName, this), this._on(!0, this.element, {remove: function(t) {
                    t.target === s && this.destroy()
                }}), this.document = t(s.style ? s.ownerDocument : s.document || s), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },_getCreateOptions: t.noop,_getCreateEventData: t.noop,_create: t.noop,_init: t.noop,destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },_destroy: t.noop,widget: function() {
            return this.element
        },option: function(i, s) {
            var n, o, a, r = i;
            if (0 === arguments.length)
                return t.widget.extend({}, this.options);
            if ("string" == typeof i)
                if (r = {}, n = i.split("."), i = n.shift(), n.length) {
                    for (o = r[i] = t.widget.extend({}, this.options[i]), a = 0; n.length - 1 > a; a++)
                        o[n[a]] = o[n[a]] || {}, o = o[n[a]];
                    if (i = n.pop(), 1 === arguments.length)
                        return o[i] === e ? null : o[i];
                    o[i] = s
                } else {
                    if (1 === arguments.length)
                        return this.options[i] === e ? null : this.options[i];
                    r[i] = s
                }
            return this._setOptions(r), this
        },_setOptions: function(t) {
            var e;
            for (e in t)
                this._setOption(e, t[e]);
            return this
        },_setOption: function(t, e) {
            return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },enable: function() {
            return this._setOption("disabled", !1)
        },disable: function() {
            return this._setOption("disabled", !0)
        },_on: function(i, s, n) {
            var o, a = this;
            "boolean" != typeof i && (n = s, s = i, i = !1), n ? (s = o = t(s), this.bindings = this.bindings.add(s)) : (n = s, s = this.element, o = this.widget()), t.each(n, function(n, r) {
                function h() {
                    return i || a.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? a[r] : r).apply(a, arguments) : e
                }
                "string" != typeof r && (h.guid = r.guid = r.guid || h.guid || t.guid++);
                var l = n.match(/^(\w+)\s*(.*)$/), c = l[1] + a.eventNamespace, u = l[2];
                u ? o.delegate(u, c, h) : s.bind(c, h)
            })
        },_off: function(t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e)
        },_delay: function(t, e) {
            function i() {
                return ("string" == typeof t ? s[t] : t).apply(s, arguments)
            }
            var s = this;
            return setTimeout(i, e || 0)
        },_hoverable: function(e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {mouseenter: function(e) {
                    t(e.currentTarget).addClass("ui-state-hover")
                },mouseleave: function(e) {
                    t(e.currentTarget).removeClass("ui-state-hover")
                }})
        },_focusable: function(e) {
            this.focusable = this.focusable.add(e), this._on(e, {focusin: function(e) {
                    t(e.currentTarget).addClass("ui-state-focus")
                },focusout: function(e) {
                    t(e.currentTarget).removeClass("ui-state-focus")
                }})
        },_trigger: function(e, i, s) {
            var n, o, a = this.options[e];
            if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                for (n in o)
                    n in i || (i[n] = o[n]);
            return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }}, t.each({show: "fadeIn",hide: "fadeOut"}, function(e, i) {
        t.Widget.prototype["_" + e] = function(s, n, o) {
            "string" == typeof n && (n = {effect: n});
            var a, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
            n = n || {}, "number" == typeof n && (n = {duration: n}), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function(i) {
                t(this)[e](), o && o.call(s[0]), i()
            })
        }
    })
})(jQuery);
(function(t) {
    var e = !1;
    t(document).mouseup(function() {
        e = !1
    }), t.widget("ui.mouse", {version: "1.10.4",options: {cancel: "input,textarea,button,select,option",distance: 1,delay: 0},_mouseInit: function() {
            var e = this;
            this.element.bind("mousedown." + this.widgetName, function(t) {
                return e._mouseDown(t)
            }).bind("click." + this.widgetName, function(i) {
                return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : undefined
            }), this.started = !1
        },_mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },_mouseDown: function(i) {
            if (!e) {
                this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
                var s = this, n = 1 === i.which, a = "string" == typeof this.options.cancel && i.target.nodeName ? t(i.target).closest(this.options.cancel).length : !1;
                return n && !a && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    s.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                    return s._mouseMove(t)
                }, this._mouseUpDelegate = function(t) {
                    return s._mouseUp(t)
                }, t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), e = !0, !0)) : !0
            }
        },_mouseMove: function(e) {
            return t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button ? this._mouseUp(e) : this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
        },_mouseUp: function(e) {
            return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), !1
        },_mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },_mouseDelayMet: function() {
            return this.mouseDelayMet
        },_mouseStart: function() {
        },_mouseDrag: function() {
        },_mouseStop: function() {
        },_mouseCapture: function() {
            return !0
        }})
})(jQuery);
(function(t, e) {
    function i(t, e, i) {
        return [parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)]
    }
    function s(e, i) {
        return parseInt(t.css(e, i), 10) || 0
    }
    function n(e) {
        var i = e[0];
        return 9 === i.nodeType ? {width: e.width(),height: e.height(),offset: {top: 0,left: 0}} : t.isWindow(i) ? {width: e.width(),height: e.height(),offset: {top: e.scrollTop(),left: e.scrollLeft()}} : i.preventDefault ? {width: 0,height: 0,offset: {top: i.pageY,left: i.pageX}} : {width: e.outerWidth(),height: e.outerHeight(),offset: e.offset()}
    }
    t.ui = t.ui || {};
    var a, o = Math.max, r = Math.abs, l = Math.round, h = /left|center|right/, c = /top|center|bottom/, u = /[\+\-]\d+(\.[\d]+)?%?/, d = /^\w+/, p = /%$/, f = t.fn.position;
    t.position = {scrollbarWidth: function() {
            if (a !== e)
                return a;
            var i, s, n = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), o = n.children()[0];
            return t("body").append(n), i = o.offsetWidth, n.css("overflow", "scroll"), s = o.offsetWidth, i === s && (s = n[0].clientWidth), n.remove(), a = i - s
        },getScrollInfo: function(e) {
            var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"), s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"), n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth, a = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
            return {width: a ? t.position.scrollbarWidth() : 0,height: n ? t.position.scrollbarWidth() : 0}
        },getWithinInfo: function(e) {
            var i = t(e || window), s = t.isWindow(i[0]), n = !!i[0] && 9 === i[0].nodeType;
            return {element: i,isWindow: s,isDocument: n,offset: i.offset() || {left: 0,top: 0},scrollLeft: i.scrollLeft(),scrollTop: i.scrollTop(),width: s ? i.width() : i.outerWidth(),height: s ? i.height() : i.outerHeight()}
        }}, t.fn.position = function(e) {
        if (!e || !e.of)
            return f.apply(this, arguments);
        e = t.extend({}, e);
        var a, p, g, m, v, _, b = t(e.of), y = t.position.getWithinInfo(e.within), k = t.position.getScrollInfo(y), w = (e.collision || "flip").split(" "), D = {};
        return _ = n(b), b[0].preventDefault && (e.at = "left top"), p = _.width, g = _.height, m = _.offset, v = t.extend({}, m), t.each(["my", "at"], function() {
            var t, i, s = (e[this] || "").split(" ");
            1 === s.length && (s = h.test(s[0]) ? s.concat(["center"]) : c.test(s[0]) ? ["center"].concat(s) : ["center", "center"]), s[0] = h.test(s[0]) ? s[0] : "center", s[1] = c.test(s[1]) ? s[1] : "center", t = u.exec(s[0]), i = u.exec(s[1]), D[this] = [t ? t[0] : 0, i ? i[0] : 0], e[this] = [d.exec(s[0])[0], d.exec(s[1])[0]]
        }), 1 === w.length && (w[1] = w[0]), "right" === e.at[0] ? v.left += p : "center" === e.at[0] && (v.left += p / 2), "bottom" === e.at[1] ? v.top += g : "center" === e.at[1] && (v.top += g / 2), a = i(D.at, p, g), v.left += a[0], v.top += a[1], this.each(function() {
            var n, h, c = t(this), u = c.outerWidth(), d = c.outerHeight(), f = s(this, "marginLeft"), _ = s(this, "marginTop"), x = u + f + s(this, "marginRight") + k.width, C = d + _ + s(this, "marginBottom") + k.height, M = t.extend({}, v), T = i(D.my, c.outerWidth(), c.outerHeight());
            "right" === e.my[0] ? M.left -= u : "center" === e.my[0] && (M.left -= u / 2), "bottom" === e.my[1] ? M.top -= d : "center" === e.my[1] && (M.top -= d / 2), M.left += T[0], M.top += T[1], t.support.offsetFractions || (M.left = l(M.left), M.top = l(M.top)), n = {marginLeft: f,marginTop: _}, t.each(["left", "top"], function(i, s) {
                t.ui.position[w[i]] && t.ui.position[w[i]][s](M, {targetWidth: p,targetHeight: g,elemWidth: u,elemHeight: d,collisionPosition: n,collisionWidth: x,collisionHeight: C,offset: [a[0] + T[0], a[1] + T[1]],my: e.my,at: e.at,within: y,elem: c})
            }), e.using && (h = function(t) {
                var i = m.left - M.left, s = i + p - u, n = m.top - M.top, a = n + g - d, l = {target: {element: b,left: m.left,top: m.top,width: p,height: g},element: {element: c,left: M.left,top: M.top,width: u,height: d},horizontal: 0 > s ? "left" : i > 0 ? "right" : "center",vertical: 0 > a ? "top" : n > 0 ? "bottom" : "middle"};
                u > p && p > r(i + s) && (l.horizontal = "center"), d > g && g > r(n + a) && (l.vertical = "middle"), l.important = o(r(i), r(s)) > o(r(n), r(a)) ? "horizontal" : "vertical", e.using.call(this, t, l)
            }), c.offset(t.extend(M, {using: h}))
        })
    }, t.ui.position = {fit: {left: function(t, e) {
                var i, s = e.within, n = s.isWindow ? s.scrollLeft : s.offset.left, a = s.width, r = t.left - e.collisionPosition.marginLeft, l = n - r, h = r + e.collisionWidth - a - n;
                e.collisionWidth > a ? l > 0 && 0 >= h ? (i = t.left + l + e.collisionWidth - a - n, t.left += l - i) : t.left = h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionWidth : n : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = o(t.left - r, t.left)
            },top: function(t, e) {
                var i, s = e.within, n = s.isWindow ? s.scrollTop : s.offset.top, a = e.within.height, r = t.top - e.collisionPosition.marginTop, l = n - r, h = r + e.collisionHeight - a - n;
                e.collisionHeight > a ? l > 0 && 0 >= h ? (i = t.top + l + e.collisionHeight - a - n, t.top += l - i) : t.top = h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionHeight : n : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = o(t.top - r, t.top)
            }},flip: {left: function(t, e) {
                var i, s, n = e.within, a = n.offset.left + n.scrollLeft, o = n.width, l = n.isWindow ? n.scrollLeft : n.offset.left, h = t.left - e.collisionPosition.marginLeft, c = h - l, u = h + e.collisionWidth - o - l, d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0, p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0, f = -2 * e.offset[0];
                0 > c ? (i = t.left + d + p + f + e.collisionWidth - o - a, (0 > i || r(c) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - l, (s > 0 || u > r(s)) && (t.left += d + p + f))
            },top: function(t, e) {
                var i, s, n = e.within, a = n.offset.top + n.scrollTop, o = n.height, l = n.isWindow ? n.scrollTop : n.offset.top, h = t.top - e.collisionPosition.marginTop, c = h - l, u = h + e.collisionHeight - o - l, d = "top" === e.my[1], p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0, f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0, g = -2 * e.offset[1];
                0 > c ? (s = t.top + p + f + g + e.collisionHeight - o - a, t.top + p + f + g > c && (0 > s || r(c) > s) && (t.top += p + f + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - l, t.top + p + f + g > u && (i > 0 || u > r(i)) && (t.top += p + f + g))
            }},flipfit: {left: function() {
                t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
            },top: function() {
                t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
            }}}, function() {
        var e, i, s, n, a, o = document.getElementsByTagName("body")[0], r = document.createElement("div");
        e = document.createElement(o ? "div" : "body"), s = {visibility: "hidden",width: 0,height: 0,border: 0,margin: 0,background: "none"}, o && t.extend(s, {position: "absolute",left: "-1000px",top: "-1000px"});
        for (a in s)
            e.style[a] = s[a];
        e.appendChild(r), i = o || document.documentElement, i.insertBefore(e, i.firstChild), r.style.cssText = "position: absolute; left: 10.7432222px;", n = t(r).offset().left, t.support.offsetFractions = n > 10 && 11 > n, e.innerHTML = "", i.removeChild(e)
    }()
})(jQuery);
(function(e) {
    var t = 0, i = {}, a = {};
    i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "hide", a.height = a.paddingTop = a.paddingBottom = a.borderTopWidth = a.borderBottomWidth = "show", e.widget("ui.accordion", {version: "1.10.4",options: {active: 0,animate: {},collapsible: !1,event: "click",header: "> li > :first-child,> :not(li):even",heightStyle: "auto",icons: {activeHeader: "ui-icon-triangle-1-s",header: "ui-icon-triangle-1-e"},activate: null,beforeActivate: null},_create: function() {
            var t = this.options;
            this.prevShow = this.prevHide = e(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), t.collapsible || t.active !== !1 && null != t.active || (t.active = 0), this._processPanels(), 0 > t.active && (t.active += this.headers.length), this._refresh()
        },_getCreateEventData: function() {
            return {header: this.active,panel: this.active.length ? this.active.next() : e(),content: this.active.length ? this.active.next() : e()}
        },_createIcons: function() {
            var t = this.options.icons;
            t && (e("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"))
        },_destroyIcons: function() {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
        },_destroy: function() {
            var e;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }), this._destroyIcons(), e = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }), "content" !== this.options.heightStyle && e.css("height", "")
        },_setOption: function(e, t) {
            return "active" === e ? (this._activate(t), undefined) : ("event" === e && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(e, t), "collapsible" !== e || t || this.options.active !== !1 || this._activate(0), "icons" === e && (this._destroyIcons(), t && this._createIcons()), "disabled" === e && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!t), undefined)
        },_keydown: function(t) {
            if (!t.altKey && !t.ctrlKey) {
                var i = e.ui.keyCode, a = this.headers.length, s = this.headers.index(t.target), n = !1;
                switch (t.keyCode) {
                    case i.RIGHT:
                    case i.DOWN:
                        n = this.headers[(s + 1) % a];
                        break;
                    case i.LEFT:
                    case i.UP:
                        n = this.headers[(s - 1 + a) % a];
                        break;
                    case i.SPACE:
                    case i.ENTER:
                        this._eventHandler(t);
                        break;
                    case i.HOME:
                        n = this.headers[0];
                        break;
                    case i.END:
                        n = this.headers[a - 1]
                }
                n && (e(t.target).attr("tabIndex", -1), e(n).attr("tabIndex", 0), n.focus(), t.preventDefault())
            }
        },_panelKeyDown: function(t) {
            t.keyCode === e.ui.keyCode.UP && t.ctrlKey && e(t.currentTarget).prev().focus()
        },refresh: function() {
            var t = this.options;
            this._processPanels(), t.active === !1 && t.collapsible === !0 || !this.headers.length ? (t.active = !1, this.active = e()) : t.active === !1 ? this._activate(0) : this.active.length && !e.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = e()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
        },_processPanels: function() {
            this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
        },_refresh: function() {
            var i, a = this.options, s = a.heightStyle, n = this.element.parent(), r = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++t);
            this.active = this._findActive(a.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function(t) {
                var i = e(this), a = i.attr("id"), s = i.next(), n = s.attr("id");
                a || (a = r + "-header-" + t, i.attr("id", a)), n || (n = r + "-panel-" + t, s.attr("id", n)), i.attr("aria-controls", n), s.attr("aria-labelledby", a)
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({"aria-selected": "false","aria-expanded": "false",tabIndex: -1}).next().attr({"aria-hidden": "true"}).hide(), this.active.length ? this.active.attr({"aria-selected": "true","aria-expanded": "true",tabIndex: 0}).next().attr({"aria-hidden": "false"}) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(a.event), "fill" === s ? (i = n.height(), this.element.siblings(":visible").each(function() {
                var t = e(this), a = t.css("position");
                "absolute" !== a && "fixed" !== a && (i -= t.outerHeight(!0))
            }), this.headers.each(function() {
                i -= e(this).outerHeight(!0)
            }), this.headers.next().each(function() {
                e(this).height(Math.max(0, i - e(this).innerHeight() + e(this).height()))
            }).css("overflow", "auto")) : "auto" === s && (i = 0, this.headers.next().each(function() {
                i = Math.max(i, e(this).css("height", "").height())
            }).height(i))
        },_activate: function(t) {
            var i = this._findActive(t)[0];
            i !== this.active[0] && (i = i || this.active[0], this._eventHandler({target: i,currentTarget: i,preventDefault: e.noop}))
        },_findActive: function(t) {
            return "number" == typeof t ? this.headers.eq(t) : e()
        },_setupEvents: function(t) {
            var i = {keydown: "_keydown"};
            t && e.each(t.split(" "), function(e, t) {
                i[t] = "_eventHandler"
            }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {keydown: "_panelKeyDown"}), this._hoverable(this.headers), this._focusable(this.headers)
        },_eventHandler: function(t) {
            var i = this.options, a = this.active, s = e(t.currentTarget), n = s[0] === a[0], r = n && i.collapsible, o = r ? e() : s.next(), h = a.next(), d = {oldHeader: a,oldPanel: h,newHeader: r ? e() : s,newPanel: o};
            t.preventDefault(), n && !i.collapsible || this._trigger("beforeActivate", t, d) === !1 || (i.active = r ? !1 : this.headers.index(s), this.active = n ? e() : s, this._toggle(d), a.removeClass("ui-accordion-header-active ui-state-active"), i.icons && a.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), n || (s.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), s.next().addClass("ui-accordion-content-active")))
        },_toggle: function(t) {
            var i = t.newPanel, a = this.prevShow.length ? this.prevShow : t.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = a, this.options.animate ? this._animate(i, a, t) : (a.hide(), i.show(), this._toggleComplete(t)), a.attr({"aria-hidden": "true"}), a.prev().attr("aria-selected", "false"), i.length && a.length ? a.prev().attr({tabIndex: -1,"aria-expanded": "false"}) : i.length && this.headers.filter(function() {
                return 0 === e(this).attr("tabIndex")
            }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({"aria-selected": "true",tabIndex: 0,"aria-expanded": "true"})
        },_animate: function(e, t, s) {
            var n, r, o, h = this, d = 0, c = e.length && (!t.length || e.index() < t.index()), l = this.options.animate || {}, u = c && l.down || l, v = function() {
                h._toggleComplete(s)
            };
            return "number" == typeof u && (o = u), "string" == typeof u && (r = u), r = r || u.easing || l.easing, o = o || u.duration || l.duration, t.length ? e.length ? (n = e.show().outerHeight(), t.animate(i, {duration: o,easing: r,step: function(e, t) {
                    t.now = Math.round(e)
                }}), e.hide().animate(a, {duration: o,easing: r,complete: v,step: function(e, i) {
                    i.now = Math.round(e), "height" !== i.prop ? d += i.now : "content" !== h.options.heightStyle && (i.now = Math.round(n - t.outerHeight() - d), d = 0)
                }}), undefined) : t.animate(i, o, r, v) : e.animate(a, o, r, v)
        },_toggleComplete: function(e) {
            var t = e.oldPanel;
            t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), t.length && (t.parent()[0].className = t.parent()[0].className), this._trigger("activate", null, e)
        }})
})(jQuery);
(function(e) {
    e.widget("ui.autocomplete", {version: "1.10.4",defaultElement: "<input>",options: {appendTo: null,autoFocus: !1,delay: 300,minLength: 1,position: {my: "left top",at: "left bottom",collision: "none"},source: null,change: null,close: null,focus: null,open: null,response: null,search: null,select: null},requestIndex: 0,pending: 0,_create: function() {
            var t, i, s, n = this.element[0].nodeName.toLowerCase(), a = "textarea" === n, o = "input" === n;
            this.isMultiLine = a ? !0 : o ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[a || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {keydown: function(n) {
                    if (this.element.prop("readOnly"))
                        return t = !0, s = !0, i = !0, undefined;
                    t = !1, s = !1, i = !1;
                    var a = e.ui.keyCode;
                    switch (n.keyCode) {
                        case a.PAGE_UP:
                            t = !0, this._move("previousPage", n);
                            break;
                        case a.PAGE_DOWN:
                            t = !0, this._move("nextPage", n);
                            break;
                        case a.UP:
                            t = !0, this._keyEvent("previous", n);
                            break;
                        case a.DOWN:
                            t = !0, this._keyEvent("next", n);
                            break;
                        case a.ENTER:
                        case a.NUMPAD_ENTER:
                            this.menu.active && (t = !0, n.preventDefault(), this.menu.select(n));
                            break;
                        case a.TAB:
                            this.menu.active && this.menu.select(n);
                            break;
                        case a.ESCAPE:
                            this.menu.element.is(":visible") && (this._value(this.term), this.close(n), n.preventDefault());
                            break;
                        default:
                            i = !0, this._searchTimeout(n)
                    }
                },keypress: function(s) {
                    if (t)
                        return t = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), undefined;
                    if (!i) {
                        var n = e.ui.keyCode;
                        switch (s.keyCode) {
                            case n.PAGE_UP:
                                this._move("previousPage", s);
                                break;
                            case n.PAGE_DOWN:
                                this._move("nextPage", s);
                                break;
                            case n.UP:
                                this._keyEvent("previous", s);
                                break;
                            case n.DOWN:
                                this._keyEvent("next", s)
                        }
                    }
                },input: function(e) {
                    return s ? (s = !1, e.preventDefault(), undefined) : (this._searchTimeout(e), undefined)
                },focus: function() {
                    this.selectedItem = null, this.previous = this._value()
                },blur: function(e) {
                    return this.cancelBlur ? (delete this.cancelBlur, undefined) : (clearTimeout(this.searching), this.close(e), this._change(e), undefined)
                }}), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role: null}).hide().data("ui-menu"), this._on(this.menu.element, {mousedown: function(t) {
                    t.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur
                    });
                    var i = this.menu.element[0];
                    e(t.target).closest(".ui-menu-item").length || this._delay(function() {
                        var t = this;
                        this.document.one("mousedown", function(s) {
                            s.target === t.element[0] || s.target === i || e.contains(i, s.target) || t.close()
                        })
                    })
                },menufocus: function(t, i) {
                    if (this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type)))
                        return this.menu.blur(), this.document.one("mousemove", function() {
                            e(t.target).trigger(t.originalEvent)
                        }), undefined;
                    var s = i.item.data("ui-autocomplete-item");
                    !1 !== this._trigger("focus", t, {item: s}) ? t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(s.value) : this.liveRegion.text(s.value)
                },menuselect: function(e, t) {
                    var i = t.item.data("ui-autocomplete-item"), s = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function() {
                        this.previous = s, this.selectedItem = i
                    })), !1 !== this._trigger("select", e, {item: i}) && this._value(i.value), this.term = this._value(), this.close(e), this.selectedItem = i
                }}), this.liveRegion = e("<span>", {role: "status","aria-live": "polite"}).addClass("ui-helper-hidden-accessible").insertBefore(this.element), this._on(this.window, {beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }})
        },_destroy: function() {
            clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },_setOption: function(e, t) {
            this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), "disabled" === e && t && this.xhr && this.xhr.abort()
        },_appendTo: function() {
            var t = this.options.appendTo;
            return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
        },_initSource: function() {
            var t, i, s = this;
            e.isArray(this.options.source) ? (t = this.options.source, this.source = function(i, s) {
                s(e.ui.autocomplete.filter(t, i.term))
            }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(t, n) {
                s.xhr && s.xhr.abort(), s.xhr = e.ajax({url: i,data: t,dataType: "json",success: function(e) {
                        n(e)
                    },error: function() {
                        n([])
                    }})
            }) : this.source = this.options.source
        },_searchTimeout: function(e) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                this.term !== this._value() && (this.selectedItem = null, this.search(null, e))
            }, this.options.delay)
        },search: function(e, t) {
            return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(e) : undefined
        },_search: function(e) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({term: e}, this._response())
        },_response: function() {
            var t = ++this.requestIndex;
            return e.proxy(function(e) {
                t === this.requestIndex && this.__response(e), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
            }, this)
        },__response: function(e) {
            e && (e = this._normalize(e)), this._trigger("response", null, {content: e}), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
        },close: function(e) {
            this.cancelSearch = !0, this._close(e)
        },_close: function(e) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
        },_change: function(e) {
            this.previous !== this._value() && this._trigger("change", e, {item: this.selectedItem})
        },_normalize: function(t) {
            return t.length && t[0].label && t[0].value ? t : e.map(t, function(t) {
                return "string" == typeof t ? {label: t,value: t} : e.extend({label: t.label || t.value,value: t.value || t.label}, t)
            })
        },_suggest: function(t) {
            var i = this.menu.element.empty();
            this._renderMenu(i, t), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(e.extend({of: this.element}, this.options.position)), this.options.autoFocus && this.menu.next()
        },_resizeMenu: function() {
            var e = this.menu.element;
            e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
        },_renderMenu: function(t, i) {
            var s = this;
            e.each(i, function(e, i) {
                s._renderItemData(t, i)
            })
        },_renderItemData: function(e, t) {
            return this._renderItem(e, t).data("ui-autocomplete-item", t)
        },_renderItem: function(t, i) {
            return e("<li>").append(e("<a>").text(i.label)).appendTo(t)
        },_move: function(e, t) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this._value(this.term), this.menu.blur(), undefined) : (this.menu[e](t), undefined) : (this.search(null, t), undefined)
        },widget: function() {
            return this.menu.element
        },_value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },_keyEvent: function(e, t) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t), t.preventDefault())
        }}), e.extend(e.ui.autocomplete, {escapeRegex: function(e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },filter: function(t, i) {
            var s = RegExp(e.ui.autocomplete.escapeRegex(i), "i");
            return e.grep(t, function(e) {
                return s.test(e.label || e.value || e)
            })
        }}), e.widget("ui.autocomplete", e.ui.autocomplete, {options: {messages: {noResults: "No search results.",results: function(e) {
                    return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }}},__response: function(e) {
            var t;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (t = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.text(t))
        }})
})(jQuery);
(function(e) {
    var t, i = "ui-button ui-widget ui-state-default ui-corner-all", n = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only", s = function() {
        var t = e(this);
        setTimeout(function() {
            t.find(":ui-button").button("refresh")
        }, 1)
    }, a = function(t) {
        var i = t.name, n = t.form, s = e([]);
        return i && (i = i.replace(/'/g, "\\'"), s = n ? e(n).find("[name='" + i + "']") : e("[name='" + i + "']", t.ownerDocument).filter(function() {
            return !this.form
        })), s
    };
    e.widget("ui.button", {version: "1.10.4",defaultElement: "<button>",options: {disabled: null,text: !0,label: null,icons: {primary: null,secondary: null}},_create: function() {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, s), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
            var n = this, o = this.options, r = "checkbox" === this.type || "radio" === this.type, h = r ? "" : "ui-state-active";
            null === o.label && (o.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(i).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                o.disabled || this === t && e(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function() {
                o.disabled || e(this).removeClass(h)
            }).bind("click" + this.eventNamespace, function(e) {
                o.disabled && (e.preventDefault(), e.stopImmediatePropagation())
            }), this._on({focus: function() {
                    this.buttonElement.addClass("ui-state-focus")
                },blur: function() {
                    this.buttonElement.removeClass("ui-state-focus")
                }}), r && this.element.bind("change" + this.eventNamespace, function() {
                n.refresh()
            }), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                return o.disabled ? !1 : undefined
            }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (o.disabled)
                    return !1;
                e(this).addClass("ui-state-active"), n.buttonElement.attr("aria-pressed", "true");
                var t = n.element[0];
                a(t).not(t).map(function() {
                    return e(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                return o.disabled ? !1 : (e(this).addClass("ui-state-active"), t = this, n.document.one("mouseup", function() {
                    t = null
                }), undefined)
            }).bind("mouseup" + this.eventNamespace, function() {
                return o.disabled ? !1 : (e(this).removeClass("ui-state-active"), undefined)
            }).bind("keydown" + this.eventNamespace, function(t) {
                return o.disabled ? !1 : ((t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active"), undefined)
            }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                e(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function(t) {
                t.keyCode === e.ui.keyCode.SPACE && e(this).click()
            })), this._setOption("disabled", o.disabled), this._resetButton()
        },_determineButtonType: function() {
            var e, t, i;
            this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (e = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
        },widget: function() {
            return this.buttonElement
        },_destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(i + " ui-state-active " + n).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
        },_setOption: function(e, t) {
            return this._super(e, t), "disabled" === e ? (this.element.prop("disabled", !!t), t && this.buttonElement.removeClass("ui-state-focus"), undefined) : (this._resetButton(), undefined)
        },refresh: function() {
            var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOption("disabled", t), "radio" === this.type ? a(this.element[0]).each(function() {
                e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },_resetButton: function() {
            if ("input" === this.type)
                return this.options.label && this.element.val(this.options.label), undefined;
            var t = this.buttonElement.removeClass(n), i = e("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(), s = this.options.icons, a = s.primary && s.secondary, o = [];
            s.primary || s.secondary ? (this.options.text && o.push("ui-button-text-icon" + (a ? "s" : s.primary ? "-primary" : "-secondary")), s.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + s.primary + "'></span>"), s.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + s.secondary + "'></span>"), this.options.text || (o.push(a ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", e.trim(i)))) : o.push("ui-button-text-only"), t.addClass(o.join(" "))
        }}), e.widget("ui.buttonset", {version: "1.10.4",options: {items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create: function() {
            this.element.addClass("ui-buttonset")
        },_init: function() {
            this.refresh()
        },_setOption: function(e, t) {
            "disabled" === e && this.buttons.button("option", e, t), this._super(e, t)
        },refresh: function() {
            var t = "rtl" === this.element.css("direction");
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
        },_destroy: function() {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }})
})(jQuery);
(function(e, t) {
    function i() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {closeText: "Done",prevText: "Prev",nextText: "Next",currentText: "Today",monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],weekHeader: "Wk",dateFormat: "mm/dd/yy",firstDay: 0,isRTL: !1,showMonthAfterYear: !1,yearSuffix: ""}, this._defaults = {showOn: "focus",showAnim: "fadeIn",showOptions: {},defaultDate: null,appendText: "",buttonText: "...",buttonImage: "",buttonImageOnly: !1,hideIfNoPrevNext: !1,navigationAsDateFormat: !1,gotoCurrent: !1,changeMonth: !1,changeYear: !1,yearRange: "c-10:c+10",showOtherMonths: !1,selectOtherMonths: !1,showWeek: !1,calculateWeek: this.iso8601Week,shortYearCutoff: "+10",minDate: null,maxDate: null,duration: "fast",beforeShowDay: null,beforeShow: null,onSelect: null,onChangeMonthYear: null,onClose: null,numberOfMonths: 1,showCurrentAtPos: 0,stepMonths: 1,stepBigMonths: 12,altField: "",altFormat: "",constrainInput: !0,showButtonPanel: !1,autoSize: !1,disabled: !1}, e.extend(this._defaults, this.regional[""]), this.dpDiv = a(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }
    function a(t) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.delegate(i, "mouseout", function() {
            e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover")
        }).delegate(i, "mouseover", function() {
            e.datepicker._isDisabledDatepicker(n.inline ? t.parent()[0] : n.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover"))
        })
    }
    function s(t, i) {
        e.extend(t, i);
        for (var a in i)
            null == i[a] && (t[a] = i[a]);
        return t
    }
    e.extend(e.ui, {datepicker: {version: "1.10.4"}});
    var n, r = "datepicker";
    e.extend(i.prototype, {markerClassName: "hasDatepicker",maxRows: 4,_widgetDatepicker: function() {
            return this.dpDiv
        },setDefaults: function(e) {
            return s(this._defaults, e || {}), this
        },_attachDatepicker: function(t, i) {
            var a, s, n;
            a = t.nodeName.toLowerCase(), s = "div" === a || "span" === a, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), n = this._newInst(e(t), s), n.settings = e.extend({}, i || {}), "input" === a ? this._connectDatepicker(t, n) : s && this._inlineDatepicker(t, n)
        },_newInst: function(t, i) {
            var s = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {id: s,input: t,selectedDay: 0,selectedMonth: 0,selectedYear: 0,drawMonth: 0,drawYear: 0,inline: i,dpDiv: i ? a(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv}
        },_connectDatepicker: function(t, i) {
            var a = e(t);
            i.append = e([]), i.trigger = e([]), a.hasClass(this.markerClassName) || (this._attachments(a, i), a.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), e.data(t, r, i), i.settings.disabled && this._disableDatepicker(t))
        },_attachments: function(t, i) {
            var a, s, n, r = this._get(i, "appendText"), o = this._get(i, "isRTL");
            i.append && i.append.remove(), r && (i.append = e("<span class='" + this._appendClass + "'>" + r + "</span>"), t[o ? "before" : "after"](i.append)), t.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), a = this._get(i, "showOn"), ("focus" === a || "both" === a) && t.focus(this._showDatepicker), ("button" === a || "both" === a) && (s = this._get(i, "buttonText"), n = this._get(i, "buttonImage"), i.trigger = e(this._get(i, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({src: n,alt: s,title: s}) : e("<button type='button'></button>").addClass(this._triggerClass).html(n ? e("<img/>").attr({src: n,alt: s,title: s}) : s)), t[o ? "before" : "after"](i.trigger), i.trigger.click(function() {
                return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1
            }))
        },_autoSize: function(e) {
            if (this._get(e, "autoSize") && !e.inline) {
                var t, i, a, s, n = new Date(2009, 11, 20), r = this._get(e, "dateFormat");
                r.match(/[DM]/) && (t = function(e) {
                    for (i = 0, a = 0, s = 0; e.length > s; s++)
                        e[s].length > i && (i = e[s].length, a = s);
                    return a
                }, n.setMonth(t(this._get(e, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), n.setDate(t(this._get(e, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - n.getDay())), e.input.attr("size", this._formatDate(e, n).length)
            }
        },_inlineDatepicker: function(t, i) {
            var a = e(t);
            a.hasClass(this.markerClassName) || (a.addClass(this.markerClassName).append(i.dpDiv), e.data(t, r, i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css("display", "block"))
        },_dialogDatepicker: function(t, i, a, n, o) {
            var u, c, h, l, d, p = this._dialogInst;
            return p || (this.uuid += 1, u = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + u + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), p = this._dialogInst = this._newInst(this._dialogInput, !1), p.settings = {}, e.data(this._dialogInput[0], r, p)), s(p.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(p, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (c = document.documentElement.clientWidth, h = document.documentElement.clientHeight, l = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [c / 2 - 100 + l, h / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), p.settings.onSelect = a, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], r, p), this
        },_destroyDatepicker: function(t) {
            var i, a = e(t), s = e.data(t, r);
            a.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), e.removeData(t, r), "input" === i ? (s.append.remove(), s.trigger.remove(), a.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && a.removeClass(this.markerClassName).empty())
        },_enableDatepicker: function(t) {
            var i, a, s = e(t), n = e.data(t, r);
            s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !1, n.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({opacity: "1.0",cursor: ""})) : ("div" === i || "span" === i) && (a = s.children("." + this._inlineClass), a.children().removeClass("ui-state-disabled"), a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            }))
        },_disableDatepicker: function(t) {
            var i, a, s = e(t), n = e.data(t, r);
            s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !0, n.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({opacity: "0.5",cursor: "default"})) : ("div" === i || "span" === i) && (a = s.children("." + this._inlineClass), a.children().addClass("ui-state-disabled"), a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            }), this._disabledInputs[this._disabledInputs.length] = t)
        },_isDisabledDatepicker: function(e) {
            if (!e)
                return !1;
            for (var t = 0; this._disabledInputs.length > t; t++)
                if (this._disabledInputs[t] === e)
                    return !0;
            return !1
        },_getInst: function(t) {
            try {
                return e.data(t, r)
            } catch (i) {
                throw "Missing instance data for this datepicker"
            }
        },_optionDatepicker: function(i, a, n) {
            var r, o, u, c, h = this._getInst(i);
            return 2 === arguments.length && "string" == typeof a ? "defaults" === a ? e.extend({}, e.datepicker._defaults) : h ? "all" === a ? e.extend({}, h.settings) : this._get(h, a) : null : (r = a || {}, "string" == typeof a && (r = {}, r[a] = n), h && (this._curInst === h && this._hideDatepicker(), o = this._getDateDatepicker(i, !0), u = this._getMinMaxDate(h, "min"), c = this._getMinMaxDate(h, "max"), s(h.settings, r), null !== u && r.dateFormat !== t && r.minDate === t && (h.settings.minDate = this._formatDate(h, u)), null !== c && r.dateFormat !== t && r.maxDate === t && (h.settings.maxDate = this._formatDate(h, c)), "disabled" in r && (r.disabled ? this._disableDatepicker(i) : this._enableDatepicker(i)), this._attachments(e(i), h), this._autoSize(h), this._setDate(h, o), this._updateAlternate(h), this._updateDatepicker(h)), t)
        },_changeDatepicker: function(e, t, i) {
            this._optionDatepicker(e, t, i)
        },_refreshDatepicker: function(e) {
            var t = this._getInst(e);
            t && this._updateDatepicker(t)
        },_setDateDatepicker: function(e, t) {
            var i = this._getInst(e);
            i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
        },_getDateDatepicker: function(e, t) {
            var i = this._getInst(e);
            return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null
        },_doKeyDown: function(t) {
            var i, a, s, n = e.datepicker._getInst(t.target), r = !0, o = n.dpDiv.is(".ui-datepicker-rtl");
            if (n._keyEvent = !0, e.datepicker._datepickerShowing)
                switch (t.keyCode) {
                    case 9:
                        e.datepicker._hideDatepicker(), r = !1;
                        break;
                    case 13:
                        return s = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", n.dpDiv), s[0] && e.datepicker._selectDay(t.target, n.selectedMonth, n.selectedYear, s[0]), i = e.datepicker._get(n, "onSelect"), i ? (a = e.datepicker._formatDate(n), i.apply(n.input ? n.input[0] : null, [a, n])) : e.datepicker._hideDatepicker(), !1;
                    case 27:
                        e.datepicker._hideDatepicker();
                        break;
                    case 33:
                        e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(n, "stepBigMonths") : -e.datepicker._get(n, "stepMonths"), "M");
                        break;
                    case 34:
                        e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(n, "stepBigMonths") : +e.datepicker._get(n, "stepMonths"), "M");
                        break;
                    case 35:
                        (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), r = t.ctrlKey || t.metaKey;
                        break;
                    case 36:
                        (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), r = t.ctrlKey || t.metaKey;
                        break;
                    case 37:
                        (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? 1 : -1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(n, "stepBigMonths") : -e.datepicker._get(n, "stepMonths"), "M");
                        break;
                    case 38:
                        (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), r = t.ctrlKey || t.metaKey;
                        break;
                    case 39:
                        (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? -1 : 1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(n, "stepBigMonths") : +e.datepicker._get(n, "stepMonths"), "M");
                        break;
                    case 40:
                        (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), r = t.ctrlKey || t.metaKey;
                        break;
                    default:
                        r = !1
                }
            else
                36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : r = !1;
            r && (t.preventDefault(), t.stopPropagation())
        },_doKeyPress: function(i) {
            var a, s, n = e.datepicker._getInst(i.target);
            return e.datepicker._get(n, "constrainInput") ? (a = e.datepicker._possibleChars(e.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == i.charCode ? i.keyCode : i.charCode), i.ctrlKey || i.metaKey || " " > s || !a || a.indexOf(s) > -1) : t
        },_doKeyUp: function(t) {
            var i, a = e.datepicker._getInst(t.target);
            if (a.input.val() !== a.lastVal)
                try {
                    i = e.datepicker.parseDate(e.datepicker._get(a, "dateFormat"), a.input ? a.input.val() : null, e.datepicker._getFormatConfig(a)), i && (e.datepicker._setDateFromField(a), e.datepicker._updateAlternate(a), e.datepicker._updateDatepicker(a))
                } catch (s) {
                }
            return !0
        },_showDatepicker: function(t) {
            if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = e("input", t.parentNode)[0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) {
                var i, a, n, r, o, u, c;
                i = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== i && (e.datepicker._curInst.dpDiv.stop(!0, !0), i && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), a = e.datepicker._get(i, "beforeShow"), n = a ? a.apply(t, [t, i]) : {}, n !== !1 && (s(i.settings, n), i.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(i), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), r = !1, e(t).parents().each(function() {
                    return r |= "fixed" === e(this).css("position"), !r
                }), o = {left: e.datepicker._pos[0],top: e.datepicker._pos[1]}, e.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({position: "absolute",display: "block",top: "-1000px"}), e.datepicker._updateDatepicker(i), o = e.datepicker._checkOffset(i, o, r), i.dpDiv.css({position: e.datepicker._inDialog && e.blockUI ? "static" : r ? "fixed" : "absolute",display: "none",left: o.left + "px",top: o.top + "px"}), i.inline || (u = e.datepicker._get(i, "showAnim"), c = e.datepicker._get(i, "duration"), i.dpDiv.zIndex(e(t).zIndex() + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[u] ? i.dpDiv.show(u, e.datepicker._get(i, "showOptions"), c) : i.dpDiv[u || "show"](u ? c : null), e.datepicker._shouldFocusInput(i) && i.input.focus(), e.datepicker._curInst = i))
            }
        },_updateDatepicker: function(t) {
            this.maxRows = 4, n = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t), t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var i, a = this._getNumberOfMonths(t), s = a[1], r = 17;
            t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), s > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", r * s + "em"), t.dpDiv[(1 !== a[0] || 1 !== a[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (i = t.yearshtml, setTimeout(function() {
                i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), i = t.yearshtml = null
            }, 0))
        },_shouldFocusInput: function(e) {
            return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
        },_checkOffset: function(t, i, a) {
            var s = t.dpDiv.outerWidth(), n = t.dpDiv.outerHeight(), r = t.input ? t.input.outerWidth() : 0, o = t.input ? t.input.outerHeight() : 0, u = document.documentElement.clientWidth + (a ? 0 : e(document).scrollLeft()), c = document.documentElement.clientHeight + (a ? 0 : e(document).scrollTop());
            return i.left -= this._get(t, "isRTL") ? s - r : 0, i.left -= a && i.left === t.input.offset().left ? e(document).scrollLeft() : 0, i.top -= a && i.top === t.input.offset().top + o ? e(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + s > u && u > s ? Math.abs(i.left + s - u) : 0), i.top -= Math.min(i.top, i.top + n > c && c > n ? Math.abs(n + o) : 0), i
        },_findPos: function(t) {
            for (var i, a = this._getInst(t), s = this._get(a, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t)); )
                t = t[s ? "previousSibling" : "nextSibling"];
            return i = e(t).offset(), [i.left, i.top]
        },_hideDatepicker: function(t) {
            var i, a, s, n, o = this._curInst;
            !o || t && o !== e.data(t, r) || this._datepickerShowing && (i = this._get(o, "showAnim"), a = this._get(o, "duration"), s = function() {
                e.datepicker._tidyDialog(o)
            }, e.effects && (e.effects.effect[i] || e.effects[i]) ? o.dpDiv.hide(i, e.datepicker._get(o, "showOptions"), a, s) : o.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? a : null, s), i || s(), this._datepickerShowing = !1, n = this._get(o, "onClose"), n && n.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({position: "absolute",left: "0",top: "-100px"}), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1)
        },_tidyDialog: function(e) {
            e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },_checkExternalClick: function(t) {
            if (e.datepicker._curInst) {
                var i = e(t.target), a = e.datepicker._getInst(i[0]);
                (i[0].id !== e.datepicker._mainDivId && 0 === i.parents("#" + e.datepicker._mainDivId).length && !i.hasClass(e.datepicker.markerClassName) && !i.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || i.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== a) && e.datepicker._hideDatepicker()
            }
        },_adjustDate: function(t, i, a) {
            var s = e(t), n = this._getInst(s[0]);
            this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(n, i + ("M" === a ? this._get(n, "showCurrentAtPos") : 0), a), this._updateDatepicker(n))
        },_gotoToday: function(t) {
            var i, a = e(t), s = this._getInst(a[0]);
            this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay, s.drawMonth = s.selectedMonth = s.currentMonth, s.drawYear = s.selectedYear = s.currentYear) : (i = new Date, s.selectedDay = i.getDate(), s.drawMonth = s.selectedMonth = i.getMonth(), s.drawYear = s.selectedYear = i.getFullYear()), this._notifyChange(s), this._adjustDate(a)
        },_selectMonthYear: function(t, i, a) {
            var s = e(t), n = this._getInst(s[0]);
            n["selected" + ("M" === a ? "Month" : "Year")] = n["draw" + ("M" === a ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(n), this._adjustDate(s)
        },_selectDay: function(t, i, a, s) {
            var n, r = e(t);
            e(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || (n = this._getInst(r[0]), n.selectedDay = n.currentDay = e("a", s).html(), n.selectedMonth = n.currentMonth = i, n.selectedYear = n.currentYear = a, this._selectDate(t, this._formatDate(n, n.currentDay, n.currentMonth, n.currentYear)))
        },_clearDate: function(t) {
            var i = e(t);
            this._selectDate(i, "")
        },_selectDate: function(t, i) {
            var a, s = e(t), n = this._getInst(s[0]);
            i = null != i ? i : this._formatDate(n), n.input && n.input.val(i), this._updateAlternate(n), a = this._get(n, "onSelect"), a ? a.apply(n.input ? n.input[0] : null, [i, n]) : n.input && n.input.trigger("change"), n.inline ? this._updateDatepicker(n) : (this._hideDatepicker(), this._lastInput = n.input[0], "object" != typeof n.input[0] && n.input.focus(), this._lastInput = null)
        },_updateAlternate: function(t) {
            var i, a, s, n = this._get(t, "altField");
            n && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), a = this._getDate(t), s = this.formatDate(i, a, this._getFormatConfig(t)), e(n).each(function() {
                e(this).val(s)
            }))
        },noWeekends: function(e) {
            var t = e.getDay();
            return [t > 0 && 6 > t, ""]
        },iso8601Week: function(e) {
            var t, i = new Date(e.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), t = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((t - i) / 864e5) / 7) + 1
        },parseDate: function(i, a, s) {
            if (null == i || null == a)
                throw "Invalid arguments";
            if (a = "object" == typeof a ? "" + a : a + "", "" === a)
                return null;
            var n, r, o, u, c = 0, h = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff, l = "string" != typeof h ? h : (new Date).getFullYear() % 100 + parseInt(h, 10), d = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort, p = (s ? s.dayNames : null) || this._defaults.dayNames, g = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort, m = (s ? s.monthNames : null) || this._defaults.monthNames, f = -1, _ = -1, v = -1, k = -1, y = !1, b = function(e) {
                var t = i.length > n + 1 && i.charAt(n + 1) === e;
                return t && n++, t
            }, D = function(e) {
                var t = b(e), i = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2, s = RegExp("^\\d{1," + i + "}"), n = a.substring(c).match(s);
                if (!n)
                    throw "Missing number at position " + c;
                return c += n[0].length, parseInt(n[0], 10)
            }, w = function(i, s, n) {
                var r = -1, o = e.map(b(i) ? n : s, function(e, t) {
                    return [[t, e]]
                }).sort(function(e, t) {
                    return -(e[1].length - t[1].length)
                });
                if (e.each(o, function(e, i) {
                    var s = i[1];
                    return a.substr(c, s.length).toLowerCase() === s.toLowerCase() ? (r = i[0], c += s.length, !1) : t
                }), -1 !== r)
                    return r + 1;
                throw "Unknown name at position " + c
            }, M = function() {
                if (a.charAt(c) !== i.charAt(n))
                    throw "Unexpected literal at position " + c;
                c++
            };
            for (n = 0; i.length > n; n++)
                if (y)
                    "'" !== i.charAt(n) || b("'") ? M() : y = !1;
                else
                    switch (i.charAt(n)) {
                        case "d":
                            v = D("d");
                            break;
                        case "D":
                            w("D", d, p);
                            break;
                        case "o":
                            k = D("o");
                            break;
                        case "m":
                            _ = D("m");
                            break;
                        case "M":
                            _ = w("M", g, m);
                            break;
                        case "y":
                            f = D("y");
                            break;
                        case "@":
                            u = new Date(D("@")), f = u.getFullYear(), _ = u.getMonth() + 1, v = u.getDate();
                            break;
                        case "!":
                            u = new Date((D("!") - this._ticksTo1970) / 1e4), f = u.getFullYear(), _ = u.getMonth() + 1, v = u.getDate();
                            break;
                        case "'":
                            b("'") ? M() : y = !0;
                            break;
                        default:
                            M()
                    }
            if (a.length > c && (o = a.substr(c), !/^\s+/.test(o)))
                throw "Extra/unparsed characters found in date: " + o;
            if (-1 === f ? f = (new Date).getFullYear() : 100 > f && (f += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (l >= f ? 0 : -100)), k > -1)
                for (_ = 1, v = k; ; ) {
                    if (r = this._getDaysInMonth(f, _ - 1), r >= v)
                        break;
                    _++, v -= r
                }
            if (u = this._daylightSavingAdjust(new Date(f, _ - 1, v)), u.getFullYear() !== f || u.getMonth() + 1 !== _ || u.getDate() !== v)
                throw "Invalid date";
            return u
        },ATOM: "yy-mm-dd",COOKIE: "D, dd M yy",ISO_8601: "yy-mm-dd",RFC_822: "D, d M y",RFC_850: "DD, dd-M-y",RFC_1036: "D, d M y",RFC_1123: "D, d M yy",RFC_2822: "D, d M yy",RSS: "D, d M y",TICKS: "!",TIMESTAMP: "@",W3C: "yy-mm-dd",_ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),formatDate: function(e, t, i) {
            if (!t)
                return "";
            var a, s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, n = (i ? i.dayNames : null) || this._defaults.dayNames, r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, o = (i ? i.monthNames : null) || this._defaults.monthNames, u = function(t) {
                var i = e.length > a + 1 && e.charAt(a + 1) === t;
                return i && a++, i
            }, c = function(e, t, i) {
                var a = "" + t;
                if (u(e))
                    for (; i > a.length; )
                        a = "0" + a;
                return a
            }, h = function(e, t, i, a) {
                return u(e) ? a[t] : i[t]
            }, l = "", d = !1;
            if (t)
                for (a = 0; e.length > a; a++)
                    if (d)
                        "'" !== e.charAt(a) || u("'") ? l += e.charAt(a) : d = !1;
                    else
                        switch (e.charAt(a)) {
                            case "d":
                                l += c("d", t.getDate(), 2);
                                break;
                            case "D":
                                l += h("D", t.getDay(), s, n);
                                break;
                            case "o":
                                l += c("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                                break;
                            case "m":
                                l += c("m", t.getMonth() + 1, 2);
                                break;
                            case "M":
                                l += h("M", t.getMonth(), r, o);
                                break;
                            case "y":
                                l += u("y") ? t.getFullYear() : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100;
                                break;
                            case "@":
                                l += t.getTime();
                                break;
                            case "!":
                                l += 1e4 * t.getTime() + this._ticksTo1970;
                                break;
                            case "'":
                                u("'") ? l += "'" : d = !0;
                                break;
                            default:
                                l += e.charAt(a)
                        }
            return l
        },_possibleChars: function(e) {
            var t, i = "", a = !1, s = function(i) {
                var a = e.length > t + 1 && e.charAt(t + 1) === i;
                return a && t++, a
            };
            for (t = 0; e.length > t; t++)
                if (a)
                    "'" !== e.charAt(t) || s("'") ? i += e.charAt(t) : a = !1;
                else
                    switch (e.charAt(t)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            i += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            s("'") ? i += "'" : a = !0;
                            break;
                        default:
                            i += e.charAt(t)
                    }
            return i
        },_get: function(e, i) {
            return e.settings[i] !== t ? e.settings[i] : this._defaults[i]
        },_setDateFromField: function(e, t) {
            if (e.input.val() !== e.lastVal) {
                var i = this._get(e, "dateFormat"), a = e.lastVal = e.input ? e.input.val() : null, s = this._getDefaultDate(e), n = s, r = this._getFormatConfig(e);
                try {
                    n = this.parseDate(i, a, r) || s
                } catch (o) {
                    a = t ? "" : a
                }
                e.selectedDay = n.getDate(), e.drawMonth = e.selectedMonth = n.getMonth(), e.drawYear = e.selectedYear = n.getFullYear(), e.currentDay = a ? n.getDate() : 0, e.currentMonth = a ? n.getMonth() : 0, e.currentYear = a ? n.getFullYear() : 0, this._adjustInstDate(e)
            }
        },_getDefaultDate: function(e) {
            return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
        },_determineDate: function(t, i, a) {
            var s = function(e) {
                var t = new Date;
                return t.setDate(t.getDate() + e), t
            }, n = function(i) {
                try {
                    return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), i, e.datepicker._getFormatConfig(t))
                } catch (a) {
                }
                for (var s = (i.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, n = s.getFullYear(), r = s.getMonth(), o = s.getDate(), u = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, c = u.exec(i); c; ) {
                    switch (c[2] || "d") {
                        case "d":
                        case "D":
                            o += parseInt(c[1], 10);
                            break;
                        case "w":
                        case "W":
                            o += 7 * parseInt(c[1], 10);
                            break;
                        case "m":
                        case "M":
                            r += parseInt(c[1], 10), o = Math.min(o, e.datepicker._getDaysInMonth(n, r));
                            break;
                        case "y":
                        case "Y":
                            n += parseInt(c[1], 10), o = Math.min(o, e.datepicker._getDaysInMonth(n, r))
                    }
                    c = u.exec(i)
                }
                return new Date(n, r, o)
            }, r = null == i || "" === i ? a : "string" == typeof i ? n(i) : "number" == typeof i ? isNaN(i) ? a : s(i) : new Date(i.getTime());
            return r = r && "Invalid Date" == "" + r ? a : r, r && (r.setHours(0), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0)), this._daylightSavingAdjust(r)
        },_daylightSavingAdjust: function(e) {
            return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
        },_setDate: function(e, t, i) {
            var a = !t, s = e.selectedMonth, n = e.selectedYear, r = this._restrictMinMax(e, this._determineDate(e, t, new Date));
            e.selectedDay = e.currentDay = r.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = r.getMonth(), e.drawYear = e.selectedYear = e.currentYear = r.getFullYear(), s === e.selectedMonth && n === e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(a ? "" : this._formatDate(e))
        },_getDate: function(e) {
            var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return t
        },_attachHandlers: function(t) {
            var i = this._get(t, "stepMonths"), a = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function() {
                var t = {prev: function() {
                        e.datepicker._adjustDate(a, -i, "M")
                    },next: function() {
                        e.datepicker._adjustDate(a, +i, "M")
                    },hide: function() {
                        e.datepicker._hideDatepicker()
                    },today: function() {
                        e.datepicker._gotoToday(a)
                    },selectDay: function() {
                        return e.datepicker._selectDay(a, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    },selectMonth: function() {
                        return e.datepicker._selectMonthYear(a, this, "M"), !1
                    },selectYear: function() {
                        return e.datepicker._selectMonthYear(a, this, "Y"), !1
                    }};
                e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            })
        },_generateHTML: function(e) {
            var t, i, a, s, n, r, o, u, c, h, l, d, p, g, m, f, _, v, k, y, b, D, w, M, C, x, I, N, T, A, E, S, Y, F, P, O, j, K, R, H = new Date, W = this._daylightSavingAdjust(new Date(H.getFullYear(), H.getMonth(), H.getDate())), L = this._get(e, "isRTL"), U = this._get(e, "showButtonPanel"), B = this._get(e, "hideIfNoPrevNext"), z = this._get(e, "navigationAsDateFormat"), q = this._getNumberOfMonths(e), G = this._get(e, "showCurrentAtPos"), J = this._get(e, "stepMonths"), Q = 1 !== q[0] || 1 !== q[1], V = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)), $ = this._getMinMaxDate(e, "min"), X = this._getMinMaxDate(e, "max"), Z = e.drawMonth - G, et = e.drawYear;
            if (0 > Z && (Z += 12, et--), X)
                for (t = this._daylightSavingAdjust(new Date(X.getFullYear(), X.getMonth() - q[0] * q[1] + 1, X.getDate())), t = $ && $ > t ? $ : t; this._daylightSavingAdjust(new Date(et, Z, 1)) > t; )
                    Z--, 0 > Z && (Z = 11, et--);
            for (e.drawMonth = Z, e.drawYear = et, i = this._get(e, "prevText"), i = z ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, Z - J, 1)), this._getFormatConfig(e)) : i, a = this._canAdjustMonth(e, -1, et, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (L ? "e" : "w") + "'>" + i + "</span></a>" : B ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (L ? "e" : "w") + "'>" + i + "</span></a>", s = this._get(e, "nextText"), s = z ? this.formatDate(s, this._daylightSavingAdjust(new Date(et, Z + J, 1)), this._getFormatConfig(e)) : s, n = this._canAdjustMonth(e, 1, et, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (L ? "w" : "e") + "'>" + s + "</span></a>" : B ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (L ? "w" : "e") + "'>" + s + "</span></a>", r = this._get(e, "currentText"), o = this._get(e, "gotoCurrent") && e.currentDay ? V : W, r = z ? this.formatDate(r, o, this._getFormatConfig(e)) : r, u = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", c = U ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (L ? u : "") + (this._isInRange(e, o) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (L ? "" : u) + "</div>" : "", h = parseInt(this._get(e, "firstDay"), 10), h = isNaN(h) ? 0 : h, l = this._get(e, "showWeek"), d = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), g = this._get(e, "monthNames"), m = this._get(e, "monthNamesShort"), f = this._get(e, "beforeShowDay"), _ = this._get(e, "showOtherMonths"), v = this._get(e, "selectOtherMonths"), k = this._getDefaultDate(e), y = "", D = 0; q[0] > D; D++) {
                for (w = "", this.maxRows = 4, M = 0; q[1] > M; M++) {
                    if (C = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay)), x = " ui-corner-all", I = "", Q) {
                        if (I += "<div class='ui-datepicker-group", q[1] > 1)
                            switch (M) {
                                case 0:
                                    I += " ui-datepicker-group-first", x = " ui-corner-" + (L ? "right" : "left");
                                    break;
                                case q[1] - 1:
                                    I += " ui-datepicker-group-last", x = " ui-corner-" + (L ? "left" : "right");
                                    break;
                                default:
                                    I += " ui-datepicker-group-middle", x = ""
                            }
                        I += "'>"
                    }
                    for (I += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + x + "'>" + (/all|left/.test(x) && 0 === D ? L ? n : a : "") + (/all|right/.test(x) && 0 === D ? L ? a : n : "") + this._generateMonthYearHeader(e, Z, et, $, X, D > 0 || M > 0, g, m) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", N = l ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", b = 0; 7 > b; b++)
                        T = (b + h) % 7, N += "<th" + ((b + h + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + d[T] + "'>" + p[T] + "</span></th>";
                    for (I += N + "</tr></thead><tbody>", A = this._getDaysInMonth(et, Z), et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, A)), E = (this._getFirstDayOfMonth(et, Z) - h + 7) % 7, S = Math.ceil((E + A) / 7), Y = Q ? this.maxRows > S ? this.maxRows : S : S, this.maxRows = Y, F = this._daylightSavingAdjust(new Date(et, Z, 1 - E)), P = 0; Y > P; P++) {
                        for (I += "<tr>", O = l ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(F) + "</td>" : "", b = 0; 7 > b; b++)
                            j = f ? f.apply(e.input ? e.input[0] : null, [F]) : [!0, ""], K = F.getMonth() !== Z, R = K && !v || !j[0] || $ && $ > F || X && F > X, O += "<td class='" + ((b + h + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (K ? " ui-datepicker-other-month" : "") + (F.getTime() === C.getTime() && Z === e.selectedMonth && e._keyEvent || k.getTime() === F.getTime() && k.getTime() === C.getTime() ? " " + this._dayOverClass : "") + (R ? " " + this._unselectableClass + " ui-state-disabled" : "") + (K && !_ ? "" : " " + j[1] + (F.getTime() === V.getTime() ? " " + this._currentClass : "") + (F.getTime() === W.getTime() ? " ui-datepicker-today" : "")) + "'" + (K && !_ || !j[2] ? "" : " title='" + j[2].replace(/'/g, "&#39;") + "'") + (R ? "" : " data-handler='selectDay' data-event='click' data-month='" + F.getMonth() + "' data-year='" + F.getFullYear() + "'") + ">" + (K && !_ ? "&#xa0;" : R ? "<span class='ui-state-default'>" + F.getDate() + "</span>" : "<a class='ui-state-default" + (F.getTime() === W.getTime() ? " ui-state-highlight" : "") + (F.getTime() === V.getTime() ? " ui-state-active" : "") + (K ? " ui-priority-secondary" : "") + "' href='#'>" + F.getDate() + "</a>") + "</td>", F.setDate(F.getDate() + 1), F = this._daylightSavingAdjust(F);
                        I += O + "</tr>"
                    }
                    Z++, Z > 11 && (Z = 0, et++), I += "</tbody></table>" + (Q ? "</div>" + (q[0] > 0 && M === q[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), w += I
                }
                y += w
            }
            return y += c, e._keyEvent = !1, y
        },_generateMonthYearHeader: function(e, t, i, a, s, n, r, o) {
            var u, c, h, l, d, p, g, m, f = this._get(e, "changeMonth"), _ = this._get(e, "changeYear"), v = this._get(e, "showMonthAfterYear"), k = "<div class='ui-datepicker-title'>", y = "";
            if (n || !f)
                y += "<span class='ui-datepicker-month'>" + r[t] + "</span>";
            else {
                for (u = a && a.getFullYear() === i, c = s && s.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", h = 0; 12 > h; h++)
                    (!u || h >= a.getMonth()) && (!c || s.getMonth() >= h) && (y += "<option value='" + h + "'" + (h === t ? " selected='selected'" : "") + ">" + o[h] + "</option>");
                y += "</select>"
            }
            if (v || (k += y + (!n && f && _ ? "" : "&#xa0;")), !e.yearshtml)
                if (e.yearshtml = "", n || !_)
                    k += "<span class='ui-datepicker-year'>" + i + "</span>";
                else {
                    for (l = this._get(e, "yearRange").split(":"), d = (new Date).getFullYear(), p = function(e) {
                        var t = e.match(/c[+\-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? d + parseInt(e, 10) : parseInt(e, 10);
                        return isNaN(t) ? d : t
                    }, g = p(l[0]), m = Math.max(g, p(l[1] || "")), g = a ? Math.max(g, a.getFullYear()) : g, m = s ? Math.min(m, s.getFullYear()) : m, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= g; g++)
                        e.yearshtml += "<option value='" + g + "'" + (g === i ? " selected='selected'" : "") + ">" + g + "</option>";
                    e.yearshtml += "</select>", k += e.yearshtml, e.yearshtml = null
                }
            return k += this._get(e, "yearSuffix"), v && (k += (!n && f && _ ? "" : "&#xa0;") + y), k += "</div>"
        },_adjustInstDate: function(e, t, i) {
            var a = e.drawYear + ("Y" === i ? t : 0), s = e.drawMonth + ("M" === i ? t : 0), n = Math.min(e.selectedDay, this._getDaysInMonth(a, s)) + ("D" === i ? t : 0), r = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(a, s, n)));
            e.selectedDay = r.getDate(), e.drawMonth = e.selectedMonth = r.getMonth(), e.drawYear = e.selectedYear = r.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(e)
        },_restrictMinMax: function(e, t) {
            var i = this._getMinMaxDate(e, "min"), a = this._getMinMaxDate(e, "max"), s = i && i > t ? i : t;
            return a && s > a ? a : s
        },_notifyChange: function(e) {
            var t = this._get(e, "onChangeMonthYear");
            t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
        },_getNumberOfMonths: function(e) {
            var t = this._get(e, "numberOfMonths");
            return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
        },_getMinMaxDate: function(e, t) {
            return this._determineDate(e, this._get(e, t + "Date"), null)
        },_getDaysInMonth: function(e, t) {
            return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
        },_getFirstDayOfMonth: function(e, t) {
            return new Date(e, t, 1).getDay()
        },_canAdjustMonth: function(e, t, i, a) {
            var s = this._getNumberOfMonths(e), n = this._daylightSavingAdjust(new Date(i, a + (0 > t ? t : s[0] * s[1]), 1));
            return 0 > t && n.setDate(this._getDaysInMonth(n.getFullYear(), n.getMonth())), this._isInRange(e, n)
        },_isInRange: function(e, t) {
            var i, a, s = this._getMinMaxDate(e, "min"), n = this._getMinMaxDate(e, "max"), r = null, o = null, u = this._get(e, "yearRange");
            return u && (i = u.split(":"), a = (new Date).getFullYear(), r = parseInt(i[0], 10), o = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += a), i[1].match(/[+\-].*/) && (o += a)), (!s || t.getTime() >= s.getTime()) && (!n || t.getTime() <= n.getTime()) && (!r || t.getFullYear() >= r) && (!o || o >= t.getFullYear())
        },_getFormatConfig: function(e) {
            var t = this._get(e, "shortYearCutoff");
            return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {shortYearCutoff: t,dayNamesShort: this._get(e, "dayNamesShort"),dayNames: this._get(e, "dayNames"),monthNamesShort: this._get(e, "monthNamesShort"),monthNames: this._get(e, "monthNames")}
        },_formatDate: function(e, t, i, a) {
            t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
            var s = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(a, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return this.formatDate(this._get(e, "dateFormat"), s, this._getFormatConfig(e))
        }}), e.fn.datepicker = function(t) {
        if (!this.length)
            return this;
        e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i)) : this.each(function() {
            "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(i)) : e.datepicker._attachDatepicker(this, t)
        }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i))
    }, e.datepicker = new i, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.10.4"
})(jQuery);
(function(e) {
    var t = {buttons: !0,height: !0,maxHeight: !0,maxWidth: !0,minHeight: !0,minWidth: !0,width: !0}, i = {maxHeight: !0,maxWidth: !0,minHeight: !0,minWidth: !0};
    e.widget("ui.dialog", {version: "1.10.4",options: {appendTo: "body",autoOpen: !0,buttons: [],closeOnEscape: !0,closeText: "close",dialogClass: "",draggable: !0,hide: null,height: "auto",maxHeight: null,maxWidth: null,minHeight: 150,minWidth: 150,modal: !1,position: {my: "center",at: "center",of: window,collision: "fit",using: function(t) {
                    var i = e(this).css(t).offset().top;
                    0 > i && e(this).css("top", t.top - i)
                }},resizable: !0,show: null,title: null,width: 300,beforeClose: null,close: null,drag: null,dragStart: null,dragStop: null,focus: null,open: null,resize: null,resizeStart: null,resizeStop: null},_create: function() {
            this.originalCss = {display: this.element[0].style.display,width: this.element[0].style.width,minHeight: this.element[0].style.minHeight,maxHeight: this.element[0].style.maxHeight,height: this.element[0].style.height}, this.originalPosition = {parent: this.element.parent(),index: this.element.parent().children().index(this.element)}, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && e.fn.draggable && this._makeDraggable(), this.options.resizable && e.fn.resizable && this._makeResizable(), this._isOpen = !1
        },_init: function() {
            this.options.autoOpen && this.open()
        },_appendTo: function() {
            var t = this.options.appendTo;
            return t && (t.jquery || t.nodeType) ? e(t) : this.document.find(t || "body").eq(0)
        },_destroy: function() {
            var e, t = this.originalPosition;
            this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), e = t.parent.children().eq(t.index), e.length && e[0] !== this.element[0] ? e.before(this.element) : t.parent.append(this.element)
        },widget: function() {
            return this.uiDialog
        },disable: e.noop,enable: e.noop,close: function(t) {
            var i, a = this;
            if (this._isOpen && this._trigger("beforeClose", t) !== !1) {
                if (this._isOpen = !1, this._destroyOverlay(), !this.opener.filter(":focusable").focus().length)
                    try {
                        i = this.document[0].activeElement, i && "body" !== i.nodeName.toLowerCase() && e(i).blur()
                    } catch (s) {
                    }
                this._hide(this.uiDialog, this.options.hide, function() {
                    a._trigger("close", t)
                })
            }
        },isOpen: function() {
            return this._isOpen
        },moveToTop: function() {
            this._moveToTop()
        },_moveToTop: function(e, t) {
            var i = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
            return i && !t && this._trigger("focus", e), i
        },open: function() {
            var t = this;
            return this._isOpen ? (this._moveToTop() && this._focusTabbable(), undefined) : (this._isOpen = !0, this.opener = e(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this._show(this.uiDialog, this.options.show, function() {
                t._focusTabbable(), t._trigger("focus")
            }), this._trigger("open"), undefined)
        },_focusTabbable: function() {
            var e = this.element.find("[autofocus]");
            e.length || (e = this.element.find(":tabbable")), e.length || (e = this.uiDialogButtonPane.find(":tabbable")), e.length || (e = this.uiDialogTitlebarClose.filter(":tabbable")), e.length || (e = this.uiDialog), e.eq(0).focus()
        },_keepFocus: function(t) {
            function i() {
                var t = this.document[0].activeElement, i = this.uiDialog[0] === t || e.contains(this.uiDialog[0], t);
                i || this._focusTabbable()
            }
            t.preventDefault(), i.call(this), this._delay(i)
        },_createWrapper: function() {
            this.uiDialog = e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({tabIndex: -1,role: "dialog"}).appendTo(this._appendTo()), this._on(this.uiDialog, {keydown: function(t) {
                    if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === e.ui.keyCode.ESCAPE)
                        return t.preventDefault(), this.close(t), undefined;
                    if (t.keyCode === e.ui.keyCode.TAB) {
                        var i = this.uiDialog.find(":tabbable"), a = i.filter(":first"), s = i.filter(":last");
                        t.target !== s[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== a[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (s.focus(1), t.preventDefault()) : (a.focus(1), t.preventDefault())
                    }
                },mousedown: function(e) {
                    this._moveToTop(e) && this._focusTabbable()
                }}), this.element.find("[aria-describedby]").length || this.uiDialog.attr({"aria-describedby": this.element.uniqueId().attr("id")})
        },_createTitlebar: function() {
            var t;
            this.uiDialogTitlebar = e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {mousedown: function(t) {
                    e(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                }}), this.uiDialogTitlebarClose = e("<button type='button'></button>").button({label: this.options.closeText,icons: {primary: "ui-icon-closethick"},text: !1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {click: function(e) {
                    e.preventDefault(), this.close(e)
                }}), t = e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(t), this.uiDialog.attr({"aria-labelledby": t.attr("id")})
        },_title: function(e) {
            this.options.title || e.html("&#160;"), e.text(this.options.title)
        },_createButtonPane: function() {
            this.uiDialogButtonPane = e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
        },_createButtons: function() {
            var t = this, i = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), e.isEmptyObject(i) || e.isArray(i) && !i.length ? (this.uiDialog.removeClass("ui-dialog-buttons"), undefined) : (e.each(i, function(i, a) {
                var s, n;
                a = e.isFunction(a) ? {click: a,text: i} : a, a = e.extend({type: "button"}, a), s = a.click, a.click = function() {
                    s.apply(t.element[0], arguments)
                }, n = {icons: a.icons,text: a.showText}, delete a.icons, delete a.showText, e("<button></button>", a).button(n).appendTo(t.uiButtonSet)
            }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), undefined)
        },_makeDraggable: function() {
            function t(e) {
                return {position: e.position,offset: e.offset}
            }
            var i = this, a = this.options;
            this.uiDialog.draggable({cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",handle: ".ui-dialog-titlebar",containment: "document",start: function(a, s) {
                    e(this).addClass("ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", a, t(s))
                },drag: function(e, a) {
                    i._trigger("drag", e, t(a))
                },stop: function(s, n) {
                    a.position = [n.position.left - i.document.scrollLeft(), n.position.top - i.document.scrollTop()], e(this).removeClass("ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", s, t(n))
                }})
        },_makeResizable: function() {
            function t(e) {
                return {originalPosition: e.originalPosition,originalSize: e.originalSize,position: e.position,size: e.size}
            }
            var i = this, a = this.options, s = a.resizable, n = this.uiDialog.css("position"), r = "string" == typeof s ? s : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({cancel: ".ui-dialog-content",containment: "document",alsoResize: this.element,maxWidth: a.maxWidth,maxHeight: a.maxHeight,minWidth: a.minWidth,minHeight: this._minHeight(),handles: r,start: function(a, s) {
                    e(this).addClass("ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", a, t(s))
                },resize: function(e, a) {
                    i._trigger("resize", e, t(a))
                },stop: function(s, n) {
                    a.height = e(this).height(), a.width = e(this).width(), e(this).removeClass("ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", s, t(n))
                }}).css("position", n)
        },_minHeight: function() {
            var e = this.options;
            return "auto" === e.height ? e.minHeight : Math.min(e.minHeight, e.height)
        },_position: function() {
            var e = this.uiDialog.is(":visible");
            e || this.uiDialog.show(), this.uiDialog.position(this.options.position), e || this.uiDialog.hide()
        },_setOptions: function(a) {
            var s = this, n = !1, r = {};
            e.each(a, function(e, a) {
                s._setOption(e, a), e in t && (n = !0), e in i && (r[e] = a)
            }), n && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", r)
        },_setOption: function(e, t) {
            var i, a, s = this.uiDialog;
            "dialogClass" === e && s.removeClass(this.options.dialogClass).addClass(t), "disabled" !== e && (this._super(e, t), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({label: "" + t}), "draggable" === e && (i = s.is(":data(ui-draggable)"), i && !t && s.draggable("destroy"), !i && t && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && (a = s.is(":data(ui-resizable)"), a && !t && s.resizable("destroy"), a && "string" == typeof t && s.resizable("option", "handles", t), a || t === !1 || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },_size: function() {
            var e, t, i, a = this.options;
            this.element.show().css({width: "auto",minHeight: 0,maxHeight: "none",height: 0}), a.minWidth > a.width && (a.width = a.minWidth), e = this.uiDialog.css({height: "auto",width: a.width}).outerHeight(), t = Math.max(0, a.minHeight - e), i = "number" == typeof a.maxHeight ? Math.max(0, a.maxHeight - e) : "none", "auto" === a.height ? this.element.css({minHeight: t,maxHeight: i,height: "auto"}) : this.element.height(Math.max(0, a.height - e)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },_blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var t = e(this);
                return e("<div>").css({position: "absolute",width: t.outerWidth(),height: t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]
            })
        },_unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },_allowInteraction: function(t) {
            return e(t.target).closest(".ui-dialog").length ? !0 : !!e(t.target).closest(".ui-datepicker").length
        },_createOverlay: function() {
            if (this.options.modal) {
                var t = this, i = this.widgetFullName;
                e.ui.dialog.overlayInstances || this._delay(function() {
                    e.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function(a) {
                        t._allowInteraction(a) || (a.preventDefault(), e(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable())
                    })
                }), this.overlay = e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {mousedown: "_keepFocus"}), e.ui.dialog.overlayInstances++
            }
        },_destroyOverlay: function() {
            this.options.modal && this.overlay && (e.ui.dialog.overlayInstances--, e.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"), this.overlay.remove(), this.overlay = null)
        }}), e.ui.dialog.overlayInstances = 0, e.uiBackCompat !== !1 && e.widget("ui.dialog", e.ui.dialog, {_position: function() {
            var t, i = this.options.position, a = [], s = [0, 0];
            i ? (("string" == typeof i || "object" == typeof i && "0" in i) && (a = i.split ? i.split(" ") : [i[0], i[1]], 1 === a.length && (a[1] = a[0]), e.each(["left", "top"], function(e, t) {
                +a[e] === a[e] && (s[e] = a[e], a[e] = t)
            }), i = {my: a[0] + (0 > s[0] ? s[0] : "+" + s[0]) + " " + a[1] + (0 > s[1] ? s[1] : "+" + s[1]),at: a.join(" ")}), i = e.extend({}, e.ui.dialog.prototype.options.position, i)) : i = e.ui.dialog.prototype.options.position, t = this.uiDialog.is(":visible"), t || this.uiDialog.show(), this.uiDialog.position(i), t || this.uiDialog.hide()
        }})
})(jQuery);
(function(t) {
    t.widget("ui.draggable", t.ui.mouse, {version: "1.10.4",widgetEventPrefix: "drag",options: {addClasses: !0,appendTo: "parent",axis: !1,connectToSortable: !1,containment: !1,cursor: "auto",cursorAt: !1,grid: !1,handle: !1,helper: "original",iframeFix: !1,opacity: !1,refreshPositions: !1,revert: !1,revertDuration: 500,scope: "default",scroll: !0,scrollSensitivity: 20,scrollSpeed: 20,snap: !1,snapMode: "both",snapTolerance: 20,stack: !1,zIndex: !1,drag: null,start: null,stop: null},_create: function() {
            "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        },_destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
        },_mouseCapture: function(e) {
            var i = this.options;
            return this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e), this.handle ? (t(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function() {
                t("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width: this.offsetWidth + "px",height: this.offsetHeight + "px",position: "absolute",opacity: "0.001",zIndex: 1e3}).css(t(this).offset()).appendTo("body")
            }), !0) : !1)
        },_mouseStart: function(e) {
            var i = this.options;
            return this.helper = this._createHelper(e), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {top: this.offset.top - this.margins.top,left: this.offset.left - this.margins.left}, this.offset.scroll = !1, t.extend(this.offset, {click: {left: e.pageX - this.offset.left,top: e.pageY - this.offset.top},parent: this._getParentOffset(),relative: this._getRelativeOffset()}), this.originalPosition = this.position = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
        },_mouseDrag: function(e, i) {
            if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var s = this._uiHash();
                if (this._trigger("drag", e, s) === !1)
                    return this._mouseUp({}), !1;
                this.position = s.position
            }
            return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
        },_mouseStop: function(e) {
            var i = this, s = !1;
            return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)), this.dropped && (s = this.dropped, this.dropped = !1), "original" !== this.options.helper || t.contains(this.element[0].ownerDocument, this.element[0]) ? ("invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                i._trigger("stop", e) !== !1 && i._clear()
            }) : this._trigger("stop", e) !== !1 && this._clear(), !1) : !1
        },_mouseUp: function(e) {
            return t("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            }), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), t.ui.mouse.prototype._mouseUp.call(this, e)
        },cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },_getHandle: function(e) {
            return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0
        },_createHelper: function(e) {
            var i = this.options, s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
        },_adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {left: +e[0],top: +e[1] || 0}), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },_getParentOffset: function() {
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {top: 0,left: 0}), {top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)}
        },_getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var t = this.element.position();
                return {top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()}
            }
            return {top: 0,left: 0}
        },_cacheMargins: function() {
            this.margins = {left: parseInt(this.element.css("marginLeft"), 10) || 0,top: parseInt(this.element.css("marginTop"), 10) || 0,right: parseInt(this.element.css("marginRight"), 10) || 0,bottom: parseInt(this.element.css("marginBottom"), 10) || 0}
        },_cacheHelperProportions: function() {
            this.helperProportions = {width: this.helper.outerWidth(),height: this.helper.outerHeight()}
        },_setContainment: function() {
            var e, i, s, n = this.options;
            return n.containment ? "window" === n.containment ? (this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], undefined) : "document" === n.containment ? (this.containment = [0, 0, t(document).width() - this.helperProportions.width - this.margins.left, (t(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], undefined) : n.containment.constructor === Array ? (this.containment = n.containment, undefined) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = t(n.containment), s = i[0], s && (e = "hidden" !== i.css("overflow"), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = i), undefined) : (this.containment = null, undefined)
        },_convertPositionTo: function(e, i) {
            i || (i = this.position);
            var s = "absolute" === e ? 1 : -1, n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
            return this.offset.scroll || (this.offset.scroll = {top: n.scrollTop(),left: n.scrollLeft()}), {top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * s,left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * s}
        },_generatePosition: function(e) {
            var i, s, n, a, o = this.options, r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, l = e.pageX, h = e.pageY;
            return this.offset.scroll || (this.offset.scroll = {top: r.scrollTop(),left: r.scrollLeft()}), this.originalPosition && (this.containment && (this.relative_container ? (s = this.relative_container.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), o.grid && (n = o.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, h = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - o.grid[1] : n + o.grid[1] : n, a = o.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, l = i ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2] ? a : a - this.offset.click.left >= i[0] ? a - o.grid[0] : a + o.grid[0] : a)), {top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)}
        },_clear: function() {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },_trigger: function(e, i, s) {
            return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s]), "drag" === e && (this.positionAbs = this._convertPositionTo("absolute")), t.Widget.prototype._trigger.call(this, e, i, s)
        },plugins: {},_uiHash: function() {
            return {helper: this.helper,position: this.position,originalPosition: this.originalPosition,offset: this.positionAbs}
        }}), t.ui.plugin.add("draggable", "connectToSortable", {start: function(e, i) {
            var s = t(this).data("ui-draggable"), n = s.options, a = t.extend({}, i, {item: s.element});
            s.sortables = [], t(n.connectToSortable).each(function() {
                var i = t.data(this, "ui-sortable");
                i && !i.options.disabled && (s.sortables.push({instance: i,shouldRevert: i.options.revert}), i.refreshPositions(), i._trigger("activate", e, a))
            })
        },stop: function(e, i) {
            var s = t(this).data("ui-draggable"), n = t.extend({}, i, {item: s.element});
            t.each(s.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0, s.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(e), this.instance.options.helper = this.instance.options._helper, "original" === s.options.helper && this.instance.currentItem.css({top: "auto",left: "auto"})) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", e, n))
            })
        },drag: function(e, i) {
            var s = t(this).data("ui-draggable"), n = this;
            t.each(s.sortables, function() {
                var a = !1, o = this;
                this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (a = !0, t.each(s.sortables, function() {
                    return this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this !== o && this.instance._intersectsWith(this.instance.containerCache) && t.contains(o.instance.element[0], this.instance.element[0]) && (a = !1), a
                })), a ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = t(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                    return i.helper[0]
                }, e.target = this.instance.currentItem[0], this.instance._mouseCapture(e, !0), this.instance._mouseStart(e, !0, !0), this.instance.offset.click.top = s.offset.click.top, this.instance.offset.click.left = s.offset.click.left, this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top, s._trigger("toSortable", e), s.dropped = this.instance.element, s.currentItem = s.element, this.instance.fromOutside = s), this.instance.currentItem && this.instance._mouseDrag(e)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", e, this.instance._uiHash(this.instance)), this.instance._mouseStop(e, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), s._trigger("fromSortable", e), s.dropped = !1)
            })
        }}), t.ui.plugin.add("draggable", "cursor", {start: function() {
            var e = t("body"), i = t(this).data("ui-draggable").options;
            e.css("cursor") && (i._cursor = e.css("cursor")), e.css("cursor", i.cursor)
        },stop: function() {
            var e = t(this).data("ui-draggable").options;
            e._cursor && t("body").css("cursor", e._cursor)
        }}), t.ui.plugin.add("draggable", "opacity", {start: function(e, i) {
            var s = t(i.helper), n = t(this).data("ui-draggable").options;
            s.css("opacity") && (n._opacity = s.css("opacity")), s.css("opacity", n.opacity)
        },stop: function(e, i) {
            var s = t(this).data("ui-draggable").options;
            s._opacity && t(i.helper).css("opacity", s._opacity)
        }}), t.ui.plugin.add("draggable", "scroll", {start: function() {
            var e = t(this).data("ui-draggable");
            e.scrollParent[0] !== document && "HTML" !== e.scrollParent[0].tagName && (e.overflowOffset = e.scrollParent.offset())
        },drag: function(e) {
            var i = t(this).data("ui-draggable"), s = i.options, n = !1;
            i.scrollParent[0] !== document && "HTML" !== i.scrollParent[0].tagName ? (s.axis && "x" === s.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - e.pageY < s.scrollSensitivity ? i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop + s.scrollSpeed : e.pageY - i.overflowOffset.top < s.scrollSensitivity && (i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - e.pageX < s.scrollSensitivity ? i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft + s.scrollSpeed : e.pageX - i.overflowOffset.left < s.scrollSensitivity && (i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (e.pageY - t(document).scrollTop() < s.scrollSensitivity ? n = t(document).scrollTop(t(document).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < s.scrollSensitivity && (n = t(document).scrollTop(t(document).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (e.pageX - t(document).scrollLeft() < s.scrollSensitivity ? n = t(document).scrollLeft(t(document).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < s.scrollSensitivity && (n = t(document).scrollLeft(t(document).scrollLeft() + s.scrollSpeed)))), n !== !1 && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(i, e)
        }}), t.ui.plugin.add("draggable", "snap", {start: function() {
            var e = t(this).data("ui-draggable"), i = e.options;
            e.snapElements = [], t(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function() {
                var i = t(this), s = i.offset();
                this !== e.element[0] && e.snapElements.push({item: this,width: i.outerWidth(),height: i.outerHeight(),top: s.top,left: s.left})
            })
        },drag: function(e, i) {
            var s, n, a, o, r, l, h, c, u, d, p = t(this).data("ui-draggable"), g = p.options, f = g.snapTolerance, m = i.offset.left, _ = m + p.helperProportions.width, v = i.offset.top, b = v + p.helperProportions.height;
            for (u = p.snapElements.length - 1; u >= 0; u--)
                r = p.snapElements[u].left, l = r + p.snapElements[u].width, h = p.snapElements[u].top, c = h + p.snapElements[u].height, r - f > _ || m > l + f || h - f > b || v > c + f || !t.contains(p.snapElements[u].item.ownerDocument, p.snapElements[u].item) ? (p.snapElements[u].snapping && p.options.snap.release && p.options.snap.release.call(p.element, e, t.extend(p._uiHash(), {snapItem: p.snapElements[u].item})), p.snapElements[u].snapping = !1) : ("inner" !== g.snapMode && (s = f >= Math.abs(h - b), n = f >= Math.abs(c - v), a = f >= Math.abs(r - _), o = f >= Math.abs(l - m), s && (i.position.top = p._convertPositionTo("relative", {top: h - p.helperProportions.height,left: 0}).top - p.margins.top), n && (i.position.top = p._convertPositionTo("relative", {top: c,left: 0}).top - p.margins.top), a && (i.position.left = p._convertPositionTo("relative", {top: 0,left: r - p.helperProportions.width}).left - p.margins.left), o && (i.position.left = p._convertPositionTo("relative", {top: 0,left: l}).left - p.margins.left)), d = s || n || a || o, "outer" !== g.snapMode && (s = f >= Math.abs(h - v), n = f >= Math.abs(c - b), a = f >= Math.abs(r - m), o = f >= Math.abs(l - _), s && (i.position.top = p._convertPositionTo("relative", {top: h,left: 0}).top - p.margins.top), n && (i.position.top = p._convertPositionTo("relative", {top: c - p.helperProportions.height,left: 0}).top - p.margins.top), a && (i.position.left = p._convertPositionTo("relative", {top: 0,left: r}).left - p.margins.left), o && (i.position.left = p._convertPositionTo("relative", {top: 0,left: l - p.helperProportions.width}).left - p.margins.left)), !p.snapElements[u].snapping && (s || n || a || o || d) && p.options.snap.snap && p.options.snap.snap.call(p.element, e, t.extend(p._uiHash(), {snapItem: p.snapElements[u].item})), p.snapElements[u].snapping = s || n || a || o || d)
        }}), t.ui.plugin.add("draggable", "stack", {start: function() {
            var e, i = this.data("ui-draggable").options, s = t.makeArray(t(i.stack)).sort(function(e, i) {
                return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
            });
            s.length && (e = parseInt(t(s[0]).css("zIndex"), 10) || 0, t(s).each(function(i) {
                t(this).css("zIndex", e + i)
            }), this.css("zIndex", e + s.length))
        }}), t.ui.plugin.add("draggable", "zIndex", {start: function(e, i) {
            var s = t(i.helper), n = t(this).data("ui-draggable").options;
            s.css("zIndex") && (n._zIndex = s.css("zIndex")), s.css("zIndex", n.zIndex)
        },stop: function(e, i) {
            var s = t(this).data("ui-draggable").options;
            s._zIndex && t(i.helper).css("zIndex", s._zIndex)
        }})
})(jQuery);
(function(t) {
    function e(t, e, i) {
        return t > e && e + i > t
    }
    t.widget("ui.droppable", {version: "1.10.4",widgetEventPrefix: "drop",options: {accept: "*",activeClass: !1,addClasses: !0,greedy: !1,hoverClass: !1,scope: "default",tolerance: "intersect",activate: null,deactivate: null,drop: null,out: null,over: null},_create: function() {
            var e, i = this.options, s = i.accept;
            this.isover = !1, this.isout = !0, this.accept = t.isFunction(s) ? s : function(t) {
                return t.is(s)
            }, this.proportions = function() {
                return arguments.length ? (e = arguments[0], undefined) : e ? e : e = {width: this.element[0].offsetWidth,height: this.element[0].offsetHeight}
            }, t.ui.ddmanager.droppables[i.scope] = t.ui.ddmanager.droppables[i.scope] || [], t.ui.ddmanager.droppables[i.scope].push(this), i.addClasses && this.element.addClass("ui-droppable")
        },_destroy: function() {
            for (var e = 0, i = t.ui.ddmanager.droppables[this.options.scope]; i.length > e; e++)
                i[e] === this && i.splice(e, 1);
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },_setOption: function(e, i) {
            "accept" === e && (this.accept = t.isFunction(i) ? i : function(t) {
                return t.is(i)
            }), t.Widget.prototype._setOption.apply(this, arguments)
        },_activate: function(e) {
            var i = t.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", e, this.ui(i))
        },_deactivate: function(e) {
            var i = t.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", e, this.ui(i))
        },_over: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", e, this.ui(i)))
        },_out: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", e, this.ui(i)))
        },_drop: function(e, i) {
            var s = i || t.ui.ddmanager.current, n = !1;
            return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var e = t.data(this, "ui-droppable");
                return e.options.greedy && !e.options.disabled && e.options.scope === s.options.scope && e.accept.call(e.element[0], s.currentItem || s.element) && t.ui.intersect(s, t.extend(e, {offset: e.element.offset()}), e.options.tolerance) ? (n = !0, !1) : undefined
            }), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", e, this.ui(s)), this.element) : !1) : !1
        },ui: function(t) {
            return {draggable: t.currentItem || t.element,helper: t.helper,position: t.position,offset: t.positionAbs}
        }}), t.ui.intersect = function(t, i, s) {
        if (!i.offset)
            return !1;
        var n, a, o = (t.positionAbs || t.position.absolute).left, r = (t.positionAbs || t.position.absolute).top, l = o + t.helperProportions.width, h = r + t.helperProportions.height, c = i.offset.left, u = i.offset.top, d = c + i.proportions().width, p = u + i.proportions().height;
        switch (s) {
            case "fit":
                return o >= c && d >= l && r >= u && p >= h;
            case "intersect":
                return o + t.helperProportions.width / 2 > c && d > l - t.helperProportions.width / 2 && r + t.helperProportions.height / 2 > u && p > h - t.helperProportions.height / 2;
            case "pointer":
                return n = (t.positionAbs || t.position.absolute).left + (t.clickOffset || t.offset.click).left, a = (t.positionAbs || t.position.absolute).top + (t.clickOffset || t.offset.click).top, e(a, u, i.proportions().height) && e(n, c, i.proportions().width);
            case "touch":
                return (r >= u && p >= r || h >= u && p >= h || u > r && h > p) && (o >= c && d >= o || l >= c && d >= l || c > o && l > d);
            default:
                return !1
        }
    }, t.ui.ddmanager = {current: null,droppables: {"default": []},prepareOffsets: function(e, i) {
            var s, n, a = t.ui.ddmanager.droppables[e.options.scope] || [], o = i ? i.type : null, r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
            t: for (s = 0; a.length > s; s++)
                if (!(a[s].options.disabled || e && !a[s].accept.call(a[s].element[0], e.currentItem || e.element))) {
                    for (n = 0; r.length > n; n++)
                        if (r[n] === a[s].element[0]) {
                            a[s].proportions().height = 0;
                            continue t
                        }
                    a[s].visible = "none" !== a[s].element.css("display"), a[s].visible && ("mousedown" === o && a[s]._activate.call(a[s], i), a[s].offset = a[s].element.offset(), a[s].proportions({width: a[s].element[0].offsetWidth,height: a[s].element[0].offsetHeight}))
                }
        },drop: function(e, i) {
            var s = !1;
            return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function() {
                this.options && (!this.options.disabled && this.visible && t.ui.intersect(e, this, this.options.tolerance) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
            }), s
        },dragStart: function(e, i) {
            e.element.parentsUntil("body").bind("scroll.droppable", function() {
                e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
            })
        },drag: function(e, i) {
            e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var s, n, a, o = t.ui.intersect(e, this, this.options.tolerance), r = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
                    r && (this.options.greedy && (n = this.options.scope, a = this.element.parents(":data(ui-droppable)").filter(function() {
                        return t.data(this, "ui-droppable").options.scope === n
                    }), a.length && (s = t.data(a[0], "ui-droppable"), s.greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
                }
            })
        },dragStop: function(e, i) {
            e.element.parentsUntil("body").unbind("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
        }}
})(jQuery);
(function(t, e) {
    var i = "ui-effects-";
    t.effects = {effect: {}}, function(t, e) {
        function i(t, e, i) {
            var s = u[e.type] || {};
            return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t)
        }
        function s(i) {
            var s = h(), n = s._rgba = [];
            return i = i.toLowerCase(), f(l, function(t, a) {
                var o, r = a.re.exec(i), l = r && a.parse(r), h = a.space || "rgba";
                return l ? (o = s[h](l), s[c[h].cache] = o[c[h].cache], n = s._rgba = o._rgba, !1) : e
            }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, a.transparent), s) : a[i]
        }
        function n(t, e, i) {
            return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
        }
        var a, o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", r = /^([\-+])=\s*(\d+\.?\d*)/, l = [{re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse: function(t) {
                    return [t[1], t[2], t[3], t[4]]
                }}, {re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse: function(t) {
                    return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                }}, {re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse: function(t) {
                    return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                }}, {re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,parse: function(t) {
                    return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                }}, {re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space: "hsla",parse: function(t) {
                    return [t[1], t[2] / 100, t[3] / 100, t[4]]
                }}], h = t.Color = function(e, i, s, n) {
            return new t.Color.fn.parse(e, i, s, n)
        }, c = {rgba: {props: {red: {idx: 0,type: "byte"},green: {idx: 1,type: "byte"},blue: {idx: 2,type: "byte"}}},hsla: {props: {hue: {idx: 0,type: "degrees"},saturation: {idx: 1,type: "percent"},lightness: {idx: 2,type: "percent"}}}}, u = {"byte": {floor: !0,max: 255},percent: {max: 1},degrees: {mod: 360,floor: !0}}, d = h.support = {}, p = t("<p>")[0], f = t.each;
        p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(c, function(t, e) {
            e.cache = "_" + t, e.props.alpha = {idx: 3,type: "percent",def: 1}
        }), h.fn = t.extend(h.prototype, {parse: function(n, o, r, l) {
                if (n === e)
                    return this._rgba = [null, null, null, null], this;
                (n.jquery || n.nodeType) && (n = t(n).css(o), o = e);
                var u = this, d = t.type(n), p = this._rgba = [];
                return o !== e && (n = [n, o, r, l], d = "array"), "string" === d ? this.parse(s(n) || a._default) : "array" === d ? (f(c.rgba.props, function(t, e) {
                    p[e.idx] = i(n[e.idx], e)
                }), this) : "object" === d ? (n instanceof h ? f(c, function(t, e) {
                    n[e.cache] && (u[e.cache] = n[e.cache].slice())
                }) : f(c, function(e, s) {
                    var a = s.cache;
                    f(s.props, function(t, e) {
                        if (!u[a] && s.to) {
                            if ("alpha" === t || null == n[t])
                                return;
                            u[a] = s.to(u._rgba)
                        }
                        u[a][e.idx] = i(n[t], e, !0)
                    }), u[a] && 0 > t.inArray(null, u[a].slice(0, 3)) && (u[a][3] = 1, s.from && (u._rgba = s.from(u[a])))
                }), this) : e
            },is: function(t) {
                var i = h(t), s = !0, n = this;
                return f(c, function(t, a) {
                    var o, r = i[a.cache];
                    return r && (o = n[a.cache] || a.to && a.to(n._rgba) || [], f(a.props, function(t, i) {
                        return null != r[i.idx] ? s = r[i.idx] === o[i.idx] : e
                    })), s
                }), s
            },_space: function() {
                var t = [], e = this;
                return f(c, function(i, s) {
                    e[s.cache] && t.push(i)
                }), t.pop()
            },transition: function(t, e) {
                var s = h(t), n = s._space(), a = c[n], o = 0 === this.alpha() ? h("transparent") : this, r = o[a.cache] || a.to(o._rgba), l = r.slice();
                return s = s[a.cache], f(a.props, function(t, n) {
                    var a = n.idx, o = r[a], h = s[a], c = u[n.type] || {};
                    null !== h && (null === o ? l[a] = h : (c.mod && (h - o > c.mod / 2 ? o += c.mod : o - h > c.mod / 2 && (o -= c.mod)), l[a] = i((h - o) * e + o, n)))
                }), this[n](l)
            },blend: function(e) {
                if (1 === this._rgba[3])
                    return this;
                var i = this._rgba.slice(), s = i.pop(), n = h(e)._rgba;
                return h(t.map(i, function(t, e) {
                    return (1 - s) * n[e] + s * t
                }))
            },toRgbaString: function() {
                var e = "rgba(", i = t.map(this._rgba, function(t, e) {
                    return null == t ? e > 2 ? 1 : 0 : t
                });
                return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
            },toHslaString: function() {
                var e = "hsla(", i = t.map(this.hsla(), function(t, e) {
                    return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
                });
                return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
            },toHexString: function(e) {
                var i = this._rgba.slice(), s = i.pop();
                return e && i.push(~~(255 * s)), "#" + t.map(i, function(t) {
                    return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
                }).join("")
            },toString: function() {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
            }}), h.fn.parse.prototype = h.fn, c.hsla.to = function(t) {
            if (null == t[0] || null == t[1] || null == t[2])
                return [null, null, null, t[3]];
            var e, i, s = t[0] / 255, n = t[1] / 255, a = t[2] / 255, o = t[3], r = Math.max(s, n, a), l = Math.min(s, n, a), h = r - l, c = r + l, u = .5 * c;
            return e = l === r ? 0 : s === r ? 60 * (n - a) / h + 360 : n === r ? 60 * (a - s) / h + 120 : 60 * (s - n) / h + 240, i = 0 === h ? 0 : .5 >= u ? h / c : h / (2 - c), [Math.round(e) % 360, i, u, null == o ? 1 : o]
        }, c.hsla.from = function(t) {
            if (null == t[0] || null == t[1] || null == t[2])
                return [null, null, null, t[3]];
            var e = t[0] / 360, i = t[1], s = t[2], a = t[3], o = .5 >= s ? s * (1 + i) : s + i - s * i, r = 2 * s - o;
            return [Math.round(255 * n(r, o, e + 1 / 3)), Math.round(255 * n(r, o, e)), Math.round(255 * n(r, o, e - 1 / 3)), a]
        }, f(c, function(s, n) {
            var a = n.props, o = n.cache, l = n.to, c = n.from;
            h.fn[s] = function(s) {
                if (l && !this[o] && (this[o] = l(this._rgba)), s === e)
                    return this[o].slice();
                var n, r = t.type(s), u = "array" === r || "object" === r ? s : arguments, d = this[o].slice();
                return f(a, function(t, e) {
                    var s = u["object" === r ? t : e.idx];
                    null == s && (s = d[e.idx]), d[e.idx] = i(s, e)
                }), c ? (n = h(c(d)), n[o] = d, n) : h(d)
            }, f(a, function(e, i) {
                h.fn[e] || (h.fn[e] = function(n) {
                    var a, o = t.type(n), l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s, h = this[l](), c = h[i.idx];
                    return "undefined" === o ? c : ("function" === o && (n = n.call(this, c), o = t.type(n)), null == n && i.empty ? this : ("string" === o && (a = r.exec(n), a && (n = c + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))), h[i.idx] = n, this[l](h)))
                })
            })
        }), h.hook = function(e) {
            var i = e.split(" ");
            f(i, function(e, i) {
                t.cssHooks[i] = {set: function(e, n) {
                        var a, o, r = "";
                        if ("transparent" !== n && ("string" !== t.type(n) || (a = s(n)))) {
                            if (n = h(a || n), !d.rgba && 1 !== n._rgba[3]) {
                                for (o = "backgroundColor" === i ? e.parentNode : e; ("" === r || "transparent" === r) && o && o.style; )
                                    try {
                                        r = t.css(o, "backgroundColor"), o = o.parentNode
                                    } catch (l) {
                                    }
                                n = n.blend(r && "transparent" !== r ? r : "_default")
                            }
                            n = n.toRgbaString()
                        }
                        try {
                            e.style[i] = n
                        } catch (l) {
                        }
                    }}, t.fx.step[i] = function(e) {
                    e.colorInit || (e.start = h(e.elem, i), e.end = h(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                }
            })
        }, h.hook(o), t.cssHooks.borderColor = {expand: function(t) {
                var e = {};
                return f(["Top", "Right", "Bottom", "Left"], function(i, s) {
                    e["border" + s + "Color"] = t
                }), e
            }}, a = t.Color.names = {aqua: "#00ffff",black: "#000000",blue: "#0000ff",fuchsia: "#ff00ff",gray: "#808080",green: "#008000",lime: "#00ff00",maroon: "#800000",navy: "#000080",olive: "#808000",purple: "#800080",red: "#ff0000",silver: "#c0c0c0",teal: "#008080",white: "#ffffff",yellow: "#ffff00",transparent: [null, null, null, 0],_default: "#ffffff"}
    }(jQuery), function() {
        function i(e) {
            var i, s, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle, a = {};
            if (n && n.length && n[0] && n[n[0]])
                for (s = n.length; s--; )
                    i = n[s], "string" == typeof n[i] && (a[t.camelCase(i)] = n[i]);
            else
                for (i in n)
                    "string" == typeof n[i] && (a[i] = n[i]);
            return a
        }
        function s(e, i) {
            var s, n, o = {};
            for (s in i)
                n = i[s], e[s] !== n && (a[s] || (t.fx.step[s] || !isNaN(parseFloat(n))) && (o[s] = n));
            return o
        }
        var n = ["add", "remove", "toggle"], a = {border: 1,borderBottom: 1,borderColor: 1,borderLeft: 1,borderRight: 1,borderTop: 1,borderWidth: 1,margin: 1,padding: 1};
        t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, i) {
            t.fx.step[i] = function(t) {
                ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (jQuery.style(t.elem, i, t.end), t.setAttr = !0)
            }
        }), t.fn.addBack || (t.fn.addBack = function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }), t.effects.animateClass = function(e, a, o, r) {
            var l = t.speed(a, o, r);
            return this.queue(function() {
                var a, o = t(this), r = o.attr("class") || "", h = l.children ? o.find("*").addBack() : o;
                h = h.map(function() {
                    var e = t(this);
                    return {el: e,start: i(this)}
                }), a = function() {
                    t.each(n, function(t, i) {
                        e[i] && o[i + "Class"](e[i])
                    })
                }, a(), h = h.map(function() {
                    return this.end = i(this.el[0]), this.diff = s(this.start, this.end), this
                }), o.attr("class", r), h = h.map(function() {
                    var e = this, i = t.Deferred(), s = t.extend({}, l, {queue: !1,complete: function() {
                            i.resolve(e)
                        }});
                    return this.el.animate(this.diff, s), i.promise()
                }), t.when.apply(t, h.get()).done(function() {
                    a(), t.each(arguments, function() {
                        var e = this.el;
                        t.each(this.diff, function(t) {
                            e.css(t, "")
                        })
                    }), l.complete.call(o[0])
                })
            })
        }, t.fn.extend({addClass: function(e) {
                return function(i, s, n, a) {
                    return s ? t.effects.animateClass.call(this, {add: i}, s, n, a) : e.apply(this, arguments)
                }
            }(t.fn.addClass),removeClass: function(e) {
                return function(i, s, n, a) {
                    return arguments.length > 1 ? t.effects.animateClass.call(this, {remove: i}, s, n, a) : e.apply(this, arguments)
                }
            }(t.fn.removeClass),toggleClass: function(i) {
                return function(s, n, a, o, r) {
                    return "boolean" == typeof n || n === e ? a ? t.effects.animateClass.call(this, n ? {add: s} : {remove: s}, a, o, r) : i.apply(this, arguments) : t.effects.animateClass.call(this, {toggle: s}, n, a, o)
                }
            }(t.fn.toggleClass),switchClass: function(e, i, s, n, a) {
                return t.effects.animateClass.call(this, {add: i,remove: e}, s, n, a)
            }})
    }(), function() {
        function s(e, i, s, n) {
            return t.isPlainObject(e) && (i = e, e = e.effect), e = {effect: e}, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e
        }
        function n(e) {
            return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
        }
        t.extend(t.effects, {version: "1.10.4",save: function(t, e) {
                for (var s = 0; e.length > s; s++)
                    null !== e[s] && t.data(i + e[s], t[0].style[e[s]])
            },restore: function(t, s) {
                var n, a;
                for (a = 0; s.length > a; a++)
                    null !== s[a] && (n = t.data(i + s[a]), n === e && (n = ""), t.css(s[a], n))
            },setMode: function(t, e) {
                return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
            },getBaseline: function(t, e) {
                var i, s;
                switch (t[0]) {
                    case "top":
                        i = 0;
                        break;
                    case "middle":
                        i = .5;
                        break;
                    case "bottom":
                        i = 1;
                        break;
                    default:
                        i = t[0] / e.height
                }
                switch (t[1]) {
                    case "left":
                        s = 0;
                        break;
                    case "center":
                        s = .5;
                        break;
                    case "right":
                        s = 1;
                        break;
                    default:
                        s = t[1] / e.width
                }
                return {x: s,y: i}
            },createWrapper: function(e) {
                if (e.parent().is(".ui-effects-wrapper"))
                    return e.parent();
                var i = {width: e.outerWidth(!0),height: e.outerHeight(!0),"float": e.css("float")}, s = t("<div></div>").addClass("ui-effects-wrapper").css({fontSize: "100%",background: "transparent",border: "none",margin: 0,padding: 0}), n = {width: e.width(),height: e.height()}, a = document.activeElement;
                try {
                    a.id
                } catch (o) {
                    a = document.body
                }
                return e.wrap(s), (e[0] === a || t.contains(e[0], a)) && t(a).focus(), s = e.parent(), "static" === e.css("position") ? (s.css({position: "relative"}), e.css({position: "relative"})) : (t.extend(i, {position: e.css("position"),zIndex: e.css("z-index")}), t.each(["top", "left", "bottom", "right"], function(t, s) {
                    i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
                }), e.css({position: "relative",top: 0,left: 0,right: "auto",bottom: "auto"})), e.css(n), s.css(i).show()
            },removeWrapper: function(e) {
                var i = document.activeElement;
                return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()), e
            },setTransition: function(e, i, s, n) {
                return n = n || {}, t.each(i, function(t, i) {
                    var a = e.cssUnit(i);
                    a[0] > 0 && (n[i] = a[0] * s + a[1])
                }), n
            }}), t.fn.extend({effect: function() {
                function e(e) {
                    function s() {
                        t.isFunction(a) && a.call(n[0]), t.isFunction(e) && e()
                    }
                    var n = t(this), a = i.complete, r = i.mode;
                    (n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](), s()) : o.call(n[0], i, s)
                }
                var i = s.apply(this, arguments), n = i.mode, a = i.queue, o = t.effects.effect[i.effect];
                return t.fx.off || !o ? n ? this[n](i.duration, i.complete) : this.each(function() {
                    i.complete && i.complete.call(this)
                }) : a === !1 ? this.each(e) : this.queue(a || "fx", e)
            },show: function(t) {
                return function(e) {
                    if (n(e))
                        return t.apply(this, arguments);
                    var i = s.apply(this, arguments);
                    return i.mode = "show", this.effect.call(this, i)
                }
            }(t.fn.show),hide: function(t) {
                return function(e) {
                    if (n(e))
                        return t.apply(this, arguments);
                    var i = s.apply(this, arguments);
                    return i.mode = "hide", this.effect.call(this, i)
                }
            }(t.fn.hide),toggle: function(t) {
                return function(e) {
                    if (n(e) || "boolean" == typeof e)
                        return t.apply(this, arguments);
                    var i = s.apply(this, arguments);
                    return i.mode = "toggle", this.effect.call(this, i)
                }
            }(t.fn.toggle),cssUnit: function(e) {
                var i = this.css(e), s = [];
                return t.each(["em", "px", "%", "pt"], function(t, e) {
                    i.indexOf(e) > 0 && (s = [parseFloat(i), e])
                }), s
            }})
    }(), function() {
        var e = {};
        t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, i) {
            e[i] = function(e) {
                return Math.pow(e, t + 2)
            }
        }), t.extend(e, {Sine: function(t) {
                return 1 - Math.cos(t * Math.PI / 2)
            },Circ: function(t) {
                return 1 - Math.sqrt(1 - t * t)
            },Elastic: function(t) {
                return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
            },Back: function(t) {
                return t * t * (3 * t - 2)
            },Bounce: function(t) {
                for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t; )
                    ;
                return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
            }}), t.each(e, function(e, i) {
            t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) {
                return 1 - i(1 - t)
            }, t.easing["easeInOut" + e] = function(t) {
                return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
            }
        })
    }()
})(jQuery);
(function(t) {
    var e = /up|down|vertical/, i = /up|left|vertical|horizontal/;
    t.effects.effect.blind = function(s, n) {
        var a, o, r, l = t(this), h = ["position", "top", "bottom", "left", "right", "height", "width"], c = t.effects.setMode(l, s.mode || "hide"), u = s.direction || "up", d = e.test(u), p = d ? "height" : "width", f = d ? "top" : "left", g = i.test(u), m = {}, v = "show" === c;
        l.parent().is(".ui-effects-wrapper") ? t.effects.save(l.parent(), h) : t.effects.save(l, h), l.show(), a = t.effects.createWrapper(l).css({overflow: "hidden"}), o = a[p](), r = parseFloat(a.css(f)) || 0, m[p] = v ? o : 0, g || (l.css(d ? "bottom" : "right", 0).css(d ? "top" : "left", "auto").css({position: "absolute"}), m[f] = v ? r : o + r), v && (a.css(p, 0), g || a.css(f, r + o)), a.animate(m, {duration: s.duration,easing: s.easing,queue: !1,complete: function() {
                "hide" === c && l.hide(), t.effects.restore(l, h), t.effects.removeWrapper(l), n()
            }})
    }
})(jQuery);
(function(t) {
    t.effects.effect.bounce = function(e, i) {
        var s, n, a, o = t(this), r = ["position", "top", "bottom", "left", "right", "height", "width"], l = t.effects.setMode(o, e.mode || "effect"), h = "hide" === l, c = "show" === l, u = e.direction || "up", d = e.distance, p = e.times || 5, f = 2 * p + (c || h ? 1 : 0), g = e.duration / f, m = e.easing, v = "up" === u || "down" === u ? "top" : "left", _ = "up" === u || "left" === u, b = o.queue(), y = b.length;
        for ((c || h) && r.push("opacity"), t.effects.save(o, r), o.show(), t.effects.createWrapper(o), d || (d = o["top" === v ? "outerHeight" : "outerWidth"]() / 3), c && (a = {opacity: 1}, a[v] = 0, o.css("opacity", 0).css(v, _ ? 2 * -d : 2 * d).animate(a, g, m)), h && (d /= Math.pow(2, p - 1)), a = {}, a[v] = 0, s = 0; p > s; s++)
            n = {}, n[v] = (_ ? "-=" : "+=") + d, o.animate(n, g, m).animate(a, g, m), d = h ? 2 * d : d / 2;
        h && (n = {opacity: 0}, n[v] = (_ ? "-=" : "+=") + d, o.animate(n, g, m)), o.queue(function() {
            h && o.hide(), t.effects.restore(o, r), t.effects.removeWrapper(o), i()
        }), y > 1 && b.splice.apply(b, [1, 0].concat(b.splice(y, f + 1))), o.dequeue()
    }
})(jQuery);
(function(t) {
    t.effects.effect.clip = function(e, i) {
        var s, n, a, o = t(this), r = ["position", "top", "bottom", "left", "right", "height", "width"], l = t.effects.setMode(o, e.mode || "hide"), h = "show" === l, c = e.direction || "vertical", u = "vertical" === c, d = u ? "height" : "width", p = u ? "top" : "left", f = {};
        t.effects.save(o, r), o.show(), s = t.effects.createWrapper(o).css({overflow: "hidden"}), n = "IMG" === o[0].tagName ? s : o, a = n[d](), h && (n.css(d, 0), n.css(p, a / 2)), f[d] = h ? a : 0, f[p] = h ? 0 : a / 2, n.animate(f, {queue: !1,duration: e.duration,easing: e.easing,complete: function() {
                h || o.hide(), t.effects.restore(o, r), t.effects.removeWrapper(o), i()
            }})
    }
})(jQuery);
(function(t) {
    t.effects.effect.drop = function(e, i) {
        var s, n = t(this), a = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"], o = t.effects.setMode(n, e.mode || "hide"), r = "show" === o, l = e.direction || "left", h = "up" === l || "down" === l ? "top" : "left", c = "up" === l || "left" === l ? "pos" : "neg", u = {opacity: r ? 1 : 0};
        t.effects.save(n, a), n.show(), t.effects.createWrapper(n), s = e.distance || n["top" === h ? "outerHeight" : "outerWidth"](!0) / 2, r && n.css("opacity", 0).css(h, "pos" === c ? -s : s), u[h] = (r ? "pos" === c ? "+=" : "-=" : "pos" === c ? "-=" : "+=") + s, n.animate(u, {queue: !1,duration: e.duration,easing: e.easing,complete: function() {
                "hide" === o && n.hide(), t.effects.restore(n, a), t.effects.removeWrapper(n), i()
            }})
    }
})(jQuery);
(function(t) {
    t.effects.effect.explode = function(e, i) {
        function s() {
            b.push(this), b.length === u * d && n()
        }
        function n() {
            p.css({visibility: "visible"}), t(b).remove(), g || p.hide(), i()
        }
        var a, o, r, l, h, c, u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3, d = u, p = t(this), f = t.effects.setMode(p, e.mode || "hide"), g = "show" === f, m = p.show().css("visibility", "hidden").offset(), v = Math.ceil(p.outerWidth() / d), _ = Math.ceil(p.outerHeight() / u), b = [];
        for (a = 0; u > a; a++)
            for (l = m.top + a * _, c = a - (u - 1) / 2, o = 0; d > o; o++)
                r = m.left + o * v, h = o - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({position: "absolute",visibility: "visible",left: -o * v,top: -a * _}).parent().addClass("ui-effects-explode").css({position: "absolute",overflow: "hidden",width: v,height: _,left: r + (g ? h * v : 0),top: l + (g ? c * _ : 0),opacity: g ? 0 : 1}).animate({left: r + (g ? 0 : h * v),top: l + (g ? 0 : c * _),opacity: g ? 1 : 0}, e.duration || 500, e.easing, s)
    }
})(jQuery);
(function(t) {
    t.effects.effect.fade = function(e, i) {
        var s = t(this), n = t.effects.setMode(s, e.mode || "toggle");
        s.animate({opacity: n}, {queue: !1,duration: e.duration,easing: e.easing,complete: i})
    }
})(jQuery);
(function(t) {
    t.effects.effect.fold = function(e, i) {
        var s, n, a = t(this), o = ["position", "top", "bottom", "left", "right", "height", "width"], r = t.effects.setMode(a, e.mode || "hide"), l = "show" === r, h = "hide" === r, c = e.size || 15, u = /([0-9]+)%/.exec(c), d = !!e.horizFirst, p = l !== d, f = p ? ["width", "height"] : ["height", "width"], g = e.duration / 2, m = {}, v = {};
        t.effects.save(a, o), a.show(), s = t.effects.createWrapper(a).css({overflow: "hidden"}), n = p ? [s.width(), s.height()] : [s.height(), s.width()], u && (c = parseInt(u[1], 10) / 100 * n[h ? 0 : 1]), l && s.css(d ? {height: 0,width: c} : {height: c,width: 0}), m[f[0]] = l ? n[0] : c, v[f[1]] = l ? n[1] : 0, s.animate(m, g, e.easing).animate(v, g, e.easing, function() {
            h && a.hide(), t.effects.restore(a, o), t.effects.removeWrapper(a), i()
        })
    }
})(jQuery);
(function(t) {
    t.effects.effect.highlight = function(e, i) {
        var s = t(this), n = ["backgroundImage", "backgroundColor", "opacity"], a = t.effects.setMode(s, e.mode || "show"), o = {backgroundColor: s.css("backgroundColor")};
        "hide" === a && (o.opacity = 0), t.effects.save(s, n), s.show().css({backgroundImage: "none",backgroundColor: e.color || "#ffff99"}).animate(o, {queue: !1,duration: e.duration,easing: e.easing,complete: function() {
                "hide" === a && s.hide(), t.effects.restore(s, n), i()
            }})
    }
})(jQuery);
(function(t) {
    t.effects.effect.pulsate = function(e, i) {
        var s, n = t(this), a = t.effects.setMode(n, e.mode || "show"), o = "show" === a, r = "hide" === a, l = o || "hide" === a, h = 2 * (e.times || 5) + (l ? 1 : 0), c = e.duration / h, u = 0, d = n.queue(), p = d.length;
        for ((o || !n.is(":visible")) && (n.css("opacity", 0).show(), u = 1), s = 1; h > s; s++)
            n.animate({opacity: u}, c, e.easing), u = 1 - u;
        n.animate({opacity: u}, c, e.easing), n.queue(function() {
            r && n.hide(), i()
        }), p > 1 && d.splice.apply(d, [1, 0].concat(d.splice(p, h + 1))), n.dequeue()
    }
})(jQuery);
(function(t) {
    t.effects.effect.puff = function(e, i) {
        var s = t(this), n = t.effects.setMode(s, e.mode || "hide"), a = "hide" === n, o = parseInt(e.percent, 10) || 150, r = o / 100, l = {height: s.height(),width: s.width(),outerHeight: s.outerHeight(),outerWidth: s.outerWidth()};
        t.extend(e, {effect: "scale",queue: !1,fade: !0,mode: n,complete: i,percent: a ? o : 100,from: a ? l : {height: l.height * r,width: l.width * r,outerHeight: l.outerHeight * r,outerWidth: l.outerWidth * r}}), s.effect(e)
    }, t.effects.effect.scale = function(e, i) {
        var s = t(this), n = t.extend(!0, {}, e), a = t.effects.setMode(s, e.mode || "effect"), o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === a ? 0 : 100), r = e.direction || "both", l = e.origin, h = {height: s.height(),width: s.width(),outerHeight: s.outerHeight(),outerWidth: s.outerWidth()}, c = {y: "horizontal" !== r ? o / 100 : 1,x: "vertical" !== r ? o / 100 : 1};
        n.effect = "size", n.queue = !1, n.complete = i, "effect" !== a && (n.origin = l || ["middle", "center"], n.restore = !0), n.from = e.from || ("show" === a ? {height: 0,width: 0,outerHeight: 0,outerWidth: 0} : h), n.to = {height: h.height * c.y,width: h.width * c.x,outerHeight: h.outerHeight * c.y,outerWidth: h.outerWidth * c.x}, n.fade && ("show" === a && (n.from.opacity = 0, n.to.opacity = 1), "hide" === a && (n.from.opacity = 1, n.to.opacity = 0)), s.effect(n)
    }, t.effects.effect.size = function(e, i) {
        var s, n, a, o = t(this), r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"], l = ["position", "top", "bottom", "left", "right", "overflow", "opacity"], h = ["width", "height", "overflow"], c = ["fontSize"], u = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], d = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], p = t.effects.setMode(o, e.mode || "effect"), f = e.restore || "effect" !== p, g = e.scale || "both", m = e.origin || ["middle", "center"], v = o.css("position"), _ = f ? r : l, b = {height: 0,width: 0,outerHeight: 0,outerWidth: 0};
        "show" === p && o.show(), s = {height: o.height(),width: o.width(),outerHeight: o.outerHeight(),outerWidth: o.outerWidth()}, "toggle" === e.mode && "show" === p ? (o.from = e.to || b, o.to = e.from || s) : (o.from = e.from || ("show" === p ? b : s), o.to = e.to || ("hide" === p ? b : s)), a = {from: {y: o.from.height / s.height,x: o.from.width / s.width},to: {y: o.to.height / s.height,x: o.to.width / s.width}}, ("box" === g || "both" === g) && (a.from.y !== a.to.y && (_ = _.concat(u), o.from = t.effects.setTransition(o, u, a.from.y, o.from), o.to = t.effects.setTransition(o, u, a.to.y, o.to)), a.from.x !== a.to.x && (_ = _.concat(d), o.from = t.effects.setTransition(o, d, a.from.x, o.from), o.to = t.effects.setTransition(o, d, a.to.x, o.to))), ("content" === g || "both" === g) && a.from.y !== a.to.y && (_ = _.concat(c).concat(h), o.from = t.effects.setTransition(o, c, a.from.y, o.from), o.to = t.effects.setTransition(o, c, a.to.y, o.to)), t.effects.save(o, _), o.show(), t.effects.createWrapper(o), o.css("overflow", "hidden").css(o.from), m && (n = t.effects.getBaseline(m, s), o.from.top = (s.outerHeight - o.outerHeight()) * n.y, o.from.left = (s.outerWidth - o.outerWidth()) * n.x, o.to.top = (s.outerHeight - o.to.outerHeight) * n.y, o.to.left = (s.outerWidth - o.to.outerWidth) * n.x), o.css(o.from), ("content" === g || "both" === g) && (u = u.concat(["marginTop", "marginBottom"]).concat(c), d = d.concat(["marginLeft", "marginRight"]), h = r.concat(u).concat(d), o.find("*[width]").each(function() {
            var i = t(this), s = {height: i.height(),width: i.width(),outerHeight: i.outerHeight(),outerWidth: i.outerWidth()};
            f && t.effects.save(i, h), i.from = {height: s.height * a.from.y,width: s.width * a.from.x,outerHeight: s.outerHeight * a.from.y,outerWidth: s.outerWidth * a.from.x}, i.to = {height: s.height * a.to.y,width: s.width * a.to.x,outerHeight: s.height * a.to.y,outerWidth: s.width * a.to.x}, a.from.y !== a.to.y && (i.from = t.effects.setTransition(i, u, a.from.y, i.from), i.to = t.effects.setTransition(i, u, a.to.y, i.to)), a.from.x !== a.to.x && (i.from = t.effects.setTransition(i, d, a.from.x, i.from), i.to = t.effects.setTransition(i, d, a.to.x, i.to)), i.css(i.from), i.animate(i.to, e.duration, e.easing, function() {
                f && t.effects.restore(i, h)
            })
        })), o.animate(o.to, {queue: !1,duration: e.duration,easing: e.easing,complete: function() {
                0 === o.to.opacity && o.css("opacity", o.from.opacity), "hide" === p && o.hide(), t.effects.restore(o, _), f || ("static" === v ? o.css({position: "relative",top: o.to.top,left: o.to.left}) : t.each(["top", "left"], function(t, e) {
                    o.css(e, function(e, i) {
                        var s = parseInt(i, 10), n = t ? o.to.left : o.to.top;
                        return "auto" === i ? n + "px" : s + n + "px"
                    })
                })), t.effects.removeWrapper(o), i()
            }})
    }
})(jQuery);
(function(t) {
    t.effects.effect.shake = function(e, i) {
        var s, n = t(this), a = ["position", "top", "bottom", "left", "right", "height", "width"], o = t.effects.setMode(n, e.mode || "effect"), r = e.direction || "left", l = e.distance || 20, h = e.times || 3, c = 2 * h + 1, u = Math.round(e.duration / c), d = "up" === r || "down" === r ? "top" : "left", p = "up" === r || "left" === r, f = {}, g = {}, m = {}, v = n.queue(), _ = v.length;
        for (t.effects.save(n, a), n.show(), t.effects.createWrapper(n), f[d] = (p ? "-=" : "+=") + l, g[d] = (p ? "+=" : "-=") + 2 * l, m[d] = (p ? "-=" : "+=") + 2 * l, n.animate(f, u, e.easing), s = 1; h > s; s++)
            n.animate(g, u, e.easing).animate(m, u, e.easing);
        n.animate(g, u, e.easing).animate(f, u / 2, e.easing).queue(function() {
            "hide" === o && n.hide(), t.effects.restore(n, a), t.effects.removeWrapper(n), i()
        }), _ > 1 && v.splice.apply(v, [1, 0].concat(v.splice(_, c + 1))), n.dequeue()
    }
})(jQuery);
(function(t) {
    t.effects.effect.slide = function(e, i) {
        var s, n = t(this), a = ["position", "top", "bottom", "left", "right", "width", "height"], o = t.effects.setMode(n, e.mode || "show"), r = "show" === o, l = e.direction || "left", h = "up" === l || "down" === l ? "top" : "left", c = "up" === l || "left" === l, u = {};
        t.effects.save(n, a), n.show(), s = e.distance || n["top" === h ? "outerHeight" : "outerWidth"](!0), t.effects.createWrapper(n).css({overflow: "hidden"}), r && n.css(h, c ? isNaN(s) ? "-" + s : -s : s), u[h] = (r ? c ? "+=" : "-=" : c ? "-=" : "+=") + s, n.animate(u, {queue: !1,duration: e.duration,easing: e.easing,complete: function() {
                "hide" === o && n.hide(), t.effects.restore(n, a), t.effects.removeWrapper(n), i()
            }})
    }
})(jQuery);
(function(t) {
    t.effects.effect.transfer = function(e, i) {
        var s = t(this), n = t(e.to), a = "fixed" === n.css("position"), o = t("body"), r = a ? o.scrollTop() : 0, l = a ? o.scrollLeft() : 0, h = n.offset(), c = {top: h.top - r,left: h.left - l,height: n.innerHeight(),width: n.innerWidth()}, u = s.offset(), d = t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({top: u.top - r,left: u.left - l,height: s.innerHeight(),width: s.innerWidth(),position: a ? "fixed" : "absolute"}).animate(c, e.duration, e.easing, function() {
            d.remove(), i()
        })
    }
})(jQuery);
(function(t) {
    t.widget("ui.menu", {version: "1.10.4",defaultElement: "<ul>",delay: 300,options: {icons: {submenu: "ui-icon-carat-1-e"},menus: "ul",position: {my: "left top",at: "right top"},role: "menu",blur: null,focus: null,select: null},_create: function() {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({role: this.options.role,tabIndex: 0}).bind("click" + this.eventNamespace, t.proxy(function(t) {
                this.options.disabled && t.preventDefault()
            }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({"mousedown .ui-menu-item > a": function(t) {
                    t.preventDefault()
                },"click .ui-state-disabled > a": function(t) {
                    t.preventDefault()
                },"click .ui-menu-item:has(a)": function(e) {
                    var i = t(e.target).closest(".ui-menu-item");
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && t(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },"mouseenter .ui-menu-item": function(e) {
                    var i = t(e.currentTarget);
                    i.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(e, i)
                },mouseleave: "collapseAll","mouseleave .ui-menu": "collapseAll",focus: function(t, e) {
                    var i = this.active || this.element.children(".ui-menu-item").eq(0);
                    e || this.focus(t, i)
                },blur: function(e) {
                    this._delay(function() {
                        t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
                    })
                },keydown: "_keydown"}), this.refresh(), this._on(this.document, {click: function(e) {
                    t(e.target).closest(".ui-menu").length || this.collapseAll(e), this.mouseHandled = !1
                }})
        },_destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var e = t(this);
                e.data("ui-menu-submenu-carat") && e.remove()
            }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },_keydown: function(e) {
            function i(t) {
                return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }
            var s, n, a, o, r, l = !0;
            switch (e.keyCode) {
                case t.ui.keyCode.PAGE_UP:
                    this.previousPage(e);
                    break;
                case t.ui.keyCode.PAGE_DOWN:
                    this.nextPage(e);
                    break;
                case t.ui.keyCode.HOME:
                    this._move("first", "first", e);
                    break;
                case t.ui.keyCode.END:
                    this._move("last", "last", e);
                    break;
                case t.ui.keyCode.UP:
                    this.previous(e);
                    break;
                case t.ui.keyCode.DOWN:
                    this.next(e);
                    break;
                case t.ui.keyCode.LEFT:
                    this.collapse(e);
                    break;
                case t.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                    break;
                case t.ui.keyCode.ENTER:
                case t.ui.keyCode.SPACE:
                    this._activate(e);
                    break;
                case t.ui.keyCode.ESCAPE:
                    this.collapse(e);
                    break;
                default:
                    l = !1, n = this.previousFilter || "", a = String.fromCharCode(e.keyCode), o = !1, clearTimeout(this.filterTimer), a === n ? o = !0 : a = n + a, r = RegExp("^" + i(a), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function() {
                        return r.test(t(this).children("a").text())
                    }), s = o && -1 !== s.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : s, s.length || (a = String.fromCharCode(e.keyCode), r = RegExp("^" + i(a), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function() {
                        return r.test(t(this).children("a").text())
                    })), s.length ? (this.focus(e, s), s.length > 1 ? (this.previousFilter = a, this.filterTimer = this._delay(function() {
                        delete this.previousFilter
                    }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
            }
            l && e.preventDefault()
        },_activate: function(t) {
            this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
        },refresh: function() {
            var e, i = this.options.icons.submenu, s = this.element.find(this.options.menus);
            this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role: this.options.role,"aria-hidden": "true","aria-expanded": "false"}).each(function() {
                var e = t(this), s = e.prev("a"), n = t("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
                s.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", s.attr("id"))
            }), e = s.add(this.element), e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex: -1,role: this._itemRole()}), e.children(":not(.ui-menu-item)").each(function() {
                var e = t(this);
                /[^\-\u2014\u2013\s]/.test(e.text()) || e.addClass("ui-widget-content ui-menu-divider")
            }), e.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
        },_itemRole: function() {
            return {menu: "menuitem",listbox: "option"}[this.options.role]
        },_setOption: function(t, e) {
            "icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu), this._super(t, e)
        },focus: function(t, e) {
            var i, s;
            this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {item: e})
        },_scrollIntoView: function(e) {
            var i, s, n, a, o, r;
            this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, a = this.activeMenu.scrollTop(), o = this.activeMenu.height(), r = e.height(), 0 > n ? this.activeMenu.scrollTop(a + n) : n + r > o && this.activeMenu.scrollTop(a + n - o + r))
        },blur: function(t, e) {
            e || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {item: this.active}))
        },_startOpening: function(t) {
            clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(), this._open(t)
            }, this.delay))
        },_open: function(e) {
            var i = t.extend({of: this.active}, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },collapseAll: function(e, i) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                s.length || (s = this.element), this._close(s), this.blur(e), this.activeMenu = s
            }, this.delay)
        },_close: function(t) {
            t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
        },collapse: function(t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(), this.focus(t, e))
        },expand: function(t) {
            var e = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            e && e.length && (this._open(e.parent()), this._delay(function() {
                this.focus(t, e)
            }))
        },next: function(t) {
            this._move("next", "first", t)
        },previous: function(t) {
            this._move("prev", "last", t)
        },isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },_move: function(t, e, i) {
            var s;
            this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.children(".ui-menu-item")[e]()), this.focus(i, s)
        },nextPage: function(e) {
            var i, s, n;
            return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                return i = t(this), 0 > i.offset().top - s - n
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())), undefined) : (this.next(e), undefined)
        },previousPage: function(e) {
            var i, s, n;
            return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                return i = t(this), i.offset().top - s + n > 0
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item").first())), undefined) : (this.next(e), undefined)
        },_hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },select: function(e) {
            this.active = this.active || t(e.target).closest(".ui-menu-item");
            var i = {item: this.active};
            this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
        }})
})(jQuery);
(function(t, e) {
    t.widget("ui.progressbar", {version: "1.10.4",options: {max: 100,value: 0,change: null,complete: null},min: 0,_create: function() {
            this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role: "progressbar","aria-valuemin": this.min}), this.valueDiv = t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
        },_destroy: function() {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
        },value: function(t) {
            return t === e ? this.options.value : (this.options.value = this._constrainedValue(t), this._refreshValue(), e)
        },_constrainedValue: function(t) {
            return t === e && (t = this.options.value), this.indeterminate = t === !1, "number" != typeof t && (t = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, t))
        },_setOptions: function(t) {
            var e = t.value;
            delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
        },_setOption: function(t, e) {
            "max" === t && (e = Math.max(this.min, e)), this._super(t, e)
        },_percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },_refreshValue: function() {
            var e = this.options.value, i = this._percentage();
            this.valueDiv.toggle(this.indeterminate || e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(i.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({"aria-valuemax": this.options.max,"aria-valuenow": e}), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
        }})
})(jQuery);
(function(t) {
    function e(t) {
        return parseInt(t, 10) || 0
    }
    function i(t) {
        return !isNaN(parseInt(t, 10))
    }
    t.widget("ui.resizable", t.ui.mouse, {version: "1.10.4",widgetEventPrefix: "resize",options: {alsoResize: !1,animate: !1,animateDuration: "slow",animateEasing: "swing",aspectRatio: !1,autoHide: !1,containment: !1,ghost: !1,grid: !1,handles: "e,s,se",helper: !1,maxHeight: null,maxWidth: null,minHeight: 10,minWidth: 10,zIndex: 90,resize: null,start: null,stop: null},_create: function() {
            var e, i, s, n, a, o = this, r = this.options;
            if (this.element.addClass("ui-resizable"), t.extend(this, {_aspectRatio: !!r.aspectRatio,aspectRatio: r.aspectRatio,originalElement: this.element,_proportionallyResizeElements: [],_helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null}), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position: this.element.css("position"),width: this.element.outerWidth(),height: this.element.outerHeight(),top: this.element.css("top"),left: this.element.css("left")})), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({marginLeft: this.originalElement.css("marginLeft"),marginTop: this.originalElement.css("marginTop"),marginRight: this.originalElement.css("marginRight"),marginBottom: this.originalElement.css("marginBottom")}), this.originalElement.css({marginLeft: 0,marginTop: 0,marginRight: 0,marginBottom: 0}), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({position: "static",zoom: 1,display: "block"})), this.originalElement.css({margin: this.originalElement.css("margin")}), this._proportionallyResize()), this.handles = r.handles || (t(".ui-resizable-handle", this.element).length ? {n: ".ui-resizable-n",e: ".ui-resizable-e",s: ".ui-resizable-s",w: ".ui-resizable-w",se: ".ui-resizable-se",sw: ".ui-resizable-sw",ne: ".ui-resizable-ne",nw: ".ui-resizable-nw"} : "e,s,se"), this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {}, i = 0; e.length > i; i++)
                    s = t.trim(e[i]), a = "ui-resizable-" + s, n = t("<div class='ui-resizable-handle " + a + "'></div>"), n.css({zIndex: r.zIndex}), "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(n);
            this._renderAxis = function(e) {
                var i, s, n, a;
                e = e || this.element;
                for (i in this.handles)
                    this.handles[i].constructor === String && (this.handles[i] = t(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (s = t(this.handles[i], this.element), a = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(n, a), this._proportionallyResize()), t(this.handles[i]).length
            }, this._renderAxis(this.element), this._handles = t(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
                o.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = n && n[1] ? n[1] : "se")
            }), r.autoHide && (this._handles.hide(), t(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                r.disabled || (t(this).removeClass("ui-resizable-autohide"), o._handles.show())
            }).mouseleave(function() {
                r.disabled || o.resizing || (t(this).addClass("ui-resizable-autohide"), o._handles.hide())
            })), this._mouseInit()
        },_destroy: function() {
            this._mouseDestroy();
            var e, i = function(e) {
                t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({position: e.css("position"),width: e.outerWidth(),height: e.outerHeight(),top: e.css("top"),left: e.css("left")}).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
        },_mouseCapture: function(e) {
            var i, s, n = !1;
            for (i in this.handles)
                s = t(this.handles[i])[0], (s === e.target || t.contains(s, e.target)) && (n = !0);
            return !this.options.disabled && n
        },_mouseStart: function(i) {
            var s, n, a, o = this.options, r = this.element.position(), h = this.element;
            return this.resizing = !0, /absolute/.test(h.css("position")) ? h.css({position: "absolute",top: h.css("top"),left: h.css("left")}) : h.is(".ui-draggable") && h.css({position: "absolute",top: r.top,left: r.left}), this._renderProxy(), s = e(this.helper.css("left")), n = e(this.helper.css("top")), o.containment && (s += t(o.containment).scrollLeft() || 0, n += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {left: s,top: n}, this.size = this._helper ? {width: this.helper.width(),height: this.helper.height()} : {width: h.width(),height: h.height()}, this.originalSize = this._helper ? {width: h.outerWidth(),height: h.outerHeight()} : {width: h.width(),height: h.height()}, this.originalPosition = {left: s,top: n}, this.sizeDiff = {width: h.outerWidth() - h.width(),height: h.outerHeight() - h.height()}, this.originalMousePosition = {left: i.pageX,top: i.pageY}, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, a = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === a ? this.axis + "-resize" : a), h.addClass("ui-resizable-resizing"), this._propagate("start", i), !0
        },_mouseDrag: function(e) {
            var i, s = this.helper, n = {}, a = this.originalMousePosition, o = this.axis, r = this.position.top, h = this.position.left, l = this.size.width, c = this.size.height, u = e.pageX - a.left || 0, d = e.pageY - a.top || 0, p = this._change[o];
            return p ? (i = p.apply(this, [e, u, d]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), this.position.top !== r && (n.top = this.position.top + "px"), this.position.left !== h && (n.left = this.position.left + "px"), this.size.width !== l && (n.width = this.size.width + "px"), this.size.height !== c && (n.height = this.size.height + "px"), s.css(n), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(n) || this._trigger("resize", e, this.ui()), !1) : !1
        },_mouseStop: function(e) {
            this.resizing = !1;
            var i, s, n, a, o, r, h, l = this.options, c = this;
            return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && t.ui.hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, a = s ? 0 : c.sizeDiff.width, o = {width: c.helper.width() - a,height: c.helper.height() - n}, r = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null, h = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null, l.animate || this.element.css(t.extend(o, {top: h,left: r})), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !l.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
        },_updateVirtualBoundaries: function(t) {
            var e, s, n, a, o, r = this.options;
            o = {minWidth: i(r.minWidth) ? r.minWidth : 0,maxWidth: i(r.maxWidth) ? r.maxWidth : 1 / 0,minHeight: i(r.minHeight) ? r.minHeight : 0,maxHeight: i(r.maxHeight) ? r.maxHeight : 1 / 0}, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, s = o.maxHeight * this.aspectRatio, a = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), n > o.minHeight && (o.minHeight = n), o.maxWidth > s && (o.maxWidth = s), o.maxHeight > a && (o.maxHeight = a)), this._vBoundaries = o
        },_updateCache: function(t) {
            this.offset = this.helper.offset(), i(t.left) && (this.position.left = t.left), i(t.top) && (this.position.top = t.top), i(t.height) && (this.size.height = t.height), i(t.width) && (this.size.width = t.width)
        },_updateRatio: function(t) {
            var e = this.position, s = this.size, n = this.axis;
            return i(t.height) ? t.width = t.height * this.aspectRatio : i(t.width) && (t.height = t.width / this.aspectRatio), "sw" === n && (t.left = e.left + (s.width - t.width), t.top = null), "nw" === n && (t.top = e.top + (s.height - t.height), t.left = e.left + (s.width - t.width)), t
        },_respectSize: function(t) {
            var e = this._vBoundaries, s = this.axis, n = i(t.width) && e.maxWidth && e.maxWidth < t.width, a = i(t.height) && e.maxHeight && e.maxHeight < t.height, o = i(t.width) && e.minWidth && e.minWidth > t.width, r = i(t.height) && e.minHeight && e.minHeight > t.height, h = this.originalPosition.left + this.originalSize.width, l = this.position.top + this.size.height, c = /sw|nw|w/.test(s), u = /nw|ne|n/.test(s);
            return o && (t.width = e.minWidth), r && (t.height = e.minHeight), n && (t.width = e.maxWidth), a && (t.height = e.maxHeight), o && c && (t.left = h - e.minWidth), n && c && (t.left = h - e.maxWidth), r && u && (t.top = l - e.minHeight), a && u && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
        },_proportionallyResize: function() {
            if (this._proportionallyResizeElements.length) {
                var t, e, i, s, n, a = this.helper || this.element;
                for (t = 0; this._proportionallyResizeElements.length > t; t++) {
                    if (n = this._proportionallyResizeElements[t], !this.borderDif)
                        for (this.borderDif = [], i = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")], s = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")], e = 0; i.length > e; e++)
                            this.borderDif[e] = (parseInt(i[e], 10) || 0) + (parseInt(s[e], 10) || 0);
                    n.css({height: a.height() - this.borderDif[0] - this.borderDif[2] || 0,width: a.width() - this.borderDif[1] - this.borderDif[3] || 0})
                }
            }
        },_renderProxy: function() {
            var e = this.element, i = this.options;
            this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({width: this.element.outerWidth() - 1,height: this.element.outerHeight() - 1,position: "absolute",left: this.elementOffset.left + "px",top: this.elementOffset.top + "px",zIndex: ++i.zIndex}), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },_change: {e: function(t, e) {
                return {width: this.originalSize.width + e}
            },w: function(t, e) {
                var i = this.originalSize, s = this.originalPosition;
                return {left: s.left + e,width: i.width - e}
            },n: function(t, e, i) {
                var s = this.originalSize, n = this.originalPosition;
                return {top: n.top + i,height: s.height - i}
            },s: function(t, e, i) {
                return {height: this.originalSize.height + i}
            },se: function(e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
            },sw: function(e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
            },ne: function(e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
            },nw: function(e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
            }},_propagate: function(e, i) {
            t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
        },plugins: {},ui: function() {
            return {originalElement: this.originalElement,element: this.element,helper: this.helper,position: this.position,size: this.size,originalSize: this.originalSize,originalPosition: this.originalPosition}
        }}), t.ui.plugin.add("resizable", "animate", {stop: function(e) {
            var i = t(this).data("ui-resizable"), s = i.options, n = i._proportionallyResizeElements, a = n.length && /textarea/i.test(n[0].nodeName), o = a && t.ui.hasScroll(n[0], "left") ? 0 : i.sizeDiff.height, r = a ? 0 : i.sizeDiff.width, h = {width: i.size.width - r,height: i.size.height - o}, l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null, c = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(t.extend(h, c && l ? {top: c,left: l} : {}), {duration: s.animateDuration,easing: s.animateEasing,step: function() {
                    var s = {width: parseInt(i.element.css("width"), 10),height: parseInt(i.element.css("height"), 10),top: parseInt(i.element.css("top"), 10),left: parseInt(i.element.css("left"), 10)};
                    n && n.length && t(n[0]).css({width: s.width,height: s.height}), i._updateCache(s), i._propagate("resize", e)
                }})
        }}), t.ui.plugin.add("resizable", "containment", {start: function() {
            var i, s, n, a, o, r, h, l = t(this).data("ui-resizable"), c = l.options, u = l.element, d = c.containment, p = d instanceof t ? d.get(0) : /parent/.test(d) ? u.parent().get(0) : d;
            p && (l.containerElement = t(p), /document/.test(d) || d === document ? (l.containerOffset = {left: 0,top: 0}, l.containerPosition = {left: 0,top: 0}, l.parentData = {element: t(document),left: 0,top: 0,width: t(document).width(),height: t(document).height() || document.body.parentNode.scrollHeight}) : (i = t(p), s = [], t(["Top", "Right", "Left", "Bottom"]).each(function(t, n) {
                s[t] = e(i.css("padding" + n))
            }), l.containerOffset = i.offset(), l.containerPosition = i.position(), l.containerSize = {height: i.innerHeight() - s[3],width: i.innerWidth() - s[1]}, n = l.containerOffset, a = l.containerSize.height, o = l.containerSize.width, r = t.ui.hasScroll(p, "left") ? p.scrollWidth : o, h = t.ui.hasScroll(p) ? p.scrollHeight : a, l.parentData = {element: p,left: n.left,top: n.top,width: r,height: h}))
        },resize: function(e) {
            var i, s, n, a, o = t(this).data("ui-resizable"), r = o.options, h = o.containerOffset, l = o.position, c = o._aspectRatio || e.shiftKey, u = {top: 0,left: 0}, d = o.containerElement;
            d[0] !== document && /static/.test(d.css("position")) && (u = h), l.left < (o._helper ? h.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - h.left : o.position.left - u.left), c && (o.size.height = o.size.width / o.aspectRatio), o.position.left = r.helper ? h.left : 0), l.top < (o._helper ? h.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - h.top : o.position.top), c && (o.size.width = o.size.height * o.aspectRatio), o.position.top = o._helper ? h.top : 0), o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top, i = Math.abs((o._helper ? o.offset.left - u.left : o.offset.left - u.left) + o.sizeDiff.width), s = Math.abs((o._helper ? o.offset.top - u.top : o.offset.top - h.top) + o.sizeDiff.height), n = o.containerElement.get(0) === o.element.parent().get(0), a = /relative|absolute/.test(o.containerElement.css("position")), n && a && (i -= Math.abs(o.parentData.left)), i + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - i, c && (o.size.height = o.size.width / o.aspectRatio)), s + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - s, c && (o.size.width = o.size.height * o.aspectRatio))
        },stop: function() {
            var e = t(this).data("ui-resizable"), i = e.options, s = e.containerOffset, n = e.containerPosition, a = e.containerElement, o = t(e.helper), r = o.offset(), h = o.outerWidth() - e.sizeDiff.width, l = o.outerHeight() - e.sizeDiff.height;
            e._helper && !i.animate && /relative/.test(a.css("position")) && t(this).css({left: r.left - n.left - s.left,width: h,height: l}), e._helper && !i.animate && /static/.test(a.css("position")) && t(this).css({left: r.left - n.left - s.left,width: h,height: l})
        }}), t.ui.plugin.add("resizable", "alsoResize", {start: function() {
            var e = t(this).data("ui-resizable"), i = e.options, s = function(e) {
                t(e).each(function() {
                    var e = t(this);
                    e.data("ui-resizable-alsoresize", {width: parseInt(e.width(), 10),height: parseInt(e.height(), 10),left: parseInt(e.css("left"), 10),top: parseInt(e.css("top"), 10)})
                })
            };
            "object" != typeof i.alsoResize || i.alsoResize.parentNode ? s(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], s(i.alsoResize)) : t.each(i.alsoResize, function(t) {
                s(t)
            })
        },resize: function(e, i) {
            var s = t(this).data("ui-resizable"), n = s.options, a = s.originalSize, o = s.originalPosition, r = {height: s.size.height - a.height || 0,width: s.size.width - a.width || 0,top: s.position.top - o.top || 0,left: s.position.left - o.left || 0}, h = function(e, s) {
                t(e).each(function() {
                    var e = t(this), n = t(this).data("ui-resizable-alsoresize"), a = {}, o = s && s.length ? s : e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    t.each(o, function(t, e) {
                        var i = (n[e] || 0) + (r[e] || 0);
                        i && i >= 0 && (a[e] = i || null)
                    }), e.css(a)
                })
            };
            "object" != typeof n.alsoResize || n.alsoResize.nodeType ? h(n.alsoResize) : t.each(n.alsoResize, function(t, e) {
                h(t, e)
            })
        },stop: function() {
            t(this).removeData("resizable-alsoresize")
        }}), t.ui.plugin.add("resizable", "ghost", {start: function() {
            var e = t(this).data("ui-resizable"), i = e.options, s = e.size;
            e.ghost = e.originalElement.clone(), e.ghost.css({opacity: .25,display: "block",position: "relative",height: s.height,width: s.width,margin: 0,left: 0,top: 0}).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), e.ghost.appendTo(e.helper)
        },resize: function() {
            var e = t(this).data("ui-resizable");
            e.ghost && e.ghost.css({position: "relative",height: e.size.height,width: e.size.width})
        },stop: function() {
            var e = t(this).data("ui-resizable");
            e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
        }}), t.ui.plugin.add("resizable", "grid", {resize: function() {
            var e = t(this).data("ui-resizable"), i = e.options, s = e.size, n = e.originalSize, a = e.originalPosition, o = e.axis, r = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid, h = r[0] || 1, l = r[1] || 1, c = Math.round((s.width - n.width) / h) * h, u = Math.round((s.height - n.height) / l) * l, d = n.width + c, p = n.height + u, f = i.maxWidth && d > i.maxWidth, g = i.maxHeight && p > i.maxHeight, m = i.minWidth && i.minWidth > d, v = i.minHeight && i.minHeight > p;
            i.grid = r, m && (d += h), v && (p += l), f && (d -= h), g && (p -= l), /^(se|s|e)$/.test(o) ? (e.size.width = d, e.size.height = p) : /^(ne)$/.test(o) ? (e.size.width = d, e.size.height = p, e.position.top = a.top - u) : /^(sw)$/.test(o) ? (e.size.width = d, e.size.height = p, e.position.left = a.left - c) : (p - l > 0 ? (e.size.height = p, e.position.top = a.top - u) : (e.size.height = l, e.position.top = a.top + n.height - l), d - h > 0 ? (e.size.width = d, e.position.left = a.left - c) : (e.size.width = h, e.position.left = a.left + n.width - h))
        }})
})(jQuery);
(function(t) {
    t.widget("ui.selectable", t.ui.mouse, {version: "1.10.4",options: {appendTo: "body",autoRefresh: !0,distance: 0,filter: "*",tolerance: "touch",selected: null,selecting: null,start: null,stop: null,unselected: null,unselecting: null},_create: function() {
            var e, i = this;
            this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                e = t(i.options.filter, i.element[0]), e.addClass("ui-selectee"), e.each(function() {
                    var e = t(this), i = e.offset();
                    t.data(this, "selectable-item", {element: this,$element: e,left: i.left,top: i.top,right: i.left + e.outerWidth(),bottom: i.top + e.outerHeight(),startselected: !1,selected: e.hasClass("ui-selected"),selecting: e.hasClass("ui-selecting"),unselecting: e.hasClass("ui-unselecting")})
                })
            }, this.refresh(), this.selectees = e.addClass("ui-selectee"), this._mouseInit(), this.helper = t("<div class='ui-selectable-helper'></div>")
        },_destroy: function() {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
        },_mouseStart: function(e) {
            var i = this, s = this.options;
            this.opos = [e.pageX, e.pageY], this.options.disabled || (this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), t(s.appendTo).append(this.helper), this.helper.css({left: e.pageX,top: e.pageY,width: 0,height: 0}), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var s = t.data(this, "selectable-item");
                s.startselected = !0, e.metaKey || e.ctrlKey || (s.$element.removeClass("ui-selected"), s.selected = !1, s.$element.addClass("ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", e, {unselecting: s.element}))
            }), t(e.target).parents().addBack().each(function() {
                var s, n = t.data(this, "selectable-item");
                return n ? (s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected"), n.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", e, {selecting: n.element}) : i._trigger("unselecting", e, {unselecting: n.element}), !1) : undefined
            }))
        },_mouseDrag: function(e) {
            if (this.dragged = !0, !this.options.disabled) {
                var i, s = this, n = this.options, a = this.opos[0], o = this.opos[1], r = e.pageX, l = e.pageY;
                return a > r && (i = r, r = a, a = i), o > l && (i = l, l = o, o = i), this.helper.css({left: a,top: o,width: r - a,height: l - o}), this.selectees.each(function() {
                    var i = t.data(this, "selectable-item"), h = !1;
                    i && i.element !== s.element[0] && ("touch" === n.tolerance ? h = !(i.left > r || a > i.right || i.top > l || o > i.bottom) : "fit" === n.tolerance && (h = i.left > a && r > i.right && i.top > o && l > i.bottom), h ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, s._trigger("selecting", e, {selecting: i.element}))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", e, {unselecting: i.element}))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", e, {unselecting: i.element})))))
                }), !1
            }
        },_mouseStop: function(e) {
            var i = this;
            return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function() {
                var s = t.data(this, "selectable-item");
                s.$element.removeClass("ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", e, {unselected: s.element})
            }), t(".ui-selecting", this.element[0]).each(function() {
                var s = t.data(this, "selectable-item");
                s.$element.removeClass("ui-selecting").addClass("ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", e, {selected: s.element})
            }), this._trigger("stop", e), this.helper.remove(), !1
        }})
})(jQuery);
(function(t) {
    var e = 5;
    t.widget("ui.slider", t.ui.mouse, {version: "1.10.4",widgetEventPrefix: "slide",options: {animate: !1,distance: 0,max: 100,min: 0,orientation: "horizontal",range: !1,step: 1,value: 0,values: null,change: null,slide: null,start: null,stop: null},_create: function() {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
        },_refresh: function() {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },_createHandles: function() {
            var e, i, s = this.options, n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), a = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>", o = [];
            for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++)
                o.push(a);
            this.handles = n.add(t(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(e) {
                t(this).data("ui-slider-handle-index", e)
            })
        },_createRange: function() {
            var e = this.options, i = "";
            e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left: "",bottom: ""}) : (this.range = t("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : (this.range && this.range.remove(), this.range = null)
        },_setupEvents: function() {
            var t = this.handles.add(this.range).filter("a");
            this._off(t), this._on(t, this._handleEvents), this._hoverable(t), this._focusable(t)
        },_destroy: function() {
            this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
        },_mouseCapture: function(e) {
            var i, s, n, a, o, r, l, h, u = this, c = this.options;
            return c.disabled ? !1 : (this.elementSize = {width: this.element.outerWidth(),height: this.element.outerHeight()}, this.elementOffset = this.element.offset(), i = {x: e.pageX,y: e.pageY}, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
                var i = Math.abs(s - u.values(e));
                (n > i || n === i && (e === u._lastChangedValue || u.values(e) === c.min)) && (n = i, a = t(this), o = e)
            }), r = this._start(e, o), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, a.addClass("ui-state-active").focus(), l = a.offset(), h = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = h ? {left: 0,top: 0} : {left: e.pageX - l.left - a.width() / 2,top: e.pageY - l.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0)}, this.handles.hasClass("ui-state-hover") || this._slide(e, o, s), this._animateOff = !0, !0))
        },_mouseStart: function() {
            return !0
        },_mouseDrag: function(t) {
            var e = {x: t.pageX,y: t.pageY}, i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i), !1
        },_mouseStop: function(t) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },_detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },_normValueFromMouse: function(t) {
            var e, i, s, n, a;
            return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / e, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), a = this._valueMin() + s * n, this._trimAlignValue(a)
        },_start: function(t, e) {
            var i = {handle: this.handles[e],value: this.value()};
            return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("start", t, i)
        },_slide: function(t, e, i) {
            var s, n, a;
            this.options.values && this.options.values.length ? (s = this.values(e ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === e && i > s || 1 === e && s > i) && (i = s), i !== this.values(e) && (n = this.values(), n[e] = i, a = this._trigger("slide", t, {handle: this.handles[e],value: i,values: n}), s = this.values(e ? 0 : 1), a !== !1 && this.values(e, i))) : i !== this.value() && (a = this._trigger("slide", t, {handle: this.handles[e],value: i}), a !== !1 && this.value(i))
        },_stop: function(t, e) {
            var i = {handle: this.handles[e],value: this.value()};
            this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("stop", t, i)
        },_change: function(t, e) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {handle: this.handles[e],value: this.value()};
                this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._lastChangedValue = e, this._trigger("change", t, i)
            }
        },value: function(t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), this._change(null, 0), undefined) : this._value()
        },values: function(e, i) {
            var s, n, a;
            if (arguments.length > 1)
                return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), this._change(null, e), undefined;
            if (!arguments.length)
                return this._values();
            if (!t.isArray(arguments[0]))
                return this.options.values && this.options.values.length ? this._values(e) : this.value();
            for (s = this.options.values, n = arguments[0], a = 0; s.length > a; a += 1)
                s[a] = this._trimAlignValue(n[a]), this._change(null, a);
            this._refreshValue()
        },_setOption: function(e, i) {
            var s, n = 0;
            switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), t.Widget.prototype._setOption.apply(this, arguments), e) {
                case "orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1)
                        this._change(null, s);
                    this._animateOff = !1;
                    break;
                case "min":
                case "max":
                    this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },_value: function() {
            var t = this.options.value;
            return t = this._trimAlignValue(t)
        },_values: function(t) {
            var e, i, s;
            if (arguments.length)
                return e = this.options.values[t], e = this._trimAlignValue(e);
            if (this.options.values && this.options.values.length) {
                for (i = this.options.values.slice(), s = 0; i.length > s; s += 1)
                    i[s] = this._trimAlignValue(i[s]);
                return i
            }
            return []
        },_trimAlignValue: function(t) {
            if (this._valueMin() >= t)
                return this._valueMin();
            if (t >= this._valueMax())
                return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1, i = (t - this._valueMin()) % e, s = t - i;
            return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
        },_valueMin: function() {
            return this.options.min
        },_valueMax: function() {
            return this.options.max
        },_refreshValue: function() {
            var e, i, s, n, a, o = this.options.range, r = this.options, l = this, h = this._animateOff ? !1 : r.animate, u = {};
            this.options.values && this.options.values.length ? this.handles.each(function(s) {
                i = 100 * ((l.values(s) - l._valueMin()) / (l._valueMax() - l._valueMin())), u["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[h ? "animate" : "css"](u, r.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({left: i + "%"}, r.animate), 1 === s && l.range[h ? "animate" : "css"]({width: i - e + "%"}, {queue: !1,duration: r.animate})) : (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({bottom: i + "%"}, r.animate), 1 === s && l.range[h ? "animate" : "css"]({height: i - e + "%"}, {queue: !1,duration: r.animate}))), e = i
            }) : (s = this.value(), n = this._valueMin(), a = this._valueMax(), i = a !== n ? 100 * ((s - n) / (a - n)) : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](u, r.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({width: i + "%"}, r.animate), "max" === o && "horizontal" === this.orientation && this.range[h ? "animate" : "css"]({width: 100 - i + "%"}, {queue: !1,duration: r.animate}), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({height: i + "%"}, r.animate), "max" === o && "vertical" === this.orientation && this.range[h ? "animate" : "css"]({height: 100 - i + "%"}, {queue: !1,duration: r.animate}))
        },_handleEvents: {keydown: function(i) {
                var s, n, a, o, r = t(i.target).data("ui-slider-handle-index");
                switch (i.keyCode) {
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_UP:
                    case t.ui.keyCode.PAGE_DOWN:
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (i.preventDefault(), !this._keySliding && (this._keySliding = !0, t(i.target).addClass("ui-state-active"), s = this._start(i, r), s === !1))
                            return
                }
                switch (o = this.options.step, n = a = this.options.values && this.options.values.length ? this.values(r) : this.value(), i.keyCode) {
                    case t.ui.keyCode.HOME:
                        a = this._valueMin();
                        break;
                    case t.ui.keyCode.END:
                        a = this._valueMax();
                        break;
                    case t.ui.keyCode.PAGE_UP:
                        a = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / e);
                        break;
                    case t.ui.keyCode.PAGE_DOWN:
                        a = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / e);
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                        if (n === this._valueMax())
                            return;
                        a = this._trimAlignValue(n + o);
                        break;
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (n === this._valueMin())
                            return;
                        a = this._trimAlignValue(n - o)
                }
                this._slide(i, r, a)
            },click: function(t) {
                t.preventDefault()
            },keyup: function(e) {
                var i = t(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), t(e.target).removeClass("ui-state-active"))
            }}})
})(jQuery);
(function(t) {
    function e(t, e, i) {
        return t > e && e + i > t
    }
    function i(t) {
        return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
    }
    t.widget("ui.sortable", t.ui.mouse, {version: "1.10.4",widgetEventPrefix: "sort",ready: !1,options: {appendTo: "parent",axis: !1,connectWith: !1,containment: !1,cursor: "auto",cursorAt: !1,dropOnEmpty: !0,forcePlaceholderSize: !1,forceHelperSize: !1,grid: !1,handle: !1,helper: "original",items: "> *",opacity: !1,placeholder: !1,revert: !1,scroll: !0,scrollSensitivity: 20,scrollSpeed: 20,scope: "default",tolerance: "intersect",zIndex: 1e3,activate: null,beforeStop: null,change: null,deactivate: null,out: null,over: null,receive: null,remove: null,sort: null,start: null,stop: null,update: null},_create: function() {
            var t = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === t.axis || i(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
        },_destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--)
                this.items[t].item.removeData(this.widgetName + "-item");
            return this
        },_setOption: function(e, i) {
            "disabled" === e ? (this.options[e] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : t.Widget.prototype._setOption.apply(this, arguments)
        },_mouseCapture: function(e, i) {
            var s = null, n = !1, o = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function() {
                return t.data(this, o.widgetName + "-item") === o ? (s = t(this), !1) : undefined
            }), t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)), s ? !this.options.handle || i || (t(this.options.handle, s).find("*").addBack().each(function() {
                this === e.target && (n = !0)
            }), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1)
        },_mouseStart: function(e, i, s) {
            var n, o, a = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {top: this.offset.top - this.margins.top,left: this.offset.left - this.margins.left}, t.extend(this.offset, {click: {left: e.pageX - this.offset.left,top: e.pageY - this.offset.top},parent: this._getParentOffset(),relative: this._getRelativeOffset()}), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {prev: this.currentItem.prev()[0],parent: this.currentItem.parent()[0]}, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
                for (n = this.containers.length - 1; n >= 0; n--)
                    this.containers[n]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
        },_mouseDrag: function(e) {
            var i, s, n, o, a = this.options, r = !1;
            for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - t(document).scrollTop() < a.scrollSensitivity ? r = t(document).scrollTop(t(document).scrollTop() - a.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < a.scrollSensitivity && (r = t(document).scrollTop(t(document).scrollTop() + a.scrollSpeed)), e.pageX - t(document).scrollLeft() < a.scrollSensitivity ? r = t(document).scrollLeft(t(document).scrollLeft() - a.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < a.scrollSensitivity && (r = t(document).scrollLeft(t(document).scrollLeft() + a.scrollSpeed))), r !== !1 && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                if (s = this.items[i], n = s.item[0], o = this._intersectsWithPointer(s), o && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], n) : !0)) {
                    if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s))
                        break;
                    this._rearrange(e, s), this._trigger("change", e, this._uiHash());
                    break
                }
            return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },_mouseStop: function(e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                    var s = this, n = this.placeholder.offset(), o = this.options.axis, a = {};
                    o && "x" !== o || (a.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (a.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function() {
                        s._clear(e)
                    })
                } else
                    this._clear(e, i);
                return !1
            }
        },cancel: function() {
            if (this.dragging) {
                this._mouseUp({target: null}), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--)
                    this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {helper: null,dragging: !1,reverting: !1,_noFinalSort: null}), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
        },serialize: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected), s = [];
            return e = e || {}, t(i).each(function() {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
            }), !s.length && e.key && s.push(e.key + "="), s.join("&")
        },toArray: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected), s = [];
            return e = e || {}, i.each(function() {
                s.push(t(e.item || this).attr(e.attribute || "id") || "")
            }), s
        },_intersectsWith: function(t) {
            var e = this.positionAbs.left, i = e + this.helperProportions.width, s = this.positionAbs.top, n = s + this.helperProportions.height, o = t.left, a = o + t.width, r = t.top, h = r + t.height, l = this.offset.click.top, c = this.offset.click.left, u = "x" === this.options.axis || s + l > r && h > s + l, d = "y" === this.options.axis || e + c > o && a > e + c, p = u && d;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && a > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2
        },_intersectsWithPointer: function(t) {
            var i = "x" === this.options.axis || e(this.positionAbs.top + this.offset.click.top, t.top, t.height), s = "y" === this.options.axis || e(this.positionAbs.left + this.offset.click.left, t.left, t.width), n = i && s, o = this._getDragVerticalDirection(), a = this._getDragHorizontalDirection();
            return n ? this.floating ? a && "right" === a || "down" === o ? 2 : 1 : o && ("down" === o ? 2 : 1) : !1
        },_intersectsWithSides: function(t) {
            var i = e(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height), s = e(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width), n = this._getDragVerticalDirection(), o = this._getDragHorizontalDirection();
            return this.floating && o ? "right" === o && s || "left" === o && !s : n && ("down" === n && i || "up" === n && !i)
        },_getDragVerticalDirection: function() {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (t > 0 ? "down" : "up")
        },_getDragHorizontalDirection: function() {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (t > 0 ? "right" : "left")
        },refresh: function(t) {
            return this._refreshItems(t), this.refreshPositions(), this
        },_connectWith: function() {
            var t = this.options;
            return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
        },_getItemsAsjQuery: function(e) {
            function i() {
                r.push(this)
            }
            var s, n, o, a, r = [], h = [], l = this._connectWith();
            if (l && e)
                for (s = l.length - 1; s >= 0; s--)
                    for (o = t(l[s]), n = o.length - 1; n >= 0; n--)
                        a = t.data(o[n], this.widgetFullName), a && a !== this && !a.options.disabled && h.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
            for (h.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {options: this.options,item: this.currentItem}) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = h.length - 1; s >= 0; s--)
                h[s][0].each(i);
            return t(r)
        },_removeCurrentsFromItems: function() {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function(t) {
                for (var i = 0; e.length > i; i++)
                    if (e[i] === t.item[0])
                        return !1;
                return !0
            })
        },_refreshItems: function(e) {
            this.items = [], this.containers = [this];
            var i, s, n, o, a, r, h, l, c = this.items, u = [[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {item: this.currentItem}) : t(this.options.items, this.element), this]], d = this._connectWith();
            if (d && this.ready)
                for (i = d.length - 1; i >= 0; i--)
                    for (n = t(d[i]), s = n.length - 1; s >= 0; s--)
                        o = t.data(n[s], this.widgetFullName), o && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {item: this.currentItem}) : t(o.options.items, o.element), o]), this.containers.push(o));
            for (i = u.length - 1; i >= 0; i--)
                for (a = u[i][1], r = u[i][0], s = 0, l = r.length; l > s; s++)
                    h = t(r[s]), h.data(this.widgetName + "-item", a), c.push({item: h,instance: a,width: 0,height: 0,left: 0,top: 0})
        },refreshPositions: function(e) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var i, s, n, o;
            for (i = this.items.length - 1; i >= 0; i--)
                s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s.left = o.left, s.top = o.top);
            if (this.options.custom && this.options.custom.refreshContainers)
                this.options.custom.refreshContainers.call(this);
            else
                for (i = this.containers.length - 1; i >= 0; i--)
                    o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },_createPlaceholder: function(e) {
            e = e || this;
            var i, s = e.options;
            s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {element: function() {
                    var s = e.currentItem[0].nodeName.toLowerCase(), n = t("<" + s + ">", e.document[0]).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tr" === s ? e.currentItem.children().each(function() {
                        t("<td>&#160;</td>", e.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(n)
                    }) : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
                },update: function(t, n) {
                    (!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                }}), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder)
        },_contactContainers: function(s) {
            var n, o, a, r, h, l, c, u, d, p, f = null, g = null;
            for (n = this.containers.length - 1; n >= 0; n--)
                if (!t.contains(this.currentItem[0], this.containers[n].element[0]))
                    if (this._intersectsWith(this.containers[n].containerCache)) {
                        if (f && t.contains(this.containers[n].element[0], f.element[0]))
                            continue;
                        f = this.containers[n], g = n
                    } else
                        this.containers[n].containerCache.over && (this.containers[n]._trigger("out", s, this._uiHash(this)), this.containers[n].containerCache.over = 0);
            if (f)
                if (1 === this.containers.length)
                    this.containers[g].containerCache.over || (this.containers[g]._trigger("over", s, this._uiHash(this)), this.containers[g].containerCache.over = 1);
                else {
                    for (a = 1e4, r = null, p = f.floating || i(this.currentItem), h = p ? "left" : "top", l = p ? "width" : "height", c = this.positionAbs[h] + this.offset.click[h], o = this.items.length - 1; o >= 0; o--)
                        t.contains(this.containers[g].element[0], this.items[o].item[0]) && this.items[o].item[0] !== this.currentItem[0] && (!p || e(this.positionAbs.top + this.offset.click.top, this.items[o].top, this.items[o].height)) && (u = this.items[o].item.offset()[h], d = !1, Math.abs(u - c) > Math.abs(u + this.items[o][l] - c) && (d = !0, u += this.items[o][l]), a > Math.abs(u - c) && (a = Math.abs(u - c), r = this.items[o], this.direction = d ? "up" : "down"));
                    if (!r && !this.options.dropOnEmpty)
                        return;
                    if (this.currentContainer === this.containers[g])
                        return;
                    r ? this._rearrange(s, r, null, !0) : this._rearrange(s, null, this.containers[g].element, !0), this._trigger("change", s, this._uiHash()), this.containers[g]._trigger("change", s, this._uiHash(this)), this.currentContainer = this.containers[g], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[g]._trigger("over", s, this._uiHash(this)), this.containers[g].containerCache.over = 1
                }
        },_createHelper: function(e) {
            var i = this.options, s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {width: this.currentItem[0].style.width,height: this.currentItem[0].style.height,position: this.currentItem.css("position"),top: this.currentItem.css("top"),left: this.currentItem.css("left")}), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
        },_adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {left: +e[0],top: +e[1] || 0}), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },_getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {top: 0,left: 0}), {top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)}
        },_getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var t = this.currentItem.position();
                return {top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()}
            }
            return {top: 0,left: 0}
        },_cacheMargins: function() {
            this.margins = {left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,top: parseInt(this.currentItem.css("marginTop"), 10) || 0}
        },_cacheHelperProportions: function() {
            this.helperProportions = {width: this.helper.outerWidth(),height: this.helper.outerHeight()}
        },_setContainment: function() {
            var e, i, s, n = this.options;
            "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" === n.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" === n.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },_convertPositionTo: function(e, i) {
            i || (i = this.position);
            var s = "absolute" === e ? 1 : -1, n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, o = /(html|body)/i.test(n[0].tagName);
            return {top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s}
        },_generatePosition: function(e) {
            var i, s, n = this.options, o = e.pageX, a = e.pageY, r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, h = /(html|body)/i.test(r[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0], o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())}
        },_rearrange: function(t, e, i, s) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var n = this.counter;
            this._delay(function() {
                n === this.counter && this.refreshPositions(!s)
            })
        },_clear: function(t, e) {
            function i(t, e, i) {
                return function(s) {
                    i._trigger(t, s, e._uiHash(e))
                }
            }
            this.reverting = !1;
            var s, n = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (s in this._storedCSS)
                    ("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else
                this.currentItem.show();
            for (this.fromOutside && !e && n.push(function(t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside))
            }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function(t) {
                this._trigger("update", t, this._uiHash())
            }), this !== this.currentContainer && (e || (n.push(function(t) {
                this._trigger("remove", t, this._uiHash())
            }), n.push(function(t) {
                return function(e) {
                    t._trigger("receive", e, this._uiHash(this))
                }
            }.call(this, this.currentContainer)), n.push(function(t) {
                return function(e) {
                    t._trigger("update", e, this._uiHash(this))
                }
            }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--)
                e || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!e) {
                    for (this._trigger("beforeStop", t, this._uiHash()), s = 0; n.length > s; s++)
                        n[s].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1, !1
            }
            if (e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !e) {
                for (s = 0; n.length > s; s++)
                    n[s].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },_trigger: function() {
            t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },_uiHash: function(e) {
            var i = e || this;
            return {helper: i.helper,placeholder: i.placeholder || t([]),position: i.position,originalPosition: i.originalPosition,offset: i.positionAbs,item: i.currentItem,sender: e ? e.element : null}
        }})
})(jQuery);
(function(t) {
    function e(t) {
        return function() {
            var e = this.element.val();
            t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
        }
    }
    t.widget("ui.spinner", {version: "1.10.4",defaultElement: "<input>",widgetEventPrefix: "spin",options: {culture: null,icons: {down: "ui-icon-triangle-1-s",up: "ui-icon-triangle-1-n"},incremental: !0,max: null,min: null,numberFormat: null,page: 10,step: 1,change: null,spin: null,start: null,stop: null},_create: function() {
            this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }})
        },_getCreateOptions: function() {
            var e = {}, i = this.element;
            return t.each(["min", "max", "step"], function(t, s) {
                var n = i.attr(s);
                void 0 !== n && n.length && (e[s] = n)
            }), e
        },_events: {keydown: function(t) {
                this._start(t) && this._keydown(t) && t.preventDefault()
            },keyup: "_stop",focus: function() {
                this.previous = this.element.val()
            },blur: function(t) {
                return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", t), void 0)
            },mousewheel: function(t, e) {
                if (e) {
                    if (!this.spinning && !this._start(t))
                        return !1;
                    this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
                        this.spinning && this._stop(t)
                    }, 100), t.preventDefault()
                }
            },"mousedown .ui-spinner-button": function(e) {
                function i() {
                    var t = this.element[0] === this.document[0].activeElement;
                    t || (this.element.focus(), this.previous = s, this._delay(function() {
                        this.previous = s
                    }))
                }
                var s;
                s = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function() {
                    delete this.cancelBlur, i.call(this)
                }), this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
            },"mouseup .ui-spinner-button": "_stop","mouseenter .ui-spinner-button": function(e) {
                return t(e.currentTarget).hasClass("ui-state-active") ? this._start(e) === !1 ? !1 : (this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e), void 0) : void 0
            },"mouseleave .ui-spinner-button": "_stop"},_draw: function() {
            var t = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this.element.attr("role", "spinbutton"), this.buttons = t.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * t.height()) && t.height() > 0 && t.height(t.height()), this.options.disabled && this.disable()
        },_keydown: function(e) {
            var i = this.options, s = t.ui.keyCode;
            switch (e.keyCode) {
                case s.UP:
                    return this._repeat(null, 1, e), !0;
                case s.DOWN:
                    return this._repeat(null, -1, e), !0;
                case s.PAGE_UP:
                    return this._repeat(null, i.page, e), !0;
                case s.PAGE_DOWN:
                    return this._repeat(null, -i.page, e), !0
            }
            return !1
        },_uiSpinnerHtml: function() {
            return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
        },_buttonHtml: function() {
            return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" + "</a>" + "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" + "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" + "</a>"
        },_start: function(t) {
            return this.spinning || this._trigger("start", t) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
        },_repeat: function(t, e, i) {
            t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                this._repeat(40, e, i)
            }, t), this._spin(e * this.options.step, i)
        },_spin: function(t, e) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && this._trigger("spin", e, {value: i}) === !1 || (this._value(i), this.counter++)
        },_increment: function(e) {
            var i = this.options.incremental;
            return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
        },_precision: function() {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
        },_precisionOf: function(t) {
            var e = "" + t, i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1
        },_adjustValue: function(t) {
            var e, i, s = this.options;
            return e = null !== s.min ? s.min : 0, i = t - e, i = Math.round(i / s.step) * s.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && s.min > t ? s.min : t
        },_stop: function(t) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
        },_setOption: function(t, e) {
            if ("culture" === t || "numberFormat" === t) {
                var i = this._parse(this.element.val());
                return this.options[t] = e, this.element.val(this._format(i)), void 0
            }
            ("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)), this._super(t, e), "disabled" === t && (e ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
        },_setOptions: e(function(t) {
            this._super(t), this._value(this.element.val())
        }),_parse: function(t) {
            return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
        },_format: function(t) {
            return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
        },_refresh: function() {
            this.element.attr({"aria-valuemin": this.options.min,"aria-valuemax": this.options.max,"aria-valuenow": this._parse(this.element.val())})
        },_value: function(t, e) {
            var i;
            "" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh()
        },_destroy: function() {
            this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
        },stepUp: e(function(t) {
            this._stepUp(t)
        }),_stepUp: function(t) {
            this._start() && (this._spin((t || 1) * this.options.step), this._stop())
        },stepDown: e(function(t) {
            this._stepDown(t)
        }),_stepDown: function(t) {
            this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
        },pageUp: e(function(t) {
            this._stepUp((t || 1) * this.options.page)
        }),pageDown: e(function(t) {
            this._stepDown((t || 1) * this.options.page)
        }),value: function(t) {
            return arguments.length ? (e(this._value).call(this, t), void 0) : this._parse(this.element.val())
        },widget: function() {
            return this.uiSpinner
        }})
})(jQuery);
(function(t, e) {
    function i() {
        return ++n
    }
    function s(t) {
        return t = t.cloneNode(!1), t.hash.length > 1 && decodeURIComponent(t.href.replace(a, "")) === decodeURIComponent(location.href.replace(a, ""))
    }
    var n = 0, a = /#.*$/;
    t.widget("ui.tabs", {version: "1.10.4",delay: 300,options: {active: null,collapsible: !1,event: "click",heightStyle: "content",hide: null,show: null,activate: null,beforeActivate: null,beforeLoad: null,load: null},_create: function() {
            var e = this, i = this.options;
            this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(e) {
                t(this).is(".ui-state-disabled") && e.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                t(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) {
                return e.tabs.index(t)
            }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
        },_initialActive: function() {
            var i = this.options.active, s = this.options.collapsible, n = location.hash.substring(1);
            return null === i && (n && this.tabs.each(function(s, a) {
                return t(a).attr("aria-controls") === n ? (i = s, !1) : e
            }), null === i && (i = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === i || -1 === i) && (i = this.tabs.length ? 0 : !1)), i !== !1 && (i = this.tabs.index(this.tabs.eq(i)), -1 === i && (i = s ? !1 : 0)), !s && i === !1 && this.anchors.length && (i = 0), i
        },_getCreateEventData: function() {
            return {tab: this.active,panel: this.active.length ? this._getPanelForTab(this.active) : t()}
        },_tabKeydown: function(i) {
            var s = t(this.document[0].activeElement).closest("li"), n = this.tabs.index(s), a = !0;
            if (!this._handlePageNav(i)) {
                switch (i.keyCode) {
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                        n++;
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.LEFT:
                        a = !1, n--;
                        break;
                    case t.ui.keyCode.END:
                        n = this.anchors.length - 1;
                        break;
                    case t.ui.keyCode.HOME:
                        n = 0;
                        break;
                    case t.ui.keyCode.SPACE:
                        return i.preventDefault(), clearTimeout(this.activating), this._activate(n), e;
                    case t.ui.keyCode.ENTER:
                        return i.preventDefault(), clearTimeout(this.activating), this._activate(n === this.options.active ? !1 : n), e;
                    default:
                        return
                }
                i.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, a), i.ctrlKey || (s.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function() {
                    this.option("active", n)
                }, this.delay))
            }
        },_panelKeydown: function(e) {
            this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.focus())
        },_handlePageNav: function(i) {
            return i.altKey && i.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : i.altKey && i.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : e
        },_findNextTab: function(e, i) {
            function s() {
                return e > n && (e = 0), 0 > e && (e = n), e
            }
            for (var n = this.tabs.length - 1; -1 !== t.inArray(s(), this.options.disabled); )
                e = i ? e + 1 : e - 1;
            return e
        },_focusNextTab: function(t, e) {
            return t = this._findNextTab(t, e), this.tabs.eq(t).focus(), t
        },_setOption: function(t, i) {
            return "active" === t ? (this._activate(i), e) : "disabled" === t ? (this._setupDisabled(i), e) : (this._super(t, i), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", i), i || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(i), "heightStyle" === t && this._setupHeightStyle(i), e)
        },_tabId: function(t) {
            return t.attr("aria-controls") || "ui-tabs-" + i()
        },_sanitizeSelector: function(t) {
            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },refresh: function() {
            var e = this.options, i = this.tablist.children(":has(a[href])");
            e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) {
                return i.index(t)
            }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
        },_refresh: function() {
            this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({"aria-selected": "false",tabIndex: -1}), this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded": "false","aria-hidden": "true"}), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected": "true",tabIndex: 0}), this._getPanelForTab(this.active).show().attr({"aria-expanded": "true","aria-hidden": "false"})) : this.tabs.eq(0).attr("tabIndex", 0)
        },_processTabs: function() {
            var e = this;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role: "tab",tabIndex: -1}), this.anchors = this.tabs.map(function() {
                return t("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({role: "presentation",tabIndex: -1}), this.panels = t(), this.anchors.each(function(i, n) {
                var a, o, r, h = t(n).uniqueId().attr("id"), l = t(n).closest("li"), c = l.attr("aria-controls");
                s(n) ? (a = n.hash, o = e.element.find(e._sanitizeSelector(a))) : (r = e._tabId(l), a = "#" + r, o = e.element.find(a), o.length || (o = e._createPanel(r), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), c && l.data("ui-tabs-aria-controls", c), l.attr({"aria-controls": a.substring(1),"aria-labelledby": h}), o.attr("aria-labelledby", h)
            }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
        },_getList: function() {
            return this.tablist || this.element.find("ol,ul").eq(0)
        },_createPanel: function(e) {
            return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        },_setupDisabled: function(e) {
            t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
            for (var i, s = 0; i = this.tabs[s]; s++)
                e === !0 || -1 !== t.inArray(s, e) ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = e
        },_setupEvents: function(e) {
            var i = {click: function(t) {
                    t.preventDefault()
                }};
            e && t.each(e.split(" "), function(t, e) {
                i[e] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, i), this._on(this.tabs, {keydown: "_tabKeydown"}), this._on(this.panels, {keydown: "_panelKeydown"}), this._focusable(this.tabs), this._hoverable(this.tabs)
        },_setupHeightStyle: function(e) {
            var i, s = this.element.parent();
            "fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                var e = t(this), s = e.css("position");
                "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function() {
                i -= t(this).outerHeight(!0)
            }), this.panels.each(function() {
                t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
            }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() {
                i = Math.max(i, t(this).height("").height())
            }).height(i))
        },_eventHandler: function(e) {
            var i = this.options, s = this.active, n = t(e.currentTarget), a = n.closest("li"), o = a[0] === s[0], r = o && i.collapsible, h = r ? t() : this._getPanelForTab(a), l = s.length ? this._getPanelForTab(s) : t(), c = {oldTab: s,oldPanel: l,newTab: r ? t() : a,newPanel: h};
            e.preventDefault(), a.hasClass("ui-state-disabled") || a.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || this._trigger("beforeActivate", e, c) === !1 || (i.active = r ? !1 : this.tabs.index(a), this.active = o ? t() : a, this.xhr && this.xhr.abort(), l.length || h.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(a), e), this._toggle(e, c))
        },_toggle: function(e, i) {
            function s() {
                a.running = !1, a._trigger("activate", e, i)
            }
            function n() {
                i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), o.length && a.options.show ? a._show(o, a.options.show, s) : (o.show(), s())
            }
            var a = this, o = i.newPanel, r = i.oldPanel;
            this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function() {
                i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), n()
            }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), n()), r.attr({"aria-expanded": "false","aria-hidden": "true"}), i.oldTab.attr("aria-selected", "false"), o.length && r.length ? i.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter(function() {
                return 0 === t(this).attr("tabIndex")
            }).attr("tabIndex", -1), o.attr({"aria-expanded": "true","aria-hidden": "false"}), i.newTab.attr({"aria-selected": "true",tabIndex: 0})
        },_activate: function(e) {
            var i, s = this._findActive(e);
            s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({target: i,currentTarget: i,preventDefault: t.noop}))
        },_findActive: function(e) {
            return e === !1 ? t() : this.tabs.eq(e)
        },_getIndex: function(t) {
            return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))), t
        },_destroy: function() {
            this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() {
                t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            }), this.tabs.each(function() {
                var e = t(this), i = e.data("ui-tabs-aria-controls");
                i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },enable: function(i) {
            var s = this.options.disabled;
            s !== !1 && (i === e ? s = !1 : (i = this._getIndex(i), s = t.isArray(s) ? t.map(s, function(t) {
                return t !== i ? t : null
            }) : t.map(this.tabs, function(t, e) {
                return e !== i ? e : null
            })), this._setupDisabled(s))
        },disable: function(i) {
            var s = this.options.disabled;
            if (s !== !0) {
                if (i === e)
                    s = !0;
                else {
                    if (i = this._getIndex(i), -1 !== t.inArray(i, s))
                        return;
                    s = t.isArray(s) ? t.merge([i], s).sort() : [i]
                }
                this._setupDisabled(s)
            }
        },load: function(e, i) {
            e = this._getIndex(e);
            var n = this, a = this.tabs.eq(e), o = a.find(".ui-tabs-anchor"), r = this._getPanelForTab(a), h = {tab: a,panel: r};
            s(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, h)), this.xhr && "canceled" !== this.xhr.statusText && (a.addClass("ui-tabs-loading"), r.attr("aria-busy", "true"), this.xhr.success(function(t) {
                setTimeout(function() {
                    r.html(t), n._trigger("load", i, h)
                }, 1)
            }).complete(function(t, e) {
                setTimeout(function() {
                    "abort" === e && n.panels.stop(!1, !0), a.removeClass("ui-tabs-loading"), r.removeAttr("aria-busy"), t === n.xhr && delete n.xhr
                }, 1)
            })))
        },_ajaxSettings: function(e, i, s) {
            var n = this;
            return {url: e.attr("href"),beforeSend: function(e, a) {
                    return n._trigger("beforeLoad", i, t.extend({jqXHR: e,ajaxSettings: a}, s))
                }}
        },_getPanelForTab: function(e) {
            var i = t(e).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i))
        }})
})(jQuery);
(function(t) {
    function e(e, i) {
        var s = (e.attr("aria-describedby") || "").split(/\s+/);
        s.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")))
    }
    function i(e) {
        var i = e.data("ui-tooltip-id"), s = (e.attr("aria-describedby") || "").split(/\s+/), n = t.inArray(i, s);
        -1 !== n && s.splice(n, 1), e.removeData("ui-tooltip-id"), s = t.trim(s.join(" ")), s ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby")
    }
    var s = 0;
    t.widget("ui.tooltip", {version: "1.10.4",options: {content: function() {
                var e = t(this).attr("title") || "";
                return t("<a>").text(e).html()
            },hide: !0,items: "[title]:not([disabled])",position: {my: "left top+15",at: "left bottom",collision: "flipfit flip"},show: !0,tooltipClass: null,track: !1,close: null,open: null},_create: function() {
            this._on({mouseover: "open",focusin: "open"}), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable()
        },_setOption: function(e, i) {
            var s = this;
            return "disabled" === e ? (this[i ? "_disable" : "_enable"](), this.options[e] = i, void 0) : (this._super(e, i), "content" === e && t.each(this.tooltips, function(t, e) {
                s._updateContent(e)
            }), void 0)
        },_disable: function() {
            var e = this;
            t.each(this.tooltips, function(i, s) {
                var n = t.Event("blur");
                n.target = n.currentTarget = s[0], e.close(n, !0)
            }), this.element.find(this.options.items).addBack().each(function() {
                var e = t(this);
                e.is("[title]") && e.data("ui-tooltip-title", e.attr("title")).attr("title", "")
            })
        },_enable: function() {
            this.element.find(this.options.items).addBack().each(function() {
                var e = t(this);
                e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
            })
        },open: function(e) {
            var i = this, s = t(e ? e.target : this.element).closest(this.options.items);
            s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), e && "mouseover" === e.type && s.parents().each(function() {
                var e, s = t(this);
                s.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = {element: this,title: s.attr("title")}, s.attr("title", ""))
            }), this._updateContent(s, e))
        },_updateContent: function(t, e) {
            var i, s = this.options.content, n = this, o = e ? e.type : null;
            return "string" == typeof s ? this._open(e, t, s) : (i = s.call(t[0], function(i) {
                t.data("ui-tooltip-open") && n._delay(function() {
                    e && (e.type = o), this._open(e, t, i)
                })
            }), i && this._open(e, t, i), void 0)
        },_open: function(i, s, n) {
            function o(t) {
                l.of = t, a.is(":hidden") || a.position(l)
            }
            var a, r, h, l = t.extend({}, this.options.position);
            if (n) {
                if (a = this._find(s), a.length)
                    return a.find(".ui-tooltip-content").html(n), void 0;
                s.is("[title]") && (i && "mouseover" === i.type ? s.attr("title", "") : s.removeAttr("title")), a = this._tooltip(s), e(s, a.attr("id")), a.find(".ui-tooltip-content").html(n), this.options.track && i && /^mouse/.test(i.type) ? (this._on(this.document, {mousemove: o}), o(i)) : a.position(t.extend({of: s}, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.show && this.options.show.delay && (h = this.delayedShow = setInterval(function() {
                    a.is(":visible") && (o(l.of), clearInterval(h))
                }, t.fx.interval)), this._trigger("open", i, {tooltip: a}), r = {keyup: function(e) {
                        if (e.keyCode === t.ui.keyCode.ESCAPE) {
                            var i = t.Event(e);
                            i.currentTarget = s[0], this.close(i, !0)
                        }
                    },remove: function() {
                        this._removeTooltip(a)
                    }}, i && "mouseover" !== i.type || (r.mouseleave = "close"), i && "focusin" !== i.type || (r.focusout = "close"), this._on(!0, s, r)
            }
        },close: function(e) {
            var s = this, n = t(e ? e.currentTarget : this.element), o = this._find(n);
            this.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && n.attr("title", n.data("ui-tooltip-title")), i(n), o.stop(!0), this._hide(o, this.options.hide, function() {
                s._removeTooltip(t(this))
            }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function(e, i) {
                t(i.element).attr("title", i.title), delete s.parents[e]
            }), this.closing = !0, this._trigger("close", e, {tooltip: o}), this.closing = !1)
        },_tooltip: function(e) {
            var i = "ui-tooltip-" + s++, n = t("<div>").attr({id: i,role: "tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
            return t("<div>").addClass("ui-tooltip-content").appendTo(n), n.appendTo(this.document[0].body), this.tooltips[i] = e, n
        },_find: function(e) {
            var i = e.data("ui-tooltip-id");
            return i ? t("#" + i) : t()
        },_removeTooltip: function(t) {
            t.remove(), delete this.tooltips[t.attr("id")]
        },_destroy: function() {
            var e = this;
            t.each(this.tooltips, function(i, s) {
                var n = t.Event("blur");
                n.target = n.currentTarget = s[0], e.close(n, !0), t("#" + i).remove(), s.data("ui-tooltip-title") && (s.attr("title", s.data("ui-tooltip-title")), s.removeData("ui-tooltip-title"))
            })
        }})
})(jQuery);
var libFuncName = null;
if (typeof jQuery === "undefined" && typeof Zepto === "undefined" && typeof $ === "function") {
    libFuncName = $;
} else if (typeof jQuery === "function") {
    libFuncName = jQuery;
} else if (typeof Zepto === "function") {
    libFuncName = Zepto;
} else {
    throw new TypeError();
}
(function($, window, document, undefined) {
    'use strict';
    $('head').append('<meta class="foundation-mq-small">');
    $('head').append('<meta class="foundation-mq-medium">');
    $('head').append('<meta class="foundation-mq-large">');
    window.matchMedia = window.matchMedia || (function(doc, undefined) {
        "use strict";
        var bool, docElem = doc.documentElement, refNode = docElem.firstElementChild || docElem.firstChild, fakeBody = doc.createElement("body"), div = doc.createElement("div");
        div.id = "mq-test-1";
        div.style.cssText = "position:absolute;top:-100em";
        fakeBody.style.background = "none";
        fakeBody.appendChild(div);
        return function(q) {
            div.innerHTML = "&shy;<style media=\"" + q + "\"> #mq-test-1 { width: 42px; }</style>";
            docElem.insertBefore(fakeBody, refNode);
            bool = div.offsetWidth === 42;
            docElem.removeChild(fakeBody);
            return {matches: bool,media: q};
        };
    }(document));
    if (!Array.prototype.filter) {
        Array.prototype.filter = function(fun) {
            "use strict";
            if (this == null) {
                throw new TypeError();
            }
            var t = Object(this), len = t.length >>> 0;
            if (typeof fun !== "function") {
                return;
            }
            var res = [], thisp = arguments[1];
            for (var i = 0; i < len; i++) {
                if (i in t) {
                    var val = t[i];
                    if (fun && fun.call(thisp, val, i, t)) {
                        res.push(val);
                    }
                }
            }
            return res;
        }
    }
    if (!Function.prototype.bind) {
        Function.prototype.bind = function(oThis) {
            if (typeof this !== "function") {
                throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            }
            var aArgs = Array.prototype.slice.call(arguments, 1), fToBind = this, fNOP = function() {
            }, fBound = function() {
                return fToBind.apply(this instanceof fNOP && oThis ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
            };
            fNOP.prototype = this.prototype;
            fBound.prototype = new fNOP();
            return fBound;
        };
    }
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function(searchElement) {
            "use strict";
            if (this == null) {
                throw new TypeError();
            }
            var t = Object(this);
            var len = t.length >>> 0;
            if (len === 0) {
                return -1;
            }
            var n = 0;
            if (arguments.length > 1) {
                n = Number(arguments[1]);
                if (n != n) {
                    n = 0;
                } else if (n != 0 && n != Infinity && n != -Infinity) {
                    n = (n > 0 || -1) * Math.floor(Math.abs(n));
                }
            }
            if (n >= len) {
                return -1;
            }
            var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
            for (; k < len; k++) {
                if (k in t && t[k] === searchElement) {
                    return k;
                }
            }
            return -1;
        }
    }
    $.fn.stop = $.fn.stop || function() {
        return this;
    };
    window.Foundation = {name: 'Foundation',version: '4.3.2',cache: {},media_queries: {small: $('.foundation-mq-small').css('font-family').replace(/\'/g, ''),medium: $('.foundation-mq-medium').css('font-family').replace(/\'/g, ''),large: $('.foundation-mq-large').css('font-family').replace(/\'/g, '')},stylesheet: $('<style></style>').appendTo('head')[0].sheet,init: function(scope, libraries, method, options, response, nc) {
            var library_arr, args = [scope, method, options, response], responses = [], nc = nc || false;
            if (nc)
                this.nc = nc;
            this.rtl = /rtl/i.test($('html').attr('dir'));
            this.scope = scope || this.scope;
            if (libraries && typeof libraries === 'string' && !/reflow/i.test(libraries)) {
                if (/off/i.test(libraries))
                    return this.off();
                library_arr = libraries.split(' ');
                if (library_arr.length > 0) {
                    for (var i = library_arr.length - 1; i >= 0; i--) {
                        responses.push(this.init_lib(library_arr[i], args));
                    }
                }
            } else {
                if (/reflow/i.test(libraries))
                    args[1] = 'reflow';
                for (var lib in this.libs) {
                    responses.push(this.init_lib(lib, args));
                }
            }
            if (typeof libraries === 'function') {
                args.unshift(libraries);
            }
            return this.response_obj(responses, args);
        },response_obj: function(response_arr, args) {
            for (var i = 0, len = args.length; i < len; i++) {
                if (typeof args[i] === 'function') {
                    return args[i]({errors: response_arr.filter(function(s) {
                            if (typeof s === 'string')
                                return s;
                        })});
                }
            }
            return response_arr;
        },init_lib: function(lib, args) {
            return this.trap(function() {
                if (this.libs.hasOwnProperty(lib)) {
                    this.patch(this.libs[lib]);
                    return this.libs[lib].init.apply(this.libs[lib], args);
                } else {
                    return function() {
                    };
                }
            }.bind(this), lib);
        },trap: function(fun, lib) {
            if (!this.nc) {
                try {
                    return fun();
                } catch (e) {
                    return this.error({name: lib,message: 'could not be initialized',more: e.name + ' ' + e.message});
                }
            }
            return fun();
        },patch: function(lib) {
            this.fix_outer(lib);
            lib.scope = this.scope;
            lib.rtl = this.rtl;
        },inherit: function(scope, methods) {
            var methods_arr = methods.split(' ');
            for (var i = methods_arr.length - 1; i >= 0; i--) {
                if (this.lib_methods.hasOwnProperty(methods_arr[i])) {
                    this.libs[scope.name][methods_arr[i]] = this.lib_methods[methods_arr[i]];
                }
            }
        },random_str: function(length) {
            var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
            if (!length) {
                length = Math.floor(Math.random() * chars.length);
            }
            var str = '';
            for (var i = 0; i < length; i++) {
                str += chars[Math.floor(Math.random() * chars.length)];
            }
            return str;
        },libs: {},lib_methods: {set_data: function(node, data) {
                var id = [this.name, +new Date(), Foundation.random_str(5)].join('-');
                Foundation.cache[id] = data;
                node.attr('data-' + this.name + '-id', id);
                return data;
            },get_data: function(node) {
                return Foundation.cache[node.attr('data-' + this.name + '-id')];
            },remove_data: function(node) {
                if (node) {
                    delete Foundation.cache[node.attr('data-' + this.name + '-id')];
                    node.attr('data-' + this.name + '-id', '');
                } else {
                    $('[data-' + this.name + '-id]').each(function() {
                        delete Foundation.cache[$(this).attr('data-' + this.name + '-id')];
                        $(this).attr('data-' + this.name + '-id', '');
                    });
                }
            },throttle: function(fun, delay) {
                var timer = null;
                return function() {
                    var context = this, args = arguments;
                    clearTimeout(timer);
                    timer = setTimeout(function() {
                        fun.apply(context, args);
                    }, delay);
                };
            },data_options: function(el) {
                var opts = {}, ii, p, opts_arr = (el.attr('data-options') || ':').split(';'), opts_len = opts_arr.length;
                function isNumber(o) {
                    return !isNaN(o - 0) && o !== null && o !== "" && o !== false && o !== true;
                }
                function trim(str) {
                    if (typeof str === 'string')
                        return $.trim(str);
                    return str;
                }
                for (ii = opts_len - 1; ii >= 0; ii--) {
                    p = opts_arr[ii].split(':');
                    if (/true/i.test(p[1]))
                        p[1] = true;
                    if (/false/i.test(p[1]))
                        p[1] = false;
                    if (isNumber(p[1]))
                        p[1] = parseInt(p[1], 10);
                    if (p.length === 2 && p[0].length > 0) {
                        opts[trim(p[0])] = trim(p[1]);
                    }
                }
                return opts;
            },delay: function(fun, delay) {
                return setTimeout(fun, delay);
            },scrollTo: function(el, to, duration) {
                if (duration < 0)
                    return;
                var difference = to - $(window).scrollTop();
                var perTick = difference / duration * 10;
                this.scrollToTimerCache = setTimeout(function() {
                    if (!isNaN(parseInt(perTick, 10))) {
                        window.scrollTo(0, $(window).scrollTop() + perTick);
                        this.scrollTo(el, to, duration - 10);
                    }
                }.bind(this), 10);
            },scrollLeft: function(el) {
                if (!el.length)
                    return;
                return ('scrollLeft' in el[0]) ? el[0].scrollLeft : el[0].pageXOffset;
            },empty: function(obj) {
                if (obj.length && obj.length > 0)
                    return false;
                if (obj.length && obj.length === 0)
                    return true;
                for (var key in obj) {
                    if (hasOwnProperty.call(obj, key))
                        return false;
                }
                return true;
            },addCustomRule: function(rule, media) {
                if (media === undefined) {
                    Foundation.stylesheet.insertRule(rule, Foundation.stylesheet.cssRules.length);
                } else {
                    var query = Foundation.media_queries[media];
                    if (query !== undefined) {
                        Foundation.stylesheet.insertRule('@media ' + Foundation.media_queries[media] + '{ ' + rule + ' }');
                    }
                }
            }},fix_outer: function(lib) {
            lib.outerHeight = function(el, bool) {
                if (typeof Zepto === 'function') {
                    return el.height();
                }
                if (typeof bool !== 'undefined') {
                    return el.outerHeight(bool);
                }
                return el.outerHeight();
            };
            lib.outerWidth = function(el, bool) {
                if (typeof Zepto === 'function') {
                    return el.width();
                }
                if (typeof bool !== 'undefined') {
                    return el.outerWidth(bool);
                }
                return el.outerWidth();
            };
        },error: function(error) {
            return error.name + ' ' + error.message + '; ' + error.more;
        },off: function() {
            $(this.scope).off('.fndtn');
            $(window).off('.fndtn');
            return true;
        },zj: $};
    $.fn.foundation = function() {
        var args = Array.prototype.slice.call(arguments, 0);
        return this.each(function() {
            Foundation.init.apply(Foundation, [this].concat(args));
            return this;
        });
    };
}(libFuncName, this, this.document));
;
(function($, window, document, undefined) {
    'use strict';
    Foundation.libs.alerts = {name: 'alerts',version: '4.3.2',settings: {animation: 'fadeOut',speed: 300,callback: function() {
            }},init: function(scope, method, options) {
            this.scope = scope || this.scope;
            Foundation.inherit(this, 'data_options');
            if (typeof method === 'object') {
                $.extend(true, this.settings, method);
            }
            if (typeof method !== 'string') {
                if (!this.settings.init) {
                    this.events();
                }
                return this.settings.init;
            } else {
                return this[method].call(this, options);
            }
        },events: function() {
            var self = this;
            $(this.scope).on('click.fndtn.alerts', '[data-alert] a.close', function(e) {
                var alertBox = $(this).closest("[data-alert]"), settings = $.extend({}, self.settings, self.data_options(alertBox));
                e.preventDefault();
                alertBox[settings.animation](settings.speed, function() {
                    $(this).remove();
                    settings.callback();
                });
            });
            this.settings.init = true;
        },off: function() {
            $(this.scope).off('.fndtn.alerts');
        },reflow: function() {
        }};
}(Foundation.zj, this, this.document));
;
(function($, window, document, undefined) {
    'use strict';
    Foundation.libs.clearing = {name: 'clearing',version: '4.3.2',settings: {templates: {viewing: '<a href="#" class="clearing-close">&times;</a>' + '<div class="visible-img" style="display: none"><img src="//:0">' + '<p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a>' + '<a href="#" class="clearing-main-next"><span></span></a></div>'},close_selectors: '.clearing-close',init: false,locked: false},init: function(scope, method, options) {
            var self = this;
            Foundation.inherit(this, 'set_data get_data remove_data throttle data_options');
            if (typeof method === 'object') {
                options = $.extend(true, this.settings, method);
            }
            if (typeof method !== 'string') {
                $(this.scope).find('ul[data-clearing]').each(function() {
                    var $el = $(this), options = options || {}, lis = $el.find('li'), settings = self.get_data($el);
                    if (!settings && lis.length > 0) {
                        options.$parent = $el.parent();
                        self.set_data($el, $.extend({}, self.settings, options, self.data_options($el)));
                        self.assemble($el.find('li'));
                        if (!self.settings.init) {
                            self.events().swipe_events();
                        }
                    }
                });
                return this.settings.init;
            } else {
                return this[method].call(this, options);
            }
        },events: function() {
            var self = this;
            $(this.scope).on('click.fndtn.clearing', 'ul[data-clearing] li', function(e, current, target) {
                var current = current || $(this), target = target || current, next = current.next('li'), settings = self.get_data(current.parent()), image = $(e.target);
                e.preventDefault();
                if (!settings)
                    self.init();
                if (target.hasClass('visible') && current[0] === target[0] && next.length > 0 && self.is_open(current)) {
                    target = next;
                    image = target.find('img');
                }
                self.open(image, current, target);
                self.update_paddles(target);
            }).on('click.fndtn.clearing', '.clearing-main-next', function(e) {
                this.nav(e, 'next')
            }.bind(this)).on('click.fndtn.clearing', '.clearing-main-prev', function(e) {
                this.nav(e, 'prev')
            }.bind(this)).on('click.fndtn.clearing', this.settings.close_selectors, function(e) {
                Foundation.libs.clearing.close(e, this)
            }).on('keydown.fndtn.clearing', function(e) {
                this.keydown(e)
            }.bind(this));
            $(window).on('resize.fndtn.clearing', function() {
                this.resize()
            }.bind(this));
            this.settings.init = true;
            return this;
        },swipe_events: function() {
            var self = this;
            $(this.scope).on('touchstart.fndtn.clearing', '.visible-img', function(e) {
                if (!e.touches) {
                    e = e.originalEvent;
                }
                var data = {start_page_x: e.touches[0].pageX,start_page_y: e.touches[0].pageY,start_time: (new Date()).getTime(),delta_x: 0,is_scrolling: undefined};
                $(this).data('swipe-transition', data);
                e.stopPropagation();
            }).on('touchmove.fndtn.clearing', '.visible-img', function(e) {
                if (!e.touches) {
                    e = e.originalEvent;
                }
                if (e.touches.length > 1 || e.scale && e.scale !== 1)
                    return;
                var data = $(this).data('swipe-transition');
                if (typeof data === 'undefined') {
                    data = {};
                }
                data.delta_x = e.touches[0].pageX - data.start_page_x;
                if (typeof data.is_scrolling === 'undefined') {
                    data.is_scrolling = !!(data.is_scrolling || Math.abs(data.delta_x) < Math.abs(e.touches[0].pageY - data.start_page_y));
                }
                if (!data.is_scrolling && !data.active) {
                    e.preventDefault();
                    var direction = (data.delta_x < 0) ? 'next' : 'prev';
                    data.active = true;
                    self.nav(e, direction);
                }
            }).on('touchend.fndtn.clearing', '.visible-img', function(e) {
                $(this).data('swipe-transition', {});
                e.stopPropagation();
            });
        },assemble: function($li) {
            var $el = $li.parent();
            $el.after('<div id="foundationClearingHolder"></div>');
            var holder = $('#foundationClearingHolder'), settings = this.get_data($el), grid = $el.detach(), data = {grid: '<div class="carousel">' + this.outerHTML(grid[0]) + '</div>',viewing: settings.templates.viewing}, wrapper = '<div class="clearing-assembled"><div>' + data.viewing + data.grid + '</div></div>';
            return holder.after(wrapper).remove();
        },open: function($image, current, target) {
            var root = target.closest('.clearing-assembled'), container = root.find('div').first(), visible_image = container.find('.visible-img'), image = visible_image.find('img').not($image);
            if (!this.locked()) {
                image.attr('src', this.load($image)).css('visibility', 'hidden');
                this.loaded(image, function() {
                    image.css('visibility', 'visible');
                    root.addClass('clearing-blackout');
                    container.addClass('clearing-container');
                    visible_image.show();
                    this.fix_height(target).caption(visible_image.find('.clearing-caption'), $image).center(image).shift(current, target, function() {
                        target.siblings().removeClass('visible');
                        target.addClass('visible');
                    });
                }.bind(this));
            }
        },close: function(e, el) {
            e.preventDefault();
            var root = (function(target) {
                if (/blackout/.test(target.selector)) {
                    return target;
                } else {
                    return target.closest('.clearing-blackout');
                }
            }($(el))), container, visible_image;
            if (el === e.target && root) {
                container = root.find('div').first();
                visible_image = container.find('.visible-img');
                this.settings.prev_index = 0;
                root.find('ul[data-clearing]').attr('style', '').closest('.clearing-blackout').removeClass('clearing-blackout');
                container.removeClass('clearing-container');
                visible_image.hide();
            }
            return false;
        },is_open: function(current) {
            return current.parent().prop('style').length > 0;
        },keydown: function(e) {
            var clearing = $('.clearing-blackout').find('ul[data-clearing]');
            if (e.which === 39)
                this.go(clearing, 'next');
            if (e.which === 37)
                this.go(clearing, 'prev');
            if (e.which === 27)
                $('a.clearing-close').trigger('click');
        },nav: function(e, direction) {
            var clearing = $('.clearing-blackout').find('ul[data-clearing]');
            e.preventDefault();
            this.go(clearing, direction);
        },resize: function() {
            var image = $('.clearing-blackout .visible-img').find('img');
            if (image.length) {
                this.center(image);
            }
        },fix_height: function(target) {
            var lis = target.parent().children(), self = this;
            lis.each(function() {
                var li = $(this), image = li.find('img');
                if (li.height() > self.outerHeight(image)) {
                    li.addClass('fix-height');
                }
            }).closest('ul').width(lis.length * 100 + '%');
            return this;
        },update_paddles: function(target) {
            var visible_image = target.closest('.carousel').siblings('.visible-img');
            if (target.next().length > 0) {
                visible_image.find('.clearing-main-next').removeClass('disabled');
            } else {
                visible_image.find('.clearing-main-next').addClass('disabled');
            }
            if (target.prev().length > 0) {
                visible_image.find('.clearing-main-prev').removeClass('disabled');
            } else {
                visible_image.find('.clearing-main-prev').addClass('disabled');
            }
        },center: function(target) {
            if (!this.rtl) {
                target.css({marginLeft: -(this.outerWidth(target) / 2),marginTop: -(this.outerHeight(target) / 2)});
            } else {
                target.css({marginRight: -(this.outerWidth(target) / 2),marginTop: -(this.outerHeight(target) / 2)});
            }
            return this;
        },load: function($image) {
            if ($image[0].nodeName === "A") {
                var href = $image.attr('href');
            } else {
                var href = $image.parent().attr('href');
            }
            this.preload($image);
            if (href)
                return href;
            return $image.attr('src');
        },preload: function($image) {
            this.img($image.closest('li').next()).img($image.closest('li').prev());
        },loaded: function(image, callback) {
            function loaded() {
                callback();
            }
            function bindLoad() {
                this.one('load', loaded);
                if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                    var src = this.attr('src'), param = src.match(/\?/) ? '&' : '?';
                    param += 'random=' + (new Date()).getTime();
                    this.attr('src', src + param);
                }
            }
            if (!image.attr('src')) {
                loaded();
                return;
            }
            if (image[0].complete || image[0].readyState === 4) {
                loaded();
            } else {
                bindLoad.call(image);
            }
        },img: function(img) {
            if (img.length) {
                var new_img = new Image(), new_a = img.find('a');
                if (new_a.length) {
                    new_img.src = new_a.attr('href');
                } else {
                    new_img.src = img.find('img').attr('src');
                }
            }
            return this;
        },caption: function(container, $image) {
            var caption = $image.data('caption');
            if (caption) {
                container.html(caption).show();
            } else {
                container.text('').hide();
            }
            return this;
        },go: function($ul, direction) {
            var current = $ul.find('.visible'), target = current[direction]();
            if (target.length) {
                target.find('img').trigger('click', [current, target]);
            }
        },shift: function(current, target, callback) {
            var clearing = target.parent(), old_index = this.settings.prev_index || target.index(), direction = this.direction(clearing, current, target), left = parseInt(clearing.css('left'), 10), width = this.outerWidth(target), skip_shift;
            if (target.index() !== old_index && !/skip/.test(direction)) {
                if (/left/.test(direction)) {
                    this.lock();
                    clearing.animate({left: left + width}, 300, this.unlock());
                } else if (/right/.test(direction)) {
                    this.lock();
                    clearing.animate({left: left - width}, 300, this.unlock());
                }
            } else if (/skip/.test(direction)) {
                skip_shift = target.index() - this.settings.up_count;
                this.lock();
                if (skip_shift > 0) {
                    clearing.animate({left: -(skip_shift * width)}, 300, this.unlock());
                } else {
                    clearing.animate({left: 0}, 300, this.unlock());
                }
            }
            callback();
        },direction: function($el, current, target) {
            var lis = $el.find('li'), li_width = this.outerWidth(lis) + (this.outerWidth(lis) / 4), up_count = Math.floor(this.outerWidth($('.clearing-container')) / li_width) - 1, target_index = lis.index(target), response;
            this.settings.up_count = up_count;
            if (this.adjacent(this.settings.prev_index, target_index)) {
                if ((target_index > up_count) && target_index > this.settings.prev_index) {
                    response = 'right';
                } else if ((target_index > up_count - 1) && target_index <= this.settings.prev_index) {
                    response = 'left';
                } else {
                    response = false;
                }
            } else {
                response = 'skip';
            }
            this.settings.prev_index = target_index;
            return response;
        },adjacent: function(current_index, target_index) {
            for (var i = target_index + 1; i >= target_index - 1; i--) {
                if (i === current_index)
                    return true;
            }
            return false;
        },lock: function() {
            this.settings.locked = true;
        },unlock: function() {
            this.settings.locked = false;
        },locked: function() {
            return this.settings.locked;
        },outerHTML: function(el) {
            return el.outerHTML || new XMLSerializer().serializeToString(el);
        },off: function() {
            $(this.scope).off('.fndtn.clearing');
            $(window).off('.fndtn.clearing');
            this.remove_data();
            this.settings.init = false;
        },reflow: function() {
            this.init();
        }};
}(Foundation.zj, this, this.document));
(function($, document, undefined) {
    var pluses = /\+/g;
    function raw(s) {
        return s;
    }
    function decoded(s) {
        return decodeURIComponent(s.replace(pluses, ' '));
    }
    var config = $.cookie = function(key, value, options) {
        if (value !== undefined) {
            options = $.extend({}, config.defaults, options);
            if (value === null) {
                options.expires = -1;
            }
            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }
            value = config.json ? JSON.stringify(value) : String(value);
            return (document.cookie = [encodeURIComponent(key), '=', config.raw ? value : encodeURIComponent(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join(''));
        }
        var decode = config.raw ? raw : decoded;
        var cookies = document.cookie.split('; ');
        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split('=');
            if (decode(parts.shift()) === key) {
                var cookie = decode(parts.join('='));
                return config.json ? JSON.parse(cookie) : cookie;
            }
        }
        return null;
    };
    config.defaults = {};
    $.removeCookie = function(key, options) {
        if ($.cookie(key) !== null) {
            $.cookie(key, null, options);
            return true;
        }
        return false;
    };
})(Foundation.zj, document);
;
(function($, window, document, undefined) {
    'use strict';
    Foundation.libs.dropdown = {name: 'dropdown',version: '4.3.2',settings: {activeClass: 'open',is_hover: false,opened: function() {
            },closed: function() {
            }},init: function(scope, method, options) {
            this.scope = scope || this.scope;
            Foundation.inherit(this, 'throttle scrollLeft data_options');
            if (typeof method === 'object') {
                $.extend(true, this.settings, method);
            }
            if (typeof method !== 'string') {
                if (!this.settings.init) {
                    this.events();
                }
                return this.settings.init;
            } else {
                return this[method].call(this, options);
            }
        },events: function() {
            var self = this;
            $(this.scope).on('click.fndtn.dropdown', '[data-dropdown]', function(e) {
                var settings = $.extend({}, self.settings, self.data_options($(this)));
                e.preventDefault();
                if (!settings.is_hover)
                    self.toggle($(this));
            }).on('mouseenter', '[data-dropdown]', function(e) {
                var settings = $.extend({}, self.settings, self.data_options($(this)));
                if (settings.is_hover)
                    self.toggle($(this));
            }).on('mouseleave', '[data-dropdown-content]', function(e) {
                var target = $('[data-dropdown="' + $(this).attr('id') + '"]'), settings = $.extend({}, self.settings, self.data_options(target));
                if (settings.is_hover)
                    self.close.call(self, $(this));
            }).on('opened.fndtn.dropdown', '[data-dropdown-content]', this.settings.opened).on('closed.fndtn.dropdown', '[data-dropdown-content]', this.settings.closed);
            $(document).on('click.fndtn.dropdown', function(e) {
                var parent = $(e.target).closest('[data-dropdown-content]');
                if ($(e.target).data('dropdown') || $(e.target).parent().data('dropdown')) {
                    return;
                }
                if (!($(e.target).data('revealId')) && (parent.length > 0 && ($(e.target).is('[data-dropdown-content]') || $.contains(parent.first()[0], e.target)))) {
                    e.stopPropagation();
                    return;
                }
                self.close.call(self, $('[data-dropdown-content]'));
            });
            $(window).on('resize.fndtn.dropdown', self.throttle(function() {
                self.resize.call(self);
            }, 50)).trigger('resize');
            this.settings.init = true;
        },close: function(dropdown) {
            var self = this;
            dropdown.each(function() {
                if ($(this).hasClass(self.settings.activeClass)) {
                    $(this).css(Foundation.rtl ? 'right' : 'left', '-99999px').removeClass(self.settings.activeClass);
                    $(this).trigger('closed');
                }
            });
        },open: function(dropdown, target) {
            this.css(dropdown.addClass(this.settings.activeClass), target);
            dropdown.trigger('opened');
        },toggle: function(target) {
            var dropdown = $('#' + target.data('dropdown'));
            if (dropdown.length === 0) {
                return;
            }
            this.close.call(this, $('[data-dropdown-content]').not(dropdown));
            if (dropdown.hasClass(this.settings.activeClass)) {
                this.close.call(this, dropdown);
            } else {
                this.close.call(this, $('[data-dropdown-content]'))
                this.open.call(this, dropdown, target);
            }
        },resize: function() {
            var dropdown = $('[data-dropdown-content].open'), target = $("[data-dropdown='" + dropdown.attr('id') + "']");
            if (dropdown.length && target.length) {
                this.css(dropdown, target);
            }
        },css: function(dropdown, target) {
            var offset_parent = dropdown.offsetParent();
            var position = target.offset();
            position.top -= offset_parent.offset().top;
            position.left -= offset_parent.offset().left;
            if (this.small()) {
                dropdown.css({position: 'absolute',width: '95%','max-width': 'none',top: position.top + this.outerHeight(target)});
                dropdown.css(Foundation.rtl ? 'right' : 'left', '2.5%');
            } else {
                if (!Foundation.rtl && $(window).width() > this.outerWidth(dropdown) + target.offset().left && !this.data_options(target).align_right) {
                    var left = position.left;
                    if (dropdown.hasClass('right')) {
                        dropdown.removeClass('right');
                    }
                } else {
                    if (!dropdown.hasClass('right')) {
                        dropdown.addClass('right');
                    }
                    var left = position.left - (this.outerWidth(dropdown) - this.outerWidth(target));
                }
                dropdown.attr('style', '').css({position: 'absolute',top: position.top + this.outerHeight(target),left: left});
            }
            return dropdown;
        },small: function() {
            return $(window).width() < 768 || $('html').hasClass('lt-ie9');
        },off: function() {
            $(this.scope).off('.fndtn.dropdown');
            $('html, body').off('.fndtn.dropdown');
            $(window).off('.fndtn.dropdown');
            $('[data-dropdown-content]').off('.fndtn.dropdown');
            this.settings.init = false;
        },reflow: function() {
        }};
}(Foundation.zj, this, this.document));
(function($, window, document, undefined) {
    'use strict';
    Foundation.libs.forms = {name: 'forms',version: '4.3.2',cache: {},settings: {disable_class: 'no-custom',last_combo: null},init: function(scope, method, options) {
            if (typeof method === 'object') {
                $.extend(true, this.settings, method);
            }
            if (typeof method !== 'string') {
                if (!this.settings.init) {
                    this.events();
                }
                this.assemble();
                return this.settings.init;
            } else {
                return this[method].call(this, options);
            }
        },assemble: function() {
            var forms = this;
            $('form.custom input[type="radio"],[type="checkbox"]', $(this.scope)).not('[data-customforms="disabled"]').not('.' + this.settings.disable_class).each(function(idx, sel) {
                forms.set_custom_markup(sel);
            }).change(function() {
                forms.set_custom_markup(this);
            });
            $('form.custom select', $(this.scope)).not('[data-customforms="disabled"]').not('.' + this.settings.disable_class).not('[multiple=multiple]').each(this.append_custom_select);
        },events: function() {
            var self = this;
            $(this.scope).on('click.fndtn.forms', 'form.custom span.custom.checkbox', function(e) {
                e.preventDefault();
                e.stopPropagation();
                self.toggle_checkbox($(this));
            }).on('click.fndtn.forms', 'form.custom span.custom.radio', function(e) {
                e.preventDefault();
                e.stopPropagation();
                self.toggle_radio($(this));
            }).on('change.fndtn.forms', 'form.custom select', function(e, force_refresh) {
                if ($(this).is('[data-customforms="disabled"]'))
                    return;
                self.refresh_custom_select($(this), force_refresh);
            }).on('click.fndtn.forms', 'form.custom label', function(e) {
                if ($(e.target).is('label')) {
                    var $associatedElement = $('#' + self.escape($(this).attr('for'))).not('[data-customforms="disabled"]'), $customCheckbox, $customRadio;
                    if ($associatedElement.length !== 0) {
                        if ($associatedElement.attr('type') === 'checkbox') {
                            e.preventDefault();
                            $customCheckbox = $(this).find('span.custom.checkbox');
                            if ($customCheckbox.length === 0) {
                                $customCheckbox = $associatedElement.add(this).siblings('span.custom.checkbox').first();
                            }
                            self.toggle_checkbox($customCheckbox);
                        } else if ($associatedElement.attr('type') === 'radio') {
                            e.preventDefault();
                            $customRadio = $(this).find('span.custom.radio');
                            if ($customRadio.length === 0) {
                                $customRadio = $associatedElement.add(this).siblings('span.custom.radio').first();
                            }
                            self.toggle_radio($customRadio);
                        }
                    }
                }
            }).on('mousedown.fndtn.forms', 'form.custom div.custom.dropdown', function() {
                return false;
            }).on('click.fndtn.forms', 'form.custom div.custom.dropdown a.current, form.custom div.custom.dropdown a.selector', function(e) {
                var $this = $(this), $dropdown = $this.closest('div.custom.dropdown'), $select = getFirstPrevSibling($dropdown, 'select');
                if (!$dropdown.hasClass('open'))
                    $(self.scope).trigger('click');
                e.preventDefault();
                if (false === $select.is(':disabled')) {
                    $dropdown.toggleClass('open');
                    if ($dropdown.hasClass('open')) {
                        $(self.scope).on('click.fndtn.forms.customdropdown', function() {
                            $dropdown.removeClass('open');
                            $(self.scope).off('.fndtn.forms.customdropdown');
                        });
                    } else {
                        $(self.scope).on('.fndtn.forms.customdropdown');
                    }
                    return false;
                }
            }).on('click.fndtn.forms touchend.fndtn.forms', 'form.custom div.custom.dropdown li', function(e) {
                var $this = $(this), $customDropdown = $this.closest('div.custom.dropdown'), $select = getFirstPrevSibling($customDropdown, 'select'), selectedIndex = 0;
                e.preventDefault();
                e.stopPropagation();
                if (!$(this).hasClass('disabled')) {
                    $('div.dropdown').not($customDropdown).removeClass('open');
                    var $oldThis = $this.closest('ul').find('li.selected');
                    $oldThis.removeClass('selected');
                    $this.addClass('selected');
                    $customDropdown.removeClass('open').find('a.current').text($this.text());
                    $this.closest('ul').find('li').each(function(index) {
                        if ($this[0] === this) {
                            selectedIndex = index;
                        }
                    });
                    $select[0].selectedIndex = selectedIndex;
                    $select.data('prevalue', $oldThis.html());
                    if (typeof (document.createEvent) != 'undefined') {
                        var event = document.createEvent('HTMLEvents');
                        event.initEvent('change', true, true);
                        $select[0].dispatchEvent(event);
                    } else {
                        $select[0].fireEvent('onchange');
                    }
                }
            });
            $(window).on('keydown', function(e) {
                var focus = document.activeElement, self = Foundation.libs.forms, dropdown = $('.custom.dropdown'), select = getFirstPrevSibling(dropdown, 'select'), inputs = $('input,select,textarea,button');
                if (dropdown.length > 0 && dropdown.hasClass('open')) {
                    e.preventDefault();
                    if (e.which === 9) {
                        $(inputs[$(inputs).index(select) + 1]).focus();
                        dropdown.removeClass('open');
                    }
                    if (e.which === 13) {
                        dropdown.find('li.selected').trigger('click');
                    }
                    if (e.which === 27) {
                        dropdown.removeClass('open');
                    }
                    if (e.which >= 65 && e.which <= 90) {
                        var next = self.go_to(dropdown, e.which), current = dropdown.find('li.selected');
                        if (next) {
                            current.removeClass('selected');
                            self.scrollTo(next.addClass('selected'), 300);
                        }
                    }
                    if (e.which === 38) {
                        var current = dropdown.find('li.selected'), prev = current.prev(':not(.disabled)');
                        if (prev.length > 0) {
                            prev.parent()[0].scrollTop = prev.parent().scrollTop() - self.outerHeight(prev);
                            current.removeClass('selected');
                            prev.addClass('selected');
                        }
                    } else if (e.which === 40) {
                        var current = dropdown.find('li.selected'), next = current.next(':not(.disabled)');
                        if (next.length > 0) {
                            next.parent()[0].scrollTop = next.parent().scrollTop() + self.outerHeight(next);
                            current.removeClass('selected');
                            next.addClass('selected');
                        }
                    }
                }
            });
            $(window).on('keyup', function(e) {
                var focus = document.activeElement, dropdown = $('.custom.dropdown');
                if (focus === dropdown.find('.current')[0]) {
                    dropdown.find('.selector').focus().click();
                }
            });
            this.settings.init = true;
        },go_to: function(dropdown, character) {
            var lis = dropdown.find('li'), count = lis.length;
            if (count > 0) {
                for (var i = 0; i < count; i++) {
                    var first_letter = lis.eq(i).text().charAt(0).toLowerCase();
                    if (first_letter === String.fromCharCode(character).toLowerCase())
                        return lis.eq(i);
                }
            }
        },scrollTo: function(el, duration) {
            if (duration < 0)
                return;
            var parent = el.parent();
            var li_height = this.outerHeight(el);
            var difference = (li_height * (el.index())) - parent.scrollTop();
            var perTick = difference / duration * 10;
            this.scrollToTimerCache = setTimeout(function() {
                if (!isNaN(parseInt(perTick, 10))) {
                    parent[0].scrollTop = parent.scrollTop() + perTick;
                    this.scrollTo(el, duration - 10);
                }
            }.bind(this), 10);
        },set_custom_markup: function(sel) {
            var $this = $(sel), type = $this.attr('type'), $span = $this.next('span.custom.' + type);
            if (!$this.parent().hasClass('switch')) {
                $this.addClass('hidden-field');
            }
            if ($span.length === 0) {
                $span = $('<span class="custom ' + type + '"></span>').insertAfter($this);
            }
            $span.toggleClass('checked', $this.is(':checked'));
            $span.toggleClass('disabled', $this.is(':disabled'));
        },append_custom_select: function(idx, sel) {
            var self = Foundation.libs.forms, $this = $(sel), $customSelect = $this.next('div.custom.dropdown'), $customList = $customSelect.find('ul'), $selectCurrent = $customSelect.find(".current"), $selector = $customSelect.find(".selector"), $options = $this.find('option'), $selectedOption = $options.filter(':selected'), copyClasses = $this.attr('class') ? $this.attr('class').split(' ') : [], maxWidth = 0, liHtml = '', $listItems, $currentSelect = false;
            if ($customSelect.length === 0) {
                var customSelectSize = $this.hasClass('small') ? 'small' : $this.hasClass('medium') ? 'medium' : $this.hasClass('large') ? 'large' : $this.hasClass('expand') ? 'expand' : '';
                $customSelect = $('<div class="' + ['custom', 'dropdown', customSelectSize].concat(copyClasses).filter(function(item, idx, arr) {
                    if (item === '')
                        return false;
                    return arr.indexOf(item) === idx;
                }).join(' ') + '"><a href="#" class="selector"></a><ul /></div>');
                $selector = $customSelect.find(".selector");
                $customList = $customSelect.find("ul");
                liHtml = $options.map(function() {
                    var copyClasses = $(this).attr('class') ? $(this).attr('class') : '';
                    return "<li class='" + copyClasses + "'>" + $(this).html() + "</li>";
                }).get().join('');
                $customList.append(liHtml);
                $currentSelect = $customSelect.prepend('<a href="#" class="current">' + ($selectedOption.html() || '') + '</a>').find(".current");
                $this.after($customSelect).addClass('hidden-field');
            } else {
                liHtml = $options.map(function() {
                    return "<li>" + $(this).html() + "</li>";
                }).get().join('');
                $customList.html('').append(liHtml);
            }
            self.assign_id($this, $customSelect);
            $customSelect.toggleClass('disabled', $this.is(':disabled'));
            $listItems = $customList.find('li');
            self.cache[$customSelect.data('id')] = $listItems.length;
            $options.each(function(index) {
                if (this.selected) {
                    $listItems.eq(index).addClass('selected');
                    if ($currentSelect) {
                        $currentSelect.html($(this).html());
                    }
                }
                if ($(this).is(':disabled')) {
                    $listItems.eq(index).addClass('disabled');
                }
            });
            if (!$customSelect.is('.small, .medium, .large, .expand')) {
                $customSelect.addClass('open');
                var self = Foundation.libs.forms;
                self.hidden_fix.adjust($customList);
                maxWidth = (self.outerWidth($listItems) > maxWidth) ? self.outerWidth($listItems) : maxWidth;
                Foundation.libs.forms.hidden_fix.reset();
                $customSelect.removeClass('open');
            }
        },assign_id: function($select, $customSelect) {
            var id = [+new Date(), Foundation.random_str(5)].join('-');
            $select.attr('data-id', id);
            $customSelect.attr('data-id', id);
        },refresh_custom_select: function($select, force_refresh) {
            var self = this;
            var maxWidth = 0, $customSelect = $select.next(), $options = $select.find('option'), $customList = $customSelect.find('ul'), $listItems = $customSelect.find('li');
            if ($options.length !== this.cache[$customSelect.data('id')] || force_refresh) {
                $customList.html('');
                var customSelectHtml = '';
                $options.each(function() {
                    var $this = $(this), thisHtml = $this.html(), thisSelected = this.selected;
                    customSelectHtml += '<li class="' + (thisSelected ? ' selected ' : '') + ($this.is(':disabled') ? ' disabled ' : '') + '">' + thisHtml + '</li>';
                    if (thisSelected) {
                        $customSelect.find('.current').html(thisHtml);
                    }
                });
                $customList.html(customSelectHtml);
                $customSelect.removeAttr('style');
                $customList.removeAttr('style');
                $customSelect.find('li').each(function() {
                    $customSelect.addClass('open');
                    if (self.outerWidth($(this)) > maxWidth) {
                        maxWidth = self.outerWidth($(this));
                    }
                    $customSelect.removeClass('open');
                });
                $listItems = $customSelect.find('li');
                this.cache[$customSelect.data('id')] = $listItems.length;
            }
        },refresh_custom_selection: function($select) {
            var selectedValue = $('option:selected', $select).text();
            $('a.current', $select.next()).text(selectedValue);
        },toggle_checkbox: function($element) {
            var $input = $element.prev(), input = $input[0];
            if (false === $input.is(':disabled')) {
                input.checked = ((input.checked) ? false : true);
                $element.toggleClass('checked');
                $input.trigger('change');
            }
        },toggle_radio: function($element) {
            var $input = $element.prev(), $form = $input.closest('form.custom'), input = $input[0];
            if (false === $input.is(':disabled')) {
                $form.find('input[type="radio"][name="' + this.escape($input.attr('name')) + '"]').next().not($element).removeClass('checked');
                if (!$element.hasClass('checked')) {
                    $element.toggleClass('checked');
                }
                input.checked = $element.hasClass('checked');
                $input.trigger('change');
            }
        },escape: function(text) {
            if (!text)
                return '';
            return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
        },hidden_fix: {tmp: [],hidden: null,adjust: function($child) {
                var _self = this;
                _self.hidden = $child.parents();
                _self.hidden = _self.hidden.add($child).filter(":hidden");
                _self.hidden.each(function() {
                    var $elem = $(this);
                    _self.tmp.push($elem.attr('style'));
                    $elem.css({'visibility': 'hidden','display': 'block'});
                });
            },reset: function() {
                var _self = this;
                _self.hidden.each(function(i) {
                    var $elem = $(this), _tmp = _self.tmp[i];
                    if (_tmp === undefined)
                        $elem.removeAttr('style');
                    else
                        $elem.attr('style', _tmp);
                });
                _self.tmp = [];
                _self.hidden = null;
            }},off: function() {
            $(this.scope).off('.fndtn.forms');
        },reflow: function() {
        }};
    var getFirstPrevSibling = function($el, selector) {
        var $el = $el.prev();
        while ($el.length) {
            if ($el.is(selector))
                return $el;
            $el = $el.prev();
        }
        return $();
    };
}(Foundation.zj, this, this.document));
(function($, window, document, undefined) {
    'use strict';
    var Modernizr = Modernizr || false;
    Foundation.libs.joyride = {name: 'joyride',version: '4.3.2',defaults: {expose: false,modal: false,tipLocation: 'bottom',nubPosition: 'auto',scrollSpeed: 300,timer: 0,startTimerOnClick: true,startOffset: 0,nextButton: true,tipAnimation: 'fade',pauseAfter: [],exposed: [],tipAnimationFadeSpeed: 300,cookieMonster: false,cookieName: 'joyride',cookieDomain: false,cookieExpires: 365,tipContainer: 'body',postRideCallback: function() {
            },postStepCallback: function() {
            },preStepCallback: function() {
            },preRideCallback: function() {
            },postExposeCallback: function() {
            },template: {link: '<a href="#close" class="joyride-close-tip">&times;</a>',timer: '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',tip: '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',wrapper: '<div class="joyride-content-wrapper"></div>',button: '<a href="#" class="small button joyride-next-tip"></a>',modal: '<div class="joyride-modal-bg"></div>',expose: '<div class="joyride-expose-wrapper"></div>',exposeCover: '<div class="joyride-expose-cover"></div>'},exposeAddClass: ''},settings: {},init: function(scope, method, options) {
            this.scope = scope || this.scope;
            Foundation.inherit(this, 'throttle data_options scrollTo scrollLeft delay');
            if (typeof method === 'object') {
                $.extend(true, this.settings, this.defaults, method);
            } else {
                $.extend(true, this.settings, this.defaults, options);
            }
            if (typeof method !== 'string') {
                if (!this.settings.init)
                    this.events();
                return this.settings.init;
            } else {
                return this[method].call(this, options);
            }
        },events: function() {
            var self = this;
            $(this.scope).on('click.joyride', '.joyride-next-tip, .joyride-modal-bg', function(e) {
                e.preventDefault();
                if (this.settings.$li.next().length < 1) {
                    this.end();
                } else if (this.settings.timer > 0) {
                    clearTimeout(this.settings.automate);
                    this.hide();
                    this.show();
                    this.startTimer();
                } else {
                    this.hide();
                    this.show();
                }
            }.bind(this)).on('click.joyride', '.joyride-close-tip', function(e) {
                e.preventDefault();
                this.end();
            }.bind(this));
            $(window).on('resize.fndtn.joyride', self.throttle(function() {
                if ($('[data-joyride]').length > 0 && self.settings.$next_tip) {
                    if (self.settings.exposed.length > 0) {
                        var $els = $(self.settings.exposed);
                        $els.each(function() {
                            var $this = $(this);
                            self.un_expose($this);
                            self.expose($this);
                        });
                    }
                    if (self.is_phone()) {
                        self.pos_phone();
                    } else {
                        self.pos_default(false, true);
                    }
                }
            }, 100));
            this.settings.init = true;
        },start: function() {
            var self = this, $this = $(this.scope).find('[data-joyride]'), integer_settings = ['timer', 'scrollSpeed', 'startOffset', 'tipAnimationFadeSpeed', 'cookieExpires'], int_settings_count = integer_settings.length;
            if (!this.settings.init)
                this.events();
            this.settings.$content_el = $this;
            this.settings.$body = $(this.settings.tipContainer);
            this.settings.body_offset = $(this.settings.tipContainer).position();
            this.settings.$tip_content = this.settings.$content_el.find('> li');
            this.settings.paused = false;
            this.settings.attempts = 0;
            this.settings.tipLocationPatterns = {top: ['bottom'],bottom: [],left: ['right', 'top', 'bottom'],right: ['left', 'top', 'bottom']};
            if (typeof $.cookie !== 'function') {
                this.settings.cookieMonster = false;
            }
            if (!this.settings.cookieMonster || this.settings.cookieMonster && $.cookie(this.settings.cookieName) === null) {
                this.settings.$tip_content.each(function(index) {
                    var $this = $(this);
                    $.extend(true, self.settings, self.data_options($this));
                    for (var i = int_settings_count - 1; i >= 0; i--) {
                        self.settings[integer_settings[i]] = parseInt(self.settings[integer_settings[i]], 10);
                    }
                    self.create({$li: $this,index: index});
                });
                if (!this.settings.startTimerOnClick && this.settings.timer > 0) {
                    this.show('init');
                    this.startTimer();
                } else {
                    this.show('init');
                }
            }
        },resume: function() {
            this.set_li();
            this.show();
        },tip_template: function(opts) {
            var $blank, content;
            opts.tip_class = opts.tip_class || '';
            $blank = $(this.settings.template.tip).addClass(opts.tip_class);
            content = $.trim($(opts.li).html()) + this.button_text(opts.button_text) + this.settings.template.link + this.timer_instance(opts.index);
            $blank.append($(this.settings.template.wrapper));
            $blank.first().attr('data-index', opts.index);
            $('.joyride-content-wrapper', $blank).append(content);
            return $blank[0];
        },timer_instance: function(index) {
            var txt;
            if ((index === 0 && this.settings.startTimerOnClick && this.settings.timer > 0) || this.settings.timer === 0) {
                txt = '';
            } else {
                txt = this.outerHTML($(this.settings.template.timer)[0]);
            }
            return txt;
        },button_text: function(txt) {
            if (this.settings.nextButton) {
                txt = $.trim(txt) || 'Next';
                txt = this.outerHTML($(this.settings.template.button).append(txt)[0]);
            } else {
                txt = '';
            }
            return txt;
        },create: function(opts) {
            var buttonText = opts.$li.attr('data-button') || opts.$li.attr('data-text'), tipClass = opts.$li.attr('class'), $tip_content = $(this.tip_template({tip_class: tipClass,index: opts.index,button_text: buttonText,li: opts.$li}));
            $(this.settings.tipContainer).append($tip_content);
        },show: function(init) {
            var $timer = null;
            if (this.settings.$li === undefined || ($.inArray(this.settings.$li.index(), this.settings.pauseAfter) === -1)) {
                if (this.settings.paused) {
                    this.settings.paused = false;
                } else {
                    this.set_li(init);
                }
                this.settings.attempts = 0;
                if (this.settings.$li.length && this.settings.$target.length > 0) {
                    if (init) {
                        this.settings.preRideCallback(this.settings.$li.index(), this.settings.$next_tip);
                        if (this.settings.modal) {
                            this.show_modal();
                        }
                    }
                    this.settings.preStepCallback(this.settings.$li.index(), this.settings.$next_tip);
                    if (this.settings.modal && this.settings.expose) {
                        this.expose();
                    }
                    this.settings.tipSettings = $.extend(this.settings, this.data_options(this.settings.$li));
                    this.settings.timer = parseInt(this.settings.timer, 10);
                    this.settings.tipSettings.tipLocationPattern = this.settings.tipLocationPatterns[this.settings.tipSettings.tipLocation];
                    if (!/body/i.test(this.settings.$target.selector)) {
                        this.scroll_to();
                    }
                    if (this.is_phone()) {
                        this.pos_phone(true);
                    } else {
                        this.pos_default(true);
                    }
                    $timer = this.settings.$next_tip.find('.joyride-timer-indicator');
                    if (/pop/i.test(this.settings.tipAnimation)) {
                        $timer.width(0);
                        if (this.settings.timer > 0) {
                            this.settings.$next_tip.show();
                            this.delay(function() {
                                $timer.animate({width: $timer.parent().width()}, this.settings.timer, 'linear');
                            }.bind(this), this.settings.tipAnimationFadeSpeed);
                        } else {
                            this.settings.$next_tip.show();
                        }
                    } else if (/fade/i.test(this.settings.tipAnimation)) {
                        $timer.width(0);
                        if (this.settings.timer > 0) {
                            this.settings.$next_tip.fadeIn(this.settings.tipAnimationFadeSpeed).show();
                            this.delay(function() {
                                $timer.animate({width: $timer.parent().width()}, this.settings.timer, 'linear');
                            }.bind(this), this.settings.tipAnimationFadeSpeed);
                        } else {
                            this.settings.$next_tip.fadeIn(this.settings.tipAnimationFadeSpeed);
                        }
                    }
                    this.settings.$current_tip = this.settings.$next_tip;
                } else if (this.settings.$li && this.settings.$target.length < 1) {
                    this.show();
                } else {
                    this.end();
                }
            } else {
                this.settings.paused = true;
            }
        },is_phone: function() {
            if (Modernizr) {
                return Modernizr.mq('only screen and (max-width: 767px)') || $('.lt-ie9').length > 0;
            }
            return ($(window).width() < 767);
        },hide: function() {
            if (this.settings.modal && this.settings.expose) {
                this.un_expose();
            }
            if (!this.settings.modal) {
                $('.joyride-modal-bg').hide();
            }
            this.settings.$current_tip.css('visibility', 'hidden');
            setTimeout($.proxy(function() {
                this.hide();
                this.css('visibility', 'visible');
            }, this.settings.$current_tip), 0);
            this.settings.postStepCallback(this.settings.$li.index(), this.settings.$current_tip);
        },set_li: function(init) {
            if (init) {
                this.settings.$li = this.settings.$tip_content.eq(this.settings.startOffset);
                this.set_next_tip();
                this.settings.$current_tip = this.settings.$next_tip;
            } else {
                this.settings.$li = this.settings.$li.next();
                this.set_next_tip();
            }
            this.set_target();
        },set_next_tip: function() {
            this.settings.$next_tip = $(".joyride-tip-guide[data-index='" + this.settings.$li.index() + "']");
            this.settings.$next_tip.data('closed', '');
        },set_target: function() {
            var cl = this.settings.$li.attr('data-class'), id = this.settings.$li.attr('data-id'), $sel = function() {
                if (id) {
                    return $(document.getElementById(id));
                } else if (cl) {
                    return $('.' + cl).first();
                } else {
                    return $('body');
                }
            };
            this.settings.$target = $sel();
        },scroll_to: function() {
            var window_half, tipOffset;
            window_half = $(window).height() / 2;
            tipOffset = Math.ceil(this.settings.$target.offset().top - window_half + this.outerHeight(this.settings.$next_tip));
            if (tipOffset > 0) {
                this.scrollTo($('html, body'), tipOffset, this.settings.scrollSpeed);
            }
        },paused: function() {
            return ($.inArray((this.settings.$li.index() + 1), this.settings.pauseAfter) === -1);
        },restart: function() {
            this.hide();
            this.settings.$li = undefined;
            this.show('init');
        },pos_default: function(init, resizing) {
            var half_fold = Math.ceil($(window).height() / 2), tip_position = this.settings.$next_tip.offset(), $nub = this.settings.$next_tip.find('.joyride-nub'), nub_width = Math.ceil(this.outerWidth($nub) / 2), nub_height = Math.ceil(this.outerHeight($nub) / 2), toggle = init || false;
            if (toggle) {
                this.settings.$next_tip.css('visibility', 'hidden');
                this.settings.$next_tip.show();
            }
            if (typeof resizing === 'undefined') {
                resizing = false;
            }
            if (!/body/i.test(this.settings.$target.selector)) {
                if (this.bottom()) {
                    var leftOffset = this.settings.$target.offset().left;
                    if (Foundation.rtl) {
                        leftOffset = this.settings.$target.offset().width - this.settings.$next_tip.width() + leftOffset;
                    }
                    this.settings.$next_tip.css({top: (this.settings.$target.offset().top + nub_height + this.outerHeight(this.settings.$target)),left: leftOffset});
                    this.nub_position($nub, this.settings.tipSettings.nubPosition, 'top');
                } else if (this.top()) {
                    var leftOffset = this.settings.$target.offset().left;
                    if (Foundation.rtl) {
                        leftOffset = this.settings.$target.offset().width - this.settings.$next_tip.width() + leftOffset;
                    }
                    this.settings.$next_tip.css({top: (this.settings.$target.offset().top - this.outerHeight(this.settings.$next_tip) - nub_height),left: leftOffset});
                    this.nub_position($nub, this.settings.tipSettings.nubPosition, 'bottom');
                } else if (this.right()) {
                    this.settings.$next_tip.css({top: this.settings.$target.offset().top,left: (this.outerWidth(this.settings.$target) + this.settings.$target.offset().left + nub_width)});
                    this.nub_position($nub, this.settings.tipSettings.nubPosition, 'left');
                } else if (this.left()) {
                    this.settings.$next_tip.css({top: this.settings.$target.offset().top,left: (this.settings.$target.offset().left - this.outerWidth(this.settings.$next_tip) - nub_width)});
                    this.nub_position($nub, this.settings.tipSettings.nubPosition, 'right');
                }
                if (!this.visible(this.corners(this.settings.$next_tip)) && this.settings.attempts < this.settings.tipSettings.tipLocationPattern.length) {
                    $nub.removeClass('bottom').removeClass('top').removeClass('right').removeClass('left');
                    this.settings.tipSettings.tipLocation = this.settings.tipSettings.tipLocationPattern[this.settings.attempts];
                    this.settings.attempts++;
                    this.pos_default();
                }
            } else if (this.settings.$li.length) {
                this.pos_modal($nub);
            }
            if (toggle) {
                this.settings.$next_tip.hide();
                this.settings.$next_tip.css('visibility', 'visible');
            }
        },pos_phone: function(init) {
            var tip_height = this.outerHeight(this.settings.$next_tip), tip_offset = this.settings.$next_tip.offset(), target_height = this.outerHeight(this.settings.$target), $nub = $('.joyride-nub', this.settings.$next_tip), nub_height = Math.ceil(this.outerHeight($nub) / 2), toggle = init || false;
            $nub.removeClass('bottom').removeClass('top').removeClass('right').removeClass('left');
            if (toggle) {
                this.settings.$next_tip.css('visibility', 'hidden');
                this.settings.$next_tip.show();
            }
            if (!/body/i.test(this.settings.$target.selector)) {
                if (this.top()) {
                    this.settings.$next_tip.offset({top: this.settings.$target.offset().top - tip_height - nub_height});
                    $nub.addClass('bottom');
                } else {
                    this.settings.$next_tip.offset({top: this.settings.$target.offset().top + target_height + nub_height});
                    $nub.addClass('top');
                }
            } else if (this.settings.$li.length) {
                this.pos_modal($nub);
            }
            if (toggle) {
                this.settings.$next_tip.hide();
                this.settings.$next_tip.css('visibility', 'visible');
            }
        },pos_modal: function($nub) {
            this.center();
            $nub.hide();
            this.show_modal();
        },show_modal: function() {
            if (!this.settings.$next_tip.data('closed')) {
                var joyridemodalbg = $('.joyride-modal-bg');
                if (joyridemodalbg.length < 1) {
                    $('body').append(this.settings.template.modal).show();
                }
                if (/pop/i.test(this.settings.tipAnimation)) {
                    joyridemodalbg.show();
                } else {
                    joyridemodalbg.fadeIn(this.settings.tipAnimationFadeSpeed);
                }
            }
        },expose: function() {
            var expose, exposeCover, el, origCSS, origClasses, randId = 'expose-' + Math.floor(Math.random() * 10000);
            if (arguments.length > 0 && arguments[0] instanceof $) {
                el = arguments[0];
            } else if (this.settings.$target && !/body/i.test(this.settings.$target.selector)) {
                el = this.settings.$target;
            } else {
                return false;
            }
            if (el.length < 1) {
                if (window.console) {
                    console.error('element not valid', el);
                }
                return false;
            }
            expose = $(this.settings.template.expose);
            this.settings.$body.append(expose);
            expose.css({top: el.offset().top,left: el.offset().left,width: this.outerWidth(el, true),height: this.outerHeight(el, true)});
            exposeCover = $(this.settings.template.exposeCover);
            origCSS = {zIndex: el.css('z-index'),position: el.css('position')};
            origClasses = el.attr('class') == null ? '' : el.attr('class');
            el.css('z-index', parseInt(expose.css('z-index')) + 1);
            if (origCSS.position == 'static') {
                el.css('position', 'relative');
            }
            el.data('expose-css', origCSS);
            el.data('orig-class', origClasses);
            el.attr('class', origClasses + ' ' + this.settings.exposeAddClass);
            exposeCover.css({top: el.offset().top,left: el.offset().left,width: this.outerWidth(el, true),height: this.outerHeight(el, true)});
            this.settings.$body.append(exposeCover);
            expose.addClass(randId);
            exposeCover.addClass(randId);
            el.data('expose', randId);
            this.settings.postExposeCallback(this.settings.$li.index(), this.settings.$next_tip, el);
            this.add_exposed(el);
        },un_expose: function() {
            var exposeId, el, expose, origCSS, origClasses, clearAll = false;
            if (arguments.length > 0 && arguments[0] instanceof $) {
                el = arguments[0];
            } else if (this.settings.$target && !/body/i.test(this.settings.$target.selector)) {
                el = this.settings.$target;
            } else {
                return false;
            }
            if (el.length < 1) {
                if (window.console) {
                    console.error('element not valid', el);
                }
                return false;
            }
            exposeId = el.data('expose');
            expose = $('.' + exposeId);
            if (arguments.length > 1) {
                clearAll = arguments[1];
            }
            if (clearAll === true) {
                $('.joyride-expose-wrapper,.joyride-expose-cover').remove();
            } else {
                expose.remove();
            }
            origCSS = el.data('expose-css');
            if (origCSS.zIndex == 'auto') {
                el.css('z-index', '');
            } else {
                el.css('z-index', origCSS.zIndex);
            }
            if (origCSS.position != el.css('position')) {
                if (origCSS.position == 'static') {
                    el.css('position', '');
                } else {
                    el.css('position', origCSS.position);
                }
            }
            origClasses = el.data('orig-class');
            el.attr('class', origClasses);
            el.removeData('orig-classes');
            el.removeData('expose');
            el.removeData('expose-z-index');
            this.remove_exposed(el);
        },add_exposed: function(el) {
            this.settings.exposed = this.settings.exposed || [];
            if (el instanceof $ || typeof el === 'object') {
                this.settings.exposed.push(el[0]);
            } else if (typeof el == 'string') {
                this.settings.exposed.push(el);
            }
        },remove_exposed: function(el) {
            var search, count;
            if (el instanceof $) {
                search = el[0]
            } else if (typeof el == 'string') {
                search = el;
            }
            this.settings.exposed = this.settings.exposed || [];
            count = this.settings.exposed.length;
            for (var i = 0; i < count; i++) {
                if (this.settings.exposed[i] == search) {
                    this.settings.exposed.splice(i, 1);
                    return;
                }
            }
        },center: function() {
            var $w = $(window);
            this.settings.$next_tip.css({top: ((($w.height() - this.outerHeight(this.settings.$next_tip)) / 2) + $w.scrollTop()),left: ((($w.width() - this.outerWidth(this.settings.$next_tip)) / 2) + this.scrollLeft($w))});
            return true;
        },bottom: function() {
            return /bottom/i.test(this.settings.tipSettings.tipLocation);
        },top: function() {
            return /top/i.test(this.settings.tipSettings.tipLocation);
        },right: function() {
            return /right/i.test(this.settings.tipSettings.tipLocation);
        },left: function() {
            return /left/i.test(this.settings.tipSettings.tipLocation);
        },corners: function(el) {
            var w = $(window), window_half = w.height() / 2, tipOffset = Math.ceil(this.settings.$target.offset().top - window_half + this.settings.$next_tip.outerHeight()), right = w.width() + this.scrollLeft(w), offsetBottom = w.height() + tipOffset, bottom = w.height() + w.scrollTop(), top = w.scrollTop();
            if (tipOffset < top) {
                if (tipOffset < 0) {
                    top = 0;
                } else {
                    top = tipOffset;
                }
            }
            if (offsetBottom > bottom) {
                bottom = offsetBottom;
            }
            return [el.offset().top < top, right < el.offset().left + el.outerWidth(), bottom < el.offset().top + el.outerHeight(), this.scrollLeft(w) > el.offset().left];
        },visible: function(hidden_corners) {
            var i = hidden_corners.length;
            while (i--) {
                if (hidden_corners[i])
                    return false;
            }
            return true;
        },nub_position: function(nub, pos, def) {
            if (pos === 'auto') {
                nub.addClass(def);
            } else {
                nub.addClass(pos);
            }
        },startTimer: function() {
            if (this.settings.$li.length) {
                this.settings.automate = setTimeout(function() {
                    this.hide();
                    this.show();
                    this.startTimer();
                }.bind(this), this.settings.timer);
            } else {
                clearTimeout(this.settings.automate);
            }
        },end: function() {
            if (this.settings.cookieMonster) {
                $.cookie(this.settings.cookieName, 'ridden', {expires: this.settings.cookieExpires,domain: this.settings.cookieDomain});
            }
            if (this.settings.timer > 0) {
                clearTimeout(this.settings.automate);
            }
            if (this.settings.modal && this.settings.expose) {
                this.un_expose();
            }
            this.settings.$next_tip.data('closed', true);
            $('.joyride-modal-bg').hide();
            this.settings.$current_tip.hide();
            this.settings.postStepCallback(this.settings.$li.index(), this.settings.$current_tip);
            this.settings.postRideCallback(this.settings.$li.index(), this.settings.$current_tip);
            $('.joyride-tip-guide').remove();
        },outerHTML: function(el) {
            return el.outerHTML || new XMLSerializer().serializeToString(el);
        },off: function() {
            $(this.scope).off('.joyride');
            $(window).off('.joyride');
            $('.joyride-close-tip, .joyride-next-tip, .joyride-modal-bg').off('.joyride');
            $('.joyride-tip-guide, .joyride-modal-bg').remove();
            clearTimeout(this.settings.automate);
            this.settings = {};
        },reflow: function() {
        }};
}(Foundation.zj, this, this.document));
;
(function($, window, document, undefined) {
    'use strict';
    Foundation.libs.magellan = {name: 'magellan',version: '4.3.2',settings: {activeClass: 'active',threshold: 0},init: function(scope, method, options) {
            this.scope = scope || this.scope;
            Foundation.inherit(this, 'data_options');
            if (typeof method === 'object') {
                $.extend(true, this.settings, method);
            }
            if (typeof method !== 'string') {
                if (!this.settings.init) {
                    this.fixed_magellan = $("[data-magellan-expedition]");
                    this.set_threshold();
                    this.last_destination = $('[data-magellan-destination]').last();
                    this.events();
                }
                return this.settings.init;
            } else {
                return this[method].call(this, options);
            }
        },events: function() {
            var self = this;
            $(this.scope).on('arrival.fndtn.magellan', '[data-magellan-arrival]', function(e) {
                var $destination = $(this), $expedition = $destination.closest('[data-magellan-expedition]'), activeClass = $expedition.attr('data-magellan-active-class') || self.settings.activeClass;
                $destination.closest('[data-magellan-expedition]').find('[data-magellan-arrival]').not($destination).removeClass(activeClass);
                $destination.addClass(activeClass);
            });
            this.fixed_magellan.on('update-position.fndtn.magellan', function() {
                var $el = $(this);
            }).trigger('update-position');
            $(window).on('resize.fndtn.magellan', function() {
                this.fixed_magellan.trigger('update-position');
            }.bind(this)).on('scroll.fndtn.magellan', function() {
                var windowScrollTop = $(window).scrollTop();
                self.fixed_magellan.each(function() {
                    var $expedition = $(this);
                    if (typeof $expedition.data('magellan-top-offset') === 'undefined') {
                        $expedition.data('magellan-top-offset', $expedition.offset().top);
                    }
                    if (typeof $expedition.data('magellan-fixed-position') === 'undefined') {
                        $expedition.data('magellan-fixed-position', false)
                    }
                    var fixed_position = (windowScrollTop + self.settings.threshold) > $expedition.data("magellan-top-offset");
                    var attr = $expedition.attr('data-magellan-top-offset');
                    if ($expedition.data("magellan-fixed-position") != fixed_position) {
                        $expedition.data("magellan-fixed-position", fixed_position);
                        if (fixed_position) {
                            $expedition.addClass('fixed');
                            $expedition.css({position: "fixed",top: 0});
                        } else {
                            $expedition.removeClass('fixed');
                            $expedition.css({position: "",top: ""});
                        }
                        if (fixed_position && typeof attr != 'undefined' && attr != false) {
                            $expedition.css({position: "fixed",top: attr + "px"});
                        }
                    }
                });
            });
            if (this.last_destination.length > 0) {
                $(window).on('scroll.fndtn.magellan', function(e) {
                    var windowScrollTop = $(window).scrollTop(), scrolltopPlusHeight = windowScrollTop + $(window).height(), lastDestinationTop = Math.ceil(self.last_destination.offset().top);
                    $('[data-magellan-destination]').each(function() {
                        var $destination = $(this), destination_name = $destination.attr('data-magellan-destination'), topOffset = $destination.offset().top - windowScrollTop;
                        if (topOffset <= self.settings.threshold) {
                            $("[data-magellan-arrival='" + destination_name + "']").trigger('arrival');
                        }
                        if (scrolltopPlusHeight >= $(self.scope).height() && lastDestinationTop > windowScrollTop && lastDestinationTop < scrolltopPlusHeight) {
                            $('[data-magellan-arrival]').last().trigger('arrival');
                        }
                    });
                });
            }
            this.settings.init = true;
        },set_threshold: function() {
            if (typeof this.settings.threshold !== 'number') {
                this.settings.threshold = (this.fixed_magellan.length > 0) ? this.outerHeight(this.fixed_magellan, true) : 0;
            }
        },off: function() {
            $(this.scope).off('.fndtn.magellan');
            $(window).off('.fndtn.magellan');
        },reflow: function() {
        }};
}(Foundation.zj, this, this.document));
;
(function($, window, document, undefined) {
    'use strict';
    var noop = function() {
    };
    var Orbit = function(el, settings) {
        if (el.hasClass(settings.slides_container_class)) {
            return this;
        }
        var self = this, container, slides_container = el, number_container, bullets_container, timer_container, idx = 0, animate, timer, locked = false, adjust_height_after = false;
        slides_container.children().first().addClass(settings.active_slide_class);
        self.update_slide_number = function(index) {
            if (settings.slide_number) {
                number_container.find('span:first').text(parseInt(index) + 1);
                number_container.find('span:last').text(slides_container.children().length);
            }
            if (settings.bullets) {
                bullets_container.children().removeClass(settings.bullets_active_class);
                $(bullets_container.children().get(index)).addClass(settings.bullets_active_class);
            }
        };
        self.update_active_link = function(index) {
            var link = $('a[data-orbit-link="' + slides_container.children().eq(index).attr('data-orbit-slide') + '"]');
            link.parents('ul').find('[data-orbit-link]').removeClass(settings.bullets_active_class);
            link.addClass(settings.bullets_active_class);
        };
        self.build_markup = function() {
            slides_container.wrap('<div class="' + settings.container_class + '"></div>');
            container = slides_container.parent();
            slides_container.addClass(settings.slides_container_class);
            if (settings.navigation_arrows) {
                container.append($('<a href="#"><span></span></a>').addClass(settings.prev_class));
                container.append($('<a href="#"><span></span></a>').addClass(settings.next_class));
            }
            if (settings.timer) {
                timer_container = $('<div>').addClass(settings.timer_container_class);
                timer_container.append('<span>');
                timer_container.append($('<div>').addClass(settings.timer_progress_class));
                timer_container.addClass(settings.timer_paused_class);
                container.append(timer_container);
            }
            if (settings.slide_number) {
                number_container = $('<div>').addClass(settings.slide_number_class);
                number_container.append('<span></span> ' + settings.slide_number_text + ' <span></span>');
                container.append(number_container);
            }
            if (settings.bullets) {
                bullets_container = $('<ol>').addClass(settings.bullets_container_class);
                container.append(bullets_container);
                slides_container.children().each(function(idx, el) {
                    var bullet = $('<li>').attr('data-orbit-slide', idx);
                    bullets_container.append(bullet);
                });
            }
            if (settings.stack_on_small) {
                container.addClass(settings.stack_on_small_class);
            }
            self.update_slide_number(0);
            self.update_active_link(0);
        };
        self._goto = function(next_idx, start_timer) {
            if (next_idx === idx) {
                return false;
            }
            if (typeof timer === 'object') {
                timer.restart();
            }
            var slides = slides_container.children();
            var dir = 'next';
            locked = true;
            if (next_idx < idx) {
                dir = 'prev';
            }
            if (next_idx >= slides.length) {
                next_idx = 0;
            } 
            else if (next_idx < 0) {
                next_idx = slides.length - 1;
            }
            var current = $(slides.get(idx));
            var next = $(slides.get(next_idx));
            current.css('zIndex', 2);
            current.removeClass(settings.active_slide_class);
            next.css('zIndex', 4).addClass(settings.active_slide_class);
            slides_container.trigger('orbit:before-slide-change');
            settings.before_slide_change();
            self.update_active_link(next_idx);
            var callback = function() {
                var unlock = function() {
                    idx = next_idx;
                    locked = false;
                    if (start_timer === true) {
                        timer = self.create_timer();
                        timer.start();
                    }
                    self.update_slide_number(idx);
                    slides_container.trigger('orbit:after-slide-change', [{slide_number: idx,total_slides: slides.length}]);
                    settings.after_slide_change(idx, slides.length);
                };
                if (slides_container.height() != next.height() && settings.variable_height) {
                    slides_container.animate({'height': next.height()}, 250, 'linear', unlock);
                } else {
                    unlock();
                }
            };
            if (slides.length === 1) {
                callback();
                return false;
            }
            var start_animation = function() {
                if (dir === 'next') {
                    animate.next(current, next, callback);
                }
                if (dir === 'prev') {
                    animate.prev(current, next, callback);
                }
            };
            if (next.height() > slides_container.height() && settings.variable_height) {
                slides_container.animate({'height': next.height()}, 250, 'linear', start_animation);
            } else {
                start_animation();
            }
        };
        self.next = function(e) {
            e.stopImmediatePropagation();
            e.preventDefault();
            self._goto(idx + 1);
        };
        self.prev = function(e) {
            e.stopImmediatePropagation();
            e.preventDefault();
            self._goto(idx - 1);
        };
        self.link_custom = function(e) {
            e.preventDefault();
            var link = $(this).attr('data-orbit-link');
            if ((typeof link === 'string') && (link = $.trim(link)) != "") {
                var slide = container.find('[data-orbit-slide=' + link + ']');
                if (slide.index() != -1) {
                    self._goto(slide.index());
                }
            }
        };
        self.link_bullet = function(e) {
            var index = $(this).attr('data-orbit-slide');
            if ((typeof index === 'string') && (index = $.trim(index)) != "") {
                self._goto(parseInt(index));
            }
        }
        self.timer_callback = function() {
            self._goto(idx + 1, true);
        }
        self.compute_dimensions = function() {
            var current = $(slides_container.children().get(idx));
            var h = current.height();
            if (!settings.variable_height) {
                slides_container.children().each(function() {
                    if ($(this).height() > h) {
                        h = $(this).height();
                    }
                });
            }
            slides_container.height(h);
        };
        self.create_timer = function() {
            var t = new Timer(container.find('.' + settings.timer_container_class), settings, self.timer_callback);
            return t;
        };
        self.stop_timer = function() {
            if (typeof timer === 'object')
                timer.stop();
        };
        self.toggle_timer = function() {
            var t = container.find('.' + settings.timer_container_class);
            if (t.hasClass(settings.timer_paused_class)) {
                if (typeof timer === 'undefined') {
                    timer = self.create_timer();
                }
                timer.start();
            } 
            else {
                if (typeof timer === 'object') {
                    timer.stop();
                }
            }
        };
        self.init = function() {
            self.build_markup();
            if (settings.timer) {
                timer = self.create_timer();
                timer.start();
            }
            animate = new FadeAnimation(settings, slides_container);
            if (settings.animation === 'slide')
                animate = new SlideAnimation(settings, slides_container);
            container.on('click', '.' + settings.next_class, self.next);
            container.on('click', '.' + settings.prev_class, self.prev);
            container.on('click', '[data-orbit-slide]', self.link_bullet);
            container.on('click', self.toggle_timer);
            if (settings.swipe) {
                container.on('touchstart.fndtn.orbit', function(e) {
                    if (!e.touches) {
                        e = e.originalEvent;
                    }
                    var data = {start_page_x: e.touches[0].pageX,start_page_y: e.touches[0].pageY,start_time: (new Date()).getTime(),delta_x: 0,is_scrolling: undefined};
                    container.data('swipe-transition', data);
                    e.stopPropagation();
                }).on('touchmove.fndtn.orbit', function(e) {
                    if (!e.touches) {
                        e = e.originalEvent;
                    }
                    if (e.touches.length > 1 || e.scale && e.scale !== 1)
                        return;
                    var data = container.data('swipe-transition');
                    if (typeof data === 'undefined') {
                        data = {};
                    }
                    data.delta_x = e.touches[0].pageX - data.start_page_x;
                    if (typeof data.is_scrolling === 'undefined') {
                        data.is_scrolling = !!(data.is_scrolling || Math.abs(data.delta_x) < Math.abs(e.touches[0].pageY - data.start_page_y));
                    }
                    if (!data.is_scrolling && !data.active) {
                        e.preventDefault();
                        var direction = (data.delta_x < 0) ? (idx + 1) : (idx - 1);
                        data.active = true;
                        self._goto(direction);
                    }
                }).on('touchend.fndtn.orbit', function(e) {
                    container.data('swipe-transition', {});
                    e.stopPropagation();
                })
            }
            container.on('mouseenter.fndtn.orbit', function(e) {
                if (settings.timer && settings.pause_on_hover) {
                    self.stop_timer();
                }
            }).on('mouseleave.fndtn.orbit', function(e) {
                if (settings.timer && settings.resume_on_mouseout) {
                    timer.start();
                }
            });
            $(document).on('click', '[data-orbit-link]', self.link_custom);
            $(window).on('resize', self.compute_dimensions);
            $(window).on('load', self.compute_dimensions);
            $(window).on('load', function() {
                container.prev('.preloader').css('display', 'none');
            });
            slides_container.trigger('orbit:ready');
        };
        self.init();
    };
    var Timer = function(el, settings, callback) {
        var self = this, duration = settings.timer_speed, progress = el.find('.' + settings.timer_progress_class), start, timeout, left = -1;
        this.update_progress = function(w) {
            var new_progress = progress.clone();
            new_progress.attr('style', '');
            new_progress.css('width', w + '%');
            progress.replaceWith(new_progress);
            progress = new_progress;
        };
        this.restart = function() {
            clearTimeout(timeout);
            el.addClass(settings.timer_paused_class);
            left = -1;
            self.update_progress(0);
        };
        this.start = function() {
            if (!el.hasClass(settings.timer_paused_class)) {
                return true;
            }
            left = (left === -1) ? duration : left;
            el.removeClass(settings.timer_paused_class);
            start = new Date().getTime();
            progress.animate({'width': '100%'}, left, 'linear');
            timeout = setTimeout(function() {
                self.restart();
                callback();
            }, left);
            el.trigger('orbit:timer-started')
        };
        this.stop = function() {
            if (el.hasClass(settings.timer_paused_class)) {
                return true;
            }
            clearTimeout(timeout);
            el.addClass(settings.timer_paused_class);
            var end = new Date().getTime();
            left = left - (end - start);
            var w = 100 - ((left / duration) * 100);
            self.update_progress(w);
            el.trigger('orbit:timer-stopped');
        };
    };
    var SlideAnimation = function(settings, container) {
        var duration = settings.animation_speed;
        var is_rtl = ($('html[dir=rtl]').length === 1);
        var margin = is_rtl ? 'marginRight' : 'marginLeft';
        var animMargin = {};
        animMargin[margin] = '0%';
        this.next = function(current, next, callback) {
            next.animate(animMargin, duration, 'linear', function() {
                current.css(margin, '100%');
                callback();
            });
        };
        this.prev = function(current, prev, callback) {
            prev.css(margin, '-100%');
            prev.animate(animMargin, duration, 'linear', function() {
                current.css(margin, '100%');
                callback();
            });
        };
    };
    var FadeAnimation = function(settings, container) {
        var duration = settings.animation_speed;
        var is_rtl = ($('html[dir=rtl]').length === 1);
        var margin = is_rtl ? 'marginRight' : 'marginLeft';
        this.next = function(current, next, callback) {
            next.css({'margin': '0%','opacity': '0.01'});
            next.animate({'opacity': '1'}, duration, 'linear', function() {
                current.css('margin', '100%');
                callback();
            });
        };
        this.prev = function(current, prev, callback) {
            prev.css({'margin': '0%','opacity': '0.01'});
            prev.animate({'opacity': '1'}, duration, 'linear', function() {
                current.css('margin', '100%');
                callback();
            });
        };
    };
    Foundation.libs = Foundation.libs || {};
    Foundation.libs.orbit = {name: 'orbit',version: '4.3.2',settings: {animation: 'slide',timer_speed: 10000,pause_on_hover: true,resume_on_mouseout: false,animation_speed: 500,stack_on_small: false,navigation_arrows: true,slide_number: true,slide_number_text: 'of',container_class: 'orbit-container',stack_on_small_class: 'orbit-stack-on-small',next_class: 'orbit-next',prev_class: 'orbit-prev',timer_container_class: 'orbit-timer',timer_paused_class: 'paused',timer_progress_class: 'orbit-progress',slides_container_class: 'orbit-slides-container',bullets_container_class: 'orbit-bullets',bullets_active_class: 'active',slide_number_class: 'orbit-slide-number',caption_class: 'orbit-caption',active_slide_class: 'active',orbit_transition_class: 'orbit-transitioning',bullets: true,timer: true,variable_height: false,swipe: true,before_slide_change: noop,after_slide_change: noop},init: function(scope, method, options) {
            var self = this;
            Foundation.inherit(self, 'data_options');
            if (typeof method === 'object') {
                $.extend(true, self.settings, method);
            }
            if ($(scope).is('[data-orbit]')) {
                var $el = $(scope);
                var opts = self.data_options($el);
                new Orbit($el, $.extend({}, self.settings, opts));
            }
            $('[data-orbit]', scope).each(function(idx, el) {
                var $el = $(el);
                var opts = self.data_options($el);
                new Orbit($el, $.extend({}, self.settings, opts));
            });
        }};
}(Foundation.zj, this, this.document));
(function(global) {
    "use strict";
    function addEventListener(elem, event, fn) {
        if (elem.addEventListener) {
            return elem.addEventListener(event, fn, false);
        }
        if (elem.attachEvent) {
            return elem.attachEvent("on" + event, fn);
        }
    }
    function inArray(arr, item) {
        var i, len;
        for (i = 0, len = arr.length; i < len; i++) {
            if (arr[i] === item) {
                return true;
            }
        }
        return false;
    }
    function moveCaret(elem, index) {
        var range;
        if (elem.createTextRange) {
            range = elem.createTextRange();
            range.move("character", index);
            range.select();
        } else if (elem.selectionStart) {
            elem.focus();
            elem.setSelectionRange(index, index);
        }
    }
    function changeType(elem, type) {
        try {
            elem.type = type;
            return true;
        } catch (e) {
            return false;
        }
    }
    global.Placeholders = {Utils: {addEventListener: addEventListener,inArray: inArray,moveCaret: moveCaret,changeType: changeType}};
}(this));
(function(global) {
    "use strict";
    var validTypes = ["text", "search", "url", "tel", "email", "password", "number", "textarea"], badKeys = [27, 33, 34, 35, 36, 37, 38, 39, 40, 8, 46], placeholderStyleColor = "#ccc", placeholderClassName = "placeholdersjs", classNameRegExp = new RegExp("(?:^|\\s)" + placeholderClassName + "(?!\\S)"), inputs, textareas, ATTR_CURRENT_VAL = "data-placeholder-value", ATTR_ACTIVE = "data-placeholder-active", ATTR_INPUT_TYPE = "data-placeholder-type", ATTR_FORM_HANDLED = "data-placeholder-submit", ATTR_EVENTS_BOUND = "data-placeholder-bound", ATTR_OPTION_FOCUS = "data-placeholder-focus", ATTR_OPTION_LIVE = "data-placeholder-live", test = document.createElement("input"), head = document.getElementsByTagName("head")[0], root = document.documentElement, Placeholders = global.Placeholders, Utils = Placeholders.Utils, hideOnInput, liveUpdates, keydownVal, styleElem, styleRules, placeholder, timer, form, elem, len, i;
    function noop() {
    }
    function hidePlaceholder(elem) {
        var type;
        if (elem.value === elem.getAttribute(ATTR_CURRENT_VAL) && elem.getAttribute(ATTR_ACTIVE) === "true") {
            elem.setAttribute(ATTR_ACTIVE, "false");
            elem.value = "";
            elem.className = elem.className.replace(classNameRegExp, "");
            type = elem.getAttribute(ATTR_INPUT_TYPE);
            if (type) {
                elem.type = type;
            }
            return true;
        }
        return false;
    }
    function showPlaceholder(elem) {
        var type, val = elem.getAttribute(ATTR_CURRENT_VAL);
        if (elem.value === "" && val) {
            elem.setAttribute(ATTR_ACTIVE, "true");
            elem.value = val;
            elem.className += " " + placeholderClassName;
            type = elem.getAttribute(ATTR_INPUT_TYPE);
            if (type) {
                elem.type = "text";
            } else if (elem.type === "password") {
                if (Utils.changeType(elem, "text")) {
                    elem.setAttribute(ATTR_INPUT_TYPE, "password");
                }
            }
            return true;
        }
        return false;
    }
    function handleElem(node, callback) {
        var handleInputs, handleTextareas, elem, len, i;
        if (node && node.getAttribute(ATTR_CURRENT_VAL)) {
            callback(node);
        } else {
            handleInputs = node ? node.getElementsByTagName("input") : inputs;
            handleTextareas = node ? node.getElementsByTagName("textarea") : textareas;
            for (i = 0, len = handleInputs.length + handleTextareas.length; i < len; i++) {
                elem = i < handleInputs.length ? handleInputs[i] : handleTextareas[i - handleInputs.length];
                callback(elem);
            }
        }
    }
    function disablePlaceholders(node) {
        handleElem(node, hidePlaceholder);
    }
    function enablePlaceholders(node) {
        handleElem(node, showPlaceholder);
    }
    function makeFocusHandler(elem) {
        return function() {
            if (hideOnInput && elem.value === elem.getAttribute(ATTR_CURRENT_VAL) && elem.getAttribute(ATTR_ACTIVE) === "true") {
                Utils.moveCaret(elem, 0);
            } else {
                hidePlaceholder(elem);
            }
        };
    }
    function makeBlurHandler(elem) {
        return function() {
            showPlaceholder(elem);
        };
    }
    function makeKeydownHandler(elem) {
        return function(e) {
            keydownVal = elem.value;
            if (elem.getAttribute(ATTR_ACTIVE) === "true") {
                if (keydownVal === elem.getAttribute(ATTR_CURRENT_VAL) && Utils.inArray(badKeys, e.keyCode)) {
                    if (e.preventDefault) {
                        e.preventDefault();
                    }
                    return false;
                }
            }
        };
    }
    function makeKeyupHandler(elem) {
        return function() {
            var type;
            if (elem.getAttribute(ATTR_ACTIVE) === "true" && elem.value !== keydownVal) {
                elem.className = elem.className.replace(classNameRegExp, "");
                elem.value = elem.value.replace(elem.getAttribute(ATTR_CURRENT_VAL), "");
                elem.setAttribute(ATTR_ACTIVE, false);
                type = elem.getAttribute(ATTR_INPUT_TYPE);
                if (type) {
                    elem.type = type;
                }
            }
            if (elem.value === "") {
                elem.blur();
                Utils.moveCaret(elem, 0);
            }
        };
    }
    function makeClickHandler(elem) {
        return function() {
            if (elem === document.activeElement && elem.value === elem.getAttribute(ATTR_CURRENT_VAL) && elem.getAttribute(ATTR_ACTIVE) === "true") {
                Utils.moveCaret(elem, 0);
            }
        };
    }
    function makeSubmitHandler(form) {
        return function() {
            disablePlaceholders(form);
        };
    }
    function newElement(elem) {
        if (elem.form) {
            form = elem.form;
            if (!form.getAttribute(ATTR_FORM_HANDLED)) {
                Utils.addEventListener(form, "submit", makeSubmitHandler(form));
                form.setAttribute(ATTR_FORM_HANDLED, "true");
            }
        }
        Utils.addEventListener(elem, "focus", makeFocusHandler(elem));
        Utils.addEventListener(elem, "blur", makeBlurHandler(elem));
        if (hideOnInput) {
            Utils.addEventListener(elem, "keydown", makeKeydownHandler(elem));
            Utils.addEventListener(elem, "keyup", makeKeyupHandler(elem));
            Utils.addEventListener(elem, "click", makeClickHandler(elem));
        }
        elem.setAttribute(ATTR_EVENTS_BOUND, "true");
        elem.setAttribute(ATTR_CURRENT_VAL, placeholder);
        showPlaceholder(elem);
    }
    Placeholders.nativeSupport = test.placeholder !== void 0;
    if (!Placeholders.nativeSupport) {
        inputs = document.getElementsByTagName("input");
        textareas = document.getElementsByTagName("textarea");
        hideOnInput = root.getAttribute(ATTR_OPTION_FOCUS) === "false";
        liveUpdates = root.getAttribute(ATTR_OPTION_LIVE) !== "false";
        styleElem = document.createElement("style");
        styleElem.type = "text/css";
        styleRules = document.createTextNode("." + placeholderClassName + " { color:" + placeholderStyleColor + "; }");
        if (styleElem.styleSheet) {
            styleElem.styleSheet.cssText = styleRules.nodeValue;
        } else {
            styleElem.appendChild(styleRules);
        }
        head.insertBefore(styleElem, head.firstChild);
        for (i = 0, len = inputs.length + textareas.length; i < len; i++) {
            elem = i < inputs.length ? inputs[i] : textareas[i - inputs.length];
            placeholder = elem.attributes.placeholder;
            if (placeholder) {
                placeholder = placeholder.nodeValue;
                if (placeholder && Utils.inArray(validTypes, elem.type)) {
                    newElement(elem);
                }
            }
        }
        timer = setInterval(function() {
            for (i = 0, len = inputs.length + textareas.length; i < len; i++) {
                elem = i < inputs.length ? inputs[i] : textareas[i - inputs.length];
                placeholder = elem.attributes.placeholder;
                if (placeholder) {
                    placeholder = placeholder.nodeValue;
                    if (placeholder && Utils.inArray(validTypes, elem.type)) {
                        if (!elem.getAttribute(ATTR_EVENTS_BOUND)) {
                            newElement(elem);
                        }
                        if (placeholder !== elem.getAttribute(ATTR_CURRENT_VAL) || (elem.type === "password" && !elem.getAttribute(ATTR_INPUT_TYPE))) {
                            if (elem.type === "password" && !elem.getAttribute(ATTR_INPUT_TYPE) && Utils.changeType(elem, "text")) {
                                elem.setAttribute(ATTR_INPUT_TYPE, "password");
                            }
                            if (elem.value === elem.getAttribute(ATTR_CURRENT_VAL)) {
                                elem.value = placeholder;
                            }
                            elem.setAttribute(ATTR_CURRENT_VAL, placeholder);
                        }
                    }
                }
            }
            if (!liveUpdates) {
                clearInterval(timer);
            }
        }, 100);
    }
    Placeholders.disable = Placeholders.nativeSupport ? noop : disablePlaceholders;
    Placeholders.enable = Placeholders.nativeSupport ? noop : enablePlaceholders;
}(this));
;
(function($, window, document, undefined) {
    'use strict';
    Foundation.libs.reveal = {name: 'reveal',version: '4.3.2',locked: false,settings: {animation: 'fadeAndPop',animationSpeed: 250,closeOnBackgroundClick: true,closeOnEsc: true,dismissModalClass: 'close-reveal-modal',bgClass: 'reveal-modal-bg',open: function() {
            },opened: function() {
            },close: function() {
            },closed: function() {
            },bg: $('.reveal-modal-bg'),css: {open: {'opacity': 0,'visibility': 'visible','display': 'block'},close: {'opacity': 1,'visibility': 'hidden','display': 'none'}}},init: function(scope, method, options) {
            Foundation.inherit(this, 'data_options delay');
            if (typeof method === 'object') {
                $.extend(true, this.settings, method);
            } else if (typeof options !== 'undefined') {
                $.extend(true, this.settings, options);
            }
            if (typeof method !== 'string') {
                this.events();
                return this.settings.init;
            } else {
                return this[method].call(this, options);
            }
        },events: function() {
            var self = this;
            $(this.scope).off('.fndtn.reveal').on('click.fndtn.reveal', '[data-reveal-id]', function(e) {
                e.preventDefault();
                if (!self.locked) {
                    var element = $(this), ajax = element.data('reveal-ajax');
                    self.locked = true;
                    if (typeof ajax === 'undefined') {
                        self.open.call(self, element);
                    } else {
                        var url = ajax === true ? element.attr('href') : ajax;
                        self.open.call(self, element, {url: url});
                    }
                }
            }).on('click.fndtn.reveal touchend', this.close_targets(), function(e) {
                e.preventDefault();
                if (!self.locked) {
                    var settings = $.extend({}, self.settings, self.data_options($('.reveal-modal.open'))), bgClicked = $(e.target)[0] === $('.' + settings.bgClass)[0];
                    if (bgClicked && !settings.closeOnBackgroundClick) {
                        return;
                    }
                    self.locked = true;
                    self.close.call(self, bgClicked ? $('.reveal-modal.open') : $(this).closest('.reveal-modal'));
                }
            });
            if ($(this.scope).hasClass('reveal-modal')) {
                $(this.scope).on('open.fndtn.reveal', this.settings.open).on('opened.fndtn.reveal', this.settings.opened).on('opened.fndtn.reveal', this.open_video).on('close.fndtn.reveal', this.settings.close).on('closed.fndtn.reveal', this.settings.closed).on('closed.fndtn.reveal', this.close_video);
            } else {
                $(this.scope).on('open.fndtn.reveal', '.reveal-modal', this.settings.open).on('opened.fndtn.reveal', '.reveal-modal', this.settings.opened).on('opened.fndtn.reveal', '.reveal-modal', this.open_video).on('close.fndtn.reveal', '.reveal-modal', this.settings.close).on('closed.fndtn.reveal', '.reveal-modal', this.settings.closed).on('closed.fndtn.reveal', '.reveal-modal', this.close_video);
            }
            $('body').bind('keyup.reveal', function(event) {
                var open_modal = $('.reveal-modal.open'), settings = $.extend({}, self.settings, self.data_options(open_modal));
                if (event.which === 27 && settings.closeOnEsc) {
                    open_modal.foundation('reveal', 'close');
                }
            });
            return true;
        },open: function(target, ajax_settings) {
            if (target) {
                if (typeof target.selector !== 'undefined') {
                    var modal = $('#' + target.data('reveal-id'));
                } else {
                    var modal = $(this.scope);
                    ajax_settings = target;
                }
            } else {
                var modal = $(this.scope);
            }
            if (!modal.hasClass('open')) {
                var open_modal = $('.reveal-modal.open');
                if (typeof modal.data('css-top') === 'undefined') {
                    modal.data('css-top', parseInt(modal.css('top'), 10)).data('offset', this.cache_offset(modal));
                }
                modal.trigger('open');
                if (open_modal.length < 1) {
                    this.toggle_bg();
                }
                if (typeof ajax_settings === 'undefined' || !ajax_settings.url) {
                    this.hide(open_modal, this.settings.css.close);
                    this.show(modal, this.settings.css.open);
                } else {
                    var self = this, old_success = typeof ajax_settings.success !== 'undefined' ? ajax_settings.success : null;
                    $.extend(ajax_settings, {success: function(data, textStatus, jqXHR) {
                            if ($.isFunction(old_success)) {
                                old_success(data, textStatus, jqXHR);
                            }
                            modal.html(data);
                            $(modal).foundation('section', 'reflow');
                            self.hide(open_modal, self.settings.css.close);
                            self.show(modal, self.settings.css.open);
                        }});
                    $.ajax(ajax_settings);
                }
            }
        },close: function(modal) {
            var modal = modal && modal.length ? modal : $(this.scope), open_modals = $('.reveal-modal.open');
            if (open_modals.length > 0) {
                this.locked = true;
                modal.trigger('close');
                this.toggle_bg();
                this.hide(open_modals, this.settings.css.close);
            }
        },close_targets: function() {
            var base = '.' + this.settings.dismissModalClass;
            if (this.settings.closeOnBackgroundClick) {
                return base + ', .' + this.settings.bgClass;
            }
            return base;
        },toggle_bg: function() {
            if ($('.' + this.settings.bgClass).length === 0) {
                this.settings.bg = $('<div />', {'class': this.settings.bgClass}).appendTo('body');
            }
            if (this.settings.bg.filter(':visible').length > 0) {
                this.hide(this.settings.bg);
            } else {
                this.show(this.settings.bg);
            }
        },show: function(el, css) {
            if (css) {
                if (el.parent('body').length === 0) {
                    var placeholder = el.wrap('<div style="display: none;" />').parent();
                    el.on('closed.fndtn.reveal.wrapped', function() {
                        el.detach().appendTo(placeholder);
                        el.unwrap().unbind('closed.fndtn.reveal.wrapped');
                    });
                    el.detach().appendTo('body');
                }
                if (/pop/i.test(this.settings.animation)) {
                    css.top = $(window).scrollTop() - el.data('offset') + 'px';
                    var end_css = {top: $(window).scrollTop() + el.data('css-top') + 'px',opacity: 1};
                    return this.delay(function() {
                        return el.css(css).animate(end_css, this.settings.animationSpeed, 'linear', function() {
                            this.locked = false;
                            el.trigger('opened');
                        }.bind(this)).addClass('open');
                    }.bind(this), this.settings.animationSpeed / 2);
                }
                if (/fade/i.test(this.settings.animation)) {
                    var end_css = {opacity: 1};
                    return this.delay(function() {
                        return el.css(css).animate(end_css, this.settings.animationSpeed, 'linear', function() {
                            this.locked = false;
                            el.trigger('opened');
                        }.bind(this)).addClass('open');
                    }.bind(this), this.settings.animationSpeed / 2);
                }
                return el.css(css).show().css({opacity: 1}).addClass('open').trigger('opened');
            }
            if (/fade/i.test(this.settings.animation)) {
                return el.fadeIn(this.settings.animationSpeed / 2);
            }
            return el.show();
        },hide: function(el, css) {
            if (css) {
                if (/pop/i.test(this.settings.animation)) {
                    var end_css = {top: -$(window).scrollTop() - el.data('offset') + 'px',opacity: 0};
                    return this.delay(function() {
                        return el.animate(end_css, this.settings.animationSpeed, 'linear', function() {
                            this.locked = false;
                            el.css(css).trigger('closed');
                        }.bind(this)).removeClass('open');
                    }.bind(this), this.settings.animationSpeed / 2);
                }
                if (/fade/i.test(this.settings.animation)) {
                    var end_css = {opacity: 0};
                    return this.delay(function() {
                        return el.animate(end_css, this.settings.animationSpeed, 'linear', function() {
                            this.locked = false;
                            el.css(css).trigger('closed');
                        }.bind(this)).removeClass('open');
                    }.bind(this), this.settings.animationSpeed / 2);
                }
                return el.hide().css(css).removeClass('open').trigger('closed');
            }
            if (/fade/i.test(this.settings.animation)) {
                return el.fadeOut(this.settings.animationSpeed / 2);
            }
            return el.hide();
        },close_video: function(e) {
            var video = $(this).find('.flex-video'), iframe = video.find('iframe');
            if (iframe.length > 0) {
                iframe.attr('data-src', iframe[0].src);
                iframe.attr('src', 'about:blank');
                video.hide();
            }
        },open_video: function(e) {
            var video = $(this).find('.flex-video'), iframe = video.find('iframe');
            if (iframe.length > 0) {
                var data_src = iframe.attr('data-src');
                if (typeof data_src === 'string') {
                    iframe[0].src = iframe.attr('data-src');
                } else {
                    var src = iframe[0].src;
                    iframe[0].src = undefined;
                    iframe[0].src = src;
                }
                video.show();
            }
        },cache_offset: function(modal) {
            var offset = modal.show().height() + parseInt(modal.css('top'), 10);
            modal.hide();
            return offset;
        },off: function() {
            $(this.scope).off('.fndtn.reveal');
        },reflow: function() {
        }};
}(Foundation.zj, this, this.document));
;
(function($, window, document) {
    'use strict';
    Foundation.libs.section = {name: 'section',version: '4.3.2',settings: {deep_linking: false,small_breakpoint: 768,one_up: true,multi_expand: false,section_selector: '[data-section]',region_selector: 'section, .section, [data-section-region]',title_selector: '.title, [data-section-title]',resized_data_attr: 'data-section-resized',small_style_data_attr: 'data-section-small-style',content_selector: '.content, [data-section-content]',nav_selector: '[data-section="vertical-nav"], [data-section="horizontal-nav"]',active_class: 'active',callback: function() {
            }},init: function(scope, method, options) {
            var self = this;
            Foundation.inherit(this, 'throttle data_options position_right offset_right');
            if (typeof method === 'object') {
                $.extend(true, self.settings, method);
            }
            if (typeof method !== 'string') {
                this.events();
                return true;
            } else {
                return this[method].call(this, options);
            }
        },events: function() {
            var self = this;
            var click_title_selectors = [], section_selector = self.settings.section_selector, region_selectors = self.settings.region_selector.split(","), title_selectors = self.settings.title_selector.split(",");
            for (var i = 0, len = region_selectors.length; i < len; i++) {
                var region_selector = region_selectors[i];
                for (var j = 0, len1 = title_selectors.length; j < len1; j++) {
                    var title_selector = section_selector + ">" + region_selector + ">" + title_selectors[j];
                    click_title_selectors.push(title_selector + " a");
                    click_title_selectors.push(title_selector);
                }
            }
            $(self.scope).on('click.fndtn.section', click_title_selectors.join(","), function(e) {
                var title = $(this).closest(self.settings.title_selector);
                self.close_navs(title);
                if (title.siblings(self.settings.content_selector).length > 0) {
                    self.toggle_active.call(title[0], e);
                }
            });
            $(window).on('resize.fndtn.section', self.throttle(function() {
                self.resize();
            }, 30)).on('hashchange.fndtn.section', self.set_active_from_hash);
            $(document).on('click.fndtn.section', function(e) {
                if (e.isPropagationStopped && e.isPropagationStopped())
                    return;
                if (e.target === document)
                    return;
                self.close_navs($(e.target).closest(self.settings.title_selector));
            });
            $(window).triggerHandler('resize.fndtn.section');
            $(window).triggerHandler('hashchange.fndtn.section');
        },close_navs: function(except_nav_with_title) {
            var self = Foundation.libs.section, navsToClose = $(self.settings.nav_selector).filter(function() {
                return !$.extend({}, self.settings, self.data_options($(this))).one_up;
            });
            if (except_nav_with_title.length > 0) {
                var section = except_nav_with_title.parent().parent();
                if (self.is_horizontal_nav(section) || self.is_vertical_nav(section)) {
                    navsToClose = navsToClose.filter(function() {
                        return this !== section[0];
                    });
                }
            }
            navsToClose.children(self.settings.region_selector).removeClass(self.settings.active_class);
        },toggle_active: function(e) {
            var $this = $(this), self = Foundation.libs.section, region = $this.parent(), content = $this.siblings(self.settings.content_selector), section = region.parent(), settings = $.extend({}, self.settings, self.data_options(section)), prev_active_region = section.children(self.settings.region_selector).filter("." + self.settings.active_class);
            if (!settings.deep_linking && content.length > 0) {
                e.preventDefault();
            }
            e.stopPropagation();
            if (!region.hasClass(self.settings.active_class)) {
                if (!self.is_accordion(section) || (self.is_accordion(section) && !self.settings.multi_expand)) {
                    prev_active_region.removeClass(self.settings.active_class);
                    prev_active_region.trigger('closed.fndtn.section');
                }
                region.addClass(self.settings.active_class);
                self.resize(region.find(self.settings.section_selector).not("[" + self.settings.resized_data_attr + "]"), true);
                region.trigger('opened.fndtn.section');
            } else if (region.hasClass(self.settings.active_class) && self.is_accordion(section) || !settings.one_up && (self.small(section) || self.is_vertical_nav(section) || self.is_horizontal_nav(section) || self.is_accordion(section))) {
                region.removeClass(self.settings.active_class);
                region.trigger('closed.fndtn.section');
            }
            settings.callback(section);
        },check_resize_timer: null,resize: function(sections, ensure_has_active_region) {
            var self = Foundation.libs.section, section_container = $(self.settings.section_selector), is_small_window = self.small(section_container), should_be_resized = function(section, now_is_hidden) {
                return !self.is_accordion(section) && !section.is("[" + self.settings.resized_data_attr + "]") && (!is_small_window || self.is_horizontal_tabs(section)) && now_is_hidden === (section.css('display') === 'none' || !section.parent().is(':visible'));
            };
            sections = sections || $(self.settings.section_selector);
            clearTimeout(self.check_resize_timer);
            if (!is_small_window) {
                sections.removeAttr(self.settings.small_style_data_attr);
            }
            sections.filter(function() {
                return should_be_resized($(this), false);
            }).each(function() {
                var section = $(this), regions = section.children(self.settings.region_selector), titles = regions.children(self.settings.title_selector), content = regions.children(self.settings.content_selector), titles_max_height = 0;
                if (ensure_has_active_region && section.children(self.settings.region_selector).filter("." + self.settings.active_class).length == 0) {
                    var settings = $.extend({}, self.settings, self.data_options(section));
                    if (!settings.deep_linking && (settings.one_up || !self.is_horizontal_nav(section) && !self.is_vertical_nav(section) && !self.is_accordion(section))) {
                        regions.filter(":visible").first().addClass(self.settings.active_class);
                    }
                }
                if (self.is_horizontal_tabs(section) || self.is_auto(section)) {
                    var titles_sum_width = 0;
                    titles.each(function() {
                        var title = $(this);
                        if (title.is(":visible")) {
                            title.css(!self.rtl ? 'left' : 'right', titles_sum_width);
                            var title_h_border_width = parseInt(title.css("border-" + (self.rtl ? 'left' : 'right') + "-width"), 10);
                            if (title_h_border_width.toString() === 'Nan') {
                                title_h_border_width = 0;
                            }
                            titles_sum_width += self.outerWidth(title) - title_h_border_width;
                            titles_max_height = Math.max(titles_max_height, self.outerHeight(title));
                        }
                    });
                    titles.css('height', titles_max_height);
                    regions.each(function() {
                        var region = $(this), region_content = region.children(self.settings.content_selector), content_top_border_width = parseInt(region_content.css("border-top-width"), 10);
                        if (content_top_border_width.toString() === 'Nan') {
                            content_top_border_width = 0;
                        }
                        region.css('padding-top', titles_max_height - content_top_border_width);
                    });
                    section.css("min-height", titles_max_height);
                } else if (self.is_horizontal_nav(section)) {
                    var first = true;
                    titles.each(function() {
                        titles_max_height = Math.max(titles_max_height, self.outerHeight($(this)));
                    });
                    regions.each(function() {
                        var region = $(this);
                        region.css("margin-left", "-" + (first ? section : region.children(self.settings.title_selector)).css("border-left-width"));
                        first = false;
                    });
                    regions.css("margin-top", "-" + section.css("border-top-width"));
                    titles.css('height', titles_max_height);
                    content.css('top', titles_max_height);
                    section.css("min-height", titles_max_height);
                } else if (self.is_vertical_tabs(section)) {
                    var titles_sum_height = 0;
                    titles.each(function() {
                        var title = $(this);
                        if (title.is(":visible")) {
                            title.css('top', titles_sum_height);
                            var title_top_border_width = parseInt(title.css("border-top-width"), 10);
                            if (title_top_border_width.toString() === 'Nan') {
                                title_top_border_width = 0;
                            }
                            titles_sum_height += self.outerHeight(title) - title_top_border_width;
                        }
                    });
                    content.css('min-height', titles_sum_height + 1);
                } else if (self.is_vertical_nav(section)) {
                    var titles_max_width = 0, first1 = true;
                    titles.each(function() {
                        titles_max_width = Math.max(titles_max_width, self.outerWidth($(this)));
                    });
                    regions.each(function() {
                        var region = $(this);
                        region.css("margin-top", "-" + (first1 ? section : region.children(self.settings.title_selector)).css("border-top-width"));
                        first1 = false;
                    });
                    titles.css('width', titles_max_width);
                    content.css(!self.rtl ? 'left' : 'right', titles_max_width);
                    section.css('width', titles_max_width);
                }
                section.attr(self.settings.resized_data_attr, true);
            });
            if ($(self.settings.section_selector).filter(function() {
                return should_be_resized($(this), true);
            }).length > 0)
                self.check_resize_timer = setTimeout(function() {
                    self.resize(sections.filter(function() {
                        return should_be_resized($(this), false);
                    }), true);
                }, 700);
            if (is_small_window) {
                sections.attr(self.settings.small_style_data_attr, true);
            }
        },is_vertical_nav: function(el) {
            return /vertical-nav/i.test(el.data('section'));
        },is_horizontal_nav: function(el) {
            return /horizontal-nav/i.test(el.data('section'));
        },is_accordion: function(el) {
            return /accordion/i.test(el.data('section'));
        },is_horizontal_tabs: function(el) {
            return /^tabs$/i.test(el.data('section'));
        },is_vertical_tabs: function(el) {
            return /vertical-tabs/i.test(el.data('section'));
        },is_auto: function(el) {
            var data_section = el.data('section');
            return data_section === '' || /auto/i.test(data_section);
        },set_active_from_hash: function() {
            var self = Foundation.libs.section, hash = window.location.hash.substring(1), sections = $(self.settings.section_selector);
            var selectedSection;
            sections.each(function() {
                var section = $(this), regions = section.children(self.settings.region_selector);
                regions.each(function() {
                    var region = $(this), data_slug = region.children(self.settings.content_selector).data('slug');
                    if (new RegExp(data_slug, 'i').test(hash)) {
                        selectedSection = section;
                        return false;
                    }
                });
                if (selectedSection != null) {
                    return false;
                }
            });
            if (selectedSection != null) {
                sections.each(function() {
                    if (selectedSection == $(this)) {
                        var section = $(this), settings = $.extend({}, self.settings, self.data_options(section)), regions = section.children(self.settings.region_selector), set_active_from_hash = settings.deep_linking && hash.length > 0, selected = false;
                        regions.each(function() {
                            var region = $(this);
                            if (selected) {
                                region.removeClass(self.settings.active_class);
                            } else if (set_active_from_hash) {
                                var data_slug = region.children(self.settings.content_selector).data('slug');
                                if (data_slug && new RegExp(data_slug, 'i').test(hash)) {
                                    if (!region.hasClass(self.settings.active_class))
                                        region.addClass(self.settings.active_class);
                                    selected = true;
                                } else {
                                    region.removeClass(self.settings.active_class);
                                }
                            } else if (region.hasClass(self.settings.active_class)) {
                                selected = true;
                            }
                        });
                        if (!selected && (settings.one_up || !self.is_horizontal_nav(section) && !self.is_vertical_nav(section) && !self.is_accordion(section)))
                            regions.filter(":visible").first().addClass(self.settings.active_class);
                    }
                });
            }
        },reflow: function() {
            var self = Foundation.libs.section;
            $(self.settings.section_selector).removeAttr(self.settings.resized_data_attr);
            self.throttle(function() {
                self.resize();
            }, 30)();
        },small: function(el) {
            var settings = $.extend({}, this.settings, this.data_options(el));
            if (this.is_horizontal_tabs(el)) {
                return false;
            }
            if (el && this.is_accordion(el)) {
                return true;
            }
            if ($('html').hasClass('lt-ie9')) {
                return true;
            }
            if ($('html').hasClass('ie8compat')) {
                return true;
            }
            return $(this.scope).width() < settings.small_breakpoint;
        },off: function() {
            $(this.scope).off('.fndtn.section');
            $(window).off('.fndtn.section');
            $(document).off('.fndtn.section');
        }};
    $.fn.reflow_section = function(ensure_has_active_region) {
        var section = this, self = Foundation.libs.section;
        section.removeAttr(self.settings.resized_data_attr);
        self.throttle(function() {
            self.resize(section, ensure_has_active_region);
        }, 30)();
        return this;
    };
}(Foundation.zj, window, document));
;
(function($, window, document, undefined) {
    'use strict';
    Foundation.libs.tooltips = {name: 'tooltips',version: '4.3.2',settings: {selector: '.has-tip',additionalInheritableClasses: [],tooltipClass: '.tooltip',touchCloseText: 'tap to close',appendTo: 'body','disable-for-touch': false,tipTemplate: function(selector, content) {
                return '<span data-selector="' + selector + '" class="' + Foundation.libs.tooltips.settings.tooltipClass.substring(1) + '">' + content + '<span class="nub"></span></span>';
            }},cache: {},init: function(scope, method, options) {
            Foundation.inherit(this, 'data_options');
            var self = this;
            if (typeof method === 'object') {
                $.extend(true, this.settings, method);
            } else if (typeof options !== 'undefined') {
                $.extend(true, this.settings, options);
            }
            if (typeof method !== 'string') {
                if (Modernizr.touch) {
                    $(this.scope).on('click.fndtn.tooltip touchstart.fndtn.tooltip touchend.fndtn.tooltip', '[data-tooltip]', function(e) {
                        var settings = $.extend({}, self.settings, self.data_options($(this)));
                        if (!settings['disable-for-touch']) {
                            e.preventDefault();
                            $(settings.tooltipClass).hide();
                            self.showOrCreateTip($(this));
                        }
                    }).on('click.fndtn.tooltip touchstart.fndtn.tooltip touchend.fndtn.tooltip', this.settings.tooltipClass, function(e) {
                        e.preventDefault();
                        $(this).fadeOut(150);
                    });
                } else {
                    $(this.scope).on('mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip', '[data-tooltip]', function(e) {
                        var $this = $(this);
                        if (/enter|over/i.test(e.type)) {
                            self.showOrCreateTip($this);
                        } else if (e.type === 'mouseout' || e.type === 'mouseleave') {
                            self.hide($this);
                        }
                    });
                }
            } else {
                return this[method].call(this, options);
            }
        },showOrCreateTip: function($target) {
            var $tip = this.getTip($target);
            if ($tip && $tip.length > 0) {
                return this.show($target);
            }
            return this.create($target);
        },getTip: function($target) {
            var selector = this.selector($target), tip = null;
            if (selector) {
                tip = $('span[data-selector="' + selector + '"]' + this.settings.tooltipClass);
            }
            return (typeof tip === 'object') ? tip : false;
        },selector: function($target) {
            var id = $target.attr('id'), dataSelector = $target.attr('data-tooltip') || $target.attr('data-selector');
            if ((id && id.length < 1 || !id) && typeof dataSelector != 'string') {
                dataSelector = 'tooltip' + Math.random().toString(36).substring(7);
                $target.attr('data-selector', dataSelector);
            }
            return (id && id.length > 0) ? id : dataSelector;
        },create: function($target) {
            var $tip = $(this.settings.tipTemplate(this.selector($target), $('<div></div>').html($target.attr('title')).html())), classes = this.inheritable_classes($target);
            $tip.addClass(classes).appendTo(this.settings.appendTo);
            if (Modernizr.touch) {
                $tip.append('<span class="tap-to-close">' + this.settings.touchCloseText + '</span>');
            }
            $target.removeAttr('title').attr('title', '');
            this.show($target);
        },reposition: function(target, tip, classes) {
            var width, nub, nubHeight, nubWidth, column, objPos;
            tip.css('visibility', 'hidden').show();
            width = target.data('width');
            nub = tip.children('.nub');
            nubHeight = this.outerHeight(nub);
            nubWidth = this.outerHeight(nub);
            objPos = function(obj, top, right, bottom, left, width) {
                return obj.css({'top': (top) ? top : 'auto','bottom': (bottom) ? bottom : 'auto','left': (left) ? left : 'auto','right': (right) ? right : 'auto','width': (width) ? width : 'auto'}).end();
            };
            objPos(tip, (target.offset().top + this.outerHeight(target) + 10), 'auto', 'auto', target.offset().left, width);
            if ($(window).width() < 767) {
                objPos(tip, (target.offset().top + this.outerHeight(target) + 10), 'auto', 'auto', 12.5, $(this.scope).width());
                tip.addClass('tip-override');
                objPos(nub, -nubHeight, 'auto', 'auto', target.offset().left);
            } else {
                var left = target.offset().left;
                if (Foundation.rtl) {
                    left = target.offset().left + target.offset().width - this.outerWidth(tip);
                }
                objPos(tip, (target.offset().top + this.outerHeight(target) + 10), 'auto', 'auto', left, width);
                tip.removeClass('tip-override');
                if (classes && classes.indexOf('tip-top') > -1) {
                    objPos(tip, (target.offset().top - this.outerHeight(tip)), 'auto', 'auto', left, width).removeClass('tip-override');
                } else if (classes && classes.indexOf('tip-left') > -1) {
                    objPos(tip, (target.offset().top + (this.outerHeight(target) / 2) - nubHeight * 2.5), 'auto', 'auto', (target.offset().left - this.outerWidth(tip) - nubHeight), width).removeClass('tip-override');
                } else if (classes && classes.indexOf('tip-right') > -1) {
                    objPos(tip, (target.offset().top + (this.outerHeight(target) / 2) - nubHeight * 2.5), 'auto', 'auto', (target.offset().left + this.outerWidth(target) + nubHeight), width).removeClass('tip-override');
                }
            }
            tip.css('visibility', 'visible').hide();
        },inheritable_classes: function(target) {
            var inheritables = ['tip-top', 'tip-left', 'tip-bottom', 'tip-right', 'noradius'].concat(this.settings.additionalInheritableClasses), classes = target.attr('class'), filtered = classes ? $.map(classes.split(' '), function(el, i) {
                if ($.inArray(el, inheritables) !== -1) {
                    return el;
                }
            }).join(' ') : '';
            return $.trim(filtered);
        },show: function($target) {
            var $tip = this.getTip($target);
            this.reposition($target, $tip, $target.attr('class'));
            $tip.fadeIn(150);
        },hide: function($target) {
            var $tip = this.getTip($target);
            $tip.fadeOut(150);
        },reload: function() {
            var $self = $(this);
            return ($self.data('fndtn-tooltips')) ? $self.foundationTooltips('destroy').foundationTooltips('init') : $self.foundationTooltips('init');
        },off: function() {
            $(this.scope).off('.fndtn.tooltip');
            $(this.settings.tooltipClass).each(function(i) {
                $('[data-tooltip]').get(i).attr('title', $(this).text());
            }).remove();
        },reflow: function() {
        }};
}(Foundation.zj, this, this.document));
;
(function($, window, document, undefined) {
    'use strict';
    Foundation.libs.topbar = {name: 'topbar',version: '4.3.2',settings: {index: 0,stickyClass: 'sticky',custom_back_text: true,back_text: 'Back',is_hover: true,mobile_show_parent_link: false,scrolltop: true,init: false},init: function(section, method, options) {
            Foundation.inherit(this, 'data_options addCustomRule');
            var self = this;
            if (typeof method === 'object') {
                $.extend(true, this.settings, method);
            } else if (typeof options !== 'undefined') {
                $.extend(true, this.settings, options);
            }
            if (typeof method !== 'string') {
                $('.top-bar, [data-topbar]').each(function() {
                    $.extend(true, self.settings, self.data_options($(this)));
                    self.settings.$w = $(window);
                    self.settings.$topbar = $(this);
                    self.settings.$section = self.settings.$topbar.find('section');
                    self.settings.$titlebar = self.settings.$topbar.children('ul').first();
                    self.settings.$topbar.data('index', 0);
                    var topbarContainer = self.settings.$topbar.parent();
                    if (topbarContainer.hasClass('fixed') || topbarContainer.hasClass(self.settings.stickyClass)) {
                        self.settings.$topbar.data('height', self.outerHeight(topbarContainer));
                        self.settings.$topbar.data('stickyoffset', topbarContainer.offset().top);
                    } else {
                        self.settings.$topbar.data('height', self.outerHeight(self.settings.$topbar));
                    }
                    var breakpoint = $("<div class='top-bar-js-breakpoint'/>").insertAfter(self.settings.$topbar);
                    self.settings.breakPoint = breakpoint.width();
                    breakpoint.remove();
                    self.assemble();
                    if (self.settings.is_hover) {
                        self.settings.$topbar.find('.has-dropdown').addClass('not-click');
                    }
                    self.addCustomRule('.f-topbar-fixed { padding-top: ' + self.settings.$topbar.data('height') + 'px }');
                    if (self.settings.$topbar.parent().hasClass('fixed')) {
                        $('body').addClass('f-topbar-fixed');
                    }
                });
                if (!self.settings.init) {
                    this.events();
                }
                return this.settings.init;
            } else {
                return this[method].call(this, options);
            }
        },toggle: function() {
            var self = this;
            var topbar = $('.top-bar, [data-topbar]'), section = topbar.find('section, .section');
            if (self.breakpoint()) {
                if (!self.rtl) {
                    section.css({left: '0%'});
                    section.find('>.name').css({left: '100%'});
                } else {
                    section.css({right: '0%'});
                    section.find('>.name').css({right: '100%'});
                }
                section.find('li.moved').removeClass('moved');
                topbar.data('index', 0);
                topbar.toggleClass('expanded').css('height', '');
            }
            if (self.settings.scrolltop) 
            {
                if (!topbar.hasClass('expanded')) {
                    if (topbar.hasClass('fixed')) {
                        topbar.parent().addClass('fixed');
                        topbar.removeClass('fixed');
                        $('body').addClass('f-topbar-fixed');
                    }
                } else if (topbar.parent().hasClass('fixed')) {
                    if (self.settings.scrolltop) {
                        topbar.parent().removeClass('fixed');
                        topbar.addClass('fixed');
                        $('body').removeClass('f-topbar-fixed');
                        window.scrollTo(0, 0);
                    } else {
                        topbar.parent().removeClass('expanded');
                    }
                }
            } else {
                if (topbar.parent().hasClass(self.settings.stickyClass)) {
                    topbar.parent().addClass('fixed');
                }
                if (topbar.parent().hasClass('fixed')) {
                    if (!topbar.hasClass('expanded')) {
                        topbar.removeClass('fixed');
                        topbar.parent().removeClass('expanded');
                        self.updateStickyPositioning();
                    } else {
                        topbar.addClass('fixed');
                        topbar.parent().addClass('expanded');
                    }
                }
            }
        },timer: null,events: function() {
            var self = this;
            $(this.scope).off('.fndtn.topbar').on('click.fndtn.topbar', '.top-bar .toggle-topbar, [data-topbar] .toggle-topbar', function(e) {
                e.preventDefault();
                self.toggle();
            }).on('click.fndtn.topbar', '.top-bar li.has-dropdown', function(e) {
                var li = $(this), target = $(e.target), topbar = li.closest('[data-topbar], .top-bar'), is_hover = topbar.data('topbar');
                if (target.data('revealId')) {
                    self.toggle();
                    return;
                }
                if (self.breakpoint())
                    return;
                if (self.settings.is_hover && !Modernizr.touch)
                    return;
                e.stopImmediatePropagation();
                if (target[0].nodeName === 'A' && target.parent().hasClass('has-dropdown')) {
                    e.preventDefault();
                }
                if (li.hasClass('hover')) {
                    li.removeClass('hover').find('li').removeClass('hover');
                    li.parents('li.hover').removeClass('hover');
                } else {
                    li.addClass('hover');
                }
            }).on('click.fndtn.topbar', '.top-bar .has-dropdown>a, [data-topbar] .has-dropdown>a', function(e) {
                if (self.breakpoint() && $(window).width() != self.settings.breakPoint) {
                    e.preventDefault();
                    var $this = $(this), topbar = $this.closest('.top-bar, [data-topbar]'), section = topbar.find('section, .section'), dropdownHeight = $this.next('.dropdown').outerHeight(), $selectedLi = $this.closest('li');
                    topbar.data('index', topbar.data('index') + 1);
                    $selectedLi.addClass('moved');
                    if (!self.rtl) {
                        section.css({left: -(100 * topbar.data('index')) + '%'});
                        section.find('>.name').css({left: 100 * topbar.data('index') + '%'});
                    } else {
                        section.css({right: -(100 * topbar.data('index')) + '%'});
                        section.find('>.name').css({right: 100 * topbar.data('index') + '%'});
                    }
                    topbar.css('height', self.outerHeight($this.siblings('ul'), true) + self.settings.$topbar.data('height'));
                }
            });
            $(window).on('resize.fndtn.topbar', function() {
                if (typeof self.settings.$topbar === 'undefined') {
                    return;
                }
                var stickyContainer = self.settings.$topbar.parent('.' + this.settings.stickyClass);
                var stickyOffset;
                if (!self.breakpoint()) {
                    var doToggle = self.settings.$topbar.hasClass('expanded');
                    $('.top-bar, [data-topbar]').css('height', '').removeClass('expanded').find('li').removeClass('hover');
                    if (doToggle) {
                        self.toggle();
                    }
                }
                if (stickyContainer.length > 0) {
                    if (stickyContainer.hasClass('fixed')) {
                        stickyContainer.removeClass('fixed');
                        stickyOffset = stickyContainer.offset().top;
                        if ($(document.body).hasClass('f-topbar-fixed')) {
                            stickyOffset -= self.settings.$topbar.data('height');
                        }
                        self.settings.$topbar.data('stickyoffset', stickyOffset);
                        stickyContainer.addClass('fixed');
                    } else {
                        stickyOffset = stickyContainer.offset().top;
                        self.settings.$topbar.data('stickyoffset', stickyOffset);
                    }
                }
            }.bind(this));
            $('body').on('click.fndtn.topbar', function(e) {
                var parent = $(e.target).closest('li').closest('li.hover');
                if (parent.length > 0) {
                    return;
                }
                $('.top-bar li, [data-topbar] li').removeClass('hover');
            });
            $(this.scope).on('click.fndtn', '.top-bar .has-dropdown .back, [data-topbar] .has-dropdown .back', function(e) {
                e.preventDefault();
                var $this = $(this), topbar = $this.closest('.top-bar, [data-topbar]'), section = topbar.find('section, .section'), $movedLi = $this.closest('li.moved'), $previousLevelUl = $movedLi.parent();
                topbar.data('index', topbar.data('index') - 1);
                if (!self.rtl) {
                    section.css({left: -(100 * topbar.data('index')) + '%'});
                    section.find('>.name').css({left: 100 * topbar.data('index') + '%'});
                } else {
                    section.css({right: -(100 * topbar.data('index')) + '%'});
                    section.find('>.name').css({right: 100 * topbar.data('index') + '%'});
                }
                if (topbar.data('index') === 0) {
                    topbar.css('height', '');
                } else {
                    topbar.css('height', self.outerHeight($previousLevelUl, true) + self.settings.$topbar.data('height'));
                }
                setTimeout(function() {
                    $movedLi.removeClass('moved');
                }, 300);
            });
        },breakpoint: function() {
            return $(document).width() <= this.settings.breakPoint || $('html').hasClass('lt-ie9');
        },assemble: function() {
            var self = this;
            this.settings.$section.detach();
            this.settings.$section.find('.has-dropdown>a').each(function() {
                var $link = $(this), $dropdown = $link.siblings('.dropdown'), url = $link.attr('href');
                if (self.settings.mobile_show_parent_link && url && url.length > 1) {
                    var $titleLi = $('<li class="title back js-generated"><h5><a href="#"></a></h5></li><li><a class="parent-link js-generated" href="' + url + '">' + $link.text() + '</a></li>');
                } else {
                    var $titleLi = $('<li class="title back js-generated"><h5><a href="#"></a></h5></li>');
                }
                if (self.settings.custom_back_text == true) {
                    $titleLi.find('h5>a').html(self.settings.back_text);
                } else {
                    $titleLi.find('h5>a').html('&laquo; ' + $link.html());
                }
                $dropdown.prepend($titleLi);
            });
            this.settings.$section.appendTo(this.settings.$topbar);
            this.sticky();
        },height: function(ul) {
            var total = 0, self = this;
            ul.find('> li').each(function() {
                total += self.outerHeight($(this), true);
            });
            return total;
        },sticky: function() {
            var $window = $(window), self = this;
            $window.scroll(function() {
                self.updateStickyPositioning();
            });
        },updateStickyPositioning: function() {
            var klass = '.' + this.settings.stickyClass;
            var $window = $(window);
            if ($(klass).length > 0) {
                var distance = this.settings.$topbar.data('stickyoffset');
                if (!$(klass).hasClass('expanded')) {
                    if ($window.scrollTop() > (distance)) {
                        if (!$(klass).hasClass('fixed')) {
                            $(klass).addClass('fixed');
                            $('body').addClass('f-topbar-fixed');
                        }
                    } else if ($window.scrollTop() <= distance) {
                        if ($(klass).hasClass('fixed')) {
                            $(klass).removeClass('fixed');
                            $('body').removeClass('f-topbar-fixed');
                        }
                    }
                }
            }
        },off: function() {
            $(this.scope).off('.fndtn.topbar');
            $(window).off('.fndtn.topbar');
        },reflow: function() {
        }};
}(Foundation.zj, this, this.document));
jQuery.migrateMute === void 0 && (jQuery.migrateMute = !0), function(e, t, n) {
    function r(n) {
        var r = t.console;
        i[n] || (i[n] = !0, e.migrateWarnings.push(n), r && r.warn && !e.migrateMute && (r.warn("JQMIGRATE: " + n), e.migrateTrace && r.trace && r.trace()))
    }
    function a(t, a, i, o) {
        if (Object.defineProperty)
            try {
                return Object.defineProperty(t, a, {configurable: !0,enumerable: !0,get: function() {
                        return r(o), i
                    },set: function(e) {
                        r(o), i = e
                    }}), n
            } catch (s) {
            }
        e._definePropertyBroken = !0, t[a] = i
    }
    var i = {};
    e.migrateWarnings = [], !e.migrateMute && t.console && t.console.log && t.console.log("JQMIGRATE: Logging is active"), e.migrateTrace === n && (e.migrateTrace = !0), e.migrateReset = function() {
        i = {}, e.migrateWarnings.length = 0
    }, "BackCompat" === document.compatMode && r("jQuery is not compatible with Quirks Mode");
    var o = e("<input/>", {size: 1}).attr("size") && e.attrFn, s = e.attr, u = e.attrHooks.value && e.attrHooks.value.get || function() {
        return null
    }, c = e.attrHooks.value && e.attrHooks.value.set || function() {
        return n
    }, l = /^(?:input|button)$/i, d = /^[238]$/, p = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, f = /^(?:checked|selected)$/i;
    a(e, "attrFn", o || {}, "jQuery.attrFn is deprecated"), e.attr = function(t, a, i, u) {
        var c = a.toLowerCase(), g = t && t.nodeType;
        return u && (4 > s.length && r("jQuery.fn.attr( props, pass ) is deprecated"), t && !d.test(g) && (o ? a in o : e.isFunction(e.fn[a]))) ? e(t)[a](i) : ("type" === a && i !== n && l.test(t.nodeName) && t.parentNode && r("Can't change the 'type' of an input or button in IE 6/7/8"), !e.attrHooks[c] && p.test(c) && (e.attrHooks[c] = {get: function(t, r) {
                var a, i = e.prop(t, r);
                return i === !0 || "boolean" != typeof i && (a = t.getAttributeNode(r)) && a.nodeValue !== !1 ? r.toLowerCase() : n
            },set: function(t, n, r) {
                var a;
                return n === !1 ? e.removeAttr(t, r) : (a = e.propFix[r] || r, a in t && (t[a] = !0), t.setAttribute(r, r.toLowerCase())), r
            }}, f.test(c) && r("jQuery.fn.attr('" + c + "') may use property instead of attribute")), s.call(e, t, a, i))
    }, e.attrHooks.value = {get: function(e, t) {
            var n = (e.nodeName || "").toLowerCase();
            return "button" === n ? u.apply(this, arguments) : ("input" !== n && "option" !== n && r("jQuery.fn.attr('value') no longer gets properties"), t in e ? e.value : null)
        },set: function(e, t) {
            var a = (e.nodeName || "").toLowerCase();
            return "button" === a ? c.apply(this, arguments) : ("input" !== a && "option" !== a && r("jQuery.fn.attr('value', val) no longer sets properties"), e.value = t, n)
        }};
    var g, h, v = e.fn.init, m = e.parseJSON, y = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    e.fn.init = function(t, n, a) {
        var i;
        return t && "string" == typeof t && !e.isPlainObject(n) && (i = y.exec(e.trim(t))) && i[0] && ("<" !== t.charAt(0) && r("$(html) HTML strings must start with '<' character"), i[3] && r("$(html) HTML text after last tag is ignored"), "#" === i[0].charAt(0) && (r("HTML string cannot start with a '#' character"), e.error("JQMIGRATE: Invalid selector string (XSS)")), n && n.context && (n = n.context), e.parseHTML) ? v.call(this, e.parseHTML(i[2], n, !0), n, a) : v.apply(this, arguments)
    }, e.fn.init.prototype = e.fn, e.parseJSON = function(e) {
        return e || null === e ? m.apply(this, arguments) : (r("jQuery.parseJSON requires a valid JSON string"), null)
    }, e.uaMatch = function(e) {
        e = e.toLowerCase();
        var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 > e.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
        return {browser: t[1] || "",version: t[2] || "0"}
    }, e.browser || (g = e.uaMatch(navigator.userAgent), h = {}, g.browser && (h[g.browser] = !0, h.version = g.version), h.chrome ? h.webkit = !0 : h.webkit && (h.safari = !0), e.browser = h), a(e, "browser", e.browser, "jQuery.browser is deprecated"), e.sub = function() {
        function t(e, n) {
            return new t.fn.init(e, n)
        }
        e.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, t.sub = this.sub, t.fn.init = function(r, a) {
            return a && a instanceof e && !(a instanceof t) && (a = t(a)), e.fn.init.call(this, r, a, n)
        }, t.fn.init.prototype = t.fn;
        var n = t(document);
        return r("jQuery.sub() is deprecated"), t
    }, e.ajaxSetup({converters: {"text json": e.parseJSON}});
    var b = e.fn.data;
    e.fn.data = function(t) {
        var a, i, o = this[0];
        return !o || "events" !== t || 1 !== arguments.length || (a = e.data(o, t), i = e._data(o, t), a !== n && a !== i || i === n) ? b.apply(this, arguments) : (r("Use of jQuery.fn.data('events') is deprecated"), i)
    };
    var j = /\/(java|ecma)script/i, w = e.fn.andSelf || e.fn.addBack;
    e.fn.andSelf = function() {
        return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), w.apply(this, arguments)
    }, e.clean || (e.clean = function(t, a, i, o) {
        a = a || document, a = !a.nodeType && a[0] || a, a = a.ownerDocument || a, r("jQuery.clean() is deprecated");
        var s, u, c, l, d = [];
        if (e.merge(d, e.buildFragment(t, a).childNodes), i)
            for (c = function(e) {
                return !e.type || j.test(e.type) ? o ? o.push(e.parentNode ? e.parentNode.removeChild(e) : e) : i.appendChild(e) : n
            }, s = 0; null != (u = d[s]); s++)
                e.nodeName(u, "script") && c(u) || (i.appendChild(u), u.getElementsByTagName !== n && (l = e.grep(e.merge([], u.getElementsByTagName("script")), c), d.splice.apply(d, [s + 1, 0].concat(l)), s += l.length));
        return d
    });
    var Q = e.event.add, x = e.event.remove, k = e.event.trigger, N = e.fn.toggle, T = e.fn.live, M = e.fn.die, S = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess", C = RegExp("\\b(?:" + S + ")\\b"), H = /(?:^|\s)hover(\.\S+|)\b/, A = function(t) {
        return "string" != typeof t || e.event.special.hover ? t : (H.test(t) && r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t && t.replace(H, "mouseenter$1 mouseleave$1"))
    };
    e.event.props && "attrChange" !== e.event.props[0] && e.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), e.event.dispatch && a(e.event, "handle", e.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), e.event.add = function(e, t, n, a, i) {
        e !== document && C.test(t) && r("AJAX events should be attached to document: " + t), Q.call(this, e, A(t || ""), n, a, i)
    }, e.event.remove = function(e, t, n, r, a) {
        x.call(this, e, A(t) || "", n, r, a)
    }, e.fn.error = function() {
        var e = Array.prototype.slice.call(arguments, 0);
        return r("jQuery.fn.error() is deprecated"), e.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e), this)
    }, e.fn.toggle = function(t, n) {
        if (!e.isFunction(t) || !e.isFunction(n))
            return N.apply(this, arguments);
        r("jQuery.fn.toggle(handler, handler...) is deprecated");
        var a = arguments, i = t.guid || e.guid++, o = 0, s = function(n) {
            var r = (e._data(this, "lastToggle" + t.guid) || 0) % o;
            return e._data(this, "lastToggle" + t.guid, r + 1), n.preventDefault(), a[r].apply(this, arguments) || !1
        };
        for (s.guid = i; a.length > o; )
            a[o++].guid = i;
        return this.click(s)
    }, e.fn.live = function(t, n, a) {
        return r("jQuery.fn.live() is deprecated"), T ? T.apply(this, arguments) : (e(this.context).on(t, this.selector, n, a), this)
    }, e.fn.die = function(t, n) {
        return r("jQuery.fn.die() is deprecated"), M ? M.apply(this, arguments) : (e(this.context).off(t, this.selector || "**", n), this)
    }, e.event.trigger = function(e, t, n, a) {
        return n || C.test(e) || r("Global events are undocumented and deprecated"), k.call(this, e, t, n || document, a)
    }, e.each(S.split("|"), function(t, n) {
        e.event.special[n] = {setup: function() {
                var t = this;
                return t !== document && (e.event.add(document, n + "." + e.guid, function() {
                    e.event.trigger(n, null, t, !0)
                }), e._data(this, n, e.guid++)), !1
            },teardown: function() {
                return this !== document && e.event.remove(document, n + "." + e._data(this, n)), !1
            }}
    })
}(jQuery, window);
(function(t) {
    function e(t) {
        return t.replace(/(:|\.)/g, "\\$1")
    }
    var l = "1.4.13", o = {}, s = {exclude: [],excludeWithin: [],offset: 0,direction: "top",scrollElement: null,scrollTarget: null,beforeScroll: function() {
        },afterScroll: function() {
        },easing: "swing",speed: 400,autoCoefficent: 2,preventDefault: !0}, n = function(e) {
        var l = [], o = !1, s = e.dir && "left" == e.dir ? "scrollLeft" : "scrollTop";
        return this.each(function() {
            if (this != document && this != window) {
                var e = t(this);
                e[s]() > 0 ? l.push(this) : (e[s](1), o = e[s]() > 0, o && l.push(this), e[s](0))
            }
        }), l.length || this.each(function() {
            "BODY" === this.nodeName && (l = [this])
        }), "first" === e.el && l.length > 1 && (l = [l[0]]), l
    };
    t.fn.extend({scrollable: function(t) {
            var e = n.call(this, {dir: t});
            return this.pushStack(e)
        },firstScrollable: function(t) {
            var e = n.call(this, {el: "first",dir: t});
            return this.pushStack(e)
        },smoothScroll: function(l, o) {
            if (l = l || {}, "options" === l)
                return o ? this.each(function() {
                    var e = t(this), l = t.extend(e.data("ssOpts") || {}, o);
                    t(this).data("ssOpts", l)
                }) : this.first().data("ssOpts");
            var s = t.extend({}, t.fn.smoothScroll.defaults, l), n = t.smoothScroll.filterPath(location.pathname);
            return this.unbind("click.smoothscroll").bind("click.smoothscroll", function(l) {
                var o = this, r = t(this), i = t.extend({}, s, r.data("ssOpts") || {}), c = s.exclude, a = i.excludeWithin, f = 0, h = 0, u = !0, d = {}, p = location.hostname === o.hostname || !o.hostname, m = i.scrollTarget || (t.smoothScroll.filterPath(o.pathname) || n) === n, S = e(o.hash);
                if (i.scrollTarget || p && m && S) {
                    for (; u && c.length > f; )
                        r.is(e(c[f++])) && (u = !1);
                    for (; u && a.length > h; )
                        r.closest(a[h++]).length && (u = !1)
                } else
                    u = !1;
                u && (i.preventDefault && l.preventDefault(), t.extend(d, i, {scrollTarget: i.scrollTarget || S,link: o}), t.smoothScroll(d))
            }), this
        }}), t.smoothScroll = function(e, l) {
        if ("options" === e && "object" == typeof l)
            return t.extend(o, l);
        var s, n, r, i, c = 0, a = "offset", f = "scrollTop", h = {}, u = {};
        "number" == typeof e ? (s = t.extend({link: null}, t.fn.smoothScroll.defaults, o), r = e) : (s = t.extend({link: null}, t.fn.smoothScroll.defaults, e || {}, o), s.scrollElement && (a = "position", "static" == s.scrollElement.css("position") && s.scrollElement.css("position", "relative"))), f = "left" == s.direction ? "scrollLeft" : f, s.scrollElement ? (n = s.scrollElement, /^(?:HTML|BODY)$/.test(n[0].nodeName) || (c = n[f]())) : n = t("html, body").firstScrollable(s.direction), s.beforeScroll.call(n, s), r = "number" == typeof e ? e : l || t(s.scrollTarget)[a]() && t(s.scrollTarget)[a]()[s.direction] || 0, h[f] = r + c + s.offset, i = s.speed, "auto" === i && (i = h[f] || n.scrollTop(), i /= s.autoCoefficent), u = {duration: i,easing: s.easing,complete: function() {
                s.afterScroll.call(s.link, s)
            }}, s.step && (u.step = s.step), n.length ? n.stop().animate(h, u) : s.afterScroll.call(s.link, s)
    }, t.smoothScroll.version = l, t.smoothScroll.filterPath = function(t) {
        return t.replace(/^\//, "").replace(/(?:index|default).[a-zA-Z]{3,4}$/, "").replace(/\/$/, "")
    }, t.fn.smoothScroll.defaults = s
})(jQuery);
!function(a) {
    a.fn.equalHeights = function() {
        var b = 0, c = a(this);
        return c.each(function() {
            var c = a(this).innerHeight();
            c > b && (b = c)
        }), c.css("height", b)
    }, a("[data-equal]").each(function() {
        var b = a(this), c = b.data("equal");
        b.find(c).equalHeights()
    })
}(jQuery);
$(document).ready(function() {
    var switched = false;
    var updateTables = function() {
        if (($(window).width() < 767) && !switched) {
            switched = true;
            $("table.responsive").each(function(i, element) {
                splitTable($(element));
            });
            return true;
        } 
        else if (switched && ($(window).width() > 767)) {
            switched = false;
            $("table.responsive").each(function(i, element) {
                unsplitTable($(element));
            });
        }
    };
    $(window).load(updateTables);
    $(window).on("redraw", function() {
        switched = false;
        updateTables();
    });
    $(window).on("resize", updateTables);
    function splitTable(original) 
    {
        original.wrap("<div class='table-wrapper' />");
        var copy = original.clone();
        copy.find("td:not(:first-child), th:not(:first-child)").css("display", "none");
        copy.removeClass("responsive");
        original.closest(".table-wrapper").append(copy);
        copy.wrap("<div class='pinned' />");
        original.wrap("<div class='scrollable' />");
        setCellHeights(original, copy);
    }
    function unsplitTable(original) {
        original.closest(".table-wrapper").find(".pinned").remove();
        original.unwrap();
        original.unwrap();
    }
    function setCellHeights(original, copy) {
        var tr = original.find('tr'), tr_copy = copy.find('tr'), heights = [];
        tr.each(function(index) {
            var self = $(this), tx = self.find('th, td');
            tx.each(function() {
                var height = $(this).outerHeight(true);
                heights[index] = heights[index] || 0;
                if (height > heights[index])
                    heights[index] = height;
            });
        });
        tr_copy.each(function(index) {
            $(this).height(heights[index]);
        });
    }
});
(function(e) {
    var t = !1, i = !1, n = {isUrl: function(e) {
            var t = RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i");
            return t.test(e) ? !0 : !1
        },loadContent: function(e, t) {
            e.html(t)
        },addPrefix: function(e) {
            var t = e.attr("id"), i = e.attr("class");
            "string" == typeof t && "" !== t && e.attr("id", t.replace(/([A-Za-z0-9_.\-]+)/g, "sidr-id-$1")), "string" == typeof i && "" !== i && "sidr-inner" !== i && e.attr("class", i.replace(/([A-Za-z0-9_.\-]+)/g, "sidr-class-$1")), e.removeAttr("style")
        },execute: function(n, s, a) {
            "function" == typeof s ? (a = s, s = "sidr") : s || (s = "sidr");
            var r, d, l, c = e("#" + s), u = e(c.data("body")), f = e("html"), p = c.outerWidth(!0), g = c.data("speed"), h = c.data("side"), m = c.data("displace"), v = c.data("onOpen"), y = c.data("onClose"), x = "sidr" === s ? "sidr-open" : "sidr-open " + s + "-open";
            if ("open" === n || "toggle" === n && !c.is(":visible")) {
                if (c.is(":visible") || t)
                    return;
                if (i !== !1)
                    return o.close(i, function() {
                        o.open(s)
                    }), void 0;
                t = !0, "left" === h ? (r = {left: p + "px"}, d = {left: "0px"}) : (r = {right: p + "px"}, d = {right: "0px"}), u.is("body") && (l = f.scrollTop(), f.css("overflow-x", "hidden").scrollTop(l)), m ? u.addClass("sidr-animating").css({width: u.width(),position: "absolute"}).animate(r, g, function() {
                    e(this).addClass(x)
                }) : setTimeout(function() {
                    e(this).addClass(x)
                }, g), c.css("display", "block").animate(d, g, function() {
                    t = !1, i = s, "function" == typeof a && a(s), u.removeClass("sidr-animating")
                }), v()
            } else {
                if (!c.is(":visible") || t)
                    return;
                t = !0, "left" === h ? (r = {left: 0}, d = {left: "-" + p + "px"}) : (r = {right: 0}, d = {right: "-" + p + "px"}), u.is("body") && (l = f.scrollTop(), f.removeAttr("style").scrollTop(l)), u.addClass("sidr-animating").animate(r, g).removeClass(x), c.animate(d, g, function() {
                    c.removeAttr("style").hide(), u.removeAttr("style"), e("html").removeAttr("style"), t = !1, i = !1, "function" == typeof a && a(s), u.removeClass("sidr-animating")
                }), y()
            }
        }}, o = {open: function(e, t) {
            n.execute("open", e, t)
        },close: function(e, t) {
            n.execute("close", e, t)
        },toggle: function(e, t) {
            n.execute("toggle", e, t)
        },toogle: function(e, t) {
            n.execute("toggle", e, t)
        }};
    e.sidr = function(t) {
        return o[t] ? o[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "function" != typeof t && "string" != typeof t && t ? (e.error("Method " + t + " does not exist on jQuery.sidr"), void 0) : o.toggle.apply(this, arguments)
    }, e.fn.sidr = function(t) {
        var i = e.extend({name: "sidr",speed: 200,side: "left",source: null,renaming: !0,body: "body",displace: !0,onOpen: function() {
            },onClose: function() {
            }}, t), s = i.name, a = e("#" + s);
        if (0 === a.length && (a = e("<div />").attr("id", s).appendTo(e("body"))), a.addClass("sidr").addClass(i.side).data({speed: i.speed,side: i.side,body: i.body,displace: i.displace,onOpen: i.onOpen,onClose: i.onClose}), "function" == typeof i.source) {
            var r = i.source(s);
            n.loadContent(a, r)
        } else if ("string" == typeof i.source && n.isUrl(i.source))
            e.get(i.source, function(e) {
                n.loadContent(a, e)
            });
        else if ("string" == typeof i.source) {
            var d = "", l = i.source.split(",");
            if (e.each(l, function(t, i) {
                d += '<div class="sidr-inner">' + e(i).html() + "</div>"
            }), i.renaming) {
                var c = e("<div />").html(d);
                c.find("*").each(function(t, i) {
                    var o = e(i);
                    n.addPrefix(o)
                }), d = c.html()
            }
            n.loadContent(a, d)
        } else
            null !== i.source && e.error("Invalid Sidr Source");
        return this.each(function() {
            var t = e(this), i = t.data("sidr");
            i || (t.data("sidr", s), "ontouchstart" in document.documentElement ? (t.bind("touchstart", function(e) {
                e.originalEvent.touches[0], this.touched = e.timeStamp
            }), t.bind("touchend", function(e) {
                var t = Math.abs(e.timeStamp - this.touched);
                200 > t && (e.preventDefault(), o.toggle(s))
            })) : t.click(function(e) {
                e.preventDefault(), o.toggle(s)
            }))
        })
    }
})(jQuery);
(function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(jQuery)
})(function(e, t) {
    "use strict";
    if (!e.jstree) {
        var i = 0, r = !1, s = !1, n = !1, a = [], d = e("script:last").attr("src"), o = document, c = o.createElement("LI"), l, h;
        c.setAttribute("role", "treeitem"), l = o.createElement("I"), l.className = "jstree-icon jstree-ocl", l.setAttribute("role", "presentation"), c.appendChild(l), l = o.createElement("A"), l.className = "jstree-anchor", l.setAttribute("href", "#"), l.setAttribute("tabindex", "-1"), h = o.createElement("I"), h.className = "jstree-icon jstree-themeicon", h.setAttribute("role", "presentation"), l.appendChild(h), c.appendChild(l), l = h = null, e.jstree = {version: "3.0.8",defaults: {plugins: []},plugins: {},path: d && -1 !== d.indexOf("/") ? d.replace(/\/[^\/]+$/, "") : "",idregex: /[\\:&!^|()\[\]<>@*'+~#";.,=\- \/${}%]/g}, e.jstree.create = function(t, r) {
            var s = new e.jstree.core(++i), n = r;
            return r = e.extend(!0, {}, e.jstree.defaults, r), n && n.plugins && (r.plugins = n.plugins), e.each(r.plugins, function(e, t) {
                "core" !== e && (s = s.plugin(t, r[t]))
            }), s.init(t, r), s
        }, e.jstree.destroy = function() {
            e(".jstree:jstree").jstree("destroy"), e(document).off(".jstree")
        }, e.jstree.core = function(e) {
            this._id = e, this._cnt = 0, this._wrk = null, this._data = {core: {themes: {name: !1,dots: !1,icons: !1},selected: [],last_error: {},working: !1,worker_queue: [],focused: null}}
        }, e.jstree.reference = function(i) {
            var r = null, s = null;
            if (i && i.id && (i = i.id), !s || !s.length)
                try {
                    s = e(i)
                } catch (n) {
                }
            if (!s || !s.length)
                try {
                    s = e("#" + i.replace(e.jstree.idregex, "\\$&"))
                } catch (n) {
                }
            return s && s.length && (s = s.closest(".jstree")).length && (s = s.data("jstree")) ? r = s : e(".jstree").each(function() {
                var s = e(this).data("jstree");
                return s && s._model.data[i] ? (r = s, !1) : t
            }), r
        }, e.fn.jstree = function(i) {
            var r = "string" == typeof i, s = Array.prototype.slice.call(arguments, 1), n = null;
            return i !== !0 || this.length ? (this.each(function() {
                var a = e.jstree.reference(this), d = r && a ? a[i] : null;
                return n = r && d ? d.apply(a, s) : null, a || r || i !== t && !e.isPlainObject(i) || e(this).data("jstree", new e.jstree.create(this, i)), (a && !r || i === !0) && (n = a || !1), null !== n && n !== t ? !1 : t
            }), null !== n && n !== t ? n : this) : !1
        }, e.expr[":"].jstree = e.expr.createPseudo(function(i) {
            return function(i) {
                return e(i).hasClass("jstree") && e(i).data("jstree") !== t
            }
        }), e.jstree.defaults.core = {data: !1,strings: !1,check_callback: !1,error: e.noop,animation: 200,multiple: !0,themes: {name: !1,url: !1,dir: !1,dots: !0,icons: !0,stripes: !1,variant: !1,responsive: !1},expand_selected_onload: !0,worker: !0,force_text: !1}, e.jstree.core.prototype = {plugin: function(t, i) {
                var r = e.jstree.plugins[t];
                return r ? (this._data[t] = {}, r.prototype = this, new r(i, this)) : this
            },init: function(t, i) {
                this._model = {data: {"#": {id: "#",parent: null,parents: [],children: [],children_d: [],state: {loaded: !1}}},changed: [],force_full_redraw: !1,redraw_timeout: !1,default_state: {loaded: !0,opened: !1,selected: !1,disabled: !1}}, this.element = e(t).addClass("jstree jstree-" + this._id), this.settings = i, this.element.bind("destroyed", e.proxy(this.teardown, this)), this._data.core.ready = !1, this._data.core.loaded = !1, this._data.core.rtl = "rtl" === this.element.css("direction"), this.element[this._data.core.rtl ? "addClass" : "removeClass"]("jstree-rtl"), this.element.attr("role", "tree"), this.settings.core.multiple && this.element.attr("aria-multiselectable", !0), this.element.attr("tabindex") || this.element.attr("tabindex", "0"), this.bind(), this.trigger("init"), this._data.core.original_container_html = this.element.find(" > ul > li").clone(!0), this._data.core.original_container_html.find("li").addBack().contents().filter(function() {
                    return 3 === this.nodeType && (!this.nodeValue || /^\s+$/.test(this.nodeValue))
                }).remove(), this.element.html("<ul class='jstree-container-ul jstree-children' role='group'><li id='j" + this._id + "_loading' class='jstree-initial-node jstree-loading jstree-leaf jstree-last' role='tree-item'><i class='jstree-icon jstree-ocl'></i><" + "a class='jstree-anchor' href='#'><i class='jstree-icon jstree-themeicon-hidden'></i>" + this.get_string("Loading ...") + "</a></li></ul>"), this.element.attr("aria-activedescendant", "j" + this._id + "_loading"), this._data.core.li_height = this.get_container_ul().children("li").first().height() || 24, this.trigger("loading"), this.load_node("#")
            },destroy: function(e) {
                if (this._wrk)
                    try {
                        window.URL.revokeObjectURL(this._wrk), this._wrk = null
                    } catch (t) {
                    }
                e || this.element.empty(), this.element.unbind("destroyed", this.teardown), this.teardown()
            },teardown: function() {
                this.unbind(), this.element.removeClass("jstree").removeData("jstree").find("[class^='jstree']").addBack().attr("class", function() {
                    return this.className.replace(/jstree[^ ]*|$/gi, "")
                }), this.element = null
            },bind: function() {
                var i = "", r = null;
                this.element.on("dblclick.jstree", function() {
                    if (document.selection && document.selection.empty)
                        document.selection.empty();
                    else if (window.getSelection) {
                        var e = window.getSelection();
                        try {
                            e.removeAllRanges(), e.collapse()
                        } catch (t) {
                        }
                    }
                }).on("click.jstree", ".jstree-ocl", e.proxy(function(e) {
                    this.toggle_node(e.target)
                }, this)).on("click.jstree", ".jstree-anchor", e.proxy(function(t) {
                    t.preventDefault(), t.currentTarget !== document.activeElement && e(t.currentTarget).focus(), this.activate_node(t.currentTarget, t)
                }, this)).on("keydown.jstree", ".jstree-anchor", e.proxy(function(t) {
                    if ("INPUT" === t.target.tagName)
                        return !0;
                    var i = null;
                    switch (this._data.core.rtl && (37 === t.which ? t.which = 39 : 39 === t.which && (t.which = 37)), t.which) {
                        case 32:
                            t.ctrlKey && (t.type = "click", e(t.currentTarget).trigger(t));
                            break;
                        case 13:
                            t.type = "click", e(t.currentTarget).trigger(t);
                            break;
                        case 37:
                            t.preventDefault(), this.is_open(t.currentTarget) ? this.close_node(t.currentTarget) : (i = this.get_parent(t.currentTarget), i && "#" !== i.id && this.get_node(i, !0).children(".jstree-anchor").focus());
                            break;
                        case 38:
                            t.preventDefault(), i = this.get_prev_dom(t.currentTarget), i && i.length && i.children(".jstree-anchor").focus();
                            break;
                        case 39:
                            t.preventDefault(), this.is_closed(t.currentTarget) ? this.open_node(t.currentTarget, function(e) {
                                this.get_node(e, !0).children(".jstree-anchor").focus()
                            }) : this.is_open(t.currentTarget) && (i = this.get_node(t.currentTarget, !0).children(".jstree-children")[0], i && e(this._firstChild(i)).children(".jstree-anchor").focus());
                            break;
                        case 40:
                            t.preventDefault(), i = this.get_next_dom(t.currentTarget), i && i.length && i.children(".jstree-anchor").focus();
                            break;
                        case 106:
                            this.open_all();
                            break;
                        case 36:
                            t.preventDefault(), i = this._firstChild(this.get_container_ul()[0]), i && e(i).children(".jstree-anchor").filter(":visible").focus();
                            break;
                        case 35:
                            t.preventDefault(), this.element.find(".jstree-anchor").filter(":visible").last().focus()
                    }
                }, this)).on("load_node.jstree", e.proxy(function(t, i) {
                    if (i.status && ("#" !== i.node.id || this._data.core.loaded || (this._data.core.loaded = !0, this._firstChild(this.get_container_ul()[0]) && this.element.attr("aria-activedescendant", this._firstChild(this.get_container_ul()[0]).id), this.trigger("loaded")), !this._data.core.ready && !this.get_container_ul().find(".jstree-loading").length)) {
                        if (this._data.core.ready = !0, this._data.core.selected.length) {
                            if (this.settings.core.expand_selected_onload) {
                                var r = [], s, n;
                                for (s = 0, n = this._data.core.selected.length; n > s; s++)
                                    r = r.concat(this._model.data[this._data.core.selected[s]].parents);
                                for (r = e.vakata.array_unique(r), s = 0, n = r.length; n > s; s++)
                                    this.open_node(r[s], !1, 0)
                            }
                            this.trigger("changed", {action: "ready",selected: this._data.core.selected})
                        }
                        setTimeout(e.proxy(function() {
                            this.trigger("ready")
                        }, this), 0)
                    }
                }, this)).on("keypress.jstree", e.proxy(function(s) {
                    if ("INPUT" === s.target.tagName)
                        return !0;
                    r && clearTimeout(r), r = setTimeout(function() {
                        i = ""
                    }, 500);
                    var n = String.fromCharCode(s.which).toLowerCase(), a = this.element.find(".jstree-anchor").filter(":visible"), d = a.index(document.activeElement) || 0, o = !1;
                    if (i += n, i.length > 1) {
                        if (a.slice(d).each(e.proxy(function(r, s) {
                            return 0 === e(s).text().toLowerCase().indexOf(i) ? (e(s).focus(), o = !0, !1) : t
                        }, this)), o)
                            return;
                        if (a.slice(0, d).each(e.proxy(function(r, s) {
                            return 0 === e(s).text().toLowerCase().indexOf(i) ? (e(s).focus(), o = !0, !1) : t
                        }, this)), o)
                            return
                    }
                    if (RegExp("^" + n + "+$").test(i)) {
                        if (a.slice(d + 1).each(e.proxy(function(i, r) {
                            return e(r).text().toLowerCase().charAt(0) === n ? (e(r).focus(), o = !0, !1) : t
                        }, this)), o)
                            return;
                        if (a.slice(0, d + 1).each(e.proxy(function(i, r) {
                            return e(r).text().toLowerCase().charAt(0) === n ? (e(r).focus(), o = !0, !1) : t
                        }, this)), o)
                            return
                    }
                }, this)).on("init.jstree", e.proxy(function() {
                    var e = this.settings.core.themes;
                    this._data.core.themes.dots = e.dots, this._data.core.themes.stripes = e.stripes, this._data.core.themes.icons = e.icons, this.set_theme(e.name || "default", e.url), this.set_theme_variant(e.variant)
                }, this)).on("loading.jstree", e.proxy(function() {
                    this[this._data.core.themes.dots ? "show_dots" : "hide_dots"](), this[this._data.core.themes.icons ? "show_icons" : "hide_icons"](), this[this._data.core.themes.stripes ? "show_stripes" : "hide_stripes"]()
                }, this)).on("blur.jstree", ".jstree-anchor", e.proxy(function(t) {
                    this._data.core.focused = null, e(t.currentTarget).filter(".jstree-hovered").mouseleave()
                }, this)).on("focus.jstree", ".jstree-anchor", e.proxy(function(t) {
                    var i = this.get_node(t.currentTarget);
                    i && i.id && (this._data.core.focused = i.id), this.element.find(".jstree-hovered").not(t.currentTarget).mouseleave(), e(t.currentTarget).mouseenter()
                }, this)).on("focus.jstree", e.proxy(function() {
                    this._data.core.focused || this.get_node(this.element.attr("aria-activedescendant"), !0).find("> .jstree-anchor").focus()
                }, this)).on("mouseenter.jstree", ".jstree-anchor", e.proxy(function(e) {
                    this.hover_node(e.currentTarget)
                }, this)).on("mouseleave.jstree", ".jstree-anchor", e.proxy(function(e) {
                    this.dehover_node(e.currentTarget)
                }, this))
            },unbind: function() {
                this.element.off(".jstree"), e(document).off(".jstree-" + this._id)
            },trigger: function(e, t) {
                t || (t = {}), t.instance = this, this.element.triggerHandler(e.replace(".jstree", "") + ".jstree", t)
            },get_container: function() {
                return this.element
            },get_container_ul: function() {
                return this.element.children(".jstree-children").first()
            },get_string: function(t) {
                var i = this.settings.core.strings;
                return e.isFunction(i) ? i.call(this, t) : i && i[t] ? i[t] : t
            },_firstChild: function(e) {
                e = e ? e.firstChild : null;
                while (null !== e && 1 !== e.nodeType)
                    e = e.nextSibling;
                return e
            },_nextSibling: function(e) {
                e = e ? e.nextSibling : null;
                while (null !== e && 1 !== e.nodeType)
                    e = e.nextSibling;
                return e
            },_previousSibling: function(e) {
                e = e ? e.previousSibling : null;
                while (null !== e && 1 !== e.nodeType)
                    e = e.previousSibling;
                return e
            },get_node: function(t, i) {
                t && t.id && (t = t.id);
                var r;
                try {
                    if (this._model.data[t])
                        t = this._model.data[t];
                    else if ("string" == typeof t && this._model.data[t.replace(/^#/, "")])
                        t = this._model.data[t.replace(/^#/, "")];
                    else if ("string" == typeof t && (r = e("#" + t.replace(e.jstree.idregex, "\\$&"), this.element)).length && this._model.data[r.closest(".jstree-node").attr("id")])
                        t = this._model.data[r.closest(".jstree-node").attr("id")];
                    else if ((r = e(t, this.element)).length && this._model.data[r.closest(".jstree-node").attr("id")])
                        t = this._model.data[r.closest(".jstree-node").attr("id")];
                    else {
                        if (!(r = e(t, this.element)).length || !r.hasClass("jstree"))
                            return !1;
                        t = this._model.data["#"]
                    }
                    return i && (t = "#" === t.id ? this.element : e("#" + t.id.replace(e.jstree.idregex, "\\$&"), this.element)), t
                } catch (s) {
                    return !1
                }
            },get_path: function(e, t, i) {
                if (e = e.parents ? e : this.get_node(e), !e || "#" === e.id || !e.parents)
                    return !1;
                var r, s, n = [];
                for (n.push(i ? e.id : e.text), r = 0, s = e.parents.length; s > r; r++)
                    n.push(i ? e.parents[r] : this.get_text(e.parents[r]));
                return n = n.reverse().slice(1), t ? n.join(t) : n
            },get_next_dom: function(t, i) {
                var r;
                if (t = this.get_node(t, !0), t[0] === this.element[0]) {
                    r = this._firstChild(this.get_container_ul()[0]);
                    while (r && 0 === r.offsetHeight)
                        r = this._nextSibling(r);
                    return r ? e(r) : !1
                }
                if (!t || !t.length)
                    return !1;
                if (i) {
                    r = t[0];
                    do
                        r = this._nextSibling(r);
                    while (r && 0 === r.offsetHeight);
                    return r ? e(r) : !1
                }
                if (t.hasClass("jstree-open")) {
                    r = this._firstChild(t.children(".jstree-children")[0]);
                    while (r && 0 === r.offsetHeight)
                        r = this._nextSibling(r);
                    if (null !== r)
                        return e(r)
                }
                r = t[0];
                do
                    r = this._nextSibling(r);
                while (r && 0 === r.offsetHeight);
                return null !== r ? e(r) : t.parentsUntil(".jstree", ".jstree-node").next(".jstree-node:visible").first()
            },get_prev_dom: function(t, i) {
                var r;
                if (t = this.get_node(t, !0), t[0] === this.element[0]) {
                    r = this.get_container_ul()[0].lastChild;
                    while (r && 0 === r.offsetHeight)
                        r = this._previousSibling(r);
                    return r ? e(r) : !1
                }
                if (!t || !t.length)
                    return !1;
                if (i) {
                    r = t[0];
                    do
                        r = this._previousSibling(r);
                    while (r && 0 === r.offsetHeight);
                    return r ? e(r) : !1
                }
                r = t[0];
                do
                    r = this._previousSibling(r);
                while (r && 0 === r.offsetHeight);
                if (null !== r) {
                    t = e(r);
                    while (t.hasClass("jstree-open"))
                        t = t.children(".jstree-children").first().children(".jstree-node:visible:last");
                    return t
                }
                return r = t[0].parentNode.parentNode, r && r.className && -1 !== r.className.indexOf("jstree-node") ? e(r) : !1
            },get_parent: function(e) {
                return e = this.get_node(e), e && "#" !== e.id ? e.parent : !1
            },get_children_dom: function(e) {
                return e = this.get_node(e, !0), e[0] === this.element[0] ? this.get_container_ul().children(".jstree-node") : e && e.length ? e.children(".jstree-children").children(".jstree-node") : !1
            },is_parent: function(e) {
                return e = this.get_node(e), e && (e.state.loaded === !1 || e.children.length > 0)
            },is_loaded: function(e) {
                return e = this.get_node(e), e && e.state.loaded
            },is_loading: function(e) {
                return e = this.get_node(e), e && e.state && e.state.loading
            },is_open: function(e) {
                return e = this.get_node(e), e && e.state.opened
            },is_closed: function(e) {
                return e = this.get_node(e), e && this.is_parent(e) && !e.state.opened
            },is_leaf: function(e) {
                return !this.is_parent(e)
            },load_node: function(t, i) {
                var r, s, n, a, d;
                if (e.isArray(t))
                    return this._load_nodes(t.slice(), i), !0;
                if (t = this.get_node(t), !t)
                    return i && i.call(this, t, !1), !1;
                if (t.state.loaded) {
                    for (t.state.loaded = !1, r = 0, s = t.children_d.length; s > r; r++) {
                        for (n = 0, a = t.parents.length; a > n; n++)
                            this._model.data[t.parents[n]].children_d = e.vakata.array_remove_item(this._model.data[t.parents[n]].children_d, t.children_d[r]);
                        this._model.data[t.children_d[r]].state.selected && (d = !0, this._data.core.selected = e.vakata.array_remove_item(this._data.core.selected, t.children_d[r])), delete this._model.data[t.children_d[r]]
                    }
                    t.children = [], t.children_d = [], d && this.trigger("changed", {action: "load_node",node: t,selected: this._data.core.selected})
                }
                return t.state.loading = !0, this.get_node(t, !0).addClass("jstree-loading").attr("aria-busy", !0), this._load_node(t, e.proxy(function(e) {
                    t = this._model.data[t.id], t.state.loading = !1, t.state.loaded = e;
                    var r = this.get_node(t, !0);
                    t.state.loaded && !t.children.length && r && r.length && !r.hasClass("jstree-leaf") && r.removeClass("jstree-closed jstree-open").addClass("jstree-leaf"), r.removeClass("jstree-loading").attr("aria-busy", !1), this.trigger("load_node", {node: t,status: e}), i && i.call(this, t, e)
                }, this)), !0
            },_load_nodes: function(e, t, i) {
                var r = !0, s = function() {
                    this._load_nodes(e, t, !0)
                }, n = this._model.data, a, d;
                for (a = 0, d = e.length; d > a; a++)
                    !n[e[a]] || n[e[a]].state.loaded && i || (this.is_loading(e[a]) || this.load_node(e[a], s), r = !1);
                r && t && !t.done && (t.call(this, e), t.done = !0)
            },load_all: function(e, t) {
                if (e || (e = "#"), e = this.get_node(e), !e)
                    return !1;
                var i = [], r = this._model.data, s = r[e.id].children_d, n, a;
                for (e.state && !e.state.loaded && i.push(e.id), n = 0, a = s.length; a > n; n++)
                    r[s[n]] && r[s[n]].state && !r[s[n]].state.loaded && i.push(s[n]);
                i.length ? this._load_nodes(i, function() {
                    this.load_all(e, t)
                }) : (t && t.call(this, e), this.trigger("load_all", {node: e}))
            },_load_node: function(t, i) {
                var r = this.settings.core.data, s;
                return r ? e.isFunction(r) ? r.call(this, t, e.proxy(function(r) {
                    r === !1 && i.call(this, !1), this["string" == typeof r ? "_append_html_data" : "_append_json_data"](t, "string" == typeof r ? e(r) : r, function(e) {
                        i.call(this, e)
                    })
                }, this)) : "object" == typeof r ? r.url ? (r = e.extend(!0, {}, r), e.isFunction(r.url) && (r.url = r.url.call(this, t)), e.isFunction(r.data) && (r.data = r.data.call(this, t)), e.ajax(r).done(e.proxy(function(r, s, n) {
                    var a = n.getResponseHeader("Content-Type");
                    return -1 !== a.indexOf("json") || "object" == typeof r ? this._append_json_data(t, r, function(e) {
                        i.call(this, e)
                    }) : -1 !== a.indexOf("html") || "string" == typeof r ? this._append_html_data(t, e(r), function(e) {
                        i.call(this, e)
                    }) : (this._data.core.last_error = {error: "ajax",plugin: "core",id: "core_04",reason: "Could not load node",data: JSON.stringify({id: t.id,xhr: n})}, this.settings.core.error.call(this, this._data.core.last_error), i.call(this, !1))
                }, this)).fail(e.proxy(function(e) {
                    i.call(this, !1), this._data.core.last_error = {error: "ajax",plugin: "core",id: "core_04",reason: "Could not load node",data: JSON.stringify({id: t.id,xhr: e})}, this.settings.core.error.call(this, this._data.core.last_error)
                }, this))) : (s = e.isArray(r) || e.isPlainObject(r) ? JSON.parse(JSON.stringify(r)) : r, "#" === t.id ? this._append_json_data(t, s, function(e) {
                    i.call(this, e)
                }) : (this._data.core.last_error = {error: "nodata",plugin: "core",id: "core_05",reason: "Could not load node",data: JSON.stringify({id: t.id})}, this.settings.core.error.call(this, this._data.core.last_error), i.call(this, !1))) : "string" == typeof r ? "#" === t.id ? this._append_html_data(t, e(r), function(e) {
                    i.call(this, e)
                }) : (this._data.core.last_error = {error: "nodata",plugin: "core",id: "core_06",reason: "Could not load node",data: JSON.stringify({id: t.id})}, this.settings.core.error.call(this, this._data.core.last_error), i.call(this, !1)) : i.call(this, !1) : "#" === t.id ? this._append_html_data(t, this._data.core.original_container_html.clone(!0), function(e) {
                    i.call(this, e)
                }) : i.call(this, !1)
            },_node_changed: function(e) {
                e = this.get_node(e), e && this._model.changed.push(e.id)
            },_append_html_data: function(t, i, r) {
                t = this.get_node(t), t.children = [], t.children_d = [];
                var s = i.is("ul") ? i.children() : i, n = t.id, a = [], d = [], o = this._model.data, c = o[n], l = this._data.core.selected.length, h, _, u;
                for (s.each(e.proxy(function(t, i) {
                    h = this._parse_model_from_html(e(i), n, c.parents.concat()), h && (a.push(h), d.push(h), o[h].children_d.length && (d = d.concat(o[h].children_d)))
                }, this)), c.children = a, c.children_d = d, _ = 0, u = c.parents.length; u > _; _++)
                    o[c.parents[_]].children_d = o[c.parents[_]].children_d.concat(d);
                this.trigger("model", {nodes: d,parent: n}), "#" !== n ? (this._node_changed(n), this.redraw()) : (this.get_container_ul().children(".jstree-initial-node").remove(), this.redraw(!0)), this._data.core.selected.length !== l && this.trigger("changed", {action: "model",selected: this._data.core.selected}), r.call(this, !0)
            },_append_json_data: function(t, i, r, s) {
                t = this.get_node(t), t.children = [], t.children_d = [], i.d && (i = i.d, "string" == typeof i && (i = JSON.parse(i))), e.isArray(i) || (i = [i]);
                var n = null, a = {df: this._model.default_state,dat: i,par: t.id,m: this._model.data,t_id: this._id,t_cnt: this._cnt,sel: this._data.core.selected}, d = function(e, t) {
                    e.data && (e = e.data);
                    var i = e.dat, r = e.par, s = [], n = [], a = [], d = e.df, o = e.t_id, c = e.t_cnt, l = e.m, h = l[r], _ = e.sel, u, g, f, p, m = function(e, i, r) {
                        r = r ? r.concat() : [], i && r.unshift(i);
                        var s = "" + e.id, n, o, c, h, _ = {id: s,text: e.text || "",icon: e.icon !== t ? e.icon : !0,parent: i,parents: r,children: e.children || [],children_d: e.children_d || [],data: e.data,state: {},li_attr: {id: !1},a_attr: {href: "#"},original: !1};
                        for (n in d)
                            d.hasOwnProperty(n) && (_.state[n] = d[n]);
                        if (e && e.data && e.data.jstree && e.data.jstree.icon && (_.icon = e.data.jstree.icon), e && e.data && (_.data = e.data, e.data.jstree))
                            for (n in e.data.jstree)
                                e.data.jstree.hasOwnProperty(n) && (_.state[n] = e.data.jstree[n]);
                        if (e && "object" == typeof e.state)
                            for (n in e.state)
                                e.state.hasOwnProperty(n) && (_.state[n] = e.state[n]);
                        if (e && "object" == typeof e.li_attr)
                            for (n in e.li_attr)
                                e.li_attr.hasOwnProperty(n) && (_.li_attr[n] = e.li_attr[n]);
                        if (_.li_attr.id || (_.li_attr.id = s), e && "object" == typeof e.a_attr)
                            for (n in e.a_attr)
                                e.a_attr.hasOwnProperty(n) && (_.a_attr[n] = e.a_attr[n]);
                        for (e && e.children && e.children === !0 && (_.state.loaded = !1, _.children = [], _.children_d = []), l[_.id] = _, n = 0, o = _.children.length; o > n; n++)
                            c = m(l[_.children[n]], _.id, r), h = l[c], _.children_d.push(c), h.children_d.length && (_.children_d = _.children_d.concat(h.children_d));
                        return delete e.data, delete e.children, l[_.id].original = e, _.state.selected && a.push(_.id), _.id
                    }, v = function(e, i, r) {
                        r = r ? r.concat() : [], i && r.unshift(i);
                        var s = !1, n, h, _, u, g;
                        do
                            s = "j" + o + "_" + ++c;
                        while (l[s]);
                        g = {id: !1,text: "string" == typeof e ? e : "",icon: "object" == typeof e && e.icon !== t ? e.icon : !0,parent: i,parents: r,children: [],children_d: [],data: null,state: {},li_attr: {id: !1},a_attr: {href: "#"},original: !1};
                        for (n in d)
                            d.hasOwnProperty(n) && (g.state[n] = d[n]);
                        if (e && e.id && (g.id = "" + e.id), e && e.text && (g.text = e.text), e && e.data && e.data.jstree && e.data.jstree.icon && (g.icon = e.data.jstree.icon), e && e.data && (g.data = e.data, e.data.jstree))
                            for (n in e.data.jstree)
                                e.data.jstree.hasOwnProperty(n) && (g.state[n] = e.data.jstree[n]);
                        if (e && "object" == typeof e.state)
                            for (n in e.state)
                                e.state.hasOwnProperty(n) && (g.state[n] = e.state[n]);
                        if (e && "object" == typeof e.li_attr)
                            for (n in e.li_attr)
                                e.li_attr.hasOwnProperty(n) && (g.li_attr[n] = e.li_attr[n]);
                        if (g.li_attr.id && !g.id && (g.id = "" + g.li_attr.id), g.id || (g.id = s), g.li_attr.id || (g.li_attr.id = g.id), e && "object" == typeof e.a_attr)
                            for (n in e.a_attr)
                                e.a_attr.hasOwnProperty(n) && (g.a_attr[n] = e.a_attr[n]);
                        if (e && e.children && e.children.length) {
                            for (n = 0, h = e.children.length; h > n; n++)
                                _ = v(e.children[n], g.id, r), u = l[_], g.children.push(_), u.children_d.length && (g.children_d = g.children_d.concat(u.children_d));
                            g.children_d = g.children_d.concat(g.children)
                        }
                        return e && e.children && e.children === !0 && (g.state.loaded = !1, g.children = [], g.children_d = []), delete e.data, delete e.children, g.original = e, l[g.id] = g, g.state.selected && a.push(g.id), g.id
                    };
                    if (i.length && i[0].id !== t && i[0].parent !== t) {
                        for (g = 0, f = i.length; f > g; g++)
                            i[g].children || (i[g].children = []), l["" + i[g].id] = i[g];
                        for (g = 0, f = i.length; f > g; g++)
                            l["" + i[g].parent].children.push("" + i[g].id), h.children_d.push("" + i[g].id);
                        for (g = 0, f = h.children.length; f > g; g++)
                            u = m(l[h.children[g]], r, h.parents.concat()), n.push(u), l[u].children_d.length && (n = n.concat(l[u].children_d));
                        for (g = 0, f = h.parents.length; f > g; g++)
                            l[h.parents[g]].children_d = l[h.parents[g]].children_d.concat(n);
                        p = {cnt: c,mod: l,sel: _,par: r,dpc: n,add: a}
                    } else {
                        for (g = 0, f = i.length; f > g; g++)
                            u = v(i[g], r, h.parents.concat()), u && (s.push(u), n.push(u), l[u].children_d.length && (n = n.concat(l[u].children_d)));
                        for (h.children = s, h.children_d = n, g = 0, f = h.parents.length; f > g; g++)
                            l[h.parents[g]].children_d = l[h.parents[g]].children_d.concat(n);
                        p = {cnt: c,mod: l,sel: _,par: r,dpc: n,add: a}
                    }
                    return "undefined" != typeof window && window.document !== t ? p : (postMessage(p), t)
                }, o = function(t, i) {
                    if (this._cnt = t.cnt, this._model.data = t.mod, i) {
                        var s, n, a = t.add, d = t.sel, o = this._data.core.selected.slice(), c = this._model.data;
                        if (d.length !== o.length || e.vakata.array_unique(d.concat(o)).length !== d.length) {
                            for (s = 0, n = d.length; n > s; s++)
                                -1 === e.inArray(d[s], a) && -1 === e.inArray(d[s], o) && (c[d[s]].state.selected = !1);
                            for (s = 0, n = o.length; n > s; s++)
                                -1 === e.inArray(o[s], d) && (c[o[s]].state.selected = !0)
                        }
                    }
                    t.add.length && (this._data.core.selected = this._data.core.selected.concat(t.add)), this.trigger("model", {nodes: t.dpc,parent: t.par}), "#" !== t.par ? (this._node_changed(t.par), this.redraw()) : this.redraw(!0), t.add.length && this.trigger("changed", {action: "model",selected: this._data.core.selected}), r.call(this, !0)
                };
                if (this.settings.core.worker && window.Blob && window.URL && window.Worker)
                    try {
                        null === this._wrk && (this._wrk = window.URL.createObjectURL(new window.Blob(["self.onmessage = " + ("" + d)], {type: "text/javascript"}))), !this._data.core.working || s ? (this._data.core.working = !0, n = new window.Worker(this._wrk), n.onmessage = e.proxy(function(e) {
                            o.call(this, e.data, !0);
                            try {
                                n.terminate(), n = null
                            } catch (t) {
                            }
                            this._data.core.worker_queue.length ? this._append_json_data.apply(this, this._data.core.worker_queue.shift()) : this._data.core.working = !1
                        }, this), a.par ? n.postMessage(a) : this._data.core.worker_queue.length ? this._append_json_data.apply(this, this._data.core.worker_queue.shift()) : this._data.core.working = !1) : this._data.core.worker_queue.push([t, i, r, !0])
                    } catch (c) {
                        o.call(this, d(a), !1), this._data.core.worker_queue.length ? this._append_json_data.apply(this, this._data.core.worker_queue.shift()) : this._data.core.working = !1
                    }
                else
                    o.call(this, d(a), !1)
            },_parse_model_from_html: function(i, r, s) {
                s = s ? [].concat(s) : [], r && s.unshift(r);
                var n, a, d = this._model.data, o = {id: !1,text: !1,icon: !0,parent: r,parents: s,children: [],children_d: [],data: null,state: {},li_attr: {id: !1},a_attr: {href: "#"},original: !1}, c, l, h;
                for (c in this._model.default_state)
                    this._model.default_state.hasOwnProperty(c) && (o.state[c] = this._model.default_state[c]);
                if (l = e.vakata.attributes(i, !0), e.each(l, function(i, r) {
                    return r = e.trim(r), r.length ? (o.li_attr[i] = r, "id" === i && (o.id = "" + r), t) : !0
                }), l = i.children("a").first(), l.length && (l = e.vakata.attributes(l, !0), e.each(l, function(t, i) {
                    i = e.trim(i), i.length && (o.a_attr[t] = i)
                })), l = i.children("a").first().length ? i.children("a").first().clone() : i.clone(), l.children("ins, i, ul").remove(), l = l.html(), l = e("<div />").html(l), o.text = this.settings.core.force_text ? l.text() : l.html(), l = i.data(), o.data = l ? e.extend(!0, {}, l) : null, o.state.opened = i.hasClass("jstree-open"), o.state.selected = i.children("a").hasClass("jstree-clicked"), o.state.disabled = i.children("a").hasClass("jstree-disabled"), o.data && o.data.jstree)
                    for (c in o.data.jstree)
                        o.data.jstree.hasOwnProperty(c) && (o.state[c] = o.data.jstree[c]);
                l = i.children("a").children(".jstree-themeicon"), l.length && (o.icon = l.hasClass("jstree-themeicon-hidden") ? !1 : l.attr("rel")), o.state.icon && (o.icon = o.state.icon), l = i.children("ul").children("li");
                do
                    h = "j" + this._id + "_" + ++this._cnt;
                while (d[h]);
                return o.id = o.li_attr.id ? "" + o.li_attr.id : h, l.length ? (l.each(e.proxy(function(t, i) {
                    n = this._parse_model_from_html(e(i), o.id, s), a = this._model.data[n], o.children.push(n), a.children_d.length && (o.children_d = o.children_d.concat(a.children_d))
                }, this)), o.children_d = o.children_d.concat(o.children)) : i.hasClass("jstree-closed") && (o.state.loaded = !1), o.li_attr["class"] && (o.li_attr["class"] = o.li_attr["class"].replace("jstree-closed", "").replace("jstree-open", "")), o.a_attr["class"] && (o.a_attr["class"] = o.a_attr["class"].replace("jstree-clicked", "").replace("jstree-disabled", "")), d[o.id] = o, o.state.selected && this._data.core.selected.push(o.id), o.id
            },_parse_model_from_flat_json: function(e, i, r) {
                r = r ? r.concat() : [], i && r.unshift(i);
                var s = "" + e.id, n = this._model.data, a = this._model.default_state, d, o, c, l, h = {id: s,text: e.text || "",icon: e.icon !== t ? e.icon : !0,parent: i,parents: r,children: e.children || [],children_d: e.children_d || [],data: e.data,state: {},li_attr: {id: !1},a_attr: {href: "#"},original: !1};
                for (d in a)
                    a.hasOwnProperty(d) && (h.state[d] = a[d]);
                if (e && e.data && e.data.jstree && e.data.jstree.icon && (h.icon = e.data.jstree.icon), e && e.data && (h.data = e.data, e.data.jstree))
                    for (d in e.data.jstree)
                        e.data.jstree.hasOwnProperty(d) && (h.state[d] = e.data.jstree[d]);
                if (e && "object" == typeof e.state)
                    for (d in e.state)
                        e.state.hasOwnProperty(d) && (h.state[d] = e.state[d]);
                if (e && "object" == typeof e.li_attr)
                    for (d in e.li_attr)
                        e.li_attr.hasOwnProperty(d) && (h.li_attr[d] = e.li_attr[d]);
                if (h.li_attr.id || (h.li_attr.id = s), e && "object" == typeof e.a_attr)
                    for (d in e.a_attr)
                        e.a_attr.hasOwnProperty(d) && (h.a_attr[d] = e.a_attr[d]);
                for (e && e.children && e.children === !0 && (h.state.loaded = !1, h.children = [], h.children_d = []), n[h.id] = h, d = 0, o = h.children.length; o > d; d++)
                    c = this._parse_model_from_flat_json(n[h.children[d]], h.id, r), l = n[c], h.children_d.push(c), l.children_d.length && (h.children_d = h.children_d.concat(l.children_d));
                return delete e.data, delete e.children, n[h.id].original = e, h.state.selected && this._data.core.selected.push(h.id), h.id
            },_parse_model_from_json: function(e, i, r) {
                r = r ? r.concat() : [], i && r.unshift(i);
                var s = !1, n, a, d, o, c = this._model.data, l = this._model.default_state, h;
                do
                    s = "j" + this._id + "_" + ++this._cnt;
                while (c[s]);
                h = {id: !1,text: "string" == typeof e ? e : "",icon: "object" == typeof e && e.icon !== t ? e.icon : !0,parent: i,parents: r,children: [],children_d: [],data: null,state: {},li_attr: {id: !1},a_attr: {href: "#"},original: !1};
                for (n in l)
                    l.hasOwnProperty(n) && (h.state[n] = l[n]);
                if (e && e.id && (h.id = "" + e.id), e && e.text && (h.text = e.text), e && e.data && e.data.jstree && e.data.jstree.icon && (h.icon = e.data.jstree.icon), e && e.data && (h.data = e.data, e.data.jstree))
                    for (n in e.data.jstree)
                        e.data.jstree.hasOwnProperty(n) && (h.state[n] = e.data.jstree[n]);
                if (e && "object" == typeof e.state)
                    for (n in e.state)
                        e.state.hasOwnProperty(n) && (h.state[n] = e.state[n]);
                if (e && "object" == typeof e.li_attr)
                    for (n in e.li_attr)
                        e.li_attr.hasOwnProperty(n) && (h.li_attr[n] = e.li_attr[n]);
                if (h.li_attr.id && !h.id && (h.id = "" + h.li_attr.id), h.id || (h.id = s), h.li_attr.id || (h.li_attr.id = h.id), e && "object" == typeof e.a_attr)
                    for (n in e.a_attr)
                        e.a_attr.hasOwnProperty(n) && (h.a_attr[n] = e.a_attr[n]);
                if (e && e.children && e.children.length) {
                    for (n = 0, a = e.children.length; a > n; n++)
                        d = this._parse_model_from_json(e.children[n], h.id, r), o = c[d], h.children.push(d), o.children_d.length && (h.children_d = h.children_d.concat(o.children_d));
                    h.children_d = h.children_d.concat(h.children)
                }
                return e && e.children && e.children === !0 && (h.state.loaded = !1, h.children = [], h.children_d = []), delete e.data, delete e.children, h.original = e, c[h.id] = h, h.state.selected && this._data.core.selected.push(h.id), h.id
            },_redraw: function() {
                var e = this._model.force_full_redraw ? this._model.data["#"].children.concat([]) : this._model.changed.concat([]), t = document.createElement("UL"), i, r, s, n = this._data.core.focused;
                for (r = 0, s = e.length; s > r; r++)
                    i = this.redraw_node(e[r], !0, this._model.force_full_redraw), i && this._model.force_full_redraw && t.appendChild(i);
                this._model.force_full_redraw && (t.className = this.get_container_ul()[0].className, t.setAttribute("role", "group"), this.element.empty().append(t)), null !== n && (i = this.get_node(n, !0), i && i.length && i.children(".jstree-anchor")[0] !== document.activeElement ? i.children(".jstree-anchor").focus() : this._data.core.focused = null), this._model.force_full_redraw = !1, this._model.changed = [], this.trigger("redraw", {nodes: e})
            },redraw: function(e) {
                e && (this._model.force_full_redraw = !0), this._redraw()
            },redraw_node: function(t, i, r, s) {
                var n = this.get_node(t), a = !1, d = !1, o = !1, l = !1, h = !1, _ = !1, u = "", g = document, f = this._model.data, p = !1, m = !1, v = null;
                if (!n)
                    return !1;
                if ("#" === n.id)
                    return this.redraw(!0);
                if (i = i || 0 === n.children.length, t = document.querySelector ? this.element[0].querySelector("#" + (-1 !== "0123456789".indexOf(n.id[0]) ? "\\3" + n.id[0] + " " + n.id.substr(1).replace(e.jstree.idregex, "\\$&") : n.id.replace(e.jstree.idregex, "\\$&"))) : document.getElementById(n.id))
                    t = e(t), r || (a = t.parent().parent()[0], a === this.element[0] && (a = null), d = t.index()), i || !n.children.length || t.children(".jstree-children").length || (i = !0), i || (o = t.children(".jstree-children")[0]), p = t.children(".jstree-anchor")[0] === document.activeElement, t.remove();
                else if (i = !0, !r) {
                    if (a = "#" !== n.parent ? e("#" + n.parent.replace(e.jstree.idregex, "\\$&"), this.element)[0] : null, !(null === a || a && f[n.parent].state.opened))
                        return !1;
                    d = e.inArray(n.id, null === a ? f["#"].children : f[n.parent].children)
                }
                t = c.cloneNode(!0), u = "jstree-node ";
                for (l in n.li_attr)
                    if (n.li_attr.hasOwnProperty(l)) {
                        if ("id" === l)
                            continue;
                        "class" !== l ? t.setAttribute(l, n.li_attr[l]) : u += n.li_attr[l]
                    }
                n.a_attr.id || (n.a_attr.id = n.id + "_anchor"), t.setAttribute("aria-selected", !!n.state.selected), t.setAttribute("aria-level", n.parents.length), t.setAttribute("aria-labelledby", n.a_attr.id), n.state.disabled && t.setAttribute("aria-disabled", !0), n.state.loaded && !n.children.length ? u += " jstree-leaf" : (u += n.state.opened && n.state.loaded ? " jstree-open" : " jstree-closed", t.setAttribute("aria-expanded", n.state.opened && n.state.loaded)), null !== n.parent && f[n.parent].children[f[n.parent].children.length - 1] === n.id && (u += " jstree-last"), t.id = n.id, t.className = u, u = (n.state.selected ? " jstree-clicked" : "") + (n.state.disabled ? " jstree-disabled" : "");
                for (h in n.a_attr)
                    if (n.a_attr.hasOwnProperty(h)) {
                        if ("href" === h && "#" === n.a_attr[h])
                            continue;
                        "class" !== h ? t.childNodes[1].setAttribute(h, n.a_attr[h]) : u += " " + n.a_attr[h]
                    }
                if (u.length && (t.childNodes[1].className = "jstree-anchor " + u), (n.icon && n.icon !== !0 || n.icon === !1) && (n.icon === !1 ? t.childNodes[1].childNodes[0].className += " jstree-themeicon-hidden" : -1 === n.icon.indexOf("/") && -1 === n.icon.indexOf(".") ? t.childNodes[1].childNodes[0].className += " " + n.icon + " jstree-themeicon-custom" : (t.childNodes[1].childNodes[0].style.backgroundImage = "url(" + n.icon + ")", t.childNodes[1].childNodes[0].style.backgroundPosition = "center center", t.childNodes[1].childNodes[0].style.backgroundSize = "auto", t.childNodes[1].childNodes[0].className += " jstree-themeicon-custom")), this.settings.core.force_text ? t.childNodes[1].appendChild(g.createTextNode(n.text)) : t.childNodes[1].innerHTML += n.text, i && n.children.length && (n.state.opened || s) && n.state.loaded) {
                    for (_ = g.createElement("UL"), _.setAttribute("role", "group"), _.className = "jstree-children", l = 0, h = n.children.length; h > l; l++)
                        _.appendChild(this.redraw_node(n.children[l], i, !0));
                    t.appendChild(_)
                }
                if (o && t.appendChild(o), !r) {
                    for (a || (a = this.element[0]), l = 0, h = a.childNodes.length; h > l; l++)
                        if (a.childNodes[l] && a.childNodes[l].className && -1 !== a.childNodes[l].className.indexOf("jstree-children")) {
                            v = a.childNodes[l];
                            break
                        }
                    v || (v = g.createElement("UL"), v.setAttribute("role", "group"), v.className = "jstree-children", a.appendChild(v)), a = v, a.childNodes.length > d ? a.insertBefore(t, a.childNodes[d]) : a.appendChild(t), p && t.childNodes[1].focus()
                }
                return n.state.opened && !n.state.loaded && (n.state.opened = !1, setTimeout(e.proxy(function() {
                    this.open_node(n.id, !1, 0)
                }, this), 0)), t
            },open_node: function(i, r, s) {
                var n, a, d, o;
                if (e.isArray(i)) {
                    for (i = i.slice(), n = 0, a = i.length; a > n; n++)
                        this.open_node(i[n], r, s);
                    return !0
                }
                if (i = this.get_node(i), !i || "#" === i.id)
                    return !1;
                if (s = s === t ? this.settings.core.animation : s, !this.is_closed(i))
                    return r && r.call(this, i, !1), !1;
                if (this.is_loaded(i))
                    d = this.get_node(i, !0), o = this, d.length && (i.children.length && !this._firstChild(d.children(".jstree-children")[0]) && (this.redraw_node(i, !0, !1, !0), d = this.get_node(i, !0)), s ? (this.trigger("before_open", {node: i}), d.children(".jstree-children").css("display", "none").end().removeClass("jstree-closed").addClass("jstree-open").attr("aria-expanded", !0).children(".jstree-children").stop(!0, !0).slideDown(s, function() {
                        this.style.display = "", o.trigger("after_open", {node: i})
                    })) : (this.trigger("before_open", {node: i}), d[0].className = d[0].className.replace("jstree-closed", "jstree-open"), d[0].setAttribute("aria-expanded", !0))), i.state.opened = !0, r && r.call(this, i, !0), d.length || this.trigger("before_open", {node: i}), this.trigger("open_node", {node: i}), s && d.length || this.trigger("after_open", {node: i});
                else {
                    if (this.is_loading(i))
                        return setTimeout(e.proxy(function() {
                            this.open_node(i, r, s)
                        }, this), 500);
                    this.load_node(i, function(e, t) {
                        return t ? this.open_node(e, r, s) : r ? r.call(this, e, !1) : !1
                    })
                }
            },_open_to: function(t) {
                if (t = this.get_node(t), !t || "#" === t.id)
                    return !1;
                var i, r, s = t.parents;
                for (i = 0, r = s.length; r > i; i += 1)
                    "#" !== i && this.open_node(s[i], !1, 0);
                return e("#" + t.id.replace(e.jstree.idregex, "\\$&"), this.element)
            },close_node: function(i, r) {
                var s, n, a, d;
                if (e.isArray(i)) {
                    for (i = i.slice(), s = 0, n = i.length; n > s; s++)
                        this.close_node(i[s], r);
                    return !0
                }
                return i = this.get_node(i), i && "#" !== i.id ? this.is_closed(i) ? !1 : (r = r === t ? this.settings.core.animation : r, a = this, d = this.get_node(i, !0), d.length && (r ? d.children(".jstree-children").attr("style", "display:block !important").end().removeClass("jstree-open").addClass("jstree-closed").attr("aria-expanded", !1).children(".jstree-children").stop(!0, !0).slideUp(r, function() {
                    this.style.display = "", d.children(".jstree-children").remove(), a.trigger("after_close", {node: i})
                }) : (d[0].className = d[0].className.replace("jstree-open", "jstree-closed"), d.attr("aria-expanded", !1).children(".jstree-children").remove())), i.state.opened = !1, this.trigger("close_node", {node: i}), r && d.length || this.trigger("after_close", {node: i}), t) : !1
            },toggle_node: function(i) {
                var r, s;
                if (e.isArray(i)) {
                    for (i = i.slice(), r = 0, s = i.length; s > r; r++)
                        this.toggle_node(i[r]);
                    return !0
                }
                return this.is_closed(i) ? this.open_node(i) : this.is_open(i) ? this.close_node(i) : t
            },open_all: function(e, t, i) {
                if (e || (e = "#"), e = this.get_node(e), !e)
                    return !1;
                var r = "#" === e.id ? this.get_container_ul() : this.get_node(e, !0), s, n, a;
                if (!r.length) {
                    for (s = 0, n = e.children_d.length; n > s; s++)
                        this.is_closed(this._model.data[e.children_d[s]]) && (this._model.data[e.children_d[s]].state.opened = !0);
                    return this.trigger("open_all", {node: e})
                }
                i = i || r, a = this, r = this.is_closed(e) ? r.find(".jstree-closed").addBack() : r.find(".jstree-closed"), r.each(function() {
                    a.open_node(this, function(e, r) {
                        r && this.is_parent(e) && this.open_all(e, t, i)
                    }, t || 0)
                }), 0 === i.find(".jstree-closed").length && this.trigger("open_all", {node: this.get_node(i)})
            },close_all: function(t, i) {
                if (t || (t = "#"), t = this.get_node(t), !t)
                    return !1;
                var r = "#" === t.id ? this.get_container_ul() : this.get_node(t, !0), s = this, n, a;
                if (!r.length) {
                    for (n = 0, a = t.children_d.length; a > n; n++)
                        this._model.data[t.children_d[n]].state.opened = !1;
                    return this.trigger("close_all", {node: t})
                }
                r = this.is_open(t) ? r.find(".jstree-open").addBack() : r.find(".jstree-open"), e(r.get().reverse()).each(function() {
                    s.close_node(this, i || 0)
                }), this.trigger("close_all", {node: t})
            },is_disabled: function(e) {
                return e = this.get_node(e), e && e.state && e.state.disabled
            },enable_node: function(i) {
                var r, s;
                if (e.isArray(i)) {
                    for (i = i.slice(), r = 0, s = i.length; s > r; r++)
                        this.enable_node(i[r]);
                    return !0
                }
                return i = this.get_node(i), i && "#" !== i.id ? (i.state.disabled = !1, this.get_node(i, !0).children(".jstree-anchor").removeClass("jstree-disabled").attr("aria-disabled", !1), this.trigger("enable_node", {node: i}), t) : !1
            },disable_node: function(i) {
                var r, s;
                if (e.isArray(i)) {
                    for (i = i.slice(), r = 0, s = i.length; s > r; r++)
                        this.disable_node(i[r]);
                    return !0
                }
                return i = this.get_node(i), i && "#" !== i.id ? (i.state.disabled = !0, this.get_node(i, !0).children(".jstree-anchor").addClass("jstree-disabled").attr("aria-disabled", !0), this.trigger("disable_node", {node: i}), t) : !1
            },activate_node: function(e, i) {
                if (this.is_disabled(e))
                    return !1;
                if (this._data.core.last_clicked = this._data.core.last_clicked && this._data.core.last_clicked.id !== t ? this.get_node(this._data.core.last_clicked.id) : null, this._data.core.last_clicked && !this._data.core.last_clicked.state.selected && (this._data.core.last_clicked = null), !this._data.core.last_clicked && this._data.core.selected.length && (this._data.core.last_clicked = this.get_node(this._data.core.selected[this._data.core.selected.length - 1])), this.settings.core.multiple && (i.metaKey || i.ctrlKey || i.shiftKey) && (!i.shiftKey || this._data.core.last_clicked && this.get_parent(e) && this.get_parent(e) === this._data.core.last_clicked.parent))
                    if (i.shiftKey) {
                        var r = this.get_node(e).id, s = this._data.core.last_clicked.id, n = this.get_node(this._data.core.last_clicked.parent).children, a = !1, d, o;
                        for (d = 0, o = n.length; o > d; d += 1)
                            n[d] === r && (a = !a), n[d] === s && (a = !a), a || n[d] === r || n[d] === s ? this.select_node(n[d], !0, !1, i) : this.deselect_node(n[d], !0, i);
                        this.trigger("changed", {action: "select_node",node: this.get_node(e),selected: this._data.core.selected,event: i})
                    } else
                        this.is_selected(e) ? this.deselect_node(e, !1, i) : this.select_node(e, !1, !1, i);
                else
                    !this.settings.core.multiple && (i.metaKey || i.ctrlKey || i.shiftKey) && this.is_selected(e) ? this.deselect_node(e, !1, i) : (this.deselect_all(!0), this.select_node(e, !1, !1, i), this._data.core.last_clicked = this.get_node(e));
                this.trigger("activate_node", {node: this.get_node(e)})
            },hover_node: function(e) {
                if (e = this.get_node(e, !0), !e || !e.length || e.children(".jstree-hovered").length)
                    return !1;
                var t = this.element.find(".jstree-hovered"), i = this.element;
                t && t.length && this.dehover_node(t), e.children(".jstree-anchor").addClass("jstree-hovered"), this.trigger("hover_node", {node: this.get_node(e)}), setTimeout(function() {
                    i.attr("aria-activedescendant", e[0].id)
                }, 0)
            },dehover_node: function(e) {
                return e = this.get_node(e, !0), e && e.length && e.children(".jstree-hovered").length ? (e.children(".jstree-anchor").removeClass("jstree-hovered"), this.trigger("dehover_node", {node: this.get_node(e)}), t) : !1
            },select_node: function(i, r, s, n) {
                var a, d, o, c;
                if (e.isArray(i)) {
                    for (i = i.slice(), d = 0, o = i.length; o > d; d++)
                        this.select_node(i[d], r, s, n);
                    return !0
                }
                return i = this.get_node(i), i && "#" !== i.id ? (a = this.get_node(i, !0), i.state.selected || (i.state.selected = !0, this._data.core.selected.push(i.id), s || (a = this._open_to(i)), a && a.length && a.attr("aria-selected", !0).children(".jstree-anchor").addClass("jstree-clicked"), this.trigger("select_node", {node: i,selected: this._data.core.selected,event: n}), r || this.trigger("changed", {action: "select_node",node: i,selected: this._data.core.selected,event: n})), t) : !1
            },deselect_node: function(i, r, s) {
                var n, a, d;
                if (e.isArray(i)) {
                    for (i = i.slice(), n = 0, a = i.length; a > n; n++)
                        this.deselect_node(i[n], r, s);
                    return !0
                }
                return i = this.get_node(i), i && "#" !== i.id ? (d = this.get_node(i, !0), i.state.selected && (i.state.selected = !1, this._data.core.selected = e.vakata.array_remove_item(this._data.core.selected, i.id), d.length && d.attr("aria-selected", !1).children(".jstree-anchor").removeClass("jstree-clicked"), this.trigger("deselect_node", {node: i,selected: this._data.core.selected,event: s}), r || this.trigger("changed", {action: "deselect_node",node: i,selected: this._data.core.selected,event: s})), t) : !1
            },select_all: function(e) {
                var t = this._data.core.selected.concat([]), i, r;
                for (this._data.core.selected = this._model.data["#"].children_d.concat(), i = 0, r = this._data.core.selected.length; r > i; i++)
                    this._model.data[this._data.core.selected[i]] && (this._model.data[this._data.core.selected[i]].state.selected = !0);
                this.redraw(!0), this.trigger("select_all", {selected: this._data.core.selected}), e || this.trigger("changed", {action: "select_all",selected: this._data.core.selected,old_selection: t})
            },deselect_all: function(e) {
                var t = this._data.core.selected.concat([]), i, r;
                for (i = 0, r = this._data.core.selected.length; r > i; i++)
                    this._model.data[this._data.core.selected[i]] && (this._model.data[this._data.core.selected[i]].state.selected = !1);
                this._data.core.selected = [], this.element.find(".jstree-clicked").removeClass("jstree-clicked").parent().attr("aria-selected", !1), this.trigger("deselect_all", {selected: this._data.core.selected,node: t}), e || this.trigger("changed", {action: "deselect_all",selected: this._data.core.selected,old_selection: t})
            },is_selected: function(e) {
                return e = this.get_node(e), e && "#" !== e.id ? e.state.selected : !1
            },get_selected: function(t) {
                return t ? e.map(this._data.core.selected, e.proxy(function(e) {
                    return this.get_node(e)
                }, this)) : this._data.core.selected.slice()
            },get_top_selected: function(t) {
                var i = this.get_selected(!0), r = {}, s, n, a, d;
                for (s = 0, n = i.length; n > s; s++)
                    r[i[s].id] = i[s];
                for (s = 0, n = i.length; n > s; s++)
                    for (a = 0, d = i[s].children_d.length; d > a; a++)
                        r[i[s].children_d[a]] && delete r[i[s].children_d[a]];
                i = [];
                for (s in r)
                    r.hasOwnProperty(s) && i.push(s);
                return t ? e.map(i, e.proxy(function(e) {
                    return this.get_node(e)
                }, this)) : i
            },get_bottom_selected: function(t) {
                var i = this.get_selected(!0), r = [], s, n;
                for (s = 0, n = i.length; n > s; s++)
                    i[s].children.length || r.push(i[s].id);
                return t ? e.map(r, e.proxy(function(e) {
                    return this.get_node(e)
                }, this)) : r
            },get_state: function() {
                var e = {core: {open: [],scroll: {left: this.element.scrollLeft(),top: this.element.scrollTop()},selected: []}}, t;
                for (t in this._model.data)
                    this._model.data.hasOwnProperty(t) && "#" !== t && (this._model.data[t].state.opened && e.core.open.push(t), this._model.data[t].state.selected && e.core.selected.push(t));
                return e
            },set_state: function(i, r) {
                if (i) {
                    if (i.core) {
                        var s, n, a, d;
                        if (i.core.open)
                            return e.isArray(i.core.open) ? (s = !0, n = !1, a = this, e.each(i.core.open.concat([]), function(t, d) {
                                n = a.get_node(d), n && (a.is_loaded(d) ? (a.is_closed(d) && a.open_node(d, !1, 0), i && i.core && i.core.open && e.vakata.array_remove_item(i.core.open, d)) : (a.is_loading(d) || a.open_node(d, e.proxy(function(t, s) {
                                    !s && i && i.core && i.core.open && e.vakata.array_remove_item(i.core.open, t.id), this.set_state(i, r)
                                }, a), 0), s = !1))
                            }), s && (delete i.core.open, this.set_state(i, r)), !1) : (delete i.core.open, this.set_state(i, r), !1);
                        if (i.core.scroll)
                            return i.core.scroll && i.core.scroll.left !== t && this.element.scrollLeft(i.core.scroll.left), i.core.scroll && i.core.scroll.top !== t && this.element.scrollTop(i.core.scroll.top), delete i.core.scroll, this.set_state(i, r), !1;
                        if (i.core.selected)
                            return d = this, this.deselect_all(), e.each(i.core.selected, function(e, t) {
                                d.select_node(t)
                            }), delete i.core.selected, this.set_state(i, r), !1;
                        if (e.isEmptyObject(i.core))
                            return delete i.core, this.set_state(i, r), !1
                    }
                    return e.isEmptyObject(i) ? (i = null, r && r.call(this), this.trigger("set_state"), !1) : !0
                }
                return !1
            },refresh: function(t, i) {
                this._data.core.state = i === !0 ? {} : this.get_state(), i && e.isFunction(i) && (this._data.core.state = i.call(this, this._data.core.state)), this._cnt = 0, this._model.data = {"#": {id: "#",parent: null,parents: [],children: [],children_d: [],state: {loaded: !1}}};
                var r = this.get_container_ul()[0].className;
                t || (this.element.html("<ul class='" + r + "' role='group'><" + "li class='jstree-initial-node jstree-loading jstree-leaf jstree-last' role='treeitem' id='j" + this._id + "_loading'><i class='jstree-icon jstree-ocl'></i><" + "a class='jstree-anchor' href='#'><i class='jstree-icon jstree-themeicon-hidden'></i>" + this.get_string("Loading ...") + "</a></li></ul>"), this.element.attr("aria-activedescendant", "j" + this._id + "_loading")), this.load_node("#", function(t, i) {
                    i && (this.get_container_ul()[0].className = r, this._firstChild(this.get_container_ul()[0]) && this.element.attr("aria-activedescendant", this._firstChild(this.get_container_ul()[0]).id), this.set_state(e.extend(!0, {}, this._data.core.state), function() {
                        this.trigger("refresh")
                    })), this._data.core.state = null
                })
            },refresh_node: function(t) {
                if (t = this.get_node(t), !t || "#" === t.id)
                    return !1;
                var i = [], r = [], s = this._data.core.selected.concat([]);
                r.push(t.id), t.state.opened === !0 && i.push(t.id), this.get_node(t, !0).find(".jstree-open").each(function() {
                    i.push(this.id)
                }), this._load_nodes(r, e.proxy(function(e) {
                    this.open_node(i, !1, 0), this.select_node(this._data.core.selected), this.trigger("refresh_node", {node: t,nodes: e})
                }, this))
            },set_id: function(t, i) {
                if (t = this.get_node(t), !t || "#" === t.id)
                    return !1;
                var r, s, n = this._model.data;
                for (i = "" + i, n[t.parent].children[e.inArray(t.id, n[t.parent].children)] = i, r = 0, s = t.parents.length; s > r; r++)
                    n[t.parents[r]].children_d[e.inArray(t.id, n[t.parents[r]].children_d)] = i;
                for (r = 0, s = t.children.length; s > r; r++)
                    n[t.children[r]].parent = i;
                for (r = 0, s = t.children_d.length; s > r; r++)
                    n[t.children_d[r]].parents[e.inArray(t.id, n[t.children_d[r]].parents)] = i;
                return r = e.inArray(t.id, this._data.core.selected), -1 !== r && (this._data.core.selected[r] = i), r = this.get_node(t.id, !0), r && r.attr("id", i), delete n[t.id], t.id = i, n[i] = t, !0
            },get_text: function(e) {
                return e = this.get_node(e), e && "#" !== e.id ? e.text : !1
            },set_text: function(t, i) {
                var r, s;
                if (e.isArray(t)) {
                    for (t = t.slice(), r = 0, s = t.length; s > r; r++)
                        this.set_text(t[r], i);
                    return !0
                }
                return t = this.get_node(t), t && "#" !== t.id ? (t.text = i, this.get_node(t, !0).length && this.redraw_node(t.id), this.trigger("set_text", {obj: t,text: i}), !0) : !1
            },get_json: function(t, i, r) {
                if (t = this.get_node(t || "#"), !t)
                    return !1;
                i && i.flat && !r && (r = []);
                var s = {id: t.id,text: t.text,icon: this.get_icon(t),li_attr: e.extend(!0, {}, t.li_attr),a_attr: e.extend(!0, {}, t.a_attr),state: {},data: i && i.no_data ? !1 : e.extend(!0, {}, t.data)}, n, a;
                if (i && i.flat ? s.parent = t.parent : s.children = [], !i || !i.no_state)
                    for (n in t.state)
                        t.state.hasOwnProperty(n) && (s.state[n] = t.state[n]);
                if (i && i.no_id && (delete s.id, s.li_attr && s.li_attr.id && delete s.li_attr.id, s.a_attr && s.a_attr.id && delete s.a_attr.id), i && i.flat && "#" !== t.id && r.push(s), !i || !i.no_children)
                    for (n = 0, a = t.children.length; a > n; n++)
                        i && i.flat ? this.get_json(t.children[n], i, r) : s.children.push(this.get_json(t.children[n], i));
                return i && i.flat ? r : "#" === t.id ? s.children : s
            },create_node: function(i, r, s, n, a) {
                if (null === i && (i = "#"), i = this.get_node(i), !i)
                    return !1;
                if (s = s === t ? "last" : s, !("" + s).match(/^(before|after)$/) && !a && !this.is_loaded(i))
                    return this.load_node(i, function() {
                        this.create_node(i, r, s, n, !0)
                    });
                r || (r = {text: this.get_string("New node")}), r.text === t && (r.text = this.get_string("New node"));
                var d, o, c, l;
                switch ("#" === i.id && ("before" === s && (s = "first"), "after" === s && (s = "last")), s) {
                    case "before":
                        d = this.get_node(i.parent), s = e.inArray(i.id, d.children), i = d;
                        break;
                    case "after":
                        d = this.get_node(i.parent), s = e.inArray(i.id, d.children) + 1, i = d;
                        break;
                    case "inside":
                    case "first":
                        s = 0;
                        break;
                    case "last":
                        s = i.children.length;
                        break;
                    default:
                        s || (s = 0)
                }
                if (s > i.children.length && (s = i.children.length), r.id || (r.id = !0), !this.check("create_node", r, i, s))
                    return this.settings.core.error.call(this, this._data.core.last_error), !1;
                if (r.id === !0 && delete r.id, r = this._parse_model_from_json(r, i.id, i.parents.concat()), !r)
                    return !1;
                for (d = this.get_node(r), o = [], o.push(r), o = o.concat(d.children_d), this.trigger("model", {nodes: o,parent: i.id}), i.children_d = i.children_d.concat(o), c = 0, l = i.parents.length; l > c; c++)
                    this._model.data[i.parents[c]].children_d = this._model.data[i.parents[c]].children_d.concat(o);
                for (r = d, d = [], c = 0, l = i.children.length; l > c; c++)
                    d[c >= s ? c + 1 : c] = i.children[c];
                return d[s] = r.id, i.children = d, this.redraw_node(i, !0), n && n.call(this, this.get_node(r)), this.trigger("create_node", {node: this.get_node(r),parent: i.id,position: s}), r.id
            },rename_node: function(t, i) {
                var r, s, n;
                if (e.isArray(t)) {
                    for (t = t.slice(), r = 0, s = t.length; s > r; r++)
                        this.rename_node(t[r], i);
                    return !0
                }
                return t = this.get_node(t), t && "#" !== t.id ? (n = t.text, this.check("rename_node", t, this.get_parent(t), i) ? (this.set_text(t, i), this.trigger("rename_node", {node: t,text: i,old: n}), !0) : (this.settings.core.error.call(this, this._data.core.last_error), !1)) : !1
            },delete_node: function(t) {
                var i, r, s, n, a, d, o, c, l, h;
                if (e.isArray(t)) {
                    for (t = t.slice(), i = 0, r = t.length; r > i; i++)
                        this.delete_node(t[i]);
                    return !0
                }
                if (t = this.get_node(t), !t || "#" === t.id)
                    return !1;
                if (s = this.get_node(t.parent), n = e.inArray(t.id, s.children), h = !1, !this.check("delete_node", t, s, n))
                    return this.settings.core.error.call(this, this._data.core.last_error), !1;
                for (-1 !== n && (s.children = e.vakata.array_remove(s.children, n)), a = t.children_d.concat([]), a.push(t.id), c = 0, l = a.length; l > c; c++) {
                    for (d = 0, o = t.parents.length; o > d; d++)
                        n = e.inArray(a[c], this._model.data[t.parents[d]].children_d), -1 !== n && (this._model.data[t.parents[d]].children_d = e.vakata.array_remove(this._model.data[t.parents[d]].children_d, n));
                    this._model.data[a[c]].state.selected && (h = !0, n = e.inArray(a[c], this._data.core.selected), -1 !== n && (this._data.core.selected = e.vakata.array_remove(this._data.core.selected, n)))
                }
                for (this.trigger("delete_node", {node: t,parent: s.id}), h && this.trigger("changed", {action: "delete_node",node: t,selected: this._data.core.selected,parent: s.id}), c = 0, l = a.length; l > c; c++)
                    delete this._model.data[a[c]];
                return this.redraw_node(s, !0), !0
            },check: function(t, i, r, s, n) {
                i = i && i.id ? i : this.get_node(i), r = r && r.id ? r : this.get_node(r);
                var a = t.match(/^move_node|copy_node|create_node$/i) ? r : i, d = this.settings.core.check_callback;
                return "move_node" !== t && "copy_node" !== t || n && n.is_multi || i.id !== r.id && e.inArray(i.id, r.children) !== s && -1 === e.inArray(r.id, i.children_d) ? (a && a.data && (a = a.data), a && a.functions && (a.functions[t] === !1 || a.functions[t] === !0) ? (a.functions[t] === !1 && (this._data.core.last_error = {error: "check",plugin: "core",id: "core_02",reason: "Node data prevents function: " + t,data: JSON.stringify({chk: t,pos: s,obj: i && i.id ? i.id : !1,par: r && r.id ? r.id : !1})}), a.functions[t]) : d === !1 || e.isFunction(d) && d.call(this, t, i, r, s, n) === !1 || d && d[t] === !1 ? (this._data.core.last_error = {error: "check",plugin: "core",id: "core_03",reason: "User config for core.check_callback prevents function: " + t,data: JSON.stringify({chk: t,pos: s,obj: i && i.id ? i.id : !1,par: r && r.id ? r.id : !1})}, !1) : !0) : (this._data.core.last_error = {error: "check",plugin: "core",id: "core_01",reason: "Moving parent inside child",data: JSON.stringify({chk: t,pos: s,obj: i && i.id ? i.id : !1,par: r && r.id ? r.id : !1})}, !1)
            },last_error: function() {
                return this._data.core.last_error
            },move_node: function(i, r, s, n, a, d) {
                var o, c, l, h, _, u, g, f, p, m, v, j, y, k;
                if (r = this.get_node(r), s = s === t ? 0 : s, !r)
                    return !1;
                if (!("" + s).match(/^(before|after)$/) && !a && !this.is_loaded(r))
                    return this.load_node(r, function() {
                        this.move_node(i, r, s, n, !0)
                    });
                if (e.isArray(i)) {
                    for (i = i.slice(), o = 0, c = i.length; c > o; o++)
                        this.move_node(i[o], r, s, n, a, !0) && (r = i[o], s = "after");
                    return this.redraw(), !0
                }
                if (i = i && i.id ? i : this.get_node(i), !i || "#" === i.id)
                    return !1;
                if (l = "" + (i.parent || "#"), _ = ("" + s).match(/^(before|after)$/) && "#" !== r.id ? this.get_node(r.parent) : r, u = i.instance ? i.instance : this._model.data[i.id] ? this : e.jstree.reference(i.id), g = !u || !u._id || this._id !== u._id, h = u && u._id && l && u._model.data[l] && u._model.data[l].children ? e.inArray(i.id, u._model.data[l].children) : -1, g)
                    return this.copy_node(i, r, s, n, a) ? (u && u.delete_node(i), !0) : !1;
                switch ("#" === r.id && ("before" === s && (s = "first"), "after" === s && (s = "last")), s) {
                    case "before":
                        s = e.inArray(r.id, _.children);
                        break;
                    case "after":
                        s = e.inArray(r.id, _.children) + 1;
                        break;
                    case "inside":
                    case "first":
                        s = 0;
                        break;
                    case "last":
                        s = _.children.length;
                        break;
                    default:
                        s || (s = 0)
                }
                if (s > _.children.length && (s = _.children.length), !this.check("move_node", i, _, s, {core: !0,is_multi: u && u._id && u._id !== this._id,is_foreign: !u || !u._id}))
                    return this.settings.core.error.call(this, this._data.core.last_error), !1;
                if (i.parent === _.id) {
                    for (f = _.children.concat(), p = e.inArray(i.id, f), -1 !== p && (f = e.vakata.array_remove(f, p), s > p && s--), p = [], m = 0, v = f.length; v > m; m++)
                        p[m >= s ? m + 1 : m] = f[m];
                    p[s] = i.id, _.children = p, this._node_changed(_.id), this.redraw("#" === _.id)
                } else {
                    for (p = i.children_d.concat(), p.push(i.id), m = 0, v = i.parents.length; v > m; m++) {
                        for (f = [], k = u._model.data[i.parents[m]].children_d, j = 0, y = k.length; y > j; j++)
                            -1 === e.inArray(k[j], p) && f.push(k[j]);
                        u._model.data[i.parents[m]].children_d = f
                    }
                    for (u._model.data[l].children = e.vakata.array_remove_item(u._model.data[l].children, i.id), m = 0, v = _.parents.length; v > m; m++)
                        this._model.data[_.parents[m]].children_d = this._model.data[_.parents[m]].children_d.concat(p);
                    for (f = [], m = 0, v = _.children.length; v > m; m++)
                        f[m >= s ? m + 1 : m] = _.children[m];
                    for (f[s] = i.id, _.children = f, _.children_d.push(i.id), _.children_d = _.children_d.concat(i.children_d), i.parent = _.id, p = _.parents.concat(), p.unshift(_.id), k = i.parents.length, i.parents = p, p = p.concat(), m = 0, v = i.children_d.length; v > m; m++)
                        this._model.data[i.children_d[m]].parents = this._model.data[i.children_d[m]].parents.slice(0, -1 * k), Array.prototype.push.apply(this._model.data[i.children_d[m]].parents, p);
                    ("#" === l || "#" === _.id) && (this._model.force_full_redraw = !0), this._model.force_full_redraw || (this._node_changed(l), this._node_changed(_.id)), d || this.redraw()
                }
                return n && n.call(this, i, _, s), this.trigger("move_node", {node: i,parent: _.id,position: s,old_parent: l,old_position: h,is_multi: u && u._id && u._id !== this._id,is_foreign: !u || !u._id,old_instance: u,new_instance: this}), !0
            },copy_node: function(i, r, s, n, a, d) {
                var o, c, l, h, _, u, g, f, p, m, v;
                if (r = this.get_node(r), s = s === t ? 0 : s, !r)
                    return !1;
                if (!("" + s).match(/^(before|after)$/) && !a && !this.is_loaded(r))
                    return this.load_node(r, function() {
                        this.copy_node(i, r, s, n, !0)
                    });
                if (e.isArray(i)) {
                    for (i = i.slice(), o = 0, c = i.length; c > o; o++)
                        h = this.copy_node(i[o], r, s, n, a, !0), h && (r = h, s = "after");
                    return this.redraw(), !0
                }
                if (i = i && i.id ? i : this.get_node(i), !i || "#" === i.id)
                    return !1;
                switch (f = "" + (i.parent || "#"), p = ("" + s).match(/^(before|after)$/) && "#" !== r.id ? this.get_node(r.parent) : r, m = i.instance ? i.instance : this._model.data[i.id] ? this : e.jstree.reference(i.id), v = !m || !m._id || this._id !== m._id, "#" === r.id && ("before" === s && (s = "first"), "after" === s && (s = "last")), s) {
                    case "before":
                        s = e.inArray(r.id, p.children);
                        break;
                    case "after":
                        s = e.inArray(r.id, p.children) + 1;
                        break;
                    case "inside":
                    case "first":
                        s = 0;
                        break;
                    case "last":
                        s = p.children.length;
                        break;
                    default:
                        s || (s = 0)
                }
                if (s > p.children.length && (s = p.children.length), !this.check("copy_node", i, p, s, {core: !0,is_multi: m && m._id && m._id !== this._id,is_foreign: !m || !m._id}))
                    return this.settings.core.error.call(this, this._data.core.last_error), !1;
                if (g = m ? m.get_json(i, {no_id: !0,no_data: !0,no_state: !0}) : i, !g)
                    return !1;
                if (g.id === !0 && delete g.id, g = this._parse_model_from_json(g, p.id, p.parents.concat()), !g)
                    return !1;
                for (h = this.get_node(g), i && i.state && i.state.loaded === !1 && (h.state.loaded = !1), l = [], l.push(g), l = l.concat(h.children_d), this.trigger("model", {nodes: l,parent: p.id}), _ = 0, u = p.parents.length; u > _; _++)
                    this._model.data[p.parents[_]].children_d = this._model.data[p.parents[_]].children_d.concat(l);
                for (l = [], _ = 0, u = p.children.length; u > _; _++)
                    l[_ >= s ? _ + 1 : _] = p.children[_];
                return l[s] = h.id, p.children = l, p.children_d.push(h.id), p.children_d = p.children_d.concat(h.children_d), "#" === p.id && (this._model.force_full_redraw = !0), this._model.force_full_redraw || this._node_changed(p.id), d || this.redraw("#" === p.id), n && n.call(this, h, p, s), this.trigger("copy_node", {node: h,original: i,parent: p.id,position: s,old_parent: f,old_position: m && m._id && f && m._model.data[f] && m._model.data[f].children ? e.inArray(i.id, m._model.data[f].children) : -1,is_multi: m && m._id && m._id !== this._id,is_foreign: !m || !m._id,old_instance: m,new_instance: this}), h.id
            },cut: function(i) {
                if (i || (i = this._data.core.selected.concat()), e.isArray(i) || (i = [i]), !i.length)
                    return !1;
                var a = [], d, o, c;
                for (o = 0, c = i.length; c > o; o++)
                    d = this.get_node(i[o]), d && d.id && "#" !== d.id && a.push(d);
                return a.length ? (r = a, n = this, s = "move_node", this.trigger("cut", {node: i}), t) : !1
            },copy: function(i) {
                if (i || (i = this._data.core.selected.concat()), e.isArray(i) || (i = [i]), !i.length)
                    return !1;
                var a = [], d, o, c;
                for (o = 0, c = i.length; c > o; o++)
                    d = this.get_node(i[o]), d && d.id && "#" !== d.id && a.push(d);
                return a.length ? (r = a, n = this, s = "copy_node", this.trigger("copy", {node: i}), t) : !1
            },get_buffer: function() {
                return {mode: s,node: r,inst: n}
            },can_paste: function() {
                return s !== !1 && r !== !1
            },paste: function(e, i) {
                return e = this.get_node(e), e && s && s.match(/^(copy_node|move_node)$/) && r ? (this[s](r, e, i) && this.trigger("paste", {parent: e.id,node: r,mode: s}), r = !1, s = !1, n = !1, t) : !1
            },clear_buffer: function() {
                r = !1, s = !1, n = !1, this.trigger("clear_buffer")
            },edit: function(i, r) {
                if (i = this.get_node(i), !i)
                    return !1;
                if (this.settings.core.check_callback === !1)
                    return this._data.core.last_error = {error: "check",plugin: "core",id: "core_07",reason: "Could not edit node because of check_callback"}, this.settings.core.error.call(this, this._data.core.last_error), !1;
                r = "string" == typeof r ? r : i.text, this.set_text(i, ""), i = this._open_to(i);
                var s = this._data.core.rtl, n = this.element.width(), a = i.children(".jstree-anchor"), d = e("<span>"), o = r, c = e("<div />", {css: {position: "absolute",top: "-200px",left: s ? "0px" : "-1000px",visibility: "hidden"}}).appendTo("body"), l = e("<input />", {value: o,"class": "jstree-rename-input",css: {padding: "0",border: "1px solid silver","box-sizing": "border-box",display: "inline-block",height: this._data.core.li_height + "px",lineHeight: this._data.core.li_height + "px",width: "150px"},blur: e.proxy(function() {
                        var t = d.children(".jstree-rename-input"), r = t.val();
                        "" === r && (r = o), c.remove(), d.replaceWith(a), d.remove(), this.set_text(i, o), this.rename_node(i, e("<div></div>").text(r)[this.settings.core.force_text ? "text" : "html"]()) === !1 && this.set_text(i, o)
                    }, this),keydown: function(e) {
                        var t = e.which;
                        27 === t && (this.value = o), (27 === t || 13 === t || 37 === t || 38 === t || 39 === t || 40 === t || 32 === t) && e.stopImmediatePropagation(), (27 === t || 13 === t) && (e.preventDefault(), this.blur())
                    },click: function(e) {
                        e.stopImmediatePropagation()
                    },mousedown: function(e) {
                        e.stopImmediatePropagation()
                    },keyup: function(e) {
                        l.width(Math.min(c.text("pW" + this.value).width(), n))
                    },keypress: function(e) {
                        return 13 === e.which ? !1 : t
                    }}), h = {fontFamily: a.css("fontFamily") || "",fontSize: a.css("fontSize") || "",fontWeight: a.css("fontWeight") || "",fontStyle: a.css("fontStyle") || "",fontStretch: a.css("fontStretch") || "",fontVariant: a.css("fontVariant") || "",letterSpacing: a.css("letterSpacing") || "",wordSpacing: a.css("wordSpacing") || ""};
                d.attr("class", a.attr("class")).append(a.contents().clone()).append(l), a.replaceWith(d), c.css(h), l.css(h).width(Math.min(c.text("pW" + l[0].value).width(), n))[0].select()
            },set_theme: function(t, i) {
                if (!t)
                    return !1;
                if (i === !0) {
                    var r = this.settings.core.themes.dir;
                    r || (r = e.jstree.path + "/themes"), i = r + "/" + t + "/style.css"
                }
                i && -1 === e.inArray(i, a) && (e("head").append('<link rel="stylesheet" href="' + i + '" type="text/css" />'), a.push(i)), this._data.core.themes.name && this.element.removeClass("jstree-" + this._data.core.themes.name), this._data.core.themes.name = t, this.element.addClass("jstree-" + t), this.element[this.settings.core.themes.responsive ? "addClass" : "removeClass"]("jstree-" + t + "-responsive"), this.trigger("set_theme", {theme: t})
            },get_theme: function() {
                return this._data.core.themes.name
            },set_theme_variant: function(e) {
                this._data.core.themes.variant && this.element.removeClass("jstree-" + this._data.core.themes.name + "-" + this._data.core.themes.variant), this._data.core.themes.variant = e, e && this.element.addClass("jstree-" + this._data.core.themes.name + "-" + this._data.core.themes.variant)
            },get_theme_variant: function() {
                return this._data.core.themes.variant
            },show_stripes: function() {
                this._data.core.themes.stripes = !0, this.get_container_ul().addClass("jstree-striped")
            },hide_stripes: function() {
                this._data.core.themes.stripes = !1, this.get_container_ul().removeClass("jstree-striped")
            },toggle_stripes: function() {
                this._data.core.themes.stripes ? this.hide_stripes() : this.show_stripes()
            },show_dots: function() {
                this._data.core.themes.dots = !0, this.get_container_ul().removeClass("jstree-no-dots")
            },hide_dots: function() {
                this._data.core.themes.dots = !1, this.get_container_ul().addClass("jstree-no-dots")
            },toggle_dots: function() {
                this._data.core.themes.dots ? this.hide_dots() : this.show_dots()
            },show_icons: function() {
                this._data.core.themes.icons = !0, this.get_container_ul().removeClass("jstree-no-icons")
            },hide_icons: function() {
                this._data.core.themes.icons = !1, this.get_container_ul().addClass("jstree-no-icons")
            },toggle_icons: function() {
                this._data.core.themes.icons ? this.hide_icons() : this.show_icons()
            },set_icon: function(t, i) {
                var r, s, n, a;
                if (e.isArray(t)) {
                    for (t = t.slice(), r = 0, s = t.length; s > r; r++)
                        this.set_icon(t[r], i);
                    return !0
                }
                return t = this.get_node(t), t && "#" !== t.id ? (a = t.icon, t.icon = i, n = this.get_node(t, !0).children(".jstree-anchor").children(".jstree-themeicon"), i === !1 ? this.hide_icon(t) : i === !0 ? (n.removeClass("jstree-themeicon-custom " + a).css("background", "").removeAttr("rel"), a === !1 && this.show_icon(t)) : -1 === i.indexOf("/") && -1 === i.indexOf(".") ? (n.removeClass(a).css("background", ""), n.addClass(i + " jstree-themeicon-custom").attr("rel", i), a === !1 && this.show_icon(t)) : (n.removeClass(a).css("background", ""), n.addClass("jstree-themeicon-custom").css("background", "url('" + i + "') center center no-repeat").attr("rel", i), a === !1 && this.show_icon(t)), !0) : !1
            },get_icon: function(e) {
                return e = this.get_node(e), e && "#" !== e.id ? e.icon : !1
            },hide_icon: function(t) {
                var i, r;
                if (e.isArray(t)) {
                    for (t = t.slice(), i = 0, r = t.length; r > i; i++)
                        this.hide_icon(t[i]);
                    return !0
                }
                return t = this.get_node(t), t && "#" !== t ? (t.icon = !1, this.get_node(t, !0).children(".jstree-anchor").children(".jstree-themeicon").addClass("jstree-themeicon-hidden"), !0) : !1
            },show_icon: function(t) {
                var i, r, s;
                if (e.isArray(t)) {
                    for (t = t.slice(), i = 0, r = t.length; r > i; i++)
                        this.show_icon(t[i]);
                    return !0
                }
                return t = this.get_node(t), t && "#" !== t ? (s = this.get_node(t, !0), t.icon = s.length ? s.children(".jstree-anchor").children(".jstree-themeicon").attr("rel") : !0, t.icon || (t.icon = !0), s.children(".jstree-anchor").children(".jstree-themeicon").removeClass("jstree-themeicon-hidden"), !0) : !1
            }}, e.vakata = {}, e.vakata.attributes = function(t, i) {
            t = e(t)[0];
            var r = i ? {} : [];
            return t && t.attributes && e.each(t.attributes, function(t, s) {
                -1 === e.inArray(s.name.toLowerCase(), ["style", "contenteditable", "hasfocus", "tabindex"]) && null !== s.value && "" !== e.trim(s.value) && (i ? r[s.name] = s.value : r.push(s.name))
            }), r
        }, e.vakata.array_unique = function(e) {
            var t = [], i, r, s;
            for (i = 0, s = e.length; s > i; i++) {
                for (r = 0; i >= r; r++)
                    if (e[i] === e[r])
                        break;
                r === i && t.push(e[i])
            }
            return t
        }, e.vakata.array_remove = function(e, t, i) {
            var r = e.slice((i || t) + 1 || e.length);
            return e.length = 0 > t ? e.length + t : t, e.push.apply(e, r), e
        }, e.vakata.array_remove_item = function(t, i) {
            var r = e.inArray(i, t);
            return -1 !== r ? e.vakata.array_remove(t, r) : t
        };
        var _ = document.createElement("I");
        _.className = "jstree-icon jstree-checkbox", _.setAttribute("role", "presentation"), e.jstree.defaults.checkbox = {visible: !0,three_state: !0,whole_node: !0,keep_selected_style: !0,cascade: "",tie_selection: !0}, e.jstree.plugins.checkbox = function(i, r) {
            this.bind = function() {
                r.bind.call(this), this._data.checkbox.uto = !1, this._data.checkbox.selected = [], this.settings.checkbox.three_state && (this.settings.checkbox.cascade = "up+down+undetermined"), this.element.on("init.jstree", e.proxy(function() {
                    this._data.checkbox.visible = this.settings.checkbox.visible, this.settings.checkbox.keep_selected_style || this.element.addClass("jstree-checkbox-no-clicked"), this.settings.checkbox.tie_selection && this.element.addClass("jstree-checkbox-selection")
                }, this)).on("loading.jstree", e.proxy(function() {
                    this[this._data.checkbox.visible ? "show_checkboxes" : "hide_checkboxes"]()
                }, this)), -1 !== this.settings.checkbox.cascade.indexOf("undetermined") && this.element.on("changed.jstree uncheck_node.jstree check_node.jstree uncheck_all.jstree check_all.jstree move_node.jstree copy_node.jstree redraw.jstree open_node.jstree", e.proxy(function() {
                    this._data.checkbox.uto && clearTimeout(this._data.checkbox.uto), this._data.checkbox.uto = setTimeout(e.proxy(this._undetermined, this), 50)
                }, this)), this.settings.checkbox.tie_selection || this.element.on("model.jstree", e.proxy(function(e, t) {
                    var i = this._model.data, r = i[t.parent], s = t.nodes, n, a;
                    for (n = 0, a = s.length; a > n; n++)
                        i[s[n]].state.checked = i[s[n]].original && i[s[n]].original.state && i[s[n]].original.state.checked, i[s[n]].state.checked && this._data.checkbox.selected.push(s[n])
                }, this)), (-1 !== this.settings.checkbox.cascade.indexOf("up") || -1 !== this.settings.checkbox.cascade.indexOf("down")) && this.element.on("model.jstree", e.proxy(function(t, i) {
                    var r = this._model.data, s = r[i.parent], n = i.nodes, a = [], d, o, c, l, h, _, u = this.settings.checkbox.cascade, g = this.settings.checkbox.tie_selection;
                    if (-1 !== u.indexOf("down"))
                        if (s.state[g ? "selected" : "checked"]) {
                            for (o = 0, c = n.length; c > o; o++)
                                r[n[o]].state[g ? "selected" : "checked"] = !0;
                            this._data[g ? "core" : "checkbox"].selected = this._data[g ? "core" : "checkbox"].selected.concat(n)
                        } else
                            for (o = 0, c = n.length; c > o; o++)
                                if (r[n[o]].state[g ? "selected" : "checked"]) {
                                    for (l = 0, h = r[n[o]].children_d.length; h > l; l++)
                                        r[r[n[o]].children_d[l]].state[g ? "selected" : "checked"] = !0;
                                    this._data[g ? "core" : "checkbox"].selected = this._data[g ? "core" : "checkbox"].selected.concat(r[n[o]].children_d)
                                }
                    if (-1 !== u.indexOf("up")) {
                        for (o = 0, c = s.children_d.length; c > o; o++)
                            r[s.children_d[o]].children.length || a.push(r[s.children_d[o]].parent);
                        for (a = e.vakata.array_unique(a), l = 0, h = a.length; h > l; l++) {
                            s = r[a[l]];
                            while (s && "#" !== s.id) {
                                for (d = 0, o = 0, c = s.children.length; c > o; o++)
                                    d += r[s.children[o]].state[g ? "selected" : "checked"];
                                if (d !== c)
                                    break;
                                s.state[g ? "selected" : "checked"] = !0, this._data[g ? "core" : "checkbox"].selected.push(s.id), _ = this.get_node(s, !0), _ && _.length && _.attr("aria-selected", !0).children(".jstree-anchor").addClass(g ? "jstree-clicked" : "jstree-checked"), s = this.get_node(s.parent)
                            }
                        }
                    }
                    this._data[g ? "core" : "checkbox"].selected = e.vakata.array_unique(this._data[g ? "core" : "checkbox"].selected)
                }, this)).on(this.settings.checkbox.tie_selection ? "select_node.jstree" : "check_node.jstree", e.proxy(function(t, i) {
                    var r = i.node, s = this._model.data, n = this.get_node(r.parent), a = this.get_node(r, !0), d, o, c, l, h = this.settings.checkbox.cascade, _ = this.settings.checkbox.tie_selection;
                    if (-1 !== h.indexOf("down"))
                        for (this._data[_ ? "core" : "checkbox"].selected = e.vakata.array_unique(this._data[_ ? "core" : "checkbox"].selected.concat(r.children_d)), d = 0, o = r.children_d.length; o > d; d++)
                            l = s[r.children_d[d]], l.state[_ ? "selected" : "checked"] = !0, l && l.original && l.original.state && l.original.state.undetermined && (l.original.state.undetermined = !1);
                    if (-1 !== h.indexOf("up"))
                        while (n && "#" !== n.id) {
                            for (c = 0, d = 0, o = n.children.length; o > d; d++)
                                c += s[n.children[d]].state[_ ? "selected" : "checked"];
                            if (c !== o)
                                break;
                            n.state[_ ? "selected" : "checked"] = !0, this._data[_ ? "core" : "checkbox"].selected.push(n.id), l = this.get_node(n, !0), l && l.length && l.attr("aria-selected", !0).children(".jstree-anchor").addClass(_ ? "jstree-clicked" : "jstree-checked"), n = this.get_node(n.parent)
                        }
                    -1 !== h.indexOf("down") && a.length && a.find(".jstree-anchor").addClass(_ ? "jstree-clicked" : "jstree-checked").parent().attr("aria-selected", !0)
                }, this)).on(this.settings.checkbox.tie_selection ? "deselect_all.jstree" : "uncheck_all.jstree", e.proxy(function(e, t) {
                    var i = this.get_node("#"), r = this._model.data, s, n, a;
                    for (s = 0, n = i.children_d.length; n > s; s++)
                        a = r[i.children_d[s]], a && a.original && a.original.state && a.original.state.undetermined && (a.original.state.undetermined = !1)
                }, this)).on(this.settings.checkbox.tie_selection ? "deselect_node.jstree" : "uncheck_node.jstree", e.proxy(function(t, i) {
                    var r = i.node, s = this.get_node(r, !0), n, a, d, o = this.settings.checkbox.cascade, c = this.settings.checkbox.tie_selection;
                    if (r && r.original && r.original.state && r.original.state.undetermined && (r.original.state.undetermined = !1), -1 !== o.indexOf("down"))
                        for (n = 0, a = r.children_d.length; a > n; n++)
                            d = this._model.data[r.children_d[n]], d.state[c ? "selected" : "checked"] = !1, d && d.original && d.original.state && d.original.state.undetermined && (d.original.state.undetermined = !1);
                    if (-1 !== o.indexOf("up"))
                        for (n = 0, a = r.parents.length; a > n; n++)
                            d = this._model.data[r.parents[n]], d.state[c ? "selected" : "checked"] = !1, d && d.original && d.original.state && d.original.state.undetermined && (d.original.state.undetermined = !1), d = this.get_node(r.parents[n], !0), d && d.length && d.attr("aria-selected", !1).children(".jstree-anchor").removeClass(c ? "jstree-clicked" : "jstree-checked");
                    for (d = [], n = 0, a = this._data[c ? "core" : "checkbox"].selected.length; a > n; n++)
                        -1 !== o.indexOf("down") && -1 !== e.inArray(this._data[c ? "core" : "checkbox"].selected[n], r.children_d) || -1 !== o.indexOf("up") && -1 !== e.inArray(this._data[c ? "core" : "checkbox"].selected[n], r.parents) || d.push(this._data[c ? "core" : "checkbox"].selected[n]);
                    this._data[c ? "core" : "checkbox"].selected = e.vakata.array_unique(d), -1 !== o.indexOf("down") && s.length && s.find(".jstree-anchor").removeClass(c ? "jstree-clicked" : "jstree-checked").parent().attr("aria-selected", !1)
                }, this)), -1 !== this.settings.checkbox.cascade.indexOf("up") && this.element.on("delete_node.jstree", e.proxy(function(e, t) {
                    var i = this.get_node(t.parent), r = this._model.data, s, n, a, d, o = this.settings.checkbox.tie_selection;
                    while (i && "#" !== i.id) {
                        for (a = 0, s = 0, n = i.children.length; n > s; s++)
                            a += r[i.children[s]].state[o ? "selected" : "checked"];
                        if (a !== n)
                            break;
                        i.state[o ? "selected" : "checked"] = !0, this._data[o ? "core" : "checkbox"].selected.push(i.id), d = this.get_node(i, !0), d && d.length && d.attr("aria-selected", !0).children(".jstree-anchor").addClass(o ? "jstree-clicked" : "jstree-checked"), i = this.get_node(i.parent)
                    }
                }, this)).on("move_node.jstree", e.proxy(function(t, i) {
                    var r = i.is_multi, s = i.old_parent, n = this.get_node(i.parent), a = this._model.data, d, o, c, l, h, _ = this.settings.checkbox.tie_selection;
                    if (!r) {
                        d = this.get_node(s);
                        while (d && "#" !== d.id) {
                            for (o = 0, c = 0, l = d.children.length; l > c; c++)
                                o += a[d.children[c]].state[_ ? "selected" : "checked"];
                            if (o !== l)
                                break;
                            d.state[_ ? "selected" : "checked"] = !0, this._data[_ ? "core" : "checkbox"].selected.push(d.id), h = this.get_node(d, !0), h && h.length && h.attr("aria-selected", !0).children(".jstree-anchor").addClass(_ ? "jstree-clicked" : "jstree-checked"), d = this.get_node(d.parent)
                        }
                    }
                    d = n;
                    while (d && "#" !== d.id) {
                        for (o = 0, c = 0, l = d.children.length; l > c; c++)
                            o += a[d.children[c]].state[_ ? "selected" : "checked"];
                        if (o === l)
                            d.state[_ ? "selected" : "checked"] || (d.state[_ ? "selected" : "checked"] = !0, this._data[_ ? "core" : "checkbox"].selected.push(d.id), h = this.get_node(d, !0), h && h.length && h.attr("aria-selected", !0).children(".jstree-anchor").addClass(_ ? "jstree-clicked" : "jstree-checked"));
                        else {
                            if (!d.state[_ ? "selected" : "checked"])
                                break;
                            d.state[_ ? "selected" : "checked"] = !1, this._data[_ ? "core" : "checkbox"].selected = e.vakata.array_remove_item(this._data[_ ? "core" : "checkbox"].selected, d.id), h = this.get_node(d, !0), h && h.length && h.attr("aria-selected", !1).children(".jstree-anchor").removeClass(_ ? "jstree-clicked" : "jstree-checked")
                        }
                        d = this.get_node(d.parent)
                    }
                }, this))
            }, this._undetermined = function() {
                var t, i, r = this._model.data, s = this.settings.checkbox.tie_selection, n = this._data[s ? "core" : "checkbox"].selected, a = [], d = this;
                for (t = 0, i = n.length; i > t; t++)
                    r[n[t]] && r[n[t]].parents && (a = a.concat(r[n[t]].parents));
                for (this.element.find(".jstree-closed").not(":has(.jstree-children)").each(function() {
                    var e = d.get_node(this), s;
                    if (e.state.loaded)
                        for (t = 0, i = e.children_d.length; i > t; t++)
                            s = r[e.children_d[t]], !s.state.loaded && s.original && s.original.state && s.original.state.undetermined && s.original.state.undetermined === !0 && (a.push(s.id), a = a.concat(s.parents));
                    else
                        e.original && e.original.state && e.original.state.undetermined && e.original.state.undetermined === !0 && (a.push(e.id), a = a.concat(e.parents))
                }), a = e.vakata.array_unique(a), a = e.vakata.array_remove_item(a, "#"), this.element.find(".jstree-undetermined").removeClass("jstree-undetermined"), t = 0, i = a.length; i > t; t++)
                    r[a[t]].state[s ? "selected" : "checked"] || (n = this.get_node(a[t], !0), n && n.length && n.children(".jstree-anchor").children(".jstree-checkbox").addClass("jstree-undetermined"))
            }, this.redraw_node = function(t, i, s, n) {
                if (t = r.redraw_node.apply(this, arguments)) {
                    var a, d, o = null;
                    for (a = 0, d = t.childNodes.length; d > a; a++)
                        if (t.childNodes[a] && t.childNodes[a].className && -1 !== t.childNodes[a].className.indexOf("jstree-anchor")) {
                            o = t.childNodes[a];
                            break
                        }
                    o && (!this.settings.checkbox.tie_selection && this._model.data[t.id].state.checked && (o.className += " jstree-checked"), o.insertBefore(_.cloneNode(!1), o.childNodes[0]))
                }
                return s || -1 === this.settings.checkbox.cascade.indexOf("undetermined") || (this._data.checkbox.uto && clearTimeout(this._data.checkbox.uto), this._data.checkbox.uto = setTimeout(e.proxy(this._undetermined, this), 50)), t
            }, this.show_checkboxes = function() {
                this._data.core.themes.checkboxes = !0, this.get_container_ul().removeClass("jstree-no-checkboxes")
            }, this.hide_checkboxes = function() {
                this._data.core.themes.checkboxes = !1, this.get_container_ul().addClass("jstree-no-checkboxes")
            }, this.toggle_checkboxes = function() {
                this._data.core.themes.checkboxes ? this.hide_checkboxes() : this.show_checkboxes()
            }, this.is_undetermined = function(t) {
                t = this.get_node(t);
                var i = this.settings.checkbox.cascade, r, s, n = this.settings.checkbox.tie_selection, a = this._data[n ? "core" : "checkbox"].selected, d = this._model.data;
                if (!t || t.state[n ? "selected" : "checked"] === !0 || -1 === i.indexOf("undetermined") || -1 === i.indexOf("down") && -1 === i.indexOf("up"))
                    return !1;
                if (!t.state.loaded && t.original.state.undetermined === !0)
                    return !0;
                for (r = 0, s = t.children_d.length; s > r; r++)
                    if (-1 !== e.inArray(t.children_d[r], a) || !d[t.children_d[r]].state.loaded && d[t.children_d[r]].original.state.undetermined)
                        return !0;
                return !1
            }, this.activate_node = function(i, s) {
                return this.settings.checkbox.tie_selection && (this.settings.checkbox.whole_node || e(s.target).hasClass("jstree-checkbox")) && (s.ctrlKey = !0), this.settings.checkbox.tie_selection || !this.settings.checkbox.whole_node && !e(s.target).hasClass("jstree-checkbox") ? r.activate_node.call(this, i, s) : (this.is_checked(i) ? this.uncheck_node(i, s) : this.check_node(i, s), this.trigger("activate_node", {node: this.get_node(i)}), t)
            }, this.check_node = function(i, r) {
                if (this.settings.checkbox.tie_selection)
                    return this.select_node(i, !1, !0, r);
                var s, n, a, d;
                if (e.isArray(i)) {
                    for (i = i.slice(), n = 0, a = i.length; a > n; n++)
                        this.check_node(i[n], r);
                    return !0
                }
                return i = this.get_node(i), i && "#" !== i.id ? (s = this.get_node(i, !0), i.state.checked || (i.state.checked = !0, this._data.checkbox.selected.push(i.id), s && s.length && s.children(".jstree-anchor").addClass("jstree-checked"), this.trigger("check_node", {node: i,selected: this._data.checkbox.selected,event: r})), t) : !1
            }, this.uncheck_node = function(i, r) {
                if (this.settings.checkbox.tie_selection)
                    return this.deselect_node(i, !1, r);
                var s, n, a;
                if (e.isArray(i)) {
                    for (i = i.slice(), s = 0, n = i.length; n > s; s++)
                        this.uncheck_node(i[s], r);
                    return !0
                }
                return i = this.get_node(i), i && "#" !== i.id ? (a = this.get_node(i, !0), i.state.checked && (i.state.checked = !1, this._data.checkbox.selected = e.vakata.array_remove_item(this._data.checkbox.selected, i.id), a.length && a.children(".jstree-anchor").removeClass("jstree-checked"), this.trigger("uncheck_node", {node: i,selected: this._data.checkbox.selected,event: r})), t) : !1
            }, this.check_all = function() {
                if (this.settings.checkbox.tie_selection)
                    return this.select_all();
                var e = this._data.checkbox.selected.concat([]), t, i;
                for (this._data.checkbox.selected = this._model.data["#"].children_d.concat(), t = 0, i = this._data.checkbox.selected.length; i > t; t++)
                    this._model.data[this._data.checkbox.selected[t]] && (this._model.data[this._data.checkbox.selected[t]].state.checked = !0);
                this.redraw(!0), this.trigger("check_all", {selected: this._data.checkbox.selected})
            }, this.uncheck_all = function() {
                if (this.settings.checkbox.tie_selection)
                    return this.deselect_all();
                var e = this._data.checkbox.selected.concat([]), t, i;
                for (t = 0, i = this._data.checkbox.selected.length; i > t; t++)
                    this._model.data[this._data.checkbox.selected[t]] && (this._model.data[this._data.checkbox.selected[t]].state.checked = !1);
                this._data.checkbox.selected = [], this.element.find(".jstree-checked").removeClass("jstree-checked"), this.trigger("uncheck_all", {selected: this._data.checkbox.selected,node: e})
            }, this.is_checked = function(e) {
                return this.settings.checkbox.tie_selection ? this.is_selected(e) : (e = this.get_node(e), e && "#" !== e.id ? e.state.checked : !1)
            }, this.get_checked = function(t) {
                return this.settings.checkbox.tie_selection ? this.get_selected(t) : t ? e.map(this._data.checkbox.selected, e.proxy(function(e) {
                    return this.get_node(e)
                }, this)) : this._data.checkbox.selected
            }, this.get_top_checked = function(t) {
                if (this.settings.checkbox.tie_selection)
                    return this.get_top_selected(t);
                var i = this.get_checked(!0), r = {}, s, n, a, d;
                for (s = 0, n = i.length; n > s; s++)
                    r[i[s].id] = i[s];
                for (s = 0, n = i.length; n > s; s++)
                    for (a = 0, d = i[s].children_d.length; d > a; a++)
                        r[i[s].children_d[a]] && delete r[i[s].children_d[a]];
                i = [];
                for (s in r)
                    r.hasOwnProperty(s) && i.push(s);
                return t ? e.map(i, e.proxy(function(e) {
                    return this.get_node(e)
                }, this)) : i
            }, this.get_bottom_checked = function(t) {
                if (this.settings.checkbox.tie_selection)
                    return this.get_bottom_selected(t);
                var i = this.get_checked(!0), r = [], s, n;
                for (s = 0, n = i.length; n > s; s++)
                    i[s].children.length || r.push(i[s].id);
                return t ? e.map(r, e.proxy(function(e) {
                    return this.get_node(e)
                }, this)) : r
            }
        }, e.jstree.defaults.contextmenu = {select_node: !0,show_at_node: !0,items: function(t, i) {
                return {create: {separator_before: !1,separator_after: !0,_disabled: !1,label: "Create",action: function(t) {
                            var i = e.jstree.reference(t.reference), r = i.get_node(t.reference);
                            i.create_node(r, {}, "last", function(e) {
                                setTimeout(function() {
                                    i.edit(e)
                                }, 0)
                            })
                        }},rename: {separator_before: !1,separator_after: !1,_disabled: !1,label: "Rename",action: function(t) {
                            var i = e.jstree.reference(t.reference), r = i.get_node(t.reference);
                            i.edit(r)
                        }},remove: {separator_before: !1,icon: !1,separator_after: !1,_disabled: !1,label: "Delete",action: function(t) {
                            var i = e.jstree.reference(t.reference), r = i.get_node(t.reference);
                            i.is_selected(r) ? i.delete_node(i.get_selected()) : i.delete_node(r)
                        }},ccp: {separator_before: !0,icon: !1,separator_after: !1,label: "Edit",action: !1,submenu: {cut: {separator_before: !1,separator_after: !1,label: "Cut",action: function(t) {
                                    var i = e.jstree.reference(t.reference), r = i.get_node(t.reference);
                                    i.is_selected(r) ? i.cut(i.get_selected()) : i.cut(r)
                                }},copy: {separator_before: !1,icon: !1,separator_after: !1,label: "Copy",action: function(t) {
                                    var i = e.jstree.reference(t.reference), r = i.get_node(t.reference);
                                    i.is_selected(r) ? i.copy(i.get_selected()) : i.copy(r)
                                }},paste: {separator_before: !1,icon: !1,_disabled: function(t) {
                                    return !e.jstree.reference(t.reference).can_paste()
                                },separator_after: !1,label: "Paste",action: function(t) {
                                    var i = e.jstree.reference(t.reference), r = i.get_node(t.reference);
                                    i.paste(r)
                                }}}}}
            }}, e.jstree.plugins.contextmenu = function(i, r) {
            this.bind = function() {
                r.bind.call(this);
                var t = 0;
                this.element.on("contextmenu.jstree", ".jstree-anchor", e.proxy(function(e) {
                    e.preventDefault(), t = e.ctrlKey ? e.timeStamp : 0, this.is_loading(e.currentTarget) || this.show_contextmenu(e.currentTarget, e.pageX, e.pageY, e)
                }, this)).on("click.jstree", ".jstree-anchor", e.proxy(function(i) {
                    this._data.contextmenu.visible && (!t || i.timeStamp - t > 250) && e.vakata.context.hide()
                }, this)), e(document).on("context_hide.vakata.jstree", e.proxy(function() {
                    this._data.contextmenu.visible = !1
                }, this))
            }, this.teardown = function() {
                this._data.contextmenu.visible && e.vakata.context.hide(), r.teardown.call(this)
            }, this.show_contextmenu = function(i, r, s, n) {
                if (i = this.get_node(i), !i || "#" === i.id)
                    return !1;
                var a = this.settings.contextmenu, d = this.get_node(i, !0), o = d.children(".jstree-anchor"), c = !1, l = !1;
                (a.show_at_node || r === t || s === t) && (c = o.offset(), r = c.left, s = c.top + this._data.core.li_height), this.settings.contextmenu.select_node && !this.is_selected(i) && this.activate_node(i, n), l = a.items, e.isFunction(l) && (l = l.call(this, i, e.proxy(function(e) {
                    this._show_contextmenu(i, r, s, e)
                }, this))), e.isPlainObject(l) && this._show_contextmenu(i, r, s, l)
            }, this._show_contextmenu = function(t, i, r, s) {
                var n = this.get_node(t, !0), a = n.children(".jstree-anchor");
                e(document).one("context_show.vakata.jstree", e.proxy(function(t, i) {
                    var r = "jstree-contextmenu jstree-" + this.get_theme() + "-contextmenu";
                    e(i.element).addClass(r)
                }, this)), this._data.contextmenu.visible = !0, e.vakata.context.show(a, {x: i,y: r}, s), this.trigger("show_contextmenu", {node: t,x: i,y: r})
            }
        }, function(e) {
            var i = !1, r = {element: !1,reference: !1,position_x: 0,position_y: 0,items: [],html: "",is_visible: !1};
            e.vakata.context = {settings: {hide_onmouseleave: 0,icons: !0},_trigger: function(t) {
                    e(document).triggerHandler("context_" + t + ".vakata", {reference: r.reference,element: r.element,position: {x: r.position_x,y: r.position_y}})
                },_execute: function(t) {
                    return t = r.items[t], t && (!t._disabled || e.isFunction(t._disabled) && !t._disabled({item: t,reference: r.reference,element: r.element})) && t.action ? t.action.call(null, {item: t,reference: r.reference,element: r.element,position: {x: r.position_x,y: r.position_y}}) : !1
                },_parse: function(i, s) {
                    if (!i)
                        return !1;
                    s || (r.html = "", r.items = []);
                    var n = "", a = !1, d;
                    return s && (n += "<ul>"), e.each(i, function(i, s) {
                        return s ? (r.items.push(s), !a && s.separator_before && (n += "<li class='vakata-context-separator'><a href='#' " + (e.vakata.context.settings.icons ? "" : 'style="margin-left:0px;"') + ">&#160;<" + "/a><" + "/li>"), a = !1, n += "<li class='" + (s._class || "") + (s._disabled === !0 || e.isFunction(s._disabled) && s._disabled({item: s,reference: r.reference,element: r.element}) ? " vakata-contextmenu-disabled " : "") + "' " + (s.shortcut ? " data-shortcut='" + s.shortcut + "' " : "") + ">", n += "<a href='#' rel='" + (r.items.length - 1) + "'>", e.vakata.context.settings.icons && (n += "<i ", s.icon && (n += -1 !== s.icon.indexOf("/") || -1 !== s.icon.indexOf(".") ? " style='background:url(\"" + s.icon + "\") center center no-repeat' " : " class='" + s.icon + "' "), n += "></i><span class='vakata-contextmenu-sep'>&#160;</span>"), n += (e.isFunction(s.label) ? s.label({item: i,reference: r.reference,element: r.element}) : s.label) + (s.shortcut ? ' <span class="vakata-contextmenu-shortcut vakata-contextmenu-shortcut-' + s.shortcut + '">' + (s.shortcut_label || "") + "</span>" : "") + "<" + "/a>", s.submenu && (d = e.vakata.context._parse(s.submenu, !0), d && (n += d)), n += "</li>", s.separator_after && (n += "<li class='vakata-context-separator'><a href='#' " + (e.vakata.context.settings.icons ? "" : 'style="margin-left:0px;"') + ">&#160;<" + "/a><" + "/li>", a = !0), t) : !0
                    }), n = n.replace(/<li class\='vakata-context-separator'\><\/li\>$/, ""), s && (n += "</ul>"), s || (r.html = n, e.vakata.context._trigger("parse")), n.length > 10 ? n : !1
                },_show_submenu: function(t) {
                    if (t = e(t), t.length && t.children("ul").length) {
                        var r = t.children("ul"), s = t.offset().left + t.outerWidth(), n = t.offset().top, a = r.width(), d = r.height(), o = e(window).width() + e(window).scrollLeft(), c = e(window).height() + e(window).scrollTop();
                        i ? t[0 > s - (a + 10 + t.outerWidth()) ? "addClass" : "removeClass"]("vakata-context-left") : t[s + a + 10 > o ? "addClass" : "removeClass"]("vakata-context-right"), n + d + 10 > c && r.css("bottom", "-1px"), r.show()
                    }
                },show: function(t, s, n) {
                    var a, d, o, c, l, h, _, u, g = !0;
                    switch (r.element && r.element.length && r.element.width(""), g) {
                        case !s && !t:
                            return !1;
                        case !!s && !!t:
                            r.reference = t, r.position_x = s.x, r.position_y = s.y;
                            break;
                        case !s && !!t:
                            r.reference = t, a = t.offset(), r.position_x = a.left + t.outerHeight(), r.position_y = a.top;
                            break;
                        case !!s && !t:
                            r.position_x = s.x, r.position_y = s.y
                    }
                    t && !n && e(t).data("vakata_contextmenu") && (n = e(t).data("vakata_contextmenu")), e.vakata.context._parse(n) && r.element.html(r.html), r.items.length && (r.element.appendTo("body"), d = r.element, o = r.position_x, c = r.position_y, l = d.width(), h = d.height(), _ = e(window).width() + e(window).scrollLeft(), u = e(window).height() + e(window).scrollTop(), i && (o -= d.outerWidth(), e(window).scrollLeft() + 20 > o && (o = e(window).scrollLeft() + 20)), o + l + 20 > _ && (o = _ - (l + 20)), c + h + 20 > u && (c = u - (h + 20)), r.element.css({left: o,top: c}).show().find("a").first().focus().parent().addClass("vakata-context-hover"), r.is_visible = !0, e.vakata.context._trigger("show"))
                },hide: function() {
                    r.is_visible && (r.element.hide().find("ul").hide().end().find(":focus").blur().end().detach(), r.is_visible = !1, e.vakata.context._trigger("hide"))
                }}, e(function() {
                i = "rtl" === e("body").css("direction");
                var t = !1;
                r.element = e("<ul class='vakata-context'></ul>"), r.element.on("mouseenter", "li", function(i) {
                    i.stopImmediatePropagation(), e.contains(this, i.relatedTarget) || (t && clearTimeout(t), r.element.find(".vakata-context-hover").removeClass("vakata-context-hover").end(), e(this).siblings().find("ul").hide().end().end().parentsUntil(".vakata-context", "li").addBack().addClass("vakata-context-hover"), e.vakata.context._show_submenu(this))
                }).on("mouseleave", "li", function(t) {
                    e.contains(this, t.relatedTarget) || e(this).find(".vakata-context-hover").addBack().removeClass("vakata-context-hover")
                }).on("mouseleave", function(i) {
                    e(this).find(".vakata-context-hover").removeClass("vakata-context-hover"), e.vakata.context.settings.hide_onmouseleave && (t = setTimeout(function(t) {
                        return function() {
                            e.vakata.context.hide()
                        }
                    }(this), e.vakata.context.settings.hide_onmouseleave))
                }).on("click", "a", function(t) {
                    t.preventDefault(), e(this).blur().parent().hasClass("vakata-context-disabled") || e.vakata.context._execute(e(this).attr("rel")) === !1 || e.vakata.context.hide()
                }).on("keydown", "a", function(t) {
                    var i = null;
                    switch (t.which) {
                        case 13:
                        case 32:
                            t.type = "mouseup", t.preventDefault(), e(t.currentTarget).trigger(t);
                            break;
                        case 37:
                            r.is_visible && (r.element.find(".vakata-context-hover").last().closest("li").first().find("ul").hide().find(".vakata-context-hover").removeClass("vakata-context-hover").end().end().children("a").focus(), t.stopImmediatePropagation(), t.preventDefault());
                            break;
                        case 38:
                            r.is_visible && (i = r.element.find("ul:visible").addBack().last().children(".vakata-context-hover").removeClass("vakata-context-hover").prevAll("li:not(.vakata-context-separator)").first(), i.length || (i = r.element.find("ul:visible").addBack().last().children("li:not(.vakata-context-separator)").last()), i.addClass("vakata-context-hover").children("a").focus(), t.stopImmediatePropagation(), t.preventDefault());
                            break;
                        case 39:
                            r.is_visible && (r.element.find(".vakata-context-hover").last().children("ul").show().children("li:not(.vakata-context-separator)").removeClass("vakata-context-hover").first().addClass("vakata-context-hover").children("a").focus(), t.stopImmediatePropagation(), t.preventDefault());
                            break;
                        case 40:
                            r.is_visible && (i = r.element.find("ul:visible").addBack().last().children(".vakata-context-hover").removeClass("vakata-context-hover").nextAll("li:not(.vakata-context-separator)").first(), i.length || (i = r.element.find("ul:visible").addBack().last().children("li:not(.vakata-context-separator)").first()), i.addClass("vakata-context-hover").children("a").focus(), t.stopImmediatePropagation(), t.preventDefault());
                            break;
                        case 27:
                            e.vakata.context.hide(), t.preventDefault();
                            break;
                        default:
                    }
                }).on("keydown", function(e) {
                    e.preventDefault();
                    var t = r.element.find(".vakata-contextmenu-shortcut-" + e.which).parent();
                    t.parent().not(".vakata-context-disabled") && t.click()
                }), e(document).on("mousedown.vakata.jstree", function(t) {
                    r.is_visible && !e.contains(r.element[0], t.target) && e.vakata.context.hide()
                }).on("context_show.vakata.jstree", function(e, t) {
                    r.element.find("li:has(ul)").children("a").addClass("vakata-context-parent"), i && r.element.addClass("vakata-context-rtl").css("direction", "rtl"), r.element.find("ul").hide().end()
                })
            })
        }(e), e.jstree.defaults.dnd = {copy: !0,open_timeout: 500,is_draggable: !0,check_while_dragging: !0,always_copy: !1,inside_pos: 0}, e.jstree.plugins.dnd = function(i, r) {
            this.bind = function() {
                r.bind.call(this), this.element.on("mousedown.jstree touchstart.jstree", ".jstree-anchor", e.proxy(function(i) {
                    var r = this.get_node(i.target), s = this.is_selected(r) ? this.get_selected().length : 1;
                    return r && r.id && "#" !== r.id && (1 === i.which || "touchstart" === i.type) && (this.settings.dnd.is_draggable === !0 || e.isFunction(this.settings.dnd.is_draggable) && this.settings.dnd.is_draggable.call(this, s > 1 ? this.get_selected(!0) : [r])) ? (this.element.trigger("mousedown.jstree"), e.vakata.dnd.start(i, {jstree: !0,origin: this,obj: this.get_node(r, !0),nodes: s > 1 ? this.get_selected() : [r.id]}, '<div id="jstree-dnd" class="jstree-' + this.get_theme() + " jstree-" + this.get_theme() + "-" + this.get_theme_variant() + " " + (this.settings.core.themes.responsive ? " jstree-dnd-responsive" : "") + '"><i class="jstree-icon jstree-er"></i>' + (s > 1 ? s + " " + this.get_string("nodes") : this.get_text(i.currentTarget, !0)) + '<ins class="jstree-copy" style="display:none;">+</ins></div>')) : t
                }, this))
            }
        }, e(function() {
            var i = !1, r = !1, s = !1, n = e('<div id="jstree-marker">&#160;</div>').hide();
            e(document).on("dnd_start.vakata.jstree", function(e, t) {
                i = !1, t && t.data && t.data.jstree && n.appendTo("body")
            }).on("dnd_move.vakata.jstree", function(a, d) {
                if (s && clearTimeout(s), d && d.data && d.data.jstree && (!d.event.target.id || "jstree-marker" !== d.event.target.id)) {
                    var o = e.jstree.reference(d.event.target), c = !1, l = !1, h = !1, _, u, g, f, p, m, v, j, y, k, x, b, w, C;
                    if (o && o._data && o._data.dnd)
                        if (n.attr("class", "jstree-" + o.get_theme() + (o.settings.core.themes.responsive ? " jstree-dnd-responsive" : "")), d.helper.children().attr("class", "jstree-" + o.get_theme() + " jstree-" + o.get_theme() + "-" + o.get_theme_variant() + " " + (o.settings.core.themes.responsive ? " jstree-dnd-responsive" : "")).find(".jstree-copy").first()[d.data.origin && (d.data.origin.settings.dnd.always_copy || d.data.origin.settings.dnd.copy && (d.event.metaKey || d.event.ctrlKey)) ? "show" : "hide"](), d.event.target !== o.element[0] && d.event.target !== o.get_container_ul()[0] || 0 !== o.get_container_ul().children().length) {
                            if (c = e(d.event.target).closest(".jstree-anchor"), c && c.length && c.parent().is(".jstree-closed, .jstree-open, .jstree-leaf") && (l = c.offset(), h = d.event.pageY - l.top, g = c.height(), m = g / 3 > h ? ["b", "i", "a"] : h > g - g / 3 ? ["a", "i", "b"] : h > g / 2 ? ["i", "a", "b"] : ["i", "b", "a"], e.each(m, function(a, h) {
                                switch (h) {
                                    case "b":
                                        _ = l.left - 6, u = l.top, f = o.get_parent(c), p = c.parent().index();
                                        break;
                                    case "i":
                                        w = o.settings.dnd.inside_pos, C = o.get_node(c.parent()), _ = l.left - 2, u = l.top + g / 2 + 1, f = C.id, p = "first" === w ? 0 : "last" === w ? C.children.length : Math.min(w, C.children.length);
                                        break;
                                    case "a":
                                        _ = l.left - 6, u = l.top + g, f = o.get_parent(c), p = c.parent().index() + 1
                                }
                                for (v = !0, j = 0, y = d.data.nodes.length; y > j; j++)
                                    if (k = d.data.origin && (d.data.origin.settings.dnd.always_copy || d.data.origin.settings.dnd.copy && (d.event.metaKey || d.event.ctrlKey)) ? "copy_node" : "move_node", x = p, "move_node" === k && "a" === h && d.data.origin && d.data.origin === o && f === o.get_parent(d.data.nodes[j]) && (b = o.get_node(f), x > e.inArray(d.data.nodes[j], b.children) && (x -= 1)), v = v && (o && o.settings && o.settings.dnd && o.settings.dnd.check_while_dragging === !1 || o.check(k, d.data.origin && d.data.origin !== o ? d.data.origin.get_node(d.data.nodes[j]) : d.data.nodes[j], f, x, {dnd: !0,ref: o.get_node(c.parent()),pos: h,is_multi: d.data.origin && d.data.origin !== o,is_foreign: !d.data.origin})), !v) {
                                        o && o.last_error && (r = o.last_error());
                                        break
                                    }
                                return "i" === h && c.parent().is(".jstree-closed") && o.settings.dnd.open_timeout && (s = setTimeout(function(e, t) {
                                    return function() {
                                        e.open_node(t)
                                    }
                                }(o, c), o.settings.dnd.open_timeout)), v ? (i = {ins: o,par: f,pos: "i" !== h || "last" !== w || 0 !== p || o.is_loaded(C) ? p : "last"}, n.css({left: _ + "px",top: u + "px"}).show(), d.helper.find(".jstree-icon").first().removeClass("jstree-er").addClass("jstree-ok"), r = {}, m = !0, !1) : t
                            }), m === !0))
                                return
                        } else {
                            for (v = !0, j = 0, y = d.data.nodes.length; y > j; j++)
                                if (v = v && o.check(d.data.origin && (d.data.origin.settings.dnd.always_copy || d.data.origin.settings.dnd.copy && (d.event.metaKey || d.event.ctrlKey)) ? "copy_node" : "move_node", d.data.origin && d.data.origin !== o ? d.data.origin.get_node(d.data.nodes[j]) : d.data.nodes[j], "#", "last", {dnd: !0,ref: o.get_node("#"),pos: "i",is_multi: d.data.origin && d.data.origin !== o,is_foreign: !d.data.origin}), !v)
                                    break;
                            if (v)
                                return i = {ins: o,par: "#",pos: "last"}, n.hide(), d.helper.find(".jstree-icon").first().removeClass("jstree-er").addClass("jstree-ok"), t
                        }
                    i = !1, d.helper.find(".jstree-icon").removeClass("jstree-ok").addClass("jstree-er"), n.hide()
                }
            }).on("dnd_scroll.vakata.jstree", function(e, t) {
                t && t.data && t.data.jstree && (n.hide(), i = !1, t.helper.find(".jstree-icon").first().removeClass("jstree-ok").addClass("jstree-er"))
            }).on("dnd_stop.vakata.jstree", function(t, a) {
                if (s && clearTimeout(s), a && a.data && a.data.jstree) {
                    n.hide().detach();
                    var d, o, c = [];
                    if (i) {
                        for (d = 0, o = a.data.nodes.length; o > d; d++)
                            c[d] = a.data.origin ? a.data.origin.get_node(a.data.nodes[d]) : a.data.nodes[d], a.data.origin && (c[d].instance = a.data.origin);
                        for (i.ins[a.data.origin && (a.data.origin.settings.dnd.always_copy || a.data.origin.settings.dnd.copy && (a.event.metaKey || a.event.ctrlKey)) ? "copy_node" : "move_node"](c, i.par, i.pos), d = 0, o = c.length; o > d; d++)
                            c[d].instance && (c[d].instance = null)
                    } else
                        d = e(a.event.target).closest(".jstree"), d.length && r && r.error && "check" === r.error && (d = d.jstree(!0), d && d.settings.core.error.call(this, r))
                }
            }).on("keyup.jstree keydown.jstree", function(t, i) {
                i = e.vakata.dnd._get(), i && i.data && i.data.jstree && i.helper.find(".jstree-copy").first()[i.data.origin && (i.data.origin.settings.dnd.always_copy || i.data.origin.settings.dnd.copy && (t.metaKey || t.ctrlKey)) ? "show" : "hide"]()
            })
        }), function(e) {
            var i = {element: !1,target: !1,is_down: !1,is_drag: !1,helper: !1,helper_w: 0,data: !1,init_x: 0,init_y: 0,scroll_l: 0,scroll_t: 0,scroll_e: !1,scroll_i: !1,is_touch: !1};
            e.vakata.dnd = {settings: {scroll_speed: 10,scroll_proximity: 20,helper_left: 5,helper_top: 10,threshold: 5,threshold_touch: 50},_trigger: function(t, i) {
                    var r = e.vakata.dnd._get();
                    r.event = i, e(document).triggerHandler("dnd_" + t + ".vakata", r)
                },_get: function() {
                    return {data: i.data,element: i.element,helper: i.helper}
                },_clean: function() {
                    i.helper && i.helper.remove(), i.scroll_i && (clearInterval(i.scroll_i), i.scroll_i = !1), i = {element: !1,target: !1,is_down: !1,is_drag: !1,helper: !1,helper_w: 0,data: !1,init_x: 0,init_y: 0,scroll_l: 0,scroll_t: 0,scroll_e: !1,scroll_i: !1,is_touch: !1}, e(document).off("mousemove.vakata.jstree touchmove.vakata.jstree", e.vakata.dnd.drag), e(document).off("mouseup.vakata.jstree touchend.vakata.jstree", e.vakata.dnd.stop)
                },_scroll: function(t) {
                    if (!i.scroll_e || !i.scroll_l && !i.scroll_t)
                        return i.scroll_i && (clearInterval(i.scroll_i), i.scroll_i = !1), !1;
                    if (!i.scroll_i)
                        return i.scroll_i = setInterval(e.vakata.dnd._scroll, 100), !1;
                    if (t === !0)
                        return !1;
                    var r = i.scroll_e.scrollTop(), s = i.scroll_e.scrollLeft();
                    i.scroll_e.scrollTop(r + i.scroll_t * e.vakata.dnd.settings.scroll_speed), i.scroll_e.scrollLeft(s + i.scroll_l * e.vakata.dnd.settings.scroll_speed), (r !== i.scroll_e.scrollTop() || s !== i.scroll_e.scrollLeft()) && e.vakata.dnd._trigger("scroll", i.scroll_e)
                },start: function(t, r, s) {
                    "touchstart" === t.type && t.originalEvent && t.originalEvent.changedTouches && t.originalEvent.changedTouches[0] && (t.pageX = t.originalEvent.changedTouches[0].pageX, t.pageY = t.originalEvent.changedTouches[0].pageY, t.target = document.elementFromPoint(t.originalEvent.changedTouches[0].pageX - window.pageXOffset, t.originalEvent.changedTouches[0].pageY - window.pageYOffset)), i.is_drag && e.vakata.dnd.stop({});
                    try {
                        t.currentTarget.unselectable = "on", t.currentTarget.onselectstart = function() {
                            return !1
                        }, t.currentTarget.style && (t.currentTarget.style.MozUserSelect = "none")
                    } catch (n) {
                    }
                    return i.init_x = t.pageX, i.init_y = t.pageY, i.data = r, i.is_down = !0, i.element = t.currentTarget, i.target = t.target, i.is_touch = "touchstart" === t.type, s !== !1 && (i.helper = e("<div id='vakata-dnd'></div>").html(s).css({display: "block",margin: "0",padding: "0",position: "absolute",top: "-2000px",lineHeight: "16px",zIndex: "10000"})), e(document).on("mousemove.vakata.jstree touchmove.vakata.jstree", e.vakata.dnd.drag), e(document).on("mouseup.vakata.jstree touchend.vakata.jstree", e.vakata.dnd.stop), !1
                },drag: function(r) {
                    if ("touchmove" === r.type && r.originalEvent && r.originalEvent.changedTouches && r.originalEvent.changedTouches[0] && (r.pageX = r.originalEvent.changedTouches[0].pageX, r.pageY = r.originalEvent.changedTouches[0].pageY, r.target = document.elementFromPoint(r.originalEvent.changedTouches[0].pageX - window.pageXOffset, r.originalEvent.changedTouches[0].pageY - window.pageYOffset)), i.is_down) {
                        if (!i.is_drag) {
                            if (!(Math.abs(r.pageX - i.init_x) > (i.is_touch ? e.vakata.dnd.settings.threshold_touch : e.vakata.dnd.settings.threshold) || Math.abs(r.pageY - i.init_y) > (i.is_touch ? e.vakata.dnd.settings.threshold_touch : e.vakata.dnd.settings.threshold)))
                                return;
                            i.helper && (i.helper.appendTo("body"), i.helper_w = i.helper.outerWidth()), i.is_drag = !0, e.vakata.dnd._trigger("start", r)
                        }
                        var s = !1, n = !1, a = !1, d = !1, o = !1, c = !1, l = !1, h = !1, _ = !1, u = !1;
                        return i.scroll_t = 0, i.scroll_l = 0, i.scroll_e = !1, e(e(r.target).parentsUntil("body").addBack().get().reverse()).filter(function() {
                            return /^auto|scroll$/.test(e(this).css("overflow")) && (this.scrollHeight > this.offsetHeight || this.scrollWidth > this.offsetWidth)
                        }).each(function() {
                            var s = e(this), n = s.offset();
                            return this.scrollHeight > this.offsetHeight && (n.top + s.height() - r.pageY < e.vakata.dnd.settings.scroll_proximity && (i.scroll_t = 1), r.pageY - n.top < e.vakata.dnd.settings.scroll_proximity && (i.scroll_t = -1)), this.scrollWidth > this.offsetWidth && (n.left + s.width() - r.pageX < e.vakata.dnd.settings.scroll_proximity && (i.scroll_l = 1), r.pageX - n.left < e.vakata.dnd.settings.scroll_proximity && (i.scroll_l = -1)), i.scroll_t || i.scroll_l ? (i.scroll_e = e(this), !1) : t
                        }), i.scroll_e || (s = e(document), n = e(window), a = s.height(), d = n.height(), o = s.width(), c = n.width(), l = s.scrollTop(), h = s.scrollLeft(), a > d && r.pageY - l < e.vakata.dnd.settings.scroll_proximity && (i.scroll_t = -1), a > d && d - (r.pageY - l) < e.vakata.dnd.settings.scroll_proximity && (i.scroll_t = 1), o > c && r.pageX - h < e.vakata.dnd.settings.scroll_proximity && (i.scroll_l = -1), o > c && c - (r.pageX - h) < e.vakata.dnd.settings.scroll_proximity && (i.scroll_l = 1), (i.scroll_t || i.scroll_l) && (i.scroll_e = s)), i.scroll_e && e.vakata.dnd._scroll(!0), i.helper && (_ = parseInt(r.pageY + e.vakata.dnd.settings.helper_top, 10), u = parseInt(r.pageX + e.vakata.dnd.settings.helper_left, 10), a && _ + 25 > a && (_ = a - 50), o && u + i.helper_w > o && (u = o - (i.helper_w + 2)), i.helper.css({left: u + "px",top: _ + "px"})), e.vakata.dnd._trigger("move", r), !1
                    }
                },stop: function(t) {
                    if ("touchend" === t.type && t.originalEvent && t.originalEvent.changedTouches && t.originalEvent.changedTouches[0] && (t.pageX = t.originalEvent.changedTouches[0].pageX, t.pageY = t.originalEvent.changedTouches[0].pageY, t.target = document.elementFromPoint(t.originalEvent.changedTouches[0].pageX - window.pageXOffset, t.originalEvent.changedTouches[0].pageY - window.pageYOffset)), i.is_drag)
                        e.vakata.dnd._trigger("stop", t);
                    else if ("touchend" === t.type && t.target === i.target) {
                        var r = setTimeout(function() {
                            e(t.target).click()
                        }, 100);
                        e(t.target).one("click", function() {
                            r && clearTimeout(r)
                        })
                    }
                    return e.vakata.dnd._clean(), !1
                }}
        }(e), e.jstree.defaults.search = {ajax: !1,fuzzy: !1,case_sensitive: !1,show_only_matches: !1,close_opened_onclear: !0,search_leaves_only: !1,search_callback: !1}, e.jstree.plugins.search = function(i, r) {
            this.bind = function() {
                r.bind.call(this), this._data.search.str = "", this._data.search.dom = e(), this._data.search.res = [], this._data.search.opn = [], this._data.search.som = !1, this.element.on("before_open.jstree", e.proxy(function(t, i) {
                    var r, s, n, a = this._data.search.res, d = [], o = e();
                    if (a && a.length && (this._data.search.dom = e(this.element[0].querySelectorAll("#" + e.map(a, function(t) {
                        return -1 !== "0123456789".indexOf(t[0]) ? "\\3" + t[0] + " " + t.substr(1).replace(e.jstree.idregex, "\\$&") : t.replace(e.jstree.idregex, "\\$&")
                    }).join(", #"))), this._data.search.dom.children(".jstree-anchor").addClass("jstree-search"), this._data.search.som && this._data.search.res.length)) {
                        for (r = 0, s = a.length; s > r; r++)
                            d = d.concat(this.get_node(a[r]).parents);
                        d = e.vakata.array_remove_item(e.vakata.array_unique(d), "#"), o = d.length ? e(this.element[0].querySelectorAll("#" + e.map(d, function(t) {
                            return -1 !== "0123456789".indexOf(t[0]) ? "\\3" + t[0] + " " + t.substr(1).replace(e.jstree.idregex, "\\$&") : t.replace(e.jstree.idregex, "\\$&")
                        }).join(", #"))) : e(), this.element.find(".jstree-node").hide().filter(".jstree-last").filter(function() {
                            return this.nextSibling
                        }).removeClass("jstree-last"), o = o.add(this._data.search.dom), o.parentsUntil(".jstree").addBack().show().filter(".jstree-children").each(function() {
                            e(this).children(".jstree-node:visible").eq(-1).addClass("jstree-last")
                        })
                    }
                }, this)).on("search.jstree", e.proxy(function(t, i) {
                    this._data.search.som && i.nodes.length && (this.element.find(".jstree-node").hide().filter(".jstree-last").filter(function() {
                        return this.nextSibling
                    }).removeClass("jstree-last"), i.nodes.parentsUntil(".jstree").addBack().show().filter(".jstree-children").each(function() {
                        e(this).children(".jstree-node:visible").eq(-1).addClass("jstree-last")
                    }))
                }, this)).on("clear_search.jstree", e.proxy(function(e, t) {
                    this._data.search.som && t.nodes.length && this.element.find(".jstree-node").css("display", "").filter(".jstree-last").filter(function() {
                        return this.nextSibling
                    }).removeClass("jstree-last")
                }, this))
            }, this.search = function(i, r, s) {
                if (i === !1 || "" === e.trim("" + i))
                    return this.clear_search();
                i = "" + i;
                var n = this.settings.search, a = n.ajax ? n.ajax : !1, d = null, o = [], c = [], l, h;
                return this._data.search.res.length && this.clear_search(), s === t && (s = n.show_only_matches), r || a === !1 ? (this._data.search.str = i, this._data.search.dom = e(), this._data.search.res = [], this._data.search.opn = [], this._data.search.som = s, d = new e.vakata.search(i, !0, {caseSensitive: n.case_sensitive,fuzzy: n.fuzzy}), e.each(this._model.data, function(e, t) {
                    t.text && (n.search_callback && n.search_callback.call(this, i, t) || !n.search_callback && d.search(t.text).isMatch) && (!n.search_leaves_only || t.state.loaded && 0 === t.children.length) && (o.push(e), c = c.concat(t.parents))
                }), o.length && (c = e.vakata.array_unique(c), this._search_open(c), this._data.search.dom = e(this.element[0].querySelectorAll("#" + e.map(o, function(t) {
                    return -1 !== "0123456789".indexOf(t[0]) ? "\\3" + t[0] + " " + t.substr(1).replace(e.jstree.idregex, "\\$&") : t.replace(e.jstree.idregex, "\\$&")
                }).join(", #"))), this._data.search.res = o, this._data.search.dom.children(".jstree-anchor").addClass("jstree-search")), this.trigger("search", {nodes: this._data.search.dom,str: i,res: this._data.search.res,show_only_matches: s}), t) : e.isFunction(a) ? a.call(this, i, e.proxy(function(t) {
                    t && t.d && (t = t.d), this._load_nodes(e.isArray(t) ? e.vakata.array_unique(t) : [], function() {
                        this.search(i, !0, s)
                    }, !0)
                }, this)) : (a = e.extend({}, a), a.data || (a.data = {}), a.data.str = i, e.ajax(a).fail(e.proxy(function() {
                    this._data.core.last_error = {error: "ajax",plugin: "search",id: "search_01",reason: "Could not load search parents",data: JSON.stringify(a)}, this.settings.core.error.call(this, this._data.core.last_error)
                }, this)).done(e.proxy(function(t) {
                    t && t.d && (t = t.d), this._load_nodes(e.isArray(t) ? e.vakata.array_unique(t) : [], function() {
                        this.search(i, !0, s)
                    }, !0)
                }, this)))
            }, this.clear_search = function() {
                this._data.search.dom.children(".jstree-anchor").removeClass("jstree-search"), this.settings.search.close_opened_onclear && this.close_node(this._data.search.opn, 0), this.trigger("clear_search", {nodes: this._data.search.dom,str: this._data.search.str,res: this._data.search.res}), this._data.search.str = "", this._data.search.res = [], this._data.search.opn = [], this._data.search.dom = e()
            }, this._search_open = function(t) {
                var i = this;
                e.each(t.concat([]), function(r, s) {
                    if ("#" === s)
                        return !0;
                    try {
                        s = e("#" + s.replace(e.jstree.idregex, "\\$&"), i.element)
                    } catch (n) {
                    }
                    s && s.length && i.is_closed(s) && (i._data.search.opn.push(s[0].id), i.open_node(s, function() {
                        i._search_open(t)
                    }, 0))
                })
            }
        }, function(e) {
            e.vakata.search = function(e, t, i) {
                i = i || {}, i.fuzzy !== !1 && (i.fuzzy = !0), e = i.caseSensitive ? e : e.toLowerCase();
                var r = i.location || 0, s = i.distance || 100, n = i.threshold || .6, a = e.length, d, o, c, l;
                return a > 32 && (i.fuzzy = !1), i.fuzzy && (d = 1 << a - 1, o = function() {
                    var t = {}, i = 0;
                    for (i = 0; a > i; i++)
                        t[e.charAt(i)] = 0;
                    for (i = 0; a > i; i++)
                        t[e.charAt(i)] |= 1 << a - i - 1;
                    return t
                }(), c = function(e, t) {
                    var i = e / a, n = Math.abs(r - t);
                    return s ? i + n / s : n ? 1 : i
                }), l = function(t) {
                    if (t = i.caseSensitive ? t : t.toLowerCase(), e === t || -1 !== t.indexOf(e))
                        return {isMatch: !0,score: 0};
                    if (!i.fuzzy)
                        return {isMatch: !1,score: 1};
                    var s, l, h = t.length, _ = n, u = t.indexOf(e, r), g, f, p = a + h, m, v, j, y, k, x = 1, b = [];
                    for (-1 !== u && (_ = Math.min(c(0, u), _), u = t.lastIndexOf(e, r + a), -1 !== u && (_ = Math.min(c(0, u), _))), u = -1, s = 0; a > s; s++) {
                        g = 0, f = p;
                        while (f > g)
                            _ >= c(s, r + f) ? g = f : p = f, f = Math.floor((p - g) / 2 + g);
                        for (p = f, v = Math.max(1, r - f + 1), j = Math.min(r + f, h) + a, y = Array(j + 2), y[j + 1] = (1 << s) - 1, l = j; l >= v; l--)
                            if (k = o[t.charAt(l - 1)], y[l] = 0 === s ? (1 | y[l + 1] << 1) & k : (1 | y[l + 1] << 1) & k | (1 | (m[l + 1] | m[l]) << 1) | m[l + 1], y[l] & d && (x = c(s, l - 1), _ >= x)) {
                                if (_ = x, u = l - 1, b.push(u), !(u > r))
                                    break;
                                v = Math.max(1, 2 * r - u)
                            }
                        if (c(s + 1, r) > _)
                            break;
                        m = y
                    }
                    return {isMatch: u >= 0,score: x}
                }, t === !0 ? {search: l} : l(t)
            }
        }(e), e.jstree.defaults.sort = function(e, t) {
            return this.get_text(e) > this.get_text(t) ? 1 : -1
        }, e.jstree.plugins.sort = function(t, i) {
            this.bind = function() {
                i.bind.call(this), this.element.on("model.jstree", e.proxy(function(e, t) {
                    this.sort(t.parent, !0)
                }, this)).on("rename_node.jstree create_node.jstree", e.proxy(function(e, t) {
                    this.sort(t.parent || t.node.parent, !1), this.redraw_node(t.parent || t.node.parent, !0)
                }, this)).on("move_node.jstree copy_node.jstree", e.proxy(function(e, t) {
                    this.sort(t.parent, !1), this.redraw_node(t.parent, !0)
                }, this))
            }, this.sort = function(t, i) {
                var r, s;
                if (t = this.get_node(t), t && t.children && t.children.length && (t.children.sort(e.proxy(this.settings.sort, this)), i))
                    for (r = 0, s = t.children_d.length; s > r; r++)
                        this.sort(t.children_d[r], !1)
            }
        };
        var u = !1;
        e.jstree.defaults.state = {key: "jstree",events: "changed.jstree open_node.jstree close_node.jstree",ttl: !1,filter: !1}, e.jstree.plugins.state = function(t, i) {
            this.bind = function() {
                i.bind.call(this);
                var t = e.proxy(function() {
                    this.element.on(this.settings.state.events, e.proxy(function() {
                        u && clearTimeout(u), u = setTimeout(e.proxy(function() {
                            this.save_state()
                        }, this), 100)
                    }, this))
                }, this);
                this.element.on("ready.jstree", e.proxy(function(e, i) {
                    this.element.one("restore_state.jstree", t), this.restore_state() || t()
                }, this))
            }, this.save_state = function() {
                var t = {state: this.get_state(),ttl: this.settings.state.ttl,sec: +new Date};
                e.vakata.storage.set(this.settings.state.key, JSON.stringify(t))
            }, this.restore_state = function() {
                var t = e.vakata.storage.get(this.settings.state.key);
                if (t)
                    try {
                        t = JSON.parse(t)
                    } catch (i) {
                        return !1
                    }
                return t && t.ttl && t.sec && +new Date - t.sec > t.ttl ? !1 : (t && t.state && (t = t.state), t && e.isFunction(this.settings.state.filter) && (t = this.settings.state.filter.call(this, t)), t ? (this.element.one("set_state.jstree", function(i, r) {
                    r.instance.trigger("restore_state", {state: e.extend(!0, {}, t)})
                }), this.set_state(t), !0) : !1)
            }, this.clear_state = function() {
                return e.vakata.storage.del(this.settings.state.key)
            }
        }, function(e, t) {
            e.vakata.storage = {set: function(e, t) {
                    return window.localStorage.setItem(e, t)
                },get: function(e) {
                    return window.localStorage.getItem(e)
                },del: function(e) {
                    return window.localStorage.removeItem(e)
                }}
        }(e), e.jstree.defaults.types = {"#": {},"default": {}}, e.jstree.plugins.types = function(i, r) {
            this.init = function(e, i) {
                var s, n;
                if (i && i.types && i.types["default"])
                    for (s in i.types)
                        if ("default" !== s && "#" !== s && i.types.hasOwnProperty(s))
                            for (n in i.types["default"])
                                i.types["default"].hasOwnProperty(n) && i.types[s][n] === t && (i.types[s][n] = i.types["default"][n]);
                r.init.call(this, e, i), this._model.data["#"].type = "#"
            }, this.refresh = function(e, t) {
                r.refresh.call(this, e, t), this._model.data["#"].type = "#"
            }, this.bind = function() {
                this.element.on("model.jstree", e.proxy(function(e, i) {
                    var r = this._model.data, s = i.nodes, n = this.settings.types, a, d, o = "default";
                    for (a = 0, d = s.length; d > a; a++)
                        o = "default", r[s[a]].original && r[s[a]].original.type && n[r[s[a]].original.type] && (o = r[s[a]].original.type), r[s[a]].data && r[s[a]].data.jstree && r[s[a]].data.jstree.type && n[r[s[a]].data.jstree.type] && (o = r[s[a]].data.jstree.type), r[s[a]].type = o, r[s[a]].icon === !0 && n[o].icon !== t && (r[s[a]].icon = n[o].icon);
                    r["#"].type = "#"
                }, this)), r.bind.call(this)
            }, this.get_json = function(t, i, s) {
                var n, a, d = this._model.data, o = i ? e.extend(!0, {}, i, {no_id: !1}) : {}, c = r.get_json.call(this, t, o, s);
                if (c === !1)
                    return !1;
                if (e.isArray(c))
                    for (n = 0, a = c.length; a > n; n++)
                        c[n].type = c[n].id && d[c[n].id] && d[c[n].id].type ? d[c[n].id].type : "default", i && i.no_id && (delete c[n].id, c[n].li_attr && c[n].li_attr.id && delete c[n].li_attr.id, c[n].a_attr && c[n].a_attr.id && delete c[n].a_attr.id);
                else
                    c.type = c.id && d[c.id] && d[c.id].type ? d[c.id].type : "default", i && i.no_id && (c = this._delete_ids(c));
                return c
            }, this._delete_ids = function(t) {
                if (e.isArray(t)) {
                    for (var i = 0, r = t.length; r > i; i++)
                        t[i] = this._delete_ids(t[i]);
                    return t
                }
                return delete t.id, t.li_attr && t.li_attr.id && delete t.li_attr.id, t.a_attr && t.a_attr.id && delete t.a_attr.id, t.children && e.isArray(t.children) && (t.children = this._delete_ids(t.children)), t
            }, this.check = function(i, s, n, a, d) {
                if (r.check.call(this, i, s, n, a, d) === !1)
                    return !1;
                s = s && s.id ? s : this.get_node(s), n = n && n.id ? n : this.get_node(n);
                var o = s && s.id ? e.jstree.reference(s.id) : null, c, l, h, _;
                switch (o = o && o._model && o._model.data ? o._model.data : null, i) {
                    case "create_node":
                    case "move_node":
                    case "copy_node":
                        if ("move_node" !== i || -1 === e.inArray(s.id, n.children)) {
                            if (c = this.get_rules(n), c.max_children !== t && -1 !== c.max_children && c.max_children === n.children.length)
                                return this._data.core.last_error = {error: "check",plugin: "types",id: "types_01",reason: "max_children prevents function: " + i,data: JSON.stringify({chk: i,pos: a,obj: s && s.id ? s.id : !1,par: n && n.id ? n.id : !1})}, !1;
                            if (c.valid_children !== t && -1 !== c.valid_children && -1 === e.inArray(s.type || "default", c.valid_children))
                                return this._data.core.last_error = {error: "check",plugin: "types",id: "types_02",reason: "valid_children prevents function: " + i,data: JSON.stringify({chk: i,pos: a,obj: s && s.id ? s.id : !1,par: n && n.id ? n.id : !1})}, !1;
                            if (o && s.children_d && s.parents) {
                                for (l = 0, h = 0, _ = s.children_d.length; _ > h; h++)
                                    l = Math.max(l, o[s.children_d[h]].parents.length);
                                l = l - s.parents.length + 1
                            }
                            (0 >= l || l === t) && (l = 1);
                            do {
                                if (c.max_depth !== t && -1 !== c.max_depth && l > c.max_depth)
                                    return this._data.core.last_error = {error: "check",plugin: "types",id: "types_03",reason: "max_depth prevents function: " + i,data: JSON.stringify({chk: i,pos: a,obj: s && s.id ? s.id : !1,par: n && n.id ? n.id : !1})}, !1;
                                n = this.get_node(n.parent), c = this.get_rules(n), l++
                            } while (n)
                        }
                }
                return !0
            }, this.get_rules = function(e) {
                if (e = this.get_node(e), !e)
                    return !1;
                var i = this.get_type(e, !0);
                return i.max_depth === t && (i.max_depth = -1), i.max_children === t && (i.max_children = -1), i.valid_children === t && (i.valid_children = -1), i
            }, this.get_type = function(t, i) {
                return t = this.get_node(t), t ? i ? e.extend({type: t.type}, this.settings.types[t.type]) : t.type : !1
            }, this.set_type = function(i, r) {
                var s, n, a, d, o;
                if (e.isArray(i)) {
                    for (i = i.slice(), n = 0, a = i.length; a > n; n++)
                        this.set_type(i[n], r);
                    return !0
                }
                return s = this.settings.types, i = this.get_node(i), s[r] && i ? (d = i.type, o = this.get_icon(i), i.type = r, (o === !0 || s[d] && s[d].icon !== t && o === s[d].icon) && this.set_icon(i, s[r].icon !== t ? s[r].icon : !0), !0) : !1
            }
        }, e.jstree.defaults.unique = {case_sensitive: !1,duplicate: function(e, t) {
                return e + " (" + t + ")"
            }}, e.jstree.plugins.unique = function(i, r) {
            this.check = function(t, i, s, n, a) {
                if (r.check.call(this, t, i, s, n, a) === !1)
                    return !1;
                if (i = i && i.id ? i : this.get_node(i), s = s && s.id ? s : this.get_node(s), !s || !s.children)
                    return !0;
                var d = "rename_node" === t ? n : i.text, o = [], c = this.settings.unique.case_sensitive, l = this._model.data, h, _;
                for (h = 0, _ = s.children.length; _ > h; h++)
                    o.push(c ? l[s.children[h]].text : l[s.children[h]].text.toLowerCase());
                switch (c || (d = d.toLowerCase()), t) {
                    case "delete_node":
                        return !0;
                    case "rename_node":
                        return h = -1 === e.inArray(d, o) || i.text && i.text[c ? "toString" : "toLowerCase"]() === d, h || (this._data.core.last_error = {error: "check",plugin: "unique",id: "unique_01",reason: "Child with name " + d + " already exists. Preventing: " + t,data: JSON.stringify({chk: t,pos: n,obj: i && i.id ? i.id : !1,par: s && s.id ? s.id : !1})}), h;
                    case "create_node":
                        return h = -1 === e.inArray(d, o), h || (this._data.core.last_error = {error: "check",plugin: "unique",id: "unique_04",reason: "Child with name " + d + " already exists. Preventing: " + t,data: JSON.stringify({chk: t,pos: n,obj: i && i.id ? i.id : !1,par: s && s.id ? s.id : !1})}), h;
                    case "copy_node":
                        return h = -1 === e.inArray(d, o), h || (this._data.core.last_error = {error: "check",plugin: "unique",id: "unique_02",reason: "Child with name " + d + " already exists. Preventing: " + t,data: JSON.stringify({chk: t,pos: n,obj: i && i.id ? i.id : !1,par: s && s.id ? s.id : !1})}), h;
                    case "move_node":
                        return h = i.parent === s.id || -1 === e.inArray(d, o), h || (this._data.core.last_error = {error: "check",plugin: "unique",id: "unique_03",reason: "Child with name " + d + " already exists. Preventing: " + t,data: JSON.stringify({chk: t,pos: n,obj: i && i.id ? i.id : !1,par: s && s.id ? s.id : !1})}), h
                }
                return !0
            }, this.create_node = function(i, s, n, a, d) {
                if (!s || s.text === t) {
                    if (null === i && (i = "#"), i = this.get_node(i), !i)
                        return r.create_node.call(this, i, s, n, a, d);
                    if (n = n === t ? "last" : n, !("" + n).match(/^(before|after)$/) && !d && !this.is_loaded(i))
                        return r.create_node.call(this, i, s, n, a, d);
                    s || (s = {});
                    var o, c, l, h, _, u = this._model.data, g = this.settings.unique.case_sensitive, f = this.settings.unique.duplicate;
                    for (c = o = this.get_string("New node"), l = [], h = 0, _ = i.children.length; _ > h; h++)
                        l.push(g ? u[i.children[h]].text : u[i.children[h]].text.toLowerCase());
                    h = 1;
                    while (-1 !== e.inArray(g ? c : c.toLowerCase(), l))
                        c = "" + f.call(this, o, ++h);
                    s.text = c
                }
                return r.create_node.call(this, i, s, n, a, d)
            }
        };
        var g = document.createElement("DIV");
        g.setAttribute("unselectable", "on"), g.setAttribute("role", "presentation"), g.className = "jstree-wholerow", g.innerHTML = "&#160;", e.jstree.plugins.wholerow = function(t, i) {
            this.bind = function() {
                i.bind.call(this), this.element.on("ready.jstree set_state.jstree", e.proxy(function() {
                    this.hide_dots()
                }, this)).on("init.jstree loading.jstree ready.jstree", e.proxy(function() {
                    this.get_container_ul().addClass("jstree-wholerow-ul")
                }, this)).on("deselect_all.jstree", e.proxy(function(e, t) {
                    this.element.find(".jstree-wholerow-clicked").removeClass("jstree-wholerow-clicked")
                }, this)).on("changed.jstree", e.proxy(function(e, t) {
                    this.element.find(".jstree-wholerow-clicked").removeClass("jstree-wholerow-clicked");
                    var i = !1, r, s;
                    for (r = 0, s = t.selected.length; s > r; r++)
                        i = this.get_node(t.selected[r], !0), i && i.length && i.children(".jstree-wholerow").addClass("jstree-wholerow-clicked")
                }, this)).on("open_node.jstree", e.proxy(function(e, t) {
                    this.get_node(t.node, !0).find(".jstree-clicked").parent().children(".jstree-wholerow").addClass("jstree-wholerow-clicked")
                }, this)).on("hover_node.jstree dehover_node.jstree", e.proxy(function(e, t) {
                    "hover_node" === e.type && this.is_disabled(t.node) || this.get_node(t.node, !0).children(".jstree-wholerow")["hover_node" === e.type ? "addClass" : "removeClass"]("jstree-wholerow-hovered")
                }, this)).on("contextmenu.jstree", ".jstree-wholerow", e.proxy(function(t) {
                    t.preventDefault();
                    var i = e.Event("contextmenu", {metaKey: t.metaKey,ctrlKey: t.ctrlKey,altKey: t.altKey,shiftKey: t.shiftKey,pageX: t.pageX,pageY: t.pageY});
                    e(t.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(i)
                }, this)).on("click.jstree", ".jstree-wholerow", function(t) {
                    t.stopImmediatePropagation();
                    var i = e.Event("click", {metaKey: t.metaKey,ctrlKey: t.ctrlKey,altKey: t.altKey,shiftKey: t.shiftKey});
                    e(t.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(i).focus()
                }).on("click.jstree", ".jstree-leaf > .jstree-ocl", e.proxy(function(t) {
                    t.stopImmediatePropagation();
                    var i = e.Event("click", {metaKey: t.metaKey,ctrlKey: t.ctrlKey,altKey: t.altKey,shiftKey: t.shiftKey});
                    e(t.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(i).focus()
                }, this)).on("mouseover.jstree", ".jstree-wholerow, .jstree-icon", e.proxy(function(e) {
                    return e.stopImmediatePropagation(), this.is_disabled(e.currentTarget) || this.hover_node(e.currentTarget), !1
                }, this)).on("mouseleave.jstree", ".jstree-node", e.proxy(function(e) {
                    this.dehover_node(e.currentTarget)
                }, this))
            }, this.teardown = function() {
                this.settings.wholerow && this.element.find(".jstree-wholerow").remove(), i.teardown.call(this)
            }, this.redraw_node = function(t, r, s, n) {
                if (t = i.redraw_node.apply(this, arguments)) {
                    var a = g.cloneNode(!0);
                    -1 !== e.inArray(t.id, this._data.core.selected) && (a.className += " jstree-wholerow-clicked"), this._data.core.focused && this._data.core.focused === t.id && (a.className += " jstree-wholerow-hovered"), t.insertBefore(a, t.childNodes[0])
                }
                return t
            }
        }, function(e) {
            if (document.registerElement && Object && Object.create) {
                var t = Object.create(HTMLElement.prototype);
                t.createdCallback = function() {
                    var t = {core: {},plugins: []}, i;
                    for (i in e.jstree.plugins)
                        e.jstree.plugins.hasOwnProperty(i) && this.attributes[i] && (t.plugins.push(i), this.getAttribute(i) && JSON.parse(this.getAttribute(i)) && (t[i] = JSON.parse(this.getAttribute(i))));
                    for (i in e.jstree.defaults.core)
                        e.jstree.defaults.core.hasOwnProperty(i) && this.attributes[i] && (t.core[i] = JSON.parse(this.getAttribute(i)) || this.getAttribute(i));
                    jQuery(this).jstree(t)
                };
                try {
                    document.registerElement("vakata-jstree", {prototype: t})
                } catch (i) {
                }
            }
        }(jQuery)
    }
});
jQuery(function($) {
    $(document).ready(function() {
        var contentButton = [];
        var contentTop = [];
        var content = [];
        var lastScrollTop = 0;
        var scrollDir = '';
        var itemClass = '';
        var itemHover = '';
        var menuSize = null;
        var stickyHeight = 0;
        var stickyMarginB = 0;
        var currentMarginT = 0;
        var topMargin = 0;
        $(window).scroll(function(event) {
            var st = $(this).scrollTop();
            if (st > lastScrollTop) {
                scrollDir = 'down';
            } else {
                scrollDir = 'up';
            }
            lastScrollTop = st;
        });
        $.fn.stickUp = function(options) {
            $(this).addClass('stuckMenu');
            var objn = 0;
            if (options != null) {
                for (var o in options.parts) {
                    if (options.parts.hasOwnProperty(o)) {
                        content[objn] = options.parts[objn];
                        objn++;
                    }
                }
                if (objn == 0) {
                    console.log('error:needs arguments');
                }
                itemClass = options.itemClass;
                itemHover = options.itemHover;
                if (options.topMargin != null) {
                    if (options.topMargin == 'auto') {
                        topMargin = parseInt($('.stuckMenu').css('margin-top'));
                    } else {
                        if (isNaN(options.topMargin) && options.topMargin.search("px") > 0) {
                            topMargin = parseInt(options.topMargin.replace("px", ""));
                        } else if (!isNaN(parseInt(options.topMargin))) {
                            topMargin = parseInt(options.topMargin);
                        } else {
                            console.log("incorrect argument, ignored.");
                            topMargin = 0;
                        }
                    }
                } else {
                    topMargin = 0;
                }
                menuSize = $('.' + itemClass).size();
            }
            stickyHeight = parseInt($(this).height());
            stickyMarginB = parseInt($(this).css('margin-bottom'));
            currentMarginT = parseInt($(this).next().closest('div').css('margin-top'));
            vartop = parseInt($(this).offset().top);
        };
        $(document).on('scroll', function() {
            varscroll = parseInt($(document).scrollTop());
            if (menuSize != null) {
                for (var i = 0; i < menuSize; i++) {
                    contentTop[i] = $('#' + content[i] + '').offset().top;
                    function bottomView(i) {
                        contentView = $('#' + content[i] + '').height() * .4;
                        testView = contentTop[i] - contentView;
                        if (varscroll > testView) {
                            $('.' + itemClass).removeClass(itemHover);
                            $('.' + itemClass + ':eq(' + i + ')').addClass(itemHover);
                        } else if (varscroll < 50) {
                            $('.' + itemClass).removeClass(itemHover);
                            $('.' + itemClass + ':eq(0)').addClass(itemHover);
                        }
                    }
                    if (scrollDir == 'down' && varscroll > contentTop[i] - 50 && varscroll < contentTop[i] + 50) {
                        $('.' + itemClass).removeClass(itemHover);
                        $('.' + itemClass + ':eq(' + i + ')').addClass(itemHover);
                    }
                    if (scrollDir == 'up') {
                        bottomView(i);
                    }
                }
            }
            if (vartop < varscroll + topMargin) {
                $('.stuckMenu').addClass('isStuck');
                $('.stuckMenu').next().closest('div').css({'margin-top': stickyHeight + stickyMarginB + currentMarginT + 'px'}, 10);
                $('.stuckMenu').css("position", "fixed");
                $('.isStuck').css({top: '0px'}, 10, function() {
                });
            }
            ;
            if (varscroll + topMargin < vartop) {
                $('.stuckMenu').removeClass('isStuck');
                $('.stuckMenu').next().closest('div').css({'margin-top': currentMarginT + 'px'}, 10);
                $('.stuckMenu').css("position", "relative");
            }
            ;
        });
    });
});
;
(function(k) {
    'use strict';
    k(['jquery'], function($) {
        var j = $.scrollTo = function(a, b, c) {
            return $(window).scrollTo(a, b, c)
        };
        j.defaults = {axis: 'xy',duration: 0,limit: !0};
        j.window = function(a) {
            return $(window)._scrollable()
        };
        $.fn._scrollable = function() {
            return this.map(function() {
                var a = this, isWin = !a.nodeName || $.inArray(a.nodeName.toLowerCase(), ['iframe', '#document', 'html', 'body']) != -1;
                if (!isWin)
                    return a;
                var b = (a.contentWindow || a).document || a.ownerDocument || a;
                return /webkit/i.test(navigator.userAgent) || b.compatMode == 'BackCompat' ? b.body : b.documentElement
            })
        };
        $.fn.scrollTo = function(f, g, h) {
            if (typeof g == 'object') {
                h = g;
                g = 0
            }
            if (typeof h == 'function')
                h = {onAfter: h};
            if (f == 'max')
                f = 9e9;
            h = $.extend({}, j.defaults, h);
            g = g || h.duration;
            h.queue = h.queue && h.axis.length > 1;
            if (h.queue)
                g /= 2;
            h.offset = both(h.offset);
            h.over = both(h.over);
            return this._scrollable().each(function() {
                if (f == null)
                    return;
                var d = this, $elem = $(d), targ = f, toff, attr = {}, win = $elem.is('html,body');
                switch (typeof targ) {
                    case 'number':
                    case 'string':
                        if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)) {
                            targ = both(targ);
                            break
                        }
                        targ = win ? $(targ) : $(targ, this);
                        if (!targ.length)
                            return;
                    case 'object':
                        if (targ.is || targ.style)
                            toff = (targ = $(targ)).offset()
                }
                var e = $.isFunction(h.offset) && h.offset(d, targ) || h.offset;
                $.each(h.axis.split(''), function(i, a) {
                    var b = a == 'x' ? 'Left' : 'Top', pos = b.toLowerCase(), key = 'scroll' + b, old = d[key], max = j.max(d, a);
                    if (toff) {
                        attr[key] = toff[pos] + (win ? 0 : old - $elem.offset()[pos]);
                        if (h.margin) {
                            attr[key] -= parseInt(targ.css('margin' + b)) || 0;
                            attr[key] -= parseInt(targ.css('border' + b + 'Width')) || 0
                        }
                        attr[key] += e[pos] || 0;
                        if (h.over[pos])
                            attr[key] += targ[a == 'x' ? 'width' : 'height']() * h.over[pos]
                    } else {
                        var c = targ[pos];
                        attr[key] = c.slice && c.slice(-1) == '%' ? parseFloat(c) / 100 * max : c
                    }
                    if (h.limit && /^\d+$/.test(attr[key]))
                        attr[key] = attr[key] <= 0 ? 0 : Math.min(attr[key], max);
                    if (!i && h.queue) {
                        if (old != attr[key])
                            animate(h.onAfterFirst);
                        delete attr[key]
                    }
                });
                animate(h.onAfter);
                function animate(a) {
                    $elem.animate(attr, g, h.easing, a && function() {
                        a.call(this, targ, h)
                    })
                }
            }).end()
        };
        j.max = function(a, b) {
            var c = b == 'x' ? 'Width' : 'Height', scroll = 'scroll' + c;
            if (!$(a).is('html,body'))
                return a[scroll] - $(a)[c.toLowerCase()]();
            var d = 'client' + c, html = a.ownerDocument.documentElement, body = a.ownerDocument.body;
            return Math.max(html[scroll], body[scroll]) - Math.min(html[d], body[d])
        };
        function both(a) {
            return $.isFunction(a) || $.isPlainObject(a) ? a : {top: a,left: a}
        }
        return j
    })
}(typeof define === 'function' && define.amd ? define : function(a, b) {
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = b(require('jquery'))
    } else {
        b(jQuery)
    }
}));
function LoadYoutubeVidOnPreviewClick(id, w, h) {
    var code = '<iframe src="https://www.youtube.com/embed/' + id + '/?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1" width="' + w + '" height="' + h + '" frameborder=0 allowfullscreen style="border:1px solid #ccc;" ></iframe>';
    var iframe = document.createElement('div');
    iframe.innerHTML = code;
    iframe = iframe.firstChild;
    var div = document.getElementById("skipser-youtubevid-" + id);
    div.parentNode.replaceChild(iframe, div)
}
(function($) {
    $.fn.extend({easyResponsiveTabs: function(options) {
            var defaults = {type: 'default',width: 'auto',fit: true,closed: false,activate: function() {
                }}
            var options = $.extend(defaults, options);
            var opt = options, jtype = opt.type, jfit = opt.fit, jwidth = opt.width, vtabs = 'vertical', accord = 'accordion';
            var hash = window.location.hash;
            var historyApi = !!(window.history && history.replaceState);
            $(this).bind('tabactivate', function(e, currentTab) {
                if (typeof options.activate === 'function') {
                    options.activate.call(currentTab, e)
                }
            });
            this.each(function() {
                var $respTabs = $(this);
                var $respTabsList = $respTabs.find('ul.resp-tabs-list');
                var respTabsId = $respTabs.attr('id');
                $respTabs.find('ul.resp-tabs-list li').addClass('resp-tab-item');
                $respTabs.css({'display': 'block','width': jwidth});
                $respTabs.find('.resp-tabs-container > div').addClass('resp-tab-content');
                jtab_options();
                function jtab_options() {
                    if (jtype == vtabs) {
                        $respTabs.addClass('resp-vtabs');
                    }
                    if (jfit == true) {
                        $respTabs.css({width: '100%',margin: '0px'});
                    }
                    if (jtype == accord) {
                        $respTabs.addClass('resp-easy-accordion');
                        $respTabs.find('.resp-tabs-list').css('display', 'none');
                    }
                }
                var $tabItemh2;
                $respTabs.find('.resp-tab-content').before("<h2 class='resp-accordion' role='tab'><span class='resp-arrow'></span></h2>");
                var itemCount = 0;
                $respTabs.find('.resp-accordion').each(function() {
                    $tabItemh2 = $(this);
                    var $tabItem = $respTabs.find('.resp-tab-item:eq(' + itemCount + ')');
                    var $accItem = $respTabs.find('.resp-accordion:eq(' + itemCount + ')');
                    $accItem.append($tabItem.html());
                    $accItem.data($tabItem.data());
                    $tabItemh2.attr('aria-controls', 'tab_item-' + (itemCount));
                    itemCount++;
                });
                var count = 0, $tabContent;
                $respTabs.find('.resp-tab-item').each(function() {
                    $tabItem = $(this);
                    $tabItem.attr('aria-controls', 'tab_item-' + (count));
                    $tabItem.attr('role', 'tab');
                    var tabcount = 0;
                    $respTabs.find('.resp-tab-content').each(function() {
                        $tabContent = $(this);
                        $tabContent.attr('aria-labelledby', 'tab_item-' + (tabcount));
                        tabcount++;
                    });
                    count++;
                });
                var tabNum = 0;
                if (hash != '') {
                    var matches = hash.match(new RegExp(respTabsId + "([0-9]+)"));
                    if (matches !== null && matches.length === 2) {
                        tabNum = parseInt(matches[1], 10) - 1;
                        if (tabNum > count) {
                            tabNum = 0;
                        }
                    }
                }
                $($respTabs.find('.resp-tab-item')[tabNum]).addClass('resp-tab-active');
                if (options.closed !== true && !(options.closed === 'accordion' && !$respTabsList.is(':visible')) && !(options.closed === 'tabs' && $respTabsList.is(':visible'))) {
                    $($respTabs.find('.resp-accordion')[tabNum]).addClass('resp-tab-active');
                    $($respTabs.find('.resp-tab-content')[tabNum]).addClass('resp-tab-content-active').attr('style', 'display:block');
                } 
                else {
                    $($respTabs.find('.resp-tab-content')[tabNum]).addClass('resp-tab-content-active resp-accordion-closed')
                }
                $respTabs.find("[role=tab]").each(function() {
                    var $currentTab = $(this);
                    $currentTab.click(function() {
                        var $currentTab = $(this);
                        var $tabAria = $currentTab.attr('aria-controls');
                        if ($currentTab.hasClass('resp-accordion') && $currentTab.hasClass('resp-tab-active')) {
                            $respTabs.find('.resp-tab-content-active').slideUp('', function() {
                                $(this).addClass('resp-accordion-closed');
                            });
                            $currentTab.removeClass('resp-tab-active');
                            return false;
                        }
                        if (!$currentTab.hasClass('resp-tab-active') && $currentTab.hasClass('resp-accordion')) {
                            $respTabs.find('.resp-tab-active').removeClass('resp-tab-active');
                            $respTabs.find('.resp-tab-content-active').slideUp().removeClass('resp-tab-content-active resp-accordion-closed');
                            $respTabs.find("[aria-controls=" + $tabAria + "]").addClass('resp-tab-active');
                            $respTabs.find('.resp-tab-content[aria-labelledby = ' + $tabAria + ']').slideDown().addClass('resp-tab-content-active');
                        } else {
                            $respTabs.find('.resp-tab-active').removeClass('resp-tab-active');
                            $respTabs.find('.resp-tab-content-active').removeAttr('style').removeClass('resp-tab-content-active').removeClass('resp-accordion-closed');
                            $respTabs.find("[aria-controls=" + $tabAria + "]").addClass('resp-tab-active');
                            $respTabs.find('.resp-tab-content[aria-labelledby = ' + $tabAria + ']').addClass('resp-tab-content-active').attr('style', 'display:block');
                        }
                        $currentTab.trigger('tabactivate', $currentTab);
                        if (historyApi) {
                            var currentHash = window.location.hash;
                            var newHash = respTabsId + (parseInt($tabAria.substring(9), 10) + 1).toString();
                            if (currentHash != "") {
                                var re = new RegExp(respTabsId + "[0-9]+");
                                if (currentHash.match(re) != null) {
                                    newHash = currentHash.replace(re, newHash);
                                } 
                                else {
                                    newHash = currentHash + "|" + newHash;
                                }
                            } 
                            else {
                                newHash = '#' + newHash;
                            }
                            history.replaceState(null, null, newHash);
                        }
                    });
                });
                $(window).resize(function() {
                    $respTabs.find('.resp-accordion-closed').removeAttr('style');
                });
            });
        }});
})(jQuery);
$(document).foundation();
$('#equalheight .panel').equalHeights();
$(document).ready(function() {
    $('#countryTab').easyResponsiveTabs({type: 'default',width: 'auto',fit: true,closed: 'tabs',activate: function(event) {
            var $tab = $(this);
            var $info = $('#tabInfo');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }});
    $('#verticalTab').easyResponsiveTabs({type: 'vertical',width: 'auto',fit: true});
});
$(document).ready(function() {
    $('.toggle-doc').click(function() {
        $(this).find('i').toggleClass("fa-plus-circle fa-minus-circle");
    });
});
jQuery.fn.topLink = function(settings) {
    settings = jQuery.extend({min: 1,fadeSpeed: 200}, settings);
    return this.each(function() {
        var el = $(this);
        el.hide();
        $(window).scroll(function() {
            if ($(window).scrollTop() >= settings.min) 
            {
                el.fadeIn(settings.fadeSpeed);
            } 
            else 
            {
                el.fadeOut(settings.fadeSpeed);
            }
        });
    });
};
$(document).ready(function() {
    $('#top-link').click(function(e) {
        e.preventDefault();
        $.scrollTo(0, 300);
    });
});
jQuery(function($) {
    $(document).ready(function() {
        element = $('.navbar-wrapper');
        if (!!element) {
            try {
                element.stickUp();
            } 
            catch (e) {
            }
        }
    });
});

