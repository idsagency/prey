! function() {
    "use strict";
    var e = "undefined" == typeof window ? global : window;
    if ("function" != typeof e.require) {
        var t = {},
            n = {},
            r = {},
            a = {}.hasOwnProperty,
            s = /^\.\.?(\/|$)/,
            l = function(e, t) {
                for (var n, r = [], a = (s.test(t) ? e + "/" + t : t).split("/"), l = 0, i = a.length; l < i; l++) n = a[l], ".." === n ? r.pop() : "." !== n && "" !== n && r.push(n);
                return r.join("/")
            },
            i = function(e) {
                return e.split("/").slice(0, -1).join("/")
            },
            o = function(t) {
                return function(n) {
                    var r = l(i(t), n);
                    return e.require(r, t)
                }
            },
            c = function(e, t) {
                var r = null;
                r = y && y.createHot(e);
                var a = {
                    id: e,
                    exports: {},
                    hot: r
                };
                return n[e] = a, t(a.exports, o(e), a), a.exports
            },
            u = function(e) {
                return r[e] ? u(r[e]) : e
            },
            m = function(e, t) {
                return u(l(i(e), t))
            },
            p = function(e, r) {
                null == r && (r = "/");
                var s = u(e);
                if (a.call(n, s)) return n[s].exports;
                if (a.call(t, s)) return c(s, t[s]);
                throw new Error("Cannot find module '" + e + "' from '" + r + "'")
            };
        p.alias = function(e, t) {
            r[t] = e
        };
        var h = /\.[^.\/]+$/,
            d = /\/index(\.[^\/]+)?$/,
            f = function(e) {
                if (h.test(e)) {
                    var t = e.replace(h, "");
                    a.call(r, t) && r[t].replace(h, "") !== t + "/index" || (r[t] = e)
                }
                if (d.test(e)) {
                    var n = e.replace(d, "");
                    a.call(r, n) || (r[n] = e)
                }
            };
        p.register = p.define = function(e, r) {
            if ("object" == typeof e)
                for (var s in e) a.call(e, s) && p.register(s, e[s]);
            else t[e] = r, delete n[e], f(e)
        }, p.list = function() {
            var e = [];
            for (var n in t) a.call(t, n) && e.push(n);
            return e
        };
        var y = e._hmr && new e._hmr(m, p, t, n);
        p._cache = n, p.hmr = y && y.wrap, p.brunch = !0, e.require = p
    }
}(),
function() {
    var e;
    window;
    require.register("components/App.cjsx", function(e, t, n) {
        var r, a, s, l, i, o, c, u, m, p, h, d, f, y, _ = function(e, t) {
                return function() {
                    return e.apply(t, arguments)
                }
            },
            E = function(e, t) {
                function n() {
                    this.constructor = e
                }
                for (var r in t) v.call(t, r) && (e[r] = t[r]);
                return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
            },
            v = {}.hasOwnProperty;
        d = t("react"), f = t("react-dom"), y = t("form-serialize"), r = t("jquery"), a = function() {
            function e(e) {
                null == e && (e = {}), this.el = e.el || "app"
            }
            return e.prototype.render = function() {
                return f.render(d.createElement(l, null), document.getElementById(this.el))
            }, e
        }(), l = function(e) {
            function t(e) {
                this.render = _(this.render, this), this.resetCalcFromClick = _(this.resetCalcFromClick, this), this.resetForm = _(this.resetForm, this), this.submitForm = _(this.submitForm, this), this.resetFormErrors = _(this.resetFormErrors, this), this.handleSubmit = _(this.handleSubmit, this), this._handleCheckboxChange = _(this._handleCheckboxChange, this), this._handleSelectChange = _(this._handleSelectChange, this), this.getFormattedPrice = _(this.getFormattedPrice, this), this.handleKeyUp = _(this.handleKeyUp, this), this.handleonChange = _(this.handleonChange, this), t.__super__.constructor.call(this, e), window.main_editor = this, this.state = {
                    mandrill_url: "https://mandrillapp.com/api/1.0/messages/send.json",
                    mandrill_key: "M-T7mC259MY4AIFZwNnEpg",
                    scaleFactor: 0,
                    monthlyValue: 0,
                    formatedPrice: 0,
                    monthlyValue: 0,
                    savingPercent: 0,
                    monthlyRefValue: 0,
                    yearValue: 0,
                    dNum: 0,
                    savingPercent: 0,
                    basePrice: 2.1,
                    baseDevices: 1e4,
                    billingMethod: 1,
                    devPriceRef: 1.5,
                    dNum_min: 11,
                    dNum_max: 9999,
                    displayDisclaimer: !1,
                    displayCustomPlan: !1,
                    displaySocialProof: !1,
                    ultraVipCount: "Number of devices not specified",
                    form_errors: null,
                    successful_request: !1
                }
            }
            return E(t, e), t.prototype.getYearlyValue = function(e) {
                return 1 !== e ? (1 - e / 12 / 10) * e : 1
            }, t.prototype.handleonChange = function(e) {
                var t;
                return t = parseInt(this.refs.devices_num.value), this.setState({
                    dNum: t,
                    displayCustomPlan: t > 0 && t < this.state.dNum_min
                }, this.getFormattedPrice)
            }, t.prototype.handleKeyUp = function(e) {
                if (!this.state.displaySocialProof) return this.setState({
                    displaySocialProof: !0
                })
            }, t.prototype.getScaleFactor = function() {
                return this.state.dNum < this.state.baseDevices ? .87 : .82
            }, t.prototype.getFormattedPrice = function() {
                var e, t, n, r, a, s, l;
                if (this.refs.plan_select) return e = parseInt(this.refs.plan_select.refs.payment_cycle.value), l = this.getYearlyValue(e), s = this.getScaleFactor(), r = (this.state.basePrice * Math.pow(this.state.dNum, s) * l).toFixed(2), n = (this.state.dNum * this.state.devPriceRef * e).toFixed(2), a = Math.round((n - r) / n * 100), t = parseFloat(r), this.setState({
                    formatedPrice: t,
                    monthlyValue: r,
                    monthlyRefValue: n,
                    savingPercent: a
                }), this.resetFormErrors()
            }, t.prototype._handleSelectChange = function(e) {
                return this.getFormattedPrice()
            }, t.prototype._handleCheckboxChange = function(e) {
                var t;
                return t = e.currentTarget, this.setState({
                    displayDisclaimer: t.checked
                })
            }, t.prototype.formData = function() {
                var e, t, n;
                return n = y(this.refs.calc_form, {
                    hash: !0
                }), e = "", e = n.non_profit ? "Non-Profit" : "Business", t = {
                    key: this.state.mandrill_key,
                    message: {
                        from_email: n.user_email,
                        from_name: n.user_name,
                        headers: {
                            "Reply-To": n.user_email,
                            "Content-Type": "Content-Type: text/html; charset=utf-8"
                        },
                        subject: "Prey for " + e + " Sales Inquiry",
                        html: "<h1>" + e + "</h1> <br /> ##User <br /><br /> - Name: " + n.user_name + "<br/> - Payment Cycle: " + r("#payment_cycle option:selected").text() + " <br /> - Company: " + n.user_company + "<br/> - Email: " + n.user_email + "<br/><br/> ## Devices <b>(" + n.devicesNum + ") for $" + n.total_quote + "USD</b><br/><br/> <small>(Enviado desde: webprey)</small>",
                        to: [{
                            email: "sales@preyproject.com",
                            name: "Sales",
                            type: "to"
                        }]
                    }
                }
            }, t.prototype.handleSubmit = function(e) {
                var t;
                return this.resetFormErrors(), t = this.formData(), r.ajax({
                    type: "POST",
                    url: this.state.mandrill_url,
                    data: this.formData()
                }).done(function(e) {
                    return function(n) {
                        return "sent" === n[0].status && (window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                            event: "FormRequestQuote",
                            Acc_event: "FormQuoteSubmitted",
                            Label_event: t.total_quote + " " + t.devicesNum
                        })), "rejected" === n[0].status ? e.setState({
                            form_errors: n[0].reject_reason
                        }) : e.setState({
                            successful_request: !0
                        })
                    }
                }(this)), !1
            }, t.prototype.resetFormErrors = function() {
                return this.setState({
                    form_errors: null
                })
            }, t.prototype.submitForm = function(e) {
                return this.handleSubmit(e)
            }, t.prototype.resetForm = function() {
                return this.refs.calc_form.reset(), this.getFormattedPrice()
            }, t.prototype.resetCalcFromClick = function(e) {
                return this.setState({
                    successful_request: !1,
                    dNum: 0
                }, this.resetForm)
            }, t.prototype.render = function() {
                return d.createElement("aside", {
                    id: "request-quote",
                    className: "fixed-sidebar"
                }, d.createElement("form", {
                    id: "calc",
                    ref: "calc_form",
                    onSubmit: this.handleSubmit
                }, d.createElement("div", {
                    className: "plan"
                }, d.createElement("ul", {
                    className: "form hvv"
                }, d.createElement("li", null, d.createElement("label", {
                    htmlFor: "devicesNum"
                }, "How many devices you need to protect"), d.createElement("input", {
                    id: "devicesNum",
                    name: "devicesNum",
                    min: "3",
                    max: "100000",
                    type: "text",
                    placeholder: "Enter a number",
                    ref: "devices_num",
                    onChange: this.handleonChange,
                    onKeyUp: this.handleKeyUp
                }))), !this.state.dNum || this.state.dNum >= this.state.dNum_min ? d.createElement("div", null, d.createElement(u, {
                    ref: "plan_select",
                    handleChange: this._handleSelectChange
                }), this.state.monthlyValue > 0 && this.state.dNum <= this.state.dNum_max ? d.createElement(h, {
                    monthlyValue: this.state.monthlyValue,
                    monthlyRefValue: this.state.monthlyRefValue,
                    savingPercent: this.state.savingPercent
                }) : void 0, this.state.dNum > this.state.dNum_max ? d.createElement("h1", {
                    id: "ultrapro"
                }, "Wow, such an impressive fleet needs to be handled by our experts.") : void 0, this.state.displayDisclaimer ? d.createElement(o, null) : void 0, d.createElement(c, {
                    errors: this.state.form_errors,
                    submitForm: this.submitForm
                })) : void 0, this.state.dNum >= this.state.dNum_min && this.state.displaySocialProof ? d.createElement(p, null) : void 0), d.createElement("ul", {
                    className: "form vvv"
                }, d.createElement("li", null, d.createElement("a", {
                    href: "/pricing",
                    className: "btn view-plans"
                }, "View Plans"))), d.createElement(m, {
                    handleCheckboxChange: this._handleCheckboxChange
                }), this.state.displayCustomPlan ? d.createElement(i, {
                    display: this.state.displayCustomPlan,
                    dNum: this.state.dNum
                }) : void 0, this.state.successful_request ? d.createElement(s, {
                    handleClick: this.resetCalcFromClick
                }) : void 0))
            }, t
        }(d.Component), s = function(e) {
            function t() {
                return this.handleClick = _(this.handleClick, this), t.__super__.constructor.apply(this, arguments)
            }
            return E(t, e), t.prototype.handleClick = function(e) {
                return e.preventDefault(), this.props.handleClick(e)
            }, t.prototype.render = function() {
                return d.createElement("div", {
                    id: "success"
                }, d.createElement("div", {
                    className: "super-center"
                }, d.createElement("h1", null, "Danke"), d.createElement("p", null, "lorem ipsum dolor sit amet bellum omnes contra omnes"), d.createElement("a", {
                    href: "#",
                    className: "btn",
                    onClick: this.handleClick
                }, "Get a new quote")))
            }, t
        }(d.Component), h = function(e) {
            function t() {
                return t.__super__.constructor.apply(this, arguments)
            }
            return E(t, e), t.prototype.render = function() {
                return d.createElement("div", {
                    id: "total"
                }, d.createElement("h2", null, d.createElement("small", null, "$"), this.props.monthlyValue), d.createElement("input", {
                    type: "hidden",
                    name: "total_quote",
                    id: "total_quote",
                    value: this.props.monthlyValue
                }), d.createElement("p", {
                    className: "opor"
                }, "Original price: ", d.createElement("strike", null, " ", this.props.monthlyRefValue, " "), "By getting this plan, you are saving ", d.createElement("b", null, this.props.savingPercent, "%")))
            }, t
        }(d.Component), u = function(e) {
            function t() {
                return t.__super__.constructor.apply(this, arguments)
            }
            return E(t, e), t.prototype.render = function() {
                return d.createElement("ul", {
                    className: "form hvv"
                }, d.createElement("li", null, d.createElement("select", {
                    name: "payment_cycle",
                    id: "payment_cycle",
                    disabled: "",
                    ref: "payment_cycle",
                    onChange: this.props.handleChange
                }, d.createElement("option", {
                    value: "1",
                    defaultSelected: !0
                }, "Monthly Payment"), d.createElement("option", {
                    value: "12"
                }, "1 Yearly Payment (-10% less)"), d.createElement("option", {
                    value: "24"
                }, "2 Years Payment (-20% less)"), d.createElement("option", {
                    value: "36"
                }, "3 Years Payment (-30% less)"), d.createElement("option", {
                    value: "48"
                }, "4 Years Payment (-40% less)"))))
            }, t
        }(d.Component), m = function(e) {
            function t(e) {
                this.handleChange = _(this.handleChange, this), t.__super__.constructor.call(this, e)
            }
            return E(t, e), t.prototype.handleChange = function(e) {
                return this.props.handleCheckboxChange(e)
            }, t.prototype.render = function() {
                return d.createElement("ul", {
                    className: "form represent"
                }, d.createElement("li", null, d.createElement("label", {
                    className: "non-profit"
                }, d.createElement("input", {
                    type: "checkbox",
                    name: "non_profit",
                    onChange: this.handleChange
                }), "I represent a non-profit or educational institution.")))
            }, t
        }(d.Component), p = function(e) {
            function t(e) {
                this.componentDidMount = _(this.componentDidMount, this), this.handleDisplay = _(this.handleDisplay, this), t.__super__.constructor.call(this, e), this.state = {
                    display_class: "bam"
                }, this.timeout
            }
            return E(t, e), t.prototype.handleDisplay = function() {
                return clearTimeout(this.timeout), this.timeout = setTimeout(function(e) {
                    return function() {
                        return e.setState({
                            display_class: ""
                        })
                    }
                }(this), 5500)
            }, t.prototype.componentDidMount = function() {
                return console.log("mounted!!"), this.handleDisplay()
            }, t.prototype.render = function() {
                return d.createElement("blockquote", {
                    className: "socialproof " + this.state.display_class
                }, d.createElement("div", {
                    className: "qrap"
                }, "We protect over ", d.createElement("b", null, "7.000.000"), " devices all around the world. ", d.createElement("b", null, "Come with us if you want to live.")))
            }, t
        }(d.Component), i = function(e) {
            function t(e) {
                this.getPlanOptions = _(this.getPlanOptions, this), t.__super__.constructor.call(this, e), this.state = {
                    plan_name: "",
                    limit_device_value: "",
                    control_zones_value: ""
                }
            }
            return E(t, e), t.prototype.componentDidMount = function() {
                return console.log("component!", this.props.dNum), this.getPlanOptions()
            }, t.prototype.componentWillReceiveProps = function(e) {
                return this.setState({
                    dNum: e.dNum
                }, this.getPlanOptions)
            }, t.prototype.getPlanOptions = function() {
                if (console.log("SLSLSL ", this.props.dNum), this.props.dNum >= 1 && this.props.dNum <= 3 && this.setState({
                        plan_name: "PERSONAL",
                        limit_device_value: 3,
                        control_zones_value: 3
                    }), this.props.dNum >= 4 && this.props.dNum <= 10) return this.setState({
                    plan_name: "HOME",
                    limit_device_value: 10,
                    control_zones_value: "UNLIMITED"
                })
            }, t.prototype.render = function() {
                return d.createElement("div", {
                    id: "custom-plan",
                    className: (this.props.display ? "show" : void 0) + " " + this.props.display
                }, d.createElement("h4", {
                    className: "plan-name"
                }, d.createElement("small", null, "Recommended Plan"), d.createElement("span", null, this.state.plan_name)), d.createElement("ul", null, d.createElement("li", null, d.createElement("p", {
                    className: "limit-device feature-name"
                }, "Max Devices"), d.createElement("span", {
                    className: "limit-device-value feature-value"
                }, this.state.limit_device_value)), d.createElement("li", null, d.createElement("p", {
                    className: "limit-name"
                }, "Max Reports"), d.createElement("span", {
                    className: "limit-value"
                }, "100")), d.createElement("li", null, d.createElement("p", {
                    className: "feature-name"
                }, "Geolocation"), d.createElement("span", {
                    className: "feature-value"
                }, d.createElement("i", {
                    className: "fa fa-check"
                }))), d.createElement("li", null, d.createElement("p", {
                    className: "feature-name"
                }, "Alert Messages"), d.createElement("span", {
                    className: "feature-value"
                }, d.createElement("i", {
                    className: "fa fa-check"
                }))), d.createElement("li", null, d.createElement("p", {
                    className: "feature-name"
                }, "Screen Lock"), d.createElement("span", {
                    className: "feature-value"
                }, d.createElement("i", {
                    className: "fa fa-check"
                }))), d.createElement("li", null, d.createElement("p", {
                    className: "feature-name"
                }, "Remote Wipe"), d.createElement("span", {
                    className: "feature-value"
                }, d.createElement("i", {
                    className: "fa fa-check"
                }))), d.createElement("li", null, d.createElement("p", {
                    className: "feature-name"
                }, "File Retrieval"), d.createElement("span", {
                    className: "feature-value"
                }, "Soon")), d.createElement("li", null, d.createElement("p", {
                    className: "feature-name"
                }, "Control Zones"), d.createElement("span", {
                    className: "control-zones-value feature-value"
                }, this.state.control_zones_value))))
            }, t
        }(d.Component), c = function(e) {
            function t() {
                return this.handleSubmit = _(this.handleSubmit, this), t.__super__.constructor.apply(this, arguments)
            }
            return E(t, e), t.prototype.handleSubmit = function(e) {
                return e.preventDefault(), this.props.submitForm(e)
            }, t.prototype.render = function() {
                return d.createElement("div", {
                    className: "contact-real-form"
                }, this.props.errors ? d.createElement("p", {
                    style: {
                        color: "#ff0"
                    }
                }, "There are some errors, please complete missing fields") : void 0, d.createElement("ul", {
                    className: "form hii",
                    ref: "form"
                }, d.createElement("li", null, d.createElement("label", {
                    htmlFor: "user_email"
                }, "Email *"), d.createElement("input", {
                    type: "email",
                    name: "user_email",
                    id: "user_email",
                    placeholder: "Email *",
                    required: ""
                }))), d.createElement("ul", {
                    className: "form hii"
                }, d.createElement("li", null, d.createElement("label", {
                    htmlFor: "user_name"
                }, "Your Name"), d.createElement("input", {
                    type: "text",
                    id: "user_name",
                    name: "user_name",
                    placeholder: "Your Name"
                }))), d.createElement("ul", {
                    className: "form hii"
                }, d.createElement("li", null, d.createElement("label", {
                    htmlFor: "user_company"
                }, "Company Name"), d.createElement("input", {
                    type: "text",
                    id: "user_company",
                    name: "user_company",
                    placeholder: "Company Name"
                }))), d.createElement("ul", {
                    className: "form vvv"
                }, d.createElement("li", null, d.createElement("button", {
                    "data-gtm-event": "submit-business-form",
                    className: "button primary",
                    onClick: this.handleSubmit
                }, d.createElement("span", {
                    "data-gtm-event": "submit-business-form"
                }, "Request Quote")))))
            }, t
        }(d.Component), o = function(e) {
            function t(e) {
                t.__super__.constructor.call(this, e)
            }
            return E(t, e), t.prototype.render = function() {
                return d.createElement("div", {
                    className: "disclaimer show"
                }, d.createElement("p", null, "We want to support you, so there's an ", d.createElement("b", null, "extra discount"), "for you, ", d.createElement("b", null, "not reflected in the calculator's price"), ". \nA sales agent will get back to you with a special price."))
            }, t
        }(d.Component), window.PreyCalcEmbed = a, n.exports = a
    }), require.register("initialize.cjsx", function(e, t, n) {
        var r;
        r = t("./components/App.cjsx"), document.addEventListener("DOMContentLoaded", function() {
            var e;
            return e = new r, e.render()
        })
    }), require.alias("brunch/node_modules/deppack/node_modules/node-browser-modules/node_modules/process/browser.js", "process"), e = require("process"), require.register("___globals___", function(e, t, n) {})
}(), require("___globals___");