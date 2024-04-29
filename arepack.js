"use strict";
var fr = Object.create;
var au = Object.defineProperty;
var pr = Object.getOwnPropertyDescriptor;
var hr = Object.getOwnPropertyNames;
var mr = Object.getPrototypeOf, gr = Object.prototype.hasOwnProperty;
var _e = ((e)=>typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, {
        get: (e, r)=>(typeof require < "u" ? require : e)[r]
    }) : e)(function(e) {
    if (typeof require < "u") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + e + '" is not supported');
});
var le = (e, r)=>()=>(r || e((r = {
            exports: {}
        }).exports, r), r.exports);
var Dr = (e, r, t, a)=>{
    if (r && typeof r == "object" || typeof r == "function") for (let n of hr(r))!gr.call(e, n) && n !== t && au(e, n, {
        get: ()=>r[n],
        enumerable: !(a = pr(r, n)) || a.enumerable
    });
    return e;
};
var ie = (e, r, t)=>(t = e != null ? fr(mr(e)) : {}, Dr(r || !e || !e.__esModule ? au(t, "default", {
        value: e,
        enumerable: !0
    }) : t, e));
var me = le((e, r)=>{
    (function() {
        function e(e) {
            var r = {
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
                    describe: `Remove only spaces, ' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids`,
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
            if (e === !1) return JSON.parse(JSON.stringify(r));
            var t = {};
            for(var a in r)r.hasOwnProperty(a) && (t[a] = r[a].defaultValue);
            return t;
        }
        function t() {
            var r = e(!0), t = {};
            for(var a in r)r.hasOwnProperty(a) && (t[a] = !0);
            return t;
        }
        var a = {}, n = {}, o = {}, i = e(!0), s = "vanilla", l = {
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
            allOn: t()
        };
        a.helper = {}, a.extensions = {}, a.setOption = function(e, r) {
            return i[e] = r, this;
        }, a.getOption = function(e) {
            return i[e];
        }, a.getOptions = function() {
            return i;
        }, a.resetOptions = function() {
            i = e(!0);
        }, a.setFlavor = function(e) {
            if (!l.hasOwnProperty(e)) throw Error(e + " flavor was not found");
            a.resetOptions();
            var r = l[e];
            s = e;
            for(var t in r)r.hasOwnProperty(t) && (i[t] = r[t]);
        }, a.getFlavor = function() {
            return s;
        }, a.getFlavorOptions = function(e) {
            if (l.hasOwnProperty(e)) return l[e];
        }, a.getDefaultOptions = function(r) {
            return e(r);
        }, a.subParser = function(e, r) {
            if (a.helper.isString(e)) if (typeof r < "u") n[e] = r;
            else {
                if (n.hasOwnProperty(e)) return n[e];
                throw Error("SubParser named " + e + " not registered!");
            }
        }, a.extension = function(e, r) {
            if (!a.helper.isString(e)) throw Error("Extension 'name' must be a string");
            if (e = a.helper.stdExtName(e), a.helper.isUndefined(r)) {
                if (!o.hasOwnProperty(e)) throw Error("Extension named " + e + " is not registered!");
                return o[e];
            } else {
                typeof r == "function" && (r = r()), a.helper.isArray(r) || (r = [
                    r
                ]);
                var t = c(r, e);
                if (t.valid) o[e] = r;
                else throw Error(t.error);
            }
        }, a.getAllExtensions = function() {
            return o;
        }, a.removeExtension = function(e) {
            delete o[e];
        }, a.resetExtensions = function() {
            o = {};
        };
        function c(e, r) {
            var t = r ? "Error in " + r + " extension->" : "Error in unnamed extension", n = {
                valid: !0,
                error: ""
            };
            a.helper.isArray(e) || (e = [
                e
            ]);
            for(var o = 0; o < e.length; ++o){
                var i = t + " sub-extension " + o + ": ", s = e[o];
                if (typeof s != "object") return n.valid = !1, n.error = i + "must be an object, but " + typeof s + " given", n;
                if (!a.helper.isString(s.type)) return n.valid = !1, n.error = i + 'property "type" must be a string, but ' + typeof s.type + " given", n;
                var l = s.type = s.type.toLowerCase();
                if (l === "language" && (l = s.type = "lang"), l === "html" && (l = s.type = "output"), l !== "lang" && l !== "output" && l !== "listener") return n.valid = !1, n.error = i + "type " + l + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"', n;
                if (l === "listener") {
                    if (a.helper.isUndefined(s.listeners)) return n.valid = !1, n.error = i + '. Extensions of type "listener" must have a property called "listeners"', n;
                } else if (a.helper.isUndefined(s.filter) && a.helper.isUndefined(s.regex)) return n.valid = !1, n.error = i + l + ' extensions must define either a "regex" property or a "filter" method', n;
                if (s.listeners) {
                    if (typeof s.listeners != "object") return n.valid = !1, n.error = i + '"listeners" property must be an object but ' + typeof s.listeners + " given", n;
                    for(var c in s.listeners)if (s.listeners.hasOwnProperty(c) && typeof s.listeners[c] != "function") return n.valid = !1, n.error = i + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + c + " must be a function but " + typeof s.listeners[c] + " given", n;
                }
                if (s.filter) {
                    if (typeof s.filter != "function") return n.valid = !1, n.error = i + '"filter" must be a function, but ' + typeof s.filter + " given", n;
                } else if (s.regex) {
                    if (a.helper.isString(s.regex) && (s.regex = new RegExp(s.regex, "g")), !(s.regex instanceof RegExp)) return n.valid = !1, n.error = i + '"regex" property must either be a string or a RegExp object, but ' + typeof s.regex + " given", n;
                    if (a.helper.isUndefined(s.replace)) return n.valid = !1, n.error = i + '"regex" extensions must implement a replace string or function', n;
                }
            }
            return n;
        }
        a.validateExtension = function(e) {
            var r = c(e, null);
            return r.valid ? !0 : (console.warn(r.error), !1);
        }, a.hasOwnProperty("helper") || (a.helper = {}), a.helper.isString = function(e) {
            return typeof e == "string" || e instanceof String;
        }, a.helper.isFunction = function(e) {
            var r = {};
            return e && r.toString.call(e) === "[object Function]";
        }, a.helper.isArray = function(e) {
            return Array.isArray(e);
        }, a.helper.isUndefined = function(e) {
            return typeof e > "u";
        }, a.helper.forEach = function(e, r) {
            if (a.helper.isUndefined(e)) throw new Error("obj param is required");
            if (a.helper.isUndefined(r)) throw new Error("callback param is required");
            if (!a.helper.isFunction(r)) throw new Error("callback param must be a function/closure");
            if (typeof e.forEach == "function") e.forEach(r);
            else if (a.helper.isArray(e)) for(var t = 0; t < e.length; t++)r(e[t], t, e);
            else if (typeof e == "object") for(var n in e)e.hasOwnProperty(n) && r(e[n], n, e);
            else throw new Error("obj does not seem to be an array or an iterable object");
        }, a.helper.stdExtName = function(e) {
            return e.replace(/[_?*+\/\\.^-]/g, "").replace(/\s/g, "").toLowerCase();
        };
        function u(e, r) {
            var t = r.charCodeAt(0);
            return "\xa8E" + t + "E";
        }
        a.helper.escapeCharactersCallback = u, a.helper.escapeCharacters = function(e, r, t) {
            var a = "([" + r.replace(/([\[\]\\])/g, "\\$1") + "])";
            t && (a = "\\\\" + a);
            var n = new RegExp(a, "g");
            return e = e.replace(n, u), e;
        }, a.helper.unescapeHTMLEntities = function(e) {
            return e.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
        };
        var p = function(e, r, t, a) {
            var n = a || "", o = n.indexOf("g") > -1, i = new RegExp(r + "|" + t, "g" + n.replace(/g/g, "")), s = new RegExp(r, n.replace(/g/g, "")), l = [], c, u, p, d, g;
            do for(c = 0; p = i.exec(e);)if (s.test(p[0])) c++ || (u = i.lastIndex, d = u - p[0].length);
            else if (c && !--c) {
                g = p.index + p[0].length;
                var h = {
                    left: {
                        start: d,
                        end: u
                    },
                    match: {
                        start: u,
                        end: p.index
                    },
                    right: {
                        start: p.index,
                        end: g
                    },
                    wholeMatch: {
                        start: d,
                        end: g
                    }
                };
                if (l.push(h), !o) return l;
            }
            while (c && (i.lastIndex = u));
            return l;
        };
        a.helper.matchRecursiveRegExp = function(e, r, t, a) {
            for(var n = p(e, r, t, a), o = [], i = 0; i < n.length; ++i)o.push([
                e.slice(n[i].wholeMatch.start, n[i].wholeMatch.end),
                e.slice(n[i].match.start, n[i].match.end),
                e.slice(n[i].left.start, n[i].left.end),
                e.slice(n[i].right.start, n[i].right.end)
            ]);
            return o;
        }, a.helper.replaceRecursiveRegExp = function(e, r, t, n, o) {
            if (!a.helper.isFunction(r)) {
                var i = r;
                r = function() {
                    return i;
                };
            }
            var s = p(e, t, n, o), l = e, c = s.length;
            if (c > 0) {
                var u = [];
                s[0].wholeMatch.start !== 0 && u.push(e.slice(0, s[0].wholeMatch.start));
                for(var d = 0; d < c; ++d)u.push(r(e.slice(s[d].wholeMatch.start, s[d].wholeMatch.end), e.slice(s[d].match.start, s[d].match.end), e.slice(s[d].left.start, s[d].left.end), e.slice(s[d].right.start, s[d].right.end))), d < c - 1 && u.push(e.slice(s[d].wholeMatch.end, s[d + 1].wholeMatch.start));
                s[c - 1].wholeMatch.end < e.length && u.push(e.slice(s[c - 1].wholeMatch.end)), l = u.join("");
            }
            return l;
        }, a.helper.regexIndexOf = function(e, r, t) {
            if (!a.helper.isString(e)) throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
            if (!(r instanceof RegExp)) throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
            var n = e.substring(t || 0).search(r);
            return n >= 0 ? n + (t || 0) : n;
        }, a.helper.splitAtIndex = function(e, r) {
            if (!a.helper.isString(e)) throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
            return [
                e.substring(0, r),
                e.substring(r)
            ];
        }, a.helper.encodeEmailAddress = function(e) {
            var r = [
                function(e) {
                    return "&#" + e.charCodeAt(0) + ";";
                },
                function(e) {
                    return "&#x" + e.charCodeAt(0).toString(16) + ";";
                },
                function(e) {
                    return e;
                }
            ];
            return e = e.replace(/./g, function(e) {
                if (e === "@") e = r[Math.floor(Math.random() * 2)](e);
                else {
                    var t = Math.random();
                    e = t > .9 ? r[2](e) : t > .45 ? r[1](e) : r[0](e);
                }
                return e;
            }), e;
        }, a.helper.padEnd = function(e, r, t) {
            return r = r >> 0, t = String(t || " "), e.length > r ? String(e) : (r = r - e.length, r > t.length && (t += t.repeat(r / t.length)), String(e) + t.slice(0, r));
        }, typeof console > "u" && (console = {
            warn: function(e) {
                alert(e);
            },
            log: function(e) {
                alert(e);
            },
            error: function(e) {
                throw e;
            }
        }), a.helper.regexes = {
            asteriskDashAndColon: /([*_:~])/g
        }, a.helper.emojis = {
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
            showdown: `<span style="font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;">S</span>`
        }, a.Converter = function(e) {
            var r = {}, t = [], n = [], u = {}, p = s, d = {
                parsed: {},
                raw: "",
                format: ""
            };
            g();
            function g() {
                e = e || {};
                for(var t in i)i.hasOwnProperty(t) && (r[t] = i[t]);
                if (typeof e == "object") for(var n in e)e.hasOwnProperty(n) && (r[n] = e[n]);
                else throw Error("Converter expects the passed parameter to be an object, but " + typeof e + " was passed instead.");
                r.extensions && a.helper.forEach(r.extensions, h);
            }
            function h(e, r) {
                if (r = r || null, a.helper.isString(e)) if (e = a.helper.stdExtName(e), r = e, a.extensions[e]) {
                    console.warn("DEPRECATION WARNING: " + e + " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"), m(a.extensions[e], e);
                    return;
                } else if (!a.helper.isUndefined(o[e])) e = o[e];
                else throw Error('Extension "' + e + '" could not be loaded. It was either not found or is not a valid extension.');
                typeof e == "function" && (e = e()), a.helper.isArray(e) || (e = [
                    e
                ]);
                var i = c(e, r);
                if (!i.valid) throw Error(i.error);
                for(var s = 0; s < e.length; ++s){
                    switch(e[s].type){
                        case "lang":
                            t.push(e[s]);
                            break;
                        case "output":
                            n.push(e[s]);
                            break;
                    }
                    if (e[s].hasOwnProperty("listeners")) for(var l in e[s].listeners)e[s].listeners.hasOwnProperty(l) && f(l, e[s].listeners[l]);
                }
            }
            function m(e, r) {
                typeof e == "function" && (e = e(new a.Converter)), a.helper.isArray(e) || (e = [
                    e
                ]);
                var o = c(e, r);
                if (!o.valid) throw Error(o.error);
                for(var i = 0; i < e.length; ++i)switch(e[i].type){
                    case "lang":
                        t.push(e[i]);
                        break;
                    case "output":
                        n.push(e[i]);
                        break;
                    default:
                        throw Error("Extension loader error: Type unrecognized!!!");
                }
            }
            function f(e, r) {
                if (!a.helper.isString(e)) throw Error("Invalid argument in converter.listen() method: name must be a string, but " + typeof e + " given");
                if (typeof r != "function") throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + typeof r + " given");
                u.hasOwnProperty(e) || (u[e] = []), u[e].push(r);
            }
            function b(e) {
                var r = e.match(/^\s*/)[0].length, t = new RegExp("^\\s{0," + r + "}", "gm");
                return e.replace(t, "");
            }
            this._dispatch = function(e, r, t, a) {
                if (u.hasOwnProperty(e)) for(var n = 0; n < u[e].length; ++n){
                    var o = u[e][n](e, r, this, t, a);
                    o && typeof o < "u" && (r = o);
                }
                return r;
            }, this.listen = function(e, r) {
                return f(e, r), this;
            }, this.makeHtml = function(e) {
                if (!e) return e;
                var o = {
                    gHtmlBlocks: [],
                    gHtmlMdBlocks: [],
                    gHtmlSpans: [],
                    gUrls: {},
                    gTitles: {},
                    gDimensions: {},
                    gListLevel: 0,
                    hashLinkCounts: {},
                    langExtensions: t,
                    outputModifiers: n,
                    converter: this,
                    ghCodeBlocks: [],
                    metadata: {
                        parsed: {},
                        raw: "",
                        format: ""
                    }
                };
                return e = e.replace(/¨/g, "\xa8T"), e = e.replace(/\$/g, "\xa8D"), e = e.replace(/\r\n/g, `
`), e = e.replace(/\r/g, `
`), e = e.replace(/\u00A0/g, "&nbsp;"), r.smartIndentationFix && (e = b(e)), e = `

` + e + `

`, e = a.subParser("detab")(e, r, o), e = e.replace(/^[ \t]+$/mg, ""), a.helper.forEach(t, function(t) {
                    e = a.subParser("runExtension")(t, e, r, o);
                }), e = a.subParser("metadata")(e, r, o), e = a.subParser("hashPreCodeTags")(e, r, o), e = a.subParser("githubCodeBlocks")(e, r, o), e = a.subParser("hashHTMLBlocks")(e, r, o), e = a.subParser("hashCodeTags")(e, r, o), e = a.subParser("stripLinkDefinitions")(e, r, o), e = a.subParser("blockGamut")(e, r, o), e = a.subParser("unhashHTMLSpans")(e, r, o), e = a.subParser("unescapeSpecialChars")(e, r, o), e = e.replace(/¨D/g, "$$"), e = e.replace(/¨T/g, "\xa8"), e = a.subParser("completeHTMLDocument")(e, r, o), a.helper.forEach(n, function(t) {
                    e = a.subParser("runExtension")(t, e, r, o);
                }), d = o.metadata, e;
            }, this.makeMarkdown = this.makeMd = function(e, r) {
                if (e = e.replace(/\r\n/g, `
`), e = e.replace(/\r/g, `
`), e = e.replace(/>[ \t]+</, ">\xa8NBSP;<"), !r) if (window && window.document) r = window.document;
                else throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");
                var t = r.createElement("div");
                t.innerHTML = e;
                var n = {
                    preList: c(t)
                };
                l(t);
                for(var o = t.childNodes, i = "", s = 0; s < o.length; s++)i += a.subParser("makeMarkdown.node")(o[s], n);
                function l(e) {
                    for(var r = 0; r < e.childNodes.length; ++r){
                        var t = e.childNodes[r];
                        t.nodeType === 3 ? !/\S/.test(t.nodeValue) && !/^[ ]+$/.test(t.nodeValue) ? (e.removeChild(t), --r) : (t.nodeValue = t.nodeValue.split(`
`).join(" "), t.nodeValue = t.nodeValue.replace(/(\s)+/g, "$1")) : t.nodeType === 1 && l(t);
                    }
                }
                function c(e) {
                    for(var r = e.querySelectorAll("pre"), t = [], n = 0; n < r.length; ++n)if (r[n].childElementCount === 1 && r[n].firstChild.tagName.toLowerCase() === "code") {
                        var o = r[n].firstChild.innerHTML.trim(), i = r[n].firstChild.getAttribute("data-language") || "";
                        if (i === "") for(var s = r[n].firstChild.className.split(" "), l = 0; l < s.length; ++l){
                            var c = s[l].match(/^language-(.+)$/);
                            if (c !== null) {
                                i = c[1];
                                break;
                            }
                        }
                        o = a.helper.unescapeHTMLEntities(o), t.push(o), r[n].outerHTML = '<precode language="' + i + '" precodenum="' + n.toString() + '"></precode>';
                    } else t.push(r[n].innerHTML), r[n].innerHTML = "", r[n].setAttribute("prenum", n.toString());
                    return t;
                }
                return i;
            }, this.setOption = function(e, t) {
                r[e] = t;
            }, this.getOption = function(e) {
                return r[e];
            }, this.getOptions = function() {
                return r;
            }, this.addExtension = function(e, r) {
                r = r || null, h(e, r);
            }, this.useExtension = function(e) {
                h(e);
            }, this.setFlavor = function(e) {
                if (!l.hasOwnProperty(e)) throw Error(e + " flavor was not found");
                var t = l[e];
                p = e;
                for(var a in t)t.hasOwnProperty(a) && (r[a] = t[a]);
            }, this.getFlavor = function() {
                return p;
            }, this.removeExtension = function(e) {
                a.helper.isArray(e) || (e = [
                    e
                ]);
                for(var r = 0; r < e.length; ++r){
                    for(var o = e[r], i = 0; i < t.length; ++i)t[i] === o && t.splice(i, 1);
                    for(var s = 0; s < n.length; ++s)n[s] === o && n.splice(s, 1);
                }
            }, this.getAllExtensions = function() {
                return {
                    language: t,
                    output: n
                };
            }, this.getMetadata = function(e) {
                return e ? d.raw : d.parsed;
            }, this.getMetadataFormat = function() {
                return d.format;
            }, this._setMetadataPair = function(e, r) {
                d.parsed[e] = r;
            }, this._setMetadataFormat = function(e) {
                d.format = e;
            }, this._setMetadataRaw = function(e) {
                d.raw = e;
            };
        }, a.subParser("anchors", function(e, r, t) {
            e = t.converter._dispatch("anchors.before", e, r, t);
            var n = function(e, n, o, i, s, l, c) {
                if (a.helper.isUndefined(c) && (c = ""), o = o.toLowerCase(), e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) i = "";
                else if (!i) if (o || (o = n.toLowerCase().replace(/ ?\n/g, " ")), i = "#" + o, !a.helper.isUndefined(t.gUrls[o])) i = t.gUrls[o], a.helper.isUndefined(t.gTitles[o]) || (c = t.gTitles[o]);
                else return e;
                i = i.replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback);
                var u = '<a href="' + i + '"';
                return c !== "" && c !== null && (c = c.replace(/"/g, "&quot;"), c = c.replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback), u += ' title="' + c + '"'), r.openLinksInNewWindow && !/^#/.test(i) && (u += ' rel="noopener noreferrer" target="\xa8E95Eblank"'), u += ">" + n + "</a>", u;
            };
            return e = e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, n), e = e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, n), e = e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, n), e = e.replace(/\[([^\[\]]+)]()()()()()/g, n), r.ghMentions && (e = e.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi, function(e, t, n, o, i) {
                if (n === "\\") return t + o;
                if (!a.helper.isString(r.ghMentionsLink)) throw new Error("ghMentionsLink option must be a string");
                var s = r.ghMentionsLink.replace(/\{u}/g, i), l = "";
                return r.openLinksInNewWindow && (l = ' rel="noopener noreferrer" target="\xa8E95Eblank"'), t + '<a href="' + s + '"' + l + ">" + o + "</a>";
            })), e = t.converter._dispatch("anchors.after", e, r, t), e;
        });
        var d = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi, g = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi, h = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi, m = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi, f = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, b = function(e) {
            return function(r, t, n, o, i, s, l) {
                n = n.replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback);
                var c = n, u = "", p = "", d = t || "", g = l || "";
                return /^www\./i.test(n) && (n = n.replace(/^www\./i, "http://www.")), e.excludeTrailingPunctuationFromURLs && s && (u = s), e.openLinksInNewWindow && (p = ' rel="noopener noreferrer" target="\xa8E95Eblank"'), d + '<a href="' + n + '"' + p + ">" + c + "</a>" + u + g;
            };
        }, w = function(e, r) {
            return function(t, n, o) {
                var i = "mailto:";
                return n = n || "", o = a.subParser("unescapeSpecialChars")(o, e, r), e.encodeEmails ? (i = a.helper.encodeEmailAddress(i + o), o = a.helper.encodeEmailAddress(o)) : i = i + o, n + '<a href="' + i + '">' + o + "</a>";
            };
        };
        a.subParser("autoLinks", function(e, r, t) {
            return e = t.converter._dispatch("autoLinks.before", e, r, t), e = e.replace(h, b(r)), e = e.replace(f, w(r, t)), e = t.converter._dispatch("autoLinks.after", e, r, t), e;
        }), a.subParser("simplifiedAutoLinks", function(e, r, t) {
            return r.simplifiedAutoLink && (e = t.converter._dispatch("simplifiedAutoLinks.before", e, r, t), r.excludeTrailingPunctuationFromURLs ? e = e.replace(g, b(r)) : e = e.replace(d, b(r)), e = e.replace(m, w(r, t)), e = t.converter._dispatch("simplifiedAutoLinks.after", e, r, t)), e;
        }), a.subParser("blockGamut", function(e, r, t) {
            return e = t.converter._dispatch("blockGamut.before", e, r, t), e = a.subParser("blockQuotes")(e, r, t), e = a.subParser("headers")(e, r, t), e = a.subParser("horizontalRule")(e, r, t), e = a.subParser("lists")(e, r, t), e = a.subParser("codeBlocks")(e, r, t), e = a.subParser("tables")(e, r, t), e = a.subParser("hashHTMLBlocks")(e, r, t), e = a.subParser("paragraphs")(e, r, t), e = t.converter._dispatch("blockGamut.after", e, r, t), e;
        }), a.subParser("blockQuotes", function(e, r, t) {
            e = t.converter._dispatch("blockQuotes.before", e, r, t), e = e + `

`;
            var n = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
            return r.splitAdjacentBlockquotes && (n = /^ {0,3}>[\s\S]*?(?:\n\n)/gm), e = e.replace(n, function(e) {
                return e = e.replace(/^[ \t]*>[ \t]?/gm, ""), e = e.replace(/¨0/g, ""), e = e.replace(/^[ \t]+$/gm, ""), e = a.subParser("githubCodeBlocks")(e, r, t), e = a.subParser("blockGamut")(e, r, t), e = e.replace(/(^|\n)/g, "$1  "), e = e.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(e, r) {
                    var t = r;
                    return t = t.replace(/^  /mg, "\xa80"), t = t.replace(/¨0/g, ""), t;
                }), a.subParser("hashBlock")(`<blockquote>
` + e + `
</blockquote>`, r, t);
            }), e = t.converter._dispatch("blockQuotes.after", e, r, t), e;
        }), a.subParser("codeBlocks", function(e, r, t) {
            e = t.converter._dispatch("codeBlocks.before", e, r, t), e += "\xa80";
            var n = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
            return e = e.replace(n, function(e, n, o) {
                var i = n, s = o, l = `
`;
                return i = a.subParser("outdent")(i, r, t), i = a.subParser("encodeCode")(i, r, t), i = a.subParser("detab")(i, r, t), i = i.replace(/^\n+/g, ""), i = i.replace(/\n+$/g, ""), r.omitExtraWLInCodeBlocks && (l = ""), i = "<pre><code>" + i + l + "</code></pre>", a.subParser("hashBlock")(i, r, t) + s;
            }), e = e.replace(/¨0/, ""), e = t.converter._dispatch("codeBlocks.after", e, r, t), e;
        }), a.subParser("codeSpans", function(e, r, t) {
            return e = t.converter._dispatch("codeSpans.before", e, r, t), typeof e > "u" && (e = ""), e = e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, function(e, n, o, i) {
                var s = i;
                return s = s.replace(/^([ \t]*)/g, ""), s = s.replace(/[ \t]*$/g, ""), s = a.subParser("encodeCode")(s, r, t), s = n + "<code>" + s + "</code>", s = a.subParser("hashHTMLSpans")(s, r, t), s;
            }), e = t.converter._dispatch("codeSpans.after", e, r, t), e;
        }), a.subParser("completeHTMLDocument", function(e, r, t) {
            if (!r.completeHTMLDocument) return e;
            e = t.converter._dispatch("completeHTMLDocument.before", e, r, t);
            var a = "html", n = `<!DOCTYPE HTML>
`, o = "", i = `<meta charset="utf-8">
`, s = "", l = "";
            typeof t.metadata.parsed.doctype < "u" && (n = "<!DOCTYPE " + t.metadata.parsed.doctype + `>
`, a = t.metadata.parsed.doctype.toString().toLowerCase(), (a === "html" || a === "html5") && (i = '<meta charset="utf-8">'));
            for(var c in t.metadata.parsed)if (t.metadata.parsed.hasOwnProperty(c)) switch(c.toLowerCase()){
                case "doctype":
                    break;
                case "title":
                    o = "<title>" + t.metadata.parsed.title + `</title>
`;
                    break;
                case "charset":
                    a === "html" || a === "html5" ? i = '<meta charset="' + t.metadata.parsed.charset + `">
` : i = '<meta name="charset" content="' + t.metadata.parsed.charset + `">
`;
                    break;
                case "language":
                case "lang":
                    s = ' lang="' + t.metadata.parsed[c] + '"', l += '<meta name="' + c + '" content="' + t.metadata.parsed[c] + `">
`;
                    break;
                default:
                    l += '<meta name="' + c + '" content="' + t.metadata.parsed[c] + `">
`;
            }
            return e = n + "<html" + s + `>
<head>
` + o + i + l + `</head>
<body>
` + e.trim() + `
</body>
</html>`, e = t.converter._dispatch("completeHTMLDocument.after", e, r, t), e;
        }), a.subParser("detab", function(e, r, t) {
            return e = t.converter._dispatch("detab.before", e, r, t), e = e.replace(/\t(?=\t)/g, "    "), e = e.replace(/\t/g, "\xa8A\xa8B"), e = e.replace(/¨B(.+?)¨A/g, function(e, r) {
                for(var t = r, a = 4 - t.length % 4, n = 0; n < a; n++)t += " ";
                return t;
            }), e = e.replace(/¨A/g, "    "), e = e.replace(/¨B/g, ""), e = t.converter._dispatch("detab.after", e, r, t), e;
        }), a.subParser("ellipsis", function(e, r, t) {
            return r.ellipsis && (e = t.converter._dispatch("ellipsis.before", e, r, t), e = e.replace(/\.\.\./g, "…"), e = t.converter._dispatch("ellipsis.after", e, r, t)), e;
        }), a.subParser("emoji", function(e, r, t) {
            if (!r.emoji) return e;
            e = t.converter._dispatch("emoji.before", e, r, t);
            var n = /:([\S]+?):/g;
            return e = e.replace(n, function(e, r) {
                return a.helper.emojis.hasOwnProperty(r) ? a.helper.emojis[r] : e;
            }), e = t.converter._dispatch("emoji.after", e, r, t), e;
        }), a.subParser("encodeAmpsAndAngles", function(e, r, t) {
            return e = t.converter._dispatch("encodeAmpsAndAngles.before", e, r, t), e = e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;"), e = e.replace(/<(?![a-z\/?$!])/gi, "&lt;"), e = e.replace(/</g, "&lt;"), e = e.replace(/>/g, "&gt;"), e = t.converter._dispatch("encodeAmpsAndAngles.after", e, r, t), e;
        }), a.subParser("encodeBackslashEscapes", function(e, r, t) {
            return e = t.converter._dispatch("encodeBackslashEscapes.before", e, r, t), e = e.replace(/\\(\\)/g, a.helper.escapeCharactersCallback), e = e.replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g, a.helper.escapeCharactersCallback), e = t.converter._dispatch("encodeBackslashEscapes.after", e, r, t), e;
        }), a.subParser("encodeCode", function(e, r, t) {
            return e = t.converter._dispatch("encodeCode.before", e, r, t), e = e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/([*_{}\[\]\\=~-])/g, a.helper.escapeCharactersCallback), e = t.converter._dispatch("encodeCode.after", e, r, t), e;
        }), a.subParser("escapeSpecialCharsWithinTagAttributes", function(e, r, t) {
            e = t.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before", e, r, t);
            var n = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi, o = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;
            return e = e.replace(n, function(e) {
                return e.replace(/(.)<\/?code>(?=.)/g, "$1`").replace(/([\\`*_~=|])/g, a.helper.escapeCharactersCallback);
            }), e = e.replace(o, function(e) {
                return e.replace(/([\\`*_~=|])/g, a.helper.escapeCharactersCallback);
            }), e = t.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after", e, r, t), e;
        }), a.subParser("githubCodeBlocks", function(e, r, t) {
            return r.ghCodeBlocks ? (e = t.converter._dispatch("githubCodeBlocks.before", e, r, t), e += "\xa80", e = e.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, function(e, n, o, i) {
                var s = r.omitExtraWLInCodeBlocks ? "" : `
`;
                return i = a.subParser("encodeCode")(i, r, t), i = a.subParser("detab")(i, r, t), i = i.replace(/^\n+/g, ""), i = i.replace(/\n+$/g, ""), i = "<pre><code" + (o ? ' class="' + o + " language-" + o + '"' : "") + ">" + i + s + "</code></pre>", i = a.subParser("hashBlock")(i, r, t), `

\xA8G` + (t.ghCodeBlocks.push({
                    text: e,
                    codeblock: i
                }) - 1) + `G

`;
            }), e = e.replace(/¨0/, ""), t.converter._dispatch("githubCodeBlocks.after", e, r, t)) : e;
        }), a.subParser("hashBlock", function(e, r, t) {
            return e = t.converter._dispatch("hashBlock.before", e, r, t), e = e.replace(/(^\n+|\n+$)/g, ""), e = `

\xA8K` + (t.gHtmlBlocks.push(e) - 1) + `K

`, e = t.converter._dispatch("hashBlock.after", e, r, t), e;
        }), a.subParser("hashCodeTags", function(e, r, t) {
            e = t.converter._dispatch("hashCodeTags.before", e, r, t);
            var n = function(e, n, o, i) {
                var s = o + a.subParser("encodeCode")(n, r, t) + i;
                return "\xa8C" + (t.gHtmlSpans.push(s) - 1) + "C";
            };
            return e = a.helper.replaceRecursiveRegExp(e, n, "<code\\b[^>]*>", "</code>", "gim"), e = t.converter._dispatch("hashCodeTags.after", e, r, t), e;
        }), a.subParser("hashElement", function(e, r, t) {
            return function(e, r) {
                var a = r;
                return a = a.replace(/\n\n/g, `
`), a = a.replace(/^\n/, ""), a = a.replace(/\n+$/g, ""), a = `

\xA8K` + (t.gHtmlBlocks.push(a) - 1) + `K

`, a;
            };
        }), a.subParser("hashHTMLBlocks", function(e, r, t) {
            e = t.converter._dispatch("hashHTMLBlocks.before", e, r, t);
            var n = [
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
            ], o = function(e, r, a, n) {
                var o = e;
                return a.search(/\bmarkdown\b/) !== -1 && (o = a + t.converter.makeHtml(r) + n), `

\xA8K` + (t.gHtmlBlocks.push(o) - 1) + `K

`;
            };
            r.backslashEscapesHTMLTags && (e = e.replace(/\\<(\/?[^>]+?)>/g, function(e, r) {
                return "&lt;" + r + "&gt;";
            }));
            for(var i = 0; i < n.length; ++i)for(var s, l = new RegExp("^ {0,3}(<" + n[i] + "\\b[^>]*>)", "im"), c = "<" + n[i] + "\\b[^>]*>", u = "</" + n[i] + ">"; (s = a.helper.regexIndexOf(e, l)) !== -1;){
                var p = a.helper.splitAtIndex(e, s), d = a.helper.replaceRecursiveRegExp(p[1], o, c, u, "im");
                if (d === p[1]) break;
                e = p[0].concat(d);
            }
            return e = e.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, a.subParser("hashElement")(e, r, t)), e = a.helper.replaceRecursiveRegExp(e, function(e) {
                return `

\xA8K` + (t.gHtmlBlocks.push(e) - 1) + `K

`;
            }, "^ {0,3}<!--", "-->", "gm"), e = e.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, a.subParser("hashElement")(e, r, t)), e = t.converter._dispatch("hashHTMLBlocks.after", e, r, t), e;
        }), a.subParser("hashHTMLSpans", function(e, r, t) {
            e = t.converter._dispatch("hashHTMLSpans.before", e, r, t);
            function a(e) {
                return "\xa8C" + (t.gHtmlSpans.push(e) - 1) + "C";
            }
            return e = e.replace(/<[^>]+?\/>/gi, function(e) {
                return a(e);
            }), e = e.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function(e) {
                return a(e);
            }), e = e.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function(e) {
                return a(e);
            }), e = e.replace(/<[^>]+?>/gi, function(e) {
                return a(e);
            }), e = t.converter._dispatch("hashHTMLSpans.after", e, r, t), e;
        }), a.subParser("unhashHTMLSpans", function(e, r, t) {
            e = t.converter._dispatch("unhashHTMLSpans.before", e, r, t);
            for(var a = 0; a < t.gHtmlSpans.length; ++a){
                for(var n = t.gHtmlSpans[a], o = 0; /¨C(\d+)C/.test(n);){
                    var i = RegExp.$1;
                    if (n = n.replace("\xa8C" + i + "C", t.gHtmlSpans[i]), o === 10) {
                        console.error("maximum nesting of 10 spans reached!!!");
                        break;
                    }
                    ++o;
                }
                e = e.replace("\xa8C" + a + "C", n);
            }
            return e = t.converter._dispatch("unhashHTMLSpans.after", e, r, t), e;
        }), a.subParser("hashPreCodeTags", function(e, r, t) {
            e = t.converter._dispatch("hashPreCodeTags.before", e, r, t);
            var n = function(e, n, o, i) {
                var s = o + a.subParser("encodeCode")(n, r, t) + i;
                return `

\xA8G` + (t.ghCodeBlocks.push({
                    text: e,
                    codeblock: s
                }) - 1) + `G

`;
            };
            return e = a.helper.replaceRecursiveRegExp(e, n, "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^ {0,3}</code>\\s*</pre>", "gim"), e = t.converter._dispatch("hashPreCodeTags.after", e, r, t), e;
        }), a.subParser("headers", function(e, r, t) {
            e = t.converter._dispatch("headers.before", e, r, t);
            var n = isNaN(parseInt(r.headerLevelStart)) ? 1 : parseInt(r.headerLevelStart), o = r.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm, i = r.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
            e = e.replace(o, function(e, o) {
                var i = a.subParser("spanGamut")(o, r, t), s = r.noHeaderId ? "" : ' id="' + l(o) + '"', c = n, u = "<h" + c + s + ">" + i + "</h" + c + ">";
                return a.subParser("hashBlock")(u, r, t);
            }), e = e.replace(i, function(e, o) {
                var i = a.subParser("spanGamut")(o, r, t), s = r.noHeaderId ? "" : ' id="' + l(o) + '"', c = n + 1, u = "<h" + c + s + ">" + i + "</h" + c + ">";
                return a.subParser("hashBlock")(u, r, t);
            });
            var s = r.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
            e = e.replace(s, function(e, o, i) {
                var s = i;
                r.customizedHeaderId && (s = i.replace(/\s?\{([^{]+?)}\s*$/, ""));
                var c = a.subParser("spanGamut")(s, r, t), u = r.noHeaderId ? "" : ' id="' + l(i) + '"', p = n - 1 + o.length, d = "<h" + p + u + ">" + c + "</h" + p + ">";
                return a.subParser("hashBlock")(d, r, t);
            });
            function l(e) {
                var n, o;
                if (r.customizedHeaderId) {
                    var i = e.match(/\{([^{]+?)}\s*$/);
                    i && i[1] && (e = i[1]);
                }
                return n = e, a.helper.isString(r.prefixHeaderId) ? o = r.prefixHeaderId : r.prefixHeaderId === !0 ? o = "section-" : o = "", r.rawPrefixHeaderId || (n = o + n), r.ghCompatibleHeaderId ? n = n.replace(/ /g, "-").replace(/&amp;/g, "").replace(/¨T/g, "").replace(/¨D/g, "").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "").toLowerCase() : r.rawHeaderId ? n = n.replace(/ /g, "-").replace(/&amp;/g, "&").replace(/¨T/g, "\xa8").replace(/¨D/g, "$").replace(/["']/g, "-").toLowerCase() : n = n.replace(/[^\w]/g, "").toLowerCase(), r.rawPrefixHeaderId && (n = o + n), t.hashLinkCounts[n] ? n = n + "-" + t.hashLinkCounts[n]++ : t.hashLinkCounts[n] = 1, n;
            }
            return e = t.converter._dispatch("headers.after", e, r, t), e;
        }), a.subParser("horizontalRule", function(e, r, t) {
            e = t.converter._dispatch("horizontalRule.before", e, r, t);
            var n = a.subParser("hashBlock")("<hr />", r, t);
            return e = e.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, n), e = e.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, n), e = e.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, n), e = t.converter._dispatch("horizontalRule.after", e, r, t), e;
        }), a.subParser("images", function(e, r, t) {
            e = t.converter._dispatch("images.before", e, r, t);
            var n = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, o = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g, i = /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, s = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g, l = /!\[([^\[\]]+)]()()()()()/g;
            function c(e, r, t, a, n, o, i, s) {
                return a = a.replace(/\s/g, ""), u(e, r, t, a, n, o, i, s);
            }
            function u(e, r, n, o, i, s, l, c) {
                var u = t.gUrls, p = t.gTitles, d = t.gDimensions;
                if (n = n.toLowerCase(), c || (c = ""), e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) o = "";
                else if (o === "" || o === null) if ((n === "" || n === null) && (n = r.toLowerCase().replace(/ ?\n/g, " ")), o = "#" + n, !a.helper.isUndefined(u[n])) o = u[n], a.helper.isUndefined(p[n]) || (c = p[n]), a.helper.isUndefined(d[n]) || (i = d[n].width, s = d[n].height);
                else return e;
                r = r.replace(/"/g, "&quot;").replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback), o = o.replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback);
                var g = '<img src="' + o + '" alt="' + r + '"';
                return c && a.helper.isString(c) && (c = c.replace(/"/g, "&quot;").replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback), g += ' title="' + c + '"'), i && s && (i = i === "*" ? "auto" : i, s = s === "*" ? "auto" : s, g += ' width="' + i + '"', g += ' height="' + s + '"'), g += " />", g;
            }
            return e = e.replace(s, u), e = e.replace(i, c), e = e.replace(o, u), e = e.replace(n, u), e = e.replace(l, u), e = t.converter._dispatch("images.after", e, r, t), e;
        }), a.subParser("italicsAndBold", function(e, r, t) {
            e = t.converter._dispatch("italicsAndBold.before", e, r, t);
            function a(e, r, t) {
                return r + e + t;
            }
            return r.literalMidWordUnderscores ? (e = e.replace(/\b___(\S[\s\S]*?)___\b/g, function(e, r) {
                return a(r, "<strong><em>", "</em></strong>");
            }), e = e.replace(/\b__(\S[\s\S]*?)__\b/g, function(e, r) {
                return a(r, "<strong>", "</strong>");
            }), e = e.replace(/\b_(\S[\s\S]*?)_\b/g, function(e, r) {
                return a(r, "<em>", "</em>");
            })) : (e = e.replace(/___(\S[\s\S]*?)___/g, function(e, r) {
                return /\S$/.test(r) ? a(r, "<strong><em>", "</em></strong>") : e;
            }), e = e.replace(/__(\S[\s\S]*?)__/g, function(e, r) {
                return /\S$/.test(r) ? a(r, "<strong>", "</strong>") : e;
            }), e = e.replace(/_([^\s_][\s\S]*?)_/g, function(e, r) {
                return /\S$/.test(r) ? a(r, "<em>", "</em>") : e;
            })), r.literalMidWordAsterisks ? (e = e.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, function(e, r, t) {
                return a(t, r + "<strong><em>", "</em></strong>");
            }), e = e.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, function(e, r, t) {
                return a(t, r + "<strong>", "</strong>");
            }), e = e.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, function(e, r, t) {
                return a(t, r + "<em>", "</em>");
            })) : (e = e.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function(e, r) {
                return /\S$/.test(r) ? a(r, "<strong><em>", "</em></strong>") : e;
            }), e = e.replace(/\*\*(\S[\s\S]*?)\*\*/g, function(e, r) {
                return /\S$/.test(r) ? a(r, "<strong>", "</strong>") : e;
            }), e = e.replace(/\*([^\s*][\s\S]*?)\*/g, function(e, r) {
                return /\S$/.test(r) ? a(r, "<em>", "</em>") : e;
            })), e = t.converter._dispatch("italicsAndBold.after", e, r, t), e;
        }), a.subParser("lists", function(e, r, t) {
            function n(e, n) {
                t.gListLevel++, e = e.replace(/\n{2,}$/, `
`), e += "\xa80";
                var o = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm, i = /\n[ \t]*\n(?!¨0)/.test(e);
                return r.disableForced4SpacesIndentedSublists && (o = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm), e = e.replace(o, function(e, n, o, s, l, c, u) {
                    u = u && u.trim() !== "";
                    var p = a.subParser("outdent")(l, r, t), d = "";
                    return c && r.tasklists && (d = ' class="task-list-item" style="list-style-type: none;"', p = p.replace(/^[ \t]*\[(x|X| )?]/m, function() {
                        var e = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
                        return u && (e += " checked"), e += ">", e;
                    })), p = p.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function(e) {
                        return "\xa8A" + e;
                    }), n || p.search(/\n{2,}/) > -1 ? (p = a.subParser("githubCodeBlocks")(p, r, t), p = a.subParser("blockGamut")(p, r, t)) : (p = a.subParser("lists")(p, r, t), p = p.replace(/\n$/, ""), p = a.subParser("hashHTMLBlocks")(p, r, t), p = p.replace(/\n\n+/g, `

`), i ? p = a.subParser("paragraphs")(p, r, t) : p = a.subParser("spanGamut")(p, r, t)), p = p.replace("\xa8A", ""), p = "<li" + d + ">" + p + `</li>
`, p;
                }), e = e.replace(/¨0/g, ""), t.gListLevel--, n && (e = e.replace(/\s+$/, "")), e;
            }
            function o(e, r) {
                if (r === "ol") {
                    var t = e.match(/^ *(\d+)\./);
                    if (t && t[1] !== "1") return ' start="' + t[1] + '"';
                }
                return "";
            }
            function i(e, t, a) {
                var i = r.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm, s = r.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm, l = t === "ul" ? i : s, c = "";
                if (e.search(l) !== -1) (function r(u) {
                    var p = u.search(l), d = o(e, t);
                    p !== -1 ? (c += `

<` + t + d + `>
` + n(u.slice(0, p), !!a) + "</" + t + `>
`, t = t === "ul" ? "ol" : "ul", l = t === "ul" ? i : s, r(u.slice(p))) : c += `

<` + t + d + `>
` + n(u, !!a) + "</" + t + `>
`;
                })(e);
                else {
                    var u = o(e, t);
                    c = `

<` + t + u + `>
` + n(e, !!a) + "</" + t + `>
`;
                }
                return c;
            }
            return e = t.converter._dispatch("lists.before", e, r, t), e += "\xa80", t.gListLevel ? e = e.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, function(e, r, t) {
                var a = t.search(/[*+-]/g) > -1 ? "ul" : "ol";
                return i(r, a, !0);
            }) : e = e.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, function(e, r, t, a) {
                var n = a.search(/[*+-]/g) > -1 ? "ul" : "ol";
                return i(t, n, !1);
            }), e = e.replace(/¨0/, ""), e = t.converter._dispatch("lists.after", e, r, t), e;
        }), a.subParser("metadata", function(e, r, t) {
            if (!r.metadata) return e;
            e = t.converter._dispatch("metadata.before", e, r, t);
            function a(e) {
                t.metadata.raw = e, e = e.replace(/&/g, "&amp;").replace(/"/g, "&quot;"), e = e.replace(/\n {4}/g, " "), e.replace(/^([\S ]+): +([\s\S]+?)$/gm, function(e, r, a) {
                    return t.metadata.parsed[r] = a, "";
                });
            }
            return e = e.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function(e, r, t) {
                return a(t), "\xa8M";
            }), e = e.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function(e, r, n) {
                return r && (t.metadata.format = r), a(n), "\xa8M";
            }), e = e.replace(/¨M/g, ""), e = t.converter._dispatch("metadata.after", e, r, t), e;
        }), a.subParser("outdent", function(e, r, t) {
            return e = t.converter._dispatch("outdent.before", e, r, t), e = e.replace(/^(\t|[ ]{1,4})/gm, "\xa80"), e = e.replace(/¨0/g, ""), e = t.converter._dispatch("outdent.after", e, r, t), e;
        }), a.subParser("paragraphs", function(e, r, t) {
            e = t.converter._dispatch("paragraphs.before", e, r, t), e = e.replace(/^\n+/g, ""), e = e.replace(/\n+$/g, "");
            for(var n = e.split(/\n{2,}/g), o = [], i = n.length, s = 0; s < i; s++){
                var l = n[s];
                l.search(/¨(K|G)(\d+)\1/g) >= 0 ? o.push(l) : l.search(/\S/) >= 0 && (l = a.subParser("spanGamut")(l, r, t), l = l.replace(/^([ \t]*)/g, "<p>"), l += "</p>", o.push(l));
            }
            for(i = o.length, s = 0; s < i; s++){
                for(var c = "", u = o[s], p = !1; /¨(K|G)(\d+)\1/.test(u);){
                    var d = RegExp.$1, g = RegExp.$2;
                    d === "K" ? c = t.gHtmlBlocks[g] : p ? c = a.subParser("encodeCode")(t.ghCodeBlocks[g].text, r, t) : c = t.ghCodeBlocks[g].codeblock, c = c.replace(/\$/g, "$$$$"), u = u.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, c), /^<pre\b[^>]*>\s*<code\b[^>]*>/.test(u) && (p = !0);
                }
                o[s] = u;
            }
            return e = o.join(`
`), e = e.replace(/^\n+/g, ""), e = e.replace(/\n+$/g, ""), t.converter._dispatch("paragraphs.after", e, r, t);
        }), a.subParser("runExtension", function(e, r, t, a) {
            if (e.filter) r = e.filter(r, a.converter, t);
            else if (e.regex) {
                var n = e.regex;
                n instanceof RegExp || (n = new RegExp(n, "g")), r = r.replace(n, e.replace);
            }
            return r;
        }), a.subParser("spanGamut", function(e, r, t) {
            return e = t.converter._dispatch("spanGamut.before", e, r, t), e = a.subParser("codeSpans")(e, r, t), e = a.subParser("escapeSpecialCharsWithinTagAttributes")(e, r, t), e = a.subParser("encodeBackslashEscapes")(e, r, t), e = a.subParser("images")(e, r, t), e = a.subParser("anchors")(e, r, t), e = a.subParser("autoLinks")(e, r, t), e = a.subParser("simplifiedAutoLinks")(e, r, t), e = a.subParser("emoji")(e, r, t), e = a.subParser("underline")(e, r, t), e = a.subParser("italicsAndBold")(e, r, t), e = a.subParser("strikethrough")(e, r, t), e = a.subParser("ellipsis")(e, r, t), e = a.subParser("hashHTMLSpans")(e, r, t), e = a.subParser("encodeAmpsAndAngles")(e, r, t), r.simpleLineBreaks ? /\n\n¨K/.test(e) || (e = e.replace(/\n+/g, `<br />
`)) : e = e.replace(/  +\n/g, `<br />
`), e = t.converter._dispatch("spanGamut.after", e, r, t), e;
        }), a.subParser("strikethrough", function(e, r, t) {
            function n(e) {
                return r.simplifiedAutoLink && (e = a.subParser("simplifiedAutoLinks")(e, r, t)), "<del>" + e + "</del>";
            }
            return r.strikethrough && (e = t.converter._dispatch("strikethrough.before", e, r, t), e = e.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function(e, r) {
                return n(r);
            }), e = t.converter._dispatch("strikethrough.after", e, r, t)), e;
        }), a.subParser("stripLinkDefinitions", function(e, r, t) {
            var n = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm, o = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;
            e += "\xa80";
            var i = function(n, o, i, s, l, c, u) {
                return o = o.toLowerCase(), e.toLowerCase().split(o).length - 1 < 2 ? n : (i.match(/^data:.+?\/.+?;base64,/) ? t.gUrls[o] = i.replace(/\s/g, "") : t.gUrls[o] = a.subParser("encodeAmpsAndAngles")(i, r, t), c ? c + u : (u && (t.gTitles[o] = u.replace(/"|'/g, "&quot;")), r.parseImgDimensions && s && l && (t.gDimensions[o] = {
                    width: s,
                    height: l
                }), ""));
            };
            return e = e.replace(o, i), e = e.replace(n, i), e = e.replace(/¨0/, ""), e;
        }), a.subParser("tables", function(e, r, t) {
            if (!r.tables) return e;
            var n = /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm, o = /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;
            function i(e) {
                return /^:[ \t]*--*$/.test(e) ? ' style="text-align:left;"' : /^--*[ \t]*:[ \t]*$/.test(e) ? ' style="text-align:right;"' : /^:[ \t]*--*[ \t]*:$/.test(e) ? ' style="text-align:center;"' : "";
            }
            function s(e, n) {
                var o = "";
                return e = e.trim(), (r.tablesHeaderId || r.tableHeaderId) && (o = ' id="' + e.replace(/ /g, "_").toLowerCase() + '"'), e = a.subParser("spanGamut")(e, r, t), "<th" + o + n + ">" + e + `</th>
`;
            }
            function l(e, n) {
                var o = a.subParser("spanGamut")(e, r, t);
                return "<td" + n + ">" + o + `</td>
`;
            }
            function c(e, r) {
                for(var t = `<table>
<thead>
<tr>
`, a = e.length, n = 0; n < a; ++n)t += e[n];
                for(t += `</tr>
</thead>
<tbody>
`, n = 0; n < r.length; ++n){
                    t += `<tr>
`;
                    for(var o = 0; o < a; ++o)t += r[n][o];
                    t += `</tr>
`;
                }
                return t += `</tbody>
</table>
`, t;
            }
            function u(e) {
                var n, o = e.split(`
`);
                for(n = 0; n < o.length; ++n)/^ {0,3}\|/.test(o[n]) && (o[n] = o[n].replace(/^ {0,3}\|/, "")), /\|[ \t]*$/.test(o[n]) && (o[n] = o[n].replace(/\|[ \t]*$/, "")), o[n] = a.subParser("codeSpans")(o[n], r, t);
                var u = o[0].split("|").map(function(e) {
                    return e.trim();
                }), p = o[1].split("|").map(function(e) {
                    return e.trim();
                }), d = [], g = [], h = [], m = [];
                for(o.shift(), o.shift(), n = 0; n < o.length; ++n)o[n].trim() !== "" && d.push(o[n].split("|").map(function(e) {
                    return e.trim();
                }));
                if (u.length < p.length) return e;
                for(n = 0; n < p.length; ++n)h.push(i(p[n]));
                for(n = 0; n < u.length; ++n)a.helper.isUndefined(h[n]) && (h[n] = ""), g.push(s(u[n], h[n]));
                for(n = 0; n < d.length; ++n){
                    for(var f = [], b = 0; b < g.length; ++b)a.helper.isUndefined(d[n][b]), f.push(l(d[n][b], h[b]));
                    m.push(f);
                }
                return c(g, m);
            }
            return e = t.converter._dispatch("tables.before", e, r, t), e = e.replace(/\\(\|)/g, a.helper.escapeCharactersCallback), e = e.replace(n, u), e = e.replace(o, u), e = t.converter._dispatch("tables.after", e, r, t), e;
        }), a.subParser("underline", function(e, r, t) {
            return r.underline && (e = t.converter._dispatch("underline.before", e, r, t), r.literalMidWordUnderscores ? (e = e.replace(/\b___(\S[\s\S]*?)___\b/g, function(e, r) {
                return "<u>" + r + "</u>";
            }), e = e.replace(/\b__(\S[\s\S]*?)__\b/g, function(e, r) {
                return "<u>" + r + "</u>";
            })) : (e = e.replace(/___(\S[\s\S]*?)___/g, function(e, r) {
                return /\S$/.test(r) ? "<u>" + r + "</u>" : e;
            }), e = e.replace(/__(\S[\s\S]*?)__/g, function(e, r) {
                return /\S$/.test(r) ? "<u>" + r + "</u>" : e;
            })), e = e.replace(/(_)/g, a.helper.escapeCharactersCallback), e = t.converter._dispatch("underline.after", e, r, t)), e;
        }), a.subParser("unescapeSpecialChars", function(e, r, t) {
            return e = t.converter._dispatch("unescapeSpecialChars.before", e, r, t), e = e.replace(/¨E(\d+)E/g, function(e, r) {
                var t = parseInt(r);
                return String.fromCharCode(t);
            }), e = t.converter._dispatch("unescapeSpecialChars.after", e, r, t), e;
        }), a.subParser("makeMarkdown.blockquote", function(e, r) {
            var t = "";
            if (e.hasChildNodes()) for(var n = e.childNodes, o = n.length, i = 0; i < o; ++i){
                var s = a.subParser("makeMarkdown.node")(n[i], r);
                s !== "" && (t += s);
            }
            return t = t.trim(), t = "> " + t.split(`
`).join(`
> `), t;
        }), a.subParser("makeMarkdown.codeBlock", function(e, r) {
            var t = e.getAttribute("language"), a = e.getAttribute("precodenum");
            return "```" + t + `
` + r.preList[a] + "\n```";
        }), a.subParser("makeMarkdown.codeSpan", function(e) {
            return "`" + e.innerHTML + "`";
        }), a.subParser("makeMarkdown.emphasis", function(e, r) {
            var t = "";
            if (e.hasChildNodes()) {
                t += "*";
                for(var n = e.childNodes, o = n.length, i = 0; i < o; ++i)t += a.subParser("makeMarkdown.node")(n[i], r);
                t += "*";
            }
            return t;
        }), a.subParser("makeMarkdown.header", function(e, r, t) {
            var n = new Array(t + 1).join("#"), o = "";
            if (e.hasChildNodes()) {
                o = n + " ";
                for(var i = e.childNodes, s = i.length, l = 0; l < s; ++l)o += a.subParser("makeMarkdown.node")(i[l], r);
            }
            return o;
        }), a.subParser("makeMarkdown.hr", function() {
            return "---";
        }), a.subParser("makeMarkdown.image", function(e) {
            var r = "";
            return e.hasAttribute("src") && (r += "![" + e.getAttribute("alt") + "](", r += "<" + e.getAttribute("src") + ">", e.hasAttribute("width") && e.hasAttribute("height") && (r += " =" + e.getAttribute("width") + "x" + e.getAttribute("height")), e.hasAttribute("title") && (r += ' "' + e.getAttribute("title") + '"'), r += ")"), r;
        }), a.subParser("makeMarkdown.links", function(e, r) {
            var t = "";
            if (e.hasChildNodes() && e.hasAttribute("href")) {
                var n = e.childNodes, o = n.length;
                t = "[";
                for(var i = 0; i < o; ++i)t += a.subParser("makeMarkdown.node")(n[i], r);
                t += "](", t += "<" + e.getAttribute("href") + ">", e.hasAttribute("title") && (t += ' "' + e.getAttribute("title") + '"'), t += ")";
            }
            return t;
        }), a.subParser("makeMarkdown.list", function(e, r, t) {
            var n = "";
            if (!e.hasChildNodes()) return "";
            for(var o = e.childNodes, i = o.length, s = e.getAttribute("start") || 1, l = 0; l < i; ++l)if (!(typeof o[l].tagName > "u" || o[l].tagName.toLowerCase() !== "li")) {
                var c = "";
                t === "ol" ? c = s.toString() + ". " : c = "- ", n += c + a.subParser("makeMarkdown.listItem")(o[l], r), ++s;
            }
            return n += `
<!-- -->
`, n.trim();
        }), a.subParser("makeMarkdown.listItem", function(e, r) {
            for(var t = "", n = e.childNodes, o = n.length, i = 0; i < o; ++i)t += a.subParser("makeMarkdown.node")(n[i], r);
            return /\n$/.test(t) ? t = t.split(`
`).join(`
    `).replace(/^ {4}$/gm, "").replace(/\n\n+/g, `

`) : t += `
`, t;
        }), a.subParser("makeMarkdown.node", function(e, r, t) {
            t = t || !1;
            var n = "";
            if (e.nodeType === 3) return a.subParser("makeMarkdown.txt")(e, r);
            if (e.nodeType === 8) return "<!--" + e.data + `-->

`;
            if (e.nodeType !== 1) return "";
            var o = e.tagName.toLowerCase();
            switch(o){
                case "h1":
                    t || (n = a.subParser("makeMarkdown.header")(e, r, 1) + `

`);
                    break;
                case "h2":
                    t || (n = a.subParser("makeMarkdown.header")(e, r, 2) + `

`);
                    break;
                case "h3":
                    t || (n = a.subParser("makeMarkdown.header")(e, r, 3) + `

`);
                    break;
                case "h4":
                    t || (n = a.subParser("makeMarkdown.header")(e, r, 4) + `

`);
                    break;
                case "h5":
                    t || (n = a.subParser("makeMarkdown.header")(e, r, 5) + `

`);
                    break;
                case "h6":
                    t || (n = a.subParser("makeMarkdown.header")(e, r, 6) + `

`);
                    break;
                case "p":
                    t || (n = a.subParser("makeMarkdown.paragraph")(e, r) + `

`);
                    break;
                case "blockquote":
                    t || (n = a.subParser("makeMarkdown.blockquote")(e, r) + `

`);
                    break;
                case "hr":
                    t || (n = a.subParser("makeMarkdown.hr")(e, r) + `

`);
                    break;
                case "ol":
                    t || (n = a.subParser("makeMarkdown.list")(e, r, "ol") + `

`);
                    break;
                case "ul":
                    t || (n = a.subParser("makeMarkdown.list")(e, r, "ul") + `

`);
                    break;
                case "precode":
                    t || (n = a.subParser("makeMarkdown.codeBlock")(e, r) + `

`);
                    break;
                case "pre":
                    t || (n = a.subParser("makeMarkdown.pre")(e, r) + `

`);
                    break;
                case "table":
                    t || (n = a.subParser("makeMarkdown.table")(e, r) + `

`);
                    break;
                case "code":
                    n = a.subParser("makeMarkdown.codeSpan")(e, r);
                    break;
                case "em":
                case "i":
                    n = a.subParser("makeMarkdown.emphasis")(e, r);
                    break;
                case "strong":
                case "b":
                    n = a.subParser("makeMarkdown.strong")(e, r);
                    break;
                case "del":
                    n = a.subParser("makeMarkdown.strikethrough")(e, r);
                    break;
                case "a":
                    n = a.subParser("makeMarkdown.links")(e, r);
                    break;
                case "img":
                    n = a.subParser("makeMarkdown.image")(e, r);
                    break;
                default:
                    n = e.outerHTML + `

`;
            }
            return n;
        }), a.subParser("makeMarkdown.paragraph", function(e, r) {
            var t = "";
            if (e.hasChildNodes()) for(var n = e.childNodes, o = n.length, i = 0; i < o; ++i)t += a.subParser("makeMarkdown.node")(n[i], r);
            return t = t.trim(), t;
        }), a.subParser("makeMarkdown.pre", function(e, r) {
            var t = e.getAttribute("prenum");
            return "<pre>" + r.preList[t] + "</pre>";
        }), a.subParser("makeMarkdown.strikethrough", function(e, r) {
            var t = "";
            if (e.hasChildNodes()) {
                t += "~~";
                for(var n = e.childNodes, o = n.length, i = 0; i < o; ++i)t += a.subParser("makeMarkdown.node")(n[i], r);
                t += "~~";
            }
            return t;
        }), a.subParser("makeMarkdown.strong", function(e, r) {
            var t = "";
            if (e.hasChildNodes()) {
                t += "**";
                for(var n = e.childNodes, o = n.length, i = 0; i < o; ++i)t += a.subParser("makeMarkdown.node")(n[i], r);
                t += "**";
            }
            return t;
        }), a.subParser("makeMarkdown.table", function(e, r) {
            var t = "", n = [
                [],
                []
            ], o = e.querySelectorAll("thead>tr>th"), i = e.querySelectorAll("tbody>tr"), s, l;
            for(s = 0; s < o.length; ++s){
                var c = a.subParser("makeMarkdown.tableCell")(o[s], r), u = "---";
                if (o[s].hasAttribute("style")) {
                    var p = o[s].getAttribute("style").toLowerCase().replace(/\s/g, "");
                    switch(p){
                        case "text-align:left;":
                            u = ":---";
                            break;
                        case "text-align:right;":
                            u = "---:";
                            break;
                        case "text-align:center;":
                            u = ":---:";
                            break;
                    }
                }
                n[0][s] = c.trim(), n[1][s] = u;
            }
            for(s = 0; s < i.length; ++s){
                var d = n.push([]) - 1, g = i[s].getElementsByTagName("td");
                for(l = 0; l < o.length; ++l){
                    var h = " ";
                    typeof g[l] < "u" && (h = a.subParser("makeMarkdown.tableCell")(g[l], r)), n[d].push(h);
                }
            }
            var m = 3;
            for(s = 0; s < n.length; ++s)for(l = 0; l < n[s].length; ++l){
                var f = n[s][l].length;
                f > m && (m = f);
            }
            for(s = 0; s < n.length; ++s){
                for(l = 0; l < n[s].length; ++l)s === 1 ? n[s][l].slice(-1) === ":" ? n[s][l] = a.helper.padEnd(n[s][l].slice(-1), m - 1, "-") + ":" : n[s][l] = a.helper.padEnd(n[s][l], m, "-") : n[s][l] = a.helper.padEnd(n[s][l], m);
                t += "| " + n[s].join(" | ") + ` |
`;
            }
            return t.trim();
        }), a.subParser("makeMarkdown.tableCell", function(e, r) {
            var t = "";
            if (!e.hasChildNodes()) return "";
            for(var n = e.childNodes, o = n.length, i = 0; i < o; ++i)t += a.subParser("makeMarkdown.node")(n[i], r, !0);
            return t.trim();
        }), a.subParser("makeMarkdown.txt", function(e) {
            var r = e.nodeValue;
            return r = r.replace(/ +/g, " "), r = r.replace(/¨NBSP;/g, " "), r = a.helper.unescapeHTMLEntities(r), r = r.replace(/([*_~|`])/g, "\\$1"), r = r.replace(/^(\s*)>/g, "\\$1>"), r = r.replace(/^#/gm, "\\#"), r = r.replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3"), r = r.replace(/^( {0,3}\d+)\./gm, "$1\\."), r = r.replace(/^( {0,3})([+-])/gm, "$1\\$2"), r = r.replace(/]([\s]*)\(/g, "\\]$1\\("), r = r.replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:"), r;
        });
        var v = this;
        typeof define == "function" && define.amd ? define(function() {
            return a;
        }) : typeof r < "u" && r.exports ? r.exports = a : v.showdown = a;
    }).call(e);
});
var er = le((e, r)=>{
    var t = {
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
    typeof r < "u" && r.exports && (r.exports = t);
});
var ur = le((e, r)=>{
    var t = function() {
        var e = function() {};
        function r(e, r) {
            Array.isArray(e) ? e.forEach(r) : e != null && r(e, 0);
        }
        function t(e) {
            for(var r = {}, t = 0, a = e.length; t < a; t++)r[e[t]] = !0;
            return r;
        }
        function a(e) {
            var r = {};
            for(var t in e){
                var a = e[t];
                for(var n in a)if (n != "meta") {
                    var o = a[n];
                    r[n] = typeof o == "string" ? {
                        title: o
                    } : o;
                }
            }
            return r;
        }
        function n(e) {
            var t = {}, a = [];
            function n(a, o) {
                if (!(a in t)) {
                    o.push(a);
                    var i = o.indexOf(a);
                    if (i < o.length - 1) throw new Error("Circular dependency: " + o.slice(i).join(" -> "));
                    var s = {}, l = e[a];
                    if (l) {
                        let i = function(r) {
                            if (!(r in e)) throw new Error(a + " depends on an unknown component " + r);
                            if (!(r in s)) {
                                n(r, o), s[r] = !0;
                                for(var i in t[r])s[i] = !0;
                            }
                        };
                        r(l.require, i), r(l.optional, i), r(l.modify, i);
                    }
                    t[a] = s, o.pop();
                }
            }
            return function(e) {
                var r = t[e];
                return r || (n(e, a), r = t[e]), r;
            };
        }
        function o(e) {
            var t;
            return function(a) {
                if (a in e) return a;
                if (!t) {
                    t = {};
                    for(var n in e){
                        var o = e[n];
                        r(o && o.alias, function(r) {
                            if (r in t) throw new Error(r + " cannot be alias for both " + n + " and " + t[r]);
                            if (r in e) throw new Error(r + " cannot be alias of " + n + " because it is a component.");
                            t[r] = n;
                        });
                    }
                }
                return t[a] || a;
            };
        }
        function i(r, t, a, n) {
            var o = n ? n.series : void 0, i = n ? n.parallel : e, s = {}, l = {};
            function c(e) {
                if (e in s) return s[e];
                l[e] = !0;
                var n = [];
                for(var u in r(e))u in t && n.push(u);
                var p;
                if (n.length === 0) p = a(e);
                else {
                    var d = i(n.map(function(e) {
                        var r = c(e);
                        return delete l[e], r;
                    }));
                    o ? p = o(d, function() {
                        return a(e);
                    }) : a(e);
                }
                return s[e] = p;
            }
            for(var u in t)c(u);
            var p = [];
            for(var d in l)p.push(s[d]);
            return i(p);
        }
        function s(e) {
            for(var r in e)return !0;
            return !1;
        }
        function l(e, l, c) {
            var u = a(e), p = o(u);
            l = l.map(p), c = (c || []).map(p);
            var d = t(l), g = t(c);
            l.forEach(h);
            function h(e) {
                var t = u[e];
                r(t && t.require, function(e) {
                    e in g || (d[e] = !0, h(e));
                });
            }
            for(var m = n(u), f = d, b; s(f);){
                b = {};
                for(var w in f){
                    var v = u[w];
                    r(v && v.modify, function(e) {
                        e in g && (b[e] = !0);
                    });
                }
                for(var k in g)if (!(k in d)) {
                    for(var y in m(k))if (y in d) {
                        b[k] = !0;
                        break;
                    }
                }
                f = b;
                for(var _ in f)d[_] = !0;
            }
            var x = {
                getIds: function() {
                    var e = [];
                    return x.load(function(r) {
                        e.push(r);
                    }), e;
                },
                load: function(e, r) {
                    return i(m, d, e, r);
                }
            };
            return x;
        }
        return l;
    }();
    typeof r < "u" && (r.exports = t);
});
var nr = le((e, r)=>{
    var t = er(), a = ur(), n = new Set;
    function o(e) {
        e === void 0 ? e = Object.keys(t.languages).filter((e)=>e != "meta") : Array.isArray(e) || (e = [
            e
        ]);
        let r = [
            ...n,
            ...Object.keys(Prism.languages)
        ];
        a(t, e, r).load((e)=>{
            if (!(e in t.languages)) {
                o.silent || console.warn("Language does not exist: " + e);
                return;
            }
            let r = "./prism-" + e;
            delete _e.cache[_e.resolve(r)], delete Prism.languages[e], _e(r), n.add(e);
        });
    }
    o.silent = !1;
    r.exports = o;
});
var ir = le((e, r)=>{
    var t = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
    var a = function(e) {
        var r = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, t = 0, a = {}, n = {
            manual: e.Prism && e.Prism.manual,
            disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
            util: {
                encode: function e(r) {
                    return r instanceof o ? new o(r.type, e(r.content), r.alias) : Array.isArray(r) ? r.map(e) : r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
                },
                type: function(e) {
                    return Object.prototype.toString.call(e).slice(8, -1);
                },
                objId: function(e) {
                    return e.__id || Object.defineProperty(e, "__id", {
                        value: ++t
                    }), e.__id;
                },
                clone: function e(r, t) {
                    t = t || {};
                    var a, o;
                    switch(n.util.type(r)){
                        case "Object":
                            if (o = n.util.objId(r), t[o]) return t[o];
                            a = {}, t[o] = a;
                            for(var i in r)r.hasOwnProperty(i) && (a[i] = e(r[i], t));
                            return a;
                        case "Array":
                            return o = n.util.objId(r), t[o] ? t[o] : (a = [], t[o] = a, r.forEach(function(r, n) {
                                a[n] = e(r, t);
                            }), a);
                        default:
                            return r;
                    }
                },
                getLanguage: function(e) {
                    for(; e;){
                        var t = r.exec(e.className);
                        if (t) return t[1].toLowerCase();
                        e = e.parentElement;
                    }
                    return "none";
                },
                setLanguage: function(e, t) {
                    e.className = e.className.replace(RegExp(r, "gi"), ""), e.classList.add("language-" + t);
                },
                currentScript: function() {
                    if (typeof document > "u") return null;
                    if ("currentScript" in document && 1 < 2) return document.currentScript;
                    try {
                        throw new Error;
                    } catch (a) {
                        var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a.stack) || [])[1];
                        if (e) {
                            var r = document.getElementsByTagName("script");
                            for(var t in r)if (r[t].src == e) return r[t];
                        }
                        return null;
                    }
                },
                isActive: function(e, r, t) {
                    for(var a = "no-" + r; e;){
                        var n = e.classList;
                        if (n.contains(r)) return !0;
                        if (n.contains(a)) return !1;
                        e = e.parentElement;
                    }
                    return !!t;
                }
            },
            languages: {
                plain: a,
                plaintext: a,
                text: a,
                txt: a,
                extend: function(e, r) {
                    var t = n.util.clone(n.languages[e]);
                    for(var a in r)t[a] = r[a];
                    return t;
                },
                insertBefore: function(e, r, t, a) {
                    a = a || n.languages;
                    var o = a[e], i = {};
                    for(var s in o)if (o.hasOwnProperty(s)) {
                        if (s == r) for(var l in t)t.hasOwnProperty(l) && (i[l] = t[l]);
                        t.hasOwnProperty(s) || (i[s] = o[s]);
                    }
                    var c = a[e];
                    return a[e] = i, n.languages.DFS(n.languages, function(r, t) {
                        t === c && r != e && (this[r] = i);
                    }), i;
                },
                DFS: function e(r, t, a, o) {
                    o = o || {};
                    var i = n.util.objId;
                    for(var s in r)if (r.hasOwnProperty(s)) {
                        t.call(r, s, r[s], a || s);
                        var l = r[s], c = n.util.type(l);
                        c === "Object" && !o[i(l)] ? (o[i(l)] = !0, e(l, t, null, o)) : c === "Array" && !o[i(l)] && (o[i(l)] = !0, e(l, t, s, o));
                    }
                }
            },
            plugins: {},
            highlightAll: function(e, r) {
                n.highlightAllUnder(document, e, r);
            },
            highlightAllUnder: function(e, r, t) {
                var a = {
                    callback: t,
                    container: e,
                    selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                };
                n.hooks.run("before-highlightall", a), a.elements = Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)), n.hooks.run("before-all-elements-highlight", a);
                for(var o = 0, i; i = a.elements[o++];)n.highlightElement(i, r === !0, a.callback);
            },
            highlightElement: function(r, t, a) {
                var o = n.util.getLanguage(r), i = n.languages[o];
                n.util.setLanguage(r, o);
                var s = r.parentElement;
                s && s.nodeName.toLowerCase() === "pre" && n.util.setLanguage(s, o);
                var l = r.textContent, c = {
                    element: r,
                    language: o,
                    grammar: i,
                    code: l
                };
                function u(e) {
                    c.highlightedCode = e, n.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, n.hooks.run("after-highlight", c), n.hooks.run("complete", c), a && a.call(c.element);
                }
                if (n.hooks.run("before-sanity-check", c), s = c.element.parentElement, s && s.nodeName.toLowerCase() === "pre" && !s.hasAttribute("tabindex") && s.setAttribute("tabindex", "0"), !c.code) {
                    n.hooks.run("complete", c), a && a.call(c.element);
                    return;
                }
                if (n.hooks.run("before-highlight", c), !c.grammar) {
                    u(n.util.encode(c.code));
                    return;
                }
                if (t && e.Worker) {
                    var p = new Worker(n.filename);
                    p.onmessage = function(e) {
                        u(e.data);
                    }, p.postMessage(JSON.stringify({
                        language: c.language,
                        code: c.code,
                        immediateClose: !0
                    }));
                } else u(n.highlight(c.code, c.grammar, c.language));
            },
            highlight: function(e, r, t) {
                var a = {
                    code: e,
                    grammar: r,
                    language: t
                };
                if (n.hooks.run("before-tokenize", a), !a.grammar) throw new Error('The language "' + a.language + '" has no grammar.');
                return a.tokens = n.tokenize(a.code, a.grammar), n.hooks.run("after-tokenize", a), o.stringify(n.util.encode(a.tokens), a.language);
            },
            tokenize: function(e, r) {
                var t = r.rest;
                if (t) {
                    for(var a in t)r[a] = t[a];
                    delete r.rest;
                }
                var n = new l;
                return c(n, n.head, e), s(e, n, r, n.head, 0), p(n);
            },
            hooks: {
                all: {},
                add: function(e, r) {
                    var t = n.hooks.all;
                    t[e] = t[e] || [], t[e].push(r);
                },
                run: function(e, r) {
                    var t = n.hooks.all[e];
                    if (!(!t || !t.length)) for(var a = 0, o; o = t[a++];)o(r);
                }
            },
            Token: o
        };
        e.Prism = n;
        function o(e, r, t, a) {
            this.type = e, this.content = r, this.alias = t, this.length = (a || "").length | 0;
        }
        o.stringify = function e(r, t) {
            if (typeof r == "string") return r;
            if (Array.isArray(r)) {
                var a = "";
                return r.forEach(function(r) {
                    a += e(r, t);
                }), a;
            }
            var o = {
                type: r.type,
                content: e(r.content, t),
                tag: "span",
                classes: [
                    "token",
                    r.type
                ],
                attributes: {},
                language: t
            }, i = r.alias;
            i && (Array.isArray(i) ? Array.prototype.push.apply(o.classes, i) : o.classes.push(i)), n.hooks.run("wrap", o);
            var s = "";
            for(var l in o.attributes)s += " " + l + '="' + (o.attributes[l] || "").replace(/"/g, "&quot;") + '"';
            return "<" + o.tag + ' class="' + o.classes.join(" ") + '"' + s + ">" + o.content + "</" + o.tag + ">";
        };
        function i(e, r, t, a) {
            e.lastIndex = r;
            var n = e.exec(t);
            if (n && a && n[1]) {
                var o = n[1].length;
                n.index += o, n[0] = n[0].slice(o);
            }
            return n;
        }
        function s(e, r, t, a, l, p) {
            for(var d in t)if (!(!t.hasOwnProperty(d) || !t[d])) {
                var g = t[d];
                g = Array.isArray(g) ? g : [
                    g
                ];
                for(var h = 0; h < g.length; ++h){
                    if (p && p.cause == d + "," + h) return;
                    var m = g[h], f = m.inside, b = !!m.lookbehind, w = !!m.greedy, v = m.alias;
                    if (w && !m.pattern.global) {
                        var k = m.pattern.toString().match(/[imsuy]*$/)[0];
                        m.pattern = RegExp(m.pattern.source, k + "g");
                    }
                    for(var y = m.pattern || m, _ = a.next, x = l; _ !== r.tail && !(p && x >= p.reach); x += _.value.length, _ = _.next){
                        var A = _.value;
                        if (r.length > e.length) return;
                        if (!(A instanceof o)) {
                            var q = 1, D;
                            if (w) {
                                if (D = i(y, x, e, b), !D || D.index >= e.length) break;
                                var S = D.index, E = D.index + D[0].length, C = x;
                                for(C += _.value.length; S >= C;)_ = _.next, C += _.value.length;
                                if (C -= _.value.length, x = C, _.value instanceof o) continue;
                                for(var L = _; L !== r.tail && (C < E || typeof L.value == "string"); L = L.next)q++, C += L.value.length;
                                q--, A = e.slice(x, C), D.index -= x;
                            } else if (D = i(y, 0, A, b), !D) continue;
                            var S = D.index, j = D[0], T = A.slice(0, S), P = A.slice(S + j.length), R = x + A.length;
                            p && R > p.reach && (p.reach = R);
                            var F = _.prev;
                            T && (F = c(r, F, T), x += T.length), u(r, F, q);
                            var B = new o(d, f ? n.tokenize(j, f) : j, v, j);
                            if (_ = c(r, F, B), P && c(r, _, P), q > 1) {
                                var N = {
                                    cause: d + "," + h,
                                    reach: R
                                };
                                s(e, r, t, _.prev, x, N), p && N.reach > p.reach && (p.reach = N.reach);
                            }
                        }
                    }
                }
            }
        }
        function l() {
            var e = {
                value: null,
                prev: null,
                next: null
            }, r = {
                value: null,
                prev: e,
                next: null
            };
            e.next = r, this.head = e, this.tail = r, this.length = 0;
        }
        function c(e, r, t) {
            var a = r.next, n = {
                value: t,
                prev: r,
                next: a
            };
            return r.next = n, a.prev = n, e.length++, n;
        }
        function u(e, r, t) {
            for(var a = r.next, n = 0; n < t && a !== e.tail; n++)a = a.next;
            r.next = a, a.prev = r, e.length -= n;
        }
        function p(e) {
            for(var r = [], t = e.head.next; t !== e.tail;)r.push(t.value), t = t.next;
            return r;
        }
        if (!e.document) return e.addEventListener && (n.disableWorkerMessageHandler || e.addEventListener("message", function(r) {
            var t = JSON.parse(r.data), a = t.language, o = t.code, i = t.immediateClose;
            e.postMessage(n.highlight(o, n.languages[a], a)), i && e.close();
        }, !1)), n;
        var d = n.util.currentScript();
        d && (n.filename = d.src, d.hasAttribute("data-manual") && (n.manual = !0));
        function g() {
            n.manual || n.highlightAll();
        }
        if (!n.manual) {
            var h = document.readyState;
            h === "loading" || h === "interactive" && d && d.defer ? document.addEventListener("DOMContentLoaded", g) : window.requestAnimationFrame ? window.requestAnimationFrame(g) : window.setTimeout(g, 16);
        }
        return n;
    }(t);
    typeof r < "u" && r.exports && (r.exports = a);
    typeof global < "u" && (global.Prism = a);
    a.languages.markup = {
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
    a.languages.markup.tag.inside["attr-value"].inside.entity = a.languages.markup.entity;
    a.languages.markup.doctype.inside["internal-subset"].inside = a.languages.markup;
    a.hooks.add("wrap", function(e) {
        e.type === "entity" && (e.attributes.title = e.content.replace(/&amp;/, "&"));
    });
    Object.defineProperty(a.languages.markup.tag, "addInlined", {
        value: function(e, r) {
            var t = {};
            t["language-" + r] = {
                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                lookbehind: !0,
                inside: a.languages[r]
            }, t.cdata = /^<!\[CDATA\[|\]\]>$/i;
            var n = {
                "included-cdata": {
                    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                    inside: t
                }
            };
            n["language-" + r] = {
                pattern: /[\s\S]+/,
                inside: a.languages[r]
            };
            var o = {};
            o[e] = {
                pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
                    return e;
                }), "i"),
                lookbehind: !0,
                greedy: !0,
                inside: n
            }, a.languages.insertBefore("markup", "cdata", o);
        }
    });
    Object.defineProperty(a.languages.markup.tag, "addAttribute", {
        value: function(e, r) {
            a.languages.markup.tag.inside["special-attr"].push({
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
                                    r,
                                    "language-" + r
                                ],
                                inside: a.languages[r]
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
    a.languages.html = a.languages.markup;
    a.languages.mathml = a.languages.markup;
    a.languages.svg = a.languages.markup;
    a.languages.xml = a.languages.extend("markup", {});
    a.languages.ssml = a.languages.xml;
    a.languages.atom = a.languages.xml;
    a.languages.rss = a.languages.xml;
    (function(e) {
        var r = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
        e.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
                pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + r.source + ")*?" + /(?:;|(?=\s*\{))/.source),
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
                pattern: RegExp("\\burl\\((?:" + r.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
                greedy: !0,
                inside: {
                    function: /^url/i,
                    punctuation: /^\(|\)$/,
                    string: {
                        pattern: RegExp("^" + r.source + "$"),
                        alias: "url"
                    }
                }
            },
            selector: {
                pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + r.source + ")*(?=\\s*\\{)"),
                lookbehind: !0
            },
            string: {
                pattern: r,
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
        var t = e.languages.markup;
        t && (t.tag.addInlined("style", "css"), t.tag.addAttribute("style", "css"));
    })(a);
    a.languages.clike = {
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
    a.languages.javascript = a.languages.extend("clike", {
        "class-name": [
            a.languages.clike["class-name"],
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
    a.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
    a.languages.insertBefore("javascript", "keyword", {
        regex: {
            pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
            lookbehind: !0,
            greedy: !0,
            inside: {
                "regex-source": {
                    pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                    lookbehind: !0,
                    alias: "language-regex",
                    inside: a.languages.regex
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
                inside: a.languages.javascript
            },
            {
                pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                lookbehind: !0,
                inside: a.languages.javascript
            },
            {
                pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                lookbehind: !0,
                inside: a.languages.javascript
            },
            {
                pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                lookbehind: !0,
                inside: a.languages.javascript
            }
        ],
        constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    });
    a.languages.insertBefore("javascript", "string", {
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
                        rest: a.languages.javascript
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
    a.languages.insertBefore("javascript", "operator", {
        "literal-property": {
            pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
            lookbehind: !0,
            alias: "property"
        }
    });
    a.languages.markup && (a.languages.markup.tag.addInlined("script", "javascript"), a.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript"));
    a.languages.js = a.languages.javascript;
    (function() {
        if (typeof a > "u" || typeof document > "u") return;
        Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
        var e = "Loading…", r = function(e, r) {
            return "✖ Error " + e + " while fetching file: " + r;
        }, t = "✖ Error: File does not exist or is empty", n = {
            js: "javascript",
            py: "python",
            rb: "ruby",
            ps1: "powershell",
            psm1: "powershell",
            sh: "bash",
            bat: "batch",
            h: "c",
            tex: "latex"
        }, o = "data-src-status", i = "loading", s = "loaded", l = "failed", c = "pre[data-src]:not([" + o + '="' + s + '"]):not([' + o + '="' + i + '"])';
        function u(e, a, n) {
            var o = new XMLHttpRequest;
            o.open("GET", e, !0), o.onreadystatechange = function() {
                o.readyState == 4 && (o.status < 400 && o.responseText ? a(o.responseText) : o.status >= 400 ? n(r(o.status, o.statusText)) : n(t));
            }, o.send(null);
        }
        function p(e) {
            var r = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e || "");
            if (r) {
                var t = Number(r[1]), a = r[2], n = r[3];
                return a ? n ? [
                    t,
                    Number(n)
                ] : [
                    t,
                    void 0
                ] : [
                    t,
                    t
                ];
            }
        }
        a.hooks.add("before-highlightall", function(e) {
            e.selector += ", " + c;
        }), a.hooks.add("before-sanity-check", function(r) {
            var t = r.element;
            if (t.matches(c)) {
                r.code = "", t.setAttribute(o, i);
                var d = t.appendChild(document.createElement("CODE"));
                d.textContent = e;
                var g = t.getAttribute("data-src"), h = r.language;
                if (h === "none") {
                    var m = (/\.(\w+)$/.exec(g) || [
                        ,
                        "none"
                    ])[1];
                    h = n[m] || m;
                }
                a.util.setLanguage(d, h), a.util.setLanguage(t, h);
                var f = a.plugins.autoloader;
                f && f.loadLanguages(h), u(g, function(e) {
                    t.setAttribute(o, s);
                    var r = p(t.getAttribute("data-range"));
                    if (r) {
                        var n = e.split(/\r\n?|\n/g), i = r[0], l = r[1] == null ? n.length : r[1];
                        i < 0 && (i += n.length), i = Math.max(0, Math.min(i - 1, n.length)), l < 0 && (l += n.length), l = Math.max(0, Math.min(l, n.length)), e = n.slice(i, l).join(`
`), t.hasAttribute("data-start") || t.setAttribute("data-start", String(i + 1));
                    }
                    d.textContent = e, a.highlightElement(d);
                }, function(e) {
                    t.setAttribute(o, l), d.textContent = e;
                });
            }
        }), a.plugins.fileHighlight = {
            highlight: function(e) {
                for(var r = (e || document).querySelectorAll(c), t = 0, n; n = r[t++];)a.highlightElement(n);
            }
        };
        var d = !1;
        a.fileHighlight = function() {
            d || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), d = !0), a.plugins.fileHighlight.highlight.apply(this, arguments);
        };
    })();
});
var tr = le((e, r)=>{
    (function(t) {
        var a = typeof e == "object" && e, n = typeof r == "object" && r && r.exports == a && r, o = typeof global == "object" && global;
        (o.global === o || o.window === o) && (t = o);
        var i = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, s = /[\x01-\x7F]/g, l = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g, c = /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g, u = {
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
        }, p = /["&'<>`]/g, d = {
            '"': "&quot;",
            "&": "&amp;",
            "'": "&#x27;",
            "<": "&lt;",
            ">": "&gt;",
            "`": "&#x60;"
        }, g = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/, h = /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, m = /&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|maltese|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g, f = {
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
            NewLine: `
`,
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
        }, b = {
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
        }, w = {
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
        }, v = [
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
        ], k = String.fromCharCode, y = {}, _ = y.hasOwnProperty, x = function(e, r) {
            return _.call(e, r);
        }, A = function(e, r) {
            for(var t = -1, a = e.length; ++t < a;)if (e[t] == r) return !0;
            return !1;
        }, q = function(e, r) {
            if (!e) return r;
            var t = {}, a;
            for(a in r)t[a] = x(e, a) ? e[a] : r[a];
            return t;
        }, D = function(e, r) {
            var t = "";
            return e >= 55296 && e <= 57343 || e > 1114111 ? (r && C("character reference outside the permissible Unicode range"), "�") : x(w, e) ? (r && C("disallowed character reference"), w[e]) : (r && A(v, e) && C("disallowed character reference"), e > 65535 && (e -= 65536, t += k(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), t += k(e), t);
        }, S = function(e) {
            return "&#x" + e.toString(16).toUpperCase() + ";";
        }, E = function(e) {
            return "&#" + e + ";";
        }, C = function(e) {
            throw Error("Parse error: " + e);
        }, L = function(e, r) {
            r = q(r, L.options);
            var t = r.strict;
            t && h.test(e) && C("forbidden code point");
            var a = r.encodeEverything, n = r.useNamedReferences, o = r.allowUnsafeSymbols, d = r.decimal ? E : S, g = function(e) {
                return d(e.charCodeAt(0));
            };
            return a ? (e = e.replace(s, function(e) {
                return n && x(u, e) ? "&" + u[e] + ";" : g(e);
            }), n && (e = e.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;").replace(/&#x66;&#x6A;/g, "&fjlig;")), n && (e = e.replace(c, function(e) {
                return "&" + u[e] + ";";
            }))) : n ? (o || (e = e.replace(p, function(e) {
                return "&" + u[e] + ";";
            })), e = e.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;"), e = e.replace(c, function(e) {
                return "&" + u[e] + ";";
            })) : o || (e = e.replace(p, g)), e.replace(i, function(e) {
                var r = e.charCodeAt(0), t = e.charCodeAt(1), a = (r - 55296) * 1024 + t - 56320 + 65536;
                return d(a);
            }).replace(l, g);
        };
        L.options = {
            allowUnsafeSymbols: !1,
            encodeEverything: !1,
            strict: !1,
            useNamedReferences: !1,
            decimal: !1
        };
        var j = function(e, r) {
            r = q(r, j.options);
            var t = r.strict;
            return t && g.test(e) && C("malformed character reference"), e.replace(m, function(e, a, n, o, i, s, l, c, u) {
                var p, d, g, h, m, w;
                return a ? (m = a, f[m]) : n ? (m = n, w = o, w && r.isAttributeValue ? (t && w == "=" && C("`&` did not start a character reference"), e) : (t && C("named character reference was not terminated by a semicolon"), b[m] + (w || ""))) : i ? (g = i, d = s, t && !d && C("character reference was not terminated by a semicolon"), p = parseInt(g, 10), D(p, t)) : l ? (h = l, d = c, t && !d && C("character reference was not terminated by a semicolon"), p = parseInt(h, 16), D(p, t)) : (t && C("named character reference was not terminated by a semicolon"), e);
            });
        };
        j.options = {
            isAttributeValue: !1,
            strict: !1
        };
        var T = function(e) {
            return e.replace(p, function(e) {
                return d[e];
            });
        }, P = {
            version: "1.2.0",
            encode: L,
            decode: j,
            escape: T,
            unescape: j
        };
        if (typeof define == "function" && typeof define.amd == "object" && define.amd) define(function() {
            return P;
        });
        else if (a && !a.nodeType) if (n) n.exports = P;
        else for(var R in P)x(P, R) && (a[R] = P[R]);
        else t.he = P;
    })(e);
});
var sr = ie(me(), 1);
function Au(e) {
    return typeof e > "u" || e === null;
}
function br(e) {
    return typeof e == "object" && e !== null;
}
function wr(e) {
    return Array.isArray(e) ? e : Au(e) ? [] : [
        e
    ];
}
function Ar(e, r) {
    var t, a, n, o;
    if (r) for(o = Object.keys(r), t = 0, a = o.length; t < a; t += 1)n = o[t], e[n] = r[n];
    return e;
}
function vr(e, r) {
    var t = "", a;
    for(a = 0; a < r; a += 1)t += e;
    return t;
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
function vu(e, r) {
    var t = "", a = e.reason || "(unknown reason)";
    return e.mark ? (e.mark.name && (t += 'in "' + e.mark.name + '" '), t += "(" + (e.mark.line + 1) + ":" + (e.mark.column + 1) + ")", !r && e.mark.snippet && (t += `

` + e.mark.snippet), a + " " + t) : a;
}
function De(e, r) {
    Error.call(this), this.name = "YAMLException", this.reason = e, this.mark = r, this.message = vu(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
De.prototype = Object.create(Error.prototype);
De.prototype.constructor = De;
De.prototype.toString = function(e) {
    return this.name + ": " + vu(this, e);
};
var J = De;
function je(e, r, t, a, n) {
    var o = "", i = "", s = Math.floor(n / 2) - 1;
    return a - r > s && (o = " ... ", r = a - s + o.length), t - a > s && (i = " ...", t = a + s - i.length), {
        str: o + e.slice(r, t).replace(/\t/g, "→") + i,
        pos: a - r + o.length
    };
}
function Ne(e, r) {
    return Y.repeat(" ", r - e.length) + e;
}
function Br(e, r) {
    if (r = Object.create(r || null), !e.buffer) return null;
    r.maxLength || (r.maxLength = 79), typeof r.indent != "number" && (r.indent = 1), typeof r.linesBefore != "number" && (r.linesBefore = 3), typeof r.linesAfter != "number" && (r.linesAfter = 2);
    for(var t = /\r?\n|\r|\0/g, a = [
        0
    ], n = [], o, i = -1; o = t.exec(e.buffer);)n.push(o.index), a.push(o.index + o[0].length), e.position <= o.index && i < 0 && (i = a.length - 2);
    i < 0 && (i = a.length - 1);
    var s = "", l, c, u = Math.min(e.line + r.linesAfter, n.length).toString().length, p = r.maxLength - (r.indent + u + 3);
    for(l = 1; l <= r.linesBefore && !(i - l < 0); l++)c = je(e.buffer, a[i - l], n[i - l], e.position - (a[i] - a[i - l]), p), s = Y.repeat(" ", r.indent) + Ne((e.line - l + 1).toString(), u) + " | " + c.str + `
` + s;
    for(c = je(e.buffer, a[i], n[i], e.position, p), s += Y.repeat(" ", r.indent) + Ne((e.line + 1).toString(), u) + " | " + c.str + `
`, s += Y.repeat("-", r.indent + u + 3 + c.pos) + `^
`, l = 1; l <= r.linesAfter && !(i + l >= n.length); l++)c = je(e.buffer, a[i + l], n[i + l], e.position - (a[i] - a[i + l]), p), s += Y.repeat(" ", r.indent) + Ne((e.line + l + 1).toString(), u) + " | " + c.str + `
`;
    return s.replace(/\n$/, "");
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
    var r = {};
    return e !== null && Object.keys(e).forEach(function(t) {
        e[t].forEach(function(e) {
            r[String(e)] = t;
        });
    }), r;
}
function Rr(e, r) {
    if (r = r || {}, Object.keys(r).forEach(function(r) {
        if (qr.indexOf(r) === -1) throw new J('Unknown option "' + r + '" is met in definition of "' + e + '" YAML type.');
    }), this.options = r, this.tag = e, this.kind = r.kind || null, this.resolve = r.resolve || function() {
        return !0;
    }, this.construct = r.construct || function(e) {
        return e;
    }, this.instanceOf = r.instanceOf || null, this.predicate = r.predicate || null, this.represent = r.represent || null, this.representName = r.representName || null, this.defaultStyle = r.defaultStyle || null, this.multi = r.multi || !1, this.styleAliases = Tr(r.styleAliases || null), Lr.indexOf(this.kind) === -1) throw new J('Unknown kind "' + this.kind + '" is specified for "' + e + '" YAML type.');
}
var W = Rr;
function iu(e, r) {
    var t = [];
    return e[r].forEach(function(e) {
        var r = t.length;
        t.forEach(function(t, a) {
            t.tag === e.tag && t.kind === e.kind && t.multi === e.multi && (r = a);
        }), t[r] = e;
    }), t;
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
    }, r, t;
    function a(r) {
        r.multi ? (e.multi[r.kind].push(r), e.multi.fallback.push(r)) : e[r.kind][r.tag] = e.fallback[r.tag] = r;
    }
    for(r = 0, t = arguments.length; r < t; r += 1)arguments[r].forEach(a);
    return e;
}
function Ie(e) {
    return this.extend(e);
}
Ie.prototype.extend = function(e) {
    var r = [], t = [];
    if (e instanceof W) t.push(e);
    else if (Array.isArray(e)) t = t.concat(e);
    else if (e && (Array.isArray(e.implicit) || Array.isArray(e.explicit))) e.implicit && (r = r.concat(e.implicit)), e.explicit && (t = t.concat(e.explicit));
    else throw new J("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
    r.forEach(function(e) {
        if (!(e instanceof W)) throw new J("Specified list of YAML types (or a single Type object) contains a non-Type object.");
        if (e.loadKind && e.loadKind !== "scalar") throw new J("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
        if (e.multi) throw new J("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
    }), t.forEach(function(e) {
        if (!(e instanceof W)) throw new J("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    });
    var a = Object.create(Ie.prototype);
    return a.implicit = (this.implicit || []).concat(r), a.explicit = (this.explicit || []).concat(t), a.compiledImplicit = iu(a, "implicit"), a.compiledExplicit = iu(a, "explicit"), a.compiledTypeMap = Pr(a.compiledImplicit, a.compiledExplicit), a;
};
var jr = Ie, Nr = new W("tag:yaml.org,2002:str", {
    kind: "scalar",
    construct: function(e) {
        return e !== null ? e : "";
    }
}), Mr = new W("tag:yaml.org,2002:seq", {
    kind: "sequence",
    construct: function(e) {
        return e !== null ? e : [];
    }
}), Ir = new W("tag:yaml.org,2002:map", {
    kind: "mapping",
    construct: function(e) {
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
    var r = e.length;
    return r === 1 && e === "~" || r === 4 && (e === "null" || e === "Null" || e === "NULL");
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
        canonical: function() {
            return "~";
        },
        lowercase: function() {
            return "null";
        },
        uppercase: function() {
            return "NULL";
        },
        camelcase: function() {
            return "Null";
        },
        empty: function() {
            return "";
        }
    },
    defaultStyle: "lowercase"
});
function Vr(e) {
    if (e === null) return !1;
    var r = e.length;
    return r === 4 && (e === "true" || e === "True" || e === "TRUE") || r === 5 && (e === "false" || e === "False" || e === "FALSE");
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
        lowercase: function(e) {
            return e ? "true" : "false";
        },
        uppercase: function(e) {
            return e ? "TRUE" : "FALSE";
        },
        camelcase: function(e) {
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
    var r = e.length, t = 0, a = !1, n;
    if (!r) return !1;
    if (n = e[t], (n === "-" || n === "+") && (n = e[++t]), n === "0") {
        if (t + 1 === r) return !0;
        if (n = e[++t], n === "b") {
            for(t++; t < r; t++)if (n = e[t], n !== "_") {
                if (n !== "0" && n !== "1") return !1;
                a = !0;
            }
            return a && n !== "_";
        }
        if (n === "x") {
            for(t++; t < r; t++)if (n = e[t], n !== "_") {
                if (!Kr(e.charCodeAt(t))) return !1;
                a = !0;
            }
            return a && n !== "_";
        }
        if (n === "o") {
            for(t++; t < r; t++)if (n = e[t], n !== "_") {
                if (!Jr(e.charCodeAt(t))) return !1;
                a = !0;
            }
            return a && n !== "_";
        }
    }
    if (n === "_") return !1;
    for(; t < r; t++)if (n = e[t], n !== "_") {
        if (!Zr(e.charCodeAt(t))) return !1;
        a = !0;
    }
    return !(!a || n === "_");
}
function Xr(e) {
    var r = e, t = 1, a;
    if (r.indexOf("_") !== -1 && (r = r.replace(/_/g, "")), a = r[0], (a === "-" || a === "+") && (a === "-" && (t = -1), r = r.slice(1), a = r[0]), r === "0") return 0;
    if (a === "0") {
        if (r[1] === "b") return t * parseInt(r.slice(2), 2);
        if (r[1] === "x") return t * parseInt(r.slice(2), 16);
        if (r[1] === "o") return t * parseInt(r.slice(2), 8);
    }
    return t * parseInt(r, 10);
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
        binary: function(e) {
            return e >= 0 ? "0b" + e.toString(2) : "-0b" + e.toString(2).slice(1);
        },
        octal: function(e) {
            return e >= 0 ? "0o" + e.toString(8) : "-0o" + e.toString(8).slice(1);
        },
        decimal: function(e) {
            return e.toString(10);
        },
        hexadecimal: function(e) {
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
    var r, t;
    return r = e.replace(/_/g, "").toLowerCase(), t = r[0] === "-" ? -1 : 1, "+-".indexOf(r[0]) >= 0 && (r = r.slice(1)), r === ".inf" ? t === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : r === ".nan" ? NaN : t * parseFloat(r, 10);
}
var ia = /^[-+]?[0-9]+e/;
function ta(e, r) {
    var t;
    if (isNaN(e)) switch(r){
        case "lowercase":
            return ".nan";
        case "uppercase":
            return ".NAN";
        case "camelcase":
            return ".NaN";
    }
    else if (Number.POSITIVE_INFINITY === e) switch(r){
        case "lowercase":
            return ".inf";
        case "uppercase":
            return ".INF";
        case "camelcase":
            return ".Inf";
    }
    else if (Number.NEGATIVE_INFINITY === e) switch(r){
        case "lowercase":
            return "-.inf";
        case "uppercase":
            return "-.INF";
        case "camelcase":
            return "-.Inf";
    }
    else if (Y.isNegativeZero(e)) return "-0.0";
    return t = e.toString(10), ia.test(t) ? t.replace("e", ".e") : t;
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
    var r, t, a, n, o, i, s, l = 0, c = null, u, p, d;
    if (r = Cu.exec(e), r === null && (r = yu.exec(e)), r === null) throw new Error("Date resolve error");
    if (t = +r[1], a = +r[2] - 1, n = +r[3], !r[4]) return new Date(Date.UTC(t, a, n));
    if (o = +r[4], i = +r[5], s = +r[6], r[7]) {
        for(l = r[7].slice(0, 3); l.length < 3;)l += "0";
        l = +l;
    }
    return r[9] && (u = +r[10], p = +(r[11] || 0), c = (u * 60 + p) * 6e4, r[9] === "-" && (c = -c)), d = new Date(Date.UTC(t, a, n, o, i, s, l)), c && d.setTime(d.getTime() - c), d;
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
}), Ue = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function Da(e) {
    if (e === null) return !1;
    var r, t, a = 0, n = e.length, o = Ue;
    for(t = 0; t < n; t++)if (r = o.indexOf(e.charAt(t)), !(r > 64)) {
        if (r < 0) return !1;
        a += 6;
    }
    return a % 8 === 0;
}
function ba(e) {
    var r, t, a = e.replace(/[\r\n=]/g, ""), n = a.length, o = Ue, i = 0, s = [];
    for(r = 0; r < n; r++)r % 4 === 0 && r && (s.push(i >> 16 & 255), s.push(i >> 8 & 255), s.push(i & 255)), i = i << 6 | o.indexOf(a.charAt(r));
    return t = n % 4 * 6, t === 0 ? (s.push(i >> 16 & 255), s.push(i >> 8 & 255), s.push(i & 255)) : t === 18 ? (s.push(i >> 10 & 255), s.push(i >> 2 & 255)) : t === 12 && s.push(i >> 4 & 255), new Uint8Array(s);
}
function wa(e) {
    var r = "", t = 0, a, n, o = e.length, i = Ue;
    for(a = 0; a < o; a++)a % 3 === 0 && a && (r += i[t >> 18 & 63], r += i[t >> 12 & 63], r += i[t >> 6 & 63], r += i[t & 63]), t = (t << 8) + e[a];
    return n = o % 3, n === 0 ? (r += i[t >> 18 & 63], r += i[t >> 12 & 63], r += i[t >> 6 & 63], r += i[t & 63]) : n === 2 ? (r += i[t >> 10 & 63], r += i[t >> 4 & 63], r += i[t << 2 & 63], r += i[64]) : n === 1 && (r += i[t >> 2 & 63], r += i[t << 4 & 63], r += i[64], r += i[64]), r;
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
    var r = [], t, a, n, o, i, s = e;
    for(t = 0, a = s.length; t < a; t += 1){
        if (n = s[t], i = !1, ya.call(n) !== "[object Object]") return !1;
        for(o in n)if (Ca.call(n, o)) if (!i) i = !0;
        else return !1;
        if (!i) return !1;
        if (r.indexOf(o) === -1) r.push(o);
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
    var r, t, a, n, o, i = e;
    for(o = new Array(i.length), r = 0, t = i.length; r < t; r += 1){
        if (a = i[r], xa.call(a) !== "[object Object]" || (n = Object.keys(a), n.length !== 1)) return !1;
        o[r] = [
            n[0],
            a[n[0]]
        ];
    }
    return !0;
}
function Ba(e) {
    if (e === null) return [];
    var r, t, a, n, o, i = e;
    for(o = new Array(i.length), r = 0, t = i.length; r < t; r += 1)a = i[r], n = Object.keys(a), o[r] = [
        n[0],
        a[n[0]]
    ];
    return o;
}
var Sa = new W("tag:yaml.org,2002:pairs", {
    kind: "sequence",
    resolve: Fa,
    construct: Ba
}), qa = Object.prototype.hasOwnProperty;
function La(e) {
    if (e === null) return !0;
    var r, t = e;
    for(r in t)if (qa.call(t, r) && t[r] !== null) return !1;
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
    var r;
    return 48 <= e && e <= 57 ? e - 48 : (r = e | 32, 97 <= r && r <= 102 ? r - 97 + 10 : -1);
}
function za(e) {
    return e === 120 ? 2 : e === 117 ? 4 : e === 85 ? 8 : 0;
}
function Oa(e) {
    return 48 <= e && e <= 57 ? e - 48 : -1;
}
function du(e) {
    return e === 48 ? "\x00" : e === 97 ? "\x07" : e === 98 ? "\b" : e === 116 || e === 9 ? "	" : e === 110 ? `
` : e === 118 ? "\v" : e === 102 ? "\f" : e === 114 ? "\r" : e === 101 ? "\x1b" : e === 32 ? " " : e === 34 ? '"' : e === 47 ? "/" : e === 92 ? "\\" : e === 78 ? "\x85" : e === 95 ? "\xa0" : e === 76 ? "\u2028" : e === 80 ? "\u2029" : "";
}
function Ha(e) {
    return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode((e - 65536 >> 10) + 55296, (e - 65536 & 1023) + 56320);
}
var Bu = new Array(256), Su = new Array(256);
for(te = 0; te < 256; te++)Bu[te] = du(te) ? 1 : 0, Su[te] = du(te);
var te;
function Ga(e, r) {
    this.input = e, this.filename = r.filename || null, this.schema = r.schema || _u, this.onWarning = r.onWarning || null, this.legacy = r.legacy || !1, this.json = r.json || !1, this.listener = r.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function qu(e, r) {
    var t = {
        name: e.filename,
        buffer: e.input.slice(0, -1),
        position: e.position,
        line: e.line,
        column: e.position - e.lineStart
    };
    return t.snippet = Sr(t), new J(r, t);
}
function M(e, r) {
    throw qu(e, r);
}
function Fe(e, r) {
    e.onWarning && e.onWarning.call(null, qu(e, r));
}
var lu = {
    YAML: function(e, r, t) {
        var a, n, o;
        e.version !== null && M(e, "duplication of %YAML directive"), t.length !== 1 && M(e, "YAML directive accepts exactly one argument"), a = /^([0-9]+)\.([0-9]+)$/.exec(t[0]), a === null && M(e, "ill-formed argument of the YAML directive"), n = parseInt(a[1], 10), o = parseInt(a[2], 10), n !== 1 && M(e, "unacceptable YAML version of the document"), e.version = t[0], e.checkLineBreaks = o < 2, o !== 1 && o !== 2 && Fe(e, "unsupported YAML version of the document");
    },
    TAG: function(e, r, t) {
        var a, n;
        t.length !== 2 && M(e, "TAG directive accepts exactly two arguments"), a = t[0], n = t[1], xu.test(a) || M(e, "ill-formed tag handle (first argument) of the TAG directive"), ne.call(e.tagMap, a) && M(e, 'there is a previously declared suffix for "' + a + '" tag handle'), Fu.test(n) || M(e, "ill-formed tag prefix (second argument) of the TAG directive");
        try {
            n = decodeURIComponent(n);
        } catch  {
            M(e, "tag prefix is malformed: " + n);
        }
        e.tagMap[a] = n;
    }
};
function ae(e, r, t, a) {
    var n, o, i, s;
    if (r < t) {
        if (s = e.input.slice(r, t), a) for(n = 0, o = s.length; n < o; n += 1)i = s.charCodeAt(n), i === 9 || 32 <= i && i <= 1114111 || M(e, "expected valid JSON character");
        else ja.test(s) && M(e, "the stream contains non-printable characters");
        e.result += s;
    }
}
function cu(e, r, t, a) {
    var n, o, i, s;
    for(Y.isObject(t) || M(e, "cannot merge mappings; the provided source object is unacceptable"), n = Object.keys(t), i = 0, s = n.length; i < s; i += 1)o = n[i], ne.call(r, o) || (r[o] = t[o], a[o] = !0);
}
function fe(e, r, t, a, n, o, i, s, l) {
    var c, u;
    if (Array.isArray(n)) for(n = Array.prototype.slice.call(n), c = 0, u = n.length; c < u; c += 1)Array.isArray(n[c]) && M(e, "nested arrays are not supported inside keys"), typeof n == "object" && ou(n[c]) === "[object Object]" && (n[c] = "[object Object]");
    if (typeof n == "object" && ou(n) === "[object Object]" && (n = "[object Object]"), n = String(n), r === null && (r = {}), a === "tag:yaml.org,2002:merge") if (Array.isArray(o)) for(c = 0, u = o.length; c < u; c += 1)cu(e, r, o[c], t);
    else cu(e, r, o, t);
    else !e.json && !ne.call(t, n) && ne.call(r, n) && (e.line = i || e.line, e.lineStart = s || e.lineStart, e.position = l || e.position, M(e, "duplicated mapping key")), n === "__proto__" ? Object.defineProperty(r, n, {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: o
    }) : r[n] = o, delete t[n];
    return r;
}
function Ve(e) {
    var r;
    r = e.input.charCodeAt(e.position), r === 10 ? e.position++ : r === 13 ? (e.position++, e.input.charCodeAt(e.position) === 10 && e.position++) : M(e, "a line break is expected"), e.line += 1, e.lineStart = e.position, e.firstTabInLine = -1;
}
function $(e, r, t) {
    for(var a = 0, n = e.input.charCodeAt(e.position); n !== 0;){
        for(; oe(n);)n === 9 && e.firstTabInLine === -1 && (e.firstTabInLine = e.position), n = e.input.charCodeAt(++e.position);
        if (r && n === 35) do n = e.input.charCodeAt(++e.position);
        while (n !== 10 && n !== 13 && n !== 0);
        if (ue(n)) for(Ve(e), n = e.input.charCodeAt(e.position), a++, e.lineIndent = 0; n === 32;)e.lineIndent++, n = e.input.charCodeAt(++e.position);
        else break;
    }
    return t !== -1 && a !== 0 && e.lineIndent < t && Fe(e, "deficient indentation"), a;
}
function qe(e) {
    var r = e.position, t;
    return t = e.input.charCodeAt(r), !!((t === 45 || t === 46) && t === e.input.charCodeAt(r + 1) && t === e.input.charCodeAt(r + 2) && (r += 3, t = e.input.charCodeAt(r), t === 0 || Z(t)));
}
function $e(e, r) {
    r === 1 ? e.result += " " : r > 1 && (e.result += Y.repeat(`
`, r - 1));
}
function Ua(e, r, t) {
    var a, n, o, i, s, l, c, u, p = e.kind, d = e.result, g;
    if (g = e.input.charCodeAt(e.position), Z(g) || se(g) || g === 35 || g === 38 || g === 42 || g === 33 || g === 124 || g === 62 || g === 39 || g === 34 || g === 37 || g === 64 || g === 96 || (g === 63 || g === 45) && (n = e.input.charCodeAt(e.position + 1), Z(n) || t && se(n))) return !1;
    for(e.kind = "scalar", e.result = "", o = i = e.position, s = !1; g !== 0;){
        if (g === 58) {
            if (n = e.input.charCodeAt(e.position + 1), Z(n) || t && se(n)) break;
        } else if (g === 35) {
            if (a = e.input.charCodeAt(e.position - 1), Z(a)) break;
        } else {
            if (e.position === e.lineStart && qe(e) || t && se(g)) break;
            if (ue(g)) if (l = e.line, c = e.lineStart, u = e.lineIndent, $(e, !1, -1), e.lineIndent >= r) {
                s = !0, g = e.input.charCodeAt(e.position);
                continue;
            } else {
                e.position = i, e.line = l, e.lineStart = c, e.lineIndent = u;
                break;
            }
        }
        s && (ae(e, o, i, !1), $e(e, e.line - l), o = i = e.position, s = !1), oe(g) || (i = e.position + 1), g = e.input.charCodeAt(++e.position);
    }
    return ae(e, o, i, !1), e.result ? !0 : (e.kind = p, e.result = d, !1);
}
function Va(e, r) {
    var t, a, n;
    if (t = e.input.charCodeAt(e.position), t !== 39) return !1;
    for(e.kind = "scalar", e.result = "", e.position++, a = n = e.position; (t = e.input.charCodeAt(e.position)) !== 0;)if (t === 39) if (ae(e, a, e.position, !0), t = e.input.charCodeAt(++e.position), t === 39) a = e.position, e.position++, n = e.position;
    else return !0;
    else ue(t) ? (ae(e, a, n, !0), $e(e, $(e, !1, r)), a = n = e.position) : e.position === e.lineStart && qe(e) ? M(e, "unexpected end of the document within a single quoted scalar") : (e.position++, n = e.position);
    M(e, "unexpected end of the stream within a single quoted scalar");
}
function $a(e, r) {
    var t, a, n, o, i, s;
    if (s = e.input.charCodeAt(e.position), s !== 34) return !1;
    for(e.kind = "scalar", e.result = "", e.position++, t = a = e.position; (s = e.input.charCodeAt(e.position)) !== 0;){
        if (s === 34) return ae(e, t, e.position, !0), e.position++, !0;
        if (s === 92) {
            if (ae(e, t, e.position, !0), s = e.input.charCodeAt(++e.position), ue(s)) $(e, !1, r);
            else if (s < 256 && Bu[s]) e.result += Su[s], e.position++;
            else if ((i = za(s)) > 0) {
                for(n = i, o = 0; n > 0; n--)s = e.input.charCodeAt(++e.position), (i = Ia(s)) >= 0 ? o = (o << 4) + i : M(e, "expected hexadecimal character");
                e.result += Ha(o), e.position++;
            } else M(e, "unknown escape sequence");
            t = a = e.position;
        } else ue(s) ? (ae(e, t, a, !0), $e(e, $(e, !1, r)), t = a = e.position) : e.position === e.lineStart && qe(e) ? M(e, "unexpected end of the document within a double quoted scalar") : (e.position++, a = e.position);
    }
    M(e, "unexpected end of the stream within a double quoted scalar");
}
function Ya(e, r) {
    var t = !0, a, n, o, i = e.tag, s, l = e.anchor, c, u, p, d, g, h = Object.create(null), m, f, b, w;
    if (w = e.input.charCodeAt(e.position), w === 91) u = 93, g = !1, s = [];
    else if (w === 123) u = 125, g = !0, s = {};
    else return !1;
    for(e.anchor !== null && (e.anchorMap[e.anchor] = s), w = e.input.charCodeAt(++e.position); w !== 0;){
        if ($(e, !0, r), w = e.input.charCodeAt(e.position), w === u) return e.position++, e.tag = i, e.anchor = l, e.kind = g ? "mapping" : "sequence", e.result = s, !0;
        t ? w === 44 && M(e, "expected the node content, but found ','") : M(e, "missed comma between flow collection entries"), f = m = b = null, p = d = !1, w === 63 && (c = e.input.charCodeAt(e.position + 1), Z(c) && (p = d = !0, e.position++, $(e, !0, r))), a = e.line, n = e.lineStart, o = e.position, pe(e, r, ke, !1, !0), f = e.tag, m = e.result, $(e, !0, r), w = e.input.charCodeAt(e.position), (d || e.line === a) && w === 58 && (p = !0, w = e.input.charCodeAt(++e.position), $(e, !0, r), pe(e, r, ke, !1, !0), b = e.result), g ? fe(e, s, h, f, m, b, a, n, o) : p ? s.push(fe(e, null, h, f, m, b, a, n, o)) : s.push(m), $(e, !0, r), w = e.input.charCodeAt(e.position), w === 44 ? (t = !0, w = e.input.charCodeAt(++e.position)) : t = !1;
    }
    M(e, "unexpected end of the stream within a flow collection");
}
function Wa(e, r) {
    var t, a, n = Me, o = !1, i = !1, s = r, l = 0, c = !1, u, p;
    if (p = e.input.charCodeAt(e.position), p === 124) a = !1;
    else if (p === 62) a = !0;
    else return !1;
    for(e.kind = "scalar", e.result = ""; p !== 0;)if (p = e.input.charCodeAt(++e.position), p === 43 || p === 45) Me === n ? n = p === 43 ? tu : Pa : M(e, "repeat of a chomping mode identifier");
    else if ((u = Oa(p)) >= 0) u === 0 ? M(e, "bad explicit indentation width of a block scalar; it cannot be less than one") : i ? M(e, "repeat of an indentation width identifier") : (s = r + u - 1, i = !0);
    else break;
    if (oe(p)) {
        do p = e.input.charCodeAt(++e.position);
        while (oe(p));
        if (p === 35) do p = e.input.charCodeAt(++e.position);
        while (!ue(p) && p !== 0);
    }
    for(; p !== 0;){
        for(Ve(e), e.lineIndent = 0, p = e.input.charCodeAt(e.position); (!i || e.lineIndent < s) && p === 32;)e.lineIndent++, p = e.input.charCodeAt(++e.position);
        if (!i && e.lineIndent > s && (s = e.lineIndent), ue(p)) {
            l++;
            continue;
        }
        if (e.lineIndent < s) {
            n === tu ? e.result += Y.repeat(`
`, o ? 1 + l : l) : n === Me && o && (e.result += `
`);
            break;
        }
        for(a ? oe(p) ? (c = !0, e.result += Y.repeat(`
`, o ? 1 + l : l)) : c ? (c = !1, e.result += Y.repeat(`
`, l + 1)) : l === 0 ? o && (e.result += " ") : e.result += Y.repeat(`
`, l) : e.result += Y.repeat(`
`, o ? 1 + l : l), o = !0, i = !0, l = 0, t = e.position; !ue(p) && p !== 0;)p = e.input.charCodeAt(++e.position);
        ae(e, t, e.position, !1);
    }
    return !0;
}
function su(e, r) {
    var t, a = e.tag, n = e.anchor, o = [], i, s = !1, l;
    if (e.firstTabInLine !== -1) return !1;
    for(e.anchor !== null && (e.anchorMap[e.anchor] = o), l = e.input.charCodeAt(e.position); l !== 0 && (e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, M(e, "tab characters must not be used in indentation")), !(l !== 45 || (i = e.input.charCodeAt(e.position + 1), !Z(i))));){
        if (s = !0, e.position++, $(e, !0, -1) && e.lineIndent <= r) {
            o.push(null), l = e.input.charCodeAt(e.position);
            continue;
        }
        if (t = e.line, pe(e, r, ku, !1, !0), o.push(e.result), $(e, !0, -1), l = e.input.charCodeAt(e.position), (e.line === t || e.lineIndent > r) && l !== 0) M(e, "bad indentation of a sequence entry");
        else if (e.lineIndent < r) break;
    }
    return s ? (e.tag = a, e.anchor = n, e.kind = "sequence", e.result = o, !0) : !1;
}
function Ka(e, r, t) {
    var a, n, o, i, s, l, c = e.tag, u = e.anchor, p = {}, d = Object.create(null), g = null, h = null, m = null, f = !1, b = !1, w;
    if (e.firstTabInLine !== -1) return !1;
    for(e.anchor !== null && (e.anchorMap[e.anchor] = p), w = e.input.charCodeAt(e.position); w !== 0;){
        if (!f && e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, M(e, "tab characters must not be used in indentation")), a = e.input.charCodeAt(e.position + 1), o = e.line, (w === 63 || w === 58) && Z(a)) w === 63 ? (f && (fe(e, p, d, g, h, null, i, s, l), g = h = m = null), b = !0, f = !0, n = !0) : f ? (f = !1, n = !0) : M(e, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), e.position += 1, w = a;
        else {
            if (i = e.line, s = e.lineStart, l = e.position, !pe(e, t, Eu, !1, !0)) break;
            if (e.line === o) {
                for(w = e.input.charCodeAt(e.position); oe(w);)w = e.input.charCodeAt(++e.position);
                if (w === 58) w = e.input.charCodeAt(++e.position), Z(w) || M(e, "a whitespace character is expected after the key-value separator within a block mapping"), f && (fe(e, p, d, g, h, null, i, s, l), g = h = m = null), b = !0, f = !1, n = !1, g = e.tag, h = e.result;
                else if (b) M(e, "can not read an implicit mapping pair; a colon is missed");
                else return e.tag = c, e.anchor = u, !0;
            } else if (b) M(e, "can not read a block mapping entry; a multiline key may not be an implicit key");
            else return e.tag = c, e.anchor = u, !0;
        }
        if ((e.line === o || e.lineIndent > r) && (f && (i = e.line, s = e.lineStart, l = e.position), pe(e, r, xe, !0, n) && (f ? h = e.result : m = e.result), f || (fe(e, p, d, g, h, m, i, s, l), g = h = m = null), $(e, !0, -1), w = e.input.charCodeAt(e.position)), (e.line === o || e.lineIndent > r) && w !== 0) M(e, "bad indentation of a mapping entry");
        else if (e.lineIndent < r) break;
    }
    return f && fe(e, p, d, g, h, null, i, s, l), b && (e.tag = c, e.anchor = u, e.kind = "mapping", e.result = p), b;
}
function Ja(e) {
    var r, t = !1, a = !1, n, o, i;
    if (i = e.input.charCodeAt(e.position), i !== 33) return !1;
    if (e.tag !== null && M(e, "duplication of a tag property"), i = e.input.charCodeAt(++e.position), i === 60 ? (t = !0, i = e.input.charCodeAt(++e.position)) : i === 33 ? (a = !0, n = "!!", i = e.input.charCodeAt(++e.position)) : n = "!", r = e.position, t) {
        do i = e.input.charCodeAt(++e.position);
        while (i !== 0 && i !== 62);
        e.position < e.length ? (o = e.input.slice(r, e.position), i = e.input.charCodeAt(++e.position)) : M(e, "unexpected end of the stream within a verbatim tag");
    } else {
        for(; i !== 0 && !Z(i);)i === 33 && (a ? M(e, "tag suffix cannot contain exclamation marks") : (n = e.input.slice(r - 1, e.position + 1), xu.test(n) || M(e, "named tag handle cannot contain such characters"), a = !0, r = e.position + 1)), i = e.input.charCodeAt(++e.position);
        o = e.input.slice(r, e.position), Ma.test(o) && M(e, "tag suffix cannot contain flow indicator characters");
    }
    o && !Fu.test(o) && M(e, "tag name cannot contain such characters: " + o);
    try {
        o = decodeURIComponent(o);
    } catch  {
        M(e, "tag name is malformed: " + o);
    }
    return t ? e.tag = o : ne.call(e.tagMap, n) ? e.tag = e.tagMap[n] + o : n === "!" ? e.tag = "!" + o : n === "!!" ? e.tag = "tag:yaml.org,2002:" + o : M(e, 'undeclared tag handle "' + n + '"'), !0;
}
function Za(e) {
    var r, t;
    if (t = e.input.charCodeAt(e.position), t !== 38) return !1;
    for(e.anchor !== null && M(e, "duplication of an anchor property"), t = e.input.charCodeAt(++e.position), r = e.position; t !== 0 && !Z(t) && !se(t);)t = e.input.charCodeAt(++e.position);
    return e.position === r && M(e, "name of an anchor node must contain at least one character"), e.anchor = e.input.slice(r, e.position), !0;
}
function Qa(e) {
    var r, t, a;
    if (a = e.input.charCodeAt(e.position), a !== 42) return !1;
    for(a = e.input.charCodeAt(++e.position), r = e.position; a !== 0 && !Z(a) && !se(a);)a = e.input.charCodeAt(++e.position);
    return e.position === r && M(e, "name of an alias node must contain at least one character"), t = e.input.slice(r, e.position), ne.call(e.anchorMap, t) || M(e, 'unidentified alias "' + t + '"'), e.result = e.anchorMap[t], $(e, !0, -1), !0;
}
function pe(e, r, t, a, n) {
    var o, i, s, l = 1, c = !1, u = !1, p, d, g, h, m, f;
    if (e.listener !== null && e.listener("open", e), e.tag = null, e.anchor = null, e.kind = null, e.result = null, o = i = s = xe === t || ku === t, a && $(e, !0, -1) && (c = !0, e.lineIndent > r ? l = 1 : e.lineIndent === r ? l = 0 : e.lineIndent < r && (l = -1)), l === 1) for(; Ja(e) || Za(e);)$(e, !0, -1) ? (c = !0, s = o, e.lineIndent > r ? l = 1 : e.lineIndent === r ? l = 0 : e.lineIndent < r && (l = -1)) : s = !1;
    if (s && (s = c || n), (l === 1 || xe === t) && (ke === t || Eu === t ? m = r : m = r + 1, f = e.position - e.lineStart, l === 1 ? s && (su(e, f) || Ka(e, f, m)) || Ya(e, m) ? u = !0 : (i && Wa(e, m) || Va(e, m) || $a(e, m) ? u = !0 : Qa(e) ? (u = !0, (e.tag !== null || e.anchor !== null) && M(e, "alias node should not have any properties")) : Ua(e, m, ke === t) && (u = !0, e.tag === null && (e.tag = "?")), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : l === 0 && (u = s && su(e, f))), e.tag === null) e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
    else if (e.tag === "?") {
        for(e.result !== null && e.kind !== "scalar" && M(e, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + e.kind + '"'), p = 0, d = e.implicitTypes.length; p < d; p += 1)if (h = e.implicitTypes[p], h.resolve(e.result)) {
            e.result = h.construct(e.result), e.tag = h.tag, e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
            break;
        }
    } else if (e.tag !== "!") {
        if (ne.call(e.typeMap[e.kind || "fallback"], e.tag)) h = e.typeMap[e.kind || "fallback"][e.tag];
        else for(h = null, g = e.typeMap.multi[e.kind || "fallback"], p = 0, d = g.length; p < d; p += 1)if (e.tag.slice(0, g[p].tag.length) === g[p].tag) {
            h = g[p];
            break;
        }
        h || M(e, "unknown tag !<" + e.tag + ">"), e.result !== null && h.kind !== e.kind && M(e, "unacceptable node kind for !<" + e.tag + '> tag; it should be "' + h.kind + '", not "' + e.kind + '"'), h.resolve(e.result, e.tag) ? (e.result = h.construct(e.result, e.tag), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : M(e, "cannot resolve a node with !<" + e.tag + "> explicit tag");
    }
    return e.listener !== null && e.listener("close", e), e.tag !== null || e.anchor !== null || u;
}
function Xa(e) {
    var r = e.position, t, a, n, o = !1, i;
    for(e.version = null, e.checkLineBreaks = e.legacy, e.tagMap = Object.create(null), e.anchorMap = Object.create(null); (i = e.input.charCodeAt(e.position)) !== 0 && ($(e, !0, -1), i = e.input.charCodeAt(e.position), !(e.lineIndent > 0 || i !== 37));){
        for(o = !0, i = e.input.charCodeAt(++e.position), t = e.position; i !== 0 && !Z(i);)i = e.input.charCodeAt(++e.position);
        for(a = e.input.slice(t, e.position), n = [], a.length < 1 && M(e, "directive name must not be less than one character in length"); i !== 0;){
            for(; oe(i);)i = e.input.charCodeAt(++e.position);
            if (i === 35) {
                do i = e.input.charCodeAt(++e.position);
                while (i !== 0 && !ue(i));
                break;
            }
            if (ue(i)) break;
            for(t = e.position; i !== 0 && !Z(i);)i = e.input.charCodeAt(++e.position);
            n.push(e.input.slice(t, e.position));
        }
        i !== 0 && Ve(e), ne.call(lu, a) ? lu[a](e, a, n) : Fe(e, 'unknown document directive "' + a + '"');
    }
    if ($(e, !0, -1), e.lineIndent === 0 && e.input.charCodeAt(e.position) === 45 && e.input.charCodeAt(e.position + 1) === 45 && e.input.charCodeAt(e.position + 2) === 45 ? (e.position += 3, $(e, !0, -1)) : o && M(e, "directives end mark is expected"), pe(e, e.lineIndent - 1, xe, !1, !0), $(e, !0, -1), e.checkLineBreaks && Na.test(e.input.slice(r, e.position)) && Fe(e, "non-ASCII line breaks are interpreted as content"), e.documents.push(e.result), e.position === e.lineStart && qe(e)) {
        e.input.charCodeAt(e.position) === 46 && (e.position += 3, $(e, !0, -1));
        return;
    }
    if (e.position < e.length - 1) M(e, "end of the stream or a document separator is expected");
    else return;
}
function Lu(e, r) {
    e = String(e), r = r || {}, e.length !== 0 && (e.charCodeAt(e.length - 1) !== 10 && e.charCodeAt(e.length - 1) !== 13 && (e += `
`), e.charCodeAt(0) === 65279 && (e = e.slice(1)));
    var t = new Ga(e, r), a = e.indexOf("\x00");
    for(a !== -1 && (t.position = a, M(t, "null byte is not allowed in input")), t.input += "\x00"; t.input.charCodeAt(t.position) === 32;)t.lineIndent += 1, t.position += 1;
    for(; t.position < t.length - 1;)Xa(t);
    return t.documents;
}
function en(e, r, t) {
    r !== null && typeof r == "object" && typeof t > "u" && (t = r, r = null);
    var a = Lu(e, t);
    if (typeof r != "function") return a;
    for(var n = 0, o = a.length; n < o; n += 1)r(a[n]);
}
function un(e, r) {
    var t = Lu(e, r);
    if (t.length !== 0) {
        if (t.length === 1) return t[0];
        throw new J("expected a single document in the stream, but found more");
    }
}
var rn = en, an = un, Tu = {
    loadAll: rn,
    load: an
};
var Vu = Tu.load;
var $u = (e, r, t)=>(/^---/.test(r) && e.push(t), e), On = {}, Yu = (e)=>{
    let { lines: r, metaIndices: t } = e;
    if (t.length > 0) {
        let e = r.slice(t[0] + 1, t[1]);
        return Vu(e.join(`
`));
    }
    return On;
}, Wu = (e)=>{
    let { lines: r, metaIndices: t } = e;
    return t.length > 0 && (r = r.slice(t[1] + 1, r.length)), r.join(`
`);
};
var Ke = ({ postContent: e, postTitle: r, postDate: t, readingTime: a })=>{
    let n = e === void 0 ? console.error("Error") : e;
    return `
        <div id="mm-mark">
            <h2>${r === void 0 ? "" : r}</h2>
            <small>${t === void 0 ? "" : t}</small>
              ${a === void 0 ? "" : a}
            <div>${n}</div>
           
        </div>
          
      `;
};
var Zu = ie(me(), 1);
function Qu() {
    return [
        {
            type: "lang",
            filter: (e)=>e.replace(/\\\((.*?)\\\)/g, (e, r)=>"<mathxxxjax>" + Ju("\\(" + Ku(r) + "\\)") + "</mathxxxjax>")
        },
        {
            type: "lang",
            filter: (e)=>e.replace(/\\\[([\s\S]*?)\\\]/g, (e, r)=>"<mathxxxjax>" + Ju("\\[" + Ku(r) + "\\]") + "</mathxxxjax>")
        },
        {
            type: "output",
            filter: (e)=>e.replace(/<mathxxxjax>(.*?)<\/mathxxxjax>/g, (e, r)=>Hn(r))
        },
        {
            type: "output",
            filter: (e)=>`
        <script>
            window.MathJax = {
              loader: {
                load: [
                  '[tex]/color', 
                  '[tex]/mathtools', 
                  '[tex]/ams',
                  '[tex]/html', 
                  '[tex]/textmacros', 
                  '[tex]/textcomp' ,
                  '[mml]/mml3',
                ]
              },
              tex: {
                packages: {
                  '[+]': [
                    'color', 
                    'mathtools', 
                    'ams', 
                    'html',
                    'textmacros' 
                  ]
                },        
                inlineMath: [  
                  ['$','$'],    
                  ['(', ')']
                ],
                displayMath: [             
                  ['$$', '$$'],
                  ['[', ']']
                ],
                color: {
                  padding: '5px',
                  borderWidth: '2px'
                },
                ams: {
                  multlineWidth: '100%',
                  multlineIndent: '1em'
                },
                processEscapes: true,      
                processEnvironments: true, 
                processRefs: true,         
                digits: /^(?:[0-9]+(?:{,}[0-9]{3})*(?:.[0-9]*)?|.[0-9]+)/,
                tags: 'none',              
                tagSide: 'right',          
                tagIndent: '0.8em',        
                useLabelIds: true,         
                maxMacros: 10000,          
                maxBuffer: 5 * 1024,       
                baseURL: (document.getElementsByTagName('base').length === 0) ? '' : String(document.location).replace(/#.*$/, ''),
                formatError: (jax, err) => jax.formatError(err)
              },
              textmacros: {
                packages: {'[+]': ['textcomp']}
              }
            }
        </script>
          <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
          <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
        ` + e
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
var eu = ie(me(), 1), uu = ie(nr(), 1), Xe = ie(ir(), 1), or = ie(tr(), 1), { decode: Yn } = or.default;
uu.default.silent = !0;
(0, uu.default)();
function dr() {
    return [
        {
            type: "output",
            filter: (e, r, t)=>{
                let a = {
                    left: "<pre><code\\b[^>]*>",
                    right: "</code></pre>",
                    flags: "g"
                }, n = (e, r, t, a)=>{
                    let n = Yn(r), o = t.match(/class=\"([^ \"]+)/)?.[1] ?? void 0;
                    return o ? (t = `<pre class="language-${o}"><code class="language-${o}">`, t + Xe.default.highlight(n, Xe.default.languages[o], o) + a) : e;
                };
                return eu.default.helper.replaceRecursiveRegExp(e, n, a.left, a.right, a.flags);
            }
        }
    ];
}
eu.default.extension("showdownPrism", dr);
var lr = dr;
var cr = ie(me(), 1), Wn = Object.defineProperty, Kn = (e, r)=>Wn(e, "name", {
        value: r,
        configurable: !0
    });
function Pe({ toc: e, opts: r } = {}) {
    return [
        {
            type: "output",
            filter (t) {
                let a = /(<h([1-6]).*?id="([^"]*?)".*?>(.+?)<\/h[1-6]>)|(<p>\[toc\]<\/p>)/g, n = [];
                t.replace(a, (r, t, a, o, i)=>{
                    if (r === "<p>[toc]</p>") n.push({
                        type: "toc"
                    });
                    else {
                        i = i.replace(/<[^>]+>/g, "");
                        let r = {
                            anchor: o,
                            level: Number(a),
                            text: i
                        };
                        e && e.push(r), n.push({
                            type: "header",
                            ...r
                        });
                    }
                    return "";
                });
                let o = [];
                return n.forEach(({ type: e }, r)=>{
                    if (e === "toc") if (n[r + 1] && n[r + 1].type === "header") {
                        let e = [], { level: t } = n[r + 1];
                        for(let a = r + 1; a < n.length && n[a].type !== "toc"; a++){
                            let { level: r } = n[a];
                            r === t && e.push(n[a]);
                        }
                        o.push(e);
                    } else o.push([]);
                }), t = t.replace(/<p>\[toc\]<\/p>[\n]*/g, ()=>{
                    let e = o.shift();
                    if (e && e.length) {
                        let t = r?.listType || "ol";
                        return `<${t} class="showdown-toc">${e.map(({ text: e, anchor: r })=>`<li><a href="#${r}">${e}</a></li>`).join("")}</${t}>
`;
                    }
                    return "";
                }), t;
            }
        }
    ];
}
Kn(Pe, "showmarkToc");
cr.default.extension("showmarkToc", Pe);
var ru = class {
    formatDate(e) {
        return new Date(e).toLocaleString("en-US", {
            weekday: "short",
            day: "numeric",
            month: "short",
            year: "numeric"
        });
    }
    readTime(e) {
        let r = e.trim().split(/\s+/).length;
        return Math.ceil(r / 225);
    }
    frontmatter(e) {
        let r = e.split(`
`), t = r.reduce($u, []), a = Yu({
            lines: r,
            metaIndices: t
        }), n = Wu({
            lines: r,
            metaIndices: t
        });
        return {
            data: a,
            content: n
        };
    }
    converter(e) {
        return new sr.default.Converter(e);
    }
    markToHtml(e) {
        let r = this.frontmatter(e), t = r.data, a = r.content, n = JSON.stringify(r, null, 2), o = this.converter({
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
        o.setFlavor("github");
        let i = o.makeHtml(a), s;
        t.title ? s = t.title : s = "";
        let l;
        t.date ? l = this.formatDate(t.date) : l = "";
        let c = `<small>Reading Time : ${this.readTime(a)} minutes</small>`, u = Ke({
            postContent: i,
            postTitle: s,
            postDate: l,
            readingTime: c
        }), p = Ke({
            postContent: i
        });
        return {
            data: t,
            json: n,
            convertedHtml: i,
            postHtml: u,
            pageHtml: p
        };
    }
};
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
