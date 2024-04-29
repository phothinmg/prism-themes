"use strict";
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _create_for_of_iterator_helper_loose(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it) return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupported_iterable_to_array(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        return function() {
            if (i >= o.length) {
                return {
                    done: true
                };
            }
            return {
                done: false,
                value: o[i++]
            };
        };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var fr = Object.create;
var au = Object.defineProperty;
var pr = Object.getOwnPropertyDescriptor;
var hr = Object.getOwnPropertyNames;
var mr = Object.getPrototypeOf, gr = Object.prototype.hasOwnProperty;
var _e = function(e) {
    return (typeof require === "undefined" ? "undefined" : _type_of(require)) < "u" ? require : (typeof Proxy === "undefined" ? "undefined" : _type_of(Proxy)) < "u" ? new Proxy(e, {
        get: function(a, r) {
            return ((typeof require === "undefined" ? "undefined" : _type_of(require)) < "u" ? require : a)[r];
        }
    }) : e;
}(function(e) {
    if ((typeof require === "undefined" ? "undefined" : _type_of(require)) < "u") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + e + '" is not supported');
});
var le = function(e, a) {
    return function() {
        return a || e((a = {
            exports: {}
        }).exports, a), a.exports;
    };
};
var Dr = function(e, a, r, d) {
    var _loop = function() {
        var t = _step.value;
        !gr.call(e, t) && t !== r && au(e, t, {
            get: function() {
                return a[t];
            },
            enumerable: !(d = pr(a, t)) || d.enumerable
        });
    };
    if (a && typeof a == "object" || typeof a == "function") for(var _iterator = _create_for_of_iterator_helper_loose(hr(a)), _step; !(_step = _iterator()).done;)_loop();
    return e;
};
var ie = function(e, a, r) {
    return r = e != null ? fr(mr(e)) : {}, Dr(a || !e || !e.__esModule ? au(r, "default", {
        value: e,
        enumerable: !0
    }) : r, e);
};
var me = le(function(nu, Ee) {
    (function() {
        function e(u) {
            var i = {
                omitExtraWLInCodeBlocks: {
                    defaultValue: !1,
                    describe: "Omit the default extra whiteline added to code blocks",
                    type: "boolean"
                },
                noHeaderId: {
                    defaultValue: !1,
                    describe: "Turn on/off generated header id",
                    type: "boolean"
                },
                prefixHeaderId: {
                    defaultValue: !1,
                    describe: "Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",
                    type: "string"
                },
                rawPrefixHeaderId: {
                    defaultValue: !1,
                    describe: 'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
                    type: "boolean"
                },
                ghCompatibleHeaderId: {
                    defaultValue: !1,
                    describe: "Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",
                    type: "boolean"
                },
                rawHeaderId: {
                    defaultValue: !1,
                    describe: "Remove only spaces, ' and \" from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids",
                    type: "boolean"
                },
                headerLevelStart: {
                    defaultValue: !1,
                    describe: "The header blocks level start",
                    type: "integer"
                },
                parseImgDimensions: {
                    defaultValue: !1,
                    describe: "Turn on/off image dimension parsing",
                    type: "boolean"
                },
                simplifiedAutoLink: {
                    defaultValue: !1,
                    describe: "Turn on/off GFM autolink style",
                    type: "boolean"
                },
                excludeTrailingPunctuationFromURLs: {
                    defaultValue: !1,
                    describe: "Excludes trailing punctuation from links generated with autoLinking",
                    type: "boolean"
                },
                literalMidWordUnderscores: {
                    defaultValue: !1,
                    describe: "Parse midword underscores as literal underscores",
                    type: "boolean"
                },
                literalMidWordAsterisks: {
                    defaultValue: !1,
                    describe: "Parse midword asterisks as literal asterisks",
                    type: "boolean"
                },
                strikethrough: {
                    defaultValue: !1,
                    describe: "Turn on/off strikethrough support",
                    type: "boolean"
                },
                tables: {
                    defaultValue: !1,
                    describe: "Turn on/off tables support",
                    type: "boolean"
                },
                tablesHeaderId: {
                    defaultValue: !1,
                    describe: "Add an id to table headers",
                    type: "boolean"
                },
                ghCodeBlocks: {
                    defaultValue: !0,
                    describe: "Turn on/off GFM fenced code blocks support",
                    type: "boolean"
                },
                tasklists: {
                    defaultValue: !1,
                    describe: "Turn on/off GFM tasklist support",
                    type: "boolean"
                },
                smoothLivePreview: {
                    defaultValue: !1,
                    describe: "Prevents weird effects in live previews due to incomplete input",
                    type: "boolean"
                },
                smartIndentationFix: {
                    defaultValue: !1,
                    describe: "Tries to smartly fix indentation in es6 strings",
                    type: "boolean"
                },
                disableForced4SpacesIndentedSublists: {
                    defaultValue: !1,
                    describe: "Disables the requirement of indenting nested sublists by 4 spaces",
                    type: "boolean"
                },
                simpleLineBreaks: {
                    defaultValue: !1,
                    describe: "Parses simple line breaks as <br> (GFM Style)",
                    type: "boolean"
                },
                requireSpaceBeforeHeadingText: {
                    defaultValue: !1,
                    describe: "Makes adding a space between `#` and the header text mandatory (GFM Style)",
                    type: "boolean"
                },
                ghMentions: {
                    defaultValue: !1,
                    describe: "Enables github @mentions",
                    type: "boolean"
                },
                ghMentionsLink: {
                    defaultValue: "https://github.com/{u}",
                    describe: "Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",
                    type: "string"
                },
                encodeEmails: {
                    defaultValue: !0,
                    describe: "Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",
                    type: "boolean"
                },
                openLinksInNewWindow: {
                    defaultValue: !1,
                    describe: "Open all links in new windows",
                    type: "boolean"
                },
                backslashEscapesHTMLTags: {
                    defaultValue: !1,
                    describe: "Support for HTML Tag escaping. ex: <div>foo</div>",
                    type: "boolean"
                },
                emoji: {
                    defaultValue: !1,
                    describe: "Enable emoji support. Ex: `this is a :smile: emoji`",
                    type: "boolean"
                },
                underline: {
                    defaultValue: !1,
                    describe: "Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",
                    type: "boolean"
                },
                ellipsis: {
                    defaultValue: !0,
                    describe: "Replaces three dots with the ellipsis unicode character",
                    type: "boolean"
                },
                completeHTMLDocument: {
                    defaultValue: !1,
                    describe: "Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",
                    type: "boolean"
                },
                metadata: {
                    defaultValue: !1,
                    describe: "Enable support for document metadata (defined at the top of the document between `\xab\xab\xab` and `\xbb\xbb\xbb` or between `---` and `---`).",
                    type: "boolean"
                },
                splitAdjacentBlockquotes: {
                    defaultValue: !1,
                    describe: "Split adjacent blockquote blocks",
                    type: "boolean"
                }
            };
            if (u === !1) return JSON.parse(JSON.stringify(i));
            var n = {};
            for(var o in i)i.hasOwnProperty(o) && (n[o] = i[o].defaultValue);
            return n;
        }
        function a() {
            var u = e(!0), i = {};
            for(var n in u)u.hasOwnProperty(n) && (i[n] = !0);
            return i;
        }
        var r = {}, d = {}, t = {}, p = e(!0), c = "vanilla", m = {
            github: {
                omitExtraWLInCodeBlocks: !0,
                simplifiedAutoLink: !0,
                excludeTrailingPunctuationFromURLs: !0,
                literalMidWordUnderscores: !0,
                strikethrough: !0,
                tables: !0,
                tablesHeaderId: !0,
                ghCodeBlocks: !0,
                tasklists: !0,
                disableForced4SpacesIndentedSublists: !0,
                simpleLineBreaks: !0,
                requireSpaceBeforeHeadingText: !0,
                ghCompatibleHeaderId: !0,
                ghMentions: !0,
                backslashEscapesHTMLTags: !0,
                emoji: !0,
                splitAdjacentBlockquotes: !0
            },
            original: {
                noHeaderId: !0,
                ghCodeBlocks: !1
            },
            ghost: {
                omitExtraWLInCodeBlocks: !0,
                parseImgDimensions: !0,
                simplifiedAutoLink: !0,
                excludeTrailingPunctuationFromURLs: !0,
                literalMidWordUnderscores: !0,
                strikethrough: !0,
                tables: !0,
                tablesHeaderId: !0,
                ghCodeBlocks: !0,
                tasklists: !0,
                smoothLivePreview: !0,
                simpleLineBreaks: !0,
                requireSpaceBeforeHeadingText: !0,
                ghMentions: !1,
                encodeEmails: !0
            },
            vanilla: e(!0),
            allOn: a()
        };
        r.helper = {}, r.extensions = {}, r.setOption = function(u, i) {
            return p[u] = i, this;
        }, r.getOption = function(u) {
            return p[u];
        }, r.getOptions = function() {
            return p;
        }, r.resetOptions = function() {
            p = e(!0);
        }, r.setFlavor = function(u) {
            if (!m.hasOwnProperty(u)) throw Error(u + " flavor was not found");
            r.resetOptions();
            var i = m[u];
            c = u;
            for(var n in i)i.hasOwnProperty(n) && (p[n] = i[n]);
        }, r.getFlavor = function() {
            return c;
        }, r.getFlavorOptions = function(u) {
            if (m.hasOwnProperty(u)) return m[u];
        }, r.getDefaultOptions = function(u) {
            return e(u);
        }, r.subParser = function(u, i) {
            if (r.helper.isString(u)) if ((typeof i === "undefined" ? "undefined" : _type_of(i)) < "u") d[u] = i;
            else {
                if (d.hasOwnProperty(u)) return d[u];
                throw Error("SubParser named " + u + " not registered!");
            }
        }, r.extension = function(u, i) {
            if (!r.helper.isString(u)) throw Error("Extension 'name' must be a string");
            if (u = r.helper.stdExtName(u), r.helper.isUndefined(i)) {
                if (!t.hasOwnProperty(u)) throw Error("Extension named " + u + " is not registered!");
                return t[u];
            } else {
                typeof i == "function" && (i = i()), r.helper.isArray(i) || (i = [
                    i
                ]);
                var n = D(i, u);
                if (n.valid) t[u] = i;
                else throw Error(n.error);
            }
        }, r.getAllExtensions = function() {
            return t;
        }, r.removeExtension = function(u) {
            delete t[u];
        }, r.resetExtensions = function() {
            t = {};
        };
        function D(u, i) {
            var n = i ? "Error in " + i + " extension->" : "Error in unnamed extension", o = {
                valid: !0,
                error: ""
            };
            r.helper.isArray(u) || (u = [
                u
            ]);
            for(var f = 0; f < u.length; ++f){
                var h = n + " sub-extension " + f + ": ", s = u[f];
                if (typeof s != "object") return o.valid = !1, o.error = h + "must be an object, but " + (typeof s === "undefined" ? "undefined" : _type_of(s)) + " given", o;
                if (!r.helper.isString(s.type)) return o.valid = !1, o.error = h + 'property "type" must be a string, but ' + _type_of(s.type) + " given", o;
                var g = s.type = s.type.toLowerCase();
                if (g === "language" && (g = s.type = "lang"), g === "html" && (g = s.type = "output"), g !== "lang" && g !== "output" && g !== "listener") return o.valid = !1, o.error = h + "type " + g + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"', o;
                if (g === "listener") {
                    if (r.helper.isUndefined(s.listeners)) return o.valid = !1, o.error = h + '. Extensions of type "listener" must have a property called "listeners"', o;
                } else if (r.helper.isUndefined(s.filter) && r.helper.isUndefined(s.regex)) return o.valid = !1, o.error = h + g + ' extensions must define either a "regex" property or a "filter" method', o;
                if (s.listeners) {
                    if (typeof s.listeners != "object") return o.valid = !1, o.error = h + '"listeners" property must be an object but ' + _type_of(s.listeners) + " given", o;
                    for(var B in s.listeners)if (s.listeners.hasOwnProperty(B) && typeof s.listeners[B] != "function") return o.valid = !1, o.error = h + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + B + " must be a function but " + _type_of(s.listeners[B]) + " given", o;
                }
                if (s.filter) {
                    if (typeof s.filter != "function") return o.valid = !1, o.error = h + '"filter" must be a function, but ' + _type_of(s.filter) + " given", o;
                } else if (s.regex) {
                    if (r.helper.isString(s.regex) && (s.regex = new RegExp(s.regex, "g")), !_instanceof(s.regex, RegExp)) return o.valid = !1, o.error = h + '"regex" property must either be a string or a RegExp object, but ' + _type_of(s.regex) + " given", o;
                    if (r.helper.isUndefined(s.replace)) return o.valid = !1, o.error = h + '"regex" extensions must implement a replace string or function', o;
                }
            }
            return o;
        }
        r.validateExtension = function(u) {
            var i = D(u, null);
            return i.valid ? !0 : (console.warn(i.error), !1);
        }, r.hasOwnProperty("helper") || (r.helper = {}), r.helper.isString = function(u) {
            return typeof u == "string" || _instanceof(u, String);
        }, r.helper.isFunction = function(u) {
            var i = {};
            return u && i.toString.call(u) === "[object Function]";
        }, r.helper.isArray = function(u) {
            return Array.isArray(u);
        }, r.helper.isUndefined = function(u) {
            return (typeof u === "undefined" ? "undefined" : _type_of(u)) > "u";
        }, r.helper.forEach = function(u, i) {
            if (r.helper.isUndefined(u)) throw new Error("obj param is required");
            if (r.helper.isUndefined(i)) throw new Error("callback param is required");
            if (!r.helper.isFunction(i)) throw new Error("callback param must be a function/closure");
            if (typeof u.forEach == "function") u.forEach(i);
            else if (r.helper.isArray(u)) for(var n = 0; n < u.length; n++)i(u[n], n, u);
            else if (typeof u == "object") for(var o in u)u.hasOwnProperty(o) && i(u[o], o, u);
            else throw new Error("obj does not seem to be an array or an iterable object");
        }, r.helper.stdExtName = function(u) {
            return u.replace(/[_?*+\/\\.^-]/g, "").replace(/\s/g, "").toLowerCase();
        };
        function A(u, i) {
            var n = i.charCodeAt(0);
            return "\xa8E" + n + "E";
        }
        r.helper.escapeCharactersCallback = A, r.helper.escapeCharacters = function(u, i, n) {
            var o = "([" + i.replace(/([\[\]\\])/g, "\\$1") + "])";
            n && (o = "\\\\" + o);
            var f = new RegExp(o, "g");
            return u = u.replace(f, A), u;
        }, r.helper.unescapeHTMLEntities = function(u) {
            return u.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
        };
        var y = function y(u, i, n, o) {
            var f = o || "", h = f.indexOf("g") > -1, s = new RegExp(i + "|" + n, "g" + f.replace(/g/g, "")), g = new RegExp(i, f.replace(/g/g, "")), B = [], S, x, L, l, E;
            do for(S = 0; L = s.exec(u);)if (g.test(L[0])) S++ || (x = s.lastIndex, l = x - L[0].length);
            else if (S && !--S) {
                E = L.index + L[0].length;
                var v = {
                    left: {
                        start: l,
                        end: x
                    },
                    match: {
                        start: x,
                        end: L.index
                    },
                    right: {
                        start: L.index,
                        end: E
                    },
                    wholeMatch: {
                        start: l,
                        end: E
                    }
                };
                if (B.push(v), !h) return B;
            }
            while (S && (s.lastIndex = x));
            return B;
        };
        r.helper.matchRecursiveRegExp = function(u, i, n, o) {
            for(var f = y(u, i, n, o), h = [], s = 0; s < f.length; ++s)h.push([
                u.slice(f[s].wholeMatch.start, f[s].wholeMatch.end),
                u.slice(f[s].match.start, f[s].match.end),
                u.slice(f[s].left.start, f[s].left.end),
                u.slice(f[s].right.start, f[s].right.end)
            ]);
            return h;
        }, r.helper.replaceRecursiveRegExp = function(u, i, n, o, f) {
            if (!r.helper.isFunction(i)) {
                var h = i;
                i = function i() {
                    return h;
                };
            }
            var s = y(u, n, o, f), g = u, B = s.length;
            if (B > 0) {
                var S = [];
                s[0].wholeMatch.start !== 0 && S.push(u.slice(0, s[0].wholeMatch.start));
                for(var x = 0; x < B; ++x)S.push(i(u.slice(s[x].wholeMatch.start, s[x].wholeMatch.end), u.slice(s[x].match.start, s[x].match.end), u.slice(s[x].left.start, s[x].left.end), u.slice(s[x].right.start, s[x].right.end))), x < B - 1 && S.push(u.slice(s[x].wholeMatch.end, s[x + 1].wholeMatch.start));
                s[B - 1].wholeMatch.end < u.length && S.push(u.slice(s[B - 1].wholeMatch.end)), g = S.join("");
            }
            return g;
        }, r.helper.regexIndexOf = function(u, i, n) {
            if (!r.helper.isString(u)) throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
            if (!_instanceof(i, RegExp)) throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
            var o = u.substring(n || 0).search(i);
            return o >= 0 ? o + (n || 0) : o;
        }, r.helper.splitAtIndex = function(u, i) {
            if (!r.helper.isString(u)) throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
            return [
                u.substring(0, i),
                u.substring(i)
            ];
        }, r.helper.encodeEmailAddress = function(u) {
            var i = [
                function(n) {
                    return "&#" + n.charCodeAt(0) + ";";
                },
                function(n) {
                    return "&#x" + n.charCodeAt(0).toString(16) + ";";
                },
                function(n) {
                    return n;
                }
            ];
            return u = u.replace(/./g, function(n) {
                if (n === "@") n = i[Math.floor(Math.random() * 2)](n);
                else {
                    var o = Math.random();
                    n = o > .9 ? i[2](n) : o > .45 ? i[1](n) : i[0](n);
                }
                return n;
            }), u;
        }, r.helper.padEnd = function(i, n, o) {
            return n = n >> 0, o = String(o || " "), i.length > n ? String(i) : (n = n - i.length, n > o.length && (o += o.repeat(n / o.length)), String(i) + o.slice(0, n));
        }, (typeof console === "undefined" ? "undefined" : _type_of(console)) > "u" && (console = {
            warn: function warn(u) {
                alert(u);
            },
            log: function log(u) {
                alert(u);
            },
            error: function error(u) {
                throw u;
            }
        }), r.helper.regexes = {
            asteriskDashAndColon: /([*_:~])/g
        }, r.helper.emojis = {
            "+1": "\uD83D\uDC4D",
            "-1": "\uD83D\uDC4E",
            100: "\uD83D\uDCAF",
            1234: "\uD83D\uDD22",
            "1st_place_medal": "\uD83E\uDD47",
            "2nd_place_medal": "\uD83E\uDD48",
            "3rd_place_medal": "\uD83E\uDD49",
            "8ball": "\uD83C\uDFB1",
            a: "\uD83C\uDD70️",
            ab: "\uD83C\uDD8E",
            abc: "\uD83D\uDD24",
            abcd: "\uD83D\uDD21",
            accept: "\uD83C\uDE51",
            aerial_tramway: "\uD83D\uDEA1",
            airplane: "✈️",
            alarm_clock: "⏰",
            alembic: "⚗️",
            alien: "\uD83D\uDC7D",
            ambulance: "\uD83D\uDE91",
            amphora: "\uD83C\uDFFA",
            anchor: "⚓️",
            angel: "\uD83D\uDC7C",
            anger: "\uD83D\uDCA2",
            angry: "\uD83D\uDE20",
            anguished: "\uD83D\uDE27",
            ant: "\uD83D\uDC1C",
            apple: "\uD83C\uDF4E",
            aquarius: "♒️",
            aries: "♈️",
            arrow_backward: "◀️",
            arrow_double_down: "⏬",
            arrow_double_up: "⏫",
            arrow_down: "⬇️",
            arrow_down_small: "\uD83D\uDD3D",
            arrow_forward: "▶️",
            arrow_heading_down: "⤵️",
            arrow_heading_up: "⤴️",
            arrow_left: "⬅️",
            arrow_lower_left: "↙️",
            arrow_lower_right: "↘️",
            arrow_right: "➡️",
            arrow_right_hook: "↪️",
            arrow_up: "⬆️",
            arrow_up_down: "↕️",
            arrow_up_small: "\uD83D\uDD3C",
            arrow_upper_left: "↖️",
            arrow_upper_right: "↗️",
            arrows_clockwise: "\uD83D\uDD03",
            arrows_counterclockwise: "\uD83D\uDD04",
            art: "\uD83C\uDFA8",
            articulated_lorry: "\uD83D\uDE9B",
            artificial_satellite: "\uD83D\uDEF0",
            astonished: "\uD83D\uDE32",
            athletic_shoe: "\uD83D\uDC5F",
            atm: "\uD83C\uDFE7",
            atom_symbol: "⚛️",
            avocado: "\uD83E\uDD51",
            b: "\uD83C\uDD71️",
            baby: "\uD83D\uDC76",
            baby_bottle: "\uD83C\uDF7C",
            baby_chick: "\uD83D\uDC24",
            baby_symbol: "\uD83D\uDEBC",
            back: "\uD83D\uDD19",
            bacon: "\uD83E\uDD53",
            badminton: "\uD83C\uDFF8",
            baggage_claim: "\uD83D\uDEC4",
            baguette_bread: "\uD83E\uDD56",
            balance_scale: "⚖️",
            balloon: "\uD83C\uDF88",
            ballot_box: "\uD83D\uDDF3",
            ballot_box_with_check: "☑️",
            bamboo: "\uD83C\uDF8D",
            banana: "\uD83C\uDF4C",
            bangbang: "‼️",
            bank: "\uD83C\uDFE6",
            bar_chart: "\uD83D\uDCCA",
            barber: "\uD83D\uDC88",
            baseball: "⚾️",
            basketball: "\uD83C\uDFC0",
            basketball_man: "⛹️",
            basketball_woman: "⛹️&zwj;♀️",
            bat: "\uD83E\uDD87",
            bath: "\uD83D\uDEC0",
            bathtub: "\uD83D\uDEC1",
            battery: "\uD83D\uDD0B",
            beach_umbrella: "\uD83C\uDFD6",
            bear: "\uD83D\uDC3B",
            bed: "\uD83D\uDECF",
            bee: "\uD83D\uDC1D",
            beer: "\uD83C\uDF7A",
            beers: "\uD83C\uDF7B",
            beetle: "\uD83D\uDC1E",
            beginner: "\uD83D\uDD30",
            bell: "\uD83D\uDD14",
            bellhop_bell: "\uD83D\uDECE",
            bento: "\uD83C\uDF71",
            biking_man: "\uD83D\uDEB4",
            bike: "\uD83D\uDEB2",
            biking_woman: "\uD83D\uDEB4&zwj;♀️",
            bikini: "\uD83D\uDC59",
            biohazard: "☣️",
            bird: "\uD83D\uDC26",
            birthday: "\uD83C\uDF82",
            black_circle: "⚫️",
            black_flag: "\uD83C\uDFF4",
            black_heart: "\uD83D\uDDA4",
            black_joker: "\uD83C\uDCCF",
            black_large_square: "⬛️",
            black_medium_small_square: "◾️",
            black_medium_square: "◼️",
            black_nib: "✒️",
            black_small_square: "▪️",
            black_square_button: "\uD83D\uDD32",
            blonde_man: "\uD83D\uDC71",
            blonde_woman: "\uD83D\uDC71&zwj;♀️",
            blossom: "\uD83C\uDF3C",
            blowfish: "\uD83D\uDC21",
            blue_book: "\uD83D\uDCD8",
            blue_car: "\uD83D\uDE99",
            blue_heart: "\uD83D\uDC99",
            blush: "\uD83D\uDE0A",
            boar: "\uD83D\uDC17",
            boat: "⛵️",
            bomb: "\uD83D\uDCA3",
            book: "\uD83D\uDCD6",
            bookmark: "\uD83D\uDD16",
            bookmark_tabs: "\uD83D\uDCD1",
            books: "\uD83D\uDCDA",
            boom: "\uD83D\uDCA5",
            boot: "\uD83D\uDC62",
            bouquet: "\uD83D\uDC90",
            bowing_man: "\uD83D\uDE47",
            bow_and_arrow: "\uD83C\uDFF9",
            bowing_woman: "\uD83D\uDE47&zwj;♀️",
            bowling: "\uD83C\uDFB3",
            boxing_glove: "\uD83E\uDD4A",
            boy: "\uD83D\uDC66",
            bread: "\uD83C\uDF5E",
            bride_with_veil: "\uD83D\uDC70",
            bridge_at_night: "\uD83C\uDF09",
            briefcase: "\uD83D\uDCBC",
            broken_heart: "\uD83D\uDC94",
            bug: "\uD83D\uDC1B",
            building_construction: "\uD83C\uDFD7",
            bulb: "\uD83D\uDCA1",
            bullettrain_front: "\uD83D\uDE85",
            bullettrain_side: "\uD83D\uDE84",
            burrito: "\uD83C\uDF2F",
            bus: "\uD83D\uDE8C",
            business_suit_levitating: "\uD83D\uDD74",
            busstop: "\uD83D\uDE8F",
            bust_in_silhouette: "\uD83D\uDC64",
            busts_in_silhouette: "\uD83D\uDC65",
            butterfly: "\uD83E\uDD8B",
            cactus: "\uD83C\uDF35",
            cake: "\uD83C\uDF70",
            calendar: "\uD83D\uDCC6",
            call_me_hand: "\uD83E\uDD19",
            calling: "\uD83D\uDCF2",
            camel: "\uD83D\uDC2B",
            camera: "\uD83D\uDCF7",
            camera_flash: "\uD83D\uDCF8",
            camping: "\uD83C\uDFD5",
            cancer: "♋️",
            candle: "\uD83D\uDD6F",
            candy: "\uD83C\uDF6C",
            canoe: "\uD83D\uDEF6",
            capital_abcd: "\uD83D\uDD20",
            capricorn: "♑️",
            car: "\uD83D\uDE97",
            card_file_box: "\uD83D\uDDC3",
            card_index: "\uD83D\uDCC7",
            card_index_dividers: "\uD83D\uDDC2",
            carousel_horse: "\uD83C\uDFA0",
            carrot: "\uD83E\uDD55",
            cat: "\uD83D\uDC31",
            cat2: "\uD83D\uDC08",
            cd: "\uD83D\uDCBF",
            chains: "⛓",
            champagne: "\uD83C\uDF7E",
            chart: "\uD83D\uDCB9",
            chart_with_downwards_trend: "\uD83D\uDCC9",
            chart_with_upwards_trend: "\uD83D\uDCC8",
            checkered_flag: "\uD83C\uDFC1",
            cheese: "\uD83E\uDDC0",
            cherries: "\uD83C\uDF52",
            cherry_blossom: "\uD83C\uDF38",
            chestnut: "\uD83C\uDF30",
            chicken: "\uD83D\uDC14",
            children_crossing: "\uD83D\uDEB8",
            chipmunk: "\uD83D\uDC3F",
            chocolate_bar: "\uD83C\uDF6B",
            christmas_tree: "\uD83C\uDF84",
            church: "⛪️",
            cinema: "\uD83C\uDFA6",
            circus_tent: "\uD83C\uDFAA",
            city_sunrise: "\uD83C\uDF07",
            city_sunset: "\uD83C\uDF06",
            cityscape: "\uD83C\uDFD9",
            cl: "\uD83C\uDD91",
            clamp: "\uD83D\uDDDC",
            clap: "\uD83D\uDC4F",
            clapper: "\uD83C\uDFAC",
            classical_building: "\uD83C\uDFDB",
            clinking_glasses: "\uD83E\uDD42",
            clipboard: "\uD83D\uDCCB",
            clock1: "\uD83D\uDD50",
            clock10: "\uD83D\uDD59",
            clock1030: "\uD83D\uDD65",
            clock11: "\uD83D\uDD5A",
            clock1130: "\uD83D\uDD66",
            clock12: "\uD83D\uDD5B",
            clock1230: "\uD83D\uDD67",
            clock130: "\uD83D\uDD5C",
            clock2: "\uD83D\uDD51",
            clock230: "\uD83D\uDD5D",
            clock3: "\uD83D\uDD52",
            clock330: "\uD83D\uDD5E",
            clock4: "\uD83D\uDD53",
            clock430: "\uD83D\uDD5F",
            clock5: "\uD83D\uDD54",
            clock530: "\uD83D\uDD60",
            clock6: "\uD83D\uDD55",
            clock630: "\uD83D\uDD61",
            clock7: "\uD83D\uDD56",
            clock730: "\uD83D\uDD62",
            clock8: "\uD83D\uDD57",
            clock830: "\uD83D\uDD63",
            clock9: "\uD83D\uDD58",
            clock930: "\uD83D\uDD64",
            closed_book: "\uD83D\uDCD5",
            closed_lock_with_key: "\uD83D\uDD10",
            closed_umbrella: "\uD83C\uDF02",
            cloud: "☁️",
            cloud_with_lightning: "\uD83C\uDF29",
            cloud_with_lightning_and_rain: "⛈",
            cloud_with_rain: "\uD83C\uDF27",
            cloud_with_snow: "\uD83C\uDF28",
            clown_face: "\uD83E\uDD21",
            clubs: "♣️",
            cocktail: "\uD83C\uDF78",
            coffee: "☕️",
            coffin: "⚰️",
            cold_sweat: "\uD83D\uDE30",
            comet: "☄️",
            computer: "\uD83D\uDCBB",
            computer_mouse: "\uD83D\uDDB1",
            confetti_ball: "\uD83C\uDF8A",
            confounded: "\uD83D\uDE16",
            confused: "\uD83D\uDE15",
            congratulations: "㊗️",
            construction: "\uD83D\uDEA7",
            construction_worker_man: "\uD83D\uDC77",
            construction_worker_woman: "\uD83D\uDC77&zwj;♀️",
            control_knobs: "\uD83C\uDF9B",
            convenience_store: "\uD83C\uDFEA",
            cookie: "\uD83C\uDF6A",
            cool: "\uD83C\uDD92",
            policeman: "\uD83D\uDC6E",
            copyright: "\xa9️",
            corn: "\uD83C\uDF3D",
            couch_and_lamp: "\uD83D\uDECB",
            couple: "\uD83D\uDC6B",
            couple_with_heart_woman_man: "\uD83D\uDC91",
            couple_with_heart_man_man: "\uD83D\uDC68&zwj;❤️&zwj;\uD83D\uDC68",
            couple_with_heart_woman_woman: "\uD83D\uDC69&zwj;❤️&zwj;\uD83D\uDC69",
            couplekiss_man_man: "\uD83D\uDC68&zwj;❤️&zwj;\uD83D\uDC8B&zwj;\uD83D\uDC68",
            couplekiss_man_woman: "\uD83D\uDC8F",
            couplekiss_woman_woman: "\uD83D\uDC69&zwj;❤️&zwj;\uD83D\uDC8B&zwj;\uD83D\uDC69",
            cow: "\uD83D\uDC2E",
            cow2: "\uD83D\uDC04",
            cowboy_hat_face: "\uD83E\uDD20",
            crab: "\uD83E\uDD80",
            crayon: "\uD83D\uDD8D",
            credit_card: "\uD83D\uDCB3",
            crescent_moon: "\uD83C\uDF19",
            cricket: "\uD83C\uDFCF",
            crocodile: "\uD83D\uDC0A",
            croissant: "\uD83E\uDD50",
            crossed_fingers: "\uD83E\uDD1E",
            crossed_flags: "\uD83C\uDF8C",
            crossed_swords: "⚔️",
            crown: "\uD83D\uDC51",
            cry: "\uD83D\uDE22",
            crying_cat_face: "\uD83D\uDE3F",
            crystal_ball: "\uD83D\uDD2E",
            cucumber: "\uD83E\uDD52",
            cupid: "\uD83D\uDC98",
            curly_loop: "➰",
            currency_exchange: "\uD83D\uDCB1",
            curry: "\uD83C\uDF5B",
            custard: "\uD83C\uDF6E",
            customs: "\uD83D\uDEC3",
            cyclone: "\uD83C\uDF00",
            dagger: "\uD83D\uDDE1",
            dancer: "\uD83D\uDC83",
            dancing_women: "\uD83D\uDC6F",
            dancing_men: "\uD83D\uDC6F&zwj;♂️",
            dango: "\uD83C\uDF61",
            dark_sunglasses: "\uD83D\uDD76",
            dart: "\uD83C\uDFAF",
            dash: "\uD83D\uDCA8",
            date: "\uD83D\uDCC5",
            deciduous_tree: "\uD83C\uDF33",
            deer: "\uD83E\uDD8C",
            department_store: "\uD83C\uDFEC",
            derelict_house: "\uD83C\uDFDA",
            desert: "\uD83C\uDFDC",
            desert_island: "\uD83C\uDFDD",
            desktop_computer: "\uD83D\uDDA5",
            male_detective: "\uD83D\uDD75️",
            diamond_shape_with_a_dot_inside: "\uD83D\uDCA0",
            diamonds: "♦️",
            disappointed: "\uD83D\uDE1E",
            disappointed_relieved: "\uD83D\uDE25",
            dizzy: "\uD83D\uDCAB",
            dizzy_face: "\uD83D\uDE35",
            do_not_litter: "\uD83D\uDEAF",
            dog: "\uD83D\uDC36",
            dog2: "\uD83D\uDC15",
            dollar: "\uD83D\uDCB5",
            dolls: "\uD83C\uDF8E",
            dolphin: "\uD83D\uDC2C",
            door: "\uD83D\uDEAA",
            doughnut: "\uD83C\uDF69",
            dove: "\uD83D\uDD4A",
            dragon: "\uD83D\uDC09",
            dragon_face: "\uD83D\uDC32",
            dress: "\uD83D\uDC57",
            dromedary_camel: "\uD83D\uDC2A",
            drooling_face: "\uD83E\uDD24",
            droplet: "\uD83D\uDCA7",
            drum: "\uD83E\uDD41",
            duck: "\uD83E\uDD86",
            dvd: "\uD83D\uDCC0",
            "e-mail": "\uD83D\uDCE7",
            eagle: "\uD83E\uDD85",
            ear: "\uD83D\uDC42",
            ear_of_rice: "\uD83C\uDF3E",
            earth_africa: "\uD83C\uDF0D",
            earth_americas: "\uD83C\uDF0E",
            earth_asia: "\uD83C\uDF0F",
            egg: "\uD83E\uDD5A",
            eggplant: "\uD83C\uDF46",
            eight_pointed_black_star: "✴️",
            eight_spoked_asterisk: "✳️",
            electric_plug: "\uD83D\uDD0C",
            elephant: "\uD83D\uDC18",
            email: "✉️",
            end: "\uD83D\uDD1A",
            envelope_with_arrow: "\uD83D\uDCE9",
            euro: "\uD83D\uDCB6",
            european_castle: "\uD83C\uDFF0",
            european_post_office: "\uD83C\uDFE4",
            evergreen_tree: "\uD83C\uDF32",
            exclamation: "❗️",
            expressionless: "\uD83D\uDE11",
            eye: "\uD83D\uDC41",
            eye_speech_bubble: "\uD83D\uDC41&zwj;\uD83D\uDDE8",
            eyeglasses: "\uD83D\uDC53",
            eyes: "\uD83D\uDC40",
            face_with_head_bandage: "\uD83E\uDD15",
            face_with_thermometer: "\uD83E\uDD12",
            fist_oncoming: "\uD83D\uDC4A",
            factory: "\uD83C\uDFED",
            fallen_leaf: "\uD83C\uDF42",
            family_man_woman_boy: "\uD83D\uDC6A",
            family_man_boy: "\uD83D\uDC68&zwj;\uD83D\uDC66",
            family_man_boy_boy: "\uD83D\uDC68&zwj;\uD83D\uDC66&zwj;\uD83D\uDC66",
            family_man_girl: "\uD83D\uDC68&zwj;\uD83D\uDC67",
            family_man_girl_boy: "\uD83D\uDC68&zwj;\uD83D\uDC67&zwj;\uD83D\uDC66",
            family_man_girl_girl: "\uD83D\uDC68&zwj;\uD83D\uDC67&zwj;\uD83D\uDC67",
            family_man_man_boy: "\uD83D\uDC68&zwj;\uD83D\uDC68&zwj;\uD83D\uDC66",
            family_man_man_boy_boy: "\uD83D\uDC68&zwj;\uD83D\uDC68&zwj;\uD83D\uDC66&zwj;\uD83D\uDC66",
            family_man_man_girl: "\uD83D\uDC68&zwj;\uD83D\uDC68&zwj;\uD83D\uDC67",
            family_man_man_girl_boy: "\uD83D\uDC68&zwj;\uD83D\uDC68&zwj;\uD83D\uDC67&zwj;\uD83D\uDC66",
            family_man_man_girl_girl: "\uD83D\uDC68&zwj;\uD83D\uDC68&zwj;\uD83D\uDC67&zwj;\uD83D\uDC67",
            family_man_woman_boy_boy: "\uD83D\uDC68&zwj;\uD83D\uDC69&zwj;\uD83D\uDC66&zwj;\uD83D\uDC66",
            family_man_woman_girl: "\uD83D\uDC68&zwj;\uD83D\uDC69&zwj;\uD83D\uDC67",
            family_man_woman_girl_boy: "\uD83D\uDC68&zwj;\uD83D\uDC69&zwj;\uD83D\uDC67&zwj;\uD83D\uDC66",
            family_man_woman_girl_girl: "\uD83D\uDC68&zwj;\uD83D\uDC69&zwj;\uD83D\uDC67&zwj;\uD83D\uDC67",
            family_woman_boy: "\uD83D\uDC69&zwj;\uD83D\uDC66",
            family_woman_boy_boy: "\uD83D\uDC69&zwj;\uD83D\uDC66&zwj;\uD83D\uDC66",
            family_woman_girl: "\uD83D\uDC69&zwj;\uD83D\uDC67",
            family_woman_girl_boy: "\uD83D\uDC69&zwj;\uD83D\uDC67&zwj;\uD83D\uDC66",
            family_woman_girl_girl: "\uD83D\uDC69&zwj;\uD83D\uDC67&zwj;\uD83D\uDC67",
            family_woman_woman_boy: "\uD83D\uDC69&zwj;\uD83D\uDC69&zwj;\uD83D\uDC66",
            family_woman_woman_boy_boy: "\uD83D\uDC69&zwj;\uD83D\uDC69&zwj;\uD83D\uDC66&zwj;\uD83D\uDC66",
            family_woman_woman_girl: "\uD83D\uDC69&zwj;\uD83D\uDC69&zwj;\uD83D\uDC67",
            family_woman_woman_girl_boy: "\uD83D\uDC69&zwj;\uD83D\uDC69&zwj;\uD83D\uDC67&zwj;\uD83D\uDC66",
            family_woman_woman_girl_girl: "\uD83D\uDC69&zwj;\uD83D\uDC69&zwj;\uD83D\uDC67&zwj;\uD83D\uDC67",
            fast_forward: "⏩",
            fax: "\uD83D\uDCE0",
            fearful: "\uD83D\uDE28",
            feet: "\uD83D\uDC3E",
            female_detective: "\uD83D\uDD75️&zwj;♀️",
            ferris_wheel: "\uD83C\uDFA1",
            ferry: "⛴",
            field_hockey: "\uD83C\uDFD1",
            file_cabinet: "\uD83D\uDDC4",
            file_folder: "\uD83D\uDCC1",
            film_projector: "\uD83D\uDCFD",
            film_strip: "\uD83C\uDF9E",
            fire: "\uD83D\uDD25",
            fire_engine: "\uD83D\uDE92",
            fireworks: "\uD83C\uDF86",
            first_quarter_moon: "\uD83C\uDF13",
            first_quarter_moon_with_face: "\uD83C\uDF1B",
            fish: "\uD83D\uDC1F",
            fish_cake: "\uD83C\uDF65",
            fishing_pole_and_fish: "\uD83C\uDFA3",
            fist_raised: "✊",
            fist_left: "\uD83E\uDD1B",
            fist_right: "\uD83E\uDD1C",
            flags: "\uD83C\uDF8F",
            flashlight: "\uD83D\uDD26",
            fleur_de_lis: "⚜️",
            flight_arrival: "\uD83D\uDEEC",
            flight_departure: "\uD83D\uDEEB",
            floppy_disk: "\uD83D\uDCBE",
            flower_playing_cards: "\uD83C\uDFB4",
            flushed: "\uD83D\uDE33",
            fog: "\uD83C\uDF2B",
            foggy: "\uD83C\uDF01",
            football: "\uD83C\uDFC8",
            footprints: "\uD83D\uDC63",
            fork_and_knife: "\uD83C\uDF74",
            fountain: "⛲️",
            fountain_pen: "\uD83D\uDD8B",
            four_leaf_clover: "\uD83C\uDF40",
            fox_face: "\uD83E\uDD8A",
            framed_picture: "\uD83D\uDDBC",
            free: "\uD83C\uDD93",
            fried_egg: "\uD83C\uDF73",
            fried_shrimp: "\uD83C\uDF64",
            fries: "\uD83C\uDF5F",
            frog: "\uD83D\uDC38",
            frowning: "\uD83D\uDE26",
            frowning_face: "☹️",
            frowning_man: "\uD83D\uDE4D&zwj;♂️",
            frowning_woman: "\uD83D\uDE4D",
            middle_finger: "\uD83D\uDD95",
            fuelpump: "⛽️",
            full_moon: "\uD83C\uDF15",
            full_moon_with_face: "\uD83C\uDF1D",
            funeral_urn: "⚱️",
            game_die: "\uD83C\uDFB2",
            gear: "⚙️",
            gem: "\uD83D\uDC8E",
            gemini: "♊️",
            ghost: "\uD83D\uDC7B",
            gift: "\uD83C\uDF81",
            gift_heart: "\uD83D\uDC9D",
            girl: "\uD83D\uDC67",
            globe_with_meridians: "\uD83C\uDF10",
            goal_net: "\uD83E\uDD45",
            goat: "\uD83D\uDC10",
            golf: "⛳️",
            golfing_man: "\uD83C\uDFCC️",
            golfing_woman: "\uD83C\uDFCC️&zwj;♀️",
            gorilla: "\uD83E\uDD8D",
            grapes: "\uD83C\uDF47",
            green_apple: "\uD83C\uDF4F",
            green_book: "\uD83D\uDCD7",
            green_heart: "\uD83D\uDC9A",
            green_salad: "\uD83E\uDD57",
            grey_exclamation: "❕",
            grey_question: "❔",
            grimacing: "\uD83D\uDE2C",
            grin: "\uD83D\uDE01",
            grinning: "\uD83D\uDE00",
            guardsman: "\uD83D\uDC82",
            guardswoman: "\uD83D\uDC82&zwj;♀️",
            guitar: "\uD83C\uDFB8",
            gun: "\uD83D\uDD2B",
            haircut_woman: "\uD83D\uDC87",
            haircut_man: "\uD83D\uDC87&zwj;♂️",
            hamburger: "\uD83C\uDF54",
            hammer: "\uD83D\uDD28",
            hammer_and_pick: "⚒",
            hammer_and_wrench: "\uD83D\uDEE0",
            hamster: "\uD83D\uDC39",
            hand: "✋",
            handbag: "\uD83D\uDC5C",
            handshake: "\uD83E\uDD1D",
            hankey: "\uD83D\uDCA9",
            hatched_chick: "\uD83D\uDC25",
            hatching_chick: "\uD83D\uDC23",
            headphones: "\uD83C\uDFA7",
            hear_no_evil: "\uD83D\uDE49",
            heart: "❤️",
            heart_decoration: "\uD83D\uDC9F",
            heart_eyes: "\uD83D\uDE0D",
            heart_eyes_cat: "\uD83D\uDE3B",
            heartbeat: "\uD83D\uDC93",
            heartpulse: "\uD83D\uDC97",
            hearts: "♥️",
            heavy_check_mark: "✔️",
            heavy_division_sign: "➗",
            heavy_dollar_sign: "\uD83D\uDCB2",
            heavy_heart_exclamation: "❣️",
            heavy_minus_sign: "➖",
            heavy_multiplication_x: "✖️",
            heavy_plus_sign: "➕",
            helicopter: "\uD83D\uDE81",
            herb: "\uD83C\uDF3F",
            hibiscus: "\uD83C\uDF3A",
            high_brightness: "\uD83D\uDD06",
            high_heel: "\uD83D\uDC60",
            hocho: "\uD83D\uDD2A",
            hole: "\uD83D\uDD73",
            honey_pot: "\uD83C\uDF6F",
            horse: "\uD83D\uDC34",
            horse_racing: "\uD83C\uDFC7",
            hospital: "\uD83C\uDFE5",
            hot_pepper: "\uD83C\uDF36",
            hotdog: "\uD83C\uDF2D",
            hotel: "\uD83C\uDFE8",
            hotsprings: "♨️",
            hourglass: "⌛️",
            hourglass_flowing_sand: "⏳",
            house: "\uD83C\uDFE0",
            house_with_garden: "\uD83C\uDFE1",
            houses: "\uD83C\uDFD8",
            hugs: "\uD83E\uDD17",
            hushed: "\uD83D\uDE2F",
            ice_cream: "\uD83C\uDF68",
            ice_hockey: "\uD83C\uDFD2",
            ice_skate: "⛸",
            icecream: "\uD83C\uDF66",
            id: "\uD83C\uDD94",
            ideograph_advantage: "\uD83C\uDE50",
            imp: "\uD83D\uDC7F",
            inbox_tray: "\uD83D\uDCE5",
            incoming_envelope: "\uD83D\uDCE8",
            tipping_hand_woman: "\uD83D\uDC81",
            information_source: "ℹ️",
            innocent: "\uD83D\uDE07",
            interrobang: "⁉️",
            iphone: "\uD83D\uDCF1",
            izakaya_lantern: "\uD83C\uDFEE",
            jack_o_lantern: "\uD83C\uDF83",
            japan: "\uD83D\uDDFE",
            japanese_castle: "\uD83C\uDFEF",
            japanese_goblin: "\uD83D\uDC7A",
            japanese_ogre: "\uD83D\uDC79",
            jeans: "\uD83D\uDC56",
            joy: "\uD83D\uDE02",
            joy_cat: "\uD83D\uDE39",
            joystick: "\uD83D\uDD79",
            kaaba: "\uD83D\uDD4B",
            key: "\uD83D\uDD11",
            keyboard: "⌨️",
            keycap_ten: "\uD83D\uDD1F",
            kick_scooter: "\uD83D\uDEF4",
            kimono: "\uD83D\uDC58",
            kiss: "\uD83D\uDC8B",
            kissing: "\uD83D\uDE17",
            kissing_cat: "\uD83D\uDE3D",
            kissing_closed_eyes: "\uD83D\uDE1A",
            kissing_heart: "\uD83D\uDE18",
            kissing_smiling_eyes: "\uD83D\uDE19",
            kiwi_fruit: "\uD83E\uDD5D",
            koala: "\uD83D\uDC28",
            koko: "\uD83C\uDE01",
            label: "\uD83C\uDFF7",
            large_blue_circle: "\uD83D\uDD35",
            large_blue_diamond: "\uD83D\uDD37",
            large_orange_diamond: "\uD83D\uDD36",
            last_quarter_moon: "\uD83C\uDF17",
            last_quarter_moon_with_face: "\uD83C\uDF1C",
            latin_cross: "✝️",
            laughing: "\uD83D\uDE06",
            leaves: "\uD83C\uDF43",
            ledger: "\uD83D\uDCD2",
            left_luggage: "\uD83D\uDEC5",
            left_right_arrow: "↔️",
            leftwards_arrow_with_hook: "↩️",
            lemon: "\uD83C\uDF4B",
            leo: "♌️",
            leopard: "\uD83D\uDC06",
            level_slider: "\uD83C\uDF9A",
            libra: "♎️",
            light_rail: "\uD83D\uDE88",
            link: "\uD83D\uDD17",
            lion: "\uD83E\uDD81",
            lips: "\uD83D\uDC44",
            lipstick: "\uD83D\uDC84",
            lizard: "\uD83E\uDD8E",
            lock: "\uD83D\uDD12",
            lock_with_ink_pen: "\uD83D\uDD0F",
            lollipop: "\uD83C\uDF6D",
            loop: "➿",
            loud_sound: "\uD83D\uDD0A",
            loudspeaker: "\uD83D\uDCE2",
            love_hotel: "\uD83C\uDFE9",
            love_letter: "\uD83D\uDC8C",
            low_brightness: "\uD83D\uDD05",
            lying_face: "\uD83E\uDD25",
            m: "Ⓜ️",
            mag: "\uD83D\uDD0D",
            mag_right: "\uD83D\uDD0E",
            mahjong: "\uD83C\uDC04️",
            mailbox: "\uD83D\uDCEB",
            mailbox_closed: "\uD83D\uDCEA",
            mailbox_with_mail: "\uD83D\uDCEC",
            mailbox_with_no_mail: "\uD83D\uDCED",
            man: "\uD83D\uDC68",
            man_artist: "\uD83D\uDC68&zwj;\uD83C\uDFA8",
            man_astronaut: "\uD83D\uDC68&zwj;\uD83D\uDE80",
            man_cartwheeling: "\uD83E\uDD38&zwj;♂️",
            man_cook: "\uD83D\uDC68&zwj;\uD83C\uDF73",
            man_dancing: "\uD83D\uDD7A",
            man_facepalming: "\uD83E\uDD26&zwj;♂️",
            man_factory_worker: "\uD83D\uDC68&zwj;\uD83C\uDFED",
            man_farmer: "\uD83D\uDC68&zwj;\uD83C\uDF3E",
            man_firefighter: "\uD83D\uDC68&zwj;\uD83D\uDE92",
            man_health_worker: "\uD83D\uDC68&zwj;⚕️",
            man_in_tuxedo: "\uD83E\uDD35",
            man_judge: "\uD83D\uDC68&zwj;⚖️",
            man_juggling: "\uD83E\uDD39&zwj;♂️",
            man_mechanic: "\uD83D\uDC68&zwj;\uD83D\uDD27",
            man_office_worker: "\uD83D\uDC68&zwj;\uD83D\uDCBC",
            man_pilot: "\uD83D\uDC68&zwj;✈️",
            man_playing_handball: "\uD83E\uDD3E&zwj;♂️",
            man_playing_water_polo: "\uD83E\uDD3D&zwj;♂️",
            man_scientist: "\uD83D\uDC68&zwj;\uD83D\uDD2C",
            man_shrugging: "\uD83E\uDD37&zwj;♂️",
            man_singer: "\uD83D\uDC68&zwj;\uD83C\uDFA4",
            man_student: "\uD83D\uDC68&zwj;\uD83C\uDF93",
            man_teacher: "\uD83D\uDC68&zwj;\uD83C\uDFEB",
            man_technologist: "\uD83D\uDC68&zwj;\uD83D\uDCBB",
            man_with_gua_pi_mao: "\uD83D\uDC72",
            man_with_turban: "\uD83D\uDC73",
            tangerine: "\uD83C\uDF4A",
            mans_shoe: "\uD83D\uDC5E",
            mantelpiece_clock: "\uD83D\uDD70",
            maple_leaf: "\uD83C\uDF41",
            martial_arts_uniform: "\uD83E\uDD4B",
            mask: "\uD83D\uDE37",
            massage_woman: "\uD83D\uDC86",
            massage_man: "\uD83D\uDC86&zwj;♂️",
            meat_on_bone: "\uD83C\uDF56",
            medal_military: "\uD83C\uDF96",
            medal_sports: "\uD83C\uDFC5",
            mega: "\uD83D\uDCE3",
            melon: "\uD83C\uDF48",
            memo: "\uD83D\uDCDD",
            men_wrestling: "\uD83E\uDD3C&zwj;♂️",
            menorah: "\uD83D\uDD4E",
            mens: "\uD83D\uDEB9",
            metal: "\uD83E\uDD18",
            metro: "\uD83D\uDE87",
            microphone: "\uD83C\uDFA4",
            microscope: "\uD83D\uDD2C",
            milk_glass: "\uD83E\uDD5B",
            milky_way: "\uD83C\uDF0C",
            minibus: "\uD83D\uDE90",
            minidisc: "\uD83D\uDCBD",
            mobile_phone_off: "\uD83D\uDCF4",
            money_mouth_face: "\uD83E\uDD11",
            money_with_wings: "\uD83D\uDCB8",
            moneybag: "\uD83D\uDCB0",
            monkey: "\uD83D\uDC12",
            monkey_face: "\uD83D\uDC35",
            monorail: "\uD83D\uDE9D",
            moon: "\uD83C\uDF14",
            mortar_board: "\uD83C\uDF93",
            mosque: "\uD83D\uDD4C",
            motor_boat: "\uD83D\uDEE5",
            motor_scooter: "\uD83D\uDEF5",
            motorcycle: "\uD83C\uDFCD",
            motorway: "\uD83D\uDEE3",
            mount_fuji: "\uD83D\uDDFB",
            mountain: "⛰",
            mountain_biking_man: "\uD83D\uDEB5",
            mountain_biking_woman: "\uD83D\uDEB5&zwj;♀️",
            mountain_cableway: "\uD83D\uDEA0",
            mountain_railway: "\uD83D\uDE9E",
            mountain_snow: "\uD83C\uDFD4",
            mouse: "\uD83D\uDC2D",
            mouse2: "\uD83D\uDC01",
            movie_camera: "\uD83C\uDFA5",
            moyai: "\uD83D\uDDFF",
            mrs_claus: "\uD83E\uDD36",
            muscle: "\uD83D\uDCAA",
            mushroom: "\uD83C\uDF44",
            musical_keyboard: "\uD83C\uDFB9",
            musical_note: "\uD83C\uDFB5",
            musical_score: "\uD83C\uDFBC",
            mute: "\uD83D\uDD07",
            nail_care: "\uD83D\uDC85",
            name_badge: "\uD83D\uDCDB",
            national_park: "\uD83C\uDFDE",
            nauseated_face: "\uD83E\uDD22",
            necktie: "\uD83D\uDC54",
            negative_squared_cross_mark: "❎",
            nerd_face: "\uD83E\uDD13",
            neutral_face: "\uD83D\uDE10",
            new: "\uD83C\uDD95",
            new_moon: "\uD83C\uDF11",
            new_moon_with_face: "\uD83C\uDF1A",
            newspaper: "\uD83D\uDCF0",
            newspaper_roll: "\uD83D\uDDDE",
            next_track_button: "⏭",
            ng: "\uD83C\uDD96",
            no_good_man: "\uD83D\uDE45&zwj;♂️",
            no_good_woman: "\uD83D\uDE45",
            night_with_stars: "\uD83C\uDF03",
            no_bell: "\uD83D\uDD15",
            no_bicycles: "\uD83D\uDEB3",
            no_entry: "⛔️",
            no_entry_sign: "\uD83D\uDEAB",
            no_mobile_phones: "\uD83D\uDCF5",
            no_mouth: "\uD83D\uDE36",
            no_pedestrians: "\uD83D\uDEB7",
            no_smoking: "\uD83D\uDEAD",
            "non-potable_water": "\uD83D\uDEB1",
            nose: "\uD83D\uDC43",
            notebook: "\uD83D\uDCD3",
            notebook_with_decorative_cover: "\uD83D\uDCD4",
            notes: "\uD83C\uDFB6",
            nut_and_bolt: "\uD83D\uDD29",
            o: "⭕️",
            o2: "\uD83C\uDD7E️",
            ocean: "\uD83C\uDF0A",
            octopus: "\uD83D\uDC19",
            oden: "\uD83C\uDF62",
            office: "\uD83C\uDFE2",
            oil_drum: "\uD83D\uDEE2",
            ok: "\uD83C\uDD97",
            ok_hand: "\uD83D\uDC4C",
            ok_man: "\uD83D\uDE46&zwj;♂️",
            ok_woman: "\uD83D\uDE46",
            old_key: "\uD83D\uDDDD",
            older_man: "\uD83D\uDC74",
            older_woman: "\uD83D\uDC75",
            om: "\uD83D\uDD49",
            on: "\uD83D\uDD1B",
            oncoming_automobile: "\uD83D\uDE98",
            oncoming_bus: "\uD83D\uDE8D",
            oncoming_police_car: "\uD83D\uDE94",
            oncoming_taxi: "\uD83D\uDE96",
            open_file_folder: "\uD83D\uDCC2",
            open_hands: "\uD83D\uDC50",
            open_mouth: "\uD83D\uDE2E",
            open_umbrella: "☂️",
            ophiuchus: "⛎",
            orange_book: "\uD83D\uDCD9",
            orthodox_cross: "☦️",
            outbox_tray: "\uD83D\uDCE4",
            owl: "\uD83E\uDD89",
            ox: "\uD83D\uDC02",
            package: "\uD83D\uDCE6",
            page_facing_up: "\uD83D\uDCC4",
            page_with_curl: "\uD83D\uDCC3",
            pager: "\uD83D\uDCDF",
            paintbrush: "\uD83D\uDD8C",
            palm_tree: "\uD83C\uDF34",
            pancakes: "\uD83E\uDD5E",
            panda_face: "\uD83D\uDC3C",
            paperclip: "\uD83D\uDCCE",
            paperclips: "\uD83D\uDD87",
            parasol_on_ground: "⛱",
            parking: "\uD83C\uDD7F️",
            part_alternation_mark: "〽️",
            partly_sunny: "⛅️",
            passenger_ship: "\uD83D\uDEF3",
            passport_control: "\uD83D\uDEC2",
            pause_button: "⏸",
            peace_symbol: "☮️",
            peach: "\uD83C\uDF51",
            peanuts: "\uD83E\uDD5C",
            pear: "\uD83C\uDF50",
            pen: "\uD83D\uDD8A",
            pencil2: "✏️",
            penguin: "\uD83D\uDC27",
            pensive: "\uD83D\uDE14",
            performing_arts: "\uD83C\uDFAD",
            persevere: "\uD83D\uDE23",
            person_fencing: "\uD83E\uDD3A",
            pouting_woman: "\uD83D\uDE4E",
            phone: "☎️",
            pick: "⛏",
            pig: "\uD83D\uDC37",
            pig2: "\uD83D\uDC16",
            pig_nose: "\uD83D\uDC3D",
            pill: "\uD83D\uDC8A",
            pineapple: "\uD83C\uDF4D",
            ping_pong: "\uD83C\uDFD3",
            pisces: "♓️",
            pizza: "\uD83C\uDF55",
            place_of_worship: "\uD83D\uDED0",
            plate_with_cutlery: "\uD83C\uDF7D",
            play_or_pause_button: "⏯",
            point_down: "\uD83D\uDC47",
            point_left: "\uD83D\uDC48",
            point_right: "\uD83D\uDC49",
            point_up: "☝️",
            point_up_2: "\uD83D\uDC46",
            police_car: "\uD83D\uDE93",
            policewoman: "\uD83D\uDC6E&zwj;♀️",
            poodle: "\uD83D\uDC29",
            popcorn: "\uD83C\uDF7F",
            post_office: "\uD83C\uDFE3",
            postal_horn: "\uD83D\uDCEF",
            postbox: "\uD83D\uDCEE",
            potable_water: "\uD83D\uDEB0",
            potato: "\uD83E\uDD54",
            pouch: "\uD83D\uDC5D",
            poultry_leg: "\uD83C\uDF57",
            pound: "\uD83D\uDCB7",
            rage: "\uD83D\uDE21",
            pouting_cat: "\uD83D\uDE3E",
            pouting_man: "\uD83D\uDE4E&zwj;♂️",
            pray: "\uD83D\uDE4F",
            prayer_beads: "\uD83D\uDCFF",
            pregnant_woman: "\uD83E\uDD30",
            previous_track_button: "⏮",
            prince: "\uD83E\uDD34",
            princess: "\uD83D\uDC78",
            printer: "\uD83D\uDDA8",
            purple_heart: "\uD83D\uDC9C",
            purse: "\uD83D\uDC5B",
            pushpin: "\uD83D\uDCCC",
            put_litter_in_its_place: "\uD83D\uDEAE",
            question: "❓",
            rabbit: "\uD83D\uDC30",
            rabbit2: "\uD83D\uDC07",
            racehorse: "\uD83D\uDC0E",
            racing_car: "\uD83C\uDFCE",
            radio: "\uD83D\uDCFB",
            radio_button: "\uD83D\uDD18",
            radioactive: "☢️",
            railway_car: "\uD83D\uDE83",
            railway_track: "\uD83D\uDEE4",
            rainbow: "\uD83C\uDF08",
            rainbow_flag: "\uD83C\uDFF3️&zwj;\uD83C\uDF08",
            raised_back_of_hand: "\uD83E\uDD1A",
            raised_hand_with_fingers_splayed: "\uD83D\uDD90",
            raised_hands: "\uD83D\uDE4C",
            raising_hand_woman: "\uD83D\uDE4B",
            raising_hand_man: "\uD83D\uDE4B&zwj;♂️",
            ram: "\uD83D\uDC0F",
            ramen: "\uD83C\uDF5C",
            rat: "\uD83D\uDC00",
            record_button: "⏺",
            recycle: "♻️",
            red_circle: "\uD83D\uDD34",
            registered: "\xae️",
            relaxed: "☺️",
            relieved: "\uD83D\uDE0C",
            reminder_ribbon: "\uD83C\uDF97",
            repeat: "\uD83D\uDD01",
            repeat_one: "\uD83D\uDD02",
            rescue_worker_helmet: "⛑",
            restroom: "\uD83D\uDEBB",
            revolving_hearts: "\uD83D\uDC9E",
            rewind: "⏪",
            rhinoceros: "\uD83E\uDD8F",
            ribbon: "\uD83C\uDF80",
            rice: "\uD83C\uDF5A",
            rice_ball: "\uD83C\uDF59",
            rice_cracker: "\uD83C\uDF58",
            rice_scene: "\uD83C\uDF91",
            right_anger_bubble: "\uD83D\uDDEF",
            ring: "\uD83D\uDC8D",
            robot: "\uD83E\uDD16",
            rocket: "\uD83D\uDE80",
            rofl: "\uD83E\uDD23",
            roll_eyes: "\uD83D\uDE44",
            roller_coaster: "\uD83C\uDFA2",
            rooster: "\uD83D\uDC13",
            rose: "\uD83C\uDF39",
            rosette: "\uD83C\uDFF5",
            rotating_light: "\uD83D\uDEA8",
            round_pushpin: "\uD83D\uDCCD",
            rowing_man: "\uD83D\uDEA3",
            rowing_woman: "\uD83D\uDEA3&zwj;♀️",
            rugby_football: "\uD83C\uDFC9",
            running_man: "\uD83C\uDFC3",
            running_shirt_with_sash: "\uD83C\uDFBD",
            running_woman: "\uD83C\uDFC3&zwj;♀️",
            sa: "\uD83C\uDE02️",
            sagittarius: "♐️",
            sake: "\uD83C\uDF76",
            sandal: "\uD83D\uDC61",
            santa: "\uD83C\uDF85",
            satellite: "\uD83D\uDCE1",
            saxophone: "\uD83C\uDFB7",
            school: "\uD83C\uDFEB",
            school_satchel: "\uD83C\uDF92",
            scissors: "✂️",
            scorpion: "\uD83E\uDD82",
            scorpius: "♏️",
            scream: "\uD83D\uDE31",
            scream_cat: "\uD83D\uDE40",
            scroll: "\uD83D\uDCDC",
            seat: "\uD83D\uDCBA",
            secret: "㊙️",
            see_no_evil: "\uD83D\uDE48",
            seedling: "\uD83C\uDF31",
            selfie: "\uD83E\uDD33",
            shallow_pan_of_food: "\uD83E\uDD58",
            shamrock: "☘️",
            shark: "\uD83E\uDD88",
            shaved_ice: "\uD83C\uDF67",
            sheep: "\uD83D\uDC11",
            shell: "\uD83D\uDC1A",
            shield: "\uD83D\uDEE1",
            shinto_shrine: "⛩",
            ship: "\uD83D\uDEA2",
            shirt: "\uD83D\uDC55",
            shopping: "\uD83D\uDECD",
            shopping_cart: "\uD83D\uDED2",
            shower: "\uD83D\uDEBF",
            shrimp: "\uD83E\uDD90",
            signal_strength: "\uD83D\uDCF6",
            six_pointed_star: "\uD83D\uDD2F",
            ski: "\uD83C\uDFBF",
            skier: "⛷",
            skull: "\uD83D\uDC80",
            skull_and_crossbones: "☠️",
            sleeping: "\uD83D\uDE34",
            sleeping_bed: "\uD83D\uDECC",
            sleepy: "\uD83D\uDE2A",
            slightly_frowning_face: "\uD83D\uDE41",
            slightly_smiling_face: "\uD83D\uDE42",
            slot_machine: "\uD83C\uDFB0",
            small_airplane: "\uD83D\uDEE9",
            small_blue_diamond: "\uD83D\uDD39",
            small_orange_diamond: "\uD83D\uDD38",
            small_red_triangle: "\uD83D\uDD3A",
            small_red_triangle_down: "\uD83D\uDD3B",
            smile: "\uD83D\uDE04",
            smile_cat: "\uD83D\uDE38",
            smiley: "\uD83D\uDE03",
            smiley_cat: "\uD83D\uDE3A",
            smiling_imp: "\uD83D\uDE08",
            smirk: "\uD83D\uDE0F",
            smirk_cat: "\uD83D\uDE3C",
            smoking: "\uD83D\uDEAC",
            snail: "\uD83D\uDC0C",
            snake: "\uD83D\uDC0D",
            sneezing_face: "\uD83E\uDD27",
            snowboarder: "\uD83C\uDFC2",
            snowflake: "❄️",
            snowman: "⛄️",
            snowman_with_snow: "☃️",
            sob: "\uD83D\uDE2D",
            soccer: "⚽️",
            soon: "\uD83D\uDD1C",
            sos: "\uD83C\uDD98",
            sound: "\uD83D\uDD09",
            space_invader: "\uD83D\uDC7E",
            spades: "♠️",
            spaghetti: "\uD83C\uDF5D",
            sparkle: "❇️",
            sparkler: "\uD83C\uDF87",
            sparkles: "✨",
            sparkling_heart: "\uD83D\uDC96",
            speak_no_evil: "\uD83D\uDE4A",
            speaker: "\uD83D\uDD08",
            speaking_head: "\uD83D\uDDE3",
            speech_balloon: "\uD83D\uDCAC",
            speedboat: "\uD83D\uDEA4",
            spider: "\uD83D\uDD77",
            spider_web: "\uD83D\uDD78",
            spiral_calendar: "\uD83D\uDDD3",
            spiral_notepad: "\uD83D\uDDD2",
            spoon: "\uD83E\uDD44",
            squid: "\uD83E\uDD91",
            stadium: "\uD83C\uDFDF",
            star: "⭐️",
            star2: "\uD83C\uDF1F",
            star_and_crescent: "☪️",
            star_of_david: "✡️",
            stars: "\uD83C\uDF20",
            station: "\uD83D\uDE89",
            statue_of_liberty: "\uD83D\uDDFD",
            steam_locomotive: "\uD83D\uDE82",
            stew: "\uD83C\uDF72",
            stop_button: "⏹",
            stop_sign: "\uD83D\uDED1",
            stopwatch: "⏱",
            straight_ruler: "\uD83D\uDCCF",
            strawberry: "\uD83C\uDF53",
            stuck_out_tongue: "\uD83D\uDE1B",
            stuck_out_tongue_closed_eyes: "\uD83D\uDE1D",
            stuck_out_tongue_winking_eye: "\uD83D\uDE1C",
            studio_microphone: "\uD83C\uDF99",
            stuffed_flatbread: "\uD83E\uDD59",
            sun_behind_large_cloud: "\uD83C\uDF25",
            sun_behind_rain_cloud: "\uD83C\uDF26",
            sun_behind_small_cloud: "\uD83C\uDF24",
            sun_with_face: "\uD83C\uDF1E",
            sunflower: "\uD83C\uDF3B",
            sunglasses: "\uD83D\uDE0E",
            sunny: "☀️",
            sunrise: "\uD83C\uDF05",
            sunrise_over_mountains: "\uD83C\uDF04",
            surfing_man: "\uD83C\uDFC4",
            surfing_woman: "\uD83C\uDFC4&zwj;♀️",
            sushi: "\uD83C\uDF63",
            suspension_railway: "\uD83D\uDE9F",
            sweat: "\uD83D\uDE13",
            sweat_drops: "\uD83D\uDCA6",
            sweat_smile: "\uD83D\uDE05",
            sweet_potato: "\uD83C\uDF60",
            swimming_man: "\uD83C\uDFCA",
            swimming_woman: "\uD83C\uDFCA&zwj;♀️",
            symbols: "\uD83D\uDD23",
            synagogue: "\uD83D\uDD4D",
            syringe: "\uD83D\uDC89",
            taco: "\uD83C\uDF2E",
            tada: "\uD83C\uDF89",
            tanabata_tree: "\uD83C\uDF8B",
            taurus: "♉️",
            taxi: "\uD83D\uDE95",
            tea: "\uD83C\uDF75",
            telephone_receiver: "\uD83D\uDCDE",
            telescope: "\uD83D\uDD2D",
            tennis: "\uD83C\uDFBE",
            tent: "⛺️",
            thermometer: "\uD83C\uDF21",
            thinking: "\uD83E\uDD14",
            thought_balloon: "\uD83D\uDCAD",
            ticket: "\uD83C\uDFAB",
            tickets: "\uD83C\uDF9F",
            tiger: "\uD83D\uDC2F",
            tiger2: "\uD83D\uDC05",
            timer_clock: "⏲",
            tipping_hand_man: "\uD83D\uDC81&zwj;♂️",
            tired_face: "\uD83D\uDE2B",
            tm: "™️",
            toilet: "\uD83D\uDEBD",
            tokyo_tower: "\uD83D\uDDFC",
            tomato: "\uD83C\uDF45",
            tongue: "\uD83D\uDC45",
            top: "\uD83D\uDD1D",
            tophat: "\uD83C\uDFA9",
            tornado: "\uD83C\uDF2A",
            trackball: "\uD83D\uDDB2",
            tractor: "\uD83D\uDE9C",
            traffic_light: "\uD83D\uDEA5",
            train: "\uD83D\uDE8B",
            train2: "\uD83D\uDE86",
            tram: "\uD83D\uDE8A",
            triangular_flag_on_post: "\uD83D\uDEA9",
            triangular_ruler: "\uD83D\uDCD0",
            trident: "\uD83D\uDD31",
            triumph: "\uD83D\uDE24",
            trolleybus: "\uD83D\uDE8E",
            trophy: "\uD83C\uDFC6",
            tropical_drink: "\uD83C\uDF79",
            tropical_fish: "\uD83D\uDC20",
            truck: "\uD83D\uDE9A",
            trumpet: "\uD83C\uDFBA",
            tulip: "\uD83C\uDF37",
            tumbler_glass: "\uD83E\uDD43",
            turkey: "\uD83E\uDD83",
            turtle: "\uD83D\uDC22",
            tv: "\uD83D\uDCFA",
            twisted_rightwards_arrows: "\uD83D\uDD00",
            two_hearts: "\uD83D\uDC95",
            two_men_holding_hands: "\uD83D\uDC6C",
            two_women_holding_hands: "\uD83D\uDC6D",
            u5272: "\uD83C\uDE39",
            u5408: "\uD83C\uDE34",
            u55b6: "\uD83C\uDE3A",
            u6307: "\uD83C\uDE2F️",
            u6708: "\uD83C\uDE37️",
            u6709: "\uD83C\uDE36",
            u6e80: "\uD83C\uDE35",
            u7121: "\uD83C\uDE1A️",
            u7533: "\uD83C\uDE38",
            u7981: "\uD83C\uDE32",
            u7a7a: "\uD83C\uDE33",
            umbrella: "☔️",
            unamused: "\uD83D\uDE12",
            underage: "\uD83D\uDD1E",
            unicorn: "\uD83E\uDD84",
            unlock: "\uD83D\uDD13",
            up: "\uD83C\uDD99",
            upside_down_face: "\uD83D\uDE43",
            v: "✌️",
            vertical_traffic_light: "\uD83D\uDEA6",
            vhs: "\uD83D\uDCFC",
            vibration_mode: "\uD83D\uDCF3",
            video_camera: "\uD83D\uDCF9",
            video_game: "\uD83C\uDFAE",
            violin: "\uD83C\uDFBB",
            virgo: "♍️",
            volcano: "\uD83C\uDF0B",
            volleyball: "\uD83C\uDFD0",
            vs: "\uD83C\uDD9A",
            vulcan_salute: "\uD83D\uDD96",
            walking_man: "\uD83D\uDEB6",
            walking_woman: "\uD83D\uDEB6&zwj;♀️",
            waning_crescent_moon: "\uD83C\uDF18",
            waning_gibbous_moon: "\uD83C\uDF16",
            warning: "⚠️",
            wastebasket: "\uD83D\uDDD1",
            watch: "⌚️",
            water_buffalo: "\uD83D\uDC03",
            watermelon: "\uD83C\uDF49",
            wave: "\uD83D\uDC4B",
            wavy_dash: "〰️",
            waxing_crescent_moon: "\uD83C\uDF12",
            wc: "\uD83D\uDEBE",
            weary: "\uD83D\uDE29",
            wedding: "\uD83D\uDC92",
            weight_lifting_man: "\uD83C\uDFCB️",
            weight_lifting_woman: "\uD83C\uDFCB️&zwj;♀️",
            whale: "\uD83D\uDC33",
            whale2: "\uD83D\uDC0B",
            wheel_of_dharma: "☸️",
            wheelchair: "♿️",
            white_check_mark: "✅",
            white_circle: "⚪️",
            white_flag: "\uD83C\uDFF3️",
            white_flower: "\uD83D\uDCAE",
            white_large_square: "⬜️",
            white_medium_small_square: "◽️",
            white_medium_square: "◻️",
            white_small_square: "▫️",
            white_square_button: "\uD83D\uDD33",
            wilted_flower: "\uD83E\uDD40",
            wind_chime: "\uD83C\uDF90",
            wind_face: "\uD83C\uDF2C",
            wine_glass: "\uD83C\uDF77",
            wink: "\uD83D\uDE09",
            wolf: "\uD83D\uDC3A",
            woman: "\uD83D\uDC69",
            woman_artist: "\uD83D\uDC69&zwj;\uD83C\uDFA8",
            woman_astronaut: "\uD83D\uDC69&zwj;\uD83D\uDE80",
            woman_cartwheeling: "\uD83E\uDD38&zwj;♀️",
            woman_cook: "\uD83D\uDC69&zwj;\uD83C\uDF73",
            woman_facepalming: "\uD83E\uDD26&zwj;♀️",
            woman_factory_worker: "\uD83D\uDC69&zwj;\uD83C\uDFED",
            woman_farmer: "\uD83D\uDC69&zwj;\uD83C\uDF3E",
            woman_firefighter: "\uD83D\uDC69&zwj;\uD83D\uDE92",
            woman_health_worker: "\uD83D\uDC69&zwj;⚕️",
            woman_judge: "\uD83D\uDC69&zwj;⚖️",
            woman_juggling: "\uD83E\uDD39&zwj;♀️",
            woman_mechanic: "\uD83D\uDC69&zwj;\uD83D\uDD27",
            woman_office_worker: "\uD83D\uDC69&zwj;\uD83D\uDCBC",
            woman_pilot: "\uD83D\uDC69&zwj;✈️",
            woman_playing_handball: "\uD83E\uDD3E&zwj;♀️",
            woman_playing_water_polo: "\uD83E\uDD3D&zwj;♀️",
            woman_scientist: "\uD83D\uDC69&zwj;\uD83D\uDD2C",
            woman_shrugging: "\uD83E\uDD37&zwj;♀️",
            woman_singer: "\uD83D\uDC69&zwj;\uD83C\uDFA4",
            woman_student: "\uD83D\uDC69&zwj;\uD83C\uDF93",
            woman_teacher: "\uD83D\uDC69&zwj;\uD83C\uDFEB",
            woman_technologist: "\uD83D\uDC69&zwj;\uD83D\uDCBB",
            woman_with_turban: "\uD83D\uDC73&zwj;♀️",
            womans_clothes: "\uD83D\uDC5A",
            womans_hat: "\uD83D\uDC52",
            women_wrestling: "\uD83E\uDD3C&zwj;♀️",
            womens: "\uD83D\uDEBA",
            world_map: "\uD83D\uDDFA",
            worried: "\uD83D\uDE1F",
            wrench: "\uD83D\uDD27",
            writing_hand: "✍️",
            x: "❌",
            yellow_heart: "\uD83D\uDC9B",
            yen: "\uD83D\uDCB4",
            yin_yang: "☯️",
            yum: "\uD83D\uDE0B",
            zap: "⚡️",
            zipper_mouth_face: "\uD83E\uDD10",
            zzz: "\uD83D\uDCA4",
            octocat: '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
            showdown: "<span style=\"font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;\">S</span>"
        }, r.Converter = function(u) {
            var i = {}, n = [], o = [], f = {}, h = c, s = {
                parsed: {},
                raw: "",
                format: ""
            };
            g();
            function g() {
                u = u || {};
                for(var l in p)p.hasOwnProperty(l) && (i[l] = p[l]);
                if (typeof u == "object") for(var E in u)u.hasOwnProperty(E) && (i[E] = u[E]);
                else throw Error("Converter expects the passed parameter to be an object, but " + (typeof u === "undefined" ? "undefined" : _type_of(u)) + " was passed instead.");
                i.extensions && r.helper.forEach(i.extensions, B);
            }
            function B(l, E) {
                if (E = E || null, r.helper.isString(l)) if (l = r.helper.stdExtName(l), E = l, r.extensions[l]) {
                    console.warn("DEPRECATION WARNING: " + l + " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"), S(r.extensions[l], l);
                    return;
                } else if (!r.helper.isUndefined(t[l])) l = t[l];
                else throw Error('Extension "' + l + '" could not be loaded. It was either not found or is not a valid extension.');
                typeof l == "function" && (l = l()), r.helper.isArray(l) || (l = [
                    l
                ]);
                var v = D(l, E);
                if (!v.valid) throw Error(v.error);
                for(var T = 0; T < l.length; ++T){
                    switch(l[T].type){
                        case "lang":
                            n.push(l[T]);
                            break;
                        case "output":
                            o.push(l[T]);
                            break;
                    }
                    if (l[T].hasOwnProperty("listeners")) for(var j in l[T].listeners)l[T].listeners.hasOwnProperty(j) && x(j, l[T].listeners[j]);
                }
            }
            function S(l, E) {
                typeof l == "function" && (l = l(new r.Converter)), r.helper.isArray(l) || (l = [
                    l
                ]);
                var v = D(l, E);
                if (!v.valid) throw Error(v.error);
                for(var T = 0; T < l.length; ++T)switch(l[T].type){
                    case "lang":
                        n.push(l[T]);
                        break;
                    case "output":
                        o.push(l[T]);
                        break;
                    default:
                        throw Error("Extension loader error: Type unrecognized!!!");
                }
            }
            function x(l, E) {
                if (!r.helper.isString(l)) throw Error("Invalid argument in converter.listen() method: name must be a string, but " + (typeof l === "undefined" ? "undefined" : _type_of(l)) + " given");
                if (typeof E != "function") throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + (typeof E === "undefined" ? "undefined" : _type_of(E)) + " given");
                f.hasOwnProperty(l) || (f[l] = []), f[l].push(E);
            }
            function L(l) {
                var E = l.match(/^\s*/)[0].length, v = new RegExp("^\\s{0," + E + "}", "gm");
                return l.replace(v, "");
            }
            this._dispatch = function(E, v, T, j) {
                if (f.hasOwnProperty(E)) for(var P = 0; P < f[E].length; ++P){
                    var z = f[E][P](E, v, this, T, j);
                    z && (typeof z === "undefined" ? "undefined" : _type_of(z)) < "u" && (v = z);
                }
                return v;
            }, this.listen = function(l, E) {
                return x(l, E), this;
            }, this.makeHtml = function(l) {
                if (!l) return l;
                var E = {
                    gHtmlBlocks: [],
                    gHtmlMdBlocks: [],
                    gHtmlSpans: [],
                    gUrls: {},
                    gTitles: {},
                    gDimensions: {},
                    gListLevel: 0,
                    hashLinkCounts: {},
                    langExtensions: n,
                    outputModifiers: o,
                    converter: this,
                    ghCodeBlocks: [],
                    metadata: {
                        parsed: {},
                        raw: "",
                        format: ""
                    }
                };
                return l = l.replace(/¨/g, "\xa8T"), l = l.replace(/\$/g, "\xa8D"), l = l.replace(/\r\n/g, "\n"), l = l.replace(/\r/g, "\n"), l = l.replace(/\u00A0/g, "&nbsp;"), i.smartIndentationFix && (l = L(l)), l = "\n\n" + l + "\n\n", l = r.subParser("detab")(l, i, E), l = l.replace(/^[ \t]+$/mg, ""), r.helper.forEach(n, function(v) {
                    l = r.subParser("runExtension")(v, l, i, E);
                }), l = r.subParser("metadata")(l, i, E), l = r.subParser("hashPreCodeTags")(l, i, E), l = r.subParser("githubCodeBlocks")(l, i, E), l = r.subParser("hashHTMLBlocks")(l, i, E), l = r.subParser("hashCodeTags")(l, i, E), l = r.subParser("stripLinkDefinitions")(l, i, E), l = r.subParser("blockGamut")(l, i, E), l = r.subParser("unhashHTMLSpans")(l, i, E), l = r.subParser("unescapeSpecialChars")(l, i, E), l = l.replace(/¨D/g, "$$"), l = l.replace(/¨T/g, "\xa8"), l = r.subParser("completeHTMLDocument")(l, i, E), r.helper.forEach(o, function(v) {
                    l = r.subParser("runExtension")(v, l, i, E);
                }), s = E.metadata, l;
            }, this.makeMarkdown = this.makeMd = function(l, E) {
                if (l = l.replace(/\r\n/g, "\n"), l = l.replace(/\r/g, "\n"), l = l.replace(/>[ \t]+</, ">\xa8NBSP;<"), !E) if (window && window.document) E = window.document;
                else throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");
                var v = E.createElement("div");
                v.innerHTML = l;
                var T = {
                    preList: U(v)
                };
                H(v);
                for(var j = v.childNodes, P = "", z = 0; z < j.length; z++)P += r.subParser("makeMarkdown.node")(j[z], T);
                function H(O) {
                    for(var I = 0; I < O.childNodes.length; ++I){
                        var G = O.childNodes[I];
                        G.nodeType === 3 ? !/\S/.test(G.nodeValue) && !/^[ ]+$/.test(G.nodeValue) ? (O.removeChild(G), --I) : (G.nodeValue = G.nodeValue.split("\n").join(" "), G.nodeValue = G.nodeValue.replace(/(\s)+/g, "$1")) : G.nodeType === 1 && H(G);
                    }
                }
                function U(O) {
                    for(var I = O.querySelectorAll("pre"), G = [], V = 0; V < I.length; ++V)if (I[V].childElementCount === 1 && I[V].firstChild.tagName.toLowerCase() === "code") {
                        var Q = I[V].firstChild.innerHTML.trim(), ee = I[V].firstChild.getAttribute("data-language") || "";
                        if (ee === "") for(var X = I[V].firstChild.className.split(" "), de = 0; de < X.length; ++de){
                            var he = X[de].match(/^language-(.+)$/);
                            if (he !== null) {
                                ee = he[1];
                                break;
                            }
                        }
                        Q = r.helper.unescapeHTMLEntities(Q), G.push(Q), I[V].outerHTML = '<precode language="' + ee + '" precodenum="' + V.toString() + '"></precode>';
                    } else G.push(I[V].innerHTML), I[V].innerHTML = "", I[V].setAttribute("prenum", V.toString());
                    return G;
                }
                return P;
            }, this.setOption = function(l, E) {
                i[l] = E;
            }, this.getOption = function(l) {
                return i[l];
            }, this.getOptions = function() {
                return i;
            }, this.addExtension = function(l, E) {
                E = E || null, B(l, E);
            }, this.useExtension = function(l) {
                B(l);
            }, this.setFlavor = function(l) {
                if (!m.hasOwnProperty(l)) throw Error(l + " flavor was not found");
                var E = m[l];
                h = l;
                for(var v in E)E.hasOwnProperty(v) && (i[v] = E[v]);
            }, this.getFlavor = function() {
                return h;
            }, this.removeExtension = function(l) {
                r.helper.isArray(l) || (l = [
                    l
                ]);
                for(var E = 0; E < l.length; ++E){
                    for(var v = l[E], T = 0; T < n.length; ++T)n[T] === v && n.splice(T, 1);
                    for(var j = 0; j < o.length; ++j)o[j] === v && o.splice(j, 1);
                }
            }, this.getAllExtensions = function() {
                return {
                    language: n,
                    output: o
                };
            }, this.getMetadata = function(l) {
                return l ? s.raw : s.parsed;
            }, this.getMetadataFormat = function() {
                return s.format;
            }, this._setMetadataPair = function(l, E) {
                s.parsed[l] = E;
            }, this._setMetadataFormat = function(l) {
                s.format = l;
            }, this._setMetadataRaw = function(l) {
                s.raw = l;
            };
        }, r.subParser("anchors", function(u, i, n) {
            u = n.converter._dispatch("anchors.before", u, i, n);
            var o = function o(f, h, s, g, B, S, x) {
                if (r.helper.isUndefined(x) && (x = ""), s = s.toLowerCase(), f.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) g = "";
                else if (!g) if (s || (s = h.toLowerCase().replace(/ ?\n/g, " ")), g = "#" + s, !r.helper.isUndefined(n.gUrls[s])) g = n.gUrls[s], r.helper.isUndefined(n.gTitles[s]) || (x = n.gTitles[s]);
                else return f;
                g = g.replace(r.helper.regexes.asteriskDashAndColon, r.helper.escapeCharactersCallback);
                var L = '<a href="' + g + '"';
                return x !== "" && x !== null && (x = x.replace(/"/g, "&quot;"), x = x.replace(r.helper.regexes.asteriskDashAndColon, r.helper.escapeCharactersCallback), L += ' title="' + x + '"'), i.openLinksInNewWindow && !/^#/.test(g) && (L += ' rel="noopener noreferrer" target="\xa8E95Eblank"'), L += ">" + h + "</a>", L;
            };
            return u = u.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, o), u = u.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, o), u = u.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, o), u = u.replace(/\[([^\[\]]+)]()()()()()/g, o), i.ghMentions && (u = u.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi, function(f, h, s, g, B) {
                if (s === "\\") return h + g;
                if (!r.helper.isString(i.ghMentionsLink)) throw new Error("ghMentionsLink option must be a string");
                var S = i.ghMentionsLink.replace(/\{u}/g, B), x = "";
                return i.openLinksInNewWindow && (x = ' rel="noopener noreferrer" target="\xa8E95Eblank"'), h + '<a href="' + S + '"' + x + ">" + g + "</a>";
            })), u = n.converter._dispatch("anchors.after", u, i, n), u;
        });
        var _ = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi, q = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi, F = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi, R = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi, w = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, b = function b(u) {
            return function(i, n, o, f, h, s, g) {
                o = o.replace(r.helper.regexes.asteriskDashAndColon, r.helper.escapeCharactersCallback);
                var B = o, S = "", x = "", L = n || "", l = g || "";
                return /^www\./i.test(o) && (o = o.replace(/^www\./i, "http://www.")), u.excludeTrailingPunctuationFromURLs && s && (S = s), u.openLinksInNewWindow && (x = ' rel="noopener noreferrer" target="\xa8E95Eblank"'), L + '<a href="' + o + '"' + x + ">" + B + "</a>" + S + l;
            };
        }, k = function k(u, i) {
            return function(n, o, f) {
                var h = "mailto:";
                return o = o || "", f = r.subParser("unescapeSpecialChars")(f, u, i), u.encodeEmails ? (h = r.helper.encodeEmailAddress(h + f), f = r.helper.encodeEmailAddress(f)) : h = h + f, o + '<a href="' + h + '">' + f + "</a>";
            };
        };
        r.subParser("autoLinks", function(u, i, n) {
            return u = n.converter._dispatch("autoLinks.before", u, i, n), u = u.replace(F, b(i)), u = u.replace(w, k(i, n)), u = n.converter._dispatch("autoLinks.after", u, i, n), u;
        }), r.subParser("simplifiedAutoLinks", function(u, i, n) {
            return i.simplifiedAutoLink && (u = n.converter._dispatch("simplifiedAutoLinks.before", u, i, n), i.excludeTrailingPunctuationFromURLs ? u = u.replace(q, b(i)) : u = u.replace(_, b(i)), u = u.replace(R, k(i, n)), u = n.converter._dispatch("simplifiedAutoLinks.after", u, i, n)), u;
        }), r.subParser("blockGamut", function(u, i, n) {
            return u = n.converter._dispatch("blockGamut.before", u, i, n), u = r.subParser("blockQuotes")(u, i, n), u = r.subParser("headers")(u, i, n), u = r.subParser("horizontalRule")(u, i, n), u = r.subParser("lists")(u, i, n), u = r.subParser("codeBlocks")(u, i, n), u = r.subParser("tables")(u, i, n), u = r.subParser("hashHTMLBlocks")(u, i, n), u = r.subParser("paragraphs")(u, i, n), u = n.converter._dispatch("blockGamut.after", u, i, n), u;
        }), r.subParser("blockQuotes", function(u, i, n) {
            u = n.converter._dispatch("blockQuotes.before", u, i, n), u = u + "\n\n";
            var o = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
            return i.splitAdjacentBlockquotes && (o = /^ {0,3}>[\s\S]*?(?:\n\n)/gm), u = u.replace(o, function(f) {
                return f = f.replace(/^[ \t]*>[ \t]?/gm, ""), f = f.replace(/¨0/g, ""), f = f.replace(/^[ \t]+$/gm, ""), f = r.subParser("githubCodeBlocks")(f, i, n), f = r.subParser("blockGamut")(f, i, n), f = f.replace(/(^|\n)/g, "$1  "), f = f.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(h, s) {
                    var g = s;
                    return g = g.replace(/^  /mg, "\xa80"), g = g.replace(/¨0/g, ""), g;
                }), r.subParser("hashBlock")("<blockquote>\n" + f + "\n</blockquote>", i, n);
            }), u = n.converter._dispatch("blockQuotes.after", u, i, n), u;
        }), r.subParser("codeBlocks", function(u, i, n) {
            u = n.converter._dispatch("codeBlocks.before", u, i, n), u += "\xa80";
            var o = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
            return u = u.replace(o, function(f, h, s) {
                var g = h, B = s, S = "\n";
                return g = r.subParser("outdent")(g, i, n), g = r.subParser("encodeCode")(g, i, n), g = r.subParser("detab")(g, i, n), g = g.replace(/^\n+/g, ""), g = g.replace(/\n+$/g, ""), i.omitExtraWLInCodeBlocks && (S = ""), g = "<pre><code>" + g + S + "</code></pre>", r.subParser("hashBlock")(g, i, n) + B;
            }), u = u.replace(/¨0/, ""), u = n.converter._dispatch("codeBlocks.after", u, i, n), u;
        }), r.subParser("codeSpans", function(u, i, n) {
            return u = n.converter._dispatch("codeSpans.before", u, i, n), (typeof u === "undefined" ? "undefined" : _type_of(u)) > "u" && (u = ""), u = u.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, function(o, f, h, s) {
                var g = s;
                return g = g.replace(/^([ \t]*)/g, ""), g = g.replace(/[ \t]*$/g, ""), g = r.subParser("encodeCode")(g, i, n), g = f + "<code>" + g + "</code>", g = r.subParser("hashHTMLSpans")(g, i, n), g;
            }), u = n.converter._dispatch("codeSpans.after", u, i, n), u;
        }), r.subParser("completeHTMLDocument", function(u, i, n) {
            if (!i.completeHTMLDocument) return u;
            u = n.converter._dispatch("completeHTMLDocument.before", u, i, n);
            var o = "html", f = "<!DOCTYPE HTML>\n", h = "", s = '<meta charset="utf-8">\n', g = "", B = "";
            _type_of(n.metadata.parsed.doctype) < "u" && (f = "<!DOCTYPE " + n.metadata.parsed.doctype + ">\n", o = n.metadata.parsed.doctype.toString().toLowerCase(), (o === "html" || o === "html5") && (s = '<meta charset="utf-8">'));
            for(var S in n.metadata.parsed)if (n.metadata.parsed.hasOwnProperty(S)) switch(S.toLowerCase()){
                case "doctype":
                    break;
                case "title":
                    h = "<title>" + n.metadata.parsed.title + "</title>\n";
                    break;
                case "charset":
                    o === "html" || o === "html5" ? s = '<meta charset="' + n.metadata.parsed.charset + '">\n' : s = '<meta name="charset" content="' + n.metadata.parsed.charset + '">\n';
                    break;
                case "language":
                case "lang":
                    g = ' lang="' + n.metadata.parsed[S] + '"', B += '<meta name="' + S + '" content="' + n.metadata.parsed[S] + '">\n';
                    break;
                default:
                    B += '<meta name="' + S + '" content="' + n.metadata.parsed[S] + '">\n';
            }
            return u = f + "<html" + g + ">\n<head>\n" + h + s + B + "</head>\n<body>\n" + u.trim() + "\n</body>\n</html>", u = n.converter._dispatch("completeHTMLDocument.after", u, i, n), u;
        }), r.subParser("detab", function(u, i, n) {
            return u = n.converter._dispatch("detab.before", u, i, n), u = u.replace(/\t(?=\t)/g, "    "), u = u.replace(/\t/g, "\xa8A\xa8B"), u = u.replace(/¨B(.+?)¨A/g, function(o, f) {
                for(var h = f, s = 4 - h.length % 4, g = 0; g < s; g++)h += " ";
                return h;
            }), u = u.replace(/¨A/g, "    "), u = u.replace(/¨B/g, ""), u = n.converter._dispatch("detab.after", u, i, n), u;
        }), r.subParser("ellipsis", function(u, i, n) {
            return i.ellipsis && (u = n.converter._dispatch("ellipsis.before", u, i, n), u = u.replace(/\.\.\./g, "…"), u = n.converter._dispatch("ellipsis.after", u, i, n)), u;
        }), r.subParser("emoji", function(u, i, n) {
            if (!i.emoji) return u;
            u = n.converter._dispatch("emoji.before", u, i, n);
            var o = /:([\S]+?):/g;
            return u = u.replace(o, function(f, h) {
                return r.helper.emojis.hasOwnProperty(h) ? r.helper.emojis[h] : f;
            }), u = n.converter._dispatch("emoji.after", u, i, n), u;
        }), r.subParser("encodeAmpsAndAngles", function(u, i, n) {
            return u = n.converter._dispatch("encodeAmpsAndAngles.before", u, i, n), u = u.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;"), u = u.replace(/<(?![a-z\/?$!])/gi, "&lt;"), u = u.replace(/</g, "&lt;"), u = u.replace(/>/g, "&gt;"), u = n.converter._dispatch("encodeAmpsAndAngles.after", u, i, n), u;
        }), r.subParser("encodeBackslashEscapes", function(u, i, n) {
            return u = n.converter._dispatch("encodeBackslashEscapes.before", u, i, n), u = u.replace(/\\(\\)/g, r.helper.escapeCharactersCallback), u = u.replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g, r.helper.escapeCharactersCallback), u = n.converter._dispatch("encodeBackslashEscapes.after", u, i, n), u;
        }), r.subParser("encodeCode", function(u, i, n) {
            return u = n.converter._dispatch("encodeCode.before", u, i, n), u = u.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/([*_{}\[\]\\=~-])/g, r.helper.escapeCharactersCallback), u = n.converter._dispatch("encodeCode.after", u, i, n), u;
        }), r.subParser("escapeSpecialCharsWithinTagAttributes", function(u, i, n) {
            u = n.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before", u, i, n);
            var o = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi, f = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;
            return u = u.replace(o, function(h) {
                return h.replace(/(.)<\/?code>(?=.)/g, "$1`").replace(/([\\`*_~=|])/g, r.helper.escapeCharactersCallback);
            }), u = u.replace(f, function(h) {
                return h.replace(/([\\`*_~=|])/g, r.helper.escapeCharactersCallback);
            }), u = n.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after", u, i, n), u;
        }), r.subParser("githubCodeBlocks", function(u, i, n) {
            return i.ghCodeBlocks ? (u = n.converter._dispatch("githubCodeBlocks.before", u, i, n), u += "\xa80", u = u.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, function(o, f, h, s) {
                var g = i.omitExtraWLInCodeBlocks ? "" : "\n";
                return s = r.subParser("encodeCode")(s, i, n), s = r.subParser("detab")(s, i, n), s = s.replace(/^\n+/g, ""), s = s.replace(/\n+$/g, ""), s = "<pre><code" + (h ? ' class="' + h + " language-" + h + '"' : "") + ">" + s + g + "</code></pre>", s = r.subParser("hashBlock")(s, i, n), "\n\n\xa8G" + (n.ghCodeBlocks.push({
                    text: o,
                    codeblock: s
                }) - 1) + "G\n\n";
            }), u = u.replace(/¨0/, ""), n.converter._dispatch("githubCodeBlocks.after", u, i, n)) : u;
        }), r.subParser("hashBlock", function(u, i, n) {
            return u = n.converter._dispatch("hashBlock.before", u, i, n), u = u.replace(/(^\n+|\n+$)/g, ""), u = "\n\n\xa8K" + (n.gHtmlBlocks.push(u) - 1) + "K\n\n", u = n.converter._dispatch("hashBlock.after", u, i, n), u;
        }), r.subParser("hashCodeTags", function(u, i, n) {
            u = n.converter._dispatch("hashCodeTags.before", u, i, n);
            var o = function o(f, h, s, g) {
                var B = s + r.subParser("encodeCode")(h, i, n) + g;
                return "\xa8C" + (n.gHtmlSpans.push(B) - 1) + "C";
            };
            return u = r.helper.replaceRecursiveRegExp(u, o, "<code\\b[^>]*>", "</code>", "gim"), u = n.converter._dispatch("hashCodeTags.after", u, i, n), u;
        }), r.subParser("hashElement", function(u, i, n) {
            return function(o, f) {
                var h = f;
                return h = h.replace(/\n\n/g, "\n"), h = h.replace(/^\n/, ""), h = h.replace(/\n+$/g, ""), h = "\n\n\xa8K" + (n.gHtmlBlocks.push(h) - 1) + "K\n\n", h;
            };
        }), r.subParser("hashHTMLBlocks", function(u, i, n) {
            u = n.converter._dispatch("hashHTMLBlocks.before", u, i, n);
            var o = [
                "pre",
                "div",
                "h1",
                "h2",
                "h3",
                "h4",
                "h5",
                "h6",
                "blockquote",
                "table",
                "dl",
                "ol",
                "ul",
                "script",
                "noscript",
                "form",
                "fieldset",
                "iframe",
                "math",
                "style",
                "section",
                "header",
                "footer",
                "nav",
                "article",
                "aside",
                "address",
                "audio",
                "canvas",
                "figure",
                "hgroup",
                "output",
                "video",
                "p"
            ], f = function f(l, E, v, T) {
                var j = l;
                return v.search(/\bmarkdown\b/) !== -1 && (j = v + n.converter.makeHtml(E) + T), "\n\n\xa8K" + (n.gHtmlBlocks.push(j) - 1) + "K\n\n";
            };
            i.backslashEscapesHTMLTags && (u = u.replace(/\\<(\/?[^>]+?)>/g, function(l, E) {
                return "&lt;" + E + "&gt;";
            }));
            for(var h = 0; h < o.length; ++h)for(var s, g = new RegExp("^ {0,3}(<" + o[h] + "\\b[^>]*>)", "im"), B = "<" + o[h] + "\\b[^>]*>", S = "</" + o[h] + ">"; (s = r.helper.regexIndexOf(u, g)) !== -1;){
                var x = r.helper.splitAtIndex(u, s), L = r.helper.replaceRecursiveRegExp(x[1], f, B, S, "im");
                if (L === x[1]) break;
                u = x[0].concat(L);
            }
            return u = u.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, r.subParser("hashElement")(u, i, n)), u = r.helper.replaceRecursiveRegExp(u, function(l) {
                return "\n\n\xa8K" + (n.gHtmlBlocks.push(l) - 1) + "K\n\n";
            }, "^ {0,3}<!--", "-->", "gm"), u = u.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, r.subParser("hashElement")(u, i, n)), u = n.converter._dispatch("hashHTMLBlocks.after", u, i, n), u;
        }), r.subParser("hashHTMLSpans", function(u, i, n) {
            u = n.converter._dispatch("hashHTMLSpans.before", u, i, n);
            function o(f) {
                return "\xa8C" + (n.gHtmlSpans.push(f) - 1) + "C";
            }
            return u = u.replace(/<[^>]+?\/>/gi, function(f) {
                return o(f);
            }), u = u.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function(f) {
                return o(f);
            }), u = u.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function(f) {
                return o(f);
            }), u = u.replace(/<[^>]+?>/gi, function(f) {
                return o(f);
            }), u = n.converter._dispatch("hashHTMLSpans.after", u, i, n), u;
        }), r.subParser("unhashHTMLSpans", function(u, i, n) {
            u = n.converter._dispatch("unhashHTMLSpans.before", u, i, n);
            for(var o = 0; o < n.gHtmlSpans.length; ++o){
                for(var f = n.gHtmlSpans[o], h = 0; /¨C(\d+)C/.test(f);){
                    var s = RegExp.$1;
                    if (f = f.replace("\xa8C" + s + "C", n.gHtmlSpans[s]), h === 10) {
                        console.error("maximum nesting of 10 spans reached!!!");
                        break;
                    }
                    ++h;
                }
                u = u.replace("\xa8C" + o + "C", f);
            }
            return u = n.converter._dispatch("unhashHTMLSpans.after", u, i, n), u;
        }), r.subParser("hashPreCodeTags", function(u, i, n) {
            u = n.converter._dispatch("hashPreCodeTags.before", u, i, n);
            var o = function o(f, h, s, g) {
                var B = s + r.subParser("encodeCode")(h, i, n) + g;
                return "\n\n\xa8G" + (n.ghCodeBlocks.push({
                    text: f,
                    codeblock: B
                }) - 1) + "G\n\n";
            };
            return u = r.helper.replaceRecursiveRegExp(u, o, "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^ {0,3}</code>\\s*</pre>", "gim"), u = n.converter._dispatch("hashPreCodeTags.after", u, i, n), u;
        }), r.subParser("headers", function(u, i, n) {
            u = n.converter._dispatch("headers.before", u, i, n);
            var o = isNaN(parseInt(i.headerLevelStart)) ? 1 : parseInt(i.headerLevelStart), f = i.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm, h = i.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
            u = u.replace(f, function(B, S) {
                var x = r.subParser("spanGamut")(S, i, n), L = i.noHeaderId ? "" : ' id="' + g(S) + '"', l = o, E = "<h" + l + L + ">" + x + "</h" + l + ">";
                return r.subParser("hashBlock")(E, i, n);
            }), u = u.replace(h, function(B, S) {
                var x = r.subParser("spanGamut")(S, i, n), L = i.noHeaderId ? "" : ' id="' + g(S) + '"', l = o + 1, E = "<h" + l + L + ">" + x + "</h" + l + ">";
                return r.subParser("hashBlock")(E, i, n);
            });
            var s = i.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
            u = u.replace(s, function(B, S, x) {
                var L = x;
                i.customizedHeaderId && (L = x.replace(/\s?\{([^{]+?)}\s*$/, ""));
                var l = r.subParser("spanGamut")(L, i, n), E = i.noHeaderId ? "" : ' id="' + g(x) + '"', v = o - 1 + S.length, T = "<h" + v + E + ">" + l + "</h" + v + ">";
                return r.subParser("hashBlock")(T, i, n);
            });
            function g(B) {
                var S, x;
                if (i.customizedHeaderId) {
                    var L = B.match(/\{([^{]+?)}\s*$/);
                    L && L[1] && (B = L[1]);
                }
                return S = B, r.helper.isString(i.prefixHeaderId) ? x = i.prefixHeaderId : i.prefixHeaderId === !0 ? x = "section-" : x = "", i.rawPrefixHeaderId || (S = x + S), i.ghCompatibleHeaderId ? S = S.replace(/ /g, "-").replace(/&amp;/g, "").replace(/¨T/g, "").replace(/¨D/g, "").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "").toLowerCase() : i.rawHeaderId ? S = S.replace(/ /g, "-").replace(/&amp;/g, "&").replace(/¨T/g, "\xa8").replace(/¨D/g, "$").replace(/["']/g, "-").toLowerCase() : S = S.replace(/[^\w]/g, "").toLowerCase(), i.rawPrefixHeaderId && (S = x + S), n.hashLinkCounts[S] ? S = S + "-" + n.hashLinkCounts[S]++ : n.hashLinkCounts[S] = 1, S;
            }
            return u = n.converter._dispatch("headers.after", u, i, n), u;
        }), r.subParser("horizontalRule", function(u, i, n) {
            u = n.converter._dispatch("horizontalRule.before", u, i, n);
            var o = r.subParser("hashBlock")("<hr />", i, n);
            return u = u.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, o), u = u.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, o), u = u.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, o), u = n.converter._dispatch("horizontalRule.after", u, i, n), u;
        }), r.subParser("images", function(u, i, n) {
            u = n.converter._dispatch("images.before", u, i, n);
            var o = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, f = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g, h = /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, s = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g, g = /!\[([^\[\]]+)]()()()()()/g;
            function B(x, L, l, E, v, T, j, P) {
                return E = E.replace(/\s/g, ""), S(x, L, l, E, v, T, j, P);
            }
            function S(x, L, l, E, v, T, j, P) {
                var z = n.gUrls, H = n.gTitles, U = n.gDimensions;
                if (l = l.toLowerCase(), P || (P = ""), x.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) E = "";
                else if (E === "" || E === null) if ((l === "" || l === null) && (l = L.toLowerCase().replace(/ ?\n/g, " ")), E = "#" + l, !r.helper.isUndefined(z[l])) E = z[l], r.helper.isUndefined(H[l]) || (P = H[l]), r.helper.isUndefined(U[l]) || (v = U[l].width, T = U[l].height);
                else return x;
                L = L.replace(/"/g, "&quot;").replace(r.helper.regexes.asteriskDashAndColon, r.helper.escapeCharactersCallback), E = E.replace(r.helper.regexes.asteriskDashAndColon, r.helper.escapeCharactersCallback);
                var O = '<img src="' + E + '" alt="' + L + '"';
                return P && r.helper.isString(P) && (P = P.replace(/"/g, "&quot;").replace(r.helper.regexes.asteriskDashAndColon, r.helper.escapeCharactersCallback), O += ' title="' + P + '"'), v && T && (v = v === "*" ? "auto" : v, T = T === "*" ? "auto" : T, O += ' width="' + v + '"', O += ' height="' + T + '"'), O += " />", O;
            }
            return u = u.replace(s, S), u = u.replace(h, B), u = u.replace(f, S), u = u.replace(o, S), u = u.replace(g, S), u = n.converter._dispatch("images.after", u, i, n), u;
        }), r.subParser("italicsAndBold", function(u, i, n) {
            u = n.converter._dispatch("italicsAndBold.before", u, i, n);
            function o(f, h, s) {
                return h + f + s;
            }
            return i.literalMidWordUnderscores ? (u = u.replace(/\b___(\S[\s\S]*?)___\b/g, function(f, h) {
                return o(h, "<strong><em>", "</em></strong>");
            }), u = u.replace(/\b__(\S[\s\S]*?)__\b/g, function(f, h) {
                return o(h, "<strong>", "</strong>");
            }), u = u.replace(/\b_(\S[\s\S]*?)_\b/g, function(f, h) {
                return o(h, "<em>", "</em>");
            })) : (u = u.replace(/___(\S[\s\S]*?)___/g, function(f, h) {
                return /\S$/.test(h) ? o(h, "<strong><em>", "</em></strong>") : f;
            }), u = u.replace(/__(\S[\s\S]*?)__/g, function(f, h) {
                return /\S$/.test(h) ? o(h, "<strong>", "</strong>") : f;
            }), u = u.replace(/_([^\s_][\s\S]*?)_/g, function(f, h) {
                return /\S$/.test(h) ? o(h, "<em>", "</em>") : f;
            })), i.literalMidWordAsterisks ? (u = u.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, function(f, h, s) {
                return o(s, h + "<strong><em>", "</em></strong>");
            }), u = u.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, function(f, h, s) {
                return o(s, h + "<strong>", "</strong>");
            }), u = u.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, function(f, h, s) {
                return o(s, h + "<em>", "</em>");
            })) : (u = u.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function(f, h) {
                return /\S$/.test(h) ? o(h, "<strong><em>", "</em></strong>") : f;
            }), u = u.replace(/\*\*(\S[\s\S]*?)\*\*/g, function(f, h) {
                return /\S$/.test(h) ? o(h, "<strong>", "</strong>") : f;
            }), u = u.replace(/\*([^\s*][\s\S]*?)\*/g, function(f, h) {
                return /\S$/.test(h) ? o(h, "<em>", "</em>") : f;
            })), u = n.converter._dispatch("italicsAndBold.after", u, i, n), u;
        }), r.subParser("lists", function(u, i, n) {
            function o(s, g) {
                n.gListLevel++, s = s.replace(/\n{2,}$/, "\n"), s += "\xa80";
                var B = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm, S = /\n[ \t]*\n(?!¨0)/.test(s);
                return i.disableForced4SpacesIndentedSublists && (B = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm), s = s.replace(B, function(x, L, l, E, v, T, j) {
                    j = j && j.trim() !== "";
                    var P = r.subParser("outdent")(v, i, n), z = "";
                    return T && i.tasklists && (z = ' class="task-list-item" style="list-style-type: none;"', P = P.replace(/^[ \t]*\[(x|X| )?]/m, function() {
                        var H = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
                        return j && (H += " checked"), H += ">", H;
                    })), P = P.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function(H) {
                        return "\xa8A" + H;
                    }), L || P.search(/\n{2,}/) > -1 ? (P = r.subParser("githubCodeBlocks")(P, i, n), P = r.subParser("blockGamut")(P, i, n)) : (P = r.subParser("lists")(P, i, n), P = P.replace(/\n$/, ""), P = r.subParser("hashHTMLBlocks")(P, i, n), P = P.replace(/\n\n+/g, "\n\n"), S ? P = r.subParser("paragraphs")(P, i, n) : P = r.subParser("spanGamut")(P, i, n)), P = P.replace("\xa8A", ""), P = "<li" + z + ">" + P + "</li>\n", P;
                }), s = s.replace(/¨0/g, ""), n.gListLevel--, g && (s = s.replace(/\s+$/, "")), s;
            }
            function f(s, g) {
                if (g === "ol") {
                    var B = s.match(/^ *(\d+)\./);
                    if (B && B[1] !== "1") return ' start="' + B[1] + '"';
                }
                return "";
            }
            function h(s, g, B) {
                var S = i.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm, x = i.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm, L = g === "ul" ? S : x, l = "";
                if (s.search(L) !== -1) (function v(T) {
                    var j = T.search(L), P = f(s, g);
                    j !== -1 ? (l += "\n\n<" + g + P + ">\n" + o(T.slice(0, j), !!B) + "</" + g + ">\n", g = g === "ul" ? "ol" : "ul", L = g === "ul" ? S : x, v(T.slice(j))) : l += "\n\n<" + g + P + ">\n" + o(T, !!B) + "</" + g + ">\n";
                })(s);
                else {
                    var E = f(s, g);
                    l = "\n\n<" + g + E + ">\n" + o(s, !!B) + "</" + g + ">\n";
                }
                return l;
            }
            return u = n.converter._dispatch("lists.before", u, i, n), u += "\xa80", n.gListLevel ? u = u.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, function(s, g, B) {
                var S = B.search(/[*+-]/g) > -1 ? "ul" : "ol";
                return h(g, S, !0);
            }) : u = u.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, function(s, g, B, S) {
                var x = S.search(/[*+-]/g) > -1 ? "ul" : "ol";
                return h(B, x, !1);
            }), u = u.replace(/¨0/, ""), u = n.converter._dispatch("lists.after", u, i, n), u;
        }), r.subParser("metadata", function(u, i, n) {
            if (!i.metadata) return u;
            u = n.converter._dispatch("metadata.before", u, i, n);
            function o(f) {
                n.metadata.raw = f, f = f.replace(/&/g, "&amp;").replace(/"/g, "&quot;"), f = f.replace(/\n {4}/g, " "), f.replace(/^([\S ]+): +([\s\S]+?)$/gm, function(h, s, g) {
                    return n.metadata.parsed[s] = g, "";
                });
            }
            return u = u.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function(f, h, s) {
                return o(s), "\xa8M";
            }), u = u.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function(f, h, s) {
                return h && (n.metadata.format = h), o(s), "\xa8M";
            }), u = u.replace(/¨M/g, ""), u = n.converter._dispatch("metadata.after", u, i, n), u;
        }), r.subParser("outdent", function(u, i, n) {
            return u = n.converter._dispatch("outdent.before", u, i, n), u = u.replace(/^(\t|[ ]{1,4})/gm, "\xa80"), u = u.replace(/¨0/g, ""), u = n.converter._dispatch("outdent.after", u, i, n), u;
        }), r.subParser("paragraphs", function(u, i, n) {
            u = n.converter._dispatch("paragraphs.before", u, i, n), u = u.replace(/^\n+/g, ""), u = u.replace(/\n+$/g, "");
            for(var o = u.split(/\n{2,}/g), f = [], h = o.length, s = 0; s < h; s++){
                var g = o[s];
                g.search(/¨(K|G)(\d+)\1/g) >= 0 ? f.push(g) : g.search(/\S/) >= 0 && (g = r.subParser("spanGamut")(g, i, n), g = g.replace(/^([ \t]*)/g, "<p>"), g += "</p>", f.push(g));
            }
            for(h = f.length, s = 0; s < h; s++){
                for(var B = "", S = f[s], x = !1; /¨(K|G)(\d+)\1/.test(S);){
                    var L = RegExp.$1, l = RegExp.$2;
                    L === "K" ? B = n.gHtmlBlocks[l] : x ? B = r.subParser("encodeCode")(n.ghCodeBlocks[l].text, i, n) : B = n.ghCodeBlocks[l].codeblock, B = B.replace(/\$/g, "$$$$"), S = S.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, B), /^<pre\b[^>]*>\s*<code\b[^>]*>/.test(S) && (x = !0);
                }
                f[s] = S;
            }
            return u = f.join("\n"), u = u.replace(/^\n+/g, ""), u = u.replace(/\n+$/g, ""), n.converter._dispatch("paragraphs.after", u, i, n);
        }), r.subParser("runExtension", function(u, i, n, o) {
            if (u.filter) i = u.filter(i, o.converter, n);
            else if (u.regex) {
                var f = u.regex;
                _instanceof(f, RegExp) || (f = new RegExp(f, "g")), i = i.replace(f, u.replace);
            }
            return i;
        }), r.subParser("spanGamut", function(u, i, n) {
            return u = n.converter._dispatch("spanGamut.before", u, i, n), u = r.subParser("codeSpans")(u, i, n), u = r.subParser("escapeSpecialCharsWithinTagAttributes")(u, i, n), u = r.subParser("encodeBackslashEscapes")(u, i, n), u = r.subParser("images")(u, i, n), u = r.subParser("anchors")(u, i, n), u = r.subParser("autoLinks")(u, i, n), u = r.subParser("simplifiedAutoLinks")(u, i, n), u = r.subParser("emoji")(u, i, n), u = r.subParser("underline")(u, i, n), u = r.subParser("italicsAndBold")(u, i, n), u = r.subParser("strikethrough")(u, i, n), u = r.subParser("ellipsis")(u, i, n), u = r.subParser("hashHTMLSpans")(u, i, n), u = r.subParser("encodeAmpsAndAngles")(u, i, n), i.simpleLineBreaks ? /\n\n¨K/.test(u) || (u = u.replace(/\n+/g, "<br />\n")) : u = u.replace(/  +\n/g, "<br />\n"), u = n.converter._dispatch("spanGamut.after", u, i, n), u;
        }), r.subParser("strikethrough", function(u, i, n) {
            function o(f) {
                return i.simplifiedAutoLink && (f = r.subParser("simplifiedAutoLinks")(f, i, n)), "<del>" + f + "</del>";
            }
            return i.strikethrough && (u = n.converter._dispatch("strikethrough.before", u, i, n), u = u.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function(f, h) {
                return o(h);
            }), u = n.converter._dispatch("strikethrough.after", u, i, n)), u;
        }), r.subParser("stripLinkDefinitions", function(u, i, n) {
            var o = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm, f = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;
            u += "\xa80";
            var h = function h(s, g, B, S, x, L, l) {
                return g = g.toLowerCase(), u.toLowerCase().split(g).length - 1 < 2 ? s : (B.match(/^data:.+?\/.+?;base64,/) ? n.gUrls[g] = B.replace(/\s/g, "") : n.gUrls[g] = r.subParser("encodeAmpsAndAngles")(B, i, n), L ? L + l : (l && (n.gTitles[g] = l.replace(/"|'/g, "&quot;")), i.parseImgDimensions && S && x && (n.gDimensions[g] = {
                    width: S,
                    height: x
                }), ""));
            };
            return u = u.replace(f, h), u = u.replace(o, h), u = u.replace(/¨0/, ""), u;
        }), r.subParser("tables", function(u, i, n) {
            if (!i.tables) return u;
            var o = /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm, f = /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;
            function h(x) {
                return /^:[ \t]*--*$/.test(x) ? ' style="text-align:left;"' : /^--*[ \t]*:[ \t]*$/.test(x) ? ' style="text-align:right;"' : /^:[ \t]*--*[ \t]*:$/.test(x) ? ' style="text-align:center;"' : "";
            }
            function s(x, L) {
                var l = "";
                return x = x.trim(), (i.tablesHeaderId || i.tableHeaderId) && (l = ' id="' + x.replace(/ /g, "_").toLowerCase() + '"'), x = r.subParser("spanGamut")(x, i, n), "<th" + l + L + ">" + x + "</th>\n";
            }
            function g(x, L) {
                var l = r.subParser("spanGamut")(x, i, n);
                return "<td" + L + ">" + l + "</td>\n";
            }
            function B(x, L) {
                for(var l = "<table>\n<thead>\n<tr>\n", E = x.length, v = 0; v < E; ++v)l += x[v];
                for(l += "</tr>\n</thead>\n<tbody>\n", v = 0; v < L.length; ++v){
                    l += "<tr>\n";
                    for(var T = 0; T < E; ++T)l += L[v][T];
                    l += "</tr>\n";
                }
                return l += "</tbody>\n</table>\n", l;
            }
            function S(x) {
                var L, l = x.split("\n");
                for(L = 0; L < l.length; ++L)/^ {0,3}\|/.test(l[L]) && (l[L] = l[L].replace(/^ {0,3}\|/, "")), /\|[ \t]*$/.test(l[L]) && (l[L] = l[L].replace(/\|[ \t]*$/, "")), l[L] = r.subParser("codeSpans")(l[L], i, n);
                var E = l[0].split("|").map(function(O) {
                    return O.trim();
                }), v = l[1].split("|").map(function(O) {
                    return O.trim();
                }), T = [], j = [], P = [], z = [];
                for(l.shift(), l.shift(), L = 0; L < l.length; ++L)l[L].trim() !== "" && T.push(l[L].split("|").map(function(O) {
                    return O.trim();
                }));
                if (E.length < v.length) return x;
                for(L = 0; L < v.length; ++L)P.push(h(v[L]));
                for(L = 0; L < E.length; ++L)r.helper.isUndefined(P[L]) && (P[L] = ""), j.push(s(E[L], P[L]));
                for(L = 0; L < T.length; ++L){
                    for(var H = [], U = 0; U < j.length; ++U)r.helper.isUndefined(T[L][U]), H.push(g(T[L][U], P[U]));
                    z.push(H);
                }
                return B(j, z);
            }
            return u = n.converter._dispatch("tables.before", u, i, n), u = u.replace(/\\(\|)/g, r.helper.escapeCharactersCallback), u = u.replace(o, S), u = u.replace(f, S), u = n.converter._dispatch("tables.after", u, i, n), u;
        }), r.subParser("underline", function(u, i, n) {
            return i.underline && (u = n.converter._dispatch("underline.before", u, i, n), i.literalMidWordUnderscores ? (u = u.replace(/\b___(\S[\s\S]*?)___\b/g, function(o, f) {
                return "<u>" + f + "</u>";
            }), u = u.replace(/\b__(\S[\s\S]*?)__\b/g, function(o, f) {
                return "<u>" + f + "</u>";
            })) : (u = u.replace(/___(\S[\s\S]*?)___/g, function(o, f) {
                return /\S$/.test(f) ? "<u>" + f + "</u>" : o;
            }), u = u.replace(/__(\S[\s\S]*?)__/g, function(o, f) {
                return /\S$/.test(f) ? "<u>" + f + "</u>" : o;
            })), u = u.replace(/(_)/g, r.helper.escapeCharactersCallback), u = n.converter._dispatch("underline.after", u, i, n)), u;
        }), r.subParser("unescapeSpecialChars", function(u, i, n) {
            return u = n.converter._dispatch("unescapeSpecialChars.before", u, i, n), u = u.replace(/¨E(\d+)E/g, function(o, f) {
                var h = parseInt(f);
                return String.fromCharCode(h);
            }), u = n.converter._dispatch("unescapeSpecialChars.after", u, i, n), u;
        }), r.subParser("makeMarkdown.blockquote", function(u, i) {
            var n = "";
            if (u.hasChildNodes()) for(var o = u.childNodes, f = o.length, h = 0; h < f; ++h){
                var s = r.subParser("makeMarkdown.node")(o[h], i);
                s !== "" && (n += s);
            }
            return n = n.trim(), n = "> " + n.split("\n").join("\n> "), n;
        }), r.subParser("makeMarkdown.codeBlock", function(u, i) {
            var n = u.getAttribute("language"), o = u.getAttribute("precodenum");
            return "```" + n + "\n" + i.preList[o] + "\n```";
        }), r.subParser("makeMarkdown.codeSpan", function(u) {
            return "`" + u.innerHTML + "`";
        }), r.subParser("makeMarkdown.emphasis", function(u, i) {
            var n = "";
            if (u.hasChildNodes()) {
                n += "*";
                for(var o = u.childNodes, f = o.length, h = 0; h < f; ++h)n += r.subParser("makeMarkdown.node")(o[h], i);
                n += "*";
            }
            return n;
        }), r.subParser("makeMarkdown.header", function(u, i, n) {
            var o = new Array(n + 1).join("#"), f = "";
            if (u.hasChildNodes()) {
                f = o + " ";
                for(var h = u.childNodes, s = h.length, g = 0; g < s; ++g)f += r.subParser("makeMarkdown.node")(h[g], i);
            }
            return f;
        }), r.subParser("makeMarkdown.hr", function() {
            return "---";
        }), r.subParser("makeMarkdown.image", function(u) {
            var i = "";
            return u.hasAttribute("src") && (i += "![" + u.getAttribute("alt") + "](", i += "<" + u.getAttribute("src") + ">", u.hasAttribute("width") && u.hasAttribute("height") && (i += " =" + u.getAttribute("width") + "x" + u.getAttribute("height")), u.hasAttribute("title") && (i += ' "' + u.getAttribute("title") + '"'), i += ")"), i;
        }), r.subParser("makeMarkdown.links", function(u, i) {
            var n = "";
            if (u.hasChildNodes() && u.hasAttribute("href")) {
                var o = u.childNodes, f = o.length;
                n = "[";
                for(var h = 0; h < f; ++h)n += r.subParser("makeMarkdown.node")(o[h], i);
                n += "](", n += "<" + u.getAttribute("href") + ">", u.hasAttribute("title") && (n += ' "' + u.getAttribute("title") + '"'), n += ")";
            }
            return n;
        }), r.subParser("makeMarkdown.list", function(u, i, n) {
            var o = "";
            if (!u.hasChildNodes()) return "";
            for(var f = u.childNodes, h = f.length, s = u.getAttribute("start") || 1, g = 0; g < h; ++g)if (!(_type_of(f[g].tagName) > "u" || f[g].tagName.toLowerCase() !== "li")) {
                var B = "";
                n === "ol" ? B = s.toString() + ". " : B = "- ", o += B + r.subParser("makeMarkdown.listItem")(f[g], i), ++s;
            }
            return o += "\n<!-- -->\n", o.trim();
        }), r.subParser("makeMarkdown.listItem", function(u, i) {
            for(var n = "", o = u.childNodes, f = o.length, h = 0; h < f; ++h)n += r.subParser("makeMarkdown.node")(o[h], i);
            return /\n$/.test(n) ? n = n.split("\n").join("\n    ").replace(/^ {4}$/gm, "").replace(/\n\n+/g, "\n\n") : n += "\n", n;
        }), r.subParser("makeMarkdown.node", function(u, i, n) {
            n = n || !1;
            var o = "";
            if (u.nodeType === 3) return r.subParser("makeMarkdown.txt")(u, i);
            if (u.nodeType === 8) return "<!--" + u.data + "-->\n\n";
            if (u.nodeType !== 1) return "";
            var f = u.tagName.toLowerCase();
            switch(f){
                case "h1":
                    n || (o = r.subParser("makeMarkdown.header")(u, i, 1) + "\n\n");
                    break;
                case "h2":
                    n || (o = r.subParser("makeMarkdown.header")(u, i, 2) + "\n\n");
                    break;
                case "h3":
                    n || (o = r.subParser("makeMarkdown.header")(u, i, 3) + "\n\n");
                    break;
                case "h4":
                    n || (o = r.subParser("makeMarkdown.header")(u, i, 4) + "\n\n");
                    break;
                case "h5":
                    n || (o = r.subParser("makeMarkdown.header")(u, i, 5) + "\n\n");
                    break;
                case "h6":
                    n || (o = r.subParser("makeMarkdown.header")(u, i, 6) + "\n\n");
                    break;
                case "p":
                    n || (o = r.subParser("makeMarkdown.paragraph")(u, i) + "\n\n");
                    break;
                case "blockquote":
                    n || (o = r.subParser("makeMarkdown.blockquote")(u, i) + "\n\n");
                    break;
                case "hr":
                    n || (o = r.subParser("makeMarkdown.hr")(u, i) + "\n\n");
                    break;
                case "ol":
                    n || (o = r.subParser("makeMarkdown.list")(u, i, "ol") + "\n\n");
                    break;
                case "ul":
                    n || (o = r.subParser("makeMarkdown.list")(u, i, "ul") + "\n\n");
                    break;
                case "precode":
                    n || (o = r.subParser("makeMarkdown.codeBlock")(u, i) + "\n\n");
                    break;
                case "pre":
                    n || (o = r.subParser("makeMarkdown.pre")(u, i) + "\n\n");
                    break;
                case "table":
                    n || (o = r.subParser("makeMarkdown.table")(u, i) + "\n\n");
                    break;
                case "code":
                    o = r.subParser("makeMarkdown.codeSpan")(u, i);
                    break;
                case "em":
                case "i":
                    o = r.subParser("makeMarkdown.emphasis")(u, i);
                    break;
                case "strong":
                case "b":
                    o = r.subParser("makeMarkdown.strong")(u, i);
                    break;
                case "del":
                    o = r.subParser("makeMarkdown.strikethrough")(u, i);
                    break;
                case "a":
                    o = r.subParser("makeMarkdown.links")(u, i);
                    break;
                case "img":
                    o = r.subParser("makeMarkdown.image")(u, i);
                    break;
                default:
                    o = u.outerHTML + "\n\n";
            }
            return o;
        }), r.subParser("makeMarkdown.paragraph", function(u, i) {
            var n = "";
            if (u.hasChildNodes()) for(var o = u.childNodes, f = o.length, h = 0; h < f; ++h)n += r.subParser("makeMarkdown.node")(o[h], i);
            return n = n.trim(), n;
        }), r.subParser("makeMarkdown.pre", function(u, i) {
            var n = u.getAttribute("prenum");
            return "<pre>" + i.preList[n] + "</pre>";
        }), r.subParser("makeMarkdown.strikethrough", function(u, i) {
            var n = "";
            if (u.hasChildNodes()) {
                n += "~~";
                for(var o = u.childNodes, f = o.length, h = 0; h < f; ++h)n += r.subParser("makeMarkdown.node")(o[h], i);
                n += "~~";
            }
            return n;
        }), r.subParser("makeMarkdown.strong", function(u, i) {
            var n = "";
            if (u.hasChildNodes()) {
                n += "**";
                for(var o = u.childNodes, f = o.length, h = 0; h < f; ++h)n += r.subParser("makeMarkdown.node")(o[h], i);
                n += "**";
            }
            return n;
        }), r.subParser("makeMarkdown.table", function(u, i) {
            var n = "", o = [
                [],
                []
            ], f = u.querySelectorAll("thead>tr>th"), h = u.querySelectorAll("tbody>tr"), s, g;
            for(s = 0; s < f.length; ++s){
                var B = r.subParser("makeMarkdown.tableCell")(f[s], i), S = "---";
                if (f[s].hasAttribute("style")) {
                    var x = f[s].getAttribute("style").toLowerCase().replace(/\s/g, "");
                    switch(x){
                        case "text-align:left;":
                            S = ":---";
                            break;
                        case "text-align:right;":
                            S = "---:";
                            break;
                        case "text-align:center;":
                            S = ":---:";
                            break;
                    }
                }
                o[0][s] = B.trim(), o[1][s] = S;
            }
            for(s = 0; s < h.length; ++s){
                var L = o.push([]) - 1, l = h[s].getElementsByTagName("td");
                for(g = 0; g < f.length; ++g){
                    var E = " ";
                    _type_of(l[g]) < "u" && (E = r.subParser("makeMarkdown.tableCell")(l[g], i)), o[L].push(E);
                }
            }
            var v = 3;
            for(s = 0; s < o.length; ++s)for(g = 0; g < o[s].length; ++g){
                var T = o[s][g].length;
                T > v && (v = T);
            }
            for(s = 0; s < o.length; ++s){
                for(g = 0; g < o[s].length; ++g)s === 1 ? o[s][g].slice(-1) === ":" ? o[s][g] = r.helper.padEnd(o[s][g].slice(-1), v - 1, "-") + ":" : o[s][g] = r.helper.padEnd(o[s][g], v, "-") : o[s][g] = r.helper.padEnd(o[s][g], v);
                n += "| " + o[s].join(" | ") + " |\n";
            }
            return n.trim();
        }), r.subParser("makeMarkdown.tableCell", function(u, i) {
            var n = "";
            if (!u.hasChildNodes()) return "";
            for(var o = u.childNodes, f = o.length, h = 0; h < f; ++h)n += r.subParser("makeMarkdown.node")(o[h], i, !0);
            return n.trim();
        }), r.subParser("makeMarkdown.txt", function(u) {
            var i = u.nodeValue;
            return i = i.replace(/ +/g, " "), i = i.replace(/¨NBSP;/g, " "), i = r.helper.unescapeHTMLEntities(i), i = i.replace(/([*_~|`])/g, "\\$1"), i = i.replace(/^(\s*)>/g, "\\$1>"), i = i.replace(/^#/gm, "\\#"), i = i.replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3"), i = i.replace(/^( {0,3}\d+)\./gm, "$1\\."), i = i.replace(/^( {0,3})([+-])/gm, "$1\\$2"), i = i.replace(/]([\s]*)\(/g, "\\]$1\\("), i = i.replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:"), i;
        });
        var C = this;
        typeof define == "function" && define.amd ? define(function() {
            return r;
        }) : (typeof Ee === "undefined" ? "undefined" : _type_of(Ee)) < "u" && Ee.exports ? Ee.exports = r : C.showdown = r;
    }).call(nu);
});
var er = le(function(oi, Le) {
    var Gn = {
        core: {
            meta: {
                path: "components/prism-core.js",
                option: "mandatory"
            },
            core: "Core"
        },
        themes: {
            meta: {
                path: "themes/{id}.css",
                link: "index.html?theme={id}",
                exclusive: !0
            },
            prism: {
                title: "Default",
                option: "default"
            },
            "prism-dark": "Dark",
            "prism-funky": "Funky",
            "prism-okaidia": {
                title: "Okaidia",
                owner: "ocodia"
            },
            "prism-twilight": {
                title: "Twilight",
                owner: "remybach"
            },
            "prism-coy": {
                title: "Coy",
                owner: "tshedor"
            },
            "prism-solarizedlight": {
                title: "Solarized Light",
                owner: "hectormatos2011 "
            },
            "prism-tomorrow": {
                title: "Tomorrow Night",
                owner: "Rosey"
            }
        },
        languages: {
            meta: {
                path: "components/prism-{id}",
                noCSS: !0,
                examplesPath: "examples/prism-{id}",
                addCheckAll: !0
            },
            markup: {
                title: "Markup",
                alias: [
                    "html",
                    "xml",
                    "svg",
                    "mathml",
                    "ssml",
                    "atom",
                    "rss"
                ],
                aliasTitles: {
                    html: "HTML",
                    xml: "XML",
                    svg: "SVG",
                    mathml: "MathML",
                    ssml: "SSML",
                    atom: "Atom",
                    rss: "RSS"
                },
                option: "default"
            },
            css: {
                title: "CSS",
                option: "default",
                modify: "markup"
            },
            clike: {
                title: "C-like",
                option: "default"
            },
            javascript: {
                title: "JavaScript",
                require: "clike",
                modify: "markup",
                optional: "regex",
                alias: "js",
                option: "default"
            },
            abap: {
                title: "ABAP",
                owner: "dellagustin"
            },
            abnf: {
                title: "ABNF",
                owner: "RunDevelopment"
            },
            actionscript: {
                title: "ActionScript",
                require: "javascript",
                modify: "markup",
                owner: "Golmote"
            },
            ada: {
                title: "Ada",
                owner: "Lucretia"
            },
            agda: {
                title: "Agda",
                owner: "xy-ren"
            },
            al: {
                title: "AL",
                owner: "RunDevelopment"
            },
            antlr4: {
                title: "ANTLR4",
                alias: "g4",
                owner: "RunDevelopment"
            },
            apacheconf: {
                title: "Apache Configuration",
                owner: "GuiTeK"
            },
            apex: {
                title: "Apex",
                require: [
                    "clike",
                    "sql"
                ],
                owner: "RunDevelopment"
            },
            apl: {
                title: "APL",
                owner: "ngn"
            },
            applescript: {
                title: "AppleScript",
                owner: "Golmote"
            },
            aql: {
                title: "AQL",
                owner: "RunDevelopment"
            },
            arduino: {
                title: "Arduino",
                require: "cpp",
                alias: "ino",
                owner: "dkern"
            },
            arff: {
                title: "ARFF",
                owner: "Golmote"
            },
            armasm: {
                title: "ARM Assembly",
                alias: "arm-asm",
                owner: "RunDevelopment"
            },
            arturo: {
                title: "Arturo",
                alias: "art",
                optional: [
                    "bash",
                    "css",
                    "javascript",
                    "markup",
                    "markdown",
                    "sql"
                ],
                owner: "drkameleon"
            },
            asciidoc: {
                alias: "adoc",
                title: "AsciiDoc",
                owner: "Golmote"
            },
            aspnet: {
                title: "ASP.NET (C#)",
                require: [
                    "markup",
                    "csharp"
                ],
                owner: "nauzilus"
            },
            asm6502: {
                title: "6502 Assembly",
                owner: "kzurawel"
            },
            asmatmel: {
                title: "Atmel AVR Assembly",
                owner: "cerkit"
            },
            autohotkey: {
                title: "AutoHotkey",
                owner: "aviaryan"
            },
            autoit: {
                title: "AutoIt",
                owner: "Golmote"
            },
            avisynth: {
                title: "AviSynth",
                alias: "avs",
                owner: "Zinfidel"
            },
            "avro-idl": {
                title: "Avro IDL",
                alias: "avdl",
                owner: "RunDevelopment"
            },
            awk: {
                title: "AWK",
                alias: "gawk",
                aliasTitles: {
                    gawk: "GAWK"
                },
                owner: "RunDevelopment"
            },
            bash: {
                title: "Bash",
                alias: [
                    "sh",
                    "shell"
                ],
                aliasTitles: {
                    sh: "Shell",
                    shell: "Shell"
                },
                owner: "zeitgeist87"
            },
            basic: {
                title: "BASIC",
                owner: "Golmote"
            },
            batch: {
                title: "Batch",
                owner: "Golmote"
            },
            bbcode: {
                title: "BBcode",
                alias: "shortcode",
                aliasTitles: {
                    shortcode: "Shortcode"
                },
                owner: "RunDevelopment"
            },
            bbj: {
                title: "BBj",
                owner: "hyyan"
            },
            bicep: {
                title: "Bicep",
                owner: "johnnyreilly"
            },
            birb: {
                title: "Birb",
                require: "clike",
                owner: "Calamity210"
            },
            bison: {
                title: "Bison",
                require: "c",
                owner: "Golmote"
            },
            bnf: {
                title: "BNF",
                alias: "rbnf",
                aliasTitles: {
                    rbnf: "RBNF"
                },
                owner: "RunDevelopment"
            },
            bqn: {
                title: "BQN",
                owner: "yewscion"
            },
            brainfuck: {
                title: "Brainfuck",
                owner: "Golmote"
            },
            brightscript: {
                title: "BrightScript",
                owner: "RunDevelopment"
            },
            bro: {
                title: "Bro",
                owner: "wayward710"
            },
            bsl: {
                title: "BSL (1C:Enterprise)",
                alias: "oscript",
                aliasTitles: {
                    oscript: "OneScript"
                },
                owner: "Diversus23"
            },
            c: {
                title: "C",
                require: "clike",
                owner: "zeitgeist87"
            },
            csharp: {
                title: "C#",
                require: "clike",
                alias: [
                    "cs",
                    "dotnet"
                ],
                owner: "mvalipour"
            },
            cpp: {
                title: "C++",
                require: "c",
                owner: "zeitgeist87"
            },
            cfscript: {
                title: "CFScript",
                require: "clike",
                alias: "cfc",
                owner: "mjclemente"
            },
            chaiscript: {
                title: "ChaiScript",
                require: [
                    "clike",
                    "cpp"
                ],
                owner: "RunDevelopment"
            },
            cil: {
                title: "CIL",
                owner: "sbrl"
            },
            cilkc: {
                title: "Cilk/C",
                require: "c",
                alias: "cilk-c",
                owner: "OpenCilk"
            },
            cilkcpp: {
                title: "Cilk/C++",
                require: "cpp",
                alias: [
                    "cilk-cpp",
                    "cilk"
                ],
                owner: "OpenCilk"
            },
            clojure: {
                title: "Clojure",
                owner: "troglotit"
            },
            cmake: {
                title: "CMake",
                owner: "mjrogozinski"
            },
            cobol: {
                title: "COBOL",
                owner: "RunDevelopment"
            },
            coffeescript: {
                title: "CoffeeScript",
                require: "javascript",
                alias: "coffee",
                owner: "R-osey"
            },
            concurnas: {
                title: "Concurnas",
                alias: "conc",
                owner: "jasontatton"
            },
            csp: {
                title: "Content-Security-Policy",
                owner: "ScottHelme"
            },
            cooklang: {
                title: "Cooklang",
                owner: "ahue"
            },
            coq: {
                title: "Coq",
                owner: "RunDevelopment"
            },
            crystal: {
                title: "Crystal",
                require: "ruby",
                owner: "MakeNowJust"
            },
            "css-extras": {
                title: "CSS Extras",
                require: "css",
                modify: "css",
                owner: "milesj"
            },
            csv: {
                title: "CSV",
                owner: "RunDevelopment"
            },
            cue: {
                title: "CUE",
                owner: "RunDevelopment"
            },
            cypher: {
                title: "Cypher",
                owner: "RunDevelopment"
            },
            d: {
                title: "D",
                require: "clike",
                owner: "Golmote"
            },
            dart: {
                title: "Dart",
                require: "clike",
                owner: "Golmote"
            },
            dataweave: {
                title: "DataWeave",
                owner: "machaval"
            },
            dax: {
                title: "DAX",
                owner: "peterbud"
            },
            dhall: {
                title: "Dhall",
                owner: "RunDevelopment"
            },
            diff: {
                title: "Diff",
                owner: "uranusjr"
            },
            django: {
                title: "Django/Jinja2",
                require: "markup-templating",
                alias: "jinja2",
                owner: "romanvm"
            },
            "dns-zone-file": {
                title: "DNS zone file",
                owner: "RunDevelopment",
                alias: "dns-zone"
            },
            docker: {
                title: "Docker",
                alias: "dockerfile",
                owner: "JustinBeckwith"
            },
            dot: {
                title: "DOT (Graphviz)",
                alias: "gv",
                optional: "markup",
                owner: "RunDevelopment"
            },
            ebnf: {
                title: "EBNF",
                owner: "RunDevelopment"
            },
            editorconfig: {
                title: "EditorConfig",
                owner: "osipxd"
            },
            eiffel: {
                title: "Eiffel",
                owner: "Conaclos"
            },
            ejs: {
                title: "EJS",
                require: [
                    "javascript",
                    "markup-templating"
                ],
                owner: "RunDevelopment",
                alias: "eta",
                aliasTitles: {
                    eta: "Eta"
                }
            },
            elixir: {
                title: "Elixir",
                owner: "Golmote"
            },
            elm: {
                title: "Elm",
                owner: "zwilias"
            },
            etlua: {
                title: "Embedded Lua templating",
                require: [
                    "lua",
                    "markup-templating"
                ],
                owner: "RunDevelopment"
            },
            erb: {
                title: "ERB",
                require: [
                    "ruby",
                    "markup-templating"
                ],
                owner: "Golmote"
            },
            erlang: {
                title: "Erlang",
                owner: "Golmote"
            },
            "excel-formula": {
                title: "Excel Formula",
                alias: [
                    "xlsx",
                    "xls"
                ],
                owner: "RunDevelopment"
            },
            fsharp: {
                title: "F#",
                require: "clike",
                owner: "simonreynolds7"
            },
            factor: {
                title: "Factor",
                owner: "catb0t"
            },
            false: {
                title: "False",
                owner: "edukisto"
            },
            "firestore-security-rules": {
                title: "Firestore security rules",
                require: "clike",
                owner: "RunDevelopment"
            },
            flow: {
                title: "Flow",
                require: "javascript",
                owner: "Golmote"
            },
            fortran: {
                title: "Fortran",
                owner: "Golmote"
            },
            ftl: {
                title: "FreeMarker Template Language",
                require: "markup-templating",
                owner: "RunDevelopment"
            },
            gml: {
                title: "GameMaker Language",
                alias: "gamemakerlanguage",
                require: "clike",
                owner: "LiarOnce"
            },
            gap: {
                title: "GAP (CAS)",
                owner: "RunDevelopment"
            },
            gcode: {
                title: "G-code",
                owner: "RunDevelopment"
            },
            gdscript: {
                title: "GDScript",
                owner: "RunDevelopment"
            },
            gedcom: {
                title: "GEDCOM",
                owner: "Golmote"
            },
            gettext: {
                title: "gettext",
                alias: "po",
                owner: "RunDevelopment"
            },
            gherkin: {
                title: "Gherkin",
                owner: "hason"
            },
            git: {
                title: "Git",
                owner: "lgiraudel"
            },
            glsl: {
                title: "GLSL",
                require: "c",
                owner: "Golmote"
            },
            gn: {
                title: "GN",
                alias: "gni",
                owner: "RunDevelopment"
            },
            "linker-script": {
                title: "GNU Linker Script",
                alias: "ld",
                owner: "RunDevelopment"
            },
            go: {
                title: "Go",
                require: "clike",
                owner: "arnehormann"
            },
            "go-module": {
                title: "Go module",
                alias: "go-mod",
                owner: "RunDevelopment"
            },
            gradle: {
                title: "Gradle",
                require: "clike",
                owner: "zeabdelkhalek-badido18"
            },
            graphql: {
                title: "GraphQL",
                optional: "markdown",
                owner: "Golmote"
            },
            groovy: {
                title: "Groovy",
                require: "clike",
                owner: "robfletcher"
            },
            haml: {
                title: "Haml",
                require: "ruby",
                optional: [
                    "css",
                    "css-extras",
                    "coffeescript",
                    "erb",
                    "javascript",
                    "less",
                    "markdown",
                    "scss",
                    "textile"
                ],
                owner: "Golmote"
            },
            handlebars: {
                title: "Handlebars",
                require: "markup-templating",
                alias: [
                    "hbs",
                    "mustache"
                ],
                aliasTitles: {
                    mustache: "Mustache"
                },
                owner: "Golmote"
            },
            haskell: {
                title: "Haskell",
                alias: "hs",
                owner: "bholst"
            },
            haxe: {
                title: "Haxe",
                require: "clike",
                optional: "regex",
                owner: "Golmote"
            },
            hcl: {
                title: "HCL",
                owner: "outsideris"
            },
            hlsl: {
                title: "HLSL",
                require: "c",
                owner: "RunDevelopment"
            },
            hoon: {
                title: "Hoon",
                owner: "matildepark"
            },
            http: {
                title: "HTTP",
                optional: [
                    "csp",
                    "css",
                    "hpkp",
                    "hsts",
                    "javascript",
                    "json",
                    "markup",
                    "uri"
                ],
                owner: "danielgtaylor"
            },
            hpkp: {
                title: "HTTP Public-Key-Pins",
                owner: "ScottHelme"
            },
            hsts: {
                title: "HTTP Strict-Transport-Security",
                owner: "ScottHelme"
            },
            ichigojam: {
                title: "IchigoJam",
                owner: "BlueCocoa"
            },
            icon: {
                title: "Icon",
                owner: "Golmote"
            },
            "icu-message-format": {
                title: "ICU Message Format",
                owner: "RunDevelopment"
            },
            idris: {
                title: "Idris",
                alias: "idr",
                owner: "KeenS",
                require: "haskell"
            },
            ignore: {
                title: ".ignore",
                owner: "osipxd",
                alias: [
                    "gitignore",
                    "hgignore",
                    "npmignore"
                ],
                aliasTitles: {
                    gitignore: ".gitignore",
                    hgignore: ".hgignore",
                    npmignore: ".npmignore"
                }
            },
            inform7: {
                title: "Inform 7",
                owner: "Golmote"
            },
            ini: {
                title: "Ini",
                owner: "aviaryan"
            },
            io: {
                title: "Io",
                owner: "AlesTsurko"
            },
            j: {
                title: "J",
                owner: "Golmote"
            },
            java: {
                title: "Java",
                require: "clike",
                owner: "sherblot"
            },
            javadoc: {
                title: "JavaDoc",
                require: [
                    "markup",
                    "java",
                    "javadoclike"
                ],
                modify: "java",
                optional: "scala",
                owner: "RunDevelopment"
            },
            javadoclike: {
                title: "JavaDoc-like",
                modify: [
                    "java",
                    "javascript",
                    "php"
                ],
                owner: "RunDevelopment"
            },
            javastacktrace: {
                title: "Java stack trace",
                owner: "RunDevelopment"
            },
            jexl: {
                title: "Jexl",
                owner: "czosel"
            },
            jolie: {
                title: "Jolie",
                require: "clike",
                owner: "thesave"
            },
            jq: {
                title: "JQ",
                owner: "RunDevelopment"
            },
            jsdoc: {
                title: "JSDoc",
                require: [
                    "javascript",
                    "javadoclike",
                    "typescript"
                ],
                modify: "javascript",
                optional: [
                    "actionscript",
                    "coffeescript"
                ],
                owner: "RunDevelopment"
            },
            "js-extras": {
                title: "JS Extras",
                require: "javascript",
                modify: "javascript",
                optional: [
                    "actionscript",
                    "coffeescript",
                    "flow",
                    "n4js",
                    "typescript"
                ],
                owner: "RunDevelopment"
            },
            json: {
                title: "JSON",
                alias: "webmanifest",
                aliasTitles: {
                    webmanifest: "Web App Manifest"
                },
                owner: "CupOfTea696"
            },
            json5: {
                title: "JSON5",
                require: "json",
                owner: "RunDevelopment"
            },
            jsonp: {
                title: "JSONP",
                require: "json",
                owner: "RunDevelopment"
            },
            jsstacktrace: {
                title: "JS stack trace",
                owner: "sbrl"
            },
            "js-templates": {
                title: "JS Templates",
                require: "javascript",
                modify: "javascript",
                optional: [
                    "css",
                    "css-extras",
                    "graphql",
                    "markdown",
                    "markup",
                    "sql"
                ],
                owner: "RunDevelopment"
            },
            julia: {
                title: "Julia",
                owner: "cdagnino"
            },
            keepalived: {
                title: "Keepalived Configure",
                owner: "dev-itsheng"
            },
            keyman: {
                title: "Keyman",
                owner: "mcdurdin"
            },
            kotlin: {
                title: "Kotlin",
                alias: [
                    "kt",
                    "kts"
                ],
                aliasTitles: {
                    kts: "Kotlin Script"
                },
                require: "clike",
                owner: "Golmote"
            },
            kumir: {
                title: "KuMir (КуМир)",
                alias: "kum",
                owner: "edukisto"
            },
            kusto: {
                title: "Kusto",
                owner: "RunDevelopment"
            },
            latex: {
                title: "LaTeX",
                alias: [
                    "tex",
                    "context"
                ],
                aliasTitles: {
                    tex: "TeX",
                    context: "ConTeXt"
                },
                owner: "japborst"
            },
            latte: {
                title: "Latte",
                require: [
                    "clike",
                    "markup-templating",
                    "php"
                ],
                owner: "nette"
            },
            less: {
                title: "Less",
                require: "css",
                optional: "css-extras",
                owner: "Golmote"
            },
            lilypond: {
                title: "LilyPond",
                require: "scheme",
                alias: "ly",
                owner: "RunDevelopment"
            },
            liquid: {
                title: "Liquid",
                require: "markup-templating",
                owner: "cinhtau"
            },
            lisp: {
                title: "Lisp",
                alias: [
                    "emacs",
                    "elisp",
                    "emacs-lisp"
                ],
                owner: "JuanCaicedo"
            },
            livescript: {
                title: "LiveScript",
                owner: "Golmote"
            },
            llvm: {
                title: "LLVM IR",
                owner: "porglezomp"
            },
            log: {
                title: "Log file",
                optional: "javastacktrace",
                owner: "RunDevelopment"
            },
            lolcode: {
                title: "LOLCODE",
                owner: "Golmote"
            },
            lua: {
                title: "Lua",
                owner: "Golmote"
            },
            magma: {
                title: "Magma (CAS)",
                owner: "RunDevelopment"
            },
            makefile: {
                title: "Makefile",
                owner: "Golmote"
            },
            markdown: {
                title: "Markdown",
                require: "markup",
                optional: "yaml",
                alias: "md",
                owner: "Golmote"
            },
            "markup-templating": {
                title: "Markup templating",
                require: "markup",
                owner: "Golmote"
            },
            mata: {
                title: "Mata",
                owner: "RunDevelopment"
            },
            matlab: {
                title: "MATLAB",
                owner: "Golmote"
            },
            maxscript: {
                title: "MAXScript",
                owner: "RunDevelopment"
            },
            mel: {
                title: "MEL",
                owner: "Golmote"
            },
            mermaid: {
                title: "Mermaid",
                owner: "RunDevelopment"
            },
            metafont: {
                title: "METAFONT",
                owner: "LaeriExNihilo"
            },
            mizar: {
                title: "Mizar",
                owner: "Golmote"
            },
            mongodb: {
                title: "MongoDB",
                owner: "airs0urce",
                require: "javascript"
            },
            monkey: {
                title: "Monkey",
                owner: "Golmote"
            },
            moonscript: {
                title: "MoonScript",
                alias: "moon",
                owner: "RunDevelopment"
            },
            n1ql: {
                title: "N1QL",
                owner: "TMWilds"
            },
            n4js: {
                title: "N4JS",
                require: "javascript",
                optional: "jsdoc",
                alias: "n4jsd",
                owner: "bsmith-n4"
            },
            "nand2tetris-hdl": {
                title: "Nand To Tetris HDL",
                owner: "stephanmax"
            },
            naniscript: {
                title: "Naninovel Script",
                owner: "Elringus",
                alias: "nani"
            },
            nasm: {
                title: "NASM",
                owner: "rbmj"
            },
            neon: {
                title: "NEON",
                owner: "nette"
            },
            nevod: {
                title: "Nevod",
                owner: "nezaboodka"
            },
            nginx: {
                title: "nginx",
                owner: "volado"
            },
            nim: {
                title: "Nim",
                owner: "Golmote"
            },
            nix: {
                title: "Nix",
                owner: "Golmote"
            },
            nsis: {
                title: "NSIS",
                owner: "idleberg"
            },
            objectivec: {
                title: "Objective-C",
                require: "c",
                alias: "objc",
                owner: "uranusjr"
            },
            ocaml: {
                title: "OCaml",
                owner: "Golmote"
            },
            odin: {
                title: "Odin",
                owner: "edukisto"
            },
            opencl: {
                title: "OpenCL",
                require: "c",
                modify: [
                    "c",
                    "cpp"
                ],
                owner: "Milania1"
            },
            openqasm: {
                title: "OpenQasm",
                alias: "qasm",
                owner: "RunDevelopment"
            },
            oz: {
                title: "Oz",
                owner: "Golmote"
            },
            parigp: {
                title: "PARI/GP",
                owner: "Golmote"
            },
            parser: {
                title: "Parser",
                require: "markup",
                owner: "Golmote"
            },
            pascal: {
                title: "Pascal",
                alias: "objectpascal",
                aliasTitles: {
                    objectpascal: "Object Pascal"
                },
                owner: "Golmote"
            },
            pascaligo: {
                title: "Pascaligo",
                owner: "DefinitelyNotAGoat"
            },
            psl: {
                title: "PATROL Scripting Language",
                owner: "bertysentry"
            },
            pcaxis: {
                title: "PC-Axis",
                alias: "px",
                owner: "RunDevelopment"
            },
            peoplecode: {
                title: "PeopleCode",
                alias: "pcode",
                owner: "RunDevelopment"
            },
            perl: {
                title: "Perl",
                owner: "Golmote"
            },
            php: {
                title: "PHP",
                require: "markup-templating",
                owner: "milesj"
            },
            phpdoc: {
                title: "PHPDoc",
                require: [
                    "php",
                    "javadoclike"
                ],
                modify: "php",
                owner: "RunDevelopment"
            },
            "php-extras": {
                title: "PHP Extras",
                require: "php",
                modify: "php",
                owner: "milesj"
            },
            "plant-uml": {
                title: "PlantUML",
                alias: "plantuml",
                owner: "RunDevelopment"
            },
            plsql: {
                title: "PL/SQL",
                require: "sql",
                owner: "Golmote"
            },
            powerquery: {
                title: "PowerQuery",
                alias: [
                    "pq",
                    "mscript"
                ],
                owner: "peterbud"
            },
            powershell: {
                title: "PowerShell",
                owner: "nauzilus"
            },
            processing: {
                title: "Processing",
                require: "clike",
                owner: "Golmote"
            },
            prolog: {
                title: "Prolog",
                owner: "Golmote"
            },
            promql: {
                title: "PromQL",
                owner: "arendjr"
            },
            properties: {
                title: ".properties",
                owner: "Golmote"
            },
            protobuf: {
                title: "Protocol Buffers",
                require: "clike",
                owner: "just-boris"
            },
            pug: {
                title: "Pug",
                require: [
                    "markup",
                    "javascript"
                ],
                optional: [
                    "coffeescript",
                    "ejs",
                    "handlebars",
                    "less",
                    "livescript",
                    "markdown",
                    "scss",
                    "stylus",
                    "twig"
                ],
                owner: "Golmote"
            },
            puppet: {
                title: "Puppet",
                owner: "Golmote"
            },
            pure: {
                title: "Pure",
                optional: [
                    "c",
                    "cpp",
                    "fortran"
                ],
                owner: "Golmote"
            },
            purebasic: {
                title: "PureBasic",
                require: "clike",
                alias: "pbfasm",
                owner: "HeX0R101"
            },
            purescript: {
                title: "PureScript",
                require: "haskell",
                alias: "purs",
                owner: "sriharshachilakapati"
            },
            python: {
                title: "Python",
                alias: "py",
                owner: "multipetros"
            },
            qsharp: {
                title: "Q#",
                require: "clike",
                alias: "qs",
                owner: "fedonman"
            },
            q: {
                title: "Q (kdb+ database)",
                owner: "Golmote"
            },
            qml: {
                title: "QML",
                require: "javascript",
                owner: "RunDevelopment"
            },
            qore: {
                title: "Qore",
                require: "clike",
                owner: "temnroegg"
            },
            r: {
                title: "R",
                owner: "Golmote"
            },
            racket: {
                title: "Racket",
                require: "scheme",
                alias: "rkt",
                owner: "RunDevelopment"
            },
            cshtml: {
                title: "Razor C#",
                alias: "razor",
                require: [
                    "markup",
                    "csharp"
                ],
                optional: [
                    "css",
                    "css-extras",
                    "javascript",
                    "js-extras"
                ],
                owner: "RunDevelopment"
            },
            jsx: {
                title: "React JSX",
                require: [
                    "markup",
                    "javascript"
                ],
                optional: [
                    "jsdoc",
                    "js-extras",
                    "js-templates"
                ],
                owner: "vkbansal"
            },
            tsx: {
                title: "React TSX",
                require: [
                    "jsx",
                    "typescript"
                ]
            },
            reason: {
                title: "Reason",
                require: "clike",
                owner: "Golmote"
            },
            regex: {
                title: "Regex",
                owner: "RunDevelopment"
            },
            rego: {
                title: "Rego",
                owner: "JordanSh"
            },
            renpy: {
                title: "Ren'py",
                alias: "rpy",
                owner: "HyuchiaDiego"
            },
            rescript: {
                title: "ReScript",
                alias: "res",
                owner: "vmarcosp"
            },
            rest: {
                title: "reST (reStructuredText)",
                owner: "Golmote"
            },
            rip: {
                title: "Rip",
                owner: "ravinggenius"
            },
            roboconf: {
                title: "Roboconf",
                owner: "Golmote"
            },
            robotframework: {
                title: "Robot Framework",
                alias: "robot",
                owner: "RunDevelopment"
            },
            ruby: {
                title: "Ruby",
                require: "clike",
                alias: "rb",
                owner: "samflores"
            },
            rust: {
                title: "Rust",
                owner: "Golmote"
            },
            sas: {
                title: "SAS",
                optional: [
                    "groovy",
                    "lua",
                    "sql"
                ],
                owner: "Golmote"
            },
            sass: {
                title: "Sass (Sass)",
                require: "css",
                optional: "css-extras",
                owner: "Golmote"
            },
            scss: {
                title: "Sass (SCSS)",
                require: "css",
                optional: "css-extras",
                owner: "MoOx"
            },
            scala: {
                title: "Scala",
                require: "java",
                owner: "jozic"
            },
            scheme: {
                title: "Scheme",
                owner: "bacchus123"
            },
            "shell-session": {
                title: "Shell session",
                require: "bash",
                alias: [
                    "sh-session",
                    "shellsession"
                ],
                owner: "RunDevelopment"
            },
            smali: {
                title: "Smali",
                owner: "RunDevelopment"
            },
            smalltalk: {
                title: "Smalltalk",
                owner: "Golmote"
            },
            smarty: {
                title: "Smarty",
                require: "markup-templating",
                optional: "php",
                owner: "Golmote"
            },
            sml: {
                title: "SML",
                alias: "smlnj",
                aliasTitles: {
                    smlnj: "SML/NJ"
                },
                owner: "RunDevelopment"
            },
            solidity: {
                title: "Solidity (Ethereum)",
                alias: "sol",
                require: "clike",
                owner: "glachaud"
            },
            "solution-file": {
                title: "Solution file",
                alias: "sln",
                owner: "RunDevelopment"
            },
            soy: {
                title: "Soy (Closure Template)",
                require: "markup-templating",
                owner: "Golmote"
            },
            sparql: {
                title: "SPARQL",
                require: "turtle",
                owner: "Triply-Dev",
                alias: "rq"
            },
            "splunk-spl": {
                title: "Splunk SPL",
                owner: "RunDevelopment"
            },
            sqf: {
                title: "SQF: Status Quo Function (Arma 3)",
                require: "clike",
                owner: "RunDevelopment"
            },
            sql: {
                title: "SQL",
                owner: "multipetros"
            },
            squirrel: {
                title: "Squirrel",
                require: "clike",
                owner: "RunDevelopment"
            },
            stan: {
                title: "Stan",
                owner: "RunDevelopment"
            },
            stata: {
                title: "Stata Ado",
                require: [
                    "mata",
                    "java",
                    "python"
                ],
                owner: "RunDevelopment"
            },
            iecst: {
                title: "Structured Text (IEC 61131-3)",
                owner: "serhioromano"
            },
            stylus: {
                title: "Stylus",
                owner: "vkbansal"
            },
            supercollider: {
                title: "SuperCollider",
                alias: "sclang",
                owner: "RunDevelopment"
            },
            swift: {
                title: "Swift",
                owner: "chrischares"
            },
            systemd: {
                title: "Systemd configuration file",
                owner: "RunDevelopment"
            },
            "t4-templating": {
                title: "T4 templating",
                owner: "RunDevelopment"
            },
            "t4-cs": {
                title: "T4 Text Templates (C#)",
                require: [
                    "t4-templating",
                    "csharp"
                ],
                alias: "t4",
                owner: "RunDevelopment"
            },
            "t4-vb": {
                title: "T4 Text Templates (VB)",
                require: [
                    "t4-templating",
                    "vbnet"
                ],
                owner: "RunDevelopment"
            },
            tap: {
                title: "TAP",
                owner: "isaacs",
                require: "yaml"
            },
            tcl: {
                title: "Tcl",
                owner: "PeterChaplin"
            },
            tt2: {
                title: "Template Toolkit 2",
                require: [
                    "clike",
                    "markup-templating"
                ],
                owner: "gflohr"
            },
            textile: {
                title: "Textile",
                require: "markup",
                optional: "css",
                owner: "Golmote"
            },
            toml: {
                title: "TOML",
                owner: "RunDevelopment"
            },
            tremor: {
                title: "Tremor",
                alias: [
                    "trickle",
                    "troy"
                ],
                owner: "darach",
                aliasTitles: {
                    trickle: "trickle",
                    troy: "troy"
                }
            },
            turtle: {
                title: "Turtle",
                alias: "trig",
                aliasTitles: {
                    trig: "TriG"
                },
                owner: "jakubklimek"
            },
            twig: {
                title: "Twig",
                require: "markup-templating",
                owner: "brandonkelly"
            },
            typescript: {
                title: "TypeScript",
                require: "javascript",
                optional: "js-templates",
                alias: "ts",
                owner: "vkbansal"
            },
            typoscript: {
                title: "TypoScript",
                alias: "tsconfig",
                aliasTitles: {
                    tsconfig: "TSConfig"
                },
                owner: "dkern"
            },
            unrealscript: {
                title: "UnrealScript",
                alias: [
                    "uscript",
                    "uc"
                ],
                owner: "RunDevelopment"
            },
            uorazor: {
                title: "UO Razor Script",
                owner: "jaseowns"
            },
            uri: {
                title: "URI",
                alias: "url",
                aliasTitles: {
                    url: "URL"
                },
                owner: "RunDevelopment"
            },
            v: {
                title: "V",
                require: "clike",
                owner: "taggon"
            },
            vala: {
                title: "Vala",
                require: "clike",
                optional: "regex",
                owner: "TemplarVolk"
            },
            vbnet: {
                title: "VB.Net",
                require: "basic",
                owner: "Bigsby"
            },
            velocity: {
                title: "Velocity",
                require: "markup",
                owner: "Golmote"
            },
            verilog: {
                title: "Verilog",
                owner: "a-rey"
            },
            vhdl: {
                title: "VHDL",
                owner: "a-rey"
            },
            vim: {
                title: "vim",
                owner: "westonganger"
            },
            "visual-basic": {
                title: "Visual Basic",
                alias: [
                    "vb",
                    "vba"
                ],
                aliasTitles: {
                    vba: "VBA"
                },
                owner: "Golmote"
            },
            warpscript: {
                title: "WarpScript",
                owner: "RunDevelopment"
            },
            wasm: {
                title: "WebAssembly",
                owner: "Golmote"
            },
            "web-idl": {
                title: "Web IDL",
                alias: "webidl",
                owner: "RunDevelopment"
            },
            wgsl: {
                title: "WGSL",
                owner: "Dr4gonthree"
            },
            wiki: {
                title: "Wiki markup",
                require: "markup",
                owner: "Golmote"
            },
            wolfram: {
                title: "Wolfram language",
                alias: [
                    "mathematica",
                    "nb",
                    "wl"
                ],
                aliasTitles: {
                    mathematica: "Mathematica",
                    nb: "Mathematica Notebook"
                },
                owner: "msollami"
            },
            wren: {
                title: "Wren",
                owner: "clsource"
            },
            xeora: {
                title: "Xeora",
                require: "markup",
                alias: "xeoracube",
                aliasTitles: {
                    xeoracube: "XeoraCube"
                },
                owner: "freakmaxi"
            },
            "xml-doc": {
                title: "XML doc (.net)",
                require: "markup",
                modify: [
                    "csharp",
                    "fsharp",
                    "vbnet"
                ],
                owner: "RunDevelopment"
            },
            xojo: {
                title: "Xojo (REALbasic)",
                owner: "Golmote"
            },
            xquery: {
                title: "XQuery",
                require: "markup",
                owner: "Golmote"
            },
            yaml: {
                title: "YAML",
                alias: "yml",
                owner: "hason"
            },
            yang: {
                title: "YANG",
                owner: "RunDevelopment"
            },
            zig: {
                title: "Zig",
                owner: "RunDevelopment"
            }
        },
        plugins: {
            meta: {
                path: "plugins/{id}/prism-{id}",
                link: "plugins/{id}/"
            },
            "line-highlight": {
                title: "Line Highlight",
                description: "Highlights specific lines and/or line ranges."
            },
            "line-numbers": {
                title: "Line Numbers",
                description: "Line number at the beginning of code lines.",
                owner: "kuba-kubula"
            },
            "show-invisibles": {
                title: "Show Invisibles",
                description: "Show hidden characters such as tabs and line breaks.",
                optional: [
                    "autolinker",
                    "data-uri-highlight"
                ]
            },
            autolinker: {
                title: "Autolinker",
                description: "Converts URLs and emails in code to clickable links. Parses Markdown links in comments."
            },
            wpd: {
                title: "WebPlatform Docs",
                description: 'Makes tokens link to <a href="https://webplatform.github.io/docs/">WebPlatform.org documentation</a>. The links open in a new tab.'
            },
            "custom-class": {
                title: "Custom Class",
                description: "This plugin allows you to prefix Prism's default classes (<code>.comment</code> can become <code>.namespace--comment</code>) or replace them with your defined ones (like <code>.editor__comment</code>). You can even add new classes.",
                owner: "dvkndn",
                noCSS: !0
            },
            "file-highlight": {
                title: "File Highlight",
                description: "Fetch external files and highlight them with Prism. Used on the Prism website itself.",
                noCSS: !0
            },
            "show-language": {
                title: "Show Language",
                description: "Display the highlighted language in code blocks (inline code does not show the label).",
                owner: "nauzilus",
                noCSS: !0,
                require: "toolbar"
            },
            "jsonp-highlight": {
                title: "JSONP Highlight",
                description: "Fetch content with JSONP and highlight some interesting content (e.g. GitHub/Gists or Bitbucket API).",
                noCSS: !0,
                owner: "nauzilus"
            },
            "highlight-keywords": {
                title: "Highlight Keywords",
                description: "Adds special CSS classes for each keyword for fine-grained highlighting.",
                owner: "vkbansal",
                noCSS: !0
            },
            "remove-initial-line-feed": {
                title: "Remove initial line feed",
                description: "Removes the initial line feed in code blocks.",
                owner: "Golmote",
                noCSS: !0
            },
            "inline-color": {
                title: "Inline color",
                description: "Adds a small inline preview for colors in style sheets.",
                require: "css-extras",
                owner: "RunDevelopment"
            },
            previewers: {
                title: "Previewers",
                description: "Previewers for angles, colors, gradients, easing and time.",
                require: "css-extras",
                owner: "Golmote"
            },
            autoloader: {
                title: "Autoloader",
                description: "Automatically loads the needed languages to highlight the code blocks.",
                owner: "Golmote",
                noCSS: !0
            },
            "keep-markup": {
                title: "Keep Markup",
                description: "Prevents custom markup from being dropped out during highlighting.",
                owner: "Golmote",
                optional: "normalize-whitespace",
                noCSS: !0
            },
            "command-line": {
                title: "Command Line",
                description: "Display a command line with a prompt and, optionally, the output/response from the commands.",
                owner: "chriswells0"
            },
            "unescaped-markup": {
                title: "Unescaped Markup",
                description: "Write markup without having to escape anything."
            },
            "normalize-whitespace": {
                title: "Normalize Whitespace",
                description: "Supports multiple operations to normalize whitespace in code blocks.",
                owner: "zeitgeist87",
                optional: "unescaped-markup",
                noCSS: !0
            },
            "data-uri-highlight": {
                title: "Data-URI Highlight",
                description: "Highlights data-URI contents.",
                owner: "Golmote",
                noCSS: !0
            },
            toolbar: {
                title: "Toolbar",
                description: "Attach a toolbar for plugins to easily register buttons on the top of a code block.",
                owner: "mAAdhaTTah"
            },
            "copy-to-clipboard": {
                title: "Copy to Clipboard Button",
                description: "Add a button that copies the code block to the clipboard when clicked.",
                owner: "mAAdhaTTah",
                require: "toolbar",
                noCSS: !0
            },
            "download-button": {
                title: "Download Button",
                description: "A button in the toolbar of a code block adding a convenient way to download a code file.",
                owner: "Golmote",
                require: "toolbar",
                noCSS: !0
            },
            "match-braces": {
                title: "Match braces",
                description: "Highlights matching braces.",
                owner: "RunDevelopment"
            },
            "diff-highlight": {
                title: "Diff Highlight",
                description: "Highlights the code inside diff blocks.",
                owner: "RunDevelopment",
                require: "diff"
            },
            "filter-highlight-all": {
                title: "Filter highlightAll",
                description: "Filters the elements the <code>highlightAll</code> and <code>highlightAllUnder</code> methods actually highlight.",
                owner: "RunDevelopment",
                noCSS: !0
            },
            treeview: {
                title: "Treeview",
                description: "A language with special styles to highlight file system tree structures.",
                owner: "Golmote"
            }
        }
    };
    (typeof Le === "undefined" ? "undefined" : _type_of(Le)) < "u" && Le.exports && (Le.exports = Gn);
});
var ur = le(function(di, Je) {
    var Un = function() {
        var e = function e() {};
        function a(A, y) {
            Array.isArray(A) ? A.forEach(y) : A != null && y(A, 0);
        }
        function r(A) {
            for(var y = {}, _ = 0, q = A.length; _ < q; _++)y[A[_]] = !0;
            return y;
        }
        function d(A) {
            var y = {};
            for(var _ in A){
                var q = A[_];
                for(var F in q)if (F != "meta") {
                    var R = q[F];
                    y[F] = typeof R == "string" ? {
                        title: R
                    } : R;
                }
            }
            return y;
        }
        function t(A) {
            var y = {}, _ = [];
            function q(F, R) {
                if (!(F in y)) {
                    R.push(F);
                    var w = R.indexOf(F);
                    if (w < R.length - 1) throw new Error("Circular dependency: " + R.slice(w).join(" -> "));
                    var b = {}, k = A[F];
                    if (k) {
                        var C = function C(u) {
                            if (!(u in A)) throw new Error(F + " depends on an unknown component " + u);
                            if (!(u in b)) {
                                q(u, R), b[u] = !0;
                                for(var i in y[u])b[i] = !0;
                            }
                        };
                        a(k.require, C), a(k.optional, C), a(k.modify, C);
                    }
                    y[F] = b, R.pop();
                }
            }
            return function(F) {
                var R = y[F];
                return R || (q(F, _), R = y[F]), R;
            };
        }
        function p(A) {
            var y;
            return function(_) {
                if (_ in A) return _;
                if (!y) {
                    y = {};
                    for(var q in A){
                        var F = A[q];
                        a(F && F.alias, function(R) {
                            if (R in y) throw new Error(R + " cannot be alias for both " + q + " and " + y[R]);
                            if (R in A) throw new Error(R + " cannot be alias of " + q + " because it is a component.");
                            y[R] = q;
                        });
                    }
                }
                return y[_] || _;
            };
        }
        function c(A, y, _, q) {
            var F = q ? q.series : void 0, R = q ? q.parallel : e, w = {}, b = {};
            function k(n) {
                if (n in w) return w[n];
                b[n] = !0;
                var o = [];
                for(var f in A(n))f in y && o.push(f);
                var h;
                if (o.length === 0) h = _(n);
                else {
                    var s = R(o.map(function(g) {
                        var B = k(g);
                        return delete b[g], B;
                    }));
                    F ? h = F(s, function() {
                        return _(n);
                    }) : _(n);
                }
                return w[n] = h;
            }
            for(var C in y)k(C);
            var u = [];
            for(var i in b)u.push(w[i]);
            return R(u);
        }
        function m(A) {
            for(var y in A)return !0;
            return !1;
        }
        function D(A, y, _) {
            var q = d(A), F = p(q);
            y = y.map(F), _ = (_ || []).map(F);
            var R = r(y), w = r(_);
            y.forEach(b);
            function b(g) {
                var B = q[g];
                a(B && B.require, function(S) {
                    S in w || (R[S] = !0, b(S));
                });
            }
            for(var k = t(q), C = R, u; m(C);){
                u = {};
                for(var i in C){
                    var n = q[i];
                    a(n && n.modify, function(g) {
                        g in w && (u[g] = !0);
                    });
                }
                for(var o in w)if (!(o in R)) {
                    for(var f in k(o))if (f in R) {
                        u[o] = !0;
                        break;
                    }
                }
                C = u;
                for(var h in C)R[h] = !0;
            }
            var s = {
                getIds: function getIds() {
                    var g = [];
                    return s.load(function(B) {
                        g.push(B);
                    }), g;
                },
                load: function load(g, B) {
                    return c(k, R, g, B);
                }
            };
            return s;
        }
        return D;
    }();
    (typeof Je === "undefined" ? "undefined" : _type_of(Je)) < "u" && (Je.exports = Un);
});
var nr = le(function(li, ar) {
    var Ze = er(), Vn = ur(), rr = new Set;
    function Qe(e) {
        e === void 0 ? e = Object.keys(Ze.languages).filter(function(r) {
            return r != "meta";
        }) : Array.isArray(e) || (e = [
            e
        ]);
        var a = [].concat(rr, Object.keys(Prism.languages));
        Vn(Ze, e, a).load(function(r) {
            if (!(r in Ze.languages)) {
                Qe.silent || console.warn("Language does not exist: " + r);
                return;
            }
            var d = "./prism-" + r;
            delete _e.cache[_e.resolve(d)], delete Prism.languages[r], _e(d), rr.add(r);
        });
    }
    Qe.silent = !1;
    ar.exports = Qe;
});
var ir = le(function(si, Te) {
    var $n = (typeof window === "undefined" ? "undefined" : _type_of(window)) < "u" ? window : (typeof WorkerGlobalScope === "undefined" ? "undefined" : _type_of(WorkerGlobalScope)) < "u" && _instanceof(self, WorkerGlobalScope) ? self : {};
    var N = function(e) {
        var a = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, r = 0, d = {}, t = {
            manual: e.Prism && e.Prism.manual,
            disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
            util: {
                encode: function w(b) {
                    return _instanceof(b, p) ? new p(b.type, w(b.content), b.alias) : Array.isArray(b) ? b.map(w) : b.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
                },
                type: function type(w) {
                    return Object.prototype.toString.call(w).slice(8, -1);
                },
                objId: function objId(w) {
                    return w.__id || Object.defineProperty(w, "__id", {
                        value: ++r
                    }), w.__id;
                },
                clone: function w(b, k) {
                    k = k || {};
                    var C, u;
                    switch(t.util.type(b)){
                        case "Object":
                            if (u = t.util.objId(b), k[u]) return k[u];
                            C = {}, k[u] = C;
                            for(var i in b)b.hasOwnProperty(i) && (C[i] = w(b[i], k));
                            return C;
                        case "Array":
                            return u = t.util.objId(b), k[u] ? k[u] : (C = [], k[u] = C, b.forEach(function(n, o) {
                                C[o] = w(n, k);
                            }), C);
                        default:
                            return b;
                    }
                },
                getLanguage: function getLanguage(w) {
                    for(; w;){
                        var b = a.exec(w.className);
                        if (b) return b[1].toLowerCase();
                        w = w.parentElement;
                    }
                    return "none";
                },
                setLanguage: function setLanguage(w, b) {
                    w.className = w.className.replace(RegExp(a, "gi"), ""), w.classList.add("language-" + b);
                },
                currentScript: function currentScript() {
                    if ((typeof document === "undefined" ? "undefined" : _type_of(document)) > "u") return null;
                    if ("currentScript" in document && 1 < 2) return document.currentScript;
                    try {
                        throw new Error;
                    } catch (C) {
                        var w = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(C.stack) || [])[1];
                        if (w) {
                            var b = document.getElementsByTagName("script");
                            for(var k in b)if (b[k].src == w) return b[k];
                        }
                        return null;
                    }
                },
                isActive: function isActive(w, b, k) {
                    for(var C = "no-" + b; w;){
                        var u = w.classList;
                        if (u.contains(b)) return !0;
                        if (u.contains(C)) return !1;
                        w = w.parentElement;
                    }
                    return !!k;
                }
            },
            languages: {
                plain: d,
                plaintext: d,
                text: d,
                txt: d,
                extend: function extend(w, b) {
                    var k = t.util.clone(t.languages[w]);
                    for(var C in b)k[C] = b[C];
                    return k;
                },
                insertBefore: function insertBefore(w, b, k, C) {
                    C = C || t.languages;
                    var u = C[w], i = {};
                    for(var n in u)if (u.hasOwnProperty(n)) {
                        if (n == b) for(var o in k)k.hasOwnProperty(o) && (i[o] = k[o]);
                        k.hasOwnProperty(n) || (i[n] = u[n]);
                    }
                    var f = C[w];
                    return C[w] = i, t.languages.DFS(t.languages, function(h, s) {
                        s === f && h != w && (this[h] = i);
                    }), i;
                },
                DFS: function w(b, k, C, u) {
                    u = u || {};
                    var i = t.util.objId;
                    for(var n in b)if (b.hasOwnProperty(n)) {
                        k.call(b, n, b[n], C || n);
                        var o = b[n], f = t.util.type(o);
                        f === "Object" && !u[i(o)] ? (u[i(o)] = !0, w(o, k, null, u)) : f === "Array" && !u[i(o)] && (u[i(o)] = !0, w(o, k, n, u));
                    }
                }
            },
            plugins: {},
            highlightAll: function highlightAll(w, b) {
                t.highlightAllUnder(document, w, b);
            },
            highlightAllUnder: function highlightAllUnder(w, b, k) {
                var C = {
                    callback: k,
                    container: w,
                    selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                };
                t.hooks.run("before-highlightall", C), C.elements = Array.prototype.slice.apply(C.container.querySelectorAll(C.selector)), t.hooks.run("before-all-elements-highlight", C);
                for(var u = 0, i; i = C.elements[u++];)t.highlightElement(i, b === !0, C.callback);
            },
            highlightElement: function highlightElement(w, b, k) {
                var C = t.util.getLanguage(w), u = t.languages[C];
                t.util.setLanguage(w, C);
                var i = w.parentElement;
                i && i.nodeName.toLowerCase() === "pre" && t.util.setLanguage(i, C);
                var n = w.textContent, o = {
                    element: w,
                    language: C,
                    grammar: u,
                    code: n
                };
                function f(s) {
                    o.highlightedCode = s, t.hooks.run("before-insert", o), o.element.innerHTML = o.highlightedCode, t.hooks.run("after-highlight", o), t.hooks.run("complete", o), k && k.call(o.element);
                }
                if (t.hooks.run("before-sanity-check", o), i = o.element.parentElement, i && i.nodeName.toLowerCase() === "pre" && !i.hasAttribute("tabindex") && i.setAttribute("tabindex", "0"), !o.code) {
                    t.hooks.run("complete", o), k && k.call(o.element);
                    return;
                }
                if (t.hooks.run("before-highlight", o), !o.grammar) {
                    f(t.util.encode(o.code));
                    return;
                }
                if (b && e.Worker) {
                    var h = new Worker(t.filename);
                    h.onmessage = function(s) {
                        f(s.data);
                    }, h.postMessage(JSON.stringify({
                        language: o.language,
                        code: o.code,
                        immediateClose: !0
                    }));
                } else f(t.highlight(o.code, o.grammar, o.language));
            },
            highlight: function highlight(w, b, k) {
                var C = {
                    code: w,
                    grammar: b,
                    language: k
                };
                if (t.hooks.run("before-tokenize", C), !C.grammar) throw new Error('The language "' + C.language + '" has no grammar.');
                return C.tokens = t.tokenize(C.code, C.grammar), t.hooks.run("after-tokenize", C), p.stringify(t.util.encode(C.tokens), C.language);
            },
            tokenize: function tokenize(w, b) {
                var k = b.rest;
                if (k) {
                    for(var C in k)b[C] = k[C];
                    delete b.rest;
                }
                var u = new D;
                return A(u, u.head, w), m(w, u, b, u.head, 0), _(u);
            },
            hooks: {
                all: {},
                add: function add(w, b) {
                    var k = t.hooks.all;
                    k[w] = k[w] || [], k[w].push(b);
                },
                run: function run(w, b) {
                    var k = t.hooks.all[w];
                    if (!(!k || !k.length)) for(var C = 0, u; u = k[C++];)u(b);
                }
            },
            Token: p
        };
        e.Prism = t;
        function p(w, b, k, C) {
            this.type = w, this.content = b, this.alias = k, this.length = (C || "").length | 0;
        }
        p.stringify = function w(b, k) {
            if (typeof b == "string") return b;
            if (Array.isArray(b)) {
                var C = "";
                return b.forEach(function(f) {
                    C += w(f, k);
                }), C;
            }
            var u = {
                type: b.type,
                content: w(b.content, k),
                tag: "span",
                classes: [
                    "token",
                    b.type
                ],
                attributes: {},
                language: k
            }, i = b.alias;
            i && (Array.isArray(i) ? Array.prototype.push.apply(u.classes, i) : u.classes.push(i)), t.hooks.run("wrap", u);
            var n = "";
            for(var o in u.attributes)n += " " + o + '="' + (u.attributes[o] || "").replace(/"/g, "&quot;") + '"';
            return "<" + u.tag + ' class="' + u.classes.join(" ") + '"' + n + ">" + u.content + "</" + u.tag + ">";
        };
        function c(w, b, k, C) {
            w.lastIndex = b;
            var u = w.exec(k);
            if (u && C && u[1]) {
                var i = u[1].length;
                u.index += i, u[0] = u[0].slice(i);
            }
            return u;
        }
        function m(w, b, k, C, u, i) {
            for(var n in k)if (!(!k.hasOwnProperty(n) || !k[n])) {
                var o = k[n];
                o = Array.isArray(o) ? o : [
                    o
                ];
                for(var f = 0; f < o.length; ++f){
                    if (i && i.cause == n + "," + f) return;
                    var h = o[f], s = h.inside, g = !!h.lookbehind, B = !!h.greedy, S = h.alias;
                    if (B && !h.pattern.global) {
                        var x = h.pattern.toString().match(/[imsuy]*$/)[0];
                        h.pattern = RegExp(h.pattern.source, x + "g");
                    }
                    for(var L = h.pattern || h, l = C.next, E = u; l !== b.tail && !(i && E >= i.reach); E += l.value.length, l = l.next){
                        var v = l.value;
                        if (b.length > w.length) return;
                        if (!_instanceof(v, p)) {
                            var T = 1, j;
                            if (B) {
                                if (j = c(L, E, w, g), !j || j.index >= w.length) break;
                                var U = j.index, P = j.index + j[0].length, z = E;
                                for(z += l.value.length; U >= z;)l = l.next, z += l.value.length;
                                if (z -= l.value.length, E = z, _instanceof(l.value, p)) continue;
                                for(var H = l; H !== b.tail && (z < P || typeof H.value == "string"); H = H.next)T++, z += H.value.length;
                                T--, v = w.slice(E, z), j.index -= E;
                            } else if (j = c(L, 0, v, g), !j) continue;
                            var U = j.index, O = j[0], I = v.slice(0, U), G = v.slice(U + O.length), V = E + v.length;
                            i && V > i.reach && (i.reach = V);
                            var Q = l.prev;
                            I && (Q = A(b, Q, I), E += I.length), y(b, Q, T);
                            var ee = new p(n, s ? t.tokenize(O, s) : O, S, O);
                            if (l = A(b, Q, ee), G && A(b, l, G), T > 1) {
                                var X = {
                                    cause: n + "," + f,
                                    reach: V
                                };
                                m(w, b, k, l.prev, E, X), i && X.reach > i.reach && (i.reach = X.reach);
                            }
                        }
                    }
                }
            }
        }
        function D() {
            var w = {
                value: null,
                prev: null,
                next: null
            }, b = {
                value: null,
                prev: w,
                next: null
            };
            w.next = b, this.head = w, this.tail = b, this.length = 0;
        }
        function A(w, b, k) {
            var C = b.next, u = {
                value: k,
                prev: b,
                next: C
            };
            return b.next = u, C.prev = u, w.length++, u;
        }
        function y(w, b, k) {
            for(var C = b.next, u = 0; u < k && C !== w.tail; u++)C = C.next;
            b.next = C, C.prev = b, w.length -= u;
        }
        function _(w) {
            for(var b = [], k = w.head.next; k !== w.tail;)b.push(k.value), k = k.next;
            return b;
        }
        if (!e.document) return e.addEventListener && (t.disableWorkerMessageHandler || e.addEventListener("message", function(w) {
            var b = JSON.parse(w.data), k = b.language, C = b.code, u = b.immediateClose;
            e.postMessage(t.highlight(C, t.languages[k], k)), u && e.close();
        }, !1)), t;
        var q = t.util.currentScript();
        q && (t.filename = q.src, q.hasAttribute("data-manual") && (t.manual = !0));
        function F() {
            t.manual || t.highlightAll();
        }
        if (!t.manual) {
            var R = document.readyState;
            R === "loading" || R === "interactive" && q && q.defer ? document.addEventListener("DOMContentLoaded", F) : window.requestAnimationFrame ? window.requestAnimationFrame(F) : window.setTimeout(F, 16);
        }
        return t;
    }($n);
    (typeof Te === "undefined" ? "undefined" : _type_of(Te)) < "u" && Te.exports && (Te.exports = N);
    (typeof global === "undefined" ? "undefined" : _type_of(global)) < "u" && (global.Prism = N);
    N.languages.markup = {
        comment: {
            pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
            greedy: !0
        },
        prolog: {
            pattern: /<\?[\s\S]+?\?>/,
            greedy: !0
        },
        doctype: {
            pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
            greedy: !0,
            inside: {
                "internal-subset": {
                    pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                    lookbehind: !0,
                    greedy: !0,
                    inside: null
                },
                string: {
                    pattern: /"[^"]*"|'[^']*'/,
                    greedy: !0
                },
                punctuation: /^<!|>$|[[\]]/,
                "doctype-tag": /^DOCTYPE/i,
                name: /[^\s<>'"]+/
            }
        },
        cdata: {
            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
            greedy: !0
        },
        tag: {
            pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
            greedy: !0,
            inside: {
                tag: {
                    pattern: /^<\/?[^\s>\/]+/,
                    inside: {
                        punctuation: /^<\/?/,
                        namespace: /^[^\s>\/:]+:/
                    }
                },
                "special-attr": [],
                "attr-value": {
                    pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                    inside: {
                        punctuation: [
                            {
                                pattern: /^=/,
                                alias: "attr-equals"
                            },
                            {
                                pattern: /^(\s*)["']|["']$/,
                                lookbehind: !0
                            }
                        ]
                    }
                },
                punctuation: /\/?>/,
                "attr-name": {
                    pattern: /[^\s>\/]+/,
                    inside: {
                        namespace: /^[^\s>\/:]+:/
                    }
                }
            }
        },
        entity: [
            {
                pattern: /&[\da-z]{1,8};/i,
                alias: "named-entity"
            },
            /&#x?[\da-f]{1,8};/i
        ]
    };
    N.languages.markup.tag.inside["attr-value"].inside.entity = N.languages.markup.entity;
    N.languages.markup.doctype.inside["internal-subset"].inside = N.languages.markup;
    N.hooks.add("wrap", function(e) {
        e.type === "entity" && (e.attributes.title = e.content.replace(/&amp;/, "&"));
    });
    Object.defineProperty(N.languages.markup.tag, "addInlined", {
        value: function value(a, r) {
            var d = {};
            d["language-" + r] = {
                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                lookbehind: !0,
                inside: N.languages[r]
            }, d.cdata = /^<!\[CDATA\[|\]\]>$/i;
            var t = {
                "included-cdata": {
                    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                    inside: d
                }
            };
            t["language-" + r] = {
                pattern: /[\s\S]+/,
                inside: N.languages[r]
            };
            var p = {};
            p[a] = {
                pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
                    return a;
                }), "i"),
                lookbehind: !0,
                greedy: !0,
                inside: t
            }, N.languages.insertBefore("markup", "cdata", p);
        }
    });
    Object.defineProperty(N.languages.markup.tag, "addAttribute", {
        value: function value(e, a) {
            N.languages.markup.tag.inside["special-attr"].push({
                pattern: RegExp(/(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
                lookbehind: !0,
                inside: {
                    "attr-name": /^[^\s=]+/,
                    "attr-value": {
                        pattern: /=[\s\S]+/,
                        inside: {
                            value: {
                                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                                lookbehind: !0,
                                alias: [
                                    a,
                                    "language-" + a
                                ],
                                inside: N.languages[a]
                            },
                            punctuation: [
                                {
                                    pattern: /^=/,
                                    alias: "attr-equals"
                                },
                                /"|'/
                            ]
                        }
                    }
                }
            });
        }
    });
    N.languages.html = N.languages.markup;
    N.languages.mathml = N.languages.markup;
    N.languages.svg = N.languages.markup;
    N.languages.xml = N.languages.extend("markup", {});
    N.languages.ssml = N.languages.xml;
    N.languages.atom = N.languages.xml;
    N.languages.rss = N.languages.xml;
    (function(e) {
        var a = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
        e.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
                pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + a.source + ")*?" + /(?:;|(?=\s*\{))/.source),
                inside: {
                    rule: /^@[\w-]+/,
                    "selector-function-argument": {
                        pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                        lookbehind: !0,
                        alias: "selector"
                    },
                    keyword: {
                        pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                        lookbehind: !0
                    }
                }
            },
            url: {
                pattern: RegExp("\\burl\\((?:" + a.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
                greedy: !0,
                inside: {
                    function: /^url/i,
                    punctuation: /^\(|\)$/,
                    string: {
                        pattern: RegExp("^" + a.source + "$"),
                        alias: "url"
                    }
                }
            },
            selector: {
                pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + a.source + ")*(?=\\s*\\{)"),
                lookbehind: !0
            },
            string: {
                pattern: a,
                greedy: !0
            },
            property: {
                pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
                lookbehind: !0
            },
            important: /!important\b/i,
            function: {
                pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
                lookbehind: !0
            },
            punctuation: /[(){};:,]/
        }, e.languages.css.atrule.inside.rest = e.languages.css;
        var r = e.languages.markup;
        r && (r.tag.addInlined("style", "css"), r.tag.addAttribute("style", "css"));
    })(N);
    N.languages.clike = {
        comment: [
            {
                pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                lookbehind: !0,
                greedy: !0
            },
            {
                pattern: /(^|[^\\:])\/\/.*/,
                lookbehind: !0,
                greedy: !0
            }
        ],
        string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0
        },
        "class-name": {
            pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: !0,
            inside: {
                punctuation: /[.\\]/
            }
        },
        keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
        boolean: /\b(?:false|true)\b/,
        function: /\b\w+(?=\()/,
        number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
        operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
        punctuation: /[{}[\];(),.:]/
    };
    N.languages.javascript = N.languages.extend("clike", {
        "class-name": [
            N.languages.clike["class-name"],
            {
                pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
                lookbehind: !0
            }
        ],
        keyword: [
            {
                pattern: /((?:^|\})\s*)catch\b/,
                lookbehind: !0
            },
            {
                pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                lookbehind: !0
            }
        ],
        function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
        number: {
            pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source),
            lookbehind: !0
        },
        operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
    });
    N.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
    N.languages.insertBefore("javascript", "keyword", {
        regex: {
            pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
            lookbehind: !0,
            greedy: !0,
            inside: {
                "regex-source": {
                    pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                    lookbehind: !0,
                    alias: "language-regex",
                    inside: N.languages.regex
                },
                "regex-delimiter": /^\/|\/$/,
                "regex-flags": /^[a-z]+$/
            }
        },
        "function-variable": {
            pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
            alias: "function"
        },
        parameter: [
            {
                pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                lookbehind: !0,
                inside: N.languages.javascript
            },
            {
                pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                lookbehind: !0,
                inside: N.languages.javascript
            },
            {
                pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                lookbehind: !0,
                inside: N.languages.javascript
            },
            {
                pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                lookbehind: !0,
                inside: N.languages.javascript
            }
        ],
        constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    });
    N.languages.insertBefore("javascript", "string", {
        hashbang: {
            pattern: /^#!.*/,
            greedy: !0,
            alias: "comment"
        },
        "template-string": {
            pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
            greedy: !0,
            inside: {
                "template-punctuation": {
                    pattern: /^`|`$/,
                    alias: "string"
                },
                interpolation: {
                    pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                    lookbehind: !0,
                    inside: {
                        "interpolation-punctuation": {
                            pattern: /^\$\{|\}$/,
                            alias: "punctuation"
                        },
                        rest: N.languages.javascript
                    }
                },
                string: /[\s\S]+/
            }
        },
        "string-property": {
            pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
            lookbehind: !0,
            greedy: !0,
            alias: "property"
        }
    });
    N.languages.insertBefore("javascript", "operator", {
        "literal-property": {
            pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
            lookbehind: !0,
            alias: "property"
        }
    });
    N.languages.markup && (N.languages.markup.tag.addInlined("script", "javascript"), N.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript"));
    N.languages.js = N.languages.javascript;
    (function() {
        if ((typeof N === "undefined" ? "undefined" : _type_of(N)) > "u" || (typeof document === "undefined" ? "undefined" : _type_of(document)) > "u") return;
        Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
        var e = "Loading…", a = function a(q, F) {
            return "✖ Error " + q + " while fetching file: " + F;
        }, r = "✖ Error: File does not exist or is empty", d = {
            js: "javascript",
            py: "python",
            rb: "ruby",
            ps1: "powershell",
            psm1: "powershell",
            sh: "bash",
            bat: "batch",
            h: "c",
            tex: "latex"
        }, t = "data-src-status", p = "loading", c = "loaded", m = "failed", D = "pre[data-src]:not([" + t + '="' + c + '"]):not([' + t + '="' + p + '"])';
        function A(q, F, R) {
            var w = new XMLHttpRequest;
            w.open("GET", q, !0), w.onreadystatechange = function() {
                w.readyState == 4 && (w.status < 400 && w.responseText ? F(w.responseText) : w.status >= 400 ? R(a(w.status, w.statusText)) : R(r));
            }, w.send(null);
        }
        function y(q) {
            var F = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(q || "");
            if (F) {
                var R = Number(F[1]), w = F[2], b = F[3];
                return w ? b ? [
                    R,
                    Number(b)
                ] : [
                    R,
                    void 0
                ] : [
                    R,
                    R
                ];
            }
        }
        N.hooks.add("before-highlightall", function(q) {
            q.selector += ", " + D;
        }), N.hooks.add("before-sanity-check", function(q) {
            var F = q.element;
            if (F.matches(D)) {
                q.code = "", F.setAttribute(t, p);
                var R = F.appendChild(document.createElement("CODE"));
                R.textContent = e;
                var w = F.getAttribute("data-src"), b = q.language;
                if (b === "none") {
                    var k = (/\.(\w+)$/.exec(w) || [
                        ,
                        "none"
                    ])[1];
                    b = d[k] || k;
                }
                N.util.setLanguage(R, b), N.util.setLanguage(F, b);
                var C = N.plugins.autoloader;
                C && C.loadLanguages(b), A(w, function(u) {
                    F.setAttribute(t, c);
                    var i = y(F.getAttribute("data-range"));
                    if (i) {
                        var n = u.split(/\r\n?|\n/g), o = i[0], f = i[1] == null ? n.length : i[1];
                        o < 0 && (o += n.length), o = Math.max(0, Math.min(o - 1, n.length)), f < 0 && (f += n.length), f = Math.max(0, Math.min(f, n.length)), u = n.slice(o, f).join("\n"), F.hasAttribute("data-start") || F.setAttribute("data-start", String(o + 1));
                    }
                    R.textContent = u, N.highlightElement(R);
                }, function(u) {
                    F.setAttribute(t, m), R.textContent = u;
                });
            }
        }), N.plugins.fileHighlight = {
            highlight: function highlight(F) {
                for(var R = (F || document).querySelectorAll(D), w = 0, b; b = R[w++];)N.highlightElement(b);
            }
        };
        var _ = !1;
        N.fileHighlight = function() {
            _ || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), _ = !0), N.plugins.fileHighlight.highlight.apply(this, arguments);
        };
    })();
});
var tr = le(function(Re, ve) {
    (function(e) {
        var a = typeof Re == "object" && Re, r = typeof ve == "object" && ve && ve.exports == a && ve, d = typeof global == "object" && global;
        (d.global === d || d.window === d) && (e = d);
        var t = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, p = /[\x01-\x7F]/g, c = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g, m = /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g, D = {
            "\xad": "shy",
            "‌": "zwnj",
            "‍": "zwj",
            "‎": "lrm",
            "⁣": "ic",
            "⁢": "it",
            "⁡": "af",
            "‏": "rlm",
            "​": "ZeroWidthSpace",
            "⁠": "NoBreak",
            "̑": "DownBreve",
            "⃛": "tdot",
            "⃜": "DotDot",
            "	": "Tab",
            "\n": "NewLine",
            " ": "puncsp",
            " ": "MediumSpace",
            " ": "thinsp",
            " ": "hairsp",
            " ": "emsp13",
            " ": "ensp",
            " ": "emsp14",
            " ": "emsp",
            " ": "numsp",
            "\xa0": "nbsp",
            "  ": "ThickSpace",
            "‾": "oline",
            _: "lowbar",
            "‐": "dash",
            "–": "ndash",
            "—": "mdash",
            "―": "horbar",
            ",": "comma",
            ";": "semi",
            "⁏": "bsemi",
            ":": "colon",
            "⩴": "Colone",
            "!": "excl",
            "\xa1": "iexcl",
            "?": "quest",
            "\xbf": "iquest",
            ".": "period",
            "‥": "nldr",
            "…": "mldr",
            "\xb7": "middot",
            "'": "apos",
            "‘": "lsquo",
            "’": "rsquo",
            "‚": "sbquo",
            "‹": "lsaquo",
            "›": "rsaquo",
            '"': "quot",
            "“": "ldquo",
            "”": "rdquo",
            "„": "bdquo",
            "\xab": "laquo",
            "\xbb": "raquo",
            "(": "lpar",
            ")": "rpar",
            "[": "lsqb",
            "]": "rsqb",
            "{": "lcub",
            "}": "rcub",
            "⌈": "lceil",
            "⌉": "rceil",
            "⌊": "lfloor",
            "⌋": "rfloor",
            "⦅": "lopar",
            "⦆": "ropar",
            "⦋": "lbrke",
            "⦌": "rbrke",
            "⦍": "lbrkslu",
            "⦎": "rbrksld",
            "⦏": "lbrksld",
            "⦐": "rbrkslu",
            "⦑": "langd",
            "⦒": "rangd",
            "⦓": "lparlt",
            "⦔": "rpargt",
            "⦕": "gtlPar",
            "⦖": "ltrPar",
            "⟦": "lobrk",
            "⟧": "robrk",
            "⟨": "lang",
            "⟩": "rang",
            "⟪": "Lang",
            "⟫": "Rang",
            "⟬": "loang",
            "⟭": "roang",
            "❲": "lbbrk",
            "❳": "rbbrk",
            "‖": "Vert",
            "\xa7": "sect",
            "\xb6": "para",
            "@": "commat",
            "*": "ast",
            "/": "sol",
            undefined: null,
            "&": "amp",
            "#": "num",
            "%": "percnt",
            "‰": "permil",
            "‱": "pertenk",
            "†": "dagger",
            "‡": "Dagger",
            "•": "bull",
            "⁃": "hybull",
            "′": "prime",
            "″": "Prime",
            "‴": "tprime",
            "⁗": "qprime",
            "‵": "bprime",
            "⁁": "caret",
            "`": "grave",
            "\xb4": "acute",
            "˜": "tilde",
            "^": "Hat",
            "\xaf": "macr",
            "˘": "breve",
            "˙": "dot",
            "\xa8": "die",
            "˚": "ring",
            "˝": "dblac",
            "\xb8": "cedil",
            "˛": "ogon",
            "ˆ": "circ",
            "ˇ": "caron",
            "\xb0": "deg",
            "\xa9": "copy",
            "\xae": "reg",
            "℗": "copysr",
            "℘": "wp",
            "℞": "rx",
            "℧": "mho",
            "℩": "iiota",
            "←": "larr",
            "↚": "nlarr",
            "→": "rarr",
            "↛": "nrarr",
            "↑": "uarr",
            "↓": "darr",
            "↔": "harr",
            "↮": "nharr",
            "↕": "varr",
            "↖": "nwarr",
            "↗": "nearr",
            "↘": "searr",
            "↙": "swarr",
            "↝": "rarrw",
            "↝̸": "nrarrw",
            "↞": "Larr",
            "↟": "Uarr",
            "↠": "Rarr",
            "↡": "Darr",
            "↢": "larrtl",
            "↣": "rarrtl",
            "↤": "mapstoleft",
            "↥": "mapstoup",
            "↦": "map",
            "↧": "mapstodown",
            "↩": "larrhk",
            "↪": "rarrhk",
            "↫": "larrlp",
            "↬": "rarrlp",
            "↭": "harrw",
            "↰": "lsh",
            "↱": "rsh",
            "↲": "ldsh",
            "↳": "rdsh",
            "↵": "crarr",
            "↶": "cularr",
            "↷": "curarr",
            "↺": "olarr",
            "↻": "orarr",
            "↼": "lharu",
            "↽": "lhard",
            "↾": "uharr",
            "↿": "uharl",
            "⇀": "rharu",
            "⇁": "rhard",
            "⇂": "dharr",
            "⇃": "dharl",
            "⇄": "rlarr",
            "⇅": "udarr",
            "⇆": "lrarr",
            "⇇": "llarr",
            "⇈": "uuarr",
            "⇉": "rrarr",
            "⇊": "ddarr",
            "⇋": "lrhar",
            "⇌": "rlhar",
            "⇐": "lArr",
            "⇍": "nlArr",
            "⇑": "uArr",
            "⇒": "rArr",
            "⇏": "nrArr",
            "⇓": "dArr",
            "⇔": "iff",
            "⇎": "nhArr",
            "⇕": "vArr",
            "⇖": "nwArr",
            "⇗": "neArr",
            "⇘": "seArr",
            "⇙": "swArr",
            "⇚": "lAarr",
            "⇛": "rAarr",
            "⇝": "zigrarr",
            "⇤": "larrb",
            "⇥": "rarrb",
            "⇵": "duarr",
            "⇽": "loarr",
            "⇾": "roarr",
            "⇿": "hoarr",
            "∀": "forall",
            "∁": "comp",
            "∂": "part",
            "∂̸": "npart",
            "∃": "exist",
            "∄": "nexist",
            "∅": "empty",
            "∇": "Del",
            "∈": "in",
            "∉": "notin",
            "∋": "ni",
            "∌": "notni",
            "϶": "bepsi",
            "∏": "prod",
            "∐": "coprod",
            "∑": "sum",
            "+": "plus",
            "\xb1": "pm",
            "\xf7": "div",
            "\xd7": "times",
            "<": "lt",
            "≮": "nlt",
            "<⃒": "nvlt",
            "=": "equals",
            "≠": "ne",
            "=⃥": "bne",
            "⩵": "Equal",
            ">": "gt",
            "≯": "ngt",
            ">⃒": "nvgt",
            "\xac": "not",
            "|": "vert",
            "\xa6": "brvbar",
            "−": "minus",
            "∓": "mp",
            "∔": "plusdo",
            "⁄": "frasl",
            "∖": "setmn",
            "∗": "lowast",
            "∘": "compfn",
            "√": "Sqrt",
            "∝": "prop",
            "∞": "infin",
            "∟": "angrt",
            "∠": "ang",
            "∠⃒": "nang",
            "∡": "angmsd",
            "∢": "angsph",
            "∣": "mid",
            "∤": "nmid",
            "∥": "par",
            "∦": "npar",
            "∧": "and",
            "∨": "or",
            "∩": "cap",
            "∩︀": "caps",
            "∪": "cup",
            "∪︀": "cups",
            "∫": "int",
            "∬": "Int",
            "∭": "tint",
            "⨌": "qint",
            "∮": "oint",
            "∯": "Conint",
            "∰": "Cconint",
            "∱": "cwint",
            "∲": "cwconint",
            "∳": "awconint",
            "∴": "there4",
            "∵": "becaus",
            "∶": "ratio",
            "∷": "Colon",
            "∸": "minusd",
            "∺": "mDDot",
            "∻": "homtht",
            "∼": "sim",
            "≁": "nsim",
            "∼⃒": "nvsim",
            "∽": "bsim",
            "∽̱": "race",
            "∾": "ac",
            "∾̳": "acE",
            "∿": "acd",
            "≀": "wr",
            "≂": "esim",
            "≂̸": "nesim",
            "≃": "sime",
            "≄": "nsime",
            "≅": "cong",
            "≇": "ncong",
            "≆": "simne",
            "≈": "ap",
            "≉": "nap",
            "≊": "ape",
            "≋": "apid",
            "≋̸": "napid",
            "≌": "bcong",
            "≍": "CupCap",
            "≭": "NotCupCap",
            "≍⃒": "nvap",
            "≎": "bump",
            "≎̸": "nbump",
            "≏": "bumpe",
            "≏̸": "nbumpe",
            "≐": "doteq",
            "≐̸": "nedot",
            "≑": "eDot",
            "≒": "efDot",
            "≓": "erDot",
            "≔": "colone",
            "≕": "ecolon",
            "≖": "ecir",
            "≗": "cire",
            "≙": "wedgeq",
            "≚": "veeeq",
            "≜": "trie",
            "≟": "equest",
            "≡": "equiv",
            "≢": "nequiv",
            "≡⃥": "bnequiv",
            "≤": "le",
            "≰": "nle",
            "≤⃒": "nvle",
            "≥": "ge",
            "≱": "nge",
            "≥⃒": "nvge",
            "≦": "lE",
            "≦̸": "nlE",
            "≧": "gE",
            "≧̸": "ngE",
            "≨︀": "lvnE",
            "≨": "lnE",
            "≩": "gnE",
            "≩︀": "gvnE",
            "≪": "ll",
            "≪̸": "nLtv",
            "≪⃒": "nLt",
            "≫": "gg",
            "≫̸": "nGtv",
            "≫⃒": "nGt",
            "≬": "twixt",
            "≲": "lsim",
            "≴": "nlsim",
            "≳": "gsim",
            "≵": "ngsim",
            "≶": "lg",
            "≸": "ntlg",
            "≷": "gl",
            "≹": "ntgl",
            "≺": "pr",
            "⊀": "npr",
            "≻": "sc",
            "⊁": "nsc",
            "≼": "prcue",
            "⋠": "nprcue",
            "≽": "sccue",
            "⋡": "nsccue",
            "≾": "prsim",
            "≿": "scsim",
            "≿̸": "NotSucceedsTilde",
            "⊂": "sub",
            "⊄": "nsub",
            "⊂⃒": "vnsub",
            "⊃": "sup",
            "⊅": "nsup",
            "⊃⃒": "vnsup",
            "⊆": "sube",
            "⊈": "nsube",
            "⊇": "supe",
            "⊉": "nsupe",
            "⊊︀": "vsubne",
            "⊊": "subne",
            "⊋︀": "vsupne",
            "⊋": "supne",
            "⊍": "cupdot",
            "⊎": "uplus",
            "⊏": "sqsub",
            "⊏̸": "NotSquareSubset",
            "⊐": "sqsup",
            "⊐̸": "NotSquareSuperset",
            "⊑": "sqsube",
            "⋢": "nsqsube",
            "⊒": "sqsupe",
            "⋣": "nsqsupe",
            "⊓": "sqcap",
            "⊓︀": "sqcaps",
            "⊔": "sqcup",
            "⊔︀": "sqcups",
            "⊕": "oplus",
            "⊖": "ominus",
            "⊗": "otimes",
            "⊘": "osol",
            "⊙": "odot",
            "⊚": "ocir",
            "⊛": "oast",
            "⊝": "odash",
            "⊞": "plusb",
            "⊟": "minusb",
            "⊠": "timesb",
            "⊡": "sdotb",
            "⊢": "vdash",
            "⊬": "nvdash",
            "⊣": "dashv",
            "⊤": "top",
            "⊥": "bot",
            "⊧": "models",
            "⊨": "vDash",
            "⊭": "nvDash",
            "⊩": "Vdash",
            "⊮": "nVdash",
            "⊪": "Vvdash",
            "⊫": "VDash",
            "⊯": "nVDash",
            "⊰": "prurel",
            "⊲": "vltri",
            "⋪": "nltri",
            "⊳": "vrtri",
            "⋫": "nrtri",
            "⊴": "ltrie",
            "⋬": "nltrie",
            "⊴⃒": "nvltrie",
            "⊵": "rtrie",
            "⋭": "nrtrie",
            "⊵⃒": "nvrtrie",
            "⊶": "origof",
            "⊷": "imof",
            "⊸": "mumap",
            "⊹": "hercon",
            "⊺": "intcal",
            "⊻": "veebar",
            "⊽": "barvee",
            "⊾": "angrtvb",
            "⊿": "lrtri",
            "⋀": "Wedge",
            "⋁": "Vee",
            "⋂": "xcap",
            "⋃": "xcup",
            "⋄": "diam",
            "⋅": "sdot",
            "⋆": "Star",
            "⋇": "divonx",
            "⋈": "bowtie",
            "⋉": "ltimes",
            "⋊": "rtimes",
            "⋋": "lthree",
            "⋌": "rthree",
            "⋍": "bsime",
            "⋎": "cuvee",
            "⋏": "cuwed",
            "⋐": "Sub",
            "⋑": "Sup",
            "⋒": "Cap",
            "⋓": "Cup",
            "⋔": "fork",
            "⋕": "epar",
            "⋖": "ltdot",
            "⋗": "gtdot",
            "⋘": "Ll",
            "⋘̸": "nLl",
            "⋙": "Gg",
            "⋙̸": "nGg",
            "⋚︀": "lesg",
            "⋚": "leg",
            "⋛": "gel",
            "⋛︀": "gesl",
            "⋞": "cuepr",
            "⋟": "cuesc",
            "⋦": "lnsim",
            "⋧": "gnsim",
            "⋨": "prnsim",
            "⋩": "scnsim",
            "⋮": "vellip",
            "⋯": "ctdot",
            "⋰": "utdot",
            "⋱": "dtdot",
            "⋲": "disin",
            "⋳": "isinsv",
            "⋴": "isins",
            "⋵": "isindot",
            "⋵̸": "notindot",
            "⋶": "notinvc",
            "⋷": "notinvb",
            "⋹": "isinE",
            "⋹̸": "notinE",
            "⋺": "nisd",
            "⋻": "xnis",
            "⋼": "nis",
            "⋽": "notnivc",
            "⋾": "notnivb",
            "⌅": "barwed",
            "⌆": "Barwed",
            "⌌": "drcrop",
            "⌍": "dlcrop",
            "⌎": "urcrop",
            "⌏": "ulcrop",
            "⌐": "bnot",
            "⌒": "profline",
            "⌓": "profsurf",
            "⌕": "telrec",
            "⌖": "target",
            "⌜": "ulcorn",
            "⌝": "urcorn",
            "⌞": "dlcorn",
            "⌟": "drcorn",
            "⌢": "frown",
            "⌣": "smile",
            "⌭": "cylcty",
            "⌮": "profalar",
            "⌶": "topbot",
            "⌽": "ovbar",
            "⌿": "solbar",
            "⍼": "angzarr",
            "⎰": "lmoust",
            "⎱": "rmoust",
            "⎴": "tbrk",
            "⎵": "bbrk",
            "⎶": "bbrktbrk",
            "⏜": "OverParenthesis",
            "⏝": "UnderParenthesis",
            "⏞": "OverBrace",
            "⏟": "UnderBrace",
            "⏢": "trpezium",
            "⏧": "elinters",
            "␣": "blank",
            "─": "boxh",
            "│": "boxv",
            "┌": "boxdr",
            "┐": "boxdl",
            "└": "boxur",
            "┘": "boxul",
            "├": "boxvr",
            "┤": "boxvl",
            "┬": "boxhd",
            "┴": "boxhu",
            "┼": "boxvh",
            "═": "boxH",
            "║": "boxV",
            "╒": "boxdR",
            "╓": "boxDr",
            "╔": "boxDR",
            "╕": "boxdL",
            "╖": "boxDl",
            "╗": "boxDL",
            "╘": "boxuR",
            "╙": "boxUr",
            "╚": "boxUR",
            "╛": "boxuL",
            "╜": "boxUl",
            "╝": "boxUL",
            "╞": "boxvR",
            "╟": "boxVr",
            "╠": "boxVR",
            "╡": "boxvL",
            "╢": "boxVl",
            "╣": "boxVL",
            "╤": "boxHd",
            "╥": "boxhD",
            "╦": "boxHD",
            "╧": "boxHu",
            "╨": "boxhU",
            "╩": "boxHU",
            "╪": "boxvH",
            "╫": "boxVh",
            "╬": "boxVH",
            "▀": "uhblk",
            "▄": "lhblk",
            "█": "block",
            "░": "blk14",
            "▒": "blk12",
            "▓": "blk34",
            "□": "squ",
            "▪": "squf",
            "▫": "EmptyVerySmallSquare",
            "▭": "rect",
            "▮": "marker",
            "▱": "fltns",
            "△": "xutri",
            "▴": "utrif",
            "▵": "utri",
            "▸": "rtrif",
            "▹": "rtri",
            "▽": "xdtri",
            "▾": "dtrif",
            "▿": "dtri",
            "◂": "ltrif",
            "◃": "ltri",
            "◊": "loz",
            "○": "cir",
            "◬": "tridot",
            "◯": "xcirc",
            "◸": "ultri",
            "◹": "urtri",
            "◺": "lltri",
            "◻": "EmptySmallSquare",
            "◼": "FilledSmallSquare",
            "★": "starf",
            "☆": "star",
            "☎": "phone",
            "♀": "female",
            "♂": "male",
            "♠": "spades",
            "♣": "clubs",
            "♥": "hearts",
            "♦": "diams",
            "♪": "sung",
            "✓": "check",
            "✗": "cross",
            "✠": "malt",
            "✶": "sext",
            "❘": "VerticalSeparator",
            "⟈": "bsolhsub",
            "⟉": "suphsol",
            "⟵": "xlarr",
            "⟶": "xrarr",
            "⟷": "xharr",
            "⟸": "xlArr",
            "⟹": "xrArr",
            "⟺": "xhArr",
            "⟼": "xmap",
            "⟿": "dzigrarr",
            "⤂": "nvlArr",
            "⤃": "nvrArr",
            "⤄": "nvHarr",
            "⤅": "Map",
            "⤌": "lbarr",
            "⤍": "rbarr",
            "⤎": "lBarr",
            "⤏": "rBarr",
            "⤐": "RBarr",
            "⤑": "DDotrahd",
            "⤒": "UpArrowBar",
            "⤓": "DownArrowBar",
            "⤖": "Rarrtl",
            "⤙": "latail",
            "⤚": "ratail",
            "⤛": "lAtail",
            "⤜": "rAtail",
            "⤝": "larrfs",
            "⤞": "rarrfs",
            "⤟": "larrbfs",
            "⤠": "rarrbfs",
            "⤣": "nwarhk",
            "⤤": "nearhk",
            "⤥": "searhk",
            "⤦": "swarhk",
            "⤧": "nwnear",
            "⤨": "toea",
            "⤩": "tosa",
            "⤪": "swnwar",
            "⤳": "rarrc",
            "⤳̸": "nrarrc",
            "⤵": "cudarrr",
            "⤶": "ldca",
            "⤷": "rdca",
            "⤸": "cudarrl",
            "⤹": "larrpl",
            "⤼": "curarrm",
            "⤽": "cularrp",
            "⥅": "rarrpl",
            "⥈": "harrcir",
            "⥉": "Uarrocir",
            "⥊": "lurdshar",
            "⥋": "ldrushar",
            "⥎": "LeftRightVector",
            "⥏": "RightUpDownVector",
            "⥐": "DownLeftRightVector",
            "⥑": "LeftUpDownVector",
            "⥒": "LeftVectorBar",
            "⥓": "RightVectorBar",
            "⥔": "RightUpVectorBar",
            "⥕": "RightDownVectorBar",
            "⥖": "DownLeftVectorBar",
            "⥗": "DownRightVectorBar",
            "⥘": "LeftUpVectorBar",
            "⥙": "LeftDownVectorBar",
            "⥚": "LeftTeeVector",
            "⥛": "RightTeeVector",
            "⥜": "RightUpTeeVector",
            "⥝": "RightDownTeeVector",
            "⥞": "DownLeftTeeVector",
            "⥟": "DownRightTeeVector",
            "⥠": "LeftUpTeeVector",
            "⥡": "LeftDownTeeVector",
            "⥢": "lHar",
            "⥣": "uHar",
            "⥤": "rHar",
            "⥥": "dHar",
            "⥦": "luruhar",
            "⥧": "ldrdhar",
            "⥨": "ruluhar",
            "⥩": "rdldhar",
            "⥪": "lharul",
            "⥫": "llhard",
            "⥬": "rharul",
            "⥭": "lrhard",
            "⥮": "udhar",
            "⥯": "duhar",
            "⥰": "RoundImplies",
            "⥱": "erarr",
            "⥲": "simrarr",
            "⥳": "larrsim",
            "⥴": "rarrsim",
            "⥵": "rarrap",
            "⥶": "ltlarr",
            "⥸": "gtrarr",
            "⥹": "subrarr",
            "⥻": "suplarr",
            "⥼": "lfisht",
            "⥽": "rfisht",
            "⥾": "ufisht",
            "⥿": "dfisht",
            "⦚": "vzigzag",
            "⦜": "vangrt",
            "⦝": "angrtvbd",
            "⦤": "ange",
            "⦥": "range",
            "⦦": "dwangle",
            "⦧": "uwangle",
            "⦨": "angmsdaa",
            "⦩": "angmsdab",
            "⦪": "angmsdac",
            "⦫": "angmsdad",
            "⦬": "angmsdae",
            "⦭": "angmsdaf",
            "⦮": "angmsdag",
            "⦯": "angmsdah",
            "⦰": "bemptyv",
            "⦱": "demptyv",
            "⦲": "cemptyv",
            "⦳": "raemptyv",
            "⦴": "laemptyv",
            "⦵": "ohbar",
            "⦶": "omid",
            "⦷": "opar",
            "⦹": "operp",
            "⦻": "olcross",
            "⦼": "odsold",
            "⦾": "olcir",
            "⦿": "ofcir",
            "⧀": "olt",
            "⧁": "ogt",
            "⧂": "cirscir",
            "⧃": "cirE",
            "⧄": "solb",
            "⧅": "bsolb",
            "⧉": "boxbox",
            "⧍": "trisb",
            "⧎": "rtriltri",
            "⧏": "LeftTriangleBar",
            "⧏̸": "NotLeftTriangleBar",
            "⧐": "RightTriangleBar",
            "⧐̸": "NotRightTriangleBar",
            "⧜": "iinfin",
            "⧝": "infintie",
            "⧞": "nvinfin",
            "⧣": "eparsl",
            "⧤": "smeparsl",
            "⧥": "eqvparsl",
            "⧫": "lozf",
            "⧴": "RuleDelayed",
            "⧶": "dsol",
            "⨀": "xodot",
            "⨁": "xoplus",
            "⨂": "xotime",
            "⨄": "xuplus",
            "⨆": "xsqcup",
            "⨍": "fpartint",
            "⨐": "cirfnint",
            "⨑": "awint",
            "⨒": "rppolint",
            "⨓": "scpolint",
            "⨔": "npolint",
            "⨕": "pointint",
            "⨖": "quatint",
            "⨗": "intlarhk",
            "⨢": "pluscir",
            "⨣": "plusacir",
            "⨤": "simplus",
            "⨥": "plusdu",
            "⨦": "plussim",
            "⨧": "plustwo",
            "⨩": "mcomma",
            "⨪": "minusdu",
            "⨭": "loplus",
            "⨮": "roplus",
            "⨯": "Cross",
            "⨰": "timesd",
            "⨱": "timesbar",
            "⨳": "smashp",
            "⨴": "lotimes",
            "⨵": "rotimes",
            "⨶": "otimesas",
            "⨷": "Otimes",
            "⨸": "odiv",
            "⨹": "triplus",
            "⨺": "triminus",
            "⨻": "tritime",
            "⨼": "iprod",
            "⨿": "amalg",
            "⩀": "capdot",
            "⩂": "ncup",
            "⩃": "ncap",
            "⩄": "capand",
            "⩅": "cupor",
            "⩆": "cupcap",
            "⩇": "capcup",
            "⩈": "cupbrcap",
            "⩉": "capbrcup",
            "⩊": "cupcup",
            "⩋": "capcap",
            "⩌": "ccups",
            "⩍": "ccaps",
            "⩐": "ccupssm",
            "⩓": "And",
            "⩔": "Or",
            "⩕": "andand",
            "⩖": "oror",
            "⩗": "orslope",
            "⩘": "andslope",
            "⩚": "andv",
            "⩛": "orv",
            "⩜": "andd",
            "⩝": "ord",
            "⩟": "wedbar",
            "⩦": "sdote",
            "⩪": "simdot",
            "⩭": "congdot",
            "⩭̸": "ncongdot",
            "⩮": "easter",
            "⩯": "apacir",
            "⩰": "apE",
            "⩰̸": "napE",
            "⩱": "eplus",
            "⩲": "pluse",
            "⩳": "Esim",
            "⩷": "eDDot",
            "⩸": "equivDD",
            "⩹": "ltcir",
            "⩺": "gtcir",
            "⩻": "ltquest",
            "⩼": "gtquest",
            "⩽": "les",
            "⩽̸": "nles",
            "⩾": "ges",
            "⩾̸": "nges",
            "⩿": "lesdot",
            "⪀": "gesdot",
            "⪁": "lesdoto",
            "⪂": "gesdoto",
            "⪃": "lesdotor",
            "⪄": "gesdotol",
            "⪅": "lap",
            "⪆": "gap",
            "⪇": "lne",
            "⪈": "gne",
            "⪉": "lnap",
            "⪊": "gnap",
            "⪋": "lEg",
            "⪌": "gEl",
            "⪍": "lsime",
            "⪎": "gsime",
            "⪏": "lsimg",
            "⪐": "gsiml",
            "⪑": "lgE",
            "⪒": "glE",
            "⪓": "lesges",
            "⪔": "gesles",
            "⪕": "els",
            "⪖": "egs",
            "⪗": "elsdot",
            "⪘": "egsdot",
            "⪙": "el",
            "⪚": "eg",
            "⪝": "siml",
            "⪞": "simg",
            "⪟": "simlE",
            "⪠": "simgE",
            "⪡": "LessLess",
            "⪡̸": "NotNestedLessLess",
            "⪢": "GreaterGreater",
            "⪢̸": "NotNestedGreaterGreater",
            "⪤": "glj",
            "⪥": "gla",
            "⪦": "ltcc",
            "⪧": "gtcc",
            "⪨": "lescc",
            "⪩": "gescc",
            "⪪": "smt",
            "⪫": "lat",
            "⪬": "smte",
            "⪬︀": "smtes",
            "⪭": "late",
            "⪭︀": "lates",
            "⪮": "bumpE",
            "⪯": "pre",
            "⪯̸": "npre",
            "⪰": "sce",
            "⪰̸": "nsce",
            "⪳": "prE",
            "⪴": "scE",
            "⪵": "prnE",
            "⪶": "scnE",
            "⪷": "prap",
            "⪸": "scap",
            "⪹": "prnap",
            "⪺": "scnap",
            "⪻": "Pr",
            "⪼": "Sc",
            "⪽": "subdot",
            "⪾": "supdot",
            "⪿": "subplus",
            "⫀": "supplus",
            "⫁": "submult",
            "⫂": "supmult",
            "⫃": "subedot",
            "⫄": "supedot",
            "⫅": "subE",
            "⫅̸": "nsubE",
            "⫆": "supE",
            "⫆̸": "nsupE",
            "⫇": "subsim",
            "⫈": "supsim",
            "⫋︀": "vsubnE",
            "⫋": "subnE",
            "⫌︀": "vsupnE",
            "⫌": "supnE",
            "⫏": "csub",
            "⫐": "csup",
            "⫑": "csube",
            "⫒": "csupe",
            "⫓": "subsup",
            "⫔": "supsub",
            "⫕": "subsub",
            "⫖": "supsup",
            "⫗": "suphsub",
            "⫘": "supdsub",
            "⫙": "forkv",
            "⫚": "topfork",
            "⫛": "mlcp",
            "⫤": "Dashv",
            "⫦": "Vdashl",
            "⫧": "Barv",
            "⫨": "vBar",
            "⫩": "vBarv",
            "⫫": "Vbar",
            "⫬": "Not",
            "⫭": "bNot",
            "⫮": "rnmid",
            "⫯": "cirmid",
            "⫰": "midcir",
            "⫱": "topcir",
            "⫲": "nhpar",
            "⫳": "parsim",
            "⫽": "parsl",
            "⫽⃥": "nparsl",
            "♭": "flat",
            "♮": "natur",
            "♯": "sharp",
            "\xa4": "curren",
            "\xa2": "cent",
            $: "dollar",
            "\xa3": "pound",
            "\xa5": "yen",
            "€": "euro",
            "\xb9": "sup1",
            "\xbd": "half",
            "⅓": "frac13",
            "\xbc": "frac14",
            "⅕": "frac15",
            "⅙": "frac16",
            "⅛": "frac18",
            "\xb2": "sup2",
            "⅔": "frac23",
            "⅖": "frac25",
            "\xb3": "sup3",
            "\xbe": "frac34",
            "⅗": "frac35",
            "⅜": "frac38",
            "⅘": "frac45",
            "⅚": "frac56",
            "⅝": "frac58",
            "⅞": "frac78",
            "\uD835\uDCB6": "ascr",
            "\uD835\uDD52": "aopf",
            "\uD835\uDD1E": "afr",
            "\uD835\uDD38": "Aopf",
            "\uD835\uDD04": "Afr",
            "\uD835\uDC9C": "Ascr",
            ª: "ordf",
            á: "aacute",
            Á: "Aacute",
            à: "agrave",
            À: "Agrave",
            ă: "abreve",
            Ă: "Abreve",
            â: "acirc",
            Â: "Acirc",
            å: "aring",
            Å: "angst",
            ä: "auml",
            Ä: "Auml",
            ã: "atilde",
            Ã: "Atilde",
            ą: "aogon",
            Ą: "Aogon",
            ā: "amacr",
            Ā: "Amacr",
            æ: "aelig",
            Æ: "AElig",
            "\uD835\uDCB7": "bscr",
            "\uD835\uDD53": "bopf",
            "\uD835\uDD1F": "bfr",
            "\uD835\uDD39": "Bopf",
            ℬ: "Bscr",
            "\uD835\uDD05": "Bfr",
            "\uD835\uDD20": "cfr",
            "\uD835\uDCB8": "cscr",
            "\uD835\uDD54": "copf",
            ℭ: "Cfr",
            "\uD835\uDC9E": "Cscr",
            ℂ: "Copf",
            ć: "cacute",
            Ć: "Cacute",
            ĉ: "ccirc",
            Ĉ: "Ccirc",
            č: "ccaron",
            Č: "Ccaron",
            ċ: "cdot",
            Ċ: "Cdot",
            ç: "ccedil",
            Ç: "Ccedil",
            "℅": "incare",
            "\uD835\uDD21": "dfr",
            "ⅆ": "dd",
            "\uD835\uDD55": "dopf",
            "\uD835\uDCB9": "dscr",
            "\uD835\uDC9F": "Dscr",
            "\uD835\uDD07": "Dfr",
            "ⅅ": "DD",
            "\uD835\uDD3B": "Dopf",
            ď: "dcaron",
            Ď: "Dcaron",
            đ: "dstrok",
            Đ: "Dstrok",
            ð: "eth",
            Ð: "ETH",
            "ⅇ": "ee",
            ℯ: "escr",
            "\uD835\uDD22": "efr",
            "\uD835\uDD56": "eopf",
            ℰ: "Escr",
            "\uD835\uDD08": "Efr",
            "\uD835\uDD3C": "Eopf",
            é: "eacute",
            É: "Eacute",
            è: "egrave",
            È: "Egrave",
            ê: "ecirc",
            Ê: "Ecirc",
            ě: "ecaron",
            Ě: "Ecaron",
            ë: "euml",
            Ë: "Euml",
            ė: "edot",
            Ė: "Edot",
            ę: "eogon",
            Ę: "Eogon",
            ē: "emacr",
            Ē: "Emacr",
            "\uD835\uDD23": "ffr",
            "\uD835\uDD57": "fopf",
            "\uD835\uDCBB": "fscr",
            "\uD835\uDD09": "Ffr",
            "\uD835\uDD3D": "Fopf",
            ℱ: "Fscr",
            ﬀ: "fflig",
            ﬃ: "ffilig",
            ﬄ: "ffllig",
            ﬁ: "filig",
            fj: "fjlig",
            ﬂ: "fllig",
            ƒ: "fnof",
            ℊ: "gscr",
            "\uD835\uDD58": "gopf",
            "\uD835\uDD24": "gfr",
            "\uD835\uDCA2": "Gscr",
            "\uD835\uDD3E": "Gopf",
            "\uD835\uDD0A": "Gfr",
            ǵ: "gacute",
            ğ: "gbreve",
            Ğ: "Gbreve",
            ĝ: "gcirc",
            Ĝ: "Gcirc",
            ġ: "gdot",
            Ġ: "Gdot",
            Ģ: "Gcedil",
            "\uD835\uDD25": "hfr",
            ℎ: "planckh",
            "\uD835\uDCBD": "hscr",
            "\uD835\uDD59": "hopf",
            ℋ: "Hscr",
            ℌ: "Hfr",
            ℍ: "Hopf",
            ĥ: "hcirc",
            Ĥ: "Hcirc",
            ℏ: "hbar",
            ħ: "hstrok",
            Ħ: "Hstrok",
            "\uD835\uDD5A": "iopf",
            "\uD835\uDD26": "ifr",
            "\uD835\uDCBE": "iscr",
            "ⅈ": "ii",
            "\uD835\uDD40": "Iopf",
            ℐ: "Iscr",
            ℑ: "Im",
            í: "iacute",
            Í: "Iacute",
            ì: "igrave",
            Ì: "Igrave",
            î: "icirc",
            Î: "Icirc",
            ï: "iuml",
            Ï: "Iuml",
            ĩ: "itilde",
            Ĩ: "Itilde",
            İ: "Idot",
            į: "iogon",
            Į: "Iogon",
            ī: "imacr",
            Ī: "Imacr",
            ĳ: "ijlig",
            Ĳ: "IJlig",
            ı: "imath",
            "\uD835\uDCBF": "jscr",
            "\uD835\uDD5B": "jopf",
            "\uD835\uDD27": "jfr",
            "\uD835\uDCA5": "Jscr",
            "\uD835\uDD0D": "Jfr",
            "\uD835\uDD41": "Jopf",
            ĵ: "jcirc",
            Ĵ: "Jcirc",
            "ȷ": "jmath",
            "\uD835\uDD5C": "kopf",
            "\uD835\uDCC0": "kscr",
            "\uD835\uDD28": "kfr",
            "\uD835\uDCA6": "Kscr",
            "\uD835\uDD42": "Kopf",
            "\uD835\uDD0E": "Kfr",
            ķ: "kcedil",
            Ķ: "Kcedil",
            "\uD835\uDD29": "lfr",
            "\uD835\uDCC1": "lscr",
            ℓ: "ell",
            "\uD835\uDD5D": "lopf",
            ℒ: "Lscr",
            "\uD835\uDD0F": "Lfr",
            "\uD835\uDD43": "Lopf",
            ĺ: "lacute",
            Ĺ: "Lacute",
            ľ: "lcaron",
            Ľ: "Lcaron",
            ļ: "lcedil",
            Ļ: "Lcedil",
            ł: "lstrok",
            Ł: "Lstrok",
            ŀ: "lmidot",
            Ŀ: "Lmidot",
            "\uD835\uDD2A": "mfr",
            "\uD835\uDD5E": "mopf",
            "\uD835\uDCC2": "mscr",
            "\uD835\uDD10": "Mfr",
            "\uD835\uDD44": "Mopf",
            ℳ: "Mscr",
            "\uD835\uDD2B": "nfr",
            "\uD835\uDD5F": "nopf",
            "\uD835\uDCC3": "nscr",
            ℕ: "Nopf",
            "\uD835\uDCA9": "Nscr",
            "\uD835\uDD11": "Nfr",
            ń: "nacute",
            Ń: "Nacute",
            ň: "ncaron",
            Ň: "Ncaron",
            ñ: "ntilde",
            Ñ: "Ntilde",
            ņ: "ncedil",
            Ņ: "Ncedil",
            "№": "numero",
            ŋ: "eng",
            Ŋ: "ENG",
            "\uD835\uDD60": "oopf",
            "\uD835\uDD2C": "ofr",
            ℴ: "oscr",
            "\uD835\uDCAA": "Oscr",
            "\uD835\uDD12": "Ofr",
            "\uD835\uDD46": "Oopf",
            º: "ordm",
            ó: "oacute",
            Ó: "Oacute",
            ò: "ograve",
            Ò: "Ograve",
            ô: "ocirc",
            Ô: "Ocirc",
            ö: "ouml",
            Ö: "Ouml",
            ő: "odblac",
            Ő: "Odblac",
            õ: "otilde",
            Õ: "Otilde",
            ø: "oslash",
            Ø: "Oslash",
            ō: "omacr",
            Ō: "Omacr",
            œ: "oelig",
            Œ: "OElig",
            "\uD835\uDD2D": "pfr",
            "\uD835\uDCC5": "pscr",
            "\uD835\uDD61": "popf",
            ℙ: "Popf",
            "\uD835\uDD13": "Pfr",
            "\uD835\uDCAB": "Pscr",
            "\uD835\uDD62": "qopf",
            "\uD835\uDD2E": "qfr",
            "\uD835\uDCC6": "qscr",
            "\uD835\uDCAC": "Qscr",
            "\uD835\uDD14": "Qfr",
            ℚ: "Qopf",
            ĸ: "kgreen",
            "\uD835\uDD2F": "rfr",
            "\uD835\uDD63": "ropf",
            "\uD835\uDCC7": "rscr",
            ℛ: "Rscr",
            ℜ: "Re",
            ℝ: "Ropf",
            ŕ: "racute",
            Ŕ: "Racute",
            ř: "rcaron",
            Ř: "Rcaron",
            ŗ: "rcedil",
            Ŗ: "Rcedil",
            "\uD835\uDD64": "sopf",
            "\uD835\uDCC8": "sscr",
            "\uD835\uDD30": "sfr",
            "\uD835\uDD4A": "Sopf",
            "\uD835\uDD16": "Sfr",
            "\uD835\uDCAE": "Sscr",
            "Ⓢ": "oS",
            ś: "sacute",
            Ś: "Sacute",
            ŝ: "scirc",
            Ŝ: "Scirc",
            š: "scaron",
            Š: "Scaron",
            ş: "scedil",
            Ş: "Scedil",
            ß: "szlig",
            "\uD835\uDD31": "tfr",
            "\uD835\uDCC9": "tscr",
            "\uD835\uDD65": "topf",
            "\uD835\uDCAF": "Tscr",
            "\uD835\uDD17": "Tfr",
            "\uD835\uDD4B": "Topf",
            ť: "tcaron",
            Ť: "Tcaron",
            ţ: "tcedil",
            Ţ: "Tcedil",
            "™": "trade",
            ŧ: "tstrok",
            Ŧ: "Tstrok",
            "\uD835\uDCCA": "uscr",
            "\uD835\uDD66": "uopf",
            "\uD835\uDD32": "ufr",
            "\uD835\uDD4C": "Uopf",
            "\uD835\uDD18": "Ufr",
            "\uD835\uDCB0": "Uscr",
            ú: "uacute",
            Ú: "Uacute",
            ù: "ugrave",
            Ù: "Ugrave",
            ŭ: "ubreve",
            Ŭ: "Ubreve",
            û: "ucirc",
            Û: "Ucirc",
            ů: "uring",
            Ů: "Uring",
            ü: "uuml",
            Ü: "Uuml",
            ű: "udblac",
            Ű: "Udblac",
            ũ: "utilde",
            Ũ: "Utilde",
            ų: "uogon",
            Ų: "Uogon",
            ū: "umacr",
            Ū: "Umacr",
            "\uD835\uDD33": "vfr",
            "\uD835\uDD67": "vopf",
            "\uD835\uDCCB": "vscr",
            "\uD835\uDD19": "Vfr",
            "\uD835\uDD4D": "Vopf",
            "\uD835\uDCB1": "Vscr",
            "\uD835\uDD68": "wopf",
            "\uD835\uDCCC": "wscr",
            "\uD835\uDD34": "wfr",
            "\uD835\uDCB2": "Wscr",
            "\uD835\uDD4E": "Wopf",
            "\uD835\uDD1A": "Wfr",
            ŵ: "wcirc",
            Ŵ: "Wcirc",
            "\uD835\uDD35": "xfr",
            "\uD835\uDCCD": "xscr",
            "\uD835\uDD69": "xopf",
            "\uD835\uDD4F": "Xopf",
            "\uD835\uDD1B": "Xfr",
            "\uD835\uDCB3": "Xscr",
            "\uD835\uDD36": "yfr",
            "\uD835\uDCCE": "yscr",
            "\uD835\uDD6A": "yopf",
            "\uD835\uDCB4": "Yscr",
            "\uD835\uDD1C": "Yfr",
            "\uD835\uDD50": "Yopf",
            ý: "yacute",
            Ý: "Yacute",
            ŷ: "ycirc",
            Ŷ: "Ycirc",
            ÿ: "yuml",
            Ÿ: "Yuml",
            "\uD835\uDCCF": "zscr",
            "\uD835\uDD37": "zfr",
            "\uD835\uDD6B": "zopf",
            ℨ: "Zfr",
            ℤ: "Zopf",
            "\uD835\uDCB5": "Zscr",
            ź: "zacute",
            Ź: "Zacute",
            ž: "zcaron",
            Ž: "Zcaron",
            ż: "zdot",
            Ż: "Zdot",
            Ƶ: "imped",
            þ: "thorn",
            Þ: "THORN",
            ŉ: "napos",
            α: "alpha",
            Α: "Alpha",
            β: "beta",
            Β: "Beta",
            γ: "gamma",
            Γ: "Gamma",
            δ: "delta",
            Δ: "Delta",
            ε: "epsi",
            "ϵ": "epsiv",
            Ε: "Epsilon",
            ϝ: "gammad",
            Ϝ: "Gammad",
            ζ: "zeta",
            Ζ: "Zeta",
            η: "eta",
            Η: "Eta",
            θ: "theta",
            ϑ: "thetav",
            Θ: "Theta",
            ι: "iota",
            Ι: "Iota",
            κ: "kappa",
            ϰ: "kappav",
            Κ: "Kappa",
            λ: "lambda",
            Λ: "Lambda",
            μ: "mu",
            µ: "micro",
            Μ: "Mu",
            ν: "nu",
            Ν: "Nu",
            ξ: "xi",
            Ξ: "Xi",
            ο: "omicron",
            Ο: "Omicron",
            π: "pi",
            ϖ: "piv",
            Π: "Pi",
            ρ: "rho",
            ϱ: "rhov",
            Ρ: "Rho",
            σ: "sigma",
            Σ: "Sigma",
            ς: "sigmaf",
            τ: "tau",
            Τ: "Tau",
            υ: "upsi",
            Υ: "Upsilon",
            ϒ: "Upsi",
            φ: "phi",
            ϕ: "phiv",
            Φ: "Phi",
            χ: "chi",
            Χ: "Chi",
            ψ: "psi",
            Ψ: "Psi",
            ω: "omega",
            Ω: "ohm",
            а: "acy",
            А: "Acy",
            б: "bcy",
            Б: "Bcy",
            в: "vcy",
            В: "Vcy",
            г: "gcy",
            Г: "Gcy",
            ѓ: "gjcy",
            Ѓ: "GJcy",
            д: "dcy",
            Д: "Dcy",
            ђ: "djcy",
            Ђ: "DJcy",
            е: "iecy",
            Е: "IEcy",
            ё: "iocy",
            Ё: "IOcy",
            є: "jukcy",
            Є: "Jukcy",
            ж: "zhcy",
            Ж: "ZHcy",
            з: "zcy",
            З: "Zcy",
            ѕ: "dscy",
            Ѕ: "DScy",
            и: "icy",
            И: "Icy",
            і: "iukcy",
            І: "Iukcy",
            ї: "yicy",
            Ї: "YIcy",
            й: "jcy",
            Й: "Jcy",
            ј: "jsercy",
            Ј: "Jsercy",
            к: "kcy",
            К: "Kcy",
            ќ: "kjcy",
            Ќ: "KJcy",
            л: "lcy",
            Л: "Lcy",
            љ: "ljcy",
            Љ: "LJcy",
            м: "mcy",
            М: "Mcy",
            н: "ncy",
            Н: "Ncy",
            њ: "njcy",
            Њ: "NJcy",
            о: "ocy",
            О: "Ocy",
            п: "pcy",
            П: "Pcy",
            р: "rcy",
            Р: "Rcy",
            с: "scy",
            С: "Scy",
            т: "tcy",
            Т: "Tcy",
            ћ: "tshcy",
            Ћ: "TSHcy",
            у: "ucy",
            У: "Ucy",
            ў: "ubrcy",
            Ў: "Ubrcy",
            ф: "fcy",
            Ф: "Fcy",
            х: "khcy",
            Х: "KHcy",
            ц: "tscy",
            Ц: "TScy",
            ч: "chcy",
            Ч: "CHcy",
            џ: "dzcy",
            Џ: "DZcy",
            ш: "shcy",
            Ш: "SHcy",
            щ: "shchcy",
            Щ: "SHCHcy",
            ъ: "hardcy",
            Ъ: "HARDcy",
            ы: "ycy",
            Ы: "Ycy",
            ь: "softcy",
            Ь: "SOFTcy",
            э: "ecy",
            Э: "Ecy",
            ю: "yucy",
            Ю: "YUcy",
            я: "yacy",
            Я: "YAcy",
            ℵ: "aleph",
            ℶ: "beth",
            ℷ: "gimel",
            ℸ: "daleth"
        }, A = /["&'<>`]/g, y = {
            '"': "&quot;",
            "&": "&amp;",
            "'": "&#x27;",
            "<": "&lt;",
            ">": "&gt;",
            "`": "&#x60;"
        }, _ = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/, q = /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, F = /&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|maltese|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g, R = {
            aacute: "\xe1",
            Aacute: "\xc1",
            abreve: "ă",
            Abreve: "Ă",
            ac: "∾",
            acd: "∿",
            acE: "∾̳",
            acirc: "\xe2",
            Acirc: "\xc2",
            acute: "\xb4",
            acy: "а",
            Acy: "А",
            aelig: "\xe6",
            AElig: "\xc6",
            af: "⁡",
            afr: "\uD835\uDD1E",
            Afr: "\uD835\uDD04",
            agrave: "\xe0",
            Agrave: "\xc0",
            alefsym: "ℵ",
            aleph: "ℵ",
            alpha: "α",
            Alpha: "Α",
            amacr: "ā",
            Amacr: "Ā",
            amalg: "⨿",
            amp: "&",
            AMP: "&",
            and: "∧",
            And: "⩓",
            andand: "⩕",
            andd: "⩜",
            andslope: "⩘",
            andv: "⩚",
            ang: "∠",
            ange: "⦤",
            angle: "∠",
            angmsd: "∡",
            angmsdaa: "⦨",
            angmsdab: "⦩",
            angmsdac: "⦪",
            angmsdad: "⦫",
            angmsdae: "⦬",
            angmsdaf: "⦭",
            angmsdag: "⦮",
            angmsdah: "⦯",
            angrt: "∟",
            angrtvb: "⊾",
            angrtvbd: "⦝",
            angsph: "∢",
            angst: "\xc5",
            angzarr: "⍼",
            aogon: "ą",
            Aogon: "Ą",
            aopf: "\uD835\uDD52",
            Aopf: "\uD835\uDD38",
            ap: "≈",
            apacir: "⩯",
            ape: "≊",
            apE: "⩰",
            apid: "≋",
            apos: "'",
            ApplyFunction: "⁡",
            approx: "≈",
            approxeq: "≊",
            aring: "\xe5",
            Aring: "\xc5",
            ascr: "\uD835\uDCB6",
            Ascr: "\uD835\uDC9C",
            Assign: "≔",
            ast: "*",
            asymp: "≈",
            asympeq: "≍",
            atilde: "\xe3",
            Atilde: "\xc3",
            auml: "\xe4",
            Auml: "\xc4",
            awconint: "∳",
            awint: "⨑",
            backcong: "≌",
            backepsilon: "϶",
            backprime: "‵",
            backsim: "∽",
            backsimeq: "⋍",
            Backslash: "∖",
            Barv: "⫧",
            barvee: "⊽",
            barwed: "⌅",
            Barwed: "⌆",
            barwedge: "⌅",
            bbrk: "⎵",
            bbrktbrk: "⎶",
            bcong: "≌",
            bcy: "б",
            Bcy: "Б",
            bdquo: "„",
            becaus: "∵",
            because: "∵",
            Because: "∵",
            bemptyv: "⦰",
            bepsi: "϶",
            bernou: "ℬ",
            Bernoullis: "ℬ",
            beta: "β",
            Beta: "Β",
            beth: "ℶ",
            between: "≬",
            bfr: "\uD835\uDD1F",
            Bfr: "\uD835\uDD05",
            bigcap: "⋂",
            bigcirc: "◯",
            bigcup: "⋃",
            bigodot: "⨀",
            bigoplus: "⨁",
            bigotimes: "⨂",
            bigsqcup: "⨆",
            bigstar: "★",
            bigtriangledown: "▽",
            bigtriangleup: "△",
            biguplus: "⨄",
            bigvee: "⋁",
            bigwedge: "⋀",
            bkarow: "⤍",
            blacklozenge: "⧫",
            blacksquare: "▪",
            blacktriangle: "▴",
            blacktriangledown: "▾",
            blacktriangleleft: "◂",
            blacktriangleright: "▸",
            blank: "␣",
            blk12: "▒",
            blk14: "░",
            blk34: "▓",
            block: "█",
            bne: "=⃥",
            bnequiv: "≡⃥",
            bnot: "⌐",
            bNot: "⫭",
            bopf: "\uD835\uDD53",
            Bopf: "\uD835\uDD39",
            bot: "⊥",
            bottom: "⊥",
            bowtie: "⋈",
            boxbox: "⧉",
            boxdl: "┐",
            boxdL: "╕",
            boxDl: "╖",
            boxDL: "╗",
            boxdr: "┌",
            boxdR: "╒",
            boxDr: "╓",
            boxDR: "╔",
            boxh: "─",
            boxH: "═",
            boxhd: "┬",
            boxhD: "╥",
            boxHd: "╤",
            boxHD: "╦",
            boxhu: "┴",
            boxhU: "╨",
            boxHu: "╧",
            boxHU: "╩",
            boxminus: "⊟",
            boxplus: "⊞",
            boxtimes: "⊠",
            boxul: "┘",
            boxuL: "╛",
            boxUl: "╜",
            boxUL: "╝",
            boxur: "└",
            boxuR: "╘",
            boxUr: "╙",
            boxUR: "╚",
            boxv: "│",
            boxV: "║",
            boxvh: "┼",
            boxvH: "╪",
            boxVh: "╫",
            boxVH: "╬",
            boxvl: "┤",
            boxvL: "╡",
            boxVl: "╢",
            boxVL: "╣",
            boxvr: "├",
            boxvR: "╞",
            boxVr: "╟",
            boxVR: "╠",
            bprime: "‵",
            breve: "˘",
            Breve: "˘",
            brvbar: "\xa6",
            bscr: "\uD835\uDCB7",
            Bscr: "ℬ",
            bsemi: "⁏",
            bsim: "∽",
            bsime: "⋍",
            bsol: "\\",
            bsolb: "⧅",
            bsolhsub: "⟈",
            bull: "•",
            bullet: "•",
            bump: "≎",
            bumpe: "≏",
            bumpE: "⪮",
            bumpeq: "≏",
            Bumpeq: "≎",
            cacute: "ć",
            Cacute: "Ć",
            cap: "∩",
            Cap: "⋒",
            capand: "⩄",
            capbrcup: "⩉",
            capcap: "⩋",
            capcup: "⩇",
            capdot: "⩀",
            CapitalDifferentialD: "ⅅ",
            caps: "∩︀",
            caret: "⁁",
            caron: "ˇ",
            Cayleys: "ℭ",
            ccaps: "⩍",
            ccaron: "č",
            Ccaron: "Č",
            ccedil: "\xe7",
            Ccedil: "\xc7",
            ccirc: "ĉ",
            Ccirc: "Ĉ",
            Cconint: "∰",
            ccups: "⩌",
            ccupssm: "⩐",
            cdot: "ċ",
            Cdot: "Ċ",
            cedil: "\xb8",
            Cedilla: "\xb8",
            cemptyv: "⦲",
            cent: "\xa2",
            centerdot: "\xb7",
            CenterDot: "\xb7",
            cfr: "\uD835\uDD20",
            Cfr: "ℭ",
            chcy: "ч",
            CHcy: "Ч",
            check: "✓",
            checkmark: "✓",
            chi: "χ",
            Chi: "Χ",
            cir: "○",
            circ: "ˆ",
            circeq: "≗",
            circlearrowleft: "↺",
            circlearrowright: "↻",
            circledast: "⊛",
            circledcirc: "⊚",
            circleddash: "⊝",
            CircleDot: "⊙",
            circledR: "\xae",
            circledS: "Ⓢ",
            CircleMinus: "⊖",
            CirclePlus: "⊕",
            CircleTimes: "⊗",
            cire: "≗",
            cirE: "⧃",
            cirfnint: "⨐",
            cirmid: "⫯",
            cirscir: "⧂",
            ClockwiseContourIntegral: "∲",
            CloseCurlyDoubleQuote: "”",
            CloseCurlyQuote: "’",
            clubs: "♣",
            clubsuit: "♣",
            colon: ":",
            Colon: "∷",
            colone: "≔",
            Colone: "⩴",
            coloneq: "≔",
            comma: ",",
            commat: "@",
            comp: "∁",
            compfn: "∘",
            complement: "∁",
            complexes: "ℂ",
            cong: "≅",
            congdot: "⩭",
            Congruent: "≡",
            conint: "∮",
            Conint: "∯",
            ContourIntegral: "∮",
            copf: "\uD835\uDD54",
            Copf: "ℂ",
            coprod: "∐",
            Coproduct: "∐",
            copy: "\xa9",
            COPY: "\xa9",
            copysr: "℗",
            CounterClockwiseContourIntegral: "∳",
            crarr: "↵",
            cross: "✗",
            Cross: "⨯",
            cscr: "\uD835\uDCB8",
            Cscr: "\uD835\uDC9E",
            csub: "⫏",
            csube: "⫑",
            csup: "⫐",
            csupe: "⫒",
            ctdot: "⋯",
            cudarrl: "⤸",
            cudarrr: "⤵",
            cuepr: "⋞",
            cuesc: "⋟",
            cularr: "↶",
            cularrp: "⤽",
            cup: "∪",
            Cup: "⋓",
            cupbrcap: "⩈",
            cupcap: "⩆",
            CupCap: "≍",
            cupcup: "⩊",
            cupdot: "⊍",
            cupor: "⩅",
            cups: "∪︀",
            curarr: "↷",
            curarrm: "⤼",
            curlyeqprec: "⋞",
            curlyeqsucc: "⋟",
            curlyvee: "⋎",
            curlywedge: "⋏",
            curren: "\xa4",
            curvearrowleft: "↶",
            curvearrowright: "↷",
            cuvee: "⋎",
            cuwed: "⋏",
            cwconint: "∲",
            cwint: "∱",
            cylcty: "⌭",
            dagger: "†",
            Dagger: "‡",
            daleth: "ℸ",
            darr: "↓",
            dArr: "⇓",
            Darr: "↡",
            dash: "‐",
            dashv: "⊣",
            Dashv: "⫤",
            dbkarow: "⤏",
            dblac: "˝",
            dcaron: "ď",
            Dcaron: "Ď",
            dcy: "д",
            Dcy: "Д",
            dd: "ⅆ",
            DD: "ⅅ",
            ddagger: "‡",
            ddarr: "⇊",
            DDotrahd: "⤑",
            ddotseq: "⩷",
            deg: "\xb0",
            Del: "∇",
            delta: "δ",
            Delta: "Δ",
            demptyv: "⦱",
            dfisht: "⥿",
            dfr: "\uD835\uDD21",
            Dfr: "\uD835\uDD07",
            dHar: "⥥",
            dharl: "⇃",
            dharr: "⇂",
            DiacriticalAcute: "\xb4",
            DiacriticalDot: "˙",
            DiacriticalDoubleAcute: "˝",
            DiacriticalGrave: "`",
            DiacriticalTilde: "˜",
            diam: "⋄",
            diamond: "⋄",
            Diamond: "⋄",
            diamondsuit: "♦",
            diams: "♦",
            die: "\xa8",
            DifferentialD: "ⅆ",
            digamma: "ϝ",
            disin: "⋲",
            div: "\xf7",
            divide: "\xf7",
            divideontimes: "⋇",
            divonx: "⋇",
            djcy: "ђ",
            DJcy: "Ђ",
            dlcorn: "⌞",
            dlcrop: "⌍",
            dollar: "$",
            dopf: "\uD835\uDD55",
            Dopf: "\uD835\uDD3B",
            dot: "˙",
            Dot: "\xa8",
            DotDot: "⃜",
            doteq: "≐",
            doteqdot: "≑",
            DotEqual: "≐",
            dotminus: "∸",
            dotplus: "∔",
            dotsquare: "⊡",
            doublebarwedge: "⌆",
            DoubleContourIntegral: "∯",
            DoubleDot: "\xa8",
            DoubleDownArrow: "⇓",
            DoubleLeftArrow: "⇐",
            DoubleLeftRightArrow: "⇔",
            DoubleLeftTee: "⫤",
            DoubleLongLeftArrow: "⟸",
            DoubleLongLeftRightArrow: "⟺",
            DoubleLongRightArrow: "⟹",
            DoubleRightArrow: "⇒",
            DoubleRightTee: "⊨",
            DoubleUpArrow: "⇑",
            DoubleUpDownArrow: "⇕",
            DoubleVerticalBar: "∥",
            downarrow: "↓",
            Downarrow: "⇓",
            DownArrow: "↓",
            DownArrowBar: "⤓",
            DownArrowUpArrow: "⇵",
            DownBreve: "̑",
            downdownarrows: "⇊",
            downharpoonleft: "⇃",
            downharpoonright: "⇂",
            DownLeftRightVector: "⥐",
            DownLeftTeeVector: "⥞",
            DownLeftVector: "↽",
            DownLeftVectorBar: "⥖",
            DownRightTeeVector: "⥟",
            DownRightVector: "⇁",
            DownRightVectorBar: "⥗",
            DownTee: "⊤",
            DownTeeArrow: "↧",
            drbkarow: "⤐",
            drcorn: "⌟",
            drcrop: "⌌",
            dscr: "\uD835\uDCB9",
            Dscr: "\uD835\uDC9F",
            dscy: "ѕ",
            DScy: "Ѕ",
            dsol: "⧶",
            dstrok: "đ",
            Dstrok: "Đ",
            dtdot: "⋱",
            dtri: "▿",
            dtrif: "▾",
            duarr: "⇵",
            duhar: "⥯",
            dwangle: "⦦",
            dzcy: "џ",
            DZcy: "Џ",
            dzigrarr: "⟿",
            eacute: "\xe9",
            Eacute: "\xc9",
            easter: "⩮",
            ecaron: "ě",
            Ecaron: "Ě",
            ecir: "≖",
            ecirc: "\xea",
            Ecirc: "\xca",
            ecolon: "≕",
            ecy: "э",
            Ecy: "Э",
            eDDot: "⩷",
            edot: "ė",
            eDot: "≑",
            Edot: "Ė",
            ee: "ⅇ",
            efDot: "≒",
            efr: "\uD835\uDD22",
            Efr: "\uD835\uDD08",
            eg: "⪚",
            egrave: "\xe8",
            Egrave: "\xc8",
            egs: "⪖",
            egsdot: "⪘",
            el: "⪙",
            Element: "∈",
            elinters: "⏧",
            ell: "ℓ",
            els: "⪕",
            elsdot: "⪗",
            emacr: "ē",
            Emacr: "Ē",
            empty: "∅",
            emptyset: "∅",
            EmptySmallSquare: "◻",
            emptyv: "∅",
            EmptyVerySmallSquare: "▫",
            emsp: " ",
            emsp13: " ",
            emsp14: " ",
            eng: "ŋ",
            ENG: "Ŋ",
            ensp: " ",
            eogon: "ę",
            Eogon: "Ę",
            eopf: "\uD835\uDD56",
            Eopf: "\uD835\uDD3C",
            epar: "⋕",
            eparsl: "⧣",
            eplus: "⩱",
            epsi: "ε",
            epsilon: "ε",
            Epsilon: "Ε",
            epsiv: "ϵ",
            eqcirc: "≖",
            eqcolon: "≕",
            eqsim: "≂",
            eqslantgtr: "⪖",
            eqslantless: "⪕",
            Equal: "⩵",
            equals: "=",
            EqualTilde: "≂",
            equest: "≟",
            Equilibrium: "⇌",
            equiv: "≡",
            equivDD: "⩸",
            eqvparsl: "⧥",
            erarr: "⥱",
            erDot: "≓",
            escr: "ℯ",
            Escr: "ℰ",
            esdot: "≐",
            esim: "≂",
            Esim: "⩳",
            eta: "η",
            Eta: "Η",
            eth: "\xf0",
            ETH: "\xd0",
            euml: "\xeb",
            Euml: "\xcb",
            euro: "€",
            excl: "!",
            exist: "∃",
            Exists: "∃",
            expectation: "ℰ",
            exponentiale: "ⅇ",
            ExponentialE: "ⅇ",
            fallingdotseq: "≒",
            fcy: "ф",
            Fcy: "Ф",
            female: "♀",
            ffilig: "ﬃ",
            fflig: "ﬀ",
            ffllig: "ﬄ",
            ffr: "\uD835\uDD23",
            Ffr: "\uD835\uDD09",
            filig: "ﬁ",
            FilledSmallSquare: "◼",
            FilledVerySmallSquare: "▪",
            fjlig: "fj",
            flat: "♭",
            fllig: "ﬂ",
            fltns: "▱",
            fnof: "ƒ",
            fopf: "\uD835\uDD57",
            Fopf: "\uD835\uDD3D",
            forall: "∀",
            ForAll: "∀",
            fork: "⋔",
            forkv: "⫙",
            Fouriertrf: "ℱ",
            fpartint: "⨍",
            frac12: "\xbd",
            frac13: "⅓",
            frac14: "\xbc",
            frac15: "⅕",
            frac16: "⅙",
            frac18: "⅛",
            frac23: "⅔",
            frac25: "⅖",
            frac34: "\xbe",
            frac35: "⅗",
            frac38: "⅜",
            frac45: "⅘",
            frac56: "⅚",
            frac58: "⅝",
            frac78: "⅞",
            frasl: "⁄",
            frown: "⌢",
            fscr: "\uD835\uDCBB",
            Fscr: "ℱ",
            gacute: "ǵ",
            gamma: "γ",
            Gamma: "Γ",
            gammad: "ϝ",
            Gammad: "Ϝ",
            gap: "⪆",
            gbreve: "ğ",
            Gbreve: "Ğ",
            Gcedil: "Ģ",
            gcirc: "ĝ",
            Gcirc: "Ĝ",
            gcy: "г",
            Gcy: "Г",
            gdot: "ġ",
            Gdot: "Ġ",
            ge: "≥",
            gE: "≧",
            gel: "⋛",
            gEl: "⪌",
            geq: "≥",
            geqq: "≧",
            geqslant: "⩾",
            ges: "⩾",
            gescc: "⪩",
            gesdot: "⪀",
            gesdoto: "⪂",
            gesdotol: "⪄",
            gesl: "⋛︀",
            gesles: "⪔",
            gfr: "\uD835\uDD24",
            Gfr: "\uD835\uDD0A",
            gg: "≫",
            Gg: "⋙",
            ggg: "⋙",
            gimel: "ℷ",
            gjcy: "ѓ",
            GJcy: "Ѓ",
            gl: "≷",
            gla: "⪥",
            glE: "⪒",
            glj: "⪤",
            gnap: "⪊",
            gnapprox: "⪊",
            gne: "⪈",
            gnE: "≩",
            gneq: "⪈",
            gneqq: "≩",
            gnsim: "⋧",
            gopf: "\uD835\uDD58",
            Gopf: "\uD835\uDD3E",
            grave: "`",
            GreaterEqual: "≥",
            GreaterEqualLess: "⋛",
            GreaterFullEqual: "≧",
            GreaterGreater: "⪢",
            GreaterLess: "≷",
            GreaterSlantEqual: "⩾",
            GreaterTilde: "≳",
            gscr: "ℊ",
            Gscr: "\uD835\uDCA2",
            gsim: "≳",
            gsime: "⪎",
            gsiml: "⪐",
            gt: ">",
            Gt: "≫",
            GT: ">",
            gtcc: "⪧",
            gtcir: "⩺",
            gtdot: "⋗",
            gtlPar: "⦕",
            gtquest: "⩼",
            gtrapprox: "⪆",
            gtrarr: "⥸",
            gtrdot: "⋗",
            gtreqless: "⋛",
            gtreqqless: "⪌",
            gtrless: "≷",
            gtrsim: "≳",
            gvertneqq: "≩︀",
            gvnE: "≩︀",
            Hacek: "ˇ",
            hairsp: " ",
            half: "\xbd",
            hamilt: "ℋ",
            hardcy: "ъ",
            HARDcy: "Ъ",
            harr: "↔",
            hArr: "⇔",
            harrcir: "⥈",
            harrw: "↭",
            Hat: "^",
            hbar: "ℏ",
            hcirc: "ĥ",
            Hcirc: "Ĥ",
            hearts: "♥",
            heartsuit: "♥",
            hellip: "…",
            hercon: "⊹",
            hfr: "\uD835\uDD25",
            Hfr: "ℌ",
            HilbertSpace: "ℋ",
            hksearow: "⤥",
            hkswarow: "⤦",
            hoarr: "⇿",
            homtht: "∻",
            hookleftarrow: "↩",
            hookrightarrow: "↪",
            hopf: "\uD835\uDD59",
            Hopf: "ℍ",
            horbar: "―",
            HorizontalLine: "─",
            hscr: "\uD835\uDCBD",
            Hscr: "ℋ",
            hslash: "ℏ",
            hstrok: "ħ",
            Hstrok: "Ħ",
            HumpDownHump: "≎",
            HumpEqual: "≏",
            hybull: "⁃",
            hyphen: "‐",
            iacute: "\xed",
            Iacute: "\xcd",
            ic: "⁣",
            icirc: "\xee",
            Icirc: "\xce",
            icy: "и",
            Icy: "И",
            Idot: "İ",
            iecy: "е",
            IEcy: "Е",
            iexcl: "\xa1",
            iff: "⇔",
            ifr: "\uD835\uDD26",
            Ifr: "ℑ",
            igrave: "\xec",
            Igrave: "\xcc",
            ii: "ⅈ",
            iiiint: "⨌",
            iiint: "∭",
            iinfin: "⧜",
            iiota: "℩",
            ijlig: "ĳ",
            IJlig: "Ĳ",
            Im: "ℑ",
            imacr: "ī",
            Imacr: "Ī",
            image: "ℑ",
            ImaginaryI: "ⅈ",
            imagline: "ℐ",
            imagpart: "ℑ",
            imath: "ı",
            imof: "⊷",
            imped: "Ƶ",
            Implies: "⇒",
            in: "∈",
            incare: "℅",
            infin: "∞",
            infintie: "⧝",
            inodot: "ı",
            int: "∫",
            Int: "∬",
            intcal: "⊺",
            integers: "ℤ",
            Integral: "∫",
            intercal: "⊺",
            Intersection: "⋂",
            intlarhk: "⨗",
            intprod: "⨼",
            InvisibleComma: "⁣",
            InvisibleTimes: "⁢",
            iocy: "ё",
            IOcy: "Ё",
            iogon: "į",
            Iogon: "Į",
            iopf: "\uD835\uDD5A",
            Iopf: "\uD835\uDD40",
            iota: "ι",
            Iota: "Ι",
            iprod: "⨼",
            iquest: "\xbf",
            iscr: "\uD835\uDCBE",
            Iscr: "ℐ",
            isin: "∈",
            isindot: "⋵",
            isinE: "⋹",
            isins: "⋴",
            isinsv: "⋳",
            isinv: "∈",
            it: "⁢",
            itilde: "ĩ",
            Itilde: "Ĩ",
            iukcy: "і",
            Iukcy: "І",
            iuml: "\xef",
            Iuml: "\xcf",
            jcirc: "ĵ",
            Jcirc: "Ĵ",
            jcy: "й",
            Jcy: "Й",
            jfr: "\uD835\uDD27",
            Jfr: "\uD835\uDD0D",
            jmath: "ȷ",
            jopf: "\uD835\uDD5B",
            Jopf: "\uD835\uDD41",
            jscr: "\uD835\uDCBF",
            Jscr: "\uD835\uDCA5",
            jsercy: "ј",
            Jsercy: "Ј",
            jukcy: "є",
            Jukcy: "Є",
            kappa: "κ",
            Kappa: "Κ",
            kappav: "ϰ",
            kcedil: "ķ",
            Kcedil: "Ķ",
            kcy: "к",
            Kcy: "К",
            kfr: "\uD835\uDD28",
            Kfr: "\uD835\uDD0E",
            kgreen: "ĸ",
            khcy: "х",
            KHcy: "Х",
            kjcy: "ќ",
            KJcy: "Ќ",
            kopf: "\uD835\uDD5C",
            Kopf: "\uD835\uDD42",
            kscr: "\uD835\uDCC0",
            Kscr: "\uD835\uDCA6",
            lAarr: "⇚",
            lacute: "ĺ",
            Lacute: "Ĺ",
            laemptyv: "⦴",
            lagran: "ℒ",
            lambda: "λ",
            Lambda: "Λ",
            lang: "⟨",
            Lang: "⟪",
            langd: "⦑",
            langle: "⟨",
            lap: "⪅",
            Laplacetrf: "ℒ",
            laquo: "\xab",
            larr: "←",
            lArr: "⇐",
            Larr: "↞",
            larrb: "⇤",
            larrbfs: "⤟",
            larrfs: "⤝",
            larrhk: "↩",
            larrlp: "↫",
            larrpl: "⤹",
            larrsim: "⥳",
            larrtl: "↢",
            lat: "⪫",
            latail: "⤙",
            lAtail: "⤛",
            late: "⪭",
            lates: "⪭︀",
            lbarr: "⤌",
            lBarr: "⤎",
            lbbrk: "❲",
            lbrace: "{",
            lbrack: "[",
            lbrke: "⦋",
            lbrksld: "⦏",
            lbrkslu: "⦍",
            lcaron: "ľ",
            Lcaron: "Ľ",
            lcedil: "ļ",
            Lcedil: "Ļ",
            lceil: "⌈",
            lcub: "{",
            lcy: "л",
            Lcy: "Л",
            ldca: "⤶",
            ldquo: "“",
            ldquor: "„",
            ldrdhar: "⥧",
            ldrushar: "⥋",
            ldsh: "↲",
            le: "≤",
            lE: "≦",
            LeftAngleBracket: "⟨",
            leftarrow: "←",
            Leftarrow: "⇐",
            LeftArrow: "←",
            LeftArrowBar: "⇤",
            LeftArrowRightArrow: "⇆",
            leftarrowtail: "↢",
            LeftCeiling: "⌈",
            LeftDoubleBracket: "⟦",
            LeftDownTeeVector: "⥡",
            LeftDownVector: "⇃",
            LeftDownVectorBar: "⥙",
            LeftFloor: "⌊",
            leftharpoondown: "↽",
            leftharpoonup: "↼",
            leftleftarrows: "⇇",
            leftrightarrow: "↔",
            Leftrightarrow: "⇔",
            LeftRightArrow: "↔",
            leftrightarrows: "⇆",
            leftrightharpoons: "⇋",
            leftrightsquigarrow: "↭",
            LeftRightVector: "⥎",
            LeftTee: "⊣",
            LeftTeeArrow: "↤",
            LeftTeeVector: "⥚",
            leftthreetimes: "⋋",
            LeftTriangle: "⊲",
            LeftTriangleBar: "⧏",
            LeftTriangleEqual: "⊴",
            LeftUpDownVector: "⥑",
            LeftUpTeeVector: "⥠",
            LeftUpVector: "↿",
            LeftUpVectorBar: "⥘",
            LeftVector: "↼",
            LeftVectorBar: "⥒",
            leg: "⋚",
            lEg: "⪋",
            leq: "≤",
            leqq: "≦",
            leqslant: "⩽",
            les: "⩽",
            lescc: "⪨",
            lesdot: "⩿",
            lesdoto: "⪁",
            lesdotor: "⪃",
            lesg: "⋚︀",
            lesges: "⪓",
            lessapprox: "⪅",
            lessdot: "⋖",
            lesseqgtr: "⋚",
            lesseqqgtr: "⪋",
            LessEqualGreater: "⋚",
            LessFullEqual: "≦",
            LessGreater: "≶",
            lessgtr: "≶",
            LessLess: "⪡",
            lesssim: "≲",
            LessSlantEqual: "⩽",
            LessTilde: "≲",
            lfisht: "⥼",
            lfloor: "⌊",
            lfr: "\uD835\uDD29",
            Lfr: "\uD835\uDD0F",
            lg: "≶",
            lgE: "⪑",
            lHar: "⥢",
            lhard: "↽",
            lharu: "↼",
            lharul: "⥪",
            lhblk: "▄",
            ljcy: "љ",
            LJcy: "Љ",
            ll: "≪",
            Ll: "⋘",
            llarr: "⇇",
            llcorner: "⌞",
            Lleftarrow: "⇚",
            llhard: "⥫",
            lltri: "◺",
            lmidot: "ŀ",
            Lmidot: "Ŀ",
            lmoust: "⎰",
            lmoustache: "⎰",
            lnap: "⪉",
            lnapprox: "⪉",
            lne: "⪇",
            lnE: "≨",
            lneq: "⪇",
            lneqq: "≨",
            lnsim: "⋦",
            loang: "⟬",
            loarr: "⇽",
            lobrk: "⟦",
            longleftarrow: "⟵",
            Longleftarrow: "⟸",
            LongLeftArrow: "⟵",
            longleftrightarrow: "⟷",
            Longleftrightarrow: "⟺",
            LongLeftRightArrow: "⟷",
            longmapsto: "⟼",
            longrightarrow: "⟶",
            Longrightarrow: "⟹",
            LongRightArrow: "⟶",
            looparrowleft: "↫",
            looparrowright: "↬",
            lopar: "⦅",
            lopf: "\uD835\uDD5D",
            Lopf: "\uD835\uDD43",
            loplus: "⨭",
            lotimes: "⨴",
            lowast: "∗",
            lowbar: "_",
            LowerLeftArrow: "↙",
            LowerRightArrow: "↘",
            loz: "◊",
            lozenge: "◊",
            lozf: "⧫",
            lpar: "(",
            lparlt: "⦓",
            lrarr: "⇆",
            lrcorner: "⌟",
            lrhar: "⇋",
            lrhard: "⥭",
            lrm: "‎",
            lrtri: "⊿",
            lsaquo: "‹",
            lscr: "\uD835\uDCC1",
            Lscr: "ℒ",
            lsh: "↰",
            Lsh: "↰",
            lsim: "≲",
            lsime: "⪍",
            lsimg: "⪏",
            lsqb: "[",
            lsquo: "‘",
            lsquor: "‚",
            lstrok: "ł",
            Lstrok: "Ł",
            lt: "<",
            Lt: "≪",
            LT: "<",
            ltcc: "⪦",
            ltcir: "⩹",
            ltdot: "⋖",
            lthree: "⋋",
            ltimes: "⋉",
            ltlarr: "⥶",
            ltquest: "⩻",
            ltri: "◃",
            ltrie: "⊴",
            ltrif: "◂",
            ltrPar: "⦖",
            lurdshar: "⥊",
            luruhar: "⥦",
            lvertneqq: "≨︀",
            lvnE: "≨︀",
            macr: "\xaf",
            male: "♂",
            malt: "✠",
            maltese: "✠",
            map: "↦",
            Map: "⤅",
            mapsto: "↦",
            mapstodown: "↧",
            mapstoleft: "↤",
            mapstoup: "↥",
            marker: "▮",
            mcomma: "⨩",
            mcy: "м",
            Mcy: "М",
            mdash: "—",
            mDDot: "∺",
            measuredangle: "∡",
            MediumSpace: " ",
            Mellintrf: "ℳ",
            mfr: "\uD835\uDD2A",
            Mfr: "\uD835\uDD10",
            mho: "℧",
            micro: "\xb5",
            mid: "∣",
            midast: "*",
            midcir: "⫰",
            middot: "\xb7",
            minus: "−",
            minusb: "⊟",
            minusd: "∸",
            minusdu: "⨪",
            MinusPlus: "∓",
            mlcp: "⫛",
            mldr: "…",
            mnplus: "∓",
            models: "⊧",
            mopf: "\uD835\uDD5E",
            Mopf: "\uD835\uDD44",
            mp: "∓",
            mscr: "\uD835\uDCC2",
            Mscr: "ℳ",
            mstpos: "∾",
            mu: "μ",
            Mu: "Μ",
            multimap: "⊸",
            mumap: "⊸",
            nabla: "∇",
            nacute: "ń",
            Nacute: "Ń",
            nang: "∠⃒",
            nap: "≉",
            napE: "⩰̸",
            napid: "≋̸",
            napos: "ŉ",
            napprox: "≉",
            natur: "♮",
            natural: "♮",
            naturals: "ℕ",
            nbsp: "\xa0",
            nbump: "≎̸",
            nbumpe: "≏̸",
            ncap: "⩃",
            ncaron: "ň",
            Ncaron: "Ň",
            ncedil: "ņ",
            Ncedil: "Ņ",
            ncong: "≇",
            ncongdot: "⩭̸",
            ncup: "⩂",
            ncy: "н",
            Ncy: "Н",
            ndash: "–",
            ne: "≠",
            nearhk: "⤤",
            nearr: "↗",
            neArr: "⇗",
            nearrow: "↗",
            nedot: "≐̸",
            NegativeMediumSpace: "​",
            NegativeThickSpace: "​",
            NegativeThinSpace: "​",
            NegativeVeryThinSpace: "​",
            nequiv: "≢",
            nesear: "⤨",
            nesim: "≂̸",
            NestedGreaterGreater: "≫",
            NestedLessLess: "≪",
            NewLine: "\n",
            nexist: "∄",
            nexists: "∄",
            nfr: "\uD835\uDD2B",
            Nfr: "\uD835\uDD11",
            nge: "≱",
            ngE: "≧̸",
            ngeq: "≱",
            ngeqq: "≧̸",
            ngeqslant: "⩾̸",
            nges: "⩾̸",
            nGg: "⋙̸",
            ngsim: "≵",
            ngt: "≯",
            nGt: "≫⃒",
            ngtr: "≯",
            nGtv: "≫̸",
            nharr: "↮",
            nhArr: "⇎",
            nhpar: "⫲",
            ni: "∋",
            nis: "⋼",
            nisd: "⋺",
            niv: "∋",
            njcy: "њ",
            NJcy: "Њ",
            nlarr: "↚",
            nlArr: "⇍",
            nldr: "‥",
            nle: "≰",
            nlE: "≦̸",
            nleftarrow: "↚",
            nLeftarrow: "⇍",
            nleftrightarrow: "↮",
            nLeftrightarrow: "⇎",
            nleq: "≰",
            nleqq: "≦̸",
            nleqslant: "⩽̸",
            nles: "⩽̸",
            nless: "≮",
            nLl: "⋘̸",
            nlsim: "≴",
            nlt: "≮",
            nLt: "≪⃒",
            nltri: "⋪",
            nltrie: "⋬",
            nLtv: "≪̸",
            nmid: "∤",
            NoBreak: "⁠",
            NonBreakingSpace: "\xa0",
            nopf: "\uD835\uDD5F",
            Nopf: "ℕ",
            not: "\xac",
            Not: "⫬",
            NotCongruent: "≢",
            NotCupCap: "≭",
            NotDoubleVerticalBar: "∦",
            NotElement: "∉",
            NotEqual: "≠",
            NotEqualTilde: "≂̸",
            NotExists: "∄",
            NotGreater: "≯",
            NotGreaterEqual: "≱",
            NotGreaterFullEqual: "≧̸",
            NotGreaterGreater: "≫̸",
            NotGreaterLess: "≹",
            NotGreaterSlantEqual: "⩾̸",
            NotGreaterTilde: "≵",
            NotHumpDownHump: "≎̸",
            NotHumpEqual: "≏̸",
            notin: "∉",
            notindot: "⋵̸",
            notinE: "⋹̸",
            notinva: "∉",
            notinvb: "⋷",
            notinvc: "⋶",
            NotLeftTriangle: "⋪",
            NotLeftTriangleBar: "⧏̸",
            NotLeftTriangleEqual: "⋬",
            NotLess: "≮",
            NotLessEqual: "≰",
            NotLessGreater: "≸",
            NotLessLess: "≪̸",
            NotLessSlantEqual: "⩽̸",
            NotLessTilde: "≴",
            NotNestedGreaterGreater: "⪢̸",
            NotNestedLessLess: "⪡̸",
            notni: "∌",
            notniva: "∌",
            notnivb: "⋾",
            notnivc: "⋽",
            NotPrecedes: "⊀",
            NotPrecedesEqual: "⪯̸",
            NotPrecedesSlantEqual: "⋠",
            NotReverseElement: "∌",
            NotRightTriangle: "⋫",
            NotRightTriangleBar: "⧐̸",
            NotRightTriangleEqual: "⋭",
            NotSquareSubset: "⊏̸",
            NotSquareSubsetEqual: "⋢",
            NotSquareSuperset: "⊐̸",
            NotSquareSupersetEqual: "⋣",
            NotSubset: "⊂⃒",
            NotSubsetEqual: "⊈",
            NotSucceeds: "⊁",
            NotSucceedsEqual: "⪰̸",
            NotSucceedsSlantEqual: "⋡",
            NotSucceedsTilde: "≿̸",
            NotSuperset: "⊃⃒",
            NotSupersetEqual: "⊉",
            NotTilde: "≁",
            NotTildeEqual: "≄",
            NotTildeFullEqual: "≇",
            NotTildeTilde: "≉",
            NotVerticalBar: "∤",
            npar: "∦",
            nparallel: "∦",
            nparsl: "⫽⃥",
            npart: "∂̸",
            npolint: "⨔",
            npr: "⊀",
            nprcue: "⋠",
            npre: "⪯̸",
            nprec: "⊀",
            npreceq: "⪯̸",
            nrarr: "↛",
            nrArr: "⇏",
            nrarrc: "⤳̸",
            nrarrw: "↝̸",
            nrightarrow: "↛",
            nRightarrow: "⇏",
            nrtri: "⋫",
            nrtrie: "⋭",
            nsc: "⊁",
            nsccue: "⋡",
            nsce: "⪰̸",
            nscr: "\uD835\uDCC3",
            Nscr: "\uD835\uDCA9",
            nshortmid: "∤",
            nshortparallel: "∦",
            nsim: "≁",
            nsime: "≄",
            nsimeq: "≄",
            nsmid: "∤",
            nspar: "∦",
            nsqsube: "⋢",
            nsqsupe: "⋣",
            nsub: "⊄",
            nsube: "⊈",
            nsubE: "⫅̸",
            nsubset: "⊂⃒",
            nsubseteq: "⊈",
            nsubseteqq: "⫅̸",
            nsucc: "⊁",
            nsucceq: "⪰̸",
            nsup: "⊅",
            nsupe: "⊉",
            nsupE: "⫆̸",
            nsupset: "⊃⃒",
            nsupseteq: "⊉",
            nsupseteqq: "⫆̸",
            ntgl: "≹",
            ntilde: "\xf1",
            Ntilde: "\xd1",
            ntlg: "≸",
            ntriangleleft: "⋪",
            ntrianglelefteq: "⋬",
            ntriangleright: "⋫",
            ntrianglerighteq: "⋭",
            nu: "ν",
            Nu: "Ν",
            num: "#",
            numero: "№",
            numsp: " ",
            nvap: "≍⃒",
            nvdash: "⊬",
            nvDash: "⊭",
            nVdash: "⊮",
            nVDash: "⊯",
            nvge: "≥⃒",
            nvgt: ">⃒",
            nvHarr: "⤄",
            nvinfin: "⧞",
            nvlArr: "⤂",
            nvle: "≤⃒",
            nvlt: "<⃒",
            nvltrie: "⊴⃒",
            nvrArr: "⤃",
            nvrtrie: "⊵⃒",
            nvsim: "∼⃒",
            nwarhk: "⤣",
            nwarr: "↖",
            nwArr: "⇖",
            nwarrow: "↖",
            nwnear: "⤧",
            oacute: "\xf3",
            Oacute: "\xd3",
            oast: "⊛",
            ocir: "⊚",
            ocirc: "\xf4",
            Ocirc: "\xd4",
            ocy: "о",
            Ocy: "О",
            odash: "⊝",
            odblac: "ő",
            Odblac: "Ő",
            odiv: "⨸",
            odot: "⊙",
            odsold: "⦼",
            oelig: "œ",
            OElig: "Œ",
            ofcir: "⦿",
            ofr: "\uD835\uDD2C",
            Ofr: "\uD835\uDD12",
            ogon: "˛",
            ograve: "\xf2",
            Ograve: "\xd2",
            ogt: "⧁",
            ohbar: "⦵",
            ohm: "Ω",
            oint: "∮",
            olarr: "↺",
            olcir: "⦾",
            olcross: "⦻",
            oline: "‾",
            olt: "⧀",
            omacr: "ō",
            Omacr: "Ō",
            omega: "ω",
            Omega: "Ω",
            omicron: "ο",
            Omicron: "Ο",
            omid: "⦶",
            ominus: "⊖",
            oopf: "\uD835\uDD60",
            Oopf: "\uD835\uDD46",
            opar: "⦷",
            OpenCurlyDoubleQuote: "“",
            OpenCurlyQuote: "‘",
            operp: "⦹",
            oplus: "⊕",
            or: "∨",
            Or: "⩔",
            orarr: "↻",
            ord: "⩝",
            order: "ℴ",
            orderof: "ℴ",
            ordf: "\xaa",
            ordm: "\xba",
            origof: "⊶",
            oror: "⩖",
            orslope: "⩗",
            orv: "⩛",
            oS: "Ⓢ",
            oscr: "ℴ",
            Oscr: "\uD835\uDCAA",
            oslash: "\xf8",
            Oslash: "\xd8",
            osol: "⊘",
            otilde: "\xf5",
            Otilde: "\xd5",
            otimes: "⊗",
            Otimes: "⨷",
            otimesas: "⨶",
            ouml: "\xf6",
            Ouml: "\xd6",
            ovbar: "⌽",
            OverBar: "‾",
            OverBrace: "⏞",
            OverBracket: "⎴",
            OverParenthesis: "⏜",
            par: "∥",
            para: "\xb6",
            parallel: "∥",
            parsim: "⫳",
            parsl: "⫽",
            part: "∂",
            PartialD: "∂",
            pcy: "п",
            Pcy: "П",
            percnt: "%",
            period: ".",
            permil: "‰",
            perp: "⊥",
            pertenk: "‱",
            pfr: "\uD835\uDD2D",
            Pfr: "\uD835\uDD13",
            phi: "φ",
            Phi: "Φ",
            phiv: "ϕ",
            phmmat: "ℳ",
            phone: "☎",
            pi: "π",
            Pi: "Π",
            pitchfork: "⋔",
            piv: "ϖ",
            planck: "ℏ",
            planckh: "ℎ",
            plankv: "ℏ",
            plus: "+",
            plusacir: "⨣",
            plusb: "⊞",
            pluscir: "⨢",
            plusdo: "∔",
            plusdu: "⨥",
            pluse: "⩲",
            PlusMinus: "\xb1",
            plusmn: "\xb1",
            plussim: "⨦",
            plustwo: "⨧",
            pm: "\xb1",
            Poincareplane: "ℌ",
            pointint: "⨕",
            popf: "\uD835\uDD61",
            Popf: "ℙ",
            pound: "\xa3",
            pr: "≺",
            Pr: "⪻",
            prap: "⪷",
            prcue: "≼",
            pre: "⪯",
            prE: "⪳",
            prec: "≺",
            precapprox: "⪷",
            preccurlyeq: "≼",
            Precedes: "≺",
            PrecedesEqual: "⪯",
            PrecedesSlantEqual: "≼",
            PrecedesTilde: "≾",
            preceq: "⪯",
            precnapprox: "⪹",
            precneqq: "⪵",
            precnsim: "⋨",
            precsim: "≾",
            prime: "′",
            Prime: "″",
            primes: "ℙ",
            prnap: "⪹",
            prnE: "⪵",
            prnsim: "⋨",
            prod: "∏",
            Product: "∏",
            profalar: "⌮",
            profline: "⌒",
            profsurf: "⌓",
            prop: "∝",
            Proportion: "∷",
            Proportional: "∝",
            propto: "∝",
            prsim: "≾",
            prurel: "⊰",
            pscr: "\uD835\uDCC5",
            Pscr: "\uD835\uDCAB",
            psi: "ψ",
            Psi: "Ψ",
            puncsp: " ",
            qfr: "\uD835\uDD2E",
            Qfr: "\uD835\uDD14",
            qint: "⨌",
            qopf: "\uD835\uDD62",
            Qopf: "ℚ",
            qprime: "⁗",
            qscr: "\uD835\uDCC6",
            Qscr: "\uD835\uDCAC",
            quaternions: "ℍ",
            quatint: "⨖",
            quest: "?",
            questeq: "≟",
            quot: '"',
            QUOT: '"',
            rAarr: "⇛",
            race: "∽̱",
            racute: "ŕ",
            Racute: "Ŕ",
            radic: "√",
            raemptyv: "⦳",
            rang: "⟩",
            Rang: "⟫",
            rangd: "⦒",
            range: "⦥",
            rangle: "⟩",
            raquo: "\xbb",
            rarr: "→",
            rArr: "⇒",
            Rarr: "↠",
            rarrap: "⥵",
            rarrb: "⇥",
            rarrbfs: "⤠",
            rarrc: "⤳",
            rarrfs: "⤞",
            rarrhk: "↪",
            rarrlp: "↬",
            rarrpl: "⥅",
            rarrsim: "⥴",
            rarrtl: "↣",
            Rarrtl: "⤖",
            rarrw: "↝",
            ratail: "⤚",
            rAtail: "⤜",
            ratio: "∶",
            rationals: "ℚ",
            rbarr: "⤍",
            rBarr: "⤏",
            RBarr: "⤐",
            rbbrk: "❳",
            rbrace: "}",
            rbrack: "]",
            rbrke: "⦌",
            rbrksld: "⦎",
            rbrkslu: "⦐",
            rcaron: "ř",
            Rcaron: "Ř",
            rcedil: "ŗ",
            Rcedil: "Ŗ",
            rceil: "⌉",
            rcub: "}",
            rcy: "р",
            Rcy: "Р",
            rdca: "⤷",
            rdldhar: "⥩",
            rdquo: "”",
            rdquor: "”",
            rdsh: "↳",
            Re: "ℜ",
            real: "ℜ",
            realine: "ℛ",
            realpart: "ℜ",
            reals: "ℝ",
            rect: "▭",
            reg: "\xae",
            REG: "\xae",
            ReverseElement: "∋",
            ReverseEquilibrium: "⇋",
            ReverseUpEquilibrium: "⥯",
            rfisht: "⥽",
            rfloor: "⌋",
            rfr: "\uD835\uDD2F",
            Rfr: "ℜ",
            rHar: "⥤",
            rhard: "⇁",
            rharu: "⇀",
            rharul: "⥬",
            rho: "ρ",
            Rho: "Ρ",
            rhov: "ϱ",
            RightAngleBracket: "⟩",
            rightarrow: "→",
            Rightarrow: "⇒",
            RightArrow: "→",
            RightArrowBar: "⇥",
            RightArrowLeftArrow: "⇄",
            rightarrowtail: "↣",
            RightCeiling: "⌉",
            RightDoubleBracket: "⟧",
            RightDownTeeVector: "⥝",
            RightDownVector: "⇂",
            RightDownVectorBar: "⥕",
            RightFloor: "⌋",
            rightharpoondown: "⇁",
            rightharpoonup: "⇀",
            rightleftarrows: "⇄",
            rightleftharpoons: "⇌",
            rightrightarrows: "⇉",
            rightsquigarrow: "↝",
            RightTee: "⊢",
            RightTeeArrow: "↦",
            RightTeeVector: "⥛",
            rightthreetimes: "⋌",
            RightTriangle: "⊳",
            RightTriangleBar: "⧐",
            RightTriangleEqual: "⊵",
            RightUpDownVector: "⥏",
            RightUpTeeVector: "⥜",
            RightUpVector: "↾",
            RightUpVectorBar: "⥔",
            RightVector: "⇀",
            RightVectorBar: "⥓",
            ring: "˚",
            risingdotseq: "≓",
            rlarr: "⇄",
            rlhar: "⇌",
            rlm: "‏",
            rmoust: "⎱",
            rmoustache: "⎱",
            rnmid: "⫮",
            roang: "⟭",
            roarr: "⇾",
            robrk: "⟧",
            ropar: "⦆",
            ropf: "\uD835\uDD63",
            Ropf: "ℝ",
            roplus: "⨮",
            rotimes: "⨵",
            RoundImplies: "⥰",
            rpar: ")",
            rpargt: "⦔",
            rppolint: "⨒",
            rrarr: "⇉",
            Rrightarrow: "⇛",
            rsaquo: "›",
            rscr: "\uD835\uDCC7",
            Rscr: "ℛ",
            rsh: "↱",
            Rsh: "↱",
            rsqb: "]",
            rsquo: "’",
            rsquor: "’",
            rthree: "⋌",
            rtimes: "⋊",
            rtri: "▹",
            rtrie: "⊵",
            rtrif: "▸",
            rtriltri: "⧎",
            RuleDelayed: "⧴",
            ruluhar: "⥨",
            rx: "℞",
            sacute: "ś",
            Sacute: "Ś",
            sbquo: "‚",
            sc: "≻",
            Sc: "⪼",
            scap: "⪸",
            scaron: "š",
            Scaron: "Š",
            sccue: "≽",
            sce: "⪰",
            scE: "⪴",
            scedil: "ş",
            Scedil: "Ş",
            scirc: "ŝ",
            Scirc: "Ŝ",
            scnap: "⪺",
            scnE: "⪶",
            scnsim: "⋩",
            scpolint: "⨓",
            scsim: "≿",
            scy: "с",
            Scy: "С",
            sdot: "⋅",
            sdotb: "⊡",
            sdote: "⩦",
            searhk: "⤥",
            searr: "↘",
            seArr: "⇘",
            searrow: "↘",
            sect: "\xa7",
            semi: ";",
            seswar: "⤩",
            setminus: "∖",
            setmn: "∖",
            sext: "✶",
            sfr: "\uD835\uDD30",
            Sfr: "\uD835\uDD16",
            sfrown: "⌢",
            sharp: "♯",
            shchcy: "щ",
            SHCHcy: "Щ",
            shcy: "ш",
            SHcy: "Ш",
            ShortDownArrow: "↓",
            ShortLeftArrow: "←",
            shortmid: "∣",
            shortparallel: "∥",
            ShortRightArrow: "→",
            ShortUpArrow: "↑",
            shy: "\xad",
            sigma: "σ",
            Sigma: "Σ",
            sigmaf: "ς",
            sigmav: "ς",
            sim: "∼",
            simdot: "⩪",
            sime: "≃",
            simeq: "≃",
            simg: "⪞",
            simgE: "⪠",
            siml: "⪝",
            simlE: "⪟",
            simne: "≆",
            simplus: "⨤",
            simrarr: "⥲",
            slarr: "←",
            SmallCircle: "∘",
            smallsetminus: "∖",
            smashp: "⨳",
            smeparsl: "⧤",
            smid: "∣",
            smile: "⌣",
            smt: "⪪",
            smte: "⪬",
            smtes: "⪬︀",
            softcy: "ь",
            SOFTcy: "Ь",
            sol: "/",
            solb: "⧄",
            solbar: "⌿",
            sopf: "\uD835\uDD64",
            Sopf: "\uD835\uDD4A",
            spades: "♠",
            spadesuit: "♠",
            spar: "∥",
            sqcap: "⊓",
            sqcaps: "⊓︀",
            sqcup: "⊔",
            sqcups: "⊔︀",
            Sqrt: "√",
            sqsub: "⊏",
            sqsube: "⊑",
            sqsubset: "⊏",
            sqsubseteq: "⊑",
            sqsup: "⊐",
            sqsupe: "⊒",
            sqsupset: "⊐",
            sqsupseteq: "⊒",
            squ: "□",
            square: "□",
            Square: "□",
            SquareIntersection: "⊓",
            SquareSubset: "⊏",
            SquareSubsetEqual: "⊑",
            SquareSuperset: "⊐",
            SquareSupersetEqual: "⊒",
            SquareUnion: "⊔",
            squarf: "▪",
            squf: "▪",
            srarr: "→",
            sscr: "\uD835\uDCC8",
            Sscr: "\uD835\uDCAE",
            ssetmn: "∖",
            ssmile: "⌣",
            sstarf: "⋆",
            star: "☆",
            Star: "⋆",
            starf: "★",
            straightepsilon: "ϵ",
            straightphi: "ϕ",
            strns: "\xaf",
            sub: "⊂",
            Sub: "⋐",
            subdot: "⪽",
            sube: "⊆",
            subE: "⫅",
            subedot: "⫃",
            submult: "⫁",
            subne: "⊊",
            subnE: "⫋",
            subplus: "⪿",
            subrarr: "⥹",
            subset: "⊂",
            Subset: "⋐",
            subseteq: "⊆",
            subseteqq: "⫅",
            SubsetEqual: "⊆",
            subsetneq: "⊊",
            subsetneqq: "⫋",
            subsim: "⫇",
            subsub: "⫕",
            subsup: "⫓",
            succ: "≻",
            succapprox: "⪸",
            succcurlyeq: "≽",
            Succeeds: "≻",
            SucceedsEqual: "⪰",
            SucceedsSlantEqual: "≽",
            SucceedsTilde: "≿",
            succeq: "⪰",
            succnapprox: "⪺",
            succneqq: "⪶",
            succnsim: "⋩",
            succsim: "≿",
            SuchThat: "∋",
            sum: "∑",
            Sum: "∑",
            sung: "♪",
            sup: "⊃",
            Sup: "⋑",
            sup1: "\xb9",
            sup2: "\xb2",
            sup3: "\xb3",
            supdot: "⪾",
            supdsub: "⫘",
            supe: "⊇",
            supE: "⫆",
            supedot: "⫄",
            Superset: "⊃",
            SupersetEqual: "⊇",
            suphsol: "⟉",
            suphsub: "⫗",
            suplarr: "⥻",
            supmult: "⫂",
            supne: "⊋",
            supnE: "⫌",
            supplus: "⫀",
            supset: "⊃",
            Supset: "⋑",
            supseteq: "⊇",
            supseteqq: "⫆",
            supsetneq: "⊋",
            supsetneqq: "⫌",
            supsim: "⫈",
            supsub: "⫔",
            supsup: "⫖",
            swarhk: "⤦",
            swarr: "↙",
            swArr: "⇙",
            swarrow: "↙",
            swnwar: "⤪",
            szlig: "\xdf",
            Tab: "	",
            target: "⌖",
            tau: "τ",
            Tau: "Τ",
            tbrk: "⎴",
            tcaron: "ť",
            Tcaron: "Ť",
            tcedil: "ţ",
            Tcedil: "Ţ",
            tcy: "т",
            Tcy: "Т",
            tdot: "⃛",
            telrec: "⌕",
            tfr: "\uD835\uDD31",
            Tfr: "\uD835\uDD17",
            there4: "∴",
            therefore: "∴",
            Therefore: "∴",
            theta: "θ",
            Theta: "Θ",
            thetasym: "ϑ",
            thetav: "ϑ",
            thickapprox: "≈",
            thicksim: "∼",
            ThickSpace: "  ",
            thinsp: " ",
            ThinSpace: " ",
            thkap: "≈",
            thksim: "∼",
            thorn: "\xfe",
            THORN: "\xde",
            tilde: "˜",
            Tilde: "∼",
            TildeEqual: "≃",
            TildeFullEqual: "≅",
            TildeTilde: "≈",
            times: "\xd7",
            timesb: "⊠",
            timesbar: "⨱",
            timesd: "⨰",
            tint: "∭",
            toea: "⤨",
            top: "⊤",
            topbot: "⌶",
            topcir: "⫱",
            topf: "\uD835\uDD65",
            Topf: "\uD835\uDD4B",
            topfork: "⫚",
            tosa: "⤩",
            tprime: "‴",
            trade: "™",
            TRADE: "™",
            triangle: "▵",
            triangledown: "▿",
            triangleleft: "◃",
            trianglelefteq: "⊴",
            triangleq: "≜",
            triangleright: "▹",
            trianglerighteq: "⊵",
            tridot: "◬",
            trie: "≜",
            triminus: "⨺",
            TripleDot: "⃛",
            triplus: "⨹",
            trisb: "⧍",
            tritime: "⨻",
            trpezium: "⏢",
            tscr: "\uD835\uDCC9",
            Tscr: "\uD835\uDCAF",
            tscy: "ц",
            TScy: "Ц",
            tshcy: "ћ",
            TSHcy: "Ћ",
            tstrok: "ŧ",
            Tstrok: "Ŧ",
            twixt: "≬",
            twoheadleftarrow: "↞",
            twoheadrightarrow: "↠",
            uacute: "\xfa",
            Uacute: "\xda",
            uarr: "↑",
            uArr: "⇑",
            Uarr: "↟",
            Uarrocir: "⥉",
            ubrcy: "ў",
            Ubrcy: "Ў",
            ubreve: "ŭ",
            Ubreve: "Ŭ",
            ucirc: "\xfb",
            Ucirc: "\xdb",
            ucy: "у",
            Ucy: "У",
            udarr: "⇅",
            udblac: "ű",
            Udblac: "Ű",
            udhar: "⥮",
            ufisht: "⥾",
            ufr: "\uD835\uDD32",
            Ufr: "\uD835\uDD18",
            ugrave: "\xf9",
            Ugrave: "\xd9",
            uHar: "⥣",
            uharl: "↿",
            uharr: "↾",
            uhblk: "▀",
            ulcorn: "⌜",
            ulcorner: "⌜",
            ulcrop: "⌏",
            ultri: "◸",
            umacr: "ū",
            Umacr: "Ū",
            uml: "\xa8",
            UnderBar: "_",
            UnderBrace: "⏟",
            UnderBracket: "⎵",
            UnderParenthesis: "⏝",
            Union: "⋃",
            UnionPlus: "⊎",
            uogon: "ų",
            Uogon: "Ų",
            uopf: "\uD835\uDD66",
            Uopf: "\uD835\uDD4C",
            uparrow: "↑",
            Uparrow: "⇑",
            UpArrow: "↑",
            UpArrowBar: "⤒",
            UpArrowDownArrow: "⇅",
            updownarrow: "↕",
            Updownarrow: "⇕",
            UpDownArrow: "↕",
            UpEquilibrium: "⥮",
            upharpoonleft: "↿",
            upharpoonright: "↾",
            uplus: "⊎",
            UpperLeftArrow: "↖",
            UpperRightArrow: "↗",
            upsi: "υ",
            Upsi: "ϒ",
            upsih: "ϒ",
            upsilon: "υ",
            Upsilon: "Υ",
            UpTee: "⊥",
            UpTeeArrow: "↥",
            upuparrows: "⇈",
            urcorn: "⌝",
            urcorner: "⌝",
            urcrop: "⌎",
            uring: "ů",
            Uring: "Ů",
            urtri: "◹",
            uscr: "\uD835\uDCCA",
            Uscr: "\uD835\uDCB0",
            utdot: "⋰",
            utilde: "ũ",
            Utilde: "Ũ",
            utri: "▵",
            utrif: "▴",
            uuarr: "⇈",
            uuml: "\xfc",
            Uuml: "\xdc",
            uwangle: "⦧",
            vangrt: "⦜",
            varepsilon: "ϵ",
            varkappa: "ϰ",
            varnothing: "∅",
            varphi: "ϕ",
            varpi: "ϖ",
            varpropto: "∝",
            varr: "↕",
            vArr: "⇕",
            varrho: "ϱ",
            varsigma: "ς",
            varsubsetneq: "⊊︀",
            varsubsetneqq: "⫋︀",
            varsupsetneq: "⊋︀",
            varsupsetneqq: "⫌︀",
            vartheta: "ϑ",
            vartriangleleft: "⊲",
            vartriangleright: "⊳",
            vBar: "⫨",
            Vbar: "⫫",
            vBarv: "⫩",
            vcy: "в",
            Vcy: "В",
            vdash: "⊢",
            vDash: "⊨",
            Vdash: "⊩",
            VDash: "⊫",
            Vdashl: "⫦",
            vee: "∨",
            Vee: "⋁",
            veebar: "⊻",
            veeeq: "≚",
            vellip: "⋮",
            verbar: "|",
            Verbar: "‖",
            vert: "|",
            Vert: "‖",
            VerticalBar: "∣",
            VerticalLine: "|",
            VerticalSeparator: "❘",
            VerticalTilde: "≀",
            VeryThinSpace: " ",
            vfr: "\uD835\uDD33",
            Vfr: "\uD835\uDD19",
            vltri: "⊲",
            vnsub: "⊂⃒",
            vnsup: "⊃⃒",
            vopf: "\uD835\uDD67",
            Vopf: "\uD835\uDD4D",
            vprop: "∝",
            vrtri: "⊳",
            vscr: "\uD835\uDCCB",
            Vscr: "\uD835\uDCB1",
            vsubne: "⊊︀",
            vsubnE: "⫋︀",
            vsupne: "⊋︀",
            vsupnE: "⫌︀",
            Vvdash: "⊪",
            vzigzag: "⦚",
            wcirc: "ŵ",
            Wcirc: "Ŵ",
            wedbar: "⩟",
            wedge: "∧",
            Wedge: "⋀",
            wedgeq: "≙",
            weierp: "℘",
            wfr: "\uD835\uDD34",
            Wfr: "\uD835\uDD1A",
            wopf: "\uD835\uDD68",
            Wopf: "\uD835\uDD4E",
            wp: "℘",
            wr: "≀",
            wreath: "≀",
            wscr: "\uD835\uDCCC",
            Wscr: "\uD835\uDCB2",
            xcap: "⋂",
            xcirc: "◯",
            xcup: "⋃",
            xdtri: "▽",
            xfr: "\uD835\uDD35",
            Xfr: "\uD835\uDD1B",
            xharr: "⟷",
            xhArr: "⟺",
            xi: "ξ",
            Xi: "Ξ",
            xlarr: "⟵",
            xlArr: "⟸",
            xmap: "⟼",
            xnis: "⋻",
            xodot: "⨀",
            xopf: "\uD835\uDD69",
            Xopf: "\uD835\uDD4F",
            xoplus: "⨁",
            xotime: "⨂",
            xrarr: "⟶",
            xrArr: "⟹",
            xscr: "\uD835\uDCCD",
            Xscr: "\uD835\uDCB3",
            xsqcup: "⨆",
            xuplus: "⨄",
            xutri: "△",
            xvee: "⋁",
            xwedge: "⋀",
            yacute: "\xfd",
            Yacute: "\xdd",
            yacy: "я",
            YAcy: "Я",
            ycirc: "ŷ",
            Ycirc: "Ŷ",
            ycy: "ы",
            Ycy: "Ы",
            yen: "\xa5",
            yfr: "\uD835\uDD36",
            Yfr: "\uD835\uDD1C",
            yicy: "ї",
            YIcy: "Ї",
            yopf: "\uD835\uDD6A",
            Yopf: "\uD835\uDD50",
            yscr: "\uD835\uDCCE",
            Yscr: "\uD835\uDCB4",
            yucy: "ю",
            YUcy: "Ю",
            yuml: "\xff",
            Yuml: "Ÿ",
            zacute: "ź",
            Zacute: "Ź",
            zcaron: "ž",
            Zcaron: "Ž",
            zcy: "з",
            Zcy: "З",
            zdot: "ż",
            Zdot: "Ż",
            zeetrf: "ℨ",
            ZeroWidthSpace: "​",
            zeta: "ζ",
            Zeta: "Ζ",
            zfr: "\uD835\uDD37",
            Zfr: "ℨ",
            zhcy: "ж",
            ZHcy: "Ж",
            zigrarr: "⇝",
            zopf: "\uD835\uDD6B",
            Zopf: "ℤ",
            zscr: "\uD835\uDCCF",
            Zscr: "\uD835\uDCB5",
            zwj: "‍",
            zwnj: "‌"
        }, w = {
            aacute: "\xe1",
            Aacute: "\xc1",
            acirc: "\xe2",
            Acirc: "\xc2",
            acute: "\xb4",
            aelig: "\xe6",
            AElig: "\xc6",
            agrave: "\xe0",
            Agrave: "\xc0",
            amp: "&",
            AMP: "&",
            aring: "\xe5",
            Aring: "\xc5",
            atilde: "\xe3",
            Atilde: "\xc3",
            auml: "\xe4",
            Auml: "\xc4",
            brvbar: "\xa6",
            ccedil: "\xe7",
            Ccedil: "\xc7",
            cedil: "\xb8",
            cent: "\xa2",
            copy: "\xa9",
            COPY: "\xa9",
            curren: "\xa4",
            deg: "\xb0",
            divide: "\xf7",
            eacute: "\xe9",
            Eacute: "\xc9",
            ecirc: "\xea",
            Ecirc: "\xca",
            egrave: "\xe8",
            Egrave: "\xc8",
            eth: "\xf0",
            ETH: "\xd0",
            euml: "\xeb",
            Euml: "\xcb",
            frac12: "\xbd",
            frac14: "\xbc",
            frac34: "\xbe",
            gt: ">",
            GT: ">",
            iacute: "\xed",
            Iacute: "\xcd",
            icirc: "\xee",
            Icirc: "\xce",
            iexcl: "\xa1",
            igrave: "\xec",
            Igrave: "\xcc",
            iquest: "\xbf",
            iuml: "\xef",
            Iuml: "\xcf",
            laquo: "\xab",
            lt: "<",
            LT: "<",
            macr: "\xaf",
            micro: "\xb5",
            middot: "\xb7",
            nbsp: "\xa0",
            not: "\xac",
            ntilde: "\xf1",
            Ntilde: "\xd1",
            oacute: "\xf3",
            Oacute: "\xd3",
            ocirc: "\xf4",
            Ocirc: "\xd4",
            ograve: "\xf2",
            Ograve: "\xd2",
            ordf: "\xaa",
            ordm: "\xba",
            oslash: "\xf8",
            Oslash: "\xd8",
            otilde: "\xf5",
            Otilde: "\xd5",
            ouml: "\xf6",
            Ouml: "\xd6",
            para: "\xb6",
            plusmn: "\xb1",
            pound: "\xa3",
            quot: '"',
            QUOT: '"',
            raquo: "\xbb",
            reg: "\xae",
            REG: "\xae",
            sect: "\xa7",
            shy: "\xad",
            sup1: "\xb9",
            sup2: "\xb2",
            sup3: "\xb3",
            szlig: "\xdf",
            thorn: "\xfe",
            THORN: "\xde",
            times: "\xd7",
            uacute: "\xfa",
            Uacute: "\xda",
            ucirc: "\xfb",
            Ucirc: "\xdb",
            ugrave: "\xf9",
            Ugrave: "\xd9",
            uml: "\xa8",
            uuml: "\xfc",
            Uuml: "\xdc",
            yacute: "\xfd",
            Yacute: "\xdd",
            yen: "\xa5",
            yuml: "\xff"
        }, b = {
            0: "�",
            128: "€",
            130: "‚",
            131: "ƒ",
            132: "„",
            133: "…",
            134: "†",
            135: "‡",
            136: "ˆ",
            137: "‰",
            138: "Š",
            139: "‹",
            140: "Œ",
            142: "Ž",
            145: "‘",
            146: "’",
            147: "“",
            148: "”",
            149: "•",
            150: "–",
            151: "—",
            152: "˜",
            153: "™",
            154: "š",
            155: "›",
            156: "œ",
            158: "ž",
            159: "Ÿ"
        }, k = [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            11,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29,
            30,
            31,
            127,
            128,
            129,
            130,
            131,
            132,
            133,
            134,
            135,
            136,
            137,
            138,
            139,
            140,
            141,
            142,
            143,
            144,
            145,
            146,
            147,
            148,
            149,
            150,
            151,
            152,
            153,
            154,
            155,
            156,
            157,
            158,
            159,
            64976,
            64977,
            64978,
            64979,
            64980,
            64981,
            64982,
            64983,
            64984,
            64985,
            64986,
            64987,
            64988,
            64989,
            64990,
            64991,
            64992,
            64993,
            64994,
            64995,
            64996,
            64997,
            64998,
            64999,
            65e3,
            65001,
            65002,
            65003,
            65004,
            65005,
            65006,
            65007,
            65534,
            65535,
            131070,
            131071,
            196606,
            196607,
            262142,
            262143,
            327678,
            327679,
            393214,
            393215,
            458750,
            458751,
            524286,
            524287,
            589822,
            589823,
            655358,
            655359,
            720894,
            720895,
            786430,
            786431,
            851966,
            851967,
            917502,
            917503,
            983038,
            983039,
            1048574,
            1048575,
            1114110,
            1114111
        ], C = String.fromCharCode, u = {}, i = u.hasOwnProperty, n = function n(v, T) {
            return i.call(v, T);
        }, o = function o(v, T) {
            for(var j = -1, P = v.length; ++j < P;)if (v[j] == T) return !0;
            return !1;
        }, f = function f(v, T) {
            if (!v) return T;
            var j = {}, P;
            for(P in T)j[P] = n(v, P) ? v[P] : T[P];
            return j;
        }, h = function h(v, T) {
            var j = "";
            return v >= 55296 && v <= 57343 || v > 1114111 ? (T && B("character reference outside the permissible Unicode range"), "�") : n(b, v) ? (T && B("disallowed character reference"), b[v]) : (T && o(k, v) && B("disallowed character reference"), v > 65535 && (v -= 65536, j += C(v >>> 10 & 1023 | 55296), v = 56320 | v & 1023), j += C(v), j);
        }, s = function s(v) {
            return "&#x" + v.toString(16).toUpperCase() + ";";
        }, g = function g(v) {
            return "&#" + v + ";";
        }, B = function B(v) {
            throw Error("Parse error: " + v);
        }, S = function S1(v, T) {
            T = f(T, S.options);
            var j = T.strict;
            j && q.test(v) && B("forbidden code point");
            var P = T.encodeEverything, z = T.useNamedReferences, H = T.allowUnsafeSymbols, U = T.decimal ? g : s, O = function O(I) {
                return U(I.charCodeAt(0));
            };
            return P ? (v = v.replace(p, function(I) {
                return z && n(D, I) ? "&" + D[I] + ";" : O(I);
            }), z && (v = v.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;").replace(/&#x66;&#x6A;/g, "&fjlig;")), z && (v = v.replace(m, function(I) {
                return "&" + D[I] + ";";
            }))) : z ? (H || (v = v.replace(A, function(I) {
                return "&" + D[I] + ";";
            })), v = v.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;"), v = v.replace(m, function(I) {
                return "&" + D[I] + ";";
            })) : H || (v = v.replace(A, O)), v.replace(t, function(I) {
                var G = I.charCodeAt(0), V = I.charCodeAt(1), Q = (G - 55296) * 1024 + V - 56320 + 65536;
                return U(Q);
            }).replace(c, O);
        };
        S.options = {
            allowUnsafeSymbols: !1,
            encodeEverything: !1,
            strict: !1,
            useNamedReferences: !1,
            decimal: !1
        };
        var x = function x1(v, T) {
            T = f(T, x.options);
            var j = T.strict;
            return j && _.test(v) && B("malformed character reference"), v.replace(F, function(P, z, H, U, O, I, G, V, Q) {
                var ee, X, de, he, Ce, ye;
                return z ? (Ce = z, R[Ce]) : H ? (Ce = H, ye = U, ye && T.isAttributeValue ? (j && ye == "=" && B("`&` did not start a character reference"), P) : (j && B("named character reference was not terminated by a semicolon"), w[Ce] + (ye || ""))) : O ? (de = O, X = I, j && !X && B("character reference was not terminated by a semicolon"), ee = parseInt(de, 10), h(ee, j)) : G ? (he = G, X = V, j && !X && B("character reference was not terminated by a semicolon"), ee = parseInt(he, 16), h(ee, j)) : (j && B("named character reference was not terminated by a semicolon"), P);
            });
        };
        x.options = {
            isAttributeValue: !1,
            strict: !1
        };
        var L = function L(v) {
            return v.replace(A, function(T) {
                return y[T];
            });
        }, l = {
            version: "1.2.0",
            encode: S,
            decode: x,
            escape: L,
            unescape: x
        };
        if (typeof define == "function" && typeof define.amd == "object" && define.amd) define(function() {
            return l;
        });
        else if (a && !a.nodeType) if (r) r.exports = l;
        else for(var E in l)n(l, E) && (a[E] = l[E]);
        else e.he = l;
    })(Re);
});
var sr = ie(me(), 1);
function Au(e) {
    return (typeof e === "undefined" ? "undefined" : _type_of(e)) > "u" || e === null;
}
function br(e) {
    return typeof e == "object" && e !== null;
}
function wr(e) {
    return Array.isArray(e) ? e : Au(e) ? [] : [
        e
    ];
}
function Ar(e, a) {
    var r, d, t, p;
    if (a) for(p = Object.keys(a), r = 0, d = p.length; r < d; r += 1)t = p[r], e[t] = a[t];
    return e;
}
function vr(e, a) {
    var r = "", d;
    for(d = 0; d < a; d += 1)r += e;
    return r;
}
function Cr(e) {
    return e === 0 && Number.NEGATIVE_INFINITY === 1 / e;
}
var yr = Au, _r = br, Er = wr, kr = vr, xr = Cr, Fr = Ar, Y = {
    isNothing: yr,
    isObject: _r,
    toArray: Er,
    repeat: kr,
    isNegativeZero: xr,
    extend: Fr
};
function vu(e, a) {
    var r = "", d = e.reason || "(unknown reason)";
    return e.mark ? (e.mark.name && (r += 'in "' + e.mark.name + '" '), r += "(" + (e.mark.line + 1) + ":" + (e.mark.column + 1) + ")", !a && e.mark.snippet && (r += "\n\n" + e.mark.snippet), d + " " + r) : d;
}
function De(e, a) {
    Error.call(this), this.name = "YAMLException", this.reason = e, this.mark = a, this.message = vu(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
De.prototype = Object.create(Error.prototype);
De.prototype.constructor = De;
De.prototype.toString = function(a) {
    return this.name + ": " + vu(this, a);
};
var J = De;
function je(e, a, r, d, t) {
    var p = "", c = "", m = Math.floor(t / 2) - 1;
    return d - a > m && (p = " ... ", a = d - m + p.length), r - d > m && (c = " ...", r = d + m - c.length), {
        str: p + e.slice(a, r).replace(/\t/g, "→") + c,
        pos: d - a + p.length
    };
}
function Ne(e, a) {
    return Y.repeat(" ", a - e.length) + e;
}
function Br(e, a) {
    if (a = Object.create(a || null), !e.buffer) return null;
    a.maxLength || (a.maxLength = 79), typeof a.indent != "number" && (a.indent = 1), typeof a.linesBefore != "number" && (a.linesBefore = 3), typeof a.linesAfter != "number" && (a.linesAfter = 2);
    for(var r = /\r?\n|\r|\0/g, d = [
        0
    ], t = [], p, c = -1; p = r.exec(e.buffer);)t.push(p.index), d.push(p.index + p[0].length), e.position <= p.index && c < 0 && (c = d.length - 2);
    c < 0 && (c = d.length - 1);
    var m = "", D, A, y = Math.min(e.line + a.linesAfter, t.length).toString().length, _ = a.maxLength - (a.indent + y + 3);
    for(D = 1; D <= a.linesBefore && !(c - D < 0); D++)A = je(e.buffer, d[c - D], t[c - D], e.position - (d[c] - d[c - D]), _), m = Y.repeat(" ", a.indent) + Ne((e.line - D + 1).toString(), y) + " | " + A.str + "\n" + m;
    for(A = je(e.buffer, d[c], t[c], e.position, _), m += Y.repeat(" ", a.indent) + Ne((e.line + 1).toString(), y) + " | " + A.str + "\n", m += Y.repeat("-", a.indent + y + 3 + A.pos) + "^\n", D = 1; D <= a.linesAfter && !(c + D >= t.length); D++)A = je(e.buffer, d[c + D], t[c + D], e.position - (d[c] - d[c + D]), _), m += Y.repeat(" ", a.indent) + Ne((e.line + D + 1).toString(), y) + " | " + A.str + "\n";
    return m.replace(/\n$/, "");
}
var Sr = Br, qr = [
    "kind",
    "multi",
    "resolve",
    "construct",
    "instanceOf",
    "predicate",
    "represent",
    "representName",
    "defaultStyle",
    "styleAliases"
], Lr = [
    "scalar",
    "sequence",
    "mapping"
];
function Tr(e) {
    var a = {};
    return e !== null && Object.keys(e).forEach(function(r) {
        e[r].forEach(function(d) {
            a[String(d)] = r;
        });
    }), a;
}
function Rr(e, a) {
    if (a = a || {}, Object.keys(a).forEach(function(r) {
        if (qr.indexOf(r) === -1) throw new J('Unknown option "' + r + '" is met in definition of "' + e + '" YAML type.');
    }), this.options = a, this.tag = e, this.kind = a.kind || null, this.resolve = a.resolve || function() {
        return !0;
    }, this.construct = a.construct || function(r) {
        return r;
    }, this.instanceOf = a.instanceOf || null, this.predicate = a.predicate || null, this.represent = a.represent || null, this.representName = a.representName || null, this.defaultStyle = a.defaultStyle || null, this.multi = a.multi || !1, this.styleAliases = Tr(a.styleAliases || null), Lr.indexOf(this.kind) === -1) throw new J('Unknown kind "' + this.kind + '" is specified for "' + e + '" YAML type.');
}
var W = Rr;
function iu(e, a) {
    var r = [];
    return e[a].forEach(function(d) {
        var t = r.length;
        r.forEach(function(p, c) {
            p.tag === d.tag && p.kind === d.kind && p.multi === d.multi && (t = c);
        }), r[t] = d;
    }), r;
}
function Pr() {
    var e = {
        scalar: {},
        sequence: {},
        mapping: {},
        fallback: {},
        multi: {
            scalar: [],
            sequence: [],
            mapping: [],
            fallback: []
        }
    }, a, r;
    function d(t) {
        t.multi ? (e.multi[t.kind].push(t), e.multi.fallback.push(t)) : e[t.kind][t.tag] = e.fallback[t.tag] = t;
    }
    for(a = 0, r = arguments.length; a < r; a += 1)arguments[a].forEach(d);
    return e;
}
function Ie(e) {
    return this.extend(e);
}
Ie.prototype.extend = function(a) {
    var r = [], d = [];
    if (_instanceof(a, W)) d.push(a);
    else if (Array.isArray(a)) d = d.concat(a);
    else if (a && (Array.isArray(a.implicit) || Array.isArray(a.explicit))) a.implicit && (r = r.concat(a.implicit)), a.explicit && (d = d.concat(a.explicit));
    else throw new J("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
    r.forEach(function(p) {
        if (!_instanceof(p, W)) throw new J("Specified list of YAML types (or a single Type object) contains a non-Type object.");
        if (p.loadKind && p.loadKind !== "scalar") throw new J("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
        if (p.multi) throw new J("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
    }), d.forEach(function(p) {
        if (!_instanceof(p, W)) throw new J("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    });
    var t = Object.create(Ie.prototype);
    return t.implicit = (this.implicit || []).concat(r), t.explicit = (this.explicit || []).concat(d), t.compiledImplicit = iu(t, "implicit"), t.compiledExplicit = iu(t, "explicit"), t.compiledTypeMap = Pr(t.compiledImplicit, t.compiledExplicit), t;
};
var jr = Ie, Nr = new W("tag:yaml.org,2002:str", {
    kind: "scalar",
    construct: function construct(e) {
        return e !== null ? e : "";
    }
}), Mr = new W("tag:yaml.org,2002:seq", {
    kind: "sequence",
    construct: function construct(e) {
        return e !== null ? e : [];
    }
}), Ir = new W("tag:yaml.org,2002:map", {
    kind: "mapping",
    construct: function construct(e) {
        return e !== null ? e : {};
    }
}), zr = new jr({
    explicit: [
        Nr,
        Mr,
        Ir
    ]
});
function Or(e) {
    if (e === null) return !0;
    var a = e.length;
    return a === 1 && e === "~" || a === 4 && (e === "null" || e === "Null" || e === "NULL");
}
function Hr() {
    return null;
}
function Gr(e) {
    return e === null;
}
var Ur = new W("tag:yaml.org,2002:null", {
    kind: "scalar",
    resolve: Or,
    construct: Hr,
    predicate: Gr,
    represent: {
        canonical: function canonical() {
            return "~";
        },
        lowercase: function lowercase() {
            return "null";
        },
        uppercase: function uppercase() {
            return "NULL";
        },
        camelcase: function camelcase() {
            return "Null";
        },
        empty: function empty() {
            return "";
        }
    },
    defaultStyle: "lowercase"
});
function Vr(e) {
    if (e === null) return !1;
    var a = e.length;
    return a === 4 && (e === "true" || e === "True" || e === "TRUE") || a === 5 && (e === "false" || e === "False" || e === "FALSE");
}
function $r(e) {
    return e === "true" || e === "True" || e === "TRUE";
}
function Yr(e) {
    return Object.prototype.toString.call(e) === "[object Boolean]";
}
var Wr = new W("tag:yaml.org,2002:bool", {
    kind: "scalar",
    resolve: Vr,
    construct: $r,
    predicate: Yr,
    represent: {
        lowercase: function lowercase(e) {
            return e ? "true" : "false";
        },
        uppercase: function uppercase(e) {
            return e ? "TRUE" : "FALSE";
        },
        camelcase: function camelcase(e) {
            return e ? "True" : "False";
        }
    },
    defaultStyle: "lowercase"
});
function Kr(e) {
    return 48 <= e && e <= 57 || 65 <= e && e <= 70 || 97 <= e && e <= 102;
}
function Jr(e) {
    return 48 <= e && e <= 55;
}
function Zr(e) {
    return 48 <= e && e <= 57;
}
function Qr(e) {
    if (e === null) return !1;
    var a = e.length, r = 0, d = !1, t;
    if (!a) return !1;
    if (t = e[r], (t === "-" || t === "+") && (t = e[++r]), t === "0") {
        if (r + 1 === a) return !0;
        if (t = e[++r], t === "b") {
            for(r++; r < a; r++)if (t = e[r], t !== "_") {
                if (t !== "0" && t !== "1") return !1;
                d = !0;
            }
            return d && t !== "_";
        }
        if (t === "x") {
            for(r++; r < a; r++)if (t = e[r], t !== "_") {
                if (!Kr(e.charCodeAt(r))) return !1;
                d = !0;
            }
            return d && t !== "_";
        }
        if (t === "o") {
            for(r++; r < a; r++)if (t = e[r], t !== "_") {
                if (!Jr(e.charCodeAt(r))) return !1;
                d = !0;
            }
            return d && t !== "_";
        }
    }
    if (t === "_") return !1;
    for(; r < a; r++)if (t = e[r], t !== "_") {
        if (!Zr(e.charCodeAt(r))) return !1;
        d = !0;
    }
    return !(!d || t === "_");
}
function Xr(e) {
    var a = e, r = 1, d;
    if (a.indexOf("_") !== -1 && (a = a.replace(/_/g, "")), d = a[0], (d === "-" || d === "+") && (d === "-" && (r = -1), a = a.slice(1), d = a[0]), a === "0") return 0;
    if (d === "0") {
        if (a[1] === "b") return r * parseInt(a.slice(2), 2);
        if (a[1] === "x") return r * parseInt(a.slice(2), 16);
        if (a[1] === "o") return r * parseInt(a.slice(2), 8);
    }
    return r * parseInt(a, 10);
}
function ea(e) {
    return Object.prototype.toString.call(e) === "[object Number]" && e % 1 === 0 && !Y.isNegativeZero(e);
}
var ua = new W("tag:yaml.org,2002:int", {
    kind: "scalar",
    resolve: Qr,
    construct: Xr,
    predicate: ea,
    represent: {
        binary: function binary(e) {
            return e >= 0 ? "0b" + e.toString(2) : "-0b" + e.toString(2).slice(1);
        },
        octal: function octal(e) {
            return e >= 0 ? "0o" + e.toString(8) : "-0o" + e.toString(8).slice(1);
        },
        decimal: function decimal(e) {
            return e.toString(10);
        },
        hexadecimal: function hexadecimal(e) {
            return e >= 0 ? "0x" + e.toString(16).toUpperCase() : "-0x" + e.toString(16).toUpperCase().slice(1);
        }
    },
    defaultStyle: "decimal",
    styleAliases: {
        binary: [
            2,
            "bin"
        ],
        octal: [
            8,
            "oct"
        ],
        decimal: [
            10,
            "dec"
        ],
        hexadecimal: [
            16,
            "hex"
        ]
    }
}), ra = new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
function aa(e) {
    return !(e === null || !ra.test(e) || e[e.length - 1] === "_");
}
function na(e) {
    var a, r;
    return a = e.replace(/_/g, "").toLowerCase(), r = a[0] === "-" ? -1 : 1, "+-".indexOf(a[0]) >= 0 && (a = a.slice(1)), a === ".inf" ? r === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : a === ".nan" ? NaN : r * parseFloat(a, 10);
}
var ia = /^[-+]?[0-9]+e/;
function ta(e, a) {
    var r;
    if (isNaN(e)) switch(a){
        case "lowercase":
            return ".nan";
        case "uppercase":
            return ".NAN";
        case "camelcase":
            return ".NaN";
    }
    else if (Number.POSITIVE_INFINITY === e) switch(a){
        case "lowercase":
            return ".inf";
        case "uppercase":
            return ".INF";
        case "camelcase":
            return ".Inf";
    }
    else if (Number.NEGATIVE_INFINITY === e) switch(a){
        case "lowercase":
            return "-.inf";
        case "uppercase":
            return "-.INF";
        case "camelcase":
            return "-.Inf";
    }
    else if (Y.isNegativeZero(e)) return "-0.0";
    return r = e.toString(10), ia.test(r) ? r.replace("e", ".e") : r;
}
function oa(e) {
    return Object.prototype.toString.call(e) === "[object Number]" && (e % 1 !== 0 || Y.isNegativeZero(e));
}
var da = new W("tag:yaml.org,2002:float", {
    kind: "scalar",
    resolve: aa,
    construct: na,
    predicate: oa,
    represent: ta,
    defaultStyle: "lowercase"
}), la = zr.extend({
    implicit: [
        Ur,
        Wr,
        ua,
        da
    ]
}), ca = la, Cu = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"), yu = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
function sa(e) {
    return e === null ? !1 : Cu.exec(e) !== null || yu.exec(e) !== null;
}
function fa(e) {
    var a, r, d, t, p, c, m, D = 0, A = null, y, _, q;
    if (a = Cu.exec(e), a === null && (a = yu.exec(e)), a === null) throw new Error("Date resolve error");
    if (r = +a[1], d = +a[2] - 1, t = +a[3], !a[4]) return new Date(Date.UTC(r, d, t));
    if (p = +a[4], c = +a[5], m = +a[6], a[7]) {
        for(D = a[7].slice(0, 3); D.length < 3;)D += "0";
        D = +D;
    }
    return a[9] && (y = +a[10], _ = +(a[11] || 0), A = (y * 60 + _) * 6e4, a[9] === "-" && (A = -A)), q = new Date(Date.UTC(r, d, t, p, c, m, D)), A && q.setTime(q.getTime() - A), q;
}
function pa(e) {
    return e.toISOString();
}
var ha = new W("tag:yaml.org,2002:timestamp", {
    kind: "scalar",
    resolve: sa,
    construct: fa,
    instanceOf: Date,
    represent: pa
});
function ma(e) {
    return e === "<<" || e === null;
}
var ga = new W("tag:yaml.org,2002:merge", {
    kind: "scalar",
    resolve: ma
}), Ue = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
function Da(e) {
    if (e === null) return !1;
    var a, r, d = 0, t = e.length, p = Ue;
    for(r = 0; r < t; r++)if (a = p.indexOf(e.charAt(r)), !(a > 64)) {
        if (a < 0) return !1;
        d += 6;
    }
    return d % 8 === 0;
}
function ba(e) {
    var a, r, d = e.replace(/[\r\n=]/g, ""), t = d.length, p = Ue, c = 0, m = [];
    for(a = 0; a < t; a++)a % 4 === 0 && a && (m.push(c >> 16 & 255), m.push(c >> 8 & 255), m.push(c & 255)), c = c << 6 | p.indexOf(d.charAt(a));
    return r = t % 4 * 6, r === 0 ? (m.push(c >> 16 & 255), m.push(c >> 8 & 255), m.push(c & 255)) : r === 18 ? (m.push(c >> 10 & 255), m.push(c >> 2 & 255)) : r === 12 && m.push(c >> 4 & 255), new Uint8Array(m);
}
function wa(e) {
    var a = "", r = 0, d, t, p = e.length, c = Ue;
    for(d = 0; d < p; d++)d % 3 === 0 && d && (a += c[r >> 18 & 63], a += c[r >> 12 & 63], a += c[r >> 6 & 63], a += c[r & 63]), r = (r << 8) + e[d];
    return t = p % 3, t === 0 ? (a += c[r >> 18 & 63], a += c[r >> 12 & 63], a += c[r >> 6 & 63], a += c[r & 63]) : t === 2 ? (a += c[r >> 10 & 63], a += c[r >> 4 & 63], a += c[r << 2 & 63], a += c[64]) : t === 1 && (a += c[r >> 2 & 63], a += c[r << 4 & 63], a += c[64], a += c[64]), a;
}
function Aa(e) {
    return Object.prototype.toString.call(e) === "[object Uint8Array]";
}
var va = new W("tag:yaml.org,2002:binary", {
    kind: "scalar",
    resolve: Da,
    construct: ba,
    predicate: Aa,
    represent: wa
}), Ca = Object.prototype.hasOwnProperty, ya = Object.prototype.toString;
function _a(e) {
    if (e === null) return !0;
    var a = [], r, d, t, p, c, m = e;
    for(r = 0, d = m.length; r < d; r += 1){
        if (t = m[r], c = !1, ya.call(t) !== "[object Object]") return !1;
        for(p in t)if (Ca.call(t, p)) if (!c) c = !0;
        else return !1;
        if (!c) return !1;
        if (a.indexOf(p) === -1) a.push(p);
        else return !1;
    }
    return !0;
}
function Ea(e) {
    return e !== null ? e : [];
}
var ka = new W("tag:yaml.org,2002:omap", {
    kind: "sequence",
    resolve: _a,
    construct: Ea
}), xa = Object.prototype.toString;
function Fa(e) {
    if (e === null) return !0;
    var a, r, d, t, p, c = e;
    for(p = new Array(c.length), a = 0, r = c.length; a < r; a += 1){
        if (d = c[a], xa.call(d) !== "[object Object]" || (t = Object.keys(d), t.length !== 1)) return !1;
        p[a] = [
            t[0],
            d[t[0]]
        ];
    }
    return !0;
}
function Ba(e) {
    if (e === null) return [];
    var a, r, d, t, p, c = e;
    for(p = new Array(c.length), a = 0, r = c.length; a < r; a += 1)d = c[a], t = Object.keys(d), p[a] = [
        t[0],
        d[t[0]]
    ];
    return p;
}
var Sa = new W("tag:yaml.org,2002:pairs", {
    kind: "sequence",
    resolve: Fa,
    construct: Ba
}), qa = Object.prototype.hasOwnProperty;
function La(e) {
    if (e === null) return !0;
    var a, r = e;
    for(a in r)if (qa.call(r, a) && r[a] !== null) return !1;
    return !0;
}
function Ta(e) {
    return e !== null ? e : {};
}
var Ra = new W("tag:yaml.org,2002:set", {
    kind: "mapping",
    resolve: La,
    construct: Ta
}), _u = ca.extend({
    implicit: [
        ha,
        ga
    ],
    explicit: [
        va,
        ka,
        Sa,
        Ra
    ]
}), ne = Object.prototype.hasOwnProperty, ke = 1, Eu = 2, ku = 3, xe = 4, Me = 1, Pa = 2, tu = 3, ja = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, Na = /[\x85\u2028\u2029]/, Ma = /[,\[\]\{\}]/, xu = /^(?:!|!!|![a-z\-]+!)$/i, Fu = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function ou(e) {
    return Object.prototype.toString.call(e);
}
function ue(e) {
    return e === 10 || e === 13;
}
function oe(e) {
    return e === 9 || e === 32;
}
function Z(e) {
    return e === 9 || e === 32 || e === 10 || e === 13;
}
function se(e) {
    return e === 44 || e === 91 || e === 93 || e === 123 || e === 125;
}
function Ia(e) {
    var a;
    return 48 <= e && e <= 57 ? e - 48 : (a = e | 32, 97 <= a && a <= 102 ? a - 97 + 10 : -1);
}
function za(e) {
    return e === 120 ? 2 : e === 117 ? 4 : e === 85 ? 8 : 0;
}
function Oa(e) {
    return 48 <= e && e <= 57 ? e - 48 : -1;
}
function du(e) {
    return e === 48 ? "\x00" : e === 97 ? "\x07" : e === 98 ? "\b" : e === 116 || e === 9 ? "	" : e === 110 ? "\n" : e === 118 ? "\v" : e === 102 ? "\f" : e === 114 ? "\r" : e === 101 ? "\x1b" : e === 32 ? " " : e === 34 ? '"' : e === 47 ? "/" : e === 92 ? "\\" : e === 78 ? "\x85" : e === 95 ? "\xa0" : e === 76 ? "\u2028" : e === 80 ? "\u2029" : "";
}
function Ha(e) {
    return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode((e - 65536 >> 10) + 55296, (e - 65536 & 1023) + 56320);
}
var Bu = new Array(256), Su = new Array(256);
for(te = 0; te < 256; te++)Bu[te] = du(te) ? 1 : 0, Su[te] = du(te);
var te;
function Ga(e, a) {
    this.input = e, this.filename = a.filename || null, this.schema = a.schema || _u, this.onWarning = a.onWarning || null, this.legacy = a.legacy || !1, this.json = a.json || !1, this.listener = a.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function qu(e, a) {
    var r = {
        name: e.filename,
        buffer: e.input.slice(0, -1),
        position: e.position,
        line: e.line,
        column: e.position - e.lineStart
    };
    return r.snippet = Sr(r), new J(a, r);
}
function M(e, a) {
    throw qu(e, a);
}
function Fe(e, a) {
    e.onWarning && e.onWarning.call(null, qu(e, a));
}
var lu = {
    YAML: function YAML(a, r, d) {
        var t, p, c;
        a.version !== null && M(a, "duplication of %YAML directive"), d.length !== 1 && M(a, "YAML directive accepts exactly one argument"), t = /^([0-9]+)\.([0-9]+)$/.exec(d[0]), t === null && M(a, "ill-formed argument of the YAML directive"), p = parseInt(t[1], 10), c = parseInt(t[2], 10), p !== 1 && M(a, "unacceptable YAML version of the document"), a.version = d[0], a.checkLineBreaks = c < 2, c !== 1 && c !== 2 && Fe(a, "unsupported YAML version of the document");
    },
    TAG: function TAG(a, r, d) {
        var t, p;
        d.length !== 2 && M(a, "TAG directive accepts exactly two arguments"), t = d[0], p = d[1], xu.test(t) || M(a, "ill-formed tag handle (first argument) of the TAG directive"), ne.call(a.tagMap, t) && M(a, 'there is a previously declared suffix for "' + t + '" tag handle'), Fu.test(p) || M(a, "ill-formed tag prefix (second argument) of the TAG directive");
        try {
            p = decodeURIComponent(p);
        } catch (e) {
            M(a, "tag prefix is malformed: " + p);
        }
        a.tagMap[t] = p;
    }
};
function ae(e, a, r, d) {
    var t, p, c, m;
    if (a < r) {
        if (m = e.input.slice(a, r), d) for(t = 0, p = m.length; t < p; t += 1)c = m.charCodeAt(t), c === 9 || 32 <= c && c <= 1114111 || M(e, "expected valid JSON character");
        else ja.test(m) && M(e, "the stream contains non-printable characters");
        e.result += m;
    }
}
function cu(e, a, r, d) {
    var t, p, c, m;
    for(Y.isObject(r) || M(e, "cannot merge mappings; the provided source object is unacceptable"), t = Object.keys(r), c = 0, m = t.length; c < m; c += 1)p = t[c], ne.call(a, p) || (a[p] = r[p], d[p] = !0);
}
function fe(e, a, r, d, t, p, c, m, D) {
    var A, y;
    if (Array.isArray(t)) for(t = Array.prototype.slice.call(t), A = 0, y = t.length; A < y; A += 1)Array.isArray(t[A]) && M(e, "nested arrays are not supported inside keys"), typeof t == "object" && ou(t[A]) === "[object Object]" && (t[A] = "[object Object]");
    if (typeof t == "object" && ou(t) === "[object Object]" && (t = "[object Object]"), t = String(t), a === null && (a = {}), d === "tag:yaml.org,2002:merge") if (Array.isArray(p)) for(A = 0, y = p.length; A < y; A += 1)cu(e, a, p[A], r);
    else cu(e, a, p, r);
    else !e.json && !ne.call(r, t) && ne.call(a, t) && (e.line = c || e.line, e.lineStart = m || e.lineStart, e.position = D || e.position, M(e, "duplicated mapping key")), t === "__proto__" ? Object.defineProperty(a, t, {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: p
    }) : a[t] = p, delete r[t];
    return a;
}
function Ve(e) {
    var a;
    a = e.input.charCodeAt(e.position), a === 10 ? e.position++ : a === 13 ? (e.position++, e.input.charCodeAt(e.position) === 10 && e.position++) : M(e, "a line break is expected"), e.line += 1, e.lineStart = e.position, e.firstTabInLine = -1;
}
function $(e, a, r) {
    for(var d = 0, t = e.input.charCodeAt(e.position); t !== 0;){
        for(; oe(t);)t === 9 && e.firstTabInLine === -1 && (e.firstTabInLine = e.position), t = e.input.charCodeAt(++e.position);
        if (a && t === 35) do t = e.input.charCodeAt(++e.position);
        while (t !== 10 && t !== 13 && t !== 0);
        if (ue(t)) for(Ve(e), t = e.input.charCodeAt(e.position), d++, e.lineIndent = 0; t === 32;)e.lineIndent++, t = e.input.charCodeAt(++e.position);
        else break;
    }
    return r !== -1 && d !== 0 && e.lineIndent < r && Fe(e, "deficient indentation"), d;
}
function qe(e) {
    var a = e.position, r;
    return r = e.input.charCodeAt(a), !!((r === 45 || r === 46) && r === e.input.charCodeAt(a + 1) && r === e.input.charCodeAt(a + 2) && (a += 3, r = e.input.charCodeAt(a), r === 0 || Z(r)));
}
function $e(e, a) {
    a === 1 ? e.result += " " : a > 1 && (e.result += Y.repeat("\n", a - 1));
}
function Ua(e, a, r) {
    var d, t, p, c, m, D, A, y, _ = e.kind, q = e.result, F;
    if (F = e.input.charCodeAt(e.position), Z(F) || se(F) || F === 35 || F === 38 || F === 42 || F === 33 || F === 124 || F === 62 || F === 39 || F === 34 || F === 37 || F === 64 || F === 96 || (F === 63 || F === 45) && (t = e.input.charCodeAt(e.position + 1), Z(t) || r && se(t))) return !1;
    for(e.kind = "scalar", e.result = "", p = c = e.position, m = !1; F !== 0;){
        if (F === 58) {
            if (t = e.input.charCodeAt(e.position + 1), Z(t) || r && se(t)) break;
        } else if (F === 35) {
            if (d = e.input.charCodeAt(e.position - 1), Z(d)) break;
        } else {
            if (e.position === e.lineStart && qe(e) || r && se(F)) break;
            if (ue(F)) if (D = e.line, A = e.lineStart, y = e.lineIndent, $(e, !1, -1), e.lineIndent >= a) {
                m = !0, F = e.input.charCodeAt(e.position);
                continue;
            } else {
                e.position = c, e.line = D, e.lineStart = A, e.lineIndent = y;
                break;
            }
        }
        m && (ae(e, p, c, !1), $e(e, e.line - D), p = c = e.position, m = !1), oe(F) || (c = e.position + 1), F = e.input.charCodeAt(++e.position);
    }
    return ae(e, p, c, !1), e.result ? !0 : (e.kind = _, e.result = q, !1);
}
function Va(e, a) {
    var r, d, t;
    if (r = e.input.charCodeAt(e.position), r !== 39) return !1;
    for(e.kind = "scalar", e.result = "", e.position++, d = t = e.position; (r = e.input.charCodeAt(e.position)) !== 0;)if (r === 39) if (ae(e, d, e.position, !0), r = e.input.charCodeAt(++e.position), r === 39) d = e.position, e.position++, t = e.position;
    else return !0;
    else ue(r) ? (ae(e, d, t, !0), $e(e, $(e, !1, a)), d = t = e.position) : e.position === e.lineStart && qe(e) ? M(e, "unexpected end of the document within a single quoted scalar") : (e.position++, t = e.position);
    M(e, "unexpected end of the stream within a single quoted scalar");
}
function $a(e, a) {
    var r, d, t, p, c, m;
    if (m = e.input.charCodeAt(e.position), m !== 34) return !1;
    for(e.kind = "scalar", e.result = "", e.position++, r = d = e.position; (m = e.input.charCodeAt(e.position)) !== 0;){
        if (m === 34) return ae(e, r, e.position, !0), e.position++, !0;
        if (m === 92) {
            if (ae(e, r, e.position, !0), m = e.input.charCodeAt(++e.position), ue(m)) $(e, !1, a);
            else if (m < 256 && Bu[m]) e.result += Su[m], e.position++;
            else if ((c = za(m)) > 0) {
                for(t = c, p = 0; t > 0; t--)m = e.input.charCodeAt(++e.position), (c = Ia(m)) >= 0 ? p = (p << 4) + c : M(e, "expected hexadecimal character");
                e.result += Ha(p), e.position++;
            } else M(e, "unknown escape sequence");
            r = d = e.position;
        } else ue(m) ? (ae(e, r, d, !0), $e(e, $(e, !1, a)), r = d = e.position) : e.position === e.lineStart && qe(e) ? M(e, "unexpected end of the document within a double quoted scalar") : (e.position++, d = e.position);
    }
    M(e, "unexpected end of the stream within a double quoted scalar");
}
function Ya(e, a) {
    var r = !0, d, t, p, c = e.tag, m, D = e.anchor, A, y, _, q, F, R = Object.create(null), w, b, k, C;
    if (C = e.input.charCodeAt(e.position), C === 91) y = 93, F = !1, m = [];
    else if (C === 123) y = 125, F = !0, m = {};
    else return !1;
    for(e.anchor !== null && (e.anchorMap[e.anchor] = m), C = e.input.charCodeAt(++e.position); C !== 0;){
        if ($(e, !0, a), C = e.input.charCodeAt(e.position), C === y) return e.position++, e.tag = c, e.anchor = D, e.kind = F ? "mapping" : "sequence", e.result = m, !0;
        r ? C === 44 && M(e, "expected the node content, but found ','") : M(e, "missed comma between flow collection entries"), b = w = k = null, _ = q = !1, C === 63 && (A = e.input.charCodeAt(e.position + 1), Z(A) && (_ = q = !0, e.position++, $(e, !0, a))), d = e.line, t = e.lineStart, p = e.position, pe(e, a, ke, !1, !0), b = e.tag, w = e.result, $(e, !0, a), C = e.input.charCodeAt(e.position), (q || e.line === d) && C === 58 && (_ = !0, C = e.input.charCodeAt(++e.position), $(e, !0, a), pe(e, a, ke, !1, !0), k = e.result), F ? fe(e, m, R, b, w, k, d, t, p) : _ ? m.push(fe(e, null, R, b, w, k, d, t, p)) : m.push(w), $(e, !0, a), C = e.input.charCodeAt(e.position), C === 44 ? (r = !0, C = e.input.charCodeAt(++e.position)) : r = !1;
    }
    M(e, "unexpected end of the stream within a flow collection");
}
function Wa(e, a) {
    var r, d, t = Me, p = !1, c = !1, m = a, D = 0, A = !1, y, _;
    if (_ = e.input.charCodeAt(e.position), _ === 124) d = !1;
    else if (_ === 62) d = !0;
    else return !1;
    for(e.kind = "scalar", e.result = ""; _ !== 0;)if (_ = e.input.charCodeAt(++e.position), _ === 43 || _ === 45) Me === t ? t = _ === 43 ? tu : Pa : M(e, "repeat of a chomping mode identifier");
    else if ((y = Oa(_)) >= 0) y === 0 ? M(e, "bad explicit indentation width of a block scalar; it cannot be less than one") : c ? M(e, "repeat of an indentation width identifier") : (m = a + y - 1, c = !0);
    else break;
    if (oe(_)) {
        do _ = e.input.charCodeAt(++e.position);
        while (oe(_));
        if (_ === 35) do _ = e.input.charCodeAt(++e.position);
        while (!ue(_) && _ !== 0);
    }
    for(; _ !== 0;){
        for(Ve(e), e.lineIndent = 0, _ = e.input.charCodeAt(e.position); (!c || e.lineIndent < m) && _ === 32;)e.lineIndent++, _ = e.input.charCodeAt(++e.position);
        if (!c && e.lineIndent > m && (m = e.lineIndent), ue(_)) {
            D++;
            continue;
        }
        if (e.lineIndent < m) {
            t === tu ? e.result += Y.repeat("\n", p ? 1 + D : D) : t === Me && p && (e.result += "\n");
            break;
        }
        for(d ? oe(_) ? (A = !0, e.result += Y.repeat("\n", p ? 1 + D : D)) : A ? (A = !1, e.result += Y.repeat("\n", D + 1)) : D === 0 ? p && (e.result += " ") : e.result += Y.repeat("\n", D) : e.result += Y.repeat("\n", p ? 1 + D : D), p = !0, c = !0, D = 0, r = e.position; !ue(_) && _ !== 0;)_ = e.input.charCodeAt(++e.position);
        ae(e, r, e.position, !1);
    }
    return !0;
}
function su(e, a) {
    var r, d = e.tag, t = e.anchor, p = [], c, m = !1, D;
    if (e.firstTabInLine !== -1) return !1;
    for(e.anchor !== null && (e.anchorMap[e.anchor] = p), D = e.input.charCodeAt(e.position); D !== 0 && (e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, M(e, "tab characters must not be used in indentation")), !(D !== 45 || (c = e.input.charCodeAt(e.position + 1), !Z(c))));){
        if (m = !0, e.position++, $(e, !0, -1) && e.lineIndent <= a) {
            p.push(null), D = e.input.charCodeAt(e.position);
            continue;
        }
        if (r = e.line, pe(e, a, ku, !1, !0), p.push(e.result), $(e, !0, -1), D = e.input.charCodeAt(e.position), (e.line === r || e.lineIndent > a) && D !== 0) M(e, "bad indentation of a sequence entry");
        else if (e.lineIndent < a) break;
    }
    return m ? (e.tag = d, e.anchor = t, e.kind = "sequence", e.result = p, !0) : !1;
}
function Ka(e, a, r) {
    var d, t, p, c, m, D, A = e.tag, y = e.anchor, _ = {}, q = Object.create(null), F = null, R = null, w = null, b = !1, k = !1, C;
    if (e.firstTabInLine !== -1) return !1;
    for(e.anchor !== null && (e.anchorMap[e.anchor] = _), C = e.input.charCodeAt(e.position); C !== 0;){
        if (!b && e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, M(e, "tab characters must not be used in indentation")), d = e.input.charCodeAt(e.position + 1), p = e.line, (C === 63 || C === 58) && Z(d)) C === 63 ? (b && (fe(e, _, q, F, R, null, c, m, D), F = R = w = null), k = !0, b = !0, t = !0) : b ? (b = !1, t = !0) : M(e, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), e.position += 1, C = d;
        else {
            if (c = e.line, m = e.lineStart, D = e.position, !pe(e, r, Eu, !1, !0)) break;
            if (e.line === p) {
                for(C = e.input.charCodeAt(e.position); oe(C);)C = e.input.charCodeAt(++e.position);
                if (C === 58) C = e.input.charCodeAt(++e.position), Z(C) || M(e, "a whitespace character is expected after the key-value separator within a block mapping"), b && (fe(e, _, q, F, R, null, c, m, D), F = R = w = null), k = !0, b = !1, t = !1, F = e.tag, R = e.result;
                else if (k) M(e, "can not read an implicit mapping pair; a colon is missed");
                else return e.tag = A, e.anchor = y, !0;
            } else if (k) M(e, "can not read a block mapping entry; a multiline key may not be an implicit key");
            else return e.tag = A, e.anchor = y, !0;
        }
        if ((e.line === p || e.lineIndent > a) && (b && (c = e.line, m = e.lineStart, D = e.position), pe(e, a, xe, !0, t) && (b ? R = e.result : w = e.result), b || (fe(e, _, q, F, R, w, c, m, D), F = R = w = null), $(e, !0, -1), C = e.input.charCodeAt(e.position)), (e.line === p || e.lineIndent > a) && C !== 0) M(e, "bad indentation of a mapping entry");
        else if (e.lineIndent < a) break;
    }
    return b && fe(e, _, q, F, R, null, c, m, D), k && (e.tag = A, e.anchor = y, e.kind = "mapping", e.result = _), k;
}
function Ja(e) {
    var a, r = !1, d = !1, t, p, c;
    if (c = e.input.charCodeAt(e.position), c !== 33) return !1;
    if (e.tag !== null && M(e, "duplication of a tag property"), c = e.input.charCodeAt(++e.position), c === 60 ? (r = !0, c = e.input.charCodeAt(++e.position)) : c === 33 ? (d = !0, t = "!!", c = e.input.charCodeAt(++e.position)) : t = "!", a = e.position, r) {
        do c = e.input.charCodeAt(++e.position);
        while (c !== 0 && c !== 62);
        e.position < e.length ? (p = e.input.slice(a, e.position), c = e.input.charCodeAt(++e.position)) : M(e, "unexpected end of the stream within a verbatim tag");
    } else {
        for(; c !== 0 && !Z(c);)c === 33 && (d ? M(e, "tag suffix cannot contain exclamation marks") : (t = e.input.slice(a - 1, e.position + 1), xu.test(t) || M(e, "named tag handle cannot contain such characters"), d = !0, a = e.position + 1)), c = e.input.charCodeAt(++e.position);
        p = e.input.slice(a, e.position), Ma.test(p) && M(e, "tag suffix cannot contain flow indicator characters");
    }
    p && !Fu.test(p) && M(e, "tag name cannot contain such characters: " + p);
    try {
        p = decodeURIComponent(p);
    } catch (e1) {
        M(e, "tag name is malformed: " + p);
    }
    return r ? e.tag = p : ne.call(e.tagMap, t) ? e.tag = e.tagMap[t] + p : t === "!" ? e.tag = "!" + p : t === "!!" ? e.tag = "tag:yaml.org,2002:" + p : M(e, 'undeclared tag handle "' + t + '"'), !0;
}
function Za(e) {
    var a, r;
    if (r = e.input.charCodeAt(e.position), r !== 38) return !1;
    for(e.anchor !== null && M(e, "duplication of an anchor property"), r = e.input.charCodeAt(++e.position), a = e.position; r !== 0 && !Z(r) && !se(r);)r = e.input.charCodeAt(++e.position);
    return e.position === a && M(e, "name of an anchor node must contain at least one character"), e.anchor = e.input.slice(a, e.position), !0;
}
function Qa(e) {
    var a, r, d;
    if (d = e.input.charCodeAt(e.position), d !== 42) return !1;
    for(d = e.input.charCodeAt(++e.position), a = e.position; d !== 0 && !Z(d) && !se(d);)d = e.input.charCodeAt(++e.position);
    return e.position === a && M(e, "name of an alias node must contain at least one character"), r = e.input.slice(a, e.position), ne.call(e.anchorMap, r) || M(e, 'unidentified alias "' + r + '"'), e.result = e.anchorMap[r], $(e, !0, -1), !0;
}
function pe(e, a, r, d, t) {
    var p, c, m, D = 1, A = !1, y = !1, _, q, F, R, w, b;
    if (e.listener !== null && e.listener("open", e), e.tag = null, e.anchor = null, e.kind = null, e.result = null, p = c = m = xe === r || ku === r, d && $(e, !0, -1) && (A = !0, e.lineIndent > a ? D = 1 : e.lineIndent === a ? D = 0 : e.lineIndent < a && (D = -1)), D === 1) for(; Ja(e) || Za(e);)$(e, !0, -1) ? (A = !0, m = p, e.lineIndent > a ? D = 1 : e.lineIndent === a ? D = 0 : e.lineIndent < a && (D = -1)) : m = !1;
    if (m && (m = A || t), (D === 1 || xe === r) && (ke === r || Eu === r ? w = a : w = a + 1, b = e.position - e.lineStart, D === 1 ? m && (su(e, b) || Ka(e, b, w)) || Ya(e, w) ? y = !0 : (c && Wa(e, w) || Va(e, w) || $a(e, w) ? y = !0 : Qa(e) ? (y = !0, (e.tag !== null || e.anchor !== null) && M(e, "alias node should not have any properties")) : Ua(e, w, ke === r) && (y = !0, e.tag === null && (e.tag = "?")), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : D === 0 && (y = m && su(e, b))), e.tag === null) e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
    else if (e.tag === "?") {
        for(e.result !== null && e.kind !== "scalar" && M(e, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + e.kind + '"'), _ = 0, q = e.implicitTypes.length; _ < q; _ += 1)if (R = e.implicitTypes[_], R.resolve(e.result)) {
            e.result = R.construct(e.result), e.tag = R.tag, e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
            break;
        }
    } else if (e.tag !== "!") {
        if (ne.call(e.typeMap[e.kind || "fallback"], e.tag)) R = e.typeMap[e.kind || "fallback"][e.tag];
        else for(R = null, F = e.typeMap.multi[e.kind || "fallback"], _ = 0, q = F.length; _ < q; _ += 1)if (e.tag.slice(0, F[_].tag.length) === F[_].tag) {
            R = F[_];
            break;
        }
        R || M(e, "unknown tag !<" + e.tag + ">"), e.result !== null && R.kind !== e.kind && M(e, "unacceptable node kind for !<" + e.tag + '> tag; it should be "' + R.kind + '", not "' + e.kind + '"'), R.resolve(e.result, e.tag) ? (e.result = R.construct(e.result, e.tag), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : M(e, "cannot resolve a node with !<" + e.tag + "> explicit tag");
    }
    return e.listener !== null && e.listener("close", e), e.tag !== null || e.anchor !== null || y;
}
function Xa(e) {
    var a = e.position, r, d, t, p = !1, c;
    for(e.version = null, e.checkLineBreaks = e.legacy, e.tagMap = Object.create(null), e.anchorMap = Object.create(null); (c = e.input.charCodeAt(e.position)) !== 0 && ($(e, !0, -1), c = e.input.charCodeAt(e.position), !(e.lineIndent > 0 || c !== 37));){
        for(p = !0, c = e.input.charCodeAt(++e.position), r = e.position; c !== 0 && !Z(c);)c = e.input.charCodeAt(++e.position);
        for(d = e.input.slice(r, e.position), t = [], d.length < 1 && M(e, "directive name must not be less than one character in length"); c !== 0;){
            for(; oe(c);)c = e.input.charCodeAt(++e.position);
            if (c === 35) {
                do c = e.input.charCodeAt(++e.position);
                while (c !== 0 && !ue(c));
                break;
            }
            if (ue(c)) break;
            for(r = e.position; c !== 0 && !Z(c);)c = e.input.charCodeAt(++e.position);
            t.push(e.input.slice(r, e.position));
        }
        c !== 0 && Ve(e), ne.call(lu, d) ? lu[d](e, d, t) : Fe(e, 'unknown document directive "' + d + '"');
    }
    if ($(e, !0, -1), e.lineIndent === 0 && e.input.charCodeAt(e.position) === 45 && e.input.charCodeAt(e.position + 1) === 45 && e.input.charCodeAt(e.position + 2) === 45 ? (e.position += 3, $(e, !0, -1)) : p && M(e, "directives end mark is expected"), pe(e, e.lineIndent - 1, xe, !1, !0), $(e, !0, -1), e.checkLineBreaks && Na.test(e.input.slice(a, e.position)) && Fe(e, "non-ASCII line breaks are interpreted as content"), e.documents.push(e.result), e.position === e.lineStart && qe(e)) {
        e.input.charCodeAt(e.position) === 46 && (e.position += 3, $(e, !0, -1));
        return;
    }
    if (e.position < e.length - 1) M(e, "end of the stream or a document separator is expected");
    else return;
}
function Lu(e, a) {
    e = String(e), a = a || {}, e.length !== 0 && (e.charCodeAt(e.length - 1) !== 10 && e.charCodeAt(e.length - 1) !== 13 && (e += "\n"), e.charCodeAt(0) === 65279 && (e = e.slice(1)));
    var r = new Ga(e, a), d = e.indexOf("\x00");
    for(d !== -1 && (r.position = d, M(r, "null byte is not allowed in input")), r.input += "\x00"; r.input.charCodeAt(r.position) === 32;)r.lineIndent += 1, r.position += 1;
    for(; r.position < r.length - 1;)Xa(r);
    return r.documents;
}
function en(e, a, r) {
    a !== null && typeof a == "object" && (typeof r === "undefined" ? "undefined" : _type_of(r)) > "u" && (r = a, a = null);
    var d = Lu(e, r);
    if (typeof a != "function") return d;
    for(var t = 0, p = d.length; t < p; t += 1)a(d[t]);
}
function un(e, a) {
    var r = Lu(e, a);
    if (r.length !== 0) {
        if (r.length === 1) return r[0];
        throw new J("expected a single document in the stream, but found more");
    }
}
var rn = en, an = un, Tu = {
    loadAll: rn,
    load: an
};
var Vu = Tu.load;
var $u = function(e, a, r) {
    return /^---/.test(a) && e.push(r), e;
}, On = {}, Yu = function(e) {
    var a = e.lines, r = e.metaIndices;
    if (r.length > 0) {
        var d = a.slice(r[0] + 1, r[1]);
        return Vu(d.join("\n"));
    }
    return On;
}, Wu = function(e) {
    var a = e.lines, r = e.metaIndices;
    return r.length > 0 && (a = a.slice(r[1] + 1, a.length)), a.join("\n");
};
var Ke = function(param) {
    var e = param.postContent, a = param.postTitle, r = param.postDate, d = param.readingTime;
    var t = e === void 0 ? console.error("Error") : e;
    return '\n        <div id="mm-mark">\n            <h2>' + (a === void 0 ? "" : a) + "</h2>\n            <small>" + (r === void 0 ? "" : r) + "</small>\n              " + (d === void 0 ? "" : d) + "\n            <div>" + t + "</div>\n           \n        </div>\n          \n      ";
};
var Zu = ie(me(), 1);
function Qu() {
    return [
        {
            type: "lang",
            filter: function(e) {
                return e.replace(/\\\((.*?)\\\)/g, function(a, r) {
                    return "<mathxxxjax>" + Ju("\\(" + Ku(r) + "\\)") + "</mathxxxjax>";
                });
            }
        },
        {
            type: "lang",
            filter: function(e) {
                return e.replace(/\\\[([\s\S]*?)\\\]/g, function(a, r) {
                    return "<mathxxxjax>" + Ju("\\[" + Ku(r) + "\\]") + "</mathxxxjax>";
                });
            }
        },
        {
            type: "output",
            filter: function(e) {
                return e.replace(/<mathxxxjax>(.*?)<\/mathxxxjax>/g, function(a, r) {
                    return Hn(r);
                });
            }
        },
        {
            type: "output",
            filter: function(e) {
                return "\n        <script>\n            window.MathJax = {\n              loader: {\n                load: [\n                  '[tex]/color', \n                  '[tex]/mathtools', \n                  '[tex]/ams',\n                  '[tex]/html', \n                  '[tex]/textmacros', \n                  '[tex]/textcomp' ,\n                  '[mml]/mml3',\n                ]\n              },\n              tex: {\n                packages: {\n                  '[+]': [\n                    'color', \n                    'mathtools', \n                    'ams', \n                    'html',\n                    'textmacros' \n                  ]\n                },        \n                inlineMath: [  \n                  ['$','$'],    \n                  ['(', ')']\n                ],\n                displayMath: [             \n                  ['$$', '$$'],\n                  ['[', ']']\n                ],\n                color: {\n                  padding: '5px',\n                  borderWidth: '2px'\n                },\n                ams: {\n                  multlineWidth: '100%',\n                  multlineIndent: '1em'\n                },\n                processEscapes: true,      \n                processEnvironments: true, \n                processRefs: true,         \n                digits: /^(?:[0-9]+(?:{,}[0-9]{3})*(?:.[0-9]*)?|.[0-9]+)/,\n                tags: 'none',              \n                tagSide: 'right',          \n                tagIndent: '0.8em',        \n                useLabelIds: true,         \n                maxMacros: 10000,          \n                maxBuffer: 5 * 1024,       \n                baseURL: (document.getElementsByTagName('base').length === 0) ? '' : String(document.location).replace(/#.*$/, ''),\n                formatError: (jax, err) => jax.formatError(err)\n              },\n              textmacros: {\n                packages: {'[+]': ['textcomp']}\n              }\n            }\n        </script>\n          <script src=\"https://polyfill.io/v3/polyfill.min.js?features=es6\"></script>\n          <script id=\"MathJax-script\" async src=\"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js\"></script>\n        " + e;
            }
        }
    ];
}
function Ku(e) {
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Ju(e) {
    return typeof Buffer == "function" ? Buffer.from(e).toString("base64") : btoa(e);
}
function Hn(e) {
    return typeof Buffer == "function" ? Buffer.from(e, "base64").toString() : atob(e);
}
Zu.default.extension("showdownMathjax", Qu);
var Xu = Qu;
var eu = ie(me(), 1), uu = ie(nr(), 1), Xe = ie(ir(), 1), or = ie(tr(), 1), _or_default = or.default, Yn = _or_default.decode;
uu.default.silent = !0;
(0, uu.default)();
function dr() {
    return [
        {
            type: "output",
            filter: function(e, a, r) {
                var d = {
                    left: "<pre><code\\b[^>]*>",
                    right: "</code></pre>",
                    flags: "g"
                }, t = function(p, c, m, D) {
                    var _m_match;
                    var _m_match_;
                    var A = Yn(c), y = (_m_match_ = (_m_match = m.match(/class=\"([^ \"]+)/)) == null ? void 0 : _m_match[1]) != null ? _m_match_ : void 0;
                    return y ? (m = '<pre class="language-' + y + '"><code class="language-' + y + '">', m + Xe.default.highlight(A, Xe.default.languages[y], y) + D) : p;
                };
                return eu.default.helper.replaceRecursiveRegExp(e, t, d.left, d.right, d.flags);
            }
        }
    ];
}
eu.default.extension("showdownPrism", dr);
var lr = dr;
var cr = ie(me(), 1), Wn = Object.defineProperty, Kn = function(e, a) {
    return Wn(e, "name", {
        value: a,
        configurable: !0
    });
};
function Pe(param) {
    var _ref = param === void 0 ? {} : param, e = _ref.toc, a = _ref.opts;
    return [
        {
            type: "output",
            filter: function filter(r) {
                var d = /(<h([1-6]).*?id="([^"]*?)".*?>(.+?)<\/h[1-6]>)|(<p>\[toc\]<\/p>)/g, t = [];
                r.replace(d, function(c, m, D, A, y) {
                    if (c === "<p>[toc]</p>") t.push({
                        type: "toc"
                    });
                    else {
                        y = y.replace(/<[^>]+>/g, "");
                        var _ = {
                            anchor: A,
                            level: Number(D),
                            text: y
                        };
                        e && e.push(_), t.push(_extends({
                            type: "header"
                        }, _));
                    }
                    return "";
                });
                var p = [];
                return t.forEach(function(param, m) {
                    var c = param.type;
                    if (c === "toc") if (t[m + 1] && t[m + 1].type === "header") {
                        var D = [], _t_ = t[m + 1], A = _t_.level;
                        for(var y = m + 1; y < t.length && t[y].type !== "toc"; y++){
                            var _t_y = t[y], _ = _t_y.level;
                            _ === A && D.push(t[y]);
                        }
                        p.push(D);
                    } else p.push([]);
                }), r = r.replace(/<p>\[toc\]<\/p>[\n]*/g, function() {
                    var c = p.shift();
                    if (c && c.length) {
                        var m = (a == null ? void 0 : a.listType) || "ol";
                        return "<" + m + ' class="showdown-toc">' + c.map(function(param) {
                            var D = param.text, A = param.anchor;
                            return '<li><a href="#' + A + '">' + D + "</a></li>";
                        }).join("") + "</" + m + ">\n";
                    }
                    return "";
                }), r;
            }
        }
    ];
}
Kn(Pe, "showmarkToc");
cr.default.extension("showmarkToc", Pe);
var ru = function() {
    function ru() {}
    var _proto = ru.prototype;
    _proto.formatDate = function formatDate(a) {
        return new Date(a).toLocaleString("en-US", {
            weekday: "short",
            day: "numeric",
            month: "short",
            year: "numeric"
        });
    };
    _proto.readTime = function readTime(a) {
        var d = a.trim().split(/\s+/).length;
        return Math.ceil(d / 225);
    };
    _proto.frontmatter = function frontmatter(a) {
        var r = a.split("\n"), d = r.reduce($u, []), t = Yu({
            lines: r,
            metaIndices: d
        }), p = Wu({
            lines: r,
            metaIndices: d
        });
        return {
            data: t,
            content: p
        };
    };
    _proto.converter = function converter(a) {
        return new sr.default.Converter(a);
    };
    _proto.markToHtml = function markToHtml(a) {
        var r = this.frontmatter(a), d = r.data, t = r.content, p = JSON.stringify(r, null, 2), c = this.converter({
            parseImgDimensions: !0,
            simplifiedAutoLink: !0,
            strikethrough: !0,
            tables: !0,
            tasklists: !0,
            openLinksInNewWindow: !0,
            emoji: !0,
            moreStyling: !0,
            extensions: [
                Xu,
                lr,
                Pe
            ]
        });
        c.setFlavor("github");
        var m = c.makeHtml(t), D;
        d.title ? D = d.title : D = "";
        var A;
        d.date ? A = this.formatDate(d.date) : A = "";
        var y = "<small>Reading Time : " + this.readTime(t) + " minutes</small>", _ = Ke({
            postContent: m,
            postTitle: D,
            postDate: A,
            readingTime: y
        }), q = Ke({
            postContent: m
        });
        return {
            data: d,
            json: p,
            convertedHtml: m,
            postHtml: _,
            pageHtml: q
        };
    };
    return ru;
}();
function Ai() {
    return new ru;
} /*! Bundled license information:

showdown/dist/showdown.js:
  (*! showdown v 2.1.0 - 21-04-2022 *)

prismjs/prism.js:
  (**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   *)

he/he.js:
  (*! https://mths.be/he v1.2.0 by @mathias | MIT license *)

js-yaml/dist/js-yaml.mjs:
  (*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT *)
*/ 
exports.mmMark = Ai;
